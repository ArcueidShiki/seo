#!/usr/bin/env node
// Builds reports/comparison.html + reports/comparison.md from reports/before.json and reports/after.json.
import { readFileSync, writeFileSync } from 'node:fs';
import path from 'node:path';

const root = path.resolve(path.dirname(new URL(import.meta.url).pathname), '..');
const B = JSON.parse(readFileSync(path.join(root, 'reports/before.json'), 'utf8'));
const A = JSON.parse(readFileSync(path.join(root, 'reports/after.json'), 'utf8'));
const CL = JSON.parse(readFileSync(path.join(root, 'checklist/checklist.json'), 'utf8'));
const cats = Object.fromEntries(CL.categories.map(c => [c.id, c]));
const itemCat = Object.fromEntries(CL.items.map(i => [i.id, i.cat]));
const esc = s => String(s ?? '').replace(/[&<>"]/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]));
const LBL = { pass: '✅ 通过', fail: '❌ 未通过', warn: '⚠️ 部分', manual: '🔧 需人工', na: '— 不适用' };
const ids = [...new Set([...A.checks, ...B.checks].map(c => c.id))];
const order = CL.categories.map(c => c.id);
ids.sort((x, y) => order.indexOf(itemCat[x]) - order.indexOf(itemCat[y]));
const byId = (r, id) => r.checks.find(c => c.id === id) || { status: 'na', detail: '' };
const flipped = ids.filter(id => byId(B, id).status !== 'pass' && byId(A, id).status === 'pass').length;
const KW = A.keyword || 'vexlora position size calculator';

const lhRow = (k, label, fmt = v => v, better = 'high') => {
  const b = B.lighthouse?.mobile?.[k], a = A.lighthouse?.mobile?.[k];
  return { label, b: b == null ? '—' : fmt(b), a: a == null ? '—' : fmt(a) };
};
const lh = [
  lhRow('performance', 'Lighthouse 性能 Performance'), lhRow('seo', 'Lighthouse SEO'),
  lhRow('accessibility', 'Lighthouse 无障碍 Accessibility'), lhRow('bestPractices', 'Lighthouse 最佳实践 Best Practices'),
  lhRow('lcpMs', 'LCP 最大内容绘制 (≤2.5s)', v => (v / 1000).toFixed(1) + ' s'), lhRow('tbtMs', 'TBT 总阻塞时间 (≤200ms)', v => v + ' ms'),
  lhRow('cls', 'CLS 累计布局偏移 (≤0.1)'), lhRow('totalKB', '页面总大小', v => v + ' KB'),
];

function serpCard(r, label) {
  const s = r.serp || {};
  const u = new URL(s.url || r.publicUrl);
  const crumbs = s.breadcrumbs ? `${u.hostname} › … › ${u.pathname.split('/').filter(Boolean).slice(-1)[0] || ''}` : (u.hostname + u.pathname);
  const rich = (s.richResultTypes || []).filter(t => ['WebApplication', 'SoftwareApplication', 'FAQPage', 'BreadcrumbList', 'Article', 'Organization'].includes(t));
  return `<div class="serp">
    <div class="serp-label">${label}</div>
    <div class="serp-site"><span class="fav ${s.favicon ? 'on' : ''}">${s.favicon ? '◆' : '🌐'}</span><div><div class="sn">${esc(s.siteName || u.hostname)}</div><div class="su">${esc(crumbs)}</div></div></div>
    <div class="st">${esc(s.title)}</div>
    <div class="sd">${esc(String(s.description).slice(0, 165))}${String(s.description).length > 165 ? '…' : ''}</div>
    <div class="srich">${rich.length ? rich.map(t => `<span>${t}</span>`).join('') : '<em>无结构化数据 → 无富结果资格</em>'}${s.ogImage ? '<span class="og">社交分享卡片 ✓</span>' : '<span class="og no">社交分享卡片 ✗</span>'}</div>
  </div>`;
}

const rows = ids.map(id => {
  const b = byId(B, id), a = byId(A, id), c = cats[itemCat[id]];
  return `<tr><td>${c ? esc(c.name) : ''}</td><td><b>${esc(a.title || b.title)}</b><div class="id">${id}</div></td>
  <td class="st-${b.status}">${LBL[b.status]}<div class="d">${esc(b.detail)}</div></td>
  <td class="st-${a.status}">${LBL[a.status]}<div class="d">${esc(a.detail)}</div></td></tr>`;
}).join('\n');

const html = `<!DOCTYPE html>
<html lang="zh-CN">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>SEO 优化前 vs 优化后：审计对比报告 – SEO Handbook</title>
<meta name="description" content="同一个产品的两个 demo 站：未做 SEO 与按 checklist 优化后，逐条审计结果、Lighthouse 分数、搜索结果片段预览与 Google 排名实验方法。">
<meta name="robots" content="noindex, follow">
<link rel="canonical" href="{{SITE_URL}}/reports/">
<link rel="icon" href="{{PATH}}/favicon.svg" type="image/svg+xml">
<style>
:root{--ink:#111827;--muted:#6b7280;--line:#e5e7eb;--brand:#4f46e5}
*{box-sizing:border-box}body{margin:0;font:15px/1.65 system-ui,-apple-system,"Segoe UI","PingFang SC","Microsoft YaHei",sans-serif;color:var(--ink);background:#f6f7fb}
a{color:var(--brand)}main{max-width:1200px;margin:0 auto;padding:24px 20px 60px}
.top a{margin-right:16px}
h1{font-size:30px;line-height:1.25;margin:10px 0}h2{margin-top:36px}
.kpis{display:grid;grid-template-columns:repeat(4,1fr);gap:12px;margin:18px 0}
.kpi{background:#fff;border:1px solid var(--line);border-radius:14px;padding:14px 16px}
.kpi .v{font-size:30px;font-weight:800}.kpi .l{color:var(--muted);font-size:13px}
.bad{color:#dc2626}.good{color:#059669}
.grid2{display:grid;grid-template-columns:1fr 1fr;gap:16px}
.card{background:#fff;border:1px solid var(--line);border-radius:14px;padding:16px 18px}
table{border-collapse:collapse;width:100%;background:#fff;border:1px solid var(--line);border-radius:12px;overflow:hidden;font-size:13.5px}
th,td{border-bottom:1px solid var(--line);padding:8px 10px;text-align:left;vertical-align:top}th{background:#f9fafb;position:sticky;top:0}
td .d{color:var(--muted);font-size:12px;margin-top:2px;word-break:break-word}td .id{color:#9ca3af;font-size:11px;font-family:ui-monospace,monospace}
.st-pass{background:#f0fdf4}.st-fail{background:#fef2f2}.st-warn{background:#fffbeb}.st-manual{background:#eef2ff}
.serp{background:#fff;border:1px solid var(--line);border-radius:14px;padding:16px 20px;font-family:arial,sans-serif}
.serp-label{font:600 12px system-ui;color:var(--muted);text-transform:uppercase;letter-spacing:.06em;margin-bottom:10px}
.serp-site{display:flex;gap:10px;align-items:center}.fav{width:28px;height:28px;border-radius:50%;background:#f1f3f4;display:flex;align-items:center;justify-content:center;font-size:13px;color:#999}.fav.on{background:#ccfbf1;color:#0f766e}
.sn{font-size:14px;color:#202124}.su{font-size:12px;color:#4d5156}
.st{font-size:20px;color:#1a0dab;margin:6px 0 2px;line-height:1.3}.sd{font-size:14px;color:#4d5156;line-height:1.58}
.srich{margin-top:8px;display:flex;flex-wrap:wrap;gap:6px}.srich span{font:12px system-ui;background:#eef2ff;color:#3730a3;border-radius:6px;padding:1px 7px}
.srich .og{background:#dcfce7;color:#166534}.srich .og.no{background:#fee2e2;color:#991b1b}.srich em{font:12px system-ui;color:#991b1b}
.note{background:#fffbeb;border:1px solid #fde68a;border-radius:12px;padding:12px 16px}
ol li,ul li{margin:4px 0}
code{background:#eef0f4;padding:1px 5px;border-radius:4px}
@media(max-width:820px){.kpis,.grid2{grid-template-columns:1fr 1fr}.grid2{grid-template-columns:1fr}}
</style>
</head>
<body><main>
<nav class="top"><a href="{{PATH}}/">← SEO Handbook</a><a href="{{PATH}}/tool/">Checklist 工具</a><a href="{{PATH}}/demos/before/">Demo A（优化前）</a><a href="{{PATH}}/demos/after/">Demo B（优化后）</a></nav>
<h1>同一个产品，SEO 优化前 vs 优化后</h1>
<p>两个 demo 是同一个虚构产品（仓位计算器），部署在同一个域名下，所以域名权重、主机和外链都相同，唯一的变量是页面本身的 SEO 实现。Demo A 是常见的"AI 生成单页应用"写法，Demo B 按本仓库的 checklist 逐条实现。下面的结果全部由 <code>auditor/audit.mjs</code> 在云端用 Chromium + Lighthouse 实测得出，生成于 ${new Date(A.date).toISOString().slice(0, 16).replace('T', ' ')} UTC。</p>

<div class="kpis">
  <div class="kpi"><div class="v"><span class="bad">${B.score}</span> → <span class="good">${A.score}</span></div><div class="l">Checklist 自动审计得分 / 100</div></div>
  <div class="kpi"><div class="v">${flipped}</div><div class="l">条目从"未通过"变为"通过"</div></div>
  <div class="kpi"><div class="v"><span class="bad">${B.lighthouse?.mobile?.seo ?? '—'}</span> → <span class="good">${A.lighthouse?.mobile?.seo ?? '—'}</span></div><div class="l">Lighthouse SEO（移动端）</div></div>
  <div class="kpi"><div class="v"><span class="bad">${B.lighthouse?.mobile?.performance ?? '—'}</span> → <span class="good">${A.lighthouse?.mobile?.performance ?? '—'}</span></div><div class="l">Lighthouse 性能（移动端）</div></div>
</div>

<h2>1. 在 Google 搜索结果里会长什么样</h2>
<p>根据两个站的 HTML 推算 Google 最可能生成的结果片段（标题和描述来自页面标签；Google 有时会改写，但缺标签时一定会自己从正文里拼）。</p>
<div class="grid2">${serpCard(B, 'Demo A · 优化前')}${serpCard(A, 'Demo B · 优化后')}</div>

<h2>2. 速度与 Core Web Vitals（Lighthouse 移动端实验室数据）</h2>
<table><thead><tr><th>指标</th><th>Demo A 优化前</th><th>Demo B 优化后</th></tr></thead><tbody>
${lh.map(r => `<tr><td>${r.label}</td><td>${r.b}</td><td>${r.a}</td></tr>`).join('')}
</tbody></table>
${B.lighthouse?.mobile?.failedSeoAudits?.length ? `<p>Demo A 未通过的 Lighthouse SEO 审计项：${B.lighthouse.mobile.failedSeoAudits.map(esc).join('、')}</p>` : ''}

<h2>3. 逐条对照 checklist（${ids.length} 条可自动检测的条目）</h2>
<table><thead><tr><th style="width:110px">类别</th><th style="width:250px">Checklist 条目</th><th>Demo A 优化前</th><th>Demo B 优化后</th></tr></thead><tbody>
${rows}
</tbody></table>
<p>"🔧 需人工"的条目（例如 Google Search Console 验证、GA4）要用你自己的账号完成，在构建时通过环境变量 <code>GSC_VERIFICATION</code> / <code>GA_ID</code> 注入。其余 checklist 条目（关键词研究、外链、平台运营等）无法从页面代码自动判断，在 <a href="{{PATH}}/tool/">Checklist 工具</a>里手动勾选。</p>

<h2>4. 预期的 SEO 结果（部署后）</h2>
<table><thead><tr><th>维度</th><th>Demo A 优化前</th><th>Demo B 优化后</th></tr></thead><tbody>
<tr><td>能否被收录</td><td>能被发现但风险高：首屏 HTML 里没有正文，要等 Google 的 JS 渲染队列（可能延迟几天），渲染后也只有约几十个词</td><td>首次抓取就能拿到完整正文、canonical、sitemap，收录路径最短</td></tr>
<tr><td>标题与描述</td><td>标题是 "Home"，Google 会自己改写；没有 description，片段从零散文字里截取</td><td>标题和描述都包含目标词，长度合规，Google 大概率直接采用</td></tr>
<tr><td>富结果与实体</td><td>无结构化数据 → 没有面包屑、站点名、应用信息</td><td>Organization / WebSite / WebApplication / BreadcrumbList / FAQPage / Article；面包屑和站点名有资格显示。注意：自 2023 年起 Google 只给政府/医疗类权威站点展示 FAQ 富结果，这里 FAQPage 主要服务 AI 搜索和语义理解</td></tr>
<tr><td>相关查询覆盖</td><td>一个薄页面，只可能排品牌词</td><td>工具页 + 指南页 + 中文页 + About 页，可以覆盖 "position size calculator"、"position sizing rules"、"仓位计算器" 等长尾词</td></tr>
<tr><td>AI 搜索（GEO）</td><td>没有 llms.txt；内容要执行 JS 才能看到，多数 AI 爬虫不执行 JS → 基本不可能被引用</td><td>开头一句话给出公式答案 + FAQ + llms.txt + 显式放行 GPTBot/ClaudeBot/PerplexityBot，有被 ChatGPT/Perplexity 引用的资格</td></tr>
<tr><td>点击率与转化</td><td>移动端无 viewport，页面要拖着看；3 MB 大图 + 900ms 主线程阻塞</td><td>移动端友好、首屏秒开，社交分享有大图卡片</td></tr>
</tbody></table>

<h2>5. 在 Google 上验证排名：实验步骤</h2>
<div class="note"><b>为什么今天还看不到 Google 排名：</b>新站从提交到被收录通常要几天到几周，排名稳定还要更久。没有任何办法能在部署当天看到真实排名，所以我把实验设计成可以复现、可以记录的。</div>
<ol>
<li><b>目标查询：</b><code>${esc(KW)}</code>。"Vexlora" 是编造的品牌名，网上原本没有结果，所以这个查询下只有这两个 demo 在竞争，排名差异只来自 SEO 实现。另外观察非品牌查询 <code>position sizing rules 1% risk</code>（只有 Demo B 有对应页面）。</li>
<li><b>验证站点：</b>在 Google Search Console 添加"网址前缀"资源 <code>{{SITE_URL}}/</code>，选 HTML 标记验证，把 token 设为环境变量 <code>GSC_VERIFICATION</code> 后重新构建部署（GitHub 仓库 Settings → Secrets and variables → Actions → Variables）。</li>
<li><b>提交 sitemap：</b>在 GSC 里提交 <code>{{SITE_URL}}/sitemap.xml</code>（两个 demo 的 URL 都在里面）。</li>
<li><b>请求编入索引：</b>用"网址检查"分别检查 <code>{{SITE_URL}}/demos/before/</code> 和 <code>{{SITE_URL}}/demos/after/</code>，点"请求编入索引"。在"查看已抓取的网页 → 屏幕截图/HTML"里可以直接看到：Demo A 抓到的 HTML 几乎是空的。</li>
<li><b>Bing：</b>在 Bing Webmaster Tools 用"从 GSC 导入"一键添加；Bing 的数据也会供给 ChatGPT 搜索等 AI 产品。</li>
<li><b>记录：</b>第 3、7、14、28 天分别搜索目标查询（用无痕窗口，地区设为 US），并查看 GSC → 效果 → 查询，把展示次数、点击、平均排名记录到下表。也可以用 <code>site:arcueidshiki.github.io/seo-handbook/demos</code> 查看收录了哪些页面。</li>
</ol>
<table><thead><tr><th>日期</th><th>查询</th><th>Demo A 是否收录 / 排名</th><th>Demo B 是否收录 / 排名</th><th>GSC 展示 / 点击（A｜B）</th></tr></thead><tbody>
<tr><td>D+3</td><td>${esc(KW)}</td><td></td><td></td><td></td></tr><tr><td>D+7</td><td>${esc(KW)}</td><td></td><td></td><td></td></tr><tr><td>D+14</td><td>${esc(KW)}</td><td></td><td></td><td></td></tr><tr><td>D+28</td><td>${esc(KW)}</td><td></td><td></td><td></td></tr>
</tbody></table>
<p><b>预期：</b>Demo B 先被收录，并在目标查询排第 1（含站点名和面包屑）。Demo A 要么晚收录，要么因为内容太薄被归为"已抓取 - 尚未编入索引"，即使收录也排在 B 后面，标题显示为 Google 改写后的文字。这是基于审计结果的预测，以实际观测为准。</p>
</main></body></html>`;
writeFileSync(path.join(root, 'reports/comparison.html'), html);

const md = [`# SEO Before vs After — 审计对比`, '', `生成时间：${A.date}`, '',
  `| | Demo A 优化前 | Demo B 优化后 |`, `|---|---|---|`,
  `| Checklist 自动审计得分 | ${B.score}/100 | ${A.score}/100 |`,
  ...lh.map(r => `| ${r.label} | ${r.b} | ${r.a} |`), '',
  `## 逐条结果`, '', `| 条目 | 优化前 | 优化后 |`, `|---|---|---|`,
  ...ids.map(id => { const b = byId(B, id), a = byId(A, id); return `| ${a.title || b.title} (\`${id}\`) | ${LBL[b.status]} ${b.detail.replace(/\|/g, '/')} | ${LBL[a.status]} ${a.detail.replace(/\|/g, '/')} |`; }),
  '', `## SERP 预览`, '', `**优化前：** ${B.serp?.title} — ${B.serp?.description}`, '', `**优化后：** ${A.serp?.title} — ${A.serp?.description}`, ''].join('\n');
writeFileSync(path.join(root, 'reports/comparison.md'), md);
console.log(`comparison written: before ${B.score} → after ${A.score}, ${flipped} items flipped to pass`);
