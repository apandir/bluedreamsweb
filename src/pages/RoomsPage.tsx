import { Link } from "react-router-dom";
import roomHero from "@/assets/rooms-hero.jpg";
import roomClub from "@/assets/room-club.jpg";
import roomClubSeaview from "@/assets/room-club-seaview.jpg";
import roomFamily from "@/assets/room-family.jpg";
import roomDeluxe from "@/assets/room-deluxe-new.jpg";
import roomDeluxeFamily from "@/assets/room-deluxe-family.jpg";
import { ChevronRight, Lock, Wind, Tv, Bath, Wifi, Snowflake, Waves, Infinity, Coffee, Wine, Droplets, Footprints, CloudRain, Sparkles, Thermometer, Landmark, Gem, Hand, TreePalm, Volleyball, Target, Ship, Users, Music, Car, UtensilsCrossed, Bike, ConciergeBell, Shirt, Utensils, DoorOpen, Armchair, Flower2, Camera, ShoppingBag, Scissors, Flag, Hotel, CreditCard, Plane, Anchor, Clock, Umbrella, Sun, Heart, Gamepad2, GlassWater, Shield, Store, Home, Baby, Zap, MonitorPlay, AlarmClock, BedDouble, Soup, Ban, Building2, BellRing, Sailboat, Mic2, ParkingCircle, Grape, CircleDot, Stethoscope, Briefcase, SquareParking, Luggage, Timer, SunMedium, Palmtree, Dumbbell, Gift, CookingPot, Martini, Cherry, Siren, PartyPopper, Glasses, Egg, ShoppingCart, CupSoda, ShieldCheck, PersonStanding, type LucideIcon } from "lucide-react";
import { useLanguage } from "@/i18n/LanguageContext";

const images = [roomClub, roomClubSeaview, roomFamily, roomDeluxe, roomDeluxeFamily];
const seaViewIndices = [1, 3, 4]; // Club Sea View, Deluxe Sea View, Deluxe Family
const infinityPoolIndices = [3, 4]; // Deluxe rooms

const facilityIcons: LucideIcon[] = [
  CloudRain,        // Steam Room
  Sparkles,         // Spa & Wellness Center
  Thermometer,      // Sauna
  Landmark,         // Türk Hamamı
  Gem,              // Salt Room
  Hand,             // Massage
  TreePalm,         // Outdoor Pool
  Waves,            // Swimming Pool
  Volleyball,       // Table Tennis
  Target,           // Dart
  Ship,             // Water Sports
  Sailboat,         // Boat Tour
  Users,            // Entertainment Staff
  Mic2,             // Live Music
  ParkingCircle,    // Parking Lot
  Grape,            // Beach Bar
  CircleDot,        // Waterslide
];

const serviceIcons: LucideIcon[] = [
  Shirt,            // 0  Laundry
  Bike,             // 1  Bicycle Rental
  ConciergeBell,    // 2  Concierge Service
  Armchair,         // 3  Ironing Service
  UtensilsCrossed,  // 4  Restaurant (à la carte)
  DoorOpen,         // 5  Changing Room
  Flower2,          // 6  Beach Towel
  Camera,           // 7  Photographer
  ShoppingBag,      // 8  Grocery
  Scissors,         // 9  Coiffeur
  Flag,             // 10 Blue Flag
  Hotel,            // 11 Hostel Services
  Stethoscope,      // 12 Doctor
  Gamepad2,         // 13 Mini Club
  Coffee,           // 14 Capless Drinks All Day Long
  CreditCard,       // 15 Credit Card Facilities
  Briefcase,        // 16 Dry Cleaning
  Car,              // 17 Rental Car
  Umbrella,         // 18 Private Beach Area
  Gift,             // 19 Souvenirs / Gift Shop
  Wine,             // 20 Bar
  Luggage,          // 21 Luggage Storage
  Plane,            // 22 Airport Shuttle
  Anchor,           // 23 Seaport
  Clock,            // 24 24-Hour Reception
  SunMedium,        // 25 Beach and Pool Umbrellas
  Sun,              // 26 Sunbed
  Heart,            // 27 Skin and Body Care
  SquareParking,    // 28 Car Park
  Palmtree,         // 29 Aquapark
  GlassWater,       // 30 Lobby Bar
  CupSoda,          // 31 Snacks
  ShieldCheck,      // 32 Lifeguard
  PartyPopper,      // 33 Animation Team
  Egg,              // 34 Buffet Breakfast
  ShoppingCart,     // 35 Shops in Hotel
  Home,             // 36 Family Rooms
  Utensils,         // 37 Restaurant
  Lock,             // 38 Safety Deposit Box
  Glasses,          // 39 Seashore
  Martini,          // 40 Mini Bar
  PersonStanding,   // 41 Suitable for Children
  Droplets,         // 42 Children's Swimming Pool
  Wind,             // 43 Hairdryer
  Zap,              // 44 Jet Ski
  MonitorPlay,      // 45 Shared Lounge / TV Area
  AlarmClock,       // 46 Wake-up Service
  Baby,             // 47 Baby Chair
  BedDouble,        // 48 Baby Bed
  Soup,             // 49 Night Soup
  Wifi,             // 50 Wi-Fi Internet Connection
  Timer,            // 51 Express Check-In/Check-Out
  Ban,              // 52 Non Smoking Rooms
  Building2,        // 53 Lift / Elevator
  BellRing,         // 54 Smoke Alarm
  Music,            // 55 Disco (Summer)
  Siren,            // 56 Beachfront — using Waves alternative
  Tv,               // 57 Satellite Channels
];

const RoomsPage = () => {
  const { t } = useLanguage();
  const r = t.website.roomsPage;

  return (
    <main>
      {/* Hero */}
      <section className="relative h-[60vh] min-h-[400px] flex items-center justify-center overflow-hidden">
        <img src={roomHero} alt={r.title} className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-ocean-deep/60" />
        <div className="relative z-10 text-center px-6">
          <h1 className="font-display text-5xl md:text-6xl lg:text-7xl text-primary-foreground mb-4 text-shadow-hero">{r.title}</h1>
          <p className="font-body text-lg text-primary-foreground/70 text-shadow-sm">{r.subtitle}</p>
          <div className="flex items-center justify-center gap-2 mt-6 font-body text-sm text-primary-foreground/50">
            <Link to="/" className="hover:text-primary-foreground transition-colors">{r.home}</Link>
            <ChevronRight className="w-3 h-3" />
            <span className="text-primary-foreground">{r.rooms}</span>
          </div>
        </div>
      </section>

      {/* Intro */}
      <section className="py-24 md:py-32 bg-background">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10 text-center">
          <p className="font-body text-xs font-semibold tracking-[0.3em] uppercase text-accent mb-4">{t.rooms.accommodation}</p>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl text-foreground mb-6">{t.rooms.heading}</h2>
          <div className="w-16 h-[2px] mx-auto mb-6" style={{ background: 'linear-gradient(90deg, hsl(var(--gold)), transparent)' }} />
          <p className="font-body text-base text-muted-foreground max-w-2xl mx-auto">{t.rooms.desc}</p>
        </div>
      </section>

      {/* Room Cards — mirrors factsheet */}
      <section className="pb-24 md:pb-32 bg-background">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-8">
            {t.rooms.roomList.map((room, i) => (
              <div key={room.name} className="group rounded-2xl overflow-hidden border border-border bg-card shadow-sm hover:shadow-md transition-shadow">
                <div className="overflow-hidden">
                  <img
                    src={images[i]}
                    alt={room.name}
                    className="w-full h-56 object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="font-display text-xl text-foreground">{room.name}</h3>
                    <span className="font-body text-[10px] tracking-[0.12em] uppercase text-accent font-semibold bg-muted px-3 py-1.5 rounded-full">
                      {room.size}
                    </span>
                  </div>
                  <div className="w-10 h-[1.5px] mb-3" style={{ background: 'linear-gradient(90deg, hsl(var(--gold)), transparent)' }} />
                  <p className="font-body text-sm leading-relaxed text-muted-foreground mb-4">{room.description}</p>
                  <div className="grid grid-cols-3 gap-2 pt-3 border-t border-border">
                    {[
                      { icon: Lock, label: t.rooms.amenities.safebox },
                      { icon: Wind, label: t.rooms.amenities.hairDryer },
                      { icon: Tv, label: t.rooms.amenities.ledTv },
                      { icon: Bath, label: t.rooms.amenities.privateBathroom },
                      { icon: Wifi, label: t.rooms.amenities.wifi },
                      { icon: Snowflake, label: t.rooms.amenities.ac },
                      { icon: Coffee, label: t.rooms.amenities.coffeeTea },
                      { icon: Wine, label: t.rooms.amenities.minibar },
                      { icon: Droplets, label: t.rooms.amenities.bathroomKit },
                      { icon: Footprints, label: t.rooms.amenities.slippers },
                      ...(seaViewIndices.includes(i) ? [{ icon: Waves, label: t.rooms.amenities.seaView }] : []),
                      ...(infinityPoolIndices.includes(i) ? [{ icon: Infinity, label: t.rooms.amenities.infinityPoolView }] : []),
                    ].map(({ icon: Icon, label }) => (
                      <div key={label} className="flex items-center gap-1.5">
                        <Icon className="w-3.5 h-3.5 text-accent flex-shrink-0" />
                        <span className="font-body text-[10px] text-muted-foreground tracking-wide">{label}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
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

      {/* CTA */}
      <section className="py-20 section-cream text-center">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
          <h2 className="font-display text-3xl md:text-4xl text-foreground mb-4">{r.findDreamRoom}</h2>
          <p className="font-body text-base text-muted-foreground mb-8">{r.bestPrice}</p>
          <a
            href="https://blue-dreams.rezervasyonal.com/en/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block font-body text-sm font-semibold tracking-wider uppercase bg-accent hover:bg-accent/90 text-accent-foreground px-10 py-4 rounded-full transition-colors"
          >
            {r.bookNow}
          </a>
        </div>
      </section>
    </main>
  );
};

export default RoomsPage;
