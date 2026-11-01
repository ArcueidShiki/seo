# 技术 SEO 与基础设施

> 一句话：**技术 SEO 是投入产出比最高的一环**。原文作者的经验是，大约一周能学会，几周能做完，做完就能把一个新站从 0 分拉到大约 60 分（满分 100）。剩下的分数靠关键词、内容和外链。技术底子不好，外链也只是在放大问题。
>
> 相关 Checklist 条目：`tech-xml-sitemap`、`tech-robots-txt`、`tech-ssr-content`、`tech-canonical`、`tech-indexable`、`tech-clean-urls`、`tech-hreflang`、`tech-404`、`tech-favicon`、`perf-core-web-vitals`、`perf-lighthouse`、`perf-page-weight`、`img-optimized`、`indexing-gsc`、`analytics-installed`、`geo-ai-crawlers`。

---

## 1. 范围与优先级

| 优先级 | 项目 | 一句话标准 |
|---|---|---|
| P0 | HTTPS、单一主机名（www / 裸域 301 合一） | 所有变体一跳 301 到同一个 https 主机 |
| P0 | 可抓取、可索引 | robots.txt 不拦重要内容；重要页面没有 noindex；正文在 HTML 里（SSR/SSG） |
| P0 | sitemap + 后台提交 | GSC 和 Bing 显示"成功"，提交数 ≈ 可索引页面数 |
| P1 | canonical、URL 规范、无站内死链 | 自引用 canonical；站内 4xx 链接数 = 0 |
| P1 | Core Web Vitals、移动端适配 | LCP ≤ 2.5s、INP ≤ 200ms、CLS ≤ 0.1 |
| P1 | 统计和站长后台 | GA4 / Plausible / Umami + GSC + Bing 在上线前装好 |
| P2 | CDN 缓存、安全防护（Cloudflare） | 营销页从边缘缓存返回；API 有限流 |
| P2 | 域名邮箱、SSL 自动续期 | SPF / DKIM / DMARC 齐全；证书剩余有效期 > 30 天 |

原文作者还会关注几个"进阶"因素：域名历史、域名到期时间、同一个 IP 上有多少其他网站。这些可以在买域名之前就查（见第 6 节）。

---

## 2. Sitemap（站点地图）

**定位**：sitemap 是给爬虫看的 URL 清单，是**提示，不是命令**。它能加快发现和收录，帮你暴露索引问题，但**本身不会提升排名**。成本低、风险低，没有理由不做。

**以下任意一条成立就必须做**：新站 / 冷启动；页面在几百个以上；更新频繁（博客、资讯）；URL 层级深（3–4 层）；有大量 AI 生成的页面；面向海外或小语种。对独立开发者来说，直接当成标配。

**放什么、不放什么**

| ✅ 放 | ❌ 不放 |
|---|---|
| 你**希望被索引**的、返回 200 的规范 URL | 站内搜索结果页、登录页、带参数的 URL |
| 深层页面、内链比较弱的边缘页面 | 带 noindex 的页面、重复页面、会重定向的 URL |
| 博客、产品、分类、文档页 | 测试页、低质量的批量页面 |

**格式**

```xml
<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>https://example.com/pdf-to-excel</loc>
    <lastmod>2026-10-20</lastmod>
  </url>
  <url>
    <loc>https://example.com/blog/bank-statement-pdf-to-excel</loc>
    <lastmod>2026-09-02</lastmod>
  </url>
</urlset>
```

| 字段 | 必要性 | 规则 |
|---|---|---|
| `<loc>` | 必填 | 绝对地址、https、只用主机名的一个版本；不用相对路径；不带会话参数 |
| `<lastmod>` | 强烈推荐 | 写**真实的**内容修改日期（YYYY-MM-DD）。**不要每天把所有 URL 都改成今天**，搜索引擎发现之后会直接忽略这个字段 |
| `<changefreq>` | 可选 | 权重极低 |
| `<priority>` | 可选 | 只表示站内相对重要性，不影响排名，Google 基本忽略 |

**Sitemap 索引文件**：单个文件最多 50,000 个 URL（未压缩不超过 50MB），超出就拆分。即使没超，也可以按类型拆开，方便排查：

```xml
<?xml version="1.0" encoding="UTF-8"?>
<sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <sitemap><loc>https://example.com/sitemap-pages.xml</loc><lastmod>2026-10-20</lastmod></sitemap>
  <sitemap><loc>https://example.com/sitemap-blog.xml</loc><lastmod>2026-10-28</lastmod></sitemap>
  <sitemap><loc>https://example.com/sitemap-images.xml</loc></sitemap>
</sitemapindex>
```

图片很多的网站可以加图片 sitemap（`xmlns:image="http://www.google.com/schemas/sitemap-image/1.1"`，每个 `<url>` 里加 `<image:image><image:loc>…</image:loc></image:image>`）；视频很多的页面加视频 sitemap。HTML sitemap（例如 `/sitemap` 页面）是给用户看的，也能帮助内链传递，但**不能代替 XML sitemap**。

**格式陷阱（会让 sitemap 悄悄失效）**

- XML 标签没闭合；中文 URL 没有做百分号编码；
- `sitemap.xml` 本身返回 404 或 301（应该直接返回 200，Content-Type 是 XML）；
- 被 robots.txt 拦截；包含 noindex 的 URL；http / https / www 混用。

**运维**：发布内容时自动重新生成 sitemap；提交到 GSC 和 Bing；新站每周看一次 GSC 的站点地图报告，盯住"已提交"和"已编入索引"之间的差距，以及报错和被排除的 URL。auditor 会检查 sitemap 是否存在、是否带 `<lastmod>`、抽查的 URL 是否失效、爬到的页面有没有漏收（`tech-xml-sitemap`）。

免费生成器：<img src="https://www.google.com/s2/favicons?domain=xml-sitemaps.com&sz=32" width="16" height="16" alt=""> [XML-Sitemaps.com](https://www.xml-sitemaps.com/)、<img src="https://www.google.com/s2/favicons?domain=sitemap-generator.org&sz=32" width="16" height="16" alt=""> [sitemap-generator.org](https://sitemap-generator.org/)。如果用框架自带的 sitemap 生成功能就更好了。

---

## 3. robots.txt

```text
# https://example.com/robots.txt
User-agent: *
Disallow: /api/
Disallow: /dashboard/
Disallow: /search
Allow: /

# AI 搜索与引用（见 06 章）
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

- **必须**有 `Sitemap:` 这一行，并且**不能** Disallow sitemap 的路径（`tech-robots-txt`）。
- 不要拦截 CSS / JS，否则 Google 渲染不出页面。
- **robots.txt 不等于 noindex**：被 Disallow 的 URL 如果有外链指向，仍然可能以"无摘要"的形式被收录。真正不想被索引的页面，要允许抓取，再加 `noindex`。
- 上线前一定要检查有没有残留测试环境的 `Disallow: /`（auditor 会直接判失败）。
- AI 爬虫要不要放行，见 [06 章](../06-geo-ai-search/)。拦截 GPTBot、ClaudeBot、PerplexityBot、Google-Extended 或 OAI-SearchBot 中的任何一个，都会让 `geo-ai-crawlers` 判定失败。

---

## 4. 渲染：SSR / SSG vs 纯前端渲染

搜索引擎和 AI 爬虫需要在 **HTML 源码里** 直接看到正文。纯 CSR（打开是一个空 `<div id="app">`，内容全靠 JS 渲染）的问题有三个：

1. Googlebot 会把渲染排进队列，可能延迟，可能部分失败；
2. **大多数 AI 爬虫不执行 JavaScript**，看到的就是一个空壳；
3. 首屏慢，LCP 变差。

**做法**：营销页、文档、博客用 SSG（静态生成）或 SSR；只有登录后的 dashboard 才用 CSR。可选的框架有 Next.js、Nuxt、Astro。文档和帮助中心可以用静态文档生成器：

| 工具 | 技术栈 |
|---|---|
| <img src="https://www.google.com/s2/favicons?domain=fumadocs.dev&sz=32" width="16" height="16" alt=""> [Fumadocs](https://www.fumadocs.dev/) | Next.js，开源 |
| <img src="https://www.google.com/s2/favicons?domain=docusaurus.io&sz=32" width="16" height="16" alt=""> [Docusaurus](https://docusaurus.io/) | React / Markdown |
| <img src="https://www.google.com/s2/favicons?domain=nextra.site&sz=32" width="16" height="16" alt=""> [Nextra](https://nextra.site/) | Next.js + MDX |
| <img src="https://www.google.com/s2/favicons?domain=starlight.astro.build&sz=32" width="16" height="16" alt=""> [Starlight](https://starlight.astro.build/) | Astro |
| <img src="https://www.google.com/s2/favicons?domain=vitepress.dev&sz=32" width="16" height="16" alt=""> [VitePress](https://vitepress.dev/) | Vue |
| <img src="https://www.google.com/s2/favicons?domain=rspress.dev&sz=32" width="16" height="16" alt=""> [Rspress](https://rspress.dev/) | 字节跳动出品 |
| <img src="https://www.google.com/s2/favicons?domain=mintlify.com&sz=32" width="16" height="16" alt=""> [Mintlify](https://www.mintlify.com/docs)、<img src="https://www.google.com/s2/favicons?domain=gitbook.com&sz=32" width="16" height="16" alt=""> [GitBook](https://www.gitbook.com/) | 托管服务 |

文档要放在**自己的域名或子目录下**，并且列进 sitemap。

**检查**

```bash
curl -s https://example.com/pdf-to-excel | grep -c "<h1"          # 源码里有 H1
curl -s https://example.com/pdf-to-excel | sed 's/<[^>]*>//g' | wc -w   # 源码里的正文字数
```

auditor 的判定标准（`tech-ssr-content`）：不执行 JS 时正文 **≥ 80 个词**，并且 **≥ 渲染后正文的 70%**。

---

## 5. Core Web Vitals 与性能

| 指标 | 衡量什么 | 良好 | 需要改进 | 差 |
|---|---|---|---|---|
| **LCP** | 最大内容绘制（首屏主内容多快出现） | ≤ 2.5 s | ≤ 4 s | > 4 s |
| **INP** | 交互到下一次绘制（点击后多快有反应） | ≤ 200 ms | ≤ 500 ms | > 500 ms |
| **CLS** | 累计布局偏移（页面会不会跳） | ≤ 0.1 | ≤ 0.25 | > 0.25 |

评估口径是真实用户数据的第 75 百分位（GSC 的 CWV 报告、PageSpeed Insights 的"实际用户数据"部分）。

> ⚠️ **2026 更新**：《SEO经验分享》里列的是 LCP / **FID** / CLS。**INP 从 2024 年 3 月起正式取代 FID**。凡是写着 FID 的教程都已经过时了。

**主要优化手段**

| 问题 | 手段 |
|---|---|
| LCP 慢 | 营销页 HTML 走边缘缓存（降低 TTFB）；首屏主图用 WebP / AVIF，加 `fetchpriority="high"`，不要懒加载；字体加 `font-display: swap` 并预加载 |
| CLS 高 | 所有 `<img>` / `<video>` / 广告位都预留尺寸（`img-dimensions`）；不在首屏上方插入横幅 |
| INP 差 | 减少第三方脚本；拆分长任务；统计脚本用 async / defer |
| 页面太重 | 压缩和精简 JS / CSS；图片 ≤ 200KB（`img-optimized`）；控制首页总大小（`perf-page-weight`） |

auditor 会跑 Lighthouse（移动端 + 桌面端），移动端性能分 ≥ 90 判定通过（`perf-lighthouse`、`perf-core-web-vitals`）。仓库 README 里有一组前后对比：未优化的 Demo A 首页 3.3MB、LCP 18.1s；优化后的 Demo B 首页 47KB、LCP 1.4s。

---

## 6. 域名

### 6.1 选域名

- **短、清楚，最好能看出是做什么的**。包含主关键词不是直接的排名因素，但能提高点击率，例如 HeadshotPro.com（professional headshot）、Figcomponents.com（Figma components）。
- 中国市场有一个打法：起一个**不常见、好记、甚至是英文**的品牌名，保证没有其他托管在国内的网站在用。这样用户搜品牌词时，你很容易排到前 3。
- 买之前做尽职调查：用 Wayback Machine 看历史内容，用 whois 看注册和到期时间，用反查 IP 看同 IP 上的其他网站。

| 工具 | 用途 |
|---|---|
| <img src="https://www.google.com/s2/favicons?domain=namecheap.com&sz=32" width="16" height="16" alt=""> [Namecheap](https://www.namecheap.com/) | 注册域名 |
| <img src="https://www.google.com/s2/favicons?domain=dynadot.com&sz=32" width="16" height="16" alt=""> [Dynadot](https://www.dynadot.com/) | 注册域名（送 1 个免费域名邮箱） |
| <img src="https://www.google.com/s2/favicons?domain=oneword.domains&sz=32" width="16" height="16" alt=""> [oneword.domains](https://oneword.domains/) | 找单词域名 |
| <img src="https://www.google.com/s2/favicons?domain=expireddomains.net&sz=32" width="16" height="16" alt=""> [ExpiredDomains.net](https://www.expireddomains.net/) | 过期域名 |
| <img src="https://www.google.com/s2/favicons?domain=web.archive.org&sz=32" width="16" height="16" alt=""> [Wayback Machine](https://web.archive.org/) | 查域名的历史内容 |

> ⚠️ **2026 更新**：完全匹配域名（EMD）早在 2012 年就不再有额外加分了，品牌辨识度更重要。**买过期域名**来借用它原有的外链、去做不相关的内容，属于 Google 2024 年 3 月写进政策的"过期域名滥用（expired domain abuse）"，有被整站处理的风险。买过期域名只适合**主题延续**的情况。

### 6.2 www 还是裸域：只能留一个

`www.example.com` 和 `example.com` 在技术上是两个网站。如果不统一，会造成重复内容、外链权重分散。选一个作为主域名，另一个**一跳 301** 过去，并且**保留路径和查询参数**。

```nginx
# Nginx：www → 裸域
server {
  listen 443 ssl;
  server_name www.example.com;
  return 301 https://example.com$request_uri;
}
```

```text
# Cloudflare：Rules → Redirect Rules
When: Hostname equals "www.example.com"
Then: Dynamic redirect → concat("https://example.com", http.request.uri.path)，状态码 301，勾选 Preserve query string
```

```bash
curl -sI http://www.example.com/blog/x | grep -iE "^(HTTP|location)"
# 期望：HTTP/1.1 301 …   location: https://example.com/blog/x   （只跳一次）
```

### 6.3 子目录 vs 子域名

| 用法 | 推荐 | 原因 |
|---|---|---|
| 博客 | `example.com/blog` | 权重直接归主域名；内链简单；GSC / 统计不用单独验证；共享 SSL / CDN / 缓存 |
| 文档、论坛、独立应用 | `docs.` / `forum.` / `app.` 子域名可以接受 | 技术上需要隔离，或者需要独立运营 |
| 不同主题的业务 | 子域名或独立域名 | 避免主题混杂 |

配套规则：两个主机名都启用 HTTPS（证书覆盖 www）；内链永远只用主域名；**不要随意更换主域名或博客路径**（重新抓取成本很高），必须改的时候准备 301 映射表。

---

## 7. 域名邮箱

用 `hello@yourdomain.com` 代替 Gmail / QQ 邮箱，用在页脚、法律页面、外链外联和发布平台的提交上。这关系到品牌可信度和邮件送达率。

| 方案 | 代表 | 费用（原文快照） | 适合 |
|---|---|---|---|
| 注册商赠送 | <img src="https://www.google.com/s2/favicons?domain=dynadot.com&sz=32" width="16" height="16" alt=""> [Dynadot](https://www.dynadot.com/)（1 个免费邮箱，零配置） | 免费 | 只要一个收件地址 |
| 转发 | <img src="https://www.google.com/s2/favicons?domain=cloudflare.com&sz=32" width="16" height="16" alt=""> [Cloudflare Email Routing](https://www.cloudflare.com/) | 免费 | 只收不发、多个别名转发到个人邮箱 |
| 免费托管 | <img src="https://www.google.com/s2/favicons?domain=zoho.com&sz=32" width="16" height="16" alt=""> [Zoho Mail](https://www.zoho.com/mail/)（≤ 5 用户）、Yandex 域名邮箱、<img src="https://www.google.com/s2/favicons?domain=migadu.com&sz=32" width="16" height="16" alt=""> [Migadu](https://www.migadu.com/) 免费档 | 免费 | 预算为 0 的小团队 |
| 低价托管 | Zoho 付费版约 $1–3/人/月；<img src="https://www.google.com/s2/favicons?domain=namecheap.com&sz=32" width="16" height="16" alt=""> [Namecheap Private Email](https://www.namecheap.com/) $0.91–2.88/月；<img src="https://www.google.com/s2/favicons?domain=fastmail.com&sz=32" width="16" height="16" alt=""> [Fastmail](https://www.fastmail.com/) 约 $3/月；<img src="https://www.google.com/s2/favicons?domain=workspace.google.com&sz=32" width="16" height="16" alt=""> [Google Workspace](https://workspace.google.com/) / Microsoft 365 约 $6/人/月 | 低 | 需要反垃圾、大容量、SLA |
| 主机套餐 | Namecheap / <img src="https://www.google.com/s2/favicons?domain=godaddy.com&sz=32" width="16" height="16" alt=""> [GoDaddy](https://www.godaddy.com/) 邮箱 $1–10/月 | 低 | 已经在用对应的主机 |
| 自建 | <img src="https://www.google.com/s2/favicons?domain=mailcow.email&sz=32" width="16" height="16" alt=""> [Mailcow](https://mailcow.email/)、<img src="https://www.google.com/s2/favicons?domain=iredmail.org&sz=32" width="16" height="16" alt=""> [iRedMail](https://www.iredmail.org/)、Modoboa、Postfix + Dovecot | VPS 约 $50–120/年 | 有运维能力（维护成本很高，不推荐新手） |

**DNS 记录（不管用哪种方案都要配好）**

```text
example.com.          MX   10 mx.provider.com.
example.com.          TXT  "v=spf1 include:_spf.provider.com ~all"
sel1._domainkey       TXT  "v=DKIM1; k=rsa; p=MIIBIjANBg..."     # 服务商后台生成
_dmarc.example.com.   TXT  "v=DMARC1; p=none; rua=mailto:dmarc@example.com"
```

用 MXToolbox 或 mail-tester 验证，DMARC 至少设为 `p=none` 并开启报告，稳定之后再逐步收紧到 `quarantine` / `reject`。（SPF / DKIM / DMARC 是送达率的通用要求，原文没有展开。）

---

## 8. Cloudflare：AI SaaS 的流量分层配置

对海外 AI SaaS 来说，Cloudflare 不只是一个 CDN，而是**基础设施**。对 AI 产品而言，被攻击的后果不只是宕机，**还可能是模型调用费用失控**。

### 8.1 先给流量分层

| 层 | 包含 | 原则 | 代理状态 |
|---|---|---|---|
| **营销流量** | 首页、落地页、SEO 页、博客、文档、价格页 | **能缓存的尽量缓存** | 橙云（代理） |
| **业务流量** | 登录 / 注册、dashboard、API（最贵） | **花钱的接口重点保护** | dashboard 用橙云；`api.` 用灰云或严格规则 |
| **系统流量** | Stripe Webhook、OAuth 回调、cron / 内部任务 | **必须直连的就直连** | `hooks.` 用灰云（仅 DNS） |

原文作者的 DNS 规划：`example.com`、`www` 和营销路径用橙云；`app.example.com` 用橙云；`api.example.com` 和 `hooks.example.com` 用**灰云**。原因：API 不应该被缓存；Webhook 容易被 WAF 和 Bot 规则误杀；Stripe 和 OAuth 对 IP 和签名很敏感。**Cloudflare 保护的是人访问的那一层，不是模型调用那一层。**

### 8.2 配置清单

| 位置 | 设置 | 推荐值 |
|---|---|---|
| Speed → Optimization | HTTP/2、HTTP/3、Brotli、Early Hints | 全部开启（对 SaaS 没有副作用；Early Hints 对远距离的海外用户有帮助） |
| Caching → Cache Rules | 营销页规则：URL 路径匹配 `/`、`/blog*`、`/pricing`、`/docs*` | **Cache Everything**，Edge TTL **6–24 小时**，Browser TTL **1–4 小时** |
| Caching → Cache Rules | 绕过规则：`/api/*`、`/auth/*`、`/dashboard*`、OAuth 回调 | **Bypass cache** |
| Security → Bots | Bot Fight Mode | 开启（拦截自动注册脚本、扫描器、盗刷 token） |
| Security → WAF → Rate limiting | `/api/*`、`/auth/login`、`/auth/register`、`/generate`、`/chat` | 单个 IP 60 秒内超过 100 次请求 → Challenge 或 Block（目标是提高攻击成本，不追求完美防御） |
| Security → WAF → Custom rules | 登录、注册、忘记密码接口，遇到异常 UA 或异常频率 | **Managed Challenge**（原文称能挡住约 70% 的撞库） |
| Security → Settings | Under Attack 模式 | **平时关闭**，只作为最后手段（会影响真实用户） |
| AI 爬虫 | Block AI bots 及 AI 爬虫相关设置 | **按 GEO 策略决定**，见 [06 章](../06-geo-ai-search/) |

只缓存图片和 JS、不缓存 HTML 的话，海外用户的 TTFB 很容易超过 800ms。**静态营销页的 HTML 也要缓存**。

> ⚠️ **2026 更新**
> - 原文让开启 **Auto Minify**，但 Cloudflare 已经在 2024 年下线了这个功能，压缩工作要放到构建阶段完成。
> - 原文建议开启"屏蔽 AI 训练爬虫"，这和 GEO 目标相冲突。另外，Cloudflare 对新接入的域名可能**默认**拦截 AI 爬虫，或者托管你的 robots.txt。一定要到后台确认，并和 [06 章](../06-geo-ai-search/) 的策略保持一致。
> - 免费版的 Bot Fight Mode 不能被 WAF 规则绕过，有时会误伤 Webhook 和 API 客户端。所以 `hooks.` / `api.` 要用灰云，开启后要实测一次。

### 8.3 三个常见事故

| 事故 | 现象 | 修复 |
|---|---|---|
| Stripe Webhook 被拦 | 用户付了钱，权益没开通 | `hooks.` 用灰云，或者在防火墙里放行 Stripe 的 IP；去 Stripe 后台确认 Webhook 都返回 2xx |
| OAuth 登录失败 | 回调被 Challenge 拦住，或者 cookie / header 被改写 | 把回调路径加白，并且对这个路径关闭缓存；用无痕窗口走一遍完整登录 |
| API 响应被缓存 | **A 用户看到了 B 用户的数据** | 立刻检查 Cache Rules；API、认证接口和 dashboard 一律 Bypass |

### 8.4 验证命令

```bash
curl -sI https://example.com/pricing | grep -iE "cf-cache-status|content-encoding"   # 期望 HIT，br
curl -sI https://example.com/api/me  | grep -i  "cf-cache-status"                    # 期望 DYNAMIC 或 BYPASS
curl -sI --http3 https://example.com/ | head -1                                       # HTTP/3 可用（需要 curl 支持）
for i in $(seq 1 105); do curl -s -o /dev/null -w "%{http_code}\n" https://example.com/api/ping; done | sort | uniq -c   # 第 101 次之后应该被挑战或拦截
```

---

## 9. 搜索引擎后台提交

主动提交（sitemap 或单个 URL）可以把"等爬虫自然发现"的几天到几周大幅缩短。站长后台同时也是你的**数据中心**：收录情况、查询词、展示和点击率、抓取错误、安全告警都在这里。

| 搜索引擎 | 后台 | 何时需要 |
|---|---|---|
| <img src="https://www.google.com/s2/favicons?domain=search.google.com&sz=32" width="16" height="16" alt=""> Google | [Search Console](https://search.google.com/search-console/about) | 必做（推荐用"网域"资源类型验证） |
| <img src="https://www.google.com/s2/favicons?domain=bing.com&sz=32" width="16" height="16" alt=""> Bing | [Bing Webmaster Tools](https://www.bing.com/webmasters) | 必做（可以从 GSC 一键导入；也影响 ChatGPT 搜索和 Copilot，见 06 章） |
| <img src="https://www.google.com/s2/favicons?domain=yandex.com&sz=32" width="16" height="16" alt=""> Yandex | [Yandex Webmaster](https://webmaster.yandex.com/) | 面向俄语或独联体用户时做 |
| <img src="https://www.google.com/s2/favicons?domain=baidu.com&sz=32" width="16" height="16" alt=""> 百度 | [百度搜索资源平台](https://ziyuan.baidu.com/site/index) | 面向中文用户时做 |
| <img src="https://www.google.com/s2/favicons?domain=sogou.com&sz=32" width="16" height="16" alt=""> 搜狗 | [搜狗站长平台](https://zhanzhang.sogou.com/) | 面向中文用户时做 |
| <img src="https://www.google.com/s2/favicons?domain=so.com&sz=32" width="16" height="16" alt=""> 360 | [360 站长平台](https://zhanzhang.so.com/) | 面向中文用户时做 |
| <img src="https://www.google.com/s2/favicons?domain=toutiao.com&sz=32" width="16" height="16" alt=""> 头条搜索 | [头条站长平台](https://zhanzhang.toutiao.com/) | 面向中文用户时做 |

**操作步骤**

1. 验证网站所有权（DNS TXT 记录最稳；用 HTML meta 标签验证的话，对应 auditor 的 `indexing-gsc`）。
2. 提交 sitemap，状态显示"成功"，发现的 URL 数量 ≈ 可索引页面数。
3. 新页面或重要更新：在 Google 网址检查里点"请求编入索引"；Bing / Yandex 用 URL 提交或 **IndexNow**；百度用普通收录 / API 推送。
4. 新站**每周**看一次"网页索引编制"报告，盯住"已抓取 – 尚未编入索引"和"已发现 – 尚未编入索引"这两项，它们应该逐步减少。
5. 站内链接返回 404 / 5xx 的数量 = 0；"安全问题"和"人工处置措施"显示"未检测到问题"。
6. 定期看效果报告：查询词、展示次数、点击率、平均排名。GSC 要和 GA4 关联。

**IndexNow**（Bing、Yandex、Seznam、Naver 等支持，Google 不支持）

```bash
# 1) 在站点根目录放一个密钥文件：https://example.com/<key>.txt，文件内容就是 <key>
# 2) 发布或更新时推送：
curl -s -X POST "https://api.indexnow.org/indexnow" -H "Content-Type: application/json" \
  -d '{"host":"example.com","key":"<key>","urlList":["https://example.com/blog/new-post"]}'
```

> ⚠️ **2026 更新**：《搜索引擎后台提交》里说要在后台"设置首选域名"和"配置抓取参数"。这两个功能 GSC 都已经下线了：首选域名设置在 2019 年取消，URL 参数工具在 2022 年取消。现在的做法是用 **301 + canonical** 统一主机名，用 **canonical / noindex / robots.txt** 处理参数页。

---

## 10. 其他基础项

| 项 | 标准 | auditor |
|---|---|---|
| HTTPS | 全站 HTTPS，没有混合内容；证书自动续期（Let's Encrypt、Cloudflare，或开源的 <img src="https://www.google.com/s2/favicons?domain=allinssl.com&sz=32" width="16" height="16" alt=""> [AllinSSL](https://allinssl.com/)），剩余有效期 > 30 天 | — |
| 404 页面 | 不存在的 URL 返回真实的 404 状态码（不是 200 的"软 404"），页面上给出导航和搜索入口 | `tech-404` |
| favicon | 声明 `<link rel="icon">`（会显示在浏览器标签和 Google 搜索结果里） | `tech-favicon` |
| 移动端 | 响应式布局 + viewport | `tech-viewport` |
| 统计 | GA4 或 Plausible / Umami 等注重隐私的工具，在所有模板上生效；异步加载；配置转化事件 | `analytics-installed` |

---

## 来源

- [网站加速和防攻击](https://lownrain.feishu.cn/wiki/HFt6wEYNOiVdWSk9pBfc5GaSnwb)（独立开发前线｜SEO从0到100）
- [站点地图](https://lownrain.feishu.cn/wiki/KnACwgXa7iFmcvkvbdac09CTnVh)（独立开发前线｜SEO从0到100）
- [站点地图的格式](https://lownrain.feishu.cn/wiki/Ch3ywS3moiuom8k0ppfcZeiknHb)（独立开发前线｜SEO从0到100）
- [搜索引擎后台提交](https://lownrain.feishu.cn/wiki/YGGDwLYhtitfK5kBao0cd4Bsnme)（独立开发前线｜SEO从0到100）
- [域名配置](https://lownrain.feishu.cn/wiki/BBduwEGPLi9LUjkSnyucea3FnYg)（独立开发前线｜SEO从0到100）
- [域名邮箱](https://lownrain.feishu.cn/wiki/NI8cwVtXliq0QqkeC4rcNrLFnZd)（独立开发前线｜SEO从0到100）
- [SEO中的重要标签](https://lownrain.feishu.cn/wiki/LizRwGMxiiJt1ck2pBOcB2KTnQf)（独立开发前线｜SEO从0到100）
- [页面结构示例](https://lownrain.feishu.cn/wiki/AEp0wNlm7izUbJkSRhwcYFton3e)（独立开发前线｜SEO从0到100）
- [SEO名词解释](https://lownrain.feishu.cn/wiki/ABWzwVvQTiPWdeknyLeclLdFnTh)（独立开发前线｜SEO从0到100）
- [网站流量统计](https://lownrain.feishu.cn/wiki/Y5l2wrWD9itTurk9weJcf1uInJ4)（独立开发前线｜SEO从0到100）
- [SEO经验分享](https://lownrain.feishu.cn/wiki/B2MLwCgXBisanqkZNyCcXDP6nqh)（独立开发前线｜SEO从0到100）
- [通过SEO打造自然增长产品](https://lownrain.feishu.cn/wiki/T3mnwUqeRiqfOyk8XBBc2zmHnpf)（独立开发前线｜SEO从0到100）
- [产品推荐](https://lownrain.feishu.cn/wiki/TdLowyz6CiPBYxkhUPhcoqzjnUE)（独立开发前线｜SEO从0到100）
- [产品上线TodoList](https://lownrain.feishu.cn/wiki/FHOCwhu0uii39nkFwuVcaVLenSe)（独立开发前线｜SEO从0到100）
- [GEO](https://lownrain.feishu.cn/wiki/L7VTwkIxRitca7kIQNAc4n7nnHg)（独立开发前线｜SEO从0到100）
