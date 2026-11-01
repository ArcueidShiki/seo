#!/usr/bin/env node
// Builds the publishable site into _site/.
//
//   SITE_URL=https://arcueidshiki.github.io/seo-handbook node scripts/build.mjs [--relative]
//
// Optional env:
//   GSC_VERIFICATION   Google Search Console HTML-tag token  -> <meta name="google-site-verification">
//   BING_VERIFICATION  Bing Webmaster token                   -> <meta name="msvalidate.01">
//   GA_ID              GA4 measurement ID (G-XXXX)            -> gtag snippet on the optimized demo
//   PLAUSIBLE_DOMAIN   domain registered in Plausible          -> Plausible snippet
// --relative           rewrite internal links to relative paths + explicit index.html (for static previews / artifact hosting)
import { readFileSync, writeFileSync, mkdirSync, rmSync, cpSync, readdirSync, statSync, existsSync } from 'node:fs';
import path from 'node:path';
import { marked } from 'marked';

const root = path.resolve(path.dirname(new URL(import.meta.url).pathname), '..');
const RELATIVE_FLAG = process.argv.includes('--relative');
const OUT = path.join(root, RELATIVE_FLAG ? '_preview' : '_site');
const SITE_URL = (process.env.SITE_URL || 'https://arcueidshiki.github.io/seo-handbook').replace(/\/$/, '');
const PREFIX = new URL(SITE_URL).pathname.replace(/\/$/, '');
const RELATIVE = process.argv.includes('--relative');
const today = new Date();
const UPDATED = today.toISOString().slice(0, 10);
const UPDATED_HUMAN = today.toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric' });

const env = process.env;
const verifyMeta = [
  env.GSC_VERIFICATION && `<meta name="google-site-verification" content="${env.GSC_VERIFICATION}">`,
  env.BING_VERIFICATION && `<meta name="msvalidate.01" content="${env.BING_VERIFICATION}">`,
].filter(Boolean).join('\n');
const analytics = [
  env.GA_ID && `<script async src="https://www.googletagmanager.com/gtag/js?id=${env.GA_ID}"></script><script>window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments)}gtag('js',new Date());gtag('config','${env.GA_ID}');</script>`,
  env.PLAUSIBLE_DOMAIN && `<script defer data-domain="${env.PLAUSIBLE_DOMAIN}" src="https://plausible.io/js/script.js"></script>`,
].filter(Boolean).join('\n');

const walk = (d) => readdirSync(d).flatMap(f => { const p = path.join(d, f); return statSync(p).isDirectory() ? walk(p) : [p]; });
const TEXT = /\.(html|xml|txt|webmanifest|json|css|js|svg|md)$/;

function fill(s, base, pathPrefix, fileRel) {
  s = s.replaceAll('{{BASE}}', base).replaceAll('{{UPDATED}}', UPDATED).replaceAll('{{UPDATED_HUMAN}}', UPDATED_HUMAN)
       .replaceAll('{{GSC_META}}', verifyMeta).replaceAll('{{ANALYTICS}}', analytics).replaceAll('{{SITE_URL}}', SITE_URL);
  if (RELATIVE && fileRel) {
    const fromDir = path.posix.dirname(fileRel);
    s = s.replace(/\{\{PATH\}\}(\/[^"'\s)<]*)?/g, (_, p = '/') => {
      let target = path.posix.join(pathPrefix.replace(PREFIX, '') || '/', p).replace(/^\//, '');
      let rel = path.posix.relative(fromDir === '.' ? '' : fromDir, target) || '.';
      if (p.endsWith('/') || p === '/') rel = (rel === '.' ? '' : rel + '/') + 'index.html';
      return rel;
    });
  }
  return s.replaceAll('{{PATH}}', pathPrefix);
}

function copyTree(src, dest, base, pathPrefix) {
  for (const f of walk(src)) {
    const rel = path.relative(src, f);
    const to = path.join(dest, rel);
    mkdirSync(path.dirname(to), { recursive: true });
    if (TEXT.test(f)) writeFileSync(to, fill(readFileSync(f, 'utf8'), base, pathPrefix, path.relative(OUT, to).split(path.sep).join('/')));
    else cpSync(f, to);
  }
}

function sitemapXml(urls) {
  return `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n` +
    urls.map(u => `  <url><loc>${u}</loc><lastmod>${UPDATED}</lastmod></url>`).join('\n') + `\n</urlset>\n`;
}

rmSync(OUT, { recursive: true, force: true });
mkdirSync(OUT, { recursive: true });

// 1) Demo B — optimized
const afterBase = `${SITE_URL}/demos/after`;
copyTree(path.join(root, 'demos/after'), path.join(OUT, 'demos/after'), afterBase, `${PREFIX}/demos/after`);
const afterPages = walk(path.join(OUT, 'demos/after')).filter(f => f.endsWith('index.html'))
  .map(f => afterBase + '/' + path.relative(path.join(OUT, 'demos/after'), path.dirname(f)).split(path.sep).join('/'))
  .map(u => u.replace(/\/$/, '') + '/').sort();
writeFileSync(path.join(OUT, 'demos/after/sitemap.xml'), sitemapXml(afterPages));

// 2) Demo A — unoptimized, copied verbatim (no sitemap, no robots, no placeholders)
cpSync(path.join(root, 'demos/before'), path.join(OUT, 'demos/before'), { recursive: true });

// 3) Handbook markdown -> HTML pages
const hbDir = path.join(root, 'handbook');
const hbFiles = existsSync(hbDir) ? readdirSync(hbDir).filter(f => f.endsWith('.md')).sort() : [];
const shell = readFileSync(path.join(root, 'site/_page.html'), 'utf8');
const nav = hbFiles.map(f => { const t = (readFileSync(path.join(hbDir, f), 'utf8').match(/^#\s+(.+)$/m) || [, f])[1]; return { f, t, slug: f.replace(/\.md$/, '') }; });
for (const { f, t, slug } of nav) {
  const md = readFileSync(path.join(hbDir, f), 'utf8');
  const body = marked.parse(md);
  const html = shell.replaceAll('{{TITLE}}', `${t} – SEO Handbook`).replaceAll('{{DESC}}', `SEO handbook chapter: ${t}`)
    .replace('{{NAV}}', nav.map(n => `<a href="{{PATH}}/handbook/${n.slug}/"${n.slug === slug ? ' aria-current="page"' : ''}>${n.t}</a>`).join(''))
    .replace('{{BODY}}', body).replaceAll('{{CANONICAL}}', `${SITE_URL}/handbook/${slug}/`).replaceAll('{{ROBOTS}}', 'index,follow');
  const to = path.join(OUT, 'handbook', slug, 'index.html');
  mkdirSync(path.dirname(to), { recursive: true });
  writeFileSync(to, fill(html, SITE_URL, PREFIX, `handbook/${slug}/index.html`));
}

// 4) Landing page, tool, reports
copyTree(path.join(root, 'site'), OUT, SITE_URL, PREFIX);
rmSync(path.join(OUT, '_page.html'), { force: true });
{
  const f = path.join(OUT, 'index.html');
  const navHtml = nav.map(n => `<li><a href="{{PATH}}/handbook/${n.slug}/">${n.t}</a></li>`).join('');
  writeFileSync(f, fill(readFileSync(f, 'utf8').replace('{{HANDBOOK_NAV}}', navHtml), SITE_URL, PREFIX, 'index.html'));
}
const checklist = readFileSync(path.join(root, 'checklist/checklist.json'), 'utf8');
const reports = {};
for (const n of ['before', 'after']) { const p = path.join(root, 'reports', `${n}.json`); if (existsSync(p)) reports[n] = JSON.parse(readFileSync(p, 'utf8')); }
// Inline only the Lucide icons the tool uses (ISC-licensed, from lucide-static)
const cl = JSON.parse(checklist);
const iconNames = new Set(['circle', 'globe', 'layers', 'list-checks', 'file-down', 'download', 'rotate-ccw', 'wrench', 'flag',
  ...cl.categories.map(c => c.icon), ...cl.phases.map(p => p.icon).filter(Boolean),
  ...Object.values(cl.platforms).map(p => p.icon).filter(Boolean)]);
const icons = {};
for (const n of iconNames) {
  const f = path.join(root, 'node_modules/lucide-static/icons', `${n}.svg`);
  if (existsSync(f)) icons[n] = readFileSync(f, 'utf8').replace(/<!--[\s\S]*?-->/g, '').replace(/\s*\n\s*/g, ' ').replace(/ class="[^"]*"/, '').trim();
  else console.warn('missing icon', n);
}
const tool = readFileSync(path.join(root, 'tool/index.html'), 'utf8')
  .replace('/*__ICONS__*/null', JSON.stringify(icons))
  .replace('/*__CHECKLIST__*/null', checklist.trim())
  .replace('/*__REPORTS__*/null', JSON.stringify(reports));
mkdirSync(path.join(OUT, 'tool'), { recursive: true });
writeFileSync(path.join(OUT, 'tool/index.html'), fill(tool, SITE_URL, PREFIX, 'tool/index.html'));
if (existsSync(path.join(root, 'reports'))) {
  mkdirSync(path.join(OUT, 'reports'), { recursive: true });
  for (const f of readdirSync(path.join(root, 'reports'))) {
    const src = path.join(root, 'reports', f);
    if (statSync(src).isDirectory()) continue;
    const to = f === 'comparison.html' ? path.join(OUT, 'reports/index.html') : path.join(OUT, 'reports', f);
    writeFileSync(to, TEXT.test(f) ? fill(readFileSync(src, 'utf8'), SITE_URL, PREFIX, path.relative(OUT, to).split(path.sep).join('/')) : readFileSync(src));
  }
}

// 5) Root sitemap (both demos listed so Google discovers both for the ranking experiment) + robots
const rootUrls = [`${SITE_URL}/`, `${SITE_URL}/tool/`, ...nav.map(n => `${SITE_URL}/handbook/${n.slug}/`),
  `${SITE_URL}/demos/before/`, `${SITE_URL}/demos/before/page.html`, ...afterPages.filter(u => !u.includes('404'))];
writeFileSync(path.join(OUT, 'sitemap.xml'), sitemapXml(rootUrls));
writeFileSync(path.join(OUT, '.nojekyll'), '');
if (RELATIVE) {
  // static previews can't resolve directory URLs: make every relative "dir/" link explicit "dir/index.html"
  for (const f of walk(OUT).filter(f => f.endsWith('.html'))) {
    const html = readFileSync(f, 'utf8').replace(/(href|src)="(?!https?:|\/|#|mailto:|data:)([^"]*?\/)"/g, (m, a, u) => `${a}="${u}index.html"`)
      .replace(/(href)="(\.\.?)"/g, (m, a, u) => `${a}="${u}/index.html"`);
    writeFileSync(f, html);
  }
}
console.log(`built ${path.basename(OUT)} for ${SITE_URL}${RELATIVE ? ' (relative links)' : ''}: ${walk(OUT).length} files, ${rootUrls.length} URLs in sitemap`);
