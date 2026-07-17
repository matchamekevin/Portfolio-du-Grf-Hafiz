import { useTheme } from "../theme/ThemeContext";
import Icon from "./Icon";

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
      <Icon name={isLight ? "dark_mode" : "light_mode"} className="text-base" />
    </button>
  );
}
