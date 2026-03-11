import diningImage from "@/assets/dining-resort.jpg";

const DiningSection = () => {
  const venues = [
    { name: "Main Restaurant", type: "All Day Dining", desc: "International buffet with live cooking stations" },
    { name: "À la Carte Restaurant", type: "Fine Dining", desc: "Curated Mediterranean and Turkish cuisine" },
    { name: "Beach Restaurant", type: "Seafood", desc: "Fresh catches and Aegean specialties by the sea" },
    { name: "Snack Bar", type: "Casual", desc: "Light bites, grilled items, and refreshments poolside" },
    { name: "Patisserie", type: "Desserts", desc: "Freshly baked pastries, cakes, and Turkish delights" },
  ];

  const bars = [
    "Lobby Bar", "Pool Bar", "Beach Bar", "Vitamin Bar", "Night Club Bar"
  ];

  return (
    <section id="dining">
      <div className="factsheet-section h-[60vh] min-h-[400px]">
        <img src={diningImage} alt="Fine dining" className="absolute inset-0 image-cover" />
        <div className="factsheet-hero-overlay" />
        <div className="relative z-10 flex items-end h-full pb-16 px-6">
          <div className="max-w-4xl mx-auto text-center w-full">
            <p className="factsheet-label mb-4 text-gold-light">05</p>
            <h2 className="factsheet-heading text-4xl md:text-6xl text-primary-foreground">
              Food & Beverage
            </h2>
          </div>
        </div>
      </div>

      <div className="section-cream py-20 md:py-28">
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center mb-16">
            <p className="factsheet-label mb-4">Gastronomy</p>
            <h3 className="factsheet-heading text-3xl md:text-4xl text-ocean-deep mb-6">
              A Feast for Every Sense
            </h3>
            <div className="factsheet-divider mb-8" />
          </div>

          <div className="grid md:grid-cols-3 gap-6 mb-16">
            {venues.map((v) => (
              <div key={v.name} className="factsheet-card p-6">
                <p className="font-body text-[10px] tracking-[0.2em] uppercase text-gold mb-3">
                  {v.type}
                </p>
                <h4 className="font-display text-xl font-light text-ocean-deep mb-2">{v.name}</h4>
                <p className="font-body text-xs text-muted-foreground leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>

          <div className="text-center">
            <p className="font-body text-xs tracking-[0.2em] uppercase text-gold mb-6">Bars & Lounges</p>
            <div className="flex flex-wrap justify-center gap-4">
              {bars.map((bar) => (
                <span
                  key={bar}
                  className="font-display text-base font-light text-ocean-medium px-4 py-2 border border-sand"
                >
                  {bar}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DiningSection;
