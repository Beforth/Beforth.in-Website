import { motion } from 'framer-motion';

const companies = [
  'Aureole Group',
  '4form',
  'Manufacturing Co',
  'Distribution Ltd',
  'Operations Inc',
  'Supply Chain Pro',
];

export function TrustedBy() {
  return (
    <section className="py-12 md:py-16 bg-background border-y border-stone-200 overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center text-xs font-medium text-stone-500 uppercase tracking-[0.2em] mb-8"
        >
          Trusted by leading teams
        </motion.p>

        <div className="relative">
          {/* Fade edges */}
          <div className="absolute left-0 top-0 bottom-0 w-12 md:w-24 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-12 md:w-24 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />

          <div className="flex overflow-hidden py-2">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              animate={{ x: ['0%', '-50%'] }}
              transition={{
                x: {
                  repeat: Infinity,
                  repeatType: 'loop',
                  duration: 25,
                  ease: 'linear',
                },
              }}
              className="flex items-center gap-8 md:gap-12 lg:gap-16 shrink-0"
            >
              {[...companies, ...companies].map((name, i) => (
                <span
                  key={`${name}-${i}`}
                  className="text-base md:text-lg font-semibold text-stone-400 whitespace-nowrap"
                >
                  {name}
                </span>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
