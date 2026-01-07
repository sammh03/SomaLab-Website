import { motion } from "framer-motion";
import { Check, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";

const services = [
  {
    name: "Discovery Call",
    price: "Free",
    description: "A complimentary 30-minute call to discuss your goals and see if we're a good fit.",
    features: [
      "30-minute video call",
      "Goal assessment",
      "Personalized recommendations",
      "No commitment required"
    ],
    popular: false,
    cta: "Book Free Call"
  },
  {
    name: "Nutrition Kickstart",
    price: "$197",
    description: "Perfect for those ready to take the first step towards better nutrition.",
    features: [
      "Comprehensive health assessment",
      "Personalized meal plan",
      "2-week coaching support",
      "Recipe guide & shopping list",
      "Email support"
    ],
    popular: false,
    cta: "Get Started"
  },
  {
    name: "Transformation Program",
    price: "$497",
    description: "Our most popular program for lasting, sustainable results.",
    features: [
      "Everything in Kickstart",
      "8 weeks of 1:1 coaching",
      "Weekly check-in calls",
      "Custom workout guidance",
      "Habit tracking & accountability",
      "Priority email & text support"
    ],
    popular: true,
    cta: "Start Transforming"
  },
  {
    name: "Premium Wellness",
    price: "$997",
    description: "The ultimate experience for complete health transformation.",
    features: [
      "Everything in Transformation",
      "12 weeks of intensive coaching",
      "Bi-weekly video sessions",
      "Metabolic testing & analysis",
      "Supplement recommendations",
      "Lifetime access to resources",
      "VIP support access"
    ],
    popular: false,
    cta: "Go Premium"
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
              Choose Your Path to Wellness
            </h1>
            <p className="font-body text-lg text-muted-foreground max-w-2xl mx-auto">
              From quick-start plans to comprehensive transformation programs, 
              find the perfect fit for your health journey.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="section-padding">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <motion.div
                key={service.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
              >
                <Card className={`h-full flex flex-col relative ${service.popular ? 'border-accent shadow-lg scale-105' : ''}`}>
                  {service.popular && (
                    <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                      <span className="bg-accent text-accent-foreground text-xs font-semibold px-3 py-1 rounded-full">
                        Most Popular
                      </span>
                    </div>
                  )}
                  <CardHeader className="pt-8">
                    <CardTitle className="font-heading text-xl">{service.name}</CardTitle>
                    <CardDescription className="font-body">{service.description}</CardDescription>
                  </CardHeader>
                  <CardContent className="flex-1">
                    <div className="mb-6">
                      <span className="font-heading text-4xl font-bold text-foreground">{service.price}</span>
                      {service.price !== "Free" && <span className="text-muted-foreground ml-1">/program</span>}
                    </div>
                    <ul className="space-y-3">
                      {service.features.map((feature) => (
                        <li key={feature} className="flex items-start gap-3">
                          <Check className="h-5 w-5 text-accent shrink-0 mt-0.5" />
                          <span className="font-body text-sm text-muted-foreground">{feature}</span>
                        </li>
                      ))}
                    </ul>
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

      {/* FAQ Section */}
      <section className="section-padding bg-secondary">
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
          </motion.div>

          <div className="max-w-3xl mx-auto space-y-6">
            {[
              {
                q: "How do I know which program is right for me?",
                a: "Book a free discovery call! We'll discuss your goals, challenges, and lifestyle to recommend the perfect program for you."
              },
              {
                q: "Can I upgrade my program later?",
                a: "Absolutely! Many clients start with the Kickstart program and upgrade to Transformation once they see results."
              },
              {
                q: "Do you offer payment plans?",
                a: "Yes, we offer flexible payment plans for our Transformation and Premium programs. Just ask during your discovery call."
              },
              {
                q: "What if I'm not satisfied?",
                a: "We offer a 14-day satisfaction guarantee. If you're not happy with the program, we'll work with you to make it right or provide a refund."
              }
            ].map((faq, index) => (
              <motion.div
                key={index}
                className="bg-card p-6 rounded-xl"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <h3 className="font-heading text-lg font-semibold text-foreground mb-2">{faq.q}</h3>
                <p className="font-body text-muted-foreground">{faq.a}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
