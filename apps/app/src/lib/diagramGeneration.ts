/**
 * Enhanced Diagram Generation System
 * Addresses mobile/desktop responsiveness and generation reliability
 */

import { DiagramSpec, DiagramElement } from '@/types/diagram';
import { Subject, QualificationLevel, QuestionType, Difficulty } from '@/types';

interface DiagramRequirements {
  required: boolean;
  probability: number;
  types: string[];
  minComplexity: number;
  maxComplexity: number;
  responsive: boolean;
}

/**
 * Determine if a diagram should be generated based on subject, question type, and marks
 */
export function shouldGenerateDiagram(
  subject: Subject,
  questionType: QuestionType,
  difficulty: Difficulty,
  marks: number,
  topic?: string
): DiagramRequirements {
  // Graph/diagram questions ALWAYS need diagrams
  if (['graph', 'diagram', 'diagram-analysis', 'map-analysis'].includes(questionType)) {
    return {
      required: true,
      probability: 1.0,
      types: getDiagramTypesForQuestion(subject, questionType, topic),
      minComplexity: difficulty === 'easy' ? 1 : difficulty === 'medium' ? 2 : 3,
      maxComplexity: difficulty === 'easy' ? 3 : difficulty === 'medium' ? 4 : 5,
      responsive: true,
    };
  }

  // Construction/loci questions need diagrams
  if (['construction', 'loci', 'transformation-geometry'].includes(questionType)) {
    return {
      required: true,
      probability: 1.0,
      types: ['geometry', 'construction', 'transformation'],
      minComplexity: 2,
      maxComplexity: 4,
      responsive: true,
    };
  }

  // Science practicals often need diagrams
  if (['practical-method', 'practical-analysis', 'circuit-design'].includes(questionType)) {
    return {
      required: marks >= 4,
      probability: marks >= 6 ? 0.9 : 0.7,
      types: ['apparatus', 'circuit', 'experimental-setup'],
      minComplexity: 2,
      maxComplexity: 4,
      responsive: true,
    };
  }

  // Subject-specific rules
  switch (subject) {
    case 'maths':
      // Add specific types based on topic
      const mathsTypes = ['coordinate-plane', 'geometry', 'graph', 'number-line'];
      if (topic?.includes('circle') || topic?.includes('geometry')) {
        mathsTypes.push('triangle', 'circle', 'quadrilateral');
      }
      return {
        required: marks >= 6 && difficulty === 'hard',
        probability: marks >= 4 ? 0.4 : 0.2,
        types: mathsTypes,
        minComplexity: 1,
        maxComplexity: 3,
        responsive: true,
      };

    case 'physics':
      return {
        required: marks >= 5,
        probability: marks >= 3 ? 0.5 : 0.2,
        types: ['force-diagram', 'circuit-diagram', 'wave', 'ray-diagram', 'motion-graph'],
        minComplexity: 2,
        maxComplexity: 4,
        responsive: true,
      };

    case 'chemistry':
      const chemTypes = ['molecular-structure', 'apparatus', 'energy-diagram', 'reaction-profile'];
      if (topic?.includes('organic')) {
        chemTypes.push('organic-structure');
      }
      return {
        required: questionType === 'structure-drawing' || marks >= 6,
        probability: marks >= 4 ? 0.4 : 0.15,
        types: chemTypes,
        minComplexity: 2,
        maxComplexity: 4,
        responsive: true,
      };

    case 'biology':
      return {
        required: questionType === 'microscopy-drawing' || marks >= 6,
        probability: marks >= 4 ? 0.35 : 0.1,
        types: ['cell-diagram', 'lifecycle', 'food-web', 'anatomy', 'graph'],
        minComplexity: 2,
        maxComplexity: 4,
        responsive: true,
      };

    case 'geography':
      return {
        required: questionType === 'map-analysis' || marks >= 8,
        probability: marks >= 6 ? 0.6 : 0.3,
        types: ['map', 'cross-section', 'climate-graph', 'population-pyramid'],
        minComplexity: 2,
        maxComplexity: 5,
        responsive: true,
      };

    case 'history':
      return {
        required: false,
        probability: questionType === 'chronology-analysis' ? 0.7 : 0.4,
        types: getDiagramTypesForQuestion('history', questionType, topic),
        minComplexity: 1,
        maxComplexity: 3,
        responsive: true,
      };

    case 'economics':
      return {
        required: marks >= 4,
        probability: 0.8,
        types: getDiagramTypesForQuestion('economics', questionType, topic),
        minComplexity: 2,
        maxComplexity: 3,
        responsive: true,
      };

    case 'business':
      return {
        required: false,
        probability: 0.6,
        types: getDiagramTypesForQuestion('business', questionType, topic),
        minComplexity: 1,
        maxComplexity: 3,
        responsive: true,
      };

    case 'psychology':
      return {
        required: false,
        probability: topic?.toLowerCase().includes('brain') || topic?.toLowerCase().includes('experiment') ? 0.7 : 0.4,
        types: getDiagramTypesForQuestion('psychology', questionType, topic),
        minComplexity: 2,
        maxComplexity: 3,
        responsive: true,
      };

    case 'english-literature':
      return {
        required: false,
        probability: questionType === 'extract-analysis' ? 0.3 : 0.2,
        types: getDiagramTypesForQuestion('english-literature', questionType, topic),
        minComplexity: 1,
        maxComplexity: 3,
        responsive: true,
      };

    case 'further-maths':
      return {
        required: marks >= 4,
        probability: 0.9,
        types: getDiagramTypesForQuestion('further-maths', questionType, topic),
        minComplexity: 2,
        maxComplexity: 4,
        responsive: true,
      };

    case 'combined-science':
      // Use the same logic as individual sciences
      const scienceTopic = topic?.toLowerCase() || '';
      if (scienceTopic.includes('force') || scienceTopic.includes('circuit') || 
          scienceTopic.includes('cell') || scienceTopic.includes('reaction')) {
        return {
          required: marks >= 4,
          probability: 0.8,
          types: getDiagramTypesForQuestion('combined-science', questionType, topic),
          minComplexity: 2,
          maxComplexity: 3,
          responsive: true,
        };
      }
      return {
        required: false,
        probability: 0.5,
        types: getDiagramTypesForQuestion('combined-science', questionType, topic),
        minComplexity: 1,
        maxComplexity: 3,
        responsive: true,
      };
      
    default:
      return {
        required: false,
        probability: marks >= 6 ? 0.1 : 0.05,
        types: ['generic-diagram'],
        minComplexity: 1,
        maxComplexity: 3,
        responsive: true,
      };
  }
}

/**
 * Get appropriate diagram types for a specific question
 */
function getDiagramTypesForQuestion(
  subject: Subject,
  questionType: QuestionType,
  topic?: string
): string[] {
  const topicLower = topic?.toLowerCase() || '';

  // Maths-specific
  if (subject === 'maths') {
    if (topicLower.includes('trigonometry')) return ['triangle', 'unit-circle'];
    if (topicLower.includes('circle')) return ['circle', 'arc', 'sector'];
    if (topicLower.includes('vector')) return ['vector-diagram', 'coordinate-plane'];
    if (topicLower.includes('probability')) return ['tree-diagram', 'venn-diagram'];
    if (topicLower.includes('statistics')) return ['bar-chart', 'histogram', 'box-plot'];
    if (questionType === 'graph') return ['coordinate-plane', 'function-graph'];
    return ['geometry', 'coordinate-plane'];
  }

  // Physics-specific
  if (subject === 'physics') {
    if (topicLower.includes('force')) return ['force-diagram', 'free-body'];
    if (topicLower.includes('circuit')) return ['circuit', 'electrical'];
    if (topicLower.includes('wave')) return ['wave', 'oscillation'];
    if (topicLower.includes('optic') || topicLower.includes('light')) return ['ray-diagram', 'lens'];
    if (topicLower.includes('motion')) return ['motion-graph', 'velocity-time'];
    return ['physics-diagram'];
  }

  // Chemistry-specific
  if (subject === 'chemistry') {
    if (topicLower.includes('organic')) return ['organic-structure', 'mechanism'];
    if (topicLower.includes('bond')) return ['molecular-structure', 'electron-diagram'];
    if (topicLower.includes('energy')) return ['energy-diagram', 'reaction-profile'];
    if (topicLower.includes('titration')) return ['apparatus', 'titration-curve'];
    return ['chemistry-diagram'];
  }

  // Biology-specific
  if (subject === 'biology') {
    if (topicLower.includes('cell')) return ['cell-diagram', 'microscopy'];
    if (topicLower.includes('ecology')) return ['food-web', 'ecosystem'];
    if (topicLower.includes('genetics')) return ['genetic-cross', 'punnett-square'];
    if (topicLower.includes('anatomy')) return ['anatomy', 'organ-system'];
    return ['biology-diagram'];
  }
  
  // Geography-specific
  if (subject === 'geography') {
    if (questionType === 'map-analysis') return ['map', 'cross-section'];
    if (topicLower.includes('climate')) return ['climate-graph', 'weather-map'];
    if (topicLower.includes('population')) return ['population-pyramid', 'demographic-chart'];
    if (topicLower.includes('river') || topicLower.includes('coast')) return ['cross-section', 'landform'];
    if (topicLower.includes('urban')) return ['map', 'land-use'];
    return ['map', 'geographic-diagram'];
  }

  // History-specific
  if (subject === 'history') {
    if (topicLower.includes('timeline') || topicLower.includes('chronolog')) return ['timeline'];
    if (topicLower.includes('source')) return ['source-analysis'];
    if (topicLower.includes('cause') || topicLower.includes('consequence')) return ['causation-diagram'];
    return ['timeline', 'source-analysis'];
  }

  // Economics-specific
  if (subject === 'economics') {
    if (topicLower.includes('supply') || topicLower.includes('demand')) return ['supply-demand'];
    if (topicLower.includes('ppf') || topicLower.includes('production')) return ['ppf'];
    if (topicLower.includes('circular') || topicLower.includes('flow')) return ['circular-flow'];
    return ['supply-demand', 'economic-graph'];
  }

  // Business-specific
  if (subject === 'business') {
    if (topicLower.includes('organization') || topicLower.includes('structure')) return ['org-chart'];
    if (topicLower.includes('product') || topicLower.includes('lifecycle')) return ['product-lifecycle'];
    if (topicLower.includes('swot')) return ['swot-analysis'];
    return ['org-chart', 'business-diagram'];
  }

  // Psychology-specific
  if (subject === 'psychology') {
    if (topicLower.includes('brain') || topicLower.includes('neuro')) return ['brain-diagram'];
    if (topicLower.includes('experiment') || topicLower.includes('research')) return ['experimental-design'];
    if (topicLower.includes('distribution') || topicLower.includes('normal')) return ['normal-distribution'];
    return ['brain-diagram', 'experimental-design'];
  }

  // English Literature-specific
  if (subject === 'english-literature') {
    if (topicLower.includes('plot') || topicLower.includes('structure')) return ['plot-diagram'];
    if (topicLower.includes('character') || topicLower.includes('relationship')) return ['character-map'];
    if (topicLower.includes('theme')) return ['theme-diagram'];
    return ['plot-diagram', 'character-map'];
  }

  // Further Maths-specific
  if (subject === 'further-maths') {
    if (topicLower.includes('3d') || topicLower.includes('vector')) return ['3d-vector'];
    if (topicLower.includes('complex') || topicLower.includes('argand')) return ['complex-plane'];
    if (topicLower.includes('matrix') || topicLower.includes('transformation')) return ['matrix-transformation'];
    return ['3d-vector', 'complex-plane'];
  }

  // Combined Science - delegate to specific sciences
  if (subject === 'combined-science') {
    if (topicLower.includes('force') || topicLower.includes('motion')) return ['force-diagram', 'motion-graph'];
    if (topicLower.includes('cell') || topicLower.includes('organism')) return ['cell-diagram', 'biology-diagram'];
    if (topicLower.includes('reaction') || topicLower.includes('element')) return ['molecular-structure', 'chemistry-diagram'];
    return ['science-diagram'];
  }

  return ['generic-diagram'];
}

/**
 * Diagram instructions appended to generation prompts.
 *
 * Must stay consistent with DIAGRAM_SCHEMA_DOCS (logical units, y-up): the
 * old version quoted pixel dimensions and font sizes, giving the model two
 * contradictory coordinate systems in one prompt.
 */
export function generateDiagramInstructions(
  requirements: DiagramRequirements,
  _deviceType: 'mobile' | 'tablet' | 'desktop' = 'desktop'
): string {
  return `
Diagram requirements:
- Type: ${requirements.types.join(' or ')}
- Complexity: ${requirements.minComplexity}-${requirements.maxComplexity} (1=simple, 5=complex)
- Use LOGICAL units (width/height around 10-14) exactly as the diagram schema describes — never pixel values
- Keep every element inside the declared width/height with at least 1 unit of margin
- Label all key points, sides, and angles the question refers to
- Ensure labels do not overlap each other or the shapes

${requirements.required ? 'REQUIRED: This diagram is essential for the question.' : 'OPTIONAL: Include if it adds value.'}
`;
}
