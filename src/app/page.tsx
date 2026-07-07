import Link from "next/link";
import { PostCard } from "@/components/post-card";
import { getAllPosts } from "@/lib/posts";

export default function HomePage() {
  const posts = getAllPosts().slice(0, 3);

  return (
    <div className="mx-auto max-w-3xl px-6 py-14">
      <section className="mb-16">
        <p className="mb-4 text-xs uppercase tracking-[0.28em] text-stone-500">Learning in Public</p>
        <h1 className="max-w-2xl text-4xl font-medium leading-tight text-stone-900 sm:text-5xl">
          用博客记录 AI Coding 的每一步
        </h1>
        <p className="mt-6 max-w-2xl text-lg leading-8 text-stone-600">
          这个博客既是学习成果，也是实验场。每完成一个 AI Coding 技能点，就写一篇文章；
          每实现一个功能，就用 Cursor Agent 和 GitHub MCP 走一遍真实开发流程。
        </p>
        <div className="mt-8 flex flex-wrap gap-4">
          <Link
            href="/blog"
            className="rounded-full bg-stone-900 px-5 py-2.5 text-sm text-white transition hover:bg-teal-900"
          >
            阅读文章
          </Link>
          <a
            href="https://github.com/littlecow12138/JankinSunBlog/issues"
            className="rounded-full border border-stone-300 px-5 py-2.5 text-sm text-stone-700 transition hover:border-stone-900"
            target="_blank"
            rel="noreferrer"
          >
            查看学习任务
          </a>
        </div>
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
