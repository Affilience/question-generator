'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { Navigation } from '@/components/marketing/Navigation';
import { Footer } from '@/components/marketing/Footer';
import { useAuth } from '@/contexts/AuthContext';
import { getAllBlogPosts, getFeaturedPosts, getCategories, type BlogPost } from '@/lib/blog';
import { useEffect, useState } from 'react';

// Each blog post has its own unique image - no fallbacks needed

export default function BlogPageContent() {
  const { user, loading } = useAuth();
  const [blogPosts, setBlogPosts] = useState<BlogPost[]>([]);
  const [featuredPosts, setFeaturedPosts] = useState<BlogPost[]>([]);
  const [categories, setCategories] = useState<string[]>(['All']);
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [filteredPosts, setFilteredPosts] = useState<BlogPost[]>([]);
  
  useEffect(() => {
    async function loadBlogData() {
      const [allPosts, featured, cats] = await Promise.all([
        getAllBlogPosts(),
        getFeaturedPosts(),
        Promise.resolve(['All', ...getCategories()])
      ]);
      
      setBlogPosts(allPosts);
      setFeaturedPosts(featured);
      setCategories(cats);
      setFilteredPosts(allPosts);
    }
    
    loadBlogData();
  }, []);
  
  useEffect(() => {
    if (selectedCategory === 'All') {
      setFilteredPosts(blogPosts);
    } else {
      setFilteredPosts(blogPosts.filter(post => post.category === selectedCategory));
    }
  }, [selectedCategory, blogPosts]);
  
  // Prevent hydration mismatch by ensuring consistent initial render
  if (typeof window === 'undefined') {
    // Server-side render with safe defaults
    return <BlogPageContentInner 
      user={null} 
      loading={true} 
      blogPosts={[]} 
      featuredPosts={[]} 
      categories={['All']}
      selectedCategory="All"
      onCategoryChange={() => {}}
      filteredPosts={[]}
    />;
  }
  
  return <BlogPageContentInner 
    user={user} 
    loading={loading}
    blogPosts={blogPosts}
    featuredPosts={featuredPosts}
    categories={categories}
    selectedCategory={selectedCategory}
    onCategoryChange={setSelectedCategory}
    filteredPosts={filteredPosts}
  />;
}

interface BlogPageContentInnerProps {
  user: any;
  loading: boolean;
  blogPosts: BlogPost[];
  featuredPosts: BlogPost[];
  categories: string[];
  selectedCategory: string;
  onCategoryChange: (category: string) => void;
  filteredPosts: BlogPost[];
}

function BlogPageContentInner({ 
  user, 
  loading, 
  featuredPosts, 
  categories, 
  selectedCategory, 
  onCategoryChange,
  filteredPosts
}: BlogPageContentInnerProps) {

  return (
    <div className="min-h-screen bg-[#0a0a0a]">
      <Navigation user={user} authLoading={loading} />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 px-4 sm:px-6 lg:px-8 bg-[#0a0a0a]">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                Study Guides &amp; Tips
              </span>
            </h1>
            <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              Expert revision strategies, subject-specific guides, and exam tips to help you excel in your GCSE and A-Level studies.
            </p>
            
            {/* Category Filter */}
            <div className="flex flex-wrap justify-center gap-3 mb-12">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => onCategoryChange(category)}
                  className={`px-6 py-3 rounded-full text-sm font-medium transition-all duration-200 transform hover:scale-105 ${
                    category === selectedCategory
                      ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg shadow-blue-500/25'
                      : 'bg-white/5 text-gray-300 hover:bg-white/10 shadow-md hover:shadow-lg border border-white/10 hover:border-white/30'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </motion.div>

          {/* Featured Posts */}
          {featuredPosts.length > 0 && (
            <div className="mb-16">
              <h2 className="text-2xl font-bold text-white mb-8 text-center">Featured Articles</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {featuredPosts.slice(0, 4).map((post, index) => (
                  <motion.article
                    key={post.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="bg-gradient-to-br from-white/5 to-white/10 border border-white/20 rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl hover:border-white/30 transition-all duration-300 group backdrop-blur-sm transform hover:-translate-y-1"
                  >
                    <div className="aspect-video relative overflow-hidden">
                      <img 
                        src={post.image} 
                        alt={post.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                      <div className="absolute inset-0 bg-gradient-to-br from-black/20 to-black/50"></div>
                      <div className="absolute bottom-4 left-4 bg-gradient-to-r from-blue-600/90 to-purple-600/90 backdrop-blur-sm rounded-lg px-3 py-1.5">
                        <span className="text-sm font-medium text-white">{post.category}</span>
                      </div>
                      <div className="absolute top-4 right-4 bg-black/50 backdrop-blur-sm rounded-lg px-2 py-1">
                        <span className="text-xs font-medium text-white">{post.readTime}</span>
                      </div>
                    </div>
                    
                    <div className="p-6">
                      <div className="flex items-center gap-4 text-sm text-gray-400 mb-3">
                        <time dateTime={post.date}>
                          {new Date(post.date).toLocaleDateString('en-GB', { 
                            day: 'numeric', 
                            month: 'long', 
                            year: 'numeric' 
                          })}
                        </time>
                      </div>
                      
                      <h3 className="text-lg font-bold text-white mb-3 group-hover:text-blue-400 transition-colors duration-200 line-clamp-2">
                        {post.title}
                      </h3>
                      
                      <p className="text-gray-300 mb-4 line-clamp-2 text-sm">
                        {post.excerpt}
                      </p>
                      
                      <Link 
                        href={`/blog/${post.slug}`}
                        className="inline-flex items-center text-blue-400 font-semibold hover:text-blue-300 transition-colors duration-200 text-sm"
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
            </div>
          )}

          {/* All Posts Grid */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <h2 className="text-3xl font-bold text-white mb-8 text-center">
              {selectedCategory === 'All' ? 'All Articles' : `${selectedCategory} Articles`}
            </h2>
            
            {filteredPosts.length === 0 ? (
              <div className="text-center py-12">
                <p className="text-gray-400 text-lg">Loading articles...</p>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredPosts.map((post, index) => (
                  <motion.article
                    key={post.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="bg-gradient-to-br from-white/5 to-white/10 border border-white/15 rounded-xl shadow-lg overflow-hidden hover:shadow-xl hover:border-white/30 transition-all duration-300 group backdrop-blur-sm transform hover:-translate-y-1 h-full flex flex-col"
                  >
                    <div className="aspect-[4/3] relative overflow-hidden">
                      <img 
                        src={post.image} 
                        alt={post.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                      <div className="absolute inset-0 bg-gradient-to-br from-black/20 to-black/50"></div>
                      <div className="absolute bottom-3 left-3 bg-gradient-to-r from-blue-600/90 to-purple-600/90 backdrop-blur-sm rounded-md px-2 py-1">
                        <span className="text-xs font-medium text-white">{post.category}</span>
                      </div>
                      <div className="absolute top-3 right-3 bg-black/50 backdrop-blur-sm rounded-md px-2 py-1">
                        <span className="text-xs font-medium text-white">{post.readTime}</span>
                      </div>
                    </div>
                    
                    <div className="p-5 flex flex-col flex-grow">
                      <div className="flex items-center gap-3 text-xs text-gray-400 mb-3">
                        <time dateTime={post.date}>
                          {new Date(post.date).toLocaleDateString('en-GB', { 
                            day: 'numeric', 
                            month: 'short',
                            year: 'numeric'
                          })}
                        </time>
                      </div>
                      
                      <h3 className="font-bold text-white mb-3 group-hover:text-blue-400 transition-colors duration-200 line-clamp-2 flex-grow">
                        {post.title}
                      </h3>
                      
                      <p className="text-gray-300 text-sm mb-4 line-clamp-2">
                        {post.excerpt}
                      </p>
                      
                      <Link 
                        href={`/blog/${post.slug}`}
                        className="inline-flex items-center text-blue-400 text-sm font-medium hover:text-blue-300 transition-colors duration-200 mt-auto"
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
            )}
          </motion.div>

        </div>
      </section>

      <Footer />
    </div>
  );
}