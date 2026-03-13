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
        background: 'linear-gradient(170deg, hsl(210 55% 12% / 0.15) 0%, hsl(210 55% 12% / 0.65) 60%, hsl(210 55% 12% / 0.88) 100%)'
      }} />
      <div className="relative z-10 text-center px-6 max-w-5xl mx-auto flex flex-col items-center">
        <p className="font-body text-sm tracking-[0.4em] uppercase text-gold-light mb-6">★★★★★</p>
        <h1 className="factsheet-heading text-6xl md:text-8xl lg:text-[7.5rem] text-primary-foreground mb-10">
          Every Dream Starts<br />With Blue
        </h1>
        <div className="factsheet-divider mb-10" />
        <p className="font-body text-sm md:text-base font-medium tracking-[0.25em] uppercase text-primary-foreground/80">
          Factsheet — Season 2026
        </p>
        <p className="font-body text-sm font-normal tracking-[0.2em] uppercase text-primary-foreground/50 mt-3">
          Bodrum / Torba — Türkiye
        </p>
      </div>
    </section>
  );
};

export default HeroSection;
