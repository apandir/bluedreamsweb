import { Link } from "react-router-dom";
import logo from "@/assets/blue-dreams-logo-white.png";
import { Phone, Mail, MapPin, MessageCircle } from "lucide-react";
import { useLanguage } from "@/i18n/LanguageContext";

const WebsiteFooter = () => {
  const { t } = useLanguage();
  const w = t.website.footer;
  const n = t.website.navbar;

  return (
    <footer className="bg-ocean-deep text-primary-foreground">
      {/* CTA Banner */}
      <div className="relative py-20 text-center border-b border-primary-foreground/10">
        <p className="font-body text-xs font-semibold tracking-[0.3em] uppercase text-accent mb-4">
          {w.ctaLabel}
        </p>
        <h2 className="font-display text-3xl md:text-4xl text-primary-foreground mb-6">
          {w.ctaHeading}
        </h2>
        <a
          href="https://new.bluedreamsresort.com/en/rezervasyon"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block font-body text-sm font-semibold tracking-wider uppercase border border-accent text-accent hover:bg-accent hover:text-accent-foreground px-8 py-3 rounded-full transition-colors"
        >
          {w.ctaButton}
        </a>
      </div>

      {/* Footer Content */}
      <div className="max-w-[1400px] mx-auto px-6 lg:px-10 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          <div>
            <img src={logo} alt="Blue Dreams Resort" className="h-12 mb-6" />
            <p className="font-body text-sm text-primary-foreground/50 leading-relaxed">
              {w.brandDesc}
            </p>
          </div>

          <div>
            <h4 className="font-body text-xs font-semibold tracking-[0.2em] uppercase text-accent mb-6">
              {w.quickLinks}
            </h4>
            <div className="flex flex-col gap-3">
              <Link to="/rooms" className="font-body text-sm text-primary-foreground/50 hover:text-primary-foreground transition-colors">{n.rooms}</Link>
              <Link to="/dining" className="font-body text-sm text-primary-foreground/50 hover:text-primary-foreground transition-colors">{n.restaurantBar}</Link>
              <Link to="/spa" className="font-body text-sm text-primary-foreground/50 hover:text-primary-foreground transition-colors">{n.spa}</Link>
              <Link to="/contact" className="font-body text-sm text-primary-foreground/50 hover:text-primary-foreground transition-colors">{n.contact}</Link>
              <Link to="/factsheet" className="font-body text-sm text-primary-foreground/50 hover:text-primary-foreground transition-colors">{n.factsheet}</Link>
            </div>
          </div>

          <div>
            <h4 className="font-body text-xs font-semibold tracking-[0.2em] uppercase text-accent mb-6">
              {w.contactLabel}
            </h4>
            <div className="flex flex-col gap-4">
              <div className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-accent mt-0.5 flex-shrink-0" />
                <p className="font-body text-sm text-primary-foreground/50">
                  Torba Mahallesi, Herodot Bulvarı No:11<br />Bodrum / MUĞLA
                </p>
              </div>
              <a href="tel:+902523371111" className="flex items-center gap-3 font-body text-sm text-primary-foreground/50 hover:text-primary-foreground transition-colors">
                <Phone className="w-4 h-4 text-accent flex-shrink-0" />+90 252 337 11 11
              </a>
              <a href="mailto:sales@bluedreamsresort.com" className="flex items-center gap-3 font-body text-sm text-primary-foreground/50 hover:text-primary-foreground transition-colors">
                <Mail className="w-4 h-4 text-accent flex-shrink-0" />sales@bluedreamsresort.com
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-body text-xs font-semibold tracking-[0.2em] uppercase text-accent mb-6">
              {w.connect}
            </h4>
            <div className="flex flex-col gap-3">
              <a href="https://wa.me/905495167803" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 font-body text-sm text-primary-foreground/50 hover:text-primary-foreground transition-colors">
                <MessageCircle className="w-4 h-4 text-accent" />WhatsApp
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-primary-foreground/10 py-6">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="font-body text-xs text-primary-foreground/30">
            © {new Date().getFullYear()} Blue Dreams Resort. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <a href="#" className="font-body text-xs text-primary-foreground/30 hover:text-primary-foreground/60 transition-colors">{w.privacy}</a>
            <a href="#" className="font-body text-xs text-primary-foreground/30 hover:text-primary-foreground/60 transition-colors">{w.terms}</a>
          </div>
        </div>
      </div>

      {/* Floating WhatsApp & Phone */}
      <div className="fixed bottom-6 right-6 flex flex-col gap-3 z-40">
        <a href="https://wa.me/905495167803" target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-full bg-emerald-600 hover:bg-emerald-700 text-primary-foreground flex items-center justify-center shadow-lg transition-colors" aria-label="WhatsApp">
          <MessageCircle className="w-5 h-5" />
        </a>
        <a href="tel:+902523371111" className="w-12 h-12 rounded-full bg-accent hover:bg-accent/90 text-accent-foreground flex items-center justify-center shadow-lg transition-colors" aria-label="Call">
          <Phone className="w-5 h-5" />
        </a>
      </div>
    </footer>
  );
};

export default WebsiteFooter;