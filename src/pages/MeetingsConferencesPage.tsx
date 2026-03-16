import { Link } from "react-router-dom";
import meetingHall from "@/assets/meeting-hall.jpg";
import {
  Users, Maximize, ArrowUpFromDot, Presentation,
  Volume2, MonitorPlay, Wifi, Mic, Headset, Coffee,
  GraduationCap, Theater, UtensilsCrossed,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { useLanguage } from "@/i18n/LanguageContext";

const amenityIcons: LucideIcon[] = [Volume2, MonitorPlay, Wifi, Mic, Headset, Coffee];
const configIcons: Record<string, LucideIcon> = { Theater, Classroom: GraduationCap, Banquet: UtensilsCrossed };

const MeetingsConferencesPage = () => {
  const { t } = useLanguage();
  const m = t.meetings;
  const w = t.website.meetingsPage;

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
  const statIcons = [Maximize, Users, ArrowUpFromDot, Presentation];

  return (
    <div>
      {/* Hero */}
      <section className="relative h-[60vh] min-h-[450px]">
        <img src={meetingHall} alt="Meetings" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-ocean-deep/80 via-ocean-deep/30 to-transparent" />
        <div className="relative z-10 flex flex-col items-center justify-end h-full pb-16 px-6">
          <nav className="absolute top-28 left-6 lg:left-10 flex items-center gap-2 font-body text-xs text-primary-foreground/60">
            <Link to="/" className="hover:text-primary-foreground transition-colors">{w.home}</Link>
            <span>/</span>
            <Link to="/meetings" className="hover:text-primary-foreground transition-colors">{w.title}</Link>
            <span>/</span>
            <span className="text-primary-foreground">{w.meetingCard}</span>
          </nav>
          <h1 className="font-display text-4xl md:text-5xl text-primary-foreground text-center mb-4">
            {w.meetingCard}
          </h1>
          <p className="font-body text-sm text-primary-foreground/70 text-center max-w-2xl">
            {w.meetingCardDesc}
          </p>
        </div>
      </section>

      {/* Main Hall */}
      <section className="bg-background py-20 md:py-28">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-14">
            <p className="font-body text-[10px] font-semibold tracking-[0.3em] uppercase text-accent mb-3">{m.mainHall}</p>
            <h2 className="font-display text-3xl md:text-4xl text-foreground mb-5">{m.hallName}</h2>
            <div className="w-12 h-px bg-accent mx-auto mb-5" />
            <p className="font-body text-sm text-muted-foreground max-w-2xl mx-auto leading-relaxed">{m.hallDesc}</p>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-14">
            {m.stats.map((stat, i) => {
              const Icon = statIcons[i];
              return (
                <div key={stat.label} className="bg-secondary rounded-lg p-6 text-center">
                  <Icon className="w-5 h-5 text-accent mx-auto mb-3" />
                  <p className="font-display text-3xl text-foreground">{statValues[i]}</p>
                  <p className="font-body text-[10px] tracking-[0.12em] uppercase text-accent mt-1 font-semibold">{stat.unit}</p>
                  <p className="font-body text-xs text-muted-foreground mt-1">{stat.label}</p>
                </div>
              );
            })}
          </div>

          {/* Tags */}
          <div className="flex flex-wrap justify-center gap-2 mb-16">
            {m.tags.map((tag) => (
              <span key={tag} className="font-body text-[10px] font-semibold tracking-[0.1em] uppercase text-muted-foreground border border-border px-4 py-2 rounded-full">
                {tag}
              </span>
            ))}
          </div>

          {/* Configuration Table */}
          <div className="mb-20">
            <div className="flex items-center gap-2 mb-6">
              <Presentation className="w-4 h-4 text-accent" />
              <h3 className="font-body text-[10px] font-semibold tracking-[0.2em] uppercase text-muted-foreground">{m.hallConfigurations}</h3>
            </div>
            <div className="border border-border rounded-lg overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="bg-secondary">
                      <th className="font-body text-[10px] tracking-[0.1em] uppercase text-muted-foreground font-semibold text-left p-4">{m.configHeaders.section}</th>
                      <th className="font-body text-[10px] tracking-[0.1em] uppercase text-muted-foreground font-semibold text-center p-4">
                        <span className="inline-flex items-center gap-1"><Maximize className="w-3 h-3" /> {m.configHeaders.area}</span>
                      </th>
                      {(["Theater", "Classroom", "Banquet"] as const).map((col) => {
                        const Icon = configIcons[col];
                        const key = col.toLowerCase() as "theater" | "classroom" | "banquet";
                        return (
                          <th key={col} className="font-body text-[10px] tracking-[0.1em] uppercase text-muted-foreground font-semibold text-center p-4">
                            <span className="inline-flex items-center gap-1"><Icon className="w-3 h-3" /> {m.configHeaders[key]}</span>
                          </th>
                        );
                      })}
                      <th className="font-body text-[10px] tracking-[0.1em] uppercase text-muted-foreground font-semibold text-center p-4">
                        <span className="inline-flex items-center gap-1"><ArrowUpFromDot className="w-3 h-3" /> {m.configHeaders.height}</span>
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {mainHallConfigs.map((config) => (
                      <tr key={config.section} className="border-t border-border hover:bg-secondary/50 transition-colors">
                        <td className="font-display text-sm text-foreground p-4">{config.section}</td>
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
          </div>

          {/* Meeting Rooms */}
          <div className="text-center mb-12">
            <p className="font-body text-[10px] font-semibold tracking-[0.3em] uppercase text-accent mb-3">{m.meetingRoomsLabel}</p>
            <h2 className="font-display text-3xl md:text-4xl text-foreground mb-5">{m.meetingRoomsTitle}</h2>
            <div className="w-12 h-px bg-accent mx-auto mb-5" />
            <p className="font-body text-sm text-muted-foreground max-w-2xl mx-auto">{m.meetingRoomsDesc}</p>
          </div>

          <div className="grid md:grid-cols-3 gap-5 mb-16">
            {meetingRooms.map((room) => (
              <div key={room.name} className="border border-border rounded-lg p-6 hover:shadow-lg transition-shadow">
                <h4 className="font-display text-lg text-foreground mb-4">{room.name}</h4>
                <div className="space-y-2 mb-4">
                  <div className="flex items-center gap-2"><Maximize className="w-3.5 h-3.5 text-accent" /><span className="font-body text-xs text-muted-foreground">{room.area}</span></div>
                  <div className="flex items-center gap-2"><Users className="w-3.5 h-3.5 text-accent" /><span className="font-body text-xs text-muted-foreground">Theater: {room.theater}</span></div>
                  <div className="flex items-center gap-2"><ArrowUpFromDot className="w-3.5 h-3.5 text-accent" /><span className="font-body text-xs text-muted-foreground">Height: {room.height}</span></div>
                </div>
                <div className="pt-3 border-t border-border flex flex-wrap gap-1.5">
                  {room.tags.map((tag) => (
                    <span key={tag} className="font-body text-[10px] font-semibold tracking-[0.1em] uppercase text-muted-foreground bg-secondary px-3 py-1.5 rounded-full">{tag}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Amenities */}
          <div className="text-center mb-8">
            <p className="font-body text-[10px] font-semibold tracking-[0.3em] uppercase text-accent mb-3">{m.inAllHalls}</p>
            <div className="w-12 h-px bg-accent mx-auto mb-6" />
          </div>
          <div className="flex flex-wrap justify-center gap-3 mb-16">
            {m.amenities.map((label, i) => (
              <span key={label} className="inline-flex items-center gap-2 font-body text-xs font-medium text-muted-foreground px-4 py-2 border border-border rounded-full hover:border-accent hover:text-accent transition-colors">
                {(() => { const Icon = amenityIcons[i]; return <Icon className="w-3.5 h-3.5 text-accent" />; })()}
                {label}
              </span>
            ))}
          </div>

          {/* Contact CTA */}
          <div className="bg-secondary rounded-lg p-10 text-center">
            <p className="font-body text-[10px] font-semibold tracking-[0.3em] uppercase text-accent mb-3">{w.planEvent}</p>
            <h3 className="font-display text-2xl text-foreground mb-4">{w.ctaHeading}</h3>
            <a
              href="mailto:sales@bluedreamsresort.com"
              className="inline-block font-body text-[11px] font-semibold tracking-[0.15em] uppercase bg-accent hover:bg-accent/90 text-accent-foreground px-8 py-3 rounded-sm transition-colors"
            >
              {w.contactUs}
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default MeetingsConferencesPage;
