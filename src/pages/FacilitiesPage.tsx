import { useState } from "react";
import { Link } from "react-router-dom";
import heroImg from "@/assets/hero-resort.jpg";
import spaImg from "@/assets/spa-resort.jpg";
import poolImg from "@/assets/pool-infinity.jpg";
import diningImg from "@/assets/dining-main.jpg";
import barImg from "@/assets/bar-beach.jpg";
import activitiesImg from "@/assets/activities-hero.jpg";
import beachImg from "@/assets/beach-overview.jpg";
import { ChevronRight, Waves, Sparkles, Home, Wine, Music, UtensilsCrossed, CloudRain, Thermometer, Landmark, Gem, Hand, TreePalm, Volleyball, Target, Ship, Sailboat, Users, Mic2, ParkingCircle, Grape, CircleDot, Shirt, Bike, ConciergeBell, Armchair, DoorOpen, Flower2, Camera, ShoppingBag, Scissors, Flag, Hotel, Stethoscope, Gamepad2, Coffee, CreditCard, Briefcase, Car, Umbrella, Gift, Luggage, Plane, Anchor, Clock, SunMedium, Sun, Heart, SquareParking, Palmtree, GlassWater, CupSoda, ShieldCheck, PartyPopper, Egg, ShoppingCart, Utensils, Lock, Glasses, Martini, PersonStanding, Droplets, Wind, Zap, MonitorPlay, AlarmClock, Baby, BedDouble, Soup, Wifi, Timer, Ban, Building2, BellRing, Siren, Tv, type LucideIcon } from "lucide-react";
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

const FacilitiesPage = () => {
  const { t } = useLanguage();
  const r = t.website.roomsPage;
  const [activeGroup, setActiveGroup] = useState<string | null>(null);

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

  const scrollToGroup = (id: string) => {
    setActiveGroup(id);
    document.getElementById(`facility-${id}`)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <main>
      {/* Hero */}
      <section className="relative h-[55vh] min-h-[380px] flex items-center justify-center overflow-hidden">
        <img src={heroImg} alt={r.facilitiesLabel} className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-b from-ocean-deep/70 via-ocean-deep/50 to-ocean-deep/80" />
        <div className="relative z-10 text-center px-6">
          <p className="font-body text-xs font-semibold tracking-[0.35em] uppercase text-primary-foreground/60 mb-4 text-shadow-sm">Blue Dreams Resort & Spa</p>
          <h1 className="font-display text-5xl md:text-6xl lg:text-7xl text-primary-foreground mb-4 text-shadow-hero">{r.facilitiesLabel}</h1>
          <div className="w-16 h-[2px] mx-auto mt-6" style={{ background: 'linear-gradient(90deg, transparent, hsl(var(--gold)), transparent)' }} />
          <div className="flex items-center justify-center gap-2 mt-6 font-body text-sm text-primary-foreground/50">
            <Link to="/" className="hover:text-primary-foreground transition-colors">{r.home}</Link>
            <ChevronRight className="w-3 h-3" />
            <span className="text-primary-foreground">{r.facilitiesLabel}</span>
          </div>
        </div>
      </section>

      {/* Sticky Quick Nav */}
      <div className="sticky top-[88px] z-30 bg-background/95 backdrop-blur-md border-b border-border">
        <div className="max-w-6xl mx-auto px-6 py-3 flex flex-wrap items-center justify-center gap-2">
          {groups.map((group) => {
            const NavIcon = group.icon;
            return (
              <button
                key={group.id}
                onClick={() => scrollToGroup(group.id)}
                className={`flex items-center gap-2 px-4 py-2 rounded-full text-xs font-body font-semibold tracking-wide uppercase transition-all duration-300 ${
                  activeGroup === group.id
                    ? "bg-accent text-accent-foreground shadow-md"
                    : "bg-muted/60 text-muted-foreground hover:bg-accent/10 hover:text-accent"
                }`}
              >
                <NavIcon className="w-3.5 h-3.5" />
                <span className="hidden sm:inline">{group.label}</span>
                <span className="sm:hidden">{group.label.split(' ')[0]}</span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Category Sections */}
      <div className="bg-background">
        {groups.map((group, groupIdx) => {
          const GroupIcon = group.icon;
          const image = categoryImages[group.id];
          const isEven = groupIdx % 2 === 0;

          return (
            <section
              key={group.id}
              id={`facility-${group.id}`}
              className={`scroll-mt-36 ${groupIdx % 2 === 0 ? 'bg-background' : 'bg-muted/30'}`}
            >
              <div className="max-w-[1400px] mx-auto">
                <div className={`flex flex-col ${isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'} min-h-[400px]`}>
                  {/* Image Side */}
                  <div className="lg:w-[45%] relative overflow-hidden">
                    <img
                      src={image}
                      alt={group.label}
                      className="w-full h-64 lg:h-full object-cover"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent lg:bg-gradient-to-r lg:from-transparent lg:via-transparent lg:to-black/10" />
                    <div className="absolute bottom-6 left-6 lg:bottom-8 lg:left-8">
                      <div className="flex items-center gap-3">
                        <div className="w-11 h-11 rounded-xl bg-white/20 backdrop-blur-sm flex items-center justify-center">
                          <GroupIcon className="w-5 h-5 text-white" />
                        </div>
                        <div>
                          <h2 className="font-display text-2xl lg:text-3xl text-white text-shadow-hero">{group.label}</h2>
                          <p className="font-body text-xs text-white/70 tracking-wider mt-0.5">{group.items.length} services</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Services Side */}
                  <div className="lg:w-[55%] px-6 lg:px-12 py-10 lg:py-14 flex flex-col justify-center">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-0.5">
                      {group.items.map((item, idx) => {
                        const Icon = item.icon;
                        return (
                          <div
                            key={`${group.id}-${idx}`}
                            className="flex items-center gap-3 py-2.5 px-3 rounded-lg hover:bg-accent/5 transition-colors group/item"
                          >
                            <div className="w-8 h-8 rounded-lg bg-accent/10 group-hover/item:bg-accent/20 flex items-center justify-center flex-shrink-0 transition-colors">
                              <Icon className="w-4 h-4 text-accent" />
                            </div>
                            <span className={`font-body text-sm leading-tight ${item.paid ? 'text-muted-foreground italic' : 'text-foreground'}`}>
                              {item.name}{item.paid ? " *" : ""}
                            </span>
                          </div>
                        );
                      })}
                    </div>
                    {group.items.some(i => i.paid) && (
                      <p className="font-body text-[10px] text-muted-foreground mt-6 tracking-wider pl-3">* Extra charge</p>
                    )}
                  </div>
                </div>
              </div>
            </section>
          );
        })}
      </div>
    </main>
  );
};

export default FacilitiesPage;
