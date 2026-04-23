import { motion } from "framer-motion";
import { Check, ArrowRight, Clock, Users, Target, Briefcase, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";

const services = [
  {
    name: "Initial Nutrition Consultation",
    price: "$150",
    duration: "75 minutes",
    description: "A comprehensive first session to understand your health history, goals, and create your personalised nutrition strategy.",
    whoFor: "Anyone ready to take the first step toward better health—whether you're managing weight, boosting energy, or optimising performance.",
    features: [
      "Comprehensive health & lifestyle assessment",
      "Dietary analysis & identification of gaps",
      "Personalised nutrition recommendations",
      "Goal setting & action planning",
      "Written summary & resources"
    ],
    outcomes: "Leave with a clear understanding of your nutritional needs and practical first steps to start seeing results.",
    popular: false,
    cta: "Book Initial Consultation",
    icon: Calendar
  },
  {
    name: "Follow-Up Consultation",
    price: "$95",
    duration: "45 minutes",
    description: "Regular check-ins to track your progress, address challenges, and refine your nutrition plan as you evolve.",
    whoFor: "Existing clients who want ongoing support, accountability, and plan adjustments to stay on track.",
    features: [
      "Progress review & celebration of wins",
      "Challenge troubleshooting",
      "Plan adjustments & refinements",
      "New strategies & meal ideas",
      "Continued accountability support"
    ],
    outcomes: "Stay motivated, overcome plateaus, and continuously optimise your approach for lasting results.",
    popular: false,
    cta: "Book Follow-Up",
    icon: Clock
  },
  {
    name: "12-Week Health Optimisation",
    price: "$997",
    duration: "12 weeks",
    description: "Our flagship program for sustainable transformation. Comprehensive support for those committed to lasting change.",
    whoFor: "Health-conscious individuals ready for a complete transformation—ideal for sustainable fat loss, energy optimisation, or performance goals.",
    features: [
      "Initial comprehensive consultation (75 min)",
      "6 x follow-up sessions over 12 weeks",
      "Personalised meal planning guidance",
      "Weekly check-ins via email/message",
      "Recipe ideas & practical resources",
      "Priority support between sessions",
      "Final review & maintenance planning"
    ],
    outcomes: "Achieve sustainable results with the accountability, education, and support needed to maintain your transformation long-term.",
    popular: true,
    cta: "Start Your Transformation",
    icon: Target
  },
  {
    name: "Meal Planning & Accountability",
    price: "$297/month",
    duration: "Ongoing monthly",
    description: "Structured weekly meal planning with regular accountability check-ins to keep you consistent and progressing.",
    whoFor: "Busy professionals who need practical meal solutions and regular accountability to stay on track.",
    features: [
      "Weekly personalised meal plan guidance",
      "Shopping lists & prep strategies",
      "Fortnightly video check-ins (30 min)",
      "Unlimited email/message support",
      "Recipe suggestions based on preferences",
      "Ongoing plan adjustments"
    ],
    outcomes: "Take the guesswork out of healthy eating with practical plans that fit your lifestyle and preferences.",
    popular: false,
    cta: "Get Started",
    icon: Users
  },
  {
    name: "Corporate Wellness Programs",
    price: "Custom",
    duration: "Flexible",
    description: "Boost your team's health, productivity, and wellbeing with tailored workplace nutrition programs.",
    whoFor: "Businesses and organisations looking to invest in employee health, reduce sick days, and improve workplace culture.",
    features: [
      "Group nutrition workshops & seminars",
      "Individual employee consultations",
      "Healthy workplace initiatives",
      "Lunch & learn sessions",
      "Custom program development",
      "Ongoing support & resources"
    ],
    outcomes: "Healthier, more energised employees with improved focus, reduced absenteeism, and enhanced workplace wellbeing.",
    popular: false,
    cta: "Enquire Now",
    icon: Briefcase
  }
];

const faqs = [
  {
    q: "Do I need a referral to book a consultation?",
    a: "No referral is needed. You can book directly through our online booking system. If you have a chronic condition or take medications, it's always good to let your doctor know you're working with a nutrition consultant."
  },
  {
    q: "What happens after I book my consultation?",
    a: "You'll receive a confirmation email with a pre-consultation questionnaire to complete before your session. This helps us make the most of our time together. You'll also receive joining details for your video or in-person appointment."
  },
  {
    q: "Are your services covered by private health insurance?",
    a: "Coverage depends on your individual policy and level of extras cover. We recommend checking with your health fund directly. We provide invoices with all necessary details for claiming."
  },
  {
    q: "Can you help with specific health conditions?",
    a: "We work with clients on a range of health goals including weight management, gut health, energy optimisation, sports nutrition, and general wellbeing. For complex medical conditions, we recommend working alongside your healthcare team."
  },
  {
    q: "What if I need to reschedule my appointment?",
    a: "We understand life happens! Please give us at least 24 hours notice to reschedule. Same-day cancellations may incur a fee. You can easily reschedule through your booking confirmation email."
  },
  {
    q: "Do you offer online consultations?",
    a: "Yes! We offer both in-person and video consultations to suit your preferences and schedule. Many clients prefer the convenience of online sessions—they're just as effective as face-to-face."
  }
];

const Services = () => {
  return (
    <div>
      {/* Hero Section */}
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
          </motion.div>
        </div>
      </section>

      {/* Services Cards */}
      <section className="section-padding">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                className={service.name === "12-Week Health Optimisation" ? "lg:col-span-1" : ""}
              >
                <Card className={`h-full flex flex-col relative ${service.popular ? 'border-accent shadow-lg ring-2 ring-accent/20' : ''}`}>
                  {service.popular && (
                    <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                      <span className="bg-accent text-accent-foreground text-xs font-semibold px-3 py-1 rounded-full">
                        Most Popular
                      </span>
                    </div>
                  )}
                  <CardHeader className="pt-8">
                    <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mb-4">
                      <service.icon className="h-6 w-6 text-accent" />
                    </div>
                    <CardTitle className="font-heading text-xl">{service.name}</CardTitle>
                    <CardDescription className="font-body">{service.description}</CardDescription>
                  </CardHeader>
                  <CardContent className="flex-1">
                    <div className="mb-4">
                      <span className="font-heading text-3xl font-bold text-foreground">{service.price}</span>
                      {service.price !== "Custom" && <span className="text-muted-foreground ml-2">• {service.duration}</span>}
                    </div>
                    
                    <div className="mb-4">
                      <p className="text-sm font-medium text-foreground mb-1">Who it's for:</p>
                      <p className="text-sm text-muted-foreground">{service.whoFor}</p>
                    </div>

                    <div className="mb-4">
                      <p className="text-sm font-medium text-foreground mb-2">What's included:</p>
                      <ul className="space-y-2">
                        {service.features.map((feature) => (
                          <li key={feature} className="flex items-start gap-2">
                            <Check className="h-4 w-4 text-accent shrink-0 mt-0.5" />
                            <span className="font-body text-sm text-muted-foreground">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="bg-secondary/50 p-3 rounded-lg">
                      <p className="text-sm font-medium text-foreground mb-1">Expected outcomes:</p>
                      <p className="text-sm text-muted-foreground">{service.outcomes}</p>
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Button
                      asChild
                      className="w-full"
                      variant={service.popular ? "default" : "outline"}
                    >
                      <a href="https://calendly.com" target="_blank" rel="noopener noreferrer">
                        {service.cta}
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </a>
                    </Button>
                  </CardFooter>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Booking Info Section */}
      <section className="section-padding bg-secondary/50">
        <div className="container mx-auto px-4">
          <motion.div
            className="max-w-3xl mx-auto text-center mb-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span className="inline-block px-4 py-1.5 mb-4 text-sm font-medium bg-accent/10 text-accent rounded-full">
              How to Book
            </span>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-4">
              Getting Started Is Easy
            </h2>
            <p className="text-muted-foreground mb-8">
              Ready to take the first step? Here's what to expect when you book with SomaLab.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {[
              {
                step: "1",
                title: "Choose Your Service",
                description: "Select the consultation type that best fits your needs and click to book."
              },
              {
                step: "2",
                title: "Complete Pre-Consultation Form",
                description: "You'll receive a short questionnaire to help us prepare for your session."
              },
              {
                step: "3",
                title: "Attend Your Session",
                description: "Join your video call or in-person appointment and start your transformation."
              }
            ].map((item, index) => (
              <motion.div
                key={item.step}
                className="text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <span className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-accent text-accent-foreground font-bold text-lg mb-4">
                  {item.step}
                </span>
                <h3 className="font-heading text-lg font-semibold text-foreground mb-2">{item.title}</h3>
                <p className="text-muted-foreground text-sm">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section-padding">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Got questions? We've got answers. If you don't see what you're looking for, 
              feel free to get in touch.
            </p>
          </motion.div>

          <div className="max-w-3xl mx-auto space-y-6">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                className="bg-card p-6 rounded-xl border border-border"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
              >
                <h3 className="font-heading text-lg font-semibold text-foreground mb-2">{faq.q}</h3>
                <p className="font-body text-muted-foreground">{faq.a}</p>
              </motion.div>
            ))}
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
              Not Sure Which Service Is Right for You?
            </h2>
            <p className="font-body text-primary-foreground/80 max-w-2xl mx-auto mb-8">
              Book a free 15-minute discovery call to discuss your goals and find the perfect fit for your needs. 
              No pressure, no obligations—just friendly guidance.
            </p>
            <Button
              asChild
              size="lg"
              variant="secondary"
              className="text-base"
            >
              <a href="https://calendly.com" target="_blank" rel="noopener noreferrer">
                Book Your Free Discovery Call
                <ArrowRight className="ml-2 h-5 w-5" />
              </a>
            </Button>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Services;
