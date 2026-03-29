import { Link } from "react-router-dom";
import roomHero from "@/assets/rooms-hero.jpg";
import { ChevronRight, Waves, Sparkles, Home, Wine, Music, UtensilsCrossed, CloudRain, Thermometer, Landmark, Gem, Hand, TreePalm, Volleyball, Target, Ship, Sailboat, Users, Mic2, ParkingCircle, Grape, CircleDot, Shirt, Bike, ConciergeBell, Armchair, DoorOpen, Flower2, Camera, ShoppingBag, Scissors, Flag, Hotel, Stethoscope, Gamepad2, Coffee, CreditCard, Briefcase, Car, Umbrella, Gift, Luggage, Plane, Anchor, Clock, SunMedium, Sun, Heart, SquareParking, Palmtree, GlassWater, CupSoda, ShieldCheck, PartyPopper, Egg, ShoppingCart, Utensils, Lock, Glasses, Martini, PersonStanding, Droplets, Wind, Zap, MonitorPlay, AlarmClock, Baby, BedDouble, Soup, Wifi, Timer, Ban, Building2, BellRing, Siren, Tv, type LucideIcon } from "lucide-react";
import { useLanguage } from "@/i18n/LanguageContext";

const facilityIcons: LucideIcon[] = [
  CloudRain, Sparkles, Thermometer, Landmark, Gem, Hand, TreePalm, Waves, Volleyball, Target, Ship, Sailboat, Users, Mic2, ParkingCircle, Grape, CircleDot,
];

const serviceIcons: LucideIcon[] = [
  Shirt, Bike, ConciergeBell, Armchair, UtensilsCrossed, DoorOpen, Flower2, Camera, ShoppingBag, Scissors, Flag, Hotel, Stethoscope, Gamepad2, Coffee, CreditCard, Briefcase, Car, Umbrella, Gift, Wine, Luggage, Plane, Anchor, Clock, SunMedium, Sun, Heart, SquareParking, Palmtree, GlassWater, CupSoda, ShieldCheck, PartyPopper, Egg, ShoppingCart, Home, Utensils, Lock, Glasses, Martini, PersonStanding, Droplets, Wind, Zap, MonitorPlay, AlarmClock, Baby, BedDouble, Soup, Wifi, Timer, Ban, Building2, BellRing, Music, Siren, Tv,
];

const FacilitiesPage = () => {
  const { t } = useLanguage();
  const r = t.website.roomsPage;

  return (
    <main>
      {/* Hero */}
      <section className="relative h-[60vh] min-h-[400px] flex items-center justify-center overflow-hidden">
        <img src={roomHero} alt={r.facilitiesLabel} className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-ocean-deep/60" />
        <div className="relative z-10 text-center px-6">
          <h1 className="font-display text-5xl md:text-6xl lg:text-7xl text-primary-foreground mb-4 text-shadow-hero">{r.facilitiesLabel}</h1>
          <p className="font-body text-lg text-primary-foreground/70 text-shadow-sm">{r.subtitle}</p>
          <div className="flex items-center justify-center gap-2 mt-6 font-body text-sm text-primary-foreground/50">
            <Link to="/" className="hover:text-primary-foreground transition-colors">{r.home}</Link>
            <ChevronRight className="w-3 h-3" />
            <span className="text-primary-foreground">{r.facilitiesLabel}</span>
          </div>
        </div>
      </section>

      {/* Hotel Facilities & Services */}
      <section className="py-20 md:py-28 bg-card border-t border-border">
        <div className="max-w-6xl mx-auto px-6">
          {/* Header */}
          <div className="text-center mb-10">
            <p className="font-body text-xs font-semibold tracking-[0.3em] uppercase text-accent mb-3">{r.facilitiesLabel}</p>
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl text-foreground mb-4">{r.facilitiesLabel}</h2>
            <div className="w-20 h-[2px] mx-auto" style={{ background: 'linear-gradient(90deg, hsl(var(--gold)), transparent)' }} />
          </div>

          {(() => {
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

            return (
              <>
                {/* Quick Nav Pills */}
                <div className="flex flex-wrap justify-center gap-2 mb-12">
                  {groups.map((group) => {
                    const NavIcon = group.icon;
                    return (
                      <button
                        key={group.id}
                        onClick={() => document.getElementById(`facility-${group.id}`)?.scrollIntoView({ behavior: 'smooth', block: 'start' })}
                        className="group/pill flex items-center gap-2 px-4 py-2.5 rounded-full border border-border bg-background hover:bg-accent hover:text-accent-foreground hover:border-accent transition-all duration-300 shadow-sm hover:shadow-md"
                      >
                        <NavIcon className="w-4 h-4 text-accent group-hover/pill:text-accent-foreground transition-colors" />
                        <span className="font-body text-xs font-semibold tracking-wide uppercase">{group.label}</span>
                        <span className="font-body text-[10px] text-muted-foreground group-hover/pill:text-accent-foreground/70 transition-colors">({group.items.length})</span>
                      </button>
                    );
                  })}
                </div>

                {/* Groups */}
                {groups.map((group) => {
                  const GroupIcon = group.icon;
                  return (
                    <div key={group.id} id={`facility-${group.id}`} className="mb-12 last:mb-0 scroll-mt-24">
                      <div className="flex items-center gap-3 mb-5 pb-3 border-b border-border">
                        <div className="w-9 h-9 rounded-lg bg-accent/10 flex items-center justify-center flex-shrink-0">
                          <GroupIcon className="w-4.5 h-4.5 text-accent" />
                        </div>
                        <h3 className="font-display text-xl text-foreground">{group.label}</h3>
                        <span className="font-body text-[10px] text-muted-foreground tracking-wider bg-muted px-2.5 py-1 rounded-full">{group.items.length}</span>
                      </div>
                      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-1">
                        {group.items.map((item, idx) => {
                          const Icon = item.icon;
                          return (
                            <div key={`${group.id}-${idx}`} className="flex items-center gap-3 py-2.5 px-3 rounded-lg hover:bg-muted/50 transition-colors">
                              <div className="w-7 h-7 rounded-md bg-accent/8 flex items-center justify-center flex-shrink-0">
                                <Icon className="w-3.5 h-3.5 text-accent" />
                              </div>
                              <span className={`font-body text-sm ${item.paid ? 'text-muted-foreground' : 'text-foreground'}`}>
                                {item.name}{item.paid ? " *" : ""}
                              </span>
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  );
                })}
              </>
            );
          })()}

          <p className="font-body text-[10px] text-muted-foreground text-center mt-8 tracking-wider">* Extra charge</p>
        </div>
      </section>
    </main>
  );
};

export default FacilitiesPage;
