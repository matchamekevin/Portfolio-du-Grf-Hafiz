import { createContext, useContext, useState, useEffect } from "react";

const AdminThemeContext = createContext(null);

export function AdminThemeProvider({ children }) {
  const [mode, setMode] = useState(() => localStorage.getItem("admin_theme") || "dark");

  useEffect(() => {
    localStorage.setItem("admin_theme", mode);
  }, [mode]);

  const value = { mode, setMode, isDark: mode === "dark" };

  return (
    <AdminThemeContext.Provider value={value}>
      <div className={`admin-surface min-h-screen ${mode === "dark" ? "admin-dark" : "admin-light"}`}>
        {children}
      </div>
    </AdminThemeContext.Provider>
  );
}

export function useAdminTheme() {
  const ctx = useContext(AdminThemeContext);
  if (!ctx) throw new Error("useAdminTheme must be used within AdminThemeProvider");
  return ctx;
}
