import { processSteps } from '@/lib/data';

export const ProcessSection = () => (
  <section className="mx-auto mt-20 max-w-6xl px-4">
    <h2 className="text-2xl font-semibold md:text-3xl">Process</h2>
    <div className="mt-6 grid gap-4 md:grid-cols-4">
      {processSteps.map((step, index) => (
        <div key={step} className="glass-card rounded-2xl p-5">
          <p className="text-xs uppercase tracking-[0.2em] text-slate-400">Étape {index + 1}</p>
          <p className="mt-2 text-lg font-semibold">{step}</p>
        </div>
      ))}
    </div>
  </section>
);
