import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "关于",
  description: "关于 Jankin Sun Blog 和 AI Coding 学习计划",
};

export default function AboutPage() {
  return (
    <div className="mx-auto max-w-3xl px-6 py-14">
      <p className="mb-3 text-xs uppercase tracking-[0.22em] text-stone-500">About</p>
      <h1 className="text-4xl font-medium text-stone-900">关于这个博客</h1>
      <div className="mt-8 space-y-5 text-base leading-8 text-stone-700">
        <p>
          <strong>JankinSunBlog</strong> 是我学习 AI Coding 的主项目。目标不是做一个「完美博客模板」，
          而是在真实开发里练习 Cursor、Agent、Rules、MCP 和 GitHub 工作流。
        </p>
        <p>
          理论笔记放在{" "}
          <code className="rounded bg-stone-100 px-1.5 py-0.5 text-sm">AI-Coding-Learning</code>{" "}
          仓库；这个仓库负责「做出来」和「写出来」。
        </p>
        <p>学习路线见仓库内的 LEARNING.md，任务追踪见 GitHub Issues。</p>
      </div>
      <div className="mt-10 flex flex-wrap gap-4">
        <Link
          href="/blog/hello-jankin-sun-blog"
          className="rounded-full bg-stone-900 px-5 py-2.5 text-sm text-white transition hover:bg-teal-900"
        >
          从第一篇博客开始
        </Link>
        <a
          href="https://github.com/littlecow12138/JankinSunBlog"
          className="rounded-full border border-stone-300 px-5 py-2.5 text-sm text-stone-700 transition hover:border-stone-900"
          target="_blank"
          rel="noreferrer"
        >
          GitHub 仓库
        </a>
      </div>
    </div>
  );
}
