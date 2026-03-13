import diningMain from "@/assets/dining-main.jpg";
import diningSnack from "@/assets/dining-snack.jpg";
import diningLaLocanda from "@/assets/dining-lalocanda.jpg";
import diningHalikarnas from "@/assets/dining-halikarnas.jpg";
import diningSunsetBar from "@/assets/dining-sunsetbar.jpg";
import diningLeKebab from "@/assets/dining-lekebab.jpg";
import diningPoolSnacks from "@/assets/dining-poolsnacks.webp";
import barLobby from "@/assets/bar-lobby.jpg";
import barPool from "@/assets/bar-pool.jpg";
import barBeach from "@/assets/bar-beach.jpg";
import barVitamin from "@/assets/bar-vitamin.jpg";
import barTeaGarden from "@/assets/bar-teagarden.png";
import { Clock, MapPin } from "lucide-react";
import { useLanguage } from "@/i18n/LanguageContext";

const restaurantImages = [diningMain, diningSnack, diningPoolSnacks, diningLaLocanda, diningHalikarnas, diningLeKebab];
const barImages = [diningSunsetBar, barLobby, barPool, barBeach, barTeaGarden, barVitamin];

const DiningSection = () => {
  const { t } = useLanguage();

  const VenueCard = ({ venue, image }: { venue: { name: string; type: string; desc: string; hours: string; location: string }; image: string }) => (
    <div className="factsheet-card group overflow-hidden">
      <div className="overflow-hidden">
        <img src={image} alt={venue.name} className="w-full h-56 object-cover transition-transform duration-500 group-hover:scale-105" />
      </div>
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
            <h2 className="factsheet-heading text-4xl md:text-5xl text-primary-foreground">{t.dining.sectionTitle}</h2>
          </div>
        </div>
      </div>

      <div className="section-cream py-14 md:py-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-12">
            <p className="factsheet-label mb-4">{t.dining.restaurantsLabel}</p>
            <h3 className="factsheet-heading text-3xl md:text-4xl text-ocean-deep mb-5">{t.dining.heading}</h3>
            <div className="factsheet-divider" />
          </div>
          <div className="grid md:grid-cols-3 gap-5 mb-16">
            {t.dining.restaurants.map((v, i) => <VenueCard key={v.name} venue={v} image={restaurantImages[i]} />)}
          </div>
          <p className="font-body text-[10px] text-muted-foreground tracking-wider mt-3">{t.dining.reservationNote}</p>

          <div className="text-center mb-12">
            <p className="factsheet-label mb-4">{t.dining.barsLabel}</p>
            <h3 className="factsheet-heading text-3xl md:text-4xl text-ocean-deep mb-5">{t.dining.barsHeading}</h3>
            <div className="factsheet-divider" />
          </div>
          <div className="grid md:grid-cols-3 gap-5 mb-8">
            {t.dining.bars.map((bar, i) => <VenueCard key={bar.name} venue={bar} image={barImages[i]} />)}
          </div>
          <div className="space-y-1 mt-6">
            <p className="font-body text-[10px] text-muted-foreground tracking-wider">{t.dining.barsNote}</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DiningSection;
