import type { Metadata } from 'next';
import { TransformationSection } from '@/components/transformation/TransformationSection';

export const metadata: Metadata = {
  title: 'Transformation | Studio [TON NOM]',
  description: 'Démonstration scroll-driven : site basique vers site premium performant.',
  openGraph: {
    title: 'Live Transformation — Studio [TON NOM]',
    description: 'Voyez comment un site basique devient premium, performant et conversion-first.'
  }
};

export default function TransformationPage() {
  return <TransformationSection />;
}
