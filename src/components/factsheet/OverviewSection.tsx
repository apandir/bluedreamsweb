import poolImage from "@/assets/pool-resort.jpg";
import beachImage from "@/assets/beach-resort.jpg";

const OverviewSection = () => {
  const stats = [
    { value: "52,000", label: "m² Total Area" },
    { value: "300", label: "m Sandy Beach" },
    { value: "5", label: "Swimming Pools" },
    { value: "25", label: "km to Airport" },
  ];

  return (
    <section id="overview">
      <div className="factsheet-section h-[60vh] min-h-[400px]">
        <img src={poolImage} alt="Resort pool" className="absolute inset-0 image-cover" />
        <div className="factsheet-hero-overlay" />
        <div className="relative z-10 flex items-end h-full pb-16 px-6">
          <div className="max-w-4xl mx-auto text-center w-full">
            <p className="section-number text-gold-light">01</p>
            <h2 className="factsheet-heading text-4xl md:text-6xl text-primary-foreground">
              Hotel Overview
            </h2>
          </div>
        </div>
      </div>

      <div className="section-cream py-20 md:py-28">
        <div className="max-w-5xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16 items-start">
            <div>
              <p className="factsheet-label mb-4">Blue Dreams Resort</p>
              <h3 className="factsheet-heading text-3xl md:text-4xl text-ocean-deep mb-6">
                Where Nature Meets Elegance
              </h3>
              <div className="factsheet-divider !mx-0 mb-8" />
              <p className="font-body text-sm leading-relaxed text-muted-foreground mb-6">
                Located in the beautiful bay of Torba Zeytinlikahve in Bodrum, Blue Dreams Resort
                offers everything you need for an unforgettable holiday. Our 52,000 m² area features
                unique Bodrum architecture, a 300-meter long sandy beach, piers, and private relaxing cabanas.
              </p>
              <p className="font-body text-sm leading-relaxed text-muted-foreground">
                The resort caters to all your needs with five swimming pools.
                Whether you're seeking relaxation or adventure, from tennis courts and water
                sports to our world-class Spa services, every moment is crafted for your pleasure.
              </p>
            </div>
            <div className="space-y-6">
              <img src={beachImage} alt="Beach" className="w-full h-72 object-cover" />
              <div className="grid grid-cols-2 gap-4">
                {stats.map((s) => (
                  <div key={s.label} className="stat-block">
                    <p className="font-display text-3xl md:text-4xl font-bold text-ocean-deep">{s.value}</p>
                    <p className="font-body text-[10px] tracking-[0.15em] uppercase text-muted-foreground mt-2 font-semibold">{s.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OverviewSection;
