'use client';

import React, { useEffect, useMemo, useState } from 'react';
import { DiagramSpec } from '@/types/diagram';
import { DiagramRenderer } from './DiagramRenderer';
import { describeDiagram } from '@/lib/diagram-utils';

interface ResponsiveDiagramRendererProps {
  spec: DiagramSpec;
  className?: string;
}

/**
 * Viewport-aware wrapper around DiagramRenderer.
 *
 * spec.width/height are LOGICAL units (the schema tells the model to use
 * ~10-14); DiagramRenderer maps them onto a pixel canvas capped by
 * maxWidth/maxHeight. The previous version passed `min(spec.width, viewport)`
 * as the pixel cap — with logical widths of 7-14, every diagram on every
 * surface rendered as a ~12-pixel speck with a negative internal scale.
 */
export function ResponsiveDiagramRenderer({ spec, className = '' }: ResponsiveDiagramRendererProps) {
  const [viewportWidth, setViewportWidth] = useState(1024);

  useEffect(() => {
    const onResize = () => setViewportWidth(window.innerWidth);
    onResize();
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, []);

  // Pixel budget: comfortable desktop size, shrinking with the viewport
  const { maxWidth, maxHeight } = useMemo(() => {
    const horizontalPadding = viewportWidth < 640 ? 32 : 48;
    const width = Math.max(220, Math.min(520, viewportWidth - horizontalPadding));
    return { maxWidth: width, maxHeight: 420 };
  }, [viewportWidth]);

  // Screen-reader description derived from the diagram contents
  const description = useMemo(() => describeDiagram(spec), [spec]);

  return (
    <div className={`w-full ${className}`} role="img" aria-label={description}>
      <DiagramRenderer spec={spec} maxWidth={maxWidth} maxHeight={maxHeight} />
      {spec.title && (
        <p className="mt-2 text-sm text-center text-[var(--color-text-muted)]">
          {spec.title}
        </p>
      )}
    </div>
  );
}
