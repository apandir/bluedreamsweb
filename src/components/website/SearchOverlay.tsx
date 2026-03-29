import { useState, useEffect, useRef, useMemo } from "react";
import { Search, X, ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";

interface SearchEntry {
  title: string;
  description: string;
  href: string;
  category: string;
}

const searchData: SearchEntry[] = [
  { title: "Rooms & Suites", description: "Luxury rooms, suites, family rooms, sea view accommodation", href: "/rooms", category: "Accommodation" },
  { title: "Standard Room", description: "Comfortable standard rooms with modern amenities", href: "/rooms", category: "Accommodation" },
  { title: "Suite", description: "Spacious suites with separate living areas", href: "/rooms", category: "Accommodation" },
  { title: "Family Room", description: "Family-friendly rooms with extra space for children", href: "/rooms", category: "Accommodation" },
  { title: "Restaurant & Bar", description: "Main restaurant, a la carte dining, bars, snack bar, all inclusive", href: "/dining", category: "Dining" },
  { title: "Breakfast", description: "Open buffet breakfast with fresh pastries and local specialties", href: "/dining", category: "Dining" },
  { title: "A La Carte", description: "Fine dining a la carte restaurant experience", href: "/dining", category: "Dining" },
  { title: "All Inclusive", description: "All inclusive food and beverage concept", href: "/dining", category: "Dining" },
  { title: "Spa & Wellness", description: "Turkish bath, sauna, massage, beauty treatments, hammam", href: "/spa", category: "Wellness" },
  { title: "Turkish Bath", description: "Traditional hammam and Turkish bath experience", href: "/spa", category: "Wellness" },
  { title: "Massage", description: "Relaxing massage treatments and body therapies", href: "/spa", category: "Wellness" },
  { title: "Sauna", description: "Finnish sauna and steam room facilities", href: "/spa", category: "Wellness" },
  { title: "Meetings & Events", description: "Conference rooms, weddings, corporate events, banquet", href: "/meetings", category: "Events" },
  { title: "Conferences", description: "Meeting rooms and conference facilities with AV equipment", href: "/meetings/conferences", category: "Events" },
  { title: "Weddings", description: "Wedding venues, beach weddings, celebration packages", href: "/meetings/weddings", category: "Events" },
  { title: "Private Events", description: "Birthday parties, anniversaries, special celebrations", href: "/meetings/events", category: "Events" },
  { title: "Gallery", description: "Photo gallery of the resort, rooms, beach, pool and facilities", href: "/gallery", category: "Media" },
  { title: "Facilities & Services", description: "Swimming pool, fitness, kids club, entertainment, Wi-Fi, parking", href: "/facilities", category: "Services" },
  { title: "Swimming Pool", description: "Outdoor swimming pools with sun loungers", href: "/facilities", category: "Services" },
  { title: "Fitness Center", description: "Gym and fitness center with modern equipment", href: "/facilities", category: "Services" },
  { title: "Kids Club", description: "Children's club with activities and playground", href: "/facilities", category: "Services" },
  { title: "Beach", description: "Private beach with sun loungers and water sports", href: "/facilities", category: "Services" },
  { title: "Water Sports", description: "Jet ski, banana boat, parasailing and water activities", href: "/facilities", category: "Services" },
  { title: "Contact", description: "Phone, email, address, reservation, directions to hotel", href: "/contact", category: "Info" },
  { title: "Location", description: "Bodrum Torba, directions, airport transfer, map", href: "/contact", category: "Info" },
  { title: "Factsheet", description: "Complete hotel factsheet with all details and specifications", href: "/factsheet", category: "Info" },
  { title: "Home", description: "Blue Dreams Resort & Spa homepage, overview", href: "/", category: "General" },
  { title: "Online Reservation", description: "Book your stay, check availability, rates and packages", href: "https://blue-dreams.rezervasyonal.com/en/", category: "Booking" },
];

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
