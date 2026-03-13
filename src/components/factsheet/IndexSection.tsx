const IndexSection = () => {
  const sections = [
    { label: "01", title: "Hotel Overview", href: "#overview" },
    { label: "02", title: "Location — Bodrum", href: "#location" },
    { label: "03", title: "Rooms & Suites", href: "#rooms" },
    { label: "04", title: "Beach & Pools", href: "#beach" },
    { label: "05", title: "Food & Beverage", href: "#dining" },
    { label: "06", title: "Spa & Wellness", href: "#spa" },
    { label: "07", title: "Activities & Sports", href: "#activities" },
    { label: "08", title: "Meetings & Events", href: "#meetings" },
    { label: "09", title: "General Information", href: "#general" },
    { label: "10", title: "Contact", href: "#contact" },
  ];

  return (
    <section className="section-dark py-16 md:py-20">
      <div className="max-w-3xl mx-auto px-6 text-center">
        <p className="factsheet-label mb-3">Contents</p>
        <h2 className="factsheet-heading text-4xl md:text-5xl text-primary-foreground mb-6">
          Index
        </h2>
        <div className="factsheet-divider mb-10" />

        <div className="space-y-0">
          {sections.map((s) => (
            <a
              key={s.label}
              href={s.href}
              className="group flex items-center justify-between py-4 border-b border-primary-foreground/8 hover:border-gold/40 px-4 -mx-4 transition-all duration-300 cursor-pointer"
            >
              <span className="font-body text-xs font-semibold tracking-[0.3em] text-gold/70 group-hover:text-gold transition-colors">
                {s.label}
              </span>
              <span className="font-display text-xl md:text-2xl text-primary-foreground/70 group-hover:text-primary-foreground transition-colors">
                {s.title}
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default IndexSection;
