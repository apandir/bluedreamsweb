import poolImage from "@/assets/pool-resort.jpg";
import beachImage from "@/assets/beach-resort.jpg";

const OverviewSection = () => {
  return (
    <section id="overview">
      {/* Full-bleed image with text overlay */}
      <div className="factsheet-section h-[60vh] min-h-[400px]">
        <img src={poolImage} alt="Resort pool" className="absolute inset-0 image-cover" />
        <div className="factsheet-hero-overlay" />
        <div className="relative z-10 flex items-end h-full pb-16 px-6">
          <div className="max-w-4xl mx-auto text-center w-full">
            <p className="factsheet-label mb-4 text-gold-light">01</p>
            <h2 className="factsheet-heading text-4xl md:text-6xl text-primary-foreground">
              Hotel Overview
            </h2>
          </div>
        </div>
      </div>

      {/* Content */}
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
                offers everything you need for an unforgettable holiday. Our 55,000 m² area features
                unique Bodrum architecture, a 700-meter long sandy beach, piers, and private relaxing cabanas.
              </p>
              <p className="font-body text-sm leading-relaxed text-muted-foreground">
                The resort caters to all your needs with five swimming pools and one pool equipped with
                slides. Whether you're seeking relaxation or adventure, from tennis courts and water
                sports to our world-class Spa services, every moment is crafted for your pleasure.
              </p>
            </div>
            <div className="space-y-6">
              <img src={beachImage} alt="Beach" className="w-full h-72 object-cover" />
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center py-6 bg-card">
                  <p className="font-display text-3xl font-light text-ocean-medium">55,000</p>
                  <p className="font-body text-xs tracking-[0.15em] uppercase text-muted-foreground mt-1">m² Total Area</p>
                </div>
                <div className="text-center py-6 bg-card">
                  <p className="font-display text-3xl font-light text-ocean-medium">700</p>
                  <p className="font-body text-xs tracking-[0.15em] uppercase text-muted-foreground mt-1">m Sandy Beach</p>
                </div>
                <div className="text-center py-6 bg-card">
                  <p className="font-display text-3xl font-light text-ocean-medium">5+1</p>
                  <p className="font-body text-xs tracking-[0.15em] uppercase text-muted-foreground mt-1">Swimming Pools</p>
                </div>
                <div className="text-center py-6 bg-card">
                  <p className="font-display text-3xl font-light text-ocean-medium">25</p>
                  <p className="font-body text-xs tracking-[0.15em] uppercase text-muted-foreground mt-1">km to Airport</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OverviewSection;
