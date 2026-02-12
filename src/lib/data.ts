export const navLinks = [
  { href: '/', label: 'Accueil' },
  { href: '/mes-creations', label: 'Mes créations' },
  { href: '/contact', label: 'Contact' }
];

export const services = [
  {
    title: 'Site vitrine premium',
    description: 'Design sur-mesure, SEO, performance, animations',
    price: 'à partir de 1200€'
  },
  {
    title: 'Landing page conversion',
    description: 'Copy + UI + A/B ready',
    price: 'à partir de 700€'
  },
  {
    title: 'E-commerce',
    description: 'Stripe/Shopify/Headless selon besoin',
    price: 'à partir de 2500€'
  },
  {
    title: 'Refactoring / optimisation',
    description: 'Core Web Vitals, accessibilité, clean code',
    price: 'à partir de 500€'
  },
  {
    title: 'Maintenance',
    description: 'Mises à jour, sécurité, contenu',
    price: 'à partir de 49€/mois'
  }
];

export const metrics = [
  { label: 'Conversion moyenne', value: '+30%' },
  { label: 'Lighthouse', value: '90+ / 100' },
  { label: 'Temps de chargement', value: '< 1.8s' },
  { label: 'Taux de rebond', value: '-22%' }
];

export const processSteps = ['Découverte', 'Design', 'Dév', 'Livraison'];

export const testimonials = [
  { author: 'Nora M.', role: 'CEO Agence', text: 'Un site superbe qui convertit dès la première semaine.' },
  { author: 'Lucas P.', role: 'Coach business', text: 'Le niveau UI/UX est premium, et la perf est irréprochable.' },
  { author: 'Mina D.', role: 'E-com manager', text: 'Refonte express, SEO en hausse, tunnel de vente clarifié.' }
];

export const faq = [
  { q: 'Quels sont les délais ?', a: 'Entre 7 et 28 jours selon le périmètre et les intégrations.' },
  { q: 'Travaillez-vous avec une équipe existante ?', a: 'Oui, je collabore avec vos devs, marketeurs et designers.' },
  { q: 'Proposez-vous le SEO technique ?', a: 'Oui, structure, performance, balisage et plan d’indexation.' },
  { q: 'Peut-on démarrer rapidement ?', a: 'Oui, un appel de cadrage suffit pour lancer le sprint initial.' }
];

export type ProjectType = 'Vitrine' | 'Landing' | 'E-commerce';

export const projects: Array<{
  title: string;
  type: ProjectType;
  description: string;
  stack: string[];
  tags: string[];
  link: string;
}> = [
  {
    title: 'Elieli – Site vitrine',
    type: 'Vitrine',
    description: 'Site vitrine moderne avec animations et sections claires.',
    stack: ['Next.js', 'Tailwind', 'Framer Motion'],
    tags: ['Branding', 'UX', 'Performance'],
    link: 'https://website-elieli2.vercel.app/'
  },
  {
    title: 'PulseLead',
    type: 'Landing',
    description: 'Landing orientée conversion avec A/B testing ready.',
    stack: ['Next.js', 'Analytics', 'Copywriting'],
    tags: ['CRO', 'Lead Gen'],
    link: '#'
  },
  {
    title: 'Maison Nébuleuse',
    type: 'Vitrine',
    description: 'Expérience éditoriale premium pour studio créatif.',
    stack: ['Next.js', 'CMS', 'Motion'],
    tags: ['Editorial', 'Storytelling'],
    link: '#'
  },
  {
    title: 'Nova Commerce',
    type: 'E-commerce',
    description: 'Catalogue rapide avec checkout optimisé mobile.',
    stack: ['Headless', 'Stripe', 'SEO'],
    tags: ['E-commerce', 'Funnel'],
    link: '#'
  },
  {
    title: 'ScaleOps',
    type: 'Landing',
    description: 'Page d’acquisition B2B avec argumentaire structuré.',
    stack: ['React', 'Figma', 'A/B Ready'],
    tags: ['B2B', 'Pipeline'],
    link: '#'
  }
];
