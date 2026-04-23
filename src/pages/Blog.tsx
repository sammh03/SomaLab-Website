import { motion } from "framer-motion";
import { useState } from "react";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { toast } from "@/hooks/use-toast";
import { JournalCard } from "@/components/journal/JournalCard";
import { journalArticles } from "@/data/journal";
import journalHero from "@/assets/journal-hero.jpg";

const newsletterSchema = z.object({
  email: z
    .string()
    .trim()
    .min(1, { message: "Please enter your email address." })
    .email({ message: "Please enter a valid email address." })
    .max(255, { message: "Email must be less than 255 characters." }),
});

const Blog = () => {
  const [email, setEmail] = useState("");
  const [submitting, setSubmitting] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    const result = newsletterSchema.safeParse({ email });
    if (!result.success) {
      toast({
        title: "Invalid email",
        description: result.error.issues[0]?.message ?? "Please check your email address.",
        variant: "destructive",
      });
      return;
    }

    setSubmitting(true);
    const subject = encodeURIComponent("Notify me — SomaLab Journal");
    const body = encodeURIComponent(
      `Please notify the following email when the SomaLab Journal launches:\n\n${result.data.email}`
    );
    window.location.href = `mailto:hello@somalab.com.au?subject=${subject}&body=${body}`;

    toast({
      title: "Almost there",
      description: "Your email app will open to confirm.",
    });
    setEmail("");
    setSubmitting(false);
  };

  return (
    <div className="bg-background">
      {/* ───────── Hero ───────── */}
      <section className="relative min-h-[80vh] flex items-center overflow-hidden">
        {/* Background image */}
        <div className="absolute inset-0">
          <img
            src={journalHero}
            alt=""
            aria-hidden="true"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-background/60 to-background" />
        </div>

        <div className="container mx-auto px-4 relative z-10 pt-24 pb-20">
          <motion.div
            className="max-w-3xl"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          >
            <span className="inline-block font-body text-[0.7rem] tracking-[0.3em] uppercase text-primary mb-8">
              The SomaLab Journal
            </span>

            <h1 className="font-heading text-5xl md:text-6xl lg:text-7xl font-medium text-foreground leading-[1.05] mb-8">
              Insights & Research
              <br />
              <span className="italic text-primary/90">Coming Soon</span>
            </h1>

            <div className="h-px w-16 bg-foreground/30 mb-8" />

            <p className="font-body text-lg md:text-xl text-foreground/75 leading-relaxed max-w-xl">
              We're building a space for science-backed insights, education and
              optimisation. A quiet corner of the internet for those who care
              deeply about how their body works.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ───────── Article Grid ───────── */}
      <section className="py-20 md:py-32">
        <div className="container mx-auto px-4">
          {/* Section heading */}
          <motion.div
            className="max-w-2xl mb-16 md:mb-24"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <span className="font-body text-[0.7rem] tracking-[0.3em] uppercase text-muted-foreground mb-4 block">
              In Preparation
            </span>
            <h2 className="font-heading text-3xl md:text-4xl font-medium text-foreground leading-tight">
              A considered library of essays, research breakdowns and protocols.
            </h2>
          </motion.div>

          {/* Reusable grid — drop new articles into journalArticles */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16 md:gap-y-20">
            {journalArticles.map((article, i) => (
              <JournalCard key={article.slug} article={article} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* ───────── Notify Me ───────── */}
      <section className="py-20 md:py-32 bg-secondary">
        <div className="container mx-auto px-4">
          <motion.div
            className="max-w-2xl mx-auto text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <span className="font-body text-[0.7rem] tracking-[0.3em] uppercase text-primary mb-6 block">
              Be the First to Read
            </span>
            <h2 className="font-heading text-3xl md:text-4xl font-medium text-foreground mb-6 leading-tight">
              Receive each new essay, quietly delivered.
            </h2>
            <p className="font-body text-base text-muted-foreground mb-10 leading-relaxed">
              No noise. No filler. Just considered writing on nutrition,
              performance and longevity — sent only when there's something
              worth saying.
            </p>

            <form
              onSubmit={handleSubscribe}
              className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto"
              noValidate
            >
              <input
                type="email"
                required
                maxLength={255}
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="your@email.com"
                aria-label="Email address"
                className="flex-1 px-5 py-3 rounded-sm bg-background border border-border text-foreground placeholder:text-muted-foreground/60 font-body text-sm focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary transition"
              />
              <Button
                type="submit"
                size="lg"
                disabled={submitting}
                className="rounded-sm tracking-[0.15em] uppercase text-xs"
              >
                {submitting ? "Sending..." : "Notify Me"}
              </Button>
            </form>
            <p className="font-body text-xs text-muted-foreground/70 mt-5">
              Unsubscribe anytime. We'll never share your email.
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Blog;
