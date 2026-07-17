import { useEffect } from "react";
import { useSiteData } from "../contexts/SiteDataContext";

const SCROLL_KEY = "portfolio_scroll_pos";

export default function ScrollRestoration() {
  const { hero, contact, cta, footer, showreel, experiences, gallery, skills, trajectoire } = useSiteData();

  const hasData = hero || contact || cta || footer || showreel.length > 0 || experiences.length > 0 || gallery.length > 0 || skills.length > 0 || trajectoire;

  useEffect(() => {
    if (!hasData) return;

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
      }, 300);
      return () => clearTimeout(timer);
    }
  }, [hasData]);

  useEffect(() => {
    if (!hasData) return;

    const onScroll = () => {
      try {
        sessionStorage.setItem(SCROLL_KEY, String(window.scrollY));
      } catch {}
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [hasData]);

  useEffect(() => {
    if (!hasData) return;

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
    const timer = setTimeout(restore, 100);
    return () => clearTimeout(timer);
  }, [hasData]);

  return null;
}
