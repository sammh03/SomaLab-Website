import { motion } from "framer-motion";
import { ArrowRight, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import blogNutrition from "@/assets/blog-nutrition.jpg";
import blogWellness from "@/assets/blog-wellness.jpg";
import blogBreakfast from "@/assets/blog-breakfast.jpg";

const blogPosts = [
  {
    id: 1,
    title: "The Science of Balanced Nutrition: What Really Works",
    excerpt: "Discover the evidence-based principles behind sustainable healthy eating and why fad diets fail.",
    image: blogNutrition,
    date: "January 5, 2026",
    category: "Nutrition"
  },
  {
    id: 2,
    title: "Morning Rituals That Transform Your Day",
    excerpt: "Learn how simple morning habits can boost your energy, focus, and overall wellbeing.",
    image: blogWellness,
    date: "January 2, 2026",
    category: "Wellness"
  },
  {
    id: 3,
    title: "Power Breakfast Ideas for Busy Professionals",
    excerpt: "Quick, nutritious breakfast recipes that fuel your body and fit your schedule.",
    image: blogBreakfast,
    date: "December 28, 2025",
    category: "Recipes"
  }
];

const categories = ["All", "Nutrition", "Wellness", "Recipes", "Mindset"];

const Blog = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="section-padding bg-secondary">
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
              Insights for Your Wellness Journey
            </h1>
            <p className="font-body text-lg text-muted-foreground max-w-2xl mx-auto">
              Expert tips, evidence-based insights, and practical advice to help you 
              live your healthiest life.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-8 border-b border-border">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-2">
            {categories.map((category) => (
              <Button
                key={category}
                variant={category === "All" ? "default" : "outline"}
                size="sm"
              >
                {category}
              </Button>
            ))}
          </div>
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
                    src={blogPosts[0].image}
                    alt={blogPosts[0].title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <CardContent className="p-8 md:p-12 flex flex-col justify-center">
                  <div className="flex items-center gap-4 mb-4">
                    <span className="px-3 py-1 bg-accent/10 text-accent text-sm font-medium rounded-full">
                      {blogPosts[0].category}
                    </span>
                    <span className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Calendar className="h-4 w-4" />
                      {blogPosts[0].date}
                    </span>
                  </div>
                  <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground mb-4">
                    {blogPosts[0].title}
                  </h2>
                  <p className="font-body text-muted-foreground mb-6 leading-relaxed">
                    {blogPosts[0].excerpt}
                  </p>
                  <Button className="w-fit">
                    Read Article
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </CardContent>
              </div>
            </Card>
          </motion.div>

          {/* Other Posts */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.slice(1).map((post, index) => (
              <motion.div
                key={post.id}
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
                    <p className="font-body text-sm text-muted-foreground flex-1">
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

          {/* Newsletter */}
          <motion.div
            className="mt-16 bg-primary rounded-2xl p-8 md:p-12 text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="font-heading text-2xl md:text-3xl font-bold text-primary-foreground mb-4">
              Get Weekly Wellness Tips
            </h2>
            <p className="font-body text-primary-foreground/80 mb-6 max-w-xl mx-auto">
              Subscribe to our newsletter for the latest nutrition insights, 
              recipes, and exclusive content.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-lg bg-primary-foreground/10 border border-primary-foreground/20 text-primary-foreground placeholder:text-primary-foreground/50 focus:outline-none focus:ring-2 focus:ring-primary-foreground/30"
              />
              <Button variant="secondary" size="lg">
                Subscribe
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Blog;
