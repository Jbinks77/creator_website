import { ContactForm } from '@/components/sections/contact-form';
import { Reveal } from '@/components/motion/reveal';

export default function ContactPage() {
  return (
    <section className="mx-auto max-w-4xl px-4 py-16">
      <Reveal>
        <h1 className="text-5xl text-white">Parlons de votre projet</h1>
        <p className="mt-4 text-white/70">Brief, objectifs, budget et timing. Je reviens vers vous avec un plan concret.</p>
      </Reveal>
      <div className="mt-8">
        <ContactForm />
      </div>
    </section>
  );
}
