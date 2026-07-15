# Portfolio Backend

Backend Node.js complet pour le portfolio, avec Neon (PostgreSQL) pour la base de donnees et Cloudinary pour le stockage d'images.

## Stack

- **Runtime** : Node.js + Express
- **Base de donnees** : Neon (PostgreSQL serverless) via Drizzle ORM
- **Images** : Cloudinary
- **Validation** : Zod
- **Upload** : Multer + streams Cloudinary

## Installation

```bash
cd server
cp .env.example .env
npm install
```

## Configuration

Renseigner `.env` :

```env
NEON_DATABASE_URL=postgres://user:password@host/dbname?sslmode=require
CLOUDINARY_CLOUD_NAME=your_cloud_name
CLOUDINARY_API_KEY=your_api_key
CLOUDINARY_API_SECRET=your_api_secret
```

## Commandes

```bash
npm run dev        # Lancer le serveur en dev
npm start          # Lancer en production
npm run db:push    # Appliquer le schema sur Neon
npm run db:seed    # Peupler la BDD avec les donnees initiales
npm run db:studio  # Ouvrir Drizzle Studio
```

## Endpoints API

### Showreel
- `GET /api/showreel` - Liste active
- `GET /api/showreel/all` - Liste complete
- `POST /api/showreel` - Creer
- `PUT /api/showreel/:id` - Modifier
- `DELETE /api/showreel/:id` - Supprimer

### Experiences
- `GET /api/experiences` - Liste active
- `GET /api/experiences/category/:category` - Par categorie (cinema/theatre)
- `POST /api/experiences` - Creer
- `PUT /api/experiences/:id` - Modifier
- `DELETE /api/experiences/:id` - Supprimer

### Galerie
- `GET /api/gallery` - Liste active
- `POST /api/gallery` - Creer
- `PUT /api/gallery/:id` - Modifier
- `DELETE /api/gallery/:id` - Supprimer

### Competences
- `GET /api/skills` - Liste active
- `POST /api/skills` - Creer
- `PUT /api/skills/:id` - Modifier
- `DELETE /api/skills/:id` - Supprimer

### Page (Hero / CTA / Footer / Contact)
- `GET /api/page/contact` - Infos contact
- `PUT /api/page/contact` - Modifier contact
- `GET /api/page/hero` - Hero
- `PUT /api/page/hero` - Modifier hero
- `GET /api/page/cta` - Call to action
- `PUT /api/page/cta` - Modifier CTA
- `GET /api/page/footer` - Footer
- `PUT /api/page/footer` - Modifier footer

### Traductions
- `GET /api/translations` - Toutes les traductions
- `GET /api/translations/:language` - Par langue
- `POST /api/translations/upsert` - Creer ou mettre a jour
- `POST /api/translations/bulk` - Bulk upsert
- `PUT /api/translations/:id` - Modifier
- `DELETE /api/translations/:id` - Supprimer

### Langues
- `GET /api/languages` - Toutes les langues
- `POST /api/languages` - Creer
- `PUT /api/languages/:id` - Modifier
- `DELETE /api/languages/:id` - Supprimer

### Upload
- `POST /api/upload/image` - Upload image (form-data, champ `file`)
- `POST /api/upload/showreel/:id/image` - Remplacer image showreel
- `POST /api/upload/gallery/:id/image` - Remplacer image galerie
- `DELETE /api/upload/image/:publicId` - Supprimer image

### Health
- `GET /health` - Sante du serveur

## Schema BDD

Tables :
- `showreel_projects` - Projets du showreel
- `experiences` - Experiences professionnelles (cinema / theatre)
- `gallery_shots` - Photos de la galerie
- `skill_sections` - Sections competences
- `contact_info` - Infos de contact
- `hero` - Section hero
- `cta` - Call to action
- `footer` - Footer
- `translations` - Traductions i18n
- `languages` - Langues disponibles

 - les identifiants 
Email: admin@portfolio.local
Mot de passe: admin123

