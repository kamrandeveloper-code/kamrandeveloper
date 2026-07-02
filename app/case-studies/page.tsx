import type { Metadata } from "next";
import Link from "next/link";
import { projects } from "@/data/projects";
import { baseMetadata, BASE_URL, buildAlternates } from "@/lib/seo";
import { breadcrumbSchema } from "@/lib/schema";

export const metadata: Metadata = baseMetadata({
  title: "Case Studies",
  description:
    "Detailed case studies of custom software projects — dental clinic management, POS systems, school management, and multi-vendor e-commerce. Business problem, solution, architecture, and results.",
  alternates: buildAlternates("/case-studies"),
  openGraph: {
    title: "Case Studies — Kamran Custom Software Developer",
    description:
      "In-depth case studies of custom business software. How real problems were solved with purpose-built software.",
    url: `${BASE_URL}/case-studies`,
  },
});

export default function CaseStudiesPage() {
  const breadcrumb = breadcrumbSchema([
    { name: "Home", url: BASE_URL },
    { name: "Case Studies", url: `${BASE_URL}/case-studies` },
  ]);

  return (
    <main className="min-h-screen bg-bg pt-24 pb-20">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="max-w-2xl mb-16">
          <p className="text-xs font-bold tracking-[0.2em] uppercase text-accent mb-4">Case Studies</p>
          <h1 className="font-display font-bold text-4xl sm:text-5xl text-text leading-tight mb-5">
            How I solve{" "}
            <span className="text-accent">real business problems</span>
          </h1>
          <p className="text-muted text-lg leading-relaxed">
            Each case study walks through the business problem, the requirements, the solution
            architecture, key technical decisions, and the outcome. Real projects, real results.
          </p>
        </div>

        {/* Case Studies List */}
        <div className="flex flex-col gap-6">
          {projects.map((project) => (
            <Link
              key={project.slug}
              href={`/case-studies/${project.slug}`}
              className="group block bg-surface border border-border rounded-2xl p-6 hover:border-accent/30 hover:shadow-lg hover:shadow-accent/5 transition-all duration-300"
            >
              <div className="flex flex-col lg:flex-row lg:items-start gap-6">

                <div className="flex-1">
                  <div className="flex flex-wrap items-center gap-3 mb-4">
                    <span className="text-xs font-bold tracking-widest uppercase text-teal bg-teal/10 px-3 py-1 rounded-full">
                      {project.industry}
                    </span>
                    <span className="text-xs font-medium text-muted">{project.category}</span>
                  </div>
                  <h2 className="font-display font-bold text-text text-2xl mb-3 group-hover:text-accent transition-colors duration-200 leading-snug">
                    {project.title}
                  </h2>
                  <p className="text-muted text-sm leading-relaxed mb-4">{project.description}</p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-5">
                    <div className="bg-bg border border-border rounded-xl p-3">
                      <p className="text-xs font-semibold text-muted uppercase tracking-wide mb-1">Problem</p>
                      <p className="text-text text-sm">{project.problem}</p>
                    </div>
                    <div className="bg-accent/5 border border-accent/20 rounded-xl p-3">
                      <p className="text-xs font-semibold text-accent uppercase tracking-wide mb-1">Result</p>
                      <p className="text-text text-sm">{project.result}</p>
                    </div>
                  </div>
                  <div className="flex flex-wrap gap-2 mb-5">
                    {project.tech.map((tech) => (
                      <span key={tech} className="text-[10px] font-semibold uppercase px-2 py-0.5 bg-bg border border-border rounded-full text-muted/70">
                        {tech}
                      </span>
                    ))}
                  </div>
                  <span className="text-accent font-medium text-sm inline-flex items-center gap-1">
                    Read full case study
                    <svg className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </span>
                </div>

              </div>
            </Link>
          ))}
        </div>

      </div>
    </main>
  );
}
