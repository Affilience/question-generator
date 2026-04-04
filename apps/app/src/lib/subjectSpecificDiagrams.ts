/**
 * Subject-Specific Diagram Generation Instructions
 * Provides detailed, subject-aware diagram specifications for AI generation
 */

import { Subject, QuestionType, Difficulty } from '@/types';

interface SubjectDiagramSpec {
  subject: Subject;
  types: Record<string, DiagramTypeSpec>;
  commonElements: string[];
  styling: DiagramStyling;
  examples: DiagramExample[];
}

interface DiagramTypeSpec {
  name: string;
  description: string;
  requiredElements: string[];
  optionalElements: string[];
  constraints: string[];
  complexity: {
    easy: string;
    medium: string;
    hard: string;
  };
}

interface DiagramStyling {
  colors: Record<string, string>;
  fonts: {
    labels: string;
    values: string;
    annotations: string;
  };
  lineStyles: Record<string, string>;
}

interface DiagramExample {
  type: string;
  prompt: string;
  elements: string[];
}

/**
 * MATHEMATICS DIAGRAM SPECIFICATIONS
 */
export const MATHS_DIAGRAMS: SubjectDiagramSpec = {
  subject: 'maths',
  types: {
    'coordinate-plane': {
      name: 'Coordinate Plane',
      description: 'Cartesian coordinate system with axes, grid, and plotted elements',
      requiredElements: ['x-axis', 'y-axis', 'origin', 'scale markings'],
      optionalElements: ['grid lines', 'quadrant labels', 'axis arrows'],
      constraints: ['Equal scale on both axes unless specified', 'Origin clearly marked'],
      complexity: {
        easy: 'Simple axes with integer scale, few points',
        medium: 'Include grid, multiple functions, intercepts labeled',
        hard: 'Complex functions, asymptotes, regions shaded, transformations shown',
      },
    },
    'geometry': {
      name: 'Geometric Figure',
      description: 'Accurate geometric shapes with measurements and labels',
      requiredElements: ['shape outline', 'vertex labels', 'angle/side measurements'],
      optionalElements: ['construction marks', 'parallel/perpendicular marks', 'angle arcs'],
      constraints: ['Angles shown with arcs', 'Equal sides/angles marked identically'],
      complexity: {
        easy: 'Basic shapes (triangle, quadrilateral) with simple labels',
        medium: 'Composite shapes, circle theorems, angle calculations shown',
        hard: '3D projections, complex constructions, multiple related figures',
      },
    },
    'number-line': {
      name: 'Number Line',
      description: 'Linear scale for representing numbers and inequalities',
      requiredElements: ['line', 'scale marks', 'labeled points'],
      optionalElements: ['arrows at ends', 'inequality shading', 'interval notation'],
      constraints: ['Consistent scale', 'Zero clearly marked if in range'],
      complexity: {
        easy: 'Integer scale, single values marked',
        medium: 'Decimal/fraction scale, inequalities shown',
        hard: 'Multiple number lines for comparison, complex inequalities',
      },
    },
    'venn-diagram': {
      name: 'Venn Diagram',
      description: 'Overlapping circles showing set relationships',
      requiredElements: ['circles', 'labels', 'values in regions'],
      optionalElements: ['universal set box', 'shading', 'complement notation'],
      constraints: ['All regions clearly visible', 'Proportions not necessarily to scale'],
      complexity: {
        easy: 'Two circles with simple values',
        medium: 'Three circles, probability values, some shading',
        hard: 'Complex shading for combinations, algebraic expressions',
      },
    },
    'tree-diagram': {
      name: 'Probability Tree',
      description: 'Branching diagram showing probability outcomes',
      requiredElements: ['branches', 'probability labels', 'outcome labels'],
      optionalElements: ['final probabilities', 'path highlighting'],
      constraints: ['Probabilities on branches sum to 1', 'Clear hierarchical structure'],
      complexity: {
        easy: 'Two stages, two branches each',
        medium: 'Three stages or mixed branch numbers',
        hard: 'Conditional probability, replacement scenarios',
      },
    },
    'bar-chart': {
      name: 'Bar Chart',
      description: 'Rectangular bars showing data values',
      requiredElements: ['axes', 'bars', 'labels', 'scale'],
      optionalElements: ['grid lines', 'value labels on bars', 'legend'],
      constraints: ['Bars equal width', 'Zero baseline unless broken axis shown'],
      complexity: {
        easy: 'Single series, simple values',
        medium: 'Grouped bars, decimal values',
        hard: 'Stacked bars, dual axis, statistical annotations',
      },
    },
    'histogram': {
      name: 'Histogram',
      description: 'Frequency distribution with continuous data',
      requiredElements: ['axes', 'bars (no gaps)', 'frequency density axis', 'class boundaries'],
      optionalElements: ['frequency polygon overlay', 'cumulative frequency'],
      constraints: ['Area represents frequency', 'Bars touch each other'],
      complexity: {
        easy: 'Equal class widths',
        medium: 'Unequal class widths, frequency density calculations',
        hard: 'Overlaid distributions, statistical measures shown',
      },
    },
  },
  commonElements: ['axes', 'labels', 'scale', 'grid', 'points', 'lines', 'angles'],
  styling: {
    colors: {
      primary: '#2563eb', // Blue for primary elements
      secondary: '#dc2626', // Red for contrast
      grid: '#e5e7eb', // Light gray
      text: '#1f2937', // Dark gray
      highlight: '#fbbf24', // Amber for emphasis
    },
    fonts: {
      labels: 'Variables in italics (x, y), constants in regular',
      values: 'Clear sans-serif, sized appropriately',
      annotations: 'Smaller, distinguishable from main content',
    },
    lineStyles: {
      solid: 'Main elements',
      dashed: 'Construction lines, asymptotes',
      dotted: 'Guidelines, projections',
    },
  },
  examples: [
    {
      type: 'coordinate-plane',
      prompt: 'Draw y = 2x + 3 with x-intercept and y-intercept labeled',
      elements: ['axes', 'grid', 'linear function', 'intercept points', 'labels'],
    },
  ],
};

/**
 * PHYSICS DIAGRAM SPECIFICATIONS
 */
export const PHYSICS_DIAGRAMS: SubjectDiagramSpec = {
  subject: 'physics',
  types: {
    'force-diagram': {
      name: 'Force Diagram',
      description: 'Free body diagram showing all forces on an object',
      requiredElements: ['object (simplified)', 'force arrows', 'labels', 'angles if relevant'],
      optionalElements: ['coordinate system', 'components', 'resultant'],
      constraints: ['Arrow length proportional to magnitude', 'Forces from center of mass'],
      complexity: {
        easy: 'Vertical and horizontal forces only',
        medium: 'Angled forces, components shown',
        hard: 'Multiple objects, tension, friction, complex systems',
      },
    },
    'circuit': {
      name: 'Circuit Diagram',
      description: 'Electrical circuit with standard component symbols',
      requiredElements: ['components with correct symbols', 'connecting wires', 'labels'],
      optionalElements: ['current direction', 'voltage markers', 'ammeters/voltmeters'],
      constraints: ['Use standard IEC symbols', 'Complete circuit paths'],
      complexity: {
        easy: 'Series circuit, basic components',
        medium: 'Parallel branches, multiple components',
        hard: 'Complex networks, bridge circuits, AC components',
      },
    },
    'ray-diagram': {
      name: 'Ray Diagram',
      description: 'Light rays through optical elements',
      requiredElements: ['optical element', 'rays', 'object', 'image'],
      optionalElements: ['focal points', 'principal axis', 'measurements'],
      constraints: ['Rays straight with arrows', 'Virtual rays dashed'],
      complexity: {
        easy: 'Single lens/mirror, principal rays',
        medium: 'Multiple rays, real and virtual images',
        hard: 'Compound systems, aberrations, wavefronts',
      },
    },
    'wave': {
      name: 'Wave Diagram',
      description: 'Representation of wave properties',
      requiredElements: ['wave shape', 'amplitude', 'wavelength', 'axes'],
      optionalElements: ['phase markers', 'nodes/antinodes', 'time markers'],
      constraints: ['Consistent amplitude unless damped', 'Clear period/wavelength'],
      complexity: {
        easy: 'Single sine wave with basic labels',
        medium: 'Superposition, standing waves',
        hard: 'Interference patterns, modulation, Doppler effects',
      },
    },
    'motion-graph': {
      name: 'Motion Graph',
      description: 'Displacement, velocity, or acceleration vs time',
      requiredElements: ['axes with units', 'curve/line', 'key points labeled'],
      optionalElements: ['area shading', 'tangent lines', 'multiple quantities'],
      constraints: ['Consistent with physics (v = dx/dt, etc.)', 'Units clearly shown'],
      complexity: {
        easy: 'Constant velocity/acceleration',
        medium: 'Changing acceleration, multiple stages',
        hard: 'SHM, projectile motion, relative motion',
      },
    },
    'energy-diagram': {
      name: 'Energy Diagram',
      description: 'Energy levels, transfers, or conservation',
      requiredElements: ['energy levels/bars', 'labels with values', 'transitions'],
      optionalElements: ['heat flow arrows', 'work done', 'efficiency'],
      constraints: ['Conservation shown clearly', 'Consistent scale'],
      complexity: {
        easy: 'Simple energy bar charts',
        medium: 'Sankey diagrams, multiple transformations',
        hard: 'Potential energy curves, binding energy',
      },
    },
  },
  commonElements: ['arrows', 'labels', 'measurements', 'standard symbols', 'coordinate axes'],
  styling: {
    colors: {
      primary: '#0891b2', // Cyan for main elements
      forces: '#dc2626', // Red for forces
      current: '#eab308', // Yellow for current
      field: '#7c3aed', // Purple for fields
      text: '#1f2937',
    },
    fonts: {
      labels: 'Vector quantities bold (F, v), scalars regular',
      values: 'Include units always',
      annotations: 'Subscripts for components',
    },
    lineStyles: {
      solid: 'Real rays, actual paths',
      dashed: 'Virtual rays, field lines',
      thick: 'Forces, important elements',
    },
  },
  examples: [
    {
      type: 'force-diagram',
      prompt: 'Draw forces on a block on an inclined plane',
      elements: ['incline', 'block', 'weight', 'normal force', 'friction', 'angle'],
    },
  ],
};

/**
 * CHEMISTRY DIAGRAM SPECIFICATIONS
 */
export const CHEMISTRY_DIAGRAMS: SubjectDiagramSpec = {
  subject: 'chemistry',
  types: {
    'molecular-structure': {
      name: 'Molecular Structure',
      description: 'Structural formula showing bonds and atoms',
      requiredElements: ['atoms with symbols', 'bonds', 'functional groups highlighted'],
      optionalElements: ['3D representation', 'lone pairs', 'partial charges'],
      constraints: ['Correct valency', 'Standard bond angles where relevant'],
      complexity: {
        easy: 'Simple molecules, 2D representation',
        medium: 'Functional groups, isomers, basic 3D',
        hard: 'Complex organic, stereochemistry, mechanisms',
      },
    },
    'apparatus': {
      name: 'Laboratory Apparatus',
      description: 'Experimental setup for chemical procedures',
      requiredElements: ['equipment with labels', 'connections', 'contents indicated'],
      optionalElements: ['heat source', 'clamps/stands', 'safety equipment'],
      constraints: ['Realistic proportions', 'Proper technique shown'],
      complexity: {
        easy: 'Basic setup (test tube, beaker)',
        medium: 'Distillation, titration setup',
        hard: 'Complex synthesis, multiple stages',
      },
    },
    'reaction-profile': {
      name: 'Energy Profile',
      description: 'Energy changes during reaction',
      requiredElements: ['axes', 'reactants level', 'products level', 'activation energy'],
      optionalElements: ['intermediate', 'catalyst effect', 'enthalpy change label'],
      constraints: ['Energy on y-axis', 'Reaction progress on x-axis'],
      complexity: {
        easy: 'Single step, exo/endothermic',
        medium: 'Catalyst comparison, labeled ΔH',
        hard: 'Multi-step, intermediates, competing pathways',
      },
    },
    'electron-diagram': {
      name: 'Electronic Structure',
      description: 'Electron arrangement in atoms/ions',
      requiredElements: ['shells/orbitals', 'electrons', 'nucleus label'],
      optionalElements: ['subshells', 'spin arrows', 'hybridization'],
      constraints: ['Follow Aufbau principle', 'Correct number of electrons'],
      complexity: {
        easy: 'Simple shells (2,8,8)',
        medium: 's,p,d orbitals, electron config',
        hard: 'Hybridization, MO diagrams',
      },
    },
    'titration-curve': {
      name: 'Titration Curve',
      description: 'pH vs volume added graph',
      requiredElements: ['axes', 'curve', 'equivalence point', 'labels'],
      optionalElements: ['buffer regions', 'pKa points', 'indicator ranges'],
      constraints: ['Correct curve shape for acid/base type', 'pH 0-14 scale'],
      complexity: {
        easy: 'Strong acid-strong base',
        medium: 'Weak acid/base, buffer region',
        hard: 'Polyprotic, back titration',
      },
    },
  },
  commonElements: ['atoms', 'bonds', 'arrows', 'labels', 'equipment'],
  styling: {
    colors: {
      carbon: '#000000',
      hydrogen: '#ffffff',
      oxygen: '#ff0000',
      nitrogen: '#0000ff',
      other: '#808080',
      bonds: '#000000',
    },
    fonts: {
      labels: 'Element symbols standard, subscripts for numbers',
      values: 'Clear, include units and states',
      annotations: 'Reaction conditions above arrows',
    },
    lineStyles: {
      solid: 'Single bonds, equipment',
      double: 'Double bonds',
      triple: 'Triple bonds',
      dashed: 'Hydrogen bonds, weak interactions',
    },
  },
  examples: [
    {
      type: 'molecular-structure',
      prompt: 'Draw the structure of ethanoic acid',
      elements: ['carbon atoms', 'hydrogen atoms', 'oxygen atoms', 'bonds', 'functional group'],
    },
  ],
};

/**
 * BIOLOGY DIAGRAM SPECIFICATIONS
 */
export const BIOLOGY_DIAGRAMS: SubjectDiagramSpec = {
  subject: 'biology',
  types: {
    'cell-diagram': {
      name: 'Cell Structure',
      description: 'Labeled diagram of cell with organelles',
      requiredElements: ['cell membrane', 'nucleus', 'cytoplasm', 'labels'],
      optionalElements: ['organelles specific to cell type', 'magnification'],
      constraints: ['Relative sizes accurate', 'Clear labels with lines'],
      complexity: {
        easy: 'Basic animal/plant cell',
        medium: 'Specialized cells, more organelles',
        hard: 'Electron microscope detail, comparisons',
      },
    },
    'microscopy': {
      name: 'Microscope View',
      description: 'Biological specimen as seen under microscope',
      requiredElements: ['circular field of view', 'specimen', 'scale bar'],
      optionalElements: ['magnification label', 'stain indication'],
      constraints: ['Accurate representation', 'Scale bar mandatory'],
      complexity: {
        easy: 'Single cell, low power',
        medium: 'Tissue section, cell identification',
        hard: 'Multiple tissues, high power detail',
      },
    },
    'lifecycle': {
      name: 'Life Cycle',
      description: 'Stages of organism development',
      requiredElements: ['stages', 'arrows showing progression', 'labels'],
      optionalElements: ['time periods', 'conditions', 'variations'],
      constraints: ['Chronological order clear', 'Circular if appropriate'],
      complexity: {
        easy: 'Simple metamorphosis',
        medium: 'Alternation of generations',
        hard: 'Parasitic cycles, multiple hosts',
      },
    },
    'food-web': {
      name: 'Food Web/Chain',
      description: 'Energy transfer between organisms',
      requiredElements: ['organisms', 'arrows showing energy flow', 'trophic levels'],
      optionalElements: ['energy values', 'decomposers', 'biomass'],
      constraints: ['Arrows point from eaten to eater', 'Levels clear'],
      complexity: {
        easy: 'Linear food chain',
        medium: 'Simple web, 3-4 levels',
        hard: 'Complex web, energy pyramids',
      },
    },
    'anatomy': {
      name: 'Anatomical Diagram',
      description: 'Body system or organ structure',
      requiredElements: ['organ/system outline', 'major parts labeled', 'orientation'],
      optionalElements: ['blood vessels', 'nerves', 'cross-sections'],
      constraints: ['Anatomically accurate proportions', 'Standard orientation'],
      complexity: {
        easy: 'Single organ, main parts',
        medium: 'System overview, connections',
        hard: 'Detailed with vessels/nerves, pathology',
      },
    },
    'genetic-cross': {
      name: 'Genetic Diagram',
      description: 'Punnett square or pedigree',
      requiredElements: ['parent genotypes', 'gametes', 'offspring', 'key'],
      optionalElements: ['phenotype ratios', 'probability', 'multiple generations'],
      constraints: ['Standard notation', 'All combinations shown'],
      complexity: {
        easy: 'Monohybrid cross',
        medium: 'Dihybrid, sex-linked',
        hard: 'Epistasis, linkage, pedigree analysis',
      },
    },
    'graph': {
      name: 'Biological Graph',
      description: 'Data representation for biological phenomena',
      requiredElements: ['axes with units', 'data points/line', 'title'],
      optionalElements: ['error bars', 'trend line', 'annotations'],
      constraints: ['Appropriate scale', 'Variables correctly assigned to axes'],
      complexity: {
        easy: 'Simple relationship, few points',
        medium: 'Multiple datasets, clear trends',
        hard: 'Complex interactions, statistical analysis',
      },
    },
  },
  commonElements: ['labels', 'arrows', 'scale bars', 'annotations'],
  styling: {
    colors: {
      membrane: '#8b4513', // Brown
      nucleus: '#4b0082', // Indigo
      chloroplast: '#228b22', // Green
      cytoplasm: '#ffd700', // Light yellow
      blood: '#dc143c', // Crimson
    },
    fonts: {
      labels: 'Scientific names in italics',
      values: 'Include units, magnification',
      annotations: 'Clear, unambiguous',
    },
    lineStyles: {
      solid: 'Definite structures',
      dashed: 'Hidden/internal structures',
      arrows: 'Processes, flow direction',
    },
  },
  examples: [
    {
      type: 'cell-diagram',
      prompt: 'Draw and label a plant cell',
      elements: ['cell wall', 'membrane', 'nucleus', 'chloroplasts', 'vacuole'],
    },
  ],
};

/**
 * GEOGRAPHY DIAGRAM SPECIFICATIONS
 */
export const GEOGRAPHY_DIAGRAMS: SubjectDiagramSpec = {
  subject: 'geography',
  types: {
    'map': {
      name: 'Map',
      description: 'Geographical representation with features',
      requiredElements: ['scale', 'north arrow', 'key/legend', 'features'],
      optionalElements: ['contour lines', 'grid references', 'latitude/longitude'],
      constraints: ['Consistent scale', 'Clear symbols'],
      complexity: {
        easy: 'Simple outline, few features',
        medium: 'Topographic features, settlements',
        hard: 'Complex layers, human/physical integration',
      },
    },
    'cross-section': {
      name: 'Cross-Section',
      description: 'Vertical slice through landscape',
      requiredElements: ['surface profile', 'rock layers/features', 'labels', 'scale'],
      optionalElements: ['vegetation', 'human features', 'geological time'],
      constraints: ['Vertical exaggeration noted', 'Consistent horizontal scale'],
      complexity: {
        easy: 'Simple valley or hill',
        medium: 'River valley, geological layers',
        hard: 'Fault lines, complex geology',
      },
    },
    'climate-graph': {
      name: 'Climate Graph',
      description: 'Temperature and precipitation data',
      requiredElements: ['dual axes', 'temperature line', 'precipitation bars', 'months'],
      optionalElements: ['averages', 'extremes', 'annotations'],
      constraints: ['Temperature on left, precipitation on right', '12 months shown'],
      complexity: {
        easy: 'Single location, clear pattern',
        medium: 'Comparison of locations',
        hard: 'Multiple years, anomalies marked',
      },
    },
    'population-pyramid': {
      name: 'Population Pyramid',
      description: 'Age-sex distribution',
      requiredElements: ['age groups', 'male/female sides', 'numbers/percentages', 'title'],
      optionalElements: ['dependency ratio', 'median age', 'projections'],
      constraints: ['Males left, females right traditionally', 'Same scale both sides'],
      complexity: {
        easy: 'Single country, current',
        medium: 'Comparison of two times/places',
        hard: 'Multiple overlays, projections',
      },
    },
    'field-sketch': {
      name: 'Field Sketch',
      description: 'Annotated landscape drawing',
      requiredElements: ['sketch of view', 'annotations', 'labels', 'frame'],
      optionalElements: ['measurements', 'geology indicators', 'land use'],
      constraints: ['Proportional accuracy', 'Clear annotations'],
      complexity: {
        easy: 'Simple landscape, few features',
        medium: 'Urban/rural contrast, processes',
        hard: 'Complex interactions, temporal change',
      },
    },
  },
  commonElements: ['scale', 'key', 'north arrow', 'labels'],
  styling: {
    colors: {
      water: '#0077be',
      vegetation: '#228b22',
      urban: '#808080',
      agricultural: '#f4a460',
      elevation: 'Brown contours',
    },
    fonts: {
      labels: 'Clear sans-serif',
      values: 'Include units',
      annotations: 'Descriptive, linked clearly',
    },
    lineStyles: {
      solid: 'Definite boundaries',
      dashed: 'Approximate/disputed boundaries',
      contour: 'Elevation lines',
    },
  },
  examples: [
    {
      type: 'map',
      prompt: 'Draw a map showing river meanders',
      elements: ['river course', 'meanders', 'ox-bow lake', 'floodplain', 'scale'],
    },
  ],
};

/**
 * Get subject-specific diagram instructions
 */
export function getSubjectDiagramInstructions(
  subject: Subject,
  diagramType: string,
  difficulty: Difficulty,
  topic?: string
): string {
  let spec: SubjectDiagramSpec;
  
  switch (subject) {
    case 'maths':
      spec = MATHS_DIAGRAMS;
      break;
    case 'physics':
      spec = PHYSICS_DIAGRAMS;
      break;
    case 'chemistry':
      spec = CHEMISTRY_DIAGRAMS;
      break;
    case 'biology':
      spec = BIOLOGY_DIAGRAMS;
      break;
    case 'geography':
      spec = GEOGRAPHY_DIAGRAMS;
      break;
    default:
      // Generic diagram instructions for other subjects
      return `Generate a clear, labeled diagram relevant to ${topic || 'the question'}. 
              Include all necessary labels and ensure the diagram is easy to understand.`;
  }

  const typeSpec = spec.types[diagramType] || Object.values(spec.types)[0];
  
  return `
DIAGRAM REQUIREMENTS FOR ${subject.toUpperCase()} - ${typeSpec.name}:

Description: ${typeSpec.description}

REQUIRED ELEMENTS (must include all):
${typeSpec.requiredElements.map(el => `• ${el}`).join('\n')}

OPTIONAL ELEMENTS (include if relevant):
${typeSpec.optionalElements.map(el => `• ${el}`).join('\n')}

CONSTRAINTS:
${typeSpec.constraints.map(c => `• ${c}`).join('\n')}

COMPLEXITY LEVEL (${difficulty}):
${typeSpec.complexity[difficulty]}

STYLING GUIDELINES:
• Colors: ${Object.entries(spec.styling.colors).map(([k, v]) => `${k}: ${v}`).join(', ')}
• ${spec.styling.fonts.labels}
• ${spec.styling.fonts.values}

${topic ? `SPECIFIC TO TOPIC (${topic}): Ensure diagram directly relates to ${topic}` : ''}

CRITICAL: The diagram must be accurate, clear, and appropriate for ${difficulty} difficulty level.
All labels must be legible and properly positioned. Use standard conventions for ${subject}.
`;
}

/**
 * Validate if a diagram is appropriate for the subject
 */
export function validateSubjectDiagram(
  subject: Subject,
  diagramSpec: any,
  questionType: QuestionType
): {
  valid: boolean;
  issues: string[];
  suggestions: string[];
} {
  const issues: string[] = [];
  const suggestions: string[] = [];

  // Subject-specific validation
  switch (subject) {
    case 'maths':
      if (questionType === 'graph' && !diagramSpec.elements?.some((e: any) => e.type === 'axes')) {
        issues.push('Graph question missing axes');
        suggestions.push('Add coordinate axes with labels');
      }
      break;

    case 'physics':
      if (questionType === 'calculation' && diagramSpec.type === 'force-diagram') {
        if (!diagramSpec.elements?.some((e: any) => e.type === 'arrow')) {
          issues.push('Force diagram missing force arrows');
          suggestions.push('Add arrows to represent forces');
        }
      }
      if (diagramSpec.type === 'circuit' && !diagramSpec.elements?.some((e: any) => 
        ['component', 'wire'].includes(e.type))) {
        issues.push('Circuit diagram missing components');
        suggestions.push('Add circuit components with standard symbols');
      }
      break;

    case 'chemistry':
      if (diagramSpec.type === 'molecular-structure') {
        if (!diagramSpec.elements?.some((e: any) => e.type === 'atom')) {
          issues.push('Molecular structure missing atoms');
          suggestions.push('Add atoms with element symbols');
        }
        if (!diagramSpec.elements?.some((e: any) => e.type === 'bond')) {
          issues.push('Molecular structure missing bonds');
          suggestions.push('Add bonds between atoms');
        }
      }
      break;

    case 'biology':
      if (diagramSpec.type === 'cell-diagram') {
        if (!diagramSpec.elements?.some((e: any) => e.label?.includes('nucleus'))) {
          issues.push('Cell diagram missing nucleus');
          suggestions.push('Add and label nucleus');
        }
      }
      if (diagramSpec.type === 'microscopy' && !diagramSpec.scale) {
        issues.push('Microscopy diagram missing scale');
        suggestions.push('Add scale bar or magnification');
      }
      break;

    case 'geography':
      if (diagramSpec.type === 'map') {
        if (!diagramSpec.scale && !diagramSpec.elements?.some((e: any) => e.type === 'scale')) {
          issues.push('Map missing scale');
          suggestions.push('Add map scale');
        }
        if (!diagramSpec.elements?.some((e: any) => e.type === 'north-arrow')) {
          issues.push('Map missing north arrow');
          suggestions.push('Add north direction indicator');
        }
      }
      break;
  }

  // General validation
  if (!diagramSpec.elements || diagramSpec.elements.length === 0) {
    issues.push('Diagram has no elements');
    suggestions.push('Add relevant diagram elements');
  }

  return {
    valid: issues.length === 0,
    issues,
    suggestions,
  };
}