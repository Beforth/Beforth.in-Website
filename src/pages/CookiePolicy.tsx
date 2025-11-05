import React from 'react';
import { motion } from 'framer-motion';
import { Cookie, Settings, Eye, Shield, Database, Clock } from 'lucide-react';
import { Card } from '../components/ui/card';
import { MobileMenu } from '../components/ui/mobile-menu';
import { ThemeProvider } from '../components/ui/theme-provider';
import { Logo } from '../components/ui/logo';
import { NavLink } from '../components/ui/nav-link';
import { Footer } from '../components/ui/footer';

const CookiePolicy: React.FC = () => {
  const navItems = [
    { name: "Home", link: "/" },
    { name: "Services", link: "/services" },
    { name: "About", link: "/about" },
    { name: "Team", link: "/team" },
    { name: "Careers", link: "/careers" },
    { name: "Contact", link: "/contact" },
  ];

  return (
    <ThemeProvider>
      <div className="min-h-screen bg-background">
        {/* Header */}
        <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b">
          <div className="container mx-auto px-4">
            <div className="flex h-16 items-center justify-between">
              {/* Logo */}
              <motion.div 
                initial={{ opacity: 0, x: -20 }} 
                animate={{ opacity: 1, x: 0 }} 
                transition={{ duration: 0.5 }}
                className="flex items-center space-x-2"
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
                  <a href="/contact" className="px-4 py-2 bg-primary text-primary-foreground rounded-md text-sm font-medium hover:bg-primary/90 transition-colors">
                    Get Started
                  </a>
                </motion.div>
              </div>

              {/* Mobile Menu */}
              <MobileMenu navItems={navItems} />
            </div>
          </div>
        </header>

        {/* Hero Section */}
        <section className="pt-24 pb-16 px-4">
          <div className="container mx-auto text-center max-w-4xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="flex justify-center mb-6">
                <div className="p-3 rounded-full bg-primary/10">
                  <Cookie className="h-8 w-8 text-primary" />
                </div>
              </div>
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                Cookie Policy
              </h1>
              <p className="text-xl text-muted-foreground mb-8">
                Learn about how we use cookies and similar technologies to enhance your experience on our website.
              </p>
              <p className="text-sm text-muted-foreground">
                Last updated: {new Date().toLocaleDateString()}
              </p>
            </motion.div>
          </div>
        </section>

        {/* Content */}
        <section className="py-12 px-4">
          <div className="container mx-auto max-w-4xl">
            <div className="prose prose-lg max-w-none">
              
              {/* What Are Cookies */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="mb-12"
              >
                <Card className="p-8">
                  <h2 className="text-2xl font-bold mb-4 flex items-center">
                    <Cookie className="h-6 w-6 mr-3 text-primary" />
                    What Are Cookies?
                  </h2>
                  <p className="text-muted-foreground mb-4">
                    Cookies are small text files that are stored on your device when you visit our website. 
                    They help us provide you with a better experience by remembering your preferences and 
                    understanding how you use our site.
                  </p>
                  <div className="bg-muted p-4 rounded-lg">
                    <p className="text-sm font-medium mb-2">Quick Fact:</p>
                    <p className="text-sm text-muted-foreground">
                      Cookies cannot access your personal files or harm your device. They only contain 
                      information that you have provided to us or that we have gathered from your use of our site.
                    </p>
                  </div>
                </Card>
              </motion.div>

              {/* Types of Cookies */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                viewport={{ once: true }}
                className="mb-12"
              >
                <Card className="p-8">
                  <h2 className="text-2xl font-bold mb-4 flex items-center">
                    <Settings className="h-6 w-6 mr-3 text-primary" />
                    Types of Cookies We Use
                  </h2>
                  <div className="space-y-6">
                    <div>
                      <h3 className="text-lg font-semibold mb-3 flex items-center">
                        <Shield className="h-5 w-5 mr-2 text-green-500" />
                        Essential Cookies
                      </h3>
                      <p className="text-muted-foreground mb-2">
                        These cookies are necessary for the website to function properly. They enable basic 
                        functions like page navigation, access to secure areas, and remembering your preferences.
                      </p>
                      <div className="bg-green-50 dark:bg-green-950/20 p-3 rounded-lg">
                        <p className="text-sm text-green-700 dark:text-green-300">
                          <strong>Examples:</strong> Login status, shopping cart contents, form data, security preferences
                        </p>
                      </div>
                    </div>

                    <div>
                      <h3 className="text-lg font-semibold mb-3 flex items-center">
                        <Eye className="h-5 w-5 mr-2 text-blue-500" />
                        Analytics Cookies
                      </h3>
                      <p className="text-muted-foreground mb-2">
                        These cookies help us understand how visitors interact with our website by collecting 
                        and reporting information anonymously.
                      </p>
                      <div className="bg-blue-50 dark:bg-blue-950/20 p-3 rounded-lg">
                        <p className="text-sm text-blue-700 dark:text-blue-300">
                          <strong>Examples:</strong> Google Analytics, page views, time spent on site, popular content
                        </p>
                      </div>
                    </div>

                    <div>
                      <h3 className="text-lg font-semibold mb-3 flex items-center">
                        <Database className="h-5 w-5 mr-2 text-purple-500" />
                        Functional Cookies
                      </h3>
                      <p className="text-muted-foreground mb-2">
                        These cookies enable enhanced functionality and personalization, such as remembering 
                        your language preference or region.
                      </p>
                      <div className="bg-purple-50 dark:bg-purple-950/20 p-3 rounded-lg">
                        <p className="text-sm text-purple-700 dark:text-purple-300">
                          <strong>Examples:</strong> Language settings, theme preferences, location data
                        </p>
                      </div>
                    </div>

                    <div>
                      <h3 className="text-lg font-semibold mb-3 flex items-center">
                        <Clock className="h-5 w-5 mr-2 text-orange-500" />
                        Performance Cookies
                      </h3>
                      <p className="text-muted-foreground mb-2">
                        These cookies collect information about how you use our website, helping us improve 
                        performance and user experience.
                      </p>
                      <div className="bg-orange-50 dark:bg-orange-950/20 p-3 rounded-lg">
                        <p className="text-sm text-orange-700 dark:text-orange-300">
                          <strong>Examples:</strong> Load times, error tracking, user journey analysis
                        </p>
                      </div>
                    </div>
                  </div>
                </Card>
              </motion.div>

              {/* Cookie Duration */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
                className="mb-12"
              >
                <Card className="p-8">
                  <h2 className="text-2xl font-bold mb-4 flex items-center">
                    <Clock className="h-6 w-6 mr-3 text-primary" />
                    Cookie Duration
                  </h2>
                  <div className="space-y-4">
                    <div>
                      <h3 className="text-lg font-semibold mb-2">Session Cookies</h3>
                      <p className="text-muted-foreground">
                        These cookies are temporary and are deleted when you close your browser. They are 
                        essential for the website to function during your visit.
                      </p>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold mb-2">Persistent Cookies</h3>
                      <p className="text-muted-foreground">
                        These cookies remain on your device for a set period or until you delete them. 
                        They help us recognize you when you return to our website.
                      </p>
                    </div>
                    <div className="bg-muted p-4 rounded-lg">
                      <h4 className="font-semibold mb-2">Typical Cookie Lifespans:</h4>
                      <ul className="text-sm text-muted-foreground space-y-1">
                        <li>• Essential cookies: Session duration</li>
                        <li>• Analytics cookies: 2 years</li>
                        <li>• Functional cookies: 1 year</li>
                        <li>• Performance cookies: 30 days</li>
                      </ul>
                    </div>
                  </div>
                </Card>
              </motion.div>

              {/* Third-Party Cookies */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                viewport={{ once: true }}
                className="mb-12"
              >
                <Card className="p-8">
                  <h2 className="text-2xl font-bold mb-4">Third-Party Cookies</h2>
                  <p className="text-muted-foreground mb-4">
                    We may use third-party services that set their own cookies. These services help us 
                    provide better functionality and analyze our website performance.
                  </p>
                  <div className="space-y-4">
                    <div>
                      <h3 className="text-lg font-semibold mb-2">Google Analytics</h3>
                      <p className="text-muted-foreground">
                        We use Google Analytics to understand how visitors use our website. Google Analytics 
                        uses cookies to collect this information anonymously.
                      </p>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold mb-2">Social Media</h3>
                      <p className="text-muted-foreground">
                        Our website may include social media features that set cookies. These are controlled 
                        by the respective social media platforms.
                      </p>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold mb-2">Marketing Tools</h3>
                      <p className="text-muted-foreground">
                        We may use marketing and advertising tools that set cookies to help us deliver 
                        relevant content and measure campaign effectiveness.
                      </p>
                    </div>
                  </div>
                </Card>
              </motion.div>

              {/* Managing Cookies */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                viewport={{ once: true }}
                className="mb-12"
              >
                <Card className="p-8">
                  <h2 className="text-2xl font-bold mb-4">Managing Your Cookie Preferences</h2>
                  <div className="space-y-4">
                    <div>
                      <h3 className="text-lg font-semibold mb-2">Browser Settings</h3>
                      <p className="text-muted-foreground mb-2">
                        You can control cookies through your browser settings. Most browsers allow you to:
                      </p>
                      <ul className="text-muted-foreground space-y-1 ml-4">
                        <li>• View and delete cookies</li>
                        <li>• Block all cookies</li>
                        <li>• Block third-party cookies</li>
                        <li>• Set preferences for specific websites</li>
                      </ul>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold mb-2">Cookie Consent</h3>
                      <p className="text-muted-foreground">
                        When you first visit our website, you'll see a cookie consent banner. You can choose 
                        which types of cookies to accept or reject.
                      </p>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold mb-2">Opt-Out Options</h3>
                      <p className="text-muted-foreground">
                        You can opt out of certain cookies by visiting the respective third-party websites 
                        or using browser extensions designed for this purpose.
                      </p>
                    </div>
                  </div>
                </Card>
              </motion.div>

              {/* Impact of Disabling Cookies */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                viewport={{ once: true }}
                className="mb-12"
              >
                <Card className="p-8">
                  <h2 className="text-2xl font-bold mb-4">Impact of Disabling Cookies</h2>
                  <div className="space-y-4">
                    <div>
                      <h3 className="text-lg font-semibold mb-2">Essential Cookies</h3>
                      <p className="text-muted-foreground">
                        If you disable essential cookies, some parts of our website may not function properly. 
                        You may not be able to access certain features or services.
                      </p>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold mb-2">Non-Essential Cookies</h3>
                      <p className="text-muted-foreground">
                        Disabling non-essential cookies won't affect the basic functionality of our website, 
                        but you may miss out on personalized features and we won't be able to improve your experience.
                      </p>
                    </div>
                    <div className="bg-yellow-50 dark:bg-yellow-950/20 p-4 rounded-lg">
                      <p className="text-sm text-yellow-700 dark:text-yellow-300">
                        <strong>Note:</strong> Some features of our website require cookies to function properly. 
                        Disabling cookies may limit your ability to use certain services.
                      </p>
                    </div>
                  </div>
                </Card>
              </motion.div>

              {/* Updates to This Policy */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                viewport={{ once: true }}
                className="mb-12"
              >
                <Card className="p-8">
                  <h2 className="text-2xl font-bold mb-4">Updates to This Policy</h2>
                  <p className="text-muted-foreground mb-4">
                    We may update this Cookie Policy from time to time to reflect changes in our practices 
                    or for other operational, legal, or regulatory reasons.
                  </p>
                  <div className="space-y-2">
                    <p className="text-muted-foreground">
                      • We will notify you of any material changes by posting the updated policy on our website
                    </p>
                    <p className="text-muted-foreground">
                      • The "Last updated" date at the top of this policy will be revised
                    </p>
                    <p className="text-muted-foreground">
                      • We encourage you to review this policy periodically
                    </p>
                  </div>
                </Card>
              </motion.div>

              {/* Contact Information */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.7 }}
                viewport={{ once: true }}
              >
                <Card className="p-8">
                  <h2 className="text-2xl font-bold mb-4">Contact Us</h2>
                  <p className="text-muted-foreground mb-4">
                    If you have any questions about our use of cookies or this Cookie Policy, please contact us:
                  </p>
                  <div className="space-y-2">
                    <p><strong>General Contact:</strong> support@beforth.in</p>
                    <p><strong>Address:</strong> Nashik, Maharashtra, India</p>
                    <p><strong>Phone:</strong> +919766183834</p>
                  </div>
                </Card>
              </motion.div>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </ThemeProvider>
  );
};

export default CookiePolicy;
