import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { motion } from 'framer-motion';
import { DoodleIcon } from '../ui/doodle-icon';

gsap.registerPlugin(ScrollTrigger);

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

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.1,
    },
  },
};

const stepVariants = {
  hidden: { opacity: 0, x: -40, scale: 0.95 },
  visible: (i: number) => ({
    opacity: 1,
    x: 0,
    scale: 1,
    transition: {
      type: 'spring',
      stiffness: 80,
      damping: 18,
      delay: i * 0.15,
    },
  }),
};

const stepVariantsRight = {
  hidden: { opacity: 0, x: 40, scale: 0.95 },
  visible: (i: number) => ({
    opacity: 1,
    x: 0,
    scale: 1,
    transition: {
      type: 'spring',
      stiffness: 80,
      damping: 18,
      delay: i * 0.15,
    },
  }),
};

export function HowItWorks() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const progressFillRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    const progressFill = progressFillRef.current;

    if (!section || !progressFill) return;

    // Scroll-driven progress line: fill grows 0→100% as user scrolls through section
    gsap.fromTo(
      progressFill,
      { scaleY: 0, transformOrigin: 'top center' },
      {
        scaleY: 1,
        transformOrigin: 'top center',
        ease: 'none',
        scrollTrigger: {
          trigger: section,
          start: 'top 70%',
          end: 'bottom 30%',
          scrub: 1.2,
        },
      }
    );

    return () => {
      ScrollTrigger.getAll().forEach((t) => t.kill());
    };
  }, []);

  return (
    <section ref={sectionRef} className="py-20 md:py-28 bg-stone-50 overflow-hidden">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="text-center mb-20"
        >
          <p className="text-sm font-medium text-teal-600 uppercase tracking-wider mb-4">
            How it works
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-4">
            Chaos in. Clarity out.
          </h2>
          <p className="text-lg text-muted-foreground max-w-xl mx-auto">
            Three steps from paper-ledgers to a system that runs your business.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          className="relative"
        >
          {/* Progress line track - desktop */}
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-[2px] bg-stone-200 -translate-x-1/2 rounded-full overflow-hidden" />
          {/* Progress line fill - scroll-driven, grows from top */}
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-[2px] -translate-x-1/2 overflow-hidden">
            <div
              ref={progressFillRef}
              className="w-full h-full rounded-full bg-gradient-to-b from-teal-400 via-teal-500 to-teal-600 origin-top"
              style={{ transform: 'scaleY(0)', transformOrigin: 'top center' }}
            />
          </div>

          <div className="space-y-16 md:space-y-24">
            {steps.map((step, i) => (
              <motion.div
                key={step.num}
                data-step={i}
                variants={i % 2 === 0 ? stepVariants : stepVariantsRight}
                custom={i}
                className={`relative flex flex-col md:flex-row items-center gap-8 md:gap-16 ${
                  i % 2 === 1 ? 'md:flex-row-reverse' : ''
                }`}
              >
                {/* Content card with hover */}
                <motion.div
                  className={`flex-1 ${i % 2 === 1 ? 'md:text-right' : ''}`}
                  whileHover={{ scale: 1.02, y: -4 }}
                  transition={{ type: 'spring', stiffness: 400, damping: 25 }}
                >
                  <div
                    className={`inline-block p-6 rounded-2xl bg-white/80 backdrop-blur-sm border border-stone-200/80 shadow-lg shadow-stone-200/50 hover:shadow-xl hover:shadow-teal-500/10 hover:border-teal-200/60 transition-all duration-300 ${
                      i % 2 === 1 ? 'md:text-right' : ''
                    }`}
                  >
                    <div className={`inline-flex items-center gap-3 mb-4 ${i % 2 === 1 ? 'md:ml-auto' : ''}`}>
                      <motion.div
                        className="p-2.5 rounded-xl bg-teal-500/10 border border-teal-500/20"
                        whileHover={{ scale: 1.08 }}
                        transition={{ type: 'spring', stiffness: 400, damping: 20 }}
                      >
                        <DoodleIcon name={step.icon} className="w-6 h-6 text-teal-600" />
                      </motion.div>
                      <span className="text-3xl font-bold text-teal-600/50 tabular-nums">{step.num}</span>
                    </div>
                    <h3 className="text-xl md:text-2xl font-bold text-foreground mb-2">{step.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">{step.desc}</p>
                  </div>
                </motion.div>

                {/* Center dot */}
                <div className="flex-shrink-0 w-6 h-6 rounded-full bg-teal-500 border-4 border-stone-50 shadow-lg shadow-teal-500/30 z-10" />

                <div className="flex-1 hidden md:block" />
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
