import { createContext, useContext, useEffect, useState } from "react";
import { TRANSLATIONS, LANG_CODE } from "./translations";

const I18nContext = createContext(null);

function getInitialLang() {
  try {
    return localStorage.getItem("lang") || "fr";
  } catch {
    return "fr";
  }
}

export function I18nProvider({ children }) {
  const [lang, setLangState] = useState(() =>
    TRANSLATIONS[getInitialLang()] ? getInitialLang() : "fr"
  );

  useEffect(() => {
    document.documentElement.lang = lang;
    try {
      localStorage.setItem("lang", lang);
    } catch {}
  }, [lang]);

  const setLang = (next) => {
    if (TRANSLATIONS[next]) setLangState(next);
  };

  // Returns the translation for a key; falls back to French then the key itself.
  const t = (key) => {
    const dict = TRANSLATIONS[lang] || TRANSLATIONS.fr;
    if (dict[key] !== undefined) return dict[key];
    if (TRANSLATIONS.fr[key] !== undefined) return TRANSLATIONS.fr[key];
    return key;
  };

  return (
    <I18nContext.Provider value={{ lang, setLang, t, code: LANG_CODE[lang] || "FR" }}>
      {children}
    </I18nContext.Provider>
  );
}

export function useI18n() {
  const ctx = useContext(I18nContext);
  if (!ctx) throw new Error("useI18n must be used within I18nProvider");
  return ctx;
}
