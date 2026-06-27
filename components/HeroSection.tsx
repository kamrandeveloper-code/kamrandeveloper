import Link from "next/link";
import Image from "next/image";
import { developer } from "@/data/developer";

export default function HeroSection() {
  return (
    <section className="relative hero-animated-bg overflow-hidden flex items-start lg:items-center lg:min-h-screen">
      <div className="absolute inset-0 grid-pattern" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_40%,rgba(99,102,241,0.05),transparent)]" />
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-bg to-transparent" />

      <div className="relative z-10 w-full max-w-6xl mx-auto px-5 sm:px-8 lg:px-12 pt-24 pb-14 sm:pt-28 sm:pb-16 lg:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">

          {/* Left column */}
          <div>
            {/* Availability */}
            {developer.available && (
              <div className="inline-flex items-center gap-2 mb-6">
                <span className="relative flex h-2 w-2 shrink-0">
                  <span className="absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75 animate-ping" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-green-500" />
                </span>
                <span className="text-xs sm:text-sm font-medium text-muted">
                  Available for new projects
                </span>
              </div>
            )}

            {/* Headline */}
            <h1 className="font-display font-bold tracking-tight leading-[1.1] text-[2rem] sm:text-[2.6rem] lg:text-[3rem] xl:text-[3.25rem] text-text mb-5">
              Custom Software Developer{" "}
              <span className="text-accent">for Growing Businesses</span>
            </h1>

            {/* Subheading */}
            <p className="text-muted leading-relaxed mb-8 text-base sm:text-lg lg:text-[1.05rem] xl:text-xl max-w-[54ch]">
              {developer.tagline}
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-row flex-wrap items-center gap-3 mb-10">
              <Link
                href="/projects"
                className="inline-flex items-center gap-2 font-semibold rounded-lg transition-all duration-200 text-sm px-6 py-3 bg-accent hover:bg-[var(--color-accent-hover)] text-white shadow-lg shadow-accent/20"
              >
                View Projects
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 font-semibold rounded-lg transition-all duration-200 text-sm px-6 py-3 border border-border text-text hover:bg-accent hover:text-white hover:border-accent"
              >
                Hire Me
              </Link>
              <a
                href={developer.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 font-semibold rounded-lg transition-all duration-200 text-sm px-5 py-3 bg-[#25D366] hover:bg-[#1ebe5d] text-white shadow-lg shadow-[#25D366]/25"
              >
                <svg className="h-4 w-4 shrink-0" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
                WhatsApp
              </a>
            </div>

            {/* Industry strip */}
            <div className="flex flex-wrap gap-2">
              {["Healthcare", "Dental", "Pharmacy", "Education", "Retail", "E-Commerce"].map((industry) => (
                <span
                  key={industry}
                  className="text-xs font-medium text-muted/70 px-3 py-1.5 bg-surface border border-border rounded-full"
                >
                  {industry}
                </span>
              ))}
            </div>
          </div>

          {/* Right column — profile image */}
          <div className="hidden lg:flex items-center justify-end">
            <div className="relative">
              {/* Glow behind image */}
              <div className="absolute -inset-4 bg-accent/10 rounded-3xl blur-2xl pointer-events-none" />

              {/* Image container */}
              <div className="relative w-100 xl:w-130 rounded-2xl overflow-hidden border border-border shadow-2xl shadow-black/10">
                <Image
                  src="/profile.webp"
                  alt="Kamran — Custom Software Developer"
                  width={420}
                  height={500}
                  className="object-cover object-top w-full"
                  priority
                />
              </div>

              {/* Availability badge overlaid on image */}
              <div className="absolute -bottom-4 -left-4 bg-surface border border-border rounded-2xl px-4 py-3 shadow-lg flex items-center gap-3 min-w-[180px]">
                <span className="relative flex h-2.5 w-2.5 shrink-0">
                  <span className="absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75 animate-ping" />
                  <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-green-500" />
                </span>
                <div>
                  <p className="text-[11px] font-semibold text-text leading-none mb-0.5">Available</p>
                  <p className="text-[10px] text-muted leading-none">Open for projects</p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
