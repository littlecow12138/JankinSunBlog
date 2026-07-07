import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

type MarkdownContentProps = {
  content: string;
};

export function MarkdownContent({ content }: MarkdownContentProps) {
  return (
    <div className="markdown-body">
      <ReactMarkdown
        remarkPlugins={[remarkGfm]}
        components={{
          h1: ({ children }) => (
            <h1 className="mb-6 mt-10 text-3xl font-medium text-stone-900">{children}</h1>
          ),
          h2: ({ children }) => (
            <h2 className="mb-4 mt-8 text-2xl font-medium text-stone-900">{children}</h2>
          ),
          h3: ({ children }) => (
            <h3 className="mb-3 mt-6 text-xl font-medium text-stone-900">{children}</h3>
          ),
          p: ({ children }) => (
            <p className="mb-5 text-base leading-8 text-stone-700">{children}</p>
          ),
          ul: ({ children }) => (
            <ul className="mb-5 list-disc space-y-2 pl-6 text-stone-700">{children}</ul>
          ),
          ol: ({ children }) => (
            <ol className="mb-5 list-decimal space-y-2 pl-6 text-stone-700">{children}</ol>
          ),
          li: ({ children }) => <li className="leading-7">{children}</li>,
          blockquote: ({ children }) => (
            <blockquote className="mb-5 border-l-2 border-teal-700/40 pl-4 text-stone-600 italic">
              {children}
            </blockquote>
          ),
          code: ({ children }) => (
            <code className="rounded bg-stone-100 px-1.5 py-0.5 font-mono text-sm text-stone-800">
              {children}
            </code>
          ),
          pre: ({ children }) => (
            <pre className="mb-5 overflow-x-auto rounded-xl bg-stone-900 p-4 text-sm leading-7 text-stone-100">
              {children}
            </pre>
          ),
          a: ({ href, children }) => (
            <a
              href={href}
              className="text-teal-800 underline-offset-4 hover:underline"
              target={href?.startsWith("http") ? "_blank" : undefined}
              rel={href?.startsWith("http") ? "noreferrer" : undefined}
            >
              {children}
            </a>
          ),
        }}
      >
        {content}
      </ReactMarkdown>
    </div>
  );
}
