export interface Service {
  id: string;
  title: string;
  tagline: string;
  description: string;
  longDescription: string;
  benefits: string[];
  process: { step: string; detail: string }[];
  idealFor: string[];
  engagement: { type: string; timeline: string; note: string };
  technologies: string[];
  featured?: boolean;
}

export const services: Service[] = [
  {
    id: "custom-business-software",
    title: "Custom Business Software",
    tagline: "Tailored software designed around your exact workflows.",
    description:
      "Off-the-shelf tools make you adapt to their limitations. I build web systems from scratch — customer portals, booking platforms, multi-user business apps — that fit your exact process and scale as you grow.",
    longDescription:
      "Most businesses reach a tipping point where generic software becomes the bottleneck instead of the solution. Forms that don't match your process, workarounds that take longer than the original task, data scattered across four different tools. I design and build web-based software around the way your business actually operates — not the other way around. Every module, every screen, every workflow is built to match your team's reality. The result is software your staff will actually use because it makes their job easier, not harder.",
    benefits: [
      "Fits your workflow, not the other way around",
      "Customer portals, booking & multi-user apps",
      "Scales as your business grows",
    ],
    process: [
      { step: "Discovery", detail: "We map your current workflow, identify the bottlenecks, and agree on what the software needs to do." },
      { step: "Design", detail: "I wireframe the system structure and screens so you can see exactly what you're getting before a line of code is written." },
      { step: "Build", detail: "Iterative development with regular check-ins — you see progress weekly, not after six months." },
      { step: "Deploy & Support", detail: "I launch the system, walk your team through it, and stay available for fixes and additions." },
    ],
    idealFor: [
      "SMBs replacing spreadsheets and manual processes",
      "Service businesses needing client or booking portals",
      "Companies outgrowing off-the-shelf SaaS tools",
      "Teams managing complex multi-step workflows",
    ],
    engagement: {
      type: "Fixed-scope project",
      timeline: "4 – 10 weeks",
      note: "Price is agreed upfront based on scope. No surprises.",
    },
    technologies: [".NET MVC", "Next.js", "SQL Server", "C#"],
  },
  {
    id: "management-systems",
    title: "Management Systems",
    tagline: "Complete platforms for healthcare, education & retail.",
    description:
      "Complete management platforms for healthcare, education, and retail. Patient records, appointment scheduling, billing, inventory, attendance — built for your specific industry requirements.",
    longDescription:
      "Industry-specific management systems need to handle the complexity of real operations — not just store data. A dental clinic needs appointment scheduling that respects chair availability, billing tied to procedures, and patient history that's instantly accessible during a consultation. A school needs attendance that feeds into reports, fee tracking per student, and parent communication in one place. I build these systems from scratch, covering every module your operation requires, with the exact logic your industry demands. No feature gaps, no 'that's not supported in this plan' limitations.",
    benefits: [
      "Hospital, dental, pharmacy & school systems",
      "Patient records, scheduling & billing",
      "Built for your industry's exact requirements",
    ],
    process: [
      { step: "Requirements Mapping", detail: "We list every module needed — records, billing, scheduling, reports — and agree on the scope." },
      { step: "Module Development", detail: "Each module is built and tested independently before being connected to the rest of the system." },
      { step: "System Integration", detail: "All modules are integrated and tested together as a complete, end-to-end platform." },
      { step: "Training & Handover", detail: "I train your team on the system and provide documentation so they can operate it independently." },
    ],
    idealFor: [
      "Clinics, hospitals and diagnostic centres",
      "Pharmacies and dental practices",
      "Schools, colleges and training institutes",
      "Retail chains needing inventory management",
    ],
    engagement: {
      type: "Fixed-scope project",
      timeline: "6 – 14 weeks",
      note: "Modular build — each section is delivered and tested independently.",
    },
    technologies: [".NET MVC", "Web API", "SQL Server", "C#"],
  },
  {
    id: "admin-dashboards",
    title: "Admin Dashboards",
    tagline: "Analytics and operational dashboards your team will actually use.",
    description:
      "Internal tools that consolidate your data and let your team take action without switching between five different apps. Role-based access, real-time data, and interfaces your non-technical staff will actually use.",
    longDescription:
      "A good dashboard does one thing: puts the right information in front of the right person at the right moment. Not a wall of charts nobody looks at — a focused operational tool that surfaces what your team needs to make decisions and take action. I build internal dashboards that pull from your existing data sources, present it clearly, and let staff act directly without needing a developer to run a report. Role-based access ensures every team member sees exactly what's relevant to their function, nothing more.",
    benefits: [
      "All your data consolidated in one place",
      "Role-based access for every team member",
      "Real-time reporting & operational controls",
    ],
    process: [
      { step: "Data Audit", detail: "We identify what data exists, where it lives, and what decisions it needs to support." },
      { step: "Dashboard Design", detail: "We agree on the KPIs, layouts and actions for each role before building anything." },
      { step: "Build & Connect", detail: "I build the UI and connect it to your data sources — databases, APIs, spreadsheets." },
      { step: "Access & Rollout", detail: "Role permissions are configured and the dashboard is rolled out to your team with a walkthrough." },
    ],
    idealFor: [
      "Operations managers needing live visibility",
      "Business owners tracking performance across locations",
      "Teams using multiple disconnected tools daily",
      "Organisations that rely on manual reporting",
    ],
    engagement: {
      type: "Fixed-scope project",
      timeline: "3 – 6 weeks",
      note: "Delivered iteratively — core dashboard first, then additional views.",
    },
    technologies: ["Next.js", "React", ".NET API", "PostgreSQL"],
  },
  {
    id: "api-integrations",
    title: "API Integrations",
    tagline: "Payment gateways, CRMs & third-party service integrations.",
    description:
      "I build secure, well-documented APIs and handle the integrations that let your systems share data in real time — payment gateways, CRMs, logistics services, or any third-party tool your business depends on.",
    longDescription:
      "Modern businesses run on connected systems — but getting those systems to actually talk to each other is where things break down. I design and build the API layer that makes your systems communicate reliably: payment processors that confirm transactions without double-charging, CRM syncs that keep your customer records consistent, logistics APIs that update order status automatically. Every integration is built with proper error handling, retry logic, and logging so you're never flying blind when something goes wrong.",
    benefits: [
      "Stripe, JazzCash, EasyPaisa & PayPal",
      "Real-time data sync between your systems",
      "Secure, documented API design & webhooks",
    ],
    process: [
      { step: "Integration Audit", detail: "We map what needs to connect to what, and identify which APIs are involved." },
      { step: "Integration Design", detail: "I design the data flows, error handling, and retry logic before writing code." },
      { step: "Implementation", detail: "Each integration is built, secured with proper authentication, and tested end-to-end." },
      { step: "Monitoring Setup", detail: "Logging, alerts, and documentation are put in place so issues are caught before they cause problems." },
    ],
    idealFor: [
      "Businesses adding payment processing to their platform",
      "Companies connecting their software to a CRM or ERP",
      "Teams automating data sync between internal systems",
      "Platforms that need to send real-time notifications or webhooks",
    ],
    engagement: {
      type: "Fixed per integration",
      timeline: "1 – 3 weeks per integration",
      note: "Each integration is scoped and priced independently.",
    },
    technologies: ["ASP.NET Core", "REST", "Webhooks", "JWT"],
  },
  {
    id: "ai-powered-features",
    title: "AI-Powered Features",
    tagline: "Intelligent automation embedded in your business workflows.",
    description:
      "Not just a chatbot. I integrate large language models and AI APIs into .NET and Next.js applications — smart document processing, automated content generation, AI assistants embedded in your workflows — so the intelligence actually serves a business purpose.",
    longDescription:
      "The most valuable AI features aren't standalone products — they're capabilities embedded directly in the tools your team already uses. A document analysis feature inside your management system. An AI assistant that knows your product catalog. An automated workflow that drafts responses to common client enquiries. I identify where AI genuinely reduces work or improves decisions in your specific operation, then integrate it properly — not as a demo, but as a production-grade feature that handles real volume with the right guardrails.",
    benefits: [
      "Smart document processing & analysis",
      "AI assistants built into your workflows",
      "Automated content & intelligent decisions",
    ],
    process: [
      { step: "Use Case Definition", detail: "We identify exactly where AI adds value vs. where it would just add complexity and cost." },
      { step: "Prototype", detail: "I build a small, focused proof of concept so you can see the output quality before committing to a full build." },
      { step: "Integration", detail: "The AI feature is integrated into your existing system with proper prompt engineering and output validation." },
      { step: "Tuning & Monitoring", detail: "We refine the feature based on real usage and monitor performance and API costs over time." },
    ],
    idealFor: [
      "Businesses processing large volumes of documents",
      "Teams that spend hours on repetitive content tasks",
      "Platforms wanting to offer AI-powered features to their users",
      "Companies looking to automate first-response customer communication",
    ],
    engagement: {
      type: "Prototype → Full build",
      timeline: "2 weeks prototype, then 4 – 8 weeks",
      note: "We start small to validate output quality before the full build.",
    },
    technologies: ["OpenAI API", "Claude API", ".NET", "Next.js"],
    featured: true,
  },
  {
    id: "ecommerce-solutions",
    title: "E-Commerce Solutions",
    tagline: "Online stores and multi-vendor marketplaces.",
    description:
      "From single-store e-commerce to complex multi-vendor marketplaces with separate vendor and admin dashboards. Full product catalog, order management, and payment processing.",
    longDescription:
      "Generic e-commerce platforms work until your requirements go beyond what the plugin marketplace can handle. Custom pricing rules, vendor commission structures, product configurators, industry-specific checkout flows — these are the things that a Shopify theme can't solve. I build e-commerce platforms from the ground up: full product catalog management, cart and checkout, payment processing, order tracking, and where needed, separate vendor dashboards with their own inventory, earnings, and fulfilment controls. The result is a store that works exactly how your business model requires.",
    benefits: [
      "Single stores to multi-vendor marketplaces",
      "Full catalog, orders & vendor dashboards",
      "Integrated payment & inventory management",
    ],
    process: [
      { step: "Product & Catalog Mapping", detail: "We define the catalog structure, product variants, pricing rules, and any custom fields your products need." },
      { step: "Store Build", detail: "Product pages, cart, checkout and payment integration are built and tested with real transactions." },
      { step: "Vendor & Admin Setup", detail: "For multi-vendor builds, I add vendor dashboards, commission logic, and a separate admin control panel." },
      { step: "Launch & Optimise", detail: "We go live after full payment and order flow testing, with analytics in place from day one." },
    ],
    idealFor: [
      "Retailers moving their business online",
      "Entrepreneurs launching multi-vendor marketplaces",
      "Businesses with complex product configuration or pricing",
      "Companies adding a direct sales channel to an existing platform",
    ],
    engagement: {
      type: "Fixed-scope project",
      timeline: "5 – 12 weeks",
      note: "Multi-vendor builds take longer — scoped after a detailed discovery call.",
    },
    technologies: ["Next.js", ".NET Web API", "PostgreSQL", "Stripe"],
  },
];
