/**
 * Enhanced System Prompts Module
 *
 * Exam board-specific system prompts that include:
 * - Board-specific examiner role
 * - Specification reference
 * - Key conventions
 * - Global constraints (copyright, accuracy, safety)
 */

import { ExamBoard, QualificationLevel, Subject } from '@/types';
import { COPYRIGHT_CONSTRAINTS, SAFETY_CONSTRAINTS, OUTPUT_FORMAT_CONSTRAINTS } from './global-constraints';

// ============================================================================
// EXAM BOARD SPECIFICATIONS
// ============================================================================

const EXAM_BOARD_SPECS: Record<string, string> = {
  // Physics specifications
  'physics-gcse-aqa': '8463',
  'physics-gcse-edexcel': '1PH0',
  'physics-gcse-ocr': 'J249',
  'physics-a-level-aqa': '7408',
  'physics-a-level-edexcel': '9PH0',
  'physics-a-level-ocr': 'H556',

  // Chemistry specifications
  'chemistry-gcse-aqa': '8462',
  'chemistry-gcse-edexcel': '1CH0',
  'chemistry-gcse-ocr': 'J248',
  'chemistry-a-level-aqa': '7405',
  'chemistry-a-level-edexcel': '9CH0',
  'chemistry-a-level-ocr': 'H432',

  // Biology specifications
  'biology-gcse-aqa': '8461',
  'biology-gcse-edexcel': '1BI0',
  'biology-gcse-ocr': 'J247',
  'biology-a-level-aqa': '7402',
  'biology-a-level-edexcel': '9BI0',
  'biology-a-level-ocr': 'H420',

  // Maths specifications
  'maths-gcse-aqa': '8300',
  'maths-gcse-edexcel': '1MA1',
  'maths-gcse-ocr': 'J560',
  'maths-a-level-aqa': '7357',
  'maths-a-level-edexcel': '9MA0',
  'maths-a-level-ocr': 'H240',

  // Computer Science specifications
  // Note: Edexcel does NOT offer A-Level Computer Science (only AQA and OCR)
  'computer-science-gcse-aqa': '8525',
  'computer-science-gcse-edexcel': '1CP2',
  'computer-science-gcse-ocr': 'J277',
  'computer-science-a-level-aqa': '7517',
  'computer-science-a-level-ocr': 'H446',

  // Economics specifications
  // Note: Edexcel does NOT offer GCSE Economics (only AQA and OCR)
  'economics-gcse-aqa': '8136',
  'economics-gcse-ocr': 'J205',
  'economics-a-level-aqa': '7136',
  'economics-a-level-edexcel': '9EC0',
  'economics-a-level-ocr': 'H460',

  // Business specifications
  'business-gcse-aqa': '8132',
  'business-gcse-edexcel': '1BS0',
  'business-gcse-ocr': 'J204',
  'business-a-level-aqa': '7132',
  'business-a-level-edexcel': '9BS0',
  'business-a-level-ocr': 'H431',

  // Psychology specifications
  'psychology-gcse-aqa': '8182',
  'psychology-gcse-edexcel': '1PS0',
  'psychology-gcse-ocr': 'J203',
  'psychology-a-level-aqa': '7182',
  'psychology-a-level-edexcel': '9PS0',
  'psychology-a-level-ocr': 'H567',

  // Geography specifications
  'geography-gcse-aqa': '8035',
  'geography-gcse-edexcel': '1GA0',
  'geography-gcse-ocr': 'J383',
  'geography-a-level-aqa': '7037',
  'geography-a-level-edexcel': '9GE0',
  'geography-a-level-ocr': 'H481',

  // History specifications
  'history-gcse-aqa': '8145',
  'history-gcse-edexcel': '1HI0',
  'history-gcse-ocr': 'J410',
  'history-a-level-aqa': '7042',
  'history-a-level-edexcel': '9HI0',
  'history-a-level-ocr': 'H505',

  // English Literature specifications
  'english-literature-gcse-aqa': '8702',
  'english-literature-gcse-edexcel': '1ET0',
  'english-literature-gcse-ocr': 'J352',
  'english-literature-a-level-aqa': '7712',
  'english-literature-a-level-edexcel': '9ET0',
  'english-literature-a-level-ocr': 'H472',

  // Further Maths specifications
  // Note: Edexcel does NOT offer GCSE Further Maths (only AQA and OCR)
  'further-maths-gcse-aqa': '8365',
  'further-maths-gcse-ocr': '6993',
  'further-maths-a-level-aqa': '7367',
  'further-maths-a-level-edexcel': '9FM0',
  'further-maths-a-level-ocr': 'H245',

  // Combined Science specifications (GCSE only - worth 2 GCSEs)
  'combined-science-gcse-aqa': '8464',      // AQA GCSE Combined Science: Trilogy
  'combined-science-gcse-edexcel': '1SC0',  // Edexcel GCSE Combined Science
  'combined-science-gcse-ocr': 'J250',      // OCR Gateway GCSE Combined Science A
};

// ============================================================================
// BOARD-SPECIFIC CONVENTIONS
// ============================================================================

const BOARD_CONVENTIONS: Record<ExamBoard, string> = {
  aqa: `
AQA-SPECIFIC CONVENTIONS:
- Mark scheme uses M (method), A (accuracy), B (independent) marks
- Additional notation: ft (follow-through), dep (dependent), oe (or equivalent), cao (correct answer only), isw (ignore subsequent working), soi (seen or implied)
- Command words: Calculate, Work out, Show that, Prove (Higher only), State, Write down, Describe, Construct, Solve, Simplify (fully), Factorise (fully), Estimate, Sketch, Draw, Compare
- 6-mark questions often use "levels of response" marking
- Required practicals are explicitly testable
- Papers typically progress easy → hard within each section`,

  edexcel: `
EDEXCEL-SPECIFIC CONVENTIONS:
- Mark scheme uses M, A, B marks similar to AQA
- Additional notation: ft, dep, oe, cao, awrt (answer which rounds to)
- Command words: Calculate, Work out, Explain, State, Describe, Evaluate, Assess, Show that
- "Quality of Written Communication" assessed in extended responses
- Tend to have more structured questions with scaffolding
- Data response questions common in sciences`,

  ocr: `
OCR-SPECIFIC CONVENTIONS:
- Mark scheme uses marks with annotations (✓, AO1, AO2, etc.)
- Command words: Calculate, Explain, State, Describe, Evaluate, Analyse, Compare, Discuss
- "Synoptic" questions linking multiple topics (especially A-Level)
- Gateway and Twenty First Century strands (GCSE Science)
- Level of response marking for extended answers`,
};

// ============================================================================
// SUBJECT-SPECIFIC CONVENTIONS
// ============================================================================

const MATHS_CONVENTIONS: Record<ExamBoard, string> = {
  aqa: `
AQA GCSE MATHS (8300) SPECIFIC CONVENTIONS:

COMMAND WORDS (use these exact wordings):
- "Calculate" / "Work out" - One or more calculations needed; show working for multi-mark questions
- "Show that" - Give every step of the process to reach the required outcome; no steps can be skipped
- "Prove that" (Higher only) - Formal algebraic proof with each step shown, or formal geometric proof with justifications
- "State" / "Write down" - Brief answer obtainable from given information; no working needed
- "Simplify" / "Simplify fully" - Collect terms or cancel; "fully" hints more than one step required
- "Factorise" / "Factorise fully" - Extract common factors; "fully" means complete factorisation
- "Solve" - Find value(s) satisfying an equation or inequality
- "Estimate" - Use approximations (round to 1 sig fig unless told otherwise)
- "Construct" - Draw accurately with compasses; show all construction arcs and lines
- "Sketch" - Show key features with accurate positioning but not to scale
- "Compare" - Work out values and state which is smaller/larger with reasoning

MARK SCHEME NOTATION:
- M1, M2 = Method marks (correct approach, even with arithmetic error)
- A1 = Accuracy mark (correct answer; usually depends on preceding M marks)
- B1 = Independent mark (correct statement/value not dependent on method)
- ft = Follow-through (credit for correct method on earlier incorrect answer)
- dep = Dependent (requires previous mark awarded)
- oe = Or equivalent (accept alternative valid forms)
- cao = Correct answer only (no follow-through)
- isw = Ignore subsequent working
- soi = Seen or implied
- www = Without wrong working

ASSESSMENT OBJECTIVES (Higher Tier weightings):
- AO1 (40%): Use and apply standard techniques - routine procedures, recall facts
- AO2 (30%): Reason, interpret and communicate - make deductions, construct chains of reasoning
- AO3 (30%): Solve problems - translate problems into mathematical processes

QUESTION PHRASING PATTERNS:
- "Work out the value of..." followed by expression
- "Give your answer as a fraction in its simplest form"
- "Give your answer correct to 3 significant figures"
- "You must show your working"
- "Give a reason for your answer"
- Multi-part: (a), (b), (c) with increasing difficulty`,

  edexcel: `
EDEXCEL GCSE MATHS (1MA1) SPECIFIC CONVENTIONS:

COMMAND WORDS (use these exact wordings):
- "Work out" - Use given information to calculate the answer; working usually needed
- "Calculate" - Work out the answer using mathematical operations; calculator often permitted
- "Show that" - Construct a logical argument showing given information leads to printed result; all steps required
- "Prove" (Higher only) - More formal than "show"; all steps must be present with reasons for geometric proofs
- "Explain" - Give mathematical reasons using correct terminology
- "Find" - Determine the value(s) required
- "Write down" - Answer obtainable directly from given information; no working needed
- "Estimate" - Use approximations (round to 1 significant figure)
- "Simplify" / "Simplify fully" - Collect terms or cancel fractions; "fully" requires complete simplification
- "Factorise" / "Factorise fully" - Express as product of factors; "fully" means complete factorisation
- "Solve" - Find value(s) satisfying equation or inequality

MARK SCHEME NOTATION:
- M1, M2 = Method marks (correct approach, even with arithmetic error)
- A1 = Accuracy mark (correct answer; usually depends on preceding M marks)
- B1, B2 = Independent marks (correct answer/statement not dependent on method)
- P1 = Process mark (for correct use of a process like scale factor)
- ft = Follow-through (credit for correct method on earlier incorrect answer)
- dep = Dependent (requires previous mark awarded)
- oe = Or equivalent (accept alternative valid forms)
- cao = Correct answer only (no follow-through)
- awrt = Answer which rounds to (for decimal tolerance)
- isw = Ignore subsequent working

ASSESSMENT OBJECTIVES (Higher Tier weightings):
- AO1 (40%): Use and apply standard techniques
- AO2 (30%): Reason, interpret and communicate mathematically
- AO3 (30%): Solve problems in mathematics and other contexts

QUESTION PHRASING PATTERNS:
- "Work out the value of..."
- "Show your working clearly"
- "Give your answer correct to 3 significant figures"
- "Give your answer in its simplest form"
- "You must show all your working"
- Context-based problems with real-world scenarios common
- Multi-part questions with scaffolded structure: (a), (b), (c)`,

  ocr: `
OCR GCSE MATHS (J560) SPECIFIC CONVENTIONS:

COMMAND WORDS (use these exact wordings):
- "Calculate" / "Work out" - Work out the answer using mathematical operations
- "Show" / "Show that" - All working needed to get to a given answer; complete diagrams to show given information
- "Prove" (Higher only) - More formal than "show"; all steps must be present with reasons for geometric proofs
- "Explain" - Give reasons for your answer with working out shown
- "Give reasons" - Show calculation and/or written evidence for your answer
- "Justify" - Show calculation and/or written evidence to support the given statement
- "Solve" - Work out fully or find the value of the unknown
- "Estimate" / "Approximate" - Round numbers to nearest whole number or decimal place, then work out
- "Construct" - Draw accurately using appropriate tools

MARK SCHEME NOTATION:
- M marks = Method marks (correct method, not lost for numerical errors)
- A marks = Accuracy marks (depend on preceding M marks; M0 A1 cannot be awarded)
- B marks = Independent marks (correct answer/stage not dependent on method)
- SC marks = Special case marks (worthy of some credit)
- cao = Correct answer only
- isw = Ignore subsequent working (default after correct answer)
- dep = Dependent (must check all criteria specified)
- "figs 237" = Any answer with only these digits (ignore leading/trailing zeros, decimal points)
- [...] = Not required for mark but must be correct if present
- FT = Follow-through from previous answer

ASSESSMENT OBJECTIVES (Higher Tier weightings):
- AO1 (40%): Use and apply standard techniques - recall facts, routine procedures, multi-step solutions
- AO2 (30%): Reason, interpret and communicate mathematically - make deductions, construct reasoning chains
- AO3 (30%): Solve problems - translate into mathematical processes, link concepts independently

QUESTION PHRASING PATTERNS:
- Papers 1 and 3 = Calculator; Paper 2 = Non-calculator
- 100 marks per paper (more scope for method marks)
- Foundation (Papers 1-3, grades 1-5); Higher (Papers 4-6, grades 4-9)
- Multi-part questions: (a), (b), (c) with increasing complexity
- Context-based problems requiring independent concept linking`,
};

// A-Level Maths specific conventions
const A_LEVEL_MATHS_CONVENTIONS: Record<ExamBoard, string> = {
  aqa: `
AQA A-LEVEL MATHS (7357) SPECIFIC CONVENTIONS:

COMMAND WORDS (use these exact wordings):
- "Prove" - Formal proof with each step shown; must contain concluding statement
- "Prove by contradiction" - Must use this specific method; other methods won't receive full marks
- "Show that" - Give every step leading to the required outcome
- "Use [given substitution]" - Must use the specified substitution; other methods won't receive full marks
- "Find" - Determine the value(s) or expression required
- "Calculate" - Obtain numerical answer with working
- "Hence" - Use the previous result to solve this part
- "Hence or otherwise" - Can use previous result or alternative method
- "State" - Give a brief answer without full justification
- "Sketch" - Draw showing key features (intercepts, asymptotes, turning points)

MARK SCHEME NOTATION:
- M marks = Method marks (correct approach)
- A marks = Accuracy marks (depend on preceding M marks)
- B marks = Independent marks
- E marks = Explanation/reasoning marks (linked to AO2.1 rigorous argument)
- ft = Follow-through from incorrect answer
- cao = Correct answer only
- oe = Or equivalent
- awrt = Answer which rounds to
- "www" = Without wrong working

ASSESSMENT OBJECTIVES:
- AO1: Use and apply standard techniques - routine procedures, recall
- AO2: Reason, interpret and communicate - construct rigorous arguments
- AO3: Solve problems - model situations mathematically

CONTENT AREAS:
- Pure: Proof, Algebra, Coordinate Geometry, Sequences, Trigonometry, Exponentials, Calculus, Vectors, Numerical Methods
- Statistics: Sampling, Data Presentation, Probability, Distributions, Hypothesis Testing
- Mechanics: Kinematics, Forces, Newton's Laws, Moments`,

  edexcel: `
EDEXCEL A-LEVEL MATHS (9MA0) SPECIFIC CONVENTIONS:

COMMAND WORDS:
- "Calculate" - Obtain numerical answer with relevant working shown
- "Deduce" - Draw/reach conclusions from information provided
- "Describe" - Give account; statements need development but no justification required
- "Explain" - Justification required with reasoning/mathematical explanation
- "State/Give/Name" - Recall of information; often 1 mark, simple answer, no calculations
- "Show that" - Demonstrate all steps leading to given answer
- "Prove" - Formal mathematical proof required
- "Hence" - Use previous result
- "Sketch" - Show key features without being to scale

MARK SCHEME NOTATION:
- M1, M2 = Method marks
- A1 = Accuracy mark
- B1 = Independent mark
- ft = Follow-through
- cao = Correct answer only
- awrt = Answer which rounds to
- oe = Or equivalent

SPECIAL FEATURES:
- Large data set provided for Statistics (must know context, terminology, structure)
- Pure Mathematics knowledge assumed for Paper 3
- Papers assess synoptic understanding
- Calculator instructions given when not permitted

CONTENT AREAS:
- Pure: Proof, Algebra & Functions, Coordinate Geometry, Sequences & Series, Trigonometry, Exponentials & Logarithms, Differentiation, Integration, Numerical Methods, Vectors
- Statistics: Sampling, Data Presentation, Probability, Distributions, Hypothesis Testing
- Mechanics: Quantities/Units, Kinematics, Forces & Newton's Laws, Moments`,

  ocr: `
OCR A-LEVEL MATHS A (H240) SPECIFIC CONVENTIONS:

COMMAND WORDS:
- "Calculate" / "Work out" - Obtain answer with working shown
- "Show that" - All working required to reach given answer
- "Prove" - Formal proof with all steps and reasoning
- "Find" - Determine the value(s) or expression
- "Hence" - Use the previous result
- "State" - Brief answer required
- "Sketch" - Draw showing key features
- "Verify" - Check a given statement is true

MARK SCHEME NOTATION:
- M marks = Method marks (not lost for numerical errors)
- A marks = Accuracy marks (depend on M marks; M0A1 cannot be awarded)
- B marks = Independent marks
- E marks = Explanation marks
- SC marks = Special case
- cao = Correct answer only
- isw = Ignore subsequent working
- ft = Follow-through
- oe = Or equivalent
- "figs" notation = Accept any form with those digits

ASSESSMENT OBJECTIVES:
- AO1 (50%): Use and apply standard techniques
- AO2 (25%): Reason, interpret and communicate mathematically
- AO3 (25%): Solve problems

SPECIAL FEATURES:
- Each section has gradient of difficulty (easier to harder)
- Mix of long and short questions
- Synoptic assessment across components
- Extended response questions included
- Stretch and challenge questions for A* grades
- Scientific or graphical calculator permitted on all papers`,
};

// A-Level Physics specific conventions
const A_LEVEL_PHYSICS_CONVENTIONS: Record<ExamBoard, string> = {
  aqa: `
AQA A-LEVEL PHYSICS (7408) SPECIFIC CONVENTIONS:

COMMAND WORDS:
- "Calculate" - Use equations with substitution and correct units
- "Compare" - Describe similarities AND differences
- "Define" - State the meaning precisely
- "Describe" - Give an account of facts/processes
- "Determine" - Use data/graph to obtain answer
- "Estimate" - Make approximate calculation/reasoned judgement
- "Evaluate" - Consider evidence for and against, make judgement
- "Explain" - Give reasons using physics principles
- "Justify" - Support conclusion with evidence
- "Plot" - Mark points accurately and draw line/curve of best fit
- "Show that" - Demonstrate with full working to given value
- "Sketch" - Draw showing key features, approximate shape
- "State" - Give brief answer without explanation
- "Suggest" - Apply physics knowledge to new situation

PRACTICAL ENDORSEMENT:
- Separate Pass/Fail endorsement alongside A-Level grade
- 12 required practical activities minimum
- At least 15% of marks assess practical skills indirectly
- Practical contexts may be unfamiliar in exams

MATHEMATICAL REQUIREMENTS:
- At least 40% of marks require mathematical skills
- Level 2+ maths expected (algebra, graphs, calculus basics)
- Data and Formulae Booklet provided but some equations must be recalled`,

  edexcel: `
EDEXCEL A-LEVEL PHYSICS (9PH0) SPECIFIC CONVENTIONS:

COMMAND WORDS:
- "Calculate" - Obtain numerical answer with working and units
- "Comment" - Give views/observations based on information
- "Compare" - State similarities and differences
- "Deduce" - Draw conclusions from information provided
- "Define" - State meaning of term
- "Describe" - Give account of facts/processes
- "Determine" - Find value using data/experimental method
- "Discuss" - Present key points with reasoning
- "Estimate" - Give approximate value with reasoning
- "Evaluate" - Weigh evidence, make reasoned judgement
- "Explain" - Give reasons; state how and why
- "Give/State" - Brief answer, no explanation needed
- "Justify" - Support answer with evidence/reasoning
- "Show that" - Prove with full working
- "Sketch" - Draw showing key features, not to scale
- "Suggest" - Apply knowledge to unfamiliar context

PRACTICAL ENDORSEMENT (9PH0/04):
- Separately reported Pass/Fail result
- 16 core practical activities
- Minimum 12 must be completed
- Core practicals assessed in written papers

MATHEMATICAL REQUIREMENTS:
- Minimum 40% of marks require Level 2+ maths
- Must show formula, substitution, answer with units`,

  ocr: `
OCR A-LEVEL PHYSICS A (H556) SPECIFIC CONVENTIONS:

COMMAND WORDS:
- "Analyse" - Examine in detail, identify key factors
- "Calculate" - Numerical answer with working shown
- "Compare" - State similarities and differences
- "Define" - State meaning of term precisely
- "Describe" - Give account of what happens/how something works
- "Determine" - Use data/graph to find value
- "Discuss" - Present key points; may include different views
- "Estimate" - Calculate approximate value with reasoning
- "Evaluate" - Review evidence/information to make judgement
- "Explain" - Give reasons for; use physics principles
- "Justify" - Give evidence to support a conclusion
- "Outline" - Set out main points briefly
- "Show that" - Full working leading to given answer
- "Sketch" - Draw diagram showing key features
- "State" - Give brief answer
- "Suggest" - Apply understanding to unfamiliar context

LEVEL OF RESPONSE (LoR) QUESTIONS:
- Marked with asterisk (*) in paper
- Tests sustained, coherent, logical reasoning
- Typically 3-6 marks
- Quality of argument assessed, not just content

PRACTICAL ENDORSEMENT:
- PAG 1-12 (Practical Activity Groups)
- Practical skills tested in all three written papers
- At least 40% of marks assess mathematical skills`,
};

// Physics specific conventions
const PHYSICS_CONVENTIONS: Record<ExamBoard, string> = {
  aqa: `
AQA GCSE PHYSICS (8463) SPECIFIC CONVENTIONS:

COMMAND WORDS:
- "Calculate" - Use numbers to work out answer; show formula, working, units
- "Compare" - Describe similarities AND/OR differences, not just one
- "Describe" - Recall facts/events/processes accurately; no explanation needed
- "Design" - Outline how something will be implemented
- "Determine" - Use given data/information to obtain answer
- "Estimate" - Assign approximate value, not precise measurement
- "Evaluate" - Consider evidence for AND against when making judgement
- "Explain" - Make something clear OR state reasons for something happening
- "Give/State/Name" - Short answer required, not explanation
- "Identify" - Name or otherwise characterise
- "Justify" - Use evidence to support an answer
- "Plan" - Write a method for an experiment
- "Predict" - Give plausible outcome based on information
- "Show" - Provide structured evidence to reach conclusion
- "Suggest" - Apply knowledge to a new situation

6-MARK EXTENDED RESPONSE (Levels-based marking):
- Level 3 (5-6 marks): Comprehensive, detailed, logically structured
- Level 2 (3-4 marks): Some relevant points, partial explanation
- Level 1 (1-2 marks): Limited response, basic points only
- Quality of written communication assessed within levels

REQUIRED PRACTICALS:
- 8 required practicals common with Combined Science
- 15% of marks assess practical skills
- Questions may use novel practical contexts

EQUATIONS:
- Must recall equations from memory (listed in spec)
- Some equations given in exam (data sheet)
- Always show formula → substitution → answer with units`,

  edexcel: `
EDEXCEL GCSE PHYSICS (1PH0) SPECIFIC CONVENTIONS:

COMMAND WORDS:
- "Calculate" - Numerical answer with working shown
- "Compare" - State similarities and/or differences
- "Complete" - Add information to a diagram, table, or statement
- "Define" - State the meaning of a term
- "Describe" - Give an account of facts/events/processes
- "Design" - Plan an investigation or procedure
- "Determine" - Use data to reach a conclusion
- "Draw" - Produce a diagram with labels where needed
- "Evaluate" - Consider information, weigh evidence, make judgement
- "Explain" - Give reasons with scientific terminology
- "Give/State" - Brief answer, no explanation required
- "Identify" - Recognise and name
- "Justify" - Support conclusion with evidence
- "Measure" - Use equipment to determine a value
- "Name" - Give a word or phrase
- "Plan" - Design an experimental procedure
- "Predict" - State what will happen based on evidence
- "Show" - Demonstrate with calculation or reasoning
- "Sketch" - Draw approximately
- "Suggest" - Apply knowledge to unfamiliar context
- "Use" - Apply given information

CORE PRACTICALS:
- 8 mandatory core practicals must be completed
- Practical skills assessed in written exams
- Questions test ability to analyse data and evaluate methods

EQUATIONS:
- Equations to recall listed in Appendix 2
- Higher-only equations shown in bold
- SI units must be used correctly`,

  ocr: `
OCR GCSE PHYSICS A - GATEWAY (J249) SPECIFIC CONVENTIONS:

COMMAND WORDS:
- "Calculate" - Work out numerical answer showing method
- "Compare" - State similarities and differences
- "Describe" - Give account of what happens
- "Discuss" - Present key points; may include different views
- "Estimate" - Give approximate answer or value
- "Evaluate" - Review evidence and make reasoned judgement
- "Explain" - Give reasons for something; use scientific ideas
- "Give/State/Name" - Short answer, recall fact
- "Identify" - Recognise or select from given information
- "Justify" - Give reasons to support a conclusion
- "Outline" - Set out main points briefly
- "Plan" - Design a procedure/investigation
- "Predict" - State expected outcome with reasoning
- "Sketch" - Draw roughly showing key features
- "Suggest" - Apply understanding to unfamiliar situations

PRACTICAL ASSESSMENT:
- Topic P9 covers practical activity skills
- 15% of exam marks assess practical content
- 15 practical activities provided by OCR

MARK SCHEME NOTATION:
- Levels-based marking for extended response
- Accept alternative valid scientific explanations
- Credit correct physics even if not in mark scheme
- Quality of extended response assessed holistically`,
};

// Chemistry specific conventions
const CHEMISTRY_CONVENTIONS: Record<ExamBoard, string> = {
  aqa: `
AQA GCSE CHEMISTRY (8462) SPECIFIC CONVENTIONS:

COMMAND WORDS:
- "Calculate" - Use numbers to work out answer; show formula, working, units
- "Compare" - Describe similarities AND/OR differences
- "Define" - Give the meaning of a term
- "Describe" - Recall facts/events/processes accurately
- "Design" - Plan or devise a procedure
- "Determine" - Use given data/information to obtain answer
- "Estimate" - Assign approximate value
- "Evaluate" - Consider evidence for AND against when making judgement
- "Explain" - Make something clear OR state reasons for something happening
- "Give/State/Name" - Short answer required, no explanation
- "Identify" - Name or otherwise characterise
- "Justify" - Use evidence to support an answer
- "Plan" - Write a method for an investigation
- "Predict" - Give plausible outcome based on information
- "Show" - Provide structured evidence to reach conclusion
- "Suggest" - Apply knowledge to a new situation
- "Write" - Produce a formula, equation, or similar

6-MARK EXTENDED RESPONSE (Levels-based marking):
- Level 3 (5-6 marks): Comprehensive, detailed, logically structured
- Level 2 (3-4 marks): Some relevant points, partial explanation
- Level 1 (1-2 marks): Limited response, basic points only

REQUIRED PRACTICALS:
- 8 required practicals for chemistry
- 15% of marks assess practical skills
- Questions may use unfamiliar practical contexts

ASSESSMENT OBJECTIVES:
- AO1 (40%): Knowledge and understanding
- AO2 (40%): Application of knowledge
- AO3 (20%): Analysis, interpretation and evaluation`,

  edexcel: `
EDEXCEL GCSE CHEMISTRY (1CH0) SPECIFIC CONVENTIONS:

COMMAND WORDS:
- "Calculate" - Numerical answer with working shown
- "Compare" - State similarities and/or differences
- "Complete" - Add information to a diagram, table, or statement
- "Define" - State the meaning of a term
- "Describe" - Give an account of facts/events/processes
- "Design" - Plan an investigation or procedure
- "Determine" - Use data to reach a conclusion
- "Draw" - Produce a diagram with labels where needed
- "Evaluate" - Consider information, weigh evidence, make judgement
- "Explain" - Give reasons with scientific terminology
- "Give/State" - Brief answer, no explanation required
- "Identify" - Recognise and name
- "Justify" - Support conclusion with evidence
- "Name" - Give a word or phrase
- "Plan" - Design an experimental procedure
- "Predict" - State what will happen based on evidence
- "Show" - Demonstrate with calculation or reasoning
- "Suggest" - Apply knowledge to unfamiliar context
- "Write" - Produce equation or formula

CORE PRACTICALS:
- 8 mandatory core practicals
- Practical skills assessed in written exams
- Questions test ability to analyse data and evaluate methods

ASSESSMENT OBJECTIVES:
- AO1 (40%): Knowledge and understanding
- AO2 (40%): Application of knowledge and understanding
- AO3 (20%): Analysis, interpretation and evaluation`,

  ocr: `
OCR GCSE CHEMISTRY A - GATEWAY (J248) SPECIFIC CONVENTIONS:

COMMAND WORDS:
- "Calculate" - Work out numerical answer showing method
- "Compare" - State similarities and differences
- "Describe" - Give account of what happens
- "Discuss" - Present key points; may include different views
- "Estimate" - Give approximate answer or value
- "Evaluate" - Review evidence and make reasoned judgement
- "Explain" - Give reasons for something; use scientific ideas
- "Give/State/Name" - Short answer, recall fact
- "Identify" - Recognise or select from given information
- "Justify" - Give reasons to support a conclusion
- "Outline" - Set out main points briefly
- "Plan" - Design a procedure/investigation
- "Predict" - State expected outcome with reasoning
- "Sketch" - Draw roughly showing key features
- "Suggest" - Apply understanding to unfamiliar situations
- "Write" - Produce formula, equation, or statement

PRACTICAL ASSESSMENT:
- 15% of exam marks assess practical content
- Practical activities linked to specification content

MARK SCHEME NOTATION:
- Levels-based marking for extended response
- Accept alternative valid scientific explanations
- Credit correct chemistry even if not in mark scheme`,
};

// A-Level Chemistry specific conventions
const A_LEVEL_CHEMISTRY_CONVENTIONS: Record<ExamBoard, string> = {
  aqa: `
AQA A-LEVEL CHEMISTRY (7405) SPECIFIC CONVENTIONS:

COMMAND WORDS:
- "Calculate" - Use equations with substitution and correct units
- "Compare" - Describe similarities AND differences
- "Define" - State the meaning precisely
- "Describe" - Give an account of facts/processes
- "Determine" - Use data/graph to obtain answer
- "Estimate" - Make approximate calculation/reasoned judgement
- "Evaluate" - Consider evidence for and against, make judgement
- "Explain" - Give reasons using chemistry principles
- "Give/State" - Brief answer without explanation
- "Identify" - Name or characterise
- "Justify" - Support conclusion with evidence
- "Outline" - Set out main points
- "Predict" - Give expected outcome with reasoning
- "Show that" - Demonstrate with full working to given value
- "Sketch" - Draw showing key features
- "Suggest" - Apply chemistry knowledge to new situation
- "Write" - Produce formula, equation, mechanism, or structure

MARK SCHEME NOTATION:
- M marks = Method marks
- A marks = Accuracy marks (depend on preceding M marks)
- B marks = Independent marks
- ft = Follow-through from incorrect answer
- cao = Correct answer only
- oe = Or equivalent
- Mechanisms: curly arrows from electron source to sink required

REQUIRED PRACTICALS:
- 12 required practical activities
- Practical skills assessed indirectly in written papers
- At least 15% of marks assess practical skills

MATHEMATICAL REQUIREMENTS:
- At least 20% of marks require mathematical skills
- Calculations must show formula, substitution, answer with units`,

  edexcel: `
EDEXCEL A-LEVEL CHEMISTRY (9CH0) SPECIFIC CONVENTIONS:

COMMAND WORDS:
- "Calculate" - Obtain numerical answer with working and units
- "Comment" - Give views/observations based on information
- "Compare" - State similarities and differences
- "Deduce" - Draw conclusions from information provided
- "Define" - State meaning of term
- "Describe" - Give account of facts/processes
- "Determine" - Find value using data/experimental method
- "Discuss" - Present key points with reasoning
- "Estimate" - Give approximate value with reasoning
- "Evaluate" - Weigh evidence, make reasoned judgement
- "Explain" - Give reasons; state how and why
- "Give/State" - Brief answer, no explanation needed
- "Identify" - Name or recognise
- "Justify" - Support answer with evidence/reasoning
- "Outline" - Brief account of key features
- "Predict" - Give expected outcome with reasoning
- "Show that" - Prove with full working
- "Sketch" - Draw showing key features
- "Suggest" - Apply knowledge to unfamiliar context
- "Write" - Produce equation, formula, mechanism

CORE PRACTICALS:
- 16 core practical activities
- Minimum 12 must be completed
- Core practicals assessed in written papers
- Separate practical endorsement (Pass/Fail)

MATHEMATICAL REQUIREMENTS:
- Minimum 20% of marks require mathematical skills
- Show formula, substitution, answer with units`,

  ocr: `
OCR A-LEVEL CHEMISTRY A (H432) SPECIFIC CONVENTIONS:

COMMAND WORDS:
- "Analyse" - Examine in detail, identify key factors
- "Calculate" - Numerical answer with working shown
- "Compare" - State similarities and differences
- "Define" - State meaning of term precisely
- "Describe" - Give account of what happens
- "Determine" - Use data/graph to find value
- "Discuss" - Present key points; may include different views
- "Estimate" - Calculate approximate value with reasoning
- "Evaluate" - Review evidence/information to make judgement
- "Explain" - Give reasons for; use chemistry principles
- "Identify" - Name or recognise
- "Justify" - Give evidence to support a conclusion
- "Outline" - Set out main points briefly
- "Predict" - Give expected outcome with reasoning
- "Show that" - Full working leading to given answer
- "Sketch" - Draw diagram showing key features
- "State" - Give brief answer
- "Suggest" - Apply understanding to unfamiliar context
- "Write" - Produce equation, formula, mechanism, structure

LEVEL OF RESPONSE (LoR) QUESTIONS:
- Marked with asterisk (*) in paper
- Tests sustained, coherent, logical reasoning
- Typically 3-6 marks
- Quality of argument assessed, not just content

PRACTICAL ENDORSEMENT:
- PAG 1-12 (Practical Activity Groups)
- Practical skills tested in all written papers
- At least 20% of marks assess mathematical skills`,
};

// Biology specific conventions
const BIOLOGY_CONVENTIONS: Record<ExamBoard, string> = {
  aqa: `
AQA GCSE BIOLOGY (8461) SPECIFIC CONVENTIONS:

COMMAND WORDS:
- "Calculate" - Use numbers to work out answer; show formula, working, units
- "Compare" - Describe similarities AND/OR differences
- "Define" - Give the meaning of a term
- "Describe" - Recall facts/events/processes accurately
- "Design" - Plan or devise a procedure
- "Determine" - Use given data/information to obtain answer
- "Estimate" - Assign approximate value
- "Evaluate" - Consider evidence for AND against when making judgement
- "Explain" - Make something clear OR state reasons for something happening
- "Give/State/Name" - Short answer required, no explanation
- "Identify" - Name or otherwise characterise
- "Justify" - Use evidence to support an answer
- "Label" - Add names to a diagram
- "Plan" - Write a method for an investigation
- "Predict" - Give plausible outcome based on information
- "Show" - Provide structured evidence to reach conclusion
- "Suggest" - Apply knowledge to a new situation

6-MARK EXTENDED RESPONSE (Levels-based marking):
- Level 3 (5-6 marks): Comprehensive, detailed, logically structured
- Level 2 (3-4 marks): Some relevant points, partial explanation
- Level 1 (1-2 marks): Limited response, basic points only

REQUIRED PRACTICALS:
- 8 required practicals for biology
- 15% of marks assess practical skills
- Questions may use unfamiliar practical contexts

ASSESSMENT OBJECTIVES:
- AO1 (40%): Knowledge and understanding
- AO2 (40%): Application of knowledge
- AO3 (20%): Analysis, interpretation and evaluation`,

  edexcel: `
EDEXCEL GCSE BIOLOGY (1BI0) SPECIFIC CONVENTIONS:

COMMAND WORDS:
- "Calculate" - Numerical answer with working shown
- "Compare" - State similarities and/or differences
- "Complete" - Add information to a diagram, table, or statement
- "Define" - State the meaning of a term
- "Describe" - Give an account of facts/events/processes
- "Design" - Plan an investigation or procedure
- "Determine" - Use data to reach a conclusion
- "Draw" - Produce a diagram with labels where needed
- "Evaluate" - Consider information, weigh evidence, make judgement
- "Explain" - Give reasons with scientific terminology
- "Give/State" - Brief answer, no explanation required
- "Identify" - Recognise and name
- "Justify" - Support conclusion with evidence
- "Label" - Add appropriate words to a diagram
- "Name" - Give a word or phrase
- "Plan" - Design an experimental procedure
- "Predict" - State what will happen based on evidence
- "Suggest" - Apply knowledge to unfamiliar context

CORE PRACTICALS:
- 8 mandatory core practicals
- Practical skills assessed in written exams
- Questions test ability to analyse data and evaluate methods

ASSESSMENT OBJECTIVES:
- AO1 (40%): Knowledge and understanding
- AO2 (40%): Application of knowledge and understanding
- AO3 (20%): Analysis, interpretation and evaluation`,

  ocr: `
OCR GCSE BIOLOGY A - GATEWAY (J247) SPECIFIC CONVENTIONS:

COMMAND WORDS:
- "Calculate" - Work out numerical answer showing method
- "Compare" - State similarities and differences
- "Describe" - Give account of what happens
- "Discuss" - Present key points; may include different views
- "Estimate" - Give approximate answer or value
- "Evaluate" - Review evidence and make reasoned judgement
- "Explain" - Give reasons for something; use scientific ideas
- "Give/State/Name" - Short answer, recall fact
- "Identify" - Recognise or select from given information
- "Justify" - Give reasons to support a conclusion
- "Label" - Add appropriate words to a diagram
- "Outline" - Set out main points briefly
- "Plan" - Design a procedure/investigation
- "Predict" - State expected outcome with reasoning
- "Sketch" - Draw roughly showing key features
- "Suggest" - Apply understanding to unfamiliar situations

PRACTICAL ASSESSMENT:
- 15% of exam marks assess practical content
- Practical activities linked to specification content

MARK SCHEME NOTATION:
- Levels-based marking for extended response
- Accept alternative valid scientific explanations
- Credit correct biology even if not in mark scheme`,
};

// A-Level Biology specific conventions
const A_LEVEL_BIOLOGY_CONVENTIONS: Record<ExamBoard, string> = {
  aqa: `
AQA A-LEVEL BIOLOGY (7402) SPECIFIC CONVENTIONS:

COMMAND WORDS:
- "Calculate" - Use equations with substitution and correct units
- "Compare" - Describe similarities AND differences
- "Define" - State the meaning precisely
- "Describe" - Give an account of facts/processes
- "Determine" - Use data/graph to obtain answer
- "Estimate" - Make approximate calculation/reasoned judgement
- "Evaluate" - Consider evidence for and against, make judgement
- "Explain" - Give reasons using biology principles
- "Give/State" - Brief answer without explanation
- "Identify" - Name or characterise
- "Justify" - Support conclusion with evidence
- "Outline" - Set out main points
- "Predict" - Give expected outcome with reasoning
- "Show that" - Demonstrate with full working to given value
- "Sketch" - Draw showing key features
- "Suggest" - Apply biology knowledge to new situation

MARK SCHEME NOTATION:
- M marks = Method marks
- A marks = Accuracy marks (depend on preceding M marks)
- B marks = Independent marks
- ft = Follow-through from incorrect answer
- cao = Correct answer only
- oe = Or equivalent

REQUIRED PRACTICALS:
- 12 required practical activities
- Practical skills assessed indirectly in written papers
- At least 15% of marks assess practical skills

MATHEMATICAL REQUIREMENTS:
- At least 10% of marks require mathematical skills
- Statistical tests (chi-squared, t-test, correlation)`,

  edexcel: `
EDEXCEL A-LEVEL BIOLOGY A (9BI0) SPECIFIC CONVENTIONS:

COMMAND WORDS:
- "Calculate" - Obtain numerical answer with working and units
- "Comment" - Give views/observations based on information
- "Compare" - State similarities and differences
- "Deduce" - Draw conclusions from information provided
- "Define" - State meaning of term
- "Describe" - Give account of facts/processes
- "Determine" - Find value using data/experimental method
- "Discuss" - Present key points with reasoning
- "Estimate" - Give approximate value with reasoning
- "Evaluate" - Weigh evidence, make reasoned judgement
- "Explain" - Give reasons; state how and why
- "Give/State" - Brief answer, no explanation needed
- "Identify" - Name or recognise
- "Justify" - Support answer with evidence/reasoning
- "Outline" - Brief account of key features
- "Predict" - Give expected outcome with reasoning
- "Suggest" - Apply knowledge to unfamiliar context

CORE PRACTICALS:
- 16 core practical activities
- Minimum 12 must be completed
- Core practicals assessed in written papers
- Separate practical endorsement (Pass/Fail)

MATHEMATICAL REQUIREMENTS:
- Minimum 10% of marks require mathematical skills
- Statistical analysis and data interpretation`,

  ocr: `
OCR A-LEVEL BIOLOGY A (H420) SPECIFIC CONVENTIONS:

COMMAND WORDS:
- "Analyse" - Examine in detail, identify key factors
- "Calculate" - Numerical answer with working shown
- "Compare" - State similarities and differences
- "Define" - State meaning of term precisely
- "Describe" - Give account of what happens
- "Determine" - Use data/graph to find value
- "Discuss" - Present key points; may include different views
- "Estimate" - Calculate approximate value with reasoning
- "Evaluate" - Review evidence/information to make judgement
- "Explain" - Give reasons for; use biology principles
- "Identify" - Name or recognise
- "Justify" - Give evidence to support a conclusion
- "Outline" - Set out main points briefly
- "Predict" - Give expected outcome with reasoning
- "State" - Give brief answer
- "Suggest" - Apply understanding to unfamiliar context

LEVEL OF RESPONSE (LoR) QUESTIONS:
- Marked with asterisk (*) in paper
- Tests sustained, coherent, logical reasoning
- Typically 3-6 marks
- Quality of argument assessed, not just content

PRACTICAL ENDORSEMENT:
- PAG 1-12 (Practical Activity Groups)
- Practical skills tested in all written papers
- At least 10% of marks assess mathematical skills`,
};

// Computer Science specific conventions
const COMPUTER_SCIENCE_CONVENTIONS: Record<ExamBoard, string> = {
  aqa: `
AQA GCSE COMPUTER SCIENCE (8525) SPECIFIC CONVENTIONS:

COMMAND WORDS:
- "Calculate" - Work out numerical answer with working
- "Complete" - Add missing code, values, or diagram elements
- "Define" - State the meaning of a term
- "Describe" - Give an account of processes/features
- "Explain" - Give reasons for something; show understanding
- "Give/State/Name" - Short answer, no explanation
- "Identify" - Select or recognise from given options
- "Write" - Produce code, algorithm, or statement

PROGRAMMING QUESTIONS:
- Pseudocode or Python accepted
- AQA pseudocode conventions must be followed if pseudocode used
- Variable names should be meaningful
- Code must include comments for complex sections
- Trace tables for algorithm understanding

ASSESSMENT OBJECTIVES:
- AO1 (30%): Demonstrate knowledge and understanding
- AO2 (40%): Apply knowledge and understanding
- AO3 (30%): Analyse, evaluate and make reasoned judgements

MARK SCHEME NOTATION:
- Allow equivalent pseudocode/code that works
- Credit partial solutions
- Accept alternative variable names if consistent`,

  edexcel: `
EDEXCEL GCSE COMPUTER SCIENCE (1CP2) SPECIFIC CONVENTIONS:

COMMAND WORDS:
- "Calculate" - Numerical answer with working
- "Complete" - Add missing elements to code/diagram/table
- "Define" - Give meaning of a term
- "Describe" - Give an account of features/processes
- "Explain" - Give reasons with computer science terminology
- "Give/State" - Brief answer, no explanation
- "Identify" - Select or recognise
- "Write" - Produce code, algorithm, or pseudocode

PROGRAMMING QUESTIONS:
- Python is the primary language
- Pseudocode also accepted with Edexcel conventions
- Must show clear logic and structure
- Comments expected for complex algorithms

ASSESSMENT OBJECTIVES:
- AO1 (35%): Demonstrate knowledge and understanding
- AO2 (40%): Apply knowledge and understanding
- AO3 (25%): Analyse, evaluate and make reasoned judgements

PRACTICAL PROGRAMMING:
- Programming project worth 20% (non-exam assessment)
- Written exam questions test programming skills indirectly`,

  ocr: `
OCR GCSE COMPUTER SCIENCE (J277) SPECIFIC CONVENTIONS:

COMMAND WORDS:
- "Calculate" - Work out numerical answer
- "Complete" - Add missing code, values, or elements
- "Define" - State precise meaning of a term
- "Describe" - Give an account of what/how
- "Discuss" - Present key points with reasoning
- "Explain" - Give reasons; show cause and effect
- "Give/State/Name" - Recall fact, brief answer
- "Identify" - Select or recognise
- "Write" - Produce code, algorithm, or statement

PROGRAMMING QUESTIONS:
- OCR Exam Reference Language (pseudocode) or Python
- Must follow OCR pseudocode conventions exactly
- High-level programming concepts tested
- Algorithm design and trace tables common

ASSESSMENT OBJECTIVES:
- AO1 (35%): Demonstrate knowledge and understanding
- AO2 (40%): Apply knowledge and understanding
- AO3 (25%): Analyse and evaluate

PRACTICAL PROGRAMMING:
- Programming project as non-exam assessment
- Exam questions test computational thinking`,
};

// Economics specific conventions (Note: Edexcel does NOT offer GCSE Economics)
const ECONOMICS_CONVENTIONS: Record<string, string> = {
  aqa: `
AQA GCSE ECONOMICS (8136) SPECIFIC CONVENTIONS:

COMMAND WORDS:
- "Calculate" - Work out numerical answer with working
- "Define" - State precise meaning of a term
- "Describe" - Give an account of features/processes
- "Discuss" - Present different viewpoints/arguments
- "Evaluate" - Make reasoned judgement based on evidence
- "Explain" - Give reasons; show cause and effect
- "Give/State" - Brief answer, no explanation
- "Identify" - Select or recognise

ASSESSMENT OBJECTIVES:
- AO1 (25%): Demonstrate knowledge of economic terms, concepts and theories
- AO2 (25%): Apply knowledge to familiar and unfamiliar situations
- AO3 (25%): Analyse economic issues and problems
- AO4 (25%): Evaluate economic arguments and evidence

EXTENDED RESPONSE:
- 9-mark questions require balanced evaluation
- Use economics terminology throughout
- Real-world examples expected`,

  ocr: `
OCR GCSE ECONOMICS (J205) SPECIFIC CONVENTIONS:

COMMAND WORDS:
- "Calculate" - Work out numerical answer
- "Define" - State precise meaning
- "Describe" - Give account of what/how
- "Discuss" - Present key arguments/viewpoints
- "Evaluate" - Review evidence, make judgement
- "Explain" - Give reasons; show understanding
- "Give/State" - Brief answer
- "Identify" - Select or recognise

ASSESSMENT OBJECTIVES:
- AO1 (25%): Demonstrate knowledge and understanding
- AO2 (25%): Apply knowledge and understanding
- AO3 (25%): Analyse economic issues
- AO4 (25%): Evaluate economic arguments`,
};

const A_LEVEL_ECONOMICS_CONVENTIONS: Record<ExamBoard, string> = {
  aqa: `
AQA A-LEVEL ECONOMICS (7136) SPECIFIC CONVENTIONS:

COMMAND WORDS:
- "Calculate" - Numerical answer with working
- "Define" - State precise meaning
- "Describe" - Give account of features/processes
- "Discuss" - Present and evaluate different viewpoints
- "Evaluate" - Make reasoned judgement on evidence
- "Explain" - Give reasons with economic theory
- "Give/State" - Brief answer
- "Using the data" - Must reference extract/data provided

ASSESSMENT OBJECTIVES:
- AO1 (20-25%): Knowledge and understanding
- AO2 (20-25%): Application to contexts
- AO3 (25-30%): Analysis of economic issues
- AO4 (25-30%): Evaluation of arguments

DIAGRAM EXPECTATIONS:
- Correctly labelled axes
- Curves/lines labelled
- Shifts shown with arrows
- Equilibrium points marked`,

  edexcel: `
EDEXCEL A-LEVEL ECONOMICS (9EC0) SPECIFIC CONVENTIONS:

COMMAND WORDS:
- "Calculate" - Work out with method shown
- "Define" - State precise meaning
- "Discuss" - Present balanced viewpoints
- "Evaluate" - Make judgement based on analysis
- "Explain" - Show reasoning with theory
- "State" - Brief answer
- "With reference to" - Must use source material

ASSESSMENT OBJECTIVES:
- AO1 (22.5-27.5%): Knowledge and understanding
- AO2 (22.5-27.5%): Application to situations
- AO3 (22.5-27.5%): Analysis using economic concepts
- AO4 (22.5-27.5%): Evaluation of arguments

QUANTITATIVE SKILLS:
- At least 15% of marks require quantitative skills
- Calculations must show working`,

  ocr: `
OCR A-LEVEL ECONOMICS (H460) SPECIFIC CONVENTIONS:

COMMAND WORDS:
- "Calculate" - Numerical answer with working
- "Define" - State precise meaning
- "Discuss" - Present different arguments
- "Evaluate" - Make reasoned judgement
- "Explain" - Give reasons; use economic theory
- "State" - Brief answer
- "Assess" - Consider and make judgement

ASSESSMENT OBJECTIVES:
- AO1 (20-25%): Knowledge and understanding
- AO2 (25-30%): Application
- AO3 (25-30%): Analysis
- AO4 (20-25%): Evaluation`,
};

// Business specific conventions
const BUSINESS_CONVENTIONS: Record<ExamBoard, string> = {
  aqa: `
AQA GCSE BUSINESS (8132) SPECIFIC CONVENTIONS:

COMMAND WORDS:
- "Calculate" - Work out numerical answer with working
- "Define" - State precise meaning of a term
- "Describe" - Give an account of features/processes
- "Discuss" - Present different viewpoints
- "Evaluate" - Make reasoned judgement based on evidence
- "Explain" - Give reasons; show cause and effect
- "Give/State" - Brief answer, no explanation
- "Identify" - Select or recognise
- "Recommend" - Advise with supporting reasons

ASSESSMENT OBJECTIVES:
- AO1 (25%): Demonstrate knowledge of business concepts
- AO2 (30%): Apply knowledge to business contexts
- AO3 (25%): Analyse business information
- AO4 (20%): Evaluate business information

EXTENDED RESPONSE:
- 9-mark questions require balanced judgement
- Must reference the business context given
- Use business terminology`,

  edexcel: `
EDEXCEL GCSE BUSINESS (1BS0) SPECIFIC CONVENTIONS:

COMMAND WORDS:
- "Calculate" - Numerical answer with working
- "Define" - State meaning of term
- "Describe" - Give account of features
- "Discuss" - Present different views
- "Evaluate" - Make judgement based on evidence
- "Explain" - Give reasons
- "Give/State" - Brief answer
- "Justify" - Support answer with reasons
- "Recommend" - Advise with reasons

ASSESSMENT OBJECTIVES:
- AO1 (25%): Knowledge and understanding
- AO2 (35%): Application to business contexts
- AO3 (20%): Analysis of business issues
- AO4 (20%): Evaluation and judgement`,

  ocr: `
OCR GCSE BUSINESS (J204) SPECIFIC CONVENTIONS:

COMMAND WORDS:
- "Calculate" - Work out numerical answer
- "Define" - State precise meaning
- "Describe" - Give account of what/how
- "Discuss" - Present key arguments
- "Evaluate" - Review and make judgement
- "Explain" - Give reasons
- "Give/State" - Brief answer
- "Recommend" - Advise with justification

ASSESSMENT OBJECTIVES:
- AO1 (25%): Demonstrate knowledge
- AO2 (35%): Apply knowledge
- AO3 (20%): Analyse business issues
- AO4 (20%): Evaluate and make judgements`,
};

const A_LEVEL_BUSINESS_CONVENTIONS: Record<ExamBoard, string> = {
  aqa: `
AQA A-LEVEL BUSINESS (7132) SPECIFIC CONVENTIONS:

COMMAND WORDS:
- "Calculate" - Numerical answer with working
- "Define" - State precise meaning
- "Analyse" - Examine in detail, identify key factors
- "Discuss" - Present and examine different viewpoints
- "Evaluate" - Make reasoned judgement
- "Explain" - Give reasons with business theory
- "Recommend" - Advise with justified reasoning
- "To what extent" - Requires balanced evaluation

ASSESSMENT OBJECTIVES:
- AO1 (15-20%): Knowledge and understanding
- AO2 (25-30%): Application to contexts
- AO3 (25-30%): Analysis of business issues
- AO4 (25-30%): Evaluation and judgement

QUANTITATIVE SKILLS:
- At least 10% of marks require quantitative skills`,

  edexcel: `
EDEXCEL A-LEVEL BUSINESS (9BS0) SPECIFIC CONVENTIONS:

COMMAND WORDS:
- "Calculate" - Numerical answer with working
- "Define" - State precise meaning
- "Analyse" - Examine in detail
- "Discuss" - Present different viewpoints
- "Evaluate" - Make judgement based on analysis
- "Explain" - Give reasons
- "Recommend" - Advise with justification
- "Assess" - Consider and make judgement

ASSESSMENT OBJECTIVES:
- AO1 (15-20%): Knowledge and understanding
- AO2 (25-30%): Application
- AO3 (25-30%): Analysis
- AO4 (25-30%): Evaluation

QUANTITATIVE SKILLS:
- Minimum 10% of marks require quantitative skills`,

  ocr: `
OCR A-LEVEL BUSINESS (H431) SPECIFIC CONVENTIONS:

COMMAND WORDS:
- "Calculate" - Numerical answer with working
- "Define" - State precise meaning
- "Analyse" - Examine in detail
- "Discuss" - Present different arguments
- "Evaluate" - Make reasoned judgement
- "Explain" - Give reasons
- "Recommend" - Advise with reasons
- "Assess" - Consider and make judgement

ASSESSMENT OBJECTIVES:
- AO1 (15-20%): Knowledge and understanding
- AO2 (25-30%): Application
- AO3 (25-30%): Analysis
- AO4 (25-30%): Evaluation`,
};

// Psychology specific conventions
const PSYCHOLOGY_CONVENTIONS: Record<ExamBoard, string> = {
  aqa: `
AQA GCSE PSYCHOLOGY (8182) SPECIFIC CONVENTIONS:

COMMAND WORDS:
- "Calculate" - Work out numerical answer
- "Define" - State precise meaning
- "Describe" - Give an account of features/processes
- "Discuss" - Present different viewpoints with evaluation
- "Evaluate" - Make judgement based on evidence
- "Explain" - Give reasons; show understanding
- "Give/State" - Brief answer
- "Identify" - Select or recognise
- "Outline" - Set out main features

ASSESSMENT OBJECTIVES:
- AO1 (35%): Knowledge and understanding
- AO2 (35%): Application of knowledge
- AO3 (30%): Analysis and evaluation

EXTENDED RESPONSE:
- 9-mark questions require AO1, AO2, and AO3
- Must use psychological terminology
- Reference research studies where relevant`,

  edexcel: `
EDEXCEL GCSE PSYCHOLOGY (1PS0) SPECIFIC CONVENTIONS:

COMMAND WORDS:
- "Calculate" - Numerical answer with working
- "Define" - State meaning of term
- "Describe" - Give account of features
- "Discuss" - Present different views
- "Evaluate" - Make judgement based on evidence
- "Explain" - Give reasons
- "Give/State" - Brief answer
- "Identify" - Recognise or select
- "Outline" - Brief description of main points

ASSESSMENT OBJECTIVES:
- AO1 (30%): Knowledge and understanding
- AO2 (40%): Application of knowledge
- AO3 (30%): Analysis and evaluation`,

  ocr: `
OCR GCSE PSYCHOLOGY (J203) SPECIFIC CONVENTIONS:

COMMAND WORDS:
- "Calculate" - Work out numerical answer
- "Define" - State precise meaning
- "Describe" - Give account of what/how
- "Discuss" - Present different viewpoints
- "Evaluate" - Review and make judgement
- "Explain" - Give reasons
- "Give/State" - Brief answer
- "Identify" - Recognise or select
- "Outline" - Set out main points

ASSESSMENT OBJECTIVES:
- AO1 (30%): Knowledge and understanding
- AO2 (40%): Application
- AO3 (30%): Analysis and evaluation`,
};

const A_LEVEL_PSYCHOLOGY_CONVENTIONS: Record<ExamBoard, string> = {
  aqa: `
AQA A-LEVEL PSYCHOLOGY (7182) SPECIFIC CONVENTIONS:

COMMAND WORDS:
- "Calculate" - Numerical answer with working
- "Define" - State precise meaning
- "Describe" - Give account of features
- "Discuss" - Present and evaluate viewpoints
- "Evaluate" - Make judgement based on evidence
- "Explain" - Give reasons with psychological theory
- "Identify" - Select or recognise
- "Outline" - Brief description of main points
- "Briefly evaluate" - Short evaluation (usually 4 marks)

ASSESSMENT OBJECTIVES:
- AO1 (25-30%): Knowledge and understanding
- AO2 (25-30%): Application of knowledge
- AO3 (45-50%): Analysis, interpretation and evaluation

RESEARCH METHODS:
- 25-30% of marks assess research methods
- Must know statistical tests and their use`,

  edexcel: `
EDEXCEL A-LEVEL PSYCHOLOGY (9PS0) SPECIFIC CONVENTIONS:

COMMAND WORDS:
- "Calculate" - Numerical answer with working
- "Define" - State meaning of term
- "Describe" - Give account of features
- "Discuss" - Present and evaluate viewpoints
- "Evaluate" - Make judgement based on evidence
- "Explain" - Give reasons
- "Identify" - Recognise or select
- "Outline" - Brief description

ASSESSMENT OBJECTIVES:
- AO1 (25-32%): Knowledge and understanding
- AO2 (28-35%): Application
- AO3 (35-45%): Analysis and evaluation

RESEARCH METHODS:
- Research methods integrated throughout`,

  ocr: `
OCR A-LEVEL PSYCHOLOGY (H567) SPECIFIC CONVENTIONS:

COMMAND WORDS:
- "Calculate" - Numerical answer with working
- "Define" - State precise meaning
- "Describe" - Give account of features
- "Discuss" - Present different arguments
- "Evaluate" - Make reasoned judgement
- "Explain" - Give reasons
- "Identify" - Recognise or select
- "Outline" - Set out main points

ASSESSMENT OBJECTIVES:
- AO1 (25-30%): Knowledge and understanding
- AO2 (25-35%): Application
- AO3 (35-50%): Analysis and evaluation`,
};

// Geography specific conventions
const GEOGRAPHY_CONVENTIONS: Record<ExamBoard, string> = {
  aqa: `
AQA GCSE GEOGRAPHY (8035) SPECIFIC CONVENTIONS:

COMMAND WORDS:
- "Calculate" - Work out numerical answer
- "Compare" - Describe similarities and/or differences
- "Define" - State precise meaning
- "Describe" - Give account of features/patterns
- "Discuss" - Present different viewpoints
- "Evaluate" - Make judgement based on evidence
- "Explain" - Give reasons; show understanding
- "Give/State" - Brief answer
- "Suggest" - Apply knowledge to unfamiliar context
- "To what extent" - Balanced evaluation required

ASSESSMENT OBJECTIVES:
- AO1 (15%): Knowledge of locations, places, processes
- AO2 (25%): Understanding of geographical concepts
- AO3 (35%): Apply knowledge to interpret and analyse
- AO4 (25%): Use fieldwork and geographical skills

EXTENDED RESPONSE:
- 9-mark questions use levels-based marking
- Must use case study examples
- Use geographical terminology`,

  edexcel: `
EDEXCEL GCSE GEOGRAPHY A (1GA0) SPECIFIC CONVENTIONS:

COMMAND WORDS:
- "Calculate" - Numerical answer with working
- "Compare" - State similarities and/or differences
- "Define" - State meaning of term
- "Describe" - Give account of features
- "Discuss" - Present different viewpoints
- "Evaluate" - Make judgement based on evidence
- "Explain" - Give reasons
- "Give/State" - Brief answer
- "Suggest" - Apply knowledge to new context

ASSESSMENT OBJECTIVES:
- AO1 (15%): Knowledge of locations and places
- AO2 (25%): Understanding of concepts
- AO3 (35%): Application and analysis
- AO4 (25%): Skills including fieldwork`,

  ocr: `
OCR GCSE GEOGRAPHY B (J383) SPECIFIC CONVENTIONS:

COMMAND WORDS:
- "Calculate" - Work out numerical answer
- "Compare" - State similarities and differences
- "Define" - State precise meaning
- "Describe" - Give account of features
- "Discuss" - Present different viewpoints
- "Evaluate" - Review and make judgement
- "Explain" - Give reasons
- "Give/State" - Brief answer
- "Suggest" - Apply understanding to new context

ASSESSMENT OBJECTIVES:
- AO1 (20%): Knowledge and understanding
- AO2 (20%): Application of knowledge
- AO3 (35%): Interpretative and analytical skills
- AO4 (25%): Investigative and fieldwork skills`,
};

const A_LEVEL_GEOGRAPHY_CONVENTIONS: Record<ExamBoard, string> = {
  aqa: `
AQA A-LEVEL GEOGRAPHY (7037) SPECIFIC CONVENTIONS:

COMMAND WORDS:
- "Analyse" - Examine in detail
- "Assess" - Consider and make judgement
- "Compare" - Describe similarities and differences
- "Define" - State precise meaning
- "Describe" - Give account of features
- "Discuss" - Present and evaluate viewpoints
- "Evaluate" - Make judgement based on evidence
- "Explain" - Give reasons with geographical theory
- "Suggest" - Apply to unfamiliar context
- "To what extent" - Balanced evaluation

ASSESSMENT OBJECTIVES:
- AO1 (30-40%): Knowledge and understanding
- AO2 (30-40%): Application
- AO3 (20-30%): Skills including data analysis

FIELDWORK:
- Must include fieldwork investigation
- Data presentation and analysis skills tested`,

  edexcel: `
EDEXCEL A-LEVEL GEOGRAPHY (9GE0) SPECIFIC CONVENTIONS:

COMMAND WORDS:
- "Analyse" - Examine in detail
- "Assess" - Consider and make judgement
- "Compare" - State similarities and differences
- "Define" - State precise meaning
- "Describe" - Give account of features
- "Discuss" - Present different viewpoints
- "Evaluate" - Make reasoned judgement
- "Explain" - Give reasons
- "Suggest" - Apply to new context

ASSESSMENT OBJECTIVES:
- AO1 (30-40%): Knowledge and understanding
- AO2 (30-40%): Application
- AO3 (20-30%): Skills including fieldwork`,

  ocr: `
OCR A-LEVEL GEOGRAPHY (H481) SPECIFIC CONVENTIONS:

COMMAND WORDS:
- "Analyse" - Examine in detail
- "Assess" - Consider and make judgement
- "Compare" - State similarities and differences
- "Define" - State precise meaning
- "Describe" - Give account of features
- "Discuss" - Present different arguments
- "Evaluate" - Make reasoned judgement
- "Explain" - Give reasons
- "Suggest" - Apply to unfamiliar context

ASSESSMENT OBJECTIVES:
- AO1 (30-40%): Knowledge and understanding
- AO2 (30-40%): Application
- AO3 (20-30%): Skills`,
};

// History specific conventions
const HISTORY_CONVENTIONS: Record<ExamBoard, string> = {
  aqa: `
AQA GCSE HISTORY (8145) SPECIFIC CONVENTIONS:

COMMAND WORDS:
- "Describe" - Give an account of features/events
- "Explain" - Give reasons; show causation
- "Give" - Brief answer
- "How convincing" - Evaluate source reliability
- "How useful" - Assess source utility for enquiry
- "How far do you agree" - Balanced judgement required
- "Write an account" - Narrative with analysis

SOURCE QUESTIONS:
- Must reference specific content from sources
- Consider provenance (origin, nature, purpose)
- Cross-reference sources where relevant

ASSESSMENT OBJECTIVES:
- AO1 (35-45%): Knowledge and understanding of key features
- AO2 (35-45%): Explain and analyse using second-order concepts
- AO3 (10-20%): Analyse, evaluate and use sources
- AO4 (0-10%): Analyse and evaluate interpretations`,

  edexcel: `
EDEXCEL GCSE HISTORY (1HI0) SPECIFIC CONVENTIONS:

COMMAND WORDS:
- "Describe" - Give account of features/events
- "Explain" - Give reasons; show causation
- "Give" - Brief answer
- "How far do you agree" - Balanced evaluation
- "How useful are Sources" - Evaluate utility

SOURCE QUESTIONS:
- Reference specific source content
- Consider provenance
- Evaluate reliability and utility

ASSESSMENT OBJECTIVES:
- AO1 (35-40%): Knowledge and understanding
- AO2 (30-35%): Explanation and analysis
- AO3 (15-20%): Source analysis
- AO4 (10-15%): Evaluate interpretations`,

  ocr: `
OCR GCSE HISTORY A (J410) SPECIFIC CONVENTIONS:

COMMAND WORDS:
- "Describe" - Give account of features
- "Explain" - Give reasons; show causation
- "Give" - Brief answer
- "How far do you agree" - Balanced judgement
- "How useful" - Evaluate source utility
- "Interpret" - Explain meaning

SOURCE QUESTIONS:
- Must reference source content
- Consider origin and purpose
- Evaluate reliability

ASSESSMENT OBJECTIVES:
- AO1 (35-45%): Knowledge and understanding
- AO2 (30-35%): Explanation and analysis
- AO3 (10-20%): Source analysis
- AO4 (10-15%): Evaluate interpretations`,
};

const A_LEVEL_HISTORY_CONVENTIONS: Record<ExamBoard, string> = {
  aqa: `
AQA A-LEVEL HISTORY (7042) SPECIFIC CONVENTIONS:

COMMAND WORDS:
- "Assess" - Consider and make judgement
- "Evaluate" - Weigh evidence, make reasoned judgement
- "Explain" - Give reasons; show causation
- "How convincing" - Evaluate source reliability
- "How far do you agree" - Balanced evaluation
- "To what extent" - Balanced analysis required
- "With reference to" - Must use sources/extracts

ASSESSMENT OBJECTIVES:
- AO1 (10-20%): Knowledge and understanding
- AO2 (40-50%): Analysis and evaluation of second-order concepts
- AO3 (20-30%): Source analysis and evaluation

EXTENDED RESPONSE:
- Essays require sustained argument
- Must include specific factual knowledge
- Use historiographical debate where relevant`,

  edexcel: `
EDEXCEL A-LEVEL HISTORY (9HI0) SPECIFIC CONVENTIONS:

COMMAND WORDS:
- "Assess" - Consider and make judgement
- "Evaluate" - Make reasoned judgement
- "Explain" - Give reasons with evidence
- "How far do you agree" - Balanced evaluation
- "How accurate" - Evaluate interpretation
- "To what extent" - Balanced analysis

ASSESSMENT OBJECTIVES:
- AO1 (15-25%): Knowledge and understanding
- AO2 (40-50%): Analysis and evaluation
- AO3 (15-25%): Source analysis

EXTENDED RESPONSE:
- Sustained analytical argument required
- Reference to specific evidence essential`,

  ocr: `
OCR A-LEVEL HISTORY (H505) SPECIFIC CONVENTIONS:

COMMAND WORDS:
- "Assess" - Consider and make judgement
- "Evaluate" - Make reasoned judgement
- "Explain" - Give reasons
- "How far do you agree" - Balanced evaluation
- "To what extent" - Balanced analysis

ASSESSMENT OBJECTIVES:
- AO1 (15-25%): Knowledge and understanding
- AO2 (40-50%): Analysis and evaluation
- AO3 (15-25%): Source analysis

EXTENDED RESPONSE:
- Analytical essay structure required
- Specific evidence must support arguments`,
};

// English Literature specific conventions
const ENGLISH_LITERATURE_CONVENTIONS: Record<ExamBoard, string> = {
  aqa: `
AQA GCSE ENGLISH LITERATURE (8702) SPECIFIC CONVENTIONS:

COMMAND WORDS:
- "How does [author] present" - Analyse writer's methods
- "How is [theme/character] presented" - Explore presentation
- "Write about" - Analyse and evaluate
- "Compare how" - Analyse similarities/differences in texts

ASSESSMENT OBJECTIVES:
- AO1 (12.5%): Read, understand, respond with quotations
- AO2 (62.5%): Analyse language, form, structure and their effects
- AO3 (12.5%): Show understanding of contexts
- AO4 (12.5%): Use range of vocabulary and sentence structures (NEA)

RESPONSE REQUIREMENTS:
- Embed quotations fluently
- Analyse specific words and phrases
- Consider writer's intentions
- Reference context where relevant`,

  edexcel: `
EDEXCEL GCSE ENGLISH LITERATURE (1ET0) SPECIFIC CONVENTIONS:

COMMAND WORDS:
- "Explore how" - Analyse writer's methods
- "How does [author] present" - Analyse presentation
- "Write about" - Analyse and evaluate
- "Compare how" - Analyse both texts

ASSESSMENT OBJECTIVES:
- AO1 (15%): Read, understand, respond with quotations
- AO2 (55%): Analyse language, form, structure
- AO3 (15%): Understand contexts
- AO4 (15%): Accurate written expression

RESPONSE REQUIREMENTS:
- Use embedded quotations
- Close language analysis
- Consider writer's craft`,

  ocr: `
OCR GCSE ENGLISH LITERATURE (J352) SPECIFIC CONVENTIONS:

COMMAND WORDS:
- "Explore how" - Analyse methods and effects
- "How does [author] present" - Analyse presentation
- "What are your thoughts" - Personal response with evidence

ASSESSMENT OBJECTIVES:
- AO1 (15%): Read, understand, respond
- AO2 (55%): Analyse language, form, structure
- AO3 (15%): Understand contexts
- AO4 (15%): Written expression

RESPONSE REQUIREMENTS:
- Evidence through quotations
- Language analysis essential
- Consider contexts`,
};

const A_LEVEL_ENGLISH_LITERATURE_CONVENTIONS: Record<ExamBoard, string> = {
  aqa: `
AQA A-LEVEL ENGLISH LITERATURE A (7712) SPECIFIC CONVENTIONS:

COMMAND WORDS:
- "Compare" - Analyse connections across texts
- "Explore how" - Analyse writer's methods
- "How does [author] present" - Analyse craft and effects
- "To what extent" - Evaluate with balanced argument

ASSESSMENT OBJECTIVES:
- AO1 (15%): Informed responses with quotations and terminology
- AO2 (30%): Analyse ways meanings are shaped
- AO3 (25%): Demonstrate understanding of contexts
- AO4 (20%): Explore connections across texts
- AO5 (10%): Explore interpretations

RESPONSE REQUIREMENTS:
- Sophisticated vocabulary and expression
- Integrate quotations fluently
- Consider multiple interpretations
- Reference critical perspectives where relevant`,

  edexcel: `
EDEXCEL A-LEVEL ENGLISH LITERATURE (9ET0) SPECIFIC CONVENTIONS:

COMMAND WORDS:
- "Compare" - Explore connections between texts
- "Explore how" - Analyse methods
- "How does [author] present" - Analyse presentation
- "To what extent" - Evaluate with argument

ASSESSMENT OBJECTIVES:
- AO1 (15%): Informed responses with quotations
- AO2 (30%): Analyse methods and effects
- AO3 (25%): Understanding of contexts
- AO4 (20%): Connections across texts
- AO5 (10%): Different interpretations

RESPONSE REQUIREMENTS:
- Academic register and vocabulary
- Embedded quotations
- Analytical depth`,

  ocr: `
OCR A-LEVEL ENGLISH LITERATURE (H472) SPECIFIC CONVENTIONS:

COMMAND WORDS:
- "Compare" - Analyse connections
- "Explore how" - Analyse methods
- "How does [author] present" - Analyse craft
- "To what extent" - Evaluate

ASSESSMENT OBJECTIVES:
- AO1 (15%): Informed responses
- AO2 (30%): Analyse methods
- AO3 (25%): Understanding contexts
- AO4 (20%): Connections across texts
- AO5 (10%): Alternative interpretations

RESPONSE REQUIREMENTS:
- Academic vocabulary
- Integrated quotations
- Multiple interpretations considered`,
};

// A-Level Computer Science specific conventions (Note: Edexcel does NOT offer A-Level CS)
const A_LEVEL_COMPUTER_SCIENCE_CONVENTIONS: Record<string, string> = {
  aqa: `
AQA A-LEVEL COMPUTER SCIENCE (7517) SPECIFIC CONVENTIONS:

COMMAND WORDS:
- "Calculate" - Work out numerical answer with working
- "Complete" - Add missing code, values, or elements
- "Define" - State precise meaning of a term
- "Describe" - Give an account of processes/features
- "Discuss" - Present key points, possibly different views
- "Evaluate" - Weigh evidence, make reasoned judgement
- "Explain" - Give reasons with technical terminology
- "Give/State" - Brief answer, no explanation
- "Write" - Produce code, algorithm, SQL query, or pseudocode

PROGRAMMING QUESTIONS:
- Python or VB.Net or C# accepted
- AQA pseudocode conventions for design questions
- Object-oriented programming concepts expected
- Data structures (stacks, queues, trees, graphs)
- SQL queries must follow standard syntax

ASSESSMENT OBJECTIVES:
- AO1 (20%): Demonstrate knowledge and understanding
- AO2 (45%): Apply knowledge and understanding
- AO3 (35%): Analyse, design and evaluate

MARK SCHEME NOTATION:
- Accept functionally equivalent code
- Credit partial solutions that show understanding
- Alternative approaches accepted if correct
- Big O notation for algorithm analysis`,

  ocr: `
OCR A-LEVEL COMPUTER SCIENCE (H446) SPECIFIC CONVENTIONS:

COMMAND WORDS:
- "Calculate" - Numerical answer with working
- "Complete" - Add missing code/values/elements
- "Define" - State precise meaning
- "Describe" - Give account of what/how
- "Discuss" - Present key points with reasoning
- "Evaluate" - Review information, make judgement
- "Explain" - Give reasons; show cause and effect
- "Give/State" - Brief answer, recall fact
- "Write" - Produce code, algorithm, query, pseudocode

PROGRAMMING QUESTIONS:
- OCR pseudocode or high-level language (Python, Java, C#, VB)
- Object-oriented design expected
- Data structures and algorithms
- SQL and database design
- Computational complexity (Big O)

ASSESSMENT OBJECTIVES:
- AO1 (27%): Demonstrate knowledge and understanding
- AO2 (44%): Apply knowledge and understanding
- AO3 (29%): Design, analyse and evaluate

PROGRAMMING PROJECT:
- Non-exam assessment worth 20%
- Written papers test practical skills indirectly
- Algorithm design and trace tables in exam`,
};

/**
 * Get subject-specific conventions for enhanced prompts
 */
function getSubjectConventions(subject: Subject, examBoard: ExamBoard, qualification: QualificationLevel = 'gcse'): string {
  if (subject === 'maths' || subject === 'further-maths') {
    if (qualification === 'a-level') {
      return A_LEVEL_MATHS_CONVENTIONS[examBoard] || '';
    }
    return MATHS_CONVENTIONS[examBoard] || '';
  }
  if (subject === 'physics') {
    if (qualification === 'a-level') {
      return A_LEVEL_PHYSICS_CONVENTIONS[examBoard] || '';
    }
    return PHYSICS_CONVENTIONS[examBoard] || '';
  }
  if (subject === 'chemistry') {
    if (qualification === 'a-level') {
      return A_LEVEL_CHEMISTRY_CONVENTIONS[examBoard] || '';
    }
    return CHEMISTRY_CONVENTIONS[examBoard] || '';
  }
  if (subject === 'biology') {
    if (qualification === 'a-level') {
      return A_LEVEL_BIOLOGY_CONVENTIONS[examBoard] || '';
    }
    return BIOLOGY_CONVENTIONS[examBoard] || '';
  }
  if (subject === 'computer-science') {
    if (qualification === 'a-level') {
      // Note: Edexcel does NOT offer A-Level Computer Science
      return A_LEVEL_COMPUTER_SCIENCE_CONVENTIONS[examBoard] || '';
    }
    return COMPUTER_SCIENCE_CONVENTIONS[examBoard] || '';
  }
  if (subject === 'economics') {
    if (qualification === 'a-level') {
      return A_LEVEL_ECONOMICS_CONVENTIONS[examBoard] || '';
    }
    // Note: Edexcel does NOT offer GCSE Economics
    return ECONOMICS_CONVENTIONS[examBoard] || '';
  }
  if (subject === 'business') {
    if (qualification === 'a-level') {
      return A_LEVEL_BUSINESS_CONVENTIONS[examBoard] || '';
    }
    return BUSINESS_CONVENTIONS[examBoard] || '';
  }
  if (subject === 'psychology') {
    if (qualification === 'a-level') {
      return A_LEVEL_PSYCHOLOGY_CONVENTIONS[examBoard] || '';
    }
    return PSYCHOLOGY_CONVENTIONS[examBoard] || '';
  }
  if (subject === 'geography') {
    if (qualification === 'a-level') {
      return A_LEVEL_GEOGRAPHY_CONVENTIONS[examBoard] || '';
    }
    return GEOGRAPHY_CONVENTIONS[examBoard] || '';
  }
  if (subject === 'history') {
    if (qualification === 'a-level') {
      return A_LEVEL_HISTORY_CONVENTIONS[examBoard] || '';
    }
    return HISTORY_CONVENTIONS[examBoard] || '';
  }
  if (subject === 'english-literature') {
    if (qualification === 'a-level') {
      return A_LEVEL_ENGLISH_LITERATURE_CONVENTIONS[examBoard] || '';
    }
    return ENGLISH_LITERATURE_CONVENTIONS[examBoard] || '';
  }
  // Combined science uses the same conventions as the separate sciences
  if (subject === 'combined-science') {
    // Return chemistry conventions as a base (similar structure for all sciences)
    return CHEMISTRY_CONVENTIONS[examBoard] || '';
  }
  return '';
}

// ============================================================================
// CONCISE GLOBAL CONSTRAINTS (for system prompt inclusion)
// ============================================================================

const CONCISE_CONSTRAINTS = `
CRITICAL RULES:
1. NEVER reproduce real past paper questions - generate original content only
2. Use ONLY factual information you are certain is correct
3. Follow the command word → marks relationship strictly
4. Return valid JSON only - no additional text
5. Use BRITISH ENGLISH spelling throughout (e.g., colour, behaviour, analyse, organisation, centre, travelled, programme)`;

// ============================================================================
// SYSTEM PROMPT BUILDERS
// ============================================================================

/**
 * Generate an enhanced system prompt for a specific subject/board/level combination.
 */
export function getEnhancedSystemPrompt(
  subject: Subject,
  examBoard: ExamBoard,
  qualification: QualificationLevel
): string {
  const specKey = `${subject}-${qualification}-${examBoard}`;
  const specCode = EXAM_BOARD_SPECS[specKey] || '';
  const boardConventions = BOARD_CONVENTIONS[examBoard];
  const subjectConventions = getSubjectConventions(subject, examBoard, qualification);

  const levelName = qualification === 'gcse' ? 'GCSE' : 'A-Level';
  const boardName = examBoard.toUpperCase();
  const subjectName = formatSubjectName(subject);

  const specReference = specCode ? ` (${specCode})` : '';

  // Use subject-specific conventions if available, otherwise use generic mark allocation
  const markAllocationSection = subjectConventions ? '' : `
MARK ALLOCATION RULES:
- "State", "Name", "Give", "Write down" = 1 mark
- "Describe", "Explain" = 2-4 marks
- "Calculate" with working = 2-4 marks
- "Evaluate", "Analyse", "Compare", "Discuss" = 3-6 marks
- Extended response / essay = 6+ marks`;

  return `You are an expert ${boardName} ${levelName} ${subjectName}${specReference} examiner generating authentic exam-style questions.

${CONCISE_CONSTRAINTS}

${boardConventions}
${subjectConventions}
${markAllocationSection}

OUTPUT: Valid JSON only with structure: {"content": "...", "marks": N, "solution": "...", "markScheme": [...]}`;
}

/**
 * Get the full system prompt with all constraints (for detailed prompting).
 */
export function getFullSystemPrompt(
  subject: Subject,
  examBoard: ExamBoard,
  qualification: QualificationLevel
): string {
  const basePrompt = getEnhancedSystemPrompt(subject, examBoard, qualification);

  return `${basePrompt}

${COPYRIGHT_CONSTRAINTS}

${SAFETY_CONSTRAINTS}

${OUTPUT_FORMAT_CONSTRAINTS}`;
}

/**
 * Format subject name for display.
 */
function formatSubjectName(subject: Subject): string {
  const names: Record<Subject, string> = {
    'maths': 'Mathematics',
    'physics': 'Physics',
    'chemistry': 'Chemistry',
    'biology': 'Biology',
    'computer-science': 'Computer Science',
    'economics': 'Economics',
    'business': 'Business',
    'psychology': 'Psychology',
    'geography': 'Geography',
    'history': 'History',
    'english-literature': 'English Literature',
    'further-maths': 'Further Mathematics',
    'combined-science': 'Combined Science',
  };
  return names[subject] || subject;
}

/**
 * Get specification code for a subject/board/level.
 */
export function getSpecificationCode(
  subject: Subject,
  examBoard: ExamBoard,
  qualification: QualificationLevel
): string | undefined {
  const specKey = `${subject}-${qualification}-${examBoard}`;
  return EXAM_BOARD_SPECS[specKey];
}

// ============================================================================
// LEGACY COMPATIBILITY
// ============================================================================

/**
 * Get system prompt using the old key format (for backward compatibility).
 */
export function getSystemPromptByKey(key: string): string {
  // Parse the key (e.g., "physics-gcse" or "maths-a-level")
  const parts = key.split('-');

  if (parts.length < 2) {
    // Fallback to generic
    return getEnhancedSystemPrompt('maths', 'aqa', 'gcse');
  }

  // Handle subject names with hyphens
  let subject: Subject;
  let qualification: QualificationLevel;

  if (parts[parts.length - 1] === 'level' && parts[parts.length - 2] === 'a') {
    // A-Level
    qualification = 'a-level';
    subject = parts.slice(0, -2).join('-') as Subject;
  } else {
    // GCSE
    qualification = parts[parts.length - 1] as QualificationLevel;
    subject = parts.slice(0, -1).join('-') as Subject;
  }

  return getEnhancedSystemPrompt(subject, 'aqa', qualification);
}

// ============================================================================
// SYSTEM PROMPTS RECORD (for direct access)
// ============================================================================

/**
 * Pre-generated system prompts for common combinations.
 * Use getEnhancedSystemPrompt() for dynamic generation.
 */
export const ENHANCED_SYSTEM_PROMPTS: Record<string, string> = {
  // Maths
  'maths-gcse': getEnhancedSystemPrompt('maths', 'aqa', 'gcse'),
  'maths-a-level': getEnhancedSystemPrompt('maths', 'aqa', 'a-level'),

  // Physics
  'physics-gcse': getEnhancedSystemPrompt('physics', 'aqa', 'gcse'),
  'physics-a-level': getEnhancedSystemPrompt('physics', 'aqa', 'a-level'),

  // Chemistry
  'chemistry-gcse': getEnhancedSystemPrompt('chemistry', 'aqa', 'gcse'),
  'chemistry-a-level': getEnhancedSystemPrompt('chemistry', 'aqa', 'a-level'),

  // Biology
  'biology-gcse': getEnhancedSystemPrompt('biology', 'aqa', 'gcse'),
  'biology-a-level': getEnhancedSystemPrompt('biology', 'aqa', 'a-level'),

  // Computer Science
  'computer-science-gcse': getEnhancedSystemPrompt('computer-science', 'aqa', 'gcse'),
  'computer-science-a-level': getEnhancedSystemPrompt('computer-science', 'aqa', 'a-level'),

  // Economics
  'economics-gcse': getEnhancedSystemPrompt('economics', 'aqa', 'gcse'),
  'economics-a-level': getEnhancedSystemPrompt('economics', 'aqa', 'a-level'),

  // Business
  'business-gcse': getEnhancedSystemPrompt('business', 'aqa', 'gcse'),
  'business-a-level': getEnhancedSystemPrompt('business', 'aqa', 'a-level'),

  // Psychology
  'psychology-gcse': getEnhancedSystemPrompt('psychology', 'aqa', 'gcse'),
  'psychology-a-level': getEnhancedSystemPrompt('psychology', 'aqa', 'a-level'),

  // Geography
  'geography-gcse': getEnhancedSystemPrompt('geography', 'aqa', 'gcse'),
  'geography-a-level': getEnhancedSystemPrompt('geography', 'aqa', 'a-level'),

  // History
  'history-gcse': getEnhancedSystemPrompt('history', 'aqa', 'gcse'),
  'history-a-level': getEnhancedSystemPrompt('history', 'aqa', 'a-level'),

  // English Literature
  'english-literature-gcse': getEnhancedSystemPrompt('english-literature', 'aqa', 'gcse'),
  'english-literature-a-level': getEnhancedSystemPrompt('english-literature', 'aqa', 'a-level'),

  // Further Maths
  'further-maths-gcse': getEnhancedSystemPrompt('further-maths', 'aqa', 'gcse'),
  'further-maths-a-level': getEnhancedSystemPrompt('further-maths', 'aqa', 'a-level'),

  // Combined Science (GCSE only - covers Biology, Chemistry, Physics across 6 papers)
  'combined-science-gcse': getEnhancedSystemPrompt('combined-science', 'aqa', 'gcse'),
};
