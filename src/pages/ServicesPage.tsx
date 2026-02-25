import { motion } from 'framer-motion';
import { Play } from 'lucide-react';
import { Button } from '../components/ui/button';
import { SolutionSection } from '../components/home-sections/solution-section';
import { MobileMenu } from '../components/ui/mobile-menu';
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

function ServicesPage() {
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

        {/* Hero Section */}
        <section className="relative pt-20 pb-24 md:pt-32 md:pb-40 bg-stone-50 overflow-hidden">
          {/* Background Decorative Elements */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div className="absolute top-20 right-10 w-72 h-72 bg-teal-500/10 rounded-full blur-3xl"></div>
            <div className="absolute bottom-20 left-10 w-96 h-96 bg-teal-500/10 rounded-full blur-3xl"></div>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-teal-500/5 rounded-full blur-3xl"></div>
          </div>

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
            <motion.h1 
              className="text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-light text-foreground leading-none tracking-tight mb-8 md:mb-10"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              Our <br />
              <span className="font-semibold text-teal-600">services.</span>
            </motion.h1>
            
            <motion.p 
              className="text-lg sm:text-xl md:text-2xl font-light text-muted-foreground max-w-3xl mx-auto mb-10 md:mb-14 leading-relaxed px-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              ERP and custom software—HRMS, CRM, integrations—adapted to your industry. We turn paper and manual processes into structured digital systems.
            </motion.p>
            
            <motion.div 
              className="flex flex-col sm:flex-row gap-4 justify-center px-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <Button size="lg" className="w-full sm:w-auto shadow-lg hover:shadow-xl" asChild>
                <a href="https://hrms.aureolegroup.com/login" target="_blank" rel="noopener noreferrer">Try HRMS Demo</a>
              </Button>
              <Button variant="outline" size="lg" className="w-full sm:w-auto" asChild>
                <a href="https://4form.beforth.in/" target="_blank" rel="noopener noreferrer">
                  <Play className="w-4 h-4 mr-2" />
                  Try 4form CRM
                </a>
              </Button>
            </motion.div>
          </div>
        </section>

        {/* Solution Section - Bento grid with 4 cards, dashboard on hover */}
        <SolutionSection />

        {/* Why Choose Us Section */}
        <section className="py-20 md:py-24 bg-background">
          <div className="max-w-6xl mx-auto px-4 sm:px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
              <motion.div
                initial={{ opacity: 0, x: -40 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <h2 className="text-4xl sm:text-5xl md:text-6xl font-light text-foreground mb-8 md:mb-12 leading-tight">
                  Why choose<br />
                  <span className="font-semibold text-teal-600">Beforth?</span>
                </h2>
                <div className="space-y-8 md:space-y-10">
                  {[
                    {
                      title: "Paper to Digital",
                      description: "We take businesses running on paper, registers, and manual calculations—and turn them into structured systems. Try our live demos to see what's possible.",
                      color: "border-l-teal-500"
                    },
                    {
                      title: "Industry-Adaptable",
                      description: "Pharma, salons, wholesalers, gold shops, garment businesses. We understand workflows across industries and customize to your process.",
                      color: "border-l-teal-500"
                    },
                    {
                      title: "Clarity & Control",
                      description: "We're not just selling software—we're selling clarity in operations, control over inventory, and accurate data. Your systems become the backbone.",
                      color: "border-l-teal-500"
                    },
                    {
                      title: "Process-Focused Support",
                      description: "We bridge traditional business thinking and modern execution. Support from people who understand both your process and the technology.",
                      color: "border-l-teal-500"
                    }
                  ].map((benefit, index) => (
                    <motion.div
                      key={benefit.title}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: index * 0.1 }}
                      viewport={{ once: true }}
                      className={`pl-6 border-l-4 ${benefit.color}`}
                    >
                      <h3 className="text-xl md:text-2xl font-semibold text-foreground mb-3 md:mb-4">{benefit.title}</h3>
                      <p className="text-base md:text-lg font-light text-muted-foreground leading-relaxed">{benefit.description}</p>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <img 
                  src="https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=800" 
                  alt="Team collaborating on ERP implementation"
                  className="w-full rounded-2xl shadow-2xl"
                />
              </motion.div>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-16 md:py-20 bg-muted/30">
          <div className="max-w-6xl mx-auto px-4 sm:px-6">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 md:gap-16 text-center">
              {[
                { number: "2", label: "Live Products", color: "text-teal-600" },
                { number: "24/7", label: "Support Available", color: "text-teal-600" },
                { number: "2025", label: "Founded", color: "text-teal-600" }
              ].map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className={`text-5xl md:text-7xl font-extralight mb-3 ${stat.color}`}>{stat.number}</div>
                  <div className="text-base md:text-lg font-medium text-muted-foreground">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 md:py-24 bg-primary text-primary-foreground">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 text-center">
            <motion.h2 
              className="text-4xl sm:text-5xl md:text-6xl font-light mb-6 md:mb-8 leading-tight"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              Ready to transform<br />
              <span className="font-semibold">your business?</span>
            </motion.h2>
            
            <motion.p 
              className="text-lg sm:text-xl font-light text-primary-foreground/80 mb-8 md:mb-12 leading-relaxed max-w-3xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              Schedule a free consultation to discuss how our HRMS and CRM 
              solutions can meet your specific business requirements.
            </motion.p>
            
            <motion.div 
              className="flex flex-col sm:flex-row gap-4 justify-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <Button variant="secondary" size="lg" className="w-full sm:w-auto">
                Schedule Free Consultation
              </Button>
              <Button variant="secondary" size="lg" className="w-full sm:w-auto">
                <a href="/contact" className="flex items-center">
                  Contact Us
                </a>
              </Button>
            </motion.div>
          </div>
        </section>

        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default ServicesPage;
