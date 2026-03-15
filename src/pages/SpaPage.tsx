import { Link } from "react-router-dom";
import heroImg from "@/assets/spa-hero.jpg";
import spaResortImg from "@/assets/spa-resort.jpg";
import { ChevronRight, MessageCircle } from "lucide-react";

const services = [
  {
    title: "Traditional Turkish Hamam",
    desc: "Renew yourself with traditional kese and foam massage.",
    image: spaResortImg,
  },
  {
    title: "Aromatherapy Massage",
    desc: "Relaxing massage applied with special herbal oils.",
    image: heroImg,
  },
  {
    title: "Skin Care",
    desc: "Deep skin care cures applied with natural products.",
    image: spaResortImg,
  },
  {
    title: "Sauna & Steam Room",
    desc: "Cleanse toxins with Finnish sauna and steam room.",
    image: heroImg,
  },
  {
    title: "Hot Stone Massage",
    desc: "Deep tissue massage with volcanic stones.",
    image: spaResortImg,
  },
];

const SpaPage = () => {
  return (
    <main>
      {/* Hero */}
      <section className="relative h-[80vh] min-h-[500px] flex items-center overflow-hidden">
        <img src={heroImg} alt="The Naya Spa" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-ocean-deep/40" />
        <div className="relative z-10 px-6 lg:px-10 max-w-[1400px] mx-auto w-full">
          <p className="font-body text-xs font-semibold tracking-[0.3em] uppercase text-primary-foreground/60 mb-4">
            Blue Dreams Resort
          </p>
          <h1 className="font-display text-6xl md:text-8xl lg:text-9xl text-primary-foreground leading-[0.9] mb-2">
            THE
          </h1>
          <h1 className="font-display text-6xl md:text-8xl lg:text-9xl text-primary-foreground leading-[0.9] mb-6">
            NAYA
          </h1>
          <div className="w-16 h-[2px] bg-accent mb-4" />
          <p className="font-body text-sm font-semibold tracking-[0.3em] uppercase text-primary-foreground/60">
            Wellness & Spa
          </p>
        </div>
      </section>

      {/* Intro */}
      <section className="py-24 md:py-32 bg-background text-center">
        <div className="max-w-3xl mx-auto px-6">
          <p className="font-body text-lg text-muted-foreground leading-relaxed mb-4">
            Pamper yourself with our special therapies designed to renew your body and soul.
          </p>
          <p className="font-body text-base text-muted-foreground leading-relaxed mb-4">
            Embark on a peaceful journey accompanied by our expert therapists.
          </p>
          <p className="font-body text-base text-muted-foreground leading-relaxed mb-8">
            Relax with traditional hamam, sauna and various massage options.
          </p>
          <a
            href="https://wa.me/905495167803"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 font-body text-sm font-semibold tracking-wider uppercase bg-accent hover:bg-accent/90 text-accent-foreground px-8 py-3 rounded-full transition-colors"
          >
            <MessageCircle className="w-4 h-4" />
            Book Now
          </a>
        </div>
      </section>

      {/* Services */}
      <section className="py-24 md:py-32 section-cream">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
          <p className="font-body text-xs font-semibold tracking-[0.3em] uppercase text-accent text-center mb-4">
            Treat Yourself
          </p>
          <h2 className="font-display text-3xl md:text-4xl text-foreground text-center mb-16">
            Our Services
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((s) => (
              <div key={s.title} className="group rounded-2xl overflow-hidden bg-card shadow-sm hover:shadow-md transition-shadow">
                <div className="aspect-[4/3] overflow-hidden">
                  <img
                    src={s.image}
                    alt={s.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="p-6">
                  <h4 className="font-display text-xl text-foreground mb-2">{s.title}</h4>
                  <p className="font-body text-sm text-muted-foreground mb-4">{s.desc}</p>
                  <a
                    href="https://wa.me/905495167803"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 font-body text-sm font-semibold text-accent hover:text-accent/80 transition-colors"
                  >
                    Book Now <ChevronRight className="w-4 h-4" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
};

export default SpaPage;
