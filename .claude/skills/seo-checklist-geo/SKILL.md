---
name: seo-checklist-geo
description: 做 GEO（让 ChatGPT、Perplexity、Claude、Gemini、AI Overviews 引用你的网站）时使用；逐条核对 checklist 的 AI 搜索优化条目，含 llms.txt、AI 爬虫与提及。
---

# GEO · AI 搜索优化 Checklist（Generative engine optimization）

> 让 ChatGPT、Perplexity、Claude、Gemini、Google AI Overviews 能读到并引用你。
> 共 12 条：P0 3 · P1 8 · P2 1；其中 4 条可由 auditor 自动检测（🤖）。数据源：仓库 ArcueidShiki/seo 的 `checklist/checklist.json`（类别 `geo`）。

## 何时使用
- 希望产品被 AI 搜索推荐 / 引用
- 检查 robots 和 Cloudflare 是否误挡 AI 爬虫
- 每月做一次 AI 引用测试
- 用户说"帮我检查 / 优化 GEO · AI 搜索优化"或给出网址要求做这方面的 SEO 审计

## 执行流程
1. **确认对象**：要检查的网址或页面、目标关键词、目标市场（Google / 百度 / 平台站内）、产品所处阶段（规划 / 开发 / 上线 / 增长 / 维护）。只看当前阶段及之前阶段的条目。
2. **先跑自动审计**（有网址时）：在仓库里运行 `node auditor/audit.mjs --url <网址> --name <名字> --keyword "<主关键词>"`，从 `reports/<名字>.json` 读取这些条目的结果：`geo-answer-first`、`geo-faq-blocks`、`geo-ai-crawlers`、`geo-llms-txt`。没法运行脚本时，就按下面的"怎么查"手工检查（view-source、curl、PageSpeed、Rich Results Test 等）。
3. **逐条判定**：每条只能是 ✅ 通过 / ⚠️ 部分 / ❌ 未通过 / ❓ 待确认（缺数据）/ — 不适用，并写出一句证据。
4. **排序输出**：先列 P0 未通过，再列 P1、P2；每条给出具体的修复动作（改哪个文件 / 哪个后台设置 / 发什么内容）和预计影响。
5. **给出下一步**：最多 3 个最高优先级动作 + 复查时间点（例如修复后 7 天在 GSC 复查）。

## 交付格式
```
| # | 条目 | 优先级 | 状态 | 证据 | 修复动作 |
|---|------|--------|------|------|----------|
```
表格后加一行"通过率 = 通过数 / 适用条目数"，以及按 P0 → P2 排好的行动清单。

## 条目（按阶段）

### ② 开发

#### [P0] 答案先行：H1 后第一段直接给出定义 / 结论 🤖
id: `geo-answer-first`
- **为什么**：AI 搜索和精选摘要都偏好引用简短、自成一体的答案段落。
- **通过标准**：
  - H1 后第一段 ≤80 词，直接回答核心问题（公式、定义、结论）
  - 每个 H2 下第一句也能单独成立
- **怎么查**：auditor 启发式检测；把页面丢给 ChatGPT / Perplexity 问目标问题，看是否引用。
- **工具**：seo-handbook auditor；ChatGPT (https://chatgpt.com/)；Perplexity (https://www.perplexity.ai/)

#### [P1] FAQ / 问答式小标题 🤖
id: `geo-faq-blocks`
- **为什么**：用户会把问题原话问给 AI；问答格式最容易被摘取。注意：Google 的 FAQ 富结果自 2023 年起只给政府和医疗类权威站点显示。
- **通过标准**：
  - ≥3 个用问句写的小标题，或 FAQPage 结构化数据
  - 问题来自真实搜索：People Also Ask、Reddit、AnswerThePublic
- **怎么查**：auditor。
- **工具**：seo-handbook auditor

#### [P1] robots.txt 没有屏蔽 AI 搜索爬虫 🤖
id: `geo-ai-crawlers`
- **为什么**：想被 ChatGPT 搜索 / Perplexity / Claude 引用，就不能屏蔽 OAI-SearchBot、PerplexityBot、Claude-SearchBot。训练爬虫（GPTBot、Google-Extended）是否放行可以单独决定。
- **通过标准**：
  - 没有 Disallow 掉 OAI-SearchBot、ChatGPT-User、PerplexityBot、ClaudeBot / Claude-SearchBot
  - Cloudflare 的 "Block AI bots" 开关和 robots 策略一致
- **怎么查**：查看 robots.txt；Cloudflare → Security → Bots。
- **工具**：seo-handbook auditor；Cloudflare (https://dash.cloudflare.com/)

#### [P1] 核心页面覆盖五类知识单元：是什么、为什么、怎么用、和谁比、常见错误
id: `geo-knowledge-units`
- **为什么**：生成式引擎按问题检索段落再拼成答案；解释原因和用法的结构化内容最容易被拆成可复用的知识单元。
- **通过标准**：
  - 每个核心页面的 H2 / H3 大纲能对应到：定义、原理或原因、使用步骤、对比、常见错误或局限
  - 对比信息用 HTML 表格，步骤用有序列表，定义用一句话单独成段
  - 内容围绕真实问题组织，而不是围绕关键词堆段落
- **怎么查**：用 HeadingsMap 插件导出大纲对照检查；把页面 URL 发给 ChatGPT 或 Perplexity，问「根据这个页面，X 和 Y 有什么区别」，看能否准确摘出答案。
- **工具**：ChatGPT (https://chatgpt.com/)；Perplexity (https://www.perplexity.ai/)

#### [P2] 根目录提供 /llms.txt 🤖
id: `geo-llms-txt`
- **为什么**：给大模型的站点摘要和关键页面索引；成本很低，各家支持程度不一。
- **通过标准**：
  - /llms.txt 返回 200，Markdown 格式
  - 包含 # 站点名、> 一句话简介、关键事实、## Pages 链接列表
- **怎么查**：浏览器打开 /llms.txt。
- **工具**：seo-handbook auditor；llms.txt 规范 (https://llmstxt.org/)

### ③ 上线

#### [P0] 确认核心页面已被 Bing 收录：ChatGPT 搜索和 Copilot 都依赖它
id: `geo-bing-index`
- **为什么**：ChatGPT 搜索结合了 Bing 等第三方索引和自家爬虫，Copilot 直接使用 Bing；Bing 里没有你，这些 AI 就很难找到你。
- **通过标准**：
  - Bing Webmaster → URL Inspection：首页和全部核心页面显示已收录
  - 上线 2 周内在 bing.com 搜索 site:域名 有结果；未收录的页面用 IndexNow 或 Submit URL 推送
  - Bing Webmaster 中没有抓取错误或被阻止的核心 URL
- **怎么查**：Bing Webmaster Tools → URL Inspection / Site Explorer；配合 IndexNow 条目一起做。
- **工具**：Bing Webmaster Tools (https://www.bing.com/webmasters)；IndexNow (https://www.indexnow.org/)；ChatGPT (https://chatgpt.com/)；Microsoft Copilot (https://copilot.microsoft.com/)

#### [P1] 从日志确认 AI 爬虫真的抓到了页面，而不只是 robots.txt 放行
id: `geo-bot-access-logs`
- **为什么**：robots.txt 放行了，WAF、Bot Fight Mode 或 Cloudflare 的 AI 爬虫屏蔽设置仍可能返回 403；2025 年起 Cloudflare 会让新接入的域名默认屏蔽 AI 爬虫。
- **通过标准**：
  - Cloudflare AI Crawl Control（原 AI Audit）或服务器日志中，OAI-SearchBot、ChatGPT-User、PerplexityBot、Claude-SearchBot 的请求返回 200
  - 这些 User-Agent 在 Security → Events 中没有被 Block 或 Challenge 的记录
  - 训练类爬虫（GPTBot、ClaudeBot、Google-Extended、CCBot）是否放行已明确决定，并记录理由
- **怎么查**：Cloudflare 后台按 User-Agent 筛选；不用 Cloudflare 时 grep 访问日志，例如 grep -E 'OAI-SearchBot|PerplexityBot|Claude-SearchBot' access.log，再统计状态码。
- **工具**：Cloudflare (https://dash.cloudflare.com/)

### ④ 增长

#### [P1] 在 Reddit、Hacker News、知乎、V2EX、贴吧等讨论区长期真实参与
id: `geo-community-presence`
- **为什么**：多轮问答式的真实讨论是大模型高度依赖的语料；Reddit 帖子在 Google 和 AI 回答里都经常被引用。
- **通过标准**：
  - 每月 ≥ 4 次有实质内容的回答（解释原因、给出步骤），不是丢一个链接
  - 只在问题确实相关时提到自己的产品，并说明你是开发者
  - 记录获赞或被追问的帖子链接，观察它们是否出现在 AI 测试问题的引用来源里
- **怎么查**：用 F5Bot 订阅品类关键词在 Reddit / Hacker News 上的新帖提醒；中文社区用站内搜索关注相关话题。
- **工具**：Reddit (https://www.reddit.com/)；Hacker News (https://news.ycombinator.com/)；知乎 (https://www.zhihu.com/)；V2EX (https://www.v2ex.com/)；F5Bot (https://f5bot.com/)

#### [P1] 品牌在全网的描述一致：名字、一句话定位、品类、价格、创始人
id: `geo-entity-consistency`
- **为什么**：AI 通过多个来源交叉确认「这个品牌是什么」；各处说法不一致，模型就不敢把你和品类关联起来。
- **通过标准**：
  - 有一份品牌事实卡：品牌名（固定写法）、一句话定位（≤ 20 词）、所属品类、定价、创始人、上线年份、官网
  - 官网 About 页、导航站、Product Hunt、X / LinkedIn / GitHub 简介、Crunchbase 都使用事实卡上的说法
  - 抽查 5 个第三方页面，描述与事实卡一致；过时描述已联系对方更新
  - 不为了 GEO 去创建不符合收录标准的维基百科词条
- **怎么查**：搜索「品牌名」「品牌名 是什么」「what is 品牌名」，逐个核对第三方描述。
- **工具**：Crunchbase (https://www.crunchbase.com/)；LinkedIn (https://www.linkedin.com/)；Product Hunt (https://www.producthunt.com/)；Google 搜索 (https://www.google.com/)

#### [P1] 发布可被引用的原创数据：每个数字都有方法、样本和日期
id: `geo-original-stats`
- **为什么**：AI 回答和记者都偏爱带具体数字的来源，原创数据是最容易获得引用和外链的内容。
- **通过标准**：
  - 至少 1 份原创数据：用户调研、产品使用统计、基准测试或价格对比
  - 每个关键数字写成一句可以单独引用的完整句子（如「在 1,200 次测试中，X 的平均耗时为 3.2 秒（2026 年 3 月）」）
  - 写明方法、样本量、时间范围，提供可下载的原始数据或图表
  - 数据每年更新一次，页面显示更新日期
- **怎么查**：从产品后台匿名聚合数据；数据页单独一个 URL，标题含「报告 / 统计 / 基准」和年份。
- **工具**：Google Search Console (https://search.google.com/search-console)；Ahrefs Webmaster Tools（免费） (https://ahrefs.com/webmaster-tools)

#### [P1] 争取进入 AI 经常引用的第三方榜单和评测页
id: `geo-third-party-lists`
- **为什么**：AI 回答「最好的 X 工具」时大量引用 best-of 清单、评测站和对比文章；你不在这些页面上，就很难被推荐。
- **通过标准**：
  - 列出测试问题中 AI 引用的前 10 个第三方来源（清单文章、G2、AlternativeTo、SaaSHub、Reddit 帖子等）
  - 每个来源都有对应动作：提交收录、联系作者申请加入、完善 AlternativeTo / SaaSHub 资料
  - 3 个月内至少进入其中 3 个
- **怎么查**：Perplexity 的回答会直接列出引用来源；给清单作者发邮件时附上试用账号和一段可直接引用的描述。
- **工具**：Perplexity (https://www.perplexity.ai/)；G2 (https://www.g2.com/)；AlternativeTo (https://alternativeto.net/)；SaaSHub (https://www.saashub.com/)

### ⑤ 维护

#### [P0] 每月用固定问题清单测试 AI 搜索：有没有提到你、有没有引用你
id: `geo-prompt-test`
- **为什么**：GEO 衡量的不是排名而是「被采纳的概率」；不定期测试，就不知道自己有没有进入模型的证据池。
- **通过标准**：
  - 固定 10–20 个测试问题：品类问题（best X tool）、对比（X vs Y、X alternatives）、任务问题（how to do Y）、品牌问题（what is 品牌名）
  - 每月在 ChatGPT（开启搜索）、Perplexity、Gemini、Claude、Copilot、Google AI 概览 / AI Mode 各跑一遍
  - 记录：是否提到品牌、是否带你的链接、排第几、引用了哪些第三方来源、推荐了哪些竞品
  - 3 个月内「被提到」的问题数上升；引用竞品的来源（榜单、Reddit 帖子、评测）加入外联计划
- **怎么查**：在退出登录或无痕状态下测试以减少个性化影响；结果记在表格里按月对比。
- **工具**：ChatGPT (https://chatgpt.com/)；Perplexity (https://www.perplexity.ai/)；Gemini (https://gemini.google.com/)；Claude (https://claude.ai/)；Microsoft Copilot (https://copilot.microsoft.com/)

## 相关
- 手册 skill（原理、打法和模板）：`seo-guide-geo-ai-search`
- 总索引：`seo-growth-skills-index`
- 交互式工具：仓库 `tool/index.html`（构建后在 `/tool/`），可以勾选进度、导出 Markdown
