/**
 * Comprehensive tests for the diagram generation and validation system
 * Tests validateAndSanitizeDiagram, assessDiagramQuality, and all element types
 */

import {
  validateAndSanitizeDiagram,
  isDiagramValid,
  assessDiagramQuality,
  checkForOverlaps,
  checkLabelCollisions,
  checkPolygonSelfIntersection,
  normalizeCoordinates,
  validateRightAngles,
  DiagramTemplates,
} from '../diagram-utils';

import type {
  DiagramSpec,
  PointElement,
  LineElement,
  PolygonElement,
  CircleElement,
  ArcElement,
  AngleMarkerElement,
  TextElement,
  ArrowElement,
  CurveElement,
  RectangleElement,
  GridElement,
  AxesElement,
  TreeDiagramElement,
  VennDiagramElement,
  NumberLineElement,
  BarChartElement,
  PieChartElement,
  BoxPlotElement,
  Prism3DElement,
  Cylinder3DElement,
  Cone3DElement,
  Sphere3DElement,
  Pyramid3DElement,
} from '../../types/diagram';

// ============================================
// Test Helpers
// ============================================

interface TestResult {
  name: string;
  passed: boolean;
  error?: string;
}

const results: TestResult[] = [];

function test(name: string, fn: () => void): void {
  try {
    fn();
    results.push({ name, passed: true });
  } catch (error) {
    results.push({
      name,
      passed: false,
      error: error instanceof Error ? error.message : String(error),
    });
  }
}

function expect<T>(actual: T) {
  return {
    toBe(expected: T) {
      if (actual !== expected) {
        throw new Error(`Expected ${JSON.stringify(expected)}, got ${JSON.stringify(actual)}`);
      }
    },
    toBeTrue() {
      if (actual !== true) {
        throw new Error(`Expected true, got ${JSON.stringify(actual)}`);
      }
    },
    toBeFalse() {
      if (actual !== false) {
        throw new Error(`Expected false, got ${JSON.stringify(actual)}`);
      }
    },
    toBeGreaterThan(expected: number) {
      if (typeof actual !== 'number' || actual <= expected) {
        throw new Error(`Expected ${actual} to be greater than ${expected}`);
      }
    },
    toBeLessThan(expected: number) {
      if (typeof actual !== 'number' || actual >= expected) {
        throw new Error(`Expected ${actual} to be less than ${expected}`);
      }
    },
    toBeGreaterThanOrEqual(expected: number) {
      if (typeof actual !== 'number' || actual < expected) {
        throw new Error(`Expected ${actual} to be >= ${expected}`);
      }
    },
    toBeLessThanOrEqual(expected: number) {
      if (typeof actual !== 'number' || actual > expected) {
        throw new Error(`Expected ${actual} to be <= ${expected}`);
      }
    },
    toBeDefined() {
      if (actual === undefined || actual === null) {
        throw new Error(`Expected value to be defined, got ${actual}`);
      }
    },
    toHaveLength(expected: number) {
      if (!Array.isArray(actual) || actual.length !== expected) {
        throw new Error(`Expected array of length ${expected}, got ${Array.isArray(actual) ? actual.length : 'non-array'}`);
      }
    },
    toHaveLengthGreaterThan(expected: number) {
      if (!Array.isArray(actual) || actual.length <= expected) {
        throw new Error(`Expected array with length > ${expected}, got ${Array.isArray(actual) ? actual.length : 'non-array'}`);
      }
    },
    toContain(expected: unknown) {
      if (!Array.isArray(actual) || !actual.includes(expected)) {
        throw new Error(`Expected array to contain ${JSON.stringify(expected)}`);
      }
    },
  };
}

// ============================================
// Test Data: Valid DiagramSpecs for Each Element Type
// ============================================

// WITH explicit bounds to be considered "valid" by isDiagramValid
const validSpecWithBounds: DiagramSpec = {
  elements: [
    {
      type: 'polygon',
      vertices: [
        { x: 2, y: 2, label: 'A', labelPosition: 'bottom-left' },
        { x: 12, y: 2, label: 'B', labelPosition: 'bottom-right' },
        { x: 7, y: 10, label: 'C', labelPosition: 'top' },
      ],
    } as PolygonElement,
  ],
  width: 400,
  height: 300,
};

const validAxesSpec: DiagramSpec = {
  elements: [
    {
      type: 'axes',
      xMin: -10,
      xMax: 10,
      yMin: -10,
      yMax: 10,
      showNumbers: true,
      xLabel: 'x',
      yLabel: 'y',
    } as AxesElement,
  ],
};

// Compound diagrams (tree, venn, charts) are also valid without explicit bounds
const validTreeSpec: DiagramSpec = {
  elements: [
    {
      type: 'tree-diagram',
      root: {
        label: 'Start',
        children: [
          { probability: '0.5', label: 'H', node: { label: 'Heads' } },
          { probability: '0.5', label: 'T', node: { label: 'Tails' } },
        ],
      },
    } as TreeDiagramElement,
  ],
};

const validBarChartSpec: DiagramSpec = {
  elements: [
    {
      type: 'bar-chart',
      data: [
        { label: 'A', value: 10 },
        { label: 'B', value: 20 },
      ],
    } as BarChartElement,
  ],
};

// ============================================
// Tests: validateAndSanitizeDiagram
// ============================================

test('validateAndSanitizeDiagram: returns sanitized spec for valid diagram', () => {
  const result = validateAndSanitizeDiagram(validSpecWithBounds);
  expect(result.sanitizedSpec.elements.length).toBe(1);
  expect(result.sanitizedSpec).toBeDefined();
});

test('validateAndSanitizeDiagram: isValid true when no auto-fixes needed', () => {
  // A diagram with explicit bounds and all labelPositions specified
  const spec: DiagramSpec = {
    elements: [
      {
        type: 'polygon',
        vertices: [
          { x: 2, y: 2, label: 'A', labelPosition: 'bottom-left' },
          { x: 12, y: 2, label: 'B', labelPosition: 'bottom-right' },
          { x: 7, y: 10, label: 'C', labelPosition: 'top' },
        ],
      } as PolygonElement,
    ],
    width: 400,
    height: 300,
  };
  const result = validateAndSanitizeDiagram(spec);
  expect(result.isValid).toBeTrue();
  expect(result.warnings.length).toBe(0);
});

test('validateAndSanitizeDiagram: handles empty elements array', () => {
  const spec: DiagramSpec = { elements: [] };
  const result = validateAndSanitizeDiagram(spec);
  expect(result.isValid).toBeFalse();
  expect(result.warnings.length).toBeGreaterThan(0);
});

test('validateAndSanitizeDiagram: handles null/undefined', () => {
  const result1 = validateAndSanitizeDiagram(null as unknown as DiagramSpec);
  const result2 = validateAndSanitizeDiagram(undefined as unknown as DiagramSpec);
  expect(result1.isValid).toBeFalse();
  expect(result2.isValid).toBeFalse();
});

test('validateAndSanitizeDiagram: auto-calculates bounds when missing', () => {
  const spec: DiagramSpec = {
    elements: [
      {
        type: 'polygon',
        vertices: [
          { x: 2, y: 2 },
          { x: 12, y: 2 },
          { x: 7, y: 10 },
        ],
      } as PolygonElement,
    ],
  };
  const result = validateAndSanitizeDiagram(spec);
  // Should have calculated bounds
  expect(result.sanitizedSpec.width).toBeDefined();
  expect(result.sanitizedSpec.height).toBeDefined();
  // Should have warning about auto-calculation
  expect(result.warnings.length).toBeGreaterThan(0);
});

test('validateAndSanitizeDiagram: adds missing labelPositions', () => {
  const spec: DiagramSpec = {
    elements: [
      {
        type: 'polygon',
        vertices: [
          { x: 2, y: 2, label: 'A' }, // Missing labelPosition
          { x: 12, y: 2, label: 'B', labelPosition: 'bottom-right' },
          { x: 7, y: 10, label: 'C', labelPosition: 'top' },
        ],
      } as PolygonElement,
    ],
    width: 400,
    height: 300,
  };
  const result = validateAndSanitizeDiagram(spec);
  // Should have added labelPosition for vertex A
  expect(result.warnings.length).toBeGreaterThan(0);
  const poly = result.sanitizedSpec.elements[0] as PolygonElement;
  expect(poly.vertices[0].labelPosition).toBeDefined();
});

// ============================================
// Tests: isDiagramValid
// ============================================

test('isDiagramValid: returns true for diagram with explicit bounds', () => {
  expect(isDiagramValid(validSpecWithBounds)).toBeTrue();
});

test('isDiagramValid: returns true for diagram with axes', () => {
  expect(isDiagramValid(validAxesSpec)).toBeTrue();
});

test('isDiagramValid: returns true for compound diagrams', () => {
  expect(isDiagramValid(validTreeSpec)).toBeTrue();
  expect(isDiagramValid(validBarChartSpec)).toBeTrue();
});

test('isDiagramValid: returns false for diagram without bounds or compound type', () => {
  const spec: DiagramSpec = {
    elements: [{ type: 'point', position: { x: 5, y: 5 } } as PointElement],
  };
  expect(isDiagramValid(spec)).toBeFalse();
});

test('isDiagramValid: returns false for null', () => {
  expect(isDiagramValid(null as unknown as DiagramSpec)).toBeFalse();
});

test('isDiagramValid: returns false for undefined', () => {
  expect(isDiagramValid(undefined as unknown as DiagramSpec)).toBeFalse();
});

test('isDiagramValid: returns false for non-object', () => {
  expect(isDiagramValid('string' as unknown as DiagramSpec)).toBeFalse();
});

test('isDiagramValid: returns false for empty elements', () => {
  expect(isDiagramValid({ elements: [] } as DiagramSpec)).toBeFalse();
});

// ============================================
// Tests: assessDiagramQuality
// ============================================

test('assessDiagramQuality: returns score object with valid properties', () => {
  const result = assessDiagramQuality(validSpecWithBounds);
  expect(typeof result.score).toBe('number');
  expect(Array.isArray(result.issues)).toBeTrue();
  expect(Array.isArray(result.recommendations)).toBeTrue();
});

test('assessDiagramQuality: high score for well-formed diagram', () => {
  const spec: DiagramSpec = {
    elements: [
      {
        type: 'polygon',
        vertices: [
          { x: 2, y: 2, label: 'A', labelPosition: 'bottom-left' },
          { x: 12, y: 2, label: 'B', labelPosition: 'bottom-right' },
          { x: 7, y: 10, label: 'C', labelPosition: 'top' },
        ],
      } as PolygonElement,
    ],
    width: 400,
    height: 300,
    showNotAccurate: true,
  };
  const result = assessDiagramQuality(spec);
  expect(result.score).toBeGreaterThanOrEqual(80);
});

test('assessDiagramQuality: lower score for diagram missing bounds', () => {
  const spec: DiagramSpec = {
    elements: [
      { type: 'point', position: { x: 5, y: 5 } } as PointElement,
    ],
  };
  const result = assessDiagramQuality(spec);
  expect(result.score).toBeLessThan(100);
  expect(result.issues.length).toBeGreaterThan(0);
});

test('assessDiagramQuality: handles empty/null spec', () => {
  const result1 = assessDiagramQuality(null);
  const result2 = assessDiagramQuality({ elements: [] });
  expect(result1.score).toBe(0);
  expect(result2.score).toBe(0);
});

// ============================================
// Tests: checkForOverlaps
// ============================================

test('checkForOverlaps: detects overlapping circles', () => {
  const spec: DiagramSpec = {
    elements: [
      { type: 'circle', center: { x: 5, y: 5 }, radius: 3 } as CircleElement,
      { type: 'circle', center: { x: 5, y: 5 }, radius: 3 } as CircleElement,
    ],
  };
  const overlaps = checkForOverlaps(spec);
  expect(overlaps.length).toBeGreaterThan(0);
});

test('checkForOverlaps: no overlaps for distant circles', () => {
  const spec: DiagramSpec = {
    elements: [
      { type: 'circle', center: { x: 0, y: 0 }, radius: 1 } as CircleElement,
      { type: 'circle', center: { x: 100, y: 100 }, radius: 1 } as CircleElement,
    ],
  };
  const overlaps = checkForOverlaps(spec);
  expect(overlaps.length).toBe(0);
});

// ============================================
// Tests: checkLabelCollisions
// ============================================

test('checkLabelCollisions: detects overlapping labels', () => {
  const spec: DiagramSpec = {
    elements: [
      { type: 'point', position: { x: 5, y: 5, label: 'A' } } as PointElement,
      { type: 'point', position: { x: 5, y: 5.5, label: 'B' } } as PointElement,
    ],
  };
  const collisions = checkLabelCollisions(spec);
  expect(collisions.length).toBeGreaterThan(0);
});

test('checkLabelCollisions: no collisions for distant labels', () => {
  const spec: DiagramSpec = {
    elements: [
      { type: 'point', position: { x: 0, y: 0, label: 'A' } } as PointElement,
      { type: 'point', position: { x: 100, y: 100, label: 'B' } } as PointElement,
    ],
  };
  const collisions = checkLabelCollisions(spec);
  expect(collisions.length).toBe(0);
});

// ============================================
// Tests: checkPolygonSelfIntersection
// ============================================

test('checkPolygonSelfIntersection: detects self-intersecting polygon (figure-8)', () => {
  const spec: DiagramSpec = {
    elements: [
      {
        type: 'polygon',
        vertices: [
          { x: 0, y: 0 },
          { x: 10, y: 10 },
          { x: 10, y: 0 },
          { x: 0, y: 10 },
        ],
      } as PolygonElement,
    ],
  };
  const issues = checkPolygonSelfIntersection(spec);
  expect(issues.length).toBeGreaterThan(0);
});

test('checkPolygonSelfIntersection: no issues for simple triangle', () => {
  const spec: DiagramSpec = {
    elements: [
      {
        type: 'polygon',
        vertices: [
          { x: 0, y: 0 },
          { x: 10, y: 0 },
          { x: 5, y: 10 },
        ],
      } as PolygonElement,
    ],
  };
  const issues = checkPolygonSelfIntersection(spec);
  expect(issues.length).toBe(0);
});

test('checkPolygonSelfIntersection: no issues for convex quadrilateral', () => {
  const spec: DiagramSpec = {
    elements: [
      {
        type: 'polygon',
        vertices: [
          { x: 0, y: 0 },
          { x: 10, y: 0 },
          { x: 10, y: 10 },
          { x: 0, y: 10 },
        ],
      } as PolygonElement,
    ],
  };
  const issues = checkPolygonSelfIntersection(spec);
  expect(issues.length).toBe(0);
});

// ============================================
// Tests: validateRightAngles
// ============================================

test('validateRightAngles: validates actual right angle', () => {
  const spec: DiagramSpec = {
    elements: [
      {
        type: 'angle-marker',
        vertex: { x: 0, y: 0 },
        ray1End: { x: 10, y: 0 },
        ray2End: { x: 0, y: 10 },
        isRightAngle: true,
      } as AngleMarkerElement,
    ],
  };
  const results = validateRightAngles(spec);
  expect(results.length).toBe(1);
  expect(results[0].isValid).toBeTrue();
  expect(Math.abs(results[0].actualAngle - 90)).toBeLessThan(5);
});

test('validateRightAngles: detects non-right angle marked as right', () => {
  const spec: DiagramSpec = {
    elements: [
      {
        type: 'angle-marker',
        vertex: { x: 0, y: 0 },
        ray1End: { x: 10, y: 0 },
        ray2End: { x: 10, y: 10 }, // 45 degrees, not 90
        isRightAngle: true,
      } as AngleMarkerElement,
    ],
  };
  const results = validateRightAngles(spec);
  expect(results.length).toBe(1);
  expect(results[0].isValid).toBeFalse();
});

// ============================================
// Tests: normalizeCoordinates
// ============================================

test('normalizeCoordinates: shifts negative coordinates', () => {
  const spec: DiagramSpec = {
    elements: [
      { type: 'point', position: { x: -5, y: -5 } } as PointElement,
    ],
  };
  const normalized = normalizeCoordinates(spec, 2);
  const point = normalized.elements[0] as PointElement;
  expect(point.position.x).toBeGreaterThanOrEqual(2);
  expect(point.position.y).toBeGreaterThanOrEqual(2);
});

test('normalizeCoordinates: preserves already-positive coordinates', () => {
  const spec: DiagramSpec = {
    elements: [
      { type: 'point', position: { x: 10, y: 10 } } as PointElement,
    ],
  };
  const normalized = normalizeCoordinates(spec, 2);
  const point = normalized.elements[0] as PointElement;
  expect(point.position.x).toBe(10);
  expect(point.position.y).toBe(10);
});

// ============================================
// Tests: DiagramTemplates
// ============================================

test('DiagramTemplates.rightTriangle: creates valid diagram', () => {
  const triangle = DiagramTemplates.rightTriangle({
    base: 3,
    height: 4,
    labels: { A: 'A', B: 'B', C: 'C' },
  });
  expect(triangle.elements.length).toBeGreaterThan(0);
  expect(triangle.width).toBeDefined();
  expect(triangle.height).toBeDefined();
  expect(isDiagramValid(triangle)).toBeTrue();
});

test('DiagramTemplates.circleWithRadius: creates valid diagram', () => {
  const circle = DiagramTemplates.circleWithRadius({
    radius: 5,
    centerLabel: 'O',
    radiusLabel: 'r = 5',
  });
  expect(circle.elements.length).toBeGreaterThan(0);
  expect(isDiagramValid(circle)).toBeTrue();
});

test('DiagramTemplates.quadrilateral: creates valid diagram', () => {
  const quad = DiagramTemplates.quadrilateral({
    vertices: [
      { x: 2, y: 2, label: 'A' },
      { x: 12, y: 2, label: 'B' },
      { x: 14, y: 10, label: 'C' },
      { x: 4, y: 10, label: 'D' },
    ],
  });
  expect(quad.elements.length).toBeGreaterThan(0);
  expect(isDiagramValid(quad)).toBeTrue();
});

test('DiagramTemplates.coordinateGraph: creates valid diagram', () => {
  const graph = DiagramTemplates.coordinateGraph({
    xMin: -10,
    xMax: 10,
    yMin: -10,
    yMax: 10,
    fn: 'x^2',
  });
  expect(graph.elements.length).toBeGreaterThan(0);
  // Has axes, so should be valid
  expect(isDiagramValid(graph)).toBeTrue();
});

// ============================================
// Tests: Element Type Rendering Support
// All element types should pass through validateAndSanitizeDiagram
// ============================================

test('Element type: point passes sanitization', () => {
  const spec: DiagramSpec = {
    elements: [{ type: 'point', position: { x: 5, y: 5 } } as PointElement],
    width: 100,
    height: 100,
  };
  const result = validateAndSanitizeDiagram(spec);
  expect(result.sanitizedSpec.elements.length).toBe(1);
});

test('Element type: line passes sanitization', () => {
  const spec: DiagramSpec = {
    elements: [{ type: 'line', from: { x: 0, y: 0 }, to: { x: 10, y: 10 } } as LineElement],
    width: 100,
    height: 100,
  };
  const result = validateAndSanitizeDiagram(spec);
  expect(result.sanitizedSpec.elements.length).toBe(1);
});

test('Element type: polygon passes sanitization', () => {
  const spec: DiagramSpec = {
    elements: [{
      type: 'polygon',
      vertices: [{ x: 0, y: 0 }, { x: 10, y: 0 }, { x: 5, y: 8 }],
    } as PolygonElement],
    width: 100,
    height: 100,
  };
  const result = validateAndSanitizeDiagram(spec);
  expect(result.sanitizedSpec.elements.length).toBe(1);
});

test('Element type: circle passes sanitization', () => {
  const spec: DiagramSpec = {
    elements: [{ type: 'circle', center: { x: 5, y: 5 }, radius: 4 } as CircleElement],
    width: 100,
    height: 100,
  };
  const result = validateAndSanitizeDiagram(spec);
  expect(result.sanitizedSpec.elements.length).toBe(1);
});

test('Element type: arc passes sanitization', () => {
  const spec: DiagramSpec = {
    elements: [{
      type: 'arc',
      center: { x: 5, y: 5 },
      radius: 4,
      startAngle: 0,
      endAngle: 90,
    } as ArcElement],
    width: 100,
    height: 100,
  };
  const result = validateAndSanitizeDiagram(spec);
  expect(result.sanitizedSpec.elements.length).toBe(1);
});

test('Element type: angle-marker passes sanitization', () => {
  const spec: DiagramSpec = {
    elements: [{
      type: 'angle-marker',
      vertex: { x: 0, y: 0 },
      ray1End: { x: 10, y: 0 },
      ray2End: { x: 0, y: 10 },
    } as AngleMarkerElement],
    width: 100,
    height: 100,
  };
  const result = validateAndSanitizeDiagram(spec);
  expect(result.sanitizedSpec.elements.length).toBe(1);
});

test('Element type: text passes sanitization', () => {
  const spec: DiagramSpec = {
    elements: [{ type: 'text', content: 'Hello', position: { x: 5, y: 5 } } as TextElement],
    width: 100,
    height: 100,
  };
  const result = validateAndSanitizeDiagram(spec);
  expect(result.sanitizedSpec.elements.length).toBe(1);
});

test('Element type: arrow passes sanitization', () => {
  const spec: DiagramSpec = {
    elements: [{ type: 'arrow', from: { x: 0, y: 0 }, to: { x: 10, y: 10 } } as ArrowElement],
    width: 100,
    height: 100,
  };
  const result = validateAndSanitizeDiagram(spec);
  expect(result.sanitizedSpec.elements.length).toBe(1);
});

test('Element type: curve passes sanitization', () => {
  const spec: DiagramSpec = {
    elements: [{ type: 'curve', fn: 'x^2', domain: [-5, 5] } as CurveElement],
    width: 100,
    height: 100,
  };
  const result = validateAndSanitizeDiagram(spec);
  expect(result.sanitizedSpec.elements.length).toBe(1);
});

test('Element type: rectangle passes sanitization', () => {
  const spec: DiagramSpec = {
    elements: [{ type: 'rectangle', topLeft: { x: 0, y: 10 }, width: 10, height: 5 } as RectangleElement],
    width: 100,
    height: 100,
  };
  const result = validateAndSanitizeDiagram(spec);
  expect(result.sanitizedSpec.elements.length).toBe(1);
});

test('Element type: grid passes sanitization', () => {
  const spec: DiagramSpec = {
    elements: [{ type: 'grid', xMin: 0, xMax: 10, yMin: 0, yMax: 10 } as GridElement],
    width: 100,
    height: 100,
  };
  const result = validateAndSanitizeDiagram(spec);
  expect(result.sanitizedSpec.elements.length).toBe(1);
});

test('Element type: axes passes sanitization', () => {
  const spec: DiagramSpec = {
    elements: [{ type: 'axes', xMin: -10, xMax: 10, yMin: -10, yMax: 10 } as AxesElement],
  };
  const result = validateAndSanitizeDiagram(spec);
  expect(result.sanitizedSpec.elements.length).toBe(1);
});

test('Element type: tree-diagram passes sanitization', () => {
  const result = validateAndSanitizeDiagram(validTreeSpec);
  expect(result.sanitizedSpec.elements.length).toBe(1);
});

test('Element type: venn-diagram passes sanitization', () => {
  const spec: DiagramSpec = {
    elements: [{
      type: 'venn-diagram',
      sets: [{ label: 'A' }, { label: 'B' }],
    } as VennDiagramElement],
  };
  const result = validateAndSanitizeDiagram(spec);
  expect(result.sanitizedSpec.elements.length).toBe(1);
});

test('Element type: number-line passes sanitization', () => {
  const spec: DiagramSpec = {
    elements: [{ type: 'number-line', min: -10, max: 10 } as NumberLineElement],
  };
  const result = validateAndSanitizeDiagram(spec);
  expect(result.sanitizedSpec.elements.length).toBe(1);
});

test('Element type: bar-chart passes sanitization', () => {
  const result = validateAndSanitizeDiagram(validBarChartSpec);
  expect(result.sanitizedSpec.elements.length).toBe(1);
});

test('Element type: pie-chart passes sanitization', () => {
  const spec: DiagramSpec = {
    elements: [{
      type: 'pie-chart',
      data: [{ label: 'A', value: 50 }, { label: 'B', value: 50 }],
    } as PieChartElement],
  };
  const result = validateAndSanitizeDiagram(spec);
  expect(result.sanitizedSpec.elements.length).toBe(1);
});

test('Element type: box-plot passes sanitization', () => {
  const spec: DiagramSpec = {
    elements: [{
      type: 'box-plot',
      min: 10,
      q1: 25,
      median: 50,
      q3: 75,
      max: 90,
    } as BoxPlotElement],
  };
  const result = validateAndSanitizeDiagram(spec);
  expect(result.sanitizedSpec.elements.length).toBe(1);
});

test('Element type: prism-3d passes sanitization', () => {
  const spec: DiagramSpec = {
    elements: [{ type: 'prism-3d', width: 40, height: 30, depth: 20 } as Prism3DElement],
  };
  const result = validateAndSanitizeDiagram(spec);
  expect(result.sanitizedSpec.elements.length).toBe(1);
});

test('Element type: cylinder-3d passes sanitization', () => {
  const spec: DiagramSpec = {
    elements: [{ type: 'cylinder-3d', radius: 20, height: 50 } as Cylinder3DElement],
  };
  const result = validateAndSanitizeDiagram(spec);
  expect(result.sanitizedSpec.elements.length).toBe(1);
});

test('Element type: cone-3d passes sanitization', () => {
  const spec: DiagramSpec = {
    elements: [{ type: 'cone-3d', radius: 20, height: 40 } as Cone3DElement],
  };
  const result = validateAndSanitizeDiagram(spec);
  expect(result.sanitizedSpec.elements.length).toBe(1);
});

test('Element type: sphere-3d passes sanitization', () => {
  const spec: DiagramSpec = {
    elements: [{ type: 'sphere-3d', radius: 30 } as Sphere3DElement],
  };
  const result = validateAndSanitizeDiagram(spec);
  expect(result.sanitizedSpec.elements.length).toBe(1);
});

test('Element type: pyramid-3d passes sanitization', () => {
  const spec: DiagramSpec = {
    elements: [{ type: 'pyramid-3d', baseWidth: 40, height: 50 } as Pyramid3DElement],
  };
  const result = validateAndSanitizeDiagram(spec);
  expect(result.sanitizedSpec.elements.length).toBe(1);
});

// ============================================
// Tests: Edge Cases
// ============================================

test('Edge case: polygon with only 2 vertices handled gracefully', () => {
  const spec: DiagramSpec = {
    elements: [{ type: 'polygon', vertices: [{ x: 0, y: 0 }, { x: 10, y: 0 }] } as PolygonElement],
    width: 100,
    height: 100,
  };
  const result = validateAndSanitizeDiagram(spec);
  expect(result.sanitizedSpec.elements).toBeDefined();
});

test('Edge case: circle with zero radius handled gracefully', () => {
  const spec: DiagramSpec = {
    elements: [{ type: 'circle', center: { x: 5, y: 5 }, radius: 0 } as CircleElement],
    width: 100,
    height: 100,
  };
  const result = validateAndSanitizeDiagram(spec);
  expect(result.sanitizedSpec.elements).toBeDefined();
});

test('Edge case: negative radius is passed through (renderer handles)', () => {
  const spec: DiagramSpec = {
    elements: [{ type: 'circle', center: { x: 5, y: 5 }, radius: -5 } as CircleElement],
    width: 100,
    height: 100,
  };
  const result = validateAndSanitizeDiagram(spec);
  expect(result.sanitizedSpec.elements).toBeDefined();
});

test('Edge case: complex diagram with multiple element types', () => {
  const spec: DiagramSpec = {
    elements: [
      { type: 'grid', xMin: 0, xMax: 20, yMin: 0, yMax: 20 } as GridElement,
      { type: 'polygon', vertices: [{ x: 2, y: 2 }, { x: 10, y: 2 }, { x: 6, y: 10 }] } as PolygonElement,
      { type: 'circle', center: { x: 15, y: 10 }, radius: 3 } as CircleElement,
      { type: 'text', content: 'Test', position: { x: 10, y: 18 } } as TextElement,
    ],
    width: 400,
    height: 300,
  };
  const result = validateAndSanitizeDiagram(spec);
  expect(result.sanitizedSpec.elements.length).toBe(4);
});

// ============================================
// Run All Tests
// ============================================

console.log('\n🧪 Running Diagram Validation Tests...\n');

const startTime = Date.now();

// Tests are already run when defined

const endTime = Date.now();
const passed = results.filter(r => r.passed).length;
const failed = results.filter(r => !r.passed).length;

console.log('Results:');
console.log('========');

results.forEach(result => {
  const status = result.passed ? '✅' : '❌';
  console.log(`${status} ${result.name}`);
  if (!result.passed && result.error) {
    console.log(`   Error: ${result.error}`);
  }
});

console.log('\n========');
console.log(`Total: ${results.length} | Passed: ${passed} | Failed: ${failed}`);
console.log(`Time: ${endTime - startTime}ms`);

if (failed > 0) {
  console.log('\n❌ Some tests failed!');
  process.exit(1);
} else {
  console.log('\n✅ All tests passed!');
}
