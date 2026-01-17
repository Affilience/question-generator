import { SubtopicData } from '../bulk-seo-insert';

export const gcseChemistryAtomicStructure: SubtopicData[] = [
  {
    content: {
      level: 'gcse',
      subject: 'chemistry',
      exam_board: 'aqa',
      topic_slug: 'atomic-structure',
      subtopic_slug: 'atomic-structure',
      title: 'Atomic Structure | GCSE Chemistry',
      meta_description: 'Learn about atomic structure, protons, neutrons and electrons. GCSE Chemistry practice questions with step-by-step solutions.',
      introduction: `Atoms are the building blocks of all matter, and understanding their structure is fundamental to chemistry. Each atom consists of a tiny, dense nucleus containing protons and neutrons, surrounded by electrons arranged in shells at various distances from the nucleus.

Protons carry a positive charge (+1) and have a relative mass of 1. Neutrons have no charge (0) and also have a relative mass of 1. Together, they make up virtually all of an atom's mass. Electrons carry a negative charge (-1) and have negligible mass (about 1/2000 of a proton). In a neutral atom, the number of electrons equals the number of protons.

The atomic number defines which element an atom is—it equals the number of protons in the nucleus. The mass number equals the total number of protons and neutrons. Isotopes are atoms of the same element with different numbers of neutrons, meaning they have the same atomic number but different mass numbers.

Electrons occupy shells (energy levels) around the nucleus. The first shell holds up to 2 electrons, the second holds up to 8, and the third holds up to 8 (for GCSE purposes). The electronic configuration describes how electrons are arranged, such as 2,8,1 for sodium, and determines the element's chemical properties and position in the periodic table.`
    },
    questions: [
      {
        difficulty: 'easy',
        marks: 2,
        content: 'An atom of aluminium has 13 protons and 14 neutrons. State its atomic number, mass number, and number of electrons.',
        solution: `**Atomic number** = number of protons = **13**

**Mass number** = protons + neutrons = 13 + 14 = **27**

**Number of electrons** = number of protons (in neutral atom) = **13**`,
        display_order: 1
      },
      {
        difficulty: 'medium',
        marks: 3,
        content: 'Chlorine has two stable isotopes: chlorine-35 and chlorine-37. Both have 17 protons. Calculate the number of neutrons in each isotope and explain why they are isotopes.',
        solution: `**Chlorine-35:**
Neutrons = mass number - atomic number
Neutrons = 35 - 17 = **18 neutrons**

**Chlorine-37:**
Neutrons = 37 - 17 = **20 neutrons**

**Why they are isotopes:**
- Both atoms have the **same number of protons (17)**
- This means they are both chlorine atoms (same element)
- They have **different numbers of neutrons** (18 vs 20)
- This gives them different mass numbers (35 vs 37)

**Definition:** Isotopes are atoms of the same element with the same atomic number but different mass numbers.`,
        display_order: 2
      },
      {
        difficulty: 'hard',
        marks: 4,
        content: 'The relative atomic mass of chlorine is 35.5. Using the information that chlorine has two isotopes (chlorine-35 and chlorine-37), calculate the percentage abundance of each isotope.',
        solution: `Let x = percentage of chlorine-35
Then (100 - x) = percentage of chlorine-37

The relative atomic mass is the weighted average:
(35 × x + 37 × (100-x)) / 100 = 35.5

**Solving:**
35x + 3700 - 37x = 3550
-2x + 3700 = 3550
-2x = -150
x = 75

**Answer:**
- Chlorine-35: **75%** abundance
- Chlorine-37: **25%** abundance

**Check:** (35 × 75 + 37 × 25) / 100 = (2625 + 925) / 100 = 3550/100 = 35.5 ✓`,
        display_order: 3
      }
    ]
  },
  {
    content: {
      level: 'gcse',
      subject: 'chemistry',
      exam_board: 'aqa',
      topic_slug: 'atomic-structure',
      subtopic_slug: 'electronic-structure',
      title: 'Electronic Structure | GCSE Chemistry',
      meta_description: 'Master electron shells and electronic configurations. GCSE Chemistry practice questions with detailed worked solutions.',
      introduction: `Electrons are arranged in shells (energy levels) around the nucleus of an atom. This arrangement, called the electronic structure or electronic configuration, determines how an element behaves chemically and explains patterns in the periodic table.

The first shell, closest to the nucleus, can hold a maximum of 2 electrons. The second shell can hold up to 8 electrons, as can the third shell for elements up to calcium (at GCSE level). Electrons fill the shells starting from the innermost shell, occupying the lowest available energy level first.

Electronic configurations are written by listing the number of electrons in each shell, separated by commas. For example, oxygen with 8 electrons has the configuration 2,6 (2 in the first shell, 6 in the second). Potassium with 19 electrons has the configuration 2,8,8,1.

The electronic structure directly relates to an element's position in the periodic table. The number of shells occupied equals the period number, and the number of electrons in the outer shell equals the group number (for groups 1-7 and 0). This explains why elements in the same group have similar properties—they have the same number of outer shell electrons and therefore react in similar ways.`
    },
    questions: [
      {
        difficulty: 'easy',
        marks: 2,
        content: 'Write the electronic configuration of magnesium (atomic number 12) and calcium (atomic number 20).',
        solution: `**Magnesium (12 electrons):**
- First shell: 2 electrons
- Second shell: 8 electrons
- Third shell: 2 electrons
Electronic configuration: **2,8,2**

**Calcium (20 electrons):**
- First shell: 2 electrons
- Second shell: 8 electrons
- Third shell: 8 electrons
- Fourth shell: 2 electrons
Electronic configuration: **2,8,8,2**`,
        display_order: 1
      },
      {
        difficulty: 'medium',
        marks: 3,
        content: 'An element has the electronic configuration 2,8,7. Identify the element, state which group and period it belongs to, and predict whether it is a metal or non-metal.',
        solution: `**Identifying the element:**
Total electrons = 2 + 8 + 7 = 17
Atomic number = 17
Element = **Chlorine (Cl)**

**Group and period:**
- Number of shells = 3, therefore **Period 3**
- Electrons in outer shell = 7, therefore **Group 7** (halogens)

**Metal or non-metal:**
- **Non-metal**
- Located on the right side of the periodic table
- Group 7 elements are halogens, which are reactive non-metals
- Elements need to gain electrons to achieve a stable configuration (typical non-metal behaviour)`,
        display_order: 2
      },
      {
        difficulty: 'hard',
        marks: 4,
        content: 'Elements X and Y have electronic configurations 2,8,1 and 2,7 respectively. Predict the formula of the compound formed when these elements react together. Explain your reasoning.',
        solution: `**Identifying the elements:**
- Element X (2,8,1): 11 electrons → Sodium (Na)
- Element Y (2,7): 9 electrons → Fluorine (F)

**Predicting the compound formula:**

**Element X (Sodium):**
- Has 1 electron in outer shell
- Wants to lose 1 electron to achieve stable configuration (2,8)
- Forms Na⁺ ion (charge +1)

**Element Y (Fluorine):**
- Has 7 electrons in outer shell
- Wants to gain 1 electron to achieve stable configuration (2,8)
- Forms F⁻ ion (charge -1)

**Ratio of ions:**
- Each Na loses 1 electron, each F gains 1 electron
- Ratio is 1:1 for charges to balance
- 1 × (+1) + 1 × (-1) = 0 (neutral compound)

**Formula: NaF** (sodium fluoride)

The compound is an ionic compound with strong electrostatic attraction between Na⁺ and F⁻ ions.`,
        display_order: 3
      }
    ]
  },
  {
    content: {
      level: 'gcse',
      subject: 'chemistry',
      exam_board: 'aqa',
      topic_slug: 'bonding',
      subtopic_slug: 'ionic-bonding',
      title: 'Ionic Bonding | GCSE Chemistry',
      meta_description: 'Learn about ionic bonding, ion formation and properties of ionic compounds. GCSE Chemistry questions with step-by-step solutions.',
      introduction: `Ionic bonding occurs when electrons are transferred from metal atoms to non-metal atoms, creating oppositely charged ions that attract each other. This type of bonding typically occurs between elements from groups 1 or 2 (metals) and groups 6 or 7 (non-metals).

When a metal atom loses electrons, it becomes a positive ion (cation). When a non-metal atom gains electrons, it becomes a negative ion (anion). The strong electrostatic attraction between these oppositely charged ions is called ionic bonding. The ions arrange themselves in a regular pattern called a giant ionic lattice.

The number of electrons transferred depends on the electronic configuration of each atom. Metals lose their outer shell electrons to achieve a stable noble gas configuration, while non-metals gain electrons to fill their outer shell. For example, sodium (2,8,1) loses one electron to become Na⁺ (2,8), while chlorine (2,8,7) gains one electron to become Cl⁻ (2,8,8).

Ionic compounds have characteristic properties due to their structure. They have high melting and boiling points because of the strong electrostatic forces throughout the lattice. They conduct electricity when molten or dissolved (but not when solid) because the ions become free to move and carry charge.`
    },
    questions: [
      {
        difficulty: 'easy',
        marks: 2,
        content: 'Magnesium oxide is an ionic compound. State what happens to the electrons when magnesium reacts with oxygen.',
        solution: `When magnesium reacts with oxygen:

- **Magnesium atoms lose 2 electrons** each to form Mg²⁺ ions
- **Oxygen atoms gain 2 electrons** each to form O²⁻ ions

The electrons are **transferred** from magnesium to oxygen.

Both ions achieve stable noble gas electronic configurations (2,8 for Mg²⁺ and 2,8 for O²⁻).`,
        display_order: 1
      },
      {
        difficulty: 'medium',
        marks: 3,
        content: 'Explain why sodium chloride has a high melting point but can conduct electricity when dissolved in water.',
        solution: `**High melting point:**
- Sodium chloride has a giant ionic lattice structure
- Na⁺ and Cl⁻ ions are held together by strong electrostatic forces of attraction
- These forces act in all directions throughout the structure
- A lot of energy is needed to overcome these strong forces
- Therefore the melting point is high

**Conducts when dissolved:**
- In solid sodium chloride, the ions are fixed in position in the lattice
- They cannot move to carry charge, so the solid doesn't conduct
- When dissolved in water, the lattice breaks down
- The ions (Na⁺ and Cl⁻) become free to move throughout the solution
- These mobile ions can carry electrical charge
- Therefore it conducts electricity when dissolved`,
        display_order: 2
      },
      {
        difficulty: 'hard',
        marks: 4,
        content: 'Calcium chloride has the formula CaCl₂. Using dot and cross diagrams, show the formation of calcium chloride from calcium atoms and chlorine atoms. Explain why two chlorine atoms are needed.',
        solution: `**Electron configurations:**
- Calcium: 2,8,8,2 (2 electrons in outer shell)
- Chlorine: 2,8,7 (7 electrons in outer shell)

**What happens:**
- Calcium needs to lose 2 electrons to achieve a stable configuration (2,8,8)
- Each chlorine needs to gain 1 electron to achieve a stable configuration (2,8,8)
- Therefore 2 chlorine atoms are needed to accept the 2 electrons from 1 calcium atom

**Ions formed:**
- Ca → Ca²⁺ + 2e⁻ (calcium loses 2 electrons)
- 2Cl + 2e⁻ → 2Cl⁻ (each chlorine gains 1 electron)

**Dot and cross representation:**
- Ca²⁺: [2,8,8]²⁺ (empty outer shell shown)
- Cl⁻: [2,8,8]⁻ (8 electrons in outer shell, 1 crossed from Ca)

**Why CaCl₂:**
- Ca forms 2+ ions, Cl forms 1- ions
- For electrical neutrality: 1 × (+2) + 2 × (-1) = 0
- Ratio of Ca:Cl = 1:2
- Formula = **CaCl₂**`,
        display_order: 3
      }
    ]
  },
  {
    content: {
      level: 'gcse',
      subject: 'chemistry',
      exam_board: 'aqa',
      topic_slug: 'bonding',
      subtopic_slug: 'covalent-bonding',
      title: 'Covalent Bonding | GCSE Chemistry',
      meta_description: 'Master covalent bonding and molecular structures. GCSE Chemistry practice questions with detailed solutions.',
      introduction: `Covalent bonding occurs when atoms share pairs of electrons. This type of bonding happens between non-metal atoms that need to gain electrons to achieve stable configurations. By sharing electrons, both atoms can achieve a full outer shell without completely transferring electrons.

A single covalent bond involves one shared pair of electrons, with one electron contributed by each atom. Some elements can form double bonds (two shared pairs, e.g., O=O in oxygen) or triple bonds (three shared pairs, e.g., N≡N in nitrogen). The shared electrons are attracted to the nuclei of both atoms, holding them together.

Simple molecular substances have covalent bonds within molecules but weak intermolecular forces (forces between molecules). This explains their low melting and boiling points—it's the weak forces between molecules that break during melting, not the strong covalent bonds. Examples include water (H₂O), methane (CH₄), and carbon dioxide (CO₂).

Simple covalent molecules don't conduct electricity because they have no free electrons or ions to carry charge. Even when melted or dissolved, they remain as neutral molecules with no charged particles to move through the substance.`
    },
    questions: [
      {
        difficulty: 'easy',
        marks: 2,
        content: 'Hydrogen chloride (HCl) contains a covalent bond. Explain what is meant by a covalent bond.',
        solution: `A covalent bond is:

- A **shared pair of electrons** between two atoms
- One electron is contributed by each atom
- The shared pair is attracted to the nuclei of **both atoms**
- This attraction holds the atoms together

In HCl, the hydrogen atom contributes 1 electron and the chlorine atom contributes 1 electron to form the shared pair.`,
        display_order: 1
      },
      {
        difficulty: 'medium',
        marks: 3,
        content: 'Draw a dot and cross diagram for a molecule of water (H₂O), showing all the electrons in the outer shells. Explain why water has a low boiling point.',
        solution: `**Dot and cross diagram for H₂O:**
- Oxygen has 6 outer electrons (shown as dots)
- Each hydrogen has 1 outer electron (shown as crosses)
- Oxygen shares 1 electron with each hydrogen
- Oxygen has 2 bonding pairs and 2 lone pairs
- Each hydrogen has 1 bonding pair

[Structure shows O in centre with 2 lone pairs and bonds to 2 H atoms]

**Why water has a low boiling point:**
- Water molecules are held together by weak **intermolecular forces** (forces between molecules)
- Although the covalent bonds within molecules are strong, the forces between molecules are weak
- Only a small amount of energy is needed to overcome these weak intermolecular forces
- Therefore water has a **low boiling point** (100°C)
- The covalent bonds do not break during boiling—molecules separate but stay intact`,
        display_order: 2
      },
      {
        difficulty: 'hard',
        marks: 4,
        content: 'Nitrogen gas (N₂) contains a triple covalent bond, while oxygen gas (O₂) contains a double bond. Explain why nitrogen is less reactive than oxygen, and why both gases do not conduct electricity.',
        solution: `**Why nitrogen is less reactive than oxygen:**

**Nitrogen (N≡N):**
- Contains a triple bond (3 shared pairs = 6 electrons)
- Triple bonds are very strong
- Requires a large amount of energy to break
- Therefore nitrogen is relatively unreactive

**Oxygen (O=O):**
- Contains a double bond (2 shared pairs = 4 electrons)
- Double bonds are strong but weaker than triple bonds
- Less energy needed to break compared to nitrogen
- Therefore oxygen is more reactive than nitrogen

**Why neither conducts electricity:**
- Both are simple molecular substances
- They contain only neutral molecules
- There are no free electrons (all electrons are in covalent bonds or lone pairs)
- There are no ions
- Electrical conduction requires charged particles that are free to move
- Neither substance has mobile charged particles
- Therefore neither N₂ nor O₂ conducts electricity (in any state)`,
        display_order: 3
      }
    ]
  },
  {
    content: {
      level: 'gcse',
      subject: 'chemistry',
      exam_board: 'aqa',
      topic_slug: 'bonding',
      subtopic_slug: 'metallic-bonding',
      title: 'Metallic Bonding | GCSE Chemistry',
      meta_description: 'Understand metallic bonding and properties of metals. GCSE Chemistry practice questions with step-by-step solutions.',
      introduction: `Metallic bonding occurs in metals and is fundamentally different from ionic and covalent bonding. In metallic bonding, metal atoms lose their outer shell electrons, which become delocalised (free to move throughout the structure). The positive metal ions are held together by the attraction to this "sea" of delocalised electrons.

The structure of a metal can be visualised as a giant lattice of positive ions surrounded by a sea of delocalised electrons. The electrostatic attraction between the positive ions and the negatively charged electrons holds the structure together. This bonding extends throughout the entire piece of metal.

Metallic bonding explains many characteristic properties of metals. The delocalised electrons can move freely, allowing metals to conduct electricity and heat efficiently. When a force is applied, layers of ions can slide over each other without breaking the metallic bonds, making metals malleable (can be hammered into shapes) and ductile (can be drawn into wires).

Metals generally have high melting and boiling points because of the strong electrostatic attraction between the ions and the delocalised electrons. The more outer electrons an atom can contribute to the sea, and the smaller the ion, the stronger the metallic bonding and the higher the melting point.`
    },
    questions: [
      {
        difficulty: 'easy',
        marks: 2,
        content: 'Describe the bonding in metals in terms of electrons and ions.',
        solution: `In metallic bonding:

- Metal atoms **lose their outer shell electrons**
- These electrons become **delocalised** (free to move throughout the structure)
- This creates a lattice of **positive metal ions**
- Surrounded by a "**sea of delocalised electrons**"
- The ions and electrons are held together by **electrostatic attraction** between the positive ions and negative electrons`,
        display_order: 1
      },
      {
        difficulty: 'medium',
        marks: 3,
        content: 'Explain why metals are good conductors of electricity and can be bent into shapes without breaking.',
        solution: `**Good conductors of electricity:**
- Metals contain **delocalised electrons** that are free to move
- When a voltage is applied, these electrons can flow through the metal
- The movement of charged particles (electrons) is an electric current
- Therefore metals conduct electricity

**Can be bent without breaking (malleable):**
- Metals have layers of positive ions
- The delocalised electrons act as a "glue" between layers
- When a force is applied, layers of ions can **slide over each other**
- The delocalised electrons can move with the ions
- The metallic bonding is maintained in the new position
- The metal changes shape without the bonds breaking
- Therefore metals are malleable and ductile`,
        display_order: 2
      },
      {
        difficulty: 'hard',
        marks: 4,
        content: 'Magnesium has a melting point of 650°C while sodium has a melting point of 98°C. Both are metals. Explain this difference in terms of their metallic bonding.',
        solution: `**Comparing sodium and magnesium:**

| Property | Sodium | Magnesium |
|----------|--------|-----------|
| Electrons lost | 1 | 2 |
| Ion formed | Na⁺ | Mg²⁺ |
| Ion charge | +1 | +2 |
| Ion size | Larger | Smaller |
| Delocalised electrons | 1 per atom | 2 per atom |

**Why magnesium has a higher melting point:**

1. **More delocalised electrons:**
   - Magnesium contributes 2 electrons per atom to the sea
   - Sodium contributes only 1 electron per atom
   - More electrons = stronger attraction

2. **Higher charge on ion:**
   - Mg²⁺ has charge +2, Na⁺ has charge +1
   - Greater charge = stronger electrostatic attraction

3. **Smaller ionic radius:**
   - Mg²⁺ is smaller than Na⁺
   - Electrons are closer to the positive ions
   - Closer distance = stronger attraction

**Conclusion:** Magnesium has stronger metallic bonding due to more delocalised electrons, higher ionic charge, and smaller ionic size. More energy is needed to overcome these stronger forces, so the melting point is higher.`,
        display_order: 3
      }
    ]
  },
  {
    content: {
      level: 'gcse',
      subject: 'chemistry',
      exam_board: 'aqa',
      topic_slug: 'bonding',
      subtopic_slug: 'giant-covalent-structures',
      title: 'Giant Covalent Structures | GCSE Chemistry',
      meta_description: 'Learn about diamond, graphite and silicon dioxide structures. GCSE Chemistry practice questions with worked solutions.',
      introduction: `Giant covalent structures are substances where billions of atoms are joined together by covalent bonds in a continuous network. Unlike simple molecular substances, giant covalent structures have very high melting points because breaking them requires breaking many strong covalent bonds, not just weak intermolecular forces.

Diamond is a giant covalent structure of carbon atoms. Each carbon atom forms four covalent bonds arranged tetrahedrally, creating a rigid three-dimensional structure. This makes diamond the hardest naturally occurring substance and gives it a very high melting point (about 3500°C). Diamond does not conduct electricity because all electrons are fixed in covalent bonds.

Graphite is also a giant covalent structure of carbon atoms, but with a different arrangement. Each carbon forms three bonds to create flat hexagonal layers. The fourth electron from each carbon is delocalised within the layers, allowing graphite to conduct electricity. Weak forces between layers allow them to slide, making graphite soft and useful as a lubricant.

Silicon dioxide (silica) is another giant covalent structure where each silicon atom bonds to four oxygen atoms. Like diamond, it has a high melting point and doesn't conduct electricity. Graphene, a single layer of graphite, has remarkable properties including strength, conductivity, and flexibility.`
    },
    questions: [
      {
        difficulty: 'easy',
        marks: 2,
        content: 'Explain why diamond has a very high melting point.',
        solution: `Diamond has a very high melting point because:

- It has a **giant covalent structure**
- Every carbon atom is bonded to **four other carbon atoms**
- The bonds are **strong covalent bonds**
- These bonds extend throughout the entire structure
- **Many strong bonds** must be broken to melt diamond
- This requires a **large amount of energy**
- Therefore the melting point is very high (~3500°C)`,
        display_order: 1
      },
      {
        difficulty: 'medium',
        marks: 3,
        content: 'Graphite can conduct electricity but diamond cannot. Both are made of carbon atoms. Explain this difference.',
        solution: `**Why graphite conducts:**
- Each carbon atom forms only **3 covalent bonds** (not 4)
- This leaves one electron per carbon atom **unused for bonding**
- These electrons become **delocalised** (free to move)
- The delocalised electrons can move along the layers
- Moving electrons = electric current
- Therefore graphite **conducts electricity**

**Why diamond does not conduct:**
- Each carbon atom forms **4 covalent bonds**
- All outer electrons are used in bonding
- There are **no delocalised electrons**
- No free electrons to carry charge
- Therefore diamond **cannot conduct electricity**

**Key difference:** Graphite has delocalised electrons; diamond does not.`,
        display_order: 2
      },
      {
        difficulty: 'hard',
        marks: 4,
        content: 'Graphene is a single layer of graphite. It is very strong yet flexible, and conducts electricity. Explain these properties in terms of its structure and bonding.',
        solution: `**Structure of graphene:**
- Single layer of carbon atoms
- Arranged in hexagons (honeycomb pattern)
- Each carbon bonds to 3 other carbons
- One electron per carbon is delocalised

**Very strong:**
- Carbon atoms are held by **strong covalent bonds**
- Covalent bonds are very difficult to break
- The hexagonal arrangement distributes forces evenly
- No weak points in the structure when force is applied in the plane
- Therefore graphene is extremely strong (stronger than steel per unit mass)

**Flexible:**
- It's only one atom thick
- Although bonds are strong, the single layer can bend
- There are no rigid 3D constraints (unlike diamond)
- The sheet can curve without breaking bonds

**Conducts electricity:**
- Each carbon contributes one **delocalised electron**
- These electrons can move freely across the layer
- Creates a "sea" of mobile electrons (like metals)
- Moving electrons carry electrical charge
- Therefore graphene conducts electricity well

**Summary:** The combination of strong covalent bonds (strength), 2D structure (flexibility), and delocalised electrons (conductivity) gives graphene its remarkable properties.`,
        display_order: 3
      }
    ]
  }
];
