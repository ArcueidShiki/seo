# SEO Handbook · SEO / GEO / SERP / 外链 / 流量 / 账号运营 Checklist

每次给产品做 **SEO、GEO（AI 搜索优化）、SERP 富结果、外链、流量曝光、平台账号运营** 时，照着这个仓库逐条检查。

| 内容 | 位置 | 说明 |
|---|---|---|
| ✅ **Checklist（数据源）** | `checklist/checklist.json` · `checklist/CHECKLIST.md` | 每条都有：类别、阶段、优先级、为什么、**检查标准（check against）**、怎么查、用什么工具 / 平台 |
| 🧰 **交互式 Checklist 工具** | `tool/index.html` → 构建后在 `/tool/` | 带类别图标和平台 / 工具图标；可筛选（阶段 / 优先级 / 自动或人工）、勾选（本地保存）、按平台分组、导出 Markdown；可叠加 Demo 的审计结果 |
| 📘 **知识手册** | `handbook/*.md` | 整理自「独立开发前线｜SEO 从 0 到 100」知识库 91 篇文档，按主题重新编排，并补充 2026 年的变化 |
| 🤖 **自动审计脚本** | `auditor/audit.mjs` | 爬取任意网站，按 checklist 中可自动检测的条目打分，并跑 Lighthouse（移动端 + 桌面端），生成搜索结果片段预览 |
| 🧪 **Before / After Demo** | `demos/before/` · `demos/after/` | 同一个虚构产品（Vexlora 仓位计算器），未优化 vs 按 checklist 优化 |
| 📊 **对比报告** | `reports/comparison.html` · `reports/*.json` | 逐条对照、Lighthouse、SERP 预览、Google 排名实验步骤 |

## 离线预览

zip 包里的 `_preview/` 是已构建好的站点（相对链接），直接用浏览器打开 `_preview/index.html` 就能浏览 Checklist 工具、手册、两个 demo 和对比报告，不需要安装任何东西。

## 快速开始

```bash
npm ci                     # 需要 Node 22+；审计依赖 Playwright Chromium（npx playwright install chromium）
npm run all                # checklist → 图片 → 构建 → 本地服务器 → 审计两个 demo → 生成报告 → 重新构建
npm run serve              # 打开 http://localhost:8080/seo-handbook/
```

### 审计你自己的网站

```bash
node auditor/audit.mjs --url https://your-site.com/ --name mysite --keyword "your main keyword"
# 可选：--max-pages 30  --no-lighthouse
# 输出 reports/mysite.json；把它放进 reports/ 后重新构建，就能在 Checklist 工具里叠加查看
```

auditor 能自动判断 39 条（🤖 标记）：title / description / H1 / 关键词位置、canonical、noindex、SSR 正文、URL、robots.txt、sitemap、hreflang、404、favicon、Open Graph / Twitter 卡片、JSON-LD / 面包屑 / 实体、图片 alt / 尺寸 / 体积、内链 / 锚文本 / 外部引用、内容深度、E-E-A-T、FAQ、答案先行、llms.txt、AI 爬虫、统计、GSC 验证、Lighthouse、Core Web Vitals、页面体积。
其余条目（关键词研究、外链、发布、平台运营、变现等）在工具里人工勾选。

## Before / After 结果（云端实测）

| | Demo A 优化前 | Demo B 优化后 |
|---|---|---|
| Checklist 自动审计 | 8 / 100 | 100 / 100 |
| Lighthouse 移动端 性能 / SEO / 无障碍 / 最佳实践 | 64 / 73 / 51 / 96 | 100 / 100 / 100 / 100 |
| LCP（移动端实验室） | 18.1 s | 1.3 s |
| 首页体积 | 3.3 MB | 47 KB |

详见 `reports/comparison.md`，以及部署后的 `/reports/` 页面。

## 部署（GitHub Pages）

1. 推送到 `main`，`.github/workflows/pages.yml` 会构建并发布到 `gh-pages` 分支。
2. 一次性设置：**Settings → Pages → Source: Deploy from a branch → `gh-pages` / root**。
3. 可选的仓库变量（**Settings → Secrets and variables → Actions → Variables**）：
   - `GSC_VERIFICATION`：Google Search Console 的 HTML 标记验证 token
   - `BING_VERIFICATION`：Bing Webmaster 验证 token
   - `GA_ID`：GA4 衡量 ID（只注入 Demo B）
   - `PLAUSIBLE_DOMAIN`
4. 部署后在 GSC 提交 `https://arcueidshiki.github.io/seo-handbook/sitemap.xml`，并对两个 demo 分别"请求编入索引"。实验步骤见报告第 5 节。
5. `.github/workflows/audit.yml`（手动触发）：对线上 demo 重新审计并提交新报告。

## 目录结构

```
checklist/   base.json（分类、平台、自动检测条目）+ items/*.json（人工条目）→ checklist.json / CHECKLIST.md
handbook/    知识手册（Markdown）
tool/        交互式 checklist 工具（单文件 HTML，构建时内联数据和 Lucide 图标）
auditor/     audit.mjs 审计脚本
demos/       before/（未优化） after/（已优化）
site/        首页、404、robots、手册页面模板
scripts/     make-checklist / make-assets / build / serve / compare / run-all
reports/     before.json / after.json / comparison.html / comparison.md
```

## 说明

- 平台和工具图标在运行时通过 Google 的 favicon 服务按域名加载，离线时会回退为通用图标。类别图标来自 [Lucide](https://lucide.dev)（ISC 许可）。
- 手册内容是对原知识库的转述和整理，每章末尾列出来源文档标题。原文请看飞书知识库。
- Demo 里的产品"Vexlora"是虚构的，专门用一个网上没有任何结果的品牌词来做排名对照实验。
