'use client';

import React, { useMemo, useEffect, useState } from 'react';
import { DiagramSpec } from '@/types/diagram';
import { DiagramRenderer } from './DiagramRenderer';
import { optimizeDiagramForDevice, validateDiagramAccessibility, generateDiagramDescription } from '@/lib/diagramGeneration';

interface ResponsiveDiagramRendererProps {
  spec: DiagramSpec;
  className?: string;
  darkMode?: boolean;
  interactive?: boolean;
  onError?: (error: Error) => void;
}

/**
 * Enhanced responsive diagram renderer with mobile/desktop optimization
 */
export function ResponsiveDiagramRenderer({
  spec,
  className = '',
  darkMode = false,
  interactive = false,
  onError,
}: ResponsiveDiagramRendererProps) {
  const [deviceType, setDeviceType] = useState<'mobile' | 'tablet' | 'desktop'>('desktop');
  const [isTouch, setIsTouch] = useState(false);
  const [viewportWidth, setViewportWidth] = useState(1024);

  // Detect device type and capabilities
  useEffect(() => {
    const detectDevice = () => {
      const width = window.innerWidth;
      setViewportWidth(width);
      
      if (width < 640) {
        setDeviceType('mobile');
      } else if (width < 1024) {
        setDeviceType('tablet');
      } else {
        setDeviceType('desktop');
      }
      
      // Detect touch capability
      setIsTouch('ontouchstart' in window || navigator.maxTouchPoints > 0);
    };

    detectDevice();
    window.addEventListener('resize', detectDevice);
    return () => window.removeEventListener('resize', detectDevice);
  }, []);

  // Optimize diagram for current device
  const optimizedSpec = useMemo(() => {
    try {
      return optimizeDiagramForDevice(spec, deviceType);
    } catch (error) {
      console.error('Failed to optimize diagram:', error);
      onError?.(error as Error);
      return spec;
    }
  }, [spec, deviceType, onError]);

  // Validate accessibility
  const accessibilityInfo = useMemo(() => {
    return validateDiagramAccessibility(optimizedSpec);
  }, [optimizedSpec]);

  // Generate description for screen readers
  const description = useMemo(() => {
    return generateDiagramDescription(optimizedSpec);
  }, [optimizedSpec]);

  // Calculate responsive dimensions
  const responsiveDimensions = useMemo(() => {
    const padding = deviceType === 'mobile' ? 16 : 24;
    const maxWidth = Math.min(
      optimizedSpec.width || 400,
      viewportWidth - padding * 2
    );
    
    const aspectRatio = (optimizedSpec.height || 300) / (optimizedSpec.width || 400);
    const maxHeight = maxWidth * aspectRatio;

    return {
      width: maxWidth,
      height: maxHeight,
      scale: maxWidth / (optimizedSpec.width || 400),
    };
  }, [optimizedSpec, deviceType, viewportWidth]);

  // Touch event handlers for interactive diagrams
  const handleTouchStart = (e: React.TouchEvent) => {
    if (!interactive) return;
    // Prevent scrolling when interacting with diagram
    e.preventDefault();
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (!interactive) return;
    // Handle touch-based interactions
    e.preventDefault();
  };

  return (
    <div 
      className={`responsive-diagram-container ${className}`}
      role="img"
      aria-label={description}
    >
      {/* Accessibility warnings (development only) */}
      {process.env.NODE_ENV === 'development' && !accessibilityInfo.valid && (
        <div className="mb-2 p-2 bg-yellow-50 border border-yellow-200 rounded text-xs">
          <p className="font-semibold text-yellow-800">Accessibility Issues:</p>
          <ul className="mt-1 text-yellow-700">
            {accessibilityInfo.issues.map((issue, i) => (
              <li key={i}>• {issue}</li>
            ))}
          </ul>
        </div>
      )}

      {/* Responsive wrapper */}
      <div 
        className={`
          relative w-full overflow-hidden
          ${deviceType === 'mobile' ? 'touch-manipulation' : ''}
          ${isTouch ? 'select-none' : ''}
        `}
        style={{
          maxWidth: `${responsiveDimensions.width}px`,
          margin: '0 auto',
        }}
        onTouchStart={interactive ? handleTouchStart : undefined}
        onTouchMove={interactive ? handleTouchMove : undefined}
      >
        {/* Main diagram */}
        <DiagramRenderer
          spec={optimizedSpec}
          maxWidth={responsiveDimensions.width}
          maxHeight={responsiveDimensions.height}
          darkMode={darkMode}
          className={`
            ${deviceType === 'mobile' ? 'diagram-mobile' : ''}
            ${deviceType === 'tablet' ? 'diagram-tablet' : ''}
            ${deviceType === 'desktop' ? 'diagram-desktop' : ''}
          `}
        />

        {/* Touch indicators for interactive diagrams */}
        {interactive && isTouch && (
          <div className="absolute top-2 right-2 bg-black bg-opacity-50 text-white text-xs px-2 py-1 rounded">
            Touch to interact
          </div>
        )}

        {/* Zoom controls for mobile */}
        {deviceType === 'mobile' && interactive && (
          <div className="absolute bottom-2 right-2 flex gap-1">
            <button
              className="w-8 h-8 bg-white rounded-full shadow-lg flex items-center justify-center text-gray-700"
              aria-label="Zoom in"
              onClick={() => {/* Implement zoom */}}
            >
              +
            </button>
            <button
              className="w-8 h-8 bg-white rounded-full shadow-lg flex items-center justify-center text-gray-700"
              aria-label="Zoom out"
              onClick={() => {/* Implement zoom */}}
            >
              −
            </button>
          </div>
        )}
      </div>

      {/* Caption/description for screen readers and mobile */}
      {optimizedSpec.title && (
        <p className="mt-2 text-sm text-center text-gray-600 dark:text-gray-400">
          {optimizedSpec.title}
        </p>
      )}

      {/* Mobile-specific hint */}
      {deviceType === 'mobile' && optimizedSpec.showNotAccurate && (
        <p className="mt-1 text-xs text-center text-gray-500 dark:text-gray-500 italic">
          Diagram not drawn to scale
        </p>
      )}

      {/* Custom styles for responsive behavior */}
      <style jsx>{`
        .responsive-diagram-container {
          -webkit-tap-highlight-color: transparent;
        }
        
        .touch-manipulation {
          touch-action: manipulation;
        }
        
        /* Optimize for different screen sizes */
        @media (max-width: 640px) {
          .diagram-mobile {
            font-size: 12px;
          }
        }
        
        @media (min-width: 641px) and (max-width: 1023px) {
          .diagram-tablet {
            font-size: 14px;
          }
        }
        
        @media (min-width: 1024px) {
          .diagram-desktop {
            font-size: 16px;
          }
        }
        
        /* High DPI screen optimizations */
        @media (-webkit-min-device-pixel-ratio: 2), (min-resolution: 192dpi) {
          .responsive-diagram-container svg {
            shape-rendering: crispEdges;
          }
        }
        
        /* Dark mode adjustments */
        @media (prefers-color-scheme: dark) {
          .responsive-diagram-container {
            filter: brightness(0.9);
          }
        }
        
        /* Print optimizations */
        @media print {
          .responsive-diagram-container {
            page-break-inside: avoid;
            break-inside: avoid;
          }
        }
      `}</style>
    </div>
  );
}