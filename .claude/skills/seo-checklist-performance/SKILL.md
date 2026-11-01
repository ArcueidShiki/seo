---
name: seo-checklist-performance
description: 优化网站速度、Core Web Vitals（LCP、INP、CLS）、图片体积和 Lighthouse 分数时使用；逐条核对 checklist 速度与体验条目。
---

# 速度与体验 Checklist（Performance & CWV）

> Core Web Vitals（LCP / INP / CLS）、图片、页面体积。
> 共 9 条：P0 1 · P1 6 · P2 2；其中 5 条可由 auditor 自动检测（🤖）。数据源：仓库 ArcueidShiki/seo 的 `checklist/checklist.json`（类别 `performance`）。

## 何时使用
- PageSpeed / Lighthouse 分数低
- GSC 核心网页指标报告出现"较差"
- 图片、脚本太大
- 用户说"帮我检查 / 优化 速度与体验"或给出网址要求做这方面的 SEO 审计

## 执行流程
1. **确认对象**：要检查的网址或页面、目标关键词、目标市场（Google / 百度 / 平台站内）、产品所处阶段（规划 / 开发 / 上线 / 增长 / 维护）。只看当前阶段及之前阶段的条目。
2. **先跑自动审计**（有网址时）：在仓库里运行 `node auditor/audit.mjs --url <网址> --name <名字> --keyword "<主关键词>"`，从 `reports/<名字>.json` 读取这些条目的结果：`perf-core-web-vitals`、`img-dimensions`、`img-optimized`、`perf-lighthouse`、`perf-page-weight`。没法运行脚本时，就按下面的"怎么查"手工检查（view-source、curl、PageSpeed、Rich Results Test 等）。
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

#### [P0] Core Web Vitals 达标：LCP ≤2.5s · INP ≤200ms · CLS ≤0.1 🤖
id: `perf-core-web-vitals`
- **为什么**：Google 的页面体验排名信号，看真实用户数据（CrUX）第 75 百分位。
- **通过标准**：
  - 实验室：LCP ≤2.5s、TBT ≤200ms（INP 的代理指标）、CLS ≤0.1
  - 上线后：GSC → 核心网页指标 报告全部"良好"
  - 不在 <head> 里放同步阻塞的 JS
- **怎么查**：auditor / PageSpeed（实验室数据）；GSC CWV 报告（真实用户数据）。
- **工具**：seo-handbook auditor；PageSpeed Insights (https://pagespeed.web.dev/)；Google Search Console (https://search.google.com/search-console)

#### [P1] 图片声明 width / height，避免布局偏移（CLS） 🤖
id: `img-dimensions`
- **为什么**：没有尺寸的图片加载后会把内容往下挤，导致 CLS 超标。
- **通过标准**：
  - 每个 <img> 都有 width 和 height 属性（或 CSS aspect-ratio）
  - CLS ≤ 0.1
- **怎么查**：auditor；Lighthouse → Avoid large layout shifts。
- **工具**：seo-handbook auditor；Lighthouse (https://developer.chrome.com/docs/lighthouse)

#### [P1] 图片压缩并使用 WebP / AVIF，首屏外懒加载 🤖
id: `img-optimized`
- **为什么**：图片通常占页面体积的大头，直接影响 LCP。
- **通过标准**：
  - 单张图片 ≤200KB；PNG / JPEG 照片 ≤100KB，否则转 WebP / AVIF
  - 首屏外图片 loading="lazy"；LCP 图片 fetchpriority="high" 且不懒加载
  - 按显示尺寸输出（srcset）
- **怎么查**：auditor 统计实际下载的图片；PageSpeed → Properly size images。
- **工具**：seo-handbook auditor；PageSpeed Insights (https://pagespeed.web.dev/)

#### [P1] Lighthouse 移动端：性能 ≥90，SEO / 无障碍 / 最佳实践 ≥90 🤖
id: `perf-lighthouse`
- **为什么**：实验室分数是上线前最快的回归检查。
- **通过标准**：
  - Performance ≥ 90（移动端）
  - SEO ≥ 90，Accessibility ≥ 90，Best Practices ≥ 90
- **怎么查**：auditor 自动运行 Lighthouse；也可以用 PageSpeed Insights。
- **工具**：seo-handbook auditor；PageSpeed Insights (https://pagespeed.web.dev/)；Lighthouse (https://developer.chrome.com/docs/lighthouse)

#### [P1] 营销页 HTML 走 CDN 边缘缓存，海外 TTFB < 200 ms
id: `perf-edge-cache-html`
- **为什么**：只缓存图片和 JS、不缓存 HTML 时，海外用户的 TTFB 常在 800 ms 以上，直接拖慢 LCP。
- **通过标准**：
  - /、/blog/*、/pricing、/docs/* 第二次请求的响应头 cf-cache-status: HIT
  - Cache Rule：Cache Everything，Edge TTL 6–24 小时，Browser TTL 1–4 小时；发布内容后清对应缓存
  - 从美国、欧洲、东南亚至少 3 个测试点测 TTFB < 200 ms；≥ 800 ms 为不合格
- **怎么查**：Cloudflare → Caching → Cache Rules 新建「营销页」规则（按 URI Path 匹配，排在 API 绕过规则之后）；curl -sI 查看 cf-cache-status；WebPageTest 选不同地区测试 TTFB。
- **工具**：Cloudflare (https://dash.cloudflare.com/)；WebPageTest (https://www.webpagetest.org/)；PageSpeed Insights (https://pagespeed.web.dev/)

#### [P1] 第三方脚本（统计、客服、广告、A/B 测试）有预算，每加一个都复测
id: `perf-third-party-budget`
- **为什么**：第三方脚本是 INP 和 CLS 退化最常见的原因，广告位和聊天插件尤其明显。
- **通过标准**：
  - 第三方脚本全部 async / defer 或在用户交互后加载；首页第三方域名 ≤ 5 个（经验值）
  - 广告位、嵌入组件用 min-height 预留空间，加上后 CLS 仍 ≤ 0.1
  - 每新增一个脚本，PageSpeed 前后对比：移动端性能分下降 ≤ 5、TBT 增加 ≤ 100 ms（经验阈值）
- **怎么查**：PageSpeed Insights →「减少第三方代码的影响」；DevTools → Network 按域名分组；Performance 面板录制一次交互查看长任务。
- **工具**：PageSpeed Insights (https://pagespeed.web.dev/)；Lighthouse (https://developer.chrome.com/docs/lighthouse)

#### [P2] 首页总传输体积 ≤1MB 🤖
id: `perf-page-weight`
- **为什么**：移动网络下体积直接决定首屏时间。
- **通过标准**：
  - Lighthouse total-byte-weight ≤ 1000KB
  - 第三方脚本（聊天插件、多个统计）按需加载
- **怎么查**：auditor；DevTools Network 面板。
- **工具**：seo-handbook auditor；Lighthouse (https://developer.chrome.com/docs/lighthouse)

#### [P2] 开启 HTTP/3、Early Hints 和 Brotli；代码压缩在构建时完成
id: `perf-cdn-protocols`
- **为什么**：这些开关对 SaaS 没有副作用，对远距离用户收益最大。Cloudflare 的 Auto Minify 已在 2024 年下线，压缩要交给构建工具。
- **通过标准**：
  - Cloudflare → Speed → Optimization 中 HTTP/3、Early Hints 已开启
  - HTML / CSS / JS 响应头 content-encoding 为 br 或 zstd
  - 构建产物已压缩（Vite / Next.js / Astro 默认开启），不依赖 CDN 的 Auto Minify
  - DevTools → Network 的 Protocol 列显示 h3 或 h2
- **怎么查**：Cloudflare 后台检查开关；DevTools → Network 右键表头打开 Protocol 列；curl -sI -H 'Accept-Encoding: br' 查看编码。
- **工具**：Cloudflare (https://dash.cloudflare.com/)

### ⑤ 维护

#### [P1] 每月复查真实用户数据（CrUX），流量不够时自己上报 Web Vitals
id: `perf-field-data-monitor`
- **为什么**：排名用的是真实用户 28 天数据的第 75 百分位，实验室满分不代表真实体验好；INP 已于 2024 年 3 月取代 FID。
- **通过标准**：
  - GSC → 核心网页指标：移动端和桌面端「较差」网址数 = 0，「需要改进」逐月减少
  - PageSpeed Insights 真实用户数据：LCP ≤ 2.5 s、INP ≤ 200 ms、CLS ≤ 0.1
  - 流量不足、没有 CrUX 数据时，用 web-vitals 库把 INP / LCP / CLS 上报到 GA4 或 Plausible 自定义事件
- **怎么查**：每月第一周打开 GSC 核心网页指标报告；INP 问题用 DevTools Performance 面板录制交互，找超过 50 ms 的长任务。
- **工具**：Google Search Console (https://search.google.com/search-console)；PageSpeed Insights (https://pagespeed.web.dev/)；Google Analytics 4 (https://analytics.google.com/)

## 相关
- 手册 skill（原理、打法和模板）：`seo-guide-technical-infra`
- 总索引：`seo-growth-skills-index`
- 交互式工具：仓库 `tool/index.html`（构建后在 `/tool/`），可以勾选进度、导出 Markdown
