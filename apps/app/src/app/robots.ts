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
          '/test-',     // Internal rendering harnesses (dev only)
          '/theory/',   // Placeholder content until theory notes are generated
          '/choose-mode',
          '/questions',
        ],
      },
    ],
    sitemap: 'https://www.past-papers.co.uk/sitemap.xml',
  };
}
