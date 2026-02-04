'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { Navigation } from '@/components/marketing/Navigation';
import { Footer } from '@/components/marketing/Footer';
import { useAuth } from '@/contexts/AuthContext';
import { MathRenderer } from '@/components/MathRenderer';
import type { BlogPost } from '@/lib/blog';

interface BlogPostContentProps {
  post: BlogPost;
}

export default function BlogPostContent({ post }: BlogPostContentProps) {
  const { user, loading } = useAuth();

  return (
    <div className="min-h-screen bg-white">
      <Navigation user={user} authLoading={loading} />
      
      <article className="pt-24 pb-16">
        {/* Header */}
        <header className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            {/* Breadcrumb */}
            <nav className="mb-8">
              <ol className="flex items-center space-x-2 text-sm text-gray-500">
                <li>
                  <Link href="/blog" className="hover:text-blue-600 transition-colors">
                    Study Guides
                  </Link>
                </li>
                <li>
                  <svg className="w-4 h-4 mx-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </li>
                <li className="text-gray-900">{post.title}</li>
              </ol>
            </nav>

            {/* Category Badge */}
            <div className="mb-6">
              <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-blue-100 text-blue-800">
                {post.category}
              </span>
            </div>

            {/* Title */}
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
              {post.title}
            </h1>

            {/* Excerpt */}
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              {post.excerpt}
            </p>

            {/* Meta Info */}
            <div className="flex items-center justify-between border-b border-gray-200 pb-8">
              <div className="flex items-center space-x-6 text-sm text-gray-500">
                <time dateTime={post.date}>
                  {new Date(post.date).toLocaleDateString('en-GB', { 
                    day: 'numeric', 
                    month: 'long', 
                    year: 'numeric' 
                  })}
                </time>
                <span>•</span>
                <span>{post.readTime}</span>
                <span>•</span>
                <span>By Past Papers Team</span>
              </div>
              
              <div className="flex items-center space-x-3">
                <button className="text-gray-500 hover:text-blue-600 transition-colors">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.367 2.684 3 3 0 00-5.367-2.684z" />
                  </svg>
                </button>
                <button className="text-gray-500 hover:text-blue-600 transition-colors">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z" />
                  </svg>
                </button>
              </div>
            </div>
          </motion.div>
        </header>

        {/* Content */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8"
        >
          <div className="prose prose-lg prose-blue max-w-none">
            {post.content && <MathRenderer content={post.content} />}
          </div>
        </motion.div>

        {/* Related Posts */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mt-16 pt-16 border-t border-gray-200"
        >
          <h2 className="text-2xl font-bold text-gray-900 mb-8">Related Articles</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Related posts would be dynamically loaded based on category/tags */}
            <Link href="/blog" className="group">
              <article className="bg-gray-50 rounded-lg p-6 hover:bg-gray-100 transition-colors">
                <h3 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors mb-2">
                  More Study Guides Coming Soon
                </h3>
                <p className="text-gray-600 text-sm">
                  Browse all our study guides and revision tips.
                </p>
              </article>
            </Link>
          </div>
        </motion.section>

        {/* Newsletter CTA */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mt-16"
        >
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-center text-white">
            <h3 className="text-2xl font-bold mb-4">
              Found this helpful?
            </h3>
            <p className="text-blue-100 mb-6">
              Get more study guides and exam tips delivered to your inbox.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-lg text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-white/30"
              />
              <button className="px-6 py-3 bg-white text-blue-600 rounded-lg font-semibold hover:bg-gray-50 transition-colors">
                Subscribe
              </button>
            </div>
          </div>
        </motion.section>
      </article>

      <Footer />
    </div>
  );
}