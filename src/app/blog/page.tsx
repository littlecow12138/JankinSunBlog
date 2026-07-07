import type { Metadata } from "next";
import { PostCard } from "@/components/post-card";
import { getAllPosts } from "@/lib/posts";

export const metadata: Metadata = {
  title: "文章",
  description: "AI Coding 学习文章列表",
};

export default function BlogPage() {
  const posts = getAllPosts();

  return (
    <div className="mx-auto max-w-3xl px-6 py-14">
      <header className="mb-10">
        <p className="mb-3 text-xs uppercase tracking-[0.22em] text-stone-500">Archive</p>
        <h1 className="text-4xl font-medium text-stone-900">全部文章</h1>
        <p className="mt-4 text-base leading-7 text-stone-600">
          按时间记录 AI Coding 学习与实践。
        </p>
      </header>
      <section>
        {posts.map((post) => (
          <PostCard key={post.slug} post={post} />
        ))}
      </section>
    </div>
  );
}
