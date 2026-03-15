import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import logo from "@/assets/blue-dreams-logo-white.png";
import { Phone, MessageCircle, Menu, X } from "lucide-react";
import { useLanguage } from "@/i18n/LanguageContext";
import type { Language } from "@/i18n/types";

const languages: { code: Language; label: string }[] = [
  { code: "en", label: "EN" },
  { code: "tr", label: "TR" },
  { code: "de", label: "DE" },
  { code: "ru", label: "RU" },
];

const WebsiteNavbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const { language, setLanguage, t } = useLanguage();
  const location = useLocation();
  const w = t.website.navbar;

  const navLinks = [
    { label: w.rooms, href: "/rooms" },
    { label: w.restaurantBar, href: "/dining" },
    { label: w.spa, href: "/spa" },
    { label: w.contact, href: "/contact" },
  ];

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
  }, [location.pathname]);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "py-3 bg-ocean-deep/95 backdrop-blur-md shadow-lg"
          : "py-5 bg-transparent"
      }`}
    >
      <div className="max-w-[1400px] mx-auto px-6 lg:px-10 flex items-center justify-between">
        <Link to="/" className="flex-shrink-0 z-10">
          <img src={logo} alt="Blue Dreams Resort" className="h-10 md:h-12" />
        </Link>

        <div className="hidden lg:flex items-center gap-1">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              to={link.href}
              className={`font-body text-[11px] font-medium tracking-[0.15em] uppercase px-4 py-2 transition-colors duration-300 ${
                location.pathname === link.href
                  ? "text-primary-foreground"
                  : "text-primary-foreground/60 hover:text-primary-foreground"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </div>

        <div className="hidden lg:flex items-center gap-3">
          <div className="flex items-center gap-0.5 border-r border-primary-foreground/20 pr-4 mr-2">
            {languages.map((lang) => (
              <button
                key={lang.code}
                onClick={() => setLanguage(lang.code)}
                className={`font-body text-[11px] font-medium tracking-wider px-1.5 py-1 transition-colors ${
                  language === lang.code
                    ? "text-accent"
                    : "text-primary-foreground/50 hover:text-primary-foreground"
                }`}
              >
                {lang.label}
              </button>
            ))}
          </div>

          <a href="https://wa.me/905495167803" target="_blank" rel="noopener noreferrer" className="text-primary-foreground/60 hover:text-primary-foreground transition-colors" aria-label="WhatsApp">
            <MessageCircle className="w-4 h-4" />
          </a>
          <a href="tel:+902523371111" className="text-primary-foreground/60 hover:text-primary-foreground transition-colors" aria-label="Call">
            <Phone className="w-4 h-4" />
          </a>

          <button className="ml-2 flex items-center gap-2 bg-accent hover:bg-accent/90 text-accent-foreground font-body text-[11px] font-semibold tracking-wider uppercase px-4 py-2.5 rounded-full transition-colors">
            <span className="w-1.5 h-1.5 rounded-full bg-accent-foreground animate-pulse" />
            {w.blueConcierge}
          </button>

          <a
            href="https://new.bluedreamsresort.com/en/rezervasyon"
            target="_blank"
            rel="noopener noreferrer"
            className="font-body text-[11px] font-semibold tracking-wider uppercase border border-primary-foreground/40 hover:border-primary-foreground text-primary-foreground px-5 py-2.5 rounded-full transition-colors"
          >
            {w.onlineReservation}
          </a>

          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="flex items-center gap-2 font-body text-[11px] font-semibold tracking-wider uppercase text-primary-foreground ml-2"
          >
            {w.menu}
            <Menu className="w-5 h-5" />
          </button>
        </div>

        <div className="flex items-center gap-3 lg:hidden">
          <a href="https://wa.me/905495167803" target="_blank" rel="noopener noreferrer" className="text-primary-foreground/70">
            <MessageCircle className="w-4 h-4" />
          </a>
          <button onClick={() => setMenuOpen(!menuOpen)} className="text-primary-foreground z-10" aria-label="Toggle menu">
            {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      <div
        className={`fixed inset-0 bg-ocean-deep z-40 transition-all duration-500 flex flex-col items-center justify-center gap-6 ${
          menuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
      >
        <button onClick={() => setMenuOpen(false)} className="absolute top-6 right-6 text-primary-foreground">
          <X className="w-7 h-7" />
        </button>

        {navLinks.map((link) => (
          <Link key={link.href} to={link.href} onClick={() => setMenuOpen(false)} className="font-display text-3xl text-primary-foreground/80 hover:text-primary-foreground transition-colors">
            {link.label}
          </Link>
        ))}

        <Link to="/factsheet" onClick={() => setMenuOpen(false)} className="font-display text-3xl text-primary-foreground/80 hover:text-primary-foreground transition-colors">
          {w.factsheet}
        </Link>

        <div className="flex gap-3 mt-6">
          {languages.map((lang) => (
            <button
              key={lang.code}
              onClick={() => setLanguage(lang.code)}
              className={`font-body text-sm tracking-wider px-2 py-1 ${
                language === lang.code ? "text-accent" : "text-primary-foreground/50"
              }`}
            >
              {lang.label}
            </button>
          ))}
        </div>

        <a
          href="https://new.bluedreamsresort.com/en/rezervasyon"
          target="_blank"
          rel="noopener noreferrer"
          className="mt-4 font-body text-sm font-semibold tracking-wider uppercase border border-accent text-accent px-8 py-3 rounded-full"
        >
          {w.onlineReservation}
        </a>
      </div>
    </nav>
  );
};

export default WebsiteNavbar;