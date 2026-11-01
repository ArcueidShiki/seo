#!/usr/bin/env node
// seo-handbook auditor — crawls a site and scores it against the automatable items in checklist/checklist.json.
//
//   node auditor/audit.mjs --url https://example.com/ --name mysite [--keyword "position size calculator"]
//                          [--site-url https://public.url/prefix] [--max-pages 15] [--no-lighthouse]
//
// --url       where to crawl (a live site or a local server)
// --site-url  the public base URL the HTML was built for; absolute links that start with it are mapped back onto --url
// Output: reports/<name>.json  (consumed by scripts/compare.mjs and the checklist tool)
import { chromium } from 'playwright';
import * as cheerio from 'cheerio';
import { writeFileSync, mkdirSync, readFileSync } from 'node:fs';
import path from 'node:path';

const args = Object.fromEntries(process.argv.slice(2).reduce((a, v, i, arr) => {
  if (v.startsWith('--')) a.push([v.slice(2), arr[i + 1] && !arr[i + 1].startsWith('--') ? arr[i + 1] : true]);
  return a;
}, []));
if (!args.url) { console.error('usage: audit.mjs --url <start url> --name <report name> [--keyword "..."] [--site-url <public base>]'); process.exit(1); }

const root = path.resolve(path.dirname(new URL(import.meta.url).pathname), '..');
const START = new URL(args.url.endsWith('/') ? args.url : args.url + '/');
const SITE_URL = args['site-url'] ? new URL(args['site-url'].endsWith('/') ? args['site-url'] : args['site-url'] + '/') : null;
const NAME = args.name || START.hostname;
const KEYWORD = (args.keyword || '').toLowerCase();
const MAX_PAGES = +(args['max-pages'] || 15);
const checklist = JSON.parse(readFileSync(path.join(root, 'checklist/checklist.json'), 'utf8'));
const itemTitle = Object.fromEntries(checklist.items.map(i => [i.id, i.title]));

// ---------- helpers ----------
const toLocal = (u) => {
  try {
    const url = new URL(u, START);
    if (SITE_URL && url.href.startsWith(SITE_URL.href)) return new URL(url.href.slice(SITE_URL.href.length), START).href;
    return url.href;
  } catch { return null; }
};
const isInternal = (u) => u && u.startsWith(START.href);
const words = (t) => (t.match(/[\p{L}\p{N}]+/gu) || []).reduce((n, w) => n + (/\p{Script=Han}/u.test(w) ? w.length : 1), 0);
const GENERIC_TITLES = ['home', 'untitled', 'react app', 'vite app', 'document', 'index', 'new tab', 'welcome'];
const GENERIC_ANCHORS = ['click here', 'here', 'read more', 'more', 'link', 'this', '点击这里', '这里', '更多'];
async function get(u, method = 'GET') {
  try {
    const r = await fetch(u, { method, redirect: 'follow' });
    const body = method === 'GET' ? await r.text() : '';
    return { status: r.status, ok: r.ok, body, type: r.headers.get('content-type') || '', len: +(r.headers.get('content-length') || body.length) };
  } catch (e) { return { status: 0, ok: false, body: '', err: String(e) }; }
}

// ---------- crawl ----------
const browser = await chromium.launch();
const ctx = await browser.newContext({ userAgent: 'Mozilla/5.0 (compatible; seo-handbook-auditor/1.0; +https://github.com/ArcueidShiki/seo-handbook)' });
const pages = [];
const queue = [START.href];
const seen = new Set();
while (queue.length && pages.length < MAX_PAGES) {
  const url = queue.shift();
  const key = url.split('#')[0];
  if (seen.has(key)) continue;
  seen.add(key);
  const raw = await get(key);
  if (!raw.ok || !/html/.test(raw.type)) { pages.push({ url: key, status: raw.status, error: true }); continue; }
  const pg = await ctx.newPage();
  const imgs = [];
  pg.on('response', async (res) => {
    if (res.request().resourceType() === 'image') {
      let size = +(res.headers()['content-length'] || 0);
      if (!size) { try { size = (await res.body()).length; } catch {} }
      imgs.push({ url: res.url(), size, type: res.headers()['content-type'] || '' });
    }
  });
  await pg.goto(key, { waitUntil: 'networkidle', timeout: 45000 }).catch(() => {});
  await pg.waitForTimeout(2500);
  const rendered = await pg.content();
  await pg.close();
  pages.push({ url: key, status: raw.status, raw: raw.body, rendered, imgs });
  const $ = cheerio.load(rendered);
  $('a[href]').each((_, a) => {
    const l = toLocal($(a).attr('href'));
    if (isInternal(l) && !/\.(png|jpe?g|webp|svg|pdf|xml|txt)$/i.test(l)) queue.push(l.split('#')[0]);
  });
}
await browser.close();
const okPages = pages.filter(p => !p.error);
const home = okPages[0];

// ---------- site-level fetches ----------
const robots = await get(new URL('robots.txt', START).href);
const sitemap = await get(new URL('sitemap.xml', START).href);
const llms = await get(new URL('llms.txt', START).href);
const notFound = await get(new URL(`this-page-should-not-exist-${Date.now()}/`, START).href);

// ---------- checks ----------
const results = [];
const add = (id, status, detail, extra = {}) => results.push({ id, title: itemTitle[id] || id, status, detail, ...extra });
function perPage(id, fn, { only } = {}) {
  const fails = [];
  for (const p of okPages) {
    if (only && !only(p)) continue;
    const r = fn(p, cheerio.load(p.raw), cheerio.load(p.rendered));
    if (r !== true) fails.push(`${new URL(p.url).pathname}: ${r}`);
  }
  return fails;
}
const pageCount = okPages.length;
const report = (id, fails, passMsg) => add(id, fails.length ? 'fail' : 'pass', fails.length ? fails.slice(0, 6).join(' | ') : passMsg);
const indexablePage = (p) => !/noindex/i.test(cheerio.load(p.raw)('meta[name="robots"]').attr('content') || '');

// on-page
report('onpage-title', perPage('onpage-title', (p, $) => {
  const t = $('title').first().text().trim();
  if (!t) return 'missing <title>';
  if (GENERIC_TITLES.includes(t.toLowerCase())) return `generic title "${t}"`;
  const len = [...t].length;
  return len >= 15 && len <= 65 ? true : `title length ${len} (want 15–65 chars)`;
}, { only: indexablePage }), `all ${pageCount} pages have unique-looking 15–65 char titles`);

const titles = okPages.filter(indexablePage).map(p => cheerio.load(p.raw)('title').text().trim());
const dupTitles = titles.filter((t, i) => t && titles.indexOf(t) !== i);
add('onpage-title-unique', dupTitles.length ? 'fail' : 'pass', dupTitles.length ? `duplicate titles: ${[...new Set(dupTitles)].join(', ')}` : 'no duplicate titles');

report('onpage-meta-description', perPage('onpage-meta-description', (p, $) => {
  const d = ($('meta[name="description"]').attr('content') || '').trim();
  if (!d) return 'missing meta description';
  const len = [...d].length;
  return len >= 50 && len <= 165 ? true : `description length ${len} (want 50–165)`;
}, { only: indexablePage }), 'every indexable page has a 50–165 char meta description');

report('onpage-h1', perPage('onpage-h1', (p, $) => {
  const n = $('h1').length;
  return n === 1 ? true : `${n} <h1> in server HTML (want exactly 1)`;
}), 'exactly one H1 in the server-rendered HTML of every page');

report('onpage-heading-hierarchy', perPage('onpage-heading-hierarchy', (p, $, R) => {
  const lv = R('h1,h2,h3,h4,h5,h6').map((_, h) => +h.tagName[1]).get();
  if (!lv.length) return 'no headings at all';
  for (let i = 1; i < lv.length; i++) if (lv[i] - lv[i - 1] > 1) return `skips from h${lv[i - 1]} to h${lv[i]}`;
  return true;
}), 'headings never skip a level');

if (KEYWORD && home) {
  const $ = cheerio.load(home.raw);
  const where = {
    title: $('title').text().toLowerCase().includes(KEYWORD),
    h1: $('h1').first().text().toLowerCase().includes(KEYWORD),
    description: ($('meta[name="description"]').attr('content') || '').toLowerCase().includes(KEYWORD),
    first100words: $('body').text().replace(/\s+/g, ' ').toLowerCase().split(' ').slice(0, 160).join(' ').includes(KEYWORD),
  };
  const miss = Object.entries(where).filter(([, v]) => !v).map(([k]) => k);
  add('onpage-keyword-placement', miss.length === 0 ? 'pass' : miss.length <= 1 ? 'warn' : 'fail',
    miss.length ? `"${KEYWORD}" missing from: ${miss.join(', ')}` : `"${KEYWORD}" appears in title, H1, description and opening text`, { where });
}

// technical
report('tech-html-lang', perPage('tech-html-lang', (p, $) => $('html').attr('lang') ? true : 'no <html lang>'), 'every page declares <html lang>');
report('tech-viewport', perPage('tech-viewport', (p, $) => /width=device-width/.test($('meta[name="viewport"]').attr('content') || '') ? true : 'no responsive viewport meta'), 'responsive viewport on every page');
report('tech-canonical', perPage('tech-canonical', (p, $) => {
  const c = $('link[rel="canonical"]').attr('href');
  if (!c) return 'no canonical';
  if (!/^https?:\/\//.test(c)) return 'canonical is not absolute';
  const mapped = toLocal(c);
  return mapped && mapped.split('#')[0] === p.url ? true : `canonical points elsewhere (${c})`;
}, { only: indexablePage }), 'every indexable page has an absolute, self-referencing canonical');
const noindexed = okPages.filter(p => !indexablePage(p) && !/404/.test(p.url));
add('tech-indexable', noindexed.length ? 'fail' : 'pass', noindexed.length ? `noindex on: ${noindexed.map(p => p.url).join(', ')}` : 'no important page carries noindex');

const ssrFails = perPage('tech-ssr-content', (p, $, R) => {
  ['script', 'style', 'noscript'].forEach(t => { $(t).remove(); R(t).remove(); });
  const rawW = words($('body').text()), renW = words(R('body').text());
  if (rawW < 80) return `only ${rawW} words in HTML before JavaScript runs (rendered: ${renW})`;
  return rawW >= renW * 0.7 ? true : `${Math.round(rawW / Math.max(renW, 1) * 100)}% of content is in the initial HTML`;
});
report('tech-ssr-content', ssrFails, 'main content is present in the HTML without JavaScript (SSR/SSG)');

const badUrls = new Set();
okPages.forEach(p => {
  const $ = cheerio.load(p.rendered);
  $('a[href]').each((_, a) => {
    const l = toLocal($(a).attr('href'));
    if (isInternal(l)) { const u = new URL(l); if (u.search || /[A-Z_]/.test(u.pathname) || /\.html?$/.test(u.pathname) && !/index\.html$/.test(u.pathname)) badUrls.add(u.pathname + u.search); }
  });
});
add('tech-clean-urls', badUrls.size ? 'fail' : 'pass', badUrls.size ? `non-clean internal URLs: ${[...badUrls].slice(0, 5).join(', ')}` : 'internal URLs are lowercase, hyphenated, no query strings');

const hasRobots = robots.ok && /user-agent/i.test(robots.body);
const blocksAll = /user-agent:\s*\*\s*[\r\n]+\s*disallow:\s*\/\s*$/im.test(robots.body);
add('tech-robots-txt', hasRobots && !blocksAll ? (/sitemap:/i.test(robots.body) ? 'pass' : 'warn') : 'fail',
  !robots.ok ? `robots.txt returned HTTP ${robots.status}` : blocksAll ? 'robots.txt blocks all crawlers' : /sitemap:/i.test(robots.body) ? 'robots.txt present, allows crawling, declares Sitemap' : 'robots.txt has no Sitemap: line');

let smUrls = [];
if (sitemap.ok && /<urlset/.test(sitemap.body)) smUrls = [...sitemap.body.matchAll(/<loc>([^<]+)<\/loc>/g)].map(m => m[1].trim());
const smLastmod = /<lastmod>/.test(sitemap.body);
let smBroken = [];
for (const u of smUrls.slice(0, 30)) { const r = await get(toLocal(u), 'HEAD'); if (r.status >= 400 || r.status === 0) smBroken.push(u); }
const crawledNotInSm = okPages.filter(indexablePage).map(p => p.url).filter(u => !smUrls.map(toLocal).includes(u));
add('tech-xml-sitemap', !smUrls.length ? 'fail' : (smBroken.length || !smLastmod) ? 'warn' : 'pass',
  !smUrls.length ? `no valid sitemap.xml (HTTP ${sitemap.status})` : `${smUrls.length} URLs${smLastmod ? ', with <lastmod>' : ', no <lastmod>'}${smBroken.length ? `; broken: ${smBroken.join(', ')}` : ''}${crawledNotInSm.length ? `; crawled but not listed: ${crawledNotInSm.length}` : ''}`);

const hreflangPages = okPages.filter(p => cheerio.load(p.raw)('link[rel="alternate"][hreflang]').length);
if (hreflangPages.length) {
  const fails = perPage('tech-hreflang', (p, $) => {
    const alts = $('link[rel="alternate"][hreflang]').map((_, l) => ({ lang: $(l).attr('hreflang'), href: toLocal($(l).attr('href')) })).get();
    if (!alts.length) return true;
    if (!alts.some(a => a.lang === 'x-default')) return 'no x-default';
    if (!alts.some(a => a.href === p.url)) return 'no self-referencing hreflang';
    for (const a of alts) {
      const target = okPages.find(q => q.url === a.href);
      if (target && !cheerio.load(target.raw)(`link[rel="alternate"][hreflang]`).filter((_, l) => toLocal(cheerio.load(target.raw)(l).attr('href')) === p.url).length) return `no return tag from ${a.lang}`;
    }
    return true;
  }, { only: p => cheerio.load(p.raw)('link[rel="alternate"][hreflang]').length });
  report('tech-hreflang', fails, 'hreflang tags are reciprocal with x-default');
} else add('tech-hreflang', 'na', 'single-language site (no hreflang needed)');

add('tech-404', notFound.status === 404 ? 'pass' : 'fail', `missing URL returned HTTP ${notFound.status}${notFound.status === 404 && /href=/.test(notFound.body) ? ' with links back into the site' : ''}`);
add('tech-favicon', home && cheerio.load(home.raw)('link[rel~="icon"]').length ? 'pass' : 'fail', home && cheerio.load(home.raw)('link[rel~="icon"]').length ? 'favicon declared' : 'no <link rel="icon"> (browser tab + Google result icon)');

// social / SERP
report('social-open-graph', perPage('social-open-graph', (p, $) => {
  const need = ['og:title', 'og:description', 'og:image', 'og:url'].filter(k => !$(`meta[property="${k}"]`).attr('content'));
  return need.length ? `missing ${need.join(', ')}` : true;
}, { only: indexablePage }), 'og:title / og:description / og:image / og:url on every page');
report('social-twitter-card', perPage('social-twitter-card', (p, $) => $('meta[name="twitter:card"]').attr('content') ? true : 'no twitter:card', { only: indexablePage }), 'twitter:card on every page');

const schemaTypes = new Set();
const jsonFails = perPage('serp-structured-data', (p, $) => {
  const blocks = $('script[type="application/ld+json"]');
  if (!blocks.length) return 'no JSON-LD';
  for (const b of blocks.toArray()) {
    try {
      const j = JSON.parse($(b).text());
      const walk = (o) => { if (Array.isArray(o)) o.forEach(walk); else if (o && typeof o === 'object') { if (o['@type']) [].concat(o['@type']).forEach(t => schemaTypes.add(t)); Object.values(o).forEach(walk); } };
      walk(j);
    } catch (e) { return 'invalid JSON-LD: ' + e.message.slice(0, 60); }
  }
  return true;
}, { only: indexablePage });
report('serp-structured-data', jsonFails, `valid JSON-LD on every page; types: ${[...schemaTypes].join(', ')}`);
add('serp-breadcrumbs', schemaTypes.has('BreadcrumbList') ? 'pass' : 'fail', schemaTypes.has('BreadcrumbList') ? 'BreadcrumbList schema present' : 'no BreadcrumbList schema');
add('serp-entity-schema', ['Organization', 'WebSite'].every(t => schemaTypes.has(t)) ? 'pass' : 'fail', `Organization: ${schemaTypes.has('Organization')}, WebSite: ${schemaTypes.has('WebSite')}`);

// images
const imgAlt = perPage('img-alt', (p, $, R) => {
  const missing = R('img').filter((_, i) => !(R(i).attr('alt') || '').trim()).length;
  return missing ? `${missing} <img> without alt` : true;
});
report('img-alt', imgAlt, 'every image has descriptive alt text');
report('img-dimensions', perPage('img-dimensions', (p, $, R) => {
  const missing = R('img').filter((_, i) => !(R(i).attr('width') && R(i).attr('height'))).length;
  return missing ? `${missing} <img> without width/height (layout shift)` : true;
}), 'every image declares width/height');
const heavy = okPages.flatMap(p => p.imgs).filter(i => i.size > 200 * 1024 || /png|jpeg/.test(i.type) && i.size > 100 * 1024);
add('img-optimized', heavy.length ? 'fail' : 'pass', heavy.length ? heavy.map(i => `${new URL(i.url).pathname} ${(i.size / 1024).toFixed(0)}KB ${i.type}`).slice(0, 4).join(' | ') : 'all images ≤200KB, modern formats');

// links & content
report('links-internal', perPage('links-internal', (p, $, R) => {
  const n = new Set(R('a[href]').map((_, a) => toLocal(R(a).attr('href'))).get().filter(isInternal).map(u => u.split('#')[0]).filter(u => u !== p.url)).size;
  return n >= 2 ? true : `only ${n} internal links to other pages`;
}), 'every page links to ≥2 other internal pages');
report('links-anchor-text', perPage('links-anchor-text', (p, $, R) => {
  const bad = R('a').filter((_, a) => GENERIC_ANCHORS.includes(R(a).text().trim().toLowerCase())).map((_, a) => R(a).text().trim()).get();
  return bad.length ? `generic anchors: ${bad.join(', ')}` : true;
}), 'no "click here"-style anchor text');
add('links-external-citation', okPages.some(p => { const $ = cheerio.load(p.raw); return $('a[href^="http"]').filter((_, a) => !isInternal(toLocal($(a).attr('href'))) && !/github\.com/.test($(a).attr('href'))).length > 0; }) ? 'pass' : 'fail', 'cites at least one external authoritative source');

if (home) {
  const R = cheerio.load(home.rendered); R('script,style,noscript').remove();
  const w = words(R('main').text() || R('body').text());
  add('content-depth', w >= 400 ? 'pass' : w >= 200 ? 'warn' : 'fail', `${w} words of visible main content on the homepage`);
}
const eeat = okPages.some(p => /\/about\/?$/.test(new URL(p.url).pathname)) && okPages.some(p => cheerio.load(p.raw)('time[datetime]').length || /dateModified/.test(p.raw));
add('content-eeat-signals', eeat ? 'pass' : 'fail', eeat ? 'About page + visible updated dates found' : 'no About page and/or no visible dates/authorship');

// GEO
const faq = schemaTypes.has('FAQPage') || okPages.some(p => cheerio.load(p.raw)('h2,h3,summary').filter((_, h) => /\?|？$/.test(cheerio.load(p.raw)(h).text().trim())).length >= 3);
add('geo-faq-blocks', faq ? 'pass' : 'fail', faq ? 'question-style headings / FAQPage found (easy for AI answers to quote)' : 'no Q&A-format content');
if (home) {
  const $ = cheerio.load(home.raw);
  const firstP = $('h1').first().nextAll('p').first().text() || $('main p').first().text();
  const answerFirst = firstP && words(firstP) <= 80 && (/=|is |are |means|是|指/.test(firstP));
  add('geo-answer-first', answerFirst ? 'pass' : 'fail', answerFirst ? `opening paragraph answers directly: "${firstP.trim().slice(0, 110)}…"` : 'no concise definitional answer right after the H1');
}
add('geo-llms-txt', llms.ok && /^#\s/m.test(llms.body) && /\]\(https?:/.test(llms.body) ? 'pass' : 'fail', llms.ok ? 'llms.txt present with title and links' : `llms.txt HTTP ${llms.status}`);
const aiBots = ['GPTBot', 'ClaudeBot', 'PerplexityBot', 'Google-Extended', 'OAI-SearchBot'];
const blockedBots = aiBots.filter(b => new RegExp(`user-agent:\\s*${b}\\s*[\\r\\n]+\\s*disallow:\\s*/\\s*$`, 'im').test(robots.body));
add('geo-ai-crawlers', !robots.ok ? 'warn' : blockedBots.length || blocksAll ? 'fail' : 'pass', !robots.ok ? 'no robots.txt — AI crawlers allowed by default but not explicitly' : blockedBots.length ? `blocked: ${blockedBots.join(', ')}` : `AI crawlers allowed (${aiBots.filter(b => robots.body.includes(b)).length} named explicitly)`);

// analytics / verification — detected, but these need the owner's accounts
const anyRaw = okPages.map(p => p.raw).join('\n');
const analytics = /googletagmanager\.com|gtag\(|plausible\.io|umami|clarity\.ms|cloudflareinsights/.test(anyRaw);
add('analytics-installed', analytics ? 'pass' : 'manual', analytics ? 'analytics script detected' : 'no analytics detected — add GA4 / Plausible / Umami / Clarity ID at build time (needs your account)');
const gsc = /google-site-verification/.test(home?.raw || '');
add('indexing-gsc', gsc ? 'pass' : 'manual', gsc ? 'Google Search Console verification tag present' : 'verify the property in Google Search Console (needs your Google account)');

// ---------- Lighthouse ----------
let lighthouse = null;
if (!args['no-lighthouse'] && home) {
  try {
    const { default: lh } = await import('lighthouse');
    const chromeLauncher = await import('chrome-launcher');
    const chrome = await chromeLauncher.launch({ chromePath: chromium.executablePath(), chromeFlags: ['--headless=new', '--no-sandbox', '--disable-gpu'] });
    const run = async (formFactor) => {
      const config = formFactor === 'desktop'
        ? { extends: 'lighthouse:default', settings: { formFactor: 'desktop', screenEmulation: { mobile: false, width: 1350, height: 940, deviceScaleFactor: 1, disabled: false }, throttlingMethod: 'simulate' } }
        : { extends: 'lighthouse:default' };
      const r = await lh(home.url, { port: chrome.port, output: 'json', logLevel: 'error' }, config);
      const l = r.lhr;
      const a = (k) => l.audits[k]?.numericValue;
      return {
        performance: Math.round(l.categories.performance.score * 100),
        accessibility: Math.round(l.categories.accessibility.score * 100),
        bestPractices: Math.round(l.categories['best-practices'].score * 100),
        seo: Math.round(l.categories.seo.score * 100),
        lcpMs: Math.round(a('largest-contentful-paint')), fcpMs: Math.round(a('first-contentful-paint')),
        tbtMs: Math.round(a('total-blocking-time')), cls: +(a('cumulative-layout-shift') || 0).toFixed(3),
        totalKB: Math.round(a('total-byte-weight') / 1024),
        failedSeoAudits: l.categories.seo.auditRefs.filter(x => l.audits[x.id].score === 0).map(x => l.audits[x.id].title),
      };
    };
    lighthouse = { mobile: await run('mobile'), desktop: await run('desktop') };
    await chrome.kill();
  } catch (e) { console.error('lighthouse failed:', e.message); }
}
if (lighthouse) {
  const m = lighthouse.mobile;
  add('perf-lighthouse', m.performance >= 90 ? 'pass' : m.performance >= 50 ? 'warn' : 'fail', `mobile Lighthouse performance ${m.performance}, SEO ${m.seo}, accessibility ${m.accessibility}, best practices ${m.bestPractices}`);
  add('perf-core-web-vitals', m.lcpMs <= 2500 && m.cls <= 0.1 && m.tbtMs <= 200 ? 'pass' : 'fail', `lab LCP ${(m.lcpMs / 1000).toFixed(1)}s (≤2.5s), CLS ${m.cls} (≤0.1), TBT ${m.tbtMs}ms (≤200ms; proxy for INP)`);
  add('perf-page-weight', m.totalKB <= 1000 ? 'pass' : 'fail', `homepage transfers ${m.totalKB} KB (budget ≤1000 KB)`);
}

// ---------- SERP snippet as Google would likely build it ----------
let serp = null;
if (home) {
  const $ = cheerio.load(home.raw), R = cheerio.load(home.rendered);
  const desc = $('meta[name="description"]').attr('content');
  R('script,style').remove();
  serp = {
    title: $('title').text().trim() || '(no title — Google would invent one from page text)',
    description: desc || ('(no meta description — Google picks page text) ' + ((R('body').html() || '').replace(/<[^>]+>/g, ' ').replace(/&amp;/g, '&').replace(/\s+/g, ' ').trim().slice(0, 140) || '— empty without JavaScript —')),
    url: SITE_URL ? new URL(new URL(home.url).pathname.slice(START.pathname.length), SITE_URL).href : home.url,
    siteName: $('meta[property="og:site_name"]').attr('content') || null,
    favicon: !!$('link[rel~="icon"]').length,
    breadcrumbs: schemaTypes.has('BreadcrumbList'),
    richResultTypes: [...schemaTypes],
    ogImage: !!$('meta[property="og:image"]').attr('content'),
  };
}

// ---------- score ----------
const scored = results.filter(r => ['pass', 'fail', 'warn'].includes(r.status));
const score = Math.round(scored.reduce((s, r) => s + (r.status === 'pass' ? 1 : r.status === 'warn' ? 0.5 : 0), 0) / scored.length * 100);
const out = {
  name: NAME, url: START.href, publicUrl: SITE_URL?.href || START.href, keyword: KEYWORD || null,
  date: new Date().toISOString(), pagesCrawled: okPages.map(p => p.url.replace(START.href, '/')),
  score, counts: Object.fromEntries(['pass', 'warn', 'fail', 'manual', 'na'].map(s => [s, results.filter(r => r.status === s).length])),
  checks: results, lighthouse, serp,
};
mkdirSync(path.join(root, 'reports'), { recursive: true });
const file = path.join(root, 'reports', `${NAME}.json`);
writeFileSync(file, JSON.stringify(out, null, 2));
console.log(`${NAME}: score ${score}/100 — ${out.counts.pass} pass, ${out.counts.warn} warn, ${out.counts.fail} fail, ${out.counts.manual} manual · ${okPages.length} pages · ${file}`);
if (lighthouse) console.log(`  Lighthouse mobile: perf ${lighthouse.mobile.performance} · SEO ${lighthouse.mobile.seo} · a11y ${lighthouse.mobile.accessibility} · BP ${lighthouse.mobile.bestPractices}`);
