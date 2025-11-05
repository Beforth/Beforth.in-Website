import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Button } from '../components/ui/button';
import { Card } from '../components/ui/card';
import { NavLink } from '../components/ui/nav-link';
import { Footer } from '../components/ui/footer';
import { MobileMenu } from '../components/ui/mobile-menu';
import { ThemeProvider } from '../components/ui/theme-provider';
import { Logo } from '../components/ui/logo';
import { 
  Heart, 
  Copy, 
  Download, 
  Share2, 
  RefreshCw, 
  Sparkles,
  Users,
  Award,
  MessageCircle,
  Star,
  ThumbsUp,
  Zap
} from 'lucide-react';

const WorkplaceComplimentGenerator: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('general');
  const [selectedStyle, setSelectedStyle] = useState('professional');
  const [currentCompliment, setCurrentCompliment] = useState('');
  const [isGenerating, setIsGenerating] = useState(false);

  const complimentCategories = [
    { id: 'general', name: 'General', icon: Heart, count: 45 },
    { id: 'leadership', name: 'Leadership', icon: Award, count: 32 },
    { id: 'teamwork', name: 'Teamwork', icon: Users, count: 28 },
    { id: 'creativity', name: 'Creativity', icon: Sparkles, count: 25 },
    { id: 'communication', name: 'Communication', icon: MessageCircle, count: 30 },
    { id: 'problem-solving', name: 'Problem Solving', icon: Zap, count: 22 },
    { id: 'dedication', name: 'Dedication', icon: Star, count: 26 },
    { id: 'support', name: 'Support', icon: ThumbsUp, count: 24 }
  ];

  const complimentStyles = [
    { id: 'professional', name: 'Professional', gradient: 'from-blue-500 to-purple-600' },
    { id: 'friendly', name: 'Friendly', gradient: 'from-green-400 to-blue-500' },
    { id: 'warm', name: 'Warm', gradient: 'from-pink-400 to-red-500' },
    { id: 'energetic', name: 'Energetic', gradient: 'from-yellow-400 to-orange-500' },
    { id: 'elegant', name: 'Elegant', gradient: 'from-purple-400 to-pink-500' },
    { id: 'calm', name: 'Calm', gradient: 'from-emerald-400 to-teal-500' },
    { id: 'bold', name: 'Bold', gradient: 'from-indigo-400 to-blue-600' },
    { id: 'vibrant', name: 'Vibrant', gradient: 'from-red-400 to-pink-500' }
  ];

  const compliments = {
    general: [
      "Your positive attitude brightens everyone's day!",
      "You bring such great energy to our team!",
      "Your dedication to excellence is truly inspiring.",
      "You make the workplace a better place to be.",
      "Your professionalism sets a great example for everyone.",
      "You have an amazing ability to stay calm under pressure.",
      "Your attention to detail never goes unnoticed.",
      "You're always willing to help others succeed.",
      "Your work ethic is absolutely outstanding.",
      "You bring out the best in everyone around you.",
      "Your enthusiasm is contagious in the best way!",
      "You consistently go above and beyond expectations.",
      "Your reliability makes you invaluable to our team.",
      "You have a gift for making complex things seem simple.",
      "Your integrity shines through in everything you do.",
      "You're a true asset to our organization.",
      "Your collaborative spirit makes teamwork effortless.",
      "You handle challenges with grace and determination.",
      "Your innovative thinking pushes us all forward.",
      "You make everyone feel valued and appreciated.",
      "Your communication skills are exceptional.",
      "You bring fresh perspectives to every project.",
      "Your commitment to quality is unwavering.",
      "You're always the first to offer support.",
      "Your leadership qualities inspire confidence.",
      "You make difficult tasks look easy.",
      "Your patience with others is remarkable.",
      "You consistently deliver outstanding results.",
      "Your creativity adds so much value to our work.",
      "You're a natural problem-solver.",
      "Your positive influence extends far beyond your role.",
      "You make learning from mistakes look effortless.",
      "Your time management skills are impressive.",
      "You bring clarity to complex situations.",
      "Your mentorship has helped so many people grow.",
      "You're always looking for ways to improve processes.",
      "Your emotional intelligence is truly remarkable.",
      "You make diversity and inclusion feel natural.",
      "Your strategic thinking helps us stay ahead.",
      "You're a master at building strong relationships.",
      "Your adaptability in changing situations is admirable.",
      "You make everyone feel heard and understood.",
      "Your technical skills are matched only by your kindness.",
      "You're the kind of colleague everyone wants to work with.",
      "Your passion for your work is evident in everything you do."
    ],
    leadership: [
      "Your leadership style brings out the best in everyone.",
      "You have an incredible ability to inspire and motivate others.",
      "Your vision for the future is both clear and inspiring.",
      "You lead by example in everything you do.",
      "Your decision-making process is thoughtful and inclusive.",
      "You create an environment where everyone can thrive.",
      "Your mentorship has shaped many successful careers.",
      "You handle difficult conversations with grace and wisdom.",
      "Your strategic thinking guides us toward success.",
      "You empower others to reach their full potential.",
      "Your emotional intelligence makes you an exceptional leader.",
      "You balance high expectations with genuine care for your team.",
      "Your communication style builds trust and confidence.",
      "You're not afraid to make tough decisions when needed.",
      "Your ability to see potential in others is remarkable.",
      "You create psychological safety for honest feedback.",
      "Your leadership during challenging times has been exemplary.",
      "You consistently put the team's success above your own.",
      "Your coaching skills help others grow and develop.",
      "You foster a culture of continuous improvement.",
      "Your integrity as a leader sets the standard for others.",
      "You make complex strategies accessible to everyone.",
      "Your ability to navigate change is truly impressive.",
      "You recognize and celebrate others' contributions.",
      "Your leadership creates lasting positive impact.",
      "You balance being approachable with maintaining authority.",
      "Your conflict resolution skills are outstanding.",
      "You inspire others to take ownership of their work.",
      "Your leadership style adapts perfectly to different situations.",
      "You create opportunities for others to lead and grow.",
      "Your ability to build consensus is remarkable.",
      "You lead with both head and heart."
    ],
    teamwork: [
      "You're the glue that holds our team together!",
      "Your collaborative spirit makes every project better.",
      "You always put the team's success first.",
      "Your ability to work with different personalities is amazing.",
      "You make everyone feel included and valued.",
      "Your support for teammates never goes unnoticed.",
      "You're always the first to offer help when needed.",
      "Your positive attitude during group projects is infectious.",
      "You bring out the best in your teammates.",
      "Your communication keeps everyone aligned and informed.",
      "You're a natural at building team cohesion.",
      "Your flexibility in team dynamics is impressive.",
      "You make collaboration feel effortless and enjoyable.",
      "Your ability to mediate team conflicts is remarkable.",
      "You celebrate others' successes as if they were your own.",
      "Your team-first mentality inspires everyone around you.",
      "You create an environment where everyone can contribute.",
      "Your support during challenging team moments is invaluable.",
      "You're the teammate everyone wants to work with.",
      "Your ability to bring diverse perspectives together is outstanding.",
      "You make team meetings productive and engaging.",
      "Your encouragement helps teammates overcome obstacles.",
      "You're always willing to share knowledge and expertise.",
      "Your reliability makes you a cornerstone of our team.",
      "You foster a culture of mutual respect and support.",
      "Your ability to work across different teams is impressive.",
      "You make team goals feel achievable and exciting.",
      "Your collaborative approach leads to better outcomes.",
      "You're a master at building strong team relationships.",
      "Your team spirit is contagious in the best way!",
      "You make everyone feel like an important part of the team.",
      "Your ability to unite people around common goals is remarkable."
    ],
    creativity: [
      "Your creative solutions always surprise and delight us!",
      "You have an incredible ability to think outside the box.",
      "Your innovative ideas push our projects to new heights.",
      "You bring fresh perspectives that others might miss.",
      "Your creative process inspires everyone around you.",
      "You have a gift for turning constraints into opportunities.",
      "Your artistic vision enhances everything you touch.",
      "You're not afraid to try unconventional approaches.",
      "Your creative energy is absolutely infectious!",
      "You make innovation look effortless and natural.",
      "Your ability to connect seemingly unrelated ideas is brilliant.",
      "You inspire others to embrace their own creativity.",
      "Your creative problem-solving saves us time and resources.",
      "You have an eye for detail that elevates every project.",
      "Your creative leadership guides us toward breakthrough solutions.",
      "You make brainstorming sessions incredibly productive.",
      "Your creative confidence encourages others to take risks.",
      "You have a unique ability to see possibilities others don't.",
      "Your creative work consistently exceeds expectations.",
      "You bring color and life to everything you create.",
      "Your innovative thinking keeps us ahead of the competition.",
      "You make creativity feel accessible to everyone.",
      "Your creative solutions are both beautiful and functional.",
      "You inspire a culture of experimentation and innovation.",
      "Your creative process is fascinating to watch.",
      "You have an amazing ability to simplify complex creative concepts.",
      "Your creative contributions make our work stand out.",
      "You're a true creative force in our organization.",
      "Your ability to balance creativity with practicality is impressive.",
      "You make every project more interesting and engaging.",
      "Your creative vision helps us see what's possible.",
      "You're a master at turning ideas into reality."
    ],
    communication: [
      "Your communication skills make complex topics crystal clear!",
      "You have an amazing ability to explain things simply.",
      "Your presentations always engage and inform the audience.",
      "You're a master at active listening and understanding.",
      "Your written communication is clear, concise, and compelling.",
      "You make difficult conversations feel comfortable and productive.",
      "Your ability to adapt your communication style is impressive.",
      "You're excellent at reading the room and adjusting accordingly.",
      "Your communication builds bridges between different teams.",
      "You have a gift for making everyone feel heard and understood.",
      "Your communication style builds trust and confidence.",
      "You're skilled at translating technical concepts for any audience.",
      "Your feedback is always constructive and helpful.",
      "You make meetings more productive and engaging.",
      "Your ability to facilitate discussions is remarkable.",
      "You're excellent at managing expectations through clear communication.",
      "Your communication helps prevent misunderstandings.",
      "You have a talent for finding the right words for any situation.",
      "Your communication skills make you an effective leader.",
      "You're great at building rapport with diverse audiences.",
      "Your ability to communicate across cultures is impressive.",
      "You make complex projects feel manageable through clear communication.",
      "Your communication style is both professional and approachable.",
      "You're skilled at handling difficult communication challenges.",
      "Your ability to summarize and synthesize information is outstanding.",
      "You make remote communication feel personal and engaging.",
      "Your communication helps align everyone toward common goals.",
      "You're excellent at managing stakeholder communications.",
      "Your ability to communicate urgency without creating panic is remarkable.",
      "You make every interaction feel meaningful and productive.",
      "Your communication skills are a model for others to follow.",
      "You have a natural ability to connect with people through words."
    ],
    'problem-solving': [
      "Your problem-solving skills are absolutely outstanding!",
      "You have an incredible ability to break down complex issues.",
      "Your analytical thinking leads to innovative solutions.",
      "You approach problems with both logic and creativity.",
      "Your systematic approach to problem-solving is impressive.",
      "You're not afraid to tackle the most challenging problems.",
      "Your ability to identify root causes is remarkable.",
      "You make solving problems look effortless and enjoyable.",
      "Your problem-solving process is thorough and effective.",
      "You have a gift for finding elegant solutions to difficult problems.",
      "Your ability to think on your feet is truly impressive.",
      "You're excellent at considering multiple perspectives when solving problems.",
      "Your problem-solving skills save us time and resources.",
      "You make complex problems feel manageable and solvable.",
      "Your ability to learn from past problems prevents future issues.",
      "You're skilled at turning problems into opportunities.",
      "Your problem-solving approach inspires others to think differently.",
      "You have an amazing ability to simplify complex problem-solving processes.",
      "Your analytical skills help us make better decisions.",
      "You're excellent at troubleshooting and finding quick fixes.",
      "Your problem-solving mindset is contagious in the best way!",
      "You make every problem-solving session productive and engaging.",
      "Your ability to anticipate potential problems is remarkable.",
      "You're skilled at managing crisis situations with calm and clarity.",
      "Your problem-solving contributions make our work more efficient.",
      "You have a talent for finding creative workarounds.",
      "Your systematic approach to problem-solving is a model for others.",
      "You make solving problems feel like a collaborative adventure.",
      "Your ability to explain your problem-solving process is impressive.",
      "You're excellent at learning from both successes and failures.",
      "Your problem-solving skills are a true asset to our team.",
      "You have a natural ability to see solutions others might miss."
    ],
    dedication: [
      "Your dedication to your work is truly inspiring!",
      "You consistently go above and beyond what's expected.",
      "Your commitment to excellence never wavers.",
      "You have an incredible work ethic that motivates others.",
      "Your dedication to continuous improvement is remarkable.",
      "You're always willing to put in the extra effort.",
      "Your commitment to quality is unwavering.",
      "You approach every task with dedication and care.",
      "Your perseverance through challenges is admirable.",
      "You have a strong sense of responsibility that others respect.",
      "Your dedication to learning and growing is impressive.",
      "You're committed to delivering the best possible results.",
      "Your dedication to our team's success is evident in everything you do.",
      "You have an amazing ability to stay focused on long-term goals.",
      "Your commitment to our organization's mission is inspiring.",
      "You're dedicated to making a positive impact in your role.",
      "Your work ethic sets a high standard for everyone.",
      "You have a deep commitment to professional development.",
      "Your dedication to customer satisfaction is outstanding.",
      "You're committed to maintaining high standards in everything you do.",
      "Your dedication to innovation drives our team forward.",
      "You have an incredible ability to stay motivated through difficult times.",
      "Your commitment to collaboration makes our team stronger.",
      "You're dedicated to finding better ways to do things.",
      "Your work ethic inspires others to raise their own standards.",
      "You have a strong commitment to ethical practices.",
      "Your dedication to mentoring others is remarkable.",
      "You're committed to creating a positive work environment.",
      "Your dedication to our shared goals is unwavering.",
      "You have an amazing ability to balance dedication with work-life balance.",
      "Your commitment to excellence makes you a role model for others.",
      "You're dedicated to making our organization the best it can be."
    ],
    support: [
      "Your support for your colleagues never goes unnoticed!",
      "You're always the first to offer help when someone needs it.",
      "Your encouragement helps others overcome their challenges.",
      "You have an amazing ability to lift others up when they're down.",
      "Your support creates a positive and inclusive work environment.",
      "You're excellent at recognizing when others need assistance.",
      "Your supportive nature makes everyone feel valued and appreciated.",
      "You have a gift for providing just the right kind of support.",
      "Your encouragement helps others build confidence in their abilities.",
      "You're always willing to share your knowledge and expertise.",
      "Your support during difficult times is invaluable.",
      "You have an incredible ability to be there for others.",
      "Your supportive attitude creates psychological safety for everyone.",
      "You're excellent at celebrating others' successes.",
      "Your support helps others grow and develop professionally.",
      "You have a natural ability to provide emotional support.",
      "Your encouragement helps others take on new challenges.",
      "You're always ready to lend a helping hand.",
      "Your support makes the workplace feel like a community.",
      "You have an amazing ability to provide constructive feedback.",
      "Your supportive leadership style inspires others to do the same.",
      "You're excellent at creating a culture of mutual support.",
      "Your encouragement helps others believe in themselves.",
      "You have a gift for making others feel heard and understood.",
      "Your support during transitions and changes is remarkable.",
      "You're always willing to go the extra mile to help others.",
      "Your supportive nature makes you a trusted colleague.",
      "You have an incredible ability to provide practical support.",
      "Your encouragement helps others reach their full potential.",
      "You're excellent at building a supportive team environment.",
      "Your support makes a real difference in people's work lives.",
      "You have a natural ability to be a source of strength for others."
    ]
  };

  const generateCompliment = () => {
    setIsGenerating(true);
    
    setTimeout(() => {
      const categoryCompliments = compliments[selectedCategory as keyof typeof compliments];
      const randomCompliment = categoryCompliments[Math.floor(Math.random() * categoryCompliments.length)];
      setCurrentCompliment(randomCompliment);
      setIsGenerating(false);
    }, 800);
  };

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(currentCompliment);
      // You could add a toast notification here
    } catch (err) {
      console.error('Failed to copy: ', err);
    }
  };

  const shareCompliment = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: 'Workplace Compliment',
          text: currentCompliment,
        });
      } catch (err) {
        console.error('Error sharing: ', err);
      }
    } else {
      copyToClipboard();
    }
  };

  const downloadCompliment = () => {
    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d');
    
    if (!ctx) return;

    canvas.width = 800;
    canvas.height = 600;

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

    const selectedStyleData = complimentStyles.find(s => s.id === selectedStyle);
    const colors = selectedStyleData ? colorMap[selectedStyleData.gradient] : { from: '#3b82f6', to: '#9333ea' };

    // Create gradient background
    const gradient = ctx.createLinearGradient(0, 0, canvas.width, canvas.height);
    gradient.addColorStop(0, colors.from);
    gradient.addColorStop(1, colors.to);
    
    ctx.fillStyle = gradient;
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    // Add decorative elements
    ctx.fillStyle = 'rgba(255, 255, 255, 0.1)';
    for (let i = 0; i < 20; i++) {
      ctx.beginPath();
      ctx.arc(
        Math.random() * canvas.width,
        Math.random() * canvas.height,
        Math.random() * 3 + 1,
        0,
        Math.PI * 2
      );
      ctx.fill();
    }

    // Add main text
    ctx.fillStyle = 'rgba(255, 255, 255, 0.95)';
    ctx.font = 'bold 32px Arial';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    
    // Word wrap function
    const words = currentCompliment.split(' ');
    const lines = [];
    let currentLine = words[0];

    for (let i = 1; i < words.length; i++) {
      const word = words[i];
      const width = ctx.measureText(currentLine + ' ' + word).width;
      if (width < canvas.width - 100) {
        currentLine += ' ' + word;
      } else {
        lines.push(currentLine);
        currentLine = word;
      }
    }
    lines.push(currentLine);

    // Draw text lines
    const lineHeight = 40;
    const startY = canvas.height / 2 - (lines.length - 1) * lineHeight / 2;
    
    lines.forEach((line, index) => {
      ctx.fillText(line, canvas.width / 2, startY + index * lineHeight);
    });

    // Add decorative quote marks
    ctx.font = 'bold 48px Arial';
    ctx.fillStyle = 'rgba(255, 255, 255, 0.3)';
    ctx.fillText('"', 100, 150);
    ctx.fillText('"', canvas.width - 100, canvas.height - 100);

    // Add footer
    ctx.font = '16px Arial';
    ctx.fillStyle = 'rgba(255, 255, 255, 0.7)';
    ctx.fillText('Generated by Beforth.in', canvas.width / 2, canvas.height - 30);

    // Download
    const link = document.createElement('a');
    link.download = 'workplace-compliment.png';
    link.href = canvas.toDataURL();
    link.click();
  };

  useEffect(() => {
    generateCompliment();
  }, []);

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
                  <Button size="sm">Get Started</Button>
                </motion.div>
              </div>

              {/* Mobile Menu */}
              <MobileMenu navItems={navItems} />
            </div>
          </div>
        </header>

        {/* Hero Section */}
        <section className="pt-24 pb-20 px-4">
        <div className="container mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex justify-center mb-6">
              <div className="p-3 rounded-full bg-primary/10">
                <Heart className="h-8 w-8 text-primary" />
              </div>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Workplace Compliment Generator
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Spread positivity and appreciation in your workplace with personalized compliments. 
              Generate heartfelt messages to recognize and celebrate your colleagues' amazing work!
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-12 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="grid lg:grid-cols-2 gap-8">
            {/* Controls */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <Card className="p-6">
                <h2 className="text-2xl font-bold mb-6">Customize Your Compliment</h2>
                
                {/* Category Selection */}
                <div className="mb-6">
                  <label className="block text-sm font-medium text-foreground mb-4">Compliment Category</label>
                  <div className="grid grid-cols-2 gap-3">
                    {complimentCategories.map((category) => (
                      <button
                        key={category.id}
                        onClick={() => setSelectedCategory(category.id)}
                        className={`p-4 rounded-lg border-2 transition-all text-left ${
                          selectedCategory === category.id
                            ? 'border-primary bg-primary/5 scale-105'
                            : 'border-border hover:scale-105'
                        }`}
                      >
                        <div className="flex items-center justify-between">
                          <div className="flex items-center">
                            <category.icon className="h-5 w-5 text-primary mr-3" />
                            <span className="font-medium">{category.name}</span>
                          </div>
                          <span className="text-sm text-muted-foreground">{category.count}</span>
                        </div>
                      </button>
                    ))}
                  </div>
                </div>

                {/* Style Selection */}
                <div className="mb-6">
                  <label className="block text-sm font-medium text-foreground mb-4">Compliment Style</label>
                  <div className="grid grid-cols-2 gap-3">
                    {complimentStyles.map((style, index) => {
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
                          onClick={() => setSelectedStyle(style.id)}
                          className={`p-3 rounded-lg border-2 transition-all ${
                            selectedStyle === style.id
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
                  <Button onClick={generateCompliment} className="flex-1" disabled={isGenerating}>
                    <RefreshCw className={`w-4 h-4 mr-2 ${isGenerating ? 'animate-spin' : ''}`} />
                    {isGenerating ? 'Generating...' : 'Generate Compliment'}
                  </Button>
                </div>
              </Card>
            </motion.div>

            {/* Compliment Display */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <Card className="p-8 h-full">
                <div className="text-center mb-6">
                  <h3 className="text-xl font-semibold mb-2">Your Workplace Compliment</h3>
                  <p className="text-sm text-muted-foreground">
                    {complimentCategories.find(c => c.id === selectedCategory)?.name} • {complimentStyles.find(s => s.id === selectedStyle)?.name}
                  </p>
                </div>

                <div className="bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg p-8 mb-6 min-h-[200px] flex items-center justify-center relative overflow-hidden">
                  {/* Background decoration */}
                  <div className="absolute inset-0 opacity-10">
                    <div className="absolute top-4 left-4 w-8 h-8 border-2 border-white rounded-full"></div>
                    <div className="absolute top-8 right-8 w-4 h-4 bg-white rounded-full"></div>
                    <div className="absolute bottom-8 left-8 w-6 h-6 border-2 border-white rounded-full"></div>
                    <div className="absolute bottom-4 right-4 w-3 h-3 bg-white rounded-full"></div>
                  </div>
                  
                  <div className="relative z-10 text-center">
                    <div className="text-6xl mb-4 opacity-30">💝</div>
                    <p className="text-white text-lg font-medium leading-relaxed">
                      {currentCompliment || "Click 'Generate Compliment' to create your first compliment!"}
                    </p>
                  </div>
                </div>

                {/* Action Buttons */}
                {currentCompliment && (
                  <div className="flex flex-col sm:flex-row gap-3">
                    <Button onClick={copyToClipboard} variant="outline" className="flex-1">
                      <Copy className="w-4 h-4 mr-2" />
                      Copy Text
                    </Button>
                    <Button onClick={shareCompliment} variant="outline" className="flex-1">
                      <Share2 className="w-4 h-4 mr-2" />
                      Share
                    </Button>
                    <Button onClick={downloadCompliment} className="flex-1">
                      <Download className="w-4 h-4 mr-2" />
                      Download
                    </Button>
                  </div>
                )}
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-4 bg-muted/30">
        <div className="container mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold mb-4">Why Use Our Compliment Generator?</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Create meaningful connections and boost workplace morale with our carefully crafted compliments.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: Heart,
                title: "Heartfelt Messages",
                description: "Carefully crafted compliments that feel genuine and meaningful, not generic or robotic."
              },
              {
                icon: Users,
                title: "Team Building",
                description: "Strengthen relationships and create a more positive, collaborative work environment."
              },
              {
                icon: Award,
                title: "Recognition",
                description: "Acknowledge hard work, dedication, and achievements in a thoughtful, personalized way."
              }
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="p-4 rounded-full bg-primary/10 w-fit mx-auto mb-4">
                  <feature.icon className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
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
};

export default WorkplaceComplimentGenerator;
