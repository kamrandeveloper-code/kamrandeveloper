import Link from "next/link";
import type { Project } from "@/lib/api";
import ProjectCard from "./ProjectCard";
import CarouselControls from "./CarouselControls";

export default function ProjectsSection({ projects }: { projects: Project[] }) {
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

        {/* Server-rendered cards passed as children into the client carousel */}
        <CarouselControls totalItems={projects.length}>
          {projects.map((project) => (
            <div
              key={project.id}
              className="flex-shrink-0 w-[85%] sm:w-[calc(50%-12px)]"
              style={{ scrollSnapAlign: "start" }}
            >
              <ProjectCard project={project} />
            </div>
          ))}
        </CarouselControls>

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