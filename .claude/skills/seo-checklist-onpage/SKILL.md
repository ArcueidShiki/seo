---
name: seo-checklist-onpage
description: 检查页面 title、meta description、H1、关键词位置、图片 alt、Open Graph 与 Twitter 卡片时使用；逐条核对 SEO checklist 的页面标签类条目。
---

# 页面标签 On-page Checklist（On-page tags）

> Title、Description、H1、图片 alt、社交卡片：决定搜索结果长什么样。
> 共 13 条：P0 4 · P1 6 · P2 3；其中 9 条可由 auditor 自动检测（🤖）。数据源：仓库 ArcueidShiki/seo 的 `checklist/checklist.json`（类别 `onpage`）。

## 何时使用
- 新页面上线前做 On-page 检查
- 搜索结果标题被改写 / 点击率低
- 社交分享卡片不显示大图
- 用户说"帮我检查 / 优化 页面标签 On-page"或给出网址要求做这方面的 SEO 审计

## 执行流程
1. **确认对象**：要检查的网址或页面、目标关键词、目标市场（Google / 百度 / 平台站内）、产品所处阶段（规划 / 开发 / 上线 / 增长 / 维护）。只看当前阶段及之前阶段的条目。
2. **先跑自动审计**（有网址时）：在仓库里运行 `node auditor/audit.mjs --url <网址> --name <名字> --keyword "<主关键词>"`，从 `reports/<名字>.json` 读取这些条目的结果：`onpage-title`、`onpage-meta-description`、`onpage-h1`、`onpage-keyword-placement`、`onpage-title-unique`、`onpage-heading-hierarchy`、`social-open-graph`、`img-alt`、`social-twitter-card`。没法运行脚本时，就按下面的"怎么查"手工检查（view-source、curl、PageSpeed、Rich Results Test 等）。
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

#### [P0] 每个页面有独立、含关键词的 <title> 🤖
id: `onpage-title`
- **为什么**：标题是搜索结果里最显眼的蓝字，也是排名信号；"Home"这类通用标题会被 Google 改写。
- **通过标准**：
  - 存在且不是 Home / Untitled / React App 这类默认值
  - 15–65 个字符（中文约 30 字以内），主关键词靠前
  - 格式参考：主关键词 – 卖点 | 品牌
- **怎么查**：浏览器标签页或 view-source 查看；批量用 Screaming Frog / auditor 爬取。
- **工具**：seo-handbook auditor；Screaming Frog (https://www.screamingfrog.co.uk/seo-spider/)；Google Search Console (https://search.google.com/search-console)

#### [P0] 每个页面有 meta description 🤖
id: `onpage-meta-description`
- **为什么**：不直接影响排名，但影响点击率；缺失时 Google 会从正文随机截取一段。
- **通过标准**：
  - 50–165 个字符（中文约 80 字以内）
  - 包含主关键词和一个行动号召 / 卖点
  - 每页不同
- **怎么查**：view-source 搜 name="description"。
- **工具**：seo-handbook auditor；Screaming Frog (https://www.screamingfrog.co.uk/seo-spider/)

#### [P0] 每页恰好 1 个 H1，且在服务端 HTML 中 🤖
id: `onpage-h1`
- **为什么**：H1 告诉搜索引擎这一页讲什么；由 JS 后插入的 H1 在首次抓取时看不到。
- **通过标准**：
  - 服务端返回的 HTML 中 <h1> 数量 = 1
  - H1 包含主关键词，和 title 意思一致但可以不完全相同
- **怎么查**：curl 页面后数 <h1>；或 auditor。
- **工具**：seo-handbook auditor

#### [P0] 主关键词出现在 title、H1、description、首段、URL 🤖
id: `onpage-keyword-placement`
- **为什么**：关键词位置比密度重要；不要堆砌（2–8% 密度、meta keywords 都是过时做法）。
- **通过标准**：
  - title / H1 / description / 正文前 100 词都包含主关键词或其近义写法
  - URL slug 用关键词的英文连字符形式
  - 图片 alt 自然包含相关词
- **怎么查**：auditor --keyword "你的关键词"。
- **工具**：seo-handbook auditor

#### [P1] 全站没有重复的 title 🤖
id: `onpage-title-unique`
- **为什么**：重复标题会让 Google 分不清该给哪个页面排名（关键词内耗）。
- **通过标准**：
  - 所有可索引页面 title 两两不同
  - 每个页面对应不同的关键词或意图
- **怎么查**：auditor 或 Screaming Frog 的 Page Titles → Duplicate。
- **工具**：seo-handbook auditor；Screaming Frog (https://www.screamingfrog.co.uk/seo-spider/)

#### [P1] 标题层级 H1→H2→H3 不跳级 🤖
id: `onpage-heading-hierarchy`
- **为什么**：清晰的层级帮助搜索引擎和 AI 理解段落结构，也是无障碍要求。
- **通过标准**：
  - 没有从 H1 直接跳到 H3 的情况
  - 不用标题标签做纯样式
- **怎么查**：Detailed SEO / HeadingsMap 浏览器插件或 auditor。
- **工具**：seo-handbook auditor

#### [P1] Open Graph 社交卡片（og:title / description / image / url） 🤖
id: `social-open-graph`
- **为什么**：在 X、微信、Slack、Discord、LinkedIn 分享时显示大图卡片，影响社交点击率。
- **通过标准**：
  - 4 个 og 标签齐全
  - og:image 为 1200×630、小于 1MB 的绝对 URL
  - 用 opengraph.xyz 预览正常
- **怎么查**：粘贴 URL 到 opengraph.xyz 或 X 的发帖框预览。
- **工具**：OpenGraph.xyz (https://www.opengraph.xyz/)；seo-handbook auditor

#### [P1] 所有图片有描述性 alt 🤖
id: `img-alt`
- **为什么**：图片搜索流量入口 + 无障碍；alt 是搜索引擎理解图片的主要依据。
- **通过标准**：
  - 渲染后的 DOM 中每个 <img> 都有非空 alt
  - alt 描述图片内容，不堆关键词
  - 纯装饰图用 alt="" 或 CSS 背景
- **怎么查**：auditor 或 Lighthouse Accessibility。
- **工具**：seo-handbook auditor；Lighthouse (https://developer.chrome.com/docs/lighthouse)

#### [P1] Title、H1、Description、正文、锚文本、Schema 讲的是同一个主题
id: `onpage-topic-consistency`
- **为什么**：各处信号一致，搜索引擎才能稳定理解页面主题；标题和内容对不上时，Google 会自己改写标题。
- **通过标准**：
  - 抽 5 个页面：title、H1、description、首段、指向它的内链锚文本、JSON-LD 的 name / headline 意思一致
  - H1 用大白话说清「做什么」，不用 redefine / empower / next-gen / 赋能 / 颠覆 这类空话
  - 同一页关键词写法统一（缩写和全称不混用）；title 中同一个词不重复出现
  - 不依赖 meta keywords（Google 忽略；只面向百度的站可选填 3–5 个本页词）
- **怎么查**：Detailed SEO Extension 或 view-source 并排查看；Screaming Frog → Page Titles / H1 / Meta Description 导出后对照。
- **工具**：Screaming Frog (https://www.screamingfrog.co.uk/seo-spider/)

#### [P1] 每篇文章 / 每个产品页有专属分享封面，修改后强制刷新平台缓存
id: `onpage-og-per-page`
- **为什么**：用 Logo 当 og:image，分享出去就是一块白底小图；各平台会缓存旧卡片，不刷新就看不到修改。
- **通过标准**：
  - 文章和产品页的 og:image 是该页专属封面或 UI 截图，不是全站 Logo
  - og:type 按模板区分：首页 website、文章 article、产品 product；og:url 等于该页 canonical（不带参数）
  - og:image 对外部抓取返回 200，没有被防盗链或 Cloudflare 质询拦截
  - 修改后用 Facebook Sharing Debugger 重新抓取，并在微信、Telegram、Slack、X 实际发一次看预览
- **怎么查**：curl -I 请求 og:image 地址；Facebook Sharing Debugger → Scrape Again；X 发帖框粘贴链接预览。
- **工具**：Facebook Sharing Debugger (https://developers.facebook.com/tools/debug/)；OpenGraph.xyz (https://www.opengraph.xyz/)；X (Twitter) (https://x.com/)

#### [P2] Twitter / X card 标签 🤖
id: `social-twitter-card`
- **为什么**：X 优先读取 twitter:* 标签，缺失时回退到 og。
- **通过标准**：
  - twitter:card = summary_large_image
  - 可选 twitter:site 填官方账号
- **怎么查**：X 发帖框粘贴链接预览。
- **工具**：X (Twitter) (https://x.com/)；seo-handbook auditor

#### [P2] 用语义化标签组织页面：步骤用 <ol>，对比用 <table>，评价用 <blockquote>
id: `onpage-semantic-html`
- **为什么**：语义结构帮助搜索引擎和 AI 准确抽取步骤、对比和引用，也是无障碍的基础。
- **通过标准**：
  - 每页 1 个 <main>；导航在 <nav>，页脚在 <footer>，文章正文在 <article>
  - 「怎么用」的步骤是 <ol> 列表；对比内容是带 <th> 的真实 <table>，不是图片
  - 用户评价用 <blockquote> 加署名；日期用 <time datetime>
- **怎么查**：DevTools → Elements 检查结构；Lighthouse Accessibility 或 axe DevTools 插件。
- **工具**：Lighthouse (https://developer.chrome.com/docs/lighthouse)

#### [P2] 图片文件名有描述性，Logo 和产品截图的 alt 写清楚内容
id: `onpage-image-filenames`
- **为什么**：文件名和 alt 是图片搜索的主要文本信号；IMG_1234.png 不提供任何信息。
- **通过标准**：
  - 文件名用连字符描述内容，例如 ai-poster-generator-instagram-example.webp；没有 IMG_1234、screenshot(3)、未命名
  - Logo 的 alt = 品牌名 + 定位（如「Vexlora 仓位计算器 logo」），Logo 链接到首页
  - 产品 UI 截图的 alt 说明截图里展示的功能；同一页没有两张图片用相同的 alt
  - 纯装饰图片用 alt=""；alt 中同一关键词不重复堆砌
- **怎么查**：Screaming Frog → Images 导出文件名和 alt 列表人工检查。
- **工具**：Screaming Frog (https://www.screamingfrog.co.uk/seo-spider/)

## 相关
- 手册 skill（原理、打法和模板）：`seo-guide-page-structure-tags`
- 总索引：`seo-growth-skills-index`
- 交互式工具：仓库 `tool/index.html`（构建后在 `/tool/`），可以勾选进度、导出 Markdown
