import Link from "next/link";

const navItems = [
  { href: "/", label: "首页" },
  { href: "/blog", label: "文章" },
  { href: "/about", label: "关于" },
];

export function SiteHeader() {
  return (
    <header className="border-b border-stone-200/80 bg-[#faf8f5]/90 backdrop-blur-sm">
      <div className="mx-auto flex max-w-3xl items-center justify-between px-6 py-5">
        <Link href="/" className="group">
          <p className="text-xs uppercase tracking-[0.24em] text-stone-500">Jankin Sun</p>
          <p className="text-lg font-medium text-stone-900 transition group-hover:text-teal-800">
            AI Coding 学习博客
          </p>
        </Link>
        <nav className="flex gap-6 text-sm text-stone-600">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="transition hover:text-stone-900"
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
