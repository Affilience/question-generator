import { SubtopicData } from '../bulk-seo-insert';

export const gcseBiologyInheritance: SubtopicData[] = [
  {
    content: {
      level: 'gcse',
      subject: 'biology',
      exam_board: 'aqa',
      topic_slug: 'inheritance',
      subtopic_slug: 'dna-and-genes',
      title: 'DNA and Genes | GCSE Biology',
      meta_description: 'Learn about DNA structure, genes and the genetic code. GCSE Biology practice questions with step-by-step solutions.',
      introduction: `DNA (deoxyribonucleic acid) is the molecule that contains the genetic instructions for all living organisms. Found in the nucleus of cells, DNA carries the information needed to make proteins and determines inherited characteristics.

DNA has a double helix structure—two strands twisted together like a twisted ladder. The "sides" of the ladder are made of sugar and phosphate molecules. The "rungs" are made of bases that pair together: adenine (A) pairs with thymine (T), and cytosine (C) pairs with guanine (G). This complementary base pairing is crucial for DNA replication.

A gene is a section of DNA that codes for a particular protein. The sequence of bases in a gene determines the sequence of amino acids in a protein. Each three bases (a codon) codes for one amino acid. Different proteins have different functions: structural proteins, enzymes, hormones, antibodies.

The entire DNA of an organism is its genome. The Human Genome Project mapped all human genes. Understanding genes helps us understand genetic diseases, evolution, and how to develop new medical treatments.`
    },
    questions: [
      {
        difficulty: 'easy',
        marks: 2,
        content: 'State what is meant by a gene and where genes are found in a cell.',
        solution: `**What is a gene:**
A gene is a section of **DNA** that codes for a particular **protein**.

**Where genes are found:**
- In the **nucleus** of the cell
- Genes are located on **chromosomes**
- Chromosomes are made of DNA

**Additional information:**
- Humans have approximately 20,000-25,000 genes
- Genes determine inherited characteristics`,
        display_order: 1
      },
      {
        difficulty: 'medium',
        marks: 3,
        content: 'Describe the structure of DNA, including how the bases pair together.',
        solution: `**Structure of DNA:**

1. **Double helix:**
   - Two strands twisted around each other
   - Like a twisted ladder or spiral staircase

2. **The "backbone":**
   - Made of alternating **sugar** and **phosphate** molecules
   - Forms the sides of the ladder

3. **Bases:**
   - Four types: Adenine (A), Thymine (T), Cytosine (C), Guanine (G)
   - Bases form the rungs of the ladder
   - Each rung is a pair of bases

4. **Complementary base pairing:**
   - A always pairs with T (two hydrogen bonds)
   - C always pairs with G (three hydrogen bonds)
   - This is called complementary base pairing

**Why base pairing is important:**
- Allows DNA to replicate accurately
- Ensures genetic information is copied correctly`,
        display_order: 2
      },
      {
        difficulty: 'hard',
        marks: 4,
        content: 'Explain how the sequence of bases in DNA codes for the amino acid sequence in a protein, and why a change in just one base could significantly affect the protein produced.',
        solution: `**How DNA codes for proteins:**

1. **The genetic code:**
   - DNA bases are read in groups of **three** (called codons)
   - Each codon specifies one **amino acid**
   - Example: ATG codes for methionine

2. **From gene to protein:**
   - The sequence of bases determines the sequence of codons
   - Each codon → one amino acid
   - Chain of amino acids → protein
   - Example: ...ATG-GCA-TTT... → Met-Ala-Phe...

3. **Protein structure depends on sequence:**
   - The amino acid sequence determines how the protein folds
   - Folding determines the protein's **3D shape**
   - Shape determines **function**

**Why one base change can be significant:**

1. **Different amino acid:**
   - One base change could code for a **different amino acid**
   - Example: GAG (glutamic acid) → GTG (valine) in sickle cell

2. **Effect on protein:**
   - Different amino acid may have different properties
   - Could change how the protein **folds**
   - Could alter the **active site** of an enzyme
   - Protein may not function correctly

3. **Serious consequences:**
   - Non-functional enzyme → metabolic disorder
   - Structural protein affected → disease
   - Sickle cell anaemia results from just one base change

**Note:** Some base changes are "silent" if they code for the same amino acid (redundancy in the genetic code).`,
        display_order: 3
      }
    ]
  },
  {
    content: {
      level: 'gcse',
      subject: 'biology',
      exam_board: 'aqa',
      topic_slug: 'inheritance',
      subtopic_slug: 'genetic-inheritance',
      title: 'Genetic Inheritance | GCSE Biology',
      meta_description: 'Master Punnett squares and genetic crosses. GCSE Biology practice questions with detailed solutions.',
      introduction: `Genetic inheritance follows predictable patterns that can be understood through studying alleles, genotypes, and phenotypes. Gregor Mendel discovered these patterns in the 1860s by studying pea plants, although genes were not known about at the time.

Each characteristic is controlled by genes found on chromosomes. In diploid organisms (like humans), chromosomes come in pairs, so there are two copies (alleles) of each gene. Alleles can be dominant (shown with a capital letter) or recessive (shown with a lowercase letter). If an individual has two different alleles (heterozygous), the dominant allele determines the phenotype.

The genotype is the combination of alleles an individual has (e.g., BB, Bb, or bb). The phenotype is the physical characteristic that results from the genotype. A homozygous individual has two identical alleles (BB or bb), while a heterozygous individual has different alleles (Bb).

Punnett squares are used to predict the probability of offspring having particular genotypes and phenotypes. The gametes from each parent are shown, and all possible combinations are worked out. This gives ratios and probabilities for the offspring.`
    },
    questions: [
      {
        difficulty: 'easy',
        marks: 2,
        content: 'In pea plants, the allele for tall stems (T) is dominant over the allele for short stems (t). A plant has the genotype Tt. State whether this plant is homozygous or heterozygous, and describe its phenotype.',
        solution: `**Homozygous or heterozygous:**
The plant is **heterozygous** (has two different alleles: T and t)

**Phenotype:**
The plant will have **tall stems**

**Explanation:**
- T (tall) is dominant over t (short)
- In a heterozygous individual, the dominant allele is expressed
- Therefore Tt produces the tall phenotype`,
        display_order: 1
      },
      {
        difficulty: 'medium',
        marks: 3,
        content: 'Two heterozygous tall pea plants (Tt) are crossed. Draw a Punnett square and calculate the probability of offspring being short.',
        solution: `**Punnett square:**

|   | T | t |
|---|---|---|
| **T** | TT | Tt |
| **t** | Tt | tt |

**Genotype ratio:** 1 TT : 2 Tt : 1 tt

**Phenotype ratio:** 3 tall : 1 short

**Probability of short offspring:**
- Short plants have genotype tt
- 1 out of 4 offspring will be tt
- Probability = **1/4 or 25%**

**Probability of tall offspring:**
- 3 out of 4 offspring will be tall (TT or Tt)
- Probability = 3/4 or 75%`,
        display_order: 2
      },
      {
        difficulty: 'hard',
        marks: 4,
        content: 'In mice, black coat (B) is dominant over brown coat (b). A black mouse is crossed with a brown mouse. The offspring include both black and brown mice. Determine the genotypes of the parents and explain your reasoning.',
        solution: `**Reasoning:**

1. **Brown mouse genotype:**
   - Brown is recessive (b)
   - To show brown phenotype, must have two recessive alleles
   - Brown mouse genotype = **bb**

2. **Black mouse genotype:**
   - Black could be BB or Bb (both give black phenotype)
   - Some offspring are brown (bb)
   - A brown offspring must inherit 'b' from **both parents**
   - The brown parent contributes 'b'
   - The black parent must also contribute 'b'
   - Therefore black parent cannot be BB (would only give 'B')
   - Black mouse genotype = **Bb**

**Proof using Punnett square:**

Cross: Bb × bb

|   | B | b |
|---|---|---|
| **b** | Bb | bb |
| **b** | Bb | bb |

**Offspring:**
- 2 Bb (black) : 2 bb (brown)
- Ratio: 1 black : 1 brown
- This matches "both black and brown mice"

**Summary:**
- Black parent: **Bb** (heterozygous)
- Brown parent: **bb** (homozygous recessive)

If the black parent were BB, all offspring would be Bb (black), with no brown offspring.`,
        display_order: 3
      }
    ]
  },
  {
    content: {
      level: 'gcse',
      subject: 'biology',
      exam_board: 'aqa',
      topic_slug: 'inheritance',
      subtopic_slug: 'variation',
      title: 'Variation | GCSE Biology',
      meta_description: 'Learn about genetic and environmental variation. GCSE Biology practice questions with step-by-step solutions.',
      introduction: `Variation refers to the differences between individuals of the same species. Understanding variation is crucial for biology because it is the raw material for natural selection and evolution.

Genetic variation is caused by differences in genes inherited from parents. Sexual reproduction produces genetic variation through meiosis, which shuffles genes, and fertilisation, which combines genes from two parents. Mutations can also cause new genetic variations.

Environmental variation is caused by conditions in which organisms develop. Diet, exercise, climate, and other environmental factors can affect characteristics. For example, a plant's height depends partly on genes but also on the availability of water, light, and minerals.

Many characteristics are influenced by both genes and environment. Height in humans has a genetic component (tall parents tend to have taller children) but is also affected by nutrition and health during growth. This makes it difficult to separate genetic and environmental effects on many characteristics.`
    },
    questions: [
      {
        difficulty: 'easy',
        marks: 2,
        content: 'State what is meant by genetic variation and environmental variation, giving one example of each.',
        solution: `**Genetic variation:**
- Variation caused by differences in **genes** (inherited from parents)
- Example: **Blood group** (A, B, AB, or O) - determined entirely by genes

**Environmental variation:**
- Variation caused by **environmental conditions**
- Example: **Scars** - caused by injuries in the environment, not inherited

(Other examples:
- Genetic: eye colour, attached/free earlobes
- Environmental: language spoken, tan from sun exposure)`,
        display_order: 1
      },
      {
        difficulty: 'medium',
        marks: 3,
        content: 'Human height is affected by both genes and environment. Explain how both factors contribute to variation in height.',
        solution: `**Genetic factors affecting height:**
- **Multiple genes** control height (polygenic inheritance)
- Tall parents tend to have taller children
- Genes inherited from both parents combine
- Set the genetic potential for height
- Explains why height runs in families

**Environmental factors affecting height:**
- **Nutrition:** A diet lacking protein, calcium, or vitamins can stunt growth
- **Health:** Childhood illnesses can affect growth
- **Exercise:** May affect bone and muscle development
- **Living conditions:** Stress and poor conditions can reduce growth

**How they interact:**
- Genes set the **potential** maximum height
- Environment determines whether this potential is reached
- Example: Genetically tall person with poor nutrition may not reach full height
- Well-nourished children today are taller than their ancestors (same genes, better nutrition)

**Why height shows continuous variation:**
- Many genes involved
- Many environmental factors
- Results in a range of heights, not distinct categories`,
        display_order: 2
      },
      {
        difficulty: 'hard',
        marks: 4,
        content: 'Identical twins share the same DNA. Scientists study twins to investigate whether characteristics are influenced by genes or environment. Explain how studies of identical twins raised apart can help determine the relative contributions of genes and environment to a characteristic.',
        solution: `**Why identical twins are useful:**
- Identical twins have **exactly the same DNA** (100% genetic match)
- Any differences between them must be due to **environment**
- Any similarities despite different environments suggest **genetic** influence

**Twins raised apart:**
- Same genes but **different environments**
- This separates the variables of genes and environment

**How the study works:**

1. **Measure a characteristic** in identical twins raised apart
   - Example: IQ scores, height, personality traits

2. **Compare the twins:**
   - If twins are similar despite different environments → **genes have strong influence**
   - If twins are different → **environment has strong influence**

**Example analysis:**
- Twins raised apart have IQ scores more similar than unrelated people
- But not identical, showing environment also matters
- Correlation gives estimate of genetic vs environmental contribution

**Limitations:**
- Twins raised apart are rare (small sample sizes)
- "Different environments" may still be quite similar (same country, similar family)
- Prenatal environment was shared
- Cannot account for all environmental variables

**What studies have shown:**
- Many characteristics have both genetic and environmental components
- Genetics often explains 40-80% of variation for traits like height, intelligence
- Environment accounts for the remainder`,
        display_order: 3
      }
    ]
  },
  {
    content: {
      level: 'gcse',
      subject: 'biology',
      exam_board: 'aqa',
      topic_slug: 'inheritance',
      subtopic_slug: 'evolution',
      title: 'Evolution | GCSE Biology',
      meta_description: 'Understand natural selection and evidence for evolution. GCSE Biology practice questions with detailed solutions.',
      introduction: `Evolution is the gradual change in the inherited characteristics of a population over many generations. Charles Darwin proposed the theory of evolution by natural selection in 1859, which explains how evolution occurs.

Natural selection works through several steps. Individuals in a population show variation in their characteristics. Some variations make individuals better adapted to their environment. Better-adapted individuals are more likely to survive, reproduce, and pass on their genes. Over time, advantageous characteristics become more common in the population.

Evidence for evolution comes from many sources. The fossil record shows how organisms have changed over time. Comparative anatomy shows similarities between species that suggest common ancestry. DNA analysis reveals genetic relationships between species. Observed evolution, such as antibiotic resistance in bacteria, provides direct evidence.

Speciation is the formation of new species. It occurs when populations of a species become so different that they can no longer interbreed to produce fertile offspring. This usually requires geographical isolation, allowing populations to evolve independently.`
    },
    questions: [
      {
        difficulty: 'easy',
        marks: 2,
        content: 'State what is meant by natural selection and name the scientist who proposed this theory.',
        solution: `**Natural selection:**
The process by which organisms with characteristics **better adapted** to their environment are more likely to **survive, reproduce, and pass on their genes** to the next generation.

Over time, advantageous characteristics become more common in the population.

**Scientist:**
**Charles Darwin** proposed the theory of natural selection (published in "On the Origin of Species" in 1859)

(Alfred Russel Wallace independently developed similar ideas)`,
        display_order: 1
      },
      {
        difficulty: 'medium',
        marks: 3,
        content: 'Explain how bacteria can evolve resistance to antibiotics through natural selection.',
        solution: `**How antibiotic resistance evolves:**

1. **Variation exists:**
   - In a population of bacteria, there is **genetic variation**
   - Some bacteria may have a **mutation** giving slight resistance to an antibiotic

2. **Selection pressure applied:**
   - Antibiotic is used
   - **Most bacteria are killed** by the antibiotic

3. **Survival of the fittest:**
   - Bacteria with resistance **survive**
   - Non-resistant bacteria die

4. **Reproduction:**
   - Resistant bacteria **reproduce**
   - They pass on the resistance gene to offspring
   - Population grows of resistant bacteria

5. **Over time:**
   - Resistant bacteria become **more common**
   - Eventually most of the population is resistant
   - The antibiotic no longer works

**Why this is concerning:**
- Overuse of antibiotics speeds up this process
- Creating "superbugs" that resist multiple antibiotics
- Some infections becoming untreatable`,
        display_order: 2
      },
      {
        difficulty: 'hard',
        marks: 4,
        content: 'Explain how geographical isolation can lead to the formation of new species (speciation).',
        solution: `**Steps in speciation by geographical isolation:**

**1. Population becomes separated:**
- A physical barrier divides a population
- Examples: mountains, rivers, islands forming, continental drift
- The two groups are **geographically isolated**
- Cannot interbreed with each other

**2. Different conditions and selection pressures:**
- The two environments may be **different**
- Different food sources, predators, climate
- Different selection pressures on each population

**3. Different adaptations evolve:**
- In each population, **natural selection** acts
- Different characteristics become advantageous
- Random **mutations** occur in each population
- Different alleles become common in each population
- **Genetic drift** may also cause differences

**4. Populations diverge:**
- Over many generations, populations become increasingly **different**
- Their genes and characteristics diverge
- Each population becomes adapted to their specific environment

**5. New species form:**
- Eventually, the populations are so different they can **no longer interbreed**
- Even if reunited, they cannot produce **fertile offspring**
- By definition, they are now **different species**

**Example:**
- Darwin's finches on Galápagos Islands
- Different islands had different food sources
- Finches evolved different beak shapes for different foods
- Multiple species evolved from one ancestral species`,
        display_order: 3
      }
    ]
  },
  {
    content: {
      level: 'gcse',
      subject: 'biology',
      exam_board: 'aqa',
      topic_slug: 'inheritance',
      subtopic_slug: 'selective-breeding',
      title: 'Selective Breeding | GCSE Biology',
      meta_description: 'Learn about selective breeding and its applications. GCSE Biology practice questions with solutions.',
      introduction: `Selective breeding (artificial selection) is the process by which humans breed plants and animals for particular genetic characteristics. Humans have used selective breeding for thousands of years to develop crops, livestock, and domestic animals with desirable traits.

The process involves choosing parents with desired characteristics and breeding them together. Offspring with the best characteristics are selected for the next generation of breeding. This is repeated over many generations until the desired traits are strong and consistent.

Examples of selective breeding include breeding cows that produce more milk, sheep with better wool, wheat with higher yields, dogs with specific appearances or behaviours, and disease-resistant crops. These have been crucial for agriculture and food production.

However, selective breeding reduces genetic variation in a population because only selected individuals breed. This can lead to inbreeding, where closely related individuals are bred together, which can cause health problems. Reduced genetic variation also means populations may be less able to adapt to new diseases or changing conditions.`
    },
    questions: [
      {
        difficulty: 'easy',
        marks: 2,
        content: 'Describe the basic process of selective breeding.',
        solution: `**Process of selective breeding:**

1. **Choose parents** with desired characteristics
2. **Breed them** together
3. **Select offspring** with the best characteristics
4. **Breed these offspring** together
5. **Repeat** over many generations

**Result:** The desired characteristics become stronger and more consistent in the population.

**Examples:** Breeding cattle for high milk yield, dogs for temperament, crops for disease resistance.`,
        display_order: 1
      },
      {
        difficulty: 'medium',
        marks: 3,
        content: 'A farmer wants to breed chickens that lay more eggs. Explain how they would use selective breeding to achieve this.',
        solution: `**Steps for breeding high-egg-laying chickens:**

**1. Identify desired characteristic:**
- High egg production (number of eggs per year)

**2. Select parents:**
- Choose female chickens that lay the **most eggs**
- Choose male chickens from high-producing family lines

**3. Breed selected chickens:**
- Allow chosen males and females to mate
- Collect and hatch the fertilised eggs

**4. Monitor offspring:**
- Raise offspring to maturity
- Record how many eggs each female produces

**5. Select best offspring:**
- Choose female offspring that produce the **most eggs**
- Choose male offspring from the highest-producing sisters

**6. Repeat the process:**
- Breed the best offspring together
- Continue for many generations

**Over time:**
- Average egg production increases each generation
- Eventually, all chickens in the flock have high egg production
- This has been done—modern chickens lay ~300 eggs/year vs ~20 for wild ancestors`,
        display_order: 2
      },
      {
        difficulty: 'hard',
        marks: 4,
        content: 'Discuss the advantages and disadvantages of selective breeding, including potential problems that could arise.',
        solution: `**Advantages of selective breeding:**

1. **Improved productivity:**
   - Higher crop yields
   - More milk, meat, eggs from livestock
   - Increased food production for growing population

2. **Desirable characteristics:**
   - Disease resistance in crops
   - Better taste or nutritional content
   - Animals better suited to purpose (working dogs, racing horses)

3. **Relatively simple:**
   - No advanced technology needed
   - Used successfully for thousands of years
   - Builds on natural processes

**Disadvantages and problems:**

1. **Reduced genetic variation:**
   - Only selected individuals breed
   - Gene pool becomes limited
   - Population less diverse

2. **Inbreeding:**
   - As variation decreases, related individuals are bred together
   - Can lead to **inherited diseases**
   - Accumulation of harmful recessive alleles
   - Example: hip dysplasia in purebred dogs

3. **Vulnerability to disease:**
   - Genetically similar populations can be wiped out by one disease
   - No genetic variation for resistance
   - Example: Panama disease in bananas

4. **Reduced ability to adapt:**
   - Less genetic variation for natural selection
   - Population may not survive environmental changes

5. **Welfare issues:**
   - Some bred characteristics cause health problems
   - Example: breathing problems in flat-faced dogs
   - Animals bred for one trait may suffer in other ways

**Summary:** Selective breeding is useful for producing desirable traits but must be managed carefully to maintain genetic diversity and animal welfare.`,
        display_order: 3
      }
    ]
  }
];
