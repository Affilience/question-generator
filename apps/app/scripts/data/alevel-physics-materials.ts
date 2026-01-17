import { SubtopicData } from '../bulk-seo-insert';

export const alevelPhysicsMaterials: SubtopicData[] = [
  {
    content: {
      level: 'a-level',
      subject: 'physics',
      exam_board: 'aqa',
      topic_slug: 'materials',
      subtopic_slug: 'youngs-modulus',
      title: 'Young\'s Modulus | A-Level Physics',
      meta_description: 'Master Young\'s modulus calculations including stress, strain, and elastic behaviour. Essential A-Level Physics materials topic with worked examples.',
      introduction: `Young's modulus is a fundamental property that describes how stiff a material is - how much it resists elastic deformation under stress. Understanding Young's modulus is essential for A-Level Physics and engineering applications.

Stress (σ) is defined as the force per unit cross-sectional area: σ = F/A, measured in pascals (Pa) or N m⁻². It represents the internal forces within a material when external forces are applied.

Strain (ε) is the fractional change in length: ε = ΔL/L, where ΔL is the extension and L is the original length. Strain is dimensionless (no units) as it's a ratio of two lengths.

Young's modulus (E) is the ratio of stress to strain for a material within its elastic limit: E = σ/ε = (F/A)/(ΔL/L) = FL/AΔL. It has units of pascals (Pa). A higher Young's modulus indicates a stiffer material that resists deformation.

Young's modulus is a material property, not dependent on the dimensions of the sample. Steel has E ≈ 200 GPa, aluminium ≈ 70 GPa, and rubber ≈ 0.01 GPa. These values explain why steel structures can support greater loads with less deformation.

The relationship only applies within the elastic limit - the point up to which the material returns to its original shape when the load is removed. Beyond this, plastic deformation occurs and the material is permanently changed.`
    },
    questions: [
      {
        difficulty: 'easy',
        marks: 3,
        content: 'A wire of original length 2.0 m and cross-sectional area 1.5 mm² is stretched by a force of 300 N, producing an extension of 1.6 mm. Calculate the stress, strain, and Young\'s modulus.',
        solution: 'Stress = F/A = 300/(1.5 × 10⁻⁶) = 2.0 × 10⁸ Pa (1 mark). Strain = ΔL/L = 1.6 × 10⁻³/2.0 = 8.0 × 10⁻⁴ (1 mark). Young\'s modulus E = stress/strain = 2.0 × 10⁸/(8.0 × 10⁻⁴) = 2.5 × 10¹¹ Pa (1 mark).',
        display_order: 1
      },
      {
        difficulty: 'medium',
        marks: 4,
        content: 'A steel cable of length 15 m and diameter 8.0 mm supports a load of 5000 N. Calculate the extension of the cable. Young\'s modulus for steel = 2.0 × 10¹¹ Pa.',
        solution: 'Cross-sectional area A = π(d/2)² = π(4.0 × 10⁻³)² = 5.03 × 10⁻⁵ m² (1 mark). Using E = FL/AΔL, rearranging: ΔL = FL/(AE) (1 mark). ΔL = (5000 × 15)/(5.03 × 10⁻⁵ × 2.0 × 10¹¹) (1 mark). ΔL = 7.5 × 10⁻³ m = 7.5 mm (1 mark).',
        display_order: 2
      },
      {
        difficulty: 'hard',
        marks: 5,
        content: 'Two wires, one of steel (E = 2.0 × 10¹¹ Pa) and one of copper (E = 1.2 × 10¹¹ Pa), have the same length and are subjected to the same tensile force. The steel wire has diameter 1.0 mm. What diameter must the copper wire have to produce the same extension?',
        solution: 'For same extension with same force and length: ΔL = FL/(AE) must be equal (1 mark). Therefore A₁E₁ = A₂E₂ (since F and L are constant) (1 mark). For steel: A₁ = π(0.5 × 10⁻³)² = 7.85 × 10⁻⁷ m² (1 mark). A₂ = A₁E₁/E₂ = (7.85 × 10⁻⁷ × 2.0 × 10¹¹)/(1.2 × 10¹¹) = 1.31 × 10⁻⁶ m² (1 mark). d₂ = 2√(A₂/π) = 2√(1.31 × 10⁻⁶/π) = 1.29 × 10⁻³ m = 1.29 mm (1 mark).',
        display_order: 3
      }
    ]
  },
  {
    content: {
      level: 'a-level',
      subject: 'physics',
      exam_board: 'aqa',
      topic_slug: 'materials',
      subtopic_slug: 'properties-of-materials',
      title: 'Properties of Materials | A-Level Physics',
      meta_description: 'Learn about material properties including elastic and plastic behaviour, stress-strain curves, and material strength for A-Level Physics.',
      introduction: `Materials exhibit various mechanical properties that determine their suitability for different applications. Understanding these properties through stress-strain analysis is fundamental to A-Level Physics.

Stress-strain graphs reveal key information about material behaviour. The gradient of the linear portion gives Young's modulus. The elastic limit marks where elastic behaviour ends. The yield point is where plastic deformation begins significantly. The ultimate tensile strength (UTS) is the maximum stress a material can withstand.

Elastic materials return to their original shape when the deforming force is removed, provided they haven't exceeded the elastic limit. The elastic strain energy stored equals the area under the force-extension graph (or ½Fx for linear behaviour).

Plastic materials undergo permanent deformation beyond the elastic limit. Ductile materials like copper can be drawn into wires - they undergo significant plastic deformation before breaking. Brittle materials like glass break suddenly with little plastic deformation.

The breaking stress is the stress at which the material fractures. Tough materials absorb a lot of energy before breaking (large area under stress-strain curve). Strong materials have high UTS. Hard materials resist surface deformation.

Polymers show complex behaviour: they may be elastic like rubber (returning to original shape even after large strains) or plastic like polythene. Their properties depend on molecular structure and can change with temperature.`
    },
    questions: [
      {
        difficulty: 'easy',
        marks: 3,
        content: 'Describe the difference between elastic and plastic deformation. Give an example of a material that shows each type of behaviour.',
        solution: 'Elastic deformation: material returns to original shape when force is removed (1 mark). Example: rubber, spring steel. Plastic deformation: material is permanently deformed/doesn\'t return to original shape (1 mark). Example: copper wire when bent, modelling clay (1 mark for both examples).',
        display_order: 1
      },
      {
        difficulty: 'medium',
        marks: 4,
        content: 'A rubber band is stretched to twice its original length and released. Explain what happens to the energy transferred during stretching and why the band returns to its original shape.',
        solution: 'When stretched, work is done on the rubber band and energy is stored as elastic potential energy (1 mark). The elastic strain energy equals the area under the force-extension graph (1 mark). When released, this stored energy is converted back to kinetic energy as the band contracts (1 mark). The band returns to its original shape because rubber behaves elastically - the molecular chains return to their original arrangement when the force is removed (1 mark).',
        display_order: 2
      },
      {
        difficulty: 'hard',
        marks: 5,
        content: 'Sketch stress-strain graphs for a ductile material (like copper) and a brittle material (like glass). Label key features and explain why ductile materials are preferred for some applications despite having lower UTS than some brittle materials.',
        solution: 'Ductile material graph: Linear elastic region, then curves showing plastic deformation, large strain before breaking, clear yield point and UTS (1 mark). Brittle material graph: Straight line to breaking point, small strain at fracture, no plastic region (1 mark). Ductile materials give warning before failure - they deform visibly, allowing time for corrective action (1 mark). They can absorb energy through plastic deformation, making them tough (1 mark). Brittle materials fail suddenly without warning, which can be catastrophic in structural applications (1 mark).',
        display_order: 3
      }
    ]
  },
  {
    content: {
      level: 'a-level',
      subject: 'physics',
      exam_board: 'aqa',
      topic_slug: 'materials',
      subtopic_slug: 'density',
      title: 'Density | A-Level Physics',
      meta_description: 'Master density calculations and applications including floating, pressure in fluids, and material selection for A-Level Physics.',
      introduction: `Density is a fundamental property relating mass to volume. While introduced at GCSE, A-Level Physics requires deeper understanding of density in contexts including fluid mechanics, material selection, and buoyancy.

Density (ρ) is defined as mass per unit volume: ρ = m/V, with SI units of kg m⁻³. Different materials have characteristic densities: water is 1000 kg m⁻³, steel about 7800 kg m⁻³, air about 1.2 kg m⁻³.

For regular shapes, volume can be calculated geometrically. For irregular objects, displacement methods are used - measuring the volume of water displaced. Archimedes' principle states that an immersed object experiences an upthrust equal to the weight of fluid displaced.

Objects float when their average density is less than the fluid density. A floating object displaces its own weight of fluid. Submarines adjust their density by filling or emptying ballast tanks. Hot air balloons rise because heated air is less dense than surrounding cooler air.

Pressure in a fluid increases with depth: p = ρgh, where h is depth. This explains why dams are thicker at the bottom and why water pressure increases as divers descend.

Material selection often involves density considerations. Aircraft require low-density materials for fuel efficiency. Ships are made from steel but float because their overall density (including air spaces) is less than water.`
    },
    questions: [
      {
        difficulty: 'easy',
        marks: 3,
        content: 'A metal block has dimensions 5.0 cm × 4.0 cm × 3.0 cm and mass 432 g. Calculate the density of the metal and identify what metal it might be.',
        solution: 'Volume = 5.0 × 4.0 × 3.0 = 60 cm³ = 60 × 10⁻⁶ m³ (1 mark). Density = mass/volume = 0.432/(60 × 10⁻⁶) = 7200 kg m⁻³ (1 mark). This density suggests the metal could be iron/steel (≈7800 kg m⁻³) or tin (≈7300 kg m⁻³) (1 mark).',
        display_order: 1
      },
      {
        difficulty: 'medium',
        marks: 4,
        content: 'A cube of wood with side length 0.10 m floats in water with 60% of its volume submerged. Calculate the density of the wood. Density of water = 1000 kg m⁻³.',
        solution: 'When floating, weight of wood = upthrust = weight of water displaced (1 mark). Mass of wood = mass of water displaced. ρ_wood × V_wood = ρ_water × V_submerged (1 mark). ρ_wood × V = 1000 × 0.6V (1 mark). ρ_wood = 600 kg m⁻³ (1 mark).',
        display_order: 2
      },
      {
        difficulty: 'hard',
        marks: 5,
        content: 'A hollow steel sphere of outer radius 10 cm and inner radius 9 cm is placed in water. Determine whether it floats or sinks, and if it floats, calculate the fraction of its volume submerged. Density of steel = 7800 kg m⁻³, density of water = 1000 kg m⁻³.',
        solution: 'Volume of steel = (4/3)π(0.10³ - 0.09³) = (4/3)π(0.001 - 0.000729) = 1.14 × 10⁻³ m³ (1 mark). Mass of sphere = 7800 × 1.14 × 10⁻³ = 8.87 kg (1 mark). Total volume of sphere = (4/3)π(0.10)³ = 4.19 × 10⁻³ m³. Average density = 8.87/(4.19 × 10⁻³) = 2120 kg m⁻³ (1 mark). Since 2120 > 1000, the sphere sinks (1 mark). Alternative ending if calculation gave different result: Fraction submerged = ρ_average/ρ_water (1 mark).',
        display_order: 3
      }
    ]
  }
];

export default alevelPhysicsMaterials;
