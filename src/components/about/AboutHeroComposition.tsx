import { motion } from 'framer-motion';
import { Target, Shield, Heart, Users, ArrowRightLeft } from 'lucide-react';

const values = [
  { Icon: Shield, label: 'Process-focused' },
  { Icon: Heart, label: 'Reliable' },
  { Icon: Users, label: 'Long-term' },
  { Icon: Target, label: 'Clarity' },
];

/** About Beforth - Bridge & Values composition */
export function AboutHeroComposition() {
  return (
    <>
      {/* Mobile: Compact single-card layout */}
      <div className="md:hidden">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="bg-white rounded-2xl border border-stone-200 shadow-lg p-6"
        >
          <div className="flex flex-col items-center gap-4">
            <div className="w-14 h-14 rounded-full bg-teal-500/10 border-2 border-teal-500/30 flex items-center justify-center">
              <ArrowRightLeft className="w-7 h-7 text-teal-600" />
            </div>
            <div className="text-center">
              <p className="text-xs font-bold text-teal-600 uppercase tracking-widest mb-0.5">The Bridge</p>
              <p className="text-[11px] text-muted-foreground">Traditional ↔ Digital</p>
            </div>
            <div className="grid grid-cols-2 gap-2 w-full">
              {values.map(({ Icon, label }) => (
                <div
                  key={label}
                  className="flex items-center gap-2 px-3 py-2.5 rounded-xl bg-stone-50 border border-stone-100"
                >
                  <Icon className="w-4 h-4 text-teal-600 shrink-0" />
                  <span className="text-xs font-semibold text-foreground truncate">{label}</span>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>

      {/* Desktop: Bridge + values composition */}
      <div className="hidden md:block relative min-h-[320px] lg:min-h-[360px] flex items-center justify-center">
        <div className="absolute right-[10%] bottom-[15%] w-32 h-32 bg-teal-500 rounded-full opacity-[0.08] blur-2xl" />
        <div className="absolute left-[15%] top-[20%] w-24 h-24 bg-teal-500 rounded-full opacity-[0.06] blur-2xl" />

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-[1]"
        >
          <div className="flex flex-col items-center gap-2">
            <div className="w-12 h-12 rounded-full bg-teal-500/10 border-2 border-teal-500/30 flex items-center justify-center">
              <ArrowRightLeft className="w-6 h-6 text-teal-600" />
            </div>
            <span className="text-[10px] font-bold text-teal-600 uppercase tracking-widest">The Bridge</span>
            <span className="text-[9px] text-muted-foreground text-center max-w-[100px]">
              Traditional ↔ Digital
            </span>
          </div>
        </motion.div>

        {values.map(({ Icon, label }, i) => {
          const positions = [
            'left-[8%] top-[15%]',
            'left-[5%] bottom-[15%]',
            'right-[5%] bottom-[15%]',
            'right-[8%] top-[15%]',
          ];
          return (
            <motion.div
              key={label}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 + i * 0.05 }}
              whileHover={{ scale: 1.1 }}
              className={`absolute z-[3] px-3 py-2 rounded-lg bg-white border border-stone-200 shadow-md flex items-center gap-2 cursor-pointer hover:border-teal-300 hover:shadow-lg transition-all ${positions[i]}`}
              title={label}
            >
              <Icon className="w-3.5 h-3.5 text-teal-600 shrink-0" />
              <span className="text-[10px] font-semibold text-foreground">{label}</span>
            </motion.div>
          );
        })}

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.45 }}
          className="absolute bottom-[8%] left-1/2 -translate-x-1/2 z-[2]"
        >
          <div className="px-4 py-2 rounded-full bg-teal-50 border border-teal-200/60 shadow-sm">
            <span className="text-[10px] font-bold text-teal-600 uppercase tracking-wider">Who we are</span>
          </div>
        </motion.div>
      </div>
    </>
  );
}
