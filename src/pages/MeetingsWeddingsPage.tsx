import { Link } from "react-router-dom";
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
  Users, Waves, TreePine, Sparkles,
  Gem, UtensilsCrossed, Flower2, Music, Camera, PartyPopper,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { useLanguage } from "@/i18n/LanguageContext";

const galleryImages = [eventCeremony, eventResortNight, eventParty, eventGardenTable, eventTerraceCeremony, eventAerialTable, eventLiveMusic, eventTableDetail, eventSunsetDinner, eventDesserts, eventChampagne, eventToast, eventDinnerParty, eventTableSetup, eventAerialDinner, eventGardenSetup];
const venueIcons: LucideIcon[] = [Waves, TreePine, Sparkles];
const serviceIcons: LucideIcon[] = [Gem, UtensilsCrossed, Flower2, Music, Camera, PartyPopper];

const MeetingsWeddingsPage = () => {
  const { t } = useLanguage();
  const m = t.meetings;
  const w = t.website.meetingsPage;

  return (
    <div>
      {/* Hero */}
      <section className="relative h-[60vh] min-h-[450px]">
        <img src={eventCeremony} alt="Weddings" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-ocean-deep/80 via-ocean-deep/30 to-transparent" />
        <div className="relative z-10 flex flex-col items-center justify-end h-full pb-16 px-6">
          <nav className="absolute top-28 left-6 lg:left-10 flex items-center gap-2 font-body text-xs text-primary-foreground/60">
            <Link to="/" className="hover:text-primary-foreground transition-colors">{w.home}</Link>
            <span>/</span>
            <Link to="/meetings" className="hover:text-primary-foreground transition-colors">{w.title}</Link>
            <span>/</span>
            <span className="text-primary-foreground">{w.weddingCard}</span>
          </nav>
          <h1 className="font-display text-4xl md:text-5xl text-primary-foreground text-center mb-4">
            {m.weddingsTitle}
          </h1>
          <p className="font-body text-sm text-primary-foreground/70 text-center max-w-2xl">
            {m.weddingsDesc}
          </p>
        </div>
      </section>

      {/* Venues */}
      <section className="bg-background py-20 md:py-28">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-14">
            <p className="font-body text-[10px] font-semibold tracking-[0.3em] uppercase text-accent mb-3">{m.celebrationsLabel}</p>
            <h2 className="font-display text-3xl md:text-4xl text-foreground mb-5">{w.venuesTitle}</h2>
            <div className="w-12 h-px bg-accent mx-auto mb-5" />
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-20">
            {m.venues.map((venue, i) => {
              const VenueIcon = venueIcons[i];
              return (
                <div key={venue.name} className="border border-border rounded-lg overflow-hidden hover:shadow-lg transition-shadow">
                  <div className="aspect-[4/3] overflow-hidden">
                    <img
                      src={[eventCeremony, eventGardenTable, eventSunsetDinner][i]}
                      alt={venue.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-6">
                    <div className="flex items-center gap-2 mb-3">
                      <VenueIcon className="w-4 h-4 text-accent" />
                      <p className="font-body text-[10px] font-semibold tracking-[0.15em] uppercase text-accent">{m.outdoorVenue}</p>
                    </div>
                    <h3 className="font-display text-xl text-foreground mb-3">{venue.name}</h3>
                    <p className="font-body text-sm text-muted-foreground leading-relaxed mb-4">{venue.desc}</p>
                    <div className="flex items-center gap-2 mb-4">
                      <Users className="w-3.5 h-3.5 text-accent" />
                      <span className="font-body text-xs text-muted-foreground">{venue.capacity}</span>
                    </div>
                    <div className="pt-3 border-t border-border flex flex-wrap gap-1.5">
                      {venue.features.map((f) => (
                        <span key={f} className="font-body text-[10px] font-semibold tracking-[0.1em] uppercase text-muted-foreground bg-secondary px-3 py-1.5 rounded-full">{f}</span>
                      ))}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Services */}
          <div className="text-center mb-8">
            <p className="font-body text-[10px] font-semibold tracking-[0.3em] uppercase text-accent mb-3">{m.weddingServicesLabel}</p>
            <div className="w-12 h-px bg-accent mx-auto mb-6" />
          </div>
          <div className="flex flex-wrap justify-center gap-3 mb-20">
            {m.weddingServices.map((label, i) => (
              <span key={label} className="inline-flex items-center gap-2 font-body text-xs font-medium text-muted-foreground px-4 py-2 border border-border rounded-full hover:border-accent hover:text-accent transition-colors">
                {(() => { const Icon = serviceIcons[i]; return <Icon className="w-3.5 h-3.5 text-accent" />; })()}
                {label}
              </span>
            ))}
          </div>

          {/* Gallery */}
          <div className="text-center mb-10">
            <p className="font-body text-[10px] font-semibold tracking-[0.3em] uppercase text-accent mb-3">{m.galleryLabel}</p>
            <div className="w-12 h-px bg-accent mx-auto mb-6" />
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
            {m.galleryAlts.map((alt, i) => (
              <div key={alt} className="group relative overflow-hidden rounded-lg aspect-[4/3]">
                <img src={galleryImages[i]} alt={alt} className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
                <div className="absolute inset-0 bg-gradient-to-t from-ocean-deep/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <p className="absolute bottom-3 left-3 right-3 font-body text-xs text-primary-foreground opacity-0 group-hover:opacity-100 transition-opacity duration-300">{alt}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-ocean-deep py-20">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <p className="font-body text-[10px] font-semibold tracking-[0.3em] uppercase text-accent mb-4">{w.planEvent}</p>
          <h2 className="font-display text-3xl md:text-4xl text-primary-foreground mb-6">{w.weddingCta}</h2>
          <a
            href="mailto:sales@bluedreamsresort.com"
            className="inline-block font-body text-[11px] font-semibold tracking-[0.15em] uppercase border border-primary-foreground/40 hover:bg-primary-foreground hover:text-primary text-primary-foreground px-8 py-3 rounded-sm transition-colors"
          >
            {w.contactUs}
          </a>
        </div>
      </section>
    </div>
  );
};

export default MeetingsWeddingsPage;
