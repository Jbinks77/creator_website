export const navLinks = [
  { href: '/', label: 'Accueil' },
  { href: '/mes-creations', label: 'Mes créations' },
  { href: '/contact', label: 'Contact' }
];

export const services = [
  { title: 'Site vitrine premium', description: 'Design sur-mesure, SEO, performance, animations', price: 'à partir de 1200€' },
  { title: 'Landing page conversion', description: 'Copy + UI + A/B ready', price: 'à partir de 700€' },
  { title: 'E-commerce', description: 'Stripe/Shopify/Headless selon besoin', price: 'à partir de 2500€' },
  { title: 'Refactoring / optimisation', description: 'Core Web Vitals, accessibilité, clean code', price: 'à partir de 500€' },
  { title: 'Maintenance', description: 'Mises à jour, sécurité, contenu', price: 'à partir de 49€/mois' }
];

export type ProjectType = 'Vitrine' | 'Landing' | 'E-commerce';

export const projects = [
  {
    title: 'Elieli – Site vitrine',
    type: 'Vitrine' as const,
    description: 'Site vitrine moderne avec animations et sections claires.',
    stack: ['Next.js', 'Tailwind', 'Framer Motion'],
    tags: ['Branding', 'UX', 'Performance'],
    link: 'https://website-elieli2.vercel.app/',
    image: '/projects/elieli.svg'
  }
];

export const processSteps = ['Discovery', 'Design', 'Build', 'Launch'];

export const metrics = [
  { label: 'Performance', value: '95' },
  { label: 'SEO', value: '92' },
  { label: 'Conversion', value: '+18%' },
  { label: 'Bounce', value: '-24%' }
];

export const faq = [
  { q: 'Quel délai ?', a: '2 à 6 semaines selon le périmètre.' },
  { q: 'Proposez-vous la maintenance ?', a: 'Oui, forfait mensuel disponible.' }
];

export const testimonials = [
  { text: 'Exécution premium et résultats concrets.', author: 'Client A', role: 'Founder' },
  { text: 'Le site convertit beaucoup mieux.', author: 'Client B', role: 'CMO' }
];
