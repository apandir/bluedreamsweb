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
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 bg-white shadow-md ${
        scrolled ? "py-2" : "py-4"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        <a href="#" className="flex-shrink-0">
          <img
            src={logo}
            alt="Blue Dreams Resort"
            className="h-8 md:h-10"
          />
        </a>

        {/* Desktop links */}
        <div className="hidden lg:flex items-center gap-1">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="font-body text-[10px] font-medium tracking-[0.15em] uppercase text-foreground/80 hover:text-foreground px-3 py-2 transition-colors"
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
            className={`block w-6 h-px bg-foreground transition-transform duration-300 ${
              menuOpen ? "rotate-45 translate-y-[3.5px]" : ""
            }`}
          />
          <span
            className={`block w-6 h-px bg-foreground transition-opacity duration-300 ${
              menuOpen ? "opacity-0" : ""
            }`}
          />
          <span
            className={`block w-6 h-px bg-foreground transition-transform duration-300 ${
              menuOpen ? "-rotate-45 -translate-y-[3.5px]" : ""
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
        <div className="bg-ocean-deep/95 backdrop-blur-md px-6 py-4 flex flex-col gap-1">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="font-body text-xs tracking-[0.15em] uppercase text-primary-foreground/80 hover:text-primary-foreground py-2 transition-colors"
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
