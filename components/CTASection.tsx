import Link from "next/link";

export default function CTASection() {
  return (
    <section className="py-24 bg-surface relative overflow-hidden">
      {/* Background accent glow */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_50%_50%,rgba(99,102,241,0.06),transparent)]" />

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="font-display font-bold text-4xl sm:text-5xl lg:text-6xl text-text mb-6 leading-tight">
          Ready to build something?
        </h2>
        <p className="text-muted text-lg sm:text-xl mb-10 max-w-2xl mx-auto leading-relaxed">
          Let&apos;s work together on your next project. I&apos;m currently
          available for freelance work.
        </p>
        <Link
          href="/contact"
          className="inline-flex items-center gap-2 px-8 py-4 bg-accent hover:bg-[var(--color-accent-hover)] text-white font-semibold text-lg rounded-xl transition-all duration-200 shadow-xl shadow-accent/20"
        >
          Get In Touch
          <svg
            className="w-5 h-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M17 8l4 4m0 0l-4 4m4-4H3"
            />
          </svg>
        </Link>
      </div>
    </section>
  );
}
