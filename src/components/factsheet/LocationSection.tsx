import bodrumImage from "@/assets/bodrum-location.jpg";
import { useLanguage } from "@/i18n/LanguageContext";

const LocationSection = () => {
  const { t } = useLanguage();

  return (
    <section id="location">
      <div className="factsheet-section h-[35vh] min-h-[280px]">
        <img src={bodrumImage} alt="Bodrum coastline" className="absolute inset-0 image-cover" />
        <div className="factsheet-hero-overlay" />
        <div className="relative z-10 flex items-end h-full pb-10 px-6">
          <div className="max-w-4xl mx-auto text-center w-full">
            <p className="section-number text-gold-light">02</p>
            <h2 className="factsheet-heading text-4xl md:text-5xl text-primary-foreground">{t.location.sectionTitle}</h2>
          </div>
        </div>
      </div>

      <div className="section-dark py-14 md:py-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <p className="factsheet-label mb-4">{t.location.destination}</p>
              <h3 className="factsheet-heading text-3xl md:text-4xl mb-5">{t.location.heading}</h3>
              <div className="factsheet-divider !mx-0 mb-5" />
              <p className="font-body text-sm leading-relaxed opacity-70 mb-4">{t.location.p1}</p>
              <p className="font-body text-sm leading-relaxed opacity-70">{t.location.p2}</p>
            </div>
            <div className="space-y-6">
              <div className="accent-line-left">
                <p className="factsheet-label mb-2">{t.location.climate}</p>
                <p className="font-body text-sm opacity-70">{t.location.climateDesc}</p>
              </div>
              <div className="accent-line-left">
                <p className="factsheet-label mb-2">{t.location.address}</p>
                <p className="font-body text-sm opacity-70 whitespace-pre-line">{t.location.addressValue}</p>
              </div>
              <div className="accent-line-left">
                <p className="factsheet-label mb-3">{t.location.distancesLabel}</p>
                <div className="space-y-3">
                  {t.location.distances.map((d) => (
                    <div key={d.place} className="flex items-center justify-between">
                      <span className="font-body text-sm opacity-60">{d.place}</span>
                      <span className="font-display text-lg text-gold ml-4 whitespace-nowrap">{d.distance}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LocationSection;
