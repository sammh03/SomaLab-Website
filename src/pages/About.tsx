import { motion } from "framer-motion";
import { Heart, Target, Users, Leaf, CheckCircle, ArrowRight, Award, BookOpen, Shield } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { SEO } from "@/components/SEO";
import { SITE_URL, personSchema } from "@/lib/seo-config";
import coachImage from "@/assets/coach-portrait.jpg";

const aboutSchemas = [
  personSchema,
  {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
      { "@type": "ListItem", position: 2, name: "About", item: `${SITE_URL}/about` },
    ],
  },
];

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 },
};

const values = [
  {
    icon: Heart,
    title: "Client-Centred Care",
    description: "Your goals, preferences, and lifestyle are at the heart of every recommendation. We listen first, then create strategies that work for you.",
  },
  {
    icon: Target,
    title: "Evidence-Based Practice",
    description: "Every recommendation is grounded in peer-reviewed research and clinical best practices. No fads, no pseudoscience—just what works.",
  },
  {
    icon: Users,
    title: "Genuine Partnership",
    description: "We're not here to lecture. We work alongside you, providing support, accountability, and expertise when you need it most.",
  },
  {
    icon: Leaf,
    title: "Sustainable Outcomes",
    description: "Quick fixes don't last. We focus on building lifelong habits and empowering you with the knowledge to maintain your results.",
  },
];

const credentials = [
  {
    icon: Award,
    title: "Clinical Nutrition & Health Specialist",
    description: "Evidence-based nutrition expertise grounded in scientific training and real-world healthcare experience, with a strong focus on practical, sustainable outcomes."
  },
  {
    icon: BookOpen,
    title: "Medical Laboratory Scientist",
    description: "Bachelor-qualified laboratory scientist with extensive clinical and diagnostic experience, bringing a deep understanding of human physiology, pathology, and data-driven health insights."
  },
  {
    icon: Shield,
    title: "Professional Membership",
    description: "Member of the Nutrition Society of Australia (NSA)"
  },
  {
    icon: Heart,
    title: "Continuing Education",
    description: "Regular check-ins, responsive communication, and genuine care to keep you motivated and on track."
  }
];

const processSteps = [
  {
    step: "01",
    title: "Initial Consultation",
    description: "We begin with a comprehensive assessment of your current health, lifestyle, dietary habits, and goals. This helps us understand your unique situation and identify opportunities for improvement.",
  },
  {
    step: "02",
    title: "Custom Plan Creation",
    description: "Based on your assessment, we craft a personalised nutrition strategy that fits your lifestyle, food preferences, budget, and objectives—never a cookie-cutter approach.",
  },
  {
    step: "03",
    title: "Implementation Support",
    description: "We guide you through putting your plan into action with practical tips, meal ideas, and strategies to overcome common challenges and build lasting habits.",
  },
  {
    step: "04",
    title: "Ongoing Optimisation",
    description: "Regular check-ins allow us to track your progress, celebrate wins, navigate obstacles, and fine-tune your plan as your needs evolve.",
  },
];

const About = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="section-padding bg-secondary">
        <div className="container mx-auto px-4">
          <motion.div
            className="max-w-3xl mx-auto text-center"
            initial="initial"
            animate="animate"
            variants={fadeInUp}
          >
            <span className="inline-block px-4 py-1.5 bg-accent/10 text-accent rounded-full text-sm font-medium mb-6">
              About SomaLab
            </span>
            <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
              Where Science Meets{" "}
              <span className="text-gradient">Personalised Care</span>
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
              SomaLab was founded on a simple belief: everyone deserves access to 
              evidence-based nutrition guidance that's tailored to their unique body, 
              lifestyle, and goals. We're here to cut through the noise and help you 
              achieve sustainable health outcomes.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Founder Story */}
      <section className="section-padding">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <img
                src={coachImage}
                alt="SomaLab founder and nutrition consultant"
                className="rounded-2xl shadow-xl w-full aspect-[4/5] object-cover"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <div>
                <span className="inline-block px-4 py-1.5 bg-accent/10 text-accent rounded-full text-sm font-medium mb-4">
                  The SomaLab Story
                </span>
                <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-4">
                  From Lab Coat to Life Coach
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  My journey to founding SomaLab began in the medical laboratory, where I spent 
                  years analysing blood samples and observing firsthand how lifestyle factors 
                  impact health markers. I saw patterns—clients whose test results improved 
                  dramatically through nutrition changes, and others who struggled despite 
                  following generic diet advice.
                </p>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  This sparked a passion that led me to pursue advanced qualifications in 
                  nutrition consulting. I realised that what people needed wasn't another 
                  restrictive diet—they needed personalised, science-backed guidance that 
                  fit their real lives.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  Today, SomaLab combines my clinical background with a deep commitment to 
                  helping health-conscious Australians achieve sustainable fat loss, improved 
                  performance, and genuine wellbeing.&nbsp;
                </p>
              </div>
              <div className="flex flex-wrap gap-4">
                <div className="flex items-center gap-2 text-foreground">
                  <CheckCircle className="h-5 w-5 text-accent" />
                  <span className="text-sm font-medium">Evidence-Based Methods</span>
                </div>
                <div className="flex items-center gap-2 text-foreground">
                  <CheckCircle className="h-5 w-5 text-accent" />
                  <span className="text-sm font-medium">Australian Qualified</span>
                </div>
                <div className="flex items-center gap-2 text-foreground">
                  <CheckCircle className="h-5 w-5 text-accent" />
                  <span className="text-sm font-medium">{"\n"}</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="section-padding bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-card p-8 rounded-2xl"
            >
              <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground mb-4">
                Our Mission
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                To empower Australians to take control of their health through personalised, 
                evidence-based nutrition coaching. We believe that sustainable wellbeing 
                shouldn't require extreme measures—just the right guidance, tailored to you.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
              className="bg-card p-8 rounded-2xl"
            >
              <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground mb-4">
                Our Vision
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                A world where preventive health through proper nutrition is accessible to all. 
                We envision communities where people are educated, empowered, and enthusiastic 
                about making food choices that fuel their best lives—free from diet culture 
                and misinformation.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Credentials Section */}
      <section className="section-padding">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center max-w-2xl mx-auto mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <span className="inline-block px-4 py-1.5 bg-accent/10 text-accent rounded-full text-sm font-medium mb-4">
              Credentials & Affiliations
            </span>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-4">
              Qualified & Committed
            </h2>
            <p className="text-muted-foreground">
              Your health is too important for unqualified advice. Here's why you can trust SomaLab.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {credentials.map((credential, index) => (
              <motion.div
                key={credential.title}
                className="bg-card p-6 rounded-xl border border-border"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mb-4">
                  <credential.icon className="h-6 w-6 text-accent" />
                </div>
                <h3 className="font-heading text-lg font-semibold text-foreground mb-2">
                  {credential.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {credential.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="section-padding bg-secondary/30">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center max-w-2xl mx-auto mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <span className="inline-block px-4 py-1.5 bg-accent/10 text-accent rounded-full text-sm font-medium mb-4">
              Our Values
            </span>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-4">
              What We Stand For
            </h2>
            <p className="text-muted-foreground">
              These core values guide everything we do at SomaLab, from how we work with clients 
              to how we develop our programs.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                className="bg-card p-6 rounded-xl border border-border hover-lift"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mb-4">
                  <value.icon className="h-6 w-6 text-accent" />
                </div>
                <h3 className="font-heading text-xl font-semibold text-foreground mb-2">
                  {value.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* How We Work */}
      <section className="section-padding">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center max-w-2xl mx-auto mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <span className="inline-block px-4 py-1.5 bg-accent/10 text-accent rounded-full text-sm font-medium mb-4">
              Our Process
            </span>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-4">
              How We Work With You
            </h2>
            <p className="text-muted-foreground">
              Our structured yet flexible approach ensures you receive the support and guidance 
              you need at every stage of your wellness journey.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map((step, index) => (
              <motion.div
                key={step.step}
                className="relative"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <span className="font-heading text-6xl font-bold text-accent/20 absolute -top-4 left-0">
                  {step.step}
                </span>
                <div className="pt-10">
                  <h3 className="font-heading text-xl font-semibold text-foreground mb-3">
                    {step.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-primary text-primary-foreground">
        <div className="container mx-auto px-4">
          <motion.div
            className="max-w-3xl mx-auto text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="font-heading text-3xl md:text-4xl font-bold mb-6">
              Ready to Start Your Journey?
            </h2>
            <p className="text-primary-foreground/80 mb-8 text-lg">
              Join hundreds of Australians who have transformed their health with SomaLab. 
              Book a free consultation today and take the first step toward sustainable wellbeing.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                asChild
                size="lg"
                variant="secondary"
                className="font-medium"
              >
                <Link to="/contact">
                  Book Free Consultation
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="font-medium bg-transparent border-primary-foreground/40 text-primary-foreground hover:bg-primary-foreground/10 hover:text-primary-foreground"
              >
                <Link to="/services">View Our Services</Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default About;
