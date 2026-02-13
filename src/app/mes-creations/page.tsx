import { PortfolioShowcase } from '@/components/sections/portfolio-showcase';
import { Reveal } from '@/components/motion/reveal';

export default function CreationsPage() {
  return (
    <>
      <section className="mx-auto max-w-6xl px-4 pt-16">
        <Reveal>
          <h1 className="text-5xl text-white">Mes créations</h1>
          <p className="mt-4 max-w-2xl text-white/70">Une sélection de projets orientés impact business avec une exécution design premium.</p>
        </Reveal>
      </section>
      <PortfolioShowcase />
    </>
  );
}
