import type { Metadata } from "next";
import Link from "next/link";
import { services } from "@/data/services";
import { serviceSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Software Development Services",
  description:
    "Custom software development services: management systems, business software, API integrations, admin dashboards, AI-powered features, and e-commerce solutions.",
  openGraph: {
    title: "Software Development Services — Kamran",
    description:
      "Custom software development — management systems, business software, API integrations, and e-commerce solutions.",
  },
};

export default function ServicesPage() {
  const schemas = services.map((s) =>
    serviceSchema({ title: s.title, description: s.description })
  );

  return (
    <>
      {schemas.map((schema, i) => (
        <script
          key={i}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      ))}
      <main className="min-h-screen bg-bg pt-24 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* Header */}
          <div className="max-w-2xl mb-16">
            <p className="text-xs font-bold tracking-[0.2em] uppercase text-accent mb-4">Services</p>
            <h1 className="font-display font-bold text-4xl sm:text-5xl text-text leading-tight mb-5">
              Software development{" "}
              <span className="text-accent">services</span>
            </h1>
            <p className="text-muted text-lg leading-relaxed">
              Custom software development, management systems, e-commerce platforms, API integrations
              and automation solutions. I build software that fits your specific business — not
              software you have to adapt your business to fit.
            </p>
          </div>

          {/* Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
            {services.map((service) => (
              <div
                key={service.id}
                className={`rounded-2xl p-6 flex flex-col ${
                  service.featured
                    ? "bg-gradient-to-br from-accent/[0.07] via-accent/[0.04] to-transparent border-2 border-accent/30"
                    : "bg-surface border border-border"
                }`}
              >
                {service.featured && (
                  <span className="inline-flex self-start items-center text-[10px] font-bold tracking-widest uppercase px-2.5 py-1 rounded-full bg-accent text-white mb-4">
                    AI
                  </span>
                )}
                <h2 className="font-display font-bold text-text text-xl mb-3 leading-snug">
                  {service.title}
                </h2>
                <p className="text-text/80 text-sm font-medium leading-relaxed mb-3">
                  {service.tagline}
                </p>
                <p className="text-muted text-sm leading-relaxed flex-1 mb-5">
                  {service.description}
                </p>
                <div className={`flex flex-wrap gap-1.5 pt-5 border-t ${service.featured ? "border-accent/20" : "border-border"}`}>
                  {service.technologies.map((tech) => (
                    <span
                      key={tech}
                      className={`text-[10px] font-semibold tracking-wide uppercase px-2.5 py-1 rounded-full border ${
                        service.featured
                          ? "bg-accent/8 border-accent/20 text-accent/80"
                          : "bg-surface-2 border-border text-muted/70"
                      }`}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* GEO Answer block */}
          <div className="bg-surface border border-border rounded-2xl p-8 mb-12">
            <h2 className="font-display font-bold text-2xl text-text mb-4">
              About the Services
            </h2>
            <div className="space-y-4 text-muted leading-relaxed">
              <p>
                I specialize in building software for businesses that have outgrown spreadsheets and
                generic tools. My focus is on practical, maintainable software that solves specific
                operational problems.
              </p>
              <p>
                Most of my work is in the healthcare, retail, education, and e-commerce sectors.
                Industries where standard tools often fall short and custom software provides a
                significant operational advantage.
              </p>
              <p>
                Every project starts with understanding your workflow. I then design the simplest
                system that solves your real problems — not an over-engineered solution looking for
                a problem to justify itself.
              </p>
            </div>
          </div>

          {/* CTA */}
          <div className="bg-accent/10 border border-accent/20 rounded-2xl p-8 text-center">
            <h2 className="font-display font-bold text-2xl text-text mb-2">
              Ready to discuss your project?
            </h2>
            <p className="text-muted mb-6 max-w-md mx-auto">
              Describe your business problem and I&apos;ll tell you what makes sense to build.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-6 py-3 bg-accent hover:bg-[var(--color-accent-hover)] text-white font-semibold rounded-xl transition-colors duration-200"
              >
                Get in touch
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
              <Link
                href="/projects"
                className="inline-flex items-center gap-2 px-6 py-3 border border-border hover:border-accent text-muted hover:text-accent rounded-xl transition-all duration-200 text-sm font-medium"
              >
                See past projects
              </Link>
            </div>
          </div>

        </div>
      </main>
    </>
  );
}
