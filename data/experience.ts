export interface Experience {
  id: string;
  role: string;
  company: string;
  period: string;
  description: string;
  highlights: string[];
  technologies: string[];
}

export const experiences: Experience[] = [
  {
    id: "freelance",
    role: "Freelance Software Developer",
    company: "Independent",
    period: "2020 — Present",
    description:
      "Building custom business software for clients across healthcare, retail, education, and e-commerce industries.",
    highlights: [
      "Delivered dental clinic management system with appointments, billing, and patient records",
      "Built POS system processing 200+ daily transactions across multiple registers",
      "Developed school management platform serving 600+ students across 20 classes",
      "Launched multi-vendor marketplace with 12 active vendors",
    ],
    technologies: [".NET MVC", "Web API", "SQL Server", "Next.js", "PostgreSQL"],
  },
];
