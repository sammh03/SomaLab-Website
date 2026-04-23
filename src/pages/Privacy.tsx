import { motion } from "framer-motion";
import { SEO } from "@/components/SEO";

const Privacy = () => {
  return (
    <div>
      <SEO
        title="Privacy Policy"
        description="How SomaLab collects, uses, and protects your personal information in accordance with Australian privacy law."
        canonicalPath="/privacy"
      />
      {/* Hero */}
      <section className="section-padding bg-secondary pt-32 pb-12">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block px-4 py-1.5 mb-6 text-sm font-medium bg-accent/10 text-accent rounded-full">
              Legal
            </span>
            <h1 className="font-heading text-4xl md:text-5xl font-bold text-foreground mb-4">
              Privacy Policy
            </h1>
            <p className="font-body text-muted-foreground">
              Last updated: {new Date().toLocaleDateString("en-AU", { year: "numeric", month: "long" })}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 md:py-20">
        <div className="container mx-auto px-4">
          <motion.div
            className="max-w-3xl mx-auto prose-content space-y-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Section title="Overview">
              <p>
                SomaLab ("we", "us", "our") respects your privacy and is committed to
                protecting your personal information in accordance with the Australian
                Privacy Principles (APPs) under the Privacy Act 1988 (Cth).
              </p>
            </Section>

            <Section title="Information We Collect">
              <p>
                We may collect information you provide directly, such as your name,
                email address, phone number, health and lifestyle details shared during
                consultations, and any communications with us.
              </p>
            </Section>

            <Section title="How We Use Your Information">
              <p>
                Information is used to deliver our nutrition consulting services,
                respond to enquiries, schedule appointments, and improve our offerings.
                We will never sell your personal information.
              </p>
            </Section>

            <Section title="Data Security">
              <p>
                We take reasonable steps to protect your information from misuse,
                interference, loss, unauthorised access, modification, or disclosure.
              </p>
            </Section>

            <Section title="Your Rights">
              <p>
                You have the right to access, correct, or request deletion of your
                personal information at any time. Contact us at{" "}
                <a
                  href="mailto:info@somalab.com.au"
                  className="text-primary underline underline-offset-4 hover:text-accent transition-colors"
                >
                  info@somalab.com.au
                </a>
                .
              </p>
            </Section>

            <Section title="Contact">
              <p>
                For any privacy-related questions, please email{" "}
                <a
                  href="mailto:info@somalab.com.au"
                  className="text-primary underline underline-offset-4 hover:text-accent transition-colors"
                >
                  info@somalab.com.au
                </a>
                .
              </p>
            </Section>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

const Section = ({ title, children }: { title: string; children: React.ReactNode }) => (
  <div>
    <h2 className="font-heading text-2xl font-semibold text-foreground mb-3">
      {title}
    </h2>
    <div className="font-body text-muted-foreground leading-relaxed">{children}</div>
  </div>
);

export default Privacy;
