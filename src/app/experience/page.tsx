import { Reveal } from '@/components/motion/reveal';

const stages = [
  ['Kickoff', 'Objectifs business, persona, positionnement et KPI de succès.'],
  ['Blueprint', 'Architecture de contenu, wireframes et direction artistique.'],
  ['Craft', 'Développement Next.js avec animations subtiles et performance prioritaire.'],
  ['Launch', 'Déploiement, analytics, optimisation continue et support.']
];

export default function ExperiencePage() {
  return (
    <section className="mx-auto max-w-5xl px-4 py-16">
      <Reveal>
        <p className="text-xs uppercase tracking-[0.3em] text-white/50">The Build</p>
        <h1 className="mt-4 text-5xl text-white">Une expérience de création claire, premium et orientée résultats.</h1>
      </Reveal>
      <div className="mt-10 space-y-8">
        {stages.map(([title, text]) => (
          <Reveal key={title}>
            <article className="rounded-3xl border border-white/15 bg-white/[0.03] p-7">
              <h2 className="text-2xl text-white">{title}</h2>
              <p className="mt-3 text-white/70">{text}</p>
            </article>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
