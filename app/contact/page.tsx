import ContactPageClient from "./ContactPageClient";
import { baseMetadata, BASE_URL, buildAlternates } from "@/lib/seo";

export const metadata = baseMetadata({
  title: "Contact — Kamran | Custom Software Developer",
  description: "Get in touch for custom software development, business automation, or SaaS projects. I reply within 24 hours.",
  alternates: buildAlternates("/contact"),
  openGraph: {
    title: "Contact — Kamran | Custom Software Developer",
    description: "Get in touch for custom software development, business automation, or SaaS projects.",
    url: `${BASE_URL}/contact`,
  },
});

export default function ContactPage() {
  return <ContactPageClient />;
}