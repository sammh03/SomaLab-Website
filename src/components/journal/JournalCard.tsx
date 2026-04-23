import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";
import type { JournalArticle } from "@/data/journal";

interface JournalCardProps {
  article: JournalArticle;
  index?: number;
}

/**
 * Reusable Journal article card.
 * - Renders as a clickable link when status === "published"
 * - Renders as a refined "Coming Soon" placeholder otherwise
 */
export const JournalCard = ({ article, index = 0 }: JournalCardProps) => {
  const isPublished = article.status === "published";

  const Wrapper = ({ children }: { children: React.ReactNode }) =>
    isPublished ? (
      <Link to={`/journal/${article.slug}`} className="group block h-full">
        {children}
      </Link>
    ) : (
      <div className="group block h-full cursor-default" aria-disabled="true">
        {children}
      </div>
    );

  return (
    <motion.article
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.7, delay: index * 0.08, ease: [0.22, 1, 0.36, 1] }}
      className="h-full"
    >
      <Wrapper>
        {/* Image / placeholder */}
        <div className="relative aspect-[4/5] overflow-hidden rounded-sm bg-muted mb-6">
          {article.image ? (
            <img
              src={article.image}
              alt={article.title}
              loading="lazy"
              className={`h-full w-full object-cover transition-transform duration-[1200ms] ease-out ${
                isPublished ? "group-hover:scale-105" : "blur-sm scale-105 opacity-70"
              }`}
            />
          ) : (
            // Elegant gradient placeholder — soft, organic, on-brand
            <div
              className="h-full w-full"
              style={{
                background:
                  "linear-gradient(135deg, hsl(40 25% 92%) 0%, hsl(168 20% 80%) 55%, hsl(40 30% 88%) 100%)",
              }}
            />
          )}

          {!isPublished && (
            <div className="absolute inset-0 flex items-end p-5">
              <span className="font-body text-[0.65rem] tracking-[0.25em] uppercase text-foreground/70 bg-background/80 backdrop-blur-sm px-3 py-1.5 rounded-sm">
                Coming Soon
              </span>
            </div>
          )}
        </div>

        {/* Meta */}
        <div className="flex items-center gap-3 mb-3">
          <span className="font-body text-[0.7rem] tracking-[0.2em] uppercase text-primary">
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
        </div>

        {/* Title */}
        <h3 className="font-heading text-xl md:text-2xl font-medium text-foreground leading-snug mb-3 transition-colors group-hover:text-primary">
          {article.title}
        </h3>

        {/* Excerpt */}
        <p className="font-body text-sm text-muted-foreground leading-relaxed mb-5">
          {article.excerpt}
        </p>

        {/* Read More */}
        {isPublished ? (
          <span className="inline-flex items-center gap-1.5 font-body text-xs tracking-[0.2em] uppercase text-foreground border-b border-foreground/30 pb-1 group-hover:border-foreground transition-colors">
            Read More
            <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </span>
        ) : (
          <span className="inline-flex items-center gap-1.5 font-body text-xs tracking-[0.2em] uppercase text-muted-foreground/60">
            In Preparation
          </span>
        )}
      </Wrapper>
    </motion.article>
  );
};
