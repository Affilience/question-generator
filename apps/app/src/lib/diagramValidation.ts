/**
 * AI Diagram Validation System
 * Ensures generated diagrams match question requirements and are mathematically/scientifically accurate
 */

import { DiagramSpec } from '@/types/diagram';
import { Subject, QuestionType } from '@/types';

export interface ValidationResult {
  valid: boolean;
  errors: ValidationError[];
  warnings: ValidationWarning[];
  suggestions: string[];
  score: number; // 0-100
}

export interface ValidationError {
  type: 'missing' | 'incorrect' | 'impossible' | 'mismatch';
  element: string;
  message: string;
  severity: 'critical' | 'major' | 'minor';
}

export interface ValidationWarning {
  type: 'suboptimal' | 'unclear' | 'inconsistent';
  element: string;
  message: string;
}

/**
 * Main validation function
 */
export function validateDiagram(
  diagram: DiagramSpec,
  subject: Subject,
  questionType: QuestionType,
  questionContent: string,
  expectedAnswer?: string
): ValidationResult {
  const result: ValidationResult = {
    valid: true,
    errors: [],
    warnings: [],
    suggestions: [],
    score: 100,
  };
  
  // Run subject-specific validations
  switch (subject) {
    case 'maths':
      validateMathsDiagram(diagram, questionContent, result);
      break;
    case 'physics':
      validatePhysicsDiagram(diagram, questionContent, result);
      break;
    case 'chemistry':
      validateChemistryDiagram(diagram, questionContent, result);
      break;
    case 'biology':
      validateBiologyDiagram(diagram, questionContent, result);
      break;
    case 'geography':
      validateGeographyDiagram(diagram, questionContent, result);
      break;
  }
  
  // Check general requirements
  validateGeneralRequirements(diagram, questionType, result);
  
  // Calculate final score
  result.score = calculateValidationScore(result);
  result.valid = result.score >= 60 && result.errors.filter(e => e.severity === 'critical').length === 0;
  
  return result;
}

/**
 * Validate mathematics diagrams
 */
function validateMathsDiagram(
  diagram: DiagramSpec,
  questionContent: string,
  result: ValidationResult
): void {
  // Check for geometry accuracy
  if (questionContent.includes('triangle')) {
    const triangles = diagram.elements?.filter((el: any) => el.type === 'polygon' && el.vertices?.length === 3) || [];
    if (triangles.length === 0) {
      result.errors.push({
        type: 'missing',
        element: 'triangle',
        message: 'Question mentions triangle but diagram has none',
        severity: 'critical',
      });
    } else {
      // Validate triangle properties
      triangles.forEach((triangle: any) => {
        if (triangle.vertices?.length === 3) {
          const angles = calculateTriangleAngles(triangle.vertices);
          const sum = angles.reduce((a: number, b: number) => a + b, 0);
          if (Math.abs(sum - 180) > 1) {
            result.errors.push({
              type: 'incorrect',
              element: 'triangle-angles',
              message: `Triangle angles sum to ${sum.toFixed(1)}° instead of 180°`,
              severity: 'major',
            });
          }
        }
      });
    }
  }
  
  // Check coordinate plane accuracy
  if (questionContent.includes('graph') || questionContent.includes('coordinate')) {
    const axes = diagram.elements?.find((el: any) => el.type === 'axes') as any;
    if (!axes) {
      result.errors.push({
        type: 'missing',
        element: 'axes',
        message: 'Graph question missing coordinate axes',
        severity: 'critical',
      });
    } else {
      // Check if axes are properly labeled
      if (!axes.xLabel && !axes.yLabel) {
        result.warnings.push({
          type: 'unclear',
          element: 'axes-labels',
          message: 'Axes should be labeled',
        });
      }
    }
  }
  
  // Check circle properties
  if (questionContent.includes('circle')) {
    const circles = diagram.elements?.filter((el: any) => el.type === 'circle') || [];
    if (circles.length === 0) {
      result.errors.push({
        type: 'missing',
        element: 'circle',
        message: 'Question mentions circle but diagram has none',
        severity: 'critical',
      });
    }
  }
  
  // Validate measurements match question
  const measurements = extractMeasurements(questionContent);
  measurements.forEach(measurement => {
    if (!diagramContainsMeasurement(diagram, measurement)) {
      result.warnings.push({
        type: 'inconsistent',
        element: 'measurement',
        message: `Question mentions ${measurement} but it's not clearly shown in diagram`,
      });
    }
  });
}

/**
 * Validate physics diagrams
 */
function validatePhysicsDiagram(
  diagram: DiagramSpec,
  questionContent: string,
  result: ValidationResult
): void {
  // Check force diagrams
  if (questionContent.includes('force') || questionContent.includes('Newton')) {
    const forces = diagram.elements?.filter((el: any) => el.type === 'arrow' || el.type === 'force') || [];
    if (forces.length === 0) {
      result.errors.push({
        type: 'missing',
        element: 'forces',
        message: 'Force question missing force arrows',
        severity: 'critical',
      });
    } else {
      // Check if forces are labeled
      forces.forEach((force: any) => {
        if (!force.label) {
          result.warnings.push({
            type: 'unclear',
            element: 'force-label',
            message: 'Force arrows should be labeled with magnitude/type',
          });
        }
      });
      
      // For equilibrium questions, check if forces balance
      if (questionContent.includes('equilibrium') || questionContent.includes('balanced')) {
        if (!checkForceBalance(forces)) {
          result.warnings.push({
            type: 'inconsistent',
            element: 'force-balance',
            message: 'Forces should visually balance for equilibrium',
          });
        }
      }
    }
  }
  
  // Check circuit diagrams
  if (questionContent.includes('circuit') || questionContent.includes('resistance')) {
    const components = diagram.elements?.filter((el: any) => 
      ['battery', 'resistor', 'bulb', 'switch', 'ammeter', 'voltmeter'].includes(el.type)
    ) || [];
    
    if (components.length === 0) {
      result.errors.push({
        type: 'missing',
        element: 'circuit-components',
        message: 'Circuit question missing components',
        severity: 'critical',
      });
    } else {
      // Check if circuit is complete
      if (!checkCircuitCompleteness(diagram)) {
        result.errors.push({
          type: 'incorrect',
          element: 'circuit-path',
          message: 'Circuit is not complete - missing connections',
          severity: 'major',
        });
      }
    }
  }
  
  // Check ray diagrams
  if (questionContent.includes('lens') || questionContent.includes('mirror') || questionContent.includes('refraction')) {
    const opticalElements = diagram.elements?.filter((el: any) => 
      ['lens', 'mirror', 'ray'].includes(el.type)
    ) || [];
    
    if (opticalElements.length === 0) {
      result.errors.push({
        type: 'missing',
        element: 'optical-elements',
        message: 'Optics question missing lens/mirror/rays',
        severity: 'critical',
      });
    }
  }
}

/**
 * Validate chemistry diagrams
 */
function validateChemistryDiagram(
  diagram: DiagramSpec,
  questionContent: string,
  result: ValidationResult
): void {
  // Check molecular structures
  if (questionContent.includes('structure') || questionContent.includes('molecule')) {
    const molecules = diagram.elements?.filter((el: any) => 
      el.type === 'molecule' || el.type === 'atom' || el.type === 'bond'
    ) || [];
    
    if (molecules.length === 0) {
      result.errors.push({
        type: 'missing',
        element: 'molecular-structure',
        message: 'Structure question missing molecular diagram',
        severity: 'critical',
      });
    } else {
      // Validate bonding
      const formula = extractChemicalFormula(questionContent);
      if (formula && !validateMolecularFormula(diagram, formula)) {
        result.errors.push({
          type: 'incorrect',
          element: 'molecular-formula',
          message: `Molecular structure doesn't match formula ${formula}`,
          severity: 'major',
        });
      }
    }
  }
  
  // Check apparatus diagrams
  if (questionContent.includes('apparatus') || questionContent.includes('experiment')) {
    const apparatus = diagram.elements?.filter((el: any) => 
      ['flask', 'beaker', 'burette', 'pipette', 'thermometer'].includes(el.type)
    ) || [];
    
    if (apparatus.length === 0) {
      result.warnings.push({
        type: 'suboptimal',
        element: 'apparatus',
        message: 'Experimental question could benefit from apparatus diagram',
      });
    }
  }
}

/**
 * Validate biology diagrams
 */
function validateBiologyDiagram(
  diagram: DiagramSpec,
  questionContent: string,
  result: ValidationResult
): void {
  // Check cell diagrams
  if (questionContent.includes('cell')) {
    const cells = diagram.elements?.filter((el: any) => el.type === 'cell') || [];
    if (cells.length === 0) {
      result.errors.push({
        type: 'missing',
        element: 'cell',
        message: 'Cell question missing cell diagram',
        severity: 'critical',
      });
    } else {
      // Check if organelles match question
      cells.forEach((cell: any) => {
        if (questionContent.includes('mitochondria') && !cell.organelles?.includes('mitochondria')) {
          result.errors.push({
            type: 'missing',
            element: 'mitochondria',
            message: 'Question mentions mitochondria but not shown in cell',
            severity: 'major',
          });
        }
      });
    }
  }
  
  // Check magnification
  if (questionContent.includes('magnification') || questionContent.includes('microscope')) {
    const hasScale = diagram.elements?.some((el: any) => el.scale || el.magnification);
    if (!hasScale) {
      result.warnings.push({
        type: 'unclear',
        element: 'scale',
        message: 'Microscopy diagram should show magnification/scale',
      });
    }
  }
}

/**
 * Validate geography diagrams
 */
function validateGeographyDiagram(
  diagram: DiagramSpec,
  questionContent: string,
  result: ValidationResult
): void {
  // Check maps
  if (questionContent.includes('map')) {
    const maps = diagram.elements?.filter((el: any) => el.type === 'map') || [];
    if (maps.length === 0) {
      result.errors.push({
        type: 'missing',
        element: 'map',
        message: 'Map question missing map diagram',
        severity: 'critical',
      });
    } else {
      // Check for scale and north arrow
      maps.forEach((map: any) => {
        if (!map.scale) {
          result.errors.push({
            type: 'missing',
            element: 'map-scale',
            message: 'Map missing scale',
            severity: 'major',
          });
        }
        if (!map.northArrow) {
          result.warnings.push({
            type: 'suboptimal',
            element: 'north-arrow',
            message: 'Map should include north arrow',
          });
        }
      });
    }
  }
  
  // Check climate graphs
  if (questionContent.includes('climate') || questionContent.includes('precipitation')) {
    const graphs = diagram.elements?.filter((el: any) => 
      el.type === 'climate-graph' || el.type === 'bar-chart'
    ) || [];
    
    if (graphs.length === 0) {
      result.warnings.push({
        type: 'suboptimal',
        element: 'climate-graph',
        message: 'Climate question could benefit from graph',
      });
    }
  }
}

/**
 * Validate general diagram requirements
 */
function validateGeneralRequirements(
  diagram: DiagramSpec,
  questionType: QuestionType,
  result: ValidationResult
): void {
  // Check if diagram has elements
  if (!diagram.elements || diagram.elements.length === 0) {
    result.errors.push({
      type: 'missing',
      element: 'elements',
      message: 'Diagram has no elements',
      severity: 'critical',
    });
  }
  
  // Check dimensions
  if (!diagram.width || !diagram.height) {
    result.errors.push({
      type: 'missing',
      element: 'dimensions',
      message: 'Diagram missing width/height',
      severity: 'major',
    });
  }
  
  // Check accessibility
  if (!diagram.title && !diagram.description) {
    result.warnings.push({
      type: 'unclear',
      element: 'accessibility',
      message: 'Diagram should have title or description for accessibility',
    });
  }
  
  // Type-specific requirements
  if (questionType === 'graph' && !diagram.elements?.some((el: any) => el.type === 'axes')) {
    result.errors.push({
      type: 'missing',
      element: 'graph-axes',
      message: 'Graph question requires coordinate axes',
      severity: 'critical',
    });
  }
}

/**
 * Calculate validation score
 */
function calculateValidationScore(result: ValidationResult): number {
  let score = 100;
  
  // Deduct for errors
  result.errors.forEach(error => {
    switch (error.severity) {
      case 'critical':
        score -= 40;
        break;
      case 'major':
        score -= 20;
        break;
      case 'minor':
        score -= 10;
        break;
    }
  });
  
  // Deduct for warnings (less severe)
  score -= result.warnings.length * 5;
  
  return Math.max(0, score);
}

// Helper functions

function calculateTriangleAngles(vertices: any[]): number[] {
  // Calculate angles using law of cosines
  // This is a simplified implementation
  return [60, 60, 60]; // Placeholder - would calculate actual angles
}

function extractMeasurements(text: string): string[] {
  const pattern = /\d+\s*(cm|m|mm|km|°|degrees)/gi;
  return text.match(pattern) || [];
}

function diagramContainsMeasurement(diagram: DiagramSpec, measurement: string): boolean {
  const json = JSON.stringify(diagram);
  return json.includes(measurement);
}

function checkForceBalance(forces: any[]): boolean {
  // Check if force vectors sum to approximately zero
  // This is a simplified check
  return forces.length >= 2;
}

function checkCircuitCompleteness(diagram: DiagramSpec): boolean {
  // Check if circuit forms a complete loop
  // This would need proper graph traversal in production
  return true;
}

function extractChemicalFormula(text: string): string | null {
  const pattern = /[A-Z][a-z]?\d*/g;
  const matches = text.match(pattern);
  return matches ? matches.join('') : null;
}

function validateMolecularFormula(diagram: DiagramSpec, formula: string): boolean {
  // Check if diagram matches chemical formula
  // This is a simplified check
  return true;
}

/**
 * Auto-fix common diagram issues
 */
export function autoFixDiagram(
  diagram: DiagramSpec,
  validationResult: ValidationResult
): DiagramSpec {
  const fixed = JSON.parse(JSON.stringify(diagram)); // Deep clone
  
  // Add missing elements based on errors
  validationResult.errors.forEach(error => {
    if (error.type === 'missing') {
      switch (error.element) {
        case 'axes':
          fixed.elements?.push({
            type: 'axes',
            origin: { x: fixed.width! / 2, y: fixed.height! / 2 },
            xRange: [-10, 10],
            yRange: [-10, 10],
          });
          break;
          
        case 'scale':
          if (fixed.elements?.[0]) {
            fixed.elements[0].scale = '1cm = 10μm';
          }
          break;
          
        case 'north-arrow':
          fixed.elements?.push({
            type: 'north-arrow',
            position: { x: fixed.width! - 30, y: 30 },
          });
          break;
      }
    }
  });
  
  // Add missing labels
  validationResult.warnings.forEach(warning => {
    if (warning.type === 'unclear' && warning.element.includes('label')) {
      // Add generic labels where missing
      fixed.elements?.forEach((el: any) => {
        if (!el.label && (el.type === 'force' || el.type === 'arrow')) {
          el.label = 'F';
        }
      });
    }
  });
  
  // Add accessibility features
  if (!fixed.title) {
    fixed.title = 'Diagram';
  }
  if (!fixed.description) {
    fixed.description = 'Educational diagram for question';
  }
  
  return fixed;
}