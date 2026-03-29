import { Link } from "react-router-dom";
import roomHero from "@/assets/rooms-hero.jpg";
import roomClub from "@/assets/room-club.jpg";
import roomClubSeaview from "@/assets/room-club-seaview.jpg";
import roomFamily from "@/assets/room-family.jpg";
import roomDeluxe from "@/assets/room-deluxe-new.jpg";
import roomDeluxeFamily from "@/assets/room-deluxe-family.jpg";
import { ChevronRight, Lock, Wind, Tv, Bath, Wifi, Snowflake, Waves, Infinity, Coffee, Wine, Droplets, Footprints, CloudRain, Sparkles, Thermometer, Landmark, Gem, Hand, TreePalm, Volleyball, Target, Ship, Users, Music, Car, UtensilsCrossed, Bike, ConciergeBell, Shirt, Utensils, DoorOpen, Armchair, Flower2, Camera, ShoppingBag, Scissors, Flag, Hotel, CreditCard, Plane, Anchor, Clock, Umbrella, Sun, Heart, Gamepad2, GlassWater, Shield, Store, Home, Baby, Zap, MonitorPlay, AlarmClock, BedDouble, Soup, type LucideIcon } from "lucide-react";
import { useLanguage } from "@/i18n/LanguageContext";

const images = [roomClub, roomClubSeaview, roomFamily, roomDeluxe, roomDeluxeFamily];
const seaViewIndices = [1, 3, 4]; // Club Sea View, Deluxe Sea View, Deluxe Family
const infinityPoolIndices = [3, 4]; // Deluxe rooms

const facilityIcons: LucideIcon[] = [
  CloudRain,    // Steam Room
  Sparkles,     // Spa & Wellness Center
  Thermometer,  // Sauna
  Landmark,     // Türk Hamamı
  Gem,          // Salt Room
  Hand,         // Massage
  TreePalm,     // Outdoor Pool
  Waves,        // Swimming Pool
  Volleyball,   // Table Tennis
  Target,       // Dart
  Ship,         // Water Sports
  Ship,         // Boat Tour
  Users,        // Entertainment Staff
  Music,        // Live Music
  Car,          // Parking Lot
  UtensilsCrossed, // Beach Bar
  Waves,        // Waterslide
];

const serviceIcons: LucideIcon[] = [
  Shirt,          // Laundry
  Bike,           // Bicycle Rental
  ConciergeBell,  // Concierge Service
  Shirt,          // Ironing Service
  Utensils,       // Restaurant (à la carte)
  DoorOpen,       // Changing Room
  Armchair,       // Pool Sun Loungers
  Flower2,        // Beach Towel
  Camera,         // Photographer
  ShoppingBag,    // Grocery
  Scissors,       // Coiffeur
  Flag,           // Blue Flag
  Hotel,          // Hostel Services
  Armchair,       // Beach Lounger
  GlassWater,     // Cocktail Lounge
  Heart,          // Doctor
  Gamepad2,       // Mini Club
  Coffee,         // Capless Drinks All Day Long
  CreditCard,     // Credit Card Facilities
  Sparkles,       // Dry Cleaning
  Car,            // Rental Car
  Umbrella,       // Private Beach Area
  Store,          // Souvenirs / Gift Shop
  Wine,           // Bar
  ShoppingBag,    // Luggage Storage
  Plane,          // Airport Shuttle
  Anchor,         // Seaport
  Clock,          // 24-Hour Reception
  Umbrella,       // Beach and Pool Umbrellas
  Waves,          // Water Slide
  Sun,            // Sunbed
  Heart,          // Skin and Body Care
  Car,            // Car Park
  Waves,          // Aquapark
  GlassWater,     // Lobby Bar
  Coffee,         // Snacks
  Shield,         // Lifeguard
  Users,          // Animation Team
  Sparkles,       // Beauty Shop
  Utensils,       // Buffet Breakfast
  Store,          // Shops in Hotel
  Home,           // Family Rooms
  Utensils,       // Restaurant
  Lock,           // Safety Deposit Box
  Waves,          // Seashore
  Wine,           // Mini Bar
  Baby,           // Suitable for Children
  Waves,          // Children's Swimming Pool
  Wind,           // Hairdryer
  Zap,            // Jet Ski
  MonitorPlay,    // Shared Lounge / TV Area
  AlarmClock,     // Wake-up Service
  Baby,           // Baby Chair
  BedDouble,      // Baby Bed
  Soup,           // Night Soup
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

      {/* Facilities & Activities */}
      <section className="py-20 md:py-28 bg-background border-t border-border">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-12">
            <p className="font-body text-xs font-semibold tracking-[0.3em] uppercase text-accent mb-4">{r.facilitiesLabel}</p>
            <div className="w-16 h-[2px] mx-auto" style={{ background: 'linear-gradient(90deg, hsl(var(--gold)), transparent)' }} />
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
            {r.facilities.map((f) => {
              const Icon = facilityIcons[r.facilities.indexOf(f)] ?? Waves;
              return (
                <div key={f.name} className="flex flex-col items-center gap-2 p-4 rounded-xl border border-border bg-card hover:shadow-sm transition-shadow text-center">
                  <Icon className="w-5 h-5 text-accent" />
                  <span className="font-body text-xs text-foreground leading-tight">{f.name}{f.paid ? " *" : ""}</span>
                </div>
              );
            })}
          </div>
          <p className="font-body text-[10px] text-muted-foreground text-center mt-6 tracking-wider">* Extra charge</p>
        </div>
      </section>

      {/* Services */}
      <section className="py-20 md:py-28 bg-card border-t border-border">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-12">
            <p className="font-body text-xs font-semibold tracking-[0.3em] uppercase text-accent mb-4">{r.servicesLabel}</p>
            <div className="w-16 h-[2px] mx-auto" style={{ background: 'linear-gradient(90deg, hsl(var(--gold)), transparent)' }} />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-3">
            {r.services.map((service, i) => {
              const Icon = serviceIcons[i] ?? Sparkles;
              return (
                <div key={service} className="flex items-center gap-3 py-2">
                  <Icon className="w-4 h-4 text-accent flex-shrink-0" />
                  <span className="font-body text-sm text-foreground">{service}</span>
                </div>
              );
            })}
          </div>
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
