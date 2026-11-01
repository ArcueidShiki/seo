---
name: seo-checklist-infra
description: 配置域名、www 与裸域 301、HTTPS、Cloudflare 缓存与防护、API 和 Webhook 放行、域名邮箱 SPF/DKIM/DMARC 时使用；逐条核对 checklist 基础设施条目。
---

# 域名 / HTTPS / CDN / 安全 Checklist（Domain, HTTPS, CDN & security）

> 域名选择、Cloudflare、HTTPS、域名邮箱、防刷与防攻击。
> 共 10 条：P0 6 · P1 4 · P2 0；其中 0 条可由 auditor 自动检测（🤖）。数据源：仓库 ArcueidShiki/seo 的 `checklist/checklist.json`（类别 `infra`）。

## 何时使用
- 新域名接入 Cloudflare
- AI SaaS 被刷 API / 撞库
- 域名邮箱进垃圾箱
- 用户说"帮我检查 / 优化 域名 / HTTPS / CDN / 安全"或给出网址要求做这方面的 SEO 审计

## 执行流程
1. **确认对象**：要检查的网址或页面、目标关键词、目标市场（Google / 百度 / 平台站内）、产品所处阶段（规划 / 开发 / 上线 / 增长 / 维护）。只看当前阶段及之前阶段的条目。
2. **本类条目都需要人工判断**：按下面每条的"通过标准"收集证据（截图、后台数据、搜索指令结果、表格），没有证据的条目一律标为"待确认"，不要标成通过。
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

#### [P0] 选一个短、好记、好拼写的域名，优先 .com
id: `infra-domain-choice`
- **为什么**：域名不是直接排名因素，但影响点击率、信任和口碑传播；上线后再换域名代价很大。
- **通过标准**：
  - 主体 ≤ 15 个字符，无连字符、无数字，听一遍就能拼出来
  - 优先 .com；.ai / .io / .co 被 Google 当作通用顶级域，可以用；.cn / .de 等国家域名会被地理定向
  - 包含主关键词（如 HeadshotPro.com）或是独特好搜的品牌词：在 Google 和百度搜索该词，没有同名大站
  - 在 USPTO / WIPO 商标库和应用商店搜过，没有明显冲突
  - 开启自动续费、WHOIS 隐私保护，注册商账号开启 2FA
- **怎么查**：在 Namecheap / Dynadot / Cloudflare Registrar 查可用性；oneword.domains、expireddomains.net 找短域名；商标查询用 tmsearch.uspto.gov 和 branddb.wipo.int。
- **工具**：Namecheap (https://www.namecheap.com/)；Dynadot (https://www.dynadot.com/)；Cloudflare (https://dash.cloudflare.com/)；Google 搜索 (https://www.google.com/)

#### [P1] 买老域名或二手域名前查历史：没被惩罚、没有垃圾外链
id: `infra-domain-due-diligence`
- **为什么**：曾被用作垃圾站或 PBN 的域名带着历史包袱，新内容很难获得排名。
- **通过标准**：
  - Wayback Machine 历次快照中没有成人、博彩、药品、仿牌或外语垃圾内容
  - Ahrefs / Semrush 外链中没有大量垃圾锚文本，引用域名曲线没有异常暴涨后归零
  - Google 搜索 site:该域名 不是完全没有结果（被完全清空可能是惩罚）
  - ICANN Lookup 查到注册日期、到期日期和状态正常
- **怎么查**：web.archive.org 查看最早、中间年份和最近的快照；Ahrefs 免费 Backlink Checker 看前 100 条外链；lookup.icann.org 查 WHOIS。
- **工具**：Wayback Machine (https://web.archive.org/)；Ahrefs (https://ahrefs.com/)；ICANN Lookup（WHOIS） (https://lookup.icann.org/)；Google 搜索 (https://www.google.com/)

### ② 开发

#### [P0] www 和裸域只保留一个，另一个一跳 301 过去，并保留路径和参数
id: `infra-single-host-301`
- **为什么**：www.example.com 和 example.com 技术上是两个站，不统一就会产生重复内容、分散外链权重。
- **通过标准**：
  - curl -I https://www.example.com/blog/x 返回 301，Location 为 https://example.com/blog/x（路径和查询参数都保留）
  - 两个主机名的 http:// 都一跳 301 到 https:// 主域名
  - 站内链接、canonical、sitemap、og:url 全部使用主域名，从不混用
- **怎么查**：Cloudflare → Rules → Redirect Rules 建一条 301 规则（www 的 DNS 记录保持橙云代理，规则才会生效）；或在 Nginx 里 return 301 https://example.com$request_uri。
- **工具**：Cloudflare (https://dash.cloudflare.com/)

#### [P0] 全站 HTTPS：证书覆盖裸域和 www，自动续期，Cloudflare 用 Full (strict)
id: `infra-https-tls`
- **为什么**：HTTPS 是基础信任信号；证书过期会让整站在浏览器里报错，流量瞬间归零。
- **通过标准**：
  - SSL Labs 评级 ≥ A，证书覆盖裸域、www 和正在使用的子域名
  - 证书剩余有效期 > 30 天且配置了自动续期（Cloudflare 边缘证书、Let's Encrypt 或 AllinSSL）
  - Cloudflare SSL/TLS 加密模式为 Full (strict)，不是 Flexible（Flexible 容易造成重定向循环，且回源是明文）
  - 页面无混合内容警告；所有子域名都支持 HTTPS 之后再开启 HSTS
- **怎么查**：ssllabs.com/ssltest 测试；Cloudflare → SSL/TLS → Overview；Chrome DevTools → Security 面板查看混合内容。
- **工具**：SSL Labs (https://www.ssllabs.com/ssltest/)；Cloudflare (https://dash.cloudflare.com/)

#### [P0] 按流量类型规划 Cloudflare 代理：人访问的走橙云，API 和 Webhook 走灰云
id: `infra-cf-proxy-plan`
- **为什么**：Cloudflare 保护的是「人的访问层」；Webhook 和 API 被 WAF / Bot 规则误拦，就会出现「付了钱却没开通」或 OAuth 登录失败。
- **通过标准**：
  - DNS 表：裸域、www、营销页、app.（控制台）为橙云；api.、hooks.（Webhook 接收）为灰云（仅 DNS）
  - Stripe / Paddle / Creem 等支付平台的 Webhook 投递日志全部 2xx，没有 403 或质询页面
  - OAuth 回调路径不缓存、不质询：无痕窗口完整走一遍 Google / GitHub 登录成功
  - Bot Fight Mode 无法用 WAF 规则豁免，因此被程序调用的接口不放在开启它的橙云主机名下
- **怎么查**：Cloudflare → DNS → Records 检查每条记录的代理状态；支付平台后台 → Webhooks 查看最近的投递记录和响应码。
- **工具**：Cloudflare (https://dash.cloudflare.com/)；Stripe (https://stripe.com/)；Paddle (https://www.paddle.com/)；Creem (https://www.creem.io/)

#### [P0] API、登录、控制台、OAuth 回调绝不缓存
id: `infra-cf-no-cache-private`
- **为什么**：缓存规则写错时，用户 A 会看到用户 B 的数据，这是最严重的事故之一。
- **通过标准**：
  - /api/*、/auth/*、/dashboard/*、OAuth 回调的响应头 cf-cache-status 为 DYNAMIC 或 BYPASS
  - 带 Set-Cookie 或 Authorization 的请求不会命中 Cache Everything 规则
  - 用两个不同账号同时请求同一接口，返回的数据互不串号
- **怎么查**：Cloudflare → Caching → Cache Rules：给这些路径加 Bypass cache 规则，并放在营销页缓存规则之前；curl -sI 检查响应头。
- **工具**：Cloudflare (https://dash.cloudflare.com/)

#### [P0] 给昂贵接口加限流：/api、/auth、/generate、/chat
id: `infra-cf-rate-limit`
- **为什么**：限流的目的不是完美防御，而是提高攻击成本、保护模型调用费用。
- **通过标准**：
  - 速率限制规则覆盖 /api/*、/auth/login、/auth/register、/generate、/chat
  - 参考阈值：单 IP 60 秒内 > 100 次 → Challenge 或 Block（Cloudflare 免费版规则数和计数窗口有限，例如只能用 10 秒窗口时可换算为 10 秒 > 20 次，以当前套餐说明为准）
  - 应用层另有按用户 / API Key 的额度和每日上限，防止多号白嫖
  - 压测验证：同一 IP 超过阈值后的请求被拦截或质询
- **怎么查**：Cloudflare → Security → WAF → Rate limiting rules；在测试环境用 k6 / autocannon / hey 发请求验证；应用层可用 Redis 计数或 Upstash Ratelimit。
- **工具**：Cloudflare (https://dash.cloudflare.com/)

#### [P1] 开启 Bot Fight Mode，登录 / 注册 / 找回密码加 WAF 质询和人机验证
id: `infra-cf-bot-waf`
- **为什么**：对 AI SaaS 来说，被刷意味着模型账单暴涨；批量注册脚本和撞库是最常见的攻击。
- **通过标准**：
  - Security → Bots：Bot Fight Mode 已开启（API 主机已改为灰云）
  - WAF 自定义规则：/login、/register、/forgot-password 在 UA 异常或请求频率异常时 Managed Challenge，规则有命中日志
  - 注册表单接入 Cloudflare Turnstile 或同类人机验证
  - 平时 Under Attack 模式关闭，只在遭受攻击时临时开启
- **怎么查**：Cloudflare → Security → Bots / WAF → Custom rules（免费版可建 5 条）；Security → Events 查看命中记录。
- **工具**：Cloudflare (https://dash.cloudflare.com/)

### ③ 上线

#### [P1] 配置域名邮箱，并设置 MX / SPF / DKIM / DMARC
id: `infra-domain-email`
- **为什么**：用域名邮箱做客服、外联和发收据更可信；Gmail 和 Yahoo 自 2024 年起要求所有发件人至少配置 SPF 或 DKIM，每天发 5,000 封以上的发件人三者（SPF、DKIM、DMARC）必须齐全，否则容易进垃圾箱或被拒收。
- **通过标准**：
  - 至少有 hello@ 或 support@ 一个域名地址，出现在页脚、隐私政策和外联邮件中
  - DNS 有 MX、SPF（只有一条 v=spf1 记录）、DKIM、DMARC（先用 p=none 并配置 rua 报告，2–4 周报告正常后改为 p=quarantine）
  - mail-tester.com 评分 ≥ 9/10；MXToolbox 的 SPF / DKIM / DMARC 检查全部通过
  - 只收不发可用 Cloudflare Email Routing（免费转发）；需要发信用 Zoho Mail（免费最多 5 个用户）、Google Workspace 或注册商赠送的邮箱
- **怎么查**：在邮件服务商后台拿到 DNS 记录，填入 Cloudflare DNS；dig TXT _dmarc.example.com 验证；给 mail-tester 提供的地址发一封测试邮件。
- **工具**：Cloudflare (https://dash.cloudflare.com/)；MXToolbox (https://mxtoolbox.com/)；mail-tester (https://www.mail-tester.com/)；Dynadot (https://www.dynadot.com/)

### ⑤ 维护

#### [P1] 每月安全与可用性检查：GSC 安全问题、宕机监控、账号 2FA、域名到期
id: `infra-security-monitor`
- **为什么**：被黑、被挂恶意代码、长时间宕机或域名过期，都会让排名和信任快速下降，而且往往不是自己最先发现。
- **通过标准**：
  - GSC → 安全问题和人工处置：两项都是「未检测到任何问题」
  - 可用性监控每 5 分钟检测首页和关键 API，宕机即时通知（邮件 / Telegram）
  - 注册商、Cloudflare、GSC、支付平台、GitHub 账号全部开启 2FA；域名开启注册商锁定
  - 域名到期日 > 60 天且自动续费开启
- **怎么查**：每月第一周检查；UptimeRobot 免费版做监控；在 ICANN Lookup 查看域名状态是否包含 clientTransferProhibited。
- **工具**：Google Search Console (https://search.google.com/search-console)；UptimeRobot (https://uptimerobot.com/)；ICANN Lookup（WHOIS） (https://lookup.icann.org/)

## 相关
- 手册 skill（原理、打法和模板）：`seo-guide-technical-infra`
- 总索引：`seo-growth-skills-index`
- 交互式工具：仓库 `tool/index.html`（构建后在 `/tool/`），可以勾选进度、导出 Markdown
