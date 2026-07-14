import Link from "next/link";
import { developer } from "@/data/developer";
import { specializations } from "@/data/specializations";


export default function AboutSection() {
  return (
    <section className="py-24 bg-surface relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          <div>
            <p className="text-xs font-bold tracking-[0.2em] uppercase text-accent mb-4">
              About {developer.name}
            </p>
            <h2 className="font-display font-bold text-4xl sm:text-5xl text-text leading-tight mb-6">
              Who is {developer.name}?
            </h2>
            <p className="text-muted text-lg leading-relaxed mb-6">
              {developer.bio}
            </p>
            <p className="text-muted text-base leading-relaxed mb-8">
              Based in Pakistan, I work with businesses locally and internationally. Every project
              starts with understanding your workflow — not with fitting your business into a template.
            </p>
            <Link
              href="/about"
              className="inline-flex items-center gap-2 px-6 py-3 border border-border hover:border-accent text-muted hover:text-accent rounded-xl transition-all duration-200 text-sm font-medium"
            >
              Learn more about me
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>

          <div>
            <h3 className="font-display font-bold text-text text-lg mb-6">
              Specializations
            </h3>
           <ul className="space-y-3">
              {specializations.map((spec) => (
                <li
                  key={spec}
                  className="flex items-center gap-3 p-4 bg-bg border border-border rounded-xl hover:border-accent/30 transition-colors"
                >
                  <svg
                    className="w-2 h-2 text-accent shrink-0"
                    viewBox="0 0 8 8"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <circle cx="4" cy="4" r="4" />
                  </svg>

                  <span className="text-text font-medium text-sm">
                    {spec}
                  </span>
                </li>
              ))}
            </ul>
          </div>

        </div>
      </div>
    </section>
  );
}
