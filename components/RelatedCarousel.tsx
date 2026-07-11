"use client";

import Link from "next/link";
import { useRef } from "react";

export interface CarouselItem {
  href: string;
  title: string;
  excerpt: string;
  tag?: string;
}

interface Props {
  heading: string;
  viewAllHref: string;
  viewAllLabel?: string;
  items: CarouselItem[];
}

export default function RelatedCarousel({ heading, viewAllHref, viewAllLabel = "View all", items }: Props) {
  const scrollerRef = useRef<HTMLDivElement>(null);

  if (items.length === 0) return null;

  function scrollBy(delta: number) {
    scrollerRef.current?.scrollBy({ left: delta, behavior: "smooth" });
  }

  return (
    <section className="mt-10">
      <div className="flex items-center justify-between gap-4 mb-6">
        <h2 className="font-display font-bold text-2xl sm:text-3xl text-text">{heading}</h2>
        <div className="flex items-center gap-3">
          <Link href={viewAllHref} className="hidden sm:inline text-sm font-medium text-accent hover:underline">
            {viewAllLabel}
          </Link>
          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={() => scrollBy(-340)}
              aria-label="Scroll left"
              className="w-9 h-9 rounded-full border border-border flex items-center justify-center text-muted hover:text-accent hover:border-accent transition-colors"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button
              type="button"
              onClick={() => scrollBy(340)}
              aria-label="Scroll right"
              className="w-9 h-9 rounded-full border border-border flex items-center justify-center text-muted hover:text-accent hover:border-accent transition-colors"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      <div
        ref={scrollerRef}
        className="flex gap-5 overflow-x-auto pb-2 snap-x snap-mandatory scroll-smooth [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
      >
        {items.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className="group snap-start shrink-0 w-[260px] sm:w-[320px] bg-surface border border-border rounded-2xl p-6 hover:border-accent/30 transition-all duration-300"
          >
            {item.tag && (
              <span className="inline-block text-xs font-bold tracking-widest uppercase px-2.5 py-1 rounded-full bg-accent/10 text-accent mb-3">
                {item.tag}
              </span>
            )}
            <h3 className="font-display font-bold text-text text-lg mb-2 group-hover:text-accent transition-colors duration-200 line-clamp-2">
              {item.title}
            </h3>
            <p className="text-muted text-sm leading-relaxed line-clamp-3">{item.excerpt}</p>
          </Link>
        ))}
      </div>
    </section>
  );
}
