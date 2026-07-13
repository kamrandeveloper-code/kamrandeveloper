import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { getServices } from "@/lib/api";
import { ServiceCard, FeaturedServiceCard } from "@/components/ServiceCard";
import { serviceSchema, breadcrumbSchema } from "@/lib/schema";
import { baseMetadata, BASE_URL, buildAlternates } from "@/lib/seo";
import ContactCTAButton from "@/components/ContactCTAButton";

export const metadata: Metadata = baseMetadata({
  title: "Software Development Services",
  description:
    "Custom software development services: management systems, business software, API integrations, admin dashboards, AI-powered features, and e-commerce solutions.",
  alternates: buildAlternates("/services"),
  openGraph: {
    title: "Software Development Services — Kamran",
    description: "Custom software development — management systems, business software, API integrations, and e-commerce solutions.",
    url: `${BASE_URL}/services`,
  },
});

export default async function ServicesPage() {
  const services = await getServices();
  const schemas = services.map((s) => serviceSchema({ title: s.title, description: s.description }));
  const breadcrumb = breadcrumbSchema([
    { name: "Home", url: BASE_URL },
    { name: "Services", url: `${BASE_URL}/services` },
  ]);

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />
      {schemas.map((schema, i) => (
        <script key={i} type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      ))}

      <main className="min-h-screen bg-bg">

        {/* ── Hero: text left, image right ── */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 pb-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Left: text */}
            <div>
              <p className="text-xs font-bold tracking-[0.2em] uppercase text-accent mb-4">What I Build</p>
              <h1 className="font-display font-bold text-4xl sm:text-5xl lg:text-6xl text-text leading-tight mb-5">
                Software development{" "}
                <span className="text-accent">services</span>
              </h1>
              <p className="text-muted text-base sm:text-lg leading-relaxed mb-8 max-w-xl">
                Custom software tailored to your business — not software you have to adapt your business to fit.
                From management systems to AI-powered tools, I build what your operation actually needs.
              </p>
              <div className="flex flex-wrap gap-3">
                <ContactCTAButton
                  className="inline-flex items-center gap-2 px-6 py-3 bg-accent hover:bg-[var(--color-accent-hover)] text-white font-semibold text-sm rounded-xl transition-all duration-200 shadow-lg shadow-accent/20"
                >
                  Discuss your project
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </ContactCTAButton>
                <Link
                  href="/projects"
                  className="inline-flex items-center gap-2 px-6 py-3 border border-border hover:border-accent text-muted hover:text-accent rounded-xl transition-all duration-200 text-sm font-medium"
                >
                  See past work
                </Link>
              </div>
            </div>

            {/* Right: image */}
            <div className="relative h-[380px] lg:h-[460px] rounded-2xl overflow-hidden shadow-2xl shadow-black/10">
              <Image
                src="/services.png"
                alt="Software development services"
                fill
                className="object-cover object-center"
                priority
              />
            </div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-24">

          {/* ── Cards grid ── */}
          <div className="mb-20">
            <h2 className="font-display font-bold text-2xl sm:text-3xl text-text mb-2">All services at a glance</h2>
            <p className="text-muted text-sm mb-10">A quick overview of everything I offer — click any service to explore the full details.</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {services.map((service) =>
                service.featured ? (
                  <FeaturedServiceCard key={service.slug} service={service} />
                ) : (
                  <ServiceCard key={service.slug} service={service} />
                )
              )}
            </div>
          </div>

          {/* ── CTA ── */}
          <div className="bg-accent rounded-3xl p-10 sm:p-14 text-center relative overflow-hidden">
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_50%_50%,rgba(255,255,255,0.08),transparent)]" />
            <div className="relative">
              <h2 className="font-display font-bold text-3xl sm:text-4xl text-white mb-3">
                Ready to discuss your project?
              </h2>
              <p className="text-white/75 mb-8 max-w-md mx-auto text-base">
                Describe your business problem and I&apos;ll tell you what makes sense to build.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <ContactCTAButton
                  className="inline-flex items-center gap-2 px-7 py-3.5 bg-white hover:bg-white/90 text-accent font-semibold rounded-xl transition-all duration-200 shadow-lg shadow-black/10"
                >
                  Get in touch
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </ContactCTAButton>
                <Link
                  href="/projects"
                  className="inline-flex items-center gap-2 px-7 py-3.5 border border-white/30 hover:border-white/60 text-white rounded-xl transition-all duration-200 text-sm font-medium"
                >
                  See past projects
                </Link>
              </div>
            </div>
          </div>

        </div>
      </main>
    </>
  );
}
