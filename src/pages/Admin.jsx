import { useState, useEffect } from "react";
import { api } from "../services/api";
import { useAuth } from "../contexts/AuthContext";
import { useAdminTheme } from "../contexts/AdminThemeContext";
import { useRealtime } from "../hooks/useRealtime";
import AdminLayout from "../components/admin/AdminLayout";
import Modal from "../components/admin/Modal";
import Field from "../components/admin/Field";

const TABS = [
  { key: "showreel", label: "Showreel" },
  { key: "experiences", label: "Experiences" },
  { key: "gallery", label: "Galerie" },
  { key: "skills", label: "Competences" },
  { key: "page", label: "Page" },
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
  const { data: items = [], loading, error, refresh } = useAdminData(api.showreel.listAll, [], [refreshKey]);
  const [open, setOpen] = useState(false);
  const [editing, setEditing] = useState(null);
  const [form, setForm] = useState({ title: "", href: "", subKey: "", delay: "delay-100", order: 0, active: true });

  const openCreate = () => { setEditing(null); setForm({ title: "", href: "", subKey: "", delay: "delay-100", order: 0, active: true }); setOpen(true); };
  const openEdit = (item) => { setEditing(item.id); setForm({ title: item.title, href: item.href, subKey: item.subKey, delay: item.delay || "delay-100", order: item.order || 0, active: item.active }); setOpen(true); };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (editing) await api.showreel.update(editing, form);
      else await api.showreel.create(form);
      setOpen(false);
      refresh();
    } catch (e) { alert(e.message); }
  };

  const handleDelete = async (id) => {
    if (!confirm("Supprimer ?")) return;
    try { await api.showreel.delete(id); refresh(); } catch (e) { alert(e.message); }
  };

  return (
    <div className="space-y-4">
        <div className="flex justify-between items-center">
          <h2 className="font-headline-md text-headline-md text-admin-text">Projets du showreel</h2>
          <button onClick={openCreate} className="admin-btn admin-btn-primary text-xs">Ajouter</button>
        </div>
      {error && <ErrorMessage message={error} />}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
        {items.map((item) => (
          <div key={item.id} className="admin-card p-4 flex items-start justify-between gap-3">
            <div className="flex-1 min-w-0">
              <p className="font-medium text-admin-text truncate">{item.title}</p>
              <p className="text-xs text-admin-muted mt-1 truncate">{item.href}</p>
              <p className="text-xs text-admin-muted">Ordre: {item.order} · {item.active ? "Actif" : "Inactif"}</p>
            </div>
            <div className="flex gap-2 shrink-0">
              <button onClick={() => openEdit(item)} className="admin-btn admin-btn-secondary text-xs">Editer</button>
              <button onClick={() => handleDelete(item.id)} className="admin-btn admin-btn-danger text-xs">Supprimer</button>
            </div>
          </div>
        ))}
      </div>
      <Modal open={open} onClose={() => setOpen(false)} title={editing ? "Modifier le projet" : "Nouveau projet"}>
        <form onSubmit={handleSubmit} className="space-y-3">
          <Field label="Titre" hint="Titre affiche sur la carte showreel"><input className="admin-input" value={form.title} onChange={(e) => setForm({ ...form, title: e.target.value })} required /></Field>
          <Field label="Lien video" hint="URL Vimeo, YouTube ou page web"><input className="admin-input" value={form.href} onChange={(e) => setForm({ ...form, href: e.target.value })} required /></Field>
          <Field label="Cle de traduction" hint="Identifiant utilise pour les textes multilingues"><input className="admin-input" value={form.subKey} onChange={(e) => setForm({ ...form, subKey: e.target.value })} required /></Field>
          <div className="grid grid-cols-2 gap-3">
            <Field label="Delai d animation"><input className="admin-input" value={form.delay} onChange={(e) => setForm({ ...form, delay: e.target.value })} /></Field>
            <Field label="Ordre"><input type="number" className="admin-input" value={form.order} onChange={(e) => setForm({ ...form, order: parseInt(e.target.value) || 0 })} /></Field>
          </div>
          <label className="flex items-center gap-2 text-sm text-admin-text">
            <input type="checkbox" checked={form.active} onChange={(e) => setForm({ ...form, active: e.target.checked })} />
            Projet actif
          </label>
          <div className="flex justify-end gap-2 pt-2">
            <button type="button" onClick={() => setOpen(false)} className="admin-btn admin-btn-secondary">Annuler</button>
            <button type="submit" className="admin-btn admin-btn-primary">Sauver</button>
          </div>
        </form>
      </Modal>
    </div>
  );
}

function AdminExperiences({ refreshKey }) {
  const { data: items = [], loading, error, refresh } = useAdminData(api.experiences.listAll, [], [refreshKey]);
  const [open, setOpen] = useState(false);
  const [editing, setEditing] = useState(null);
  const [form, setForm] = useState({ title: "", role: "", meta: "", category: "cinema", order: 0, active: true });

  const openCreate = () => { setEditing(null); setForm({ title: "", role: "", meta: "", category: "cinema", order: 0, active: true }); setOpen(true); };
  const openEdit = (item) => { setEditing(item.id); setForm({ title: item.title, role: item.role, meta: item.meta, category: item.category, order: item.order || 0, active: item.active }); setOpen(true); };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (editing) await api.experiences.update(editing, form);
      else await api.experiences.create(form);
      setOpen(false);
      refresh();
    } catch (e) { alert(e.message); }
  };

  const handleDelete = async (id) => {
    if (!confirm("Supprimer ?")) return;
    try { await api.experiences.delete(id); refresh(); } catch (e) { alert(e.message); }
  };

  return (
    <div className="space-y-4">
      <div className="flex justify-between items-center">
        <h2 className="font-headline-md text-headline-md text-admin-text">Experiences professionnelles</h2>
        <button onClick={openCreate} className="admin-btn admin-btn-primary text-xs">Ajouter</button>
      </div>
      {error && <ErrorMessage message={error} />}
      <div className="space-y-2">
        {items.map((item) => (
          <div key={item.id} className="admin-card p-4 flex items-start justify-between gap-3">
            <div className="flex-1 min-w-0">
              <p className="font-medium text-admin-text truncate">{item.title}</p>
              <p className="text-xs text-admin-muted mt-1">{item.role}</p>
              <p className="text-xs text-admin-muted">{item.meta} · {item.category}</p>
            </div>
            <div className="flex gap-2 shrink-0">
              <button onClick={() => openEdit(item)} className="admin-btn admin-btn-secondary text-xs">Editer</button>
              <button onClick={() => handleDelete(item.id)} className="admin-btn admin-btn-danger text-xs">Supprimer</button>
            </div>
          </div>
        ))}
      </div>
      <Modal open={open} onClose={() => setOpen(false)} title={editing ? "Modifier l experience" : "Nouvelle experience"}>
        <form onSubmit={handleSubmit} className="space-y-3">
          <Field label="Titre du projet"><input className="admin-input" value={form.title} onChange={(e) => setForm({ ...form, title: e.target.value })} required /></Field>
          <Field label="Role / Fonction" hint="Ex: Ingenieur du son, mixage..."><input className="admin-input" value={form.role} onChange={(e) => setForm({ ...form, role: e.target.value })} required /></Field>
          <Field label="Details" hint="Annee, pays, festival..."><input className="admin-input" value={form.meta} onChange={(e) => setForm({ ...form, meta: e.target.value })} required /></Field>
          <Field label="Categorie">
            <select className="admin-input" value={form.category} onChange={(e) => setForm({ ...form, category: e.target.value })}>
              <option value="cinema">Cinema / Documentaire</option>
              <option value="theatre">Theatre / Live</option>
            </select>
          </Field>
          <div className="grid grid-cols-2 gap-3">
            <Field label="Ordre"><input type="number" className="admin-input" value={form.order} onChange={(e) => setForm({ ...form, order: parseInt(e.target.value) || 0 })} /></Field>
            <label className="flex items-center gap-2 text-sm text-admin-text mt-5">
              <input type="checkbox" checked={form.active} onChange={(e) => setForm({ ...form, active: e.target.checked })} />
              Actif
            </label>
          </div>
          <div className="flex justify-end gap-2 pt-2">
            <button type="button" onClick={() => setOpen(false)} className="admin-btn admin-btn-secondary">Annuler</button>
            <button type="submit" className="admin-btn admin-btn-primary">Sauver</button>
          </div>
        </form>
      </Modal>
    </div>
  );
}

function AdminGallery({ refreshKey }) {
  const { data: items = [], loading, error, refresh } = useAdminData(api.gallery.listAll, [], [refreshKey]);
  const [open, setOpen] = useState(false);
  const [editing, setEditing] = useState(null);
  const [form, setForm] = useState({ src: "", alt: "", order: 0, active: true });
  const [file, setFile] = useState(null);

  const openCreate = () => { setEditing(null); setForm({ src: "", alt: "", order: 0, active: true }); setOpen(true); };
  const openEdit = (item) => { setEditing(item.id); setForm({ src: item.src, alt: item.alt, order: item.order || 0, active: item.active }); setOpen(true); };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (editing) await api.gallery.update(editing, form);
      else await api.gallery.create(form);
      setOpen(false);
      refresh();
    } catch (e) { alert(e.message); }
  };

  const handleDelete = async (id) => {
    if (!confirm("Supprimer ?")) return;
    try { await api.gallery.delete(id); refresh(); } catch (e) { alert(e.message); }
  };

  const handleUpload = async (e) => {
    e.preventDefault();
    if (!file) return alert("Choisir un fichier");
    try {
      const res = await api.upload.image(file);
      setForm({ ...form, src: res.data.url, publicId: res.data.publicId });
      alert("Image uploadee");
    } catch (e) { alert(e.message); }
  };

  return (
    <div className="space-y-4">
      <div className="flex justify-between items-center">
        <h2 className="font-headline-md text-headline-md text-admin-text">Galerie photos</h2>
        <button onClick={openCreate} className="admin-btn admin-btn-primary text-xs">Ajouter</button>
      </div>
      <form onSubmit={handleUpload} className="admin-card p-4 flex items-center gap-3">
        <input type="file" accept="image/*" onChange={(e) => setFile(e.target.files[0])} className="text-sm text-admin-text" />
        <button type="submit" className="admin-btn admin-btn-secondary text-xs">Uploader image</button>
      </form>
      {error && <ErrorMessage message={error} />}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
        {items.map((item) => (
          <div key={item.id} className="admin-card p-3">
            <img src={item.src} alt={item.alt} className="w-full h-40 object-cover rounded mb-2" />
            <p className="text-sm text-admin-text">{item.alt}</p>
            <div className="flex gap-2 mt-2">
              <button onClick={() => openEdit(item)} className="admin-btn admin-btn-secondary text-xs">Editer</button>
              <button onClick={() => handleDelete(item.id)} className="admin-btn admin-btn-danger text-xs">Supprimer</button>
            </div>
          </div>
        ))}
      </div>
      <Modal open={open} onClose={() => setOpen(false)} title={editing ? "Modifier la photo" : "Nouvelle photo"}>
        <form onSubmit={handleSubmit} className="space-y-3">
          <Field label="URL de l image"><input className="admin-input" value={form.src} onChange={(e) => setForm({ ...form, src: e.target.value })} required /></Field>
          <Field label="Description alternative" hint="Texte pour l accessibilite et le referencement"><input className="admin-input" value={form.alt} onChange={(e) => setForm({ ...form, alt: e.target.value })} required /></Field>
          <Field label="Ordre"><input type="number" className="admin-input" value={form.order} onChange={(e) => setForm({ ...form, order: parseInt(e.target.value) || 0 })} /></Field>
          <label className="flex items-center gap-2 text-sm text-admin-text">
            <input type="checkbox" checked={form.active} onChange={(e) => setForm({ ...form, active: e.target.checked })} />
            Photo active
          </label>
          <div className="flex justify-end gap-2 pt-2">
            <button type="button" onClick={() => setOpen(false)} className="admin-btn admin-btn-secondary">Annuler</button>
            <button type="submit" className="admin-btn admin-btn-primary">Sauver</button>
          </div>
        </form>
      </Modal>
    </div>
  );
}

function AdminSkills({ refreshKey }) {
  const { data: items = [], loading, error, refresh } = useAdminData(api.skills.listAll, [], [refreshKey]);
  const [open, setOpen] = useState(false);
  const [editing, setEditing] = useState(null);
  const [form, setForm] = useState({ section: "", title: "", items: "", order: 0, active: true });

  const openCreate = () => { setEditing(null); setForm({ section: "", title: "", items: "", order: 0, active: true }); setOpen(true); };
  const openEdit = (item) => { setEditing(item.id); setForm({ section: item.section, title: item.title, items: Array.isArray(item.items) ? item.items.join("\n") : "", order: item.order || 0, active: item.active }); setOpen(true); };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const payload = { ...form, items: form.items.split("\n").filter(Boolean) };
      if (editing) await api.skills.update(editing, payload);
      else await api.skills.create(payload);
      setOpen(false);
      refresh();
    } catch (e) { alert(e.message); }
  };

  const handleDelete = async (id) => {
    if (!confirm("Supprimer ?")) return;
    try { await api.skills.delete(id); refresh(); } catch (e) { alert(e.message); }
  };

  return (
    <div className="space-y-4">
      <div className="flex justify-between items-center">
        <h2 className="font-headline-md text-headline-md text-admin-text">Sections competences</h2>
        <button onClick={openCreate} className="admin-btn admin-btn-primary text-xs">Ajouter</button>
      </div>
      {error && <ErrorMessage message={error} />}
      <div className="space-y-2">
        {items.map((item) => (
          <div key={item.id} className="admin-card p-4 flex items-start justify-between gap-3">
            <div className="flex-1 min-w-0">
              <p className="font-medium text-admin-text truncate">{item.title}</p>
              <p className="text-xs text-admin-muted mt-1">Section: {item.section}</p>
              <p className="text-xs text-admin-muted">{Array.isArray(item.items) ? item.items.join(", ") : ""}</p>
            </div>
            <div className="flex gap-2 shrink-0">
              <button onClick={() => openEdit(item)} className="admin-btn admin-btn-secondary text-xs">Editer</button>
              <button onClick={() => handleDelete(item.id)} className="admin-btn admin-btn-danger text-xs">Supprimer</button>
            </div>
          </div>
        ))}
      </div>
      <Modal open={open} onClose={() => setOpen(false)} title={editing ? "Modifier la section" : "Nouvelle section"}>
        <form onSubmit={handleSubmit} className="space-y-3">
          <Field label="Identifiant de section" hint="Ex: sk_software, education, dante_b_t"><input className="admin-input" value={form.section} onChange={(e) => setForm({ ...form, section: e.target.value })} required /></Field>
          <Field label="Titre affiche"><input className="admin-input" value={form.title} onChange={(e) => setForm({ ...form, title: e.target.value })} required /></Field>
          <Field label="Elements" hint="Une ligne par element"><textarea className="admin-input" rows={4} value={form.items} onChange={(e) => setForm({ ...form, items: e.target.value })} required /></Field>
          <div className="grid grid-cols-2 gap-3">
            <Field label="Ordre"><input type="number" className="admin-input" value={form.order} onChange={(e) => setForm({ ...form, order: parseInt(e.target.value) || 0 })} /></Field>
            <label className="flex items-center gap-2 text-sm text-admin-text mt-5">
              <input type="checkbox" checked={form.active} onChange={(e) => setForm({ ...form, active: e.target.checked })} />
              Section active
            </label>
          </div>
          <div className="flex justify-end gap-2 pt-2">
            <button type="button" onClick={() => setOpen(false)} className="admin-btn admin-btn-secondary">Annuler</button>
            <button type="submit" className="admin-btn admin-btn-primary">Sauver</button>
          </div>
        </form>
      </Modal>
    </div>
  );
}

function AdminPage() {
  const { user, logout } = useAuth();
  const { mode, setMode } = useAdminTheme();
  const [tab, setTab] = useState("showreel");
  const [contact, setContact] = useState(null);
  const [hero, setHero] = useState(null);
  const [cta, setCta] = useState(null);
  const [footer, setFooter] = useState(null);
  const [refreshKey, setRefreshKey] = useState(0);
  const [syncing, setSyncing] = useState(false);

  const { data: contactData, loading: contactLoading } = useAdminData(api.page.contact, null, [refreshKey]);
  const { data: heroData, loading: heroLoading } = useAdminData(api.page.hero, null, [refreshKey]);
  const { data: ctaData, loading: ctaLoading } = useAdminData(api.page.cta, null, [refreshKey]);
  const { data: footerData, loading: footerLoading } = useAdminData(api.page.footer, null, [refreshKey]);

  useEffect(() => { setContact(contactData); }, [contactData]);
  useEffect(() => { setHero(heroData); }, [heroData]);
  useEffect(() => { setCta(ctaData); }, [ctaData]);
  useEffect(() => { setFooter(footerData); }, [footerData]);

  useRealtime((payload) => {
    if (payload?.type === "updated") refreshAll();
  });

  const refreshAll = () => setRefreshKey((k) => k + 1);

  const handleAutoTranslate = async () => {
    setSyncing(true);
    try {
      await api.translations.autoSync({ sourceLanguage: "fr", targetLanguages: ["en", "de", "es", "pt"] });
      alert("Traductions automatiques mises a jour");
    } catch (e) {
      alert(e.message);
    } finally {
      setSyncing(false);
    }
  };

  const updateContact = async (data) => {
    await api.page.updateContact(data);
    refreshAll();
  };
  const updateHero = async (data) => {
    await api.page.updateHero(data);
    refreshAll();
  };
  const updateCta = async (data) => {
    await api.page.updateCta(data);
    refreshAll();
  };
  const updateFooter = async (data) => {
    await api.page.updateFooter(data);
    refreshAll();
  };

  return (
    <AdminLayout title={user?.name || "Portfolio"} onLogout={logout}>
      <div className="flex border-b border-admin-border/60 mb-6 overflow-x-auto">
        {TABS.map((t) => (
          <button
            key={t.key}
            onClick={() => setTab(t.key)}
            className={`px-4 py-2 text-sm font-medium border-b-2 transition-colors whitespace-nowrap ${
              tab === t.key ? "border-admin-accent text-admin-text" : "border-transparent text-admin-muted hover:text-admin-text"
            }`}
          >
            {t.label}
          </button>
        ))}
      </div>

      {tab === "showreel" && <AdminShowreel refreshKey={refreshKey} />}
      {tab === "experiences" && <AdminExperiences refreshKey={refreshKey} />}
      {tab === "gallery" && <AdminGallery refreshKey={refreshKey} />}
      {tab === "skills" && <AdminSkills refreshKey={refreshKey} />}
      {tab === "page" && (
        <div className="space-y-6">
          {contact && (
            <section className="admin-card p-5 space-y-4">
              <h2 className="font-headline-md text-headline-md text-admin-text">Contact</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Field label="Email public"><input className="admin-input" value={contact.email || ""} onChange={(e) => setContact({ ...contact, email: e.target.value })} onBlur={(e) => updateContact({ email: e.target.value })} /></Field>
                <Field label="Email de reception du formulaire" hint="Les messages du formulaire seront envoyes a cette adresse"><input className="admin-input" value={contact.formEmail || contact.email || ""} onChange={(e) => setContact({ ...contact, formEmail: e.target.value })} onBlur={(e) => updateContact({ formEmail: e.target.value })} /></Field>
                <Field label="Telephone 1"><input className="admin-input" value={contact.phone1 || ""} onChange={(e) => setContact({ ...contact, phone1: e.target.value })} onBlur={(e) => updateContact({ phone1: e.target.value })} /></Field>
                <Field label="Telephone 2"><input className="admin-input" value={contact.phone2 || ""} onChange={(e) => setContact({ ...contact, phone2: e.target.value })} onBlur={(e) => updateContact({ phone2: e.target.value })} /></Field>
                <Field label="Disponibilite"><input className="admin-input" value={contact.availability || ""} onChange={(e) => setContact({ ...contact, availability: e.target.value })} onBlur={(e) => updateContact({ availability: e.target.value })} /></Field>
                <Field label="Localisation"><input className="admin-input" value={contact.location || ""} onChange={(e) => setContact({ ...contact, location: e.target.value })} onBlur={(e) => updateContact({ location: e.target.value })} /></Field>
              </div>
            </section>
          )}
          {hero && (
            <section className="admin-card p-5 space-y-4">
              <h2 className="font-headline-md text-headline-md text-admin-text">Entete</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Field label="Statut" hint="Ex: Disponible, En tournage..."><input className="admin-input" value={hero.status || ""} onChange={(e) => setHero({ ...hero, status: e.target.value })} onBlur={(e) => updateHero({ status: e.target.value })} /></Field>
                <Field label="Badge"><input className="admin-input" value={hero.badge || ""} onChange={(e) => setHero({ ...hero, badge: e.target.value })} onBlur={(e) => updateHero({ badge: e.target.value })} /></Field>
                <Field label="Titre principal" hint="Vous pouvez utiliser du HTML simple" className="md:col-span-2"><textarea className="admin-input" rows={3} value={hero.title || ""} onChange={(e) => setHero({ ...hero, title: e.target.value })} onBlur={(e) => updateHero({ title: e.target.value })} /></Field>
                <Field label="Sous-titre" hint="Description courte sous le titre" className="md:col-span-2"><textarea className="admin-input" rows={3} value={hero.subtitle || ""} onChange={(e) => setHero({ ...hero, subtitle: e.target.value })} onBlur={(e) => updateHero({ subtitle: e.target.value })} /></Field>
              </div>
            </section>
          )}
          {cta && (
            <section className="admin-card p-5 space-y-4">
              <h2 className="font-headline-md text-headline-md text-admin-text">Call to action</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Field label="Titre" className="md:col-span-2"><textarea className="admin-input" rows={2} value={cta.title || ""} onChange={(e) => setCta({ ...cta, title: e.target.value })} onBlur={(e) => updateCta({ title: e.target.value })} /></Field>
                <Field label="Description" className="md:col-span-2"><textarea className="admin-input" rows={2} value={cta.description || ""} onChange={(e) => setCta({ ...cta, description: e.target.value })} onBlur={(e) => updateCta({ description: e.target.value })} /></Field>
                <Field label="Lien principal"><input className="admin-input" value={cta.engageHref || ""} onChange={(e) => setCta({ ...cta, engageHref: e.target.value })} onBlur={(e) => updateCta({ engageHref: e.target.value })} /></Field>
                <Field label="Lien CV"><input className="admin-input" value={cta.cvHref || ""} onChange={(e) => setCta({ ...cta, cvHref: e.target.value })} onBlur={(e) => updateCta({ cvHref: e.target.value })} /></Field>
              </div>
            </section>
          )}
          {footer && (
            <section className="admin-card p-5 space-y-4">
              <h2 className="font-headline-md text-headline-md text-admin-text">Footer</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Field label="Nom affiche"><input className="admin-input" value={footer.name || ""} onChange={(e) => setFooter({ ...footer, name: e.target.value })} onBlur={(e) => updateFooter({ name: e.target.value })} /></Field>
                <Field label="Email"><input className="admin-input" value={footer.email || ""} onChange={(e) => setFooter({ ...footer, email: e.target.value })} onBlur={(e) => updateFooter({ email: e.target.value })} /></Field>
                <Field label="Telephone"><input className="admin-input" value={footer.phone || ""} onChange={(e) => setFooter({ ...footer, phone: e.target.value })} onBlur={(e) => updateFooter({ phone: e.target.value })} /></Field>
                <Field label="Lien Vimeo"><input className="admin-input" value={footer.vimeoUrl || ""} onChange={(e) => setFooter({ ...footer, vimeoUrl: e.target.value })} onBlur={(e) => updateFooter({ vimeoUrl: e.target.value })} /></Field>
                <Field label="Copyright" className="md:col-span-2"><textarea className="admin-input" rows={2} value={footer.copyright || ""} onChange={(e) => setFooter({ ...footer, copyright: e.target.value })} onBlur={(e) => updateFooter({ copyright: e.target.value })} /></Field>
              </div>
            </section>
          )}
        </div>
      )}
    </AdminLayout>
  );
}

export default AdminPage;
