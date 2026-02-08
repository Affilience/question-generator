// Define simple types for prompt functions
type Topic = { id: string; name: string; subtopics: string[] };
type Difficulty = 'easy' | 'medium' | 'hard';
type Subtopic = string;

// Import global variety system
import {
  getVarietyParameters,
  getVarietyInstructions,
  getDifficultyGuidance,
} from './prompts-common';

export const AQA_MATHS_GCSE_ASSESSMENT_OBJECTIVES = {
  AO1: "Use and apply standard techniques",
  AO2: "Reason, interpret and communicate mathematically", 
  AO3: "Solve problems within mathematics and in other contexts"
};

export const AQA_MATHS_GCSE_WEIGHTING = {
  AO1: "50%",
  AO2: "25%", 
  AO3: "25%"
};

export const AQA_MATHS_GCSE_COMMAND_WORDS = {
  "Calculate": "Work out from given facts, figures or information",
  "Show": "Provide structured evidence that leads to a given result",
  "Find": "Obtain a numerical answer showing relevant stages in the working",
  "Work out": "Calculate or solve",
  "Solve": "Find the solution(s) to an equation or system of equations",
  "Simplify": "Reduce to the simplest form",
  "Expand": "Remove brackets by multiplying out",
  "Factorise": "Express as a product of factors",
  "Sketch": "Draw a graph showing the main features",
  "Plot": "Mark points accurately on a graph",
  "Draw": "Construct accurately using appropriate instruments",
  "Estimate": "Find an approximate numerical value",
  "Hence": "Use your previous answer",
  "Express": "Write in a specified form",
  "Prove": "Establish the truth of a statement using logical argument",
  "Explain": "Set out reasons or factors",
  "Describe": "Give the main characteristics",
  "State": "Express in clear terms",
  "Write down": "Give an answer without detailed working",
  "List": "Give a sequence of brief answers with no explanation",
  "Complete": "Finish a mathematical statement, table or diagram",
  "Determine": "Establish with certainty"
};

export const AQA_MATHS_GCSE_FORMULA_SHEET = {
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

export const AQA_MATHS_GCSE_TOPIC_SPECIFICATIONS = {
  NUMBER: {
    topics: [
      "Structure and calculation",
      "Fractions, decimals and percentages", 
      "Measures and accuracy",
      "Indices and surds"
    ],
    questionTypes: {
      "Order of operations": { marks: [1, 2], difficulty: ["Foundation", "Higher"] },
      "Fraction calculations": { marks: [2, 3, 4], difficulty: ["Foundation", "Higher"] },
      "Percentage calculations": { marks: [2, 3, 4], difficulty: ["Foundation", "Higher"] },
      "Compound percentage": { marks: [3, 4, 5], difficulty: ["Higher"] },
      "Reverse percentage": { marks: [3, 4], difficulty: ["Higher"] },
      "Standard form": { marks: [2, 3, 4], difficulty: ["Foundation", "Higher"] },
      "Indices laws": { marks: [2, 3], difficulty: ["Higher"] },
      "Surds": { marks: [2, 3, 4], difficulty: ["Higher"] },
      "Bounds and accuracy": { marks: [3, 4, 5], difficulty: ["Higher"] },
      "Estimation": { marks: [2, 3], difficulty: ["Foundation", "Higher"] }
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
      "Simplifying expressions": { marks: [1, 2], difficulty: ["Foundation", "Higher"] },
      "Expanding brackets": { marks: [2, 3], difficulty: ["Foundation", "Higher"] },
      "Factorising": { marks: [2, 3], difficulty: ["Foundation", "Higher"] },
      "Solving linear equations": { marks: [2, 3, 4], difficulty: ["Foundation", "Higher"] },
      "Solving quadratic equations": { marks: [3, 4, 5], difficulty: ["Higher"] },
      "Simultaneous equations": { marks: [4, 5, 6], difficulty: ["Higher"] },
      "Linear inequalities": { marks: [2, 3], difficulty: ["Foundation", "Higher"] },
      "Quadratic inequalities": { marks: [4, 5], difficulty: ["Higher"] },
      "Straight line graphs": { marks: [3, 4, 5], difficulty: ["Foundation", "Higher"] },
      "Quadratic graphs": { marks: [4, 5, 6], difficulty: ["Higher"] },
      "Other graphs": { marks: [3, 4, 5], difficulty: ["Higher"] },
      "Transformations of graphs": { marks: [4, 5], difficulty: ["Higher"] },
      "Arithmetic sequences": { marks: [2, 3, 4], difficulty: ["Foundation", "Higher"] },
      "Geometric sequences": { marks: [3, 4], difficulty: ["Higher"] },
      "Quadratic sequences": { marks: [4, 5], difficulty: ["Higher"] }
    }
  },
  RATIO_PROPORTION: {
    topics: [
      "Ratio",
      "Fractions, percentages and proportion",
      "Rates of change"
    ],
    questionTypes: {
      "Simplifying ratios": { marks: [1, 2], difficulty: ["Foundation", "Higher"] },
      "Sharing in a ratio": { marks: [2, 3, 4], difficulty: ["Foundation", "Higher"] },
      "Direct proportion": { marks: [2, 3, 4], difficulty: ["Foundation", "Higher"] },
      "Inverse proportion": { marks: [3, 4], difficulty: ["Higher"] },
      "Percentage increase/decrease": { marks: [2, 3], difficulty: ["Foundation", "Higher"] },
      "Compound interest": { marks: [3, 4, 5], difficulty: ["Higher"] },
      "Growth and decay": { marks: [4, 5, 6], difficulty: ["Higher"] },
      "Speed, distance, time": { marks: [2, 3, 4], difficulty: ["Foundation", "Higher"] },
      "Density, mass, volume": { marks: [2, 3], difficulty: ["Foundation", "Higher"] },
      "Pressure, force, area": { marks: [2, 3], difficulty: ["Foundation", "Higher"] }
    }
  },
  GEOMETRY_MEASURES: {
    topics: [
      "Properties and constructions",
      "Mensuration",
      "Trigonometry",
      "Further trigonometry",
      "Vectors"
    ],
    questionTypes: {
      "Angle properties": { marks: [2, 3, 4], difficulty: ["Foundation", "Higher"] },
      "Polygon angles": { marks: [2, 3], difficulty: ["Foundation", "Higher"] },
      "Circle theorems": { marks: [3, 4, 5], difficulty: ["Higher"] },
      "Constructions": { marks: [2, 3], difficulty: ["Foundation", "Higher"] },
      "Loci": { marks: [3, 4], difficulty: ["Foundation", "Higher"] },
      "Congruence and similarity": { marks: [3, 4, 5], difficulty: ["Higher"] },
      "Pythagoras theorem": { marks: [2, 3, 4], difficulty: ["Foundation", "Higher"] },
      "Area and perimeter": { marks: [2, 3, 4], difficulty: ["Foundation", "Higher"] },
      "Surface area and volume": { marks: [3, 4, 5], difficulty: ["Foundation", "Higher"] },
      "Trigonometry ratios": { marks: [2, 3, 4], difficulty: ["Higher"] },
      "Sine and cosine rules": { marks: [4, 5, 6], difficulty: ["Higher"] },
      "3D trigonometry": { marks: [5, 6], difficulty: ["Higher"] },
      "Trigonometric graphs": { marks: [3, 4], difficulty: ["Higher"] },
      "Vector operations": { marks: [3, 4, 5], difficulty: ["Higher"] },
      "Vector geometry": { marks: [5, 6], difficulty: ["Higher"] }
    }
  },
  STATISTICS_PROBABILITY: {
    topics: [
      "Statistics",
      "Probability"
    ],
    questionTypes: {
      "Statistical diagrams": { marks: [2, 3, 4], difficulty: ["Foundation", "Higher"] },
      "Averages and spread": { marks: [2, 3, 4], difficulty: ["Foundation", "Higher"] },
      "Cumulative frequency": { marks: [4, 5, 6], difficulty: ["Higher"] },
      "Histograms": { marks: [4, 5, 6], difficulty: ["Higher"] },
      "Scatter graphs": { marks: [3, 4, 5], difficulty: ["Foundation", "Higher"] },
      "Time series": { marks: [2, 3], difficulty: ["Foundation", "Higher"] },
      "Basic probability": { marks: [1, 2, 3], difficulty: ["Foundation", "Higher"] },
      "Tree diagrams": { marks: [3, 4, 5], difficulty: ["Foundation", "Higher"] },
      "Conditional probability": { marks: [3, 4, 5], difficulty: ["Higher"] },
      "Venn diagrams": { marks: [2, 3, 4], difficulty: ["Foundation", "Higher"] },
      "Sets": { marks: [2, 3], difficulty: ["Higher"] }
    }
  }
};

export const AQA_MATHS_GCSE_MARK_SCHEMES = {
  MARKS: {
    M: "Method mark - for using a correct method",
    A: "Accuracy mark - for a correct answer",
    B: "Independent mark - for a correct statement or conclusion",
    C: "Communication mark - for explaining reasoning",
    ft: "Follow through - credit given for consistent working based on an earlier error",
    oe: "Or equivalent - accept alternative correct forms",
    cao: "Correct answer only - no method marks available",
    dep: "Dependent on previous mark being awarded"
  },
  CONVENTIONS: {
    "Rounding": "Unless specified, answers should be given to an appropriate degree of accuracy",
    "Units": "Marks may be lost for incorrect or missing units",
    "Working": "Working must be shown for method marks",
    "Accuracy": "Final answers should match the required accuracy unless follow-through applies"
  }
};

export function getAQAMathsGCSECompactPrompt(topic: Topic, difficulty: Difficulty, subtopic: Subtopic): string {
  
  const tier = difficulty === 'easy' ? 'Foundation' : 
               difficulty === 'medium' ? 'Foundation/Higher' : 'Higher';
               
  const markAllocation = difficulty === 'easy' ? 2 : difficulty === 'medium' ? 3 : 4;
  
  // Use global variety system for systematic question variation
  const variety = getVarietyParameters();
  const varietyInstructions = getVarietyInstructions(variety);
  
  // Add specific variety instructions for surds to prevent repetitive questions
  const surdVarietyInstructions = subtopic && subtopic.toLowerCase().includes('surd') ? `

CRITICAL SURD QUESTION VARIETY REQUIREMENTS:
- NEVER repeat the same numbers (avoid √72, √18, √50, √8 repeatedly)
- Use diverse surd values: √20, √27, √28, √45, √63, √75, √80, √98, √108, √125, √147, √162, √180
- Mix question types: single simplification, multiple surds, surd arithmetic, comparison problems
- Vary perfect square factors: use 4, 9, 16, 25, 36, 49, 64, 81, 100 in different combinations
- Ensure each question feels distinctly different from previous ones
` : '';

  return `Generate an AQA GCSE Mathematics ${tier} tier question.

QUESTION REQUIREMENTS:
- Topic: ${topic.name}${subtopic ? `, Subtopic: ${subtopic}` : ''}
- Marks: ${markAllocation}
- Tier: ${tier}
- Style: Authentic AQA GCSE Mathematics format${surdVarietyInstructions}

${varietyInstructions}

ASSESSMENT OBJECTIVES (use appropriate weighting):
${Object.entries(AQA_MATHS_GCSE_ASSESSMENT_OBJECTIVES).map(([ao, desc]) => `${ao}: ${desc}`).join('\n')}

MARK ALLOCATION GUIDE:
${markAllocation} marks total:
${markAllocation <= 2 ? '- Mainly AO1 (standard techniques)' : 
  markAllocation <= 4 ? '- Mix of AO1 (techniques) and AO2/AO3 (reasoning/problem solving)' :
  '- Balanced across AO1, AO2, AO3 with emphasis on reasoning and problem solving'}

MATHEMATICS CONTENT REQUIREMENTS:
- Use appropriate mathematical notation and symbols
- Include diagrams where relevant (describe clearly for text generation)
- Ensure numerical values lead to reasonable answers
- Use contexts appropriate for GCSE students
- Follow AQA command word conventions

AVAILABLE FORMULAS (students have access to):
${Object.entries(AQA_MATHS_GCSE_FORMULA_SHEET).map(([category, formulas]) => 
  `${category}: ${Object.entries(formulas).map(([name, formula]) => `${name} = ${formula}`).join(', ')}`
).join('\n')}

QUESTION STRUCTURE:
1. Clear context if applicable
2. Precise mathematical language
3. Appropriate difficulty progression within the question
4. Realistic numerical values

MARK SCHEME REQUIREMENTS:
- Use M marks for method, A marks for accuracy, B marks for conclusions
- Include 'ft' (follow through) where appropriate
- Specify 'cao' (correct answer only) for straightforward calculations
- Use 'oe' (or equivalent) for alternative correct forms

Generate a complete question with full mark scheme using AQA conventions.`;
}

export function getAQAMathsGCSEFoundationPrompt(topic: Topic, difficulty: Difficulty, subtopic: Subtopic): string {
  return getAQAMathsGCSECompactPrompt(topic, 'easy', subtopic) + `

FOUNDATION TIER SPECIFIC REQUIREMENTS:
- Accessible language and contexts
- Step-by-step approach suitable for Foundation students
- Focus on AO1 (standard techniques) with some AO2
- Avoid complex algebraic manipulation
- Use familiar number ranges
- Include supportive scaffolding if multi-part question`;
}

export function getAQAMathsGCSEHigherPrompt(topic: Topic, difficulty: Difficulty, subtopic: Subtopic): string {
  return getAQAMathsGCSECompactPrompt(topic, difficulty === 'easy' ? 'medium' : difficulty, subtopic) + `

HIGHER TIER SPECIFIC REQUIREMENTS:
- Include sophisticated mathematical reasoning
- Balanced coverage of AO1, AO2, AO3
- Multi-step problems requiring planning
- Abstract contexts and generalizations
- Advanced techniques where appropriate
- Expect independent mathematical thinking`;
}