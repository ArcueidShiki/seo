# 总览

> 这是一本给**独立开发者和小团队**用的 SEO / GEO 实战手册。内容整理自公开的飞书知识库「独立开发前线｜SEO从0到100」的 91 篇文档：按主题重新编排，用自己的话转述，标出各篇文档之间互相矛盾的地方，并补上到 2026 年为止已经变化的做法（用 **⚠️ 2026 更新** 标注）。

---

## 1. 这本手册是什么，怎么和工具配合使用

本仓库由三部分组成，分工如下：

| 组成 | 位置 | 回答的问题 |
|---|---|---|
| 📘 **知识手册**（本手册） | `handbook/*.md` → 站点 `/handbook/` | **为什么**要这样做、**怎么**做、数字门槛是多少、哪些做法已经过时 |
| ✅ **交互式 Checklist 工具** | [`/tool/`](../../tool/) | **要检查什么**：每一条都有类别、阶段、优先级、检查标准和工具。可以按阶段、优先级、自动 / 人工筛选，勾选状态保存在本地，支持导出 Markdown |
| 🤖 **auditor 审计脚本** | `auditor/audit.mjs` | **现在做到了几分**：爬取你的网站，自动判定 39 条可检测的条目，并跑 Lighthouse（移动端 + 桌面端）。结果可以叠加显示在 Checklist 工具里 |

**推荐用法**

1. 先看本章第 3 节的**路线图**，确定你现在处在哪个阶段。
2. 打开 [Checklist 工具](../../tool/)，按"阶段"筛选出当前要做的条目。
3. 用 auditor 给自己的网站打分：

   ```bash
   node auditor/audit.mjs --url https://your-site.com/ --name mysite --keyword "your main keyword"
   # 可选参数：--max-pages 30  --no-lighthouse
   # 输出到 reports/mysite.json，重新构建之后就能在 Checklist 工具里叠加查看
   ```

4. 遇到没通过的条目，用它的 id（手册里用反引号标注，例如 `tech-canonical`、`geo-answer-first`）在对应章节里搜索，就能找到原因和修复方法。
5. 关键词研究、外链、发布、平台运营、变现这类**没法自动检测**的条目，按手册的做法完成后在工具里人工勾选。
6. 每个月重新跑一次 auditor，再对照路线图里的指标做一次复盘。

**手册里的符号**

- `onpage-title` 这种反引号里的 id，是 Checklist / auditor 的条目编号。
- **⚠️ 2026 更新**：原文的建议已经过时、和其他文档冲突，或者存在争议。
- 文中的 DR、价格、流量等数字都是**原文撰写时的快照**，使用前请自己核实。
- 每章末尾的"来源"列出了用到的原文档，可以点进飞书看原文。

---

## 2. 知识地图

| # | 章节 | 解决什么问题 | 关键产出 |
|---|---|---|---|
| 00 | [总览](../00-overview/) | 手册怎么用、从哪开始、核心原则 | 路线图、30 条原则、过时做法对照表 |
| 01 | [关键词研究与选题](../01-keyword-research/) | 做哪些词？能不能做？做成什么页面？ | 选词门槛、SERP 判断规则、"一页一词"规划表 |
| 02 | [页面结构与 SEO 标签](../02-page-structure-and-tags/) | 一个页面应该长什么样，标签怎么写 | 高转化页面模板、TDK 公式、JSON-LD 示例、URL / 内链规范 |
| 03 | [技术 SEO 与基础设施](../03-technical-seo-and-infra/) | 能不能被抓取、被收录，网站快不快、安不安全 | sitemap / robots、SSR、CWV、域名和邮箱、Cloudflare 配置、站长后台提交 |
| 04 | [内容与 E-E-A-T](../04-content-and-eeat/) | 写什么、怎么写、怎么让人信 | 选题检查表、内容模板、5 篇文章法、AI 内容规则、内容更新 SOP |
| 05 | [外链建设](../05-backlinks/) | 外链从哪来、值不值、怎么避坑 | 分阶段打法、免费和付费资源表、冷启动外链分析、外链追踪表 |
| 06 | [GEO / AI 搜索优化](../06-geo-ai-search/) | 怎么被 ChatGPT、Perplexity、AI Overviews 引用 | 引用路径、AI 爬虫放行表、llms.txt、每月 prompt 测试表 |
| 07 | [发布与冷启动](../07-launch-and-distribution/) | 第一批用户从哪来，渠道怎么排优先级 | 获客杠杆优先级、发布平台和发布素材包、上线 TodoList |
| 08 | [X 与 Reddit](../08-x-and-reddit/) | 海外社交平台怎么做才不被封、能带来流量 | Build in public、Reddit 养号和 karma 门槛 |
| 09 | [小红书](../09-xiaohongshu/) | 站内搜索驱动的种草平台怎么起号 | 定位、封面和标题、发布节奏、限流自查 |
| 10 | [抖音、短视频与微信生态](../10-douyin-video-wechat/) | 短视频搜索和推荐、公众号、小程序 SEO | 抖音 SEO、流量池机制、小程序搜一搜 |
| 11 | [数据分析与工具](../11-analytics-and-tools/) | 怎么装统计、看哪些数据、用哪些工具 | 统计方案对比、流量查询工具、复盘指标 |
| 12 | [变现](../12-monetization/) | 流量怎么变成收入 | 广告、订阅、支付渠道、付费客户 |
| 13 | [心法与案例](../13-mindset-and-case-studies/) | 做什么产品、怎么坚持、怎么建立壁垒 | 做到 TOP1、新手建议、增长系统、高分网站案例 |
| 99 | [术语表](../99-glossary/) | 看不懂的名词 | SEO / Ahrefs 指标 / GEO 术语速查 |

**按场景选择阅读路线**

| 你的情况 | 建议路线 |
|---|---|
| 还没上线，正在选方向 | 13 → 01 → 02 → 03 |
| 已经上线，但几乎没有自然流量 | 03（先查收录）→ 01（找排名"差一口气"的词）→ 04 → 05 |
| 有排名，但是转化低 | 02（页面模板、CTA）→ 04（E-E-A-T）→ 12 |
| 想被 AI 推荐 | 06 → 02（Schema）→ 05（站外提及）→ 08 |
| 主要做中文用户 | 01（全渠道长尾）→ 09 → 10 → 03（百度等后台） |

---

## 3. 新站 0→12 个月路线图

> 时间预期：《通过SEO打造自然增长产品》认为 Google 通常要 **约 3 个月** 才开始带来有意义的流量；《SEO经验分享》认为新站要 **至少 6 个月** 才看得到成效。两者并不矛盾：**3 个月左右开始起量，6–12 个月才进入稳定期。** 这段时间里要同时做社交渠道，拿早期流量，也验证产品。

### 第 0 周：上线之前

| 做什么 | 看什么指标 | 预期 |
|---|---|---|
| 用数据选方向：核心词 **KD < 20、月搜索量 > 500、相关词 > 100**（[01](../01-keyword-research/)） | 候选词表有 50 个左右，选出 5 个核心词 | 还没有流量，这个阶段决定了天花板 |
| 选域名（短、清楚、品牌化），www 和裸域 301 合一，博客放在 `/blog`（[03](../03-technical-seo-and-infra/)） | `curl -I` 检查所有变体都一跳到达主域名 | — |
| 按"一页一词"搭建页面：首页 + 核心场景页，用高转化页面模板（[02](../02-page-structure-and-tags/)） | auditor 分数 **≥ 90**；`onpage-*` 和 `tech-*` 全部通过 | — |
| SSR/SSG、sitemap、robots、canonical、OG、JSON-LD | `tech-ssr-content`、`tech-xml-sitemap`、`serp-structured-data` 通过 | — |
| 性能达标，Cloudflare 分层配置好 | Lighthouse 移动端 **≥ 90**；LCP ≤ 2.5s | — |
| 装好 GA4 / Plausible，以及 GSC 和 Bing；配置域名邮箱（SPF / DKIM / DMARC）；跑通支付 | `analytics-installed`、`indexing-gsc` 通过；测试支付成功 | — |
| 准备发布素材包（slogan、介绍、Logo、约 5 张图、视频、FAQ），开好 X 账号 | 素材包齐全 | — |

### 第 1 周：上线周

| 做什么 | 看什么指标 | 预期 |
|---|---|---|
| 在 GSC 和 Bing 提交 sitemap，核心页面"请求编入索引"；接入 IndexNow；面向中文用户的话加上百度等后台 | sitemap 状态"成功"；已编入索引的页面数 | 品牌词和首页通常几天内被收录 |
| 在 Product Hunt、Hacker News（Show HN）、Uneed、BetaList 等平台发布（[07](../07-launch-and-distribution/)） | 每个平台的 listing URL；引荐会话；注册数 | 流量主要来自发布平台，是一波脉冲 |
| 第一轮目录提交：10 个以上 AI / SaaS 目录，描述不用模板，类目选对（[05](../05-backlinks/)） | 上线的 listing 数量；实测的 `rel` 属性 | 外链开始出现在 GSC 的链接报告里，有延迟 |
| 在 X、独立开发社区发 build in public 帖子（[08](../08-x-and-reddit/)） | 互动量、引荐点击 | — |

### 第 1 个月：建立信任

| 做什么 | 看什么指标 | 预期 |
|---|---|---|
| 外链阶段 1：目录、发布平台、少量社区分享，**来源类型要分散** | 引用域名（RD）数量；DR 从 0 慢慢到 10 左右 | 不要追 DR |
| 写 5–10 篇深度文章 / 场景页（四类常青内容），再写竞品替代品页（[04](../04-content-and-eeat/)） | 已发布数；每篇都有第一手素材 | 长尾词开始有**展示**，点击很少 |
| 新站每周看一次 GSC 的"网页索引编制"报告 | "已抓取 – 尚未编入索引"的数量逐步减少 | — |
| GEO 基线：定下 10–20 条固定 prompt，跑第一轮（[06](../06-geo-ai-search/)） | 提及率、引用率（基线） | 大概率还是 0 |
| 和首批用户聊天，收集反馈并迭代 | 反馈记录、更新日志 | — |

### 第 3 个月：开始起量

| 做什么 | 看什么指标 | 预期 |
|---|---|---|
| 从 GSC 找出排名 11–30 的词，用"5 篇文章法"集中推 | 这些词的平均排名 | **Google 通常在这时开始带来稳定的自然流量** |
| 外链阶段 2：场景文章、可引用的资产（模板 / Prompt 库 / 参数表）、builder story | RD 增速；品牌词展示量 | DR 大约 10–20 |
| 内容更新 SOP：补 FAQ、改写低点击率的标题和描述 | GSC 点击、点击率；进入前 10 的词数 | 至少 1 个核心词进入前 3 |
| 验证产品：留存 **D1 ≥ 40%、D7 ≥ 20%、D30 ≥ 10%**；每次访问带来的收入对比关键词 CPC | 留存分组数据、付费率 | 留存不达标就先改产品，SEO 流量不会复利 |

### 第 6–12 个月：复利期

| 做什么 | 看什么指标 | 预期 |
|---|---|---|
| 外链阶段 3：来自被提及的自然外链、客座文章、采访；每个大版本重新发布一次 | 自然获得的 RD 占比；DR **20–40** | 外链从"主动去建"变成"被动获得" |
| 扩充到 50 个以上的页面；开始挑战 KD 30–50 的词；谨慎做程序化页面（每一页都要有独立价值） | 自然会话、注册数、带来转化的着陆页 | 自然流量成为主要渠道之一 |
| 每季度做一次内容复盘：合并内耗页面、更新过时内容、清理单薄页面 | 有展示的页面占比 | — |
| 每月做一次 GEO 测试，补上被竞品抢走引用的那部分内容 | 提及率、引用率、AI 引荐流量 | AI 推荐开始出现 |
| 留存和付费率都达标之后，再考虑 KOL 和付费投放（[12](../12-monetization/)） | CAC、回本周期 | — |

---

## 4. 30 条最重要的原则

1. **先有搜索需求，再有页面**：每个页面都要对应一个真实的查询（工具数据或搜索框联想词）。
2. **一页一词**：一个主关键词只对应一个 URL，用规划表防止多页争同一个词。
3. 新站从 **KD < 20、月搜索量 > 500** 的词起步，有了外链基础再挑战 KD 30–50。
4. **页面类型跟着 SERP 走**：Top 10 是教程就写文章，是工具页就做工具页。
5. 做不到第一就继续缩小范围：流量向第一名集中，第二名以后能分到的很少。
6. 选词先看 7 / 30 / 90 天和 5 年的趋势：选平稳或上升的词，不追一次性的尖峰。
7. **核心价值不设门槛**：主要功能免登录就能用，内容不锁在注册或付费墙后面。
8. 每个页面的 title 都不一样（主关键词靠前，中文 ≤ 30 字 / 英文 ≤ 60 字符），description 也每页单独写。
9. 每个页面**只有一个 H1**，用大白话写清楚"它能做什么"，不用"赋能""重新定义"这类词。
10. 每个可索引页面有一个自引用的绝对 canonical；www / 裸域、http / https **一跳 301** 合一。
11. **正文必须在 HTML 源码里**（SSR/SSG），Googlebot 和 AI 爬虫都依赖它。
12. sitemap 只放希望被收录、返回 200 的规范 URL，`lastmod` 写真实日期；robots.txt 要声明 Sitemap。
13. 上线当天就验证 GSC 和 Bing 并提交 sitemap，新站每周看一次索引报告。
14. Core Web Vitals 要达标：**LCP ≤ 2.5s、INP ≤ 200ms、CLS ≤ 0.1**。
15. Cloudflare 分层配置：营销页 HTML 走边缘缓存；API、认证接口、回调不缓存；花钱的接口加限流。
16. 结构化数据只标记页面上**能看到的真实信息**，绝不伪造评分和评论。
17. 博客放在子目录 `/blog`；首页链到重要子页面，分类页链到所有子页面，不留孤儿页。
18. **站在用户的角度写内容**：写用户最关心的 10 个问题，不写你的技术架构。
19. 每篇支柱文章至少有一个**第一手证据**：截图、数字、踩过的坑、"不适合谁"。
20. AI 可以起草，但**不能直接发布原稿**；规模化灌水会导致整站被降权。
21. 用"5 篇文章法"集中火力，推一个已经排在 11–30 名的长尾词。
22. 每月根据 GSC 查询词更新内容、改写点击率低的标题；**只有内容真的改了才更新日期**。
23. **外链是信任票，不是权重果汁**：来源多样比数量重要，RD 比 DR 重要。
24. 对独立开发者来说，DR 20–40 已经够用了；真正的 KPI 是排名、自然流量和转化。
25. 评估一条外链，要把四个要素一起看：**DR、相关性、真实流量、dofollow**。
26. 外部锚文本以品牌词和 URL 为主，精确匹配的关键词锚文本只占少数。
27. 每次发布（上线、大版本、新功能）都是一次新的提及机会；先做低成本渠道，再考虑付费渠道。
28. **答案先行**：H1 下面第一段用 ≤ 80 个词直接给出结论，每个小节都能单独被引用。
29. 放行 AI 搜索爬虫，确保被 Bing 收录，每月用固定 prompt 测一次自己有没有被 AI 引用。
30. SEO 要按季度来算：大约 3 个月起量，期间用社交渠道拿早期流量，用留存数据验证产品。

---

## 5. 过时做法 vs 2026 做法

| 主题 | 过时做法（原文里出现过，或者行业常见的老说法） | 2026 做法 | 详见 |
|---|---|---|---|
| 关键词密度 | 密度保持在 2%–8%；description 里关键词出现约 3 次 | 关键词在 title、H1、首段、description 里各自然出现一次，用同义词和相关实体覆盖主题 | [02](../02-page-structure-and-tags/)、[04](../04-content-and-eeat/) |
| meta keywords | 每页必须写 3–5 个 | Google 忽略，Bing 大幅降权；只在面向百度时可写可不写 | [02](../02-page-structure-and-tags/) |
| FAQ / HowTo 富结果 | 加 FAQ schema 抢占 SERP 上的折叠问答位；加 HowTo 标记 | 2023 年起 FAQ 富结果只给权威的政府和健康网站，HowTo 已经停止展示；FAQ 内容保留下来，用于语义理解和 AI 引用 | [02](../02-page-structure-and-tags/)、[06](../06-geo-ai-search/) |
| AI 内容 | 用"去 AI 味"工具把 GPTZero 分数压到 40% 以下就发 | Google 看质量不看来源；加入第一手信息，人工审核；避开"规模化内容滥用" | [04](../04-content-and-eeat/) |
| DR 迷信 | 把 DR 当 KPI，追求 DR 快速上涨 | 看引用域名的多样性、相关性和真实流量；KPI 是排名、流量和转化 | [05](../05-backlinks/) |
| 购买外链 | 批量外链包、PBN、按 DR 定价的客座文章 | 付费只买"审核收录 + 曝光 + 归类"（目录本身要有真实用户）；买卖传递 PageRank 的链接违反政策 | [05](../05-backlinks/) |
| 只做 Google | 只盯着蓝色链接的排名 | 同时做 GEO：放行 AI 爬虫、确保 Bing 收录、答案先行、站外讨论、每月 prompt 测试 | [06](../06-geo-ai-search/) |
| 只做百度 | 中文 SEO = 百度 SEO | 全渠道 SEO：小红书、抖音、知乎、B 站、微信搜一搜都是搜索入口；百度上主攻品牌词 | [01](../01-keyword-research/)、[09](../09-xiaohongshu/)、[10](../10-douyin-video-wechat/) |
| 屏蔽 AI 爬虫 | 在 Cloudflare 里一键屏蔽所有 AI bot | 营销内容对 AI 搜索和训练爬虫放行，只对 API 和应用路径做限流 | [03](../03-technical-seo-and-infra/)、[06](../06-geo-ai-search/) |
| 交互指标 | FID | 2024 年 3 月起改为 **INP**（≤ 200ms） | [03](../03-technical-seo-and-infra/) |
| GSC 设置 | 在后台设置首选域名、配置 URL 参数 | 这两个功能都已下线；改用 301 + canonical + noindex | [03](../03-technical-seo-and-infra/) |
| 代码压缩 | 开启 Cloudflare Auto Minify | 这个功能已经下线；改在构建阶段压缩 | [03](../03-technical-seo-and-infra/) |
| 查外链 | 用 Google 的 `link:` 指令 | 这个指令早已停用；改用 Ahrefs / Semrush / Moz 和 GSC 的链接报告 | [05](../05-backlinks/) |
| 域名 | 用完全匹配域名、买过期域名来借权重 | 用品牌化、好记的域名；"过期域名滥用"已被写进 Google 的政策 | [03](../03-technical-seo-and-infra/) |
| 寄生内容 | 在高权重平台上用关键词堆砌的帖子、借别人网站发不相关内容 | 在平台上发自己的原创内容没问题；借权重属于"网站声誉滥用" | [04](../04-content-and-eeat/) |
| 长文分页 | 超长文章分成多页，每页单独写描述 | 一页写完，配目录锚点 | [04](../04-content-and-eeat/) |
| sitemap lastmod | 每次构建都把所有 URL 的日期改成今天 | 写真实的修改日期，否则会被搜索引擎忽略 | [03](../03-technical-seo-and-infra/) |
| X 卡片调试 | 用 Twitter Card Validator 预览 | 这个工具已经不提供预览；在发帖框里直接看 | [02](../02-page-structure-and-tags/) |

---

## 来源

- [SEO经验分享](https://lownrain.feishu.cn/wiki/B2MLwCgXBisanqkZNyCcXDP6nqh)（独立开发前线｜SEO从0到100）
- [通过SEO打造自然增长产品](https://lownrain.feishu.cn/wiki/T3mnwUqeRiqfOyk8XBBc2zmHnpf)（独立开发前线｜SEO从0到100）
- [产品上线TodoList](https://lownrain.feishu.cn/wiki/FHOCwhu0uii39nkFwuVcaVLenSe)（独立开发前线｜SEO从0到100）
- [SEO优化SOP](https://lownrain.feishu.cn/wiki/LpunwNX0citrl1kmB5TcIDJAnU5)（独立开发前线｜SEO从0到100）
- [海外博客精华](https://lownrain.feishu.cn/wiki/Ry3Gwhjm4i06wbkUEu2cBdJyn7c)（独立开发前线｜SEO从0到100）
- [SEO博客](https://lownrain.feishu.cn/wiki/Y6VuwpuuGidf6pkS4oRcPCfenph)（独立开发前线｜SEO从0到100）
- [如何获取流量？SEO依然是性价比最高的方式](https://lownrain.feishu.cn/wiki/SXgew9A8jihj2uk4oMlcRCZYnUb)（独立开发前线｜SEO从0到100）
- [获取流量的最有效方式就是成为TOP1](https://lownrain.feishu.cn/wiki/MWv9wFf4liIQ8sk1qtIct7zQnlh)（独立开发前线｜SEO从0到100）
- [给新手独立开发者的建议](https://lownrain.feishu.cn/wiki/Yj5QwQGv4iQ6LmkihUKcUKYsnLe)（独立开发前线｜SEO从0到100）
- [外链建设策略](https://lownrain.feishu.cn/wiki/Lx9CwNJ0HiiJ4kki1XCcLmhnngr)（独立开发前线｜SEO从0到100）
- [GEO](https://lownrain.feishu.cn/wiki/L7VTwkIxRitca7kIQNAc4n7nnHg)（独立开发前线｜SEO从0到100）
- [推特是独立开发者最值得经营的社交媒体平台](https://lownrain.feishu.cn/wiki/WaQVw7ktYiP4S7kSbssc89tan8d)（独立开发前线｜SEO从0到100）
- [出海产品推广方案](https://lownrain.feishu.cn/wiki/JIDxwzVjBiLMbFkvBcociSllnEb)（独立开发前线｜SEO从0到100）
- [网站加速和防攻击](https://lownrain.feishu.cn/wiki/HFt6wEYNOiVdWSk9pBfc5GaSnwb)（独立开发前线｜SEO从0到100）
- [什么样的文章容易获得排名](https://lownrain.feishu.cn/wiki/QMDhwR8QOifSxvkhmzTcPC06nrb)（独立开发前线｜SEO从0到100）
