---
name: seo-checklist-launch
description: 产品上线发布与冷启动（Product Hunt、Hacker News、Reddit、Indie Hackers、BetaList、AI 导航站、V2EX 等）时使用；逐条核对 checklist 发布条目。
---

# 发布与冷启动 Checklist（Launch & distribution）

> Product Hunt、Hacker News、Reddit、导航站、社区：第一波用户和外链。
> 共 14 条：P0 3 · P1 7 · P2 4；其中 0 条可由 auditor 自动检测（🤖）。数据源：仓库 ArcueidShiki/seo 的 `checklist/checklist.json`（类别 `launch`）。

## 何时使用
- 准备上线发布
- 选择发布平台和顺序
- 发布当天值守与一周复盘
- 用户说"帮我检查 / 优化 发布与冷启动"或给出网址要求做这方面的 SEO 审计

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

#### [P0] 按顺序执行上线 TodoList：先基础和追踪，再渠道和内容，付费流量放最后
id: `launch-todolist-order`
- **为什么**：顺序错了会浪费发布机会，例如统计还没装就上 Product Hunt，第一波流量无法归因；产品没验证就投广告则是在烧钱。
- **通过标准**：
  - 1–5 步全部完成后才对外发布：SEO 标签 → 页面结构 → GSC / GA4 / Bing → 域名邮箱 → 支付流程
  - 6–9：宣传图文 → 选定 1 个主渠道 + 2 个辅助渠道 → 内容更新节奏 → Product Hunt / Hacker News 发布
  - 10–19：外链 → 联盟计划 → 用户社群 → 按反馈迭代 → 长尾词新页面 → build in public → 产品视频 → 教程文章 → 访谈首个付费用户 → 调整定价
  - 第 20 步：前面都完成后才开始付费投放
- **怎么查**：把 20 步复制到项目管理工具，完成一步记一个日期；发布前最后确认 1–5 步全部打勾。
- **工具**：Google Search Console (https://search.google.com/search-console)；Google Analytics 4 (https://analytics.google.com/)；Bing Webmaster Tools (https://www.bing.com/webmasters)；Product Hunt (https://www.producthunt.com/)；Hacker News (https://news.ycombinator.com/)

#### [P2] 内测阶段提交 BetaList，收集早期用户邮箱
id: `launch-betalist`
- **为什么**：BetaList 面向尝鲜用户（月访问约 19 万），适合在正式发布前收集反馈和候补名单。
- **通过标准**：
  - 产品有可访问的落地页和候补名单 / 内测入口
  - 提前 4–8 周提交（免费排队时间较长，赶时间再考虑付费加速）
  - 记录 BetaList 带来的访问和邮箱注册数
- **怎么查**：betalist.com 提交创业项目；落地页放邮箱收集表单并接入邮件工具。
- **工具**：BetaList (https://betalist.com/)

### ③ 上线

#### [P0] 准备发布素材包：一句话标语、Logo、宣传图、演示视频、FAQ、联系方式
id: `launch-kit`
- **为什么**：各发布平台需要的素材大同小异；提前准备一次，发布周就能在几十个平台快速复用。
- **通过标准**：
  - 标语 ≤ 60 字符（Product Hunt tagline 上限）；短描述 ≤ 260 字符，另有一版长描述
  - 方形 Logo 240×240（PNG / GIF）；约 5 张宣传图 1270×760；演示视频 ≤ 2 分钟，已上传 YouTube
  - 亮点、目标用户、FAQ、使用指南、联系方式（域名邮箱）齐全
  - 中英文各一版；提交到每个平台时在此基础上改写，不原样复制
- **怎么查**：放在一个共享文件夹里；宣传图用 Canva 的对应尺寸模板制作。
- **工具**：Canva (https://www.canva.com/)；Product Hunt (https://www.producthunt.com/)；YouTube (https://www.youtube.com/)

#### [P0] Product Hunt 发布：选好日期，准备 maker 首评，发布当天全程在线
id: `launch-producthunt`
- **为什么**：Product Hunt 是最大的英文产品发布平台（月访问约 300 万），能带来早期用户、反馈和高 DR 外链。
- **通过标准**：
  - 提前 ≥ 1 周用 maker 账号活跃（点赞、评论别人的产品）；可以自己 hunt，不必找 hunter
  - 发布时间为太平洋时间 00:01（每日榜单从这时开始）；周二到周四流量大但竞争激烈，周末更容易排进前列
  - 发布后立刻发 maker 首评：为什么做、解决什么问题、给 PH 用户的优惠
  - 通知自己的用户和社群「来看看并给反馈」，不直接拉票、不刷票（PH 会检测并降权）
  - 当天每条评论 1 小时内回复；记录排名、访问、注册和外链
- **怎么查**：producthunt.com → Launch，按素材包填写；注意并非所有发布都会被 Featured 到首页，素材质量和描述清晰度会影响审核。
- **工具**：Product Hunt (https://www.producthunt.com/)；X (Twitter) (https://x.com/)；Google Analytics 4 (https://analytics.google.com/)

#### [P1] Hacker News「Show HN」：必须是别人能直接上手试用的东西
id: `launch-show-hn`
- **为什么**：HN 读者是技术早期用户，一次成功的 Show HN 能带来大量高质量访问和后续报道；违反规则的帖子会被标记。
- **通过标准**：
  - 标题以「Show HN: 」开头，平实描述，不用营销词和感叹号
  - 链接是能直接试用的产品或开源仓库，尽量不要求注册或留邮箱；博客文章、落地页、候补名单不能发 Show HN
  - 作者本人发帖，正文写一段背景（为什么做、技术取舍），之后在评论区持续回答
  - 不让朋友集中点赞（投票圈会被检测）；没有反响可以隔一段时间再发，但不频繁重发
- **怎么查**：先读 news.ycombinator.com/showhn.html 的规则；发帖后前 2 小时保持在线回复。
- **工具**：Hacker News (https://news.ycombinator.com/)

#### [P1] Reddit 发布帖：先读版规，用故事和经验开头，产品放在合适的位置
id: `launch-reddit-posts`
- **为什么**：Reddit 用户反感广告，但会认真对待真实的创作故事；帖子在 Google 和 AI 回答中的可见度都很高。
- **通过标准**：
  - 账号 karma 已达标（见 Reddit 养号条目）；目标版块 3–5 个，如 r/SideProject、r/IndieDev、r/SaaS、r/NoCode 等 5k–50k 成员的垂直版块
  - 发帖前读完 sidebar 规则：是否允许自我推广、是否只允许在每周推广帖里发、最低 karma 和账号年龄
  - 正文讲为什么做、真实问题、踩过的坑，而不是功能清单；允许时链接放在正文末尾或评论中，并附完整说明
  - 同一天不在多个版块发相同内容；被踩的帖子不删；所有评论 24 小时内回复
- **怎么查**：发帖前在目标版块搜索同类帖子，参考高赞帖的格式；很多版块仍沿用「自我推广 ≤ 10%」的老规矩。
- **工具**：Reddit (https://www.reddit.com/)

#### [P1] 发布后 2 周内，批量提交二线发布平台
id: `launch-small-launch-sites`
- **为什么**：单个平台流量不大，但合起来是一批来源多样的引用域名和持续的长尾访问。
- **通过标准**：
  - 完成 ≥ 8 个：Fazier、Microlaunch、DevHunt（开发者工具）、Peerlist Launchpad、Tinylaunch、Open-Launch、Startupfa.me、SaaSHub
  - 要求回链（放徽章）才给 dofollow 的平台，评估后再决定是否放，不在全站页脚堆满徽章
  - 每个上线页面都登记到外链追踪表
- **怎么查**：按素材包统一提交，每个平台的描述改写一次。
- **工具**：Fazier (https://fazier.com/)；Microlaunch (https://microlaunch.net/)；DevHunt (https://devhunt.org/)；Peerlist (https://peerlist.io/)；SaaSHub (https://www.saashub.com/)

#### [P1] AI 产品提交到 AI 工具导航站，分类选对
id: `launch-ai-directories`
- **为什么**：AI 导航站流量大，同时帮搜索引擎和 AI 把你归到正确的 AI 工具品类。
- **通过标准**：
  - 提交 ≥ 8 个 AI 导航站，如 There's An AI For That、Toolify、Futurepedia、Future Tools、TopAI.tools、dang.ai、AI 工具集（ai-bot.cn）；免费和付费以各站当前政策为准
  - 付费前看对方流量（笔记快照：TAAFT 月 UV 约 540 万 / $299，Toolify 约 230 万 / $99，TopAI.tools 约 130 万 / $47），按流量 / 价格比排序
  - 分类和标签准确；描述包含品类词（如 AI poster generator），而不是空泛口号
  - 30 天后在 GA4 查看每个导航站的引荐访问，0 访问的不续费
- **怎么查**：统一使用素材包；在追踪表中记录价格、审核时间和上线链接。
- **工具**：There's An AI For That (https://theresanaiforthat.com/)；Toolify (https://www.toolify.ai/)；Futurepedia (https://www.futurepedia.io/)；Future Tools (https://www.futuretools.io/)；AI 工具集 (https://ai-bot.cn/)

#### [P1] 中文社区发布：V2EX 分享创造、掘金、少数派、linux.do、即刻、阮一峰周刊
id: `launch-cn-communities`
- **为什么**：中文开发者社区流量大（V2EX 月 PV 约 720 万、linux.do 约 430 万）；链接多为 nofollow，但能带来第一批中文用户和反馈。
- **通过标准**：
  - V2EX 发在「分享创造」节点，讲清楚做了什么、为什么做，不重复发
  - 掘金写技术实现文章，少数派投稿 Matrix 社区，linux.do 遵守版块规则，即刻发到独立开发相关圈子
  - 阮一峰《科技爱好者周刊》：在 GitHub ruanyf/weekly 仓库按格式提交 issue
  - GA4 或百度统计中能看到这些域名的引荐访问
- **怎么查**：每个社区先看置顶规则和近期热门帖的写法；评论 24 小时内回复。
- **工具**：V2EX (https://www.v2ex.com/)；掘金 (https://juejin.cn/)；少数派 (https://sspai.com/)；LINUX DO (https://linux.do/)；即刻 (https://okjike.com/)；科技爱好者周刊（阮一峰） (https://github.com/ruanyf/weekly)

#### [P1] 发布当天值守：回复评论、监控服务、预留额度，一周后复盘
id: `launch-day-ops`
- **为什么**：发布当天的流量峰值最容易暴露 bug、额度上限和支付问题；回复速度直接影响排名和口碑。
- **通过标准**：
  - 所有平台的评论和私信 24 小时内回复（Product Hunt 当天 1 小时内）
  - 可用性监控和错误监控已开启；AI 调用额度、数据库连接数、速率限制按日常 5–10 倍流量预留
  - 反馈集中记录在一张表里（来源、内容、处理状态）
  - 发布 7 天后写复盘：各平台的访问、注册、付费和外链
- **怎么查**：提前在 Cloudflare 和云服务商后台检查配额；用 UptimeRobot 做外部监控。
- **工具**：UptimeRobot (https://uptimerobot.com/)；Cloudflare (https://dash.cloudflare.com/)；Google Analytics 4 (https://analytics.google.com/)

#### [P1] App 上架时做 ASO：名称、副标题、关键词字段、截图、评分
id: `launch-aso`
- **为什么**：应用商店搜索是 App 最主要的免费流量来源，名称和副标题中的关键词权重最高。
- **通过标准**：
  - iOS：名称 ≤ 30 字符、副标题 ≤ 30 字符、关键词字段 ≤ 100 字符，核心词放在名称或副标题中
  - Google Play：标题 ≤ 30 字符、简短说明 ≤ 80 字符，完整说明自然包含中高热度关键词
  - 前 2–3 张截图各传达 1 个核心卖点（截图上有大字标题）
  - 在用户完成任务后的正向时刻请求评分（iOS 系统评分弹窗一年最多显示 3 次），评分数稳定增长
- **怎么查**：用七麦数据（国内）或 Sensor Tower（全球）查竞品关键词和排名；在 App Store Connect / Play Console 填写。
- **工具**：七麦数据 (https://www.qimai.cn/)；Sensor Tower (https://sensortower.com/)；App Store Connect (https://appstoreconnect.apple.com/)；Google Play Console (https://play.google.com/console/)

#### [P2] 在 Indie Hackers 建产品页，并发一篇「我为什么做它」的创作者故事
id: `launch-indiehackers`
- **为什么**：Indie Hackers 鼓励公开收入和过程，帖子长期可见，适合讲构建故事、获得同行反馈。
- **通过标准**：
  - 产品资料完整：名称、一句话、网址、logo
  - 发 1 篇构建故事：真实问题、做法、踩坑、真实数字，产品链接自然出现
  - 之后每个里程碑（首个付费用户、MRR 节点）再发一篇更新
- **怎么查**：indiehackers.com 注册后创建产品，并在相关分组发帖；每条评论都回复。
- **工具**：Indie Hackers (https://www.indiehackers.com/)

#### [P2] 在 Uneed 发布，争取当日榜单徽章
id: `launch-uneed`
- **为什么**：Uneed 是社区型发布平台，竞争比 Product Hunt 小，笔记中约 40–50 票常能拿到当日第一，徽章可以放在官网增加信任。
- **通过标准**：
  - 已排期发布（免费排队较久，付费可快速发布；笔记价格约 $29.99，DR 73）
  - 发布当天在社群和 X 上告知，回复所有评论
  - 获得的排名徽章放进官网页脚或「Featured on」区域
- **怎么查**：uneed.best 提交；发布后在追踪表中记录排名和访问。
- **工具**：Uneed (https://www.uneed.best/)；X (Twitter) (https://x.com/)

### ④ 增长

#### [P2] 每个大版本、每个重要新功能都当作一次新发布
id: `launch-relaunch-cadence`
- **为什么**：每次发布都会留下新的提及记录和外链，也能让老用户回流；对新站来说这是持续的外链节奏。
- **通过标准**：
  - 公开的更新日志页面，每个大版本有一篇更新说明
  - 每个大版本至少在 2 个渠道发布（X / 社区帖子 + 发布平台），并记录链接
  - Product Hunt 再次发布需要有明显不同的新功能（间隔要求以官方当时规则为准）
- **怎么查**：维护一张「版本 → 发布链接」表，与外链追踪表关联。
- **工具**：Product Hunt (https://www.producthunt.com/)；X (Twitter) (https://x.com/)

## 相关
- 手册 skill（原理、打法和模板）：`growth-guide-launch-distribution`
- 总索引：`seo-growth-skills-index`
- 交互式工具：仓库 `tool/index.html`（构建后在 `/tool/`），可以勾选进度、导出 Markdown
