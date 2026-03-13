import diningMain from "@/assets/dining-main.jpg";
import diningSnack from "@/assets/dining-snack.jpg";
import diningLaLocanda from "@/assets/dining-lalocanda.jpg";
import diningHalikarnas from "@/assets/dining-halikarnas.jpg";
import diningSunsetBar from "@/assets/dining-sunsetbar.jpg";
import diningLeKebab from "@/assets/dining-lekebab.jpg";
import barLobby from "@/assets/bar-lobby.jpg";
import barPool from "@/assets/bar-pool.jpg";
import barBeach from "@/assets/bar-beach.jpg";
import barVitamin from "@/assets/bar-vitamin.jpg";
import { Clock, MapPin } from "lucide-react";

const DiningSection = () => {
  const restaurants = [
    { name: "Main Restaurant", type: "All Day Dining", desc: "International buffet with live cooking stations and theme nights", hours: "07:00 – 10:00 · 12:30 – 14:00 · 19:00 – 21:30", location: "Main Building, Ground Floor", image: diningMain },
    { name: "Snack Restaurant", type: "Casual Dining", desc: "Light bites, burgers, sandwiches and refreshments served beachside throughout the day", hours: "10:00 – 17:00", location: "Beachfront", image: diningMain },
    { name: "La Locanda", type: "À la Carte Restaurant", desc: "Wood-fired pizza and handmade pasta in a refined Mediterranean setting", hours: "19:00 – 22:00", location: "Garden Terrace", image: diningLaLocanda },
    { name: "Halikarnas", type: "À la Carte Restaurant", desc: "Fresh Aegean seafood with the finest catches of the day in an elegant waterfront setting", hours: "19:00 – 22:00", location: "Beachfront", image: diningHalikarnas },
    { name: "Le Kebab", type: "À la Carte Restaurant", desc: "Authentic Turkish cuisine featuring premium kebabs and traditional Anatolian flavours", hours: "19:00 – 22:00", location: "Beachfront", image: diningLeKebab },
  ];

  const bars = [
    { name: "Sunset Bar**", type: "Cocktail Bar", desc: "Cocktails and live music with panoramic sunset views over the bay", hours: "17:00 – 01:00", location: "Activity Pool", image: diningSunsetBar },
    { name: "Lobby Bar**", type: "Lounge Bar", desc: "Premium spirits and signature cocktails in an elegant lobby setting", hours: "10:00 – 00:00", location: "Main Lobby", image: barLobby },
    { name: "Circle Bar**", type: "Pool Bar", desc: "Refreshing drinks and light snacks served poolside all day", hours: "10:00 – 18:00", location: "Infinity Pool", image: barPool },
    { name: "Pier Bar**", type: "Beach Bar", desc: "Chilled beverages and tropical cocktails served on the pier", hours: "10:00 – 18:00", location: "Pier", image: barBeach },
    { name: "Tea Garden**", type: "Tea & Coffee Lounge", desc: "A relaxing terrace serving a selection of teas, coffees, pastries and light refreshments", hours: "10:00 – 22:00", location: "The Terrace", image: barLobby },
    { name: "Vitamin Bar*", type: "Healthy Bar", desc: "Fresh juices, smoothies and healthy snacks by the pool", hours: "09:00 – 17:00", location: "Spa & Pool Area", image: barVitamin },
  ];

  const VenueCard = ({ venue }: { venue: typeof restaurants[0] }) => (
    <div className="factsheet-card group overflow-hidden">
      {venue.image && (
        <div className="overflow-hidden">
          <img src={venue.image} alt={venue.name} className="w-full h-40 object-cover transition-transform duration-500 group-hover:scale-105" />
        </div>
      )}
      <div className="p-5">
        <p className="factsheet-label text-[10px] mb-2">{venue.type}</p>
        <h4 className="font-display text-lg text-ocean-deep mb-2">{venue.name}</h4>
        <p className="font-body text-xs text-muted-foreground leading-relaxed mb-4">{venue.desc}</p>
        <div className="space-y-1.5 pt-3 border-t" style={{ borderColor: 'hsl(var(--sand))' }}>
          <div className="flex items-center gap-2">
            <Clock className="w-3.5 h-3.5 text-gold flex-shrink-0" />
            <span className="font-body text-xs text-muted-foreground">{venue.hours}</span>
          </div>
          <div className="flex items-center gap-2">
            <MapPin className="w-3.5 h-3.5 text-gold flex-shrink-0" />
            <span className="font-body text-xs text-muted-foreground">{venue.location}</span>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <section id="dining">
      <div className="factsheet-section h-[35vh] min-h-[280px]">
        <img src={diningMain} alt="Fine dining" className="absolute inset-0 image-cover" />
        <div className="factsheet-hero-overlay" />
        <div className="relative z-10 flex items-end h-full pb-10 px-6">
          <div className="max-w-4xl mx-auto text-center w-full">
            <p className="section-number text-gold-light">05</p>
            <h2 className="factsheet-heading text-4xl md:text-5xl text-primary-foreground">
              Food & Beverage
            </h2>
          </div>
        </div>
      </div>

      <div className="section-cream py-14 md:py-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-12">
            <p className="factsheet-label mb-4">Restaurants</p>
            <h3 className="factsheet-heading text-3xl md:text-4xl text-ocean-deep mb-5">
              A Feast for Every Sense
            </h3>
            <div className="factsheet-divider" />
          </div>

          <div className="grid md:grid-cols-3 gap-5 mb-16">
            {restaurants.map((v) => <VenueCard key={v.name} venue={v} />)}
          </div>

          <div className="text-center mb-12">
            <p className="factsheet-label mb-4">Bars & Lounges</p>
            <h3 className="factsheet-heading text-3xl md:text-4xl text-ocean-deep mb-5">
              Sip & Unwind
            </h3>
            <div className="factsheet-divider" />
          </div>

          <div className="grid md:grid-cols-3 gap-5 mb-8">
            {bars.map((bar) => <VenueCard key={bar.name} venue={bar} />)}
          </div>

          <div className="space-y-1 mt-6">
            <p className="font-body text-[10px] text-muted-foreground tracking-wider">* Not included in the Ultra All Inclusive concept</p>
            <p className="font-body text-[10px] text-muted-foreground tracking-wider">** Selection of imported and local alcoholic and non-alcoholic hot and cold beverages served. Premium beverages at extra cost.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DiningSection;
