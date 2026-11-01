# 数据统计与 SEO 工具箱

> 本章收集原知识库各篇提到的统计、查询、外链、内容和体检工具，并给出每周、每月该看哪些指标，以及 Google Search Console（GSC）的常用报告和排查流程。
> 术语（DR、KD、CPS、Parent Topic、CTR 等）的详细解释见 [99 SEO 名词解释](../99-glossary/)。工具价格和免费额度以原文为准，可能已经变化。

## 1. 网站流量统计工具对比

| 工具 | 类型 | 开源 / 自托管 | 价格 | 适合 |
|---|---|---|---|---|
| <img src="https://www.google.com/s2/favicons?domain=analytics.google.com&sz=32" width="16" height="16" alt=""> [Google Analytics 4](https://analytics.google.com/) | 全功能行为分析 | 否 | 免费 | 默认选择；能和 GSC、Google Ads 打通；可配置转化事件 |
| <img src="https://www.google.com/s2/favicons?domain=tongji.baidu.com&sz=32" width="16" height="16" alt=""> [百度统计](https://tongji.baidu.com/) | 全功能 | 否 | 免费 | 面向中国大陆的流量 |
| <img src="https://www.google.com/s2/favicons?domain=plausible.io&sz=32" width="16" height="16" alt=""> [Plausible](https://plausible.io/) | 轻量、注重隐私 | 是（[GitHub](https://github.com/plausible/analytics)） | 云版付费 / 自托管免费 | 不用 Cookie、脚本小；有[公开 Demo](https://plausible.io/plausible.io) |
| <img src="https://www.google.com/s2/favicons?domain=umami.is&sz=32" width="16" height="16" alt=""> [Umami](https://umami.is/) | 轻量、注重隐私 | 是（[GitHub](https://github.com/umami-software/umami)） | 自托管免费 | 独立开发者自托管的热门选择 |
| <img src="https://www.google.com/s2/favicons?domain=github.com&sz=32" width="16" height="16" alt=""> [Shynet](https://github.com/milesmcc/shynet) | 轻量 | 是 | 自托管免费 | 极简统计 |
| <img src="https://www.google.com/s2/favicons?domain=usefathom.com&sz=32" width="16" height="16" alt=""> [Fathom](https://usefathom.com/) | 轻量、注重隐私 | 旧版开源 | 付费云服务 | 想要省心的隐私统计 |
| <img src="https://www.google.com/s2/favicons?domain=electerious.com&sz=32" width="16" height="16" alt=""> [Ackee](https://ackee.electerious.com/) | 轻量 | 是（[GitHub](https://github.com/electerious/Ackee)） | 自托管免费 | Node.js 技术栈 |
| <img src="https://www.google.com/s2/favicons?domain=ahrefs.com&sz=32" width="16" height="16" alt=""> [Ahrefs Web Analytics](https://ahrefs.com/zh/web-analytics) | 轻量 | 否 | 免费（原文在 DR 篇提及） | 已经在用 Ahrefs 的人 |
| <img src="https://www.google.com/s2/favicons?domain=clarity.microsoft.com&sz=32" width="16" height="16" alt=""> [Microsoft Clarity](https://clarity.microsoft.com/) | 热力图、会话录屏 | 否 | 免费 | **补充（非原文）**：和 GA4 搭配，排查落地页哪里流失 |
| <img src="https://www.google.com/s2/favicons?domain=cloudflare.com&sz=32" width="16" height="16" alt=""> [Cloudflare Web Analytics](https://www.cloudflare.com/web-analytics/) | 轻量、无 Cookie | 否 | 免费 | **补充（非原文）**：已用 Cloudflare 的站点零成本接入 |

**选型建议**：

- **最低配置**：GSC + GA4（都免费）。面向中国大陆的站点再加百度统计。
- **注重隐私或面向欧盟**：Plausible / Umami 替代 GA4，不用 Cookie，可以免去大部分 Cookie 弹窗。如果在 GDPR 地区使用 GA4，需要做 Cookie 同意。
- **排查转化问题**：再加 Clarity 看热力图和录屏。

**接入检查**：

1. 每个页面模板都加载统计脚本（在开发者工具的 Network 面板里能看到请求发出）。
2. 脚本异步加载，不影响 Core Web Vitals（在 Lighthouse 里看第三方脚本的影响）。
3. 注册、试用、付款都配置为转化事件（GA4 叫 Key events），在实时报告里能看到测试事件。
4. GA4 和 GSC 已关联，可以把搜索词和站内行为放在一起分析。

> ⚠️ 注意：原文把 Fathom 标为开源。实际上开源的是已停止维护的旧版（Fathom Lite），现在的 Fathom 是闭源的付费云服务。

## 2. 搜索引擎站长后台

| 平台 | 地址 | 必做 |
|---|---|---|
| <img src="https://www.google.com/s2/favicons?domain=search.google.com&sz=32" width="16" height="16" alt=""> [Google Search Console](https://search.google.com/search-console/about) | 全球 | 用域名资源验证，提交 sitemap，用"网址检查"请求编入索引 |
| <img src="https://www.google.com/s2/favicons?domain=bing.com&sz=32" width="16" height="16" alt=""> [Bing Webmaster Tools](https://www.bing.com/webmasters) | 全球（Bing / DuckDuckGo 等） | 可以从 GSC 一键导入；支持 IndexNow 主动推送 |
| <img src="https://www.google.com/s2/favicons?domain=baidu.com&sz=32" width="16" height="16" alt=""> [百度搜索资源平台](https://ziyuan.baidu.com/site/index) | 中国大陆 | 面向国内用户时必做 |
| <img src="https://www.google.com/s2/favicons?domain=sogou.com&sz=32" width="16" height="16" alt=""> [搜狗站长平台](https://zhanzhang.sogou.com/) | 中国大陆 | 可选 |
| <img src="https://www.google.com/s2/favicons?domain=so.com&sz=32" width="16" height="16" alt=""> [360 站长平台](https://zhanzhang.so.com/) | 中国大陆 | 可选 |
| <img src="https://www.google.com/s2/favicons?domain=toutiao.com&sz=32" width="16" height="16" alt=""> [头条站长平台](https://zhanzhang.toutiao.com/) | 中国大陆 | 可选 |

主动提交可以把收录时间从"等自然抓取，几天到几周"缩短。站长后台同时也是查看收录、搜索词、点击率、抓取错误和安全警告的数据中心（技术细节见 [03](../03-technical-seo-and-infra/)）。

## 3. 网站 / 关键词流量查询

| 工具 | 用途 | 免费情况 |
|---|---|---|
| <img src="https://www.google.com/s2/favicons?domain=similarweb.com&sz=32" width="16" height="16" alt=""> [Similarweb](https://www.similarweb.com/) | 竞品整站流量、渠道构成 | 免费可看概览 |
| <img src="https://www.google.com/s2/favicons?domain=semrush.com&sz=32" width="16" height="16" alt=""> [Semrush](https://www.semrush.com/) | 网站 / 关键词流量、KD、相关词、竞品关键词 | 免费约 10 次 / 天 |
| <img src="https://www.google.com/s2/favicons?domain=ahrefs.com&sz=32" width="16" height="16" alt=""> [Ahrefs](https://ahrefs.com/) | 关键词、自然流量、Top Pages、外链 | 付费（部分免费小工具） |
| <img src="https://www.google.com/s2/favicons?domain=moz.com&sz=32" width="16" height="16" alt=""> [Moz](https://moz.com/) | 网站 / 关键词数据、DA | 有限免费 |
| <img src="https://www.google.com/s2/favicons?domain=neilpatel.com&sz=32" width="16" height="16" alt=""> [Ubersuggest](https://app.neilpatel.com/en/ai-keyword-overview) | 关键词、内容灵感、竞品域名 | 有免费额度 |
| <img src="https://www.google.com/s2/favicons?domain=traffic.cv&sz=32" width="16" height="16" alt=""> [traffic.cv](https://traffic.cv/) | 网站流量查询；[流量飙升榜](https://traffic.cv/leaderboard/traffic/2025/12/trending)用来发现新词 | 免费查看 |
| <img src="https://www.google.com/s2/favicons?domain=aitdk.com&sz=32" width="16" height="16" alt=""> [AITDK](https://aitdk.com/) | 浏览器插件，一键看流量和 SEO 数据 | 免费 |
| <img src="https://www.google.com/s2/favicons?domain=sitedata.dev&sz=32" width="16" height="16" alt=""> [SiteData](https://sitedata.dev/zh-cn) | 浏览器插件，流量分析 | 免费 |
| <img src="https://www.google.com/s2/favicons?domain=trends.google.com&sz=32" width="16" height="16" alt=""> [Google Trends](https://trends.google.com/trends/) | 关键词趋势、Rising 上升词、相对搜索量 | 免费 |
| <img src="https://www.google.com/s2/favicons?domain=chromewebstore.google.com&sz=32" width="16" height="16" alt=""> [Google Trends Everywhere](https://chromewebstore.google.com/detail/lkjapnejglpmnnpljfnnpndjbbopddge) | 在任意页面显示 Trends 数据的 Chrome 插件 | 免费 |
| <img src="https://www.google.com/s2/favicons?domain=trendsbar.net&sz=32" width="16" height="16" alt=""> [TrendsBar](https://trendsbar.net/zh) | 关键词趋势插件 | 免费 |
| <img src="https://www.google.com/s2/favicons?domain=ads.google.com&sz=32" width="16" height="16" alt=""> [Google 关键词规划师](https://ads.google.com/home/tools/keyword-planner/) | 搜索量区间、发现新词 | 免费（需 Google Ads 账号） |
| <img src="https://www.google.com/s2/favicons?domain=lowfruits.io&sz=32" width="16" height="16" alt=""> [LowFruits](https://lowfruits.io/) | 找低竞争长尾词 | 付费 |
| <img src="https://www.google.com/s2/favicons?domain=explodingtopics.com&sz=32" width="16" height="16" alt=""> [Exploding Topics](https://explodingtopics.com/) | 发现上升趋势 | 免费 / 付费 |
| <img src="https://www.google.com/s2/favicons?domain=aizhan.com&sz=32" width="16" height="16" alt=""> [爱站网](https://www.aizhan.com/) | 百度 SEO 数据 | 免费 |
| <img src="https://www.google.com/s2/favicons?domain=chinaz.com&sz=32" width="16" height="16" alt=""> [站长之家 SEO 查询](https://seo.chinaz.com/) | 百度 SEO 数据 | 免费 |

**用法**：

- **竞品规模**：对 SERP 前 3–5 名的竞品记录月访问量和主要渠道（Similarweb / Semrush / traffic.cv）。
- **趋势方向**：看 Google Trends 近 12 个月和 5 年的走势。平稳或上升才做，只有一个尖峰的词不做。
- **估算搜索量**：用 Trends 的相对指数和一个已知搜索量的基准词对比，再交叉 Semrush 和关键词规划师（详见 [01](../01-keyword-research/)）。
- **Semrush 免费额度**：每天约 10 次，留给最重要的竞品。
- **中国市场**：查百度数据用爱站 / 站长之家，不用 Ahrefs / Semrush。

## 4. 反链查询

| 工具 | 免费额度（原文） |
|---|---|
| <img src="https://www.google.com/s2/favicons?domain=ahrefs.com&sz=32" width="16" height="16" alt=""> [Ahrefs Backlink Checker](https://ahrefs.com/zh/backlink-checker) | 付费（免费版只显示少量结果） |
| <img src="https://www.google.com/s2/favicons?domain=semrush.com&sz=32" width="16" height="16" alt=""> [Semrush](https://www.semrush.com/) | 10 次 / 天，数据有限 |
| <img src="https://www.google.com/s2/favicons?domain=moz.com&sz=32" width="16" height="16" alt=""> [Moz Link Explorer](https://moz.com/link-explorer) | 10 次 / 天，每次 50 行 |
| <img src="https://www.google.com/s2/favicons?domain=seranking.com&sz=32" width="16" height="16" alt=""> [SE Ranking](https://seranking.com/backlink-checker.html) | 免费 20 行 |
| <img src="https://www.google.com/s2/favicons?domain=smallseotools.com&sz=32" width="16" height="16" alt=""> [SmallSEOTools](https://smallseotools.com/backlink-checker/) | 免费 10 行 |
| <img src="https://www.google.com/s2/favicons?domain=neilpatel.com&sz=32" width="16" height="16" alt=""> [Neil Patel Backlinks](https://neilpatel.com/backlinks/) | 免费 |
| <img src="https://www.google.com/s2/favicons?domain=seoreviewtools.com&sz=32" width="16" height="16" alt=""> [SEOReviewTools](https://www.seoreviewtools.com/valuable-backlinks-checker/) | 免费 |
| <img src="https://www.google.com/s2/favicons?domain=seobility.net&sz=32" width="16" height="16" alt=""> [Seobility](https://www.seobility.net/en/backlinkchecker/check) | 免费 |
| <img src="https://www.google.com/s2/favicons?domain=linkody.com&sz=32" width="16" height="16" alt=""> [Linkody](https://www.linkody.com/en/seo-tools/free-backlink-checker) | 免费 |
| <img src="https://www.google.com/s2/favicons?domain=majestic.com&sz=32" width="16" height="16" alt=""> [Majestic](https://majestic.com/) | 付费 |
| <img src="https://www.google.com/s2/favicons?domain=backlinko.com&sz=32" width="16" height="16" alt=""> [Backlinko](https://backlinko.com/tools/backlink-checker) | 付费（另有免费的网站权威度查询，基于 Semrush AS） |

- **Google 搜索指令**：`"example.com" -site:example.com` 加上时间筛选，可以找提及和冷启动期的外链。`link:` 指令早已不可靠，只能当参考。
- **每月一次**：用至少一个免费工具记录引用域名数（RD）和新增 / 丢失的链接；顺便查竞品的外链，列出你也能拿到的（目录、发布站、文章）。
- 外链质量的 6 个因素（权威度、相关性、自然程度、正文位置、锚文本、follow 属性）见 [05](../05-backlinks/)。

## 5. DR 查询与解读

| 工具 | 用途 |
|---|---|
| <img src="https://www.google.com/s2/favicons?domain=frogdr.com&sz=32" width="16" height="16" alt=""> [FrogDR](https://frogdr.com/) | 监控 DR，免费可监控 3 个站 |
| <img src="https://www.google.com/s2/favicons?domain=ahrefs.com&sz=32" width="16" height="16" alt=""> [Ahrefs](https://ahrefs.com/) | DR、UR、RD 的权威来源 |

| DR 区间 | 含义（从业者经验，非官方） |
|---|---|
| 0–10 | 新站，几乎没有外链 |
| 10–30 | 小站，典型的独立开发者站点 |
| 30–50 | 做过系统的外链建设 |
| 50–70 | 细分领域里的强站 |
| 70–90 | 大媒体 / 平台 |
| 90+ | Wikipedia、Google 级别 |

**独立开发者目标：DR 20–40 已经很有竞争力。** 里程碑可以设为 10 → 20 → 30–40。

**常见误区**：

- 把 DR 当 KPI。DR 是"外链健康报告"。真正的 KPI 是关键词排名、自然流量和转化。
- 只看 DR 不看 RD。DR 是结果，RD 是过程。
- DR 涨得越快越好。外链突增反而显得不自然。
- DR 高就等于流量大。DR 80+ 的站可能几乎没流量，DR 20 的站也可能月访问几十万。

## 6. App 数据查询

| 工具 | 用途 |
|---|---|
| <img src="https://www.google.com/s2/favicons?domain=qimai.cn&sz=32" width="16" height="16" alt=""> [七麦数据](https://www.qimai.cn/) | 中国 App Store / 安卓榜单、下载估算、ASO 关键词 |
| <img src="https://www.google.com/s2/favicons?domain=chandashi.com&sz=32" width="16" height="16" alt=""> [蝉大师](https://www.chandashi.com/) | ASO 关键词热度 |
| <img src="https://www.google.com/s2/favicons?domain=sensortower.com&sz=32" width="16" height="16" alt=""> [Sensor Tower](https://app.sensortower.com/) | 全球应用趋势、品类数据 |

App 上线前先查竞品的排名、下载估算和商店关键词。

## 7. 内容优化与写作工具

| 工具 | 用途 | 说明 |
|---|---|---|
| <img src="https://www.google.com/s2/favicons?domain=chatgpt.com&sz=32" width="16" height="16" alt=""> [ChatGPT](https://chatgpt.com/) | 起草、扩写关键词 | 必须人工改写，补充一手细节 |
| <img src="https://www.google.com/s2/favicons?domain=grok.com&sz=32" width="16" height="16" alt=""> [Grok](https://grok.com/) | AI 写作 | 同上 |
| <img src="https://www.google.com/s2/favicons?domain=jasper.ai&sz=32" width="16" height="16" alt=""> [Jasper](https://www.jasper.ai/) | AI 营销文案 | 付费 |
| <img src="https://www.google.com/s2/favicons?domain=copy.ai&sz=32" width="16" height="16" alt=""> [Copy.ai](https://www.copy.ai/) | AI 营销文案 | 付费 |
| <img src="https://www.google.com/s2/favicons?domain=surferseo.com&sz=32" width="16" height="16" alt=""> [Surfer SEO](https://surferseo.com/) | 对照 SERP 竞品检查术语覆盖、结构和长度 | 付费；用于发布前的优化 |
| <img src="https://www.google.com/s2/favicons?domain=gptzero.me&sz=32" width="16" height="16" alt=""> [GPTZero](https://gptzero.me/) | AI 内容检测 | 见下方注意 |

> ⚠️ 注意：《SEO 经验分享》建议用 GPTZero 把 AI 检测分数降到 40% 以下再发。AI 检测器误判率高，Google 的公开立场是看内容是否有帮助，而不是看内容由谁或什么生成。不要以"骗过检测器"为目标。真正要做的是加入一手经验、截图、数据和明确结论（见 [04](../04-content-and-eeat/)）。

## 8. 站点体检与技术工具

| 工具 | 用途 |
|---|---|
| <img src="https://www.google.com/s2/favicons?domain=pagespeed.web.dev&sz=32" width="16" height="16" alt=""> [PageSpeed Insights](https://pagespeed.web.dev/) | 实验室 + 真实用户的 Core Web Vitals |
| <img src="https://www.google.com/s2/favicons?domain=screamingfrog.co.uk&sz=32" width="16" height="16" alt=""> [Screaming Frog](https://www.screamingfrog.co.uk/seo-spider/) | 全站爬取：title、H1、canonical、alt、死链、重定向（免费版 500 URL） |
| <img src="https://www.google.com/s2/favicons?domain=seositecheckup.com&sz=32" width="16" height="16" alt=""> [SEO Site Checkup](https://seositecheckup.com/) | 在线 SEO 体检 |
| <img src="https://www.google.com/s2/favicons?domain=seoptimer.com&sz=32" width="16" height="16" alt=""> [SEOptimer](https://www.seoptimer.com/) | 在线 SEO 体检 |
| <img src="https://www.google.com/s2/favicons?domain=search.google.com&sz=32" width="16" height="16" alt=""> [Rich Results Test](https://search.google.com/test/rich-results) | 结构化数据和富结果资格 |
| <img src="https://www.google.com/s2/favicons?domain=schema.org&sz=32" width="16" height="16" alt=""> [Schema Markup Validator](https://validator.schema.org/) | Schema 语法校验 |
| <img src="https://www.google.com/s2/favicons?domain=facebook.com&sz=32" width="16" height="16" alt=""> [Sharing Debugger](https://developers.facebook.com/tools/debug/) | 刷新、预览 OG 卡片 |
| <img src="https://www.google.com/s2/favicons?domain=ogimage.click&sz=32" width="16" height="16" alt=""> [OGImage](https://ogimage.click/) · <img src="https://www.google.com/s2/favicons?domain=ogimagemaker.com&sz=32" width="16" height="16" alt=""> [OGImageMaker](https://ogimagemaker.com/) | 生成 OG 图 |
| <img src="https://www.google.com/s2/favicons?domain=xml-sitemaps.com&sz=32" width="16" height="16" alt=""> [XML-Sitemaps](https://www.xml-sitemaps.com/) · <img src="https://www.google.com/s2/favicons?domain=sitemap-generator.org&sz=32" width="16" height="16" alt=""> [sitemap-generator.org](https://sitemap-generator.org/) | 在线生成 sitemap |
| <img src="https://www.google.com/s2/favicons?domain=mxtoolbox.com&sz=32" width="16" height="16" alt=""> [MXToolbox](https://mxtoolbox.com/) | 检查域名邮箱的 MX / SPF / DKIM / DMARC |
| <img src="https://www.google.com/s2/favicons?domain=web.archive.org&sz=32" width="16" height="16" alt=""> [Wayback Machine](https://web.archive.org/) | 查看历史快照、竞品早期的"Featured on"徽章、域名历史 |

另有外链管理工具 <img src="https://www.google.com/s2/favicons?domain=backlinkdirs.com&sz=32" width="16" height="16" alt=""> [BacklinkDirs](https://backlinkdirs.com/)、<img src="https://www.google.com/s2/favicons?domain=mkdollar.com&sz=32" width="16" height="16" alt=""> [Mkdollar](https://mkdollar.com/) 等，见 [05](../05-backlinks/)。配套的[交互式 Checklist 工具](../../tool/)可以逐条勾选这些检查项。

## 9. SEO 名词与 Ahrefs 指标怎么读

| 看到 | 先问 | 判断 |
|---|---|---|
| DR | 引用域名（RD）在涨吗？ | DR 是结果，RD 是过程；独立站做到 20–40 已经不错 |
| KD | 用的是哪个工具的 KD？ | 不同工具的算法不同，不能横向比较。新站起步：KD < 20（Postma 打法），宽松上限 < 50 |
| Volume | 是哪个国家？是月均吗？ | ≥ 500（Postma）/ ≥ 1000（潜力关键词篇）。还要看 Clicks |
| CPS | 每次搜索带来几次点击？ | 明显 < 1，说明广告或 SERP 功能吃掉了点击，降低优先级（推断阈值） |
| Parent Topic | 和目标词一样吗？ | 不一样时，优先在 Parent Topic 的页面里覆盖，不新开页面 |
| Organic Traffic | 是估算值吗？ | 是。用来判断量级，不是精确数 |
| Anchors | 精确匹配锚文本的占比？ | 大多数应是品牌词、URL 或自然描述 |
| Link Growth | 有没有突增？ | 突增多半是批量买链 |

完整定义见 [99 SEO 名词解释](../99-glossary/)。

## 10. 指标仪表板模板

### 10.1 每周（约 30 分钟）

| 指标 | 数据源 | 目标 / 阈值 | 异常时的动作 |
|---|---|---|---|
| 自然点击、展示、CTR、平均排名（周环比） | GSC → 效果 | 趋势向上 | 按页面 / 查询 / 国家 / 设备拆分定位原因 |
| 新出现的查询词 | GSC → 效果 → 查询 | — | 给页面补 FAQ 或段落，或者新开长尾页 |
| 排名 11–30 且有展示的词 | GSC 筛选排名 | — | 优先优化：内链 + 补内容（"差一点上首页"的词） |
| 已发现 / 已抓取但未编入索引 | GSC → 网页 | 逐周下降 | 改进内容质量和内链，提交 sitemap |
| 各渠道会话（自然搜索 / 引荐 / 社交 / 直接） | GA4 | — | 看哪个渠道在涨，加大投入 |
| 转化：注册 / 试用 / 付费 | GA4 Key events | 周环比 | 检查落地页和结账漏斗 |
| 发布平台引荐（发布后 30 天） | GA4 引荐来源 | — | 有效的平台在下次发版时重发 |
| 社交：X 曝光和粉丝；小红书 CTR ≥ 5%；抖音完播和搜索播放 | 各平台后台 | 见 08–10 章 | 换封面、改标题、调整节奏 |

### 10.2 每月（约 1–2 小时）

| 指标 | 数据源 | 目标 / 阈值 |
|---|---|---|
| DR、引用域名新增 / 丢失 | FrogDR / Ahrefs / Moz | RD 稳步增长，没有突增 |
| 锚文本分布 | Ahrefs Anchors | 品牌词 / URL 占多数 |
| 品牌词展示量 | GSC 查询包含品牌名 | 上升（代表权威度和"有兴趣的用户"在增长） |
| Core Web Vitals（真实用户） | GSC / PageSpeed | LCP ≤ 2.5 秒、INP ≤ 200 毫秒、CLS ≤ 0.1 |
| 留存 D1 / D7 / D30 | GA4 / 产品分析工具 | ≥ 40% / 20% / 10%（见 [12](../12-monetization/)） |
| 单次自然访问收益 vs 核心词平均 CPC | 收入 ÷ 自然会话 | ≥ CPC 说明付费率很好 |
| 竞品排名变化、流量飙升的站 | Semrush / Ahrefs / traffic.cv | 每次排名变化都要找到原因 |
| AI 搜索引用 | 定期用 ChatGPT / Gemini / Perplexity 问目标问题 | 品牌被提及或引用（见 [06](../06-geo-ai-search/)） |
| 人工处置、安全问题 | GSC | "未发现问题" |
| 页面查询复盘 | GSC 按页面看查询 | 每个页面补上没回答到的问题 |

## 11. GSC 常用报告

| 报告 | 看什么 | 常用动作 |
|---|---|---|
| 效果（Performance） | 查询、页面、国家、设备、搜索外观；点击、展示、CTR、排名 | 高展示低 CTR 的页面 → 重写 title 和 description；排名 11–30 的词 → 内链和补内容 |
| 网址检查（URL Inspection） | 是否已编入索引、Google 选择的 canonical 与你声明的是否一致、抓取时间、渲染结果 | 新页面发布当天就请求编入索引 |
| 网页（编入索引） | 已编入 / 未编入的数量及原因 | 见下表 |
| 站点地图 | 提交状态、发现的 URL 数 | 状态应为"成功"；发现数 ≈ 可索引页面数 |
| 核心网页指标 | 移动端 / 桌面端的不良 URL 组 | 按 URL 组修 LCP / INP / CLS |
| HTTPS | 非 HTTPS 页面 | 应为 0 |
| 增强功能（面包屑、商品等） | 结构化数据的有效 / 错误项 | 错误应为 0 |
| 链接 | 外部链接最多的页面、引用站点、内部链接 | 核对冷启动外链有没有被 Google 看到 |
| 人工处置 / 安全问题 | 是否被处罚、被黑 | 应为"未发现问题" |

### 11.1 "未编入索引"常见原因

| 状态 | 含义 | 处理 |
|---|---|---|
| 已抓取 - 尚未编入索引 | 看过了，但认为不值得收录 | 加深内容、补一手信息、增加内链；薄页面考虑合并 |
| 已发现 - 尚未编入索引 | 知道这个 URL，还没来抓 | 加内链、放进 sitemap；全站质量和抓取预算都有影响 |
| 重复网页，Google 选择的规范网页与用户指定的不同 | 你的 canonical 被忽略 | 检查内容是否真的不同、canonical 目标是否返回 200、有没有循环 |
| 备用网页（有适当的规范标记） | 正常现象 | 无需处理 |
| 被 noindex 标记排除 | 页面声明了不收录 | 确认是有意的 |
| 未找到（404） / 软 404 | 页面不存在，或内容太薄被当成 404 | 修复内链或 301；补充内容 |
| 网页会自动重定向 | 正常现象 | 确保内链直接指向最终 URL |
| 被 robots.txt 屏蔽 | 抓取被禁止 | 检查规则是否误伤 |
| 服务器错误（5xx） | 抓取时出错 | 检查服务器和 CDN / WAF 是否拦截了 Googlebot |

### 11.2 排查流程：自然流量突然下跌

1. **先确认是真跌**：GSC 和 GA4 同时下跌吗？统计脚本有没有掉？是不是节假日或季节性因素？
2. **对齐时间点**：是否碰上 Google 核心算法更新或垃圾内容更新？你自己有没有改版、迁移、改 robots 或 canonical？
3. **拆维度**：对比前后两段时间，按页面、查询、国家、设备拆分，找到跌幅集中在哪里。
4. **跌在哪个指标**：
   - **展示跌**：排名掉了，或者被收录的页面少了；
   - **展示没跌但点击跌**：CTR 下降，常见原因是 SERP 出现了 AI 摘要或新的富结果，或者标题被改写。
5. **查收录**：网页报告里"未编入"的数量是否突增，重点页面的网址检查结果。
6. **查处罚和安全**：人工处置、安全问题报告。
7. **查技术**：Core Web Vitals、5xx、WAF 是否误拦爬虫（见 [03](../03-technical-seo-and-infra/)）。
8. **看竞品**：同一批关键词现在谁排在前面，对方的页面比你的好在哪里。

### 11.3 排查流程：新页面不收录

1. 网址检查：是否被 robots.txt 或 noindex 拦截？canonical 是否指向自己？
2. 是否在 sitemap 里？是否有至少 1–2 条来自已收录页面的内链？
3. 是否是薄内容，或者和站内其他页面高度重复？
4. 请求编入索引后，最多等 1–2 周。
5. 仍不收录：加强内链，或者从目录、社区拿一条外链来引导抓取。

> 说明：截至整理时，Google 把 AI Overviews 和 AI Mode 的展示与点击计入 GSC 效果报告的"网页"搜索类型，但不能单独筛选出来。如果 CTR 下跌但排名不变，要考虑 AI 摘要分流的影响。

## 来源

- [网站流量统计](https://lownrain.feishu.cn/wiki/Y5l2wrWD9itTurk9weJcf1uInJ4)（独立开发前线｜SEO从0到100）
- [网站/关键词流量查询](https://lownrain.feishu.cn/wiki/Vp9hww9hiifABkkytd5cxrKxnzd)（独立开发前线｜SEO从0到100）
- [反链查询](https://lownrain.feishu.cn/wiki/QgnEw53QbicKk6kx9ImcteXPn1g)（独立开发前线｜SEO从0到100）
- [DR查询](https://lownrain.feishu.cn/wiki/DgBWwJfadiRW4fkRltwcg2nBnaf)（独立开发前线｜SEO从0到100）
- [App数据查询](https://lownrain.feishu.cn/wiki/ZE3IwvFg0iG15zkVRGycidCynkf)（独立开发前线｜SEO从0到100）
- [内容优化](https://lownrain.feishu.cn/wiki/TnMLw8Xe9iF8KWklW9jcMBDGnee)（独立开发前线｜SEO从0到100）
- [关键词研究](https://lownrain.feishu.cn/wiki/STTgwwwfKiP6hHk87gtcW0rSnXd)（独立开发前线｜SEO从0到100）
- [SEO名词解释](https://lownrain.feishu.cn/wiki/ABWzwVvQTiPWdeknyLeclLdFnTh)（独立开发前线｜SEO从0到100）
- [Ahrefs Seo名词](https://lownrain.feishu.cn/wiki/QpsGwfHUkiF08hkLqcxc2lRQnGh)（独立开发前线｜SEO从0到100）
- [搜索引擎后台提交](https://lownrain.feishu.cn/wiki/YGGDwLYhtitfK5kBao0cd4Bsnme)（独立开发前线｜SEO从0到100）
- [SEO关键词研究策略](https://lownrain.feishu.cn/wiki/Rn58w7M9iiIwVbkdev7cfJFknAd)（独立开发前线｜SEO从0到100）
- [如何利用内链优化SEO排名](https://lownrain.feishu.cn/wiki/M4Dtwgynwi4R5FkHXcjcZVeZnRb)（独立开发前线｜SEO从0到100）
- [SEO经验分享](https://lownrain.feishu.cn/wiki/B2MLwCgXBisanqkZNyCcXDP6nqh)（独立开发前线｜SEO从0到100）
- [寻找小众市场做出自己产品的七个步骤](https://lownrain.feishu.cn/wiki/DA5nwtLEoiE7yDkFPjgcqMwPnme)（独立开发前线｜SEO从0到100）
- [外链建设工具](https://lownrain.feishu.cn/wiki/Ih19wKCldio7j9kmKp2cdyAinrf)（独立开发前线｜SEO从0到100）
- [OG标签](https://lownrain.feishu.cn/wiki/Kpubwg4KtiVssdkCLNHcmZ2anme)（独立开发前线｜SEO从0到100）
- [站点地图](https://lownrain.feishu.cn/wiki/KnACwgXa7iFmcvkvbdac09CTnVh)（独立开发前线｜SEO从0到100）
- [Canonical标签](https://lownrain.feishu.cn/wiki/QuOxwc3oBiUHOKktrGbcI9sAnqd)（独立开发前线｜SEO从0到100）
- [网站页面结构设计](https://lownrain.feishu.cn/wiki/MxfOwgvDHiDeDPkaQ0dcu4cMnIe)（独立开发前线｜SEO从0到100）
- [给新手独立开发者的建议](https://lownrain.feishu.cn/wiki/Yj5QwQGv4iQ6LmkihUKcUKYsnLe)（独立开发前线｜SEO从0到100）
