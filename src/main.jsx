import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { AuthProvider } from "./contexts/AuthContext";
import { RealtimeProvider } from "./contexts/RealtimeContext";
import App from "./App";
import { ThemeProvider } from "./theme/ThemeContext";
import { I18nProvider } from "./i18n/I18nContext";
import { preloadData } from "./contexts/SiteDataContext";
import "@fontsource/material-symbols-outlined/latin-400.css";
import "./index.css";

document.getElementById("root").innerHTML = `
<style>.sk{background:linear-gradient(90deg,#1a1a1a 25%,#252525 50%,#1a1a1a 75%);background-size:200% 100%;animation:sh 1.5s infinite;border-radius:6px}@keyframes sh{0%{background-position:200% 0}100%{background-position:-200% 0}}</style>
<div style="min-height:100vh;background:#0d0d0d;padding:48px 24px;max-width:1200px;margin:0 auto">
  <div style="height:12px;width:120px" class="sk"></div>
  <div style="height:12px;width:200px;margin-top:12px" class="sk"></div>
  <div style="height:48px;width:60%;margin-top:32px" class="sk"></div>
  <div style="height:16px;width:80%;margin-top:16px" class="sk"></div>
  <div style="height:16px;width:60%;margin-top:8px" class="sk"></div>
  <div style="display:grid;grid-template-columns:repeat(4,1fr);gap:16px;margin-top:48px">
    <div style="height:200px" class="sk"></div>
    <div style="height:200px" class="sk"></div>
    <div style="height:200px" class="sk"></div>
    <div style="height:200px" class="sk"></div>
  </div>
</div>`;

preloadData().then(() => {
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
