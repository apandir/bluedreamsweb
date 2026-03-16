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
  Users, Maximize, ArrowUpFromDot,
  Volume2, MonitorPlay, Wifi, Mic, Headset, Coffee,
  Waves, TreePine, Sparkles, Music, Camera, Gem,
  UtensilsCrossed, Flower2, PartyPopper,
  Presentation, GraduationCap, Theater,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { useLanguage } from "@/i18n/LanguageContext";

const galleryImages = [eventCeremony, eventResortNight, eventParty, eventGardenTable, eventTerraceCeremony, eventAerialTable, eventLiveMusic, eventTableDetail, eventSunsetDinner, eventDesserts, eventChampagne, eventToast, eventDinnerParty, eventTableSetup, eventAerialDinner, eventGardenSetup];
const venueIcons = [Waves, TreePine, Sparkles];
const amenityIcons: LucideIcon[] = [Volume2, MonitorPlay, Wifi, Mic, Headset, Coffee];
const serviceIcons: LucideIcon[] = [Gem, UtensilsCrossed, Flower2, Music, Camera, PartyPopper];
const configIcons: Record<string, LucideIcon> = { Theater, Classroom: GraduationCap, Banquet: UtensilsCrossed };

const MeetingsSection = () => {
  const { t } = useLanguage();

  const mainHallConfigs = [
    { section: "Istanbul (Full)", area: "770", theater: "700", classroom: "450", banquet: "650", height: "3.50 – 4.00 mt" },
    { section: "Europe (Stage Side)", area: "400", theater: "450", classroom: "250", banquet: "450", height: "3.50 – 4.00 mt" },
    { section: "Asia (Pool Side)", area: "370", theater: "350", classroom: "200", banquet: "200", height: "3.50 – 4.00 mt" },
  ];

  const meetingRooms = [
    { name: "Stockholm", area: "20 m²", theater: 20, classroom: 10, banquet: 10, height: "2.70 m" },
    { name: "Belek", area: "20 m²", theater: 20, classroom: 10, banquet: 10, height: "2.70 m" },
    { name: "Marmaris", area: "22 m²", theater: 20, classroom: 10, banquet: 10, height: "2.70 m" },
    { name: "Turunç", area: "30 m²", theater: 20, classroom: 10, banquet: 10, height: "3.20 m" },
    { name: "Salamis", area: "35 m²", theater: 20, classroom: 10, banquet: 10, height: "2.70 m" },
  ];

  const statValues = ["770", "700", "4.0", "2"];

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
            <h2 className="factsheet-heading text-4xl md:text-5xl text-primary-foreground">{t.meetings.sectionTitle}</h2>
          </div>
        </div>
      </div>

      <div className="section-cream py-14 md:py-20">
        <div className="max-w-6xl mx-auto px-6">
          {/* Main Hall */}
          <div className="text-center mb-12">
            <p className="factsheet-label mb-4">{t.meetings.mainHall}</p>
            <h3 className="factsheet-heading text-3xl md:text-4xl text-ocean-deep mb-5">{t.meetings.hallName}</h3>
            <div className="factsheet-divider mb-5" />
            <p className="font-body text-sm text-muted-foreground max-w-2xl mx-auto leading-relaxed mb-5">{t.meetings.hallDesc}</p>
            <div className="flex flex-wrap justify-center gap-2">
              {t.meetings.tags.map((tag) => <Tag key={tag} label={tag} />)}
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
            {t.meetings.stats.map((stat, i) => (
              <div key={stat.label} className="stat-block !p-5">
                {[Maximize, Users, ArrowUpFromDot, Presentation][i] && (() => { const Icon = [Maximize, Users, ArrowUpFromDot, Presentation][i]; return <Icon className="w-4 h-4 text-gold mx-auto mb-3" />; })()}
                <p className="font-display text-3xl text-ocean-deep">{statValues[i]}</p>
                <p className="font-body text-[10px] tracking-[0.12em] uppercase text-gold mt-1 font-semibold">{stat.unit}</p>
                <p className="font-body text-xs text-muted-foreground mt-1">{stat.label}</p>
              </div>
            ))}
          </div>

          {/* Configuration Table */}
          <div className="factsheet-card overflow-hidden mb-16">
            <div className="p-4 border-b flex items-center gap-2" style={{ borderColor: 'hsl(var(--sand))' }}>
              <Presentation className="w-3.5 h-3.5 text-gold" />
              <p className="factsheet-label">{t.meetings.hallConfigurations}</p>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b" style={{ borderColor: 'hsl(var(--sand))' }}>
                    <th className="font-body text-[10px] tracking-[0.1em] uppercase text-muted-foreground font-semibold text-left p-3.5">{t.meetings.configHeaders.section}</th>
                    <th className="font-body text-[10px] tracking-[0.1em] uppercase text-muted-foreground font-semibold text-center p-3.5">
                      <span className="inline-flex items-center gap-1"><Maximize className="w-3 h-3" /> {t.meetings.configHeaders.area}</span>
                    </th>
                    {(["Theater", "Classroom", "Banquet"] as const).map((col) => {
                      const Icon = configIcons[col];
                      const headerKey = col.toLowerCase() as "theater" | "classroom" | "banquet";
                      return (
                        <th key={col} className="font-body text-[10px] tracking-[0.1em] uppercase text-muted-foreground font-semibold text-center p-3.5">
                          <span className="inline-flex items-center gap-1"><Icon className="w-3 h-3" /> {t.meetings.configHeaders[headerKey]}</span>
                        </th>
                      );
                    })}
                    <th className="font-body text-[10px] tracking-[0.1em] uppercase text-muted-foreground font-semibold text-center p-3.5">
                      <span className="inline-flex items-center gap-1"><ArrowUpFromDot className="w-3 h-3" /> {t.meetings.configHeaders.height}</span>
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {mainHallConfigs.map((config) => (
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
            <p className="factsheet-label mb-4">{t.meetings.meetingRoomsLabel}</p>
            <h3 className="factsheet-heading text-3xl md:text-4xl text-ocean-deep mb-5">{t.meetings.meetingRoomsTitle}</h3>
            <div className="factsheet-divider mb-5" />
            <p className="font-body text-sm text-muted-foreground max-w-2xl mx-auto">{t.meetings.meetingRoomsDesc}</p>
          </div>

          <div className="factsheet-card overflow-hidden mb-16">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b" style={{ borderColor: 'hsl(var(--sand))' }}>
                    <th className="font-body text-[10px] tracking-[0.1em] uppercase text-muted-foreground font-semibold text-left p-3.5">Room</th>
                    <th className="font-body text-[10px] tracking-[0.1em] uppercase text-muted-foreground font-semibold text-center p-3.5">Area</th>
                    <th className="font-body text-[10px] tracking-[0.1em] uppercase text-muted-foreground font-semibold text-center p-3.5">Theater</th>
                    <th className="font-body text-[10px] tracking-[0.1em] uppercase text-muted-foreground font-semibold text-center p-3.5">Classroom</th>
                    <th className="font-body text-[10px] tracking-[0.1em] uppercase text-muted-foreground font-semibold text-center p-3.5">Banquet</th>
                    <th className="font-body text-[10px] tracking-[0.1em] uppercase text-muted-foreground font-semibold text-center p-3.5">Height</th>
                  </tr>
                </thead>
                <tbody>
                  {meetingRooms.map((room) => (
                    <tr key={room.name} className="border-b last:border-b-0 hover:bg-cream/50 transition-colors" style={{ borderColor: 'hsl(var(--sand))' }}>
                      <td className="font-display text-sm text-ocean-deep p-3.5">{room.name}</td>
                      <td className="font-body text-sm text-muted-foreground text-center p-3.5">{room.area}</td>
                      <td className="font-body text-sm text-muted-foreground text-center p-3.5">{room.theater}</td>
                      <td className="font-body text-sm text-muted-foreground text-center p-3.5">{room.classroom}</td>
                      <td className="font-body text-sm text-muted-foreground text-center p-3.5">{room.banquet}</td>
                      <td className="font-body text-sm text-muted-foreground text-center p-3.5">{room.height}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Amenities */}
          <div className="text-center mb-8">
            <p className="factsheet-label mb-4">{t.meetings.inAllHalls}</p>
            <div className="factsheet-divider mb-6" />
          </div>
          <div className="flex flex-wrap justify-center gap-3 mb-16">
            {t.meetings.amenities.map((label, i) => <IconTag key={label} icon={amenityIcons[i]} label={label} />)}
          </div>

          {/* Weddings */}
          <div className="text-center mb-12">
            <p className="factsheet-label mb-4">{t.meetings.celebrationsLabel}</p>
            <h3 className="factsheet-heading text-3xl md:text-4xl text-ocean-deep mb-5">{t.meetings.weddingsTitle}</h3>
            <div className="factsheet-divider mb-5" />
            <p className="font-body text-sm text-muted-foreground max-w-2xl mx-auto">{t.meetings.weddingsDesc}</p>
          </div>

          <div className="grid md:grid-cols-3 gap-5 mb-16">
            {t.meetings.venues.map((venue, i) => {
              const VenueIcon = venueIcons[i];
              return (
                <div key={venue.name} className="factsheet-card p-6">
                  <div className="flex items-center gap-2 mb-4">
                    <VenueIcon className="w-4 h-4 text-gold" />
                    <p className="factsheet-label">{t.meetings.outdoorVenue}</p>
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
              );
            })}
          </div>

          {/* Wedding Services */}
          <div className="text-center mb-8">
            <p className="factsheet-label mb-4">{t.meetings.weddingServicesLabel}</p>
            <div className="factsheet-divider mb-6" />
          </div>
          <div className="flex flex-wrap justify-center gap-3 mb-16">
            {t.meetings.weddingServices.map((label, i) => <IconTag key={label} icon={serviceIcons[i]} label={label} />)}
          </div>

          {/* Events Gallery */}
          <div className="text-center mb-10">
            <p className="factsheet-label mb-4">{t.meetings.galleryLabel}</p>
            <div className="factsheet-divider mb-6" />
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
            {t.meetings.galleryAlts.map((alt, i) => (
              <div key={alt} className="group relative overflow-hidden rounded-lg aspect-[4/3]">
                <img src={galleryImages[i]} alt={alt} className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
                <div className="absolute inset-0 bg-gradient-to-t from-ocean-deep/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <p className="absolute bottom-3 left-3 right-3 font-body text-xs text-primary-foreground opacity-0 group-hover:opacity-100 transition-opacity duration-300">{alt}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default MeetingsSection;
