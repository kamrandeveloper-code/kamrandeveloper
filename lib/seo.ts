import type { Metadata } from "next";

export const BASE_URL = "https://kamrandev.com";

export function baseMetadata(overrides: Partial<Metadata> = {}): Metadata {
  return {
    metadataBase: new URL(BASE_URL),
    title: {
      default: "Kamran — Custom Software Developer for Businesses",
      template: "%s | Kamran",
    },
    description:
      "Custom software developer building management systems, business software, API integrations, and modern web applications for growing businesses.",
    keywords: [
      "custom software developer",
      "management systems",
      "business software Pakistan",
      "ASP.NET Core developer",
      "Next.js developer",
      "API integrations",
    ],
    authors: [{ name: "Kamran" }],
    creator: "Kamran",
    openGraph: {
      type: "website",
      locale: "en_US",
      url: BASE_URL,
      siteName: "Kamran — Custom Software Developer",
      title: "Kamran — Custom Software Developer for Businesses",
      description:
        "Custom software developer building management systems, business software, API integrations, and modern web applications.",
    },
    twitter: {
      card: "summary_large_image",
      title: "Kamran — Custom Software Developer",
      description: "Custom software developer for growing businesses.",
      creator: "@kamrandev",
    },
    robots: {
      index: true,
      follow: true,
      googleBot: { index: true, follow: true },
    },
    ...overrides,
  };
}
