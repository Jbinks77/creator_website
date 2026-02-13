'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { useToast } from '@/components/ui/toast';

const schema = z.object({
  name: z.string().min(2, 'Nom requis'),
  email: z.string().email('Email invalide'),
  budget: z.string().min(1, 'Choisissez un budget'),
  message: z.string().min(20, 'Décrivez votre projet (20 caractères min)')
});

type FormValues = z.infer<typeof schema>;

export function ContactForm() {
  const { push } = useToast();
  const { register, handleSubmit, formState: { errors, isSubmitting }, reset } = useForm<FormValues>({
    resolver: zodResolver(schema)
  });

  const onSubmit = async () => {
    await new Promise((resolve) => setTimeout(resolve, 700));
    push('Message envoyé. Je vous réponds rapidement.');
    reset();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 rounded-3xl border border-white/15 bg-white/[0.03] p-8">
      <input {...register('name')} placeholder="Nom" className="w-full rounded-xl border border-white/20 bg-black/30 px-4 py-3 text-white" />
      {errors.name && <p className="text-xs text-red-300">{errors.name.message}</p>}

      <input {...register('email')} placeholder="Email" className="w-full rounded-xl border border-white/20 bg-black/30 px-4 py-3 text-white" />
      {errors.email && <p className="text-xs text-red-300">{errors.email.message}</p>}

      <select {...register('budget')} className="w-full rounded-xl border border-white/20 bg-black/30 px-4 py-3 text-white">
        <option value="">Budget estimé</option>
        <option value="700-1200">700€ - 1200€</option>
        <option value="1200-2500">1200€ - 2500€</option>
        <option value="2500+">2500€+</option>
      </select>
      {errors.budget && <p className="text-xs text-red-300">{errors.budget.message}</p>}

      <textarea {...register('message')} placeholder="Parlez-moi de votre objectif principal" rows={5} className="w-full rounded-xl border border-white/20 bg-black/30 px-4 py-3 text-white" />
      {errors.message && <p className="text-xs text-red-300">{errors.message.message}</p>}

      <button disabled={isSubmitting} className="rounded-full bg-white px-6 py-3 text-sm font-semibold text-black disabled:opacity-40">
        {isSubmitting ? 'Envoi…' : 'Envoyer'}
      </button>
    </form>
  );
}
