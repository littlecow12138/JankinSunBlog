---
title: "你好，JankinSunBlog"
description: "博客项目启动：为什么选 AI Coding + 博客作为学习路径，以及第一版包含了什么。"
date: "2026-07-07"
tags: ["AI Coding", "项目启动"]
series: "AI Coding 实战"
---

## 为什么做这个博客

我想系统学习 AI Coding，但不希望只停留在看文档。

**JankinSunBlog** 的定位是：

- **产品**：一个能访问的个人博客
- **实验场**：练习 Cursor Agent、Rules、MCP
- **内容**：把学习过程写成文章

## 技术栈

| 层级 | 选择 |
|------|------|
| 框架 | Next.js 16 + App Router |
| 语言 | TypeScript |
| 样式 | Tailwind CSS 4 |
| 内容 | Markdown + gray-matter |
| 部署 | Vercel（后续） |

## 第一版有什么

- 首页：介绍 + 最新文章
- `/blog`：文章列表
- `/blog/[slug]`：文章详情
- `/about`：关于页

## 下一步

1. 用 GitHub MCP 管理学习任务（Issues）
2. 写 `.cursor/rules/` 让 Agent 懂项目规范
3. 用 Agent 实现标签页和搜索

如果你也在学 AI Coding，欢迎一起看源码、一起踩坑。
