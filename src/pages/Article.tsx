import { useEffect } from "react";
import { Link, useParams, Navigate } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft, Calendar, Clock, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import { getPostBySlug, blogPosts } from "@/data/blogPosts";

const formatDate = (iso: string) =>
  new Date(iso).toLocaleDateString("en-AU", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

/**
 * Article Page Template
 * ---------------------
 * Renders an individual blog post in a clean, premium long-form layout.
 * Content is sourced from `src/data/blogPosts.ts`. To publish a post,
 * set its `status` to "published" and add `content` paragraphs.
 */
const Article = () => {
  const { slug } = useParams<{ slug: string }>();
  const post = slug ? getPostBySlug(slug) : undefined;

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
    if (post) {
      document.title = `${post.title} — SomaLab Journal`;
    }
  }, [post]);

  if (!post || post.status !== "published") {
    // Drafts & coming-soon posts redirect back to the journal index.
    return <Navigate to="/blog" replace />;
  }

  const related = blogPosts
    .filter((p) => p.slug !== post.slug && p.status === "published")
    .slice(0, 3);

  return (
    <article>
      {/* Header */}
      <header className="bg-secondary pt-32 pb-12">
        <div className="container mx-auto px-4 max-w-4xl">
          <Link
            to="/blog"
            className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-accent transition-colors mb-8"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Journal
          </Link>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <span className="inline-block px-3 py-1 text-xs font-medium bg-accent/10 text-accent rounded-full mb-6 uppercase tracking-wider">
              {post.category}
            </span>
            <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight mb-6">
              {post.title}
            </h1>
            <p className="font-body text-lg text-muted-foreground max-w-2xl leading-relaxed mb-8">
              {post.excerpt}
            </p>

            <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-muted-foreground border-t border-border/60 pt-6">
              <span className="inline-flex items-center gap-2">
                <User className="h-4 w-4" />
                {post.author}
              </span>
              <span className="inline-flex items-center gap-2">
                <Calendar className="h-4 w-4" />
                {formatDate(post.date)}
              </span>
              <span className="inline-flex items-center gap-2">
                <Clock className="h-4 w-4" />
                {post.readTime}
              </span>
            </div>
          </motion.div>
        </div>
      </header>

      {/* Cover image */}
      {post.coverImage && (
        <div className="container mx-auto px-4 max-w-5xl -mt-4 mb-12">
          <div className="aspect-[16/9] overflow-hidden rounded-2xl shadow-lg">
            <img
              src={post.coverImage}
              alt={post.title}
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      )}

      {/* Body */}
      <section className="pb-20">
        <div className="container mx-auto px-4 max-w-3xl">
          <div className="font-body text-foreground/90 text-lg leading-[1.85] space-y-6">
            {post.content?.map((block, i) => {
              if (block.startsWith("## ")) {
                return (
                  <h2
                    key={i}
                    className="font-heading text-2xl md:text-3xl font-semibold text-foreground mt-12 mb-4"
                  >
                    {block.replace(/^##\s+/, "")}
                  </h2>
                );
              }
              return <p key={i}>{block}</p>;
            })}
          </div>
        </div>
      </section>

      {/* Related */}
      {related.length > 0 && (
        <section className="section-padding bg-secondary">
          <div className="container mx-auto px-4 max-w-5xl">
            <h2 className="font-heading text-2xl md:text-3xl font-semibold text-foreground mb-8">
              Continue Reading
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              {related.map((r) => (
                <Link
                  key={r.slug}
                  to={`/blog/${r.slug}`}
                  className="block group"
                >
                  <div className="aspect-[4/3] bg-muted rounded-xl overflow-hidden mb-4">
                    {r.coverImage && (
                      <img
                        src={r.coverImage}
                        alt={r.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                    )}
                  </div>
                  <p className="text-xs text-accent font-medium uppercase tracking-wider mb-2">
                    {r.category}
                  </p>
                  <h3 className="font-heading text-lg font-semibold text-foreground group-hover:text-accent transition-colors">
                    {r.title}
                  </h3>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA */}
      <section className="section-padding">
        <div className="container mx-auto px-4 max-w-3xl text-center">
          <Button asChild size="lg">
            <Link to="/blog">Back to Journal</Link>
          </Button>
        </div>
      </section>
    </article>
  );
};

export default Article;
