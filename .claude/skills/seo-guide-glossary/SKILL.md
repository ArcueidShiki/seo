---
name: seo-guide-glossary
description: 当用户问 SEO、GEO 或增长术语的含义、正常范围和用法时使用，例如 KD、DR、RD、CPS、CTR、canonical、LCP / INP / CLS、E-E-A-T、Parent Topic、AI Overviews、llms.txt，或看不懂 Ahrefs、GSC、GA4 报表指标（SEO 名词解释 / glossary / 术语）。
---

# SEO 名词解释

> 一句话：帮用户快速搞懂一个 SEO / GEO / 数据指标术语——它是什么、正常范围多少、看到这个数之后该做什么。完整内容见仓库 `handbook/99-glossary.md`（ArcueidShiki/seo）。

## 何时使用
- 用户问"KD / DR / RD / CPS / CTR / INP 是什么意思""多少算正常"
- 用户贴出 Ahrefs、Semrush、GSC、GA4 报表，看不懂某个字段
- 用户把两个概念混在一起（canonical vs 301、DR vs DA、Ahrefs CPS vs 营销 CPS、nofollow vs sponsored）
- 用户读到旧教程里的术语（FID、关键词密度、meta keywords、`link:` 指令），想知道还有没有用
- 其他手册 skill 的输出里出现术语，用户要求展开解释
- 用户要一份某个主题（技术 / 外链 / AI 搜索）的术语速查表

## 使用方式
1. **先给定义**：一句话中文解释 + 英文全称 / 缩写，避免绕圈子。
2. **再给正常范围**：用下表"正常范围 / 怎么用"一栏的数字，并注明这是手册各章采用的**经验阈值、起步参考，不是官方标准**；标"补充"的条目不在原知识库中。
3. **最后说怎么用**：在哪里看到它（GSC、Ahrefs、GA4、Trends、PageSpeed Insights）、数值异常时下一步做什么，并指向对应的手册 skill（如 KD → seo-guide-keyword-research，LCP → seo-guide-technical-infra）。
4. **用户给了具体数字时**，直接判断它落在哪个区间、意味着什么、优先级高还是低，不要只复述定义。
5. **主动区分同名或易混的概念**：
   - CPS：Ahrefs 的"每次搜索点击数"≠ 营销里的"按成交付费（Cost Per Sale）"。
   - AIO：通常指 Google AI Overviews，有时也被用作"AI Optimization"的缩写。
   - DR（Ahrefs）、DA（Moz）、AS（Semrush）不能横向比较，Google 都不使用。
   - GA4 的跳出率指"未互动会话"的占比，要和互动率一起看。
6. **标出过时术语**：FID（2024 年 3 月被 INP 取代）、关键词密度 2–8%、meta keywords、`link:` 指令。
7. **一次问多个术语**时用表格回答（术语 | 解释 | 正常范围 | 下一步）。
8. **表里没有的术语**：先查 `handbook/99-glossary.md` 全表（共 10 组 + 常用搜索指令，含增长变现与平台运营术语）；仍没有就说明手册未收录，再按通用知识解释并标明来源。

## 术语速查表

### 搜索基础
| 术语 | 中文 | 一句话解释 | 正常范围/怎么用 |
|---|---|---|---|
| SERP | 搜索结果页 | 含自然结果、广告、AI 摘要、富结果等 | 判断关键词难度时一定亲自看一遍前 10 名 |
| Ranking | 排名 | 页面在某个查询下的位置 | 第 1 名点击率约 27.6%，约为第 10 名的 10 倍（原文引用 Backlinko） |
| Crawl Budget | 抓取预算 | 搜索引擎愿意在你站上花的抓取量 | 小站很少受限；大站减少参数页、重复页、死链 |
| Mobile-first Indexing | 移动优先索引 | Google 主要用移动版页面索引和排名 | 移动版内容不能比桌面版少 |
| Featured Snippet | 精选摘要 | 结果顶部直接给答案的摘录框 | 段首用 40–60 字直接回答问题，更易被选中 |
| People Also Ask (PAA) | 相关问题 | "其他人还问了"的折叠问答 | FAQ 选题来源 |
| Zero-click Search | 零点击搜索 | 用户在 SERP 上得到答案、不点任何结果 | AI 摘要让比例上升；结合品牌词搜索量评估曝光价值 |

### 关键词与搜索意图
| 术语 | 中文 | 一句话解释 | 正常范围/怎么用 |
|---|---|---|---|
| Long-tail Keyword | 长尾词 | 搜索量小、意图明确、转化率高的长词 | 独立站主战场；10 个小而准的选题胜过 1 个大而泛的 |
| Search Intent | 搜索意图 | 信息型、导航型、商业调研型、交易型 | 页面类型要和 SERP 主流类型一致（工具页、教程、对比） |
| Search Volume | 搜索量 | 目标国家的月均搜索次数 | 起步参考 > 500（新站方向）或 ≥ 1,000（核心词） |
| KD | 关键词难度 | 进入前 10 的难度，Ahrefs 主要按前 10 页面的外链计算 | 新站 < 20 最稳，宽松上限 < 50；不同工具的 KD 不能横比 |
| CPC | 单次点击费用 | 广告主为该词每次点击支付的价格 | 用来估算自然流量的商业价值 |
| Rising Queries | 上升查询 | Google Trends 里近期增长快的查询 | 看 7 / 30 / 90 天窗口，越新机会越大 |
| Keyword Cannibalization | 关键词蚕食 | 站内多个页面争同一个词，互相稀释 | 维护"关键词 → URL"映射表，一个词只对应一个页面 |
| Striking Distance Keywords | 临门一脚词 | 排在 11–30 名、已有展示的词 | 优先用内链和补内容推上首页 |

### 页面与内容
| 术语 | 中文 | 一句话解释 | 正常范围/怎么用 |
|---|---|---|---|
| Title Tag | 标题标签 | 权重最高的页面标签，影响排名和点击率 | 30–60 字符，中文 ≤ 30 字；主关键词靠前；全站唯一 |
| Meta Description | 描述 | SERP 摘要候选，不直接影响排名，影响点击率 | 80–155 字符；像广告文案一样写，每页唯一 |
| Meta Keywords | 关键词标签 | 历史遗留标签 | Google 忽略，百度权重很低，可以不写 |
| Alt Text | 替代文本 | 图片的文字描述，影响无障碍和图片搜索 | 一句话描述图片本身；装饰图用 `alt=""` |
| Keyword Density | 关键词密度 | 关键词在正文中的占比 | ⚠️ 旧规则 2–8% 已过时；自然出现即可，不要堆砌 |
| Duplicate Content | 重复内容 | 多个 URL 内容相同或相近 | 不会直接被惩罚但稀释信号；用 canonical 或 301 处理 |
| Thin Content | 薄内容 | 信息量极少、没有独立价值的页面 | 合并、补充，或设为 noindex |
| E-E-A-T | 经验 / 专业 / 权威 / 可信 | Google 质量评估指南里的信任框架，不是单一排名因素 | 署名作者、About / Contact 页、一手截图和数据 |
| YMYL | 你的钱或你的命 | 涉及钱、健康、法律、安全的内容 | 可信度要求最高；写清风险和免责声明 |
| Programmatic SEO | 程序化 SEO | 用模板和数据批量生成页面 | ⚠️ 每页必须有独立价值，否则触发"规模化内容滥用" |

### 技术 SEO
| 术语 | 中文 | 一句话解释 | 正常范围/怎么用 |
|---|---|---|---|
| XML Sitemap | 站点地图 | 给爬虫看的 URL 清单，是提示不是命令 | 只放可索引、canonical、返回 200 的 URL；单文件 ≤ 5 万 URL、≤ 50MB；lastmod 填真实修改日期 |
| robots.txt | 爬虫协议文件 | 控制爬虫可以抓取哪些路径 | 不屏蔽重要栏目；在里面声明 Sitemap 地址 |
| Meta Robots | 页面级索引控制 | 控制单页是否索引、是否跟随链接 | 薄页、工具页用 `noindex, follow` |
| Canonical | 规范标签 | 声明一组重复页面里的首选 URL，是提示不是指令 | 每页一个指向自己的绝对地址；目标页返回 200 |
| 301 / 302 | 永久 / 临时重定向 | 301 传递权重，302 是临时跳转 | 迁移、合并、www 统一用 301 且一跳到位；不要用 302 代替 301 |
| Soft 404 | 软 404 | 内容太薄被当作"不存在"的页面 | 内链 404 应为 0；提供自定义 404 页面 |
| hreflang | 多语言标注 | 多语言 / 多地区版本的对应关系 | 互相指向，并包含 `x-default` |
| TTFB | 首字节时间 | 从请求到收到第一个字节的时间 | Google 参考值 ≤ 0.8 秒；营销页边缘缓存后海外争取 < 200 毫秒 |
| LCP | 最大内容绘制 | 首屏主内容多快出现 | ≤ 2.5 秒（真实用户第 75 百分位） |
| INP | 交互到下一次绘制 | 点击后多快有反应；2024 年 3 月取代 FID | ≤ 200 毫秒；还在写 FID 的资料已过时 |
| CLS | 累计布局偏移 | 页面加载时会不会"跳" | ≤ 0.1；广告位和图片预留尺寸 |
| Structured Data / JSON-LD | 结构化数据 | 用 Schema.org 词汇向机器描述页面，JSON-LD 是 Google 推荐格式 | 内容与可见内容一致；不伪造评分；Rich Results Test 0 错误 |
| Crawl Depth | 抓取深度 | 从首页到该页需要点几次 | 重要页面 ≤ 3 次点击 |
| SSR / SSG | 服务端渲染 / 静态生成 | 在服务器端生成 HTML | 核心内容出现在初始 HTML 里，对爬虫和 AI 爬虫更友好 |
| IndexNow | 主动推送协议 | Bing 等搜索引擎支持的 URL 推送协议 | 内容更新后立即推送 |

### 外链与权威度
| 术语 | 中文 | 一句话解释 | 正常范围/怎么用 |
|---|---|---|---|
| Referring Domains (RD) | 引用域名 | 有多少个不同域名链接到你 | 比外链总数更能反映权威；按月看新增和丢失 |
| DR | 域名评级 | Ahrefs 的域名级外链强度，0–100 相对分数 | 0–10 新站 / 10–30 小站 / 30–50 做过系统外链 / 50–70 细分强站 / 70–90 大媒体 / 90+ 顶级；独立站 20–40 已很有竞争力 |
| Dofollow / Nofollow | 跟随 / 不跟随链接 | 默认链接传递权重；nofollow 声明"不背书" | DR 增长主要靠 dofollow；nofollow 仍有流量和品牌价值，国内大社区和 Reddit 基本是 nofollow |
| UGC / Sponsored | 用户内容 / 付费链接 | `rel="ugc"` / `rel="sponsored"` | 付费链接必须标 sponsored |
| DA / AS | 域名权威度 | Moz 的 DA、Semrush 的 Authority Score | 只作参考，不同工具不能横比，Google 不使用 |
| Anchor Diversity | 锚文本多样性 | 外链锚文本的分布 | 精确匹配关键词的锚文本只占少数 |
| Link Velocity | 链接增速 | 外链增长的速度 | 平稳增长；突然暴增看起来不自然 |
| PBN | 私有博客网络 | 黑帽外链手法 | 不要碰 |
| Brand Mention | 品牌提及 | 提到品牌但没有链接 | 仍有价值，尤其对 GEO |
| Disavow | 拒绝链接 | 告诉 Google 忽略某些外链 | 只在被人工处罚或明显垃圾外链攻击时使用 |
| Site Reputation Abuse | 站点声誉滥用 | 在高权重站点寄生发布低质第三方内容（parasite SEO） | Google 2024 年起打击的对象 |

### Ahrefs 关键词指标
| 术语 | 中文 | 一句话解释 | 正常范围/怎么用 |
|---|---|---|---|
| Clicks | 点击估算 | 估算该词每月的实际点击 | 比搜索量更接近真实流量 |
| CPS | 每次搜索点击数 | 每次搜索平均带来的点击数 | 明显 < 1 说明广告或 SERP 功能吃掉点击，降低优先级（推断阈值） |
| Parent Topic | 父主题 | 这个词是否应由更大主题的页面覆盖 | 与目标词不同时优先在 Parent Topic 页覆盖，不新开页 |
| Traffic Potential (TP) | 流量潜力 | 该话题第 1 名页面能获得的总流量（补充） | 比单个词搜索量更能反映页面潜力 |

### 数据分析
| 术语 | 中文 | 一句话解释 | 正常范围/怎么用 |
|---|---|---|---|
| Impressions | 展示 | 结果在 SERP 上被展示的次数 | 展示涨了点击没涨，先查 CTR |
| CTR | 点击率 | 点击 ÷ 展示 | 按排名位置比较；高展示低 CTR 改 title 和 description；小红书封面 ≥ 5% 为及格线 |
| Average Position | 平均排名 | GSC 里的平均位置 | 必须和具体查询一起看，否则没意义 |
| Engagement Rate | 互动率 | 停留 > 10 秒、发生转化或浏览 ≥ 2 页的会话占比 | 与跳出率（未互动会话占比）互补 |
| UTM | 来源追踪参数 | 链接上的来源标记 | 社交简介、KOL 链接都要加 |
| Branded Query | 品牌词查询 | 包含品牌名的搜索 | 权威度和"有兴趣用户"的代理指标 |
| Retention D1 / D7 / D30 | 留存 | 第 1、7、30 天还回来使用的用户比例 | 及格线 40% / 20% / 10% |

### AI 搜索与 2026 新术语
| 术语 | 中文 | 一句话解释 | 正常范围/怎么用 |
|---|---|---|---|
| GEO / AEO | 生成式 / 答案引擎优化 | 让 ChatGPT、Gemini、Perplexity 等在回答中引用和推荐你 | 衡量被引用频率和语义关联，而不是排名 |
| AI Overviews (AIO) | AI 概览 | Google 结果顶部的 AI 摘要（前身 SGE，2024 年 5 月在美国正式上线） | 会分流点击；被摘要引用本身就是曝光 |
| AI Mode | AI 模式 | Google 搜索里的对话式 AI 搜索（2025 年推出） | 数据计入 GSC"网页"类型，不能单独拆出 |
| Evidence Pool | 证据池 | 模型生成答案时检索、引用的来源集合 | GEO 的目标就是进入这个集合 |
| Knowledge Unit | 知识单元 | 能被模型单独拆出来复用的一段完整解释 | 用清晰 H2 / H3 回答是什么、为什么、怎么用、和 X 比、常见错误 |
| Entity | 实体 | 搜索引擎和模型能识别的品牌、人、产品 | Organization / SoftwareApplication Schema + `sameAs` 关联社交主页 |
| Google-Extended | Gemini 训练控制标识 | 控制内容是否用于 Gemini 训练的 robots 标识 | 屏蔽它不影响 Google 搜索（含 AI 摘要）中的展示 |
| llms.txt | 大模型站点说明 | 根目录 Markdown，为大模型列出重要内容（2024 年提出） | 提案标准，主流引擎尚未承诺使用；成本低，可选做 |
| Scaled Content Abuse | 规模化内容滥用 | 大规模生成低价值页面操纵排名（Google 2024 年 3 月垃圾政策） | AI 批量生成的页面必须有独立价值 |

## 相关
- Checklist skill(s): seo-checklist-keyword, seo-checklist-onpage, seo-checklist-technical, seo-checklist-performance, seo-checklist-backlinks, seo-checklist-analytics, seo-checklist-geo
- 其他手册 skills: seo-guide-keyword-research, seo-guide-page-structure-tags, seo-guide-technical-infra, seo-guide-content-eeat, seo-guide-backlinks, seo-guide-geo-ai-search, growth-guide-analytics-tools, growth-guide-monetization, growth-guide-xiaohongshu, growth-guide-x-reddit
