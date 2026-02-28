"use client";

import { createContext, useContext, useEffect, useState, ReactNode } from "react";
import { translations, Locale } from "@/lib/translations";

interface LanguageContextValue {
  locale: Locale;
  t: typeof translations[Locale];
}

const LanguageContext = createContext<LanguageContextValue>({
  locale: "en",
  t: translations.en,
});

function detectLocale(): Locale {
  if (typeof navigator === "undefined") return "en";
  const lang = navigator.language?.toLowerCase() || "en";
  if (lang.startsWith("nl")) return "nl";
  if (lang.startsWith("de")) return "de";
  if (lang.startsWith("fr")) return "fr";
  return "en";
}

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [locale, setLocale] = useState<Locale>("en");

  useEffect(() => {
    const detected = detectLocale();
    setLocale(detected);
  }, []);

  return (
    <LanguageContext.Provider value={{ locale, t: translations[locale] }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useTranslation() {
  return useContext(LanguageContext);
}
