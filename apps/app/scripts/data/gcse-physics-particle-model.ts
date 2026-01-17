import { SubtopicData } from '../bulk-seo-insert';

export const gcsePhysicsParticleModel: SubtopicData[] = [
  {
    content: {
      level: 'gcse',
      subject: 'physics',
      exam_board: 'aqa',
      topic_slug: 'particle-model',
      subtopic_slug: 'density',
      title: 'Density | GCSE Physics',
      meta_description: 'Master density calculations and measurements. Learn the relationship between mass, volume, and density for GCSE Physics.',
      introduction: `Density is a measure of how much mass is packed into a given volume. Understanding density is fundamental to GCSE Physics and explains why some objects float while others sink.

The density of a material is calculated using the formula: density = mass ÷ volume, or ρ = m/V. The Greek letter rho (ρ) is used to represent density. In SI units, density is measured in kilograms per cubic metre (kg/m³), though g/cm³ is also commonly used.

Different materials have different densities. Metals tend to have high densities - gold is about 19,300 kg/m³, while aluminium is only 2,700 kg/m³. Water has a density of 1,000 kg/m³ (or 1 g/cm³), which provides a useful reference point.

Objects float in fluids if their average density is less than the fluid's density. Wood floats on water because wood has a lower density than water. An object with density greater than the fluid will sink.

To measure the density of a regular solid, measure its mass using a balance and calculate its volume from its dimensions (length × width × height for a cuboid, or πr²h for a cylinder). For irregular solids, volume is found by displacement - measuring the volume of water displaced when the object is submerged.

The density of liquids can be measured using a measuring cylinder for volume and a balance for mass. For gases, which have very low densities, special apparatus is needed to contain a measurable mass.`
    },
    questions: [
      {
        difficulty: 'easy',
        marks: 2,
        content: 'A block of metal has a mass of 500 g and a volume of 200 cm³. Calculate its density in g/cm³.',
        solution: 'Density = mass/volume (1 mark). Density = 500/200 = 2.5 g/cm³ (1 mark).',
        display_order: 1
      },
      {
        difficulty: 'medium',
        marks: 3,
        content: 'An irregular shaped stone has a mass of 84 g. When placed in a measuring cylinder containing 50 cm³ of water, the water level rises to 80 cm³. Calculate the density of the stone.',
        solution: 'Volume of stone = 80 - 50 = 30 cm³ (1 mark). Density = mass/volume = 84/30 (1 mark). Density = 2.8 g/cm³ (1 mark).',
        display_order: 2
      },
      {
        difficulty: 'hard',
        marks: 4,
        content: 'A cube of material with sides of 5 cm has a density of 8000 kg/m³. Calculate the mass of the cube in kilograms.',
        solution: 'Volume = 5 × 5 × 5 = 125 cm³ = 125 × 10⁻⁶ m³ (1 mark). OR Volume = 0.05 × 0.05 × 0.05 = 1.25 × 10⁻⁴ m³ (1 mark). Rearranging ρ = m/V gives m = ρV (1 mark). Mass = 8000 × 1.25 × 10⁻⁴ (1 mark). Mass = 1.0 kg (1 mark).',
        display_order: 3
      }
    ]
  },
  {
    content: {
      level: 'gcse',
      subject: 'physics',
      exam_board: 'aqa',
      topic_slug: 'particle-model',
      subtopic_slug: 'states-of-matter',
      title: 'States of Matter | GCSE Physics',
      meta_description: 'Understand the three states of matter and particle arrangement. Learn about solids, liquids, and gases for GCSE Physics.',
      introduction: `Matter exists in three common states: solid, liquid, and gas. The particle model helps explain the properties of each state and the differences between them, making it fundamental to GCSE Physics.

In solids, particles are held in fixed positions by strong forces of attraction. They vibrate about their fixed positions but cannot move from place to place. This gives solids a definite shape and volume. Solids cannot be easily compressed because particles are already close together.

In liquids, particles are still close together but are free to move past each other. The forces between particles are weaker than in solids. This allows liquids to flow and take the shape of their container while maintaining a fixed volume. Like solids, liquids are difficult to compress.

In gases, particles are far apart and move rapidly in random directions. The forces between particles are very weak, and particles frequently collide with each other and the container walls. Gases have no fixed shape or volume - they expand to fill any container. Gases can be easily compressed because of the large spaces between particles.

The density of a substance decreases from solid to liquid to gas because particles become more spread out. Energy is needed to change between states because forces between particles must be overcome. Temperature affects particle speed and energy - heating increases particle motion.

The particle model explains many everyday observations: why solids keep their shape, why liquids pour, why gases fill their containers, and why heating causes expansion.`
    },
    questions: [
      {
        difficulty: 'easy',
        marks: 2,
        content: 'Describe the arrangement and movement of particles in a solid.',
        solution: 'Particles are arranged in a regular pattern/close together/fixed positions (1 mark). Particles vibrate about fixed positions but cannot move from place to place (1 mark).',
        display_order: 1
      },
      {
        difficulty: 'medium',
        marks: 3,
        content: 'Use the particle model to explain why gases can be compressed but solids cannot.',
        solution: 'In gases, particles are far apart with large spaces between them (1 mark). When pressure is applied, particles can be pushed closer together into these spaces (1 mark). In solids, particles are already as close together as possible, so there is no space for them to move into (1 mark).',
        display_order: 2
      },
      {
        difficulty: 'hard',
        marks: 4,
        content: 'Use the particle model to explain why the density of water decreases when it changes from liquid at 4°C to solid ice at 0°C.',
        solution: 'In liquid water, particles are close together and can move past each other (1 mark). When water freezes, particles form a regular crystalline structure (1 mark). In ice, the crystal structure holds particles in fixed positions that are actually further apart than in liquid water (1 mark). Since the same mass occupies a larger volume, the density decreases (1 mark). Note: This is unusual - most substances are denser as solids.',
        display_order: 3
      }
    ]
  },
  {
    content: {
      level: 'gcse',
      subject: 'physics',
      exam_board: 'aqa',
      topic_slug: 'particle-model',
      subtopic_slug: 'changes-of-state',
      title: 'Changes of State | GCSE Physics',
      meta_description: 'Learn about melting, freezing, boiling, and condensation. Understand how energy affects state changes for GCSE Physics.',
      introduction: `Changes of state occur when substances transition between solid, liquid, and gas phases. Understanding these changes in terms of energy and particles is important for GCSE Physics.

Melting is the change from solid to liquid. When a solid is heated, particles gain energy and vibrate more. At the melting point, particles have enough energy to break free from their fixed positions and move around each other. The reverse process, freezing, occurs at the same temperature.

Boiling and evaporation both involve changing from liquid to gas. Boiling occurs throughout the liquid at a specific temperature (the boiling point), while evaporation happens only at the surface and can occur at any temperature. Both processes require energy to overcome the attractive forces between particles.

Condensation is the change from gas to liquid, occurring when gas particles lose energy and the attractive forces pull them together. Sublimation is the direct change from solid to gas without passing through the liquid phase (like dry ice or frost disappearing).

During a change of state, the temperature remains constant even though energy is being added or removed. This is because the energy is being used to change the arrangement of particles (breaking or forming bonds) rather than increasing their kinetic energy.

Changes of state are physical changes, not chemical changes. The particles remain the same - only their arrangement and energy change. The mass is conserved during any change of state.`
    },
    questions: [
      {
        difficulty: 'easy',
        marks: 2,
        content: 'Name the change of state that occurs when water becomes steam, and state at what temperature this occurs at normal atmospheric pressure.',
        solution: 'Boiling (or evaporation, though boiling is the expected answer) (1 mark). 100°C (1 mark).',
        display_order: 1
      },
      {
        difficulty: 'medium',
        marks: 3,
        content: 'Explain why the temperature of water remains at 100°C while it is boiling, even though it is being heated.',
        solution: 'Energy is being supplied to the water (1 mark). This energy is used to break the bonds/overcome attractive forces between particles (1 mark). The energy changes the arrangement of particles rather than increasing their kinetic energy/temperature (1 mark).',
        display_order: 2
      },
      {
        difficulty: 'hard',
        marks: 4,
        content: 'A student heats ice from -20°C until it becomes steam at 120°C. Sketch a temperature-time graph for this process and label all the key stages.',
        solution: 'Graph should show: Diagonal line for ice heating from -20°C to 0°C (1 mark). Horizontal line at 0°C for melting (1 mark). Diagonal line for water heating from 0°C to 100°C (1 mark). Horizontal line at 100°C for boiling, then diagonal line for steam heating to 120°C (1 mark).',
        display_order: 3
      }
    ]
  },
  {
    content: {
      level: 'gcse',
      subject: 'physics',
      exam_board: 'aqa',
      topic_slug: 'particle-model',
      subtopic_slug: 'specific-latent-heat',
      title: 'Specific Latent Heat | GCSE Physics',
      meta_description: 'Master specific latent heat calculations for melting and boiling. Learn the energy required for state changes in GCSE Physics.',
      introduction: `Specific latent heat is the energy required to change the state of a substance without changing its temperature. Understanding latent heat is essential for GCSE Physics calculations involving state changes.

When a substance changes state, energy is needed to overcome the forces between particles. This energy is called latent heat ('latent' means hidden, because the energy doesn't cause a temperature change). The temperature stays constant during a change of state.

Specific latent heat of fusion (Lf) is the energy needed to change 1 kg of a solid to a liquid at its melting point. For ice, this is 334,000 J/kg (or 334 kJ/kg), meaning 334,000 J is needed to melt 1 kg of ice at 0°C to water at 0°C.

Specific latent heat of vaporisation (Lv) is the energy needed to change 1 kg of a liquid to a gas at its boiling point. For water, this is 2,260,000 J/kg (2.26 MJ/kg), much higher than the latent heat of fusion because more energy is needed to completely separate particles in a gas.

The energy equation for changes of state is: E = mL, where E is the energy transferred in joules (J), m is the mass in kilograms (kg), and L is the specific latent heat in J/kg.

When substances freeze or condense, they release latent heat to the surroundings. This is why steam burns are worse than boiling water burns - the steam releases latent heat as it condenses on skin.`
    },
    questions: [
      {
        difficulty: 'easy',
        marks: 2,
        content: 'State what is meant by the specific latent heat of fusion of a substance.',
        solution: 'The energy required to change 1 kg of a substance from solid to liquid (1 mark) at constant temperature/at its melting point (1 mark).',
        display_order: 1
      },
      {
        difficulty: 'medium',
        marks: 3,
        content: 'Calculate the energy required to melt 500 g of ice at 0°C. The specific latent heat of fusion of ice is 334,000 J/kg.',
        solution: 'Convert mass to kg: 500 g = 0.5 kg (1 mark). E = mL = 0.5 × 334,000 (1 mark). E = 167,000 J or 167 kJ (1 mark).',
        display_order: 2
      },
      {
        difficulty: 'hard',
        marks: 4,
        content: 'Calculate the total energy required to convert 200 g of ice at 0°C to steam at 100°C. Specific latent heat of fusion = 334 kJ/kg, specific heat capacity of water = 4200 J/kg°C, specific latent heat of vaporisation = 2260 kJ/kg.',
        solution: 'Energy to melt ice: E₁ = 0.2 × 334,000 = 66,800 J (1 mark). Energy to heat water from 0°C to 100°C: E₂ = 0.2 × 4200 × 100 = 84,000 J (1 mark). Energy to vaporise water: E₃ = 0.2 × 2,260,000 = 452,000 J (1 mark). Total = 66,800 + 84,000 + 452,000 = 602,800 J ≈ 603 kJ (1 mark).',
        display_order: 3
      }
    ]
  },
  {
    content: {
      level: 'gcse',
      subject: 'physics',
      exam_board: 'aqa',
      topic_slug: 'particle-model',
      subtopic_slug: 'gas-pressure',
      title: 'Gas Pressure | GCSE Physics',
      meta_description: 'Understand gas pressure in terms of particle collisions. Learn about pressure-volume and pressure-temperature relationships for GCSE Physics.',
      introduction: `Gas pressure results from the collisions of gas particles with the walls of their container. Understanding pressure in terms of the particle model is a key concept in GCSE Physics.

Gas particles move randomly in all directions at high speeds. When they collide with the container walls, they exert a force. Pressure is the total force exerted per unit area by billions of these collisions every second.

Increasing the temperature increases gas pressure (at constant volume) because particles move faster with more kinetic energy. Faster-moving particles collide with the walls more frequently and with greater force, increasing the pressure.

Decreasing the volume increases gas pressure (at constant temperature) because particles have less space to move in. They collide with the walls more frequently, even though their speed hasn't changed, increasing the pressure.

For a fixed mass of gas at constant temperature, pressure × volume = constant. This is Boyle's Law: p₁V₁ = p₂V₂. Doubling the pressure halves the volume, and vice versa.

For a fixed mass of gas at constant volume, pressure is proportional to absolute temperature (measured in Kelvin): p₁/T₁ = p₂/T₂. Temperature in Kelvin = temperature in °C + 273.

These relationships explain everyday phenomena: bicycle tyres becoming harder when hot, aerosol cans expanding in heat, and why it's dangerous to heat sealed containers.`
    },
    questions: [
      {
        difficulty: 'easy',
        marks: 2,
        content: 'Use the particle model to explain what causes gas pressure.',
        solution: 'Gas particles move randomly and collide with the walls of the container (1 mark). These collisions exert a force on the walls, and force per unit area is pressure (1 mark).',
        display_order: 1
      },
      {
        difficulty: 'medium',
        marks: 3,
        content: 'A gas has a volume of 500 cm³ at a pressure of 100 kPa. Calculate the new pressure if the volume is reduced to 200 cm³ at constant temperature.',
        solution: 'Using p₁V₁ = p₂V₂ (1 mark). 100 × 500 = p₂ × 200 (1 mark). p₂ = 50,000/200 = 250 kPa (1 mark).',
        display_order: 2
      },
      {
        difficulty: 'hard',
        marks: 4,
        content: 'A sealed container of gas has a pressure of 150 kPa at 20°C. The container is heated to 80°C. Calculate the new pressure and explain, using particle theory, why the pressure increases.',
        solution: 'Convert temperatures to Kelvin: T₁ = 20 + 273 = 293 K, T₂ = 80 + 273 = 353 K (1 mark). Using p₁/T₁ = p₂/T₂: 150/293 = p₂/353 (1 mark). p₂ = (150 × 353)/293 = 181 kPa (1 mark). Explanation: Heating increases the kinetic energy of particles, so they move faster and collide with walls more frequently and with greater force (1 mark).',
        display_order: 3
      }
    ]
  },
  {
    content: {
      level: 'gcse',
      subject: 'physics',
      exam_board: 'aqa',
      topic_slug: 'particle-model',
      subtopic_slug: 'internal-energy',
      title: 'Internal Energy | GCSE Physics',
      meta_description: 'Learn about internal energy, kinetic and potential energy of particles, and energy transfers for GCSE Physics.',
      introduction: `Internal energy is the total energy stored within a system by its particles. Understanding internal energy helps explain heating, cooling, and changes of state in GCSE Physics.

The internal energy of a system is the sum of the kinetic energy and potential energy of all its particles. Kinetic energy comes from particle motion (vibration in solids, movement in liquids and gases). Potential energy comes from the positions of particles and the forces between them.

When a substance is heated, energy is transferred to its particles. This can increase the kinetic energy of particles (causing temperature to rise) or increase the potential energy by separating particles (during a change of state).

Temperature is a measure of the average kinetic energy of particles. When temperature increases, particles move faster on average. During a change of state, temperature remains constant because energy increases the potential energy (by breaking bonds) rather than kinetic energy.

Heating a system increases its internal energy. This can happen by: conduction (particles colliding and transferring energy), convection (movement of energetic particles through fluids), or radiation (absorption of electromagnetic waves).

When a substance cools, its internal energy decreases as energy is transferred to the surroundings. The particles slow down (decrease in kinetic energy) and may move closer together (decrease in potential energy), potentially causing a change of state.`
    },
    questions: [
      {
        difficulty: 'easy',
        marks: 2,
        content: 'State what makes up the internal energy of a substance.',
        solution: 'Internal energy is the sum of the kinetic energy of particles (1 mark) and the potential energy of particles (1 mark).',
        display_order: 1
      },
      {
        difficulty: 'medium',
        marks: 3,
        content: 'Explain, in terms of internal energy, what happens when ice at 0°C is heated and turns into water at 0°C.',
        solution: 'Energy is transferred to the ice/internal energy increases (1 mark). The kinetic energy of particles does not change (temperature stays constant) (1 mark). The potential energy of particles increases as bonds between particles are broken/particles become further apart (1 mark).',
        display_order: 2
      },
      {
        difficulty: 'hard',
        marks: 4,
        content: 'A beaker of water is heated from 20°C to 100°C and then continues to be heated until some of it has boiled away. Describe how the internal energy of the water changes during each stage of this process.',
        solution: 'Stage 1 (20°C to 100°C): Internal energy increases (1 mark). The kinetic energy of particles increases as they move faster, raising the temperature (1 mark). Stage 2 (boiling at 100°C): Internal energy continues to increase (1 mark). The potential energy of particles increases as bonds between particles are broken to form steam, but kinetic energy and temperature remain constant (1 mark).',
        display_order: 3
      }
    ]
  }
];

export default gcsePhysicsParticleModel;
