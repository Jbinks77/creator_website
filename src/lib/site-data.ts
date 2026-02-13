export const services = [
  { title: 'Site vitrine premium', price: 'À partir de 1200€', desc: 'Direction artistique, UX claire et code rapide pour inspirer confiance.' },
  { title: 'Landing page conversion', price: 'À partir de 700€', desc: 'Structure orientée conversion avec message clair, preuve sociale et CTA.' },
  { title: 'E-commerce', price: 'À partir de 2500€', desc: 'Expérience d\'achat premium, fiche produit optimisée et tunnel simplifié.' },
  { title: 'Refactoring / optimisation', price: 'À partir de 500€', desc: 'Amélioration du score Core Web Vitals, SEO technique et lisibilité du code.' },
  { title: 'Maintenance', price: 'À partir de 49€/mois', desc: 'Mises à jour, sauvegardes, monitoring et support continu.' }
];

export const pills = ['Design premium', 'Performance 90+', 'SEO technique', 'Copy conversion', 'CMS flexible', 'Support continu'];

export const processSteps = [
  { title: 'Audit & stratégie', detail: 'Analyse de votre marché, vos objectifs et votre tunnel actuel.' },
  { title: 'Design & prototype', detail: 'Maquettes premium, hiérarchie claire et micro-interactions utiles.' },
  { title: 'Build & optimisation', detail: 'Développement Next.js, performance et SEO intégrés dès le départ.' },
  { title: 'Lancement & croissance', detail: 'Suivi des métriques, itérations et amélioration continue.' }
];

export const proofMetrics = [
  { label: 'Temps moyen de chargement', value: '< 1.6s' },
  { label: 'Gain conversion moyen', value: '+18%' },
  { label: 'Score Lighthouse', value: '90-100' }
];

export type ProjectType = 'Vitrine' | 'Landing' | 'E-commerce';

export const projects: { title: string; type: ProjectType; url: string; summary: string; impact: string }[] = [
  { title: 'Elieli — Site vitrine', type: 'Vitrine', url: 'https://website-elieli2.vercel.app/', summary: 'Positionnement premium et storytelling de marque.', impact: '+32% de demandes entrantes.' },
  { title: 'Nova Santé', type: 'Landing', url: '#', summary: 'Landing orientée prise de rendez-vous.', impact: 'CPL réduit de 27%.' },
  { title: 'Atelier Nocturne', type: 'E-commerce', url: '#', summary: 'Expérience shopping minimaliste haut de gamme.', impact: '+21% panier moyen.' },
  { title: 'Horizon Conseil', type: 'Vitrine', url: '#', summary: 'Refonte crédibilité + parcours client simplifié.', impact: '+40% taux de contact.' }
];
