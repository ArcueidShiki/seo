---
name: seo-checklist-backlinks
description: 做外链建设（导航站、发布平台、付费目录、内容外链、竞品冷启动外链分析、锚文本与追踪）时使用；逐条核对 checklist 外链条目。
---

# 外链建设 Checklist（Backlinks）

> 导航站、发布平台、内容外链、合作与被提及；外链就是信任票。
> 共 15 条：P0 3 · P1 8 · P2 4；其中 0 条可由 auditor 自动检测（🤖）。数据源：仓库 ArcueidShiki/seo 的 `checklist/checklist.json`（类别 `backlinks`）。

## 何时使用
- 新站 0–3 个月要拿第一批外链
- 评估一个外链值不值得做 / 付费
- 拆解竞品的冷启动外链
- 用户说"帮我检查 / 优化 外链建设"或给出网址要求做这方面的 SEO 审计

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

#### [P0] 不买外链套餐、不做 PBN、不批量交换友链
id: `bl-no-link-schemes`
- **为什么**：Google 的链接垃圾政策会让操纵性链接失效甚至触发人工处置。笔记原话：放在 2015 年看起来合理的外链手法，到 2026 年大概率有毒。
- **通过标准**：
  - 没有购买「SEO 外链套餐」、PBN、站群链接、论坛签名和评论区外链
  - 友链只与真正相关、有流量的站点小规模交换（个位数），不参与链接农场式互换
  - 赞助或付费推广中的链接标 rel="sponsored" 或 nofollow
  - GSC → 人工处置 显示「未检测到任何问题」；只有在出现人工处置或明显的负面 SEO 时才使用拒绝（disavow）工具
- **怎么查**：每月外链复盘时检查新增的可疑域名（外语垃圾站、同 IP 群站、锚文本全是关键词的站点）。
- **工具**：Google Search Console (https://search.google.com/search-console)；Ahrefs Webmaster Tools（免费） (https://ahrefs.com/webmaster-tools)

#### [P1] 拆竞品冷启动外链 ①：先确定它的冷启动时间窗口
id: `bl-cold-start-window`
- **为什么**：竞品上线后 0–30 天的 5–20 个链接和提及带来了第一波流量，其中很多已经消失、Ahrefs 也抓不全，所以要先锁定时间范围再搜索。
- **通过标准**：
  - 每个重点竞品记录 3 个日期：域名注册日（WHOIS）、Wayback 最早快照日期、Product Hunt / BetaList 发布日
  - 冷启动窗口 = 最早日期起 0–30 天（或 0–60 天）
  - 打开最早 2–3 个 Wayback 快照，记录首页、页脚、About 中的「Featured on」「As seen on」徽章和媒体 logo
- **怎么查**：lookup.icann.org 查注册日期；web.archive.org/web/*/竞品域名 查看最早快照；搜索 site:producthunt.com "竞品名"。
- **工具**：ICANN Lookup（WHOIS） (https://lookup.icann.org/)；Wayback Machine (https://web.archive.org/)；Product Hunt (https://www.producthunt.com/)；BetaList (https://betalist.com/)

#### [P1] 拆竞品冷启动外链 ②：用限时搜索找链接、提及和二次传播，整理成路径
id: `bl-cold-start-search`
- **为什么**：冷启动期的信号大约是「直接外链 : 带网址的提及 : 只提名字」= 2 : 4 : 4，只用外链工具会漏掉大部分。
- **通过标准**：
  - Google 搜索 "competitor.com" -site:competitor.com，工具 → 时间 → 自定义为冷启动窗口，人工剔除聚合站、镜像站、WHOIS 缓存页
  - 同样限定时间搜 "产品名"、"产品名" AI、"产品名" tool，找没有链接的提及
  - 搜 site:producthunt.com | site:reddit.com | site:news.ycombinator.com | site:indiehackers.com | site:betalist.com "产品名"，找原帖和转述它的博客 / 榜单
  - 相同查询在 Bing、DuckDuckGo 再跑一遍（通常能多找到 10–20%），最后才用 Ahrefs / Semrush 补充验证
  - 整理成路径表（链接类型 | 来源平台 | 第几天 | 作用），≥ 5 条覆盖第 0–30 天，并改写成自己的发布计划
- **怎么查**：满足以下 ≥ 2 条即为核心冷启动链接：30 天内出现、明显是人写的、首次系统介绍该产品、带主观评价、之后被他人引用。典型路径：Day 1 社区发布 → Day 7 博客评测 → Day 14 导航站 / 推荐清单。
- **工具**：Google 搜索 (https://www.google.com/)；Bing Webmaster Tools (https://www.bing.com/webmasters)；DuckDuckGo (https://duckduckgo.com/)；Ahrefs (https://ahrefs.com/)；Semrush (https://www.semrush.com/)

### ③ 上线

#### [P0] 建一张外链追踪表，所有提交和获得的链接都登记
id: `bl-tracker-sheet`
- **为什么**：外链工作非常零碎，没有表格就会重复提交、忘记复查，也算不清投入产出。
- **通过标准**：
  - 列：站点、提交页 URL、DR、rel（dofollow / nofollow）、对方自然流量、价格、状态、提交日期、上线日期、上线链接、带来的访问
  - 待提交清单由 2–3 个导航站合并去重而来（BacklinkDirs、Launchpointzero、1000UserGuide、91wink SEO 外链资源目录），同一域名只出现一次
  - 每条「已上线」记录有复查日期，每季度复查一次链接是否还在
- **怎么查**：Google Sheets 或飞书多维表格；DR 用 Ahrefs 免费 Website Authority Checker 查，rel 在上线页面用 DevTools 检查链接属性。
- **工具**：BacklinkDirs (https://backlinkdirs.com/)；Ahrefs (https://ahrefs.com/)

#### [P0] 每个外链机会先过 4 道门：DR、相关性、真实流量、dofollow
id: `bl-link-vetting`
- **为什么**：一个 DR 70 却没有流量的链接农场，价值可能不如一个 DR 25 的同领域博客；只看 DR 很容易花冤枉钱。
- **通过标准**：
  - DR / Authority Score 记录在表（作为参考，不是唯一标准）
  - 主题相关或受众相关：同领域站点、同类工具导航
  - 有真实自然流量：Ahrefs / Similarweb 估算 > 0 且近 6 个月没有断崖下跌；流量接近 0 的高 DR 站直接拒绝
  - 链接位于正文或产品详情中，而不是页脚、侧边栏、签名；rel 属性已实测记录
- **怎么查**：在 Ahrefs Site Explorer 或 Similarweb 输入对方域名看流量曲线；打开对方已上线的同类页面，查看链接位置和 rel。
- **工具**：Ahrefs (https://ahrefs.com/)；Similarweb (https://www.similarweb.com/)；Semrush (https://www.semrush.com/)

#### [P1] 上线第 1 个月：完成一轮免费目录和产品资料站提交，每个站描述不同
id: `bl-free-directories`
- **为什么**：目录的作用是让搜索引擎知道你存在、把你归入正确的品类，同时带来第一批来源多样的引用域名。
- **通过标准**：
  - 第 1 个月提交 ≥ 30 个免费目录 / 资料站，其中 ≥ 10 个为 dofollow 且 DR ≥ 50
  - 必做：AlternativeTo、SaaSHub、Peerlist、StackShare（开发者工具）、相关的 GitHub Awesome 列表（如适用）
  - 每个站的描述手写或改写，不复制同一段模板；分类选对
  - 4–8 周后在 GSC → 链接 或 Ahrefs Webmaster Tools 中能看到其中大部分
- **怎么查**：按追踪表顺序提交，DR 高的优先；记录每个站的审核时间。
- **工具**：AlternativeTo (https://alternativeto.net/)；SaaSHub (https://www.saashub.com/)；Peerlist (https://peerlist.io/)；StackShare (https://stackshare.io/)；GitHub (https://github.com/)；Ahrefs Webmaster Tools（免费） (https://ahrefs.com/webmaster-tools)

### ④ 增长

#### [P1] 锚文本以品牌名和网址为主，精确匹配关键词只占少数
id: `bl-anchor-mix`
- **为什么**：大量精确匹配锚文本是典型的操纵信号；自然链接通常用品牌名、网址或「这个工具」之类的说法。
- **通过标准**：
  - 品牌词 + 裸 URL + 泛称（this tool、官网）合计 ≥ 70%（经验值）
  - 精确匹配关键词锚文本 ≤ 10%（经验值）；不要求合作方必须使用指定的关键词锚文本
  - 每月在 Anchors 报告中复查一次
- **怎么查**：Ahrefs Webmaster Tools（验证自己的站后免费）→ Backlinks → Anchors；或 Semrush Backlink Analytics → Anchors。
- **工具**：Ahrefs Webmaster Tools（免费） (https://ahrefs.com/webmaster-tools)；Semrush (https://www.semrush.com/)

#### [P1] 外链来源多样、增长自然：盯引用域名数，而不是外链总数
id: `bl-diversity-velocity`
- **为什么**：DR 是结果，引用域名（RD）是过程；同一域名的重复链接收益递减，突然暴涨的链接会显得异常。
- **通过标准**：
  - 来源类型分布：目录、社区、发布平台、博客 / 文章、媒体，没有一类占比 > 50%
  - 优先获取新的引用域名，而不是同一站点的更多链接
  - RD 增长曲线没有无法解释的陡增（例如一周内突然多出几百个低质量域名）
  - DR 里程碑 10 → 20 → 30–40；独立开发者做到 DR 20–40 已经很有竞争力，不把 DR 当成 KPI
- **怎么查**：Ahrefs → Referring domains 图表；FrogDR 免费监控 3 个站的 DR，每月记录一次。
- **工具**：Ahrefs (https://ahrefs.com/)；Ahrefs Webmaster Tools（免费） (https://ahrefs.com/webmaster-tools)；FrogDR (https://frogdr.com/)

#### [P1] 每月争取 1 个编辑型链接：客座文章、访谈、播客或合作案例
id: `bl-guest-posts-interviews`
- **为什么**：在相关网站正文中被介绍，是质量最高、最难被模仿的外链，还能带来精准访问。
- **通过标准**：
  - 每月至少 1 次投稿、访谈、播客嘉宾或合作案例，目标站点通过 4 道门审核
  - 内容为对方读者而写（经验、数据、教程），链接自然出现在正文中
  - 不为「付费客座文章」付钱换 dofollow；存在赞助关系的链接应标 rel="sponsored"
- **怎么查**：搜索「领域词 + write for us / guest post / submit a story」；Indie Hackers、独立开发播客和 newsletter 都接受创始人访谈。
- **工具**：Indie Hackers (https://www.indiehackers.com/)；Google 搜索 (https://www.google.com/)

#### [P1] 对比竞品外链，找出「它有、你也拿得到」的来源
id: `bl-competitor-gap`
- **为什么**：竞品的目录、发布平台和评测文章大多可以复制，这是最快的外链来源清单。
- **通过标准**：
  - 至少 3 个竞品的引用域名清单已导出
  - 筛出「链接了 ≥ 2 个竞品但没链接你」的域名，标注获取方式（提交、投稿、联系作者）
  - 每月从中完成 ≥ 5 个
- **怎么查**：Ahrefs → Link Intersect；没有付费工具时，用 Semrush 免费额度、Moz Link Explorer、Seobility 等免费外链查询分别导出后合并。
- **工具**：Ahrefs (https://ahrefs.com/)；Semrush (https://www.semrush.com/)；Moz Link Explorer (https://moz.com/link-explorer)

#### [P2] 付费目录只买性价比高、有真实流量的，并设定预算上限
id: `bl-paid-directories`
- **为什么**：$10–30 就能拿到 DR 70+ 的收录，性价比远高于 $299–599 的大站；但付费换 dofollow 链接属于灰色地带，只少量使用，不要规模化购买。
- **通过标准**：
  - 首轮预算上限约 $100，优先 ≤ $30 且 DR ≥ 70 的选项（笔记价格：Turbo0 76/$16.9、Toolfame 70/$9.9、Aistage 73/$9.9、Magicbox 72/$15.9、Startupfa.me 82/$19、Dang.ai 80/$29、Uneed 73/$29.99，以当时报价为准）
  - 付款前确认：目录本身有自然流量、有人工审核；不为「dofollow 升级」额外付费
  - 外包代提交服务（Submitdirs、SubmitAI 等）要求交付上线链接清单，并抽查 ≥ 20% 确认真实存在且链向你
  - 追踪表中计算每美元带来的 DR 变化和访问量
- **怎么查**：先用 Similarweb / Ahrefs 看目录的流量，再付款；上线后检查链接 rel 属性。
- **工具**：Uneed (https://www.uneed.best/)；Toolify (https://www.toolify.ai/)；There's An AI For That (https://theresanaiforthat.com/)；Similarweb (https://www.similarweb.com/)；Ahrefs (https://ahrefs.com/)

#### [P2] 回复记者和作者的专家征集（HARO 类平台），用数据和经验换引用
id: `bl-journalist-requests`
- **为什么**：媒体引用带来高权威链接和品牌提及；个人开发者凭真实经验和数据同样能拿到。
- **通过标准**：
  - 注册 Qwoted、Featured 等平台，设置与自己领域相关的关键词提醒
  - 每周至少回复 3 条相关征集；每条在几小时内回复、≤ 150 词、包含 1 个具体数据或经验
  - 记录回复数和被引用数，被引用的文章加入外链追踪表
- **怎么查**：回复结构：一句话身份 + 直接回答问题 + 一个数据或例子 + 署名和链接；不要群发同一段话。
- **工具**：Qwoted (https://www.qwoted.com/)；Featured (https://featured.com/)

#### [P2] 断链建设：找到同领域失效的资源页，提供你的替代内容
id: `bl-broken-link-outreach`
- **为什么**：帮对方修复死链，是少数对方有动力配合的外联方式，成功率高于直接求链接。
- **通过标准**：
  - 每月找出 ≥ 10 个同领域失效资源（被多个站点链接的 404 页面）
  - 已有同主题且质量更好的替代内容后才发邮件
  - 用域名邮箱发送，邮件中指出死链的具体位置；每个联系人最多跟进 1 次
  - 记录发送数、回复数、成功数
- **怎么查**：Ahrefs → Site Explorer → 同领域站点 → Best by links，筛选 404；或用 Check My Links 浏览器插件检查资源汇总页。
- **工具**：Ahrefs (https://ahrefs.com/)；Google 搜索 (https://www.google.com/)

#### [P2] 监控品牌提及，把「提到了但没加链接」的变成链接
id: `bl-unlinked-mentions`
- **为什么**：已经提到你的作者最容易同意加链接；提及本身也是品牌和 GEO 信号。
- **通过标准**：
  - 提醒已设置：Google Alerts（品牌名、创始人名）、F5Bot（Reddit / Hacker News）
  - 每月搜一次 "品牌名" -site:你的域名，记录新出现的提及
  - 对没有链接的提及礼貌请求加链接（附准确网址和一句描述），记录结果
- **怎么查**：google.com/alerts 新建提醒；f5bot.com 添加关键词。
- **工具**：Google Alerts (https://www.google.com/alerts)；F5Bot (https://f5bot.com/)；Google 搜索 (https://www.google.com/)

### ⑤ 维护

#### [P1] 每月外链复盘：引用域名、新增 / 丢失、DR、外链带来的访问
id: `bl-monthly-review`
- **为什么**：外链是持续性工作；不复盘就不知道哪些渠道有效、哪些重要链接已经消失。
- **通过标准**：
  - 记录：引用域名数、本月新增 / 丢失、DR、来自外链的引荐访问和注册
  - 上线 90 天后仍为 0 点击的外链来源类型降低优先级，精力放到带来访问和注册的渠道
  - 丢失的重要链接（DR ≥ 50 或有访问）已联系对方恢复
- **怎么查**：Ahrefs Webmaster Tools（免费）→ Backlinks → New / Lost；GSC → 链接；GA4 → 流量获取 → 会话来源 / 媒介。
- **工具**：Ahrefs Webmaster Tools（免费） (https://ahrefs.com/webmaster-tools)；Google Search Console (https://search.google.com/search-console)；Google Analytics 4 (https://analytics.google.com/)；FrogDR (https://frogdr.com/)

## 相关
- 手册 skill（原理、打法和模板）：`seo-guide-backlinks`
- 总索引：`seo-growth-skills-index`
- 交互式工具：仓库 `tool/index.html`（构建后在 `/tool/`），可以勾选进度、导出 Markdown
