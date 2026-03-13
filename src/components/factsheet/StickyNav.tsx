import { useState, useEffect } from "react";
import logo from "@/assets/blue-dreams-logo.png";
import { useLanguage } from "@/i18n/LanguageContext";
import type { Language } from "@/i18n/types";
import { ChevronDown } from "lucide-react";

const langOptions: { code: Language; label: string; flag: string }[] = [
  { code: "en", label: "EN", flag: "🇬🇧" },
  { code: "tr", label: "TR", flag: "🇹🇷" },
  { code: "ru", label: "RU", flag: "🇷🇺" },
  { code: "de", label: "DE", flag: "🇩🇪" },
  { code: "ar", label: "AR", flag: "🇸🇦" },
  { code: "sv", label: "SV", flag: "🇸🇪" },
];

const StickyNav = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [langOpen, setLangOpen] = useState(false);
  const { language, setLanguage, t } = useLanguage();

  const navLinks = [
    { label: t.nav.overview, href: "#overview" },
    { label: t.nav.location, href: "#location" },
    { label: t.nav.rooms, href: "#rooms" },
    { label: t.nav.beachPools, href: "#beach" },
    { label: t.nav.dining, href: "#dining" },
    { label: t.nav.spa, href: "#spa" },
    { label: t.nav.activities, href: "#activities" },
    { label: t.nav.meetings, href: "#meetings" },
    { label: t.nav.info, href: "#general" },
    { label: t.nav.contact, href: "#contact" },
  ];

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!langOpen) return;
    const close = () => setLangOpen(false);
    document.addEventListener("click", close);
    return () => document.removeEventListener("click", close);
  }, [langOpen]);

  const currentLang = langOptions.find((l) => l.code === language)!;

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "py-2 bg-ocean-deep/98 backdrop-blur-md shadow-lg"
          : "py-3 bg-ocean-deep/90 backdrop-blur-sm"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        <a href="#" className="flex-shrink-0">
          <img src={logo} alt="Blue Dreams Resort" className="h-7 md:h-8 brightness-0 invert" />
        </a>

        <div className="hidden lg:flex items-center gap-0.5">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="font-body text-[10px] font-medium tracking-[0.12em] uppercase text-primary-foreground/60 hover:text-gold px-2.5 py-1.5 transition-colors duration-300"
            >
              {link.label}
            </a>
          ))}

          {/* Language Dropdown */}
          <div className="relative ml-2">
            <button
              onClick={(e) => { e.stopPropagation(); setLangOpen(!langOpen); }}
              className="flex items-center gap-1 px-2.5 py-1.5 font-body text-[10px] font-medium tracking-[0.12em] uppercase text-primary-foreground/60 hover:text-gold transition-colors duration-300"
            >
              <span>{currentLang.flag}</span>
              <span>{currentLang.label}</span>
              <ChevronDown className={`w-3 h-3 transition-transform ${langOpen ? "rotate-180" : ""}`} />
            </button>
            {langOpen && (
              <div className="absolute top-full right-0 mt-1 bg-ocean-deep/98 backdrop-blur-md border border-primary-foreground/10 rounded-lg overflow-hidden shadow-xl min-w-[100px]">
                {langOptions.map((opt) => (
                  <button
                    key={opt.code}
                    onClick={() => { setLanguage(opt.code); setLangOpen(false); }}
                    className={`w-full flex items-center gap-2 px-4 py-2.5 font-body text-xs tracking-wider transition-colors ${
                      language === opt.code ? "text-gold bg-primary-foreground/5" : "text-primary-foreground/60 hover:text-gold hover:bg-primary-foreground/5"
                    }`}
                  >
                    <span>{opt.flag}</span>
                    <span>{opt.label}</span>
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>

        <div className="flex items-center gap-2 lg:hidden">
          {/* Mobile language selector */}
          <div className="relative">
            <button
              onClick={(e) => { e.stopPropagation(); setLangOpen(!langOpen); }}
              className="flex items-center gap-1 px-2 py-1.5 font-body text-[10px] font-medium text-primary-foreground/60"
            >
              <span>{currentLang.flag}</span>
              <ChevronDown className="w-3 h-3" />
            </button>
            {langOpen && (
              <div className="absolute top-full right-0 mt-1 bg-ocean-deep/98 backdrop-blur-md border border-primary-foreground/10 rounded-lg overflow-hidden shadow-xl min-w-[90px] z-50">
                {langOptions.map((opt) => (
                  <button
                    key={opt.code}
                    onClick={() => { setLanguage(opt.code); setLangOpen(false); }}
                    className={`w-full flex items-center gap-2 px-3 py-2 font-body text-xs ${
                      language === opt.code ? "text-gold" : "text-primary-foreground/60"
                    }`}
                  >
                    <span>{opt.flag}</span>
                    <span>{opt.label}</span>
                  </button>
                ))}
              </div>
            )}
          </div>
          <button onClick={() => setMenuOpen(!menuOpen)} className="flex flex-col gap-1 p-2" aria-label="Toggle menu">
            <span className={`block w-5 h-[1.5px] bg-primary-foreground transition-transform duration-300 ${menuOpen ? "rotate-45 translate-y-[4px]" : ""}`} />
            <span className={`block w-5 h-[1.5px] bg-primary-foreground transition-opacity duration-300 ${menuOpen ? "opacity-0" : ""}`} />
            <span className={`block w-5 h-[1.5px] bg-primary-foreground transition-transform duration-300 ${menuOpen ? "-rotate-45 -translate-y-[4px]" : ""}`} />
          </button>
        </div>
      </div>

      <div className={`lg:hidden overflow-hidden transition-all duration-400 ${menuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"}`}>
        <div className="bg-ocean-deep px-6 py-3 flex flex-col gap-0.5 border-t border-primary-foreground/10">
          {navLinks.map((link) => (
            <a key={link.href} href={link.href} onClick={() => setMenuOpen(false)} className="font-body text-xs tracking-[0.1em] uppercase text-primary-foreground/60 hover:text-gold py-2.5 transition-colors">
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default StickyNav;
