const IndexSection = () => {
  const sections = [
    { label: "01", title: "Hotel Overview" },
    { label: "02", title: "Location — Bodrum" },
    { label: "03", title: "Rooms & Suites" },
    { label: "04", title: "Beach & Pools" },
    { label: "05", title: "Food & Beverage" },
    { label: "06", title: "Spa & Wellness" },
    { label: "07", title: "Activities & Sports" },
    { label: "08", title: "General Information" },
    { label: "09", title: "Contact" },
  ];

  return (
    <section className="section-cream py-24 md:py-32">
      <div className="max-w-3xl mx-auto px-6 text-center">
        <p className="factsheet-label mb-4">Contents</p>
        <h2 className="factsheet-heading text-4xl md:text-5xl text-ocean-deep mb-8">
          Index
        </h2>
        <div className="factsheet-divider mb-16" />

        <div className="space-y-0">
          {sections.map((s) => (
            <div
              key={s.label}
              className="flex items-center justify-between py-4 border-b border-sand"
            >
              <span className="font-body text-xs font-semibold tracking-[0.2em] text-gold">
                {s.label}
              </span>
              <span className="font-display text-lg md:text-xl font-light text-foreground">
                {s.title}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default IndexSection;
