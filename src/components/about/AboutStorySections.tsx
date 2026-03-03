import { motion } from 'framer-motion';

const sections = [
  {
    num: '01',
    label: 'Our Story',
    title: 'Born from the friction of tradition.',
    paragraphs: [
      { text: "Beforth began with a simple observation: the world's most essential businesses were being held back by their own history—relying on paper, manual entry, and fragmented spreadsheets.", italic: false },
      { text: "We started by helping early clients bridge the gap between legacy operations and modern capability. Today, we've grown into a partner for traditional businesses that refuse to settle.", italic: false },
    ],
    bg: 'bg-stone-50',
    numColor: 'text-stone-200',
    borderColor: 'border-stone-200',
  },
  {
    num: '02',
    label: 'What We Do',
    title: (
      <>
        Digitization as a{' '}
        <span className="italic text-teal-600">
          competitive weapon.
        </span>
      </>
    ),
    paragraphs: [
      { text: 'We partner with mid-sized businesses to digitize core operations. Unlike generic software vendors, we deliver bespoke systems designed for your specific workflows.', italic: false },
      { text: 'We serve pharma, retail, wholesale, jewellery, textiles, and e-commerce. We don\'t sell features; we architect your internal success.', italic: false },
    ],
    bg: 'bg-stone-100',
    numColor: 'text-stone-200',
    borderColor: 'border-stone-300',
    accent: true,
  },
  {
    num: '03',
    label: 'Why Beforth',
    title: 'Process-first. Long-term. Intentional.',
    paragraphs: [
      { text: 'We believe that technology should be invisible. We focus on the underlying process before we ever write a single line of code.', italic: false },
      { text: "We aren't here for the one-off project; we are here for the long-haul evolution of your business, ensuring your systems scale as you do.", italic: false },
    ],
    bg: 'bg-stone-50',
    numColor: 'text-stone-200',
    borderColor: 'border-stone-200',
  },
  {
    num: '04',
    label: 'The Mission',
    title: (
      <>
        We exist because{' '}
        <span className="text-teal-400">complexity kills.</span>
      </>
    ),
    paragraphs: [
      { text: '"We started because operational debt is a silent killer of growth."', italic: true, color: 'stone-300' },
      { text: 'Every business reaches a point where spreadsheets become a burden. We exist to reclaim that lost time and fix the debt that keeps you from competing.', italic: false, color: 'stone-400' },
    ],
    bg: 'bg-stone-900',
    numColor: 'text-stone-800',
    borderColor: 'border-stone-700',
    dark: true,
  },
];

export function AboutStorySections() {
  return (
    <>
      {sections.map((section, i) => (
        <section
          key={section.num}
          className={`relative py-20 md:py-28 flex items-center overflow-hidden ${section.bg} ${
            section.dark ? 'text-stone-50' : ''
          }`}
        >
          <div
            className={`absolute left-[5%] top-1/2 -translate-y-1/2 text-[15vw] md:text-[20vw] font-extrabold select-none pointer-events-none ${section.numColor}`}
            aria-hidden
          >
            {section.num}
          </div>

          <div className="relative w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="max-w-4xl"
            >
              <span
                className={`font-bold tracking-[0.2em] uppercase text-xs mb-4 block ${
                  section.dark ? 'text-teal-400' : 'text-teal-600'
                }`}
              >
                {section.label}
              </span>
              <h2
                className={`text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-8 ${
                  section.dark ? 'text-white' : 'text-foreground'
                }`}
              >
                {section.title}
              </h2>
              <div
                className={`grid md:grid-cols-2 gap-8 md:gap-12 pt-8 border-t ${section.borderColor}`}
              >
                {section.paragraphs.map((p, j) => {
                  const text = typeof p === 'object' ? p.text : p;
                  const italic = typeof p === 'object' && p.italic;
                  const color = typeof p === 'object' && 'color' in p ? (p as { color?: string }).color : null;
                  const textColor = section.dark
                    ? (color === 'stone-400' ? 'text-stone-400' : 'text-stone-300')
                    : 'text-muted-foreground';
                  return (
                    <p
                      key={j}
                      className={`text-lg md:text-xl leading-relaxed ${textColor} ${italic ? 'italic' : ''}`}
                    >
                      {text}
                    </p>
                  );
                })}
              </div>
              {section.accent && (
                <div className="mt-8 h-1 w-20 bg-teal-500" aria-hidden />
              )}
            </motion.div>
          </div>
        </section>
      ))}
    </>
  );
}
