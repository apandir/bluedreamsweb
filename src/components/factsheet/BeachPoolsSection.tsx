import beachImage from "@/assets/beach-resort.jpg";

const BeachPoolsSection = () => {
  const pools = ["Infinity Pool", "Activity Pool", "Children's Pool", "Waterslide Pool", "Indoor Pool*"];

  return (
    <section id="beach">
      <div className="factsheet-section h-[35vh] min-h-[280px]">
        <img src={beachImage} alt="Beach" className="absolute inset-0 image-cover" />
        <div className="factsheet-hero-overlay" />
        <div className="relative z-10 flex items-end h-full pb-10 px-6">
          <div className="max-w-4xl mx-auto text-center w-full">
            <p className="section-number text-gold-light">04</p>
            <h2 className="factsheet-heading text-4xl md:text-5xl text-primary-foreground">
              Beach & Pools
            </h2>
          </div>
        </div>
      </div>

      <div className="section-dark py-14 md:py-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <p className="factsheet-label mb-4">300m Sandy & Pebbles Beach</p>
              <h3 className="factsheet-heading text-3xl md:text-4xl mb-5">
                Where Azure Meets Sand
              </h3>
              <div className="factsheet-divider !mx-0 mb-5" />
              <p className="font-body text-sm leading-relaxed opacity-70 mb-4">
                Our 300-meter long sandy and pebbles beach stretches along the pristine Torba Bay, complemented
                by multiple piers and exclusive relaxing cabanas. Sun loungers and parasols are
                complimentary for all guests.
              </p>
              <p className="font-body text-sm leading-relaxed opacity-70">
                The gentle Aegean waters provide the perfect setting for water sports, swimming,
                and seaside relaxation. Experience the breathtaking sunsets that paint the bay
                in golden hues every evening.
              </p>
            </div>
            <div>
              <p className="factsheet-label mb-6">Swimming Pools</p>
              <div className="space-y-0">
                {pools.map((pool, i) => (
                  <div key={pool} className="group flex items-center py-3.5 border-b border-primary-foreground/8 hover:border-gold/30 transition-colors">
                    <span className="font-body text-xs text-gold font-semibold w-8">{String(i + 1).padStart(2, "0")}</span>
                    <span className="font-display text-lg group-hover:text-gold transition-colors">{pool}</span>
                  </div>
                ))}
              </div>
              <p className="font-body text-[10px] text-primary-foreground/40 mt-4 tracking-wider">* Open only at certain conditions</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BeachPoolsSection;
