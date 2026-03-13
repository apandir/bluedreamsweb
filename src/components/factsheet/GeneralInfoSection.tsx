const GeneralInfoSection = () => {
  const info = [
    { label: "Category", value: "5-Star Resort" },
    { label: "Total Area", value: "55,000 m²" },
    { label: "Beach", value: "700 m (Sandy & Pebbles)" },
    { label: "Season", value: "April — October" },
    { label: "Concept", value: "All Inclusive" },
    { label: "Airport Distance", value: "25 km (Milas-Bodrum)" },
    { label: "City Centre", value: "10 km (Bodrum)" },
    { label: "WiFi", value: "Complimentary High-Speed" },
    { label: "Parking", value: "Free On-Site Parking" },
    { label: "Languages", value: "Turkish, English, German, Russian" },
    { label: "Credit Cards", value: "Visa, MasterCard, Amex" },
    { label: "Check-In / Out", value: "14:00 / 12:00" },
  ];

  const complimentary = [
    "Beach towels & sun loungers",
    "WiFi throughout the resort",
    "Main restaurant buffet (breakfast, lunch, dinner)",
    "Local alcoholic & non-alcoholic beverages",
    "Swimming pools & aqua park",
    "Animation & entertainment programme",
    "Kids club activities",
    "Fitness centre & sauna",
  ];

  return (
    <section id="general" className="section-dark py-20 md:py-28">
      <div className="max-w-5xl mx-auto px-6">
        <div className="text-center mb-16">
          <p className="section-number text-gold-light">09</p>
          <h2 className="factsheet-heading text-4xl md:text-5xl text-primary-foreground mb-6">
            General Information
          </h2>
          <div className="factsheet-divider mb-8" />
        </div>

        <div className="grid md:grid-cols-2 gap-16">
          <div>
            <p className="font-body text-[11px] tracking-[0.2em] uppercase text-gold font-bold mb-8">
              Hotel Details
            </p>
            <div className="space-y-0">
              {info.map((item) => (
                <div key={item.label} className="flex justify-between py-3.5 border-b border-primary-foreground/10 hover:border-gold/30 transition-colors">
                  <span className="font-body text-xs tracking-wider uppercase opacity-40 font-semibold">
                    {item.label}
                  </span>
                  <span className="font-body text-sm font-medium">{item.value}</span>
                </div>
              ))}
            </div>
          </div>
          <div>
            <p className="font-body text-[11px] tracking-[0.2em] uppercase text-gold font-bold mb-8">
              Complimentary Services
            </p>
            <div className="space-y-4">
              {complimentary.map((item) => (
                <div key={item} className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-gold mt-1.5 flex-shrink-0" />
                  <span className="font-body text-sm opacity-70">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GeneralInfoSection;
