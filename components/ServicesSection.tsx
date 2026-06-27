import Link from "next/link";
import { services, type Service } from "@/data/services";

function ServiceCard({ service }: { service: Service }) {
  return (
    <div className="group bg-surface border border-border rounded-2xl p-6 flex flex-col hover:border-accent/30 hover:shadow-lg hover:shadow-accent/5 transition-all duration-300">
      <h3 className="font-display font-bold text-text text-[1.05rem] leading-snug mb-2">
        {service.title}
      </h3>
      <p className="text-text/80 text-sm font-medium leading-relaxed mb-3">
        {service.tagline}
      </p>
      <p className="text-muted text-sm leading-relaxed flex-1">
        {service.description}
      </p>
      <div className="flex flex-wrap gap-1.5 mt-5 pt-5 border-t border-border">
        {service.technologies.map((tag) => (
          <span
            key={tag}
            className="text-[10px] font-semibold tracking-wide uppercase px-2.5 py-1 rounded-full bg-surface-2 border border-border text-muted/70"
          >
            {tag}
          </span>
        ))}
      </div>
    </div>
  );
}

function FeaturedServiceCard({ service }: { service: Service }) {
  return (
    <div className="group relative bg-gradient-to-br from-accent/[0.07] via-accent/[0.04] to-transparent border-2 border-accent/30 rounded-2xl p-6 flex flex-col overflow-hidden hover:border-accent/50 hover:shadow-xl hover:shadow-accent/10 transition-all duration-300">
      <div className="absolute -top-8 -right-8 w-36 h-36 bg-accent/10 rounded-full blur-2xl pointer-events-none" />
      <div className="absolute top-4 right-4">
        <span className="inline-flex items-center gap-1 text-[10px] font-bold tracking-widest uppercase px-2.5 py-1 rounded-full bg-accent text-white shadow-md shadow-accent/30">
          AI
        </span>
      </div>
      <h3 className="relative font-display font-bold text-text text-[1.05rem] leading-snug mb-2">
        {service.title}
      </h3>
      <p className="relative text-text/80 text-sm font-medium leading-relaxed mb-3">
        {service.tagline}
      </p>
      <p className="relative text-muted text-sm leading-relaxed flex-1">
        {service.description}
      </p>
      <div className="relative flex flex-wrap gap-1.5 mt-5 pt-5 border-t border-accent/20">
        {service.technologies.map((tag) => (
          <span
            key={tag}
            className="text-[10px] font-semibold tracking-wide uppercase px-2.5 py-1 rounded-full bg-accent/8 border border-accent/20 text-accent/80 group-hover:border-accent/35 group-hover:text-accent transition-colors duration-200"
          >
            {tag}
          </span>
        ))}
      </div>
    </div>
  );
}

export default function ServicesSection() {
  return (
    <section className="py-24 bg-bg relative overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-16 bg-gradient-to-b from-accent/30 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mb-16">
          <p className="text-xs font-bold tracking-[0.2em] uppercase text-accent mb-4">
            What I Build
          </p>
          <h2 className="font-display font-bold text-4xl sm:text-5xl text-text leading-tight mb-5">
            Software that fits how your{" "}
            <span className="text-accent">business actually runs</span>
          </h2>
          <p className="text-muted text-base sm:text-lg leading-relaxed">
            Most businesses reach a point where spreadsheets and off-the-shelf tools stop working.
            I build custom software — web applications, management systems, and AI-powered tools —
            tailored to your exact operations.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {services.map((service) =>
            service.featured ? (
              <FeaturedServiceCard key={service.id} service={service} />
            ) : (
              <ServiceCard key={service.id} service={service} />
            )
          )}
        </div>

        <div className="mt-14 flex flex-col sm:flex-row items-start sm:items-center gap-4">
          <Link
            href="/services"
            className="inline-flex items-center gap-2 px-6 py-3 bg-accent hover:bg-[var(--color-accent-hover)] text-white font-semibold text-sm rounded-xl transition-all duration-200 shadow-lg shadow-accent/20"
          >
            See all services
            <svg className="w-4 h-4 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
          <span className="text-muted text-sm">
            Not sure what you need?{" "}
            <Link href="/contact" className="text-accent hover:underline font-medium">
              Describe the problem
            </Link>
            {" "}— I&apos;ll tell you what makes sense.
          </span>
        </div>
      </div>
    </section>
  );
}
