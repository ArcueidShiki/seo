---
name: seo-checklist-technical
description: 检查技术 SEO（robots.txt、sitemap、canonical、noindex、SSR 渲染、viewport、404、favicon）或排查页面不收录时使用；逐条核对 checklist 技术 SEO 条目。
---

# 技术 SEO Checklist（Technical SEO）

> 能抓取、能渲染、能索引：robots、sitemap、canonical、SSR、hreflang、404。
> 共 15 条：P0 8 · P1 5 · P2 2；其中 9 条可由 auditor 自动检测（🤖）。数据源：仓库 ArcueidShiki/seo 的 `checklist/checklist.json`（类别 `technical`）。

## 何时使用
- 页面不被 Google 收录 / 收录慢
- SPA / 前端框架站点上线前
- 迁移域名、改 URL、加多语言
- 用户说"帮我检查 / 优化 技术 SEO"或给出网址要求做这方面的 SEO 审计

## 执行流程
1. **确认对象**：要检查的网址或页面、目标关键词、目标市场（Google / 百度 / 平台站内）、产品所处阶段（规划 / 开发 / 上线 / 增长 / 维护）。只看当前阶段及之前阶段的条目。
2. **先跑自动审计**（有网址时）：在仓库里运行 `node auditor/audit.mjs --url <网址> --name <名字> --keyword "<主关键词>"`，从 `reports/<名字>.json` 读取这些条目的结果：`tech-viewport`、`tech-canonical`、`tech-indexable`、`tech-ssr-content`、`tech-robots-txt`、`tech-xml-sitemap`、`tech-html-lang`、`tech-404`、`tech-favicon`。没法运行脚本时，就按下面的"怎么查"手工检查（view-source、curl、PageSpeed、Rich Results Test 等）。
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

#### [P0] 移动端 viewport 与响应式布局 🤖
id: `tech-viewport`
- **为什么**：Google 采用移动优先索引：按手机版页面来抓取和排名。
- **通过标准**：
  - <meta name="viewport" content="width=device-width, initial-scale=1">
  - 375px 宽度下无横向滚动、字号 ≥16px、点击区域 ≥48px
- **怎么查**：Chrome DevTools 手机模式；Lighthouse。
- **工具**：seo-handbook auditor；Lighthouse (https://developer.chrome.com/docs/lighthouse)

#### [P0] 每个可索引页面有自引用的绝对 canonical 🤖
id: `tech-canonical`
- **为什么**：避免参数、大小写、http/https、带不带斜杠造成的重复内容。
- **通过标准**：
  - <link rel="canonical" href="https://完整地址">
  - 指向自己（除非确实是重复页）
  - canonical、sitemap、内链使用同一个 URL 版本
- **怎么查**：GSC 网址检查 → "Google 选择的规范网址" 应与你声明的一致。
- **工具**：seo-handbook auditor；Google Search Console (https://search.google.com/search-console)

#### [P0] 重要页面没有误加 noindex 🤖
id: `tech-indexable`
- **为什么**：上线前忘了删 noindex 或 robots 全站禁止，是最常见的"为什么没收录"原因。
- **通过标准**：
  - 重要页面没有 <meta name="robots" content="noindex">，也没有 X-Robots-Tag: noindex
  - 只有 404、站内搜索、后台等页面用 noindex
- **怎么查**：auditor；GSC → 网页索引编制报告。
- **工具**：seo-handbook auditor；Google Search Console (https://search.google.com/search-console)

#### [P0] 正文在不执行 JS 的 HTML 中就存在（SSR / SSG） 🤖
id: `tech-ssr-content`
- **为什么**：Google 渲染 JS 要排队，可能延迟几天；大多数 AI 爬虫完全不执行 JS。纯客户端渲染的 SPA 对它们来说就是空白页。
- **通过标准**：
  - curl 拿到的 HTML 里有 ≥80 个词的正文
  - 首屏 HTML 的词数 ≥ 渲染后的 70%
  - Next.js / Nuxt / Astro 用 SSG 或 SSR；Vite SPA 需要预渲染
- **怎么查**：auditor 对比原始 HTML 和渲染后 DOM；GSC 网址检查 → 查看已抓取的网页。
- **工具**：seo-handbook auditor；Google Search Console (https://search.google.com/search-console)

#### [P0] robots.txt 允许抓取并声明 Sitemap 🤖
id: `tech-robots-txt`
- **为什么**：robots.txt 是爬虫访问的第一个文件。
- **通过标准**：
  - /robots.txt 返回 200
  - 没有 Disallow: / 全站禁止
  - 含 Sitemap: https://…/sitemap.xml
- **怎么查**：浏览器打开 /robots.txt；GSC → 设置 → robots.txt。
- **工具**：seo-handbook auditor；Google Search Console (https://search.google.com/search-console)

#### [P0] XML sitemap：只含可索引的规范 URL，lastmod 真实 🤖
id: `tech-xml-sitemap`
- **为什么**：帮助搜索引擎发现全部页面；priority 和 changefreq 基本被忽略，lastmod 要真实。
- **通过标准**：
  - /sitemap.xml 合法且返回 200
  - 只列 200、可索引、自引用 canonical 的 URL
  - 每条都有真实的 <lastmod>
  - 超过 5 万条或 50MB 用 sitemap index
  - 已在 GSC 和 Bing 提交
- **怎么查**：auditor 会逐条请求 sitemap 里的 URL；GSC → 站点地图。
- **工具**：seo-handbook auditor；Google Search Console (https://search.google.com/search-console)；Bing Webmaster Tools (https://www.bing.com/webmasters)

#### [P0] 链接是真正的 <a href>，不用 # 路由，分页可被抓取
id: `tech-crawlable-links`
- **为什么**：爬虫只跟随带 href 的 <a>；onClick 跳转、hash 路由和无限滚动后面的内容，爬虫都看不到。
- **通过标准**：
  - 导航、分页、卡片点击都用 <a href="/path">，不是 <div onClick> 或 <button>
  - 不使用 /#/page 这类 hash 路由
  - 无限滚动或「加载更多」同时提供可访问的分页 URL（?page=2 或 /page/2）
  - GSC 网址检查 → 查看已抓取的网页：HTML 中能看到主要内链
- **怎么查**：DevTools → Command Menu → Disable JavaScript 后浏览站点；Screaming Frog 用文本模式和 JS 渲染模式各爬一次，比较发现的页面数。
- **工具**：Screaming Frog (https://www.screamingfrog.co.uk/seo-spider/)；Google Search Console (https://search.google.com/search-console)

#### [P0] 预览 / 测试环境不被索引（*.vercel.app、*.pages.dev、staging.）
id: `tech-preview-noindex`
- **为什么**：预览域名被收录会产生整站重复内容，甚至抢走正式站的排名。
- **通过标准**：
  - 预览和 staging 环境响应头有 X-Robots-Tag: noindex，或需要密码访问
  - Google 搜索 site:vercel.app "你的品牌" 和 site:pages.dev "你的品牌" 没有结果
  - 托管平台给的默认生产域名（如 xxx.vercel.app）301 到正式域名或设为 noindex
- **怎么查**：curl -I 预览地址看 X-Robots-Tag；在 Vercel / Netlify / Cloudflare Pages 设置里给非生产环境加 noindex 响应头或访问保护。
- **工具**：Google 搜索 (https://www.google.com/)；Cloudflare (https://dash.cloudflare.com/)

#### [P1] <html lang> 声明页面语言 🤖
id: `tech-html-lang`
- **为什么**：帮助搜索引擎判断语言和地区；读屏软件也依赖它。
- **通过标准**：
  - 每页 <html lang="en"> / "zh-CN" 等，和实际内容语言一致
- **怎么查**：view-source。
- **工具**：seo-handbook auditor

#### [P1] 不存在的 URL 返回真实 404 状态码，并有引导链接 🤖
id: `tech-404`
- **为什么**：返回 200 的"软 404"会浪费抓取预算；好的 404 页能把用户留在站内。
- **通过标准**：
  - 随便输一个 URL，HTTP 状态码 = 404
  - 404 页有返回首页 / 热门页的链接，并设 noindex
- **怎么查**：curl -I 一个随机 URL。
- **工具**：seo-handbook auditor

#### [P1] 跳转干净：服务端 301、最多一跳、站内链接不指向跳转地址
id: `tech-redirect-hygiene`
- **为什么**：跳转链浪费抓取并可能损失信号；meta refresh 和 JS 跳转不可靠；站内链接指向 301 会白白多一次请求。
- **通过标准**：
  - 所有永久跳转都是服务端 301 / 308（临时才用 302 / 307），没有 <meta http-equiv=refresh> 和 JS 跳转
  - 任意旧地址到最终地址 ≤ 1 跳（http → https → www → 去斜杠这类 3 跳要合并成 1 跳）
  - 站内链接、canonical、sitemap 中指向 3xx 的 URL 数 = 0
  - 删除且没有替代内容的页面返回 404 或 410，不批量 301 到首页
- **怎么查**：curl -sIL 地址 查看跳转次数；Screaming Frog → Response Codes → Redirection (3xx)，以及 Reports → Redirect Chains。
- **工具**：Screaming Frog (https://www.screamingfrog.co.uk/seo-spider/)；Ahrefs Webmaster Tools（免费） (https://ahrefs.com/webmaster-tools)

#### [P1] 带参数的 URL（UTM、排序、筛选、A/B 测试）都 canonical 到干净 URL
id: `tech-param-canonical`
- **为什么**：分享链接、广告和筛选器带的参数会生成大量重复 URL，分散排名信号。
- **通过标准**：
  - 访问 /page?utm_source=test 时，canonical 指向 /page
  - 排序 / 筛选参数页 canonical 指向主版本或设为 noindex,follow，且不出现在 sitemap 中
  - A/B 测试变体和近似模板页 canonical 指向主版本
  - canonical 目标返回 200、可索引、不跳转；每页只有 1 个 canonical 标签，没有循环
- **怎么查**：给 3 个页面手动加 ?utm_source=test 后 view-source 检查；Screaming Frog → Canonicals → Non-Indexable Canonical / Multiple。
- **工具**：Screaming Frog (https://www.screamingfrog.co.uk/seo-spider/)；Google Search Console (https://search.google.com/search-console)

#### [P2] favicon（Google 结果里显示的站点图标） 🤖
id: `tech-favicon`
- **为什么**：Google 移动端和桌面端结果都显示站点图标，影响辨识度和点击率。
- **通过标准**：
  - <link rel="icon"> 指向 48×48 倍数尺寸的图标或 SVG
  - apple-touch-icon 180×180
- **怎么查**：Google 结果几周后才会更新图标。
- **工具**：seo-handbook auditor

### ⑤ 维护

#### [P1] 每月扫一次死链：站内 4xx = 0，出站死链及时替换
id: `tech-broken-links-scan`
- **为什么**：死链浪费抓取、伤害体验；引用的外部来源失效也会降低内容可信度。
- **通过标准**：
  - 站内链接返回 4xx / 5xx 的数量 = 0
  - 出站链接 404 的数量 = 0（替换或删除）
  - GSC「未找到 (404)」列表中，仍被站内链接或 sitemap 引用的 URL = 0
- **怎么查**：每月跑一次 Screaming Frog（免费版 500 个 URL）或 Ahrefs Webmaster Tools 的 Site Audit（免费，可定时）；GSC 404 列表点开看「引荐页面」。
- **工具**：Screaming Frog (https://www.screamingfrog.co.uk/seo-spider/)；Ahrefs Webmaster Tools（免费） (https://ahrefs.com/webmaster-tools)；Google Search Console (https://search.google.com/search-console)

#### [P2] 每月看 GSC 抓取统计：主机状态正常，5xx 和 403 接近 0
id: `tech-crawl-stats`
- **为什么**：服务器错误或防火墙误拦 Googlebot 时，收录会悄悄下降，前台访问不一定看得出来。
- **通过标准**：
  - GSC → 设置 → 抓取统计信息 → 主机状态：robots.txt 抓取、DNS 解析、服务器连接均无问题
  - 按响应分类：5xx 占比 < 1%，没有成批的 403（多半是 WAF / Bot 规则误拦）
  - 平均响应时间平稳、没有持续上升（经验值 < 500 ms）
- **怎么查**：GSC → 设置 → 抓取统计信息 → 打开报告；出现 403 时去 Cloudflare → Security → Events 按 User-Agent 筛选 Googlebot，确认「已验证机器人」被放行。
- **工具**：Google Search Console (https://search.google.com/search-console)；Cloudflare (https://dash.cloudflare.com/)

## 相关
- 手册 skill（原理、打法和模板）：`seo-guide-technical-infra`
- 总索引：`seo-growth-skills-index`
- 交互式工具：仓库 `tool/index.html`（构建后在 `/tool/`），可以勾选进度、导出 Markdown
