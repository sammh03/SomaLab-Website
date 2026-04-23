import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { useState } from "react";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { toast } from "@/hooks/use-toast";
import blogNutrition from "@/assets/blog-nutrition.jpg";
import blogWellness from "@/assets/blog-wellness.jpg";
import blogBreakfast from "@/assets/blog-breakfast.jpg";

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
    const subject = encodeURIComponent("Newsletter Subscription Request");
    const body = encodeURIComponent(
      `Please subscribe the following email address to the SomaLab newsletter:\n\n${result.data.email}`
    );
    window.location.href = `mailto:hello@somalab.com.au?subject=${subject}&body=${body}`;

    toast({
      title: "Almost there!",
      description: "Your email app will open to confirm your subscription request.",
    });
    setEmail("");
    setSubmitting(false);
  };

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
              SomaLab Blog
            </span>
            <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
              Evidence-Based Health Insights
            </h1>
            <p className="font-body text-lg text-muted-foreground max-w-2xl mx-auto mb-4">
              Cutting through the noise with science-backed nutrition advice, practical wellness tips, 
              and delicious recipes to support your health journey.
            </p>
            <p className="font-body text-sm text-muted-foreground max-w-xl mx-auto">
              All content is written by qualified nutrition professionals and referenced to current research. 
              No fads, no quick fixes—just trustworthy information you can use.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Blog Posts */}
      <section className="section-padding">
        <div className="container mx-auto px-4">
          {/* Featured Post */}
          <motion.div
            className="mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Card className="overflow-hidden">
              <div className="grid md:grid-cols-2">
                <div className="aspect-video md:aspect-auto overflow-hidden">
                  <img
                    src={blogWellness}
                    alt="The Science Behind Sustainable Fat Loss"
                    className="w-full h-full object-cover"
                  />
                </div>
                <CardContent className="p-8 md:p-12 flex flex-col justify-center">
                  <div className="flex items-center gap-4 mb-4">
                    <span className="px-3 py-1 bg-accent/10 text-accent text-sm font-medium rounded-full">
                      Nutrition
                    </span>
                    <span className="text-sm text-muted-foreground">
                      March 15, 2024
                    </span>
                  </div>
                  <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground mb-4">
                    The Science Behind Sustainable Fat Loss: What the Research Actually Says
                  </h2>
                  <p className="font-body text-muted-foreground mb-6 leading-relaxed">
                    Forget the fads and quick fixes. We dive deep into the peer-reviewed research to explain 
                    exactly how sustainable fat loss works—and why most diets fail long-term. Understanding 
                    the science puts you in control of your results.
                  </p>
                  <Button className="w-fit">
                    Read Article
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </CardContent>
              </div>
            </Card>
          </motion.div>

          {/* Blog Post Grid - 3 columns */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                image: blogBreakfast,
                category: "Meal Planning",
                date: "February 28, 2024",
                title: "10 High-Protein Breakfast Ideas That Actually Keep You Full Until Lunch",
                excerpt: "Starting your day with adequate protein isn't just good for muscle—it regulates appetite hormones, stabilises blood sugar, and sets you up for better food choices all day long."
              },
              {
                image: blogNutrition,
                category: "Sports Nutrition",
                date: "February 14, 2024",
                title: "Fuelling Your Workouts: A Practical Guide to Pre and Post-Exercise Nutrition",
                excerpt: "Timing your nutrition around exercise isn't just for elite athletes. Learn the evidence-based principles behind workout fuelling and how to apply them to your training routine."
              },
              {
                image: blogWellness,
                category: "Wellness",
                date: "January 30, 2024",
                title: "Why Sleep Is the Most Underrated Tool for Weight Management",
                excerpt: "Poor sleep doesn't just leave you tired—it disrupts hunger hormones, increases cravings for high-calorie foods, and can sabotage even the best nutrition plan."
              }
            ].map((post, index) => (
              <motion.div
                key={post.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
              >
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
                    <h3 className="font-heading text-lg font-semibold text-foreground mb-3">
                      {post.title}
                    </h3>
                    <p className="font-body text-sm text-muted-foreground flex-1 leading-relaxed">
                      {post.excerpt}
                    </p>
                    <Button variant="link" className="p-0 mt-4 w-fit text-accent">
                      Read More
                      <ArrowRight className="ml-1 h-4 w-4" />
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          {/* Newsletter CTA */}
          <motion.div
            className="mt-16 bg-primary rounded-2xl p-8 md:p-12 text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="font-heading text-2xl md:text-3xl font-bold text-primary-foreground mb-4">
              Get Weekly Evidence-Based Health Tips
            </h2>
            <p className="font-body text-primary-foreground/80 mb-6 max-w-xl mx-auto">
              Subscribe to our newsletter for the latest nutrition research, practical recipes, 
              and exclusive content delivered to your inbox every week. No spam, just science.
            </p>
            <form
              onSubmit={handleSubscribe}
              className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto"
              noValidate
            >
              <input
                type="email"
                required
                maxLength={255}
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                aria-label="Email address"
                className="flex-1 px-4 py-3 rounded-lg bg-primary-foreground/10 border border-primary-foreground/20 text-primary-foreground placeholder:text-primary-foreground/50 focus:outline-none focus:ring-2 focus:ring-primary-foreground/30"
              />
              <Button type="submit" variant="secondary" size="lg" disabled={submitting}>
                {submitting ? "Sending..." : "Subscribe"}
              </Button>
            </form>
            <p className="text-primary-foreground/60 text-xs mt-4">
              By subscribing, you agree to receive email updates from SomaLab. Unsubscribe anytime.
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Blog;
