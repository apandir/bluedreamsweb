const ActivitiesSection = () => {
  const activities = [
    { category: "Water Sports", items: ["Windsurfing*", "Canoeing*", "Water Polo", "Pedal Boats*", "Jet Ski*"] },
    { category: "Sports", items: ["Fitness Centre", "Table Tennis"] },
    { category: "Entertainment", items: ["Live Music", "DJ Performances", "Theme Nights", "Shows & Animations", "Kids Club"] },
    { category: "Excursions", items: ["Bodrum City Tour*", "Boat Trips*", "Island Hopping*", "Diving Tours*", "Shopping Tours*"] },
  ];

  return (
    <section id="activities" className="section-cream py-14 md:py-20">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-12">
          <p className="section-number text-gold">07</p>
          <h2 className="factsheet-heading text-4xl md:text-5xl text-ocean-deep mb-5">
            Activities & Sports
          </h2>
          <div className="factsheet-divider mb-5" />
          <p className="font-body text-sm text-muted-foreground max-w-2xl mx-auto">
            From adrenaline-pumping water sports to relaxing evening entertainment,
            Blue Dreams Resort offers a complete range of activities for every guest.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
          {activities.map((act) => (
            <div key={act.category} className="factsheet-card p-6">
              <p className="factsheet-label mb-4">{act.category}</p>
              <div className="space-y-3">
                {act.items.map((item) => (
                  <div key={item} className="flex items-center gap-2.5">
                    <div className="w-1.5 h-1.5 rounded-full bg-gold" />
                    <span className="font-body text-sm text-foreground">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <p className="font-body text-[10px] text-muted-foreground text-center mt-6 tracking-wider">* Available at extra charge</p>
      </div>
    </section>
  );
};

export default ActivitiesSection;
