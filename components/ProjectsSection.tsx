"use client";

import { useRef, useState, useEffect, useCallback } from "react";
import Link from "next/link";
import { projects, type Project } from "@/data/projects";

export default function ProjectsSection() {
  const trackRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const drag = useRef({ active: false, startX: 0, scrollLeft: 0 });

  const VISIBLE = 2; // cards shown at once on desktop
  const totalStops = projects.length - VISIBLE + 1;

  // card width + gap (gap-6 = 24px)
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

  // keep dot in sync when user drags/swipes freely
  useEffect(() => {
    const el = trackRef.current;
    if (!el) return;
    const onScroll = () => {
      const cw = cardWidth();
      if (!cw) return;
      const i = Math.round(el.scrollLeft / cw);
      setActiveIndex(Math.max(0, Math.min(i, totalStops - 1)));
    };
    el.addEventListener("scroll", onScroll, { passive: true });
    return () => el.removeEventListener("scroll", onScroll);
  }, [cardWidth, totalStops]);

  // mouse-drag handlers (touch is handled by native scroll)
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
    // snap to nearest stop
    const cw = cardWidth();
    if (cw) {
      const i = Math.round(el.scrollLeft / cw);
      scrollTo(Math.max(0, Math.min(i, totalStops - 1)));
    }
  }

  return (
    <section className="py-24 bg-surface">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="text-center mb-16">
          <p className="text-xs font-bold tracking-[0.2em] uppercase text-accent mb-4">Projects</p>
          <h2 className="font-display font-bold text-4xl sm:text-5xl text-text mb-4">
            What I&apos;ve Built
          </h2>
          <p className="text-muted text-lg max-w-xl mx-auto">
            Real business software shipped for real clients.
          </p>
        </div>

        {/* Draggable / swipeable track */}
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
          {projects.map((project) => (
            <div
              key={project.id}
              className="flex-shrink-0 w-[82%] sm:w-[calc(50%-12px)]"
              style={{ scrollSnapAlign: "start" }}
            >
              <ProjectCard project={project} />
            </div>
          ))}
        </div>

        {/* Dots + arrows */}
        <div className="flex items-center justify-center gap-4 mt-8 mb-10">
          <button
            onClick={() => scrollTo(activeIndex - 1)}
            disabled={activeIndex === 0}
            aria-label="Previous"
            className="flex items-center justify-center w-8 h-8 rounded-full border border-border text-muted hover:border-accent hover:text-accent disabled:opacity-30 disabled:cursor-not-allowed transition-colors duration-150"
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
                aria-label={`Go to slide ${i + 1}`}
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
            className="flex items-center justify-center w-8 h-8 rounded-full border border-border text-muted hover:border-accent hover:text-accent disabled:opacity-30 disabled:cursor-not-allowed transition-colors duration-150"
          >
            <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>

        <div className="text-center">
          <Link
            href="/projects"
            className="inline-flex items-center gap-2 px-6 py-3 border border-border hover:border-accent text-muted hover:text-accent rounded-xl transition-all duration-200 text-sm font-medium"
          >
            View All Projects
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>

      </div>
    </section>
  );
}

// ─── Copy Button ─────────────────────────────────────────────────────────────

function CopyButton({ text }: { text: string }) {
  const [copied, setCopied] = useState(false);

  function handleCopy(e: React.MouseEvent) {
    e.preventDefault();
    e.stopPropagation();
    navigator.clipboard.writeText(text).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  }

  return (
    <button
      onClick={handleCopy}
      title={copied ? "Copied!" : "Copy"}
      className="flex-shrink-0 p-1 rounded-md text-muted hover:text-accent hover:bg-accent/10 transition-colors duration-150"
    >
      {copied ? (
        <svg className="w-3.5 h-3.5 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
        </svg>
      ) : (
        <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
            d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
        </svg>
      )}
    </button>
  );
}

// ─── Demo Overlay ─────────────────────────────────────────────────────────────

function DemoOverlay({ demo }: { demo: NonNullable<Project["demo"]> }) {
  return (
    <div className="absolute inset-0 bg-bg/95 backdrop-blur-[2px] opacity-0 group-hover:opacity-100 transition-opacity duration-200 rounded-2xl flex items-center justify-center p-6 z-20">
      <div className="w-full max-w-[264px]">
        <p className="font-display font-bold text-text text-sm text-center mb-4">
          Try the Demo
        </p>

        <div className="mb-3">
          <label className="block text-[11px] font-semibold text-muted uppercase tracking-wider mb-1">Email</label>
          <div className="flex items-center gap-1.5 bg-surface border border-border rounded-lg px-3 py-2">
            <span className="text-xs text-text flex-1 font-mono truncate">{demo.email}</span>
            <CopyButton text={demo.email} />
          </div>
        </div>

        <div className="mb-5">
          <label className="block text-[11px] font-semibold text-muted uppercase tracking-wider mb-1">Password</label>
          <div className="flex items-center gap-1.5 bg-surface border border-border rounded-lg px-3 py-2">
            <span className="text-xs text-text flex-1 font-mono">{demo.password}</span>
            <CopyButton text={demo.password} />
          </div>
        </div>

        <a
          href={demo.url}
          target="_blank"
          rel="noopener noreferrer"
          onClick={(e) => e.stopPropagation()}
          className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 bg-accent hover:bg-[var(--color-accent-hover)] text-white text-sm font-semibold rounded-xl transition-colors duration-200"
        >
          Start Demo
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
              d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
          </svg>
        </a>
      </div>
    </div>
  );
}

// ─── Card ─────────────────────────────────────────────────────────────────────

function ProjectCard({ project }: { project: Project }) {
  return (
    <div className="relative bg-bg border border-border rounded-2xl overflow-hidden hover:border-accent/40 transition-all duration-300 flex flex-col group h-full">
      <div className="h-52 bg-gradient-to-br from-accent/10 via-surface to-teal/10 flex items-center justify-center relative overflow-hidden flex-shrink-0">
        <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-teal/5 group-hover:opacity-70 transition-opacity duration-300" />
        <span className="relative text-xs font-bold tracking-widest uppercase text-accent/50 bg-surface/80 px-3 py-1.5 rounded-full border border-accent/20">
          {project.industry}
        </span>
      </div>

      <div className="p-6 flex flex-col flex-1">
        <span className="text-xs font-medium text-teal uppercase tracking-widest mb-2 block">
          {project.category}
        </span>
        <h3 className="font-display font-bold text-text text-xl mb-3 group-hover:text-accent transition-colors duration-200">
          {project.title}
        </h3>
        <p className="text-muted text-sm leading-relaxed mb-4 flex-1">
          {project.description}
        </p>
        <TechTags tech={project.tech} />
        <Link
          href={`/projects/${project.slug}`}
          className="inline-flex items-center gap-2 text-accent hover:text-[var(--color-accent-hover)] font-medium text-sm transition-colors duration-200 mt-6"
        >
          View Project
          <svg className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </Link>
      </div>

      {project.demo && <DemoOverlay demo={project.demo} />}
    </div>
  );
}

function TechTags({ tech }: { tech: string[] }) {
  return (
    <div className="flex flex-wrap gap-2">
      {tech.slice(0, 3).map((t) => (
        <span key={t} className="px-2.5 py-1 bg-surface border border-border rounded-md text-muted text-xs">
          {t}
        </span>
      ))}
      {tech.length > 3 && (
        <span className="px-2.5 py-1 bg-surface border border-border rounded-md text-muted text-xs">
          +{tech.length - 3} more
        </span>
      )}
    </div>
  );
}
