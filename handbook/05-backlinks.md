# 外链建设

> 一句话：**2026 年，外链对新产品的意义是第三方的"信任票"，不是"权重果汁"**。外链要证明三件事：你是一个真实存在、有人在用的产品；你属于哪一类 AI 工具（语义归类）；它能带来真实的、会转化的用户。
>
> 外链放大的是你已有的基础。技术 SEO 和页面优化（见 [02](../02-page-structure-and-tags/)、[03 章](../03-technical-seo-and-infra/)）没做好之前，不要急着大规模建外链。外链大多不能被 auditor 自动检测，要在 [Checklist 工具](../../tool/) 里人工勾选；站内相关的条目是 `links-anchor-text`、`links-external-citation`。

---

## 1. 2026 年怎么看外链

| ❌ 错误目标 | ✅ 正确目标 |
|---|---|
| 把 DR 冲上去 | 证明产品真实存在、可以验证 |
| 把外链数量刷上去 | 来源足够多样（目录、社区、发布平台、博客、媒体） |
| 用关键词锚文本堆排名 | 帮搜索引擎把你**归到正确的类目**（例如 "AI Poster Generator"） |
| 只要 SEO 链接 | 每条链接最好满足至少一条：带来注册、有真实点击、在社区里长期可见 |

搜索引擎警惕的是：AI 批量生成的工具站、换皮抄袭的产品、没有用户却从第一天就收费的 SaaS。外链要能证明**有人在用你、提到你、讨论你**。

**外链为什么仍然重要**（《反链查询》）：① 它是信任票，和 E-E-A-T 相关；② 它影响排名，原文引用的数据是自然结果第 1 名的平均点击率约 27.6%，大约是第 10 名的 10 倍，而排名靠前的页面通常外链更多；③ 它带来引荐流量，nofollow 和 sponsored 链接也会带流量。

> 判断标准：**一个在 2015 年看起来很合理的外链手法，到 2026 年很可能是有毒的。**

---

## 2. 分阶段打法

| 阶段 | 目标 | 做什么 | 看什么指标 |
|---|---|---|---|
| **第 0–1 个月**：建立信任 | 让搜索引擎知道你存在，并且给你归好类 | 提交到 AI 工具目录、SaaS 目录、独立开发工具清单；上发布平台（Product Hunt、Hacker News "Show HN"、Uneed、BetaList 等）；在少量社区里分享。**链接不多，但来源类型要尽量分散** | 收录页数、上线的 listing 数量、引用域名（RD）数量、引荐流量 |
| **第 1–3 个月**：强化语义 | 明确"你是哪一类 AI 工具"，开始拿长尾词 | 写场景文章、用例和可引用的内容（模板库、Prompt 库、参数对照表）；在独立开发社区写 builder story；对比 / 替代品页（见 [01 章](../01-keyword-research/)） | 长尾词排名、RD 增速、品牌词展示量 |
| **第 3 个月以后**：自然增长 | 让外链越来越多地来自"被提到" | 提升内容质量和用户留存；每次发布大版本都重新做一次发布；客座文章、采访；持续产出可引用的资产 | 自然获得的 RD 占比、关键词排名、自然流量、转化 |

**7 类外链来源（风险低、性价比高）**

| # | 来源 | 要点 |
|---|---|---|
| 1 | AI / SaaS / 无代码 / 独立开发工具目录（**必做**） | dofollow 还是 nofollow 都可以，目的是"被收录 + 被归类"；描述不要用模板，类目要选对，优先选会显示上线和更新日期的平台 |
| 2 | 独立开发者 / builder 社区（Indie Hackers 这类） | 写原创内容：为什么做这个产品、要解决的真实问题、踩过的坑。链接自然出现在"最后我做了 XXX 来解决这个问题"这种语境里 |
| 3 | 用例型博客文章 | 不写"10 个 AI 海报工具对比"，写"我是怎么 10 分钟做出 50 张营销海报的"。这种文章能长期带来长尾流量，也容易被引用 |
| 4 | 工具型、可引用的内容 | Prompt 库、免费模板、参数 / 规格表、行业标准汇总。不推销、方便引用、看起来不像在做 SEO |
| 5 | 发布平台（"节奏型"外链） | 每一次发布、大版本、新功能都是一条新的提及记录 |
| 6 | 对比 / 替代品内容 | 第三方提到你最有价值，**不要自己批量制造这类链接** |
| 7 | 被动的自然外链（终极目标） | 来自真实使用 + 文档 / 模板 / 案例被引用 + 内容长期被搜到 |

---

## 3. 链接质量：四要素 + 三个细节

**四要素**（《DR查询》，评估链接交换或客座文章时**四项一起看**）：

| 要素 | 问题 | 怎么查 |
|---|---|---|
| ① DR / 权威度 | 来源域名的外链强度 | Ahrefs DR、Semrush AS、Moz DA（都是第三方代理指标，Google 不用这些分数） |
| ② 相关性 | 同行业或相关行业？受众重合吗？ | 看对方网站的主题和受众。最好是主题相关的网站，其次是受众相关的网站 |
| ③ 真实流量 | 对方网站有没有自然流量 | Semrush / Similarweb 的流量曲线 > 0 并且稳定 |
| ④ dofollow | 链接是否传递权重 | 在 DevTools 里看 `rel` 属性；`nofollow` / `sponsored` / `ugc` 表示"不背书" |

**三个细节**（《反链查询》）：

- **位置**：放在正文里最好；页脚、侧边栏全站链接、论坛签名几乎没有权重。
- **自然**：好的链接不突兀，锚文本像作者自己会写的话。
- **锚文本**：给出目标页面的明确语境，能引起好奇、让人知道点进去有什么价值。不要用堆满关键词的锚文本。

> **一个 DR 70、没有流量也没有用户的"SEO 链接农场"，价值可能还不如一个 DR 25 的垂直博客。**
> nofollow 链接如果来自高度相关、能带来流量的页面，照样值得做，用引荐会话数（referral sessions）来衡量它的价值。

---

## 4. 怎么读懂 DR

DR（Domain Rating，Ahrefs 推出）是一个 0–100 的**相对分数**，只衡量外链强度，不看内容、流量和排名。它的大致计算依据是：有多少个不同的引用域名、这些域名自身的 DR、每个域名能传出多少权重（会被它的所有出站链接分摊），并且只算 dofollow 链接。来自同一个域名的重复链接边际收益递减，所以关键是"**谁给你投票**"，而不是"投了多少票"。

| DR 区间 | 一般是什么网站（经验划分，非官方） |
|---|---|
| 0–10 | 新站，几乎没有外链 |
| 10–30 | 小站，典型的独立开发者网站 |
| 30–50 | 做过系统性的外链建设 |
| 50–70 | 细分领域里的强站 |
| 70–90 | 大媒体、大平台 |
| 90+ | 维基百科、Google 这一级别 |

- **独立开发者的目标：DR 20–40 就已经很有竞争力了**。里程碑可以设成 10 → 20 → 30–40。
- DR ≠ 排名（Google 不用 DR，只是 DR 高的网站排名往往更容易）；DR ≠ 流量（DR 80+ 的网站也可能没什么流量，DR 20 的网站也可能有几十万访问）；DR ≠ 内容质量（垃圾站也能靠刷外链把 DR 抬上去）。
- **误区**：DR 涨得越快越好（突然暴涨看起来很不正常）；只看 DR 不看 RD（**DR 是结果，RD 是过程**）；把 DR 当成 KPI（真正的 KPI 是关键词排名、自然流量和转化）。
- 每月监控一次：<img src="https://www.google.com/s2/favicons?domain=frogdr.com&sz=32" width="16" height="16" alt=""> [FrogDR](https://frogdr.com/)（免费监控 3 个网站）或 Ahrefs。

---

## 5. 免费外链资源

> 下表的 DR 和链接属性来自《免费外链资源》，是原文撰写时的快照，**会变化**。rel 一栏的"—"表示原文没有标注。提交之后一定要在线上 listing 页面实测 `rel` 属性。

**发布平台与综合目录**

| 平台 | DR | rel | 备注 |
|---|---|---|---|
| <img src="https://www.google.com/s2/favicons?domain=news.ycombinator.com&sz=32" width="16" height="16" alt=""> [Hacker News](https://news.ycombinator.com/) | 91 | — | 发 "Show HN" |
| <img src="https://www.google.com/s2/favicons?domain=producthunt.com&sz=32" width="16" height="16" alt=""> [Product Hunt](https://www.producthunt.com/) | 91 | — | 最大的发布平台，支持多次发布（每次要展示不同的功能），见 [07 章](../07-launch-and-distribution/) |
| <img src="https://www.google.com/s2/favicons?domain=devpost.com&sz=32" width="16" height="16" alt=""> [Devpost](https://devpost.com/) | 87 | — | listing 页面本身就是一条外链 |
| <img src="https://www.google.com/s2/favicons?domain=goodfirms.co&sz=32" width="16" height="16" alt=""> [GoodFirms](https://www.goodfirms.co/) | 86 | — | 软件目录 |
| <img src="https://www.google.com/s2/favicons?domain=startupfa.me&sz=32" width="16" height="16" alt=""> [Startupfa.me](https://startupfa.me/) | 82 | — | 也有付费档 |
| <img src="https://www.google.com/s2/favicons?domain=alternativeto.net&sz=32" width="16" height="16" alt=""> [AlternativeTo](https://alternativeto.net/) | 79 | — | 替代品目录，能带来很精准的流量 |
| <img src="https://www.google.com/s2/favicons?domain=fazier.com&sz=32" width="16" height="16" alt=""> [Fazier](https://fazier.com/) | 79 | — | 发布平台 |
| <img src="https://www.google.com/s2/favicons?domain=stackshare.io&sz=32" width="16" height="16" alt=""> [StackShare](https://stackshare.io/) | 79 | — | 技术栈目录 |
| <img src="https://www.google.com/s2/favicons?domain=saashub.com&sz=32" width="16" height="16" alt=""> [SaaSHub](https://www.saashub.com/) | 75 | — | SaaS 目录 |
| <img src="https://www.google.com/s2/favicons?domain=peerlist.io&sz=32" width="16" height="16" alt=""> [Peerlist](https://peerlist.io/) | 75 | — | 开发者社区 + 发布 |
| <img src="https://www.google.com/s2/favicons?domain=tinylaunch.com&sz=32" width="16" height="16" alt=""> [TinyLaunch](https://www.tinylaunch.com/) | 70 | — | 发布平台 |
| <img src="https://www.google.com/s2/favicons?domain=devhunt.org&sz=32" width="16" height="16" alt=""> [DevHunt](https://devhunt.org/) | 59 | — | 开发者工具发布 |
| <img src="https://www.google.com/s2/favicons?domain=open-launch.com&sz=32" width="16" height="16" alt=""> [Open-Launch](https://open-launch.com/) | 52–58 | — | 发布平台 |
| <img src="https://www.google.com/s2/favicons?domain=startupfa.st&sz=32" width="16" height="16" alt=""> [Startupfast](https://startupfa.st/) | 57 | — | 发布平台 |
| Microlaunch | 55 | — | 发布平台 |
| <img src="https://www.google.com/s2/favicons?domain=launchitx.com&sz=32" width="16" height="16" alt=""> [Launchitx](https://launchitx.com/) | 49 | — | 发布平台 |
| <img src="https://www.google.com/s2/favicons?domain=appsumo.com&sz=32" width="16" height="16" alt=""> [AppSumo](https://appsumo.com/) | — | — | 买断制（LTD）推广渠道，主要换现金和曝光，不是为了外链 |

**AI 工具目录**

| 平台 | DR | rel | 备注 |
|---|---|---|---|
| <img src="https://www.google.com/s2/favicons?domain=dang.ai&sz=32" width="16" height="16" alt=""> [Dang.ai](https://dang.ai/) | 79 | — | 也有付费加速 |
| <img src="https://www.google.com/s2/favicons?domain=oecd.ai&sz=32" width="16" height="16" alt=""> [OECD.AI 目录](https://oecd.ai/) | 79 | — | 政策机构的 AI 工具目录 |
| Twelve Tools | 79 | — | AI 工具目录 |
| <img src="https://www.google.com/s2/favicons?domain=towardsai.net&sz=32" width="16" height="16" alt=""> [Towards AI](https://towardsai.net/) | 72 | — | 投稿形式 |
| Goodaitools | 72 | — | AI 工具目录 |
| <img src="https://www.google.com/s2/favicons?domain=aitools.inc&sz=32" width="16" height="16" alt=""> [aitools.inc](https://aitools.inc/) | 70 | — | AI 工具目录 |
| <img src="https://www.google.com/s2/favicons?domain=futuretools.io&sz=32" width="16" height="16" alt=""> [Futuretools](https://www.futuretools.io/) | 68 | — | AI 工具目录 |
| <img src="https://www.google.com/s2/favicons?domain=aigc.cn&sz=32" width="16" height="16" alt=""> [AIGC.cn](https://www.aigc.cn/) | 61 | — | 中文 AI 导航 |
| ai138 | 61 | — | 中文 AI 导航 |
| Saasaitools | 56 | — | AI 工具目录 |
| Aitoolsdirectory | 49 | — | AI 工具目录 |

**中文社区**（流量和品牌曝光价值高，大多数**不传递权重**）

| 平台 | DR | rel | 备注 |
|---|---|---|---|
| <img src="https://www.google.com/s2/favicons?domain=zhihu.com&sz=32" width="16" height="16" alt=""> [知乎](https://www.zhihu.com/) | 91 | nofollow | 长文 + 回答，百度收录好 |
| <img src="https://www.google.com/s2/favicons?domain=juejin.cn&sz=32" width="16" height="16" alt=""> [掘金](https://juejin.cn/) | 84 | nofollow | 技术文章 |
| <img src="https://www.google.com/s2/favicons?domain=v2ex.com&sz=32" width="16" height="16" alt=""> [V2EX](https://v2ex.com/) | 78 | nofollow | "分享创造"节点 |
| <img src="https://www.google.com/s2/favicons?domain=sspai.com&sz=32" width="16" height="16" alt=""> [少数派](https://sspai.com/) | 76 | nofollow | 效率工具类 |
| <img src="https://www.google.com/s2/favicons?domain=linux.do&sz=32" width="16" height="16" alt=""> [Linux.do](https://linux.do/) | 73 | nofollow | 开发者社区 |
| <img src="https://www.google.com/s2/favicons?domain=linktr.ee&sz=32" width="16" height="16" alt=""> [Linktree](https://linktr.ee/) | 94 | nofollow | 个人主页聚合链接 |
| <img src="https://www.google.com/s2/favicons?domain=91wink.com&sz=32" width="16" height="16" alt=""> [独立开发前线](https://91wink.com/) | 28 | **dofollow** | 原文作者的社区 |

**其余免费目录**（DR 来自原文）：Rundown 40、10words 32、Indietools 31、Tipseason 31、Insanelycooltools（邮件通讯）25、dropyourai 24、Barndoor 22、AiStart 22、Apprater 15、Simplifyaitools 12、Gptbot.io 27、AI Center 35、Grabon 66、Phygital library 57、Solopush 46、Nxgntools 54、ProjectHunt 49、Ufind 46、PromoteProject 47、Similarlabs 62、Code.market 71、Moss AI 73、Gamsgo 70、Backlinkdirs 47。

**冲刺策略**：先做 DR 高的发布平台，再做 dofollow 且 DR ≥ 50 的目录（第一轮目标是至少 10 条）。如果是 AI 产品，要把主要的 AI 目录都覆盖到。中文社区不是为了权重，而是为了流量，用统计工具里的引荐会话数来衡量。

---

## 6. 付费外链资源

| 平台 | DR | 价格（原文） | 月 UV（《出海产品的推广策略》快照） | 备注 |
|---|---|---|---|---|
| Toolfame | 70 | $9.9 | — | DR / 价格比高 |
| Aistage | 73 | $9.9 | — | DR / 价格比高 |
| <img src="https://www.google.com/s2/favicons?domain=magicbox.tools&sz=32" width="16" height="16" alt=""> [Magicbox.tools](https://magicbox.tools/) | 72 | $15.9 | — | DR / 价格比高 |
| Turbo0 | 76 | $16.9 | — | DR / 价格比高 |
| <img src="https://www.google.com/s2/favicons?domain=startupfa.me&sz=32" width="16" height="16" alt=""> [Startupfa.me](https://startupfa.me/) | 82 | $19 / $49 | — | DR 最高的低价选项 |
| <img src="https://www.google.com/s2/favicons?domain=500.tools&sz=32" width="16" height="16" alt=""> [500.tools](https://500.tools/) | 48 | $19 | — | — |
| Seektool | 50 | $19.9 | — | — |
| <img src="https://www.google.com/s2/favicons?domain=dang.ai&sz=32" width="16" height="16" alt=""> [Dang.ai](https://dang.ai/) | 80 | $29 | — | 也可以免费提交 |
| <img src="https://www.google.com/s2/favicons?domain=uneed.best&sz=32" width="16" height="16" alt=""> [Uneed](https://www.uneed.best/) | 73 | $29.99 | 约 76k–91k | 免费发布要排很久，付费可以插队；拿到当日第一大约需要 40–50 票 |
| Toolfolio | 35 | $42 | — | DR 低，性价比一般 |
| <img src="https://www.google.com/s2/favicons?domain=topai.tools&sz=32" width="16" height="16" alt=""> [TopAI.tools](https://topai.tools/) | 61 | $47 | 约 1.3M | 流量大 |
| <img src="https://www.google.com/s2/favicons?domain=toolify.ai&sz=32" width="16" height="16" alt=""> [Toolify](https://www.toolify.ai/) | 73 | $99 | 约 2.3M | 流量大 |
| <img src="https://www.google.com/s2/favicons?domain=toolpilot.ai&sz=32" width="16" height="16" alt=""> [Toolpilot.ai](https://www.toolpilot.ai/) | 76 | $99 | 约 130k | — |
| <img src="https://www.google.com/s2/favicons?domain=yeschat.ai&sz=32" width="16" height="16" alt=""> [YesChat.ai](https://www.yeschat.ai/) | — | $99 | 约 4M | 只出现在推广策略文中 |
| <img src="https://www.google.com/s2/favicons?domain=aitools.fyi&sz=32" width="16" height="16" alt=""> [aitools.fyi](https://aitools.fyi/) | 46 | $197（推广策略文写 $30） | 约 180k | **两篇文档价格不一致，以官网为准** |
| <img src="https://www.google.com/s2/favicons?domain=theresanaiforthat.com&sz=32" width="16" height="16" alt=""> [There's An AI For That](https://theresanaiforthat.com/) | 77 | $299 | 约 5.4M | 贵，但流量最大 |
| <img src="https://www.google.com/s2/favicons?domain=whatsthebigdata.com&sz=32" width="16" height="16" alt=""> [WhatsTheBigData](https://whatsthebigdata.com/) | 75 | $599（推广策略文写 $499） | 约 570k | 贵 |
| <img src="https://www.google.com/s2/favicons?domain=ai-bot.cn&sz=32" width="16" height="16" alt=""> [AI-Bot.cn](https://ai-bot.cn/) | 71 | ¥399（推广策略文写 ¥300） | 约 1.4M PV | 中文 AI 导航 |
| <img src="https://www.google.com/s2/favicons?domain=openfuture.ai&sz=32" width="16" height="16" alt=""> [OpenFuture](https://openfuture.ai/) | 35 | 免费 | 约 250k | — |
| Launchboard / Askaiforit / GptDemo | 48 / 36 / 26 | $5 / $5 / $9.9 | — | 便宜，但 DR 低 |

**花钱之前**

1. 先算 **DR / 美元**，再看对方网站的**自然流量**是否大于 0 且稳定。没有流量的目录直接跳过。
2. 确认付费 listing 是不是 dofollow（有些平台把 dofollow 作为加价项来卖）。
3. 定一个固定预算，比如上线时先花大约 $100 在"≤ $30、DR 70+"这一档上。在追踪表里记录花费和收获。
4. $299–599 的高价目录，只有在它**能带来真实流量**的时候才值得。

> ⚠️ **2026 更新（两篇文档的冲突）**：《外链建设策略》说"不要买看起来像 SEO 的链接"，《付费外链资源》又列出了付费目录。两者的边界是：**花钱买的是"审核收录 + 曝光 + 归类"，而且这个目录本身就有真实用户**，这属于正常的营销支出。**花钱买的是"传递 PageRank 的链接"**（PBN、链接农场、按 DR 卖的客座文章、批量链接包），违反 Google 的链接垃圾政策。如果你不确定，就用一个问题来判断：如果这个网站对 Google 完全不可见，你还愿意花这笔钱吗？

---

## 7. 外链导航站与代提交服务

| 工具 | 类型 | 链接 |
|---|---|---|
| BacklinkDirs | 免费导航 + 管理 | <img src="https://www.google.com/s2/favicons?domain=backlinkdirs.com&sz=32" width="16" height="16" alt=""> [backlinkdirs.com](https://backlinkdirs.com/) |
| Launchpointzero | 免费，发布站推荐清单 | <img src="https://www.google.com/s2/favicons?domain=launchpointzero.com&sz=32" width="16" height="16" alt=""> [launchpointzero.com](https://launchpointzero.com/launchsites/recommended) |
| 1000UserGuide | 免费，获取前 1000 个用户的渠道清单 | <img src="https://www.google.com/s2/favicons?domain=1000userguide.com&sz=32" width="16" height="16" alt=""> [1000userguide.com](https://1000userguide.com/) |
| 独立开发前线 SEO 外链资源目录 | 免费 | <img src="https://www.google.com/s2/favicons?domain=91wink.com&sz=32" width="16" height="16" alt=""> [91wink.com](https://91wink.com/special/seoresourcedirectory/) |
| SubmitAI | 免费浏览 / 付费代提交（.pro） | <img src="https://www.google.com/s2/favicons?domain=submitai.vercel.app&sz=32" width="16" height="16" alt=""> [submitai.vercel.app](https://submitai.vercel.app/explore) |
| DomainRank | 免费导航 | <img src="https://www.google.com/s2/favicons?domain=domainrank.app&sz=32" width="16" height="16" alt=""> [domainrank.app](https://domainrank.app/) |
| Aimaker directory | 免费导航 | <img src="https://www.google.com/s2/favicons?domain=aimaker.dev&sz=32" width="16" height="16" alt=""> [aimaker.dev](https://aimaker.dev/directory) |
| WebDirectoryCenter | 免费导航 | — |
| Submitdirs / SubmitSaas / Submitmatic / Getmorebacklinks | **付费代提交** | — |

**做法**：把 2–3 个导航站的清单合并、去重，加上 DR、rel、价格三列，整理成一张总表。如果外包提交，要求对方交付**上线后的 listing URL 清单**，并且至少抽查 20%，确认页面在线、链接指向你的网站。

---

## 8. 外链工具

| 工具 | 用途 | 免费额度（原文） |
|---|---|---|
| <img src="https://www.google.com/s2/favicons?domain=ahrefs.com&sz=32" width="16" height="16" alt=""> [Ahrefs Backlink Checker](https://ahrefs.com/zh/backlink-checker) | 外链、DR、锚文本、新增 / 丢失外链 | 付费（有免费的有限版本） |
| <img src="https://www.google.com/s2/favicons?domain=semrush.com&sz=32" width="16" height="16" alt=""> [Semrush](https://www.semrush.com/) | 外链、Authority Score | 每天 10 次，数据有限 |
| <img src="https://www.google.com/s2/favicons?domain=moz.com&sz=32" width="16" height="16" alt=""> [Moz Link Explorer](https://moz.com/link-explorer) | 外链、DA | 每天 10 次 × 每次 50 行 |
| <img src="https://www.google.com/s2/favicons?domain=seranking.com&sz=32" width="16" height="16" alt=""> [SE Ranking](https://seranking.com/backlink-checker.html) | 外链 | 20 行 |
| <img src="https://www.google.com/s2/favicons?domain=seobility.net&sz=32" width="16" height="16" alt=""> [Seobility](https://www.seobility.net/en/backlinkchecker/check) | 外链 | 免费 |
| <img src="https://www.google.com/s2/favicons?domain=linkody.com&sz=32" width="16" height="16" alt=""> [Linkody](https://www.linkody.com/en/seo-tools/free-backlink-checker) | 外链 | 免费 |
| <img src="https://www.google.com/s2/favicons?domain=neilpatel.com&sz=32" width="16" height="16" alt=""> [Neil Patel Backlinks](https://neilpatel.com/backlinks/) | 外链 | 免费 |
| <img src="https://www.google.com/s2/favicons?domain=seoreviewtools.com&sz=32" width="16" height="16" alt=""> [SEOReviewTools](https://www.seoreviewtools.com/valuable-backlinks-checker/) | 有价值的外链 | 免费 |
| <img src="https://www.google.com/s2/favicons?domain=smallseotools.com&sz=32" width="16" height="16" alt=""> [SmallSEOTools](https://smallseotools.com/backlink-checker/) | 外链 | 10 行 |
| <img src="https://www.google.com/s2/favicons?domain=majestic.com&sz=32" width="16" height="16" alt=""> [Majestic](https://zh.majestic.com/backlink-checker) | 外链（Trust Flow） | 付费 |
| <img src="https://www.google.com/s2/favicons?domain=frogdr.com&sz=32" width="16" height="16" alt=""> [FrogDR](https://frogdr.com/) | DR 监控 | 免费 3 个网站 |
| <img src="https://www.google.com/s2/favicons?domain=mkdollar.com&sz=32" width="16" height="16" alt=""> [Mkdollar](https://mkdollar.com/) | 外链建设管理 | — |
| <img src="https://www.google.com/s2/favicons?domain=search.google.com&sz=32" width="16" height="16" alt=""> [Google Search Console](https://search.google.com/search-console/about) → 链接报告 | 自己网站的外链（最权威） | 免费 |

> ⚠️ **2026 更新**：《反链查询》提到用 Google 搜索指令 `link:xxx.com` 和 `domain:xxx.com` 查外链。`link:` 早在 2017 年就被 Google 停用了，`domain:` 也不是 Google 支持的指令。现在要查外链，请用上表里的工具和 GSC 的链接报告。

---

## 9. 竞品冷启动外链分析

目标：找到竞品**上线后 0–30 天**里带来第一波流量的 5–20 条链接或提及。其中很多现在已经不存在了，Ahrefs / Semrush 也抓不全（质量低、存活时间短、抓取优先级低）。所以要**手工取证，工具只用来兜底验证**。

需要收集三类信号：**直接外链 : 只提 URL 不加链接 : 只提名字（产品或创始人）不带 URL ≈ 2 : 4 : 4**，三类都要找。

```text
Step 1  确定冷启动窗口
        whois 注册日期 + Wayback Machine 最早快照 + Product Hunt / BetaList 发布日期
        → 例如 Day 0–30 或 Day 0–60

Step 2  Google 按时间筛选（最重要的一步）
        "competitor.com" -site:competitor.com
        → 工具 → 时间 → 自定义日期范围 = 冷启动窗口
        手动剔除聚合站、镜像站、SEO 垃圾页、whois/DNS 缓存页，只保留明显是人写的内容

Step 3  不带域名的提及（同样限定时间）
        "Product Name"
        "Product Name" AI
        "Product Name" tool

Step 4  发布平台反查（必做），同时找"二次传播"的页面
        site:producthunt.com "Product Name"
        site:reddit.com "Product Name"
        site:news.ycombinator.com "Product Name"
        site:indiehackers.com "Product Name"
        site:betalist.com "Product Name"

Step 5  Wayback 最早 2–3 个快照里的"自我披露"
        首页 / 页脚 / About 页上的 "Featured on"、"As seen on"、发布徽章、媒体 Logo

Step 6  换搜索引擎再查一遍：Bing、DuckDuckGo（历史残留不同，通常能多找回 10–20%）

Step 7  用 Ahrefs / Semrush（以及自己网站的 GSC）验证和补充还存活的链接
```

**判断是不是核心冷启动链接（满足 ≥ 2 条）**：上线 30 天内出现；明显是人写的；是第一个系统介绍这个产品的；带有主观评价（好、坏、惊喜）；后来被别人引用。

**整理成路径，不要只列清单**：

| 链接类型 | 来源平台 | 时间 | 作用 |
|---|---|---|---|
| 社区发布 | Product Hunt | Day 1 | 第一波曝光 |
| 博客评测 | 独立博客 | Day 7 | 开始拿搜索长尾 |
| 推荐清单 | 工具目录 | Day 14 | 持续带来引荐流量 |

最有价值的链接往往来自**转述者**，而不是原始的发布平台。现实目标是找回大约 70%，弄清"是谁第一个为这个产品背书的"，然后照着这条路径给自己的产品排一个带日期的发布计划。

---

## 10. 锚文本分布

| 锚文本类型 | 例子 | 建议占比（经验区间，非官方） |
|---|---|---|
| 品牌词 | `ExampleAI`、`ExampleAI 海报工具` | 最大的一类，约 40–60% |
| 裸 URL | `example.com`、`https://example.com/pdf-to-excel` | 约 15–25% |
| 通用 / 自然语句 | "这个工具"、"他们的教程"、"这里" | 约 10–20% |
| 部分匹配 | "一个能批量做海报的 AI 工具" | 约 10–15% |
| 精确匹配关键词 | `ai poster generator` | **少数，≤ 5–10%** |

原文只说了"大多数应该是品牌、URL 或自然锚文本，精确匹配只占少数"。上面的区间是行业里常见的经验值，用来帮你判断是否过度优化。站内链接正好相反，**应该用描述性的关键词锚文本**（`links-anchor-text`），见 [02 章](../02-page-structure-and-tags/)。

---

## 11. 不要做的事

1. 从第一天就追 DR。
2. 锚文本过度优化（大量精确匹配的关键词）。
3. 只提交同一类目录网站，来源单一。
4. 购买"看起来像 SEO"的链接：PBN、链接农场、批量外链包、按 DR 卖的客座文章。
5. 拿和产品无关的网站的链接。
6. 短时间内外链暴涨，看起来不自然（RD 增长曲线出现尖峰）。
7. 在 Reddit 上发裸链接、刷 karma（见 [08 章](../08-x-and-reddit/)）。Reddit 更适合用来获取用户和验证需求，不要指望它带来 SEO 外链。
8. 灰帽 / 黑帽手法：伪造来路的 referrer spam、蹭别人品牌名、买赞冲评论区。原文作者也提到过这些，但都有平台规则或法律风险，不要碰。

真的遭到人工处置，或者突然多出一批有毒外链时，再考虑用 disavow（拒绝外链）工具。平时不需要。

---

## 12. 外链追踪表模板

| 资源 | 类型 | 提交 URL | DR | rel（实测） | 价格 | 提交日期 | 上线日期 | listing URL | 锚文本 | 90 天引荐会话 | 注册数 | 状态 | 备注 |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| Product Hunt | 发布平台 | producthunt.com/… | 91 | nofollow | 0 | 2026-11-04 | 2026-11-04 | … | ExampleAI | 1,240 | 63 | 上线 | 当日 #4 |
| Toolify | AI 目录 | toolify.ai/submit | 73 | dofollow | $99 | 2026-11-05 | 2026-11-12 | … | ExampleAI | 210 | 9 | 上线 | — |
| 独立博客评测 | 博客 | — | 24 | dofollow | 0 | — | 2026-11-20 | … | 批量做海报的工具 | 85 | 6 | 自然获得 | 主动联系过作者 |

> 表中数字是示例。每月复盘一次：引用域名（RD）有没有增长、新增和丢失的外链、按来源统计的引荐会话和注册数。**90 天都没有带来点击的链接来源，下次就降低优先级。**

---

## 来源

- [外链建设策略](https://lownrain.feishu.cn/wiki/Lx9CwNJ0HiiJ4kki1XCcLmhnngr)（独立开发前线｜SEO从0到100）
- [免费外链资源](https://lownrain.feishu.cn/wiki/Nbh6wxW8XiBBZ3kGz3wckP8Pnah)（独立开发前线｜SEO从0到100）
- [付费外链资源](https://lownrain.feishu.cn/wiki/CRMTwsEOli71kJkd07BcvPAHnJY)（独立开发前线｜SEO从0到100）
- [外链导航](https://lownrain.feishu.cn/wiki/ScG2wuL2CizJbVkiXf3cIyltnrf)（独立开发前线｜SEO从0到100）
- [外链建设工具](https://lownrain.feishu.cn/wiki/Ih19wKCldio7j9kmKp2cdyAinrf)（独立开发前线｜SEO从0到100）
- [反链查询](https://lownrain.feishu.cn/wiki/QgnEw53QbicKk6kx9ImcteXPn1g)（独立开发前线｜SEO从0到100）
- [DR查询](https://lownrain.feishu.cn/wiki/DgBWwJfadiRW4fkRltwcg2nBnaf)（独立开发前线｜SEO从0到100）
- [怎么分析一个网站的冷启动外链是什么？](https://lownrain.feishu.cn/wiki/ZeIWwX2wriiHy1kNxbgcB51En4f)（独立开发前线｜SEO从0到100）
- [出海产品的推广策略](https://lownrain.feishu.cn/wiki/EgKEwabgAirGwRk5mOIcqvfanse)（独立开发前线｜SEO从0到100）
- [独立开发者出海产品发布平台](https://lownrain.feishu.cn/wiki/MxxPwa7Owiv0wek3DXecgavAnbK)（独立开发前线｜SEO从0到100）
- [品牌营销](https://lownrain.feishu.cn/wiki/D6aUwmc55i3alckkM5Pcq7snnKg)（独立开发前线｜SEO从0到100）
- [通过SEO打造自然增长产品](https://lownrain.feishu.cn/wiki/T3mnwUqeRiqfOyk8XBBc2zmHnpf)（独立开发前线｜SEO从0到100）
- [SEO经验分享](https://lownrain.feishu.cn/wiki/B2MLwCgXBisanqkZNyCcXDP6nqh)（独立开发前线｜SEO从0到100）
- [如何为你的产品获取免费流量？](https://lownrain.feishu.cn/wiki/ZObbwCFH1i7RvVknVEUcF9uDnMh)（独立开发前线｜SEO从0到100）
- [Ahrefs Seo名词](https://lownrain.feishu.cn/wiki/QpsGwfHUkiF08hkLqcxc2lRQnGh)（独立开发前线｜SEO从0到100）
- [SEO名词解释](https://lownrain.feishu.cn/wiki/ABWzwVvQTiPWdeknyLeclLdFnTh)（独立开发前线｜SEO从0到100）
