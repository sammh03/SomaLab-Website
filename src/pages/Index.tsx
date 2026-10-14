import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, Leaf, Heart, Users, FlaskConical, Clock, Target, TrendingUp } from "lucide-react";
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
      <section className="bg-soma-white pt-28 md:pt-36 pb-16 md:pb-24">
        <div className="container mx-auto px-4 text-center">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <p className="font-body text-xs md:text-[13px] uppercase tracking-[0.2em] text-soma-muted mb-6">
              Evidence-Based Nutrition Coaching
            </p>
            <h1 className="font-heading font-normal text-soma-ink text-5xl sm:text-6xl md:text-7xl lg:text-8xl leading-[1.05] mb-6">
              Science, made
              <br />
              <em className="italic text-soma-green">personal.</em>
            </h1>
            <p className="font-body text-base md:text-lg text-soma-muted max-w-md mx-auto mb-8 leading-relaxed">
              Nutrition coaching built around how your body actually works. Based in Brisbane and online across
              Australia.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center rounded-full bg-soma-green text-soma-white font-body font-medium text-sm md:text-base px-7 py-3.5 transition-opacity hover:opacity-90"
            >
              Book a free discovery call
            </Link>
          </motion.div>
          <motion.div
            className="mt-12 md:mt-16 max-w-6xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <img
              src={heroImage}
              alt="Fresh healthy whole foods and nutritious ingredients"
              className="w-full h-[300px] sm:h-[400px] md:h-[520px] object-cover rounded-[32px]"
              fetchPriority="high"
              decoding="async"
            />
          </motion.div>
        </div>
      </section>

      {/* What's in a name */}
      <section className="bg-soma-sand py-20 md:py-[120px]">
        <motion.div
          className="container mx-auto px-4 max-w-[1040px] text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="font-body text-xs md:text-[13px] uppercase tracking-[0.2em] text-soma-muted">
            What's in a name
          </p>
          <div className="font-heading text-soma-green text-[96px] sm:text-[140px] md:text-[200px] leading-none my-6 md:my-8">
            σῶμα
          </div>
          <div className="grid md:grid-cols-[1fr_auto_1fr] gap-6 md:gap-12 items-center text-left max-w-[880px] mx-auto">
            <div>
              <h3 className="font-heading font-normal text-3xl md:text-4xl text-soma-ink mb-2">Soma</h3>
              <p className="font-body text-xs uppercase tracking-[0.2em] text-soma-muted mb-4">Noun · Ancient Greek</p>
              <p className="font-body text-soma-muted leading-relaxed">
                The whole of you. To the ancient Greeks, soma was never a number on a scale or a list of symptoms.
                It was the living body: how you eat, move, sleep, recover and feel, all connected.
              </p>
            </div>
            <div className="text-soma-orange text-3xl font-light text-center">+</div>
            <div>
              <h3 className="font-heading font-normal text-3xl md:text-4xl text-soma-ink mb-2">Lab</h3>
              <p className="font-body text-xs uppercase tracking-[0.2em] text-soma-muted mb-4">
                Noun · Where answers are found
              </p>
              <p className="font-body text-soma-muted leading-relaxed">
                A place of curiosity, not judgement. You measure honestly, look closely at what's really there, make
                a change, and see what happens.
              </p>
            </div>
          </div>
          <p className="font-heading text-2xl md:text-[28px] leading-snug text-soma-ink max-w-[680px] mx-auto mt-14 md:mt-20">
            Your body has been telling you things for years. SomaLab is where we finally listen, read the results
            together, and turn them into changes that last.
          </p>
        </motion.div>
      </section>

      {/* Measure / Understand / Change */}
      <section className="bg-soma-white py-20 md:py-28">
        <div className="container mx-auto px-4 max-w-5xl text-center">
          <p className="font-body text-xs md:text-[13px] uppercase tracking-[0.2em] text-soma-muted mb-12">
            How we work together
          </p>
          <div className="grid md:grid-cols-3 gap-12">
            {[
              { icon: Clock, title: "Measure", text: "Your history, routine and goals, plus bloodwork where it helps." },
              { icon: FlaskConical, title: "Understand", text: "What your results actually mean, explained in plain language." },
              { icon: TrendingUp, title: "Change", text: "A plan that fits your life, adjusted as you progress." },
            ].map((c, i) => (
              <motion.div
                key={c.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
              >
                <c.icon className="h-8 w-8 mx-auto text-soma-green mb-5" strokeWidth={1.25} />
                <h3 className="font-heading font-normal text-2xl text-soma-ink mb-3">{c.title}</h3>
                <p className="font-body text-sm text-soma-muted leading-relaxed max-w-[260px] mx-auto">{c.text}</p>
              </motion.div>
            ))}
          </div>
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
