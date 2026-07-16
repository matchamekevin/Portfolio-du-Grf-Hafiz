import { createPortal } from "react-dom";
import { useEffect } from "react";
import { useAdminTheme } from "../../contexts/AdminThemeContext";

export default function Modal({ open, onClose, title, children }) {
  const { mode } = useAdminTheme();

  useEffect(() => {
    if (!open) return;
    const handleEsc = (e) => { if (e.key === "Escape") onClose(); };
    window.addEventListener("keydown", handleEsc);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", handleEsc);
      document.body.style.overflow = "";
    };
  }, [open, onClose]);

  if (!open) return null;

  return createPortal(
    <div className={`fixed inset-0 z-[200] flex items-center justify-center ${mode === "dark" ? "admin-dark" : "admin-light"}`} onClick={onClose}>
      <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" />
      <div
        className="relative w-full max-w-lg bg-admin-surface border border-admin-border/60 rounded-xl shadow-2xl overflow-hidden flex flex-col animate-in"
        style={{ maxHeight: "85vh", margin: "0 16px" }}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center justify-between px-5 py-3 border-b border-admin-border/60 shrink-0">
          <h3 className="text-base font-semibold text-admin-text">{title}</h3>
          <button
            onClick={onClose}
            className="w-11 h-11 flex items-center justify-center rounded-lg text-admin-muted hover:text-admin-text hover:bg-admin-bg/60 transition-colors"
          >
            <span className="material-symbols-outlined text-base">close</span>
          </button>
        </div>
        <div className="flex-1 overflow-y-auto px-5 py-1">
          {children}
        </div>
      </div>
    </div>,
    document.body
  );
}
