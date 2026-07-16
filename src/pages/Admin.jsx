import { useState, useEffect } from "react";
import { api } from "../services/api";
import { compressImage } from "../utils/compressImage";
import { useAuth } from "../contexts/AuthContext";
import { useAdminTheme } from "../contexts/AdminThemeContext";
import { useRealtime } from "../contexts/RealtimeContext";
import { useI18n } from "../i18n/I18nContext";
import { useToast } from "../components/admin/Toast";
import CloudinaryImg from "../components/admin/CloudinaryImg";
import AdminLayout from "../components/admin/AdminLayout";
import Modal from "../components/admin/Modal";
import Field from "../components/admin/Field";
import AdminHero from "./AdminHero";

const TABS = [
  { key: "showreel", label: "Showreel" },
  { key: "experiences", label: "Experiences" },
  { key: "gallery", label: "Galerie" },
  { key: "skills", label: "Competences" },
  { key: "hero", label: "Entete" },
  { key: "cta", label: "Boutons d'action" },
  { key: "page", label: "Contact & Footer" },
];

function ErrorMessage({ message }) {
  return <p className="text-red-500 text-sm py-2">{message}</p>;
}

function useAdminData(fetcher, fallback = null, deps = []) {
  const [data, setData] = useState(fallback);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    let cancelled = false;
    setLoading(true);
    setError(null);
    fetcher()
      .then((res) => {
        if (!cancelled && res && res.status === "ok") setData(res.data);
      })
      .catch((e) => { if (!cancelled) setError(e.message); })
      .finally(() => { if (!cancelled) setLoading(false); });
    return () => { cancelled = true; };
  }, [fetcher, ...deps]);

  return { data, loading, error, refresh: () => setLoading(true) };
}

function AdminShowreel({ refreshKey }) {
  const { data: items = [], error, refresh } = useAdminData(api.showreel.listAll, [], [refreshKey]);
  const toast = useToast();
  const [open, setOpen] = useState(false);
  const [editing, setEditing] = useState(null);
  const [form, setForm] = useState({ title: "", href: "", imageUrl: "", imagePublicId: "", subKey: "", subtitleFr: "", delay: "delay-100", order: 0, active: true });
  const [uploading, setUploading] = useState(false);

  const openCreate = () => { setEditing(null); setForm({ title: "", href: "", imageUrl: "", imagePublicId: "", subKey: `sr_${Date.now()}`, subtitleFr: "", delay: "delay-100", order: 0, active: true }); setOpen(true); };
  const openEdit = async (item) => {
    let subtitleFr = "";
    if (item.subKey) {
      try {
        const res = await api.translations.byLanguage("fr");
        if (res?.status === "ok") {
          const match = res.data.find((t) => t.key === item.subKey);
          if (match) subtitleFr = match.value;
        }
      } catch {}
    }
    setEditing(item.id);
    setForm({ title: item.title, href: item.href, imageUrl: item.imageUrl || "", imagePublicId: item.imagePublicId || "", subKey: item.subKey, subtitleFr, delay: item.delay || "delay-100", order: item.order || 0, active: item.active });
    setOpen(true);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const payload = { title: form.title, href: form.href, imageUrl: form.imageUrl, imagePublicId: form.imagePublicId, subKey: form.subKey, delay: form.delay, order: form.order, active: form.active };
      if (editing) await api.showreel.update(editing, payload);
      else await api.showreel.create(payload);
      if (form.subKey && form.subtitleFr) {
        try { await api.translations.upsert({ key: form.subKey, language: "fr", value: form.subtitleFr }); } catch {}
      }
      setOpen(false);
      refresh();
      toast.success(editing ? "Projet modifie" : "Projet cree");
    } catch (e) { toast.error(e.message); }
  };

  const handleDelete = async (id) => {
    if (!confirm("Supprimer ?")) return;
    try { await api.showreel.delete(id); refresh(); toast.success("Projet supprime"); } catch (e) { toast.error(e.message); }
  };

  const handleUpload = async (e) => {
    const raw = e.target.files[0];
    if (!raw) return;
    if (raw.size > 50 * 1024 * 1024) { toast.error("L'image depasse 50 Mo. Reduisez sa taille et reessayez."); return; }
    setUploading(true);
    try {
      const file = await compressImage(raw);
      const res = await api.upload.image(file);
      setForm((prev) => ({ ...prev, imageUrl: res.data.url, imagePublicId: res.data.publicId }));
      toast.success("Image envoyee");
    } catch (e) { toast.error(e.message); }
    finally { setUploading(false); }
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h2 className="text-xl font-semibold text-admin-text">Showreel</h2>
          <p className="text-sm text-admin-muted mt-1">{items.length} projet{items.length !== 1 ? "s" : ""}</p>
        </div>
        <button onClick={openCreate} className="admin-btn admin-btn-primary">
          <span className="material-symbols-outlined text-base mr-1">add</span>Nouveau projet
        </button>
      </div>
      {error && <ErrorMessage message={error} />}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {items.sort((a, b) => (a.order || 0) - (b.order || 0)).map((item) => (
          <div key={item.id} className="admin-card overflow-hidden group">
            <div className="aspect-video bg-admin-surface/80 flex items-center justify-center relative overflow-hidden">
              {item.imageUrl ? (
                <CloudinaryImg src={item.imageUrl} alt={item.title} w={400} className="w-full h-full object-cover" />
              ) : (
                <div className="flex items-center gap-3 text-admin-muted">
                  <span className="material-symbols-outlined text-4xl">image</span>
                  <span className="text-xs">Pas d'image</span>
                </div>
              )}
              <div className="absolute top-2 left-2 flex items-center gap-1.5">
                <span className="px-2 py-0.5 rounded text-[10px] font-bold uppercase bg-admin-accent/20 text-admin-accent">
                  #{item.order || 0}
                </span>
                {!item.active && (
                  <span className="px-2 py-0.5 rounded text-[10px] font-bold uppercase bg-red-500/20 text-red-400">
                    Inactif
                  </span>
                )}
              </div>
            </div>
            <div className="p-4">
              <div className="flex items-start justify-between gap-3">
                <div className="flex-1 min-w-0">
                  <h3 className="font-medium text-admin-text truncate">{item.title}</h3>
                  <p className="text-xs text-admin-muted mt-1 truncate flex items-center gap-1">
                    <span className="material-symbols-outlined text-sm">open_in_new</span>
                    {item.href ? (() => { try { return new URL(item.href).hostname.replace("www.", ""); } catch { return item.href; } })() : "—"}
                  </p>
                </div>
                <div className="flex gap-2 shrink-0">
                  <button onClick={() => openEdit(item)} className="admin-btn admin-btn-secondary text-sm px-3 py-2 min-h-[44px]">
                    <span className="material-symbols-outlined text-base">edit</span>
                  </button>
                  <button onClick={() => handleDelete(item.id)} className="admin-btn admin-btn-danger text-sm px-3 py-2 min-h-[44px]">
                    <span className="material-symbols-outlined text-base">delete</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      <Modal open={open} onClose={() => setOpen(false)} title={editing ? "Modifier le projet" : "Nouveau projet"}>
        <form onSubmit={handleSubmit} className="space-y-3">
          <Field label="Titre du projet" hint="Titre affiché sur la carte">
            <input className="admin-input" value={form.title} onChange={(e) => setForm({ ...form, title: e.target.value })} placeholder="Ex: SIFA, L'ordure…" required />
          </Field>
          <Field label="Lien vidéo" hint="URL Vimeo, YouTube ou page web">
            <input className="admin-input" value={form.href} onChange={(e) => setForm({ ...form, href: e.target.value })} placeholder="https://vimeo.com/..." required />
          </Field>
          <Field label="Sous-titre" hint="Texte affiché sous le titre (ex: Long-métrage fiction, 2024)">
            <input className="admin-input" value={form.subtitleFr} onChange={(e) => setForm({ ...form, subtitleFr: e.target.value })} placeholder="Ex: Long-métrage fiction, 2024" />
          </Field>
          <Field label="Image de couverture" hint="Image affichée sur la carte">
            {form.imageUrl ? (
              <div className="relative rounded-lg overflow-hidden border border-admin-border/60">
                <CloudinaryImg src={form.imageUrl} alt="Aperçu" w={600} className="w-full h-36 object-cover" />
                <button type="button" onClick={() => setForm({ ...form, imageUrl: "" })} className="absolute top-2 right-2 p-1.5 rounded-full bg-black/60 text-white hover:bg-black/80 transition-colors">
                  <span className="material-symbols-outlined text-sm">close</span>
                </button>
              </div>
            ) : (
              <label className="flex flex-col items-center gap-2 p-4 border-2 border-dashed border-admin-border/60 rounded-lg cursor-pointer hover:border-admin-accent/40 transition-colors">
                <span className="material-symbols-outlined text-3xl text-admin-muted">cloud_upload</span>
                <span className="text-sm text-admin-muted">{uploading ? "Upload…" : "Glissez ou cliquez pour ajouter"}</span>
                <input type="file" accept="image/*" className="hidden" onChange={handleUpload} disabled={uploading} />
              </label>
            )}
          </Field>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <Field label="Ordre d'affichage" hint="Position dans la liste">
              <input type="number" className="admin-input" value={form.order} onChange={(e) => setForm({ ...form, order: parseInt(e.target.value) || 0 })} />
            </Field>
            <div className="flex items-end pb-1">
              <label className="flex items-center gap-2 text-sm text-admin-text cursor-pointer min-h-[44px]">
                <input type="checkbox" checked={form.active} onChange={(e) => setForm({ ...form, active: e.target.checked })} className="rounded" />
                Projet actif
              </label>
            </div>
          </div>
          <div className="flex justify-end gap-2 pt-2 border-t border-admin-border/60">
            <button type="button" onClick={() => setOpen(false)} className="admin-btn admin-btn-secondary">Annuler</button>
            <button type="submit" className="admin-btn admin-btn-primary">
              <span className="material-symbols-outlined text-base mr-1">save</span>{editing ? "Mettre à jour" : "Créer"}
            </button>
          </div>
        </form>
      </Modal>
    </div>
  );
}

function AdminExperiences({ refreshKey }) {
  const { data: items = [], error, refresh } = useAdminData(api.experiences.listAll, [], [refreshKey]);
  const toast = useToast();
  const [open, setOpen] = useState(false);
  const [editing, setEditing] = useState(null);
  const [form, setForm] = useState({ title: "", role: "", meta: "", category: "cinema", order: 0, active: true });
  const [roleMap, setRoleMap] = useState({});

  useEffect(() => {
    api.translations.byLanguage("fr").then((res) => {
      if (res?.status === "ok" && Array.isArray(res.data)) {
        const map = {};
        res.data.forEach((t) => { map[t.key] = t.value; });
        setRoleMap(map);
      }
    }).catch(() => {});
  }, []);

  const resolveRole = (role) => {
    if (role && !role.includes(" ") && roleMap[role]) return roleMap[role];
    return role;
  };

  const openCreate = () => { setEditing(null); setForm({ title: "", role: "", meta: "", category: "cinema", order: 0, active: true }); setOpen(true); };

  const openEdit = async (item) => {
    setEditing(item.id);
    let roleText = item.role || "";
    if (item.role && !item.role.includes(" ")) {
      try {
        const res = await api.translations.byLanguage("fr");
        if (res?.status === "ok" && Array.isArray(res.data)) {
          const match = res.data.find((t) => t.key === item.role);
          if (match) roleText = match.value;
        }
      } catch {}
    }
    setForm({ title: item.title, role: roleText, meta: item.meta, category: item.category, order: item.order || 0, active: item.active });
    setOpen(true);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (editing) await api.experiences.update(editing, form);
      else await api.experiences.create(form);
      setOpen(false);
      refresh();
      toast.success(editing ? "Experience modifiee" : "Experience ajoutee");
    } catch (e) { toast.error(e.message); }
  };

  const handleDelete = async (id) => {
    if (!confirm("Supprimer ?")) return;
    try { await api.experiences.delete(id); refresh(); toast.success("Experience supprimee"); } catch (e) { toast.error(e.message); }
  };

  return (
    <div className="space-y-4">
      <div className="flex justify-between items-center">
        <h2 className="text-xl font-semibold text-admin-text">Experiences professionnelles</h2>
        <button onClick={openCreate} className="admin-btn admin-btn-primary">Ajouter</button>
      </div>
      {error && <ErrorMessage message={error} />}
      <div className="space-y-2">
        {items.map((item) => (
          <div key={item.id} className="admin-card p-4 flex items-start justify-between gap-3">
            <div className="flex-1 min-w-0">
              <p className="font-medium text-admin-text truncate">{item.title}</p>
              <p className="text-xs text-admin-muted mt-1">{resolveRole(item.role)}</p>
              <p className="text-xs text-admin-muted">{item.meta} · <span className="capitalize">{item.category}</span></p>
            </div>
            <div className="flex gap-2 shrink-0">
              <button onClick={() => openEdit(item)} className="admin-btn admin-btn-secondary text-sm px-3 py-2 min-h-[44px]">Editer</button>
              <button onClick={() => handleDelete(item.id)} className="admin-btn admin-btn-danger text-sm px-3 py-2 min-h-[44px]">Supprimer</button>
            </div>
          </div>
        ))}
      </div>
      <Modal open={open} onClose={() => setOpen(false)} title={editing ? "Modifier l experience" : "Nouvelle experience"}>
        <form onSubmit={handleSubmit} className="space-y-3">
          <Field label="Titre du projet"><input className="admin-input" value={form.title} onChange={(e) => setForm({ ...form, title: e.target.value })} required /></Field>
          <Field label="Role / Fonction" hint="Ex: Ingenieur du son, mixage..."><input className="admin-input" value={form.role} onChange={(e) => setForm({ ...form, role: e.target.value })} required /></Field>
          <Field label="Details" hint="Annee, pays, festival..."><input className="admin-input" value={form.meta} onChange={(e) => setForm({ ...form, meta: e.target.value })} required /></Field>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <Field label="Categorie" hint="Selectionnez ou saisissez une nouvelle">
              <div className="relative">
                <input
                  className="admin-input"
                  value={form.category}
                  onChange={(e) => setForm({ ...form, category: e.target.value })}
                  onFocus={(e) => e.target.nextElementSibling?.classList.remove("hidden")}
                  onBlur={(e) => setTimeout(() => e.target.nextElementSibling?.classList.add("hidden"), 150)}
                  placeholder="Ex: cinema, theatre, musique..."
                  required
                />
                {[...new Set(items.map((i) => i.category).filter(Boolean))].length > 0 && (
                  <div className="hidden absolute z-10 top-full left-0 right-0 mt-1 bg-admin-surface border border-admin-border/60 rounded-lg shadow-lg max-h-40 overflow-y-auto">
                    {[...new Set(items.map((i) => i.category).filter(Boolean))].map((cat) => (
                      <button
                        key={cat}
                        type="button"
                        className="w-full text-left px-3 py-2 text-sm text-admin-text hover:bg-admin-accent/10 transition-colors"
                        onMouseDown={(e) => { e.preventDefault(); setForm({ ...form, category: cat }); }}
                      >
                        {cat}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            </Field>
            <Field label="Ordre">
              <input type="number" className="admin-input" value={form.order} onChange={(e) => setForm({ ...form, order: parseInt(e.target.value) || 0 })} />
            </Field>
          </div>
          <label className="flex items-center gap-2 text-sm text-admin-text cursor-pointer min-h-[44px] py-1">
            <input type="checkbox" checked={form.active} onChange={(e) => setForm({ ...form, active: e.target.checked })} className="rounded" />
            Experience active
          </label>
          <div className="flex justify-end gap-2 pt-2 border-t border-admin-border/60">
            <button type="button" onClick={() => setOpen(false)} className="admin-btn admin-btn-secondary">Annuler</button>
            <button type="submit" className="admin-btn admin-btn-primary">
              <span className="material-symbols-outlined text-base mr-1">save</span>{editing ? "Mettre à jour" : "Créer"}
            </button>
          </div>
        </form>
      </Modal>
    </div>
  );
}

function AdminGallery({ refreshKey }) {
  const { data: items = [], error, refresh } = useAdminData(api.gallery.listAll, [], [refreshKey]);
  const toast = useToast();
  const [open, setOpen] = useState(false);
  const [editing, setEditing] = useState(null);
  const [form, setForm] = useState({ src: "", alt: "", order: 0, active: true });
  const [file, setFile] = useState(null);
  const [uploading, setUploading] = useState(false);
  const [dragOver, setDragOver] = useState(false);

  const openCreate = () => { setEditing(null); setForm({ src: "", alt: "", order: 0, active: true }); setOpen(true); };
  const openEdit = (item) => { setEditing(item.id); setForm({ src: item.src, alt: item.alt, order: item.order || 0, active: item.active }); setOpen(true); };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (editing) await api.gallery.update(editing, form);
      else await api.gallery.create(form);
      setOpen(false);
      refresh();
      toast.success(editing ? "Photo modifiee" : "Photo ajoutee");
    } catch (e) { toast.error(e.message); }
  };

  const handleDelete = async (id) => {
    if (!confirm("Supprimer ?")) return;
    try { await api.gallery.delete(id); refresh(); toast.success("Photo supprimee"); } catch (e) { toast.error(e.message); }
  };

  const doUpload = async (f) => {
    if (!f) return;
    if (f.size > 50 * 1024 * 1024) { toast.error("L'image depasse 50 Mo. Reduisez sa taille et reessayez."); return; }
    setUploading(true);
    try {
      const file = await compressImage(f);
      const res = await api.upload.image(file);
      setForm((prev) => ({ ...prev, src: res.data.url, publicId: res.data.publicId }));
      setFile(null);
      toast.success("Image envoyee");
    } catch (e) { toast.error(e.message); }
    finally { setUploading(false); }
  };

  const handleFileChange = (e) => {
    const f = e.target.files[0];
    if (f) doUpload(f);
  };

  const handleDrop = (e) => {
    e.preventDefault();
    setDragOver(false);
    const f = e.dataTransfer.files[0];
    if (f && f.type.startsWith("image/")) doUpload(f);
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h2 className="text-xl font-semibold text-admin-text">Galerie photos</h2>
          <p className="text-sm text-admin-muted mt-1">{items.length} photo{items.length !== 1 ? "s" : ""}</p>
        </div>
        <button onClick={openCreate} className="admin-btn admin-btn-primary">
          <span className="material-symbols-outlined text-base mr-1">add</span>Ajouter une photo
        </button>
      </div>

      {error && <ErrorMessage message={error} />}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
        {items.sort((a, b) => (a.order || 0) - (b.order || 0)).map((item) => (
          <div key={item.id} className="admin-card overflow-hidden group">
            <div className="aspect-square bg-admin-surface/80 relative overflow-hidden">
              <CloudinaryImg src={item.src} alt={item.alt} w={300} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end justify-between p-3">
                <span className="text-xs text-white/80 truncate">{item.alt}</span>
                <div className="flex gap-1.5">
                  <button onClick={() => openEdit(item)} className="p-2 rounded bg-white/20 hover:bg-white/30 text-white transition-colors min-h-[44px] min-w-[44px] flex items-center justify-center">
                    <span className="material-symbols-outlined text-base">edit</span>
                  </button>
                  <button onClick={() => handleDelete(item.id)} className="p-2 rounded bg-red-500/40 hover:bg-red-500/60 text-white transition-colors min-h-[44px] min-w-[44px] flex items-center justify-center">
                    <span className="material-symbols-outlined text-base">delete</span>
                  </button>
                </div>
              </div>
              {!item.active && (
                <div className="absolute top-2 right-2">
                  <span className="px-1.5 py-0.5 rounded text-[10px] font-bold uppercase bg-red-500/20 text-red-400">Inactif</span>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
      <Modal open={open} onClose={() => setOpen(false)} title={editing ? "Modifier la photo" : "Nouvelle photo"}>
        <form onSubmit={handleSubmit} className="space-y-3">
          {form.src ? (
            <div className="relative rounded-lg overflow-hidden border border-admin-border/60">
              <CloudinaryImg src={form.src} alt="Aperçu" w={600} className="w-full h-48 object-cover" />
              <button type="button" onClick={() => setForm({ ...form, src: "" })} className="absolute top-2 right-2 p-1.5 rounded-full bg-black/60 text-white hover:bg-black/80 transition-colors">
                <span className="material-symbols-outlined text-sm">close</span>
              </button>
            </div>
          ) : (
            <div
              className={`border-2 border-dashed rounded-lg p-6 text-center cursor-pointer transition-colors ${dragOver ? "border-admin-accent" : "border-admin-border/60 hover:border-admin-accent/40"}`}
              onDragOver={(e) => { e.preventDefault(); setDragOver(true); }}
              onDragLeave={() => setDragOver(false)}
              onDrop={(e) => { e.preventDefault(); setDragOver(false); const f = e.dataTransfer.files[0]; if (f) doUpload(f); }}
              onClick={() => document.getElementById("gallery-modal-input").click()}
            >
              <input id="gallery-modal-input" type="file" accept="image/*" className="hidden" onChange={handleFileChange} />
              <span className="material-symbols-outlined text-3xl text-admin-muted">cloud_upload</span>
              <p className="text-sm text-admin-muted mt-2">Glissez ou cliquez</p>
            </div>
          )}
          <Field label="Description (alt)" hint="Texte pour l'accessibilité">
            <input className="admin-input" value={form.alt} onChange={(e) => setForm({ ...form, alt: e.target.value })} placeholder="Description de l'image" required />
          </Field>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <Field label="Ordre">
              <input type="number" className="admin-input" value={form.order} onChange={(e) => setForm({ ...form, order: parseInt(e.target.value) || 0 })} />
            </Field>
            <div className="flex items-end pb-1">
              <label className="flex items-center gap-2 text-sm text-admin-text cursor-pointer min-h-[44px] py-1">
                <input type="checkbox" checked={form.active} onChange={(e) => setForm({ ...form, active: e.target.checked })} className="rounded" />
                Photo active
              </label>
            </div>
          </div>
          <div className="flex justify-end gap-2 pt-2 border-t border-admin-border/60">
            <button type="button" onClick={() => setOpen(false)} className="admin-btn admin-btn-secondary">Annuler</button>
            <button type="submit" className="admin-btn admin-btn-primary" disabled={!form.src}>
              <span className="material-symbols-outlined text-base mr-1">save</span>{editing ? "Mettre à jour" : "Créer"}
            </button>
          </div>
        </form>
      </Modal>
    </div>
  );
}

function AdminSkills({ refreshKey }) {
  const { data: items = [], error, refresh } = useAdminData(api.skills.listAll, [], [refreshKey]);
  const { t } = useI18n();
  const toast = useToast();
  const [open, setOpen] = useState(false);
  const [editing, setEditing] = useState(null);
  const [form, setForm] = useState({ section: "", title: "", items: "", order: 0, active: true });

  const KNOWN_SECTIONS = [
    { value: "sk_software", label: "Logiciels" },
    { value: "sk_tools", label: "Outils metier" },
    { value: "dante_b_t", label: "Certification Dante" },
    { value: "education", label: "Parcours" },
    { value: "training", label: "Formation" },
  ];

  const openCreate = () => {
    setEditing(null);
    setForm({ section: "", title: "", items: "", order: 0, active: true });
    setOpen(true);
  };
  const openEdit = (item) => {
    setEditing(item.id);
    setForm({
      section: item.section,
      title: resolveTitle(item.title) || item.title,
      items: Array.isArray(item.items) ? item.items.join("\n") : "",
      order: item.order || 0,
      active: item.active,
    });
    setOpen(true);
  };

  const resolveTitle = (key) => {
    if (!key) return "";
    const val = t(key);
    return val !== key ? val : key;
  };

  const resolveSection = (key) => {
    const known = KNOWN_SECTIONS.find((s) => s.value === key);
    if (known) return known.label;
    return resolveTitle(key) || key;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const payload = { ...form, items: form.items.split("\n").filter(Boolean) };
      if (editing) await api.skills.update(editing, payload);
      else await api.skills.create(payload);
      setOpen(false);
      refresh();
      toast.success(editing ? "Section modifiee" : "Section ajoutee");
    } catch (e) { toast.error(e.message); }
  };

  const handleDelete = async (id) => {
    if (!confirm("Supprimer ?")) return;
    try { await api.skills.delete(id); refresh(); toast.success("Section supprimee"); } catch (e) { toast.error(e.message); }
  };

  return (
    <div className="space-y-4">
      <div className="flex justify-between items-center">
        <h2 className="text-xl font-semibold text-admin-text">Sections competences</h2>
        <button onClick={openCreate} className="admin-btn admin-btn-primary">Ajouter</button>
      </div>
      {error && <ErrorMessage message={error} />}
      <div className="space-y-2">
        {items.map((item) => (
          <div key={item.id} className="admin-card p-4 flex items-start justify-between gap-3">
            <div className="flex-1 min-w-0">
              <p className="font-medium text-admin-text truncate">{resolveTitle(item.title)}</p>
              <p className="text-xs text-admin-muted mt-1">{resolveSection(item.section)}</p>
              <p className="text-xs text-admin-muted">{Array.isArray(item.items) ? item.items.join(", ") : ""}</p>
            </div>
            <div className="flex gap-2 shrink-0">
              <button onClick={() => openEdit(item)} className="admin-btn admin-btn-secondary text-sm px-3 py-2 min-h-[44px]">Editer</button>
              <button onClick={() => handleDelete(item.id)} className="admin-btn admin-btn-danger text-sm px-3 py-2 min-h-[44px]">Supprimer</button>
            </div>
          </div>
        ))}
      </div>
      <Modal open={open} onClose={() => setOpen(false)} title={editing ? "Modifier la section" : "Nouvelle section"}>
        <form onSubmit={handleSubmit} className="space-y-3">
          <Field label="Titre affiche" hint="Titre visible sur le site">
            <input className="admin-input" value={form.title} onChange={(e) => setForm({ ...form, title: e.target.value })} required />
          </Field>
          <Field label="Section" hint="Selectionner ou saisir une section">
            <input
              list="skills-sections-list"
              className="admin-input"
              value={resolveSection(form.section)}
              onChange={(e) => {
                const match = KNOWN_SECTIONS.find((s) => s.label === e.target.value);
                setForm({ ...form, section: match ? match.value : e.target.value });
              }}
              required
              placeholder="Choisir ou taper..."
            />
            <datalist id="skills-sections-list">
              {KNOWN_SECTIONS.map((s) => <option key={s.value} value={s.label} />)}
            </datalist>
          </Field>
          <Field label="Elements" hint="Un element par ligne">
            <textarea className="admin-input" rows={4} value={form.items} onChange={(e) => setForm({ ...form, items: e.target.value })} required />
          </Field>
          <div className="flex items-center gap-2 pt-1">
            <input type="checkbox" checked={form.active} onChange={(e) => setForm({ ...form, active: e.target.checked })} className="rounded" />
            <label className="text-sm text-admin-text">Section active</label>
          </div>
          <div className="flex justify-end gap-2 pt-2 border-t border-admin-border/60">
            <button type="button" onClick={() => setOpen(false)} className="admin-btn admin-btn-secondary">Annuler</button>
            <button type="submit" className="admin-btn admin-btn-primary">
              <span className="material-symbols-outlined text-base mr-1">save</span>{editing ? "Mettre a jour" : "Creer"}
            </button>
          </div>
        </form>
      </Modal>
    </div>
  );
}

function AdminTrajectoire() {
  const toast = useToast();
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [langText, setLangText] = useState("");

  useEffect(() => {
    api.trajectoire.get().then((res) => {
      if (res?.status === "ok" && res.data) {
        setData(res.data);
        setLangText((res.data.languages || []).join("\n"));
      }
    }).catch(() => {}).finally(() => setLoading(false));
  }, []);

  const updateField = (field, value) => {
    setData((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSaving(true);
    try {
      const payload = { ...data, languages: langText.split("\n").filter((l) => l.trim()) };
      await api.trajectoire.upsert(payload);
      setData(payload);
      toast.success("Trajectoire mise a jour");
    } catch (e) { toast.error(e.message); }
    finally { setSaving(false); }
  };

  if (loading) return <p className="text-sm text-admin-muted">Chargement...</p>;

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-xl font-semibold text-admin-text">Trajectoire professionnelle</h2>
        <button type="submit" className="admin-btn admin-btn-primary" disabled={saving || !data}>
          <span className="material-symbols-outlined text-base mr-1">save</span>{saving ? "Sauvegarde..." : "Sauvegarder"}
        </button>
      </div>

      <div className="admin-card p-6 space-y-4">
        <h3 className="text-sm font-semibold text-admin-text uppercase tracking-wide">Certification Dante</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <Field label="Sous-titre" hint="Ex: Specialiste certifie Dante">
            <textarea className="admin-input" rows={2} value={data?.danteSubtitle || ""} onChange={(e) => updateField("danteSubtitle", e.target.value)} />
          </Field>
          <Field label="Niveaux" hint="Ex: Niveaux 1, 2 et 3">
            <textarea className="admin-input" rows={2} value={data?.danteTitle || ""} onChange={(e) => updateField("danteTitle", e.target.value)} />
          </Field>
        </div>
      </div>

      <div className="admin-card p-6 space-y-4">
        <h3 className="text-sm font-semibold text-admin-text uppercase tracking-wide">Langues</h3>
        <Field label="Langues" hint="Une langue par ligne">
          <textarea
            className="admin-input"
            rows={5}
            value={langText}
            onChange={(e) => setLangText(e.target.value)}
          />
        </Field>
      </div>
    </form>
  );
}

function AdminCTA() {
  const toast = useToast();
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);

  useEffect(() => {
    api.page.cta().then((res) => {
      if (res?.status === "ok" && res.data) setData(res.data);
    }).catch(() => {}).finally(() => setLoading(false));
  }, []);

  const updateField = (field, value) => {
    setData((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSaving(true);
    try {
      await api.page.updateCta(data);
      toast.success("Call to Action mis a jour");
    } catch (e) { toast.error(e.message); }
    finally { setSaving(false); }
  };

  if (loading) return <p className="text-sm text-admin-muted">Chargement...</p>;

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-xl font-semibold text-admin-text">Boutons d'action</h2>
        <button type="submit" className="admin-btn admin-btn-primary" disabled={saving || !data}>
          <span className="material-symbols-outlined text-base mr-1">save</span>{saving ? "Sauvegarde..." : "Sauvegarder"}
        </button>
      </div>

      <div className="admin-card p-6 space-y-4">
        <h3 className="text-sm font-semibold text-admin-text uppercase tracking-wide">Texte</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <Field label="Titre" hint="Ex: Pret pour le">
            <input className="admin-input" value={data?.title || ""} onChange={(e) => updateField("title", e.target.value)} />
          </Field>
          <Field label="Texte en couleur" hint="Partie mise en avant en jaune">
            <input className="admin-input" value={data?.titleAccent || ""} onChange={(e) => updateField("titleAccent", e.target.value)} />
          </Field>
        </div>
        <Field label="Description">
          <textarea className="admin-input" rows={3} value={data?.description || ""} onChange={(e) => updateField("description", e.target.value)} />
        </Field>
      </div>

      <div className="admin-card p-6 space-y-4">
        <h3 className="text-sm font-semibold text-admin-text uppercase tracking-wide">Boutons</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <Field label="Texte du bouton principal" hint="Ex: Engagez-moi">
            <input className="admin-input" value={data?.engageLabel || ""} onChange={(e) => updateField("engageLabel", e.target.value)} />
          </Field>
          <Field label="Lien du bouton principal" hint="Ex: mailto:...">
            <input className="admin-input" value={data?.engageHref || ""} onChange={(e) => updateField("engageHref", e.target.value)} />
          </Field>
          <Field label="Texte du bouton CV" hint="Ex: Telecharger le CV">
            <input className="admin-input" value={data?.cvLabel || ""} onChange={(e) => updateField("cvLabel", e.target.value)} />
          </Field>
          <Field label="Lien du bouton CV" hint="Ex: mailto:...?subject=CV">
            <input className="admin-input" value={data?.cvHref || ""} onChange={(e) => updateField("cvHref", e.target.value)} />
          </Field>
        </div>
      </div>
    </form>
  );
}

function AdminProfile() {
  const { user, updateUser, logout } = useAuth();
  const toast = useToast();
  const [name, setName] = useState(user?.name || "");
  const [email, setEmail] = useState(user?.email || "");
  const [savingProfile, setSavingProfile] = useState(false);

  const [currentPwd, setCurrentPwd] = useState("");
  const [newPwd, setNewPwd] = useState("");
  const [confirmPwd, setConfirmPwd] = useState("");
  const [showCurrent, setShowCurrent] = useState(false);
  const [showNew, setShowNew] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);
  const [savingPwd, setSavingPwd] = useState(false);
  const [resetMode, setResetMode] = useState(false);

  const handleProfile = async (e) => {
    e.preventDefault();
    setSavingProfile(true);
    try {
      const res = await api.auth.updateProfile({ name, email });
      if (res?.status === "ok") {
        updateUser(res.data);
        toast.success("Profil mis a jour");
      }
    } catch (e) { toast.error(e.message); }
    finally { setSavingProfile(false); }
  };

  const handlePassword = async (e) => {
    e.preventDefault();
    if (newPwd !== confirmPwd) { toast.error("Les mots de passe ne correspondent pas"); return; }
    setSavingPwd(true);
    try {
      await api.auth.changePassword({ currentPassword: currentPwd, newPassword: newPwd, confirmPassword: confirmPwd });
      toast.success("Mot de passe modifie");
      setCurrentPwd(""); setNewPwd(""); setConfirmPwd("");
    } catch (e) { toast.error(e.message); }
    finally { setSavingPwd(false); }
  };

  const handleResetPassword = async (e) => {
    e.preventDefault();
    if (newPwd !== confirmPwd) { toast.error("Les mots de passe ne correspondent pas"); return; }
    setSavingPwd(true);
    try {
      await api.auth.resetPassword({ newPassword: newPwd, confirmPassword: confirmPwd });
      toast.success("Mot de passe reinitialise. Reconnectez-vous.");
      setNewPwd(""); setConfirmPwd(""); setResetMode(false);
      setTimeout(() => logout(), 1200);
    } catch (e) { toast.error(e.message); }
    finally { setSavingPwd(false); }
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center gap-3">
        <div className="w-12 h-12 rounded-full bg-admin-accent/10 border border-admin-accent/30 flex items-center justify-center">
          <span className="material-symbols-outlined text-xl text-admin-accent">person</span>
        </div>
        <div>
          <h2 className="text-xl font-semibold text-admin-text">Mon profil</h2>
          <p className="text-sm text-admin-muted">{user?.email}</p>
        </div>
      </div>

      <form onSubmit={handleProfile} className="admin-card p-6 space-y-4">
        <h3 className="text-sm font-semibold text-admin-text uppercase tracking-wide">Informations</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <Field label="Nom">
            <input className="admin-input" value={name} onChange={(e) => setName(e.target.value)} placeholder="Votre nom" />
          </Field>
          <Field label="Email">
            <input className="admin-input" type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
          </Field>
        </div>
        <div className="flex justify-end pt-2 border-t border-admin-border/60">
          <button type="submit" className="admin-btn admin-btn-primary" disabled={savingProfile}>
            <span className="material-symbols-outlined text-base mr-1">{savingProfile ? "hourglass_empty" : "save"}</span>{savingProfile ? "Sauvegarde..." : "Sauvegarder"}
          </button>
        </div>
      </form>

      <form onSubmit={resetMode ? handleResetPassword : handlePassword} className="admin-card p-6 space-y-4">
        <div className="flex items-center justify-between gap-3">
          <h3 className="text-sm font-semibold text-admin-text uppercase tracking-wide">
            {resetMode ? "Reinitialiser le mot de passe" : "Changer le mot de passe"}
          </h3>
          <button type="button" onClick={() => { setResetMode((v) => !v); setCurrentPwd(""); setNewPwd(""); setConfirmPwd(""); }}
            className="text-xs text-admin-accent hover:underline">
            {resetMode ? "Annuler" : "Mot de passe oublie ?"}
          </button>
        </div>

        {resetMode ? (
          <p className="text-sm text-admin-muted">Saisissez un nouveau mot de passe. La session sera fermee apres la reinitialisation.</p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <Field label="Mot de passe actuel">
              <div className="relative">
                <input className="admin-input pr-10" type={showCurrent ? "text" : "password"} value={currentPwd} onChange={(e) => setCurrentPwd(e.target.value)} required autoComplete="current-password" />
                <button type="button" onClick={() => setShowCurrent((v) => !v)} className="absolute right-2 top-1/2 -translate-y-1/2 w-8 h-8 flex items-center justify-center rounded text-admin-muted hover:text-admin-text transition-colors" tabIndex={-1}>
                  <span className="material-symbols-outlined text-lg">{showCurrent ? "visibility_off" : "visibility"}</span>
                </button>
              </div>
            </Field>
            <div />
            <Field label="Nouveau mot de passe" hint="Minimum 6 caracteres">
              <div className="relative">
                <input className="admin-input pr-10" type={showNew ? "text" : "password"} value={newPwd} onChange={(e) => setNewPwd(e.target.value)} required minLength={6} autoComplete="new-password" />
                <button type="button" onClick={() => setShowNew((v) => !v)} className="absolute right-2 top-1/2 -translate-y-1/2 w-8 h-8 flex items-center justify-center rounded text-admin-muted hover:text-admin-text transition-colors" tabIndex={-1}>
                  <span className="material-symbols-outlined text-lg">{showNew ? "visibility_off" : "visibility"}</span>
                </button>
              </div>
            </Field>
            <Field label="Confirmer le mot de passe">
              <div className="relative">
                <input className="admin-input pr-10" type={showConfirm ? "text" : "password"} value={confirmPwd} onChange={(e) => setConfirmPwd(e.target.value)} required minLength={6} autoComplete="new-password" />
                <button type="button" onClick={() => setShowConfirm((v) => !v)} className="absolute right-2 top-1/2 -translate-y-1/2 w-8 h-8 flex items-center justify-center rounded text-admin-muted hover:text-admin-text transition-colors" tabIndex={-1}>
                  <span className="material-symbols-outlined text-lg">{showConfirm ? "visibility_off" : "visibility"}</span>
                </button>
              </div>
            </Field>
          </div>
        )}

        {resetMode && (
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <Field label="Nouveau mot de passe" hint="Minimum 6 caracteres">
              <div className="relative">
                <input className="admin-input pr-10" type={showNew ? "text" : "password"} value={newPwd} onChange={(e) => setNewPwd(e.target.value)} required minLength={6} autoComplete="new-password" />
                <button type="button" onClick={() => setShowNew((v) => !v)} className="absolute right-2 top-1/2 -translate-y-1/2 w-8 h-8 flex items-center justify-center rounded text-admin-muted hover:text-admin-text transition-colors" tabIndex={-1}>
                  <span className="material-symbols-outlined text-lg">{showNew ? "visibility_off" : "visibility"}</span>
                </button>
              </div>
            </Field>
            <Field label="Confirmer le mot de passe">
              <div className="relative">
                <input className="admin-input pr-10" type={showConfirm ? "text" : "password"} value={confirmPwd} onChange={(e) => setConfirmPwd(e.target.value)} required minLength={6} autoComplete="new-password" />
                <button type="button" onClick={() => setShowConfirm((v) => !v)} className="absolute right-2 top-1/2 -translate-y-1/2 w-8 h-8 flex items-center justify-center rounded text-admin-muted hover:text-admin-text transition-colors" tabIndex={-1}>
                  <span className="material-symbols-outlined text-lg">{showConfirm ? "visibility_off" : "visibility"}</span>
                </button>
              </div>
            </Field>
          </div>
        )}

        <div className="flex justify-end pt-2 border-t border-admin-border/60">
          <button type="submit" className="admin-btn admin-btn-primary" disabled={savingPwd}>
            <span className="material-symbols-outlined text-base mr-1">{savingPwd ? "hourglass_empty" : "lock"}</span>{savingPwd ? "Modification..." : (resetMode ? "Reinitialiser" : "Modifier le mot de passe")}
          </button>
        </div>
      </form>

      <div className="admin-card p-6 space-y-4">
        <h3 className="text-sm font-semibold text-admin-text uppercase tracking-wide">Session</h3>
        <p className="text-sm text-admin-muted">
          Connecte en tant que <span className="text-admin-text font-medium">{user?.email}</span>
        </p>
        <button onClick={logout} className="admin-btn admin-btn-danger">
          <span className="material-symbols-outlined text-base mr-1">logout</span>Se deconnecter
        </button>
      </div>
    </div>
  );
}

function AdminPage() {
  const { user, logout } = useAuth();
  const { mode, setMode } = useAdminTheme();
  const toast = useToast();
  const [tab, setTabState] = useState(() => {
    try { return localStorage.getItem("admin_tab") || "hero"; } catch { return "hero"; }
  });
  const setTab = (key) => {
    setTabState(key);
    try { localStorage.setItem("admin_tab", key); } catch {}
  };
  const [contact, setContact] = useState(null);
  const [footer, setFooter] = useState(null);
  const [refreshKey, setRefreshKey] = useState(0);
  const [syncing, setSyncing] = useState(false);
  const [savingContact, setSavingContact] = useState(false);
  const [savingFooter, setSavingFooter] = useState(false);

  const { data: contactData, loading: contactLoading } = useAdminData(api.page.contact, null, [refreshKey]);
  const { data: footerData, loading: footerLoading } = useAdminData(api.page.footer, null, [refreshKey]);

  useEffect(() => { setContact(contactData); }, [contactData]);
  useEffect(() => { setFooter(footerData); }, [footerData]);

  const refreshAll = () => setRefreshKey((k) => k + 1);

  useRealtime((payload) => {
    if (payload?.type === "updated" || payload?.type === "translations-updated") refreshAll();
  });

  const handleAutoTranslate = async () => {
    setSyncing(true);
    try {
      await api.translations.autoSync({ sourceLanguage: "fr", targetLanguages: ["en", "de", "es", "pt"] });
      toast.success("Traductions automatiques mises a jour");
    } catch (e) {
      toast.error(e.message);
    } finally {
      setSyncing(false);
    }
  };

  const updateContact = async (data) => {
    setSavingContact(true);
    try {
      await api.page.updateContact(data);
      refreshAll();
      toast.success("Contact sauvegarde");
    } catch (e) {
      toast.error("Erreur contact : " + e.message);
    } finally {
      setSavingContact(false);
    }
  };
  const updateFooter = async (data) => {
    setSavingFooter(true);
    try {
      await api.page.updateFooter(data);
      refreshAll();
      toast.success("Footer sauvegarde");
    } catch (e) {
      toast.error("Erreur footer : " + e.message);
    } finally {
      setSavingFooter(false);
    }
  };

  return (
    <AdminLayout title={user?.name || "Portfolio"} onLogout={logout} activeTab={tab} onTabChange={setTab}>
      {tab === "showreel" && <AdminShowreel refreshKey={refreshKey} />}
      {tab === "experiences" && <AdminExperiences refreshKey={refreshKey} />}
      {tab === "gallery" && <AdminGallery refreshKey={refreshKey} />}
      {tab === "skills" && <AdminSkills refreshKey={refreshKey} />}
      {tab === "trajectoire" && <AdminTrajectoire />}
      {tab === "hero" && <AdminHero />}
      {tab === "cta" && <AdminCTA />}
      {tab === "profile" && <AdminProfile />}
      {tab === "page" && (
        <div className="space-y-6">
          {contact && (
            <section className="admin-card p-6 space-y-4">
              <div className="flex justify-between items-center">
                <h2 className="font-headline-md text-headline-md text-admin-text">Contact</h2>
                <button type="button" onClick={() => updateContact(contact)} className="admin-btn admin-btn-primary text-xs" disabled={savingContact}>
                  <span className="material-symbols-outlined text-base mr-1">{savingContact ? "hourglass_empty" : "save"}</span>{savingContact ? "Sauvegarde..." : "Sauvegarder"}
                </button>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Field label="Email public"><input className="admin-input" value={contact.email || ""} onChange={(e) => setContact({ ...contact, email: e.target.value })} /></Field>
                <Field label="Email de reception du formulaire" hint="Les messages du formulaire seront envoyes a cette adresse"><input className="admin-input" value={contact.formEmail || contact.email || ""} onChange={(e) => setContact({ ...contact, formEmail: e.target.value })} /></Field>
                <Field label="Telephone 1"><input className="admin-input" value={contact.phone1 || ""} onChange={(e) => setContact({ ...contact, phone1: e.target.value })} /></Field>
                <Field label="Telephone 2"><input className="admin-input" value={contact.phone2 || ""} onChange={(e) => setContact({ ...contact, phone2: e.target.value })} /></Field>
                <Field label="Disponibilite"><input className="admin-input" value={contact.availability || ""} onChange={(e) => setContact({ ...contact, availability: e.target.value })} /></Field>
                <Field label="Localisation"><input className="admin-input" value={contact.location || ""} onChange={(e) => setContact({ ...contact, location: e.target.value })} /></Field>
              </div>
            </section>
          )}
          {footer && (
            <section className="admin-card p-6 space-y-4">
              <div className="flex justify-between items-center">
                <h2 className="font-headline-md text-headline-md text-admin-text">Footer</h2>
                <button type="button" onClick={() => updateFooter(footer)} className="admin-btn admin-btn-primary text-xs" disabled={savingFooter}>
                  <span className="material-symbols-outlined text-base mr-1">{savingFooter ? "hourglass_empty" : "save"}</span>{savingFooter ? "Sauvegarde..." : "Sauvegarder"}
                </button>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Field label="Nom affiche"><input className="admin-input" value={footer.name || ""} onChange={(e) => setFooter({ ...footer, name: e.target.value })} /></Field>
                <Field label="Email"><input className="admin-input" value={footer.email || ""} onChange={(e) => setFooter({ ...footer, email: e.target.value })} /></Field>
                <Field label="Telephone"><input className="admin-input" value={footer.phone || ""} onChange={(e) => setFooter({ ...footer, phone: e.target.value })} /></Field>
                <Field label="Lien Vimeo"><input className="admin-input" value={footer.vimeoUrl || ""} onChange={(e) => setFooter({ ...footer, vimeoUrl: e.target.value })} /></Field>
                <Field label="Copyright" className="md:col-span-2"><textarea className="admin-input" rows={2} value={footer.copyright || ""} onChange={(e) => setFooter({ ...footer, copyright: e.target.value })} /></Field>
              </div>
            </section>
          )}
        </div>
      )}
    </AdminLayout>
  );
}

export default AdminPage;
