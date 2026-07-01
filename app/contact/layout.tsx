import type { Metadata } from "next";
import { baseMetadata, BASE_URL, buildAlternates } from "@/lib/seo";

export const metadata: Metadata = baseMetadata({
  title: "Contact",
  description: "Get in touch to discuss your custom software project. Available for freelance work.",
  ...buildAlternates("/contact"),
  openGraph: {
    title: "Contact Kamran — Custom Software Developer",
    description: "Discuss your project requirements. Available for freelance work.",
    url: `${BASE_URL}/contact`,
  },
});

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return children;
}
