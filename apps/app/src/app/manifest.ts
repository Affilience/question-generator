import type { MetadataRoute } from 'next';

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Past Papers - AI Practice Questions',
    short_name: 'Past Papers',
    description: 'AI-generated exam-style questions for GCSE and A-Level students with step-by-step solutions.',
    start_url: '/',
    display: 'standalone',
    background_color: '#000000',
    theme_color: '#3b82f6',
    orientation: 'portrait',
    categories: ['education', 'productivity', 'utilities'],
    lang: 'en',
    dir: 'ltr',
    icons: [
      {
        src: '/icon-192.png',
        sizes: '192x192',
        type: 'image/png',
        purpose: 'maskable',
      },
      {
        src: '/icon-512.png', 
        sizes: '512x512',
        type: 'image/png',
        purpose: 'maskable',
      },
      {
        src: '/apple-touch-icon.png',
        sizes: '180x180',
        type: 'image/png',
        purpose: 'any',
      },
      {
        src: '/favicon.ico',
        sizes: '32x32',
        type: 'image/x-icon',
        purpose: 'any',
      },
    ],
    screenshots: [
      {
        src: '/screenshots/desktop-1.png',
        sizes: '1280x720',
        type: 'image/png',
        form_factor: 'wide',
        label: 'Practice questions dashboard',
      },
      {
        src: '/screenshots/mobile-1.png', 
        sizes: '390x844',
        type: 'image/png',
        form_factor: 'narrow',
        label: 'Mobile question practice',
      },
    ],
    shortcuts: [
      {
        name: 'GCSE Practice',
        short_name: 'GCSE',
        description: 'Start GCSE practice questions',
        url: '/gcse',
        icons: [
          {
            src: '/icon-192.png',
            sizes: '192x192',
          },
        ],
      },
      {
        name: 'A-Level Practice',
        short_name: 'A-Level', 
        description: 'Start A-Level practice questions',
        url: '/a-level',
        icons: [
          {
            src: '/icon-192.png',
            sizes: '192x192',
          },
        ],
      },
    ],
    scope: '/',
    display_override: ['standalone', 'minimal-ui', 'browser'],
    prefer_related_applications: false,
  };
}