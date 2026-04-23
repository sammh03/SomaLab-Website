import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Check, X, ArrowRight, Clock, Calendar, Sparkles, Crown, Flame, ClipboardList, Pill, Activity } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";

const BOOKING_URL = "/contact";

const consultations = [
  {
    name: "Initial Consultation",
    duration: "60 minutes",
    price: "$149",
    description: "A deep dive into your health, lifestyle and goals — and a clear plan to move forward.",
    icon: Calendar,
    cta: "Book Initial Consultation",
  },
  {
    name: "Follow-Up Consultation",
    duration: "30 minutes",
    price: "$79",
    description: "Stay on track with focused check-ins, plan refinements and ongoing accountability.",
    icon: Clock,
    cta: "Book Follow-Up",
  },
];

const consultationIncludes = [
  "Personalised advice",
  "Goal setting",
  "Clear next steps",
];

const programTiers = [
  {
    name: "Essential",
    price: "$1,200",
    tagline: "Structured support to build momentum.",
    icon: Sparkles,
    popular: false,
    features: [
      "Fortnightly check-ins",
      "Personalised nutrition plan",
      "Habit coaching framework",
      "Email support",
    ],
    cta: "Start with Essential",
  },
  {
    name: "Advanced",
    price: "$1,800",
    tagline: "Our most popular path — the complete coaching experience.",
    icon: Crown,
    popular: true,
    features: [
      "Weekly coaching calls",
      "Fully personalised plan + adjustments",
      "Habit & behaviour coaching",
      "Unlimited messaging support",
      "Supplement guidance",
      "Progress tracking",
    ],
    cta: "Choose Advanced",
  },
  {
    name: "Elite",
    price: "$2,800",
    tagline: "High-touch, data-driven transformation.",
    icon: Flame,
    popular: false,
    features: [
      "Weekly 1:1 calls",
      "Full lifestyle optimisation",
      "Priority support",
      "Data-driven guidance (bloodwork-informed)",
      "High accountability coaching",
    ],
    cta: "Apply for Elite",
  },
];

const addOns = [
  { name: "Custom Meal Plan", price: "$99", icon: ClipboardList },
  { name: "Supplement Protocol", price: "$79", icon: Pill },
  { name: "Lifestyle Audit", price: "$149", icon: Activity },
];

const phases = [
  {
    label: "Phase 1",
    title: "Foundation",
    weeks: "Weeks 1–3",
    description: "Establish the basics: nutrition principles, daily habits, sleep, and movement. We assess your starting point and build the routines that everything else stands on.",
  },
  {
    label: "Phase 2",
    title: "Optimisation",
    weeks: "Weeks 4–8",
    description: "Refine your plan based on real data and feedback. Dial in macros, energy, training, and recovery — and remove the friction that holds progress back.",
  },
  {
    label: "Phase 3",
    title: "Transformation",
    weeks: "Weeks 9–12",
    description: "Lock in lasting change. Push performance, consolidate results, and build a long-term blueprint you can run on your own — confidently and consistently.",
  },
];

const forYou = [
  "Busy professionals",
  "People wanting sustainable fat loss",
  "Individuals who value structure and accountability",
];

const notForYou = [
  "People looking for quick fixes",
  "Those unwilling to commit",
  "Anyone expecting instant results",
];

const Services = () => {
  return (
    <div>
      {/* Hero */}
      <section className="section-padding bg-secondary">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block px-4 py-1.5 mb-6 text-sm font-medium bg-accent/10 text-accent rounded-full">
              Services & Pricing
            </span>
            <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
              Coaching built around you
            </h1>
            <p className="font-body text-lg text-muted-foreground max-w-2xl mx-auto">
              From one-off consultations to our flagship 12-week transformation, choose the level of support
              that matches where you are — and where you want to be.
            </p>
          </motion.div>
        </div>
      </section>

      {/* 1:1 Consultations */}
      <section className="section-padding">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center max-w-2xl mx-auto mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span className="inline-block px-4 py-1.5 mb-4 text-sm font-medium bg-accent/10 text-accent rounded-full">
              1:1 Consultations
            </span>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-4">
              Focused, personalised sessions
            </h2>
            <p className="text-muted-foreground">
              Every consultation includes personalised advice, clear goal setting and the next steps to act on.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {consultations.map((c, index) => (
              <motion.div
                key={c.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
              >
                <Card className="h-full flex flex-col">
                  <CardHeader>
                    <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mb-4">
                      <c.icon className="h-6 w-6 text-accent" />
                    </div>
                    <CardTitle className="font-heading text-2xl">{c.name}</CardTitle>
                    <CardDescription className="font-body">{c.description}</CardDescription>
                  </CardHeader>
                  <CardContent className="flex-1">
                    <div className="mb-6 flex items-baseline gap-3">
                      <span className="font-heading text-4xl font-bold text-foreground">{c.price}</span>
                      <span className="text-muted-foreground">• {c.duration}</span>
                    </div>
                    <ul className="space-y-2">
                      {consultationIncludes.map((item) => (
                        <li key={item} className="flex items-start gap-2">
                          <Check className="h-4 w-4 text-accent shrink-0 mt-1" />
                          <span className="font-body text-sm text-muted-foreground">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                  <CardFooter>
                    <Button asChild className="w-full" variant="outline">
                      <Link to={BOOKING_URL}>
                        {c.cta}
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                  </CardFooter>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 12-Week Transformation Program — Core Offer */}
      <section className="section-padding bg-secondary">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center max-w-3xl mx-auto mb-14"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span className="inline-block px-4 py-1.5 mb-4 text-sm font-medium bg-accent/10 text-accent rounded-full">
              Core Offer
            </span>
            <h2 className="font-heading text-3xl md:text-5xl font-bold text-foreground mb-4">
              The 12-Week Transformation Program
            </h2>
            <p className="text-muted-foreground text-lg">
              A complete coaching system to rebuild your health, body and habits — in three structured phases.
              Choose the level of support that's right for you.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 items-stretch max-w-6xl mx-auto">
            {programTiers.map((tier, index) => (
              <motion.div
                key={tier.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                className={tier.popular ? "md:-mt-4 md:mb-4" : ""}
              >
                <Card
                  className={`h-full flex flex-col relative ${
                    tier.popular
                      ? "border-accent shadow-xl ring-2 ring-accent/30 bg-card"
                      : ""
                  }`}
                >
                  {tier.popular && (
                    <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                      <span className="bg-accent text-accent-foreground text-xs font-semibold px-3 py-1 rounded-full shadow-md">
                        Most Popular
                      </span>
                    </div>
                  )}
                  <CardHeader className="pt-8">
                    <div
                      className={`w-12 h-12 rounded-lg flex items-center justify-center mb-4 ${
                        tier.popular ? "bg-accent text-accent-foreground" : "bg-accent/10 text-accent"
                      }`}
                    >
                      <tier.icon className="h-6 w-6" />
                    </div>
                    <CardTitle className="font-heading text-2xl">{tier.name}</CardTitle>
                    <CardDescription className="font-body">{tier.tagline}</CardDescription>
                  </CardHeader>
                  <CardContent className="flex-1">
                    <div className="mb-6">
                      <span className="font-heading text-4xl font-bold text-foreground">{tier.price}</span>
                      <span className="text-muted-foreground ml-2">• 12 weeks</span>
                    </div>
                    <ul className="space-y-3">
                      {tier.features.map((feature) => (
                        <li key={feature} className="flex items-start gap-2">
                          <Check className="h-4 w-4 text-accent shrink-0 mt-1" />
                          <span className="font-body text-sm text-foreground/90">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                  <CardFooter>
                    <Button
                      asChild
                      className="w-full"
                      variant={tier.popular ? "default" : "outline"}
                      size="lg"
                    >
                      <Link to={BOOKING_URL}>
                        {tier.cta}
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                  </CardFooter>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Program Phases */}
      <section className="section-padding">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center max-w-2xl mx-auto mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span className="inline-block px-4 py-1.5 mb-4 text-sm font-medium bg-accent/10 text-accent rounded-full">
              Inside the 12 Weeks
            </span>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-4">
              A clear path, broken into three phases
            </h2>
            <p className="text-muted-foreground">
              Every week builds on the last — so progress feels structured, not scattered.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {phases.map((phase, index) => (
              <motion.div
                key={phase.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-card border border-border rounded-2xl p-8 h-full"
              >
                <div className="text-sm font-medium text-accent mb-2">{phase.label} • {phase.weeks}</div>
                <h3 className="font-heading text-2xl font-bold text-foreground mb-3">{phase.title}</h3>
                <p className="font-body text-muted-foreground leading-relaxed">{phase.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Add-Ons */}
      <section className="section-padding bg-secondary">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center max-w-2xl mx-auto mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span className="inline-block px-4 py-1.5 mb-4 text-sm font-medium bg-accent/10 text-accent rounded-full">
              Add-Ons
            </span>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-4">
              Extras to deepen your results
            </h2>
            <p className="text-muted-foreground">Bolt these onto any consultation or program.</p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {addOns.map((addon, index) => (
              <motion.div
                key={addon.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-card border border-border rounded-xl p-6 flex items-center gap-4"
              >
                <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center shrink-0">
                  <addon.icon className="h-6 w-6 text-accent" />
                </div>
                <div className="flex-1">
                  <h3 className="font-heading text-lg font-semibold text-foreground">{addon.name}</h3>
                </div>
                <span className="font-heading text-xl font-bold text-foreground">{addon.price}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Who It's For / Not For */}
      <section className="section-padding">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center max-w-2xl mx-auto mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span className="inline-block px-4 py-1.5 mb-4 text-sm font-medium bg-accent/10 text-accent rounded-full">
              Is This For You?
            </span>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-4">
              Let's be honest about fit
            </h2>
            <p className="text-muted-foreground">
              Coaching only works when expectations are aligned. Here's who we work best with.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-card border border-accent/30 rounded-2xl p-8"
            >
              <h3 className="font-heading text-2xl font-bold text-foreground mb-6">This is for you if you're…</h3>
              <ul className="space-y-4">
                {forYou.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span className="w-6 h-6 rounded-full bg-accent/10 flex items-center justify-center shrink-0 mt-0.5">
                      <Check className="h-3.5 w-3.5 text-accent" />
                    </span>
                    <span className="font-body text-foreground/90">{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-card border border-border rounded-2xl p-8"
            >
              <h3 className="font-heading text-2xl font-bold text-foreground mb-6">This isn't for you if you're…</h3>
              <ul className="space-y-4">
                {notForYou.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span className="w-6 h-6 rounded-full bg-muted flex items-center justify-center shrink-0 mt-0.5">
                      <X className="h-3.5 w-3.5 text-muted-foreground" />
                    </span>
                    <span className="font-body text-muted-foreground">{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Booking / Discovery Call CTA */}
      <section className="section-padding bg-primary">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-2xl mx-auto"
          >
            <span className="inline-block px-4 py-1.5 mb-6 text-sm font-medium bg-accent/20 text-accent-foreground rounded-full">
              Free Discovery Call
            </span>
            <h2 className="font-heading text-3xl md:text-5xl font-bold text-primary-foreground mb-4">
              Not sure where to start?
            </h2>
            <p className="font-body text-primary-foreground/80 text-lg mb-8">
              Book a free 15–20 minute discovery call. We'll talk through your goals, answer your questions, and
              help you decide if SomaLab is the right fit. No pressure, no obligations.
            </p>
            <Button asChild size="lg" variant="secondary" className="text-base">
              <Link to={BOOKING_URL}>
                Book Your Free Discovery Call
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Services;
