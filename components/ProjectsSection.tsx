"use client";

import { useRef, useState, useEffect, useCallback } from "react";
import Link from "next/link";
import Image from "next/image";
import type { Project } from "@/lib/api";

export default function ProjectsSection({ projects }: { projects: Project[] }) {
  const trackRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const drag = useRef({ active: false, moved: false, startX: 0, scrollLeft: 0, pointerId: 0 });
  const DRAG_THRESHOLD = 6;

  const VISIBLE = 2;
  const totalStops = projects.length - VISIBLE + 1;

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
    drag.current = { active: true, moved: false, startX: e.clientX, scrollLeft: el.scrollLeft, pointerId: e.pointerId };
  }

  function onPointerMove(e: React.PointerEvent) {
    if (!drag.current.active) return;
    const dx = e.clientX - drag.current.startX;
    const el = trackRef.current!;
    if (!drag.current.moved) {
      if (Math.abs(dx) < DRAG_THRESHOLD) return;
      drag.current.moved = true;
      el.setPointerCapture(drag.current.pointerId);
      el.style.cursor = "grabbing";
    }
    el.scrollLeft = drag.current.scrollLeft - dx;
  }

  function onPointerUp() {
    if (!drag.current.active) return;
    const wasDrag = drag.current.moved;
    drag.current.active = false;
    const el = trackRef.current!;
    el.style.cursor = "grab";
    if (!wasDrag) return;
    const cw = cardWidth();
    if (cw) scrollTo(Math.max(0, Math.min(Math.round(el.scrollLeft / cw), totalStops - 1)));
  }

  return (
    <section className="py-14 ">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 ">

        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6 mb-14">
          <div>
            <p className="text-xs font-bold tracking-[0.2em] uppercase text-accent mb-3">Portfolio</p>
            <h2 className="font-display font-bold text-4xl sm:text-5xl text-text leading-tight">
              What I&apos;ve built
            </h2>
          </div>
          <p className="text-muted text-base max-w-xs leading-relaxed">
            Real systems for real businesses — each one solving a specific operational problem.
          </p>
        </div>

        {/* Carousel */}
        <div
          ref={trackRef}
          onPointerDown={onPointerDown}
          onPointerMove={onPointerMove}
          onPointerUp={onPointerUp}
          onPointerLeave={onPointerUp}
          className="flex gap-6 overflow-x-auto select-none cursor-grab pb-2 "
          style={{
            scrollbarWidth: "none",
            WebkitOverflowScrolling: "touch",
            scrollSnapType: "x mandatory",
          } as React.CSSProperties}
        >
          {projects.map((project) => (
            <div
              key={project.id}
              className="flex-shrink-0 w-[85%] sm:w-[calc(50%-12px)]"
              style={{ scrollSnapAlign: "start" }}
            >
              <ProjectCard project={project} />
            </div>
          ))}
        </div>

        {/* Dots + arrows */}
        <div className="flex items-center justify-center gap-4 mt-8 mb-10 ">
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

        <div className="text-center">
          <Link
            href="/projects"
            className="inline-flex items-center gap-2 px-6 py-3 bg-accent hover:bg-[var(--color-accent-hover)] text-white font-semibold text-sm rounded-xl transition-all duration-200 shadow-lg shadow-accent/20"
          >
            View all projects
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
}

/* ── Card ────────────────────────────────────── */
function ProjectCard({ project }: { project: Project }) {
  return (
    <Link
      href={`/projects/${project.slug}`}
      className="relative bg-bg border border-border rounded-2xl overflow-hidden hover:border-accent/40 hover:shadow-xl hover:shadow-accent/5 transition-all duration-300 flex flex-col group aspect-[4/3]"
    >
      {/* Screenshot — 90% of card */}
      <div className="relative flex-[9] overflow-hidden bg-surface">
        <Image
          src={project.image}
          alt={project.title}
          fill
          className="object-cover object-top"
          sizes="(max-width: 640px) 85vw, 50vw"
        />
      </div>

      {/* Title — remaining 10% */}
      <div className="flex-[1] flex items-center px-5">
        <h3 className="font-display font-bold text-text text-base group-hover:text-accent transition-colors duration-200 leading-snug truncate">
          {project.title}
        </h3>
      </div>
    </Link>
  );
}
