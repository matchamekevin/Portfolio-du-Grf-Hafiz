import { createContext, useContext, useState, useCallback, useRef } from "react";

const ToastContext = createContext(null);

let toastId = 0;

export function ToastProvider({ children }) {
  const [toasts, setToasts] = useState([]);
  const timersRef = useRef({});

  const remove = useCallback((id) => {
    clearTimeout(timersRef.current[id]);
    delete timersRef.current[id];
    setToasts((prev) => prev.filter((t) => t.id !== id));
  }, []);

  const add = useCallback((message, { type = "info", duration = 4000 } = {}) => {
    const id = ++toastId;
    setToasts((prev) => [...prev, { id, message, type }]);
    if (duration > 0) {
      timersRef.current[id] = setTimeout(() => remove(id), duration);
    }
    return id;
  }, [remove]);

  const toast = {
    success: (msg, opts) => add(msg, { ...opts, type: "success" }),
    error: (msg, opts) => add(msg, { ...opts, type: "error" }),
    warning: (msg, opts) => add(msg, { ...opts, type: "warning" }),
    info: (msg, opts) => add(msg, { ...opts, type: "info" }),
  };

  const icons = { success: "check_circle", error: "error", warning: "warning", info: "info" };
  const accents = {
    success: "border-l-emerald-400",
    error: "border-l-red-400",
    warning: "border-l-amber-400",
    info: "border-l-amber-400",
  };

  return (
    <ToastContext.Provider value={toast}>
      {children}
      <div className="fixed top-4 right-4 z-[9999] flex flex-col gap-2 pointer-events-none w-full max-w-xs sm:max-w-sm">
        {toasts.map((t) => (
          <div
            key={t.id}
            onClick={() => remove(t.id)}
            className={`pointer-events-auto bg-admin-surface-raised border border-admin-border/60 border-l-[3px] ${accents[t.type]} rounded-lg shadow-xl cursor-pointer flex items-start gap-3 p-3 sm:p-4 animate-in`}
          >
            <span className={`material-symbols-outlined text-lg shrink-0 mt-0.5 ${
              t.type === "success" ? "text-emerald-400" : t.type === "error" ? "text-red-400" : "text-amber-400"
            }`}>
              {icons[t.type]}
            </span>
            <span className="text-sm text-admin-text leading-snug flex-1">{t.message}</span>
          </div>
        ))}
      </div>
    </ToastContext.Provider>
  );
}

export function useToast() {
  const ctx = useContext(ToastContext);
  if (!ctx) throw new Error("useToast must be used within ToastProvider");
  return ctx;
}
