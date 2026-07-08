---
title: "首页优化：Cmd+K 改样式，Agent 加功能"
description: "W2 实战记录——用 Cursor 两种模式完成首页改造：Cmd+K 局部调 Hero 视觉，Agent 跨文件实现系列文章区块。"
date: "2026-07-07"
tags: ["Cursor", "Prompt", "Next.js"]
series: "AI Coding 实战"
---

## 为什么要改首页

JankinSunBlog 第一版能跑、能部署，但首页还像「脚手架」：Hero 区域平铺直叙，文章列表也没有结构感。

W2 的目标是 [Issue #2](https://github.com/littlecow12138/JankinSunBlog/issues/2)：**优化首页视觉，增加系列文章展示**。这次我刻意用了 Cursor 的两种模式——**Cmd+K** 和 **Agent**——因为它们适合解决的问题完全不同。

## 两种模式，分工明确

| | Cmd+K | Agent |
|---|-------|-------|
| **适合什么** | 选中区域的局部修改 | 跨文件的功能实现 |
| **上下文** | 当前文件 + 选中代码 | `@file` 引用的多个文件 |
| **这次做了什么** | Hero 区域视觉优化 | 系列区块 + 数据层筛选 |

关键经验：**不要用一个模式包打天下**。改样式用 Cmd+K 更快、更精准；加功能用 Agent 更合适。

## Cmd+K：Hero 区域的视觉微调

我在 `src/app/page.tsx` 里选中 Hero 区块，用 Cmd+K 给出结构化 Prompt：

- 保持 editorial 风格（暖色 `#faf8f5`、stone/teal 配色）
- 增加 subtle 背景层次，不要 AI 紫色/玻璃态
- 标题更大、副标题更易读
- 主按钮 solid，次按钮 outline
- **只改选中区域**，不动下方「最新文章」

Agent 不会误改其他区块，因为 Cmd+K 的上下文就是选中的代码。

改动结果：

- 圆角卡片容器 + 淡渐变背景（`stone → #faf8f5 → teal`）
- 标题从 `text-4xl` 放大到 `lg:text-[3.5rem]`
- 顶部一条极淡的装饰线
- 按钮层次：主按钮 `bg-stone-900` + shadow，次按钮透明底 + outline

整个过程没有引入新依赖，纯 Tailwind 调整。

## Agent：系列文章区块

Hero 改完后，需要在 Hero 和「最新文章」之间插入 **「AI Coding 实战」系列区块**。这涉及数据层和页面结构，适合 Agent。

我用 `@file` 引用了四个文件，并先让 Agent **列出计划、确认后再改**：

```
@src/lib/posts.ts @src/app/page.tsx @src/components/post-card.tsx @LEARNING.md

完成 Issue #2 的「系列文章展示」：
1. 在 posts.ts 增加按 series 筛选的方法
2. 首页 Hero 和「最新文章」之间，新增系列区块
3. 显示该系列最新 3 篇，复用 PostCard
4. 保持现有风格，不引入新 UI 库
5. 改完后运行 npm run build 验证
```

Agent 的改动：

**数据层**（`src/lib/posts.ts`）—— 新增筛选函数，与已有的 `getPostsByTag` 对称：

```typescript
export function getPostsBySeries(series: string): PostMeta[] {
  return getAllPosts().filter((post) => post.series === series);
}
```

**页面层**（`src/app/page.tsx`）—— 插入系列区块，复用 `PostCard`：

```typescript
const seriesPosts = getPostsBySeries("AI Coding 实战").slice(0, 3);
```

`PostCard` 本身已经支持展示 `series` 字段，不需要改动。

## 结构化 Prompt 的几条经验

这次 Prompt 能一次到位，主要靠几条约束：

1. **@file 精准引用** — 只给 Agent 需要的文件，减少无关上下文
2. **明确范围** — 「只改选中区域」「不引入新 UI 库」
3. **先计划后执行** — 跨文件改动先看方案，避免返工
4. **Review diff 再接受** — 接受改动前扫一眼 diff，确认没有越界

## 优化后的首页结构

```
Hero（渐变卡片 + 大标题 + 双按钮）
  ↓
AI Coding 实战（系列文章 × 3）
  ↓
最新文章（× 3）
```

线上地址：https://littlecow12138.github.io/JankinSunBlog/

目前三篇文章都属于「AI Coding 实战」系列，所以两个区块内容暂时重复。等 W4 加了标签页、文章变多之后，结构感会更明显。

## 下一步

W2 还剩一项：把 AI-Coding-Learning 的笔记改写成博客文章——这篇就是其中之一。

W3 的方向是完善 `.cursor/rules/`，让 Agent 自动遵循项目规范，减少每次 Prompt 里重复写约束。

---

*相关文章：[接入 GitHub MCP](/JankinSunBlog/blog/github-mcp-first-setup/)*
