import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { services } from "@/data/services";
import { ServiceCard, FeaturedServiceCard, serviceIcons } from "@/components/ServiceCard";
import { serviceSchema, breadcrumbSchema } from "@/lib/schema";
import { baseMetadata, BASE_URL, buildAlternates } from "@/lib/seo";

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

export default function ServicesPage() {
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
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-accent hover:bg-[var(--color-accent-hover)] text-white font-semibold text-sm rounded-xl transition-all duration-200 shadow-lg shadow-accent/20"
                >
                  Discuss your project
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
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

          {/* ── In-depth service sections ── */}
          <div className="space-y-24 mb-24">
            {services.map((service, index) => (
              <div
                key={service.id}
                id={service.id}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start ${
                  index % 2 === 1 ? "lg:[&>*:first-child]:order-2" : ""
                }`}
              >
                {/* Left: content */}
                <div>
                  {/* Icon + Title on one row */}
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-xl bg-accent/10 text-accent flex items-center justify-center shrink-0">
                      {serviceIcons[service.id]}
                    </div>
                    <h2 className="font-display font-bold text-2xl sm:text-3xl text-text leading-tight">
                      {service.title}
                    </h2>
                    {service.featured && (
                      <span className="text-[10px] font-bold tracking-widest uppercase px-2.5 py-1 rounded-full bg-accent text-white shrink-0">AI</span>
                    )}
                  </div>
                  <div className="w-8 h-0.5 bg-accent rounded-full mb-5" />

                  <p className="text-muted leading-relaxed mb-6 text-base sm:text-lg">
                    {service.longDescription}
                  </p>

                  <ul className="space-y-3 mb-8">
                    {service.benefits.map((benefit) => (
                      <li key={benefit} className="flex items-start gap-2.5 text-sm text-text/80">
                        <svg className="w-4 h-4 text-accent shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                        </svg>
                        {benefit}
                      </li>
                    ))}
                  </ul>

                  <div className="flex flex-wrap gap-1.5">
                    {service.technologies.map((tag) => (
                      <span key={tag} className="text-[11px] font-medium px-2.5 py-1 rounded-full bg-surface border border-border text-muted">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Right: process + ideal for + engagement */}
                <div className="space-y-5">
                  {/* How it works */}
                  <div className="bg-surface border border-border rounded-2xl p-6">
                    <h3 className="font-display font-bold text-text text-base mb-5">How it works</h3>
                    <ol className="space-y-5">
                      {service.process.map((item, i) => (
                        <li key={item.step} className="flex gap-4">
                          <span className="w-6 h-6 rounded-full bg-accent/10 text-accent text-xs font-bold flex items-center justify-center shrink-0 mt-0.5">
                            {i + 1}
                          </span>
                          <div>
                            <p className="font-semibold text-text text-sm mb-0.5">{item.step}</p>
                            <p className="text-muted text-sm leading-relaxed">{item.detail}</p>
                          </div>
                        </li>
                      ))}
                    </ol>
                  </div>

                  {/* Ideal for */}
                  <div className="bg-surface border border-border rounded-2xl p-6">
                    <h3 className="font-display font-bold text-text text-base mb-4">Ideal for</h3>
                    <ul className="space-y-2.5">
                      {service.idealFor.map((item) => (
                        <li key={item} className="flex items-start gap-2 text-sm text-muted">
                          <svg className="w-4 h-4 text-accent/60 shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                          </svg>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Engagement / rate */}
                  <div className="bg-accent/5 border border-accent/20 rounded-2xl p-6">
                    <h3 className="font-display font-bold text-text text-base mb-4">Engagement</h3>
                    <div className="space-y-3">
                      <div className="flex items-center justify-between text-sm">
                        <span className="text-muted">Type</span>
                        <span className="font-semibold text-text">{service.engagement.type}</span>
                      </div>
                      <div className="flex items-center justify-between text-sm">
                        <span className="text-muted">Typical timeline</span>
                        <span className="font-semibold text-text">{service.engagement.timeline}</span>
                      </div>
                      <div className="pt-3 border-t border-accent/15 text-xs text-muted/70 leading-relaxed">
                        {service.engagement.note}
                      </div>
                    </div>
                    <Link
                      href="/contact"
                      className="mt-4 w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 bg-accent hover:bg-[var(--color-accent-hover)] text-white text-sm font-semibold rounded-xl transition-all duration-200"
                    >
                      Get a quote
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* ── CTA ── */}
          <div className="bg-accent rounded-3xl p-10 sm:p-14 text-center mb-20 relative overflow-hidden">
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_50%_50%,rgba(255,255,255,0.08),transparent)]" />
            <div className="relative">
              <h2 className="font-display font-bold text-3xl sm:text-4xl text-white mb-3">
                Ready to discuss your project?
              </h2>
              <p className="text-white/75 mb-8 max-w-md mx-auto text-base">
                Describe your business problem and I&apos;ll tell you what makes sense to build.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 px-7 py-3.5 bg-white hover:bg-white/90 text-accent font-semibold rounded-xl transition-all duration-200 shadow-lg shadow-black/10"
                >
                  Get in touch
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
                <Link
                  href="/projects"
                  className="inline-flex items-center gap-2 px-7 py-3.5 border border-white/30 hover:border-white/60 text-white rounded-xl transition-all duration-200 text-sm font-medium"
                >
                  See past projects
                </Link>
              </div>
            </div>
          </div>

          {/* ── Cards grid ── */}
          <div>
            <h2 className="font-display font-bold text-2xl sm:text-3xl text-text mb-2">All services at a glance</h2>
            <p className="text-muted text-sm mb-10">A quick overview of everything I offer.</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {services.map((service) =>
                service.featured ? (
                  <FeaturedServiceCard key={service.id} service={service} />
                ) : (
                  <ServiceCard key={service.id} service={service} />
                )
              )}
            </div>
          </div>

        </div>
      </main>
    </>
  );
}
