import { createContext, useContext, useEffect, useState, useCallback, useRef, useMemo } from "react";
import { api } from "../services/api";
import { useRealtime } from "./RealtimeContext";

const SiteDataContext = createContext(null);

const SITE_DATA_CACHE_KEY = "site_data_cache";
const CACHE_TTL = 24 * 60 * 60 * 1000;

function readCache() {
  try {
    const raw = localStorage.getItem(SITE_DATA_CACHE_KEY);
    if (!raw) return null;
    const parsed = JSON.parse(raw);
    if (Date.now() - parsed.ts > CACHE_TTL) {
      localStorage.removeItem(SITE_DATA_CACHE_KEY);
      return null;
    }
    return parsed.data;
  } catch {
    return null;
  }
}

function writeCache(data) {
  try {
    localStorage.setItem(SITE_DATA_CACHE_KEY, JSON.stringify({ ts: Date.now(), data }));
  } catch {}
}

const EMPTY = {
  hero: null,
  contact: null,
  cta: null,
  footer: null,
  showreel: [],
  experiences: [],
  gallery: [],
  skills: [],
  trajectoire: null,
};

let preloadedData = null;
let preloadTimestamp = 0;

export function preloadData() {
  const cached = readCache();
  if (cached) {
    preloadedData = cached;
    preloadTimestamp = Date.now();
    return Promise.resolve(cached);
  }
  return api.public.getAll().then((res) => {
    if (res && res.status === "ok") {
      writeCache(res.data);
      preloadedData = res.data;
      preloadTimestamp = Date.now();
      return res.data;
    }
    return EMPTY;
  }).catch(() => EMPTY);
}

const FRESH_TTL = 5000;

export function SiteDataProvider({ children }) {
  const [data, setData] = useState(() => preloadedData || readCache() || EMPTY);
  const mountedRef = useRef(true);
  const skipFirstRef = useRef(Date.now() - preloadTimestamp < FRESH_TTL);

  const fetchAll = useCallback(() => {
    api.public
      .getAll()
      .then((res) => {
        if (res && res.status === "ok" && mountedRef.current) {
          setData(res.data);
          writeCache(res.data);
          preloadedData = res.data;
          preloadTimestamp = Date.now();
        }
      })
      .catch(() => {});
  }, []);

  useEffect(() => {
    mountedRef.current = true;
    if (skipFirstRef.current) {
      skipFirstRef.current = false;
    } else {
      fetchAll();
    }
    return () => { mountedRef.current = false; };
  }, [fetchAll]);

  useRealtime((payload) => {
    if (payload?.type === "updated" || payload?.type === "translations-updated") {
      fetchAll();
    }
  });

  const refresh = () => fetchAll();

  const value = useMemo(() => ({ ...data, refresh }), [data]);

  return (
    <SiteDataContext.Provider value={value}>
      {children}
    </SiteDataContext.Provider>
  );
}

export function useSiteData() {
  const ctx = useContext(SiteDataContext);
  if (!ctx) throw new Error("useSiteData must be used within SiteDataProvider");
  return ctx;
}
