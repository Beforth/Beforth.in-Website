import { motion } from 'framer-motion';
import { Button } from '../ui/button';

export function FinalCta() {
  return (
    <section className="py-20 md:py-28 bg-teal-600">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
            Ready to digitize?
          </h2>
          <p className="text-lg text-teal-100 mb-10">
            Try our demos or tell us about your business. We'll build what you need.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" className="w-full sm:w-auto" asChild>
              <a href="https://hrms.aureolegroup.com/login" target="_blank" rel="noopener noreferrer">
                Try HRMS
              </a>
            </Button>
            <Button size="lg" variant="secondary" className="w-full sm:w-auto" asChild>
              <a href="https://4form.beforth.in/" target="_blank" rel="noopener noreferrer">
                Try 4form CRM
              </a>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="w-full sm:w-auto bg-transparent border-white text-white hover:bg-white hover:text-stone-900"
              asChild
            >
              <a href="/contact">Contact us</a>
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
