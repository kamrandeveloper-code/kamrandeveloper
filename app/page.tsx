import HeroSection from "@/components/HeroSection";
import ServicesSection from "@/components/ServicesSection";
import ProjectsSection from "@/components/ProjectsSection";
import AboutSection from "@/components/AboutSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import CaseStudiesTeaser from "@/components/CaseStudiesTeaser";
import BlogTeaser from "@/components/BlogTeaser";
import CTASection from "@/components/CTASection";
import { baseMetadata, BASE_URL, buildAlternates } from "@/lib/seo";
import { getProjects } from "@/lib/api";

export const metadata = baseMetadata({
  alternates: buildAlternates(),
  openGraph: { url: BASE_URL },
});

export default async function HomePage() {
  const projects = await getProjects();
  return (
    <>
      <HeroSection />
      <ServicesSection />
      <ProjectsSection projects={projects} />
      <AboutSection />
      <TestimonialsSection />
      <CaseStudiesTeaser />
      <BlogTeaser />
      <CTASection />
    </>
  );
}
