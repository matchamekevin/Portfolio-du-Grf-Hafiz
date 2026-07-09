import { useI18n } from "../i18n/I18nContext";
import ThemeToggle from "./ThemeToggle";
import LanguageSwitcher from "./LanguageSwitcher";

const LINKS = [
  { href: "#showreel", key: "nav_showreel" },
  { href: "#experiences", key: "nav_experiences" },
  { href: "#competences", key: "nav_competences" },
  { href: "#contact", key: "nav_contact" }
];

export default function Navbar() {
  const { t } = useI18n();
  return (
    <header className="w-full top-0 sticky z-50 bg-surface-dim/80 border-b border-outline-variant/30 backdrop-blur-md transition-all duration-300">
      <div className="flex justify-between items-center h-16 px-md max-w-container-max mx-auto gap-base">
        <div className="font-headline-md text-headline-md text-primary tracking-tighter uppercase font-bold cursor-pointer hover:scale-105 transition-transform">
          Caled Boukari
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
        <div className="flex items-center gap-base">
          <ThemeToggle />
          <LanguageSwitcher />
          <button
            className="bg-primary text-on-primary px-md py-sm font-label-md text-label-md rounded uppercase tracking-widest hover:brightness-110 hover:-translate-y-px active:scale-95 transition-all cursor-pointer glow-amber"
            onClick={() =>
              document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })
            }
          >
            {t("nav_hire")}
          </button>
        </div>
      </div>
    </header>
  );
}
