import HeroSection from "@/components/HeroSection";
import ServicesSection from "@/components/ServicesSection";
import ProjectsSection from "@/components/ProjectsSection";
import AboutSection from "@/components/AboutSection";
import CaseStudiesTeaser from "@/components/CaseStudiesTeaser";
import BlogTeaser from "@/components/BlogTeaser";
import CTASection from "@/components/CTASection";
import { baseMetadata } from "@/lib/seo";
import { personSchema, websiteSchema } from "@/lib/schema";

export const metadata = baseMetadata();

export default function HomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema()) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema()) }}
      />
      <HeroSection />
      <ServicesSection />
      <ProjectsSection />
      <AboutSection />
      <CaseStudiesTeaser />
      <BlogTeaser />
      <CTASection />
    </>
  );
}
