---
name: seo-checklist-i18n
description: 网站做多语言、多地区（hreflang、本地化关键词、语言版本 URL 结构）时使用；逐条核对 checklist 多语言与本地化条目。
---

# 多语言与本地化 Checklist（International & local）

> hreflang、本地化关键词、分地区运营。
> 共 5 条：P0 1 · P1 4 · P2 0；其中 1 条可由 auditor 自动检测（🤖）。数据源：仓库 ArcueidShiki/seo 的 `checklist/checklist.json`（类别 `i18n`）。

## 何时使用
- 加第二种语言
- 不同国家用户看到错误的语言版本
- 中英文双站规划
- 用户说"帮我检查 / 优化 多语言与本地化"或给出网址要求做这方面的 SEO 审计

## 执行流程
1. **确认对象**：要检查的网址或页面、目标关键词、目标市场（Google / 百度 / 平台站内）、产品所处阶段（规划 / 开发 / 上线 / 增长 / 维护）。只看当前阶段及之前阶段的条目。
2. **先跑自动审计**（有网址时）：在仓库里运行 `node auditor/audit.mjs --url <网址> --name <名字> --keyword "<主关键词>"`，从 `reports/<名字>.json` 读取这些条目的结果：`tech-hreflang`。没法运行脚本时，就按下面的"怎么查"手工检查（view-source、curl、PageSpeed、Rich Results Test 等）。
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

#### [P0] 每种目标语言单独做关键词研究，不直接翻译关键词
id: `i18n-native-keyword-research`
- **为什么**：不同语言的用户用不同说法搜索同一个需求，直译出来的关键词常常没人搜。
- **通过标准**：
  - 每种语言有独立的关键词表，搜索量按目标国家查询（Keyword Planner / Semrush 的地区设置）
  - 核心词经过母语者或当地 Google 下拉联想确认
  - 每种语言的 Top 10 SERP 单独分析（各国的竞争对手不同）
- **怎么查**：Google Trends 切换国家对比；Google 搜索 URL 加 &hl=ja&gl=jp 等参数查看当地的下拉联想和结果。
- **工具**：Google Keyword Planner (https://ads.google.com/home/tools/keyword-planner/)；Semrush (https://www.semrush.com/)；Google Trends (https://trends.google.com/)；Google 搜索 (https://www.google.com/)

#### [P1] 多语言用子目录（/en/、/ja/），不按 IP 或浏览器语言强制跳转
id: `i18n-url-structure`
- **为什么**：Googlebot 主要从美国抓取、不带语言偏好；强制跳转会让其他语言版本无法被抓取。
- **通过标准**：
  - 语言版本使用子目录（example.com/ja/）或独立域名，不用 ?lang=ja 参数或 Cookie 切换
  - 不根据 IP 或 Accept-Language 自动跳转；改为页面顶部提示 + 语言切换器
  - 语言切换器是普通 <a href> 链接，指向当前页面的对应语言版本，而不是首页
- **怎么查**：用 curl -I -H 'Accept-Language: ja' 测试是否被跳转；hreflang 由 auditor 自动检查。
- **工具**：Google Search Console (https://search.google.com/search-console)；Screaming Frog (https://www.screamingfrog.co.uk/seo-spider/)

#### [P1] 中文市场单独规划：品牌词策略 + 各平台站内搜索，不只押百度 SEO
id: `i18n-cn-market-split`
- **为什么**：百度首页大量被广告和自家产品占据，新站很难做通用词；境外服务器在国内访问和收录都偏慢，而使用大陆服务器又需要 ICP 备案。
- **通过标准**：
  - 选用独特、国内没有同名网站的品牌名，目标：百度搜索品牌名排前 3
  - 部署方案二选一并写进计划：境外站点（无需备案，国内访问较慢）或大陆服务器 + ICP 备案
  - 中文获客主要放在小红书、知乎、B站、抖音、公众号的站内搜索，每个平台有关键词表
  - 国内用户的收款方式已考虑（微信支付 / 支付宝，或小报童、爱发电等平台）
- **怎么查**：百度搜索品牌名检查重名；用国内网络或多地测速工具测试官网打开速度。
- **工具**：百度搜索资源平台 (https://ziyuan.baidu.com/)；小红书 (https://www.xiaohongshu.com/)；知乎 (https://www.zhihu.com/)

### ② 开发

#### [P1] 多语言页面 hreflang 互相指向并带 x-default 🤖
id: `tech-hreflang`
- **为什么**：让不同语言 / 地区的用户看到对应版本，避免多语言页面被当作重复内容。
- **通过标准**：
  - 每个语言版本都列出全部语言（含自己）
  - A 指向 B 时 B 也要指回 A
  - 有 x-default
  - 语言代码正确，例如 zh-CN 而不是 cn
- **怎么查**：auditor；Ahrefs / Screaming Frog hreflang 报告。
- **工具**：seo-handbook auditor；Screaming Frog (https://www.screamingfrog.co.uk/seo-spider/)

#### [P1] 本地化而不只是翻译：标题描述、示例、货币、日期、截图都换成当地版本
id: `i18n-localized-content`
- **为什么**：机翻页面质量低、转化差；当地用户看到不对的货币、日期格式和例子会直接离开。
- **通过标准**：
  - 每种语言的 title、description、og 标签单独撰写，包含当地关键词
  - 价格显示当地货币（或明确标注 USD），日期和数字格式符合当地习惯
  - 机器翻译后至少经过一轮母语者或专业校对；关键页面没有残留的源语言文字
  - 截图和示例使用对应语言的界面
- **怎么查**：每种语言抽查 5 个页面；GSC → 效果 → 按国家筛选，比较各语言页面的展示和 CTR。
- **工具**：Google Search Console (https://search.google.com/search-console)

## 相关
- 手册 skill（原理、打法和模板）：`seo-guide-technical-infra`、`seo-guide-keyword-research`
- 总索引：`seo-growth-skills-index`
- 交互式工具：仓库 `tool/index.html`（构建后在 `/tool/`），可以勾选进度、导出 Markdown
