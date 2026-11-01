# 内容与 E-E-A-T

> 一句话：**内容是最便宜、生命周期最长的获客渠道**。前提是三点：选题来自真实的搜索需求；内容是同领域里最好的那一篇；写的人看起来像真的做过这件事。
>
> 相关 Checklist 条目：`content-depth`、`content-eeat-signals`、`links-internal`、`links-anchor-text`、`links-external-citation`、`geo-answer-first`、`geo-faq-blocks`、`onpage-keyword-placement`。

---

## 1. 为什么要持续做内容

| 原因 | 说明 |
|---|---|
| 成本最低，寿命最长 | 一篇好内容能持续带来几个月甚至几年的流量，也能慢慢积累个人 IP |
| 头部通吃 | 流量向第一名高度集中（原文估算：第 1 名拿 70% 以上，第 2 名约 25%，其余分剩下的约 5%）。所以要在一个足够窄的领域里做到第一，做不到就继续缩小范围 |
| 每一篇都是一个触点 | 文章、视频、播客、目录收录、社区讨论都是用户心智里的"种子"，触点足够多，流量自然会汇聚到产品上 |
| 跟平台合作，不和平台对抗 | 你打不过平台，也成不了平台，那就用优质内容去换平台的免费流量 |
| 量变才有质变 | 原文作者的观察：10–20 篇几乎没有效果，同一个垂直领域写到 500–1,000 篇一定会有效果。增长曲线前期很平，大多数人在起飞之前就放弃了 |

**常见的失败原因**：主题太散；写的是开发者自己关心的话题，不是用户关心的；坚持时间太短。

**站在用户的角度写**：技术细节太多的文章只会吸引同行。比如做英语学习 App 的人，应该写"学习者最关心的 10 个问题"，而不是 App 的技术架构。

---

## 2. 如何选内容主题

SEO 内容只服务三类人：**已经遇到问题的人、正在找工具或方案的人、正在比较产品的人**。

**自测**：你自己会不会在搜索框里输入这个标题？不会就放弃。

### 2.1 选题检查表（5 问，至少 3 个"是"才写）

| # | 问题 | 怎么验证 |
|---|---|---|
| 1 | 真的有人搜吗？ | 关键词工具有数据，或者出现在搜索框的联想词里 |
| 2 | 第一页是内容型页面吗？ | 第一页是博客、教程、对比文，而不是工具页或落地页（后者说明交易意图强，别拿文章去硬拼） |
| 3 | 我能比 Top 3 写得更具体吗？ | Top 3 是不是很单薄：堆关键词、泛泛的开头、没有实操细节、没有真实截图。如果你看完的反应是"就这？"，那就写 |
| 4 | 产品能自然出现吗？ | 教程里产品是其中一个步骤；对比文里产品是选项之一；方案文里产品是实现方式。如果去掉产品文章反而更通顺，说明转化价值低 |
| 5 | 6 个月后还成立吗？ | 不依赖短期热点 |

选词和 SERP 分析的方法见 [01 章](../01-keyword-research/)。**优先写长尾、意图明确的小题**，例如 `how to convert bank statement pdf to excel`、`text to speech for faceless youtube channel`。

---

## 3. 四类常青内容

| 类型 | 标题模板 | 产品怎么出现 | 例子 |
|---|---|---|---|
| **How-to 教程** | How to [完成任务]（in N steps） | 作为其中一步的工具 | 如何把银行流水 PDF 转成 Excel |
| **X vs Y 对比** | X vs Y：差异、价格、适合谁 | 作为选项之一，诚实地写优缺点 | Canva vs ExampleAI 做电商海报 |
| **问题排查** | Why [X] doesn't work / [X] 失败的 5 个原因 | 作为其中一种修复方式 | 为什么 PDF 转 Excel 后表格会错位 |
| **场景方案** | [X] for [人群 / 平台] | 作为实现方式 | 给不露脸 YouTube 频道用的 TTS 方案 |

这四类需求稳定、衰减慢，也很适合互相做内链，组成内容矩阵。在规划表里给每篇文章标上类型，保证四类都有覆盖。

---

## 4. 内容结构模板

```markdown
# [主关键词] + 具体收获                      ← title 和 H1 都包含主关键词

开头 1–3 句直接给答案或结论（≤ 80 词），首段自然出现主关键词。   ← geo-answer-first
（如果有配图，放在首段之后，不要放在正文最前面）

## 目录（长文才需要）

## 是什么 / 为什么会遇到这个问题               ← 原因和背景
## 怎么做：Step 1 / Step 2 / Step 3            ← <ol>，每一步配真实截图
## 对比：方案 A vs B vs C                       ← 表格
## 常见错误与避坑                               ← 第一手经验最值钱的地方
## 常见问题                                     ← 3–6 个问句式 H3，每个答案第一句给结论   geo-faq-blocks
## 总结 + 下一步                                ← 再提一次主关键词；CTA 链接到产品页（描述性锚文本）

作者署名（链接到 /about）· 发布日期 · 更新日期 <time datetime="2026-10-20">   ← content-eeat-signals
```

**写作规范**

- 段落要短：移动端每段**约 100 个汉字以内**（3–4 行）。用"总-分-总"结构，不要大段堆字。
- 关键词的写法全文保持一致，不要一会儿写缩写一会儿写全称，好像它们是同一个词。
- 至少有 1 个视觉素材（截图、图表、短视频）。支柱文章可以加一个交互元素（计算器、小工具、可交互图表）。
- 至少引用 1 个权威的外部来源（官方文档、数据报告），对应 `links-external-citation`。
- 写之前先列一份"**超越清单**"：看完当前 Top 10，写下你的页面会在哪些方面更好（深度、数据、工具、时效、案例）。
- 用 Surfer SEO 这类工具检查一下术语覆盖度可以，但**不要为了凑分去堆词**。

---

## 5. 什么样的文章容易排名：哪些仍有效、哪些已过时

《什么样的文章容易获得排名》是百度时代的写作规则。逐条对照如下：

| 建议 | 2026 判断 |
|---|---|
| 标题新颖并符合搜索习惯；竞争激烈的词用长尾问句做标题 | ✅ 仍然有效 |
| 主关键词放在标题前半部分；中文标题不超过 30 个字 | ✅ 仍然有效 |
| 首段出现 1–2 次主关键词，结尾总结里再出现一次 | ✅ 有效，但只要自然出现即可 |
| 每张图都写 ALT，重要图片加图注 | ✅ 有效；ALT 应该描述图片本身（见 [02 章](../02-page-structure-and-tags/)） |
| 移动端段落不超过 100 字 | ✅ 仍然有效 |
| 图片放在首段之后，不要放在正文最上面 | ✅ 有效（对文字型文章而言） |
| 关键词密度 2%–8% | ⚠️ **过时**，容易变成堆砌，Google 早就不按密度计算了 |
| description 里关键词出现约 3 次 | ⚠️ **过时**，自然出现一次就够了 |
| 写 3–5 个 meta keywords | ⚠️ 只对面向百度的网站有一点作用，Google 忽略 |
| 超长文章分页，每页单独写描述 | ⚠️ 不推荐，长文用一页 + 目录锚点，分页会稀释信号 |
| 加粗部分关键词 | ⚠️ 作用很小，按可读性需要来加粗 |

---

## 6. 内链与主题集群："5 篇文章法"

### 6.1 三步打法

1. **挑词**：在 GSC 和 Bing Webmaster 里找你**已经有排名但比较靠后**、有一定搜索量的查询（平均排名约 11–30）。优先选具体、和产品相关的长尾词，例如"AI 生成小红书封面"，而不是"小红书封面"这种大词。
2. **围绕这个长尾词写 5 篇文章**，按漏斗结构做内链：

```text
  文章 2 ─┐
  文章 3 ─┼──（锚文本 = 长尾词）──▶ 文章 1 ──（锚文本 = 长尾词，dofollow，开头一次 + 结尾一次）──▶ 产品页
  文章 4 ─┤
  文章 5 ─┘
```

   - 文章 2–5 的权重先汇集到文章 1，再由文章 1 传递给产品页。不是每篇都直接链产品页，这样更自然，不像在操纵排名。最终结果是：文章 1 和产品页都能在这个长尾词上拿到排名。
3. **分发**：把这 5 篇文章发到尽可能多的平台上，平台上的链接指回文章 1 或产品页。

### 6.2 二次分发平台

| 平台 | 链接属性（原文） | 说明 |
|---|---|---|
| <img src="https://www.google.com/s2/favicons?domain=substack.com&sz=32" width="16" height="16" alt=""> [Substack](https://substack.com/) | 大多 follow | 对 SEO 很友好，也可以顺便做邮件订阅 |
| <img src="https://www.google.com/s2/favicons?domain=hashnode.com&sz=32" width="16" height="16" alt=""> [Hashnode](https://hashnode.com/) | follow | 技术文章必发；支持设置 canonical |
| <img src="https://www.google.com/s2/favicons?domain=dev.to&sz=32" width="16" height="16" alt=""> [Dev.to](https://dev.to/) | follow（原文） | 适合工具介绍；front matter 里可以写 `canonical_url` |
| <img src="https://www.google.com/s2/favicons?domain=blogger.com&sz=32" width="16" height="16" alt=""> [Blogger](https://www.blogger.com/) | follow | Google 自家产品，收录快 |
| <img src="https://www.google.com/s2/favicons?domain=wordpress.com&sz=32" width="16" height="16" alt=""> [WordPress.com](https://wordpress.com/zh-cn/) | 可控 | 适合做专门的 SEO 博客 |
| <img src="https://www.google.com/s2/favicons?domain=medium.com&sz=32" width="16" height="16" alt=""> [Medium](https://medium.com/) | **nofollow** | 不传递权重，但权威度高，能带曝光；"导入文章"功能会自动设置 canonical |
| <img src="https://www.google.com/s2/favicons?domain=v2ex.com&sz=32" width="16" height="16" alt=""> [V2EX](https://v2ex.com/) | nofollow | 权威度高，Google 收录快 |
| <img src="https://www.google.com/s2/favicons?domain=91wink.com&sz=32" width="16" height="16" alt=""> [独立开发前线](https://91wink.com/) | follow | 原文作者的社区 |

**发布顺序**（来自《SEO经验分享》）：**先在自己的网站上发布 → 当天在 GSC 提交，确立"首发"身份 → 等原文被收录之后，再把前约 70% 的内容转载到 Medium 这类高权威平台，文末链接回原文。**

> ⚠️ **2026 更新**
> - 链接属性会变。**每次发布后都在页面源码里检查 `rel` 的实际值**，原文标注的 follow / nofollow 只能作为参考。
> - 转载时尽量**设置 canonical 指向原文**（Hashnode、Dev.to、Medium 都支持），或者只发摘要加原文链接。否则转载的版本可能比你自己的原文排得更靠前。
> - 中文平台的打法（《如何为你的产品获取免费流量？》）：在知乎、豆瓣、简书写 ≥ 3,000 字、围绕一个关键词的原创长文，等它在百度排到首页之后再加上网站链接。思路仍然可用，但原文说的"关键词出现 ≥ 20 次"属于堆砌，不要照做。
> - 把**自己的原创内容**发到高权威平台没有问题。但是付费在别人的网站上发布和对方主题无关的内容来借权重，属于 Google 2024 年写进政策的"网站声誉滥用（site reputation abuse）"。

---

## 7. E-E-A-T 落地清单

E-E-A-T（Experience 经验、Expertise 专业、Authoritativeness 权威、Trustworthiness 可信）来自 Google 的搜索质量评估指南，"Experience"是 2022 年加进去的。**它不是一个单独的算法或排名因素**，而是一套评估框架，影响算法怎么判断"这份内容值不值得信任"。**可信是地基**。这套框架对纯 SEO 内容农场越来越不利，对有真实经验的个人和独立开发者有利。

| 维度 | 它问的是 | 页面上怎么体现 | 站外怎么体现 |
|---|---|---|---|
| **Experience 经验** | 你真的做过吗？ | 具体场景（什么时候、什么背景）；真实细节（限制、报错、反直觉的地方，例如"Ahrefs 免费版只显示 20 行"）；不完美的过程（失败、调整、取舍）；亲手截的图 | Build in public 的过程记录 |
| **Expertise 专业** | 你真的懂吗？ | 概念准确，不漏关键点，不做误导性简化（比如把 E-E-A-T 说成排名因素，或者不区分 YMYL）；内容由浅入深成体系；立场前后一致 | 长期在同一个垂直领域输出，不追每一个热点 |
| **Authoritativeness 权威** | 别人认可你吗？ | 被引用的数据、工具、案例（可以被引用的资产） | 被其他网站引用或提及；品牌词搜索量；社区里自然的讨论；作者在 Google、知乎、X、Reddit 上都能搜到 |
| **Trustworthiness 可信** | 能信你吗？ | 清楚的作者署名；关于页和联系页；没有自相矛盾；没有夸大的承诺；写明风险、不确定性和"不适合谁" | 一致的身份信息；真实评价 |

**落地检查**

- [ ] 每篇文章都有作者署名，链接到作者页或关于页。作者页上有可以验证的身份信息（社交账号、经历）。
- [ ] 有 **About** 和 **Contact** 页面，页头或页脚能进入，返回 200。
- [ ] 文章显示发布日期和更新日期（`<time datetime>`、`dateModified`）。auditor 的 `content-eeat-signals` 会检查"有 /about 页面 + 有可见日期"。
- [ ] 每篇支柱文章至少有 1 个第一手素材：原创截图、具体数字、真实的限制或失败经历。
- [ ] 涉及 YMYL（钱、健康、法律）的话题要有免责声明，写明风险，不夸大承诺。
- [ ] 至少有 1 个可以被引用的资产上线，例如免费工具、数据集、原创研究、模板库、参数对照表。
- [ ] 结构化数据：`Article.author` → `Person`，首页有 `Organization`（见 [02 章](../02-page-structure-and-tags/)）。
- [ ] 在 GSC 里每月跟踪一次品牌词的展示量，作为权威度的代理指标。

最后的检验：**如果我是读者，我会信这篇文章吗？**

---

## 8. AI 生成内容的规则

原知识库里关于 AI 内容的说法：

| 来源 | 说法 |
|---|---|
| 《如何利用内链优化SEO排名》 | 可以用 AI 起草，但要去掉"AI 味"（自己写几段，或者用改写工具）。作者认为被判定为 AI 写的内容一般排不好 |
| 《SEO经验分享》 | **绝不发布 AI 原稿**；用 GPTZero 检测，改到 AI 检测分 **< 40%** 再发；省钱的做法是 AI 起草 → 自己改 1 小时 → 找 Upwork 上约 $200/篇的专业写手改写 |
| 《SEO经验分享》 | 发布节奏是 **每 2–3 周 1 篇深度文章**；起步阶段先写约 **10 篇深度文章**（行业趋势、竞品 / 工具对比、客户案例），标杆是 Backlinko 那种带图表和专家观点的长文 |
| 《内容优化》 | 用 ChatGPT、Grok、Jasper、Copy.ai 起草，用 Surfer SEO 优化 |

> ⚠️ **2026 更新（这是一个有争议的点）**
> - Google 的官方立场是**看内容质量，不看是不是 AI 写的**。真正会被打击的是"规模化内容滥用"：不管用什么方式生成，只要是大量产出、没有价值、主要为了操纵排名的内容都算。
> - AI 检测器（包括 GPTZero）的误判率很高，**"< 40%"只能当作参考**，不要把它当成目标。为了骗过检测器去"洗稿"，并不会让内容变好。
> - 真正的分界线是**有没有第一手信息**：你自己的数据、截图、踩过的坑、明确的观点和取舍。AI 写不出这些东西，而 E-E-A-T 和 AI 搜索的引用看重的恰恰是这些（见 [06 章](../06-geo-ai-search/)）。
> - 抖音和小红书这类平台会明确压低模板化、AI 腔的内容的推荐量（见 [10 章](../10-douyin-video-wechat/)）。

**推荐流程**

1. 提纲由人来写（来自 SERP 分析和"超越清单"）；
2. AI 根据提纲起草；
3. 人工加入第一手素材：截图、数据、案例、观点、"不适合谁"；
4. 核对事实和链接，统一语气；
5. 发布节奏以能**长期保持质量**为准：起步阶段每周 1–2 篇，或者参考原文的每 2–3 周 1 篇深度文章。不要一次性批量发几百篇。

---

## 9. 内容更新 SOP

| 触发条件 | 动作 | 频率 |
|---|---|---|
| GSC 出现页面还没回答到的查询词 | 补一个 FAQ 或一段正文，必要时新开一页 | 每月 |
| 展示量高但点击率低 | 改写 title 和 description（更具体、带数字、带利益点） | 每月 |
| 排名在 11–30 徘徊 | 加深内容 + 补内链（5 篇文章法）+ 补外链 | 每月 |
| 内容过时（价格、截图、年份、产品功能） | 更新正文 → 更新 `dateModified` 和 sitemap 的 `<lastmod>`（**只在内容真的改了的时候才更新**） | 每季度 |
| 多篇文章争同一个词 | 合并成一篇，其余 301 过去 | 每季度 |
| 页面长期 0 展示、内容单薄 | 补充、合并或者删除（noindex / 410） | 每半年 |
| 产品上了新功能 | 给新功能写一篇"把功能翻译成搜索问题"的文章，并更新相关文章的内链 | 随版本 |

不要只改日期、不改内容来"刷新"文章。搜索引擎能识别这种做法，它会让你的日期信号失去可信度。

---

## 10. 平台分发与内容比例

- 一份内容可以改写成多种形式：短帖（即刻、微博、X）、图文（公众号、小红书）、视频（抖音、视频号、B 站）、音频（小宇宙）。**每个版本都要带一个转化入口**（UTM 链接、关注、加微信领资料）。
- 社交平台的内容比例：**约 80% 对用户有用的内容 + 10% 产品 + 10% 个人生活**。纯产品更新帖就是广告，平台不会推荐。
- 一个账号只做一个垂直主题。具体平台的打法见 [07](../07-launch-and-distribution/)、[08](../08-x-and-reddit/)、[09](../09-xiaohongshu/)、[10 章](../10-douyin-video-wechat/)。

---

## 来源

- [如何选内容主题](https://lownrain.feishu.cn/wiki/L3puwoNS3imyg7kyhDbcA7Ffngh)（独立开发前线｜SEO从0到100）
- [内容结构](https://lownrain.feishu.cn/wiki/H09EwUwsuiKRhKkwmVUcyHFvnQd)（独立开发前线｜SEO从0到100）
- [如何用内容为产品持续引流](https://lownrain.feishu.cn/wiki/VsCcwVKTNiCJmlkKymNcIpxJn9d)（独立开发前线｜SEO从0到100）
- [为什么你需要持续为你的产品创造内容](https://lownrain.feishu.cn/wiki/RUgJwOgDOiEwRdkmK1DcPsqvnKb)（独立开发前线｜SEO从0到100）
- [如何利用内链优化SEO排名](https://lownrain.feishu.cn/wiki/M4Dtwgynwi4R5FkHXcjcZVeZnRb)（独立开发前线｜SEO从0到100）
- [什么样的文章容易获得排名](https://lownrain.feishu.cn/wiki/QMDhwR8QOifSxvkhmzTcPC06nrb)（独立开发前线｜SEO从0到100）
- [E-E-A-T](https://lownrain.feishu.cn/wiki/I8ZCwxbKGioi07keWSIcnhbenRc)（独立开发前线｜SEO从0到100）
- [品牌营销](https://lownrain.feishu.cn/wiki/D6aUwmc55i3alckkM5Pcq7snnKg)（独立开发前线｜SEO从0到100）
- [内容优化](https://lownrain.feishu.cn/wiki/TnMLw8Xe9iF8KWklW9jcMBDGnee)（独立开发前线｜SEO从0到100）
- [SEO经验分享](https://lownrain.feishu.cn/wiki/B2MLwCgXBisanqkZNyCcXDP6nqh)（独立开发前线｜SEO从0到100）
- [如何为你的产品获取免费流量？](https://lownrain.feishu.cn/wiki/ZObbwCFH1i7RvVknVEUcF9uDnMh)（独立开发前线｜SEO从0到100）
- [获取流量的最有效方式就是成为TOP1](https://lownrain.feishu.cn/wiki/MWv9wFf4liIQ8sk1qtIct7zQnlh)（独立开发前线｜SEO从0到100）
- [如何用内容从社交媒体为产品引流](https://lownrain.feishu.cn/wiki/TIMjws34Ji0r2DkIBu6cIJICnUi)（独立开发前线｜SEO从0到100）
- [如何获取流量？SEO依然是性价比最高的方式](https://lownrain.feishu.cn/wiki/SXgew9A8jihj2uk4oMlcRCZYnUb)（独立开发前线｜SEO从0到100）
- [外链建设策略](https://lownrain.feishu.cn/wiki/Lx9CwNJ0HiiJ4kki1XCcLmhnngr)（独立开发前线｜SEO从0到100）
- [影响抖音流量分发的因素](https://lownrain.feishu.cn/wiki/XRQBwJiKZil09skOsiCc6ZXLnjf)（独立开发前线｜SEO从0到100）
