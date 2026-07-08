import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { PostCard } from "@/components/post-card";
import { getAllTags, getPostsByTag, tagFromSlug, tagToSlug } from "@/lib/posts";

type TagPageProps = {
  params: Promise<{ tag: string }>;
};

export async function generateStaticParams() {
  return getAllTags().map(({ tag }) => ({ tag: tagToSlug(tag) }));
}

export async function generateMetadata({ params }: TagPageProps): Promise<Metadata> {
  const { tag: tagSlug } = await params;
  const tag = tagFromSlug(tagSlug);

  return {
    title: `标签：${tag}`,
    description: `浏览标签「${tag}」下的 AI Coding 学习文章`,
  };
}

export default async function TagPage({ params }: TagPageProps) {
  const { tag: tagSlug } = await params;
  const tag = tagFromSlug(tagSlug);
  const posts = getPostsByTag(tag);

  if (posts.length === 0) {
    notFound();
  }

  return (
    <div className="mx-auto max-w-3xl px-6 py-14">
      <Link href="/tags" className="text-sm text-teal-800 hover:underline">
        ← 返回标签列表
      </Link>
      <header className="mb-10 mt-8">
        <p className="mb-3 text-xs uppercase tracking-[0.22em] text-stone-500">Tag</p>
        <h1 className="text-4xl font-medium text-stone-900">{tag}</h1>
        <p className="mt-4 text-base leading-7 text-stone-600">
          共 {posts.length} 篇文章。
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
