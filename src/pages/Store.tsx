import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";

const Store = () => {
  return (
    <div>
      <section className="min-h-[80vh] flex items-center justify-center section-padding bg-secondary">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="max-w-2xl mx-auto text-center"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-accent/10 mb-8"
            >
              <Sparkles className="h-7 w-7 text-accent" />
            </motion.div>

            <motion.span
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="inline-block px-4 py-1.5 mb-6 text-sm font-medium tracking-wide bg-accent/10 text-accent rounded-full uppercase"
            >
              SomaLab Store
            </motion.span>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.4 }}
              className="font-heading text-5xl md:text-6xl lg:text-7xl font-bold text-foreground mb-6 tracking-tight"
            >
              Coming Soon
            </motion.h1>

            <motion.div
              initial={{ opacity: 0, scaleX: 0 }}
              animate={{ opacity: 1, scaleX: 1 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="w-16 h-px bg-accent mx-auto mb-8"
            />

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.7 }}
              className="font-body text-lg md:text-xl text-muted-foreground leading-relaxed mb-10 max-w-xl mx-auto"
            >
              We're carefully developing a range of premium, science-backed products. Stay tuned.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.9 }}
              className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            >
              <Button asChild size="lg">
                <a href="mailto:info@somalab.com.au?subject=Notify me when the SomaLab Store launches">
                  Notify Me
                </a>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link to="/contact">
                  Book a Consultation
                </Link>
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Store;
