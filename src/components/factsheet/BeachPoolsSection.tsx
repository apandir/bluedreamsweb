import beachImage from "@/assets/beach-resort.jpg";

const BeachPoolsSection = () => {
  const pools = [
    "Infinity Pool",
    "Activity Pool",
    "Children's Pool",
    "Waterslide Pool",
    "Indoor Pool",
  ];

  return (
    <section id="beach">
      <div className="factsheet-section h-[60vh] min-h-[400px]">
        <img src={beachImage} alt="Beach" className="absolute inset-0 image-cover" />
        <div className="factsheet-hero-overlay" />
        <div className="relative z-10 flex items-end h-full pb-16 px-6">
          <div className="max-w-4xl mx-auto text-center w-full">
            <p className="factsheet-label mb-4 text-gold-light">04</p>
            <h2 className="factsheet-heading text-4xl md:text-6xl text-primary-foreground">
              Beach & Pools
            </h2>
          </div>
        </div>
      </div>

      <div className="section-dark py-20 md:py-28">
        <div className="max-w-5xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16">
            <div>
              <p className="factsheet-label mb-4">700m Sandy Beach</p>
              <h3 className="factsheet-heading text-3xl md:text-4xl mb-6">
                Where Azure Meets Sand
              </h3>
              <div className="factsheet-divider !mx-0 mb-8" />
              <p className="font-body text-sm leading-relaxed opacity-80 mb-6">
                Our 700-meter long sandy beach stretches along the pristine Torba Bay, complemented
                by private piers and exclusive relaxing cabanas. Sun loungers and parasols are
                complimentary for all guests.
              </p>
              <p className="font-body text-sm leading-relaxed opacity-80">
                The gentle Aegean waters provide the perfect setting for water sports, swimming,
                and seaside relaxation. Experience the breathtaking sunsets that paint the bay
                in golden hues every evening.
              </p>
            </div>
            <div>
              <p className="font-body text-xs tracking-[0.2em] uppercase text-gold mb-8">
                Swimming Pools
              </p>
              <div className="space-y-0">
                {pools.map((pool, i) => (
                  <div key={pool} className="flex items-center py-4 border-b border-primary-foreground/10">
                    <span className="font-body text-xs text-gold w-8">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span className="font-display text-lg font-light">{pool}</span>
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

export default BeachPoolsSection;
