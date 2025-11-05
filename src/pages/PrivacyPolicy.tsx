import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Eye, Lock, Database, UserCheck, FileText } from 'lucide-react';
import { Card } from '../components/ui/card';
import { MobileMenu } from '../components/ui/mobile-menu';
import { ThemeProvider } from '../components/ui/theme-provider';
import { Logo } from '../components/ui/logo';
import { NavLink } from '../components/ui/nav-link';
import { Footer } from '../components/ui/footer';

const PrivacyPolicy: React.FC = () => {
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
                  <Shield className="h-8 w-8 text-primary" />
                </div>
              </div>
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                Privacy Policy
              </h1>
              <p className="text-xl text-muted-foreground mb-8">
                Your privacy is important to us. This policy explains how we collect, use, and protect your information.
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
              
              {/* Introduction */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="mb-12"
              >
                <Card className="p-8">
                  <h2 className="text-2xl font-bold mb-4 flex items-center">
                    <Eye className="h-6 w-6 mr-3 text-primary" />
                    Information We Collect
                  </h2>
                  <div className="space-y-4">
                    <div>
                      <h3 className="text-lg font-semibold mb-2">Personal Information</h3>
                      <p className="text-muted-foreground">
                        We collect information you provide directly to us, such as when you create an account, 
                        contact us, or use our services. This may include your name, email address, phone number, 
                        and company information.
                      </p>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold mb-2">Usage Information</h3>
                      <p className="text-muted-foreground">
                        We automatically collect certain information about your use of our services, including 
                        your IP address, browser type, device information, and how you interact with our website.
                      </p>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold mb-2">Cookies and Tracking</h3>
                      <p className="text-muted-foreground">
                        We use cookies and similar technologies to enhance your experience, analyze usage patterns, 
                        and provide personalized content. You can control cookie settings through your browser.
                      </p>
                    </div>
                  </div>
                </Card>
              </motion.div>

              {/* How We Use Information */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                viewport={{ once: true }}
                className="mb-12"
              >
                <Card className="p-8">
                  <h2 className="text-2xl font-bold mb-4 flex items-center">
                    <Database className="h-6 w-6 mr-3 text-primary" />
                    How We Use Your Information
                  </h2>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h3 className="text-lg font-semibold mb-2">Service Delivery</h3>
                      <ul className="text-muted-foreground space-y-1">
                        <li>• Provide and maintain our services</li>
                        <li>• Process transactions and payments</li>
                        <li>• Send service-related communications</li>
                        <li>• Provide customer support</li>
                      </ul>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold mb-2">Improvement & Analytics</h3>
                      <ul className="text-muted-foreground space-y-1">
                        <li>• Analyze usage patterns and trends</li>
                        <li>• Improve our services and user experience</li>
                        <li>• Develop new features and products</li>
                        <li>• Conduct research and analytics</li>
                      </ul>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold mb-2">Communication</h3>
                      <ul className="text-muted-foreground space-y-1">
                        <li>• Send newsletters and updates</li>
                        <li>• Respond to your inquiries</li>
                        <li>• Send important service notifications</li>
                        <li>• Provide marketing communications (with consent)</li>
                      </ul>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold mb-2">Legal & Security</h3>
                      <ul className="text-muted-foreground space-y-1">
                        <li>• Comply with legal obligations</li>
                        <li>• Protect against fraud and abuse</li>
                        <li>• Enforce our terms of service</li>
                        <li>• Protect our rights and property</li>
                      </ul>
                    </div>
                  </div>
                </Card>
              </motion.div>

              {/* Data Protection */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
                className="mb-12"
              >
                <Card className="p-8">
                  <h2 className="text-2xl font-bold mb-4 flex items-center">
                    <Lock className="h-6 w-6 mr-3 text-primary" />
                    Data Protection & Security
                  </h2>
                  <div className="space-y-4">
                    <div>
                      <h3 className="text-lg font-semibold mb-2">Security Measures</h3>
                      <p className="text-muted-foreground">
                        We implement appropriate technical and organizational measures to protect your personal 
                        information against unauthorized access, alteration, disclosure, or destruction. This includes 
                        encryption, secure servers, and regular security audits.
                      </p>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold mb-2">Data Retention</h3>
                      <p className="text-muted-foreground">
                        We retain your personal information only for as long as necessary to fulfill the purposes 
                        outlined in this privacy policy, unless a longer retention period is required or permitted by law.
                      </p>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold mb-2">Third-Party Services</h3>
                      <p className="text-muted-foreground">
                        We may use third-party services to help us provide our services. These services are bound by 
                        their own privacy policies and we ensure they meet our security standards.
                      </p>
                    </div>
                  </div>
                </Card>
              </motion.div>

              {/* Your Rights */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                viewport={{ once: true }}
                className="mb-12"
              >
                <Card className="p-8">
                  <h2 className="text-2xl font-bold mb-4 flex items-center">
                    <UserCheck className="h-6 w-6 mr-3 text-primary" />
                    Your Rights
                  </h2>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h3 className="text-lg font-semibold mb-2">Access & Control</h3>
                      <ul className="text-muted-foreground space-y-1">
                        <li>• Access your personal information</li>
                        <li>• Update or correct your data</li>
                        <li>• Delete your account and data</li>
                        <li>• Export your data</li>
                      </ul>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold mb-2">Communication Preferences</h3>
                      <ul className="text-muted-foreground space-y-1">
                        <li>• Unsubscribe from marketing emails</li>
                        <li>• Manage notification preferences</li>
                        <li>• Control cookie settings</li>
                        <li>• Opt-out of data sharing</li>
                      </ul>
                    </div>
                  </div>
                  <div className="mt-6 p-4 bg-muted rounded-lg">
                    <p className="text-sm text-muted-foreground">
                      To exercise any of these rights, please contact us at{' '}
                      <a href="mailto:support@beforth.in" className="text-primary hover:underline">
                        support@beforth.in
                      </a>
                    </p>
                  </div>
                </Card>
              </motion.div>

              {/* Contact Information */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                viewport={{ once: true }}
                className="mb-12"
              >
                <Card className="p-8">
                  <h2 className="text-2xl font-bold mb-4 flex items-center">
                    <FileText className="h-6 w-6 mr-3 text-primary" />
                    Contact Us
                  </h2>
                  <p className="text-muted-foreground mb-4">
                    If you have any questions about this Privacy Policy or our data practices, please contact us:
                  </p>
                  <div className="space-y-2">
                    <p><strong>General Contact:</strong> support@beforth.in</p>
                    <p><strong>Address:</strong> Nashik, Maharashtra, India</p>
                    <p><strong>Phone:</strong> +919766183834</p>
                  </div>
                </Card>
              </motion.div>

              {/* Updates */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                viewport={{ once: true }}
              >
                <Card className="p-8">
                  <h2 className="text-2xl font-bold mb-4">Policy Updates</h2>
                  <p className="text-muted-foreground">
                    We may update this Privacy Policy from time to time. We will notify you of any changes by 
                    posting the new Privacy Policy on this page and updating the "Last updated" date. We encourage 
                    you to review this Privacy Policy periodically for any changes.
                  </p>
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

export default PrivacyPolicy;
