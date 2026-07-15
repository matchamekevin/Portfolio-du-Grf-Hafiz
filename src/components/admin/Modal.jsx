export default function Modal({ open, onClose, title, children }) {
  if (!open) return null;
  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-sheet" onClick={(e) => e.stopPropagation()}>
        <div className="flex items-center justify-between p-5 border-b border-admin-border/60">
          <h3 className="text-title-md text-admin-text">{title}</h3>
          <button onClick={onClose} className="text-admin-muted hover:text-admin-text transition-colors">
            <span className="text-sm">✕</span>
          </button>
        </div>
        <div className="p-5">{children}</div>
      </div>
    </div>
  );
}
