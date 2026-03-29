import roomClub from "@/assets/room-club.jpg";
import roomClubSeaview from "@/assets/room-club-seaview.jpg";
import roomFamily from "@/assets/room-family.jpg";
import roomDeluxe from "@/assets/room-deluxe-new.jpg";
import roomDeluxeFamily from "@/assets/room-deluxe-family.jpg";
import roomHero from "@/assets/room-deluxe.jpg";
import { Lock, Wind, Tv, Bath, Wifi, Snowflake, Waves, Infinity, Coffee, Wine } from "lucide-react";
import { useLanguage } from "@/i18n/LanguageContext";

const images = [roomClub, roomClubSeaview, roomFamily, roomDeluxe, roomDeluxeFamily];
const seaViewIndices = [1, 3, 4];
const infinityPoolIndices = [3, 4];

const RoomsSection = () => {
  const { t } = useLanguage();

  return (
    <section id="rooms">
      <div className="factsheet-section h-[35vh] min-h-[280px]">
        <img src={roomHero} alt="Deluxe room" className="absolute inset-0 image-cover" />
        <div className="factsheet-hero-overlay" />
        <div className="relative z-10 flex items-end h-full pb-10 px-6">
          <div className="max-w-4xl mx-auto text-center w-full">
            <p className="section-number text-gold-light">03</p>
            <h2 className="factsheet-heading text-4xl md:text-5xl text-primary-foreground">{t.rooms.sectionTitle}</h2>
          </div>
        </div>
      </div>

      <div className="section-cream py-14 md:py-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-12">
            <p className="factsheet-label mb-4">{t.rooms.accommodation}</p>
            <h3 className="factsheet-heading text-3xl md:text-4xl text-ocean-deep mb-5">{t.rooms.heading}</h3>
            <div className="factsheet-divider mb-5" />
            <p className="font-body text-sm leading-relaxed text-muted-foreground max-w-2xl mx-auto">{t.rooms.desc}</p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {t.rooms.roomList.map((room, i) => (
              <div key={room.name} className="factsheet-card group overflow-hidden">
                <div className="overflow-hidden">
                  <img src={images[i]} alt={room.name} className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-105" />
                </div>
                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <h4 className="font-display text-xl text-ocean-deep">{room.name}</h4>
                    <span className="font-body text-[10px] tracking-[0.12em] uppercase text-gold font-semibold bg-cream px-3 py-1.5 rounded-full">{room.size}</span>
                  </div>
                  <div className="w-10 h-[1.5px] mb-3" style={{ background: 'linear-gradient(90deg, hsl(var(--gold)), transparent)' }} />
                  <p className="font-body text-sm leading-relaxed text-muted-foreground mb-4">{room.description}</p>
                  <div className="grid grid-cols-3 gap-2 pt-3 border-t" style={{ borderColor: 'hsl(var(--sand))' }}>
                    {[
                      { icon: Lock, label: t.rooms.amenities.safebox },
                      { icon: Wind, label: t.rooms.amenities.hairDryer },
                      { icon: Tv, label: t.rooms.amenities.ledTv },
                      { icon: Bath, label: t.rooms.amenities.privateBathroom },
                      { icon: Wifi, label: t.rooms.amenities.wifi },
                      { icon: Snowflake, label: t.rooms.amenities.ac },
                      { icon: Coffee, label: t.rooms.amenities.coffeeTea },
                      { icon: Wine, label: t.rooms.amenities.minibar },
                      ...(seaViewIndices.includes(i) ? [{ icon: Waves, label: t.rooms.amenities.seaView }] : []),
                      ...(infinityPoolIndices.includes(i) ? [{ icon: Infinity, label: t.rooms.amenities.infinityPoolView }] : []),
                    ].map(({ icon: Icon, label }) => (
                      <div key={label} className="flex items-center gap-1.5">
                        <Icon className="w-3.5 h-3.5 text-gold flex-shrink-0" />
                        <span className="font-body text-[10px] text-muted-foreground tracking-wide">{label}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default RoomsSection;
