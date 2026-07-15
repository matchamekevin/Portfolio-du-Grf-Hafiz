import bcrypt from "bcryptjs";
import prisma from "../config/prisma.js";

async function seed() {
  console.log("Seeding database...");

  await prisma.adminUser.deleteMany();
  await prisma.language.deleteMany();
  await prisma.translation.deleteMany();
  await prisma.footer.deleteMany();
  await prisma.cta.deleteMany();
  await prisma.hero.deleteMany();
  await prisma.contactInfo.deleteMany();
  await prisma.skillSection.deleteMany();
  await prisma.galleryShot.deleteMany();
  await prisma.experience.deleteMany();
  await prisma.showreelProject.deleteMany();

  console.log("Existing data cleared.");

  const hash = await bcrypt.hash("admin123", 10);
  await prisma.adminUser.create({ data: { email: "admin@portfolio.local", password: hash, name: "Admin" } });
  console.log("Admin user seeded.");

  await prisma.showreelProject.createMany({
    data: [
      { title: "SIFA", href: "https://vimeo.com/share/4c7766c4-9c98-4a17-a846-f3413501a911", imageUrl: "/image/Showreel/sifa-couverture.jpg", imagePublicId: "placeholder/sifa", subKey: "p1_s", delay: "delay-100", order: 0 },
      { title: "L'ordure", href: "https://vimeo.com/share/23f798bf-ff64-418d-9ac0-acaf66de797c", imageUrl: "/image/Showreel/l-ordure.jpg", imagePublicId: "placeholder/ordure", subKey: "p2_s", delay: "delay-200", order: 1 },
      { title: "EOL", href: "https://vimeo.com/share/85069dc2-f373-4ff8-9f44-47a1a0bfe447", imageUrl: "/image/Showreel/eol.jpg", imagePublicId: "placeholder/eol", subKey: "p3_s", delay: "delay-300", order: 2 },
      { title: "Le Coup de Grace", href: "https://vimeo.com/share/f3f47667-4644-421c-843a-d5fe33bb0bd1", imageUrl: "/image/Showreel/le-coup-de-grace.jpg", imagePublicId: "placeholder/coup", subKey: "p4_s", delay: "delay-500", order: 3 },
      { title: "SIFA", href: "https://youtu.be/26vJxzBDgro", imageUrl: "https://img.youtube.com/vi/26vJxzBDgro/maxresdefault.jpg", imagePublicId: "placeholder/youtube-sifa", subKey: "p5_s", delay: "delay-100", order: 4 },
      { title: "RIFIFI_BA_VAD_2", href: "https://vimeo.com/share/fdf86ed6-3562-4d5c-80db-6a605a72d2e1", imageUrl: "/image/Showreel/rififi-ba-vad-2.jpg", imagePublicId: "placeholder/rififi", subKey: "p6_s", delay: "delay-200", order: 5 },
      { title: "Les maternelles d'Afrique S7 E10", href: "https://www.tv5mondeplus.com/fr/culture-et-art-de-vivre/mode-de-vie/les-maternelles-d-afrique-s-7-e10", imageUrl: "/image/Showreel/maternelles-afrique-s7-e10.jpg", imagePublicId: "placeholder/mat10", subKey: "p7_s", delay: "delay-300", order: 6 },
      { title: "Les maternelles d'Afrique S7 E6", href: "https://www.tv5mondeplus.com/fr/culture-et-art-de-vivre/mode-de-vie/les-maternelles-d-afrique-s-7-e6", imageUrl: "/image/Showreel/maternelles-afrique-s7-e6.jpg", imagePublicId: "placeholder/mat6", subKey: "p8_s", delay: "delay-300", order: 7 },
      { title: "Les maternelles d'Afrique S7 E12", href: "https://www.tv5mondeplus.com/fr/culture-et-art-de-vivre/mode-de-vie/les-maternelles-d-afrique-s-7-e12", imageUrl: "/image/Showreel/maternelles-afrique-s7-e12.jpg", imagePublicId: "placeholder/mat12", subKey: "p9_s", delay: "delay-500", order: 8 },
      { title: "IMG_0175", href: "https://vimeo.com/share/39fd3e51-c5e2-4e1c-84e1-6b104019900a", imageUrl: "/image/Showreel/img-0175.jpg", imagePublicId: "placeholder/img0175", subKey: "p10_s", delay: "delay-100", order: 9 },
    ],
  });
  console.log("Showreel projects seeded.");

  await prisma.experience.createMany({
    data: [
      { title: "SIFA", role: "f1_r", meta: "2024, Togo", category: "cinema", order: 0 },
      { title: "Une fiancee a la barre", role: "f2_r", meta: "2023, Togo", category: "cinema", order: 1 },
      { title: "Le retour sur la terre des ancetres", role: "f3_r", meta: "2023, Benin / Canada", category: "cinema", order: 2 },
      { title: "Togoland Projections", role: "f4_r", meta: "2022, Togo / France / Allemagne", category: "cinema", order: 3 },
      { title: "Agome Seva, de l'ombre a la lumiere", role: "f5_r", meta: "2022, Togo / Belgique", category: "cinema", order: 4 },
      { title: "Young Confession", role: "f6_r", meta: "2024, Allemagne", category: "theatre", order: 5 },
      { title: "Les statues revent aussi, vision d'un retour", role: "f7_r", meta: "2023, Burkina Faso", category: "theatre", order: 6 },
    ],
  });
  console.log("Experiences seeded.");

  await prisma.galleryShot.createMany({
    data: [
      { src: "/image/quelques-images-de-tournages/im1.jpeg", publicId: "placeholder/g1", alt: "Tournage", order: 0 },
      { src: "/image/quelques-images-de-tournages/im2.jpeg", publicId: "placeholder/g2", alt: "Prise de son", order: 1 },
      { src: "/image/quelques-images-de-tournages/im4.jpeg", publicId: "placeholder/g4", alt: "Tournage", order: 2 },
      { src: "/image/quelques-images-de-tournages/im3.jpeg", publicId: "placeholder/g3", alt: "Tournage", order: 3 },
    ],
  });
  console.log("Gallery seeded.");

  await prisma.skillSection.createMany({
    data: [
      { section: "sk_software", title: "sk_mastering", items: ["Avid Pro Tools", "Ableton Live", "Reaper", "Adobe Audition"], order: 0 },
      { section: "sk_tools", title: "sk_metiers", items: ["Prise de son", "Montage son", "Mixage son", "Regie son (spectacle)"], order: 1 },
      { section: "dante_b_t", title: "Dante Certification", items: ["Reseau & configurations", "Niveaux 1, 2, 3"], order: 2 },
      { section: "education", title: "Parcours", items: ["Münchner Kammerspiele (Munich, 2024)", "AWUI Media International (Abidjan, 2020 - 2022)", "Festival EMERGENCE (Lomé, 2015)", "Baccalauréat, Économie (Kara, 2014)"], order: 3 },
      { section: "training", title: "Transmission", items: ["Formateur, CANAL+", "le cinéma parle", "ATCNA", "WELTFILME"], order: 4 },
    ],
  });
  console.log("Skills seeded.");

  await prisma.contactInfo.create({
    data: {
      email: "caledboukari@yahoo.com",
      phone1: "+22893707051",
      phone2: "+22899849707",
      availability: "Tournages, Post-production, Theatre/Live",
      location: "Lome, Togo, International / Remote",
      formEmail: "caledboukari@yahoo.com",
    },
  });
  console.log("Contact info seeded.");

  await prisma.hero.create({
    data: {
      status: "Disponible",
      badge: "Ingenieur du son",
      title: "Ingenierie du <span class=\"text-primary\">Son</span><br/>pour le Cinema &amp; le Live.",
      subtitle: "Ingenieur du son specialise en prise de son, montage et mixage pour le cinema et les performances en direct. Une trajectoire forgee au Togo et affinee sur des projets menes avec des organisations francaises et allemandes.",
      tags: [
        { l: "hero_tag1_l", v: "Tournages & Post-prod" },
        { l: "hero_tag2_l", v: "Theatre & Live" },
        { l: "hero_tag3_l", v: ["CANAL+ & ", { text: "le cinema parle", href: "mailto:lecinemaparle@gmail.com" }] },
      ],
    },
  });
  console.log("Hero seeded.");

  await prisma.cta.create({
    data: {
      title: "Pret pour le <span class=\"text-primary\">prochain projet ?</span>",
      description: "Base a Lome, disponible pour les tournages, la post-production et le live en Afrique et a l'international. Construisons la paysage sonore de votre prochain chef-d'uvre.",
      engageHref: "mailto:caledboukari@yahoo.com",
      cvHref: "mailto:caledboukari@yahoo.com?subject=CV%20Caled%20Boukari",
    },
  });
  console.log("CTA seeded.");

  await prisma.footer.create({
    data: {
      name: "Caled Boukari",
      copyright: "© 2024 Caled Boukari. Ingenierie du son &amp; design acoustique.",
      email: "caledboukari@yahoo.com",
      phone: "+22893707051",
      vimeoUrl: "https://vimeo.com/share/4c7766c4-9c98-4a17-a846-f3413501a911",
    },
  });
  console.log("Footer seeded.");

  await prisma.language.createMany({
    data: [
      { code: "fr", label: "Francais", flag: "🇫🇷", langCode: "FR", order: 0 },
      { code: "en", label: "English", flag: "🇬🇧", langCode: "EN", order: 1 },
      { code: "de", label: "Deutsch", flag: "🇩🇪", langCode: "DE", order: 2 },
      { code: "es", label: "Espanol", flag: "🇪🇸", langCode: "ES", order: 3 },
      { code: "pt", label: "Portugues", flag: "🇵🇹", langCode: "PT", order: 4 },
    ],
  });
  console.log("Languages seeded.");

  const translationData = [
    { key: "nav_showreel", value: "Showreel" },
    { key: "nav_experiences", value: "Experiences" },
    { key: "nav_competences", value: "Competences" },
    { key: "nav_contact", value: "Contact" },
    { key: "nav_hire", value: "Embaucher" },
    { key: "hero_status", value: "Disponible" },
    { key: "hero_badge", value: "Ingenieur du son" },
    { key: "hero_title", value: "Ingenierie du <span class=\"text-primary\">Son</span><br/>pour le Cinema &amp; le Live." },
    { key: "hero_sub", value: "Ingenieur du son specialise en prise de son, montage et mixage pour le cinema et les performances en direct. Une trajectoire forgee au Togo et affinee sur des projets menes avec des organisations francaises et allemandes." },
    { key: "hero_tag1_l", value: "Specialisation" },
    { key: "hero_tag2_l", value: "Expertise" },
    { key: "hero_tag3_l", value: "Reseau" },
    { key: "sr_eyebrow", value: "Showreel" },
    { key: "sr_title", value: "Travaux selectionnes" },
    { key: "sr_desc", value: "Visualiser le son a travers l'excellence cinematographique et la dynamique de la scene live." },
    { key: "p1_s", value: "Long-metrage fiction, 2024" },
    { key: "p2_s", value: "Prise de son plateau, Togo" },
    { key: "p3_s", value: "Directeur Son / Live, VOSTFR" },
    { key: "p4_s", value: "Bande-annonce, Post-Production" },
    { key: "p5_s", value: "YouTube, 2024" },
    { key: "p6_s", value: "RIFIFI_BA_VAD_2, 2024" },
    { key: "p7_s", value: "Les maternelles d'Afrique S7 E10, 2024" },
    { key: "p8_s", value: "Les maternelles d'Afrique S7 E6, 2024" },
    { key: "p9_s", value: "Les maternelles d'Afrique S7 E12, 2024" },
    { key: "p10_s", value: "IMG_0175, 2024" },
    { key: "exp_title", value: "Trajectoire<br/><span class=\"text-secondary\">Professionnelle</span>" },
    { key: "dante_t", value: "Specialiste certifie Dante" },
    { key: "dante_s", value: "Niveaux 1, 2 et 3" },
    { key: "lang_t", value: "Langues" },
    { key: "lang_v", value: "Francais (courant), Anglais (courant), Allemand (B2)" },
    { key: "exp_cinema", value: "Cinema &amp; Documentaire" },
    { key: "exp_theatre", value: "Spectacle &amp; Theatre" },
    { key: "f1_r", value: "Ingenieur du son &amp; mixage, long-metrage fiction" },
    { key: "f2_r", value: "Post-Production Manager, ADR, traitement du son, mixage" },
    { key: "f3_r", value: "Ingenieur du son, long-metrage documentaire" },
    { key: "f4_r", value: "Ingenieur du son, documentaire" },
    { key: "f5_r", value: "Ingenieur du son, documentaire" },
    { key: "f6_r", value: "Assistant son, piece de theatre" },
    { key: "f7_r", value: "Assistant son, Goethe-Institut &amp; Munchner Kammerspiele" },
    { key: "sk_software", value: "Ecosysteme logiciel" },
    { key: "sk_mastering", value: "Maitrise technique" },
    { key: "sk_tools", value: "Outils / Logiciels" },
    { key: "sk_metiers", value: "Metiers du son" },
    { key: "m1", value: "Prise de son" },
    { key: "m2", value: "Montage son" },
    { key: "m3", value: "Mixage son" },
    { key: "m4", value: "Regie son (spectacle)" },
    { key: "dante_b_t", value: "Certification Dante" },
    { key: "dante_b_s", value: "Reseau &amp; configurations, niveaux 1, 2, 3" },
    { key: "form_t", value: "Formation" },
    { key: "trans_t", value: "Transmission" },
    { key: "edu_t", value: "Parcours :" },
    { key: "cta_title", value: "Pret pour le <span class=\"text-primary\">prochain projet ?</span>" },
    { key: "cta_desc", value: "Base a Lome, disponible pour les tournages, la post-production et le live en Afrique et a l'international. Construisons la paysage sonore de votre prochain chef-d'uvre." },
    { key: "cta_engage", value: "Engagez-moi" },
    { key: "cta_cv", value: "Telecharger le CV" },
    { key: "contact_title", value: "Restons en contact" },
    { key: "c_label_email", value: "Email" },
    { key: "c_label_phone", value: "Telephone" },
    { key: "c_label_phone2", value: "Telephone (2)" },
    { key: "c_avail", value: "Disponibilite" },
    { key: "c_avail1", value: "Tournages, Post-production, Theatre/Live" },
    { key: "f_name", value: "Nom complet" },
    { key: "f_email", value: "Adresse email" },
    { key: "f_project", value: "Type de projet" },
    { key: "f_project_ph", value: "Selectionnez un type" },
    { key: "f_message", value: "Votre message" },
    { key: "f_submit", value: "TRANSMETTRE LE MESSAGE" },
    { key: "opt1", value: "Cinema / Documentaire" },
    { key: "opt2", value: "Theatre / Live" },
    { key: "opt3", value: "Post-Production" },
    { key: "opt4", value: "Formation / Atelier" },
    { key: "opt5", value: "Autre" },
    { key: "ph_name", value: "ama de la fontaine" },
    { key: "ph_email", value: "exemple@studio.com" },
    { key: "ph_message", value: "Decrivez vos besoins techniques..." },
    { key: "footer_copy", value: "© 2024 Caled Boukari. Ingenierie du son &amp; design acoustique." },
    { key: "g_eyebrow", value: "Galerie" },
    { key: "g_title", value: "Coulisses de tournage" },
    { key: "g_desc", value: "Quelques instants captes sur les plateaux et lors des prises de son." },
    { key: "g_cap1", value: "Coulisses de tournage : son, plateau et equipe en action." },
    { key: "g_cap2", value: "Prise de son sur le terrain. Avant chaque prise, le reperage acoustique dicte le placement : micros directionnels pour isoler la voix au coeur du chaos, hydrophones et capteurs de contact pour reveler la matiere vibrante des surfaces. On traque le souffle du vent, le fremissement des foules et le murmure des environnements pour nourrir un tournage mene en conditions reelles, ou la vraie vie devient la bande-son. De cette captation nait une chaine complete, du montage au traitement et au mixage jusqu'a la regie live, ou l'ingenieur du son orchestre en direct le souffle d'une scene, au service du recit cinematographique comme de la scene theatrale." },
  ];

  const seedTranslations = [];
  const languages = ["fr", "en", "de", "es", "pt"];

  for (const lang of languages) {
    for (const t of translationData) {
      seedTranslations.push({ key: t.key, language: lang, value: t.value });
    }
  }

  await prisma.translation.createMany({
    data: seedTranslations,
  });
  console.log(`Translations seeded (${seedTranslations.length} rows).`);

  console.log("Seeding complete!");
  process.exit(0);
}

seed().catch((err) => {
  console.error("Seeding failed:", err);
  process.exit(1);
});
