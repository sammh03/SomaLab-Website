/**
 * SomaLab — central SEO configuration.
 *
 * Single source of truth for site-wide metadata, structured data, and
 * NAP (Name / Address / Phone) consistency.
 */

export const SITE_URL = "https://somalab.com.au";
export const SITE_NAME = "SomaLab";
export const DEFAULT_OG_IMAGE = "https://res.cloudinary.com/dfazundaa/image/upload/f_auto,q_auto/somalab-og-image_ieyfhk";

/** Business NAP — keep consistent everywhere (footer, schema, contact page). */
export const BUSINESS = {
  name: "SomaLab",
  legalName: "SomaLab Nutrition Consulting",
  email: "info@somalab.com.au",
  phone: "+61414430113",
  phoneDisplay: "+61 414 430 113",
  country: "Australia",
  countryCode: "AU",
  /** Cities & regions explicitly served — used for areaServed in schema. */
  areaServed: ["Brisbane", "Gold Coast", "Sunshine Coast", "Queensland", "Australia"],
  founder: {
    name: "SomaLab Founder",
    jobTitle: "Clinical Nutrition & Health Specialist",
    description:
      "Bachelor-qualified medical laboratory scientist and clinical nutrition consultant helping Australians achieve evidence-based, sustainable health outcomes.",
    image: `${SITE_URL}/coach-portrait.jpg`,
  },
  social: {
    instagram: "https://instagram.com/somalab.au",
    facebook: "https://facebook.com/somalab",
  },
  hours: "Mo-Fr 09:00-17:00",
  priceRange: "$$",
} as const;

/** Reusable LocalBusiness JSON-LD (used on every page via SEO component). */
export const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": ["ProfessionalService", "HealthAndBeautyBusiness"],
  "@id": `${SITE_URL}/#business`,
  name: BUSINESS.name,
  legalName: BUSINESS.legalName,
  description:
    "Evidence-based nutrition consulting and health coaching for Australians. Personalised plans for sustainable fat loss, performance, and wellbeing.",
  url: SITE_URL,
  telephone: BUSINESS.phone,
  email: BUSINESS.email,
  image: DEFAULT_OG_IMAGE,
  logo: `${SITE_URL}/favicon.ico`,
  priceRange: BUSINESS.priceRange,
  openingHours: BUSINESS.hours,
  address: {
    "@type": "PostalAddress",
    addressCountry: BUSINESS.countryCode,
    addressRegion: "QLD",
  },
  areaServed: BUSINESS.areaServed.map((name) => ({ "@type": "Place", name })),
  serviceType: [
    "Nutrition Consulting",
    "Health Coaching",
    "Weight Management",
    "Sports Nutrition",
    "Biomarker Analysis",
  ],
  sameAs: [BUSINESS.social.instagram, BUSINESS.social.facebook],
};

export const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  "@id": `${SITE_URL}/#founder`,
  name: BUSINESS.founder.name,
  jobTitle: BUSINESS.founder.jobTitle,
  description: BUSINESS.founder.description,
  image: BUSINESS.founder.image,
  worksFor: { "@id": `${SITE_URL}/#business` },
  url: `${SITE_URL}/about`,
  sameAs: [BUSINESS.social.instagram, BUSINESS.social.facebook],
};

export const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": `${SITE_URL}/#website`,
  url: SITE_URL,
  name: SITE_NAME,
  inLanguage: "en-AU",
  publisher: { "@id": `${SITE_URL}/#business` },
};
