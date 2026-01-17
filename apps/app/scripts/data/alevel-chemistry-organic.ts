import { SubtopicData } from '../bulk-seo-insert';

export const alevelChemistryOrganic: SubtopicData[] = [
  {
    content: {
      level: 'a-level',
      subject: 'chemistry',
      exam_board: 'aqa',
      topic_slug: 'organic-chemistry',
      subtopic_slug: 'organic-mechanisms',
      title: 'Organic Mechanisms | A-Level Chemistry',
      meta_description: 'Master organic reaction mechanisms including nucleophilic substitution and elimination. A-Level Chemistry practice questions with solutions.',
      introduction: `Organic reaction mechanisms explain how reactions occur at the molecular level, showing the movement of electrons as bonds break and form. Understanding mechanisms allows you to predict products and explain reaction conditions.

Curly arrows show electron movement. A full arrow represents the movement of a pair of electrons, while a half arrow (fishhook) shows the movement of a single electron. Arrows always point from the electron source to the electron sink.

Key mechanism types include nucleophilic substitution (SN1 and SN2), nucleophilic addition, electrophilic addition, elimination, and radical substitution. Each has characteristic conditions and substrates.

Nucleophiles are electron-rich species that attack positive or δ+ centres. Examples include OH⁻, CN⁻, NH₃, and H₂O. Electrophiles are electron-deficient species that attack negative or δ- centres. Examples include H⁺, NO₂⁺, and carbocations.`
    },
    questions: [
      {
        difficulty: 'easy',
        marks: 3,
        content: 'Define the term nucleophile and give two examples.',
        solution: `**Definition of nucleophile:**
A nucleophile is an electron-rich species that can donate a pair of electrons to form a covalent bond.

(Or: A species that attacks a region of positive charge/electron-deficient carbon)

**Two examples:**
1. **Hydroxide ion (OH⁻)** - has a negative charge and lone pairs available for donation
2. **Ammonia (NH₃)** - has a lone pair of electrons on nitrogen that can be donated

(Other acceptable examples: CN⁻, H₂O, Br⁻, alcohols, amines)`,
        display_order: 1
      },
      {
        difficulty: 'medium',
        marks: 4,
        content: 'Draw the mechanism for the reaction of bromoethane with hydroxide ions in aqueous conditions. Name the mechanism and explain why it occurs.',
        solution: `**Mechanism: Nucleophilic Substitution (SN2)**

**Step (single concerted step):**
\`\`\`
   δ-    δ+
HO: → CH₃—CH₂—Br: → HO—CH₂—CH₃ + Br⁻
\`\`\`

- Curly arrow from lone pair on OH⁻ to δ+ carbon
- Curly arrow from C-Br bond to Br
- Both events occur simultaneously

**Why this mechanism occurs:**
1. Bromoethane is a **primary halogenoalkane** - SN2 is favoured
2. The carbon bonded to bromine has a **δ+ charge** (C-Br bond is polar)
3. **Hydroxide is a strong nucleophile** - it attacks the δ+ carbon
4. As the new C-O bond forms, the C-Br bond breaks
5. Bromine leaves as bromide ion (good leaving group)

**Product:** Ethanol (CH₃CH₂OH)`,
        display_order: 2
      },
      {
        difficulty: 'hard',
        marks: 5,
        content: 'Explain why 2-bromo-2-methylpropane reacts much faster with hydroxide ions than 1-bromobutane does. Include mechanisms in your answer.',
        solution: `**Comparison:**
- 2-bromo-2-methylpropane: (CH₃)₃CBr - **tertiary** halogenoalkane
- 1-bromobutane: CH₃CH₂CH₂CH₂Br - **primary** halogenoalkane

**1-Bromobutane reacts by SN2:**
- Single step, bimolecular
- Rate depends on both [halogenoalkane] and [nucleophile]
- Mechanism: OH⁻ attacks carbon from opposite side to leaving group
- Works well for primary halogenoalkanes (unhindered)

**2-Bromo-2-methylpropane reacts by SN1:**
- Two-step mechanism:
  1. C-Br bond breaks heterolytically → carbocation + Br⁻ (slow, rate-determining)
  2. OH⁻ attacks carbocation → product (fast)
- Rate only depends on [halogenoalkane]

**Why tertiary is faster:**
1. **SN2 is blocked:** Three methyl groups sterically hinder nucleophilic attack from the back
2. **SN1 is favoured:** The tertiary carbocation is **stabilised by three alkyl groups** (inductive effect/hyperconjugation)
3. Stabilised carbocation forms more readily
4. Once formed, it reacts rapidly with OH⁻

**Key point:** The greater stability of the tertiary carbocation makes SN1 much faster than the sterically hindered SN2 would be for this substrate.`,
        display_order: 3
      }
    ]
  },
  {
    content: {
      level: 'a-level',
      subject: 'chemistry',
      exam_board: 'aqa',
      topic_slug: 'organic-chemistry',
      subtopic_slug: 'carbonyl-compounds',
      title: 'Carbonyl Compounds | A-Level Chemistry',
      meta_description: 'Master aldehydes and ketones including reactions and tests. A-Level Chemistry practice questions with step-by-step solutions.',
      introduction: `Carbonyl compounds contain the C=O functional group. Aldehydes have the carbonyl at the end of the carbon chain (RCHO), while ketones have it in the middle (RCOR'). This difference in structure leads to different reactivities.

The C=O bond is polar, with the carbon being δ+ and the oxygen δ-. This makes the carbonyl carbon susceptible to attack by nucleophiles. Nucleophilic addition is the characteristic reaction of carbonyl compounds.

Aldehydes can be oxidised to carboxylic acids, but ketones cannot be oxidised without breaking carbon-carbon bonds. This difference allows us to distinguish between them using oxidising agents like Tollens' reagent (silver mirror test) or Fehling's solution.

Both aldehydes and ketones can be reduced to alcohols using NaBH₄ or LiAlH₄. Aldehydes give primary alcohols while ketones give secondary alcohols. They also react with 2,4-dinitrophenylhydrazine (2,4-DNP) to give orange precipitates, used to detect the presence of a carbonyl group.`
    },
    questions: [
      {
        difficulty: 'easy',
        marks: 3,
        content: 'Describe how Tollens\' reagent can be used to distinguish between an aldehyde and a ketone.',
        solution: `**Tollens' reagent test:**

**Reagent:** Tollens' reagent (ammoniacal silver nitrate - Ag⁺ ions in aqueous ammonia)

**Procedure:**
1. Add equal volumes of aldehyde/ketone to Tollens' reagent
2. Warm gently in a water bath

**Observations:**

**With aldehyde:**
- A **silver mirror** forms on the inside of the test tube
- The colourless solution remains clear
- Aldehyde is **oxidised** to carboxylic acid
- Ag⁺ ions are **reduced** to silver metal

**With ketone:**
- **No visible change**
- No silver mirror forms
- Ketones cannot be oxidised by Tollens' reagent

**Conclusion:**
Silver mirror = aldehyde present
No change = ketone (or no carbonyl)`,
        display_order: 1
      },
      {
        difficulty: 'medium',
        marks: 4,
        content: 'Draw the mechanism for the reaction of ethanal with hydrogen cyanide (HCN) in the presence of potassium cyanide (KCN) catalyst.',
        solution: `**Mechanism: Nucleophilic Addition**

**Step 1: Nucleophilic attack**
CN⁻ (from KCN) attacks the δ+ carbonyl carbon:
\`\`\`
         O⁻
         |
CN⁻ → C=O → NC—C—H
         |        |
         CH₃      CH₃
\`\`\`
Curly arrow from CN⁻ to C of C=O
Curly arrow from C=O bond to O (forming O⁻)

**Step 2: Protonation**
The alkoxide intermediate is protonated by HCN:
\`\`\`
O⁻           OH
|            |
NC—C—H + HCN → NC—C—H + CN⁻
|              |
CH₃           CH₃
\`\`\`
The CN⁻ is regenerated (catalyst)

**Product:** 2-hydroxypropanenitrile (a cyanohydrin)

**Why KCN is needed:**
- HCN is a weak acid, so few CN⁻ ions present
- KCN provides CN⁻ ions directly
- CN⁻ is a better nucleophile than HCN`,
        display_order: 2
      },
      {
        difficulty: 'hard',
        marks: 5,
        content: 'A compound C₄H₈O gives an orange precipitate with 2,4-DNP but does not react with Tollens\' reagent. On reduction with NaBH₄, it forms C₄H₁₀O. Identify the compound and explain your reasoning.',
        solution: `**Analysis:**

**Test 1: 2,4-DNP positive**
- Contains a carbonyl group (C=O)
- Could be aldehyde or ketone

**Test 2: Tollens' reagent negative**
- NOT an aldehyde
- Must be a **ketone**

**Formula analysis:**
- C₄H₈O has degree of unsaturation = (2×4 + 2 - 8)/2 = 1
- One degree of unsaturation matches one C=O group (no ring)

**Possible ketones with formula C₄H₈O:**
- **Butanone** (CH₃COCH₂CH₃) - the only ketone isomer

**Confirmation from reduction:**
- NaBH₄ reduces C=O to C-OH
- Ketone → secondary alcohol
- C₄H₈O + [H] → C₄H₁₀O
- Butanone → Butan-2-ol

\`\`\`
        O                  OH
        ‖    NaBH₄         |
CH₃-C-CH₂-CH₃  →  CH₃-CH-CH₂-CH₃
\`\`\`

**Conclusion:**
The compound is **butanone** (butan-2-one)
CH₃COCH₂CH₃

The reduction product is **butan-2-ol**
CH₃CH(OH)CH₂CH₃`,
        display_order: 3
      }
    ]
  },
  {
    content: {
      level: 'a-level',
      subject: 'chemistry',
      exam_board: 'aqa',
      topic_slug: 'organic-chemistry',
      subtopic_slug: 'aromatic-chemistry',
      title: 'Aromatic Chemistry | A-Level Chemistry',
      meta_description: 'Master benzene structure and electrophilic substitution reactions. A-Level Chemistry practice questions with solutions.',
      introduction: `Aromatic compounds contain the benzene ring, which has unique stability due to delocalised π electrons. Benzene (C₆H₆) does not undergo addition reactions like alkenes because addition would disrupt the stable delocalised system.

The benzene ring is a planar hexagon of carbon atoms with delocalised π electrons above and below the plane. Each carbon contributes one p-orbital electron to the delocalised system. This delocalisation gives benzene extra stability (enthalpy of hydrogenation is 152 kJ/mol less than expected).

Benzene undergoes electrophilic substitution reactions rather than addition, preserving the aromatic system. Key reactions include nitration (using HNO₃/H₂SO₄), halogenation (using Br₂/FeBr₃), and Friedel-Crafts reactions (alkylation and acylation).

In nitration, the mechanism involves: (1) generation of the nitronium ion (NO₂⁺) electrophile, (2) electrophilic attack on the benzene ring, (3) loss of H⁺ to restore aromaticity. Understanding this mechanism helps explain similar processes in other electrophilic substitutions.`
    },
    questions: [
      {
        difficulty: 'easy',
        marks: 3,
        content: 'Explain why benzene undergoes substitution reactions rather than addition reactions.',
        solution: `**Why benzene undergoes substitution not addition:**

1. **Delocalised π electrons:**
   - Benzene has a ring of delocalised electrons above and below the plane
   - This creates a **stable aromatic system**
   - The delocalisation energy is about 150 kJ/mol

2. **Addition would break delocalisation:**
   - In an addition reaction, two carbons would change from sp² to sp³
   - This would **disrupt the delocalised system**
   - Loss of aromatic stability = large energy cost
   - Addition is energetically unfavourable

3. **Substitution preserves aromaticity:**
   - A hydrogen is replaced by another group
   - The ring of delocalised electrons is **maintained**
   - Aromatic stability is retained
   - This is the thermodynamically favoured pathway

**Key point:** Benzene resists addition to maintain its stable aromatic system.`,
        display_order: 1
      },
      {
        difficulty: 'medium',
        marks: 4,
        content: 'Draw the mechanism for the nitration of benzene. Include the formation of the electrophile.',
        solution: `**Step 1: Formation of nitronium ion (electrophile)**

H₂SO₄ + HNO₃ → H₂NO₃⁺ + HSO₄⁻
H₂NO₃⁺ → NO₂⁺ + H₂O

The nitronium ion (NO₂⁺) is the electrophile.

**Step 2: Electrophilic attack on benzene**

\`\`\`
      H  NO₂⁺
       \\ /
        C
       / \\
      /   \\
     (ring) → intermediate carbocation
\`\`\`
- Curly arrow from delocalised electrons to NO₂⁺
- Forms unstable intermediate (positive charge on ring)

**Step 3: Loss of H⁺ to restore aromaticity**

\`\`\`
      H  NO₂
       \\ /        NO₂
        C    →     |
       / \\       (ring)  + H⁺
\`\`\`
- Curly arrow from C-H bond back into ring
- H⁺ removed by HSO₄⁻ (regenerates H₂SO₄ catalyst)

**Product:** Nitrobenzene (C₆H₅NO₂)

**Conditions:** Conc. HNO₃ + conc. H₂SO₄, 50°C`,
        display_order: 2
      },
      {
        difficulty: 'hard',
        marks: 5,
        content: 'Explain why phenol undergoes electrophilic substitution much more readily than benzene, and why the substitution is directed to positions 2, 4, and 6.',
        solution: `**Why phenol is more reactive than benzene:**

1. **Lone pair donation:**
   - The -OH group has lone pairs on oxygen
   - One lone pair can delocalise into the benzene ring
   - This increases electron density in the ring
   - The ring becomes more attractive to electrophiles

2. **Resonance structures:**
   - Drawing resonance structures shows negative charge distributed at positions 2, 4, and 6 (ortho and para to OH)
   - These positions have increased electron density

3. **Activation effect:**
   - The -OH group is an **activating group**
   - It increases reaction rate significantly
   - Phenol brominates instantly with bromine water (no catalyst needed)
   - Benzene requires FeBr₃ catalyst and reflux

**Why 2,4,6 directing (ortho/para):**

1. **Electron density distribution:**
   - The lone pair delocalisation increases electron density at carbons 2, 4, and 6
   - Carbons 3 and 5 have relatively lower electron density

2. **Intermediate stability:**
   - When electrophile attacks position 2, 4, or 6:
   - The positive charge can be stabilised by the oxygen lone pair
   - More resonance structures possible
   - More stable intermediate = faster reaction

3. **Meta attack is unfavourable:**
   - Attack at position 3 or 5 gives an intermediate where positive charge is adjacent to the δ+ carbon attached to oxygen
   - This is destabilising
   - Less stable intermediate = slower reaction

**Result:** Phenol forms 2,4,6-tribromophenol with excess bromine water.`,
        display_order: 3
      }
    ]
  }
];
