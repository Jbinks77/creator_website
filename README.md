# Studio [TON NOM] — Site vitrine immersif (Next.js + 3D)

Site vitrine professionnel avec **Hero 3D interactif** (React Three Fiber), contenu en français, et 3 pages : Accueil, Mes créations, Contact.

## Stack
- Next.js 14 (App Router) + TypeScript
- TailwindCSS
- Framer Motion
- React Three Fiber + Drei + Three.js
- React Hook Form + Zod
- Recharts

## Installation
```bash
npm install
```

## Développement
```bash
npm run dev
```

## Build production
```bash
npm run build
npm run start
```

## Vérifications
```bash
npm run lint
npm run typecheck
```

## Routes
- `/` : Hero 3D plein écran + sections Services / Widgets
- `/mes-creations` : grille responsive des projets (dont Elieli)
- `/contact` : formulaire validé et accessible

## Notes perf
- Le composant 3D est chargé en **lazy load** (`next/dynamic`, `ssr: false`) pour limiter le coût JS initial.
- Les visuels portfolio utilisent `next/image`.
