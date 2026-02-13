import { ContactForm } from '@/components/sections/contact-form';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact | Studio [TON NOM]',
  description: 'Contactez Studio [TON NOM] pour votre projet web.'
};

export default function ContactPage() {
  return (
    <main className="py-16 md:py-24">
      <section className="mx-auto w-full max-w-[1120px] px-4">
        <h1 className="text-[clamp(44px,6vw,72px)] leading-[1.05] tracking-[-0.03em]">Contact</h1>
        <p className="mt-2 text-[var(--text-secondary)]">Réponse sous 24–48h (Lun–Ven).</p>
        <div className="mt-8"><ContactForm /></div>
      </section>
    </main>
  );
}
