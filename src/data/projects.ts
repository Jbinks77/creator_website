export type ProjectType = 'Vitrine' | 'Landing' | 'E-commerce';

export const projects = [
  {
    title: 'Vitrine - prothésiste ongulaire',
    type: 'Vitrine' as ProjectType,
    description: 'Site vitrine moderne avec animations et sections claires.',
    stack: ['Next.js', 'Tailwind', 'Framer Motion'],
    tags: ['Brand', 'UX', 'Performance'],
    link: 'https://website-elieli2.vercel.app/',
    image: '/placeholders/project-elieli-home.svg'
  },
  {
    title: 'Pulse Finance',
    type: 'Landing' as ProjectType,
    description: 'Landing B2B premium pour acquisition qualifiée.',
    stack: ['Next.js', 'TypeScript', 'Analytics'],
    tags: ['Lead Gen', 'CRO'],
    link: '#',
    image: '/placeholders/project-pulse.svg'
  },
  {
    title: 'Atelier Arc',
    type: 'Vitrine' as ProjectType,
    description: 'Présentation éditoriale d’un studio créatif haut de gamme.',
    stack: ['Next.js', 'MDX', 'Motion'],
    tags: ['Editorial', 'Storytelling'],
    link: '#',
    image: '/placeholders/project-arc.svg'
  },
  {
    title: 'Nova Market',
    type: 'E-commerce' as ProjectType,
    description: 'Expérience e-commerce orientée mobile et conversion.',
    stack: ['Headless', 'Stripe', 'SEO'],
    tags: ['Catalogue', 'Checkout'],
    link: '#',
    image: '/placeholders/project-nova.svg'
  },
  {
    title: 'Orbit SaaS',
    type: 'Landing' as ProjectType,
    description: 'Page produit SaaS avec parcours argumentaire ultra clair.',
    stack: ['Next.js', 'Tailwind', 'A/B Ready'],
    tags: ['SaaS', 'Pipeline'],
    link: '#',
    image: '/placeholders/project-orbit.svg'
  }
];
