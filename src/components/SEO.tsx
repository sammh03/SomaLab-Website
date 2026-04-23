import { Helmet } from "react-helmet-async";
import { useLocation } from "react-router-dom";
import {
  SITE_URL,
  SITE_NAME,
  DEFAULT_OG_IMAGE,
  localBusinessSchema,
  websiteSchema,
} from "@/lib/seo-config";

interface SEOProps {
  /** Full page title (under 60 chars). " | SomaLab" suffix added automatically unless you opt out. */
  title: string;
  /** Meta description (under 160 chars). */
  description: string;
  /** Override canonical path (defaults to current pathname). */
  canonicalPath?: string;
  /** Absolute URL to social share image. */
  image?: string;
  /** Page-specific JSON-LD blobs (Service, Article, BreadcrumbList, FAQPage…). */
  schemas?: Array<Record<string, unknown>>;
  /** Skip the " | SomaLab" suffix (e.g., on the homepage where the title already ends with the brand). */
  noSuffix?: boolean;
  /** Set true to mark the page noindex (e.g., legal/error). */
  noIndex?: boolean;
  /** Page type for OG (default "website"). */
  ogType?: "website" | "article" | "profile";
}

/**
 * Per-page SEO component.
 *
 * Injects: <title>, meta description, canonical, OG/Twitter cards,
 * site-wide LocalBusiness + WebSite JSON-LD, and any page-specific schemas.
 *
 * Renders zero DOM output — all tags go into <head>.
 */
export const SEO = ({
  title,
  description,
  canonicalPath,
  image = DEFAULT_OG_IMAGE,
  schemas = [],
  noSuffix = false,
  noIndex = false,
  ogType = "website",
}: SEOProps) => {
  const { pathname } = useLocation();
  const path = canonicalPath ?? pathname;
  const canonical = `${SITE_URL}${path === "/" ? "" : path}`;
  const fullTitle = noSuffix ? title : `${title} | ${SITE_NAME}`;

  return (
    <Helmet>
      <html lang="en-AU" />
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={canonical} />
      {noIndex ? (
        <meta name="robots" content="noindex, nofollow" />
      ) : (
        <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1" />
      )}

      {/* Open Graph */}
      <meta property="og:type" content={ogType} />
      <meta property="og:site_name" content={SITE_NAME} />
      <meta property="og:locale" content="en_AU" />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={canonical} />
      <meta property="og:image" content={image} />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />

      {/* Site-wide structured data */}
      <script type="application/ld+json">{JSON.stringify(localBusinessSchema)}</script>
      <script type="application/ld+json">{JSON.stringify(websiteSchema)}</script>

      {/* Page-specific structured data */}
      {schemas.map((schema, i) => (
        <script key={i} type="application/ld+json">
          {JSON.stringify(schema)}
        </script>
      ))}
    </Helmet>
  );
};
