import type { Metadata } from "next";
import Link from "next/link";
import { developer } from "@/data/developer";
import ContactCTAButton from "@/components/ContactCTAButton";
import { skillGroups } from "@/data/skills";
import { experiences } from "@/data/experience";
import { personSchema, breadcrumbSchema, faqSchema } from "@/lib/schema";
import { baseMetadata, BASE_URL, buildAlternates } from "@/lib/seo";

export const metadata: Metadata = baseMetadata({
  title: "About Kamran — Custom Software Developer",
  description:
    "Kamran is a Full Stack Software Developer based in Pakistan specializing in custom business software, management systems, API integrations, and e-commerce platforms for healthcare, education, and retail industries.",
  alternates: buildAlternates("/about"),
  openGraph: {
    title: "About Kamran — Custom Software Developer",
    description:
      "Custom software developer for businesses. Specializing in management systems, healthcare software, API integrations, and e-commerce platforms.",
    url: `${BASE_URL}/about`,
  },
});

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

const aboutMeFaqs = [
  {
    q: "Where are you based?",
    a: "I'm based in Pakistan and work remotely with clients worldwide. Time-zone differences have never been a problem — I'm flexible with communication hours.",
  },
  {
    q: "Are you a freelancer or an agency?",
    a: "I'm a solo freelance developer. You work directly with me from the first call to final delivery — no account managers, no handoffs to junior developers.",
  },
  {
    q: "Do you work with international clients?",
    a: "Yes. I communicate in English and have experience working with clients across different countries. All project communication, proposals, and documentation are in English.",
  },
  {
    q: "What industries do you know well?",
    a: "Healthcare, dental, pharmacy, education, retail, and e-commerce. These are sectors where off-the-shelf tools consistently fall short and custom software makes a real operational difference.",
  },
  {
    q: "Are you available right now?",
    a: "Check the availability badge at the top of this page. When I'm available I take on new projects — when I'm fully booked I'm honest about it so you can plan accordingly.",
  },
];

const aboutWorkFaqs = [
  {
    q: "What kind of projects do you take on?",
    a: "Custom business software — management systems (clinic, school, inventory), POS platforms, e-commerce and multi-vendor marketplaces, API integrations, and web applications built around specific operational workflows.",
  },
  {
    q: "How long does a typical project take?",
    a: "A focused management system or small web app takes 4–6 weeks. A multi-module platform with complex workflows runs 2–4 months. I give a clear timeline estimate in every proposal before work begins.",
  },
  {
    q: "What does your process look like?",
    a: "Discovery call → written proposal (scope, timeline, price) → design & feedback → development in milestones → testing → handover. You see progress throughout, not just at the end.",
  },
  {
    q: "Do you build mobile apps?",
    a: "I build web-based software that works well on all screen sizes including mobile browsers. I don't build native iOS or Android apps — if that's your need I'll tell you upfront.",
  },
  {
    q: "What happens after the project is delivered?",
    a: "You receive full source code, deployment, and a handover session. I include a short support window for bug fixes. Ongoing maintenance or feature additions can be arranged as a separate agreement.",
  },
  {
    q: "Can you work with an existing codebase?",
    a: "Yes. I can review, extend, or refactor existing projects. I'll be upfront if the existing code has issues that need addressing before new work can be added cleanly.",
  },
];

export default function AboutPage() {
  const breadcrumb = breadcrumbSchema([
    { name: "Home", url: BASE_URL },
    { name: "About", url: `${BASE_URL}/about` },
  ]);

  const faqs = faqSchema(
    [...aboutMeFaqs, ...aboutWorkFaqs].map((item) => ({ question: item.q, answer: item.a }))
  );

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema()) }}
      />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqs) }} />
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

          {/* FAQ */}
          <div className="mb-12">
            <p className="text-xs font-bold tracking-[0.2em] uppercase text-accent mb-3">FAQ</p>
            <h2 className="font-display font-bold text-2xl text-text mb-8">Common questions</h2>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">

              {/* About Me */}
              <div>
                <h3 className="font-display font-semibold text-text text-base mb-4 flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-accent inline-block" />
                  About me
                </h3>
                <div className="space-y-2">
                  {aboutMeFaqs.map(({ q, a }) => (
                    <details key={q} className="group bg-surface border border-border rounded-xl overflow-hidden">
                      <summary className="flex items-center justify-between gap-4 px-5 py-4 cursor-pointer list-none select-none hover:bg-bg/50 transition-colors duration-150">
                        <span className="font-medium text-text text-sm">{q}</span>
                        <svg
                          className="w-4 h-4 text-muted shrink-0 transition-transform duration-200 group-open:rotate-45"
                          fill="none" stroke="currentColor" viewBox="0 0 24 24"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                        </svg>
                      </summary>
                      <div className="px-5 pb-4 pt-1 text-muted text-sm leading-relaxed border-t border-border/60">
                        {a}
                      </div>
                    </details>
                  ))}
                </div>
              </div>

              {/* About My Work */}
              <div>
                <h3 className="font-display font-semibold text-text text-base mb-4 flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-accent inline-block" />
                  About my work
                </h3>
                <div className="space-y-2">
                  {aboutWorkFaqs.map(({ q, a }) => (
                    <details key={q} className="group bg-surface border border-border rounded-xl overflow-hidden">
                      <summary className="flex items-center justify-between gap-4 px-5 py-4 cursor-pointer list-none select-none hover:bg-bg/50 transition-colors duration-150">
                        <span className="font-medium text-text text-sm">{q}</span>
                        <svg
                          className="w-4 h-4 text-muted shrink-0 transition-transform duration-200 group-open:rotate-45"
                          fill="none" stroke="currentColor" viewBox="0 0 24 24"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                        </svg>
                      </summary>
                      <div className="px-5 pb-4 pt-1 text-muted text-sm leading-relaxed border-t border-border/60">
                        {a}
                      </div>
                    </details>
                  ))}
                </div>
              </div>

            </div>
          </div>

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
              <ContactCTAButton
                className="inline-flex items-center gap-2 px-6 py-3 bg-accent hover:bg-[var(--color-accent-hover)] text-white font-semibold rounded-xl transition-colors duration-200"
              >
                Get In Touch
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </ContactCTAButton>
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
