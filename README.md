# JankinSunBlog — AI Coding 实战博客

> 用博客学 AI Coding · 用 AI Coding 做博客

个人博客项目，同时作为 [AI-Coding-Learning](https://github.com/littlecow12138/AI-Coding-Learning) 的实战配套。

## 快速开始

```bash
npm install
npm run dev
```

打开 [http://localhost:3000](http://localhost:3000)

## 项目结构

```
JankinSunBlog/
├── content/posts/       # Markdown 文章
├── src/
│   ├── app/             # Next.js 页面
│   ├── components/      # UI 组件
│   └── lib/posts.ts     # 文章读取逻辑
├── AGENTS.md            # Agent 项目规范
├── LEARNING.md          # 本仓库的学习路线
└── .cursor/rules/       # Cursor Rules
```

## 学习路线

详见 [LEARNING.md](./LEARNING.md)

| 阶段 | 博客功能 | AI Coding 技能 |
|------|----------|----------------|
| W1 | 脚手架 + 首页 | Cursor Agent |
| W2 | 文章系统 | Prompt / @file |
| W3 | Rules 配置 | 上下文工程 |
| W4 | 标签 + 搜索 | Agentic 多文件 |
| W5 | GitHub 工作流 | MCP |
| W6 | 部署 Vercel | CI/CD |

## 关联仓库

- 理论笔记：[AI-Coding-Learning](https://github.com/littlecow12138/AI-Coding-Learning)
- 博客源码：本仓库
- 任务追踪：[GitHub Issues](https://github.com/littlecow12138/JankinSunBlog/issues)

## 写文章

在 `content/posts/` 新建 `.md` 文件：

```markdown
---
title: "文章标题"
description: "摘要"
date: "2026-07-07"
tags: ["AI Coding"]
series: "AI Coding 实战"
---

正文...
```

## 部署

### 方案 A：GitHub Pages（免费 *.github.io）

推送 `main` 分支后，GitHub Actions 自动构建并发布。

**访问地址**：https://littlecow12138.github.io/JankinSunBlog/

**首次启用**（只需做一次）：

1. 打开仓库 **Settings → Pages**
2. **Build and deployment → Source** 选 **GitHub Actions**
3. push 代码到 `main`，等 Actions 跑完

本地预览 GitHub Pages 版本：

```bash
npm run build:pages
npx serve out
# 访问 http://localhost:3000/JankinSunBlog/
```

### 方案 B：Vercel（Next.js 官方推荐，后续 W6）

更适合需要 SSR / 自定义域名的场景，见 LEARNING.md W6。

---

```bash
git remote add origin git@github.com:littlecow12138/JankinSunBlog.git
git push -u origin main
```
