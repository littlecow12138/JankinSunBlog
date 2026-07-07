<!-- BEGIN:nextjs-agent-rules -->
# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.
<!-- END:nextjs-agent-rules -->

# JankinSunBlog

## Tech Stack

- Next.js 16 App Router
- TypeScript (strict)
- Tailwind CSS 4
- Markdown posts in `content/posts/`
- Package manager: npm

## Commands

- `npm run dev` — 开发服务器
- `npm run build` — 生产构建
- `npm run lint` — ESLint
- `npm start` — 生产启动

## Project Structure

```
content/posts/          # Markdown 文章（frontmatter + 正文）
src/app/                # 页面路由
src/components/         # React 组件
src/lib/posts.ts        # 文章读取逻辑
```

## Coding Conventions

- 使用 TypeScript，不用 `any`
- 组件文件：kebab-case（如 `post-card.tsx`）
- 页面使用 Server Components，仅在需要交互时用 `"use client"`
- 样式用 Tailwind，不写 inline style
- 新文章放 `content/posts/`，文件名即 slug（kebab-case）
- 文章 frontmatter 必填：title, description, date, tags

## 不要

- 不要引入 UI 框架（shadcn 等）除非明确要求
- 不要修改 `content/posts/` 已有文章的 date
- 不要添加 console.log 到生产代码
- 不要创建 README 除非用户要求

## Git Workflow

- 分支：`feature/xxx` 或 `fix/xxx`
- Commit：conventional commits（feat:, fix:, docs:）
- 每个 Feature 对应一个 GitHub Issue

## 学习上下文

这是 AI Coding 学习项目。详细路线见 `LEARNING.md`。
