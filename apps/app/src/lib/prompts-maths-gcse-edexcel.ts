import type { QuestionGenerationParams } from './prompts/prompt-builder';
import type { QuestionType } from '@/types';

export const EDEXCEL_MATHS_GCSE_ASSESSMENT_OBJECTIVES = {
  AO1: "Use and apply standard techniques",
  AO2: "Reason, interpret and communicate mathematically",
  AO3: "Solve problems within mathematics and in other contexts"
};

export const EDEXCEL_MATHS_GCSE_WEIGHTING = {
  AO1: "50%",
  AO2: "25%",
  AO3: "25%"
};

export const EDEXCEL_MATHS_GCSE_COMMAND_WORDS = {
  "Calculate": "Work out from given facts, figures or information",
  "Show": "Provide structured evidence that leads to a given result",
  "Find": "Obtain a numerical answer showing relevant stages in the working",
  "Work out": "Calculate or solve to find an answer",
  "Solve": "Find the solution(s) to an equation or inequality",
  "Simplify": "Reduce to the simplest form by collecting like terms, canceling etc",
  "Expand": "Remove brackets by multiplying out",
  "Factorise": "Express as a product of factors",
  "Sketch": "Draw a graph showing the main features without detailed plotting",
  "Draw": "Construct accurately using appropriate tools",
  "Plot": "Mark points accurately on a coordinate grid",
  "Estimate": "Find an approximate numerical value",
  "Hence": "Use your previous answer to help with this part",
  "Express": "Write in a specified form",
  "Prove": "Use mathematical arguments to establish the truth of a statement",
  "Explain": "Set out reasons or factors clearly",
  "Describe": "Give the main characteristics or features",
  "State": "Express clearly in words or mathematical notation",
  "Write down": "Give an answer without showing working",
  "List": "Give a sequence of brief answers",
  "Complete": "Finish a mathematical statement, table or diagram",
  "Determine": "Establish with certainty using mathematical reasoning",
  "Compare": "Identify similarities and differences",
  "Interpret": "Explain the meaning or significance of something"
};

export const EDEXCEL_MATHS_GCSE_FORMULA_SHEET = {
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

export const EDEXCEL_MATHS_GCSE_TOPIC_SPECIFICATIONS = {
  NUMBER: {
    topics: [
      "Structure and calculation",
      "Fractions, decimals and percentages",
      "Measures and accuracy",
      "Indices and surds"
    ],
    questionTypes: {
      "Order of operations (BIDMAS)": { marks: [1, 2], difficulty: ["Foundation", "Higher"] },
      "Fraction operations": { marks: [2, 3, 4], difficulty: ["Foundation", "Higher"] },
      "Percentage problems": { marks: [2, 3, 4], difficulty: ["Foundation", "Higher"] },
      "Compound percentage/interest": { marks: [3, 4, 5], difficulty: ["Higher"] },
      "Reverse percentages": { marks: [3, 4], difficulty: ["Higher"] },
      "Standard form calculations": { marks: [2, 3, 4], difficulty: ["Foundation", "Higher"] },
      "Index laws": { marks: [2, 3], difficulty: ["Higher"] },
      "Surd calculations": { marks: [2, 3, 4], difficulty: ["Higher"] },
      "Upper and lower bounds": { marks: [3, 4, 5], difficulty: ["Higher"] },
      "Estimation and approximation": { marks: [2, 3], difficulty: ["Foundation", "Higher"] },
      "Recurring decimals": { marks: [3, 4], difficulty: ["Higher"] }
    }
  },
  ALGEBRA: {
    topics: [
      "Notation, vocabulary and manipulation",
      "Graphs",
      "Solving equations and inequalities",
      "Sequences"
    ],
    questionTypes: {
      "Algebraic manipulation": { marks: [1, 2, 3], difficulty: ["Foundation", "Higher"] },
      "Expanding brackets": { marks: [2, 3], difficulty: ["Foundation", "Higher"] },
      "Factorising expressions": { marks: [2, 3, 4], difficulty: ["Foundation", "Higher"] },
      "Linear equations": { marks: [2, 3], difficulty: ["Foundation", "Higher"] },
      "Quadratic equations": { marks: [3, 4, 5], difficulty: ["Higher"] },
      "Simultaneous equations": { marks: [4, 5, 6], difficulty: ["Higher"] },
      "Linear inequalities": { marks: [2, 3, 4], difficulty: ["Foundation", "Higher"] },
      "Quadratic inequalities": { marks: [4, 5], difficulty: ["Higher"] },
      "Coordinate geometry": { marks: [3, 4, 5], difficulty: ["Foundation", "Higher"] },
      "Quadratic graphs": { marks: [4, 5, 6], difficulty: ["Higher"] },
      "Cubic and reciprocal graphs": { marks: [3, 4, 5], difficulty: ["Higher"] },
      "Exponential graphs": { marks: [3, 4], difficulty: ["Higher"] },
      "Graph transformations": { marks: [4, 5, 6], difficulty: ["Higher"] },
      "Arithmetic sequences": { marks: [2, 3, 4], difficulty: ["Foundation", "Higher"] },
      "Geometric sequences": { marks: [3, 4, 5], difficulty: ["Higher"] },
      "Quadratic sequences": { marks: [4, 5], difficulty: ["Higher"] }
    }
  },
  RATIO_PROPORTION: {
    topics: [
      "Ratio and proportion",
      "Direct and inverse proportion",
      "Percentage and percentage change"
    ],
    questionTypes: {
      "Ratio simplification": { marks: [1, 2], difficulty: ["Foundation", "Higher"] },
      "Sharing in ratios": { marks: [2, 3, 4], difficulty: ["Foundation", "Higher"] },
      "Map scales": { marks: [2, 3], difficulty: ["Foundation", "Higher"] },
      "Direct proportion": { marks: [2, 3, 4], difficulty: ["Foundation", "Higher"] },
      "Inverse proportion": { marks: [3, 4, 5], difficulty: ["Higher"] },
      "Percentage change": { marks: [2, 3], difficulty: ["Foundation", "Higher"] },
      "Compound measures": { marks: [2, 3, 4], difficulty: ["Foundation", "Higher"] },
      "Currency conversion": { marks: [2, 3], difficulty: ["Foundation", "Higher"] },
      "Best value problems": { marks: [3, 4], difficulty: ["Foundation", "Higher"] }
    }
  },
  GEOMETRY_MEASURES: {
    topics: [
      "Properties of shapes",
      "Constructions and loci",
      "Mensuration",
      "Pythagoras and trigonometry",
      "Vectors"
    ],
    questionTypes: {
      "Angle calculations": { marks: [2, 3, 4], difficulty: ["Foundation", "Higher"] },
      "Properties of polygons": { marks: [2, 3], difficulty: ["Foundation", "Higher"] },
      "Circle theorems": { marks: [3, 4, 5, 6], difficulty: ["Higher"] },
      "Constructions": { marks: [2, 3, 4], difficulty: ["Foundation", "Higher"] },
      "Loci problems": { marks: [3, 4, 5], difficulty: ["Foundation", "Higher"] },
      "Congruence and similarity": { marks: [3, 4, 5], difficulty: ["Higher"] },
      "Area and perimeter": { marks: [2, 3, 4], difficulty: ["Foundation", "Higher"] },
      "Surface area and volume": { marks: [3, 4, 5, 6], difficulty: ["Foundation", "Higher"] },
      "Pythagoras' theorem": { marks: [2, 3, 4], difficulty: ["Foundation", "Higher"] },
      "Trigonometric ratios": { marks: [2, 3, 4], difficulty: ["Higher"] },
      "Sine and cosine rules": { marks: [4, 5, 6], difficulty: ["Higher"] },
      "3D trigonometry": { marks: [5, 6], difficulty: ["Higher"] },
      "Vector calculations": { marks: [3, 4, 5], difficulty: ["Higher"] }
    }
  },
  STATISTICS_PROBABILITY: {
    topics: [
      "Statistical representation",
      "Statistical measures",
      "Probability"
    ],
    questionTypes: {
      "Statistical diagrams": { marks: [2, 3, 4], difficulty: ["Foundation", "Higher"] },
      "Frequency tables": { marks: [2, 3], difficulty: ["Foundation", "Higher"] },
      "Averages from frequency tables": { marks: [2, 3, 4], difficulty: ["Foundation", "Higher"] },
      "Cumulative frequency": { marks: [4, 5, 6], difficulty: ["Higher"] },
      "Box plots": { marks: [3, 4, 5], difficulty: ["Higher"] },
      "Histograms": { marks: [4, 5, 6], difficulty: ["Higher"] },
      "Scatter graphs and correlation": { marks: [3, 4, 5], difficulty: ["Foundation", "Higher"] },
      "Time series": { marks: [2, 3, 4], difficulty: ["Foundation", "Higher"] },
      "Basic probability": { marks: [1, 2, 3], difficulty: ["Foundation", "Higher"] },
      "Probability trees": { marks: [3, 4, 5], difficulty: ["Foundation", "Higher"] },
      "Conditional probability": { marks: [3, 4, 5], difficulty: ["Higher"] },
      "Venn diagrams": { marks: [2, 3, 4], difficulty: ["Foundation", "Higher"] }
    }
  }
};

export const EDEXCEL_MATHS_GCSE_MARK_SCHEMES = {
  MARKS: {
    M: "Method mark - for using a correct method",
    A: "Accuracy mark - for correct answer or conclusion",
    B: "Independent mark - for correct statement or result",
    C: "Communication mark - for clear reasoning or explanation",
    ft: "Follow through - accept answers based on their working",
    oe: "Or equivalent - accept mathematically equivalent answers",
    cao: "Correct answer only",
    dep: "Dependent on gaining previous mark",
    awfw: "Award full marks for correct working leading to answer",
    sc: "Special case - alternative acceptable method"
  },
  CONVENTIONS: {
    "Working": "Method marks require appropriate working to be shown",
    "Accuracy": "Final answers should be appropriate level of accuracy",
    "Units": "Correct units must be included where required",
    "Diagrams": "Accurate diagrams may gain method marks",
    "Rounding": "Follow any specified rounding requirements"
  }
};

export function getEdexcelMathsGCSECompactPrompt(params: QuestionGenerationParams): string {
  const { topic, difficulty, targetMarks: marks, subtopic } = params;
  
  const tier = difficulty === 'easy' ? 'Foundation' : 
               difficulty === 'medium' ? 'Foundation/Higher overlap' : 'Higher';
               
  const markAllocation = marks || (difficulty === 'easy' ? 2 : difficulty === 'medium' ? 3 : 4);

  return `Generate an Edexcel GCSE Mathematics ${tier} tier question.

QUESTION REQUIREMENTS:
- Topic: ${topic}${subtopic ? `, Subtopic: ${subtopic}` : ''}
- Marks: ${markAllocation}
- Tier: ${tier}
- Style: Authentic Edexcel GCSE Mathematics format

ASSESSMENT OBJECTIVES (use appropriate weighting):
${Object.entries(EDEXCEL_MATHS_GCSE_ASSESSMENT_OBJECTIVES).map(([ao, desc]) => `${ao}: ${desc}`).join('\n')}

MARK ALLOCATION GUIDE:
${markAllocation} marks total:
${markAllocation <= 2 ? '- Focus on AO1 (standard techniques)' : 
  markAllocation <= 4 ? '- Mix of AO1 and AO2 (reasoning and communication)' :
  '- Balanced across AO1, AO2, AO3 with problem-solving emphasis'}

EDEXCEL SPECIFIC REQUIREMENTS:
- Use clear, accessible language appropriate for students
- Include realistic contexts that students can relate to
- Follow Edexcel's structured approach to multi-part questions
- Use appropriate mathematical notation and conventions
- Ensure questions build in complexity if multi-part

AVAILABLE FORMULAS (students have access to):
${Object.entries(EDEXCEL_MATHS_GCSE_FORMULA_SHEET).map(([category, formulas]) => 
  `${category}: ${Object.entries(formulas).map(([name, formula]) => `${name} = ${formula}`).join(', ')}`
).join('\n')}

QUESTION STRUCTURE:
1. Clear context setting if applicable
2. Precise mathematical language using Edexcel command words
3. Appropriate numerical values for realistic solutions
4. Progressive difficulty through question parts

MARK SCHEME REQUIREMENTS:
- Use M marks for method, A marks for accuracy, B marks for independent results
- Include follow through (ft) marking where appropriate  
- Use 'cao' (correct answer only) for straightforward calculations
- Include 'oe' (or equivalent) for alternative correct forms
- Be specific about required working for method marks

Generate a complete question with comprehensive mark scheme using Edexcel conventions.`;
}

export function getEdexcelMathsGCSEFoundationPrompt(params: QuestionGenerationParams): string {
  return getEdexcelMathsGCSECompactPrompt({
    ...params,
    difficulty: 'easy'
  }) + `

FOUNDATION TIER SPECIFIC REQUIREMENTS:
- Use familiar, everyday contexts
- Focus primarily on AO1 with clear, step-by-step approaches
- Avoid complex multi-step reasoning
- Use supportive scaffolding in multi-part questions
- Ensure numerical values lead to 'nice' answers
- Include clear visual aids or diagrams where helpful`;
}

export function getEdexcelMathsGCSEHigherPrompt(params: QuestionGenerationParams): string {
  return getEdexcelMathsGCSECompactPrompt({
    ...params,
    difficulty: params.difficulty === 'easy' ? 'medium' : params.difficulty
  }) + `

HIGHER TIER SPECIFIC REQUIREMENTS:
- Include sophisticated reasoning and problem-solving
- Balance all assessment objectives appropriately
- Require students to make connections between topics
- Use abstract or unfamiliar contexts
- Include proof, justification or explanation elements
- Test deeper mathematical understanding beyond routine procedures`;
}