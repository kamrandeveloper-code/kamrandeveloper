import Link from "next/link";
import { developer } from "@/data/developer";

export default function AboutMeCard() {
  return (
    <section className="bg-surface border border-border rounded-2xl p-6 sm:p-8 mt-16">
      <div className="flex flex-col sm:flex-row items-start gap-6">
        <div className="w-16 h-16 rounded-full bg-accent/10 text-accent flex items-center justify-center font-display font-bold text-2xl shrink-0">
          {developer.name.charAt(0)}
        </div>
        <div>
          <p className="text-xs font-bold tracking-widest uppercase text-accent mb-2">About the author</p>
          <h3 className="font-display font-bold text-2xl text-text mb-3">{developer.name}</h3>
          <p className="text-muted leading-relaxed mb-5">{developer.bio}</p>
          <Link
            href="/about"
            className="inline-flex items-center gap-2 text-sm font-semibold text-accent hover:underline"
          >
            More about me
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
}
