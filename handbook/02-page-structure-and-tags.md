# 页面结构与 SEO 标签

> 一句话：**一个好的 SEO 页面，本质上是一份"解决某个问题的高质量文档"，顺带完成转化**，不是产品宣传册。页面结构要同时贴合两条路径：用户的思考顺序，以及搜索引擎理解页面的顺序。
>
> 相关 Checklist 条目：`onpage-title`、`onpage-title-unique`、`onpage-meta-description`、`onpage-h1`、`onpage-heading-hierarchy`、`onpage-keyword-placement`、`img-alt`、`img-dimensions`、`tech-canonical`、`tech-indexable`、`tech-clean-urls`、`social-open-graph`、`social-twitter-card`、`serp-structured-data`、`serp-breadcrumbs`、`serp-entity-schema`、`links-internal`、`links-anchor-text`。

---

## 1. 高转化 SEO 页面模板（模块顺序）

适用于 AI SaaS / 工具站的首页和场景落地页。整合了《网站页面结构设计》中的 8 段式结构，以及《页面结构示例》里的页头和页脚部分：

| # | 模块 | 推荐标签 | 写什么 | SEO / 转化作用 |
|---|---|---|---|---|
| 0 | 页头导航 | `<header>` + `<nav>` | Logo（链接到 `/`，alt 写品牌 + 定位）、功能、使用场景、价格、FAQ、博客、注册 / 免费试用 CTA | 描述性锚文本，帮助抓取和权重分配 |
| 1 | **Hero 首屏** | 唯一的 `<h1>` + 副标题 + CTA | H1 用大白话说清楚"它能做什么"，并包含主关键词；副标题写场景或目标人群；CTA 选低门槛动作（"免费生成第一版"，不要写"立即购买"） | 主关键词信号；让用户一眼判断是否相关 |
| 2 | 痛点 | `<h2>` 为什么你需要 [方案] | 3 个具体痛点 | 覆盖长尾词，贴合搜索意图 |
| 3 | 解决方案 | `<h2>` + 每个能力一个 `<h3>` | 每个 H3 写"解决了什么问题"，不要只列"支持多模型"这类功能点 | 语义丰富，自然覆盖次要词 |
| 4 | 使用步骤 | `<h2>` 如何使用 [产品] + `<ol>` | Step 1 你做什么 → Step 2 AI 做什么 → Step 3 你得到什么，配截图 / GIF | 命中 "how to" 类查询；流程清楚的页面即使没有外链也有机会排名 |
| 5 | 案例 / 效果 | `<figure>`、`<blockquote>` | 真实输出、前后对比、小规模数据（几十个用户也可以） | E-E-A-T 的核心；不完美但真实的案例比精修的营销图更有说服力 |
| 6 | 对比 | `<h2>` [产品] vs 传统方式 / 竞品 + `<table>` | 对比表 | 覆盖 "X alternatives" 和 "X vs Y" 查询，转化率高 |
| 7 | FAQ | `<h2>` + 问句式 `<h3>` 或 `<details>` | 按用户真实的搜索措辞提问，答案第一句就给结论，持续补充 | 长尾词、AI 引用（`geo-faq-blocks`） |
| 8 | 结尾 CTA | `<section>` | 不需要总结，直接给出下一步 | 转化 |
| 9 | 相关内容 | `<aside>` 或 `<section>` | 相关功能页、相关文章 | 内链和权重分配，延长停留时间 |
| 10 | 页脚 | `<footer>` | 公司信息和联系方式、隐私 / 条款 / Cookie、社交账号、邮件订阅、重复导航 | 信任信号；Organization schema |

**三个常见坑**

1. **一个页面想讲完所有功能** → 规则是"一个场景 = 一个页面"。
2. **只说"AI 很强大"** → 要写清楚能力边界、不适合哪些人、什么情况下效果最好。
3. **上线后再也不改** → 每月看一次这个页面在 GSC 里的查询词，把还没回答到的问题补进 FAQ 或正文。

**语义化骨架**

```html
<header><nav aria-label="主导航">…</nav></header>
<main>
  <section class="hero">
    <h1>AI 海报生成器：输入一句话，30 秒得到可商用海报</h1>
    <p>给小红书、电商和活动运营用的海报工具，免登录先试 3 张。</p>
    <a href="/app">免费生成第一版</a>
  </section>
  <section><h2>为什么手动做海报总是来不及？</h2>…</section>
  <section><h2>我们怎么解决</h2><h3>批量生成同系列海报</h3>…</section>
  <section><h2>如何使用 AI 海报生成器</h2><ol><li>…</li><li>…</li><li>…</li></ol></section>
  <section><h2>真实案例</h2><figure>…</figure><blockquote>…</blockquote></section>
  <section><h2>AI 海报生成器 vs 传统设计流程</h2><table>…</table></section>
  <section><h2>常见问题</h2><h3>生成的海报可以商用吗？</h3><p>可以。……</p></section>
</main>
<footer>…</footer>
```

---

## 2. 标签重要性评分表

综合《SEO 中最重要的标签详解》的评分和《SEO中的重要标签》速查表（分数为原文的主观评分，满分 5）：

| 标签 | 作用对象 | 排名影响 | 难度 | 优先级 | 2026 备注 | auditor |
|---|---|---|---|---|---|---|
| `<title>` | 搜索引擎 | 5 | 1 | 5 | 页面上权重最高的相关性信号 + 点击率 | `onpage-title` |
| meta description | SERP 摘要 | 3（通过点击率间接影响） | 1 | 4 | 经常被 Google 改写 | `onpage-meta-description` |
| img `alt` | 图片搜索、无障碍 | 4 | 2 | 4 | 原文称 Google 图片约占总搜索流量的 20–25%（原文数字，请谨慎引用） | `img-alt` |
| Schema / JSON-LD | 富结果、实体、AI | 3（直接影响 2，富结果点击率 4） | 3 | 4 | FAQ / HowTo 富结果已大幅收缩，见第 9 节 | `serp-structured-data` |
| H1–H6 | 内容层级 | 高 | 1 | 5 | 每页一个 H1，层级不要跳级 | `onpage-h1` |
| canonical | 去重 | 间接 | 2 | 5 | 每页指向自己（自引用） | `tech-canonical` |
| meta robots | 是否收录 | 决定性 | 1 | 5 | 重要页面不能出现 noindex | `tech-indexable` |
| Open Graph | 社交分享卡片 | 0 | 1 | 3 | 影响分享点击率和可信度 | `social-open-graph` |
| Twitter Card | X 分享卡片 | 0 | 1 | 3 | — | `social-twitter-card` |
| hreflang | 多语言 / 多地区 | 间接 | 3 | 视情况 | 必须双向引用 + x-default | `tech-hreflang` |
| viewport | 移动端友好 | 间接（移动优先索引） | 1 | 5 | — | `tech-viewport` |
| meta keywords | — | 1（可以忽略） | 1 | 1 | Google 不读取；百度权重极低 | — |
| meta refresh | — | 负面 | — | 不要用 | 改用服务端 301 / 302 | — |

---

## 3. TDK：Title / Description / Keywords

TDK 是搜索引擎理解页面的"第一入口"，不是排名捷径。**Title、H1、description、正文主题、内链锚文本、Schema 必须讲的是同一件事**，这种一致性能让主题理解更稳定。

### 3.1 Title

| 规则 | 说明 |
|---|---|
| 长度 | 英文 **约 50–60 个字符（约 580px）**；中文 **约 30 个汉字以内**（中文按像素宽度算，一个汉字约等于两个英文字符）。auditor 的容忍范围是 15–65 个字符 |
| 关键词位置 | 主关键词放在 **前半部分**，越靠前越好 |
| 唯一性 | 全站每个可索引页面的 title 都不一样（`onpage-title-unique`）；大量重复的 title 会削弱全站表现 |
| 分隔符 | 两段式标题用 `｜`、`-` 或 `，` 分隔，品牌名放最后 |
| 禁止 | 堆砌关键词（同一个词出现两次以上）、和内容不符（会被 Google 改写，也会损失点击） |

**写法公式**

```text
工具 / 落地页：主关键词 + 核心利益 / 场景 ｜ 品牌
文章：        主关键词（问题或数字）+ 具体收获（补充说明）
对比页：      X vs Y：差异点 + 适合谁（年份）
```

| ❌ 差 | ✅ 好 | 原因 |
|---|---|---|
| 首页 | AI 海报生成器：30 秒生成可商用海报 ｜ ExampleAI | 有关键词和利益点 |
| AI海报,AI设计,AI生成海报,海报生成器,免费海报 | 免费 AI 海报生成器（无需登录） | 不堆砌 |
| The Best Revolutionary Next-Gen AI Image Platform | AI Image Editor – Edit Photos with Text Prompts, Free | 用大白话、带关键词 |
| 2025 年最全 SEO 指南 | SEO 入门指南：从 0 到第一批自然流量（含 12 个实战案例） | 不靠堆年份和形容词；如果写了年份，就要每年真的更新内容 |

### 3.2 Meta description

- 不直接影响排名，但决定点击率。和查询匹配时 Google 倾向于直接使用它，否则会从正文里截取一段。
- 长度：英文约 **120–155 个字符**，中文约 **70–80 个汉字**（auditor 范围 50–165）。
- 当成广告文案来写：**解决什么问题 + 怎么解决 / 差异点 + 行动**，主关键词自然出现一次。
- 每页唯一，不要全站共用一段。

| ❌ 差 | ✅ 好 |
|---|---|
| ExampleAI 是一个 AI 设计工具，AI 设计，AI 海报，AI 封面，AI 图片…… | 输入一句话，30 秒生成小红书、电商、活动海报。支持批量生成和高清导出，免登录先试 3 张。 |
| Welcome to our website. We offer the best solutions. | Convert bank statement PDFs to Excel in seconds. Keeps tables and dates intact, works with 500+ banks. Try 3 files free. |

### 3.3 Keywords

Google 忽略，Bing 大幅降权，百度权重也很低。只有在面向百度、或者站内 CMS / 站内搜索需要的时候才写：3–5 个和本页相关的词，用英文逗号分隔。

> ⚠️ **2026 更新**：《什么样的文章容易获得排名》中提到的"description 里关键词出现约 3 次""关键词密度 2%–8%""必须写 meta keywords"都是百度时代的老规则，放到今天容易变成关键词堆砌。现在的标准是：**关键词在 title、H1、开头段落、description 里各自然出现一次，正文用同义词和相关实体去覆盖主题**。另外，Google 从 2021 年起会大规模改写 title 链接，description 被改写的比例更高。可以在 GSC 里找点击率偏低的页面，优先改写它们的 title 和 description。

---

## 4. H 标签

- **每页只有一个 H1**，包含主关键词，用大白话写。避免"重新定义""赋能""下一代"这类空洞词。
- H2 对应页面模块（痛点、方案、步骤、对比、FAQ），H3 对应模块内的子项。**不要跳级**，比如 H2 后面直接接 H4（`onpage-heading-hierarchy`）。
- 目录结构要围绕主关键词展开。SERP 分析时我们也是用"Title 完整包含关键词、H1 直接命中、目录围绕它"来判断竞品是否专门为这个词而写的。
- 不要为了样式滥用 H 标签，字号用 CSS 控制。

---

## 5. 图片与 Alt

| 图片类型 | alt 怎么写 | 示例 |
|---|---|---|
| 信息类（产品图、信息图、图表、截图） | 用一句话描述**图片传达的关键信息**，关键词自然出现 | `alt="AI 海报生成器批量生成 6 张同系列促销海报的界面"` |
| UI 截图 / 功能演示 | 写清楚展示的是哪个功能 | `alt="PDF 转 Excel 后保留原表格结构的对比截图"` |
| Logo | 品牌 + 定位 | `alt="ExampleAI – AI 设计工具"` |
| 装饰性图片（背景、分隔线） | **`alt=""`**（保留属性，内容为空），让屏幕阅读器跳过 | `alt=""` |

- ❌ 常见错误：不写 alt、堆砌关键词（"AI工具 AI设计 AI生成 Logo设计…"）、写成"图片1""img123"、所有图片共用同一段 alt。
- alt 和 title 属性的区别：alt 是替代文本，影响无障碍和 SEO，非装饰图片必须写；title 只是悬停提示，对 SEO 作用很小，可写可不写。
- **文件名**也要描述内容，例如 `ai-poster-batch-generation.webp`，不要用 `IMG_1234.png`。
- 必须写 `width` 和 `height`，防止布局偏移（`img-dimensions`）。体积 ≤ 200KB，优先用 WebP / AVIF（`img-optimized`）。
- 首屏以下的图片加 `loading="lazy"`；**首屏主图（LCP 元素）不要懒加载**。
- 图片较多的网站（设计、素材类）可以加图片 sitemap（见 [03 章](../03-technical-seo-and-infra/)）。

> ⚠️ **2026 更新**：《Alt标签》中的建议都还有效。需要补充的一点是：《什么样的文章容易获得排名》建议"每张图的 alt 都带页面关键词"。现在更好的做法是**描述图片本身**，关键词只在确实相关时出现。这样也符合 WCAG 1.1.1 的要求。

---

## 6. Canonical vs 301

**重复 URL 从哪来**：URL 参数（排序、筛选、UTM）、结尾带不带 `/`、HTTP 和 HTTPS、www 和裸域、分页 / 排序 / 筛选页、同一商品挂在多个分类路径下、A/B 测试 URL、几乎一样的模板页。

重复内容本身不会被惩罚，真正的问题是**信号分散，搜索引擎不知道该选哪个**。

```html
<!-- 每个可索引页面：一个、绝对地址、指向自己 -->
<link rel="canonical" href="https://example.com/pdf-to-excel">
```

| 对比项 | canonical | 301 |
|---|---|---|
| 用户会不会被跳转 | 不会 | 会 |
| 权重合并方式 | 信号级（提示，Google 可能不采纳） | 强制 |
| 原页面还能访问吗 | 能 | 不能 |
| 适用场景 | 内容相似、需要保留的多个版本（参数页、多分类路径、A/B 页、转载） | 内容已经迁移（改域名、改路径、合并文章） |
| 一句话 | "这一页不是首选版本" | "这一页已经不存在了" |

**Google 可能忽略你的 canonical**：目标页返回 404 或报错；目标页内容明显不同；canonical 互相指向形成循环；页面整体质量太低。

**自查**：

- 每个可索引页面有 **且只有一个** 自引用的绝对 canonical（`tech-canonical`）。
- canonical 指向的页面返回 200、可以被索引、没有被重定向。
- `?utm_source=x` 这类变体页面的 canonical 指向干净 URL。
- 在 GSC 的网址检查里，"Google 选择的规范网址"和"用户声明的规范网址"一致。
- 转载到 Medium / Dev.to / Hashnode 的文章，canonical 指回原文（见 [04 章](../04-content-and-eeat/)）。

---

## 7. meta robots

```html
<meta name="robots" content="noindex, follow">   <!-- 内容单薄的页面、工具结果页、站内搜索结果页 -->
<meta name="viewport" content="width=device-width, initial-scale=1">
<html lang="zh-CN">                                <!-- tech-html-lang -->
```

- 重要页面**绝对不能**带 `noindex`（`tech-indexable`）。上线前要把测试环境的全局 noindex 去掉，这是很常见的事故。
- 不要用 `<meta http-equiv="refresh">` 做跳转，改用服务端 301 / 302。
- 多语言站点用 hreflang，必须**双向互指**，并加上 `x-default`（`tech-hreflang`）：

```html
<link rel="alternate" hreflang="en" href="https://example.com/en/pdf-to-excel">
<link rel="alternate" hreflang="zh-CN" href="https://example.com/zh/pdf-to-excel">
<link rel="alternate" hreflang="x-default" href="https://example.com/en/pdf-to-excel">
```

---

## 8. Open Graph 与 Twitter 卡片

SEO 标签管"搜索"，OG 标签管"传播"。OG 不影响排名，但决定链接在微信、X、Telegram、Slack 里的卡片样式，进而影响点击率和可信度。

```html
<meta property="og:title" content="30 秒做一张可商用海报：AI 海报生成器">
<meta property="og:description" content="输入一句话，批量生成同系列海报，免登录先试 3 张。">
<meta property="og:url" content="https://example.com/">          <!-- 等于 canonical，不带参数 -->
<meta property="og:type" content="website">                       <!-- 首页 website / 文章 article / 产品 product -->
<meta property="og:image" content="https://example.com/og/home.png">  <!-- 绝对 https 地址，1200×630 -->
<meta property="og:image:width" content="1200">
<meta property="og:image:height" content="630">
<meta name="twitter:card" content="summary_large_image">
```

**og:image 规格**：绝对 https URL；推荐 **1200×630**；体积尽量小（建议 < 1MB）；服务器必须允许外部抓取，防盗链和 Cloudflare 挑战不能拦截平台爬虫。

**常见坑**

| 坑 | 解决 |
|---|---|
| 只有首页配置了 OG | 在模板层面给所有页面输出 OG |
| 用 Logo 做 og:image（大片留白 + 很小的 Logo） | 文章用封面图，产品页用 UI 截图或场景图 |
| 改了 OG 但平台还显示旧卡片 | 用 Facebook Sharing Debugger 强制重新抓取 |

> ⚠️ **2026 更新**：原文推荐用 Twitter Card Validator 刷新卡片。X 的 Card Validator 从 2022 年起就不再提供预览了，现在只能在发帖编辑框里直接看预览。OG 图片生成器可以用 <img src="https://www.google.com/s2/favicons?domain=ogimage.click&sz=32" width="16" height="16" alt=""> [OGImage](https://ogimage.click/) 或 <img src="https://www.google.com/s2/favicons?domain=ogimagemaker.com&sz=32" width="16" height="16" alt=""> [OGImageMaker](https://ogimagemaker.com/)，都是免费的。

---

## 9. Schema 结构化数据（JSON-LD）

Schema.org 是 2011 年由 Google、Bing、Yahoo 和 Yandex 共同发起的词汇表。它**不是直接的排名因素**，作用是让页面**有资格**获得富结果（但不保证一定有），同时给 AI 搜索和知识图谱提供一份"机器可读的品牌档案"。

**语法选择**：JSON-LD（Google 推荐，和 HTML 分离，好维护）> Microdata（内嵌在 HTML 里，比较乱）> RDFa（SEO 场景很少用）。

| 页面 | 推荐类型 | 关键字段 | auditor |
|---|---|---|---|
| 首页 | `Organization` + `WebSite` | name、url、logo、sameAs（社交账号） | `serp-entity-schema` |
| 产品 / 工具页 | `SoftwareApplication`（或 `Product`） | name、applicationCategory、operatingSystem、offers（price、priceCurrency） | `serp-structured-data` |
| 文章 | `Article` / `BlogPosting` | headline、author（Person）、datePublished、dateModified、image | `serp-structured-data` |
| 内页 | `BreadcrumbList` | itemListElement（position、name、item） | `serp-breadcrumbs` |
| FAQ 区块 | `FAQPage` | mainEntity → Question / acceptedAnswer | `geo-faq-blocks` |
| 实体店 | `LocalBusiness` | 地址、营业时间 | — |

**原则**：标记内容必须和页面上可见的内容一致；**禁止伪造评分和评论**（有被处罚的风险）；类型要选对，不要为了富结果乱用类型；优先给首页、文章页和产品页加 Schema，不是每个页面都需要。

**首页：Organization + WebSite**

```html
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": "https://example.com/#org",
      "name": "Example AI",
      "url": "https://example.com/",
      "logo": "https://example.com/logo.png",
      "sameAs": ["https://x.com/example", "https://github.com/example"]
    },
    {
      "@type": "WebSite",
      "@id": "https://example.com/#website",
      "url": "https://example.com/",
      "name": "Example AI",
      "publisher": { "@id": "https://example.com/#org" },
      "inLanguage": "zh-CN"
    }
  ]
}
</script>
```

**产品页：SoftwareApplication**

```html
<script type="application/ld+json">
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
</script>
```

**文章页：BlogPosting + BreadcrumbList**

```html
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "BlogPosting",
      "headline": "如何把银行流水 PDF 转成 Excel",
      "author": { "@type": "Person", "name": "张三", "url": "https://example.com/about" },
      "datePublished": "2026-03-02",
      "dateModified": "2026-10-20",
      "image": "https://example.com/og/bank-statement.png"
    },
    {
      "@type": "BreadcrumbList",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "首页", "item": "https://example.com/" },
        { "@type": "ListItem", "position": 2, "name": "博客", "item": "https://example.com/blog/" },
        { "@type": "ListItem", "position": 3, "name": "银行流水 PDF 转 Excel" }
      ]
    }
  ]
}
</script>
```

> ⚠️ **2026 更新（富结果变化）**
> - **FAQ 富结果**：从 2023 年 8 月起，Google 只给少数权威的政府和健康类网站展示 FAQ 折叠问答。原文说的"FAQ schema 能大幅提升点击率"，对普通网站已经不成立了。不过 FAQ 内容和 `FAQPage` 标记仍然有价值：它们能帮助语义理解、长尾覆盖和 AI 引用。
> - **HowTo 富结果**：2023 年已经停止展示，不用专门为它加标记。
> - **SoftwareApplication 富结果**：一般需要 `aggregateRating` 或 `review` 才有资格展示。**没有真实评分就不要加**，自己给自己打分（self-serving review）不会被展示，还可能被处罚。
> - 验证工具：Google Rich Results Test 和 Schema Markup Validator，要求 0 错误。上线后看 GSC"增强功能"报告。

---

## 10. URL 规范

| ✅ 好 | ❌ 差 | 规则 |
|---|---|---|
| `/pdf-to-excel` | `/tool?id=37&ref=nav` | 短、有语义、包含关键词 slug，不带参数 |
| `/blog/instagram-poster-size` | `/Blog/Instagram_Poster_Size.html` | 全部小写，用连字符，不用下划线（`tech-clean-urls`） |
| `/alternatives/canva` | `/2026/10/31/post-12345` | 不用日期和自增 ID |
| `example.com/blog/` | `blog.example.com` | 博客放在子目录，权重归属主域名（见 [03 章](../03-technical-seo-and-infra/)） |

- 结尾的 `/` 全站统一：一个版本返回 200，另一个 301 过去。canonical 也要和它一致。
- **URL 一旦发布就不要随便改**。必须改的时候准备一张 301 映射表，内链也同步更新。
- 中文 slug 可以用，但 sitemap 里必须做百分号编码。英文站一律用英文 slug。

---

## 11. 内链与面包屑

内链有两个作用：**帮助搜索引擎发现页面，以及在站内分配权重**。

1. **首页链接到重要子页面**，分类页链接到所有子页面，深层页面至少有一条入口，**不要出现孤儿页**。
2. 每个功能区块、每个使用场景都链接到对应的详情页或文章；**博客文章和产品页互相链接**。
3. 每个页面至少链接 2 个站内其他页面（`links-internal`）。
4. 锚文本要有描述性，比如"银行流水 PDF 转 Excel 教程"，不要用"点击这里""了解更多"（`links-anchor-text`）。
5. 内链只用主域名（不要混用 www 和裸域），也不要给内链加 `nofollow`。
6. 内页加可见的面包屑导航 + `BreadcrumbList` schema（`serp-breadcrumbs`）。
7. 主题集群：用"5 篇文章法"集中推一个长尾词（见 [04 章](../04-content-and-eeat/)）。

> ⚠️ **2026 更新**：Google 从 2025 年起在移动端搜索结果里只显示域名，不再显示面包屑路径。面包屑现在的主要价值在于帮助理解站点结构、桌面端展示和站内导航，标记还是要加的。

---

## 12. 上线前标签自查（10 分钟版）

```text
[ ] 每页唯一的 <title>，主关键词靠前，长度合规            onpage-title / onpage-title-unique
[ ] 每页唯一的 meta description，像广告文案              onpage-meta-description
[ ] 只有一个 H1，H2/H3 不跳级                             onpage-h1 / onpage-heading-hierarchy
[ ] 关键词出现在 title、H1、description、首段             onpage-keyword-placement
[ ] 自引用的绝对 canonical；重要页面没有 noindex           tech-canonical / tech-indexable
[ ] viewport、lang、favicon                               tech-viewport / tech-html-lang / tech-favicon
[ ] 所有内容图片有 alt + width/height，体积 ≤200KB         img-alt / img-dimensions / img-optimized
[ ] OG 五件套 + twitter:card，og:image 为 1200×630         social-open-graph / social-twitter-card
[ ] JSON-LD 有效：Organization+WebSite、页面类型、面包屑    serp-structured-data / serp-entity-schema / serp-breadcrumbs
[ ] URL 干净；每页 ≥2 条描述性内链                        tech-clean-urls / links-internal / links-anchor-text
```

可以用 `node auditor/audit.mjs --url https://你的站/ --name mysite --keyword "主关键词"` 一次性检查上面大部分条目。

---

## 来源

- [网站页面结构设计](https://lownrain.feishu.cn/wiki/MxfOwgvDHiDeDPkaQ0dcu4cMnIe)（独立开发前线｜SEO从0到100）
- [页面结构示例](https://lownrain.feishu.cn/wiki/AEp0wNlm7izUbJkSRhwcYFton3e)（独立开发前线｜SEO从0到100）
- [TDK标签](https://lownrain.feishu.cn/wiki/L9viw7hpKipIWukIjJVcqDqMnMe)（独立开发前线｜SEO从0到100）
- [Schema标签](https://lownrain.feishu.cn/wiki/GPAqwn5XQiIr0Vk6YYKcN3D9nbf)（独立开发前线｜SEO从0到100）
- [Canonical标签](https://lownrain.feishu.cn/wiki/QuOxwc3oBiUHOKktrGbcI9sAnqd)（独立开发前线｜SEO从0到100）
- [Alt标签](https://lownrain.feishu.cn/wiki/VWqQw8FBCiFOq6khARKcPveTn3c)（独立开发前线｜SEO从0到100）
- [OG标签](https://lownrain.feishu.cn/wiki/Kpubwg4KtiVssdkCLNHcmZ2anme)（独立开发前线｜SEO从0到100）
- [SEO中的重要标签](https://lownrain.feishu.cn/wiki/LizRwGMxiiJt1ck2pBOcB2KTnQf)（独立开发前线｜SEO从0到100）
- [SEO 中最重要的标签详解：TDK、Alt、Schema 到底怎么影响排名](https://lownrain.feishu.cn/wiki/ELffwFhtAiygNtksXDVcFbponub)（独立开发前线｜SEO从0到100）
- [什么样的文章容易获得排名](https://lownrain.feishu.cn/wiki/QMDhwR8QOifSxvkhmzTcPC06nrb)（独立开发前线｜SEO从0到100）
- [通过SEO打造自然增长产品](https://lownrain.feishu.cn/wiki/T3mnwUqeRiqfOyk8XBBc2zmHnpf)（独立开发前线｜SEO从0到100）
- [域名配置](https://lownrain.feishu.cn/wiki/BBduwEGPLi9LUjkSnyucea3FnYg)（独立开发前线｜SEO从0到100）
- [产品上线TodoList](https://lownrain.feishu.cn/wiki/FHOCwhu0uii39nkFwuVcaVLenSe)（独立开发前线｜SEO从0到100）
