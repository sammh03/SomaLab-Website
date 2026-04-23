import { motion } from "framer-motion";
import { SEO } from "@/components/SEO";

const Terms = () => {
  return (
    <div>
      <SEO
        title="Terms & Conditions"
        description="Terms and conditions governing the use of SomaLab nutrition consulting services."
        canonicalPath="/terms"
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
              Terms & Conditions
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
            className="max-w-3xl mx-auto space-y-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Section title="Acceptance of Terms">
              <p>
                By accessing or using SomaLab's website and services, you agree to be
                bound by these Terms & Conditions. If you do not agree, please do not
                use our services.
              </p>
            </Section>

            <Section title="Nature of Services">
              <p>
                SomaLab provides nutrition consulting and health coaching services.
                Our services are educational and supportive in nature, and are not a
                substitute for medical diagnosis, treatment, or advice.
              </p>
            </Section>

            <Section title="Bookings & Cancellations">
              <p>
                Appointments may be rescheduled with at least 24 hours' notice.
                Same-day cancellations or no-shows may incur a fee.
              </p>
            </Section>

            <Section title="Payments">
              <p>
                All fees are payable in Australian Dollars (AUD) at the time of booking
                or as otherwise agreed. Refunds are handled on a case-by-case basis.
              </p>
            </Section>

            <Section title="Intellectual Property">
              <p>
                All content on this website—including text, images, branding, and
                materials provided during consultations—remains the property of SomaLab
                and may not be reproduced without permission.
              </p>
            </Section>

            <Section title="Limitation of Liability">
              <p>
                SomaLab is not liable for any indirect, incidental, or consequential
                damages arising from the use of our services. Individual results may
                vary and are not guaranteed.
              </p>
            </Section>

            <Section title="Contact">
              <p>
                Questions about these terms? Email{" "}
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

export default Terms;
