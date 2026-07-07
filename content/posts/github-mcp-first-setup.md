---
title: "接入 GitHub MCP：AI 终于能碰我的仓库了"
description: "记录第一次配置 GitHub MCP 的过程：Bearer 前缀、全局 mcp.json、以及第一次成功列出仓库。"
date: "2026-07-07"
tags: ["MCP", "GitHub", "Cursor"]
series: "AI Coding 实战"
---

## MCP 解决了什么

在接入 GitHub MCP 之前，AI 只能根据我粘贴的内容回答。

接入之后，AI 可以：

- 列出我的仓库
- 查询 Issue
- 创建 Issue 跟踪任务
- （后续）Review PR

## 踩过的坑

### 1. 项目级 mcp.json 不显示

配置写在 `.cursor/mcp.json` 里，Settings 只看到 codegraph。

**解决**：写到全局 `~/.cursor/mcp.json`。

### 2. Authorization 少了 Bearer

```json
// ❌
"Authorization": "github_pat_xxx"

// ✅
"Authorization": "Bearer github_pat_xxx"
```

### 3. Token 安全

不要把 token 提交到 Git。`mcp.json` 应加入 `.gitignore`，或使用环境变量。

## 第一次成功调用

```
用 GitHub MCP 列出我能访问的仓库，只显示前 5 个名字。
```

Agent 调用了 `get_me` 和 `search_repositories`，返回了真实仓库列表——这说明 MCP 真的生效了，不是幻觉。

## 和博客项目的关系

JankinSunBlog 的所有学习任务，我都会通过 GitHub Issues 管理。

这就是 **「用 AI Coding 建博客，用 MCP 管博客」** 的第一环。
