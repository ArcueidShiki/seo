# 发布与冷启动：推广策略、发布平台与品牌

> 本章回答三个问题：产品上线后第一批用户从哪来？渠道怎么排优先级？内容和品牌怎么把流量导回产品？
> 相关章节：外链细节见 [05 外链建设](../05-backlinks/)；X / Reddit 运营见 [08](../08-x-and-reddit/)；小红书见 [09](../09-xiaohongshu/)；变现与留存基准见 [12](../12-monetization/)。

## 1. 六个获客杠杆与优先级

原文把出海产品的获客方式归为 6 类，并强调**不必全做，挑 1–2 个核心渠道做透**。另一篇（推广方案）把其中 3 个标成"低成本"，据此可以得到下面的优先级：

| 优先级 | 杠杆 | 典型动作 | 成本 | 起效 | 何时启动 |
|---|---|---|---|---|---|
| 1 | 产品目录 / 发布平台 / 科技媒体 | Product Hunt、Uneed、Toolify 等上线；向 TechCrunch、The Verge 投更新稿 | 低 | 快（发布日一波） | 上线第 0–1 月 |
| 1 | SEO | 每个功能 / 工具关键词做一个独立页面；持续挖新词；用外链推排名 | 低 | 慢（约 3 个月起量） | 第 1 天 |
| 1 | 联盟营销（Affiliate） | 按付费订单给推荐人分佣；接入 Impact、ShareASale 等联盟网络 | 低（按效果付费） | 中 | 有稳定付费转化后 |
| 2 | 社交媒体 | TikTok、Instagram、Reddit、YouTube、X、Lemon8、Pinterest 官方号；场景视频、挑战活动；自然数据好的帖子再付费加热 | 中（主要是时间） | 中–快 | 第 1 天起并行 |
| 3 | KOL / KOC | 找 AIGC 领域创作者，按 CPA / CPS / 月度包干合作，持续招新人（他们的内容还能吃到平台内搜索流量） | 中–高 | 快 | 留存、付费率验证后 |
| 4 | 付费广告 | Web 产品：Google 关键词广告；App：TikTok / IG 视频 + App Store / Google Play 搜索广告 | 高 | 最快 | 最后 |

执行原则：

1. **先低成本，后付费**：目录、SEO、联盟 → 社交与内容 → KOL → 付费广告。上线清单把"开始付费投放"放在第 20 步，也就是最后一步。
2. **SEO 和社交从第一天并行**：SEO 慢但会复利，社交快、有机会爆。两者各设一个周 KPI（社交看曝光 / 粉丝，SEO 看 GSC 点击）。
3. **"1 主 + 2 辅"**：写下渠道计划，主渠道每周有量化目标，辅渠道只做维护。
4. **付费前先过两道门槛**：留存达到 D1/D7/D30 = 40%/20%/10%，单次访问收益 ≥ 关键词 CPC（判断方法见 [12 变现](../12-monetization/)）。

> ⚠️ 注意：原文建议"爬竞品关键词、批量生成程序化静态页"。Google 自 2024 年 3 月起把**规模化内容滥用（scaled content abuse）**列为垃圾政策，大量模板化、无独立价值的页面可能让整站降权。程序化页面要保证每页都有真实功能、数据或示例，不能只是换一个关键词。

## 2. 产品上线 TodoList（按顺序执行）

原文给出 20 步，顺序本身就是建议：先把 SEO 和数据追踪打好底，再发布和建外链，然后收集反馈、补长尾页、调价格，最后才花钱买量。

**A. 基础设施（发布前）**

- [ ] 1. SEO 标签补全：title、description、canonical、OG / Twitter 卡片、唯一 H1（见 [02](../02-page-structure-and-tags/)）
- [ ] 2. 页面结构优化：Hero → 痛点 → 方案 → 步骤 → 案例 → 对比 → FAQ → CTA
- [ ] 3. 接入 Google Search Console、Google Analytics、Bing Webmaster Tools，并确认数据在流入
- [ ] 4. 配置域名邮箱（MX / SPF / DKIM / DMARC，见 [03](../03-technical-seo-and-infra/)）
- [ ] 5. 支付 / 结账流程端到端测试一遍，砍掉多余步骤（Stripe webhook 若经过 Cloudflare，要放行或用灰云）

**B. 发布准备**

- [ ] 6. 准备宣传图和文案（第 3 节的"发布素材包"）
- [ ] 7. 选定 1 个主推广渠道 + 2 个辅渠道，写成书面计划
- [ ] 8. 定好内容更新策略和频率（例如每周几篇 / 几条）

**C. 发布与外链**

- [ ] 9. 在 Product Hunt / Hacker News（Show HN）发布
- [ ] 10. 建外链：导航站 / 目录站、发布站、社交主页、博客（见 [05](../05-backlinks/)）
- [ ] 11. 上线联盟分佣（Affiliate）计划

**D. 用户与迭代**

- [ ] 12. 建用户社群（Discord / Telegram / 微信群），设反馈收集入口
- [ ] 13. 按反馈迭代，并维护 changelog
- [ ] 14. 收集长尾关键词，每个词做一个专门页面（维护"关键词 → URL"映射表）

**E. 持续增长**

- [ ] 15. 在社交媒体发增长曲线、收入截图等 #buildinpublic 内容吸粉
- [ ] 16. 做一个产品演示视频（嵌到首页）
- [ ] 17. 写一篇教程 / 博客
- [ ] 18. 找第一个付费用户聊：他为什么付钱？
- [ ] 19. 根据访谈调整定价

**F. 放大**

- [ ] 20. 以上都完成后，才开始付费投放

## 3. 发布素材包（Launch Kit）

首次发布前一次性准备齐全，之后每个平台复用。原文列了 10 项，规格一列是补充的常用做法：

| 素材 | 要点 / 规格 |
|---|---|
| Slogan | 一句话说清"为谁做什么"，避免空泛的大词 |
| 简短介绍 | 中文约 100–300 字，英文 50–100 词；第一句就讲出结果 |
| Logo | 方形、小尺寸下也能看清 |
| 宣传图 ×5 左右 | 真实界面截图 + 场景图；第一张直接讲核心价值 |
| 宣传视频 | 1–2 分钟内的演示，开头 5 秒展示结果 |
| 核心亮点 | 3–5 条，每条对应一个用户痛点 |
| 目标用户 | 写清"适合谁 / 不适合谁" |
| FAQ | 价格、隐私、数据、和竞品的区别 |
| 使用指南 | 1-2-3 步上手 |
| 联系方式 | 域名邮箱、X / 社群链接 |

另外准备一张 1200×630 的 OG 图（社交分享卡片，见 [02](../02-page-structure-and-tags/)）。

## 4. 出海产品发布平台大全

表中的流量、DR 和价格都是原文作者当时的快照，会随时间变化，提交前请自己复核。

### 4.1 综合发布平台

| 平台 | 适合什么 | 月访问（原文） | DR（原文） | 价格 / 规则 |
|---|---|---|---|---|
| <img src="https://www.google.com/s2/favicons?domain=producthunt.com&sz=32" width="16" height="16" alt=""> [Product Hunt](https://www.producthunt.com/) | 欧美科技早期用户，全品类；社区反馈强 | 约 290–300 万 | 91 | 免费；可多次发布，但每次要有新功能 |
| <img src="https://www.google.com/s2/favicons?domain=news.ycombinator.com&sz=32" width="16" height="16" alt=""> [Hacker News](https://news.ycombinator.com/) | 开发者工具、开源、技术深度产品 | — | 91 | 免费；Show HN 规则见第 6 节 |
| <img src="https://www.google.com/s2/favicons?domain=indiehackers.com&sz=32" width="16" height="16" alt=""> [Indie Hackers](https://www.indiehackers.com/) | 收入 / 增长透明分享、建造者故事、长期社区 | 约 50 万 | — | 免费 |
| <img src="https://www.google.com/s2/favicons?domain=betalist.com&sz=32" width="16" height="16" alt=""> [BetaList](https://betalist.com/) | Beta / 预发布阶段产品；邮件订阅曝光，早期反馈 | 约 19 万 | — | 免费（需排队） |
| <img src="https://www.google.com/s2/favicons?domain=uneed.best&sz=32" width="16" height="16" alt=""> [Uneed](https://www.uneed.best/) | 每日榜单；约 40–50 票常能拿当日第一，可获排名徽章 | 7.6 万–9.1 万（两篇不同） | 73 | 免费排队较久；付费 $29.99 可快速上线 |
| <img src="https://www.google.com/s2/favicons?domain=alternativeto.net&sz=32" width="16" height="16" alt=""> [AlternativeTo](https://alternativeto.net/) | 承接 "X alternative" 搜索 | — | 79 | 免费 |
| <img src="https://www.google.com/s2/favicons?domain=saashub.com&sz=32" width="16" height="16" alt=""> [SaasHub](https://www.saashub.com/) | SaaS 目录、替代品对比 | — | 75 | 免费 |
| <img src="https://www.google.com/s2/favicons?domain=devhunt.org&sz=32" width="16" height="16" alt=""> [DevHunt](https://devhunt.org/) | 开发者工具发布 | — | 59 | 免费 |
| <img src="https://www.google.com/s2/favicons?domain=peerlist.io&sz=32" width="16" height="16" alt=""> [Peerlist](https://peerlist.io/) | 开发者职业社区的 Launchpad | — | 75 | 免费 |
| <img src="https://www.google.com/s2/favicons?domain=fazier.com&sz=32" width="16" height="16" alt=""> [Fazier](https://fazier.com/) | 通用发布平台 | — | 79 | 免费 |
| <img src="https://www.google.com/s2/favicons?domain=microlaunch.net&sz=32" width="16" height="16" alt=""> [Microlaunch](https://microlaunch.net/) | 小产品 / 独立开发 | — | 55 | 免费 |
| <img src="https://www.google.com/s2/favicons?domain=open-launch.com&sz=32" width="16" height="16" alt=""> [Open-Launch](https://open-launch.com/) | 开源式发布平台 | — | 52–58 | 免费 |
| <img src="https://www.google.com/s2/favicons?domain=startupfa.me&sz=32" width="16" height="16" alt=""> [Startupfa.me](https://startupfa.me/) | 创业产品目录 | — | 82 | 免费 / 付费 $19、$49 |
| <img src="https://www.google.com/s2/favicons?domain=appsumo.com&sz=32" width="16" height="16" alt=""> [AppSumo](https://appsumo.com/) | 买断制（LTD）推广，换早期现金流和曝光 | — | — | 平台抽成，先算毛利 |

完整的免费 / 付费目录清单（约 60 + 21 个站点）见 [05 外链建设](../05-backlinks/)。

### 4.2 AI 导航站

| 站点 | 月 UV（原文快照） | DR | 收录价格 |
|---|---|---|---|
| <img src="https://www.google.com/s2/favicons?domain=theresanaiforthat.com&sz=32" width="16" height="16" alt=""> [There's An AI For That](https://theresanaiforthat.com/) | 540 万 | 77 | $299 |
| <img src="https://www.google.com/s2/favicons?domain=yeschat.ai&sz=32" width="16" height="16" alt=""> [YesChat](https://www.yeschat.ai/) | 400 万 | — | $99 |
| <img src="https://www.google.com/s2/favicons?domain=toolify.ai&sz=32" width="16" height="16" alt=""> [Toolify](https://www.toolify.ai/) | 230 万 | 73 | $99 |
| <img src="https://www.google.com/s2/favicons?domain=topai.tools&sz=32" width="16" height="16" alt=""> [TopAI.tools](https://topai.tools/) | 130 万 | 61 | $47 |
| <img src="https://www.google.com/s2/favicons?domain=whatsthebigdata.com&sz=32" width="16" height="16" alt=""> [WhatsTheBigData](https://whatsthebigdata.com/) | 57 万 | 75 | $499 / $599（两篇不一致） |
| <img src="https://www.google.com/s2/favicons?domain=openfuture.ai&sz=32" width="16" height="16" alt=""> [OpenFuture](https://openfuture.ai/) | 25 万 | 35 | 免费 |
| <img src="https://www.google.com/s2/favicons?domain=aitools.fyi&sz=32" width="16" height="16" alt=""> [aitools.fyi](https://aitools.fyi/) | 18 万 | 46 | $30 / $197（两篇不一致） |
| <img src="https://www.google.com/s2/favicons?domain=toolpilot.ai&sz=32" width="16" height="16" alt=""> [Toolpilot](https://www.toolpilot.ai/) | 13 万 | 76 | $99 |
| <img src="https://www.google.com/s2/favicons?domain=dang.ai&sz=32" width="16" height="16" alt=""> [Dang.ai](https://dang.ai/) | — | 79–80 | 免费 / $29 |
| <img src="https://www.google.com/s2/favicons?domain=futuretools.io&sz=32" width="16" height="16" alt=""> [Futuretools](https://www.futuretools.io/) | — | 68 | 免费 |

导航站怎么用才划算：

- **付钱前先看对方有没有真实流量**（Similarweb / Ahrefs）。没有自然流量的高 DR 目录只剩一个数字。
- **确认是 dofollow**：有些目录把 dofollow 当付费升级项卖，上线后检查链接的 `rel` 属性。
- **按"每美元 DR"排序**：$10–30 就能拿到 DR 70–82 的那一档（如 Startupfa.me、Uneed、Dang.ai）性价比最高。$299–599 的只有在能带来真实流量时才值。
- **描述不要套模板，分类要选对**，优先选会显示上线 / 更新日期的平台。目录的价值在于让搜索引擎"把你归对类"，不在于立刻带来排名。

### 4.3 国内平台

| 平台 | 适合发什么 | 流量（原文） | DR | 链接属性 |
|---|---|---|---|---|
| <img src="https://www.google.com/s2/favicons?domain=v2ex.com&sz=32" width="16" height="16" alt=""> [V2EX](https://www.v2ex.com/) | "分享创造"节点：独立开发作品、建造故事 | 720 万 PV / 月 | 78 | nofollow（Google 收录快） |
| <img src="https://www.google.com/s2/favicons?domain=linux.do&sz=32" width="16" height="16" alt=""> [Linux.do](https://linux.do/) | 技术 / AI 工具分享 | 430 万 PV / 月 | 73 | nofollow |
| <img src="https://www.google.com/s2/favicons?domain=sspai.com&sz=32" width="16" height="16" alt=""> [少数派](https://sspai.com/) | 效率工具、App 体验长文 | — | 76 | nofollow |
| <img src="https://www.google.com/s2/favicons?domain=zhihu.com&sz=32" width="16" height="16" alt=""> [知乎](https://www.zhihu.com/) | 长回答 / 专栏；百度排名好 | — | 91 | nofollow |
| <img src="https://www.google.com/s2/favicons?domain=juejin.cn&sz=32" width="16" height="16" alt=""> [掘金](https://juejin.cn/) | 技术实现类文章 | — | 84 | nofollow |
| <img src="https://www.google.com/s2/favicons?domain=ai-bot.cn&sz=32" width="16" height="16" alt=""> [AI 工具集 ai-bot.cn](https://ai-bot.cn/) | AI 产品收录 | 140 万 PV / 月 | 71 | 付费 ¥300 / ¥399（两篇不一致） |
| <img src="https://www.google.com/s2/favicons?domain=github.com&sz=32" width="16" height="16" alt=""> [阮一峰周刊投稿](https://github.com/ruanyf/weekly/issues) | 在 GitHub issue 自荐工具 / 文章 | 公众号平均约 2 万阅读 | — | 免费 |
| <img src="https://www.google.com/s2/favicons?domain=91wink.com&sz=32" width="16" height="16" alt=""> [独立开发前线](https://91wink.com/) | 原知识库作者的社区 | — | 28 | dofollow |

> ⚠️ 注意：国内大社区和 Linktree 的链接基本都是 **nofollow**，不传递排名权重。它们的价值在流量、口碑，以及在 AI 搜索中被引用（见 [06 GEO](../06-geo-ai-search/)）。把它们算作"流量渠道"，不要算进外链 KPI。

## 5. Product Hunt 打法

原知识库的 Product Hunt 页面只有一份 PDF 附件（"万字 Product Hunt 登顶全流程操作指南"），没有可提取的正文。下表合并了其他文档的要点（标"原文"）和业内通用做法（标"通用"），通用部分请以 PH 官方规则为准。

| 阶段 | 动作 | 来源 |
|---|---|---|
| T-14 天 | 完成发布素材包；首屏讲清价值；让核心功能免登录可试 | 原文 + 通用 |
| T-14 天 | 在 X、社群预告上线日期，把关注者引到 PH 产品页的"提醒我" | 通用 |
| T-7 天 | 写好 Maker 首评：为什么做、为谁做、与现有方案的区别、给 PH 用户的优惠 | 通用 |
| 上线时间 | PH 的一天从美国太平洋时间 00:01 开始，排名按 24 小时计；尽量在 00:01 上线，吃满全天 | 通用 |
| 选日子 | 工作日流量大但竞争激烈；周末对手少，更容易进前列。按目标用户的活跃时间选（原文：按目标用户选择时机） | 原文 + 通用 |
| 发布当天 | 全天在线回复每一条评论（原文要求 24 小时内全部回复）；在自有渠道告诉用户"我们上线了，欢迎反馈" | 原文 + 通用 |
| 禁止 | 不要求人点赞，不刷票，不搞互赞群；PH 会识别异常投票并降权 | 通用 |
| 发布后 | 网站页脚挂 "Featured on Product Hunt" 徽章（也是竞品分析时最常见的"自我披露外链"）；用 GA4 看 30 天内各来源流量 | 原文 + 通用 |
| 复盘 | PH 带来的流量和外链有意义的话，等下一个大功能上线时再发一次 | 原文 |

## 6. Hacker News：Show HN

HN 用户以工程师为主，对营销腔很敏感，但给开发者工具、开源项目和技术含量高的产品的反馈质量很高。以下是 HN 自身规则和社区惯例（通用）：

1. **标题格式**：`Show HN: 产品名 – 一句话说明它做什么`，不写形容词堆砌和感叹号。
2. **必须能直接试用**：Show HN 面向"做出来、别人能上手玩"的东西。纯落地页、等待名单、需要先注册才能看到任何东西的，容易被标记或被冷落。
3. **首条评论自己写**：讲背景、技术实现、目前的局限、你最想得到哪类反馈。
4. **全程在线回复**，接受批评，不辩解。
5. **不拉票**：HN 会检测投票环（voting ring），被识别后帖子直接沉底。
6. 一次没起来也别反复重发。等产品有实质更新，再换个角度讲。

## 7. 其他平台快速打法

| 平台 | 打法 |
|---|---|
| Indie Hackers | 发建造者故事：为什么做、解决的真实问题、踩过的坑。产品链接自然出现（"最后我做了 XXX 来解决"）。定期更新收入和增长里程碑。 |
| BetaList | 产品还在 beta 时提交，用来获取早期反馈和邮件订阅用户的曝光；正式版再去 PH。 |
| Uneed | 免费队列很长，想控制上线日期就付费加速；拿到当日徽章后挂到官网。 |
| AI 导航站 | 第 0–1 月集中提交。描述写具体场景，不写"powerful AI tool"。每次大版本更新都可以去更新一次条目。 |
| Reddit | r/SideProject、r/entrepreneur 等，严格遵守版规（详见 [08](../08-x-and-reddit/)）。 |
| LinkedIn | 适合 B2B：专业受众，可精准投放。 |

## 8. 发布节奏：复刻竞品的冷启动路径

原文建议把竞品冷启动期的外链整理成"路径"而不是"清单"。你自己的发布也可以照这个节奏来：

| 时间 | 动作 | 作用 |
|---|---|---|
| Day 0–1 | 社区发布（PH / HN / V2EX / Reddit） | 第一波曝光和反馈 |
| Day 3–7 | 邀请博主 / 用户写测评；自己写一篇"我如何用 X 在 N 分钟做完 Y"的场景文 | 承接搜索长尾 |
| Day 7–14 | 导航站、推荐清单、目录站集中提交 | 持续引荐流量 + 让搜索引擎把你归对类 |
| 第 1–3 月 | 场景文章、用例、可被引用的资产（模板、提示词库、参数表） | 语义强化，开始拿长尾排名 |
| 第 3 月起 | 打磨内容和留存，外链越来越多来自自然提及 | 自然增长 |
| 每次大版本 | 重新发一次（PH relaunch、目录更新、社群帖） | 每次发布都留下一条新的提及记录 |

## 9. 品牌营销

### 9.1 品牌讲的是价值观

乔布斯 1997 年在 "Think Different" 发布前的内部讲话：世界很嘈杂，你要非常清楚自己希望被记住的是什么，然后只讲这件事，不讲参数。原文举的三个例子：

- "Got Milk?" 广告扭转了牛奶销量的下滑，全程没讲牛奶的成分。
- Nike 广告赞美运动员和运动本身，不讲气垫技术。
- Think Different 里没有出现任何 Apple 产品。

**落地做法**：写一句品牌价值陈述（"我们希望被记住的是……"），在首页 Hero、About 页、所有社交简介里保持一致。功能对比页可以讲参数，品牌内容只讲价值和故事。

### 9.2 个人品牌：内容 → 流量 → 粉丝 → 品牌力 → 商业价值

| 基础 | 含义 | 自检 |
|---|---|---|
| 兴趣与深度 | 能长期投入，而且懂得够深。你是 9 分、用户是 6 分时，他才会关注你 | 能否写出 100 个选题？ |
| 价值 | 至少提供一种：情绪价值（有趣）、知识价值（垂直专业）、共鸣价值（说出用户想说的） | 每条内容标注提供哪种价值，一种都没有就不发 |
| 一致性 | 长期待在一个领域，让一个标签对应到你（如"名字_独立开发者"） | 近 30 天 ≥ 80% 的内容在声明的领域内 |
| 差异化 | 在已验证的模式上做微创新。原文案例：枕头品牌躺岛的"猫肚皮"概念，功能相似，却做到了天猫类目第一 | 找 3 个人测试，看他们能否记住你的 slogan |

原文案例"群响"：用抖音短视频和直播获取公域流量，再导到微信私域；朋友圈只分享日常、思考和干货，不硬卖，用户被某条内容打动后主动来咨询，成交率很高。

### 9.3 在哪里发布品牌 / 产品内容

| 平台 | 链接属性（原文） | 适合 |
|---|---|---|
| <img src="https://www.google.com/s2/favicons?domain=medium.com&sz=32" width="16" height="16" alt=""> [Medium](https://medium.com/) | nofollow | 权重高，曝光和品牌价值仍在 |
| <img src="https://www.google.com/s2/favicons?domain=substack.com&sz=32" width="16" height="16" alt=""> [Substack](https://substack.com/) | 多数 follow | 对 SEO 友好，可做 newsletter |
| <img src="https://www.google.com/s2/favicons?domain=hashnode.com&sz=32" width="16" height="16" alt=""> [Hashnode](https://hashnode.com/) | follow | 技术文章首选 |
| <img src="https://www.google.com/s2/favicons?domain=dev.to&sz=32" width="16" height="16" alt=""> [Dev.to](https://dev.to/) | follow | 工具介绍类文章 |
| <img src="https://www.google.com/s2/favicons?domain=wordpress.com&sz=32" width="16" height="16" alt=""> [WordPress.com](https://wordpress.com/) | 可控 | 专门的 SEO 博客 |
| <img src="https://www.google.com/s2/favicons?domain=blogger.com&sz=32" width="16" height="16" alt=""> [Blogger](https://www.blogger.com/) | follow | Google 生态，收录快 |
| <img src="https://www.google.com/s2/favicons?domain=91wink.com&sz=32" width="16" height="16" alt=""> [独立开发前线](https://91wink.com/) | follow | 中文独立开发社区 |

> ⚠️ 注意：跨平台转载时，先在自己的网站发布，等原文被收录后再转载。转载页尽量设置 canonical 指回原文（Medium、Dev.to、Hashnode 都支持），或者只转载前 70% 再链接回原文，避免转载页反过来抢走原文的排名。链接属性会随平台政策变化，上线后用浏览器开发者工具检查 `rel`。

## 10. 内容引流到产品的漏斗

```
公域内容（平台搜索 / 推荐）
   └─> 个人主页（置顶产品介绍帖 + 简介链接）
         └─> 落地页 / 博客 / 公众号（了解你和付费产品）
               └─> 私域（微信 / 邮件列表 / Telegram / Discord）
                     └─> 付费（会员、专栏、课程、App 订阅）
```

### 10.1 漏斗各层的做法

| 层级 | 做法 | 指标 |
|---|---|---|
| 内容 | 从用户角度选题。例：英语学习 App 去写学习者最关心的 10 个问题，不写自己的技术架构。一个账号只做一个垂直方向 | 曝光、收藏率 |
| 配比 | 80% 对用户有用的内容 / 10% 产品 / 10% 个人生活。产品更新帖本质是广告，平台不会推 | 近 20 条的比例 |
| 系列化 | 做编号系列（原文："强大的网站推荐"连载 24 期），每期都会带动置顶产品帖的浏览 | 置顶帖浏览量、站点引荐访问 |
| 一稿多发 | 短文发即刻 / 头条 / 微博；图文发公众号 / 小红书；视频发抖音 / 视频号 / B 站；音频发小宇宙 | 每篇至少 3 个渠道 |
| 钩子 | 每篇都留转化入口，例如"加微信送 1 个月会员"，链接带 UTM | 每日新增私域人数 |
| 人设 | 内容里带上"你是谁、在做什么、有什么背书"。没有人设的干货会被读完，但不会被记住 | 品牌词搜索量（GSC） |
| 落地页 | 付费产品放首屏，例如把付费专栏置顶在网站顶部 | 落地页转化率 |
| 坚持 | 10–20 篇看不出效果；同一垂直方向写到 500–1000 篇，一定会有效果 | 累计篇数 |

### 10.2 私域算账（原文示例）

2 个微信号 ≈ 2 万好友，朋友圈持续发有价值的内容 → 1% 转化 = 200 人 → 每人 ¥200（知识星球 / 付费专栏）= **¥4 万**。按自己的转化率代入就能估算内容投入值不值。

### 10.3 国内平台不让放外链怎么办

原文的做法：把网址放进图片里、用公众号的"阅读原文"、引导用户加微信。

> ⚠️ 注意：小红书、抖音会把明显的站外导流（二维码、网址、"私信领取"话术）判为违规，轻则单篇限流，重则整号限流（见 [09](../09-xiaohongshu/)、[10](../10-douyin-video-wechat/)）。更稳的方式是在主页简介留联系方式，用置顶内容承接，正文里不出现导流话术。

### 10.4 其他免费渠道

- **资源互换**：和高质量的独立站交换友链、在社群互推（独立开发者常聚集在 W2Solo、V2EX）。原文案例：一个站互换了十几个友链，每天带来约 200 个 IP。
- **ASO**：App 副标题放核心词，描述自然地嵌入中高热度词，前几张截图突出卖点，持续积累新评论（详见 [10](../10-douyin-video-wechat/)）。
- **高权重平台长文**：知乎、豆瓣、简书等在百度排名好，可以围绕一个关键词写原创长文（见 [10](../10-douyin-video-wechat/) 的全平台 SEO）。
- **留存优先**：留存差时，任何获客都留不住；停止投放后用户就流失了。

> ⚠️ 注意：原文还提到几种灰 / 黑帽手法，**不要做**：伪造来源访问（referrer spam）、蹭知名品牌名注册公众号、买赞把评论或回答顶上去。这些违反平台规则，部分还涉及商标侵权风险。

## 来源

- [出海产品的推广策略](https://lownrain.feishu.cn/wiki/EgKEwabgAirGwRk5mOIcqvfanse)（独立开发前线｜SEO从0到100）
- [出海产品推广方案](https://lownrain.feishu.cn/wiki/JIDxwzVjBiLMbFkvBcociSllnEb)（独立开发前线｜SEO从0到100）
- [产品上线TodoList](https://lownrain.feishu.cn/wiki/FHOCwhu0uii39nkFwuVcaVLenSe)（独立开发前线｜SEO从0到100）
- [独立开发者出海产品发布平台](https://lownrain.feishu.cn/wiki/MxxPwa7Owiv0wek3DXecgavAnbK)（独立开发前线｜SEO从0到100）
- [ProductHunt](https://lownrain.feishu.cn/wiki/ZSOwwxLWhioBH9kbIzdc75m7nUe)（独立开发前线｜SEO从0到100）
- [免费外链资源](https://lownrain.feishu.cn/wiki/Nbh6wxW8XiBBZ3kGz3wckP8Pnah)（独立开发前线｜SEO从0到100）
- [付费外链资源](https://lownrain.feishu.cn/wiki/CRMTwsEOli71kJkd07BcvPAHnJY)（独立开发前线｜SEO从0到100）
- [外链建设策略](https://lownrain.feishu.cn/wiki/Lx9CwNJ0HiiJ4kki1XCcLmhnngr)（独立开发前线｜SEO从0到100）
- [怎么分析一个网站的冷启动外链是什么？](https://lownrain.feishu.cn/wiki/ZeIWwX2wriiHy1kNxbgcB51En4f)（独立开发前线｜SEO从0到100）
- [品牌营销](https://lownrain.feishu.cn/wiki/D6aUwmc55i3alckkM5Pcq7snnKg)（独立开发前线｜SEO从0到100）
- [乔布斯如何看代品牌营销：营销讲的是价值观](https://lownrain.feishu.cn/wiki/SXnGwkQGoitlWQkwO2VcLAE1nie)（独立开发前线｜SEO从0到100）
- [什么是品牌？如何建立个人品牌？品牌定位的关键是什么？](https://lownrain.feishu.cn/wiki/QKvawusbDi77XzkYtC0cZHvynXc)（独立开发前线｜SEO从0到100）
- [如何用内容为产品持续引流](https://lownrain.feishu.cn/wiki/VsCcwVKTNiCJmlkKymNcIpxJn9d)（独立开发前线｜SEO从0到100）
- [如何用内容从社交媒体为产品引流](https://lownrain.feishu.cn/wiki/TIMjws34Ji0r2DkIBu6cIJICnUi)（独立开发前线｜SEO从0到100）
- [如何获取流量？SEO依然是性价比最高的方式](https://lownrain.feishu.cn/wiki/SXgew9A8jihj2uk4oMlcRCZYnUb)（独立开发前线｜SEO从0到100）
- [如何为你的产品获取免费流量？](https://lownrain.feishu.cn/wiki/ZObbwCFH1i7RvVknVEUcF9uDnMh)（独立开发前线｜SEO从0到100）
- [如何利用内链优化SEO排名](https://lownrain.feishu.cn/wiki/M4Dtwgynwi4R5FkHXcjcZVeZnRb)（独立开发前线｜SEO从0到100）
- [给新手独立开发者的建议](https://lownrain.feishu.cn/wiki/Yj5QwQGv4iQ6LmkihUKcUKYsnLe)（独立开发前线｜SEO从0到100）
