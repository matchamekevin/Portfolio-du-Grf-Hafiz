import { createContext, useContext, useEffect, useState, useCallback, useRef, useMemo } from "react";
import { api } from "../services/api";
import { useRealtime } from "./RealtimeContext";

const SiteDataContext = createContext(null);

const SITE_DATA_CACHE_KEY = "site_data_cache";
const CACHE_TTL = 30_000;

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

export function preloadData(inlineData) {
  if (inlineData) {
    preloadedData = inlineData;
    preloadTimestamp = Date.now();
    writeCache(inlineData);
    return Promise.resolve(inlineData);
  }
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
    preloadedData = EMPTY;
    return EMPTY;
  }).catch(() => {
    preloadedData = EMPTY;
    return EMPTY;
  });
}

export function SiteDataProvider({ children }) {
  const [data, setData] = useState(() => preloadedData || readCache() || EMPTY);
  const mountedRef = useRef(true);
  const prevDataRef = useRef(data);

  const fetchAll = useCallback(() => {
    api.public
      .getAll()
      .then((res) => {
        if (res && res.status === "ok" && mountedRef.current) {
          const next = res.data;
          if (next && next !== prevDataRef.current) {
            prevDataRef.current = next;
            setData(next);
            writeCache(next);
            preloadedData = next;
            preloadTimestamp = Date.now();
          }
        }
      })
      .catch(() => {});
  }, []);

  useEffect(() => {
    mountedRef.current = true;
    fetchAll();
    return () => { mountedRef.current = false; };
  }, [fetchAll]);

  useRealtime((payload) => {
    if (payload?.type === "updated" && payload.data) {
      if (mountedRef.current && payload.data !== prevDataRef.current) {
        prevDataRef.current = payload.data;
        setData(payload.data);
        writeCache(payload.data);
        preloadedData = payload.data;
        preloadTimestamp = Date.now();
      }
    } else if (payload?.type === "reconnected") {
      if (mountedRef.current && Date.now() - preloadTimestamp > 30000) {
        fetchAll();
      }
    }
  });

  useEffect(() => {
    const id = setInterval(() => {
      if (mountedRef.current) fetchAll();
    }, 60000);
    return () => clearInterval(id);
  }, [fetchAll]);

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
