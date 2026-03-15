import poolImage from "@/assets/pool-resort.jpg";
import beachImage from "@/assets/beach-resort.jpg";
import { useLanguage } from "@/i18n/LanguageContext";

const OverviewSection = () => {
  const { t } = useLanguage();

  return (
    <section id="overview">
      <div className="factsheet-section h-[35vh] min-h-[280px]">
        <img src={poolImage} alt="Resort pool" className="absolute inset-0 image-cover" />
        <div className="factsheet-hero-overlay" />
        <div className="relative z-10 flex items-end h-full pb-10 px-6">
          <div className="max-w-4xl mx-auto text-center w-full">
            <p className="section-number text-gold-light">01</p>
            <h2 className="factsheet-heading text-4xl md:text-5xl text-primary-foreground">{t.overview.sectionTitle}</h2>
          </div>
        </div>
      </div>

      <div className="section-cream py-14 md:py-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-start">
            <div>
              <p className="factsheet-label mb-4">{t.overview.resort}</p>
              <h3 className="factsheet-heading text-3xl md:text-4xl text-ocean-deep mb-5">{t.overview.heading}</h3>
              <div className="factsheet-divider !mx-0 mb-5" />
              <p className="font-body text-sm leading-relaxed text-muted-foreground mb-4">{t.overview.p1}</p>
              <p className="font-body text-sm leading-relaxed text-muted-foreground">{t.overview.p2}</p>
            </div>
            <div className="space-y-6">
              <img src={beachImage} alt="Beach" className="w-full h-60 object-cover rounded-lg" />
              <div className="grid grid-cols-2 gap-4">
                {t.overview.stats.map((s) => (
                  <div key={s.label} className="stat-block !p-5">
                    <p className="font-display text-3xl md:text-4xl text-ocean-deep">{s.value}</p>
                    <p className="font-body text-[10px] tracking-[0.12em] uppercase text-muted-foreground mt-2 font-medium">{s.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="mt-10">
            <p className="factsheet-label mb-4">{t.overview.distancesLabel}</p>
            <div className="grid grid-cols-4 gap-3">
              {t.overview.distances.map((d) => (
                <div key={d.place} className="stat-block !p-4 text-center">
                  <p className="font-display text-2xl text-ocean-deep">{d.km}</p>
                  <p className="font-body text-[10px] tracking-[0.1em] uppercase text-gold font-semibold mt-0.5">km</p>
                  <p className="font-body text-[10px] text-muted-foreground mt-1">{d.place}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OverviewSection;
