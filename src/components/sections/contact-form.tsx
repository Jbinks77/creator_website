'use client';

import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { useState } from 'react';

const schema = z.object({
  name: z.string().min(2, 'Nom requis'),
  email: z.string().email('Email invalide'),
  budget: z.string().min(1, 'Budget requis'),
  projectType: z.string().min(1, 'Type requis'),
  message: z.string().min(12, 'Message trop court')
});

type FormValues = z.infer<typeof schema>;

export const ContactForm = () => {
  const [toast, setToast] = useState('');
  const { register, handleSubmit, formState: { errors, isSubmitting }, reset } = useForm<FormValues>({ resolver: zodResolver(schema) });

  const submit = async (values: FormValues) => {
    await new Promise((r) => setTimeout(r, 900));
    console.log(values);
    setToast('Message envoyé');
    reset();
  };

  return (
    <div className="grid gap-6 lg:grid-cols-[2fr,1fr]">
      <form onSubmit={handleSubmit(submit)} className="rounded-[20px] border border-[rgba(255,255,255,0.06)] bg-[var(--surface)] p-6">
        <label className="text-sm">Nom<input aria-invalid={!!errors.name} {...register('name')} className="mt-1 w-full rounded-xl border border-[rgba(255,255,255,0.1)] bg-transparent px-3 py-2" /></label>
        {errors.name && <p className="mt-1 text-xs text-red-300">{errors.name.message}</p>}
        <label className="mt-4 block text-sm">Email<input aria-invalid={!!errors.email} {...register('email')} className="mt-1 w-full rounded-xl border border-[rgba(255,255,255,0.1)] bg-transparent px-3 py-2" /></label>
        {errors.email && <p className="mt-1 text-xs text-red-300">{errors.email.message}</p>}
        <label className="mt-4 block text-sm">Budget<select {...register('budget')} className="mt-1 w-full rounded-xl border border-[rgba(255,255,255,0.1)] bg-transparent px-3 py-2"><option value="">Sélectionner</option><option>500€ - 1200€</option><option>1200€ - 2500€</option><option>2500€+</option></select></label>
        <label className="mt-4 block text-sm">Type de projet<select {...register('projectType')} className="mt-1 w-full rounded-xl border border-[rgba(255,255,255,0.1)] bg-transparent px-3 py-2"><option value="">Sélectionner</option><option>Site vitrine premium</option><option>Landing page conversion</option><option>E-commerce</option><option>Refactoring / optimisation</option></select></label>
        <label className="mt-4 block text-sm">Message<textarea {...register('message')} rows={5} className="mt-1 w-full rounded-xl border border-[rgba(255,255,255,0.1)] bg-transparent px-3 py-2" /></label>
        {errors.message && <p className="mt-1 text-xs text-red-300">{errors.message.message}</p>}
        <button disabled={isSubmitting} className="mt-5 rounded-full bg-[var(--accent)] px-5 py-2.5 text-sm font-semibold text-white">{isSubmitting ? 'Envoi...' : 'Envoyer'}</button>
        {toast && <p className="mt-3 text-sm text-[var(--success)]">{toast}</p>}
      </form>
      <aside className="rounded-[20px] border border-[rgba(255,255,255,0.06)] bg-[var(--surface)] p-6 text-sm text-[var(--text-secondary)]">
        <p className="font-semibold text-[var(--text)]">Réponse sous 24–48h (Lun–Ven).</p>
        <p className="mt-4">Email: hello@studio-tonnom.dev</p>
        <p className="mt-2">WhatsApp: placeholder</p>
        <p className="mt-2">Calendly: placeholder</p>
      </aside>
    </div>
  );
};
