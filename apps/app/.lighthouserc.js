module.exports = {
  ci: {
    collect: {
      // Start the Next.js server for testing (build already done in CI)
      startServerCommand: 'npm start',
      startServerReadyPattern: 'ready on',
      startServerReadyTimeout: 30000,
      // Test multiple key pages for comprehensive SEO analysis
      url: [
        'http://localhost:3000',
        'http://localhost:3000/gcse',
        'http://localhost:3000/a-level', 
        'http://localhost:3000/gcse/maths',
        'http://localhost:3000/gcse/maths/aqa',
        'http://localhost:3000/gcse/maths/aqa/number',
        'http://localhost:3000/pricing',
        'http://localhost:3000/past-papers',
        'http://localhost:3000/blog'
      ],
      numberOfRuns: 1,
      settings: {
        // Test both mobile and desktop for comprehensive coverage
        preset: 'desktop',
        // Focus on SEO-relevant audits
        onlyCategories: ['performance', 'accessibility', 'best-practices', 'seo'],
        skipAudits: [
          // Skip PWA audits for initial SEO focus
          'installable-manifest',
          'splash-screen',
          'themed-omnibox',
          'content-width'
        ]
      }
    },
    assert: {
      // Set minimum thresholds for SEO and performance
      assertions: {
        'categories:performance': ['warn', { minScore: 0.7 }],
        'categories:accessibility': ['error', { minScore: 0.9 }], 
        'categories:best-practices': ['warn', { minScore: 0.8 }],
        'categories:seo': ['error', { minScore: 0.9 }],
        
        // Key SEO audits
        'document-title': 'error',
        'meta-description': 'error', 
        'robots-txt': 'error',
        'canonical': 'error',
        'hreflang': 'off', // Not needed for UK-only site
        'structured-data': 'warn',
        
        // Performance metrics important for SEO
        'first-contentful-paint': ['warn', { maxNumericValue: 2500 }],
        'largest-contentful-paint': ['warn', { maxNumericValue: 4000 }],
        'cumulative-layout-shift': ['warn', { maxNumericValue: 0.1 }],
        
        // Accessibility (affects SEO rankings)
        'color-contrast': 'error',
        'image-alt': 'error',
        'heading-order': 'error',
        'link-name': 'error'
      }
    },
    upload: {
      // Store results temporarily for review
      target: 'temporary-public-storage'
    }
  }
};