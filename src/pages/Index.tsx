import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, Leaf, Heart, Users, Star, FlaskConical, Clock, Target } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-image.jpg";
import coachPortrait from "@/assets/coach-portrait.jpg";

const reviews = [
  {
    name: "Sarah M.",
    rating: 5,
    text: "After years of yo-yo dieting, SomaLab helped me understand my body and build sustainable habits. I've lost 12kg and kept it off for over a year now!",
    date: "2 weeks ago"
  },
  {
    name: "Michael R.",
    rating: 5,
    text: "The science-based approach really sets SomaLab apart. As someone who was sceptical of 'wellness coaches', the evidence-backed methods won me over completely.",
    date: "1 month ago"
  },
  {
    name: "Jennifer L.",
    rating: 5,
    text: "Finally found a nutrition consultant who listens and adapts to my lifestyle. No rigid meal plans—just practical strategies that work for busy mums like me.",
    date: "3 weeks ago"
  },
  {
    name: "David K.",
    rating: 5,
    text: "My energy levels and athletic performance have improved dramatically. The personalised approach to sports nutrition was exactly what I needed.",
    date: "1 month ago"
  }
];

const howItWorks = [
  {
    step: "01",
    icon: Clock,
    title: "Book Your Free Consultation",
    description: "Schedule a complimentary 30-minute discovery call to discuss your health goals and see if we're the right fit for you."
  },
  {
    step: "02",
    icon: FlaskConical,
    title: "Comprehensive Assessment",
    description: "We analyse your lifestyle, dietary habits, health history, and goals to create a complete picture of your nutritional needs."
  },
  {
    step: "03",
    icon: Target,
    title: "Personalised Plan Creation",
    description: "Receive a tailored nutrition strategy designed specifically for your body, preferences, and lifestyle—no cookie-cutter approaches."
  },
  {
    step: "04",
    icon: Heart,
    title: "Ongoing Support & Results",
    description: "Regular check-ins, plan adjustments, and accountability coaching ensure you achieve sustainable, long-term transformation."
  }
];

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
            alt="Fresh healthy foods and nutritious ingredients"
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
              Evidence-Based Nutrition Consulting
            </span>
            <h1 className="font-heading text-5xl md:text-6xl lg:text-7xl font-bold text-foreground mb-6 leading-tight">
              Achieve Lasting
              <span className="text-gradient"> Health</span>
              <br />
              With Science, Not Fads
            </h1>
            <p className="font-body text-lg md:text-xl text-muted-foreground mb-8 leading-relaxed">
              SomaLab helps health-conscious Australians achieve sustainable fat loss, 
              peak performance, and total wellbeing through personalised, evidence-based 
              nutrition coaching. No restrictive diets. No quick fixes. Just real results.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button asChild size="lg" className="text-base">
                <a href="https://calendly.com" target="_blank" rel="noopener noreferrer">
                  Book a Free Consultation
                  <ArrowRight className="ml-2 h-5 w-5" />
                </a>
              </Button>
              <Button asChild variant="outline" size="lg" className="text-base">
                <Link to="/services">View Our Services</Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Why Choose SomaLab Section */}
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
              We combine scientific rigour with personalised care to deliver nutrition strategies that actually work for your unique body and lifestyle.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: FlaskConical,
                title: "Evidence-Based Methods",
                description: "Every recommendation is grounded in peer-reviewed research and clinical best practices—no fads or pseudoscience."
              },
              {
                icon: Leaf,
                title: "Personalised Strategies",
                description: "Your plan is tailored to your body, goals, food preferences, and lifestyle. No one-size-fits-all approaches here."
              },
              {
                icon: Heart,
                title: "Holistic Wellbeing Focus",
                description: "We address nutrition alongside sleep, stress, and movement because true health requires a whole-body approach."
              },
              {
                icon: Users,
                title: "Genuine Support & Accountability",
                description: "Regular check-ins, responsive communication, and genuine care to keep you motivated and on track."
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

      {/* How It Works Section */}
      <section className="section-padding">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block px-4 py-1.5 mb-4 text-sm font-medium bg-primary/10 text-primary rounded-full">
              Your Journey
            </span>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-4">
              How It Works
            </h2>
            <p className="font-body text-muted-foreground max-w-2xl mx-auto">
              Getting started is simple. Here's what to expect when you partner with SomaLab.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {howItWorks.map((item, index) => (
              <motion.div
                key={item.step}
                className="relative"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
              >
                <span className="font-heading text-6xl font-bold text-accent/20 absolute -top-4 left-0">
                  {item.step}
                </span>
                <div className="pt-12 pl-2">
                  <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mb-4">
                    <item.icon className="h-6 w-6 text-accent" />
                  </div>
                  <h3 className="font-heading text-xl font-semibold text-foreground mb-3">
                    {item.title}
                  </h3>
                  <p className="font-body text-muted-foreground text-sm leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="section-padding bg-secondary">
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
                alt="SomaLab Founder - Nutrition Consultant and Health Coach"
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
                Science Meets Compassion
              </h2>
              <p className="font-body text-muted-foreground mb-6 leading-relaxed">
                With a background in medical laboratory science and advanced qualifications 
                in nutrition consulting, I founded SomaLab to bridge the gap between clinical 
                evidence and practical, everyday wellness. I've helped hundreds of Australians 
                transform their relationship with food and achieve lasting results.
              </p>
              <p className="font-body text-muted-foreground mb-8 leading-relaxed">
                Whether you're looking to optimise body composition, boost your energy, 
                improve athletic performance, or simply feel your best, I'm here to guide 
                you with evidence-based strategies tailored to your unique needs.
              </p>
              <Button asChild>
                <Link to="/about">
                  Learn More About Me
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Google Reviews Section */}
      <section className="section-padding">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center justify-center gap-2 mb-4">
              <svg className="h-8 w-8" viewBox="0 0 24 24">
                <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
              </svg>
              <span className="font-heading text-2xl font-bold text-foreground">Google Reviews</span>
            </div>
            <div className="flex items-center justify-center gap-1 mb-2">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="h-6 w-6 fill-accent text-accent" />
              ))}
            </div>
            <p className="font-body text-muted-foreground">
              <span className="font-semibold text-foreground">5.0</span> based on 50+ reviews
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {reviews.map((review, index) => (
              <motion.div
                key={review.name}
                className="bg-card p-6 rounded-2xl shadow-sm"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
              >
                <div className="flex items-center gap-1 mb-3">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-accent text-accent" />
                  ))}
                </div>
                <p className="font-body text-foreground mb-4 text-sm leading-relaxed">
                  "{review.text}"
                </p>
                <div className="flex items-center justify-between">
                  <span className="font-heading font-semibold text-foreground text-sm">
                    {review.name}
                  </span>
                  <span className="font-body text-muted-foreground text-xs">
                    {review.date}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            className="text-center mt-8"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.5 }}
          >
            <a
              href="https://www.google.com/maps"
              target="_blank"
              rel="noopener noreferrer"
              className="font-body text-primary hover:text-primary/80 transition-colors underline underline-offset-4"
            >
              View all reviews on Google
            </a>
          </motion.div>
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
              Ready to Transform Your Health?
            </h2>
            <p className="font-body text-primary-foreground/80 max-w-2xl mx-auto mb-8">
              Take the first step towards sustainable health and wellbeing. Book your free 
              30-minute consultation today and discover how personalised nutrition coaching 
              can help you achieve your goals.
            </p>
            <Button
              asChild
              size="lg"
              variant="secondary"
              className="text-base"
            >
              <a href="https://calendly.com" target="_blank" rel="noopener noreferrer">
                Book Your Free Consultation
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
