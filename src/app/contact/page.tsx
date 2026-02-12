import { ContactForm } from '@/components/sections/contact-form';

export default function ContactPage() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-14">
      <h1 className="text-4xl font-semibold">Parlons de votre projet</h1>
      <p className="mt-3 max-w-2xl text-slate-300">Partagez vos objectifs, votre budget et votre timing. Je vous propose un plan clair et actionnable.</p>
      <div className="mt-8"><ContactForm /></div>
    </section>
  );
}
