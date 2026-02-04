'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { Navigation } from '@/components/marketing/Navigation';
import { Footer } from '@/components/marketing/Footer';
import { useAuth } from '@/contexts/AuthContext';

// Sample blog posts - in the future, these could come from a CMS or markdown files
const FEATURED_POSTS = [
  {
    id: 'gcse-maths-algebra-guide',
    title: 'GCSE Maths: Complete Algebra Guide for 2024',
    excerpt: 'Master algebra fundamentals with this comprehensive guide covering linear equations, quadratic formulas, and graph interpretation.',
    readTime: '8 min read',
    category: 'GCSE Maths',
    date: '2024-02-01',
    slug: 'gcse-maths-algebra-guide',
    image: '/blog/algebra-guide.jpg',
    featured: true
  },
  {
    id: 'a-level-physics-mechanics',
    title: 'A-Level Physics: Mastering Mechanics and Motion',
    excerpt: 'Complete breakdown of mechanics concepts including forces, momentum, and energy conservation with worked examples.',
    readTime: '12 min read',
    category: 'A-Level Physics',
    date: '2024-01-28',
    slug: 'a-level-physics-mechanics',
    image: '/blog/physics-mechanics.jpg',
    featured: true
  },
  {
    id: 'chemistry-periodic-table',
    title: 'Understanding the Periodic Table: A Visual Guide',
    excerpt: 'Navigate the periodic table with confidence. Learn trends, properties, and how to predict chemical behavior.',
    readTime: '10 min read',
    category: 'Chemistry',
    date: '2024-01-25',
    slug: 'chemistry-periodic-table',
    image: '/blog/periodic-table.jpg',
    featured: false
  },
  {
    id: 'exam-stress-management',
    title: '5 Proven Techniques to Manage Exam Stress',
    excerpt: 'Evidence-based strategies to reduce exam anxiety and improve performance during GCSE and A-Level exams.',
    readTime: '6 min read',
    category: 'Study Tips',
    date: '2024-01-22',
    slug: 'exam-stress-management',
    image: '/blog/stress-management.jpg',
    featured: false
  },
  {
    id: 'effective-revision-timetables',
    title: 'Creating Effective Revision Timetables That Actually Work',
    excerpt: 'Learn how to build realistic, sustainable revision schedules that maximize retention and minimize burnout.',
    readTime: '9 min read',
    category: 'Study Tips',
    date: '2024-01-19',
    slug: 'effective-revision-timetables',
    image: '/blog/revision-timetable.jpg',
    featured: false
  },
  {
    id: 'aqa-vs-edexcel-vs-ocr',
    title: 'AQA vs Edexcel vs OCR: Which Exam Board Is Right for You?',
    excerpt: 'Compare the three major exam boards and understand their differences in content, assessment style, and difficulty.',
    readTime: '7 min read',
    category: 'Exam Boards',
    date: '2024-01-16',
    slug: 'aqa-vs-edexcel-vs-ocr',
    image: '/blog/exam-boards.jpg',
    featured: false
  }
];

const CATEGORIES = ['All', 'GCSE Maths', 'A-Level Physics', 'Chemistry', 'Study Tips', 'Exam Boards'];

export default function BlogPageContent() {
  const { user, loading } = useAuth();

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      <Navigation user={user} authLoading={loading} />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Study Guides &amp; Tips
              </span>
            </h1>
            <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              Expert revision strategies, subject-specific guides, and exam tips to help you excel in your GCSE and A-Level studies.
            </p>
            
            {/* Category Filter */}
            <div className="flex flex-wrap justify-center gap-3 mb-12">
              {CATEGORIES.map((category) => (
                <button
                  key={category}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                    category === 'All'
                      ? 'bg-blue-600 text-white shadow-lg'
                      : 'bg-white text-gray-600 hover:bg-gray-50 shadow-md hover:shadow-lg'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </motion.div>

          {/* Featured Posts */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
            {FEATURED_POSTS.filter(post => post.featured).map((post, index) => (
              <motion.article
                key={post.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-300 group"
              >
                <div className="aspect-video bg-gradient-to-br from-blue-100 to-purple-100 relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 to-purple-600/20"></div>
                  <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-sm rounded-lg px-3 py-1">
                    <span className="text-sm font-medium text-gray-700">{post.category}</span>
                  </div>
                </div>
                
                <div className="p-6">
                  <div className="flex items-center gap-4 text-sm text-gray-500 mb-3">
                    <time dateTime={post.date}>
                      {new Date(post.date).toLocaleDateString('en-GB', { 
                        day: 'numeric', 
                        month: 'long', 
                        year: 'numeric' 
                      })}
                    </time>
                    <span>•</span>
                    <span>{post.readTime}</span>
                  </div>
                  
                  <h2 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors duration-200">
                    {post.title}
                  </h2>
                  
                  <p className="text-gray-600 mb-4 line-clamp-2">
                    {post.excerpt}
                  </p>
                  
                  <Link 
                    href={`/blog/${post.slug}`}
                    className="inline-flex items-center text-blue-600 font-semibold hover:text-blue-700 transition-colors duration-200"
                  >
                    Read More 
                    <svg className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                </div>
              </motion.article>
            ))}
          </div>

          {/* All Posts Grid */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Latest Articles</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {FEATURED_POSTS.filter(post => !post.featured).map((post, index) => (
                <article
                  key={post.id}
                  className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 group"
                >
                  <div className="aspect-[4/3] bg-gradient-to-br from-gray-100 to-gray-200 relative">
                    <div className="absolute bottom-3 left-3 bg-white/90 backdrop-blur-sm rounded-md px-2 py-1">
                      <span className="text-xs font-medium text-gray-700">{post.category}</span>
                    </div>
                  </div>
                  
                  <div className="p-5">
                    <div className="flex items-center gap-3 text-xs text-gray-500 mb-2">
                      <time dateTime={post.date}>
                        {new Date(post.date).toLocaleDateString('en-GB', { 
                          day: 'numeric', 
                          month: 'short' 
                        })}
                      </time>
                      <span>•</span>
                      <span>{post.readTime}</span>
                    </div>
                    
                    <h3 className="font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors duration-200 line-clamp-2">
                      {post.title}
                    </h3>
                    
                    <p className="text-gray-600 text-sm mb-3 line-clamp-2">
                      {post.excerpt}
                    </p>
                    
                    <Link 
                      href={`/blog/${post.slug}`}
                      className="text-blue-600 text-sm font-medium hover:text-blue-700 transition-colors duration-200"
                    >
                      Read More →
                    </Link>
                  </div>
                </article>
              ))}
            </div>
          </motion.div>

          {/* Newsletter Signup */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 md:p-12 text-center text-white mt-16"
          >
            <h3 className="text-2xl md:text-3xl font-bold mb-4">
              Never Miss a Study Tip
            </h3>
            <p className="text-blue-100 mb-8 max-w-2xl mx-auto">
              Get weekly revision strategies, subject guides, and exam tips delivered straight to your inbox.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-lg text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-white/30"
              />
              <button className="px-6 py-3 bg-white text-blue-600 rounded-lg font-semibold hover:bg-gray-50 transition-colors duration-200">
                Subscribe
              </button>
            </div>
          </motion.section>
        </div>
      </section>

      <Footer />
    </div>
  );
}