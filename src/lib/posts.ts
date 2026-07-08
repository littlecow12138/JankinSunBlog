import fs from "fs";
import path from "path";
import matter from "gray-matter";

const CHARS_PER_MINUTE = 400;

export type PostMeta = {
  slug: string;
  title: string;
  description: string;
  date: string;
  tags: string[];
  series?: string;
  readingTimeMinutes: number;
};

export type Post = PostMeta & {
  content: string;
};

const postsDirectory = path.join(process.cwd(), "content/posts");

function stripMarkdown(content: string): string {
  return content
    .replace(/```[\s\S]*?```/g, "")
    .replace(/`[^`]+`/g, "")
    .replace(/!\[[^\]]*\]\([^)]*\)/g, "")
    .replace(/\[([^\]]*)\]\([^)]*\)/g, "$1")
    .replace(/^#{1,6}\s+/gm, "")
    .replace(/[*_~>|`-]/g, "")
    .replace(/\s+/g, "");
}

export function estimateReadingTime(content: string): number {
  const charCount = stripMarkdown(content).length;
  return Math.max(1, Math.ceil(charCount / CHARS_PER_MINUTE));
}

function parsePostFile(slug: string): Post {
  const filePath = path.join(postsDirectory, `${slug}.md`);
  const fileContents = fs.readFileSync(filePath, "utf8");
  const { data, content } = matter(fileContents);

  return {
    slug,
    title: data.title as string,
    description: data.description as string,
    date: data.date as string,
    tags: (data.tags as string[]) ?? [],
    series: data.series as string | undefined,
    readingTimeMinutes: estimateReadingTime(content),
    content,
  };
}

export function getAllPosts(): PostMeta[] {
  const files = fs.readdirSync(postsDirectory).filter((file) => file.endsWith(".md"));

  return files
    .map((file) => {
      const slug = file.replace(/\.md$/, "");
      const { title, description, date, tags, series, readingTimeMinutes } = parsePostFile(slug);
      return { slug, title, description, date, tags, series, readingTimeMinutes };
    })
    .sort((a, b) => (a.date < b.date ? 1 : -1));
}

export function getPostBySlug(slug: string): Post | null {
  try {
    return parsePostFile(slug);
  } catch {
    return null;
  }
}

export function getPostsByTag(tag: string): PostMeta[] {
  return getAllPosts().filter((post) => post.tags.includes(tag));
}

export function getPostsBySeries(series: string): PostMeta[] {
  return getAllPosts().filter((post) => post.series === series);
}
