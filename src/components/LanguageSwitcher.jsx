import { useEffect, useRef, useState } from "react";
import { useI18n } from "../i18n/I18nContext";
import { LANGUAGES } from "../i18n/translations";

export default function LanguageSwitcher() {
  const { lang, setLang, code } = useI18n();
  const [open, setOpen] = useState(false);
  const wrapRef = useRef(null);

  useEffect(() => {
    const onClick = (e) => {
      if (wrapRef.current && !wrapRef.current.contains(e.target)) setOpen(false);
    };
    const onKey = (e) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.addEventListener("click", onClick);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("click", onClick);
      document.removeEventListener("keydown", onKey);
    };
  }, []);

  return (
    <div className="relative" ref={wrapRef}>
      <button
        id="lang-btn"
        className="ctrl-btn"
        aria-haspopup="true"
        aria-expanded={open}
        onClick={(e) => {
          e.stopPropagation();
          setOpen((o) => !o);
        }}
      >
        <span className="material-symbols-outlined text-base">translate</span>
        <span id="lang-current" className="flex items-center gap-1">
          <span aria-hidden="true">{LANGUAGES.find((l) => l.code === lang)?.flag}</span>
          {code}
        </span>
        <span className="material-symbols-outlined text-xs">expand_more</span>
      </button>
      <ul className={`lang-menu ${open ? "open" : ""}`} id="lang-menu" role="menu">
        {LANGUAGES.map((l) => (
          <li role="none" key={l.code}>
            <button
              className={`lang-item ${l.code === lang ? "active" : ""}`}
              role="menuitem"
              onClick={() => {
                setLang(l.code);
                setOpen(false);
              }}
            >
              <span className="flex items-center gap-2">
                <span aria-hidden="true" className="text-base leading-none">{l.flag}</span>
                {l.label}
              </span>
              <span className="material-symbols-outlined">check</span>
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
