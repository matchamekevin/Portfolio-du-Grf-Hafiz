import { createContext, useContext, useEffect, useState, useCallback, useRef, useMemo } from "react";
import { TRANSLATIONS, LANG_CODE } from "./translations";
import { useRealtime } from "../contexts/RealtimeContext";

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
  const [dbTranslations, setDbTranslations] = useState({});
  const dbRef = useRef(dbTranslations);
  dbRef.current = dbTranslations;

  const fetchDbTranslations = useCallback((code) => {
    fetch(`/api/translations/${code}`)
      .then((r) => r.json())
      .then((res) => {
        if (res?.status === "ok" && Array.isArray(res.data)) {
          const map = {};
          for (const t of res.data) map[t.key] = t.value;
          setDbTranslations(map);
        }
      })
      .catch(() => {});
  }, []);

  useEffect(() => {
    document.documentElement.lang = lang;
    try { localStorage.setItem("lang", lang); } catch {}
    fetchDbTranslations(lang);
  }, [lang, fetchDbTranslations]);

  useRealtime((payload) => {
    if (payload?.type === "updated" || payload?.type === "translations-updated") {
      const current = getInitialLang();
      fetchDbTranslations(current);
    }
  });

  const setLang = useCallback((next) => {
    if (TRANSLATIONS[next]) {
      try { localStorage.setItem("lang", next); } catch {}
      setLangState(next);
    }
  }, []);

  const t = useCallback((key) => {
    if (dbRef.current[key] !== undefined) return dbRef.current[key];
    const dict = TRANSLATIONS[lang] || TRANSLATIONS.fr;
    if (dict[key] !== undefined) return dict[key];
    if (TRANSLATIONS.fr[key] !== undefined) return TRANSLATIONS.fr[key];
    return key;
  }, [lang]);

  const value = useMemo(() => ({ lang, setLang, t, code: LANG_CODE[lang] || "FR", dbTranslations }), [lang, setLang, t, dbTranslations]);

  return (
    <I18nContext.Provider value={value}>
      {children}
    </I18nContext.Provider>
  );
}

export function useI18n() {
  const ctx = useContext(I18nContext);
  if (!ctx) throw new Error("useI18n must be used within I18nProvider");
  return ctx;
}
