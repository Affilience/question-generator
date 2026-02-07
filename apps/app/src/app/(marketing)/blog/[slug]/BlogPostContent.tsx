'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { Navigation } from '@/components/marketing/Navigation';
import { Footer } from '@/components/marketing/Footer';
import { useAuth } from '@/contexts/AuthContext';
import { BlogContentRenderer } from '@/components/BlogContentRenderer';
import type { BlogPost } from '@/lib/blog';

interface BlogPostContentProps {
  post: BlogPost;
}

export default function BlogPostContent({ post }: BlogPostContentProps) {
  const { user, loading } = useAuth();

  return (
    <div className="min-h-screen bg-[#0a0a0a]">
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
              <ol className="flex items-center space-x-2 text-sm text-gray-400">
                <li>
                  <Link href="/blog" className="hover:text-blue-400 transition-colors">
                    Study Guides
                  </Link>
                </li>
                <li>
                  <svg className="w-4 h-4 mx-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </li>
                <li className="text-white">{post.title}</li>
              </ol>
            </nav>

            {/* Category Badge */}
            <div className="mb-6">
              <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-blue-600/20 text-blue-400 border border-blue-500/30">
                {post.category}
              </span>
            </div>

            {/* Title */}
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
              {post.title}
            </h1>

            {/* Excerpt */}
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              {post.excerpt}
            </p>

            {/* Meta Info */}
            <div className="flex items-center justify-between border-b border-white/20 pb-8">
              <div className="flex items-center space-x-6 text-sm text-gray-400">
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
                <button className="text-gray-400 hover:text-blue-400 transition-colors">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.367 2.684 3 3 0 00-5.367-2.684z" />
                  </svg>
                </button>
                <button className="text-gray-400 hover:text-blue-400 transition-colors">
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
          <div className="prose prose-lg prose-blue max-w-none prose-invert 
                          prose-headings:text-white prose-h2:text-2xl prose-h3:text-xl prose-h2:mt-8 prose-h2:mb-4 prose-h3:mt-6 prose-h3:mb-3
                          prose-p:text-gray-300 prose-p:leading-relaxed prose-p:mb-4
                          prose-ul:text-gray-300 prose-ol:text-gray-300 prose-li:mb-2
                          prose-strong:text-white prose-code:text-blue-400 prose-code:bg-blue-950/30 prose-code:px-1 prose-code:rounded
                          prose-blockquote:border-blue-500 prose-blockquote:text-blue-200 prose-blockquote:bg-blue-950/20">
            {post.content && <BlogContentRenderer content={post.content} className="blog-content" />}
          </div>
        </motion.div>

        {/* Related Posts */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mt-16 pt-16 border-t border-white/20"
        >
          <h2 className="text-2xl font-bold text-white mb-8">Related Articles</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Related posts would be dynamically loaded based on category/tags */}
            <Link href="/blog" className="group">
              <article className="bg-white/5 border border-white/10 rounded-lg p-6 hover:bg-white/10 transition-colors">
                <h3 className="font-semibold text-white group-hover:text-blue-400 transition-colors mb-2">
                  More Study Guides Coming Soon
                </h3>
                <p className="text-gray-300 text-sm">
                  Browse all our study guides and revision tips.
                </p>
              </article>
            </Link>
          </div>
        </motion.section>

      </article>

      <Footer />
    </div>
  );
}