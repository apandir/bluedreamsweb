import { Link } from "react-router-dom";
import eventParty from "@/assets/event-party.png";
import eventResortNight from "@/assets/event-resort-night.png";
import eventLiveMusic from "@/assets/event-live-music.png";
import eventDinnerParty from "@/assets/event-dinner-party.png";
import eventSunsetDinner from "@/assets/event-sunset-dinner.png";
import eventDesserts from "@/assets/event-desserts.png";
import eventChampagne from "@/assets/event-champagne.png";
import eventGardenSetup from "@/assets/event-garden-setup.png";
import { Users, Music, Sparkles, PartyPopper, Utensils, Star } from "lucide-react";
import { useLanguage } from "@/i18n/LanguageContext";

const eventImages = [eventResortNight, eventLiveMusic, eventDinnerParty, eventSunsetDinner, eventDesserts, eventChampagne, eventGardenSetup, eventParty];

const MeetingsEventsPage = () => {
  const { t } = useLanguage();
  const w = t.website.meetingsPage;

  const eventTypes = [
    { icon: PartyPopper, title: w.eventGala, desc: w.eventGalaDesc },
    { icon: Music, title: w.eventLiveMusic, desc: w.eventLiveMusicDesc },
    { icon: Utensils, title: w.eventDining, desc: w.eventDiningDesc },
    { icon: Star, title: w.eventCorporate, desc: w.eventCorporateDesc },
    { icon: Sparkles, title: w.eventPrivate, desc: w.eventPrivateDesc },
    { icon: Users, title: w.eventTeamBuilding, desc: w.eventTeamBuildingDesc },
  ];

  return (
    <div>
      {/* Hero */}
      <section className="relative h-[60vh] min-h-[450px]">
        <img src={eventParty} alt="Events" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-ocean-deep/80 via-ocean-deep/30 to-transparent" />
        <div className="relative z-10 flex flex-col items-center justify-end h-full pb-16 px-6">
          <nav className="absolute top-28 left-6 lg:left-10 flex items-center gap-2 font-body text-xs text-primary-foreground/60">
            <Link to="/" className="hover:text-primary-foreground transition-colors">{w.home}</Link>
            <span>/</span>
            <Link to="/meetings" className="hover:text-primary-foreground transition-colors">{w.title}</Link>
            <span>/</span>
            <span className="text-primary-foreground">{w.eventsCard}</span>
          </nav>
          <h1 className="font-display text-4xl md:text-5xl text-primary-foreground text-center mb-4">
            {w.eventsCard}
          </h1>
          <p className="font-body text-sm text-primary-foreground/70 text-center max-w-2xl">
            {w.eventsCardDesc}
          </p>
        </div>
      </section>

      {/* Event Types */}
      <section className="bg-background py-20 md:py-28">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-14">
            <p className="font-body text-[10px] font-semibold tracking-[0.3em] uppercase text-accent mb-3">{w.whatWeOffer}</p>
            <h2 className="font-display text-3xl md:text-4xl text-foreground mb-5">{w.eventTypesTitle}</h2>
            <div className="w-12 h-px bg-accent mx-auto" />
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
            {eventTypes.map(({ icon: Icon, title, desc }) => (
              <div key={title} className="border border-border rounded-lg p-8 hover:shadow-lg transition-shadow text-center">
                <Icon className="w-8 h-8 text-accent mx-auto mb-4" />
                <h3 className="font-display text-lg text-foreground mb-3">{title}</h3>
                <p className="font-body text-sm text-muted-foreground leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>

          {/* Gallery */}
          <div className="text-center mb-10">
            <p className="font-body text-[10px] font-semibold tracking-[0.3em] uppercase text-accent mb-3">{w.eventsGallery}</p>
            <div className="w-12 h-px bg-accent mx-auto mb-6" />
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {eventImages.map((img, i) => (
              <div key={i} className="group relative overflow-hidden rounded-lg aspect-[4/3]">
                <img src={img} alt="" className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
                <div className="absolute inset-0 bg-gradient-to-t from-ocean-deep/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-ocean-deep py-20">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <p className="font-body text-[10px] font-semibold tracking-[0.3em] uppercase text-accent mb-4">{w.planEvent}</p>
          <h2 className="font-display text-3xl md:text-4xl text-primary-foreground mb-6">{w.ctaHeading}</h2>
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

export default MeetingsEventsPage;
