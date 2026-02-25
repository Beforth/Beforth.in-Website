import { useState } from 'react';
import { motion } from 'framer-motion';
import { Calendar, Clock, ArrowLeft, Share2, Bookmark, Heart, MessageCircle } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Card, CardContent } from '../components/ui/card';
import { Input } from '../components/ui/input';
import { Textarea } from '../components/ui/textarea';
import { MobileMenu } from '../components/ui/mobile-menu';
import { ThemeProvider } from '../components/ui/theme-provider';
import { Logo } from '../components/ui/logo';
import { NavLink } from '../components/ui/nav-link';
import { Footer } from '../components/ui/footer';
import { useParams, useNavigate } from 'react-router-dom';

const navItems = [
  { name: "Home", link: "/" },
  { name: "Services", link: "/services" },
  { name: "About", link: "/about" },
  { name: "Team", link: "/team" },
  { name: "Blog", link: "/blog" },
  { name: "Careers", link: "/careers" },
  { name: "Contact", link: "/contact" },
];

// Sample blog articles data (in a real app, this would come from an API)
const blogArticles = {
  1: {
    id: 1,
    title: "Complete Guide to HRMS Implementation: Best Practices and Common Pitfalls",
    excerpt: "Learn the essential steps for successful HRMS implementation, from planning and setup to go-live and optimization. Avoid common mistakes and ensure a smooth transition.",
    content: `
      <p>Implementing a new HRMS system can be a daunting task, but with the right approach and understanding of our HRMS capabilities, you can ensure a smooth transition that delivers real business value. In this comprehensive guide, we'll walk you through the entire process, from initial planning to post-implementation optimization.</p>

      <h2>Understanding Our HRMS</h2>
      <p>Our HRMS is a powerful, open-source human resource management system. Unlike traditional proprietary solutions, our HRMS offers:</p>
      <ul>
        <li><strong>Complete customization</strong> - Modify any aspect of the system to match your business processes</li>
        <li><strong>Cost-effective licensing</strong> - No per-user fees or expensive enterprise licenses</li>
        <li><strong>Community support</strong> - Active community and extensive documentation</li>
        <li><strong>Modern architecture</strong> - Built with modern web technologies and APIs</li>
      </ul>

      <h2>Pre-Implementation Planning</h2>
      <p>Before diving into the technical implementation, thorough planning is crucial for success.</p>

      <h3>1. Requirements Gathering</h3>
      <p>Start by conducting comprehensive interviews with key stakeholders:</p>
      <ul>
        <li>HR department staff</li>
        <li>IT administrators</li>
        <li>End users (employees)</li>
        <li>Management and executives</li>
      </ul>

      <p>Document all current processes, pain points, and desired outcomes. This will help you configure the HRMS to match your specific needs.</p>

      <h3>2. Data Migration Strategy</h3>
      <p>Plan your data migration carefully:</p>
      <ul>
        <li>Audit existing data for accuracy and completeness</li>
        <li>Map data fields from your current system to the HRMS</li>
        <li>Create data cleaning and validation procedures</li>
        <li>Plan for parallel running during transition</li>
      </ul>

      <h3>3. Infrastructure Requirements</h3>
      <p>Ensure your infrastructure can support the HRMS:</p>
      <ul>
        <li>Server specifications (CPU, RAM, storage)</li>
        <li>Database requirements (MariaDB/MySQL)</li>
        <li>Network and security considerations</li>
        <li>Backup and disaster recovery plans</li>
      </ul>

      <h2>Implementation Phases</h2>
      <p>Break down your implementation into manageable phases:</p>

      <h3>Phase 1: System Setup and Configuration</h3>
      <p>This phase involves the technical setup of the HRMS:</p>
      <ol>
        <li>Install the HRMS system</li>
        <li>Configure basic system settings</li>
        <li>Set up user roles and permissions</li>
        <li>Configure company and organizational structure</li>
      </ol>

      <h3>Phase 2: Core HR Module Configuration</h3>
      <p>Configure the essential HR modules:</p>
      <ul>
        <li>Employee master data</li>
        <li>Leave management system</li>
        <li>Attendance tracking</li>
        <li>Payroll configuration</li>
        <li>Performance management setup</li>
      </ul>

      <h3>Phase 3: Data Migration and Testing</h3>
      <p>Migrate your existing data and conduct thorough testing:</p>
      <ul>
        <li>Import employee data</li>
        <li>Migrate historical records</li>
        <li>Conduct user acceptance testing</li>
        <li>Performance testing and optimization</li>
      </ul>

      <h3>Phase 4: Training and Go-Live</h3>
      <p>Prepare your team for the transition:</p>
      <ul>
        <li>Comprehensive user training</li>
        <li>Documentation and user guides</li>
        <li>Support system setup</li>
        <li>Gradual rollout strategy</li>
      </ul>

      <h2>Common Pitfalls to Avoid</h2>
      <p>Based on our experience with numerous implementations, here are the most common mistakes:</p>

      <h3>1. Insufficient Planning</h3>
      <p>Rushing into implementation without proper planning leads to:</p>
      <ul>
        <li>Missed requirements</li>
        <li>Data migration issues</li>
        <li>User resistance and low adoption</li>
        <li>Extended timelines and budget overruns</li>
      </ul>

      <h3>2. Ignoring Change Management</h3>
      <p>Technical implementation is only half the battle. Focus on:</p>
      <ul>
        <li>Clear communication about benefits</li>
        <li>Comprehensive training programs</li>
        <li>Addressing user concerns and resistance</li>
        <li>Celebrating early wins and successes</li>
      </ul>

      <h3>3. Over-Customization</h3>
      <p>While our HRMS is highly customizable, avoid:</p>
      <ul>
        <li>Customizing before understanding standard functionality</li>
        <li>Creating unnecessary complexity</li>
        <li>Making changes that affect core system updates</li>
        <li>Ignoring best practices and standard workflows</li>
      </ul>

      <h3>4. Inadequate Testing</h3>
      <p>Thorough testing is crucial for success:</p>
      <ul>
        <li>Test all business processes end-to-end</li>
        <li>Involve actual users in testing</li>
        <li>Test with realistic data volumes</li>
        <li>Plan for rollback procedures</li>
      </ul>

      <h2>Best Practices for Success</h2>
      <p>Follow these proven strategies for a successful implementation:</p>

      <h3>1. Start with Standard Configuration</h3>
      <p>Begin with the standard HRMS configuration and customize only when necessary. This approach:</p>
      <ul>
        <li>Reduces implementation time</li>
        <li>Leverages proven workflows</li>
        <li>Easier to maintain and update</li>
        <li>Better user adoption</li>
      </ul>

      <h3>2. Phased Rollout</h3>
      <p>Implement in phases rather than all at once:</p>
      <ul>
        <li>Start with core HR functions</li>
        <li>Add advanced features gradually</li>
        <li>Learn from each phase</li>
        <li>Minimize business disruption</li>
      </ul>

      <h3>3. Invest in Training</h3>
      <p>Comprehensive training is essential for success:</p>
      <ul>
        <li>Role-specific training programs</li>
        <li>Hands-on workshops and demos</li>
        <li>Ongoing support and refresher training</li>
        <li>Create internal champions and power users</li>
      </ul>

      <h3>4. Regular Communication</h3>
      <p>Keep all stakeholders informed throughout the process:</p>
      <ul>
        <li>Regular progress updates</li>
        <li>Address concerns promptly</li>
        <li>Celebrate milestones and achievements</li>
        <li>Gather feedback and make adjustments</li>
      </ul>

      <h2>Post-Implementation Optimization</h2>
      <p>Your work doesn't end at go-live. Continuous optimization is key to maximizing value:</p>

      <h3>1. Monitor and Measure</h3>
      <p>Track key metrics to measure success:</p>
      <ul>
        <li>User adoption rates</li>
        <li>Process efficiency improvements</li>
        <li>Data accuracy and completeness</li>
        <li>User satisfaction scores</li>
      </ul>

      <h3>2. Gather Feedback</h3>
      <p>Regularly collect feedback from users:</p>
      <ul>
        <li>User surveys and interviews</li>
        <li>Support ticket analysis</li>
        <li>Focus groups and workshops</li>
        <li>Performance reviews and assessments</li>
      </ul>

      <h3>3. Continuous Improvement</h3>
      <p>Use feedback to drive improvements:</p>
      <ul>
        <li>Process refinements and optimizations</li>
        <li>Additional training and support</li>
        <li>System enhancements and customizations</li>
        <li>Integration with other business systems</li>
      </ul>

      <h2>Conclusion</h2>
      <p>Successful HRMS implementation requires careful planning, proper execution, and ongoing optimization. By following the best practices outlined in this guide and avoiding common pitfalls, you can ensure a smooth transition that delivers real business value.</p>

      <p>Remember, implementation is not just a technical project—it's a business transformation. Invest in change management, user training, and continuous improvement to maximize your return on investment.</p>

      <p>If you need assistance with your HRMS implementation, our team of experts is here to help. Contact us to discuss your specific requirements and learn how we can support your success.</p>
    `,
    author: "Sarah Johnson",
    authorRole: "Senior Implementation Specialist",
    authorAvatar: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=800",
    authorBio: "Sarah has over 8 years of experience in ERP implementations, specializing in Frappe and open-source solutions. She has successfully led over 50 HRMS implementations across various industries.",
    publishDate: "2025-01-15",
    readTime: "12 min read",
    category: "Frappe HRMS",
    image: "https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=1200",
    featured: true,
    tags: ["HRMS", "Implementation", "Best Practices", "Frappe"],
    views: 1250,
    likes: 89,
    comments: 23
  }
};

const relatedArticles = [
  {
    id: 2,
    title: "Why Open Source ERP is the Future of Business Management",
    author: "David Lee",
    publishDate: "2025-01-12",
    readTime: "8 min read",
    category: "Open Source",
    image: "https://images.pexels.com/photos/1181396/pexels-photo-1181396.jpeg?auto=compress&cs=tinysrgb&w=1200"
  },
  {
    id: 3,
    title: "Streamlining Payroll Management with Frappe: A Case Study",
    author: "Jane Smith",
    publishDate: "2025-01-10",
    readTime: "6 min read",
    category: "Implementation",
    image: "https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=1200"
  },
  {
    id: 4,
    title: "Building Custom CRM Workflows with Frappe Framework",
    author: "Mike Chen",
    publishDate: "2025-01-08",
    readTime: "10 min read",
    category: "CRM Solutions",
    image: "https://images.pexels.com/photos/1181396/pexels-photo-1181396.jpeg?auto=compress&cs=tinysrgb&w=1200"
  }
];

const comments = [
  {
    id: 1,
    author: "John Smith",
    authorAvatar: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=800",
    content: "Excellent guide! We're planning our Frappe HRMS implementation next quarter and this article has given us a clear roadmap. The section on common pitfalls was particularly helpful.",
    publishDate: "2025-01-16",
    likes: 12
  },
  {
    id: 2,
    author: "Maria Garcia",
    authorAvatar: "https://images.pexels.com/photos/1065084/pexels-photo-1065084.jpeg?auto=compress&cs=tinysrgb&w=800",
    content: "Great insights on change management. We struggled with user adoption in our previous ERP implementation. This approach of phased rollout and comprehensive training makes a lot of sense.",
    publishDate: "2025-01-15",
    likes: 8
  },
  {
    id: 3,
    author: "Alex Thompson",
    authorAvatar: "https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=800",
    content: "Could you elaborate more on the data migration strategies? We have a lot of historical data that needs to be migrated and I'm concerned about data integrity.",
    publishDate: "2025-01-14",
    likes: 5
  }
];

function BlogDetailPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [newComment, setNewComment] = useState('');
  const [commentAuthor, setCommentAuthor] = useState('');
  const [commentEmail, setCommentEmail] = useState('');
  const [isLiked, setIsLiked] = useState(false);
  const [isBookmarked, setIsBookmarked] = useState(false);

  const article = blogArticles[parseInt(id || '1') as keyof typeof blogArticles];

  if (!article) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-foreground mb-4">Article Not Found</h1>
          <p className="text-muted-foreground mb-8">The article you're looking for doesn't exist.</p>
          <Button onClick={() => navigate('/blog')}>Back to Blog</Button>
        </div>
      </div>
    );
  }

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  const handleCommentSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, this would submit to an API
    console.log('New comment:', { author: commentAuthor, email: commentEmail, content: newComment });
    setNewComment('');
    setCommentAuthor('');
    setCommentEmail('');
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

        {/* Back Button */}
        <div className="pt-16 pb-8">
          <div className="max-w-4xl mx-auto px-4 sm:px-6">
            <motion.button
              onClick={() => navigate('/blog')}
              className="flex items-center text-muted-foreground hover:text-foreground transition-colors mb-8"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Blog
            </motion.button>
          </div>
        </div>

        {/* Article Header */}
        <section className="pb-12">
          <div className="max-w-4xl mx-auto px-4 sm:px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              {/* Category and Meta */}
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center space-x-4">
                  <span className="bg-primary text-primary-foreground px-3 py-1 rounded-full text-sm font-medium">
                    {article.category}
                  </span>
                  <div className="flex items-center text-sm text-muted-foreground">
                    <Calendar className="h-4 w-4 mr-2" />
                    {formatDate(article.publishDate)}
                  </div>
                  <div className="flex items-center text-sm text-muted-foreground">
                    <Clock className="h-4 w-4 mr-2" />
                    {article.readTime}
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="flex items-center space-x-2">
                    <button
                      onClick={() => setIsLiked(!isLiked)}
                      className={`flex items-center space-x-1 px-3 py-1 rounded-full text-sm transition-colors ${
                        isLiked ? 'bg-red-100 text-red-600' : 'bg-muted text-muted-foreground hover:bg-red-100 hover:text-red-600'
                      }`}
                    >
                      <Heart className="h-4 w-4" />
                      <span>{article.likes + (isLiked ? 1 : 0)}</span>
                    </button>
                    <button
                      onClick={() => setIsBookmarked(!isBookmarked)}
                      className={`flex items-center space-x-1 px-3 py-1 rounded-full text-sm transition-colors ${
                        isBookmarked ? 'bg-teal-100 text-teal-600' : 'bg-muted text-muted-foreground hover:bg-teal-100 hover:text-teal-600'
                      }`}
                    >
                      <Bookmark className="h-4 w-4" />
                    </button>
                    <button className="flex items-center space-x-1 px-3 py-1 rounded-full text-sm bg-muted text-muted-foreground hover:bg-gray-100 transition-colors">
                      <Share2 className="h-4 w-4" />
                    </button>
                  </div>
                </div>
              </div>

              {/* Title */}
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-light text-foreground leading-tight mb-6">
                {article.title}
              </h1>

              {/* Author Info */}
              <div className="flex items-center justify-between mb-8">
                <div className="flex items-center">
                  <img
                    src={article.authorAvatar}
                    alt={article.author}
                    className="w-12 h-12 rounded-full mr-4"
                  />
                  <div>
                    <p className="font-semibold text-foreground">{article.author}</p>
                    <p className="text-sm text-muted-foreground">{article.authorRole}</p>
                  </div>
                </div>
                <div className="text-sm text-muted-foreground">
                  {article.views.toLocaleString()} views
                </div>
              </div>

              {/* Featured Image */}
              <div className="relative h-64 md:h-96 rounded-2xl overflow-hidden mb-8">
                <img
                  src={article.image}
                  alt={article.title}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 mb-8">
                {article.tags.map((tag: string, index: number) => (
                  <span
                    key={index}
                    className="bg-muted text-muted-foreground px-3 py-1 rounded-full text-sm"
                  >
                    #{tag}
                  </span>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* Article Content */}
        <section className="pb-12">
          <div className="max-w-4xl mx-auto px-4 sm:px-6">
            <motion.div
              className="prose prose-lg max-w-none"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <div dangerouslySetInnerHTML={{ __html: article.content }} />
            </motion.div>
          </div>
        </section>

        {/* Author Bio */}
        <section className="py-12 bg-muted/30">
          <div className="max-w-4xl mx-auto px-4 sm:px-6">
            <motion.div
              className="bg-card rounded-2xl p-8 border border-border"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="flex items-start space-x-6">
                <img
                  src={article.authorAvatar}
                  alt={article.author}
                  className="w-20 h-20 rounded-full"
                />
                <div className="flex-1">
                  <h3 className="text-2xl font-semibold text-foreground mb-2">About {article.author}</h3>
                  <p className="text-muted-foreground leading-relaxed">{article.authorBio}</p>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Comments Section */}
        <section className="py-12">
          <div className="max-w-4xl mx-auto px-4 sm:px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl font-semibold text-foreground mb-8">
                Comments ({comments.length})
              </h3>

              {/* Comment Form */}
              <Card className="mb-8">
                <CardContent className="p-6">
                  <form onSubmit={handleCommentSubmit} className="space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <Input
                        placeholder="Your Name"
                        value={commentAuthor}
                        onChange={(e) => setCommentAuthor(e.target.value)}
                        required
                      />
                      <Input
                        type="email"
                        placeholder="Your Email"
                        value={commentEmail}
                        onChange={(e) => setCommentEmail(e.target.value)}
                        required
                      />
                    </div>
                    <Textarea
                      placeholder="Write your comment..."
                      rows={4}
                      value={newComment}
                      onChange={(e) => setNewComment(e.target.value)}
                      required
                    />
                    <Button type="submit" className="w-full sm:w-auto">
                      Post Comment
                    </Button>
                  </form>
                </CardContent>
              </Card>

              {/* Comments List */}
              <div className="space-y-6">
                {comments.map((comment, index) => (
                  <motion.div
                    key={comment.id}
                    className="bg-card rounded-xl p-6 border border-border"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <div className="flex items-start space-x-4">
                      <img
                        src={comment.authorAvatar}
                        alt={comment.author}
                        className="w-10 h-10 rounded-full"
                      />
                      <div className="flex-1">
                        <div className="flex items-center justify-between mb-2">
                          <h4 className="font-semibold text-foreground">{comment.author}</h4>
                          <span className="text-sm text-muted-foreground">
                            {formatDate(comment.publishDate)}
                          </span>
                        </div>
                        <p className="text-muted-foreground leading-relaxed mb-3">
                          {comment.content}
                        </p>
                        <div className="flex items-center space-x-4">
                          <button className="flex items-center space-x-1 text-sm text-muted-foreground hover:text-foreground transition-colors">
                            <Heart className="h-4 w-4" />
                            <span>{comment.likes}</span>
                          </button>
                          <button className="flex items-center space-x-1 text-sm text-muted-foreground hover:text-foreground transition-colors">
                            <MessageCircle className="h-4 w-4" />
                            <span>Reply</span>
                          </button>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* Related Articles */}
        <section className="py-12 bg-muted/30">
          <div className="max-w-6xl mx-auto px-4 sm:px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h3 className="text-3xl font-semibold text-foreground mb-8 text-center">
                Related Articles
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {relatedArticles.map((article, index) => (
                  <motion.div
                    key={article.id}
                    className="bg-card rounded-xl overflow-hidden shadow-sm border border-border hover:shadow-lg transition-shadow cursor-pointer"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    onClick={() => navigate(`/blog/${article.id}`)}
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
                      <h4 className="text-lg font-semibold text-foreground mb-3 leading-tight">
                        {article.title}
                      </h4>
                      <div className="flex items-center justify-between text-sm text-muted-foreground">
                        <span>{article.author}</span>
                        <div className="flex items-center space-x-4">
                          <span>{formatDate(article.publishDate)}</span>
                          <span>{article.readTime}</span>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default BlogDetailPage;

