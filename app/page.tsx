import HeroSection from "@/components/HeroSection";
import ServicesSection from "@/components/ServicesSection";
import ProjectsSection from "@/components/ProjectsSection";
import AboutSection from "@/components/AboutSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import CaseStudiesTeaser from "@/components/CaseStudiesTeaser";
import BlogTeaser from "@/components/BlogTeaser";
import HomeFaqSection from "@/components/HomeFaqSection";
import CTASection from "@/components/CTASection";
import { baseMetadata, BASE_URL, buildAlternates } from "@/lib/seo";
import { getProjects, getFaqs } from "@/lib/api";
import { webpageSchema } from "@/lib/schema";

import { faqSchema } from "@/lib/schema";

export const metadata = baseMetadata({
  alternates: buildAlternates(),
  openGraph: { url: BASE_URL },
});

export default async function HomePage() {
  const [projects, faqs] = await Promise.all([getProjects(), getFaqs()]);
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(webpageSchema({
            url: BASE_URL,
            name: "Kamran — Custom Software Developer for Businesses",
            description: "Custom software developer building management systems, business software, API integrations, and modern web applications.",
            significantLink: [
              `${BASE_URL}/about`,
              `${BASE_URL}/case-studies`,
              `${BASE_URL}/contact`,
            ],
          })),
        }}
      />


      // In HomePage component, add:
      {faqs.length > 0 && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(faqSchema(faqs)),
          }}
        />
      )}

      <HeroSection />
      <ServicesSection />
      <ProjectsSection projects={projects} />
      <AboutSection />
      <TestimonialsSection />
      <CaseStudiesTeaser />
      <BlogTeaser />
      <HomeFaqSection faqs={faqs} />
      <CTASection />
    </>
  );
}
