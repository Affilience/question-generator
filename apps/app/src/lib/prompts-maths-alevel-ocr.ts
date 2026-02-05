import type { QuestionGenerationParams } from './prompts/prompt-builder';

export const OCR_MATHS_ALEVEL_ASSESSMENT_OBJECTIVES = {
  AO1: "Use and apply standard techniques",
  AO2: "Reason, interpret and communicate mathematically",
  AO3: "Solve problems within mathematics and in other contexts"
};

export const OCR_MATHS_ALEVEL_WEIGHTING = {
  AO1: "50%",
  AO2: "30%",
  AO3: "20%"
};

export const OCR_MATHS_ALEVEL_COMMAND_WORDS = {
  "Find": "Obtain a numerical answer, showing working where appropriate",
  "Show that": "Provide mathematical evidence to establish the given result",
  "Prove": "Use mathematical argument to establish the truth of a statement",
  "Hence": "Use your previous answer to help with this part",
  "Hence or otherwise": "Use your previous answer or find an alternative method",
  "Solve": "Find the solution(s) to an equation or problem",
  "Determine": "Establish with certainty using mathematical reasoning",
  "Calculate": "Work out from given facts, figures or information",
  "Evaluate": "Find the numerical value of an expression",
  "Express": "Write in a specified form or format",
  "Write down": "State without working (answer is immediate or obvious)",
  "State": "Express clearly and precisely",
  "Sketch": "Draw showing the main features accurately positioned",
  "Draw": "Construct accurately using mathematical instruments",
  "Plot": "Mark position accurately on a graph or coordinate system",
  "Describe": "Give the main characteristics or features",
  "Explain": "Give clear mathematical reasons",
  "Comment on": "Give a reasoned opinion based on mathematical evidence",
  "Interpret": "Explain the meaning of mathematical results in context",
  "Justify": "Give mathematical reasons to support your answer",
  "Verify": "Confirm that a given statement or result is true",
  "Deduce": "Use mathematical reasoning to reach a logical conclusion",
  "Use": "Apply given information, method or formula"
};

export const OCR_MATHS_ALEVEL_FORMULA_BOOKLET = {
  PURE_MATHEMATICS: {
    "Quadratic formula": "For ax² + bx + c = 0: x = (-b ± √(b² - 4ac))/(2a)",
    "Laws of logarithms": "log(xy) = log x + log y, log(x/y) = log x - log y, log(x^k) = k log x",
    "Coordinate geometry": "Distance = √[(x₂ - x₁)² + (y₂ - y₁)²], Midpoint = ((x₁ + x₂)/2, (y₁ + y₂)/2)",
    "Circle": "Equation (x - a)² + (y - b)² = r²",
    "Arithmetic sequence": "uₙ = a + (n - 1)d, Sₙ = ½n[2a + (n - 1)d] = ½n(first + last)",
    "Geometric sequence": "uₙ = ar^(n-1), Sₙ = a(1 - rⁿ)/(1 - r), S∞ = a/(1 - r) for |r| < 1",
    "Binomial expansion": "(1 + x)ⁿ = Σ(ⁿCᵣ)xʳ for |x| < 1",
    "Differentiation": "d/dx(xⁿ) = nxⁿ⁻¹, d/dx(eˣ) = eˣ, d/dx(ln x) = 1/x, d/dx(sin x) = cos x, d/dx(cos x) = -sin x",
    "Integration": "∫xⁿ dx = xⁿ⁺¹/(n+1) + c, ∫eˣ dx = eˣ + c, ∫(1/x) dx = ln|x| + c",
    "Trigonometric identities": "sin²θ + cos²θ = 1, 1 + tan²θ = sec²θ, 1 + cot²θ = cosec²θ",
    "Addition formulas": "sin(A ± B) = sin A cos B ± cos A sin B, cos(A ± B) = cos A cos B ∓ sin A sin B"
  },
  APPLIED_MATHEMATICS: {
    "Kinematics": "v = u + at, s = ut + ½at², v² = u² + 2as, s = ½(u + v)t",
    "Forces": "F = ma (Newton's second law)",
    "Moments": "Sum of clockwise moments = Sum of anticlockwise moments (equilibrium)",
    "Work and energy": "Work done = Force × distance, KE = ½mv², PE = mgh"
  },
  STATISTICS: {
    "Probability": "P(A ∪ B) = P(A) + P(B) - P(A ∩ B), P(A|B) = P(A ∩ B)/P(B)",
    "Binomial distribution": "X ~ B(n,p): P(X = r) = ⁿCᵣ pʳ(1-p)ⁿ⁻ʳ, E(X) = np, Var(X) = np(1-p)",
    "Poisson distribution": "X ~ Po(λ): P(X = r) = λʳe^(-λ)/r!, E(X) = Var(X) = λ",
    "Normal distribution": "X ~ N(μ, σ²), Z = (X - μ)/σ where Z ~ N(0,1)"
  }
};

export const OCR_MATHS_ALEVEL_TOPIC_SPECIFICATIONS = {
  PURE_MATHEMATICS: {
    PROOF_ALGEBRA: {
      topics: [
        "Proof", "Algebra and functions", "Coordinate geometry in the (x,y) plane",
        "Sequences and series", "Trigonometry", "Exponentials and logarithms"
      ],
      questionTypes: {
        "Proof techniques": { marks: [3, 4, 5, 6], difficulty: ["AS", "A2"] },
        "Proof by induction": { marks: [6, 7, 8], difficulty: ["A2"] },
        "Algebraic manipulation": { marks: [2, 3, 4], difficulty: ["AS", "A2"] },
        "Function operations": { marks: [3, 4, 5], difficulty: ["AS", "A2"] },
        "Composite functions": { marks: [3, 4, 5], difficulty: ["AS", "A2"] },
        "Inverse functions": { marks: [4, 5, 6], difficulty: ["AS", "A2"] },
        "Modulus functions": { marks: [4, 5, 6], difficulty: ["A2"] },
        "Function transformations": { marks: [3, 4, 5], difficulty: ["AS", "A2"] },
        "Parametric equations": { marks: [5, 6, 7], difficulty: ["A2"] },
        "Coordinate geometry": { marks: [3, 4, 5, 6], difficulty: ["AS", "A2"] },
        "Circle geometry": { marks: [4, 5, 6], difficulty: ["AS", "A2"] },
        "Arithmetic progressions": { marks: [2, 3, 4], difficulty: ["AS", "A2"] },
        "Geometric progressions": { marks: [3, 4, 5], difficulty: ["AS", "A2"] },
        "Series summation": { marks: [4, 5, 6], difficulty: ["A2"] },
        "Binomial expansion": { marks: [3, 4, 5, 6], difficulty: ["AS", "A2"] },
        "Radian measure": { marks: [2, 3, 4], difficulty: ["AS", "A2"] },
        "Trigonometric functions": { marks: [3, 4, 5], difficulty: ["AS", "A2"] },
        "Trigonometric equations": { marks: [3, 4, 5, 6], difficulty: ["AS", "A2"] },
        "Trigonometric identities": { marks: [4, 5, 6, 7], difficulty: ["A2"] },
        "Exponential functions": { marks: [3, 4, 5], difficulty: ["AS", "A2"] },
        "Logarithmic functions": { marks: [3, 4, 5, 6], difficulty: ["AS", "A2"] },
        "Exponential modelling": { marks: [5, 6, 7], difficulty: ["A2"] }
      }
    },
    CALCULUS: {
      topics: [
        "Differentiation", "Integration", "Numerical methods"
      ],
      questionTypes: {
        "Basic differentiation": { marks: [2, 3, 4], difficulty: ["AS", "A2"] },
        "Chain rule": { marks: [3, 4, 5], difficulty: ["AS", "A2"] },
        "Product rule": { marks: [3, 4, 5], difficulty: ["AS", "A2"] },
        "Quotient rule": { marks: [4, 5, 6], difficulty: ["AS", "A2"] },
        "Implicit differentiation": { marks: [4, 5, 6], difficulty: ["A2"] },
        "Parametric differentiation": { marks: [5, 6, 7], difficulty: ["A2"] },
        "Second derivatives": { marks: [3, 4, 5], difficulty: ["AS", "A2"] },
        "Applications of differentiation": { marks: [5, 6, 7, 8], difficulty: ["AS", "A2"] },
        "Related rates of change": { marks: [6, 7, 8], difficulty: ["A2"] },
        "Optimization problems": { marks: [6, 7, 8, 9], difficulty: ["AS", "A2"] },
        "Basic integration": { marks: [2, 3, 4], difficulty: ["AS", "A2"] },
        "Integration by substitution": { marks: [4, 5, 6, 7], difficulty: ["A2"] },
        "Integration by parts": { marks: [5, 6, 7], difficulty: ["A2"] },
        "Integration using partial fractions": { marks: [5, 6, 7, 8], difficulty: ["A2"] },
        "Definite integration": { marks: [3, 4, 5], difficulty: ["AS", "A2"] },
        "Areas under curves": { marks: [4, 5, 6], difficulty: ["AS", "A2"] },
        "Areas between curves": { marks: [5, 6, 7], difficulty: ["A2"] },
        "Volumes of revolution": { marks: [6, 7, 8], difficulty: ["A2"] },
        "Differential equations": { marks: [6, 7, 8, 9], difficulty: ["A2"] },
        "Newton-Raphson method": { marks: [4, 5, 6], difficulty: ["A2"] },
        "Numerical integration": { marks: [4, 5, 6], difficulty: ["A2"] }
      }
    }
  },
  APPLIED_MATHEMATICS: {
    MECHANICS: {
      topics: [
        "Kinematics", "Forces and Newton's laws", "Moments"
      ],
      questionTypes: {
        "Motion in a straight line": { marks: [3, 4, 5, 6], difficulty: ["AS", "A2"] },
        "Motion graphs": { marks: [3, 4, 5], difficulty: ["AS", "A2"] },
        "Variable acceleration": { marks: [5, 6, 7, 8], difficulty: ["A2"] },
        "Projectile motion": { marks: [6, 7, 8, 9], difficulty: ["A2"] },
        "Forces in equilibrium": { marks: [4, 5, 6], difficulty: ["AS", "A2"] },
        "Newton's laws of motion": { marks: [4, 5, 6, 7], difficulty: ["AS", "A2"] },
        "Connected particles": { marks: [7, 8, 9], difficulty: ["A2"] },
        "Inclined planes": { marks: [5, 6, 7], difficulty: ["AS", "A2"] },
        "Friction": { marks: [5, 6, 7, 8], difficulty: ["A2"] },
        "Circular motion": { marks: [6, 7, 8], difficulty: ["A2"] },
        "Simple harmonic motion": { marks: [7, 8, 9], difficulty: ["A2"] },
        "Impulse and momentum": { marks: [5, 6, 7], difficulty: ["A2"] },
        "Work, energy and power": { marks: [5, 6, 7, 8], difficulty: ["A2"] },
        "Moments and equilibrium": { marks: [4, 5, 6], difficulty: ["AS", "A2"] },
        "Centre of mass": { marks: [5, 6, 7], difficulty: ["A2"] }
      }
    },
    STATISTICS: {
      topics: [
        "Statistical sampling", "Data presentation and interpretation", 
        "Probability", "Statistical distributions", "Statistical hypothesis testing"
      ],
      questionTypes: {
        "Sampling methods": { marks: [2, 3, 4], difficulty: ["AS", "A2"] },
        "Data representation": { marks: [3, 4, 5], difficulty: ["AS", "A2"] },
        "Summary statistics": { marks: [3, 4, 5], difficulty: ["AS", "A2"] },
        "Probability calculations": { marks: [3, 4, 5, 6], difficulty: ["AS", "A2"] },
        "Conditional probability": { marks: [4, 5, 6], difficulty: ["AS", "A2"] },
        "Probability distributions": { marks: [4, 5, 6], difficulty: ["AS", "A2"] },
        "Binomial distribution": { marks: [4, 5, 6, 7], difficulty: ["AS", "A2"] },
        "Poisson distribution": { marks: [4, 5, 6], difficulty: ["A2"] },
        "Normal distribution": { marks: [5, 6, 7, 8], difficulty: ["AS", "A2"] },
        "Normal approximations": { marks: [6, 7, 8], difficulty: ["A2"] },
        "Sampling distributions": { marks: [5, 6, 7], difficulty: ["A2"] },
        "Confidence intervals": { marks: [4, 5, 6], difficulty: ["A2"] },
        "Hypothesis testing": { marks: [7, 8, 9, 10], difficulty: ["A2"] },
        "Chi-squared tests": { marks: [6, 7, 8], difficulty: ["A2"] },
        "Correlation and regression": { marks: [5, 6, 7], difficulty: ["A2"] }
      }
    }
  }
};

export const OCR_MATHS_ALEVEL_MARK_SCHEMES = {
  MARKS: {
    M: "Method mark - for using correct method or approach",
    A: "Accuracy mark - for correct answer or step",
    B: "Independent mark - for correct statement or conclusion",
    E: "Explanation mark - for mathematical reasoning or communication",
    ft: "Follow through - accept answers based on their previous working",
    oe: "Or equivalent - accept alternative correct forms",
    cao: "Correct answer only - no method credit available",
    dep: "Dependent on obtaining previous mark",
    awfw: "Award full marks for correct final answer with working",
    isw: "Ignore subsequent working",
    sc: "Special case - exceptional circumstances"
  },
  CONVENTIONS: {
    "Working": "Complete working must be shown for method marks",
    "Accuracy": "Exact answers required unless told to approximate",
    "Form": "Answer must be in the form specified in the question",
    "Units": "Correct units essential for applied mathematics questions",
    "Constructions": "Accurate geometric constructions may earn method marks"
  }
};

export function getOCRMathsALevelCompactPrompt(params: QuestionGenerationParams): string {
  const { topic, difficulty, targetMarks: marks, subtopic } = params;
  
  const level = difficulty === 'easy' ? 'AS Level' : 
                difficulty === 'medium' ? 'AS/A2 transition' : 'A2 Level';
               
  const markAllocation = marks || (difficulty === 'easy' ? 4 : difficulty === 'medium' ? 6 : 8);

  return `Generate an OCR A Level Mathematics question.

QUESTION REQUIREMENTS:
- Topic: ${topic}${subtopic ? `, Subtopic: ${subtopic}` : ''}
- Marks: ${markAllocation}
- Level: ${level}
- Style: Authentic OCR A Level Mathematics format

ASSESSMENT OBJECTIVES (use appropriate weighting):
${Object.entries(OCR_MATHS_ALEVEL_ASSESSMENT_OBJECTIVES).map(([ao, desc]) => `${ao}: ${desc}`).join('\n')}

OCR A LEVEL MARK DISTRIBUTION:
${markAllocation} marks total:
${markAllocation <= 4 ? '- Emphasis on AO1 with some AO2' : 
  markAllocation <= 7 ? '- Balanced AO1/AO2 with AO3 elements' :
  '- Full range across all assessment objectives with substantial reasoning'}

OCR SPECIFIC REQUIREMENTS:
- Use precise mathematical language and standard notation
- Include clear, logical development through solution steps
- Test conceptual understanding alongside technical skills
- Use realistic contexts that enhance mathematical understanding
- Follow OCR's structured approach to complex multi-part questions

FORMULA BOOKLET (students have access to):
${Object.entries(OCR_MATHS_ALEVEL_FORMULA_BOOKLET.PURE_MATHEMATICS).slice(0, 4).map(([topic, formula]) => `${topic}: ${formula}`).join('\n')}
Plus standard trigonometric identities, basic derivatives/integrals

QUESTION STRUCTURE:
1. Clear mathematical setup with appropriate context if needed
2. Systematic progression through question parts
3. Opportunities to demonstrate mathematical reasoning
4. Realistic numerical parameters and meaningful contexts

MARK SCHEME REQUIREMENTS:
- Use M marks for method, A marks for accuracy, B marks for conclusions, E marks for explanations
- Include thorough follow-through (ft) provision
- Accept alternative valid approaches with 'oe' notation
- Specify precisely what constitutes acceptable working
- Include guidance on common misconceptions and partial credit

Generate a complete A Level question with comprehensive mark scheme using OCR conventions.`;
}

export function getOCRMathsALevelASPrompt(params: QuestionGenerationParams): string {
  return getOCRMathsALevelCompactPrompt({
    ...params,
    difficulty: 'easy'
  }) + `

AS LEVEL SPECIFIC REQUIREMENTS:
- Build systematically from GCSE foundations
- Emphasize AO1 and AO2 with structured support
- Include step-by-step development of A Level concepts
- Test core AS techniques with appropriate depth
- Provide clear scaffolding in multi-part questions
- Use contexts that connect to student experience and build mathematical confidence`;
}

export function getOCRMathsALevelA2Prompt(params: QuestionGenerationParams): string {
  return getOCRMathsALevelCompactPrompt({
    ...params,
    difficulty: params.difficulty === 'easy' ? 'medium' : params.difficulty
  }) + `

A2 LEVEL SPECIFIC REQUIREMENTS:
- Include synoptic elements linking multiple mathematical areas
- Require sophisticated mathematical reasoning and proof techniques
- Test all assessment objectives with appropriate balance
- Include complex applications and mathematical modeling
- Expect independent mathematical thinking and problem-solving
- Test advanced techniques in challenging, unfamiliar contexts
- Require mathematical communication and justification skills`;
}