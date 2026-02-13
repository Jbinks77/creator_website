export const experienceChapters = [
  { id: 'wireframe', title: 'Structure. Clarté. Intention.', body: 'Le wireframe fixe le sens: hiérarchie visuelle, rythme et promesse claire.' },
  { id: 'code', title: 'Architecture. Réutilisabilité. Lisibilité.', body: 'Chaque section est pensée en composants propres, testables et maintenables.' },
  { id: 'design', title: 'Design system. Cohérence. Détails.', body: 'La direction visuelle se matérialise: surfaces, spacing, typo et micro-interactions.' },
  { id: 'performance', title: 'Rapide. Stable. Optimisé.', body: 'Optimisations front, score technique élevé et expérience fluide sur tous supports.' },
  { id: 'delivery', title: 'Livré pour convertir.', body: 'Le site final est prêt à vendre, mesurable et facile à faire évoluer.' }
] as const;

export type ExperienceChapterId = (typeof experienceChapters)[number]['id'];
