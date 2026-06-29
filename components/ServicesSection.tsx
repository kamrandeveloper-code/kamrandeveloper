import Link from "next/link";
import { services } from "@/data/services";
import { ServiceCard, FeaturedServiceCard } from "@/components/ServiceCard";

export default function ServicesSection() {
  return (
    <section className="pb-12 bg-bg relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mb-16">
          <h2 className="font-display font-bold text-4xl sm:text-5xl text-text leading-tight mb-5">
            Software that fits how your{" "}
            <span className="text-accent">business actually runs</span>
          </h2>
          <p className="text-muted text-base sm:text-lg leading-relaxed">
            Most businesses reach a point where spreadsheets and off-the-shelf tools stop working.
            I build custom software tailored to your exact operations.
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
            {" "}- I&apos;ll tell you what makes sense.
          </span>
        </div>
      </div>
    </section>
  );
}
