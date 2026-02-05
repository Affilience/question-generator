import type { QuestionGenerationParams } from './prompts/prompt-builder';

export const EDEXCEL_MATHS_ALEVEL_ASSESSMENT_OBJECTIVES = {
  AO1: "Use and apply standard techniques",
  AO2: "Reason, interpret and communicate mathematically",
  AO3: "Solve problems within mathematics and in other contexts"
};

export const EDEXCEL_MATHS_ALEVEL_WEIGHTING = {
  AO1: "50%",
  AO2: "30%",
  AO3: "20%"
};

export const EDEXCEL_MATHS_ALEVEL_COMMAND_WORDS = {
  "Find": "Obtain a numerical answer showing relevant working",
  "Show that": "Provide mathematical evidence to establish a given result",
  "Prove": "Use mathematical argument to establish truth of statement",
  "Hence": "Use your previous answer",
  "Hence or otherwise": "Use your previous answer or use alternative method",
  "Solve": "Find the solution(s)",
  "Determine": "Establish with certainty",
  "Calculate": "Work out from given information",
  "Evaluate": "Find the numerical value",
  "Express": "Write in a specified form",
  "Write down": "State without detailed working",
  "State": "Express clearly and precisely",
  "Sketch": "Draw showing main features positioned accurately",
  "Draw": "Construct accurately using mathematical instruments",
  "Plot": "Mark position accurately on graph",
  "Describe": "Give main characteristics",
  "Explain": "Set out reasons",
  "Comment": "Give reasoned opinion based on evidence",
  "Interpret": "Explain meaning of mathematical results",
  "Justify": "Give mathematical reasons for answer or conclusion",
  "Verify": "Confirm truth of statement or result",
  "Deduce": "Conclude from given information",
  "Use": "Apply given information, formula or method"
};

export const EDEXCEL_MATHS_ALEVEL_FORMULA_BOOKLET = {
  PURE_MATHEMATICS: {
    "Quadratic equation": "For ax² + bx + c = 0: x = (-b ± √(b² - 4ac))/(2a)",
    "Laws of logarithms": "log_a(x) + log_a(y) = log_a(xy), log_a(x) - log_a(y) = log_a(x/y), k log_a(x) = log_a(x^k)",
    "Coordinate geometry": "Distance AB = √[(x₂ - x₁)² + (y₂ - y₁)²]",
    "Circle": "Equation (x - a)² + (y - b)² = r²",
    "Arithmetic sequence": "nth term: a + (n - 1)d, Sum: ½n[2a + (n - 1)d]",
    "Geometric sequence": "nth term: ar^(n-1), Sum to infinity: a/(1 - r) for |r| < 1",
    "Binomial theorem": "(a + b)ⁿ = Σ(ⁿCᵣ)aⁿ⁻ʳbʳ",
    "Differentiation": "d/dx(xⁿ) = nxⁿ⁻¹, d/dx(e^(kx)) = ke^(kx), d/dx(ln x) = 1/x",
    "Integration": "∫xⁿ dx = xⁿ⁺¹/(n+1) + c, ∫e^(kx) dx = e^(kx)/k + c",
    "Trigonometric identities": "sin²θ + cos²θ = 1, 1 + tan²θ = sec²θ, 1 + cot²θ = cosec²θ",
    "Addition formulas": "sin(A ± B) = sin A cos B ± cos A sin B, cos(A ± B) = cos A cos B ∓ sin A sin B"
  },
  MECHANICS: {
    "Constant acceleration": "v = u + at, s = ut + ½at², v² = u² + 2as, s = ½(u + v)t",
    "Newton's second law": "F = ma",
    "Projectile motion": "Horizontal: x = ut, Vertical: y = ut - ½gt²"
  },
  STATISTICS: {
    "Probability": "P(A ∪ B) = P(A) + P(B) - P(A ∩ B)",
    "Binomial distribution": "P(X = r) = ⁿCᵣ p^r (1-p)^(n-r), E(X) = np, Var(X) = np(1-p)",
    "Poisson distribution": "P(X = r) = (λʳe^(-λ))/r!, E(X) = Var(X) = λ",
    "Normal distribution": "X ~ N(μ, σ²), Z = (X - μ)/σ"
  }
};

export const EDEXCEL_MATHS_ALEVEL_TOPIC_SPECIFICATIONS = {
  PURE_MATHEMATICS: {
    ALGEBRA_FUNCTIONS: {
      topics: [
        "Proof", "Algebra and functions", "Coordinate geometry",
        "Sequences and series", "Trigonometry", "Exponentials and logarithms"
      ],
      questionTypes: {
        "Algebraic proof": { marks: [3, 4, 5], difficulty: ["AS", "A2"] },
        "Proof by induction": { marks: [5, 6, 7, 8], difficulty: ["A2"] },
        "Functions and mappings": { marks: [3, 4, 5], difficulty: ["AS", "A2"] },
        "Composite and inverse functions": { marks: [4, 5, 6], difficulty: ["AS", "A2"] },
        "Function transformations": { marks: [3, 4, 5], difficulty: ["AS", "A2"] },
        "Modulus functions": { marks: [4, 5, 6], difficulty: ["A2"] },
        "Parametric equations": { marks: [4, 5, 6, 7], difficulty: ["A2"] },
        "Coordinate geometry": { marks: [3, 4, 5, 6], difficulty: ["AS", "A2"] },
        "Circle equations": { marks: [4, 5, 6], difficulty: ["AS", "A2"] },
        "Sequences and series": { marks: [3, 4, 5, 6], difficulty: ["AS", "A2"] },
        "Binomial expansion": { marks: [3, 4, 5, 6], difficulty: ["AS", "A2"] },
        "Trigonometric equations": { marks: [3, 4, 5], difficulty: ["AS", "A2"] },
        "Trigonometric identities": { marks: [4, 5, 6, 7], difficulty: ["A2"] },
        "Exponential functions": { marks: [3, 4, 5], difficulty: ["AS", "A2"] },
        "Logarithmic functions": { marks: [3, 4, 5, 6], difficulty: ["AS", "A2"] }
      }
    },
    CALCULUS: {
      topics: [
        "Differentiation", "Integration", "Numerical methods"
      ],
      questionTypes: {
        "Basic differentiation": { marks: [2, 3, 4], difficulty: ["AS", "A2"] },
        "Chain rule": { marks: [3, 4, 5], difficulty: ["AS", "A2"] },
        "Product and quotient rules": { marks: [4, 5, 6], difficulty: ["AS", "A2"] },
        "Implicit differentiation": { marks: [4, 5, 6], difficulty: ["A2"] },
        "Parametric differentiation": { marks: [4, 5, 6], difficulty: ["A2"] },
        "Connected rates of change": { marks: [5, 6, 7], difficulty: ["A2"] },
        "Applications of differentiation": { marks: [5, 6, 7, 8], difficulty: ["AS", "A2"] },
        "Basic integration": { marks: [2, 3, 4], difficulty: ["AS", "A2"] },
        "Integration by substitution": { marks: [4, 5, 6], difficulty: ["A2"] },
        "Integration by parts": { marks: [4, 5, 6, 7], difficulty: ["A2"] },
        "Integration by partial fractions": { marks: [5, 6, 7], difficulty: ["A2"] },
        "Definite integration": { marks: [3, 4, 5], difficulty: ["AS", "A2"] },
        "Areas under curves": { marks: [4, 5, 6], difficulty: ["AS", "A2"] },
        "Volumes of revolution": { marks: [5, 6, 7], difficulty: ["A2"] },
        "Differential equations": { marks: [5, 6, 7, 8], difficulty: ["A2"] },
        "Newton-Raphson method": { marks: [4, 5, 6], difficulty: ["A2"] },
        "Numerical integration": { marks: [3, 4, 5], difficulty: ["A2"] }
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
        "Projectile motion": { marks: [5, 6, 7, 8], difficulty: ["A2"] },
        "Variable acceleration": { marks: [5, 6, 7], difficulty: ["A2"] },
        "Forces in equilibrium": { marks: [4, 5, 6], difficulty: ["AS", "A2"] },
        "Motion with resistance": { marks: [6, 7, 8], difficulty: ["A2"] },
        "Connected particles": { marks: [6, 7, 8, 9], difficulty: ["A2"] },
        "Impulse and momentum": { marks: [4, 5, 6, 7], difficulty: ["A2"] },
        "Work, energy and power": { marks: [5, 6, 7], difficulty: ["A2"] },
        "Circular motion": { marks: [5, 6, 7], difficulty: ["A2"] },
        "Simple harmonic motion": { marks: [6, 7, 8], difficulty: ["A2"] },
        "Moments and equilibrium": { marks: [4, 5, 6], difficulty: ["AS", "A2"] }
      }
    },
    STATISTICS: {
      topics: [
        "Statistical sampling", "Data presentation and interpretation",
        "Probability", "Statistical distributions", "Hypothesis testing"
      ],
      questionTypes: {
        "Sampling and data": { marks: [2, 3, 4], difficulty: ["AS", "A2"] },
        "Summary statistics": { marks: [3, 4, 5], difficulty: ["AS", "A2"] },
        "Probability calculations": { marks: [3, 4, 5, 6], difficulty: ["AS", "A2"] },
        "Discrete probability distributions": { marks: [4, 5, 6], difficulty: ["AS", "A2"] },
        "Binomial distribution": { marks: [4, 5, 6, 7], difficulty: ["AS", "A2"] },
        "Poisson distribution": { marks: [4, 5, 6], difficulty: ["A2"] },
        "Normal distribution": { marks: [4, 5, 6, 7], difficulty: ["AS", "A2"] },
        "Central Limit Theorem": { marks: [5, 6, 7], difficulty: ["A2"] },
        "Confidence intervals": { marks: [4, 5, 6], difficulty: ["A2"] },
        "Hypothesis testing": { marks: [6, 7, 8, 9], difficulty: ["A2"] },
        "Chi-squared tests": { marks: [6, 7, 8], difficulty: ["A2"] },
        "Regression and correlation": { marks: [5, 6, 7], difficulty: ["A2"] }
      }
    }
  }
};

export const EDEXCEL_MATHS_ALEVEL_MARK_SCHEMES = {
  MARKS: {
    M: "Method mark - for correct method or partial method",
    A: "Accuracy mark - for correct answer or accurate calculation",
    B: "Independent mark - for correct statement or conclusion",
    E: "Explanation mark - for mathematical reasoning",
    ft: "Follow through - accept work based on earlier incorrect answer",
    oe: "Or equivalent - alternative correct expression",
    cao: "Correct answer only - no partial credit",
    dep: "Dependent on previous mark",
    awfw: "Award full marks if answer correct with working",
    isw: "Ignore subsequent working",
    sc: "Special case - exceptional circumstances"
  },
  CONVENTIONS: {
    "Working": "All working must be clearly shown for method marks",
    "Accuracy": "Exact values required unless otherwise stated",
    "Form": "Answers must be in required form where specified",
    "Units": "Correct units essential in applied contexts",
    "Diagrams": "Accurate sketches may score method marks"
  }
};

export function getEdexcelMathsALevelCompactPrompt(params: QuestionGenerationParams): string {
  const { topic, difficulty, targetMarks: marks, subtopic } = params;
  
  const level = difficulty === 'easy' ? 'AS Level' : 
                difficulty === 'medium' ? 'AS/A2 bridging' : 'A2 Level';
               
  const markAllocation = marks || (difficulty === 'easy' ? 4 : difficulty === 'medium' ? 6 : 8);

  return `Generate an Edexcel A Level Mathematics question.

QUESTION REQUIREMENTS:
- Topic: ${topic}${subtopic ? `, Subtopic: ${subtopic}` : ''}
- Marks: ${markAllocation}
- Level: ${level}
- Style: Authentic Edexcel A Level Mathematics format

ASSESSMENT OBJECTIVES (use appropriate weighting):
${Object.entries(EDEXCEL_MATHS_ALEVEL_ASSESSMENT_OBJECTIVES).map(([ao, desc]) => `${ao}: ${desc}`).join('\n')}

EDEXCEL A LEVEL MARK DISTRIBUTION:
${markAllocation} marks total:
${markAllocation <= 4 ? '- Focus on AO1 with some AO2' : 
  markAllocation <= 7 ? '- Balanced AO1/AO2 with some AO3' :
  '- Full assessment objective range with substantial reasoning'}

EDEXCEL SPECIFIC REQUIREMENTS:
- Use precise mathematical language and notation
- Include clear, logical progression through solution steps  
- Test deep conceptual understanding, not just procedures
- Use realistic and engaging contexts where appropriate
- Follow Edexcel's structured approach to complex problems

FORMULA BOOKLET (students have access to):
Pure Mathematics: Quadratic formula, Laws of logarithms, Basic differentiation/integration
Applied Mathematics: SUVAT equations, F=ma, Probability distributions
(Students expected to know basic trigonometric identities, standard derivatives/integrals)

QUESTION STRUCTURE:
1. Clear mathematical setup with appropriate context
2. Progressive complexity through question parts
3. Opportunities for students to demonstrate understanding
4. Realistic numerical values and contexts

MARK SCHEME REQUIREMENTS:
- Use M marks for method, A marks for accuracy, B marks for conclusions, E marks for explanations
- Include comprehensive follow-through marking (ft)
- Accept alternative valid methods with 'oe' (or equivalent)
- Be specific about required working and mathematical communication
- Include guidance on common student errors

Generate a complete A Level question with detailed mark scheme using Edexcel conventions.`;
}

export function getEdexcelMathsALevelASPrompt(params: QuestionGenerationParams): string {
  return getEdexcelMathsALevelCompactPrompt({
    ...params,
    difficulty: 'easy'
  }) + `

AS LEVEL SPECIFIC REQUIREMENTS:
- Focus on building from GCSE foundations systematically
- Emphasize AO1 and AO2 with clear scaffolding
- Include step-by-step development of new concepts
- Test core AS techniques thoroughly
- Provide supportive structure in multi-part questions
- Use familiar contexts building to more abstract applications`;
}

export function getEdexcelMathsALevelA2Prompt(params: QuestionGenerationParams): string {
  return getEdexcelMathsALevelCompactPrompt({
    ...params,
    difficulty: params.difficulty === 'easy' ? 'medium' : params.difficulty
  }) + `

A2 LEVEL SPECIFIC REQUIREMENTS:
- Include synoptic elements linking multiple topic areas
- Require sophisticated mathematical reasoning and proof skills
- Test all assessment objectives with appropriate weighting
- Include complex real-world applications and modeling
- Expect independent problem-solving and mathematical communication
- Test advanced techniques in challenging contexts
- Include abstract mathematical thinking and generalization`;
}