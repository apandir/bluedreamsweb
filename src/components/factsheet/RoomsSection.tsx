import roomClub from "@/assets/room-club.jpg";
import roomClubSeaview from "@/assets/room-club-seaview.jpg";
import roomFamily from "@/assets/room-family.jpg";
import roomDeluxe from "@/assets/room-deluxe-new.jpg";
import roomHero from "@/assets/room-deluxe.jpg";

const RoomsSection = () => {
  const rooms = [
    { name: "Club Room", size: "24m²", description: "Comfortable rooms with garden or partial sea views, built into the hillside bungalows intertwined with the sea.", image: roomClub },
    { name: "Club Sea View Room", size: "24m²", description: "Elevated club rooms offering panoramic views of the turquoise Aegean, with private balconies.", image: roomClubSeaview },
    { name: "Club Family Room", size: "35–40m²", description: "Spacious family-friendly rooms with two separate bedrooms, designed for guests traveling with children.", image: roomFamily },
    { name: "Deluxe Room Sea & Infinity Pool View", size: "40m²", description: "Premium rooms in the main building with unobstructed sea and infinity pool views, elegant furnishings, and exclusive amenities.", image: roomDeluxe },
    { name: "Deluxe Family Room Sea & Infinity Pool View", size: "50–55m²", description: "Spacious deluxe family accommodation with stunning sea and infinity pool views, separate living area, and premium amenities for the whole family.", image: roomDeluxe },
  ];

  return (
    <section id="rooms">
      <div className="factsheet-section h-[35vh] min-h-[280px]">
        <img src={roomHero} alt="Deluxe room" className="absolute inset-0 image-cover" />
        <div className="factsheet-hero-overlay" />
        <div className="relative z-10 flex items-end h-full pb-10 px-6">
          <div className="max-w-4xl mx-auto text-center w-full">
            <p className="section-number text-gold-light">03</p>
            <h2 className="factsheet-heading text-4xl md:text-5xl text-primary-foreground">
              Rooms & Suites
            </h2>
          </div>
        </div>
      </div>

      <div className="section-cream py-14 md:py-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-12">
            <p className="factsheet-label mb-4">Accommodation</p>
            <h3 className="factsheet-heading text-3xl md:text-4xl text-ocean-deep mb-5">
              Your Sanctuary by the Sea
            </h3>
            <div className="factsheet-divider mb-5" />
            <p className="font-body text-sm leading-relaxed text-muted-foreground max-w-2xl mx-auto">
              Our hotel rooms are built into the hillside bungalows and the main building,
              intertwined with the sea. Each room offers a unique perspective of the Aegean coastline.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {rooms.map((room) => (
              <div key={room.name} className="factsheet-card group overflow-hidden">
                <div className="overflow-hidden">
                  <img src={room.image} alt={room.name} className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-105" />
                </div>
                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <h4 className="font-display text-xl text-ocean-deep">{room.name}</h4>
                    <span className="font-body text-[10px] tracking-[0.12em] uppercase text-gold font-semibold bg-cream px-3 py-1.5 rounded-full">{room.size}</span>
                  </div>
                  <div className="w-10 h-[1.5px] mb-3" style={{ background: 'linear-gradient(90deg, hsl(var(--gold)), transparent)' }} />
                  <p className="font-body text-sm leading-relaxed text-muted-foreground">{room.description}</p>
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
