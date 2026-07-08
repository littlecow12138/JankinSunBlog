import type { Metadata } from "next";
import Link from "next/link";
import { getAllTags, tagToSlug } from "@/lib/posts";

export const metadata: Metadata = {
  title: "标签",
  description: "按标签浏览 AI Coding 学习文章",
};

export default function TagsPage() {
  const tags = getAllTags();

  return (
    <div className="mx-auto max-w-3xl px-6 py-14">
      <header className="mb-10">
        <p className="mb-3 text-xs uppercase tracking-[0.22em] text-stone-500">Tags</p>
        <h1 className="text-4xl font-medium text-stone-900">全部标签</h1>
        <p className="mt-4 text-base leading-7 text-stone-600">
          按主题浏览文章，共 {tags.length} 个标签。
        </p>
      </header>
      <section className="flex flex-wrap gap-3">
        {tags.map(({ tag, count }) => (
          <Link
            key={tag}
            href={`/tags/${tagToSlug(tag)}`}
            className="rounded-full bg-stone-100 px-3 py-1 text-xs text-stone-600 transition hover:bg-stone-200/80 hover:text-teal-800"
          >
            {tag} ({count})
          </Link>
        ))}
      </section>
    </div>
  );
}
