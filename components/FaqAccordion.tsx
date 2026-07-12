"use client";

import { useState } from "react";

interface FaqAccordionItemProps {
  question: string;
  answer: string;
}

function FaqAccordionItem({ question, answer }: FaqAccordionItemProps) {
  return (
    <details className="group bg-surface border border-border rounded-xl overflow-hidden">
      <summary className="flex items-center justify-between gap-4 px-5 py-4 cursor-pointer list-none select-none hover:bg-bg/50 transition-colors duration-150">
        <span className="font-medium text-text text-sm">{question}</span>
        <svg
          className="w-4 h-4 text-muted shrink-0 transition-transform duration-200 group-open:rotate-45"
          fill="none" stroke="currentColor" viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
        </svg>
      </summary>
      <div className="px-5 pb-4 pt-1 text-muted text-sm leading-relaxed border-t border-border/60">
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
