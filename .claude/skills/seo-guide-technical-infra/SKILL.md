---
name: seo-guide-technical-infra
description: 当用户要做技术 SEO 或站点基础设施时使用，包括 sitemap、robots.txt、SSR/SSG、Core Web Vitals、域名与 www 301、子目录 vs 子域名、域名邮箱、Cloudflare 缓存/WAF/限流、GSC/Bing 提交与 IndexNow（technical SEO / 收录 / LCP INP CLS / 速度）。
---

# 技术 SEO 与基础设施

> 一句话：帮用户把站点的可抓取、可索引、速度、域名、CDN 安全和搜索引擎后台一次配好——这是 SEO 里投入产出比最高的一环。完整内容见仓库 `handbook/03-technical-seo-and-infra.md`（ArcueidShiki/seo）。

## 何时使用
- 新站上线前做技术检查，或用户问"为什么页面不收录 / 收录很少"
- 用户要写 / 审 sitemap.xml、robots.txt，或配置 GSC、Bing Webmaster、IndexNow、百度等后台
- 用户的站点是纯前端渲染（CSR），担心爬虫和 AI 爬虫看不到正文
- 用户问 LCP / INP / CLS、Lighthouse 分数、页面太重
- 用户要选域名、统一 www / 裸域、决定博客放子目录还是子域名、配域名邮箱
- 用户的 AI SaaS 要接 Cloudflare：缓存、WAF、限流、Bot、Webhook / OAuth 出问题

## 核心原则
1. **技术 SEO 先行**：原文作者经验是约一周学会、几周做完，可把新站从 0 分拉到约 60 分；技术底子不好，外链只是在放大问题。
2. **P0 三件事**：HTTPS + 单一主机名（所有变体一跳 301 到同一个 https 主机）；可抓取可索引（robots.txt 不拦重要内容、重要页无 noindex、正文在 HTML 里）；sitemap 在 GSC 和 Bing 显示"成功"。
3. **sitemap 是提示不是命令**：只放希望被索引、返回 200 的规范 URL；`<lastmod>` 写真实修改日期；`changefreq` / `priority` 基本被忽略；它不会直接提升排名。
4. **robots.txt 必须有 `Sitemap:` 行**，不能 Disallow sitemap、CSS、JS；**robots.txt 不等于 noindex**——真不想被索引就允许抓取再加 noindex。
5. **营销页、文档、博客用 SSR / SSG**，只有登录后的 dashboard 用 CSR；大多数 AI 爬虫不执行 JavaScript。
6. **Core Web Vitals 按真实用户第 75 百分位**：LCP ≤ 2.5s、INP ≤ 200ms、CLS ≤ 0.1。
7. **www 和裸域只留一个**，另一个一跳 301 并保留路径和查询参数；博客放子目录；内链只用主域名；不随意换主域名或博客路径。
8. **Cloudflare 先给流量分层**：营销流量能缓存尽量缓存（橙云）；业务流量里花钱的接口重点保护；Stripe Webhook、OAuth 回调等系统流量必须直连（灰云）。
9. **静态营销页的 HTML 也要缓存**；只缓存图片和 JS 时，海外用户 TTFB 很容易超过 800ms。
10. **API、认证接口、dashboard 一律 Bypass cache**，否则可能出现 A 用户看到 B 用户的数据。
11. **GSC + Bing 是必做的数据中心**：新站每周看索引报告；站内 4xx / 5xx 链接数 = 0。
12. **域名邮箱配齐 MX / SPF / DKIM / DMARC**；DMARC 先 `p=none` 开报告，再逐步收紧；SSL 自动续期，剩余有效期 > 30 天。

## 操作流程
1. **收集输入**：域名、框架 / 渲染方式、托管与 CDN（是否用 Cloudflare）、是否 AI SaaS（有无 API / Webhook / OAuth / 模型调用）、目标市场（是否需要百度 / Yandex / 搜狗 / 360 / 头条）、GSC 与 Bing 是否已验证、统计工具。
2. **自动审计**：有网址时运行 `node auditor/audit.mjs --url <网址> --name mysite --keyword "主关键词"`（含移动端 + 桌面端 Lighthouse）；否则用下方 curl 命令逐项查。
3. **按 P0 → P1 → P2 排查**：先 HTTPS / 主机名 / 可索引 / sitemap，再 canonical、死链、CWV、统计，最后 CDN 缓存、安全、邮箱、证书。
4. **sitemap**：核对放 / 不放规则和格式陷阱；超过 50,000 URL 或想按类型排查时拆成 sitemap 索引；图片多加图片 sitemap；确认发布内容时自动重新生成。
5. **robots.txt**：检查残留的 `Disallow: /`、Sitemap 行、CSS/JS 是否被拦；AI 爬虫策略与 seo-guide-geo-ai-search 保持一致。
6. **渲染**：curl 源码看 H1 和正文字数；不达标就建议迁到 Next.js / Nuxt / Astro 或静态文档生成器，文档放自己域名或子目录并列入 sitemap。
7. **性能**：看 PageSpeed Insights"实际用户数据"和 GSC CWV 报告，把问题对应到下方优化手段。
8. **域名**：买前做尽职调查（Wayback Machine 历史、whois 注册与到期时间、反查同 IP 站点）；配置 www / 裸域 301 并用 curl 验证只跳一次。
9. **Cloudflare**（AI SaaS）：给出 DNS 橙云 / 灰云规划 + 配置清单 + 验证命令；开启 Bot 相关功能后实测 Webhook 和 API 客户端。
10. **搜索引擎后台**：验证所有权（DNS TXT 最稳）→ 提交 sitemap → 新页面"请求编入索引"或 IndexNow 推送 → 每周盯"已抓取 – 尚未编入索引""已发现 – 尚未编入索引" → 关联 GSC 与 GA4。
11. **其他基础项**：真实 404 状态码（非软 404）、favicon、viewport、统计脚本异步加载并配转化事件。
12. **输出审计表 + 修复补丁 + 复查计划**。

## 关键数字与门槛
| 指标 | 门槛/建议值 | 说明 |
|---|---|---|
| LCP | 良好 ≤ 2.5s / 需改进 ≤ 4s / 差 > 4s | 第 75 百分位真实用户数据 |
| INP | 良好 ≤ 200ms / 需改进 ≤ 500ms / 差 > 500ms | 2024 年 3 月起取代 FID |
| CLS | 良好 ≤ 0.1 / 需改进 ≤ 0.25 / 差 > 0.25 | 图片、视频、广告位预留尺寸 |
| Lighthouse 移动端性能 | ≥ 90 判通过 | auditor 的 `perf-lighthouse` |
| SSR 正文 | 不执行 JS 时 ≥ 80 词，且 ≥ 渲染后正文 70% | auditor 的 `tech-ssr-content` |
| 单个 sitemap | ≤ 50,000 URL，未压缩 ≤ 50MB | 超出拆分为 sitemap 索引 |
| 图片体积 | ≤ 200KB | `img-optimized` |
| 站内 4xx / 5xx 链接 | 0 | GSC + 抓取工具 |
| sitemap 提交数 | ≈ 可索引页面数 | GSC / Bing 显示"成功" |
| SSL 证书 | 剩余有效期 > 30 天 | 自动续期 |
| Cloudflare 营销页缓存 | Edge TTL 6–24 小时，Browser TTL 1–4 小时 | Cache Everything |
| 限流 | 单 IP 60 秒内 > 100 次 → Challenge / Block | `/api/*`、登录、注册、`/generate`、`/chat` |
| 海外 TTFB 风险 | 不缓存 HTML 时易 > 800ms | 营销页 HTML 走边缘缓存 |
| Managed Challenge | 原文称挡住约 70% 撞库 | 登录 / 注册 / 忘记密码 |
| Demo 对比（仓库） | 优化前首页 3.3MB、LCP 18.1s → 优化后 47KB、LCP 1.4s | 说服用户"技术优化值得做"的实例 |

## 模板与示例
**robots.txt**
```text
User-agent: *
Disallow: /api/
Disallow: /dashboard/
Disallow: /search
Allow: /

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

**sitemap.xml**
```xml
<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url><loc>https://example.com/pdf-to-excel</loc><lastmod>2026-10-20</lastmod></url>
</urlset>
```
格式陷阱：标签没闭合；中文 URL 未百分号编码；sitemap 本身返回 404 / 301；被 robots.txt 拦截；含 noindex URL；http / https / www 混用。

**www → 裸域（Nginx）与验证**
```nginx
server { listen 443 ssl; server_name www.example.com; return 301 https://example.com$request_uri; }
```
```bash
curl -sI http://www.example.com/blog/x | grep -iE "^(HTTP|location)"   # 期望一次 301 到 https://example.com/blog/x
curl -s https://example.com/pdf-to-excel | grep -c "<h1"                # 源码里有 H1
curl -s https://example.com/pdf-to-excel | sed 's/<[^>]*>//g' | wc -w   # 源码正文字数
curl -sI https://example.com/pricing | grep -iE "cf-cache-status|content-encoding"   # 期望 HIT，br
curl -sI https://example.com/api/me  | grep -i  "cf-cache-status"                    # 期望 DYNAMIC 或 BYPASS
```

**Cloudflare DNS 分层**
| 主机 | 代理 | 原因 |
|---|---|---|
| `example.com`、`www`、营销路径 | 橙云 | 缓存 + 防护 |
| `app.example.com` | 橙云 | 人访问的业务层 |
| `api.example.com` | 灰云或严格规则 | API 不应被缓存 |
| `hooks.example.com` | 灰云（仅 DNS） | Webhook 易被 WAF / Bot 规则误杀，Stripe / OAuth 对 IP 和签名敏感 |

**域名邮箱 DNS**
```text
example.com.          MX   10 mx.provider.com.
example.com.          TXT  "v=spf1 include:_spf.provider.com ~all"
sel1._domainkey       TXT  "v=DKIM1; k=rsa; p=MIIBIjANBg..."
_dmarc.example.com.   TXT  "v=DMARC1; p=none; rua=mailto:dmarc@example.com"
```

**IndexNow**（Bing、Yandex、Seznam、Naver 等支持，Google 不支持）
```bash
curl -s -X POST "https://api.indexnow.org/indexnow" -H "Content-Type: application/json" \
  -d '{"host":"example.com","key":"KEY","urlList":["https://example.com/blog/new-post"]}'
```

**性能问题 → 手段**：LCP 慢 → HTML 边缘缓存、主图 WebP / AVIF + `fetchpriority="high"` 且不懒加载、字体 `font-display: swap` 并预加载；CLS 高 → 预留尺寸、不在首屏上方插横幅；INP 差 → 减第三方脚本、拆长任务、统计脚本 async / defer。

## 常见错误与过时做法
- ⚠️ 上线时残留测试环境的 `Disallow: /`（auditor 直接判失败）；拦截 CSS / JS 导致 Google 渲染不出页面。
- ⚠️ 每天把所有 URL 的 `<lastmod>` 改成今天 → 搜索引擎会忽略该字段。
- ⚠️ 用 HTML sitemap 代替 XML sitemap。
- ⚠️ 三个 Cloudflare 事故：Stripe Webhook 被拦（付了钱权益没开通）；OAuth 回调被 Challenge 拦截；API 响应被缓存导致数据串号。
- ⚠️ Under Attack 模式常开（影响真实用户），它只是最后手段。
- ⚠️ **2026 更新**：凡是写 LCP / **FID** / CLS 的教程已过时，INP 从 2024 年 3 月起取代 FID。
- ⚠️ **2026 更新**：Cloudflare Auto Minify 已于 2024 年下线，压缩放到构建阶段。
- ⚠️ **2026 更新**：原文建议开启"屏蔽 AI 训练爬虫"，与 GEO 目标冲突；Cloudflare 对新接入域名可能默认拦截 AI 爬虫或托管 robots.txt，必须到后台确认。
- ⚠️ **2026 更新**：免费版 Bot Fight Mode 不能被 WAF 规则绕过，可能误伤 Webhook 和 API 客户端，所以 `hooks.` / `api.` 用灰云并实测。
- ⚠️ **2026 更新**：GSC 的"首选域名"（2019 年取消）和"URL 参数工具"（2022 年取消）都已下线；改用 301 + canonical 统一主机名，用 canonical / noindex / robots.txt 处理参数页。
- ⚠️ **2026 更新**：完全匹配域名（EMD）2012 年起不再额外加分；买过期域名借外链做无关内容属于 2024 年 3 月的"过期域名滥用"，只适合主题延续。
- ⚠️ 自建邮件服务器（Mailcow、iRedMail 等）维护成本很高，不推荐新手。

## 交付格式
1. **一句话结论**：当前最大的技术风险 + 预计修复工作量。
2. **审计表**（按 P0 → P2 排序）：

| 优先级 | 项 | 现状 / 证据 | 判定 ✅ ⚠️ ❌ ❓ | 修复动作 | 验证命令 / 位置 |
|---|---|---|---|---|---|

   没有证据（未跑命令、未看后台）的项标 ❓，不标通过。
3. **可直接使用的配置**：robots.txt、sitemap、Nginx / Cloudflare 规则、DNS 记录。
4. **变更风险说明**：涉及 Cloudflare、重定向、域名变更时，写清可能误伤的对象（Webhook、OAuth、API）以及发生概率高 / 中 / 低和回滚方法。
5. **复查计划**：新站每周看一次 GSC 索引与站点地图报告，盯"已提交"与"已编入索引"的差距；修复项在下一次周检时复查。

## 相关
- Checklist skill(s): seo-checklist-technical, seo-checklist-performance, seo-checklist-infra, seo-checklist-indexing, seo-checklist-analytics
- 其他手册 skills: seo-guide-page-structure-tags, seo-guide-geo-ai-search, seo-guide-backlinks, growth-guide-analytics-tools, growth-guide-launch-distribution, seo-guide-glossary
