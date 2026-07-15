import { useState } from "react";
import { useAdminTheme } from "../contexts/AdminThemeContext";
import { api } from "../services/api";

export default function Login() {
  const { mode, setMode } = useAdminTheme();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    try {
      const res = await api.auth.login(email, password);
      localStorage.setItem("admin_token", res.data.token);
      localStorage.setItem("admin_user", JSON.stringify(res.data.user));
      window.location.href = "/admin";
    } catch (e) {
      setError(e.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className={`min-h-screen flex items-center justify-center px-4 ${mode === "dark" ? "admin-dark" : "admin-light"}`}>
      <form onSubmit={handleSubmit} className="w-full max-w-sm space-y-5 admin-card p-6">
        <div className="flex items-center justify-between">
          <h1 className="text-title-md text-admin-text">Admin</h1>
          <button
            type="button"
            onClick={() => setMode(mode === "dark" ? "light" : "dark")}
            className="admin-btn admin-btn-secondary text-xs"
          >
            {mode === "dark" ? "Clair" : "Sombre"}
          </button>
        </div>
        {error && <p className="text-sm text-red-500">{error}</p>}
        <div className="space-y-1">
          <label className="admin-label">Email</label>
          <input
            className="admin-input"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="admin@portfolio.local"
            required
          />
        </div>
        <div className="space-y-1">
          <label className="admin-label">Mot de passe</label>
          <div className="relative">
            <input
              className="admin-input pr-10"
              type={showPassword ? "text" : "password"}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <button
              type="button"
              onClick={() => setShowPassword((s) => !s)}
              className="absolute right-2 top-1/2 -translate-y-1/2 text-admin-muted hover:text-admin-text"
            >
              <span className="text-xs">{showPassword ? "🙈" : "👁"}</span>
            </button>
          </div>
        </div>
        <button type="submit" className="admin-btn admin-btn-primary w-full" disabled={loading}>
          {loading ? "Connexion..." : "Se connecter"}
        </button>
      </form>
    </div>
  );
}
