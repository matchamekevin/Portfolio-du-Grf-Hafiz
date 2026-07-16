import { useState, useEffect } from "react";
import { api } from "../services/api";
import Field from "../components/admin/Field";
import { useToast } from "../components/admin/Toast";

function decodeHtml(html) {
  const el = document.createElement("textarea");
  el.innerHTML = html;
  return el.value;
}

function stripTags(s) {
  return decodeHtml(s.replace(/<[^>]*>/g, ""));
}

function parseTitle(html) {
  if (!html) return { line1Before: "", highlight: "", line1After: "", line2: "" };
  const brMatch = html.split(/<br\s*\/?>/i);
  const line1 = brMatch[0] || "";
  const line2 = brMatch[1] ? stripTags(brMatch[1]).trim() : "";
  const spanMatch = line1.match(/^(.*?)<span[^>]*>(.*?)<\/span>(.*)$/s);
  if (spanMatch) {
    return {
      line1Before: stripTags(spanMatch[1]),
      highlight: stripTags(spanMatch[2]),
      line1After: stripTags(spanMatch[3]),
      line2,
    };
  }
  return { line1Before: stripTags(line1), highlight: "", line1After: "", line2 };
}

function buildTitle({ line1Before, highlight, line1After, line2 }) {
  const before = line1Before.trim();
  const word = highlight.trim();
  const after = line1After.trim();
  const l2 = line2.trim();
  let line1 = before;
  if (word) line1 += `<span class="text-primary">${word}</span>`;
  if (after) line1 += after;
  if (l2) return `${line1}<br/>${l2}`;
  return line1;
}

export default function AdminHero() {
  const [data, setData] = useState(null);
  const [saving, setSaving] = useState(false);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [titleFields, setTitleFields] = useState({ line1Before: "", highlight: "", line1After: "", line2: "" });
  const toast = useToast();

  useEffect(() => {
    setLoading(true);
    Promise.all([
      api.page.hero(),
      api.translations.byLanguage("fr"),
    ])
      .then(([heroRes, transRes]) => {
        const transMap = {};
        if (transRes && transRes.status === "ok" && Array.isArray(transRes.data)) {
          transRes.data.forEach((t) => { transMap[t.key] = t.value; });
        }
        if (heroRes && heroRes.status === "ok") {
          const hero = heroRes.data;
          if (hero) {
            hero.tags = Array.isArray(hero.tags) ? hero.tags.map((tag) => ({
              ...tag,
              l: transMap[tag.l] || tag.l,
            })) : [];
            setData(hero);
            setTitleFields(parseTitle(hero.title));
          }
        }
      })
      .catch((e) => setError(e.message))
      .finally(() => setLoading(false));
  }, []);

  const update = (patch) => {
    setData((prev) => ({ ...prev, ...patch }));
  };

  const updateTitle = (field, value) => {
    setTitleFields((prev) => {
      const next = { ...prev, [field]: value };
      setData((d) => ({ ...d, title: buildTitle(next) }));
      return next;
    });
  };

  const updateTagLabel = (index, value) => {
    setData((prev) => {
      const tags = [...prev.tags];
      tags[index] = { ...tags[index], l: value };
      return { ...prev, tags };
    });
  };

  const updateTagPart = (index, field, value) => {
    setData((prev) => {
      const tags = [...prev.tags];
      const tag = { ...tags[index] };
      const v = tag.v;
      let text = "", linkText = "", linkUrl = "";

      if (typeof v === "string") {
        text = v;
      } else if (Array.isArray(v)) {
        text = v.filter((p) => typeof p === "string").join("");
        const link = v.find((p) => typeof p === "object" && p.href);
        if (link) { linkText = link.text || ""; linkUrl = link.href || ""; }
      }

      if (field === "text") text = value;
      else if (field === "linkText") linkText = value;
      else if (field === "linkUrl") linkUrl = value;

      if (linkUrl && linkText) {
        tag.v = [text, { href: linkUrl, text: linkText }];
      } else {
        tag.v = text;
      }

      tags[index] = tag;
      return { ...prev, tags };
    });
  };

  const parseTag = (v) => {
    let text = "", linkText = "", linkUrl = "";
    if (typeof v === "string") {
      text = v;
    } else if (Array.isArray(v)) {
      text = v.filter((p) => typeof p === "string").join("");
      const link = v.find((p) => typeof p === "object" && p.href);
      if (link) { linkText = link.text || ""; linkUrl = link.href || ""; }
    }
    return { text, linkText, linkUrl };
  };

  const addTag = () => {
    setData((prev) => ({
      ...prev,
      tags: [...(prev.tags || []), { l: "", v: "" }],
    }));
  };

  const removeTag = (index) => {
    setData((prev) => ({
      ...prev,
      tags: prev.tags.filter((_, i) => i !== index),
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSaving(true);
    try {
      await api.page.updateHero(data);
      toast.success("Entête mise à jour");
    } catch (e) {
      toast.error(e.message);
    } finally {
      setSaving(false);
    }
  };

  if (loading) {
    return <p className="text-sm text-admin-muted">Chargement…</p>;
  }

  if (error) {
    return <p className="text-sm text-red-500">Erreur : {error}</p>;
  }

  if (!data) {
    return (
      <div className="space-y-4">
        <p className="text-sm text-admin-muted">Aucune donnée d'en-tête.</p>
        <button
          onClick={async () => {
            try {
              const res = await api.page.updateHero({
                status: "Disponible",
                badge: "Open to work",
                title: "Caled Boukari",
                subtitle: "Ingénieur du son",
                tags: [],
              });
              if (res && res.status === "ok") setData(res.data);
            } catch (e) { toast.error(e.message); }
          }}
          className="admin-btn admin-btn-primary"
        >
          Créer l'en-tête
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="admin-card p-6 space-y-4">
        <h3 className="text-sm font-semibold text-admin-text uppercase tracking-wide">Informations générales</h3>
        <Field label="Badge" hint="Texte sur le badge 3D">
          <input className="admin-input" value={data.badge || ""} onChange={(e) => update({ badge: e.target.value })} />
        </Field>
        <Field label="Sous-titre" hint="Description sous le titre">
          <textarea className="admin-input" rows={3} value={data.subtitle || ""} onChange={(e) => update({ subtitle: e.target.value })} />
        </Field>
      </div>

      <div className="admin-card p-6 space-y-4">
        <h3 className="text-sm font-semibold text-admin-text uppercase tracking-wide">Titre principal</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
          <Field label="Texte avant">
            <input className="admin-input" value={titleFields.line1Before} onChange={(e) => updateTitle("line1Before", e.target.value)} placeholder="Ingenierie du" />
          </Field>
          <Field label="Mot en surbrillance" hint="Couleur accent">
            <input className="admin-input" value={titleFields.highlight} onChange={(e) => updateTitle("highlight", e.target.value)} placeholder="Son" />
          </Field>
          <Field label="Texte après">
            <input className="admin-input" value={titleFields.line1After} onChange={(e) => updateTitle("line1After", e.target.value)} />
          </Field>
        </div>
        <Field label="Ligne 2" hint="Texte sous la première ligne">
          <input className="admin-input" value={titleFields.line2} onChange={(e) => updateTitle("line2", e.target.value)} placeholder="pour le Cinema & le Live." />
        </Field>
        <div className="p-3 rounded-lg border border-admin-border/60 bg-admin-bg/50">
          <p className="text-xs text-admin-muted mb-2 uppercase tracking-wide">Aperçu</p>
          <div className="text-on-surface text-lg leading-snug" dangerouslySetInnerHTML={{ __html: data.title || "" }} />
        </div>
      </div>

      <div className="admin-card p-6 space-y-4">
        <div className="flex items-center justify-between">
          <h3 className="text-sm font-semibold text-admin-text uppercase tracking-wide">Tags</h3>
          <button type="button" onClick={addTag} className="admin-btn admin-btn-secondary text-xs">+ Ajouter</button>
        </div>
        {(data.tags || []).length === 0 && (
          <p className="text-xs text-admin-muted">Aucun tag. Ajoutez-en un pour afficher les catégories sous le titre.</p>
        )}
        <div className="space-y-4">
          {(data.tags || []).map((tag, i) => {
            const { text, linkText, linkUrl } = parseTag(tag.v);
            const hasLink = linkText || linkUrl;
            return (
              <div key={i} className="relative rounded-xl border border-admin-border/60 bg-admin-bg/50 overflow-hidden">
                <div className="flex items-center gap-2 px-4 py-2 bg-admin-surface/50 border-b border-admin-border/40">
                  <span className="flex items-center justify-center w-6 h-6 rounded-full bg-admin-accent/10 text-admin-accent text-xs font-bold">{i + 1}</span>
                  <span className="text-xs font-medium text-admin-muted uppercase tracking-wide truncate">{tag.l || "Sans catégorie"}</span>
                  <button type="button" onClick={() => removeTag(i)} className="ml-auto text-admin-muted hover:text-red-500 transition-colors p-1 rounded-lg hover:bg-red-500/10" title="Supprimer">
                    <span className="material-symbols-outlined text-base">close</span>
                  </button>
                </div>
                <div className="p-4 space-y-3">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    <Field label="Catégorie">
                      <input
                        className="admin-input"
                        value={tag.l || ""}
                        onChange={(e) => updateTagLabel(i, e.target.value)}
                        placeholder="Spécialisation"
                      />
                    </Field>
                    <Field label="Texte affiché">
                      <input
                        className="admin-input"
                        value={text}
                        onChange={(e) => updateTagPart(i, "text", e.target.value)}
                        placeholder="Tournages & Post-prod"
                      />
                    </Field>
                  </div>
                  <div className="flex items-center gap-2 text-xs text-admin-muted">
                    <span className="material-symbols-outlined text-sm">link</span>
                    <span>Lien optionnel</span>
                    {hasLink && <span className="w-1.5 h-1.5 rounded-full bg-green-500" />}
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    <Field label="Texte cliquable">
                      <input
                        className="admin-input"
                        value={linkText}
                        onChange={(e) => updateTagPart(i, "linkText", e.target.value)}
                        placeholder="le cinéma parle"
                      />
                    </Field>
                    <Field label="URL">
                      <input
                        className="admin-input"
                        value={linkUrl}
                        onChange={(e) => updateTagPart(i, "linkUrl", e.target.value)}
                        placeholder="mailto:contact@example.com"
                      />
                    </Field>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <div className="flex justify-end">
        <button type="submit" className="admin-btn admin-btn-primary" disabled={saving}>
          {saving ? "Sauvegarde…" : "Sauvegarder"}
        </button>
      </div>
    </form>
  );
}
