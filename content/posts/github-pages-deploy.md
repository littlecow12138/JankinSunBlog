---
title: "博客上线记：从 localhost 到 github.io"
description: "记录 JankinSunBlog 部署到 GitHub Pages 的完整过程：静态导出、Actions 工作流，以及两次踩坑。"
date: "2026-07-07"
tags: ["GitHub Pages", "CI/CD", "Next.js", "部署"]
series: "AI Coding 实战"
---

## 背景

JankinSunBlog 是用 Next.js 写的个人博客，也是我的 AI Coding 学习实验场。

本地 `npm run dev` 能跑，但只有自己能看。想要一个 **`xxx.github.io`** 这样的公网地址，我选择了 **GitHub Pages**——免费、和代码仓库在一起、push 就能自动更新。

## GitHub Pages 是什么

GitHub Pages 是 GitHub 提供的**静态网站托管**：

| 仓库类型 | 访问地址示例 |
|----------|-------------|
| 项目站点（我的情况） | `https://littlecow12138.github.io/JankinSunBlog/` |
| 用户站点 | `https://littlecow12138.github.io`（仓库须命名为 `用户名.github.io`） |

工作流程：

```
push 代码 → GitHub Actions 构建 → 生成静态 HTML → Pages 托管 → 公网可访问
```

## 第一步：让 Next.js 支持静态导出

GitHub Pages **只能托管静态文件**（HTML / CSS / JS），不能跑 Node 服务器。

Next.js 默认是服务端模式，需要改成 **静态导出（Static Export）**。

在 `next.config.ts` 里加了 Pages 专用配置：

```typescript
const isGithubPages = process.env.GITHUB_PAGES === "true";
const repoName = "JankinSunBlog";

const nextConfig: NextConfig = {
  output: isGithubPages ? "export" : undefined,
  basePath: isGithubPages ? `/${repoName}` : undefined,
  assetPrefix: isGithubPages ? `/${repoName}/` : undefined,
  images: { unoptimized: true },
  trailingSlash: true,
};
```

几个关键点：

- **`output: 'export'`** — 构建时输出静态 HTML 到 `out/` 目录
- **`basePath`** — 项目站点的 URL 带 `/JankinSunBlog` 前缀，路径要对
- **`GITHUB_PAGES` 环境变量** — 本地开发不受影响，只有 CI 构建时启用

`package.json` 加了对应脚本：

```json
"build:pages": "GITHUB_PAGES=true next build"
```

本地可以模拟 Pages 构建：

```bash
npm run build:pages
npx serve out
# 访问 http://localhost:3000/JankinSunBlog/
```

## 第二步：写 GitHub Actions 工作流

新建 `.github/workflows/deploy-pages.yml`：

```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches: [main]
  workflow_dispatch:

permissions:
  contents: read
  pages: write
  id-token: write

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-node@v4
        with:
          node-version: 22
          cache: npm
      - run: npm ci
      - name: Build static site
        run: npm run build:pages
        env:
          GITHUB_PAGES: "true"
      - uses: actions/upload-pages-artifact@v3
        with:
          path: out

  deploy:
    needs: build
    runs-on: ubuntu-latest
    environment:
      name: github-pages
    steps:
      - uses: actions/deploy-pages@v4
```

两个 Job 分工：

| Job | 做什么 |
|-----|--------|
| **build** | 安装依赖 → 静态构建 → 上传 `out/` 产物 |
| **deploy** | 把产物发布到 GitHub Pages |

## 第三步：push 代码

```bash
git add .
git commit -m "feat: add GitHub Pages deployment"
git push -u origin main
```

push 后 Actions 自动触发。第一次的结果是：

| Job | 结果 |
|-----|------|
| build | ✅ 成功 |
| deploy | ❌ 失败 |

代码没问题，问题出在 GitHub 侧配置。

## 踩坑一：私有仓库不能用 Pages

Settings → Pages 页面提示：

> Upgrade or make this repository public to enable Pages

**GitHub Free 计划下，私有仓库无法使用 Pages。** 我把仓库改成了 Public 后，这个限制解除。

## 踩坑二：Pages 没有在 Settings 里启用

deploy Job 的错误日志：

```
Failed to create deployment (status: 404)
Ensure GitHub Pages has been enabled
```

build 已经成功生成了静态文件，但 **Settings 里还没打开 Pages**。

修复步骤：

1. 打开 **Settings → Pages**
2. **Build and deployment → Source** 选 **GitHub Actions**（不是 Deploy from a branch）
3. 到 **Actions** 页面，点 **Re-run all jobs**

第二次运行后，deploy 也绿了。

## 上线

**https://littlecow12138.github.io/JankinSunBlog/**

首页、文章列表、文章详情都能正常访问。

## 完整时间线

```
① 确认方案：Next.js → 静态导出 + GitHub Pages
        ↓
② 改 next.config.ts（basePath + export）
        ↓
③ 加 build:pages 脚本，本地验证构建
        ↓
④ 写 deploy-pages.yml 工作流
        ↓
⑤ push 到 main，Actions 自动跑
        ↓
⑥ 第一次：build ✅ deploy ❌（Pages 未启用）
        ↓
⑦ 仓库改 Public + Settings 启用 Pages
        ↓
⑧ Re-run Actions → 网站上线 🎉
```

## 以后怎么更新

每次改完博客，只需要：

```bash
git add .
git commit -m "docs: 新文章"
git push
```

Actions 会自动构建并发布，一般 1–2 分钟后线上更新。

## 和 AI Coding 的关系

这次部署本身也是一次 AI Coding 实践：

- 用 **Cursor Agent** 生成 Next.js 项目和 Pages 配置
- 用 **GitHub MCP** 查 Actions 日志、定位 404 原因
- 踩坑记录直接变成这篇博客

下一步是 W2：优化首页，继续用 Agent 改 UI。

---

*相关文章：[接入 GitHub MCP](/JankinSunBlog/blog/github-mcp-first-setup/)*
