/**
 * Diagram validation and sanitization utilities.
 * Fixes common issues with AI-generated diagrams before rendering.
 */

import { DiagramSpec, DiagramElement, PolygonElement, CircleElement, PointElement, LineElement, AxesElement, AngleMarkerElement, GridElement, TextElement } from '@/types/diagram';

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

  // Normalize coordinates if there are negative values (and no axes)
  const hasAxes = spec.elements.some(el => el.type === 'axes');
  if (!hasAxes) {
    const normalizedSpec = normalizeCoordinatesInternal(sanitizedSpec, 2);
    if (normalizedSpec !== sanitizedSpec) {
      warnings.push('Coordinates were auto-normalized to positive values');
      return {
        isValid: warnings.length === 0,
        warnings,
        sanitizedSpec: normalizedSpec,
      };
    }
  }

  return {
    isValid: warnings.length === 0,
    warnings,
    sanitizedSpec,
  };
}

/**
 * Internal coordinate normalization (used during sanitization).
 */
function normalizeCoordinatesInternal(spec: DiagramSpec, margin: number): DiagramSpec {
  const bounds = calculateBoundsFromElements(spec.elements);
  if (!bounds) return spec;

  // Only normalize if there are negative coordinates or coordinates too close to origin
  if (bounds.xMin >= margin && bounds.yMin >= margin) {
    return spec;
  }

  const shiftX = bounds.xMin < margin ? margin - bounds.xMin : 0;
  const shiftY = bounds.yMin < margin ? margin - bounds.yMin : 0;

  if (shiftX === 0 && shiftY === 0) return spec;

  const normalized = { ...spec };
  normalized.elements = spec.elements.map((el) => {
    if (el.type === 'polygon') {
      const poly = el as PolygonElement;
      return {
        ...poly,
        vertices: poly.vertices.map((v) => ({
          ...v,
          x: v.x + shiftX,
          y: v.y + shiftY,
        })),
      };
    } else if (el.type === 'point') {
      const point = el as PointElement;
      return {
        ...point,
        position: {
          ...point.position,
          x: point.position.x + shiftX,
          y: point.position.y + shiftY,
        },
      };
    } else if (el.type === 'circle') {
      const circle = el as CircleElement;
      return {
        ...circle,
        center: {
          ...circle.center,
          x: circle.center.x + shiftX,
          y: circle.center.y + shiftY,
        },
      };
    } else if (el.type === 'line') {
      const line = el as LineElement;
      return {
        ...line,
        from: { ...line.from, x: line.from.x + shiftX, y: line.from.y + shiftY },
        to: { ...line.to, x: line.to.x + shiftX, y: line.to.y + shiftY },
      };
    }
    return el;
  });

  // Update bounds
  normalized.width = Math.ceil(bounds.xMax + shiftX + margin);
  normalized.height = Math.ceil(bounds.yMax + shiftY + margin);

  return normalized;
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

  // Check for label collisions
  const labelCollisions = checkLabelCollisions(spec);
  if (labelCollisions.length > 0) {
    issues.push(...labelCollisions);
    score -= labelCollisions.length * 5;
  }

  // Check for self-intersecting polygons
  const selfIntersections = checkPolygonSelfIntersection(spec);
  if (selfIntersections.length > 0) {
    issues.push(...selfIntersections);
    score -= selfIntersections.length * 15;
  }

  // Check aspect ratio
  if (hasExplicitBounds) {
    const aspectRatio = spec.width! / spec.height!;
    if (aspectRatio > 3 || aspectRatio < 0.33) {
      issues.push(`Extreme aspect ratio (${aspectRatio.toFixed(2)}) may cause rendering issues`);
      recommendations.push('Use aspect ratios between 1:3 and 3:1 for best results');
      score -= 10;
    }
  }

  // Check for negative coordinates (often an AI mistake)
  const negativeCoords = checkNegativeCoordinates(spec);
  if (negativeCoords.length > 0 && !hasAxes) {
    issues.push(...negativeCoords);
    recommendations.push('Use positive coordinates or add an axes element to handle negative values');
    score -= negativeCoords.length * 5;
  }

  return {
    score: Math.max(0, score),
    issues,
    recommendations,
  };
}

/**
 * Check for label collisions - labels that would overlap when rendered.
 */
export function checkLabelCollisions(spec: DiagramSpec): string[] {
  const warnings: string[] = [];
  const labelPositions: Array<{ x: number; y: number; label: string; elementIndex: number }> = [];

  // Collect all label positions
  spec.elements.forEach((el, i) => {
    if (el.type === 'polygon') {
      const poly = el as PolygonElement;
      poly.vertices.forEach((v) => {
        if (v.label) {
          labelPositions.push({ x: v.x, y: v.y, label: v.label, elementIndex: i });
        }
      });
    } else if (el.type === 'point') {
      const point = el as PointElement;
      if (point.position.label) {
        labelPositions.push({
          x: point.position.x,
          y: point.position.y,
          label: point.position.label,
          elementIndex: i,
        });
      }
    } else if (el.type === 'circle') {
      const circle = el as CircleElement;
      if (circle.center.label) {
        labelPositions.push({
          x: circle.center.x,
          y: circle.center.y,
          label: circle.center.label,
          elementIndex: i,
        });
      }
    }
  });

  // Check for collisions (labels too close together)
  const MIN_LABEL_DISTANCE = 1.5; // Minimum units between labels
  for (let i = 0; i < labelPositions.length; i++) {
    for (let j = i + 1; j < labelPositions.length; j++) {
      const l1 = labelPositions[i];
      const l2 = labelPositions[j];
      const dist = Math.sqrt((l1.x - l2.x) ** 2 + (l1.y - l2.y) ** 2);
      if (dist < MIN_LABEL_DISTANCE) {
        warnings.push(
          `Labels "${l1.label}" and "${l2.label}" are too close (${dist.toFixed(1)} units) - may overlap`
        );
      }
    }
  }

  return warnings;
}

/**
 * Check for self-intersecting polygons (invalid geometry).
 */
export function checkPolygonSelfIntersection(spec: DiagramSpec): string[] {
  const warnings: string[] = [];

  spec.elements.forEach((el, i) => {
    if (el.type === 'polygon') {
      const poly = el as PolygonElement;
      const vertices = poly.vertices;

      // Check each pair of non-adjacent edges for intersection
      for (let a = 0; a < vertices.length; a++) {
        const a1 = vertices[a];
        const a2 = vertices[(a + 1) % vertices.length];

        for (let b = a + 2; b < vertices.length; b++) {
          // Skip adjacent edges
          if (b === (a + vertices.length - 1) % vertices.length) continue;

          const b1 = vertices[b];
          const b2 = vertices[(b + 1) % vertices.length];

          if (lineSegmentsIntersect(a1, a2, b1, b2)) {
            warnings.push(`Polygon at element ${i} has self-intersecting edges`);
            return; // Only report once per polygon
          }
        }
      }
    }
  });

  return warnings;
}

/**
 * Check if two line segments intersect (excluding endpoints).
 */
function lineSegmentsIntersect(
  p1: { x: number; y: number },
  p2: { x: number; y: number },
  p3: { x: number; y: number },
  p4: { x: number; y: number }
): boolean {
  const ccw = (A: { x: number; y: number }, B: { x: number; y: number }, C: { x: number; y: number }) => {
    return (C.y - A.y) * (B.x - A.x) > (B.y - A.y) * (C.x - A.x);
  };

  // Check if segments properly intersect (not at endpoints)
  return (
    ccw(p1, p3, p4) !== ccw(p2, p3, p4) &&
    ccw(p1, p2, p3) !== ccw(p1, p2, p4)
  );
}

/**
 * Check for negative coordinates without an axes element.
 */
export function checkNegativeCoordinates(spec: DiagramSpec): string[] {
  const warnings: string[] = [];

  spec.elements.forEach((el, i) => {
    if (el.type === 'polygon') {
      const poly = el as PolygonElement;
      poly.vertices.forEach((v, vi) => {
        if (v.x < 0 || v.y < 0) {
          warnings.push(`Element ${i} vertex ${vi} has negative coordinates (${v.x}, ${v.y})`);
        }
      });
    } else if (el.type === 'point') {
      const point = el as PointElement;
      if (point.position.x < 0 || point.position.y < 0) {
        warnings.push(`Point at element ${i} has negative coordinates`);
      }
    } else if (el.type === 'circle') {
      const circle = el as CircleElement;
      if (circle.center.x < 0 || circle.center.y < 0) {
        warnings.push(`Circle at element ${i} has negative center coordinates`);
      }
    } else if (el.type === 'line') {
      const line = el as LineElement;
      if (line.from.x < 0 || line.from.y < 0 || line.to.x < 0 || line.to.y < 0) {
        warnings.push(`Line at element ${i} has negative coordinates`);
      }
    }
  });

  return warnings;
}

/**
 * Normalize coordinates to ensure they fit within positive bounds.
 * Shifts all coordinates so minimum x and y are at least `margin` units from origin.
 */
export function normalizeCoordinates(spec: DiagramSpec, margin: number = 2): DiagramSpec {
  const bounds = calculateBoundsFromElements(spec.elements);
  if (!bounds) return spec;

  // Only normalize if there are negative coordinates or coordinates too close to origin
  if (bounds.xMin >= margin && bounds.yMin >= margin) {
    return spec;
  }

  const shiftX = bounds.xMin < margin ? margin - bounds.xMin : 0;
  const shiftY = bounds.yMin < margin ? margin - bounds.yMin : 0;

  if (shiftX === 0 && shiftY === 0) return spec;

  const normalized = { ...spec };
  normalized.elements = spec.elements.map((el) => {
    if (el.type === 'polygon') {
      const poly = el as PolygonElement;
      return {
        ...poly,
        vertices: poly.vertices.map((v) => ({
          ...v,
          x: v.x + shiftX,
          y: v.y + shiftY,
        })),
      };
    } else if (el.type === 'point') {
      const point = el as PointElement;
      return {
        ...point,
        position: {
          ...point.position,
          x: point.position.x + shiftX,
          y: point.position.y + shiftY,
        },
      };
    } else if (el.type === 'circle') {
      const circle = el as CircleElement;
      return {
        ...circle,
        center: {
          ...circle.center,
          x: circle.center.x + shiftX,
          y: circle.center.y + shiftY,
        },
      };
    } else if (el.type === 'line') {
      const line = el as LineElement;
      return {
        ...line,
        from: { ...line.from, x: line.from.x + shiftX, y: line.from.y + shiftY },
        to: { ...line.to, x: line.to.x + shiftX, y: line.to.y + shiftY },
      };
    }
    return el;
  });

  // Update bounds
  if (normalized.width && normalized.height) {
    normalized.width = bounds.xMax + shiftX + margin;
    normalized.height = bounds.yMax + shiftY + margin;
  }

  return normalized;
}

/**
 * Validate right angles in a polygon (useful for rectangles, right triangles).
 * Returns the actual angle at each vertex marked as a right angle.
 */
export function validateRightAngles(spec: DiagramSpec): Array<{
  elementIndex: number;
  vertexIndex: number;
  expectedAngle: number;
  actualAngle: number;
  isValid: boolean;
}> {
  const results: Array<{
    elementIndex: number;
    vertexIndex: number;
    expectedAngle: number;
    actualAngle: number;
    isValid: boolean;
  }> = [];

  spec.elements.forEach((el, i) => {
    if (el.type === 'angle-marker') {
      const marker = el as AngleMarkerElement;
      if (marker.isRightAngle) {
        const angle = calculateAngle(marker.ray1End, marker.vertex, marker.ray2End);
        results.push({
          elementIndex: i,
          vertexIndex: -1,
          expectedAngle: 90,
          actualAngle: angle,
          isValid: Math.abs(angle - 90) < 5, // 5 degree tolerance
        });
      }
    }
  });

  return results;
}

/**
 * Calculate angle at vertex B given points A, B, C.
 */
function calculateAngle(
  a: { x: number; y: number },
  b: { x: number; y: number },
  c: { x: number; y: number }
): number {
  const ba = { x: a.x - b.x, y: a.y - b.y };
  const bc = { x: c.x - b.x, y: c.y - b.y };

  const dotProduct = ba.x * bc.x + ba.y * bc.y;
  const magnitudeBA = Math.sqrt(ba.x ** 2 + ba.y ** 2);
  const magnitudeBC = Math.sqrt(bc.x ** 2 + bc.y ** 2);

  if (magnitudeBA === 0 || magnitudeBC === 0) return 0;

  const cosAngle = dotProduct / (magnitudeBA * magnitudeBC);
  const clampedCos = Math.max(-1, Math.min(1, cosAngle));
  return Math.acos(clampedCos) * (180 / Math.PI);
}

/**
 * Generate a debug overlay spec that shows coordinate grid, bounds, and element indices.
 * Useful for development and debugging diagram issues.
 */
export function generateDebugOverlay(spec: DiagramSpec): DiagramSpec {
  const bounds = calculateBoundsFromElements(spec.elements);
  if (!bounds) return spec;

  const width = spec.width || bounds.xMax + 2;
  const height = spec.height || bounds.yMax + 2;

  const debugElements: DiagramElement[] = [];

  // Add grid
  debugElements.push({
    type: 'grid',
    xMin: 0,
    xMax: width,
    yMin: 0,
    yMax: height,
    xStep: 1,
    yStep: 1,
    color: '#ff000030',
  } as GridElement);

  // Add element index labels
  spec.elements.forEach((el, i) => {
    let labelPos = { x: 0, y: 0 };

    if (el.type === 'polygon') {
      const poly = el as PolygonElement;
      // Use centroid
      const cx = poly.vertices.reduce((sum, v) => sum + v.x, 0) / poly.vertices.length;
      const cy = poly.vertices.reduce((sum, v) => sum + v.y, 0) / poly.vertices.length;
      labelPos = { x: cx, y: cy };
    } else if (el.type === 'circle') {
      const circle = el as CircleElement;
      labelPos = { x: circle.center.x, y: circle.center.y };
    } else if (el.type === 'point') {
      const point = el as PointElement;
      labelPos = { x: point.position.x + 0.5, y: point.position.y + 0.5 };
    }

    debugElements.push({
      type: 'text',
      position: labelPos,
      content: `[${i}]`,
      fontSize: 10,
      color: '#ff0000',
    } as TextElement);
  });

  return {
    ...spec,
    elements: [...spec.elements, ...debugElements],
  };
}

// ============================================
// Pre-built Templates for Common Diagram Types
// ============================================

/**
 * Template generators for common diagram patterns.
 * These ensure consistent, well-formed diagrams.
 */
export const DiagramTemplates = {
  /**
   * Create a right-angled triangle template.
   */
  rightTriangle(options: {
    base: number;
    height: number;
    labels?: { A?: string; B?: string; C?: string };
    sideLabels?: { base?: string; height?: string; hypotenuse?: string };
  }): DiagramSpec {
    const { base, height, labels = {}, sideLabels = {} } = options;
    const margin = 2;
    return {
      width: base + margin * 2,
      height: height + margin * 2,
      showNotAccurate: true,
      elements: [
        {
          type: 'polygon',
          vertices: [
            { x: margin, y: margin, label: labels.A || 'A', labelPosition: 'bottom-left' },
            { x: margin + base, y: margin, label: labels.B || 'B', labelPosition: 'bottom-right' },
            { x: margin, y: margin + height, label: labels.C || 'C', labelPosition: 'top-left' },
          ],
          sideLabels: [
            ...(sideLabels.base ? [{ fromIndex: 0, toIndex: 1, label: sideLabels.base }] : []),
            ...(sideLabels.height ? [{ fromIndex: 0, toIndex: 2, label: sideLabels.height, position: 'outside' as const }] : []),
            ...(sideLabels.hypotenuse ? [{ fromIndex: 1, toIndex: 2, label: sideLabels.hypotenuse }] : []),
          ],
        },
        {
          type: 'angle-marker',
          vertex: { x: margin, y: margin },
          ray1End: { x: margin + base, y: margin },
          ray2End: { x: margin, y: margin + height },
          isRightAngle: true,
        },
      ],
    } as DiagramSpec;
  },

  /**
   * Create a circle with center and radius template.
   */
  circleWithRadius(options: {
    radius: number;
    centerLabel?: string;
    radiusLabel?: string;
  }): DiagramSpec {
    const { radius, centerLabel = 'O', radiusLabel } = options;
    const size = radius * 2 + 4;
    const center = size / 2;
    return {
      width: size,
      height: size,
      showNotAccurate: true,
      elements: [
        {
          type: 'circle',
          center: { x: center, y: center, label: centerLabel, labelPosition: 'bottom-right' },
          radius,
          radiusLabel,
        },
      ],
    } as DiagramSpec;
  },

  /**
   * Create a quadrilateral (rectangle, square, parallelogram, etc.).
   */
  quadrilateral(options: {
    vertices: Array<{ x: number; y: number; label?: string }>;
    sideLabels?: Array<{ fromIndex: number; toIndex: number; label: string }>;
  }): DiagramSpec {
    const { vertices, sideLabels = [] } = options;
    const xs = vertices.map(v => v.x);
    const ys = vertices.map(v => v.y);
    const margin = 2;
    return {
      width: Math.max(...xs) + margin,
      height: Math.max(...ys) + margin,
      showNotAccurate: true,
      elements: [
        {
          type: 'polygon',
          vertices: vertices.map((v, i) => ({
            ...v,
            labelPosition: inferLabelPositionFromVertices(v, vertices),
          })),
          sideLabels,
        },
      ],
    } as DiagramSpec;
  },

  /**
   * Create a simple coordinate graph template.
   */
  coordinateGraph(options: {
    xMin: number;
    xMax: number;
    yMin: number;
    yMax: number;
    fn?: string;
    points?: Array<{ x: number; y: number; label?: string }>;
  }): DiagramSpec {
    const { xMin, xMax, yMin, yMax, fn, points = [] } = options;
    const elements: DiagramElement[] = [
      {
        type: 'grid',
        xMin, xMax, yMin, yMax,
        xStep: 1,
        yStep: 1,
      } as GridElement,
      {
        type: 'axes',
        xMin, xMax, yMin, yMax,
        showNumbers: true,
        xLabel: 'x',
        yLabel: 'y',
      } as AxesElement,
    ];

    if (fn) {
      elements.push({
        type: 'curve',
        fn,
        stroke: '#3b82f6',
      } as any);
    }

    points.forEach(p => {
      elements.push({
        type: 'point',
        position: {
          x: p.x,
          y: p.y,
          label: p.label,
          labelPosition: 'top-right',
        },
        style: 'dot',
      } as PointElement);
    });

    return { elements } as DiagramSpec;
  },
};

/**
 * Helper to infer label position based on vertex position relative to others.
 */
function inferLabelPositionFromVertices(
  vertex: { x: number; y: number },
  allVertices: Array<{ x: number; y: number }>
): 'top' | 'bottom' | 'left' | 'right' | 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right' {
  const cx = allVertices.reduce((sum, v) => sum + v.x, 0) / allVertices.length;
  const cy = allVertices.reduce((sum, v) => sum + v.y, 0) / allVertices.length;

  const isLeft = vertex.x < cx;
  const isBottom = vertex.y < cy;

  if (isLeft && isBottom) return 'bottom-left';
  if (isLeft && !isBottom) return 'top-left';
  if (!isLeft && isBottom) return 'bottom-right';
  return 'top-right';
}
