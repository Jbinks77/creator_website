import { DemoLabSection } from '@/components/sections/demo-lab-section';
import { DeliverablesSection } from '@/components/sections/deliverables-section';
import { FinalCTASection } from '@/components/sections/final-cta-section';
import { HeroSection } from '@/components/sections/hero-section';
import { ProcessSection } from '@/components/sections/process-section';
import { ServicesSection } from '@/components/sections/services-section';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Accueil | Studio [TON NOM]',
  description: 'Je conçois des sites web qui donnent envie d’acheter.'
};

export default function Home() {
  return (
    <>
      <HeroSection />
      <DeliverablesSection />
      <ServicesSection />
      <ProcessSection />
      <DemoLabSection />
      <FinalCTASection />
    </>
  );
}
