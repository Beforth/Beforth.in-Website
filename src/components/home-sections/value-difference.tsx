import { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { motion } from 'framer-motion';
import { Zap } from 'lucide-react';

const transformations = [
  {
    today: 'Today',
    future: 'The Future',
    title: 'No more "Where is that file?"',
    desc: 'Stop hunting through paper ledgers and broken Excel formulas. We replace the manual hunt with one real-time dashboard that actually tells the truth.',
    visual: 'chaos-order',
  },
  {
    today: 'Manual',
    future: 'Automated',
    title: 'Stop guessing. Start knowing.',
    desc: 'Guessing inventory and missing orders is a symptom of disconnected systems. We build the "Digital Glue" that connects your orders to your warehouse automatically.',
    visual: 'pulse',
  },
];

export function ValueDifference() {
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const cards = cardRefs.current.filter(Boolean);
    const cleanups: (() => void)[] = [];

    cards.forEach((card) => {
      const before = card?.querySelector('.before-elements');
      const after = card?.querySelector('.after-elements');
      if (!before || !after) return;

      const onEnter = () => {
        gsap.to(before, { opacity: 0, x: -20, duration: 0.4 });
        gsap.to(after, { opacity: 1, x: 0, duration: 0.6, delay: 0.2 });
      };
      const onLeave = () => {
        gsap.to(before, { opacity: 1, x: 0, duration: 0.4 });
        gsap.to(after, { opacity: 0, x: 20, duration: 0.4 });
      };

      card?.addEventListener('mouseenter', onEnter);
      card?.addEventListener('mouseleave', onLeave);
      cleanups.push(() => {
        card?.removeEventListener('mouseenter', onEnter);
        card?.removeEventListener('mouseleave', onLeave);
      });
    });

    return () => cleanups.forEach((fn) => fn());
  }, []);

  return (
    <section className="py-20 md:py-32 bg-stone-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <p className="text-teal-600 font-semibold tracking-[0.2em] uppercase text-xs mb-4">
            Real Impact
          </p>
          <h2 className="text-4xl sm:text-5xl font-bold text-foreground leading-tight">
            From{' '}
            <span className="italic text-stone-700">Manual Friction</span>
            <br />
            to{' '}
            <span className="text-teal-600">Digital Flow.</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 gap-12">
          {transformations.map((item, i) => (
            <motion.div
              key={i}
              ref={(el) => (cardRefs.current[i] = el)}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className={`group p-8 md:p-12 flex flex-col gap-12 items-center rounded-[32px] border border-stone-200 bg-white transition-all duration-500 hover:border-teal-200 hover:shadow-xl hover:shadow-teal-500/10 ${
                i % 2 === 1 ? 'md:flex-row-reverse' : 'md:flex-row'
              }`}
            >
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-6">
                  <span className="px-3 py-1 bg-stone-100 text-stone-500 rounded-full text-[10px] font-bold uppercase">
                    {item.today}
                  </span>
                  <div className="h-px w-8 bg-stone-200" />
                  <span className="px-3 py-1 bg-teal-600 text-white rounded-full text-[10px] font-bold uppercase">
                    {item.future}
                  </span>
                </div>
                <h3 className="text-2xl font-bold text-foreground mb-4">{item.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{item.desc}</p>
              </div>

              <div className="w-full md:w-[400px] h-[180px] rounded-2xl overflow-hidden flex items-center justify-center bg-stone-100 border border-stone-200 p-6">
                {item.visual === 'chaos-order' ? (
                  <div className="relative w-full h-full bg-[radial-gradient(#e7e5e4_1.5px,transparent_1.5px)] bg-[length:24px_24px]">
                    <div className="before-elements absolute inset-0">
                      <div
                        className="absolute w-10 h-2.5 bg-stone-300 rounded-sm"
                        style={{ top: '20%', left: '10%', transform: 'rotate(15deg)' }}
                      />
                      <div
                        className="absolute w-10 h-2.5 bg-stone-300 rounded-sm"
                        style={{ top: '60%', left: '15%', transform: 'rotate(-10deg)' }}
                      />
                      <div
                        className="absolute w-10 h-2.5 bg-stone-300 rounded-sm"
                        style={{ top: '40%', left: '30%', transform: 'rotate(45deg)' }}
                      />
                    </div>
                    <div className="after-elements absolute inset-0 opacity-0 flex items-center justify-center gap-8">
                      <div className="w-12 h-3 bg-teal-500 rounded-sm shadow-lg shadow-teal-500/30" />
                      <div className="w-16 h-px bg-gradient-to-r from-teal-500 to-transparent" />
                      <div className="w-12 h-3 bg-teal-500 rounded-sm shadow-lg shadow-teal-500/30" />
                      <div className="w-16 h-px bg-gradient-to-r from-teal-500 to-transparent" />
                      <div className="w-12 h-3 bg-teal-500 rounded-sm shadow-lg shadow-teal-500/30" />
                    </div>
                  </div>
                ) : (
                  <div className="relative w-full h-full flex items-center justify-center bg-stone-900 rounded-xl">
                    <div className="absolute w-12 h-12 rounded-full border-2 border-teal-500/50 animate-ping" />
                    <div className="w-16 h-16 rounded-2xl bg-teal-500 flex items-center justify-center z-10 shadow-xl shadow-teal-500/40">
                      <Zap className="text-white w-8 h-8" fill="currentColor" stroke="currentColor" />
                    </div>
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
