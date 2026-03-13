import spaImage from "@/assets/spa-resort.jpg";
import { useLanguage } from "@/i18n/LanguageContext";

const SpaSection = () => {
  const { t } = useLanguage();
  return (
    <section id="spa">
      <div className="factsheet-section h-[35vh] min-h-[280px]">
        <img src={spaImage} alt="Spa" className="absolute inset-0 image-cover" />
        <div className="factsheet-hero-overlay" />
        <div className="relative z-10 flex items-end h-full pb-10 px-6">
          <div className="max-w-4xl mx-auto text-center w-full">
            <p className="section-number text-gold-light">06</p>
            <h2 className="factsheet-heading text-4xl md:text-5xl text-primary-foreground">{t.spa.sectionTitle}</h2>
          </div>
        </div>
      </div>
      <div className="section-dark py-14 md:py-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <p className="factsheet-label mb-4">{t.spa.rejuvenation}</p>
              <h3 className="factsheet-heading text-3xl md:text-4xl mb-5">{t.spa.heading}</h3>
              <div className="factsheet-divider !mx-0 mb-5" />
              <p className="font-body text-sm leading-relaxed opacity-70 mb-4">{t.spa.p1}</p>
              <p className="font-body text-sm leading-relaxed opacity-70">{t.spa.p2}</p>
            </div>
            <div className="space-y-5">
              {t.spa.services.map((item) => (
                <div key={item.title} className="accent-line-left">
                  <p className="font-display text-lg text-primary-foreground">{item.title}</p>
                  <p className="font-body text-xs opacity-50 mt-1">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SpaSection;
