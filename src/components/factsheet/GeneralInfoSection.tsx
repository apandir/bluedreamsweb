import { useLanguage } from "@/i18n/LanguageContext";

const GeneralInfoSection = () => {
  const { t } = useLanguage();

  return (
    <section id="general" className="section-dark py-14 md:py-20">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-12">
          <p className="section-number text-gold-light">09</p>
          <h2 className="factsheet-heading text-4xl md:text-5xl text-primary-foreground mb-5">{t.general.sectionTitle}</h2>
          <div className="factsheet-divider" />
        </div>
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <p className="factsheet-label mb-5">{t.general.hotelDetails}</p>
            <div className="space-y-0">
              {t.general.info.map((item) => (
                <div key={item.label} className="flex justify-between py-3 border-b border-primary-foreground/8 hover:border-gold/30 transition-colors">
                  <span className="font-body text-xs tracking-wider uppercase opacity-40 font-medium">{item.label}</span>
                  <span className="font-body text-sm font-medium">{item.value}</span>
                </div>
              ))}
            </div>
          </div>
          <div>
            <p className="factsheet-label mb-5">{t.general.complimentaryLabel}</p>
            <div className="space-y-3">
              {t.general.complimentary.map((item) => (
                <div key={item} className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-gold mt-1.5 flex-shrink-0" />
                  <span className="font-body text-sm opacity-70">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GeneralInfoSection;
