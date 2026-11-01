# GEO / AI 搜索优化

> 一句话：**GEO（Generative Engine Optimization，也叫 AEO，Answer Engine Optimization）的目标是让 ChatGPT、Perplexity、Claude、Gemini、Google AI Overviews 这类"答案引擎"在回答问题时引用、复用和推荐你的内容和品牌**。本质上是进入模型的"证据池"。优化的单位也在变化：从页面，到知识单元，再到整个主题的语料网络。
>
> 相关 Checklist 条目：`geo-answer-first`、`geo-faq-blocks`、`geo-llms-txt`、`geo-ai-crawlers`、`tech-ssr-content`、`serp-entity-schema`、`serp-structured-data`、`links-external-citation`、`content-eeat-signals`。

---

## 1. SEO 和 GEO 有什么区别

用户行为正在变化：以前是搜索之后点结果，现在越来越多人直接问 AI。引擎也不再只给一列链接，而是直接输出一段综合答案。竞争的焦点从"排第几"变成了"**有没有被采纳为答案来源**"。

| 维度 | SEO | GEO |
|---|---|---|
| 目标系统 | 传统搜索引擎 | 生成式 AI / 答案引擎 |
| 目标 | 排名更高 | **被引用的概率更高** |
| 优化对象 | 单个页面或网站 | 全网关于你的所有内容（语料） |
| 评价方式 | 排名、点击 | 被引用的频率、品牌和主题的语义关联 |
| 核心问题 | "我排在第几？" | "模型会不会反复用到我的内容？" |

三个转变：**从页面竞争到知识竞争；从追求曝光到追求被采纳、被信任；从技巧优化到语义理解 + 信任建设。**

GEO 不是用来替代 SEO 的。大多数答案引擎在回答时都会先**检索**网页（Bing、Google 或自家索引），所以 SEO 的基础（可抓取、可索引、内容质量、外链和提及）也是 GEO 的基础。

---

## 2. AI 搜索的引用路径

```text
① 允许爬虫  →  ② 被索引  →  ③ 结构清晰、语义明确  →  ④ 被引用
  AI Bot 能进来吗？  在它的知识库或检索索引里吗？  能被拆成可以复用的知识单元吗？  有足够的权威和信任背书吗？
```

| 阶段 | 要回答的问题 | 怎么检查 | auditor |
|---|---|---|---|
| ① 抓取 | robots.txt 和 Cloudflare 有没有放行 AI 爬虫？正文是不是在 HTML 源码里？ | 看 `/robots.txt`、Cloudflare 的 Bots 设置；用 `curl` 看源码里有没有正文 | `geo-ai-crawlers`、`tech-ssr-content` |
| ② 索引 | 页面有没有被 Google / **Bing** 收录？ | GSC、Bing Webmaster；`site:` 搜索 | `indexing-gsc`、`tech-xml-sitemap` |
| ③ 理解 | 有没有答案先行、问句式小标题、表格、明确的实体？ | 人工检查 H2 / H3 大纲；JSON-LD | `geo-answer-first`、`geo-faq-blocks`、`serp-entity-schema` |
| ④ 引用 | 有没有第三方提及、讨论、引用？作者和品牌可信吗？ | 搜品牌名；看 Reddit / 知乎 / 贴吧 / 目录上的描述 | `content-eeat-signals`、`links-external-citation` |

答案引擎的工作方式大致是三步：**按语义理解意图（不是按关键词匹配）→ 从多个来源检索证据 → 综合成答案**。所以更容易被引用的内容有几个特点：覆盖完整、语义结构清楚、在这个主题上反复出现、不只讲"是什么"，还讲"**为什么**"和"**怎么用**"。

---

## 3. 内容写法

### 3.1 答案先行

H1 之后的第一段，用 **≤ 80 个词**直接给出定义或结论。auditor 的 `geo-answer-first` 会检查首页 H1 后的第一段是不是简短的定义句（带"是 / 指 / is / means"这类词）。

| ❌ 不利于引用 | ✅ 利于引用 |
|---|---|
| 在当今快速发展的数字时代，越来越多的企业开始关注数据处理的效率问题…… | **银行流水 PDF 转 Excel**，是指把银行导出的 PDF 对账单里的交易表格，按日期、摘要、金额、余额等列原样还原成可以编辑的 Excel 表格。用专门的转换工具通常 1 分钟内就能完成，通用 OCR 则容易出现串行、错列。 |

### 3.2 把每个核心主题拆成"知识单元"

每个关键页面用清楚的 H2 / H3 回答下面这几类问题，每一节都能单独被截取引用：

```markdown
## X 是什么                  ← 1–2 句定义 + 一个具体例子
## 为什么会出现 / 为什么需要 X  ← 原因、背景、因果关系
## 怎么做（步骤）              ← <ol>，每一步写一句话 + 截图
## X vs Y vs Z                 ← 对比表：适用场景、价格、限制
## 常见错误与误区              ← 用户踩过的坑 + 怎么修
## 常见问题                    ← 3–6 个问句式标题，第一句给结论   geo-faq-blocks
```

### 3.3 数据与引用

- 给出**具体数字、日期、版本号、价格、限制条件**。模糊的形容词很难被引用。
- 引用权威的外部来源（官方文档、标准、研究报告），对应 `links-external-citation`。
- 有原创数据（调研、基准测试、统计）的话，单独发一个页面，方便被其他网站和模型引用。
- 写明**作者、发布日期和更新日期**，内容有变化时更新 `dateModified`。
- 系统地整理用户的误区、踩过的坑和解决办法：每个核心主题都写一篇"避坑 / 排错"文章。
- 问题清单的来源是 Reddit、评论区、客服工单这些地方的**真实提问**，不是关键词工具。

> ⚠️ **2026 更新**：FAQ 富结果在 Google 上基本已经不再展示（见 [02 章](../02-page-structure-and-tags/)），但**问答格式对 AI 引用仍然很有用**：问题是现成的查询，答案是现成的引用片段。FAQ 区块要保留，只是不要指望它带来 SERP 上的折叠问答。

---

## 4. 平台信号：在模型的"语料网络"里出现

GEO 优化的不只是你自己的网站，还有**全网关于你的内容**。

| 信号 | 为什么有用 | 怎么做 |
|---|---|---|
| **真实的讨论语料** | 多轮讨论（追问、反驳、澄清）+ 有具体场景的非官方观点，被认为是 LLM 很依赖的语料。原文特别提到了 **Reddit** 和 **百度贴吧** | 长期在细分版块里真诚地参与多轮讨论，不是路过留个链接；每月记录有实质内容的回帖数（打法见 [08 章](../08-x-and-reddit/)） |
| **问答社区** | 知乎这类长问答在中文模型和百度里权重高 | 用第一人称写有经验、有数据的长回答 |
| **多平台、多形式覆盖** | 品牌在不同语境里反复出现，能提高它在模型知识网络里的"存在密度" | 每个核心主题至少有：一篇深度文章、一个案例、一篇技术解读、一次第三方媒体或博客提及 |
| **品牌描述一致** | 模型需要把"品牌 ↔ 主题"稳定地绑定在一起 | 目录、社交简介、文章署名、About 页里的**一句话定位保持一致**，例如"ExampleAI：给电商运营用的 AI 海报生成器" |
| **目录和对比文里有你** | 被归到正确的类目，用户问"best X tool"时才可能被提到 | AI 工具目录、替代品网站、第三方对比文章（见 [05 章](../05-backlinks/)） |

原文的判断：Reddit 和贴吧这类"多轮讨论 + 长期垂直话题 + 真实经验"的社区对 GEO 友好；模板化、短平快的内容平台语言同质化、语义被压缩，被引用的价值较低。

> ⚠️ **2026 更新**：不要为了 GEO 去批量注册账号、刷帖、发软文，或者在讨论区植入雷同的推荐话术。社区会封号，AI 引擎也在降低刷屏式内容的权重。**真诚参与是唯一能长期起作用的做法。**

---

## 5. 技术项

### 5.1 robots.txt：放行哪些 bot

| 厂商 | User-agent | 用途 | 建议 |
|---|---|---|---|
| <img src="https://www.google.com/s2/favicons?domain=openai.com&sz=32" width="16" height="16" alt=""> [OpenAI](https://openai.com/) | `OAI-SearchBot` | ChatGPT 搜索的检索和引用 | **放行** |
| <img src="https://www.google.com/s2/favicons?domain=openai.com&sz=32" width="16" height="16" alt=""> [OpenAI](https://openai.com/) | `ChatGPT-User` | 用户在对话里让 ChatGPT 打开你的页面 | 放行 |
| <img src="https://www.google.com/s2/favicons?domain=openai.com&sz=32" width="16" height="16" alt=""> [OpenAI](https://openai.com/) | `GPTBot` | 训练数据抓取 | 默认放行（帮助模型"记住"品牌）；有不想被训练的内容再考虑拦截 |
| <img src="https://www.google.com/s2/favicons?domain=anthropic.com&sz=32" width="16" height="16" alt=""> [Anthropic](https://www.anthropic.com/) | `ClaudeBot` | 训练数据抓取 | 默认放行 |
| <img src="https://www.google.com/s2/favicons?domain=anthropic.com&sz=32" width="16" height="16" alt=""> [Anthropic](https://www.anthropic.com/) | `Claude-SearchBot`、`Claude-User` | 搜索检索、用户触发的访问 | 放行 |
| <img src="https://www.google.com/s2/favicons?domain=perplexity.ai&sz=32" width="16" height="16" alt=""> [Perplexity](https://www.perplexity.ai/) | `PerplexityBot`、`Perplexity-User` | 索引和用户触发的访问 | **放行** |
| <img src="https://www.google.com/s2/favicons?domain=google.com&sz=32" width="16" height="16" alt=""> [Google](https://developers.google.com/search) | `Google-Extended` | 控制内容能否用于 Gemini 训练和 grounding（不是一个独立的爬虫，**不影响 Google 搜索和 AI Overviews**） | 默认放行 |
| <img src="https://www.google.com/s2/favicons?domain=google.com&sz=32" width="16" height="16" alt=""> [Google](https://developers.google.com/search) | `Googlebot` | 搜索，也包括 AI Overviews / AI Mode | 必须放行 |
| <img src="https://www.google.com/s2/favicons?domain=bing.com&sz=32" width="16" height="16" alt=""> [Microsoft Bing](https://www.bing.com/webmasters) | `bingbot` | Bing 搜索、Copilot，也间接影响 ChatGPT 搜索 | 必须放行 |
| <img src="https://www.google.com/s2/favicons?domain=apple.com&sz=32" width="16" height="16" alt=""> [Apple](https://www.apple.com/) | `Applebot-Extended` | 控制内容能否用于 Apple 的 AI 训练 | 按需 |
| <img src="https://www.google.com/s2/favicons?domain=commoncrawl.org&sz=32" width="16" height="16" alt=""> [Common Crawl](https://commoncrawl.org/) | `CCBot` | 公开数据集，很多模型会用 | 按需 |

```text
# 允许 AI 搜索和引用（可以和 03 章的通用规则合并）
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

> ⚠️ **2026 更新（文档之间的冲突）**：《网站加速和防攻击》建议在 Cloudflare 里开启"屏蔽 AI 训练爬虫"，以防爬虫流量拖垮服务器；《GEO》要求"允许 AI Bot 访问"。处理方式：
> 1. **营销页、文档、博客对 AI 爬虫全部放行**，这是 GEO 的前提。auditor 只要发现 `GPTBot`、`ClaudeBot`、`PerplexityBot`、`Google-Extended`、`OAI-SearchBot` 中有一个被拦截，`geo-ai-crawlers` 就判失败。
> 2. 担心负载的话，**对 `/api/`、`/app/`、`/dashboard/` 做限流或拦截**，而不是全站屏蔽 AI bot。营销页走边缘缓存之后，爬虫流量的成本几乎可以忽略（见 [03 章](../03-technical-seo-and-infra/)）。
> 3. 去 Cloudflare 后台确认"Block AI bots"和托管 robots.txt 的状态。新接入的域名可能默认就是拦截的。

### 5.2 llms.txt

`llms.txt` 是 2024 年提出的一个社区提案：在网站根目录放一份 Markdown，告诉 LLM 你的网站是做什么的、最重要的页面有哪些。

```markdown
# ExampleAI

> ExampleAI 是给电商运营用的 AI 海报生成器：输入一句话，批量生成同系列、可商用的海报。

## 产品
- [AI 海报生成器](https://example.com/): 主工具，免登录可以试 3 张
- [价格](https://example.com/pricing): 免费版和 Pro 版的区别

## 文档与指南
- [Instagram 海报尺寸指南](https://example.com/blog/instagram-poster-size): 各平台尺寸对照表
- [批量生成教程](https://example.com/blog/bulk-poster-generation): 一次生成 50 张的步骤

## 关于
- [关于我们](https://example.com/about): 团队、联系方式
```

auditor 的 `geo-llms-txt` 检查三点：`/llms.txt` 返回 200、有 `# ` 标题、有 `[文字](https://…)` 形式的链接。

> ⚠️ **2026 更新**：到目前为止，**还没有主流答案引擎公开确认会读取 llms.txt**（Google 方面表示目前不使用它）。它成本很低、没有坏处，可以加上，但**不要把它当成 GEO 的主要手段**。真正起作用的仍然是可抓取、可索引、结构清晰的内容，以及站外提及。

### 5.3 其他技术项

| 项 | 为什么 | 怎么做 |
|---|---|---|
| **SSR / SSG** | 大多数 AI 爬虫不执行 JavaScript，纯前端渲染的页面在它们眼里就是空白 | 正文直接写在 HTML 源码里（`tech-ssr-content`） |
| **Bing 索引** | ChatGPT 搜索、Copilot、DuckDuckGo 等产品都和 Bing 的索引有关联，没被 Bing 收录会少很多被 AI 引用的机会 | 验证 Bing Webmaster，提交 sitemap，接入 IndexNow（见 [03 章](../03-technical-seo-and-infra/)） |
| **结构化数据** | 给模型一份机器可读的"品牌档案"，说明你是什么类型的产品、怎么收费、品牌和产品之间是什么关系 | `Organization`（name、logo、`sameAs` 社交账号）+ `SoftwareApplication`（类目、价格）+ `Article.author`（`serp-entity-schema`） |
| **sitemap + lastmod** | 让检索系统知道哪些内容是最新的 | `<lastmod>` 写真实的修改日期 |
| **速度和稳定性** | 实时检索时页面超时就不会被用上 | 边缘缓存、TTFB 低、不要对爬虫弹验证码挑战 |
| **干净的 URL 和 canonical** | 避免同一份内容被分散到多个 URL 上 | 见 [02 章](../02-page-structure-and-tags/) |

```html
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "ExampleAI",
  "url": "https://example.com/",
  "logo": "https://example.com/logo.png",
  "description": "给电商运营用的 AI 海报生成器",
  "sameAs": ["https://x.com/exampleai", "https://www.producthunt.com/products/exampleai", "https://github.com/exampleai"]
}
</script>
```

---

## 6. 怎么衡量：每月用固定 prompt 测一次

### 6.1 设计固定的 prompt 集合（10–20 条，每月不变）

| 类型 | 示例 prompt | 衡量什么 |
|---|---|---|
| 品类推荐 | "有哪些好用的 AI 海报生成器？" / "best AI poster generator for ecommerce" | **语义关联**：问品类问题时会不会提到你 |
| 问题求解 | "怎么批量做 50 张同系列的促销海报？" | 你的教程会不会被引用 |
| 对比 | "ExampleAI 和 Canva 做电商海报哪个好？" | 对比内容会不会被采纳，描述是否准确 |
| 品牌认知 | "ExampleAI 是什么？怎么收费？" | 模型对你的描述是否准确、是不是最新的 |
| 长尾知识 | "Instagram 海报的标准尺寸是多少？" | 知识型页面有没有被引用 |

### 6.2 测哪些引擎

- 海外：**ChatGPT**（开启搜索）、**Perplexity**、**Claude**（开启联网搜索）、**Gemini**、**Google AI Overviews / AI Mode**，可以再加上 Copilot。
- 中文：可以补充豆包、Kimi、DeepSeek、元宝等国内答案引擎（和百度、贴吧、知乎的语料关系更紧密）。
- 测试时用**无痕或未登录**的状态，避免个性化记忆干扰结果；同一条 prompt 可以跑 2–3 次看是否稳定。

### 6.3 记录表模板

| 日期 | 引擎 | Prompt # | 提到品牌了吗 | 引用了我方 URL 吗 | 被引用的 URL | 在答案里的位置 | 被提到的竞品 | 描述准不准 | 备注 |
|---|---|---|---|---|---|---|---|---|---|
| 2026-11-01 | ChatGPT | P01 品类 | ✅ | ❌ | — | 第 4 个推荐 | Canva、Adobe Express | 准确 | 引用了 Toolify 的 listing |
| 2026-11-01 | Perplexity | P02 教程 | ✅ | ✅ | /blog/bulk-poster-generation | 来源 [2] | — | 准确 | — |
| 2026-11-01 | AI Overviews | P05 尺寸 | ❌ | ❌ | — | — | — | — | 引用的是 Reddit 帖子 → 去参与讨论 |

> 表中内容是示例。

**月度指标**

```text
提及率   = 提到品牌的回答数 ÷ 测试总数
引用率   = 引用了我方 URL 的回答数 ÷ 测试总数
声量份额 = 提到我方的次数 ÷ （我方 + 主要竞品被提到的总次数）
```

**配套的数据来源**

- GA4 / Plausible 里按来源看 AI 引荐流量：`chatgpt.com`、`perplexity.ai`、`gemini.google.com`、`copilot.microsoft.com`、`claude.ai` 等。ChatGPT 带出去的链接通常会自动加上 `utm_source=chatgpt.com`。
- GSC 里的品牌词展示趋势：AI 回答里提到品牌之后，用户往往会去搜品牌名。
- 每次看到"被引用的是别人的页面"，就记下那个页面有什么你没有的东西（数据、表格、讨论），把它作为下个月的内容任务。

---

## 7. GEO 30 天行动清单

```text
第 1 周  技术
  [ ] robots.txt 放行 AI 搜索和训练 bot；检查 Cloudflare 的 AI bot 设置          geo-ai-crawlers
  [ ] 营销页、文档、博客改成 SSR/SSG                                              tech-ssr-content
  [ ] Bing Webmaster 验证 + sitemap + IndexNow
  [ ] Organization + WebSite + SoftwareApplication JSON-LD，带 sameAs           serp-entity-schema
  [ ] 发布 /llms.txt                                                            geo-llms-txt
第 2 周  内容
  [ ] 首页和核心页面的 H1 下面加一句"答案先行"的定义                               geo-answer-first
  [ ] 每个核心页面补齐：是什么 / 为什么 / 怎么做 / 对比 / 常见错误 / FAQ            geo-faq-blocks
  [ ] 每页至少 1 个具体数据点 + 1 个权威外部引用                                   links-external-citation
第 3 周  站外
  [ ] 统一全网的一句话品牌定位（目录、社交简介、About 页）
  [ ] 在 Reddit / 知乎 / 贴吧的细分版块里开始真诚参与（每周至少 3 个有实质内容的回答）
  [ ] 提交到 AI 工具目录、替代品网站（见 05 章）
第 4 周  测量
  [ ] 定下 10–20 条固定 prompt，在 5 个引擎上跑第一轮，填写记录表
  [ ] GA4 里建 AI 引荐来源的分组；在 GSC 里给品牌词建立基线
```

---

## 来源

- [GEO](https://lownrain.feishu.cn/wiki/L7VTwkIxRitca7kIQNAc4n7nnHg)（独立开发前线｜SEO从0到100）
- [网站加速和防攻击](https://lownrain.feishu.cn/wiki/HFt6wEYNOiVdWSk9pBfc5GaSnwb)（独立开发前线｜SEO从0到100）
- [Schema标签](https://lownrain.feishu.cn/wiki/GPAqwn5XQiIr0Vk6YYKcN3D9nbf)（独立开发前线｜SEO从0到100）
- [网站页面结构设计](https://lownrain.feishu.cn/wiki/MxfOwgvDHiDeDPkaQ0dcu4cMnIe)（独立开发前线｜SEO从0到100）
- [E-E-A-T](https://lownrain.feishu.cn/wiki/I8ZCwxbKGioi07keWSIcnhbenRc)（独立开发前线｜SEO从0到100）
- [外链建设策略](https://lownrain.feishu.cn/wiki/Lx9CwNJ0HiiJ4kki1XCcLmhnngr)（独立开发前线｜SEO从0到100）
- [Reddit](https://lownrain.feishu.cn/wiki/BIaBw3hHPi5iDykSwEJccVqfn6f)（独立开发前线｜SEO从0到100）
- [怎么在Reddit发帖不容易被删](https://lownrain.feishu.cn/wiki/UOCFw85YSi1pGZkAVj9crK8nnwW)（独立开发前线｜SEO从0到100）
- [搜索引擎后台提交](https://lownrain.feishu.cn/wiki/YGGDwLYhtitfK5kBao0cd4Bsnme)（独立开发前线｜SEO从0到100）
- [站点地图](https://lownrain.feishu.cn/wiki/KnACwgXa7iFmcvkvbdac09CTnVh)（独立开发前线｜SEO从0到100）
- [内容优化](https://lownrain.feishu.cn/wiki/TnMLw8Xe9iF8KWklW9jcMBDGnee)（独立开发前线｜SEO从0到100）
