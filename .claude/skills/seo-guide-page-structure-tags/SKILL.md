---
name: seo-guide-page-structure-tags
description: 当用户要设计或审查页面结构与 SEO 标签时使用，包括落地页模块、TDK（title / meta description）、H1–H6、图片 alt、canonical、meta robots、hreflang、Open Graph、Schema JSON-LD、URL slug、内链与面包屑（on-page SEO / 页面标签 / 结构化数据）。
---

# 页面结构与 SEO 标签

> 一句话：帮用户把一个页面做成"解决某个问题的高质量文档，顺带完成转化"，并把每个 SEO 标签写对、写一致。完整内容见仓库 `handbook/02-page-structure-and-tags.md`（ArcueidShiki/seo）。

## 何时使用
- 用户要搭首页 / 工具页 / 场景落地页的结构，或问"这个页面该放哪些模块"
- 用户要写或改 title、meta description、H1，或问长度、关键词位置
- 用户给出 HTML / 模板 / 网址，要你审查 on-page 标签
- 用户问 canonical vs 301、noindex、hreflang、重复 URL 怎么处理
- 用户要生成 Organization / SoftwareApplication / BlogPosting / BreadcrumbList 的 JSON-LD
- 用户问 OG 卡片、图片 alt、URL slug、内链锚文本、面包屑

## 核心原则
1. **一个场景 = 一个页面**；Title、H1、description、正文主题、内链锚文本、Schema 必须讲同一件事。
2. **Title**：英文约 50–60 字符（约 580px），中文约 30 个汉字内；主关键词放前半部分；全站唯一；品牌放最后；不堆砌（同一词不出现两次以上）。
3. **Meta description**：英文约 120–155 字符、中文约 70–80 个汉字；按"解决什么问题 + 怎么解决 / 差异点 + 行动"写；主关键词自然出现一次；每页唯一。
4. **每页只有一个 H1**，含主关键词、用大白话；H2 对应模块，H3 对应子项，不跳级；字号用 CSS 控制，不滥用 H 标签。
5. **alt 描述图片本身传达的信息**，关键词只在相关时出现；装饰图写 `alt=""`；文件名描述内容。
6. **图片写 width / height**（防 CLS），体积 ≤ 200KB，优先 WebP / AVIF；首屏以下 `loading="lazy"`，首屏 LCP 主图不懒加载。
7. **每个可索引页面有且只有一个自引用、绝对地址的 canonical**；目标页返回 200、可索引、未被重定向；参数页 canonical 指向干净 URL。
8. **canonical 是"这页不是首选版本"（提示），301 是"这页不存在了"（强制）**：内容迁移用 301，需保留的相似版本用 canonical。
9. **重要页面绝不能 noindex**；不用 meta refresh，改服务端 301 / 302；hreflang 必须双向互指 + `x-default`。
10. **OG 管传播不管排名**：所有页面模板都输出 OG；og:image 用绝对 https、1200×630、建议 < 1MB，且不被防盗链 / Cloudflare 挑战拦截。
11. **Schema 不是排名因素**，只让页面"有资格"获得富结果；标记必须与可见内容一致；禁止伪造评分和评论；首选 JSON-LD。
12. **URL 短、小写、连字符、含关键词 slug，不带参数 / 日期 / 自增 ID**；博客放子目录；发布后不随便改，必须改就准备 301 映射表。
13. **内链**：首页链重要子页，不留孤儿页；每页至少 2 条站内链接；锚文本有描述性；内链不加 nofollow、只用主域名；内页加可见面包屑 + `BreadcrumbList`。

## 操作流程
1. **收集输入**：页面 URL 或 HTML / 框架模板、页面类型（首页 / 工具页 / 场景落地页 / 文章 / 对比页）、主关键词和次要词（没有就先用 seo-guide-keyword-research 定词）、目标语言 / 地区、品牌名、是否多语言。
2. **自动检查**（有网址时）：在仓库里运行 `node auditor/audit.mjs --url <网址> --name mysite --keyword "主关键词"`；或用 `curl -s` 取源码查看 `<head>`、H1、canonical、robots、JSON-LD。
3. **结构对照**：按下方模块顺序模板列出缺失或顺序错误的模块，指出"一个页面想讲完所有功能""只说 AI 很强大""上线后再也不改"这三个坑。
4. **标签逐项检查**：先查优先级 5 的项（title、H 标签、canonical、meta robots、viewport），再查 description、alt、Schema（4），最后 OG / Twitter Card（3）、hreflang（视情况）。
5. **改写 TDK**：按公式给 2–3 个备选，标注字符数 / 汉字数和关键词位置。
6. **生成或修正 JSON-LD**：按页面类型选 type；提醒用 Google Rich Results Test 和 Schema Markup Validator 验证到 0 错误，上线后看 GSC"增强功能"报告。
7. **检查 URL、内链、面包屑、OG**：给出修改后的代码片段。
8. **跑 10 分钟自查清单**，逐条给判定。
9. **上线后维护**：每月看该页在 GSC 的查询词，把没回答到的问题补进 FAQ / 正文；点击率偏低的页面优先改 title 和 description；在 GSC 网址检查里核对"Google 选择的规范网址"与"用户声明的规范网址"一致。

## 关键数字与门槛
| 指标 | 门槛/建议值 | 说明 |
|---|---|---|
| Title 长度（英文） | 约 50–60 字符（约 580px） | auditor 容忍 15–65 字符 |
| Title 长度（中文） | 约 30 个汉字以内 | 一个汉字约等于两个英文字符宽 |
| Description（英文） | 约 120–155 字符 | auditor 范围 50–165 |
| Description（中文） | 约 70–80 个汉字 | 经常被 Google 改写 |
| meta keywords | 3–5 个词（仅百度 / 站内需要时） | Google 忽略 |
| H1 数量 | 每页 1 个 | 不跳级 |
| 图片体积 | ≤ 200KB | WebP / AVIF |
| og:image | 1200×630，绝对 https，建议 < 1MB | 文章用封面图，产品页用 UI 截图 |
| 站内链接 | 每页 ≥ 2 条 | 描述性锚文本 |
| canonical | 每页 1 个，自引用、绝对地址 | 目标页 200 |
| Schema 验证 | 0 错误 | Rich Results Test + Schema Markup Validator |
| 标签优先级（原文主观评分，满分 5） | title 5 / H 标签 5 / canonical 5 / meta robots 5 / viewport 5 / description 4 / alt 4 / Schema 4 / OG 3 / Twitter 3 / meta keywords 1 | 按优先级排查 |

## 模板与示例
**高转化页面模块顺序**
| # | 模块 | 标签 | 要点 |
|---|---|---|---|
| 0 | 页头导航 | `<header>` + `<nav>` | Logo 链 `/`，描述性锚文本，注册 / 试用 CTA |
| 1 | Hero | 唯一 `<h1>` + 副标题 + CTA | H1 说清能做什么并含主关键词；CTA 低门槛（"免费生成第一版"） |
| 2 | 痛点 | `<h2>` | 3 个具体痛点 |
| 3 | 解决方案 | `<h2>` + 每个能力一个 `<h3>` | 写"解决了什么问题"，不只列功能 |
| 4 | 使用步骤 | `<h2>` + `<ol>` | 你做什么 → AI 做什么 → 你得到什么，配截图 / GIF |
| 5 | 案例 | `<figure>` / `<blockquote>` | 真实输出、前后对比、小规模数据 |
| 6 | 对比 | `<h2>` + `<table>` | 覆盖 X vs Y / alternatives |
| 7 | FAQ | `<h2>` + 问句 `<h3>` 或 `<details>` | 用户真实措辞，第一句给结论 |
| 8–10 | 结尾 CTA / 相关内容 / 页脚 | `<section>` / `<aside>` / `<footer>` | 直接给下一步；内链；公司信息、隐私条款、社交 |

**TDK 公式**
```text
工具 / 落地页：主关键词 + 核心利益 / 场景 ｜ 品牌
文章：        主关键词（问题或数字）+ 具体收获（补充说明）
对比页：      X vs Y：差异点 + 适合谁（年份）
✅ AI 海报生成器：30 秒生成可商用海报 ｜ ExampleAI
✅ Convert bank statement PDFs to Excel in seconds. Keeps tables and dates intact, works with 500+ banks. Try 3 files free.
```

**head 关键标签**
```html
<html lang="zh-CN">
<meta name="viewport" content="width=device-width, initial-scale=1">
<link rel="canonical" href="https://example.com/pdf-to-excel">
<meta name="robots" content="noindex, follow">  <!-- 仅薄页 / 工具结果页 / 站内搜索页 -->
<link rel="alternate" hreflang="en" href="https://example.com/en/pdf-to-excel">
<link rel="alternate" hreflang="zh-CN" href="https://example.com/zh/pdf-to-excel">
<link rel="alternate" hreflang="x-default" href="https://example.com/en/pdf-to-excel">
<meta property="og:title" content="…"><meta property="og:description" content="…">
<meta property="og:url" content="https://example.com/"><meta property="og:type" content="website">
<meta property="og:image" content="https://example.com/og/home.png">
<meta name="twitter:card" content="summary_large_image">
```

**Schema 选型**：首页 `Organization` + `WebSite`（name、url、logo、sameAs）；产品页 `SoftwareApplication`（applicationCategory、operatingSystem、offers）；文章 `Article` / `BlogPosting`（headline、author→Person、datePublished、dateModified、image）；内页 `BreadcrumbList`；FAQ 区块 `FAQPage`；实体店 `LocalBusiness`。
```json
{
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  "name": "Example PDF to Excel",
  "applicationCategory": "BusinessApplication",
  "operatingSystem": "Web",
  "url": "https://example.com/pdf-to-excel",
  "offers": { "@type": "Offer", "price": "0", "priceCurrency": "USD" },
  "publisher": { "@id": "https://example.com/#org" }
}
```

**10 分钟自查清单**
```text
[ ] 每页唯一 title，主关键词靠前，长度合规         onpage-title / onpage-title-unique
[ ] 每页唯一 description，像广告文案                onpage-meta-description
[ ] 只有一个 H1，H2/H3 不跳级                       onpage-h1 / onpage-heading-hierarchy
[ ] 关键词出现在 title、H1、description、首段       onpage-keyword-placement
[ ] 自引用绝对 canonical；重要页面无 noindex         tech-canonical / tech-indexable
[ ] viewport、lang、favicon                         tech-viewport / tech-html-lang / tech-favicon
[ ] 内容图有 alt + width/height，≤200KB             img-alt / img-dimensions / img-optimized
[ ] OG 五件套 + twitter:card，og:image 1200×630     social-open-graph / social-twitter-card
[ ] JSON-LD 有效：Organization+WebSite、页面类型、面包屑   serp-structured-data / serp-entity-schema / serp-breadcrumbs
[ ] URL 干净；每页 ≥2 条描述性内链                  tech-clean-urls / links-internal / links-anchor-text
```

## 常见错误与过时做法
- ⚠️ 上线前没去掉测试环境的全局 noindex（很常见的事故）。
- ⚠️ 用 meta refresh 跳转；canonical 指向 404、内容明显不同的页或形成循环（Google 会忽略）。
- ⚠️ alt 不写、堆关键词、写成"图片1"、全站共用一段；用 Logo 当 og:image；只有首页配了 OG。
- ⚠️ 用"重新定义""赋能""下一代"这类空洞词写 H1；为样式滥用 H 标签。
- ⚠️ **2026 更新**：description 关键词出现约 3 次、关键词密度 2%–8%、必须写 meta keywords 都是百度时代老规则；现在关键词在 title、H1、首段、description 各自然出现一次，正文用同义词和相关实体覆盖。
- ⚠️ **2026 更新**：Google 从 2021 年起大规模改写 title 链接，description 改写比例更高；在 GSC 找低点击率页面优先重写。
- ⚠️ **2026 更新**：alt 不必每张都带页面关键词，描述图片本身即可（符合 WCAG 1.1.1）。
- ⚠️ **2026 更新**：X 的 Card Validator 从 2022 年起不再提供预览，改在发帖框里看；改 OG 后用 Facebook Sharing Debugger 强制重抓。
- ⚠️ **2026 更新**：FAQ 富结果自 2023 年 8 月起只给少数权威政府和健康网站；HowTo 富结果 2023 年已停止展示。FAQ 内容和 `FAQPage` 仍有助于语义理解、长尾和 AI 引用。
- ⚠️ **2026 更新**：`SoftwareApplication` 富结果一般需要 `aggregateRating` 或 `review`；没有真实评分不要加，自评不会展示还可能被处罚。
- ⚠️ **2026 更新**：Google 从 2025 年起移动端结果只显示域名，不显示面包屑路径；面包屑标记仍要加。
- ⚠️ 原文"Google 图片约占总搜索流量 20–25%"请谨慎引用。

## 交付格式
1. **问题清单表**（按优先级排序）：

| 优先级 | 项 | 现状 | 问题 | 修改建议 | Checklist id |
|---|---|---|---|---|---|

   P0 = 影响收录或主关键词信号（noindex、canonical、title、H1）；P1 = 影响点击率或富结果资格（description、Schema、alt）；P2 = 传播与体验（OG、面包屑、文件名）。
2. **TDK 改写方案**：每项 2–3 个备选，标注长度和推荐理由。
3. **可直接粘贴的代码**：修正后的 `<head>` 片段、JSON-LD、语义化骨架。
4. **验证步骤**：Rich Results Test、GSC 网址检查、auditor 复跑命令。
5. 对"改了以后排名会不会涨"这类问题，用"可能性高 / 中 / 低"表述并说明依据，不承诺结果。

## 相关
- Checklist skill(s): seo-checklist-onpage, seo-checklist-structure, seo-checklist-serp, seo-checklist-technical, seo-checklist-performance, seo-checklist-i18n
- 其他手册 skills: seo-guide-keyword-research, seo-guide-technical-infra, seo-guide-content-eeat, seo-guide-geo-ai-search, seo-guide-glossary
