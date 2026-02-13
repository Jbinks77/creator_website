import { PortfolioGrid } from '@/components/sections/portfolio-grid';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Mes créations | Studio [TON NOM]',
  description: 'Portfolio de créations web premium.'
};

export default function Page() {
  return (
    <main className="py-16 md:py-24">
      <section className="mx-auto w-full max-w-[1120px] px-4">
        <h1 className="text-[clamp(44px,6vw,72px)] leading-[1.05] tracking-[-0.03em]">Mes créations</h1>
      </section>
      <PortfolioGrid />
    </main>
  );
}
