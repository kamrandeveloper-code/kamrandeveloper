import Link from "next/link";
import { projects } from "@/data/projects";

export default function CaseStudiesTeaser() {
  const featured = projects.filter((p) => p.featured).slice(0, 3);

  return (
    <section className="py-24 bg-bg relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-12">
          <div>
            <p className="text-xs font-bold tracking-[0.2em] uppercase text-accent mb-4">
              Case Studies
            </p>
            <h2 className="font-display font-bold text-4xl sm:text-5xl text-text leading-tight">
              How I solve{" "}
              <span className="text-accent">real business problems</span>
            </h2>
          </div>
          <Link
            href="/case-studies"
            className="inline-flex items-center gap-2 px-5 py-2.5 border border-border hover:border-accent text-muted hover:text-accent rounded-xl transition-all duration-200 text-sm font-medium flex-shrink-0"
          >
            All case studies
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {featured.map((project) => (
            <Link
              key={project.slug}
              href={`/case-studies/${project.slug}`}
              className="group block bg-surface border border-border rounded-2xl p-6 hover:border-accent/30 hover:shadow-lg hover:shadow-accent/5 transition-all duration-300"
            >
              <span className="text-xs font-bold tracking-widest uppercase text-teal mb-3 block">
                {project.industry}
              </span>
              <h3 className="font-display font-bold text-text text-lg mb-3 group-hover:text-accent transition-colors duration-200 leading-snug">
                {project.title}
              </h3>
              <div className="space-y-2 mb-4">
                <div>
                  <span className="text-xs font-semibold text-muted uppercase tracking-wide">Problem: </span>
                  <span className="text-muted text-sm">{project.problem}</span>
                </div>
                <div>
                  <span className="text-xs font-semibold text-accent uppercase tracking-wide">Result: </span>
                  <span className="text-muted text-sm">{project.result}</span>
                </div>
              </div>
              <span className="text-accent font-medium text-sm inline-flex items-center gap-1">
                Read case study
                <svg className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
