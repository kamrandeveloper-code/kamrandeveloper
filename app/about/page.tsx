import type { Metadata } from "next";
import Link from "next/link";
import { developer } from "@/data/developer";
import { skillGroups } from "@/data/skills";
import { experiences } from "@/data/experience";
import { personSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "About Kamran — Custom Software Developer",
  description:
    "Kamran is a Full Stack Software Developer based in Pakistan specializing in custom business software, management systems, API integrations, and e-commerce platforms for healthcare, education, and retail industries.",
  openGraph: {
    title: "About Kamran — Custom Software Developer",
    description:
      "Custom software developer for businesses. Specializing in management systems, healthcare software, API integrations, and e-commerce platforms.",
  },
};

const serviceAreas = [
  {
    title: "Custom Business Software",
    desc: "Purpose-built web applications designed around your specific workflows and operations.",
  },
  {
    title: "Management Systems",
    desc: "Hospital, clinic, dental, pharmacy, school, and inventory management platforms.",
  },
  {
    title: "API Integrations",
    desc: "Stripe, PayPal, JazzCash, EasyPaisa, WhatsApp, and third-party service connections.",
  },
  {
    title: "Automation Solutions",
    desc: "Replace repetitive manual processes with software that runs automatically.",
  },
  {
    title: "E-Commerce Platforms",
    desc: "Online stores and multi-vendor marketplaces with full order management.",
  },
];

const industries = [
  { name: "Healthcare", detail: "Clinic, hospital, and patient management systems" },
  { name: "Dental", detail: "Appointment scheduling, billing, and treatment records" },
  { name: "Pharmacy", detail: "Inventory, prescription, and dispensing management" },
  { name: "Education", detail: "School management, attendance, and fee collection" },
  { name: "Retail", detail: "POS systems, inventory tracking, and multi-location management" },
  { name: "E-Commerce", detail: "Multi-vendor marketplaces and online store platforms" },
];

const technologies = [
  { category: "Backend", items: ["ASP.NET Core", "C#", ".NET MVC", "Web API"] },
  { category: "Databases", items: ["SQL Server", "PostgreSQL", "MySQL"] },
  { category: "Frontend", items: ["Next.js", "React", "TypeScript", "Tailwind CSS"] },
  { category: "Tools", items: ["Git", "REST APIs", "JWT", "Entity Framework Core"] },
];

export default function AboutPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema()) }}
      />
      <main className="min-h-screen bg-bg pt-24 pb-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* Header */}
          <div className="mb-14">
            <p className="text-xs font-bold tracking-[0.2em] uppercase text-accent mb-4">About</p>
            <h1 className="font-display font-bold text-4xl sm:text-5xl text-text mb-6 leading-tight">
              About Kamran
            </h1>
            {developer.available && (
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-surface border border-green-500/30 rounded-full">
                <span className="w-2 h-2 rounded-full bg-green-500" />
                <span className="text-green-600 text-sm font-medium">Available for new projects</span>
              </div>
            )}
          </div>

          {/* Biography */}
          <div className="bg-surface border border-border rounded-2xl p-8 mb-12">
            <h2 className="font-display font-bold text-2xl text-text mb-5">Biography</h2>
            <p className="text-muted leading-relaxed text-lg mb-4">
              Kamran is a Full Stack Software Developer based in Pakistan, specializing in custom
              business software, management systems, API integrations, and modern web applications.
            </p>
            <p className="text-muted leading-relaxed mb-4">
              {developer.bio}
            </p>
            <p className="text-muted leading-relaxed">
              Every project starts with understanding the client&apos;s workflow — not with fitting
              their business into a template. The result is software that teams actually use, built
              around real operations rather than generic assumptions.
            </p>
          </div>

          {/* Services */}
          <div className="mb-12">
            <h2 className="font-display font-bold text-2xl text-text mb-2">Services</h2>
            <p className="text-muted mb-6 leading-relaxed">
              Custom software development for businesses that have outgrown spreadsheets and
              off-the-shelf tools.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {serviceAreas.map((service) => (
                <div
                  key={service.title}
                  className="bg-surface border border-border rounded-xl p-5 hover:border-accent/30 transition-colors duration-200"
                >
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-accent flex-shrink-0 mt-2" />
                    <div>
                      <h3 className="font-display font-bold text-text mb-1">{service.title}</h3>
                      <p className="text-muted text-sm leading-relaxed">{service.desc}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-6">
              <Link
                href="/services"
                className="inline-flex items-center gap-2 text-accent hover:underline font-medium text-sm"
              >
                View all services
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>
          </div>

          {/* Industries */}
          <div className="mb-12">
            <h2 className="font-display font-bold text-2xl text-text mb-2">Industries</h2>
            <p className="text-muted mb-6 leading-relaxed">
              Most work is in sectors where standard tools fall short and purpose-built software
              delivers a clear operational advantage.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {industries.map((industry) => (
                <div
                  key={industry.name}
                  className="bg-surface border border-border rounded-xl p-5 hover:border-accent/30 transition-colors duration-200"
                >
                  <h3 className="font-display font-bold text-text mb-1">{industry.name}</h3>
                  <p className="text-muted text-sm leading-relaxed">{industry.detail}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Technologies */}
          <div className="mb-12">
            <h2 className="font-display font-bold text-2xl text-text mb-2">Technologies</h2>
            <p className="text-muted mb-6 leading-relaxed">
              ASP.NET Core, C#, SQL Server, PostgreSQL, React, Next.js, and TypeScript — across
              the full stack.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {technologies.map((group) => (
                <div key={group.category} className="bg-surface border border-border rounded-xl p-5">
                  <h3 className="font-display font-bold text-text text-sm mb-3">{group.category}</h3>
                  <div className="flex flex-wrap gap-2">
                    {group.items.map((item) => (
                      <span key={item} className="px-2.5 py-1 bg-bg border border-border rounded-md text-muted text-xs">
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Skills from data */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-12">
            {skillGroups.map((group) => (
              <div key={group.category} className="bg-surface border border-border rounded-xl p-5">
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-xl">{group.icon}</span>
                  <h3 className="font-display font-bold text-text">{group.category}</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {group.skills.map((skill) => (
                    <span key={skill} className="px-2.5 py-1 bg-bg border border-border rounded-md text-muted text-xs">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Experience */}
          {experiences.length > 0 && (
            <div className="mb-12">
              <h2 className="font-display font-bold text-2xl text-text mb-6">Experience</h2>
              <div className="space-y-6">
                {experiences.map((exp) => (
                  <div key={exp.id} className="bg-surface border border-border rounded-2xl p-6">
                    <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-4">
                      <div>
                        <h3 className="font-display font-bold text-text text-lg">{exp.role}</h3>
                        <p className="text-accent font-medium text-sm">{exp.company}</p>
                      </div>
                      <span className="text-muted text-sm font-medium bg-bg border border-border rounded-lg px-3 py-1 self-start">
                        {exp.period}
                      </span>
                    </div>
                    <p className="text-muted text-sm leading-relaxed mb-4">{exp.description}</p>
                    <ul className="space-y-2">
                      {exp.highlights.map((h) => (
                        <li key={h} className="flex items-start gap-2 text-sm text-muted">
                          <span className="text-accent mt-0.5 flex-shrink-0">→</span>
                          {h}
                        </li>
                      ))}
                    </ul>
                    <div className="flex flex-wrap gap-2 mt-4 pt-4 border-t border-border">
                      {exp.technologies.map((tech) => (
                        <span key={tech} className="px-2.5 py-1 bg-bg border border-border rounded-md text-muted text-xs">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* CTA */}
          <div className="bg-accent/10 border border-accent/20 rounded-2xl p-8">
            <h2 className="font-display font-bold text-2xl text-text mb-2">
              Let&apos;s Work Together
            </h2>
            <p className="text-muted mb-6 leading-relaxed">
              Available for freelance projects. If you have a business software project in mind,
              get in touch to discuss the requirements.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-6 py-3 bg-accent hover:bg-[var(--color-accent-hover)] text-white font-semibold rounded-xl transition-colors duration-200"
              >
                Get In Touch
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
              <Link
                href="/projects"
                className="inline-flex items-center gap-2 px-6 py-3 border border-border hover:border-accent text-muted hover:text-accent rounded-xl transition-all duration-200 text-sm font-medium"
              >
                View past projects
              </Link>
            </div>
          </div>

        </div>
      </main>
    </>
  );
}
