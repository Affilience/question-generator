'use client';

import { DiagramRenderer } from '@/components/DiagramRenderer';
import { PrintTest } from '@/components/PrintTest';
import type {
  DiagramSpec,
  PolygonElement,
  CircleElement,
  PointElement,
  LineElement,
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
} from '@/types/diagram';
import { useState, useEffect } from 'react';

// ============================================
// COMPREHENSIVE TEST DIAGRAMS FOR ALL SUBJECTS
// ============================================

const diagrams: { name: string; category: string; subject: string; spec: DiagramSpec }[] = [
  // ============================================
  // MATHEMATICS - GEOMETRY
  // ============================================
  {
    name: 'Right Triangle (Pythagoras)',
    category: 'Geometry',
    subject: 'Maths',
    spec: {
      elements: [
        {
          type: 'polygon',
          vertices: [
            { x: 5, y: 5, label: 'A', labelPosition: 'bottom-left' },
            { x: 21, y: 5, label: 'B', labelPosition: 'bottom-right' },
            { x: 5, y: 17, label: 'C', labelPosition: 'top-left' },
          ],
          sideLabels: [
            { fromIndex: 0, toIndex: 1, label: '8 cm' },
            { fromIndex: 0, toIndex: 2, label: '6 cm', position: 'outside' },
            { fromIndex: 1, toIndex: 2, label: 'x cm' },
          ],
        } as PolygonElement,
        {
          type: 'angle-marker',
          vertex: { x: 5, y: 5 },
          ray1End: { x: 21, y: 5 },
          ray2End: { x: 5, y: 17 },
          isRightAngle: true,
          radius: 2,
        } as AngleMarkerElement,
      ],
      width: 26,
      height: 22,
      showNotAccurate: true,
    },
  },
  {
    name: 'Isosceles Triangle with Angles',
    category: 'Geometry',
    subject: 'Maths',
    spec: {
      elements: [
        {
          type: 'polygon',
          vertices: [
            { x: 8, y: 5, label: 'A', labelPosition: 'bottom-left' },
            { x: 22, y: 5, label: 'B', labelPosition: 'bottom-right' },
            { x: 15, y: 22, label: 'C', labelPosition: 'top' },
          ],
          sideLabels: [
            { fromIndex: 0, toIndex: 2, label: '7 cm', position: 'outside' },
            { fromIndex: 1, toIndex: 2, label: '7 cm', position: 'outside' },
          ],
        } as PolygonElement,
        {
          type: 'angle-marker',
          vertex: { x: 8, y: 5 },
          ray1End: { x: 22, y: 5 },
          ray2End: { x: 15, y: 22 },
          label: '115°',
          radius: 2,
        } as AngleMarkerElement,
        {
          type: 'angle-marker',
          vertex: { x: 22, y: 5 },
          ray1End: { x: 8, y: 5 },
          ray2End: { x: 15, y: 22 },
          label: '65°',
          radius: 2,
        } as AngleMarkerElement,
      ],
      width: 25,
      height: 27,
      showNotAccurate: true,
    },
  },
  {
    name: 'Quadrilateral (Trapezium)',
    category: 'Geometry',
    subject: 'Maths',
    spec: {
      elements: [
        {
          type: 'polygon',
          vertices: [
            { x: 5, y: 5, label: 'A', labelPosition: 'bottom-left' },
            { x: 25, y: 5, label: 'B', labelPosition: 'bottom-right' },
            { x: 20, y: 18, label: 'C', labelPosition: 'top-right' },
            { x: 10, y: 18, label: 'D', labelPosition: 'top-left' },
          ],
          sideLabels: [
            { fromIndex: 0, toIndex: 1, label: '12 cm' },
            { fromIndex: 2, toIndex: 3, label: '6 cm' },
          ],
        } as PolygonElement,
      ],
      width: 30,
      height: 23,
      showNotAccurate: true,
    },
  },
  {
    name: 'Circle with Radius and Chord',
    category: 'Geometry',
    subject: 'Maths',
    spec: {
      elements: [
        { type: 'circle', center: { x: 15, y: 15, label: 'O', labelPosition: 'bottom-right' }, radius: 10, radiusLabel: 'r = 5 cm' } as CircleElement,
        { type: 'point', position: { x: 25, y: 15, label: 'A', labelPosition: 'right' } } as PointElement,
        { type: 'point', position: { x: 6.46, y: 20.91, label: 'B', labelPosition: 'top-left' } } as PointElement,
        { type: 'line', from: { x: 25, y: 15 }, to: { x: 6.46, y: 20.91 }, label: 'chord' } as LineElement,
      ],
      width: 30,
      height: 25,
      showNotAccurate: true,
    },
  },
  {
    name: 'Circle Theorem - Angle at Centre',
    category: 'Geometry',
    subject: 'Maths',
    spec: {
      elements: [
        { type: 'circle', center: { x: 17, y: 15, label: 'O' }, radius: 10 } as CircleElement,
        { type: 'point', position: { x: 27, y: 15, label: 'A', labelPosition: 'right' } } as PointElement,
        { type: 'point', position: { x: 7, y: 15, label: 'B', labelPosition: 'left' } } as PointElement,
        { type: 'point', position: { x: 17, y: 5, label: 'P', labelPosition: 'top' } } as PointElement,
        { type: 'line', from: { x: 17, y: 15 }, to: { x: 27, y: 15 } } as LineElement,
        { type: 'line', from: { x: 17, y: 15 }, to: { x: 7, y: 15 } } as LineElement,
        { type: 'line', from: { x: 17, y: 5 }, to: { x: 27, y: 15 }, style: 'dashed' } as LineElement,
        { type: 'line', from: { x: 17, y: 5 }, to: { x: 7, y: 15 }, style: 'dashed' } as LineElement,
        { type: 'angle-marker', vertex: { x: 17, y: 15 }, ray1End: { x: 23, y: 15 }, ray2End: { x: 11, y: 15 }, label: '180°', radius: 1.2 } as AngleMarkerElement,
      ],
      width: 32,
      height: 30,
      showNotAccurate: true,
    },
  },
  {
    name: 'Arc and Sector',
    category: 'Geometry',
    subject: 'Maths',
    spec: {
      elements: [
        { type: 'circle', center: { x: 15, y: 15 }, radius: 8, fill: 'none', stroke: '#6b7280' } as CircleElement,
        { type: 'arc', center: { x: 15, y: 15 }, radius: 8, startAngle: 0, endAngle: 60, fill: 'none', stroke: 'none' } as ArcElement,
        { type: 'angle-marker', vertex: { x: 15, y: 15 }, ray1End: { x: 23, y: 15 }, ray2End: { x: 19, y: 22 }, label: '60°', radius: 3 } as AngleMarkerElement,
        { type: 'line', from: { x: 15, y: 15 }, to: { x: 23, y: 15 } } as LineElement,
        { type: 'line', from: { x: 15, y: 15 }, to: { x: 19, y: 22 } } as LineElement,
        { type: 'point', position: { x: 15, y: 15, label: 'O', labelPosition: 'bottom-left' } } as PointElement,
        { type: 'text', position: { x: 24, y: 14 }, content: 'r', fontSize: 12 } as TextElement,
      ],
      width: 28,
      height: 28,
      showNotAccurate: true,
    },
  },
  {
    name: 'Parallel Lines with Transversal',
    category: 'Geometry',
    subject: 'Maths',
    spec: {
      elements: [
        { type: 'line', from: { x: 2, y: 3 }, to: { x: 14, y: 3 } } as LineElement,
        { type: 'line', from: { x: 2, y: 8 }, to: { x: 14, y: 8 } } as LineElement,
        { type: 'line', from: { x: 4, y: 1 }, to: { x: 10, y: 10 } } as LineElement,
        { type: 'text', position: { x: 13, y: 2 }, content: 'l₁', fontSize: 12 } as TextElement,
        { type: 'text', position: { x: 13, y: 7 }, content: 'l₂', fontSize: 12 } as TextElement,
      ],
      width: 16,
      height: 12,
      showNotAccurate: true,
    },
  },

  // ============================================
  // MATHEMATICS - COORDINATE GEOMETRY / GRAPHS
  // ============================================
  {
    name: 'Linear Graph y = 2x + 1',
    category: 'Graphs',
    subject: 'Maths',
    spec: {
      elements: [
        { type: 'grid', xMin: -5, xMax: 5, yMin: -5, yMax: 5, xStep: 1, yStep: 1 } as GridElement,
        { type: 'axes', xMin: -5, xMax: 5, yMin: -5, yMax: 5, showNumbers: true, xLabel: 'x', yLabel: 'y' } as AxesElement,
        { type: 'curve', fn: '2*x + 1', domain: [-5, 4.5], stroke: '#3b82f6', strokeWidth: 2 } as CurveElement,
        { type: 'point', position: { x: 0, y: 1, label: '(0, 1)', labelPosition: 'top-right' } } as PointElement,
        { type: 'point', position: { x: -0.5, y: 0, label: '(-½, 0)', labelPosition: 'top-left' } } as PointElement,
      ],
    },
  },
  {
    name: 'Quadratic Graph y = x² - 4',
    category: 'Graphs',
    subject: 'Maths',
    spec: {
      elements: [
        { type: 'grid', xMin: -5, xMax: 5, yMin: -5, yMax: 5, xStep: 1, yStep: 1 } as GridElement,
        { type: 'axes', xMin: -5, xMax: 5, yMin: -5, yMax: 5, showNumbers: true, xLabel: 'x', yLabel: 'y' } as AxesElement,
        { type: 'curve', fn: 'x^2 - 4', domain: [-2.5, 2.5], stroke: '#3b82f6', strokeWidth: 2 } as CurveElement,
        { type: 'point', position: { x: -2, y: 0, label: '(-2, 0)', labelPosition: 'top-left' } } as PointElement,
        { type: 'point', position: { x: 2, y: 0, label: '(2, 0)', labelPosition: 'top-right' } } as PointElement,
        { type: 'point', position: { x: 0, y: -4, label: '(0, -4)', labelPosition: 'bottom' } } as PointElement,
      ],
    },
  },
  {
    name: 'Cubic Graph y = x³',
    category: 'Graphs',
    subject: 'Maths',
    spec: {
      elements: [
        { type: 'grid', xMin: -5, xMax: 5, yMin: -5, yMax: 5, xStep: 1, yStep: 1 } as GridElement,
        { type: 'axes', xMin: -5, xMax: 5, yMin: -5, yMax: 5, showNumbers: true, xLabel: 'x', yLabel: 'y' } as AxesElement,
        { type: 'curve', fn: 'x^3', domain: [-1.7, 1.7], stroke: '#8b5cf6', strokeWidth: 2 } as CurveElement,
      ],
      width: 300,
      height: 300,
    },
  },
  {
    name: 'Trigonometric Graph y = sin(x)',
    category: 'Graphs',
    subject: 'Maths',
    spec: {
      elements: [
        { type: 'grid', xMin: -5, xMax: 5, yMin: -5, yMax: 5, xStep: 1, yStep: 1 } as GridElement,
        { type: 'axes', xMin: -5, xMax: 5, yMin: -5, yMax: 5, showNumbers: true, xLabel: 'x', yLabel: 'y' } as AxesElement,
        { type: 'curve', fn: 'sin(x)', domain: [-5, 5], stroke: '#ef4444', strokeWidth: 2 } as CurveElement,
      ],
    },
  },
  {
    name: 'Exponential Graph y = 2^x',
    category: 'Graphs',
    subject: 'Maths',
    spec: {
      elements: [
        { type: 'grid', xMin: -5, xMax: 5, yMin: -5, yMax: 5, xStep: 1, yStep: 1 } as GridElement,
        { type: 'axes', xMin: -5, xMax: 5, yMin: -5, yMax: 5, showNumbers: true, xLabel: 'x', yLabel: 'y' } as AxesElement,
        { type: 'curve', fn: '2^x', domain: [-5, 2.3], stroke: '#22c55e', strokeWidth: 2 } as CurveElement,
        { type: 'point', position: { x: 0, y: 1, label: '(0, 1)', labelPosition: 'right' } } as PointElement,
      ],
    },
  },
  {
    name: 'Reciprocal Graph y = 1/x',
    category: 'Graphs',
    subject: 'Maths',
    spec: {
      elements: [
        { type: 'grid', xMin: -5, xMax: 5, yMin: -5, yMax: 5, xStep: 1, yStep: 1 } as GridElement,
        { type: 'axes', xMin: -5, xMax: 5, yMin: -5, yMax: 5, showNumbers: true, xLabel: 'x', yLabel: 'y' } as AxesElement,
        { type: 'curve', fn: '1/x', domain: [0.2, 5], stroke: '#f59e0b', strokeWidth: 2 } as CurveElement,
        { type: 'curve', fn: '1/x', domain: [-5, -0.2], stroke: '#f59e0b', strokeWidth: 2 } as CurveElement,
      ],
    },
  },
  {
    name: 'Cosine Graph y = cos(x)',
    category: 'Graphs',
    subject: 'Maths',
    spec: {
      elements: [
        { type: 'grid', xMin: -5, xMax: 5, yMin: -5, yMax: 5, xStep: 1, yStep: 1 } as GridElement,
        { type: 'axes', xMin: -5, xMax: 5, yMin: -5, yMax: 5, showNumbers: true, xLabel: 'x', yLabel: 'y' } as AxesElement,
        { type: 'curve', fn: 'cos(x)', domain: [-5, 5], stroke: '#3b82f6', strokeWidth: 2 } as CurveElement,
      ],
    },
  },
  {
    name: 'Negative Quadratic y = -x² + 4',
    category: 'Graphs',
    subject: 'Maths',
    spec: {
      elements: [
        { type: 'grid', xMin: -5, xMax: 5, yMin: -5, yMax: 5, xStep: 1, yStep: 1 } as GridElement,
        { type: 'axes', xMin: -5, xMax: 5, yMin: -5, yMax: 5, showNumbers: true, xLabel: 'x', yLabel: 'y' } as AxesElement,
        { type: 'curve', fn: '4 - x^2', domain: [-2.2, 2.2], stroke: '#ec4899', strokeWidth: 2 } as CurveElement,
        { type: 'point', position: { x: 0, y: 4, label: '(0, 4)', labelPosition: 'top' } } as PointElement,
      ],
    },
  },

  // ============================================
  // MATHEMATICS - PROBABILITY
  // ============================================
  {
    name: 'Probability Tree - Coin Flip',
    category: 'Probability',
    subject: 'Maths',
    spec: {
      elements: [{
        type: 'tree-diagram',
        root: {
          label: '1st Flip',
          children: [
            {
              probability: '½',
              label: 'H',
              node: {
                label: '2nd Flip',
                children: [
                  { probability: '½', label: 'H', node: { label: 'HH' } },
                  { probability: '½', label: 'T', node: { label: 'HT' } },
                ],
              },
            },
            {
              probability: '½',
              label: 'T',
              node: {
                label: '2nd Flip',
                children: [
                  { probability: '½', label: 'H', node: { label: 'TH' } },
                  { probability: '½', label: 'T', node: { label: 'TT' } },
                ],
              },
            },
          ],
        },
      } as TreeDiagramElement],
    },
  },
  {
    name: 'Probability Tree - Biased',
    category: 'Probability',
    subject: 'Maths',
    spec: {
      elements: [{
        type: 'tree-diagram',
        root: {
          label: '1st pick',
          children: [
            {
              probability: '3/5',
              label: 'Red',
              node: {
                label: '',
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
                label: '',
                children: [
                  { probability: '3/4', label: 'Red', node: { label: 'BR' } },
                  { probability: '1/4', label: 'Blue', node: { label: 'BB' } },
                ],
              },
            },
          ],
        },
      } as TreeDiagramElement],
    },
  },
  {
    name: 'Venn Diagram - Two Sets',
    category: 'Probability',
    subject: 'Maths',
    spec: {
      elements: [{
        type: 'venn-diagram',
        sets: [
          { label: 'A', values: ['1', '2', '5'] },
          { label: 'B', values: ['6', '7', '8'] },
        ],
        intersection: ['3', '4'],
        outsideValues: ['9', '10'],
        universalLabel: 'ξ',
      } as VennDiagramElement],
    },
  },

  // ============================================
  // MATHEMATICS - STATISTICS
  // ============================================
  {
    name: 'Bar Chart - Frequency',
    category: 'Statistics',
    subject: 'Maths',
    spec: {
      elements: [{
        type: 'bar-chart',
        data: [
          { label: 'Mon', value: 12 },
          { label: 'Tue', value: 19 },
          { label: 'Wed', value: 8 },
          { label: 'Thu', value: 15 },
          { label: 'Fri', value: 22 },
        ],
        xLabel: 'Day',
        yLabel: 'Sales',
      } as BarChartElement],
    },
  },
  {
    name: 'Pie Chart - Survey',
    category: 'Statistics',
    subject: 'Maths',
    spec: {
      elements: [{
        type: 'pie-chart',
        data: [
          { label: 'Agree', value: 45 },
          { label: 'Disagree', value: 25 },
          { label: 'Neutral', value: 20 },
          { label: 'No Opinion', value: 10 },
        ],
        showPercentages: true,
      } as PieChartElement],
      width: 320,
      height: 280,
    },
  },
  {
    name: 'Box Plot with Outliers',
    category: 'Statistics',
    subject: 'Maths',
    spec: {
      elements: [{
        type: 'box-plot',
        min: 25,
        q1: 35,
        median: 45,
        q3: 60,
        max: 75,
        outliers: [10, 15, 90],
        label: 'Test Scores',
        axisMin: 0,
        axisMax: 100,
      } as BoxPlotElement],
    },
  },
  {
    name: 'Number Line - Inequality',
    category: 'Statistics',
    subject: 'Maths',
    spec: {
      elements: [{
        type: 'number-line',
        min: -5,
        max: 5,
        step: 1,
        points: [
          { value: -2, style: 'open' },
          { value: 3, style: 'filled' },
        ],
        ranges: [
          { from: -2, to: 3, color: '#3b82f6' },
        ],
      } as NumberLineElement],
    },
  },

  // ============================================
  // MATHEMATICS - 3D SHAPES
  // ============================================
  {
    name: '3D Cuboid/Prism',
    category: '3D Shapes',
    subject: 'Maths',
    spec: {
      elements: [{
        type: 'prism-3d',
        width: 60,
        height: 40,
        depth: 30,
        labels: { width: '6 cm', height: '4 cm', depth: '3 cm' },
      } as Prism3DElement],
    },
  },
  {
    name: '3D Cylinder',
    category: '3D Shapes',
    subject: 'Maths',
    spec: {
      elements: [{
        type: 'cylinder-3d',
        radius: 25,
        height: 60,
        labels: { radius: 'r = 5 cm', height: 'h = 12 cm' },
      } as Cylinder3DElement],
    },
  },
  {
    name: '3D Cone',
    category: '3D Shapes',
    subject: 'Maths',
    spec: {
      elements: [{
        type: 'cone-3d',
        radius: 30,
        height: 50,
        labels: { radius: 'r', height: 'h' },
      } as Cone3DElement],
    },
  },
  {
    name: '3D Sphere',
    category: '3D Shapes',
    subject: 'Maths',
    spec: {
      elements: [{
        type: 'sphere-3d',
        radius: 35,
        labels: { radius: 'r = 7 cm' },
      } as Sphere3DElement],
    },
  },
  {
    name: '3D Pyramid',
    category: '3D Shapes',
    subject: 'Maths',
    spec: {
      elements: [{
        type: 'pyramid-3d',
        baseWidth: 50,
        height: 60,
        labels: { baseWidth: '10 cm', height: '12 cm' },
      } as Pyramid3DElement],
    },
  },

  // ============================================
  // MATHEMATICS - VECTORS
  // ============================================
  {
    name: 'Vector Addition (Triangle Rule)',
    category: 'Vectors',
    subject: 'Maths',
    spec: {
      elements: [
        { type: 'arrow', from: { x: 1, y: 2 }, to: { x: 9, y: 2 }, label: 'a', color: '#3b82f6' } as ArrowElement,
        { type: 'arrow', from: { x: 9, y: 2 }, to: { x: 6, y: 8 }, label: 'b', color: '#22c55e' } as ArrowElement,
        { type: 'arrow', from: { x: 1, y: 2 }, to: { x: 6, y: 8 }, label: 'a + b', color: '#ef4444' } as ArrowElement,
        { type: 'text', position: { x: 0.5, y: 2 }, content: 'O', fontSize: 14 } as TextElement,
        { type: 'text', position: { x: 9.5, y: 1.5 }, content: 'A', fontSize: 14 } as TextElement,
        { type: 'text', position: { x: 6, y: 9 }, content: 'B', fontSize: 14 } as TextElement,
      ],
      showNotAccurate: true,
    },
  },
  {
    name: 'Position Vectors',
    category: 'Vectors',
    subject: 'Maths',
    spec: {
      elements: [
        { type: 'grid', xMin: -1, xMax: 8, yMin: -1, yMax: 8, xStep: 1, yStep: 1 } as GridElement,
        { type: 'axes', xMin: -1, xMax: 8, yMin: -1, yMax: 8, showNumbers: true, xLabel: 'x', yLabel: 'y' } as AxesElement,
        { type: 'arrow', from: { x: 0, y: 0 }, to: { x: 3, y: 5 }, label: 'a', color: '#3b82f6' } as ArrowElement,
        { type: 'arrow', from: { x: 0, y: 0 }, to: { x: 6, y: 2 }, label: 'b', color: '#22c55e' } as ArrowElement,
        { type: 'point', position: { x: 3, y: 5, label: 'A(3,5)', labelPosition: 'top-right' } } as PointElement,
        { type: 'point', position: { x: 6, y: 2, label: 'B(6,2)', labelPosition: 'right' } } as PointElement,
      ],
    },
  },

  // ============================================
  // PHYSICS - MECHANICS
  // ============================================
  {
    name: 'Force Diagram (Free Body)',
    category: 'Mechanics',
    subject: 'Physics',
    spec: {
      elements: [
        { type: 'grid', xMin: 0, xMax: 10, yMin: 0, yMax: 10, xStep: 1, yStep: 1 } as GridElement,
        { type: 'rectangle', topLeft: { x: 3.5, y: 3.5 }, width: 3, height: 3, fill: 'rgba(100, 100, 100, 0.3)' } as RectangleElement,
        { type: 'arrow', from: { x: 5, y: 5 }, to: { x: 5, y: 9 }, label: 'N', color: '#22c55e' } as ArrowElement,
        { type: 'arrow', from: { x: 5, y: 5 }, to: { x: 5, y: 1 }, label: 'W', color: '#ef4444' } as ArrowElement,
        { type: 'arrow', from: { x: 5, y: 5 }, to: { x: 9, y: 5 }, label: 'F', color: '#3b82f6' } as ArrowElement,
        { type: 'arrow', from: { x: 5, y: 5 }, to: { x: 1, y: 5 }, label: 'f', color: '#f59e0b' } as ArrowElement,
      ],
      showNotAccurate: true,
    },
  },
  {
    name: 'Forces on a Slope',
    category: 'Mechanics',
    subject: 'Physics',
    spec: {
      elements: [
        // The slope
        { type: 'polygon', vertices: [
          { x: 1, y: 1 },
          { x: 9, y: 1 },
          { x: 9, y: 6 },
        ], fill: 'rgba(100, 100, 100, 0.2)' } as PolygonElement,
        // The box on the slope
        { type: 'polygon', vertices: [
          { x: 4.5, y: 2.8 },
          { x: 6.2, y: 3.65 },
          { x: 5.6, y: 4.85 },
          { x: 3.9, y: 4 },
        ], fill: 'rgba(59, 130, 246, 0.3)' } as PolygonElement,
        // Weight arrow (straight down)
        { type: 'arrow', from: { x: 5, y: 3.8 }, to: { x: 5, y: 1 }, label: 'W', color: '#ef4444' } as ArrowElement,
        // Normal force (perpendicular to slope)
        { type: 'arrow', from: { x: 5, y: 3.8 }, to: { x: 3.5, y: 6.2 }, label: 'N', color: '#22c55e' } as ArrowElement,
        // Friction (parallel to slope, up)
        { type: 'arrow', from: { x: 5, y: 3.8 }, to: { x: 2.8, y: 2.7 }, label: 'f', color: '#f59e0b' } as ArrowElement,
        // Angle label
        { type: 'text', position: { x: 7.5, y: 1.8 }, content: 'θ', fontSize: 14 } as TextElement,
      ],
      showNotAccurate: true,
    },
  },
  {
    name: 'Projectile Motion',
    category: 'Mechanics',
    subject: 'Physics',
    spec: {
      elements: [
        { type: 'axes', xMin: 0, xMax: 12, yMin: 0, yMax: 8, showNumbers: false, xLabel: 'Distance', yLabel: 'Height' } as AxesElement,
        { type: 'curve', points: [
          { x: 0.5, y: 0 }, { x: 2, y: 3 }, { x: 4, y: 5 }, { x: 6, y: 6 }, { x: 8, y: 5 }, { x: 10, y: 3 }, { x: 11.5, y: 0 }
        ], smooth: true, stroke: '#3b82f6', strokeWidth: 2 } as CurveElement,
        { type: 'point', position: { x: 0.5, y: 0, label: 'Launch', labelPosition: 'bottom' } } as PointElement,
        { type: 'point', position: { x: 6, y: 6, label: 'Max height', labelPosition: 'top' } } as PointElement,
        { type: 'arrow', from: { x: 0.5, y: 0 }, to: { x: 2, y: 3 }, color: '#22c55e' } as ArrowElement,
      ],
      width: 300,
      height: 200,
    },
  },
  {
    name: 'Velocity-Time Graph',
    category: 'Mechanics',
    subject: 'Physics',
    spec: {
      elements: [
        { type: 'grid', xMin: 0, xMax: 10, yMin: 0, yMax: 20, xStep: 1, yStep: 2 } as GridElement,
        { type: 'axes', xMin: 0, xMax: 10, yMin: 0, yMax: 20, showNumbers: true, xLabel: 'Time (s)', yLabel: 'v (m/s)' } as AxesElement,
        { type: 'curve', points: [
          { x: 0, y: 0 }, { x: 3, y: 15 }, { x: 7, y: 15 }, { x: 10, y: 0 }
        ], stroke: '#3b82f6', strokeWidth: 2 } as CurveElement,
        { type: 'text', position: { x: 1.5, y: 5 }, content: 'Accel.', fontSize: 9 } as TextElement,
        { type: 'text', position: { x: 5, y: 12 }, content: 'Const. v', fontSize: 9 } as TextElement,
        { type: 'text', position: { x: 8.5, y: 5 }, content: 'Decel.', fontSize: 9 } as TextElement,
      ],
    },
  },
  {
    name: 'Distance-Time Graph',
    category: 'Mechanics',
    subject: 'Physics',
    spec: {
      elements: [
        { type: 'grid', xMin: 0, xMax: 10, yMin: 0, yMax: 20, xStep: 1, yStep: 2 } as GridElement,
        { type: 'axes', xMin: 0, xMax: 10, yMin: 0, yMax: 20, showNumbers: true, xLabel: 'Time (s)', yLabel: 'Distance (m)' } as AxesElement,
        { type: 'curve', points: [
          { x: 0, y: 0 }, { x: 2, y: 5 }, { x: 5, y: 5 }, { x: 8, y: 16 }, { x: 10, y: 16 }
        ], stroke: '#22c55e', strokeWidth: 2 } as CurveElement,
      ],
    },
  },

  // ============================================
  // PHYSICS - WAVES
  // ============================================
  {
    name: 'Transverse Wave',
    category: 'Waves',
    subject: 'Physics',
    spec: {
      elements: [
        { type: 'axes', xMin: 0, xMax: 12, yMin: -3, yMax: 3, showNumbers: false, xLabel: 'Distance', yLabel: '' } as AxesElement,
        { type: 'curve', fn: '2*sin(x)', domain: [0, 12], stroke: '#3b82f6', strokeWidth: 2 } as CurveElement,
        { type: 'line', from: { x: 1.57, y: 0 }, to: { x: 1.57, y: 2 }, style: 'dashed', color: '#ef4444' } as LineElement,
        { type: 'text', position: { x: 2.2, y: 1 }, content: 'Amplitude', fontSize: 10 } as TextElement,
        { type: 'line', from: { x: 0, y: -2.5 }, to: { x: 6.28, y: -2.5 }, color: '#22c55e' } as LineElement,
        { type: 'text', position: { x: 3.14, y: -3 }, content: 'Wavelength λ', fontSize: 10 } as TextElement,
      ],
    },
  },
  {
    name: 'Ray Diagram - Convex Lens',
    category: 'Waves',
    subject: 'Physics',
    spec: {
      elements: [
        // Principal axis
        { type: 'line', from: { x: 0, y: 5 }, to: { x: 14, y: 5 } } as LineElement,
        // Lens (vertical line with outward arrows indicating convex/converging)
        { type: 'line', from: { x: 7, y: 1.5 }, to: { x: 7, y: 8.5 }, strokeWidth: 2, color: '#3b82f6' } as LineElement,
        { type: 'polygon', vertices: [{ x: 6.7, y: 1.8 }, { x: 7, y: 1.2 }, { x: 7.3, y: 1.8 }], fill: '#3b82f6' } as PolygonElement,
        { type: 'polygon', vertices: [{ x: 6.7, y: 8.2 }, { x: 7, y: 8.8 }, { x: 7.3, y: 8.2 }], fill: '#3b82f6' } as PolygonElement,
        // Focal points (f=2, so F at x=5 and x=9)
        { type: 'point', position: { x: 5, y: 5, label: 'F', labelPosition: 'bottom' } } as PointElement,
        { type: 'point', position: { x: 9, y: 5, label: 'F', labelPosition: 'bottom' } } as PointElement,
        // Object (upright arrow at x=3, height 2.5 units above axis)
        { type: 'arrow', from: { x: 3, y: 5 }, to: { x: 3, y: 7.5 }, color: '#22c55e', strokeWidth: 3 } as ArrowElement,
        // Ray 1: Parallel to axis → refracts through F (x=9) → to image
        { type: 'line', from: { x: 3, y: 7.5 }, to: { x: 7, y: 7.5 }, color: '#ef4444' } as LineElement,
        { type: 'line', from: { x: 7, y: 7.5 }, to: { x: 11, y: 2.5 }, color: '#ef4444' } as LineElement,
        // Ray 2: Through optical centre (7,5) → continues straight
        { type: 'line', from: { x: 3, y: 7.5 }, to: { x: 11, y: 2.5 }, color: '#f59e0b' } as LineElement,
        // Image (inverted, same size at x=11 since object at 2f)
        { type: 'arrow', from: { x: 11, y: 5 }, to: { x: 11, y: 2.5 }, color: '#8b5cf6', strokeWidth: 3 } as ArrowElement,
        // Labels
        { type: 'text', position: { x: 3, y: 8.3 }, content: 'Object', fontSize: 9 } as TextElement,
        { type: 'text', position: { x: 11, y: 1.8 }, content: 'Image', fontSize: 9 } as TextElement,
      ],
    },
  },

  // ============================================
  // PHYSICS - ELECTRICITY
  // ============================================
  {
    name: 'Simple Circuit - Series',
    category: 'Electricity',
    subject: 'Physics',
    spec: {
      elements: [
        { type: 'grid', xMin: 0, xMax: 12, yMin: 0, yMax: 10, xStep: 1, yStep: 1 } as GridElement,
        // Circuit loop
        { type: 'line', from: { x: 2, y: 2 }, to: { x: 10, y: 2 } } as LineElement,
        { type: 'line', from: { x: 10, y: 2 }, to: { x: 10, y: 8 } } as LineElement,
        { type: 'line', from: { x: 10, y: 8 }, to: { x: 2, y: 8 } } as LineElement,
        { type: 'line', from: { x: 2, y: 8 }, to: { x: 2, y: 2 } } as LineElement,
        // R1 on top
        { type: 'rectangle', topLeft: { x: 5, y: 1.5 }, width: 2, height: 1, fill: 'none' } as RectangleElement,
        { type: 'text', position: { x: 6, y: 3.2 }, content: 'R₁', fontSize: 11 } as TextElement,
        // R2 on right side
        { type: 'rectangle', topLeft: { x: 9.5, y: 4.5 }, width: 1, height: 2, fill: 'none' } as RectangleElement,
        { type: 'text', position: { x: 8.5, y: 5.5 }, content: 'R₂', fontSize: 11 } as TextElement,
        // Battery on left (long line +, short line -)
        { type: 'line', from: { x: 1.5, y: 4.5 }, to: { x: 1.5, y: 5.5 } } as LineElement,
        { type: 'line', from: { x: 2.5, y: 4.7 }, to: { x: 2.5, y: 5.3 } } as LineElement,
        { type: 'text', position: { x: 1.2, y: 4 }, content: '+', fontSize: 10 } as TextElement,
      ],
    },
  },
  {
    name: 'I-V Characteristic - Resistor',
    category: 'Electricity',
    subject: 'Physics',
    spec: {
      elements: [
        { type: 'grid', xMin: -5, xMax: 5, yMin: -2, yMax: 2, xStep: 1, yStep: 0.5 } as GridElement,
        { type: 'axes', xMin: -5, xMax: 5, yMin: -2, yMax: 2, showNumbers: true, xLabel: 'V (V)', yLabel: 'I (A)' } as AxesElement,
        { type: 'line', from: { x: -4, y: -1.6 }, to: { x: 4, y: 1.6 }, color: '#3b82f6', strokeWidth: 2 } as LineElement,
        { type: 'text', position: { x: 3, y: 0.5 }, content: 'Ohmic conductor', fontSize: 10 } as TextElement,
      ],
    },
  },
  {
    name: 'I-V Characteristic - Filament Lamp',
    category: 'Electricity',
    subject: 'Physics',
    spec: {
      elements: [
        { type: 'grid', xMin: -5, xMax: 5, yMin: -2, yMax: 2, xStep: 1, yStep: 0.5 } as GridElement,
        { type: 'axes', xMin: -5, xMax: 5, yMin: -2, yMax: 2, showNumbers: true, xLabel: 'V (V)', yLabel: 'I (A)' } as AxesElement,
        { type: 'curve', points: [
          { x: -4, y: -1.2 }, { x: -2, y: -0.8 }, { x: 0, y: 0 }, { x: 2, y: 0.8 }, { x: 4, y: 1.2 }
        ], smooth: true, stroke: '#ef4444', strokeWidth: 2 } as CurveElement,
        { type: 'text', position: { x: 3, y: 0.3 }, content: 'Filament lamp', fontSize: 10 } as TextElement,
      ],
    },
  },

  // ============================================
  // PHYSICS - FIELDS
  // ============================================
  {
    name: 'Magnetic Field - Bar Magnet',
    category: 'Fields',
    subject: 'Physics',
    spec: {
      elements: [
        { type: 'axes', xMin: 0, xMax: 16, yMin: 0, yMax: 12, showNumbers: false } as AxesElement,
        // Bar magnet using polygons - North pole (RED) on left, South pole (BLUE) on right
        { type: 'polygon', vertices: [{ x: 5, y: 5 }, { x: 8, y: 5 }, { x: 8, y: 7 }, { x: 5, y: 7 }], fill: '#ef4444', stroke: '#dc2626' } as PolygonElement,
        { type: 'polygon', vertices: [{ x: 8, y: 5 }, { x: 11, y: 5 }, { x: 11, y: 7 }, { x: 8, y: 7 }], fill: '#3b82f6', stroke: '#2563eb' } as PolygonElement,
        { type: 'text', position: { x: 6.5, y: 6 }, content: 'N', fontSize: 14, fontWeight: 'bold', color: '#ffffff' } as TextElement,
        { type: 'text', position: { x: 9.5, y: 6 }, content: 'S', fontSize: 14, fontWeight: 'bold', color: '#ffffff' } as TextElement,
        // Outer field lines (from N pole curving around to S pole) - dark grey
        { type: 'curve', points: [{ x: 5, y: 6 }, { x: 3, y: 6 }, { x: 1.5, y: 4 }, { x: 3, y: 1.5 }, { x: 8, y: 1 }, { x: 13, y: 1.5 }, { x: 14.5, y: 4 }, { x: 13, y: 6 }, { x: 11, y: 6 }], smooth: true, stroke: '#1f2937', strokeWidth: 1.5 } as CurveElement,
        { type: 'curve', points: [{ x: 5, y: 6 }, { x: 3, y: 6 }, { x: 1.5, y: 8 }, { x: 3, y: 10.5 }, { x: 8, y: 11 }, { x: 13, y: 10.5 }, { x: 14.5, y: 8 }, { x: 13, y: 6 }, { x: 11, y: 6 }], smooth: true, stroke: '#1f2937', strokeWidth: 1.5 } as CurveElement,
        // Middle field lines
        { type: 'curve', points: [{ x: 5, y: 6 }, { x: 4, y: 6 }, { x: 2.5, y: 4.5 }, { x: 4, y: 2.5 }, { x: 8, y: 2 }, { x: 12, y: 2.5 }, { x: 13.5, y: 4.5 }, { x: 12, y: 6 }, { x: 11, y: 6 }], smooth: true, stroke: '#1f2937', strokeWidth: 1.5 } as CurveElement,
        { type: 'curve', points: [{ x: 5, y: 6 }, { x: 4, y: 6 }, { x: 2.5, y: 7.5 }, { x: 4, y: 9.5 }, { x: 8, y: 10 }, { x: 12, y: 9.5 }, { x: 13.5, y: 7.5 }, { x: 12, y: 6 }, { x: 11, y: 6 }], smooth: true, stroke: '#1f2937', strokeWidth: 1.5 } as CurveElement,
        // Inner field lines (closer to magnet)
        { type: 'curve', points: [{ x: 5, y: 6 }, { x: 4.5, y: 6 }, { x: 4, y: 5 }, { x: 5, y: 4 }, { x: 8, y: 3.5 }, { x: 11, y: 4 }, { x: 12, y: 5 }, { x: 11.5, y: 6 }, { x: 11, y: 6 }], smooth: true, stroke: '#1f2937', strokeWidth: 1.5 } as CurveElement,
        { type: 'curve', points: [{ x: 5, y: 6 }, { x: 4.5, y: 6 }, { x: 4, y: 7 }, { x: 5, y: 8 }, { x: 8, y: 8.5 }, { x: 11, y: 8 }, { x: 12, y: 7 }, { x: 11.5, y: 6 }, { x: 11, y: 6 }], smooth: true, stroke: '#1f2937', strokeWidth: 1.5 } as CurveElement,
      ],
    },
  },

  // ============================================
  // CHEMISTRY - APPARATUS
  // ============================================
  {
    name: 'Beaker with Thermometer',
    category: 'Apparatus',
    subject: 'Chemistry',
    spec: {
      elements: [
        { type: 'rectangle', topLeft: { x: 3, y: 4 }, width: 6, height: 6, fill: 'rgba(59, 130, 246, 0.2)', stroke: '#374151' } as RectangleElement,
        { type: 'line', from: { x: 6, y: 4 }, to: { x: 6, y: 1 }, strokeWidth: 3 } as LineElement,
        { type: 'circle', center: { x: 6, y: 1 }, radius: 0.5, fill: '#ef4444' } as CircleElement,
        { type: 'text', position: { x: 6, y: 7 }, content: 'Solution', fontSize: 11 } as TextElement,
        { type: 'text', position: { x: 7.5, y: 2 }, content: 'Thermometer', fontSize: 10 } as TextElement,
      ],
      width: 150,
      height: 160,
    },
  },
  {
    name: 'Gas Collection - Upward Delivery',
    category: 'Apparatus',
    subject: 'Chemistry',
    spec: {
      elements: [
        { type: 'axes', xMin: 0, xMax: 14, yMin: 0, yMax: 12, showNumbers: false } as AxesElement,
        // Conical flask (round bottom with neck)
        { type: 'polygon', vertices: [{ x: 2, y: 2 }, { x: 6, y: 2 }, { x: 5, y: 5 }, { x: 5, y: 6 }, { x: 3, y: 6 }, { x: 3, y: 5 }], fill: 'rgba(59, 130, 246, 0.15)', stroke: '#374151' } as PolygonElement,
        // Liquid in flask
        { type: 'polygon', vertices: [{ x: 2.3, y: 2.3 }, { x: 5.7, y: 2.3 }, { x: 4.8, y: 4 }, { x: 3.2, y: 4 }], fill: 'rgba(59, 130, 246, 0.3)' } as PolygonElement,
        // Delivery tube - bent upward
        { type: 'line', from: { x: 4, y: 6 }, to: { x: 4, y: 7 }, strokeWidth: 2 } as LineElement,
        { type: 'line', from: { x: 4, y: 7 }, to: { x: 9, y: 7 }, strokeWidth: 2 } as LineElement,
        { type: 'line', from: { x: 9, y: 7 }, to: { x: 9, y: 9 }, strokeWidth: 2 } as LineElement,
        // Inverted gas jar (upside down over delivery tube)
        { type: 'rectangle', topLeft: { x: 7, y: 8 }, width: 4, height: 3, fill: 'none', stroke: '#374151' } as RectangleElement,
        // Gas collecting (shown as lighter area at top of jar)
        { type: 'rectangle', topLeft: { x: 7.2, y: 9.5 }, width: 3.6, height: 1.3, fill: 'rgba(251, 191, 36, 0.2)' } as RectangleElement,
        // Labels
        { type: 'text', position: { x: 4, y: 1 }, content: 'Flask', fontSize: 9 } as TextElement,
        { type: 'text', position: { x: 6.5, y: 7.5 }, content: 'Delivery tube', fontSize: 8 } as TextElement,
        { type: 'text', position: { x: 12.5, y: 9.5 }, content: 'Inverted', fontSize: 8 } as TextElement,
        { type: 'text', position: { x: 12.5, y: 8.7 }, content: 'gas jar', fontSize: 8 } as TextElement,
        { type: 'text', position: { x: 9, y: 10.8 }, content: 'Gas ↑', fontSize: 8 } as TextElement,
      ],
    },
  },

  // ============================================
  // CHEMISTRY - PARTICLES
  // ============================================
  {
    name: 'Particle Diagram - Solid',
    category: 'Particles',
    subject: 'Chemistry',
    spec: {
      elements: [
        { type: 'circle', center: { x: 2, y: 2 }, radius: 0.8, fill: '#3b82f6' } as CircleElement,
        { type: 'circle', center: { x: 4, y: 2 }, radius: 0.8, fill: '#3b82f6' } as CircleElement,
        { type: 'circle', center: { x: 6, y: 2 }, radius: 0.8, fill: '#3b82f6' } as CircleElement,
        { type: 'circle', center: { x: 2, y: 4 }, radius: 0.8, fill: '#3b82f6' } as CircleElement,
        { type: 'circle', center: { x: 4, y: 4 }, radius: 0.8, fill: '#3b82f6' } as CircleElement,
        { type: 'circle', center: { x: 6, y: 4 }, radius: 0.8, fill: '#3b82f6' } as CircleElement,
        { type: 'circle', center: { x: 2, y: 6 }, radius: 0.8, fill: '#3b82f6' } as CircleElement,
        { type: 'circle', center: { x: 4, y: 6 }, radius: 0.8, fill: '#3b82f6' } as CircleElement,
        { type: 'circle', center: { x: 6, y: 6 }, radius: 0.8, fill: '#3b82f6' } as CircleElement,
        { type: 'text', position: { x: 4, y: 8 }, content: 'Solid - particles vibrate in fixed positions', fontSize: 10 } as TextElement,
      ],
      width: 180,
      height: 150,
    },
  },
  {
    name: 'Particle Diagram - Liquid',
    category: 'Particles',
    subject: 'Chemistry',
    spec: {
      elements: [
        { type: 'circle', center: { x: 2, y: 2.5 }, radius: 0.8, fill: '#22c55e' } as CircleElement,
        { type: 'circle', center: { x: 4.2, y: 2 }, radius: 0.8, fill: '#22c55e' } as CircleElement,
        { type: 'circle', center: { x: 6, y: 2.8 }, radius: 0.8, fill: '#22c55e' } as CircleElement,
        { type: 'circle', center: { x: 1.8, y: 4.5 }, radius: 0.8, fill: '#22c55e' } as CircleElement,
        { type: 'circle', center: { x: 4, y: 4.2 }, radius: 0.8, fill: '#22c55e' } as CircleElement,
        { type: 'circle', center: { x: 6.2, y: 4.8 }, radius: 0.8, fill: '#22c55e' } as CircleElement,
        { type: 'circle', center: { x: 2.5, y: 6.5 }, radius: 0.8, fill: '#22c55e' } as CircleElement,
        { type: 'circle', center: { x: 4.5, y: 6 }, radius: 0.8, fill: '#22c55e' } as CircleElement,
        { type: 'circle', center: { x: 6, y: 6.5 }, radius: 0.8, fill: '#22c55e' } as CircleElement,
        { type: 'text', position: { x: 4, y: 8 }, content: 'Liquid - particles slide past each other', fontSize: 10 } as TextElement,
      ],
      width: 180,
      height: 150,
    },
  },
  {
    name: 'Particle Diagram - Gas',
    category: 'Particles',
    subject: 'Chemistry',
    spec: {
      elements: [
        { type: 'rectangle', topLeft: { x: 1, y: 1 }, width: 8, height: 6, fill: 'none', style: 'dashed' } as RectangleElement,
        { type: 'circle', center: { x: 2, y: 2 }, radius: 0.5, fill: '#ef4444' } as CircleElement,
        { type: 'circle', center: { x: 5, y: 1.5 }, radius: 0.5, fill: '#ef4444' } as CircleElement,
        { type: 'circle', center: { x: 8, y: 3 }, radius: 0.5, fill: '#ef4444' } as CircleElement,
        { type: 'circle', center: { x: 3, y: 5 }, radius: 0.5, fill: '#ef4444' } as CircleElement,
        { type: 'circle', center: { x: 6.5, y: 6 }, radius: 0.5, fill: '#ef4444' } as CircleElement,
        { type: 'circle', center: { x: 7, y: 4.5 }, radius: 0.5, fill: '#ef4444' } as CircleElement,
        { type: 'text', position: { x: 5, y: 8 }, content: 'Gas - particles move randomly at high speed', fontSize: 10 } as TextElement,
      ],
      width: 200,
      height: 150,
    },
  },

  // ============================================
  // CHEMISTRY - BONDING
  // ============================================
  {
    name: 'Dot-Cross Diagram - NaCl',
    category: 'Bonding',
    subject: 'Chemistry',
    spec: {
      elements: [
        { type: 'axes', xMin: 0, xMax: 16, yMin: 0, yMax: 12, showNumbers: false } as AxesElement,
        // Na+ ion - circle with square brackets
        { type: 'circle', center: { x: 4, y: 6 }, radius: 2, fill: 'none', stroke: '#374151' } as CircleElement,
        { type: 'text', position: { x: 4, y: 6 }, content: 'Na', fontSize: 14, fontWeight: 'bold' } as TextElement,
        // Square brackets around Na+ (drawn as lines)
        { type: 'line', from: { x: 1.5, y: 3.5 }, to: { x: 1.5, y: 8.5 } } as LineElement,
        { type: 'line', from: { x: 1.5, y: 3.5 }, to: { x: 2.2, y: 3.5 } } as LineElement,
        { type: 'line', from: { x: 1.5, y: 8.5 }, to: { x: 2.2, y: 8.5 } } as LineElement,
        { type: 'line', from: { x: 6.5, y: 3.5 }, to: { x: 6.5, y: 8.5 } } as LineElement,
        { type: 'line', from: { x: 6.5, y: 3.5 }, to: { x: 5.8, y: 3.5 } } as LineElement,
        { type: 'line', from: { x: 6.5, y: 8.5 }, to: { x: 5.8, y: 8.5 } } as LineElement,
        { type: 'text', position: { x: 7, y: 4 }, content: '+', fontSize: 12, fontWeight: 'bold' } as TextElement,

        // Cl- ion - circle with electrons around it
        { type: 'circle', center: { x: 11, y: 6 }, radius: 2.5, fill: 'none', stroke: '#374151' } as CircleElement,
        { type: 'text', position: { x: 11, y: 6 }, content: 'Cl', fontSize: 14, fontWeight: 'bold' } as TextElement,
        // Square brackets around Cl-
        { type: 'line', from: { x: 8, y: 3 }, to: { x: 8, y: 9 } } as LineElement,
        { type: 'line', from: { x: 8, y: 3 }, to: { x: 8.7, y: 3 } } as LineElement,
        { type: 'line', from: { x: 8, y: 9 }, to: { x: 8.7, y: 9 } } as LineElement,
        { type: 'line', from: { x: 14, y: 3 }, to: { x: 14, y: 9 } } as LineElement,
        { type: 'line', from: { x: 14, y: 3 }, to: { x: 13.3, y: 3 } } as LineElement,
        { type: 'line', from: { x: 14, y: 9 }, to: { x: 13.3, y: 9 } } as LineElement,
        { type: 'text', position: { x: 14.5, y: 3.5 }, content: '−', fontSize: 12, fontWeight: 'bold' } as TextElement,
        // Cl electrons - 7 crosses arranged around circle + 1 dot
        { type: 'text', position: { x: 11, y: 3.2 }, content: '××', fontSize: 11 } as TextElement,
        { type: 'text', position: { x: 11, y: 8.8 }, content: '××', fontSize: 11 } as TextElement,
        { type: 'text', position: { x: 8.3, y: 6 }, content: '×', fontSize: 11 } as TextElement,
        { type: 'text', position: { x: 13.5, y: 6 }, content: '×', fontSize: 11 } as TextElement,
        { type: 'text', position: { x: 9, y: 4.3 }, content: '×', fontSize: 11 } as TextElement,
        // Transferred electron (dot) from Na - shown in red
        { type: 'text', position: { x: 13, y: 4.3 }, content: '•', fontSize: 16, color: '#ef4444' } as TextElement,
        // Label
        { type: 'text', position: { x: 8, y: 1.5 }, content: 'Ionic bonding in NaCl', fontSize: 10 } as TextElement,
      ],
    },
  },

  // ============================================
  // CHEMISTRY - ENERGY
  // ============================================
  {
    name: 'Energy Level Diagram - Exothermic',
    category: 'Energy',
    subject: 'Chemistry',
    spec: {
      elements: [
        { type: 'axes', xMin: 0, xMax: 10, yMin: 0, yMax: 10, showNumbers: false, xLabel: 'Progress of reaction', yLabel: 'Energy' } as AxesElement,
        { type: 'line', from: { x: 1, y: 7 }, to: { x: 3, y: 7 }, strokeWidth: 2 } as LineElement,
        { type: 'curve', points: [{ x: 3, y: 7 }, { x: 5, y: 9 }, { x: 7, y: 3 }], smooth: true, stroke: '#3b82f6', strokeWidth: 2 } as CurveElement,
        { type: 'line', from: { x: 7, y: 3 }, to: { x: 9, y: 3 }, strokeWidth: 2 } as LineElement,
        { type: 'text', position: { x: 2, y: 7.8 }, content: 'Reactants', fontSize: 10 } as TextElement,
        { type: 'text', position: { x: 8, y: 3.8 }, content: 'Products', fontSize: 10 } as TextElement,
        { type: 'arrow', from: { x: 9.5, y: 7 }, to: { x: 9.5, y: 3 }, color: '#ef4444' } as ArrowElement,
        { type: 'text', position: { x: 10.5, y: 5 }, content: 'ΔH < 0', fontSize: 10 } as TextElement,
      ],
    },
  },
  {
    name: 'Energy Level Diagram - Endothermic',
    category: 'Energy',
    subject: 'Chemistry',
    spec: {
      elements: [
        { type: 'axes', xMin: 0, xMax: 10, yMin: 0, yMax: 10, showNumbers: false, xLabel: 'Progress of reaction', yLabel: 'Energy' } as AxesElement,
        { type: 'line', from: { x: 1, y: 3 }, to: { x: 3, y: 3 }, strokeWidth: 2 } as LineElement,
        { type: 'curve', points: [{ x: 3, y: 3 }, { x: 5, y: 9 }, { x: 7, y: 7 }], smooth: true, stroke: '#3b82f6', strokeWidth: 2 } as CurveElement,
        { type: 'line', from: { x: 7, y: 7 }, to: { x: 9, y: 7 }, strokeWidth: 2 } as LineElement,
        { type: 'text', position: { x: 2, y: 3.8 }, content: 'Reactants', fontSize: 10 } as TextElement,
        { type: 'text', position: { x: 8, y: 7.8 }, content: 'Products', fontSize: 10 } as TextElement,
        { type: 'arrow', from: { x: 9.5, y: 3 }, to: { x: 9.5, y: 7 }, color: '#22c55e' } as ArrowElement,
        { type: 'text', position: { x: 10.5, y: 5 }, content: 'ΔH > 0', fontSize: 10 } as TextElement,
      ],
    },
  },

  // ============================================
  // BIOLOGY - CELLS
  // ============================================
  {
    name: 'Animal Cell',
    category: 'Cells',
    subject: 'Biology',
    spec: {
      elements: [
        { type: 'axes', xMin: 0, xMax: 16, yMin: 0, yMax: 14, showNumbers: false } as AxesElement,
        // Cell membrane (outer boundary)
        { type: 'circle', center: { x: 8, y: 7 }, radius: 5, fill: 'rgba(239, 68, 68, 0.1)', stroke: '#ef4444' } as CircleElement,
        // Nucleus
        { type: 'circle', center: { x: 8, y: 7 }, radius: 1.8, fill: 'rgba(59, 130, 246, 0.3)', stroke: '#3b82f6' } as CircleElement,
        { type: 'circle', center: { x: 8, y: 7 }, radius: 0.5, fill: '#1f2937' } as CircleElement,
        { type: 'text', position: { x: 8, y: 4.5 }, content: 'Nucleus', fontSize: 10 } as TextElement,
        // Labels
        { type: 'text', position: { x: 14, y: 11 }, content: 'Cell membrane', fontSize: 9 } as TextElement,
        { type: 'line', from: { x: 12.5, y: 10.5 }, to: { x: 11, y: 9.5 }, style: 'dashed' } as LineElement,
        { type: 'text', position: { x: 14, y: 7 }, content: 'Cytoplasm', fontSize: 9 } as TextElement,
        // Mitochondria
        { type: 'circle', center: { x: 5, y: 5 }, radius: 0.6, fill: 'rgba(34, 197, 94, 0.5)' } as CircleElement,
        { type: 'circle', center: { x: 10, y: 9 }, radius: 0.6, fill: 'rgba(34, 197, 94, 0.5)' } as CircleElement,
        { type: 'text', position: { x: 2.5, y: 5 }, content: 'Mitochondria', fontSize: 8 } as TextElement,
      ],
      showNotAccurate: true,
    },
  },
  {
    name: 'Plant Cell',
    category: 'Cells',
    subject: 'Biology',
    spec: {
      elements: [
        { type: 'axes', xMin: 0, xMax: 18, yMin: 0, yMax: 14, showNumbers: false } as AxesElement,
        // Cell wall (outer thick boundary) - use polygon instead of rectangle for Y-flip compatibility
        { type: 'polygon', vertices: [{ x: 2, y: 2 }, { x: 14, y: 2 }, { x: 14, y: 12 }, { x: 2, y: 12 }], fill: 'none', stroke: '#22c55e', strokeWidth: 3 } as PolygonElement,
        // Cell membrane (inner boundary)
        { type: 'polygon', vertices: [{ x: 2.5, y: 2.5 }, { x: 13.5, y: 2.5 }, { x: 13.5, y: 11.5 }, { x: 2.5, y: 11.5 }], fill: 'rgba(34, 197, 94, 0.1)', stroke: '#22c55e' } as PolygonElement,
        // Large central vacuole (dominates the cell)
        { type: 'polygon', vertices: [{ x: 4, y: 4 }, { x: 12, y: 4 }, { x: 12, y: 10 }, { x: 4, y: 10 }], fill: 'rgba(147, 197, 253, 0.3)', stroke: '#60a5fa' } as PolygonElement,
        // Nucleus (pushed to corner by vacuole)
        { type: 'circle', center: { x: 4, y: 3.2 }, radius: 1, fill: 'rgba(59, 130, 246, 0.4)', stroke: '#3b82f6' } as CircleElement,
        { type: 'circle', center: { x: 4, y: 3.2 }, radius: 0.3, fill: '#1f2937' } as CircleElement,
        // Chloroplasts (green circles in cytoplasm)
        { type: 'circle', center: { x: 3.2, y: 11 }, radius: 0.5, fill: '#22c55e' } as CircleElement,
        { type: 'circle', center: { x: 13, y: 7 }, radius: 0.5, fill: '#22c55e' } as CircleElement,
        { type: 'circle', center: { x: 12, y: 3 }, radius: 0.5, fill: '#22c55e' } as CircleElement,
        { type: 'circle', center: { x: 8, y: 11 }, radius: 0.5, fill: '#22c55e' } as CircleElement,
        // Mitochondria (smaller, orange)
        { type: 'circle', center: { x: 10, y: 3 }, radius: 0.35, fill: '#f97316' } as CircleElement,
        { type: 'circle', center: { x: 3, y: 7 }, radius: 0.35, fill: '#f97316' } as CircleElement,
        // Labels
        { type: 'text', position: { x: 16, y: 12 }, content: 'Cell wall', fontSize: 8 } as TextElement,
        { type: 'line', from: { x: 15, y: 12 }, to: { x: 14, y: 12 }, style: 'dashed' } as LineElement,
        { type: 'text', position: { x: 16, y: 7 }, content: 'Vacuole', fontSize: 8 } as TextElement,
        { type: 'line', from: { x: 15, y: 7 }, to: { x: 12, y: 7 }, style: 'dashed' } as LineElement,
        { type: 'text', position: { x: 6, y: 3.2 }, content: 'Nucleus', fontSize: 8 } as TextElement,
        { type: 'text', position: { x: 16, y: 10 }, content: 'Chloroplast', fontSize: 8 } as TextElement,
        { type: 'line', from: { x: 15, y: 10.5 }, to: { x: 13, y: 7 }, style: 'dashed' } as LineElement,
        { type: 'text', position: { x: 16, y: 3 }, content: 'Mitochondria', fontSize: 8 } as TextElement,
        { type: 'line', from: { x: 15, y: 3 }, to: { x: 10.5, y: 3 }, style: 'dashed' } as LineElement,
      ],
      showNotAccurate: true,
    },
  },

  // ============================================
  // BIOLOGY - GENETICS
  // ============================================
  {
    name: 'Punnett Square - Monohybrid',
    category: 'Genetics',
    subject: 'Biology',
    spec: {
      elements: [
        // Hidden axes to define bounds
        { type: 'axes', xMin: 0, xMax: 14, yMin: 0, yMax: 14, showNumbers: false, xLabel: '', yLabel: '' } as AxesElement,
        // Grid lines - the 2x2 Punnett square
        { type: 'line', from: { x: 4, y: 2 }, to: { x: 4, y: 10 }, strokeWidth: 1.5 } as LineElement,
        { type: 'line', from: { x: 7, y: 2 }, to: { x: 7, y: 10 }, strokeWidth: 1.5 } as LineElement,
        { type: 'line', from: { x: 10, y: 2 }, to: { x: 10, y: 10 }, strokeWidth: 1.5 } as LineElement,
        { type: 'line', from: { x: 4, y: 2 }, to: { x: 10, y: 2 }, strokeWidth: 1.5 } as LineElement,
        { type: 'line', from: { x: 4, y: 4 }, to: { x: 10, y: 4 }, strokeWidth: 1.5 } as LineElement,
        { type: 'line', from: { x: 4, y: 7 }, to: { x: 10, y: 7 }, strokeWidth: 1.5 } as LineElement,
        { type: 'line', from: { x: 4, y: 10 }, to: { x: 10, y: 10 }, strokeWidth: 1.5 } as LineElement,
        // Parent allele labels (top row)
        { type: 'text', position: { x: 5.5, y: 11 }, content: 'B', fontSize: 14, fontWeight: 'bold' } as TextElement,
        { type: 'text', position: { x: 8.5, y: 11 }, content: 'b', fontSize: 14, fontWeight: 'bold' } as TextElement,
        // Parent allele labels (left column)
        { type: 'text', position: { x: 3, y: 5.5 }, content: 'B', fontSize: 14, fontWeight: 'bold' } as TextElement,
        { type: 'text', position: { x: 3, y: 8.5 }, content: 'b', fontSize: 14, fontWeight: 'bold' } as TextElement,
        // Results in cells
        { type: 'text', position: { x: 5.5, y: 5.5 }, content: 'BB', fontSize: 12 } as TextElement,
        { type: 'text', position: { x: 8.5, y: 5.5 }, content: 'Bb', fontSize: 12 } as TextElement,
        { type: 'text', position: { x: 5.5, y: 8.5 }, content: 'Bb', fontSize: 12 } as TextElement,
        { type: 'text', position: { x: 8.5, y: 8.5 }, content: 'bb', fontSize: 12 } as TextElement,
        // Title and ratio
        { type: 'text', position: { x: 7, y: 13 }, content: 'Ratio: 3:1 (phenotype)', fontSize: 10 } as TextElement,
      ],
    },
  },

  // ============================================
  // BIOLOGY - ECOLOGY
  // ============================================
  {
    name: 'Food Chain',
    category: 'Ecology',
    subject: 'Biology',
    spec: {
      elements: [
        // Hidden axes to define bounds
        { type: 'axes', xMin: 0, xMax: 18, yMin: 0, yMax: 10, showNumbers: false, xLabel: '', yLabel: '' } as AxesElement,
        // Organism names
        { type: 'text', position: { x: 2, y: 6 }, content: 'Grass', fontSize: 12, fontWeight: 'bold' } as TextElement,
        { type: 'arrow', from: { x: 4, y: 6 }, to: { x: 6, y: 6 }, color: '#22c55e' } as ArrowElement,
        { type: 'text', position: { x: 8, y: 6 }, content: 'Rabbit', fontSize: 12, fontWeight: 'bold' } as TextElement,
        { type: 'arrow', from: { x: 10.5, y: 6 }, to: { x: 12.5, y: 6 }, color: '#22c55e' } as ArrowElement,
        { type: 'text', position: { x: 15, y: 6 }, content: 'Fox', fontSize: 12, fontWeight: 'bold' } as TextElement,
        // Trophic level labels
        { type: 'text', position: { x: 2, y: 4 }, content: 'Producer', fontSize: 9, color: '#6b7280' } as TextElement,
        { type: 'text', position: { x: 8, y: 4 }, content: 'Primary', fontSize: 9, color: '#6b7280' } as TextElement,
        { type: 'text', position: { x: 8, y: 3 }, content: 'consumer', fontSize: 9, color: '#6b7280' } as TextElement,
        { type: 'text', position: { x: 15, y: 4 }, content: 'Secondary', fontSize: 9, color: '#6b7280' } as TextElement,
        { type: 'text', position: { x: 15, y: 3 }, content: 'consumer', fontSize: 9, color: '#6b7280' } as TextElement,
        // Energy flow label
        { type: 'text', position: { x: 9, y: 8 }, content: 'Energy flow →', fontSize: 10, color: '#22c55e' } as TextElement,
      ],
    },
  },

  // ============================================
  // ECONOMICS - MICRO
  // ============================================
  {
    name: 'Supply and Demand',
    category: 'Microeconomics',
    subject: 'Economics',
    spec: {
      elements: [
        { type: 'axes', xMin: 0, xMax: 10, yMin: 0, yMax: 10, showNumbers: false, xLabel: 'Quantity', yLabel: 'Price' } as AxesElement,
        { type: 'line', from: { x: 1, y: 9 }, to: { x: 9, y: 1 }, color: '#3b82f6', strokeWidth: 2 } as LineElement,
        { type: 'line', from: { x: 1, y: 1 }, to: { x: 9, y: 9 }, color: '#ef4444', strokeWidth: 2 } as LineElement,
        { type: 'point', position: { x: 5, y: 5, label: 'E', labelPosition: 'top-right' } } as PointElement,
        { type: 'line', from: { x: 5, y: 0 }, to: { x: 5, y: 5 }, style: 'dashed' } as LineElement,
        { type: 'line', from: { x: 0, y: 5 }, to: { x: 5, y: 5 }, style: 'dashed' } as LineElement,
        { type: 'text', position: { x: 9.5, y: 1.5 }, content: 'D', fontSize: 12, color: '#3b82f6' } as TextElement,
        { type: 'text', position: { x: 9.5, y: 8.5 }, content: 'S', fontSize: 12, color: '#ef4444' } as TextElement,
        { type: 'text', position: { x: 5, y: -0.8 }, content: 'Qe', fontSize: 10 } as TextElement,
        { type: 'text', position: { x: -0.8, y: 5 }, content: 'Pe', fontSize: 10 } as TextElement,
      ],
    },
  },
  {
    name: 'Shift in Demand',
    category: 'Microeconomics',
    subject: 'Economics',
    spec: {
      elements: [
        { type: 'axes', xMin: 0, xMax: 10, yMin: 0, yMax: 10, showNumbers: false, xLabel: 'Quantity', yLabel: 'Price' } as AxesElement,
        { type: 'line', from: { x: 1, y: 7 }, to: { x: 7, y: 1 }, color: '#3b82f6', strokeWidth: 2 } as LineElement,
        { type: 'line', from: { x: 3, y: 9 }, to: { x: 9, y: 3 }, color: '#3b82f6', strokeWidth: 2, style: 'dashed' } as LineElement,
        { type: 'line', from: { x: 1, y: 1 }, to: { x: 9, y: 9 }, color: '#ef4444', strokeWidth: 2 } as LineElement,
        { type: 'arrow', from: { x: 4, y: 4 }, to: { x: 6, y: 6 }, color: '#22c55e' } as ArrowElement,
        { type: 'text', position: { x: 7.5, y: 1.5 }, content: 'D₁', fontSize: 11 } as TextElement,
        { type: 'text', position: { x: 9.5, y: 3.5 }, content: 'D₂', fontSize: 11 } as TextElement,
        { type: 'text', position: { x: 9.5, y: 8.5 }, content: 'S', fontSize: 11 } as TextElement,
      ],
    },
  },
  {
    name: 'Cost Curves (AC/MC)',
    category: 'Microeconomics',
    subject: 'Economics',
    spec: {
      elements: [
        { type: 'axes', xMin: 0, xMax: 10, yMin: 0, yMax: 10, showNumbers: false, xLabel: 'Output', yLabel: 'Cost' } as AxesElement,
        { type: 'curve', points: [{ x: 1, y: 8 }, { x: 3, y: 3 }, { x: 5, y: 2 }, { x: 7, y: 3 }, { x: 9, y: 6 }], smooth: true, stroke: '#3b82f6', strokeWidth: 2 } as CurveElement,
        { type: 'curve', points: [{ x: 1, y: 4 }, { x: 3, y: 2 }, { x: 5, y: 2 }, { x: 7, y: 5 }, { x: 9, y: 9 }], smooth: true, stroke: '#ef4444', strokeWidth: 2 } as CurveElement,
        { type: 'text', position: { x: 9.5, y: 6 }, content: 'AC', fontSize: 11, color: '#3b82f6' } as TextElement,
        { type: 'text', position: { x: 9.5, y: 9 }, content: 'MC', fontSize: 11, color: '#ef4444' } as TextElement,
      ],
    },
  },
  {
    name: 'Production Possibility Frontier',
    category: 'Microeconomics',
    subject: 'Economics',
    spec: {
      elements: [
        { type: 'axes', xMin: 0, xMax: 10, yMin: 0, yMax: 10, showNumbers: false, xLabel: 'Consumer goods', yLabel: 'Capital goods' } as AxesElement,
        { type: 'curve', points: [{ x: 0.5, y: 9 }, { x: 3, y: 8 }, { x: 6, y: 6 }, { x: 8, y: 3 }, { x: 9, y: 0.5 }], smooth: true, stroke: '#3b82f6', strokeWidth: 2 } as CurveElement,
        { type: 'point', position: { x: 4, y: 4, label: 'Inefficient', labelPosition: 'bottom-right' } } as PointElement,
        { type: 'point', position: { x: 6, y: 6, label: 'On PPF', labelPosition: 'top-right' } } as PointElement,
        { type: 'point', position: { x: 8, y: 7, label: 'Unattainable', labelPosition: 'top-right' } } as PointElement,
      ],
    },
  },

  // ============================================
  // ECONOMICS - MACRO
  // ============================================
  {
    name: 'AD/AS Model',
    category: 'Macroeconomics',
    subject: 'Economics',
    spec: {
      elements: [
        { type: 'axes', xMin: 0, xMax: 10, yMin: 0, yMax: 10, showNumbers: false, xLabel: 'Real GDP', yLabel: 'Price Level' } as AxesElement,
        { type: 'line', from: { x: 1, y: 9 }, to: { x: 9, y: 1 }, color: '#3b82f6', strokeWidth: 2 } as LineElement,
        { type: 'curve', points: [{ x: 1, y: 1 }, { x: 4, y: 2 }, { x: 6, y: 4 }, { x: 7, y: 7 }, { x: 7.2, y: 9 }], smooth: true, stroke: '#ef4444', strokeWidth: 2 } as CurveElement,
        { type: 'text', position: { x: 9.5, y: 1.5 }, content: 'AD', fontSize: 11, color: '#3b82f6' } as TextElement,
        { type: 'text', position: { x: 7.8, y: 9 }, content: 'AS', fontSize: 11, color: '#ef4444' } as TextElement,
        { type: 'point', position: { x: 5.5, y: 3, label: 'E', labelPosition: 'top-right' } } as PointElement,
      ],
    },
  },
  {
    name: 'Phillips Curve',
    category: 'Macroeconomics',
    subject: 'Economics',
    spec: {
      elements: [
        { type: 'axes', xMin: 0, xMax: 10, yMin: 0, yMax: 10, showNumbers: false, xLabel: 'Unemployment', yLabel: 'Inflation' } as AxesElement,
        { type: 'curve', points: [{ x: 1, y: 9 }, { x: 2, y: 6 }, { x: 4, y: 3 }, { x: 7, y: 2 }, { x: 9, y: 1.5 }], smooth: true, stroke: '#8b5cf6', strokeWidth: 2 } as CurveElement,
        { type: 'text', position: { x: 5, y: 5 }, content: 'Short-run Phillips Curve', fontSize: 10 } as TextElement,
      ],
    },
  },
  {
    name: 'Long-Run Average Cost (LRAC)',
    category: 'Microeconomics',
    subject: 'Economics',
    spec: {
      elements: [
        { type: 'axes', xMin: 0, xMax: 12, yMin: 0, yMax: 10, showNumbers: false, xLabel: 'Output', yLabel: 'Cost' } as AxesElement,
        // Multiple short-run curves
        { type: 'curve', points: [{ x: 1, y: 7 }, { x: 2, y: 4 }, { x: 3, y: 3 }, { x: 4, y: 4 }, { x: 5, y: 6 }], smooth: true, stroke: '#94a3b8', strokeWidth: 1, style: 'dashed' } as CurveElement,
        { type: 'curve', points: [{ x: 3, y: 6 }, { x: 4, y: 3.5 }, { x: 5, y: 2.8 }, { x: 6, y: 3.5 }, { x: 7, y: 5 }], smooth: true, stroke: '#94a3b8', strokeWidth: 1, style: 'dashed' } as CurveElement,
        { type: 'curve', points: [{ x: 5, y: 5.5 }, { x: 6, y: 3 }, { x: 7, y: 2.5 }, { x: 8, y: 3 }, { x: 9, y: 4.5 }], smooth: true, stroke: '#94a3b8', strokeWidth: 1, style: 'dashed' } as CurveElement,
        { type: 'curve', points: [{ x: 7, y: 4.5 }, { x: 8, y: 2.8 }, { x: 9, y: 2.3 }, { x: 10, y: 2.8 }, { x: 11, y: 4 }], smooth: true, stroke: '#94a3b8', strokeWidth: 1, style: 'dashed' } as CurveElement,
        // LRAC envelope curve
        { type: 'curve', points: [{ x: 1, y: 7 }, { x: 3, y: 3 }, { x: 5, y: 2.8 }, { x: 7, y: 2.5 }, { x: 9, y: 2.3 }, { x: 11, y: 3.5 }], smooth: true, stroke: '#3b82f6', strokeWidth: 3 } as CurveElement,
        { type: 'text', position: { x: 2, y: 8.5 }, content: 'Economies of Scale', fontSize: 9, color: '#22c55e' } as TextElement,
        { type: 'text', position: { x: 9.5, y: 4 }, content: 'Diseconomies of Scale', fontSize: 9, color: '#ef4444' } as TextElement,
        { type: 'text', position: { x: 11.5, y: 2.3 }, content: 'LRAC', fontSize: 11, color: '#3b82f6' } as TextElement,
        { type: 'text', position: { x: 5.5, y: 6 }, content: 'SRAC', fontSize: 10, color: '#94a3b8' } as TextElement,
      ],
      width: 350,
      height: 280,
    },
  },
  {
    name: 'Profit Maximization (MR = MC)',
    category: 'Microeconomics', 
    subject: 'Economics',
    spec: {
      elements: [
        { type: 'axes', xMin: 0, xMax: 10, yMin: 0, yMax: 10, showNumbers: false, xLabel: 'Quantity', yLabel: 'Price/Cost' } as AxesElement,
        // Demand curve
        { type: 'line', from: { x: 1, y: 9 }, to: { x: 9, y: 1 }, color: '#3b82f6', strokeWidth: 2 } as LineElement,
        // Marginal Revenue (MR)
        { type: 'line', from: { x: 1, y: 9 }, to: { x: 5, y: 1 }, color: '#22c55e', strokeWidth: 2 } as LineElement,
        // Marginal Cost (MC)
        { type: 'curve', points: [{ x: 1, y: 2 }, { x: 3, y: 1.5 }, { x: 5, y: 3 }, { x: 7, y: 6 }, { x: 9, y: 9 }], smooth: true, stroke: '#ef4444', strokeWidth: 2 } as CurveElement,
        // Average Total Cost (ATC)
        { type: 'curve', points: [{ x: 1, y: 6 }, { x: 3, y: 3 }, { x: 5, y: 2.5 }, { x: 7, y: 4 }, { x: 9, y: 7 }], smooth: true, stroke: '#8b5cf6', strokeWidth: 2 } as CurveElement,
        // Profit maximizing point
        { type: 'point', position: { x: 3.5, y: 2.3, label: 'MR=MC', labelPosition: 'top-right' } } as PointElement,
        // Vertical lines for quantity
        { type: 'line', from: { x: 3.5, y: 0 }, to: { x: 3.5, y: 2.3 }, style: 'dashed' } as LineElement,
        { type: 'line', from: { x: 3.5, y: 2.3 }, to: { x: 3.5, y: 6.5 }, style: 'dashed' } as LineElement,
        // Profit rectangle (shaded area)
        { type: 'polygon', vertices: [{ x: 0.5, y: 2.8 }, { x: 3.5, y: 2.8 }, { x: 3.5, y: 6.5 }, { x: 0.5, y: 6.5 }], fill: 'rgba(34, 197, 94, 0.2)' } as PolygonElement,
        { type: 'text', position: { x: 9.5, y: 1.5 }, content: 'D', fontSize: 11, color: '#3b82f6' } as TextElement,
        { type: 'text', position: { x: 5.5, y: 1.5 }, content: 'MR', fontSize: 11, color: '#22c55e' } as TextElement,
        { type: 'text', position: { x: 9.5, y: 9 }, content: 'MC', fontSize: 11, color: '#ef4444' } as TextElement,
        { type: 'text', position: { x: 9.5, y: 7 }, content: 'ATC', fontSize: 11, color: '#8b5cf6' } as TextElement,
        { type: 'text', position: { x: 2, y: 4.5 }, content: 'Profit', fontSize: 10, color: '#22c55e' } as TextElement,
      ],
      width: 320,
      height: 280,
    },
  },
  {
    name: 'Perfect Competition',
    category: 'Market Structures',
    subject: 'Economics',
    spec: {
      elements: [
        { type: 'axes', xMin: 0, xMax: 10, yMin: 0, yMax: 10, showNumbers: false, xLabel: 'Quantity', yLabel: 'Price' } as AxesElement,
        // Perfectly elastic demand (horizontal line)
        { type: 'line', from: { x: 1, y: 6 }, to: { x: 9, y: 6 }, color: '#3b82f6', strokeWidth: 2 } as LineElement,
        // Marginal Cost curve
        { type: 'curve', points: [{ x: 1, y: 3 }, { x: 3, y: 2 }, { x: 5, y: 4 }, { x: 7, y: 7 }, { x: 9, y: 9 }], smooth: true, stroke: '#ef4444', strokeWidth: 2 } as CurveElement,
        // Average Total Cost
        { type: 'curve', points: [{ x: 1, y: 8 }, { x: 3, y: 4 }, { x: 5, y: 3.5 }, { x: 7, y: 5 }, { x: 9, y: 7.5 }], smooth: true, stroke: '#8b5cf6', strokeWidth: 2 } as CurveElement,
        // Equilibrium point
        { type: 'point', position: { x: 4.5, y: 6, label: 'P=MR=MC', labelPosition: 'top' } } as PointElement,
        // Vertical line at equilibrium quantity
        { type: 'line', from: { x: 4.5, y: 0 }, to: { x: 4.5, y: 6 }, style: 'dashed' } as LineElement,
        { type: 'text', position: { x: 9.5, y: 6 }, content: 'P=MR=AR=D', fontSize: 10, color: '#3b82f6' } as TextElement,
        { type: 'text', position: { x: 9.5, y: 9 }, content: 'MC', fontSize: 11, color: '#ef4444' } as TextElement,
        { type: 'text', position: { x: 9.5, y: 7.5 }, content: 'ATC', fontSize: 11, color: '#8b5cf6' } as TextElement,
        { type: 'text', position: { x: 4.5, y: -0.8 }, content: 'Q*', fontSize: 10 } as TextElement,
      ],
      width: 320,
      height: 280,
    },
  },
  {
    name: 'Monopoly Market',
    category: 'Market Structures',
    subject: 'Economics',
    spec: {
      elements: [
        { type: 'axes', xMin: 0, xMax: 10, yMin: 0, yMax: 10, showNumbers: false, xLabel: 'Quantity', yLabel: 'Price' } as AxesElement,
        // Downward sloping demand
        { type: 'line', from: { x: 1, y: 9 }, to: { x: 9, y: 1 }, color: '#3b82f6', strokeWidth: 2 } as LineElement,
        // Marginal Revenue (steeper than demand)
        { type: 'line', from: { x: 1, y: 9 }, to: { x: 5, y: 1 }, color: '#22c55e', strokeWidth: 2 } as LineElement,
        // Marginal Cost
        { type: 'curve', points: [{ x: 1, y: 2 }, { x: 3, y: 1.5 }, { x: 5, y: 3 }, { x: 7, y: 6 }, { x: 9, y: 9 }], smooth: true, stroke: '#ef4444', strokeWidth: 2 } as CurveElement,
        // Average Total Cost
        { type: 'curve', points: [{ x: 1, y: 7 }, { x: 3, y: 3.5 }, { x: 5, y: 3 }, { x: 7, y: 4 }, { x: 9, y: 6 }], smooth: true, stroke: '#8b5cf6', strokeWidth: 2 } as CurveElement,
        // Profit maximizing point (MR = MC)
        { type: 'point', position: { x: 3.5, y: 2.3, label: 'MR=MC', labelPosition: 'bottom-right' } } as PointElement,
        // Monopoly price and quantity
        { type: 'line', from: { x: 3.5, y: 0 }, to: { x: 3.5, y: 6.5 }, style: 'dashed' } as LineElement,
        { type: 'line', from: { x: 0, y: 6.5 }, to: { x: 3.5, y: 6.5 }, style: 'dashed' } as LineElement,
        { type: 'point', position: { x: 3.5, y: 6.5, label: 'Pm', labelPosition: 'left' } } as PointElement,
        // Deadweight loss triangle
        { type: 'polygon', vertices: [{ x: 3.5, y: 2.3 }, { x: 5.5, y: 4.5 }, { x: 3.5, y: 6.5 }], fill: 'rgba(239, 68, 68, 0.3)' } as PolygonElement,
        { type: 'text', position: { x: 9.5, y: 1.5 }, content: 'D', fontSize: 11, color: '#3b82f6' } as TextElement,
        { type: 'text', position: { x: 5.5, y: 1.5 }, content: 'MR', fontSize: 11, color: '#22c55e' } as TextElement,
        { type: 'text', position: { x: 9.5, y: 9 }, content: 'MC', fontSize: 11, color: '#ef4444' } as TextElement,
        { type: 'text', position: { x: 9.5, y: 6 }, content: 'ATC', fontSize: 11, color: '#8b5cf6' } as TextElement,
        { type: 'text', position: { x: 4, y: 4.5 }, content: 'DWL', fontSize: 9, color: '#ef4444' } as TextElement,
        { type: 'text', position: { x: 3.5, y: -0.8 }, content: 'Qm', fontSize: 10 } as TextElement,
      ],
      width: 320,
      height: 280,
    },
  },
  {
    name: 'Monopolistic Competition',
    category: 'Market Structures',
    subject: 'Economics',
    spec: {
      elements: [
        { type: 'axes', xMin: 0, xMax: 10, yMin: 0, yMax: 10, showNumbers: false, xLabel: 'Quantity', yLabel: 'Price' } as AxesElement,
        // Downward sloping demand (less steep than monopoly)
        { type: 'curve', points: [{ x: 1, y: 8 }, { x: 3, y: 7 }, { x: 5, y: 5.5 }, { x: 7, y: 3.5 }, { x: 9, y: 2 }], smooth: true, stroke: '#3b82f6', strokeWidth: 2 } as CurveElement,
        // Marginal Revenue
        { type: 'curve', points: [{ x: 1, y: 8 }, { x: 3, y: 5 }, { x: 5, y: 2.5 }, { x: 7, y: 0.5 }], smooth: true, stroke: '#22c55e', strokeWidth: 2 } as CurveElement,
        // Marginal Cost
        { type: 'curve', points: [{ x: 1, y: 2.5 }, { x: 3, y: 2 }, { x: 5, y: 3.5 }, { x: 7, y: 6 }, { x: 9, y: 8.5 }], smooth: true, stroke: '#ef4444', strokeWidth: 2 } as CurveElement,
        // Average Total Cost (tangent to demand in long run)
        { type: 'curve', points: [{ x: 1, y: 7 }, { x: 3, y: 4.5 }, { x: 4.2, y: 4.2 }, { x: 6, y: 5 }, { x: 8, y: 7 }], smooth: true, stroke: '#8b5cf6', strokeWidth: 2 } as CurveElement,
        // Short-run equilibrium
        { type: 'point', position: { x: 3.5, y: 2.8, label: 'MR=MC', labelPosition: 'bottom-right' } } as PointElement,
        // Long-run equilibrium (zero economic profit)
        { type: 'point', position: { x: 4.2, y: 4.2, label: 'P=ATC', labelPosition: 'top-left' } } as PointElement,
        // Vertical lines
        { type: 'line', from: { x: 3.5, y: 0 }, to: { x: 3.5, y: 6.5 }, style: 'dashed' } as LineElement,
        { type: 'line', from: { x: 4.2, y: 0 }, to: { x: 4.2, y: 4.2 }, style: 'dashed' } as LineElement,
        { type: 'text', position: { x: 9.5, y: 2.5 }, content: 'D', fontSize: 11, color: '#3b82f6' } as TextElement,
        { type: 'text', position: { x: 7.5, y: 1 }, content: 'MR', fontSize: 11, color: '#22c55e' } as TextElement,
        { type: 'text', position: { x: 9.5, y: 8.5 }, content: 'MC', fontSize: 11, color: '#ef4444' } as TextElement,
        { type: 'text', position: { x: 8.5, y: 7 }, content: 'ATC', fontSize: 11, color: '#8b5cf6' } as TextElement,
        { type: 'text', position: { x: 3.5, y: -0.8 }, content: 'Q(SR)', fontSize: 9 } as TextElement,
        { type: 'text', position: { x: 4.2, y: -0.8 }, content: 'Q(LR)', fontSize: 9 } as TextElement,
      ],
      width: 320,
      height: 280,
    },
  },
  {
    name: 'Oligopoly (Kinked Demand)',
    category: 'Market Structures',
    subject: 'Economics',
    spec: {
      elements: [
        { type: 'axes', xMin: 0, xMax: 10, yMin: 0, yMax: 10, showNumbers: false, xLabel: 'Quantity', yLabel: 'Price' } as AxesElement,
        // Kinked demand curve (steep below, flat above)
        { type: 'line', from: { x: 1, y: 8.5 }, to: { x: 5, y: 5 }, color: '#3b82f6', strokeWidth: 2 } as LineElement,
        { type: 'line', from: { x: 5, y: 5 }, to: { x: 9, y: 2 }, color: '#3b82f6', strokeWidth: 2 } as LineElement,
        // Discontinuous MR curve
        { type: 'line', from: { x: 1, y: 8.5 }, to: { x: 3, y: 2.5 }, color: '#22c55e', strokeWidth: 2 } as LineElement,
        { type: 'line', from: { x: 5, y: 1 }, to: { x: 9, y: 2 }, color: '#22c55e', strokeWidth: 2 } as LineElement,
        // Gap in MR curve
        { type: 'line', from: { x: 3, y: 2.5 }, to: { x: 3, y: 4.5 }, color: '#22c55e', strokeWidth: 3, style: 'dashed' } as LineElement,
        // Marginal Cost
        { type: 'curve', points: [{ x: 1, y: 1.5 }, { x: 3, y: 3.5 }, { x: 5, y: 4 }, { x: 7, y: 5.5 }, { x: 9, y: 7.5 }], smooth: true, stroke: '#ef4444', strokeWidth: 2 } as CurveElement,
        // Kink point
        { type: 'point', position: { x: 5, y: 5, label: 'Kink', labelPosition: 'top-right' } } as PointElement,
        // Price level
        { type: 'line', from: { x: 0, y: 5 }, to: { x: 5, y: 5 }, style: 'dashed' } as LineElement,
        { type: 'line', from: { x: 5, y: 0 }, to: { x: 5, y: 5 }, style: 'dashed' } as LineElement,
        { type: 'text', position: { x: 9.5, y: 3 }, content: 'D', fontSize: 11, color: '#3b82f6' } as TextElement,
        { type: 'text', position: { x: 9.5, y: 2 }, content: 'MR', fontSize: 11, color: '#22c55e' } as TextElement,
        { type: 'text', position: { x: 9.5, y: 7.5 }, content: 'MC', fontSize: 11, color: '#ef4444' } as TextElement,
        { type: 'text', position: { x: 0.5, y: 8 }, content: 'Elastic', fontSize: 9 } as TextElement,
        { type: 'text', position: { x: 7, y: 1 }, content: 'Inelastic', fontSize: 9 } as TextElement,
        { type: 'text', position: { x: 5, y: -0.8 }, content: 'Q*', fontSize: 10 } as TextElement,
      ],
      width: 320,
      height: 280,
    },
  },
  {
    name: 'Short-Run vs Long-Run Cost',
    category: 'Microeconomics',
    subject: 'Economics',
    spec: {
      elements: [
        { type: 'axes', xMin: 0, xMax: 10, yMin: 0, yMax: 10, showNumbers: false, xLabel: 'Output', yLabel: 'Cost per Unit' } as AxesElement,
        // Short-run curves
        { type: 'curve', points: [{ x: 1, y: 8 }, { x: 3, y: 4 }, { x: 5, y: 3.5 }, { x: 7, y: 5 }, { x: 9, y: 8 }], smooth: true, stroke: '#ef4444', strokeWidth: 2 } as CurveElement,
        { type: 'curve', points: [{ x: 1, y: 6 }, { x: 3, y: 2 }, { x: 5, y: 1.5 }, { x: 7, y: 3 }, { x: 9, y: 6.5 }], smooth: true, stroke: '#f59e0b', strokeWidth: 2 } as CurveElement,
        { type: 'curve', points: [{ x: 1, y: 4 }, { x: 5, y: 4 }, { x: 9, y: 4 }], smooth: true, stroke: '#8b5cf6', strokeWidth: 2 } as CurveElement,
        // Long-run curve
        { type: 'curve', points: [{ x: 1, y: 7 }, { x: 3, y: 3.5 }, { x: 5, y: 2.5 }, { x: 7, y: 3 }, { x: 9, y: 5 }], smooth: true, stroke: '#22c55e', strokeWidth: 3 } as CurveElement,
        { type: 'text', position: { x: 9.5, y: 8 }, content: 'SRAC', fontSize: 10, color: '#ef4444' } as TextElement,
        { type: 'text', position: { x: 9.5, y: 6.5 }, content: 'SRMC', fontSize: 10, color: '#f59e0b' } as TextElement,
        { type: 'text', position: { x: 9.5, y: 4 }, content: 'AFC', fontSize: 10, color: '#8b5cf6' } as TextElement,
        { type: 'text', position: { x: 9.5, y: 5 }, content: 'LRAC', fontSize: 11, color: '#22c55e' } as TextElement,
        { type: 'text', position: { x: 2, y: 1 }, content: 'Short-run: Fixed factors', fontSize: 9 } as TextElement,
        { type: 'text', position: { x: 5.5, y: 1 }, content: 'Long-run: All factors variable', fontSize: 9 } as TextElement,
      ],
      width: 350,
      height: 280,
    },
  },
  {
    name: 'Consumer and Producer Surplus',
    category: 'Microeconomics',
    subject: 'Economics',
    spec: {
      elements: [
        { type: 'axes', xMin: 0, xMax: 10, yMin: 0, yMax: 10, showNumbers: false, xLabel: 'Quantity', yLabel: 'Price' } as AxesElement,
        // Supply and demand curves
        { type: 'line', from: { x: 1, y: 9 }, to: { x: 9, y: 1 }, color: '#3b82f6', strokeWidth: 2 } as LineElement,
        { type: 'line', from: { x: 1, y: 1 }, to: { x: 9, y: 9 }, color: '#ef4444', strokeWidth: 2 } as LineElement,
        // Equilibrium
        { type: 'point', position: { x: 5, y: 5, label: 'E', labelPosition: 'top-right' } } as PointElement,
        { type: 'line', from: { x: 5, y: 0 }, to: { x: 5, y: 5 }, style: 'dashed' } as LineElement,
        { type: 'line', from: { x: 0, y: 5 }, to: { x: 5, y: 5 }, style: 'dashed' } as LineElement,
        // Consumer surplus (triangle above equilibrium price)
        { type: 'polygon', vertices: [{ x: 1, y: 9 }, { x: 5, y: 5 }, { x: 1, y: 5 }], fill: 'rgba(34, 197, 94, 0.3)' } as PolygonElement,
        // Producer surplus (triangle below equilibrium price)
        { type: 'polygon', vertices: [{ x: 1, y: 1 }, { x: 5, y: 5 }, { x: 1, y: 5 }], fill: 'rgba(59, 130, 246, 0.3)' } as PolygonElement,
        { type: 'text', position: { x: 9.5, y: 1.5 }, content: 'D', fontSize: 11, color: '#3b82f6' } as TextElement,
        { type: 'text', position: { x: 9.5, y: 8.5 }, content: 'S', fontSize: 11, color: '#ef4444' } as TextElement,
        { type: 'text', position: { x: 2.5, y: 7 }, content: 'Consumer\\nSurplus', fontSize: 9, color: '#22c55e' } as TextElement,
        { type: 'text', position: { x: 2.5, y: 3 }, content: 'Producer\\nSurplus', fontSize: 9, color: '#3b82f6' } as TextElement,
        { type: 'text', position: { x: 5, y: -0.8 }, content: 'Q*', fontSize: 10 } as TextElement,
        { type: 'text', position: { x: -0.8, y: 5 }, content: 'P*', fontSize: 10 } as TextElement,
      ],
      width: 320,
      height: 280,
    },
  },
  {
    name: 'Price Elasticity of Demand',
    category: 'Microeconomics',
    subject: 'Economics',
    spec: {
      elements: [
        { type: 'axes', xMin: 0, xMax: 10, yMin: 0, yMax: 10, showNumbers: false, xLabel: 'Quantity', yLabel: 'Price' } as AxesElement,
        // Elastic demand (flatter)
        { type: 'curve', points: [{ x: 1, y: 7 }, { x: 3, y: 6 }, { x: 5, y: 5 }, { x: 7, y: 4 }, { x: 9, y: 3 }], smooth: true, stroke: '#22c55e', strokeWidth: 2 } as CurveElement,
        // Inelastic demand (steeper)
        { type: 'curve', points: [{ x: 1, y: 9 }, { x: 2, y: 7 }, { x: 3, y: 5 }, { x: 4, y: 3 }, { x: 5, y: 1 }], smooth: true, stroke: '#ef4444', strokeWidth: 2 } as CurveElement,
        // Perfectly inelastic (vertical)
        { type: 'line', from: { x: 7, y: 1 }, to: { x: 7, y: 9 }, color: '#8b5cf6', strokeWidth: 2 } as LineElement,
        // Perfectly elastic (horizontal)
        { type: 'line', from: { x: 5, y: 7 }, to: { x: 9, y: 7 }, color: '#f59e0b', strokeWidth: 2 } as LineElement,
        { type: 'text', position: { x: 9.5, y: 3 }, content: 'Elastic\\n(PED > 1)', fontSize: 9, color: '#22c55e' } as TextElement,
        { type: 'text', position: { x: 5.5, y: 1.5 }, content: 'Inelastic\\n(PED < 1)', fontSize: 9, color: '#ef4444' } as TextElement,
        { type: 'text', position: { x: 7.5, y: 5 }, content: 'Perfectly\\nInelastic\\n(PED = 0)', fontSize: 8, color: '#8b5cf6' } as TextElement,
        { type: 'text', position: { x: 6, y: 8 }, content: 'Perfectly Elastic (PED = ∞)', fontSize: 8, color: '#f59e0b' } as TextElement,
      ],
      width: 320,
      height: 280,
    },
  },
  {
    name: 'Indifference Curves',
    category: 'Microeconomics',
    subject: 'Economics',
    spec: {
      elements: [
        { type: 'axes', xMin: 0, xMax: 10, yMin: 0, yMax: 10, showNumbers: false, xLabel: 'Good X', yLabel: 'Good Y' } as AxesElement,
        // Multiple indifference curves (higher utility as we move up-right)
        { type: 'curve', points: [{ x: 1, y: 8 }, { x: 2, y: 4.5 }, { x: 3, y: 3 }, { x: 4.5, y: 2 }, { x: 7, y: 1.2 }], smooth: true, stroke: '#3b82f6', strokeWidth: 2 } as CurveElement,
        { type: 'curve', points: [{ x: 1.5, y: 9 }, { x: 3, y: 5.5 }, { x: 4, y: 4 }, { x: 5.5, y: 3 }, { x: 8, y: 2 }], smooth: true, stroke: '#22c55e', strokeWidth: 2 } as CurveElement,
        { type: 'curve', points: [{ x: 2, y: 9.5 }, { x: 4, y: 6.5 }, { x: 5, y: 5 }, { x: 6.5, y: 4 }, { x: 9, y: 3 }], smooth: true, stroke: '#ef4444', strokeWidth: 2 } as CurveElement,
        // Budget constraint line
        { type: 'line', from: { x: 1, y: 9 }, to: { x: 9, y: 1 }, color: '#8b5cf6', strokeWidth: 2, style: 'dashed' } as LineElement,
        // Optimal consumption point (tangency)
        { type: 'point', position: { x: 5, y: 5, label: 'E', labelPosition: 'top-right' } } as PointElement,
        { type: 'text', position: { x: 7.5, y: 1.5 }, content: 'IC₁', fontSize: 10, color: '#3b82f6' } as TextElement,
        { type: 'text', position: { x: 8.5, y: 2.5 }, content: 'IC₂', fontSize: 10, color: '#22c55e' } as TextElement,
        { type: 'text', position: { x: 9.5, y: 3.5 }, content: 'IC₃', fontSize: 10, color: '#ef4444' } as TextElement,
        { type: 'text', position: { x: 8, y: 0.5 }, content: 'Budget Line', fontSize: 9, color: '#8b5cf6' } as TextElement,
        { type: 'text', position: { x: 1, y: 0.5 }, content: 'Higher utility →', fontSize: 8, color: '#6b7280' } as TextElement,
      ],
      width: 320,
      height: 280,
    },
  },
  {
    name: 'Laffer Curve',
    category: 'Macroeconomics',
    subject: 'Economics',
    spec: {
      elements: [
        { type: 'axes', xMin: 0, xMax: 10, yMin: 0, yMax: 10, showNumbers: false, xLabel: 'Tax Rate (%)', yLabel: 'Tax Revenue' } as AxesElement,
        // Inverted U-shaped Laffer curve
        { type: 'curve', points: [{ x: 0, y: 0 }, { x: 2, y: 3 }, { x: 4, y: 6 }, { x: 5, y: 7 }, { x: 6, y: 6 }, { x: 8, y: 3 }, { x: 10, y: 0 }], smooth: true, stroke: '#3b82f6', strokeWidth: 3 } as CurveElement,
        // Optimal tax rate point
        { type: 'point', position: { x: 5, y: 7, label: 'Optimal Rate', labelPosition: 'top' } } as PointElement,
        { type: 'line', from: { x: 5, y: 0 }, to: { x: 5, y: 7 }, style: 'dashed' } as LineElement,
        // Revenue-maximizing regions
        { type: 'text', position: { x: 2.5, y: 8 }, content: 'Normal Range\\n(↑ tax → ↑ revenue)', fontSize: 8, color: '#22c55e' } as TextElement,
        { type: 'text', position: { x: 7.5, y: 8 }, content: 'Prohibitive Range\\n(↑ tax → ↓ revenue)', fontSize: 8, color: '#ef4444' } as TextElement,
        { type: 'text', position: { x: 5, y: -0.8 }, content: 't*', fontSize: 10 } as TextElement,
        { type: 'text', position: { x: 0.5, y: 0.5 }, content: '0%', fontSize: 8 } as TextElement,
        { type: 'text', position: { x: 9, y: 0.5 }, content: '100%', fontSize: 8 } as TextElement,
      ],
      width: 320,
      height: 280,
    },
  },
  {
    name: 'IS-LM Model',
    category: 'Macroeconomics',
    subject: 'Economics',
    spec: {
      elements: [
        { type: 'axes', xMin: 0, xMax: 10, yMin: 0, yMax: 10, showNumbers: false, xLabel: 'Income (Y)', yLabel: 'Interest Rate (r)' } as AxesElement,
        // IS curve (downward sloping - investment/saving)
        { type: 'curve', points: [{ x: 1, y: 8 }, { x: 3, y: 6 }, { x: 5, y: 4.5 }, { x: 7, y: 3 }, { x: 9, y: 1.5 }], smooth: true, stroke: '#ef4444', strokeWidth: 2 } as CurveElement,
        // LM curve (upward sloping - liquidity/money)
        { type: 'curve', points: [{ x: 1, y: 1 }, { x: 3, y: 2.5 }, { x: 5, y: 4.5 }, { x: 7, y: 6.5 }, { x: 9, y: 8.5 }], smooth: true, stroke: '#3b82f6', strokeWidth: 2 } as CurveElement,
        // Equilibrium point
        { type: 'point', position: { x: 5, y: 4.5, label: 'E', labelPosition: 'top-right' } } as PointElement,
        { type: 'line', from: { x: 5, y: 0 }, to: { x: 5, y: 4.5 }, style: 'dashed' } as LineElement,
        { type: 'line', from: { x: 0, y: 4.5 }, to: { x: 5, y: 4.5 }, style: 'dashed' } as LineElement,
        // Shifted curves (policy effects)
        { type: 'curve', points: [{ x: 2, y: 8 }, { x: 4, y: 6 }, { x: 6, y: 4.5 }, { x: 8, y: 3 }, { x: 9.5, y: 2 }], smooth: true, stroke: '#ef4444', strokeWidth: 1, style: 'dashed' } as CurveElement,
        { type: 'text', position: { x: 9.5, y: 2 }, content: 'IS', fontSize: 11, color: '#ef4444' } as TextElement,
        { type: 'text', position: { x: 9.5, y: 8.5 }, content: 'LM', fontSize: 11, color: '#3b82f6' } as TextElement,
        { type: 'text', position: { x: 9.5, y: 1.5 }, content: 'IS\'', fontSize: 10, color: '#ef4444' } as TextElement,
        { type: 'text', position: { x: 5, y: -0.8 }, content: 'Y*', fontSize: 10 } as TextElement,
        { type: 'text', position: { x: -0.8, y: 4.5 }, content: 'r*', fontSize: 10 } as TextElement,
        { type: 'text', position: { x: 1, y: 9 }, content: 'Goods Market Equilibrium + Money Market Equilibrium', fontSize: 8, color: '#6b7280' } as TextElement,
      ],
      width: 350,
      height: 280,
    },
  },
  {
    name: 'Economic Growth (Solow Model)',
    category: 'Macroeconomics',
    subject: 'Economics',
    spec: {
      elements: [
        { type: 'axes', xMin: 0, xMax: 10, yMin: 0, yMax: 10, showNumbers: false, xLabel: 'Capital per Worker (k)', yLabel: 'Output per Worker (y)' } as AxesElement,
        // Production function (concave)
        { type: 'curve', points: [{ x: 0, y: 0 }, { x: 2, y: 3 }, { x: 4, y: 5 }, { x: 6, y: 6.5 }, { x: 8, y: 7.5 }, { x: 10, y: 8 }], smooth: true, stroke: '#3b82f6', strokeWidth: 2 } as CurveElement,
        // Saving/investment function
        { type: 'curve', points: [{ x: 0, y: 0 }, { x: 2, y: 1.5 }, { x: 4, y: 2.5 }, { x: 6, y: 3.25 }, { x: 8, y: 3.75 }, { x: 10, y: 4 }], smooth: true, stroke: '#22c55e', strokeWidth: 2 } as CurveElement,
        // Depreciation line
        { type: 'line', from: { x: 0, y: 0 }, to: { x: 10, y: 5 }, color: '#ef4444', strokeWidth: 2 } as LineElement,
        // Steady state equilibrium
        { type: 'point', position: { x: 6, y: 3.25, label: 'k*', labelPosition: 'top' } } as PointElement,
        { type: 'line', from: { x: 6, y: 0 }, to: { x: 6, y: 3.25 }, style: 'dashed' } as LineElement,
        { type: 'text', position: { x: 10.5, y: 8 }, content: 'y = f(k)', fontSize: 10, color: '#3b82f6' } as TextElement,
        { type: 'text', position: { x: 10.5, y: 4 }, content: 'sy = sf(k)', fontSize: 10, color: '#22c55e' } as TextElement,
        { type: 'text', position: { x: 10.5, y: 5 }, content: 'δk', fontSize: 10, color: '#ef4444' } as TextElement,
        { type: 'text', position: { x: 6, y: -0.8 }, content: 'k*', fontSize: 10 } as TextElement,
        { type: 'text', position: { x: 1, y: 9 }, content: 'Steady State: sy = δk', fontSize: 9, color: '#6b7280' } as TextElement,
      ],
      width: 350,
      height: 280,
    },
  },
  {
    name: 'Game Theory (Prisoner\'s Dilemma)',
    category: 'Market Structures',
    subject: 'Economics',
    spec: {
      elements: [
        { type: 'axes', xMin: 0, xMax: 10, yMin: 0, yMax: 8, showNumbers: false, xLabel: '', yLabel: '' } as AxesElement,
        // Grid for payoff matrix
        { type: 'rectangle', topLeft: { x: 3, y: 3 }, width: 4, height: 3, fill: 'none', stroke: '#374151' } as RectangleElement,
        { type: 'line', from: { x: 5, y: 3 }, to: { x: 5, y: 6 }, stroke: '#374151' } as LineElement,
        { type: 'line', from: { x: 3, y: 4.5 }, to: { x: 7, y: 4.5 }, stroke: '#374151' } as LineElement,
        // Player labels
        { type: 'text', position: { x: 1.5, y: 5 }, content: 'Player A', fontSize: 11, fontWeight: 'bold' } as TextElement,
        { type: 'text', position: { x: 5, y: 2 }, content: 'Player B', fontSize: 11, fontWeight: 'bold' } as TextElement,
        // Strategy labels
        { type: 'text', position: { x: 2.5, y: 4 }, content: 'Confess', fontSize: 9 } as TextElement,
        { type: 'text', position: { x: 2.3, y: 5.5 }, content: 'Don\'t Confess', fontSize: 9 } as TextElement,
        { type: 'text', position: { x: 4, y: 2.5 }, content: 'Confess', fontSize: 9 } as TextElement,
        { type: 'text', position: { x: 5.7, y: 2.5 }, content: 'Don\'t Confess', fontSize: 9 } as TextElement,
        // Payoffs (A, B)
        { type: 'text', position: { x: 4, y: 4 }, content: '(-5, -5)', fontSize: 9, color: '#ef4444' } as TextElement,
        { type: 'text', position: { x: 6, y: 4 }, content: '(0, -10)', fontSize: 9 } as TextElement,
        { type: 'text', position: { x: 4, y: 5.5 }, content: '(-10, 0)', fontSize: 9 } as TextElement,
        { type: 'text', position: { x: 6, y: 5.5 }, content: '(-1, -1)', fontSize: 9, color: '#22c55e' } as TextElement,
        // Nash equilibrium indicator
        { type: 'text', position: { x: 4, y: 3.5 }, content: 'Nash\\nEquilibrium', fontSize: 7, color: '#ef4444' } as TextElement,
        { type: 'text', position: { x: 5.7, y: 6.2 }, content: 'Pareto\\nOptimal', fontSize: 7, color: '#22c55e' } as TextElement,
        { type: 'text', position: { x: 5, y: 0.8 }, content: 'Dominant Strategy: Confess for both players', fontSize: 9, color: '#6b7280' } as TextElement,
      ],
      width: 320,
      height: 220,
    },
  },

  // ============================================
  // BUSINESS - FINANCE
  // ============================================
  {
    name: 'Break-Even Chart',
    category: 'Finance',
    subject: 'Business',
    spec: {
      elements: [
        { type: 'axes', xMin: 0, xMax: 10, yMin: 0, yMax: 10, showNumbers: false, xLabel: 'Output', yLabel: '£' } as AxesElement,
        { type: 'line', from: { x: 0.5, y: 2 }, to: { x: 9, y: 2 }, color: '#f59e0b', strokeWidth: 2 } as LineElement,
        { type: 'line', from: { x: 0.5, y: 2 }, to: { x: 9, y: 7 }, color: '#ef4444', strokeWidth: 2 } as LineElement,
        { type: 'line', from: { x: 0.5, y: 0.5 }, to: { x: 9, y: 9 }, color: '#22c55e', strokeWidth: 2 } as LineElement,
        { type: 'point', position: { x: 4.5, y: 4.5, label: 'BEP', labelPosition: 'top-right' } } as PointElement,
        { type: 'text', position: { x: 9.5, y: 2 }, content: 'FC', fontSize: 10, color: '#f59e0b' } as TextElement,
        { type: 'text', position: { x: 9.5, y: 7 }, content: 'TC', fontSize: 10, color: '#ef4444' } as TextElement,
        { type: 'text', position: { x: 9.5, y: 9 }, content: 'TR', fontSize: 10, color: '#22c55e' } as TextElement,
      ],
    },
  },
  {
    name: 'Product Life Cycle',
    category: 'Marketing',
    subject: 'Business',
    spec: {
      elements: [
        { type: 'axes', xMin: 0, xMax: 12, yMin: 0, yMax: 8, showNumbers: false, xLabel: 'Time', yLabel: 'Sales' } as AxesElement,
        { type: 'curve', points: [
          { x: 0.5, y: 0.5 }, { x: 2, y: 1 }, { x: 4, y: 3 }, { x: 6, y: 6 }, { x: 8, y: 7 }, { x: 9, y: 6.5 }, { x: 10, y: 5 }, { x: 11, y: 3 }
        ], smooth: true, stroke: '#3b82f6', strokeWidth: 2 } as CurveElement,
        { type: 'text', position: { x: 1.5, y: 2 }, content: 'Development', fontSize: 9 } as TextElement,
        { type: 'text', position: { x: 3, y: 4 }, content: 'Introduction', fontSize: 9 } as TextElement,
        { type: 'text', position: { x: 5, y: 6.5 }, content: 'Growth', fontSize: 9 } as TextElement,
        { type: 'text', position: { x: 8, y: 7.5 }, content: 'Maturity', fontSize: 9 } as TextElement,
        { type: 'text', position: { x: 10.5, y: 4 }, content: 'Decline', fontSize: 9 } as TextElement,
      ],
    },
  },
  {
    name: 'Boston Matrix',
    category: 'Marketing',
    subject: 'Business',
    spec: {
      elements: [
        // Hidden axes to define bounds
        { type: 'axes', xMin: -2, xMax: 12, yMin: -1, yMax: 12, showNumbers: false, xLabel: '', yLabel: '' } as AxesElement,
        // Quadrant boxes using polygons (rectangles don't work well with Y-flip)
        { type: 'polygon', vertices: [{ x: 1, y: 1 }, { x: 5, y: 1 }, { x: 5, y: 5 }, { x: 1, y: 5 }], fill: 'rgba(239, 68, 68, 0.2)', stroke: 'rgba(239, 68, 68, 0.4)' } as PolygonElement,
        { type: 'polygon', vertices: [{ x: 5, y: 1 }, { x: 9, y: 1 }, { x: 9, y: 5 }, { x: 5, y: 5 }], fill: 'rgba(245, 158, 11, 0.2)', stroke: 'rgba(245, 158, 11, 0.4)' } as PolygonElement,
        { type: 'polygon', vertices: [{ x: 1, y: 5 }, { x: 5, y: 5 }, { x: 5, y: 9 }, { x: 1, y: 9 }], fill: 'rgba(34, 197, 94, 0.2)', stroke: 'rgba(34, 197, 94, 0.4)' } as PolygonElement,
        { type: 'polygon', vertices: [{ x: 5, y: 5 }, { x: 9, y: 5 }, { x: 9, y: 9 }, { x: 5, y: 9 }], fill: 'rgba(59, 130, 246, 0.2)', stroke: 'rgba(59, 130, 246, 0.4)' } as PolygonElement,
        // Quadrant labels
        { type: 'text', position: { x: 3, y: 3 }, content: 'Dog', fontSize: 12, fontWeight: 'bold' } as TextElement,
        { type: 'text', position: { x: 7, y: 3 }, content: '?', fontSize: 14, fontWeight: 'bold' } as TextElement,
        { type: 'text', position: { x: 3, y: 7 }, content: 'Cash Cow', fontSize: 10, fontWeight: 'bold' } as TextElement,
        { type: 'text', position: { x: 7, y: 7 }, content: 'Star', fontSize: 12, fontWeight: 'bold' } as TextElement,
        // Axis labels
        { type: 'text', position: { x: 5, y: 10.5 }, content: 'Relative Market Share', fontSize: 9 } as TextElement,
        { type: 'text', position: { x: -1, y: 5 }, content: 'Growth', fontSize: 9 } as TextElement,
        // Arrows for axes
        { type: 'arrow', from: { x: 0.5, y: 1 }, to: { x: 0.5, y: 9 } } as ArrowElement,
        { type: 'arrow', from: { x: 1, y: 0.5 }, to: { x: 9, y: 0.5 } } as ArrowElement,
        // High/Low labels
        { type: 'text', position: { x: -0.3, y: 2 }, content: 'Low', fontSize: 8 } as TextElement,
        { type: 'text', position: { x: -0.3, y: 8 }, content: 'High', fontSize: 8 } as TextElement,
        { type: 'text', position: { x: 2, y: -0.3 }, content: 'High', fontSize: 8 } as TextElement,
        { type: 'text', position: { x: 8, y: -0.3 }, content: 'Low', fontSize: 8 } as TextElement,
      ],
    },
  },

  // ============================================
  // GEOGRAPHY - PHYSICAL
  // ============================================
  {
    name: 'River Cross-Section',
    category: 'Physical',
    subject: 'Geography',
    spec: {
      elements: [
        { type: 'curve', points: [
          { x: 1, y: 3 }, { x: 3, y: 5 }, { x: 5, y: 6 }, { x: 7, y: 6 }, { x: 9, y: 5 }, { x: 11, y: 3 }
        ], smooth: true, stroke: '#8b5cf6', fill: 'rgba(59, 130, 246, 0.3)' } as CurveElement,
        { type: 'line', from: { x: 1, y: 3 }, to: { x: 11, y: 3 }, style: 'dashed' } as LineElement,
        { type: 'text', position: { x: 6, y: 7.5 }, content: 'Channel', fontSize: 11 } as TextElement,
        { type: 'text', position: { x: 2, y: 2 }, content: 'Bank', fontSize: 10 } as TextElement,
        { type: 'text', position: { x: 10, y: 2 }, content: 'Bank', fontSize: 10 } as TextElement,
        { type: 'line', from: { x: 6, y: 3 }, to: { x: 6, y: 6 }, style: 'dashed', color: '#ef4444' } as LineElement,
        { type: 'text', position: { x: 7, y: 4.5 }, content: 'Depth', fontSize: 9, color: '#ef4444' } as TextElement,
      ],
      width: 220,
      height: 140,
    },
  },
  {
    name: 'Population Pyramid',
    category: 'Human',
    subject: 'Geography',
    spec: {
      elements: [
        // Axes
        { type: 'line', from: { x: 6, y: 1 }, to: { x: 6, y: 10 } } as LineElement,
        // Male bars (left)
        { type: 'rectangle', topLeft: { x: 4, y: 8.5 }, width: 2, height: 0.8, fill: '#3b82f6' } as RectangleElement,
        { type: 'rectangle', topLeft: { x: 3.5, y: 7.5 }, width: 2.5, height: 0.8, fill: '#3b82f6' } as RectangleElement,
        { type: 'rectangle', topLeft: { x: 3, y: 6.5 }, width: 3, height: 0.8, fill: '#3b82f6' } as RectangleElement,
        { type: 'rectangle', topLeft: { x: 2.5, y: 5.5 }, width: 3.5, height: 0.8, fill: '#3b82f6' } as RectangleElement,
        { type: 'rectangle', topLeft: { x: 2, y: 4.5 }, width: 4, height: 0.8, fill: '#3b82f6' } as RectangleElement,
        { type: 'rectangle', topLeft: { x: 1.5, y: 3.5 }, width: 4.5, height: 0.8, fill: '#3b82f6' } as RectangleElement,
        { type: 'rectangle', topLeft: { x: 2, y: 2.5 }, width: 4, height: 0.8, fill: '#3b82f6' } as RectangleElement,
        { type: 'rectangle', topLeft: { x: 3, y: 1.5 }, width: 3, height: 0.8, fill: '#3b82f6' } as RectangleElement,
        // Female bars (right)
        { type: 'rectangle', topLeft: { x: 6, y: 8.5 }, width: 2, height: 0.8, fill: '#ec4899' } as RectangleElement,
        { type: 'rectangle', topLeft: { x: 6, y: 7.5 }, width: 2.5, height: 0.8, fill: '#ec4899' } as RectangleElement,
        { type: 'rectangle', topLeft: { x: 6, y: 6.5 }, width: 3, height: 0.8, fill: '#ec4899' } as RectangleElement,
        { type: 'rectangle', topLeft: { x: 6, y: 5.5 }, width: 3.5, height: 0.8, fill: '#ec4899' } as RectangleElement,
        { type: 'rectangle', topLeft: { x: 6, y: 4.5 }, width: 4, height: 0.8, fill: '#ec4899' } as RectangleElement,
        { type: 'rectangle', topLeft: { x: 6, y: 3.5 }, width: 4.5, height: 0.8, fill: '#ec4899' } as RectangleElement,
        { type: 'rectangle', topLeft: { x: 6, y: 2.5 }, width: 4, height: 0.8, fill: '#ec4899' } as RectangleElement,
        { type: 'rectangle', topLeft: { x: 6, y: 1.5 }, width: 3, height: 0.8, fill: '#ec4899' } as RectangleElement,
        // Labels
        { type: 'text', position: { x: 2.5, y: 0.8 }, content: 'Male', fontSize: 10, color: '#3b82f6' } as TextElement,
        { type: 'text', position: { x: 9.5, y: 0.8 }, content: 'Female', fontSize: 10, color: '#ec4899' } as TextElement,
        { type: 'text', position: { x: 6, y: 10.8 }, content: 'Age', fontSize: 10 } as TextElement,
      ],
      width: 220,
      height: 200,
    },
  },
  {
    name: 'Climate Graph',
    category: 'Physical',
    subject: 'Geography',
    spec: {
      elements: [
        { type: 'axes', xMin: 0, xMax: 14, yMin: 0, yMax: 28, showNumbers: false, xLabel: '', yLabel: '' } as AxesElement,
        // Rainfall bars (using polygons - all 12 months, UK-style data)
        { type: 'polygon', vertices: [{ x: 0.6, y: 0 }, { x: 1.2, y: 0 }, { x: 1.2, y: 8 }, { x: 0.6, y: 8 }], fill: '#3b82f6' } as PolygonElement,
        { type: 'polygon', vertices: [{ x: 1.6, y: 0 }, { x: 2.2, y: 0 }, { x: 2.2, y: 6 }, { x: 1.6, y: 6 }], fill: '#3b82f6' } as PolygonElement,
        { type: 'polygon', vertices: [{ x: 2.6, y: 0 }, { x: 3.2, y: 0 }, { x: 3.2, y: 5 }, { x: 2.6, y: 5 }], fill: '#3b82f6' } as PolygonElement,
        { type: 'polygon', vertices: [{ x: 3.6, y: 0 }, { x: 4.2, y: 0 }, { x: 4.2, y: 5 }, { x: 3.6, y: 5 }], fill: '#3b82f6' } as PolygonElement,
        { type: 'polygon', vertices: [{ x: 4.6, y: 0 }, { x: 5.2, y: 0 }, { x: 5.2, y: 5 }, { x: 4.6, y: 5 }], fill: '#3b82f6' } as PolygonElement,
        { type: 'polygon', vertices: [{ x: 5.6, y: 0 }, { x: 6.2, y: 0 }, { x: 6.2, y: 5 }, { x: 5.6, y: 5 }], fill: '#3b82f6' } as PolygonElement,
        { type: 'polygon', vertices: [{ x: 6.6, y: 0 }, { x: 7.2, y: 0 }, { x: 7.2, y: 5 }, { x: 6.6, y: 5 }], fill: '#3b82f6' } as PolygonElement,
        { type: 'polygon', vertices: [{ x: 7.6, y: 0 }, { x: 8.2, y: 0 }, { x: 8.2, y: 6 }, { x: 7.6, y: 6 }], fill: '#3b82f6' } as PolygonElement,
        { type: 'polygon', vertices: [{ x: 8.6, y: 0 }, { x: 9.2, y: 0 }, { x: 9.2, y: 6 }, { x: 8.6, y: 6 }], fill: '#3b82f6' } as PolygonElement,
        { type: 'polygon', vertices: [{ x: 9.6, y: 0 }, { x: 10.2, y: 0 }, { x: 10.2, y: 8 }, { x: 9.6, y: 8 }], fill: '#3b82f6' } as PolygonElement,
        { type: 'polygon', vertices: [{ x: 10.6, y: 0 }, { x: 11.2, y: 0 }, { x: 11.2, y: 9 }, { x: 10.6, y: 9 }], fill: '#3b82f6' } as PolygonElement,
        { type: 'polygon', vertices: [{ x: 11.6, y: 0 }, { x: 12.2, y: 0 }, { x: 12.2, y: 9 }, { x: 11.6, y: 9 }], fill: '#3b82f6' } as PolygonElement,
        // Temperature line (red, UK-style: cold winter, mild summer)
        { type: 'curve', points: [
          { x: 0.9, y: 12 }, { x: 1.9, y: 12 }, { x: 2.9, y: 14 }, { x: 3.9, y: 16 }, { x: 4.9, y: 19 }, { x: 5.9, y: 22 },
          { x: 6.9, y: 24 }, { x: 7.9, y: 23 }, { x: 8.9, y: 20 }, { x: 9.9, y: 16 }, { x: 10.9, y: 13 }, { x: 11.9, y: 11 }
        ], smooth: true, stroke: '#ef4444', strokeWidth: 2 } as CurveElement,
        // Month labels
        { type: 'text', position: { x: 0.9, y: -1 }, content: 'J', fontSize: 8 } as TextElement,
        { type: 'text', position: { x: 1.9, y: -1 }, content: 'F', fontSize: 8 } as TextElement,
        { type: 'text', position: { x: 2.9, y: -1 }, content: 'M', fontSize: 8 } as TextElement,
        { type: 'text', position: { x: 3.9, y: -1 }, content: 'A', fontSize: 8 } as TextElement,
        { type: 'text', position: { x: 4.9, y: -1 }, content: 'M', fontSize: 8 } as TextElement,
        { type: 'text', position: { x: 5.9, y: -1 }, content: 'J', fontSize: 8 } as TextElement,
        { type: 'text', position: { x: 6.9, y: -1 }, content: 'J', fontSize: 8 } as TextElement,
        { type: 'text', position: { x: 7.9, y: -1 }, content: 'A', fontSize: 8 } as TextElement,
        { type: 'text', position: { x: 8.9, y: -1 }, content: 'S', fontSize: 8 } as TextElement,
        { type: 'text', position: { x: 9.9, y: -1 }, content: 'O', fontSize: 8 } as TextElement,
        { type: 'text', position: { x: 10.9, y: -1 }, content: 'N', fontSize: 8 } as TextElement,
        { type: 'text', position: { x: 11.9, y: -1 }, content: 'D', fontSize: 8 } as TextElement,
        // Legend
        { type: 'text', position: { x: 13.5, y: 22 }, content: '°C', fontSize: 9, color: '#ef4444' } as TextElement,
        { type: 'text', position: { x: 13.5, y: 6 }, content: 'mm', fontSize: 9, color: '#3b82f6' } as TextElement,
        // Y-axis labels
        { type: 'text', position: { x: -0.5, y: 24 }, content: '20', fontSize: 8 } as TextElement,
        { type: 'text', position: { x: -0.5, y: 14 }, content: '10', fontSize: 8 } as TextElement,
        { type: 'text', position: { x: -0.3, y: 4 }, content: '0', fontSize: 8 } as TextElement,
      ],
      width: 400,
      height: 300,
    },
  },

  // ============================================
  // COMPUTER SCIENCE - ALGORITHMS
  // ============================================
  {
    name: 'Flowchart - Decision',
    category: 'Algorithms',
    subject: 'Computer Science',
    spec: {
      elements: [
        // Hidden axes to define bounds
        { type: 'axes', xMin: 0, xMax: 16, yMin: 0, yMax: 12, showNumbers: false, xLabel: '', yLabel: '' } as AxesElement,
        // Start (rounded rectangle as polygon)
        { type: 'polygon', vertices: [{ x: 6, y: 9 }, { x: 10, y: 9 }, { x: 10, y: 10.5 }, { x: 6, y: 10.5 }], fill: 'rgba(34, 197, 94, 0.2)', stroke: '#22c55e' } as PolygonElement,
        { type: 'text', position: { x: 8, y: 9.75 }, content: 'Start', fontSize: 11 } as TextElement,
        { type: 'arrow', from: { x: 8, y: 9 }, to: { x: 8, y: 7.5 } } as ArrowElement,
        // Input (parallelogram)
        { type: 'polygon', vertices: [{ x: 6.5, y: 7.5 }, { x: 10, y: 7.5 }, { x: 9.5, y: 6 }, { x: 6, y: 6 }], fill: 'rgba(59, 130, 246, 0.2)', stroke: '#3b82f6' } as PolygonElement,
        { type: 'text', position: { x: 8, y: 6.75 }, content: 'Input x', fontSize: 11 } as TextElement,
        { type: 'arrow', from: { x: 8, y: 6 }, to: { x: 8, y: 4.5 } } as ArrowElement,
        // Decision (diamond)
        { type: 'polygon', vertices: [{ x: 8, y: 4.5 }, { x: 10, y: 3 }, { x: 8, y: 1.5 }, { x: 6, y: 3 }], fill: 'rgba(245, 158, 11, 0.2)', stroke: '#f59e0b' } as PolygonElement,
        { type: 'text', position: { x: 8, y: 3 }, content: 'x > 0?', fontSize: 11 } as TextElement,
        // Yes path (right)
        { type: 'arrow', from: { x: 10, y: 3 }, to: { x: 12, y: 3 } } as ArrowElement,
        { type: 'text', position: { x: 11, y: 3.5 }, content: 'Yes', fontSize: 9 } as TextElement,
        { type: 'polygon', vertices: [{ x: 12, y: 2.25 }, { x: 15, y: 2.25 }, { x: 15, y: 3.75 }, { x: 12, y: 3.75 }], fill: 'rgba(139, 92, 246, 0.2)', stroke: '#8b5cf6' } as PolygonElement,
        { type: 'text', position: { x: 13.5, y: 3 }, content: 'Print +ve', fontSize: 9 } as TextElement,
        // No path (left)
        { type: 'arrow', from: { x: 6, y: 3 }, to: { x: 4, y: 3 } } as ArrowElement,
        { type: 'text', position: { x: 5, y: 3.5 }, content: 'No', fontSize: 9 } as TextElement,
        { type: 'polygon', vertices: [{ x: 1, y: 2.25 }, { x: 4, y: 2.25 }, { x: 4, y: 3.75 }, { x: 1, y: 3.75 }], fill: 'rgba(139, 92, 246, 0.2)', stroke: '#8b5cf6' } as PolygonElement,
        { type: 'text', position: { x: 2.5, y: 3 }, content: 'Print -ve', fontSize: 9 } as TextElement,
      ],
    },
  },
  {
    name: 'Network Topology - Star',
    category: 'Networks',
    subject: 'Computer Science',
    spec: {
      elements: [
        // Central hub  
        { type: 'rectangle', topLeft: { x: 5, y: 4.5 }, width: 2, height: 2, fill: 'rgba(239, 68, 68, 0.3)', stroke: '#ef4444' } as RectangleElement,
        { type: 'text', position: { x: 6, y: 5.5 }, content: 'Hub', fontSize: 10, anchor: 'middle' } as TextElement,
        // Devices - PC1 (top)
        { type: 'rectangle', topLeft: { x: 5, y: 1 }, width: 2, height: 1.5 } as RectangleElement,
        { type: 'text', position: { x: 6, y: 1.75 }, content: 'PC1', fontSize: 9, anchor: 'middle' } as TextElement,
        { type: 'line', from: { x: 6, y: 2.5 }, to: { x: 6, y: 4.5 } } as LineElement,
        // PC2 (right)
        { type: 'rectangle', topLeft: { x: 9, y: 4.75 }, width: 2, height: 1.5 } as RectangleElement,
        { type: 'text', position: { x: 10, y: 5.5 }, content: 'PC2', fontSize: 9, anchor: 'middle' } as TextElement,
        { type: 'line', from: { x: 7, y: 5.5 }, to: { x: 9, y: 5.5 } } as LineElement,
        // PC3 (bottom)  
        { type: 'rectangle', topLeft: { x: 5, y: 8.5 }, width: 2, height: 1.5 } as RectangleElement,
        { type: 'text', position: { x: 6, y: 9.25 }, content: 'PC3', fontSize: 9, anchor: 'middle' } as TextElement,
        { type: 'line', from: { x: 6, y: 6.5 }, to: { x: 6, y: 8.5 } } as LineElement,
        // PC4 (left)
        { type: 'rectangle', topLeft: { x: 1, y: 4.75 }, width: 2, height: 1.5 } as RectangleElement,
        { type: 'text', position: { x: 2, y: 5.5 }, content: 'PC4', fontSize: 9, anchor: 'middle' } as TextElement,
        { type: 'line', from: { x: 3, y: 5.5 }, to: { x: 5, y: 5.5 } } as LineElement,
      ],
      width: 12,
      height: 11,
    },
  },

  // ============================================
  // PSYCHOLOGY
  // ============================================
  {
    name: 'Brain Regions (Simplified)',
    category: 'Biopsychology',
    subject: 'Psychology',
    spec: {
      elements: [
        { type: 'circle', center: { x: 6, y: 5 }, radius: 4, fill: 'rgba(236, 72, 153, 0.2)', stroke: '#ec4899' } as CircleElement,
        { type: 'line', from: { x: 6, y: 1 }, to: { x: 6, y: 9 }, style: 'dashed' } as LineElement,
        { type: 'text', position: { x: 4, y: 3 }, content: 'Frontal', fontSize: 10 } as TextElement,
        { type: 'text', position: { x: 8, y: 3 }, content: 'Parietal', fontSize: 10 } as TextElement,
        { type: 'text', position: { x: 4, y: 7 }, content: 'Temporal', fontSize: 10 } as TextElement,
        { type: 'text', position: { x: 8, y: 7 }, content: 'Occipital', fontSize: 10 } as TextElement,
        { type: 'text', position: { x: 3, y: 5 }, content: 'Left', fontSize: 9, color: '#6b7280' } as TextElement,
        { type: 'text', position: { x: 9, y: 5 }, content: 'Right', fontSize: 9, color: '#6b7280' } as TextElement,
      ],
      width: 200,
      height: 180,
      showNotAccurate: true,
    },
  },
  {
    name: 'Memory Model',
    category: 'Cognitive',
    subject: 'Psychology',
    spec: {
      elements: [
        // Sensory memory
        { type: 'rectangle', topLeft: { x: 1, y: 4 }, width: 2.5, height: 2, fill: 'rgba(59, 130, 246, 0.2)' } as RectangleElement,
        { type: 'text', position: { x: 2.25, y: 5 }, content: 'Sensory', fontSize: 10 } as TextElement,
        { type: 'arrow', from: { x: 3.5, y: 5 }, to: { x: 5, y: 5 } } as ArrowElement,
        // Short-term memory
        { type: 'rectangle', topLeft: { x: 5, y: 4 }, width: 2.5, height: 2, fill: 'rgba(34, 197, 94, 0.2)' } as RectangleElement,
        { type: 'text', position: { x: 6.25, y: 5 }, content: 'STM', fontSize: 10 } as TextElement,
        { type: 'arrow', from: { x: 7.5, y: 5 }, to: { x: 9, y: 5 } } as ArrowElement,
        // Long-term memory
        { type: 'rectangle', topLeft: { x: 9, y: 4 }, width: 2.5, height: 2, fill: 'rgba(239, 68, 68, 0.2)' } as RectangleElement,
        { type: 'text', position: { x: 10.25, y: 5 }, content: 'LTM', fontSize: 10 } as TextElement,
        // Rehearsal loop
        { type: 'curve', points: [{ x: 6.25, y: 4 }, { x: 6.25, y: 2.5 }, { x: 6.25, y: 4 }], stroke: '#22c55e' } as CurveElement,
        { type: 'text', position: { x: 6.25, y: 2 }, content: 'Rehearsal', fontSize: 9 } as TextElement,
        // Retrieval
        { type: 'curve', points: [{ x: 9.5, y: 6 }, { x: 7.75, y: 7.5 }, { x: 6, y: 6 }], stroke: '#ef4444', style: 'dashed' } as CurveElement,
        { type: 'text', position: { x: 7.75, y: 8 }, content: 'Retrieval', fontSize: 9 } as TextElement,
      ],
      width: 12,
      height: 9,
    },
  },
];

// Group diagrams by subject then category
const subjects = [...new Set(diagrams.map(d => d.subject))];

export default function TestDiagramsPage() {
  const [selectedSubject, setSelectedSubject] = useState<string | null>(null);
  const [failedDiagrams, setFailedDiagrams] = useState<Set<string>>(new Set());
  const [viewMode, setViewMode] = useState<'mobile' | 'desktop'>('mobile');
  const [mounted, setMounted] = useState(false);

  const filteredDiagrams = selectedSubject
    ? diagrams.filter(d => d.subject === selectedSubject)
    : diagrams;

  const categories = [...new Set(filteredDiagrams.map(d => d.category))];

  useEffect(() => {
    setMounted(true);
  }, []);

  const handleError = (name: string) => {
    setFailedDiagrams(prev => new Set([...prev, name]));
  };

  // Sizes match actual usage in QuestionCard and QuestionSlide
  const sizes = viewMode === 'mobile'
    ? { maxWidth: 320, maxHeight: 260, label: 'Mobile (320×260)' }
    : { maxWidth: 450, maxHeight: 350, label: 'Desktop (450×350)' };

  return (
    <div className="min-h-screen bg-gray-900 text-white p-8">
      <h1 className="text-3xl font-bold mb-2">Diagram Renderer Test Page</h1>
      <p className="text-gray-400 mb-4">
        Visual verification of all diagram types across all subjects. Total: {diagrams.length} diagrams
      </p>

      {/* View Mode Toggle */}
      <div className="mb-4 flex items-center gap-4">
        <span className="text-gray-400">Size:</span>
        <button
          onClick={() => setViewMode('mobile')}
          className={`px-4 py-2 rounded-lg ${viewMode === 'mobile' ? 'bg-green-600' : 'bg-gray-700 hover:bg-gray-600'}`}
        >
          📱 Mobile (320×260)
        </button>
        <button
          onClick={() => setViewMode('desktop')}
          className={`px-4 py-2 rounded-lg ${viewMode === 'desktop' ? 'bg-green-600' : 'bg-gray-700 hover:bg-gray-600'}`}
        >
          🖥️ Desktop (450×350)
        </button>
      </div>

      {/* Subject Filter */}
      <div className="mb-8 flex flex-wrap gap-2">
        <button
          onClick={() => setSelectedSubject(null)}
          className={`px-4 py-2 rounded-lg ${!selectedSubject ? 'bg-blue-600' : 'bg-gray-700 hover:bg-gray-600'}`}
        >
          All ({diagrams.length})
        </button>
        {subjects.map(subject => (
          <button
            key={subject}
            onClick={() => setSelectedSubject(subject)}
            className={`px-4 py-2 rounded-lg ${selectedSubject === subject ? 'bg-blue-600' : 'bg-gray-700 hover:bg-gray-600'}`}
          >
            {subject} ({diagrams.filter(d => d.subject === subject).length})
          </button>
        ))}
      </div>

      {/* Error Summary */}
      {failedDiagrams.size > 0 && (
        <div className="mb-8 p-4 bg-red-900/50 border border-red-500 rounded-lg">
          <h3 className="font-semibold text-red-400 mb-2">Failed Diagrams ({failedDiagrams.size})</h3>
          <ul className="text-sm text-red-300">
            {[...failedDiagrams].map(name => (
              <li key={name}>• {name}</li>
            ))}
          </ul>
        </div>
      )}

      {categories.map(category => (
        <div key={category} className="mb-12">
          <h2 className="text-2xl font-semibold mb-4 text-blue-400">{category}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredDiagrams
              .filter(d => d.category === category)
              .map((diagram, index) => (
                <div
                  key={`${category}-${index}`}
                  className={`bg-gray-800 rounded-xl p-4 border ${failedDiagrams.has(diagram.name) ? 'border-red-500' : 'border-gray-700'}`}
                >
                  <div className="flex justify-between items-start mb-3">
                    <h3 className="text-sm font-medium text-gray-300">
                      {diagram.name}
                    </h3>
                    <span className="text-xs px-2 py-1 bg-gray-700 rounded text-gray-400">
                      {diagram.subject}
                    </span>
                  </div>
                  <div className="bg-white rounded-lg p-4 flex items-center justify-center" style={{ minHeight: sizes.maxHeight + 40 }}>
                    <DiagramRenderer
                      spec={diagram.spec}
                      maxWidth={sizes.maxWidth}
                      maxHeight={sizes.maxHeight}
                    />
                  </div>
                </div>
              ))}
          </div>
        </div>
      ))}

      <div className="mt-12 p-6 bg-gray-800 rounded-xl border border-gray-700">
        <h2 className="text-xl font-semibold mb-4">Dark Mode Test</h2>
        <p className="text-gray-400 mb-4">Same diagrams with darkMode=true (first 6) - {sizes.label}</p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredDiagrams.slice(0, 6).map((diagram, index) => (
            <div
              key={`dark-${index}`}
              className="bg-gray-900 rounded-lg p-4 flex items-center justify-center"
              style={{ minHeight: sizes.maxHeight + 40 }}
            >
              <DiagramRenderer
                spec={diagram.spec}
                maxWidth={sizes.maxWidth}
                maxHeight={sizes.maxHeight}
                darkMode={true}
              />
            </div>
          ))}
        </div>
      </div>

      {/* Print Test Section */}
      <div className="mt-12 border-t pt-8">
        <h2 className="text-2xl font-bold text-center mb-6">Print Test</h2>
        <PrintTest />
      </div>

      <div className="mt-8 text-center text-gray-500 text-sm">
        <p>Page for visual testing only - not for production use</p>
        <p className="mt-2">Total diagrams: {diagrams.length} | Subjects: {subjects.length} | Categories: {[...new Set(diagrams.map(d => d.category))].length}</p>
      </div>
    </div>
  );
}
