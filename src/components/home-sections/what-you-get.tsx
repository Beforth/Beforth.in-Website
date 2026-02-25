import { motion } from 'framer-motion';

const outcomes = [
  { value: '2', label: 'Live systems', sub: 'Ready to use today' },
  { value: '24/7', label: 'Support', sub: 'When you need it' },
  { value: '100%', label: 'Custom fit', sub: 'Built for your process' },
];

export function WhatYouGet() {
  return (
    <section className="py-16 md:py-20 border-y border-stone-200">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center text-sm font-medium text-teal-600 uppercase tracking-wider mb-10"
        >
          What you get
        </motion.p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
          {outcomes.map((item, i) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="text-center"
            >
              <div className="text-4xl md:text-5xl font-bold text-teal-600 mb-1">{item.value}</div>
              <div className="text-lg font-semibold text-foreground">{item.label}</div>
              <div className="text-sm text-muted-foreground mt-1">{item.sub}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
