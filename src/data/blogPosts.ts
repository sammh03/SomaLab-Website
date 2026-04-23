/**
 * Blog Posts Data Source
 * ----------------------
 * Add a new article by appending an object to the `blogPosts` array below.
 * Each post is automatically picked up by:
 *   - The Blog index page (/blog) — renders a card in the grid
 *   - The Article page (/blog/:slug) — renders the full long-form layout
 *
 * To publish a real article: set `status: "published"`. Drafts and
 * "coming-soon" placeholders are still rendered on the index, but only
 * "published" posts have a working "Read More" link.
 */

export type BlogPostStatus = "published" | "coming-soon" | "draft";

export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  date: string; // ISO format: YYYY-MM-DD
  readTime: string; // e.g. "6 min read"
  author: string;
  coverImage?: string; // Imported image path. Optional for placeholders.
  status: BlogPostStatus;
  /** Long-form article body. Each string renders as a paragraph.
   *  Strings prefixed with "## " render as section headings. */
  content?: string[];
}

/**
 * EDIT ME — add new posts here.
 * Currently all entries are "coming-soon" placeholders to match the
 * launch state of the journal.
 */
export const blogPosts: BlogPost[] = [
  {
    slug: "science-of-sustainable-fat-loss",
    title: "The Science Behind Sustainable Fat Loss",
    excerpt:
      "A research-led breakdown of why most diets fail and what the evidence actually says about lasting body composition change.",
    category: "Nutrition Science",
    date: "2025-05-01",
    readTime: "8 min read",
    author: "SomaLab",
    status: "coming-soon",
  },
  {
    slug: "high-protein-breakfast-ideas",
    title: "High-Protein Breakfasts That Keep You Full Until Lunch",
    excerpt:
      "Practical, evidence-based meal ideas designed to stabilise blood sugar, regulate appetite hormones and fuel your morning.",
    category: "Meal Planning",
    date: "2025-05-15",
    readTime: "5 min read",
    author: "SomaLab",
    status: "coming-soon",
  },
  {
    slug: "fuelling-your-workouts",
    title: "Fuelling Your Workouts: Pre & Post-Exercise Nutrition",
    excerpt:
      "Timing your nutrition isn't just for elite athletes. Learn how to apply the principles of sports nutrition to your training.",
    category: "Sports Nutrition",
    date: "2025-06-01",
    readTime: "7 min read",
    author: "SomaLab",
    status: "coming-soon",
  },
  {
    slug: "sleep-and-weight-management",
    title: "Why Sleep Is the Most Underrated Recovery Tool",
    excerpt:
      "Poor sleep disrupts hunger hormones, raises cravings and undermines training adaptation. Here's what to do about it.",
    category: "Recovery",
    date: "2025-06-15",
    readTime: "6 min read",
    author: "SomaLab",
    status: "coming-soon",
  },
  {
    slug: "gut-health-and-performance",
    title: "Gut Health and Athletic Performance",
    excerpt:
      "How your microbiome influences inflammation, energy and recovery — and the dietary patterns that genuinely move the needle.",
    category: "Wellness",
    date: "2025-07-01",
    readTime: "9 min read",
    author: "SomaLab",
    status: "coming-soon",
  },
  {
    slug: "supplements-worth-taking",
    title: "Supplements Actually Worth Taking (According to Research)",
    excerpt:
      "Cutting through the marketing noise to highlight the small handful of supplements with strong evidence behind them.",
    category: "Supplementation",
    date: "2025-07-15",
    readTime: "10 min read",
    author: "SomaLab",
    status: "coming-soon",
  },
];

export const getPostBySlug = (slug: string): BlogPost | undefined =>
  blogPosts.find((p) => p.slug === slug);
