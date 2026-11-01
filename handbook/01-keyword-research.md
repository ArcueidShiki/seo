# 关键词研究与选题

> 一句话：**先有搜索需求，再有页面**。Google 给页面排名，不给"网站"排名。所以每个值得做的关键词都应该对应一个专门的页面，页面类型也要和搜索结果页（SERP）上已经在排名的内容对得上。
>
> 相关 Checklist 条目：`onpage-keyword-placement`（关键词出现在 title / H1 / description / 开头段落）、`onpage-title`、`onpage-h1`。其余关键词条目需要在 [Checklist 工具](../../tool/) 里人工勾选。

---

## 1. 关键词在增长飞轮里的位置

一个好词就是一个新的流量入口。原知识库把它描述成一个循环：

```text
找到词 → 做页面/内容 → 拿到排名 → 进来流量 → 有动力继续优化 → 排名更稳 → 再找下一批词
```

几个贯穿全书的推论：

- **一页一词**：一个页面只服务一个主关键词（加上它的近义词和长尾），避免多个页面争同一个词（关键词内耗 / cannibalization）。
- **垂直优先**：在一个细分领域里，核心词和长尾词都比较好找。领域越模糊（比如"AI 文生图"），越难找到能赢的词；领域越具体（比如"AI 婚纱照"），用户画像、需求和付费意愿都更清楚。
- **懂行才能发现词**：像 "TTS" 这样的行业缩写，或者某个突然爆火的网页小游戏名，只有长期关注这个领域的人才看得到。方法是持续跟踪同领域网站，拆解它们的流量词。
- **做不到第一就继续缩小范围**：流量高度集中在头部，所以宁可在更窄的话题里做到第一，也不要在大词里排第十五（见 [13 章](../13-mindset-and-case-studies/)）。

---

## 2. 选词门槛：几套数字，各管一种场景

原知识库里出现了好几套门槛，它们**不矛盾，只是适用阶段不同**：

| 场景 | KD（难度） | 月搜索量 | 其他条件 | 出处 |
|---|---|---|---|---|
| **选新产品 / 新站方向**（DR≈0 的全新域名） | **< 20**（约等于进前 10 只需要不到 10 个外链） | **> 500** | 相关关键词 **> 100** 个，方便以后扩展页面；搜索量接近 0 的直接放弃（那等于要自己教育市场） | 《通过SEO打造自然增长产品》 |
| **给已有产品定 5 个核心词** | **< 50**（理想值） | **≥ 1,000**（理想值） | 和产品高度相关；难度要高低搭配，**至少 1 个词能较快冲进前 3**，用来拿到第一批流量 | 《如何找到有潜力的关键词》 |
| **文章 / 长尾选题** | 不设硬门槛，看 SERP | 可以很低（几十到几百） | 意图明确、产品能自然出现、Top 3 内容单薄；5 项检查至少 3 项通过（见 [04 章](../04-content-and-eeat/)） | 《如何选内容主题》 |
| **已有站点"差一口气"的词** | 不看 KD | 有一定曝光 | GSC / Bing 里已经有曝光、平均排名大约 **11–30** 的查询词，最容易推上去 | 《如何利用内链优化SEO排名》 |
| **判断词的商业价值** | — | — | 用关键词的 **CPC** 估算流量价值。例如 CPC $0.5 × 每天 100 次访问 ≈ 每天 $50，如果实际收入达不到这个数，说明付费转化率还要优化 | 《给新手独立开发者的建议》 |

怎么理解这几个数字：

1. **KD 主要根据排名页面拥有的外链数量来计算**，所以全新域名要从 KD 很低的词开始。等有了 DR 20–40 的外链基础（见 [05 章](../05-backlinks/)），再去碰 KD 30–50 的词。
2. **不同工具的 KD 和搜索量不能直接比较**。Ahrefs 和 Semrush 的 KD 算法、数据库都不一样，同一份关键词表里要固定用一个工具的数据，换工具时要重新校准。
3. Ahrefs 里有一个很有用的字段叫 **Parent Topic**：如果某个候选词的父主题和你已有页面的主词一样，就把它并进已有页面，不要再单独开新页。
4. 再看一眼 **CPS（每次搜索带来的点击数）**：CPS 很低说明广告、精选摘要或 AI 概览拿走了大部分点击，同样的搜索量实际能分到的流量更少。（"CPS < 1 就降低优先级"是经验判断，原文只给了定义。）

> ⚠️ **2026 更新**：Google AI Overviews / AI Mode 普及之后，纯定义类、信息类查询（例如 "what is X"）的点击率明显下降。选词时可以给 **任务型、工具型、对比型、场景型** 的词更高权重，因为这类查询的用户仍然需要点进来"把事做完"。信息类内容依然值得写，但主要目的变成了被 AI 引用（见 [06 章](../06-geo-ai-search/)）。

---

## 3. 标准工作流：从一个种子词到 5 个核心词

1. **确定方向种子**：从产品的核心功能出发，例如 `text to speech`。
2. **扩词**：
   - Google 搜索框的自动补全、结果页底部的"相关搜索"；
   - 让 LLM 列出相关词、同义词和用户会问的问题；
   - Semrush / Ahrefs 的相关关键词（Related / Matching terms）。
3. **三层扩展**（从产品核心往外扩）：

   | 层级 | 形式 | 例子 | 适合做成 |
   |---|---|---|---|
   | L1 核心词 | 产品是什么 | `ai poster generator`、`pdf to excel`、`text to speech online` | 首页 / 工具页 |
   | L2 场景词 | 核心词 + 场景 / 人群 / 平台 | `ai poster generator for marketing`、`bank statement pdf to excel`、`text to speech for youtube` | 场景落地页、文章 |
   | L3 问题 / 对比 / 教程词 | best…、how to…、X vs Y、…accuracy | `best ai poster generator for instagram ads`、`how to convert bank statement pdf to excel` | 文章（最适合写内容） |

4. **竞品反查**（见第 9 节）：拆解同领域网站和流量暴涨网站的流量词。
5. **建表**：把大约 50 个候选词放进一张表，补全搜索量、KD、趋势、相关度和数据来源。
6. **打分选词**：按第 2 节的门槛选出 **5 个核心词**，其余作为长尾储备。
7. **逐个做 Top-10 SERP 分析**（第 6 节），决定能不能做、做成什么页面类型。
8. **写进"一页一词"规划表**（第 8 节），然后再开始建页面。
9. **持续跟踪**：给核心词设置排名追踪（GSC 效果报告或排名工具），每周记录一次。两天没动静不要放弃，SEO 是以月为单位的工作。

---

## 4. 挖掘上升趋势词：词根法 + Google Trends

新词的竞争还没形成，是新站最容易赢的地方。

**词根法**：把通用词根和主题词组合起来。

```text
通用词根：generator / maker / editor / converter / remover / checker / tool / free / online / ai / template
主题词  ：image / poster / video / pdf / logo / voice / resume ...
组合示例：ai image editor / ai image generator / free ai image maker / pdf to excel converter
```

**操作步骤**

1. 在 [Google Trends](https://trends.google.com/trends/) 里搜索词根本身（比如 `generator`），切到"相关查询 → **飙升（Rising）**"。
2. 依次查看 **过去 7 天 / 30 天 / 90 天** 的结果。最近才开始上升的词 = 非常新 = 机会最大。
3. 每个候选词再看 **12 个月和 5 年** 的曲线：**持平或者稳步上升 → 通过**；一次性尖峰后快速回落 → 大概率是一阵风，放弃（例如当年的指尖陀螺）。
4. 季节性词（节日、开学季、报税季）要按季节提前 1–2 个月准备页面。

**竞品暴涨法**：在 [traffic.cv](https://traffic.cv/) 的流量趋势榜上找最近流量突然增长的网站，再用 Semrush / Similarweb 看它们新进入排名的词。这些词通常是 **新出现的或者比较容易做的热词**。建议每月看一次，记录下来。

---

## 5. 用基准词估算搜索量

Google Trends 只给相对指数，不给绝对搜索量。可以找一个**已知搜索量的基准词**来换算：

```text
估算搜索量(目标词) ≈ 基准词搜索量 × (目标词 Trends 指数 ÷ 基准词 Trends 指数)

例：基准词 "tts" ≈ 280k/月
    Trends 中 "ai image editor" 的平均指数约为 "tts" 的 1/6
    → ai image editor ≈ 280k ÷ 6 ≈ 47k/月（Semrush 显示约 50k，两者基本吻合）
```

注意事项：

- 目标词和基准词要放在 **同一次 Trends 对比** 里（最多 5 个词），地区和时间范围也要一致。
- 基准词要选含义明确的词，不能是多义词。
- **至少交叉验证两个来源**：Trends 换算值、Semrush / Ahrefs 搜索量、Google Keyword Planner 给出的区间（例如 10K–100K）。Keyword Planner 在 Google Ads 里可以免费使用，只给区间，但作为参考已经够用。
- 中文市场用 [百度指数](https://index.baidu.com/)、360 趋势、头条指数替代 Google Trends。小红书、抖音、微信的搜索框联想词本身就是站内需求清单（见 [09](../09-xiaohongshu/)、[10 章](../10-douyin-video-wechat/)）。

---

## 6. Top-10 SERP 分析：七条判断规则

数据只能告诉你"有没有人搜"，**能不能做要看实际的搜索结果页**。下面的规则来自原文的总结，再补充了两条（广告密度、能否超越）：

| # | 看什么 | 信号 | 结论 |
|---|---|---|---|
| 1 | 排名网站的构成 | 全是大品牌 / 权威站 | 新站避开 |
| | | 大站和小站、博客混排 | 可以做 |
| | | 很多不知名的小站 | 高质量机会："垃圾站都能排上去的词，不是难词" |
| 2 | 结果和关键词是否对口 | 前 10 里有明显不是为这个词写的页面 | Google 在"凑数"，一个精准对口的页面就能挤进去 |
| 3 | 论坛结果 | Reddit / Quora / 论坛出现在前 5 | 商业内容供给不足、需求没被满足 → 适合独立站 |
| 4 | Top 3–5 是否专门为这个词而写 | Title 是否完整包含关键词、H1 是否直接命中、目录是否围绕它展开 | 如果只是顺带提到、堆砌或者结构散乱 → 你可以写一个更聚焦的页面 |
| 5 | 内容是否真正解决问题 | 看有没有步骤、对比、场景和明确结论，不看字数 | 又长又空的页面能排上来，往往是"老页面 + 外链"撑着，可以超越 |
| 6 | 页面类型（意图） | 教程 / 清单为主 vs 工具页 / 落地页为主 | 页面类型必须和 SERP 一致（见第 7 节） |
| 7 | "SEO 农场"特征 | 模板化标题（Best XXX in 2025 \| Top XX Tools）、结构雷同、没有作者和真实案例 | 要么很难，要么是纯 SEO 战场 → 改打更长尾的词 |
| + | 顶部广告数量 | 首页广告很多 | 付费竞争激烈，优先选广告少的词 |
| + | 能否成为第一 | 列出你的页面会在哪些方面更好（深度、数据、工具、时效、案例） | 写不出"比现在第一名更好"的理由，就先不写 |

**案例：`ai image editor`**

- 前 10 全是工具页，其中很多是大站的内页，但有 3 个是 2023 年以后才上线的新站 → 新站有机会。
- 排名靠前的页面体验高度一致：打开就能上传图片，AI 直接编辑。
- 可以超越的方向：完全匹配或高度相关的域名；更丰富的页面内容（使用场景、问答、教程、案例、用户评价）；免费可用；**不登录就能用**（降低跳出）；持续积累高 DR 外链。

把每个词的分析结果写成一行记录（排名站构成 / 对口程度 / 论坛 / 专门页 / 页面类型 / 农场特征 / 结论），先有记录再建页面。

---

## 7. 搜索意图 → 页面类型

| 意图 | 典型查询 | SERP 通常长什么样 | 你应该做的页面 |
|---|---|---|---|
| 交易 / 工具型 | `pdf to excel`、`ai headshot generator`、`remove watermark` | 工具首页、落地页 | **产品页 / 工具页**（打开即用，首屏就是功能） |
| 教程型 | `how to convert bank statement pdf to excel` | 教程文章、视频 | **How-to 文章**，产品作为其中一个步骤出现 |
| 对比 / 选型 | `best ai poster generator`、`X vs Y`、`X alternatives` | 清单文、对比文 | **对比页 / 替代品页**（表格 + 诚实结论） |
| 问题排查 | `why X doesn't work`、`X not working` | 论坛、帮助文档 | **问题解决型文章**（原因 → 修复步骤） |
| 场景方案 | `text to speech for faceless youtube channel` | 混合 | **场景落地页或文章**（"X for 某类人 / 某平台"） |
| 导航 / 品牌 | `yourbrand`、`yourbrand login` | 官网 | 首页、登录页；保证品牌词搜索结果第一位是你自己 |

规则很简单：**Top 10 是教程和清单，就别拿产品页去硬拼；Top 10 是工具页，就别只写一篇文章。**

---

## 8. "一页一词"规划表模板

复制下面的表格到你的表格工具里，每行对应一个页面：

| 主关键词 | 意图 | 月搜索量（来源） | KD | 趋势 | SERP 结论 | 页面类型 | 目标 URL | Parent Topic / 合并到 | 次要词 | 状态 |
|---|---|---|---|---|---|---|---|---|---|---|
| ai poster generator | 工具 | 12k（Semrush）/ 10K–100K（KP） | 38 | 平稳上升 | 工具页为主，有 2 个新站 | 产品页 | `/` | — | free ai poster maker | 已上线 |
| instagram poster size | 信息 | 1.9k（Ahrefs） | 8 | 平稳 | 清单 + 论坛，Top 3 很薄 | 指南文章 | `/blog/instagram-poster-size` | — | instagram post dimensions | 写作中 |
| how to make posters in bulk | 教程 | 300（Trends 换算） | 5 | 上升 | 教程少，论坛多 | How-to | `/blog/bulk-poster-generation` | — | batch poster design | 待写 |
| canva alternative for posters | 对比 | 900 | 22 | 平稳 | 清单文为主 | 替代品页 | `/alternatives/canva` | — | canva vs … | 待写 |

> 表中数字是示例，不是真实数据。

检查要点：

- 同一个主关键词只能出现一次（不允许两个页面争同一个词）。
- 目标 URL 的 slug 要能反映关键词（见 [02 章](../02-page-structure-and-tags/)，对应 `tech-clean-urls`）。
- 每个产品功能至少对应一个"把功能翻译成搜索问题"的页面（第 10 节）。

---

## 9. 竞品词：alternatives / vs / coupon / free

竞品的品牌词也是流量来源，用户在搜这些词的时候往往已经准备好要做选择了。

| 页面类型 | URL 示例 | 内容要点 |
|---|---|---|
| 替代品页 | `/alternatives/magnific-ai` | 用户为什么要找替代品（价格、限制、地区）→ 多个选项的对比表（包括你自己）→ 诚实的推荐结论 |
| 对比页 | `/compare/x-vs-y` | 功能 / 价格 / 适合人群的对比表，写清楚各自更适合什么人 |
| 免费 / 优惠页 | `/blog/free-x-alternatives`、`/blog/x-coupon` | 免费额度、开源替代、优惠信息 |
| 趋势长尾 | `/blog/free-ai-image-upscalers-2026` | 带年份的盘点，**每年更新**，不要只改标题里的年份 |

**怎么找竞品词**

- 用 Semrush / Ahrefs 查同领域 3–5 个网站的 Organic Keywords 和 Top Pages，找出它们有排名而你没有的词（content gap）。
- 关注流量正在暴涨的网站（第 4 节），看它们的新增词。
- 没有领域积累的话，可以在 [whoismaking.money](https://whoismaking.money/zh) 上找公开收入的产品当对标，拆解它们的关键词。

> ⚠️ **2026 更新**：对比页要**写真实信息**，不要贬低竞品，也不要冒用对方商标做落地页标题党。优惠页只写你确实能核实的信息。AI 搜索引擎更愿意引用中立、有对比表、写明"什么情况下不适合用我们"的对比内容（见 [06 章](../06-geo-ai-search/)）。

---

## 10. 长尾策略

1. **10 个精准小题 > 1 个模糊大题**。长尾词搜索量低，但目的明确，转化率更高。
2. **把功能翻译成搜索问题**：

   | 产品功能 | 用户会搜什么 |
   |---|---|
   | 批量生成 | how to generate posters in bulk |
   | 高清导出 | poster resolution for printing |
   | 多平台尺寸 | instagram poster size guide |
   | 商用授权 | can ai-generated posters be used commercially |

3. **先吃"差一口气"的词**：从 GSC / Bing Webmaster 导出有曝光、平均排名在 11–30 的查询，挑和产品相关的长尾词，用"5 篇文章法"把它们推上去（见 [04 章](../04-content-and-eeat/)）。
4. **程序化页面**：工具站可以给每个功能词、格式组合（`<format> to <format>`）、模板类型各做一个页面，并且根据竞品的关键词缺口持续补充。
5. **全平台长尾**：中文用户也会在知乎、B 站、抖音、微信、小红书里搜索。每个平台都用它自己的搜索框联想词做一份长尾清单，在平台内发布原生内容，再把流量引回产品（见 [09](../09-xiaohongshu/)、[10 章](../10-douyin-video-wechat/)）。

> ⚠️ **2026 更新（程序化 SEO）**：Google 在 2024 年 3 月把"规模化内容滥用（scaled content abuse）"写进了垃圾内容政策。程序化页面只有在**每一页都有独立价值**的时候才安全，比如真实可用的工具、真实数据、独特示例。如果只是把关键词换个位置、套同一个模板批量生成，很可能会被整站降权。

---

## 11. 常见错误

| 错误 | 后果 | 正确做法 |
|---|---|---|
| 凭灵感选题，不查数据 | 写了没人搜 | 每个页面都要对应真实查询（工具数据或联想词） |
| 只看搜索量，不看 SERP | 拿产品页去拼教程 SERP，永远排不上 | 先做 Top-10 分析，再决定页面类型 |
| 新站直接打 KD 60+ 的大词 | 半年没有任何排名 | 新站从 KD < 20 开始，用长尾积累权重 |
| 多个页面争同一个词 | 互相分流，排名来回跳 | 维护"一页一词"规划表，按 Parent Topic 合并 |
| 追一次性热点 | 流量来得快去得也快 | 看 5 年趋势，选平稳或上升的词 |
| 两天没排名就放弃 | 错过 Google 通常需要的约 3 个月起量期 | 至少坚持一个季度，持续补内容和外链 |

---

## 12. 工具表

| 工具 | 用途 | 费用 |
|---|---|---|
| <img src="https://www.google.com/s2/favicons?domain=trends.google.com&sz=32" width="16" height="16" alt=""> [Google Trends](https://trends.google.com/trends/) | 上升词、趋势方向、相对搜索量 | 免费 |
| <img src="https://www.google.com/s2/favicons?domain=ads.google.com&sz=32" width="16" height="16" alt=""> [Google Keyword Planner](https://ads.google.com/home/tools/keyword-planner/) | 搜索量区间、发现新词 | 免费（需要 Google Ads 账号） |
| <img src="https://www.google.com/s2/favicons?domain=search.google.com&sz=32" width="16" height="16" alt=""> [Google Search Console](https://search.google.com/search-console/about) | 自己网站已有曝光的查询、"差一口气"的词 | 免费 |
| <img src="https://www.google.com/s2/favicons?domain=bing.com&sz=32" width="16" height="16" alt=""> [Bing Webmaster Tools](https://www.bing.com/webmasters) | 同上（Bing 数据）+ 关键词研究 | 免费 |
| <img src="https://www.google.com/s2/favicons?domain=semrush.com&sz=32" width="16" height="16" alt=""> [Semrush](https://www.semrush.com/) | 搜索量、KD、相关词、竞品关键词 | 付费；免费版每天约 10 次查询 |
| <img src="https://www.google.com/s2/favicons?domain=ahrefs.com&sz=32" width="16" height="16" alt=""> [Ahrefs](https://ahrefs.com/) | KD、Clicks、CPS、Parent Topic、竞品 Top Pages | 付费 |
| <img src="https://www.google.com/s2/favicons?domain=similarweb.com&sz=32" width="16" height="16" alt=""> [Similarweb](https://www.similarweb.com/) | 竞品流量规模和渠道构成 | 免费增值 |
| <img src="https://www.google.com/s2/favicons?domain=traffic.cv&sz=32" width="16" height="16" alt=""> [traffic.cv](https://traffic.cv/) | 网站流量查询、流量暴涨榜 | 免费查看 |
| <img src="https://www.google.com/s2/favicons?domain=neilpatel.com&sz=32" width="16" height="16" alt=""> [Ubersuggest](https://app.neilpatel.com/en/ai-keyword-overview) | 关键词、内容点子、竞品域名分析 | 免费额度 |
| <img src="https://www.google.com/s2/favicons?domain=lowfruits.io&sz=32" width="16" height="16" alt=""> [LowFruits](https://lowfruits.io/) | 找 SERP 里有弱站的低竞争词 | 付费 |
| <img src="https://www.google.com/s2/favicons?domain=moz.com&sz=32" width="16" height="16" alt=""> [Moz](https://moz.com/) | 网站和关键词数据 | 免费增值 |
| <img src="https://www.google.com/s2/favicons?domain=aitdk.com&sz=32" width="16" height="16" alt=""> [AITDK](https://aitdk.com/) | 浏览器插件，一键查看流量 | 免费 |
| <img src="https://www.google.com/s2/favicons?domain=sitedata.dev&sz=32" width="16" height="16" alt=""> [SiteData](https://sitedata.dev/zh-cn) | 浏览器插件，流量分析 | 免费 |
| <img src="https://www.google.com/s2/favicons?domain=trendsbar.net&sz=32" width="16" height="16" alt=""> [TrendsBar](https://trendsbar.net/zh) | 浏览器插件，在搜索结果页旁边显示趋势 | 免费 |
| <img src="https://www.google.com/s2/favicons?domain=explodingtopics.com&sz=32" width="16" height="16" alt=""> [Exploding Topics](https://explodingtopics.com/) | 发现新兴话题 | 免费增值 |
| <img src="https://www.google.com/s2/favicons?domain=index.baidu.com&sz=32" width="16" height="16" alt=""> [百度指数](https://index.baidu.com/) | 中文关键词热度和趋势 | 免费 |
| <img src="https://www.google.com/s2/favicons?domain=aizhan.com&sz=32" width="16" height="16" alt=""> [爱站网](https://www.aizhan.com/) | 百度生态的 SEO 数据 | 免费增值 |
| <img src="https://www.google.com/s2/favicons?domain=chinaz.com&sz=32" width="16" height="16" alt=""> [站长之家 SEO](https://seo.chinaz.com/) | 百度生态的 SEO 数据 | 免费增值 |
| <img src="https://www.google.com/s2/favicons?domain=whoismaking.money&sz=32" width="16" height="16" alt=""> [whoismaking.money](https://whoismaking.money/zh) | 公开收入的产品清单，用来找对标 | 免费 |

> 原文给的价格是作者撰写时的快照（例如 Semrush $99.95/月起、Ahrefs $99/月起），**请以官网当前价格为准**。

---

## 来源

- [SEO关键词研究策略](https://lownrain.feishu.cn/wiki/Rn58w7M9iiIwVbkdev7cfJFknAd)（独立开发前线｜SEO从0到100）
- [如何找到有潜力的关键词](https://lownrain.feishu.cn/wiki/XtlgwkEkmiN0uWkG800cujRvnEe)（独立开发前线｜SEO从0到100）
- [如何选内容主题](https://lownrain.feishu.cn/wiki/L3puwoNS3imyg7kyhDbcA7Ffngh)（独立开发前线｜SEO从0到100）
- [关键词研究](https://lownrain.feishu.cn/wiki/STTgwwwfKiP6hHk87gtcW0rSnXd)（独立开发前线｜SEO从0到100）
- [网站/关键词流量查询](https://lownrain.feishu.cn/wiki/Vp9hww9hiifABkkytd5cxrKxnzd)（独立开发前线｜SEO从0到100）
- [Ahrefs Seo名词](https://lownrain.feishu.cn/wiki/QpsGwfHUkiF08hkLqcxc2lRQnGh)（独立开发前线｜SEO从0到100）
- [通过SEO打造自然增长产品](https://lownrain.feishu.cn/wiki/T3mnwUqeRiqfOyk8XBBc2zmHnpf)（独立开发前线｜SEO从0到100）
- [寻找小众市场做出自己产品的七个步骤](https://lownrain.feishu.cn/wiki/DA5nwtLEoiE7yDkFPjgcqMwPnme)（独立开发前线｜SEO从0到100）
- [SEO经验分享](https://lownrain.feishu.cn/wiki/B2MLwCgXBisanqkZNyCcXDP6nqh)（独立开发前线｜SEO从0到100）
- [如何利用内链优化SEO排名](https://lownrain.feishu.cn/wiki/M4Dtwgynwi4R5FkHXcjcZVeZnRb)（独立开发前线｜SEO从0到100）
- [给新手独立开发者的建议](https://lownrain.feishu.cn/wiki/Yj5QwQGv4iQ6LmkihUKcUKYsnLe)（独立开发前线｜SEO从0到100）
- [获取流量的最有效方式就是成为TOP1](https://lownrain.feishu.cn/wiki/MWv9wFf4liIQ8sk1qtIct7zQnlh)（独立开发前线｜SEO从0到100）
- [出海产品的推广策略](https://lownrain.feishu.cn/wiki/EgKEwabgAirGwRk5mOIcqvfanse)（独立开发前线｜SEO从0到100）
- [如何获取流量？SEO依然是性价比最高的方式](https://lownrain.feishu.cn/wiki/SXgew9A8jihj2uk4oMlcRCZYnUb)（独立开发前线｜SEO从0到100）
- [SEO满分网站赏析](https://lownrain.feishu.cn/wiki/X6P0wKg0OinqS7kCmzXcxaMlnkh)（独立开发前线｜SEO从0到100）
- [SEO优化SOP](https://lownrain.feishu.cn/wiki/LpunwNX0citrl1kmB5TcIDJAnU5)（独立开发前线｜SEO从0到100）
