# PORTFOLIO REDESIGN MASTER SPECIFICATION

## OBJECTIVE

Redesign the entire portfolio from a "developer portfolio" into a "software business portfolio" that targets both:

1. Technical recruiters
2. Business owners and freelance clients

The portfolio must be optimized for:

* Google Search
* AI Overviews
* ChatGPT citations
* Gemini citations
* Claude citations
* Perplexity citations
* Generative Engine Optimization (GEO)
* Traditional SEO

The portfolio should position the owner as:

> A Full Stack Software Developer who builds business software, management systems, automation solutions, integrations, and custom web applications.

---

# TECH STACK

Use:

* Next.js App Router
* TypeScript
* Static Generation where possible
* Server Components by default
* Tailwind CSS
* MDX for blog articles
* JSON-LD Structured Data
* Sitemap generation
* Robots generation

---

# REMOVE

Remove:

* Fake testimonials
* Years experience counters
* Coffee counters
* Animated meaningless statistics
* Generic developer buzzwords

Do not show fake social proof.

---

# NEW POSITIONING

OLD:

".NET Developer"

NEW:

"Custom Software Developer for Businesses"

Homepage headline:

Custom Software Developer for Growing Businesses

Subheading:

I build management systems, business software, API integrations, automation tools, and modern web applications that help organizations save time and operate more efficiently.

CTA Buttons:

* View Projects
* Hire Me

---

# INFORMATION ARCHITECTURE

Create the following routes:

/

/about

/services

/projects

/projects/[slug]

/case-studies

/case-studies/[slug]

/experience

/blog

/blog/[slug]

/contact

---

# FOLDER STRUCTURE

src/

app/

components/

content/
about.ts
services.ts
projects.ts
experience.ts
skills.ts

content/blog/

lib/
schema.ts
seo.ts

public/
projects/

---

# DATA DRIVEN ARCHITECTURE

DO NOT hardcode content inside pages.

All content must come from data files.

Pages should map over data collections.

---

# SERVICES

Create services.ts

Services:

1. Custom Business Software

Description:
Tailored software solutions designed around unique business workflows.

2. Management Systems

Description:
Hospital, pharmacy, dental, inventory and school management systems.

3. Admin Dashboards

Description:
Analytics, reporting and operational dashboards.

4. API Integrations

Description:
Stripe, PayPal, JazzCash, EasyPaisa, WhatsApp, third-party integrations.

5. AI-Powered Features

Description:
Document analysis, AI assistants, automation and intelligent workflows.

6. E-Commerce Solutions

Description:
Online stores and multi-vendor marketplaces.

---

# ABOUT SECTION

Position as business problem solver.

Text:

I help businesses replace spreadsheets, manual processes and disconnected tools with custom software solutions that improve efficiency and support growth.

Specializations:

* Healthcare Software
* Business Automation
* Management Systems
* API Integrations
* E-Commerce Platforms

---

# EXPERIENCE

Show commercial work.

Focus on:

* Healthcare
* Dental
* Pharmacy
* E-Commerce

Avoid academic sounding descriptions.

Focus on outcomes.

---

# PROJECT STRATEGY

Every project must contain:

title

industry

problem

solution

result

technologies

features

screenshots

architecture

---

# PROJECTS

Include:

Dental Clinic Management System

Problem:
Manual patient management.

Solution:
Appointments, billing, patient history, reporting.

Result:
Improved clinic administration.

---

POS System

Problem:
Inventory and sales tracking inefficiencies.

Solution:
Sales, inventory, reporting.

Result:
Improved operational visibility.

---

School Management System

Problem:
Manual academic administration.

Solution:
Attendance, classes, reporting, student management.

Result:
Centralized school operations.

---

Multi Vendor Marketplace

Problem:
Businesses need multiple vendors on one platform.

Solution:
Marketplace with buyer, seller and admin portals.

Result:
Scalable e-commerce platform.

---

# CASE STUDIES

Create dedicated case study pages.

Each case study must include:

## Business Problem

## Requirements

## Proposed Solution

## System Architecture

## Key Features

## Technical Implementation

## Challenges

## Results

## Screenshots

## Technologies Used

Minimum:
1000+ words per case study.

---

# BLOG STRATEGY

Create blog section.

Target BOTH:

Business audience
Technical audience

Business Articles:

* When Should You Replace Excel With Custom Software
* How Much Does a Management System Cost
* Signs Your Business Needs Automation
* Benefits of API Integrations
* Custom Software vs SaaS

Technical Articles:

* ASP.NET Core Best Practices
* EF Core Performance Optimization
* Next.js App Router Guide
* SQL Server Optimization
* Authentication in ASP.NET Core

Publish regularly.

---

# GEO OPTIMIZATION

Every important page must answer direct questions.

Examples:

Q: Who is Kamran?

A:
Kamran is a Full Stack Software Developer specializing in custom business software, management systems, API integrations and modern web applications.

Q: What services does Kamran provide?

A:
Custom software development, management systems, e-commerce platforms, API integrations and automation solutions.

Q: What technologies does Kamran use?

A:
ASP.NET Core, C#, SQL Server, PostgreSQL, React, Next.js and TypeScript.

These answers should exist visibly on pages.

---

# JSON-LD

Create lib/schema.ts

Implement:

Person

WebSite

BreadcrumbList

Article

Service

Project

Inject JSON-LD using:

<script
type="application/ld+json"
/>

inside layouts and pages.

Every project page should expose Project schema.

Every blog page should expose Article schema.

---

# SEO

Implement:

generateMetadata()

Canonical URLs

OpenGraph

Twitter Cards

robots.ts

sitemap.ts

Dynamic metadata for project pages

Dynamic metadata for blog pages

---

# HOMEPAGE STRUCTURE

Hero

Services

Featured Projects

About

Experience

Case Studies

Blog

Contact CTA

Footer

---

# DESIGN DIRECTION

Modern SaaS

Minimal

Professional

White background

Strong typography

Readable spacing

Business focused

Less developer-centric

No excessive animations

Fast loading

Mobile first

---

# SUCCESS CHECKLIST

The redesign is complete only when:

[ ] All content is data-driven

[ ] JSON-LD exists

[ ] Sitemap exists

[ ] Robots exists

[ ] Blog exists

[ ] Case studies exist

[ ] Services page exists

[ ] Project pages exist

[ ] Metadata implemented

[ ] GEO content implemented

[ ] Homepage targets clients

[ ] Homepage targets recruiters

[ ] No fake testimonials

[ ] No fake metrics

[ ] Mobile responsive

[ ] Lighthouse score 90+

[ ] Ready for deployment
