import { ThemeProvider } from "../theme/ThemeContext";
import { TranslationsProvider } from "../hooks/useTranslations.jsx";
import { SiteDataProvider } from "./SiteDataContext";

export function AppProviders({ children }) {
  return (
    <ThemeProvider>
      <TranslationsProvider>
        <SiteDataProvider>
          {children}
        </SiteDataProvider>
      </TranslationsProvider>
    </ThemeProvider>
  );
}
