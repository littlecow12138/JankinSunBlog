export function SiteFooter() {
  return (
    <footer className="mt-auto border-t border-stone-200/80 bg-[#faf8f5]">
      <div className="mx-auto flex max-w-3xl flex-col gap-2 px-6 py-8 text-sm text-stone-500">
        <p>用 AI Coding 建造，用博客记录。</p>
        <p>
          源码：
          <a
            href="https://github.com/littlecow12138/JankinSunBlog"
            className="ml-1 text-teal-800 underline-offset-4 hover:underline"
            target="_blank"
            rel="noreferrer"
          >
            JankinSunBlog
          </a>
        </p>
      </div>
    </footer>
  );
}
