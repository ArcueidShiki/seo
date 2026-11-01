---
name: seo-checklist-serp
description: 提升搜索结果展示和点击率：JSON-LD 结构化数据、面包屑、站点名、富结果资格、精选摘要时使用；逐条核对 checklist SERP 条目。
---

# SERP 富结果与点击率 Checklist（SERP features & CTR）

> 结构化数据、面包屑、站点名、图片/视频结果、精选摘要。
> 共 8 条：P0 1 · P1 4 · P2 3；其中 3 条可由 auditor 自动检测（🤖）。数据源：仓库 ArcueidShiki/seo 的 `checklist/checklist.json`（类别 `serp`）。

## 何时使用
- 加 Schema / JSON-LD
- Google 结果没有站点名、面包屑
- 想拿精选摘要或图片 / 视频结果
- 用户说"帮我检查 / 优化 SERP 富结果与点击率"或给出网址要求做这方面的 SEO 审计

## 执行流程
1. **确认对象**：要检查的网址或页面、目标关键词、目标市场（Google / 百度 / 平台站内）、产品所处阶段（规划 / 开发 / 上线 / 增长 / 维护）。只看当前阶段及之前阶段的条目。
2. **先跑自动审计**（有网址时）：在仓库里运行 `node auditor/audit.mjs --url <网址> --name <名字> --keyword "<主关键词>"`，从 `reports/<名字>.json` 读取这些条目的结果：`serp-structured-data`、`serp-breadcrumbs`、`serp-entity-schema`。没法运行脚本时，就按下面的"怎么查"手工检查（view-source、curl、PageSpeed、Rich Results Test 等）。
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

### ② 开发

#### [P0] JSON-LD 结构化数据合法且与页面内容一致 🤖
id: `serp-structured-data`
- **为什么**：结构化数据决定是否有资格出现富结果，也帮助 AI 理解实体。
- **通过标准**：
  - 每个可索引页面都有能解析的 JSON-LD
  - 类型匹配页面：工具用 WebApplication / SoftwareApplication，文章用 Article，商品用 Product
  - Rich Results Test 无错误
  - 不编造评分 / 评论（aggregateRating 必须来自真实评价）
- **怎么查**：auditor 检查 JSON 能否解析；Rich Results Test 和 Schema Validator 检查规范。
- **工具**：seo-handbook auditor；Rich Results Test (https://search.google.com/test/rich-results)；Schema Validator (https://validator.schema.org/)

#### [P1] BreadcrumbList 面包屑 🤖
id: `serp-breadcrumbs`
- **为什么**：搜索结果里显示路径而不是长 URL，层级更清楚。
- **通过标准**：
  - 页面有可见的面包屑导航
  - 有对应的 BreadcrumbList JSON-LD，item 用绝对 URL
- **怎么查**：Rich Results Test。
- **工具**：seo-handbook auditor；Rich Results Test (https://search.google.com/test/rich-results)

#### [P1] Organization + WebSite 实体（站点名、logo、sameAs） 🤖
id: `serp-entity-schema`
- **为什么**：Google 用它决定结果里显示的站点名称和 logo，也是知识图谱和 AI 识别品牌实体的基础。
- **通过标准**：
  - 首页有 Organization（name、url、logo、sameAs 指向社交账号）
  - 首页有 WebSite（name = 你希望显示的站点名）
- **怎么查**：Rich Results Test；几周后在搜索结果中确认站点名。
- **工具**：seo-handbook auditor；Rich Results Test (https://search.google.com/test/rich-results)

#### [P1] 只为仍然有效的富结果类型投入，不再为 FAQ / HowTo 富结果花时间
id: `serp-rich-results-eligibility`
- **为什么**：FAQ 富结果自 2023 年 8 月起只对政府和医疗权威站显示，HowTo 富结果已经下线，2025 年 Google 又停用了一批类型（如 Course Info、Claim Review、Estimated Salary）。
- **通过标准**：
  - 优先实现：Organization / WebSite（站点名、logo）、BreadcrumbList、Article、Product 或 SoftwareApplication（价格与页面一致）、VideoObject
  - FAQPage 可以保留（帮助 AI 理解问答），但不期待 FAQ 富结果；不为富结果新增 HowTo 标记
  - SoftwareApplication 只有在有真实评分时才写 aggregateRating，没有就不写
  - 所用类型都能在 Google 搜索中心「结构化数据搜索结果库」文档中找到
- **怎么查**：查阅 developers.google.com/search/docs/appearance/structured-data/search-gallery；Rich Results Test 只会报告当前支持的类型。
- **工具**：Rich Results Test (https://search.google.com/test/rich-results)；Schema Validator (https://validator.schema.org/)

#### [P2] 争取图片和视频结果：原创图片 + 嵌入页面的演示视频（VideoObject）
id: `serp-image-video`
- **为什么**：图片和视频结果是额外的流量入口，对设计类、工具类产品尤其明显。
- **通过标准**：
  - 关键图片原创；以图片为主的网站提供图片 sitemap（image:image）
  - 每个核心落地页嵌入 1 个演示视频，放在页面主体位置而不是藏在页脚
  - VideoObject 包含 name、description、thumbnailUrl、uploadDate、duration；YouTube 视频加章节
  - GSC「视频网页」报告中有已编入索引的视频页
- **怎么查**：Rich Results Test 验证 VideoObject；GSC → 视频网页 查看未编入索引的原因。
- **工具**：YouTube (https://www.youtube.com/)；Rich Results Test (https://search.google.com/test/rich-results)；Google Search Console (https://search.google.com/search-console)

### ④ 增长

#### [P2] 品牌词搜索结果第一页尽量都是你自己的资产
id: `serp-brand-serp`
- **为什么**：搜索品牌名的人意向最高；第一页被官网和自己的账号占满，能提高信任，也挡住仿冒和过时信息。
- **通过标准**：
  - 搜索品牌名，第一页 ≥ 5 个结果属于你：官网、X、GitHub、LinkedIn、YouTube、Product Hunt、Crunchbase 等
  - 这些资料页的名称、简介、logo 一致并链接回官网，与 Organization 的 sameAs 列表一致
  - 前 3 名没有仿冒站或过期信息
- **怎么查**：无痕窗口搜索品牌名，以及「品牌名 review」「品牌名 pricing」；缺哪个资料页就补哪个。
- **工具**：Google 搜索 (https://www.google.com/)；X (Twitter) (https://x.com/)；GitHub (https://github.com/)；LinkedIn (https://www.linkedin.com/)；Product Hunt (https://www.producthunt.com/)；Crunchbase (https://www.crunchbase.com/)

### ⑤ 维护

#### [P1] 每月找出「排名不错但点击率低」的页面，改写标题和描述
id: `serp-ctr-rewrite`
- **为什么**：点击率决定同样的排名能拿到多少流量；标题与页面不匹配时 Google 还会自行改写。
- **通过标准**：
  - GSC 中平均排名 ≤ 5、展示 ≥ 500、CTR < 3% 的页面进入改写清单（经验阈值；有 AI 概览的查询整体 CTR 会更低）
  - 搜索目标词看实际展示：标题被改写的，调整 title 与 H1 保持一致、去掉冗长的品牌后缀
  - 新标题用已验证的写法：数字 + 结果、年份、括号补充（如「（含实战案例）」），主关键词靠前
  - 每次改写记录日期，4 周后对比 CTR
- **怎么查**：GSC → 效果 → 勾选 CTR 和平均排名 → 网页标签，按展示排序；改写记录写在关键词表里。
- **工具**：Google Search Console (https://search.google.com/search-console)；Google 搜索 (https://www.google.com/)

#### [P2] 每月检查 GSC 增强功能报告，结构化数据错误保持为 0
id: `serp-enhancements-monitor`
- **为什么**：模板改版常会悄悄破坏结构化数据；不会有人通知你，富结果只是默默消失。
- **通过标准**：
  - GSC 中面包屑、商品摘要、视频、无法解析的结构化数据等报告的「无效」项 = 0
  - 每次模板改动上线后，抽 3 个页面用 Rich Results Test 复测
- **怎么查**：GSC 左侧栏下半部分的「购物」「增强功能」逐个打开；修复后点击「验证修正」。
- **工具**：Google Search Console (https://search.google.com/search-console)；Rich Results Test (https://search.google.com/test/rich-results)

## 相关
- 手册 skill（原理、打法和模板）：`seo-guide-page-structure-tags`
- 总索引：`seo-growth-skills-index`
- 交互式工具：仓库 `tool/index.html`（构建后在 `/tool/`），可以勾选进度、导出 Markdown
