import activitiesHero from "@/assets/activities-hero.jpg";
import actKids from "@/assets/activity-kids.png";
import actFlyboard from "@/assets/activity-flyboard.png";
import actBeach from "@/assets/activity-beach.png";
import actSurf from "@/assets/activity-surf.png";
import actAquapark from "@/assets/activity-aquapark.png";
import actJetski from "@/assets/activity-jetski.png";

const ActivitiesSection = () => {
  const activities = [
    { category: "Water Sports", items: ["Windsurfing*", "Canoeing*", "Water Polo", "Pedal Boats*", "Jet Ski*"] },
    { category: "Sports", items: ["Fitness Centre", "Table Tennis"] },
    { category: "Entertainment", items: ["Live Music", "DJ Performances", "Theme Nights", "Shows & Animations", "Kids Club"] },
    { category: "Excursions", items: ["Bodrum City Tour*", "Boat Trips*", "Island Hopping*", "Diving Tours*", "Shopping Tours*"] },
  ];

  const gallery = [
    { name: "Kids Activities", image: actKids },
    { name: "Flyboarding", image: actFlyboard },
    { name: "Beach Fun", image: actBeach },
    { name: "Surfing", image: actSurf },
    { name: "Aqua Park & Sports", image: actAquapark },
    { name: "Jet Ski", image: actJetski },
  ];

  return (
    <section id="activities">
      <div className="factsheet-section h-[35vh] min-h-[280px]">
        <img src={activitiesHero} alt="Activities & Sports" className="absolute inset-0 image-cover" />
        <div className="factsheet-hero-overlay" />
        <div className="relative z-10 flex items-end h-full pb-10 px-6">
          <div className="max-w-4xl mx-auto text-center w-full">
            <p className="section-number text-gold-light">07</p>
            <h2 className="factsheet-heading text-4xl md:text-5xl text-primary-foreground">
              Activities & Sports
            </h2>
          </div>
        </div>
      </div>

      <div className="section-cream py-14 md:py-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-12">
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

          {/* Gallery */}
          <div className="mt-14">
            <p className="factsheet-label mb-6 text-center">Gallery</p>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {gallery.map((item) => (
                <div key={item.name} className="group relative overflow-hidden rounded-lg aspect-[4/3]">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-4">
                    <h4 className="font-display text-base md:text-lg text-primary-foreground">{item.name}</h4>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ActivitiesSection;
