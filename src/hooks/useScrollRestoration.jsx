import { useEffect } from "react";

const SCROLL_KEY = "portfolio_scroll_pos";
const RESTORE_DELAY = 100;

export function useScrollRestoration() {
  useEffect(() => {
    const hash = window.location.hash;
    if (hash) {
      const id = hash.replace("#", "");
      const timer = setTimeout(() => {
        const el = document.getElementById(id);
        if (el) {
          el.scrollIntoView({ behavior: "smooth", block: "start" });
        } else {
          window.scrollTo({ top: 0, behavior: "smooth" });
        }
      }, RESTORE_DELAY);
      return () => clearTimeout(timer);
    }
  }, []);

  useEffect(() => {
    const onScroll = () => {
      try {
        sessionStorage.setItem(SCROLL_KEY, String(window.scrollY));
      } catch {}
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const restore = () => {
      try {
        const y = Number(sessionStorage.getItem(SCROLL_KEY));
        if (!Number.isNaN(y) && y > 0) {
          window.scrollTo({ top: y, behavior: "instant" });
        }
      } catch {}
    };
    window.addEventListener("pageshow", (e) => {
      if (e.persisted) restore();
    });
    restore();
  }, []);
}
