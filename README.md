# DEXCHANGE SAAS

Application SaaS moderne pour la gestion de donnees avec tableau de bord et interface de tables.

## Installation et lancement

### Prerequis

- Node.js version 18 ou superieure
- npm ou yarn

### Installation

Clonez le depot et installez les dependances :

```bash
npm install
```

### Lancement en developpement

Demarrez le serveur de developpement :

```bash
npm run dev
```

Ouvrez votre navigateur et accdez a l'adresse : http://localhost:3000

### Build de production

Pour creer une version optimisee pour la production :

```bash
npm run build
npm start
```

## Structure du projet

```
desxchange-saas/
├── app/                      # Pages et routes (App Router Next.js)
│   ├── page.tsx             # Page d'accueil
│   ├── layout.tsx           # Layout principal
│   ├── auth/                # Pages d'authentification
│   │   ├── login/
│   │   └── register/
│   └── dashboard/           # Pages du tableau de bord
│       ├── page.tsx         # Dashboard principal
│       ├── layout.tsx       # Layout avec sidebar
│       ├── tables/          # Page des tables
│       └── demo/            # Page de demonstration
│
├── components/              # Composants React reutilisables
│   ├── dashboard/          # Composants dashboard (StatCard, ProjectsTable, etc.)
│   ├── shared/             # Composants partages (Avatar, Badge, ProgressBar)
│   └── ui/                 # Composants shadcn/ui (Button, Card, Input, etc.)
│
├── lib/                    # Utilitaires et configuration
│   ├── types/             # Types TypeScript (dashboard.ts, table.ts)
│   ├── hooks/             # Custom hooks (useDashboard, useTables)
│   └── utils/             # Utilitaires (constants.ts, cn.ts)
│
├── data/                   # Donnees statiques/mock
│   ├── dashboard/         # Stats, projets, commandes
│   └── tables/            # Auteurs, projets
│
├── providers/              # Providers React (Theme, etc.)
└── public/                # Assets statiques (images, icones)
```

## Librairies utilisees

### Framework et langage

- Next.js 15.0.3 - Framework React avec App Router
- React 19 - Librairie UI
- TypeScript - Typage statique

### Interface utilisateur

- Tailwind CSS 3.4.1 - Framework CSS utilitaire
- shadcn/ui - Collection de composants UI (Card, Button, Switch, Input, Label)
- Radix UI - Composants accessibles headless (Dialog, Label, Switch, Slot)
- class-variance-authority - Gestion des variants de composants
- clsx & tailwind-merge - Utilitaires pour classes CSS conditionnelles

### Animations

- Framer Motion 11.11.17 - Librairie d'animations fluides

### Icones et assets

- FontAwesome 6.7.1 - Bibliotheque d'icones
- next/image - Optimisation d'images

### Persistance et etat

- Context API React - Gestion du theme (dark mode)
- localStorage - Persistance du theme utilisateur

## Fonctionnalites implementees

- Page d'accueil simplifiee avec liens vers dashboard et authentification
- Systeme d'authentification (UI uniquement - pages login/register)
- Dashboard avec :
  - Cartes KPI statistiques
  - Tableau des projets
  - Apercu des commandes
  - Cartes informatives avec images
- Page Tables avec :
  - Table des auteurs avec avatars
  - Table des projets complete avec barres de progression
- Mode sombre complet avec switch dans la sidebar
- Sidebar responsive avec etat actif
- Animations fluides sur les composants
- Composants de chargement (Loader, ButtonLoader, SkeletonLoader)

## Ce que je ferais avec plus de temps

### Authentification et donnees

- Connecter une vraie base de donnees (PostgreSQL ou MongoDB)
- Systeme d'authentification fonctionnel avec NextAuth
- API pour sauvegarder et recuperer les donnees utilisateur

### Tables et donnees

- Recherche et filtres dans les tables
- Pagination pour afficher plus de resultats
- Export en CSV ou Excel
- Tri par colonnes

### Visualisation

- Graphiques interactifs pour les statistiques
- Dashboard personnalisable (deplacer les widgets)
- Plus de types de cartes et visualisations

### Experience utilisateur

- Notifications en temps reel
- Mode hors-ligne (PWA)
- Tutoriel de premiere utilisation
- Multi-langue (francais, anglais)

### Qualite du code

- Tests automatises (Jest, Playwright)
- Documentation avec Storybook
- Pipeline CI/CD automatique

## Licence

Projet realise dans un cadre educatif.
