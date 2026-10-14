import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, Leaf, Heart, Users, FlaskConical, Clock, Target } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SEO } from "@/components/SEO";
import { SITE_URL, personSchema } from "@/lib/seo-config";
import heroImage from "@/assets/hero-image.jpg";
import coachPortrait from "@/assets/coach-portrait.jpg";

const homepageSchemas = [
  personSchema,
  {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
    ],
  },
];

// (Google Reviews removed for now)


const howItWorks = [
  {
    step: "01",
    icon: Clock,
    title: "Book Your Free Consultation",
    description: "Schedule your complimentary 15-minute consultation to discuss your health goals and see if we're the right fit for you."
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
      <SEO
        title="SomaLab | Evidence-Based Nutrition Coaching Australia"
        description="Personalised, science-backed nutrition coaching for sustainable fat loss and total wellbeing. Brisbane, Gold Coast & Australia-wide."
        canonicalPath="/"
        noSuffix
        schemas={homepageSchemas}
      />
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center">
        <div className="absolute inset-0 z-0">
          <img
            src={heroImage}
            alt="Fresh healthy whole foods and nutritious ingredients on a wooden surface"
            className="w-full h-full object-cover"
            fetchPriority="high"
            decoding="async"
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
            <p className="font-body text-lg md:text-xl text-muted-foreground mb-8 leading-relaxed whitespace-pre-line">
              SomaLab helps health-conscious Australians achieve sustainable fat loss, 
              peak performance, and total wellbeing through personalised, evidence-based 
              nutrition coaching.{"\n\n"}
              No restrictive diets. No quick fixes.&nbsp; &nbsp; &nbsp;{"\n\n"}
              Just real results!
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button asChild size="lg" className="text-base">
                <Link to="/contact">
                  Book Your Free Consultation
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="text-base">
                <Link to="/services">View Our Services</Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* What's in a Name Section */}
      <section style={{ backgroundColor: "#F3EFE7", padding: "120px 0 128px" }}>
        <div className="container mx-auto px-4" style={{ maxWidth: "1000px" }}>
          <motion.div
            className="text-center"
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
          >
            <span
              className="font-body uppercase"
              style={{ fontSize: "12px", letterSpacing: "0.24em", color: "#4E6A63" }}
            >
              What's in a name?
            </span>
            <div
              className="font-heading"
              style={{
                fontSize: "clamp(110px, 20vw, 230px)",
                lineHeight: 1.05,
                color: "#4A8A7E",
                marginBottom: "64px",
              }}
            >
              σῶμα
            </div>
          </motion.div>

          <motion.div
            className="flex flex-col md:flex-row items-center md:items-stretch justify-center gap-8 md:gap-10"
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.15 }}
          >
            <div className="text-left" style={{ maxWidth: "380px" }}>
              <h3 className="font-heading" style={{ fontSize: "34px", color: "#21453E" }}>
                Soma
              </h3>
              <p
                className="font-body uppercase mt-1 mb-4"
                style={{ fontSize: "11px", letterSpacing: "0.16em", color: "#4E6A63" }}
              >
                From the Ancient Greek · Body
              </p>
              <p className="font-body" style={{ fontSize: "15px", lineHeight: 1.75, color: "#3A5751" }}>
                The human body in all its complexity and individuality. More than
                numbers or measurements, it represents the remarkable connection
                between how we function, feel, and live.
              </p>
            </div>

            <span
              className="font-heading flex items-center justify-center shrink-0"
              style={{ fontSize: "26px", color: "#C85A12" }}
              aria-hidden="true"
            >
              +
            </span>

            <div className="text-left" style={{ maxWidth: "380px" }}>
              <h3 className="font-heading" style={{ fontSize: "34px", color: "#21453E" }}>
                Lab
              </h3>
              <p
                className="font-body uppercase mt-1 mb-4"
                style={{ fontSize: "11px", letterSpacing: "0.16em", color: "#4E6A63" }}
              >
                Science · Discovery · Understanding
              </p>
              <p className="font-body" style={{ fontSize: "15px", lineHeight: 1.75, color: "#3A5751" }}>
                A place of exploration, research, and evidence-based
                understanding. Where curiosity meets science, and knowledge
                becomes the foundation for meaningful change.
              </p>
            </div>
          </motion.div>

          <div
            className="mx-auto"
            style={{ width: "48px", height: "1px", backgroundColor: "#C9BFAD", margin: "88px auto 56px" }}
          />

          <motion.div
            className="text-center mx-auto"
            style={{ maxWidth: "660px" }}
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.3 }}
          >
            <h2
              className="font-heading"
              style={{ fontSize: "clamp(32px, 5vw, 46px)", color: "#21453E" }}
            >
              More than a name.{" "}
              <em style={{ color: "#C85A12" }}>A philosophy.</em>
            </h2>
            <p
              className="font-heading mt-6"
              style={{ fontSize: "clamp(18px, 3vw, 22px)", lineHeight: 1.6, color: "#2E4E47" }}
            >
              SomaLab was founded on a simple belief: the better we understand
              our bodies, the better we can care for them.
            </p>
            <p
              className="font-body mt-5"
              style={{ fontSize: "16px", lineHeight: 1.8, color: "#4E6A63" }}
            >
              By bringing together nutrition, physiology, biochemistry, and
              evidence-based insights, we bridge the gap between science and
              everyday wellbeing.
            </p>
          </motion.div>

          <motion.div
            className="flex items-center justify-center flex-wrap text-center"
            style={{ marginTop: "72px", gap: "18px" }}
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.45 }}
          >
            <span style={{ width: "40px", height: "1px", backgroundColor: "#C85A12" }} aria-hidden="true" />
            <span
              className="font-body uppercase font-semibold"
              style={{ fontSize: "13px", letterSpacing: "0.28em", color: "#39796D" }}
            >
              SomaLab · Backed by Science, Built for Results
            </span>
            <span style={{ width: "40px", height: "1px", backgroundColor: "#C85A12" }} aria-hidden="true" />
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
                alt="SomaLab founder — clinical nutrition and health specialist"
                className="w-full max-w-md mx-auto rounded-2xl shadow-xl"
                loading="lazy"
                decoding="async"
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
                Hi, I'm Sam Hanna — founder of SomaLab and your dedicated nutrition coach.
                {"\n"}With a background in medical laboratory science and advanced qualifications 
                in nutrition consulting, I founded SomaLab to bridge the gap between clinical 
                evidence and practical, everyday wellness. 
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
              15-minute consultation today and discover how personalised nutrition coaching 
              can help you achieve your goals.
            </p>
            <Button
              asChild
              size="lg"
              variant="secondary"
              className="text-base"
            >
              <Link to="/contact">
                Book Your Free Consultation
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Index;
