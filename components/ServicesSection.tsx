import Link from "next/link";
import { getServices } from "@/lib/api";
import { ServiceCard, FeaturedServiceCard } from "@/components/ServiceCard";
import ContactCTAButton from "@/components/ContactCTAButton";

export default async function ServicesSection() {
  const services = await getServices();
  return (
    <section className="pb-12 bg-bg relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative w-full mb-24 overflow-hidden rounded-2xl min-h-[320px] sm:min-h-[420px] lg:min-h-[500px]">
          <video
            className="absolute inset-0 w-full h-full object-cover"
            src="/Custom%20Software%20Need.mp4"
            autoPlay
            muted
            loop
            playsInline
            aria-hidden="true"
          />
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(90deg, rgba(7,10,25,0.72) 0%, rgba(7,10,25,0.50) 48%, rgba(7,10,25,0.10) 100%)",
            }}
          />
          <div className="absolute inset-0 z-10 flex flex-col justify-between p-8 sm:p-12">
            <h2
              className="font-display font-bold text-white"
              style={{ maxWidth: "650px", fontSize: "clamp(2.5rem, 4vw, 4.5rem)", lineHeight: 1.05 }}
            >
              Software that fits how your <span className="text-accent">business actually runs</span>
            </h2>
            <p className="hidden sm:flex self-end text-right max-w-xs sm:max-w-sm text-white/85 text-sm sm:text-base leading-relaxed bg-black/10 backdrop-blur-sm rounded-xl px-4 py-3">
              Most businesses reach a point where spreadsheets and off-the-shelf tools stop working.
              I build custom software tailored to your exact operations.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {services.map((service) =>
            service.featured ? (
              <FeaturedServiceCard key={service.slug} service={service} />
            ) : (
              <ServiceCard key={service.slug} service={service} />
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
            <ContactCTAButton className="text-accent hover:underline font-medium">
              Describe the problem
            </ContactCTAButton>
            {" "}- I&apos;ll tell you what makes sense.
          </span>
        </div>
      </div>
    </section>
  );
}
