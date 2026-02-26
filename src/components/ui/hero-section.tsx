import { motion } from 'framer-motion';
import { ArrowRight, ChevronDown } from 'lucide-react';
import { Button } from './button';
import { HeroTransformation } from './hero-transformation';
import { StaticDashboardPreview } from './static-dashboard-preview';
import HeroTransformationBg from '../bg/HeroTransformationBg';

export function HeroSection() {
  return (
    <section className="relative min-h-0 md:min-h-[180vh] py-12 md:py-20 bg-stone-50">
      <HeroTransformationBg />
      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero: Clean acme.ai-style layout */}
        <div className="relative text-center mb-8 md:mb-16">
          <div className="relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="mb-6 flex flex-col items-center gap-2"
            >
              <div className="w-12 h-px bg-stone-300" aria-hidden />
              <span className="text-[13px] text-stone-500 tracking-[0.02em] leading-relaxed max-w-md text-center">
                Transform paper-based business into digital systems
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-foreground leading-[1.1] tracking-tight"
            >
              Excel chaos.{' '}
              <span className="text-teal-600">One system.</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="mt-6 text-lg sm:text-xl text-muted-foreground leading-relaxed max-w-2xl mx-auto"
            >
              No matter what problem you have, we build systems that fit your process. Clarity. Control. Accuracy.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="mt-8 flex flex-col items-center gap-3"
            >
              <Button
                size="lg"
                className="w-full sm:w-auto text-base px-8 py-6 shadow-lg hover:shadow-xl transition-shadow"
                asChild
              >
                <a href="/contact" className="inline-flex items-center gap-2">
                  Get Your Free Assessment
                  <ArrowRight className="w-4 h-4" />
                </a>
              </Button>
              <p className="text-sm text-muted-foreground">Free assessment.</p>
              <motion.button
                type="button"
                onClick={() => document.getElementById('change-your-system')?.scrollIntoView({ behavior: 'smooth' })}
                className="hidden md:flex mt-2 w-12 h-12 rounded-full border-2 border-teal-500/50 bg-teal-500/10 items-center justify-center text-teal-600 hover:bg-teal-500/20 hover:border-teal-500 transition-colors"
                animate={{ y: [0, 6, 0] }}
                transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
                aria-label="Scroll to change your system"
              >
                <ChevronDown className="w-6 h-6" />
              </motion.button>
            </motion.div>
          </div>
        </div>

        {/* Mobile: static dashboard only, no animation */}
        <div className="md:hidden mt-8 px-2">
          <StaticDashboardPreview />
        </div>

        {/* Desktop: Excel → Dashboard scroll animation */}
        <div id="change-your-system" className="hidden md:block relative scroll-mt-8">
          <HeroTransformation />
        </div>
      </div>
    </section>
  );
}
