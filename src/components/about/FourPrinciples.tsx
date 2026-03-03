import { motion } from 'framer-motion';

const principles = [
  {
    title: 'We Show Up When It Matters Most',
    description: 'Launches. Digitization. Scaling. We do our best work when the stakes are highest—helping you move from paper to digital and make decisions that move your business forward, fast.',
  },
  {
    title: 'Your Systems Must Perform',
    description: 'There are plenty of apps in the world. We build systems that actually work—driving clarity, control, and results for your business. Good design is table stakes; we deliver solutions that perform.',
  },
  {
    title: "We're In It For The Long Haul",
    description: 'From implementation to support, we align with your goals from the start. We don\'t do one-offs. Instead, we build robust systems designed to scale and consistently deliver value over time.',
  },
  {
    title: 'Doing Great Work, With Great People',
    description: 'We believe in working with good people, doing good things, to generate exceptional results—accelerating both business growth and personal success.',
  },
];

export function FourPrinciples() {
  return (
    <section className="py-20 md:py-28 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16 md:mb-20"
        >
          <span className="text-4xl sm:text-5xl md:text-6xl font-bold text-teal-600 block sm:inline">
            Four Principles
          </span>
          <span className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground block sm:inline mt-2 sm:mt-0 sm:ml-2">
            We Never Get Bored Of Talking About
          </span>
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-10">
          {principles.map((principle, index) => (
            <motion.div
              key={principle.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              viewport={{ once: true }}
            >
              <h3 className="text-xl md:text-2xl font-bold text-foreground leading-tight mb-4">
                {principle.title}
              </h3>
              <p className="text-base text-muted-foreground leading-relaxed">
                {principle.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
