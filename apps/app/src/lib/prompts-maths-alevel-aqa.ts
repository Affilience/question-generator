// Define simple types for prompt functions
type Topic = { id: string; name: string; subtopics: string[] };
type Difficulty = 'easy' | 'medium' | 'hard';
type Subtopic = string;

export const AQA_MATHS_ALEVEL_ASSESSMENT_OBJECTIVES = {
  AO1: "Use and apply standard techniques",
  AO2: "Reason, interpret and communicate mathematically",
  AO3: "Solve problems within mathematics and in other contexts"
};

export const AQA_MATHS_ALEVEL_WEIGHTING = {
  AO1: "50%",
  AO2: "30%",
  AO3: "20%"
};

export const AQA_MATHS_ALEVEL_COMMAND_WORDS = {
  "Find": "Obtain a numerical answer showing relevant stages in the working",
  "Show that": "Provide mathematical evidence that leads to the given result",
  "Prove": "Provide a mathematical argument to establish the truth of a statement",
  "Hence": "Use your previous answer",
  "Hence or otherwise": "Use your previous answer or use an alternative method",
  "Solve": "Find the solution(s) to an equation or system of equations",
  "Determine": "Establish with certainty using mathematical reasoning",
  "Calculate": "Work out from given facts, figures or information",
  "Evaluate": "Find the numerical value",
  "Express": "Write in a specified form",
  "Write down": "Give an answer without detailed working",
  "State": "Express in clear terms",
  "Sketch": "Draw a graph showing the main features accurately positioned",
  "Draw": "Construct accurately using appropriate instruments",
  "Plot": "Mark points accurately on a graph",
  "Describe": "Give the main characteristics",
  "Explain": "Set out reasons or factors",
  "Comment": "Give a judgment based on a given statement",
  "Interpret": "Explain the meaning of mathematical results in context",
  "Justify": "Give reasons to support an answer or conclusion",
  "Verify": "Confirm that a given statement or result is true",
  "Deduce": "Use given information to reach a logical conclusion"
};

export const AQA_MATHS_ALEVEL_FORMULA_SHEET = {
  PURE: {
    "Quadratic formula": "x = (-b ± √(b² - 4ac)) / (2a)",
    "Laws of logarithms": "log_a x + log_a y = log_a(xy), log_a x - log_a y = log_a(x/y), k log_a x = log_a(x^k)",
    "Coordinate geometry": "Distance = √[(x₂-x₁)² + (y₂-y₁)²]",
    "Circle equation": "(x-a)² + (y-b)² = r²",
    "Differentiation": "If y = x^n, then dy/dx = nx^(n-1)",
    "Integration": "∫x^n dx = x^(n+1)/(n+1) + c, n ≠ -1",
    "Integration by parts": "∫u(dv/dx)dx = uv - ∫v(du/dx)dx",
    "Trigonometric identities": "sin²θ + cos²θ = 1, tan θ = sin θ/cos θ",
    "Addition formulas": "sin(A ± B) = sin A cos B ± cos A sin B, cos(A ± B) = cos A cos B ∓ sin A sin B"
  },
  APPLIED: {
    "Kinematic equations": "v = u + at, s = ut + ½at², v² = u² + 2as, s = ½(u + v)t",
    "Newton's second law": "F = ma",
    "Moment": "Moment = Force × perpendicular distance",
    "Probability": "P(A ∪ B) = P(A) + P(B) - P(A ∩ B)",
    "Binomial probability": "P(X = r) = ⁿCᵣ p^r (1-p)^(n-r)",
    "Normal distribution": "Z = (X - μ)/σ"
  }
};

export const AQA_MATHS_ALEVEL_TOPIC_SPECIFICATIONS = {
  PURE: {
    ALGEBRA_FUNCTIONS: {
      topics: [
        "Proof", "Algebra and functions", "Coordinate geometry in (x,y) plane", 
        "Sequences and series", "Trigonometry", "Exponentials and logarithms",
        "Differentiation", "Integration"
      ],
      questionTypes: {
        "Proof by contradiction": { marks: [4, 5, 6], difficulty: ["AS", "A2"] },
        "Proof by induction": { marks: [5, 6, 7], difficulty: ["A2"] },
        "Algebraic manipulation": { marks: [2, 3, 4], difficulty: ["AS", "A2"] },
        "Functions and mappings": { marks: [3, 4, 5], difficulty: ["AS", "A2"] },
        "Composite functions": { marks: [3, 4], difficulty: ["AS", "A2"] },
        "Inverse functions": { marks: [4, 5], difficulty: ["AS", "A2"] },
        "Transformations of functions": { marks: [3, 4, 5], difficulty: ["AS", "A2"] },
        "Parametric equations": { marks: [4, 5, 6], difficulty: ["A2"] },
        "Implicit differentiation": { marks: [3, 4, 5], difficulty: ["A2"] },
        "Arithmetic progressions": { marks: [3, 4], difficulty: ["AS", "A2"] },
        "Geometric progressions": { marks: [3, 4, 5], difficulty: ["AS", "A2"] },
        "Binomial expansion": { marks: [3, 4, 5], difficulty: ["AS", "A2"] },
        "Trigonometric equations": { marks: [3, 4, 5], difficulty: ["AS", "A2"] },
        "Trigonometric identities": { marks: [4, 5, 6], difficulty: ["A2"] },
        "Exponential growth/decay": { marks: [3, 4, 5], difficulty: ["AS", "A2"] },
        "Logarithmic equations": { marks: [3, 4], difficulty: ["AS", "A2"] },
        "Chain rule": { marks: [2, 3, 4], difficulty: ["AS", "A2"] },
        "Product rule": { marks: [3, 4], difficulty: ["AS", "A2"] },
        "Quotient rule": { marks: [3, 4], difficulty: ["AS", "A2"] },
        "Integration by substitution": { marks: [4, 5, 6], difficulty: ["A2"] },
        "Integration by parts": { marks: [4, 5, 6], difficulty: ["A2"] },
        "Differential equations": { marks: [5, 6, 7], difficulty: ["A2"] }
      }
    },
    CALCULUS: {
      topics: [
        "Differentiation", "Integration", "Numerical methods"
      ],
      questionTypes: {
        "Applications of differentiation": { marks: [4, 5, 6, 7], difficulty: ["AS", "A2"] },
        "Related rates": { marks: [5, 6], difficulty: ["A2"] },
        "Optimization problems": { marks: [6, 7, 8], difficulty: ["AS", "A2"] },
        "Definite integration": { marks: [3, 4, 5], difficulty: ["AS", "A2"] },
        "Areas under curves": { marks: [4, 5, 6], difficulty: ["AS", "A2"] },
        "Areas between curves": { marks: [5, 6, 7], difficulty: ["A2"] },
        "Volumes of revolution": { marks: [5, 6, 7], difficulty: ["A2"] },
        "Newton-Raphson method": { marks: [4, 5], difficulty: ["A2"] },
        "Numerical integration": { marks: [4, 5], difficulty: ["A2"] }
      }
    }
  },
  APPLIED: {
    MECHANICS: {
      topics: [
        "Mathematical models in mechanics", "Kinematics", "Forces and Newton's laws",
        "Moments"
      ],
      questionTypes: {
        "Motion in a straight line": { marks: [3, 4, 5, 6], difficulty: ["AS", "A2"] },
        "Motion under gravity": { marks: [4, 5, 6], difficulty: ["AS", "A2"] },
        "Connected particles": { marks: [6, 7, 8], difficulty: ["A2"] },
        "Projectile motion": { marks: [5, 6, 7, 8], difficulty: ["A2"] },
        "Forces in equilibrium": { marks: [4, 5, 6], difficulty: ["AS", "A2"] },
        "Newton's laws": { marks: [4, 5, 6, 7], difficulty: ["AS", "A2"] },
        "Friction": { marks: [5, 6, 7], difficulty: ["AS", "A2"] },
        "Inclined planes": { marks: [4, 5, 6], difficulty: ["AS", "A2"] },
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
        "Measures of location and spread": { marks: [3, 4, 5], difficulty: ["AS", "A2"] },
        "Probability calculations": { marks: [3, 4, 5], difficulty: ["AS", "A2"] },
        "Conditional probability": { marks: [4, 5, 6], difficulty: ["AS", "A2"] },
        "Discrete distributions": { marks: [4, 5, 6], difficulty: ["AS", "A2"] },
        "Binomial distribution": { marks: [4, 5, 6], difficulty: ["AS", "A2"] },
        "Poisson distribution": { marks: [4, 5, 6], difficulty: ["A2"] },
        "Normal distribution": { marks: [4, 5, 6, 7], difficulty: ["AS", "A2"] },
        "Hypothesis testing": { marks: [6, 7, 8, 9], difficulty: ["A2"] },
        "Chi-squared test": { marks: [6, 7, 8], difficulty: ["A2"] },
        "Correlation and regression": { marks: [5, 6, 7], difficulty: ["A2"] }
      }
    }
  }
};

export const AQA_MATHS_ALEVEL_MARK_SCHEMES = {
  MARKS: {
    M: "Method mark - for using a correct method or partial method",
    A: "Accuracy mark - for a correct answer or intermediate step",
    B: "Independent mark - for a correct statement, interpretation, or conclusion",
    E: "Explanation mark - for providing mathematical reasoning",
    ft: "Follow through - credit given for consistent working based on earlier error",
    oe: "Or equivalent - accept alternative correct forms",
    cao: "Correct answer only - no method marks available",
    dep: "Dependent on previous mark being awarded",
    awfw: "Award full marks for working",
    isw: "Ignore subsequent working"
  },
  CONVENTIONS: {
    "Working": "Full working must be shown for method marks",
    "Accuracy": "Answers should be given to appropriate accuracy unless specified",
    "Proof questions": "Must show complete logical argument",
    "Units": "Correct units required in applied questions",
    "Rounding": "Follow any specified rounding instructions"
  }
};

export function getAQAMathsALevelCompactPrompt(topic: Topic, difficulty: Difficulty, subtopic: Subtopic): string {
  
  const level = difficulty === 'easy' ? 'AS Level' : 
                difficulty === 'medium' ? 'AS/A2 Level' : 'A2 Level';
               
  const markAllocation = difficulty === 'easy' ? 4 : difficulty === 'medium' ? 6 : 8;

  return `Generate an AQA A Level Mathematics question.

QUESTION REQUIREMENTS:
- Topic: ${topic.name}${subtopic ? `, Subtopic: ${subtopic}` : ''}
- Marks: ${markAllocation}
- Level: ${level}
- Style: Authentic AQA A Level Mathematics format

ASSESSMENT OBJECTIVES (use appropriate weighting):
${Object.entries(AQA_MATHS_ALEVEL_ASSESSMENT_OBJECTIVES).map(([ao, desc]) => `${ao}: ${desc}`).join('\n')}

MARK ALLOCATION GUIDE:
${markAllocation} marks total:
${markAllocation <= 3 ? '- Primarily AO1 with some AO2' : 
  markAllocation <= 6 ? '- Balanced AO1 and AO2 with some AO3' :
  '- Full range across AO1, AO2, AO3 with substantial reasoning and problem-solving'}

MATHEMATICS CONTENT REQUIREMENTS:
- Use sophisticated mathematical notation and terminology
- Include complex multi-step reasoning
- Ensure questions test deep understanding, not just techniques
- Use A Level appropriate contexts and abstraction
- Follow AQA A Level command word conventions precisely

AVAILABLE FORMULAS (students have access to formula booklet):
${Object.entries(AQA_MATHS_ALEVEL_FORMULA_SHEET.PURE).slice(0, 5).map(([name, formula]) => `${name}: ${formula}`).join('\n')}

QUESTION STRUCTURE:
1. Clear mathematical setup with appropriate context
2. Progressive difficulty within parts if multi-part
3. Require sophisticated mathematical reasoning
4. Test understanding beyond routine application

MARK SCHEME REQUIREMENTS:
- Use M marks for method, A marks for accuracy, B marks for conclusions, E marks for explanations
- Include comprehensive follow-through (ft) marking
- Specify alternative methods where appropriate
- Use precise mathematical language in mark descriptors
- Include common errors and their treatment

Generate a complete A Level question with detailed mark scheme using AQA conventions.`;
}

export function getAQAMathsALevelASPrompt(topic: Topic, difficulty: Difficulty, subtopic: Subtopic): string {
  return getAQAMathsALevelCompactPrompt(topic, 'easy', subtopic) + `

AS LEVEL SPECIFIC REQUIREMENTS:
- Focus on fundamental A Level concepts
- Build from GCSE knowledge systematically
- Emphasize AO1 and AO2 primarily
- Include clear scaffolding in multi-part questions
- Test core techniques thoroughly before complex applications`;
}

export function getAQAMathsALevelA2Prompt(topic: Topic, difficulty: Difficulty, subtopic: Subtopic): string {
  return getAQAMathsALevelCompactPrompt(topic, difficulty === 'easy' ? 'medium' : difficulty, subtopic) + `

A2 LEVEL SPECIFIC REQUIREMENTS:
- Include synoptic elements connecting different topic areas
- Require sophisticated proof and reasoning skills
- Balance all three assessment objectives
- Test advanced techniques and their applications
- Expect independent mathematical thinking and problem-solving
- Include complex real-world contextual applications`;
}