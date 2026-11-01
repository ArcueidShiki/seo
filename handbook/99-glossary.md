# SEO 名词解释

> 本章合并了原知识库的《SEO 名词解释》（基础、页面、技术、站外、数据 5 张表）和《Ahrefs SEO 名词》（26 条），按主题分组，并补充了 2026 年常用的新术语（AI Overviews、GEO、llms.txt、INP 等）。
> "怎么用 / 正常范围"一栏给出本手册各章采用的经验阈值，是起步参考，不是官方标准。标"补充"的条目不在原文中。

## 1. 搜索基础

| 术语 | 英文 | 中文解释 | 怎么用 / 正常范围 |
|---|---|---|---|
| SEO | Search Engine Optimization | 通过优化网站和内容，在搜索引擎里获得更多自然（非广告）流量 | 新站一般要 3–6 个月才见效 |
| SERP | Search Engine Results Page | 搜索结果页，包含自然结果、广告、AI 摘要、富结果等 | 判断关键词难度时，一定要亲自看一遍前 10 名 |
| 自然流量 | Organic Traffic | 来自非广告搜索结果的访问 | GSC"效果"报告里的点击 |
| 排名 | Ranking | 页面在某个查询下的位置 | 排第 1 的点击率约 27.6%，约是第 10 名的 10 倍（原文引用的 Backlinko 数据） |
| 抓取 | Crawl | 爬虫访问并下载页面 | 用 robots.txt 控制，用内链和 sitemap 引导 |
| 爬虫 | Spider / Bot | 自动抓取网页的程序，如 Googlebot、Bingbot | 别让 WAF 误拦；AI 爬虫见第 8 节 |
| 索引 / 收录 | Index | 搜索引擎存储并可以拿来排名的页面集合 | 用 GSC 的"网页"报告查看 |
| 抓取预算 | Crawl Budget | 搜索引擎愿意在你的站上花的抓取量 | 小站很少受限；大站要减少参数页、重复页、死链 |
| 移动优先索引 | Mobile-first Indexing | Google 主要以移动版页面来索引和排名 | 移动版内容不能比桌面版少 |
| SERP 功能 | SERP Features | 精选摘要、相关问题（PAA）、图片、视频、AI 摘要等 | 功能越多，自然结果的点击越少（看 CPS） |
| 精选摘要 | Featured Snippet | 结果顶部直接给出答案的摘录框 | 段首用 40–60 字直接回答问题，更容易被选中 |
| 相关问题 | People Also Ask (PAA) | "其他人还问了"的折叠问答 | FAQ 选题的来源 |
| 富结果 | Rich Results | 带星级、价格、面包屑等增强信息的结果 | 需要结构化数据，但不保证一定展示 |
| 零点击搜索 | Zero-click Search | 用户在 SERP 上就得到答案，不点击任何结果 | AI 摘要让这一比例上升，品牌曝光本身也有价值 |

## 2. 关键词与搜索意图

| 术语 | 英文 | 中文解释 | 怎么用 / 正常范围 |
|---|---|---|---|
| 关键词 | Keyword | 用户输入的搜索词 | 一个页面锁定一个主题 |
| 种子词 | Seed Keyword | 拓词的起点 | 通过下拉词、相关搜索、AI 扩展到约 50 个 |
| 头部词 | Head Term | 搜索量大、竞争激烈的短词 | 新站避开 |
| 长尾词 | Long-tail Keyword | 搜索量小、意图明确、转化率高的长词 | 独立站的主战场；"10 个小而准的选题胜过 1 个大而泛的" |
| 搜索意图 | Search Intent | 信息型、导航型、商业调研型、交易型 | 页面类型要和 SERP 主流类型一致（工具页、教程、对比） |
| 搜索量 | Search Volume | 目标国家的月均搜索次数 | 起步参考：> 500（Postma 打法）或 ≥ 1000（潜力关键词篇） |
| 关键词难度 | KD / Keyword Difficulty | 进入前 10 的难度（Ahrefs 主要按前 10 页面的外链计算） | 新站：< 20 最稳，宽松上限 < 50；不同工具的 KD 不能横向比较 |
| 单次点击费用 | CPC / Cost Per Click | 广告主为该词每次点击支付的价格 | 用来估算自然流量的价值，见 [12](../12-monetization/) |
| 下拉联想词 | Autocomplete | 搜索框自动补全的建议词 | Google、小红书、抖音、微信都适用，代表真实需求 |
| 相关搜索 | Related Searches | SERP 底部的相关查询 | 拓词 |
| 上升查询 | Rising Queries | Google Trends 里近期增长快的查询 | 看 7 天、30 天、90 天的窗口，越新机会越大 |
| 词根法 | Root Word Method | 通用词根（generator、maker、editor、tool、free）+ 主题组合 | 在 Trends 里搜词根，看 Rising |
| 关键词蚕食 | Keyword Cannibalization | 站内多个页面争同一个词，互相稀释 | 维护"关键词 → URL"映射表，一个词只对应一个页面 |
| 关键词差距 | Keyword Gap / Content Gap | 竞品有排名而你没有的词 | 选题来源 |
| 临门一脚词 | Striking Distance Keywords | 排在 11–30 名、已有展示的词 | 优先用内链和补内容推上首页 |

## 3. 页面与内容

| 术语 | 英文 | 中文解释 | 怎么用 / 正常范围 |
|---|---|---|---|
| 标题标签 | Title Tag | `<title>`，权重最高的页面标签，影响排名和点击率 | 30–60 字符，中文 ≤ 30 字；主关键词靠前；全站唯一 |
| 描述 | Meta Description | SERP 摘要的候选文字，不直接影响排名，影响点击率 | 80–155 字符；像广告文案一样写，每页唯一 |
| 关键词标签 | Meta Keywords | 历史遗留标签 | Google 忽略，百度权重很低；可以不写 |
| TDK | Title / Description / Keywords | 三者的合称（国内常用说法） | 与 H1、正文、锚文本、Schema 保持一致 |
| 标题层级 | H1–H6 | 内容层级 | 每页只有一个 H1，且包含主关键词 |
| URL 结构 | URL Slug | 路径部分 | 短、有语义、包含关键词；不要随意修改 |
| 内链 | Internal Link | 站内页面之间的链接，传递权重、引导抓取 | 文章链到产品页；用"5 篇文章漏斗"集中权重，见 [04](../04-content-and-eeat/) |
| 锚文本 | Anchor Text | 链接上可点击的文字 | 内链可以用目标词；外链应以品牌词、自然描述为主 |
| 替代文本 | Alt Text | 图片的文字描述，影响无障碍和图片搜索 | 一句话描述图片本身；装饰图用 `alt=""` |
| Open Graph | OG Tags | 控制链接在社交平台分享时的卡片 | og:image 用 1200×630 的绝对地址 |
| Twitter 卡片 | Twitter Card | X 上的分享卡片 | `summary_large_image` |
| 关键词密度 | Keyword Density | 关键词在正文中的占比 | ⚠️ 旧规则说 2–8%，已过时；自然出现即可，不要堆砌 |
| 重复内容 | Duplicate Content | 多个 URL 内容相同或相近 | 不会直接被惩罚，但会稀释信号；用 canonical 或 301 处理 |
| 薄内容 | Thin Content | 信息量极少、没有独立价值的页面 | 合并、补充，或设为 noindex |
| 主题集群 | Topic Cluster / Pillar Page | 一个支柱页加多篇子文章，互相链接 | 建立主题权威 |
| E-E-A-T | Experience, Expertise, Authoritativeness, Trustworthiness | 经验、专业、权威、可信。来自 Google 质量评估指南的信任框架，不是单一排名因素 | 署名作者、About / Contact 页、一手截图和数据，见 [04](../04-content-and-eeat/) |
| YMYL | Your Money or Your Life | 涉及钱、健康、法律、安全的内容 | 对可信度要求最高；写清风险和免责声明 |
| 有用内容 | Helpful Content | Google 强调"为人而写"的内容评估方向 | 先看内容是否真正解决问题，而不是由谁生成 |
| 程序化 SEO | Programmatic SEO | 用模板和数据批量生成页面 | ⚠️ 每页必须有独立价值，否则会触发"规模化内容滥用" |

## 4. 技术 SEO

| 术语 | 英文 | 中文解释 | 怎么用 / 正常范围 |
|---|---|---|---|
| XML 站点地图 | XML Sitemap | 给爬虫看的 URL 清单，是提示而不是命令 | 只放可索引、canonical、返回 200 的 URL；单个文件 ≤ 5 万个 URL、≤ 50MB（未压缩） |
| 站点地图索引 | Sitemap Index | 多个 sitemap 的索引文件 | 按 pages / blog / products 等拆分 |
| lastmod | lastmod | 页面最后修改日期 | 填真实的修改日期，不要每天全部刷新；changefreq 和 priority 基本被忽略 |
| robots.txt | robots.txt | 控制爬虫可以抓取哪些路径 | 不要屏蔽重要栏目；在里面声明 Sitemap 地址 |
| meta robots | Meta Robots | 页面级的索引和跟随控制 | 薄页、工具页用 `noindex, follow` |
| 规范标签 | Canonical | 声明一组重复页面里的首选 URL，是提示不是指令 | 每页都有一个指向自己的绝对地址 canonical；目标页返回 200 |
| 301 重定向 | 301 Redirect | 永久跳转，传递权重 | 迁移、合并页面、www 和非 www 统一时使用；一跳到位 |
| 302 重定向 | 302 Redirect | 临时跳转 | 不要用它代替 301 |
| 404 / 软 404 | 404 / Soft 404 | 页面不存在 / 内容太薄被当作不存在 | 内链 404 应为 0；提供自定义 404 页面 |
| 5xx | Server Error | 服务器错误 | 会影响抓取；检查 CDN 和 WAF 是否拦截了爬虫 |
| 重定向链 | Redirect Chain | 多次连续跳转 | 内链直接指向最终 URL |
| hreflang | hreflang | 多语言 / 多地区版本的对应关系 | 互相指向，并包含 x-default |
| HTTPS | HTTPS | 加密传输，是基础信任信号 | 全站 HTTPS，没有混合内容 |
| TTFB | Time To First Byte | 首字节时间 | Google 的参考值是 ≤ 0.8 秒；营销页走边缘缓存后，海外访问争取 < 200 毫秒 |
| 核心网页指标 | Core Web Vitals | LCP、INP、CLS 三项体验指标 | 按真实用户第 75 百分位计算 |
| LCP | Largest Contentful Paint | 最大内容绘制时间 | ≤ 2.5 秒 |
| INP | Interaction to Next Paint | 交互到下一次绘制的延迟。**2024 年 3 月取代了 FID** | ≤ 200 毫秒 |
| CLS | Cumulative Layout Shift | 累计布局偏移 | ≤ 0.1；广告位和图片要预留尺寸 |
| FID | First Input Delay | 首次输入延迟（已退役） | 2024 年后的资料若还写 FID，说明已过时 |
| 结构化数据 | Structured Data / Schema | 用 Schema.org 词汇向机器描述页面 | 首选 JSON-LD；内容必须和页面可见内容一致；不伪造评分 |
| JSON-LD | JSON-LD | Google 推荐的结构化数据格式 | 用 Rich Results Test 验证，0 错误 |
| 孤儿页 | Orphan Page | 没有任何内链指向的页面 | 补内链，放进 sitemap |
| 抓取深度 | Crawl Depth | 从首页到达该页需要点几次 | 重要页面 ≤ 3 次点击 |
| 服务端渲染 | SSR / SSG | 在服务器端生成 HTML | 核心内容应出现在初始 HTML 里，对爬虫和 AI 爬虫更友好 |
| IndexNow | IndexNow | Bing 等搜索引擎支持的 URL 主动推送协议 | 内容更新后立即推送 |

## 5. 外链与权威度

| 术语 | 英文 | 中文解释 | 怎么用 / 正常范围 |
|---|---|---|---|
| 外链 / 反链 | Backlink | 其他网站指向你的链接 | 是第三方的"信任票" |
| 引用域名 | Referring Domain (RD) | 有多少个不同的域名链接到你 | 比外链总数更能反映真实权威 |
| 链接权重 | Link Juice / Link Equity | 通过链接传递的排名信号 | 被分摊到页面的所有出链上 |
| Dofollow | Dofollow | 默认的链接，传递权重 | DR 增长主要靠这类链接 |
| Nofollow | rel="nofollow" | 声明"不背书"，不传递权重 | 仍然有流量和品牌价值；国内大社区和 Reddit 基本都是 nofollow |
| UGC / Sponsored | rel="ugc" / rel="sponsored" | 用户生成内容链接 / 付费链接 | **付费链接必须标 sponsored** |
| DA / PA | Domain / Page Authority | Moz 的域名 / 页面权威度指标 | 和 DR 类似，不同工具不能横向比较 |
| AS | Authority Score | Semrush 的权威度指标 | 只是参考，Google 不使用这些第三方指标 |
| 锚文本多样性 | Anchor Diversity | 外链锚文本的分布 | 精确匹配关键词的锚文本只占少数 |
| 链接增速 | Link Velocity | 外链增长的速度 | 平稳增长；突然暴增看起来不自然 |
| 垃圾链接 | Link Spam / Toxic Links | 操纵排名的低质量链接 | 没被人工处罚就不必急着拒绝（disavow） |
| PBN | Private Blog Network | 私有博客网络（黑帽手法） | 不要碰 |
| 客座文章 | Guest Post | 在其他站点投稿并带链接 | 先过四道门槛：DR、相关性、真实流量、dofollow |
| 目录提交 | Directory Submission | 提交到导航站、目录站 | 冷启动第 0–1 月的主要外链来源，见 [05](../05-backlinks/) |
| 内容转载 | Syndication | 把文章转发到 Medium、Dev.to 等 | 先在自己站发布，被收录后再转；转载页的 canonical 指回原文 |
| 品牌提及 | Brand Mention | 提到品牌但没有链接 | 仍有价值，尤其对 GEO |
| 友链 | Friend Links | 站点之间互换链接（国内常见） | 只和相关的优质站点交换 |
| 拒绝链接 | Disavow | 告诉 Google 忽略某些外链 | 只在被人工处罚或有明显垃圾外链攻击时使用 |
| 站点声誉滥用 | Site Reputation Abuse | 在高权重站点上寄生发布低质量第三方内容（parasite SEO） | Google 2024 年起打击的对象 |

## 6. Ahrefs 指标（26 条）

| 术语 | 英文 | 中文解释 | 怎么用 / 正常范围 |
|---|---|---|---|
| DR | Domain Rating | 域名级外链强度，0–100 的相对分数 | 0–10 新站 / 10–30 小站 / 30–50 做过系统外链建设 / 50–70 细分强站 / 70–90 大媒体 / 90+ 顶级；**独立站做到 20–40 已经很有竞争力** |
| UR | URL Rating | 页面级外链强度 | 判断单个页面能不能排上去 |
| RD | Referring Domains | 引用域名数 | 核心过程指标；按月看新增和丢失 |
| Backlinks | Backlinks | 外链总数（含同一域名的重复链接） | 不如 RD 有参考价值 |
| Referring Pages | Referring Pages | 有链接指向你的页面数 | — |
| KD | Keyword Difficulty | 关键词难度 | 新站 < 20 最稳 |
| Volume | Search Volume | 目标国家的月均搜索量 | 搭配 Clicks 一起看 |
| Clicks | Clicks | 估算每月的实际点击 | 比搜索量更接近真实流量 |
| CPS | Clicks Per Search | 每次搜索平均带来的点击数 | 明显 < 1 时，说明广告或 SERP 功能吃掉了点击，降低优先级（推断阈值）。**和营销里的 CPS（按成交付费）不是一回事** |
| Parent Topic | Parent Topic | 这个词是否应该由一个更大主题的页面来覆盖 | 和目标词不同时，优先在 Parent Topic 页面覆盖，不新开页面 |
| Organic Traffic | Organic Traffic | Ahrefs 估算的自然流量 | 判断一个站是否真的有搜索流量；是估算值 |
| Organic Keywords | Organic Keywords | 有排名的关键词数 | 看站点的覆盖面 |
| Top Pages | Top Pages | 自然流量最多的页面 | 拆竞品：哪些页面在赚流量 |
| Top Keywords | Top Keywords | 带来最多流量的关键词 | 找内容缺口 |
| URL Keywords | URL Keywords | 单个页面有排名的关键词 | 补 FAQ 和段落 |
| Anchors | Anchors | 锚文本分布 | 检查是否过度优化 |
| Dofollow Links | Dofollow Links | 传权重的外链 | 链接构成应看起来自然 |
| Nofollow Links | Nofollow Links | 不传权重的外链 | 有一定比例才正常 |
| Link Growth | Link Growth | 外链增长曲线 | 检查是否有异常突增 |
| New Backlinks | New Backlinks | 新获得的外链 | 每月复盘 |
| Lost Backlinks | Lost Backlinks | 丢失的外链 | 重要链接丢失时尝试找回 |
| Traffic Potential | Traffic Potential (TP) | 该话题第 1 名页面能获得的总流量（补充） | 比单个词的搜索量更能反映页面潜力 |
| Traffic Value | Traffic Value | 自然流量按 CPC 折算的月价值（补充） | 和"单次访问收益 vs CPC"思路一致 |
| Content Gap | Content Gap | 竞品有排名而你没有的词（补充） | 选题来源 |
| Linked Domains | Linked Domains | 你的站链接出去的域名数（补充） | 检查出链质量 |
| Broken Backlinks | Broken Backlinks | 指向你站内 404 页面的外链（补充） | 用 301 把权重找回来 |

## 7. 数据分析

| 术语 | 英文 | 中文解释 | 怎么用 / 正常范围 |
|---|---|---|---|
| GSC | Google Search Console | Google 官方的站长后台 | 查看收录、查询词、点击率、抓取错误、人工处置 |
| GA4 | Google Analytics 4 | Google 的行为分析工具 | 把注册、试用、付费设为 Key events；和 GSC 关联 |
| 展示 | Impressions | 结果在 SERP 上被展示的次数 | 展示涨了点击没涨，先查 CTR |
| 点击 | Clicks | 从 SERP 点进来的次数 | — |
| 点击率 | CTR | 点击 ÷ 展示 | 按排名位置比较；高展示低 CTR 的页面要改 title 和 description；小红书封面以 ≥ 5% 为及格线 |
| 平均排名 | Average Position | GSC 里的平均位置 | 和具体查询一起看，否则没有意义 |
| 查询 | Queries | 用户实际搜索的词 | 每月按页面复盘，补充没回答到的问题 |
| 跳出率 | Bounce Rate | GA4 里指"未互动会话"的占比 | 一次性工具重点关注 |
| 互动率 | Engagement Rate | 停留超过 10 秒、发生转化或浏览 ≥ 2 页的会话占比 | 与跳出率互补 |
| 停留时长 | Dwell Time | 从 SERP 点进来到返回 SERP 的时间（行业说法，不是 GA 指标） | 内容是否真正解决了问题 |
| 转化 | Conversion / Key Event | 注册、购买等目标行为 | 每个渠道单独统计 |
| UTM | UTM Parameters | 链接上的来源追踪参数 | 社交简介、KOL 链接都要加 |
| 引荐流量 | Referral | 从其他网站点进来的访问 | 按发布平台、目录分组看效果 |
| 直接访问 | Direct | 直接输入网址或从书签访问 | 工具"被记住"的信号 |
| 品牌词查询 | Branded Query | 包含品牌名的搜索 | 权威度和"有兴趣的用户"的代理指标 |
| 留存 | Retention D1 / D7 / D30 | 第 1、7、30 天还回来使用的用户比例 | 及格线 40% / 20% / 10% |
| ROI | Return on Investment | 投资回报率 | 内容、外链、广告都应该算一算 |

## 8. AI 搜索与 2026 年新术语

| 术语 | 英文 | 中文解释 | 怎么用 / 正常范围 |
|---|---|---|---|
| GEO | Generative Engine Optimization | 生成式引擎优化：让 ChatGPT、Gemini、Perplexity 等在回答中引用和推荐你的内容 | 衡量的是"被引用的频率和语义关联"，而不是排名，见 [06](../06-geo-ai-search/) |
| AEO | Answer Engine Optimization | 答案引擎优化，含义和 GEO 基本相同 | — |
| AI Overviews / AIO | AI Overviews | Google 在结果顶部生成的 AI 摘要（前身是 SGE，2024 年 5 月在美国正式上线） | 会分流点击；被摘要引用本身就是曝光。注意 AIO 有时也被用作"AI Optimization"的缩写 |
| AI Mode | AI Mode | Google 搜索里的对话式 AI 搜索模式（2025 年推出） | 数据计入 GSC 的"网页"类型，不能单独拆出来 |
| 证据池 | Evidence Pool | 模型生成答案时检索、引用的来源集合 | GEO 的目标就是进入这个集合 |
| 知识单元 | Knowledge Unit | 能被模型单独拆出来复用的一段完整解释 | 用清晰的 H2 / H3 回答"是什么、为什么、怎么用、和 X 比、常见错误" |
| 实体 | Entity | 搜索引擎和模型能识别的"事物"（品牌、人、产品） | 用 Organization / SoftwareApplication Schema 加 `sameAs` 关联社交主页 |
| 存在密度 | Presence Density | 品牌在多平台、多形式内容里一致出现的程度 | 第三方平台对品牌的描述要保持一致 |
| AI 爬虫 | AI Crawlers | 如 GPTBot、ClaudeBot、PerplexityBot | 在 robots.txt 和 Cloudflare 的 AI 爬虫设置里，按"是否希望被引用"做取舍 |
| Google-Extended | Google-Extended | 控制内容是否用于 Gemini 训练的 robots 标识 | 屏蔽它不影响在 Google 搜索（含 AI 摘要）中的展示 |
| llms.txt | llms.txt | 放在站点根目录的 Markdown 文件，为大模型列出站点的重要内容（2024 年提出） | 提案标准，主流搜索引擎尚未承诺使用；成本低，可选做 |
| 零点击 | Zero-click | 见第 1 节 | 结合品牌词搜索量评估 AI 曝光的价值 |
| 规模化内容滥用 | Scaled Content Abuse | 大规模生成低价值页面来操纵排名（Google 2024 年 3 月起的垃圾政策） | AI 批量生成的页面必须有独立价值 |

## 9. 增长与变现

| 术语 | 英文 | 中文解释 | 怎么用 / 正常范围 |
|---|---|---|---|
| CPM | Cost Per Mille | 每千次展示的广告费用 | 广告主视角 |
| RPM | Revenue Per Mille | 每千次浏览的广告收入 | 月广告收入 ≈ PV ÷ 1000 × RPM |
| CPA | Cost Per Action | 按行动（注册、下载）付费 | KOL 合作的计费方式之一 |
| CPS（营销） | Cost Per Sale | 按成交付费，即分佣 | 联盟营销、KOL；注意和 Ahrefs 的 CPS 区分 |
| CAC | Customer Acquisition Cost | 获取一个付费客户的成本 | 应明显低于 LTV |
| LTV | Lifetime Value | 一个客户在整个生命周期带来的收入 | — |
| MRR / ARR | Monthly / Annual Recurring Revenue | 月 / 年经常性收入 | 订阅产品的核心指标 |
| 流失率 | Churn | 每期取消订阅的比例 | 和留存一起看 |
| 付费率 | Pay Rate / Conversion to Paid | 访客或用户转为付费的比例 | 用"单次访问收益 vs CPC"来判断，见 [12](../12-monetization/) |
| MoR | Merchant of Record | 记录商户：平台作为法律上的卖方，代收代缴各国销售税 / VAT | Paddle、Lemon Squeezy、PayPro Global、Polar 等 |
| LTD | Lifetime Deal | 一次付费、终身使用 | AppSumo；先算长期成本 |
| 联盟营销 | Affiliate | 推荐人按成交拿佣金 | Impact、ShareASale（已并入 Awin） |
| KOL / KOC | Key Opinion Leader / Consumer | 意见领袖 / 关键消费者（小博主、真实用户） | 留存和付费率验证后再投 |
| UGC | User Generated Content | 用户生成的内容 | 评价、作品、话题挑战 |
| 公域 / 私域 | Public / Private Traffic | 平台分发的流量 / 自己能反复触达的用户（微信、邮件列表） | 公域获客 → 私域转化 |
| 引流钩子 | Lead Magnet | 用免费资源换取联系方式 | 注意平台的导流规则 |
| 公开构建 | Build in Public | 公开分享开发进度、数据、失败 | X 上的 #buildinpublic |
| 发布平台 | Launch Platform | Product Hunt、Uneed、BetaList 等 | 每次大版本都可以再发一次 |
| Show HN | Show HN | Hacker News 上展示"可试用作品"的帖子类型 | 标题以 `Show HN:` 开头；不拉票 |
| AI 导航站 | AI Directory | 收录 AI 工具的目录站 | 付费前先看对方的真实流量 |
| ASO | App Store Optimization | 应用商店优化 | 副标题放关键词、截图突出卖点、持续积累评论 |

## 10. 平台运营术语

| 术语 | 平台 | 中文解释 | 怎么用 / 正常范围 |
|---|---|---|---|
| 流量异常（限流） | 小红书 | 笔记或账号的分发被限制，官方叫法是"流量异常" | 发布 24 小时后浏览 < 50 时自检，见 [09](../09-xiaohongshu/) |
| 掉收录 | 小红书 | 笔记搜不到 | 用另一个账号按完整标题搜索来验证 |
| 下拉联想词 | 小红书 / 抖音 / 微信 | 搜索框自动补全 | 选题和标题关键词的来源 |
| 赛道 | 通用 | 内容所属的细分领域 | 选有搜索量、竞争小、离钱近的 |
| 起号 | 通用 | 新账号从 0 到有稳定流量的阶段 | 前 3 个月每周 ≥ 3 篇 |
| 垂直度 | 通用 | 账号内容集中在单一主题的程度 | ≥ 80% 的内容在同一主题 |
| 种草 | 小红书 | 通过真实体验激发购买欲 | 避免广告腔；商单需报备 |
| 蒲公英 | 小红书 | 官方的品牌合作平台 | 商业合作通过它报备 |
| 完播率 | 抖音 / 视频平台 | 看完视频的比例 | 10 秒视频 ≥ 80%；30 秒视频平均看到 ≥ 25 秒 |
| 流量池 | 抖音 | 按数据逐级推荐的分发机制 | 前 3 秒和完播决定能否晋级 |
| 搜一搜 | 微信 | 微信内的搜索入口 | 小程序名称里要有核心关键词 |
| Karma | Reddit | 用户积分 | 养号门槛见 [08](../08-x-and-reddit/)（≥ 100 再推广，≥ 500 再放链接，以版规为准） |
| Shadowban | Reddit / X | 影子封禁：你自己看得见，别人看不见 | 在未登录状态下检查；基本无法恢复 |
| Subreddit | Reddit | 子版块 | 新号优先 5k–50k 成员的细分版块 |
| AutoModerator | Reddit | 版块的自动审核机器人 | 低 karma、带链接的帖子容易被它自动删除 |
| Lists | X | 自定义关注分组 | 按竞品 / KOL / 客户分组来互动 |

## 11. 常用搜索指令

| 指令 | 作用 | 示例 |
|---|---|---|
| `site:` | 只搜指定站点 | `site:producthunt.com "Product Name"` |
| `-site:` | 排除站点 | `"example.com" -site:example.com`：找对你的提及和外链 |
| `"…"` | 精确匹配 | `"Product Name" AI tool` |
| `intitle:` / `inurl:` | 限定标题 / URL 中出现的词 | `intitle:"alternatives" 产品名` |
| `before:` / `after:` | 限定时间（或用"工具 → 时间 → 自定义"） | 回溯竞品冷启动期的提及 |
| `link:` | 旧的反链查询指令 | 已不可靠，改用反链工具 |

## 来源

- [SEO名词解释](https://lownrain.feishu.cn/wiki/ABWzwVvQTiPWdeknyLeclLdFnTh)（独立开发前线｜SEO从0到100）
- [Ahrefs Seo名词](https://lownrain.feishu.cn/wiki/QpsGwfHUkiF08hkLqcxc2lRQnGh)（独立开发前线｜SEO从0到100）
- [DR查询](https://lownrain.feishu.cn/wiki/DgBWwJfadiRW4fkRltwcg2nBnaf)（独立开发前线｜SEO从0到100）
- [反链查询](https://lownrain.feishu.cn/wiki/QgnEw53QbicKk6kx9ImcteXPn1g)（独立开发前线｜SEO从0到100）
- [GEO](https://lownrain.feishu.cn/wiki/L7VTwkIxRitca7kIQNAc4n7nnHg)（独立开发前线｜SEO从0到100）
- [TDK标签](https://lownrain.feishu.cn/wiki/L9viw7hpKipIWukIjJVcqDqMnMe)（独立开发前线｜SEO从0到100）
- [SEO 中最重要的标签详解：TDK、Alt、Schema 到底怎么影响排名](https://lownrain.feishu.cn/wiki/ELffwFhtAiygNtksXDVcFbponub)（独立开发前线｜SEO从0到100）
- [Canonical标签](https://lownrain.feishu.cn/wiki/QuOxwc3oBiUHOKktrGbcI9sAnqd)（独立开发前线｜SEO从0到100）
- [站点地图的格式](https://lownrain.feishu.cn/wiki/Ch3ywS3moiuom8k0ppfcZeiknHb)（独立开发前线｜SEO从0到100）
- [E-E-A-T](https://lownrain.feishu.cn/wiki/I8ZCwxbKGioi07keWSIcnhbenRc)（独立开发前线｜SEO从0到100）
- [SEO关键词研究策略](https://lownrain.feishu.cn/wiki/Rn58w7M9iiIwVbkdev7cfJFknAd)（独立开发前线｜SEO从0到100）
- [如何找到有潜力的关键词](https://lownrain.feishu.cn/wiki/XtlgwkEkmiN0uWkG800cujRvnEe)（独立开发前线｜SEO从0到100）
- [怎么分析一个网站的冷启动外链是什么？](https://lownrain.feishu.cn/wiki/ZeIWwX2wriiHy1kNxbgcB51En4f)（独立开发前线｜SEO从0到100）
- [网站加速和防攻击](https://lownrain.feishu.cn/wiki/HFt6wEYNOiVdWSk9pBfc5GaSnwb)（独立开发前线｜SEO从0到100）
- [给新手独立开发者的建议](https://lownrain.feishu.cn/wiki/Yj5QwQGv4iQ6LmkihUKcUKYsnLe)（独立开发前线｜SEO从0到100）
- [订阅变现](https://lownrain.feishu.cn/wiki/Vw3GwcnKuib84pkeyLGcmypGnLg)（独立开发前线｜SEO从0到100）
- [影响抖音流量分发的因素](https://lownrain.feishu.cn/wiki/XRQBwJiKZil09skOsiCc6ZXLnjf)（独立开发前线｜SEO从0到100）
- [小红书账号限流与检测](https://lownrain.feishu.cn/wiki/CNZZwQogjikAgakVMWDc2dPpn3f)（独立开发前线｜SEO从0到100）
- [怎么在Reddit发帖不容易被删](https://lownrain.feishu.cn/wiki/UOCFw85YSi1pGZkAVj9crK8nnwW)（独立开发前线｜SEO从0到100）
