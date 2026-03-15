import { Link } from "react-router-dom";
import heroImg from "@/assets/dining-hero.jpg";
import buffetImg from "@/assets/dining-buffet.jpg";
import fishImg from "@/assets/dining-halikarnas.jpg";
import italianImg from "@/assets/dining-lalocanda.jpg";
import asianImg from "@/assets/dining-main.jpg";
import snackImg from "@/assets/dining-snack.jpg";
import lobbyBarImg from "@/assets/bar-lobby.jpg";
import poolBarImg from "@/assets/bar-pool.jpg";
import beachBarImg from "@/assets/bar-beach.jpg";
import vitaminBarImg from "@/assets/bar-vitamin.jpg";
import { ChevronRight, Clock, MapPin, Users } from "lucide-react";

const restaurants = [
  {
    name: "Begonville Main Restaurant",
    type: "Main Restaurant",
    image: buffetImg,
    cuisine: "Turkish & International",
    hours: "07:00 – 10:00 / 12:30 – 14:00 / 19:00 – 21:30",
    capacity: "450",
    location: "Main Building Ground Floor",
    highlights: ["Open Buffet", "Live Cooking", "Kids Menu", "Diet Options", "Terrace"],
    desc: "Our main restaurant offers open buffet breakfast, lunch and dinner with a rich selection of Turkish and world cuisine.",
  },
  {
    name: "Halicarnassus Fish Restaurant",
    type: "À la Carte",
    image: fishImg,
    cuisine: "Seafood",
    hours: "19:00 – 22:00",
    capacity: "80",
    location: "Poolside",
    highlights: ["À la Carte", "Sea View", "Wine Menu", "Live Music"],
    desc: "An à la carte restaurant combining fresh Aegean seafood with modern presentation.",
  },
  {
    name: "La Locanda Italian Restaurant",
    type: "À la Carte",
    image: italianImg,
    cuisine: "Italian",
    hours: "19:00 – 22:00",
    capacity: "70",
    location: "Garden Area",
    highlights: ["À la Carte", "Pizza Oven", "Homemade Pasta", "Terrace"],
    desc: "La Locanda brings traditional Italian flavors to the enchanting Aegean atmosphere.",
  },
  {
    name: "Far East Asian Restaurant",
    type: "À la Carte",
    image: asianImg,
    cuisine: "Asian Cuisine",
    hours: "19:00 – 22:00",
    capacity: "60",
    location: "Above Pool",
    highlights: ["À la Carte", "Sushi Bar", "Wok", "Teppanyaki"],
    desc: "Discover the exotic flavors of the Far East with sushi, wok and traditional Asian cuisine.",
  },
  {
    name: "Snack Bar & Patisserie",
    type: "Snack",
    image: snackImg,
    cuisine: "Snack & Patisserie",
    hours: "10:00 – 18:00",
    capacity: "50",
    location: "Poolside",
    highlights: ["Burger", "Pita", "Pancake", "Ice Cream", "Fresh Juice"],
    desc: "Enjoy light snacks, fresh squeezed juices, ice cream and pastries throughout the day.",
  },
];

const bars = [
  { name: "Lobby Lounge Bar", image: lobbyBarImg, hours: "10:00 – 00:00", desc: "Located in the lobby area, the Lounge Bar serves beverages throughout the day with tea and coffee hours." },
  { name: "Pool Bar", image: poolBarImg, hours: "10:00 – 18:00", desc: "Our poolside bar offers refreshing drinks and tropical cocktails." },
  { name: "Beach Bar", image: beachBarImg, hours: "10:00 – 18:00", desc: "Enjoy cocktails and refreshing drinks by the sea on our private beach." },
  { name: "Vitamin Bar", image: vitaminBarImg, hours: "23:00 – 02:00", desc: "Fresh juices and healthy drinks to keep you energized." },
];

const DiningPage = () => {
  return (
    <main>
      {/* Hero */}
      <section className="relative h-[70vh] min-h-[500px] flex items-end overflow-hidden">
        <img src={heroImg} alt="Dining" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-ocean-deep/80 via-ocean-deep/30 to-transparent" />
        <div className="relative z-10 px-6 lg:px-10 pb-16 max-w-[1400px] mx-auto w-full">
          <div className="w-16 h-[2px] bg-accent mb-6" />
          <h1 className="font-display text-5xl md:text-6xl lg:text-7xl text-primary-foreground mb-4">
            Dining
          </h1>
          <p className="font-body text-lg text-primary-foreground/70 max-w-xl">
            An extraordinary culinary experience with fresh Aegean flavors and world-class cuisine.
          </p>
        </div>
      </section>

      {/* Restaurants */}
      <section className="py-24 md:py-32 bg-background">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
          <p className="font-body text-xs font-semibold tracking-[0.3em] uppercase text-accent mb-4">
            Our Restaurants
          </p>
          <div className="flex flex-col gap-20 mt-12">
            {restaurants.map((r, i) => (
              <div
                key={r.name}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-10 items-center ${
                  i % 2 === 1 ? "lg:direction-rtl" : ""
                }`}
              >
                <div className={`${i % 2 === 1 ? "lg:order-2" : ""}`}>
                  <img
                    src={r.image}
                    alt={r.name}
                    className="w-full aspect-[4/3] object-cover rounded-2xl"
                  />
                </div>
                <div className={`${i % 2 === 1 ? "lg:order-1" : ""}`}>
                  <span className="font-body text-[10px] font-semibold tracking-[0.2em] uppercase text-accent">
                    {r.type}
                  </span>
                  <h3 className="font-display text-2xl md:text-3xl text-foreground mt-2 mb-4">
                    {r.name}
                  </h3>
                  <p className="font-body text-base text-muted-foreground mb-6 leading-relaxed">
                    {r.desc}
                  </p>
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div className="flex items-center gap-2">
                      <span className="font-body text-xs font-semibold text-foreground">Cuisine</span>
                      <span className="font-body text-xs text-muted-foreground">{r.cuisine}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Clock className="w-3 h-3 text-accent" />
                      <span className="font-body text-xs text-muted-foreground">{r.hours}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Users className="w-3 h-3 text-accent" />
                      <span className="font-body text-xs text-muted-foreground">{r.capacity} Guests</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <MapPin className="w-3 h-3 text-accent" />
                      <span className="font-body text-xs text-muted-foreground">{r.location}</span>
                    </div>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {r.highlights.map((h) => (
                      <span key={h} className="tag-pill text-[10px]">
                        {h}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Bars */}
      <section className="py-24 md:py-32 section-cream">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
          <p className="font-body text-xs font-semibold tracking-[0.3em] uppercase text-accent mb-4 text-center">
            Bars & Lounges
          </p>
          <h2 className="font-display text-3xl md:text-4xl text-foreground text-center mb-4">
            Sunset cocktails, live music and the enchanting Aegean atmosphere.
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-16">
            {bars.map((bar) => (
              <div key={bar.name} className="group rounded-2xl overflow-hidden bg-card shadow-sm hover:shadow-md transition-shadow">
                <div className="aspect-[4/3] overflow-hidden">
                  <img
                    src={bar.image}
                    alt={bar.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="p-6">
                  <span className="font-body text-[10px] font-semibold tracking-[0.2em] uppercase text-accent">
                    Bar
                  </span>
                  <h4 className="font-display text-lg text-foreground mt-1 mb-2">{bar.name}</h4>
                  <p className="font-body text-sm text-muted-foreground mb-3">{bar.desc}</p>
                  <div className="flex items-center gap-2">
                    <Clock className="w-3 h-3 text-accent" />
                    <span className="font-body text-xs text-muted-foreground">{bar.hours}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Reservation CTA */}
      <section className="py-20 bg-ocean-deep text-center">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
          <h2 className="font-display text-3xl md:text-4xl text-primary-foreground mb-4">
            For An Unforgettable Evening
          </h2>
          <p className="font-body text-base text-primary-foreground/60 mb-8">
            You can make a reservation through our guest relations office for our à la carte restaurants.
          </p>
          <a
            href="tel:+902523371111"
            className="inline-block font-body text-sm font-semibold tracking-wider uppercase border border-accent text-accent hover:bg-accent hover:text-accent-foreground px-10 py-4 rounded-full transition-colors"
          >
            Reservation — +90 252 337 11 11
          </a>
        </div>
      </section>
    </main>
  );
};

export default DiningPage;
