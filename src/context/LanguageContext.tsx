"use client";

import { createContext, useContext, ReactNode } from "react";
import { translations } from "@/lib/translations";

// English only — all content is served in English
interface LanguageContextValue {
  locale: "en";
  t: typeof translations["en"];
}

const LanguageContext = createContext<LanguageContextValue>({
  locale: "en",
  t: translations.en,
});

export function LanguageProvider({ children }: { children: ReactNode }) {
  return (
    <LanguageContext.Provider value={{ locale: "en", t: translations.en }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useTranslation() {
  return useContext(LanguageContext);
}
