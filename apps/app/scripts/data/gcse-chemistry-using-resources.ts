import { SubtopicData } from '../bulk-seo-insert';

export const gcseChemistryUsingResources: SubtopicData[] = [
  {
    content: {
      level: 'gcse',
      subject: 'chemistry',
      exam_board: 'aqa',
      topic_slug: 'using-resources',
      subtopic_slug: 'water-treatment',
      title: 'Water Treatment | GCSE Chemistry',
      meta_description: 'Learn about potable water production and wastewater treatment. Understand filtration, sterilisation, and desalination processes for GCSE Chemistry.',
      introduction: `Water treatment is essential for providing safe drinking water and managing wastewater. Understanding these processes is important for GCSE Chemistry, as it demonstrates the practical application of chemistry to public health and environmental protection.

Potable water is water that is safe to drink. It must have sufficiently low levels of dissolved salts and microbes to be consumed safely. Potable water is not the same as pure water - it still contains dissolved substances, but at concentrations that are safe for human consumption.

In the UK, most potable water comes from freshwater sources like rivers, lakes, and reservoirs. The treatment process involves several stages. First, large debris is removed by screens, then sedimentation allows smaller particles to settle. Filtration through sand or gravel beds removes finer particles and some microorganisms. Finally, sterilisation (usually with chlorine, ozone, or UV light) kills remaining pathogens.

In regions with limited freshwater, seawater must be treated through desalination. This can be achieved by distillation (evaporating water and condensing the vapour) or reverse osmosis (forcing water through membranes that block salt ions). Both methods are energy-intensive and expensive compared to treating freshwater.

Wastewater (sewage) treatment involves screening to remove large objects, primary treatment (sedimentation of organic matter), and secondary treatment where aerobic bacteria digest organic matter. This produces sewage sludge and effluent that can be safely discharged or further treated for reuse.`
    },
    questions: [
      {
        difficulty: 'easy',
        marks: 2,
        content: 'Define potable water and state two requirements it must meet.',
        solution: 'Potable water is water that is safe to drink (1 mark). It must have sufficiently low levels of: dissolved salts AND microbes/pathogens/bacteria (1 mark for both).',
        display_order: 1
      },
      {
        difficulty: 'medium',
        marks: 4,
        content: 'Describe the stages involved in treating freshwater from a river to make it potable.',
        solution: 'Large debris is removed by passing water through screens/filters (1 mark). Sedimentation/settling allows smaller particles to sink to the bottom (1 mark). Filtration through sand or gravel beds removes fine particles and some microorganisms (1 mark). Sterilisation using chlorine, ozone, or UV light kills any remaining pathogens/bacteria (1 mark).',
        display_order: 2
      },
      {
        difficulty: 'hard',
        marks: 5,
        content: 'Compare the processes of distillation and reverse osmosis for desalinating seawater. Include the advantages and disadvantages of each method.',
        solution: 'Distillation: seawater is heated until it evaporates, then the water vapour is condensed leaving salt behind (1 mark). Reverse osmosis: seawater is forced through a membrane at high pressure, the membrane allows water molecules through but blocks salt ions (1 mark). Both methods are energy-intensive and expensive (1 mark). Distillation requires large amounts of thermal energy for heating but produces very pure water (1 mark). Reverse osmosis requires less energy overall but membranes need regular replacement and maintenance, and pre-treatment is needed to prevent membrane damage (1 mark).',
        display_order: 3
      }
    ]
  },
  {
    content: {
      level: 'gcse',
      subject: 'chemistry',
      exam_board: 'aqa',
      topic_slug: 'using-resources',
      subtopic_slug: 'life-cycle-assessment',
      title: 'Life Cycle Assessment | GCSE Chemistry',
      meta_description: 'Master life cycle assessment (LCA) and environmental impact analysis of products. Learn about cradle-to-grave analysis for GCSE Chemistry.',
      introduction: `Life Cycle Assessment (LCA) is a tool used to evaluate the environmental impact of a product throughout its entire existence, from raw material extraction to disposal. Understanding LCA is essential for GCSE Chemistry, as it helps us make informed decisions about resource use and sustainability.

An LCA examines four main stages: raw material extraction, manufacturing and processing, use and operation during the product's lifetime, and end-of-life disposal or recycling. Each stage has environmental impacts that must be considered, including energy consumption, resource depletion, emissions, and waste generation.

During the raw material extraction stage, we consider the energy needed to obtain materials, the environmental damage from mining or harvesting, and transportation costs. Manufacturing impacts include energy use, water consumption, and emissions from industrial processes.

The use phase varies dramatically between products. A car has ongoing fuel consumption and emissions throughout its lifetime, while a plastic bag has minimal impact during use but significant disposal concerns. End-of-life assessment considers whether products can be recycled, reused, or must be disposed of in landfills or through incineration.

LCAs involve some subjectivity when assigning values to different types of environmental impact. How do you compare carbon emissions to water pollution or habitat destruction? Different assessors may reach different conclusions. Despite these limitations, LCAs provide valuable comparative data that helps manufacturers, consumers, and policymakers make more environmentally responsible choices.`
    },
    questions: [
      {
        difficulty: 'easy',
        marks: 2,
        content: 'State the four stages considered in a life cycle assessment of a product.',
        solution: '1. Raw material extraction (1 mark for any two stages), 2. Manufacturing/processing, 3. Use/operation during lifetime, 4. End of life disposal/recycling (1 mark for remaining two stages).',
        display_order: 1
      },
      {
        difficulty: 'medium',
        marks: 4,
        content: 'Explain why life cycle assessments can be subjective and may produce different results for the same product.',
        solution: 'Different types of environmental impact must be compared (e.g., carbon emissions vs water pollution) and there is no objective way to do this (1 mark). Values must be assigned to different impacts, which can vary between assessors (1 mark). Data may come from different sources with varying accuracy or methodology (1 mark). The boundaries of what is included in the assessment may differ (e.g., whether to include transportation of workers) (1 mark).',
        display_order: 2
      },
      {
        difficulty: 'hard',
        marks: 5,
        content: 'A manufacturer is comparing paper bags and plastic bags for a supermarket. Discuss the environmental impacts that should be considered at each stage of a life cycle assessment and suggest which factors might make the comparison difficult.',
        solution: 'Raw materials: Paper requires trees (renewable but land use and deforestation concerns) while plastic uses crude oil (finite resource) (1 mark). Manufacturing: Both require energy and water; paper production creates water pollution while plastic production creates emissions (1 mark). Use phase: Plastic bags are more durable and can be reused more times; paper bags may need to be doubled up (1 mark). End of life: Paper biodegrades relatively quickly; plastic takes hundreds of years but can be recycled if properly sorted (1 mark). Difficult comparisons include: weighing renewable vs non-renewable resources, comparing different types of pollution, and accounting for regional differences in recycling infrastructure and energy sources used in manufacturing (1 mark).',
        display_order: 3
      }
    ]
  },
  {
    content: {
      level: 'gcse',
      subject: 'chemistry',
      exam_board: 'aqa',
      topic_slug: 'using-resources',
      subtopic_slug: 'recycling',
      title: 'Recycling | GCSE Chemistry',
      meta_description: 'Learn about recycling metals, glass, and plastics. Understand the environmental and economic benefits of recycling for GCSE Chemistry.',
      introduction: `Recycling is the process of converting waste materials into new products, reducing the need for raw material extraction and minimising environmental impact. Understanding recycling processes is important for GCSE Chemistry, as it connects chemical knowledge to real-world sustainability challenges.

Metals are particularly valuable to recycle because their extraction from ores is energy-intensive and generates pollution. Aluminium recycling uses only 5% of the energy needed to extract it from bauxite ore, while steel recycling saves about 70% of the energy. Metals can be recycled almost indefinitely without losing their properties, making them ideal candidates for circular economy approaches.

Glass recycling involves crushing used glass (cullet) and melting it with raw materials to form new products. Using cullet reduces energy consumption by about 2-3% for every 10% of recycled glass added, as it melts at lower temperatures than raw materials. However, different coloured glasses must be separated to produce quality products.

Plastic recycling is more complex because different polymers have different properties and cannot be mixed. Most common plastics (PET, HDPE, PP) can be mechanically recycled by sorting, washing, shredding, and remelting. However, contamination and polymer degradation during recycling limit the number of times most plastics can be recycled. Some plastics can only be downcycled into lower-quality products.

The economic viability of recycling depends on collection costs, sorting technology, energy prices, and the value of recycled materials compared to virgin materials.`
    },
    questions: [
      {
        difficulty: 'easy',
        marks: 2,
        content: 'State two environmental benefits of recycling metals such as aluminium.',
        solution: 'Any two from: Uses less energy than extracting from ore (1 mark); Reduces mining/extraction of raw materials (1 mark); Produces less carbon dioxide/greenhouse gas emissions (1 mark); Reduces landfill waste (1 mark).',
        display_order: 1
      },
      {
        difficulty: 'medium',
        marks: 4,
        content: 'Explain why recycling plastics is more challenging than recycling metals and describe the main steps in the mechanical recycling of plastics.',
        solution: 'Different types of plastic/polymers have different properties and cannot be mixed together for recycling (1 mark). Plastics may degrade each time they are recycled, limiting reuse cycles (1 mark). Mechanical recycling steps: plastics are sorted by type (using density differences or infrared identification), then washed to remove contaminants (1 mark), then shredded/granulated and melted to form new products (1 mark).',
        display_order: 2
      },
      {
        difficulty: 'hard',
        marks: 5,
        content: 'Aluminium production from bauxite ore requires 15 kWh of electrical energy per kilogram of aluminium. Recycling aluminium uses only 0.75 kWh per kilogram. Calculate the percentage energy saving from recycling and discuss why, despite this significant saving, not all aluminium is recycled.',
        solution: 'Energy saved = 15 - 0.75 = 14.25 kWh per kg (1 mark). Percentage saving = (14.25/15) × 100 = 95% (1 mark). Despite this saving, not all aluminium is recycled because: collection and sorting of aluminium waste has costs (1 mark); aluminium may be contaminated or combined with other materials making separation difficult (1 mark); some aluminium products are not conveniently recyclable (e.g., aluminium foil, small items) or end up in general waste/landfill (1 mark).',
        display_order: 3
      }
    ]
  },
  {
    content: {
      level: 'gcse',
      subject: 'chemistry',
      exam_board: 'aqa',
      topic_slug: 'using-resources',
      subtopic_slug: 'rusting',
      title: 'Rusting and Corrosion | GCSE Chemistry',
      meta_description: 'Understand the chemistry of rusting and methods to prevent corrosion. Learn about oxidation reactions and protective coatings for GCSE Chemistry.',
      introduction: `Rusting is the corrosion of iron and steel when exposed to oxygen and water. Understanding rusting and corrosion prevention is essential for GCSE Chemistry, as these processes have enormous economic impacts and the prevention methods demonstrate important chemical principles.

Rusting is an oxidation reaction that requires both oxygen and water to be present. The iron is oxidised, losing electrons to form iron(III) ions, while oxygen is reduced. The product, hydrated iron(III) oxide (rust), is a flaky orange-brown substance with the formula Fe₂O₃·xH₂O. Unlike the protective oxide layers on aluminium, rust does not adhere to the surface, allowing corrosion to continue into the metal.

The presence of dissolved salts or acids in water accelerates rusting because ions in solution improve electrical conductivity, allowing electrons to flow more easily. This explains why cars rust faster in coastal areas or places where roads are salted in winter.

Several methods prevent rusting by creating barriers between iron and the reactants. Physical barriers include painting, oiling, greasing, or coating with plastic. Electroplating with metals like chromium or tin creates an attractive, protective layer. Galvanising (coating with zinc) is particularly effective because even if the coating is scratched, zinc preferentially corrodes instead of iron.

Sacrificial protection uses a more reactive metal (like zinc or magnesium blocks) attached to iron structures. The reactive metal corrodes preferentially, protecting the iron. This method is used on ships' hulls, underground pipelines, and offshore structures.`
    },
    questions: [
      {
        difficulty: 'easy',
        marks: 2,
        content: 'State the two substances that must be present for iron to rust and name the product formed.',
        solution: 'Oxygen and water must both be present for rusting (1 mark). The product formed is hydrated iron(III) oxide / iron(III) oxide / rust / Fe₂O₃·xH₂O (1 mark).',
        display_order: 1
      },
      {
        difficulty: 'medium',
        marks: 4,
        content: 'Explain how galvanising protects iron from rusting and why it is more effective than simply painting the iron.',
        solution: 'Galvanising is coating iron with zinc (1 mark). Zinc provides a physical barrier between iron and oxygen/water (1 mark). If the coating is scratched, zinc is more reactive than iron and corrodes preferentially/acts as a sacrificial metal (1 mark). Paint only provides a physical barrier, so if scratched, the exposed iron will rust, whereas galvanising continues to protect even when damaged (1 mark).',
        display_order: 2
      },
      {
        difficulty: 'hard',
        marks: 5,
        content: 'A steel ship\'s hull is protected from rusting using blocks of magnesium attached to the hull below the waterline. Explain how this method works, why magnesium is chosen rather than copper, and what maintenance this method requires.',
        solution: 'Magnesium is more reactive than iron, so it oxidises/corrodes preferentially when both metals are in electrical contact in the presence of an electrolyte (seawater) (1 mark). This is called sacrificial protection - the magnesium "sacrifices" itself to protect the iron (1 mark). Copper cannot be used because it is less reactive than iron, so the iron would still corrode preferentially and copper would actually accelerate the rusting (1 mark). The magnesium blocks are gradually consumed as they corrode (1 mark). Maintenance involves regularly inspecting and replacing the magnesium blocks before they are completely consumed (1 mark).',
        display_order: 3
      }
    ]
  },
  {
    content: {
      level: 'gcse',
      subject: 'chemistry',
      exam_board: 'aqa',
      topic_slug: 'using-resources',
      subtopic_slug: 'ceramics-polymers-composites',
      title: 'Ceramics, Polymers and Composites | GCSE Chemistry',
      meta_description: 'Learn about ceramics, polymers, and composite materials. Understand their properties, structures, and applications for GCSE Chemistry.',
      introduction: `Modern materials include ceramics, polymers, and composites, each with distinctive properties suited to specific applications. Understanding these materials is important for GCSE Chemistry, as they demonstrate how structure determines properties.

Ceramics are compounds made by heating clay and other mineral materials to high temperatures. Examples include pottery, bricks, glass, and modern technical ceramics. They typically have high melting points, are hard but brittle, and are good electrical and thermal insulators. Their ionic and covalent bonding in giant structures explains these properties.

Polymers are large molecules made from many repeating units (monomers) joined together. Thermosoftening polymers (like polythene and PVC) consist of tangled polymer chains with weak intermolecular forces between them. They soften when heated and can be remoulded repeatedly. Thermosetting polymers (like melamine and epoxy resins) have strong covalent cross-links between chains, making them rigid and unable to be softened by heating.

Composites are materials made from two or more different materials combined to achieve properties superior to either component alone. The components remain separate and distinct within the composite. Concrete (cement, sand, gravel, water) is strong in compression. Fibreglass combines glass fibres for strength with plastic resin for flexibility. Carbon fibre composites are extremely strong yet lightweight, used in aircraft and sports equipment.

The choice of material for any application depends on the required properties: strength, flexibility, density, thermal and electrical conductivity, corrosion resistance, and cost.`
    },
    questions: [
      {
        difficulty: 'easy',
        marks: 2,
        content: 'State two typical properties of ceramic materials.',
        solution: 'Any two from: High melting point (1 mark); Hard/rigid (1 mark); Brittle (1 mark); Good electrical insulator (1 mark); Good thermal insulator (1 mark).',
        display_order: 1
      },
      {
        difficulty: 'medium',
        marks: 4,
        content: 'Explain the difference between thermosoftening and thermosetting polymers in terms of their structure and behaviour when heated.',
        solution: 'Thermosoftening polymers consist of individual polymer chains with weak intermolecular forces between them (1 mark). When heated, these weak forces break and the chains can slide past each other, allowing the material to soften and be reshaped (1 mark). Thermosetting polymers have strong covalent cross-links/bonds between the polymer chains (1 mark). These cross-links cannot be broken by heating without decomposing the polymer, so thermosetting polymers do not soften and cannot be remoulded (1 mark).',
        display_order: 2
      },
      {
        difficulty: 'hard',
        marks: 5,
        content: 'Carbon fibre reinforced polymer (CFRP) is used to make bicycle frames instead of steel. Explain what a composite material is and discuss the advantages and disadvantages of using CFRP compared to steel for this application.',
        solution: 'A composite is a material made from two or more different materials that remain separate and distinct, combined to give properties neither has alone (1 mark). CFRP consists of carbon fibres embedded in a polymer matrix/resin (1 mark). Advantages of CFRP: much lower density/lighter weight than steel while maintaining high strength; high stiffness; can be moulded into aerodynamic shapes (1 mark). Disadvantages of CFRP: more expensive than steel; more difficult to repair if damaged; can fail suddenly/catastrophically rather than bending; may degrade with UV exposure (1 mark). The choice depends on balancing performance requirements (weight, strength) against cost and repairability (1 mark).',
        display_order: 3
      }
    ]
  },
  {
    content: {
      level: 'gcse',
      subject: 'chemistry',
      exam_board: 'aqa',
      topic_slug: 'using-resources',
      subtopic_slug: 'haber-process',
      title: 'The Haber Process | GCSE Chemistry',
      meta_description: 'Master the Haber process for ammonia production. Learn about industrial conditions, equilibrium, and catalysts for GCSE Chemistry.',
      introduction: `The Haber process is the industrial method for synthesising ammonia from nitrogen and hydrogen. Understanding this process is essential for GCSE Chemistry, as it demonstrates how industrial chemists balance reaction conditions to achieve economically viable production.

The reaction between nitrogen and hydrogen to form ammonia is reversible: N₂ + 3H₂ ⇌ 2NH₃. The forward reaction is exothermic, releasing about 92 kJ per mole of nitrogen reacted. This means that according to Le Chatelier's principle, lower temperatures favour ammonia production.

However, at low temperatures, the rate of reaction is too slow for industrial production. The Haber process uses a compromise temperature of about 450°C - high enough to give a reasonable rate but not so high that the equilibrium position shifts too far towards the reactants.

The reaction also involves a decrease in the number of gas molecules (4 on the left, 2 on the right), so high pressure favours ammonia formation. The process typically uses 200 atmospheres pressure. Higher pressures would give better yields but are expensive to maintain safely.

An iron catalyst speeds up the reaction without affecting the equilibrium position, allowing equilibrium to be reached faster at lower temperatures than would otherwise be possible. The catalyst does not change the yield, only how quickly it is achieved.

Under these conditions, only about 15-20% conversion to ammonia is achieved on each pass through the reactor. The ammonia is condensed and removed, while unreacted nitrogen and hydrogen are recycled, eventually achieving nearly complete conversion.`
    },
    questions: [
      {
        difficulty: 'easy',
        marks: 3,
        content: 'Write the balanced equation for the Haber process and state the industrial conditions used.',
        solution: 'N₂ + 3H₂ ⇌ 2NH₃ (1 mark). Conditions: Temperature of approximately 450°C (1 mark), pressure of approximately 200 atmospheres, and iron catalyst (1 mark for both).',
        display_order: 1
      },
      {
        difficulty: 'medium',
        marks: 4,
        content: 'The forward reaction in the Haber process is exothermic. Using Le Chatelier\'s principle, explain why a lower temperature would give a higher yield of ammonia, but why 450°C is used instead.',
        solution: 'The forward reaction is exothermic/releases heat (1 mark). Lowering temperature favours the exothermic direction to oppose the change, so more ammonia would form at equilibrium (1 mark). However, at low temperatures, the rate of reaction would be too slow for industrial production/particles have less energy so fewer successful collisions (1 mark). 450°C is a compromise: high enough for reasonable rate but not so high that equilibrium shifts too far back towards reactants (1 mark).',
        display_order: 2
      },
      {
        difficulty: 'hard',
        marks: 6,
        content: 'In the Haber process, only about 15% of the reactants are converted to ammonia on each pass through the reactor. Explain why this yield is achieved despite favourable conditions, describe how the process achieves near-complete overall conversion, and discuss why an iron catalyst is essential for economic production.',
        solution: 'The 450°C temperature favours the reverse reaction, limiting the equilibrium yield (1 mark). This is accepted because lower temperatures would make the reaction too slow (1 mark). Near-complete conversion is achieved by: cooling the gas mixture to condense and remove the ammonia (boiling point -33°C) (1 mark), and recycling the unreacted nitrogen and hydrogen back to the reactor (1 mark). The iron catalyst increases the rate of reaction by providing an alternative reaction pathway with lower activation energy (1 mark). Without the catalyst, the reaction would be too slow even at 450°C to be economically viable; the catalyst allows equilibrium to be reached quickly enough for continuous industrial production (1 mark).',
        display_order: 3
      }
    ]
  },
  {
    content: {
      level: 'gcse',
      subject: 'chemistry',
      exam_board: 'aqa',
      topic_slug: 'using-resources',
      subtopic_slug: 'npk-fertilisers',
      title: 'NPK Fertilisers | GCSE Chemistry',
      meta_description: 'Learn about NPK fertilisers and their production. Understand the importance of nitrogen, phosphorus, and potassium for plant growth in GCSE Chemistry.',
      introduction: `NPK fertilisers provide plants with essential nutrients needed for healthy growth. Understanding fertiliser chemistry is important for GCSE Chemistry, as it connects industrial chemical processes to agricultural productivity and food security.

Plants require three main nutrients in large quantities: nitrogen (N) for leaf and stem growth and protein synthesis, phosphorus (P) for root development and energy transfer, and potassium (K) for flower and fruit production and disease resistance. These are the N, P, and K in fertiliser labels.

Ammonium nitrate (NH₄NO₃) is a common nitrogen fertiliser produced by neutralising nitric acid with ammonia. Both the ammonium ion and nitrate ion contain nitrogen, giving a high nitrogen content of about 35%. Ammonium sulfate ((NH₄)₂SO₄) provides both nitrogen and sulfur.

Phosphate fertilisers are made by treating phosphate rock with acids. Treating with sulfuric acid produces single superphosphate, while treating with phosphoric acid produces triple superphosphate, which has a higher phosphorus content.

Potassium fertilisers are often mined as potassium chloride (KCl) or processed into potassium sulfate (K₂SO₄). Unlike nitrogen fertilisers that require significant chemical processing, potassium minerals can often be used with minimal treatment.

Modern compound fertilisers combine all three nutrients in precise ratios suited to specific crops and soil conditions. The NPK ratio (like 10-10-10 or 20-5-10) indicates the percentage of each nutrient. While fertilisers increase crop yields dramatically, excessive use can cause environmental problems including water pollution and eutrophication.`
    },
    questions: [
      {
        difficulty: 'easy',
        marks: 3,
        content: 'State what N, P, and K stand for in NPK fertilisers and give one role of each element in plant growth.',
        solution: 'N = Nitrogen - needed for leaf/stem growth or protein synthesis (1 mark). P = Phosphorus - needed for root development or energy transfer (1 mark). K = Potassium - needed for flower/fruit production or disease resistance (1 mark).',
        display_order: 1
      },
      {
        difficulty: 'medium',
        marks: 4,
        content: 'Ammonium nitrate is produced by reacting ammonia with nitric acid. Write the balanced equation for this reaction and explain why ammonium nitrate is particularly effective as a nitrogen fertiliser.',
        solution: 'NH₃ + HNO₃ → NH₄NO₃ (1 mark). Ammonium nitrate is effective because: it is very soluble in water so dissolves easily in soil water for plant uptake (1 mark); it contains nitrogen in two forms - both the ammonium ion (NH₄⁺) and nitrate ion (NO₃⁻) (1 mark); this gives a high nitrogen content (about 35% by mass) so less fertiliser is needed (1 mark).',
        display_order: 2
      },
      {
        difficulty: 'hard',
        marks: 5,
        content: 'A compound fertiliser has an NPK rating of 15-15-15. Calculate the mass of nitrogen, phosphorus (as P₂O₅), and potassium (as K₂O) in a 25 kg bag of this fertiliser. Discuss one environmental problem that can result from excessive fertiliser use and explain the chemistry involved.',
        solution: 'The 15-15-15 means 15% of each nutrient by mass (1 mark). Mass of each nutrient = 15/100 × 25 = 3.75 kg of N, 3.75 kg of P₂O₅, and 3.75 kg of K₂O (1 mark). Environmental problem: Eutrophication of water bodies (1 mark). Excess nitrates and phosphates dissolve and run off into rivers and lakes (1 mark). These nutrients cause rapid growth of algae (algal bloom) which blocks light; when the algae die, bacteria decompose them using up oxygen; this causes fish and other aquatic organisms to die from lack of oxygen (1 mark).',
        display_order: 3
      }
    ]
  }
];

export default gcseChemistryUsingResources;
