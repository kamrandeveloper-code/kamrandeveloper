// One-off backfill script: pushes the original static content (blog posts,
// services, and case studies derived from the old projects list) into the
// new database-backed API. Safe to run once after migrations are applied and
// an admin account exists. Re-running is safe — entries that already exist
// (matching slug) are reported as skipped (409) rather than duplicated.
//
// Usage:
//   API_BASE_URL=http://localhost:5081 ADMIN_USERNAME=admin ADMIN_PASSWORD=... node scripts/seed.mjs

const API_BASE_URL = process.env.API_BASE_URL ?? "http://localhost:5081";
const ADMIN_USERNAME = process.env.ADMIN_USERNAME;
const ADMIN_PASSWORD = process.env.ADMIN_PASSWORD;

if (!ADMIN_USERNAME || !ADMIN_PASSWORD) {
  console.error("Set ADMIN_USERNAME and ADMIN_PASSWORD environment variables before running this script.");
  process.exit(1);
}

const blogPosts = [
  {
    slug: "when-to-replace-excel-with-custom-software",
    title: "When Should You Replace Excel With Custom Software?",
    category: "Business",
    date: "2025-11-01",
    excerpt:
      "Excel is a powerful tool, but there comes a point where it becomes a liability. Here are the clear signs your business has outgrown spreadsheets.",
    tags: ["Business Software", "Excel", "Automation", "Management Systems"],
    content: `## When Should You Replace Excel With Custom Software?

Excel is one of the most widely used business tools in the world. It is flexible, familiar, and available on almost every computer. Most businesses start with Excel for everything — tracking inventory, managing customer lists, recording sales, calculating payroll. And for a small operation, it works reasonably well.

But Excel was designed as a general-purpose calculation tool, not a business operations platform. As your business grows, what started as a convenient spreadsheet starts to become a source of errors, delays, and frustration. The question is not whether you will outgrow Excel — most growing businesses do — but recognizing when that moment has arrived.

### Sign 1: Multiple People Need to Work on the Same Data Simultaneously

Excel files are designed for single-user access. When two people try to edit the same file at the same time, conflicts happen. One person overwrites the other's changes. You end up with "inventory_final_v2_REAL.xlsx" and still no idea which version is authoritative. Teams work around this by emailing files back and forth, which creates version control nightmares.

Custom software built for multiple users handles concurrent access properly. Changes by one user are immediately visible to others. No version conflicts. No emailed spreadsheets. The data lives in one place and everyone works from the same source of truth.

### Sign 2: Your Data Entry Is Repetitive and Error-Prone

When your team spends significant time copying data from one spreadsheet to another, or re-entering the same customer information in three different files, that is time wasted — and each copy is an opportunity for a mistake. A typo in a customer name means the same customer exists twice in your records. A miskeyed number in an invoice means your accounts are wrong.

Custom software eliminates repetitive data entry through proper data relationships. A customer is entered once and linked everywhere they appear — orders, invoices, correspondence. Change their phone number in one place and it updates everywhere.

### Sign 3: You Cannot Trust Your Reports

When business decisions depend on a report generated from a spreadsheet, and that report requires manually pulling numbers from multiple files and pasting them into a summary sheet, the margin for error is significant. One wrong formula, one missed row, one accidentally deleted column — and your report is wrong but looks right.

Custom software generates reports from a single, consistent data source. The numbers are always accurate because they come directly from the operational data. You can drill down from a summary to the individual transactions that make it up. You can run the same report for any date range instantly.

### Sign 4: You Have No Audit Trail

When something goes wrong — an inventory discrepancy, a billing error, a missing order — a spreadsheet gives you no way to understand what happened. Who changed what and when? Excel does not track this by default.

Custom software maintains a complete audit trail. Every change is logged with the user, timestamp, and what changed. When discrepancies occur, you can trace them back to their source.

### Sign 5: Your Processes Are Getting More Complex

Spreadsheets work well for simple, linear processes. But real business processes have branches, approvals, notifications, and dependencies. An order that needs manager approval above a certain value. A purchase order that automatically creates a task for the receiving team. An invoice that triggers a payment reminder after thirty days.

Implementing these workflows in Excel requires complex formulas, macros, and manual follow-up. Custom software handles workflow logic natively — approvals, notifications, automated actions — without manual intervention.

### What Custom Software Costs vs. What It Saves

The question business owners often ask is whether custom software is worth the cost. The real question is what the current manual processes are costing you. Count the hours your team spends on data entry, report preparation, and error correction. Calculate the cost of decisions made on inaccurate data. Add the risk of errors in invoicing or inventory.

For most businesses that have genuinely outgrown spreadsheets, custom software pays for itself within the first year through time savings and error reduction alone.

### What to Do Next

If several of these signs apply to your business, it is worth having a conversation with a software developer about what a purpose-built system would look like. The goal is not to build the most sophisticated system possible — it is to build the simplest system that solves your specific problems cleanly and reliably.`,
    sortOrder: 0,
  },
  {
    slug: "custom-software-vs-saas",
    title: "Custom Software vs SaaS: What's Right for Your Business?",
    category: "Business",
    date: "2025-11-15",
    excerpt:
      "SaaS tools are fast to deploy and cheap to start. Custom software is built for you. Here is how to choose.",
    tags: ["Business Software", "SaaS", "Custom Development", "ROI"],
    content: `## Custom Software vs SaaS: What's Right for Your Business?

Every growing business faces this decision: should you use an off-the-shelf SaaS product, or commission custom software built specifically for your operations? Both have legitimate use cases. The right answer depends on your specific situation, not on a general preference for one approach over the other.

### What SaaS Does Well

SaaS products like accounting software, CRM platforms, and project management tools exist because they solve problems that most businesses have in roughly the same way. They are fast to deploy — you sign up, configure some settings, and start working. They are maintained by the vendor, who handles security updates, backups, and new features. The upfront cost is minimal, typically a monthly subscription.

For genuinely common business functions where the standard approach works for your processes, SaaS is often the right choice. There is no need to reinvent the wheel when the existing wheel fits your vehicle.

### Where SaaS Falls Short

The fundamental limitation of SaaS is that it is built for a generic customer, not for you. The workflows are designed around what the vendor decided was the best way to do things. If your business does things differently — because of your industry, your customer relationships, your regulatory environment, or simply the way you have always operated — you face a choice: change how your business works to fit the software, or live with workarounds.

Most businesses end up with a combination of both. The SaaS tool handles eighty percent of the workflow but the remaining twenty percent requires manual steps, exports to spreadsheets, and employees who know which buttons not to press. This friction has a cost that does not show up in the SaaS subscription price.

### When Custom Software Makes Sense

Custom software makes sense when your business processes are genuinely different from the generic model, when the differences matter for your operations, and when the cost of accommodating those differences in a SaaS product exceeds the cost of building something purpose-built.

Common scenarios where custom software wins:

**Industry-specific requirements.** A dental clinic has workflows around appointment types, treatment codes, and patient medical history that generic appointment booking software does not handle well. A school has fee structures, attendance patterns, and parent communication requirements that generic school software may not support. Businesses in specific industries often find that the available SaaS options are close but not quite right, requiring constant workarounds.

**Integration complexity.** When your business requires tight integration between multiple systems — your ERP feeds your accounting software which feeds your reporting dashboard which syncs with your e-commerce platform — the integration work on top of multiple SaaS products can exceed the cost of building a unified custom system.

**Data ownership and control.** SaaS data lives on the vendor's servers. If the vendor goes out of business, raises prices dramatically, or changes their product in ways that break your workflow, you are dependent on their decisions. Custom software gives you complete control over your data and your system.

**Long-term cost at scale.** SaaS pricing often scales with users or usage. For a small team, the monthly cost is negligible. For a larger organization, SaaS costs can become substantial. A custom system has a higher upfront cost but no ongoing per-user fees.

### Making the Decision

The practical approach is to evaluate your specific situation against these factors. If your processes are standard, your team is small, and you need to move fast, SaaS is likely the right starting point. If your processes are genuinely different, your team is growing, and you have been wrestling with SaaS workarounds for years, custom software is worth serious consideration.

The decision is not permanent. Many businesses start with SaaS and migrate to custom software as they grow. Others use custom software for their core operations and SaaS for peripheral functions like email marketing or accounting. The goal is to match the tool to the problem, not to commit to a philosophy.`,
    sortOrder: 1,
  },
  {
    slug: "building-management-systems-aspnet-core",
    title: "Building Management Systems with ASP.NET Core",
    category: "Technical",
    date: "2025-12-01",
    excerpt:
      "A practical guide to architecting multi-module management systems with ASP.NET Core — covering project structure, data modeling, authentication, and reporting.",
    tags: ["ASP.NET Core", "C#", ".NET", "Architecture", "SQL Server"],
    content: `## Building Management Systems with ASP.NET Core

Management systems — school management, hospital management, inventory management, clinic management — share a common architectural pattern. They involve multiple modules (enrollment, billing, scheduling, reporting), role-based access control, complex relational data, and a mix of transactional operations and analytical queries. ASP.NET Core is well-suited for this type of application.

This article covers the practical architectural decisions I have made across several management system projects.

### Project Structure

For a management system, I organize the project around features rather than technical layers. Instead of having a single Controllers folder, a single Services folder, and a single Repositories folder spanning the entire application, I group related code together by module.

A school management system might be organized as:

Features/
  Students/
    StudentsController.cs
    StudentService.cs
    StudentModels.cs
  Attendance/
    AttendanceController.cs
    AttendanceService.cs
    AttendanceModels.cs
  Fees/
    FeesController.cs
    FeeService.cs
    FeeModels.cs

This structure makes it clear where to find code related to a specific business function. When a requirement changes for the fee module, all affected code is in one place.

### Data Modeling for Management Systems

Management systems involve complex relationships. Students belong to classes. Classes have subjects. Subjects are taught by teachers. Teachers have schedules. Getting the data model right early saves significant refactoring later.

A few principles that have served me well:

**Use surrogate keys consistently.** Every table has a primary key of type int or Guid. Never use business identifiers like student roll numbers or employee codes as primary keys, because these sometimes change.

**Model time explicitly.** Management systems are heavily time-dependent. A student's class assignment is valid for an academic year. A fee structure applies from a certain date. A teacher's schedule is for a specific term. Model these temporal relationships in the database rather than trying to infer them from current state.

**Separate operational and reporting data access.** Transactional operations — marking attendance, recording a payment — need fast, targeted queries on specific records. Reporting queries need to aggregate data across many records. Design your queries and indexes accordingly. For complex reports, consider a separate read model built by projecting from the operational database.

### Authentication and Authorization

Role-based access control is essential in management systems. An administrator sees everything. A teacher sees their own students and classes. A parent sees only their child's data. A front desk staff member can book appointments but cannot modify clinical records.

ASP.NET Core's built-in authorization system with policies works well here. Define policies that express business rules clearly:

    services.AddAuthorization(options =>
    {
        options.AddPolicy("CanManageFees", policy =>
            policy.RequireRole("Admin", "AccountsStaff"));

        options.AddPolicy("CanViewStudentRecords", policy =>
            policy.RequireRole("Admin", "Teacher", "Parent"));
    });

For data-level access control — ensuring a teacher can only see their own students, not all students — implement this in the service layer by filtering queries based on the current user's context.

### Handling Complex Business Rules

Management systems contain complex business rules that change frequently. Fee calculations involving discounts, scholarships, and sibling concessions. Attendance percentage calculations with configurable thresholds. Grade calculations with weighted components.

The key architectural decision is where to put this logic. Avoid putting it in controllers or directly in database queries. Business rules belong in the service layer, in dedicated domain model methods, or in separate rule classes that can be tested and changed independently.

For particularly complex rules that business users need to configure — like fee discount structures or attendance thresholds — model the rules as data in the database rather than as code. This allows non-technical administrators to adjust rules without requiring a code deployment.

### Reporting

Reporting is where management systems live or die in practice. Teachers need daily attendance reports. Administrators need monthly revenue summaries. Parents need exam result reports. The quality of these reports often determines whether users trust and adopt the system.

I use a few approaches depending on the complexity of the report:

For simple tabular reports, direct SQL queries with proper indexing work well. For complex cross-module aggregations, materialized views or dedicated reporting queries that denormalize data into a report-friendly structure avoid performance problems. For scheduled reports, background jobs that generate and cache results mean users are not waiting for expensive queries.

### Deployment Considerations

Most management systems I build are deployed in one of two patterns: intranet deployment on the client's local network, or cloud deployment on a VPS with a public URL. The intranet pattern is common for sensitive applications like clinic systems where patient data must stay local. Cloud deployment enables remote access and is simpler to maintain for clients without IT staff.

For intranet deployment, IIS on Windows Server is the standard choice. For cloud deployment, a Linux VPS with Nginx as a reverse proxy in front of the .NET application works reliably and is cost-effective.

### Conclusion

Management systems are technically demanding because they combine multiple concerns: complex domain logic, multi-user access control, mixed transactional and analytical workloads, and high user expectations for reliability. ASP.NET Core provides the foundation — dependency injection, middleware, authentication — but the architecture above the framework determines whether the system remains maintainable as requirements evolve.`,
    sortOrder: 2,
  },
  {
    slug: "if-it-works-dont-touch-it-developer-mindset",
    title: "\"If It Works, Don't Touch It\" — The Developer Mindset That Costs You More Than You Think",
    category: "Technical",
    date: "2026-07-03",
    excerpt:
      "Why this common advice is actually one of the most expensive habits in software development — and what senior developers do instead.",
    tags: [
      "Software Development",
      "Junior Developer",
      "Senior Developer",
      "Refactoring",
      "Clean Code",
      "Technical Debt",
      "Programming Best Practices",
      "Code Maintainability",
      "Software Engineering",
    ],
    content: `## "If It Works, Don't Touch It" — The Developer Mindset That Costs You More Than You Think

### Why this common advice is actually one of the most expensive habits in software development

Every developer has heard it. Maybe you've said it yourself:

"Don't touch that. It works."

And honestly? In the moment, it makes sense. The code runs. Tests pass. Users are happy. Why would you risk breaking something by changing it?

Here's the problem: working code and healthy code are not the same thing.

This article breaks down why "if it works, don't touch it" is a trap — and what senior developers do instead.

### What Does "If It Works, Don't Touch It" Actually Mean?

On the surface, it's a principle of risk management. Don't fix what isn't broken. Don't refactor for the sake of refactoring. Don't introduce unnecessary changes.

That reasoning is sound — in theory.

In practice, this phrase gets applied to code that:

- Has zero test coverage
- Nobody on the team fully understands
- Relies on undocumented behavior
- Uses outdated patterns that nobody would write today
- Contains "quick fixes" that accumulated over years

This code doesn't work — it survives. And there's a meaningful difference.

### The Junior vs Senior Developer Mindset

Here's the core difference that separates senior developers from junior developers:

| | Junior Developer | Senior Developer |
|---|---|---|
| Primary goal | Make it work | Make it sustainable |
| Attitude toward legacy code | Leave it alone | Pay down the debt |
| Risk assessment | "What if I break it?" | "What if I don't fix it?" |
| Before changing code | Just changes it | Writes tests first |
| Long-term thinking | Ships the feature | Ships the feature + maintainability |

The junior developer protects the code from change. The senior developer protects the codebase from decay.

### Why "Don't Touch It" Compounds the Problem

Code debt doesn't stay flat — it grows.

Every line of code that nobody understands becomes a blocker. Every untested function becomes a risk that scales with your system. Every "quick fix" that was never properly integrated becomes a bug waiting to happen at the worst possible time.

The cost isn't felt immediately. It's felt when:

- A new feature takes three times longer because the existing code is spaghetti
- A production incident occurs and nobody can trace the root cause
- A developer leaves and takes the only understanding of a critical module with them
- You need to scale the system and the foundation can't support it

By then, the cost of fixing it is 10x what it would have been to address it when the code was fresh in your mind.

### What Senior Developers Do Instead

**1. Write tests before touching anything.** If the code has no tests, the first step isn't refactoring — it's adding test coverage. This gives you a safety net so changes are verified, not guessed.

**2. Refactor in small, safe increments.** Don't rewrite the entire module in one sitting. Make small, deliberate changes. Each change should leave the codebase in a better state than before.

**3. Ask: will the next developer understand this?** If you came back to this code in six months with no context, would you know what it does? If not, it's not working — it's just surviving.

**4. Pay down debt intentionally.** Technical debt is real. The mature approach isn't pretending it doesn't exist — it's planning when and how to address it before it becomes unmanageable.

**5. Document the "why."** Code tells you what. Comments (when they're actually useful) tell you why. A brief comment explaining a non-obvious decision saves hours of confusion later.

### When "Don't Touch It" Is Actually Correct

To be fair — there are legitimate cases where this principle applies:

- Legacy code with zero test coverage and high business risk — sometimes the right call is to not touch it until you have proper safeguards
- Code that is being deprecated — if the system is being replaced, spending time refactoring it is a waste
- Critical hotpaths with proven stability — untested changes to heavily-used code can introduce hard-to-catch regressions

The key word is judgment. A senior developer knows when to touch it and when to leave it. A junior developer defaults to "leave it alone" in almost every situation.

### The Real Skill Is Knowing When to Refactor

The difference between a junior and senior developer isn't that seniors refactor everything. It's that they have the judgment to know when refactoring is worth the risk — and the discipline to do it safely by writing tests first, keeping changes small, and verifying everything before it ships.

"If it works, don't touch it" is safe advice for the short term. It's reckless advice for anyone building software that needs to last.

The goal isn't to never touch working code. The goal is to touch it intentionally, safely, and better than before.`,
    sortOrder: 3,
  },
];

const services = [
  {
    slug: "custom-business-software",
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
    engagement: { type: "Fixed-scope project", timeline: "4 – 10 weeks", note: "Price is agreed upfront based on scope. No surprises." },
    technologies: [".NET MVC", "Next.js", "SQL Server", "C#"],
    featured: false,
    sortOrder: 0,
  },
  {
    slug: "management-systems",
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
    engagement: { type: "Fixed-scope project", timeline: "6 – 14 weeks", note: "Modular build — each section is delivered and tested independently." },
    technologies: [".NET MVC", "Web API", "SQL Server", "C#"],
    featured: false,
    sortOrder: 1,
  },
  {
    slug: "admin-dashboards",
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
    engagement: { type: "Fixed-scope project", timeline: "3 – 6 weeks", note: "Delivered iteratively — core dashboard first, then additional views." },
    technologies: ["Next.js", "React", ".NET API", "PostgreSQL"],
    featured: false,
    sortOrder: 2,
  },
  {
    slug: "api-integrations",
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
    engagement: { type: "Fixed per integration", timeline: "1 – 3 weeks per integration", note: "Each integration is scoped and priced independently." },
    technologies: ["ASP.NET Core", "REST", "Webhooks", "JWT"],
    featured: false,
    sortOrder: 3,
  },
  {
    slug: "ai-powered-features",
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
    engagement: { type: "Prototype → Full build", timeline: "2 weeks prototype, then 4 – 8 weeks", note: "We start small to validate output quality before the full build." },
    technologies: ["OpenAI API", "Claude API", ".NET", "Next.js"],
    featured: true,
    sortOrder: 4,
  },
  {
    slug: "ecommerce-solutions",
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
    engagement: { type: "Fixed-scope project", timeline: "5 – 12 weeks", note: "Multi-vendor builds take longer — scoped after a detailed discovery call." },
    technologies: ["Next.js", ".NET Web API", "PostgreSQL", "Stripe"],
    featured: false,
    sortOrder: 5,
  },
];

const caseStudies = [
  {
    slug: "dental-clinic-management",
    title: "Dental Clinic Management System",
    description:
      "A complete practice management system for dental clinics covering patient records, appointment scheduling, billing, and clinical notes.",
    longDescription:
      "A full-featured dental clinic management system built with .NET MVC and SQL Server. Covers patient management, appointment scheduling with calendar view, billing and invoices, treatment records, and clinical notes with procedure tracking.",
    industry: "Healthcare",
    problem:
      "Manual patient management with paper records and phone-based appointment scheduling led to double bookings, lost patient history, and billing errors.",
    solution:
      "Built a complete clinic management system with digital patient records, calendar-based appointment scheduling, automated billing, and treatment history tracking.",
    result:
      "Clinic administration time reduced significantly. No more double bookings. Patient history instantly accessible during consultations.",
    features: [
      "Patient registration and records",
      "Appointment calendar with conflict detection",
      "Billing and invoice generation",
      "Treatment notes and procedure tracking",
      "Reporting and analytics",
    ],
    architecture: "Single-tier .NET MVC application with SQL Server backend. Deployed as intranet application within clinic network.",
    tech: [".NET MVC", "SQL Server", "C#", "JavaScript", "Bootstrap"],
    category: "Healthcare Software",
    imageUrl: null,
    featured: true,
    demo: { url: "https://demo.kamrandev.com/dental", email: "demo@dental.com", password: "Demo@1234" },
    content: `## Building a Dental Clinic Management System

A dental clinic was managing patient appointments on paper, billing manually, and storing patient history in filing cabinets. When the practice grew to three dentists and hundreds of active patients, these manual processes became unmanageable. Appointments were double-booked, patient records were hard to locate, and billing errors were common.

### The Requirements

The clinic needed a system that all three dentists and two front desk staff could use simultaneously. Core requirements included a patient registration system that captured demographics, medical history, and insurance information; an appointment calendar that prevented double bookings across multiple dentist schedules; digital treatment records where dentists could record procedures, notes, and prescriptions during consultations; billing that automatically calculated procedure costs and generated invoices; and reports for daily appointment lists, revenue summaries, and patient visit history.

### System Architecture

I built the system as a .NET MVC application deployed as an intranet web application on the clinic's local network. SQL Server handles the database. The choice of an intranet application rather than a cloud application was intentional — patient data sensitivity, the clinic's existing IT infrastructure, and offline operation requirements all pointed toward a locally hosted system.

### Patient Management

The patient module is the core of the system. Each patient record stores personal details, contact information, emergency contacts, medical history including allergies and existing conditions, insurance details, and a complete visit history linking to every appointment and treatment record. The search functionality allows staff to find patients by name, phone number, or patient ID. New patient registration walks staff through a structured form designed to capture all required information without overwhelming patients during check-in.

### Appointment Scheduling

The appointment calendar was the most complex feature. It displays all three dentist schedules side by side with a daily and weekly view. When booking an appointment, the system checks for conflicts across the selected dentist's schedule and warns if the requested slot overlaps with an existing appointment. Each appointment includes the patient, dentist, appointment type, estimated duration, and notes. The front desk can send appointment reminders manually through the system.

### Billing and Treatment Records

Dentists record treatment notes during consultations using a structured form that captures the tooth number, procedure performed, materials used, and clinical notes. These records link directly to billing — when a treatment is recorded, the associated procedure fee is automatically added to the patient's account. The billing module generates itemized invoices for each visit and tracks payment status. End-of-day reports show total revenue, treatments performed, and outstanding balances.

### Outcome

The clinic has been using the system for over a year. Double bookings are eliminated. Dentists report that having instant access to patient history during consultations has improved the quality of care. The billing errors that previously required manual reconciliation have essentially disappeared. The front desk processes appointments and billing significantly faster than the manual process.`,
    sortOrder: 0,
  },
  {
    slug: "multi-vendor-ecommerce",
    title: "Multi-Vendor Ecommerce Platform",
    description:
      "A full-featured multi-vendor marketplace allowing multiple sellers to manage their own storefronts, products, and orders from a single platform.",
    longDescription:
      "A comprehensive ecommerce platform built with Next.js on the frontend and .NET Web API on the backend, backed by PostgreSQL. Supports multiple independent vendors operating under a single marketplace with separate dashboards for vendors, customers, and administrators.",
    industry: "E-Commerce",
    problem: "Businesses needed multiple vendors on one platform with separate management but a unified customer experience.",
    solution: "Built a marketplace with buyer, seller, and admin portals. Vendor isolation via role-based access control, unified storefront for customers.",
    result: "Launched with 12 active vendors, processed 500+ orders in the first month. Average page load under 1.2 seconds.",
    features: [
      "Separate vendor, customer, and admin dashboards",
      "Vendor product catalog and inventory management",
      "Multi-vendor order splitting and fulfillment tracking",
      "Payment processing and vendor payouts",
      "Full-text product search",
    ],
    architecture: "Next.js frontend with ISR for product pages. .NET Web API backend with clean architecture. PostgreSQL with vendor-isolated data model.",
    tech: ["Next.js", ".NET Web API", "PostgreSQL", "TypeScript", "Tailwind CSS"],
    category: "Web Platform",
    imageUrl: null,
    featured: true,
    demo: { url: "https://demo.kamrandev.com/ecommerce", email: "demo@shop.com", password: "Demo@1234" },
    content: `## Building a Multi-Vendor Ecommerce Platform

When a client approached me with the requirement to build a marketplace where multiple independent vendors could sell products under a single platform, I knew this would be one of the more architecturally interesting projects I had taken on. The requirements included separate dashboards for vendors, customers, and platform administrators, along with real-time inventory management, order processing, and payment integration.

### The Architecture

I chose Next.js for the frontend due to its excellent support for server-side rendering and static generation, which are critical for SEO on an ecommerce platform. Product listing pages use Incremental Static Regeneration to ensure fresh data without sacrificing performance. For the backend, I built a .NET Web API following clean architecture principles, organized into feature modules: catalog, orders, vendors, users, and payments. PostgreSQL was the database of choice because of its robust support for complex queries, JSON fields used for product variants, and excellent performance at scale.

### Multi-Tenancy Design

The trickiest part of this project was designing the vendor isolation model. Each vendor has their own product catalog, inventory levels, order queue, and analytics. However, customers see a unified storefront. I implemented a schema approach in PostgreSQL for vendor data while keeping customer-facing data in shared tables with vendor_id foreign keys throughout. Role-based access control was implemented at the API layer using JWT tokens with custom claims. A vendor token includes their vendor_id and allowed operations, making it impossible for one vendor to access another vendor's data.

### Order Management Flow

When a customer places an order containing products from multiple vendors, the system creates a single parent order for the customer's reference and multiple child fulfillment orders, one per vendor. Each vendor sees only their fulfillment orders in their dashboard. When all fulfillment orders are shipped, the parent order status updates automatically.

### Challenges and Solutions

The biggest challenge was handling inventory race conditions. When two customers try to purchase the last unit of a product simultaneously, only one should succeed. I solved this using PostgreSQL's optimistic locking with a version column on inventory records, retrying the transaction on conflict. Another challenge was the search and filtering functionality across thousands of products. I implemented full-text search using PostgreSQL's built-in tsvector and tsquery features, which provided fast, relevance-ranked results without adding a separate search engine.

### Outcome

The platform launched with twelve active vendors and processed over five hundred orders in the first month. Average page load time stayed under 1.2 seconds thanks to ISR caching. The client reported that vendors found the dashboard intuitive, and the order management flow significantly reduced manual coordination work.`,
    sortOrder: 1,
  },
  {
    slug: "pos-system",
    title: "POS System",
    description:
      "A comprehensive point-of-sale system built for retail environments, featuring real-time inventory tracking, sales reporting, and receipt management.",
    longDescription:
      "A robust POS system built with .NET MVC and SQL Server, designed for retail stores needing reliable transaction processing, inventory management, and detailed sales analytics with offline support.",
    industry: "Retail",
    problem: "Inventory and sales tracking inefficiencies. Paper-based records, end-of-day reconciliation errors, and no real-time stock visibility.",
    solution: "Built a POS system with sales processing, real-time inventory updates, barcode scanning, receipt printing, and offline mode.",
    result: "60% reduction in end-of-day reconciliation time. Inventory discrepancies dropped from 15% to under 2%.",
    features: [
      "Fast transaction processing with barcode scanning",
      "Real-time inventory updates on each sale",
      "Multiple payment methods (cash, card, split)",
      "Offline mode with automatic sync",
      "Receipt printing with ESC/POS support",
      "End-of-day sales reports",
    ],
    architecture: ".NET MVC with local SQL Server Express for offline operation. Central SQL Server for cloud sync. Timestamp-based sync service.",
    tech: [".NET MVC", "SQL Server", "C#", "JavaScript", "Bootstrap"],
    category: "Business Software",
    imageUrl: null,
    featured: true,
    demo: { url: "https://demo.kamrandev.com/pos", email: "demo@pos.com", password: "Demo@1234" },
    content: `## Building a POS System for Retail

A retail client needed to replace their paper-based sales tracking with a proper point-of-sale system. The requirements were clear but demanding: fast transaction processing, barcode scanning support, real-time inventory updates, end-of-day reporting, and the ability to work offline if the internet went down.

### Technology Choice

I chose .NET MVC because the client's IT team was comfortable with Windows-based systems and the application would run as a local web application on the store's network. SQL Server was the natural choice for the database given the ecosystem. The frontend uses Bootstrap for a clean, responsive interface that works well on both the cashier's desktop and a tablet used by the floor manager.

### Core Features

The sales module is the heart of the system. Cashiers can search products by name or scan barcodes using a USB barcode reader, which sends keystrokes like a keyboard requiring no special integration. The cart handles quantity adjustments, discounts both flat and percentage, and multiple payment methods including cash, card, and split payment. Inventory management runs in the background of every sale, decrementing the stock count immediately within the same SQL Server transaction as the sale record. This ensures the inventory is always consistent with sales data.

### Offline Mode

One of the more interesting technical challenges was supporting offline operation. The store had occasional internet outages but sales had to continue. I implemented a local SQL Server Express instance on the POS machine that serves as a cache. Sales are always written to the local database first, then synced to the central server when connectivity is restored. The sync process uses a timestamp-based approach where each record has a created_at and synced_at field. The sync service runs every five minutes and pushes unsynced records to the central server.

### Receipt Printing

The most complex part was the receipt printing integration. Receipt printers use ESC/POS commands sent over USB or serial ports. I wrote a simple ESC/POS command builder that generates the byte sequence for formatted receipts including the store logo stored as a bitmap.

### Outcome

The system processes an average of two hundred transactions per day across two registers. The client reported a sixty percent reduction in end-of-day reconciliation time because sales data is now automatically tallied. Inventory accuracy improved significantly with discrepancies dropping from fifteen percent to under two percent.`,
    sortOrder: 2,
  },
  {
    slug: "school-management",
    title: "School Management System",
    description:
      "A comprehensive school management platform covering student enrollment, attendance, grades, timetables, and fee management.",
    longDescription:
      "A full-featured school management system built with .NET MVC and Web API, managing everything from student enrollment to examinations, attendance tracking, and fee collection with a parent portal.",
    industry: "Education",
    problem: "Manual academic administration — paper attendance, spreadsheet-based fee tracking, and no parent communication tools.",
    solution: "Centralized school management with attendance, grades, fee management, timetables, and a parent portal for real-time updates.",
    result: "600+ students managed. Teachers save ~2 hours/week. Fee collection rate improved through automated reminders.",
    features: [
      "Student enrollment and profile management",
      "Daily attendance marking and percentage tracking",
      "Grade and examination management",
      "Fee plan assignment and payment tracking",
      "Automated overdue fee alerts",
      "Parent portal for grades and attendance",
      "Timetable management",
    ],
    architecture: "Hybrid .NET MVC + Web API architecture. MVC for main application, Web API for mobile parent app integration. SQL Server with module-based schema design.",
    tech: [".NET MVC", "Web API", "SQL Server", "C#", "JavaScript"],
    category: "Business Software",
    imageUrl: null,
    featured: true,
    demo: { url: "https://demo.kamrandev.com/school", email: "demo@school.com", password: "Demo@1234" },
    content: `## Building a School Management System

Managing a school involves an enormous amount of data: hundreds of students, dozens of teachers, multiple classes and subjects, daily attendance, periodic exams and grades, fee schedules, and parent communications. This school management system was built to bring all of that into a single organized platform.

### System Architecture

The system uses a hybrid architecture: .NET MVC for the main web application and a .NET Web API layer for specific features that required mobile app integration, including a companion app for parents to view grades and attendance. SQL Server handles the database with carefully designed schemas to support complex relationships between students, classes, teachers, subjects, and time periods. The application is divided into modules: Enrollment, Attendance, Academics, Timetable, Fees, and Communications.

### Student Enrollment and Records

The enrollment module handles new student registration with all required information including personal details, parent and guardian contacts, previous school records, and document uploads stored as PDFs. Students are assigned to classes, and the system tracks their entire academic history throughout their enrollment. The student profile page pulls together data from every module giving teachers and administrators a complete picture at a glance.

### Attendance Management

Daily attendance is one of the most frequently used features. Class teachers mark attendance for their periods using a simple checkmark interface that loads the entire class list at once. The system calculates attendance percentages per student per month and generates alerts for students falling below the school's minimum threshold, which is configurable per school policy.

### Fee Management

Fee management was one of the most complex modules. The school had multiple fee types including tuition, transport, library, and exam fees, with different structures for different class levels, discounts for siblings, and scholarship adjustments. I modeled this as a fee plan system where each student is assigned a fee plan defining their monthly charges. The system generates monthly fee records for all students and tracks payment status. Overdue fees trigger automatic alerts to parents and generate a report for the accounts office.

### Outcome

The system is now used by over six hundred students across twenty classes. Teachers report saving approximately two hours per week on administrative tasks. The fee collection rate improved significantly because automated reminders reduced missed payments. The parent portal has been particularly well-received, allowing parents to check attendance and grades without calling the school.`,
    sortOrder: 3,
  },
  {
    slug: "retail-inventory",
    title: "Retail & Inventory Software",
    description:
      "A multi-location retail inventory management system for tracking stock levels, purchase orders, and supplier relationships across multiple store branches.",
    longDescription:
      "A comprehensive inventory management system built with .NET MVC and MySQL, designed for a retail chain with multiple locations needing real-time stock visibility and automated reorder processes.",
    industry: "Retail",
    problem: "Stock discrepancies between system and physical counts, purchase orders tracked in spreadsheets, no real-time multi-location stock visibility.",
    solution: "Multi-location inventory system with location-aware stock tracking, purchase order lifecycle management, and automated reorder suggestions.",
    result: "Stock discrepancies dropped from 12% to under 1.5%. Overstock reduced by 20% through better visibility.",
    features: [
      "Location-aware inventory tracking",
      "Purchase order creation and receiving",
      "Stock transfer between locations",
      "Low stock alerts and auto-reorder suggestions",
      "Supplier management",
      "Inventory valuation reports",
    ],
    architecture: ".NET MVC with MySQL. Inventory levels tracked via inventory_transaction records with cached current stock. Database triggers maintain accuracy.",
    tech: [".NET MVC", "MySQL", "C#", "JavaScript", "Bootstrap"],
    category: "Business Software",
    imageUrl: null,
    featured: false,
    demo: null,
    content: `## Building a Retail Inventory Management System

A retail chain with five locations was struggling with inventory visibility. Stock discrepancies between the system and physical counts were common, purchase orders were tracked in spreadsheets, and management had no real-time view of what was in stock at which location. This project replaced that chaos with a structured inventory management system.

### The Challenge

Multi-location inventory is fundamentally more complex than single-location inventory. A product does not just have a quantity but has a quantity at each location. Transfers between locations create their own paper trail. Purchase orders may be received at a central warehouse and distributed, or received directly at branches. All of this had to be modeled correctly. I chose .NET MVC and MySQL for this project, as MySQL was the client's preference and they had an existing database administrator on their team.

### Data Model

The core of the system is a location-aware inventory model. Each product has a master record with SKU, name, category, supplier, and reorder point. Inventory levels are tracked in a separate inventory_levels table with a composite key of product_id and location_id. Every inventory movement including sales, purchase receipts, transfers, adjustments, and returns creates an inventory_transaction record. The current inventory level is derived from the sum of these transactions, with a cached value updated by database triggers to avoid expensive recalculations on every read.

### Purchase Orders

The purchase order module tracks the full lifecycle from draft through confirmed to received. Each purchase order line item can be received in partial quantities across multiple deliveries, which is common for large orders. When a PO is received, the system automatically updates inventory levels, matches the received quantities against ordered quantities, and flags any discrepancies.

### Low Stock Alerts and Auto-Reorder

Each product has a configurable reorder point and reorder quantity. The system checks stock levels nightly and generates a reorder suggestions report for the purchasing team. For approved suppliers, the system can optionally generate draft purchase orders automatically, which the purchasing manager reviews and approves before sending. This feature alone saved the purchasing team approximately three hours per week that was previously spent manually checking stock levels in spreadsheets.

### Outcome

After three months of operation, stock discrepancies dropped from an average of twelve percent variance to under 1.5 percent. The purchasing team now operates from the system's suggestions rather than gut feel and spreadsheets. Management can see total inventory value across all locations in real-time, which has improved cash flow planning. The client estimates they have reduced overstock by twenty percent by having better visibility into slow-moving items.`,
    sortOrder: 4,
  },
];

// Projects are the same underlying work as the case studies above, just
// under the Project shape (image/blogPost instead of imageUrl/content).
const projects = caseStudies.map(({ imageUrl, content, ...rest }) => ({
  ...rest,
  image: imageUrl ?? "/placeholder.jpg",
  blogPost: content,
}));

const testimonials = [
  {
    name: "Ahmed Hassan",
    role: "CEO",
    company: "RetailPro Pakistan",
    text: "Kamran delivered our POS system ahead of schedule and it has been running flawlessly. His understanding of our business needs was impressive, and the system handles our daily transactions without any issues.",
    initials: "AH",
    sortOrder: 0,
  },
  {
    name: "Fatima Malik",
    role: "Principal",
    company: "Bright Future Academy",
    text: "Our school management system has transformed how we handle student records, attendance, and fee management. Kamran was professional throughout the project and delivered exactly what we needed.",
    initials: "FM",
    sortOrder: 1,
  },
  {
    name: "Usman Qureshi",
    role: "Operations Manager",
    company: "TechMart Online",
    text: "The multi-vendor ecommerce platform Kamran built for us has been a game changer. The admin panel is intuitive, and our vendors love how easy it is to manage their products. Highly recommend.",
    initials: "UQ",
    sortOrder: 2,
  },
];

async function login() {
  const res = await fetch(`${API_BASE_URL}/api/auth/login`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ username: ADMIN_USERNAME, password: ADMIN_PASSWORD }),
  });
  if (!res.ok) {
    throw new Error(`Login failed: ${res.status} ${await res.text()}`);
  }
  const data = await res.json();
  return data.token;
}

async function post(token, path, body, label) {
  const res = await fetch(`${API_BASE_URL}${path}`, {
    method: "POST",
    headers: { "Content-Type": "application/json", Authorization: `Bearer ${token}` },
    body: JSON.stringify(body),
  });
  if (res.status === 409) {
    console.log(`  skip (already exists): ${label}`);
    return;
  }
  if (!res.ok) {
    console.error(`  FAILED: ${label} — ${res.status} ${await res.text()}`);
    return;
  }
  console.log(`  created: ${label}`);
}

async function main() {
  console.log(`Logging in to ${API_BASE_URL} as ${ADMIN_USERNAME}...`);
  const token = await login();

  console.log(`\nSeeding ${blogPosts.length} blog posts...`);
  for (const post_ of blogPosts) await post(token, "/api/blogposts", post_, post_.title);

  console.log(`\nSeeding ${services.length} services...`);
  for (const service of services) await post(token, "/api/services", service, service.title);

  console.log(`\nSeeding ${caseStudies.length} case studies...`);
  for (const cs of caseStudies) await post(token, "/api/casestudies", cs, cs.title);

  console.log(`\nSeeding ${projects.length} projects...`);
  for (const project of projects) await post(token, "/api/projects", project, project.title);

  console.log(`\nSeeding ${testimonials.length} testimonials...`);
  for (const t of testimonials) await post(token, "/api/testimonials", t, t.name);

  console.log("\nDone.");
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
