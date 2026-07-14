"use client";

import { useState } from "react";

interface FaqAccordionItemProps {
  question: string;
  answer: string;
}

function FaqAccordionItem({ question, answer }: FaqAccordionItemProps) {
  return (
    <details
  className="
    group
    bg-surface
    border
    border-border
    rounded-2xl
    overflow-hidden
    transition-all
    duration-300
    hover:border-accent/30
    hover:shadow-lg
    hover:shadow-accent/5
  "
>
      <summary
  className="
    flex
    items-center
    justify-between
    gap-5
    px-6
    py-5
    cursor-pointer
    list-none
    select-none
    transition-colors
    duration-200
    group-hover:bg-bg/40
  "
>
        <span className="font-semibold text-text text-base leading-snug">{question}</span>
      <svg
    className="
        w-5
        h-5
        text-muted
        shrink-0
        transition-all
        duration-300
        group-open:rotate-180
        group-open:text-accent
    "
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
>
    <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M19 9l-7 7-7-7"
    />
</svg>
      </summary>
      <div
  className="
    px-6
    pb-6
    pt-3
    text-muted
    text-sm
    leading-7
    border-t
    border-border/60
  "
>
        {answer}
      </div>
    </details>
  );
}

interface FaqAccordionProps {
  items: { question: string; answer: string }[];
  initialVisibleCount?: number;
}

export default function FaqAccordion({ items, initialVisibleCount }: FaqAccordionProps) {
  const [visibleCount, setVisibleCount] = useState(initialVisibleCount ?? items.length);
  const visibleItems = items.slice(0, visibleCount);

  return (
    <div className="space-y-2">
      {visibleItems.map((item) => (
        <FaqAccordionItem key={item.question} question={item.question} answer={item.answer} />
      ))}
      {visibleCount < items.length && (
        <button
          type="button"
          onClick={() => setVisibleCount(items.length)}
          className="mt-2 w-full text-center py-3 text-sm font-medium text-accent hover:underline"
        >
          Load more
        </button>
      )}
    </div>
  );
}
