---
name: seo-growth-skills-index
description: 做 SEO、GEO、SERP、外链、流量、发布或社交账号运营但不确定该用哪个 skill 时使用；列出全部 30 个子 skill 的名称、作用和选择路线。
---

# SEO / GEO / 增长 Skills 总索引

> 30 个子 skill = **16 个 Checklist skill**（逐条核对，带通过标准，来自 `checklist/checklist.json` 的 188 条）+ **14 个手册 skill**（原理、打法、模板，来自 `handbook/`）。仓库：ArcueidShiki/seo。

## 怎么用这个索引
1. 用户要**检查 / 审计 / 打分**某方面 → 用对应的 `seo-checklist-*`。
2. 用户要**学怎么做 / 制定方案 / 写内容** → 用对应的 `seo-guide-*` 或 `growth-guide-*`。
3. 一个任务跨多个方面时，按下面的"常见任务路线"依次调用，最后合并成一个按优先级排序的行动表。
4. 只有一个网址、没有更多说明时，默认走"网站全面体检"路线。

## A. Checklist skills（16 个，逐条核对）

| Skill | 类别 · 条目数 | 作用 |
|---|---|---|
| `seo-checklist-keyword` | 关键词与选题 · 11 条 | 做关键词研究、选词、判断 KD 和搜索量门槛、规划一页一词或竞品词页面时使用；逐条核对 SEO checklist 的关键词与选题类条目。 |
| `seo-checklist-structure` | 网站结构与内链 · 9 条 | 检查网站结构、URL 规范、内链、主题集群和孤立页面时使用；逐条核对 SEO checklist 的网站结构与内链类条目。 |
| `seo-checklist-onpage` | 页面标签 On-page · 13 条 | 检查页面 title、meta description、H1、关键词位置、图片 alt、Open Graph 与 Twitter 卡片时使用；逐条核对 SEO checklist 的页面标签类条目。 |
| `seo-checklist-technical` | 技术 SEO · 15 条 | 检查技术 SEO（robots.txt、sitemap、canonical、noindex、SSR 渲染、viewport、404、favicon）或排查页面不收录时使用；逐条核对 checklist 技术 SEO 条目。 |
| `seo-checklist-performance` | 速度与体验 · 9 条 | 优化网站速度、Core Web Vitals（LCP、INP、CLS）、图片体积和 Lighthouse 分数时使用；逐条核对 checklist 速度与体验条目。 |
| `seo-checklist-infra` | 域名 / HTTPS / CDN / 安全 · 10 条 | 配置域名、www 与裸域 301、HTTPS、Cloudflare 缓存与防护、API 和 Webhook 放行、域名邮箱 SPF/DKIM/DMARC 时使用；逐条核对 checklist 基础设施条目。 |
| `seo-checklist-indexing` | 提交与收录 · 8 条 | 在 Google Search Console、Bing、IndexNow、百度等站长后台验证网站、提交 sitemap、请求收录、排查索引报告时使用；逐条核对 checklist 提交与收录条目。 |
| `seo-checklist-content` | 内容与 E-E-A-T · 16 条 | 规划和审查内容（搜索意图、页面模板、E-E-A-T、AI 生成内容规则、更新与二次分发）时使用；逐条核对 checklist 内容与 E-E-A-T 条目。 |
| `seo-checklist-serp` | SERP 富结果与点击率 · 8 条 | 提升搜索结果展示和点击率：JSON-LD 结构化数据、面包屑、站点名、富结果资格、精选摘要时使用；逐条核对 checklist SERP 条目。 |
| `seo-checklist-geo` | GEO · AI 搜索优化 · 12 条 | 做 GEO（让 ChatGPT、Perplexity、Claude、Gemini、AI Overviews 引用你的网站）时使用；逐条核对 checklist 的 AI 搜索优化条目，含 llms.txt、AI 爬虫与提及。 |
| `seo-checklist-backlinks` | 外链建设 · 15 条 | 做外链建设（导航站、发布平台、付费目录、内容外链、竞品冷启动外链分析、锚文本与追踪）时使用；逐条核对 checklist 外链条目。 |
| `seo-checklist-analytics` | 数据与监测 · 8 条 | 安装和配置网站统计（GA4、Plausible、Umami、Clarity、百度统计）、转化事件、GSC 关联和每周每月数据复盘时使用；逐条核对 checklist 数据与监测条目。 |
| `seo-checklist-launch` | 发布与冷启动 · 14 条 | 产品上线发布与冷启动（Product Hunt、Hacker News、Reddit、Indie Hackers、BetaList、AI 导航站、V2EX 等）时使用；逐条核对 checklist 发布条目。 |
| `seo-checklist-social` | 平台账号运营 · 27 条 | 运营社交平台账号（X、Reddit、小红书、抖音 / TikTok、YouTube、LinkedIn、公众号）的定位、发帖、涨粉和限流自检时使用；逐条核对 checklist 平台运营条目。 |
| `seo-checklist-i18n` | 多语言与本地化 · 5 条 | 网站做多语言、多地区（hreflang、本地化关键词、语言版本 URL 结构）时使用；逐条核对 checklist 多语言与本地化条目。 |
| `seo-checklist-monetize` | 变现 · 8 条 | 规划流量变现（AdSense 等广告、订阅定价与试用、支付渠道选择、联盟营销、留存指标）时使用；逐条核对 checklist 变现条目。 |

## B. 手册 skills（14 个，方法与模板）

| Skill | 对应手册章节 | 作用 |
|---|---|---|
| `seo-guide-keyword-research` | `handbook/01-keyword-research.md` | 当用户要做关键词研究、选词、挖长尾词或上升趋势词、判断 KD 与搜索量门槛、做 Top-10 SERP 与搜索意图分析、找竞品词或规划一页一词时使用（keyword research / KD / 选词 / 长尾词 / SERP 分析 / Google Trends / 关键词蚕食）。 |
| `seo-guide-page-structure-tags` | `handbook/02-page-structure-and-tags.md` | 当用户要设计或审查页面结构与 SEO 标签时使用，包括落地页模块、TDK（title / meta description）、H1–H6、图片 alt、canonical、meta robots、hreflang、Open Graph、Schema JSON-LD、URL slug、内链与面包屑（on-page SEO / 页面标签 / 结构化数据）。 |
| `seo-guide-technical-infra` | `handbook/03-technical-seo-and-infra.md` | 当用户要做技术 SEO 或站点基础设施时使用，包括 sitemap、robots.txt、SSR/SSG、Core Web Vitals、域名与 www 301、子目录 vs 子域名、域名邮箱、Cloudflare 缓存/WAF/限流、GSC/Bing 提交与 IndexNow（technical SEO / 收录 / LCP INP CLS / 速度）。 |
| `seo-guide-content-eeat` | `handbook/04-content-and-eeat.md` | 当用户要做内容选题、写或改 SEO 文章、规划内容日历、落实 E-E-A-T、用 AI 写稿、用 5 篇文章法做内链主题集群、转载分发或制定内容更新 SOP 时使用（content SEO / blog / 写文章 / E-E-A-T / AI 内容 / 内容营销）。 |
| `seo-guide-backlinks` | `handbook/05-backlinks.md` | 当用户要做外链建设、规划冷启动外链、挑选免费或付费目录与发布平台、评估链接质量或 DR、分析竞品冷启动外链、控制锚文本分布或建外链追踪表时使用（backlinks / 外链 / 反链 / DR / RD / link building / 目录提交）。 |
| `seo-guide-geo-ai-search` | `handbook/06-geo-ai-search.md` | 当用户要做 GEO / AEO / AI 搜索优化，想让 ChatGPT、Perplexity、Claude、Gemini、Google AI Overviews 引用或推荐自己的品牌和内容，或要配置 AI 爬虫、llms.txt、答案先行写法、实体 Schema、AI 引用率测试时使用（GEO / AI SEO / LLM 引用 / AI 可见度）。 |
| `growth-guide-launch-distribution` | `handbook/07-launch-and-distribution.md` | 当用户要规划产品上线与冷启动、排获客渠道优先级、准备 Product Hunt / Show HN / AI 导航站发布、整理发布素材包，或设计品牌定位与内容引流私域漏斗时使用，触发词如 上线 / 冷启动 / 发布平台 / Product Hunt / 导航站 / 获客渠道 / 私域。 |
| `growth-guide-x-reddit` | `handbook/08-x-and-reddit.md` | 当用户要运营 X（Twitter）或 Reddit，如设置主页、写推文和 Thread、做 buildinpublic、排发帖节奏、新号养号攒 karma、挑选 subreddit、避免删帖或影子封禁时使用，触发词如 推特 / X 涨粉 / buildinpublic / Reddit / karma / subreddit / shadowban。 |
| `growth-guide-xiaohongshu` | `handbook/09-xiaohongshu.md` | 当用户要做小红书账号定位、起号、优化主页四件套、找选题、做高点击率封面、写爆款标题和笔记文案、排发布时间与内容日历、诊断笔记数据、排查限流或掉收录、规划变现时使用，触发词如 小红书 / 起号 / 封面 / 爆款标题 / 笔记 / 限流 / 敏感词 / 蒲公英。 |
| `growth-guide-douyin-video-wechat` | `handbook/10-douyin-video-wechat.md` | 当用户要做抖音、TikTok、YouTube Shorts 短视频的搜索 SEO 与推荐流量，写 60 秒脚本和前 3 秒钩子、选话题标签，或做公众号、微信小程序搜一搜 SEO、私域承接、全平台 SEO 与 App ASO 时使用，触发词如 抖音 / 短视频 / 完播率 / 视频号 / 搜一搜 / 小程序 / 公众号 / ASO。 |
| `growth-guide-analytics-tools` | `handbook/11-analytics-and-tools.md` | 当用户要选型和接入网站统计（GA4、Plausible、Umami、百度统计）、配置 Search Console 与站长后台、搭建每周每月指标仪表板、解读 DR / KD / CPS 等 SEO 指标、查反链，或排查自然流量下跌与页面不收录时使用，触发词如 GA4 / GSC / 流量下跌 / 未编入索引 / DR / 仪表板 / SEO 工具。 |
| `growth-guide-monetization` | `handbook/12-monetization.md` | 当用户要选择变现模型、验证留存与付费率、给 SaaS 或工具定价、设计免费加 PRO 与试用、申请 AdSense 并估算 RPM、选择 Stripe / Paddle / Creem 等支付渠道，或搭建联盟分佣与 CPS 时使用，触发词如 变现 / 定价 / 订阅 / 广告收入 / RPM / 支付渠道 / MoR / Affiliate。 |
| `growth-guide-indie-mindset` | `handbook/13-mindset-and-case-studies.md` | 当用户要为独立开发选方向、找小众市场、用关键词评估产品点子、做品类定位与产品哲学、思考护城河、建立增长系统、写打败 SERP 的内容简报，或参考 SEO 成功案例与学习资源时使用，触发词如 独立开发 / 选方向 / 小众市场 / 产品点子 / 定位 / 护城河 / 增长系统 / 案例。 |
| `seo-guide-glossary` | `handbook/99-glossary.md` | 当用户问 SEO、GEO 或增长术语的含义、正常范围和用法时使用，例如 KD、DR、RD、CPS、CTR、canonical、LCP / INP / CLS、E-E-A-T、Parent Topic、AI Overviews、llms.txt，或看不懂 Ahrefs、GSC、GA4 报表指标（SEO 名词解释 / glossary / 术语）。 |

## 常见任务路线

| 用户的任务 | 依次调用 |
|---|---|
| 新产品从 0 规划 SEO | `growth-guide-indie-mindset` → `seo-guide-keyword-research` → `seo-checklist-keyword` → `seo-guide-page-structure-tags` |
| 网站全面体检（给一个网址） | `seo-checklist-technical` → `seo-checklist-indexing` → `seo-checklist-onpage` → `seo-checklist-performance` → `seo-checklist-serp` → `seo-checklist-geo` → `seo-checklist-structure` |
| 页面不收录 / 收录慢 | `seo-checklist-technical` → `seo-checklist-indexing` → `seo-guide-technical-infra` |
| 有排名但点击率低 | `seo-checklist-onpage` → `seo-checklist-serp` → `seo-guide-page-structure-tags` |
| 想被 ChatGPT / Perplexity 推荐 | `seo-guide-geo-ai-search` → `seo-checklist-geo` → `seo-checklist-backlinks` |
| 上线发布 / 冷启动 | `growth-guide-launch-distribution` → `seo-checklist-launch` → `seo-checklist-indexing` → `seo-checklist-analytics` |
| 第一批外链 | `seo-guide-backlinks` → `seo-checklist-backlinks` |
| 写内容 / 博客 | `seo-guide-content-eeat` → `seo-checklist-content` → `seo-guide-keyword-research` |
| 开社交账号（X / Reddit） | `growth-guide-x-reddit` → `seo-checklist-social` |
| 小红书起号 / 爆款笔记 | `growth-guide-xiaohongshu` → `seo-checklist-social` |
| 抖音 / 短视频 / 公众号 / 小程序 | `growth-guide-douyin-video-wechat` → `seo-checklist-social` |
| 数据复盘 / 选工具 | `growth-guide-analytics-tools` → `seo-checklist-analytics` |
| 变现 / 支付 / 定价 | `growth-guide-monetization` → `seo-checklist-monetize` |
| 多语言 / 出海多地区 | `seo-checklist-i18n` → `seo-guide-technical-infra` |
| 看不懂术语（DR、KD、INP…） | `seo-guide-glossary` |

## 输出约定（所有子 skill 通用）
- 结论先行，然后给按 P0 / P1 / P2 排序的行动表；状态只用 ✅ 通过 / ⚠️ 部分 / ❌ 未通过 / ❓ 待确认 / — 不适用。
- 没有证据的条目标为 ❓，不要假设已通过；涉及预期效果时写明不确定性（例如"新站通常约 3 个月开始起量，6–12 个月稳定"）。
- 不建议违反平台规则的做法（刷量、买评价、互刷 karma、PBN 外链）。
