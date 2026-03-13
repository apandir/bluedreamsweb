import heroImage from "@/assets/hero-resort.jpg";
import { useLanguage } from "@/i18n/LanguageContext";

const HeroSection = () => {
  const { t } = useLanguage();
  return (
    <section className="factsheet-section h-[85vh] min-h-[550px] flex items-center justify-center">
      <img src={heroImage} alt="Blue Dreams Resort aerial view" className="absolute inset-0 image-cover scale-105" />
      <div className="absolute inset-0" style={{ background: 'linear-gradient(170deg, hsl(210 55% 12% / 0.15) 0%, hsl(210 55% 12% / 0.65) 60%, hsl(210 55% 12% / 0.88) 100%)' }} />
      <div className="relative z-10 text-center px-6 max-w-5xl mx-auto flex flex-col items-center">
        <p className="font-body text-xs tracking-[0.4em] uppercase text-gold-light mb-4">★★★★★</p>
        <h1 className="factsheet-heading text-5xl md:text-7xl lg:text-[6rem] text-primary-foreground mb-6">{t.hero.tagline}</h1>
        <div className="factsheet-divider mb-6" />
        <p className="font-body text-xs md:text-sm font-medium tracking-[0.25em] uppercase text-primary-foreground/80">{t.hero.subtitle}</p>
        <p className="font-body text-xs font-normal tracking-[0.2em] uppercase text-primary-foreground/50 mt-2">{t.hero.location}</p>
      </div>
    </section>
  );
};

export default HeroSection;
