import { Metadata } from "next";
import { siteConfig } from "./site.config";

interface PageSeoInput {
  /** Page-specific title (without site name suffix). If omitted, uses seo.title for home or siteName fallback. */
  title?: string;
  /** Page-specific description. If omitted, falls back to seo.description. */
  description?: string;
  /** Path starting with '/', e.g. '/', '/about'. */
  path: string;
}

export function buildMetadata({ title, description, path }: PageSeoInput): Metadata {
  const isHome = path === "/";
  const pageTitle = isHome
    ? siteConfig.seo.title
    : title
      ? `${title} | ${siteConfig.siteName}`
      : siteConfig.siteName;
  const pageDescription = description ?? siteConfig.seo.description;
  // Keep the homepage canonical aligned with the site's root URL while
  // preserving the existing no-trailing-slash format for inner pages.
  const canonical = isHome
    ? `${siteConfig.domain}/`
    : `${siteConfig.domain}${path}`;
  const socialImage = `${siteConfig.domain}${siteConfig.seo.ogImage}`;

  return {
    title: pageTitle,
    description: pageDescription,
    alternates: {
      canonical,
    },
    robots: {
      index: true,
      follow: true,
    },
    openGraph: {
      title: pageTitle,
      description: pageDescription,
      url: canonical,
      siteName: siteConfig.siteName,
      locale: "en_US",
      images: [
        {
          url: socialImage,
          width: 1200,
          height: 630,
          alt: "Sprinter Game — a classic 100-meter browser racing game",
        },
      ],
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: pageTitle,
      description: pageDescription,
      images: [socialImage],
    },
    // Google Search Console verification
    ...(siteConfig.analytics.gscVerification
      ? { verification: { google: siteConfig.analytics.gscVerification } }
      : {}),
  };
}

/**
 * Build a VideoGame JSON-LD object for the homepage.
 * Validate at https://search.google.com/test/rich-results after deployment.
 */
export function buildVideoGameJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "VideoGame",
    name: siteConfig.game.name,
    genre: siteConfig.game.genre,
    applicationCategory: "Game",
    operatingSystem: "Web Browser",
    description: siteConfig.seo.description,
    url: siteConfig.domain,
    image: `${siteConfig.domain}${siteConfig.seo.ogImage}`,
  };
}
