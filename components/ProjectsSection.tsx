"use client";

import { useRef, useState, useEffect, useCallback } from "react";
import Link from "next/link";
import Image from "next/image";
import type { Project } from "@/lib/api";

const industryColors: Record<string, string> = {
  Healthcare: "#10B981",
  "E-Commerce": "#F59E0B",
  Retail: "#3B82F6",
  Education: "#8B5CF6",
};

export default function ProjectsSection({ projects }: { projects: Project[] }) {
  const trackRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const drag = useRef({ active: false, startX: 0, scrollLeft: 0 });

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
    <section className="py-24 bg-surface">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

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
              className="flex-shrink-0 w-[85%] sm:w-[calc(50%-12px)]"
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

/* ── Copy Button ─────────────────────────────── */
function CopyButton({ text }: { text: string }) {
  const [copied, setCopied] = useState(false);
  function handleCopy(e: React.MouseEvent) {
    e.preventDefault(); e.stopPropagation();
    navigator.clipboard.writeText(text).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  }
  return (
    <button onClick={handleCopy} title={copied ? "Copied!" : "Copy"} className="shrink-0 p-1 rounded text-muted hover:text-accent transition-colors">
      {copied
        ? <svg className="w-3.5 h-3.5 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" /></svg>
        : <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" /></svg>
      }
    </button>
  );
}

/* ── Demo Overlay ────────────────────────────── */
function DemoOverlay({ demo, onClose }: { demo: NonNullable<Project["demo"]>; onClose: () => void }) {
  return (
    <div className="absolute inset-0 bg-bg/96 backdrop-blur-[2px] rounded-2xl flex items-center justify-center p-6 z-20">
      <div className="w-full max-w-[264px]">
        <div className="flex items-center justify-between mb-4">
          <p className="font-display font-bold text-text text-sm">Try the Demo</p>
          <button
            onClick={(e) => { e.preventDefault(); e.stopPropagation(); onClose(); }}
            className="w-6 h-6 rounded-full bg-surface border border-border flex items-center justify-center text-muted hover:text-text transition-colors touch-manipulation"
            aria-label="Close"
          >
            <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
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
          className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 bg-accent hover:bg-[var(--color-accent-hover)] text-white text-sm font-semibold rounded-xl transition-colors"
        >
          Launch Demo
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
          </svg>
        </a>
      </div>
    </div>
  );
}

/* ── Card ────────────────────────────────────── */
function ProjectCard({ project }: { project: Project }) {
  const color = industryColors[project.industry] ?? "var(--color-accent)";
  const [demoOpen, setDemoOpen] = useState(false);

  return (
    <Link
      href={`/projects/${project.slug}`}
      className="relative bg-bg border border-border rounded-2xl overflow-hidden hover:border-accent/40 hover:shadow-xl hover:shadow-accent/5 transition-all duration-300 flex flex-col group h-full"
    >
      {/* Screenshot area */}
      <div className="relative h-44 flex-shrink-0 overflow-hidden bg-surface">
        <Image
          src={project.image}
          alt={project.title}
          fill
          className="object-cover object-top"
          sizes="(max-width: 640px) 85vw, 50vw"
        />
        <div className="absolute top-3 left-3 z-10">
          <span
            className="inline-flex items-center gap-1 text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full backdrop-blur-sm"
            style={{ color, backgroundColor: `${color}30`, border: `1px solid ${color}60` }}
          >
            {project.industry}
          </span>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-0.5" style={{ backgroundColor: color }} />
      </div>

      <div className="p-6 flex flex-col flex-1">
        <span className="text-[10px] font-bold tracking-widest uppercase text-muted mb-2 block">
          {project.category}
        </span>
        <h3 className="font-display font-bold text-text text-lg mb-2 group-hover:text-accent transition-colors duration-200 leading-snug">
          {project.title}
        </h3>
        <p className="text-muted text-sm leading-relaxed mb-5 flex-1 line-clamp-2">
          {project.description}
        </p>

        {/* Tech tags */}
        <div className="flex flex-wrap gap-1.5 mb-5">
          {project.tech.slice(0, 3).map((t) => (
            <span key={t} className="px-2 py-1 bg-surface border border-border rounded-md text-muted text-[11px] font-medium">
              {t}
            </span>
          ))}
          {project.tech.length > 3 && (
            <span className="px-2 py-1 bg-surface border border-border rounded-md text-muted text-[11px] font-medium">
              +{project.tech.length - 3}
            </span>
          )}
        </div>

        <div className="flex items-center justify-between gap-3">
          <span className="inline-flex items-center gap-1.5 text-accent font-semibold text-sm transition-all duration-200 group-hover:gap-2.5">
            View project
            <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </span>
          {project.demo && (
            <button
              onClick={(e) => { e.preventDefault(); e.stopPropagation(); setDemoOpen(true); }}
              className="inline-flex items-center gap-1.5 text-[11px] font-bold uppercase tracking-wider text-muted hover:text-accent border border-border hover:border-accent/50 rounded-full px-2.5 py-1 transition-all duration-200 touch-manipulation"
            >
              <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              Try Demo
            </button>
          )}
        </div>
      </div>

      {project.demo && demoOpen && (
        <DemoOverlay demo={project.demo} onClose={() => setDemoOpen(false)} />
      )}
    </Link>
  );
}
