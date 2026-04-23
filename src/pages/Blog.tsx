import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, Sparkles, Clock } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { blogPosts, type BlogPost } from "@/data/blogPosts";

const formatDate = (iso: string) =>
  new Date(iso).toLocaleDateString("en-AU", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

const Blog = () => {
  return (
    <div>
      {/* Hero — Coming Soon */}
      <section className="section-padding bg-secondary pt-32">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto"
          >
            <span className="inline-flex items-center gap-2 px-4 py-1.5 mb-6 text-sm font-medium bg-accent/10 text-accent rounded-full">
              <Sparkles className="h-3.5 w-3.5" />
              Coming Soon
            </span>
            <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
              Insights & Research
              <span className="block text-accent">Coming Soon</span>
            </h1>
            <div className="w-16 h-px bg-accent/40 mx-auto my-8" />
            <p className="font-body text-lg text-muted-foreground max-w-2xl mx-auto">
              We're building a space for science-backed insights, education, and
              optimisation. Stay tuned.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Placeholder Article Grid */}
      <section className="section-padding">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <p className="font-heading text-sm uppercase tracking-[0.2em] text-muted-foreground">
              The Journal
            </p>
            <h2 className="font-heading text-2xl md:text-3xl font-semibold text-foreground mt-3">
              A preview of what's ahead
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post, index) => (
              <PlaceholderCard key={post.slug} post={post} index={index} />
            ))}
          </div>

          {/* Subtle footer note */}
          <motion.p
            className="text-center text-sm text-muted-foreground mt-16 max-w-xl mx-auto"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            Our journal will feature long-form, evidence-based writing from
            qualified nutrition professionals — referenced, considered, and
            free of fads.
          </motion.p>
        </div>
      </section>
    </div>
  );
};

interface PlaceholderCardProps {
  post: BlogPost;
  index: number;
}

const PlaceholderCard = ({ post, index }: PlaceholderCardProps) => {
  const isPublished = post.status === "published";
  const CardWrapper = isPublished ? Link : "div";
  const wrapperProps = isPublished ? { to: `/blog/${post.slug}` } : {};

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.08, duration: 0.5 }}
    >
      <CardWrapper {...(wrapperProps as any)} className="block h-full">
        <Card className="overflow-hidden h-full flex flex-col group hover-lift border-border/60">
          {/* Cover / Placeholder thumbnail */}
          <div className="relative aspect-[4/3] overflow-hidden bg-muted">
            {post.coverImage ? (
              <img
                src={post.coverImage}
                alt={post.title}
                className={`w-full h-full object-cover transition-transform duration-500 ${
                  isPublished ? "group-hover:scale-105" : "blur-sm scale-105 opacity-70"
                }`}
              />
            ) : (
              <div className="absolute inset-0 bg-gradient-to-br from-secondary via-muted to-primary/10" />
            )}

            {/* Coming Soon ribbon */}
            {!isPublished && (
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="px-3 py-1 text-[11px] font-medium tracking-[0.18em] uppercase bg-background/90 backdrop-blur-sm text-foreground rounded-full border border-border/60">
                  Coming Soon
                </span>
              </div>
            )}
          </div>

          <CardContent className="p-6 flex-1 flex flex-col">
            <div className="flex items-center gap-3 mb-4 text-xs">
              <span className="px-2.5 py-1 bg-accent/10 text-accent font-medium rounded-full">
                {post.category}
              </span>
              <span className="text-muted-foreground">{formatDate(post.date)}</span>
            </div>

            <h3 className="font-heading text-lg font-semibold text-foreground mb-3 leading-snug">
              {post.title}
            </h3>

            <p className="font-body text-sm text-muted-foreground flex-1 leading-relaxed">
              {post.excerpt}
            </p>

            <div className="mt-5 pt-5 border-t border-border/60 flex items-center justify-between text-sm">
              <span className="inline-flex items-center gap-1.5 text-muted-foreground text-xs">
                <Clock className="h-3.5 w-3.5" />
                {post.readTime}
              </span>
              <span
                className={`inline-flex items-center gap-1 font-medium ${
                  isPublished ? "text-accent" : "text-muted-foreground/60"
                }`}
              >
                Read More
                <ArrowRight className="h-3.5 w-3.5" />
              </span>
            </div>
          </CardContent>
        </Card>
      </CardWrapper>
    </motion.div>
  );
};

export default Blog;
