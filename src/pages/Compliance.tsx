import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle, Shield, FileText, Award, Globe, Building, Users, Lock } from 'lucide-react';
import { Card } from '../components/ui/card';
import { MobileMenu } from '../components/ui/mobile-menu';
import { ThemeProvider } from '../components/ui/theme-provider';
import { Logo } from '../components/ui/logo';
import { NavLink } from '../components/ui/nav-link';
import { Footer } from '../components/ui/footer';

const Compliance: React.FC = () => {
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
                  <CheckCircle className="h-8 w-8 text-primary" />
                </div>
              </div>
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                Compliance
              </h1>
              <p className="text-xl text-muted-foreground mb-8">
                We maintain the highest standards of compliance with international regulations and industry best practices.
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
              
              {/* Compliance Overview */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="mb-12"
              >
                <Card className="p-8">
                  <h2 className="text-2xl font-bold mb-4 flex items-center">
                    <Shield className="h-6 w-6 mr-3 text-primary" />
                    Our Compliance Commitment
                  </h2>
                  <p className="text-muted-foreground mb-4">
                    At Beforth, we are committed to maintaining the highest standards of compliance with 
                    international regulations, industry standards, and best practices. Our compliance program 
                    ensures that we meet or exceed all applicable requirements.
                  </p>
                  <div className="bg-muted p-4 rounded-lg">
                    <p className="text-sm font-medium mb-2">Comprehensive Approach:</p>
                    <p className="text-sm text-muted-foreground">
                      Our compliance program covers data protection, security standards, industry regulations, 
                      and ethical business practices to ensure the highest level of trust and reliability.
                    </p>
                  </div>
                </Card>
              </motion.div>

              {/* Data Protection Compliance */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                viewport={{ once: true }}
                className="mb-12"
              >
                <Card className="p-8">
                  <h2 className="text-2xl font-bold mb-4 flex items-center">
                    <Lock className="h-6 w-6 mr-3 text-primary" />
                    Data Protection Compliance
                  </h2>
                  <div className="space-y-6">
                    <div>
                      <h3 className="text-lg font-semibold mb-2">GDPR (General Data Protection Regulation)</h3>
                      <p className="text-muted-foreground mb-2">
                        We fully comply with the EU's General Data Protection Regulation, ensuring the highest 
                        standards of data protection for EU residents.
                      </p>
                      <ul className="text-muted-foreground space-y-1 text-sm">
                        <li>• Lawful basis for data processing</li>
                        <li>• Data subject rights implementation</li>
                        <li>• Privacy by design and default</li>
                        <li>• Data protection impact assessments</li>
                        <li>• Data breach notification procedures</li>
                      </ul>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold mb-2">CCPA (California Consumer Privacy Act)</h3>
                      <p className="text-muted-foreground mb-2">
                        We comply with California's privacy law, providing California residents with specific 
                        rights regarding their personal information.
                      </p>
                      <ul className="text-muted-foreground space-y-1 text-sm">
                        <li>• Right to know about data collection</li>
                        <li>• Right to delete personal information</li>
                        <li>• Right to opt-out of data sales</li>
                        <li>• Non-discrimination for exercising rights</li>
                      </ul>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold mb-2">PIPEDA (Personal Information Protection and Electronic Documents Act)</h3>
                      <p className="text-muted-foreground mb-2">
                        We adhere to Canada's privacy law, ensuring responsible collection, use, and disclosure 
                        of personal information.
                      </p>
                    </div>
                  </div>
                </Card>
              </motion.div>

              {/* Security Standards */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
                className="mb-12"
              >
                <Card className="p-8">
                  <h2 className="text-2xl font-bold mb-4 flex items-center">
                    <Award className="h-6 w-6 mr-3 text-primary" />
                    Security Standards & Certifications
                  </h2>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-4">
                      <div className="bg-muted p-4 rounded-lg">
                        <h4 className="font-semibold mb-2 flex items-center">
                          <CheckCircle className="h-4 w-4 mr-2 text-green-500" />
                          ISO 27001
                        </h4>
                        <p className="text-sm text-muted-foreground">
                          Information Security Management System certification ensuring systematic approach to managing sensitive information.
                        </p>
                      </div>
                      <div className="bg-muted p-4 rounded-lg">
                        <h4 className="font-semibold mb-2 flex items-center">
                          <CheckCircle className="h-4 w-4 mr-2 text-green-500" />
                          SOC 2 Type II
                        </h4>
                        <p className="text-sm text-muted-foreground">
                          Service Organization Control 2 compliance for security, availability, and confidentiality of our services.
                        </p>
                      </div>
                      <div className="bg-muted p-4 rounded-lg">
                        <h4 className="font-semibold mb-2 flex items-center">
                          <CheckCircle className="h-4 w-4 mr-2 text-green-500" />
                          NIST Framework
                        </h4>
                        <p className="text-sm text-muted-foreground">
                          Following National Institute of Standards and Technology cybersecurity framework guidelines.
                        </p>
                      </div>
                    </div>
                    <div className="space-y-4">
                      <div className="bg-muted p-4 rounded-lg">
                        <h4 className="font-semibold mb-2 flex items-center">
                          <CheckCircle className="h-4 w-4 mr-2 text-green-500" />
                          OWASP Guidelines
                        </h4>
                        <p className="text-sm text-muted-foreground">
                          Open Web Application Security Project guidelines for secure web application development.
                        </p>
                      </div>
                      <div className="bg-muted p-4 rounded-lg">
                        <h4 className="font-semibold mb-2 flex items-center">
                          <CheckCircle className="h-4 w-4 mr-2 text-green-500" />
                          PCI DSS
                        </h4>
                        <p className="text-sm text-muted-foreground">
                          Payment Card Industry Data Security Standard compliance for secure payment processing.
                        </p>
                      </div>
                      <div className="bg-muted p-4 rounded-lg">
                        <h4 className="font-semibold mb-2 flex items-center">
                          <CheckCircle className="h-4 w-4 mr-2 text-green-500" />
                          HIPAA Ready
                        </h4>
                        <p className="text-sm text-muted-foreground">
                          Health Insurance Portability and Accountability Act compliance for healthcare data protection.
                        </p>
                      </div>
                    </div>
                  </div>
                </Card>
              </motion.div>

              {/* Industry Compliance */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                viewport={{ once: true }}
                className="mb-12"
              >
                <Card className="p-8">
                  <h2 className="text-2xl font-bold mb-4 flex items-center">
                    <Building className="h-6 w-6 mr-3 text-primary" />
                    Industry-Specific Compliance
                  </h2>
                  <div className="space-y-4">
                    <div>
                      <h3 className="text-lg font-semibold mb-2">Financial Services</h3>
                      <p className="text-muted-foreground mb-2">
                        We comply with financial industry regulations and standards to ensure secure handling 
                        of financial data and transactions.
                      </p>
                      <ul className="text-muted-foreground space-y-1 text-sm">
                        <li>• SOX (Sarbanes-Oxley Act) compliance</li>
                        <li>• PCI DSS for payment processing</li>
                        <li>• Financial data encryption standards</li>
                        <li>• Audit trail requirements</li>
                      </ul>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold mb-2">Healthcare</h3>
                      <p className="text-muted-foreground mb-2">
                        Our healthcare solutions meet strict regulatory requirements for patient data protection 
                        and medical information security.
                      </p>
                      <ul className="text-muted-foreground space-y-1 text-sm">
                        <li>• HIPAA compliance for patient data</li>
                        <li>• HITECH Act requirements</li>
                        <li>• Medical device security standards</li>
                        <li>• Healthcare data encryption</li>
                      </ul>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold mb-2">Government & Public Sector</h3>
                      <p className="text-muted-foreground mb-2">
                        We meet government security requirements and standards for handling sensitive public sector data.
                      </p>
                      <ul className="text-muted-foreground space-y-1 text-sm">
                        <li>• FedRAMP compliance readiness</li>
                        <li>• FISMA security requirements</li>
                        <li>• Government data classification</li>
                        <li>• Security clearance requirements</li>
                      </ul>
                    </div>
                  </div>
                </Card>
              </motion.div>

              {/* International Compliance */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                viewport={{ once: true }}
                className="mb-12"
              >
                <Card className="p-8">
                  <h2 className="text-2xl font-bold mb-4 flex items-center">
                    <Globe className="h-6 w-6 mr-3 text-primary" />
                    International Compliance
                  </h2>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h3 className="text-lg font-semibold mb-2">European Union</h3>
                      <ul className="text-muted-foreground space-y-1 text-sm">
                        <li>• GDPR compliance</li>
                        <li>• ePrivacy Directive</li>
                        <li>• NIS Directive</li>
                        <li>• EU-US Privacy Shield</li>
                      </ul>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold mb-2">Asia-Pacific</h3>
                      <ul className="text-muted-foreground space-y-1 text-sm">
                        <li>• Singapore PDPA</li>
                        <li>• Australia Privacy Act</li>
                        <li>• Japan APPI</li>
                        <li>• India IT Act</li>
                      </ul>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold mb-2">Americas</h3>
                      <ul className="text-muted-foreground space-y-1 text-sm">
                        <li>• US CCPA/CPRA</li>
                        <li>• Canada PIPEDA</li>
                        <li>• Brazil LGPD</li>
                        <li>• Mexico LFPDPPP</li>
                      </ul>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold mb-2">Middle East & Africa</h3>
                      <ul className="text-muted-foreground space-y-1 text-sm">
                        <li>• UAE Data Protection Law</li>
                        <li>• Saudi Arabia PDPL</li>
                        <li>• South Africa POPIA</li>
                        <li>• Nigeria NDPR</li>
                      </ul>
                    </div>
                  </div>
                </Card>
              </motion.div>

              {/* Compliance Management */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                viewport={{ once: true }}
                className="mb-12"
              >
                <Card className="p-8">
                  <h2 className="text-2xl font-bold mb-4 flex items-center">
                    <FileText className="h-6 w-6 mr-3 text-primary" />
                    Compliance Management
                  </h2>
                  <div className="space-y-4">
                    <div>
                      <h3 className="text-lg font-semibold mb-2">Compliance Program</h3>
                      <p className="text-muted-foreground mb-2">
                        Our comprehensive compliance program includes:
                      </p>
                      <ul className="text-muted-foreground space-y-1 text-sm">
                        <li>• Regular compliance assessments and audits</li>
                        <li>• Ongoing staff training and awareness programs</li>
                        <li>• Compliance monitoring and reporting</li>
                        <li>• Risk assessment and mitigation strategies</li>
                        <li>• Incident response and breach management</li>
                      </ul>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold mb-2">Documentation & Records</h3>
                      <p className="text-muted-foreground">
                        We maintain comprehensive documentation of our compliance activities, including policies, 
                        procedures, training records, and audit reports. All documentation is regularly reviewed 
                        and updated to ensure accuracy and relevance.
                      </p>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold mb-2">Third-Party Compliance</h3>
                      <p className="text-muted-foreground">
                        We ensure that all third-party vendors and partners meet our compliance requirements. 
                        This includes regular vendor assessments and compliance verification.
                      </p>
                    </div>
                  </div>
                </Card>
              </motion.div>

              {/* Compliance Reporting */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                viewport={{ once: true }}
                className="mb-12"
              >
                <Card className="p-8">
                  <h2 className="text-2xl font-bold mb-4 flex items-center">
                    <Users className="h-6 w-6 mr-3 text-primary" />
                    Compliance Reporting & Transparency
                  </h2>
                  <div className="space-y-4">
                    <div>
                      <h3 className="text-lg font-semibold mb-2">Regular Reporting</h3>
                      <p className="text-muted-foreground">
                        We provide regular compliance reports to our clients and stakeholders, demonstrating 
                        our commitment to maintaining the highest standards of compliance and security.
                      </p>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold mb-2">Audit Support</h3>
                      <p className="text-muted-foreground">
                        We support our clients' compliance audits by providing necessary documentation, 
                        access to systems, and expert testimony as required.
                      </p>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold mb-2">Continuous Improvement</h3>
                      <p className="text-muted-foreground">
                        We continuously monitor regulatory changes and industry best practices to ensure 
                        our compliance program remains current and effective.
                      </p>
                    </div>
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
                  <h2 className="text-2xl font-bold mb-4">Compliance Contact</h2>
                  <p className="text-muted-foreground mb-4">
                    For compliance-related questions, concerns, or to request compliance documentation, please contact us:
                  </p>
                  <div className="space-y-2">
                    <p><strong>Compliance Email:</strong> compliance@beforth.in</p>
                    <p><strong>General Contact:</strong> support@beforth.in</p>
                    <p><strong>Address:</strong> Nashik, Maharashtra, India</p>
                    <p><strong>Phone:</strong> +919766183834</p>
                  </div>
                  <div className="mt-4 p-4 bg-muted rounded-lg">
                    <p className="text-sm text-muted-foreground">
                      <strong>Compliance Officer:</strong> Our designated compliance officer is available to address 
                      any compliance-related questions or concerns. Contact compliance@beforth.in for direct access.
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

export default Compliance;
