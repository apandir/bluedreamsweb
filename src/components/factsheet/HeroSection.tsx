import heroImage from "@/assets/hero-resort.jpg";

const HeroSection = () => {
  return (
    <section className="factsheet-section h-screen min-h-[700px] flex items-center justify-center">
      <img
        src={heroImage}
        alt="Blue Dreams Resort aerial view"
        className="absolute inset-0 image-cover scale-105"
      />
      <div className="absolute inset-0" style={{
        background: 'linear-gradient(170deg, hsl(207 90% 14% / 0.2) 0%, hsl(207 90% 14% / 0.7) 60%, hsl(207 90% 14% / 0.9) 100%)'
      }} />
      <div className="relative z-10 text-center px-6 max-w-5xl mx-auto flex flex-col items-center">
        <p className="section-number text-gold-light">★★★★★</p>
        <h1 className="factsheet-heading text-5xl md:text-7xl lg:text-[6.5rem] text-primary-foreground mb-8">
          Every Dream Starts<br />With Blue
        </h1>
        <div className="factsheet-divider mb-8" />
        <p className="font-body text-sm md:text-base font-bold tracking-[0.25em] uppercase text-primary-foreground/90">
          Factsheet — Season 2026
        </p>
        <p className="font-body text-xs font-medium tracking-[0.25em] uppercase text-primary-foreground/60 mt-3">
          Bodrum / Torba — Türkiye
        </p>
      </div>
    </section>
  );
};

export default HeroSection;
