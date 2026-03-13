import beachImage from "@/assets/beach-resort.jpg";
import poolActivity from "@/assets/pool-activity.jpg";
import poolAquapark from "@/assets/pool-aquapark.jpg";
import poolIndoor from "@/assets/pool-indoor.jpg";
import poolInfinity from "@/assets/pool-infinity.jpg";
import poolKids from "@/assets/pool-kids.jpg";

const BeachPoolsSection = () => {
  const poolGallery = [
    { name: "Infinity Pool", image: poolInfinity },
    { name: "Activity Pool", image: poolActivity },
    { name: "Aqua Park & Waterslides", image: poolAquapark },
    { name: "Indoor Pool*", image: poolIndoor },
    { name: "Kids Beach Area", image: poolKids },
  ];

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
          <div className="text-center mb-12">
            <p className="factsheet-label mb-4">300m Sandy & Pebbles Beach</p>
            <h3 className="factsheet-heading text-3xl md:text-4xl mb-5">
              Where Azure Meets Sand
            </h3>
            <div className="factsheet-divider mb-5" />
            <p className="font-body text-sm leading-relaxed opacity-70 max-w-2xl mx-auto">
              Our 300-meter long sandy and pebbles beach stretches along the pristine Torba Bay, complemented
              by multiple piers and exclusive relaxing cabanas. Sun loungers and parasols are
              complimentary for all guests.
            </p>
          </div>

          {/* Pool Gallery */}
          <p className="factsheet-label mb-6 text-center">Swimming Pools</p>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {poolGallery.map((pool) => (
              <div key={pool.name} className="group relative overflow-hidden rounded-lg aspect-[4/3]">
                <img
                  src={pool.image}
                  alt={pool.name}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <h4 className="font-display text-base md:text-lg text-primary-foreground">{pool.name}</h4>
                </div>
              </div>
            ))}
          </div>
          <p className="font-body text-[10px] text-primary-foreground/40 mt-4 tracking-wider text-center">* Open only at certain conditions</p>
        </div>
      </div>
    </section>
  );
};

export default BeachPoolsSection;
