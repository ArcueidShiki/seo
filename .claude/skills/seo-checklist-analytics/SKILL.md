---
name: seo-checklist-analytics
description: 安装和配置网站统计（GA4、Plausible、Umami、Clarity、百度统计）、转化事件、GSC 关联和每周每月数据复盘时使用；逐条核对 checklist 数据与监测条目。
---

# 数据与监测 Checklist（Analytics & monitoring）

> GA4 / Plausible / Clarity / GSC：没有数据就没法优化。
> 共 8 条：P0 4 · P1 3 · P2 1；其中 1 条可由 auditor 自动检测（🤖）。数据源：仓库 ArcueidShiki/seo 的 `checklist/checklist.json`（类别 `analytics`）。

## 何时使用
- 新站装统计
- 定义注册 / 付费等转化事件
- 每周 / 每月看数据复盘
- 用户说"帮我检查 / 优化 数据与监测"或给出网址要求做这方面的 SEO 审计

## 执行流程
1. **确认对象**：要检查的网址或页面、目标关键词、目标市场（Google / 百度 / 平台站内）、产品所处阶段（规划 / 开发 / 上线 / 增长 / 维护）。只看当前阶段及之前阶段的条目。
2. **先跑自动审计**（有网址时）：在仓库里运行 `node auditor/audit.mjs --url <网址> --name <名字> --keyword "<主关键词>"`，从 `reports/<名字>.json` 读取这些条目的结果：`analytics-installed`。没法运行脚本时，就按下面的"怎么查"手工检查（view-source、curl、PageSpeed、Rich Results Test 等）。
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

### ③ 上线

#### [P0] 安装网站统计（GA4 / Plausible / Umami / Clarity） 🤖
id: `analytics-installed`
- **为什么**：没有数据就不知道流量从哪来、哪个页面转化。
- **通过标准**：
  - 每个页面都加载统计脚本
  - 关键转化（注册、付费、点击 CTA）配置为事件
  - Clarity 热图 / 录屏用于看用户行为
  - 符合隐私要求（需要时加 Cookie 同意）
- **怎么查**：打开页面后在统计后台看实时访客。auditor 只能检测脚本是否存在，账号需要你自己配置。
- **工具**：Google Analytics 4 (https://analytics.google.com/)；Plausible (https://plausible.io/)；Umami (https://umami.is/)；Microsoft Clarity (https://clarity.microsoft.com/)

#### [P0] 关键转化设为「关键事件」，所有对外链接统一 UTM 规则
id: `analytics-key-events-utm`
- **为什么**：只有浏览量没有转化事件，就无法判断哪个渠道、哪个页面带来了真正的用户。
- **通过标准**：
  - GA4 中 sign_up、核心操作（如 generate）、begin_checkout、purchase 已标为关键事件，DebugView 或实时报告中能看到测试事件
  - UTM 规则成文并全部小写：utm_source（x、reddit、producthunt…）、utm_medium（social、community、launch、email、referral）、utm_campaign
  - 社交简介、发布平台、邮件、视频描述中的链接全部带 UTM
- **怎么查**：GA4 → 管理 → 事件 → 标记为关键事件；用 Google 的 Campaign URL Builder 生成链接并存进一张 UTM 表。
- **工具**：Google Analytics 4 (https://analytics.google.com/)；Plausible (https://plausible.io/)；Umami (https://umami.is/)

#### [P1] GA4 基础配置：数据保留 14 个月、排除内部流量、关联 GSC；中文站加百度统计
id: `analytics-ga4-config`
- **为什么**：GA4 默认只保留 2 个月的明细数据，等到需要做同比时数据已经没了；早期样本小，自己的访问会严重污染数据。
- **通过标准**：
  - 管理 → 数据设置 → 数据保留 = 14 个月
  - 已定义内部流量（自己的 IP）并启用过滤；支付域名（如 checkout.stripe.com）加入「不需要的引荐」
  - GA4 已关联 Search Console，报告库中能看到 Search Console 集合
  - 面向中文用户的站点同时安装百度统计
- **怎么查**：GA4 管理后台逐项设置；关联在 管理 → 产品关联 → Search Console；不需要的引荐在 数据流 → 配置代码设置 中。
- **工具**：Google Analytics 4 (https://analytics.google.com/)；Google Search Console (https://search.google.com/search-console)；百度统计 (https://tongji.baidu.com/)

#### [P1] 单独统计 AI 助手带来的流量（ChatGPT、Perplexity、Gemini、Claude、Copilot）
id: `analytics-ai-referrals`
- **为什么**：AI 搜索带来的访问在快速增长，但默认被混在 Referral 里，不拆出来就看不到 GEO 的效果。
- **通过标准**：
  - GA4 自定义渠道组中有「AI 助手」渠道，来源匹配 chatgpt.com|perplexity.ai|gemini.google.com|copilot.microsoft.com|claude.ai
  - 「AI 助手」渠道排在 Referral 之前
  - 每月记录 AI 渠道的会话数、转化数和着陆页（ChatGPT 的引用链接通常带 utm_source=chatgpt.com）
- **怎么查**：GA4 → 管理 → 数据显示 → 渠道组 → 新建渠道组；Plausible / Umami 直接查看来源列表。
- **工具**：Google Analytics 4 (https://analytics.google.com/)；Plausible (https://plausible.io/)；ChatGPT (https://chatgpt.com/)；Perplexity (https://www.perplexity.ai/)

#### [P1] 为核心关键词建立排名跟踪，每周记录一次
id: `analytics-rank-tracking`
- **为什么**：排名变化是最早的反馈信号；每次涨跌都有原因，记录下来才能复盘。
- **通过标准**：
  - 5 个核心词和主题集群目标词都在跟踪列表中
  - 每周记录平均排名（GSC 按查询筛选），或使用 Semrush Position Tracking / Ahrefs Rank Tracker
  - 同时跟踪 2–3 个竞品在这些词上的排名
  - 排名变化超过 ±5 位时，在日志中记下可能原因（新内容、外链、算法更新）
- **怎么查**：GSC → 效果 → 查询 → 过滤「包含」核心词 → 导出；付费工具设置每周邮件报告。
- **工具**：Google Search Console (https://search.google.com/search-console)；Semrush (https://www.semrush.com/)；Ahrefs (https://ahrefs.com/)

### ④ 增长

#### [P0] 先用留存和付费率验证产品，再放大流量（留存 4-2-1 原则）
id: `analytics-retention-421`
- **为什么**：产品留不住人时，SEO 流量也积累不起来：跳出率高、停留时间短，排名最终会掉。先修产品，再买流量。
- **通过标准**：
  - 持续使用型产品：次日留存 ≥ 40%、7 日 ≥ 20%、30 日 ≥ 10%
  - 一次性工具：看互动率、平均互动时长和直接访问占比（说明用户记住或收藏了网址）
  - 付费率对比流量价值：月收入 ÷ 月自然访问 ≥ 核心词平均 CPC（例：CPC $0.5 × 每天 100 访问 = 每天 $50）
  - 未达标前不启动付费推广和 KOL 合作
- **怎么查**：GA4 → 探索 → 同类群组探索（或 PostHog、Mixpanel 留存报告）；CPC 用 Keyword Planner 查询。
- **工具**：Google Analytics 4 (https://analytics.google.com/)；Google Keyword Planner (https://ads.google.com/home/tools/keyword-planner/)

#### [P2] 每月拆分品牌词和非品牌词流量，把品牌搜索量当作权威度指标
id: `analytics-branded-search`
- **为什么**：品牌词搜索量上升说明用户记住了你，这也是 E-E-A-T 中「权威」的外部信号。
- **通过标准**：
  - GSC 用正则筛出品牌查询（含常见拼写错误），每月记录品牌展示和点击
  - 品牌展示量连续 3 个月上升
  - 非品牌点击单独统计，用于判断 SEO 内容本身的增长
- **怎么查**：GSC → 效果 → 查询 → 过滤器 → 自定义（正则表达式），例如 (?i)vexlora|vex lora；再选「不匹配正则表达式」查看非品牌查询。
- **工具**：Google Search Console (https://search.google.com/search-console)

### ⑤ 维护

#### [P0] 每周 15 分钟例行检查：GSC、访问来源、转化
id: `analytics-weekly-check`
- **为什么**：问题发现得越早越好修；固定节奏能避免「三个月后才发现收录掉了」。
- **通过标准**：
  - GSC：点击和展示的周环比，非节假日下降 > 20% 就排查；新收录的页面；人工处置和安全问题
  - 统计工具：Top 5 访问来源的变化，新出现的引荐来源（新外链或社区帖子）
  - 转化：注册数、付费数和转化率
  - 结果写进周报表，一周一行
- **怎么查**：可以用 Looker Studio 把 GSC 和 GA4 做成一个看板；每周固定时间打开。
- **工具**：Google Search Console (https://search.google.com/search-console)；Google Analytics 4 (https://analytics.google.com/)；Looker Studio (https://lookerstudio.google.com/)

## 相关
- 手册 skill（原理、打法和模板）：`growth-guide-analytics-tools`
- 总索引：`seo-growth-skills-index`
- 交互式工具：仓库 `tool/index.html`（构建后在 `/tool/`），可以勾选进度、导出 Markdown
