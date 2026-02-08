import type { QuestionGenerationParams } from './prompts/prompt-builder';
import {
  getRandomVarietyInstructions,
} from './prompts-common';


export const OCR_MATHS_GCSE_ASSESSMENT_OBJECTIVES = {
  AO1: "Use and apply standard techniques",
  AO2: "Reason, interpret and communicate mathematically",
  AO3: "Solve problems within mathematics and in other contexts"
};

export const OCR_MATHS_GCSE_WEIGHTING = {
  AO1: "50%",
  AO2: "25%", 
  AO3: "25%"
};

export const OCR_MATHS_GCSE_COMMAND_WORDS = {
  "Calculate": "Work out from given facts, figures or information",
  "Show": "Provide structured evidence that leads to a given result",
  "Find": "Obtain a numerical answer showing relevant stages",
  "Work out": "Calculate, showing appropriate working",
  "Solve": "Find the answer(s) to an equation or problem",
  "Simplify": "Make simpler by collecting like terms, cancelling etc.",
  "Expand": "Multiply out brackets",
  "Factorise": "Write as a product of factors",
  "Sketch": "Draw approximately, showing key features",
  "Draw": "Construct accurately using ruler, compasses etc.",
  "Plot": "Mark accurately on a coordinate grid",
  "Estimate": "Find an approximate value",
  "Hence": "Use your previous answer",
  "Express": "Write in a specified form",
  "Prove": "Show that a result is true using logical argument",
  "Explain": "Give clear reasons",
  "Describe": "Give the main features or characteristics",
  "State": "Write down clearly without working",
  "Write down": "Give the answer without showing working",
  "List": "Write a sequence of answers",
  "Complete": "Fill in missing parts",
  "Determine": "Find with certainty",
  "Compare": "Identify similarities and differences",
  "Interpret": "Explain what something means",
  "Justify": "Give mathematical reasons for your answer"
};

export const OCR_MATHS_GCSE_FORMULA_SHEET = {
  AREA: {
    "Circle": "πr²",
    "Triangle": "½ × base × height", 
    "Parallelogram": "base × height",
    "Trapezium": "½(a + b)h"
  },
  CIRCUMFERENCE: {
    "Circle": "2πr or πd"
  },
  VOLUME: {
    "Prism": "area of cross section × length",
    "Cylinder": "πr²h",
    "Pyramid": "⅓ × base area × height",
    "Cone": "⅓πr²h", 
    "Sphere": "⁴⁄₃πr³"
  },
  SURFACE_AREA: {
    "Cylinder": "2πrh + 2πr²",
    "Sphere": "4πr²"
  },
  TRIGONOMETRY: {
    "Sine Rule": "a/sin A = b/sin B = c/sin C",
    "Cosine Rule": "a² = b² + c² - 2bc cos A", 
    "Area of Triangle": "½ab sin C"
  },
  QUADRATIC: {
    "Formula": "x = (-b ± √(b² - 4ac)) / 2a"
  }
};

export const OCR_MATHS_GCSE_TOPIC_SPECIFICATIONS = {
  NUMBER: {
    topics: [
      "Number", "Fractions, decimals and percentages", 
      "Approximation and estimation", "Indices and standard form"
    ],
    questionTypes: {
      "Order of operations": { marks: [1, 2], difficulty: ["Foundation", "Higher"] },
      "Four operations with integers": { marks: [1, 2, 3], difficulty: ["Foundation", "Higher"] },
      "Prime factorisation": { marks: [2, 3], difficulty: ["Foundation", "Higher"] },
      "HCF and LCM": { marks: [2, 3], difficulty: ["Foundation", "Higher"] },
      "Fraction calculations": { marks: [2, 3, 4], difficulty: ["Foundation", "Higher"] },
      "Decimal calculations": { marks: [2, 3], difficulty: ["Foundation", "Higher"] },
      "Percentage calculations": { marks: [2, 3, 4], difficulty: ["Foundation", "Higher"] },
      "Percentage increase/decrease": { marks: [2, 3, 4], difficulty: ["Foundation", "Higher"] },
      "Compound interest": { marks: [3, 4, 5], difficulty: ["Higher"] },
      "Reverse percentages": { marks: [3, 4], difficulty: ["Higher"] },
      "Approximation and rounding": { marks: [1, 2, 3], difficulty: ["Foundation", "Higher"] },
      "Estimation": { marks: [2, 3], difficulty: ["Foundation", "Higher"] },
      "Upper and lower bounds": { marks: [3, 4, 5], difficulty: ["Higher"] },
      "Standard form": { marks: [2, 3, 4], difficulty: ["Foundation", "Higher"] },
      "Index laws": { marks: [2, 3], difficulty: ["Higher"] },
      "Surds": { marks: [2, 3, 4], difficulty: ["Higher"] },
      "Recurring decimals to fractions": { marks: [3, 4], difficulty: ["Higher"] }
    }
  },
  ALGEBRA: {
    topics: [
      "Algebraic notation and manipulation", "Graphs", 
      "Solving equations and inequalities", "Sequences"
    ],
    questionTypes: {
      "Collecting like terms": { marks: [1, 2], difficulty: ["Foundation", "Higher"] },
      "Expanding single brackets": { marks: [1, 2], difficulty: ["Foundation", "Higher"] },
      "Expanding double brackets": { marks: [2, 3], difficulty: ["Foundation", "Higher"] },
      "Factorising": { marks: [2, 3, 4], difficulty: ["Foundation", "Higher"] },
      "Substitution into formulas": { marks: [1, 2, 3], difficulty: ["Foundation", "Higher"] },
      "Linear equations": { marks: [2, 3], difficulty: ["Foundation", "Higher"] },
      "Equations with brackets": { marks: [2, 3, 4], difficulty: ["Foundation", "Higher"] },
      "Quadratic equations": { marks: [3, 4, 5], difficulty: ["Higher"] },
      "Simultaneous equations": { marks: [4, 5, 6], difficulty: ["Higher"] },
      "Linear inequalities": { marks: [2, 3], difficulty: ["Foundation", "Higher"] },
      "Quadratic inequalities": { marks: [4, 5], difficulty: ["Higher"] },
      "Straight line graphs": { marks: [3, 4, 5], difficulty: ["Foundation", "Higher"] },
      "Parallel and perpendicular lines": { marks: [3, 4], difficulty: ["Higher"] },
      "Quadratic graphs": { marks: [4, 5, 6], difficulty: ["Higher"] },
      "Cubic graphs": { marks: [3, 4], difficulty: ["Higher"] },
      "Reciprocal graphs": { marks: [2, 3], difficulty: ["Higher"] },
      "Exponential graphs": { marks: [2, 3], difficulty: ["Higher"] },
      "Graph transformations": { marks: [4, 5], difficulty: ["Higher"] },
      "Linear sequences": { marks: [2, 3], difficulty: ["Foundation", "Higher"] },
      "Quadratic sequences": { marks: [4, 5], difficulty: ["Higher"] },
      "Geometric sequences": { marks: [3, 4], difficulty: ["Higher"] }
    }
  },
  GEOMETRY: {
    topics: [
      "Angles and polygons", "Circle geometry", "Constructions and loci",
      "Similarity and congruence", "Pythagoras and trigonometry", "Measures and mensuration"
    ],
    questionTypes: {
      "Angle facts": { marks: [1, 2, 3], difficulty: ["Foundation", "Higher"] },
      "Angles in polygons": { marks: [2, 3], difficulty: ["Foundation", "Higher"] },
      "Circle theorems": { marks: [3, 4, 5, 6], difficulty: ["Higher"] },
      "Constructions with ruler and compasses": { marks: [2, 3, 4], difficulty: ["Foundation", "Higher"] },
      "Loci": { marks: [2, 3, 4], difficulty: ["Foundation", "Higher"] },
      "Scale drawings and bearings": { marks: [2, 3, 4], difficulty: ["Foundation", "Higher"] },
      "Congruent triangles": { marks: [2, 3, 4], difficulty: ["Higher"] },
      "Similar shapes": { marks: [3, 4, 5], difficulty: ["Foundation", "Higher"] },
      "Area and perimeter": { marks: [2, 3, 4], difficulty: ["Foundation", "Higher"] },
      "Area of compound shapes": { marks: [3, 4, 5], difficulty: ["Foundation", "Higher"] },
      "Surface area": { marks: [3, 4, 5], difficulty: ["Foundation", "Higher"] },
      "Volume": { marks: [2, 3, 4, 5], difficulty: ["Foundation", "Higher"] },
      "Pythagoras' theorem": { marks: [2, 3, 4], difficulty: ["Foundation", "Higher"] },
      "Trigonometric ratios": { marks: [2, 3, 4], difficulty: ["Higher"] },
      "Sine and cosine rules": { marks: [4, 5, 6], difficulty: ["Higher"] },
      "3D Pythagoras and trigonometry": { marks: [5, 6], difficulty: ["Higher"] }
    }
  },
  RATIO_PROPORTION: {
    topics: [
      "Ratio and proportion", "Direct and inverse proportion", 
      "Compound measures"
    ],
    questionTypes: {
      "Simplifying ratios": { marks: [1, 2], difficulty: ["Foundation", "Higher"] },
      "Sharing in a ratio": { marks: [2, 3, 4], difficulty: ["Foundation", "Higher"] },
      "Best buys": { marks: [2, 3], difficulty: ["Foundation", "Higher"] },
      "Direct proportion": { marks: [2, 3, 4], difficulty: ["Foundation", "Higher"] },
      "Inverse proportion": { marks: [3, 4, 5], difficulty: ["Higher"] },
      "Speed, distance, time": { marks: [2, 3, 4], difficulty: ["Foundation", "Higher"] },
      "Density": { marks: [2, 3], difficulty: ["Foundation", "Higher"] },
      "Pressure": { marks: [2, 3], difficulty: ["Foundation", "Higher"] }
    }
  },
  STATISTICS_PROBABILITY: {
    topics: [
      "Statistics", "Probability"
    ],
    questionTypes: {
      "Statistical diagrams": { marks: [2, 3, 4], difficulty: ["Foundation", "Higher"] },
      "Frequency tables": { marks: [1, 2, 3], difficulty: ["Foundation", "Higher"] },
      "Mean from frequency table": { marks: [2, 3, 4], difficulty: ["Foundation", "Higher"] },
      "Median and quartiles": { marks: [2, 3, 4], difficulty: ["Foundation", "Higher"] },
      "Cumulative frequency": { marks: [4, 5, 6], difficulty: ["Higher"] },
      "Box plots": { marks: [3, 4, 5], difficulty: ["Higher"] },
      "Histograms": { marks: [4, 5, 6], difficulty: ["Higher"] },
      "Scatter graphs": { marks: [3, 4, 5], difficulty: ["Foundation", "Higher"] },
      "Time series": { marks: [2, 3], difficulty: ["Foundation", "Higher"] },
      "Probability from tables": { marks: [1, 2], difficulty: ["Foundation", "Higher"] },
      "Theoretical probability": { marks: [1, 2, 3], difficulty: ["Foundation", "Higher"] },
      "Tree diagrams": { marks: [3, 4, 5], difficulty: ["Foundation", "Higher"] },
      "Conditional probability": { marks: [3, 4, 5], difficulty: ["Higher"] },
      "Venn diagrams": { marks: [2, 3, 4], difficulty: ["Foundation", "Higher"] }
    }
  }
};

export const OCR_MATHS_GCSE_MARK_SCHEMES = {
  MARKS: {
    M: "Method mark - for correct method or approach",
    A: "Accuracy mark - for correct answer or calculation", 
    B: "Independent mark - for correct statement or conclusion",
    ft: "Follow through - accept answer consistent with working",
    oe: "Or equivalent - accept alternative correct forms",
    cao: "Correct answer only - no method marks",
    dep: "Dependent on gaining previous mark",
    awfw: "Award full marks for correct final answer with working",
    isw: "Ignore subsequent working"
  },
  CONVENTIONS: {
    "Working": "Clear working must be shown for method marks",
    "Accuracy": "Answers should be to appropriate degree of accuracy",
    "Units": "Units must be included where appropriate",
    "Constructions": "Use ruler and compasses only for construction questions",
    "Diagrams": "Accurate diagrams may earn method marks"
  }
};

export function getOCRMathsGCSECompactPrompt(params: QuestionGenerationParams): string {
  const { topic, difficulty, targetMarks: marks, subtopic } = params;
  
  const tier = difficulty === 'easy' ? 'Foundation' : 
               difficulty === 'medium' ? 'Foundation/Higher overlap' : 'Higher';
               
  const markAllocation = marks || (difficulty === 'easy' ? 2 : difficulty === 'medium' ? 3 : 4);
  
  // Use global variety system for systematic question variation
  const varietyInstructions = getRandomVarietyInstructions();

  return `Generate an OCR GCSE Mathematics ${tier} tier question.

QUESTION REQUIREMENTS:
- Topic: ${topic}${subtopic ? `, Subtopic: ${subtopic}` : ''}
- Marks: ${markAllocation}
- Tier: ${tier}
- Style: Authentic OCR GCSE Mathematics format

${varietyInstructions}

ASSESSMENT OBJECTIVES (use appropriate weighting):
${Object.entries(OCR_MATHS_GCSE_ASSESSMENT_OBJECTIVES).map(([ao, desc]) => `${ao}: ${desc}`).join('\n')}

MARK ALLOCATION GUIDE:
${markAllocation} marks total:
${markAllocation <= 2 ? '- Primarily AO1 (standard techniques)' : 
  markAllocation <= 4 ? '- Mix of AO1 and AO2 (reasoning and communication)' :
  '- Balanced across AO1, AO2, AO3 with emphasis on problem-solving'}

OCR SPECIFIC REQUIREMENTS:
- Use clear, student-friendly language
- Include practical, real-world contexts where appropriate
- Follow OCR's systematic approach to problem-solving
- Use precise mathematical vocabulary and notation
- Ensure numerical values are realistic and lead to sensible answers

AVAILABLE FORMULAS (students have access to):
${Object.entries(OCR_MATHS_GCSE_FORMULA_SHEET).map(([category, formulas]) => 
  `${category}: ${Object.entries(formulas).map(([name, formula]) => `${name} = ${formula}`).join(', ')}`
).join('\n')}

QUESTION STRUCTURE:
1. Clear context or scenario if applicable
2. Precise mathematical language using OCR command words
3. Progressive structure in multi-part questions
4. Appropriate complexity for the intended tier

MARK SCHEME REQUIREMENTS:
- Use M marks for method, A marks for accuracy, B marks for independent marks
- Include follow through (ft) marking where appropriate
- Use 'cao' (correct answer only) for routine calculations
- Include 'oe' (or equivalent) for alternative correct expressions
- Specify what working is required for method marks

Generate a complete question with detailed mark scheme using OCR conventions.`;
}

export function getOCRMathsGCSEFoundationPrompt(params: QuestionGenerationParams): string {
  return getOCRMathsGCSECompactPrompt({
    ...params,
    difficulty: 'easy'
  }) + `

FOUNDATION TIER SPECIFIC REQUIREMENTS:
- Use familiar, everyday contexts that students can relate to
- Focus on AO1 with clear, step-by-step approaches
- Provide supportive scaffolding in multi-step problems
- Use 'nice' numbers that lead to straightforward calculations
- Include visual aids or diagrams to support understanding
- Avoid overly complex reasoning or abstract concepts`;
}

export function getOCRMathsGCSEHigherPrompt(params: QuestionGenerationParams): string {
  return getOCRMathsGCSECompactPrompt({
    ...params,
    difficulty: params.difficulty === 'easy' ? 'medium' : params.difficulty
  }) + `

HIGHER TIER SPECIFIC REQUIREMENTS:
- Include sophisticated mathematical reasoning and problem-solving
- Balance all assessment objectives appropriately  
- Require connections between different mathematical topics
- Use more abstract or unfamiliar contexts
- Include elements of proof, justification or mathematical communication
- Test conceptual understanding beyond routine procedures
- Challenge students with multi-step reasoning`;
}
