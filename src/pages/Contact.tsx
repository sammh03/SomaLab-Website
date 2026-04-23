import { useState } from "react";
import { motion } from "framer-motion";
import { z } from "zod";
import { Mail, Phone, ArrowRight, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { SEO } from "@/components/SEO";
import { SITE_URL, BUSINESS } from "@/lib/seo-config";

const contactSchemas = [
  {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    name: "Contact SomaLab",
    url: `${SITE_URL}/contact`,
    mainEntity: { "@id": `${SITE_URL}/#business` },
  },
  {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
      { "@type": "ListItem", position: 2, name: "Contact", item: `${SITE_URL}/contact` },
    ],
  },
];

const CONTACT_EMAIL = "info@somalab.com.au";

const interestOptions = [
  "Free Discovery Call",
  "Initial Consultation",
  "Follow-Up Consultation",
  "12-Week Program — Essential",
  "12-Week Program — Advanced",
  "12-Week Program — Elite",
  "Add-On / Other",
];

const contactSchema = z.object({
  name: z
    .string()
    .trim()
    .nonempty({ message: "Please enter your name" })
    .max(100, { message: "Name must be less than 100 characters" }),
  email: z
    .string()
    .trim()
    .email({ message: "Please enter a valid email" })
    .max(255, { message: "Email must be less than 255 characters" }),
  phone: z
    .string()
    .trim()
    .max(30, { message: "Phone must be less than 30 characters" })
    .optional()
    .or(z.literal("")),
  interest: z
    .string()
    .trim()
    .nonempty({ message: "Please choose what you're interested in" })
    .max(100),
  message: z
    .string()
    .trim()
    .nonempty({ message: "Please share a quick message" })
    .max(1000, { message: "Message must be less than 1000 characters" }),
});

type ContactForm = z.infer<typeof contactSchema>;
type ContactErrors = Partial<Record<keyof ContactForm, string>>;

const Contact = () => {
  const { toast } = useToast();
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState<ContactForm>({
    name: "",
    email: "",
    phone: "",
    interest: "",
    message: "",
  });
  const [errors, setErrors] = useState<ContactErrors>({});

  const update = <K extends keyof ContactForm>(key: K, value: ContactForm[K]) => {
    setForm((prev) => ({ ...prev, [key]: value }));
    if (errors[key]) setErrors((prev) => ({ ...prev, [key]: undefined }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const result = contactSchema.safeParse(form);
    if (!result.success) {
      const fieldErrors: ContactErrors = {};
      result.error.issues.forEach((issue) => {
        const key = issue.path[0] as keyof ContactForm;
        if (!fieldErrors[key]) fieldErrors[key] = issue.message;
      });
      setErrors(fieldErrors);
      return;
    }

    const data = result.data;
    const subject = `New enquiry from ${data.name} — ${data.interest}`;
    const body = [
      `Name: ${data.name}`,
      `Email: ${data.email}`,
      data.phone ? `Phone: ${data.phone}` : null,
      `Interested in: ${data.interest}`,
      "",
      "Message:",
      data.message,
    ]
      .filter(Boolean)
      .join("\n");

    const mailto = `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(
      subject,
    )}&body=${encodeURIComponent(body)}`;
    window.location.href = mailto;

    setSubmitted(true);
    toast({
      title: "Thanks — your message is ready to send",
      description: "Your email client should open. We'll get back to you within 1 business day.",
    });
  };

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
              Get in Touch
            </span>
            <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
              Let's start the conversation
            </h1>
            <p className="font-body text-lg text-muted-foreground max-w-2xl mx-auto">
              Share a few details and we'll be in touch within 1 business day to chat about your goals and the
              right next step for you.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Form + Info */}
      <section className="section-padding">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-3 gap-10 max-w-6xl mx-auto">
            {/* Form */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="lg:col-span-2 bg-card border border-border rounded-2xl p-8 md:p-10"
            >
              {submitted ? (
                <div className="text-center py-10">
                  <div className="w-14 h-14 rounded-full bg-accent/10 flex items-center justify-center mx-auto mb-4">
                    <CheckCircle2 className="h-7 w-7 text-accent" />
                  </div>
                  <h2 className="font-heading text-2xl font-bold text-foreground mb-2">
                    Thanks for reaching out
                  </h2>
                  <p className="text-muted-foreground max-w-md mx-auto mb-6">
                    Your email client should have opened. If it didn't, you can email us directly at{" "}
                    <a href={`mailto:${CONTACT_EMAIL}`} className="text-accent hover:underline">
                      {CONTACT_EMAIL}
                    </a>
                    .
                  </p>
                  <Button
                    variant="outline"
                    onClick={() => {
                      setSubmitted(false);
                      setForm({ name: "", email: "", phone: "", interest: "", message: "" });
                    }}
                  >
                    Send another message
                  </Button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6" noValidate>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="name">Name</Label>
                      <Input
                        id="name"
                        value={form.name}
                        onChange={(e) => update("name", e.target.value)}
                        maxLength={100}
                        placeholder="Your full name"
                        aria-invalid={!!errors.name}
                      />
                      {errors.name && <p className="text-sm text-destructive">{errors.name}</p>}
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Email</Label>
                      <Input
                        id="email"
                        type="email"
                        value={form.email}
                        onChange={(e) => update("email", e.target.value)}
                        maxLength={255}
                        placeholder="you@email.com"
                        aria-invalid={!!errors.email}
                      />
                      {errors.email && <p className="text-sm text-destructive">{errors.email}</p>}
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="phone">Phone (optional)</Label>
                      <Input
                        id="phone"
                        type="tel"
                        value={form.phone}
                        onChange={(e) => update("phone", e.target.value)}
                        maxLength={30}
                        placeholder="+61 4XX XXX XXX"
                        aria-invalid={!!errors.phone}
                      />
                      {errors.phone && <p className="text-sm text-destructive">{errors.phone}</p>}
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="interest">I'm interested in</Label>
                      <Select value={form.interest} onValueChange={(v) => update("interest", v)}>
                        <SelectTrigger id="interest" aria-invalid={!!errors.interest}>
                          <SelectValue placeholder="Choose an option" />
                        </SelectTrigger>
                        <SelectContent>
                          {interestOptions.map((opt) => (
                            <SelectItem key={opt} value={opt}>
                              {opt}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                      {errors.interest && (
                        <p className="text-sm text-destructive">{errors.interest}</p>
                      )}
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">Message</Label>
                    <Textarea
                      id="message"
                      value={form.message}
                      onChange={(e) => update("message", e.target.value)}
                      maxLength={1000}
                      rows={6}
                      placeholder="Tell us a bit about your goals and what you're hoping to achieve…"
                      aria-invalid={!!errors.message}
                    />
                    <div className="flex justify-between text-xs text-muted-foreground">
                      {errors.message ? (
                        <p className="text-destructive">{errors.message}</p>
                      ) : (
                        <span>We'll reply within 1 business day.</span>
                      )}
                      <span>{form.message.length}/1000</span>
                    </div>
                  </div>

                  <Button type="submit" size="lg" className="w-full md:w-auto">
                    Send Message
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </form>
              )}
            </motion.div>

            {/* Info */}
            <motion.aside
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <div className="bg-secondary rounded-2xl p-6">
                <h3 className="font-heading text-lg font-semibold text-foreground mb-4">
                  Prefer to reach out directly?
                </h3>
                <ul className="space-y-4">
                  <li>
                    <a
                      href={`mailto:${CONTACT_EMAIL}`}
                      className="flex items-start gap-3 text-foreground hover:text-accent transition-colors"
                    >
                      <Mail className="h-5 w-5 text-accent mt-0.5 shrink-0" />
                      <span className="font-body text-sm">{CONTACT_EMAIL}</span>
                    </a>
                  </li>
                  <li>
                    <a
                      href="tel:+61414430113"
                      className="flex items-start gap-3 text-foreground hover:text-accent transition-colors"
                    >
                      <Phone className="h-5 w-5 text-accent mt-0.5 shrink-0" />
                      <span className="font-body text-sm">+61 414 430 113</span>
                    </a>
                  </li>
                </ul>
              </div>

              <div className="bg-card border border-border rounded-2xl p-6">
                <h3 className="font-heading text-lg font-semibold text-foreground mb-2">
                  What happens next?
                </h3>
                <ol className="space-y-3 text-sm text-muted-foreground">
                  <li><span className="text-accent font-semibold mr-2">1.</span>We review your enquiry.</li>
                  <li><span className="text-accent font-semibold mr-2">2.</span>We reply within 1 business day with the next step.</li>
                  <li><span className="text-accent font-semibold mr-2">3.</span>We book a free 15–20 min discovery call if it's a fit.</li>
                </ol>
              </div>
            </motion.aside>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
