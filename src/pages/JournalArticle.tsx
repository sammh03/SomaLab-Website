import { useParams, Link, Navigate } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { getArticleBySlug } from "@/data/journal";

/**
 * Reusable long-form article template.
 * Reads the slug from the URL and renders the matching entry
 * from src/data/journal.ts.
 *
 * Add a new article by:
 *   1. Adding an entry to journalArticles with status: "published"
 *   2. (Already wired) Visiting /journal/<slug>
 */
const JournalArticle = () => {
  const { slug } = useParams<{ slug: string }>();
  const article = slug ? getArticleBySlug(slug) : undefined;

  if (!article || article.status !== "published") {
    return <Navigate to="/blog" replace />;
  }

  return (
    <article className="bg-background">
      {/* Hero */}
      <header className="pt-12 md:pt-20">
        <div className="container mx-auto px-4 max-w-3xl">
          <Link
            to="/blog"
            className="inline-flex items-center gap-2 font-body text-xs tracking-[0.2em] uppercase text-muted-foreground hover:text-foreground transition-colors mb-10"
          >
            <ArrowLeft className="h-3.5 w-3.5" />
            Back to Journal
          </Link>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="flex items-center gap-3 mb-6">
              <span className="font-body text-[0.7rem] tracking-[0.25em] uppercase text-primary">
                {article.category}
              </span>
              {article.date && (
                <>
                  <span className="text-muted-foreground/50">·</span>
                  <span className="font-body text-xs text-muted-foreground">
                    {new Date(article.date).toLocaleDateString("en-AU", {
                      day: "numeric",
                      month: "long",
                      year: "numeric",
                    })}
                  </span>
                </>
              )}
              {article.readingTime && (
                <>
                  <span className="text-muted-foreground/50">·</span>
                  <span className="font-body text-xs text-muted-foreground">
                    {article.readingTime}
                  </span>
                </>
              )}
            </div>

            <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-medium text-foreground leading-[1.1] mb-6">
              {article.title}
            </h1>

            <p className="font-body text-lg md:text-xl text-muted-foreground leading-relaxed mb-10">
              {article.excerpt}
            </p>

            {article.author && (
              <p className="font-body text-sm text-muted-foreground border-t border-border pt-6">
                By <span className="text-foreground">{article.author}</span>
              </p>
            )}
          </motion.div>
        </div>
      </header>

      {/* Hero image */}
      {article.image && (
        <motion.figure
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="container mx-auto px-4 max-w-5xl mt-12 md:mt-16"
        >
          <div className="aspect-[16/9] overflow-hidden rounded-sm">
            <img
              src={article.image}
              alt={article.title}
              className="w-full h-full object-cover"
            />
          </div>
        </motion.figure>
      )}

      {/* Body */}
      <div className="container mx-auto px-4 max-w-2xl py-16 md:py-24">
        <div className="prose-journal space-y-6 font-body text-foreground/85 leading-[1.85] text-lg">
          {article.body?.map((block, i) => {
            if (block.startsWith("## ")) {
              return (
                <h2
                  key={i}
                  className="font-heading text-2xl md:text-3xl font-medium text-foreground mt-12 mb-4"
                >
                  {block.replace(/^##\s+/, "")}
                </h2>
              );
            }
            return <p key={i}>{block}</p>;
          })}
        </div>

        {/* Footer */}
        <div className="mt-20 pt-10 border-t border-border text-center">
          <p className="font-body text-sm text-muted-foreground mb-6">
            Ready to apply this in your own protocol?
          </p>
          <Button asChild size="lg">
            <a
              href="https://calendly.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              Book a Consultation
            </a>
          </Button>
        </div>
      </div>
    </article>
  );
};

export default JournalArticle;
