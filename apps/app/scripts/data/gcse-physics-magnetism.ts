import { SubtopicData } from '../bulk-seo-insert';

export const gcsePhysicsMagnetism: SubtopicData[] = [
  {
    content: {
      level: 'gcse',
      subject: 'physics',
      exam_board: 'aqa',
      topic_slug: 'magnetism',
      subtopic_slug: 'magnetic-fields',
      title: 'Magnetic Fields | GCSE Physics',
      meta_description: 'Learn about magnetic fields, field patterns and magnetic materials. GCSE Physics practice questions with step-by-step solutions.',
      introduction: `A magnetic field is a region where magnetic materials and moving charges experience a force. Magnets have two poles, north and south, and the fundamental rule of magnetism is that like poles repel while opposite poles attract. Every magnet, from the smallest fridge magnet to the Earth itself, has both a north and south pole.

Magnetic field lines are used to visualise magnetic fields. By convention, field lines point from north to south outside the magnet, and the density of lines indicates field strength. The field is strongest at the poles where lines are closest together and weakest far from the magnet where lines are spread apart. Field lines never cross each other.

The Earth has a magnetic field similar to a bar magnet, with the magnetic south pole near the geographic north pole. This is why compass needles point north—the north-seeking pole of the compass is attracted to Earth's magnetic south. This field extends far into space, protecting Earth from harmful solar radiation.

Materials respond differently to magnetic fields. Ferromagnetic materials like iron, steel, nickel, and cobalt are strongly attracted to magnets and can be magnetised themselves. Soft magnetic materials like iron magnetise easily but lose their magnetism quickly, making them suitable for electromagnet cores. Hard magnetic materials like steel are harder to magnetise but retain their magnetism, making them suitable for permanent magnets.`
    },
    questions: [
      {
        difficulty: 'easy',
        marks: 2,
        content: 'A bar magnet is placed on a piece of paper and iron filings are sprinkled around it. Describe the pattern that would be observed.',
        solution: `The iron filings would form:
- **Curved lines** running from one pole to the other
- Lines are **closest together at the poles** (showing strongest field)
- Lines **spread out** further from the magnet (showing weaker field)
- The pattern is **symmetrical** around the magnet
- Iron filings align along the **magnetic field lines**`,
        display_order: 1
      },
      {
        difficulty: 'medium',
        marks: 3,
        content: 'Explain why a compass needle points north and describe what happens to the compass if it is placed near the south pole of a bar magnet.',
        solution: `**Why a compass points north:**
- The Earth acts like a giant magnet
- The Earth's magnetic south pole is near the geographic North Pole
- The compass needle is a small magnet with north and south poles
- The north-seeking pole of the compass is attracted to Earth's magnetic south pole
- Therefore, the compass points towards geographic north

**Near a bar magnet's south pole:**
- The compass needle's north pole is attracted to the bar magnet's south pole
- The compass needle would point towards the south pole of the bar magnet
- If the bar magnet's field is stronger than Earth's field, the compass may point directly at the bar magnet rather than north`,
        display_order: 2
      },
      {
        difficulty: 'hard',
        marks: 4,
        content: 'Explain the difference between magnetically hard and magnetically soft materials. Give one example and one use of each type.',
        solution: `**Magnetically soft materials:**
- Easy to magnetise when placed in a magnetic field
- Lose their magnetism quickly when the field is removed
- Example: **Iron** (or mumetal, soft iron)
- Use: **Electromagnet cores** - needs to switch on/off quickly, transformer cores

**Magnetically hard materials:**
- Difficult to magnetise (require stronger field)
- Retain their magnetism for a long time when the field is removed
- Example: **Steel** (or alnico, neodymium)
- Use: **Permanent magnets** - fridge magnets, compass needles, loudspeakers

**Key difference:** Soft materials are temporary magnets (magnetism depends on external field), hard materials become permanent magnets (retain magnetism independently).`,
        display_order: 3
      }
    ]
  },
  {
    content: {
      level: 'gcse',
      subject: 'physics',
      exam_board: 'aqa',
      topic_slug: 'magnetism',
      subtopic_slug: 'electromagnets',
      title: 'Electromagnets | GCSE Physics',
      meta_description: 'Understand electromagnets, solenoids and factors affecting their strength. GCSE Physics practice questions with detailed solutions.',
      introduction: `An electromagnet is a type of magnet where the magnetic field is produced by an electric current. Unlike permanent magnets, electromagnets can be switched on and off by controlling the current flow, making them extremely useful in applications from scrapyard cranes to MRI machines.

When current flows through a wire, it creates a magnetic field around the wire. The field forms concentric circles around the conductor, with the direction given by the right-hand grip rule: if your thumb points in the direction of conventional current, your curled fingers show the direction of the magnetic field. This effect can be amplified by coiling the wire.

A solenoid is a coil of wire that produces a magnetic field similar to a bar magnet when current flows through it. The field inside the solenoid is strong and uniform, while outside it spreads out like a bar magnet's field. One end acts as a north pole and the other as a south pole, with the polarity determined by the current direction.

The strength of an electromagnet depends on several factors: the current through the coil (more current = stronger field), the number of turns in the coil (more turns = stronger field), and the core material (an iron core concentrates the field, making it much stronger than an air core). These factors make electromagnets highly controllable and adaptable.`
    },
    questions: [
      {
        difficulty: 'easy',
        marks: 2,
        content: 'State two ways to increase the strength of an electromagnet.',
        solution: `Two ways to increase electromagnet strength:

1. **Increase the current** flowing through the coil
2. **Increase the number of turns** (coils of wire)

(Other acceptable answers: Add a soft iron core, use a core with higher permeability)`,
        display_order: 1
      },
      {
        difficulty: 'medium',
        marks: 3,
        content: 'Explain why soft iron is used as the core of an electromagnet rather than steel.',
        solution: `**Soft iron is used because:**

1. **Easily magnetised** - Iron becomes strongly magnetised when current flows through the coil, creating a strong electromagnet

2. **Easily demagnetised** - When the current is switched off, iron loses its magnetism almost immediately

3. **This allows the electromagnet to be switched on and off quickly**

**Why not steel:**
- Steel is a magnetically hard material
- It would remain magnetised after the current is switched off
- This would defeat the purpose of having a controllable electromagnet
- The magnet couldn't be "switched off" properly`,
        display_order: 2
      },
      {
        difficulty: 'hard',
        marks: 4,
        content: 'A student builds two electromagnets. Electromagnet A has 100 turns and carries a current of 2 A. Electromagnet B has 50 turns and carries a current of 3 A. Which electromagnet is likely to be stronger? Explain your reasoning.',
        solution: `**Analysis:**
The strength of an electromagnet is proportional to the number of turns × current (this product is called ampere-turns).

**Electromagnet A:**
Ampere-turns = 100 × 2 = 200 ampere-turns

**Electromagnet B:**
Ampere-turns = 50 × 3 = 150 ampere-turns

**Conclusion:**
**Electromagnet A is likely to be stronger** because it has more ampere-turns (200 vs 150).

**Important note:**
This comparison assumes:
- Both have the same core material
- Both have the same coil length
- The cores are not magnetically saturated

In practice, other factors like core material, coil dimensions, and magnetic saturation also affect strength, but ampere-turns is the primary factor for comparison.`,
        display_order: 3
      }
    ]
  },
  {
    content: {
      level: 'gcse',
      subject: 'physics',
      exam_board: 'aqa',
      topic_slug: 'magnetism',
      subtopic_slug: 'motor-effect',
      title: 'Motor Effect | GCSE Physics',
      meta_description: 'Learn about the motor effect, Fleming\'s left-hand rule and DC motors. Practice GCSE Physics questions with worked solutions.',
      introduction: `The motor effect is the phenomenon where a current-carrying conductor placed in a magnetic field experiences a force. This principle is the foundation of all electric motors and is one of the most important applications of electromagnetism in the modern world.

When a wire carrying current is placed in a magnetic field, the magnetic field around the wire interacts with the external magnetic field, creating a resultant force on the wire. The direction of this force is perpendicular to both the current direction and the magnetic field direction.

Fleming's left-hand rule predicts the direction of the force: point your First finger in the direction of the magnetic Field, your seCond finger in the direction of the Current, and your thuMb will point in the direction of the Motion (force). This rule is essential for understanding how motors work.

The magnitude of the force depends on three factors: the magnetic flux density (field strength), the current in the wire, and the length of wire in the field. This relationship is expressed as F = BIL, where F is force in newtons, B is magnetic flux density in tesla, I is current in amperes, and L is length in metres. This equation allows us to calculate motor forces precisely.`
    },
    questions: [
      {
        difficulty: 'easy',
        marks: 2,
        content: 'State the three factors that affect the size of the force on a current-carrying wire in a magnetic field.',
        solution: `The three factors are:

1. **Magnetic field strength** (magnetic flux density, B)
2. **Current** flowing through the wire (I)
3. **Length** of wire in the magnetic field (L)

Increasing any of these factors increases the force on the wire.`,
        display_order: 1
      },
      {
        difficulty: 'medium',
        marks: 3,
        content: 'A wire of length 0.25 m carries a current of 4 A in a magnetic field of flux density 0.3 T. Calculate the force on the wire when it is perpendicular to the field.',
        solution: `Using the equation: F = BIL

Where:
- B = 0.3 T (magnetic flux density)
- I = 4 A (current)
- L = 0.25 m (length)

F = 0.3 × 4 × 0.25
F = 0.3 N

The force on the wire is **0.3 N**.`,
        display_order: 2
      },
      {
        difficulty: 'hard',
        marks: 4,
        content: 'In a simple DC motor, the coil rotates continuously in one direction. Explain why a split-ring commutator is essential for this continuous rotation.',
        solution: `**The problem without a commutator:**
- As the coil rotates, the sides swap position every half turn
- Without any modification, the force direction would reverse every half turn
- The coil would oscillate back and forth, not rotate continuously

**How the split-ring commutator works:**
1. The commutator is a ring split into two halves, each connected to one end of the coil
2. Carbon brushes make contact with the commutator and connect to the power supply
3. Every half rotation, the brushes contact different halves of the commutator

**The effect:**
- This reverses the current direction in the coil every half turn
- Because both the coil position AND the current direction reverse together, the force always acts in the same rotational direction
- The coil continues to rotate in one direction

**Key point:** The commutator ensures current reversal coincides with coil position reversal, maintaining continuous rotation.`,
        display_order: 3
      }
    ]
  },
  {
    content: {
      level: 'gcse',
      subject: 'physics',
      exam_board: 'aqa',
      topic_slug: 'magnetism',
      subtopic_slug: 'electromagnetic-induction',
      title: 'Electromagnetic Induction | GCSE Physics',
      meta_description: 'Master electromagnetic induction, generators and transformers. GCSE Physics practice questions with step-by-step solutions.',
      introduction: `Electromagnetic induction is the process of generating a voltage (and hence current, if there's a complete circuit) by changing the magnetic field through a conductor. Discovered by Michael Faraday in 1831, this principle is the foundation of all electrical generators and transformers.

A voltage is induced when there is a change in the magnetic flux through a conductor. This can happen by moving a wire through a magnetic field, moving a magnet near a coil, or changing the current in a nearby electromagnet. The key requirement is relative motion or a changing field—a stationary wire in a constant field produces no voltage.

The direction of the induced current is given by Lenz's law: the induced current flows in a direction that opposes the change that caused it. This is a consequence of energy conservation—if the induced current helped the change, it would create energy from nothing. Instead, work must be done against the opposing force to maintain the motion and generate electricity.

The magnitude of the induced voltage depends on the rate of change of magnetic flux: faster changes produce higher voltages. This is why generators spin quickly and why transformers use alternating current. In a generator, coils rotate in a magnetic field, continuously changing the flux through them and producing alternating voltage.`
    },
    questions: [
      {
        difficulty: 'easy',
        marks: 2,
        content: 'State two ways to increase the voltage induced in a coil of wire when a magnet is moved into it.',
        solution: `Two ways to increase the induced voltage:

1. **Move the magnet faster** (increases rate of change of flux)
2. **Use a stronger magnet** (greater magnetic flux change)

(Other acceptable answers: Use more turns on the coil, use a coil with larger area)`,
        display_order: 1
      },
      {
        difficulty: 'medium',
        marks: 3,
        content: 'A magnet is dropped through a vertical copper tube. Explain why the magnet falls slower than it would in air.',
        solution: `**What happens:**

1. As the magnet falls, the magnetic flux through the copper changes
2. This changing flux **induces currents** in the copper (called eddy currents)
3. By **Lenz's law**, these induced currents create a magnetic field that **opposes** the change that caused them
4. This opposing field creates an **upward force** on the falling magnet
5. The upward magnetic force opposes the magnet's weight, reducing the net downward force
6. Therefore the magnet falls **more slowly** than it would in air

**Key point:** Energy is conserved—the kinetic energy "lost" by the slowing magnet is converted to electrical energy (the induced currents), which then becomes heat in the copper due to its resistance.`,
        display_order: 2
      },
      {
        difficulty: 'hard',
        marks: 4,
        content: 'A generator coil has 200 turns and rotates in a magnetic field. When rotating at 10 revolutions per second, it produces a peak voltage of 50 V. Predict what would happen to the peak voltage if: (a) the number of turns is doubled, (b) the rotation speed is halved.',
        solution: `The induced voltage is proportional to:
- Number of turns (N)
- Rate of change of flux (which depends on rotation speed)

**Original conditions:** 200 turns, 10 rev/s, 50 V peak

**(a) Doubling the number of turns:**
- Twice as many turns means twice the induced voltage
- Peak voltage = 50 × 2 = **100 V**

**(b) Halving the rotation speed:**
- Slower rotation means slower rate of flux change
- Half the speed means half the rate of change
- Peak voltage = 50 × 0.5 = **25 V**

**Note:** The frequency of the AC output would also halve (from 10 Hz to 5 Hz) when the rotation speed is halved, but the question asks only about peak voltage.`,
        display_order: 3
      }
    ]
  },
  {
    content: {
      level: 'gcse',
      subject: 'physics',
      exam_board: 'aqa',
      topic_slug: 'magnetism',
      subtopic_slug: 'transformers',
      title: 'Transformers | GCSE Physics',
      meta_description: 'Learn how transformers work, calculate voltage ratios, and understand power transmission. GCSE Physics questions with solutions.',
      introduction: `A transformer is a device that changes the voltage of an alternating current (AC) supply. Transformers are essential for efficient power transmission and for providing the correct voltage for different devices. They work only with AC because they rely on electromagnetic induction, which requires a changing magnetic field.

A transformer consists of two coils of wire wound around a soft iron core. The primary coil is connected to the AC input, and the secondary coil provides the output. When AC flows through the primary coil, it creates a changing magnetic field in the iron core. This changing field induces a voltage in the secondary coil.

The voltage ratio depends on the ratio of turns: Vs/Vp = Ns/Np. A step-up transformer has more turns on the secondary than the primary, increasing voltage. A step-down transformer has fewer turns on the secondary, decreasing voltage. The soft iron core concentrates the magnetic field, ensuring nearly all the flux from the primary passes through the secondary.

For an ideal (100% efficient) transformer, power in equals power out: VpIp = VsIs. This means if voltage increases, current must decrease by the same factor. This is crucial for power transmission: high voltage and low current reduces energy losses in power lines, since power loss equals I²R and lower current means much less wasted energy.`
    },
    questions: [
      {
        difficulty: 'easy',
        marks: 2,
        content: 'A transformer has 100 turns on its primary coil and 500 turns on its secondary coil. If the input voltage is 12 V, calculate the output voltage.',
        solution: `Using the transformer equation: Vs/Vp = Ns/Np

Vs/12 = 500/100
Vs/12 = 5
Vs = 12 × 5
Vs = 60 V

The output voltage is **60 V**.

(This is a step-up transformer as the secondary voltage is higher than the primary.)`,
        display_order: 1
      },
      {
        difficulty: 'medium',
        marks: 3,
        content: 'A mobile phone charger is a step-down transformer that converts 230 V mains to 5 V for charging. If the primary coil has 920 turns, how many turns does the secondary coil have?',
        solution: `Using the transformer equation: Vs/Vp = Ns/Np

Rearranging: Ns = Np × (Vs/Vp)

Ns = 920 × (5/230)
Ns = 920 × 0.0217
Ns = 20 turns

The secondary coil has **20 turns**.

**Check:** 230/5 = 46, and 920/20 = 46 ✓`,
        display_order: 2
      },
      {
        difficulty: 'hard',
        marks: 4,
        content: 'A power station generates electricity at 25 kV. A step-up transformer increases this to 400 kV for transmission. The transmission lines carry a current of 500 A. Assuming the transformer is 100% efficient, calculate: (a) the current from the power station, and (b) the power being transmitted.',
        solution: `**(a) Finding the current from the power station:**

For an ideal transformer: Vp × Ip = Vs × Is (power in = power out)

Rearranging: Ip = (Vs × Is) / Vp

Ip = (400,000 × 500) / 25,000
Ip = 200,000,000 / 25,000
Ip = 8000 A

The current from the power station is **8000 A** (or **8 kA**)

**(b) Finding the power being transmitted:**

P = V × I (using either primary or secondary values)

Using secondary values:
P = 400,000 × 500
P = 200,000,000 W = 200 MW

The power being transmitted is **200 MW** (200 megawatts)

**Note:** The high voltage and low current (500 A vs 8000 A) reduces I²R losses in the transmission lines.`,
        display_order: 3
      }
    ]
  }
];
