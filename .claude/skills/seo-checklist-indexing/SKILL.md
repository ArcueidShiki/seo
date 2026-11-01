---
name: seo-checklist-indexing
description: 在 Google Search Console、Bing、IndexNow、百度等站长后台验证网站、提交 sitemap、请求收录、排查索引报告时使用；逐条核对 checklist 提交与收录条目。
---

# 提交与收录 Checklist（Search engine submission）

> Google Search Console、Bing、IndexNow、百度、Yandex：让搜索引擎知道你的页面存在。
> 共 8 条：P0 4 · P1 3 · P2 1；其中 1 条可由 auditor 自动检测（🤖）。数据源：仓库 ArcueidShiki/seo 的 `checklist/checklist.json`（类别 `indexing`）。

## 何时使用
- 新站上线第一天
- GSC 显示"已抓取 - 尚未编入索引"
- 要同时覆盖 Bing / 中文搜索引擎
- 用户说"帮我检查 / 优化 提交与收录"或给出网址要求做这方面的 SEO 审计

## 执行流程
1. **确认对象**：要检查的网址或页面、目标关键词、目标市场（Google / 百度 / 平台站内）、产品所处阶段（规划 / 开发 / 上线 / 增长 / 维护）。只看当前阶段及之前阶段的条目。
2. **先跑自动审计**（有网址时）：在仓库里运行 `node auditor/audit.mjs --url <网址> --name <名字> --keyword "<主关键词>"`，从 `reports/<名字>.json` 读取这些条目的结果：`indexing-gsc`。没法运行脚本时，就按下面的"怎么查"手工检查（view-source、curl、PageSpeed、Rich Results Test 等）。
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

#### [P0] 验证 Google Search Console 并提交 sitemap 🤖
id: `indexing-gsc`
- **为什么**：GSC 是唯一能看到 Google 真实收录、查询词、排名和点击的地方。
- **通过标准**：
  - 优先用域名资源（DNS TXT 验证），否则用网址前缀资源 + HTML 标记
  - 已提交 sitemap.xml，状态为"成功"
  - 核心页面用网址检查 → 请求编入索引
  - "网页"报告里没有大量"已抓取 - 尚未编入索引"
- **怎么查**：需要你的 Google 账号；本仓库构建时通过 GSC_VERIFICATION 环境变量注入验证标签。
- **工具**：Google Search Console (https://search.google.com/search-console)

#### [P0] GSC 用域名资源统一管理，至少 2 个所有者，开启邮件提醒
id: `indexing-gsc-setup`
- **为什么**：域名资源一次覆盖 http / https、www / 裸域和所有子域名；只有一个所有者的账号一旦丢失，历史数据很难找回。
- **通过标准**：
  - GSC 中有「网域」类型资源（DNS TXT 验证），而不只是网址前缀资源
  - 设置 → 用户和权限：至少 2 个所有者（另一个是备用账号）
  - 邮件通知已开启，出现新的索引、安全或人工处置问题时能收到邮件
- **怎么查**：GSC → 添加资源 → 网域 → 在 Cloudflare DNS 添加 TXT 记录。auditor 只能检测页面上的验证标签，这几项需要登录后台确认。
- **工具**：Google Search Console (https://search.google.com/search-console)；Cloudflare (https://dash.cloudflare.com/)

#### [P0] Bing Webmaster Tools 从 GSC 一键导入，确认 sitemap 和核心页面已收录
id: `indexing-bing-import`
- **为什么**：Bing 本身有搜索份额，而且 ChatGPT 搜索、Copilot、DuckDuckGo 等都部分依赖 Bing 的索引。
- **通过标准**：
  - Bing Webmaster 中站点已验证（Import from Google Search Console 或 DNS 验证）
  - Sitemaps 页面状态为 Success，发现的 URL 数 ≈ 可索引页面数
  - URL Inspection 检查首页和 3 个核心页面，均已收录
- **怎么查**：bing.com/webmasters → Add site → Import from GSC，授权后自动导入站点和 sitemap；未收录的页面在 URL Inspection 里点 Request indexing。
- **工具**：Bing Webmaster Tools (https://www.bing.com/webmasters)

#### [P1] 接入 IndexNow，发布或更新页面时自动通知 Bing、Yandex 等
id: `indexing-indexnow`
- **为什么**：IndexNow 能让 Bing、Yandex、Seznam、Naver 在几分钟内知道 URL 变化；Google 目前不使用 IndexNow，仍需 sitemap 和 GSC。
- **通过标准**：
  - 根目录有 IndexNow key 文件（/{key}.txt），返回 200
  - 发布、更新、删除页面时自动推送（构建脚本、CMS 插件或 Cloudflare Crawler Hints）
  - Bing Webmaster → IndexNow 报告中能看到最近提交的 URL
- **怎么查**：Cloudflare → Caching → Configuration → Crawler Hints 开启即可自动推送；或在部署脚本里向 https://api.indexnow.org/indexnow 发 POST 请求。
- **工具**：IndexNow (https://www.indexnow.org/)；Bing Webmaster Tools (https://www.bing.com/webmasters)；Cloudflare (https://dash.cloudflare.com/)；Yandex Webmaster (https://webmaster.yandex.com/)

#### [P1] 上线 2–4 周后自查：搜品牌名首页排第一，site: 收录数与 sitemap 同一量级
id: `indexing-brand-site-check`
- **为什么**：连品牌词都搜不到官网，说明收录或实体信号有问题，要先解决再做内容。
- **通过标准**：
  - Google 和 Bing 搜索品牌名，官网首页排第 1（品牌名与常见词重名时搜「品牌名 + 品类词」）
  - site:域名 的结果数与 sitemap 中的 URL 数处于同一量级（site: 只是粗略估计）
  - 首页结果显示正确的站点名称和 favicon
- **怎么查**：无痕窗口分别在 Google、Bing（中文站加上百度）搜索；GSC 效果报告中筛选品牌查询，查看平均排名。
- **工具**：Google 搜索 (https://www.google.com/)；Bing Webmaster Tools (https://www.bing.com/webmasters)；Google Search Console (https://search.google.com/search-console)

#### [P2] 面向中文用户时，在百度、搜狗、360、头条站长平台验证并提交
id: `indexing-cn-engines`
- **为什么**：国内搜索引擎不会从 Google 获取信息；不主动提交，新站可能几个月都不被收录。
- **通过标准**：
  - 百度搜索资源平台、搜狗站长平台、360 站长平台、头条搜索站长平台均显示「已验证」
  - 各平台提交 sitemap；百度另配置「普通收录」API 推送新 URL（每日有配额）
  - 百度搜索 site:域名 能查到中文页面；境外服务器收录偏慢属正常，不为此做违规操作
  - 中文站同时安装百度统计
- **怎么查**：ziyuan.baidu.com → 用户中心 → 站点管理 → 添加网站，用文件、HTML 标签或 CNAME 验证；其余平台流程类似。
- **工具**：百度搜索资源平台 (https://ziyuan.baidu.com/)；搜狗站长平台 (https://zhanzhang.sogou.com/)；360 站长平台 (https://zhanzhang.so.com/)；头条搜索站长平台 (https://zhanzhang.toutiao.com/)；百度统计 (https://tongji.baidu.com/)

### ④ 增长

#### [P1] 每次发布新页面或重要更新，当天在 GSC 请求编入索引
id: `indexing-request-on-publish`
- **为什么**：新站外链少、抓取频率低，主动提交能把收录从几周缩短到几天，也有助于确立首发。
- **通过标准**：
  - 每篇新文章 / 新落地页发布当天：GSC 网址检查 → 测试实际网址 → 请求编入索引
  - 7 天内复查显示「网址在 Google 上」；14 天仍未收录的进入排查清单
  - 请求编入索引有每日配额（经验值约 10 条），优先提交核心页面，其余依靠 sitemap
- **怎么查**：GSC 顶部搜索框粘贴 URL → 测试实际网址 → 请求编入索引；Bing 侧依靠 IndexNow 或 URL Submission。
- **工具**：Google Search Console (https://search.google.com/search-console)；Bing Webmaster Tools (https://www.bing.com/webmasters)

### ⑤ 维护

#### [P0] 每周检查「网页」索引报告，按原因分类处理未编入索引的页面
id: `indexing-coverage-triage`
- **为什么**：收录是排名的前提；新站最常见的问题是「已抓取 - 尚未编入索引」，通常意味着内容价值不足或内链太少。
- **通过标准**：
  - 「已抓取 - 尚未编入索引」和「已发现 - 尚未编入索引」中的重要页面数逐周下降
  - 「重复网页，Google 选择的规范网址与用户指定的不同」= 0；抽查核心页面，「Google 选择的规范网址」与声明的一致
  - 「软 404」「被 robots.txt 屏蔽」「已排除 noindex」里没有本该收录的页面
  - 每类原因都有处理动作：内容薄 → 扩写或合并；孤立页面 → 加内链；规范冲突 → 修 canonical
- **怎么查**：GSC → 编制索引 → 网页，逐个点开原因查看示例 URL；修复后点击「验证修正」。
- **工具**：Google Search Console (https://search.google.com/search-console)

## 相关
- 手册 skill（原理、打法和模板）：`seo-guide-technical-infra`
- 总索引：`seo-growth-skills-index`
- 交互式工具：仓库 `tool/index.html`（构建后在 `/tool/`），可以勾选进度、导出 Markdown
