import { useState } from 'react';
import { motion } from 'framer-motion';
import { RefreshCw, Share2, Download, Copy, Quote, Heart, Zap, Target, Users, Lightbulb, Coffee, Laptop, Calendar, Clock, TrendingUp } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Card, CardContent } from '../components/ui/card';
import { MobileMenu } from '../components/ui/mobile-menu';
import { ThemeProvider } from '../components/ui/theme-provider';
import { Logo } from '../components/ui/logo';
import { NavLink } from '../components/ui/nav-link';
import { Footer } from '../components/ui/footer';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const navItems = [
  { name: "Home", link: "/" },
  { name: "Services", link: "/services" },
  { name: "About", link: "/about" },
  { name: "Team", link: "/team" },
  // { name: "Blog", link: "/blog" },
  { name: "Careers", link: "/careers" },
  { name: "Contact", link: "/contact" },
];

const quoteCategories = [
  { id: 'motivational', name: 'Motivational', icon: TrendingUp, color: 'from-green-400 to-blue-500' },
  { id: 'funny', name: 'Funny', icon: Heart, color: 'from-pink-400 to-red-500' },
  { id: 'productivity', name: 'Productivity', icon: Target, color: 'from-blue-400 to-purple-500' },
  { id: 'teamwork', name: 'Teamwork', icon: Users, color: 'from-yellow-400 to-orange-500' },
  { id: 'innovation', name: 'Innovation', icon: Lightbulb, color: 'from-purple-400 to-pink-500' },
  { id: 'coffee', name: 'Coffee', icon: Coffee, color: 'from-amber-400 to-orange-500' },
  { id: 'tech', name: 'Tech', icon: Laptop, color: 'from-indigo-400 to-blue-600' },
  { id: 'time', name: 'Time Management', icon: Clock, color: 'from-emerald-400 to-teal-500' }
];

const quotes = {
  motivational: [
    "Success is not final, failure is not fatal: it is the courage to continue that counts.",
    "The only way to do great work is to love what you do.",
    "Innovation distinguishes between a leader and a follower.",
    "Your limitation—it's only your imagination.",
    "Great things never come from comfort zones.",
    "Dream it. Wish it. Do it.",
    "Success doesn't just find you. You have to go out and get it.",
    "The harder you work for something, the greater you'll feel when you achieve it.",
    "Dream bigger. Do bigger.",
    "Don't stop when you're tired. Stop when you're done."
  ],
  funny: [
    "I'm not lazy, I'm on energy-saving mode.",
    "I don't have a problem with authority. I have a problem with you.",
    "I'm not arguing, I'm just explaining why I'm right.",
    "I'm not procrastinating, I'm prioritizing my tasks in order of importance.",
    "I'm not late, I'm just operating on a different time zone.",
    "I'm not avoiding work, I'm just being strategically unproductive.",
    "I'm not being difficult, I'm just being thorough.",
    "I'm not overthinking, I'm just thinking ahead.",
    "I'm not being dramatic, I'm just being accurate.",
    "I'm not being negative, I'm just being realistic."
  ],
  productivity: [
    "Focus on being productive instead of busy.",
    "The key is not to prioritize what's on your schedule, but to schedule your priorities.",
    "Productivity is never an accident. It is always the result of a commitment to excellence.",
    "Don't count the days, make the days count.",
    "The way to get started is to quit talking and begin doing.",
    "Success is the sum of small efforts repeated day in and day out.",
    "The secret of getting ahead is getting started.",
    "You don't have to be great to get started, but you have to get started to be great.",
    "The future depends on what you do today.",
    "Do something today that your future self will thank you for."
  ],
  teamwork: [
    "Alone we can do so little; together we can do so much.",
    "Teamwork makes the dream work.",
    "Coming together is a beginning; keeping together is progress; working together is success.",
    "The strength of the team is each individual member. The strength of each member is the team.",
    "Great things in business are never done by one person. They're done by a team of people.",
    "If everyone is moving forward together, then success takes care of itself.",
    "The way a team plays as a whole determines its success.",
    "Individual commitment to a group effort - that is what makes a team work.",
    "None of us is as smart as all of us.",
    "A team is not a group of people who work together. A team is a group of people who trust each other."
  ],
  innovation: [
    "Innovation distinguishes between a leader and a follower.",
    "The way to get started is to quit talking and begin doing.",
    "Innovation is the ability to see change as an opportunity - not a threat.",
    "The only way to discover the limits of the possible is to go beyond them into the impossible.",
    "Innovation is taking two things that exist and putting them together in a new way.",
    "The future belongs to those who see possibilities before they become obvious.",
    "Innovation is the specific instrument of entrepreneurship.",
    "The best way to predict the future is to invent it.",
    "Innovation is not about saying yes to everything. It's about saying no to all but the most crucial features.",
    "The only impossible journey is the one you never begin."
  ],
  coffee: [
    "Coffee: because adulting is hard.",
    "I don't have a problem with caffeine. I have a problem without it.",
    "Coffee is a language in itself.",
    "Behind every successful person is a substantial amount of coffee.",
    "Coffee is always a good idea.",
    "I like my coffee like I like my meetings: short and to the point.",
    "Coffee first, then we can talk.",
    "Life happens, coffee helps.",
    "Coffee: the solution to and cause of all life's problems.",
    "I can't adult today. I need more coffee."
  ],
  tech: [
    "The best error message is the one that never shows up.",
    "Code is like humor. When you have to explain it, it's bad.",
    "First, solve the problem. Then, write the code.",
    "The best way to get a project done faster is to start sooner.",
    "It's not a bug; it's an undocumented feature.",
    "The computer is a moron.",
    "There are only two hard things in Computer Science: cache invalidation and naming things.",
    "It works on my machine.",
    "The best code is no code at all.",
    "Premature optimization is the root of all evil."
  ],
  time: [
    "Time is what we want most, but what we use worst.",
    "The bad news is time flies. The good news is you're the pilot.",
    "Don't watch the clock; do what it does. Keep going.",
    "Time is a created thing. To say 'I don't have time,' is like saying, 'I don't want to.'",
    "The key is in not spending time, but in investing it.",
    "Time is the most valuable thing a man can spend.",
    "You may delay, but time will not.",
    "Lost time is never found again.",
    "Time is the wisest counselor of all.",
    "The future is something which everyone reaches at the rate of 60 minutes an hour."
  ]
};

const backgroundStyles = [
  { name: 'Gradient Blue', gradient: 'from-blue-500 to-purple-600', textColor: 'white' },
  { name: 'Gradient Green', gradient: 'from-green-400 to-blue-500', textColor: 'white' },
  { name: 'Gradient Pink', gradient: 'from-pink-400 to-red-500', textColor: 'white' },
  { name: 'Gradient Orange', gradient: 'from-yellow-400 to-orange-500', textColor: 'white' },
  { name: 'Gradient Purple', gradient: 'from-purple-400 to-pink-500', textColor: 'white' },
  { name: 'Gradient Teal', gradient: 'from-emerald-400 to-teal-500', textColor: 'white' },
  { name: 'Gradient Indigo', gradient: 'from-indigo-400 to-blue-600', textColor: 'white' },
  { name: 'Gradient Red', gradient: 'from-red-400 to-pink-500', textColor: 'white' }
];

function OfficeQuoteGenerator() {
  const [selectedCategory, setSelectedCategory] = useState('motivational');
  const [currentQuote, setCurrentQuote] = useState('');
  const [selectedStyle, setSelectedStyle] = useState(backgroundStyles[0]);
  const [generatedQuote, setGeneratedQuote] = useState<string | null>(null);

  const generateQuote = () => {
    const categoryQuotes = quotes[selectedCategory as keyof typeof quotes];
    const randomQuote = categoryQuotes[Math.floor(Math.random() * categoryQuotes.length)];
    setCurrentQuote(randomQuote);
    setGeneratedQuote(randomQuote);
  };

  const generateRandomQuote = () => {
    const allCategories = Object.keys(quotes);
    const randomCategory = allCategories[Math.floor(Math.random() * allCategories.length)];
    const categoryQuotes = quotes[randomCategory as keyof typeof quotes];
    const randomQuote = categoryQuotes[Math.floor(Math.random() * categoryQuotes.length)];
    setCurrentQuote(randomQuote);
    setGeneratedQuote(randomQuote);
    setSelectedCategory(randomCategory);
  };

  const copyQuote = () => {
    if (currentQuote) {
      navigator.clipboard.writeText(currentQuote);
      toast.success('Quote copied to clipboard!');
    }
  };

  const shareQuote = async () => {
    if (currentQuote) {
      if (navigator.share) {
        try {
          await navigator.share({
            title: 'Office Quote',
            text: currentQuote,
            url: window.location.href
          });
        } catch (err) {
          console.log('Error sharing:', err);
        }
      } else {
        navigator.clipboard.writeText(`${currentQuote}\n\nShared from Beforth Office Quote Generator`);
        toast.success('Quote copied to clipboard!');
      }
    }
  };

  const downloadQuote = () => {
    if (!currentQuote) return;
    
    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    canvas.width = 800;
    canvas.height = 600;

    // Create gradient background
    const gradient = ctx.createLinearGradient(0, 0, 800, 600);
    const colorMap: { [key: string]: { from: string; to: string } } = {
      'from-blue-500 to-purple-600': { from: '#3b82f6', to: '#9333ea' },
      'from-green-400 to-blue-500': { from: '#4ade80', to: '#3b82f6' },
      'from-pink-400 to-red-500': { from: '#f472b6', to: '#ef4444' },
      'from-yellow-400 to-orange-500': { from: '#facc15', to: '#f97316' },
      'from-purple-400 to-pink-500': { from: '#c084fc', to: '#ec4899' },
      'from-emerald-400 to-teal-500': { from: '#6ee7b7', to: '#14b8a6' },
      'from-indigo-400 to-blue-600': { from: '#818cf8', to: '#2563eb' },
      'from-red-400 to-pink-500': { from: '#f87171', to: '#ec4899' }
    };
    
    const colors = colorMap[selectedStyle.gradient] || { from: '#3b82f6', to: '#9333ea' };
    gradient.addColorStop(0, colors.from);
    gradient.addColorStop(1, colors.to);

    // Draw background
    ctx.fillStyle = gradient;
    ctx.fillRect(0, 0, 800, 600);

    // Draw quote
    ctx.fillStyle = selectedStyle.textColor;
    ctx.textAlign = 'center';
    ctx.font = 'bold 32px Arial';
    
    // Word wrap function
    const words = currentQuote.split(' ');
    const lines = [];
    let currentLine = words[0];
    
    for (let i = 1; i < words.length; i++) {
      const word = words[i];
      const width = ctx.measureText(currentLine + ' ' + word).width;
      if (width < 700) {
        currentLine += ' ' + word;
      } else {
        lines.push(currentLine);
        currentLine = word;
      }
    }
    lines.push(currentLine);

    // Draw lines
    const lineHeight = 40;
    const startY = 300 - (lines.length * lineHeight) / 2;
    
    lines.forEach((line, index) => {
      ctx.fillText(line, 400, startY + index * lineHeight);
    });

    // Draw quote marks
    ctx.font = 'bold 48px Arial';
    ctx.fillText('"', 100, 200);
    ctx.fillText('"', 700, 500);

    // Draw company name
    ctx.font = '24px Arial';
    ctx.fillText('Beforth', 400, 550);

    // Download
    const link = document.createElement('a');
    link.download = `office-quote-${Date.now()}.png`;
    link.href = canvas.toDataURL();
    link.click();
  };

  return (
    <ThemeProvider attribute="class" defaultTheme="light" enableSystem>
      <div className="min-h-screen bg-background">
        <ToastContainer />
        
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
              Office <br />
              <span className="font-semibold text-teal-600">Quote Generator</span>
            </motion.h1>
            
            <motion.p 
              className="text-lg sm:text-xl md:text-2xl font-light text-muted-foreground max-w-3xl mx-auto mb-8 md:mb-12 leading-relaxed px-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Generate funny, motivational, and inspirational office quotes. 
              Perfect for team meetings, social media, or just brightening someone's day.
            </motion.p>
          </div>
        </section>

        {/* Generator Section */}
        <section className="py-16 md:py-20 bg-muted/30">
          <div className="max-w-6xl mx-auto px-4 sm:px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Controls */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <Card className="border-0 shadow-none bg-transparent">
                  <CardContent className="p-0">
                    <h2 className="text-2xl font-semibold text-foreground mb-6">Customize Your Quote</h2>
                    
                    <div className="space-y-6">
                      {/* Category Selection */}
                      <div>
                        <label className="block text-sm font-medium text-foreground mb-4">Quote Category</label>
                        <div className="grid grid-cols-2 gap-3">
                          {quoteCategories.map((category) => (
                            <button
                              key={category.id}
                              onClick={() => setSelectedCategory(category.id)}
                              className={`p-4 rounded-lg border-2 transition-all ${
                                selectedCategory === category.id
                                  ? 'border-primary bg-primary/10'
                                  : 'border-border hover:border-primary/50'
                              }`}
                            >
                              <category.icon className={`w-6 h-6 mx-auto mb-2 ${
                                selectedCategory === category.id ? 'text-primary' : 'text-muted-foreground'
                              }`} />
                              <span className="text-sm text-center block">{category.name}</span>
                            </button>
                          ))}
                        </div>
                      </div>

                      {/* Background Style */}
                      <div>
                        <label className="block text-sm font-medium text-foreground mb-4">Background Style</label>
                        <div className="grid grid-cols-2 gap-3">
                          {backgroundStyles.map((style, index) => {
                            // Map gradient strings to actual hex colors
                            const colorMap: { [key: string]: { from: string; to: string } } = {
                              'from-blue-500 to-purple-600': { from: '#3b82f6', to: '#9333ea' },
                              'from-green-400 to-blue-500': { from: '#4ade80', to: '#3b82f6' },
                              'from-pink-400 to-red-500': { from: '#f472b6', to: '#ef4444' },
                              'from-yellow-400 to-orange-500': { from: '#facc15', to: '#f97316' },
                              'from-purple-400 to-pink-500': { from: '#c084fc', to: '#ec4899' },
                              'from-emerald-400 to-teal-500': { from: '#6ee7b7', to: '#14b8a6' },
                              'from-indigo-400 to-blue-600': { from: '#818cf8', to: '#2563eb' },
                              'from-red-400 to-pink-500': { from: '#f87171', to: '#ec4899' }
                            };
                            
                            const colors = colorMap[style.gradient] || { from: '#3b82f6', to: '#9333ea' };
                            
                            return (
                              <button
                                key={index}
                                onClick={() => setSelectedStyle(style)}
                                className={`p-3 rounded-lg border-2 transition-all ${
                                  selectedStyle.gradient === style.gradient
                                    ? 'border-primary scale-105'
                                    : 'border-border hover:scale-105'
                                }`}
                                style={{
                                  background: `linear-gradient(135deg, ${colors.from}, ${colors.to})`
                                }}
                              >
                                <span className="text-xs text-center block text-white font-medium">{style.name}</span>
                              </button>
                            );
                          })}
                        </div>
                      </div>

                      {/* Action Buttons */}
                      <div className="flex flex-col sm:flex-row gap-4">
                        <Button onClick={generateQuote} className="flex-1">
                          <Quote className="w-4 h-4 mr-2" />
                          Generate Quote
                        </Button>
                        <Button variant="outline" onClick={generateRandomQuote} className="flex-1">
                          <RefreshCw className="w-4 h-4 mr-2" />
                          Random Quote
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>

              {/* Quote Display */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
                className="flex flex-col items-center"
              >
                <h2 className="text-2xl font-semibold text-foreground mb-6">Your Quote</h2>
                
                <div className="relative w-full max-w-lg">
                  {currentQuote ? (
                    <motion.div
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.5 }}
                      className={`p-8 rounded-2xl text-center shadow-2xl bg-gradient-to-br ${selectedStyle.gradient}`}
                    >
                      <Quote className="w-8 h-8 text-white/70 mb-4 mx-auto" />
                      <p className="text-white text-xl font-medium leading-relaxed mb-4">
                        "{currentQuote}"
                      </p>
                      <div className="text-white/70 text-sm">
                        Generated by Beforth
                      </div>
                    </motion.div>
                  ) : (
                    <div className="p-8 rounded-2xl text-center shadow-2xl bg-stone-100 dark:bg-stone-800">
                      <Quote className="w-12 h-12 text-muted-foreground mb-4 mx-auto" />
                      <p className="text-muted-foreground text-lg">
                        Click "Generate Quote" to create your first quote
                      </p>
                    </div>
                  )}
                </div>

                {currentQuote && (
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="flex gap-4 mt-6"
                  >
                    <Button onClick={copyQuote} variant="outline" className="flex items-center">
                      <Copy className="w-4 h-4 mr-2" />
                      Copy
                    </Button>
                    <Button onClick={shareQuote} variant="outline" className="flex items-center">
                      <Share2 className="w-4 h-4 mr-2" />
                      Share
                    </Button>
                    <Button onClick={downloadQuote} className="flex items-center">
                      <Download className="w-4 h-4 mr-2" />
                      Download
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
              <h2 className="text-3xl sm:text-4xl font-semibold text-foreground mb-4">Why Use Our Quote Generator?</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Create engaging, shareable content that resonates with your team and audience.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  icon: <Quote className="w-8 h-8 text-blue-500" />,
                  title: "8 Categories",
                  description: "From motivational to funny, find the perfect quote for any situation."
                },
                {
                  icon: <Zap className="w-8 h-8 text-purple-500" />,
                  title: "Instant Generation",
                  description: "Generate quotes instantly with just one click. No waiting, no hassle."
                },
                {
                  icon: <Share2 className="w-8 h-8 text-green-500" />,
                  title: "Easy Sharing",
                  description: "Copy, share, or download quotes in beautiful formats for any platform."
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

export default OfficeQuoteGenerator;
