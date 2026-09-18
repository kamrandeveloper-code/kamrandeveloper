"use client";

import { useEffect, useState } from "react";
import { List, ChevronDown } from "lucide-react";
import type { Heading } from "@/lib/toc";

export default function TableOfContents({ headings }: { headings: Heading[] }) {
  const [activeId, setActiveId] = useState<string | null>(headings[0]?.id ?? null);

  useEffect(() => {
    if (headings.length < 2) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.filter((entry) => entry.isIntersecting);
        if (visible.length > 0) {
          setActiveId(visible[0].target.id);
        }
      },
      { rootMargin: "-96px 0px -70% 0px", threshold: 0 },
    );

    const elements = headings
      .map((h) => document.getElementById(h.id))
      .filter((el): el is HTMLElement => el !== null);
    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, [headings]);

  if (headings.length < 2) return null;

  const minLevel = Math.min(...headings.map((h) => h.level));

  function handleClick(e: React.MouseEvent<HTMLAnchorElement>, id: string) {
    e.preventDefault();
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
    history.replaceState(null, "", `#${id}`);
    setActiveId(id);
  }

  return (
    <details open className="group/toc bg-surface border border-border rounded-2xl mb-10 overflow-hidden">
      <summary className="flex items-center justify-between gap-3 px-5 py-4 sm:px-6 cursor-pointer select-none list-none">
        <span className="flex items-center gap-2.5 text-xs font-bold tracking-widest uppercase text-accent">
          <List className="w-4 h-4" strokeWidth={2.5} aria-hidden />
          On this page
        </span>
        <ChevronDown className="w-4 h-4 text-muted transition-transform duration-200 group-open/toc:rotate-180" aria-hidden />
      </summary>

      <nav aria-label="Table of contents" className="px-5 sm:px-6 pb-5 sm:pb-6">
        <ul className="relative space-y-0.5">
          <span className="absolute left-[3px] top-1.5 bottom-1.5 w-px bg-border" aria-hidden />

          {headings.map((h) => {
            const isActive = activeId === h.id;
            const isSub = h.level > minLevel;

            return (
              <li key={h.id} className="relative pl-4">
                <a
                  href={`#${h.id}`}
                  onClick={(e) => handleClick(e, h.id)}
                  aria-current={isActive ? "location" : undefined}
                  className="relative flex items-baseline gap-2.5 py-1.5 group/link"
                >
                  <span
                    className={`absolute left-[-13px] top-[10px] h-1.5 w-1.5 shrink-0 rounded-full transition-colors ${
                      isActive ? "bg-accent scale-125" : "bg-border group-hover/link:bg-muted"
                    }`}
                    aria-hidden
                  />
                  <span
                    className={`leading-snug transition-colors ${isSub ? "pl-4 text-[13px]" : "text-sm"} ${
                      isActive ? "text-accent font-semibold" : "text-muted group-hover/link:text-text"
                    }`}
                  >
                    {h.text}
                  </span>
                </a>
              </li>
            );
          })}
        </ul>
      </nav>
    </details>
  );
}
