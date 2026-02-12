'use client';

import { services } from '@/lib/data';
import { motion } from 'framer-motion';
import { Card } from '@/components/ui/card';
import { Code2, Rocket, ShoppingBag, Wrench, ShieldCheck } from 'lucide-react';

const icons = [Code2, Rocket, ShoppingBag, Wrench, ShieldCheck];

export const ServicesSection = () => (
  <section id="services" className="mx-auto mt-20 max-w-6xl scroll-mt-24 px-4">
    <h2 className="text-2xl font-semibold md:text-3xl">Mes services</h2>
    <div className="mt-6 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
      {services.map((service, idx) => {
        const Icon = icons[idx] ?? Code2;
        return (
          <motion.div key={service.title} whileHover={{ rotateX: -3, rotateY: 3, y: -4 }} transition={{ duration: 0.2 }}>
            <Card className="h-full">
              <motion.div whileHover={{ rotate: 8, scale: 1.06 }} className="inline-flex rounded-xl border border-white/15 bg-white/5 p-2">
                <Icon className="h-5 w-5 text-cyan-200" />
              </motion.div>
              <p className="mt-4 text-lg font-semibold">{service.title}</p>
              <p className="mt-2 text-sm text-slate-300">{service.description}</p>
              <p className="mt-4 text-cyan-200">{service.price}</p>
            </Card>
          </motion.div>
        );
      })}
    </div>
  </section>
);
