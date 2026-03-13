import { useState, useEffect } from "react";
import logo from "@/assets/blue-dreams-logo.png";

const navLinks = [
  { label: "Overview", href: "#overview" },
  { label: "Location", href: "#location" },
  { label: "Rooms", href: "#rooms" },
  { label: "Beach & Pools", href: "#beach" },
  { label: "Dining", href: "#dining" },
  { label: "Spa", href: "#spa" },
  { label: "Activities", href: "#activities" },
  { label: "Meetings", href: "#meetings" },
  { label: "Info", href: "#general" },
  { label: "Contact", href: "#contact" },
];

const StickyNav = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "py-3 bg-ocean-deep/98 backdrop-blur-md shadow-lg"
          : "py-5 bg-ocean-deep/90 backdrop-blur-sm"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        <a href="#" className="flex-shrink-0">
          <img
            src={logo}
            alt="Blue Dreams Resort"
            className="h-8 md:h-10 brightness-0 invert"
          />
        </a>

        {/* Desktop links */}
        <div className="hidden lg:flex items-center gap-1">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="font-body text-[11px] font-medium tracking-[0.15em] uppercase text-primary-foreground/60 hover:text-gold px-3 py-2 transition-colors duration-300"
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Mobile hamburger */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="lg:hidden flex flex-col gap-1.5 p-2"
          aria-label="Toggle menu"
        >
          <span
            className={`block w-6 h-[2px] bg-primary-foreground transition-transform duration-300 ${
              menuOpen ? "rotate-45 translate-y-[5px]" : ""
            }`}
          />
          <span
            className={`block w-6 h-[2px] bg-primary-foreground transition-opacity duration-300 ${
              menuOpen ? "opacity-0" : ""
            }`}
          />
          <span
            className={`block w-6 h-[2px] bg-primary-foreground transition-transform duration-300 ${
              menuOpen ? "-rotate-45 -translate-y-[5px]" : ""
            }`}
          />
        </button>
      </div>

      {/* Mobile menu */}
      <div
        className={`lg:hidden overflow-hidden transition-all duration-400 ${
          menuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="bg-ocean-deep px-6 py-4 flex flex-col gap-1 border-t border-primary-foreground/10">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="font-body text-sm tracking-[0.1em] uppercase text-primary-foreground/60 hover:text-gold py-3 transition-colors"
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default StickyNav;
