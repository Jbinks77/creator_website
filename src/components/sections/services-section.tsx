'use client';

import * as Dialog from '@radix-ui/react-dialog';
import { services } from '@/data/services';
import { TiltCard } from '@/components/shared/tilt-card';

export const ServicesSection = () => (
  <section id="services" className="py-16 md:py-24">
    <div className="mx-auto w-full max-w-[1120px] px-4">
      <h2 className="text-[clamp(28px,3.2vw,40px)] leading-[1.15] tracking-[-0.02em]">Services</h2>
      <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
        {services.map((service) => (
          <TiltCard key={service.title}>
            <article className="rounded-[20px] border border-[rgba(255,255,255,0.06)] bg-[var(--surface)] p-5 shadow-card transition-shadow hover:shadow-card-hover">
              <h3 className="text-[20px] leading-[1.25] tracking-[-0.01em]">{service.title}</h3>
              <p className="mt-1 text-sm text-[var(--text-secondary)]">{service.price}</p>
              <ul className="mt-4 space-y-2 text-sm text-[var(--text-secondary)]">
                {service.bullets.map((b) => <li key={b}>• {b}</li>)}
              </ul>
              <Dialog.Root>
                <Dialog.Trigger className="mt-5 rounded-full border border-[rgba(255,255,255,0.12)] px-4 py-2 text-sm">Détails</Dialog.Trigger>
                <Dialog.Portal>
                  <Dialog.Overlay className="fixed inset-0 bg-black/70" />
                  <Dialog.Content className="fixed left-1/2 top-1/2 w-[92vw] max-w-lg -translate-x-1/2 -translate-y-1/2 rounded-[20px] border border-[rgba(255,255,255,0.08)] bg-[var(--surface)] p-6 shadow-card">
                    <Dialog.Title className="text-xl font-semibold">{service.title}</Dialog.Title>
                    <p className="mt-1 text-sm text-[var(--text-secondary)]">{service.price}</p>
                    <p className="mt-4 text-sm font-semibold">Ce qui est inclus</p>
                    <ul className="mt-2 space-y-1 text-sm text-[var(--text-secondary)]">{service.includes.map((i) => <li key={i}>• {i}</li>)}</ul>
                    <p className="mt-4 text-sm"><span className="font-semibold">Délais typiques :</span> {service.delay}</p>
                    <p className="mt-3 text-sm font-semibold">Livrables</p>
                    <ul className="mt-2 space-y-1 text-sm text-[var(--text-secondary)]">{service.deliverables.map((l) => <li key={l}>• {l}</li>)}</ul>
                    <a href="/contact" className="mt-5 inline-flex rounded-full bg-[var(--accent)] px-4 py-2 text-sm font-semibold text-white">Demander un devis</a>
                  </Dialog.Content>
                </Dialog.Portal>
              </Dialog.Root>
            </article>
          </TiltCard>
        ))}
      </div>
    </div>
  </section>
);
