import { useEffect, useRef, useState } from "react";
import { useTranslations } from "../hooks/useTranslations.jsx";
import Icon from "./Icon";

export default function LanguageSwitcher() {
  const { lang, setLang, code, languages } = useTranslations();
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
        <Icon name="translate" className="text-base" />
        <span id="lang-current" className="flex items-center gap-1">
          <span aria-hidden="true">{languages.find((l) => l.code === lang)?.flag}</span>
          {code}
        </span>
        <Icon name="expand_more" className="text-xs" />
      </button>
      <ul className={`lang-menu ${open ? "open" : ""}`} id="lang-menu" role="menu">
        {languages.map((l) => (
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
              <Icon name="check" />
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
