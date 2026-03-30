import { useState, useEffect, useRef, useMemo } from "react";
import { Search, X, ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useLanguage } from "@/i18n/LanguageContext";

interface SearchEntry {
  title: string;
  description: string;
  href: string;
  category: string;
}

function buildSearchData(t: ReturnType<typeof useLanguage>["t"]): SearchEntry[] {
  const w = t.website;
  return [
    { title: w.navbar.rooms, description: w.roomsPage.comfortElegance, href: "/rooms", category: t.nav.rooms },
    { title: w.roomsPage.clubRoom, description: w.roomsPage.clubRoomDesc, href: "/rooms", category: t.nav.rooms },
    { title: w.roomsPage.clubSeaView, description: w.roomsPage.clubSeaViewDesc, href: "/rooms", category: t.nav.rooms },
    { title: w.roomsPage.clubFamily, description: w.roomsPage.clubFamilyDesc, href: "/rooms", category: t.nav.rooms },
    { title: w.roomsPage.deluxeSeaView, description: w.roomsPage.deluxeSeaViewDesc, href: "/rooms", category: t.nav.rooms },
    { title: w.navbar.restaurantBar, description: w.diningPage.heroDesc, href: "/dining", category: t.nav.dining },
    { title: w.diningPage.ourRestaurants, description: w.diningPage.cuisine, href: "/dining", category: t.nav.dining },
    { title: w.diningPage.barsLounges, description: w.diningPage.barsHeading, href: "/dining", category: t.nav.dining },
    { title: w.navbar.spa, description: w.spaPage.introP1, href: "/spa", category: t.nav.spa },
    { title: w.spaPage.wellnessSpa, description: w.spaPage.ourServices, href: "/spa", category: t.nav.spa },
    { title: w.meetingsPage.title, description: w.meetingsPage.heroDesc, href: "/meetings", category: t.nav.meetings },
    { title: w.meetingsPage.meetingCard, description: w.meetingsPage.meetingCardDesc, href: "/meetings/conferences", category: t.nav.meetings },
    { title: w.meetingsPage.weddingCard, description: w.meetingsPage.weddingCardDesc, href: "/meetings/weddings", category: t.nav.meetings },
    { title: w.meetingsPage.eventsCard, description: w.meetingsPage.eventsCardDesc, href: "/meetings/events", category: t.nav.meetings },
    { title: w.navbar.contact, description: w.contactPage.subtitle, href: "/contact", category: t.nav.contact },
    { title: w.navbar.factsheet, description: t.hero.tagline, href: "/factsheet", category: t.nav.info },
    { title: w.home.discover, description: w.home.heroDesc, href: "/", category: w.home.pearlOfBodrum },
    { title: w.navbar.onlineReservation, description: w.footer.ctaButton, href: "https://blue-dreams.rezervasyonal.com/en/", category: w.navbar.onlineReservation },
    ...t.spa.services.map(s => ({ title: s.title, description: s.desc, href: "/spa", category: t.nav.spa })),
    ...t.dining.restaurants.map(r => ({ title: r.name, description: r.desc, href: "/dining", category: t.nav.dining })),
    ...t.dining.bars.map(b => ({ title: b.name, description: b.desc, href: "/dining", category: t.nav.dining })),
  ];
}

interface Props {
  open: boolean;
  onClose: () => void;
}

const SearchOverlay = ({ open, onClose }: Props) => {
  const [query, setQuery] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);
  const navigate = useNavigate();

  useEffect(() => {
    if (open) {
      setQuery("");
      setTimeout(() => inputRef.current?.focus(), 100);
    }
  }, [open]);

  useEffect(() => {
    if (!open) return;
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", handler);
    return () => document.removeEventListener("keydown", handler);
  }, [open, onClose]);

  const results = useMemo(() => {
    if (!query.trim()) return [];
    const q = query.toLowerCase();
    return searchData.filter(
      (e) =>
        e.title.toLowerCase().includes(q) ||
        e.description.toLowerCase().includes(q) ||
        e.category.toLowerCase().includes(q)
    );
  }, [query]);

  const handleSelect = (entry: SearchEntry) => {
    onClose();
    if (entry.href.startsWith("http")) {
      window.open(entry.href, "_blank");
    } else {
      navigate(entry.href);
    }
  };

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-[70] flex items-start justify-center pt-[15vh]">
      <div className="absolute inset-0 bg-ocean-deep/95 backdrop-blur-xl" onClick={onClose} />
      <div className="relative w-full max-w-2xl mx-4 animate-in fade-in slide-in-from-top-4 duration-300">
        {/* Search Input */}
        <div className="relative">
          <Search className="absolute left-5 top-1/2 -translate-y-1/2 w-5 h-5 text-primary-foreground/40" />
          <input
            ref={inputRef}
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search the website..."
            className="w-full bg-primary-foreground/5 border border-primary-foreground/15 rounded-xl pl-14 pr-14 py-5 font-body text-lg text-primary-foreground placeholder:text-primary-foreground/30 focus:outline-none focus:border-primary-foreground/30 transition-colors"
          />
          <button
            onClick={onClose}
            className="absolute right-4 top-1/2 -translate-y-1/2 text-primary-foreground/40 hover:text-primary-foreground transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Results */}
        {query.trim() && (
          <div className="mt-3 bg-primary-foreground/5 border border-primary-foreground/10 rounded-xl overflow-hidden max-h-[50vh] overflow-y-auto">
            {results.length > 0 ? (
              results.map((entry, i) => (
                <button
                  key={i}
                  onClick={() => handleSelect(entry)}
                  className="w-full flex items-center gap-4 px-6 py-4 text-left hover:bg-primary-foreground/5 transition-colors border-b border-primary-foreground/5 last:border-0 group"
                >
                  <div className="flex-1 min-w-0">
                    <p className="font-body text-sm font-medium text-primary-foreground truncate">
                      {entry.title}
                    </p>
                    <p className="font-body text-xs text-primary-foreground/40 mt-0.5 truncate">
                      {entry.description}
                    </p>
                  </div>
                  <span className="font-body text-[10px] tracking-wider uppercase text-primary-foreground/25 shrink-0">
                    {entry.category}
                  </span>
                  <ArrowRight className="w-4 h-4 text-primary-foreground/20 group-hover:text-primary-foreground/60 transition-colors shrink-0" />
                </button>
              ))
            ) : (
              <div className="px-6 py-10 text-center">
                <p className="font-body text-sm text-primary-foreground/40">No results found</p>
                <p className="font-body text-xs text-primary-foreground/25 mt-1">Try a different keyword</p>
              </div>
            )}
          </div>
        )}

        {/* Keyboard hint */}
        <div className="mt-3 text-center">
          <span className="font-body text-[10px] tracking-wider text-primary-foreground/20">
            Press ESC to close
          </span>
        </div>
      </div>
    </div>
  );
};

export default SearchOverlay;
