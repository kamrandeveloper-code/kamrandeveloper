import ContactCTAButton from "@/components/ContactCTAButton";

export default function CTASection() {
  return (
    <section className="relative overflow-hidden bg-accent py-24 lg:py-32">
      {/* Background */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.18),transparent_45%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_right,rgba(0,0,0,0.15),transparent_45%)]" />
      <div className="absolute inset-0 opacity-[0.05] bg-[linear-gradient(rgba(255,255,255,.5)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.5)_1px,transparent_1px)] bg-[size:36px_36px]" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">

        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* Left */}
          <div>

            <span className="inline-flex items-center rounded-full bg-white/10 border border-white/20 px-4 py-2 text-xs font-semibold tracking-wider uppercase text-white mb-8">
              Let's build your next system
            </span>

            <h2 className="font-display font-bold text-white text-4xl sm:text-5xl lg:text-6xl leading-tight">
              Stop adapting your business
              <br />
              to software.
            </h2>

            <h3 className="mt-3 text-3xl sm:text-4xl font-display font-semibold text-white/90 leading-tight">
              Build software that adapts
              <br />
              to your business.
            </h3>

            <p className="mt-8 text-lg leading-8 text-white/80 max-w-xl">
              Whether you need a business management system, customer portal,
              internal dashboard, automation platform, or a completely custom
              web application, I'll build software around the way your business
              already works—not force your business into someone else's system.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">

              <div className="flex items-center gap-3 rounded-xl bg-white/10 border border-white/15 px-4 py-3">
                <div className="h-2.5 w-2.5 rounded-full bg-emerald-400" />
                <span className="text-sm text-white">
                  Free consultation
                </span>
              </div>

              <div className="flex items-center gap-3 rounded-xl bg-white/10 border border-white/15 px-4 py-3">
                <div className="h-2.5 w-2.5 rounded-full bg-emerald-400" />
                <span className="text-sm text-white">
                  No obligation quote
                </span>
              </div>

              <div className="flex items-center gap-3 rounded-xl bg-white/10 border border-white/15 px-4 py-3">
                <div className="h-2.5 w-2.5 rounded-full bg-emerald-400" />
                <span className="text-sm text-white">
                  Built around your workflow
                </span>
              </div>

            </div>

            <div className="mt-10">

              <ContactCTAButton className="inline-flex items-center gap-3 rounded-xl bg-white px-8 py-4 text-lg font-semibold text-accent shadow-2xl transition-all duration-300 hover:-translate-y-1 hover:bg-white/95">

                Schedule a Free Consultation

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

              </ContactCTAButton>

            </div>

          </div>

          {/* Right */}

          <div className="hidden lg:flex justify-center">

            <div className="relative">

              <div className="absolute -inset-8 rounded-full bg-white/10 blur-3xl" />

              <div className="relative w-[430px] rounded-3xl border border-white/15 bg-white/10 backdrop-blur-xl p-8 shadow-2xl">

                <div className="flex items-center gap-2 mb-8">
                  <div className="w-3 h-3 rounded-full bg-red-400" />
                  <div className="w-3 h-3 rounded-full bg-yellow-400" />
                  <div className="w-3 h-3 rounded-full bg-green-400" />
                </div>

                <div className="space-y-5">

                  <div className="rounded-xl bg-white/10 p-5">
                    <p className="text-white/60 text-xs uppercase tracking-wider mb-2">
                      Business Dashboard
                    </p>

                    <div className="h-3 rounded-full bg-white/80 w-2/3 mb-4" />

                    <div className="grid grid-cols-3 gap-3">

                      <div className="rounded-lg bg-white/10 p-4">
                        <div className="h-2 bg-emerald-400 rounded-full w-10 mb-3" />
                        <div className="h-5 bg-white/70 rounded w-12" />
                      </div>

                      <div className="rounded-lg bg-white/10 p-4">
                        <div className="h-2 bg-blue-400 rounded-full w-10 mb-3" />
                        <div className="h-5 bg-white/70 rounded w-12" />
                      </div>

                      <div className="rounded-lg bg-white/10 p-4">
                        <div className="h-2 bg-orange-400 rounded-full w-10 mb-3" />
                        <div className="h-5 bg-white/70 rounded w-12" />
                      </div>

                    </div>

                  </div>

                  <div className="rounded-xl bg-white/10 p-5">
                    <div className="h-2 rounded bg-white/50 w-3/4 mb-4" />
                    <div className="space-y-3">
                      <div className="h-2 rounded bg-white/30" />
                      <div className="h-2 rounded bg-white/20 w-5/6" />
                      <div className="h-2 rounded bg-white/25 w-2/3" />
                    </div>
                  </div>

                </div>

              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}