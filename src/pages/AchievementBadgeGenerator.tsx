import { useState } from 'react';
import { motion } from 'framer-motion';
import { Download, Share2, RefreshCw, Palette, Award, Star, Trophy, Medal, Crown, Zap, Heart, Target, Rocket, Shield, Gem } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Card, CardContent } from '../components/ui/card';
import { Input } from '../components/ui/input';
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

const badgeTemplates = [
  { id: 'achievement', name: 'Achievement', icon: Award, color: 'from-yellow-400 to-orange-500' },
  { id: 'excellence', name: 'Excellence', icon: Star, color: 'from-blue-400 to-purple-500' },
  { id: 'winner', name: 'Winner', icon: Trophy, color: 'from-yellow-500 to-red-500' },
  { id: 'medal', name: 'Medal', icon: Medal, color: 'from-gray-400 to-gray-600' },
  { id: 'crown', name: 'Crown', icon: Crown, color: 'from-purple-400 to-pink-500' },
  { id: 'lightning', name: 'Lightning', icon: Zap, color: 'from-yellow-300 to-yellow-600' },
  { id: 'heart', name: 'Heart', icon: Heart, color: 'from-pink-400 to-red-500' },
  { id: 'target', name: 'Target', icon: Target, color: 'from-green-400 to-blue-500' },
  { id: 'rocket', name: 'Rocket', icon: Rocket, color: 'from-blue-500 to-purple-600' },
  { id: 'shield', name: 'Shield', icon: Shield, color: 'from-indigo-400 to-blue-600' },
  { id: 'gem', name: 'Gem', icon: Gem, color: 'from-emerald-400 to-teal-500' },
];

const achievementCategories = [
  'Team Player',
  'Innovation',
  'Leadership',
  'Problem Solver',
  'Mentor',
  'Collaborator',
  'Creative Thinker',
  'Detail Oriented',
  'Customer Focused',
  'Results Driven',
  'Adaptable',
  'Communicator',
  'Strategic Thinker',
  'Tech Savvy',
  'Process Improver',
  'Quality Champion',
  'Time Manager',
  'Goal Achiever',
  'Team Builder',
  'Solution Provider'
];

function AchievementBadgeGenerator() {
  const [badgeData, setBadgeData] = useState({
    recipientName: 'John Doe',
    achievement: 'Team Player',
    badgeType: 'achievement',
    customText: '',
    backgroundColor: 'from-blue-500 to-purple-600',
    textColor: 'white'
  });

  const [generatedBadge, setGeneratedBadge] = useState<string | null>(null);

  const handleInputChange = (field: string, value: string) => {
    setBadgeData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const generateBadge = () => {
    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    canvas.width = 400;
    canvas.height = 400;

    // Create gradient background
    const gradient = ctx.createLinearGradient(0, 0, 400, 400);
    
    // Map gradient strings to actual hex colors
    const colorMap: { [key: string]: { from: string; to: string } } = {
      'from-blue-500 to-purple-600': { from: '#3b82f6', to: '#9333ea' },
      'from-yellow-400 to-orange-500': { from: '#facc15', to: '#f97316' },
      'from-green-400 to-blue-500': { from: '#4ade80', to: '#3b82f6' },
      'from-pink-400 to-red-500': { from: '#f472b6', to: '#ef4444' },
      'from-purple-400 to-pink-500': { from: '#c084fc', to: '#ec4899' },
      'from-indigo-400 to-blue-600': { from: '#818cf8', to: '#2563eb' },
      'from-emerald-400 to-teal-500': { from: '#6ee7b7', to: '#14b8a6' },
      'from-red-400 to-pink-500': { from: '#f87171', to: '#ec4899' }
    };
    
    const colors = colorMap[badgeData.backgroundColor] || { from: '#3b82f6', to: '#9333ea' };
    gradient.addColorStop(0, colors.from);
    gradient.addColorStop(1, colors.to);

    // Draw background
    ctx.fillStyle = gradient;
    ctx.fillRect(0, 0, 400, 400);

    // Draw border
    ctx.strokeStyle = 'rgba(255, 255, 255, 0.3)';
    ctx.lineWidth = 8;
    ctx.strokeRect(4, 4, 392, 392);

    // Draw inner circle for icon
    ctx.beginPath();
    ctx.arc(200, 150, 60, 0, 2 * Math.PI);
    ctx.fillStyle = 'rgba(255, 255, 255, 0.2)';
    ctx.fill();
    ctx.strokeStyle = 'rgba(255, 255, 255, 0.5)';
    ctx.lineWidth = 3;
    ctx.stroke();

    // Draw icon (simplified version using text/emoji)
    const selectedTemplate = badgeTemplates.find(t => t.id === badgeData.badgeType);
    if (selectedTemplate) {
      // Use emoji representations for icons
      const iconEmojis: { [key: string]: string } = {
        'achievement': '🏆',
        'excellence': '⭐',
        'winner': '🥇',
        'medal': '🏅',
        'crown': '👑',
        'lightning': '⚡',
        'heart': '❤️',
        'target': '🎯',
        'rocket': '🚀',
        'shield': '🛡️',
        'gem': '💎'
      };
      
      const iconEmoji = iconEmojis[badgeData.badgeType] || '🏆';
      ctx.font = 'bold 48px Arial';
      ctx.fillStyle = 'rgba(255, 255, 255, 0.9)';
      ctx.textAlign = 'center';
      ctx.fillText(iconEmoji, 200, 165);
    }

    // Draw text
    ctx.fillStyle = badgeData.textColor;
    ctx.textAlign = 'center';

    // Achievement text
    ctx.font = 'bold 24px Arial';
    ctx.fillText(badgeData.achievement, 200, 250);

    // Recipient name
    ctx.font = '18px Arial';
    ctx.fillText(badgeData.recipientName, 200, 280);

    // Date
    ctx.font = '14px Arial';
    ctx.fillText(new Date().toLocaleDateString(), 200, 310);

    // Company/Organization
    ctx.font = '16px Arial';
    ctx.fillText('Beforth', 200, 350);

    setGeneratedBadge(canvas.toDataURL());
  };

  const downloadBadge = () => {
    if (!generatedBadge) return;
    
    const link = document.createElement('a');
    link.download = `achievement-badge-${badgeData.recipientName.replace(/\s+/g, '-').toLowerCase()}.png`;
    link.href = generatedBadge;
    link.click();
  };

  const shareBadge = async () => {
    if (!generatedBadge) return;

    if (navigator.share) {
      try {
        const response = await fetch(generatedBadge);
        const blob = await response.blob();
        const file = new File([blob], 'achievement-badge.png', { type: 'image/png' });
        
        await navigator.share({
          title: 'Achievement Badge',
          text: `Check out this achievement badge for ${badgeData.recipientName}!`,
          files: [file]
        });
      } catch (err) {
        console.log('Error sharing:', err);
      }
    } else {
      // Fallback: copy to clipboard
      navigator.clipboard.writeText(window.location.href);
      alert('Link copied to clipboard!');
    }
  };

  const randomizeBadge = () => {
    const randomCategory = achievementCategories[Math.floor(Math.random() * achievementCategories.length)];
    const randomTemplate = badgeTemplates[Math.floor(Math.random() * badgeTemplates.length)];
    const randomName = ['Alex Johnson', 'Sarah Chen', 'Mike Rodriguez', 'Emily Davis', 'David Kim', 'Lisa Wang'][Math.floor(Math.random() * 6)];
    
    setBadgeData(prev => ({
      ...prev,
      recipientName: randomName,
      achievement: randomCategory,
      badgeType: randomTemplate.id,
      backgroundColor: randomTemplate.color
    }));
  };

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
                <Button size="sm">Get Started</Button>
              </div>

              <MobileMenu navItems={navItems} />
            </div>
          </div>
        </header>

        {/* Hero Section */}
        <section className="pt-16 pb-20 md:pt-24 md:pb-32 bg-background">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 text-center">
            <motion.h1 
              className="text-4xl sm:text-6xl md:text-8xl font-light text-foreground leading-none tracking-tight mb-6 md:mb-8"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              Achievement <br />
              <span className="font-semibold text-teal-600">Badge Generator</span>
            </motion.h1>
            
            <motion.p 
              className="text-lg sm:text-xl md:text-2xl font-light text-muted-foreground max-w-3xl mx-auto mb-8 md:mb-12 leading-relaxed px-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Create beautiful, custom achievement badges for your team members. 
              Recognize excellence and boost morale with personalized recognition.
            </motion.p>
          </div>
        </section>

        {/* Generator Section */}
        <section className="py-16 md:py-20 bg-muted/30">
          <div className="max-w-6xl mx-auto px-4 sm:px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Form */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <Card className="border-0 shadow-none bg-transparent">
                  <CardContent className="p-0">
                    <h2 className="text-2xl font-semibold text-foreground mb-6">Customize Your Badge</h2>
                    
                    <div className="space-y-6">
                      {/* Recipient Name */}
                      <div>
                        <label className="block text-sm font-medium text-foreground mb-2">Recipient Name</label>
                        <Input
                          value={badgeData.recipientName}
                          onChange={(e) => handleInputChange('recipientName', e.target.value)}
                          placeholder="Enter recipient name"
                        />
                      </div>

                      {/* Achievement Type */}
                      <div>
                        <label className="block text-sm font-medium text-foreground mb-2">Achievement Type</label>
                        <select
                          value={badgeData.achievement}
                          onChange={(e) => handleInputChange('achievement', e.target.value)}
                          className="w-full px-4 py-3 border border-border rounded-lg bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                        >
                          {achievementCategories.map((category) => (
                            <option key={category} value={category}>{category}</option>
                          ))}
                        </select>
                      </div>

                      {/* Badge Template */}
                      <div>
                        <label className="block text-sm font-medium text-foreground mb-2">Badge Style</label>
                        <div className="grid grid-cols-3 gap-3">
                          {badgeTemplates.map((template) => (
                            <button
                              key={template.id}
                              onClick={() => {
                                handleInputChange('badgeType', template.id);
                                handleInputChange('backgroundColor', template.color);
                              }}
                              className={`p-3 rounded-lg border-2 transition-all ${
                                badgeData.badgeType === template.id
                                  ? 'border-primary bg-primary/10'
                                  : 'border-border hover:border-primary/50'
                              }`}
                            >
                              <template.icon className={`w-6 h-6 mx-auto mb-2 ${
                                badgeData.badgeType === template.id ? 'text-primary' : 'text-muted-foreground'
                              }`} />
                              <span className="text-xs text-center block">{template.name}</span>
                            </button>
                          ))}
                        </div>
                      </div>

                      {/* Background Color */}
                      <div>
                        <label className="block text-sm font-medium text-foreground mb-2">Background Color</label>
                        <div className="grid grid-cols-4 gap-2">
                          {[
                            { gradient: 'from-blue-500 to-purple-600', from: '#3b82f6', to: '#9333ea' },
                            { gradient: 'from-yellow-400 to-orange-500', from: '#facc15', to: '#f97316' },
                            { gradient: 'from-green-400 to-blue-500', from: '#4ade80', to: '#3b82f6' },
                            { gradient: 'from-pink-400 to-red-500', from: '#f472b6', to: '#ef4444' },
                            { gradient: 'from-purple-400 to-pink-500', from: '#c084fc', to: '#ec4899' },
                            { gradient: 'from-indigo-400 to-blue-600', from: '#818cf8', to: '#2563eb' },
                            { gradient: 'from-emerald-400 to-teal-500', from: '#6ee7b7', to: '#14b8a6' },
                            { gradient: 'from-red-400 to-pink-500', from: '#f87171', to: '#ec4899' }
                          ].map((color) => (
                            <button
                              key={color.gradient}
                              onClick={() => handleInputChange('backgroundColor', color.gradient)}
                              className={`h-12 rounded-lg border-2 transition-all ${
                                badgeData.backgroundColor === color.gradient
                                  ? 'border-primary scale-105'
                                  : 'border-border hover:scale-105'
                              }`}
                              style={{
                                background: `linear-gradient(135deg, ${color.from}, ${color.to})`
                              }}
                            />
                          ))}
                        </div>
                      </div>

                      {/* Action Buttons */}
                      <div className="flex flex-col sm:flex-row gap-4">
                        <Button onClick={generateBadge} className="flex-1">
                          <Award className="w-4 h-4 mr-2" />
                          Generate Badge
                        </Button>
                        <Button variant="outline" onClick={randomizeBadge} className="flex-1">
                          <RefreshCw className="w-4 h-4 mr-2" />
                          Randomize
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>

              {/* Preview */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
                className="flex flex-col items-center"
              >
                <h2 className="text-2xl font-semibold text-foreground mb-6">Badge Preview</h2>
                
                <div className="relative">
                  {generatedBadge ? (
                    <div className="relative">
                      <img
                        src={generatedBadge}
                        alt="Generated Badge"
                        className="w-80 h-80 rounded-2xl shadow-2xl"
                      />
                      <div className="absolute -top-2 -right-2">
                        <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
                          <Award className="w-4 h-4 text-white" />
                        </div>
                      </div>
                    </div>
                  ) : (
                    <div className="w-80 h-80 rounded-2xl bg-teal-600 flex items-center justify-center shadow-2xl">
                      <div className="text-center text-white">
                        <Award className="w-16 h-16 mx-auto mb-4 opacity-50" />
                        <p className="text-lg font-medium">Generate your badge</p>
                        <p className="text-sm opacity-75">Fill the form and click generate</p>
                      </div>
                    </div>
                  )}
                </div>

                {generatedBadge && (
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="flex gap-4 mt-6"
                  >
                    <Button onClick={downloadBadge} className="flex items-center">
                      <Download className="w-4 h-4 mr-2" />
                      Download
                    </Button>
                    <Button variant="outline" onClick={shareBadge} className="flex items-center">
                      <Share2 className="w-4 h-4 mr-2" />
                      Share
                    </Button>
                  </motion.div>
                )}
              </motion.div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-16 md:py-20 bg-background">
          <div className="max-w-6xl mx-auto px-4 sm:px-6">
            <motion.div
              className="text-center mb-16"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl sm:text-4xl font-semibold text-foreground mb-4">Why Use Our Badge Generator?</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Create professional, personalized achievement badges that your team will love to receive and share.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  icon: <Award className="w-8 h-8 text-blue-500" />,
                  title: "Professional Design",
                  description: "Beautiful, high-quality badges that look professional and polished."
                },
                {
                  icon: <Palette className="w-8 h-8 text-purple-500" />,
                  title: "Customizable",
                  description: "Choose from multiple templates, colors, and styles to match your brand."
                },
                {
                  icon: <Download className="w-8 h-8 text-green-500" />,
                  title: "Easy Sharing",
                  description: "Download and share badges instantly across all your platforms."
                }
              ].map((feature, index) => (
                <motion.div
                  key={feature.title}
                  className="text-center p-6 rounded-xl bg-card border border-border"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="flex justify-center mb-4">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-3">{feature.title}</h3>
                  <p className="text-muted-foreground">{feature.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default AchievementBadgeGenerator;
