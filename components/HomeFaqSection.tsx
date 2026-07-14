import type { SiteFaq } from "@/lib/api";
import FaqAccordion from "@/components/FaqAccordion";

interface Props {
  faqs: SiteFaq[];
}

export default function HomeFaqSection({ faqs }: Props) {
  if (faqs.length === 0) return null;

  return (
    <section className="py-16 sm:py-20 bg-bg">
      <div className="max-w-3xl mx-auto px-5 sm:px-8">
        <div className="text-center mb-10">
          <p className="text-xs font-bold tracking-[0.2em] uppercase text-accent mb-3">FAQ</p>
         <h2 className="font-display font-bold text-4xl sm:text-5xl text-text leading-tight">
  Questions you may
  <span className="text-accent"> already have</span>
</h2>

<p className="mt-5 text-muted max-w-2xl mx-auto text-base sm:text-lg leading-relaxed">
  Everything clients usually ask before starting a software project.
</p>
        </div>
        <FaqAccordion items={faqs} initialVisibleCount={7} />
      </div>
    </section>
  );
}
