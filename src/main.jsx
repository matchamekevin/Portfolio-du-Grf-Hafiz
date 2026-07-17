import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { AuthProvider } from "./contexts/AuthContext";
import { RealtimeProvider } from "./contexts/RealtimeContext";
import App from "./App";
import { ThemeProvider } from "./theme/ThemeContext";
import { TranslationsProvider } from "./hooks/useTranslations.jsx";
import { preloadData } from "./contexts/SiteDataContext";
import { preloadTranslations } from "./hooks/useTranslations.jsx";
import "./index.css";

const preloaded = window.__PRELOADED__;
delete window.__PRELOADED__;

function clearSiteCache() {
  try {
    Object.keys(localStorage).forEach((k) => {
      if (k === "site_data_cache" || k.startsWith("translations_cache_") || k === "lang") {
        localStorage.removeItem(k);
      }
    });
  } catch {}
}

Promise.all([
  preloadData(preloaded?.data).catch(() => {}),
  preloadTranslations(preloaded?.translations).catch(() => {}),
]).finally(() => {
  clearSiteCache();
  fetch("/api/translations/sync-clean", { method: "POST" }).catch(() => {});
  createRoot(document.getElementById("root")).render(
    <StrictMode>
      <BrowserRouter>
        <AuthProvider>
          <RealtimeProvider>
            <ThemeProvider>
              <TranslationsProvider>
                <App />
              </TranslationsProvider>
            </ThemeProvider>
          </RealtimeProvider>
        </AuthProvider>
      </BrowserRouter>
    </StrictMode>
  );
});
