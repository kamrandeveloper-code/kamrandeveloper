import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getService, getServices } from "@/lib/api";
import { serviceIcons } from "@/components/ServiceCard";
import { serviceSchema, breadcrumbSchema } from "@/lib/schema";
import { baseMetadata, BASE_URL } from "@/lib/seo";
import AboutMeCard from "@/components/AboutMeCard";
import RelatedCarousel from "@/components/RelatedCarousel";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const services = await getServices();
  return services.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const service = await getService(slug);
  if (!service) return {};
  return baseMetadata({
    title: `${service.title} — Services`,
    description: service.description,
    alternates: { canonical: `${BASE_URL}/services/${slug}` },
    openGraph: {
      title: `${service.title} — Kamran`,
      description: service.tagline,
      url: `${BASE_URL}/services/${slug}`,
    },
  });
}

export default async function ServiceDetailPage({ params }: Props) {
  const { slug } = await params;
  const service = await getService(slug);
  if (!service) notFound();

  const allServices = await getServices();
  const related = allServices.filter((s) => s.slug !== slug).slice(0, 3);
  const icon = serviceIcons[service.slug];

  const breadcrumb = breadcrumbSchema([
    { name: "Home", url: BASE_URL },
    { name: "Services", url: `${BASE_URL}/services` },
    { name: service.title, url: `${BASE_URL}/services/${service.slug}` },
  ]);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema({ title: service.title, description: service.description })) }}
      />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />

      <main className="min-h-screen bg-bg pt-28 pb-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 text-sm text-muted mb-10">
            <Link href="/" className="hover:text-accent transition-colors">Home</Link>
            <span>/</span>
            <Link href="/services" className="hover:text-accent transition-colors">Services</Link>
            <span>/</span>
            <span className="text-text font-medium">{service.title}</span>
          </nav>

          {/* ── Hero ── */}
          <div className="mb-16">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 rounded-xl bg-accent/10 text-accent flex items-center justify-center shrink-0">
                {icon}
              </div>
              {service.featured && (
                <span className="text-[10px] font-bold tracking-widest uppercase px-2.5 py-1 rounded-full bg-accent text-white">AI</span>
              )}
            </div>
            <div className="w-10 h-0.5 bg-accent rounded-full mb-5" />
            <h1 className="font-display font-bold text-4xl sm:text-5xl text-text leading-tight mb-4 max-w-2xl">
              {service.title}
            </h1>
            <p className="text-muted text-lg leading-relaxed max-w-2xl">
              {service.tagline}
            </p>
          </div>

          {/* ── Main content ── */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 mb-20">

            {/* Left: detail (2/3) */}
            <div className="lg:col-span-2 space-y-10">

              {/* Long description */}
              <div>
                <h2 className="font-display font-bold text-xl text-text mb-4">Overview</h2>
                <p className="text-muted leading-relaxed text-base sm:text-lg">
                  {service.longDescription}
                </p>
              </div>

              {/* Benefits */}
              <div>
                <h2 className="font-display font-bold text-xl text-text mb-5">What you get</h2>
                <ul className="space-y-3">
                  {service.benefits.map((benefit) => (
                    <li key={benefit} className="flex items-start gap-3 text-text/80">
                      <svg className="w-5 h-5 text-accent shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                      </svg>
                      <span className="text-sm sm:text-base">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Ideal for */}
              <div>
                <h2 className="font-display font-bold text-xl text-text mb-5">Who this is for</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {service.idealFor.map((item) => (
                    <div key={item} className="flex items-start gap-2.5 bg-surface border border-border rounded-xl px-4 py-3">
                      <svg className="w-4 h-4 text-accent/70 shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span className="text-sm text-muted">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Process */}
              <div>
                <h2 className="font-display font-bold text-xl text-text mb-6">How it works</h2>
                <ol className="relative border-l border-border space-y-8 pl-6">
                  {service.process.map((item, i) => (
                    <li key={item.step} className="relative">
                      <span className="absolute -left-[1.85rem] w-7 h-7 rounded-full bg-accent text-white text-xs font-bold flex items-center justify-center">
                        {i + 1}
                      </span>
                      <h3 className="font-semibold text-text text-base mb-1">{item.step}</h3>
                      <p className="text-muted text-sm leading-relaxed">{item.detail}</p>
                    </li>
                  ))}
                </ol>
              </div>

              {/* Tech stack */}
              <div>
                <h2 className="font-display font-bold text-xl text-text mb-4">Technologies</h2>
                <div className="flex flex-wrap gap-2">
                  {service.technologies.map((tag) => (
                    <span key={tag} className="text-sm font-medium px-3 py-1.5 rounded-full bg-surface border border-border text-muted">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Right: sidebar (1/3) */}
            <div className="space-y-5">

              {/* Engagement card */}
              <div className="bg-surface border border-border rounded-2xl p-6 sticky top-24">
                <h3 className="font-display font-bold text-text text-base mb-5">Engagement</h3>
                <div className="space-y-4 mb-5">
                  <div>
                    <p className="text-xs text-muted uppercase tracking-wider mb-1">Type</p>
                    <p className="font-semibold text-text text-sm">{service.engagement.type}</p>
                  </div>
                  <div>
                    <p className="text-xs text-muted uppercase tracking-wider mb-1">Timeline</p>
                    <p className="font-semibold text-text text-sm">{service.engagement.timeline}</p>
                  </div>
                  <div className="pt-4 border-t border-border text-xs text-muted/70 leading-relaxed">
                    {service.engagement.note}
                  </div>
                </div>
                <Link
                  href="/contact"
                  className="w-full inline-flex items-center justify-center gap-2 px-4 py-3 bg-accent hover:bg-[var(--color-accent-hover)] text-white text-sm font-semibold rounded-xl transition-all duration-200"
                >
                  Get a free quote
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
                <Link
                  href="/projects"
                  className="mt-3 w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 border border-border hover:border-accent text-muted hover:text-accent text-sm font-medium rounded-xl transition-all duration-200"
                >
                  See past projects
                </Link>
              </div>
            </div>
          </div>

          <AboutMeCard />

          {/* ── Related services ── */}
          <RelatedCarousel
            heading="Other services"
            viewAllHref="/services"
            items={related.map((s) => ({
              href: `/services/${s.slug}`,
              title: s.title,
              excerpt: s.description,
              tag: s.featured ? "AI" : undefined,
            }))}
          />

        </div>
      </main>
    </>
  );
}
