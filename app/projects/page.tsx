import type { Metadata } from "next";
import Link from "next/link";
import { projects } from "@/data/projects";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "Custom business software projects — dental clinic management, POS systems, school management, multi-vendor marketplaces, and retail inventory systems.",
  openGraph: {
    title: "Projects — Kamran Custom Software Developer",
    description:
      "Business software built for real clients. Management systems, POS, school management, and e-commerce platforms.",
  },
};

const industries = Array.from(new Set(projects.map((p) => p.industry)));

export default function ProjectsPage() {
  return (
    <main className="min-h-screen bg-bg pt-24 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="max-w-2xl mb-16">
          <p className="text-xs font-bold tracking-[0.2em] uppercase text-accent mb-4">Projects</p>
          <h1 className="font-display font-bold text-4xl sm:text-5xl text-text leading-tight mb-5">
            Business software{" "}
            <span className="text-accent">built for real clients</span>
          </h1>
          <p className="text-muted text-lg leading-relaxed">
            Every project here was built to solve a specific business problem. Click any project
            to see the full details — the problem, the solution, the architecture, and the outcome.
          </p>
        </div>

        {/* Industry tags */}
        <div className="flex flex-wrap gap-2 mb-10">
          <span className="text-xs font-semibold text-muted uppercase tracking-wide self-center mr-2">Industries:</span>
          {industries.map((industry) => (
            <span
              key={industry}
              className="text-xs font-medium px-3 py-1.5 bg-surface border border-border rounded-full text-muted"
            >
              {industry}
            </span>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {projects.map((project) => (
            <Link
              key={project.slug}
              href={`/projects/${project.slug}`}
              className="group block bg-surface border border-border rounded-2xl overflow-hidden hover:border-accent/30 hover:shadow-lg hover:shadow-accent/5 transition-all duration-300"
            >
              {/* Image placeholder */}
              <div className="h-40 bg-gradient-to-br from-accent/10 via-bg to-teal/10 flex items-center justify-center relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-teal/5 group-hover:opacity-70 transition-opacity duration-300" />
                <span className="relative text-xs font-bold tracking-widest uppercase text-accent/40 bg-surface/80 px-3 py-1.5 rounded-full border border-accent/20">
                  {project.industry}
                </span>
              </div>

              <div className="p-6">
                <span className="text-xs font-bold tracking-widest uppercase text-teal mb-2 block">
                  {project.category}
                </span>
                <h2 className="font-display font-bold text-text text-xl mb-3 group-hover:text-accent transition-colors duration-200 leading-snug">
                  {project.title}
                </h2>
                <p className="text-muted text-sm leading-relaxed mb-4">
                  {project.description}
                </p>

                <div className="space-y-2 mb-5">
                  <div>
                    <span className="text-xs font-semibold text-muted uppercase tracking-wide">Problem: </span>
                    <span className="text-muted text-xs">{project.problem}</span>
                  </div>
                  <div>
                    <span className="text-xs font-semibold text-accent uppercase tracking-wide">Result: </span>
                    <span className="text-muted text-xs">{project.result}</span>
                  </div>
                </div>

                <div className="flex flex-wrap gap-1.5 mb-5">
                  {project.tech.slice(0, 4).map((tech) => (
                    <span key={tech} className="text-[10px] font-semibold uppercase px-2 py-0.5 bg-bg border border-border rounded-full text-muted/70">
                      {tech}
                    </span>
                  ))}
                </div>

                <span className="text-accent font-medium text-sm inline-flex items-center gap-1">
                  View project details
                  <svg className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </span>
              </div>
            </Link>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center bg-surface border border-border rounded-2xl p-8">
          <h2 className="font-display font-bold text-2xl text-text mb-2">
            Have a similar project in mind?
          </h2>
          <p className="text-muted mb-6">Let&apos;s discuss what you need.</p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-6 py-3 bg-accent hover:bg-[var(--color-accent-hover)] text-white font-semibold rounded-xl transition-colors duration-200"
          >
            Get in touch
          </Link>
        </div>

      </div>
    </main>
  );
}
