const GeneralInfoSection = () => {
  const info = [
    { label: "Category", value: "5-Star Resort" },
    { label: "Total Area", value: "52,000 m²" },
    { label: "Beach", value: "300 m (Sandy & Pebbles)" },
    { label: "Season", value: "April — October" },
    { label: "Concept", value: "All Inclusive" },
    { label: "Airport Distance", value: "25 km (Milas-Bodrum)" },
    { label: "City Centre", value: "10 km (Bodrum)" },
    { label: "WiFi", value: "Complimentary High-Speed" },
    { label: "Parking", value: "Free On-Site Parking" },
    { label: "Languages", value: "Turkish, English, German, Russian" },
    { label: "Credit Cards", value: "Visa, MasterCard, Amex, Troy" },
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
    <section id="general" className="section-dark py-24 md:py-32">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-20">
          <p className="section-number text-gold-light">09</p>
          <h2 className="factsheet-heading text-5xl md:text-6xl text-primary-foreground mb-8">
            General Information
          </h2>
          <div className="factsheet-divider mb-8" />
        </div>

        <div className="grid md:grid-cols-2 gap-20">
          <div>
            <p className="factsheet-label mb-8">
              Hotel Details
            </p>
            <div className="space-y-0">
              {info.map((item) => (
                <div key={item.label} className="flex justify-between py-4 border-b border-primary-foreground/8 hover:border-gold/30 transition-colors">
                  <span className="font-body text-sm tracking-wider uppercase opacity-40 font-medium">
                    {item.label}
                  </span>
                  <span className="font-body text-base font-medium">{item.value}</span>
                </div>
              ))}
            </div>
          </div>
          <div>
            <p className="factsheet-label mb-8">
              Complimentary Services
            </p>
            <div className="space-y-5">
              {complimentary.map((item) => (
                <div key={item} className="flex items-start gap-4">
                  <div className="w-2 h-2 rounded-full bg-gold mt-2 flex-shrink-0" />
                  <span className="font-body text-base opacity-70">{item}</span>
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
