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
  projectType: z.string().min(1, 'Type de projet requis'),
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
    setSuccess('Message envoyé avec succès. Je reviens vers vous rapidement.');
  };

  return (
    <div className="grid gap-6 lg:grid-cols-[2fr,1fr]">
      <form onSubmit={handleSubmit(onSubmit)} className="glass-card rounded-2xl p-6">
        <div className="grid gap-4 sm:grid-cols-2">
          <div>
            <label htmlFor="name" className="mb-1 block text-sm">Nom</label>
            <Input id="name" {...register('name')} placeholder="Votre nom" autoComplete="name" />
            {errors.name && <p className="mt-1 text-xs text-rose-300">{errors.name.message}</p>}
          </div>
          <div>
            <label htmlFor="email" className="mb-1 block text-sm">Email</label>
            <Input id="email" {...register('email')} placeholder="vous@email.com" autoComplete="email" />
            {errors.email && <p className="mt-1 text-xs text-rose-300">{errors.email.message}</p>}
          </div>
        </div>

        <div className="mt-4">
          <label htmlFor="projectType" className="mb-1 block text-sm">Type de projet</label>
          <Select id="projectType" {...register('projectType')}>
            <option value="">Sélectionner</option>
            <option>Site vitrine premium</option>
            <option>Landing page conversion</option>
            <option>E-commerce</option>
            <option>Refactoring / optimisation</option>
          </Select>
          {errors.projectType && <p className="mt-1 text-xs text-rose-300">{errors.projectType.message}</p>}
        </div>

        <div className="mt-4">
          <label htmlFor="message" className="mb-1 block text-sm">Message</label>
          <Textarea id="message" {...register('message')} rows={5} placeholder="Décrivez votre besoin, vos objectifs, votre timing..." />
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
