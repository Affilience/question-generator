/**
 * Real-world scenario tests for diagram generation
 * Tests diagrams as they would be generated for actual exam questions
 */

import {
  validateAndSanitizeDiagram,
  isDiagramValid,
  assessDiagramQuality,
  checkPolygonSelfIntersection,
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
  GridElement,
  AxesElement,
  TreeDiagramElement,
  VennDiagramElement,
  NumberLineElement,
  BarChartElement,
  PieChartElement,
  BoxPlotElement,
} from '../../types/diagram';

// Test framework
interface TestResult { name: string; passed: boolean; error?: string; }
const results: TestResult[] = [];

function test(name: string, fn: () => void): void {
  try { fn(); results.push({ name, passed: true }); }
  catch (e) { results.push({ name, passed: false, error: e instanceof Error ? e.message : String(e) }); }
}

function expect<T>(actual: T) {
  return {
    toBe(expected: T) { if (actual !== expected) throw new Error(`Expected ${JSON.stringify(expected)}, got ${JSON.stringify(actual)}`); },
    toBeTrue() { if (actual !== true) throw new Error(`Expected true, got ${JSON.stringify(actual)}`); },
    toBeFalse() { if (actual !== false) throw new Error(`Expected false, got ${JSON.stringify(actual)}`); },
    toBeGreaterThan(n: number) { if (typeof actual !== 'number' || actual <= n) throw new Error(`Expected > ${n}, got ${actual}`); },
    toBeGreaterThanOrEqual(n: number) { if (typeof actual !== 'number' || actual < n) throw new Error(`Expected >= ${n}, got ${actual}`); },
    toBeLessThan(n: number) { if (typeof actual !== 'number' || actual >= n) throw new Error(`Expected < ${n}, got ${actual}`); },
    toBeDefined() { if (actual === undefined || actual === null) throw new Error(`Expected defined, got ${actual}`); },
  };
}

// ============================================
// GCSE MATHS SCENARIOS
// ============================================

test('GCSE: Pythagoras theorem - right triangle with sides 3, 4, 5', () => {
  const spec: DiagramSpec = {
    elements: [
      {
        type: 'polygon',
        vertices: [
          { x: 2, y: 2, label: 'A', labelPosition: 'bottom-left' },
          { x: 8, y: 2, label: 'B', labelPosition: 'bottom-right' },
          { x: 2, y: 10, label: 'C', labelPosition: 'top-left' },
        ],
        sideLabels: [
          { fromIndex: 0, toIndex: 1, label: '6 cm' },
          { fromIndex: 0, toIndex: 2, label: '8 cm', position: 'outside' },
          { fromIndex: 1, toIndex: 2, label: 'x cm' },
        ],
      } as PolygonElement,
      {
        type: 'angle-marker',
        vertex: { x: 2, y: 2 },
        ray1End: { x: 8, y: 2 },
        ray2End: { x: 2, y: 10 },
        isRightAngle: true,
      } as AngleMarkerElement,
    ],
    width: 200,
    height: 180,
    showNotAccurate: true,
  };
  const result = validateAndSanitizeDiagram(spec);
  expect(isDiagramValid(result.sanitizedSpec)).toBeTrue();
  const quality = assessDiagramQuality(spec);
  expect(quality.score).toBeGreaterThanOrEqual(80);
});

test('GCSE: Circle theorem - angle at centre', () => {
  const spec: DiagramSpec = {
    elements: [
      { type: 'circle', center: { x: 50, y: 50, label: 'O' }, radius: 40 } as CircleElement,
      { type: 'point', position: { x: 90, y: 50, label: 'A', labelPosition: 'right' } } as PointElement,
      { type: 'point', position: { x: 10, y: 50, label: 'B', labelPosition: 'left' } } as PointElement,
      { type: 'point', position: { x: 50, y: 10, label: 'P', labelPosition: 'top' } } as PointElement,
      { type: 'line', from: { x: 50, y: 50 }, to: { x: 90, y: 50 } } as LineElement,
      { type: 'line', from: { x: 50, y: 50 }, to: { x: 10, y: 50 } } as LineElement,
      { type: 'line', from: { x: 50, y: 10 }, to: { x: 90, y: 50 } } as LineElement,
      { type: 'line', from: { x: 50, y: 10 }, to: { x: 10, y: 50 } } as LineElement,
    ],
    width: 200,
    height: 200,
    showNotAccurate: true,
  };
  const result = validateAndSanitizeDiagram(spec);
  expect(isDiagramValid(result.sanitizedSpec)).toBeTrue();
});

test('GCSE: Quadrilateral with parallel sides (trapezium)', () => {
  const spec: DiagramSpec = {
    elements: [
      {
        type: 'polygon',
        vertices: [
          { x: 10, y: 10, label: 'A', labelPosition: 'bottom-left' },
          { x: 90, y: 10, label: 'B', labelPosition: 'bottom-right' },
          { x: 70, y: 50, label: 'C', labelPosition: 'top-right' },
          { x: 30, y: 50, label: 'D', labelPosition: 'top-left' },
        ],
        sideLabels: [
          { fromIndex: 0, toIndex: 1, label: '12 cm' },
          { fromIndex: 2, toIndex: 3, label: '6 cm' },
        ],
      } as PolygonElement,
      // Parallel markers (small arrows on sides)
      { type: 'text', position: { x: 50, y: 7 }, content: '→→', fontSize: 10 } as TextElement,
      { type: 'text', position: { x: 50, y: 53 }, content: '→→', fontSize: 10 } as TextElement,
    ],
    width: 200,
    height: 100,
    showNotAccurate: true,
  };
  const result = validateAndSanitizeDiagram(spec);
  expect(isDiagramValid(result.sanitizedSpec)).toBeTrue();
});

test('GCSE: Coordinate geometry - straight line graph', () => {
  const graph = DiagramTemplates.coordinateGraph({
    xMin: -5,
    xMax: 5,
    yMin: -10,
    yMax: 10,
    fn: '2*x + 3',
    points: [
      { x: 0, y: 3, label: '(0, 3)' },
      { x: -1.5, y: 0, label: '(-1.5, 0)' },
    ],
  });
  const result = validateAndSanitizeDiagram(graph);
  expect(isDiagramValid(result.sanitizedSpec)).toBeTrue();
});

test('GCSE: Quadratic graph y = x² - 4', () => {
  const spec: DiagramSpec = {
    elements: [
      { type: 'grid', xMin: -4, xMax: 4, yMin: -5, yMax: 12 } as GridElement,
      { type: 'axes', xMin: -4, xMax: 4, yMin: -5, yMax: 12, showNumbers: true, xLabel: 'x', yLabel: 'y' } as AxesElement,
      { type: 'curve', fn: 'x^2 - 4', domain: [-4, 4], stroke: '#3b82f6', strokeWidth: 2 } as CurveElement,
      { type: 'point', position: { x: -2, y: 0, label: '(-2, 0)', labelPosition: 'bottom-left' } } as PointElement,
      { type: 'point', position: { x: 2, y: 0, label: '(2, 0)', labelPosition: 'bottom-right' } } as PointElement,
      { type: 'point', position: { x: 0, y: -4, label: '(0, -4)', labelPosition: 'bottom-right' } } as PointElement,
    ],
  };
  const result = validateAndSanitizeDiagram(spec);
  expect(isDiagramValid(result.sanitizedSpec)).toBeTrue();
});

test('GCSE: Probability tree - two events', () => {
  const spec: DiagramSpec = {
    elements: [{
      type: 'tree-diagram',
      root: {
        label: 'Bag A',
        children: [
          {
            probability: '3/5',
            label: 'Red',
            node: {
              label: 'Bag B',
              children: [
                { probability: '2/4', label: 'Red', node: { label: 'RR' } },
                { probability: '2/4', label: 'Blue', node: { label: 'RB' } },
              ],
            },
          },
          {
            probability: '2/5',
            label: 'Blue',
            node: {
              label: 'Bag B',
              children: [
                { probability: '2/4', label: 'Red', node: { label: 'BR' } },
                { probability: '2/4', label: 'Blue', node: { label: 'BB' } },
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

test('GCSE: Venn diagram - HCF/LCM problem', () => {
  const spec: DiagramSpec = {
    elements: [{
      type: 'venn-diagram',
      sets: [
        { label: 'Factors of 24', values: ['2', '4', '8'] },
        { label: 'Factors of 36', values: ['9', '18'] },
      ],
      intersection: ['2', '3', '4', '6', '12'],
      universalLabel: 'ξ',
      outsideValues: ['1'],
    } as VennDiagramElement],
  };
  const result = validateAndSanitizeDiagram(spec);
  expect(isDiagramValid(result.sanitizedSpec)).toBeTrue();
});

test('GCSE: Box plot - comparing distributions', () => {
  const spec: DiagramSpec = {
    elements: [{
      type: 'box-plot',
      min: 35,
      q1: 45,
      median: 52,
      q3: 61,
      max: 78,
      outliers: [25, 85],
      label: 'Test Scores (%)',
      axisMin: 0,
      axisMax: 100,
    } as BoxPlotElement],
  };
  const result = validateAndSanitizeDiagram(spec);
  expect(isDiagramValid(result.sanitizedSpec)).toBeTrue();
});

test('GCSE: Bar chart - frequency distribution', () => {
  const spec: DiagramSpec = {
    elements: [{
      type: 'bar-chart',
      data: [
        { label: '0-10', value: 5 },
        { label: '10-20', value: 12 },
        { label: '20-30', value: 18 },
        { label: '30-40', value: 15 },
        { label: '40-50', value: 8 },
      ],
      xLabel: 'Score Range',
      yLabel: 'Frequency',
    } as BarChartElement],
  };
  const result = validateAndSanitizeDiagram(spec);
  expect(isDiagramValid(result.sanitizedSpec)).toBeTrue();
});

test('GCSE: Number line - solving inequalities', () => {
  const spec: DiagramSpec = {
    elements: [{
      type: 'number-line',
      min: -5,
      max: 5,
      step: 1,
      points: [
        { value: -2, style: 'open', label: '-2' },
        { value: 3, style: 'filled', label: '3' },
      ],
      ranges: [
        { from: -2, to: 3, color: '#3b82f6' },
      ],
    } as NumberLineElement],
  };
  const result = validateAndSanitizeDiagram(spec);
  expect(isDiagramValid(result.sanitizedSpec)).toBeTrue();
});

// ============================================
// A-LEVEL MATHS SCENARIOS
// ============================================

test('A-Level: Trigonometric graph y = sin(x)', () => {
  const spec: DiagramSpec = {
    elements: [
      { type: 'grid', xMin: 0, xMax: 360, yMin: -1.5, yMax: 1.5, xStep: 45, yStep: 0.5 } as GridElement,
      { type: 'axes', xMin: 0, xMax: 360, yMin: -1.5, yMax: 1.5, showNumbers: true, xLabel: 'x°', yLabel: 'y' } as AxesElement,
      { type: 'curve', fn: 'sin(x * 3.14159 / 180)', domain: [0, 360], stroke: '#3b82f6' } as CurveElement,
    ],
  };
  const result = validateAndSanitizeDiagram(spec);
  expect(isDiagramValid(result.sanitizedSpec)).toBeTrue();
});

test('A-Level: Differentiation - tangent to curve', () => {
  const spec: DiagramSpec = {
    elements: [
      { type: 'grid', xMin: -2, xMax: 4, yMin: -2, yMax: 10, xStep: 1, yStep: 1 } as GridElement,
      { type: 'axes', xMin: -2, xMax: 4, yMin: -2, yMax: 10, showNumbers: true, xLabel: 'x', yLabel: 'y' } as AxesElement,
      { type: 'curve', fn: 'x^2', domain: [-2, 4], stroke: '#3b82f6', strokeWidth: 2 } as CurveElement,
      // Tangent line at x=2: y = 4x - 4
      { type: 'curve', fn: '4*x - 4', domain: [0, 3.5], stroke: '#ef4444', strokeWidth: 2 } as CurveElement,
      { type: 'point', position: { x: 2, y: 4, label: '(2, 4)', labelPosition: 'top-right' } } as PointElement,
      { type: 'text', position: { x: 3, y: 8.5 }, content: 'y = x²', fontSize: 12, color: '#3b82f6' } as TextElement,
      { type: 'text', position: { x: 3.2, y: 9.5 }, content: 'tangent', fontSize: 10, color: '#ef4444' } as TextElement,
    ],
  };
  const result = validateAndSanitizeDiagram(spec);
  expect(isDiagramValid(result.sanitizedSpec)).toBeTrue();
});

test('A-Level: Vectors - triangle rule', () => {
  const spec: DiagramSpec = {
    elements: [
      { type: 'arrow', from: { x: 10, y: 80 }, to: { x: 90, y: 80 }, label: 'a' } as ArrowElement,
      { type: 'arrow', from: { x: 90, y: 80 }, to: { x: 60, y: 20 }, label: 'b' } as ArrowElement,
      { type: 'arrow', from: { x: 10, y: 80 }, to: { x: 60, y: 20 }, label: 'a + b', color: '#ef4444' } as ArrowElement,
      { type: 'point', position: { x: 10, y: 80, label: 'O', labelPosition: 'bottom-left' } } as PointElement,
      { type: 'point', position: { x: 90, y: 80, label: 'A', labelPosition: 'bottom-right' } } as PointElement,
      { type: 'point', position: { x: 60, y: 20, label: 'B', labelPosition: 'top' } } as PointElement,
    ],
    width: 200,
    height: 150,
    showNotAccurate: true,
  };
  const result = validateAndSanitizeDiagram(spec);
  expect(isDiagramValid(result.sanitizedSpec)).toBeTrue();
});

test('A-Level: Integration - area under curve', () => {
  const spec: DiagramSpec = {
    elements: [
      { type: 'grid', xMin: 0, xMax: 5, yMin: 0, yMax: 16, xStep: 1, yStep: 2 } as GridElement,
      { type: 'axes', xMin: 0, xMax: 5, yMin: 0, yMax: 16, showNumbers: true, xLabel: 'x', yLabel: 'y' } as AxesElement,
      { type: 'curve', fn: 'x^2', domain: [0, 5], stroke: '#3b82f6', strokeWidth: 2 } as CurveElement,
      // Shaded region indicators
      { type: 'line', from: { x: 1, y: 0 }, to: { x: 1, y: 1 }, style: 'dashed' } as LineElement,
      { type: 'line', from: { x: 3, y: 0 }, to: { x: 3, y: 9 }, style: 'dashed' } as LineElement,
      { type: 'text', position: { x: 2, y: 3 }, content: 'Area', fontSize: 11 } as TextElement,
    ],
  };
  const result = validateAndSanitizeDiagram(spec);
  expect(isDiagramValid(result.sanitizedSpec)).toBeTrue();
});

// ============================================
// PHYSICS SCENARIOS
// ============================================

test('Physics: Force diagram - free body', () => {
  const spec: DiagramSpec = {
    elements: [
      // Object (rectangle)
      { type: 'rectangle', topLeft: { x: 40, y: 40 }, width: 20, height: 20, fill: 'rgba(59, 130, 246, 0.2)' } as any,
      // Forces
      { type: 'arrow', from: { x: 50, y: 50 }, to: { x: 50, y: 20 }, label: 'N', color: '#22c55e' } as ArrowElement,
      { type: 'arrow', from: { x: 50, y: 50 }, to: { x: 50, y: 80 }, label: 'W', color: '#ef4444' } as ArrowElement,
      { type: 'arrow', from: { x: 50, y: 50 }, to: { x: 80, y: 50 }, label: 'F', color: '#3b82f6' } as ArrowElement,
      { type: 'arrow', from: { x: 50, y: 50 }, to: { x: 20, y: 50 }, label: 'f', color: '#f59e0b' } as ArrowElement,
    ],
    width: 200,
    height: 150,
    showNotAccurate: true,
  };
  const result = validateAndSanitizeDiagram(spec);
  expect(isDiagramValid(result.sanitizedSpec)).toBeTrue();
});

test('Physics: Velocity-time graph', () => {
  const spec: DiagramSpec = {
    elements: [
      { type: 'grid', xMin: 0, xMax: 10, yMin: 0, yMax: 20, xStep: 1, yStep: 5 } as GridElement,
      { type: 'axes', xMin: 0, xMax: 10, yMin: 0, yMax: 20, showNumbers: true, xLabel: 't (s)', yLabel: 'v (m/s)' } as AxesElement,
      // Accelerating, constant, decelerating
      { type: 'curve', points: [
        { x: 0, y: 0 },
        { x: 3, y: 15 },
        { x: 7, y: 15 },
        { x: 10, y: 0 },
      ]} as CurveElement,
    ],
  };
  const result = validateAndSanitizeDiagram(spec);
  expect(isDiagramValid(result.sanitizedSpec)).toBeTrue();
});

// ============================================
// STATISTICS SCENARIOS
// ============================================

test('Stats: Pie chart - survey results', () => {
  const spec: DiagramSpec = {
    elements: [{
      type: 'pie-chart',
      data: [
        { label: 'Strongly Agree', value: 35, color: '#22c55e' },
        { label: 'Agree', value: 40, color: '#84cc16' },
        { label: 'Neutral', value: 15, color: '#f59e0b' },
        { label: 'Disagree', value: 7, color: '#ef4444' },
        { label: 'Strongly Disagree', value: 3, color: '#991b1b' },
      ],
      showPercentages: true,
    } as PieChartElement],
  };
  const result = validateAndSanitizeDiagram(spec);
  expect(isDiagramValid(result.sanitizedSpec)).toBeTrue();
});

test('Stats: Cumulative frequency diagram', () => {
  const spec: DiagramSpec = {
    elements: [
      { type: 'grid', xMin: 0, xMax: 100, yMin: 0, yMax: 60, xStep: 10, yStep: 10 } as GridElement,
      { type: 'axes', xMin: 0, xMax: 100, yMin: 0, yMax: 60, showNumbers: true, xLabel: 'Score', yLabel: 'Cumulative Frequency' } as AxesElement,
      { type: 'curve', points: [
        { x: 10, y: 3 },
        { x: 20, y: 8 },
        { x: 30, y: 18 },
        { x: 40, y: 32 },
        { x: 50, y: 45 },
        { x: 60, y: 52 },
        { x: 70, y: 57 },
        { x: 80, y: 59 },
        { x: 90, y: 60 },
      ], smooth: true } as CurveElement,
      // Median line
      { type: 'line', from: { x: 0, y: 30 }, to: { x: 38, y: 30 }, style: 'dashed', color: '#ef4444' } as LineElement,
      { type: 'line', from: { x: 38, y: 30 }, to: { x: 38, y: 0 }, style: 'dashed', color: '#ef4444' } as LineElement,
      { type: 'text', position: { x: 38, y: -5 }, content: 'Median', fontSize: 10 } as TextElement,
    ],
  };
  const result = validateAndSanitizeDiagram(spec);
  expect(isDiagramValid(result.sanitizedSpec)).toBeTrue();
});

// ============================================
// 3D GEOMETRY SCENARIOS
// ============================================

test('3D: Calculate volume of composite shape (cylinder on prism)', () => {
  // This tests the concept, actual rendering would need multiple elements
  const spec: DiagramSpec = {
    elements: [
      { type: 'prism-3d', width: 50, height: 30, depth: 40, labels: { width: '5 cm', height: '3 cm', depth: '4 cm' } } as any,
    ],
  };
  const result = validateAndSanitizeDiagram(spec);
  expect(isDiagramValid(result.sanitizedSpec)).toBeTrue();
});

// ============================================
// EDGE CASES FROM REAL AI GENERATION
// ============================================

test('Edge: AI generated diagram with missing bounds (common mistake)', () => {
  // AI often forgets to add width/height
  const spec: DiagramSpec = {
    elements: [
      { type: 'polygon', vertices: [
        { x: 0, y: 0, label: 'A' },
        { x: 8, y: 0, label: 'B' },
        { x: 4, y: 6, label: 'C' },
      ]} as PolygonElement,
    ],
    // No width/height specified - should auto-calculate
  };
  const result = validateAndSanitizeDiagram(spec);
  expect(result.sanitizedSpec.width).toBeDefined();
  expect(result.sanitizedSpec.height).toBeDefined();
});

test('Edge: AI generated labels without positions (common mistake)', () => {
  const spec: DiagramSpec = {
    elements: [{
      type: 'polygon',
      vertices: [
        { x: 10, y: 10, label: 'P' },  // Missing labelPosition
        { x: 90, y: 10, label: 'Q' },  // Missing labelPosition
        { x: 50, y: 80, label: 'R' },  // Missing labelPosition
      ],
    } as PolygonElement],
    width: 200,
    height: 150,
  };
  const result = validateAndSanitizeDiagram(spec);
  const poly = result.sanitizedSpec.elements[0] as PolygonElement;
  // Should have auto-added labelPositions
  poly.vertices.forEach(v => {
    if (v.label) {
      expect(v.labelPosition).toBeDefined();
    }
  });
});

test('Edge: Negative coordinates (AI mistake for non-coordinate diagrams)', () => {
  const spec: DiagramSpec = {
    elements: [{
      type: 'polygon',
      vertices: [
        { x: -5, y: -5 },
        { x: 5, y: -5 },
        { x: 0, y: 5 },
      ],
    } as PolygonElement],
    // No axes, so negative coords are a mistake
  };
  const result = validateAndSanitizeDiagram(spec);
  // Should normalize coordinates
  const poly = result.sanitizedSpec.elements[0] as PolygonElement;
  poly.vertices.forEach(v => {
    expect(v.x).toBeGreaterThanOrEqual(0);
    expect(v.y).toBeGreaterThanOrEqual(0);
  });
});

test('Edge: Very small diagram elements', () => {
  const spec: DiagramSpec = {
    elements: [
      { type: 'circle', center: { x: 0.5, y: 0.5 }, radius: 0.1 } as CircleElement,
    ],
    width: 1,
    height: 1,
  };
  const result = validateAndSanitizeDiagram(spec);
  expect(result.sanitizedSpec.elements.length).toBe(1);
});

test('Edge: Diagram with only text elements', () => {
  const spec: DiagramSpec = {
    elements: [
      { type: 'text', position: { x: 50, y: 20 }, content: 'Title', fontSize: 16, fontWeight: 'bold' } as TextElement,
      { type: 'text', position: { x: 50, y: 50 }, content: 'Description here', fontSize: 12 } as TextElement,
    ],
    width: 200,
    height: 100,
  };
  const result = validateAndSanitizeDiagram(spec);
  expect(result.sanitizedSpec.elements.length).toBe(2);
});

// ============================================
// Run All Tests
// ============================================

console.log('\n🧪 Running Real-World Scenario Tests...\n');

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
  console.log('\n✅ All scenario tests passed!');
}
