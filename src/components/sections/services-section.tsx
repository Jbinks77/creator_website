'use client';

import { services } from '@/lib/data';
import { motion } from 'framer-motion';
import { Card } from '@/components/ui/card';

export const ServicesSection = () => (
  <section className="mx-auto mt-20 max-w-6xl px-4">
    <h2 className="text-2xl font-semibold md:text-3xl">Services premium</h2>
    <div className="mt-6 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
      {services.map((service) => (
        <motion.div key={service.title} whileHover={{ rotateX: -4, rotateY: 4, y: -4 }} transition={{ duration: 0.2 }}>
          <Card className="h-full">
            <p className="text-lg font-semibold">{service.title}</p>
            <p className="mt-2 text-sm text-slate-300">{service.description}</p>
            <p className="mt-4 text-cyan-200">{service.price}</p>
          </Card>
        </motion.div>
      ))}
    </div>
  </section>
);
