import { Phone, Mail, Instagram, Facebook } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground py-16">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8">
          {/* Brand */}
          <div>
            <p className="font-display text-lg font-medium mb-3">
              Organizing <span className="text-wood">by Design</span>
            </p>
            <p className="text-primary-foreground/60 text-sm leading-relaxed max-w-xs">
              Custom millwork and organizational solutions for discerning homeowners across the GTA.
            </p>
          </div>

          {/* Contact */}
          <div>
            <p className="text-xs tracking-[0.2em] uppercase text-primary-foreground/50 mb-4">Contact</p>
            <div className="space-y-3">
              <a href="tel:4168761954" className="flex items-center gap-3 text-sm text-primary-foreground/70 hover:text-primary-foreground transition-colors">
                <Phone size={15} />
                (416) 876-1954
              </a>
              <a href="mailto:info@organizingbydesign.ca" className="flex items-center gap-3 text-sm text-primary-foreground/70 hover:text-primary-foreground transition-colors">
                <Mail size={15} />
                info@organizingbydesign.ca
              </a>
            </div>
          </div>

          {/* Social */}
          <div>
            <p className="text-xs tracking-[0.2em] uppercase text-primary-foreground/50 mb-4">Follow Us</p>
            <div className="flex gap-4">
              <a href="#" aria-label="Instagram" className="w-10 h-10 rounded-full border border-primary-foreground/20 flex items-center justify-center hover:border-wood hover:text-wood transition-colors active:scale-95">
                <Instagram size={16} />
              </a>
              <a href="#" aria-label="Facebook" className="w-10 h-10 rounded-full border border-primary-foreground/20 flex items-center justify-center hover:border-wood hover:text-wood transition-colors active:scale-95">
                <Facebook size={16} />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-primary-foreground/10 text-center">
          <p className="text-xs text-primary-foreground/40">
            © 2026 Organizing by Design. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
