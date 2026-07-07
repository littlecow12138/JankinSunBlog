# JankinSunBlog 学习路线

> 本文件是博客仓库的实战 checklist，理论文档在 AI-Coding-Learning 仓库

---

## 双仓库分工

| 仓库 | 职责 |
|------|------|
| **AI-Coding-Learning** | 理论、概念、系统笔记 |
| **JankinSunBlog** | 代码实现、博客文章、GitHub Issues 任务 |

---

## 当前进度：W1 脚手架 ✅

- [x] Next.js + TypeScript + Tailwind 初始化
- [x] Markdown 文章系统
- [x] 首页 / 文章列表 / 文章详情 / 关于页
- [x] 第一篇博客文章
- [x] AGENTS.md + Cursor Rules
- [x] 推送到 GitHub
- [x] 部署到 GitHub Pages
- [ ] 部署到 Vercel（可选，W6）

---

## W2：内容与 Prompt 练习

**博客目标**
- [ ] 优化首页视觉
- [ ] 增加「系列文章」筛选

**AI Coding 练习**
- [ ] 用 Cursor Cmd+K 改组件样式
- [ ] 把 AI-Coding-Learning 的一篇笔记改写成博客文章
- [ ] 练习 `@file` 精准引用

**对应理论**：`02-LLM基础与Prompt工程.md`

---

## W3：上下文工程

**博客目标**
- [ ] 完善 `.cursor/rules/`（组件、文章、页面各一条）
- [ ] 统一代码风格（命名、目录）

**AI Coding 练习**
- [ ] 新开会话，验证 Agent 是否自动遵循 Rules
- [ ] 记录「AI 犯过的错 → 补进 Rules」

**对应理论**：`04-上下文工程Context-Engineering.md`

---

## W4：Agentic 功能开发

**博客目标**
- [ ] 标签页 `/tags/[tag]`
- [ ] 站内搜索（或标签过滤）

**AI Coding 练习**
- [ ] 用 Agent 模式完成一个跨 3+ 文件的 Feature
- [ ] Review diff + 跑 `npm run build`

**对应理论**：`05-Agentic-Coding智能体编程.md`

---

## W5：MCP + GitHub 工作流

**博客目标**
- [ ] 所有 Feature 用 GitHub Issue 跟踪
- [ ] PR 合并前用 MCP 查 Issue 状态

**AI Coding 练习**
- [ ] 用 GitHub MCP 创建 / 关闭 Issue
- [ ] 用 Agent + MCP 完成「Issue → 实现 → 关闭」闭环

**对应理论**：`06-MCP与工具扩展.md`

---

## W6：部署与工程化

**博客目标**
- [ ] Vercel 部署
- [ ] 自定义域名（可选）
- [ ] GitHub Actions 自动部署

**AI Coding 练习**
- [ ] Agent 修 build / deploy 错误
- [ ] 配置 PR 自动 Review

**对应理论**：`08-工程实践与质量保障.md`

---

## 文章发布计划

| 周 | 建议文章标题 | 状态 |
|----|-------------|------|
| W1 | 你好，JankinSunBlog | ✅ |
| W1 | 接入 GitHub MCP | ✅ |
| W1 | 博客上线记：github.io 部署 | ✅ |
| W2 | 用 Cursor Agent 搭博客骨架 | |
| W3 | 给博客项目写 Rules，AI 不再乱改 |
| W4 | Agent 独立完成标签页 Feature |
| W5 | Issue 驱动的 AI 开发工作流 |
| W6 | Vercel 部署（可选） | |

---

*关联文档：[AI-Coding-Learning/09-博客实战项目.md](../AI-Coding-Learning/09-博客实战项目.md)*
