import { createContext, useContext, useState, useEffect, useCallback, useMemo } from "react";

const TranslationsContext = createContext(null);

const CACHE_KEY = "translations_cache";
const CACHE_TTL = 24 * 60 * 60 * 1000;

function readCache(lang) {
  try {
    const raw = localStorage.getItem(`${CACHE_KEY}_${lang}`);
    if (!raw) return null;
    const parsed = JSON.parse(raw);
    if (Date.now() - parsed.ts > CACHE_TTL) {
      localStorage.removeItem(`${CACHE_KEY}_${lang}`);
      return null;
    }
    return parsed.data;
  } catch {
    return null;
  }
}

function writeCache(lang, data) {
  try {
    localStorage.setItem(`${CACHE_KEY}_${lang}`, JSON.stringify({ ts: Date.now(), data }));
  } catch {}
}

const FALLBACK_LANGUAGES = [
  { code: "fr", label: "Français", flag: "🇫🇷", langCode: "FR" },
  { code: "en", label: "English", flag: "🇬🇧", langCode: "EN" },
  { code: "de", label: "Deutsch", flag: "🇩🇪", langCode: "DE" },
  { code: "es", label: "Español", flag: "🇪🇸", langCode: "ES" },
  { code: "pt", label: "Português", flag: "🇵🇹", langCode: "PT" },
];

const FR_UI_FALLBACK = {
  nav_showreel: "Showreel",
  nav_experiences: "Expériences",
  nav_competences: "Compétences",
  nav_contact: "Contact",
  nav_hire: "Embaucher",
  hero_status: "Disponible",
  hero_badge: "Ingénieur du son",
  hero_title: "Ingénierie du Son",
  hero_sub: "Ingénieur du son spécialisé en prise de son, montage et mixage.",
  sr_eyebrow: "Showreel",
  sr_title: "Travaux sélectionnés",
  sr_desc: "Visualiser le son à travers l'excellence cinématographique.",
  exp_title: "Trajectoire Professionnelle",
  dante_t: "Spécialiste certifié Dante",
  dante_s: "Niveaux 1, 2 et 3",
  lang_t: "Langues",
  exp_cinema: "Cinéma & Documentaire",
  exp_theatre: "Spectacle & Théâtre",
  sk_software: "Écosystème logiciel",
  sk_mastering: "Maîtrise technique",
  sk_tools: "Outils / Logiciels",
  sk_metiers: "Métiers du son",
  dante_b_t: "Certification Dante",
  form_t: "Formation",
  trans_t: "Transmission",
  edu_t: "Parcours",
  cta_title: "Prêt pour le prochain projet ?",
  cta_desc: "Basé à Lomé, disponible pour les tournages, la post-production et le live.",
  cta_engage: "Engagez-moi",
  cta_cv: "Télécharger le CV",
  contact_title: "Restons en contact",
  c_label_email: "Email",
  c_label_phone: "Téléphone",
  c_label_phone2: "Téléphone (2)",
  c_avail: "Disponibilité",
  c_avail1: "Tournages, Post-production, Théâtre/Live",
  c_avail_loc: "Disponibilité & Localisation",
  c_label_loc: "Localisation",
  f_name: "Nom complet",
  f_email: "Adresse email",
  f_project: "Type de projet",
  f_project_ph: "Sélectionnez un type",
  f_message: "Votre message",
  f_submit: "TRANSMETTRE LE MESSAGE",
  opt1: "Cinéma / Documentaire",
  opt2: "Théâtre / Live",
  opt3: "Post-Production",
  opt4: "Formation / Atelier",
  opt5: "Autre",
  ph_name: "ama de la fontaine",
  ph_email: "exemple@studio.com",
  ph_message: "Décrivez vos besoins techniques...",
  admin_light: "Mode clair",
  admin_dark: "Mode sombre",
  admin_logout: "Déconnexion",
  footer_copy: "© 2024 Caled Boukari. Ingénierie du son.",
  footer_vimeo: "Vimeo",
  g_eyebrow: "Galerie",
  g_title: "Coulisses de tournage",
  g_desc: "Quelques instants capturés sur les plateaux.",
  contact_module_title: "Message_Inbound_Buffer",
  contact_encrypted: "ENCRYPTED",
  f1_r: "Ingénieur du son & mixage, long-métrage fiction",
  f2_r: "Post-Production Manager, ADR, traitement du son, mixage",
  f3_r: "Ingénieur du son, long-métrage documentaire",
  f4_r: "Ingénieur du son, documentaire",
  f5_r: "Ingénieur du son, documentaire",
  f6_r: "Assistant son, pièce de théâtre",
  f7_r: "Assistant son, Goethe-Institut & Münchner Kammerspiele",
};

let preloadedTranslations = null;

export function preloadTranslations(inlineTranslations) {
  if (inlineTranslations) {
    preloadedTranslations = inlineTranslations;
  }
  return Promise.resolve();
}

function clearTranslationCache() {
  try {
    Object.keys(localStorage).forEach((k) => {
      if (k.startsWith(CACHE_KEY) || k === "lang") {
        localStorage.removeItem(k);
      }
    });
  } catch {}
}

export function TranslationsProvider({ children }) {
  const [lang, setLangState] = useState(() => {
    clearTranslationCache();
    try { return localStorage.getItem("lang") || "fr"; } catch { return "fr"; }
  });
  const [translations, setTranslations] = useState(() => {
    const cached = readCache(lang);
    if (cached) return cached;
    if (preloadedTranslations) return { ...FR_UI_FALLBACK, ...preloadedTranslations };
    return { ...FR_UI_FALLBACK };
  });
  const [languages, setLanguages] = useState(FALLBACK_LANGUAGES);

  const fetchTranslations = useCallback(async (code) => {
    const cached = readCache(code);
    if (cached) {
      setTranslations(cached);
      return;
    }
    try {
      const res = await fetch(`/api/translations/${code}`);
      const json = await res.json();
      if (json.status === "ok" && Array.isArray(json.data)) {
        const map = { ...FR_UI_FALLBACK };
        for (const t of json.data) map[t.key] = t.value;
        setTranslations(map);
        writeCache(code, map);
      } else {
        setTranslations(FR_UI_FALLBACK);
      }
    } catch (e) {
      console.error("Failed to fetch translations:", e);
      setTranslations(FR_UI_FALLBACK);
    }
  }, []);

  const fetchLanguages = useCallback(async () => {
    try {
      const res = await fetch("/api/languages");
      const json = await res.json();
      if (json.status === "ok" && Array.isArray(json.data) && json.data.length > 0) {
        setLanguages(json.data);
      }
    } catch (e) {
      console.error("Failed to fetch languages:", e);
    }
  }, []);

  useEffect(() => {
    try { localStorage.setItem("lang", lang); } catch {}
    document.documentElement.lang = lang;
    fetchTranslations(lang);
    fetchLanguages();
  }, [lang, fetchTranslations, fetchLanguages]);

  const setLang = useCallback((next) => {
    setLangState(next);
  }, []);

  const t = useCallback((key, fallback) => {
    const val = translations[key];
    if (val !== undefined && val !== "") return val;
    return fallback ?? "";
  }, [translations]);

  const tr = useCallback((key, fallback) => {
    const val = t(key);
    if (val && val !== key) return val;
    return fallback ?? "";
  }, [t]);

  const code = useMemo(() => {
    const found = languages.find((l) => l.code === lang);
    return found?.langCode || lang.toUpperCase();
  }, [lang, languages]);

  const value = useMemo(() => ({ lang, setLang, t, tr, code, languages }), [lang, t, tr, code, languages]);

  return (
    <TranslationsContext.Provider value={value}>
      {children}
    </TranslationsContext.Provider>
  );
}

export function useTranslations() {
  const ctx = useContext(TranslationsContext);
  if (!ctx) throw new Error("useTranslations must be used within TranslationsProvider");
  return ctx;
}
