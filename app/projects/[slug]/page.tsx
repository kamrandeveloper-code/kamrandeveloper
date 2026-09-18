import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
import { getProject, getProjects, getIndustries } from "@/lib/api";
import { projectSchema, breadcrumbSchema, faqSchema } from "@/lib/schema";
import { BASE_URL, baseMetadata } from "@/lib/seo";
import { formatDate } from "@/lib/format";
import FaqAccordion from "@/components/FaqAccordion";
import ContactCTAButton from "@/components/ContactCTAButton";
import CopyButton from "@/components/projects/CopyButton";

interface Props {
  params: Promise<{ slug: string }>;
}




export async function generateStaticParams() {
  const projects = await getProjects();
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const project = await getProject(slug);
  if (!project) return {};

  const metaTitle = project.metaTitle || project.title;
  const metaDescription = project.metaDescription || project.description;
  const ogTitle = project.ogTitle || metaTitle;
  const ogDescription = project.ogDescription || metaDescription;
  const twitterTitle = project.twitterTitle || ogTitle;
  const twitterDescription = project.twitterDescription || ogDescription;
  const ogImage = project.bannerImage || project.image;

  return baseMetadata({
    title: metaTitle,
    description: metaDescription,
    alternates: { canonical: `${BASE_URL}/projects/${slug}` },
    openGraph: {
      title: ogTitle,
      description: ogDescription,
      url: `${BASE_URL}/projects/${slug}`,
      images: [{ url: ogImage, alt: project.title }],
    },
    twitter: {
      title: twitterTitle,
      description: twitterDescription,
      images: [ogImage],
    },
  });
}

const industryColors: Record<string, string> = {
  Healthcare: "#10B981",
  "E-Commerce": "#F59E0B",
  Retail: "#3B82F6",
  Education: "#8B5CF6",
};

export default async function ProjectPage({ params }: Props) {
  const { slug } = await params;
  const project = await getProject(slug);
  if (!project) notFound();
  project.faqs = project.faqs ?? [];

  const allProjects = await getProjects();
  const related = allProjects.filter((p) => p.slug !== slug).slice(0, 3);
  const color = industryColors[project.industry] ?? "var(--color-accent)";

  const industries = await getIndustries();
  const matchedIndustry = industries.find(
    (i) => i.title.trim().toLowerCase() === project.industry.trim().toLowerCase()
  );

  const schema = projectSchema({ title: project.title, description: project.description, technologies: project.tech });
  const breadcrumb = breadcrumbSchema([
    { name: "Home", url: BASE_URL },
    { name: "Projects", url: `${BASE_URL}/projects` },
    { name: project.title, url: `${BASE_URL}/projects/${project.slug}` },
  ]);

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />
      {project.faqs.length > 0 && (
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema(project.faqs)) }} />
      )}

      <main className="min-h-screen bg-bg pt-28 pb-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 text-sm text-muted mb-10">
            <Link href="/" className="hover:text-accent transition-colors">Home</Link>
            <span>/</span>
            <Link href="/projects" className="hover:text-accent transition-colors">Projects</Link>
            <span>/</span>
            <span className="text-text font-medium">{project.title}</span>
          </nav>

          {/* ── Hero: full-width image on top, text below ── */}
          <div className="mb-16">

            {/* Full-width project image */}
            <div className="relative w-full h-64 sm:h-96 lg:h-[28rem] rounded-2xl overflow-hidden border border-border shadow-2xl shadow-black/10 mb-8">
              <Image
                src={project.bannerImage || project.image}
                alt={project.title}
                fill
                className="object-cover object-center"
                priority
                sizes="(max-width: 1024px) 100vw, 1280px"
              />
              {/* Industry badge overlay */}
              <div className="absolute top-4 left-4">
                {matchedIndustry ? (
                  <Link
                    href={`/industry/${matchedIndustry.slug}`}
                    className="inline-flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full backdrop-blur-sm"
                    style={{ color, backgroundColor: `${color}25`, border: `1px solid ${color}50` }}
                  >
                    <span className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: color }} />
                    {project.industry}
                  </Link>
                ) : (
                  <span
                    className="inline-flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full backdrop-blur-sm"
                    style={{ color, backgroundColor: `${color}25`, border: `1px solid ${color}50` }}
                  >
                    <span className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: color }} />
                    {project.industry}
                  </span>
                )}
              </div>
            </div>

            {/* Text content */}
            <div>
              <div className="flex flex-wrap items-center gap-2.5 mb-5">
                <span
                  className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider px-3 py-1.5 rounded-full border"
                  style={{ color, borderColor: `${color}40`, backgroundColor: `${color}12` }}
                >
                  <span className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: color }} />
                  {project.industry}
                </span>
                <span className="text-xs font-medium text-muted bg-surface border border-border px-3 py-1.5 rounded-full">
                  {project.category}
                </span>
                {project.demo && (
                  <span className="text-xs font-bold uppercase tracking-wider text-accent bg-accent/10 border border-accent/25 px-3 py-1.5 rounded-full">
                    Live Demo
                  </span>
                )}
              </div>

              <h1 className="font-display font-bold text-4xl sm:text-5xl text-text leading-tight mb-5">
                {project.title}
              </h1>
              <p className="text-muted text-base sm:text-lg leading-relaxed mb-2">
                {project.longDescription}
              </p>
              {project.updatedAt && (
                <p className="text-muted/70 text-xs mb-8">Last updated {formatDate(project.updatedAt)}</p>
              )}

              {project.quickSummary && (
                <div className="bg-accent/5 border border-accent/20 rounded-xl p-5 mb-8">
                  <p className="text-xs font-bold tracking-widest uppercase text-accent mb-2">Quick Summary</p>
                  <p className="text-text text-sm leading-relaxed">{project.quickSummary}</p>
                </div>
              )}

              {project.demo && (
                <div className="flex flex-col sm:flex-row sm:items-center gap-4 bg-accent/5 border border-accent/20 rounded-2xl p-5 mb-8">
                  <div className="flex-1 min-w-0">
                    <p className="text-xs font-bold tracking-widest uppercase text-accent mb-2.5">Try the Live Demo</p>
                    <div className="flex flex-wrap gap-2.5">
                      <div className="bg-bg border border-border rounded-lg px-3 py-2 flex items-center gap-2">
                        <div className="min-w-0">
                          <p className="text-[10px] font-semibold text-muted uppercase tracking-wider mb-0.5">Email</p>
                          <p className="text-text text-xs font-mono truncate">{project.demo.email}</p>
                        </div>
                        <CopyButton text={project.demo.email} />
                      </div>
                      <div className="bg-bg border border-border rounded-lg px-3 py-2 flex items-center gap-2">
                        <div className="min-w-0">
                          <p className="text-[10px] font-semibold text-muted uppercase tracking-wider mb-0.5">Password</p>
                          <p className="text-text text-xs font-mono truncate">{project.demo.password}</p>
                        </div>
                        <CopyButton text={project.demo.password} />
                      </div>
                    </div>
                  </div>
                  <a
                    href={project.demo.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="shrink-0 inline-flex items-center justify-center gap-2 px-5 py-3 bg-accent hover:bg-[var(--color-accent-hover)] text-white text-sm font-semibold rounded-xl transition-all duration-200"
                  >
                    Launch Demo
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </a>
                </div>
              )}

              <div className="flex flex-wrap gap-3">
                <ContactCTAButton
                  className="inline-flex items-center gap-2 px-5 py-2.5 bg-accent hover:bg-[var(--color-accent-hover)] text-white font-semibold text-sm rounded-xl transition-all duration-200 shadow-lg shadow-accent/20"
                >
                  Build something similar
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </ContactCTAButton>
              </div>
            </div>

          </div>

          {/* ── Main 2-col layout ── */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 mb-20">

            {/* Left: content (2/3) */}
            <div className="lg:col-span-2 space-y-10">

              {/* Story */}
              <div>
                <h2 className="font-display font-bold text-xl text-text mb-5">The Story</h2>
                <div
                  className="article-content text-muted leading-relaxed text-base sm:text-lg"
                  dangerouslySetInnerHTML={{ __html: project.story }}
                />
              </div>

              {/* Key Features */}
              <div>
                <h2 className="font-display font-bold text-xl text-text mb-5">Key Features</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {project.features.map((feature) => (
                    <div key={feature} className="flex items-start gap-3 p-4 bg-surface border border-border rounded-xl">
                      <svg className="w-4 h-4 text-accent shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                      </svg>
                      <span className="text-sm text-text/80 leading-relaxed">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Architecture */}
              {project.architecture && (
                <div>
                  <h2 className="font-display font-bold text-xl text-text mb-4">Architecture</h2>
                  <div className="bg-surface border border-border rounded-2xl p-6">
                    <div className="flex items-start gap-3">
                      <div className="w-8 h-8 rounded-lg bg-accent/10 text-accent flex items-center justify-center shrink-0 mt-0.5">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                        </svg>
                      </div>
                      <p className="text-muted text-sm leading-relaxed">{project.architecture}</p>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Right: sidebar (1/3) */}
            <div className="space-y-5">

              {/* Tech stack */}
              <div className="bg-surface border border-border rounded-2xl p-6 sticky top-24">
                <h3 className="font-display font-bold text-text text-base mb-4">Tech Stack</h3>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech) => (
                    <span key={tech} className="px-3 py-1.5 bg-bg border border-border rounded-lg text-muted text-xs font-medium">
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="mt-6 pt-5 border-t border-border space-y-3">
                  <Link
                    href={`/case-studies/${project.slug}`}
                    className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 bg-accent hover:bg-[var(--color-accent-hover)] text-white text-sm font-semibold rounded-xl transition-all duration-200"
                  >
                    Read Case Study
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </Link>
                  <ContactCTAButton
                    className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 border border-border hover:border-accent text-muted hover:text-accent text-sm font-medium rounded-xl transition-all duration-200"
                  >
                    Build something similar
                  </ContactCTAButton>
                </div>
              </div>
            </div>
          </div>

          {/* ── FAQ ── */}
          {project.faqs.length > 0 && (
            <div className="mb-20">
              <h2 className="font-display font-bold text-2xl sm:text-3xl text-text mb-8">Frequently asked questions</h2>
              <div className="max-w-3xl">
                <FaqAccordion items={project.faqs} />
              </div>
            </div>
          )}

          {/* ── Related Projects ── */}
          <div>
            <div className="flex items-center justify-between mb-8">
              <h2 className="font-display font-bold text-2xl sm:text-3xl text-text">More projects</h2>
              <Link href="/projects" className="text-sm font-medium text-accent hover:underline">
                View all →
              </Link>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {related.map((rel) => {
                const relColor = industryColors[rel.industry] ?? "var(--color-accent)";
                return (
                  <Link
                    key={rel.slug}
                    href={`/projects/${rel.slug}`}
                    className="group block bg-surface border border-border rounded-2xl overflow-hidden hover:border-accent/30 hover:shadow-lg hover:shadow-accent/5 transition-all duration-300"
                  >
                    <div className="relative h-36 overflow-hidden bg-surface">
                      <Image
                        src={rel.image}
                        alt={rel.title}
                        fill
                        className="object-cover object-top"
                        sizes="(max-width: 640px) 100vw, 33vw"
                      />
                      <div className="absolute top-2.5 left-3 z-10">
                        <span
                          className="inline-flex items-center gap-1 text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full backdrop-blur-sm"
                          style={{ color: relColor, backgroundColor: `${relColor}30`, border: `1px solid ${relColor}60` }}
                        >
                          {rel.industry}
                        </span>
                      </div>
                      <div className="absolute bottom-0 left-0 right-0 h-0.5" style={{ backgroundColor: relColor }} />
                    </div>
                    <div className="p-5">
                      <h3 className="font-display font-semibold text-text text-sm mb-1.5 group-hover:text-accent transition-colors leading-snug">
                        {rel.title}
                      </h3>
                      <p className="text-muted text-xs leading-relaxed line-clamp-2 mb-3">{rel.description}</p>
                      <span className="inline-flex items-center gap-1 text-accent text-xs font-semibold group-hover:gap-1.5 transition-all">
                        View project
                        <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                      </span>
                    </div>
                  </Link>
                );
              })}
            </div>
          </div>

        </div>
      </main>
    </>
  );
}
