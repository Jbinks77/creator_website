import { HeroSection } from '@/components/sections/hero-section';
import { ProcessSection } from '@/components/sections/process-section';
import { ResultsSection } from '@/components/sections/results-section';
import { ServicesSection } from '@/components/sections/services-section';
import { WidgetsSection } from '@/components/sections/widgets-section';

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <ServicesSection />
      <ResultsSection />
      <ProcessSection />
      <WidgetsSection />
    </>
  );
}
