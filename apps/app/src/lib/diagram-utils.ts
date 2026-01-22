/**
 * Diagram validation and sanitization utilities.
 * Fixes common issues with AI-generated diagrams before rendering.
 */

import { DiagramSpec, DiagramElement, PolygonElement, CircleElement, PointElement, LineElement, AxesElement } from '@/types/diagram';

interface ValidationResult {
  isValid: boolean;
  warnings: string[];
  sanitizedSpec: DiagramSpec;
}

/**
 * Validates and sanitizes a diagram specification.
 * Fixes common AI generation mistakes:
 * - Missing width/height
 * - Elements outside bounds
 * - Missing label positions
 */
export function validateAndSanitizeDiagram(spec: DiagramSpec | undefined | null): ValidationResult {
  if (!spec || !spec.elements || spec.elements.length === 0) {
    return {
      isValid: false,
      warnings: ['No diagram spec or empty elements'],
      sanitizedSpec: { elements: [] },
    };
  }

  const warnings: string[] = [];
  const sanitizedSpec = { ...spec };

  // Check if axes element exists (which defines bounds automatically)
  const axesElement = spec.elements.find(el => el.type === 'axes') as AxesElement | undefined;

  // Determine bounds
  let bounds = { xMin: 0, xMax: 10, yMin: 0, yMax: 10 };

  if (axesElement) {
    bounds = {
      xMin: axesElement.xMin,
      xMax: axesElement.xMax,
      yMin: axesElement.yMin,
      yMax: axesElement.yMax,
    };
  } else if (spec.width && spec.height) {
    bounds = { xMin: 0, xMax: spec.width, yMin: 0, yMax: spec.height };
  } else {
    // Calculate bounds from elements
    const calculatedBounds = calculateBoundsFromElements(spec.elements);
    if (calculatedBounds) {
      // Add padding
      const padding = 2;
      sanitizedSpec.width = Math.ceil(calculatedBounds.xMax + padding);
      sanitizedSpec.height = Math.ceil(calculatedBounds.yMax + padding);
      bounds = { xMin: 0, xMax: sanitizedSpec.width, yMin: 0, yMax: sanitizedSpec.height };
      warnings.push(`Auto-calculated bounds: ${sanitizedSpec.width}x${sanitizedSpec.height}`);
    } else {
      // Default bounds
      sanitizedSpec.width = 10;
      sanitizedSpec.height = 10;
      warnings.push('Using default 10x10 bounds - diagram may not render correctly');
    }
  }

  // Validate and fix elements
  sanitizedSpec.elements = spec.elements.map((el, index) => {
    const fixed = fixElement(el, bounds, warnings, index);
    return fixed;
  });

  return {
    isValid: warnings.length === 0,
    warnings,
    sanitizedSpec,
  };
}

/**
 * Calculate bounds from elements if width/height not specified.
 */
function calculateBoundsFromElements(elements: DiagramElement[]): { xMin: number; xMax: number; yMin: number; yMax: number } | null {
  let xMin = Infinity, xMax = -Infinity, yMin = Infinity, yMax = -Infinity;
  let hasPoints = false;

  for (const el of elements) {
    if (el.type === 'polygon') {
      const poly = el as PolygonElement;
      for (const v of poly.vertices) {
        xMin = Math.min(xMin, v.x);
        xMax = Math.max(xMax, v.x);
        yMin = Math.min(yMin, v.y);
        yMax = Math.max(yMax, v.y);
        hasPoints = true;
      }
    } else if (el.type === 'circle') {
      const circle = el as CircleElement;
      xMin = Math.min(xMin, circle.center.x - circle.radius);
      xMax = Math.max(xMax, circle.center.x + circle.radius);
      yMin = Math.min(yMin, circle.center.y - circle.radius);
      yMax = Math.max(yMax, circle.center.y + circle.radius);
      hasPoints = true;
    } else if (el.type === 'point') {
      const point = el as PointElement;
      xMin = Math.min(xMin, point.position.x);
      xMax = Math.max(xMax, point.position.x);
      yMin = Math.min(yMin, point.position.y);
      yMax = Math.max(yMax, point.position.y);
      hasPoints = true;
    } else if (el.type === 'line') {
      const line = el as LineElement;
      xMin = Math.min(xMin, line.from.x, line.to.x);
      xMax = Math.max(xMax, line.from.x, line.to.x);
      yMin = Math.min(yMin, line.from.y, line.to.y);
      yMax = Math.max(yMax, line.from.y, line.to.y);
      hasPoints = true;
    }
  }

  if (!hasPoints) return null;

  return { xMin, xMax, yMin, yMax };
}

/**
 * Fix common issues with individual elements.
 */
function fixElement(
  el: DiagramElement,
  bounds: { xMin: number; xMax: number; yMin: number; yMax: number },
  warnings: string[],
  index: number
): DiagramElement {
  // For compound diagram types (tree, venn, charts), return as-is
  // They handle their own positioning
  if (['tree-diagram', 'venn-diagram', 'bar-chart', 'pie-chart', 'box-plot', 'number-line',
       'prism-3d', 'cylinder-3d', 'cone-3d', 'sphere-3d', 'pyramid-3d'].includes(el.type)) {
    return el;
  }

  const fixed = { ...el } as DiagramElement;

  // Fix polygon vertices
  if (fixed.type === 'polygon') {
    const poly = fixed as PolygonElement;
    poly.vertices = poly.vertices.map((v, vi) => {
      const fixedV = { ...v };

      // Add default label position if missing
      if (v.label && !v.labelPosition) {
        fixedV.labelPosition = inferLabelPosition(v.x, v.y, bounds);
        warnings.push(`Element ${index}: Added labelPosition '${fixedV.labelPosition}' to vertex ${vi}`);
      }

      return fixedV;
    });
  }

  // Fix circle center label
  if (fixed.type === 'circle') {
    const circle = fixed as CircleElement;
    if (circle.center.label && !circle.center.labelPosition) {
      circle.center = {
        ...circle.center,
        labelPosition: 'bottom-right',
      };
      warnings.push(`Element ${index}: Added labelPosition to circle center`);
    }
  }

  // Fix point label
  if (fixed.type === 'point') {
    const point = fixed as PointElement;
    if (point.position.label && !point.position.labelPosition) {
      point.position = {
        ...point.position,
        labelPosition: inferLabelPosition(point.position.x, point.position.y, bounds),
      };
      warnings.push(`Element ${index}: Added labelPosition to point`);
    }
  }

  return fixed;
}

/**
 * Infer the best label position based on point location in bounds.
 */
function inferLabelPosition(
  x: number,
  y: number,
  bounds: { xMin: number; xMax: number; yMin: number; yMax: number }
): 'top' | 'bottom' | 'left' | 'right' | 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right' {
  const midX = (bounds.xMin + bounds.xMax) / 2;
  const midY = (bounds.yMin + bounds.yMax) / 2;

  // Determine quadrant and place label away from center
  const isLeft = x < midX;
  const isBottom = y < midY;

  if (isLeft && isBottom) return 'bottom-left';
  if (isLeft && !isBottom) return 'top-left';
  if (!isLeft && isBottom) return 'bottom-right';
  return 'top-right';
}

/**
 * Quick check if a diagram spec looks valid.
 */
export function isDiagramValid(spec: DiagramSpec | undefined | null): boolean {
  if (!spec || !spec.elements || spec.elements.length === 0) {
    return false;
  }

  // Check if it has axes (which auto-defines bounds) or explicit width/height
  const hasAxes = spec.elements.some(el => el.type === 'axes');
  const hasExplicitBounds = !!(spec.width && spec.height);
  const isCompoundDiagram = spec.elements.some(el =>
    ['tree-diagram', 'venn-diagram', 'bar-chart', 'pie-chart', 'box-plot', 'number-line',
     'prism-3d', 'cylinder-3d', 'cone-3d', 'sphere-3d', 'pyramid-3d'].includes(el.type)
  );

  return hasAxes || hasExplicitBounds || isCompoundDiagram;
}

/**
 * Check for overlapping elements (polygons, circles).
 * Returns warnings for elements that may overlap.
 */
export function checkForOverlaps(spec: DiagramSpec): string[] {
  const warnings: string[] = [];
  const polygons: { index: number; vertices: Array<{ x: number; y: number }> }[] = [];
  const circles: { index: number; cx: number; cy: number; r: number }[] = [];

  spec.elements.forEach((el, i) => {
    if (el.type === 'polygon') {
      const poly = el as PolygonElement;
      polygons.push({ index: i, vertices: poly.vertices });
    } else if (el.type === 'circle') {
      const circle = el as CircleElement;
      circles.push({ index: i, cx: circle.center.x, cy: circle.center.y, r: circle.radius });
    }
  });

  // Check circle overlaps
  for (let i = 0; i < circles.length; i++) {
    for (let j = i + 1; j < circles.length; j++) {
      const c1 = circles[i];
      const c2 = circles[j];
      const dist = Math.sqrt((c1.cx - c2.cx) ** 2 + (c1.cy - c2.cy) ** 2);
      if (dist < (c1.r + c2.r) * 0.5) {
        warnings.push(`Circles at elements ${c1.index} and ${c2.index} may overlap significantly`);
      }
    }
  }

  return warnings;
}

/**
 * Check if elements are too close to the edges (may clip labels).
 */
export function checkEdgeProximity(
  spec: DiagramSpec,
  bounds: { xMin: number; xMax: number; yMin: number; yMax: number },
  margin: number = 1
): string[] {
  const warnings: string[] = [];

  spec.elements.forEach((el, i) => {
    if (el.type === 'polygon') {
      const poly = el as PolygonElement;
      poly.vertices.forEach((v, vi) => {
        if (v.label) {
          if (v.x <= bounds.xMin + margin || v.x >= bounds.xMax - margin ||
              v.y <= bounds.yMin + margin || v.y >= bounds.yMax - margin) {
            warnings.push(`Element ${i} vertex ${vi} with label "${v.label}" is near edge - label may be clipped`);
          }
        }
      });
    } else if (el.type === 'point') {
      const point = el as PointElement;
      if (point.position.label) {
        if (point.position.x <= bounds.xMin + margin || point.position.x >= bounds.xMax - margin ||
            point.position.y <= bounds.yMin + margin || point.position.y >= bounds.yMax - margin) {
          warnings.push(`Point at element ${i} with label "${point.position.label}" is near edge - label may be clipped`);
        }
      }
    }
  });

  return warnings;
}

/**
 * Comprehensive diagram quality check.
 * Returns an object with quality score and issues found.
 */
export function assessDiagramQuality(spec: DiagramSpec | undefined | null): {
  score: number; // 0-100
  issues: string[];
  recommendations: string[];
} {
  if (!spec || !spec.elements || spec.elements.length === 0) {
    return {
      score: 0,
      issues: ['No diagram specification provided'],
      recommendations: ['Provide a valid diagram spec with elements'],
    };
  }

  const issues: string[] = [];
  const recommendations: string[] = [];
  let score = 100;

  // Check for bounds
  const hasAxes = spec.elements.some(el => el.type === 'axes');
  const hasExplicitBounds = !!(spec.width && spec.height);
  const isCompound = spec.elements.some(el =>
    ['tree-diagram', 'venn-diagram', 'bar-chart', 'pie-chart', 'box-plot', 'number-line',
     'prism-3d', 'cylinder-3d', 'cone-3d', 'sphere-3d', 'pyramid-3d'].includes(el.type)
  );

  if (!hasAxes && !hasExplicitBounds && !isCompound) {
    issues.push('Missing width/height - diagram bounds are undefined');
    recommendations.push('Add explicit width and height to the diagram spec');
    score -= 20;
  }

  // Check for showNotAccurate on geometry diagrams
  const hasGeometry = spec.elements.some(el =>
    ['polygon', 'circle', 'angle-marker', 'arc'].includes(el.type)
  );
  if (hasGeometry && !spec.showNotAccurate) {
    recommendations.push('Consider adding showNotAccurate: true for geometry diagrams');
    score -= 5;
  }

  // Check for overlaps
  const overlapWarnings = checkForOverlaps(spec);
  if (overlapWarnings.length > 0) {
    issues.push(...overlapWarnings);
    score -= overlapWarnings.length * 10;
  }

  // Check edge proximity
  const bounds = hasExplicitBounds
    ? { xMin: 0, xMax: spec.width!, yMin: 0, yMax: spec.height! }
    : { xMin: 0, xMax: 10, yMin: 0, yMax: 10 };
  const edgeWarnings = checkEdgeProximity(spec, bounds);
  if (edgeWarnings.length > 0) {
    issues.push(...edgeWarnings);
    score -= edgeWarnings.length * 5;
  }

  // Check for labels without positions
  spec.elements.forEach((el, i) => {
    if (el.type === 'polygon') {
      const poly = el as PolygonElement;
      poly.vertices.forEach((v, vi) => {
        if (v.label && !v.labelPosition) {
          issues.push(`Element ${i} vertex ${vi} has label but no labelPosition`);
          score -= 3;
        }
      });
    }
  });

  return {
    score: Math.max(0, score),
    issues,
    recommendations,
  };
}
