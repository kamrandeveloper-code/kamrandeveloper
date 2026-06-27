import { testimonials } from "@/data/testimonials";

export default function TestimonialsSection() {
  return (
    <section className="py-24 bg-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="font-display font-bold text-4xl sm:text-5xl text-text mb-4">
            What Clients Say
          </h2>
          <p className="text-muted text-lg max-w-xl mx-auto">
            Feedback from people I&apos;ve had the pleasure of working with.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t) => (
            <div
              key={t.name}
              className="bg-surface border border-border rounded-2xl p-6 flex flex-col hover:border-accent/30 transition-colors duration-300"
            >
              {/* Quote mark */}
              <div className="text-accent/60 text-5xl font-serif leading-none mb-4 select-none">
                &ldquo;
              </div>

              {/* Quote text */}
              <p className="text-muted text-sm leading-relaxed flex-1 mb-6">
                {t.text}
              </p>

              {/* Author */}
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-accent/15 border border-accent/30 flex items-center justify-center flex-shrink-0">
                  <span className="text-accent font-bold text-sm">
                    {t.initials}
                  </span>
                </div>
                <div>
                  <p className="text-text font-semibold text-sm">{t.name}</p>
                  <p className="text-muted text-xs">
                    {t.role}, {t.company}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
