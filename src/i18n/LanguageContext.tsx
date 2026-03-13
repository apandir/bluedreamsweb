import { createContext, useContext, useState, useCallback, type ReactNode } from "react";
import type { Language, Translations } from "./types";
import { en } from "./translations/en";
import { tr } from "./translations/tr";
import { ru } from "./translations/ru";
import { de } from "./translations/de";
import { ar } from "./translations/ar";
import { sv } from "./translations/sv";

const translationsMap: Record<Language, Translations> = { en, tr, ru, de, ar, sv };

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: Translations;
  isRtl: boolean;
}

const LanguageContext = createContext<LanguageContextType>({
  language: "en",
  setLanguage: () => {},
  t: en,
  isRtl: false,
});

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [language, setLang] = useState<Language>("en");

  const setLanguage = useCallback((lang: Language) => {
    setLang(lang);
    document.documentElement.dir = lang === "ar" ? "rtl" : "ltr";
    document.documentElement.lang = lang;
  }, []);

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t: translationsMap[language], isRtl: language === "ar" }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => useContext(LanguageContext);
