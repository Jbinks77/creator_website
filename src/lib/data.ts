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

export type ProjectType = 'Vitrine' | 'Landing' | 'E-commerce';

export const projects: Array<{
  title: string;
  type: ProjectType;
  description: string;
  stack: string[];
  tags: string[];
  link: string;
  image: string;
}> = [
  {
    title: 'Elieli – Site vitrine',
    type: 'Vitrine',
    description: 'Site vitrine moderne avec animations et sections claires.',
    stack: ['Next.js', 'Tailwind', 'Framer Motion'],
    tags: ['Branding', 'UX', 'Performance'],
    link: 'https://website-elieli2.vercel.app/',
    image: '/projects/elieli.svg'
  },
  {
    title: 'PulseLead',
    type: 'Landing',
    description: 'Landing orientée conversion avec A/B testing ready.',
    stack: ['Next.js', 'Analytics', 'Copywriting'],
    tags: ['CRO', 'Lead Gen'],
    link: 'https://example.com',
    image: '/projects/pulselead.svg'
  },
  {
    title: 'Nova Commerce',
    type: 'E-commerce',
    description: 'Catalogue rapide avec checkout optimisé mobile.',
    stack: ['Headless', 'Stripe', 'SEO'],
    tags: ['E-commerce', 'Funnel'],
    link: 'https://example.com',
    image: '/projects/nova.svg'
  },
  {
    title: 'Maison Nébuleuse',
    type: 'Vitrine',
    description: 'Expérience éditoriale premium pour studio créatif.',
    stack: ['Next.js', 'CMS', 'Motion'],
    tags: ['Editorial', 'Storytelling'],
    link: 'https://example.com',
    image: '/projects/nebulouse.svg'
  }
];
