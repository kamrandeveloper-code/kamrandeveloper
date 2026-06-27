export function personSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Kamran",
    jobTitle: "Custom Software Developer",
    description:
      "Full Stack Software Developer specializing in custom business software, management systems, API integrations and modern web applications.",
    url: "https://kamrandev.com",
    email: "nkamran045@email.com",
    image: "https://kamrandev.com/profile.jpg",
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
    sameAs: ["https://github.com", "https://linkedin.com"],
  };
}

export function websiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Kamran — Custom Software Developer",
    url: "https://kamrandev.com",
    description:
      "Custom software development services — management systems, business software, API integrations, and web applications.",
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
  url: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: article.title,
    description: article.description,
    datePublished: article.datePublished,
    url: article.url,
    author: { "@type": "Person", name: "Kamran" },
  };
}
