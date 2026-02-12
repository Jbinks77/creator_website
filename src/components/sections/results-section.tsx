import { metrics } from '@/lib/data';

export const ResultsSection = () => (
  <section className="mx-auto mt-20 max-w-6xl px-4">
    <h2 className="text-2xl font-semibold md:text-3xl">Preuves / Résultats</h2>
    <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
      {metrics.map((metric) => (
        <div key={metric.label} className="glass-card rounded-2xl p-5">
          <p className="text-2xl font-semibold text-cyan-200">{metric.value}</p>
          <p className="mt-2 text-sm text-slate-300">{metric.label}</p>
        </div>
      ))}
    </div>
    <p className="mt-4 text-xs text-slate-400">* Résultats observés selon projets, secteur et maturité business.</p>
  </section>
);
