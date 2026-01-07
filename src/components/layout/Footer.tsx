import { Link } from "react-router-dom";
import { Instagram, Mail, Phone } from "lucide-react";
import logo from "@/assets/somalab-logo.png";

export const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          <div className="space-y-4">
            <img src={logo} alt="SomaLab" className="h-16 w-auto brightness-0 invert" />
            <p className="font-body text-sm opacity-80">
              Transform your health through personalized nutrition and expert coaching.
            </p>
          </div>

          <div className="space-y-4">
            <h4 className="font-heading text-lg font-semibold">Quick Links</h4>
            <div className="flex flex-col gap-2">
              <Link to="/services" className="font-body text-sm opacity-80 hover:opacity-100 transition-opacity">
                Services
              </Link>
              <Link to="/store" className="font-body text-sm opacity-80 hover:opacity-100 transition-opacity">
                Store
              </Link>
              <Link to="/blog" className="font-body text-sm opacity-80 hover:opacity-100 transition-opacity">
                Blog
              </Link>
            </div>
          </div>

          <div className="space-y-4">
            <h4 className="font-heading text-lg font-semibold">Contact</h4>
            <div className="flex flex-col gap-2">
              <a href="mailto:hello@somalab.com" className="font-body text-sm opacity-80 hover:opacity-100 transition-opacity flex items-center gap-2">
                <Mail className="h-4 w-4" />
                hello@somalab.com
              </a>
              <a href="tel:+1234567890" className="font-body text-sm opacity-80 hover:opacity-100 transition-opacity flex items-center gap-2">
                <Phone className="h-4 w-4" />
                +1 (234) 567-890
              </a>
            </div>
          </div>

          <div className="space-y-4">
            <h4 className="font-heading text-lg font-semibold">Follow Us</h4>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 font-body text-sm opacity-80 hover:opacity-100 transition-opacity"
            >
              <Instagram className="h-5 w-5" />
              @somalab
            </a>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-primary-foreground/20">
          <p className="font-body text-sm text-center opacity-60">
            © {new Date().getFullYear()} SomaLab. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};
