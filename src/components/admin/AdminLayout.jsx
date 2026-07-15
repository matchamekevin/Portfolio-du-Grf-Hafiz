import { useState } from "react";
import { useAdminTheme } from "../../contexts/AdminThemeContext";

export default function AdminLayout({ title, onLogout, children }) {
  const { mode, setMode } = useAdminTheme();

  return (
    <div className="min-h-screen admin-surface">
      <div className="sticky top-0 z-30 border-b border-admin-border/60 bg-admin-surface/80 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-14">
            <div className="flex items-center gap-3">
              <span className="text-sm font-semibold text-admin-text tracking-tight">{title}</span>
              <span className="text-xs text-admin-muted hidden sm:inline">Gestion du portfolio</span>
            </div>
            <div className="flex items-center gap-2">
              <button
                onClick={() => setMode(mode === "dark" ? "light" : "dark")}
                className="admin-btn admin-btn-secondary text-xs"
              >
                {mode === "dark" ? "Clair" : "Sombre"}
              </button>
              <button onClick={onLogout} className="admin-btn admin-btn-secondary text-xs">
                Deconnexion
              </button>
            </div>
          </div>
        </div>
      </div>
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        {children}
      </main>
    </div>
  );
}
