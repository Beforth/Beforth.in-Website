import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Lock, Eye, AlertTriangle, CheckCircle, Server, Key, Database } from 'lucide-react';
import { Card } from '../components/ui/card';
import { MobileMenu } from '../components/ui/mobile-menu';
import { ThemeProvider } from '../components/ui/theme-provider';
import { Logo } from '../components/ui/logo';
import { NavLink } from '../components/ui/nav-link';
import { Footer } from '../components/ui/footer';

const Security: React.FC = () => {
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
                Security
              </h1>
              <p className="text-xl text-muted-foreground mb-8">
                Your security is our top priority. Learn about our comprehensive security measures and best practices.
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
              
              {/* Security Overview */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="mb-12"
              >
                <Card className="p-8">
                  <h2 className="text-2xl font-bold mb-4 flex items-center">
                    <Lock className="h-6 w-6 mr-3 text-primary" />
                    Our Security Commitment
                  </h2>
                  <p className="text-muted-foreground mb-4">
                    At Beforth, we implement industry-leading security measures to protect your data and ensure 
                    the confidentiality, integrity, and availability of our services. Security is embedded in 
                    every aspect of our operations.
                  </p>
                  <div className="bg-muted p-4 rounded-lg">
                    <p className="text-sm font-medium mb-2">Security First Approach:</p>
                    <p className="text-sm text-muted-foreground">
                      We follow a "security by design" principle, implementing security controls at every layer 
                      of our infrastructure and application stack.
                    </p>
                  </div>
                </Card>
              </motion.div>

              {/* Security Measures */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                viewport={{ once: true }}
                className="mb-12"
              >
                <Card className="p-8">
                  <h2 className="text-2xl font-bold mb-4 flex items-center">
                    <Server className="h-6 w-6 mr-3 text-primary" />
                    Infrastructure Security
                  </h2>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h3 className="text-lg font-semibold mb-2 flex items-center">
                        <CheckCircle className="h-5 w-5 mr-2 text-green-500" />
                        Data Encryption
                      </h3>
                      <ul className="text-muted-foreground space-y-1 text-sm">
                        <li>• AES-256 encryption for data at rest</li>
                        <li>• TLS 1.3 for data in transit</li>
                        <li>• End-to-end encryption for sensitive data</li>
                        <li>• Encrypted database connections</li>
                      </ul>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold mb-2 flex items-center">
                        <CheckCircle className="h-5 w-5 mr-2 text-green-500" />
                        Network Security
                      </h3>
                      <ul className="text-muted-foreground space-y-1 text-sm">
                        <li>• Firewall protection and DDoS mitigation</li>
                        <li>• Intrusion detection and prevention systems</li>
                        <li>• Network segmentation and isolation</li>
                        <li>• Regular security assessments</li>
                      </ul>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold mb-2 flex items-center">
                        <CheckCircle className="h-5 w-5 mr-2 text-green-500" />
                        Access Controls
                      </h3>
                      <ul className="text-muted-foreground space-y-1 text-sm">
                        <li>• Multi-factor authentication (MFA)</li>
                        <li>• Role-based access control (RBAC)</li>
                        <li>• Principle of least privilege</li>
                        <li>• Regular access reviews and audits</li>
                      </ul>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold mb-2 flex items-center">
                        <CheckCircle className="h-5 w-5 mr-2 text-green-500" />
                        Monitoring & Logging
                      </h3>
                      <ul className="text-muted-foreground space-y-1 text-sm">
                        <li>• 24/7 security monitoring</li>
                        <li>• Comprehensive audit logging</li>
                        <li>• Real-time threat detection</li>
                        <li>• Incident response procedures</li>
                      </ul>
                    </div>
                  </div>
                </Card>
              </motion.div>

              {/* Application Security */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
                className="mb-12"
              >
                <Card className="p-8">
                  <h2 className="text-2xl font-bold mb-4 flex items-center">
                    <Key className="h-6 w-6 mr-3 text-primary" />
                    Application Security
                  </h2>
                  <div className="space-y-6">
                    <div>
                      <h3 className="text-lg font-semibold mb-2">Secure Development Lifecycle</h3>
                      <p className="text-muted-foreground mb-2">
                        We follow secure coding practices and conduct regular security reviews throughout 
                        the development process.
                      </p>
                      <ul className="text-muted-foreground space-y-1 text-sm">
                        <li>• Code security reviews and static analysis</li>
                        <li>• Dependency vulnerability scanning</li>
                        <li>• Penetration testing and security assessments</li>
                        <li>• Regular security training for developers</li>
                      </ul>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold mb-2">Authentication & Authorization</h3>
                      <p className="text-muted-foreground mb-2">
                        Robust authentication mechanisms ensure only authorized users can access your data.
                      </p>
                      <ul className="text-muted-foreground space-y-1 text-sm">
                        <li>• Strong password policies and requirements</li>
                        <li>• Multi-factor authentication support</li>
                        <li>• Session management and timeout controls</li>
                        <li>• API authentication and rate limiting</li>
                      </ul>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold mb-2">Data Protection</h3>
                      <p className="text-muted-foreground mb-2">
                        Multiple layers of data protection ensure your information remains secure.
                      </p>
                      <ul className="text-muted-foreground space-y-1 text-sm">
                        <li>• Input validation and sanitization</li>
                        <li>• SQL injection prevention</li>
                        <li>• Cross-site scripting (XSS) protection</li>
                        <li>• Data anonymization and pseudonymization</li>
                      </ul>
                    </div>
                  </div>
                </Card>
              </motion.div>

              {/* Compliance & Certifications */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                viewport={{ once: true }}
                className="mb-12"
              >
                <Card className="p-8">
                  <h2 className="text-2xl font-bold mb-4 flex items-center">
                    <Database className="h-6 w-6 mr-3 text-primary" />
                    Compliance & Standards
                  </h2>
                  <div className="space-y-4">
                    <div>
                      <h3 className="text-lg font-semibold mb-2">Industry Standards</h3>
                      <p className="text-muted-foreground">
                        We adhere to internationally recognized security standards and frameworks to ensure 
                        the highest level of security for our clients.
                      </p>
                    </div>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="bg-muted p-4 rounded-lg">
                        <h4 className="font-semibold mb-2">ISO 27001</h4>
                        <p className="text-sm text-muted-foreground">
                          Information Security Management System certification ensuring systematic approach to managing sensitive information.
                        </p>
                      </div>
                      <div className="bg-muted p-4 rounded-lg">
                        <h4 className="font-semibold mb-2">SOC 2 Type II</h4>
                        <p className="text-sm text-muted-foreground">
                          Service Organization Control 2 compliance for security, availability, and confidentiality of our services.
                        </p>
                      </div>
                      <div className="bg-muted p-4 rounded-lg">
                        <h4 className="font-semibold mb-2">GDPR Compliance</h4>
                        <p className="text-sm text-muted-foreground">
                          General Data Protection Regulation compliance ensuring data privacy and protection for EU residents.
                        </p>
                      </div>
                      <div className="bg-muted p-4 rounded-lg">
                        <h4 className="font-semibold mb-2">OWASP Guidelines</h4>
                        <p className="text-sm text-muted-foreground">
                          Following Open Web Application Security Project guidelines for secure web application development.
                        </p>
                      </div>
                    </div>
                  </div>
                </Card>
              </motion.div>

              {/* Incident Response */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                viewport={{ once: true }}
                className="mb-12"
              >
                <Card className="p-8">
                  <h2 className="text-2xl font-bold mb-4 flex items-center">
                    <AlertTriangle className="h-6 w-6 mr-3 text-primary" />
                    Incident Response
                  </h2>
                  <div className="space-y-4">
                    <div>
                      <h3 className="text-lg font-semibold mb-2">24/7 Security Monitoring</h3>
                      <p className="text-muted-foreground">
                        Our security operations center monitors our systems around the clock to detect and 
                        respond to potential security incidents immediately.
                      </p>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold mb-2">Incident Response Plan</h3>
                      <p className="text-muted-foreground mb-2">
                        We have a comprehensive incident response plan that includes:
                      </p>
                      <ul className="text-muted-foreground space-y-1 text-sm">
                        <li>• Immediate threat detection and analysis</li>
                        <li>• Rapid containment and mitigation</li>
                        <li>• Evidence preservation and forensic analysis</li>
                        <li>• Communication with affected parties</li>
                        <li>• Post-incident review and improvement</li>
                      </ul>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold mb-2">Business Continuity</h3>
                      <p className="text-muted-foreground">
                        We maintain business continuity plans to ensure minimal disruption to your services 
                        in the event of a security incident or other emergency.
                      </p>
                    </div>
                  </div>
                </Card>
              </motion.div>

              {/* Security Best Practices */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                viewport={{ once: true }}
                className="mb-12"
              >
                <Card className="p-8">
                  <h2 className="text-2xl font-bold mb-4 flex items-center">
                    <Eye className="h-6 w-6 mr-3 text-primary" />
                    Security Best Practices
                  </h2>
                  <div className="space-y-6">
                    <div>
                      <h3 className="text-lg font-semibold mb-2">For Our Clients</h3>
                      <p className="text-muted-foreground mb-2">
                        We recommend the following security best practices for our clients:
                      </p>
                      <ul className="text-muted-foreground space-y-1 text-sm">
                        <li>• Use strong, unique passwords for all accounts</li>
                        <li>• Enable multi-factor authentication where available</li>
                        <li>• Keep software and systems updated</li>
                        <li>• Regularly backup important data</li>
                        <li>• Be cautious with email attachments and links</li>
                        <li>• Use secure networks when accessing sensitive data</li>
                      </ul>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold mb-2">Regular Security Updates</h3>
                      <p className="text-muted-foreground">
                        We regularly update our security measures and communicate any important changes 
                        to our clients. We also provide security training and awareness programs.
                      </p>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold mb-2">Security Reporting</h3>
                      <p className="text-muted-foreground">
                        If you discover a potential security vulnerability, please report it to us immediately 
                        at support@beforth.in. We take all security reports seriously and will respond promptly.
                      </p>
                    </div>
                  </div>
                </Card>
              </motion.div>

              {/* Contact Information */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                viewport={{ once: true }}
              >
                <Card className="p-8">
                  <h2 className="text-2xl font-bold mb-4">Security Contact</h2>
                  <p className="text-muted-foreground mb-4">
                    For security-related questions, concerns, or to report a security incident, please contact us:
                  </p>
                  <div className="space-y-2">
                    <p><strong>General Contact:</strong> support@beforth.in</p>
                    <p><strong>Address:</strong> Nashik, Maharashtra, India</p>
                    <p><strong>Phone:</strong> +919766183834</p>
                  </div>
                  <div className="mt-4 p-4 bg-muted rounded-lg">
                    <p className="text-sm text-muted-foreground">
                      <strong>Emergency Security Contact:</strong> For urgent security matters outside business hours, 
                      please use our emergency contact number or email support@beforth.in with "URGENT" in the subject line.
                    </p>
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

export default Security;
