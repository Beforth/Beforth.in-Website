import { useState } from 'react';
import { motion } from 'framer-motion';
import { Calendar, Clock, ArrowRight, Search } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { Button } from '../components/ui/button';
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
  { name: "Careers", link: "/careers" },
  { name: "Contact", link: "/contact" },
];

const blogCategories = [
  { name: "All", count: 24, active: true },
  { name: "HRMS", count: 8, active: false },
  { name: "CRM Solutions", count: 6, active: false },
  { name: "Implementation", count: 5, active: false },
  { name: "Open Source", count: 3, active: false },
  { name: "Business", count: 2, active: false },
];

const featuredArticle = {
  id: 1,
  title: "Complete Guide to HRMS Implementation: Best Practices and Common Pitfalls",
  excerpt: "Learn the essential steps for successful HRMS implementation, from planning and setup to go-live and optimization. Avoid common mistakes and ensure a smooth transition.",
  author: "Sarah Johnson",
  authorRole: "Senior Implementation Specialist",
  authorAvatar: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=800",
  publishDate: "2025-01-15",
  readTime: "12 min read",
  category: "HRMS",
  image: "https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=1200",
  featured: true,
  tags: ["HRMS", "Implementation", "Best Practices"]
};

const blogArticles = [
  {
    id: 2,
    title: "Why Open Source Solutions are the Future of Business Management",
    excerpt: "Discover how open-source HRMS and CRM solutions are revolutionizing business management with cost-effective, customizable, and scalable platforms.",
    author: "David Lee",
    authorRole: "Lead CRM Consultant",
    authorAvatar: "https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=800",
    publishDate: "2025-01-12",
    readTime: "8 min read",
    category: "Open Source",
    image: "https://images.pexels.com/photos/1181396/pexels-photo-1181396.jpeg?auto=compress&cs=tinysrgb&w=1200",
    featured: false,
    tags: ["Open Source", "HRMS", "Business Management"]
  },
  {
    id: 3,
    title: "Streamlining Payroll Management with HRMS: A Case Study",
    excerpt: "How we helped a manufacturing company reduce payroll processing time by 70% using our advanced HRMS payroll management features.",
    author: "Jane Smith",
    authorRole: "HR Solutions Expert",
    authorAvatar: "https://images.pexels.com/photos/1065084/pexels-photo-1065084.jpeg?auto=compress&cs=tinysrgb&w=800",
    publishDate: "2025-01-10",
    readTime: "6 min read",
    category: "Implementation",
    image: "https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=1200",
    featured: false,
    tags: ["Payroll", "Case Study", "Manufacturing"]
  },
  {
    id: 4,
    title: "Building Custom CRM Workflows with 4form",
    excerpt: "Learn how to create powerful, custom CRM workflows that adapt to your business processes using 4form's flexible platform.",
    author: "Mike Chen",
    authorRole: "Integration Architect",
    authorAvatar: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=800",
    publishDate: "2025-01-08",
    readTime: "10 min read",
    category: "CRM Solutions",
    image: "https://images.pexels.com/photos/1181396/pexels-photo-1181396.jpeg?auto=compress&cs=tinysrgb&w=1200",
    featured: false,
    tags: ["CRM", "Workflows", "Customization", "4form"]
  },
  {
    id: 5,
    title: "The ROI of Switching to Open Source HRMS: A Financial Analysis",
    excerpt: "A detailed financial analysis showing how businesses can save up to 60% on HRMS costs while gaining more flexibility with open-source solutions.",
    author: "Sarah Johnson",
    authorRole: "Senior Implementation Specialist",
    authorAvatar: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=800",
    publishDate: "2025-01-05",
    readTime: "7 min read",
    category: "Business",
    image: "https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=1200",
    featured: false,
    tags: ["ROI", "Cost Analysis", "Open Source", "HRMS"]
  },
  {
    id: 6,
    title: "Open Source vs. Traditional HRMS: A Comprehensive Comparison",
    excerpt: "Compare open-source HRMS with traditional solutions across key metrics including cost, flexibility, customization, and implementation time.",
    author: "David Lee",
    authorRole: "Lead CRM Consultant",
    authorAvatar: "https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=800",
    publishDate: "2025-01-03",
    readTime: "9 min read",
    category: "HRMS",
    image: "https://images.pexels.com/photos/1181396/pexels-photo-1181396.jpeg?auto=compress&cs=tinysrgb&w=1200",
    featured: false,
    tags: ["Comparison", "HRMS", "Open Source", "Analysis"]
  },
  {
    id: 7,
    title: "Integrating HRMS and 4form CRM with Third-Party Applications: Best Practices",
    excerpt: "Learn how to seamlessly integrate our HRMS and 4form CRM with your existing business applications and tools for a unified workflow experience.",
    author: "Mike Chen",
    authorRole: "Integration Architect",
    authorAvatar: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=800",
    publishDate: "2025-01-01",
    readTime: "11 min read",
    category: "Implementation",
    image: "https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=1200",
    featured: false,
    tags: ["Integration", "Third-Party", "APIs", "Best Practices"]
  }
];


function BlogPage() {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [filteredArticles, setFilteredArticles] = useState(blogArticles);

  const handleSearch = (query: string) => {
    setSearchQuery(query);
    if (query === '') {
      setFilteredArticles(blogArticles);
    } else {
      const filtered = blogArticles.filter(article =>
        article.title.toLowerCase().includes(query.toLowerCase()) ||
        article.excerpt.toLowerCase().includes(query.toLowerCase()) ||
        article.tags.some(tag => tag.toLowerCase().includes(query.toLowerCase()))
      );
      setFilteredArticles(filtered);
    }
  };

  const handleCategoryFilter = (category: string) => {
    setSelectedCategory(category);
    if (category === 'All') {
      setFilteredArticles(blogArticles);
    } else {
      const filtered = blogArticles.filter(article => article.category === category);
      setFilteredArticles(filtered);
    }
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
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
              Blog & <br />
              <span className="font-semibold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">News</span>
            </motion.h1>
            
            <motion.p 
              className="text-lg sm:text-xl md:text-2xl font-light text-muted-foreground max-w-3xl mx-auto mb-8 md:mb-12 leading-relaxed px-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Stay updated with the latest insights on HRMS, 4form CRM solutions, 
              implementation best practices, and open-source business technology.
            </motion.p>
            
            {/* Search Bar */}
            <motion.div 
              className="max-w-2xl mx-auto mb-12"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <div className="relative">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-muted-foreground h-5 w-5" />
                <Input
                  type="text"
                  placeholder="Search articles, topics, or tags..."
                  value={searchQuery}
                  onChange={(e) => handleSearch(e.target.value)}
                  className="pl-12 pr-4 py-3 text-lg"
                />
              </div>
            </motion.div>
          </div>
        </section>

        {/* Featured Article */}
        <section className="py-16 md:py-20 bg-muted/30">
          <div className="max-w-6xl mx-auto px-4 sm:px-6">
            <motion.div 
              className="mb-12"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl sm:text-4xl font-semibold text-foreground mb-4">Featured Article</h2>
              <p className="text-muted-foreground">Our most popular and insightful content</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-card rounded-2xl overflow-hidden shadow-lg border border-border"
            >
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
                <div className="relative h-64 lg:h-auto">
                  <img
                    src={featuredArticle.image}
                    alt={featuredArticle.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-primary text-primary-foreground px-3 py-1 rounded-full text-sm font-medium">
                      {featuredArticle.category}
                    </span>
                  </div>
                </div>
                <div className="p-8 lg:p-12 flex flex-col justify-center">
                  <div className="flex items-center space-x-4 mb-4 text-sm text-muted-foreground">
                    <div className="flex items-center">
                      <Calendar className="h-4 w-4 mr-2" />
                      {formatDate(featuredArticle.publishDate)}
                    </div>
                    <div className="flex items-center">
                      <Clock className="h-4 w-4 mr-2" />
                      {featuredArticle.readTime}
                    </div>
                  </div>
                  
                  <h3 className="text-2xl lg:text-3xl font-semibold text-foreground mb-4 leading-tight">
                    {featuredArticle.title}
                  </h3>
                  
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    {featuredArticle.excerpt}
                  </p>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <img
                        src={featuredArticle.authorAvatar}
                        alt={featuredArticle.author}
                        className="w-10 h-10 rounded-full mr-3"
                      />
                      <div>
                        <p className="font-medium text-foreground">{featuredArticle.author}</p>
                        <p className="text-sm text-muted-foreground">{featuredArticle.authorRole}</p>
                      </div>
                    </div>
                    <Button 
                      className="flex items-center"
                      onClick={() => navigate(`/blog/${featuredArticle.id}`)}
                    >
                      Read More
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </div>
                  
                  <div className="flex flex-wrap gap-2 mt-4">
                    {featuredArticle.tags.map((tag, index) => (
                      <span
                        key={index}
                        className="bg-muted text-muted-foreground px-2 py-1 rounded text-xs"
                      >
                        #{tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Categories and Articles */}
        <section className="py-16 md:py-20 bg-background">
          <div className="max-w-6xl mx-auto px-4 sm:px-6">
            {/* Categories */}
            <motion.div 
              className="mb-12"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl sm:text-4xl font-semibold text-foreground mb-8">Browse by Category</h2>
              <div className="flex flex-wrap gap-4">
                {blogCategories.map((category, index) => (
                  <motion.button
                    key={category.name}
                    onClick={() => handleCategoryFilter(category.name)}
                    className={`px-6 py-3 rounded-full border transition-all ${
                      selectedCategory === category.name
                        ? 'bg-primary text-primary-foreground border-primary'
                        : 'bg-background text-muted-foreground border-border hover:border-primary hover:text-foreground'
                    }`}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    {category.name} ({category.count})
                  </motion.button>
                ))}
              </div>
            </motion.div>

            {/* Articles Grid */}
            <motion.div 
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              {filteredArticles.map((article, index) => (
                <motion.div
                  key={article.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-card rounded-xl overflow-hidden shadow-sm border border-border hover:shadow-lg transition-shadow"
                >
                  <div className="relative h-48">
                    <img
                      src={article.image}
                      alt={article.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="bg-primary text-primary-foreground px-3 py-1 rounded-full text-sm font-medium">
                        {article.category}
                      </span>
                    </div>
                  </div>
                  
                  <div className="p-6">
                    <div className="flex items-center space-x-4 mb-3 text-sm text-muted-foreground">
                      <div className="flex items-center">
                        <Calendar className="h-4 w-4 mr-2" />
                        {formatDate(article.publishDate)}
                      </div>
                      <div className="flex items-center">
                        <Clock className="h-4 w-4 mr-2" />
                        {article.readTime}
                      </div>
                    </div>
                    
                    <h3 className="text-xl font-semibold text-foreground mb-3 leading-tight">
                      {article.title}
                    </h3>
                    
                    <p className="text-muted-foreground mb-4 leading-relaxed">
                      {article.excerpt}
                    </p>
                    
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center">
                        <img
                          src={article.authorAvatar}
                          alt={article.author}
                          className="w-8 h-8 rounded-full mr-3"
                        />
                        <div>
                          <p className="font-medium text-foreground text-sm">{article.author}</p>
                          <p className="text-xs text-muted-foreground">{article.authorRole}</p>
                        </div>
                      </div>
                    </div>
                    
                    <div className="flex flex-wrap gap-2 mb-4">
                      {article.tags.map((tag, tagIndex) => (
                        <span
                          key={tagIndex}
                          className="bg-muted text-muted-foreground px-2 py-1 rounded text-xs"
                        >
                          #{tag}
                        </span>
                      ))}
                    </div>
                    
                    <Button 
                      variant="outline" 
                      className="w-full"
                      onClick={() => navigate(`/blog/${article.id}`)}
                    >
                      Read More
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </div>
                </motion.div>
              ))}
            </motion.div>

            {/* Load More Button */}
            <motion.div 
              className="text-center mt-12"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <Button size="lg" variant="outline">
                Load More Articles
              </Button>
            </motion.div>
          </div>
        </section>


        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default BlogPage;
