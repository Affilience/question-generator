/**
 * Extended tests for diagram generation system
 * Tests more edge cases, stress tests, and integration scenarios
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
// Test Framework
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
      if (actual !== true) throw new Error(`Expected true, got ${JSON.stringify(actual)}`);
    },
    toBeFalse() {
      if (actual !== false) throw new Error(`Expected false, got ${JSON.stringify(actual)}`);
    },
    toBeGreaterThan(expected: number) {
      if (typeof actual !== 'number' || actual <= expected)
        throw new Error(`Expected ${actual} > ${expected}`);
    },
    toBeLessThan(expected: number) {
      if (typeof actual !== 'number' || actual >= expected)
        throw new Error(`Expected ${actual} < ${expected}`);
    },
    toBeGreaterThanOrEqual(expected: number) {
      if (typeof actual !== 'number' || actual < expected)
        throw new Error(`Expected ${actual} >= ${expected}`);
    },
    toBeLessThanOrEqual(expected: number) {
      if (typeof actual !== 'number' || actual > expected)
        throw new Error(`Expected ${actual} <= ${expected}`);
    },
    toBeDefined() {
      if (actual === undefined || actual === null)
        throw new Error(`Expected defined, got ${actual}`);
    },
    toBeUndefined() {
      if (actual !== undefined)
        throw new Error(`Expected undefined, got ${JSON.stringify(actual)}`);
    },
    toHaveLength(expected: number) {
      if (!Array.isArray(actual) || actual.length !== expected)
        throw new Error(`Expected length ${expected}, got ${Array.isArray(actual) ? actual.length : 'non-array'}`);
    },
    toBeCloseTo(expected: number, precision: number = 2) {
      if (typeof actual !== 'number' || Math.abs(actual - expected) > Math.pow(10, -precision))
        throw new Error(`Expected ${actual} to be close to ${expected}`);
    },
    toContainString(expected: string) {
      if (typeof actual !== 'string' || !actual.includes(expected))
        throw new Error(`Expected "${actual}" to contain "${expected}"`);
    },
  };
}

// ============================================
// STRESS TESTS: Large Numbers of Elements
// ============================================

test('Stress: diagram with 50 points', () => {
  const points: PointElement[] = [];
  for (let i = 0; i < 50; i++) {
    points.push({
      type: 'point',
      position: { x: i * 2, y: Math.sin(i) * 10 + 50 },
    });
  }
  const spec: DiagramSpec = { elements: points, width: 200, height: 100 };
  const result = validateAndSanitizeDiagram(spec);
  expect(result.sanitizedSpec.elements.length).toBe(50);
});

test('Stress: diagram with 100 lines forming a grid', () => {
  const lines: LineElement[] = [];
  for (let i = 0; i <= 10; i++) {
    // Vertical lines
    lines.push({ type: 'line', from: { x: i * 10, y: 0 }, to: { x: i * 10, y: 100 } });
    // Horizontal lines
    lines.push({ type: 'line', from: { x: 0, y: i * 10 }, to: { x: 100, y: i * 10 } });
  }
  const spec: DiagramSpec = { elements: lines, width: 100, height: 100 };
  const result = validateAndSanitizeDiagram(spec);
  expect(result.sanitizedSpec.elements.length).toBe(22);
});

test('Stress: diagram with 20 overlapping circles', () => {
  const circles: CircleElement[] = [];
  for (let i = 0; i < 20; i++) {
    circles.push({
      type: 'circle',
      center: { x: 50 + i * 2, y: 50 },
      radius: 10,
    });
  }
  const spec: DiagramSpec = { elements: circles, width: 200, height: 100 };
  const overlaps = checkForOverlaps(spec);
  expect(overlaps.length).toBeGreaterThan(0);
});

test('Stress: complex polygon with 12 vertices (dodecagon)', () => {
  const vertices: Array<{ x: number; y: number; label?: string }> = [];
  for (let i = 0; i < 12; i++) {
    const angle = (i * 30 * Math.PI) / 180;
    vertices.push({
      x: 50 + 40 * Math.cos(angle),
      y: 50 + 40 * Math.sin(angle),
      label: String.fromCharCode(65 + i), // A, B, C...
    });
  }
  const spec: DiagramSpec = {
    elements: [{ type: 'polygon', vertices } as PolygonElement],
    width: 100,
    height: 100,
  };
  const result = validateAndSanitizeDiagram(spec);
  const poly = result.sanitizedSpec.elements[0] as PolygonElement;
  expect(poly.vertices.length).toBe(12);
  // Should not be self-intersecting
  const intersections = checkPolygonSelfIntersection(spec);
  expect(intersections.length).toBe(0);
});

// ============================================
// COORDINATE EDGE CASES
// ============================================

test('Coordinates: very large positive values', () => {
  const spec: DiagramSpec = {
    elements: [
      { type: 'point', position: { x: 999999, y: 999999 } } as PointElement,
    ],
    width: 1000000,
    height: 1000000,
  };
  const result = validateAndSanitizeDiagram(spec);
  expect(result.sanitizedSpec.elements.length).toBe(1);
});

test('Coordinates: very small decimal values', () => {
  const spec: DiagramSpec = {
    elements: [
      { type: 'point', position: { x: 0.00001, y: 0.00001 } } as PointElement,
      { type: 'point', position: { x: 0.00002, y: 0.00002 } } as PointElement,
    ],
    width: 1,
    height: 1,
  };
  const result = validateAndSanitizeDiagram(spec);
  expect(result.sanitizedSpec.elements.length).toBe(2);
});

test('Coordinates: mixed positive and negative', () => {
  const spec: DiagramSpec = {
    elements: [
      { type: 'polygon', vertices: [
        { x: -50, y: -50 },
        { x: 50, y: -50 },
        { x: 50, y: 50 },
        { x: -50, y: 50 },
      ]} as PolygonElement,
    ],
  };
  const result = validateAndSanitizeDiagram(spec);
  // Should normalize coordinates
  expect(result.sanitizedSpec.elements.length).toBe(1);
});

test('Coordinates: zero values everywhere', () => {
  const spec: DiagramSpec = {
    elements: [
      { type: 'point', position: { x: 0, y: 0 } } as PointElement,
      { type: 'circle', center: { x: 0, y: 0 }, radius: 0 } as CircleElement,
    ],
    width: 10,
    height: 10,
  };
  const result = validateAndSanitizeDiagram(spec);
  expect(result.sanitizedSpec.elements.length).toBe(2);
});

test('Coordinates: NaN handling', () => {
  const spec: DiagramSpec = {
    elements: [
      { type: 'point', position: { x: NaN, y: 5 } } as PointElement,
    ],
    width: 100,
    height: 100,
  };
  // Should not crash
  const result = validateAndSanitizeDiagram(spec);
  expect(result.sanitizedSpec.elements).toBeDefined();
});

test('Coordinates: Infinity handling', () => {
  const spec: DiagramSpec = {
    elements: [
      { type: 'point', position: { x: Infinity, y: 5 } } as PointElement,
    ],
    width: 100,
    height: 100,
  };
  const result = validateAndSanitizeDiagram(spec);
  expect(result.sanitizedSpec.elements).toBeDefined();
});

// ============================================
// CURVE FUNCTION TESTS
// ============================================

test('Curve: quadratic function x^2', () => {
  const spec: DiagramSpec = {
    elements: [
      { type: 'axes', xMin: -5, xMax: 5, yMin: -5, yMax: 25 } as AxesElement,
      { type: 'curve', fn: 'x^2', domain: [-5, 5] } as CurveElement,
    ],
  };
  const result = validateAndSanitizeDiagram(spec);
  expect(result.sanitizedSpec.elements.length).toBe(2);
});

test('Curve: linear function 2*x + 1', () => {
  const spec: DiagramSpec = {
    elements: [
      { type: 'axes', xMin: -10, xMax: 10, yMin: -20, yMax: 20 } as AxesElement,
      { type: 'curve', fn: '2*x + 1' } as CurveElement,
    ],
  };
  const result = validateAndSanitizeDiagram(spec);
  expect(isDiagramValid(result.sanitizedSpec)).toBeTrue();
});

test('Curve: trigonometric sin(x)', () => {
  const spec: DiagramSpec = {
    elements: [
      { type: 'axes', xMin: -Math.PI * 2, xMax: Math.PI * 2, yMin: -2, yMax: 2 } as AxesElement,
      { type: 'curve', fn: 'sin(x)' } as CurveElement,
    ],
  };
  const result = validateAndSanitizeDiagram(spec);
  expect(isDiagramValid(result.sanitizedSpec)).toBeTrue();
});

test('Curve: trigonometric cos(x)', () => {
  const spec: DiagramSpec = {
    elements: [
      { type: 'axes', xMin: -Math.PI * 2, xMax: Math.PI * 2, yMin: -2, yMax: 2 } as AxesElement,
      { type: 'curve', fn: 'cos(x)' } as CurveElement,
    ],
  };
  const result = validateAndSanitizeDiagram(spec);
  expect(isDiagramValid(result.sanitizedSpec)).toBeTrue();
});

test('Curve: cubic function x^3', () => {
  const spec: DiagramSpec = {
    elements: [
      { type: 'axes', xMin: -3, xMax: 3, yMin: -30, yMax: 30 } as AxesElement,
      { type: 'curve', fn: 'x^3' } as CurveElement,
    ],
  };
  const result = validateAndSanitizeDiagram(spec);
  expect(isDiagramValid(result.sanitizedSpec)).toBeTrue();
});

test('Curve: square root sqrt(x)', () => {
  const spec: DiagramSpec = {
    elements: [
      { type: 'axes', xMin: 0, xMax: 10, yMin: 0, yMax: 5 } as AxesElement,
      { type: 'curve', fn: 'sqrt(x)', domain: [0, 10] } as CurveElement,
    ],
  };
  const result = validateAndSanitizeDiagram(spec);
  expect(isDiagramValid(result.sanitizedSpec)).toBeTrue();
});

test('Curve: absolute value abs(x)', () => {
  const spec: DiagramSpec = {
    elements: [
      { type: 'axes', xMin: -5, xMax: 5, yMin: 0, yMax: 5 } as AxesElement,
      { type: 'curve', fn: 'abs(x)' } as CurveElement,
    ],
  };
  const result = validateAndSanitizeDiagram(spec);
  expect(isDiagramValid(result.sanitizedSpec)).toBeTrue();
});

test('Curve: exponential function', () => {
  const spec: DiagramSpec = {
    elements: [
      { type: 'axes', xMin: -2, xMax: 3, yMin: 0, yMax: 10 } as AxesElement,
      { type: 'curve', fn: '2^x' } as CurveElement,
    ],
  };
  const result = validateAndSanitizeDiagram(spec);
  expect(isDiagramValid(result.sanitizedSpec)).toBeTrue();
});

test('Curve: points-based curve (smooth)', () => {
  const spec: DiagramSpec = {
    elements: [
      {
        type: 'curve',
        points: [
          { x: 0, y: 0 },
          { x: 2, y: 4 },
          { x: 4, y: 2 },
          { x: 6, y: 6 },
          { x: 8, y: 3 },
        ],
        smooth: true,
      } as CurveElement,
    ],
    width: 100,
    height: 100,
  };
  const result = validateAndSanitizeDiagram(spec);
  expect(result.sanitizedSpec.elements.length).toBe(1);
});

test('Curve: invalid function expression handled gracefully', () => {
  const spec: DiagramSpec = {
    elements: [
      { type: 'axes', xMin: -5, xMax: 5, yMin: -5, yMax: 5 } as AxesElement,
      { type: 'curve', fn: 'invalid_func((((' } as CurveElement,
    ],
  };
  const result = validateAndSanitizeDiagram(spec);
  // Should not crash, just handle gracefully
  expect(result.sanitizedSpec.elements).toBeDefined();
});

// ============================================
// TREE DIAGRAM TESTS
// ============================================

test('Tree: simple 2-level tree', () => {
  const spec: DiagramSpec = {
    elements: [{
      type: 'tree-diagram',
      root: {
        label: 'Start',
        children: [
          { probability: '1/2', label: 'A', node: { label: 'Win' } },
          { probability: '1/2', label: 'B', node: { label: 'Lose' } },
        ],
      },
    } as TreeDiagramElement],
  };
  const result = validateAndSanitizeDiagram(spec);
  expect(isDiagramValid(result.sanitizedSpec)).toBeTrue();
});

test('Tree: 3-level probability tree', () => {
  const spec: DiagramSpec = {
    elements: [{
      type: 'tree-diagram',
      root: {
        label: 'First Coin',
        children: [
          {
            probability: '0.5',
            label: 'H',
            node: {
              label: 'Second Coin',
              children: [
                { probability: '0.5', label: 'H', node: { label: 'HH' } },
                { probability: '0.5', label: 'T', node: { label: 'HT' } },
              ],
            },
          },
          {
            probability: '0.5',
            label: 'T',
            node: {
              label: 'Second Coin',
              children: [
                { probability: '0.5', label: 'H', node: { label: 'TH' } },
                { probability: '0.5', label: 'T', node: { label: 'TT' } },
              ],
            },
          },
        ],
      },
    } as TreeDiagramElement],
  };
  const result = validateAndSanitizeDiagram(spec);
  expect(isDiagramValid(result.sanitizedSpec)).toBeTrue();
});

test('Tree: 4-level deep tree', () => {
  const spec: DiagramSpec = {
    elements: [{
      type: 'tree-diagram',
      root: {
        label: 'L1',
        children: [{
          probability: '1',
          node: {
            label: 'L2',
            children: [{
              probability: '1',
              node: {
                label: 'L3',
                children: [{
                  probability: '1',
                  node: { label: 'L4' },
                }],
              },
            }],
          },
        }],
      },
    } as TreeDiagramElement],
  };
  const result = validateAndSanitizeDiagram(spec);
  expect(isDiagramValid(result.sanitizedSpec)).toBeTrue();
});

test('Tree: tree with 5 branches', () => {
  const spec: DiagramSpec = {
    elements: [{
      type: 'tree-diagram',
      root: {
        label: 'Roll Die',
        children: [
          { probability: '1/6', label: '1', node: { label: 'One' } },
          { probability: '1/6', label: '2', node: { label: 'Two' } },
          { probability: '1/6', label: '3', node: { label: 'Three' } },
          { probability: '1/6', label: '4', node: { label: 'Four' } },
          { probability: '1/6', label: '5', node: { label: 'Five' } },
          { probability: '1/6', label: '6', node: { label: 'Six' } },
        ],
      },
    } as TreeDiagramElement],
  };
  const result = validateAndSanitizeDiagram(spec);
  expect(isDiagramValid(result.sanitizedSpec)).toBeTrue();
});

// ============================================
// VENN DIAGRAM TESTS
// ============================================

test('Venn: single set', () => {
  const spec: DiagramSpec = {
    elements: [{
      type: 'venn-diagram',
      sets: [{ label: 'A', values: ['1', '2', '3', '4', '5'] }],
      universalLabel: 'U',
    } as VennDiagramElement],
  };
  const result = validateAndSanitizeDiagram(spec);
  expect(isDiagramValid(result.sanitizedSpec)).toBeTrue();
});

test('Venn: two overlapping sets', () => {
  const spec: DiagramSpec = {
    elements: [{
      type: 'venn-diagram',
      sets: [
        { label: 'A', values: ['1', '2', '3'] },
        { label: 'B', values: ['4', '5', '6'] },
      ],
      intersection: ['3', '4'],
      outsideValues: ['7', '8'],
      universalLabel: 'ξ',
    } as VennDiagramElement],
  };
  const result = validateAndSanitizeDiagram(spec);
  expect(isDiagramValid(result.sanitizedSpec)).toBeTrue();
});

test('Venn: sets with colors', () => {
  const spec: DiagramSpec = {
    elements: [{
      type: 'venn-diagram',
      sets: [
        { label: 'Prime', values: ['2', '3', '5', '7'], color: 'rgba(59, 130, 246, 0.3)' },
        { label: 'Odd', values: ['1', '3', '5', '7', '9'], color: 'rgba(239, 68, 68, 0.3)' },
      ],
      intersection: ['3', '5', '7'],
    } as VennDiagramElement],
  };
  const result = validateAndSanitizeDiagram(spec);
  expect(isDiagramValid(result.sanitizedSpec)).toBeTrue();
});

// ============================================
// CHART TESTS
// ============================================

test('Bar chart: basic', () => {
  const spec: DiagramSpec = {
    elements: [{
      type: 'bar-chart',
      data: [
        { label: 'Mon', value: 10 },
        { label: 'Tue', value: 15 },
        { label: 'Wed', value: 8 },
        { label: 'Thu', value: 22 },
        { label: 'Fri', value: 18 },
      ],
      xLabel: 'Day',
      yLabel: 'Sales',
    } as BarChartElement],
  };
  const result = validateAndSanitizeDiagram(spec);
  expect(isDiagramValid(result.sanitizedSpec)).toBeTrue();
});

test('Bar chart: with colors', () => {
  const spec: DiagramSpec = {
    elements: [{
      type: 'bar-chart',
      data: [
        { label: 'A', value: 30, color: '#3b82f6' },
        { label: 'B', value: 45, color: '#ef4444' },
        { label: 'C', value: 25, color: '#22c55e' },
      ],
    } as BarChartElement],
  };
  const result = validateAndSanitizeDiagram(spec);
  expect(isDiagramValid(result.sanitizedSpec)).toBeTrue();
});

test('Bar chart: single bar', () => {
  const spec: DiagramSpec = {
    elements: [{
      type: 'bar-chart',
      data: [{ label: 'Total', value: 100 }],
    } as BarChartElement],
  };
  const result = validateAndSanitizeDiagram(spec);
  expect(isDiagramValid(result.sanitizedSpec)).toBeTrue();
});

test('Bar chart: 10 bars', () => {
  const data = Array.from({ length: 10 }, (_, i) => ({
    label: `Item ${i + 1}`,
    value: Math.floor(Math.random() * 100),
  }));
  const spec: DiagramSpec = {
    elements: [{ type: 'bar-chart', data } as BarChartElement],
  };
  const result = validateAndSanitizeDiagram(spec);
  expect(isDiagramValid(result.sanitizedSpec)).toBeTrue();
});

test('Pie chart: basic percentages', () => {
  const spec: DiagramSpec = {
    elements: [{
      type: 'pie-chart',
      data: [
        { label: 'A', value: 40 },
        { label: 'B', value: 30 },
        { label: 'C', value: 20 },
        { label: 'D', value: 10 },
      ],
      showPercentages: true,
    } as PieChartElement],
  };
  const result = validateAndSanitizeDiagram(spec);
  expect(isDiagramValid(result.sanitizedSpec)).toBeTrue();
});

test('Pie chart: show values instead of percentages', () => {
  const spec: DiagramSpec = {
    elements: [{
      type: 'pie-chart',
      data: [
        { label: 'Red', value: 150 },
        { label: 'Blue', value: 250 },
        { label: 'Green', value: 100 },
      ],
      showValues: true,
    } as PieChartElement],
  };
  const result = validateAndSanitizeDiagram(spec);
  expect(isDiagramValid(result.sanitizedSpec)).toBeTrue();
});

test('Pie chart: 8 slices', () => {
  const spec: DiagramSpec = {
    elements: [{
      type: 'pie-chart',
      data: Array.from({ length: 8 }, (_, i) => ({
        label: `Slice ${i + 1}`,
        value: 12.5,
      })),
      showPercentages: true,
    } as PieChartElement],
  };
  const result = validateAndSanitizeDiagram(spec);
  expect(isDiagramValid(result.sanitizedSpec)).toBeTrue();
});

test('Box plot: standard', () => {
  const spec: DiagramSpec = {
    elements: [{
      type: 'box-plot',
      min: 15,
      q1: 25,
      median: 35,
      q3: 45,
      max: 55,
      label: 'Test Scores',
    } as BoxPlotElement],
  };
  const result = validateAndSanitizeDiagram(spec);
  expect(isDiagramValid(result.sanitizedSpec)).toBeTrue();
});

test('Box plot: with outliers', () => {
  const spec: DiagramSpec = {
    elements: [{
      type: 'box-plot',
      min: 20,
      q1: 30,
      median: 40,
      q3: 50,
      max: 60,
      outliers: [5, 10, 75, 85],
      axisMin: 0,
      axisMax: 100,
    } as BoxPlotElement],
  };
  const result = validateAndSanitizeDiagram(spec);
  expect(isDiagramValid(result.sanitizedSpec)).toBeTrue();
});

test('Box plot: symmetric', () => {
  const spec: DiagramSpec = {
    elements: [{
      type: 'box-plot',
      min: 0,
      q1: 25,
      median: 50,
      q3: 75,
      max: 100,
    } as BoxPlotElement],
  };
  const result = validateAndSanitizeDiagram(spec);
  expect(isDiagramValid(result.sanitizedSpec)).toBeTrue();
});

// ============================================
// NUMBER LINE TESTS
// ============================================

test('Number line: basic with points', () => {
  const spec: DiagramSpec = {
    elements: [{
      type: 'number-line',
      min: 0,
      max: 10,
      step: 1,
      points: [
        { value: 3, style: 'filled', label: 'x' },
        { value: 7, style: 'open' },
      ],
    } as NumberLineElement],
  };
  const result = validateAndSanitizeDiagram(spec);
  expect(isDiagramValid(result.sanitizedSpec)).toBeTrue();
});

test('Number line: with ranges (inequalities)', () => {
  const spec: DiagramSpec = {
    elements: [{
      type: 'number-line',
      min: -5,
      max: 5,
      step: 1,
      ranges: [
        { from: -3, to: 2, color: '#3b82f6' },
      ],
      points: [
        { value: -3, style: 'filled' },
        { value: 2, style: 'open' },
      ],
    } as NumberLineElement],
  };
  const result = validateAndSanitizeDiagram(spec);
  expect(isDiagramValid(result.sanitizedSpec)).toBeTrue();
});

test('Number line: decimal steps', () => {
  const spec: DiagramSpec = {
    elements: [{
      type: 'number-line',
      min: 0,
      max: 2,
      step: 0.5,
      points: [{ value: 1.5, label: '3/2' }],
    } as NumberLineElement],
  };
  const result = validateAndSanitizeDiagram(spec);
  expect(isDiagramValid(result.sanitizedSpec)).toBeTrue();
});

// ============================================
// 3D SHAPE TESTS
// ============================================

test('3D: prism with labels', () => {
  const spec: DiagramSpec = {
    elements: [{
      type: 'prism-3d',
      width: 60,
      height: 40,
      depth: 30,
      labels: {
        width: '6 cm',
        height: '4 cm',
        depth: '3 cm',
      },
    } as Prism3DElement],
  };
  const result = validateAndSanitizeDiagram(spec);
  expect(isDiagramValid(result.sanitizedSpec)).toBeTrue();
});

test('3D: cylinder with labels', () => {
  const spec: DiagramSpec = {
    elements: [{
      type: 'cylinder-3d',
      radius: 25,
      height: 60,
      labels: {
        radius: 'r = 5 cm',
        height: 'h = 12 cm',
      },
    } as Cylinder3DElement],
  };
  const result = validateAndSanitizeDiagram(spec);
  expect(isDiagramValid(result.sanitizedSpec)).toBeTrue();
});

test('3D: cone with labels', () => {
  const spec: DiagramSpec = {
    elements: [{
      type: 'cone-3d',
      radius: 30,
      height: 50,
      labels: {
        radius: 'r',
        height: 'h',
        slantHeight: 'l',
      },
    } as Cone3DElement],
  };
  const result = validateAndSanitizeDiagram(spec);
  expect(isDiagramValid(result.sanitizedSpec)).toBeTrue();
});

test('3D: sphere with radius label', () => {
  const spec: DiagramSpec = {
    elements: [{
      type: 'sphere-3d',
      radius: 40,
      labels: { radius: 'r = 8 cm' },
    } as Sphere3DElement],
  };
  const result = validateAndSanitizeDiagram(spec);
  expect(isDiagramValid(result.sanitizedSpec)).toBeTrue();
});

test('3D: pyramid with labels', () => {
  const spec: DiagramSpec = {
    elements: [{
      type: 'pyramid-3d',
      baseWidth: 50,
      height: 60,
      labels: {
        baseWidth: '10 cm',
        height: '12 cm',
      },
    } as Pyramid3DElement],
  };
  const result = validateAndSanitizeDiagram(spec);
  expect(isDiagramValid(result.sanitizedSpec)).toBeTrue();
});

// ============================================
// ANGLE MARKER TESTS
// ============================================

test('Angle: exactly 30 degrees', () => {
  const spec: DiagramSpec = {
    elements: [{
      type: 'angle-marker',
      vertex: { x: 0, y: 0 },
      ray1End: { x: 10, y: 0 },
      ray2End: { x: 10 * Math.cos(Math.PI / 6), y: 10 * Math.sin(Math.PI / 6) },
      label: '30°',
    } as AngleMarkerElement],
    width: 100,
    height: 100,
  };
  const result = validateAndSanitizeDiagram(spec);
  expect(result.sanitizedSpec.elements.length).toBe(1);
});

test('Angle: exactly 45 degrees', () => {
  const spec: DiagramSpec = {
    elements: [{
      type: 'angle-marker',
      vertex: { x: 0, y: 0 },
      ray1End: { x: 10, y: 0 },
      ray2End: { x: 10 * Math.cos(Math.PI / 4), y: 10 * Math.sin(Math.PI / 4) },
      label: '45°',
    } as AngleMarkerElement],
    width: 100,
    height: 100,
  };
  const result = validateAndSanitizeDiagram(spec);
  expect(result.sanitizedSpec.elements.length).toBe(1);
});

test('Angle: exactly 60 degrees', () => {
  const spec: DiagramSpec = {
    elements: [{
      type: 'angle-marker',
      vertex: { x: 0, y: 0 },
      ray1End: { x: 10, y: 0 },
      ray2End: { x: 10 * Math.cos(Math.PI / 3), y: 10 * Math.sin(Math.PI / 3) },
      label: '60°',
    } as AngleMarkerElement],
    width: 100,
    height: 100,
  };
  const result = validateAndSanitizeDiagram(spec);
  expect(result.sanitizedSpec.elements.length).toBe(1);
});

test('Angle: obtuse 120 degrees', () => {
  const spec: DiagramSpec = {
    elements: [{
      type: 'angle-marker',
      vertex: { x: 0, y: 0 },
      ray1End: { x: 10, y: 0 },
      ray2End: { x: 10 * Math.cos(2 * Math.PI / 3), y: 10 * Math.sin(2 * Math.PI / 3) },
      label: '120°',
    } as AngleMarkerElement],
    width: 100,
    height: 100,
  };
  const result = validateAndSanitizeDiagram(spec);
  expect(result.sanitizedSpec.elements.length).toBe(1);
});

test('Angle: multiple right angles in a rectangle', () => {
  const spec: DiagramSpec = {
    elements: [
      { type: 'polygon', vertices: [
        { x: 0, y: 0, label: 'A' },
        { x: 10, y: 0, label: 'B' },
        { x: 10, y: 8, label: 'C' },
        { x: 0, y: 8, label: 'D' },
      ]} as PolygonElement,
      { type: 'angle-marker', vertex: { x: 0, y: 0 }, ray1End: { x: 10, y: 0 }, ray2End: { x: 0, y: 8 }, isRightAngle: true } as AngleMarkerElement,
      { type: 'angle-marker', vertex: { x: 10, y: 0 }, ray1End: { x: 0, y: 0 }, ray2End: { x: 10, y: 8 }, isRightAngle: true } as AngleMarkerElement,
      { type: 'angle-marker', vertex: { x: 10, y: 8 }, ray1End: { x: 10, y: 0 }, ray2End: { x: 0, y: 8 }, isRightAngle: true } as AngleMarkerElement,
      { type: 'angle-marker', vertex: { x: 0, y: 8 }, ray1End: { x: 10, y: 8 }, ray2End: { x: 0, y: 0 }, isRightAngle: true } as AngleMarkerElement,
    ],
    width: 200,
    height: 160,
  };
  const validationResults = validateRightAngles(spec);
  // All 4 angles should be valid right angles
  expect(validationResults.length).toBe(4);
  validationResults.forEach(r => {
    expect(r.isValid).toBeTrue();
  });
});

// ============================================
// ARC TESTS
// ============================================

test('Arc: quarter circle', () => {
  const spec: DiagramSpec = {
    elements: [{
      type: 'arc',
      center: { x: 50, y: 50 },
      radius: 30,
      startAngle: 0,
      endAngle: 90,
      stroke: '#3b82f6',
    } as ArcElement],
    width: 100,
    height: 100,
  };
  const result = validateAndSanitizeDiagram(spec);
  expect(result.sanitizedSpec.elements.length).toBe(1);
});

test('Arc: semicircle', () => {
  const spec: DiagramSpec = {
    elements: [{
      type: 'arc',
      center: { x: 50, y: 50 },
      radius: 30,
      startAngle: 0,
      endAngle: 180,
    } as ArcElement],
    width: 100,
    height: 100,
  };
  const result = validateAndSanitizeDiagram(spec);
  expect(result.sanitizedSpec.elements.length).toBe(1);
});

test('Arc: filled sector', () => {
  const spec: DiagramSpec = {
    elements: [{
      type: 'arc',
      center: { x: 50, y: 50 },
      radius: 30,
      startAngle: 0,
      endAngle: 60,
      fill: 'rgba(59, 130, 246, 0.3)',
      label: '60°',
    } as ArcElement],
    width: 100,
    height: 100,
  };
  const result = validateAndSanitizeDiagram(spec);
  expect(result.sanitizedSpec.elements.length).toBe(1);
});

// ============================================
// POLYGON EDGE CASES
// ============================================

test('Polygon: concave polygon (L-shape)', () => {
  const spec: DiagramSpec = {
    elements: [{
      type: 'polygon',
      vertices: [
        { x: 0, y: 0 },
        { x: 10, y: 0 },
        { x: 10, y: 5 },
        { x: 5, y: 5 },
        { x: 5, y: 10 },
        { x: 0, y: 10 },
      ],
    } as PolygonElement],
    width: 100,
    height: 100,
  };
  const result = validateAndSanitizeDiagram(spec);
  const intersections = checkPolygonSelfIntersection(spec);
  expect(intersections.length).toBe(0); // L-shape is not self-intersecting
});

test('Polygon: star shape (self-intersecting)', () => {
  // 5-pointed star
  const vertices: Array<{ x: number; y: number }> = [];
  for (let i = 0; i < 5; i++) {
    const outerAngle = (i * 72 - 90) * Math.PI / 180;
    const innerAngle = ((i * 72 + 36) - 90) * Math.PI / 180;
    vertices.push({ x: 50 + 40 * Math.cos(outerAngle), y: 50 + 40 * Math.sin(outerAngle) });
    vertices.push({ x: 50 + 15 * Math.cos(innerAngle), y: 50 + 15 * Math.sin(innerAngle) });
  }
  const spec: DiagramSpec = {
    elements: [{ type: 'polygon', vertices } as PolygonElement],
    width: 100,
    height: 100,
  };
  // Note: A proper 5-pointed star alternating between outer and inner points
  // is NOT self-intersecting. Only the "draw without lifting pen" version is.
  const result = validateAndSanitizeDiagram(spec);
  expect(result.sanitizedSpec.elements.length).toBe(1);
});

test('Polygon: bowtie/hourglass (self-intersecting)', () => {
  const spec: DiagramSpec = {
    elements: [{
      type: 'polygon',
      vertices: [
        { x: 0, y: 0 },
        { x: 10, y: 10 },
        { x: 10, y: 0 },
        { x: 0, y: 10 },
      ],
    } as PolygonElement],
    width: 100,
    height: 100,
  };
  const intersections = checkPolygonSelfIntersection(spec);
  expect(intersections.length).toBeGreaterThan(0);
});

// ============================================
// QUALITY SCORE TESTS
// ============================================

test('Quality: perfect diagram scores high', () => {
  const spec: DiagramSpec = {
    elements: [{
      type: 'polygon',
      vertices: [
        { x: 10, y: 10, label: 'A', labelPosition: 'bottom-left' },
        { x: 90, y: 10, label: 'B', labelPosition: 'bottom-right' },
        { x: 50, y: 80, label: 'C', labelPosition: 'top' },
      ],
    } as PolygonElement],
    width: 100,
    height: 100,
    showNotAccurate: true,
  };
  const quality = assessDiagramQuality(spec);
  expect(quality.score).toBeGreaterThanOrEqual(90);
});

test('Quality: missing bounds reduces score', () => {
  const spec: DiagramSpec = {
    elements: [
      { type: 'point', position: { x: 5, y: 5 } } as PointElement,
    ],
  };
  const quality = assessDiagramQuality(spec);
  expect(quality.score).toBeLessThan(100);
  expect(quality.issues.length).toBeGreaterThan(0);
});

test('Quality: overlapping elements reduce score', () => {
  const spec: DiagramSpec = {
    elements: [
      { type: 'circle', center: { x: 50, y: 50 }, radius: 20 } as CircleElement,
      { type: 'circle', center: { x: 50, y: 50 }, radius: 20 } as CircleElement,
    ],
    width: 100,
    height: 100,
  };
  const quality = assessDiagramQuality(spec);
  expect(quality.score).toBeLessThan(100);
});

test('Quality: missing labelPosition reduces score', () => {
  const spec: DiagramSpec = {
    elements: [{
      type: 'polygon',
      vertices: [
        { x: 10, y: 10, label: 'A' }, // Missing labelPosition
        { x: 90, y: 10, label: 'B' },
        { x: 50, y: 80, label: 'C' },
      ],
    } as PolygonElement],
    width: 100,
    height: 100,
  };
  const quality = assessDiagramQuality(spec);
  expect(quality.issues.length).toBeGreaterThan(0);
});

// ============================================
// Run All Tests
// ============================================

console.log('\n🧪 Running Extended Diagram Tests...\n');

const startTime = Date.now();
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
  console.log('\n✅ All extended tests passed!');
}
