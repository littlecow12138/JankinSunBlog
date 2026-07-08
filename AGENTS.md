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
content/posts/              # Markdown 文章（frontmatter + 正文）
src/
├── app/                    # Next.js App Router 页面
│   ├── page.tsx            # 首页
│   ├── layout.tsx          # 根布局
│   ├── globals.css         # 全局样式
│   ├── blog/               # 文章列表 + [slug] 详情
│   └── about/              # 关于页
├── components/             # 可复用 React 组件（kebab-case）
└── lib/
    └── posts.ts            # 文章读取、筛选逻辑
.cursor/rules/              # 路径级 Agent 规则（按需加载）
├── project.mdc             # 全局规范（alwaysApply）
├── components.mdc          # src/components/**
├── pages.mdc               # src/app/**
└── posts.mdc               # content/posts/**
LEARNING.md                 # 学习路线与当前 Sprint
next.config.ts              # GitHub Pages 静态导出配置
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

## AI 常犯错误

| 错误 | 正确做法 |
|------|----------|
| 用旧版 Next.js API（如 `params` 直接解构） | Next.js 16：`params` 是 `Promise`，需 `await` |
| 组件用 default export | 使用 named export：`export function Xxx()` |
| 引入 shadcn / MUI 等 UI 库 | 纯 Tailwind，保持 editorial 暖色风格 |
| Hero 用 AI 紫色 / 玻璃态 | stone/teal + `#faf8f5`，subtle 渐变或边框 |
| 页面内直接 `fs.readFile` 读文章 | 通过 `@/lib/posts` 的函数获取 |
| 改 UI 时误动无关区块 | Cmd+K 只改选中区域；Agent Prompt 写明范围 |
| 新建文章改了已有文章的 date | 只在新文章 frontmatter 写 date |
| 使用 `any` 类型 | TypeScript strict，Props 用 `type` 定义 |
| significant 改动后不验证 | 跑 `npm run build` 确认通过 |
| 写组件用 PascalCase 文件名 | 文件名 kebab-case：`post-card.tsx` |

## Git Workflow

- 分支：`feature/xxx` 或 `fix/xxx`
- Commit：conventional commits（feat:, fix:, docs:）
- 每个 Feature 对应一个 GitHub Issue

## 学习上下文

这是 AI Coding 学习项目。详细路线见 `LEARNING.md`。
