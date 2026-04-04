/**
 * Comprehensive diagram templates for all subjects
 * Ensures diverse and reliable diagram generation
 */

import { DiagramSpec } from '@/types/diagram';
import { Subject, QuestionType, Difficulty } from '@/types';
import { 
  MATHS_DIAGRAM_TEMPLATES_EXPANDED,
  PHYSICS_DIAGRAM_TEMPLATES_EXPANDED,
  CHEMISTRY_DIAGRAM_TEMPLATES_EXPANDED,
  BIOLOGY_DIAGRAM_TEMPLATES_EXPANDED,
  GEOGRAPHY_DIAGRAM_TEMPLATES_EXPANDED,
  HISTORY_DIAGRAM_TEMPLATES_EXPANDED,
  ECONOMICS_DIAGRAM_TEMPLATES_EXPANDED,
  BUSINESS_DIAGRAM_TEMPLATES_EXPANDED,
  PSYCHOLOGY_DIAGRAM_TEMPLATES_EXPANDED,
  ENGLISH_LITERATURE_DIAGRAM_TEMPLATES_EXPANDED,
  FURTHER_MATHS_DIAGRAM_TEMPLATES_EXPANDED,
} from './diagramTemplatesExpanded';

export interface DiagramTemplate {
  id: string;
  subject: Subject;
  type: string;
  name: string;
  description: string;
  requiredElements: string[];
  optionalElements: string[];
  complexity: 1 | 2 | 3 | 4 | 5;
  generateSpec: (params: any) => DiagramSpec;
}

/**
 * MATHEMATICS DIAGRAM TEMPLATES
 */
export const MATHS_DIAGRAM_TEMPLATES: DiagramTemplate[] = [
  {
    id: 'maths-coordinate-plane',
    subject: 'maths',
    type: 'coordinate-plane',
    name: 'Coordinate Plane',
    description: 'Standard Cartesian coordinate system with axes',
    requiredElements: ['x-axis', 'y-axis', 'origin', 'grid'],
    optionalElements: ['points', 'lines', 'curves', 'regions'],
    complexity: 2,
    generateSpec: (params) => ({
      width: 400,
      height: 400,
      elements: [
        {
          type: 'axes',
          origin: { x: 200, y: 200 },
          xRange: params.xRange || [-10, 10],
          yRange: params.yRange || [-10, 10],
          showGrid: true,
          gridStep: params.gridStep || 1,
        },
        ...(params.points || []),
        ...(params.lines || []),
        ...(params.curves || []),
      ],
      title: params.title || 'Coordinate Plane',
      description: 'Cartesian coordinate system for graphing',
    }),
  },
  {
    id: 'maths-triangle',
    subject: 'maths',
    type: 'triangle',
    name: 'Triangle',
    description: 'Various types of triangles with labels',
    requiredElements: ['vertices', 'sides'],
    optionalElements: ['angles', 'height', 'median', 'bisector'],
    complexity: 2,
    generateSpec: (params) => ({
      width: 300,
      height: 250,
      elements: [
        {
          type: 'polygon',
          vertices: params.vertices || [
            { x: 50, y: 200, label: 'A' },
            { x: 250, y: 200, label: 'B' },
            { x: 150, y: 50, label: 'C' },
          ],
          sideLabels: params.sideLabels || [],
          fill: 'none',
          stroke: '#000',
          strokeWidth: 2,
        },
        ...(params.angles || []),
        ...(params.annotations || []),
      ],
      title: params.title || 'Triangle',
      showNotAccurate: true,
    }),
  },
  {
    id: 'maths-circle',
    subject: 'maths',
    type: 'circle',
    name: 'Circle',
    description: 'Circle with radius, diameter, chords, tangents',
    requiredElements: ['center', 'radius'],
    optionalElements: ['diameter', 'chord', 'tangent', 'arc', 'sector'],
    complexity: 2,
    generateSpec: (params) => ({
      width: 300,
      height: 300,
      elements: [
        {
          type: 'circle',
          center: params.center || { x: 150, y: 150 },
          radius: params.radius || 100,
          fill: 'none',
          stroke: '#000',
          strokeWidth: 2,
        },
        ...(params.radii || []),
        ...(params.chords || []),
        ...(params.tangents || []),
        ...(params.labels || []),
      ],
      title: params.title || 'Circle',
    }),
  },
  {
    id: 'maths-bar-chart',
    subject: 'maths',
    type: 'bar-chart',
    name: 'Bar Chart',
    description: 'Statistical bar chart for data representation',
    requiredElements: ['bars', 'axes', 'labels'],
    optionalElements: ['title', 'legend', 'values'],
    complexity: 2,
    generateSpec: (params) => ({
      width: 400,
      height: 300,
      elements: [
        {
          type: 'bar-chart',
          data: params.data || [],
          barWidth: 40,
          barGap: 20,
          showValues: true,
          xLabel: params.xLabel,
          yLabel: params.yLabel,
        },
      ],
      title: params.title || 'Bar Chart',
    }),
  },
  {
    id: 'maths-venn-diagram',
    subject: 'maths',
    type: 'venn-diagram',
    name: 'Venn Diagram',
    description: 'Set theory Venn diagrams',
    requiredElements: ['circles', 'labels'],
    optionalElements: ['values', 'intersection', 'universe'],
    complexity: 2,
    generateSpec: (params) => ({
      width: 350,
      height: 250,
      elements: [
        {
          type: 'venn-diagram',
          circles: params.circles || 2,
          labels: params.labels || ['A', 'B'],
          values: params.values || [],
          showUniverse: params.showUniverse || false,
        },
      ],
      title: params.title || 'Venn Diagram',
    }),
  },
  {
    id: 'maths-tree-diagram',
    subject: 'maths',
    type: 'tree-diagram',
    name: 'Probability Tree',
    description: 'Tree diagram for probability',
    requiredElements: ['root', 'branches', 'probabilities'],
    optionalElements: ['outcomes', 'calculations'],
    complexity: 3,
    generateSpec: (params) => ({
      width: 400,
      height: 300,
      elements: [
        {
          type: 'tree-diagram',
          root: { x: 50, y: 150, label: params.rootLabel || 'Start' },
          branches: params.branches || [],
          showProbabilities: true,
          showOutcomes: params.showOutcomes || false,
        },
      ],
      title: params.title || 'Probability Tree',
    }),
  },
  {
    id: 'maths-3d-shape',
    subject: 'maths',
    type: '3d-shape',
    name: '3D Shape',
    description: 'Three-dimensional shapes with labels',
    requiredElements: ['shape-type', 'dimensions'],
    optionalElements: ['hidden-edges', 'labels', 'measurements'],
    complexity: 3,
    generateSpec: (params) => ({
      width: 300,
      height: 300,
      elements: [
        {
          type: params.shapeType || 'cube',
          dimensions: params.dimensions || { width: 100, height: 100, depth: 100 },
          position: { x: 150, y: 150 },
          showHiddenEdges: true,
          labels: params.labels || [],
        },
      ],
      title: params.title || '3D Shape',
      showNotAccurate: true,
    }),
  },
];

/**
 * PHYSICS DIAGRAM TEMPLATES
 */
export const PHYSICS_DIAGRAM_TEMPLATES: DiagramTemplate[] = [
  {
    id: 'physics-force-diagram',
    subject: 'physics',
    type: 'force-diagram',
    name: 'Force Diagram',
    description: 'Free body diagram showing forces',
    requiredElements: ['object', 'forces'],
    optionalElements: ['angles', 'components', 'resultant'],
    complexity: 3,
    generateSpec: (params) => ({
      width: 350,
      height: 350,
      elements: [
        {
          type: 'rectangle',
          x: 150,
          y: 150,
          width: params.objectWidth || 50,
          height: params.objectHeight || 50,
          fill: '#ccc',
          stroke: '#000',
          label: params.objectLabel || 'Object',
        },
        ...(params.forces || []).map((force: any) => ({
          type: 'arrow',
          from: { x: 175, y: 175 },
          to: force.to,
          strokeWidth: 3,
          color: force.color || '#ff0000',
          label: force.label,
        })),
      ],
      title: params.title || 'Force Diagram',
      description: 'Forces acting on an object',
    }),
  },
  {
    id: 'physics-circuit-diagram',
    subject: 'physics',
    type: 'circuit-diagram',
    name: 'Circuit Diagram',
    description: 'Electrical circuit with components',
    requiredElements: ['battery', 'wires', 'components'],
    optionalElements: ['meters', 'switches', 'labels'],
    complexity: 3,
    generateSpec: (params) => ({
      width: 400,
      height: 300,
      elements: [
        {
          type: 'circuit',
          components: params.components || [
            { type: 'battery', position: { x: 50, y: 150 }, voltage: '12V' },
            { type: 'resistor', position: { x: 200, y: 50 }, value: '10Ω' },
            { type: 'bulb', position: { x: 350, y: 150 } },
          ],
          wires: params.wires || [],
          showCurrent: params.showCurrent || false,
        },
      ],
      title: params.title || 'Circuit Diagram',
    }),
  },
  {
    id: 'physics-wave-diagram',
    subject: 'physics',
    type: 'wave-diagram',
    name: 'Wave Diagram',
    description: 'Transverse or longitudinal wave',
    requiredElements: ['wave', 'amplitude', 'wavelength'],
    optionalElements: ['frequency', 'period', 'phase'],
    complexity: 2,
    generateSpec: (params) => ({
      width: 400,
      height: 200,
      elements: [
        {
          type: 'wave',
          waveType: params.waveType || 'sine',
          amplitude: params.amplitude || 50,
          wavelength: params.wavelength || 100,
          cycles: params.cycles || 2,
          showLabels: true,
        },
      ],
      title: params.title || 'Wave Diagram',
    }),
  },
  {
    id: 'physics-ray-diagram',
    subject: 'physics',
    type: 'ray-diagram',
    name: 'Ray Diagram',
    description: 'Light rays through lenses or mirrors',
    requiredElements: ['optical-element', 'rays', 'object'],
    optionalElements: ['image', 'focal-points', 'angles'],
    complexity: 3,
    generateSpec: (params) => ({
      width: 450,
      height: 300,
      elements: [
        {
          type: params.opticalType || 'convex-lens',
          position: { x: 225, y: 150 },
          focalLength: params.focalLength || 50,
        },
        {
          type: 'object',
          position: params.objectPosition || { x: 100, y: 100 },
          height: 30,
        },
        ...(params.rays || []),
      ],
      title: params.title || 'Ray Diagram',
    }),
  },
  {
    id: 'physics-motion-graph',
    subject: 'physics',
    type: 'motion-graph',
    name: 'Motion Graph',
    description: 'Distance-time or velocity-time graph',
    requiredElements: ['axes', 'curve', 'labels'],
    optionalElements: ['gradients', 'areas', 'points'],
    complexity: 2,
    generateSpec: (params) => ({
      width: 400,
      height: 300,
      elements: [
        {
          type: 'axes',
          origin: { x: 50, y: 250 },
          xLabel: params.xLabel || 'Time (s)',
          yLabel: params.yLabel || 'Distance (m)',
        },
        {
          type: 'line-graph',
          points: params.points || [],
          smooth: params.smooth || false,
          color: '#0066cc',
        },
      ],
      title: params.title || 'Motion Graph',
    }),
  },
];

/**
 * CHEMISTRY DIAGRAM TEMPLATES
 */
export const CHEMISTRY_DIAGRAM_TEMPLATES: DiagramTemplate[] = [
  {
    id: 'chemistry-molecular-structure',
    subject: 'chemistry',
    type: 'molecular-structure',
    name: 'Molecular Structure',
    description: 'Structural formula of molecules',
    requiredElements: ['atoms', 'bonds'],
    optionalElements: ['charges', 'lone-pairs', '3d-orientation'],
    complexity: 3,
    generateSpec: (params) => ({
      width: 350,
      height: 300,
      elements: [
        {
          type: 'molecule',
          atoms: params.atoms || [],
          bonds: params.bonds || [],
          showHydrogens: params.showHydrogens !== false,
          show3D: params.show3D || false,
        },
      ],
      title: params.title || 'Molecular Structure',
    }),
  },
  {
    id: 'chemistry-apparatus',
    subject: 'chemistry',
    type: 'apparatus',
    name: 'Lab Apparatus',
    description: 'Chemistry laboratory equipment setup',
    requiredElements: ['equipment', 'connections'],
    optionalElements: ['labels', 'contents', 'measurements'],
    complexity: 3,
    generateSpec: (params) => ({
      width: 400,
      height: 350,
      elements: params.equipment || [
        {
          type: 'flask',
          position: { x: 200, y: 200 },
          size: 'large',
          contents: params.contents,
        },
        {
          type: 'burette',
          position: { x: 200, y: 50 },
          volume: '50ml',
        },
      ],
      title: params.title || 'Apparatus Setup',
    }),
  },
  {
    id: 'chemistry-energy-diagram',
    subject: 'chemistry',
    type: 'energy-diagram',
    name: 'Energy Level Diagram',
    description: 'Reaction energy profile',
    requiredElements: ['reactants', 'products', 'activation-energy'],
    optionalElements: ['transition-state', 'enthalpy-change', 'catalyst'],
    complexity: 2,
    generateSpec: (params) => ({
      width: 400,
      height: 300,
      elements: [
        {
          type: 'energy-profile',
          reactants: params.reactants || { level: 50, label: 'Reactants' },
          products: params.products || { level: 100, label: 'Products' },
          activationEnergy: params.activationEnergy || 150,
          showEnthalpy: true,
        },
      ],
      title: params.title || 'Energy Diagram',
    }),
  },
  {
    id: 'chemistry-electron-config',
    subject: 'chemistry',
    type: 'electron-configuration',
    name: 'Electron Configuration',
    description: 'Electron shells and orbitals',
    requiredElements: ['nucleus', 'shells', 'electrons'],
    optionalElements: ['orbitals', 'quantum-numbers'],
    complexity: 2,
    generateSpec: (params) => ({
      width: 300,
      height: 300,
      elements: [
        {
          type: 'atom',
          element: params.element || 'C',
          showShells: true,
          showElectrons: true,
          electronConfig: params.config || '2,4',
        },
      ],
      title: params.title || 'Electron Configuration',
    }),
  },
  {
    id: 'chemistry-titration-curve',
    subject: 'chemistry',
    type: 'titration-curve',
    name: 'Titration Curve',
    description: 'pH vs volume curve for titration',
    requiredElements: ['curve', 'axes', 'equivalence-point'],
    optionalElements: ['buffer-regions', 'indicators'],
    complexity: 3,
    generateSpec: (params) => ({
      width: 400,
      height: 300,
      elements: [
        {
          type: 'graph',
          xAxis: { label: 'Volume (ml)', range: [0, 50] },
          yAxis: { label: 'pH', range: [0, 14] },
          curve: params.curve || 'strong-acid-strong-base',
          equivalencePoint: params.equivalencePoint || { x: 25, y: 7 },
        },
      ],
      title: params.title || 'Titration Curve',
    }),
  },
];

/**
 * BIOLOGY DIAGRAM TEMPLATES
 */
export const BIOLOGY_DIAGRAM_TEMPLATES: DiagramTemplate[] = [
  {
    id: 'biology-cell-diagram',
    subject: 'biology',
    type: 'cell-diagram',
    name: 'Cell Structure',
    description: 'Animal or plant cell with organelles',
    requiredElements: ['cell-membrane', 'nucleus', 'cytoplasm'],
    optionalElements: ['organelles', 'labels', 'scale'],
    complexity: 3,
    generateSpec: (params) => ({
      width: 400,
      height: 350,
      elements: [
        {
          type: 'cell',
          cellType: params.cellType || 'animal',
          organelles: params.organelles || [
            'nucleus', 'mitochondria', 'ribosomes', 'endoplasmic-reticulum'
          ],
          showLabels: true,
          magnification: params.magnification || '×400',
        },
      ],
      title: params.title || 'Cell Structure',
    }),
  },
  {
    id: 'biology-food-web',
    subject: 'biology',
    type: 'food-web',
    name: 'Food Web',
    description: 'Ecological food web relationships',
    requiredElements: ['organisms', 'arrows'],
    optionalElements: ['trophic-levels', 'energy-values'],
    complexity: 3,
    generateSpec: (params) => ({
      width: 450,
      height: 400,
      elements: [
        {
          type: 'food-web',
          organisms: params.organisms || [],
          connections: params.connections || [],
          showTrophicLevels: params.showTrophicLevels || false,
        },
      ],
      title: params.title || 'Food Web',
    }),
  },
  {
    id: 'biology-heart-diagram',
    subject: 'biology',
    type: 'anatomy',
    name: 'Heart Anatomy',
    description: 'Human heart structure',
    requiredElements: ['chambers', 'valves', 'vessels'],
    optionalElements: ['blood-flow', 'labels'],
    complexity: 4,
    generateSpec: (params) => ({
      width: 350,
      height: 400,
      elements: [
        {
          type: 'heart',
          showChambers: true,
          showValves: true,
          showVessels: true,
          showBloodFlow: params.showBloodFlow || false,
          labels: params.labels !== false,
        },
      ],
      title: params.title || 'Heart Structure',
    }),
  },
  {
    id: 'biology-microscopy',
    subject: 'biology',
    type: 'microscopy',
    name: 'Microscope View',
    description: 'View through microscope',
    requiredElements: ['specimen', 'field-of-view'],
    optionalElements: ['scale', 'magnification', 'structures'],
    complexity: 2,
    generateSpec: (params) => ({
      width: 300,
      height: 300,
      elements: [
        {
          type: 'microscope-view',
          specimen: params.specimen || 'onion-cells',
          magnification: params.magnification || '×100',
          structures: params.structures || [],
          showScale: true,
        },
      ],
      title: params.title || 'Microscope View',
    }),
  },
  {
    id: 'biology-genetic-cross',
    subject: 'biology',
    type: 'genetic-cross',
    name: 'Genetic Cross',
    description: 'Punnett square or genetic diagram',
    requiredElements: ['parents', 'offspring', 'alleles'],
    optionalElements: ['phenotypes', 'ratios'],
    complexity: 2,
    generateSpec: (params) => ({
      width: 350,
      height: 350,
      elements: [
        {
          type: 'punnett-square',
          parent1: params.parent1 || 'Aa',
          parent2: params.parent2 || 'Aa',
          showPhenotypes: params.showPhenotypes || false,
          showRatios: true,
        },
      ],
      title: params.title || 'Genetic Cross',
    }),
  },
];

/**
 * GEOGRAPHY DIAGRAM TEMPLATES
 */
export const GEOGRAPHY_DIAGRAM_TEMPLATES: DiagramTemplate[] = [
  {
    id: 'geography-map',
    subject: 'geography',
    type: 'map',
    name: 'Geographic Map',
    description: 'Map with features and scale',
    requiredElements: ['boundaries', 'scale', 'north-arrow'],
    optionalElements: ['contours', 'symbols', 'grid-references'],
    complexity: 3,
    generateSpec: (params) => ({
      width: 450,
      height: 350,
      elements: [
        {
          type: 'map',
          region: params.region || 'generic',
          features: params.features || [],
          scale: params.scale || '1:50000',
          showNorth: true,
          showGrid: params.showGrid || false,
        },
      ],
      title: params.title || 'Map',
    }),
  },
  {
    id: 'geography-cross-section',
    subject: 'geography',
    type: 'cross-section',
    name: 'Cross Section',
    description: 'Geological or river cross section',
    requiredElements: ['profile', 'layers', 'labels'],
    optionalElements: ['annotations', 'measurements'],
    complexity: 3,
    generateSpec: (params) => ({
      width: 450,
      height: 250,
      elements: [
        {
          type: 'cross-section',
          profile: params.profile || 'river-valley',
          layers: params.layers || [],
          showLabels: true,
          verticalExaggeration: params.exaggeration || 2,
        },
      ],
      title: params.title || 'Cross Section',
    }),
  },
  {
    id: 'geography-climate-graph',
    subject: 'geography',
    type: 'climate-graph',
    name: 'Climate Graph',
    description: 'Temperature and precipitation graph',
    requiredElements: ['temperature-line', 'precipitation-bars', 'axes'],
    optionalElements: ['averages', 'seasons'],
    complexity: 2,
    generateSpec: (params) => ({
      width: 400,
      height: 300,
      elements: [
        {
          type: 'climate-graph',
          temperature: params.temperature || [],
          precipitation: params.precipitation || [],
          months: ['J','F','M','A','M','J','J','A','S','O','N','D'],
          showAverages: params.showAverages || false,
        },
      ],
      title: params.title || 'Climate Graph',
    }),
  },
  {
    id: 'geography-population-pyramid',
    subject: 'geography',
    type: 'population-pyramid',
    name: 'Population Pyramid',
    description: 'Age-sex population structure',
    requiredElements: ['age-groups', 'male-bars', 'female-bars'],
    optionalElements: ['percentages', 'dependency-ratio'],
    complexity: 2,
    generateSpec: (params) => ({
      width: 400,
      height: 350,
      elements: [
        {
          type: 'population-pyramid',
          maleData: params.maleData || [],
          femaleData: params.femaleData || [],
          ageGroups: params.ageGroups || [],
          showPercentages: true,
        },
      ],
      title: params.title || 'Population Pyramid',
    }),
  },
];

/**
 * COMPUTER SCIENCE DIAGRAM TEMPLATES
 */
export const COMPUTER_SCIENCE_DIAGRAM_TEMPLATES: DiagramTemplate[] = [
  {
    id: 'cs-flowchart',
    subject: 'computer-science',
    type: 'flowchart',
    name: 'Flowchart',
    description: 'Algorithm flowchart',
    requiredElements: ['start', 'end', 'processes', 'decisions'],
    optionalElements: ['loops', 'subroutines'],
    complexity: 3,
    generateSpec: (params) => ({
      width: 400,
      height: 500,
      elements: params.elements || [
        { type: 'start', position: { x: 200, y: 50 }, label: 'Start' },
        { type: 'process', position: { x: 200, y: 150 }, label: 'Process' },
        { type: 'decision', position: { x: 200, y: 250 }, label: 'Condition?' },
        { type: 'end', position: { x: 200, y: 450 }, label: 'End' },
      ],
      title: params.title || 'Flowchart',
    }),
  },
  {
    id: 'cs-binary-tree',
    subject: 'computer-science',
    type: 'binary-tree',
    name: 'Binary Tree',
    description: 'Binary tree data structure',
    requiredElements: ['nodes', 'edges'],
    optionalElements: ['values', 'traversal-order'],
    complexity: 3,
    generateSpec: (params) => ({
      width: 400,
      height: 300,
      elements: [
        {
          type: 'binary-tree',
          root: params.root || { value: 10 },
          nodes: params.nodes || [],
          showValues: true,
          balanced: params.balanced || false,
        },
      ],
      title: params.title || 'Binary Tree',
    }),
  },
];

/**
 * Get all templates for a subject
 */
export function getTemplatesForSubject(subject: Subject): DiagramTemplate[] {
  switch (subject) {
    case 'maths':
      return [...MATHS_DIAGRAM_TEMPLATES, ...MATHS_DIAGRAM_TEMPLATES_EXPANDED];
    case 'physics':
      return [...PHYSICS_DIAGRAM_TEMPLATES, ...PHYSICS_DIAGRAM_TEMPLATES_EXPANDED];
    case 'chemistry':
      return [...CHEMISTRY_DIAGRAM_TEMPLATES, ...CHEMISTRY_DIAGRAM_TEMPLATES_EXPANDED];
    case 'biology':
      return [...BIOLOGY_DIAGRAM_TEMPLATES, ...BIOLOGY_DIAGRAM_TEMPLATES_EXPANDED];
    case 'geography':
      return [...GEOGRAPHY_DIAGRAM_TEMPLATES, ...GEOGRAPHY_DIAGRAM_TEMPLATES_EXPANDED];
    case 'computer-science':
      return COMPUTER_SCIENCE_DIAGRAM_TEMPLATES;
    case 'history':
      return HISTORY_DIAGRAM_TEMPLATES_EXPANDED;
    case 'economics':
      return ECONOMICS_DIAGRAM_TEMPLATES_EXPANDED;
    case 'business':
      return BUSINESS_DIAGRAM_TEMPLATES_EXPANDED;
    case 'psychology':
      return PSYCHOLOGY_DIAGRAM_TEMPLATES_EXPANDED;
    case 'english-literature':
      return ENGLISH_LITERATURE_DIAGRAM_TEMPLATES_EXPANDED;
    case 'further-maths':
      return FURTHER_MATHS_DIAGRAM_TEMPLATES_EXPANDED;
    case 'combined-science':
      // Combined science uses templates from physics, chemistry, and biology
      return [
        ...PHYSICS_DIAGRAM_TEMPLATES, 
        ...PHYSICS_DIAGRAM_TEMPLATES_EXPANDED,
        ...CHEMISTRY_DIAGRAM_TEMPLATES,
        ...CHEMISTRY_DIAGRAM_TEMPLATES_EXPANDED,
        ...BIOLOGY_DIAGRAM_TEMPLATES,
        ...BIOLOGY_DIAGRAM_TEMPLATES_EXPANDED
      ];
    default:
      return [];
  }
}

/**
 * Get specific template by type and subject
 */
export function getTemplate(subject: Subject, type: string): DiagramTemplate | undefined {
  const templates = getTemplatesForSubject(subject);
  return templates.find(t => t.type === type);
}

/**
 * Get random template for subject and difficulty
 */
export function getRandomTemplate(
  subject: Subject,
  difficulty: Difficulty,
  questionType?: QuestionType
): DiagramTemplate | undefined {
  const templates = getTemplatesForSubject(subject);
  
  // Filter by complexity based on difficulty
  const complexityRange = {
    easy: [1, 2],
    medium: [2, 3],
    hard: [3, 4, 5],
  };
  
  const range = complexityRange[difficulty];
  const suitable = templates.filter(t => 
    t.complexity >= range[0] && t.complexity <= range[1]
  );
  
  if (suitable.length === 0) return undefined;
  return suitable[Math.floor(Math.random() * suitable.length)];
}

/**
 * Generate diagram spec from template
 */
export function generateFromTemplate(
  template: DiagramTemplate,
  params: any = {}
): DiagramSpec {
  return template.generateSpec(params);
}