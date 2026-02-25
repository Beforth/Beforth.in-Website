import { motion } from 'framer-motion';
import { DoodleIcon } from '../ui/doodle-icon';

const comparisons = [
  {
    before: 'Paper ledgers, Excel sheets, manual entry',
    after: 'One dashboard. Real-time. Accurate.',
    beforeIcon: 'interface/grid.svg',
    afterIcon: 'interface/analytics.svg',
  },
  {
    before: 'Copy-paste between systems. Formulas that break.',
    after: 'Automated logic. Data flows where it should.',
    beforeIcon: 'interface/copy.svg',
    afterIcon: 'misc/automation.svg',
  },
  {
    before: 'Guessing inventory. Missing orders.',
    after: 'Control. Visibility. Fewer errors.',
    beforeIcon: 'interface/question.svg',
    afterIcon: 'interface/shield.svg',
  },
];

export function ValueDifference() {
  return (
    <section className="py-20 md:py-28 bg-stone-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-4">
            The difference
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            What you have today vs what we build for you
          </p>
        </motion.div>

        <div className="space-y-6">
          {comparisons.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="flex flex-col sm:flex-row items-stretch gap-4 sm:gap-6"
            >
              {/* Before */}
              <div className="flex-1 flex items-center gap-4 p-5 sm:p-6 rounded-xl bg-white border-2 border-stone-200 shadow-sm">
                <div className="flex-shrink-0 w-14 h-14 rounded-xl bg-amber-100 flex items-center justify-center">
                  <DoodleIcon name={item.beforeIcon} className="w-8 h-8 text-amber-700" />
                </div>
                <div className="min-w-0">
                  <p className="text-xs font-semibold text-amber-600 uppercase tracking-wider mb-1">Before</p>
                  <p className="text-foreground font-medium text-sm sm:text-base">{item.before}</p>
                </div>
              </div>

              {/* Arrow */}
              <div className="flex items-center justify-center flex-shrink-0">
                <div className="w-10 h-10 rounded-full bg-teal-500 flex items-center justify-center text-white">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden>
                    <path d="M5 12h14m-7-7l7 7-7 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none" />
                  </svg>
                </div>
              </div>

              {/* After */}
              <div className="flex-1 flex items-center gap-4 p-5 sm:p-6 rounded-xl bg-teal-50 border-2 border-teal-200 shadow-sm">
                <div className="flex-shrink-0 w-14 h-14 rounded-xl bg-teal-100 flex items-center justify-center">
                  <DoodleIcon name={item.afterIcon} className="w-8 h-8" />
                </div>
                <div className="min-w-0">
                  <p className="text-xs font-semibold text-teal-600 uppercase tracking-wider mb-1">After</p>
                  <p className="text-foreground font-semibold text-sm sm:text-base">{item.after}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
