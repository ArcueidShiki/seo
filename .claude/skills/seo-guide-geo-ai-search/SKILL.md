---
name: seo-guide-geo-ai-search
description: 当用户要做 GEO / AEO / AI 搜索优化，想让 ChatGPT、Perplexity、Claude、Gemini、Google AI Overviews 引用或推荐自己的品牌和内容，或要配置 AI 爬虫、llms.txt、答案先行写法、实体 Schema、AI 引用率测试时使用（GEO / AI SEO / LLM 引用 / AI 可见度）。
---

# GEO / AI 搜索优化

> 一句话：帮用户让答案引擎在回答问题时引用、复用和推荐自己的内容和品牌——也就是进入模型的"证据池"，并每月量化被引用的情况。完整内容见仓库 `handbook/06-geo-ai-search.md`（ArcueidShiki/seo）。

## 何时使用
- 用户问"怎么让 ChatGPT / Perplexity / AI Overviews 推荐我的产品""GEO 和 SEO 有什么区别"
- 用户要检查 robots.txt、Cloudflare 是否拦截了 GPTBot、ClaudeBot、PerplexityBot 等 AI 爬虫
- 用户要写或评估 llms.txt、Organization / SoftwareApplication 实体 Schema
- 用户要把页面改写成更容易被 AI 引用的结构（答案先行、知识单元、FAQ）
- 用户要设计 AI 引用测试 prompt、记录表，或计算提及率 / 引用率 / 声量份额
- 用户要一份 GEO 30 天行动计划

## 核心原则
1. **目标是"被引用的概率"，不是排名**；优化对象从单个页面扩展到全网关于你的语料；从页面竞争到知识竞争，从技巧优化到语义理解 + 信任建设。
2. **GEO 不替代 SEO**：大多数答案引擎先检索网页（Bing、Google 或自家索引），可抓取、可索引、内容质量、外链和提及是共同基础。
3. **按引用路径四关排查**：① 允许爬虫 → ② 被索引 → ③ 结构清晰、语义明确 → ④ 被引用（权威和信任背书）。
4. **营销页、文档、博客对 AI 爬虫全部放行**；担心负载就对 `/api/`、`/app/`、`/dashboard/` 限流或拦截，而不是全站屏蔽。
5. **Googlebot 和 bingbot 必须放行**；`Google-Extended` 只控制 Gemini 训练和 grounding，不影响 Google 搜索和 AI Overviews。
6. **正文写在 HTML 源码里（SSR / SSG）**：大多数 AI 爬虫不执行 JavaScript。
7. **进入 Bing 索引**：ChatGPT 搜索、Copilot、DuckDuckGo 等都和 Bing 索引有关联——验证 Bing Webmaster、提交 sitemap、接入 IndexNow。
8. **答案先行**：H1 之后第一段用 ≤ 80 个词直接给定义或结论。
9. **每个核心主题拆成可单独引用的知识单元**：是什么 / 为什么 / 怎么做 / 对比 / 常见错误 / FAQ（3–6 个问句式标题，第一句给结论）。
10. **给具体数字、日期、版本号、价格、限制条件**；引用权威外部来源；原创数据单独成页；写明作者、发布和更新日期。
11. **品牌一句话定位全网一致**（目录、社交简介、文章署名、About 页），并用 `Organization` + `sameAs` 把品牌实体和社交主页关联起来。
12. **在 Reddit、贴吧、知乎这类多轮讨论社区真诚、长期参与**；问题清单来自真实提问（Reddit、评论区、客服工单），不是关键词工具。
13. **llms.txt 成本低可以加，但不是主要手段**。
14. **每月用 10–20 条固定 prompt 在主要引擎上测一次**，用提及率、引用率、声量份额跟踪。

## 操作流程
1. **收集输入**：品牌名和一句话定位、核心品类词、主要竞品、目标语言（海外引擎 / 中文引擎）、站点技术栈与渲染方式、是否使用 Cloudflare、当前 robots.txt、GSC / Bing 是否已验证。
2. **① 抓取**：对照下方 bot 表检查 `/robots.txt`；提醒用户到 Cloudflare 后台确认"Block AI bots"和托管 robots.txt 状态；用 `curl` 看源码里有没有正文。
3. **② 索引**：确认 GSC 和 Bing Webmaster 收录、sitemap 提交、`site:` 搜索结果；没进 Bing 的优先补。
4. **③ 理解**：审 H2 / H3 大纲；把 H1 后第一段改写成答案先行；列出每个核心主题缺失的知识单元；检查 JSON-LD（Organization、WebSite、SoftwareApplication、Article.author）。
5. **④ 引用**：搜品牌名；查看 Reddit、知乎、贴吧、AI 工具目录、替代品网站上对品牌的描述是否一致；列出缺失的第三方存在（每个核心主题至少：一篇深度文章、一个案例、一篇技术解读、一次第三方提及）。
6. **设计 prompt 集合**：5 类（品类推荐、问题求解、对比、品牌认知、长尾知识），共 10–20 条，每月不变。
7. **测试**：海外测 ChatGPT（开搜索）、Perplexity、Claude（开联网）、Gemini、Google AI Overviews / AI Mode，可加 Copilot；中文可补豆包、Kimi、DeepSeek、元宝。用无痕或未登录状态，每条跑 2–3 次看稳定性。如果你无法直接访问这些引擎，就把 prompt 集合和记录表交给用户执行，再帮他分析结果。
8. **计算指标并找差距**：算提及率、引用率、声量份额；每次"被引用的是别人的页面"，记下那个页面有而你没有的东西（数据、表格、讨论），转成下月内容任务。
9. **配套数据**：GA4 / Plausible 建 AI 引荐来源分组；GSC 建品牌词展示基线。
10. **输出**四关诊断表 + 30 天行动清单 + 测试记录表。

## 关键数字与门槛
| 指标 | 门槛/建议值 | 说明 |
|---|---|---|
| 答案先行段落 | H1 后第一段 ≤ 80 词 | 简短定义句（含"是 / 指 / is / means"），`geo-answer-first` |
| FAQ | 3–6 个问句式标题 | 第一句给结论，`geo-faq-blocks` |
| 固定 prompt | 10–20 条，每月不变 | 覆盖 5 类 |
| 测试引擎 | 海外 5 个（ChatGPT、Perplexity、Claude、Gemini、AI Overviews / AI Mode） | 可加 Copilot 和中文引擎 |
| 重复次数 | 同一 prompt 2–3 次 | 无痕 / 未登录 |
| 社区参与 | 每周至少 3 个有实质内容的回答 | Reddit / 知乎 / 贴吧细分版块 |
| 主题覆盖 | 每个核心主题至少 1 深度文章 + 1 案例 + 1 技术解读 + 1 第三方提及 | 提高存在密度 |
| 外部引用 / 数据点 | 每页至少 1 个具体数据点 + 1 个权威外部引用 | `links-external-citation` |
| llms.txt 检查 | 返回 200、有 `# ` 标题、有 `[文字](https://…)` 链接 | `geo-llms-txt` |
| AI 爬虫判定 | GPTBot、ClaudeBot、PerplexityBot、Google-Extended、OAI-SearchBot 任一被拦即失败 | `geo-ai-crawlers` |
| ChatGPT 引荐标记 | 链接常带 `utm_source=chatgpt.com` | GA4 里识别 |

## 模板与示例
**AI 爬虫取舍**
| User-agent | 用途 | 建议 |
|---|---|---|
| `OAI-SearchBot` | ChatGPT 搜索检索和引用 | 放行 |
| `ChatGPT-User` | 用户在对话里让 ChatGPT 打开页面 | 放行 |
| `GPTBot` | OpenAI 训练抓取 | 默认放行；有不想被训练的内容再拦 |
| `ClaudeBot` / `Claude-SearchBot` / `Claude-User` | Anthropic 训练 / 搜索 / 用户触发 | 放行 |
| `PerplexityBot` / `Perplexity-User` | 索引 / 用户触发 | 放行 |
| `Google-Extended` | Gemini 训练和 grounding 控制 | 默认放行 |
| `Googlebot` / `bingbot` | 搜索（含 AI Overviews / AI Mode）、Bing 与 Copilot | 必须放行 |
| `Applebot-Extended` / `CCBot` | Apple AI 训练 / Common Crawl 数据集 | 按需 |

```text
User-agent: OAI-SearchBot
Allow: /
User-agent: GPTBot
Allow: /
User-agent: ClaudeBot
Allow: /
User-agent: PerplexityBot
Allow: /
User-agent: Google-Extended
Allow: /
Sitemap: https://example.com/sitemap.xml
```

**答案先行改写**
```text
❌ 在当今快速发展的数字时代，越来越多的企业开始关注数据处理的效率问题……
✅ 银行流水 PDF 转 Excel，是指把银行导出的 PDF 对账单里的交易表格，按日期、摘要、金额、余额等列原样还原成可编辑的 Excel 表格。用专门的转换工具通常 1 分钟内完成，通用 OCR 容易串行、错列。
```

**知识单元大纲**
```markdown
## X 是什么                    ← 1–2 句定义 + 一个具体例子
## 为什么会出现 / 为什么需要 X   ← 原因、背景、因果
## 怎么做（步骤）               ← <ol>，每步一句话 + 截图
## X vs Y vs Z                  ← 对比表：适用场景、价格、限制
## 常见错误与误区               ← 踩过的坑 + 怎么修
## 常见问题                     ← 3–6 个问句式标题，第一句给结论
```

**llms.txt**
```markdown
# ExampleAI
> ExampleAI 是给电商运营用的 AI 海报生成器：输入一句话，批量生成同系列、可商用的海报。
## 产品
- [AI 海报生成器](https://example.com/): 主工具，免登录可以试 3 张
## 文档与指南
- [批量生成教程](https://example.com/blog/bulk-poster-generation): 一次生成 50 张的步骤
## 关于
- [关于我们](https://example.com/about): 团队、联系方式
```

**实体 Schema**
```json
{ "@context": "https://schema.org", "@type": "Organization", "name": "ExampleAI",
  "url": "https://example.com/", "logo": "https://example.com/logo.png",
  "description": "给电商运营用的 AI 海报生成器",
  "sameAs": ["https://x.com/exampleai", "https://www.producthunt.com/products/exampleai", "https://github.com/exampleai"] }
```

**Prompt 集合与记录表**
| 类型 | 示例 | 衡量什么 |
|---|---|---|
| 品类推荐 | "best AI poster generator for ecommerce" | 语义关联 |
| 问题求解 | "怎么批量做 50 张同系列的促销海报？" | 教程是否被引用 |
| 对比 | "ExampleAI 和 Canva 做电商海报哪个好？" | 对比内容是否被采纳、描述是否准确 |
| 品牌认知 | "ExampleAI 是什么？怎么收费？" | 描述是否准确、是否最新 |
| 长尾知识 | "Instagram 海报的标准尺寸是多少？" | 知识页是否被引用 |

| 日期 | 引擎 | Prompt # | 提到品牌 | 引用我方 URL | 被引用的 URL | 答案中位置 | 被提到的竞品 | 描述准确 | 备注 |
|---|---|---|---|---|---|---|---|---|---|

```text
提及率   = 提到品牌的回答数 ÷ 测试总数
引用率   = 引用了我方 URL 的回答数 ÷ 测试总数
声量份额 = 提到我方的次数 ÷ （我方 + 主要竞品被提到的总次数）
AI 引荐来源：chatgpt.com、perplexity.ai、gemini.google.com、copilot.microsoft.com、claude.ai
```

**30 天行动清单**：第 1 周技术（放行 AI bot、SSR/SSG、Bing + IndexNow、JSON-LD + sameAs、llms.txt）→ 第 2 周内容（答案先行、知识单元补齐、数据点 + 外部引用）→ 第 3 周站外（统一一句话定位、社区真诚参与、提交 AI 目录与替代品网站）→ 第 4 周测量（第一轮 prompt 测试、GA4 AI 来源分组、GSC 品牌词基线）。

## 常见错误与过时做法
- ⚠️ 在 Cloudflare 开"屏蔽 AI 训练爬虫"——与 GEO 冲突；新接入域名可能默认拦截 AI bot 或托管 robots.txt，必须到后台确认。
- ⚠️ 只做 Google 不做 Bing，错过 ChatGPT 搜索、Copilot 等引用机会。
- ⚠️ 纯前端渲染，AI 爬虫看到空壳；对爬虫弹验证码挑战、TTFB 过高导致实时检索超时。
- ⚠️ 开头大段铺垫、用模糊形容词代替具体数字和条件。
- ⚠️ 用登录状态测试 AI 回答（个性化记忆干扰）；只测一次就下结论。
- ⚠️ **2026 更新**：还没有主流答案引擎公开确认读取 llms.txt（Google 表示目前不使用），不要把它当 GEO 主要手段。
- ⚠️ **2026 更新**：FAQ 富结果在 Google 上基本不再展示，但问答格式对 AI 引用仍很有用——保留 FAQ 区块，别指望 SERP 折叠问答。
- ⚠️ **2026 更新**：不要为 GEO 批量注册账号、刷帖、发软文或植入雷同推荐话术；社区会封号，AI 引擎也在降低刷屏内容权重。
- ⚠️ 原文判断：模板化、短平快的内容平台语言同质化、语义被压缩，被引用价值较低。

## 交付格式
1. **一句话结论**：卡在引用路径的哪一关，以及最先修的一项。
2. **四关诊断表**：

| 阶段 | 检查项 | 现状 / 证据 | 判定 ✅ ⚠️ ❌ ❓ | 修复动作 | 优先级 | Checklist id |
|---|---|---|---|---|---|---|

   前一关没过的问题优先级高于后一关（① > ② > ③ > ④）。
3. **改写示例**：答案先行段落、知识单元大纲、JSON-LD、robots.txt 片段。
4. **测试结果与指标**：记录表 + 提及率 / 引用率 / 声量份额；对每类 prompt 给"下月被提及的可能性 高 / 中 / 低"及依据，明确是估计。
5. **30 天行动清单**：按周列出，每项附 checklist id。

## 相关
- Checklist skill(s): seo-checklist-geo, seo-checklist-technical, seo-checklist-indexing, seo-checklist-serp, seo-checklist-content, seo-checklist-analytics
- 其他手册 skills: seo-guide-technical-infra, seo-guide-page-structure-tags, seo-guide-content-eeat, seo-guide-backlinks, growth-guide-x-reddit, growth-guide-analytics-tools, seo-guide-glossary
