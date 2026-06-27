export interface Service {
  id: string;
  title: string;
  tagline: string;
  description: string;
  technologies: string[];
  featured?: boolean;
}

export const services: Service[] = [
  {
    id: "custom-business-software",
    title: "Custom Business Software",
    tagline: "Tailored software solutions designed around your unique business workflows.",
    description:
      "Off-the-shelf tools make you adapt to their limitations. I build web systems from scratch — customer portals, booking platforms, multi-user business apps — that fit your exact process and scale as you grow.",
    technologies: [".NET MVC", "Next.js", "SQL Server", "C#"],
  },
  {
    id: "management-systems",
    title: "Management Systems",
    tagline: "Hospital, pharmacy, dental, inventory and school management systems.",
    description:
      "Complete management platforms for healthcare, education, and retail. Patient records, appointment scheduling, billing, inventory, attendance — built for your specific industry requirements.",
    technologies: [".NET MVC", "Web API", "SQL Server", "C#"],
  },
  {
    id: "admin-dashboards",
    title: "Admin Dashboards",
    tagline: "Analytics, reporting and operational dashboards for your team.",
    description:
      "Internal tools that consolidate your data and let your team take action without switching between five different apps. Role-based access, real-time data, and interfaces your non-technical staff will actually use.",
    technologies: ["Next.js", "React", ".NET API", "PostgreSQL"],
  },
  {
    id: "api-integrations",
    title: "API Integrations",
    tagline: "Stripe, PayPal, JazzCash, EasyPaisa, WhatsApp, third-party integrations.",
    description:
      "I build secure, well-documented APIs and handle the integrations that let your systems share data in real time — payment gateways, CRMs, logistics services, or any third-party tool your business depends on.",
    technologies: ["ASP.NET Core", "REST", "Webhooks", "JWT"],
  },
  {
    id: "ai-powered-features",
    title: "AI-Powered Features",
    tagline: "Document analysis, AI assistants, automation and intelligent workflows.",
    description:
      "Not just a chatbot. I integrate large language models and AI APIs into .NET and Next.js applications — smart document processing, automated content generation, AI assistants embedded in your workflows — so the intelligence actually serves a business purpose.",
    technologies: ["OpenAI API", "Claude API", ".NET", "Next.js"],
    featured: true,
  },
  {
    id: "ecommerce-solutions",
    title: "E-Commerce Solutions",
    tagline: "Online stores and multi-vendor marketplaces.",
    description:
      "From single-store e-commerce to complex multi-vendor marketplaces with separate vendor and admin dashboards. Full product catalog, order management, and payment processing.",
    technologies: ["Next.js", ".NET Web API", "PostgreSQL", "Stripe"],
  },
];
