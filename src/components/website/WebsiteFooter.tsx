import { Link } from "react-router-dom";
import logo from "@/assets/blue-dreams-logo.png";
import mapScreenshot from "@/assets/map-screenshot.jpg";
import { Phone, Mail, MapPin, MessageCircle, ExternalLink } from "lucide-react";
import { useLanguage } from "@/i18n/LanguageContext";

const WebsiteFooter = () => {
  const { t } = useLanguage();
  const w = t.website.footer;
  const n = t.website.navbar;

  const quickLinks = [
    { label: n.rooms, href: "/rooms" },
    { label: n.restaurantBar, href: "/dining" },
    { label: n.spa, href: "/spa" },
    { label: n.contact, href: "/contact" },
    { label: n.factsheet, href: "/factsheet" },
  ];

  const policyLinks = [
    { label: w.privacy, href: "#" },
    { label: w.terms, href: "#" },
  ];

  return (
    <footer className="bg-ocean-deep text-primary-foreground">
      {/* Booking CTA Strip */}
      <div className="border-b border-primary-foreground/10">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10 py-16 text-center">
          <p className="font-body text-[10px] font-semibold tracking-[0.3em] uppercase text-accent mb-3">
            {w.ctaLabel}
          </p>
          <h2 className="font-display text-2xl md:text-3xl text-primary-foreground mb-6">
            {w.ctaHeading}
          </h2>
          <a
            href="https://new.bluedreamsresort.com/en/rezervasyon"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block font-body text-[11px] font-semibold tracking-[0.15em] uppercase border border-primary-foreground/40 hover:bg-primary-foreground hover:text-primary text-primary-foreground px-8 py-3 rounded-sm transition-colors"
          >
            {w.ctaButton}
          </a>
        </div>
      </div>

      {/* Map Section */}
      <div className="border-b border-primary-foreground/10">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10 py-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <a
              href="https://www.google.com/maps/place/Blue+Dreams+Resort/@37.0847,27.4342,15z"
              target="_blank"
              rel="noopener noreferrer"
              className="block overflow-hidden rounded-lg group"
            >
              <img
                src={mapScreenshot}
                alt="Blue Dreams Resort Location on Map"
                className="w-full h-[280px] object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </a>
            <div className="flex flex-col gap-4">
              <p className="font-body text-[10px] font-semibold tracking-[0.3em] uppercase text-accent">
                {w.ctaLabel || "FIND US"}
              </p>
              <h3 className="font-display text-2xl text-primary-foreground">
                Torba, Bodrum
              </h3>
              <p className="font-body text-sm text-primary-foreground/50 leading-relaxed">
                Torba Mahallesi, Herodot Bulvarı No:11, Bodrum / Muğla / Türkiye
              </p>
              <a
                href="https://www.google.com/maps/dir//Blue+Dreams+Resort,+Torba+Mahallesi,+Herodot+Bulvarı+No:11,+Bodrum"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 font-body text-[11px] font-semibold tracking-[0.15em] uppercase text-accent hover:text-accent/80 transition-colors mt-2 w-fit"
              >
                <ExternalLink className="w-4 h-4" />
                Get Directions
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="max-w-[1400px] mx-auto px-6 lg:px-10 py-16">
        {/* Centered Logo */}
        <div className="flex justify-center mb-12">
          <div className="bg-white rounded-md px-4 py-2">
            <img src={logo} alt="Blue Dreams Resort" className="h-10" />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          {/* Address & Map */}
          <div>
            <div className="flex items-start gap-3 mb-4">
              <MapPin className="w-4 h-4 text-accent mt-0.5 flex-shrink-0" />
              <p className="font-body text-sm text-primary-foreground/50 leading-relaxed">
                Torba Mahallesi, Herodot Bulvarı No:11<br />
                Bodrum / MUĞLA / TÜRKİYE
              </p>
            </div>
            <a
              href="tel:+902523371111"
              className="flex items-center gap-3 font-body text-sm text-primary-foreground/50 hover:text-primary-foreground transition-colors mb-2"
            >
              <Phone className="w-4 h-4 text-accent flex-shrink-0" />
              +90 252 337 11 11
            </a>
            <a
              href="mailto:sales@bluedreamsresort.com"
              className="flex items-center gap-3 font-body text-sm text-primary-foreground/50 hover:text-primary-foreground transition-colors"
            >
              <Mail className="w-4 h-4 text-accent flex-shrink-0" />
              sales@bluedreamsresort.com
            </a>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-body text-[10px] font-semibold tracking-[0.2em] uppercase text-primary-foreground/30 mb-5">
              {w.quickLinks}
            </h4>
            <div className="flex flex-col gap-2.5">
              {quickLinks.map((link) => (
                <Link
                  key={link.href}
                  to={link.href}
                  className="font-body text-sm text-primary-foreground/50 hover:text-primary-foreground transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Policies */}
          <div>
            <h4 className="font-body text-[10px] font-semibold tracking-[0.2em] uppercase text-primary-foreground/30 mb-5">
              {w.contactLabel}
            </h4>
            <div className="flex flex-col gap-2.5">
              {policyLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="font-body text-sm text-primary-foreground/50 hover:text-primary-foreground transition-colors"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>

          {/* Social & WhatsApp */}
          <div>
            <h4 className="font-body text-[10px] font-semibold tracking-[0.2em] uppercase text-primary-foreground/30 mb-5">
              {w.connect}
            </h4>
            <div className="flex flex-col gap-2.5">
              <a
                href="https://wa.me/905495167803"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 font-body text-sm text-primary-foreground/50 hover:text-primary-foreground transition-colors"
              >
                <MessageCircle className="w-4 h-4 text-accent" />
                WhatsApp
              </a>
              <a
                href="https://www.instagram.com/bluedreamsresort/"
                target="_blank"
                rel="noopener noreferrer"
                className="font-body text-sm text-primary-foreground/50 hover:text-primary-foreground transition-colors"
              >
                @bluedreamsresort
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-primary-foreground/10 py-5">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10 flex flex-col md:flex-row items-center justify-between gap-3">
          <p className="font-body text-[11px] text-primary-foreground/25">
            © {new Date().getFullYear()} Blue Dreams Resort. All rights reserved.
          </p>
          <p className="font-body text-[11px] text-primary-foreground/25">
            {w.brandDesc}
          </p>
        </div>
      </div>

      {/* Floating WhatsApp & Phone */}
      <div className="fixed bottom-6 right-6 flex flex-col gap-3 z-40">
        <a
          href="https://wa.me/905495167803"
          target="_blank"
          rel="noopener noreferrer"
          className="w-12 h-12 rounded-full bg-emerald-600 hover:bg-emerald-700 text-primary-foreground flex items-center justify-center shadow-lg transition-colors"
          aria-label="WhatsApp"
        >
          <MessageCircle className="w-5 h-5" />
        </a>
        <a
          href="tel:+902523371111"
          className="w-12 h-12 rounded-full bg-accent hover:bg-accent/90 text-accent-foreground flex items-center justify-center shadow-lg transition-colors"
          aria-label="Call"
        >
          <Phone className="w-5 h-5" />
        </a>
      </div>
    </footer>
  );
};

export default WebsiteFooter;