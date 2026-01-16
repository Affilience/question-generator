// AQA A-Level Biology (7402) Question Generation Prompts
// Tailored to AQA specification style and assessment objectives

import { Difficulty, Topic, Practical, PracticalSubtopic } from '@/types';
import { getMarkRangeForDifficulty, getDiagramDocsForSubject } from './prompts-common';

// ============================================================================
// AQA A-LEVEL BIOLOGY SPECIFICATION DETAILS (7402)
// Based on official AQA specification and past paper analysis
// ============================================================================

// ============================================================================
// REFERENCE DATA AND FORMULAS
// ============================================================================

const AQA_ALEVEL_BIOLOGY_REFERENCE_DATA = `
## A-Level Biology Reference Data and Formulas

### Magnification Calculations
| Formula | Units |
|---------|-------|
| Magnification = Image size ÷ Actual size | No units (ratio) |
| Actual size = Image size ÷ Magnification | μm or mm |
| Image size = Actual size × Magnification | μm or mm |

### Unit Conversions
| From | To | Multiply by |
|------|-----|-------------|
| m | mm | 1000 |
| mm | μm | 1000 |
| μm | nm | 1000 |
| m | μm | 1,000,000 |
| mm | nm | 1,000,000 |

### Water Potential (Ψ)
| Formula | Units |
|---------|-------|
| Ψ = Ψs + Ψp | kPa |
| Ψ (cell) = Ψs (solute potential) + Ψp (pressure potential) | kPa |
| Pure water Ψ = 0 kPa | |
| Solutions have negative Ψs | |
| Water moves from higher (less negative) to lower (more negative) Ψ | |

### Cardiac Output
| Formula | Units |
|---------|-------|
| Cardiac output = Stroke volume × Heart rate | cm³/min or dm³/min |
| Stroke volume = Cardiac output ÷ Heart rate | cm³ or dm³ |

### Respiratory Quotient (RQ)
| Formula | Interpretation |
|---------|----------------|
| RQ = CO₂ produced ÷ O₂ consumed | No units (ratio) |
| RQ = 1.0 | Carbohydrate respiration |
| RQ = 0.7 | Lipid respiration |
| RQ = 0.9 | Protein respiration |
| RQ > 1.0 | Anaerobic respiration occurring |

### Productivity and Energy Transfer
| Formula | Units |
|---------|-------|
| GPP = NPP + R | kJ m⁻² year⁻¹ |
| NPP = GPP - R | kJ m⁻² year⁻¹ |
| Net production (consumers) = I - (F + R) | kJ m⁻² year⁻¹ |
| Efficiency = (Energy transferred / Energy input) × 100 | % |
| Typically 10% efficiency between trophic levels | |

Where: GPP = Gross Primary Productivity, NPP = Net Primary Productivity, R = Respiration, I = Ingested energy, F = Faeces/egested energy

### Hardy-Weinberg Equations
| Formula | Variables |
|---------|-----------|
| p + q = 1 | p = dominant allele frequency, q = recessive allele frequency |
| p² + 2pq + q² = 1 | p² = homozygous dominant, 2pq = heterozygous, q² = homozygous recessive |

### Chi-Squared Test (χ²)
| Formula | Description |
|---------|-------------|
| χ² = Σ [(O - E)² ÷ E] | O = observed, E = expected |
| Degrees of freedom = n - 1 | n = number of categories |
| Compare calculated χ² with critical value at p = 0.05 | |
| If χ² > critical value → reject null hypothesis (significant difference) | |

### Critical Values for Chi-Squared (p = 0.05)
| Degrees of Freedom | Critical Value |
|--------------------|----------------|
| 1 | 3.84 |
| 2 | 5.99 |
| 3 | 7.81 |
| 4 | 9.49 |
| 5 | 11.07 |

### Simpson's Index of Diversity (D)
| Formula | Interpretation |
|---------|----------------|
| D = 1 - Σ(n/N)² | D ranges from 0 to 1 |
| D = 1 - Σ[n(n-1) / N(N-1)] | Higher D = more diverse |
| n = number of individuals of each species | |
| N = total number of individuals | |

### Standard Deviation
| Formula | Description |
|---------|-------------|
| s = √[Σ(x - x̄)² ÷ (n-1)] | x̄ = mean, n = sample size |
| 68% of data within 1 SD of mean | |
| 95% of data within 2 SD of mean | |

### Student's t-test
| Formula | Usage |
|---------|-------|
| t = (x̄₁ - x̄₂) ÷ √(s₁²/n₁ + s₂²/n₂) | Compare two means |
| Degrees of freedom = n₁ + n₂ - 2 | |
| If t > critical value → significant difference | |

### Spearman's Rank Correlation
| Formula | Interpretation |
|---------|----------------|
| rs = 1 - [6Σd² ÷ n(n²-1)] | d = difference in ranks |
| rs ranges from -1 to +1 | |
| +1 = perfect positive correlation | |
| -1 = perfect negative correlation | |
| 0 = no correlation | |
`;

// ============================================================================
// AQA A-LEVEL BIOLOGY COMPLETE SPECIFICATION (7402)
// ============================================================================

const AQA_SPECIFICATION_OVERVIEW = `
## AQA A-Level Biology Specification Overview (7402)

### Qualification Structure
- **AS Level (7401)**: Covers Topics 1-4 only (separate qualification)
- **A-Level (7402)**: Covers all Topics 1-8 (this specification)
- Linear assessment: All exams at end of course
- Practical endorsement: Separate pass/fail assessment

### Assessment Overview
| Paper | Duration | Marks | Weighting | Topics Covered |
|-------|----------|-------|-----------|----------------|
| Paper 1 | 2 hours | 91 | 35% | Topics 1-4 + Practical Skills |
| Paper 2 | 2 hours | 91 | 35% | Topics 5-8 + Practical Skills |
| Paper 3 | 2 hours | 78 | 30% | All Topics + Essay |

### Paper 1: Biological Processes (91 marks, 2 hours)
**Content examined:**
- Topic 1: Biological Molecules
- Topic 2: Cells
- Topic 3: Organisms Exchange Substances with Their Environment
- Topic 4: Genetic Information, Variation and Relationships

**Question types:**
- Section A: Short answer questions (approximately 75 marks)
- Section B: Comprehension question (approximately 16 marks)

### Paper 2: Biological Principles (91 marks, 2 hours)
**Content examined:**
- Topic 5: Energy Transfers in and Between Organisms
- Topic 6: Organisms Respond to Changes in Their Internal and External Environments
- Topic 7: Genetics, Populations, Evolution and Ecosystems
- Topic 8: The Control of Gene Expression

**Question types:**
- Section A: Short answer questions (approximately 75 marks)
- Section B: Comprehension question (approximately 16 marks)

### Paper 3: Unified Biology (78 marks, 2 hours)
**Content examined:**
- All Topics 1-8
- Synoptic assessment
- Essay from choice of two titles

**Question types:**
- Section A: Structured questions including practical techniques (40 marks)
- Section B: Critical analysis of experimental data (15 marks)
- Section C: Essay (25 marks - choose 1 from 2)

### Practical Endorsement
- Separate to written exams (not included in grade)
- Reported as Pass or Not Classified
- Based on teacher assessment of 12 Required Practicals
- Competencies: CPAC 1-5 (Common Practical Assessment Criteria)
`;

const AQA_ASSESSMENT_OBJECTIVES = `
## Assessment Objectives and Weightings

### AO1: Knowledge and Understanding (30-35%)
Demonstrate knowledge and understanding of:
- Scientific ideas
- Processes and techniques
- Procedures

**What this means in practice:**
- Recall facts, definitions and formulae
- State key concepts and principles
- Describe structures, processes and procedures
- Show understanding through appropriate use of terminology

**Command words typically used:**
State, Name, Give, Define, Describe, Outline

**Mark allocation examples:**
- "State the role of ATP in muscle contraction" [1 mark]
- "Describe the structure of a phospholipid" [3 marks]
- "Outline the stages of the cell cycle" [4 marks]

### AO2: Application of Knowledge (40-45%)
Apply knowledge and understanding of:
- Scientific ideas, processes, techniques and procedures
- In a theoretical context
- In a practical context
- When handling qualitative data
- When handling quantitative data

**What this means in practice:**
- Use scientific knowledge in new situations
- Apply understanding to unfamiliar contexts
- Make predictions based on scientific principles
- Perform calculations using appropriate methods
- Analyse experimental procedures

**Command words typically used:**
Calculate, Explain, Suggest, Apply, Deduce, Determine

**Mark allocation examples:**
- "Explain how the structure of haemoglobin is related to its function" [4 marks]
- "Calculate the cardiac output from the data given" [2 marks]
- "Suggest why the experiment was carried out at 25°C" [2 marks]

### AO3: Analysis, Interpretation and Evaluation (25%)
Analyse, interpret and evaluate:
- Scientific information
- Ideas and evidence
- Make judgements and reach conclusions
- Develop and refine practical design and procedures

**What this means in practice:**
- Interpret data from graphs, tables and diagrams
- Evaluate experimental methods
- Analyse patterns and trends
- Draw valid conclusions from evidence
- Identify limitations and improvements
- Assess validity and reliability

**Command words typically used:**
Evaluate, Analyse, Justify, Compare, Discuss, Assess

**Mark allocation examples:**
- "Evaluate this method for measuring the rate of photosynthesis" [4 marks]
- "Analyse the data to determine whether there is a significant difference" [5 marks]
- "Justify the conclusion that can be drawn from these results" [3 marks]

### Weighting by Paper
| Objective | Paper 1 | Paper 2 | Paper 3 | Overall |
|-----------|---------|---------|---------|---------|
| AO1 | 32-35% | 32-35% | 25-29% | 30-35% |
| AO2 | 41-44% | 41-44% | 40-44% | 40-45% |
| AO3 | 22-26% | 22-26% | 28-32% | 25% |

### Mathematical Skills (Minimum 10%)
Students must demonstrate:
- Arithmetic and numerical computation
- Handling data (mean, standard deviation, correlation)
- Algebra (understanding formulae, rearranging)
- Graphs (plotting, calculating rates from tangents)
- Geometry (magnification calculations)
- Statistical analysis (chi-squared, t-test, Spearman's rank)
`;

const AQA_COMMAND_WORDS = `
## AQA Command Words with Biology Examples

### Level 1 Commands (Lower demand - typically AO1)

**State** / **Give** / **Name** / **Identify**
Brief, concise answer with no explanation required.
- Example: "State the function of ribosomes." [1 mark]
- Answer: "Protein synthesis" ✓
- Common error: Writing too much - keep it brief

**Define**
Give the precise meaning of a term.
- Example: "Define the term 'activation energy'." [2 marks]
- Answer: "The minimum energy required for a reaction to occur / for reactants to form products" ✓✓
- Common error: Vague definitions that could apply to other concepts

**List**
Give a number of examples or points, each as a single word or short phrase.
- Example: "List three functions of lipids in organisms." [3 marks]
- Answer: "Energy storage / insulation / cell membranes / waterproofing / hormone production" (any 3) ✓✓✓

### Level 2 Commands (Medium demand - typically AO1/AO2)

**Describe**
Give an account in words of the main points.
- Example: "Describe the structure of DNA." [4 marks]
- Answer: "Double helix ✓ made of two antiparallel strands ✓ joined by hydrogen bonds between complementary base pairs (A-T, C-G) ✓ sugar-phosphate backbone ✓"
- Common error: Describing function when asked for structure

**Outline**
Set out the main characteristics or features.
- Example: "Outline the stages of mitosis." [4 marks]
- Answer: Brief description of prophase, metaphase, anaphase, telophase
- Key: Less detail than 'describe', focus on sequence

**Explain**
Give reasons for something; use scientific knowledge to account for.
- Example: "Explain why competitive inhibitors increase Km but do not affect Vmax." [4 marks]
- Answer: "Competitive inhibitors compete with substrate for active site ✓ reducing substrate binding at low concentrations (apparent lower affinity = higher Km) ✓ at high substrate concentrations, substrate outcompetes inhibitor ✓ so same maximum rate can still be achieved ✓"
- Common error: Describing instead of explaining (missing the 'because' element)

**Calculate**
Obtain a numerical answer, showing relevant working.
- Example: "Calculate the percentage change in mass." [2 marks]
- Answer: Show formula, substitute values, give final answer with units
- Key: Always show working - method marks available even if final answer wrong

### Level 3 Commands (Higher demand - typically AO2/AO3)

**Suggest**
Apply knowledge and understanding to unfamiliar situations.
- Example: "Suggest why the enzyme stopped working at pH 11." [2 marks]
- Answer: "High pH disrupts ionic/hydrogen bonds ✓ causing tertiary structure/active site shape to change (denaturation) ✓"
- Key: Uses knowledge in new context - no single 'correct' answer

**Compare**
Identify similarities and/or differences.
- Example: "Compare aerobic and anaerobic respiration." [4 marks]
- Answer: Must include BOTH similarities AND differences
- Format: "Both... ✓ However, aerobic... whereas anaerobic... ✓"
- Common error: Only giving differences

**Evaluate**
Use evidence to make a judgement about the value or quality of something.
- Example: "Evaluate this method for measuring reaction rate." [4 marks]
- Answer: Must include BOTH strengths AND limitations with justification
- Key: Weigh up evidence, come to a balanced conclusion

**Analyse**
Examine methodically and in detail.
- Example: "Analyse the results shown in Table 1." [4 marks]
- Answer: Identify patterns, trends, anomalies; use data to support statements
- Key: Reference specific data points, calculate if appropriate

**Justify**
Give reasons to support a conclusion.
- Example: "The student concluded the results support the hypothesis. Justify this conclusion." [3 marks]
- Answer: Link specific data/evidence to the conclusion drawn
- Key: Evidence + reasoning = justified conclusion

**Discuss**
Present key points about different ideas or aspects of a topic.
- Example: "Discuss the use of genetic screening in medicine." [6 marks]
- Answer: Multiple perspectives, advantages/disadvantages, balanced view
- Key: Consider different viewpoints, reach a reasoned conclusion

**Assess**
Make an informed judgement.
- Example: "Assess the reliability of these results." [3 marks]
- Answer: Consider evidence, weigh up factors, make clear judgement
- Key: Similar to evaluate but with more emphasis on judgement

### Design and Procedure Commands

**Design**
Set out how an investigation will be done.
- Example: "Design an experiment to investigate the effect of temperature on enzyme activity." [6 marks]
- Answer: Include IV, DV, controls, method, equipment, safety, data collection
- Key: Sufficient detail for someone else to repeat

**Plan**
Similar to design, set out how something will be done.

**Sketch**
Produce a drawing that shows the main features without need for accurate plotting.
- For graphs: labelled axes, approximate shape of relationship
- For diagrams: key structural features only

### Interpretation Commands

**Determine**
Use given data or information to obtain an answer.
- Example: "Determine the rate of reaction between 0 and 2 minutes." [2 marks]
- Answer: Read values from graph, calculate, show working

**Deduce**
Draw conclusions from information given.
- Example: "Deduce which tube contained the enzyme." [2 marks]
- Answer: Use evidence to reach a logical conclusion

**Predict**
Give an expected result based on scientific knowledge.
- Example: "Predict the effect of increasing CO₂ concentration on photosynthesis rate." [2 marks]
- Answer: State prediction WITH scientific reasoning
`;

const AQA_ALEVEL_BIOLOGY_WORKED_EXAMPLES = `
## A-Level Biology Worked Calculation Examples

### Example 1: Magnification Calculation
**Q:** A cell has an actual diameter of 50 μm. In a micrograph, it measures 35 mm. Calculate the magnification. [2 marks]

**Solution:**
- Convert units: 35 mm = 35,000 μm
- M = Image size ÷ Actual size
- M = 35,000 ÷ 50
- **M = ×700** ✓

---

### Example 2: Hardy-Weinberg Calculation
**Q:** In a population, 16% of individuals show the recessive phenotype for a trait. Calculate the frequency of the dominant allele. [3 marks]

**Solution:**
- q² = 0.16 (frequency of homozygous recessive)
- q = √0.16 = 0.4 (frequency of recessive allele) ✓
- p + q = 1
- p = 1 - 0.4
- **p = 0.6** (frequency of dominant allele) ✓
- Heterozygous frequency (2pq) = 2 × 0.6 × 0.4 = 0.48 (48%)

---

### Example 3: Chi-Squared Test
**Q:** A genetic cross predicted a 3:1 ratio. From 200 offspring, 160 showed the dominant phenotype and 40 the recessive. Is this significantly different from expected? [4 marks]

**Solution:**
- Expected: 150 dominant : 50 recessive (3:1 of 200)
- χ² = Σ [(O - E)² ÷ E]
- χ² = [(160-150)²/150] + [(40-50)²/50]
- χ² = (100/150) + (100/50)
- χ² = 0.67 + 2.00
- **χ² = 2.67** ✓
- Degrees of freedom = 2 - 1 = 1
- Critical value (df=1, p=0.05) = 3.84
- 2.67 < 3.84, so **no significant difference** - accept null hypothesis ✓

---

### Example 4: Cardiac Output
**Q:** A person has a heart rate of 72 beats per minute and a stroke volume of 70 cm³. Calculate the cardiac output in dm³/min. [2 marks]

**Solution:**
- Cardiac output = Stroke volume × Heart rate
- Cardiac output = 70 × 72 = 5040 cm³/min ✓
- Convert: 5040 ÷ 1000 = **5.04 dm³/min** ✓

---

### Example 5: Respiratory Quotient
**Q:** An organism consumes 8.0 cm³ of oxygen and produces 5.6 cm³ of carbon dioxide per hour. Calculate the RQ and identify the likely respiratory substrate. [3 marks]

**Solution:**
- RQ = CO₂ produced ÷ O₂ consumed
- RQ = 5.6 ÷ 8.0
- **RQ = 0.7** ✓
- This RQ indicates **lipid/fat** is being respired ✓

---

### Example 6: Net Primary Productivity
**Q:** A grassland ecosystem has a GPP of 20,000 kJ m⁻² year⁻¹. Producers use 12,000 kJ m⁻² year⁻¹ in respiration. Calculate the NPP and the percentage of GPP available to consumers. [3 marks]

**Solution:**
- NPP = GPP - R
- NPP = 20,000 - 12,000
- **NPP = 8,000 kJ m⁻² year⁻¹** ✓
- Percentage = (NPP ÷ GPP) × 100
- Percentage = (8,000 ÷ 20,000) × 100
- **Percentage = 40%** ✓

---

### Example 7: Simpson's Index of Diversity
**Q:** A sample contains: Species A = 20, Species B = 15, Species C = 5. Calculate Simpson's Index of Diversity. [3 marks]

**Solution:**
- N = 20 + 15 + 5 = 40
- D = 1 - Σ(n/N)²
- D = 1 - [(20/40)² + (15/40)² + (5/40)²]
- D = 1 - [(0.5)² + (0.375)² + (0.125)²]
- D = 1 - [0.25 + 0.141 + 0.016]
- D = 1 - 0.407
- **D = 0.59** ✓

---

### Example 8: Water Potential
**Q:** A cell has a solute potential of -800 kPa and a pressure potential of 300 kPa. Calculate the water potential and predict the direction of water movement if placed in a solution with Ψ = -600 kPa. [3 marks]

**Solution:**
- Ψ = Ψs + Ψp
- Ψ = -800 + 300
- **Ψ = -500 kPa** ✓
- Cell Ψ (-500 kPa) is higher (less negative) than solution Ψ (-600 kPa)
- **Water will move OUT of the cell** (from higher to lower Ψ) ✓

---

### Example 9: Energy Transfer Efficiency
**Q:** In an ecosystem, producers transfer 50,000 kJ m⁻² year⁻¹ as NPP. Primary consumers assimilate 5,000 kJ m⁻² year⁻¹ from this, and secondary consumers assimilate 400 kJ m⁻² year⁻¹ from primary consumers. Calculate the efficiency of energy transfer at each trophic level. [4 marks]

**Solution:**
- Efficiency (producers → primary consumers) = (5,000 ÷ 50,000) × 100 = **10%** ✓✓
- Efficiency (primary → secondary consumers) = (400 ÷ 5,000) × 100 = **8%** ✓✓
- Note: Typical range is 5-20% efficiency between trophic levels

---

### Example 10: Standard Deviation Interpretation
**Q:** Two groups of plants were grown under different conditions. Group A had a mean height of 25 cm (SD = 2.1) and Group B had a mean height of 28 cm (SD = 5.4). Both n = 20. Evaluate whether there is a significant difference. [4 marks]

**Solution:**
- Difference in means = 28 - 25 = 3 cm
- For Group A: 95% of data lies within 25 ± (2 × 2.1) = 20.8 to 29.2 cm ✓
- For Group B: 95% of data lies within 28 ± (2 × 5.4) = 17.2 to 38.8 cm ✓
- Ranges overlap considerably, suggesting no significant difference ✓
- Group B has much higher variability (SD = 5.4 vs 2.1), indicating more inconsistent growth ✓
- A t-test would be needed for statistical confirmation

---

### Example 11: Surface Area to Volume Ratio
**Q:** A cube-shaped cell has sides of 2 μm. Calculate its surface area to volume ratio. A larger cell has sides of 6 μm. Explain why the larger cell would have difficulty with exchange of substances. [4 marks]

**Solution:**
- Small cell: SA = 6 × (2)² = 24 μm², Volume = (2)³ = 8 μm³
- SA:V = 24:8 = **3:1** ✓
- Large cell: SA = 6 × (6)² = 216 μm², Volume = (6)³ = 216 μm³
- SA:V = 216:216 = **1:1** ✓
- Larger cell has lower SA:V ratio ✓
- Less surface area relative to volume means slower diffusion of substances in/out relative to metabolic demands ✓

---

### Example 12: t-test Calculation
**Q:** The following data was collected for leaf length in two populations:
- Population A: mean = 12.4 cm, SD = 1.8, n = 15
- Population B: mean = 14.2 cm, SD = 2.1, n = 15
Calculate the t-value and determine if there is a significant difference at p = 0.05. (Critical value at df = 28, p = 0.05 is 2.048) [5 marks]

**Solution:**
- t = (x̄₁ - x̄₂) ÷ √(s₁²/n₁ + s₂²/n₂) ✓
- t = (14.2 - 12.4) ÷ √((2.1)²/15 + (1.8)²/15) ✓
- t = 1.8 ÷ √(0.294 + 0.216)
- t = 1.8 ÷ √0.510
- t = 1.8 ÷ 0.714
- **t = 2.52** ✓
- Degrees of freedom = 15 + 15 - 2 = 28
- t (2.52) > critical value (2.048) ✓
- **Significant difference exists** - reject null hypothesis ✓

---

### Example 13: Percentage Change in Mass (Osmosis)
**Q:** A potato cylinder had an initial mass of 2.45 g. After being placed in a sucrose solution for 30 minutes, its final mass was 2.18 g. Calculate the percentage change in mass. [2 marks]

**Solution:**
- Percentage change = [(Final - Initial) ÷ Initial] × 100 ✓
- Percentage change = [(2.18 - 2.45) ÷ 2.45] × 100
- Percentage change = (-0.27 ÷ 2.45) × 100
- **Percentage change = -11.0%** ✓
- Negative value indicates water lost by osmosis (solution more concentrated than cell)

---

### Example 14: Magnification from Scale Bar
**Q:** An electron micrograph shows a mitochondrion with an image length of 4.5 cm. The scale bar indicates 1 μm = 1.5 cm. Calculate the actual length of the mitochondrion. [2 marks]

**Solution:**
- Scale: 1 μm = 1.5 cm (or 1 cm = 0.667 μm) ✓
- Actual length = Image length × Scale factor
- Actual length = 4.5 cm × (1 μm ÷ 1.5 cm)
- **Actual length = 3.0 μm** ✓

---

### Example 15: Spearman's Rank Correlation
**Q:** Data was collected on tree diameter and number of lichens. Calculate rs and interpret the result.
| Tree | Diameter rank | Lichen rank | d | d² |
|------|--------------|-------------|---|-----|
| A | 1 | 2 | -1 | 1 |
| B | 2 | 1 | 1 | 1 |
| C | 3 | 4 | -1 | 1 |
| D | 4 | 3 | 1 | 1 |
| E | 5 | 5 | 0 | 0 |
[4 marks]

**Solution:**
- Σd² = 1 + 1 + 1 + 1 + 0 = 4 ✓
- rs = 1 - [6Σd² ÷ n(n²-1)]
- rs = 1 - [6 × 4 ÷ 5(25-1)]
- rs = 1 - [24 ÷ 120]
- rs = 1 - 0.2
- **rs = 0.8** ✓
- Strong positive correlation between tree diameter and lichen numbers ✓
- Critical value at n=5, p=0.05 is 0.9, so result is NOT significant (0.8 < 0.9) ✓

---

### Example 16: Index of Diversity with Different Sample Sizes
**Q:** Two habitats were sampled with the following results:
- Habitat A: 30 species A, 30 species B, 40 species C (N = 100)
- Habitat B: 80 species A, 10 species B, 10 species C (N = 100)
Calculate Simpson's Index for both and compare diversity. [5 marks]

**Solution:**
Habitat A:
- D = 1 - [(30/100)² + (30/100)² + (40/100)²]
- D = 1 - [0.09 + 0.09 + 0.16]
- D = 1 - 0.34
- **D = 0.66** ✓

Habitat B:
- D = 1 - [(80/100)² + (10/100)² + (10/100)²]
- D = 1 - [0.64 + 0.01 + 0.01]
- D = 1 - 0.66
- **D = 0.34** ✓

Comparison: Habitat A (D = 0.66) has higher diversity than Habitat B (D = 0.34) ✓
Habitat B is dominated by one species, reducing evenness and overall diversity ✓

---

### Example 17: Gene Frequency Change Over Generations
**Q:** In a population, the frequency of a recessive allele (q) is 0.3. Assuming Hardy-Weinberg equilibrium, calculate the expected frequencies of all genotypes. If selection removes 20% of homozygous recessive individuals before reproduction, calculate the new allele frequency in the next generation. [6 marks]

**Solution:**
Initial state:
- q = 0.3, therefore p = 1 - 0.3 = 0.7 ✓
- AA (p²) = 0.49 (49%)
- Aa (2pq) = 2 × 0.7 × 0.3 = 0.42 (42%)
- aa (q²) = 0.09 (9%) ✓

After selection (80% of aa survive):
- aa frequency = 0.09 × 0.80 = 0.072 ✓
- Total after selection = 0.49 + 0.42 + 0.072 = 0.982

Adjusted frequencies:
- AA = 0.49/0.982 = 0.499
- Aa = 0.42/0.982 = 0.428
- aa = 0.072/0.982 = 0.073 ✓

New q = frequency of a allele = aa + ½(Aa) = 0.073 + 0.214 = 0.287
Or: q = √0.073 + (0.428/2) = 0.270 + 0.214 = 0.287
**New q ≈ 0.287** (decreased from 0.3 due to selection against aa) ✓

---

### Example 18: Calculating Rate from Graph Tangent
**Q:** A graph shows volume of oxygen produced (cm³) against time (minutes) during photosynthesis. At t = 5 minutes, draw a tangent and calculate the rate of oxygen production.
Data points: (3, 12), (5, 22), (7, 30)
[3 marks]

**Solution:**
- Draw tangent at t = 5 (touching curve at one point) ✓
- Choose two points on the tangent line (not the curve)
- Rate = change in y ÷ change in x
- Rate = (30 - 12) ÷ (7 - 3) = 18 ÷ 4
- **Rate = 4.5 cm³ min⁻¹** ✓✓
- Note: Units essential for full marks

---

### Example 19: Q₁₀ Calculation
**Q:** The rate of an enzyme-controlled reaction was 8 arbitrary units at 20°C and 24 arbitrary units at 30°C. Calculate Q₁₀ and explain what this value indicates. [3 marks]

**Solution:**
- Q₁₀ = Rate at (T+10) ÷ Rate at T ✓
- Q₁₀ = 24 ÷ 8
- **Q₁₀ = 3** ✓
- This indicates the rate triples for every 10°C rise in temperature
- Q₁₀ of 2-3 is typical for enzyme-controlled reactions ✓
- Values significantly different may indicate denaturation or other factors

---

### Example 20: Cardiac Output During Exercise
**Q:** At rest, a person has a heart rate of 70 bpm and stroke volume of 75 cm³. During exercise, heart rate increases to 160 bpm and stroke volume to 120 cm³. Calculate:
(a) Cardiac output at rest and during exercise [2 marks]
(b) The factor by which cardiac output has increased [1 mark]

**Solution:**
(a)
- CO (rest) = 70 × 75 = 5,250 cm³/min = **5.25 dm³/min** ✓
- CO (exercise) = 160 × 120 = 19,200 cm³/min = **19.2 dm³/min** ✓

(b)
- Factor increase = 19.2 ÷ 5.25 = **3.7 times** ✓
- (Accept 3.6-3.7)

---

### Example 21: Mitotic Index Calculation
**Q:** A student examined 200 cells from a root tip squash. 24 cells were in prophase, 8 in metaphase, 6 in anaphase, and 2 in telophase. Calculate the mitotic index and estimate the duration of each stage if the cell cycle takes 24 hours. [5 marks]

**Solution:**
- Total cells in mitosis = 24 + 8 + 6 + 2 = 40 cells ✓
- Mitotic index = 40/200 = **0.20 or 20%** ✓
- Duration of mitosis = 0.20 × 24 = 4.8 hours ✓
- Prophase duration = (24/200) × 24 = 2.88 hours
- Metaphase duration = (8/200) × 24 = 0.96 hours
- Anaphase duration = (6/200) × 24 = 0.72 hours ✓
- Telophase duration = (2/200) × 24 = 0.24 hours ✓

---

### Example 22: Rf Value Calculation (Chromatography)
**Q:** In a chromatography experiment, the solvent front moved 12.5 cm from the origin. A pigment spot moved 8.75 cm. Calculate the Rf value and identify the pigment from the data below. [3 marks]

Reference Rf values: Carotene 0.95, Xanthophyll 0.70, Chlorophyll a 0.50, Chlorophyll b 0.42

**Solution:**
- Rf = distance moved by pigment / distance moved by solvent ✓
- Rf = 8.75 / 12.5
- **Rf = 0.70** ✓
- This matches **xanthophyll** ✓

---

### Example 23: Net Primary Productivity with Multiple Data
**Q:** A forest ecosystem has the following energy values (all in kJ m⁻² year⁻¹):
- Solar energy input: 5,000,000
- GPP: 50,000
- Producer respiration: 25,000
- Energy passed to herbivores: 2,500

Calculate: (a) NPP, (b) % efficiency of light energy conversion, (c) % efficiency of energy transfer to herbivores. [5 marks]

**Solution:**
(a) NPP = GPP - R = 50,000 - 25,000 = **25,000 kJ m⁻² year⁻¹** ✓

(b) % light energy conversion = (GPP / Solar input) × 100 ✓
    = (50,000 / 5,000,000) × 100 = **1%** ✓

(c) % transfer to herbivores = (Energy to herbivores / NPP) × 100
    = (2,500 / 25,000) × 100 = **10%** ✓ ✓

---

### Example 24: Genetic Cross with Epistasis (9:3:4)
**Q:** In Labrador dogs, coat colour is controlled by two genes. Gene E controls pigment deposition (E_ = pigment deposited, ee = no pigment = yellow). Gene B controls pigment colour (B_ = black, bb = brown). A cross between two black dogs (BbEe × BbEe) produced 64 puppies. Calculate the expected numbers of each phenotype and determine if the observed results (39 black, 12 brown, 13 yellow) differ significantly from expected. [6 marks]

**Solution:**
Expected ratio = 9 B_E_ : 3 bbE_ : 3 B_ee : 1 bbee
                = 9 black : 3 brown : 4 yellow ✓

Expected numbers from 64:
- Black = (9/16) × 64 = 36 ✓
- Brown = (3/16) × 64 = 12 ✓
- Yellow = (4/16) × 64 = 16 ✓

Chi-squared test:
| Phenotype | O | E | (O-E)² | (O-E)²/E |
|-----------|---|---|--------|----------|
| Black | 39 | 36 | 9 | 0.25 |
| Brown | 12 | 12 | 0 | 0 |
| Yellow | 13 | 16 | 9 | 0.56 |

χ² = 0.25 + 0 + 0.56 = **0.81** ✓
df = 3 - 1 = 2, critical value = 5.99
0.81 < 5.99, **no significant difference** ✓

---

### Example 25: Lincoln Index (Mark-Release-Recapture)
**Q:** A population of woodlice was studied using mark-release-recapture. On day 1, 45 woodlice were captured, marked, and released. On day 7, 60 woodlice were captured, of which 12 were marked. Estimate the population size. [3 marks]

**Solution:**
- Lincoln Index: N = (n₁ × n₂) / m ✓
- Where: n₁ = first capture (45), n₂ = second capture (60), m = recaptured marked (12)
- N = (45 × 60) / 12 ✓
- N = 2700 / 12
- **N = 225 woodlice** ✓

---

### Example 26: Percentage Inhibition of Enzyme
**Q:** An enzyme produced 24 μmol of product per minute without inhibitor. With inhibitor present, it produced 18 μmol per minute. Calculate the percentage inhibition. [2 marks]

**Solution:**
- Reduction in rate = 24 - 18 = 6 μmol min⁻¹ ✓
- % inhibition = (6 / 24) × 100
- **% inhibition = 25%** ✓

---

### Example 27: Pulmonary Ventilation Rate
**Q:** A student has a tidal volume of 500 cm³ and a breathing rate of 14 breaths per minute at rest. During exercise, tidal volume increases to 2.5 dm³ and breathing rate to 24 breaths per minute. Calculate the pulmonary ventilation rate at rest and during exercise, expressing both in dm³ min⁻¹. [4 marks]

**Solution:**
At rest:
- Convert: 500 cm³ = 0.5 dm³ ✓
- PVR = tidal volume × breathing rate
- PVR = 0.5 × 14 = **7 dm³ min⁻¹** ✓

During exercise:
- PVR = 2.5 × 24 = **60 dm³ min⁻¹** ✓

Factor increase = 60 / 7 = **8.6 times** ✓

---

### Example 28: Absorption Spectrum and Action Spectrum Analysis
**Q:** A plant shows maximum photosynthesis rate at wavelengths of 430 nm and 680 nm, with minimum rate at 550 nm. Explain these results in terms of chlorophyll absorption. [4 marks]

**Solution (explanation-type question):**
- 430 nm (blue light) is strongly absorbed by chlorophyll a and b ✓
- 680 nm (red light) is strongly absorbed by chlorophyll a ✓
- 550 nm (green light) is mostly reflected/transmitted, not absorbed ✓
- Photosynthesis rate correlates with light absorption - the action spectrum matches the absorption spectrum ✓

---

### Example 29: Water Potential from Graph
**Q:** A graph shows that potato tissue reaches equilibrium (no change in mass) when placed in 0.35 M sucrose solution. Given that the water potential of 0.35 M sucrose is -980 kPa, calculate:
(a) The water potential of the potato cells
(b) The solute potential if the pressure potential is 250 kPa [3 marks]

**Solution:**
(a) At equilibrium, Ψcell = Ψsolution
    **Ψcell = -980 kPa** ✓

(b) Ψ = Ψs + Ψp
    -980 = Ψs + 250 ✓
    Ψs = -980 - 250
    **Ψs = -1230 kPa** ✓

---

### Example 30: Monohybrid Cross with Ratio Test
**Q:** A cross between two heterozygous tall pea plants (Tt × Tt) produced 120 offspring: 85 tall and 35 short. Test whether this fits the expected 3:1 ratio. [4 marks]

**Solution:**
Expected 3:1 from 120: 90 tall : 30 short ✓

| Phenotype | O | E | (O-E)² | (O-E)²/E |
|-----------|---|---|--------|----------|
| Tall | 85 | 90 | 25 | 0.278 |
| Short | 35 | 30 | 25 | 0.833 |

χ² = 0.278 + 0.833 = **1.11** ✓
df = 1, critical value = 3.84
1.11 < 3.84, **accept null hypothesis** - results fit 3:1 ratio ✓ ✓

---

### Example 31: Krebs Cycle ATP Yield Analysis
**Q:** Calculate the total ATP yield from one glucose molecule during aerobic respiration, showing contributions from each stage. Assume 2.5 ATP per NADH and 1.5 ATP per FADH₂. [6 marks]

**Solution:**
| Stage | Direct ATP | NADH | FADH₂ | ATP from carriers |
|-------|------------|------|-------|-------------------|
| Glycolysis | 2 | 2 | 0 | 2 × 2.5 = 5 ✓ |
| Link reaction | 0 | 2 | 0 | 2 × 2.5 = 5 ✓ |
| Krebs cycle | 2 | 6 | 2 | (6×2.5)+(2×1.5) = 18 ✓ |

Total NADH = 10 → 25 ATP
Total FADH₂ = 2 → 3 ATP
Direct ATP = 4 ATP ✓

**Total = 4 + 25 + 3 = 32 ATP** ✓
(Accept 30-32 due to transport costs across membranes) ✓

---

### Example 32: Sex-Linked Inheritance Problem
**Q:** Colour blindness is caused by a recessive allele on the X chromosome. A woman with normal vision whose father was colour blind marries a man with normal vision. Calculate the probability that:
(a) Their son will be colour blind
(b) Their daughter will be a carrier [4 marks]

**Solution:**
- Woman must be carrier: XᴮXᵇ (received Xᵇ from colour blind father) ✓
- Man has normal vision: XᴮY ✓

Cross: XᴮXᵇ × XᴮY

| | Xᴮ | Y |
|---|---|---|
| Xᴮ | XᴮXᴮ (normal ♀) | XᴮY (normal ♂) |
| Xᵇ | XᴮXᵇ (carrier ♀) | XᵇY (colour blind ♂) |

(a) P(son colour blind) = 1/2 of sons = **50%** ✓
(b) P(daughter carrier) = 1/2 of daughters = **50%** ✓

---

### Example 33: Calculating Actual Size from Electron Micrograph
**Q:** An electron micrograph of a bacterium has a magnification of ×15,000. The image measures 4.5 cm in length. Calculate the actual length of the bacterium in micrometres. [2 marks]

**Solution:**
- Actual size = Image size ÷ Magnification ✓
- Convert image to μm: 4.5 cm = 45,000 μm
- Actual size = 45,000 ÷ 15,000
- **Actual size = 3 μm** ✓

---

### Example 34: Oxygen Dissociation Curve Interpretation
**Q:** At a pO₂ of 4 kPa, adult haemoglobin is 60% saturated while fetal haemoglobin is 85% saturated. Explain the biological significance of this difference. [4 marks]

**Solution:**
- Fetal Hb has higher affinity for O₂ than adult Hb at the same pO₂ ✓
- In placenta, pO₂ is relatively low (~4 kPa) ✓
- Fetal Hb can take up O₂ that adult Hb releases ✓
- This ensures efficient O₂ transfer from mother to fetus across placenta ✓

---

### Example 35: Ecological Efficiency Calculation
**Q:** In a food chain:
- Producers contain 40,000 kJ m⁻²
- Primary consumers contain 4,000 kJ m⁻²
- Secondary consumers contain 500 kJ m⁻²
- Tertiary consumers contain 50 kJ m⁻²

Calculate the efficiency of energy transfer at each trophic level. [4 marks]

**Solution:**
- Producers → Primary consumers: (4,000/40,000) × 100 = **10%** ✓
- Primary → Secondary: (500/4,000) × 100 = **12.5%** ✓
- Secondary → Tertiary: (50/500) × 100 = **10%** ✓
- Overall efficiency producers to tertiary: (50/40,000) × 100 = **0.125%** ✓
`;

// ============================================================================
// COMPLETE AQA A-LEVEL BIOLOGY TOPIC CONTENT (ALL 8 TOPICS)
// ============================================================================

const TOPIC_1_BIOLOGICAL_MOLECULES = `
## Topic 1: Biological Molecules

### 1.1 Monomers and Polymers
**Key concepts:**
- Monomers are small molecules that can join together
- Polymers are large molecules made of repeating monomer units
- Condensation reactions: monomers join, releasing water
- Hydrolysis reactions: polymers break down, using water

**Required understanding:**
- Monosaccharides → Polysaccharides
- Amino acids → Polypeptides → Proteins
- Nucleotides → Polynucleotides (DNA/RNA)

### 1.2 Carbohydrates
**Monosaccharides:**
- α-glucose and β-glucose (structural isomers)
- Ring structure with C1 carbon showing α/β configuration
- Pentoses (ribose, deoxyribose) in nucleotides

**Disaccharides:**
| Disaccharide | Monomers | Bond |
|--------------|----------|------|
| Maltose | α-glucose + α-glucose | α-1,4 glycosidic |
| Sucrose | α-glucose + fructose | α-1,2 glycosidic |
| Lactose | β-galactose + α-glucose | β-1,4 glycosidic |

**Polysaccharides:**
| Polysaccharide | Monomer | Structure | Function |
|----------------|---------|-----------|----------|
| Starch (amylose) | α-glucose | Unbranched helix, α-1,4 bonds | Energy storage (plants) |
| Starch (amylopectin) | α-glucose | Branched, α-1,4 and α-1,6 bonds | Energy storage (plants) |
| Glycogen | α-glucose | Highly branched | Energy storage (animals) |
| Cellulose | β-glucose | Straight chains, H-bonds between chains | Structural (plant cell walls) |

### 1.3 Lipids
**Triglycerides:**
- Glycerol + 3 fatty acids via ester bonds
- Saturated: no C=C double bonds, straight chains
- Unsaturated: C=C double bonds present, kinked chains
- Functions: energy storage (9.4 cal/g), insulation, protection

**Phospholipids:**
- Glycerol + 2 fatty acids + phosphate group
- Hydrophilic head, hydrophobic tails
- Form bilayer in cell membranes
- Amphipathic nature

**Cholesterol:**
- Small, hydrophobic molecule
- Regulates membrane fluidity
- Fits between phospholipid tails

### 1.4 Proteins
**Amino acid structure:**
- Central carbon bonded to: amino group (-NH₂), carboxyl group (-COOH), hydrogen, R group
- 20 different R groups = 20 amino acids
- Peptide bonds form between amino and carboxyl groups

**Protein structure levels:**
| Level | Description | Bonds/Interactions |
|-------|-------------|-------------------|
| Primary | Sequence of amino acids | Peptide bonds |
| Secondary | α-helix or β-pleated sheet | Hydrogen bonds |
| Tertiary | 3D folded structure | H-bonds, ionic, disulfide, hydrophobic |
| Quaternary | Multiple polypeptide chains | Same as tertiary |

**Globular vs Fibrous proteins:**
| Feature | Globular | Fibrous |
|---------|----------|---------|
| Shape | Spherical/compact | Long, thin |
| Solubility | Soluble | Insoluble |
| Examples | Enzymes, haemoglobin | Collagen, keratin |
| Function | Metabolic/transport | Structural |

### 1.5 Enzymes
**Enzyme properties:**
- Biological catalysts (lower activation energy)
- Protein structure with specific active site
- Substrate-specific due to complementary shape
- Reusable (not consumed in reaction)

**Induced fit model:**
- Active site changes shape slightly upon substrate binding
- Enzyme moulds around substrate
- Creates enzyme-substrate complex
- Lowers activation energy more effectively

**Factors affecting enzyme activity:**
| Factor | Effect | Explanation |
|--------|--------|-------------|
| Temperature | Increases rate up to optimum, then decreases | Kinetic energy increases, then denaturation |
| pH | Optimum pH varies; deviation reduces activity | Disrupts ionic/hydrogen bonds |
| Substrate concentration | Rate increases, then plateaus at Vmax | All active sites saturated |
| Enzyme concentration | Rate increases (if substrate excess) | More active sites available |

**Enzyme inhibition:**
| Type | Mechanism | Effect on Vmax | Effect on Km |
|------|-----------|----------------|--------------|
| Competitive | Binds to active site | No change | Increases |
| Non-competitive | Binds to allosteric site | Decreases | No change |
| Reversible | Temporary binding | Depends on type | Depends on type |
| Irreversible | Permanent binding | Decreases | N/A |

### 1.6 Nucleic Acids
**DNA structure:**
- Double helix, antiparallel strands
- Sugar-phosphate backbone (deoxyribose)
- Bases: Adenine-Thymine (2 H-bonds), Cytosine-Guanine (3 H-bonds)
- 5' to 3' direction

**RNA structure:**
- Usually single-stranded
- Ribose sugar
- Uracil instead of thymine
- Types: mRNA, tRNA, rRNA

**ATP structure and function:**
- Adenine + ribose + 3 phosphate groups
- Energy released when terminal phosphate hydrolysed
- Immediate energy source for cells
- Regenerated in respiration

### 1.7 Water
**Properties important for life:**
| Property | Due to | Biological importance |
|----------|--------|----------------------|
| High specific heat capacity | Hydrogen bonds | Temperature stability |
| High latent heat of vaporisation | Hydrogen bonds | Cooling by evaporation |
| Cohesion | Hydrogen bonds | Water transport in xylem |
| Solvent properties | Polarity | Metabolic reactions |
| Maximum density at 4°C | H-bond arrangement | Ice floats, insulates water below |

### 1.8 Inorganic Ions
| Ion | Role |
|-----|------|
| Iron (Fe²⁺/Fe³⁺) | Haemoglobin (O₂ binding), electron carriers |
| Hydrogen (H⁺) | pH, chemiosmosis, muscle contraction |
| Phosphate (PO₄³⁻) | ATP, nucleotides, phospholipids |
| Calcium (Ca²⁺) | Muscle contraction, blood clotting, cell signalling |
`;

const TOPIC_2_CELLS = `
## Topic 2: Cells

### 2.1 Cell Structure
**Eukaryotic cell organelles:**
| Organelle | Structure | Function |
|-----------|-----------|----------|
| Nucleus | Double membrane, nuclear pores, nucleolus | Contains DNA, controls cell activities |
| Rough ER | Membrane system with ribosomes | Protein synthesis and transport |
| Smooth ER | Membrane system, no ribosomes | Lipid synthesis, detoxification |
| Golgi apparatus | Stack of flattened membranes | Modifies, packages, secretes proteins |
| Mitochondria | Double membrane, cristae, matrix | ATP production (respiration) |
| Chloroplast | Double membrane, thylakoids, stroma | Photosynthesis |
| Ribosome | Two subunits (large and small) | Protein synthesis |
| Lysosome | Single membrane, contains enzymes | Intracellular digestion |
| Centriole | 9+0 arrangement of microtubules | Spindle formation in cell division |

**Prokaryotic cells:**
- No membrane-bound organelles
- Circular DNA (nucleoid), plasmids
- 70S ribosomes (smaller than 80S in eukaryotes)
- Cell wall (peptidoglycan)
- May have: flagella, pili, capsule, mesosomes

**Viruses:**
- Non-cellular, acellular
- DNA or RNA core, protein coat (capsid)
- Some have envelope from host membrane
- Obligate intracellular parasites

### 2.2 Cell Membranes
**Fluid mosaic model:**
- Phospholipid bilayer (fluid)
- Proteins embedded (mosaic) - integral and peripheral
- Cholesterol for fluidity regulation
- Glycoproteins and glycolipids for cell recognition

**Membrane proteins:**
| Type | Function |
|------|----------|
| Channel proteins | Passive transport of ions |
| Carrier proteins | Facilitated diffusion, active transport |
| Receptor proteins | Cell signalling, hormone reception |
| Enzymes | Catalysis at membrane surface |
| Glycoproteins | Cell recognition, immune response |

**Factors affecting membrane permeability:**
- Temperature: increased = more fluid, more permeable
- Solvents (e.g., alcohol): dissolve phospholipids
- pH: affects protein structure

### 2.3 Transport Across Membranes
**Passive transport (no ATP):**
| Mechanism | Description | Examples |
|-----------|-------------|----------|
| Simple diffusion | Down concentration gradient through bilayer | O₂, CO₂, small lipid-soluble molecules |
| Facilitated diffusion | Down gradient via channel/carrier proteins | Glucose, ions, amino acids |
| Osmosis | Water movement from high to low water potential | Water across all cell membranes |

**Active transport (uses ATP):**
| Mechanism | Description | Examples |
|-----------|-------------|----------|
| Primary active transport | ATP directly powers carrier protein | Na⁺/K⁺ pump |
| Co-transport | Uses gradient from primary transport | Na⁺-glucose co-transport |
| Endocytosis | Cell engulfs material | Phagocytosis, pinocytosis |
| Exocytosis | Vesicle fuses with membrane | Hormone secretion |

**Water potential calculations:**
- Ψ = Ψs + Ψp (water potential = solute potential + pressure potential)
- Pure water Ψ = 0 kPa (maximum)
- Solutions have negative Ψs
- Water moves from less negative to more negative Ψ

### 2.4 Cell Recognition and the Immune System
**Non-specific defences:**
- Physical barriers: skin, mucous membranes
- Chemical barriers: lysozyme, stomach acid
- Phagocytosis: neutrophils, macrophages
- Inflammation: increased blood flow, permeability

**Specific immune response:**
**Humoral immunity (B-cells):**
- B-cells recognise specific antigens
- Clonal selection and expansion
- Differentiate into plasma cells (antibody production)
- Memory cells for secondary response

**Antibody structure:**
- Y-shaped protein (immunoglobulin)
- 2 heavy chains, 2 light chains
- Variable regions (antigen binding sites)
- Constant regions (effector functions)
- Hinge region for flexibility

**Antibody functions:**
- Agglutination (clumping pathogens)
- Neutralisation (blocking toxins/viruses)
- Opsonisation (marking for phagocytosis)
- Complement activation

**Cell-mediated immunity (T-cells):**
| T-cell type | Function |
|-------------|----------|
| Helper T-cells (CD4) | Release cytokines, activate B-cells |
| Cytotoxic T-cells (CD8) | Kill infected/cancer cells |
| Regulatory T-cells | Control immune response |
| Memory T-cells | Long-term immunity |

**HIV and immune system:**
- HIV infects helper T-cells (CD4+)
- Reduces ability to activate immune response
- Leads to AIDS (opportunistic infections)
- Reverse transcriptase, integrase, protease as drug targets

### 2.5 Monoclonal Antibodies
**Production:**
1. Inject antigen into mouse
2. Extract B-cells from spleen
3. Fuse with myeloma cells → hybridoma
4. Select and culture hybridoma
5. Harvest monoclonal antibodies

**Applications:**
| Application | How it works |
|-------------|--------------|
| Pregnancy tests | Detect hCG hormone |
| ELISA | Detect specific proteins |
| Cancer treatment | Target cancer cell antigens |
| Diagnosis | Identify specific pathogens |
| Research | Label specific molecules |

### 2.6 The Cell Cycle
**Interphase:**
| Stage | Events |
|-------|--------|
| G₁ | Cell growth, organelle replication |
| S | DNA replication |
| G₂ | Continued growth, preparation for division |

**Mitosis stages:**
1. **Prophase:** Chromosomes condense, nuclear envelope breaks down
2. **Metaphase:** Chromosomes align at equator
3. **Anaphase:** Chromatids separate, move to poles
4. **Telophase:** Nuclear envelope reforms, chromosomes decondense

**Cytokinesis:** Division of cytoplasm
- Animal cells: cleavage furrow
- Plant cells: cell plate formation

**Cancer:**
- Loss of control of cell cycle
- Proto-oncogenes → oncogenes (promote division)
- Tumour suppressor genes inactivated
- Metastasis: spread to other tissues
`;

const TOPIC_3_EXCHANGE = `
## Topic 3: Organisms Exchange Substances with Their Environment

### 3.1 Surface Area to Volume Ratio
**Principle:**
- SA:V ratio decreases as organisms get larger
- Exchange surfaces must be large enough for metabolic demands
- Large organisms need specialised exchange surfaces

**Adaptations of exchange surfaces:**
| Adaptation | Effect |
|------------|--------|
| Large surface area | Increases rate of exchange |
| Thin surface | Short diffusion distance |
| Good blood/air supply | Maintains concentration gradient |
| Ventilation | Maintains concentration gradient |

### 3.2 Gas Exchange Systems

**Gas exchange in fish (gills):**
- Gill filaments with lamellae (large SA)
- Thin epithelium (short diffusion distance)
- Rich blood supply
- **Counter-current flow:** Blood flows opposite to water
  - Maintains concentration gradient along entire length
  - More efficient than parallel flow (~80% O₂ extraction)

**Gas exchange in insects (tracheae):**
- Spiracles: openings on body surface
- Tracheae: tubes carrying air
- Tracheoles: fine endings reaching cells
- Direct gas exchange with tissues
- Ventilation by body movements

**Gas exchange in leaves:**
- Stomata: allow CO₂ in, O₂ out
- Guard cells control stomatal opening
- Spongy mesophyll: air spaces for gas diffusion
- Large internal surface area
- Thin cell walls

**Human gas exchange system:**
| Structure | Function |
|-----------|----------|
| Trachea | Carries air, supported by cartilage |
| Bronchi | Branch into lungs |
| Bronchioles | Fine airways to alveoli |
| Alveoli | Gas exchange surface |

**Alveolar adaptations:**
- Large total surface area (~70 m²)
- Very thin walls (one cell thick)
- Rich capillary network
- Ventilation maintains gradient
- Surfactant reduces surface tension

### 3.3 Digestion and Absorption

**Enzyme specificity:**
| Enzyme | Substrate | Product | Site |
|--------|-----------|---------|------|
| Amylase | Starch | Maltose | Mouth, duodenum |
| Maltase | Maltose | Glucose | Small intestine |
| Lipase | Triglycerides | Fatty acids + glycerol | Small intestine |
| Pepsin | Proteins | Polypeptides | Stomach |
| Trypsin | Polypeptides | Smaller peptides | Small intestine |

**Bile function:**
- Emulsifies lipids (increases surface area)
- Neutralises stomach acid
- Not an enzyme (no active site)

**Absorption in small intestine:**
- Villi and microvilli increase surface area
- Single epithelial cell layer
- Rich blood supply (capillary network)
- Lacteal for fat absorption

**Absorption mechanisms:**
| Nutrient | Mechanism |
|----------|-----------|
| Glucose | Co-transport with Na⁺ |
| Amino acids | Co-transport with Na⁺ |
| Fatty acids/glycerol | Diffusion, reform triglycerides |
| Water | Osmosis |

### 3.4 Mass Transport in Animals

**Circulatory systems:**
| Type | Features | Examples |
|------|----------|----------|
| Open | Haemolymph in sinuses, no vessels | Insects |
| Single closed | One circuit, 2-chambered heart | Fish |
| Double closed | Two circuits, 4-chambered heart | Mammals |

**Double circulation advantages:**
- Higher blood pressure to body
- Oxygenated and deoxygenated blood separate
- More efficient O₂ delivery

**Heart structure and function:**
- Atria: receive blood
- Ventricles: pump blood
- Atrioventricular valves: prevent backflow
- Semilunar valves: prevent backflow from arteries

**Cardiac cycle:**
| Phase | Atria | Ventricles | Valves |
|-------|-------|------------|--------|
| Atrial systole | Contract | Relax | AV open |
| Ventricular systole | Relax | Contract | SL open |
| Diastole | Relax | Relax | All closed |

**Cardiac output = Stroke volume × Heart rate**

**Blood vessels:**
| Vessel | Structure | Function |
|--------|-----------|----------|
| Artery | Thick muscular wall, elastic | Carry blood from heart |
| Arteriole | Smooth muscle | Control blood distribution |
| Capillary | One cell thick | Exchange with tissues |
| Venule | Thin walls | Collect blood from capillaries |
| Vein | Thin walls, valves | Return blood to heart |

**Haemoglobin and oxygen transport:**
- Haemoglobin: quaternary protein, 4 polypeptides
- Each subunit has haem group with Fe²⁺
- Cooperative binding (sigmoidal curve)
- **Oxygen dissociation curve:** Shows % saturation vs partial pressure O₂

**Bohr effect:**
- Increased CO₂/H⁺ shifts curve right
- Haemoglobin releases O₂ more readily
- Adaptation for active tissues

**Fetal haemoglobin:**
- Higher affinity than adult haemoglobin
- Curve shifted left
- Can take O₂ from maternal blood

### 3.5 Mass Transport in Plants

**Xylem structure:**
- Dead cells (no cytoplasm)
- Lignified walls (waterproof, support)
- No end walls (continuous tubes)
- Pits for lateral movement

**Transpiration stream:**
Water pathway: Soil → Root hair → Cortex → Endodermis → Xylem → Stem → Leaf → Atmosphere

**Water movement mechanisms:**
| Mechanism | Description |
|-----------|-------------|
| Cohesion | H-bonds between water molecules |
| Tension | Pull from evaporation at leaves |
| Adhesion | Water sticks to xylem walls |
| Root pressure | Active transport in roots |

**Cohesion-tension theory:**
1. Evaporation from mesophyll cells
2. Creates tension in leaf xylem
3. Cohesion pulls water column up
4. Continuous water column from roots to leaves

**Factors affecting transpiration:**
| Factor | Effect |
|--------|--------|
| Temperature | Increase → more evaporation |
| Humidity | Decrease → steeper gradient |
| Wind | Increase → removes humid air |
| Light | Increase → stomata open |

**Stomatal control:**
- Guard cells: bean-shaped, thickened inner wall
- Potassium ions pumped in → water enters → cells turgid → stomata open
- At night: K⁺ leaves → water leaves → flaccid → stomata close

**Phloem structure:**
- Living cells (sieve tube elements)
- Companion cells (ATP production)
- Sieve plates (allow flow)

**Translocation:**
- Movement of organic solutes (mainly sucrose)
- Source to sink
- Pressure flow (mass flow) hypothesis
- Active loading of sucrose at source

**Evidence for pressure flow:**
- Aphid stylet experiments
- Radioactive tracers
- Ringing experiments
`;

const TOPIC_4_GENETICS = `
## Topic 4: Genetic Information, Variation and Relationships Between Organisms

### 4.1 DNA, Genes and Chromosomes
**Genome:** Complete set of genes in an organism
**Gene:** Section of DNA coding for a polypeptide
**Locus:** Position of a gene on a chromosome
**Allele:** Different versions of a gene

**DNA structure:**
- Nucleotides: phosphate + deoxyribose + base
- Bases: A-T (2 H-bonds), C-G (3 H-bonds)
- Antiparallel strands (5' to 3')
- Double helix

**Genes and genomes:**
- Coding sequences (exons)
- Non-coding sequences (introns, regulatory regions)
- Much of eukaryotic DNA is non-coding
- Genes can overlap, alternative splicing

### 4.2 DNA Replication
**Semi-conservative replication:**
1. DNA helicase unwinds double helix
2. Hydrogen bonds break between bases
3. Each strand acts as template
4. DNA polymerase adds complementary nucleotides
5. Phosphodiester bonds form (condensation)
6. Two identical DNA molecules formed

**Features:**
- 5' to 3' direction only
- Leading strand: continuous synthesis
- Lagging strand: Okazaki fragments
- DNA ligase joins fragments
- High fidelity (proofreading)

**Evidence (Meselson-Stahl experiment):**
- Heavy nitrogen (¹⁵N) labelling
- Density gradient centrifugation
- Intermediate band after one generation
- Proved semi-conservative model

### 4.3 Protein Synthesis

**Transcription:**
1. RNA polymerase binds to promoter region
2. DNA unwinds locally
3. RNA polymerase synthesises mRNA (5' to 3')
4. Complementary base pairing (A-U, C-G)
5. Pre-mRNA formed in nucleus (eukaryotes)

**Post-transcriptional modification:**
- 5' cap added
- Poly-A tail added
- Introns spliced out
- Exons joined (alternative splicing possible)
- Mature mRNA exits nucleus

**Translation:**
1. mRNA binds to ribosome
2. Start codon (AUG) recognised
3. tRNA brings amino acid (anticodon-codon pairing)
4. Peptide bond forms
5. Ribosome moves along mRNA
6. Stop codon reached → release

**Genetic code features:**
- Triplet (3 bases = 1 codon)
- Degenerate (multiple codons for one amino acid)
- Non-overlapping
- Universal (same in most organisms)

### 4.4 Mutations
**Types of gene mutation:**
| Type | Description | Effect |
|------|-------------|--------|
| Substitution | One base replaced | May be silent, missense, or nonsense |
| Insertion | Extra base(s) added | Frameshift (major effect) |
| Deletion | Base(s) removed | Frameshift (major effect) |

**Effects of mutations:**
- Silent: No amino acid change (degenerate code)
- Missense: Different amino acid
- Nonsense: Stop codon created (truncated protein)
- Frameshift: Alters all codons downstream

**Chromosome mutations:**
- Aneuploidy (e.g., Down syndrome - trisomy 21)
- Translocation
- Deletion
- Duplication
- Inversion

### 4.5 Meiosis
**Purpose:**
- Produces haploid gametes
- Introduces genetic variation
- Two divisions (meiosis I and II)

**Sources of genetic variation:**
| Source | When | Mechanism |
|--------|------|-----------|
| Crossing over | Prophase I | Exchange of alleles between homologous chromosomes |
| Independent assortment | Metaphase I | Random orientation of bivalents |
| Random fertilisation | Fertilisation | Any sperm can fertilise any egg |

**Crossing over:**
- Homologous chromosomes pair (bivalents)
- Non-sister chromatids exchange segments
- Recombinant chromosomes produced
- Chiasmata visible

### 4.6 Genetic Diversity
**Genetic bottleneck:**
- Dramatic reduction in population size
- Reduces allele frequencies
- Reduces genetic diversity
- Example: Cheetah population

**Founder effect:**
- Small group colonises new area
- Limited gene pool
- Different allele frequencies from source

**Selective breeding:**
- Humans select organisms with desired traits
- Breed together over generations
- Reduces genetic diversity
- May cause health problems

### 4.7 Species and Taxonomy

**Species definition:**
- Group of similar organisms
- Can interbreed to produce fertile offspring
- Reproductively isolated from other groups

**Problems with species concept:**
- Asexual organisms
- Hybridisation
- Ring species
- Extinct organisms (only fossils)

**Classification hierarchy:**
Domain → Kingdom → Phylum → Class → Order → Family → Genus → Species

**Phylogeny:**
- Evolutionary relationships
- Based on shared characteristics
- DNA/protein sequence comparisons
- Molecular clocks

**Three domains:**
| Domain | Cell type | Examples |
|--------|-----------|----------|
| Bacteria | Prokaryotic | E. coli |
| Archaea | Prokaryotic | Methanogens |
| Eukarya | Eukaryotic | Animals, plants, fungi |

### 4.8 Biodiversity
**Biodiversity levels:**
- Species diversity (number and evenness)
- Genetic diversity (within species)
- Ecosystem diversity (habitat variety)

**Measuring diversity:**
Simpson's Index: D = 1 - Σ(n/N)²
- D ranges from 0 to 1
- Higher D = more diverse
- Accounts for richness and evenness
`;

const TOPIC_5_ENERGY = `
## Topic 5: Energy Transfers in and Between Organisms

### 5.1 Photosynthesis Overview
**Equation:**
6CO₂ + 6H₂O → C₆H₁₂O₆ + 6O₂ (with light energy)

**Two stages:**
1. Light-dependent reactions (thylakoid membranes)
2. Light-independent reactions/Calvin cycle (stroma)

### 5.2 Light-Dependent Reactions
**Location:** Thylakoid membranes of chloroplasts

**Process:**
1. Light absorbed by photosystems (I and II)
2. Electrons excited, pass along electron transport chain
3. Protons pumped into thylakoid space
4. Chemiosmosis: protons flow through ATP synthase → ATP
5. NADP reduced to NADPH (at PSI)
6. Photolysis of water replaces electrons in PSII

**Products:**
- ATP (from chemiosmosis)
- NADPH (reduced coenzyme)
- O₂ (from photolysis of water)

**Cyclic vs non-cyclic photophosphorylation:**
| Feature | Cyclic | Non-cyclic |
|---------|--------|------------|
| Photosystems | PSI only | Both PSI and PSII |
| Products | ATP only | ATP, NADPH, O₂ |
| Electrons | Return to PSI | Pass to NADP⁺ |

### 5.3 Light-Independent Reactions (Calvin Cycle)
**Location:** Stroma of chloroplasts

**Process:**
1. **Carbon fixation:** CO₂ combines with RuBP (5C) → 2× GP (3C)
   - Catalysed by RuBisCO
2. **Reduction:** GP reduced to TP (triose phosphate)
   - Uses ATP and NADPH from light reactions
3. **Regeneration:** Some TP regenerates RuBP
   - Requires ATP

**For every 3 CO₂ fixed:**
- 6 GP produced
- 6 TP produced
- 5 TP regenerate RuBP
- 1 TP used for glucose synthesis

**Limiting factors:**
| Factor | Effect when limiting |
|--------|---------------------|
| Light intensity | Reduced ATP/NADPH production |
| CO₂ concentration | Reduced carbon fixation |
| Temperature | Enzyme rate affected |

### 5.4 Respiration Overview
**Equation:**
C₆H₁₂O₆ + 6O₂ → 6CO₂ + 6H₂O (+ ATP)

**Four stages:**
1. Glycolysis (cytoplasm)
2. Link reaction (mitochondrial matrix)
3. Krebs cycle (mitochondrial matrix)
4. Oxidative phosphorylation (inner mitochondrial membrane)

### 5.5 Glycolysis
**Location:** Cytoplasm

**Process:**
1. Phosphorylation: Glucose → Glucose 6-phosphate (uses ATP)
2. Further phosphorylation and splitting
3. Hexose bisphosphate → 2× Triose phosphate
4. Oxidation and ATP production
5. 2× Pyruvate (3C) produced

**Net yield per glucose:**
- 2 ATP (4 made, 2 used)
- 2 NADH

### 5.6 Link Reaction
**Location:** Mitochondrial matrix

**Process:**
1. Pyruvate enters mitochondria
2. Decarboxylation (CO₂ released)
3. Dehydrogenation (hydrogen to NAD → NADH)
4. Acetyl CoA formed (2C)

**Per glucose:** 2 NADH, 2 CO₂

### 5.7 Krebs Cycle
**Location:** Mitochondrial matrix

**Process per acetyl CoA:**
1. Acetyl CoA (2C) + Oxaloacetate (4C) → Citrate (6C)
2. Decarboxylation × 2 (2 CO₂)
3. Dehydrogenation (3 NADH, 1 FADH₂)
4. Substrate-level phosphorylation (1 ATP)
5. Oxaloacetate regenerated

**Per glucose (2 turns):**
- 6 NADH, 2 FADH₂
- 2 ATP
- 4 CO₂

### 5.8 Oxidative Phosphorylation
**Location:** Inner mitochondrial membrane

**Process:**
1. NADH/FADH₂ donate electrons to electron transport chain
2. Energy released as electrons pass along carriers
3. Energy used to pump H⁺ into intermembrane space
4. H⁺ flow through ATP synthase (chemiosmosis)
5. ATP produced
6. Electrons and H⁺ accepted by O₂ → H₂O

**ATP yield:**
- 2.5 ATP per NADH
- 1.5 ATP per FADH₂

**Total ATP per glucose:** Approximately 30-32 ATP

### 5.9 Anaerobic Respiration
**In absence of oxygen:**

**In animals (lactate fermentation):**
- Pyruvate + NADH → Lactate + NAD⁺
- Regenerates NAD for glycolysis
- Reversible (lactate → pyruvate in liver)

**In plants and yeast (alcoholic fermentation):**
- Pyruvate → Ethanal + CO₂
- Ethanal + NADH → Ethanol + NAD⁺
- Irreversible

**Energy yield:** Only 2 ATP per glucose

### 5.10 Respiratory Quotient
**RQ = CO₂ produced ÷ O₂ consumed**

| Substrate | RQ | Interpretation |
|-----------|-----|----------------|
| Carbohydrate | 1.0 | Equal CO₂ and O₂ |
| Lipid | 0.7 | Less CO₂ than O₂ |
| Protein | 0.9 | Intermediate |
| Anaerobic | >1.0 | CO₂ without O₂ use |

### 5.11 Energy Transfer Through Ecosystems

**Productivity:**
| Term | Definition | Formula |
|------|------------|---------|
| GPP | Total energy fixed by producers | - |
| NPP | Energy available to consumers | GPP - R |
| Net production (consumers) | Energy for growth/reproduction | I - (F + R) |

**Energy transfer efficiency:**
- Typically 10% between trophic levels
- Lost as: respiration, uneaten material, egested material

**Why food chains are short:**
- Energy lost at each transfer
- Insufficient energy for higher trophic levels
- Rarely more than 4-5 levels

### 5.12 Nutrient Cycles

**Nitrogen cycle:**
| Process | Description | Organisms |
|---------|-------------|-----------|
| Nitrogen fixation | N₂ → NH₄⁺ | Rhizobium, Azotobacter |
| Nitrification | NH₄⁺ → NO₂⁻ → NO₃⁻ | Nitrosomonas, Nitrobacter |
| Denitrification | NO₃⁻ → N₂ | Denitrifying bacteria |
| Ammonification | Organic N → NH₄⁺ | Decomposers |

**Phosphorus cycle:**
- No atmospheric component
- Rock weathering releases phosphate
- Absorbed by plants, passed through food chain
- Returned by decomposition
`;

const TOPIC_6_RESPONSES = `
## Topic 6: Organisms Respond to Changes in Their Internal and External Environments

### 6.1 Nervous System

**Neurone structure:**
| Part | Function |
|------|----------|
| Cell body | Contains nucleus, organelles |
| Dendrites | Receive signals |
| Axon | Conducts action potential |
| Myelin sheath | Insulates, speeds conduction |
| Nodes of Ranvier | Gaps in myelin |
| Axon terminal | Releases neurotransmitter |

**Types of neurone:**
- Sensory: receptor → CNS
- Motor: CNS → effector
- Relay: Within CNS

### 6.2 Resting and Action Potentials

**Resting potential (-70 mV):**
- Na⁺/K⁺ pump: 3 Na⁺ out, 2 K⁺ in
- K⁺ leak channels open
- Inside negative relative to outside
- Maintained by pump using ATP

**Action potential:**
| Stage | Events | Voltage |
|-------|--------|---------|
| Resting | Pump maintains gradient | -70 mV |
| Depolarisation | Na⁺ channels open, Na⁺ enters | -70 to +40 mV |
| Repolarisation | Na⁺ channels close, K⁺ channels open | +40 to -70 mV |
| Hyperpolarisation | K⁺ continues leaving | Below -70 mV |
| Refractory period | Pump restores gradient | Returns to -70 mV |

**Properties of action potentials:**
- All-or-nothing response
- Same size regardless of stimulus intensity
- Intensity coded by frequency
- Refractory period ensures unidirectional propagation

**Factors affecting speed:**
| Factor | Effect |
|--------|--------|
| Myelination | Saltatory conduction (faster) |
| Axon diameter | Larger = faster |
| Temperature | Higher = faster (up to limit) |

### 6.3 Synaptic Transmission

**Structure:**
- Presynaptic membrane (synaptic knob)
- Synaptic cleft (gap)
- Postsynaptic membrane (receptors)
- Vesicles containing neurotransmitter

**Process:**
1. Action potential arrives at synaptic knob
2. Ca²⁺ channels open, Ca²⁺ enters
3. Vesicles fuse with presynaptic membrane
4. Neurotransmitter released (exocytosis)
5. Diffuses across cleft
6. Binds to receptors on postsynaptic membrane
7. Ion channels open (Na⁺ for excitatory)
8. Postsynaptic potential generated

**Summation:**
| Type | Description |
|------|-------------|
| Temporal | Multiple signals from same neurone |
| Spatial | Signals from multiple neurones |

**Removal of neurotransmitter:**
- Enzyme breakdown (e.g., acetylcholinesterase)
- Reuptake into presynaptic neurone
- Diffusion away from synapse

### 6.4 Receptors
**Pacinian corpuscle:**
- Pressure receptor in skin
- Lamellae (layers) around sensory neurone
- Pressure deforms membrane
- Stretch-mediated sodium channels open
- Generator potential → action potential

**Rods and cones:**
| Feature | Rods | Cones |
|---------|------|-------|
| Sensitivity | High (dim light) | Low (bright light) |
| Colour vision | No | Yes (3 types) |
| Distribution | Peripheral retina | Fovea (concentrated) |
| Convergence | High (many to one) | Low (1 to 1) |
| Acuity | Low | High |

### 6.5 Muscle Contraction

**Muscle structure:**
Muscle → Muscle fibres → Myofibrils → Sarcomeres

**Sarcomere structure:**
- A band: thick (myosin) filaments
- I band: thin (actin) filaments only
- H zone: myosin only
- Z line: sarcomere boundary
- M line: centre of sarcomere

**Sliding filament theory:**
1. Ca²⁺ released from sarcoplasmic reticulum
2. Ca²⁺ binds to troponin
3. Tropomyosin moves, exposing binding sites on actin
4. Myosin head binds to actin (cross-bridge)
5. Power stroke: myosin head pivots, sliding actin
6. ATP binds, releasing myosin head
7. ATP hydrolysed, myosin re-cocks
8. Cycle repeats while Ca²⁺ present

**Changes during contraction:**
| Structure | Change |
|-----------|--------|
| Sarcomere | Shortens |
| I band | Shortens |
| H zone | Shortens/disappears |
| A band | No change |

**Types of muscle fibre:**
| Feature | Slow-twitch | Fast-twitch |
|---------|-------------|-------------|
| Contraction speed | Slow | Fast |
| Fatigue resistance | High | Low |
| Myoglobin | High | Low |
| Mitochondria | Many | Few |
| Respiration | Aerobic | Anaerobic |
| Function | Endurance | Sprinting |

### 6.6 Homeostasis

**Principles:**
- Maintaining constant internal environment
- Negative feedback loops
- Receptor → Control centre → Effector

**Blood glucose control:**
| Condition | Hormone | Source | Effect |
|-----------|---------|--------|--------|
| High glucose | Insulin | β-cells | Glucose uptake, glycogenesis |
| Low glucose | Glucagon | α-cells | Glycogenolysis, gluconeogenesis |

**Type 1 vs Type 2 diabetes:**
| Feature | Type 1 | Type 2 |
|---------|--------|--------|
| Cause | Autoimmune destruction of β-cells | Insulin resistance |
| Onset | Usually young | Usually older |
| Insulin | Not produced | Produced but ineffective |
| Treatment | Insulin injections | Diet, exercise, medication |

### 6.7 Kidney Function

**Nephron structure and function:**
| Region | Process |
|--------|---------|
| Glomerulus | Ultrafiltration |
| Bowman's capsule | Collects filtrate |
| PCT | Selective reabsorption (85%) |
| Loop of Henle | Creates medulla gradient |
| DCT | Fine-tuning, hormone-controlled |
| Collecting duct | Water reabsorption (ADH-controlled) |

**Ultrafiltration:**
- High pressure in glomerulus
- Fenestrated capillaries
- Basement membrane
- Podocytes with filtration slits
- Small molecules filtered, proteins retained

**Selective reabsorption (PCT):**
- Microvilli increase surface area
- Many mitochondria for active transport
- Co-transport of glucose/amino acids with Na⁺

**Water reabsorption control (ADH):**
| Condition | ADH | Effect |
|-----------|-----|--------|
| Dehydrated | High | More water reabsorbed, concentrated urine |
| Hydrated | Low | Less water reabsorbed, dilute urine |

**Loop of Henle (countercurrent multiplier):**
- Descending limb: permeable to water, not ions
- Ascending limb: active Na⁺ transport out, impermeable to water
- Creates concentration gradient in medulla
- Enables concentrated urine production

### 6.8 Plant Responses

**Tropisms:**
| Tropism | Stimulus | Direction |
|---------|----------|-----------|
| Phototropism | Light | Towards (shoots) |
| Geotropism | Gravity | Towards (roots) |
| Thigmotropism | Touch | Around (tendrils) |

**Auxin (IAA):**
- Produced in shoot tips
- Moves by polar transport
- Causes cell elongation
- Phototropism: accumulates on shaded side → more growth → bends towards light

**Gibberellins:**
- Promote stem elongation
- Break seed dormancy
- Involved in flowering
- Amylase production in germinating seeds

**Other hormones:**
| Hormone | Functions |
|---------|-----------|
| Cytokinins | Cell division, delay senescence |
| Abscisic acid | Stomatal closure, dormancy |
| Ethene | Fruit ripening, abscission |
`;

const TOPIC_7_GENETICS_POPULATIONS = `
## Topic 7: Genetics, Populations, Evolution and Ecosystems

### 7.1 Inheritance

**Monohybrid inheritance:**
- One gene, two alleles
- Dominant and recessive
- 3:1 phenotype ratio in F2 (heterozygous cross)

**Dihybrid inheritance:**
- Two genes, independent assortment
- 9:3:3:1 ratio in F2 (both heterozygous)

**Codominance:**
- Both alleles expressed in heterozygote
- Example: Blood group (I^A I^B)
- Neither allele dominant

**Multiple alleles:**
- More than two alleles in population
- Individual still has only two
- Example: ABO blood groups (I^A, I^B, i)

**Sex linkage:**
- Genes on X chromosome
- Males hemizygous (XY)
- Affected males more common
- Carrier females (heterozygous)
- Examples: Haemophilia, colour blindness

**Autosomal linkage:**
- Genes on same chromosome
- Inherited together (linked)
- Crossing over produces recombinants
- Recombination frequency = distance apart

### 7.2 Epistasis

**Definition:** One gene affects expression of another

**Types:**
| Type | Ratio | Description |
|------|-------|-------------|
| Recessive epistasis | 9:3:4 | Homozygous recessive masks other gene |
| Dominant epistasis | 12:3:1 | Dominant allele masks other gene |
| Complementary | 9:7 | Both dominant needed for phenotype |
| Duplicate recessive | 15:1 | Either dominant produces phenotype |

### 7.3 Chi-Squared Test

**Purpose:** Test if observed results differ significantly from expected

**Formula:** χ² = Σ[(O - E)²/E]

**Procedure:**
1. State null hypothesis (no significant difference)
2. Calculate expected values
3. Calculate χ² value
4. Determine degrees of freedom (n - 1)
5. Compare to critical value (p = 0.05)
6. If χ² > critical value, reject null hypothesis

### 7.4 Hardy-Weinberg Principle

**Conditions (equilibrium):**
- Large population
- Random mating
- No selection
- No mutation
- No migration

**Equations:**
- p + q = 1 (allele frequencies)
- p² + 2pq + q² = 1 (genotype frequencies)

**Using the equations:**
1. Identify homozygous recessive frequency (q²)
2. Calculate q = √(q²)
3. Calculate p = 1 - q
4. Calculate other genotypes

### 7.5 Speciation

**Allopatric speciation:**
1. Geographic isolation
2. Different selection pressures
3. Genetic drift
4. Accumulation of genetic differences
5. Reproductive isolation

**Sympatric speciation:**
- Occurs without geographic isolation
- Polyploidy (especially in plants)
- Ecological isolation
- Behavioural isolation

**Reproductive isolation mechanisms:**
| Type | Description |
|------|-------------|
| Temporal | Different breeding times |
| Behavioural | Different courtship |
| Mechanical | Reproductive organs incompatible |
| Gametic | Gametes incompatible |
| Hybrid inviability | Hybrid offspring don't survive |
| Hybrid sterility | Hybrid offspring infertile |

### 7.6 Evolution and Selection

**Natural selection:**
1. Variation exists in population
2. Overproduction of offspring
3. Competition for resources
4. Survival of fittest
5. Reproduction of survivors
6. Inheritance of beneficial alleles

**Types of selection:**
| Type | Effect on distribution |
|------|----------------------|
| Stabilising | Extremes selected against |
| Directional | One extreme favoured |
| Disruptive | Both extremes favoured |

**Genetic drift:**
- Random changes in allele frequency
- Greater effect in small populations
- Can lead to fixation or loss of alleles

### 7.7 Populations and Communities

**Population dynamics:**
- Birth rate
- Death rate
- Immigration
- Emigration

**Population growth curves:**
- Exponential: unlimited resources
- Logistic: carrying capacity reached
- Lag phase, log phase, stationary phase

**Interspecific relationships:**
| Relationship | Effect on A | Effect on B |
|--------------|-------------|-------------|
| Competition | - | - |
| Predation | + | - |
| Parasitism | + | - |
| Mutualism | + | + |
| Commensalism | + | 0 |

### 7.8 Succession

**Primary succession:**
- Colonisation of bare substrate
- Pioneer species first
- Gradual community development
- Climax community reached

**Secondary succession:**
- Following disturbance
- Soil already present
- Faster than primary

**Changes during succession:**
| Feature | Early | Late |
|---------|-------|------|
| Biodiversity | Low | High |
| Biomass | Low | High |
| Nutrient cycling | Simple | Complex |
| Stability | Low | High |
| Food webs | Simple | Complex |

### 7.9 Conservation

**Reasons for conservation:**
- Ethical (intrinsic value)
- Ecological (ecosystem services)
- Economic (resources, tourism)
- Aesthetic (natural beauty)

**Conservation methods:**
| Method | Description |
|--------|-------------|
| Protected areas | National parks, reserves |
| Legislation | Endangered species acts |
| Seed banks | Ex situ conservation |
| Captive breeding | Increase population |
| Reintroduction | Return to wild |
| Habitat management | Maintain suitable conditions |
`;

const TOPIC_8_GENE_EXPRESSION = `
## Topic 8: The Control of Gene Expression

### 8.1 Gene Regulation in Prokaryotes

**Lac operon (E. coli):**
Components:
- Structural genes (lacZ, lacY, lacA)
- Operator
- Promoter
- Regulatory gene (lacI) encoding repressor

**Regulation:**
| Condition | Repressor | Genes |
|-----------|-----------|-------|
| Lactose absent | Bound to operator | Off |
| Lactose present | Lactose binds repressor, releases from operator | On |

### 8.2 Gene Regulation in Eukaryotes

**Levels of control:**
1. Chromatin remodelling (acetylation, methylation)
2. Transcriptional control (transcription factors)
3. Post-transcriptional (alternative splicing, mRNA editing)
4. Translational control
5. Post-translational (protein modification)

**Transcription factors:**
- Bind to DNA regulatory sequences
- Enhancers and silencers
- Activators and repressors
- Tissue-specific expression

**Epigenetics:**
- Heritable changes without DNA sequence change
- DNA methylation (usually silencing)
- Histone modification
- Affected by environment
- Can be inherited

### 8.3 Recombinant DNA Technology

**Restriction enzymes:**
- Cut DNA at specific sequences
- Produce sticky ends (overhanging) or blunt ends
- Same enzyme produces complementary ends

**DNA ligase:**
- Joins DNA fragments
- Phosphodiester bonds form
- Used to insert genes into vectors

**Vectors:**
| Type | Description |
|------|-------------|
| Plasmid | Circular bacterial DNA |
| Bacteriophage | Viral vector |
| Cosmid | Hybrid plasmid/phage |
| YAC | Yeast artificial chromosome |

**Making recombinant DNA:**
1. Cut gene with restriction enzyme
2. Cut vector with same enzyme
3. Mix gene and vector
4. DNA ligase seals joins
5. Recombinant plasmid formed

### 8.4 Polymerase Chain Reaction (PCR)

**Purpose:** Amplify small amounts of DNA

**Requirements:**
- Template DNA
- Primers (short sequences flanking target)
- Taq polymerase (heat-stable)
- Nucleotides
- Buffer

**Cycle:**
| Stage | Temperature | Process |
|-------|-------------|---------|
| Denaturation | 95°C | DNA strands separate |
| Annealing | 55°C | Primers bind to template |
| Extension | 72°C | Taq polymerase synthesises DNA |

**Amplification:** 2ⁿ copies after n cycles

### 8.5 Gel Electrophoresis

**Process:**
1. DNA loaded into wells in gel
2. Electric current applied
3. DNA moves towards positive electrode (phosphate groups negative)
4. Small fragments move faster
5. DNA visualised (UV after staining)

**Applications:**
- DNA profiling
- Checking PCR products
- Comparing genetic variations
- Genetic disease diagnosis

**DNA profiling:**
- Uses STRs (short tandem repeats)
- Variable number between individuals
- Unique pattern for each person (except identical twins)
- Forensic, paternity testing

### 8.6 Genetic Engineering Applications

**Insulin production:**
1. Isolate human insulin gene
2. Insert into plasmid vector
3. Transform bacteria
4. Culture bacteria
5. Extract and purify insulin

**Advantages of genetic engineering:**
- Exact human protein
- Unlimited supply
- No allergic reactions
- No disease transmission

**Gene therapy:**
| Type | Target | Description |
|------|--------|-------------|
| Somatic | Body cells | Not inherited |
| Germ line | Gametes | Inherited (not done in humans) |

**Delivery methods:**
- Viral vectors (adenovirus, retrovirus)
- Liposomes
- Direct injection

**Challenges:**
- Getting gene to correct cells
- Ensuring long-term expression
- Immune response
- Insertional mutagenesis risk

### 8.7 Gene Technology Ethics

**Arguments for:**
- Treat genetic diseases
- Improve crop yields
- Produce medicines
- Scientific advancement

**Arguments against:**
- Playing God
- Unknown long-term effects
- Designer babies
- Loss of biodiversity (crops)
- Corporate control

**Considerations:**
- Informed consent
- Germline vs somatic
- Enhancement vs treatment
- Access and equality
- Environmental impact

### 8.8 Genome Projects

**Human Genome Project:**
- Complete human genome sequence
- Identified ~20,000 genes
- Understanding genetic diseases
- Personalised medicine
- Pharmacogenomics

**Applications of sequencing:**
- Disease gene identification
- Evolutionary relationships
- Comparative genomics
- Synthetic biology
- Metagenomics
`;

// ============================================================================
// AQA REQUIRED PRACTICALS - COMPLETE GUIDANCE (ALL 12)
// ============================================================================

const REQUIRED_PRACTICALS_GUIDANCE = `
## AQA A-Level Biology Required Practicals - Complete Guide

### Required Practical 1: Effect of Enzyme Concentration on Rate of Reaction
**Specification reference:** 3.1.4.2

**Apparatus:**
- Amylase solution (various concentrations)
- Starch solution
- Iodine solution
- Spotting tile
- Stopwatch
- Test tubes and rack
- Water bath (37°C)
- Pipettes/syringes

**Method:**
1. Set up water bath at 37°C
2. Prepare serial dilutions of amylase
3. Add starch to enzyme in test tube
4. Start stopwatch immediately
5. Every 30 seconds, remove a drop and test with iodine
6. Record time when iodine no longer changes colour (starch digested)
7. Repeat for each enzyme concentration

**Variables:**
| Type | Variable | How controlled |
|------|----------|----------------|
| Independent | Enzyme concentration | Serial dilution |
| Dependent | Time for starch digestion | Iodine test |
| Control | Temperature | Water bath |
| Control | Starch concentration | Same stock solution |
| Control | pH | Buffer solution |
| Control | Volume of starch | Measured with syringe |

**Key points:**
- Calculate rate as 1/time
- Plot rate vs concentration
- Initial rate increases linearly, then plateaus
- Plateau due to substrate becoming limiting

---

### Required Practical 2: Preparation of Stained Squashes of Cells from Plant Root Tips
**Specification reference:** 3.2.2.1

**Apparatus:**
- Garlic bulbs (growing root tips)
- Hydrochloric acid (1M)
- Acetic orcein stain
- Glass slides and coverslips
- Mounted needle
- Filter paper
- Microscope

**Method:**
1. Cut 1-2 cm of root tip
2. Place in HCl at 60°C for 5 minutes (softens tissue)
3. Transfer to watch glass, add acetic orcein stain
4. Leave for 10 minutes (stains chromosomes)
5. Place on slide, macerate with needle
6. Add coverslip, squash firmly (paper towel to absorb excess)
7. Observe under microscope

**Safety:**
- HCl is corrosive - wear goggles and gloves
- Acetic orcein is an irritant
- Dispose of chemicals properly

**Expected observations:**
- Cells at different stages of mitosis visible
- Chromosomes appear dark (stained)
- Calculate mitotic index = cells in mitosis / total cells

---

### Required Practical 3: Investigation into Effect of Substrate Concentration on Osmosis
**Specification reference:** 3.2.3.1

**Apparatus:**
- Potato tubers
- Cork borer
- Sucrose solutions (0, 0.2, 0.4, 0.6, 0.8, 1.0 M)
- Boiling tubes
- Balance (to 0.01g)
- Ruler
- Filter paper
- Stopwatch

**Method:**
1. Cut potato cylinders (same length and diameter using cork borer)
2. Blot dry, measure initial mass and length
3. Place in sucrose solutions for 30 minutes
4. Remove, blot dry, measure final mass and length
5. Calculate percentage change

**Calculations:**
- % change in mass = [(final - initial) / initial] × 100
- Plot % change vs sucrose concentration
- Where line crosses x-axis = water potential of potato cells

**Key points:**
- Negative % change = water loss (hypertonic solution)
- Positive % change = water gain (hypotonic solution)
- At equilibrium point, Ψcell = Ψsolution

---

### Required Practical 4: Dissection of Animal/Plant Gas Exchange System
**Specification reference:** 3.3.2

**Fish gill dissection:**
**Apparatus:**
- Fresh fish head
- Dissecting board and pins
- Scissors, forceps, scalpel
- Mounted needle
- Hand lens/microscope

**Method:**
1. Remove operculum (gill cover)
2. Identify gill arches (4 pairs)
3. Remove one gill arch
4. Identify: gill filaments, gill lamellae
5. Observe blood vessels (afferent and efferent)

**Leaf/insect dissection (alternative):**
- Locust tracheal system: expose spiracles and tracheae
- Leaf: epidermis peel to show stomata and guard cells

**Key observations:**
- Large surface area (lamellae)
- Thin epithelium
- Rich blood supply
- Counter-current flow arrangement

---

### Required Practical 5: Dissection of Animal Organ System (Alimentary Canal)
**Specification reference:** 3.3.3

**Apparatus:**
- Rat or similar specimen (preserved or fresh)
- Dissecting board and pins
- Scissors, forceps, scalpel
- Hand lens

**Method:**
1. Pin specimen ventral side up
2. Cut through body wall (mid-line)
3. Identify and remove alimentary canal
4. Lay out on board
5. Identify regions: oesophagus, stomach, small intestine, large intestine

**Key observations:**
| Region | Features to identify |
|--------|---------------------|
| Oesophagus | Thin-walled tube |
| Stomach | J-shaped, thick muscular wall |
| Small intestine | Long, narrow, villi visible |
| Large intestine | Wider, shorter, no villi |
| Liver/pancreas | Accessory organs |

---

### Required Practical 6: Dissection of Plant Stems to Show Xylem and Phloem
**Specification reference:** 3.3.4.2

**Apparatus:**
- Celery stalk (placed in dyed water)
- Fresh plant stem (dicot)
- Razor blade/scalpel
- Slides and coverslips
- Microscope
- Phloroglucinol stain (optional)

**Method:**
1. Cut thin transverse sections of stem
2. Mount in water on slide
3. Observe under microscope
4. Identify vascular bundles

**Using celery:**
1. Leave celery in red food dye for several hours
2. Cut cross-section
3. Xylem appears red (dye travels in xylem)

**Key observations:**
| Tissue | Features |
|--------|----------|
| Xylem | Inner part of vascular bundle, lignified walls |
| Phloem | Outer part of vascular bundle |
| Cambium | Between xylem and phloem |
| Epidermis | Outer protective layer |
| Cortex | Ground tissue |

---

### Required Practical 7: Use of Chromatography to Separate Photosynthetic Pigments
**Specification reference:** 3.5.1

**Apparatus:**
- Fresh leaves (spinach works well)
- Mortar and pestle
- Propanone (acetone)
- Chromatography paper
- Solvent (petroleum ether : propanone 9:1)
- Capillary tube
- Boiling tube and bung
- Ruler

**Method:**
1. Grind leaves in propanone
2. Draw pencil line 2 cm from bottom of chromatography paper
3. Use capillary tube to apply extract to origin line
4. Allow to dry, repeat several times
5. Place in solvent (below origin line)
6. Allow to develop until solvent near top
7. Remove, mark solvent front, dry
8. Calculate Rf values

**Rf = distance moved by pigment / distance moved by solvent**

**Expected pigments:**
| Pigment | Colour | Rf value (approx) |
|---------|--------|-------------------|
| Carotene | Orange-yellow | 0.95 |
| Xanthophyll | Yellow | 0.70 |
| Chlorophyll a | Blue-green | 0.50 |
| Chlorophyll b | Yellow-green | 0.40 |

---

### Required Practical 8: Investigation into Rate of Respiration Using Respirometer
**Specification reference:** 3.5.2

**Apparatus:**
- Simple respirometer
- Soda lime (absorbs CO₂)
- Glass beads (control)
- Living organisms (germinating seeds, woodlice, maggots)
- Water bath
- Syringe
- Timer/stopwatch

**Method:**
1. Set up respirometer with organisms and soda lime
2. Set up control with glass beads of equal volume
3. Place in water bath (controlled temperature)
4. Allow to equilibrate (10 minutes)
5. Record position of manometer fluid
6. Start timing, record fluid movement at intervals
7. Calculate rate of oxygen uptake

**Variables:**
- IV: Can vary temperature, organism type, etc.
- DV: Volume of O₂ consumed (from manometer)
- Controls: Same mass/number of organisms, same volume soda lime

**Calculations:**
- Rate = volume of O₂ / time
- Calculate RQ if CO₂ production also measured (remove soda lime)

**Key points:**
- Soda lime absorbs CO₂ so only O₂ change measured
- Control accounts for pressure/temperature changes
- Can investigate effect of temperature on respiration rate

---

### Required Practical 9: Investigation into Effect of Light Intensity on Photosynthesis
**Specification reference:** 3.5.1

**Apparatus:**
- Aquatic plant (Elodea or Cabomba)
- Lamp
- Metre rule
- Sodium hydrogen carbonate solution
- Beaker
- Timer
- Thermometer

**Method:**
1. Cut stem of aquatic plant at angle
2. Place in NaHCO₃ solution (provides CO₂)
3. Position lamp at known distance
4. Count bubbles produced per minute
5. Repeat at different distances
6. Convert distance to light intensity (1/d²)

**Alternative method:**
- Collect gas in syringe and measure volume

**Variables:**
| Type | Variable | Control method |
|------|----------|----------------|
| Independent | Light intensity | Distance from lamp |
| Dependent | Rate of O₂ production | Bubble count/volume |
| Control | Temperature | Water jacket/monitor |
| Control | CO₂ | Excess NaHCO₃ |
| Control | Wavelength | Same lamp |

**Expected results:**
- Rate increases with light intensity
- Eventually plateaus (limiting factor changes)

---

### Required Practical 10: Investigation into Position of Gibberellins in Germination
**Specification reference:** 3.6.4.3

**Apparatus:**
- Barley seeds (embryo removed/intact)
- Agar plates
- Starch agar
- Gibberellin solution (GA₃)
- Iodine solution
- Incubator

**Method:**
1. Prepare starch agar plates
2. Place seeds on agar:
   - Half embryos (with aleurone layer)
   - Half embryos + GA₃
   - Intact seeds
3. Incubate at 25°C for 48 hours
4. Flood with iodine solution
5. Observe clear zones (starch digested)

**Expected results:**
| Treatment | Clear zone? | Explanation |
|-----------|-------------|-------------|
| Half embryo only | No/small | Embryo produces GA |
| Half embryo + GA₃ | Yes | GA stimulates amylase |
| Intact seed | Yes | Embryo produces GA |

**Key points:**
- GA stimulates aleurone layer to produce amylase
- Amylase digests starch to maltose
- Clear zone indicates starch digestion

---

### Required Practical 11: Investigation into Animal Response (Choice Chamber)
**Specification reference:** 3.6.1.1

**Apparatus:**
- Choice chamber
- Woodlice (or similar)
- Silica gel (desiccant)
- Damp cotton wool/filter paper
- Black paper/cover
- Timer

**Method (investigating humidity preference):**
1. Set up choice chamber with dry side (silica gel) and wet side
2. Place woodlice in centre
3. Allow to equilibrate (5 minutes)
4. Record position of each animal every minute for 10 minutes
5. Calculate percentage time spent in each area

**Variables:**
- IV: Humidity (wet vs dry)
- DV: Distribution of animals
- Controls: Temperature, light, initial position

**Statistical analysis:**
- Chi-squared test to determine if distribution differs from random

**Key points:**
- Woodlice prefer humid conditions (reduce water loss)
- Called kinesis (non-directional response)
- Speed of movement changes with conditions

---

### Required Practical 12: Investigation into Plant Response (Tropisms)
**Specification reference:** 3.6.4.1

**Apparatus:**
- Seedlings (cress or mustard)
- Light source (unilateral)
- Clinostat (optional)
- Dark box with hole
- Auxin (IAA) solutions
- Agar blocks

**Method (phototropism):**
1. Grow seedlings in dark for 3-4 days
2. Expose to unilateral light
3. Observe bending after 24-48 hours
4. Measure angle of curvature

**Alternative investigations:**
- Remove tip vs intact (demonstrates auxin production site)
- Apply auxin to one side (demonstrates auxin role)
- Use clinostat to eliminate gravity effects

**Variables:**
| Type | Variable |
|------|----------|
| Independent | Light direction/auxin treatment |
| Dependent | Angle of curvature |
| Control | Light intensity, temperature, seedling age |

**Expected results:**
- Shoots bend towards light (positive phototropism)
- Auxin accumulates on shaded side
- More growth on shaded side causes bending
`;

// ============================================================================
// COMMON MISCONCEPTIONS IN A-LEVEL BIOLOGY
// ============================================================================

const COMMON_MISCONCEPTIONS = `
## Common Misconceptions in A-Level Biology

### Topic 1: Biological Molecules

**Misconception:** "Enzymes are used up in reactions"
**Correction:** Enzymes are biological catalysts - they are NOT consumed. They can be reused repeatedly. However, they can be denatured (permanently damaged).

**Misconception:** "Denaturation means the enzyme is broken into pieces"
**Correction:** Denaturation is a change in tertiary structure due to breaking of hydrogen and ionic bonds. The PRIMARY structure (amino acid sequence) remains intact. The enzyme unfolds or changes shape.

**Misconception:** "Competitive inhibitors permanently block the active site"
**Correction:** Competitive inhibition is REVERSIBLE. Inhibitors bind and release from the active site. High substrate concentration can overcome competitive inhibition.

**Misconception:** "Lipids are polymers made of fatty acid monomers"
**Correction:** Lipids are NOT true polymers - they don't consist of repeating identical units. Triglycerides are made by condensation but each fatty acid can be different.

**Misconception:** "Water is just H₂O with no special properties"
**Correction:** Water has unique properties due to hydrogen bonding: high specific heat capacity, high latent heat, cohesion, surface tension, good solvent. These are essential for life.

### Topic 2: Cells

**Misconception:** "All cells have all organelles"
**Correction:** Different cells have different organelles suited to their function. Red blood cells have no nucleus or mitochondria. Prokaryotes lack membrane-bound organelles.

**Misconception:** "Active transport always moves substances into cells"
**Correction:** Active transport moves substances AGAINST concentration gradient - this can be into OR out of cells, depending on the gradient.

**Misconception:** "Osmosis is diffusion of water"
**Correction:** Osmosis is specifically movement of water across a SELECTIVELY PERMEABLE MEMBRANE from higher to lower water potential. Simple diffusion doesn't require a membrane.

**Misconception:** "Antibodies kill pathogens directly"
**Correction:** Most antibodies don't directly kill. They: agglutinate pathogens, neutralise toxins, opsonise (mark for phagocytosis), or activate complement. Phagocytes do the actual killing.

**Misconception:** "T-cells produce antibodies"
**Correction:** B-cells (specifically plasma cells) produce antibodies. T-cells are involved in cell-mediated immunity - helper T-cells activate B-cells, cytotoxic T-cells kill infected cells.

### Topic 3: Exchange and Transport

**Misconception:** "Haemoglobin becomes saturated at high pO₂"
**Correction:** Saturation depends on MORE than just pO₂. The Bohr effect means that at low pH / high CO₂, haemoglobin has LOWER affinity, so same pO₂ gives lower saturation.

**Misconception:** "Blood flows through arteries because they have valves"
**Correction:** Arteries do NOT have valves (except at heart). Blood flows due to high pressure from heart contraction and elastic recoil of artery walls. VEINS have valves.

**Misconception:** "Transpiration is how plants get water"
**Correction:** Transpiration is water LOSS through stomata. Water uptake occurs through roots by osmosis. Transpiration creates the tension that pulls water up, but it is fundamentally a loss.

**Misconception:** "Xylem transports food, phloem transports water"
**Correction:** It's the opposite! Xylem transports water and minerals (upward). Phloem transports organic solutes like sucrose (both directions - source to sink).

### Topic 4: Genetics

**Misconception:** "A gene codes for a characteristic/trait"
**Correction:** A gene codes for a POLYPEPTIDE (protein). Characteristics are determined by proteins (often multiple genes involved). This is why one gene can affect multiple characteristics.

**Misconception:** "DNA replication produces two new DNA molecules"
**Correction:** Replication is SEMI-CONSERVATIVE. Each new molecule contains one ORIGINAL strand and one NEW strand. The new molecules are not entirely new.

**Misconception:** "Mutations are always harmful"
**Correction:** Most mutations are NEUTRAL (due to degenerate genetic code or occurring in non-coding regions). Some are harmful, some are beneficial - providing variation for natural selection.

**Misconception:** "mRNA is the same as the template DNA strand"
**Correction:** mRNA is complementary to the TEMPLATE strand (also called antisense strand). It has the same sequence as the CODING strand (also called sense strand), except with U instead of T.

### Topic 5: Energy Transfers

**Misconception:** "Plants don't respire, they photosynthesize"
**Correction:** Plants respire ALL the time (day and night). They photosynthesise only in light. Respiration releases energy from glucose; photosynthesis makes glucose.

**Misconception:** "Oxygen is produced in the Calvin cycle"
**Correction:** Oxygen is produced in the LIGHT-DEPENDENT reactions from photolysis of water. The Calvin cycle (light-independent) fixes CO₂ and produces glucose.

**Misconception:** "ATP is produced only in the Krebs cycle"
**Correction:** Most ATP comes from OXIDATIVE PHOSPHORYLATION (electron transport chain). Krebs cycle produces only 2 ATP (per glucose) by substrate-level phosphorylation. Glycolysis also produces 2 ATP.

**Misconception:** "Anaerobic respiration produces no ATP"
**Correction:** Anaerobic respiration produces 2 ATP per glucose (from glycolysis only). It's much less efficient than aerobic (30-32 ATP) but still produces some energy.

### Topic 6: Organisms Respond

**Misconception:** "Action potentials vary in size with stimulus intensity"
**Correction:** Action potentials are ALL-OR-NOTHING - they are always the same size. Stimulus intensity is coded by FREQUENCY of action potentials, not amplitude.

**Misconception:** "Impulses travel along nerves"
**Correction:** "Nerve" is a bundle of neurones. Action potentials travel along individual NEURONES. This distinction matters when describing the nervous system.

**Misconception:** "Muscles contract by the filaments getting shorter"
**Correction:** Actin and myosin filaments do NOT shorten. They SLIDE past each other (sliding filament theory). The A-band stays same length; I-band and H-zone shorten.

**Misconception:** "Insulin lowers blood glucose by breaking it down"
**Correction:** Insulin doesn't break down glucose. It stimulates: glucose uptake into cells, conversion to glycogen (glycogenesis), and use in respiration. GLUCAGON stimulates glycogen breakdown.

### Topic 7: Genetics, Populations, Evolution

**Misconception:** "Natural selection causes mutations"
**Correction:** Mutations occur RANDOMLY (not caused by selection). Natural selection acts on existing variation. It doesn't create variation - it selects from what's already there.

**Misconception:** "Survival of the fittest means the strongest survive"
**Correction:** "Fittest" means best ADAPTED to the environment - not necessarily strongest. It's about reproductive success, not physical strength.

**Misconception:** "Chi-squared proves a hypothesis is correct"
**Correction:** Chi-squared can only REJECT the null hypothesis (show significant difference from expected). It cannot prove anything is correct, only that results are unlikely to be due to chance.

**Misconception:** "Hardy-Weinberg shows evolution is occurring"
**Correction:** Hardy-Weinberg predicts allele frequencies when NO EVOLUTION is occurring. Deviation from H-W equilibrium suggests evolution may be happening.

### Topic 8: Gene Expression

**Misconception:** "All cells contain different genes"
**Correction:** All cells (in an organism) contain the SAME genes. Differentiation occurs through DIFFERENTIAL GENE EXPRESSION - different genes are switched on/off in different cells.

**Misconception:** "PCR creates new genes"
**Correction:** PCR AMPLIFIES existing DNA - it makes copies of a specific sequence. It doesn't create anything new, just more copies of what's already there.

**Misconception:** "Restriction enzymes cut DNA randomly"
**Correction:** Restriction enzymes cut at SPECIFIC recognition sequences. This specificity is what makes them useful in genetic engineering.

**Misconception:** "Gene therapy permanently cures genetic diseases"
**Correction:** Current gene therapy (somatic) is often temporary as modified cells may die or be replaced. It treats symptoms rather than permanently fixing the genome (germ line therapy is not performed on humans).
`;

// ============================================================================
// MATHEMATICAL SKILLS FOR A-LEVEL BIOLOGY
// ============================================================================

const MATHEMATICAL_SKILLS_GUIDE = `
## Mathematical Skills for A-Level Biology

### Arithmetic and Numerical Computation

**Significant figures:**
- Final answer should match precision of data
- For multiplication/division: use fewest sig figs from data
- For addition/subtraction: use fewest decimal places
- Example: 2.45 × 3.6 = 8.8 (not 8.82, as 3.6 has only 2 sig figs)

**Standard form:**
- Very large: 6.02 × 10²³ (Avogadro's number)
- Very small: 1.5 × 10⁻⁶ m (1.5 μm)
- Converting: move decimal, adjust power accordingly

**Percentage calculations:**
| Calculation | Formula |
|-------------|---------|
| Percentage of total | (part / total) × 100 |
| Percentage change | [(new - old) / old] × 100 |
| Percentage difference | [(A - B) / average] × 100 |
| Percentage error | [(measured - actual) / actual] × 100 |

**Ratio calculations:**
- Simplify to lowest terms: 24:36 = 2:3
- Expressing parts: 2:3 ratio means 2/5 and 3/5 of total
- Genetic ratios: 3:1, 9:3:3:1, 1:2:1, etc.

### Statistical Analysis

**Mean, Median, Mode:**
| Measure | Calculation | When to use |
|---------|-------------|-------------|
| Mean | Sum / n | Normal distribution |
| Median | Middle value | Skewed data |
| Mode | Most common | Categorical data |

**Standard Deviation (s):**

Formula: s = √[Σ(x - x̄)² / (n-1)]

Step-by-step calculation:
1. Calculate mean (x̄)
2. Find deviation from mean for each value (x - x̄)
3. Square each deviation (x - x̄)²
4. Sum all squared deviations Σ(x - x̄)²
5. Divide by (n-1) for sample
6. Square root the result

Interpretation:
- 68% of data within ±1 SD of mean
- 95% of data within ±2 SD of mean
- Larger SD = more spread/variability

**Standard Error of the Mean (SE):**
SE = s / √n
- Measures precision of the mean
- Used for error bars on graphs
- Decreases with larger sample size

### Chi-Squared Test (χ²)

**Purpose:** Test if observed results differ significantly from expected

**Formula:** χ² = Σ[(O - E)² / E]

**Worked example:**
A cross expected 3:1 ratio. From 100 offspring: 70 dominant, 30 recessive.
Expected: 75 dominant, 25 recessive

| Phenotype | O | E | O - E | (O - E)² | (O - E)²/E |
|-----------|---|---|-------|----------|------------|
| Dominant | 70 | 75 | -5 | 25 | 0.333 |
| Recessive | 30 | 25 | 5 | 25 | 1.000 |
| | | | | χ² = | 1.333 |

Degrees of freedom = 2 - 1 = 1
Critical value (df=1, p=0.05) = 3.84
1.333 < 3.84, so accept null hypothesis - no significant difference

**Critical values table (p = 0.05):**
| df | Critical value |
|----|----------------|
| 1 | 3.84 |
| 2 | 5.99 |
| 3 | 7.81 |
| 4 | 9.49 |
| 5 | 11.07 |

### Student's t-test

**Purpose:** Compare means of two samples

**Formula:** t = (x̄₁ - x̄₂) / √(s₁²/n₁ + s₂²/n₂)

**Conditions for use:**
- Data normally distributed
- Continuous data
- Two independent samples
- Similar variances

**Procedure:**
1. Calculate means and standard deviations for both groups
2. Substitute into formula
3. Calculate degrees of freedom (n₁ + n₂ - 2)
4. Compare t-value with critical value
5. If t > critical value at p = 0.05, reject null hypothesis

### Spearman's Rank Correlation

**Purpose:** Test for correlation between two variables

**Formula:** rs = 1 - [6Σd² / n(n² - 1)]

Where d = difference in ranks

**Worked example:**
| Sample | Temp (°C) | Rate | Temp rank | Rate rank | d | d² |
|--------|-----------|------|-----------|-----------|---|-----|
| A | 15 | 5 | 1 | 2 | -1 | 1 |
| B | 20 | 4 | 2 | 1 | 1 | 1 |
| C | 25 | 8 | 3 | 3 | 0 | 0 |
| D | 30 | 12 | 4 | 4 | 0 | 0 |
| E | 35 | 15 | 5 | 5 | 0 | 0 |

Σd² = 2, n = 5
rs = 1 - [6 × 2 / 5(25 - 1)]
rs = 1 - [12 / 120]
rs = 1 - 0.1 = 0.9

Interpretation:
| rs value | Interpretation |
|----------|----------------|
| +1 | Perfect positive correlation |
| 0.7 to 0.99 | Strong positive correlation |
| 0.4 to 0.69 | Moderate positive correlation |
| 0.1 to 0.39 | Weak positive correlation |
| 0 | No correlation |
| Negative | Negative correlation |

### Simpson's Index of Diversity

**Formula:** D = 1 - Σ(n/N)²

Where:
- n = number of individuals of each species
- N = total number of individuals

Alternative formula: D = 1 - [Σn(n-1) / N(N-1)]

**Interpretation:**
- D ranges from 0 to 1
- Higher D = greater diversity
- D = 0: infinite diversity (hypothetical)
- D = 1: no diversity (one species dominates)

### Graph Skills

**Drawing graphs:**
- Independent variable on x-axis
- Dependent variable on y-axis
- Clear labels with units
- Appropriate scale (use most of graph paper)
- Plot points accurately
- Best fit line or curve (not dot-to-dot)

**Calculating rates from graphs:**
- For straight line: gradient = rate = Δy/Δx
- For curve: draw tangent at specific point, calculate gradient
- Include units in rate calculation

**Error bars:**
- Usually show ± 1 standard error or ± 1 SD
- Overlapping error bars suggest no significant difference
- Non-overlapping suggests significant difference (but needs statistical test)

**Logarithmic scales:**
- Used for data spanning several orders of magnitude
- Each division represents ×10
- Bacterial growth curves often plotted on log scale
`;

// ============================================================================
// ESSAY WRITING GUIDANCE (25-MARK QUESTIONS)
// ============================================================================

const ESSAY_WRITING_GUIDE = `
## AQA A-Level Biology 25-Mark Essay Writing Guide

### Essay Assessment Criteria

**Level 4 (16-25 marks):**
- Clear, logical, coherent structure
- Relevant scientific content throughout
- Wide range of accurate terminology
- Shows breadth AND depth of understanding
- Effectively links concepts from different areas
- Includes relevant, well-explained examples

**Level 3 (9-15 marks):**
- Good structure with some coherent argument
- Mostly relevant scientific content
- Good range of accurate terminology
- Shows understanding but may lack depth or breadth
- Some linking of concepts
- Examples included but may not be fully explained

**Level 2 (5-8 marks):**
- Some structure but may be disjointed
- Some relevant content, some irrelevant
- Limited terminology, some errors
- Basic understanding shown
- Limited linking of concepts
- Few or poorly explained examples

**Level 1 (1-4 marks):**
- Little structure
- Limited relevant content
- Poor use of terminology
- Superficial understanding
- No linking of concepts

### Essay Planning Strategy

**Time allocation (approximately 25-30 minutes):**
- Planning: 5 minutes
- Writing: 20 minutes
- Checking: 2-3 minutes

**Planning approach:**
1. Read title carefully - identify key words
2. Brainstorm all relevant topics/concepts
3. Organise into themes/sections
4. Plan linking between sections
5. Note specific examples to include

### Essay Structure Template

**Introduction (2-3 sentences):**
- Define key terms from title
- Set scope of essay
- Preview main themes

**Main body (4-5 paragraphs):**
Each paragraph should:
- Make a clear point
- Provide detailed explanation
- Include specific example(s)
- Link to essay title
- Connect to other paragraphs

**Conclusion (2-3 sentences):**
- Summarise key points
- Link back to title
- Possibly suggest broader implications

### Effective Linking Phrases

**Within paragraphs:**
- "This is because..."
- "For example..."
- "This leads to..."
- "As a result..."
- "Furthermore..."
- "This is similar to..."

**Between paragraphs:**
- "Building on this..."
- "In contrast..."
- "Another important aspect is..."
- "This relates to..."
- "Moving from [topic A] to [topic B]..."
- "Similarly..."

### Common Essay Topics and Themes

**"The importance of shape in biology"**
Themes to cover:
- Enzyme active site shape (induced fit)
- Protein tertiary/quaternary structure
- Antibody shape and antigen binding
- Cell surface receptors
- Haemoglobin shape changes (cooperative binding)
- DNA double helix structure
- Membrane protein shape and function

**"Cycles in biology"**
Themes to cover:
- Carbon cycle (photosynthesis and respiration)
- Nitrogen cycle
- Krebs cycle
- Calvin cycle
- Cell cycle
- Cardiac cycle
- Menstrual cycle
- Nutrient cycling in ecosystems

**"The importance of ATP in organisms"**
Themes to cover:
- ATP structure and hydrolysis
- ATP in active transport
- ATP in muscle contraction
- ATP synthesis in respiration
- ATP synthesis in photosynthesis
- ATP in nerve impulse transmission
- ATP in biosynthesis reactions

**"Negative feedback in biology"**
Themes to cover:
- Blood glucose regulation
- Temperature regulation
- Osmoregulation (ADH)
- Respiratory control
- Heart rate regulation
- Enzyme product inhibition
- Hormone regulation

**"The role of proteins in biology"**
Themes to cover:
- Enzymes (catalysis)
- Structural proteins (collagen, keratin)
- Transport proteins (haemoglobin, channel proteins)
- Hormones (insulin)
- Antibodies
- Receptors
- Motor proteins (myosin)

### Example Essay Plan

**Title: "The importance of membranes in biology"**

**Introduction:**
- Define cell membrane
- Preview: barriers, transport, communication, compartmentalisation

**Paragraph 1: Membrane structure**
- Fluid mosaic model
- Phospholipid bilayer properties
- Membrane proteins
- Link: structure relates to functions

**Paragraph 2: Selective barrier function**
- Permeability to different substances
- Examples: oxygen diffusion, glucose facilitated diffusion
- Importance for maintaining cell conditions

**Paragraph 3: Transport functions**
- Active transport (sodium-potassium pump)
- Endocytosis/exocytosis
- Examples in specific cells (nerve cells, gut epithelium)

**Paragraph 4: Cell recognition and communication**
- Glycoproteins and glycolipids
- Receptor proteins
- Examples: hormone reception, immune recognition
- Link to cell signalling

**Paragraph 5: Internal membranes**
- Mitochondrial membranes (respiration, chemiosmosis)
- Chloroplast membranes (photosynthesis)
- ER and Golgi (protein processing)
- Importance of compartmentalisation

**Conclusion:**
- Summarise diverse functions
- Membranes essential for life
- Link structure to function throughout

### Quality of Written Communication

**To achieve top marks:**
- Use correct scientific terminology
- Spell technical terms correctly
- Write in complete sentences
- Use paragraphs effectively
- Maintain formal scientific style
- Avoid colloquial language
- Check for grammatical errors
`;

// ============================================================================
// SYNOPTIC ASSESSMENT PREPARATION
// ============================================================================

const SYNOPTIC_GUIDE = `
## Synoptic Assessment in A-Level Biology

### What is Synoptic Assessment?

Synoptic assessment tests your ability to:
- Make connections across different topics
- Apply understanding in unfamiliar contexts
- Integrate knowledge from multiple areas
- See the "big picture" of biology

### Where Synoptic Questions Appear

**Paper 3 specifically:**
- Section A: Structured questions drawing on multiple topics
- Section B: Analysis of experimental data
- Section C: Essay (explicitly synoptic)

**Also in Papers 1 and 2:**
- Comprehension questions
- Extended response questions
- Novel context questions

### Key Synoptic Links

**Link 1: Membranes throughout biology**
| Topic | Membrane relevance |
|-------|-------------------|
| Topic 1 | Phospholipid structure, membrane proteins |
| Topic 2 | Cell membrane structure, transport, immune recognition |
| Topic 3 | Gas exchange surfaces, absorption in gut |
| Topic 5 | Thylakoid membranes, inner mitochondrial membrane |
| Topic 6 | Neurone membranes, synaptic transmission |
| Topic 8 | Endomembrane system, vesicle transport |

**Link 2: ATP in biology**
| Topic | ATP relevance |
|-------|---------------|
| Topic 1 | ATP structure, hydrolysis |
| Topic 2 | Active transport |
| Topic 3 | Muscle contraction, loading in phloem |
| Topic 5 | Photophosphorylation, oxidative phosphorylation |
| Topic 6 | Nerve impulse, muscle contraction, active transport |

**Link 3: Enzymes throughout biology**
| Topic | Enzyme relevance |
|-------|-----------------|
| Topic 1 | Enzyme structure, catalysis, inhibition |
| Topic 3 | Digestive enzymes |
| Topic 4 | DNA polymerase, RNA polymerase |
| Topic 5 | Rubisco, ATP synthase, respiratory enzymes |
| Topic 6 | Acetylcholinesterase |
| Topic 8 | Restriction enzymes, DNA ligase |

**Link 4: DNA and gene expression**
| Topic | DNA/gene expression relevance |
|-------|------------------------------|
| Topic 1 | Nucleic acid structure |
| Topic 2 | Cell cycle, mitosis |
| Topic 4 | DNA replication, transcription, translation |
| Topic 7 | Inheritance, variation, evolution |
| Topic 8 | Gene regulation, genetic engineering |

**Link 5: Surface area and exchange**
| Topic | SA/exchange relevance |
|-------|----------------------|
| Topic 2 | Microvilli in absorption |
| Topic 3 | Alveoli, villi, gill lamellae |
| Topic 5 | Chloroplast structure, mitochondrial cristae |
| Topic 6 | Nephron tubules |

**Link 6: Gradients and transport**
| Topic | Gradient relevance |
|-------|-------------------|
| Topic 2 | Concentration gradients, water potential |
| Topic 3 | Counter-current, gas exchange gradients |
| Topic 5 | Proton gradient in chemiosmosis |
| Topic 6 | Sodium gradient in nerves, medullary gradient |

### Synoptic Question Strategies

**When reading the question:**
1. Identify the main topic area
2. Look for links to other topics
3. Consider underlying principles
4. Think about context (practical, theoretical, applications)

**When planning your answer:**
1. List all relevant knowledge
2. Identify connections between topics
3. Choose most relevant examples
4. Structure answer logically

**When writing your answer:**
1. Make links explicit
2. Use correct terminology from ALL relevant topics
3. Explain connections, don't just state them
4. Use comparative language where appropriate

### Practice Synoptic Questions

**Example 1:**
"Explain how the structure of haemoglobin is related to its function in oxygen transport."

Topics involved:
- Topic 1: Protein structure (quaternary, prosthetic groups)
- Topic 3: Oxygen transport, oxygen dissociation curve
- Topic 5: Role in respiring tissues (Bohr effect)

**Example 2:**
"Describe how ATP is produced in different locations within a eukaryotic cell."

Topics involved:
- Topic 1: ATP structure
- Topic 2: Cell structure (cytoplasm, mitochondria, chloroplast)
- Topic 5: Glycolysis, oxidative phosphorylation, photophosphorylation

**Example 3:**
"Explain how different organisms are adapted for gas exchange."

Topics involved:
- Topic 2: Surface area to volume ratio
- Topic 3: Specific adaptations (gills, lungs, tracheae, stomata)
- Topic 5: Link to respiration rate
- Topic 7: Evolution of adaptations

### Common Synoptic Themes

**Theme: Maintaining gradients**
- Concentration gradients (diffusion, osmosis)
- Electrochemical gradients (nerve impulse)
- Proton gradients (chemiosmosis)
- Water potential gradients (plant transport)

**Theme: Complementary shapes**
- Enzyme-substrate
- Antigen-antibody
- Hormone-receptor
- DNA base pairing
- tRNA anticodon-mRNA codon

**Theme: Controlling processes**
- Enzyme regulation
- Gene regulation
- Homeostatic control
- Immune response regulation
- Cell cycle control

**Theme: Efficiency of biological systems**
- Energy transfer efficiency
- Counter-current efficiency
- Cooperative binding
- Specialised exchange surfaces
- Compartmentalisation in cells

### Linking Practical Skills Synoptically

**Across all practicals:**
- Control of variables
- Reliability and validity
- Statistical analysis
- Sources of error
- Improvements

**Synoptic practical questions might ask:**
- How techniques from one practical apply to another
- How to design experiments using multiple concepts
- Analysis of data from unfamiliar contexts
- Evaluation using understanding from multiple topics
`;

// ============================================================================
// KEY BIOLOGICAL DEFINITIONS AND TERMS
// ============================================================================

const KEY_DEFINITIONS = `
## Key A-Level Biology Definitions

### Topic 1: Biological Molecules

| Term | Definition |
|------|------------|
| Monomer | A small molecule that can bond to other identical molecules to form a polymer |
| Polymer | A large molecule made of many repeating monomer subunits |
| Condensation reaction | A reaction where two molecules join with the removal of water |
| Hydrolysis | The splitting of a molecule by the addition of water |
| Glycosidic bond | A covalent bond formed between monosaccharides |
| Peptide bond | A covalent bond formed between amino acids |
| Ester bond | A covalent bond formed between glycerol and fatty acids |
| Primary structure | The sequence of amino acids in a polypeptide chain |
| Secondary structure | Regular folding (alpha helix or beta pleated sheet) due to hydrogen bonds |
| Tertiary structure | The overall 3D shape of a protein due to bonding between R groups |
| Quaternary structure | The association of two or more polypeptide chains |
| Denaturation | The permanent loss of a protein's 3D structure |
| Enzyme | A biological catalyst that lowers activation energy |
| Active site | The region of an enzyme where substrate binds |
| Activation energy | The minimum energy required for a reaction to occur |
| Induced fit | The change in shape of the active site as substrate binds |
| Competitive inhibitor | A molecule that competes with substrate for the active site |
| Non-competitive inhibitor | A molecule that binds to an allosteric site, changing active site shape |

### Topic 2: Cells

| Term | Definition |
|------|------------|
| Eukaryotic cell | A cell with membrane-bound organelles and a nucleus |
| Prokaryotic cell | A cell without membrane-bound organelles or a true nucleus |
| Organelle | A membrane-bound structure within a cell with a specific function |
| Ultrastructure | The detailed internal structure visible with an electron microscope |
| Fluid mosaic model | The model of membrane structure with phospholipids and proteins |
| Diffusion | The net movement of particles from high to low concentration |
| Facilitated diffusion | Diffusion through channel or carrier proteins |
| Osmosis | The movement of water from high to low water potential through a selectively permeable membrane |
| Active transport | The movement of substances against a concentration gradient using ATP |
| Water potential (Ψ) | The tendency of water molecules to move; a measure of free energy |
| Antigen | A molecule that triggers an immune response |
| Antibody | A Y-shaped protein produced by B-cells that binds to specific antigens |
| Phagocytosis | The engulfing and digestion of pathogens by phagocytes |
| Cell cycle | The sequence of events from one cell division to the next |
| Mitosis | Nuclear division producing two genetically identical nuclei |
| Interphase | The period of cell growth and DNA replication between divisions |

### Topic 3: Exchange and Transport

| Term | Definition |
|------|------------|
| Surface area to volume ratio | The relationship between surface area and volume affecting exchange |
| Gas exchange surface | A specialised surface where gases are exchanged |
| Counter-current flow | Flow of fluids in opposite directions, maintaining a concentration gradient |
| Ventilation | The mechanism of moving air/water over gas exchange surfaces |
| Cardiac cycle | The sequence of events in one heartbeat |
| Cardiac output | The volume of blood pumped by the heart per minute |
| Stroke volume | The volume of blood pumped per beat |
| Haemoglobin | The oxygen-carrying protein in red blood cells |
| Oxygen dissociation curve | A graph showing the relationship between pO₂ and haemoglobin saturation |
| Bohr effect | The reduced affinity of haemoglobin for oxygen at low pH/high CO₂ |
| Transpiration | The loss of water vapour from plant leaves |
| Cohesion-tension theory | The mechanism explaining water transport in xylem |
| Translocation | The transport of organic solutes in phloem |
| Mass flow | The movement of substances in bulk due to pressure differences |

### Topic 4: Genetics

| Term | Definition |
|------|------------|
| Gene | A sequence of nucleotides/bases that codes for a polypeptide |
| Allele | A different version of a gene |
| Genome | The complete set of genetic information in an organism |
| Locus | The position of a gene on a chromosome |
| Mutation | A change in the base sequence of DNA |
| Transcription | The synthesis of mRNA from a DNA template |
| Translation | The synthesis of a polypeptide using mRNA as a template |
| Codon | A triplet of bases on mRNA coding for one amino acid |
| Anticodon | A triplet of bases on tRNA complementary to a codon |
| Semi-conservative replication | DNA replication where each new molecule contains one old and one new strand |
| Meiosis | Cell division producing four haploid cells with genetic variation |
| Crossing over | Exchange of genetic material between homologous chromosomes |
| Independent assortment | Random orientation of chromosomes during meiosis |
| Species | A group of organisms that can interbreed to produce fertile offspring |
| Biodiversity | The variety of living organisms in an area |

### Topic 5: Energy Transfers

| Term | Definition |
|------|------------|
| Photosynthesis | The conversion of light energy into chemical energy in organic molecules |
| Respiration | The release of energy from organic molecules |
| ATP | Adenosine triphosphate - the immediate energy source for cells |
| Photophosphorylation | The production of ATP using light energy |
| Oxidative phosphorylation | The production of ATP using energy from electron transport |
| Chemiosmosis | ATP synthesis driven by proton movement across a membrane |
| Glycolysis | The breakdown of glucose to pyruvate in the cytoplasm |
| Krebs cycle | The cycle of reactions in the matrix that oxidises acetyl CoA |
| Electron transport chain | A series of carriers that transfer electrons and pump protons |
| Respiratory quotient (RQ) | The ratio of CO₂ produced to O₂ consumed |
| Gross primary productivity (GPP) | The total rate of photosynthesis |
| Net primary productivity (NPP) | GPP minus respiration by producers |
| Trophic level | A feeding level in a food chain |

### Topic 6: Responses

| Term | Definition |
|------|------------|
| Receptor | A cell/structure that detects a stimulus |
| Effector | A cell/structure that produces a response |
| Resting potential | The potential difference across a neurone membrane at rest |
| Action potential | A rapid change in potential difference that travels along a neurone |
| Depolarisation | The reversal of potential difference across a membrane |
| Refractory period | The period when a neurone cannot transmit another impulse |
| Synapse | The junction between two neurones |
| Neurotransmitter | A chemical released at a synapse |
| Homeostasis | The maintenance of a constant internal environment |
| Negative feedback | A mechanism that reverses a change from the set point |
| Tropism | A directional growth response to a stimulus |
| Auxin | A plant hormone that causes cell elongation |
| Gibberellin | A plant hormone involved in stem elongation and germination |

### Topic 7: Genetics, Populations and Ecosystems

| Term | Definition |
|------|------------|
| Codominance | When both alleles are expressed in the heterozygote |
| Epistasis | When one gene affects the expression of another gene |
| Linkage | Genes on the same chromosome that tend to be inherited together |
| Hardy-Weinberg principle | The principle predicting allele frequencies in stable populations |
| Natural selection | Differential survival and reproduction of individuals with favourable traits |
| Speciation | The formation of new species |
| Allopatric speciation | Speciation due to geographic isolation |
| Sympatric speciation | Speciation without geographic isolation |
| Genetic drift | Random changes in allele frequency in small populations |
| Succession | The directional change in community composition over time |
| Climax community | The stable end-point of succession |
| Simpson's Index | A measure of species diversity |

### Topic 8: Gene Expression

| Term | Definition |
|------|------------|
| Operon | A group of genes controlled by a single regulatory region |
| Transcription factor | A protein that controls transcription by binding to DNA |
| Epigenetics | Heritable changes in gene expression without changes to DNA sequence |
| Restriction enzyme | An enzyme that cuts DNA at specific recognition sequences |
| DNA ligase | An enzyme that joins DNA fragments |
| Recombinant DNA | DNA containing genes from different sources |
| Vector | A carrier used to transfer DNA into host cells |
| PCR | Polymerase chain reaction - a technique to amplify DNA |
| Gel electrophoresis | A technique to separate DNA fragments by size |
| Gene therapy | The treatment of genetic disorders by introducing functional genes |
| Stem cell | An undifferentiated cell capable of developing into specialised cells |
`;

const AQA_ALEVEL_BIOLOGY_PRINCIPLES = `
AQA A-Level Biology Assessment Objectives:
- AO1: Demonstrate knowledge and understanding of scientific ideas, processes, techniques and procedures (30-35%)
- AO2: Apply knowledge and understanding of scientific ideas, processes, techniques and procedures (40-45%)
- AO3: Analyse, interpret and evaluate scientific information, ideas and evidence (25%)

Paper Structure (Total: 300 marks):
- Paper 1 (2 hours, 91 marks, 35%): Topics 1-4 + relevant practical skills
- Paper 2 (2 hours, 91 marks, 35%): Topics 5-8 + relevant practical skills
- Paper 3 (2 hours, 78 marks, 30%): All topics, synoptic, essay

Mathematical Skills: 10% minimum
- Statistical analysis
- Chi-squared test
- Standard deviation
- Student's t-test
- Correlation coefficients

Command Words:
- Calculate: Obtain a numerical answer, showing working
- Compare: Identify similarities and/or differences
- Describe: Give an account in words of the main points
- Design: Set out how something will be done
- Determine: Use given data or information to obtain an answer
- Evaluate: Use evidence to make a judgement
- Explain: Give reasons for something, using scientific knowledge
- State/Give/Name: Short answer, no explanation required
- Suggest: Apply knowledge to unfamiliar contexts

Mark Scheme Conventions:
- 1 mark per valid scientific point
- Calculations: method, substitution, answer with units
- 6-mark questions use levels of response
  - Level 3 (5-6 marks): Comprehensive, scientifically accurate, well-structured
  - Level 2 (3-4 marks): Good understanding with some omissions
  - Level 1 (1-2 marks): Basic understanding, limited terminology
- 25-mark essays: indicative content with levels

## Key Definitions (A-Level Standard)

**Biological Molecules:**
- Enzyme: "biological catalyst that lowers activation energy"
- Denaturation: "permanent change in tertiary structure / active site shape due to broken hydrogen/ionic bonds"
- Competitive inhibitor: "molecule with similar shape to substrate that competes for active site"
- Non-competitive inhibitor: "molecule that binds to site other than active site, changing active site shape"

**Cells and Transport:**
- Water potential: "tendency of water molecules to move / potential energy of water"
- Active transport: "movement against concentration gradient using ATP from respiration"
- Facilitated diffusion: "passive movement through channel or carrier proteins"

**Genetics:**
- Gene: "sequence of bases on DNA that codes for a polypeptide"
- Allele: "different version of a gene at the same locus"
- Mutation: "change in the base sequence of DNA"
- Transcription: "synthesis of mRNA using DNA as a template"
- Translation: "synthesis of a polypeptide using mRNA as a template"

**Ecology:**
- Gross primary productivity: "rate of energy conversion by photosynthesis"
- Net primary productivity: "GPP minus respiration by producers"
- Succession: "directional change in community over time"

Required Practicals (12 total):
1. Effect of enzyme concentration on rate
2. Microscopy
3. Osmosis
4. Dissection of gas exchange system
5. Dissection of alimentary canal
6. Dissection of plant transport tissues
7. DNA electrophoresis
8. Chromatography of photosynthetic pigments
9. Respiration using respirometer
10. Dissection of muscle and nerve tissue
11. Animal response investigation
12. Plant response investigation
`;

// Topic-specific guidance
const BIOLOGY_TOPIC_GUIDANCE: Record<string, string> = {
  'aqa-alevel-biology-biological-molecules': `
Topic 1: Biological Molecules:
- Detailed structure of carbohydrates, lipids, proteins, nucleic acids
- Enzyme kinetics: Vmax, Km, Michaelis-Menten
- Inhibition types and mechanisms
- ATP structure and roles
- Water properties and biological significance
AQA often tests: enzyme graphs, molecular structure diagrams, experimental design
`,
  'aqa-alevel-biology-cells': `
Topic 2: Cells:
- Detailed ultrastructure of organelles
- Cell fractionation and centrifugation
- Fluid mosaic model in detail
- Water potential calculations
- Immune response mechanisms
- Monoclonal antibody production
AQA often tests: electron micrograph interpretation, immune response pathways
`,
  'aqa-alevel-biology-organisms-exchange': `
Topic 3: Organisms Exchange Substances:
- Comparative gas exchange systems
- Counter-current principle
- Digestion enzyme specificity
- Mass transport in detail
- Oxygen dissociation curves and Bohr effect
- Cohesion-tension theory
AQA often tests: dissociation curves, transport mechanism explanations
`,
  'aqa-alevel-biology-genetic-information': `
Topic 4: Genetic Information, Variation and Relationships:
- DNA replication in detail
- Transcription and translation mechanisms
- Meiosis and genetic variation
- Hardy-Weinberg calculations
- Classification and phylogeny
AQA often tests: genetic crosses, Hardy-Weinberg problems, phylogenetic trees
`,
  'aqa-alevel-biology-energy-transfers': `
Topic 5: Energy Transfers:
- Light-dependent reactions in detail
- Calvin cycle mechanisms
- Glycolysis, link reaction, Krebs cycle
- Oxidative phosphorylation and chemiosmosis
- Respiratory quotient calculations
- Productivity calculations
AQA often tests: metabolic pathway questions, productivity calculations
`,
  'aqa-alevel-biology-organisms-respond': `
Topic 6: Organisms Respond to Changes:
- Action potential generation
- Synaptic transmission mechanisms
- Sliding filament theory
- Homeostasis mechanisms
- Kidney function in detail
- Plant hormone interactions
AQA often tests: action potential graphs, homeostasis explanations
`,
  'aqa-alevel-biology-genetics-populations': `
Topic 7: Genetics, Populations, Evolution and Ecosystems:
- Epistasis and chi-squared tests
- Hardy-Weinberg principle
- Speciation mechanisms
- Succession processes
- Nutrient cycling
AQA often tests: genetic crosses with epistasis, chi-squared calculations
`,
  'aqa-alevel-biology-gene-expression': `
Topic 8: The Control of Gene Expression:
- Gene regulation mechanisms
- Epigenetics
- Recombinant DNA technology
- PCR and gel electrophoresis
- Gene therapy approaches
AQA often tests: genetic engineering procedures, ethical discussions
`
};

// Generate compact prompt for standard questions
export function getAQAALevelBiologyCompactPrompt(
  topic: Topic,
  difficulty: Difficulty,
  subtopic?: string
): string {
  const topicGuidance = BIOLOGY_TOPIC_GUIDANCE[topic.id] || '';

  return `You are an expert AQA A-Level Biology examiner creating an exam-style question.

${AQA_ALEVEL_BIOLOGY_PRINCIPLES}

Topic: ${topic.name}
${subtopic ? `Subtopic: ${subtopic}` : ''}
Difficulty: ${difficulty}

${topicGuidance}

DIFFICULTY GUIDE:
- Easy (1-3 marks): Recall, definitions, simple applications
- Medium (4-6 marks): Detailed explanations, data analysis, short calculations
- Hard (7+ marks): Extended responses, synoptic, complex calculations

Create ONE exam-style question that:
1. Uses authentic AQA A-Level Biology language
2. Tests understanding appropriate to A-Level standard
3. Includes proper mark allocation
4. Matches the difficulty level specified

OUTPUT FORMAT (use exact headers):
**Question:**
[Question text with mark allocation in brackets, e.g. [4 marks]]

**Mark Scheme:**
[Marking points - one point per mark available]

**Explanation:**
[Full worked answer with clear reasoning]`;
}

// Generate extended response question prompt
export function getAQAALevelBiologyExtendedPrompt(
  topic: Topic,
  subtopic?: string
): string {
  const topicGuidance = BIOLOGY_TOPIC_GUIDANCE[topic.id] || '';

  return `You are an expert AQA A-Level Biology examiner creating a 6-mark extended response question.

${AQA_ALEVEL_BIOLOGY_PRINCIPLES}

Topic: ${topic.name}
${subtopic ? `Subtopic: ${subtopic}` : ''}

${topicGuidance}

Create ONE 6-mark extended response question that:
1. Requires detailed scientific explanation
2. Tests understanding across multiple aspects of the topic
3. Uses appropriate command words (Explain, Describe, Evaluate)
4. Includes context where appropriate

The question should be assessed using levels of response:
Level 3 (5-6 marks): Comprehensive, accurate, well-structured
Level 2 (3-4 marks): Good understanding, some omissions
Level 1 (1-2 marks): Basic understanding, limited terminology

OUTPUT FORMAT (use exact headers):
**Question:**
[6-mark extended response question]

**Mark Scheme:**
[Level descriptors and indicative content]

**Explanation:**
[Model Level 3 answer]`;
}

// Generate calculation question prompt
export function getAQAALevelBiologyCalculationPrompt(
  topic: Topic,
  difficulty: Difficulty,
  subtopic?: string
): string {
  const topicGuidance = BIOLOGY_TOPIC_GUIDANCE[topic.id] || '';

  return `You are an expert AQA A-Level Biology examiner creating a calculation question.

${AQA_ALEVEL_BIOLOGY_PRINCIPLES}

${AQA_ALEVEL_BIOLOGY_REFERENCE_DATA}

${AQA_ALEVEL_BIOLOGY_WORKED_EXAMPLES}

Topic: ${topic.name}
${subtopic ? `Subtopic: ${subtopic}` : ''}
Difficulty: ${difficulty}

${topicGuidance}

## CRITICAL: Use Reference Data Above
- Use the EXACT formulas from the reference data
- Show all working clearly
- Include correct units throughout
- Use realistic biological values

Create ONE calculation question that:
1. Tests quantitative biology skills at A-Level
2. Requires clear method and working
3. Has realistic numerical data
4. May involve statistics, Hardy-Weinberg, or productivity

OUTPUT FORMAT (use exact headers):
**Question:**
[Calculation question with data and mark allocation]

**Mark Scheme:**
[Step-by-step marking points following standard conventions]

**Explanation:**
[Complete worked solution with every step shown, using correct values]`;
}

// Generate explain question prompt
export function getAQAALevelBiologyExplainPrompt(
  topic: Topic,
  difficulty: Difficulty,
  subtopic?: string
): string {
  const topicGuidance = BIOLOGY_TOPIC_GUIDANCE[topic.id] || '';

  return `You are an expert AQA A-Level Biology examiner creating an explanation question.

${AQA_ALEVEL_BIOLOGY_PRINCIPLES}

Topic: ${topic.name}
${subtopic ? `Subtopic: ${subtopic}` : ''}
Difficulty: ${difficulty}

${topicGuidance}

Create ONE 'explain' question that:
1. Tests understanding of biological mechanisms and processes
2. Requires linking cause and effect at A-Level depth
3. Uses appropriate command words (Explain, Describe and explain)
4. May include unfamiliar contexts requiring application of knowledge

DIFFICULTY GUIDE:
- Easy: Explain a single mechanism (2-3 marks)
- Medium: Explain a process with multiple steps (4-5 marks)
- Hard: Explain complex interactions or unfamiliar applications (6+ marks)

Common A-Level explanation topics:
- Enzyme mechanisms including inhibition
- Membrane transport processes
- Gene expression and protein synthesis
- Nervous and hormonal coordination
- Photosynthesis and respiration pathways
- Ecological processes and succession
- Evolution and speciation

OUTPUT FORMAT (use exact headers):
**Question:**
[Explanation question with mark allocation]

**Mark Scheme:**
[Key points required for full marks with correct biological terminology]

**Explanation:**
[Model answer demonstrating A-Level standard understanding]`;
}

// Generate graph/data analysis question prompt
export function getAQAALevelBiologyGraphPrompt(
  topic: Topic,
  difficulty: Difficulty,
  subtopic?: string
): string {
  const topicGuidance = BIOLOGY_TOPIC_GUIDANCE[topic.id] || '';

  return `You are an expert AQA A-Level Biology examiner creating a graph or data analysis question.

${AQA_ALEVEL_BIOLOGY_PRINCIPLES}

${AQA_ALEVEL_BIOLOGY_REFERENCE_DATA}

Topic: ${topic.name}
${subtopic ? `Subtopic: ${subtopic}` : ''}
Difficulty: ${difficulty}

${topicGuidance}

Create ONE graph or data analysis question that:
1. Involves interpreting biological data, graphs, or statistical output
2. May require calculating rates, reading values, or statistical analysis
3. Tests understanding of relationships between variables
4. Uses realistic biological data

Common A-Level Biology graph/data types:
- Enzyme activity vs temperature/pH/substrate concentration
- Oxygen dissociation curves (with Bohr effect)
- Action potential traces
- Population growth curves (logistic/exponential)
- Photosynthesis rate vs light intensity/CO₂
- Ecological sampling data
- Genetic cross results requiring chi-squared
- Standard deviation and error bar interpretation

OUTPUT FORMAT (use exact headers):
**Question:**
[Data analysis question with table/graph description and mark allocation]

**Mark Scheme:**
[Marking points for data interpretation, calculations, and conclusions]

**Explanation:**
[Model answer showing correct data analysis approach]`;
}

// Generate compare question prompt
export function getAQAALevelBiologyComparePrompt(
  topic: Topic,
  difficulty: Difficulty,
  subtopic?: string
): string {
  const topicGuidance = BIOLOGY_TOPIC_GUIDANCE[topic.id] || '';

  return `You are an expert AQA A-Level Biology examiner creating a comparison question.

${AQA_ALEVEL_BIOLOGY_PRINCIPLES}

Topic: ${topic.name}
${subtopic ? `Subtopic: ${subtopic}` : ''}
Difficulty: ${difficulty}

${topicGuidance}

Create ONE comparison question that:
1. Compares two related biological concepts, structures, processes, or organisms
2. Requires identifying both similarities AND differences
3. Tests deep understanding of underlying principles
4. Uses 'Compare' or 'Compare and contrast' command words

A-Level Biology comparisons:
- DNA replication vs transcription
- Mitosis vs meiosis
- Photosynthesis vs respiration
- Light-dependent vs light-independent reactions
- Glycolysis vs Krebs cycle
- Aerobic vs anaerobic respiration
- Nervous vs hormonal coordination
- Primary vs secondary succession
- r-strategy vs K-strategy organisms
- Type I vs Type II diabetes
- B-cells vs T-cells
- Competitive vs non-competitive inhibition

OUTPUT FORMAT (use exact headers):
**Question:**
[Comparison question with mark allocation]

**Mark Scheme:**
[Key similarities and differences required - typically 1 mark each point]

**Explanation:**
[Model answer with clearly organised comparison points]`;
}

// Generate essay question prompt (25-mark)
export function getAQAALevelBiologyEssayPrompt(
  topic: Topic
): string {
  return `You are an expert AQA A-Level Biology examiner creating a 25-mark essay question.

${AQA_ALEVEL_BIOLOGY_PRINCIPLES}

Topic: ${topic.name}

AQA 25-mark essay questions:
- Marked using levels (0, 1-8, 9-15, 16-25)
- Should demonstrate breadth and depth of knowledge
- Must include relevant examples
- Good answers link concepts across topics
- Quality of written communication assessed

Create ONE 25-mark essay question that:
1. Has a clear, focused title
2. Allows candidates to demonstrate understanding across related areas
3. Enables discussion of examples from different contexts
4. Tests synoptic understanding

OUTPUT FORMAT (use exact headers):
**Question:**
[Essay title/question]

**Mark Scheme:**
[Level descriptors]
[Indicative content organised by theme]

**Explanation:**
[Outline of a Level 4 (16-25 marks) response structure]`;
}

// Generate required practical prompt
export function getAQAALevelBiologyRequiredPracticalPrompt(
  practical: Practical,
  subtopic: PracticalSubtopic,
  difficulty: Difficulty
): string {
  const markRange = getMarkRangeForDifficulty(difficulty);
  const equipmentList = practical.equipment?.join(', ') || 'Standard lab equipment';
  const safetyList = practical.safety?.join('; ') || 'Standard lab safety precautions';

  const subtopicGuidance = getALevelBiologyPracticalSubtopicGuidance(subtopic, practical);

  return `${AQA_ALEVEL_BIOLOGY_PRINCIPLES}

---

## Required Practical Context

**Practical:** ${practical.name}
**Description:** ${practical.description}
**Equipment:** ${equipmentList}
**Safety:** ${safetyList}

---

${subtopicGuidance}

---

## Your Task

Generate a ${subtopic.toUpperCase()} question for this AQA A-Level Biology Required Practical.

**Difficulty:** ${difficulty}
**Mark Range:** ${markRange.min}-${markRange.max} marks

## Response Format (JSON)

{
  "content": "Question about ${subtopic.toLowerCase()} for ${practical.name}",
  "marks": <total marks as integer>,
  "solution": "Detailed answer with practical knowledge",
  "markScheme": ["1: mark description", "2: mark description"],
  "diagram": <optional DiagramSpec - include when question benefits from visual>
}

\${getDiagramDocsForSubject('biology')}

Generate a genuinely original Required Practical ${subtopic} question now:`;
}

function getALevelBiologyPracticalSubtopicGuidance(subtopic: PracticalSubtopic, practical: Practical): string {
  switch (subtopic) {
    case 'Method':
      return `## Method Questions (A-Level)
Focus on:
- Detailed procedure with specific techniques
- Quantitative methods and measurements
- Statistical validity considerations
- Controls and replication

A-Level specific:
- Serial dilution techniques
- Aseptic technique
- Calibration of equipment
- Data logging and processing`;

    case 'Variables':
      return `## Variables Questions (A-Level)
Focus on:
- Precise identification and control
- Standardisation techniques
- Confounding variables
- Continuous vs categorical variables`;

    case 'Equipment':
      return `## Equipment Questions (A-Level)
Focus on:
- Precision and accuracy of instruments
- Calibration requirements
- Resolution and sensitivity
- Alternative methods and comparisons

Equipment for this practical:
${practical.equipment?.map(e => `- ${e}`).join('\n') || '- Standard lab equipment'}`;

    case 'Results Analysis':
      return `## Results Analysis (A-Level)
Focus on:
- Statistical analysis (t-test, chi-squared)
- Standard deviation and error bars
- Correlation and causation
- Confidence intervals
- Null hypothesis testing`;

    case 'Graph Skills':
      return `## Graph Skills (A-Level)
Focus on:
- Rate curves and tangent calculations
- Log scales when appropriate
- Error bars
- Lines of best fit vs smooth curves
- Identifying anomalies statistically`;

    case 'Errors':
      return `## Errors (A-Level)
Focus on:
- Systematic vs random errors
- Percentage uncertainty
- Propagation of errors
- Sources of error in specific techniques
- Biological variability`;

    case 'Improvements':
      return `## Improvements (A-Level)
Focus on:
- Statistical improvements
- Equipment upgrades
- Methodological refinements
- Increasing sample size considerations
- Controlling additional variables`;

    case 'Safety':
      return `## Safety (A-Level)
Focus on:
- Risk assessment
- COSHH considerations
- Ethical issues in biology
- Environmental impact

Safety for this practical:
${practical.safety?.map(s => `- ${s}`).join('\n') || '- Standard lab safety procedures'}`;

    default:
      return '';
  }
}
