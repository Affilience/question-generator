'use client';

import { useEffect } from 'react';

/**
 * Component that prevents layout shifts by stabilizing dimensions
 * and optimizing rendering performance
 */
export function LayoutStabilizer() {
  useEffect(() => {
    // Optimize font loading to prevent layout shifts
    if (typeof document !== 'undefined') {
      // Ensure fonts are loaded before critical content
      document.fonts.ready.then(() => {
        // Mark fonts as loaded to prevent FOIT/FOUT
        document.documentElement.classList.add('fonts-loaded');
      });

      // Optimize third-party scripts loading
      const optimizeScriptLoading = () => {
        // Defer non-critical scripts
        const scripts = document.querySelectorAll('script[data-defer]');
        scripts.forEach((script) => {
          if (script instanceof HTMLScriptElement && !script.async) {
            script.async = true;
          }
        });
      };

      // Run after initial load
      if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', optimizeScriptLoading);
      } else {
        optimizeScriptLoading();
      }

      return () => {
        document.removeEventListener('DOMContentLoaded', optimizeScriptLoading);
      };
    }
  }, []);

  // Add global CSS to prevent layout shifts
  useEffect(() => {
    if (typeof document !== 'undefined') {
      const style = document.createElement('style');
      style.textContent = `
        /* Prevent layout shifts */
        * {
          box-sizing: border-box;
        }
        
        /* Optimize animations for better performance */
        .glow-orb {
          transform: translateZ(0);
          will-change: transform;
          backface-visibility: hidden;
        }
        
        /* Optimize transitions */
        .transition-colors,
        .transition-opacity,
        .transition-transform {
          will-change: auto;
        }
        
        /* Prevent font-related layout shifts */
        .fonts-loaded {
          font-display: swap;
        }
        
        /* Optimize images for CLS */
        img {
          max-width: 100%;
          height: auto;
        }
        
        /* Optimize button interactions */
        button {
          touch-action: manipulation;
        }
        
        /* Prevent unwanted scroll behavior */
        html {
          scroll-behavior: smooth;
        }
        
        /* Optimize focus indicators */
        :focus-visible {
          outline: 2px solid currentColor;
          outline-offset: 2px;
        }
        
        /* Optimize animations on reduced motion */
        @media (prefers-reduced-motion: reduce) {
          .animate-spin,
          .animate-pulse,
          .glow-orb-animated {
            animation-duration: 0.01ms !important;
            animation-iteration-count: 1 !important;
            transition-duration: 0.01ms !important;
          }
        }
      `;
      
      document.head.appendChild(style);
      
      return () => {
        document.head.removeChild(style);
      };
    }
  }, []);

  return null;
}