import Link from "next/link";
import type { PostMeta } from "@/lib/posts";

type PostCardProps = {
  post: PostMeta;
};

function formatDate(date: string) {
  return new Intl.DateTimeFormat("zh-CN", {
    year: "numeric",
    month: "long",
    day: "numeric",
  }).format(new Date(date));
}

export function PostCard({ post }: PostCardProps) {
  return (
    <article className="group border-b border-stone-200/80 py-8 last:border-b-0">
      <div className="mb-3 flex flex-wrap items-center gap-3 text-xs uppercase tracking-[0.18em] text-stone-500">
        <time dateTime={post.date}>{formatDate(post.date)}</time>
        {post.series ? <span>{post.series}</span> : null}
      </div>
      <h2 className="text-2xl font-medium text-stone-900 transition group-hover:text-teal-800">
        <Link href={`/blog/${post.slug}`}>{post.title}</Link>
      </h2>
      <p className="mt-3 text-base leading-7 text-stone-600">{post.description}</p>
      <div className="mt-4 flex flex-wrap gap-2">
        {post.tags.map((tag) => (
          <span
            key={tag}
            className="rounded-full bg-stone-100 px-3 py-1 text-xs text-stone-600"
          >
            {tag}
          </span>
        ))}
      </div>
    </article>
  );
}
