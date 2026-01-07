import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, Leaf, Heart, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-image.jpg";
import coachPortrait from "@/assets/coach-portrait.jpg";

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 }
};

const Index = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center">
        <div className="absolute inset-0 z-0">
          <img
            src={heroImage}
            alt="Fresh healthy foods"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/70 to-transparent" />
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            className="max-w-2xl"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="inline-block px-4 py-1.5 mb-6 text-sm font-medium bg-accent/10 text-accent rounded-full">
              Nutrition & Wellness Coaching
            </span>
            <h1 className="font-heading text-5xl md:text-6xl lg:text-7xl font-bold text-foreground mb-6 leading-tight">
              Transform Your
              <span className="text-gradient"> Health</span>,
              <br />
              Transform Your Life
            </h1>
            <p className="font-body text-lg md:text-xl text-muted-foreground mb-8 leading-relaxed">
              Personalized nutrition plans and expert coaching to help you achieve 
              sustainable wellness. Start your journey to a healthier, more vibrant you.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button asChild size="lg" className="text-base">
                <a href="https://calendly.com" target="_blank" rel="noopener noreferrer">
                  Book a Consultation
                  <ArrowRight className="ml-2 h-5 w-5" />
                </a>
              </Button>
              <Button asChild variant="outline" size="lg" className="text-base">
                <Link to="/services">View Services</Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="section-padding bg-secondary">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-16"
            {...fadeInUp}
            viewport={{ once: true }}
            whileInView="animate"
            initial="initial"
          >
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-4">
              Why Choose SomaLab?
            </h2>
            <p className="font-body text-muted-foreground max-w-2xl mx-auto">
              Our holistic approach combines science-backed nutrition with personalized coaching.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: Leaf,
                title: "Personalized Plans",
                description: "Custom nutrition strategies tailored to your unique body, lifestyle, and goals."
              },
              {
                icon: Heart,
                title: "Holistic Approach",
                description: "We address nutrition, mindset, and habits for lasting transformation."
              },
              {
                icon: Users,
                title: "Ongoing Support",
                description: "Regular check-ins and adjustments to keep you on track and motivated."
              }
            ].map((feature, index) => (
              <motion.div
                key={feature.title}
                className="bg-card p-8 rounded-2xl shadow-sm hover-lift"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
              >
                <div className="w-14 h-14 bg-accent/10 rounded-xl flex items-center justify-center mb-6">
                  <feature.icon className="h-7 w-7 text-accent" />
                </div>
                <h3 className="font-heading text-xl font-semibold text-foreground mb-3">
                  {feature.title}
                </h3>
                <p className="font-body text-muted-foreground">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="section-padding">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <img
                src={coachPortrait}
                alt="Your Health Coach"
                className="w-full max-w-md mx-auto rounded-2xl shadow-xl"
              />
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <span className="inline-block px-4 py-1.5 mb-4 text-sm font-medium bg-primary/10 text-primary rounded-full">
                Meet Your Coach
              </span>
              <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-6">
                Passionate About Your Wellness Journey
              </h2>
              <p className="font-body text-muted-foreground mb-6 leading-relaxed">
                With years of experience in nutrition science and health coaching, 
                I've helped hundreds of clients transform their relationship with food 
                and achieve their health goals. My approach is rooted in understanding 
                that true wellness comes from sustainable, enjoyable lifestyle changes.
              </p>
              <p className="font-body text-muted-foreground mb-8 leading-relaxed">
                Whether you're looking to lose weight, boost energy, manage a health 
                condition, or simply feel your best, I'm here to guide you every step of the way.
              </p>
              <Button asChild>
                <Link to="/services">
                  Learn More About My Services
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-primary">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-primary-foreground mb-4">
              Ready to Start Your Transformation?
            </h2>
            <p className="font-body text-primary-foreground/80 max-w-2xl mx-auto mb-8">
              Book your free discovery call today and let's create a personalized plan for your health goals.
            </p>
            <Button
              asChild
              size="lg"
              variant="secondary"
              className="text-base"
            >
              <a href="https://calendly.com" target="_blank" rel="noopener noreferrer">
                Schedule Your Free Call
                <ArrowRight className="ml-2 h-5 w-5" />
              </a>
            </Button>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Index;
