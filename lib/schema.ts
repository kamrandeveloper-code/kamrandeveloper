const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? "https://kamrandev.com";

export function personSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Kamran",
    jobTitle: "Custom Software Developer",
    description:
      "Full Stack Software Developer specializing in custom business software, management systems, API integrations and modern web applications.",
    url: SITE_URL,
    email: "info@kamrandeveloper.com",
    image: `${SITE_URL}/profile.jpeg`,
    address: {
      "@type": "PostalAddress",
      addressCountry: "PK",
      addressLocality: "Pakistan",
    },
    knowsAbout: [
      "Custom Business Software",
      "Management Systems",
      "ASP.NET Core",
      "C#",
      "SQL Server",
      "PostgreSQL",
      "React",
      "Next.js",
      "TypeScript",
      "API Integrations",
      "E-Commerce Development",
      "Healthcare Software",
      "School Management Systems",
    ],
    hasOccupation: {
      "@type": "Occupation",
      name: "Software Developer",
      occupationLocation: { "@type": "Country", name: "Pakistan" },
      skills: "ASP.NET Core, C#, SQL Server, PostgreSQL, React, Next.js, TypeScript",
    },
    sameAs: [
      process.env.NEXT_PUBLIC_GITHUB_URL ?? "https://github.com",
      process.env.NEXT_PUBLIC_LINKEDIN_URL ?? "https://linkedin.com",
    ],
  };
}

export function websiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Kamran — Custom Software Developer",
    url: SITE_URL,
    description:
      "Custom software development services — management systems, business software, API integrations, and web applications.",
  };
}

export function organizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Kamran — Custom Software Developer",
    url: SITE_URL,
    logo: `${SITE_URL}/logo.png`,
    sameAs: [
      process.env.NEXT_PUBLIC_GITHUB_URL ?? "https://github.com",
      process.env.NEXT_PUBLIC_LINKEDIN_URL ?? "https://linkedin.com",
    ],
  };
}

export function webpageSchema({
  url,
  name,
  description,
  significantLink,
}: {
  url: string;
  name: string;
  description: string;
  significantLink?: string[];
}) {
  return {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": url,
    url,
    name,
    description,
    ...(significantLink && { significantLink }),
  };
}

export function breadcrumbSchema(items: { name: string; url: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  };
}

export function serviceSchema(service: {
  title: string;
  description: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name: service.title,
    description: service.description,
    provider: { "@type": "Person", name: "Kamran" },
    serviceType: "Software Development",
  };
}

export function projectSchema(project: {
  title: string;
  description: string;
  technologies: string[];
}) {
  return {
    "@context": "https://schema.org",
    "@type": "CreativeWork",
    name: project.title,
    description: project.description,
    creator: { "@type": "Person", name: "Kamran" },
    keywords: project.technologies.join(", "),
  };
}

export function articleSchema(article: {
  title: string;
  description: string;
  datePublished: string;
  dateModified?: string;
  url: string;
  image?: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: article.title,
    description: article.description,
    image: [article.image ?? `${SITE_URL}/opengraph.jpeg`],
    datePublished: article.datePublished,
    dateModified: article.dateModified ?? article.datePublished,
    url: article.url,
    mainEntityOfPage: { "@type": "WebPage", "@id": article.url },
    author: { "@type": "Person", name: "Kamran", url: SITE_URL },
    publisher: {
      "@type": "Organization",
      name: "Kamran — Custom Software Developer",
      logo: { "@type": "ImageObject", url: `${SITE_URL}/logo.png` },
    },
  };
}

export function faqSchema(items: { question: string; answer: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: { "@type": "Answer", text: item.answer },
    })),
  };
}
