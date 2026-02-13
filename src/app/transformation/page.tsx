import type { Metadata } from 'next';
import { TransformationPage } from '@/components/transformation/TransformationPage';

export const metadata: Metadata = {
  title: 'Transformation | Studio [TON NOM]',
  description: 'Démonstration scroll-driven : ancien site vers site premium performant.',
  openGraph: {
    title: 'Live Transformation — Studio [TON NOM]',
    description: 'Voyez un site basique devenir premium, conversion-first et performant.'
  }
};

export default function Page() {
  return <TransformationPage />;
}
