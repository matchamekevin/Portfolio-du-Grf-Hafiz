import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { AuthProvider } from "./contexts/AuthContext";
import { RealtimeProvider } from "./contexts/RealtimeContext";
import App from "./App";
import { ThemeProvider } from "./theme/ThemeContext";
import { I18nProvider } from "./i18n/I18nContext";
import { preloadData } from "./contexts/SiteDataContext";
import { preloadTranslations } from "./i18n/I18nContext";
import "@fontsource/material-symbols-outlined/latin-400.css";
import "./index.css";

const preloaded = window.__PRELOADED__;
delete window.__PRELOADED__;

Promise.all([
  preloadData(preloaded?.data).catch(() => {}),
  preloadTranslations(preloaded?.translations).catch(() => {}),
]).finally(() => {
  createRoot(document.getElementById("root")).render(
    <StrictMode>
      <BrowserRouter>
        <AuthProvider>
          <RealtimeProvider>
            <ThemeProvider>
              <I18nProvider>
                <App />
              </I18nProvider>
            </ThemeProvider>
          </RealtimeProvider>
        </AuthProvider>
      </BrowserRouter>
    </StrictMode>
  );
});
