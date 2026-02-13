import { BeforeAfterWidget } from '@/components/widgets/before-after-widget';
import { FAQSearchWidget } from '@/components/widgets/faq-search-widget';
import { PerformanceMeterWidget } from '@/components/widgets/performance-meter-widget';
import { ThemeToggleWidget } from '@/components/widgets/theme-toggle-widget';

export const DemoLabSection = () => (
  <section className="py-16 md:py-24">
    <div className="mx-auto w-full max-w-[1120px] px-4">
      <h2 className="text-[clamp(28px,3.2vw,40px)]">Demo technique</h2>
      <p className="mt-2 text-sm text-[var(--text-secondary)]">Lab minimal, interactions utiles, rendu sobre.</p>
      <div className="mt-8 grid gap-4 md:grid-cols-2">
        <BeforeAfterWidget />
        <ThemeToggleWidget />
        <PerformanceMeterWidget />
        <FAQSearchWidget />
      </div>
    </div>
  </section>
);
