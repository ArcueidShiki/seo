# 变现：广告、订阅、支付与联盟营销

> 流量只有变成收入才算闭环。本章顺序是：先选变现模型 → 用留存和"单次访问收益 vs CPC"验证 → 广告 / 订阅 / 联盟的具体做法 → 支付渠道选择。
> 相关：获客渠道见 [07](../07-launch-and-distribution/)；指标仪表板见 [11](../11-analytics-and-tools/)。

## 1. 先定变现模型，再写代码

原文要求在动手前就想清楚三件事：**收入模型、目标用户、价值主张**。下表列出原文提到的模型：

| 模型 | 适合 | 门槛 / 前提 | 原文示例 |
|---|---|---|---|
| 广告 | 流量大、单次需求的工具站和内容站 | 有稳定流量；内容合规 | AdSense、Adsterra 等 |
| 订阅（免费 + PRO） | 高频使用的 SaaS / 工具 | 免费层要真有用，PRO 的价值要清楚 | 免费浏览组件库 + $49 解锁全部 |
| 一次性买断 / LTD | 早期需要现金流和曝光 | 算清长期成本（尤其是 AI 调用成本） | AppSumo 买断制推广 |
| 付费专栏 / 知识付费 | 有内容输出能力的个人 | 有个人品牌 | 小报童置顶在网站顶部；知识星球 |
| 导航站：广告 + 付费收录 | 擅长做流量的人 | 能做 SEO；竞争多 | Mkdirs 模板，1–2 小时可部署 |
| CPS / 联盟分佣 | 有精准受众，暂时没有自己的产品 | 选品要匹配受众 | 云服务器 CPS |
| 课程 | 已经有一定影响力 | 自媒体在同步增长 | B 站课堂 |
| 视频自媒体广告分成 | 视频创作者 | 平台的开通门槛 | — |
| 品牌合作 | 小红书等平台的创作者 | 约 1k–5 万粉起 | 见 [09](../09-xiaohongshu/) |

原文提醒：门槛越低的模型竞争越激烈。完全没有方向的话，先培养 3–5 个兴趣，或者先模仿一个已经被验证能赚钱的产品（可以在 <img src="https://www.google.com/s2/favicons?domain=whoismaking.money&sz=32" width="16" height="16" alt=""> [whoismaking.money](https://whoismaking.money/zh) 找公开收入的产品），把从获客到变现的整个闭环跑一遍。

## 2. 放大之前先验证：留存 + 付费率

### 2.1 留存基准：4-2-1

| 指标 | 及格线 | 低于及格线时 |
|---|---|---|
| D1 次日留存 | ≥ 40% | 先修产品，不加大获客 |
| D7 七日留存 | ≥ 20% | 同上 |
| D30 三十日留存 | ≥ 10% | 同上 |

**一次性需求的工具**（如图片压缩）谈不上留存，改看三个指标：

- 跳出率；
- 平均访问时长；
- **直接访问占比**：用户收藏或记住了网址，是工具"被需要"最好的信号。

原文的思想实验："如果今天给你 100 万用户，一个月后日活还剩多少？"产品弱的话，即使 SEO 一天带来 10 万访问，排名也会因为跳出率高、停留短、问题没解决而慢慢掉下来。

### 2.2 单次访问收益 vs 关键词 CPC

原文的判断方法：即使不投广告，也按关键词的 CPC 给自然流量"估价"。

```
自然流量价值 = 日访问量 × 核心关键词平均 CPC
例：100 次/天 × $0.50 = $50/天

单次访问收益 = 月收入 ÷ 月自然访问量
```

| 结果 | 判断 | 动作 |
|---|---|---|
| 单次访问收益 ≥ CPC | 付费率很好 | 可以考虑付费获客或 KOL |
| 单次访问收益 < CPC | 付费率偏低 | 先优化定价、转化路径、PRO 价值 |

CPC 可以在 Google 关键词规划师或 Semrush 里查。这个比较同时告诉你：**投 Google 广告买同样的流量能不能回本**。

### 2.3 验证通过后再放大

- 留存和付费率都达标后，再花钱请 KOL 推广（见效快，还能引发二次传播）。
- 从第一天起就在成本模型里留获客预算，哪怕每月只有约 $100。
- 先把一个产品做到有自然收入，再开下一个。

## 3. 广告变现

### 3.1 广告平台

| 平台 | 特点（原文） | 适合 |
|---|---|---|
| <img src="https://www.google.com/s2/favicons?domain=adsense.google.com&sz=32" width="16" height="16" alt=""> [Google AdSense](https://adsense.google.com/adsense) | Google 官方，默认选择 | 内容合规、面向海外的流量 |
| <img src="https://www.google.com/s2/favicons?domain=ezoic.com&sz=32" width="16" height="16" alt=""> [Ezoic](https://www.ezoic.com/) | RPM 高、门槛低 | 内容站提升 RPM |
| <img src="https://www.google.com/s2/favicons?domain=adsterra.com&sz=32" width="16" height="16" alt=""> [Adsterra](https://adsterra.com/) | 审核宽松，通过快，RPM 高 | AdSense 暂时没过时的备选 |
| <img src="https://www.google.com/s2/favicons?domain=monetag.com&sz=32" width="16" height="16" alt=""> [Monetag](https://monetag.com/) | 广告主预算大 | 流量大的站 |
| <img src="https://www.google.com/s2/favicons?domain=adsubly.com&sz=32" width="16" height="16" alt=""> [Adsubly](https://adsubly.com/) | 按订阅出售广告位（直接赞助） | 开发者工具、垂直受众 |
| <img src="https://www.google.com/s2/favicons?domain=wwads.cn&sz=32" width="16" height="16" alt=""> [万维广告](https://wwads.cn/) | 中文站流量变现 | 国内技术类站点 |
| <img src="https://www.google.com/s2/favicons?domain=adwork.net&sz=32" width="16" height="16" alt=""> [Adwork](https://adwork.net/) | 万维广告的新平台 | 同上 |

> ⚠️ 注意：一些审核宽松的广告网络会提供弹窗、跳转、全屏插页等"侵入式"广告格式。这类格式伤害体验，可能拉高跳出率、拖累 Core Web Vitals，甚至被浏览器安全机制标记。只用横幅或原生格式，并在开启广告前后各跑一次 PageSpeed，确认 CLS 没有变差。

### 3.2 AdSense 申请前的准备（通用做法，原文未列条件）

- [ ] 原创、有实际内容的页面（工具站要配说明、教程、FAQ，不能只有一个输入框）
- [ ] About、Contact、隐私政策页面，从页脚可以进入
- [ ] 内容符合 Google 发布商政策（不做成人、侵权、误导内容）
- [ ] 导航清晰，没有大量死链和空页面
- [ ] 通过审核后配置 `/ads.txt`，并确认能正常访问
- [ ] 在 GDPR 地区按要求展示同意管理弹窗

### 3.3 RPM 思路

```
RPM = 广告收入 ÷ 页面浏览量 × 1000
月广告收入 ≈ 月 PV ÷ 1000 × RPM
```

| 影响 RPM 的因素 | 说明 |
|---|---|
| 访客国家 | 欧美流量通常远高于其他地区 |
| 领域 | 关键词 CPC 高的领域（金融、SaaS、B2B），广告单价通常更高 |
| 每次访问的页面数 | 内容站多页浏览，工具站多为单页，RPM 往往偏低 |
| 版位与密度 | 版位过多会伤害体验和排名，不一定带来更多收入 |

**决策方法**：用"预计 PV × RPM"和"预计付费用户 × 客单价"比较。工具类产品通常订阅或 PRO 的收入更高，广告适合作为免费用户的补充。

## 4. 订阅变现

### 4.1 免费 + PRO 的设计（原文：基于 SEO 做自然增长产品）

- **免费层要真的解决问题**：核心价值不需要注册就能看到、能用。这样跳出率低、停留长，有利于排名，也更容易被分享。
- **PRO 层的常见权益**：更多功能、更高额度、更好的性能、优先支持、无广告、集成、专属资源和培训。
- **提升转化的三个手段**：终身买断价、用户评价（Testimonials）、紧迫感（例如"即将涨价"）。
- **原文示例**：组件库网站免费浏览，一次性 $49 解锁全部组件 + 每月更新 + 无限下载。

### 4.2 定价流程（原文：上线清单第 18–19 步）

1. 先上线一个简单的价格。
2. 找第一个付费用户聊：为什么付钱？对比了哪些替代方案？觉得贵还是便宜？
3. 根据访谈调整套餐、价格锚点、年付折扣。
4. 定价稳定、结账流程顺畅之后，才开始付费投放。

**AppSumo 等买断制推广**：可以换来早期现金流和曝光，但要先算毛利。AI 产品的买断用户会长期消耗模型调用费用。

### 4.3 试用设计（通用经验，非原文）

| 方式 | 优点 | 风险 / 适合 |
|---|---|---|
| 永久免费层 + 付费升级 | 利于 SEO 和口碑传播 | 免费层的成本要可控 |
| 限时试用（不绑卡） | 注册门槛低 | 转化率偏低，要有引导用户用到核心价值的流程 |
| 限时试用（绑卡） | 转化率高 | 注册量少，需要清晰的取消说明 |
| 按额度 / 积分试用 | AI 产品能控制模型成本 | 额度要够用户体验到核心价值 |

AI 产品的免费层要配合限流和防刷（原文《网站加速和防攻击》：对 `/api`、`/generate`、注册接口设速率限制，"保护模型钱包"，见 [03](../03-technical-seo-and-infra/)）。

## 5. 如何获取付费客户

原文把用户分成两类：

- **有兴趣的用户**：会看完每个产品页、查评价、搜你的品牌名，加了微信就可能直接买；
- **随便看看的人**：需要长期培育。

获客的目标是前者。原文给出的管道：

```
持续发布免费内容（文章 / 视频 / 音频）
   → 平台算法帮你筛选受众、分发内容
   → 内容里有"你"：你是谁、背景、在做什么、卖什么产品、有什么背书
   → 落地页承接：产品页 / 个人博客 / 公众号（付费产品放在首屏）
   → 有兴趣的用户自己点击购买
```

- **把自己放进内容里**：只有专业干货、看不到作者的内容，会被读完但不会被记住，也就没有后续行动。
- **落地页**：原文作者的网站把小报童付费专栏置顶在顶部，有兴趣的用户会自己点进去买。
- **观察信号**：GSC 里含品牌名的查询在增长，说明"有兴趣的用户"在变多。
- **私域算账**：2 万好友 × 1% × ¥200 ≈ ¥4 万（见 [07](../07-launch-and-distribution/)）。

## 6. 支付渠道对比

"个人可用 / 需要海外公司"是原文**站在中国大陆开发者角度**给出的分类。在美国、澳大利亚等 Stripe 支持的国家，个人或独资经营者通常可以直接开 Stripe。MoR（Merchant of Record，记录商户）指由平台作为法律上的卖方，代你处理各国销售税和 VAT。

| 渠道 | 个人可申请 | 需要海外实体 | MoR（代缴税） | 备注 |
|---|---|---|---|---|
| <img src="https://www.google.com/s2/favicons?domain=creem.io&sz=32" width="16" height="16" alt=""> [Creem](https://www.creem.io/) | ✅ | — | 以官网为准 | 原文列为个人可用 |
| <img src="https://www.google.com/s2/favicons?domain=paddle.com&sz=32" width="16" height="16" alt=""> [Paddle](https://www.paddle.com/) | ✅ | — | ✅ | SaaS 常用；审核偏严 |
| <img src="https://www.google.com/s2/favicons?domain=paypal.com&sz=32" width="16" height="16" alt=""> [PayPal](https://www.paypal.com/us/business/business-types/saas) | ✅ | — | ❌ | 用户覆盖面广；争议和冻结风险需要了解 |
| <img src="https://www.google.com/s2/favicons?domain=waffo.com&sz=32" width="16" height="16" alt=""> [Waffo](https://waffo.com/) | ✅ | — | 以官网为准 | 原文列为个人可用 |
| <img src="https://www.google.com/s2/favicons?domain=stripe.com&sz=32" width="16" height="16" alt=""> [Stripe](https://stripe.com/) | ❌（中国大陆） | ✅ | ❌（可用 Stripe Tax 计算税） | 生态最完整；常见做法是注册美国公司，再接 Wise 等收款 |
| <img src="https://www.google.com/s2/favicons?domain=payproglobal.com&sz=32" width="16" height="16" alt=""> [PayPro Global](https://payproglobal.com/zh/) | ❌ | ✅ | ✅ | 软件 / SaaS 分销 |
| <img src="https://www.google.com/s2/favicons?domain=paydify.com&sz=32" width="16" height="16" alt=""> [Paydify](https://paydify.com/en) | ❌ | ✅ | 以官网为准 | 原文列为需海外实体 |
| <img src="https://www.google.com/s2/favicons?domain=lemonsqueezy.com&sz=32" width="16" height="16" alt=""> [Lemon Squeezy](https://www.lemonsqueezy.com/) | 原文未注明 | 原文未注明 | ✅ | 2024 年被 Stripe 收购；内置联盟分佣功能 |
| <img src="https://www.google.com/s2/favicons?domain=polar.sh&sz=32" width="16" height="16" alt=""> [Polar](https://polar.sh/) | 原文未注明 | 原文未注明 | ✅ | 面向开发者、开源项目 |

**创作者 / 内容付费平台**：

| 平台 | 用途 | 原文备注 |
|---|---|---|
| <img src="https://www.google.com/s2/favicons?domain=gumroad.com&sz=32" width="16" height="16" alt=""> [Gumroad](https://gumroad.com/) | 卖数字产品 | 平台抽成 10%，定价时计入 |
| <img src="https://www.google.com/s2/favicons?domain=xiaobot.net&sz=32" width="16" height="16" alt=""> [小报童](https://xiaobot.net/) | 付费专栏，通过微信 / 邮件推送更新 | 国内独立开发者常用 |
| <img src="https://www.google.com/s2/favicons?domain=afdian.com&sz=32" width="16" height="16" alt=""> [爱发电](https://afdian.com/) | 创作者赞助 | 国内 |
| <img src="https://www.google.com/s2/favicons?domain=buymeacoffee.com&sz=32" width="16" height="16" alt=""> [Buy Me a Coffee](https://buymeacoffee.com/) | 打赏、赞助 | 海外 |
| <img src="https://www.google.com/s2/favicons?domain=substack.com&sz=32" width="16" height="16" alt=""> [Substack](https://substack.com/) | 付费 Newsletter | 海外 |

**上线前的支付检查**：

- [ ] 先确认自己的主体能通过哪家的 KYC，再开发结账页
- [ ] 平台抽成和税费计入定价，算出每单净收入
- [ ] 端到端测试一次真实支付和退款
- [ ] 支付回调（webhook）可达。如果用了 Cloudflare，webhook 的子域名用灰云（仅 DNS）或放行支付平台的 IP，否则会出现"用户付了钱但没开通"（见 [03](../03-technical-seo-and-infra/)）
- [ ] 注册海外公司、开银行账户、税务合规的资料可以参考原文《产品推荐》里汇总的外部指南

## 7. 联盟营销

### 7.1 你作为广告主：给推荐人分佣

- 上线清单第 11 步：开通 Affiliate 分佣计划，按推荐来的付费订单给佣金。
- 有稳定转化后，加入联盟网络获取推广者：<img src="https://www.google.com/s2/favicons?domain=impact.com&sz=32" width="16" height="16" alt=""> [Impact](https://impact.com/)、<img src="https://www.google.com/s2/favicons?domain=shareasale.com&sz=32" width="16" height="16" alt=""> [ShareASale](https://www.shareasale.com/)。
- **KOL / KOC 合作**的三种计费方式：CPA（按行动付费）、CPS（按成交付费）、月度包干。每位创作者用独立的追踪链接，单独算获客成本。
- **自建分佣**（通用）：Lemon Squeezy 自带联盟功能；Stripe 生态可以用 Rewardful 等第三方工具。

> ⚠️ 注意：ShareASale 已经并入 Awin 平台（据公开消息，2025 年完成迁移）。新开的联盟计划请先确认当前入口，可能要直接在 <img src="https://www.google.com/s2/favicons?domain=awin.com&sz=32" width="16" height="16" alt=""> [Awin](https://www.awin.com/) 申请。

### 7.2 你作为推广者：CPS

- 有精准受众但暂时没有自己的产品时，可以推荐相关的付费产品赚佣金（原文举例：云服务器 CPS）。
- **原则**：只推荐自己用过、和受众匹配的产品；按规定披露推广关系。
- 原文提到"蹭知名品牌名做公众号 + 漫画小说 CPS"的案例，有商标风险，**不建议模仿**。

## 8. 变现检查清单

- [ ] 动手前写下收入模型、目标用户、价值主张
- [ ] 留存达到 D1/D7/D30 = 40%/20%/10%；一次性工具看跳出率、时长、直接访问占比
- [ ] 单次自然访问收益 ≥ 核心词平均 CPC，再考虑付费获客
- [ ] 免费层不需要注册就能用到核心价值；PRO 权益清楚；价格页有评价和紧迫感
- [ ] 和第一个付费用户聊过，并调整了价格
- [ ] 广告：只用不伤害体验的格式，配好 ads.txt，确认 CWV 没有变差
- [ ] 支付：主体和渠道匹配，抽成和税费计入定价，webhook 端到端测通
- [ ] 联盟计划上线，每个 KOL 有独立追踪链接
- [ ] 获客预算从第一天起就列在成本模型里（≥ 约 $100/月）

## 来源

- [广告变现](https://lownrain.feishu.cn/wiki/BMpGwf8dciPuuckXK5UcrFZuned)（独立开发前线｜SEO从0到100）
- [订阅变现](https://lownrain.feishu.cn/wiki/Vw3GwcnKuib84pkeyLGcmypGnLg)（独立开发前线｜SEO从0到100）
- [如何获取付费客户](https://lownrain.feishu.cn/wiki/OT7mwwW9IinxxqkAW9Hctg26nlg)（独立开发前线｜SEO从0到100）
- [给新手独立开发者的建议](https://lownrain.feishu.cn/wiki/Yj5QwQGv4iQ6LmkihUKcUKYsnLe)（独立开发前线｜SEO从0到100）
- [通过SEO打造自然增长产品](https://lownrain.feishu.cn/wiki/T3mnwUqeRiqfOyk8XBBc2zmHnpf)（独立开发前线｜SEO从0到100）
- [出海产品的推广策略](https://lownrain.feishu.cn/wiki/EgKEwabgAirGwRk5mOIcqvfanse)（独立开发前线｜SEO从0到100）
- [产品上线TodoList](https://lownrain.feishu.cn/wiki/FHOCwhu0uii39nkFwuVcaVLenSe)（独立开发前线｜SEO从0到100）
- [产品推荐](https://lownrain.feishu.cn/wiki/TdLowyz6CiPBYxkhUPhcoqzjnUE)（独立开发前线｜SEO从0到100）
- [免费外链资源](https://lownrain.feishu.cn/wiki/Nbh6wxW8XiBBZ3kGz3wckP8Pnah)（独立开发前线｜SEO从0到100）
- [网站加速和防攻击](https://lownrain.feishu.cn/wiki/HFt6wEYNOiVdWSk9pBfc5GaSnwb)（独立开发前线｜SEO从0到100）
- [如何获取流量？SEO依然是性价比最高的方式](https://lownrain.feishu.cn/wiki/SXgew9A8jihj2uk4oMlcRCZYnUb)（独立开发前线｜SEO从0到100）
- [如何为你的产品获取免费流量？](https://lownrain.feishu.cn/wiki/ZObbwCFH1i7RvVknVEUcF9uDnMh)（独立开发前线｜SEO从0到100）
- [小红书运营指南：小红书变现策略](https://lownrain.feishu.cn/wiki/PmMnwU62ziEW5SkOg20cahxgnDf)（独立开发前线｜SEO从0到100）
