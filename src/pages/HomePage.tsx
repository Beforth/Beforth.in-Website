import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { DoodleIcon } from '../components/ui/doodle-icon';
import { Button } from '../components/ui/button';
import { MobileMenu } from '../components/ui/mobile-menu';
import { ThemeProvider } from '../components/ui/theme-provider';
import { ServiceModal } from '../components/ui/service-modal';
import { Logo } from '../components/ui/logo';
import { NavLink } from '../components/ui/nav-link';
import { Footer } from '../components/ui/footer';
import { HeroSection } from '../components/ui/hero-section';
import { PageTransition } from '../components/ui/page-transition';
import { TrustedBy } from '../components/home-sections/trusted-by';
import { WhatYouGet } from '../components/home-sections/what-you-get';
import { ValueDifference } from '../components/home-sections/value-difference';
import { YourSystems } from '../components/home-sections/your-systems';
import { HowItWorks } from '../components/home-sections/how-it-works';
import { IndustriesWeServe } from '../components/home-sections/industries-we-serve';
import { FinalCta } from '../components/home-sections/final-cta';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const navItems = [
  { name: "Home", link: "/" },
  { name: "Services", link: "/services" },
  { name: "About", link: "/about" },
  { name: "Team", link: "/team" },
  { name: "Careers", link: "/careers" },
  { name: "Contact", link: "/contact" },
];

const services = [
  {
    id: 'hrms-implementation',
    title: "HRMS Implementation",
    description: "Comprehensive HRMS solution with extensive HR features for complete workforce management, like our implementation for Aureole Group.",
    demoUrl: "https://hrms.aureolegroup.com/login",
    icon: <DoodleIcon name="interface/user.svg" className="h-8 w-8" />,
    className: "md:col-span-2",
    header: (
      <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-stone-100 dark:bg-stone-900/50 relative overflow-hidden">
        <div className="absolute inset-0 bg-teal-500/10"></div>
        <div className="absolute top-4 right-4 w-16 h-16 bg-teal-500/20 rounded-full blur-xl"></div>
        <div className="absolute bottom-2 left-4 w-12 h-12 bg-teal-500/20 rounded-full blur-lg"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <DoodleIcon name="interface/user.svg" className="w-8 h-8 text-teal-500/40" />
        </div>
        <div className="absolute inset-0 bg-teal-500/5"></div>
      </div>
    ),
    features: ["Employee Records Management", "Attendance & Leave Tracking", "Payroll Processing", "Performance Management", "Recruitment & Onboarding", "Expense Management"],
    benefits: ["Streamline HR operations", "Automated compliance", "Real-time insights"],
    process: ["Requirements Analysis", "Custom Configuration", "Data Migration", "User Training", "Go-Live Support"]
  },
  {
    id: '4form-crm',
    title: "4form CRM",
    description: "Simple and effective CRM with mass email capabilities and built-in form/data collection support.",
    icon: <DoodleIcon name="interface/analytics.svg" className="h-8 w-8" />,
    demoUrl: "https://4form.beforth.in/",
    header: (
      <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-stone-100 dark:bg-stone-900/50 relative overflow-hidden">
        <div className="absolute inset-0 bg-teal-500/10"></div>
        <div className="absolute top-3 right-6 w-20 h-20 bg-teal-500/20 rounded-full blur-xl"></div>
        <div className="absolute bottom-4 left-2 w-14 h-14 bg-teal-500/20 rounded-full blur-lg"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <DoodleIcon name="interface/analytics.svg" className="w-8 h-8 text-teal-500/40" />
        </div>
      </div>
    ),
    features: ["Lead & Contact Management", "Mass Email Campaigns", "Built-in Form Builder", "Data Collection & Analytics", "Customer Pipeline Tracking", "Email Integration"],
    benefits: ["Simple & intuitive interface", "Powerful mass email features", "Easy data collection"],
    process: ["Account Setup", "Form Configuration", "Email Template Design", "Team Onboarding", "Campaign Launch"]
  }
];

function HomePage() {
  const [selectedService, setSelectedService] = useState<typeof services[0] | null>(null);

  const handleServiceClick = (service: typeof services[0]) => {
    setSelectedService(service);
  };

  const closeModal = () => {
    setSelectedService(null);
  };

  useEffect(() => {
    (function(c, l, a, r, i) {
      let t: HTMLScriptElement;
      let y: HTMLElement;
      (c as any)[a] = (c as any)[a] || function () {
        ((c as any)[a].q = (c as any)[a].q || []).push(arguments);
      };
      t = l.createElement(r) as HTMLScriptElement;
      t.async = true;
      t.src = "https://www.clarity.ms/tag/" + i;
      y = l.getElementsByTagName(r)[0] as HTMLElement;
      y.parentNode!.insertBefore(t, y);
    })(window, document, "clarity", "script", "sdaak99ru3");
  }, []);

  return (
    <ThemeProvider attribute="class" defaultTheme="light" enableSystem>
      <ToastContainer position="top-right" autoClose={3000} />
      <PageTransition>
      <div className="min-h-screen bg-background">
        {/* Header */}
        <header className="bg-background/95 backdrop-blur-md border-b border-border sticky top-0 z-40">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center h-16">
              <motion.div className="flex items-center" initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.5 }}>
                <Logo />
                <span className="text-xl font-semibold text-foreground">Beforth</span>
              </motion.div>
              
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
              
              <div className="hidden md:flex items-center space-x-4">
                <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.5 }}>
                  <Button size="sm" asChild>
                    <a href="/contact">Get Started</a>
                  </Button>
                </motion.div>
              </div>

              <MobileMenu navItems={navItems} />
            </div>
          </div>
        </header>

        {/* Hero Section - Psychology-based design */}
        <HeroSection />

        <TrustedBy />

        <WhatYouGet />

        <ValueDifference />

        <YourSystems services={services} onLearnMore={handleServiceClick} />

        <HowItWorks />

        <IndustriesWeServe />

        <FinalCta />

        <Footer />

        {/* Service Modal */}
        {selectedService && (
          <ServiceModal isOpen={!!selectedService} onClose={closeModal} service={selectedService} />
        )}
      </div>
      </PageTransition>
    </ThemeProvider>
  );
}

export default HomePage;