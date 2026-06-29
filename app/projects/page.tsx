import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { projects } from "@/data/projects";
import { baseMetadata, BASE_URL } from "@/lib/seo";

export const metadata: Metadata = baseMetadata({
  title: "Projects",
  description:
    "Custom business software projects — dental clinic management, POS systems, school management, multi-vendor marketplaces, and retail inventory systems.",
  alternates: { canonical: `${BASE_URL}/projects` },
  openGraph: {
    title: "Projects — Kamran Custom Software Developer",
    description:
      "Business software built for real clients. Management systems, POS, school management, and e-commerce platforms.",
    url: `${BASE_URL}/projects`,
  },
});

const industryColors: Record<string, string> = {
  Healthcare: "#10B981",
  "E-Commerce": "#F59E0B",
  Retail: "#3B82F6",
  Education: "#8B5CF6",
};

export default function ProjectsPage() {
  const industries = Array.from(new Set(projects.map((p) => p.industry)));

  return (
    <main className="min-h-screen bg-bg pt-28 pb-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* ── Hero: text left, illustration right ── */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center mb-20">
          <div>
            <p className="text-xs font-bold tracking-[0.2em] uppercase text-accent mb-4">Portfolio</p>
            <h1 className="font-display font-bold text-4xl sm:text-5xl lg:text-6xl text-text leading-tight mb-5">
              Software built for{" "}
              <span className="text-accent">real businesses</span>
            </h1>
            <p className="text-muted text-base sm:text-lg leading-relaxed mb-8 max-w-xl">
              Every project here solved a specific operational problem — not a demo, not a side project.
              Real clients, real workflows, real results.
            </p>

            {/* Stats strip */}
            <div className="flex flex-wrap gap-6">
              {[
                { value: `${projects.length}`, label: "Projects shipped" },
                { value: `${industries.length}`, label: "Industries" },
                { value: `${projects.filter((p) => p.demo).length}`, label: "Live demos" },
              ].map((stat) => (
                <div key={stat.label}>
                  <p className="font-display font-bold text-2xl text-text">{stat.value}</p>
                  <p className="text-muted text-xs uppercase tracking-wider mt-0.5">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="flex items-center justify-center lg:justify-end">
            <ProjectsIllustration />
          </div>
        </div>

        {/* ── Industry filter strip ── */}
        <div className="flex flex-wrap items-center gap-2 mb-10">
          <span className="text-xs font-semibold text-muted uppercase tracking-wider mr-1">Industry:</span>
          {industries.map((industry) => {
            const color = industryColors[industry] ?? "var(--color-accent)";
            return (
              <span
                key={industry}
                className="inline-flex items-center gap-1.5 text-xs font-medium px-3 py-1.5 rounded-full border"
                style={{ borderColor: `${color}40`, color, backgroundColor: `${color}10` }}
              >
                <span className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: color }} />
                {industry}
              </span>
            );
          })}
        </div>

        {/* ── Projects Grid ── */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
          {projects.map((project) => {
            const color = industryColors[project.industry] ?? "var(--color-accent)";
            return (
              <Link
                key={project.slug}
                href={`/projects/${project.slug}`}
                className="group block bg-surface border border-border rounded-2xl overflow-hidden hover:border-accent/30 hover:shadow-xl hover:shadow-accent/5 transition-all duration-300"
              >
                {/* Screenshot area */}
                <div className="relative h-48 overflow-hidden bg-surface">
                  <Image
                    src="/profile.png"
                    alt={project.title}
                    fill
                    className="object-cover object-top"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                  <div className="absolute top-3 left-4 z-10">
                    <span
                      className="inline-flex items-center gap-1 text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full backdrop-blur-sm"
                      style={{ color, backgroundColor: `${color}30`, border: `1px solid ${color}60` }}
                    >
                      {project.industry}
                    </span>
                  </div>
                  {project.demo && (
                    <span className="absolute top-3 right-4 z-10 text-[10px] font-bold uppercase tracking-wider text-muted border border-border rounded-full px-2 py-0.5 bg-surface/80 backdrop-blur-sm">
                      Demo available
                    </span>
                  )}
                  <div className="absolute bottom-0 left-0 right-0 h-0.5" style={{ backgroundColor: color }} />
                </div>

                <div className="p-6">
                  <span className="text-[10px] font-bold tracking-widest uppercase text-muted mb-2 block">
                    {project.category}
                  </span>
                  <h2 className="font-display font-bold text-text text-xl mb-2 group-hover:text-accent transition-colors duration-200 leading-snug">
                    {project.title}
                  </h2>
                  <p className="text-muted text-sm leading-relaxed mb-4 line-clamp-2">
                    {project.description}
                  </p>

                  {/* Result highlight */}
                  <div className="flex items-start gap-2 mb-5 p-3 rounded-xl bg-bg border border-border/60">
                    <svg className="w-4 h-4 text-accent shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                    </svg>
                    <p className="text-muted text-xs leading-relaxed">{project.result}</p>
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="flex flex-wrap gap-1.5">
                      {project.tech.slice(0, 3).map((t) => (
                        <span key={t} className="text-[10px] font-medium px-2 py-0.5 bg-bg border border-border rounded-full text-muted">
                          {t}
                        </span>
                      ))}
                      {project.tech.length > 3 && (
                        <span className="text-[10px] font-medium px-2 py-0.5 bg-bg border border-border rounded-full text-muted">
                          +{project.tech.length - 3}
                        </span>
                      )}
                    </div>
                    <span className="inline-flex items-center gap-1 text-accent font-semibold text-sm group-hover:gap-2 transition-all duration-200 shrink-0 ml-3">
                      Details
                      <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </span>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>

        {/* ── CTA ── */}
        <div className="bg-accent rounded-3xl p-10 sm:p-14 text-center relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_60%_at_50%_50%,rgba(255,255,255,0.07),transparent)]" />
          <div className="relative">
            <h2 className="font-display font-bold text-2xl sm:text-3xl text-white mb-2">
              Have a similar project in mind?
            </h2>
            <p className="text-white/70 text-sm mb-8 max-w-md mx-auto">
              Describe your business problem and I&apos;ll recommend what makes sense to build.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-7 py-3.5 bg-white hover:bg-white/90 text-accent font-semibold rounded-xl transition-all duration-200 shadow-lg shadow-black/10 text-sm"
              >
                Start a conversation
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
              <Link
                href="/services"
                className="inline-flex items-center gap-2 px-7 py-3.5 border border-white/30 hover:border-white/60 text-white rounded-xl transition-all duration-200 text-sm font-medium"
              >
                Browse services
              </Link>
            </div>
          </div>
        </div>

      </div>
    </main>
  );
}

function ProjectsIllustration() {
  return (
    <svg
      viewBox="0 0 420 360"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="w-full max-w-[420px] h-auto"
      aria-hidden="true"
    >
      {/* Background glow */}
      <ellipse cx="210" cy="190" rx="170" ry="130" fill="var(--color-accent)" fillOpacity="0.05" />

      {/* Monitor frame */}
      <rect x="60" y="60" width="300" height="200" rx="14" fill="currentColor" fillOpacity="0.06" />
      <rect x="60" y="60" width="300" height="200" rx="14" stroke="currentColor" strokeOpacity="0.10" strokeWidth="1.5" />

      {/* Screen area */}
      <rect x="68" y="68" width="284" height="184" rx="10" fill="currentColor" fillOpacity="0.04" />

      {/* Browser top bar */}
      <rect x="68" y="68" width="284" height="22" rx="10" fill="currentColor" fillOpacity="0.07" />
      <circle cx="82" cy="79" r="3" fill="currentColor" fillOpacity="0.18" />
      <circle cx="93" cy="79" r="3" fill="currentColor" fillOpacity="0.14" />
      <circle cx="104" cy="79" r="3" fill="currentColor" fillOpacity="0.10" />
      {/* URL bar */}
      <rect x="115" y="73" width="180" height="12" rx="6" fill="currentColor" fillOpacity="0.07" />

      {/* Dashboard inside: sidebar */}
      <rect x="68" y="90" width="52" height="162" fill="currentColor" fillOpacity="0.05" />
      {/* sidebar items */}
      <rect x="76" y="102" width="36" height="6" rx="3" fill="var(--color-accent)" fillOpacity="0.5" />
      <rect x="76" y="116" width="28" height="5" rx="2.5" fill="currentColor" fillOpacity="0.12" />
      <rect x="76" y="129" width="32" height="5" rx="2.5" fill="currentColor" fillOpacity="0.10" />
      <rect x="76" y="142" width="24" height="5" rx="2.5" fill="currentColor" fillOpacity="0.10" />
      <rect x="76" y="155" width="30" height="5" rx="2.5" fill="currentColor" fillOpacity="0.08" />

      {/* Main content area */}
      {/* Stat cards row */}
      <rect x="128" y="96" width="64" height="36" rx="6" fill="currentColor" fillOpacity="0.07" stroke="currentColor" strokeOpacity="0.08" strokeWidth="1" />
      <rect x="200" y="96" width="64" height="36" rx="6" fill="var(--color-accent)" fillOpacity="0.08" stroke="var(--color-accent)" strokeOpacity="0.15" strokeWidth="1" />
      <rect x="272" y="96" width="64" height="36" rx="6" fill="currentColor" fillOpacity="0.07" stroke="currentColor" strokeOpacity="0.08" strokeWidth="1" />
      {/* Stat values */}
      <rect x="134" y="104" width="24" height="8" rx="3" fill="currentColor" fillOpacity="0.2" />
      <rect x="134" y="116" width="40" height="4" rx="2" fill="currentColor" fillOpacity="0.10" />
      <rect x="206" y="104" width="24" height="8" rx="3" fill="var(--color-accent)" fillOpacity="0.4" />
      <rect x="206" y="116" width="40" height="4" rx="2" fill="currentColor" fillOpacity="0.10" />
      <rect x="278" y="104" width="24" height="8" rx="3" fill="currentColor" fillOpacity="0.2" />
      <rect x="278" y="116" width="40" height="4" rx="2" fill="currentColor" fillOpacity="0.10" />

      {/* Bar chart */}
      <rect x="128" y="143" width="208" height="70" rx="8" fill="currentColor" fillOpacity="0.05" stroke="currentColor" strokeOpacity="0.07" strokeWidth="1" />
      {/* Chart bars */}
      <rect x="140" y="185" width="18" height="20" rx="3" fill="currentColor" fillOpacity="0.12" />
      <rect x="164" y="172" width="18" height="33" rx="3" fill="var(--color-accent)" fillOpacity="0.35" />
      <rect x="188" y="179" width="18" height="26" rx="3" fill="currentColor" fillOpacity="0.12" />
      <rect x="212" y="165" width="18" height="40" rx="3" fill="var(--color-accent)" fillOpacity="0.5" />
      <rect x="236" y="175" width="18" height="30" rx="3" fill="currentColor" fillOpacity="0.12" />
      <rect x="260" y="168" width="18" height="37" rx="3" fill="var(--color-accent)" fillOpacity="0.3" />
      <rect x="284" y="180" width="18" height="25" rx="3" fill="currentColor" fillOpacity="0.12" />
      {/* X axis */}
      <line x1="136" y1="206" x2="312" y2="206" stroke="currentColor" strokeOpacity="0.10" strokeWidth="1" />

      {/* Monitor stand */}
      <rect x="192" y="260" width="36" height="14" rx="4" fill="currentColor" fillOpacity="0.08" />
      <rect x="172" y="272" width="76" height="8" rx="4" fill="currentColor" fillOpacity="0.06" />

      {/* Floating card — top right */}
      <rect x="330" y="48" width="80" height="52" rx="10" fill="var(--color-surface)" stroke="var(--color-accent)" strokeOpacity="0.25" strokeWidth="1.5" />
      <rect x="338" y="58" width="24" height="7" rx="3.5" fill="var(--color-accent)" fillOpacity="0.5" />
      <rect x="338" y="70" width="56" height="4" rx="2" fill="currentColor" fillOpacity="0.14" />
      <rect x="338" y="80" width="44" height="4" rx="2" fill="currentColor" fillOpacity="0.10" />

      {/* Floating card — bottom left */}
      <rect x="10" y="248" width="88" height="56" rx="10" fill="var(--color-surface)" stroke="currentColor" strokeOpacity="0.10" strokeWidth="1.5" />
      <rect x="18" y="258" width="32" height="6" rx="3" fill="currentColor" fillOpacity="0.15" />
      <rect x="18" y="272" width="64" height="4" rx="2" fill="currentColor" fillOpacity="0.10" />
      <rect x="18" y="283" width="48" height="4" rx="2" fill="currentColor" fillOpacity="0.08" />
      <rect x="18" y="294" width="54" height="4" rx="2" fill="currentColor" fillOpacity="0.08" />

      {/* Floating dots */}
      <circle cx="356" cy="122" r="5" fill="var(--color-accent)" fillOpacity="0.4" />
      <circle cx="370" cy="134" r="3" fill="var(--color-accent)" fillOpacity="0.25" />
      <circle cx="344" cy="132" r="2.5" fill="var(--color-accent)" fillOpacity="0.18" />
      <circle cx="40" cy="160" r="3.5" fill="currentColor" fillOpacity="0.08" />
      <circle cx="52" cy="174" r="2.5" fill="currentColor" fillOpacity="0.06" />

      {/* Sparkle — top left */}
      <path d="M24 80 L26 74 L28 80 L34 82 L28 84 L26 90 L24 84 L18 82 Z" fill="var(--color-accent)" fillOpacity="0.3" />
      {/* Sparkle — bottom right */}
      <path d="M396 268 L397.5 263 L399 268 L404 269.5 L399 271 L397.5 276 L396 271 L391 269.5 Z" fill="currentColor" fillOpacity="0.12" />
    </svg>
  );
}
