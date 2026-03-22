import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import logo from "@/assets/blue-dreams-logo.png";
import { Phone, Menu, X, Home, ChevronDown } from "lucide-react";
import WeatherWidget from "./WeatherWidget";
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
  const [langOpen, setLangOpen] = useState(false);
  const { language, setLanguage, t } = useLanguage();
  const location = useLocation();
  const w = t.website.navbar;

  const navLinks = [
    { label: w.rooms, href: "/rooms" },
    { label: w.restaurantBar, href: "/dining" },
    { label: w.spa, href: "/spa" },
    { label: t.website.meetingsPage.title, href: "/meetings" },
    { label: "Gallery", href: "/gallery" },
    { label: w.contact, href: "/contact" },
    { label: w.factsheet, href: "/factsheet" },
  ];

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
    setLangOpen(false);
  }, [location.pathname]);

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? "bg-ocean-deep/95 backdrop-blur-md shadow-lg"
            : "bg-ocean-deep/70 backdrop-blur-sm"
        }`}
      >
        {/* Top Bar */}
        <div className="border-b border-primary-foreground/10">
          <div className="max-w-[1400px] mx-auto px-6 lg:px-10 h-14 flex items-center justify-between">
            {/* Left: Menu + Home */}
            <div className="flex items-center gap-4">
              <button
                onClick={() => setMenuOpen(!menuOpen)}
                className="flex items-center gap-2 text-primary-foreground/70 hover:text-primary-foreground transition-colors"
              >
                <div className="flex flex-col gap-[5px]">
                  <span className="block w-5 h-[1.5px] bg-current" />
                  <span className="block w-5 h-[1.5px] bg-current" />
                  <span className="block w-3.5 h-[1.5px] bg-current" />
                </div>
                <span className="font-body text-[10px] font-semibold tracking-[0.15em] uppercase hidden sm:inline">
                  {w.menu}
                </span>
              </button>
              <Link
                to="/"
                className="text-primary-foreground/70 hover:text-primary-foreground transition-colors"
                aria-label="Home"
              >
                <Home className="w-4 h-4" />
              </Link>
            </div>

            {/* Center: Logo */}
            <Link to="/" className="absolute left-1/2 -translate-x-1/2">
              <div className={`bg-white rounded-md px-3 py-1.5 transition-all duration-500 ${scrolled ? "px-2 py-1" : ""}`}>
                <img
                  src={logo}
                  alt="Blue Dreams Resort"
                  className={`transition-all duration-500 ${scrolled ? "h-7" : "h-9 md:h-10"}`}
                />
              </div>
            </Link>

            {/* Right: Phone + Lang + Book Now */}
            <div className="flex items-center gap-3 md:gap-4">
              <span className="hidden sm:flex">
                <WeatherWidget />
              </span>
              <a
                href="tel:+902523371111"
                className="text-primary-foreground/60 hover:text-primary-foreground transition-colors"
                aria-label="Call"
              >
                <Phone className="w-4 h-4" />
              </a>

              {/* Language Dropdown */}
              <div className="relative">
                <button
                  onClick={() => setLangOpen(!langOpen)}
                  className="flex items-center gap-1 font-body text-[11px] font-medium tracking-wider text-primary-foreground/70 hover:text-primary-foreground transition-colors"
                >
                  {language.toUpperCase()}
                  <ChevronDown className={`w-3 h-3 transition-transform ${langOpen ? "rotate-180" : ""}`} />
                </button>
                {langOpen && (
                  <div className="absolute top-full right-0 mt-2 bg-ocean-deep/95 backdrop-blur-md border border-primary-foreground/10 rounded-lg overflow-hidden shadow-lg min-w-[60px]">
                    {languages.map((lang) => (
                      <button
                        key={lang.code}
                        onClick={() => {
                          setLanguage(lang.code);
                          setLangOpen(false);
                        }}
                        className={`block w-full px-4 py-2 font-body text-[11px] font-medium tracking-wider text-left transition-colors ${
                          language === lang.code
                            ? "text-accent bg-primary-foreground/5"
                            : "text-primary-foreground/60 hover:text-primary-foreground hover:bg-primary-foreground/5"
                        }`}
                      >
                        {lang.label}
                      </button>
                    ))}
                  </div>
                )}
              </div>

              {/* Book Now */}
              <a
                href="https://blue-dreams.rezervasyonal.com/en/"
                target="_blank"
                rel="noopener noreferrer"
                className="hidden sm:inline font-body text-[10px] md:text-[11px] font-semibold tracking-[0.12em] uppercase border border-primary-foreground/50 hover:bg-primary-foreground hover:text-primary text-primary-foreground px-4 md:px-6 py-2 rounded-sm transition-colors"
              >
                {w.onlineReservation.length > 12 ? w.onlineReservation.split(" ").slice(0, 2).join(" ") : w.onlineReservation}
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar: Category Nav (desktop) */}
        <div className="hidden lg:block">
          <div className="max-w-[1400px] mx-auto px-6 lg:px-10 flex items-center justify-center h-11">
            {navLinks.map((link, i) => (
              <>
                <Link
                  key={link.href}
                  to={link.href}
                  className={`font-body text-[11px] font-medium tracking-[0.15em] uppercase px-5 py-2 transition-colors duration-300 ${
                    location.pathname === link.href
                      ? "text-primary-foreground"
                      : "text-primary-foreground/60 hover:text-primary-foreground"
                  }`}
                >
                  {link.label}
                </Link>
                {i === 0 && (
                  <Link
                    to="/"
                    className={`px-3 py-2 transition-colors duration-300 ${
                      location.pathname === "/"
                        ? "text-primary-foreground"
                        : "text-primary-foreground/60 hover:text-primary-foreground"
                    }`}
                    aria-label="Home"
                  >
                    <Home className="w-4 h-4" />
                  </Link>
                )}
              </>
            ))}
          </div>
        </div>
      </nav>

      {/* Full-screen Menu Overlay */}
      <div
        className={`fixed inset-0 bg-ocean-deep z-[60] transition-all duration-500 flex flex-col items-center justify-center gap-6 ${
          menuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
      >
        <button
          onClick={() => setMenuOpen(false)}
          className="absolute top-5 right-6 text-primary-foreground"
        >
          <X className="w-7 h-7" />
        </button>

        <div className="bg-white rounded-md px-4 py-2 mb-6">
          <img src={logo} alt="Blue Dreams Resort" className="h-12" />
        </div>

        {navLinks.map((link) => (
          <Link
            key={link.href}
            to={link.href}
            onClick={() => setMenuOpen(false)}
            className={`font-body text-sm font-medium tracking-[0.2em] uppercase transition-colors ${
              location.pathname === link.href
                ? "text-accent"
                : "text-primary-foreground/60 hover:text-primary-foreground"
            }`}
          >
            {link.label}
          </Link>
        ))}

        <div className="flex gap-4 mt-8">
          {languages.map((lang) => (
            <button
              key={lang.code}
              onClick={() => {
                setLanguage(lang.code);
                setMenuOpen(false);
              }}
              className={`font-body text-sm tracking-wider px-2 py-1 ${
                language === lang.code ? "text-accent" : "text-primary-foreground/50"
              }`}
            >
              {lang.label}
            </button>
          ))}
        </div>

        <a
          href="https://blue-dreams.rezervasyonal.com/en/"
          target="_blank"
          rel="noopener noreferrer"
          className="mt-4 font-body text-sm font-semibold tracking-wider uppercase border border-accent text-accent px-8 py-3 rounded-sm transition-colors hover:bg-accent hover:text-accent-foreground"
        >
          {w.onlineReservation}
        </a>
      </div>
    </>
  );
};

export default WebsiteNavbar;