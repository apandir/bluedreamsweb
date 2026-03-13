import { useLanguage } from "@/i18n/LanguageContext";

const IndexSection = () => {
  const { t } = useLanguage();
  const hrefs = ["#overview", "#location", "#rooms", "#beach", "#dining", "#spa", "#activities", "#meetings", "#general", "#contact"];

  return (
    <section className="section-dark py-16 md:py-20">
      <div className="max-w-3xl mx-auto px-6 text-center">
        <p className="factsheet-label mb-3">{t.index.contents}</p>
        <h2 className="factsheet-heading text-4xl md:text-5xl text-primary-foreground mb-6">{t.index.title}</h2>
        <div className="factsheet-divider mb-10" />
        <div className="space-y-0">
          {t.index.sections.map((title, i) => (
            <a key={i} href={hrefs[i]} className="group flex items-center justify-between py-4 border-b border-primary-foreground/8 hover:border-gold/40 px-4 -mx-4 transition-all duration-300 cursor-pointer">
              <span className="font-body text-xs font-semibold tracking-[0.3em] text-gold/70 group-hover:text-gold transition-colors">{String(i + 1).padStart(2, "0")}</span>
              <span className="font-display text-xl md:text-2xl text-primary-foreground/70 group-hover:text-primary-foreground transition-colors">{title}</span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default IndexSection;
