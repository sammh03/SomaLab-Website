import { motion } from "framer-motion";
import { BookOpen } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

/**
 * Blog / Journal Page
 * ----------------------------------------------------------------------------
 * Currently displays a polished "Coming Soon" state.
 *
 * FUTURE CONTENT — How to add articles:
 *   1. Create a new entry in the `posts` array below with: slug, title,
 *      excerpt, category, date, image, and (optionally) author.
 *   2. Each post renders inside the reusable <ArticleCard /> component, so
 *      duplicating an entry instantly adds a new card to the journal grid.
 *   3. To wire individual article pages, create a route like
 *      `/blog/:slug` in `src/App.tsx` that renders an Article template
 *      and looks up the slug from the same `posts` source (or a CMS).
 *   4. The "Coming Soon" hero auto-hides as soon as `posts.length > 0`.
 * ----------------------------------------------------------------------------
 */

type BlogPost = {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  date: string;
  image: string;
  author?: string;
  featured?: boolean;
};

// Add posts here in the future — the page will automatically switch from
// the "Coming Soon" state to the editorial grid layout.
const posts: BlogPost[] = [];

const Blog = () => {
  const hasPosts = posts.length > 0;
  const featured = posts.find((p) => p.featured) ?? posts[0];
  const rest = hasPosts ? posts.filter((p) => p.slug !== featured?.slug) : [];

  return (
    <div>
      {/* Hero Section */}
      <section className="section-padding bg-secondary pt-32">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block px-4 py-1.5 mb-6 text-sm font-medium bg-accent/10 text-accent rounded-full">
              SomaLab Journal
            </span>
            <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
              {hasPosts ? "Insights & Research" : "Insights & Research Coming Soon"}
            </h1>
            <p className="font-body text-lg text-muted-foreground max-w-2xl mx-auto">
              {hasPosts
                ? "Evidence-based nutrition, performance, and longevity insights from the SomaLab team."
                : "We're building a space for science-backed insights, education, and optimisation. Stay tuned."}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Coming Soon State */}
      {!hasPosts && (
        <section className="section-padding">
          <div className="container mx-auto px-4">
            <motion.div
              className="max-w-2xl mx-auto text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-accent/10 mb-8">
                <BookOpen className="w-7 h-7 text-accent" strokeWidth={1.5} />
              </div>

              <div className="w-12 h-px bg-border mx-auto mb-8" />

              <h2 className="font-heading text-2xl md:text-3xl font-semibold text-foreground mb-4">
                A premium editorial experience, in development
              </h2>
              <p className="font-body text-muted-foreground leading-relaxed">
                Carefully researched articles on nutrition science, training, recovery,
                and longevity — written with the same rigor and intention as everything
                we do at SomaLab.
              </p>
            </motion.div>
          </div>
        </section>
      )}

      {/* Articles Grid (renders automatically when posts exist) */}
      {hasPosts && (
        <section className="section-padding">
          <div className="container mx-auto px-4">
            {/* Featured Post */}
            {featured && (
              <motion.div
                className="mb-16"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <ArticleCard post={featured} variant="featured" />
              </motion.div>
            )}

            {/* Grid */}
            {rest.length > 0 && (
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {rest.map((post, index) => (
                  <motion.div
                    key={post.slug}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1, duration: 0.5 }}
                  >
                    <ArticleCard post={post} />
                  </motion.div>
                ))}
              </div>
            )}
          </div>
        </section>
      )}
    </div>
  );
};

/**
 * Reusable article card — duplicate-friendly.
 * Use variant="featured" for the hero post layout.
 */
const ArticleCard = ({
  post,
  variant = "default",
}: {
  post: BlogPost;
  variant?: "default" | "featured";
}) => {
  if (variant === "featured") {
    return (
      <Card className="overflow-hidden">
        <div className="grid md:grid-cols-2">
          <div className="aspect-video md:aspect-auto overflow-hidden">
            <img src={post.image} alt={post.title} className="w-full h-full object-cover" />
          </div>
          <CardContent className="p-8 md:p-12 flex flex-col justify-center">
            <div className="flex items-center gap-4 mb-4">
              <span className="px-3 py-1 bg-accent/10 text-accent text-sm font-medium rounded-full">
                {post.category}
              </span>
              <span className="text-sm text-muted-foreground">{post.date}</span>
            </div>
            <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground mb-4">
              {post.title}
            </h2>
            <p className="font-body text-muted-foreground leading-relaxed">{post.excerpt}</p>
          </CardContent>
        </div>
      </Card>
    );
  }

  return (
    <Card className="overflow-hidden hover-lift h-full flex flex-col group">
      <div className="aspect-video overflow-hidden">
        <img
          src={post.image}
          alt={post.title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
      </div>
      <CardContent className="p-6 flex-1 flex flex-col">
        <div className="flex items-center gap-4 mb-4">
          <span className="px-3 py-1 bg-accent/10 text-accent text-xs font-medium rounded-full">
            {post.category}
          </span>
          <span className="text-xs text-muted-foreground">{post.date}</span>
        </div>
        <h3 className="font-heading text-lg font-semibold text-foreground mb-3">{post.title}</h3>
        <p className="font-body text-sm text-muted-foreground flex-1 leading-relaxed">
          {post.excerpt}
        </p>
      </CardContent>
    </Card>
  );
};

export default Blog;
