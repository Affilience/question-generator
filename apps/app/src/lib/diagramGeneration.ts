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

interface ResponsiveDiagramConfig {
  mobile: {
    maxWidth: number;
    maxHeight: number;
    fontSize: number;
    strokeWidth: number;
    pointRadius: number;
    padding: number;
  };
  tablet: {
    maxWidth: number;
    maxHeight: number;
    fontSize: number;
    strokeWidth: number;
    pointRadius: number;
    padding: number;
  };
  desktop: {
    maxWidth: number;
    maxHeight: number;
    fontSize: number;
    strokeWidth: number;
    pointRadius: number;
    padding: number;
  };
}

/**
 * Get responsive diagram configuration based on device type
 */
export function getResponsiveDiagramConfig(): ResponsiveDiagramConfig {
  return {
    mobile: {
      maxWidth: 320,
      maxHeight: 240,
      fontSize: 12,
      strokeWidth: 1.5,
      pointRadius: 4,
      padding: 16,
    },
    tablet: {
      maxWidth: 480,
      maxHeight: 360,
      fontSize: 14,
      strokeWidth: 2,
      pointRadius: 5,
      padding: 20,
    },
    desktop: {
      maxWidth: 600,
      maxHeight: 450,
      fontSize: 16,
      strokeWidth: 2,
      pointRadius: 6,
      padding: 24,
    },
  };
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
      return {
        required: marks >= 6 && difficulty === 'hard',
        probability: marks >= 4 ? 0.4 : 0.2,
        types: ['coordinate-plane', 'geometry', 'graph', 'number-line'],
        minComplexity: 1,
        maxComplexity: 3,
        responsive: true,
      };

    case 'physics':
      return {
        required: marks >= 5,
        probability: marks >= 3 ? 0.5 : 0.2,
        types: ['force-diagram', 'circuit', 'wave', 'ray-diagram', 'motion-graph'],
        minComplexity: 2,
        maxComplexity: 4,
        responsive: true,
      };

    case 'chemistry':
      return {
        required: questionType === 'structure-drawing' || marks >= 6,
        probability: marks >= 4 ? 0.4 : 0.15,
        types: ['molecular-structure', 'apparatus', 'energy-diagram', 'reaction-profile'],
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

    default:
      return {
        required: false,
        probability: marks >= 6 ? 0.1 : 0.05,
        types: ['generic'],
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

  return ['generic-diagram'];
}

/**
 * Generate responsive diagram instructions for AI
 */
export function generateDiagramInstructions(
  requirements: DiagramRequirements,
  deviceType: 'mobile' | 'tablet' | 'desktop' = 'desktop'
): string {
  const config = getResponsiveDiagramConfig()[deviceType];
  
  return `
Generate a diagram with these requirements:
- Type: ${requirements.types.join(' or ')}
- Complexity: ${requirements.minComplexity}-${requirements.maxComplexity} (1=simple, 5=complex)
- Max dimensions: ${config.maxWidth}x${config.maxHeight}
- Font size: ${config.fontSize}px
- Stroke width: ${config.strokeWidth}px
- Point radius: ${config.pointRadius}px

RESPONSIVE REQUIREMENTS:
- Use relative positioning (percentages where possible)
- Ensure text doesn't overlap
- Maintain minimum touch target of 44x44px for interactive elements
- Scale appropriately for device: ${deviceType}
- Include clear labels with appropriate spacing
- Use high contrast colors for accessibility

${requirements.required ? 'REQUIRED: This diagram is essential for the question.' : 'OPTIONAL: Include if it adds value.'}
`;
}

/**
 * Optimize diagram for specific device
 */
export function optimizeDiagramForDevice(
  diagram: DiagramSpec,
  deviceType: 'mobile' | 'tablet' | 'desktop'
): DiagramSpec {
  const config = getResponsiveDiagramConfig()[deviceType];
  
  // Scale dimensions
  const scaleX = config.maxWidth / (diagram.width || 400);
  const scaleY = config.maxHeight / (diagram.height || 300);
  const scale = Math.min(scaleX, scaleY, 1); // Don't upscale

  // Scale all elements
  const scaledElements = diagram.elements.map(element => {
    const scaled = { ...element };
    
    // Scale coordinates
    if ('x' in scaled && typeof scaled.x === 'number') {
      scaled.x = Math.round(scaled.x * scale);
    }
    if ('y' in scaled && typeof scaled.y === 'number') {
      scaled.y = Math.round(scaled.y * scale);
    }
    if ('x1' in scaled && typeof scaled.x1 === 'number') {
      scaled.x1 = Math.round(scaled.x1 * scale);
    }
    if ('y1' in scaled && typeof scaled.y1 === 'number') {
      scaled.y1 = Math.round(scaled.y1 * scale);
    }
    if ('x2' in scaled && typeof scaled.x2 === 'number') {
      scaled.x2 = Math.round(scaled.x2 * scale);
    }
    if ('y2' in scaled && typeof scaled.y2 === 'number') {
      scaled.y2 = Math.round(scaled.y2 * scale);
    }
    
    // Scale radius
    if ('radius' in scaled && typeof scaled.radius === 'number') {
      scaled.radius = Math.round(scaled.radius * scale);
    }
    
    // Scale font size
    if ('fontSize' in scaled) {
      scaled.fontSize = config.fontSize;
    }
    
    // Scale stroke width
    if ('strokeWidth' in scaled) {
      scaled.strokeWidth = config.strokeWidth;
    }
    
    // Scale points (for line charts, scatter plots, etc.)
    if ('points' in scaled && Array.isArray(scaled.points)) {
      scaled.points = scaled.points.map((point: any) => {
        // Handle both Point and other point-like structures
        if (typeof point === 'object' && 'x' in point && 'y' in point) {
          return {
            ...point,
            x: Math.round(point.x * scale),
            y: Math.round(point.y * scale),
          };
        }
        return point;
      });
    }
    
    return scaled as DiagramElement;
  });

  return {
    ...diagram,
    width: Math.round((diagram.width || 400) * scale),
    height: Math.round((diagram.height || 300) * scale),
    elements: scaledElements,
    deviceOptimized: deviceType,
  };
}

/**
 * Validate diagram accessibility
 */
export function validateDiagramAccessibility(diagram: DiagramSpec): {
  valid: boolean;
  issues: string[];
  suggestions: string[];
} {
  const issues: string[] = [];
  const suggestions: string[] = [];

  // Check for alt text
  if (!diagram.title && !diagram.description) {
    issues.push('Missing title or description for screen readers');
    suggestions.push('Add a descriptive title or description');
  }

  // Check text contrast
  const textElements = diagram.elements.filter(el => el.type === 'text');
  if (textElements.length > 0) {
    const hasLowContrast = textElements.some(el => {
      const color = (el as any).color || '#000000';
      // Simple check - could be enhanced with actual contrast calculation
      return color === '#cccccc' || color === '#dddddd';
    });
    
    if (hasLowContrast) {
      issues.push('Some text may have insufficient contrast');
      suggestions.push('Use darker colors for text elements');
    }
  }

  // Check minimum sizes
  const minSize = 44; // iOS/Android minimum touch target
  const interactiveElements = diagram.elements.filter(el => 
    ['point', 'circle'].includes(el.type)
  );
  
  interactiveElements.forEach(el => {
    if ('radius' in el && (el as any).radius < minSize / 2) {
      issues.push(`Interactive element too small (radius: ${(el as any).radius}px)`);
      suggestions.push(`Increase radius to at least ${minSize / 2}px for touch targets`);
    }
  });

  return {
    valid: issues.length === 0,
    issues,
    suggestions,
  };
}

/**
 * Generate fallback text description for diagrams
 */
export function generateDiagramDescription(diagram: DiagramSpec): string {
  const elements = diagram.elements;
  const elementCounts: Record<string, number> = {};
  
  elements.forEach(el => {
    elementCounts[el.type] = (elementCounts[el.type] || 0) + 1;
  });

  let description = diagram.title || 'Diagram showing ';
  
  const descriptions: string[] = [];
  Object.entries(elementCounts).forEach(([type, count]) => {
    if (count === 1) {
      descriptions.push(`a ${type}`);
    } else {
      descriptions.push(`${count} ${type}s`);
    }
  });

  description += descriptions.join(', ');
  
  if (diagram.description) {
    description += `. ${diagram.description}`;
  }

  return description;
}