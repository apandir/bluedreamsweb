import heroImage from "@/assets/hero-resort.jpg";

const HeroSection = () => {
  return (
    <section className="factsheet-section h-screen min-h-[700px] flex items-center justify-center">
      <img
        src={heroImage}
        alt="Blue Dreams Resort aerial view"
        className="absolute inset-0 image-cover"
      />
      <div className="factsheet-hero-overlay" />
      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto flex flex-col items-center">
        <p className="factsheet-label mb-6 text-gold-light">★★★★★</p>
        <h1 className="factsheet-heading text-5xl md:text-7xl lg:text-8xl text-primary-foreground mb-6">
          Every Dream Starts<br />With Blue
        </h1>
        <div className="factsheet-divider mb-8" />
        <p className="font-body text-sm md:text-base font-light tracking-[0.15em] uppercase text-primary-foreground/80">
          Factsheet — Season 2026
        </p>
        <p className="font-body text-xs font-light tracking-[0.2em] uppercase text-primary-foreground/60 mt-3">
          Bodrum / Torba — Türkiye
        </p>
      </div>
    </section>
  );
};

export default HeroSection;
