import { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft, Compass } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SEO } from "@/components/SEO";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <section className="section-padding bg-secondary min-h-[80vh] flex items-center">
      <SEO title="Page Not Found" description="The page you're looking for doesn't exist." noIndex />
      <div className="container mx-auto px-4">
        <motion.div
          className="max-w-xl mx-auto text-center"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-accent/10 mb-8">
            <Compass className="h-7 w-7 text-accent" strokeWidth={1.5} />
          </div>

          <span className="inline-block px-4 py-1.5 mb-6 text-sm font-medium tracking-wide bg-accent/10 text-accent rounded-full uppercase">
            Page not found
          </span>

          <h1 className="font-heading text-5xl md:text-6xl font-bold text-foreground mb-4 tracking-tight">
            404
          </h1>

          <div className="w-16 h-px bg-accent mx-auto mb-6" />

          <p className="font-body text-lg text-muted-foreground mb-10 leading-relaxed">
            The page you're looking for doesn't exist or has been moved.
            Let's get you back on track.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg">
              <Link to="/">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Home
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link to="/services">Explore Services</Link>
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default NotFound;
