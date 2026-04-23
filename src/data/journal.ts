// ============================================================
// SomaLab Journal — Article Registry
// ------------------------------------------------------------
// To add a new article in the future:
//   1. Drop a hero image into src/assets/ (or use a remote URL)
//   2. Add a new entry below with status: "published"
//   3. Add a route for `/journal/:slug` to App.tsx
//      (the JournalArticle template will render it automatically)
// ============================================================

export type JournalCategory =
  | "Nutrition Science"
  | "Performance"
  | "Longevity"
  | "Mindset"
  | "Recovery"
  | "Research";

export interface JournalArticle {
  slug: string;
  title: string;
  excerpt: string;
  category: JournalCategory;
  date?: string;        // ISO date — only required when published
  readingTime?: string; // e.g. "6 min read"
  author?: string;
  image?: string;       // hero image (imported asset or URL)
  status: "published" | "coming-soon";
  /**
   * Long-form body. Each entry renders as a paragraph.
   * Strings starting with "## " render as H2 section headings.
   */
  body?: string[];
}

// ------------------------------------------------------------
// Placeholder set used while the Journal is in "Coming Soon"
// mode. Replace `status` with "published" once content is ready.
// ------------------------------------------------------------
export const journalArticles: JournalArticle[] = [
  {
    slug: "the-science-of-metabolic-flexibility",
    title: "The Science of Metabolic Flexibility",
    excerpt:
      "Why your body's ability to switch between fuel sources may be the single most important marker of long-term health.",
    category: "Nutrition Science",
    status: "coming-soon",
  },
  {
    slug: "protein-and-longevity",
    title: "Protein, Muscle & the Longevity Equation",
    excerpt:
      "Rethinking protein requirements through the lens of healthspan, sarcopenia and metabolic resilience.",
    category: "Longevity",
    status: "coming-soon",
  },
  {
    slug: "the-quiet-power-of-recovery",
    title: "The Quiet Power of Recovery",
    excerpt:
      "Sleep, parasympathetic tone and the underrated training inputs that move the needle the most.",
    category: "Recovery",
    status: "coming-soon",
  },
  {
    slug: "rethinking-the-morning-meal",
    title: "Rethinking the Morning Meal",
    excerpt:
      "What the latest chrono-nutrition research suggests about the first food you eat each day.",
    category: "Nutrition Science",
    status: "coming-soon",
  },
  {
    slug: "training-the-mind-for-consistency",
    title: "Training the Mind for Consistency",
    excerpt:
      "Behavioural frameworks that help high-performers stay on protocol when motivation fades.",
    category: "Mindset",
    status: "coming-soon",
  },
  {
    slug: "reading-your-bloodwork",
    title: "How to Read Your Bloodwork Like a Practitioner",
    excerpt:
      "A practical guide to the markers that matter most for performance, recovery and longevity.",
    category: "Research",
    status: "coming-soon",
  },
];

export const getArticleBySlug = (slug: string) =>
  journalArticles.find((a) => a.slug === slug);
