import { motion } from 'framer-motion';
import { DoodleIcon } from '../ui/doodle-icon';
import { Card } from '../ui/card';

const industries = [
  { name: 'Pharma manufacturing', focus: 'Accuracy & compliance', icon: 'health/flask.svg' },
  { name: 'Salons & retail', focus: 'Speed & billing', icon: 'e-commerce/shop.svg' },
  { name: 'Wholesalers', focus: 'Stock & accounts', icon: 'e-commerce/warehouse.svg' },
  { name: 'Gold & jewellery', focus: 'Precise tracking', icon: 'interface/diamond.svg' },
  { name: 'Garment & textiles', focus: 'Inventory & orders', icon: 'e-commerce/tag.svg' },
];

export function IndustriesWeServe() {
  return (
    <section className="py-20 md:py-28 bg-stone-50">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-4">
            Industries we serve
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            We adapt to your business—not the other way around
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {industries.map((ind, i) => (
            <motion.div
              key={ind.name}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.06 }}
            >
              <Card className="h-full p-5 rounded-xl border-2 border-stone-200 bg-white hover:border-teal-300 hover:shadow-md transition-all duration-200">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-teal-100 flex items-center justify-center">
                    <DoodleIcon name={ind.icon} className="w-6 h-6" />
                  </div>
                  <div className="min-w-0">
                    <h3 className="font-semibold text-foreground">{ind.name}</h3>
                    <p className="text-sm text-muted-foreground mt-1">{ind.focus}</p>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
