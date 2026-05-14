import { Link } from "react-router-dom";
import { Instagram, Mail, Phone, Facebook } from "lucide-react";
import logo from "@/assets/somalab-logo.png";

export const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground">
      {/* Main Footer */}
      <div className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            {/* Brand Column */}
            <div className="space-y-4">
              <img src={logo} alt="SomaLab logo" className="h-16 w-auto brightness-0 invert" loading="lazy" decoding="async" />
              <p className="font-body text-sm opacity-80 leading-relaxed">
                SomaLab provides evidence-based nutrition consulting to help health-conscious Australians achieve
                sustainable fat loss, peak performance, and genuine wellbeing.
              </p>
            </div>

            {/* Quick Links */}
            <div className="space-y-4">
              <h4 className="font-heading text-lg font-semibold">Quick Links</h4>
              <div className="flex flex-col gap-2">
                <Link to="/about" className="font-body text-sm opacity-80 hover:opacity-100 transition-opacity">
                  About Us
                </Link>
                <Link to="/services" className="font-body text-sm opacity-80 hover:opacity-100 transition-opacity">
                  Services & Pricing
                </Link>
                <Link to="/blog" className="font-body text-sm opacity-80 hover:opacity-100 transition-opacity">
                  Health Blog
                </Link>
                <Link to="/store" className="font-body text-sm opacity-80 hover:opacity-100 transition-opacity">
                  Store
                </Link>
                <Link to="/contact" className="font-body text-sm opacity-80 hover:opacity-100 transition-opacity">
                  Contact
                </Link>
              </div>
            </div>

            {/* Contact */}
            <div className="space-y-4">
              <h4 className="font-heading text-lg font-semibold">Contact</h4>
              <div className="flex flex-col gap-3">
                <a
                  href="mailto:info@somalab.com.au"
                  className="font-body text-sm opacity-80 hover:opacity-100 transition-opacity flex items-center gap-2"
                >
                  <Mail className="h-4 w-4" />
                  info@somalab.com.au
                </a>
                <a
                  href="tel:+61414430113"
                  className="font-body text-sm opacity-80 hover:opacity-100 transition-opacity flex items-center gap-2"
                >
                  <Phone className="h-4 w-4" />
                  +61 414 430 113
                </a>
              </div>
            </div>

            {/* Social & Booking */}
            <div className="space-y-4">
              <h4 className="font-heading text-lg font-semibold">Connect</h4>
              <div className="flex gap-4">
                <a
                  href="https://instagram.com/somalab.au"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-primary-foreground/20 transition-colors"
                  aria-label="Follow SomaLab on Instagram"
                >
                  <Instagram className="h-5 w-5" />
                </a>
                <a
                  href="https://facebook.com/somalab"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-primary-foreground/20 transition-colors"
                  aria-label="Follow SomaLab on Facebook"
                >
                  <Facebook className="h-5 w-5" />
                </a>
              </div>
              <Link
                to="/contact"
                className="inline-block font-body text-sm font-medium bg-accent text-accent-foreground px-4 py-2 rounded-lg hover:bg-accent/90 transition-colors"
              >
                Book Your Free Consultation
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Disclaimer & Legal */}
      <div className="border-t border-primary-foreground/20 py-8">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <p className="font-body text-xs opacity-60 mb-4 leading-relaxed text-center">
              <strong>Disclaimer:</strong> The information provided by SomaLab is for general educational and
              informational purposes only. It is not intended as a substitute for professional medical advice,
              diagnosis, or treatment. Always seek the advice of your physician or other qualified health provider with
              any questions you may have regarding a medical condition. Nutrition consulting services provided by
              SomaLab are intended to complement, not replace, medical care. Individual results may vary.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 text-xs opacity-60">
              <Link to="/privacy" className="hover:opacity-100 transition-opacity">
                Privacy Policy
              </Link>
              <span className="hidden sm:inline">•</span>
              <Link to="/terms" className="hover:opacity-100 transition-opacity">
                Terms & Conditions
              </Link>
              <span className="hidden sm:inline">•</span>
              <span>ABN: 53 968 476 385</span>
            </div>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="border-t border-primary-foreground/10 py-4">
        <div className="container mx-auto px-4">
          <p className="font-body text-xs text-center opacity-50">
            © {new Date().getFullYear()} SomaLab. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};
