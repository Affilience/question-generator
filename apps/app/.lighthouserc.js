module.exports = {
  ci: {
    collect: {
      // Start the Next.js server for testing (build already done in CI)
      startServerCommand: 'npm start',
      startServerReadyPattern: 'Ready in',
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
        'categories:performance': ['warn', { minScore: 0.6 }],
        'categories:accessibility': ['warn', { minScore: 0.8 }], 
        'categories:best-practices': ['warn', { minScore: 0.7 }],
        'categories:seo': ['error', { minScore: 0.85 }],
        
        // Key SEO audits (critical for search rankings)
        'document-title': 'error',
        'meta-description': 'error', 
        'robots-txt': 'error',
        'canonical': 'error',
        'hreflang': 'off', // Not needed for UK-only site
        
        // Performance metrics important for SEO (more lenient thresholds)
        'first-contentful-paint': ['warn', { maxNumericValue: 3000 }],
        'largest-contentful-paint': ['warn', { maxNumericValue: 5000 }],
        'cumulative-layout-shift': ['warn', { maxNumericValue: 0.2 }],
        
        // Accessibility (warn instead of error for CI)
        'color-contrast': 'warn',
        'image-alt': 'warn',
        'heading-order': 'warn',
        'link-name': 'warn'
      }
    },
    upload: {
      // Store results temporarily for review
      target: 'temporary-public-storage'
    }
  }
};