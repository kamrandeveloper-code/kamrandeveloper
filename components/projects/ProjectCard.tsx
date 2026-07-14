import Link from "next/link";
import Image from "next/image";
import type { Project } from "@/lib/api";
import DemoPopup from "./DemoPopup";

const industryColors: Record<string, string> = {
  Healthcare: "#10B981",
  "E-Commerce": "#F59E0B",
  Retail: "#3B82F6",
  Education: "#8B5CF6",
};

export default function ProjectCard({ project }: { project: Project }) {
  const color = industryColors[project.industry] ?? "var(--color-accent)";

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
          {project.demo && <DemoPopup demo={project.demo} />}
        </div>
      </div>
    </Link>
  );
}