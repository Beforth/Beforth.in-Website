import { motion } from 'framer-motion';
import { Button } from '../ui/button';
import { Card } from '../ui/card';

type ServiceForDisplay = {
  id: string;
  title: string;
  description: string;
  demoUrl?: string;
  icon: React.ReactNode;
};

export function YourSystems<T extends ServiceForDisplay>({
  services,
  onLearnMore,
}: {
  services: T[];
  onLearnMore: (service: T) => void;
}) {
  return (
    <section className="py-20 md:py-28">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-4">
            Your systems
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Live products we adapt to your industry. Try them, then we customize.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {services.map((sys, i) => (
            <motion.div
              key={sys.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
            >
              <Card className="h-full p-8 border-2 hover:border-teal-300 transition-colors overflow-hidden group">
                <div className="flex justify-between items-start mb-6">
                  <h3 className="text-2xl font-bold text-foreground">{sys.title}</h3>
                  <div className="p-3 rounded-lg bg-teal-500/10 text-teal-600 group-hover:scale-110 transition-transform">
                    {sys.icon}
                  </div>
                </div>
                <p className="text-muted-foreground mb-6">{sys.description}</p>
                <div className="flex gap-3">
                  {sys.demoUrl && (
                    <Button size="sm" asChild>
                      <a href={sys.demoUrl} target="_blank" rel="noopener noreferrer">
                        Try demo
                      </a>
                    </Button>
                  )}
                  <Button variant="outline" size="sm" onClick={() => onLearnMore(sys)}>
                    Learn more
                  </Button>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <p className="text-sm text-muted-foreground mb-4">Need something different? We build custom.</p>
          <Button variant="outline" asChild>
            <a href="/contact">Tell us your process</a>
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
