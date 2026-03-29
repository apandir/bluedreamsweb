import heroImage from "@/assets/hero-resort.jpg";
import { useLanguage } from "@/i18n/LanguageContext";

const HeroSection = () => {
  const { t } = useLanguage();
  return (
    <section className="factsheet-section h-[85vh] min-h-[550px] flex items-center justify-center">
      <img src={heroImage} alt="Blue Dreams Resort aerial view" className="absolute inset-0 image-cover scale-105" />
      <div className="absolute inset-0" style={{ background: 'linear-gradient(170deg, hsl(210 55% 12% / 0.15) 0%, hsl(210 55% 12% / 0.65) 60%, hsl(210 55% 12% / 0.88) 100%)' }} />
      <div className="relative z-10 text-center px-6 max-w-5xl mx-auto flex flex-col items-center" style={{ marginTop: '-30vh' }}>
        <h1 className="factsheet-heading text-5xl md:text-7xl lg:text-[6rem] text-primary-foreground">Blue Dreams Resort</h1>
      </div>
    </section>
  );
};

export default HeroSection;
