import React from 'react';
import { motion } from 'framer-motion';
import { FileText, Scale, AlertTriangle, Shield, Users, Gavel } from 'lucide-react';
import { Card } from '../components/ui/card';
import { MobileMenu } from '../components/ui/mobile-menu';
import { ThemeProvider } from '../components/ui/theme-provider';
import { Logo } from '../components/ui/logo';
import { NavLink } from '../components/ui/nav-link';
import { Footer } from '../components/ui/footer';

const TermsOfService: React.FC = () => {
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
                  <Scale className="h-8 w-8 text-primary" />
                </div>
              </div>
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                Terms of Service
              </h1>
              <p className="text-xl text-muted-foreground mb-8">
                Please read these terms carefully before using our services. By using our services, you agree to be bound by these terms.
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
              
              {/* Acceptance of Terms */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="mb-12"
              >
                <Card className="p-8">
                  <h2 className="text-2xl font-bold mb-4 flex items-center">
                    <FileText className="h-6 w-6 mr-3 text-primary" />
                    Acceptance of Terms
                  </h2>
                  <p className="text-muted-foreground mb-4">
                    By accessing and using Beforth's services, you accept and agree to be bound by the terms and 
                    provision of this agreement. If you do not agree to abide by the above, please do not use this service.
                  </p>
                  <div className="bg-muted p-4 rounded-lg">
                    <p className="text-sm font-medium mb-2">Important Notice:</p>
                    <p className="text-sm text-muted-foreground">
                      These terms constitute a legally binding agreement between you and Beforth Technologies. 
                      Please read them carefully.
                    </p>
                  </div>
                </Card>
              </motion.div>

              {/* Service Description */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                viewport={{ once: true }}
                className="mb-12"
              >
                <Card className="p-8">
                  <h2 className="text-2xl font-bold mb-4 flex items-center">
                    <Users className="h-6 w-6 mr-3 text-primary" />
                    Service Description
                  </h2>
                  <div className="space-y-4">
                    <div>
                      <h3 className="text-lg font-semibold mb-2">Our Services</h3>
                      <p className="text-muted-foreground">
                        Beforth provides comprehensive Frappe framework implementation services, including HRMS, 
                        ERPNext customization, and business process automation solutions.
                      </p>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold mb-2">Service Availability</h3>
                      <p className="text-muted-foreground">
                        We strive to maintain high service availability but do not guarantee uninterrupted access. 
                        We reserve the right to modify, suspend, or discontinue any part of our services at any time.
                      </p>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold mb-2">Service Updates</h3>
                      <p className="text-muted-foreground">
                        We may update our services from time to time to improve functionality, add new features, 
                        or address security concerns. Updates will be communicated to users as appropriate.
                      </p>
                    </div>
                  </div>
                </Card>
              </motion.div>

              {/* User Responsibilities */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
                className="mb-12"
              >
                <Card className="p-8">
                  <h2 className="text-2xl font-bold mb-4 flex items-center">
                    <Shield className="h-6 w-6 mr-3 text-primary" />
                    User Responsibilities
                  </h2>
                  <div className="space-y-4">
                    <div>
                      <h3 className="text-lg font-semibold mb-2">Account Security</h3>
                      <ul className="text-muted-foreground space-y-1">
                        <li>• Maintain the confidentiality of your account credentials</li>
                        <li>• Notify us immediately of any unauthorized use</li>
                        <li>• Use strong, unique passwords</li>
                        <li>• Keep your contact information up to date</li>
                      </ul>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold mb-2">Acceptable Use</h3>
                      <ul className="text-muted-foreground space-y-1">
                        <li>• Use our services only for lawful purposes</li>
                        <li>• Comply with all applicable laws and regulations</li>
                        <li>• Respect intellectual property rights</li>
                        <li>• Do not attempt to gain unauthorized access to our systems</li>
                      </ul>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold mb-2">Prohibited Activities</h3>
                      <ul className="text-muted-foreground space-y-1">
                        <li>• Transmitting malicious code or viruses</li>
                        <li>• Spamming or sending unsolicited communications</li>
                        <li>• Impersonating others or providing false information</li>
                        <li>• Interfering with the proper functioning of our services</li>
                      </ul>
                    </div>
                  </div>
                </Card>
              </motion.div>

              {/* Payment Terms */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                viewport={{ once: true }}
                className="mb-12"
              >
                <Card className="p-8">
                  <h2 className="text-2xl font-bold mb-4 flex items-center">
                    <Gavel className="h-6 w-6 mr-3 text-primary" />
                    Payment Terms
                  </h2>
                  <div className="space-y-4">
                    <div>
                      <h3 className="text-lg font-semibold mb-2">Billing</h3>
                      <p className="text-muted-foreground">
                        Payment terms will be specified in individual service agreements. Generally, payment is 
                        due within 30 days of invoice date unless otherwise specified.
                      </p>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold mb-2">Refunds</h3>
                      <p className="text-muted-foreground">
                        Refund policies vary by service type and will be detailed in your service agreement. 
                        Custom development work is generally non-refundable once development begins.
                      </p>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold mb-2">Late Payments</h3>
                      <p className="text-muted-foreground">
                        Late payments may result in service suspension and additional fees. We reserve the right 
                        to suspend services for accounts with outstanding balances.
                      </p>
                    </div>
                  </div>
                </Card>
              </motion.div>

              {/* Intellectual Property */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                viewport={{ once: true }}
                className="mb-12"
              >
                <Card className="p-8">
                  <h2 className="text-2xl font-bold mb-4">Intellectual Property</h2>
                  <div className="space-y-4">
                    <div>
                      <h3 className="text-lg font-semibold mb-2">Our Rights</h3>
                      <p className="text-muted-foreground">
                        All content, trademarks, and intellectual property on our platform remain the property of 
                        Beforth Technologies or our licensors. You may not use our intellectual property without 
                        written permission.
                      </p>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold mb-2">Your Content</h3>
                      <p className="text-muted-foreground">
                        You retain ownership of content you provide to us. By using our services, you grant us 
                        a license to use your content as necessary to provide our services.
                      </p>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold mb-2">Third-Party Content</h3>
                      <p className="text-muted-foreground">
                        Our services may include third-party content or links. We are not responsible for the 
                        content or practices of third-party websites or services.
                      </p>
                    </div>
                  </div>
                </Card>
              </motion.div>

              {/* Limitation of Liability */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                viewport={{ once: true }}
                className="mb-12"
              >
                <Card className="p-8">
                  <h2 className="text-2xl font-bold mb-4 flex items-center">
                    <AlertTriangle className="h-6 w-6 mr-3 text-primary" />
                    Limitation of Liability
                  </h2>
                  <div className="space-y-4">
                    <div>
                      <h3 className="text-lg font-semibold mb-2">Service Availability</h3>
                      <p className="text-muted-foreground">
                        We provide our services "as is" and "as available." We do not guarantee that our services 
                        will be uninterrupted, error-free, or completely secure.
                      </p>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold mb-2">Damages</h3>
                      <p className="text-muted-foreground">
                        To the maximum extent permitted by law, Beforth shall not be liable for any indirect, 
                        incidental, special, consequential, or punitive damages arising from your use of our services.
                      </p>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold mb-2">Maximum Liability</h3>
                      <p className="text-muted-foreground">
                        Our total liability to you for any claims arising from these terms or our services shall 
                        not exceed the amount you paid us in the 12 months preceding the claim.
                      </p>
                    </div>
                  </div>
                </Card>
              </motion.div>

              {/* Termination */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                viewport={{ once: true }}
                className="mb-12"
              >
                <Card className="p-8">
                  <h2 className="text-2xl font-bold mb-4">Termination</h2>
                  <div className="space-y-4">
                    <div>
                      <h3 className="text-lg font-semibold mb-2">Termination by You</h3>
                      <p className="text-muted-foreground">
                        You may terminate your use of our services at any time by contacting us. Termination 
                        does not relieve you of any payment obligations incurred before termination.
                      </p>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold mb-2">Termination by Us</h3>
                      <p className="text-muted-foreground">
                        We may suspend or terminate your access to our services immediately if you breach these 
                        terms or engage in prohibited activities.
                      </p>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold mb-2">Effect of Termination</h3>
                      <p className="text-muted-foreground">
                        Upon termination, your right to use our services ceases immediately. We may delete your 
                        data in accordance with our data retention policies.
                      </p>
                    </div>
                  </div>
                </Card>
              </motion.div>

              {/* Governing Law */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.7 }}
                viewport={{ once: true }}
                className="mb-12"
              >
                <Card className="p-8">
                  <h2 className="text-2xl font-bold mb-4">Governing Law & Disputes</h2>
                  <div className="space-y-4">
                    <div>
                      <h3 className="text-lg font-semibold mb-2">Governing Law</h3>
                      <p className="text-muted-foreground">
                        These terms are governed by the laws of India. Any disputes arising from these terms 
                        or our services will be subject to the exclusive jurisdiction of Indian courts.
                      </p>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold mb-2">Dispute Resolution</h3>
                      <p className="text-muted-foreground">
                        We encourage resolving disputes through good faith negotiations. If informal resolution 
                        fails, disputes will be resolved through binding arbitration or court proceedings.
                      </p>
                    </div>
                  </div>
                </Card>
              </motion.div>

              {/* Contact Information */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.8 }}
                viewport={{ once: true }}
              >
                <Card className="p-8">
                  <h2 className="text-2xl font-bold mb-4">Contact Information</h2>
                  <p className="text-muted-foreground mb-4">
                    If you have any questions about these Terms of Service, please contact us:
                  </p>
                  <div className="space-y-2">
                    <p><strong>Email:</strong> legal@beforth.in</p>
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

export default TermsOfService;
