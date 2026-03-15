import { Link } from "react-router-dom";
import heroImg from "@/assets/rooms-hero.jpg";
import clubImg from "@/assets/room-type-club.jpg";
import clubSeaviewImg from "@/assets/room-type-club-seaview.jpg";
import clubFamilyImg from "@/assets/room-type-club-family.jpg";
import deluxeImg from "@/assets/room-type-deluxe.jpg";
import { ChevronRight } from "lucide-react";
import { useLanguage } from "@/i18n/LanguageContext";

const RoomsPage = () => {
  const { t } = useLanguage();
  const r = t.website.roomsPage;

  const roomTypes = [
    { category: r.clubRooms, name: r.clubRoom, image: clubImg, desc: r.clubRoomDesc },
    { category: r.clubRooms, name: r.clubSeaView, image: clubSeaviewImg, desc: r.clubSeaViewDesc },
    { category: r.clubRooms, name: r.clubFamily, image: clubFamilyImg, desc: r.clubFamilyDesc },
    { category: r.deluxeRooms, name: r.deluxeSeaView, image: deluxeImg, desc: r.deluxeSeaViewDesc },
  ];

  return (
    <main>
      <section className="relative h-[60vh] min-h-[400px] flex items-center justify-center overflow-hidden">
        <img src={heroImg} alt={r.title} className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-ocean-deep/50" />
        <div className="relative z-10 text-center px-6">
          <h1 className="font-display text-5xl md:text-6xl lg:text-7xl text-primary-foreground mb-4">{r.title}</h1>
          <p className="font-body text-lg text-primary-foreground/70">{r.subtitle}</p>
          <div className="flex items-center justify-center gap-2 mt-6 font-body text-sm text-primary-foreground/50">
            <Link to="/" className="hover:text-primary-foreground transition-colors">{r.home}</Link>
            <ChevronRight className="w-3 h-3" />
            <span className="text-primary-foreground">{r.rooms}</span>
          </div>
        </div>
      </section>

      <section className="py-24 md:py-32 bg-background">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10 text-center">
          <p className="font-body text-xs font-semibold tracking-[0.3em] uppercase text-accent mb-4">{r.accommodation}</p>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl text-foreground mb-6">
            {r.comfortElegance} <span className="italic text-accent">Elegance</span>
          </h2>
          <p className="font-body text-lg text-muted-foreground max-w-2xl mx-auto">{r.roomsCount}</p>
        </div>
      </section>

      <section className="pb-24 md:pb-32 bg-background">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {roomTypes.map((room) => (
              <div key={room.name} className="group relative rounded-2xl overflow-hidden aspect-[4/3] cursor-pointer">
                <img src={room.image} alt={room.name} className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-8">
                  <span className="font-body text-[10px] font-semibold tracking-[0.2em] uppercase text-accent">{room.category}</span>
                  <h3 className="font-display text-2xl md:text-3xl text-primary-foreground mt-2 mb-3">{room.name}</h3>
                  <p className="font-body text-sm text-primary-foreground/70 max-w-md mb-4">{room.desc}</p>
                  <span className="inline-flex items-center gap-1 font-body text-sm font-semibold text-accent group-hover:gap-2 transition-all">
                    {r.viewDetails} <ChevronRight className="w-4 h-4" />
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 section-cream text-center">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
          <h2 className="font-display text-3xl md:text-4xl text-foreground mb-4">{r.findDreamRoom}</h2>
          <p className="font-body text-base text-muted-foreground mb-8">{r.bestPrice}</p>
          <a
            href="https://new.bluedreamsresort.com/en/rezervasyon"
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