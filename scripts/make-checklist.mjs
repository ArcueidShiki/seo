#!/usr/bin/env node
// Merges checklist/base.json (taxonomy + auditor-checkable items) with checklist/items/*.json (manual items)
// into checklist/checklist.json (single source of truth) and checklist/CHECKLIST.md (readable version).
import { readFileSync, writeFileSync, readdirSync, existsSync } from 'node:fs';
import path from 'node:path';

const root = path.resolve(path.dirname(new URL(import.meta.url).pathname), '..');
const dir = path.join(root, 'checklist');
const base = JSON.parse(readFileSync(path.join(dir, 'base.json'), 'utf8'));
const manual = existsSync(path.join(dir, 'items'))
  ? readdirSync(path.join(dir, 'items')).filter(f => f.endsWith('.json')).sort().flatMap(f => JSON.parse(readFileSync(path.join(dir, 'items', f), 'utf8')))
  : [];

const items = [...base.autoItems.map(i => ({ ...i, auto: true })), ...manual.map(i => ({ ...i, auto: false }))];
const catIds = base.categories.map(c => c.id), phaseIds = base.phases.map(p => p.id);
const errors = [];
const seen = new Set();
for (const i of items) {
  if (seen.has(i.id)) errors.push(`duplicate id ${i.id}`); seen.add(i.id);
  if (!catIds.includes(i.cat)) errors.push(`${i.id}: unknown category ${i.cat}`);
  if (!phaseIds.includes(i.phase)) errors.push(`${i.id}: unknown phase ${i.phase}`);
  if (!['P0', 'P1', 'P2'].includes(i.priority)) errors.push(`${i.id}: bad priority ${i.priority}`);
  if (!i.checkAgainst?.length) errors.push(`${i.id}: no checkAgainst`);
  for (const t of i.tools || []) if (typeof t === 'string' && !base.platforms[t]) errors.push(`${i.id}: unknown tool key ${t}`);
}
if (errors.length) { console.error(errors.join('\n')); process.exit(1); }
// stable order: category order, then phase order, then priority
items.sort((a, b) => catIds.indexOf(a.cat) - catIds.indexOf(b.cat) || phaseIds.indexOf(a.phase) - phaseIds.indexOf(b.phase) || a.priority.localeCompare(b.priority));

const out = { version: base.version, updated: base.updated, phases: base.phases, categories: base.categories, platforms: base.platforms, items };
writeFileSync(path.join(dir, 'checklist.json'), JSON.stringify(out, null, 2));

const P = base.platforms;
const ph = Object.fromEntries(base.phases.map(p => [p.id, p.name]));
const md = [`# SEO / GEO / SERP / 外链 / 流量 / 账号运营 Checklist`, '',
  `> ${items.length} 条（${items.filter(i => i.auto).length} 条可由 \`auditor/audit.mjs\` 自动检测，标 🤖）。P0 = 必做，P1 = 重要，P2 = 加分。交互版：\`tool/index.html\`。`, '',
  '## 目录', '', ...base.categories.map(c => `- [${c.name}](#${c.id}) · ${items.filter(i => i.cat === c.id).length} 条`), ''];
for (const c of base.categories) {
  const its = items.filter(i => i.cat === c.id);
  if (!its.length) continue;
  md.push(`<a id="${c.id}"></a>`, `## ${c.name} · ${c.nameEn}`, '', `_${c.desc}_`, '');
  for (const i of its) {
    md.push(`- [ ] **${i.title}** — \`${i.priority}\` · ${ph[i.phase]}${i.auto ? ' · 🤖 `' + i.id + '`' : ''}`);
    if (i.why) md.push(`  - 为什么：${i.why}`);
    md.push(`  - 检查标准：`);
    i.checkAgainst.forEach(x => md.push(`    - ${x}`));
    if (i.how) md.push(`  - 怎么查：${i.how}`);
    if (i.tools?.length) md.push(`  - 工具 / 平台：${i.tools.map(t => typeof t === 'string' ? `[${P[t].name}](${P[t].url})` : `[${t.name}](${t.url})`).join(' · ')}`);
  }
  md.push('');
}
writeFileSync(path.join(dir, 'CHECKLIST.md'), md.join('\n'));
console.log(`checklist: ${items.length} items (${items.filter(i => i.auto).length} auto, ${manual.length} manual) across ${catIds.length} categories`);
