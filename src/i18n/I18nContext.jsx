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

const API_BASE = import.meta.env.VITE_API_URL
  ? `${import.meta.env.VITE_API_URL}/api`
  : "/api";

const TRANS_CACHE_KEY = "i18n_cache";
const TRANS_CACHE_TTL = 24 * 60 * 60 * 1000;

function readTransCache(lang) {
  try {
    const raw = localStorage.getItem(`${TRANS_CACHE_KEY}_${lang}`);
    if (!raw) return null;
    const parsed = JSON.parse(raw);
    if (Date.now() - parsed.ts > TRANS_CACHE_TTL) {
      localStorage.removeItem(`${TRANS_CACHE_KEY}_${lang}`);
      return null;
    }
    return parsed.data;
  } catch {
    return null;
  }
}

function writeTransCache(lang, data) {
  try {
    localStorage.setItem(`${TRANS_CACHE_KEY}_${lang}`, JSON.stringify({ ts: Date.now(), data }));
  } catch {}
}

function parseTranslations(res) {
  if (res?.status === "ok" && Array.isArray(res.data)) {
    const map = {};
    for (const t of res.data) map[t.key] = t.value;
    return map;
  }
  return null;
}

let preloadedDbTranslations = null;
let preloadedLang = null;

export function preloadTranslations(inlineTranslations) {
  const lang = getInitialLang();
  if (inlineTranslations) {
    preloadedDbTranslations = inlineTranslations;
    preloadedLang = lang;
    writeTransCache(lang, inlineTranslations);
    return Promise.resolve(inlineTranslations);
  }
  const cached = readTransCache(lang);
  if (cached) {
    preloadedDbTranslations = cached;
    preloadedLang = lang;
    return Promise.resolve(cached);
  }
  return fetch(`${API_BASE}/translations/${lang}`)
    .then((r) => r.json())
    .then((res) => {
      const map = parseTranslations(res);
      if (map) {
        preloadedDbTranslations = map;
        preloadedLang = lang;
        writeTransCache(lang, map);
      }
    })
    .catch(() => {});
}

export function I18nProvider({ children }) {
  const [lang, setLangState] = useState(() =>
    TRANSLATIONS[getInitialLang()] ? getInitialLang() : "fr"
  );
  const [dbTranslations, setDbTranslations] = useState(() => {
    if (preloadedDbTranslations && preloadedLang === getInitialLang()) {
      return preloadedDbTranslations;
    }
    const cached = readTransCache(getInitialLang());
    return cached || null;
  });
  const dbRef = useRef(dbTranslations);
  dbRef.current = dbTranslations;

  const fetchDbTranslations = useCallback((code) => {
    const cached = readTransCache(code);
    if (cached) {
      setDbTranslations(cached);
      return;
    }
    fetch(`${API_BASE}/translations/${code}`)
      .then((r) => r.json())
      .then((res) => {
        const map = parseTranslations(res);
        if (map) {
          setDbTranslations(map);
          writeTransCache(code, map);
        }
      })
      .catch(() => {});
  }, []);

  useEffect(() => {
    document.documentElement.lang = lang;
    try { localStorage.setItem("lang", lang); } catch {}
    if (preloadedLang === lang && preloadedDbTranslations) {
      preloadedDbTranslations = null;
      preloadedLang = null;
    } else {
      fetchDbTranslations(lang);
    }
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
    if (dbRef.current && dbRef.current[key] !== undefined) return dbRef.current[key];
    const dict = TRANSLATIONS[lang] || TRANSLATIONS.fr;
    if (dict[key] !== undefined) return dict[key];
    if (TRANSLATIONS.fr[key] !== undefined) return TRANSLATIONS.fr[key];
    return key;
  }, [lang]);

  const value = useMemo(() => ({ lang, setLang, t, code: LANG_CODE[lang] || "FR", dbTranslations }), [lang, setLang, t, dbTranslations]);

  if (!dbTranslations) return null;

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
