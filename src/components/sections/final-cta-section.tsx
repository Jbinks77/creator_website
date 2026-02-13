import Link from 'next/link';

export const FinalCTASection = () => (
  <section className="py-16 md:py-24">
    <div className="mx-auto w-full max-w-[1120px] px-4">
      <div className="rounded-[20px] border border-[rgba(255,255,255,0.06)] bg-[var(--surface)] p-8 text-center shadow-card">
        <p className="text-2xl font-semibold">Prêt à faire passer votre site au niveau supérieur ?</p>
        <Link href="/contact" className="mt-5 inline-flex rounded-full bg-[var(--accent)] px-5 py-2.5 text-sm font-semibold text-white">Demander un devis</Link>
      </div>
    </div>
  </section>
);
