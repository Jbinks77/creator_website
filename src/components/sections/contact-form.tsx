'use client';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Select } from '@/components/ui/select';
import { Textarea } from '@/components/ui/textarea';
import { zodResolver } from '@hookform/resolvers/zod';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';

const schema = z.object({
  name: z.string().min(2, 'Nom requis'),
  email: z.string().email('Email invalide'),
  budget: z.string().min(1, 'Budget requis'),
  projectType: z.string().min(1, 'Type requis'),
  message: z.string().min(20, 'Message trop court')
});

type FormValues = z.infer<typeof schema>;

export const ContactForm = () => {
  const [success, setSuccess] = useState<string | null>(null);
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset
  } = useForm<FormValues>({ resolver: zodResolver(schema) });

  const onSubmit = async (data: FormValues) => {
    await new Promise((resolve) => setTimeout(resolve, 1200));
    console.log('Payload prêt pour endpoint futur :', data);
    reset();
    setSuccess('Message envoyé. Réponse sous 24-48h.');
  };

  return (
    <div className="grid gap-6 lg:grid-cols-[2fr,1fr]">
      <form onSubmit={handleSubmit(onSubmit)} className="glass-card rounded-2xl p-6">
        <div className="grid gap-4 sm:grid-cols-2">
          <div>
            <label className="mb-1 block text-sm">Nom</label>
            <Input {...register('name')} placeholder="Votre nom" autoComplete="name" />
            {errors.name && <p className="mt-1 text-xs text-rose-300">{errors.name.message}</p>}
          </div>
          <div>
            <label className="mb-1 block text-sm">Email</label>
            <Input {...register('email')} placeholder="vous@email.com" autoComplete="email" />
            {errors.email && <p className="mt-1 text-xs text-rose-300">{errors.email.message}</p>}
          </div>
        </div>
        <div className="mt-4 grid gap-4 sm:grid-cols-2">
          <div>
            <label className="mb-1 block text-sm">Budget</label>
            <Select {...register('budget')}>
              <option value="">Sélectionner</option>
              <option>500€ - 1200€</option><option>1200€ - 2500€</option><option>2500€+</option>
            </Select>
          </div>
          <div>
            <label className="mb-1 block text-sm">Type de projet</label>
            <Select {...register('projectType')}>
              <option value="">Sélectionner</option>
              <option>Site vitrine premium</option><option>Landing page conversion</option><option>E-commerce</option><option>Refactoring / optimisation</option>
            </Select>
          </div>
        </div>
        <div className="mt-4">
          <label className="mb-1 block text-sm">Message</label>
          <Textarea {...register('message')} rows={5} placeholder="Décrivez votre besoin, objectifs, délais..." />
          {errors.message && <p className="mt-1 text-xs text-rose-300">{errors.message.message}</p>}
        </div>
        <Button className="mt-5" disabled={isSubmitting}>{isSubmitting ? 'Envoi...' : 'Envoyer ma demande'}</Button>
        {success && <p className="mt-3 rounded-lg bg-emerald-400/20 px-3 py-2 text-sm text-emerald-200">{success}</p>}
      </form>
      <aside className="glass-card rounded-2xl p-6 text-sm text-slate-300">
        <p className="font-semibold text-white">Réponse sous 24-48h</p>
        <p className="mt-2">Disponibilité : Lun - Ven, 9h à 18h.</p>
        <div className="mt-4 space-y-2">
          <a href="#" className="block text-cyan-200 underline">WhatsApp (placeholder)</a>
          <a href="#" className="block text-cyan-200 underline">Calendly (placeholder)</a>
          <a href="mailto:hello@studio-tonnom.dev" className="block text-cyan-200 underline">Email</a>
        </div>
      </aside>
    </div>
  );
};
