import { useState, useEffect } from "react";
import { useAdminTheme } from "../../contexts/AdminThemeContext";
import AdminIcon from "./AdminIcon";

const TABS = [
  { key: "hero", label: "Entête", icon: "title" },
  { key: "showreel", label: "Showreel", icon: "play_circle" },
  { key: "experiences", label: "Expériences", icon: "work" },
  { key: "trajectoire", label: "Trajectoire", icon: "route" },
  { key: "gallery", label: "Galerie", icon: "photo" },
  { key: "skills", label: "Compétences", icon: "psychology" },
  { key: "cta", label: "Boutons d'action", icon: "ads_click" },
  { key: "page", label: "Contact & Footer", icon: "edit" },
  { key: "profile", label: "Profil", icon: "person" },
];

export default function AdminLayout({ title, onLogout, children, activeTab, onTabChange }) {
  const { mode, setMode } = useAdminTheme();
  const [sidebarOpen, setSidebarOpen] = useState(false);

  useEffect(() => {
    if (sidebarOpen) {
      document.body.style.overflow = "hidden";
      return () => { document.body.style.overflow = ""; };
    }
  }, [sidebarOpen]);

  const handleTab = (key) => {
    onTabChange(key);
    setSidebarOpen(false);
  };

  return (
    <div className="min-h-screen admin-surface flex">
      {sidebarOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-40 md:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      <aside
        className={`fixed top-0 left-0 w-64 h-screen bg-admin-surface-raised border-r border-admin-border/60 flex flex-col z-50 transition-transform duration-200 ease-in-out md:translate-x-0 ${
          sidebarOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="p-6 border-b border-admin-border/60">
          <h1 className="text-lg font-semibold text-admin-text tracking-tight">{title}</h1>
          <p className="text-xs text-admin-muted mt-1">Gestion du portfolio</p>
        </div>
        <nav className="flex-1 p-3 space-y-1 overflow-y-auto">
          {TABS.map((tab) => {
            const isActive = activeTab === tab.key;
            return (
              <button
                key={tab.key}
                onClick={() => handleTab(tab.key)}
                className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-all ${
                  isActive
                    ? "bg-admin-accent/10 text-admin-accent"
                    : "text-admin-muted hover:text-admin-text hover:bg-admin-surface/80"
                }`}
              >
                <AdminIcon name={tab.icon} className="text-base" />
                {tab.label}
              </button>
            );
          })}
        </nav>
        <div className="p-4 border-t border-admin-border/60 space-y-2">
          <button
            onClick={() => setMode(mode === "dark" ? "light" : "dark")}
            className="w-full flex items-center gap-2 px-3 py-2 rounded-lg text-sm font-medium text-admin-muted hover:text-admin-text hover:bg-admin-surface/80 transition-all"
          >
            <AdminIcon name={mode === "dark" ? "light_mode" : "dark_mode"} className="text-base" />
            {mode === "dark" ? "Mode clair" : "Mode sombre"}
          </button>
          <button
            onClick={onLogout}
            className="w-full flex items-center gap-2 px-3 py-2 rounded-lg text-sm font-medium text-admin-muted hover:text-admin-text hover:bg-admin-surface/80 transition-all"
          >
            <AdminIcon name="logout" className="text-base" />
            Déconnexion
          </button>
        </div>
      </aside>

      <div className="flex-1 md:ml-64 flex flex-col min-h-screen">
        <div className="md:hidden sticky top-0 z-30 bg-admin-surface-raised border-b border-admin-border/60 px-4 py-3 flex items-center gap-3">
          <button
            onClick={() => setSidebarOpen(true)}
            className="w-11 h-11 flex items-center justify-center rounded-lg text-admin-text hover:bg-admin-surface/80 transition-colors"
            aria-label="Ouvrir le menu"
          >
            <AdminIcon name="menu" className="text-xl" />
          </button>
          <h1 className="text-base font-semibold text-admin-text truncate">{title}</h1>
        </div>

        <main className="flex-1">
          <div className="max-w-5xl mx-auto p-4 sm:p-6 lg:p-8">
            {children}
          </div>
        </main>
      </div>
    </div>
  );
}
