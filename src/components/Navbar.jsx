import { useState, useEffect } from "react";
import { useTranslations } from "../hooks/useTranslations.jsx";
import { useSiteData } from "../contexts/SiteDataContext";
import ThemeToggle from "./ThemeToggle";
import LanguageSwitcher from "./LanguageSwitcher";
import Icon from "./Icon";

const LINKS = [
  { href: "#showreel", key: "nav_showreel" },
  { href: "#experiences", key: "nav_experiences" },
  { href: "#competences", key: "nav_competences" },
  { href: "#contact", key: "nav_contact" }
];

export default function Navbar() {
  const { t } = useTranslations();
  const { footer } = useSiteData();
  const siteName = footer?.name || "Portfolio";
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
      return () => { document.body.style.overflow = ""; };
    }
  }, [mobileOpen]);

  const scrollTo = (href) => {
    setMobileOpen(false);
    document.getElementById(href.slice(1))?.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToTop = () => {
    setMobileOpen(false);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <header className="w-full top-0 sticky z-50 bg-surface-dim/80 border-b border-outline-variant/30 backdrop-blur-md transition-all duration-300">
      <div className="flex justify-between items-center h-14 sm:h-16 px-sm sm:px-md max-w-container-max mx-auto gap-sm sm:gap-base">
        <div
          className="font-headline-md text-headline-md text-primary tracking-tighter uppercase font-bold cursor-pointer hover:scale-105 transition-transform"
          onClick={scrollToTop}
          role="button"
          tabIndex={0}
          onKeyDown={(e) => { if (e.key === "Enter") scrollToTop(); }}
        >
          {siteName}
        </div>
        <nav className="hidden md:flex items-center gap-lg">
          {LINKS.map((l) => (
            <a
              key={l.href}
              className="nav-link text-on-surface-variant hover:text-primary transition-colors duration-200"
              href={l.href}
            >
              {t(l.key)}
            </a>
          ))}
        </nav>
        <div className="flex items-center gap-xs sm:gap-base">
          <ThemeToggle />
          <LanguageSwitcher />
          <button
            className="hidden sm:inline-flex bg-primary text-on-primary px-base py-xs min-h-[44px] font-label-md text-label-md rounded-lg uppercase tracking-widest hover:brightness-110 hover:-translate-y-px active:scale-95 transition-all cursor-pointer glow-amber items-center"
            onClick={() =>
              document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })
            }
          >
            {t("nav_hire")}
          </button>
          <button
            className="md:hidden w-11 h-11 flex items-center justify-center rounded-lg hover:bg-surface-container-high transition-colors"
            onClick={() => setMobileOpen((o) => !o)}
            aria-label="Menu"
          >
            <Icon name={mobileOpen ? "close" : "menu"} className="text-xl" />
          </button>
        </div>
      </div>

      {mobileOpen && (
        <>
          <div className="fixed inset-0 bg-black/40 z-40 md:hidden" onClick={() => setMobileOpen(false)} />
          <div className="fixed top-14 left-0 right-0 z-50 md:hidden bg-surface-dim/95 backdrop-blur-lg border-b border-outline-variant/30 shadow-xl">
            <nav className="flex flex-col p-md gap-1">
              {LINKS.map((l) => (
                <button
                  key={l.href}
                  onClick={() => scrollTo(l.href)}
                  className="w-full text-left px-md py-3 rounded-lg text-on-surface-variant hover:text-primary hover:bg-surface-container-high/50 transition-colors font-body-md text-body-md"
                >
                  {t(l.key)}
                </button>
              ))}
              <button
                className="mt-2 w-full bg-primary text-on-primary px-md py-3 font-label-md text-label-md rounded-lg uppercase tracking-widest hover:brightness-110 active:scale-95 transition-all glow-amber text-center"
                onClick={() => scrollTo("#contact")}
              >
                {t("nav_hire")}
              </button>
            </nav>
          </div>
        </>
      )}
    </header>
  );
}
