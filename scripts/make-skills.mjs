#!/usr/bin/env node
// Generates the 16 checklist skills (.claude/skills/seo-checklist-*/SKILL.md) from checklist/checklist.json,
// then the index skill (.claude/skills/seo-growth-skills-index/SKILL.md) listing every skill in .claude/skills/.
//   node scripts/make-skills.mjs            -> checklist skills + index
//   node scripts/make-skills.mjs --index    -> index only
import { readFileSync, writeFileSync, mkdirSync, readdirSync, existsSync } from 'node:fs';
import path from 'node:path';

const root = path.resolve(path.dirname(new URL(import.meta.url).pathname), '..');
const SK = path.join(root, '.claude/skills');
const CL = JSON.parse(readFileSync(path.join(root, 'checklist/checklist.json'), 'utf8'));
const P = CL.platforms;
const phaseName = Object.fromEntries(CL.phases.map(p => [p.id, p.name]));

// per-category skill metadata
const META = {
  keyword:     { name: 'seo-checklist-keyword', desc: '做关键词研究、选词、判断 KD 和搜索量门槛、规划一页一词或竞品词页面时使用；逐条核对 SEO checklist 的关键词与选题类条目。', when: ['新产品 / 新页面开写之前要选关键词', '判断一个词能不能做（KD、搜索量、SERP 竞争）', '规划 alternatives / vs / coupon 等竞品词页面'], guide: ['seo-guide-keyword-research'] },
  structure:   { name: 'seo-checklist-structure', desc: '检查网站结构、URL 规范、内链、主题集群和孤立页面时使用；逐条核对 SEO checklist 的网站结构与内链类条目。', when: ['设计站点目录和 URL', '排查孤立页面 / 内链不足', '搭建主题集群（支柱页 + 支撑文章）'], guide: ['seo-guide-page-structure-tags', 'seo-guide-content-eeat'] },
  onpage:      { name: 'seo-checklist-onpage', desc: '检查页面 title、meta description、H1、关键词位置、图片 alt、Open Graph 与 Twitter 卡片时使用；逐条核对 SEO checklist 的页面标签类条目。', when: ['新页面上线前做 On-page 检查', '搜索结果标题被改写 / 点击率低', '社交分享卡片不显示大图'], guide: ['seo-guide-page-structure-tags'] },
  technical:   { name: 'seo-checklist-technical', desc: '检查技术 SEO（robots.txt、sitemap、canonical、noindex、SSR 渲染、viewport、404、favicon）或排查页面不收录时使用；逐条核对 checklist 技术 SEO 条目。', when: ['页面不被 Google 收录 / 收录慢', 'SPA / 前端框架站点上线前', '迁移域名、改 URL、加多语言'], guide: ['seo-guide-technical-infra'] },
  performance: { name: 'seo-checklist-performance', desc: '优化网站速度、Core Web Vitals（LCP、INP、CLS）、图片体积和 Lighthouse 分数时使用；逐条核对 checklist 速度与体验条目。', when: ['PageSpeed / Lighthouse 分数低', 'GSC 核心网页指标报告出现"较差"', '图片、脚本太大'], guide: ['seo-guide-technical-infra'] },
  infra:       { name: 'seo-checklist-infra', desc: '配置域名、www 与裸域 301、HTTPS、Cloudflare 缓存与防护、API 和 Webhook 放行、域名邮箱 SPF/DKIM/DMARC 时使用；逐条核对 checklist 基础设施条目。', when: ['新域名接入 Cloudflare', 'AI SaaS 被刷 API / 撞库', '域名邮箱进垃圾箱'], guide: ['seo-guide-technical-infra'] },
  indexing:    { name: 'seo-checklist-indexing', desc: '在 Google Search Console、Bing、IndexNow、百度等站长后台验证网站、提交 sitemap、请求收录、排查索引报告时使用；逐条核对 checklist 提交与收录条目。', when: ['新站上线第一天', 'GSC 显示"已抓取 - 尚未编入索引"', '要同时覆盖 Bing / 中文搜索引擎'], guide: ['seo-guide-technical-infra'] },
  content:     { name: 'seo-checklist-content', desc: '规划和审查内容（搜索意图、页面模板、E-E-A-T、AI 生成内容规则、更新与二次分发）时使用；逐条核对 checklist 内容与 E-E-A-T 条目。', when: ['写博客 / 落地页 / 工具页文案前', '内容排名下滑要刷新', '用 AI 批量写内容前'], guide: ['seo-guide-content-eeat'] },
  serp:        { name: 'seo-checklist-serp', desc: '提升搜索结果展示和点击率：JSON-LD 结构化数据、面包屑、站点名、富结果资格、精选摘要时使用；逐条核对 checklist SERP 条目。', when: ['加 Schema / JSON-LD', 'Google 结果没有站点名、面包屑', '想拿精选摘要或图片 / 视频结果'], guide: ['seo-guide-page-structure-tags'] },
  geo:         { name: 'seo-checklist-geo', desc: '做 GEO（让 ChatGPT、Perplexity、Claude、Gemini、AI Overviews 引用你的网站）时使用；逐条核对 checklist 的 AI 搜索优化条目，含 llms.txt、AI 爬虫与提及。', when: ['希望产品被 AI 搜索推荐 / 引用', '检查 robots 和 Cloudflare 是否误挡 AI 爬虫', '每月做一次 AI 引用测试'], guide: ['seo-guide-geo-ai-search'] },
  backlinks:   { name: 'seo-checklist-backlinks', desc: '做外链建设（导航站、发布平台、付费目录、内容外链、竞品冷启动外链分析、锚文本与追踪）时使用；逐条核对 checklist 外链条目。', when: ['新站 0–3 个月要拿第一批外链', '评估一个外链值不值得做 / 付费', '拆解竞品的冷启动外链'], guide: ['seo-guide-backlinks'] },
  analytics:   { name: 'seo-checklist-analytics', desc: '安装和配置网站统计（GA4、Plausible、Umami、Clarity、百度统计）、转化事件、GSC 关联和每周每月数据复盘时使用；逐条核对 checklist 数据与监测条目。', when: ['新站装统计', '定义注册 / 付费等转化事件', '每周 / 每月看数据复盘'], guide: ['growth-guide-analytics-tools'] },
  launch:      { name: 'seo-checklist-launch', desc: '产品上线发布与冷启动（Product Hunt、Hacker News、Reddit、Indie Hackers、BetaList、AI 导航站、V2EX 等）时使用；逐条核对 checklist 发布条目。', when: ['准备上线发布', '选择发布平台和顺序', '发布当天值守与一周复盘'], guide: ['growth-guide-launch-distribution'] },
  social:      { name: 'seo-checklist-social', desc: '运营社交平台账号（X、Reddit、小红书、抖音 / TikTok、YouTube、LinkedIn、公众号）的定位、发帖、涨粉和限流自检时使用；逐条核对 checklist 平台运营条目。', when: ['新开账号 / 起号', '制定发帖节奏和内容配比', '账号疑似限流 / 被删帖'], guide: ['growth-guide-x-reddit', 'growth-guide-xiaohongshu', 'growth-guide-douyin-video-wechat'] },
  i18n:        { name: 'seo-checklist-i18n', desc: '网站做多语言、多地区（hreflang、本地化关键词、语言版本 URL 结构）时使用；逐条核对 checklist 多语言与本地化条目。', when: ['加第二种语言', '不同国家用户看到错误的语言版本', '中英文双站规划'], guide: ['seo-guide-technical-infra', 'seo-guide-keyword-research'] },
  monetize:    { name: 'seo-checklist-monetize', desc: '规划流量变现（AdSense 等广告、订阅定价与试用、支付渠道选择、联盟营销、留存指标）时使用；逐条核对 checklist 变现条目。', when: ['决定广告还是订阅', '个人开发者选支付渠道', '评估每次访问收益和留存'], guide: ['growth-guide-monetization'] },
};

const toolStr = (t) => { const p = typeof t === 'string' ? P[t] : t; if (!p) return t; return p.url && !p.url.startsWith('..') ? `${p.name} (${p.url})` : p.name; };

function checklistSkill(cat) {
  const m = META[cat.id];
  const items = CL.items.filter(i => i.cat === cat.id);
  const count = (pr) => items.filter(i => i.priority === pr).length;
  const auto = items.filter(i => i.auto);
  const lines = [
    '---', `name: ${m.name}`, `description: ${m.desc}`, '---', '',
    `# ${cat.name} Checklist（${cat.nameEn}）`, '',
    `> ${cat.desc}`,
    `> 共 ${items.length} 条：P0 ${count('P0')} · P1 ${count('P1')} · P2 ${count('P2')}；其中 ${auto.length} 条可由 auditor 自动检测（🤖）。数据源：仓库 ArcueidShiki/seo 的 \`checklist/checklist.json\`（类别 \`${cat.id}\`）。`, '',
    '## 何时使用', ...m.when.map(w => `- ${w}`), `- 用户说"帮我检查 / 优化 ${cat.name}"或给出网址要求做这方面的 SEO 审计`, '',
    '## 执行流程',
    '1. **确认对象**：要检查的网址或页面、目标关键词、目标市场（Google / 百度 / 平台站内）、产品所处阶段（规划 / 开发 / 上线 / 增长 / 维护）。只看当前阶段及之前阶段的条目。',
    auto.length
      ? `2. **先跑自动审计**（有网址时）：在仓库里运行 \`node auditor/audit.mjs --url <网址> --name <名字> --keyword "<主关键词>"\`，从 \`reports/<名字>.json\` 读取这些条目的结果：${auto.map(i => '`' + i.id + '`').join('、')}。没法运行脚本时，就按下面的"怎么查"手工检查（view-source、curl、PageSpeed、Rich Results Test 等）。`
      : '2. **本类条目都需要人工判断**：按下面每条的"通过标准"收集证据（截图、后台数据、搜索指令结果、表格），没有证据的条目一律标为"待确认"，不要标成通过。',
    '3. **逐条判定**：每条只能是 ✅ 通过 / ⚠️ 部分 / ❌ 未通过 / ❓ 待确认（缺数据）/ — 不适用，并写出一句证据。',
    '4. **排序输出**：先列 P0 未通过，再列 P1、P2；每条给出具体的修复动作（改哪个文件 / 哪个后台设置 / 发什么内容）和预计影响。',
    '5. **给出下一步**：最多 3 个最高优先级动作 + 复查时间点（例如修复后 7 天在 GSC 复查）。', '',
    '## 交付格式',
    '```',
    '| # | 条目 | 优先级 | 状态 | 证据 | 修复动作 |',
    '|---|------|--------|------|------|----------|',
    '```',
    '表格后加一行"通过率 = 通过数 / 适用条目数"，以及按 P0 → P2 排好的行动清单。', '',
    '## 条目（按阶段）',
  ];
  for (const ph of CL.phases) {
    const its = items.filter(i => i.phase === ph.id);
    if (!its.length) continue;
    lines.push('', `### ${ph.name}`);
    for (const i of its) {
      lines.push('', `#### [${i.priority}] ${i.title}${i.auto ? ' 🤖' : ''}`, `id: \`${i.id}\``);
      if (i.why) lines.push(`- **为什么**：${i.why}`);
      lines.push('- **通过标准**：', ...i.checkAgainst.map(x => `  - ${x}`));
      if (i.how) lines.push(`- **怎么查**：${i.how}`);
      if (i.tools?.length) lines.push(`- **工具**：${i.tools.map(toolStr).join('；')}`);
    }
  }
  lines.push('', '## 相关', `- 手册 skill（原理、打法和模板）：${m.guide.map(g => '`' + g + '`').join('、')}`, '- 总索引：`seo-growth-skills-index`', '- 交互式工具：仓库 `tool/index.html`（构建后在 `/tool/`），可以勾选进度、导出 Markdown', '');
  return lines.join('\n');
}

function frontmatter(file) {
  const s = readFileSync(file, 'utf8');
  const m = s.match(/^---\n([\s\S]*?)\n---/);
  if (!m) return null;
  const get = (k) => (m[1].match(new RegExp(`^${k}:\\s*(.+)$`, 'm')) || [])[1]?.trim().replace(/^["']|["']$/g, '');
  return { name: get('name'), description: get('description'), lines: s.split('\n').length };
}

if (!process.argv.includes('--index')) {
  for (const cat of CL.categories) {
    const m = META[cat.id];
    mkdirSync(path.join(SK, m.name), { recursive: true });
    writeFileSync(path.join(SK, m.name, 'SKILL.md'), checklistSkill(cat));
  }
  console.log(`wrote ${CL.categories.length} checklist skills`);
}

// ---------- index skill ----------
const GUIDES = [
  ['seo-guide-keyword-research', '01-keyword-research.md'], ['seo-guide-page-structure-tags', '02-page-structure-and-tags.md'],
  ['seo-guide-technical-infra', '03-technical-seo-and-infra.md'], ['seo-guide-content-eeat', '04-content-and-eeat.md'],
  ['seo-guide-backlinks', '05-backlinks.md'], ['seo-guide-geo-ai-search', '06-geo-ai-search.md'],
  ['growth-guide-launch-distribution', '07-launch-and-distribution.md'], ['growth-guide-x-reddit', '08-x-and-reddit.md'],
  ['growth-guide-xiaohongshu', '09-xiaohongshu.md'], ['growth-guide-douyin-video-wechat', '10-douyin-video-wechat.md'],
  ['growth-guide-analytics-tools', '11-analytics-and-tools.md'], ['growth-guide-monetization', '12-monetization.md'],
  ['growth-guide-indie-mindset', '13-mindset-and-case-studies.md'], ['seo-guide-glossary', '99-glossary.md'],
];
const row = (name, extra) => {
  const f = path.join(SK, name, 'SKILL.md');
  const fm = existsSync(f) ? frontmatter(f) : null;
  if (!fm) throw new Error('missing skill ' + name);
  return `| \`${name}\` | ${extra} | ${fm.description} |`;
};
const idx = [
  '---', 'name: seo-growth-skills-index',
  'description: 做 SEO、GEO、SERP、外链、流量、发布或社交账号运营但不确定该用哪个 skill 时使用；列出全部 30 个子 skill 的名称、作用和选择路线。',
  '---', '',
  '# SEO / GEO / 增长 Skills 总索引', '',
  '> 30 个子 skill = **16 个 Checklist skill**（逐条核对，带通过标准，来自 `checklist/checklist.json` 的 188 条）+ **14 个手册 skill**（原理、打法、模板，来自 `handbook/`）。仓库：ArcueidShiki/seo。', '',
  '## 怎么用这个索引',
  '1. 用户要**检查 / 审计 / 打分**某方面 → 用对应的 `seo-checklist-*`。',
  '2. 用户要**学怎么做 / 制定方案 / 写内容** → 用对应的 `seo-guide-*` 或 `growth-guide-*`。',
  '3. 一个任务跨多个方面时，按下面的"常见任务路线"依次调用，最后合并成一个按优先级排序的行动表。',
  '4. 只有一个网址、没有更多说明时，默认走"网站全面体检"路线。', '',
  '## A. Checklist skills（16 个，逐条核对）', '',
  '| Skill | 类别 · 条目数 | 作用 |', '|---|---|---|',
  ...CL.categories.map(c => row(META[c.id].name, `${c.name} · ${CL.items.filter(i => i.cat === c.id).length} 条`)), '',
  '## B. 手册 skills（14 个，方法与模板）', '',
  '| Skill | 对应手册章节 | 作用 |', '|---|---|---|',
  ...GUIDES.map(([n, f]) => row(n, `\`handbook/${f}\``)), '',
  '## 常见任务路线', '',
  '| 用户的任务 | 依次调用 |', '|---|---|',
  '| 新产品从 0 规划 SEO | `growth-guide-indie-mindset` → `seo-guide-keyword-research` → `seo-checklist-keyword` → `seo-guide-page-structure-tags` |',
  '| 网站全面体检（给一个网址） | `seo-checklist-technical` → `seo-checklist-indexing` → `seo-checklist-onpage` → `seo-checklist-performance` → `seo-checklist-serp` → `seo-checklist-geo` → `seo-checklist-structure` |',
  '| 页面不收录 / 收录慢 | `seo-checklist-technical` → `seo-checklist-indexing` → `seo-guide-technical-infra` |',
  '| 有排名但点击率低 | `seo-checklist-onpage` → `seo-checklist-serp` → `seo-guide-page-structure-tags` |',
  '| 想被 ChatGPT / Perplexity 推荐 | `seo-guide-geo-ai-search` → `seo-checklist-geo` → `seo-checklist-backlinks` |',
  '| 上线发布 / 冷启动 | `growth-guide-launch-distribution` → `seo-checklist-launch` → `seo-checklist-indexing` → `seo-checklist-analytics` |',
  '| 第一批外链 | `seo-guide-backlinks` → `seo-checklist-backlinks` |',
  '| 写内容 / 博客 | `seo-guide-content-eeat` → `seo-checklist-content` → `seo-guide-keyword-research` |',
  '| 开社交账号（X / Reddit） | `growth-guide-x-reddit` → `seo-checklist-social` |',
  '| 小红书起号 / 爆款笔记 | `growth-guide-xiaohongshu` → `seo-checklist-social` |',
  '| 抖音 / 短视频 / 公众号 / 小程序 | `growth-guide-douyin-video-wechat` → `seo-checklist-social` |',
  '| 数据复盘 / 选工具 | `growth-guide-analytics-tools` → `seo-checklist-analytics` |',
  '| 变现 / 支付 / 定价 | `growth-guide-monetization` → `seo-checklist-monetize` |',
  '| 多语言 / 出海多地区 | `seo-checklist-i18n` → `seo-guide-technical-infra` |',
  '| 看不懂术语（DR、KD、INP…） | `seo-guide-glossary` |', '',
  '## 输出约定（所有子 skill 通用）',
  '- 结论先行，然后给按 P0 / P1 / P2 排序的行动表；状态只用 ✅ 通过 / ⚠️ 部分 / ❌ 未通过 / ❓ 待确认 / — 不适用。',
  '- 没有证据的条目标为 ❓，不要假设已通过；涉及预期效果时写明不确定性（例如"新站通常约 3 个月开始起量，6–12 个月稳定"）。',
  '- 不建议违反平台规则的做法（刷量、买评价、互刷 karma、PBN 外链）。', '',
];
mkdirSync(path.join(SK, 'seo-growth-skills-index'), { recursive: true });
writeFileSync(path.join(SK, 'seo-growth-skills-index', 'SKILL.md'), idx.join('\n'));
console.log('wrote index skill');
