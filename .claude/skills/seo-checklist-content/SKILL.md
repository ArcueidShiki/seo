---
name: seo-checklist-content
description: 规划和审查内容（搜索意图、页面模板、E-E-A-T、AI 生成内容规则、更新与二次分发）时使用；逐条核对 checklist 内容与 E-E-A-T 条目。
---

# 内容与 E-E-A-T Checklist（Content & E-E-A-T）

> 满足搜索意图、有第一手经验、有作者和日期、持续更新。
> 共 16 条：P0 3 · P1 11 · P2 2；其中 3 条可由 auditor 自动检测（🤖）。数据源：仓库 ArcueidShiki/seo 的 `checklist/checklist.json`（类别 `content`）。

## 何时使用
- 写博客 / 落地页 / 工具页文案前
- 内容排名下滑要刷新
- 用 AI 批量写内容前
- 用户说"帮我检查 / 优化 内容与 E-E-A-T"或给出网址要求做这方面的 SEO 审计

## 执行流程
1. **确认对象**：要检查的网址或页面、目标关键词、目标市场（Google / 百度 / 平台站内）、产品所处阶段（规划 / 开发 / 上线 / 增长 / 维护）。只看当前阶段及之前阶段的条目。
2. **先跑自动审计**（有网址时）：在仓库里运行 `node auditor/audit.mjs --url <网址> --name <名字> --keyword "<主关键词>"`，从 `reports/<名字>.json` 读取这些条目的结果：`content-depth`、`content-eeat-signals`、`links-external-citation`。没法运行脚本时，就按下面的"怎么查"手工检查（view-source、curl、PageSpeed、Rich Results Test 等）。
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

#### [P1] 把每个产品功能翻译成用户会搜的问题，覆盖 4 类常青内容
id: `content-feature-to-question`
- **为什么**：用户搜的是问题，不是你的功能名；教程、对比、问题解决、场景方案这 4 类内容需求稳定、衰减慢，适合做内链矩阵。
- **通过标准**：
  - 「功能 → 搜索问题 → 文章 URL」映射表没有空行（例：批量生成 → how to generate posters in bulk；商用授权 → can AI-generated posters be used commercially）
  - 内容计划同时包含：How-to 教程、X vs Y 对比、问题解决（why X doesn't work）、场景方案（X for 某人群 / 平台）
  - 每个选题在 5 问中至少 3 个为「是」：有人搜？首页是内容页？能比前 3 更具体？产品能自然出现？6 个月后仍有效？
  - 自测：这个标题我自己会输入搜索框吗？不会就删掉
- **怎么查**：内容计划表增加「对应功能」「搜索问题」「内容类型」「5 问得分」四列；问题措辞用 AnswerThePublic 和 Google 下拉框校准。
- **工具**：AnswerThePublic (https://answerthepublic.com/)；Semrush (https://www.semrush.com/)

### ② 开发

#### [P0] 落地页按用户思考路径排版：Hero → 痛点 → 方案 → 步骤 → 案例 → 对比 → FAQ → CTA
id: `content-landing-template`
- **为什么**：能排名的页面不是产品宣传册，而是一份「顺带转化的解决问题文档」：搜索引擎一眼看懂解决什么问题，用户一眼判断是否相关。
- **通过标准**：
  - Hero：H1 用大白话说「做什么」；副标题写清场景或目标人群；CTA 是低门槛动作（「免费生成第一版」而不是「立即购买」）
  - 痛点区：H2「为什么需要 X」+ ≥ 3 个具体痛点
  - 方案区：每个 H3 写「解决了什么问题」，而不是「支持多模型」式的功能罗列
  - 「怎么用」：3 个编号步骤（你做什么 → 产品做什么 → 你得到什么），配截图或 GIF
  - 有真实案例 / 前后对比 / 使用数据，有与传统方式或竞品的对比表，有 FAQ，结尾只放下一步 CTA
  - 写明局限：适合谁、不适合谁、什么情况下效果最好
- **怎么查**：拿页面逐段对照打勾；每个场景 / 用例单独做一页。上线后用 Clarity 热图看用户在哪一段离开。
- **工具**：Microsoft Clarity (https://clarity.microsoft.com/)

#### [P1] 核心页面内容足够回答搜索意图（不是薄内容） 🤖
id: `content-depth`
- **为什么**：工具站只有一个输入框会被判为薄内容；补充用法、公式、示例、FAQ，才能同时排名和转化。
- **通过标准**：
  - 工具 / 落地页可见正文 ≥400 词（按搜索意图和 Top 10 竞品调整）
  - 包含：一句话答案、步骤 / 公式、示例、FAQ、相关链接
- **怎么查**：auditor 统计正文词数；人工对比 Top 10 竞品。
- **工具**：seo-handbook auditor

#### [P1] E-E-A-T 信号：About 页、作者署名、更新日期、联系方式 🤖
id: `content-eeat-signals`
- **为什么**：金融、健康等 YMYL 主题尤其看重"谁写的、凭什么可信"。
- **通过标准**：
  - 有 About / Contact 页面
  - 文章有作者和可见的发布 / 更新日期（<time datetime>）
  - YMYL 内容有免责声明
  - 作者在 X、GitHub、LinkedIn 等平台可以被搜到
- **怎么查**：auditor 检测 About 页和日期；人工检查作者页。
- **工具**：seo-handbook auditor

#### [P1] 核心价值不登录就能用、能看到
id: `content-free-no-login`
- **为什么**：先注册才能用会提高跳出率、缩短停留时间；爬虫也只能看到未登录的版本，免费可用的内容更容易被分享和引用。
- **通过标准**：
  - 无痕窗口打开落地页，不注册就能完成一次核心操作，或至少看到完整的示例结果
  - 主要内容不被注册墙 / 付费墙遮挡；登录放在使用之后（如保存、导出高清、提高额度）
  - 改动后 GA4 中落地页的平均互动时长上升、跳出率下降
- **怎么查**：无痕窗口实测一遍；GSC 网址检查 → 查看已抓取的网页，确认爬虫拿到的是完整内容。
- **工具**：Google Analytics 4 (https://analytics.google.com/)；Google Search Console (https://search.google.com/search-console)

#### [P1] 用户评价、案例和用户数都真实可追溯，不编造
id: `content-real-testimonials`
- **为什么**：虚假评价和虚构用户数会被用户和平台识破，违反 Google 结构化数据政策，美国 FTC 2024 年起也明确禁止虚假评价，风险远大于收益。
- **通过标准**：
  - 每条评价都有真实来源（截图，或链接到原帖、推文、Product Hunt 评论），并获得引用许可
  - 「已有 N 名用户」之类的数字能在后台数据中核对
  - Review / AggregateRating 只标注真实评价；LocalBusiness / Organization 类型的自我评价不会显示星级
  - 没有用 AI 生成的人像冒充用户头像
- **怎么查**：建一个评价素材库，记录来源 URL 和授权日期；结构化数据用 Rich Results Test 验证。
- **工具**：Rich Results Test (https://search.google.com/test/rich-results)；Product Hunt (https://www.producthunt.com/)

#### [P2] 引用权威外部来源 🤖
id: `links-external-citation`
- **为什么**：引用数据来源能增加可信度，也是 AI 判断内容质量的信号。
- **通过标准**：
  - 关键数据或结论链接到原始出处（官方文档、论文、权威媒体）
  - 外链 rel 设置得当（赞助链接用 sponsored，用户生成内容用 ugc）
- **怎么查**：auditor。
- **工具**：seo-handbook auditor

### ④ 增长

#### [P0] 每篇文章动笔前写一份「打败 SERP」简报
id: `content-beat-serp-brief`
- **为什么**：搜索流量赢家通吃，前几名拿走大部分点击；只有能成为该主题最好的页面才值得写。
- **通过标准**：
  - 简报包含：目标词、搜索意图、Top 3 页面的不足（缺步骤、无实测截图、过时、空泛）、本文多出来的东西（数据、实测、工具、模板）
  - 产品能自然出现：作为教程步骤、对比选项或实现方式；去掉产品文章反而更好读的选题不写
  - 读完 Top 3 的反应是「就这？」才动笔
- **怎么查**：逐段阅读 Top 3 并记录；可以用 Surfer SEO 等工具对比术语覆盖，但以人工判断为准。
- **工具**：Google 搜索 (https://www.google.com/)；Surfer SEO (https://surferseo.com/)

#### [P0] AI 可以起草，但发布前必须人工改写并加入第一手细节
id: `content-ai-human-edit`
- **为什么**：Google 不惩罚「AI 写的」，惩罚的是批量生产、没有增量价值的内容；读起来像模板的文章也很难被分享和引用。
- **通过标准**：
  - 不发布未修改的 AI 原稿；每篇至少加入 1 处只有你能写出的细节（实测截图、真实数字、踩过的坑）
  - GPTZero 判定的 AI 概率 < 40%（笔记作者的阈值）；检测器会误判，只作参考信号，不为骗过检测器而改写
  - 事实、数字、链接全部人工核对
  - 段落短：中文约 100 字以内、英文 3–4 行一段，手机上好读
- **怎么查**：发布前按清单逐项打勾，把 GPTZero 分数和改动说明记在内容表里；预算允许时可以「AI 初稿 → 自己改 1 小时 → 母语写手润色」（笔记参考价约 $200 / 篇）。
- **工具**：GPTZero (https://gptzero.me/)；ChatGPT (https://chatgpt.com/)

#### [P1] 为前 3 个竞品做「X vs Y」「X alternatives」页面，有搜索量再做「免费 / 优惠码」页
id: `content-vs-alternatives`
- **为什么**：对比和替代品词是转化率最高的商业调研流量，能把竞品的品牌流量分一部分过来。
- **通过标准**：
  - 每个主要竞品至少有 /vs/竞品 和 /alternatives/竞品 两个页面；coupon / free 页只在关键词有搜索量时做
  - 对比表事实准确并注明核对日期，同时写出竞品的优点和你不适合的场景
  - 不冒充竞品官方、不捏造竞品缺陷、不在标题中误导性使用对方商标
  - 页面有明确 CTA 和迁移指南（如何从竞品切换过来）
- **怎么查**：在 Ahrefs / Semrush 查「竞品名 alternative / vs / free / coupon」的搜索量；每季度核对一次对比表中的价格和功能。
- **工具**：Ahrefs (https://ahrefs.com/)；Semrush (https://www.semrush.com/)

#### [P1] 每篇核心文章至少有 1 个第一手证据：原创截图、真实数据或失败经历
id: `content-first-hand-evidence`
- **为什么**：E-E-A-T 中的「经验」最难伪造，也是个人开发者对抗内容农场的最大优势。
- **通过标准**：
  - 每篇支柱文章 ≥ 1 个原创素材：自己操作的截图 / 录屏、自己的数据、遇到的具体限制或报错
  - 写出具体场景（什么时候、什么条件下）和不完美的过程（调整、取舍、失败）
  - 没有用图库图片冒充「案例」
- **怎么查**：逐篇审查支柱文章，判断标准：这个细节别人能不能直接抄走？能抄走的不算。

#### [P1] 至少做 1 个可被引用的「工具型」资产：模板、提示词库、参数表或免费小工具
id: `content-citable-asset`
- **为什么**：这类内容不推销、方便引用，会自然吸引外链和 AI 引用，比再多写几篇文章更有效。
- **通过标准**：
  - 至少 1 个资产已上线：免费模板 / Prompt 库 / 规格参数表 / 行业标准汇总 / 计算器
  - 资产页免登录可访问，有固定 URL 和方便引用的形式（可复制的表格、嵌入代码或引用格式）
  - 在 Ahrefs Webmaster Tools 或 GSC 链接报告中单独跟踪该页面的引用域名数
- **怎么查**：从用户最常问、需要反复查的信息里挑选；上线后在社区和外联中优先推广它。
- **工具**：Ahrefs Webmaster Tools（免费） (https://ahrefs.com/webmaster-tools)；Google Search Console (https://search.google.com/search-console)

#### [P1] 内容日历：固定节奏发布，前 3 个月完成约 10 篇深度文章
id: `content-cadence-calendar`
- **为什么**：10–20 篇内容看不出效果，在一个垂直领域持续输出几百篇才会稳定见效；没有固定节奏最容易半途而废。
- **通过标准**：
  - 选题库 ≥ 20 个，每个有目标词和来源
  - 节奏写进日历并执行：至少每 2–3 周 1 篇深度文章（笔记作者的节奏），有余力每周 1 篇
  - 前 3 个月完成约 10 篇深度文章，覆盖行业趋势、工具 / 竞品对比、客户案例
  - 预期：新站通常要 3–6 个月才有稳定的 Google 流量，3 个月内不因没流量停更
- **怎么查**：用 Notion 或飞书多维表格做内容日历，列：选题、关键词、状态、发布日期、URL、GSC 点击。
- **工具**：Google Search Console (https://search.google.com/search-console)

#### [P1] 转载到 Dev.to、Hashnode、Medium 等平台：等原文收录后再发，并设置 canonical 指回原文
id: `content-syndication-canonical`
- **为什么**：转载能带来曝光和外链，但处理不好，高权重平台上的副本会抢走原文的排名。
- **通过标准**：
  - 原文在 GSC 网址检查中显示「网址在 Google 上」之后才转载
  - 支持 canonical 的平台都设置指回原文：Dev.to（front matter 的 canonical_url）、Hashnode（Are you republishing 选项）、Medium（用 Import a story 导入会自动设置）
  - 不支持 canonical 的平台只发前约 70%，文末放「阅读全文」链接回原站
  - 每个平台链接的 rel 属性以页面源码实测为准并记入外链表（Medium、掘金、V2EX、知乎为 nofollow）
- **怎么查**：发布后 view-source 搜索 rel="canonical"，确认指向原文 URL。
- **工具**：DEV Community (https://dev.to/)；Hashnode (https://hashnode.com/)；Medium (https://medium.com/)；Substack (https://substack.com/)；Google Search Console (https://search.google.com/search-console)

#### [P2] 每个核心主题写一篇「常见误区 / 踩坑 / 排错」，问题来自真实用户
id: `content-pitfalls-troubleshooting`
- **为什么**：误区和排错类内容需求稳定、细节多，最能体现经验，也最常被 AI 回答引用。
- **通过标准**：
  - 每个核心主题至少 1 篇：常见错误、为什么不起作用、怎么修
  - 问题来自真实来源：客服邮件、评论区、Reddit / 知乎讨论、GSC 查询；每月至少新增 1 个
  - 每个问题按「结论 → 原因 → 修复步骤」写
- **怎么查**：把客服和评论里的问题截图收进素材库，按主题打标签，每月挑出现次数最多的写。
- **工具**：Reddit (https://www.reddit.com/)；知乎 (https://www.zhihu.com/)；Google Search Console (https://search.google.com/search-console)

### ⑤ 维护

#### [P1] 每季度刷新内容：点击下滑的页面更新，长期无流量的薄页面合并
id: `content-refresh-quarterly`
- **为什么**：过时的数字、截图和年份会降低点击率和可信度；大量长期没流量的薄页面会拉低整站的质量判断。
- **通过标准**：
  - GSC 对比最近 3 个月与前 3 个月：点击下降 > 20% 的页面全部进入刷新清单（经验阈值）
  - 刷新内容包括：数据、截图、年份、失效链接，以及 GSC 中出现的新查询；有实质修改才更新 dateModified 和页面上的「更新于」日期
  - 12 个月内 0 点击且无外链的薄页面：合并到相关页面并 301，或补充改进；有外链的页面不直接删除
- **怎么查**：GSC → 效果 → 日期 → 比较 → 网页标签，按点击差值排序；Ahrefs Webmaster Tools 查看哪些页面有外链。
- **工具**：Google Search Console (https://search.google.com/search-console)；Ahrefs Webmaster Tools（免费） (https://ahrefs.com/webmaster-tools)

## 相关
- 手册 skill（原理、打法和模板）：`seo-guide-content-eeat`
- 总索引：`seo-growth-skills-index`
- 交互式工具：仓库 `tool/index.html`（构建后在 `/tool/`），可以勾选进度、导出 Markdown
