---
name: seo-checklist-monetize
description: 规划流量变现（AdSense 等广告、订阅定价与试用、支付渠道选择、联盟营销、留存指标）时使用；逐条核对 checklist 变现条目。
---

# 变现 Checklist（Monetization）

> 广告、订阅、联盟营销：流量最后要变成收入。
> 共 8 条：P0 3 · P1 3 · P2 2；其中 0 条可由 auditor 自动检测（🤖）。数据源：仓库 ArcueidShiki/seo 的 `checklist/checklist.json`（类别 `monetize`）。

## 何时使用
- 决定广告还是订阅
- 个人开发者选支付渠道
- 评估每次访问收益和留存
- 用户说"帮我检查 / 优化 变现"或给出网址要求做这方面的 SEO 审计

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

#### [P0] 开发前定好收入模式：订阅、一次性付费、广告、联盟或付费收录
id: `monetize-model`
- **为什么**：先有流量再想变现，常常发现用户群根本不付费；收入模式还决定了定位、免费边界和页面设计。
- **通过标准**：
  - 写下收入模式、目标用户、价值主张（如「AI 婚纱照」而不是泛泛的「AI 文生图」）
  - 免费 / 付费边界清楚：核心体验免费可用，PRO 提供更高额度、高清导出、去水印、优先支持、集成等
  - 用竞品定价页和公开收入数据（如 whoismaking.money、Indie Hackers）确认这个品类有人付费
- **怎么查**：用一页纸写清：谁付钱、为什么付、付多少、多久付一次；对照 3 个竞品的定价。
- **工具**：Indie Hackers (https://www.indiehackers.com/)

#### [P0] 按自己的主体选收款平台：个人可用的 vs 需要海外公司的
id: `monetize-payment-provider`
- **为什么**：很多开发者做完产品才发现 Stripe 开不了户；先确认 KYC 要求，再写结账代码。
- **通过标准**：
  - 笔记整理的个人可申请平台：Creem、Paddle、PayPal（商业账户）、Waffo；Lemon Squeezy（2024 年被 Stripe 收购）和 Polar 以官网当前政策为准
  - 需要公司或特定国家身份：Stripe（需在其支持的国家 / 地区有主体，不支持中国大陆）、PayPro Global、Paydify
  - 优先考虑「记录商家（MoR）」模式的平台（如 Paddle、Lemon Squeezy、Polar、Creem），由平台代缴各国增值税 / 销售税
  - 费率、提现方式（如 Wise 或国内银行卡）、拒付处理已写进成本模型
- **怎么查**：在各平台注册页查看支持的国家和主体类型；先用测试模式跑通一笔订单。
- **工具**：Creem (https://www.creem.io/)；Paddle (https://www.paddle.com/)；Lemon Squeezy (https://www.lemonsqueezy.com/)；Polar (https://polar.sh/)；Stripe (https://stripe.com/)；PayPal (https://www.paypal.com/)

### ② 开发

#### [P1] 定价页：2–3 个档位、年付优惠、限制写清楚，附真实评价和 FAQ
id: `monetize-pricing-page`
- **为什么**：定价页是转化最关键的一页；额度和退款政策含糊，会直接导致放弃购买。
- **通过标准**：
  - 免费档 + 2–3 个付费档；每档的额度和限制写成具体数字
  - 年付有明确优惠（如相当于 2 个月免费）；「限时」「即将涨价」等紧迫感只在真实时使用
  - 有真实用户评价和 FAQ（退款、取消、发票、额度用完怎么办）
  - 结构化数据中的价格与页面显示一致
- **怎么查**：请 3 个没看过产品的人看定价页 30 秒，说出自己会选哪一档；用 Clarity 热图看用户停在哪里。
- **工具**：Microsoft Clarity (https://clarity.microsoft.com/)；Rich Results Test (https://search.google.com/test/rich-results)

### ③ 上线

#### [P0] 上线前端到端测试支付：购买、开通、退款、取消、续费失败
id: `monetize-checkout-test`
- **为什么**：支付链路任何一环出错（尤其是 Webhook 被拦截），都会变成「付了钱却没开通」的投诉和退款。
- **通过标准**：
  - 用真实卡完成 1 笔小额购买：Webhook 返回 2xx，账户权限即时开通，收据从域名邮箱发出
  - 退款、取消订阅、续费失败（测试卡）三种情况都有正确的权限变化和通知邮件
  - GA4 中 begin_checkout → purchase 漏斗可见，并记录流失率
- **怎么查**：支付平台测试模式 + 一笔真实小额交易；在 Cloudflare 确认 Webhook 主机为灰云或已放行。
- **工具**：Stripe (https://stripe.com/)；Paddle (https://www.paddle.com/)；Creem (https://www.creem.io/)；Google Analytics 4 (https://analytics.google.com/)

### ④ 增长

#### [P1] 用免费资源（清单、模板、额度）换邮箱或私域好友，再转化付费
id: `monetize-lead-magnet`
- **为什么**：多数访客第一次不会付费；留下联系方式才能持续触达，私域转化率通常远高于公域。
- **通过标准**：
  - 至少 1 个免费资源换邮箱或加微信，放在高流量文章和落地页上
  - 漏斗每一步都有数据：资源页访问 → 留资 → 打开 / 回复 → 付费
  - 新订阅者收到 3–5 封自动欢迎邮件：交付资源、讲故事、展示案例、给出付费理由
  - 私域按约 1% 转化做测算（笔记示例：2 万好友 × 1% × ¥200 = ¥4 万），每月用真实数据更新
- **怎么查**：邮件可用 Substack 或其他邮件营销工具，中文私域用企业微信；在 GA4 中把留资设为关键事件。
- **工具**：Substack (https://substack.com/)；Google Analytics 4 (https://analytics.google.com/)；微信公众平台 (https://mp.weixin.qq.com/)

#### [P1] 访谈首批付费用户再调整定价；考虑买断（LTD）前先算清毛利
id: `monetize-payer-interview`
- **为什么**：第一批付费用户最清楚「为什么值得付钱」，他们的原话就是最好的定价页文案和下一个功能。
- **通过标准**：
  - 访谈前 5–10 位付费用户：为什么付费、对比过哪些产品、差点没买的原因
  - 访谈后 30 天内更新定价页文案或档位，并记入定价变更日志
  - 考虑 AppSumo 等买断平台时：计算平台分成后的单用户收入，对比长期服务成本（尤其 AI 调用费），算不过来就不做
  - 每月记录：免费 → 付费转化率、MRR、流失率
- **怎么查**：付费后自动发一封创始人邮件，邀请 15 分钟通话；把用户原话整理进表格。
- **工具**：AppSumo (https://appsumo.com/)；Google Analytics 4 (https://analytics.google.com/)

#### [P2] 申请 AdSense 前自查：原创内容、政策页面、导航清晰；获批后配置 ads.txt
id: `monetize-adsense-readiness`
- **为什么**：AdSense 常以「低价值内容」拒绝新站；准备不足就反复申请只会浪费时间。
- **通过标准**：
  - 有足够多原创且有实质内容的页面（官方没有篇数门槛，经验上 ≥ 20–30 篇再申请）
  - 有隐私政策（说明使用 Google 广告和 Cookie）、About、Contact 页面；导航清晰，没有大量空页面
  - 面向欧洲经济区、英国、瑞士用户时使用 Google 认证的 CMP 同意弹窗（2024 年起强制）
  - 获批后 /ads.txt 返回 200 并包含正确的发布商 ID；开启广告后 CLS 仍 ≤ 0.1
  - 被拒或以中文流量为主时的备选：Ezoic、Adsterra、Monetag；中文站可用万维广告（Adwork）
- **怎么查**：AdSense → 网站 → 添加网站并按提示放置代码；用 PageSpeed Insights 对比开启广告前后的 CLS 和性能分。
- **工具**：Google AdSense (https://adsense.google.com/)；Ezoic (https://www.ezoic.com/)；PageSpeed Insights (https://pagespeed.web.dev/)

#### [P2] 开设自己的联盟计划，让用户和创作者帮你推广
id: `monetize-affiliate-program`
- **为什么**：联盟按成交付佣金，是笔记中与目录、SEO 并列的三个低成本渠道之一。
- **通过标准**：
  - 联盟计划已上线：Lemon Squeezy 自带联盟功能，或使用 Rewardful、impact.com、Awin（ShareASale 已并入 Awin）
  - 佣金规则写清楚（SaaS 常见为首年 20–30% 的循环佣金，按自己的毛利决定）、Cookie 有效期、结算周期
  - 条款禁止：竞价投放品牌词、垃圾邮件推广、虚假优惠码站
  - 官网页脚有「Affiliates」入口；每个推广者有独立追踪链接，后台能看到点击和转化
- **怎么查**：先邀请 5–10 个真实用户或创作者加入，跑通一次结算后再公开招募。
- **工具**：Lemon Squeezy (https://www.lemonsqueezy.com/)；Rewardful (https://www.rewardful.com/)；impact.com (https://impact.com/)；Awin (https://www.awin.com/)

## 相关
- 手册 skill（原理、打法和模板）：`growth-guide-monetization`
- 总索引：`seo-growth-skills-index`
- 交互式工具：仓库 `tool/index.html`（构建后在 `/tool/`），可以勾选进度、导出 Markdown
