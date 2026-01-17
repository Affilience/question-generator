import { SubtopicData } from '../bulk-seo-insert';

export const gcseBiologyInheritanceExpanded: SubtopicData[] = [
  {
    content: {
      level: 'gcse',
      subject: 'biology',
      exam_board: 'aqa',
      topic_slug: 'inheritance',
      subtopic_slug: 'inheritance',
      title: 'Inheritance | GCSE Biology',
      meta_description: 'Learn about inheritance, genes, alleles and how characteristics are passed from parents to offspring for GCSE Biology.',
      introduction: `Inheritance is the passing of genetic information from parents to offspring. This explains why children resemble their parents and why characteristics run in families.

Genes are sections of DNA that code for specific proteins. Each gene exists in different versions called alleles. For example, a gene for eye colour might have a brown allele and a blue allele.

Most body cells contain two copies of each chromosome (one from each parent), so you have two alleles for each gene. If both alleles are the same, you're homozygous. If they're different, you're heterozygous.

Dominant alleles are expressed whenever present - you only need one copy to show the characteristic. Recessive alleles are only expressed when two copies are present (homozygous recessive). We use capital letters for dominant alleles and lowercase for recessive.

The genotype is your combination of alleles (e.g., Bb). The phenotype is the physical characteristic you display (e.g., brown eyes). Individuals with genotypes BB and Bb would both have the brown-eye phenotype if brown is dominant.`
    },
    questions: [
      {
        difficulty: 'easy',
        marks: 2,
        content: 'Define the terms genotype and phenotype.',
        solution: 'Genotype is the combination of alleles an organism has for a gene (e.g., BB, Bb, or bb) (1 mark). Phenotype is the physical characteristic that is expressed/shown (e.g., brown eyes) (1 mark).',
        display_order: 1
      },
      {
        difficulty: 'medium',
        marks: 3,
        content: 'A person is heterozygous for a gene controlling a characteristic. Explain what this means and whether they will show the dominant or recessive phenotype.',
        solution: 'Heterozygous means they have two different alleles for that gene (1 mark). For example, Bb (1 mark). They will show the dominant phenotype because the dominant allele masks the recessive allele (1 mark).',
        display_order: 2
      },
      {
        difficulty: 'hard',
        marks: 4,
        content: 'A characteristic is controlled by a single gene with two alleles. The dominant allele D codes for dimples. Explain why two parents with dimples could have a child without dimples.',
        solution: 'Both parents could be heterozygous (Dd) (1 mark). They each have one recessive allele (d) (1 mark). If both pass on the recessive allele, the child is dd (1 mark). The child is homozygous recessive and shows the recessive phenotype (no dimples) (1 mark).',
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
      subtopic_slug: 'punnett-squares',
      title: 'Punnett Squares | GCSE Biology',
      meta_description: 'Learn how to use Punnett squares to predict the outcome of genetic crosses for GCSE Biology examinations.',
      introduction: `Punnett squares are diagrams used to predict the possible offspring from a genetic cross. They show all possible combinations of alleles that offspring could inherit.

To complete a Punnett square: write one parent's gamete alleles along the top, the other parent's down the side, then fill in each box by combining the alleles from the row and column.

For a monohybrid cross (one gene), there are four boxes. If both parents are heterozygous (Aa × Aa), the offspring genotype ratio is 1 AA : 2 Aa : 1 aa, and phenotype ratio is 3 dominant : 1 recessive.

Ratios from Punnett squares are probabilities, not certainties. A 3:1 ratio means there's a 75% chance of dominant phenotype and 25% chance of recessive phenotype for each offspring.

Family pedigree diagrams can be analysed using Punnett squares to determine whether alleles are dominant or recessive and to predict genotypes of family members.`
    },
    questions: [
      {
        difficulty: 'easy',
        marks: 3,
        content: 'In pea plants, tall (T) is dominant to short (t). Use a Punnett square to show the offspring from crossing two heterozygous tall plants (Tt × Tt).',
        solution: 'Correct Punnett square setup with gametes T and t from each parent (1 mark). Offspring genotypes: TT, Tt, Tt, tt (1 mark). Ratio: 3 tall : 1 short or 75% tall, 25% short (1 mark).',
        display_order: 1
      },
      {
        difficulty: 'medium',
        marks: 4,
        content: 'In mice, black fur (B) is dominant to brown fur (b). A black mouse is crossed with a brown mouse. All offspring are black. What are the genotypes of the parents? Explain your answer.',
        solution: 'Black parent is BB (homozygous dominant) (1 mark). Brown parent must be bb (homozygous recessive to show brown phenotype) (1 mark). All offspring are Bb (1 mark). All offspring are black because they all have at least one dominant allele (1 mark).',
        display_order: 2
      },
      {
        difficulty: 'hard',
        marks: 5,
        content: 'In humans, the ability to roll the tongue (R) is dominant to non-rolling (r). Two tongue-rollers have four children: three can roll their tongues and one cannot. What are the genotypes of the parents? Calculate the probability that their next child will be a non-roller.',
        solution: 'Both parents must be heterozygous (Rr) (1 mark). Punnett square: Rr × Rr gives RR, Rr, Rr, rr (1 mark). Only rr offspring cannot roll tongue, matching the 3:1 ratio (1 mark). Probability of rr = 1/4 or 25% (1 mark). Each pregnancy has the same 25% probability regardless of previous children (1 mark).',
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
      subtopic_slug: 'genetic-disorders',
      title: 'Genetic Disorders | GCSE Biology',
      meta_description: 'Learn about genetic disorders including cystic fibrosis and polydactyly for GCSE Biology revision.',
      introduction: `Genetic disorders are caused by faulty alleles that are inherited from parents. Some disorders are caused by dominant alleles, others by recessive alleles.

Cystic fibrosis is caused by a recessive allele. A person must inherit two copies (be homozygous recessive) to have the disorder. People with one faulty allele and one normal allele are carriers - they don't have symptoms but can pass the allele to children.

Cystic fibrosis affects the lungs and digestive system, causing thick, sticky mucus. This leads to breathing difficulties, frequent chest infections, and problems digesting food.

Polydactyly (extra fingers or toes) is caused by a dominant allele. Only one copy of the faulty allele is needed to have the condition. An affected person has at least one affected parent.

Genetic testing can identify carriers of recessive disorders. This helps couples understand the risk of having affected children. A Punnett square can calculate the probability of inheriting a disorder.`
    },
    questions: [
      {
        difficulty: 'easy',
        marks: 2,
        content: 'State whether cystic fibrosis is caused by a dominant or recessive allele, and explain how someone can be a carrier.',
        solution: 'Cystic fibrosis is caused by a recessive allele (1 mark). A carrier has one normal allele and one faulty allele (heterozygous), so they don\'t have symptoms but can pass the allele to children (1 mark).',
        display_order: 1
      },
      {
        difficulty: 'medium',
        marks: 4,
        content: 'Two people who are carriers of cystic fibrosis have children. Use a Punnett square to calculate the probability that a child will have cystic fibrosis.',
        solution: 'Both parents are Ff (carriers) (1 mark). Punnett square: FF, Ff, Ff, ff (1 mark). Only ff has cystic fibrosis (1 mark). Probability = 1/4 or 25% (1 mark).',
        display_order: 2
      },
      {
        difficulty: 'hard',
        marks: 5,
        content: 'Polydactyly is caused by a dominant allele. A man with polydactyly (Pp) has children with a woman without polydactyly (pp). What percentage of their children would be expected to have polydactyly? Why might the actual results differ from this prediction?',
        solution: 'Punnett square: Pp × pp gives Pp, Pp, pp, pp (1 mark). Expected: 50% polydactyly (Pp), 50% normal (pp) (1 mark). Actual results might differ because inheritance involves chance/probability (1 mark). Small sample sizes may not reflect expected ratios (1 mark). Ratios are only averages over many offspring; individual families may vary (1 mark).',
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
      subtopic_slug: 'genetic-engineering',
      title: 'Genetic Engineering | GCSE Biology',
      meta_description: 'Learn about genetic engineering, GM crops, and gene therapy for GCSE Biology with clear explanations.',
      introduction: `Genetic engineering (genetic modification) involves transferring genes from one organism to another. This creates genetically modified organisms (GMOs) with new characteristics.

The process involves: identifying a useful gene in one organism, cutting it out using enzymes, inserting it into another organism's DNA (often using a vector like a plasmid), and allowing the modified organism to express the gene.

Insulin production is an example. The human insulin gene is inserted into bacteria. The bacteria multiply and produce human insulin, which is harvested to treat diabetes. This replaced insulin extracted from pigs or cows.

GM crops can be engineered for pest resistance (reducing need for pesticides), herbicide tolerance (allowing weeds to be killed without harming crop), improved nutritional content (like golden rice with vitamin A), or higher yields.

Genetic engineering is controversial. Benefits include treating diseases, producing medicines, and improving food production. Concerns include unknown long-term effects, genes spreading to wild populations, ethical issues about "playing God", and corporate control of food supply.`
    },
    questions: [
      {
        difficulty: 'easy',
        marks: 2,
        content: 'State two ways that crops can be genetically modified to improve them.',
        solution: 'Any two from: resistance to pests/insects, resistance to herbicides/weedkillers, improved nutritional content, higher yield, resistance to drought/disease (1 mark each, max 2).',
        display_order: 1
      },
      {
        difficulty: 'medium',
        marks: 4,
        content: 'Describe how bacteria are used to produce human insulin.',
        solution: 'The human insulin gene is identified and cut out using enzymes (1 mark). The gene is inserted into a bacterial plasmid/vector (1 mark). The modified plasmid is taken up by bacteria (1 mark). Bacteria multiply and produce insulin, which is extracted and purified (1 mark).',
        display_order: 2
      },
      {
        difficulty: 'hard',
        marks: 5,
        content: 'Discuss the advantages and disadvantages of growing GM crops.',
        solution: 'Advantages: Increased yield/more food production (1 mark). Reduced pesticide use/better for environment (1 mark). Crops can grow in difficult conditions. Disadvantages: Unknown long-term health effects (1 mark). Genes could spread to wild plants (1 mark). Concerns about biodiversity, corporate control of seeds, ethical issues about modifying organisms (1 mark for any valid disadvantage).',
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
      subtopic_slug: 'cloning',
      title: 'Cloning | GCSE Biology',
      meta_description: 'Learn about cloning including tissue culture, embryo transplants and adult cell cloning for GCSE Biology.',
      introduction: `A clone is an organism that is genetically identical to its parent. Cloning produces organisms with identical DNA. Plants clone naturally through asexual reproduction, but animal cloning requires technology.

Tissue culture produces plant clones from small pieces of tissue (explants). The tissue is placed in sterile nutrient medium containing growth hormones. Cells divide to form a mass of cells (callus), which develops into tiny plantlets. These are genetically identical to the parent.

Embryo transplants produce clones from livestock. An embryo is split at an early stage before cells specialise. Each group of cells is implanted into a surrogate mother and develops into a genetically identical animal.

Adult cell cloning (nuclear transfer) was used to create Dolly the sheep. The nucleus from an adult body cell is transferred into an egg cell whose nucleus has been removed. An electric shock stimulates division, and the embryo is implanted into a surrogate.

Cloning preserves desired characteristics. Benefits include producing identical plants with desirable features, saving endangered species, and producing animals with desired qualities. Concerns include reduced genetic variation, shortened lifespan of clones, and ethical issues.`
    },
    questions: [
      {
        difficulty: 'easy',
        marks: 2,
        content: 'Define what is meant by a clone.',
        solution: 'A clone is an organism that is genetically identical to another organism/its parent (1 mark). Clones have exactly the same DNA/genes (1 mark).',
        display_order: 1
      },
      {
        difficulty: 'medium',
        marks: 4,
        content: 'Describe how tissue culture is used to produce clones of plants.',
        solution: 'A small piece of tissue/explant is taken from the parent plant (1 mark). It is placed in sterile nutrient medium/agar containing growth hormones (1 mark). Cells divide to form a callus/mass of cells (1 mark). The callus develops into plantlets which are genetically identical to the parent (1 mark).',
        display_order: 2
      },
      {
        difficulty: 'hard',
        marks: 5,
        content: 'Describe the process of adult cell cloning and explain one advantage and one disadvantage of this technique.',
        solution: 'A body cell is taken from an adult animal (1 mark). The nucleus is removed and transferred into an enucleated egg cell (1 mark). The cell is stimulated to divide (using electric shock) and develops into an embryo, which is implanted into a surrogate mother (1 mark). Advantage: Can preserve desirable characteristics/save endangered species/produce organisms for medical research (1 mark). Disadvantage: Reduced genetic variation/clones may have shortened lifespan/low success rate/ethical concerns (1 mark).',
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
      meta_description: 'Learn about selective breeding, how it works and its uses in agriculture for GCSE Biology.',
      introduction: `Selective breeding (artificial selection) involves humans choosing organisms with desirable characteristics to breed together. Over many generations, this increases the frequency of desired traits in the population.

The process involves: identifying organisms with the desired characteristic, breeding these together, selecting the best offspring and breeding them, and repeating over many generations until the trait is consistently expressed.

In agriculture, selective breeding has produced: cows that give more milk or better quality meat, wheat with higher yields and disease resistance, chickens that produce more eggs, and dogs with specific appearances and temperaments.

Selective breeding has drawbacks. It reduces genetic variation because only certain individuals breed. This inbreeding can cause health problems and makes populations vulnerable to disease - if all organisms are genetically similar, a disease could wipe out the entire population.

Modern selective breeding uses genetic testing to identify organisms with desired genes before they show the characteristic. This speeds up the process but maintains the same principles of selecting for desired traits.`
    },
    questions: [
      {
        difficulty: 'easy',
        marks: 2,
        content: 'State two characteristics that cattle might be selectively bred for.',
        solution: 'Any two from: high milk yield, large size/more meat, quality of meat (tenderness, low fat), disease resistance, docile temperament, fast growth (1 mark each, max 2).',
        display_order: 1
      },
      {
        difficulty: 'medium',
        marks: 4,
        content: 'Describe the process of selective breeding to produce wheat with higher yields.',
        solution: 'Identify wheat plants that naturally produce high yields (1 mark). Breed these plants together (1 mark). Select the offspring with the highest yields and breed them together (1 mark). Repeat over many generations until high yield is consistently produced (1 mark).',
        display_order: 2
      },
      {
        difficulty: 'hard',
        marks: 5,
        content: 'Explain why selective breeding can be harmful to a species in the long term.',
        solution: 'Selective breeding reduces genetic variation in the population (1 mark). Only organisms with desired traits are bred, so other genes are lost (1 mark). Inbreeding (breeding related organisms) can occur (1 mark). This can lead to inherited health problems/genetic defects (1 mark). A disease could destroy the entire population because all individuals are genetically similar/lack resistance (1 mark).',
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
      subtopic_slug: 'fossils',
      title: 'Fossils | GCSE Biology',
      meta_description: 'Learn about fossil formation, types of fossils and what they tell us about evolution for GCSE Biology.',
      introduction: `Fossils are the preserved remains or traces of organisms that lived millions of years ago. They provide evidence for evolution by showing how organisms have changed over time.

Fossils form in several ways. Most commonly, hard parts like bones, shells, or teeth are gradually replaced by minerals over millions of years, turning them to stone (mineralisation). The organism must be buried quickly before it decomposes.

Sometimes an organism leaves an impression or mould in sediment. The organism decays, but the mould fills with minerals to create a cast fossil. Trace fossils include footprints, burrows, and droppings, which show animal behaviour.

In rare conditions, entire organisms can be preserved: in amber (tree resin), ice, tar pits, or peat bogs. These preserve soft tissues and even DNA.

The fossil record is incomplete. Many organisms didn't form fossils because they had soft bodies, weren't buried quickly, or lived in conditions that didn't favour preservation. Early life forms had few hard parts, so their fossil record is particularly sparse.`
    },
    questions: [
      {
        difficulty: 'easy',
        marks: 2,
        content: 'State two different ways that fossils can form.',
        solution: 'Any two from: mineralisation/replacement of hard parts, formation of casts/moulds, preservation in amber/ice/tar/peat, trace fossils (footprints, droppings) (1 mark each, max 2).',
        display_order: 1
      },
      {
        difficulty: 'medium',
        marks: 4,
        content: 'Explain why the fossil record is incomplete.',
        solution: 'Many organisms had soft bodies that decayed completely (1 mark). Organisms may not have been buried quickly enough to prevent decay (1 mark). Geological events may have destroyed fossils (1 mark). Early life forms were mainly soft-bodied so didn\'t fossilise well (1 mark).',
        display_order: 2
      },
      {
        difficulty: 'hard',
        marks: 4,
        content: 'Explain how fossils provide evidence for evolution.',
        solution: 'Fossils show organisms that no longer exist, indicating species have changed over time (1 mark). Deeper/older rock layers contain simpler organisms; newer layers show more complex forms (1 mark). Fossils show gradual changes in features over time (1 mark). Some fossils show intermediate forms/transitional features between groups (1 mark).',
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
      subtopic_slug: 'extinction',
      title: 'Extinction | GCSE Biology',
      meta_description: 'Learn about extinction, its causes and how species become endangered for GCSE Biology revision.',
      introduction: `Extinction occurs when there are no remaining living members of a species. Throughout Earth's history, many species have become extinct - more than 99% of species that ever lived are now extinct.

Natural causes of extinction include: changes in climate that species cannot adapt to, new diseases, new predators or competitors, and catastrophic events like volcanic eruptions or asteroid impacts.

Human activities have greatly increased extinction rates. Habitat destruction through deforestation and urbanisation removes places for organisms to live. Pollution damages environments and food chains. Hunting and overfishing reduce populations directly.

Introduction of non-native species can cause extinction of native species through competition, predation, or disease. Climate change is altering habitats faster than many species can adapt.

Species become endangered before extinction. Conservation efforts aim to protect endangered species through breeding programmes, habitat protection, legal protection from hunting, and seed banks. However, once a species is extinct, it is gone forever.`
    },
    questions: [
      {
        difficulty: 'easy',
        marks: 2,
        content: 'State two human activities that can cause species to become extinct.',
        solution: 'Any two from: habitat destruction/deforestation, pollution, hunting/overfishing, introducing non-native species, climate change (caused by human activities) (1 mark each, max 2).',
        display_order: 1
      },
      {
        difficulty: 'medium',
        marks: 4,
        content: 'Explain how the introduction of a non-native species could cause extinction of a native species.',
        solution: 'The non-native species may be a predator that the native species cannot escape (1 mark). Or it may compete for the same food/habitat and outcompete the native species (1 mark). The non-native species may introduce a new disease that the native species has no immunity to (1 mark). The native population decreases until extinction occurs (1 mark).',
        display_order: 2
      },
      {
        difficulty: 'hard',
        marks: 5,
        content: 'Suggest three methods that could be used to prevent an endangered mammal species from becoming extinct.',
        solution: 'Captive breeding programmes to increase population numbers (1 mark). Protect and restore natural habitat (1 mark). Create protected areas/nature reserves where hunting is banned (1 mark). Reduce pollution in their environment (1 mark). Education programmes to reduce hunting/poaching, international laws to protect the species (1 mark for any valid additional method).',
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
      subtopic_slug: 'classification',
      title: 'Classification | GCSE Biology',
      meta_description: 'Learn about biological classification, the Linnaean system and evolutionary trees for GCSE Biology.',
      introduction: `Classification is the organisation of living organisms into groups based on their similarities and differences. This helps scientists study, identify, and communicate about organisms.

The Linnaean system uses a hierarchy of groups: Kingdom, Phylum, Class, Order, Family, Genus, Species (remembered as "King Philip Came Over For Good Soup"). Each level contains groups from the level below it.

Organisms are named using binomial nomenclature - a two-part Latin name. The first part is the genus (capitalised), the second is the species (lowercase). Both are italicised: Homo sapiens, Canis familiaris.

Traditional classification was based on observable features (morphology). Modern classification also uses genetic analysis and evolutionary relationships. This has led to reclassification of some organisms as we understand their true relationships.

Carl Woese proposed the three-domain system based on genetic differences: Bacteria, Archaea, and Eukarya. Archaea were previously grouped with bacteria but are genetically distinct. Eukarya includes animals, plants, fungi, and protists - all organisms with a nucleus.`
    },
    questions: [
      {
        difficulty: 'easy',
        marks: 2,
        content: 'Put these classification groups in order from largest to smallest: Class, Kingdom, Species, Phylum.',
        solution: 'Kingdom, Phylum, Class, Species (2 marks for correct order, 1 mark for 2-3 correct positions).',
        display_order: 1
      },
      {
        difficulty: 'medium',
        marks: 3,
        content: 'Explain what binomial nomenclature means and give an example.',
        solution: 'Binomial nomenclature is a two-part naming system (1 mark). The first part is the genus, the second is the species (1 mark). Example: Homo sapiens (humans), Panthera leo (lion), or any valid scientific name (1 mark).',
        display_order: 2
      },
      {
        difficulty: 'hard',
        marks: 5,
        content: 'Explain why the classification of some organisms has changed in recent years.',
        solution: 'Traditional classification was based on physical features/appearance (1 mark). Modern classification uses genetic/DNA analysis (1 mark). Genetic evidence sometimes shows organisms that look similar are not closely related (1 mark). Or organisms that look different share a common ancestor (1 mark). Carl Woese\'s three-domain system reclassified organisms based on RNA sequences, separating Archaea from Bacteria (1 mark).',
        display_order: 3
      }
    ]
  }
];

export default gcseBiologyInheritanceExpanded;
