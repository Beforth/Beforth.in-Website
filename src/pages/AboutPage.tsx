import { motion } from 'framer-motion';
import { Button } from '../components/ui/button';
import { DoodleIcon } from '../components/ui/doodle-icon';
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

function AboutPage() {
  return (
    <ThemeProvider attribute="class" defaultTheme="light" enableSystem>
      <div className="min-h-screen bg-background">
        {/* Header */}
        <header className="bg-background/95 backdrop-blur-md border-b border-border sticky top-0 z-40">
          <div className="max-w-6xl mx-auto px-4 sm:px-6">
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
                  <Button size="sm">Get Started</Button>
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
              About <br />
              <span className="font-semibold text-teal-600">Beforth.</span>
            </motion.h1>
            
            <motion.p 
              className="text-lg sm:text-xl md:text-2xl font-light text-muted-foreground max-w-3xl mx-auto leading-relaxed px-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              We transform traditional business operations into structured, efficient digital systems. 
              Paper ledgers become dashboards. Manual entries become records. Confusing workflows become streamlined processes. 
              We work across pharma, salons, wholesalers, and more—adaptable, process-focused, and built for the long term.
            </motion.p>
          </div>
        </section>

        {/* Mission & Vision Section */}
        <section className="py-20 md:py-24 bg-muted/30">
          <div className="max-w-5xl mx-auto px-4 sm:px-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 text-left max-w-4xl mx-auto">
              {[
                {
                  title: "Our Mission",
                  description: "To take businesses still working on paper, registers, and manual calculations—and convert those processes into structured digital systems that reduce error, increase visibility, and create control.",
                  icon: "interface/target.svg",
                  iconColor: "text-teal-600"
                },
                {
                  title: "Our Vision",
                  description: "To be the bridge between traditional business thinking and modern digital execution—practical, process-focused, and reliable. Helping businesses scale with clarity and control.",
                  icon: "interface/bulb.svg",
                  iconColor: "text-teal-600"
                }
              ].map((item, index) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  viewport={{ once: true }}
                  className="p-6 rounded-2xl bg-card border border-border"
                >
                  <div className="flex items-center mb-4 md:mb-6">
                    <DoodleIcon name={item.icon} className={`w-10 h-10 md:w-12 md:h-12 ${item.iconColor} mr-4`} />
                    <h4 className="text-2xl md:text-3xl font-semibold text-teal-600">
                      {item.title}
                    </h4>
                  </div>
                  <p className="text-base md:text-lg font-light text-muted-foreground leading-relaxed">
                    {item.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="py-20 md:py-24 bg-background">
          <div className="max-w-6xl mx-auto px-4 sm:px-6">
            <motion.div 
              className="text-center mb-16 md:mb-20"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl sm:text-5xl md:text-6xl font-light text-foreground mb-6 md:mb-8">
                Our <span className="font-semibold text-teal-600">Values</span>
              </h2>
              <p className="text-lg sm:text-xl font-light text-muted-foreground leading-relaxed">
                Practical, process-focused, and built for the long term
              </p>
            </motion.div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  title: "Process-Focused",
                  description: "We understand workflows, not just code. We adapt systems to your business logic—pharma, salons, wholesale, and more.",
                  icon: <DoodleIcon name="finance/trend-up.svg" className="w-8 h-8 text-teal-500" />
                },
                {
                  title: "Clarity & Control",
                  description: "We're not selling software—we're selling clarity in operations, control over inventory, and accurate data you can trust.",
                  icon: <DoodleIcon name="interface/shield.svg" className="w-8 h-8 text-teal-500" />
                },
                {
                  title: "Adaptable",
                  description: "We customize instead of forcing a fixed product. Your systems become the backbone of your operations.",
                  icon: <DoodleIcon name="interface/trophy.svg" className="w-8 h-8 text-teal-500" />
                },
                {
                  title: "Bridge the Gap",
                  description: "Many business owners understand their process but not technology. We sit between traditional thinking and modern execution.",
                  icon: <DoodleIcon name="interface/user.svg" className="w-8 h-8 text-teal-500" />
                },
                {
                  title: "Reliable",
                  description: "Practical, not flashy. Process-focused, not trend-focused. We build systems that last.",
                  icon: <DoodleIcon name="interface/globe.svg" className="w-8 h-8 text-teal-500" />
                },
                {
                  title: "Long-Term",
                  description: "Scalable and future-proof. We're in it for the long run with training and support that keeps you running.",
                  icon: <DoodleIcon name="interface/headphone.svg" className="w-8 h-8 text-teal-500" />
                }
              ].map((value, index) => (
                <motion.div
                  key={value.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="p-6 rounded-xl bg-card border border-border hover:shadow-lg transition-shadow"
                >
                  <div className="flex items-center mb-4">
                    {value.icon}
                    <h3 className="text-xl font-semibold text-foreground ml-3">{value.title}</h3>
                  </div>
                  <p className="text-muted-foreground leading-relaxed">{value.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-16 md:py-20 bg-muted/30">
          <div className="max-w-6xl mx-auto px-4 sm:px-6">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 md:gap-16 text-center">
              {[
                { number: "50+", label: "Projects Completed", color: "text-teal-600" },
                { number: "95%", label: "Client Satisfaction", color: "text-green-600" },
                { number: "3+", label: "Years Experience", color: "text-teal-600" }
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
              Ready to work with us?
            </motion.h2>
            
            <motion.p 
              className="text-lg sm:text-xl font-light text-primary-foreground/80 mb-8 md:mb-12 leading-relaxed max-w-3xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              Let's discuss how we can help transform your business with our HRMS and CRM solutions.
            </motion.p>
            
            <motion.div 
              className="flex flex-col sm:flex-row gap-4 justify-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <Button variant="secondary" size="lg" className="w-full sm:w-auto">
                <a href="/contact" className="flex items-center">
                  Get in Touch
                </a>
              </Button>
              <Button variant="secondary" size="lg" className="w-full sm:w-auto">
                <a href="/services" className="flex items-center">
                  View Our Services
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

export default AboutPage;
