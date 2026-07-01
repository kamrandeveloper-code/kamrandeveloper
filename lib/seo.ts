import type { Metadata } from "next";

export const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.kamrandeveloper.com";
export const NON_WWW_URL = "https://kamrandeveloper.com";

export function buildAlternates(path = "") {
  return {
    canonical: `${BASE_URL}${path}`,
    languages: { en: `${NON_WWW_URL}${path}` },
  };
}

const OG_IMAGE = {
  url: `${BASE_URL}/opengraph.jpeg`,
  width: 1376,
  height: 768,
  alt: "Kamran — Custom Software Developer",
};

export function baseMetadata(overrides: Partial<Metadata> = {}): Metadata {
  const { openGraph: ogOverride, twitter: twitterOverride, ...restOverrides } = overrides;

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
    icons: {
      icon: [{ url: "/icons.png" }, { url: "/icons.png", type: "image/png" }],
      apple: "/icons.png",
    },
    openGraph: {
      type: "website",
      locale: "en_US",
      url: BASE_URL,
      siteName: "Kamran — Custom Software Developer",
      title: "Kamran — Custom Software Developer for Businesses",
      description:
        "Custom software developer building management systems, business software, API integrations, and modern web applications.",
      images: [OG_IMAGE],
      ...ogOverride,
    },
    twitter: {
      card: "summary_large_image",
      title: "Kamran — Custom Software Developer",
      description: "Custom software developer for growing businesses.",
      creator: "@kamrandev",
      images: [`${BASE_URL}/profile.jpeg`],
      ...twitterOverride,
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-video-preview": -1,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },
    ...restOverrides,
  };
}

export { baseMetadata as createMetadata };
