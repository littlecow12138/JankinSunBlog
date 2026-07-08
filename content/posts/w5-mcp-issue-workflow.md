---
title: "W5：Issue 驱动的 MCP 开发工作流"
description: "用 GitHub MCP 创建 Issue、Agent 实现、MCP 关闭——走完 AI Coding 的 Issue 闭环。"
date: "2026-07-08"
tags: ["MCP", "GitHub", "Agent", "工作流"]
series: "AI Coding 实战"
---

## W5 要练什么

W4 用 Agent 做了标签页 Feature。W5 的重点不是大功能，而是 **工作流**：

```
GitHub MCP 创建 Issue → Agent 实现 → 验证 → GitHub MCP 关闭 Issue
```

让 AI 不只会写代码，还会 **对接 GitHub 项目管理**。

## 闭环演示：Issue #5

### 1. MCP 创建 Issue

在 Cursor Agent 中通过 GitHub MCP 创建：

**[W5] 文章详情页标签可点击 + 阅读时长**

任务清单：

- 详情页标签链接到 `/tags/[tag]`
- 与 PostCard 样式一致
- 显示阅读时长
- `build:pages` 通过

### 2. Agent 实现

改动文件：`src/app/blog/[slug]/page.tsx`

- 标签从 `<span>` 改为 `<Link href={/tags/...}>`
- 头部 meta 区增加 `{post.readingTimeMinutes} 分钟阅读`
- 复用 `tagToSlug()`，与列表页行为一致

### 3. 验证

```bash
npm run build:pages
```

### 4. MCP 关闭 Issue

实现并 push 后，用 GitHub MCP 将 Issue #5 标为 completed 并关闭。

## MCP 在闭环里扮演什么

| 步骤 | 没有 MCP | 有 MCP |
|------|----------|--------|
| 建任务 | 打开 GitHub 网页 | Agent 内 `issue_write` create |
| 查进度 | 切换浏览器 | Agent 内 `list_issues` |
| 关任务 | 手动点 Close | Agent 内 `issue_write` update + close |

**开发者角色**：描述需求 → Review 代码 → 决定何时关 Issue。

## 和前几周的关系

| 周 | 技能 | W5 如何用上 |
|----|------|-------------|
| W2 | Prompt | Issue body 就是结构化 Prompt |
| W3 | Rules | Agent 改代码仍遵循 `.cursor/rules/` |
| W4 | Agentic | 跨文件实现由 Agent 完成 |
| **W5** | **MCP** | Issue 生命周期由 MCP 管理 |

## 下一步

W6：Vercel 部署 + CI（Issue #3），继续用同一套 Issue 驱动流程。

---

*相关：[接入 GitHub MCP](/JankinSunBlog/blog/github-mcp-first-setup/)*
