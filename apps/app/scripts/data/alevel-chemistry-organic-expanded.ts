import { SubtopicData } from '../bulk-seo-insert';

export const alevelChemistryOrganicExpanded: SubtopicData[] = [
  {
    content: {
      level: 'a-level',
      subject: 'chemistry',
      exam_board: 'aqa',
      topic_slug: 'organic-chemistry',
      subtopic_slug: 'alkanes',
      title: 'Alkanes | A-Level Chemistry',
      meta_description: 'Master alkane chemistry including nomenclature, structure, combustion and free radical substitution reactions for A-Level Chemistry.',
      introduction: `Alkanes are saturated hydrocarbons - organic compounds containing only carbon and hydrogen atoms joined by single covalent bonds. They form the foundation of organic chemistry and are the starting point for understanding more complex functional groups.

The general formula for alkanes is CₙH₂ₙ₊₂. The simplest alkane is methane (CH₄), followed by ethane (C₂H₆), propane (C₃H₈), and butane (C₄H₁₀). The suffix '-ane' indicates a saturated hydrocarbon with no double or triple bonds.

Alkanes are relatively unreactive due to the strength and low polarity of C-H and C-C bonds. Their main reactions are combustion and free radical substitution. Complete combustion produces carbon dioxide and water: CH₄ + 2O₂ → CO₂ + 2H₂O. Incomplete combustion occurs with limited oxygen, producing carbon monoxide or carbon (soot).

Free radical substitution allows halogens to replace hydrogen atoms in alkanes. The mechanism involves three stages: initiation (UV light breaks Cl-Cl bonds homolytically to form chlorine radicals), propagation (chain reactions that produce the product and regenerate radicals), and termination (when two radicals combine).

Alkanes from crude oil are separated by fractional distillation based on boiling point. Longer chains have higher boiling points due to stronger London dispersion forces. Cracking breaks long-chain alkanes into shorter, more useful molecules including alkenes.`
    },
    questions: [
      {
        difficulty: 'easy',
        marks: 3,
        content: 'Name the alkane with the molecular formula C₅H₁₂ and draw its structural formula. State the type of bonds present.',
        solution: 'Pentane (1 mark). Structural formula: CH₃-CH₂-CH₂-CH₂-CH₃ showing a chain of 5 carbons (1 mark). Contains C-C single bonds and C-H single bonds only (1 mark).',
        display_order: 1
      },
      {
        difficulty: 'medium',
        marks: 4,
        content: 'Write equations for the complete and incomplete combustion of propane (C₃H₈). Explain why incomplete combustion is dangerous.',
        solution: 'Complete: C₃H₈ + 5O₂ → 3CO₂ + 4H₂O (1 mark). Incomplete: C₃H₈ + 3½O₂ → 3CO + 4H₂O or 2C₃H₈ + 7O₂ → 6CO + 8H₂O (1 mark). Carbon monoxide is produced which is toxic/poisonous (1 mark). CO binds irreversibly to haemoglobin, preventing oxygen transport (1 mark).',
        display_order: 2
      },
      {
        difficulty: 'hard',
        marks: 5,
        content: 'Describe the mechanism for the reaction between methane and chlorine in UV light. Include all three stages and explain why a mixture of products is obtained.',
        solution: 'Initiation: Cl₂ → 2Cl• (UV light causes homolytic fission of Cl-Cl bond) (1 mark). Propagation: CH₄ + Cl• → CH₃• + HCl, then CH₃• + Cl₂ → CH₃Cl + Cl• (1 mark for both equations). Termination: Two radicals combine, e.g., Cl• + Cl• → Cl₂, CH₃• + Cl• → CH₃Cl, CH₃• + CH₃• → C₂H₆ (1 mark). Mixture obtained because chloromethane can undergo further substitution to form CH₂Cl₂, CHCl₃, CCl₄ (1 mark). This is because the propagation steps can continue with chloromethane as the substrate (1 mark).',
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
      subtopic_slug: 'halogenoalkanes',
      title: 'Halogenoalkanes | A-Level Chemistry',
      meta_description: 'Learn halogenoalkane chemistry including nucleophilic substitution, elimination reactions, and uses of CFCs for A-Level Chemistry.',
      introduction: `Halogenoalkanes are alkanes where one or more hydrogen atoms have been replaced by halogen atoms. They are classified as primary, secondary, or tertiary depending on the number of alkyl groups attached to the carbon bearing the halogen.

The C-X bond is polar because halogens are more electronegative than carbon, making the carbon atom δ+ and susceptible to attack by nucleophiles. Bond polarity increases from C-I to C-F, but bond strength also increases significantly, making C-F bonds very difficult to break.

Nucleophilic substitution replaces the halogen with another group. With aqueous hydroxide ions, the product is an alcohol: CH₃Br + OH⁻ → CH₃OH + Br⁻. With ammonia (excess), the product is an amine: CH₃Br + 2NH₃ → CH₃NH₂ + NH₄Br. With cyanide ions, a nitrile forms: CH₃Br + CN⁻ → CH₃CN + Br⁻.

Elimination reactions occur with hot, concentrated alcoholic hydroxide, producing alkenes. The OH⁻ acts as a base, removing H⁺ from an adjacent carbon while the halogen leaves. This competes with substitution - higher temperatures and more concentrated base favour elimination.

Reactivity of halogenoalkanes depends on the C-X bond strength, not polarity. Iodoalkanes react fastest because the C-I bond is weakest and most easily broken, despite being the least polar. Fluoroalkanes are very unreactive due to the strong C-F bond.`
    },
    questions: [
      {
        difficulty: 'easy',
        marks: 3,
        content: 'Classify 1-bromobutane, 2-bromobutane, and 2-bromo-2-methylpropane as primary, secondary, or tertiary halogenoalkanes.',
        solution: '1-bromobutane is primary - Br attached to carbon with only one alkyl group (1 mark). 2-bromobutane is secondary - Br attached to carbon with two alkyl groups (1 mark). 2-bromo-2-methylpropane is tertiary - Br attached to carbon with three alkyl groups (1 mark).',
        display_order: 1
      },
      {
        difficulty: 'medium',
        marks: 4,
        content: 'Write equations showing the reaction of 1-bromopropane with: (a) aqueous NaOH (b) excess ammonia. Name the organic products.',
        solution: '(a) CH₃CH₂CH₂Br + NaOH → CH₃CH₂CH₂OH + NaBr (1 mark). Product: propan-1-ol (1 mark). (b) CH₃CH₂CH₂Br + 2NH₃ → CH₃CH₂CH₂NH₂ + NH₄Br (1 mark). Product: propylamine or 1-aminopropane (1 mark).',
        display_order: 2
      },
      {
        difficulty: 'hard',
        marks: 5,
        content: 'Explain why 1-iodopropane reacts faster than 1-bromopropane with aqueous hydroxide ions, even though the C-I bond is less polar than the C-Br bond.',
        solution: 'The rate-determining step involves breaking the C-X bond (1 mark). The C-I bond (bond enthalpy ~238 kJ mol⁻¹) is weaker than the C-Br bond (~276 kJ mol⁻¹) (1 mark). The activation energy for breaking C-I is lower than for C-Br (1 mark). Although C-Br is more polar, making the carbon more δ+, this is less important than bond strength (1 mark). The transition state energy is lower for iodoalkanes, so they react faster (1 mark).',
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
      subtopic_slug: 'alkenes',
      title: 'Alkenes | A-Level Chemistry',
      meta_description: 'Master alkene chemistry including electrophilic addition, polymerisation, and tests for unsaturation for A-Level Chemistry.',
      introduction: `Alkenes are unsaturated hydrocarbons containing at least one carbon-carbon double bond. The general formula is CₙH₂ₙ. The double bond consists of a σ bond (from head-on overlap of sp² orbitals) and a π bond (from sideways overlap of p orbitals).

The π bond makes alkenes much more reactive than alkanes. The electron density above and below the plane of the double bond attracts electrophiles - electron-deficient species seeking electrons. The characteristic reactions of alkenes are electrophilic addition reactions.

With hydrogen (Ni catalyst, 150°C), alkenes undergo hydrogenation: CH₂=CH₂ + H₂ → CH₃CH₃. With halogens, addition occurs rapidly at room temperature: CH₂=CH₂ + Br₂ → CH₂BrCH₂Br. This reaction decolourises bromine water, serving as a test for unsaturation.

With hydrogen halides, Markovnikov's rule predicts the major product: the hydrogen adds to the carbon already carrying more hydrogens. For propene + HBr, the major product is 2-bromopropane. This occurs because the more stable carbocation intermediate forms preferentially.

Alkenes undergo addition polymerisation to form poly(alkenes). Many monomer molecules join together: nCH₂=CH₂ → -(CH₂-CH₂)ₙ-. These polymers are saturated and chemically inert. Different side groups on the alkene produce polymers with different properties - poly(propene), PVC, and PTFE are common examples.`
    },
    questions: [
      {
        difficulty: 'easy',
        marks: 3,
        content: 'Draw the structural formula of but-2-ene and state why it exists as cis-trans isomers. Draw both isomers.',
        solution: 'But-2-ene: CH₃CH=CHCH₃ (1 mark). Exists as cis-trans isomers because there is restricted rotation about the C=C double bond and different groups on each carbon of the double bond (1 mark). Cis has both CH₃ groups on same side; trans has them on opposite sides (1 mark for both structures).',
        display_order: 1
      },
      {
        difficulty: 'medium',
        marks: 4,
        content: 'Propene reacts with HBr to form two products. Name both products and predict which is the major product. Explain your answer using Markovnikov\'s rule.',
        solution: 'Products: 1-bromopropane and 2-bromopropane (1 mark). Major product is 2-bromopropane (1 mark). Markovnikov\'s rule states hydrogen adds to the carbon with more hydrogens already attached (1 mark). This forms the more stable secondary carbocation intermediate CH₃CH⁺CH₃ rather than the less stable primary carbocation (1 mark).',
        display_order: 2
      },
      {
        difficulty: 'hard',
        marks: 5,
        content: 'Describe the mechanism for the reaction between ethene and bromine. Explain why the addition of bromine to an alkene in the presence of sodium chloride solution produces a mixture of products.',
        solution: 'Mechanism: Br-Br bond polarised by π electrons of C=C (1 mark). Br⁺ adds to form a carbocation intermediate/bromonium ion (1 mark). Br⁻ then attacks from opposite side giving 1,2-dibromoethane (1 mark). With NaCl present, Cl⁻ ions can also act as nucleophiles (1 mark). This produces a mixture of 1,2-dibromoethane and 1-bromo-2-chloroethane as Cl⁻ competes with Br⁻ to attack the intermediate (1 mark).',
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
      subtopic_slug: 'alcohols',
      title: 'Alcohols | A-Level Chemistry',
      meta_description: 'Learn alcohol chemistry including oxidation reactions, dehydration, and classification for A-Level Chemistry with worked examples.',
      introduction: `Alcohols contain the hydroxyl functional group (-OH) attached to a carbon atom. They are classified as primary (OH on a carbon attached to one alkyl group), secondary (two alkyl groups), or tertiary (three alkyl groups). This classification determines their reactivity.

Alcohols can be oxidised using acidified potassium dichromate. Primary alcohols oxidise first to aldehydes, then to carboxylic acids. To stop at the aldehyde, distil immediately; to form the acid, heat under reflux. Secondary alcohols oxidise to ketones only. Tertiary alcohols cannot be oxidised as there is no hydrogen on the carbon bearing the OH.

The oxidation reactions can be represented using [O]: Primary: RCH₂OH + [O] → RCHO + H₂O → RCOOH. Secondary: R₂CHOH + [O] → R₂C=O + H₂O. The colour change from orange to green indicates the reaction has occurred (Cr₂O₇²⁻ → Cr³⁺).

Dehydration of alcohols produces alkenes. Heating with concentrated sulfuric acid or passing vapour over heated aluminium oxide removes water: C₂H₅OH → CH₂=CH₂ + H₂O. This is an elimination reaction where H and OH are removed from adjacent carbons.

Alcohols also undergo substitution reactions with hydrogen halides or phosphorus halides to form halogenoalkanes: C₂H₅OH + HBr → C₂H₅Br + H₂O. The reactivity order is HI > HBr > HCl due to bond strength of the H-X bond.`
    },
    questions: [
      {
        difficulty: 'easy',
        marks: 3,
        content: 'Classify butan-1-ol, butan-2-ol, and 2-methylpropan-2-ol as primary, secondary, or tertiary alcohols. State which can be oxidised to a ketone.',
        solution: 'Butan-1-ol is primary - OH on carbon with one alkyl group (1 mark). Butan-2-ol is secondary - OH on carbon with two alkyl groups (1 mark). 2-methylpropan-2-ol is tertiary. Only butan-2-ol can be oxidised to a ketone (butanone) (1 mark).',
        display_order: 1
      },
      {
        difficulty: 'medium',
        marks: 4,
        content: 'Describe how you would oxidise propan-1-ol to propanoic acid using acidified potassium dichromate. Include the conditions and observation.',
        solution: 'Heat propan-1-ol with acidified potassium dichromate under reflux (1 mark). Use excess oxidising agent and sulfuric acid (1 mark). Heat for extended time to ensure complete oxidation (1 mark). Observation: orange solution turns green as Cr(VI) is reduced to Cr(III) (1 mark).',
        display_order: 2
      },
      {
        difficulty: 'hard',
        marks: 5,
        content: 'Explain why 2-methylpropan-2-ol cannot be oxidised by acidified potassium dichromate, while 2-methylpropan-1-ol can be oxidised to form two different products depending on conditions.',
        solution: '2-methylpropan-2-ol is tertiary - the carbon with OH has no hydrogen atoms attached (1 mark). Oxidation requires removal of hydrogen from the C-OH carbon, which is impossible here (1 mark). 2-methylpropan-1-ol is primary, so can be oxidised (1 mark). With distillation, forms 2-methylpropanal (aldehyde) by removing H from C-OH and OH→O (1 mark). Under reflux with excess oxidising agent, forms 2-methylpropanoic acid as aldehyde is further oxidised (1 mark).',
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
      subtopic_slug: 'aldehydes-ketones',
      title: 'Aldehydes and Ketones | A-Level Chemistry',
      meta_description: 'Master aldehyde and ketone chemistry including nucleophilic addition, reduction, and tests to distinguish between them for A-Level Chemistry.',
      introduction: `Aldehydes and ketones both contain the carbonyl group (C=O). In aldehydes, the carbonyl is at the end of the carbon chain (RCHO); in ketones, it is within the chain (RCOR\'). Both are produced by oxidation of alcohols and show similar reactions.

The carbonyl group is polarised due to oxygen\'s electronegativity, making the carbon δ+ and susceptible to nucleophilic attack. Nucleophilic addition is the characteristic reaction. With HCN (hydrogen cyanide, generated in situ from KCN and acid), a hydroxynitrile forms: RCHO + HCN → RCH(OH)CN.

Aldehydes can be further oxidised to carboxylic acids, but ketones cannot. This allows chemical tests to distinguish them. Tollens\' reagent (ammoniacal silver nitrate) gives a silver mirror with aldehydes but not ketones. Fehling\'s solution (blue Cu²⁺) gives a red precipitate of Cu₂O with aldehydes only.

Both aldehydes and ketones can be reduced back to alcohols using sodium borohydride (NaBH₄) or lithium aluminium hydride (LiAlH₄). Aldehydes form primary alcohols; ketones form secondary alcohols: RCHO + 2[H] → RCH₂OH; RCOR\' + 2[H] → RCHOHR\'.

2,4-dinitrophenylhydrazine (Brady\'s reagent) forms an orange/yellow precipitate with both aldehydes and ketones. This confirms the presence of a carbonyl group. The precipitate can be purified and its melting point determined to identify the specific compound.`
    },
    questions: [
      {
        difficulty: 'easy',
        marks: 3,
        content: 'Draw the structural formulae of propanal and propanone. State which is an aldehyde and which is a ketone.',
        solution: 'Propanal: CH₃CH₂CHO - carbonyl group at end of chain (1 mark). This is an aldehyde (1 mark). Propanone: CH₃COCH₃ - carbonyl group in middle of chain. This is a ketone (1 mark).',
        display_order: 1
      },
      {
        difficulty: 'medium',
        marks: 4,
        content: 'Describe two chemical tests that can distinguish between propanal and propanone. Include the reagents, conditions, and observations.',
        solution: 'Test 1 - Tollens\' reagent: Add ammoniacal silver nitrate and warm gently (1 mark). Propanal gives silver mirror, propanone gives no reaction (1 mark). Test 2 - Fehling\'s solution: Add blue Fehling\'s solution and heat (1 mark). Propanal gives red/orange precipitate (Cu₂O), propanone gives no change (1 mark).',
        display_order: 2
      },
      {
        difficulty: 'hard',
        marks: 5,
        content: 'Describe the mechanism for the reaction between ethanal and hydrogen cyanide. Explain why this reaction produces a chiral product from an achiral starting material.',
        solution: 'CN⁻ ion acts as nucleophile (from HCN equilibrium or KCN + acid) (1 mark). CN⁻ attacks δ+ carbon of C=O, electrons move to oxygen forming C-O⁻ (1 mark). Intermediate picks up H⁺ from HCN to form 2-hydroxypropanenitrile (1 mark). The carbonyl carbon is planar/trigonal, so CN⁻ can attack from either side equally (1 mark). This produces a 50:50 mixture of two enantiomers (racemic mixture) as the new chiral centre can form in two configurations (1 mark).',
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
      subtopic_slug: 'carboxylic-acids',
      title: 'Carboxylic Acids | A-Level Chemistry',
      meta_description: 'Learn carboxylic acid chemistry including acid reactions, ester formation, and reduction for A-Level Chemistry with detailed mechanisms.',
      introduction: `Carboxylic acids contain the carboxyl functional group (-COOH), which combines a carbonyl and hydroxyl group. The general formula is RCOOH. They are named with the suffix \'-oic acid\' - methanoic acid (HCOOH), ethanoic acid (CH₃COOH), propanoic acid (C₂H₅COOH).

Carboxylic acids are weak acids - they partially dissociate in water: CH₃COOH ⇌ CH₃COO⁻ + H⁺. The negative charge on the carboxylate ion is delocalised over both oxygen atoms, stabilising it and making dissociation more favourable than in alcohols. However, the equilibrium still lies to the left.

As acids, carboxylic acids react with metals, bases, and carbonates. With sodium: 2CH₃COOH + 2Na → 2CH₃COO⁻Na⁺ + H₂. With sodium hydroxide: CH₃COOH + NaOH → CH₃COO⁻Na⁺ + H₂O. With sodium carbonate: 2CH₃COOH + Na₂CO₃ → 2CH₃COO⁻Na⁺ + H₂O + CO₂.

Carboxylic acids react with alcohols to form esters in an esterification reaction, catalysed by concentrated sulfuric acid: CH₃COOH + C₂H₅OH ⇌ CH₃COOC₂H₅ + H₂O. This is a reversible reaction; excess of one reactant or removal of water shifts equilibrium toward products.

Carboxylic acids can be reduced to primary alcohols using lithium aluminium hydride (LiAlH₄) in dry ether: CH₃COOH + 4[H] → CH₃CH₂OH + H₂O. Note that the milder NaBH₄ cannot reduce carboxylic acids - LiAlH₄ is required.`
    },
    questions: [
      {
        difficulty: 'easy',
        marks: 3,
        content: 'Write equations for the reaction of propanoic acid with: (a) sodium metal (b) sodium hydroxide solution.',
        solution: '(a) 2C₂H₅COOH + 2Na → 2C₂H₅COO⁻Na⁺ + H₂ (1 mark). (b) C₂H₅COOH + NaOH → C₂H₅COO⁻Na⁺ + H₂O (1 mark). Products are sodium propanoate and hydrogen/water respectively (1 mark).',
        display_order: 1
      },
      {
        difficulty: 'medium',
        marks: 4,
        content: 'Ethyl ethanoate can be prepared from ethanoic acid and ethanol. Write the equation for this reaction and state the conditions. Explain how the yield could be increased.',
        solution: 'CH₃COOH + C₂H₅OH ⇌ CH₃COOC₂H₅ + H₂O (1 mark). Conditions: concentrated sulfuric acid catalyst, heat under reflux (1 mark). Yield increased by using excess of one reactant (usually the cheaper alcohol) (1 mark). Or by removing water as it forms to shift equilibrium to the right (1 mark).',
        display_order: 2
      },
      {
        difficulty: 'hard',
        marks: 5,
        content: 'Explain why carboxylic acids are stronger acids than alcohols, despite both containing an O-H bond. Include a discussion of the stability of the conjugate base.',
        solution: 'Carboxylic acids dissociate: RCOOH ⇌ RCOO⁻ + H⁺ (1 mark). The carboxylate anion is stabilised by delocalisation of the negative charge over both oxygen atoms (resonance) (1 mark). The two C-O bonds become equivalent, intermediate between single and double (1 mark). In alcohols, RO⁻ cannot delocalise the negative charge - it is localised on one oxygen (1 mark). This makes the carboxylate ion more stable relative to the acid, shifting equilibrium toward dissociation more than for alcohols (1 mark).',
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
      subtopic_slug: 'aromatics',
      title: 'Aromatic Chemistry | A-Level Chemistry',
      meta_description: 'Master aromatic chemistry including benzene structure, electrophilic substitution reactions and mechanism for A-Level Chemistry.',
      introduction: `Benzene (C₆H₆) is the simplest aromatic compound. Its structure puzzled chemists until Kekulé proposed a ring of six carbons with alternating single and double bonds. However, evidence shows benzene is more stable than this suggests - all C-C bonds are identical in length (0.139 nm), intermediate between single (0.154 nm) and double (0.134 nm) bonds.

The modern model describes benzene as having delocalised π electrons above and below the plane of the ring. Each carbon is sp² hybridised with one p orbital perpendicular to the ring. These six p orbitals overlap to form a continuous ring of electron density. This delocalisation provides extra stability (about 150 kJ mol⁻¹ lower in energy than predicted).

Benzene undergoes electrophilic substitution rather than addition. Addition would break the delocalised system and lose stability, while substitution preserves it. The general mechanism involves: (1) generation of an electrophile, (2) attack by the π system forming a cationic intermediate, (3) loss of H⁺ to restore aromaticity.

Nitration uses concentrated HNO₃ and H₂SO₄ at 50°C. The electrophile NO₂⁺ is generated: HNO₃ + H₂SO₄ → NO₂⁺ + HSO₄⁻ + H₂O. Product: nitrobenzene. Friedel-Crafts acylation uses an acyl chloride with AlCl₃ catalyst to attach an acyl group (RCO-).

Halogenation requires a halogen carrier catalyst (AlCl₃ or FeBr₃) to generate X⁺. Bromination: C₆H₆ + Br₂ → C₆H₅Br + HBr. Without catalyst, bromine doesn't react with benzene - unlike alkenes which decolourise bromine instantly.`
    },
    questions: [
      {
        difficulty: 'easy',
        marks: 3,
        content: 'State three pieces of evidence that suggest benzene does not have alternating single and double bonds as in Kekulé\'s structure.',
        solution: 'All C-C bond lengths in benzene are equal (0.139 nm), not alternating long and short (1 mark). Benzene does not decolourise bromine water like alkenes with C=C bonds would (1 mark). Enthalpy of hydrogenation is less exothermic than expected for three C=C bonds (about 150 kJ mol⁻¹ less) (1 mark).',
        display_order: 1
      },
      {
        difficulty: 'medium',
        marks: 4,
        content: 'Write equations showing how the electrophile is generated in the nitration of benzene. State the conditions required.',
        solution: 'HNO₃ + H₂SO₄ → NO₂⁺ + HSO₄⁻ + H₂O (1 mark for equation showing generation of NO₂⁺). The electrophile is the nitronium ion, NO₂⁺ (1 mark). Conditions: concentrated nitric acid and concentrated sulfuric acid (1 mark). Temperature 50°C (1 mark). [If higher temperature, multiple substitution occurs]',
        display_order: 2
      },
      {
        difficulty: 'hard',
        marks: 5,
        content: 'Describe the mechanism for the nitration of benzene. Explain why benzene undergoes substitution rather than addition reactions.',
        solution: 'Step 1: NO₂⁺ electrophile attacks the delocalised π system (1 mark). Step 2: Two electrons from the ring form a bond with NO₂⁺, creating a positively charged intermediate where delocalisation is partially disrupted (1 mark). Step 3: H⁺ is lost and the pair of electrons rejoin the delocalised system, restoring aromaticity (1 mark). Benzene undergoes substitution because addition would permanently break the delocalised π system (1 mark). The extra stability from delocalisation (≈150 kJ mol⁻¹) would be lost - substitution preserves this stability (1 mark).',
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
      subtopic_slug: 'amines',
      title: 'Amines | A-Level Chemistry',
      meta_description: 'Learn amine chemistry including basicity, preparation methods and reactions with acids for A-Level Chemistry.',
      introduction: `Amines are organic compounds derived from ammonia (NH₃) by replacing one or more hydrogen atoms with alkyl or aryl groups. Primary amines have one alkyl group (RNH₂), secondary have two (R₂NH), and tertiary have three (R₃N). Quaternary ammonium ions have four groups attached to nitrogen.

Amines are basic due to the lone pair of electrons on nitrogen, which can accept a proton. They react with acids to form salts: CH₃NH₂ + HCl → CH₃NH₃⁺Cl⁻ (methylammonium chloride). Aliphatic amines are stronger bases than ammonia because alkyl groups are electron-donating, increasing electron density on nitrogen.

Aromatic amines like phenylamine (C₆H₅NH₂) are weaker bases than aliphatic amines. The lone pair on nitrogen is partially delocalised into the benzene ring, making it less available to accept a proton. However, they are still basic enough to form salts with strong acids.

Primary amines can be prepared by: (1) Reduction of nitriles with LiAlH₄ or H₂/Ni: RCN + 4[H] → RCH₂NH₂. (2) Reaction of halogenoalkanes with excess ammonia: RBr + 2NH₃ → RNH₂ + NH₄Br. Excess ammonia ensures the primary amine doesn\'t react further with the halogenoalkane.

Amines act as nucleophiles due to their lone pair. They can attack δ+ carbon in halogenoalkanes and acyl chlorides. With acyl chlorides, primary amines form N-substituted amides: CH₃COCl + CH₃NH₂ → CH₃CONHCH₃ + HCl.`
    },
    questions: [
      {
        difficulty: 'easy',
        marks: 3,
        content: 'Classify the following as primary, secondary, or tertiary amines: (a) CH₃CH₂NH₂ (b) (CH₃)₂NH (c) (CH₃)₃N',
        solution: '(a) CH₃CH₂NH₂ is primary - one alkyl group attached to nitrogen (1 mark). (b) (CH₃)₂NH is secondary - two alkyl groups attached to nitrogen (1 mark). (c) (CH₃)₃N is tertiary - three alkyl groups attached to nitrogen (1 mark).',
        display_order: 1
      },
      {
        difficulty: 'medium',
        marks: 4,
        content: 'Explain why ethylamine is a stronger base than ammonia, and why phenylamine is a weaker base than ammonia.',
        solution: 'Ethylamine: ethyl group is electron-donating/releases electrons toward nitrogen (1 mark). This increases electron density on nitrogen\'s lone pair, making it more available to accept H⁺ (1 mark). Phenylamine: the lone pair on nitrogen is partially delocalised into the benzene ring (1 mark). This reduces electron density on nitrogen, making the lone pair less available to accept H⁺ (1 mark).',
        display_order: 2
      },
      {
        difficulty: 'hard',
        marks: 5,
        content: 'Describe how propylamine (CH₃CH₂CH₂NH₂) can be prepared from 1-bromopropane. Explain why a mixture of products is obtained if excess ammonia is not used.',
        solution: 'React 1-bromopropane with excess concentrated ammonia in a sealed tube, heat (1 mark). CH₃CH₂CH₂Br + 2NH₃ → CH₃CH₂CH₂NH₂ + NH₄Br (1 mark). Without excess ammonia, the primary amine formed acts as a nucleophile (1 mark). It can react with more halogenoalkane: CH₃CH₂CH₂NH₂ + CH₃CH₂CH₂Br → (CH₃CH₂CH₂)₂NH + HBr (1 mark). This continues to form tertiary amines and even quaternary ammonium salts (1 mark).',
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
      subtopic_slug: 'polymers',
      title: 'Polymers | A-Level Chemistry',
      meta_description: 'Master polymer chemistry including addition and condensation polymerisation, properties and disposal for A-Level Chemistry.',
      introduction: `Polymers are large molecules made by joining many small molecules (monomers) together. Addition polymers form when unsaturated monomers join without losing any atoms - the polymer has the same empirical formula as the monomer. Condensation polymers form when monomers join with the loss of a small molecule, typically water.

Addition polymers are made from alkenes. The double bond opens and monomers link together: nCH₂=CH₂ → -(CH₂-CH₂)ₙ-. Common examples include poly(ethene), poly(propene), PVC from chloroethene, and PTFE from tetrafluoroethene. The properties depend on the monomer - side groups affect crystallinity and melting point.

Condensation polymers include polyesters and polyamides. Polyesters form from dicarboxylic acids and diols: HOOC-R-COOH + HO-R\'-OH → -OC-R-COO-R\'-O- + H₂O. Terylene (PET) is made from benzene-1,4-dicarboxylic acid and ethane-1,2-diol.

Polyamides (nylons) form from dicarboxylic acids and diamines, or from amino acids. The amide link -CONH- joins the units: HOOC-R-COOH + H₂N-R\'-NH₂ → -OC-R-CONH-R\'-NH- + H₂O. Nylon-6,6 uses hexanedioic acid and 1,6-diaminohexane.

Disposal of polymers is problematic. Addition polymers are chemically inert and non-biodegradable, persisting in landfill. They can be recycled (sorted by type) or incinerated for energy, but burning PVC produces toxic HCl. Condensation polymers can be hydrolysed back to monomers under acidic or basic conditions.`
    },
    questions: [
      {
        difficulty: 'easy',
        marks: 3,
        content: 'Draw the repeating unit of the polymer formed from propene (CH₃CH=CH₂). Name this polymer and state whether it is an addition or condensation polymer.',
        solution: 'Repeating unit: -CH(CH₃)-CH₂- showing the opened double bond with methyl side group (1 mark). Name: poly(propene) (1 mark). This is an addition polymer - no small molecules are lost during polymerisation (1 mark).',
        display_order: 1
      },
      {
        difficulty: 'medium',
        marks: 4,
        content: 'A polyester is made from hexanedioic acid (HOOC(CH₂)₄COOH) and ethane-1,2-diol (HOCH₂CH₂OH). Draw the repeating unit showing two ester linkages.',
        solution: 'Repeating unit shows: -O-CH₂-CH₂-O-CO-(CH₂)₄-CO- (1 mark for ester link from diol end, 1 mark for ester link from acid end). The ester linkage is -COO- formed from -COOH and -OH (1 mark). One water molecule is eliminated for each ester bond formed (1 mark).',
        display_order: 2
      },
      {
        difficulty: 'hard',
        marks: 5,
        content: 'Explain why condensation polymers can be hydrolysed but addition polymers cannot. Describe what products form when nylon-6,6 is hydrolysed with dilute acid.',
        solution: 'Condensation polymers contain functional group linkages (ester or amide bonds) that can be broken by reaction with water (1 mark). Addition polymers only contain C-C single bonds which are not susceptible to hydrolysis (1 mark). Nylon-6,6 contains amide links -CONH- (1 mark). Acid hydrolysis breaks these: -CONH- + H₂O → -COOH + -NH₂ (1 mark). Products are hexanedioic acid and 1,6-diaminohexane (or their protonated forms in acid) (1 mark).',
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
      subtopic_slug: 'amino-acids-proteins',
      title: 'Amino Acids and Proteins | A-Level Chemistry',
      meta_description: 'Learn amino acid structure, zwitterions, peptide bonds and protein chemistry for A-Level Chemistry with worked examples.',
      introduction: `Amino acids are organic molecules containing both an amino group (-NH₂) and a carboxylic acid group (-COOH). In α-amino acids, both groups are attached to the same carbon (the α-carbon). The general structure is RCH(NH₂)COOH, where R is the side chain that varies between different amino acids.

Amino acids are amphoteric - they can act as both acids and bases. In solid form and in solution near neutral pH, they exist as zwitterions: the amino group is protonated (NH₃⁺) and the carboxyl is deprotonated (COO⁻). This gives the structure ⁺NH₃-CHR-COO⁻.

At low pH (acidic conditions), the zwitterion accepts a proton: ⁺NH₃-CHR-COOH (cation). At high pH (basic conditions), it loses a proton: NH₂-CHR-COO⁻ (anion). The isoelectric point is the pH at which the amino acid exists predominantly as the zwitterion with no net charge.

Proteins are condensation polymers of amino acids joined by peptide bonds (-CONH-). When two amino acids join: H₂N-CHR-COOH + H₂N-CHR\'-COOH → H₂N-CHR-CONH-CHR\'-COOH + H₂O. The C-N bond has partial double bond character due to delocalisation, making it planar and rigid.

Proteins can be hydrolysed back to amino acids using acid or enzymes. The primary structure is the sequence of amino acids. Secondary structure involves hydrogen bonding creating α-helices or β-pleated sheets. Tertiary and quaternary structures involve further folding and multiple polypeptide chains.`
    },
    questions: [
      {
        difficulty: 'easy',
        marks: 3,
        content: 'Draw the structure of glycine (H₂NCH₂COOH) as it exists at pH 7 (physiological pH). Name this form.',
        solution: 'Structure shows: ⁺NH₃-CH₂-COO⁻ with the amino group protonated and carboxyl deprotonated (1 mark for correct zwitterion structure). This is called a zwitterion (1 mark). At neutral pH, the molecule has no net charge but contains both positive and negative charges (1 mark).',
        display_order: 1
      },
      {
        difficulty: 'medium',
        marks: 4,
        content: 'Draw the structure of the dipeptide formed when glycine (H₂NCH₂COOH) reacts with alanine (CH₃CH(NH₂)COOH), with glycine providing the N-terminus.',
        solution: 'Structure: H₂N-CH₂-CONH-CH(CH₃)-COOH (1 mark for peptide bond, 1 mark for glycine at N-terminus). The peptide bond is -CONH- formed between the COOH of glycine and NH₂ of alanine (1 mark). One molecule of water is eliminated during this condensation reaction (1 mark).',
        display_order: 2
      },
      {
        difficulty: 'hard',
        marks: 5,
        content: 'Explain why the peptide bond has partial double bond character and is planar. Describe the consequences of this for protein structure.',
        solution: 'The lone pair on nitrogen can delocalise into the C=O bond (1 mark). This creates a resonance structure where C-N has partial double bond character: C=N⁺-O⁻ (1 mark). The partial double bond restricts rotation around the C-N bond (1 mark). All atoms around the peptide bond lie in the same plane (1 mark). This rigidity is crucial for protein secondary structure - it limits conformations available and allows predictable folding patterns like α-helices and β-sheets (1 mark).',
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
      subtopic_slug: 'organic-synthesis',
      title: 'Organic Synthesis | A-Level Chemistry',
      meta_description: 'Master organic synthesis routes, reaction pathways and multi-step synthesis strategies for A-Level Chemistry.',
      introduction: `Organic synthesis involves planning routes to convert starting materials into target molecules. A-Level Chemistry requires understanding how different functional groups interconvert and selecting appropriate reagents and conditions for each step.

Key functional group interconversions include: alkene → alcohol (addition of steam/H₃PO₄ or H₂O/H₂SO₄), alcohol → halogenoalkane (HX or PX₃), halogenoalkane → amine (excess NH₃), halogenoalkane → nitrile (KCN in ethanol), nitrile → carboxylic acid (acid hydrolysis), nitrile → amine (LiAlH₄ reduction).

Alcohols are central to many synthesis routes. Primary alcohols can be oxidised to aldehydes (distil with acidified dichromate) or carboxylic acids (reflux). They can be converted to halogenoalkanes or dehydrated to alkenes. Secondary alcohols oxidise to ketones.

When planning a synthesis, work backwards from the target molecule (retrosynthesis). Identify the functional group needed, then determine what starting material and reagents would produce it. Consider: How many carbons does the target have? Does the carbon chain need to be extended (use nitrile formation then reduction)?

Multi-step syntheses require attention to practical details: What conditions avoid side reactions? Is the intermediate stable? Can it be isolated and purified? Reaction sequences often involve protection of one functional group while transforming another, then deprotection.`
    },
    questions: [
      {
        difficulty: 'easy',
        marks: 3,
        content: 'Outline a two-step synthesis of propan-1-ol from propene. State the reagents and conditions for each step.',
        solution: 'Step 1: React propene with concentrated H₂SO₄ to form propyl hydrogensulfate (1 mark). Step 2: Add water and heat to hydrolyse to propan-1-ol (1 mark). Alternative route: React propene with steam and H₃PO₄ catalyst at 300°C/60 atm directly (1 mark for correct alternative).',
        display_order: 1
      },
      {
        difficulty: 'medium',
        marks: 4,
        content: 'Describe how ethanol can be converted to ethylamine in two steps. State the reagents and conditions.',
        solution: 'Step 1: Convert ethanol to bromoethane using HBr or PBr₃ (1 mark). Conditions: HBr requires heating under reflux (1 mark). Step 2: React bromoethane with excess ammonia in a sealed tube with heat (1 mark). Excess ammonia ensures primary amine is main product, not secondary or tertiary (1 mark).',
        display_order: 2
      },
      {
        difficulty: 'hard',
        marks: 5,
        content: 'Devise a synthesis of propanoic acid (CH₃CH₂COOH) starting from ethanol. Your route must involve extending the carbon chain.',
        solution: 'Step 1: Convert ethanol to bromoethane using HBr/reflux or PBr₃ (1 mark). Step 2: React bromoethane with KCN in ethanol to form propanenitrile CH₃CH₂CN (1 mark). This extends the chain by one carbon using the nucleophilic substitution of CN⁻ (1 mark). Step 3: Hydrolyse propanenitrile by refluxing with dilute HCl or H₂SO₄ (1 mark). Product: CH₃CH₂CN + 2H₂O + HCl → CH₃CH₂COOH + NH₄Cl (1 mark).',
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
      subtopic_slug: 'organic-analysis',
      title: 'Organic Analysis | A-Level Chemistry',
      meta_description: 'Learn analytical techniques for identifying organic compounds including tests for functional groups and instrumental methods for A-Level Chemistry.',
      introduction: `Organic analysis involves identifying unknown compounds using chemical tests and instrumental methods. Chemical tests identify functional groups, while instrumental methods provide detailed structural information.

Tests for alkenes: Bromine water is decolourised (orange to colourless) as addition occurs across the double bond. Permanganate solution (purple) is also decolourised. Tests for alcohols: React with sodium to produce hydrogen gas (effervescence). Oxidation with acidified dichromate (orange to green) - only primary and secondary alcohols react.

Tests for aldehydes and ketones: Both give orange precipitate with 2,4-dinitrophenylhydrazine (Brady\'s reagent). To distinguish between them: aldehydes reduce Tollens\' reagent (silver mirror forms) and Fehling\'s solution (blue to red precipitate), but ketones don\'t react.

Tests for carboxylic acids: Effervescence with sodium carbonate (CO₂ released). React with alcohols (with acid catalyst) to form esters with characteristic fruity smells. Tests for acyl chlorides: Vigorous reaction with water producing white fumes of HCl.

Mass spectrometry gives molecular mass from the molecular ion peak (M⁺). Fragmentation patterns help identify the structure. Infrared spectroscopy identifies functional groups: O-H (broad, 2500-3300 cm⁻¹ in acids), C=O (strong, 1640-1750 cm⁻¹), O-H in alcohols (broad, 3200-3550 cm⁻¹). NMR spectroscopy provides information about molecular structure.`
    },
    questions: [
      {
        difficulty: 'easy',
        marks: 3,
        content: 'Describe a chemical test to distinguish between hexane and hex-1-ene. State what you would observe with each compound.',
        solution: 'Add bromine water to each compound and shake (1 mark). Hexane: bromine water remains orange (no reaction) (1 mark). Hex-1-ene: bromine water is decolourised (orange to colourless) as bromine adds across the C=C double bond (1 mark).',
        display_order: 1
      },
      {
        difficulty: 'medium',
        marks: 4,
        content: 'An unknown compound gives an orange precipitate with 2,4-DNP but does not react with Tollens\' reagent. When reduced with NaBH₄, it forms a secondary alcohol. Identify the functional group and explain your reasoning.',
        solution: 'The compound is a ketone (1 mark). Positive 2,4-DNP test confirms presence of carbonyl group (aldehyde or ketone) (1 mark). Negative Tollens\' test rules out aldehyde - aldehydes would give silver mirror (1 mark). Reduction to secondary alcohol confirms ketone - aldehydes would give primary alcohols (1 mark).',
        display_order: 2
      },
      {
        difficulty: 'hard',
        marks: 5,
        content: 'A compound with molecular formula C₃H₆O gives a positive test with 2,4-DNP and a silver mirror with Tollens\' reagent. Its IR spectrum shows a strong absorption at 1720 cm⁻¹. Identify the compound and explain the evidence.',
        solution: 'The compound is propanal, CH₃CH₂CHO (1 mark). Molecular formula C₃H₆O indicates one degree of unsaturation (1 mark). Positive 2,4-DNP confirms carbonyl group present (1 mark). Positive Tollens\' test (silver mirror) indicates aldehyde not ketone (1 mark). IR absorption at 1720 cm⁻¹ is characteristic of C=O stretch in aldehydes (1 mark).',
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
      subtopic_slug: 'nmr',
      title: 'NMR Spectroscopy | A-Level Chemistry',
      meta_description: 'Master proton and carbon-13 NMR spectroscopy for structure determination in A-Level Chemistry with interpretation techniques.',
      introduction: `Nuclear Magnetic Resonance (NMR) spectroscopy is a powerful technique for determining molecular structure. It detects the environments of specific nuclei, most commonly ¹H (proton NMR) and ¹³C (carbon-13 NMR), providing information about the connectivity of atoms.

In proton NMR, the number of peaks indicates the number of different hydrogen environments. Chemical shift (δ, measured in ppm) indicates the type of environment - electronegative groups deshield protons, moving signals downfield (higher δ). Reference is TMS (tetramethylsilane) at δ = 0.

Integration (area under peaks) shows the ratio of protons in each environment. Spin-spin coupling (splitting) occurs when adjacent protons interact. The n+1 rule: protons adjacent to n equivalent protons split into n+1 peaks. A doublet indicates one neighbouring proton; a triplet indicates two.

Common chemical shifts: R-CH₃ (0.9-1.0 ppm), R-CH₂-R (1.2-1.4 ppm), CH₃CO- (2.0-2.5 ppm), R-OH (1-5 ppm, variable), Ar-H (6.5-8.0 ppm), R-CHO (9.0-10.0 ppm), R-COOH (10-12 ppm). D₂O exchange removes signals from OH and NH protons.

Carbon-13 NMR is simpler - no splitting is observed (in proton-decoupled spectra), so each carbon environment gives one peak. The number of peaks equals the number of different carbon environments. Chemical shifts help identify carbon types.`
    },
    questions: [
      {
        difficulty: 'easy',
        marks: 3,
        content: 'The proton NMR spectrum of a compound shows a singlet at δ 2.1 ppm. The compound has molecular formula C₃H₆O. Suggest the structure of the compound.',
        solution: 'The compound is propanone (acetone), CH₃COCH₃ (1 mark). Single peak indicates all protons are equivalent (1 mark). Chemical shift of 2.1 ppm is consistent with CH₃ next to C=O (1 mark).',
        display_order: 1
      },
      {
        difficulty: 'medium',
        marks: 4,
        content: 'Ethanol (CH₃CH₂OH) shows three peaks in its proton NMR spectrum. Predict the chemical shifts, integration ratios, and splitting patterns for each peak.',
        solution: 'CH₃ group: δ ≈ 1.2 ppm, integration 3, triplet (split by adjacent CH₂) (1 mark). CH₂ group: δ ≈ 3.7 ppm, integration 2, quartet (split by adjacent CH₃) (1 mark). OH group: δ ≈ 2-5 ppm (variable), integration 1, often a singlet due to rapid exchange (1 mark). Integration ratio 3:2:1 reflects number of protons in each environment (1 mark).',
        display_order: 2
      },
      {
        difficulty: 'hard',
        marks: 5,
        content: 'A compound with molecular formula C₄H₈O₂ shows the following ¹H NMR signals: δ 1.2 (triplet, 3H), δ 2.0 (singlet, 3H), δ 4.1 (quartet, 2H). Deduce the structure of this compound.',
        solution: 'Molecular formula suggests an ester (C₄H₈O₂ with one degree of unsaturation from C=O) (1 mark). δ 4.1 quartet (2H) indicates CH₂ adjacent to oxygen and next to CH₃ - this is OCH₂CH₃ (1 mark). δ 1.2 triplet (3H) is the CH₃ of the ethyl ester, split by CH₂ (1 mark). δ 2.0 singlet (3H) indicates CH₃ attached to C=O with no adjacent protons (1 mark). Structure is ethyl ethanoate: CH₃COOCH₂CH₃ (1 mark).',
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
      subtopic_slug: 'chromatography',
      title: 'Chromatography | A-Level Chemistry',
      meta_description: 'Learn chromatography techniques including thin layer, column, and gas chromatography for A-Level Chemistry analysis.',
      introduction: `Chromatography separates mixtures based on the different affinities of components for a stationary phase and a mobile phase. Components that interact more strongly with the stationary phase move more slowly, allowing separation.

Thin Layer Chromatography (TLC) uses a thin layer of silica or alumina on a plate (stationary phase) with a solvent as mobile phase. A spot of mixture is placed near the bottom, and solvent rises by capillary action. Components separate based on their polarity and interaction with the phases.

Rf values (retention factor) = distance moved by component / distance moved by solvent front. Rf values are characteristic for a compound in a specific solvent system and can be used for identification by comparison with standards. Non-polar compounds have higher Rf in non-polar solvents.

Column chromatography uses a column packed with stationary phase. Sample is loaded at the top and mobile phase flows through. Components elute at different rates - more strongly adsorbed compounds take longer. Used for purifying products on a preparative scale.

Gas-Liquid Chromatography (GLC) uses a long, thin column coated with high-boiling liquid (stationary phase) and an inert carrier gas (mobile phase). Components separate based on volatility and interaction with the liquid phase. Coupled with mass spectrometry (GC-MS), it provides both separation and identification.`
    },
    questions: [
      {
        difficulty: 'easy',
        marks: 3,
        content: 'A TLC plate shows a solvent front that has moved 8.0 cm from the origin. A compound has moved 5.6 cm. Calculate the Rf value and state what this value represents.',
        solution: 'Rf = distance moved by compound / distance moved by solvent front (1 mark). Rf = 5.6/8.0 = 0.70 (1 mark). This value represents the ratio of distances and is characteristic of the compound in this particular solvent system/stationary phase combination (1 mark).',
        display_order: 1
      },
      {
        difficulty: 'medium',
        marks: 4,
        content: 'Explain why TLC using silica as stationary phase and a non-polar solvent would separate a mixture of polar and non-polar compounds effectively.',
        solution: 'Silica is polar and will interact strongly with polar compounds through hydrogen bonding/dipole interactions (1 mark). Polar compounds will be retained more strongly on the silica and move slowly (1 mark). Non-polar compounds interact less with silica and dissolve better in the non-polar mobile phase (1 mark). Non-polar compounds therefore move faster up the plate, achieving separation (1 mark).',
        display_order: 2
      },
      {
        difficulty: 'hard',
        marks: 5,
        content: 'A student uses GC-MS to analyse an unknown liquid. The gas chromatogram shows one major peak at retention time 4.2 minutes. The mass spectrum of this peak shows m/z values at 46 (M⁺), 31, and 29. Suggest the identity of the compound.',
        solution: 'Single GC peak indicates a pure compound or single major component (1 mark). M⁺ at 46 indicates molecular mass of 46 (1 mark). Possible molecular formula: C₂H₆O (ethanol) or CH₂O₂ (1 mark). Fragment at 31 = loss of 15 (CH₃) from 46, giving CHO⁺ or CH₃O⁺ (1 mark). Fragment at 29 = CHO⁺, characteristic of aldehyde, or C₂H₅⁺. Combined evidence suggests ethanol CH₃CH₂OH (M = 46, loses CH₃ to give CH₂OH⁺ at 31, loses OH to give C₂H₅⁺ at 29) (1 mark).',
        display_order: 3
      }
    ]
  }
];

export default alevelChemistryOrganicExpanded;
