import type { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: [
          '/app/',      // Authenticated app pages
          '/api/',      // API routes
          '/dashboard', // User dashboard (requires auth)
          '/bookmarks', // User bookmarks (requires auth)
          '/*?*',       // URLs with query parameters
        ],
      },
    ],
    sitemap: 'https://www.past-papers.co.uk/sitemap.xml',
  };
}
