import Link from "next/link";
import { PostCard } from "@/components/post-card";
import { getAllPosts, getPostsBySeries } from "@/lib/posts";

export default function HomePage() {
  const seriesPosts = getPostsBySeries("AI Coding 实战").slice(0, 3);
  const posts = getAllPosts().slice(0, 3);

  return (
    <div className="mx-auto max-w-3xl px-6 py-14">
      <section className="relative mb-16 overflow-hidden rounded-2xl border border-stone-200/70 bg-gradient-to-br from-stone-100/60 via-[#faf8f5] to-teal-50/30 px-8 py-12 sm:px-10 sm:py-14">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-x-8 top-0 h-px bg-gradient-to-r from-transparent via-stone-300/50 to-transparent"
        />
        <p className="mb-5 text-xs font-medium uppercase tracking-[0.28em] text-stone-500">
          Learning in Public
        </p>
        <h1 className="max-w-2xl text-[2.75rem] font-medium leading-[1.08] tracking-tight text-stone-900 sm:text-5xl sm:leading-[1.06] lg:text-[3.5rem]">
          用博客记录 AI Coding 的每一步
        </h1>
        <p className="mt-7 max-w-xl text-[1.0625rem] leading-[1.75] text-stone-600 sm:text-lg sm:leading-8">
          这个博客既是学习成果，也是实验场。每完成一个 AI Coding 技能点，就写一篇文章；
          每实现一个功能，就用 Cursor Agent 和 GitHub MCP 走一遍真实开发流程。
        </p>
        <div className="mt-10 flex flex-wrap items-center gap-3 sm:gap-4">
          <Link
            href="/blog"
            className="inline-flex items-center justify-center rounded-full bg-stone-900 px-6 py-3 text-sm font-medium text-white shadow-sm transition-colors hover:bg-teal-900"
          >
            阅读文章
          </Link>
          <a
            href="https://github.com/littlecow12138/JankinSunBlog/issues"
            className="inline-flex items-center justify-center rounded-full border border-stone-300 bg-transparent px-6 py-3 text-sm font-medium text-stone-700 transition-colors hover:border-stone-900 hover:text-stone-900"
            target="_blank"
            rel="noreferrer"
          >
            查看学习任务
          </a>
        </div>
      </section>

      <section className="mb-16">
        <div className="mb-6">
          <h2 className="text-sm uppercase tracking-[0.22em] text-stone-500">AI Coding 实战</h2>
          <p className="mt-3 text-base leading-7 text-stone-600">
            按周记录 AI Coding 学习与实践。
          </p>
        </div>
        {seriesPosts.map((post) => (
          <PostCard key={post.slug} post={post} />
        ))}
      </section>

      <section>
        <div className="mb-6 flex items-end justify-between">
          <h2 className="text-sm uppercase tracking-[0.22em] text-stone-500">最新文章</h2>
          <Link href="/blog" className="text-sm text-teal-800 hover:underline">
            查看全部
          </Link>
        </div>
        {posts.map((post) => (
          <PostCard key={post.slug} post={post} />
        ))}
      </section>
    </div>
  );
}
