import { createContext, useContext, useState, useCallback, useMemo } from "react";

const AdminTranslationsContext = createContext(null);

const FR_UI_FALLBACK = {
  nav_showreel: "Showreel",
  nav_experiences: "Expériences",
  nav_competences: "Compétences",
  nav_contact: "Contact",
  nav_hire: "Embaucher",
  hero_status: "Disponible",
  hero_badge: "Ingénieur du son",
  hero_title: "Ingénierie du Son",
  hero_sub: "Ingénieur du son spécialisé en prise de son, montage et mixage.",
  sr_eyebrow: "Showreel",
  sr_title: "Travaux sélectionnés",
  sr_desc: "Visualiser le son à travers l'excellence cinématographique.",
  exp_title: "Trajectoire Professionnelle",
  dante_t: "Spécialiste certifié Dante",
  dante_s: "Niveaux 1, 2 et 3",
  lang_t: "Langues",
  exp_cinema: "Cinéma & Documentaire",
  exp_theatre: "Spectacle & Théâtre",
  sk_software: "Écosystème logiciel",
  sk_mastering: "Maîtrise technique",
  sk_tools: "Outils / Logiciels",
  sk_metiers: "Métiers du son",
  dante_b_t: "Certification Dante",
  form_t: "Formation",
  trans_t: "Transmission",
  edu_t: "Parcours",
  cta_title: "Prêt pour le prochain projet ?",
  cta_desc: "Basé à Lomé, disponible pour les tournages, la post-production et le live.",
  cta_engage: "Engagez-moi",
  cta_cv: "Télécharger le CV",
  contact_title: "Restons en contact",
  c_label_email: "Email",
  c_label_phone: "Téléphone",
  c_label_phone2: "Téléphone (2)",
  c_avail: "Disponibilité",
  c_avail1: "Tournages, Post-production, Théâtre/Live",
  c_avail_loc: "Disponibilité & Localisation",
  c_label_loc: "Localisation",
  f_name: "Nom complet",
  f_email: "Adresse email",
  f_project: "Type de projet",
  f_project_ph: "Sélectionnez un type",
  f_message: "Votre message",
  f_submit: "TRANSMETTRE LE MESSAGE",
  opt1: "Cinéma / Documentaire",
  opt2: "Théâtre / Live",
  opt3: "Post-Production",
  opt4: "Formation / Atelier",
  opt5: "Autre",
  ph_name: "ama de la fontaine",
  ph_email: "exemple@studio.com",
  ph_message: "Décrivez vos besoins techniques...",
  admin_light: "Mode clair",
  admin_dark: "Mode sombre",
  admin_logout: "Déconnexion",
  footer_copy: "© 2024 Caled Boukari. Ingénierie du son.",
  footer_vimeo: "Vimeo",
  g_eyebrow: "Galerie",
  g_title: "Coulisses de tournage",
  g_desc: "Quelques instants capturés sur les plateaux.",
  contact_module_title: "Message_Inbound_Buffer",
  contact_encrypted: "ENCRYPTED",
  f1_r: "Ingénieur du son & mixage, long-métrage fiction",
  f2_r: "Post-Production Manager, ADR, traitement du son, mixage",
  f3_r: "Ingénieur du son, long-métrage documentaire",
  f4_r: "Ingénieur du son, documentaire",
  f5_r: "Ingénieur du son, documentaire",
  f6_r: "Assistant son, pièce de théâtre",
  f7_r: "Assistant son, Goethe-Institut & Münchner Kammerspiele",
};

export function AdminTranslationsProvider({ children }) {
  const [translations] = useState(() => ({ ...FR_UI_FALLBACK }));

  const t = useCallback((key, fallback) => {
    const val = translations[key];
    if (val !== undefined && val !== "") return val;
    return fallback ?? "";
  }, [translations]);

  const tr = useCallback((key, fallback) => {
    const val = t(key);
    if (val && val !== key) return val;
    return fallback ?? "";
  }, [t]);

  const value = useMemo(() => ({
    lang: "fr",
    setLang: () => {},
    t,
    tr,
    code: "FR",
    languages: [
      { code: "fr", label: "Français", flag: "🇫🇷", langCode: "FR" },
    ],
  }), [t, tr]);

  return (
    <AdminTranslationsContext.Provider value={value}>
      {children}
    </AdminTranslationsContext.Provider>
  );
}

export function useAdminTranslations() {
  const ctx = useContext(AdminTranslationsContext);
  if (!ctx) throw new Error("useAdminTranslations must be used within AdminTranslationsProvider");
  return ctx;
}
