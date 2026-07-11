const CTA_MARKER = "[[cta-card]]";

const CTA_CARD_HTML = `<div class="cta-embed bg-accent/10 border border-accent/20 rounded-2xl p-8 text-center">
  <h3 class="font-display font-bold text-2xl text-text mb-2">Need help with your business software?</h3>
  <p class="text-muted mb-6">Let&#39;s discuss your requirements.</p>
  <a href="/contact" class="inline-flex items-center gap-2 px-6 py-3 bg-accent hover:bg-[var(--color-accent-hover)] text-white font-semibold rounded-xl transition-colors duration-200">Get In Touch</a>
</div>`;

/**
 * Replaces every `[[cta-card]]` marker left in article content (typed in
 * Markdown mode, or inserted via the Rich Text toolbar button) with the
 * "Need help with your business software?" CTA block, wherever it appears.
 */
export function injectCtaCard(html: string): { html: string; hasCta: boolean } {
  let hasCta = false;
  const output = html.replace(
    new RegExp(`<p>\\s*${CTA_MARKER.replace(/[[\]]/g, "\\$&")}\\s*<\\/p>|${CTA_MARKER.replace(/[[\]]/g, "\\$&")}`, "g"),
    () => {
      hasCta = true;
      return CTA_CARD_HTML;
    },
  );
  return { html: output, hasCta };
}
