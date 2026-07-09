import { useTheme } from "../theme/ThemeContext";

export default function ThemeToggle() {
  const { isLight, toggleTheme } = useTheme();
  return (
    <button
      id="theme-btn"
      className="ctrl-btn"
      onClick={toggleTheme}
      aria-label="Toggle theme"
      title="Thème clair / sombre"
    >
      <span className="material-symbols-outlined text-base">
        {isLight ? "dark_mode" : "light_mode"}
      </span>
    </button>
  );
}
