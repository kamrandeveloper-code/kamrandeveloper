"use client";

import { useRef, useState, useEffect, useCallback } from "react";

export default function CarouselControls({
  children,
  totalItems,
}: {
  children: React.ReactNode;
  totalItems: number;
}) {
  const trackRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const drag = useRef({ active: false, startX: 0, scrollLeft: 0 });

  const VISIBLE = 2;
  const totalStops = totalItems - VISIBLE + 1;

  const cardWidth = useCallback(() => {
    const el = trackRef.current;
    const card = el?.firstElementChild as HTMLElement | null;
    return card ? card.offsetWidth + 24 : 0;
  }, []);

  function scrollTo(index: number) {
    const el = trackRef.current;
    if (!el) return;
    el.scrollTo({ left: index * cardWidth(), behavior: "smooth" });
    setActiveIndex(Math.max(0, Math.min(index, totalStops - 1)));
  }

  useEffect(() => {
    const el = trackRef.current;
    if (!el) return;
    const onScroll = () => {
      const cw = cardWidth();
      if (!cw) return;
      setActiveIndex(Math.max(0, Math.min(Math.round(el.scrollLeft / cw), totalStops - 1)));
    };
    el.addEventListener("scroll", onScroll, { passive: true });
    return () => el.removeEventListener("scroll", onScroll);
  }, [cardWidth, totalStops]);

  function onPointerDown(e: React.PointerEvent) {
    if (e.pointerType !== "mouse") return;
    const el = trackRef.current!;
    drag.current = { active: true, startX: e.clientX, scrollLeft: el.scrollLeft };
    el.setPointerCapture(e.pointerId);
    el.style.cursor = "grabbing";
  }

  function onPointerMove(e: React.PointerEvent) {
    if (!drag.current.active) return;
    trackRef.current!.scrollLeft = drag.current.scrollLeft - (e.clientX - drag.current.startX);
  }

  function onPointerUp() {
    if (!drag.current.active) return;
    drag.current.active = false;
    const el = trackRef.current!;
    el.style.cursor = "grab";
    const cw = cardWidth();
    if (cw) scrollTo(Math.max(0, Math.min(Math.round(el.scrollLeft / cw), totalStops - 1)));
  }

  return (
    <>
      <div
        ref={trackRef}
        onPointerDown={onPointerDown}
        onPointerMove={onPointerMove}
        onPointerUp={onPointerUp}
        onPointerLeave={onPointerUp}
        className="flex gap-6 overflow-x-auto select-none cursor-grab pb-2"
        style={{
          scrollbarWidth: "none",
          WebkitOverflowScrolling: "touch",
          scrollSnapType: "x mandatory",
        } as React.CSSProperties}
      >
        {children}
      </div>

      <div className="flex items-center justify-center gap-4 mt-8 mb-10">
        <button
          onClick={() => scrollTo(activeIndex - 1)}
          disabled={activeIndex === 0}
          aria-label="Previous"
          className="w-8 h-8 rounded-full border border-border text-muted hover:border-accent hover:text-accent disabled:opacity-30 disabled:cursor-not-allowed transition-colors flex items-center justify-center"
        >
          <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>
        <div className="flex items-center gap-1.5">
          {Array.from({ length: totalStops }).map((_, i) => (
            <button
              key={i}
              onClick={() => scrollTo(i)}
              aria-label={`Slide ${i + 1}`}
              className={`rounded-full transition-all duration-200 ${
                i === activeIndex ? "w-5 h-2 bg-accent" : "w-2 h-2 bg-border hover:bg-muted"
              }`}
            />
          ))}
        </div>
        <button
          onClick={() => scrollTo(activeIndex + 1)}
          disabled={activeIndex >= totalStops - 1}
          aria-label="Next"
          className="w-8 h-8 rounded-full border border-border text-muted hover:border-accent hover:text-accent disabled:opacity-30 disabled:cursor-not-allowed transition-colors flex items-center justify-center"
        >
          <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>
    </>
  );
}