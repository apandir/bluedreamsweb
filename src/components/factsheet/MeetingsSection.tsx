import meetingHall from "@/assets/meeting-hall.jpg";
import eventCeremony from "@/assets/event-ceremony.png";
import eventResortNight from "@/assets/event-resort-night.png";
import eventParty from "@/assets/event-party.png";
import eventGardenTable from "@/assets/event-garden-table.png";
import eventTerraceCeremony from "@/assets/event-terrace-ceremony.png";
import eventAerialTable from "@/assets/event-aerial-table.png";
import eventLiveMusic from "@/assets/event-live-music.png";
import eventTableDetail from "@/assets/event-table-detail.png";
import eventSunsetDinner from "@/assets/event-sunset-dinner.png";
import eventDesserts from "@/assets/event-desserts.png";
import eventChampagne from "@/assets/event-champagne.png";
import eventToast from "@/assets/event-toast.png";
import eventDinnerParty from "@/assets/event-dinner-party.png";
import eventTableSetup from "@/assets/event-table-setup.png";
import eventAerialDinner from "@/assets/event-aerial-dinner.png";
import eventGardenSetup from "@/assets/event-garden-setup.png";
import {
  Users, Maximize, ArrowUpFromDot, Heart,
  Volume2, MonitorPlay, Wifi, Mic, Headset, Coffee,
  Waves, TreePine, Sparkles, Music, Camera, Gem,
  UtensilsCrossed, Flower2, PartyPopper,
  Presentation, GraduationCap, Theater,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

const MeetingsSection = () => {
  const mainHall = {
    name: "İstanbul Salonu",
    desc: "The 770 m² Istanbul Hall is one of the largest hotel conference halls in the Aegean. It can be divided into two soundproof sections.",
    stats: [
      { value: "770", unit: "m²", label: "Total Area", icon: Maximize },
      { value: "700", unit: "people", label: "Theater Capacity", icon: Users },
      { value: "4.0", unit: "mt", label: "Ceiling Height", icon: ArrowUpFromDot },
      { value: "2", unit: "sections", label: "Divisible", icon: Presentation },
    ],
    configurations: [
      { section: "Istanbul (Full)", area: "770", theater: "700", classroom: "450", banquet: "650", height: "3.50 – 4.00 mt" },
      { section: "Europe (Stage Side)", area: "400", theater: "450", classroom: "250", banquet: "450", height: "3.50 – 4.00 mt" },
      { section: "Asia (Pool Side)", area: "370", theater: "350", classroom: "200", banquet: "200", height: "3.50 – 4.00 mt" },
    ],
    tags: ["Conferences", "Gala Dinners", "Product Launches", "Awards Ceremonies"],
  };

  const meetingRooms = [
    { name: "Bodrum Hall", area: "50 m²", theater: 40, height: "2.80 mt", tags: ["Workshop", "Interview"] },
    { name: "Ankara Hall", area: "120 m²", theater: 100, height: "3.00 mt", tags: ["Seminar", "Training"] },
    { name: "İzmir Hall", area: "90 m²", theater: 80, height: "2.90 mt", tags: ["Conference", "Panel"] },
    { name: "Antalya Hall", area: "75 m²", theater: 60, height: "2.80 mt", tags: ["Meeting", "Presentation"] },
    { name: "Board Room", area: "40 m²", theater: 16, height: "2.80 mt", tags: ["Executive", "VIP"] },
  ];

  const weddingVenues = [
    { name: "Beachfront Ceremony", capacity: "Up to 300 guests", desc: "Exchange vows on pristine white sand with the Aegean Sea as your backdrop.", icon: Waves, features: ["Floral Arch Setup", "White Sand Aisle", "Sunset Timing"] },
    { name: "Garden Terrace", capacity: "Up to 500 guests", desc: "A lush Mediterranean garden surrounded by olive trees and bougainvillea.", icon: TreePine, features: ["Landscaped Gardens", "String Lighting", "Dance Floor"] },
    { name: "Poolside Gala", capacity: "Up to 400 guests", desc: "A glamorous poolside setting with ambient lighting and panoramic sea views.", icon: Sparkles, features: ["Pool Illumination", "Live Music Stage", "Cocktail Stations"] },
  ];

  const weddingServices: { label: string; icon: LucideIcon }[] = [
    { label: "Wedding Coordinator", icon: Gem },
    { label: "Custom Menu Planning", icon: UtensilsCrossed },
    { label: "Floral & Décor Design", icon: Flower2 },
    { label: "DJ & Live Entertainment", icon: Music },
    { label: "Photography", icon: Camera },
    { label: "Bridal Suite & Spa", icon: PartyPopper },
  ];

  const amenities: { label: string; icon: LucideIcon }[] = [
    { label: "Professional Sound System", icon: Volume2 },
    { label: "HD Projector & Screen", icon: MonitorPlay },
    { label: "High-Speed Wi-Fi", icon: Wifi },
    { label: "Wireless Microphone", icon: Mic },
    { label: "Technical Support Team", icon: Headset },
    { label: "Coffee Break Service", icon: Coffee },
  ];

  const configIcons: Record<string, LucideIcon> = { Theater, Classroom: GraduationCap, Banquet: UtensilsCrossed };

  const Tag = ({ label }: { label: string }) => (
    <span className="tag-pill !text-[10px] !px-3 !py-1.5">{label}</span>
  );

  const IconTag = ({ icon: Icon, label }: { icon: LucideIcon; label: string }) => (
    <span className="inline-flex items-center gap-2 font-body text-xs font-medium text-ocean-medium px-4 py-2 border-[1.5px] rounded-full transition-all duration-200 hover:border-gold hover:text-gold" style={{ borderColor: 'hsl(var(--sand))' }}>
      <Icon className="w-3.5 h-3.5 text-gold flex-shrink-0" />
      {label}
    </span>
  );

  return (
    <section id="meetings">
      <div className="factsheet-section h-[35vh] min-h-[280px]">
        <img src={meetingHall} alt="Meeting & Events" className="absolute inset-0 image-cover" />
        <div className="factsheet-hero-overlay" />
        <div className="relative z-10 flex items-end h-full pb-10 px-6">
          <div className="max-w-4xl mx-auto text-center w-full">
            <p className="section-number text-gold-light">08</p>
            <h2 className="factsheet-heading text-4xl md:text-5xl text-primary-foreground">Meetings & Events</h2>
          </div>
        </div>
      </div>

      <div className="section-cream py-14 md:py-20">
        <div className="max-w-6xl mx-auto px-6">
          {/* Main Hall */}
          <div className="text-center mb-12">
            <p className="factsheet-label mb-4">Main Hall</p>
            <h3 className="factsheet-heading text-3xl md:text-4xl text-ocean-deep mb-5">{mainHall.name}</h3>
            <div className="factsheet-divider mb-5" />
            <p className="font-body text-sm text-muted-foreground max-w-2xl mx-auto leading-relaxed mb-5">{mainHall.desc}</p>
            <div className="flex flex-wrap justify-center gap-2">
              {mainHall.tags.map((tag) => <Tag key={tag} label={tag} />)}
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
            {mainHall.stats.map((stat) => (
              <div key={stat.label} className="stat-block !p-5">
                <stat.icon className="w-4 h-4 text-gold mx-auto mb-3" />
                <p className="font-display text-3xl text-ocean-deep">{stat.value}</p>
                <p className="font-body text-[10px] tracking-[0.12em] uppercase text-gold mt-1 font-semibold">{stat.unit}</p>
                <p className="font-body text-xs text-muted-foreground mt-1">{stat.label}</p>
              </div>
            ))}
          </div>

          {/* Configuration Table */}
          <div className="factsheet-card overflow-hidden mb-16">
            <div className="p-4 border-b flex items-center gap-2" style={{ borderColor: 'hsl(var(--sand))' }}>
              <Presentation className="w-3.5 h-3.5 text-gold" />
              <p className="factsheet-label">Hall Configurations</p>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b" style={{ borderColor: 'hsl(var(--sand))' }}>
                    <th className="font-body text-[10px] tracking-[0.1em] uppercase text-muted-foreground font-semibold text-left p-3.5">Section</th>
                    <th className="font-body text-[10px] tracking-[0.1em] uppercase text-muted-foreground font-semibold text-center p-3.5">
                      <span className="inline-flex items-center gap-1"><Maximize className="w-3 h-3" /> Area</span>
                    </th>
                    {(["Theater", "Classroom", "Banquet"] as const).map((col) => {
                      const Icon = configIcons[col];
                      return (
                        <th key={col} className="font-body text-[10px] tracking-[0.1em] uppercase text-muted-foreground font-semibold text-center p-3.5">
                          <span className="inline-flex items-center gap-1"><Icon className="w-3 h-3" /> {col}</span>
                        </th>
                      );
                    })}
                    <th className="font-body text-[10px] tracking-[0.1em] uppercase text-muted-foreground font-semibold text-center p-3.5">
                      <span className="inline-flex items-center gap-1"><ArrowUpFromDot className="w-3 h-3" /> Height</span>
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {mainHall.configurations.map((config) => (
                    <tr key={config.section} className="border-b last:border-b-0 hover:bg-cream/50 transition-colors" style={{ borderColor: 'hsl(var(--sand))' }}>
                      <td className="font-display text-sm text-ocean-deep p-3.5">{config.section}</td>
                      <td className="font-body text-sm text-muted-foreground text-center p-3.5">{config.area}</td>
                      <td className="font-body text-sm text-muted-foreground text-center p-3.5">{config.theater}</td>
                      <td className="font-body text-sm text-muted-foreground text-center p-3.5">{config.classroom}</td>
                      <td className="font-body text-sm text-muted-foreground text-center p-3.5">{config.banquet}</td>
                      <td className="font-body text-sm text-muted-foreground text-center p-3.5">{config.height}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Meeting Rooms */}
          <div className="text-center mb-10">
            <p className="factsheet-label mb-4">MICE</p>
            <h3 className="factsheet-heading text-3xl md:text-4xl text-ocean-deep mb-5">Meeting Rooms</h3>
            <div className="factsheet-divider mb-5" />
            <p className="font-body text-sm text-muted-foreground max-w-2xl mx-auto">Modern and professional spaces for meetings of every scale.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-5 mb-16">
            {meetingRooms.map((room) => (
              <div key={room.name} className="factsheet-card p-6">
                <h4 className="font-display text-lg text-ocean-deep mb-4">{room.name}</h4>
                <div className="space-y-2 mb-4">
                  <div className="flex items-center gap-2"><Maximize className="w-3.5 h-3.5 text-gold flex-shrink-0" /><span className="font-body text-xs text-muted-foreground">{room.area}</span></div>
                  <div className="flex items-center gap-2"><Users className="w-3.5 h-3.5 text-gold flex-shrink-0" /><span className="font-body text-xs text-muted-foreground">Theater: {room.theater}</span></div>
                  <div className="flex items-center gap-2"><ArrowUpFromDot className="w-3.5 h-3.5 text-gold flex-shrink-0" /><span className="font-body text-xs text-muted-foreground">Height: {room.height}</span></div>
                </div>
                <div className="pt-3 border-t flex flex-wrap gap-1.5" style={{ borderColor: 'hsl(var(--sand))' }}>
                  {room.tags.map((tag) => <Tag key={tag} label={tag} />)}
                </div>
              </div>
            ))}
          </div>

          {/* Amenities */}
          <div className="text-center mb-8">
            <p className="factsheet-label mb-4">In All Halls</p>
            <div className="factsheet-divider mb-6" />
          </div>
          <div className="flex flex-wrap justify-center gap-3 mb-16">
            {amenities.map((item) => <IconTag key={item.label} icon={item.icon} label={item.label} />)}
          </div>

          {/* Weddings */}
          <div className="text-center mb-12">
            <p className="factsheet-label mb-4">Celebrations</p>
            <h3 className="factsheet-heading text-3xl md:text-4xl text-ocean-deep mb-5">Weddings & Events</h3>
            <div className="factsheet-divider mb-5" />
            <p className="font-body text-sm text-muted-foreground max-w-2xl mx-auto">Create unforgettable moments at breathtaking outdoor venues along the Aegean coast.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-5 mb-16">
            {weddingVenues.map((venue) => (
              <div key={venue.name} className="factsheet-card p-6">
                <div className="flex items-center gap-2 mb-4">
                  <venue.icon className="w-4 h-4 text-gold" />
                  <p className="factsheet-label">Outdoor Venue</p>
                </div>
                <h4 className="font-display text-lg text-ocean-deep mb-2">{venue.name}</h4>
                <p className="font-body text-xs text-muted-foreground leading-relaxed mb-4">{venue.desc}</p>
                <div className="flex items-center gap-2 mb-4">
                  <Users className="w-3.5 h-3.5 text-gold flex-shrink-0" />
                  <span className="font-body text-xs text-muted-foreground">{venue.capacity}</span>
                </div>
                <div className="pt-3 border-t flex flex-wrap gap-1.5" style={{ borderColor: 'hsl(var(--sand))' }}>
                  {venue.features.map((f) => <Tag key={f} label={f} />)}
                </div>
              </div>
            ))}
          </div>

          {/* Wedding Services */}
          <div className="text-center mb-8">
            <p className="factsheet-label mb-4">Wedding Services</p>
            <div className="factsheet-divider mb-6" />
          </div>
          <div className="flex flex-wrap justify-center gap-3 mb-16">
            {weddingServices.map((item) => <IconTag key={item.label} icon={item.icon} label={item.label} />)}
          </div>

          {/* Events Gallery */}
          <div className="text-center mb-10">
            <p className="factsheet-label mb-4">Gallery</p>
            <div className="factsheet-divider mb-6" />
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
            {[
              { src: eventCeremony, alt: "Beach Ceremony" },
              { src: eventResortNight, alt: "Resort at Night" },
              { src: eventParty, alt: "Party Fun" },
              { src: eventGardenTable, alt: "Garden Table Setting" },
              { src: eventTerraceCeremony, alt: "Terrace Ceremony" },
              { src: eventAerialTable, alt: "Aerial Table View" },
              { src: eventLiveMusic, alt: "Live Music" },
              { src: eventTableDetail, alt: "Table Details" },
              { src: eventSunsetDinner, alt: "Sunset Dinner" },
              { src: eventDesserts, alt: "Dessert Buffet" },
              { src: eventChampagne, alt: "Champagne Tower" },
              { src: eventToast, alt: "Wedding Toast" },
              { src: eventDinnerParty, alt: "Dinner Celebration" },
              { src: eventTableSetup, alt: "Garden Table Setup" },
              { src: eventAerialDinner, alt: "Aerial Dinner View" },
              { src: eventGardenSetup, alt: "Garden Setting" },
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default MeetingsSection;
