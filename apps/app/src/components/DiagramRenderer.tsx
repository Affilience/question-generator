'use client';

import React, { useMemo, Component, ErrorInfo, ReactNode } from 'react';
import {
  DiagramSpec,
  DiagramElement,
  Point,
  LabelledPoint,
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
  TreeNode,
} from '@/types/diagram';
import { validateAndSanitizeDiagram } from '@/lib/diagram-utils';

// ============================================
// Constants
// ============================================

// Colors that work in both light and dark modes
// Using CSS variables where possible for theme compatibility
const DEFAULT_COLORS = {
  stroke: '#374151', // gray-700 - works on both light and dark
  fill: 'none',
  text: '#1f2937', // gray-800
  grid: '#d1d5db', // gray-300
  accent: '#3b82f6', // blue-500
  angle: 'rgba(59, 130, 246, 0.3)',
};

// Dark mode colors (used when darkMode prop is true)
const DARK_MODE_COLORS = {
  stroke: '#e5e7eb', // gray-200
  fill: 'none',
  text: '#f3f4f6', // gray-100
  grid: '#374151', // gray-700
  accent: '#60a5fa', // blue-400
  angle: 'rgba(96, 165, 250, 0.3)',
};

const DEFAULT_RENDER_WIDTH = 400;
const DEFAULT_RENDER_HEIGHT = 300;

// Precision for SVG coordinates (2 decimal places for performance)
const COORD_PRECISION = 2;

/**
 * Round a number to specified decimal places for cleaner SVG output.
 * Reduces file size and improves rendering performance.
 */
function round(n: number, decimals: number = COORD_PRECISION): number {
  const factor = Math.pow(10, decimals);
  return Math.round(n * factor) / factor;
}

/**
 * Round a point's coordinates.
 */
function roundPoint(p: Point): Point {
  return { x: round(p.x), y: round(p.y) };
}

// ============================================
// Utility Functions
// ============================================

function polarToCartesian(cx: number, cy: number, radius: number, angleInDegrees: number): Point {
  const angleInRadians = (angleInDegrees - 90) * Math.PI / 180;
  return {
    x: cx + radius * Math.cos(angleInRadians),
    y: cy + radius * Math.sin(angleInRadians),
  };
}

function describeArc(cx: number, cy: number, radius: number, startAngle: number, endAngle: number): string {
  const start = polarToCartesian(cx, cy, radius, endAngle);
  const end = polarToCartesian(cx, cy, radius, startAngle);
  const largeArcFlag = endAngle - startAngle <= 180 ? '0' : '1';
  return `M ${start.x} ${start.y} A ${radius} ${radius} 0 ${largeArcFlag} 0 ${end.x} ${end.y}`;
}

function describeSector(cx: number, cy: number, radius: number, startAngle: number, endAngle: number): string {
  const start = polarToCartesian(cx, cy, radius, endAngle);
  const end = polarToCartesian(cx, cy, radius, startAngle);
  const largeArcFlag = endAngle - startAngle <= 180 ? '0' : '1';
  return `M ${cx} ${cy} L ${start.x} ${start.y} A ${radius} ${radius} 0 ${largeArcFlag} 0 ${end.x} ${end.y} Z`;
}

function getMidpoint(p1: Point, p2: Point): Point {
  return { x: (p1.x + p2.x) / 2, y: (p1.y + p2.y) / 2 };
}

function getAngle(from: Point, to: Point): number {
  return Math.atan2(to.y - from.y, to.x - from.x) * 180 / Math.PI;
}

function getDistance(p1: Point, p2: Point): number {
  return Math.sqrt((p2.x - p1.x) ** 2 + (p2.y - p1.y) ** 2);
}

function getLabelOffset(position: string | undefined, offset: number = 12): Point {
  switch (position) {
    case 'top': return { x: 0, y: -offset };
    case 'bottom': return { x: 0, y: offset };
    case 'left': return { x: -offset, y: 0 };
    case 'right': return { x: offset, y: 0 };
    case 'top-left': return { x: -offset, y: -offset };
    case 'top-right': return { x: offset, y: -offset };
    case 'bottom-left': return { x: -offset, y: offset };
    case 'bottom-right': return { x: offset, y: offset };
    default: return { x: 0, y: -offset };
  }
}

// ============================================
// Element Renderers
// ============================================

function renderPoint(el: PointElement, key: string, transform: (p: Point) => Point, scale: number): React.ReactNode {
  const p = transform(el.position);
  const size = (el.size || 4) * scale;
  const color = el.color || DEFAULT_COLORS.stroke;

  return (
    <g key={key}>
      {el.style === 'cross' ? (
        <>
          <line x1={p.x - size} y1={p.y - size} x2={p.x + size} y2={p.y + size} stroke={color} strokeWidth={2} />
          <line x1={p.x + size} y1={p.y - size} x2={p.x - size} y2={p.y + size} stroke={color} strokeWidth={2} />
        </>
      ) : el.style === 'circle' ? (
        <circle cx={p.x} cy={p.y} r={size} fill="none" stroke={color} strokeWidth={2} />
      ) : el.style !== 'none' ? (
        <circle cx={p.x} cy={p.y} r={size} fill={color} />
      ) : null}
      {el.position.label && (
        <text
          x={p.x + getLabelOffset(el.position.labelPosition).x}
          y={p.y + getLabelOffset(el.position.labelPosition).y}
          fill={DEFAULT_COLORS.text}
          fontSize={14}
          textAnchor="middle"
          dominantBaseline="middle"
        >
          {el.position.label}
        </text>
      )}
    </g>
  );
}

function renderLine(el: LineElement, key: string, transform: (p: Point) => Point): React.ReactNode {
  const from = transform(el.from);
  const to = transform(el.to);
  const color = el.color || DEFAULT_COLORS.stroke;
  const strokeWidth = el.strokeWidth || 2;
  const dashArray = el.style === 'dashed' ? '8,4' : el.style === 'dotted' ? '2,4' : undefined;

  const mid = getMidpoint(from, to);
  const angle = getAngle(from, to);
  const perpOffset = el.labelPosition === 'below' || el.labelPosition === 'right' ? 15 : -15;

  // Calculate perpendicular offset for label
  const labelX = mid.x + perpOffset * Math.sin(angle * Math.PI / 180);
  const labelY = mid.y - perpOffset * Math.cos(angle * Math.PI / 180);

  return (
    <g key={key}>
      <line
        x1={from.x}
        y1={from.y}
        x2={to.x}
        y2={to.y}
        stroke={color}
        strokeWidth={strokeWidth}
        strokeDasharray={dashArray}
        markerEnd={el.arrow === 'end' || el.arrow === 'both' ? 'url(#arrowhead)' : undefined}
        markerStart={el.arrow === 'start' || el.arrow === 'both' ? 'url(#arrowhead-reverse)' : undefined}
      />
      {el.label && (
        <text
          x={labelX}
          y={labelY}
          fill={DEFAULT_COLORS.text}
          fontSize={13}
          textAnchor="middle"
          dominantBaseline="middle"
        >
          {el.label}
        </text>
      )}
    </g>
  );
}

function renderPolygon(el: PolygonElement, key: string, transform: (p: Point) => Point): React.ReactNode {
  const points = el.vertices.map(v => transform(v));
  const pointsStr = points.map(p => `${p.x},${p.y}`).join(' ');
  const dashArray = el.style === 'dashed' ? '8,4' : undefined;

  return (
    <g key={key}>
      <polygon
        points={pointsStr}
        fill={el.fill || 'none'}
        stroke={el.stroke || DEFAULT_COLORS.stroke}
        strokeWidth={el.strokeWidth || 2}
        strokeDasharray={dashArray}
      />
      {/* Vertex labels */}
      {el.vertices.map((v, i) => {
        const p = points[i];
        if (!v.label) return null;
        const offset = getLabelOffset(v.labelPosition, 18);
        return (
          <text
            key={`label-${i}`}
            x={p.x + offset.x}
            y={p.y + offset.y}
            fill={DEFAULT_COLORS.text}
            fontSize={14}
            fontWeight="bold"
            textAnchor="middle"
            dominantBaseline="middle"
          >
            {v.label}
          </text>
        );
      })}
      {/* Side labels */}
      {el.sideLabels?.map((sl, i) => {
        const p1 = points[sl.fromIndex];
        const p2 = points[sl.toIndex];
        const mid = getMidpoint(p1, p2);
        const angle = getAngle(p1, p2);
        const offset = sl.position === 'inside' ? -15 : 15;
        const labelX = mid.x + offset * Math.sin(angle * Math.PI / 180);
        const labelY = mid.y - offset * Math.cos(angle * Math.PI / 180);
        return (
          <text
            key={`side-${i}`}
            x={labelX}
            y={labelY}
            fill={DEFAULT_COLORS.text}
            fontSize={12}
            textAnchor="middle"
            dominantBaseline="middle"
          >
            {sl.label}
          </text>
        );
      })}
    </g>
  );
}

function renderCircle(el: CircleElement, key: string, transform: (p: Point) => Point, scale: number): React.ReactNode {
  const center = transform(el.center);
  const radius = el.radius * scale;
  const dashArray = el.style === 'dashed' ? '8,4' : undefined;

  return (
    <g key={key}>
      <circle
        cx={center.x}
        cy={center.y}
        r={radius}
        fill={el.fill || 'none'}
        stroke={el.stroke || DEFAULT_COLORS.stroke}
        strokeWidth={el.strokeWidth || 2}
        strokeDasharray={dashArray}
      />
      {el.center.label && (
        <text
          x={center.x}
          y={center.y + 5}
          fill={DEFAULT_COLORS.text}
          fontSize={14}
          textAnchor="middle"
        >
          {el.center.label}
        </text>
      )}
      {el.radiusLabel && (
        <>
          <line
            x1={center.x}
            y1={center.y}
            x2={center.x + radius}
            y2={center.y}
            stroke={DEFAULT_COLORS.stroke}
            strokeWidth={1}
            strokeDasharray="4,2"
          />
          <text
            x={center.x + radius / 2}
            y={center.y - 10}
            fill={DEFAULT_COLORS.text}
            fontSize={12}
            textAnchor="middle"
          >
            {el.radiusLabel}
          </text>
        </>
      )}
    </g>
  );
}

function renderArc(el: ArcElement, key: string, transform: (p: Point) => Point, scale: number): React.ReactNode {
  const center = transform(el.center);
  const radius = el.radius * scale;
  const dashArray = el.style === 'dashed' ? '8,4' : undefined;

  const path = el.fill
    ? describeSector(center.x, center.y, radius, el.startAngle, el.endAngle)
    : describeArc(center.x, center.y, radius, el.startAngle, el.endAngle);

  return (
    <g key={key}>
      <path
        d={path}
        fill={el.fill || 'none'}
        stroke={el.stroke || DEFAULT_COLORS.stroke}
        strokeWidth={el.strokeWidth || 2}
        strokeDasharray={dashArray}
      />
      {el.label && (
        <text
          x={center.x}
          y={center.y - radius - 10}
          fill={DEFAULT_COLORS.text}
          fontSize={12}
          textAnchor="middle"
        >
          {el.label}
        </text>
      )}
    </g>
  );
}

function renderAngleMarker(el: AngleMarkerElement, key: string, transform: (p: Point) => Point, scale: number): React.ReactNode {
  const vertex = transform(el.vertex);
  const ray1 = transform(el.ray1End);
  const ray2 = transform(el.ray2End);
  const radius = (el.radius || 20) * scale;

  if (el.isRightAngle) {
    // Draw right angle square
    const angle1 = Math.atan2(ray1.y - vertex.y, ray1.x - vertex.x);
    const angle2 = Math.atan2(ray2.y - vertex.y, ray2.x - vertex.x);

    const size = radius * 0.7;
    const p1 = { x: vertex.x + size * Math.cos(angle1), y: vertex.y + size * Math.sin(angle1) };
    const p2 = { x: vertex.x + size * Math.cos(angle2), y: vertex.y + size * Math.sin(angle2) };
    const p3 = {
      x: vertex.x + size * Math.cos(angle1) + size * Math.cos(angle2),
      y: vertex.y + size * Math.sin(angle1) + size * Math.sin(angle2)
    };

    return (
      <g key={key}>
        <path
          d={`M ${p1.x} ${p1.y} L ${p3.x} ${p3.y} L ${p2.x} ${p2.y}`}
          fill="none"
          stroke={el.stroke || DEFAULT_COLORS.stroke}
          strokeWidth={1.5}
        />
      </g>
    );
  }

  // Calculate angles for arc
  const angle1 = Math.atan2(ray1.y - vertex.y, ray1.x - vertex.x) * 180 / Math.PI;
  const angle2 = Math.atan2(ray2.y - vertex.y, ray2.x - vertex.x) * 180 / Math.PI;

  // Normalize angles
  let startAngle = angle1 + 90;
  let endAngle = angle2 + 90;
  if (endAngle < startAngle) endAngle += 360;

  const arcPath = describeArc(vertex.x, vertex.y, radius, startAngle, endAngle);

  // Calculate label position
  const midAngle = (startAngle + endAngle) / 2 - 90;
  const labelRadius = radius + 15;
  const labelPos = {
    x: vertex.x + labelRadius * Math.cos(midAngle * Math.PI / 180),
    y: vertex.y + labelRadius * Math.sin(midAngle * Math.PI / 180),
  };

  return (
    <g key={key}>
      <path
        d={arcPath}
        fill={el.fill || DEFAULT_COLORS.angle}
        stroke={el.stroke || DEFAULT_COLORS.accent}
        strokeWidth={1.5}
      />
      {el.label && (
        <text
          x={labelPos.x}
          y={labelPos.y}
          fill={DEFAULT_COLORS.text}
          fontSize={12}
          textAnchor="middle"
          dominantBaseline="middle"
        >
          {el.label}
        </text>
      )}
    </g>
  );
}

function renderText(el: TextElement, key: string, transform: (p: Point) => Point): React.ReactNode {
  const pos = transform(el.position);

  return (
    <text
      key={key}
      x={pos.x}
      y={pos.y}
      fill={el.color || DEFAULT_COLORS.text}
      fontSize={el.fontSize || 14}
      fontWeight={el.fontWeight || 'normal'}
      textAnchor={el.anchor || 'middle'}
      dominantBaseline="middle"
    >
      {el.content}
    </text>
  );
}

function renderArrow(el: ArrowElement, key: string, transform: (p: Point) => Point): React.ReactNode {
  const from = transform(el.from);
  const to = transform(el.to);
  const color = el.color || DEFAULT_COLORS.accent;
  const strokeWidth = el.strokeWidth || 2;

  const mid = getMidpoint(from, to);

  return (
    <g key={key}>
      <line
        x1={from.x}
        y1={from.y}
        x2={to.x}
        y2={to.y}
        stroke={color}
        strokeWidth={strokeWidth}
        markerEnd="url(#arrowhead)"
      />
      {el.label && (
        <text
          x={mid.x}
          y={mid.y - 12}
          fill={DEFAULT_COLORS.text}
          fontSize={12}
          textAnchor="middle"
        >
          {el.label}
        </text>
      )}
    </g>
  );
}

function renderCurve(el: CurveElement, key: string, transform: (p: Point) => Point, logicalBounds: { xMin: number; xMax: number; yMin: number; yMax: number }): React.ReactNode {
  const dashArray = el.style === 'dashed' ? '8,4' : undefined;

  let pathData = '';

  if (el.points && el.points.length > 0) {
    // Explicit points
    const transformed = el.points.map(p => transform(p));
    if (el.smooth) {
      // Smooth curve through points using quadratic bezier
      pathData = `M ${transformed[0].x} ${transformed[0].y}`;
      for (let i = 1; i < transformed.length - 1; i++) {
        const xc = (transformed[i].x + transformed[i + 1].x) / 2;
        const yc = (transformed[i].y + transformed[i + 1].y) / 2;
        pathData += ` Q ${transformed[i].x} ${transformed[i].y} ${xc} ${yc}`;
      }
      if (transformed.length > 1) {
        const last = transformed[transformed.length - 1];
        pathData += ` L ${last.x} ${last.y}`;
      }
    } else {
      pathData = transformed.map((p, i) => `${i === 0 ? 'M' : 'L'} ${p.x} ${p.y}`).join(' ');
    }
  } else if (el.fn) {
    // Function-based curve
    const domain = el.domain || [logicalBounds.xMin, logicalBounds.xMax];
    const steps = 100;
    const dx = (domain[1] - domain[0]) / steps;

    const points: Point[] = [];
    for (let i = 0; i <= steps; i++) {
      const x = domain[0] + i * dx;
      let y: number;
      try {
        // Simple function parser
        const fn = el.fn
          .replace(/\^/g, '**')
          .replace(/sin/g, 'Math.sin')
          .replace(/cos/g, 'Math.cos')
          .replace(/tan/g, 'Math.tan')
          .replace(/sqrt/g, 'Math.sqrt')
          .replace(/abs/g, 'Math.abs')
          .replace(/x/g, `(${x})`);
        y = eval(fn);
        if (isFinite(y) && y >= logicalBounds.yMin - 10 && y <= logicalBounds.yMax + 10) {
          points.push({ x, y });
        }
      } catch {
        continue;
      }
    }

    if (points.length > 0) {
      const transformed = points.map(p => transform(p));
      pathData = transformed.map((p, i) => `${i === 0 ? 'M' : 'L'} ${p.x} ${p.y}`).join(' ');
    }
  }

  if (!pathData) return null;

  return (
    <path
      key={key}
      d={pathData}
      fill={el.fill || 'none'}
      stroke={el.stroke || DEFAULT_COLORS.accent}
      strokeWidth={el.strokeWidth || 2}
      strokeDasharray={dashArray}
    />
  );
}

function renderRectangle(el: RectangleElement, key: string, transform: (p: Point) => Point, scale: number): React.ReactNode {
  const topLeft = transform(el.topLeft);
  const width = el.width * scale;
  const height = el.height * scale;
  const dashArray = el.style === 'dashed' ? '8,4' : undefined;

  return (
    <g key={key}>
      <rect
        x={topLeft.x}
        y={topLeft.y}
        width={width}
        height={height}
        fill={el.fill || 'none'}
        stroke={el.stroke || DEFAULT_COLORS.stroke}
        strokeWidth={el.strokeWidth || 2}
        strokeDasharray={dashArray}
      />
      {el.label && (
        <text
          x={topLeft.x + width / 2}
          y={topLeft.y + height / 2}
          fill={DEFAULT_COLORS.text}
          fontSize={12}
          textAnchor="middle"
          dominantBaseline="middle"
        >
          {el.label}
        </text>
      )}
      {el.cornerLabels?.topLeft && (
        <text x={topLeft.x - 10} y={topLeft.y - 10} fill={DEFAULT_COLORS.text} fontSize={14} textAnchor="middle">{el.cornerLabels.topLeft}</text>
      )}
      {el.cornerLabels?.topRight && (
        <text x={topLeft.x + width + 10} y={topLeft.y - 10} fill={DEFAULT_COLORS.text} fontSize={14} textAnchor="middle">{el.cornerLabels.topRight}</text>
      )}
      {el.cornerLabels?.bottomLeft && (
        <text x={topLeft.x - 10} y={topLeft.y + height + 15} fill={DEFAULT_COLORS.text} fontSize={14} textAnchor="middle">{el.cornerLabels.bottomLeft}</text>
      )}
      {el.cornerLabels?.bottomRight && (
        <text x={topLeft.x + width + 10} y={topLeft.y + height + 15} fill={DEFAULT_COLORS.text} fontSize={14} textAnchor="middle">{el.cornerLabels.bottomRight}</text>
      )}
    </g>
  );
}

function renderGrid(el: GridElement, key: string, transform: (p: Point) => Point): React.ReactNode {
  const lines: React.ReactNode[] = [];
  const xStep = el.xStep || 1;
  const yStep = el.yStep || 1;
  const color = el.color || DEFAULT_COLORS.grid;
  const opacity = el.opacity || 0.3;

  // Vertical lines
  for (let x = el.xMin; x <= el.xMax; x += xStep) {
    const p1 = transform({ x, y: el.yMin });
    const p2 = transform({ x, y: el.yMax });
    lines.push(
      <line key={`v-${x}`} x1={p1.x} y1={p1.y} x2={p2.x} y2={p2.y} stroke={color} strokeWidth={1} opacity={opacity} />
    );
  }

  // Horizontal lines
  for (let y = el.yMin; y <= el.yMax; y += yStep) {
    const p1 = transform({ x: el.xMin, y });
    const p2 = transform({ x: el.xMax, y });
    lines.push(
      <line key={`h-${y}`} x1={p1.x} y1={p1.y} x2={p2.x} y2={p2.y} stroke={color} strokeWidth={1} opacity={opacity} />
    );
  }

  return <g key={key}>{lines}</g>;
}

function renderAxes(el: AxesElement, key: string, transform: (p: Point) => Point, renderWidth: number, renderHeight: number): React.ReactNode {
  const origin = transform({ x: 0, y: 0 });
  const xAxisStart = transform({ x: el.xMin, y: 0 });
  const xAxisEnd = transform({ x: el.xMax, y: 0 });
  const yAxisStart = transform({ x: 0, y: el.yMin });
  const yAxisEnd = transform({ x: 0, y: el.yMax });
  const color = el.color || DEFAULT_COLORS.stroke;

  const elements: React.ReactNode[] = [];

  // X axis
  elements.push(
    <line key="x-axis" x1={xAxisStart.x} y1={origin.y} x2={xAxisEnd.x} y2={origin.y} stroke={color} strokeWidth={2} markerEnd={el.showArrows ? 'url(#arrowhead)' : undefined} />
  );

  // Y axis
  elements.push(
    <line key="y-axis" x1={origin.x} y1={yAxisStart.y} x2={origin.x} y2={yAxisEnd.y} stroke={color} strokeWidth={2} markerEnd={el.showArrows ? 'url(#arrowhead)' : undefined} />
  );

  // Axis labels
  if (el.xLabel) {
    elements.push(
      <text key="x-label" x={xAxisEnd.x - 10} y={origin.y + 25} fill={DEFAULT_COLORS.text} fontSize={14} textAnchor="middle">{el.xLabel}</text>
    );
  }
  if (el.yLabel) {
    elements.push(
      <text key="y-label" x={origin.x - 25} y={yAxisEnd.y + 10} fill={DEFAULT_COLORS.text} fontSize={14} textAnchor="middle">{el.yLabel}</text>
    );
  }

  // Tick marks and numbers
  if (el.showNumbers) {
    const xStep = el.xStep || 1;
    const yStep = el.yStep || 1;

    for (let x = el.xMin; x <= el.xMax; x += xStep) {
      if (x === 0) continue;
      const p = transform({ x, y: 0 });
      elements.push(
        <g key={`x-tick-${x}`}>
          <line x1={p.x} y1={origin.y - 5} x2={p.x} y2={origin.y + 5} stroke={color} strokeWidth={1} />
          <text x={p.x} y={origin.y + 18} fill={DEFAULT_COLORS.text} fontSize={11} textAnchor="middle">{x}</text>
        </g>
      );
    }

    for (let y = el.yMin; y <= el.yMax; y += yStep) {
      if (y === 0) continue;
      const p = transform({ x: 0, y });
      elements.push(
        <g key={`y-tick-${y}`}>
          <line x1={origin.x - 5} y1={p.y} x2={origin.x + 5} y2={p.y} stroke={color} strokeWidth={1} />
          <text x={origin.x - 15} y={p.y + 4} fill={DEFAULT_COLORS.text} fontSize={11} textAnchor="end">{y}</text>
        </g>
      );
    }

    // Origin label
    elements.push(
      <text key="origin" x={origin.x - 12} y={origin.y + 18} fill={DEFAULT_COLORS.text} fontSize={11} textAnchor="middle">0</text>
    );
  }

  return <g key={key}>{elements}</g>;
}

function renderTreeDiagram(el: TreeDiagramElement, key: string, renderWidth: number, renderHeight: number): React.ReactNode {
  const branchLength = el.branchLength || 80;
  const levelSpacing = el.levelSpacing || 100;
  const nodeSpacing = el.nodeSpacing || 60;

  const elements: React.ReactNode[] = [];

  function renderNode(node: TreeNode, x: number, y: number, depth: number): void {
    // Draw node label
    elements.push(
      <text
        key={`node-${depth}-${x}-${y}`}
        x={x}
        y={y}
        fill={DEFAULT_COLORS.text}
        fontSize={12}
        textAnchor="middle"
        dominantBaseline="middle"
      >
        {node.label}
      </text>
    );

    if (node.children && node.children.length > 0) {
      const childCount = node.children.length;
      const totalHeight = (childCount - 1) * nodeSpacing;
      const startY = y - totalHeight / 2;

      node.children.forEach((branch, i) => {
        const childX = x + levelSpacing;
        const childY = startY + i * nodeSpacing;

        // Draw branch line
        elements.push(
          <line
            key={`branch-${depth}-${i}`}
            x1={x + 20}
            y1={y}
            x2={childX - 20}
            y2={childY}
            stroke={DEFAULT_COLORS.stroke}
            strokeWidth={1.5}
          />
        );

        // Draw branch label (probability)
        if (branch.probability) {
          const midX = (x + 20 + childX - 20) / 2;
          const midY = (y + childY) / 2;
          elements.push(
            <text
              key={`prob-${depth}-${i}`}
              x={midX}
              y={midY - 8}
              fill={DEFAULT_COLORS.accent}
              fontSize={11}
              textAnchor="middle"
            >
              {branch.probability}
            </text>
          );
        }

        // Draw branch outcome label
        if (branch.label) {
          const midX = (x + 20 + childX - 20) / 2;
          const midY = (y + childY) / 2;
          elements.push(
            <text
              key={`label-${depth}-${i}`}
              x={midX}
              y={midY + 10}
              fill={DEFAULT_COLORS.text}
              fontSize={10}
              textAnchor="middle"
            >
              {branch.label}
            </text>
          );
        }

        // Recursively render child node
        renderNode(branch.node, childX, childY, depth + 1);
      });
    }
  }

  // Start rendering from root
  renderNode(el.root, 50, renderHeight / 2, 0);

  return <g key={key}>{elements}</g>;
}

function renderVennDiagram(el: VennDiagramElement, key: string, renderWidth: number, renderHeight: number): React.ReactNode {
  const cx = renderWidth / 2;
  const cy = renderHeight / 2;
  const radius = Math.min(renderWidth, renderHeight) * 0.3;
  const overlap = radius * 0.6;

  const elements: React.ReactNode[] = [];

  // Universal set rectangle
  elements.push(
    <rect
      key="universal"
      x={20}
      y={20}
      width={renderWidth - 40}
      height={renderHeight - 40}
      fill="none"
      stroke={DEFAULT_COLORS.stroke}
      strokeWidth={2}
    />
  );

  if (el.universalLabel) {
    elements.push(
      <text key="u-label" x={30} y={40} fill={DEFAULT_COLORS.text} fontSize={14}>{el.universalLabel}</text>
    );
  }

  if (el.sets.length === 1) {
    // Single set
    elements.push(
      <circle
        key="set-0"
        cx={cx}
        cy={cy}
        r={radius}
        fill={el.sets[0].color || 'rgba(59, 130, 246, 0.2)'}
        stroke={DEFAULT_COLORS.accent}
        strokeWidth={2}
      />
    );
    elements.push(
      <text key="label-0" x={cx} y={cy - radius - 10} fill={DEFAULT_COLORS.text} fontSize={14} textAnchor="middle">{el.sets[0].label}</text>
    );
  } else if (el.sets.length === 2) {
    // Two overlapping sets
    const leftCx = cx - overlap / 2;
    const rightCx = cx + overlap / 2;

    elements.push(
      <circle
        key="set-0"
        cx={leftCx}
        cy={cy}
        r={radius}
        fill={el.sets[0].color || 'rgba(59, 130, 246, 0.2)'}
        stroke={DEFAULT_COLORS.accent}
        strokeWidth={2}
      />
    );
    elements.push(
      <circle
        key="set-1"
        cx={rightCx}
        cy={cy}
        r={radius}
        fill={el.sets[1].color || 'rgba(239, 68, 68, 0.2)'}
        stroke="#ef4444"
        strokeWidth={2}
      />
    );

    // Labels
    elements.push(
      <text key="label-0" x={leftCx - radius / 2} y={cy - radius - 10} fill={DEFAULT_COLORS.text} fontSize={14} textAnchor="middle">{el.sets[0].label}</text>
    );
    elements.push(
      <text key="label-1" x={rightCx + radius / 2} y={cy - radius - 10} fill={DEFAULT_COLORS.text} fontSize={14} textAnchor="middle">{el.sets[1].label}</text>
    );

    // Values
    if (el.sets[0].values) {
      elements.push(
        <text key="val-0" x={leftCx - overlap / 2} y={cy} fill={DEFAULT_COLORS.text} fontSize={12} textAnchor="middle">{el.sets[0].values.join(', ')}</text>
      );
    }
    if (el.sets[1].values) {
      elements.push(
        <text key="val-1" x={rightCx + overlap / 2} y={cy} fill={DEFAULT_COLORS.text} fontSize={12} textAnchor="middle">{el.sets[1].values.join(', ')}</text>
      );
    }
    if (el.intersection) {
      elements.push(
        <text key="intersection" x={cx} y={cy} fill={DEFAULT_COLORS.text} fontSize={12} textAnchor="middle">{el.intersection.join(', ')}</text>
      );
    }
  }

  // Outside values
  if (el.outsideValues) {
    elements.push(
      <text key="outside" x={renderWidth - 50} y={renderHeight - 40} fill={DEFAULT_COLORS.text} fontSize={12} textAnchor="end">{el.outsideValues.join(', ')}</text>
    );
  }

  return <g key={key}>{elements}</g>;
}

function renderNumberLine(el: NumberLineElement, key: string, renderWidth: number, renderHeight: number): React.ReactNode {
  const padding = 40;
  const lineY = renderHeight / 2;
  const lineStart = padding;
  const lineEnd = renderWidth - padding;
  const lineLength = lineEnd - lineStart;

  const scale = (val: number) => lineStart + ((val - el.min) / (el.max - el.min)) * lineLength;

  const elements: React.ReactNode[] = [];

  // Main line
  elements.push(
    <line key="line" x1={lineStart} y1={lineY} x2={lineEnd} y2={lineY} stroke={DEFAULT_COLORS.stroke} strokeWidth={2} />
  );

  // Arrows
  elements.push(
    <polygon key="arrow-right" points={`${lineEnd},${lineY} ${lineEnd - 8},${lineY - 5} ${lineEnd - 8},${lineY + 5}`} fill={DEFAULT_COLORS.stroke} />
  );

  // Tick marks
  const step = el.step || 1;
  for (let val = el.min; val <= el.max; val += step) {
    const x = scale(val);
    elements.push(
      <g key={`tick-${val}`}>
        <line x1={x} y1={lineY - 8} x2={x} y2={lineY + 8} stroke={DEFAULT_COLORS.stroke} strokeWidth={1} />
        <text x={x} y={lineY + 25} fill={DEFAULT_COLORS.text} fontSize={12} textAnchor="middle">{val}</text>
      </g>
    );
  }

  // Points
  el.points?.forEach((point, i) => {
    const x = scale(point.value);
    if (point.style === 'open') {
      elements.push(<circle key={`point-${i}`} cx={x} cy={lineY} r={6} fill="#1a1a1a" stroke={DEFAULT_COLORS.accent} strokeWidth={2} />);
    } else if (point.style === 'arrow-left') {
      elements.push(<polygon key={`point-${i}`} points={`${x},${lineY} ${x + 10},${lineY - 6} ${x + 10},${lineY + 6}`} fill={DEFAULT_COLORS.accent} />);
    } else if (point.style === 'arrow-right') {
      elements.push(<polygon key={`point-${i}`} points={`${x},${lineY} ${x - 10},${lineY - 6} ${x - 10},${lineY + 6}`} fill={DEFAULT_COLORS.accent} />);
    } else {
      elements.push(<circle key={`point-${i}`} cx={x} cy={lineY} r={6} fill={DEFAULT_COLORS.accent} />);
    }
    if (point.label) {
      elements.push(<text key={`point-label-${i}`} x={x} y={lineY - 15} fill={DEFAULT_COLORS.text} fontSize={11} textAnchor="middle">{point.label}</text>);
    }
  });

  // Ranges
  el.ranges?.forEach((range, i) => {
    const x1 = scale(range.from);
    const x2 = scale(range.to);
    const color = range.color || DEFAULT_COLORS.accent;
    elements.push(
      <line key={`range-${i}`} x1={x1} y1={lineY} x2={x2} y2={lineY} stroke={color} strokeWidth={4} opacity={0.6} />
    );
  });

  return <g key={key}>{elements}</g>;
}

function renderBarChart(el: BarChartElement, key: string, renderWidth: number, renderHeight: number): React.ReactNode {
  const padding = { top: 30, right: 20, bottom: 50, left: 50 };
  const chartWidth = renderWidth - padding.left - padding.right;
  const chartHeight = renderHeight - padding.top - padding.bottom;

  const maxValue = el.yMax || Math.max(...el.data.map(d => d.value)) * 1.1;
  const barWidth = chartWidth / el.data.length * 0.7;
  const barGap = chartWidth / el.data.length * 0.3;

  const elements: React.ReactNode[] = [];

  // Y axis
  elements.push(
    <line key="y-axis" x1={padding.left} y1={padding.top} x2={padding.left} y2={renderHeight - padding.bottom} stroke={DEFAULT_COLORS.stroke} strokeWidth={2} />
  );

  // X axis
  elements.push(
    <line key="x-axis" x1={padding.left} y1={renderHeight - padding.bottom} x2={renderWidth - padding.right} y2={renderHeight - padding.bottom} stroke={DEFAULT_COLORS.stroke} strokeWidth={2} />
  );

  // Bars
  el.data.forEach((d, i) => {
    const barHeight = (d.value / maxValue) * chartHeight;
    const x = padding.left + i * (barWidth + barGap) + barGap / 2;
    const y = renderHeight - padding.bottom - barHeight;

    elements.push(
      <rect
        key={`bar-${i}`}
        x={x}
        y={y}
        width={barWidth}
        height={barHeight}
        fill={d.color || DEFAULT_COLORS.accent}
        opacity={0.8}
      />
    );

    // Label
    elements.push(
      <text
        key={`label-${i}`}
        x={x + barWidth / 2}
        y={renderHeight - padding.bottom + 20}
        fill={DEFAULT_COLORS.text}
        fontSize={11}
        textAnchor="middle"
      >
        {d.label}
      </text>
    );

    // Value
    elements.push(
      <text
        key={`value-${i}`}
        x={x + barWidth / 2}
        y={y - 5}
        fill={DEFAULT_COLORS.text}
        fontSize={10}
        textAnchor="middle"
      >
        {d.value}
      </text>
    );
  });

  // Axis labels
  if (el.xLabel) {
    elements.push(
      <text key="x-label" x={renderWidth / 2} y={renderHeight - 10} fill={DEFAULT_COLORS.text} fontSize={12} textAnchor="middle">{el.xLabel}</text>
    );
  }
  if (el.yLabel) {
    elements.push(
      <text key="y-label" x={15} y={renderHeight / 2} fill={DEFAULT_COLORS.text} fontSize={12} textAnchor="middle" transform={`rotate(-90, 15, ${renderHeight / 2})`}>{el.yLabel}</text>
    );
  }

  return <g key={key}>{elements}</g>;
}

function renderPieChart(el: PieChartElement, key: string, renderWidth: number, renderHeight: number): React.ReactNode {
  const cx = renderWidth / 2;
  const cy = renderHeight / 2;
  const radius = Math.min(renderWidth, renderHeight) * 0.35;

  const total = el.data.reduce((sum, d) => sum + d.value, 0);
  const colors = ['#3b82f6', '#ef4444', '#22c55e', '#f59e0b', '#8b5cf6', '#ec4899', '#06b6d4', '#84cc16'];

  const elements: React.ReactNode[] = [];
  let currentAngle = -90;

  el.data.forEach((d, i) => {
    const sliceAngle = (d.value / total) * 360;
    const endAngle = currentAngle + sliceAngle;
    const color = d.color || colors[i % colors.length];

    const path = describeSector(cx, cy, radius, currentAngle + 90, endAngle + 90);
    elements.push(
      <path key={`slice-${i}`} d={path} fill={color} stroke="#1a1a1a" strokeWidth={2} />
    );

    // Label
    const labelAngle = (currentAngle + sliceAngle / 2) * Math.PI / 180;
    const labelRadius = radius * 1.3;
    const labelX = cx + labelRadius * Math.cos(labelAngle);
    const labelY = cy + labelRadius * Math.sin(labelAngle);

    let labelText = d.label;
    if (el.showPercentages) {
      labelText += ` (${Math.round(d.value / total * 100)}%)`;
    } else if (el.showValues) {
      labelText += ` (${d.value})`;
    }

    elements.push(
      <text
        key={`label-${i}`}
        x={labelX}
        y={labelY}
        fill={DEFAULT_COLORS.text}
        fontSize={11}
        textAnchor={labelX > cx ? 'start' : 'end'}
        dominantBaseline="middle"
      >
        {labelText}
      </text>
    );

    currentAngle = endAngle;
  });

  return <g key={key}>{elements}</g>;
}

function renderBoxPlot(el: BoxPlotElement, key: string, renderWidth: number, renderHeight: number): React.ReactNode {
  const padding = 40;
  const plotY = renderHeight / 2;
  const boxHeight = 40;
  const axisMin = el.axisMin ?? el.min - (el.max - el.min) * 0.1;
  const axisMax = el.axisMax ?? el.max + (el.max - el.min) * 0.1;

  const scale = (val: number) => padding + ((val - axisMin) / (axisMax - axisMin)) * (renderWidth - 2 * padding);

  const elements: React.ReactNode[] = [];

  // Axis line
  elements.push(
    <line key="axis" x1={padding} y1={plotY + boxHeight} x2={renderWidth - padding} y2={plotY + boxHeight} stroke={DEFAULT_COLORS.stroke} strokeWidth={1} />
  );

  // Whiskers
  elements.push(
    <line key="left-whisker" x1={scale(el.min)} y1={plotY} x2={scale(el.q1)} y2={plotY} stroke={DEFAULT_COLORS.stroke} strokeWidth={2} />
  );
  elements.push(
    <line key="right-whisker" x1={scale(el.q3)} y1={plotY} x2={scale(el.max)} y2={plotY} stroke={DEFAULT_COLORS.stroke} strokeWidth={2} />
  );

  // Whisker caps
  elements.push(
    <line key="left-cap" x1={scale(el.min)} y1={plotY - 15} x2={scale(el.min)} y2={plotY + 15} stroke={DEFAULT_COLORS.stroke} strokeWidth={2} />
  );
  elements.push(
    <line key="right-cap" x1={scale(el.max)} y1={plotY - 15} x2={scale(el.max)} y2={plotY + 15} stroke={DEFAULT_COLORS.stroke} strokeWidth={2} />
  );

  // Box
  elements.push(
    <rect
      key="box"
      x={scale(el.q1)}
      y={plotY - boxHeight / 2}
      width={scale(el.q3) - scale(el.q1)}
      height={boxHeight}
      fill="rgba(59, 130, 246, 0.3)"
      stroke={DEFAULT_COLORS.accent}
      strokeWidth={2}
    />
  );

  // Median line
  elements.push(
    <line key="median" x1={scale(el.median)} y1={plotY - boxHeight / 2} x2={scale(el.median)} y2={plotY + boxHeight / 2} stroke={DEFAULT_COLORS.accent} strokeWidth={3} />
  );

  // Outliers
  el.outliers?.forEach((outlier, i) => {
    elements.push(
      <circle key={`outlier-${i}`} cx={scale(outlier)} cy={plotY} r={4} fill="none" stroke={DEFAULT_COLORS.accent} strokeWidth={2} />
    );
  });

  // Value labels
  [el.min, el.q1, el.median, el.q3, el.max].forEach((val, i) => {
    elements.push(
      <text key={`val-${i}`} x={scale(val)} y={plotY + boxHeight + 15} fill={DEFAULT_COLORS.text} fontSize={10} textAnchor="middle">{val}</text>
    );
  });

  if (el.label) {
    elements.push(
      <text key="label" x={padding} y={plotY - boxHeight} fill={DEFAULT_COLORS.text} fontSize={12}>{el.label}</text>
    );
  }

  return <g key={key}>{elements}</g>;
}

// 3D shape renderers (simplified 2D projections)
function render3DPrism(el: Prism3DElement, key: string, renderWidth: number, renderHeight: number): React.ReactNode {
  const cx = renderWidth / 2;
  const cy = renderHeight / 2;
  const w = el.width * 2;
  const h = el.height * 2;
  const d = el.depth * 1.5;
  const offset = d * 0.5;

  const elements: React.ReactNode[] = [];

  // Front face
  elements.push(
    <rect key="front" x={cx - w/2} y={cy - h/2 + offset} width={w} height={h} fill="rgba(59, 130, 246, 0.2)" stroke={DEFAULT_COLORS.stroke} strokeWidth={2} />
  );

  // Top face
  const topPoints = `${cx - w/2},${cy - h/2 + offset} ${cx - w/2 + offset},${cy - h/2} ${cx + w/2 + offset},${cy - h/2} ${cx + w/2},${cy - h/2 + offset}`;
  elements.push(
    <polygon key="top" points={topPoints} fill="rgba(59, 130, 246, 0.3)" stroke={DEFAULT_COLORS.stroke} strokeWidth={2} />
  );

  // Right face
  const rightPoints = `${cx + w/2},${cy - h/2 + offset} ${cx + w/2 + offset},${cy - h/2} ${cx + w/2 + offset},${cy + h/2} ${cx + w/2},${cy + h/2 + offset}`;
  elements.push(
    <polygon key="right" points={rightPoints} fill="rgba(59, 130, 246, 0.15)" stroke={DEFAULT_COLORS.stroke} strokeWidth={2} />
  );

  // Labels
  if (el.labels?.width) {
    elements.push(<text key="w-label" x={cx} y={cy + h/2 + offset + 20} fill={DEFAULT_COLORS.text} fontSize={12} textAnchor="middle">{el.labels.width}</text>);
  }
  if (el.labels?.height) {
    elements.push(<text key="h-label" x={cx - w/2 - 15} y={cy + offset} fill={DEFAULT_COLORS.text} fontSize={12} textAnchor="middle">{el.labels.height}</text>);
  }
  if (el.labels?.depth) {
    elements.push(<text key="d-label" x={cx + w/2 + offset/2 + 15} y={cy - h/2 + offset/2} fill={DEFAULT_COLORS.text} fontSize={12} textAnchor="middle">{el.labels.depth}</text>);
  }

  return <g key={key}>{elements}</g>;
}

function render3DCylinder(el: Cylinder3DElement, key: string, renderWidth: number, renderHeight: number): React.ReactNode {
  const cx = renderWidth / 2;
  const cy = renderHeight / 2;
  const r = el.radius * 2;
  const h = el.height * 2;

  const elements: React.ReactNode[] = [];

  // Body
  elements.push(
    <rect key="body" x={cx - r} y={cy - h/2 + 10} width={r * 2} height={h - 20} fill="rgba(59, 130, 246, 0.2)" stroke="none" />
  );

  // Left and right edges
  elements.push(<line key="left" x1={cx - r} y1={cy - h/2 + 10} x2={cx - r} y2={cy + h/2 - 10} stroke={DEFAULT_COLORS.stroke} strokeWidth={2} />);
  elements.push(<line key="right" x1={cx + r} y1={cy - h/2 + 10} x2={cx + r} y2={cy + h/2 - 10} stroke={DEFAULT_COLORS.stroke} strokeWidth={2} />);

  // Top ellipse
  elements.push(
    <ellipse key="top" cx={cx} cy={cy - h/2 + 10} rx={r} ry={r * 0.3} fill="rgba(59, 130, 246, 0.3)" stroke={DEFAULT_COLORS.stroke} strokeWidth={2} />
  );

  // Bottom ellipse (front half only)
  elements.push(
    <path key="bottom" d={`M ${cx - r} ${cy + h/2 - 10} A ${r} ${r * 0.3} 0 0 0 ${cx + r} ${cy + h/2 - 10}`} fill="none" stroke={DEFAULT_COLORS.stroke} strokeWidth={2} />
  );
  elements.push(
    <path key="bottom-back" d={`M ${cx - r} ${cy + h/2 - 10} A ${r} ${r * 0.3} 0 0 1 ${cx + r} ${cy + h/2 - 10}`} fill="none" stroke={DEFAULT_COLORS.stroke} strokeWidth={2} strokeDasharray="4,4" />
  );

  // Labels
  if (el.labels?.radius) {
    elements.push(<line key="r-line" x1={cx} y1={cy - h/2 + 10} x2={cx + r} y2={cy - h/2 + 10} stroke={DEFAULT_COLORS.stroke} strokeWidth={1} strokeDasharray="4,2" />);
    elements.push(<text key="r-label" x={cx + r/2} y={cy - h/2 - 5} fill={DEFAULT_COLORS.text} fontSize={12} textAnchor="middle">{el.labels.radius}</text>);
  }
  if (el.labels?.height) {
    elements.push(<text key="h-label" x={cx + r + 20} y={cy} fill={DEFAULT_COLORS.text} fontSize={12} textAnchor="middle">{el.labels.height}</text>);
  }

  return <g key={key}>{elements}</g>;
}

function render3DCone(el: Cone3DElement, key: string, renderWidth: number, renderHeight: number): React.ReactNode {
  const cx = renderWidth / 2;
  const cy = renderHeight / 2;
  const r = el.radius * 2;
  const h = el.height * 2;

  const elements: React.ReactNode[] = [];

  // Cone body
  elements.push(
    <polygon key="body" points={`${cx},${cy - h/2} ${cx - r},${cy + h/2 - 10} ${cx + r},${cy + h/2 - 10}`} fill="rgba(59, 130, 246, 0.2)" stroke={DEFAULT_COLORS.stroke} strokeWidth={2} />
  );

  // Base ellipse
  elements.push(
    <ellipse key="base" cx={cx} cy={cy + h/2 - 10} rx={r} ry={r * 0.3} fill="rgba(59, 130, 246, 0.15)" stroke={DEFAULT_COLORS.stroke} strokeWidth={2} />
  );

  // Labels
  if (el.labels?.radius) {
    elements.push(<line key="r-line" x1={cx} y1={cy + h/2 - 10} x2={cx + r} y2={cy + h/2 - 10} stroke={DEFAULT_COLORS.stroke} strokeWidth={1} strokeDasharray="4,2" />);
    elements.push(<text key="r-label" x={cx + r/2} y={cy + h/2 + 15} fill={DEFAULT_COLORS.text} fontSize={12} textAnchor="middle">{el.labels.radius}</text>);
  }
  if (el.labels?.height) {
    elements.push(<line key="h-line" x1={cx} y1={cy - h/2} x2={cx} y2={cy + h/2 - 10} stroke={DEFAULT_COLORS.stroke} strokeWidth={1} strokeDasharray="4,2" />);
    elements.push(<text key="h-label" x={cx + 15} y={cy} fill={DEFAULT_COLORS.text} fontSize={12} textAnchor="start">{el.labels.height}</text>);
  }

  return <g key={key}>{elements}</g>;
}

function render3DSphere(el: Sphere3DElement, key: string, renderWidth: number, renderHeight: number): React.ReactNode {
  const cx = renderWidth / 2;
  const cy = renderHeight / 2;
  const r = el.radius * 2.5;

  const elements: React.ReactNode[] = [];

  // Main circle
  elements.push(
    <circle key="sphere" cx={cx} cy={cy} r={r} fill="rgba(59, 130, 246, 0.2)" stroke={DEFAULT_COLORS.stroke} strokeWidth={2} />
  );

  // Equator ellipse
  elements.push(
    <ellipse key="equator" cx={cx} cy={cy} rx={r} ry={r * 0.3} fill="none" stroke={DEFAULT_COLORS.stroke} strokeWidth={1} strokeDasharray="4,4" />
  );

  // Labels
  if (el.labels?.radius) {
    elements.push(<line key="r-line" x1={cx} y1={cy} x2={cx + r} y2={cy} stroke={DEFAULT_COLORS.stroke} strokeWidth={1} strokeDasharray="4,2" />);
    elements.push(<text key="r-label" x={cx + r/2} y={cy - 10} fill={DEFAULT_COLORS.text} fontSize={12} textAnchor="middle">{el.labels.radius}</text>);
  }

  return <g key={key}>{elements}</g>;
}

function render3DPyramid(el: Pyramid3DElement, key: string, renderWidth: number, renderHeight: number): React.ReactNode {
  const cx = renderWidth / 2;
  const cy = renderHeight / 2;
  const w = el.baseWidth * 2;
  const h = el.height * 2;
  const offset = w * 0.3;

  const elements: React.ReactNode[] = [];

  // Apex point
  const apex = { x: cx, y: cy - h/2 };

  // Base corners (shown in 3D perspective)
  const frontLeft = { x: cx - w/2, y: cy + h/2 };
  const frontRight = { x: cx + w/2, y: cy + h/2 };
  const backLeft = { x: cx - w/2 + offset, y: cy + h/2 - offset * 0.6 };
  const backRight = { x: cx + w/2 + offset, y: cy + h/2 - offset * 0.6 };

  // Front face
  elements.push(
    <polygon key="front" points={`${apex.x},${apex.y} ${frontLeft.x},${frontLeft.y} ${frontRight.x},${frontRight.y}`} fill="rgba(59, 130, 246, 0.25)" stroke={DEFAULT_COLORS.stroke} strokeWidth={2} />
  );

  // Right face
  elements.push(
    <polygon key="right" points={`${apex.x},${apex.y} ${frontRight.x},${frontRight.y} ${backRight.x},${backRight.y}`} fill="rgba(59, 130, 246, 0.15)" stroke={DEFAULT_COLORS.stroke} strokeWidth={2} />
  );

  // Back edges (dashed)
  elements.push(
    <line key="back-left" x1={apex.x} y1={apex.y} x2={backLeft.x} y2={backLeft.y} stroke={DEFAULT_COLORS.stroke} strokeWidth={2} strokeDasharray="4,4" />
  );
  elements.push(
    <line key="back-base" x1={backLeft.x} y1={backLeft.y} x2={backRight.x} y2={backRight.y} stroke={DEFAULT_COLORS.stroke} strokeWidth={2} strokeDasharray="4,4" />
  );
  elements.push(
    <line key="left-base" x1={frontLeft.x} y1={frontLeft.y} x2={backLeft.x} y2={backLeft.y} stroke={DEFAULT_COLORS.stroke} strokeWidth={2} strokeDasharray="4,4" />
  );

  // Labels
  if (el.labels?.baseWidth) {
    elements.push(<text key="w-label" x={cx} y={cy + h/2 + 20} fill={DEFAULT_COLORS.text} fontSize={12} textAnchor="middle">{el.labels.baseWidth}</text>);
  }
  if (el.labels?.height) {
    elements.push(<line key="h-line" x1={cx} y1={apex.y} x2={cx} y2={cy + h/2} stroke={DEFAULT_COLORS.stroke} strokeWidth={1} strokeDasharray="4,2" />);
    elements.push(<text key="h-label" x={cx + 15} y={cy} fill={DEFAULT_COLORS.text} fontSize={12} textAnchor="start">{el.labels.height}</text>);
  }

  return <g key={key}>{elements}</g>;
}

// ============================================
// Main Component
// ============================================

interface DiagramRendererProps {
  spec: DiagramSpec;
  className?: string;
  maxWidth?: number;
  maxHeight?: number;
  darkMode?: boolean;
}

// ============================================
// Error Boundary for Diagram Rendering
// ============================================

interface DiagramErrorBoundaryProps {
  children: ReactNode;
  fallback?: ReactNode;
}

interface DiagramErrorBoundaryState {
  hasError: boolean;
  error?: Error;
}

class DiagramErrorBoundary extends Component<DiagramErrorBoundaryProps, DiagramErrorBoundaryState> {
  constructor(props: DiagramErrorBoundaryProps) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error: Error): DiagramErrorBoundaryState {
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo): void {
    console.error('Diagram rendering error:', error, errorInfo);
  }

  render(): ReactNode {
    if (this.state.hasError) {
      return this.props.fallback || (
        <div className="flex flex-col items-center justify-center p-4 bg-gray-100 border border-gray-300 rounded-lg min-h-[200px]">
          <svg className="w-12 h-12 text-gray-400 mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
          </svg>
          <span className="text-sm text-gray-500">Diagram could not be rendered</span>
        </div>
      );
    }

    return this.props.children;
  }
}

// ============================================
// Fallback Component for Invalid Diagrams
// ============================================

function DiagramFallback({ message }: { message?: string }) {
  return (
    <div className="flex flex-col items-center justify-center p-4 bg-gray-50 border-2 border-dashed border-gray-300 rounded-lg min-h-[150px]">
      <svg className="w-10 h-10 text-gray-400 mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 17V7m0 10a2 2 0 01-2 2H5a2 2 0 01-2-2V7a2 2 0 012-2h2a2 2 0 012 2m0 10a2 2 0 002 2h2a2 2 0 002-2M9 7a2 2 0 012-2h2a2 2 0 012 2m0 10V7m0 10a2 2 0 002 2h2a2 2 0 002-2V7a2 2 0 00-2-2h-2a2 2 0 00-2 2" />
      </svg>
      <span className="text-sm text-gray-500 text-center">
        {message || 'Diagram not available'}
      </span>
    </div>
  );
}

// ============================================
// Main Component
// ============================================

function DiagramRendererInner({ spec, className, maxWidth = 500, maxHeight = 400, darkMode = false }: DiagramRendererProps) {
  // Validate and sanitize the diagram spec
  const { sanitizedSpec } = useMemo(() => validateAndSanitizeDiagram(spec), [spec]);

  // Select color scheme based on dark mode
  const colors = darkMode ? DARK_MODE_COLORS : DEFAULT_COLORS;

  const { renderWidth, renderHeight, transform, scale, logicalBounds } = useMemo(() => {
    // Determine logical bounds from elements or spec
    let xMin = 0, xMax = 10, yMin = 0, yMax = 10;

    if (sanitizedSpec.width && sanitizedSpec.height) {
      xMax = sanitizedSpec.width;
      yMax = sanitizedSpec.height;
    }

    // Check for axes to determine bounds
    const axesEl = sanitizedSpec.elements.find(el => el.type === 'axes') as AxesElement | undefined;
    if (axesEl) {
      xMin = axesEl.xMin;
      xMax = axesEl.xMax;
      yMin = axesEl.yMin;
      yMax = axesEl.yMax;
    }

    const padding = sanitizedSpec.padding || 30;
    const logicalWidth = xMax - xMin;
    const logicalHeight = yMax - yMin;

    // Calculate render dimensions maintaining aspect ratio
    const aspectRatio = logicalWidth / logicalHeight;
    let renderWidth = maxWidth;
    let renderHeight = maxWidth / aspectRatio;

    if (renderHeight > maxHeight) {
      renderHeight = maxHeight;
      renderWidth = maxHeight * aspectRatio;
    }

    // Scale factor
    const scaleX = (renderWidth - 2 * padding) / logicalWidth;
    const scaleY = (renderHeight - 2 * padding) / logicalHeight;
    const scale = Math.min(scaleX, scaleY);

    // Transform function: logical coords to render coords (rounded for performance)
    const transform = (p: Point): Point => ({
      x: round(padding + (p.x - xMin) * scale),
      y: round(renderHeight - padding - (p.y - yMin) * scale), // Flip Y axis
    });

    return {
      renderWidth,
      renderHeight,
      transform,
      scale,
      logicalBounds: { xMin, xMax, yMin, yMax },
    };
  }, [sanitizedSpec, maxWidth, maxHeight]);

  const renderElement = (el: DiagramElement, index: number): React.ReactNode => {
    const key = `el-${index}`;

    switch (el.type) {
      case 'point':
        return renderPoint(el, key, transform, scale);
      case 'line':
        return renderLine(el, key, transform);
      case 'polygon':
        return renderPolygon(el, key, transform);
      case 'circle':
        return renderCircle(el, key, transform, scale);
      case 'arc':
        return renderArc(el, key, transform, scale);
      case 'angle-marker':
        return renderAngleMarker(el, key, transform, scale);
      case 'text':
        return renderText(el, key, transform);
      case 'arrow':
        return renderArrow(el, key, transform);
      case 'curve':
        return renderCurve(el, key, transform, logicalBounds);
      case 'rectangle':
        return renderRectangle(el, key, transform, scale);
      case 'grid':
        return renderGrid(el, key, transform);
      case 'axes':
        return renderAxes(el, key, transform, renderWidth, renderHeight);
      case 'tree-diagram':
        return renderTreeDiagram(el, key, renderWidth, renderHeight);
      case 'venn-diagram':
        return renderVennDiagram(el, key, renderWidth, renderHeight);
      case 'number-line':
        return renderNumberLine(el, key, renderWidth, renderHeight);
      case 'bar-chart':
        return renderBarChart(el, key, renderWidth, renderHeight);
      case 'pie-chart':
        return renderPieChart(el, key, renderWidth, renderHeight);
      case 'box-plot':
        return renderBoxPlot(el, key, renderWidth, renderHeight);
      case 'prism-3d':
        return render3DPrism(el, key, renderWidth, renderHeight);
      case 'cylinder-3d':
        return render3DCylinder(el, key, renderWidth, renderHeight);
      case 'cone-3d':
        return render3DCone(el, key, renderWidth, renderHeight);
      case 'sphere-3d':
        return render3DSphere(el, key, renderWidth, renderHeight);
      case 'pyramid-3d':
        return render3DPyramid(el, key, renderWidth, renderHeight);
      default:
        return null;
    }
  };

  return (
    <div className={className}>
      <svg
        width={renderWidth}
        height={renderHeight + (sanitizedSpec.showNotAccurate ? 25 : 0)}
        viewBox={`0 0 ${renderWidth} ${renderHeight + (sanitizedSpec.showNotAccurate ? 25 : 0)}`}
        className="mx-auto"
      >
        {/* Definitions for markers */}
        <defs>
          <marker
            id="arrowhead"
            markerWidth="10"
            markerHeight="7"
            refX="9"
            refY="3.5"
            orient="auto"
          >
            <polygon points="0 0, 10 3.5, 0 7" fill={DEFAULT_COLORS.stroke} />
          </marker>
          <marker
            id="arrowhead-reverse"
            markerWidth="10"
            markerHeight="7"
            refX="1"
            refY="3.5"
            orient="auto"
          >
            <polygon points="10 0, 0 3.5, 10 7" fill={DEFAULT_COLORS.stroke} />
          </marker>
        </defs>

        {/* Background */}
        {sanitizedSpec.background && (
          <rect x={0} y={0} width={renderWidth} height={renderHeight} fill={sanitizedSpec.background} />
        )}

        {/* Render all elements */}
        {sanitizedSpec.elements.map((el, i) => renderElement(el, i))}

        {/* "Not accurately drawn" disclaimer */}
        {sanitizedSpec.showNotAccurate && (
          <text
            x={renderWidth / 2}
            y={renderHeight + 18}
            fill="#666666"
            fontSize={11}
            textAnchor="middle"
            fontStyle="italic"
          >
            {sanitizedSpec.disclaimer || 'Diagram NOT accurately drawn'}
          </text>
        )}
      </svg>
    </div>
  );
}

// ============================================
// Exported Component with Error Boundary
// ============================================

export function DiagramRenderer({ spec, className, maxWidth = 500, maxHeight = 400, darkMode = false }: DiagramRendererProps) {
  // Handle completely invalid/missing specs
  if (!spec || !spec.elements || spec.elements.length === 0) {
    return <DiagramFallback message="No diagram data available" />;
  }

  return (
    <DiagramErrorBoundary>
      <DiagramRendererInner
        spec={spec}
        className={className}
        maxWidth={maxWidth}
        maxHeight={maxHeight}
        darkMode={darkMode}
      />
    </DiagramErrorBoundary>
  );
}

export default DiagramRenderer;
