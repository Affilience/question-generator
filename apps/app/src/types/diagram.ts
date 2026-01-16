/**
 * Comprehensive diagram specification types for GCSE Mathematics.
 * Supports geometry, graphs, tree diagrams, Venn diagrams, and more.
 */

// ============================================
// Core Types
// ============================================

export interface Point {
  x: number;
  y: number;
}

export interface LabelledPoint extends Point {
  label?: string;
  labelPosition?: 'top' | 'bottom' | 'left' | 'right' | 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right';
}

// ============================================
// Diagram Elements
// ============================================

export interface PointElement {
  type: 'point';
  position: LabelledPoint;
  style?: 'dot' | 'cross' | 'circle' | 'none';
  size?: number;
  color?: string;
}

export interface LineElement {
  type: 'line';
  from: Point;
  to: Point;
  label?: string;
  labelPosition?: 'above' | 'below' | 'left' | 'right' | 'center';
  style?: 'solid' | 'dashed' | 'dotted';
  color?: string;
  strokeWidth?: number;
  arrow?: 'none' | 'end' | 'start' | 'both';
}

export interface PolygonElement {
  type: 'polygon';
  vertices: LabelledPoint[];
  fill?: string;
  stroke?: string;
  strokeWidth?: number;
  style?: 'solid' | 'dashed';
  // Side labels
  sideLabels?: {
    fromIndex: number;
    toIndex: number;
    label: string;
    position?: 'outside' | 'inside';
  }[];
}

export interface CircleElement {
  type: 'circle';
  center: LabelledPoint;
  radius: number;
  fill?: string;
  stroke?: string;
  strokeWidth?: number;
  style?: 'solid' | 'dashed';
  // Optional labels
  radiusLabel?: string;
  diameterLabel?: string;
}

export interface ArcElement {
  type: 'arc';
  center: Point;
  radius: number;
  startAngle: number; // in degrees
  endAngle: number; // in degrees
  stroke?: string;
  strokeWidth?: number;
  style?: 'solid' | 'dashed';
  fill?: string; // For sectors
  label?: string;
}

export interface AngleMarkerElement {
  type: 'angle-marker';
  vertex: Point;
  ray1End: Point;
  ray2End: Point;
  radius?: number;
  label?: string;
  isRightAngle?: boolean;
  fill?: string;
  stroke?: string;
}

export interface TextElement {
  type: 'text';
  position: Point;
  content: string;
  fontSize?: number;
  fontWeight?: 'normal' | 'bold';
  color?: string;
  anchor?: 'start' | 'middle' | 'end';
}

export interface ArrowElement {
  type: 'arrow';
  from: Point;
  to: Point;
  label?: string;
  color?: string;
  strokeWidth?: number;
  headSize?: number;
}

export interface CurveElement {
  type: 'curve';
  // For function-based curves
  fn?: string; // e.g., "x^2", "sin(x)", "2x+1"
  domain?: [number, number];
  // For explicit path
  points?: Point[];
  smooth?: boolean;
  stroke?: string;
  strokeWidth?: number;
  style?: 'solid' | 'dashed';
  fill?: string;
}

export interface RectangleElement {
  type: 'rectangle';
  topLeft: Point;
  width: number;
  height: number;
  fill?: string;
  stroke?: string;
  strokeWidth?: number;
  style?: 'solid' | 'dashed';
  label?: string;
  cornerLabels?: {
    topLeft?: string;
    topRight?: string;
    bottomLeft?: string;
    bottomRight?: string;
  };
}

export interface GridElement {
  type: 'grid';
  xMin: number;
  xMax: number;
  yMin: number;
  yMax: number;
  xStep?: number;
  yStep?: number;
  color?: string;
  opacity?: number;
}

export interface AxesElement {
  type: 'axes';
  xMin: number;
  xMax: number;
  yMin: number;
  yMax: number;
  xLabel?: string;
  yLabel?: string;
  showArrows?: boolean;
  showNumbers?: boolean;
  xStep?: number;
  yStep?: number;
  color?: string;
}

// ============================================
// Compound Diagram Types
// ============================================

export interface TreeNode {
  label: string;
  probability?: string;
  children?: TreeBranch[];
}

export interface TreeBranch {
  label: string;
  probability?: string;
  node: TreeNode;
}

export interface TreeDiagramElement {
  type: 'tree-diagram';
  root: TreeNode;
  branchLength?: number;
  levelSpacing?: number;
  nodeSpacing?: number;
}

export interface VennSet {
  label: string;
  values?: string[];
  color?: string;
}

export interface VennDiagramElement {
  type: 'venn-diagram';
  sets: VennSet[];
  intersection?: string[];
  outsideValues?: string[];
  universalLabel?: string;
}

export interface NumberLineElement {
  type: 'number-line';
  min: number;
  max: number;
  step?: number;
  points?: {
    value: number;
    label?: string;
    style?: 'dot' | 'open' | 'arrow-left' | 'arrow-right';
  }[];
  ranges?: {
    from: number;
    to: number;
    inclusive?: [boolean, boolean];
    color?: string;
  }[];
}

export interface BarChartElement {
  type: 'bar-chart';
  data: {
    label: string;
    value: number;
    color?: string;
  }[];
  xLabel?: string;
  yLabel?: string;
  yMax?: number;
}

export interface PieChartElement {
  type: 'pie-chart';
  data: {
    label: string;
    value: number;
    color?: string;
  }[];
  showPercentages?: boolean;
  showValues?: boolean;
}

export interface BoxPlotElement {
  type: 'box-plot';
  min: number;
  q1: number;
  median: number;
  q3: number;
  max: number;
  outliers?: number[];
  label?: string;
  axisMin?: number;
  axisMax?: number;
}

export interface TableElement {
  type: 'table';
  position: Point;
  headers?: string[];
  rows: string[][];
  cellWidth?: number;
  cellHeight?: number;
}

// ============================================
// 3D Shape Representations (2D projections)
// ============================================

export interface Prism3DElement {
  type: 'prism-3d';
  baseShape: 'rectangle' | 'triangle' | 'hexagon';
  width: number;
  height: number;
  depth: number;
  position?: Point;
  labels?: {
    width?: string;
    height?: string;
    depth?: string;
  };
}

export interface Cylinder3DElement {
  type: 'cylinder-3d';
  radius: number;
  height: number;
  position?: Point;
  labels?: {
    radius?: string;
    height?: string;
  };
}

export interface Cone3DElement {
  type: 'cone-3d';
  radius: number;
  height: number;
  position?: Point;
  labels?: {
    radius?: string;
    height?: string;
    slantHeight?: string;
  };
}

export interface Sphere3DElement {
  type: 'sphere-3d';
  radius: number;
  position?: Point;
  labels?: {
    radius?: string;
  };
}

export interface Pyramid3DElement {
  type: 'pyramid-3d';
  baseShape: 'square' | 'triangle' | 'rectangle';
  baseWidth: number;
  baseDepth?: number;
  height: number;
  position?: Point;
  labels?: {
    baseWidth?: string;
    height?: string;
  };
}

// ============================================
// Union of all element types
// ============================================

export type DiagramElement =
  | PointElement
  | LineElement
  | PolygonElement
  | CircleElement
  | ArcElement
  | AngleMarkerElement
  | TextElement
  | ArrowElement
  | CurveElement
  | RectangleElement
  | GridElement
  | AxesElement
  | TreeDiagramElement
  | VennDiagramElement
  | NumberLineElement
  | BarChartElement
  | PieChartElement
  | BoxPlotElement
  | TableElement
  | Prism3DElement
  | Cylinder3DElement
  | Cone3DElement
  | Sphere3DElement
  | Pyramid3DElement;

// ============================================
// Main Diagram Specification
// ============================================

export interface DiagramSpec {
  /** Width in logical units (will be scaled to fit) */
  width?: number;
  /** Height in logical units (will be scaled to fit) */
  height?: number;
  /** Padding around the diagram */
  padding?: number;
  /** Background color */
  background?: string;
  /** Whether to show "Diagram NOT accurately drawn" label */
  showNotAccurate?: boolean;
  /** Custom disclaimer text */
  disclaimer?: string;
  /** All diagram elements to render */
  elements: DiagramElement[];
  /** Default stroke color */
  defaultStroke?: string;
  /** Default fill color */
  defaultFill?: string;
}

// ============================================
// Helper type for questions with diagrams
// ============================================

export interface QuestionWithDiagram {
  content: string;
  marks: number;
  solution: string;
  markScheme: string[];
  diagram?: DiagramSpec;
}
