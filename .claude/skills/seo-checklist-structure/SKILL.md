---
name: seo-checklist-structure
description: 检查网站结构、URL 规范、内链、主题集群和孤立页面时使用；逐条核对 SEO checklist 的网站结构与内链类条目。
---

# 网站结构与内链 Checklist（Site structure & internal links）

> URL、目录层级、内链和主题集群，决定权重怎么在站内流动。
> 共 9 条：P0 2 · P1 7 · P2 0；其中 3 条可由 auditor 自动检测（🤖）。数据源：仓库 ArcueidShiki/seo 的 `checklist/checklist.json`（类别 `structure`）。

## 何时使用
- 设计站点目录和 URL
- 排查孤立页面 / 内链不足
- 搭建主题集群（支柱页 + 支撑文章）
- 用户说"帮我检查 / 优化 网站结构与内链"或给出网址要求做这方面的 SEO 审计

## 执行流程
1. **确认对象**：要检查的网址或页面、目标关键词、目标市场（Google / 百度 / 平台站内）、产品所处阶段（规划 / 开发 / 上线 / 增长 / 维护）。只看当前阶段及之前阶段的条目。
2. **先跑自动审计**（有网址时）：在仓库里运行 `node auditor/audit.mjs --url <网址> --name <名字> --keyword "<主关键词>"`，从 `reports/<名字>.json` 读取这些条目的结果：`links-internal`、`links-anchor-text`、`tech-clean-urls`。没法运行脚本时，就按下面的"怎么查"手工检查（view-source、curl、PageSpeed、Rich Results Test 等）。
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

### ① 规划

#### [P0] 建立「关键词 → URL」映射：一页只主攻一个词，一个场景一个页面
id: `structure-keyword-url-map`
- **为什么**：Google 给页面排名，不给整个网站排名；一个页面想覆盖所有功能，结果哪个词都排不上，还会造成关键词内耗。
- **通过标准**：
  - 映射表里每个 URL 只有 1 个主关键词（可附带同义词和长尾）
  - 同一个主关键词只对应 1 个 URL
  - 每个用例 / 场景 / 功能有自己的页面，没有一个「什么都讲」的总览页去抢具体功能词
  - URL slug 用该页主关键词的英文连字符形式，如 /tools/pdf-to-excel
- **怎么查**：关键词表加一列「目标 URL」，用透视表找一词多页和一页多词；上线后用 GSC 查询 → 网页 交叉检查。
- **工具**：Google Search Console (https://search.google.com/search-console)；Screaming Frog (https://www.screamingfrog.co.uk/seo-spider/)

#### [P1] 博客和文档放子目录（/blog、/docs），子域名只给真正独立的应用
id: `structure-subfolder-not-subdomain`
- **为什么**：子域名常被当作另一个网站，内容积累的权重分不到主站；子目录还能共用统计、证书、缓存和 GSC 资源。
- **通过标准**：
  - 博客在 example.com/blog，而不是 blog.example.com
  - 子域名只用于业务或技术上隔离的部分：app.、api.、status. 等
  - 需要 SEO 的文档 / 帮助中心放在 /docs，用静态文档生成器（Fumadocs、Docusaurus、Starlight、VitePress 等）输出可索引的 HTML，并出现在 sitemap 中
- **怎么查**：规划阶段先画站点地图；已经用了子域名的，迁移时逐条 301 到子目录，并在 GSC 提交新 sitemap。
- **工具**：Google Search Console (https://search.google.com/search-console)；Cloudflare (https://dash.cloudflare.com/)

#### [P1] 上线前写好 URL 规则，之后不随意改路径
id: `structure-url-rules`
- **为什么**：每改一次路径，搜索引擎都要重新抓取、重新积累信号，外部链接也可能失效。
- **通过标准**：
  - URL 规则成文：目录层级（/blog/xxx、/tools/xxx、/vs/xxx）、全小写、连字符、是否带结尾斜杠
  - 带 / 不带结尾斜杠只保留一种可访问，另一种 301 到它，canonical 一致
  - 必须改版时，事先导出 GSC 中所有有展示的 URL，做完整的旧 → 新 301 对照表
- **怎么查**：curl -I 分别请求带斜杠和不带斜杠的地址；改版前在 GSC → 效果 → 网页 导出全部 URL。
- **工具**：Google Search Console (https://search.google.com/search-console)；Screaming Frog (https://www.screamingfrog.co.uk/seo-spider/)

### ② 开发

#### [P0] 每个页面至少有 2 个指向其他页面的内链，没有孤立页面 🤖
id: `links-internal`
- **为什么**：内链让爬虫发现页面并传递权重；孤立页面很难被收录。
- **通过标准**：
  - 每页 ≥2 个指向站内其他页面的链接
  - 重要页面离首页 ≤3 次点击
  - 主题集群：支撑文章链接到支柱页 / 产品页
- **怎么查**：auditor 爬取；Screaming Frog 的 Crawl Depth 和 Inlinks。
- **工具**：seo-handbook auditor；Screaming Frog (https://www.screamingfrog.co.uk/seo-spider/)；Ahrefs Webmaster Tools（免费） (https://ahrefs.com/webmaster-tools)

#### [P1] 锚文本有描述性，不用"点击这里" 🤖
id: `links-anchor-text`
- **为什么**：锚文本告诉搜索引擎目标页讲什么。
- **通过标准**：
  - 没有 click here / here / read more / 点击这里 这类锚文本
  - 内链锚文本自然包含目标页关键词，但不要每条都完全一样
- **怎么查**：auditor。
- **工具**：seo-handbook auditor

#### [P1] URL 干净：小写、连字符、无参数、有层级 🤖
id: `tech-clean-urls`
- **为什么**：可读的 URL 本身就是相关性信号，也更容易被分享和点击。
- **通过标准**：
  - 例如 /guide/position-sizing-rules/，不要 /page.html?id=2&ref=home
  - 全小写、用 - 不用 _
  - 改版换 URL 时做 301 跳转
- **怎么查**：auditor 检查站内链接。
- **工具**：seo-handbook auditor

#### [P1] 导航、页脚和分类页把所有重要页面串起来
id: `structure-nav-footer-hubs`
- **为什么**：导航和分类页是爬虫发现新页面的主要路径，也决定站内权重往哪里流。
- **通过标准**：
  - 顶部导航包含：功能、用例、价格、FAQ、博客、主 CTA，使用 <nav> 和普通 <a href>
  - 页脚有：隐私政策、服务条款、联系方式、About，以及主要功能页链接
  - 首页直接链接最重要的子页面；每个分类 / 集合页链接到其下全部子页面
  - 首页的功能区块、用例区块分别链接到对应详情页或文章
- **怎么查**：人工检查导航和页脚；Screaming Frog → Internal 按 Inlinks 升序，确认排在最前面的不是重要页面。
- **工具**：Screaming Frog (https://www.screamingfrog.co.uk/seo-spider/)；Ahrefs Webmaster Tools（免费） (https://ahrefs.com/webmaster-tools)

### ④ 增长

#### [P1] 用「5 篇文章漏斗」做主题集群：文章 2–5 → 文章 1 → 产品页
id: `structure-topic-cluster-funnel`
- **为什么**：集群内的权重先汇集到文章 1 再传给产品页，比每篇都直链产品页更自然，也能让文章 1 和产品页同时排名。
- **通过标准**：
  - 每个目标长尾词有 5 篇相关文章
  - 文章 1：开头和结尾各有一个以目标长尾词为锚文本、指向产品页的链接
  - 文章 2–5：用同一长尾词（或近义写法）作锚文本链接到文章 1，而不是直接链产品页
  - 集群内链都没有 rel=nofollow
- **怎么查**：发布后用 Screaming Frog 爬取，查看产品页和文章 1 的 Inlinks 及锚文本；Ahrefs Webmaster Tools → Site Audit → Internal links 复核。
- **工具**：Screaming Frog (https://www.screamingfrog.co.uk/seo-spider/)；Ahrefs Webmaster Tools（免费） (https://ahrefs.com/webmaster-tools)

#### [P1] 程序化页面（每个功能 / 格式 / 场景一页）每页都要有独有内容
id: `structure-programmatic-pages`
- **为什么**：一词一页的模板页能批量覆盖长尾，但只替换关键词的空模板属于 Google 2024 年起明确打击的「规模化内容滥用」。
- **通过标准**：
  - 每个程序化页面有该页独有的数据、示例、截图或工具输出，不只是替换关键词
  - 每个 URL 对应关键词表中一个有搜索量的词，不为凑数量生成页面
  - 先上 10–20 页观察：4–8 周后这批页面的「已抓取 - 尚未编入索引」占比 < 30% 再扩量（经验阈值）
- **怎么查**：程序化页面单独放一个 sitemap，在 GSC → 网页索引编制 中按该 sitemap 筛选看收录率；抽查 5 个页面并排阅读，判断是否只是换了关键词。
- **工具**：Google Search Console (https://search.google.com/search-console)；Screaming Frog (https://www.screamingfrog.co.uk/seo-spider/)

## 相关
- 手册 skill（原理、打法和模板）：`seo-guide-page-structure-tags`、`seo-guide-content-eeat`
- 总索引：`seo-growth-skills-index`
- 交互式工具：仓库 `tool/index.html`（构建后在 `/tool/`），可以勾选进度、导出 Markdown
