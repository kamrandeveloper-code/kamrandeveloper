import HeroSection from "@/components/HeroSection";
import ServicesSection from "@/components/ServicesSection";
import ProjectsSection from "@/components/ProjectsSection";
import AboutSection from "@/components/AboutSection";
import CaseStudiesTeaser from "@/components/CaseStudiesTeaser";
import BlogTeaser from "@/components/BlogTeaser";
import CTASection from "@/components/CTASection";
import { baseMetadata, BASE_URL } from "@/lib/seo";

export const metadata = baseMetadata({
  alternates: { canonical: BASE_URL },
  openGraph: { url: BASE_URL },
});

export default function HomePage() {
  return (
    <>
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
