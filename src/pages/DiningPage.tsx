import heroImg from "@/assets/dining-hero.jpg";
import diningMain from "@/assets/dining-main.jpg";
import diningSnack from "@/assets/dining-snack.jpg";
import diningPoolSnacks from "@/assets/dining-poolsnacks.webp";
import diningLaLocanda from "@/assets/dining-lalocanda.jpg";
import diningHalikarnas from "@/assets/dining-halikarnas.jpg";
import diningLeKebab from "@/assets/dining-lekebab.jpg";
import diningSunsetBar from "@/assets/dining-sunsetbar.jpg";
import barLobby from "@/assets/bar-lobby.jpg";
import barPool from "@/assets/bar-pool.jpg";
import barBeach from "@/assets/bar-beach.jpg";
import barTeaGarden from "@/assets/bar-teagarden.png";
import barVitamin from "@/assets/bar-vitamin.jpg";
import { Clock, MapPin } from "lucide-react";
import { useLanguage } from "@/i18n/LanguageContext";

const restaurantImages = [diningMain, diningSnack, diningPoolSnacks, diningLaLocanda, diningHalikarnas, diningLeKebab];
const barImages = [diningSunsetBar, barLobby, barPool, barBeach, barTeaGarden, barVitamin];

const VenueCard = ({ venue, image }: { venue: { name: string; type: string; desc: string; hours: string; location: string }; image: string }) => (
  <div className="group rounded-2xl overflow-hidden bg-card border border-border shadow-sm hover:shadow-md transition-shadow">
    <div className="overflow-hidden">
      <img src={image} alt={venue.name} className="w-full h-56 object-cover transition-transform duration-500 group-hover:scale-105" />
    </div>
    <div className="p-5">
      <p className="font-body text-[10px] font-semibold tracking-[0.15em] uppercase text-accent mb-2">{venue.type}</p>
      <h4 className="font-display text-lg text-foreground mb-2">{venue.name}</h4>
      <p className="font-body text-xs text-muted-foreground leading-relaxed mb-4">{venue.desc}</p>
      <div className="space-y-1.5 pt-3 border-t border-border">
        <div className="flex items-center gap-2">
          <Clock className="w-3.5 h-3.5 text-accent flex-shrink-0" />
          <span className="font-body text-xs text-muted-foreground">{venue.hours}</span>
        </div>
        <div className="flex items-center gap-2">
          <MapPin className="w-3.5 h-3.5 text-accent flex-shrink-0" />
          <span className="font-body text-xs text-muted-foreground">{venue.location}</span>
        </div>
      </div>
    </div>
  </div>
);

const DiningPage = () => {
  const { t } = useLanguage();
  const d = t.website.diningPage;

  return (
    <main>
      {/* Hero */}
      <section className="relative h-[60vh] min-h-[400px] flex items-end overflow-hidden">
        <img src={heroImg} alt={d.title} className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-ocean-deep/90 via-ocean-deep/40 to-ocean-deep/20" />
        <div className="relative z-10 px-6 lg:px-10 pb-16 max-w-[1400px] mx-auto w-full">
          <div className="w-16 h-[2px] bg-accent mb-6" />
          <h1 className="font-display text-5xl md:text-6xl lg:text-7xl text-primary-foreground mb-4">{d.title}</h1>
          <p className="font-body text-lg text-primary-foreground/70 max-w-xl">{d.heroDesc}</p>
        </div>
      </section>

      {/* Restaurants — mirroring factsheet */}
      <section className="py-24 md:py-32 bg-background">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-12">
            <p className="font-body text-xs font-semibold tracking-[0.3em] uppercase text-accent mb-4">{t.dining.restaurantsLabel}</p>
            <h2 className="font-display text-3xl md:text-4xl text-foreground mb-5">{t.dining.heading}</h2>
            <div className="w-16 h-[2px] mx-auto" style={{ background: 'linear-gradient(90deg, hsl(var(--gold)), transparent)' }} />
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {t.dining.restaurants.map((v, i) => (
              <VenueCard key={v.name} venue={v} image={restaurantImages[i]} />
            ))}
          </div>
          <p className="font-body text-[10px] text-muted-foreground tracking-wider mt-6">{t.dining.reservationNote}</p>
        </div>
      </section>

      {/* Bars & Lounges — mirroring factsheet */}
      <section className="py-24 md:py-32 section-cream">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-12">
            <p className="font-body text-xs font-semibold tracking-[0.3em] uppercase text-accent mb-4">{t.dining.barsLabel}</p>
            <h2 className="font-display text-3xl md:text-4xl text-foreground mb-5">{t.dining.barsHeading}</h2>
            <div className="w-16 h-[2px] mx-auto" style={{ background: 'linear-gradient(90deg, hsl(var(--gold)), transparent)' }} />
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {t.dining.bars.map((bar, i) => (
              <VenueCard key={bar.name} venue={bar} image={barImages[i]} />
            ))}
          </div>
          <p className="font-body text-[10px] text-muted-foreground tracking-wider mt-6">{t.dining.barsNote}</p>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-ocean-deep text-center">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
          <h2 className="font-display text-3xl md:text-4xl text-primary-foreground mb-4">{d.unforgettableEvening}</h2>
          <p className="font-body text-base text-primary-foreground/60 mb-8">{d.reservationNote}</p>
          <a href="tel:+902523371111" className="inline-block font-body text-sm font-semibold tracking-wider uppercase border border-accent text-accent hover:bg-accent hover:text-accent-foreground px-10 py-4 rounded-full transition-colors">
            {d.reservation} — +90 252 337 11 11
          </a>
        </div>
      </section>
    </main>
  );
};

export default DiningPage;
