# SEO Before vs After — 审计对比

生成时间：2026-11-01T05:16:34.625Z

| | Demo A 优化前 | Demo B 优化后 |
|---|---|---|
| Checklist 自动审计得分 | 8/100 | 100/100 |
| Lighthouse 性能 Performance | 64 | 100 |
| Lighthouse SEO | 73 | 100 |
| Lighthouse 无障碍 Accessibility | 51 | 100 |
| Lighthouse 最佳实践 Best Practices | 96 | 100 |
| LCP 最大内容绘制 (≤2.5s) | 18.1 s | 1.4 s |
| TBT 总阻塞时间 (≤200ms) | 0 ms | 21 ms |
| CLS 累计布局偏移 (≤0.1) | 0 | 0 |
| 页面总大小 | 3361 KB | 47 KB |

## 逐条结果

| 条目 | 优化前 | 优化后 |
|---|---|---|
| URL 干净：小写、连字符、无参数、有层级 (`tech-clean-urls`) | ❌ 未通过 non-clean internal URLs: /page.html?id=2&ref=home | ✅ 通过 internal URLs are lowercase, hyphenated, no query strings |
| 每个页面至少有 2 个指向其他页面的内链，没有孤立页面 (`links-internal`) | ❌ 未通过 /: only 1 internal links to other pages / /page.html: only 1 internal links to other pages / /index.html: only 1 internal links to other pages | ✅ 通过 every page links to ≥2 other internal pages |
| 锚文本有描述性，不用"点击这里" (`links-anchor-text`) | ❌ 未通过 /: generic anchors: click here / /page.html: generic anchors: click here / /index.html: generic anchors: click here | ✅ 通过 no "click here"-style anchor text |
| 每个页面有独立、含关键词的 <title> (`onpage-title`) | ❌ 未通过 /: generic title "Home" / /page.html: generic title "Home" / /index.html: generic title "Home" | ✅ 通过 all 4 pages have unique-looking 15–65 char titles |
| 全站没有重复的 title (`onpage-title-unique`) | ❌ 未通过 duplicate titles: Home | ✅ 通过 no duplicate titles |
| 每个页面有 meta description (`onpage-meta-description`) | ❌ 未通过 /: missing meta description / /page.html: missing meta description / /index.html: missing meta description | ✅ 通过 every indexable page has a 50–165 char meta description |
| 每页恰好 1 个 H1，且在服务端 HTML 中 (`onpage-h1`) | ❌ 未通过 /: 0 <h1> in server HTML (want exactly 1) / /page.html: 0 <h1> in server HTML (want exactly 1) / /index.html: 0 <h1> in server HTML (want exactly 1) | ✅ 通过 exactly one H1 in the server-rendered HTML of every page |
| 标题层级 H1→H2→H3 不跳级 (`onpage-heading-hierarchy`) | ❌ 未通过 /: no headings at all / /page.html: no headings at all / /index.html: no headings at all | ✅ 通过 headings never skip a level |
| 主关键词出现在 title、H1、description、首段、URL (`onpage-keyword-placement`) | ❌ 未通过 "vexlora position size calculator" missing from: title, h1, description, first100words | ✅ 通过 "vexlora position size calculator" appears in title, H1, description and opening text |
| Open Graph 社交卡片（og:title / description / image / url） (`social-open-graph`) | ❌ 未通过 /: missing og:title, og:description, og:image, og:url / /page.html: missing og:title, og:description, og:image, og:url / /index.html: missing og:title, og:description, og:image, og:url | ✅ 通过 og:title / og:description / og:image / og:url on every page |
| Twitter / X card 标签 (`social-twitter-card`) | ❌ 未通过 /: no twitter:card / /page.html: no twitter:card / /index.html: no twitter:card | ✅ 通过 twitter:card on every page |
| 所有图片有描述性 alt (`img-alt`) | ❌ 未通过 /: 1 <img> without alt / /index.html: 1 <img> without alt | ✅ 通过 every image has descriptive alt text |
| <html lang> 声明页面语言 (`tech-html-lang`) | ❌ 未通过 /: no <html lang> / /page.html: no <html lang> / /index.html: no <html lang> | ✅ 通过 every page declares <html lang> |
| 移动端 viewport 与响应式布局 (`tech-viewport`) | ❌ 未通过 /: no responsive viewport meta / /page.html: no responsive viewport meta / /index.html: no responsive viewport meta | ✅ 通过 responsive viewport on every page |
| 每个可索引页面有自引用的绝对 canonical (`tech-canonical`) | ❌ 未通过 /: no canonical / /page.html: no canonical / /index.html: no canonical | ✅ 通过 every indexable page has an absolute, self-referencing canonical |
| 重要页面没有误加 noindex (`tech-indexable`) | ✅ 通过 no important page carries noindex | ✅ 通过 no important page carries noindex |
| 正文在不执行 JS 的 HTML 中就存在（SSR / SSG） (`tech-ssr-content`) | ❌ 未通过 /: only 1 words in HTML before JavaScript runs (rendered: 11) / /page.html: only 11 words in HTML before JavaScript runs (rendered: 11) / /index.html: only 1 words in HTML before JavaScript runs (rendered: 11) | ✅ 通过 main content is present in the HTML without JavaScript (SSR/SSG) |
| robots.txt 允许抓取并声明 Sitemap (`tech-robots-txt`) | ❌ 未通过 robots.txt returned HTTP 404 | ✅ 通过 robots.txt present, allows crawling, declares Sitemap |
| XML sitemap：只含可索引的规范 URL，lastmod 真实 (`tech-xml-sitemap`) | ❌ 未通过 no valid sitemap.xml (HTTP 404) | ✅ 通过 4 URLs, with <lastmod> |
| 不存在的 URL 返回真实 404 状态码，并有引导链接 (`tech-404`) | ✅ 通过 missing URL returned HTTP 404 with links back into the site | ✅ 通过 missing URL returned HTTP 404 with links back into the site |
| favicon（Google 结果里显示的站点图标） (`tech-favicon`) | ❌ 未通过 no <link rel="icon"> (browser tab + Google result icon) | ✅ 通过 favicon declared |
| 图片声明 width / height，避免布局偏移（CLS） (`img-dimensions`) | ❌ 未通过 /: 1 <img> without width/height (layout shift) / /index.html: 1 <img> without width/height (layout shift) | ✅ 通过 every image declares width/height |
| 图片压缩并使用 WebP / AVIF，首屏外懒加载 (`img-optimized`) | ❌ 未通过 /hero.png 3356KB image/png / /hero.png 3356KB image/png | ✅ 通过 all images ≤200KB, modern formats |
| Lighthouse 移动端：性能 ≥90，SEO / 无障碍 / 最佳实践 ≥90 (`perf-lighthouse`) | ⚠️ 部分 mobile Lighthouse performance 64, SEO 73, accessibility 51, best practices 96 | ✅ 通过 mobile Lighthouse performance 100, SEO 100, accessibility 100, best practices 100 |
| Core Web Vitals 达标：LCP ≤2.5s · INP ≤200ms · CLS ≤0.1 (`perf-core-web-vitals`) | ❌ 未通过 lab LCP 18.1s (≤2.5s), CLS 0 (≤0.1), TBT 0ms (≤200ms; proxy for INP) | ✅ 通过 lab LCP 1.4s (≤2.5s), CLS 0 (≤0.1), TBT 21ms (≤200ms; proxy for INP) |
| 首页总传输体积 ≤1MB (`perf-page-weight`) | ❌ 未通过 homepage transfers 3361 KB (budget ≤1000 KB) | ✅ 通过 homepage transfers 47 KB (budget ≤1000 KB) |
| 验证 Google Search Console 并提交 sitemap (`indexing-gsc`) | 🔧 需人工 verify the property in Google Search Console (needs your Google account) | 🔧 需人工 verify the property in Google Search Console (needs your Google account) |
| 引用权威外部来源 (`links-external-citation`) | ❌ 未通过 cites at least one external authoritative source | ✅ 通过 cites at least one external authoritative source |
| 核心页面内容足够回答搜索意图（不是薄内容） (`content-depth`) | ❌ 未通过 11 words of visible main content on the homepage | ✅ 通过 525 words of visible main content on the homepage |
| E-E-A-T 信号：About 页、作者署名、更新日期、联系方式 (`content-eeat-signals`) | ❌ 未通过 no About page and/or no visible dates/authorship | ✅ 通过 About page + visible updated dates found |
| JSON-LD 结构化数据合法且与页面内容一致 (`serp-structured-data`) | ❌ 未通过 /: no JSON-LD / /page.html: no JSON-LD / /index.html: no JSON-LD | ✅ 通过 valid JSON-LD on every page; types: Organization, WebSite, WebApplication, Offer, BreadcrumbList, ListItem, FAQPage, Question, Answer, Article, ImageObject, AboutPage |
| BreadcrumbList 面包屑 (`serp-breadcrumbs`) | ❌ 未通过 no BreadcrumbList schema | ✅ 通过 BreadcrumbList schema present |
| Organization + WebSite 实体（站点名、logo、sameAs） (`serp-entity-schema`) | ❌ 未通过 Organization: false, WebSite: false | ✅ 通过 Organization: true, WebSite: true |
| FAQ / 问答式小标题 (`geo-faq-blocks`) | ❌ 未通过 no Q&A-format content | ✅ 通过 question-style headings / FAQPage found (easy for AI answers to quote) |
| 答案先行：H1 后第一段直接给出定义 / 结论 (`geo-answer-first`) | ❌ 未通过 no concise definitional answer right after the H1 | ✅ 通过 opening paragraph answers directly: "Position size = (account size × risk %) ÷ (entry price − stop-loss price).
      Enter four numbers below and …" |
| 根目录提供 /llms.txt (`geo-llms-txt`) | ❌ 未通过 llms.txt HTTP 404 | ✅ 通过 llms.txt present with title and links |
| robots.txt 没有屏蔽 AI 搜索爬虫 (`geo-ai-crawlers`) | ⚠️ 部分 no robots.txt — AI crawlers allowed by default but not explicitly | ✅ 通过 AI crawlers allowed (5 named explicitly) |
| 安装网站统计（GA4 / Plausible / Umami / Clarity） (`analytics-installed`) | 🔧 需人工 no analytics detected — add GA4 / Plausible / Umami / Clarity ID at build time (needs your account) | 🔧 需人工 no analytics detected — add GA4 / Plausible / Umami / Clarity ID at build time (needs your account) |
| 多语言页面 hreflang 互相指向并带 x-default (`tech-hreflang`) | — 不适用 single-language site (no hreflang needed) | ✅ 通过 hreflang tags are reciprocal with x-default |

## SERP 预览

**优化前：** Home — (no meta description — Google picks page text) vexlora Vexlora Calc acct risk in sl GO Our tool helps traders. For more info click here . © vexlora

**优化后：** Vexlora Position Size Calculator – Free Risk-Based Tool — Free Vexlora position size calculator: enter account size, risk % and stop-loss to get the exact number of shares to buy. Formula, worked examples and FAQ.
