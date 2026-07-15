import { createContext, useContext, useEffect, useState } from "react";
import { api } from "../services/api";

const SiteDataContext = createContext(null);

const SITE_DATA_CACHE_KEY = "site_data_cache";
const CACHE_TTL = 60 * 1000;

function readCache() {
  try {
    const raw = sessionStorage.getItem(SITE_DATA_CACHE_KEY);
    if (!raw) return null;
    const parsed = JSON.parse(raw);
    if (Date.now() - parsed.ts > CACHE_TTL) {
      sessionStorage.removeItem(SITE_DATA_CACHE_KEY);
      return null;
    }
    return parsed.data;
  } catch {
    return null;
  }
}

function writeCache(data) {
  try {
    sessionStorage.setItem(SITE_DATA_CACHE_KEY, JSON.stringify({ ts: Date.now(), data }));
  } catch {}
}

export function SiteDataProvider({ children }) {
  const [data, setData] = useState(() => readCache() || {
    hero: null,
    contact: null,
    cta: null,
    footer: null,
    showreel: [],
    experiences: [],
    gallery: [],
    skills: [],
  });
  const [error, setError] = useState(null);

  const fetchAll = () => {
    let cancelled = false;
    setError(null);
    api.public
      .getAll()
      .then((res) => {
        if (!cancelled && res && res.status === "ok") {
          const next = res.data;
          setData(next);
          writeCache(next);
        }
      })
      .catch((e) => {
        if (!cancelled) setError(e.message);
      });
    return () => { cancelled = true; };
  };

  useEffect(() => {
    fetchAll();
  }, []);

  const refresh = () => fetchAll();

  return (
    <SiteDataContext.Provider value={{ ...data, error, refresh }}>
      {children}
    </SiteDataContext.Provider>
  );
}

export function useSiteData() {
  const ctx = useContext(SiteDataContext);
  if (!ctx) throw new Error("useSiteData must be used within SiteDataProvider");
  return ctx;
}
