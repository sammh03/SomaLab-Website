import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  Check,
  X,
  ArrowRight,
  Calendar,
  Clock,
  Sparkles,
  Crown,
  Building2,
  Utensils,
  FlaskConical,
  Info,
  ShieldCheck,
  Star,
  TrendingUp,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { SEO } from "@/components/SEO";
import { SITE_URL, BUSINESS } from "@/lib/seo-config";

const BOOKING_URL = "/contact";

/** Service catalog as Schema.org Service items — keeps schema in sync with displayed pricing. */
const servicesSchemas = [
  {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: "Nutrition Consultation",
    name: "Initial Nutrition Consultation",
    description:
      "75-minute comprehensive first session covering full health & lifestyle assessment, dietary analysis and a personalised nutrition strategy.",
    provider: { "@id": `${SITE_URL}/#business` },
    areaServed: BUSINESS.areaServed.map((name) => ({ "@type": "Place", name })),
    offers: {
      "@type": "Offer",
      price: "195",
      priceCurrency: "AUD",
      availability: "https://schema.org/InStock",
      url: `${SITE_URL}/contact`,
    },
  },
  {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: "Follow-Up Consultation",
    name: "Follow-Up Consultation",
    description:
      "45-minute follow-up session for progress review, troubleshooting and plan refinement.",
    provider: { "@id": `${SITE_URL}/#business` },
    offers: {
      "@type": "Offer",
      price: "150",
      priceCurrency: "AUD",
      url: `${SITE_URL}/contact`,
    },
  },
  {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: "12-Week Program",
    name: "12-Week Health Optimisation",
    description:
      "Flagship 12-week nutrition and lifestyle transformation program with weekly support, meal planning guidance and final maintenance plan.",
    provider: { "@id": `${SITE_URL}/#business` },
    offers: {
      "@type": "Offer",
      price: "997",
      priceCurrency: "AUD",
      url: `${SITE_URL}/contact`,
    },
  },
  {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: "Meal Planning & Accountability",
    name: "Meal Planning & Accountability",
    description:
      "Monthly subscription with weekly personalised meal plan guidance, fortnightly check-ins and unlimited messaging support.",
    provider: { "@id": `${SITE_URL}/#business` },
    offers: {
      "@type": "Offer",
      price: "297",
      priceCurrency: "AUD",
      url: `${SITE_URL}/contact`,
    },
  },
  {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: "Corporate Wellness",
    name: "Corporate Wellness Programs",
    description:
      "Custom workplace nutrition programs including group workshops, individual employee consultations and lunch & learn sessions.",
    provider: { "@id": `${SITE_URL}/#business` },
    offers: {
      "@type": "Offer",
      priceCurrency: "AUD",
      url: `${SITE_URL}/contact`,
    },
  },
  {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: "Health Biomarker Analysis",
    name: "Health Biomarker & Blood Analysis",
    description:
      "Premium add-on: data-driven biomarker review to personalise nutrition coaching using real biological insights.",
    provider: { "@id": `${SITE_URL}/#business` },
    offers: { "@type": "Offer", price: "159", priceCurrency: "AUD", url: `${SITE_URL}/contact` },
  },
  {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      { "@type": "Question", name: "Do I need a referral to book a consultation?", acceptedAnswer: { "@type": "Answer", text: "No referral is needed. You can book directly. If you have a chronic condition or take medications, it's always good to let your doctor know you're working with a nutrition consultant." } },
      { "@type": "Question", name: "What happens after I book?", acceptedAnswer: { "@type": "Answer", text: "You'll receive a confirmation email with a pre-consultation questionnaire to complete before your session. This helps us make the most of our time together. You'll also receive joining details for your video or in-person appointment." } },
      { "@type": "Question", name: "Are your services covered by private health insurance?", acceptedAnswer: { "@type": "Answer", text: "Coverage depends on your individual policy and level of extras cover. We recommend checking with your health fund directly. We provide invoices with all necessary details for claiming." } },
      { "@type": "Question", name: "Can you help with specific health conditions?", acceptedAnswer: { "@type": "Answer", text: "We work with clients on a range of health goals including weight management, gut health, energy optimisation, sports nutrition, and general wellbeing. For complex medical conditions, we recommend working alongside your healthcare team." } },
      { "@type": "Question", name: "What if I need to reschedule my appointment?", acceptedAnswer: { "@type": "Answer", text: "Life happens! Please give at least 24 hours notice to reschedule. Same-day cancellations may incur a fee. You can easily reschedule through your booking confirmation email." } },
      { "@type": "Question", name: "Do you offer online consultations?", acceptedAnswer: { "@type": "Answer", text: "Yes — we offer both in-person and video consultations to suit your preferences and schedule. Many clients prefer the convenience of online sessions; they're just as effective as face-to-face." } },
    ],
  },
  {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
      { "@type": "ListItem", position: 2, name: "Services", item: `${SITE_URL}/services` },
    ],
  },
];

type ServiceCard = {
  name: string;
  price: string;
  duration: string;
  description: string;
  icon: typeof Calendar;
  whoFor: string;
  included: string[];
  outcomes: string;
  cta: string;
  popular?: boolean;
  highlight?: string;
};

const services: ServiceCard[] = [
  {
    name: "Initial Nutrition Consultation",
    price: "$195",
    duration: "75 minutes",
    description:
      "A comprehensive first session to understand your health history, goals, and create your personalised nutrition strategy.",
    icon: Calendar,
    whoFor:
      "Anyone ready to take the first step toward better health—whether you're managing weight, boosting energy, or optimising performance.",
    included: [
      "Comprehensive health & lifestyle assessment",
      "Dietary analysis & identification of gaps",
      "Personalised nutrition recommendations",
      "Goal setting & action planning",
      "Written summary & resources",
    ],
    outcomes:
      "Leave with a clear understanding of your nutritional needs and practical first steps to start seeing results.",
    cta: "Book Initial Consultation",
  },
  {
    name: "Follow-Up Consultation",
    price: "$150",
    duration: "45 minutes",
    description:
      "Regular check-ins to track your progress, address challenges, and refine your nutrition plan as you evolve.",
    icon: Clock,
    whoFor:
      "Existing clients who want ongoing support, accountability, and plan adjustments to stay on track.",
    included: [
      "Progress review & celebration of wins",
      "Challenge troubleshooting",
      "Plan adjustments & refinements",
      "New strategies & meal ideas",
      "Continued accountability support",
    ],
    outcomes:
      "Stay motivated, overcome plateaus, and continuously optimise your approach for lasting results.",
    cta: "Book Follow-Up",
  },
  {
    name: "12-Week Health Optimisation",
    price: "$997",
    duration: "12 weeks",
    description:
      "Our flagship program for sustainable transformation. Comprehensive support for those committed to lasting change.",
    icon: Crown,
    popular: true,
    highlight: "Save over $400 vs. booking sessions individually",
    whoFor:
      "Health-conscious individuals ready for a complete transformation—ideal for sustainable fat loss, energy optimisation, or performance goals.",
    included: [
      "Initial comprehensive consultation (75 min)",
      "6 × follow-up sessions over 12 weeks",
      "Personalised meal planning guidance",
      "Weekly check-ins via email/message",
      "Recipe ideas & practical resources",
      "Priority support between sessions",
      "Final review & maintenance planning",
    ],
    outcomes:
      "Achieve sustainable results with the accountability, education, and support needed to maintain your transformation long-term.",
    cta: "Start Your Transformation",
  },
  {
    name: "Meal Planning & Accountability",
    price: "$297",
    duration: "per month • ongoing",
    description:
      "Structured weekly meal planning with regular accountability check-ins to keep you consistent and progressing.",
    icon: Utensils,
    whoFor:
      "Busy professionals who need practical meal solutions and regular accountability to stay on track.",
    included: [
      "Weekly personalised meal plan guidance",
      "Shopping lists & prep strategies",
      "Fortnightly video check-ins (30 min)",
      "Unlimited email/message support",
      "Recipe suggestions based on preferences",
      "Ongoing plan adjustments",
    ],
    outcomes:
      "Take the guesswork out of healthy eating with practical plans that fit your lifestyle and preferences.",
    cta: "Get Started",
  },
  {
    name: "Corporate Wellness Programs",
    price: "Custom",
    duration: "Flexible",
    description:
      "Boost your team's health, productivity, and wellbeing with tailored workplace nutrition programs.",
    icon: Building2,
    whoFor:
      "Businesses and organisations looking to invest in employee health, reduce sick days, and improve workplace culture.",
    included: [
      "Group nutrition workshops & seminars",
      "Individual employee consultations",
      "Healthy workplace initiatives",
      "Lunch & learn sessions",
      "Custom program development",
      "Ongoing support & resources",
    ],
    outcomes:
      "Healthier, more energised employees with improved focus, reduced absenteeism, and enhanced workplace wellbeing.",
    cta: "Enquire Now",
  },
];

const valuePoints = [
  {
    icon: ShieldCheck,
    title: "Evidence-based",
    text: "Every recommendation is grounded in current nutrition science — never trends.",
  },
  {
    icon: TrendingUp,
    title: "Built for results",
    text: "Structured plans, clear milestones and ongoing support so progress doesn't stall.",
  },
  {
    icon: Star,
    title: "Personalised to you",
    text: "Your goals, preferences and lifestyle shape the plan — not a one-size template.",
  },
];

const bookingSteps = [
  {
    n: "1",
    title: "Choose Your Service",
    text: "Select the consultation type that best fits your needs and click to book.",
  },
  {
    n: "2",
    title: "Complete Pre-Consultation Form",
    text: "You'll receive a short questionnaire to help us prepare for your session.",
  },
  {
    n: "3",
    title: "Attend Your Session",
    text: "Join your video call or in-person appointment and start your transformation.",
  },
];

const forYou = [
  "Busy professionals ready to invest in long-term health",
  "People wanting sustainable fat loss without restrictive diets",
  "Individuals who value structure, evidence and accountability",
];

const notForYou = [
  "People looking for quick fixes or fad diets",
  "Those unwilling to make consistent small changes",
  "Anyone expecting results without participation",
];

const faqs = [
  {
    q: "Do I need a referral to book a consultation?",
    a: "No referral is needed. You can book directly. If you have a chronic condition or take medications, it's always good to let your doctor know you're working with a nutrition consultant.",
  },
  {
    q: "What happens after I book?",
    a: "You'll receive a confirmation email with a pre-consultation questionnaire to complete before your session. This helps us make the most of our time together. You'll also receive joining details for your video or in-person appointment.",
  },
  {
    q: "Are your services covered by private health insurance?",
    a: "Coverage depends on your individual policy and level of extras cover. We recommend checking with your health fund directly. We provide invoices with all necessary details for claiming.",
  },
  {
    q: "Can you help with specific health conditions?",
    a: "We work with clients on a range of health goals including weight management, gut health, energy optimisation, sports nutrition, and general wellbeing. For complex medical conditions, we recommend working alongside your healthcare team.",
  },
  {
    q: "What if I need to reschedule my appointment?",
    a: "Life happens! Please give at least 24 hours notice to reschedule. Same-day cancellations may incur a fee. You can easily reschedule through your booking confirmation email.",
  },
  {
    q: "Do you offer online consultations?",
    a: "Yes — we offer both in-person and video consultations to suit your preferences and schedule. Many clients prefer the convenience of online sessions; they're just as effective as face-to-face.",
  },
];

const Services = () => {
  return (
    <div>
      <SEO
        title="Nutrition Coaching Services & Pricing — SomaLab"
        description="Personalised nutrition coaching: initial consults from $195, 12-week transformation $997, meal planning, corporate wellness & biomarker analysis."
        canonicalPath="/services"
        noSuffix
        schemas={servicesSchemas}
      />

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
              Personalised Nutrition Coaching
            </h1>
            <p className="font-body text-lg text-muted-foreground max-w-2xl mx-auto">
              Evidence-based nutrition consulting tailored to your goals, lifestyle, and preferences.
              Choose the level of support that's right for you and start your journey to sustainable health.
            </p>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
              <Button asChild size="lg">
                <Link to={BOOKING_URL}>
                  Book Your Free Consultation
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <a
                href="#services"
                className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors px-4 py-2"
              >
                Or browse services ↓
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Trust / Value strip */}
      <section className="py-10 border-b border-border bg-background">
        <div className="container mx-auto px-4 grid md:grid-cols-3 gap-6 max-w-5xl">
          {valuePoints.map((v, i) => (
            <motion.div
              key={v.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="flex items-start gap-3"
            >
              <div className="w-10 h-10 bg-accent/10 rounded-lg flex items-center justify-center shrink-0">
                <v.icon className="h-5 w-5 text-accent" />
              </div>
              <div>
                <h3 className="font-heading text-base font-semibold text-foreground mb-1">{v.title}</h3>
                <p className="font-body text-sm text-muted-foreground leading-relaxed">{v.text}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Services Grid */}
      <section id="services" className="section-padding">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center max-w-2xl mx-auto mb-14"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span className="inline-block px-4 py-1.5 mb-4 text-sm font-medium bg-accent/10 text-accent rounded-full">
              Our Services
            </span>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-4">
              Find the right level of support
            </h2>
            <p className="text-muted-foreground">
              Whether you're starting fresh or going deep, there's a path for you. Most clients begin with the
              flagship 12-week program for the best results — and the best value.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto items-stretch">
            {services.map((service, index) => (
              <motion.div
                key={service.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.08, duration: 0.5 }}
                className={service.popular ? "lg:-mt-4 lg:mb-4" : ""}
              >
                <Card
                  className={`h-full flex flex-col relative ${
                    service.popular
                      ? "border-accent shadow-xl ring-2 ring-accent/30 bg-card"
                      : ""
                  }`}
                >
                  {service.popular && (
                    <div className="absolute -top-3 left-1/2 -translate-x-1/2 z-10">
                      <span className="bg-accent text-accent-foreground text-xs font-semibold px-3 py-1 rounded-full shadow-md whitespace-nowrap">
                        Most Popular
                      </span>
                    </div>
                  )}
                  <CardHeader className="pt-8">
                    <div
                      className={`w-12 h-12 rounded-lg flex items-center justify-center mb-4 ${
                        service.popular
                          ? "bg-accent text-accent-foreground"
                          : "bg-accent/10 text-accent"
                      }`}
                    >
                      <service.icon className="h-6 w-6" />
                    </div>
                    <CardTitle className="font-heading text-2xl">{service.name}</CardTitle>
                    <CardDescription className="font-body">
                      {service.description}
                    </CardDescription>
                  </CardHeader>

                  <CardContent className="flex-1 space-y-6">
                    <div className="flex items-baseline gap-2 flex-wrap">
                      <span className="font-heading text-4xl font-bold text-foreground">
                        {service.price}
                      </span>
                      <span className="text-muted-foreground text-sm">• {service.duration}</span>
                    </div>

                    {service.highlight && (
                      <div className="text-xs font-semibold text-accent bg-accent/10 rounded-md px-3 py-2 inline-block">
                        ⚡ {service.highlight}
                      </div>
                    )}

                    <div>
                      <p className="text-sm font-semibold text-foreground mb-1.5">Who it's for:</p>
                      <p className="font-body text-sm text-muted-foreground leading-relaxed">
                        {service.whoFor}
                      </p>
                    </div>

                    <div>
                      <p className="text-sm font-semibold text-foreground mb-2">What's included:</p>
                      <ul className="space-y-2">
                        {service.included.map((item) => (
                          <li key={item} className="flex items-start gap-2">
                            <Check className="h-4 w-4 text-accent shrink-0 mt-0.5" />
                            <span className="font-body text-sm text-foreground/90">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="rounded-lg bg-secondary/60 border border-border p-4">
                      <p className="text-sm font-semibold text-foreground mb-1">Expected outcomes:</p>
                      <p className="font-body text-sm text-muted-foreground leading-relaxed">
                        {service.outcomes}
                      </p>
                    </div>
                  </CardContent>

                  <CardFooter>
                    <Button
                      asChild
                      className="w-full"
                      size="lg"
                      variant={service.popular ? "default" : "outline"}
                    >
                      <Link to={BOOKING_URL}>
                        {service.cta}
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

      {/* Health Biomarker & Blood Analysis — Premium Add-On */}
      <section className="section-padding bg-secondary">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center max-w-2xl mx-auto mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span className="inline-block px-4 py-1.5 mb-4 text-sm font-medium bg-accent/10 text-accent rounded-full">
              Premium Add-On
            </span>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-4">
              Health Biomarker & Blood Analysis
            </h2>
            <p className="text-muted-foreground">
              Want to go deeper? Add real biological insight to your coaching — uncover hidden imbalances,
              accelerate progress and personalise your plan with data, not guesswork.
            </p>
          </motion.div>

          <div className="max-w-5xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <Card className="border-accent/40 shadow-lg overflow-hidden">
                <CardHeader className="border-b border-border/60 bg-background">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-accent text-accent-foreground rounded-lg flex items-center justify-center shrink-0">
                      <FlaskConical className="h-6 w-6" />
                    </div>
                    <div className="flex-1">
                      <CardTitle className="font-heading text-2xl">
                        Evidence-Based Optimisation
                      </CardTitle>
                      <CardDescription className="font-body mt-1">
                        Personalised coaching, informed by your own biology.
                      </CardDescription>
                    </div>
                  </div>
                </CardHeader>

                <CardContent className="pt-8">
                  <div className="grid md:grid-cols-2 gap-10">
                    <div>
                      <h3 className="font-heading text-lg font-semibold text-foreground mb-4">
                        What's included
                      </h3>
                      <ul className="space-y-3">
                        {[
                          "Guidance on appropriate pathology testing based on your goals",
                          "Review and interpretation of blood test results",
                          "Integration of findings into your nutrition and lifestyle plan",
                          "Adjustments to coaching strategy based on biomarkers",
                          "Optional follow-up summary or review discussion",
                        ].map((item) => (
                          <li key={item} className="flex items-start gap-2">
                            <Check className="h-4 w-4 text-accent shrink-0 mt-1" />
                            <span className="font-body text-sm text-foreground/90">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <h3 className="font-heading text-lg font-semibold text-foreground mb-4">
                        Who this is for
                      </h3>
                      <ul className="space-y-3">
                        {[
                          "Clients wanting deeper optimisation beyond standard coaching",
                          "Individuals experiencing plateaus or unclear symptoms",
                          "Performance-focused clients seeking objective health insights",
                        ].map((item) => (
                          <li key={item} className="flex items-start gap-2">
                            <Sparkles className="h-4 w-4 text-accent shrink-0 mt-1" />
                            <span className="font-body text-sm text-foreground/90">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className="mt-10 p-6 rounded-xl bg-secondary/60 border border-border flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                    <div>
                      <div className="text-sm font-medium text-accent mb-1">Service Fee</div>
                      <div className="flex items-baseline gap-2">
                        <span className="font-heading text-4xl font-bold text-foreground">$159</span>
                        <span className="text-muted-foreground text-sm">
                          + pathology testing costs
                        </span>
                      </div>
                      <p className="text-xs text-muted-foreground mt-2">
                        Pathology costs vary depending on the tests required.
                      </p>
                    </div>
                    <Button asChild size="lg">
                      <Link to={BOOKING_URL}>
                        Enquire About Biomarker Analysis
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                  </div>

                  <div className="mt-6 flex items-start gap-3 p-4 rounded-lg border border-border/70 bg-background">
                    <Info className="h-4 w-4 text-muted-foreground shrink-0 mt-0.5" />
                    <p className="text-xs text-muted-foreground leading-relaxed">
                      This service is designed to support nutrition and lifestyle optimisation through
                      interpretation of pathology results and does not replace medical diagnosis or treatment.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* How to Book */}
      <section className="section-padding">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center max-w-2xl mx-auto mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span className="inline-block px-4 py-1.5 mb-4 text-sm font-medium bg-accent/10 text-accent rounded-full">
              How to Book
            </span>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-4">
              Getting Started Is Easy
            </h2>
            <p className="text-muted-foreground">
              Ready to take the first step? Here's exactly what to expect when you book with SomaLab.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {bookingSteps.map((step, i) => (
              <motion.div
                key={step.n}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="text-center"
              >
                <div className="w-14 h-14 mx-auto mb-5 rounded-full bg-accent text-accent-foreground flex items-center justify-center font-heading text-2xl font-bold shadow-md">
                  {step.n}
                </div>
                <h3 className="font-heading text-xl font-semibold text-foreground mb-2">
                  {step.title}
                </h3>
                <p className="font-body text-muted-foreground leading-relaxed">{step.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Who It's For / Not For */}
      <section className="section-padding bg-secondary">
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
              <h3 className="font-heading text-2xl font-bold text-foreground mb-6">
                This is for you if you're…
              </h3>
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
              <h3 className="font-heading text-2xl font-bold text-foreground mb-6">
                This isn't for you if you're…
              </h3>
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

      {/* FAQ */}
      <section className="section-padding">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center max-w-2xl mx-auto mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-muted-foreground">
              Got questions? We've got answers. If you don't see what you're looking for, get in touch.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto"
          >
            <Accordion type="single" collapsible className="space-y-3">
              {faqs.map((faq, i) => (
                <AccordionItem
                  key={i}
                  value={`item-${i}`}
                  className="bg-card border border-border rounded-xl px-5"
                >
                  <AccordionTrigger className="font-heading text-base md:text-lg text-left text-foreground hover:no-underline py-5">
                    {faq.q}
                  </AccordionTrigger>
                  <AccordionContent className="font-body text-muted-foreground leading-relaxed pb-5">
                    {faq.a}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </motion.div>
        </div>
      </section>

      {/* Free Consultation CTA */}
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
              Free Consultation
            </span>
            <h2 className="font-heading text-3xl md:text-5xl font-bold text-primary-foreground mb-4">
              Not sure which service is right for you?
            </h2>
            <p className="font-body text-primary-foreground/80 text-lg mb-8">
              Book your free 15-minute consultation to discuss your goals and find the perfect fit for your
              needs. No pressure, no obligations — just friendly guidance.
            </p>
            <Button asChild size="lg" variant="secondary" className="text-base">
              <Link to={BOOKING_URL}>
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

export default Services;
