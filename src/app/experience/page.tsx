import type { Metadata } from 'next';
import { ExperiencePage } from '@/components/experience/experience-page';

export const metadata: Metadata = {
  title: 'Expérience | Studio [TON NOM]',
  description: 'The Build : regardez un site performant se construire étape par étape.',
  openGraph: {
    title: 'The Build — Studio [TON NOM]',
    description: 'Narration premium scroll-driven autour du process de création web.'
  }
};

export default function Page() {
  return <ExperiencePage />;
}
