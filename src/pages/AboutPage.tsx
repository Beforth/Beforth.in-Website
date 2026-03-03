import { motion } from 'framer-motion';
import { Button } from '../components/ui/button';
import { MobileMenu } from '../components/ui/mobile-menu';
import { AboutHeroComposition } from '../components/about/AboutHeroComposition';
import { FourPrinciples } from '../components/about/FourPrinciples';
import { AboutStorySections } from '../components/about/AboutStorySections';
import { ThemeProvider } from '../components/ui/theme-provider';
import { Logo } from '../components/ui/logo';
import { NavLink } from '../components/ui/nav-link';
import { Footer } from '../components/ui/footer';

const navItems = [
  { name: "Home", link: "/" },
  { name: "Services", link: "/services" },
  { name: "About", link: "/about" },
  { name: "Team", link: "/team" },
  // { name: "Blog", link: "/blog" },
  { name: "Careers", link: "/careers" },
  { name: "Contact", link: "/contact" },
];

function AboutPage() {
  return (
    <ThemeProvider attribute="class" defaultTheme="light" enableSystem>
      <div className="min-h-screen bg-background">
        {/* Header */}
        <header className="bg-background/95 backdrop-blur-md border-b border-border sticky top-0 z-40">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center h-16">
              <motion.div 
                className="flex items-center"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
              >
                <Logo />
                <span className="text-xl font-semibold text-foreground">Beforth</span>
              </motion.div>
              
              {/* Desktop Navigation */}
              <nav className="hidden md:flex space-x-8">
                {navItems.map((item, index) => (
                  <NavLink 
                    key={item.name} 
                    to={item.link}
                    initial={{ opacity: 0, y: -10 }} 
                    animate={{ opacity: 1, y: 0 }} 
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                  >
                    {item.name}
                  </NavLink>
                ))}
              </nav>
              
              {/* Desktop Actions */}
              <div className="hidden md:flex items-center space-x-4">
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5 }}
                >
                  <Button size="sm" asChild>
                    <a href="/contact">Get Started</a>
                  </Button>
                </motion.div>
              </div>

              {/* Mobile Menu */}
              <MobileMenu navItems={navItems} />
            </div>
          </div>
        </header>

        {/* Hero Section - text + composition like Home/Services */}
        <section className="relative py-16 md:py-24 bg-stone-50 overflow-hidden">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
              {/* Text side - left */}
              <motion.div
                initial={{ opacity: 0, x: -24 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="order-1 lg:order-1"
              >
                <div className="w-12 h-px bg-stone-300 mb-4" aria-hidden />
                <p className="text-xs font-semibold text-teal-600 uppercase tracking-[0.2em] mb-4">About us</p>
                <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-foreground leading-[1.05] tracking-tight mb-5">
                  About <span className="text-teal-600">Beforth.</span>
                </h1>
                <p className="text-muted-foreground leading-relaxed max-w-md mb-6">
                  We transform traditional business operations into structured, efficient digital systems. 
                  Paper ledgers become dashboards. Manual entries become records.
                </p>
                <div className="flex flex-wrap gap-x-4 gap-y-1 text-sm font-semibold uppercase tracking-widest text-stone-400">
                  <span>Process-focused</span>
                  <span className="hidden sm:inline">•</span>
                  <span>Multi-industry</span>
                  <span className="hidden sm:inline">•</span>
                  <span>Long-term</span>
                </div>
              </motion.div>

              {/* Composition - right: Paper → Digital */}
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7 }}
                className="order-2 lg:order-2"
              >
                <AboutHeroComposition />
              </motion.div>
            </div>
          </div>
        </section>

        <AboutStorySections />

        <FourPrinciples />

        {/* CTA Section - distinctive About-style with demos + trust badges */}
        <section className="relative py-20 md:py-28 bg-teal-600 text-white overflow-hidden">
          {/* Dynamic background */}
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute top-0 left-1/4 w-96 h-96 bg-teal-500/30 rounded-full blur-3xl" />
            <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-teal-400/20 rounded-full blur-3xl" />
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,rgba(0,0,0,0.1)_100%)]" />
          </div>

          <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 text-center">
            {/* Trust badges - like Home FinalCta but About-flavored */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="flex flex-wrap justify-center gap-3 mb-10"
            >
              {['Live demos', '24/7 Support', '100% Custom'].map((badge, i) => (
                <motion.span
                  key={badge}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-sm font-medium"
                >
                  {badge}
                </motion.span>
              ))}
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4 leading-tight"
            >
              Ready to transform<br />
              <span className="text-white/95">your business?</span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-lg text-teal-100 mb-10 max-w-2xl mx-auto"
            >
              Try our live demos or tell us about your business. We'll build what you need.
            </motion.p>

            {/* Action buttons - Try demos like Home + Contact */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex flex-col sm:flex-row gap-4 justify-center flex-wrap"
            >
              <Button size="lg" variant="secondary" className="w-full sm:w-auto bg-white text-stone-900 hover:bg-stone-100" asChild>
                <a href="https://hrms.aureolegroup.com/login" target="_blank" rel="noopener noreferrer">
                  Try HRMS Demo
                </a>
              </Button>
              <Button size="lg" variant="secondary" className="w-full sm:w-auto bg-white text-stone-900 hover:bg-stone-100" asChild>
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
            </motion.div>
          </div>
        </section>

        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default AboutPage;
