import { ThemeProvider } from "../theme/ThemeContext";
import { I18nProvider } from "../i18n/I18nContext";
import { SiteDataProvider } from "./SiteDataContext";

export function AppProviders({ children }) {
  return (
    <ThemeProvider>
      <I18nProvider>
        <SiteDataProvider>
          {children}
        </SiteDataProvider>
      </I18nProvider>
    </ThemeProvider>
  );
}
