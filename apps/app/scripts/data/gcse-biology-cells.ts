import { SubtopicData } from '../bulk-seo-insert';

export const gcseBiologyCells: SubtopicData[] = [
  {
    content: {
      level: 'gcse',
      subject: 'biology',
      exam_board: 'aqa',
      topic_slug: 'cell-biology',
      subtopic_slug: 'cell-structure',
      title: 'Cell Structure | GCSE Biology',
      meta_description: 'Learn about animal and plant cell structures and their functions. GCSE Biology practice questions with step-by-step solutions.',
      introduction: `Cells are the basic building blocks of all living organisms. Understanding cell structure is fundamental to biology, as all life processes occur within cells. There are two main types of cells: prokaryotic cells (bacteria) and eukaryotic cells (plants, animals, fungi).

Animal cells contain several key organelles. The nucleus contains genetic material (DNA) and controls cell activities. The cytoplasm is a jelly-like substance where chemical reactions occur. The cell membrane controls what enters and leaves the cell. Mitochondria are where aerobic respiration takes place, releasing energy. Ribosomes are where protein synthesis occurs.

Plant cells have all the structures found in animal cells, plus additional features. The cell wall made of cellulose provides structure and support. The permanent vacuole contains cell sap and helps maintain turgor pressure. Chloroplasts contain chlorophyll and are the site of photosynthesis.

The differences between plant and animal cells relate to their different lifestyles. Plants need cell walls for support since they don't have skeletons. They need chloroplasts to make their own food through photosynthesis. The permanent vacuole helps maintain cell shape and stores substances.`
    },
    questions: [
      {
        difficulty: 'easy',
        marks: 2,
        content: 'Name three structures found in both plant and animal cells, and state the function of each.',
        solution: `**Three structures in both plant and animal cells:**

| Structure | Function |
|-----------|----------|
| **Nucleus** | Contains genetic material (DNA); controls cell activities |
| **Cytoplasm** | Site of chemical reactions; contains enzymes |
| **Cell membrane** | Controls what substances enter and leave the cell |

(Also acceptable: mitochondria - site of aerobic respiration; ribosomes - site of protein synthesis)`,
        display_order: 1
      },
      {
        difficulty: 'medium',
        marks: 3,
        content: 'Explain why plant cells have chloroplasts but animal cells do not.',
        solution: `**Why plant cells have chloroplasts:**
- Plants are **autotrophs** - they make their own food
- Chloroplasts are the site of **photosynthesis**
- They contain the pigment **chlorophyll**
- Chlorophyll absorbs **light energy** for photosynthesis
- This converts carbon dioxide and water into glucose

**Why animal cells don't have chloroplasts:**
- Animals are **heterotrophs** - they obtain food by eating other organisms
- Animals **cannot photosynthesise**
- They don't need chloroplasts because they get glucose from their diet
- Having chloroplasts would use energy and resources without benefit

**Key point:** The presence or absence of chloroplasts relates to how organisms obtain their nutrition.`,
        display_order: 2
      },
      {
        difficulty: 'hard',
        marks: 4,
        content: 'Compare the structure of a prokaryotic cell (bacterium) with a eukaryotic cell. Explain how the differences relate to the complexity of each cell type.',
        solution: `**Structural comparison:**

| Feature | Prokaryotic (bacterium) | Eukaryotic (plant/animal) |
|---------|------------------------|---------------------------|
| Nucleus | No true nucleus; DNA in nucleoid region | True nucleus with nuclear membrane |
| DNA | Single circular chromosome + plasmids | Linear chromosomes in nucleus |
| Membrane-bound organelles | None | Mitochondria, (chloroplasts in plants) |
| Ribosomes | Smaller (70S) | Larger (80S) |
| Cell wall | Present (peptidoglycan) | Present in plants (cellulose), absent in animals |
| Size | Smaller (1-5 μm) | Larger (10-100 μm) |

**How differences relate to complexity:**

1. **No nucleus in prokaryotes:**
   - DNA is not separated from cytoplasm
   - Less control over gene expression
   - Simpler regulation of cell processes

2. **No membrane-bound organelles:**
   - Chemical reactions occur in cytoplasm
   - Less compartmentalisation
   - Fewer specialised functions possible

3. **Plasmids:**
   - Allow rapid sharing of genes (e.g., antibiotic resistance)
   - Simple but effective adaptation mechanism

**Conclusion:** Prokaryotes are simpler, more ancient cells. Eukaryotes evolved later with more complex, compartmentalised structures allowing more sophisticated cell functions and larger organisms.`,
        display_order: 3
      }
    ]
  },
  {
    content: {
      level: 'gcse',
      subject: 'biology',
      exam_board: 'aqa',
      topic_slug: 'cell-biology',
      subtopic_slug: 'microscopy',
      title: 'Microscopy | GCSE Biology',
      meta_description: 'Master microscopy calculations, magnification and resolution. GCSE Biology practice questions with worked solutions.',
      introduction: `Microscopes allow us to see structures too small for the naked eye. Light microscopes use visible light and glass lenses to magnify specimens up to about 1500×. Electron microscopes use beams of electrons and can achieve magnifications of up to 2,000,000×, revealing much finer detail.

Magnification tells us how much larger the image is compared to the real object. The formula is: magnification = image size ÷ actual size, or M = I/A. This can be rearranged to find image size (I = M × A) or actual size (A = I/M).

Resolution is the ability to distinguish between two points that are close together. Higher resolution means more detail can be seen. Light microscopes have a resolution limit of about 200 nm due to the wavelength of light. Electron microscopes have much better resolution (around 0.2 nm) because electrons have a much shorter wavelength.

When using microscopes, it's important to understand units. Cells are typically measured in micrometres (μm). 1 mm = 1000 μm, and 1 μm = 1000 nm. Converting between units is essential for magnification calculations.`
    },
    questions: [
      {
        difficulty: 'easy',
        marks: 2,
        content: 'A cell has an actual size of 50 μm. It is viewed under a microscope at 400× magnification. Calculate the size of the image.',
        solution: `Using the magnification formula: M = I/A

Rearranging for image size: I = M × A

I = 400 × 50 μm
I = 20,000 μm

Converting to mm: 20,000 ÷ 1000 = **20 mm**

(Or the answer can be left as 20,000 μm)`,
        display_order: 1
      },
      {
        difficulty: 'medium',
        marks: 3,
        content: 'In a photograph, a mitochondrion measures 30 mm. The magnification is ×15,000. Calculate the actual size of the mitochondrion in micrometres.',
        solution: `**Step 1: Use the magnification formula**
M = I/A, rearranging for A: A = I/M

**Step 2: Calculate actual size**
A = 30 mm ÷ 15,000
A = 0.002 mm

**Step 3: Convert to micrometres**
0.002 mm × 1000 = **2 μm**

**Check:** This is a sensible size for a mitochondrion (typically 1-10 μm).

**Alternative method:**
Convert 30 mm to μm first: 30 × 1000 = 30,000 μm
Then: 30,000 ÷ 15,000 = **2 μm**`,
        display_order: 2
      },
      {
        difficulty: 'hard',
        marks: 4,
        content: 'Explain why electron microscopes can reveal more detail about cell structure than light microscopes, and describe one limitation of using electron microscopes to study cells.',
        solution: `**Why electron microscopes reveal more detail:**

1. **Better resolution:**
   - Resolution is the ability to distinguish between two points close together
   - Light microscopes: resolution limit ~200 nm
   - Electron microscopes: resolution limit ~0.2 nm
   - This is 1000× better resolution

2. **Why electrons give better resolution:**
   - Resolution is limited by wavelength of radiation used
   - Visible light has wavelength ~400-700 nm
   - Electrons have much shorter wavelength
   - Shorter wavelength = better resolution

3. **Higher magnification:**
   - Light microscopes: up to ~1500×
   - Electron microscopes: up to ~2,000,000×
   - More detail visible at higher magnification

**Limitations of electron microscopes:**

- **Cannot view living specimens:**
  - Specimens must be placed in a vacuum
  - Cells must be dehydrated and stained with heavy metals
  - The preparation process kills cells
  - Cannot observe living processes (e.g., cell division in real time)

(Other acceptable limitations: expensive, large equipment, requires trained operators, lengthy preparation, specimens may be distorted by preparation)`,
        display_order: 3
      }
    ]
  },
  {
    content: {
      level: 'gcse',
      subject: 'biology',
      exam_board: 'aqa',
      topic_slug: 'cell-biology',
      subtopic_slug: 'cell-division',
      title: 'Cell Division | GCSE Biology',
      meta_description: 'Learn about mitosis and the cell cycle. GCSE Biology practice questions with step-by-step solutions.',
      introduction: `Cell division is essential for growth, repair, and reproduction. In multicellular organisms, mitosis produces new cells for growth and to replace damaged cells. The cell cycle describes the sequence of events as a cell grows and divides.

The cell cycle has three main stages. During interphase, the cell grows, carries out normal functions, and replicates its DNA. During mitosis, the nucleus divides into two identical nuclei. During cytokinesis, the cytoplasm divides, producing two daughter cells.

Mitosis ensures that both daughter cells receive an exact copy of the parent cell's DNA. Before mitosis, each chromosome is copied, forming two identical sister chromatids joined at the centromere. During mitosis, these chromatids separate, and one complete set of chromosomes moves to each end of the cell.

The result of mitosis is two genetically identical daughter cells, each with the same number of chromosomes as the parent cell. This is important for growth and repair, where cells need to be identical to maintain tissue function. Unlike meiosis, mitosis does not produce variation.`
    },
    questions: [
      {
        difficulty: 'easy',
        marks: 2,
        content: 'State two reasons why organisms need to carry out mitosis.',
        solution: `**Two reasons for mitosis:**

1. **Growth** - producing new cells to increase the size of the organism

2. **Repair/replacement** - producing new cells to replace damaged or dead cells (e.g., wound healing, replacing skin cells)

(Also acceptable: asexual reproduction in some organisms, maintaining genetic stability)`,
        display_order: 1
      },
      {
        difficulty: 'medium',
        marks: 3,
        content: 'A human body cell contains 46 chromosomes. Describe what happens to the chromosomes during the cell cycle so that each daughter cell also has 46 chromosomes.',
        solution: `**During interphase (before mitosis):**
1. DNA replication occurs
2. Each chromosome is copied to form two identical **sister chromatids**
3. The cell now contains 92 chromatids (46 pairs)
4. Sister chromatids remain joined at the **centromere**

**During mitosis:**
1. Chromosomes condense and become visible
2. The nuclear membrane breaks down
3. **Spindle fibres** attach to the centromeres
4. Sister chromatids are pulled apart to opposite poles of the cell
5. Each pole receives one chromatid from each pair
6. Nuclear membranes form around each set of chromosomes
7. Each new nucleus contains 46 chromosomes

**During cytokinesis:**
8. The cytoplasm divides
9. Two daughter cells are formed, each with 46 chromosomes

**Result:** Two genetically identical cells, each with the full set of 46 chromosomes.`,
        display_order: 2
      },
      {
        difficulty: 'hard',
        marks: 4,
        content: 'Cancer is caused by uncontrolled cell division. Explain how changes to the cell cycle can lead to cancer, and suggest why cancer cells form tumours.',
        solution: `**How changes lead to cancer:**

1. **Mutations in genes controlling the cell cycle:**
   - Normal cells have genes that regulate when cells divide
   - Mutations can occur in proto-oncogenes (become oncogenes) or tumour suppressor genes

2. **Loss of normal controls:**
   - Cells ignore signals to stop dividing
   - Checkpoints in the cell cycle are bypassed
   - Cells don't respond to contact inhibition (normally stops division when cells touch)
   - Apoptosis (programmed cell death) doesn't occur when it should

3. **Uncontrolled mitosis:**
   - Cells divide rapidly and continuously
   - Division occurs without proper DNA checking
   - More mutations may accumulate

**Why tumours form:**

1. **Rapid, uncontrolled division:**
   - Cancer cells divide much faster than normal cells
   - More cells are produced than die

2. **Cells accumulate:**
   - Excess cells build up and form a mass (tumour)
   - The tumour grows as cells continue dividing

3. **No normal tissue organisation:**
   - Cancer cells don't respond to signals from surrounding tissue
   - They don't differentiate properly
   - They may invade surrounding tissues (malignant tumours)
   - They may spread to other parts of the body (metastasis)`,
        display_order: 3
      }
    ]
  },
  {
    content: {
      level: 'gcse',
      subject: 'biology',
      exam_board: 'aqa',
      topic_slug: 'cell-biology',
      subtopic_slug: 'transport-in-cells',
      title: 'Transport in Cells | GCSE Biology',
      meta_description: 'Master diffusion, osmosis and active transport. GCSE Biology practice questions with detailed solutions.',
      introduction: `Substances need to move in and out of cells for metabolism and to maintain cell function. There are three main methods of transport: diffusion, osmosis, and active transport. Each method moves different substances under different conditions.

Diffusion is the net movement of particles from an area of higher concentration to an area of lower concentration. It is a passive process requiring no energy. Oxygen, carbon dioxide, and dissolved nutrients move by diffusion. The rate of diffusion is affected by concentration gradient, temperature, surface area, and distance.

Osmosis is the movement of water molecules across a partially permeable membrane from an area of higher water concentration to lower water concentration. This is equivalent to saying water moves from a dilute solution to a more concentrated solution. Osmosis is crucial for water uptake in plant roots and for controlling cell water content.

Active transport moves substances against their concentration gradient—from lower to higher concentration. This requires energy from respiration and uses carrier proteins in the cell membrane. Plants use active transport to absorb mineral ions from soil, and the gut uses it to absorb glucose and amino acids.`
    },
    questions: [
      {
        difficulty: 'easy',
        marks: 2,
        content: 'Explain what is meant by diffusion and give one example of diffusion in living organisms.',
        solution: `**Definition of diffusion:**
The net movement of particles from an area of **higher concentration** to an area of **lower concentration**.

It is a **passive process** (no energy required).

**Example in living organisms:**
- Gas exchange in the lungs: **oxygen diffuses** from the alveoli (high concentration) into the blood (lower concentration)

(Other acceptable examples: carbon dioxide diffusing from blood to alveoli, oxygen diffusing from blood into respiring cells, nutrients diffusing from gut into blood)`,
        display_order: 1
      },
      {
        difficulty: 'medium',
        marks: 3,
        content: 'A piece of potato was placed in pure water for 30 minutes. It increased in mass. Explain this observation in terms of osmosis.',
        solution: `**Explanation:**

1. **Initial conditions:**
   - Pure water has a **higher water concentration** (no dissolved solutes)
   - Potato cells contain dissolved solutes (sugars, salts) so have **lower water concentration**

2. **Osmosis occurs:**
   - Water molecules move across the **partially permeable membrane** (cell membrane)
   - Movement is from higher water concentration (pure water) to lower water concentration (inside potato cells)
   - This is **osmosis**

3. **Result:**
   - Water enters the potato cells
   - The cells gain water and become **turgid**
   - The total mass increases

4. **The mass increase shows:**
   - More water entered the cells than left
   - Net movement of water into the potato`,
        display_order: 2
      },
      {
        difficulty: 'hard',
        marks: 4,
        content: 'Explain why plants need to use active transport to absorb mineral ions from the soil, and describe how the process of active transport works.',
        solution: `**Why active transport is needed:**

1. **Concentration difference:**
   - Mineral ions (e.g., nitrates, magnesium) are often at **higher concentration** inside root hair cells than in the soil
   - Plants need to absorb minerals against this concentration gradient
   - Diffusion would move minerals OUT of the root (wrong direction)

2. **Minerals are essential:**
   - Plants need minerals for growth and metabolism
   - They cannot simply wait for diffusion
   - Active transport allows uptake regardless of concentration

**How active transport works:**

1. **Energy requirement:**
   - The process requires **energy from respiration (ATP)**
   - Root cells have many **mitochondria** to provide this energy

2. **Carrier proteins:**
   - Specific **carrier proteins** are embedded in the cell membrane
   - These bind to specific mineral ions

3. **The mechanism:**
   - Mineral ion binds to carrier protein on outside of membrane
   - Energy (ATP) causes the protein to **change shape**
   - The ion is moved across the membrane
   - Ion is released **inside** the cell
   - Protein returns to original shape

4. **Selectivity:**
   - Different carrier proteins for different ions
   - Allows selective uptake of needed minerals`,
        display_order: 3
      }
    ]
  },
  {
    content: {
      level: 'gcse',
      subject: 'biology',
      exam_board: 'aqa',
      topic_slug: 'cell-biology',
      subtopic_slug: 'stem-cells',
      title: 'Stem Cells | GCSE Biology',
      meta_description: 'Learn about stem cells, differentiation and their medical uses. GCSE Biology practice questions with solutions.',
      introduction: `Stem cells are undifferentiated cells that can divide to produce more stem cells or differentiate into specialised cell types. They are found in embryos and in some adult tissues. Stem cells offer exciting possibilities for treating diseases but also raise ethical questions.

Embryonic stem cells are found in early embryos and can differentiate into any cell type—they are described as pluripotent. This makes them potentially useful for replacing damaged cells in many different tissues. Adult stem cells are found in specific tissues like bone marrow and can only differentiate into a limited range of cell types.

Differentiation is the process by which cells become specialised for particular functions. As cells differentiate, they develop specific structures suited to their role: muscle cells develop contractile proteins, nerve cells grow long extensions, and red blood cells lose their nucleus. In animal cells, differentiation is largely complete early in development.

Therapeutic uses of stem cells include treating blood diseases with bone marrow transplants, growing replacement tissues, and potentially treating conditions like diabetes, paralysis, and Alzheimer's disease. However, the use of embryonic stem cells raises ethical concerns about destroying embryos.`
    },
    questions: [
      {
        difficulty: 'easy',
        marks: 2,
        content: 'What is a stem cell, and where are stem cells found in humans?',
        solution: `**What is a stem cell:**
A stem cell is an **undifferentiated cell** that can:
- Divide to produce more stem cells
- **Differentiate** into specialised cell types

**Where stem cells are found in humans:**

1. **Embryos** - embryonic stem cells can become any cell type

2. **Adult tissues** - found in specific locations such as:
   - **Bone marrow** (can form blood cells)
   - Skin
   - Brain
   - Gut lining`,
        display_order: 1
      },
      {
        difficulty: 'medium',
        marks: 3,
        content: 'Explain why embryonic stem cells are considered more useful for medical treatments than adult stem cells.',
        solution: `**Why embryonic stem cells are more useful:**

1. **Can form any cell type (pluripotent):**
   - Embryonic stem cells can differentiate into **any cell type** in the body
   - Adult stem cells can only form a **limited range** of cell types
   - This means embryonic cells could treat a wider range of diseases

2. **Greater flexibility:**
   - Embryonic stem cells could replace cells in any organ or tissue
   - Adult stem cells from bone marrow mainly produce blood cells
   - For treating conditions like heart disease or nerve damage, embryonic cells are more suitable

3. **Divide more readily:**
   - Embryonic stem cells divide more quickly
   - Easier to grow large numbers in the laboratory
   - Adult stem cells are harder to extract and multiply

**However:**
- Embryonic stem cells raise ethical concerns about using embryos
- Adult stem cells avoid these concerns but have limited uses`,
        display_order: 2
      },
      {
        difficulty: 'hard',
        marks: 4,
        content: 'Stem cell research could potentially treat paralysis by replacing damaged nerve cells. Discuss the potential benefits and ethical concerns of using embryonic stem cells for this treatment.',
        solution: `**Potential benefits:**

1. **Restore function:**
   - Could repair damaged spinal cord nerves
   - May allow paralysed patients to walk again
   - Improve quality of life significantly

2. **No alternative treatment:**
   - Currently, paralysis from nerve damage is often permanent
   - Stem cells offer hope where other treatments fail
   - Could help thousands of patients

3. **Better than existing treatments:**
   - Current treatments only manage symptoms
   - Stem cells could provide actual cure
   - Reduce long-term healthcare costs

**Ethical concerns:**

1. **Destruction of embryos:**
   - Obtaining embryonic stem cells destroys the embryo
   - Some believe life begins at conception
   - Some view this as morally equivalent to taking a life

2. **Status of embryos:**
   - Debate about whether embryos have rights
   - When does an embryo become a person?
   - Religious and cultural views differ

3. **Source of embryos:**
   - Often from unused IVF embryos
   - Should embryos be created for research?
   - Concerns about commodification of human life

4. **Consent issues:**
   - Who consents for the embryo?
   - Can parents consent to destruction?

**Balancing view:**
- Many argue the embryo cannot suffer and the potential to save/improve lives justifies the research
- Others argue adult stem cells or induced pluripotent stem cells could be used instead`,
        display_order: 3
      }
    ]
  }
];
