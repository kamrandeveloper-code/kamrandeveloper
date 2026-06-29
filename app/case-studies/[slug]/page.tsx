import { notFound } from "next/navigation";
import Link from "next/link";
import type { Metadata } from "next";
import { projects } from "@/data/projects";
import { articleSchema, breadcrumbSchema } from "@/lib/schema";
import { BASE_URL, baseMetadata } from "@/lib/seo";

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
  return baseMetadata({
    title: `${project.title} — Case Study`,
    description: `How ${project.problem} was solved with custom software. ${project.result}`,
    alternates: { canonical: `${BASE_URL}/case-studies/${slug}` },
    openGraph: {
      title: `${project.title} — Case Study | Kamran`,
      description: project.description,
      url: `${BASE_URL}/case-studies/${slug}`,
    },
  });
}

export default async function CaseStudyPage({ params }: Props) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  if (!project) notFound();

  const schema = articleSchema({
    title: `${project.title} — Case Study`,
    description: project.description,
    datePublished: "2025-01-01",
    url: `${BASE_URL}/case-studies/${project.slug}`,
  });

  const breadcrumb = breadcrumbSchema([
    { name: "Home", url: BASE_URL },
    { name: "Case Studies", url: `${BASE_URL}/case-studies` },
    { name: project.title, url: `${BASE_URL}/case-studies/${project.slug}` },
  ]);

  const paragraphs = project.blogPost
    .split("\n\n")
    .map((p) => p.trim())
    .filter(Boolean);

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
            <Link href="/case-studies" className="hover:text-accent transition-colors">Case Studies</Link>
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
                Case Study
              </span>
            </div>
            <h1 className="font-display font-bold text-4xl sm:text-5xl text-text mb-5 leading-tight">
              {project.title}
            </h1>
            <p className="text-muted text-xl leading-relaxed">{project.description}</p>
          </div>

          {/* Summary cards */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-10">
            <div className="bg-surface border border-border rounded-xl p-5">
              <h2 className="font-semibold text-xs uppercase tracking-widest text-muted mb-2">Business Problem</h2>
              <p className="text-text text-sm leading-relaxed">{project.problem}</p>
            </div>
            <div className="bg-surface border border-border rounded-xl p-5">
              <h2 className="font-semibold text-xs uppercase tracking-widest text-muted mb-2">Solution</h2>
              <p className="text-text text-sm leading-relaxed">{project.solution}</p>
            </div>
            <div className="bg-accent/10 border border-accent/20 rounded-xl p-5">
              <h2 className="font-semibold text-xs uppercase tracking-widest text-accent mb-2">Result</h2>
              <p className="text-text text-sm leading-relaxed">{project.result}</p>
            </div>
          </div>

          {/* Key Features */}
          <div className="bg-surface border border-border rounded-2xl p-6 mb-8">
            <h2 className="font-display font-bold text-xl text-text mb-4">Key Features</h2>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
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
              <h2 className="font-display font-bold text-xl text-text mb-3">System Architecture</h2>
              <p className="text-muted text-sm leading-relaxed">{project.architecture}</p>
            </div>
          )}

          {/* Full case study content */}
          <div className="mb-10">
            <h2 className="font-display font-bold text-2xl text-text mb-6">Technical Deep Dive</h2>
            <div className="prose-content space-y-5">
              {paragraphs.map((para, i) => {
                if (para.startsWith("## ")) {
                  return (
                    <h2 key={i} className="font-display font-bold text-2xl sm:text-3xl text-text mt-12 mb-2">
                      {para.replace("## ", "")}
                    </h2>
                  );
                }
                if (para.startsWith("### ")) {
                  return (
                    <h3 key={i} className="font-display font-bold text-xl text-text mt-8 mb-2">
                      {para.replace("### ", "")}
                    </h3>
                  );
                }
                return (
                  <p key={i} className="text-muted leading-relaxed">
                    {para}
                  </p>
                );
              })}
            </div>
          </div>

          {/* Technologies */}
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

          {/* Bottom CTA */}
          <div className="bg-accent/10 border border-accent/20 rounded-2xl p-8 text-center">
            <h3 className="font-display font-bold text-2xl text-text mb-2">
              Interested in a similar project?
            </h3>
            <p className="text-muted mb-6">
              I&apos;m available for freelance work. Let&apos;s discuss your requirements.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-6 py-3 bg-accent hover:bg-[var(--color-accent-hover)] text-white font-semibold rounded-xl transition-colors duration-200"
              >
                Get In Touch
              </Link>
              <Link
                href={`/projects/${project.slug}`}
                className="inline-flex items-center gap-2 px-6 py-3 border border-border hover:border-accent text-muted hover:text-accent rounded-xl transition-all duration-200 text-sm font-medium"
              >
                Project overview
              </Link>
            </div>
          </div>

        </div>
      </main>
    </>
  );
}
