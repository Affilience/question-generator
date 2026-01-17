import { SubtopicData } from '../bulk-seo-insert';

export const gcseChemistryBonding: SubtopicData[] = [
  {
    content: {
      level: 'gcse',
      subject: 'chemistry',
      exam_board: 'aqa',
      topic_slug: 'bonding',
      subtopic_slug: 'ionic-bonding',
      title: 'Ionic Bonding | GCSE Chemistry',
      meta_description: 'Learn about ionic bonding, electron transfer, and the formation of ionic compounds. Master dot-and-cross diagrams for GCSE Chemistry success.',
      introduction: `Ionic bonding occurs when electrons are transferred from metal atoms to non-metal atoms, creating oppositely charged ions that attract each other. Understanding ionic bonding is fundamental to GCSE Chemistry and explains the properties of many common compounds.

When metals react with non-metals, metal atoms lose their outer electrons to achieve a stable electron configuration, forming positive ions (cations). Non-metal atoms gain these electrons to complete their outer shells, forming negative ions (anions). The electrostatic attraction between these oppositely charged ions is the ionic bond.

For example, when sodium reacts with chlorine, each sodium atom loses one electron to become Na⁺, while each chlorine atom gains one electron to become Cl⁻. The resulting sodium chloride consists of a regular arrangement of these ions held together by strong electrostatic forces.

Dot-and-cross diagrams show ionic bond formation by representing the outer electrons of each atom. The electrons from the metal are shown transferring to the non-metal, with the resulting ions shown in square brackets with their charges.

The number of electrons transferred depends on the group numbers of the elements involved. Group 1 metals lose one electron, Group 2 metals lose two electrons, Group 6 non-metals gain two electrons, and Group 7 non-metals gain one electron. This explains why magnesium chloride has the formula MgCl₂ - each magnesium atom must transfer electrons to two chlorine atoms.`
    },
    questions: [
      {
        difficulty: 'easy',
        marks: 2,
        content: 'Describe what happens to the electrons when sodium reacts with chlorine to form sodium chloride.',
        solution: 'Sodium atoms lose/transfer one electron to become Na⁺ ions (1 mark). Chlorine atoms gain one electron to become Cl⁻ ions (1 mark).',
        display_order: 1
      },
      {
        difficulty: 'medium',
        marks: 3,
        content: 'Explain why magnesium oxide has the formula MgO, referring to electron transfer.',
        solution: 'Magnesium is in Group 2 and loses 2 electrons to form Mg²⁺ (1 mark). Oxygen is in Group 6 and gains 2 electrons to form O²⁻ (1 mark). One magnesium atom provides exactly the electrons one oxygen atom needs, so the ratio is 1:1 giving MgO (1 mark).',
        display_order: 2
      },
      {
        difficulty: 'hard',
        marks: 4,
        content: 'Draw a dot-and-cross diagram to show the formation of calcium chloride (CaCl₂) from its atoms. Explain why two chlorine atoms are needed for each calcium atom.',
        solution: 'Diagram should show: Ca atom with 2 outer electrons, two Cl atoms each with 7 outer electrons (1 mark). Arrows or indication showing one electron transferring to each Cl (1 mark). Final ions: Ca²⁺ (empty outer shell shown) and two Cl⁻ ions (each with 8 outer electrons) in square brackets with charges (1 mark). Calcium needs to lose 2 electrons to achieve stable configuration, but each chlorine can only accept 1 electron, so 2 chlorine atoms are needed (1 mark).',
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
      meta_description: 'Master covalent bonding and electron sharing in molecules. Learn to draw dot-and-cross diagrams for simple and complex molecules in GCSE Chemistry.',
      introduction: `Covalent bonding occurs when atoms share pairs of electrons to achieve stable electron configurations. This type of bonding typically occurs between non-metal atoms and is essential for understanding molecular structures in GCSE Chemistry.

In a covalent bond, each atom contributes one electron to form a shared pair. This shared pair is attracted to the nuclei of both atoms, holding them together. The atoms achieve stable outer shells by sharing rather than transferring electrons.

Single covalent bonds involve one shared pair of electrons. Examples include H₂ (H-H), Cl₂ (Cl-Cl), and H₂O. Double bonds involve two shared pairs (like O₂ and CO₂), while triple bonds involve three shared pairs (like N₂).

Dot-and-cross diagrams for covalent molecules show the outer electrons of each atom, with shared pairs positioned between the bonded atoms. Different symbols (dots and crosses) distinguish electrons from different atoms, though all electrons are identical.

The number of covalent bonds an atom forms depends on how many electrons it needs to complete its outer shell. Hydrogen forms one bond (needs 1 electron), oxygen forms two bonds (needs 2 electrons), nitrogen forms three bonds (needs 3 electrons), and carbon forms four bonds (needs 4 electrons).`
    },
    questions: [
      {
        difficulty: 'easy',
        marks: 2,
        content: 'Describe what happens during covalent bonding and state what type of elements form covalent bonds.',
        solution: 'Atoms share pairs of electrons (1 mark). Covalent bonds form between non-metal atoms (1 mark).',
        display_order: 1
      },
      {
        difficulty: 'medium',
        marks: 3,
        content: 'Draw a dot-and-cross diagram for a molecule of water (H₂O) and explain why oxygen forms two bonds.',
        solution: 'Diagram showing oxygen with 6 outer electrons and two hydrogen atoms each with 1 electron (1 mark). Two shared pairs between O and each H, with oxygen having 2 lone pairs (1 mark). Oxygen has 6 outer electrons and needs 8 for a full shell, so it shares 2 electrons by forming 2 bonds (1 mark).',
        display_order: 2
      },
      {
        difficulty: 'hard',
        marks: 4,
        content: 'Draw dot-and-cross diagrams for nitrogen (N₂) and carbon dioxide (CO₂). State the type of covalent bond in each molecule.',
        solution: 'N₂: Each nitrogen has 5 outer electrons, shares 3 pairs between them, each N has 1 lone pair. Triple bond (1 mark for diagram, 1 mark for identifying triple bond). CO₂: Carbon shares 2 pairs with each oxygen, each oxygen has 2 lone pairs. Linear molecule with two double bonds (1 mark for diagram, 1 mark for identifying double bonds).',
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
      meta_description: 'Understand metallic bonding and the sea of delocalised electrons model. Learn how structure explains metal properties for GCSE Chemistry.',
      introduction: `Metallic bonding occurs in metals and alloys, where positive metal ions are held together by a sea of delocalised electrons. This unique bonding model explains the characteristic properties of metals in GCSE Chemistry.

In metallic bonding, metal atoms lose their outer electrons, which become delocalised - free to move throughout the entire metal structure. The resulting positive ions are arranged in a regular lattice, surrounded by these mobile electrons. The electrostatic attraction between the positive ions and the negative electron sea holds the structure together.

This bonding model explains why metals conduct electricity: the delocalised electrons can flow through the metal when a voltage is applied. It also explains thermal conductivity, as the mobile electrons can transfer kinetic energy rapidly through the structure.

Metals are malleable (can be hammered into shape) and ductile (can be drawn into wires) because the layers of ions can slide over each other without breaking the metallic bonds. The electron sea simply redistributes around the ions in their new positions.

The strength of metallic bonding depends on the number of delocalised electrons and the size of the metal ion. Metals with more delocalised electrons (like those in Group 2 compared to Group 1) generally have higher melting points and are stronger.`
    },
    questions: [
      {
        difficulty: 'easy',
        marks: 2,
        content: 'Describe the structure of a metal in terms of metallic bonding.',
        solution: 'Metals consist of positive ions arranged in a regular lattice/structure (1 mark). These are surrounded by a sea of delocalised/free electrons (1 mark).',
        display_order: 1
      },
      {
        difficulty: 'medium',
        marks: 3,
        content: 'Use the metallic bonding model to explain why metals are good conductors of electricity.',
        solution: 'Metals contain delocalised/free electrons (1 mark). These electrons can move through the metal structure (1 mark). When a voltage is applied, the electrons flow, carrying electrical charge/current (1 mark).',
        display_order: 2
      },
      {
        difficulty: 'hard',
        marks: 4,
        content: 'Explain why metals are malleable and ductile, but ionic compounds are brittle. Use diagrams or descriptions of the structures to support your answer.',
        solution: 'In metals, layers of positive ions can slide over each other (1 mark). The delocalised electrons can move to maintain bonding in the new positions, so the structure doesn\'t break (1 mark). In ionic compounds, ions are held in fixed positions. If layers shift, ions of the same charge come next to each other (1 mark). These like charges repel, causing the structure to shatter/break apart (1 mark).',
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
      subtopic_slug: 'ionic-compounds',
      title: 'Properties of Ionic Compounds | GCSE Chemistry',
      meta_description: 'Learn about ionic compound properties including high melting points, brittleness, and electrical conductivity for GCSE Chemistry.',
      introduction: `Ionic compounds have distinctive properties that arise from their giant ionic lattice structure. Understanding how structure determines properties is a key skill for GCSE Chemistry.

Ionic compounds form giant lattice structures where each ion is surrounded by oppositely charged ions. This three-dimensional arrangement maximises the attractive forces between ions while minimising repulsion between like-charged ions.

The strong electrostatic forces between ions require large amounts of energy to overcome, giving ionic compounds high melting and boiling points. Sodium chloride, for example, melts at 801°C. The larger the charges on the ions and the smaller the ions, the stronger the forces and higher the melting point.

Ionic compounds are brittle because displacing the layers causes ions of like charge to align, creating repulsion that shatters the crystal. This contrasts with the malleability of metals.

Ionic compounds conduct electricity only when molten or dissolved in water. In the solid state, ions are fixed in the lattice and cannot move. When melted or dissolved, the ions become mobile and can carry electrical charge. This property is used in electrolysis to extract reactive metals and manufacture chemicals.

Most ionic compounds dissolve in water because water molecules can surround and separate the ions, overcoming the lattice forces.`
    },
    questions: [
      {
        difficulty: 'easy',
        marks: 2,
        content: 'State two physical properties of ionic compounds.',
        solution: 'Any two from: High melting/boiling points (1 mark); Conduct electricity when molten or dissolved/in solution (1 mark); Brittle/hard (1 mark); Often soluble in water (1 mark).',
        display_order: 1
      },
      {
        difficulty: 'medium',
        marks: 3,
        content: 'Explain why sodium chloride has a high melting point.',
        solution: 'Sodium chloride has a giant ionic lattice structure (1 mark). There are strong electrostatic forces of attraction between the oppositely charged Na⁺ and Cl⁻ ions (1 mark). A lot of energy is needed to overcome these strong forces (1 mark).',
        display_order: 2
      },
      {
        difficulty: 'hard',
        marks: 4,
        content: 'Explain why solid sodium chloride does not conduct electricity, but molten sodium chloride does conduct electricity.',
        solution: 'In solid sodium chloride, the ions are held in fixed positions in the lattice (1 mark). The ions cannot move, so they cannot carry electrical charge/current (1 mark). When molten, the ionic bonds are broken and the ions become free to move (1 mark). The mobile ions can now move towards electrodes and carry electrical charge (1 mark).',
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
      subtopic_slug: 'simple-molecular',
      title: 'Simple Molecular Substances | GCSE Chemistry',
      meta_description: 'Understand simple molecular substances, intermolecular forces, and why they have low melting points for GCSE Chemistry examination success.',
      introduction: `Simple molecular substances consist of small molecules held together by weak intermolecular forces. Understanding the difference between covalent bonds within molecules and forces between molecules is essential for GCSE Chemistry.

Within each molecule, atoms are held together by strong covalent bonds. However, between molecules, only weak intermolecular forces (such as van der Waals forces) exist. These weak forces require little energy to overcome.

Simple molecular substances have low melting and boiling points because only the weak intermolecular forces need to be broken when changing state - the covalent bonds within molecules remain intact. This explains why substances like water (H₂O), methane (CH₄), and oxygen (O₂) are gases or liquids at room temperature.

Simple molecular substances do not conduct electricity because they have no free electrons or ions. Even when molten, they consist of neutral molecules that cannot carry charge.

The strength of intermolecular forces increases with molecular size. Larger molecules have more electrons, creating stronger temporary dipoles and attractions. This explains why larger hydrocarbons have higher boiling points than smaller ones - pentane (C₅H₁₂) is liquid while methane (CH₄) is a gas at room temperature.

Most simple molecular substances are insoluble in water unless they can form hydrogen bonds with water molecules, like alcohols and sugars.`
    },
    questions: [
      {
        difficulty: 'easy',
        marks: 2,
        content: 'Explain why simple molecular substances have low melting points.',
        solution: 'Simple molecular substances have weak intermolecular forces/forces between molecules (1 mark). Little energy is needed to overcome these weak forces (1 mark).',
        display_order: 1
      },
      {
        difficulty: 'medium',
        marks: 3,
        content: 'Methane (CH₄) has a much lower boiling point than sodium chloride (NaCl). Explain this difference in terms of structure and bonding.',
        solution: 'Methane is a simple molecular substance with weak intermolecular forces between molecules, requiring little energy to separate them (1 mark). Sodium chloride is a giant ionic lattice with strong electrostatic forces between ions (1 mark). Much more energy is needed to overcome the strong ionic bonds in NaCl compared to the weak intermolecular forces in methane (1 mark).',
        display_order: 2
      },
      {
        difficulty: 'hard',
        marks: 4,
        content: 'Explain why the boiling point of alkanes increases as the chain length increases (methane -162°C, ethane -89°C, propane -42°C, butane -1°C).',
        solution: 'Alkanes are simple molecular substances with weak intermolecular forces between molecules (1 mark). Larger molecules have more electrons (1 mark). More electrons create stronger intermolecular forces/van der Waals forces/London forces (1 mark). Stronger forces require more energy to overcome, resulting in higher boiling points for longer chain alkanes (1 mark).',
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
      subtopic_slug: 'giant-covalent',
      title: 'Giant Covalent Structures | GCSE Chemistry',
      meta_description: 'Learn about giant covalent structures including diamond, graphite, and silicon dioxide. Understand their properties for GCSE Chemistry.',
      introduction: `Giant covalent structures, also called macromolecular structures, consist of billions of atoms all bonded together by covalent bonds in a continuous network. These structures have very different properties from simple molecular substances.

In giant covalent structures, every atom is bonded to several neighbouring atoms by strong covalent bonds. There are no separate molecules - the entire structure is one giant molecule. Breaking the structure requires breaking many strong covalent bonds.

This gives giant covalent substances very high melting and boiling points. Diamond and silicon dioxide (sand) both have melting points above 1700°C. The continuous network of strong bonds requires enormous energy to break.

Giant covalent substances are generally very hard because of the strong bonds in all directions. Diamond is the hardest known natural substance, used for cutting tools and drill bits.

Most giant covalent structures do not conduct electricity because all electrons are localised in covalent bonds - there are no free electrons or ions to carry charge. Graphite is an important exception, where delocalised electrons between layers allow electrical conduction.

Examples include diamond and graphite (both forms of carbon), silicon dioxide (SiO₂, found in sand and quartz), and silicon carbide (SiC, used as an abrasive).`
    },
    questions: [
      {
        difficulty: 'easy',
        marks: 2,
        content: 'State two properties of giant covalent structures and give an example of a giant covalent substance.',
        solution: 'Properties (any two): Very high melting/boiling points, very hard, do not conduct electricity (except graphite) (1 mark). Example: Diamond, graphite, silicon dioxide/sand/quartz (1 mark).',
        display_order: 1
      },
      {
        difficulty: 'medium',
        marks: 3,
        content: 'Explain why diamond has a very high melting point.',
        solution: 'Diamond has a giant covalent structure (1 mark). Each carbon atom is bonded to four other carbon atoms by strong covalent bonds (1 mark). Many strong covalent bonds must be broken to melt diamond, requiring a lot of energy (1 mark).',
        display_order: 2
      },
      {
        difficulty: 'hard',
        marks: 4,
        content: 'Both diamond and silicon dioxide (SiO₂) are giant covalent structures. Explain why both substances have similar properties in terms of melting point and electrical conductivity.',
        solution: 'Both have giant covalent structures with continuous networks of strong covalent bonds (1 mark). Breaking these structures requires breaking many strong covalent bonds, so both have very high melting points (1 mark). In both structures, all outer electrons are used in covalent bonding (1 mark). There are no delocalised electrons or ions, so neither conducts electricity (1 mark).',
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
      subtopic_slug: 'diamond-graphite',
      title: 'Diamond and Graphite | GCSE Chemistry',
      meta_description: 'Compare diamond and graphite structures and properties. Understand why graphite conducts electricity but diamond doesn\'t for GCSE Chemistry.',
      introduction: `Diamond and graphite are both allotropes of carbon - different structural forms of the same element. Despite being made of the same atoms, their different structures give them dramatically different properties, making them an important study in GCSE Chemistry.

In diamond, each carbon atom is covalently bonded to four other carbon atoms in a tetrahedral arrangement. This creates a rigid three-dimensional network with no weak points. Diamond is extremely hard, has a very high melting point, and does not conduct electricity because all electrons are localised in bonds.

In graphite, each carbon atom is bonded to three others in flat hexagonal layers. The fourth outer electron from each carbon becomes delocalised, free to move between the layers. The layers are held together only by weak intermolecular forces.

Graphite's structure explains its unique properties. It's soft and slippery because layers can slide over each other easily - useful in pencils and lubricants. It conducts electricity parallel to the layers because delocalised electrons can move through them.

Both substances have very high melting points because strong covalent bonds must be broken in both cases. The differences in hardness and electrical conductivity arise from the different arrangements of bonds and the presence or absence of delocalised electrons.

Graphite is used in pencils, lubricants, and electrodes. Diamond is used in cutting tools, jewellery, and as an abrasive.`
    },
    questions: [
      {
        difficulty: 'easy',
        marks: 2,
        content: 'State one similarity and one difference between diamond and graphite.',
        solution: 'Similarity: Both are made of carbon atoms only / both have high melting points / both are giant covalent structures (1 mark). Difference: Any valid difference such as: diamond is hard, graphite is soft; diamond doesn\'t conduct electricity, graphite does; different structures (1 mark).',
        display_order: 1
      },
      {
        difficulty: 'medium',
        marks: 4,
        content: 'Explain why graphite can conduct electricity but diamond cannot.',
        solution: 'In graphite, each carbon atom bonds to only three other carbon atoms (1 mark). This leaves one outer electron from each carbon that becomes delocalised/free to move (1 mark). These delocalised electrons can move through the layers, carrying electrical charge (1 mark). In diamond, each carbon bonds to four others, so all outer electrons are used in bonding with no free electrons (1 mark).',
        display_order: 2
      },
      {
        difficulty: 'hard',
        marks: 5,
        content: 'Explain why graphite is soft and slippery despite having strong covalent bonds, and why it is useful as a lubricant.',
        solution: 'In graphite, carbon atoms are arranged in flat hexagonal layers (1 mark). Within each layer, atoms are held by strong covalent bonds (1 mark). Between the layers, there are only weak intermolecular forces (1 mark). These weak forces allow layers to slide over each other easily, making graphite soft (1 mark). This property makes it useful as a lubricant because the layers can slide between moving parts, reducing friction (1 mark).',
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
      subtopic_slug: 'graphene-fullerenes',
      title: 'Graphene and Fullerenes | GCSE Chemistry',
      meta_description: 'Discover graphene and fullerenes including buckminsterfullerene and carbon nanotubes. Learn their structures and applications for GCSE Chemistry.',
      introduction: `Graphene and fullerenes are relatively recently discovered forms of carbon with remarkable properties. Understanding these structures and their applications is part of modern GCSE Chemistry.

Graphene is a single layer of graphite - a sheet of carbon atoms arranged in hexagons, just one atom thick. Despite being incredibly thin, graphene is the strongest material ever measured, about 200 times stronger than steel. It also conducts electricity excellently due to delocalised electrons.

Graphene's properties make it promising for many applications: flexible touchscreens, ultra-fast electronics, composite materials for aircraft and cars, and water filtration membranes. However, manufacturing large sheets of pure graphene remains challenging and expensive.

Fullerenes are carbon molecules shaped like hollow balls or tubes. Buckminsterfullerene (C₆₀) is shaped like a football, with 60 carbon atoms forming pentagons and hexagons. It was discovered in 1985 and named after architect Buckminster Fuller, who designed geodesic domes.

Carbon nanotubes are cylindrical fullerenes - essentially rolled-up sheets of graphene. They are incredibly strong for their weight and conduct electricity well. Applications include reinforcing composite materials, drug delivery systems (molecules can be trapped inside), electronics, and nanotechnology.

These new forms of carbon demonstrate how atomic arrangement dramatically affects properties, even when the element is the same.`
    },
    questions: [
      {
        difficulty: 'easy',
        marks: 2,
        content: 'Describe the structure of graphene.',
        solution: 'Graphene is a single layer/sheet of carbon atoms (1 mark). The carbon atoms are arranged in hexagons/hexagonal rings (1 mark).',
        display_order: 1
      },
      {
        difficulty: 'medium',
        marks: 3,
        content: 'Explain why graphene can conduct electricity and suggest one application that uses this property.',
        solution: 'Each carbon atom in graphene bonds to three other carbon atoms (1 mark). This leaves one electron per carbon that is delocalised/free to move through the structure (1 mark). Application: Electronics, touchscreens, solar cells, or any reasonable electronic application (1 mark).',
        display_order: 2
      },
      {
        difficulty: 'hard',
        marks: 4,
        content: 'Describe the structure of buckminsterfullerene (C₆₀) and carbon nanotubes. Explain why fullerenes can be used for drug delivery.',
        solution: 'Buckminsterfullerene is a spherical/ball-shaped molecule made of 60 carbon atoms arranged in pentagons and hexagons (1 mark). Carbon nanotubes are cylindrical/tube-shaped structures made of carbon atoms in hexagonal arrangements, like rolled-up graphene (1 mark). Fullerenes are hollow structures (1 mark). Drug molecules can be trapped/placed inside the hollow structure and delivered to specific targets in the body / released at specific locations (1 mark).',
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
      subtopic_slug: 'properties-of-metals',
      title: 'Properties of Metals | GCSE Chemistry',
      meta_description: 'Learn about metal properties including conductivity, malleability, and ductility. Understand how metallic bonding explains these properties for GCSE Chemistry.',
      introduction: `Metals have characteristic properties that make them useful for many applications. Understanding how the metallic bonding model explains these properties is an important part of GCSE Chemistry.

Metals are excellent conductors of electricity. The delocalised electrons in the metallic structure can move freely throughout the metal. When a voltage is applied, these electrons flow, carrying electrical current. This makes metals essential for electrical wiring and electronic components.

Metals are also good conductors of heat. The delocalised electrons can transfer kinetic energy rapidly through the structure. When one part of a metal is heated, the energetic electrons quickly distribute this energy throughout the material.

Metals are malleable (can be hammered or pressed into shapes) and ductile (can be drawn into wires). When force is applied, layers of metal ions can slide over each other. The electron sea immediately adjusts to maintain bonding in the new arrangement, so the metal changes shape without breaking.

Most metals have high melting points due to the strong attraction between positive ions and the electron sea. However, melting points vary - mercury is liquid at room temperature while tungsten melts at over 3400°C. Metals with smaller ions and more delocalised electrons generally have higher melting points.

These properties determine metal applications: copper for wiring (good conductor), aluminium for aircraft (light, strong), gold for jewellery (malleable, doesn't corrode).`
    },
    questions: [
      {
        difficulty: 'easy',
        marks: 2,
        content: 'State two properties of metals and give one use that depends on each property.',
        solution: 'Property 1: Good electrical conductor - used for electrical wiring/cables (1 mark). Property 2: Malleable/ductile - used for making shaped objects/wires/car bodies (or: good thermal conductor - used for cooking pans/heat exchangers) (1 mark).',
        display_order: 1
      },
      {
        difficulty: 'medium',
        marks: 3,
        content: 'Use the metallic bonding model to explain why metals can be bent without breaking.',
        solution: 'In metals, positive ions are arranged in layers (1 mark). When force is applied, layers of ions can slide over each other (1 mark). The sea of delocalised electrons moves with the ions, maintaining the metallic bonds, so the structure doesn\'t break (1 mark).',
        display_order: 2
      },
      {
        difficulty: 'hard',
        marks: 4,
        content: 'Copper is used for electrical wiring while aluminium is used for overhead power cables. Use the properties of these metals to explain these choices.',
        solution: 'Copper is an excellent electrical conductor, allowing efficient transfer of electricity with minimal energy loss (1 mark). Copper is also ductile, so it can be drawn into thin wires (1 mark). Aluminium is also a good conductor and is much less dense/lighter than copper (1 mark). For overhead cables, the lower weight reduces stress on support structures and allows longer spans between pylons, outweighing its slightly lower conductivity (1 mark).',
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
      subtopic_slug: 'alloys',
      title: 'Alloys | GCSE Chemistry',
      meta_description: 'Understand what alloys are and why they are harder than pure metals. Learn about common alloys and their uses for GCSE Chemistry.',
      introduction: `Alloys are mixtures of metals, or metals with small amounts of other elements. They are designed to have properties superior to pure metals for specific applications. Understanding alloys is an important part of materials chemistry in GCSE Chemistry.

Pure metals are often too soft for many uses because their regular atomic arrangement allows layers to slide easily over each other. Alloys are harder because atoms of different sizes disrupt the regular arrangement, making it more difficult for layers to slide.

In an alloy, atoms of the added element fit between the metal atoms or replace some of them. Because these atoms are different sizes, they distort the regular lattice structure. This distortion prevents the easy movement of layers, increasing hardness and strength.

Common alloys include: steel (iron with carbon, sometimes with other metals), which is harder and stronger than pure iron; bronze (copper with tin), one of the first alloys used by humans; brass (copper with zinc), used for decorative items and musical instruments; and stainless steel (iron with chromium and nickel), which resists corrosion.

The properties of alloys can be fine-tuned by adjusting the composition. Different types of steel contain varying amounts of carbon and other elements to produce different properties - from flexible spring steel to hard tool steel.

Alloys are essential in modern technology: aircraft use aluminium alloys for strength with low weight, surgical implants use titanium alloys for biocompatibility, and coins use copper-nickel alloys for durability.`
    },
    questions: [
      {
        difficulty: 'easy',
        marks: 2,
        content: 'What is an alloy? Give one example of an alloy and state its composition.',
        solution: 'An alloy is a mixture of metals, or a metal with other elements (1 mark). Example: Steel (iron with carbon), brass (copper with zinc), bronze (copper with tin), or any other valid example with correct composition (1 mark).',
        display_order: 1
      },
      {
        difficulty: 'medium',
        marks: 3,
        content: 'Explain why alloys are generally harder than pure metals.',
        solution: 'Pure metals have a regular arrangement of atoms/ions of the same size, allowing layers to slide easily (1 mark). In alloys, atoms of different sizes are present (1 mark). These different-sized atoms distort the regular structure, making it more difficult for layers to slide over each other (1 mark).',
        display_order: 2
      },
      {
        difficulty: 'hard',
        marks: 4,
        content: 'Iron is often converted to steel for use in construction. Explain why steel is preferred over pure iron, and describe how different types of steel can have different properties.',
        solution: 'Pure iron is relatively soft because layers of atoms can slide over each other easily (1 mark). Steel contains carbon atoms of different size, which disrupt the regular arrangement and make layers harder to slide, increasing hardness and strength (1 mark). Different amounts of carbon produce steels with different properties: low carbon steel is more easily shaped, high carbon steel is harder but more brittle (1 mark). Other elements can be added: chromium and nickel make stainless steel which resists corrosion, tungsten increases hardness for cutting tools (1 mark).',
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
      subtopic_slug: 'nanoparticles',
      title: 'Nanoparticles | GCSE Chemistry',
      meta_description: 'Learn about nanoparticles, their unique properties, and applications. Understand surface area to volume ratios for GCSE Chemistry.',
      introduction: `Nanoparticles are particles between 1 and 100 nanometres in size, containing only a few hundred to a few thousand atoms. At this scale, materials can have very different properties from the bulk material, opening up new applications in GCSE Chemistry and beyond.

A nanometre (nm) is one billionth of a metre (10⁻⁹ m). Nanoparticles are much smaller than fine powders, with typical diameters of 1-100 nm compared to fine particles which might be 100-2500 nm.

Nanoparticles have very high surface area to volume ratios. As particle size decreases, the proportion of atoms on the surface increases dramatically. This makes nanoparticles highly reactive because more atoms are exposed and available to react.

This high surface area leads to useful applications: silver nanoparticles have antibacterial properties and are used in wound dressings and deodorants; titanium dioxide nanoparticles provide sun protection in sunscreens while appearing transparent; carbon nanotubes reinforce composite materials; nanoparticle catalysts are more efficient due to greater surface area.

However, there are concerns about nanoparticle safety. Their small size allows them to enter cells and potentially cause harm. The long-term health effects of many nanoparticles are not yet fully understood. There may also be environmental impacts if nanoparticles accumulate in ecosystems.

Balancing the benefits and risks of nanotechnology is an ongoing challenge requiring careful research and regulation.`
    },
    questions: [
      {
        difficulty: 'easy',
        marks: 2,
        content: 'What is a nanoparticle and what size range do nanoparticles typically fall within?',
        solution: 'A nanoparticle is a very small particle containing a few hundred to a few thousand atoms (1 mark). Nanoparticles are typically 1-100 nanometres in diameter (1 mark).',
        display_order: 1
      },
      {
        difficulty: 'medium',
        marks: 3,
        content: 'Explain why nanoparticles have different properties from the same material in bulk form.',
        solution: 'Nanoparticles have a very high surface area to volume ratio (1 mark). A much larger proportion of atoms are on the surface compared to bulk materials (1 mark). This means more atoms are exposed and can react, making nanoparticles more reactive / giving different properties (1 mark).',
        display_order: 2
      },
      {
        difficulty: 'hard',
        marks: 4,
        content: 'Silver nanoparticles are used in wound dressings. Explain why nanoparticles are used rather than larger silver particles, and discuss one potential concern about the use of nanoparticles.',
        solution: 'Silver nanoparticles have antibacterial properties that help prevent infection (1 mark). The high surface area to volume ratio means more silver atoms contact bacteria, increasing effectiveness compared to larger particles (1 mark). Concern: Nanoparticles are small enough to enter cells and may cause damage (1 mark). Long-term health effects are not fully understood / they may accumulate in the body or environment with unknown consequences (1 mark).',
        display_order: 3
      }
    ]
  }
];

export default gcseChemistryBonding;
