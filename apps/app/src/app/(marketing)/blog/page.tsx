import type { Metadata } from 'next';
import BlogPageContent from './BlogPageContent';
import { getAllBlogPosts, getFeaturedPosts, getCategories, type BlogPost } from '@/lib/blog';

export const metadata: Metadata = {
  title: 'Study Guides & Revision Tips Blog',
  description: 'Expert study guides, revision tips, and exam strategies for GCSE & A-Level students. Get the latest insights on AQA, Edexcel, and OCR specifications.',
  alternates: {
    canonical: '/blog',
  },
  openGraph: {
    title: 'Study Guides & Revision Tips Blog | Past Papers',
    description: 'Expert study guides, revision tips, and exam strategies for GCSE & A-Level students.',
    url: '/blog',
  },
};

export default async function BlogPage() {
  // Read on the server and hand the client only what the index needs.
  //
  // BlogPageContent is a client component that imported @/lib/blog directly,
  // so the entire 628 KB post corpus - every full article body - was bundled
  // into the browser. It also returned an empty skeleton during SSR, so the
  // initial HTML for /blog contained no <a href="/blog/..."> at all and the
  // posts were reachable only after hydration.
  const [posts, featured] = await Promise.all([getAllBlogPosts(), getFeaturedPosts()]);

  const trim = (post: BlogPost) => ({
    id: post.id,
    slug: post.slug,
    title: post.title,
    excerpt: post.excerpt,
    category: post.category,
    date: post.date,
    readTime: post.readTime,
    image: post.image,
  });

  return (
    <BlogPageContent
      posts={posts.map(trim)}
      featuredPosts={featured.map(trim)}
      categories={['All', ...getCategories()]}
    />
  );
}