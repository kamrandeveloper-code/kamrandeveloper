import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { getIndustry, getIndustries, getProjects, getCaseStudies } from "@/lib/api";
import { breadcrumbSchema, faqSchema } from "@/lib/schema";
import { baseMetadata, BASE_URL } from "@/lib/seo";
import AboutMeCard from "@/components/AboutMeCard";
import RelatedCarousel from "@/components/RelatedCarousel";
import FaqAccordion from "@/components/FaqAccordion";
import ContactCTAButton from "@/components/ContactCTAButton";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const industries = await getIndustries();
  return industries.map((i) => ({ slug: i.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const industry = await getIndustry(slug);
  if (!industry) return {};
  return baseMetadata({
    title: `${industry.title} Software Development`,
    description: industry.description,
    alternates: { canonical: `${BASE_URL}/industry/${slug}` },
    openGraph: {
      title: `${industry.title} — Kamran`,
      description: industry.tagline,
      url: `${BASE_URL}/industry/${slug}`,
    },
  });
}

export default async function IndustryDetailPage({ params }: Props) {
  const { slug } = await params;
  const industry = await getIndustry(slug);
  if (!industry) notFound();
  industry.faqs = industry.faqs ?? [];

  const [projects, caseStudies] = await Promise.all([getProjects(), getCaseStudies()]);
  const industryKey = industry.title.trim().toLowerCase();
  const relatedProjects = projects.filter((p) => p.industry.trim().toLowerCase() === industryKey);
  const relatedCaseStudies = caseStudies.filter((c) => c.industry.trim().toLowerCase() === industryKey);

  const breadcrumb = breadcrumbSchema([
    { name: "Home", url: BASE_URL },
    { name: industry.title, url: `${BASE_URL}/industry/${industry.slug}` },
  ]);

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />
      {industry.faqs.length > 0 && (
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema(industry.faqs)) }} />
      )}

      <main className="min-h-screen bg-bg pt-28 pb-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 text-sm text-muted mb-10">
            <Link href="/" className="hover:text-accent transition-colors">Home</Link>
            <span>/</span>
            <span className="text-text font-medium">{industry.title}</span>
          </nav>

          {/* ── Hero: full-width image on top, text below ── */}
          <div className="mb-16">
            <div className="relative w-full h-64 sm:h-96 lg:h-[28rem] rounded-2xl overflow-hidden border border-border shadow-2xl shadow-black/10 mb-8">
              <Image
                src={industry.heroImage}
                alt={industry.title}
                fill
                className="object-cover object-center"
                priority
                sizes="(max-width: 1024px) 100vw, 1280px"
              />
            </div>

            <h1 className="font-display font-bold text-4xl sm:text-5xl text-text leading-tight mb-4 max-w-2xl">
              {industry.title} Software Development
            </h1>
            <p className="text-muted text-lg leading-relaxed max-w-2xl">
              {industry.tagline}
            </p>
            {industry.quickSummary && (
              <div className="bg-accent/5 border border-accent/20 rounded-xl p-5 mt-6 max-w-2xl">
                <p className="text-xs font-bold tracking-widest uppercase text-accent mb-2">Quick Summary</p>
                <p className="text-text text-sm leading-relaxed">{industry.quickSummary}</p>
              </div>
            )}
          </div>

          {/* ── Main content ── */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 mb-20">
            <div className="lg:col-span-2 space-y-10">
              <div>
                <h2 className="font-display font-bold text-xl text-text mb-4">Overview</h2>
                <div
                  className="article-content text-muted leading-relaxed text-base sm:text-lg"
                  dangerouslySetInnerHTML={{ __html: industry.longDescription }}
                />
              </div>

              {industry.faqs.length > 0 && (
                <div>
                  <h2 className="font-display font-bold text-xl text-text mb-5">Frequently asked questions</h2>
                  <FaqAccordion items={industry.faqs} />
                </div>
              )}
            </div>

            {/* Right: sidebar */}
            <div className="space-y-5">
              <div className="bg-surface border border-border rounded-2xl p-6 sticky top-24">
                <h3 className="font-display font-bold text-text text-base mb-3">
                  Building for {industry.title.toLowerCase()}?
                </h3>
                <p className="text-muted text-sm leading-relaxed mb-5">
                  Let&apos;s talk about what a purpose-built system would look like for your operation.
                </p>
                <ContactCTAButton
                  className="w-full inline-flex items-center justify-center gap-2 px-4 py-3 bg-accent hover:bg-[var(--color-accent-hover)] text-white text-sm font-semibold rounded-xl transition-all duration-200"
                >
                  Get a free quote
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </ContactCTAButton>
              </div>
            </div>
          </div>

          <AboutMeCard />

          <RelatedCarousel
            heading="Related projects"
            viewAllHref="/projects"
            items={relatedProjects.map((p) => ({
              href: `/projects/${p.slug}`,
              title: p.title,
              excerpt: p.description,
              tag: p.featured ? "Featured" : undefined,
            }))}
          />

          <RelatedCarousel
            heading="Related case studies"
            viewAllHref="/case-studies"
            items={relatedCaseStudies.map((c) => ({
              href: `/case-studies/${c.slug}`,
              title: c.title,
              excerpt: c.description,
              tag: c.featured ? "Featured" : undefined,
            }))}
          />

        </div>
      </main>
    </>
  );
}
