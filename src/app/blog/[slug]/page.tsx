import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { MarkdownContent } from "@/components/markdown-content";
import { getAllPosts, getPostBySlug, tagToSlug } from "@/lib/posts";

type BlogPostPageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return getAllPosts().map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: BlogPostPageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) {
    return { title: "文章未找到" };
  }

  return {
    title: post.title,
    description: post.description,
  };
}

function formatDate(date: string) {
  return new Intl.DateTimeFormat("zh-CN", {
    year: "numeric",
    month: "long",
    day: "numeric",
  }).format(new Date(date));
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) {
    notFound();
  }

  return (
    <article className="mx-auto max-w-3xl px-6 py-14">
      <Link href="/blog" className="text-sm text-teal-800 hover:underline">
        ← 返回文章列表
      </Link>
      <header className="mt-8 border-b border-stone-200/80 pb-8">
        <div className="mb-4 flex flex-wrap items-center gap-3 text-xs uppercase tracking-[0.18em] text-stone-500">
          <time dateTime={post.date}>{formatDate(post.date)}</time>
          <span>{post.readingTimeMinutes} 分钟阅读</span>
          {post.series ? <span>{post.series}</span> : null}
        </div>
        <h1 className="text-4xl font-medium leading-tight text-stone-900">{post.title}</h1>
        <p className="mt-4 text-lg leading-8 text-stone-600">{post.description}</p>
        <div className="mt-5 flex flex-wrap gap-2">
          {post.tags.map((tag) => (
            <Link
              key={tag}
              href={`/tags/${tagToSlug(tag)}`}
              className="rounded-full bg-stone-100 px-3 py-1 text-xs text-stone-600 transition hover:bg-stone-200/80 hover:text-teal-800"
            >
              {tag}
            </Link>
          ))}
        </div>
      </header>
      <div className="pt-10">
        <MarkdownContent content={post.content} />
      </div>
    </article>
  );
}
