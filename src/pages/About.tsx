import { motion } from "framer-motion";
import { Heart, Target, Users, Leaf, CheckCircle, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import coachImage from "@/assets/coach-portrait.jpg";

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 },
};

const values = [
  {
    icon: Heart,
    title: "Holistic Wellness",
    description: "We believe true health encompasses mind, body, and spirit. Our approach addresses all aspects of your wellbeing for lasting transformation.",
  },
  {
    icon: Target,
    title: "Personalized Approach",
    description: "No two bodies are the same. We create customized nutrition and wellness plans tailored specifically to your unique needs and goals.",
  },
  {
    icon: Users,
    title: "Community & Support",
    description: "You're never alone on your journey. Our supportive community and dedicated coaches are with you every step of the way.",
  },
  {
    icon: Leaf,
    title: "Sustainable Practices",
    description: "We focus on building habits that last. Our methods are designed for long-term success, not quick fixes.",
  },
];

const processSteps = [
  {
    step: "01",
    title: "Initial Consultation",
    description: "We begin with a comprehensive assessment of your current health, lifestyle, and goals. This helps us understand your unique situation and challenges.",
  },
  {
    step: "02",
    title: "Custom Plan Creation",
    description: "Based on your assessment, we craft a personalized nutrition and wellness plan that fits your lifestyle, preferences, and objectives.",
  },
  {
    step: "03",
    title: "Ongoing Support",
    description: "Regular check-ins, adjustments, and guidance ensure you stay on track. We're here to celebrate wins and navigate challenges together.",
  },
  {
    step: "04",
    title: "Sustainable Results",
    description: "Our goal is to empower you with knowledge and habits that last a lifetime. We measure success by your long-term wellbeing.",
  },
];

const About = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="section-padding bg-secondary/30">
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
              Transforming Lives Through{" "}
              <span className="text-gradient">Mindful Nutrition</span>
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
              At SomaLab, we're passionate about helping you discover the profound connection 
              between what you eat and how you feel. Our mission is to empower individuals to 
              take control of their health through personalized nutrition coaching.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Mission & Vision */}
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
                alt="SomaLab founder and nutrition coach"
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
                <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-4">
                  Our Mission
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  To democratize access to quality nutrition coaching and empower every individual 
                  to achieve optimal health. We believe that everyone deserves personalized guidance 
                  on their wellness journey, regardless of their starting point.
                </p>
              </div>
              <div>
                <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-4">
                  Our Vision
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  A world where preventive health through proper nutrition is the norm, not the exception. 
                  We envision communities where people are educated, empowered, and enthusiastic about 
                  making food choices that fuel their best lives.
                </p>
              </div>
              <div className="flex flex-wrap gap-4">
                <div className="flex items-center gap-2 text-foreground">
                  <CheckCircle className="h-5 w-5 text-accent" />
                  <span className="text-sm font-medium">Evidence-Based Methods</span>
                </div>
                <div className="flex items-center gap-2 text-foreground">
                  <CheckCircle className="h-5 w-5 text-accent" />
                  <span className="text-sm font-medium">Certified Coaches</span>
                </div>
                <div className="flex items-center gap-2 text-foreground">
                  <CheckCircle className="h-5 w-5 text-accent" />
                  <span className="text-sm font-medium">500+ Lives Transformed</span>
                </div>
              </div>
            </motion.div>
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
              Join hundreds of others who have transformed their health with SomaLab. 
              Book a free consultation today and take the first step toward a healthier you.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                asChild
                size="lg"
                variant="secondary"
                className="font-medium"
              >
                <a href="https://calendly.com" target="_blank" rel="noopener noreferrer">
                  Book Free Consultation
                  <ArrowRight className="ml-2 h-4 w-4" />
                </a>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="font-medium border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10"
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
