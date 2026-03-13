import diningMain from "@/assets/dining-main.jpg";
import diningLaLocanda from "@/assets/dining-lalocanda.jpg";
import diningHalikarnas from "@/assets/dining-halikarnas.jpg";
import diningSunsetBar from "@/assets/dining-sunsetbar.jpg";
import barLobby from "@/assets/bar-lobby.jpg";
import barPool from "@/assets/bar-pool.jpg";
import barBeach from "@/assets/bar-beach.jpg";
import barVitamin from "@/assets/bar-vitamin.jpg";
import { Clock, MapPin } from "lucide-react";

const DiningSection = () => {
  const restaurants = [
    {
      name: "Main Restaurant",
      type: "All Day Dining",
      desc: "International buffet with live cooking stations and theme nights",
      hours: "07:00 – 10:00 · 12:30 – 14:00 · 19:00 – 21:30",
      location: "Main Building, Ground Floor",
      image: diningMain,
    },
    {
      name: "La Locanda",
      type: "Italian Fine Dining",
      desc: "Wood-fired pizza and handmade pasta in a refined Mediterranean setting",
      hours: "19:00 – 22:00",
      location: "Garden Terrace",
      image: diningLaLocanda,
    },
    {
      name: "Halikarnas",
      type: "Turkish & Seafood",
      desc: "Fresh Aegean flavours with traditional Turkish à la carte cuisine",
      hours: "19:00 – 22:00",
      location: "Beachfront",
      image: diningHalikarnas,
    },
  ];

  const bars = [
    {
      name: "Sunset Bar",
      type: "Cocktail Bar",
      desc: "Cocktails and live music with panoramic sunset views over the bay",
      hours: "17:00 – 01:00",
      location: "Hilltop Terrace",
      image: diningSunsetBar,
    },
    {
      name: "Lobby Bar",
      type: "Lounge Bar",
      desc: "Premium spirits and signature cocktails in an elegant lobby setting",
      hours: "10:00 – 00:00",
      location: "Main Lobby",
      image: barLobby,
    },
    {
      name: "Pool Bar",
      type: "Pool Bar",
      desc: "Refreshing drinks and light snacks served poolside all day",
      hours: "10:00 – 18:00",
      location: "Main Pool Area",
      image: barPool,
    },
    {
      name: "Beach Bar",
      type: "Beach Bar",
      desc: "Chilled beverages and tropical cocktails on the sandy beachfront",
      hours: "10:00 – 18:00",
      location: "Beach",
      image: barBeach,
    },
    {
      name: "Vitamin Bar",
      type: "Healthy Bar",
      desc: "Fresh juices, smoothies and healthy snacks by the pool",
      hours: "09:00 – 17:00",
      location: "Spa & Pool Area",
      image: null,
    },
  ];

  const VenueCard = ({ venue, hasImage = true }: { venue: typeof restaurants[0]; hasImage?: boolean }) => (
    <div className="factsheet-card overflow-hidden">
      {hasImage && venue.image && (
        <img
          src={venue.image}
          alt={venue.name}
          className="w-full h-48 object-cover"
        />
      )}
      <div className="p-6">
        <p className="font-body text-[10px] tracking-[0.2em] uppercase text-gold mb-3">
          {venue.type}
        </p>
        <h4 className="font-display text-xl font-light text-ocean-deep mb-2">{venue.name}</h4>
        <p className="font-body text-xs text-muted-foreground leading-relaxed mb-4">{venue.desc}</p>
        <div className="space-y-2 pt-3 border-t" style={{ borderColor: 'hsl(var(--sand))' }}>
          <div className="flex items-center gap-2">
            <Clock className="w-3.5 h-3.5 text-gold flex-shrink-0" />
            <span className="font-body text-[11px] text-muted-foreground">{venue.hours}</span>
          </div>
          <div className="flex items-center gap-2">
            <MapPin className="w-3.5 h-3.5 text-gold flex-shrink-0" />
            <span className="font-body text-[11px] text-muted-foreground">{venue.location}</span>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <section id="dining">
      <div className="factsheet-section h-[60vh] min-h-[400px]">
        <img src={diningMain} alt="Fine dining" className="absolute inset-0 image-cover" />
        <div className="factsheet-hero-overlay" />
        <div className="relative z-10 flex items-end h-full pb-16 px-6">
          <div className="max-w-4xl mx-auto text-center w-full">
            <p className="factsheet-label mb-4 text-gold-light">05</p>
            <h2 className="factsheet-heading text-4xl md:text-6xl text-primary-foreground">
              Food & Beverage
            </h2>
          </div>
        </div>
      </div>

      <div className="section-cream py-20 md:py-28">
        <div className="max-w-5xl mx-auto px-6">
          {/* Restaurants */}
          <div className="text-center mb-16">
            <p className="factsheet-label mb-4">Restaurants</p>
            <h3 className="factsheet-heading text-3xl md:text-4xl text-ocean-deep mb-6">
              A Feast for Every Sense
            </h3>
            <div className="factsheet-divider mb-8" />
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-20">
            {restaurants.map((v) => (
              <VenueCard key={v.name} venue={v} />
            ))}
          </div>

          {/* Bars & Lounges */}
          <div className="text-center mb-16">
            <p className="factsheet-label mb-4">Bars & Lounges</p>
            <h3 className="factsheet-heading text-3xl md:text-4xl text-ocean-deep mb-6">
              Sip & Unwind
            </h3>
            <div className="factsheet-divider mb-8" />
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {bars.map((bar) => (
              <VenueCard key={bar.name} venue={bar} hasImage={!!bar.image} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default DiningSection;
