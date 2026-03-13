import poolImage from "@/assets/pool-resort.jpg";
import beachImage from "@/assets/beach-resort.jpg";

const OverviewSection = () => {
  const stats = [
    { value: "52,000", label: "m² Total Area" },
    { value: "300", label: "m Sandy & Pebbles Beach" },
    { value: "5", label: "Swimming Pools" },
    { value: "25", label: "km to Airport" },
  ];

  const distances = [
    { place: "Bodrum City Center", km: "10" },
    { place: "Bodrum Airport", km: "25" },
    { place: "Yalıkavak", km: "25" },
    { place: "Turgutreis", km: "25" },
    { place: "Gümüşlük", km: "28" },
  ];

  return (
    <section id="overview">
      <div className="factsheet-section h-[60vh] min-h-[400px]">
        <img src={poolImage} alt="Resort pool" className="absolute inset-0 image-cover" />
        <div className="factsheet-hero-overlay" />
        <div className="relative z-10 flex items-end h-full pb-16 px-6">
          <div className="max-w-4xl mx-auto text-center w-full">
            <p className="section-number text-gold-light">01</p>
            <h2 className="factsheet-heading text-5xl md:text-7xl text-primary-foreground">
              Hotel Overview
            </h2>
          </div>
        </div>
      </div>

      <div className="section-cream py-24 md:py-32">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-20 items-start">
            <div>
              <p className="factsheet-label mb-5">Blue Dreams Resort</p>
              <h3 className="factsheet-heading text-4xl md:text-5xl text-ocean-deep mb-8">
                Where Nature Meets Elegance
              </h3>
              <div className="factsheet-divider !mx-0 mb-8" />
              <p className="font-body text-base leading-relaxed text-muted-foreground mb-6">
                Located in the beautiful bay of Torba Zeytinlikahve in Bodrum, Blue Dreams Resort
                offers everything you need for an unforgettable holiday. Our 52,000 m² area features
                unique Bodrum architecture, a 300-meter long sandy and pebbles beach, piers, and private relaxing cabanas.
              </p>
              <p className="font-body text-base leading-relaxed text-muted-foreground">
                The resort caters to all your needs with five swimming pools.
                Whether you're seeking relaxation or adventure, from tennis courts and water
                sports to our world-class Spa services, every moment is crafted for your pleasure.
              </p>

              {/* Distances */}
              <div className="mt-10">
                <p className="factsheet-label mb-5">Distances from Resort</p>
                <div className="grid grid-cols-3 gap-4">
                  {distances.map((d) => (
                    <div key={d.place} className="stat-block !p-5 text-center">
                      <p className="font-display text-3xl text-ocean-deep">{d.km}</p>
                      <p className="font-body text-xs tracking-[0.1em] uppercase text-gold font-semibold mt-1">km</p>
                      <p className="font-body text-xs text-muted-foreground mt-1.5">{d.place}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div className="space-y-8">
              <img src={beachImage} alt="Beach" className="w-full h-80 object-cover rounded-lg" />
              <div className="grid grid-cols-2 gap-5">
                {stats.map((s) => (
                  <div key={s.label} className="stat-block">
                    <p className="font-display text-4xl md:text-5xl text-ocean-deep">{s.value}</p>
                    <p className="font-body text-xs tracking-[0.12em] uppercase text-muted-foreground mt-3 font-medium">{s.label}</p>
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
