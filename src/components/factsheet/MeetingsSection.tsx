import meetingHall from "@/assets/meeting-hall.jpg";
import { Users, Maximize, ArrowUpFromDot } from "lucide-react";

const MeetingsSection = () => {
  const mainHall = {
    name: "İstanbul Salonu",
    desc: "The 770 m² Istanbul Hall is one of the largest hotel conference halls in the Aegean. It can be divided into two soundproof sections.",
    stats: [
      { value: "770", unit: "m²", label: "Total Area" },
      { value: "700", unit: "people", label: "Theater Capacity" },
      { value: "4.0", unit: "mt", label: "Ceiling Height" },
      { value: "2", unit: "sections", label: "Divisible" },
    ],
    configurations: [
      { section: "Istanbul (Full)", area: "770", theater: "700", classroom: "450", banquet: "650", height: "3.50 – 4.00 mt" },
      { section: "Europe (Stage Side)", area: "400", theater: "450", classroom: "250", banquet: "450", height: "3.50 – 4.00 mt" },
      { section: "Asia (Pool Side)", area: "370", theater: "350", classroom: "200", banquet: "200", height: "3.50 – 4.00 mt" },
    ],
  };

  const meetingRooms = [
    { name: "Bodrum Hall", area: "50 m²", theater: 40, height: "2.80 mt" },
    { name: "Ankara Hall", area: "120 m²", theater: 100, height: "3.00 mt" },
    { name: "İzmir Hall", area: "90 m²", theater: 80, height: "2.90 mt" },
    { name: "Antalya Hall", area: "75 m²", theater: 60, height: "2.80 mt" },
    { name: "Board Room", area: "40 m²", theater: 16, height: "2.80 mt" },
  ];

  const weddingVenues = [
    {
      name: "Beachfront Ceremony",
      capacity: "Up to 300 guests",
      desc: "Exchange vows on pristine white sand with the Aegean Sea as your backdrop. Available at sunset for magical golden-hour ceremonies.",
      features: ["Floral Arch Setup", "White Sand Aisle", "Sunset Timing"],
    },
    {
      name: "Garden Terrace",
      capacity: "Up to 500 guests",
      desc: "A lush Mediterranean garden surrounded by olive trees and bougainvillea, perfect for elegant outdoor receptions and cocktail hours.",
      features: ["Landscaped Gardens", "String Lighting", "Dance Floor"],
    },
    {
      name: "Poolside Gala",
      capacity: "Up to 400 guests",
      desc: "A glamorous poolside setting with ambient lighting and panoramic sea views for unforgettable evening celebrations.",
      features: ["Pool Illumination", "Live Music Stage", "Cocktail Stations"],
    },
  ];

  const weddingServices = [
    "Dedicated Wedding Coordinator",
    "Custom Menu Planning",
    "Floral & Décor Design",
    "DJ & Live Entertainment",
    "Photography Arrangements",
    "Bridal Suite & Spa Package",
  ];

  const amenities = [
    "Professional Sound System",
    "HD Projector & Screen",
    "High-Speed Wi-Fi",
    "Wireless Microphone",
    "Technical Support Team",
    "Coffee Break Service",
  ];

  return (
    <section id="meetings">
      {/* Hero */}
      <div className="factsheet-section h-[60vh] min-h-[400px]">
        <img src={meetingHall} alt="Meeting & Events" className="absolute inset-0 image-cover" />
        <div className="factsheet-hero-overlay" />
        <div className="relative z-10 flex items-end h-full pb-16 px-6">
          <div className="max-w-4xl mx-auto text-center w-full">
            <p className="factsheet-label mb-4 text-gold-light">08</p>
            <h2 className="factsheet-heading text-4xl md:text-6xl text-primary-foreground">
              Meetings & Events
            </h2>
          </div>
        </div>
      </div>

      {/* Main Hall */}
      <div className="section-cream py-20 md:py-28">
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center mb-16">
            <p className="factsheet-label mb-4">Main Hall</p>
            <h3 className="factsheet-heading text-3xl md:text-4xl text-ocean-deep mb-6">
              {mainHall.name}
            </h3>
            <div className="factsheet-divider mb-8" />
            <p className="font-body text-sm text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              {mainHall.desc}
            </p>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
            {mainHall.stats.map((stat) => (
              <div key={stat.label} className="factsheet-card p-6 text-center">
                <p className="font-display text-3xl md:text-4xl font-light text-ocean-deep">
                  {stat.value}
                </p>
                <p className="font-body text-[10px] tracking-[0.15em] uppercase text-gold mt-1">
                  {stat.unit}
                </p>
                <p className="font-body text-xs text-muted-foreground mt-2">{stat.label}</p>
              </div>
            ))}
          </div>

          {/* Configuration Table */}
          <div className="factsheet-card overflow-hidden mb-20">
            <div className="p-6 border-b" style={{ borderColor: 'hsl(var(--sand))' }}>
              <p className="font-body text-[10px] tracking-[0.2em] uppercase text-gold">
                Hall Configurations
              </p>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b" style={{ borderColor: 'hsl(var(--sand))' }}>
                    <th className="font-body text-[10px] tracking-[0.15em] uppercase text-muted-foreground font-medium text-left p-4">Section</th>
                    <th className="font-body text-[10px] tracking-[0.15em] uppercase text-muted-foreground font-medium text-center p-4">Area (m²)</th>
                    <th className="font-body text-[10px] tracking-[0.15em] uppercase text-muted-foreground font-medium text-center p-4">Theater</th>
                    <th className="font-body text-[10px] tracking-[0.15em] uppercase text-muted-foreground font-medium text-center p-4">Classroom</th>
                    <th className="font-body text-[10px] tracking-[0.15em] uppercase text-muted-foreground font-medium text-center p-4">Banquet</th>
                    <th className="font-body text-[10px] tracking-[0.15em] uppercase text-muted-foreground font-medium text-center p-4">Height</th>
                  </tr>
                </thead>
                <tbody>
                  {mainHall.configurations.map((config) => (
                    <tr key={config.section} className="border-b last:border-b-0" style={{ borderColor: 'hsl(var(--sand))' }}>
                      <td className="font-display text-sm font-light text-ocean-deep p-4">{config.section}</td>
                      <td className="font-body text-sm text-muted-foreground text-center p-4">{config.area}</td>
                      <td className="font-body text-sm text-muted-foreground text-center p-4">{config.theater}</td>
                      <td className="font-body text-sm text-muted-foreground text-center p-4">{config.classroom}</td>
                      <td className="font-body text-sm text-muted-foreground text-center p-4">{config.banquet}</td>
                      <td className="font-body text-sm text-muted-foreground text-center p-4">{config.height}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Meeting Rooms */}
          <div className="text-center mb-12">
            <p className="factsheet-label mb-4">MICE</p>
            <h3 className="factsheet-heading text-3xl md:text-4xl text-ocean-deep mb-6">
              Meeting Rooms
            </h3>
            <div className="factsheet-divider mb-8" />
            <p className="font-body text-sm text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Modern and professional spaces for meetings of every scale.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mb-20">
            {meetingRooms.map((room) => (
              <div key={room.name} className="factsheet-card p-6">
                <h4 className="font-display text-xl font-light text-ocean-deep mb-4">{room.name}</h4>
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <Maximize className="w-4 h-4 text-gold flex-shrink-0" />
                    <span className="font-body text-xs text-muted-foreground">{room.area}</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Users className="w-4 h-4 text-gold flex-shrink-0" />
                    <span className="font-body text-xs text-muted-foreground">Theater: {room.theater}</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <ArrowUpFromDot className="w-4 h-4 text-gold flex-shrink-0" />
                    <span className="font-body text-xs text-muted-foreground">Height: {room.height}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Amenities */}
          <div className="text-center mb-12">
            <p className="factsheet-label mb-4">In All Halls</p>
            <div className="factsheet-divider mb-8" />
          </div>
          <div className="flex flex-wrap justify-center gap-4">
            {amenities.map((item) => (
              <span
                key={item}
                className="font-display text-sm font-light text-ocean-medium px-5 py-3 border"
                style={{ borderColor: 'hsl(var(--sand))' }}
              >
                {item}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default MeetingsSection;
