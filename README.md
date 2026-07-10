# Caled Boukari — Portfolio (Ingénieur du son)

Portfolio personnel de **Caled Boukari**, ingénieur du son spécialisé en prise de son, montage et mixage pour le cinéma, le documentaire et le spectacle vivant (Lomé, Togo — disponible en Afrique et à l'international).

## Stack technique

- **React 19** + **Vite 8** (HMR, build rapide)
- **Tailwind CSS 3** (thème piloté par variables CSS, dark/light)
- **Three.js** — sphère sonore filaire animée (hero)
- **WebGL** (shader maison) — fond d'ondes réactif à la souris
- **Oxlint** pour le lint

## Fonctionnalités

- Mode **clair / sombre** (fond noir profond en dark, bascule via `localStorage`)
- **i18n** intégré : Français, Anglais, Allemand, Espagnol, Portugais
- Sections : Hero, Showreel (Vimeo), Expériences (cinéma & théâtre), Compétences, Call-to-Action, Contact (formulaire `mailto:` + coordonnées)
- Animations au scroll (révélation à l'intersection), design « studio / technique »

## Démarrage

```bash
npm install
npm run dev      # serveur de développement
npm run build    # build de production (dossier dist/)
npm run preview  # prévisualiser le build
npm run lint     # oxlint
```

## Structure

```
index.html
src/
  main.jsx                 # point d'entrée (Theme + I18n providers)
  App.jsx                  # assemblage des sections
  index.css                # thème (variables CSS) + utilitaires Tailwind
  theme/ThemeContext.jsx   # gestion dark/light
  i18n/                    # traductions + contexte de langue
  components/              # Navbar, Hero, Showreel, Experiences, Skills,
                           # CallToAction, Contact, Footer, ShaderBackground,
                           # ThreeScene, Reveal, ThemeToggle, LanguageSwitcher
```

## Personnalisation

- **Palette / thème** : `src/index.css` (bloc `:root` pour le dark, `html.light` pour le clair).
- **Textes & traductions** : `src/i18n/translations.js`.
- **Projets Showreel** : tableau `PROJECTS` dans `src/components/Showreel.jsx`.
- **Coordonnées** : `src/components/Contact.jsx` et `src/components/Footer.jsx` (email `caledboukari@yahoo.com`).
