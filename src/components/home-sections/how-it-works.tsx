import { motion } from 'framer-motion';
import { DoodleIcon } from '../ui/doodle-icon';

const steps = [
  {
    num: '01',
    title: 'We learn your process',
    desc: 'How you work today—paper, Excel, registers. We don\'t assume.',
    icon: 'interface/target.svg',
  },
  {
    num: '02',
    title: 'We design around you',
    desc: 'Systems that fit your workflow. Pharma, salon, wholesale—we adapt.',
    icon: 'interface/zap.svg',
  },
  {
    num: '03',
    title: 'You get clarity & control',
    desc: 'Dashboards. Accurate data. Less manual work. Your operations, upgraded.',
    icon: 'interface/trophy.svg',
  },
];

export function HowItWorks() {
  return (
    <section className="py-20 md:py-28 bg-stone-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-4">
            How it works
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Three steps from chaos to clarity
          </p>
        </motion.div>

        <div className="relative">
          {/* Connecting line - desktop */}
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px bg-stone-300 -translate-x-1/2" />

          <div className="space-y-12 md:space-y-0">
            {steps.map((step, i) => (
              <motion.div
                key={step.num}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15 }}
                className={`relative flex flex-col md:flex-row items-center gap-8 ${
                  i % 2 === 1 ? 'md:flex-row-reverse' : ''
                }`}
              >
                <div className={`flex-1 ${i % 2 === 1 ? 'md:text-right' : ''}`}>
                  <div className="inline-flex items-center gap-3 mb-4">
                    <div className="p-2 rounded-lg bg-teal-500/10">
                      <DoodleIcon name={step.icon} className="w-6 h-6 text-teal-600" />
                    </div>
                    <span className="text-4xl font-bold text-stone-200">{step.num}</span>
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-2">{step.title}</h3>
                  <p className="text-muted-foreground">{step.desc}</p>
                </div>
                <div className="flex-shrink-0 w-4 h-4 rounded-full bg-teal-500 border-4 border-stone-50 shadow" />
                <div className="flex-1" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
