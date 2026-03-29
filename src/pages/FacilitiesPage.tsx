import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import heroImg from "@/assets/hero-resort.jpg";
import spaImg from "@/assets/spa-resort.jpg";
import poolImg from "@/assets/pool-infinity.jpg";
import diningImg from "@/assets/dining-main.jpg";
import barImg from "@/assets/bar-beach.jpg";
import activitiesImg from "@/assets/activities-hero.jpg";
import beachImg from "@/assets/beach-overview.jpg";
import { ChevronRight, ChevronDown, Waves, Sparkles, Home, Wine, Music, UtensilsCrossed, CloudRain, Thermometer, Landmark, Gem, Hand, TreePalm, Volleyball, Target, Ship, Sailboat, Users, Mic2, ParkingCircle, Grape, CircleDot, Shirt, Bike, ConciergeBell, Armchair, DoorOpen, Flower2, Camera, ShoppingBag, Scissors, Flag, Hotel, Stethoscope, Gamepad2, Coffee, CreditCard, Briefcase, Car, Umbrella, Gift, Luggage, Plane, Anchor, Clock, SunMedium, Sun, Heart, SquareParking, Palmtree, GlassWater, CupSoda, ShieldCheck, PartyPopper, Egg, ShoppingCart, Utensils, Lock, Glasses, Martini, PersonStanding, Droplets, Wind, Zap, MonitorPlay, AlarmClock, Baby, BedDouble, Soup, Wifi, Timer, Ban, Building2, BellRing, Siren, Tv, Check, type LucideIcon } from "lucide-react";
import { useLanguage } from "@/i18n/LanguageContext";

const facilityIcons: LucideIcon[] = [
  CloudRain, Sparkles, Thermometer, Landmark, Gem, Hand, TreePalm, Waves, Volleyball, Target, Ship, Sailboat, Users, Mic2, ParkingCircle, Grape, CircleDot,
];

const serviceIcons: LucideIcon[] = [
  Shirt, Bike, ConciergeBell, Armchair, UtensilsCrossed, DoorOpen, Flower2, Camera, ShoppingBag, Scissors, Flag, Hotel, Stethoscope, Gamepad2, Coffee, CreditCard, Briefcase, Car, Umbrella, Gift, Wine, Luggage, Plane, Anchor, Clock, SunMedium, Sun, Heart, SquareParking, Palmtree, GlassWater, CupSoda, ShieldCheck, PartyPopper, Egg, ShoppingCart, Home, Utensils, Lock, Glasses, Martini, PersonStanding, Droplets, Wind, Zap, MonitorPlay, AlarmClock, Baby, BedDouble, Soup, Wifi, Timer, Ban, Building2, BellRing, Music, Siren, Tv,
];

const categoryImages: Record<string, string> = {
  general: beachImg,
  spa: spaImg,
  water: poolImg,
  dining: diningImg,
  bars: barImg,
  entertainment: activitiesImg,
};

// Intersection Observer hook for scroll animations
const useInView = (threshold = 0.15) => {
  const ref = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) { setInView(true); obs.disconnect(); } }, { threshold });
    obs.observe(el);
    return () => obs.disconnect();
  }, [threshold]);
  return { ref, inView };
};

const FacilitiesPage = () => {
  const { t } = useLanguage();
  const r = t.website.roomsPage;
  const [activeGroup, setActiveGroup] = useState<string>('general');
  const [expandedGroup, setExpandedGroup] = useState<string | null>(null);
  const heroRef = useInView(0.3);
  const overviewRef = useInView(0.1);

  const allItems = [
    ...r.facilities.map((f, i) => ({ ...f, icon: facilityIcons[i] ?? Waves })),
    ...r.services.map((s, i) => ({ ...s, icon: serviceIcons[i] ?? Sparkles })),
  ];

  const spaKeys = new Set([0, 1, 2, 3, 4, 5, 17 + 27]);
  const waterKeys = new Set([6, 7, 16, 17 + 6, 17 + 10, 17 + 18, 17 + 25, 17 + 26, 17 + 29, 17 + 32, 17 + 39, 17 + 42, 17 + 44, 17 + 56]);
  const diningKeys = new Set([17 + 4, 17 + 14, 17 + 31, 17 + 34, 17 + 37, 17 + 49]);
  const barKeys = new Set([15, 17 + 20, 17 + 30, 17 + 40]);
  const entertainmentKeys = new Set([8, 9, 10, 11, 12, 13, 17 + 1, 17 + 13, 17 + 33, 17 + 55]);

  type GroupedItem = { name: string; paid: boolean; icon: LucideIcon };
  const groupDefs = [
    { id: 'general', label: r.categoryLabels.generalServices, icon: Home },
    { id: 'spa', label: r.categoryLabels.spaWellness, icon: Sparkles },
    { id: 'water', label: r.categoryLabels.waterActivities, icon: Waves },
    { id: 'dining', label: r.categoryLabels.dining, icon: UtensilsCrossed },
    { id: 'bars', label: r.categoryLabels.bars, icon: Wine },
    { id: 'entertainment', label: r.categoryLabels.entertainment, icon: Music },
  ];
  const groups: { id: string; label: string; icon: LucideIcon; items: GroupedItem[] }[] = groupDefs.map(g => ({ ...g, items: [] }));

  allItems.forEach((item, i) => {
    if (spaKeys.has(i)) groups[1].items.push(item);
    else if (waterKeys.has(i)) groups[2].items.push(item);
    else if (diningKeys.has(i)) groups[3].items.push(item);
    else if (barKeys.has(i)) groups[4].items.push(item);
    else if (entertainmentKeys.has(i)) groups[5].items.push(item);
    else groups[0].items.push(item);
  });

  groups.forEach(g => g.items.sort((a, b) => Number(a.paid) - Number(b.paid)));

  const totalServices = groups.reduce((sum, g) => sum + g.items.length, 0);

  const scrollToGroup = (id: string) => {
    setActiveGroup(id);
    setExpandedGroup(id);
    document.getElementById(`facility-${id}`)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  // Track active section on scroll
  useEffect(() => {
    const handleScroll = () => {
      for (const group of groups) {
        const el = document.getElementById(`facility-${group.id}`);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 200 && rect.bottom > 200) {
            setActiveGroup(group.id);
            break;
          }
        }
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <main className="overflow-hidden">
      {/* Hero — Parallax-style */}
      <section className="relative h-[65vh] min-h-[450px] flex items-center justify-center overflow-hidden">
        <img src={heroImg} alt={r.facilitiesLabel} className="absolute inset-0 w-full h-full object-cover scale-105" />
        <div className="absolute inset-0 bg-gradient-to-b from-ocean-deep/50 via-ocean-deep/40 to-ocean-deep/90" />
        
        <div
          ref={heroRef.ref}
          className={`relative z-10 text-center px-6 transition-all duration-1000 ${heroRef.inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
        >
          <p className="font-body text-[11px] font-semibold tracking-[0.4em] uppercase text-primary-foreground/50 mb-5">Blue Dreams Resort & Spa</p>
          <h1 className="font-display text-5xl md:text-6xl lg:text-7xl text-primary-foreground mb-6 text-shadow-hero">{r.facilitiesLabel}</h1>
          <div className="w-20 h-[1px] mx-auto" style={{ background: 'linear-gradient(90deg, transparent, hsl(var(--gold)), transparent)' }} />
          
          {/* Stats Row */}
          <div className="flex items-center justify-center gap-10 md:gap-16 mt-8">
            <div className="text-center">
              <p className="font-display text-6xl text-primary-foreground">{totalServices}+</p>
              <p className="font-body text-xl tracking-[0.2em] uppercase text-primary-foreground/50 mt-2">Services</p>
            </div>
            <div className="w-px h-12 bg-primary-foreground/20" />
            <div className="text-center">
              <p className="font-display text-6xl text-primary-foreground">{groups.length}</p>
              <p className="font-body text-xl tracking-[0.2em] uppercase text-primary-foreground/50 mt-2">Categories</p>
            </div>
            <div className="w-px h-12 bg-primary-foreground/20" />
            <div className="text-center">
              <p className="font-display text-6xl text-primary-foreground">24/7</p>
              <p className="font-body text-xl tracking-[0.2em] uppercase text-primary-foreground/50 mt-2">Available</p>
            </div>
          </div>

        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 animate-bounce">
          <ChevronDown className="w-5 h-5 text-primary-foreground/40" />
        </div>
      </section>

      {/* Category Overview Cards */}
      <section className="py-16 md:py-20 bg-background">
        <div
          ref={overviewRef.ref}
          className={`max-w-6xl mx-auto px-6 transition-all duration-700 ${overviewRef.inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}
        >
          <div className="text-center mb-12">
            <p className="font-body text-[10px] font-semibold tracking-[0.3em] uppercase text-accent mb-3">Explore</p>
            <h2 className="font-display text-2xl md:text-3xl text-foreground">Choose a Category</h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {groups.map((group, i) => {
              const GroupIcon = group.icon;
              const image = categoryImages[group.id];
              const isActive = activeGroup === group.id;
              return (
                <button
                  key={group.id}
                  onClick={() => scrollToGroup(group.id)}
                  className={`group relative overflow-hidden transition-all duration-500 ${
                    isActive ? 'shadow-xl scale-[1.03]' : 'hover:shadow-xl hover:scale-[1.03]'
                  }`}
                  style={{
                    animationDelay: `${i * 100}ms`,
                    clipPath: i % 3 === 0
                      ? 'polygon(0 0, 100% 0, 100% 85%, 0 100%)'
                      : i % 3 === 1
                      ? 'polygon(0 8%, 100% 0, 100% 100%, 0 92%)'
                      : 'polygon(0 0, 100% 15%, 100% 100%, 0 100%)',
                  }}
                >
                  <div className="aspect-[3/4]">
                    <img src={image} alt={group.label} className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                    <div className={`absolute inset-0 transition-all duration-500 ${
                      isActive
                        ? 'bg-gradient-to-t from-accent/90 via-accent/40 to-accent/10'
                        : 'bg-gradient-to-t from-black/80 via-black/30 to-black/5 group-hover:from-accent/70'
                    }`} />
                    <div className="absolute inset-0 flex flex-col items-center justify-end p-4 pb-8">
                      <div className={`w-12 h-12 rounded-full flex items-center justify-center mb-3 transition-all duration-500 border ${
                        isActive
                          ? 'bg-white/25 backdrop-blur-md border-white/40 scale-110'
                          : 'bg-white/10 backdrop-blur-sm border-white/20 group-hover:bg-white/20 group-hover:border-white/30 group-hover:scale-110'
                      }`}>
                        <GroupIcon className="w-5 h-5 text-white" />
                      </div>
                      <p className="font-body text-[11px] font-bold tracking-[0.15em] uppercase text-white text-center leading-tight drop-shadow-lg">{group.label}</p>
                    </div>
                  </div>
                  {isActive && (
                    <div className="absolute bottom-0 left-0 right-0 h-1 bg-accent" />
                  )}
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* Sticky Nav Bar */}
      <div className="sticky top-[88px] z-30 bg-background/80 backdrop-blur-xl border-y border-border/50">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex items-center gap-1 py-2 overflow-x-auto scrollbar-hide">
            {groups.map((group) => {
              const NavIcon = group.icon;
              const isActive = activeGroup === group.id;
              return (
                <button
                  key={group.id}
                  onClick={() => scrollToGroup(group.id)}
                  className={`relative flex items-center gap-1.5 px-3 py-2 rounded-lg text-[10px] font-body font-bold tracking-[0.1em] uppercase whitespace-nowrap transition-all duration-300 ${
                    isActive
                      ? "text-accent"
                      : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  <NavIcon className={`w-3.5 h-3.5 transition-colors ${isActive ? 'text-accent' : ''}`} />
                  <span className="hidden sm:inline">{group.label}</span>
                  {isActive && (
                    <span className="absolute bottom-0 left-3 right-3 h-[2px] bg-accent rounded-full" />
                  )}
                </button>
              );
            })}
          </div>
        </div>
      </div>

      {/* Detail Sections */}
      <div className="bg-background">
        {groups.map((group, groupIdx) => (
          <CategorySection
            key={group.id}
            group={group}
            groupIdx={groupIdx}
            image={categoryImages[group.id]}
            expandedGroup={expandedGroup}
            setExpandedGroup={setExpandedGroup}
          />
        ))}
      </div>

      {/* Bottom CTA */}
      <section className="relative py-20 overflow-hidden">
        <img src={heroImg} alt="" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-ocean-deep/85" />
        <div className="relative z-10 text-center px-6">
          <h2 className="font-display text-3xl md:text-4xl text-primary-foreground mb-4">Experience It All</h2>
          <p className="font-body text-sm text-primary-foreground/60 max-w-lg mx-auto mb-8">
            With {totalServices}+ facilities and services, your perfect getaway awaits.
          </p>
          <a
            href="https://blue-dreams.rezervasyonal.com/en/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block font-body text-xs font-bold tracking-[0.15em] uppercase bg-accent hover:bg-accent/90 text-accent-foreground px-10 py-4 rounded-full transition-all duration-300 hover:shadow-lg hover:shadow-accent/25"
          >
            Book Your Stay
          </a>
        </div>
      </section>
    </main>
  );
};

// Separated component for each category section with its own IntersectionObserver
const CategorySection = ({
  group,
  groupIdx,
  image,
  expandedGroup,
  setExpandedGroup,
}: {
  group: { id: string; label: string; icon: LucideIcon; items: { name: string; paid: boolean; icon: LucideIcon }[] };
  groupIdx: number;
  image: string;
  expandedGroup: string | null;
  setExpandedGroup: (id: string | null) => void;
}) => {
  const { ref, inView } = useInView(0.08);
  const isEven = groupIdx % 2 === 0;
  const GroupIcon = group.icon;
  const isExpanded = expandedGroup === group.id;

  // Show first 6 items when collapsed, all when expanded
  const visibleItems = isExpanded ? group.items : group.items.slice(0, 6);
  const hasMore = group.items.length > 6;

  return (
    <section
      id={`facility-${group.id}`}
      className={`scroll-mt-36 border-b border-border/50 last:border-b-0 ${groupIdx % 2 === 0 ? 'bg-background' : 'bg-muted/20'}`}
    >
      <div ref={ref} className="max-w-[1400px] mx-auto">
        <div className={`flex flex-col ${isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'}`}>
          {/* Image Side */}
          <div className={`lg:w-[42%] relative overflow-hidden transition-all duration-1000 ${inView ? 'opacity-100' : 'opacity-0'}`}>
            <div className="sticky top-36 h-72 lg:h-[500px]">
              <img
                src={image}
                alt={group.label}
                className="absolute inset-0 w-full h-full object-cover"
                loading="lazy"
              />
              <div className={`absolute inset-0 ${
                isEven
                  ? 'bg-gradient-to-r from-transparent via-transparent to-background/20 lg:to-background/40'
                  : 'bg-gradient-to-l from-transparent via-transparent to-background/20 lg:to-background/40'
              }`} />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-black/10" />
              
              {/* Category badge on image */}
              <div className="absolute top-6 left-6">
                <div className="flex items-center gap-2 bg-white/15 backdrop-blur-md rounded-full px-4 py-2">
                  <GroupIcon className="w-4 h-4 text-white" />
                  <span className="font-body text-[10px] font-bold tracking-[0.15em] uppercase text-white">{group.label}</span>
                </div>
              </div>

            </div>
          </div>

          {/* Services Side */}
          <div className={`lg:w-[58%] px-6 lg:px-14 py-10 lg:py-16 transition-all duration-700 delay-200 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
            {/* Section Header */}
            <div className="mb-8">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 rounded-xl bg-accent/10 flex items-center justify-center">
                  <GroupIcon className="w-5 h-5 text-accent" />
                </div>
                <div>
                  <h2 className="font-display text-2xl lg:text-3xl text-foreground">{group.label}</h2>
                </div>
              </div>
              <div className="w-12 h-[2px] ml-[52px]" style={{ background: 'linear-gradient(90deg, hsl(var(--gold)), transparent)' }} />
            </div>

            {/* Service Items */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-0">
              {visibleItems.map((item, idx) => {
                const Icon = item.icon;
                return (
                  <div
                    key={`${group.id}-${idx}`}
                    className="flex items-center gap-3 py-3 px-3 rounded-xl hover:bg-accent/5 transition-all duration-300 group/item"
                    style={{ animationDelay: `${idx * 30}ms` }}
                  >
                    <div className="w-9 h-9 rounded-xl bg-accent/8 group-hover/item:bg-accent/15 flex items-center justify-center flex-shrink-0 transition-all duration-300 group-hover/item:scale-110">
                      <Icon className="w-4 h-4 text-accent" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <span className={`font-body text-sm leading-tight block ${item.paid ? 'text-muted-foreground' : 'text-foreground'}`}>
                        {item.name}
                      </span>
                    </div>
                    {item.paid ? (
                      <span className="font-body text-[9px] tracking-wider uppercase text-muted-foreground bg-muted px-2 py-0.5 rounded-full flex-shrink-0">paid</span>
                    ) : (
                      <Check className="w-3.5 h-3.5 text-accent/40 flex-shrink-0" />
                    )}
                  </div>
                );
              })}
            </div>

            {/* Show More / Less */}
            {hasMore && (
              <button
                onClick={() => setExpandedGroup(isExpanded ? null : group.id)}
                className="mt-6 flex items-center gap-2 font-body text-xs font-bold tracking-[0.1em] uppercase text-accent hover:text-accent/80 transition-colors ml-3"
              >
                <span>{isExpanded ? 'Show less' : `Show all ${group.items.length} services`}</span>
                <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${isExpanded ? 'rotate-180' : ''}`} />
              </button>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FacilitiesPage;
