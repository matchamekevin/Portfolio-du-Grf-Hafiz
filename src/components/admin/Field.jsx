export default function Field({ label, children, hint }) {
  return (
    <div className="space-y-1">
      <label className="admin-label">{label}</label>
      {children}
      {hint && <p className="text-xs text-admin-muted mt-1">{hint}</p>}
    </div>
  );
}
