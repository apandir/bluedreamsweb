import spaImage from "@/assets/spa-resort.jpg";

const SpaSection = () => {
  return (
    <section id="spa">
      <div className="factsheet-section h-[60vh] min-h-[400px]">
        <img src={spaImage} alt="Spa" className="absolute inset-0 image-cover" />
        <div className="factsheet-hero-overlay" />
        <div className="relative z-10 flex items-end h-full pb-16 px-6">
          <div className="max-w-4xl mx-auto text-center w-full">
            <p className="factsheet-label mb-4 text-gold-light">06</p>
            <h2 className="factsheet-heading text-4xl md:text-6xl text-primary-foreground">
              Spa & Wellness
            </h2>
          </div>
        </div>
      </div>

      <div className="section-dark py-20 md:py-28">
        <div className="max-w-5xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16">
            <div>
              <p className="factsheet-label mb-4">Rejuvenation</p>
              <h3 className="factsheet-heading text-3xl md:text-4xl mb-6">
                Restore Your Inner Balance
              </h3>
              <div className="factsheet-divider !mx-0 mb-8" />
              <p className="font-body text-sm leading-relaxed opacity-80 mb-6">
                Our full-service spa offers a sanctuary of tranquility where ancient wellness traditions
                meet modern techniques. From traditional Turkish hammam experiences to contemporary
                therapeutic treatments, every service is designed to restore and rejuvenate.
              </p>
              <p className="font-body text-sm leading-relaxed opacity-80">
                The spa features indoor and outdoor treatment rooms, a fully equipped fitness
                centre, sauna, steam room, and relaxation areas with panoramic sea views.
              </p>
            </div>
            <div className="space-y-6">
              {[
                { title: "Turkish Hammam", desc: "Traditional cleansing ritual with marble heated beds" },
                { title: "Massage Therapies", desc: "From deep tissue to aromatherapy, tailored to your needs" },
                { title: "Beauty Treatments", desc: "Facial treatments, body wraps, and skincare rituals" },
                { title: "Fitness Centre", desc: "State-of-the-art equipment with personal training available" },
                { title: "Sauna & Steam Room", desc: "Dry and wet heat experiences for total detoxification" },
              ].map((item) => (
                <div key={item.title} className="border-l-2 border-gold pl-6">
                  <p className="font-display text-lg text-primary-foreground">{item.title}</p>
                  <p className="font-body text-xs opacity-60 mt-1">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SpaSection;
