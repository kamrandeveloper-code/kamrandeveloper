import { notFound } from "next/navigation";
import Link from "next/link";
import type { Metadata } from "next";
import { projects } from "@/data/projects";
import { projectSchema, breadcrumbSchema } from "@/lib/schema";
import { BASE_URL } from "@/lib/seo";

interface Props {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  if (!project) return {};
  return {
    title: project.title,
    description: project.description,
    openGraph: {
      title: `${project.title} | Kamran`,
      description: project.description,
    },
  };
}

export default async function ProjectPage({ params }: Props) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  if (!project) notFound();

  const schema = projectSchema({
    title: project.title,
    description: project.description,
    technologies: project.tech,
  });

  const breadcrumb = breadcrumbSchema([
    { name: "Home", url: BASE_URL },
    { name: "Projects", url: `${BASE_URL}/projects` },
    { name: project.title, url: `${BASE_URL}/projects/${project.slug}` },
  ]);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }}
      />
      <main className="min-h-screen bg-bg pt-24 pb-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 text-sm text-muted mb-10">
            <Link href="/" className="hover:text-accent transition-colors">Home</Link>
            <span>/</span>
            <Link href="/projects" className="hover:text-accent transition-colors">Projects</Link>
            <span>/</span>
            <span className="text-text">{project.title}</span>
          </nav>

          {/* Header */}
          <div className="mb-10">
            <div className="flex flex-wrap items-center gap-3 mb-4">
              <span className="text-xs font-bold tracking-widest uppercase text-teal bg-teal/10 px-3 py-1 rounded-full">
                {project.industry}
              </span>
              <span className="text-xs font-medium text-muted bg-surface border border-border px-3 py-1 rounded-full">
                {project.category}
              </span>
            </div>
            <h1 className="font-display font-bold text-4xl sm:text-5xl text-text mb-5 leading-tight">
              {project.title}
            </h1>
            <p className="text-muted text-lg leading-relaxed">{project.longDescription}</p>
          </div>

          {/* Problem / Solution / Result */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-10">
            <div className="bg-surface border border-border rounded-xl p-5">
              <h2 className="font-semibold text-xs uppercase tracking-widest text-muted mb-2">
                Business Problem
              </h2>
              <p className="text-text text-sm leading-relaxed">{project.problem}</p>
            </div>
            <div className="bg-surface border border-border rounded-xl p-5">
              <h2 className="font-semibold text-xs uppercase tracking-widest text-muted mb-2">
                Solution
              </h2>
              <p className="text-text text-sm leading-relaxed">{project.solution}</p>
            </div>
            <div className="bg-accent/10 border border-accent/20 rounded-xl p-5">
              <h2 className="font-semibold text-xs uppercase tracking-widest text-accent mb-2">
                Result
              </h2>
              <p className="text-text text-sm leading-relaxed">{project.result}</p>
            </div>
          </div>

          {/* Key Features */}
          <div className="bg-surface border border-border rounded-2xl p-6 mb-8">
            <h2 className="font-display font-bold text-xl text-text mb-4">Key Features</h2>
            <ul className="space-y-2">
              {project.features.map((feature) => (
                <li key={feature} className="flex items-start gap-3 text-sm text-muted">
                  <span className="text-accent mt-0.5 flex-shrink-0">→</span>
                  {feature}
                </li>
              ))}
            </ul>
          </div>

          {/* Architecture */}
          {project.architecture && (
            <div className="bg-surface border border-border rounded-2xl p-6 mb-8">
              <h2 className="font-display font-bold text-xl text-text mb-3">Architecture</h2>
              <p className="text-muted text-sm leading-relaxed">{project.architecture}</p>
            </div>
          )}

          {/* Tech Stack */}
          <div className="bg-surface border border-border rounded-2xl p-6 mb-10">
            <h2 className="font-semibold text-xs uppercase tracking-widest text-muted mb-4">
              Technologies Used
            </h2>
            <div className="flex flex-wrap gap-2">
              {project.tech.map((tech) => (
                <span key={tech} className="px-3 py-1.5 bg-bg border border-border rounded-lg text-muted text-sm">
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Links */}
          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              href={`/case-studies/${project.slug}`}
              className="inline-flex items-center gap-2 px-6 py-3 bg-accent hover:bg-[var(--color-accent-hover)] text-white font-semibold rounded-xl transition-colors duration-200"
            >
              Read Full Case Study
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-6 py-3 border border-border hover:border-accent text-muted hover:text-accent rounded-xl transition-all duration-200 text-sm font-medium"
            >
              Build something similar
            </Link>
          </div>

        </div>
      </main>
    </>
  );
}
