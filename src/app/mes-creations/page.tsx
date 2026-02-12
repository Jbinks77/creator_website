import { PortfolioGrid } from '@/components/sections/portfolio-grid';

export default function PortfolioPage() {
  return (
    <>
      <section className="mx-auto max-w-6xl px-4 pt-14">
        <h1 className="text-4xl font-semibold">Mes créations</h1>
        <p className="mt-3 max-w-2xl text-slate-300">Sélection de projets vitrines, landing pages et e-commerce conçus pour performer.</p>
      </section>
      <PortfolioGrid />
    </>
  );
}
