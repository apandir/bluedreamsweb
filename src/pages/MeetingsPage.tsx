import { Link } from "react-router-dom";
import meetingHall from "@/assets/meeting-hall.jpg";
import eventCeremony from "@/assets/event-ceremony.png";
import eventParty from "@/assets/event-party.png";
import { ArrowRight } from "lucide-react";
import { useLanguage } from "@/i18n/LanguageContext";

const MeetingsPage = () => {
  const { t } = useLanguage();
  const w = t.website.meetingsPage;

  const cards = [
    {
      image: meetingHall,
      title: w.meetingCard,
      desc: w.meetingCardDesc,
      link: "/meetings/conferences",
    },
    {
      image: eventCeremony,
      title: w.weddingCard,
      desc: w.weddingCardDesc,
      link: "/meetings/weddings",
    },
    {
      image: eventParty,
      title: w.eventsCard,
      desc: w.eventsCardDesc,
      link: "/meetings/events",
    },
  ];

  return (
    <div>
      {/* Hero */}
      <section className="relative h-[70vh] min-h-[500px]">
        <img
          src={meetingHall}
          alt="Meetings & Events"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-ocean-deep/80 via-ocean-deep/30 to-transparent" />
        <div className="relative z-10 flex flex-col items-center justify-end h-full pb-20 px-6">
          <nav className="absolute top-28 left-6 lg:left-10 flex items-center gap-2 font-body text-xs text-primary-foreground/60">
            <Link to="/" className="hover:text-primary-foreground transition-colors">
              {w.home}
            </Link>
            <span>/</span>
            <span className="text-primary-foreground">{w.title}</span>
          </nav>
          <h1 className="font-display text-4xl md:text-5xl lg:text-6xl text-primary-foreground text-center mb-6">
            {w.title}
          </h1>
          <p className="font-body text-sm md:text-base text-primary-foreground/70 text-center max-w-2xl leading-relaxed">
            {w.heroDesc}
          </p>
        </div>
      </section>

      {/* Cards Section */}
      <section className="bg-background py-20 md:py-28">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {cards.map((card) => (
              <Link
                key={card.link}
                to={card.link}
                className="group relative overflow-hidden rounded-lg aspect-[3/4]"
              >
                <img
                  src={card.image}
                  alt={card.title}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ocean-deep/90 via-ocean-deep/20 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-8">
                  <p className="font-body text-[10px] font-semibold tracking-[0.3em] uppercase text-accent mb-3">
                    {card.title}
                  </p>
                  <p className="font-body text-sm text-primary-foreground/70 leading-relaxed mb-4">
                    {card.desc}
                  </p>
                  <span className="inline-flex items-center gap-2 font-body text-[11px] font-semibold tracking-[0.15em] uppercase text-primary-foreground group-hover:text-accent transition-colors">
                    {w.learnMore}
                    <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-ocean-deep py-20">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <p className="font-body text-[10px] font-semibold tracking-[0.3em] uppercase text-accent mb-4">
            {w.planEvent}
          </p>
          <h2 className="font-display text-3xl md:text-4xl text-primary-foreground mb-6">
            {w.ctaHeading}
          </h2>
          <p className="font-body text-sm text-primary-foreground/60 mb-8 leading-relaxed">
            {w.ctaDesc}
          </p>
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

export default MeetingsPage;
