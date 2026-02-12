import { DashboardWidget } from '@/components/widgets/dashboard-widget';
import { FAQSearchWidget } from '@/components/widgets/faq-search-widget';
import { PaletteGeneratorWidget } from '@/components/widgets/palette-generator-widget';
import { PerformanceScoreWidget } from '@/components/widgets/performance-score-widget';
import { PricingToggleWidget } from '@/components/widgets/pricing-toggle-widget';
import { TestimonialCarouselWidget } from '@/components/widgets/testimonial-carousel-widget';

export const WidgetsSection = () => (
  <section className="mx-auto mt-20 max-w-6xl px-4">
    <h2 className="text-2xl font-semibold md:text-3xl">Widgets / Démo technique</h2>
    <div className="mt-6 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
      <PricingToggleWidget />
      <DashboardWidget />
      <TestimonialCarouselWidget />
      <PaletteGeneratorWidget />
      <PerformanceScoreWidget />
      <FAQSearchWidget />
    </div>
  </section>
);
