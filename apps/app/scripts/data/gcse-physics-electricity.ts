import { SubtopicData } from '../bulk-seo-insert';

export const gcsePhysicsElectricity: SubtopicData[] = [
  {
    content: {
      level: 'gcse',
      subject: 'physics',
      exam_board: 'aqa',
      topic_slug: 'electricity',
      subtopic_slug: 'current-voltage-resistance',
      title: 'Current, Voltage and Resistance | GCSE Physics',
      meta_description: 'Master the relationship between current, voltage and resistance including Ohm\'s law. GCSE Physics practice questions with solutions.',
      introduction: `Understanding the relationship between current, voltage, and resistance is fundamental to all of electrical physics. These three quantities are interconnected through Ohm's law, one of the most important equations you'll use in GCSE Physics.

Current (I) is the rate of flow of electrical charge, measured in amperes (A). When we say a current of 1 amp flows, we mean that 1 coulomb of charge passes a point in the circuit every second. In metal conductors, current consists of electrons flowing from negative to positive, though by convention we show current flowing from positive to negative.

Voltage (V), also called potential difference, is the energy transferred per unit charge. It's measured in volts and represents the "push" that drives current around a circuit. A voltage of 1 volt means 1 joule of energy is transferred for every coulomb of charge that passes.

Resistance (R) is the opposition to current flow, measured in ohms (Ω). All components have some resistance, which depends on their material, length, cross-sectional area, and temperature. Ohm's law states that V = IR, meaning voltage equals current multiplied by resistance. This relationship holds true for ohmic conductors at constant temperature.`
    },
    questions: [
      {
        difficulty: 'easy',
        marks: 2,
        content: 'A resistor has a resistance of 20 Ω. If a current of 0.5 A flows through it, calculate the voltage across the resistor.',
        solution: `Using Ohm's law: V = IR

V = 0.5 × 20
V = 10 V

The voltage across the resistor is **10 V**.`,
        display_order: 1
      },
      {
        difficulty: 'medium',
        marks: 3,
        content: 'A lamp has a voltage of 12 V across it and a current of 2 A flowing through it. Calculate the resistance of the lamp and the charge that flows through it in 30 seconds.',
        solution: `**Finding resistance:**
Using V = IR, rearranging for R: R = V/I
R = 12 ÷ 2
R = 6 Ω

**Finding charge:**
Using Q = It
Q = 2 × 30
Q = 60 C

The resistance is **6 Ω** and the charge is **60 coulombs**.`,
        display_order: 2
      },
      {
        difficulty: 'hard',
        marks: 4,
        content: 'A metal wire has a resistance of 8 Ω at 20°C. When heated, its resistance increases to 10 Ω. If the voltage across the wire remains constant at 12 V, calculate the current at both temperatures and explain why the resistance changes.',
        solution: `**Current at 20°C:**
Using I = V/R
I = 12 ÷ 8 = 1.5 A

**Current when heated:**
I = 12 ÷ 10 = 1.2 A

**Explanation of resistance change:**
- When the wire is heated, the metal ions vibrate more vigorously
- This increases the frequency of collisions between flowing electrons and the vibrating ions
- More collisions means greater opposition to electron flow
- Therefore resistance increases with temperature in metals

The current decreases from **1.5 A to 1.2 A** because the same voltage driving current through a higher resistance results in less current flow (Ohm's law).`,
        display_order: 3
      }
    ]
  },
  {
    content: {
      level: 'gcse',
      subject: 'physics',
      exam_board: 'aqa',
      topic_slug: 'electricity',
      subtopic_slug: 'series-and-parallel-circuits',
      title: 'Series and Parallel Circuits | GCSE Physics',
      meta_description: 'Learn how current and voltage behave in series and parallel circuits. Practice questions with worked solutions for GCSE Physics.',
      introduction: `Electrical circuits can be arranged in two fundamental ways: series and parallel. Understanding how these arrangements affect current, voltage, and resistance is essential for analysing any electrical system, from simple torch circuits to complex household wiring.

In a series circuit, components are connected one after another in a single loop, giving current only one path to follow. This means the same current flows through every component. The total voltage of the power supply is shared between components, with each component taking a proportion based on its resistance. The total resistance is simply the sum of all individual resistances: R_total = R₁ + R₂ + R₃...

In a parallel circuit, components are connected across each other, giving current multiple paths to follow. The voltage across each branch is the same and equals the supply voltage. Current splits at junctions, with more current flowing through branches with lower resistance. The total resistance is always less than the smallest individual resistance, calculated using: 1/R_total = 1/R₁ + 1/R₂...

Household electrical systems use parallel connections so that each appliance receives the full mains voltage and operates independently. If one appliance fails, others continue working. Series connections are used when voltage needs to be divided, such as in strings of decorative lights or voltage divider circuits.`
    },
    questions: [
      {
        difficulty: 'easy',
        marks: 2,
        content: 'Two resistors of 6 Ω and 4 Ω are connected in series. Calculate the total resistance.',
        solution: `For resistors in series: R_total = R₁ + R₂

R_total = 6 + 4
R_total = 10 Ω

The total resistance is **10 Ω**.`,
        display_order: 1
      },
      {
        difficulty: 'medium',
        marks: 3,
        content: 'A 6 V battery is connected to two lamps in series. Lamp A has a resistance of 4 Ω and Lamp B has a resistance of 8 Ω. Calculate the current in the circuit and the voltage across each lamp.',
        solution: `**Finding total resistance:**
R_total = 4 + 8 = 12 Ω

**Finding current:**
Using I = V/R
I = 6 ÷ 12 = 0.5 A

**Finding voltage across Lamp A:**
V_A = IR = 0.5 × 4 = 2 V

**Finding voltage across Lamp B:**
V_B = IR = 0.5 × 8 = 4 V

Current = **0.5 A**, V_A = **2 V**, V_B = **4 V**

(Check: 2 V + 4 V = 6 V ✓)`,
        display_order: 2
      },
      {
        difficulty: 'hard',
        marks: 4,
        content: 'Two resistors of 6 Ω and 12 Ω are connected in parallel to a 12 V supply. Calculate: (a) the total resistance, (b) the total current from the supply, and (c) the current through each resistor.',
        solution: `**(a) Total resistance:**
1/R_total = 1/R₁ + 1/R₂
1/R_total = 1/6 + 1/12
1/R_total = 2/12 + 1/12 = 3/12 = 1/4
R_total = 4 Ω

**(b) Total current from supply:**
I_total = V/R_total = 12 ÷ 4 = 3 A

**(c) Current through each resistor:**
Through 6 Ω: I₁ = V/R₁ = 12 ÷ 6 = 2 A
Through 12 Ω: I₂ = V/R₂ = 12 ÷ 12 = 1 A

Total resistance = **4 Ω**, Total current = **3 A**
Current through 6 Ω = **2 A**, Current through 12 Ω = **1 A**

(Check: 2 A + 1 A = 3 A ✓)`,
        display_order: 3
      }
    ]
  },
  {
    content: {
      level: 'gcse',
      subject: 'physics',
      exam_board: 'aqa',
      topic_slug: 'electricity',
      subtopic_slug: 'electrical-power',
      title: 'Electrical Power | GCSE Physics',
      meta_description: 'Calculate electrical power and energy transfer using P=IV and P=I²R. GCSE Physics practice questions with step-by-step solutions.',
      introduction: `Electrical power measures the rate at which electrical energy is transferred or converted into other forms of energy. Understanding power calculations is essential for practical applications like choosing the right fuse, calculating electricity bills, and comparing the energy efficiency of appliances.

Power is measured in watts (W), where 1 watt equals 1 joule of energy transferred per second. The fundamental equation for electrical power is P = IV, where power equals current multiplied by voltage. This makes intuitive sense: more current means more charge flowing, and higher voltage means more energy per charge, so both increase the rate of energy transfer.

By combining P = IV with Ohm's law (V = IR), we can derive two additional power equations. Substituting V = IR gives P = I²R, which is useful when you know current and resistance. Substituting I = V/R gives P = V²/R, which is useful when you know voltage and resistance.

Electrical energy is calculated by multiplying power by time: E = Pt. Energy companies measure consumption in kilowatt-hours (kWh), where 1 kWh is the energy transferred by a 1 kW appliance running for 1 hour. This unit is more practical than joules for household energy calculations, as domestic appliances typically operate at kilowatt levels for hours at a time.`
    },
    questions: [
      {
        difficulty: 'easy',
        marks: 2,
        content: 'A kettle operates at 230 V and draws a current of 10 A. Calculate the power of the kettle.',
        solution: `Using P = IV

P = 10 × 230
P = 2300 W (or 2.3 kW)

The power of the kettle is **2300 W** or **2.3 kW**.`,
        display_order: 1
      },
      {
        difficulty: 'medium',
        marks: 3,
        content: 'A 60 W lamp is connected to the 230 V mains supply. Calculate the current through the lamp and its resistance.',
        solution: `**Finding current:**
Using P = IV, rearranging for I: I = P/V
I = 60 ÷ 230
I = 0.26 A (2 s.f.)

**Finding resistance:**
Using V = IR, rearranging for R: R = V/I
R = 230 ÷ 0.26
R = 880 Ω (2 s.f.)

Alternatively, using P = V²/R: R = V²/P = 230² ÷ 60 = 880 Ω

Current = **0.26 A**, Resistance = **880 Ω**`,
        display_order: 2
      },
      {
        difficulty: 'hard',
        marks: 4,
        content: 'A 2 kW heater is used for 3 hours. If electricity costs 15p per kWh, calculate the total energy transferred in joules and the cost of using the heater.',
        solution: `**Energy in kilowatt-hours:**
Energy = Power × Time
Energy = 2 kW × 3 hours = 6 kWh

**Cost:**
Cost = Energy × Price per unit
Cost = 6 × 15p = 90p (or £0.90)

**Energy in joules:**
1 kWh = 1000 W × 3600 s = 3,600,000 J = 3.6 MJ
Energy = 6 × 3.6 MJ = 21.6 MJ

Or: E = Pt = 2000 W × (3 × 3600 s) = 2000 × 10800 = 21,600,000 J

Energy = **21.6 MJ** (or 21,600,000 J)
Cost = **90p** (or £0.90)`,
        display_order: 3
      }
    ]
  },
  {
    content: {
      level: 'gcse',
      subject: 'physics',
      exam_board: 'aqa',
      topic_slug: 'electricity',
      subtopic_slug: 'mains-electricity',
      title: 'Mains Electricity | GCSE Physics',
      meta_description: 'Learn about UK mains electricity, AC vs DC, and electrical safety including fuses and earthing. GCSE Physics questions with solutions.',
      introduction: `Mains electricity in the UK operates at 230 V and 50 Hz, providing alternating current (AC) to homes and businesses. Unlike the direct current (DC) from batteries where electrons flow in one direction, AC constantly reverses direction 50 times per second. This frequency of 50 Hz means the current completes 50 full cycles each second.

The three-pin plug system provides electrical safety through three wires. The live wire (brown) carries the alternating current and has a voltage that oscillates between +325 V and -325 V (giving an effective 230 V). The neutral wire (blue) completes the circuit and is at approximately 0 V. The earth wire (green and yellow stripes) is a safety feature connected to the metal case of appliances.

Fuses and circuit breakers protect circuits from excessive current, which could cause fires. A fuse contains a thin wire that melts if current exceeds its rating, breaking the circuit. Circuit breakers use electromagnetic switches to achieve the same protection but can be reset. The earth wire works with the fuse: if a fault connects live to a metal case, large current flows to earth, blowing the fuse before anyone touches the dangerous casing.

Residual current circuit breakers (RCCBs) provide additional protection by detecting differences between current in live and neutral wires. Any difference indicates current leaking to earth, possibly through a person, triggering the RCCB to cut power within milliseconds.`
    },
    questions: [
      {
        difficulty: 'easy',
        marks: 2,
        content: 'Name the three wires in a UK three-pin plug and state the colour of each.',
        solution: `The three wires are:

1. **Live wire** - Brown
2. **Neutral wire** - Blue
3. **Earth wire** - Green and yellow stripes`,
        display_order: 1
      },
      {
        difficulty: 'medium',
        marks: 3,
        content: 'Explain how a fuse protects an electrical appliance and how to choose the correct fuse rating for a 700 W appliance operating at 230 V.',
        solution: `**How a fuse protects:**
- The fuse contains a thin wire with a low melting point
- If the current exceeds the fuse rating, the wire heats up and melts
- This breaks the circuit, stopping current flow
- This prevents overheating and potential fire in the appliance or wiring

**Choosing the correct fuse:**
First, calculate the normal operating current:
I = P/V = 700 ÷ 230 = 3.04 A

The fuse should be rated just above the normal current.
Common fuse ratings are 3 A, 5 A, and 13 A.

A **5 A fuse** should be used (3 A is too close to operating current and may blow during normal use).`,
        display_order: 2
      },
      {
        difficulty: 'hard',
        marks: 4,
        content: 'A metal toaster develops a fault where the live wire touches the metal casing. Explain, in terms of current flow, how the earth wire and fuse work together to make this safe.',
        solution: `**The fault situation:**
- The live wire (at 230 V) contacts the metal casing
- Without earth wire, the casing would become live at 230 V
- Touching it could cause a fatal electric shock

**How the safety system works:**
1. The metal casing is connected to the earth wire
2. When live touches the casing, a low-resistance path to earth is created
3. A very large current flows through: Live → casing → earth wire → ground
4. This current is much higher than the fuse rating
5. The fuse wire heats up rapidly and melts (blows)
6. The circuit is broken, disconnecting the live supply
7. The casing is now safe to touch

**Key point:** The earth wire provides a low-resistance path that allows enough current to flow to blow the fuse before anyone can receive a shock.`,
        display_order: 3
      }
    ]
  },
  {
    content: {
      level: 'gcse',
      subject: 'physics',
      exam_board: 'aqa',
      topic_slug: 'electricity',
      subtopic_slug: 'static-electricity',
      title: 'Static Electricity | GCSE Physics',
      meta_description: 'Understand static electricity, charging by friction, and applications. GCSE Physics practice questions with detailed solutions.',
      introduction: `Static electricity occurs when electric charge accumulates on the surface of an object rather than flowing as a current. Unlike current electricity, static charges remain stationary until they find a path to discharge. Understanding static electricity explains phenomena from lightning to photocopiers and is essential for managing electrostatic hazards.

Objects become charged through friction when electrons transfer from one material to another. When a polythene rod is rubbed with a cloth, electrons transfer from the cloth to the rod, making the rod negatively charged and the cloth positively charged. The total charge remains conserved—no charges are created or destroyed, only transferred.

Charged objects interact through electrostatic forces: like charges repel and opposite charges attract. These forces act at a distance through electric fields surrounding every charged object. The strength of the force depends on the amount of charge and the distance between objects, following an inverse square relationship.

Electrostatic effects have many applications and hazards. Inkjet printers use charged droplets directed by electric fields. Electrostatic precipitators remove pollution particles from smoke. However, static discharge can damage electronic components, ignite flammable atmospheres in fuel stations, and cause lightning strikes. Understanding these effects allows us to harness static electricity while managing its dangers.`
    },
    questions: [
      {
        difficulty: 'easy',
        marks: 2,
        content: 'A plastic rod is rubbed with a cloth and becomes negatively charged. Explain what has happened to the electrons.',
        solution: `During rubbing:
- **Electrons have transferred from the cloth to the rod**
- The rod gains electrons and becomes negatively charged
- The cloth loses electrons and becomes positively charged
- The total number of electrons is conserved (none created or destroyed)`,
        display_order: 1
      },
      {
        difficulty: 'medium',
        marks: 3,
        content: 'Two charged balloons are held near each other and repel. One balloon is then touched by a hand and the balloons now attract. Explain these observations.',
        solution: `**Initial repulsion:**
- Both balloons have the same type of charge (both positive or both negative)
- Like charges repel each other

**After touching:**
- Touching one balloon with a hand earths it
- The excess charge flows through the person to earth (the person acts as a conductor)
- The touched balloon becomes neutral (uncharged)

**Why they now attract:**
- The remaining charged balloon induces an opposite charge on the near side of the neutral balloon
- This is because electrons in the neutral balloon are either attracted towards or repelled from the charged balloon
- The induced opposite charges are closer, creating a net attractive force`,
        display_order: 2
      },
      {
        difficulty: 'hard',
        marks: 4,
        content: 'Explain why aircraft are fitted with static discharge wicks (small pointed conductors on the wing tips) and why fuel tankers use earthing straps when filling aircraft.',
        solution: `**Static discharge wicks:**
- Aircraft build up static charge during flight due to friction with air
- If charge accumulates, it could discharge suddenly causing:
  - Radio interference
  - Damage to electronic systems
  - Potentially dangerous sparks
- The pointed wicks allow gradual, controlled discharge of static electricity
- Pointed conductors have high electric field strength at the tip, enabling continuous discharge into the air

**Earthing straps on fuel tankers:**
- Fuel flowing through pipes creates static charge through friction
- If charge builds up and suddenly discharges near fuel vapour, it could cause an explosion
- The earthing strap connects the tanker to the ground
- This provides a safe path for electrons to flow away continuously
- Prevents dangerous accumulation of static charge during refuelling

**Key principle:** Both systems prevent dangerous sudden discharge by providing controlled paths for charge to dissipate safely.`,
        display_order: 3
      }
    ]
  },
  {
    content: {
      level: 'gcse',
      subject: 'physics',
      exam_board: 'aqa',
      topic_slug: 'electricity',
      subtopic_slug: 'electric-fields',
      title: 'Electric Fields | GCSE Physics',
      meta_description: 'Learn about electric fields, field lines and forces on charges. Practice GCSE Physics questions with worked solutions.',
      introduction: `An electric field is a region where a charged particle experiences a force. Every charged object creates an electric field around it, and this field exerts forces on other charges that enter it. Understanding electric fields helps explain how charges interact without touching and forms the foundation for understanding electromagnetic phenomena.

Electric field lines are used to visualise electric fields. The lines show the direction of force that would act on a positive test charge placed in the field. Field lines always point away from positive charges (repulsion) and towards negative charges (attraction). The density of field lines indicates field strength—closer lines mean a stronger field.

The field between two parallel plates is particularly important as it's uniform, meaning the field strength is the same at all points between the plates. This uniform field is used in many applications, from capacitors storing energy to particle accelerators controlling charged particles.

Electric field strength measures the force per unit charge and is measured in newtons per coulomb (N/C). A field strength of 100 N/C means a charge of 1 coulomb would experience a force of 100 N. This concept connects to voltage, as the field strength in a uniform field equals the voltage divided by the distance between the plates.`
    },
    questions: [
      {
        difficulty: 'easy',
        marks: 2,
        content: 'Draw the electric field pattern around an isolated positive charge.',
        solution: `The field pattern consists of:
- **Straight lines radiating outward** from the positive charge
- **Arrows pointing away** from the charge (showing direction of force on a positive test charge)
- **Lines are evenly spaced** around the charge (radial symmetry)
- **Lines spread further apart** at greater distances (indicating weaker field)

[Description: Lines should look like spokes of a wheel, all pointing outward from the central positive charge, with arrows pointing away from the centre]`,
        display_order: 1
      },
      {
        difficulty: 'medium',
        marks: 3,
        content: 'Two parallel plates are connected to a 200 V power supply and are 4 cm apart. Calculate the electric field strength between the plates and state its units.',
        solution: `For a uniform field between parallel plates:

Electric field strength = Voltage ÷ Distance

E = V/d
E = 200 ÷ 0.04 (converting cm to m)
E = 5000 N/C

The electric field strength is **5000 N/C** (or 5000 V/m)

**Units:** Newtons per coulomb (N/C) or volts per metre (V/m) - these are equivalent units.`,
        display_order: 2
      },
      {
        difficulty: 'hard',
        marks: 4,
        content: 'A charged particle carrying a charge of 2 × 10⁻⁶ C is placed in a uniform electric field of strength 3000 N/C. Calculate the force on the particle and describe its motion if released from rest.',
        solution: `**Calculating the force:**
Force = Electric field strength × Charge
F = E × Q
F = 3000 × 2 × 10⁻⁶
F = 6 × 10⁻³ N (or 0.006 N)

The force on the particle is **6 × 10⁻³ N** (or **6 mN**)

**Motion of the particle:**
- The particle experiences a constant force (uniform field = constant force)
- A constant force produces constant acceleration (Newton's second law: F = ma)
- The particle will accelerate uniformly in the direction of the field (if positive) or opposite to the field (if negative)
- Since it starts from rest, its velocity increases linearly with time
- Its displacement increases following v² = u² + 2as (uniformly accelerated motion)

**Key point:** The motion is equivalent to a falling object in a uniform gravitational field—constant acceleration in a straight line.`,
        display_order: 3
      }
    ]
  }
];
