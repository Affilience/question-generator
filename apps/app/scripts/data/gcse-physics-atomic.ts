import { SubtopicData } from '../bulk-seo-insert';

export const gcsePhysicsAtomic: SubtopicData[] = [
  {
    content: {
      level: 'gcse',
      subject: 'physics',
      exam_board: 'aqa',
      topic_slug: 'atomic-structure',
      subtopic_slug: 'atoms-and-isotopes',
      title: 'Atoms and Isotopes | GCSE Physics',
      meta_description: 'Learn about atomic structure, subatomic particles and isotopes. GCSE Physics practice questions with step-by-step solutions.',
      introduction: `Atoms are the fundamental building blocks of all matter, yet they are mostly empty space. The atom consists of a tiny, dense nucleus containing protons and neutrons, surrounded by electrons orbiting at relatively large distances. If an atom were the size of a football stadium, the nucleus would be the size of a small marble on the centre spot.

The nucleus contains protons, which have a positive charge (+1) and a relative mass of 1, and neutrons, which have no charge (0) and also have a relative mass of 1. Electrons orbit the nucleus in shells and have a negative charge (-1) with a negligible mass (about 1/2000 of a proton). In a neutral atom, the number of electrons equals the number of protons, balancing the charges.

The atomic number (Z) tells us the number of protons in an atom and defines which element it is. The mass number (A) is the total number of protons and neutrons. The number of neutrons can be found by subtracting: neutrons = mass number - atomic number.

Isotopes are atoms of the same element with different numbers of neutrons. They have identical atomic numbers (same number of protons) but different mass numbers. Since chemical properties depend on electrons, and electrons depend on protons, isotopes of an element behave chemically the same but may have different physical properties and stability.`
    },
    questions: [
      {
        difficulty: 'easy',
        marks: 2,
        content: 'An atom has 11 protons, 12 neutrons and 11 electrons. State its atomic number and mass number.',
        solution: `**Atomic number** = number of protons = **11**

**Mass number** = protons + neutrons = 11 + 12 = **23**

(This is sodium-23, written as ²³₁₁Na)`,
        display_order: 1
      },
      {
        difficulty: 'medium',
        marks: 3,
        content: 'Carbon-12 and Carbon-14 are isotopes. Carbon-12 has 6 protons and 6 neutrons. Describe the structure of Carbon-14 and explain why these are isotopes of the same element.',
        solution: `**Structure of Carbon-14:**
- 6 protons
- 8 neutrons (14 - 6 = 8)
- 6 electrons (in a neutral atom)

**Why they are isotopes of the same element:**
- Both have **6 protons** (same atomic number)
- The atomic number defines the element - all atoms with 6 protons are carbon
- They have **different numbers of neutrons** (6 vs 8)
- This gives them different mass numbers (12 vs 14)

**Definition:** Isotopes are atoms of the same element (same number of protons) with different numbers of neutrons.`,
        display_order: 2
      },
      {
        difficulty: 'hard',
        marks: 4,
        content: 'A neutral atom of an element has a mass number of 56 and contains 30 neutrons. Identify the element and explain how you determined this. The atom then loses 2 electrons. Describe the resulting particle.',
        solution: `**Identifying the element:**
Mass number = protons + neutrons
56 = protons + 30
Protons = 56 - 30 = 26

The atomic number is 26, which identifies the element as **iron (Fe)**.

**After losing 2 electrons:**
- Number of protons: 26 (unchanged)
- Number of electrons: 24 (was 26, lost 2)
- Number of neutrons: 30 (unchanged)
- Overall charge: +2 (26 positive charges, 24 negative charges)

**The resulting particle:**
The particle is an **iron ion** (specifically Fe²⁺)
- It is a **positive ion** (cation)
- It has a **charge of +2**
- It is still iron (identity determined by protons)
- It has the same mass (electrons have negligible mass)`,
        display_order: 3
      }
    ]
  },
  {
    content: {
      level: 'gcse',
      subject: 'physics',
      exam_board: 'aqa',
      topic_slug: 'atomic-structure',
      subtopic_slug: 'radioactive-decay',
      title: 'Radioactive Decay | GCSE Physics',
      meta_description: 'Master radioactive decay types: alpha, beta and gamma radiation. GCSE Physics practice questions with detailed solutions.',
      introduction: `Radioactive decay is a random process by which unstable atomic nuclei release energy and particles to become more stable. The nuclei of some isotopes are unstable because they have too many neutrons, too few neutrons, or simply too much energy. These unstable nuclei decay by emitting radiation.

There are three main types of radioactive decay. Alpha (α) decay releases an alpha particle consisting of 2 protons and 2 neutrons (identical to a helium nucleus). Beta (β) decay occurs when a neutron transforms into a proton, emitting a fast-moving electron. Gamma (γ) decay releases high-energy electromagnetic radiation with no mass or charge.

Each type of radiation has different properties. Alpha particles are the largest and most ionising but have the shortest range—they can be stopped by paper or a few centimetres of air. Beta particles are smaller, less ionising, and can penetrate paper but are stopped by a few millimetres of aluminium. Gamma rays are the most penetrating and can only be significantly reduced by thick lead or concrete.

Radioactive decay is a random process at the level of individual atoms—we cannot predict when a specific nucleus will decay. However, with large numbers of atoms, the decay follows a predictable pattern described by half-life: the time taken for half the radioactive nuclei in a sample to decay.`
    },
    questions: [
      {
        difficulty: 'easy',
        marks: 2,
        content: 'State what an alpha particle consists of and give its charge.',
        solution: `An alpha particle consists of:
- **2 protons** and **2 neutrons**
- (This is identical to a helium nucleus)

Charge: **+2** (from the two protons, as neutrons have no charge)`,
        display_order: 1
      },
      {
        difficulty: 'medium',
        marks: 3,
        content: 'A radioactive source emits radiation that can pass through paper but is stopped by a few millimetres of aluminium. Identify the type of radiation and explain why it poses a greater risk inside the body than outside.',
        solution: `**Type of radiation:** Beta (β) radiation

**Explanation of risk:**

**Outside the body:**
- Beta particles can penetrate skin but don't travel far into tissue
- Clothing and the outer dead skin layer provide some protection
- The source can be removed easily

**Inside the body:**
- Beta particles are ionising radiation
- They can directly damage DNA and cells
- There is no protective barrier between the source and living tissue
- The source cannot be easily removed
- Continuous exposure occurs as the source decays inside the body
- This can cause cell mutations leading to cancer

**Key point:** Any ionising radiation is more dangerous inside the body where it has direct access to living cells.`,
        display_order: 2
      },
      {
        difficulty: 'hard',
        marks: 4,
        content: 'Uranium-238 (atomic number 92) undergoes alpha decay to form thorium-234. Write a nuclear equation for this decay and explain what happens to the atomic number and mass number.',
        solution: `**Nuclear equation:**
²³⁸₉₂U → ²³⁴₉₀Th + ⁴₂He (or ⁴₂α)

**What happens to the mass number:**
- Before: 238
- The alpha particle carries away 4 (2 protons + 2 neutrons)
- After: 238 - 4 = **234**
- The mass number decreases by 4

**What happens to the atomic number:**
- Before: 92 (uranium)
- The alpha particle carries away 2 protons
- After: 92 - 2 = **90** (thorium)
- The atomic number decreases by 2

**Key points:**
- The element changes (uranium → thorium) because the number of protons changes
- Mass number and charge are conserved (totals on both sides are equal)
- Left side: 238, 92 | Right side: 234 + 4 = 238, 90 + 2 = 92 ✓`,
        display_order: 3
      }
    ]
  },
  {
    content: {
      level: 'gcse',
      subject: 'physics',
      exam_board: 'aqa',
      topic_slug: 'atomic-structure',
      subtopic_slug: 'half-life',
      title: 'Half-Life | GCSE Physics',
      meta_description: 'Understand half-life calculations and radioactive decay curves. GCSE Physics practice questions with step-by-step solutions.',
      introduction: `Half-life is the time taken for half of the radioactive nuclei in a sample to decay, or equivalently, the time for the activity (count rate) of a source to halve. This is a fundamental concept in nuclear physics and has important applications in fields from archaeology to medicine.

Every radioactive isotope has a characteristic half-life that is constant and unaffected by physical or chemical conditions. Half-lives range from fractions of a second for highly unstable isotopes to billions of years for nearly stable ones. Carbon-14, used in radiocarbon dating, has a half-life of about 5,700 years, while uranium-238 has a half-life of 4.5 billion years.

The decay follows an exponential pattern: after one half-life, half the original nuclei remain; after two half-lives, one quarter remain; after three half-lives, one eighth remain, and so on. This pattern continues indefinitely—the sample never completely decays, but becomes negligibly radioactive.

Half-life calculations are essential for practical applications. In medicine, doctors choose isotopes with half-lives long enough to be useful but short enough to minimise patient radiation exposure. In carbon dating, comparing the ratio of carbon-14 to carbon-12 in a sample with the ratio in living organisms tells us how many half-lives have passed since the organism died.`
    },
    questions: [
      {
        difficulty: 'easy',
        marks: 2,
        content: 'A radioactive sample has an activity of 800 Bq. After 20 days, the activity has fallen to 100 Bq. Calculate the half-life of the isotope.',
        solution: `Track the activity through half-lives:
- Start: 800 Bq
- After 1 half-life: 400 Bq
- After 2 half-lives: 200 Bq
- After 3 half-lives: 100 Bq

3 half-lives = 20 days

Half-life = 20 ÷ 3 = **6.67 days** (or 20/3 days)`,
        display_order: 1
      },
      {
        difficulty: 'medium',
        marks: 3,
        content: 'A sample initially contains 64 g of a radioactive isotope with a half-life of 2 hours. Calculate the mass of the radioactive isotope remaining after 8 hours.',
        solution: `First, find the number of half-lives:
Number of half-lives = Total time ÷ Half-life
Number of half-lives = 8 ÷ 2 = 4 half-lives

Now track the mass through each half-life:
- Start: 64 g
- After 1 half-life (2 hours): 32 g
- After 2 half-lives (4 hours): 16 g
- After 3 half-lives (6 hours): 8 g
- After 4 half-lives (8 hours): 4 g

**4 g** of the radioactive isotope remains.

Alternative method: Mass remaining = 64 × (½)⁴ = 64 × 1/16 = 4 g`,
        display_order: 2
      },
      {
        difficulty: 'hard',
        marks: 4,
        content: 'Carbon-14 has a half-life of 5,700 years. A wooden artifact is found to have 12.5% of the carbon-14 content of living wood. Estimate the age of the artifact and explain why this method becomes unreliable for samples older than about 50,000 years.',
        solution: `**Calculating the age:**
Find how many half-lives have passed:
- Start: 100%
- After 1 half-life: 50%
- After 2 half-lives: 25%
- After 3 half-lives: 12.5% ✓

3 half-lives have passed.
Age = 3 × 5,700 = **17,100 years**

**Why the method is unreliable for samples >50,000 years:**

50,000 years ≈ 9 half-lives
After 9 half-lives: 100% × (½)⁹ = 0.2% remaining

1. **Very low activity** - After many half-lives, so little C-14 remains that the count rate is extremely low
2. **Background radiation** - The signal becomes comparable to or smaller than background radiation, making accurate measurement difficult
3. **Statistical uncertainty** - With few decay events, random variation causes large percentage errors
4. **Contamination** - Even tiny amounts of modern carbon contamination become significant compared to the small C-14 content

**Practical limit:** Beyond ~50,000 years, the C-14 content is too low to measure accurately.`,
        display_order: 3
      }
    ]
  },
  {
    content: {
      level: 'gcse',
      subject: 'physics',
      exam_board: 'aqa',
      topic_slug: 'atomic-structure',
      subtopic_slug: 'nuclear-fission',
      title: 'Nuclear Fission | GCSE Physics',
      meta_description: 'Learn about nuclear fission, chain reactions and nuclear power. GCSE Physics practice questions with worked solutions.',
      introduction: `Nuclear fission is the process where a large, unstable nucleus splits into two smaller nuclei, releasing a huge amount of energy. This process is used in nuclear power stations and nuclear weapons. The energy released comes from the conversion of mass into energy according to Einstein's equation E = mc².

Fission can occur spontaneously but is usually induced by a neutron striking a large nucleus like uranium-235. When the neutron is absorbed, the nucleus becomes highly unstable and splits into two daughter nuclei of roughly equal size, along with two or three neutrons and a large amount of energy.

The released neutrons can go on to cause further fission events, creating a chain reaction. In a controlled chain reaction, as in a nuclear reactor, exactly one neutron from each fission goes on to cause another fission, maintaining a steady energy output. In an uncontrolled chain reaction, as in a nuclear bomb, each fission causes multiple further fissions, releasing enormous energy explosively.

Nuclear power stations use the heat from controlled fission to generate steam, which drives turbines connected to generators. Control rods absorb excess neutrons to regulate the reaction rate, moderators slow down neutrons to the optimal speed for causing fission, and coolant carries heat away from the reactor core.`
    },
    questions: [
      {
        difficulty: 'easy',
        marks: 2,
        content: 'State what happens during nuclear fission and name one fuel used in nuclear fission reactors.',
        solution: `**What happens during nuclear fission:**
A large, unstable nucleus absorbs a neutron and splits into two smaller nuclei, releasing energy and more neutrons.

**Nuclear fuel:**
**Uranium-235** (or plutonium-239)`,
        display_order: 1
      },
      {
        difficulty: 'medium',
        marks: 3,
        content: 'Explain what is meant by a chain reaction and describe how control rods are used in a nuclear reactor.',
        solution: `**Chain reaction:**
- When a nucleus undergoes fission, it releases 2-3 neutrons
- These neutrons can be absorbed by other nuclei, causing more fission
- Each fission produces more neutrons, which cause more fission
- The process multiplies and sustains itself

**How control rods work:**
- Control rods are made of materials that absorb neutrons (e.g., boron, cadmium)
- They are inserted into or withdrawn from the reactor core
- **To slow down the reaction:** Rods are inserted further to absorb more neutrons, reducing the number available to cause fission
- **To speed up the reaction:** Rods are withdrawn, allowing more neutrons to cause fission
- For steady operation: Rods are positioned so exactly one neutron per fission causes another fission`,
        display_order: 2
      },
      {
        difficulty: 'hard',
        marks: 4,
        content: 'In a nuclear reactor, uranium-235 undergoes fission. Explain why the neutrons need to be slowed down by a moderator and describe the energy transfers that occur from fission to electrical output.',
        solution: `**Why neutrons need to be slowed down:**
- Neutrons released by fission are "fast neutrons" with high kinetic energy
- Fast neutrons are more likely to be absorbed by U-238 (without causing fission) or escape the reactor
- U-235 is more likely to undergo fission when struck by "slow" or "thermal" neutrons
- The moderator (water, graphite, or heavy water) slows neutrons through collisions
- Slower neutrons spend more time near U-235 nuclei, increasing the chance of absorption and fission

**Energy transfers from fission to electrical output:**
1. **Nuclear energy → Kinetic energy:** Fission releases energy as kinetic energy of the daughter nuclei, neutrons, and gamma radiation
2. **Kinetic energy → Thermal energy:** The fast-moving particles collide with surrounding material, heating the reactor core
3. **Thermal energy → Kinetic energy (steam):** Heat is transferred to water, producing high-pressure steam
4. **Kinetic energy (steam) → Kinetic energy (rotation):** Steam drives turbines
5. **Kinetic energy (rotation) → Electrical energy:** Turbines turn generators, which induce an electrical current through electromagnetic induction`,
        display_order: 3
      }
    ]
  },
  {
    content: {
      level: 'gcse',
      subject: 'physics',
      exam_board: 'aqa',
      topic_slug: 'atomic-structure',
      subtopic_slug: 'nuclear-fusion',
      title: 'Nuclear Fusion | GCSE Physics',
      meta_description: 'Understand nuclear fusion, the process powering stars. GCSE Physics practice questions with step-by-step solutions.',
      introduction: `Nuclear fusion is the process where two light nuclei combine to form a heavier nucleus, releasing enormous amounts of energy. This is the process that powers the Sun and all stars, and scientists are working to harness it for clean energy generation on Earth.

In the Sun's core, hydrogen nuclei (protons) fuse to form helium. This doesn't happen easily—protons are positively charged and strongly repel each other. To overcome this electrostatic repulsion, nuclei must have extremely high kinetic energy, meaning extremely high temperatures. The Sun's core reaches about 15 million degrees Celsius.

Fusion releases energy because the total mass of the products is slightly less than the total mass of the reactants. This "missing mass" is converted to energy according to E = mc². Even tiny mass differences produce huge amounts of energy because c² (the speed of light squared) is an enormous number.

Scientists are trying to achieve controlled fusion on Earth because it offers several advantages over fission: abundant fuel (hydrogen isotopes from seawater), no long-lived radioactive waste, and no risk of meltdown. The challenge is creating and confining plasma at temperatures of 100 million degrees Celsius—hotter than the Sun's core—because Earth-based reactors don't have the Sun's immense gravitational pressure to help.`
    },
    questions: [
      {
        difficulty: 'easy',
        marks: 2,
        content: 'State what happens during nuclear fusion and where this process occurs naturally.',
        solution: `**What happens during nuclear fusion:**
Two light nuclei combine (fuse) to form a heavier nucleus, releasing large amounts of energy.

**Where it occurs naturally:**
In **stars** (including the Sun)

The Sun fuses hydrogen into helium in its core.`,
        display_order: 1
      },
      {
        difficulty: 'medium',
        marks: 3,
        content: 'Explain why nuclear fusion requires extremely high temperatures and why this makes it difficult to achieve on Earth.',
        solution: `**Why high temperatures are needed:**
- Nuclei are positively charged (protons)
- Positive charges repel each other (electrostatic repulsion)
- For fusion to occur, nuclei must get close enough for the strong nuclear force to pull them together
- High temperature means high kinetic energy
- Only with extreme kinetic energy can nuclei overcome the electrostatic repulsion and collide with enough force to fuse

**Why this is difficult on Earth:**
- Required temperature is about 100 million °C
- No material container can withstand these temperatures (everything would vaporise)
- The hot plasma must be confined using magnetic fields (tokamak design) or lasers
- Maintaining stable confinement is extremely challenging
- Currently, more energy is used to create and confine the plasma than is produced by fusion`,
        display_order: 2
      },
      {
        difficulty: 'hard',
        marks: 4,
        content: 'Compare nuclear fusion and nuclear fission in terms of: (a) the process involved, (b) the fuels used, and (c) the waste products. Explain why fusion is considered preferable for future energy generation.',
        solution: `**(a) Process:**
- **Fission:** Large nucleus splits into two smaller nuclei
- **Fusion:** Two small nuclei combine to form a larger nucleus

**(b) Fuels:**
- **Fission:** Heavy elements - uranium-235, plutonium-239 (limited supply, must be mined and processed)
- **Fusion:** Light elements - hydrogen isotopes (deuterium from seawater, tritium can be bred; virtually unlimited supply)

**(c) Waste products:**
- **Fission:** Highly radioactive daughter nuclei with long half-lives (thousands of years); storage is a major problem
- **Fusion:** Helium (non-radioactive) is the main product; some radioactive waste from activated reactor materials, but much shorter half-lives

**Why fusion is preferable:**
1. **More energy per kg** - Fusion releases more energy per unit mass of fuel
2. **Abundant fuel** - Deuterium is plentiful in seawater
3. **No long-lived waste** - No waste with half-lives of thousands of years
4. **No risk of meltdown** - If confinement fails, the reaction simply stops (not self-sustaining without external energy input)
5. **No chain reaction risk** - Cannot cause runaway reactions
6. **No weapons proliferation** - Fuels cannot easily be used for nuclear weapons`,
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
      subtopic_slug: 'particle-model-of-matter',
      title: 'Particle Model of Matter | GCSE Physics',
      meta_description: 'Learn about the particle model, states of matter and changes of state. GCSE Physics practice questions with solutions.',
      introduction: `The particle model explains the properties and behaviour of matter in terms of the motion and arrangement of particles. All matter is made of tiny particles (atoms or molecules) that are in constant motion, with the nature of this motion depending on the state of matter and temperature.

In solids, particles are held in fixed positions by strong forces of attraction and can only vibrate around these positions. This explains why solids have a fixed shape and volume. In liquids, particles are close together but can move past each other, giving liquids a fixed volume but allowing them to flow and take the shape of their container.

In gases, particles are far apart with negligible forces between them, moving rapidly in random directions. This explains why gases have no fixed shape or volume and can be easily compressed. The average kinetic energy of particles determines the temperature of a substance—higher temperature means faster-moving particles.

Changes of state occur when enough energy is added or removed to overcome or create the forces between particles. Melting breaks some bonds allowing particles to move past each other. Evaporation occurs when surface particles gain enough energy to escape the liquid. Understanding the particle model is essential for explaining phenomena from pressure to heat transfer.`
    },
    questions: [
      {
        difficulty: 'easy',
        marks: 2,
        content: 'Use the particle model to explain why gases can be compressed but solids cannot.',
        solution: `**Gases can be compressed:**
- Particles in a gas are far apart
- There are large spaces between particles
- When pressure is applied, particles can be pushed closer together, reducing the volume

**Solids cannot be compressed:**
- Particles in a solid are already touching/very close together
- There are no significant gaps between particles
- Particles cannot be pushed any closer together, so the volume cannot be reduced`,
        display_order: 1
      },
      {
        difficulty: 'medium',
        marks: 3,
        content: 'When a liquid evaporates, the remaining liquid cools down. Use the particle model to explain why.',
        solution: `**Explanation:**

1. In a liquid, particles have a range of kinetic energies (some fast, some slow)

2. **Fastest particles escape:** Only particles with the highest kinetic energy (fastest moving) can overcome the attractive forces and escape from the liquid surface

3. **Average energy decreases:** When these high-energy particles leave, the remaining particles have a lower average kinetic energy

4. **Temperature drops:** Temperature is a measure of average kinetic energy of particles, so lower average kinetic energy means lower temperature

5. **The liquid cools:** The remaining liquid is therefore at a lower temperature

**Key point:** Evaporation is a selective process that removes the most energetic particles, lowering the average energy (temperature) of those left behind.`,
        display_order: 2
      },
      {
        difficulty: 'hard',
        marks: 4,
        content: 'A sealed container of gas is heated. Use the particle model to explain why both the temperature and pressure of the gas increase.',
        solution: `**Why temperature increases:**
- Heating transfers energy to the gas particles
- Particles gain kinetic energy
- They move faster
- Temperature is a measure of average kinetic energy
- Higher average kinetic energy = higher temperature

**Why pressure increases:**
- Faster-moving particles hit the container walls more frequently
- Each collision also has greater force (because particles have more momentum)
- Pressure = force per unit area on the walls
- Both increased frequency and force of collisions mean greater total force on the walls
- Therefore pressure increases

**Additional points:**
- Volume is constant (sealed container)
- The relationship P/T = constant (for fixed volume and amount of gas)
- This is why aerosol cans warn against heating—the pressure increase could cause explosion

**Key connection:** More kinetic energy → faster particles → harder, more frequent collisions → higher pressure`,
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
      subtopic_slug: 'density',
      title: 'Density | GCSE Physics',
      meta_description: 'Master density calculations and understand floating and sinking. GCSE Physics practice questions with step-by-step solutions.',
      introduction: `Density is a measure of how much mass is contained in a given volume of a substance. It tells us how tightly packed the particles are and is calculated using the equation ρ = m/V, where density (ρ) is measured in kg/m³ or g/cm³, mass (m) in kg or g, and volume (V) in m³ or cm³.

Different materials have different densities due to the mass of their particles and how closely they are packed. Metals like lead and gold have high densities because their atoms are heavy and closely packed. Gases have very low densities because their particles are far apart.

Density explains why objects float or sink. An object placed in a fluid will float if its density is less than the fluid's density and sink if its density is greater. This is why wood floats on water (wood: ~700 kg/m³, water: 1000 kg/m³) but iron sinks (iron: 7800 kg/m³).

To find the density of a regular solid, measure its mass with a balance and calculate its volume using mathematical formulas. For irregular solids, use the displacement method: submerge the object in water and measure the volume of water displaced. For liquids, measure a known volume using a measuring cylinder and find its mass.`
    },
    questions: [
      {
        difficulty: 'easy',
        marks: 2,
        content: 'A metal block has a mass of 540 g and a volume of 200 cm³. Calculate its density.',
        solution: `Using the density equation: ρ = m/V

ρ = 540 ÷ 200
ρ = 2.7 g/cm³

The density is **2.7 g/cm³** (this is aluminium).`,
        display_order: 1
      },
      {
        difficulty: 'medium',
        marks: 3,
        content: 'A student wants to find the density of an irregular stone. Describe the method they should use.',
        solution: `**Method to find density of an irregular solid:**

1. **Measure the mass:**
   - Place the stone on a balance
   - Record the mass in grams (m)

2. **Find the volume by displacement:**
   - Fill a measuring cylinder with water and record the initial volume (V₁)
   - Carefully lower the stone into the water using string (ensuring it's fully submerged and no air bubbles are trapped)
   - Record the new water level (V₂)
   - Volume of stone = V₂ - V₁

3. **Calculate density:**
   - Use ρ = m/V
   - Density = mass ÷ volume

**Alternative:** Use a eureka (displacement) can if the stone is too large for a measuring cylinder.`,
        display_order: 2
      },
      {
        difficulty: 'hard',
        marks: 4,
        content: 'Ice has a density of 920 kg/m³ and water has a density of 1000 kg/m³. A floating iceberg has a total volume of 500 m³. Calculate the volume of ice above the water surface.',
        solution: `**Principle:** For a floating object, the weight of the object equals the weight of fluid displaced.

**Step 1:** Let V_below = volume below water surface

Weight of iceberg = Weight of water displaced
m_ice × g = m_water displaced × g
ρ_ice × V_total = ρ_water × V_below
920 × 500 = 1000 × V_below

**Step 2:** Solve for volume below water
V_below = (920 × 500) ÷ 1000
V_below = 460000 ÷ 1000
V_below = 460 m³

**Step 3:** Find volume above water
V_above = V_total - V_below
V_above = 500 - 460
V_above = **40 m³**

**Alternatively:** Fraction above water = (ρ_water - ρ_ice)/ρ_water = (1000-920)/1000 = 0.08
V_above = 0.08 × 500 = 40 m³

This is why only about 8-10% of an iceberg is visible above water!`,
        display_order: 3
      }
    ]
  }
];
