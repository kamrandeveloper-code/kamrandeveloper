import type { Heading } from "@/lib/toc";

export default function TableOfContents({ headings }: { headings: Heading[] }) {
  if (headings.length < 2) return null;

  const minLevel = Math.min(...headings.map((h) => h.level));

  return (
    <nav aria-label="Table of contents" className="bg-surface border border-border rounded-2xl p-5 sm:p-6 mb-10">
      <p className="text-xs font-bold tracking-widest uppercase text-accent mb-3">On this page</p>
      <ul className="space-y-2">
        {headings.map((h) => (
          <li key={h.id} style={{ paddingLeft: `${(h.level - minLevel) * 1}rem` }}>
            <a
              href={`#${h.id}`}
              className="text-sm text-muted hover:text-accent transition-colors leading-snug"
            >
              {h.text}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
