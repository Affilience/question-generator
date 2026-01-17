import { SubtopicData } from '../bulk-seo-insert';

export const alevelPhysicsElectricity: SubtopicData[] = [
  {
    content: {
      level: 'a-level',
      subject: 'physics',
      exam_board: 'aqa',
      topic_slug: 'electricity',
      subtopic_slug: 'kirchhoffs-laws',
      title: "Kirchhoff's Laws | A-Level Physics",
      meta_description: "Master Kirchhoff's current and voltage laws for circuit analysis. A-Level Physics practice questions with step-by-step solutions.",
      introduction: `Kirchhoff's laws provide a systematic method for analysing complex electrical circuits. These two laws are based on conservation principles and allow us to find currents and voltages in circuits too complex for simple series-parallel analysis.

Kirchhoff's First Law (Current Law) states that the sum of currents entering a junction equals the sum of currents leaving. This is conservation of charge—charge cannot accumulate at a junction. At any node: ΣI_in = ΣI_out.

Kirchhoff's Second Law (Voltage Law) states that the sum of EMFs in any closed loop equals the sum of potential differences across components. This is conservation of energy—the energy supplied equals energy transferred. For any loop: Σε = ΣIR.

When applying these laws, choose current directions (if wrong, you'll get negative values), write equations for each junction and loop needed, and solve simultaneously. The method works for any planar circuit no matter how complex.`
    },
    questions: [
      {
        difficulty: 'easy',
        marks: 3,
        content: 'Three wires meet at a junction. Two wires carry currents of 3 A and 5 A into the junction. What is the current in the third wire?',
        solution: `**Using Kirchhoff's First Law:**
ΣI_in = ΣI_out

Currents in = 3 A + 5 A = 8 A

By conservation of charge, currents out = 8 A

Since there's only one wire carrying current out:
**Current in third wire = 8 A** (leaving the junction)`,
        display_order: 1
      },
      {
        difficulty: 'medium',
        marks: 4,
        content: 'A circuit contains a 12 V battery with internal resistance 2 Ω connected to resistors of 4 Ω and 6 Ω in series. Calculate the terminal potential difference of the battery.',
        solution: `**Total resistance in circuit:**
R_total = r + R₁ + R₂
R_total = 2 + 4 + 6 = 12 Ω

**Current in circuit:**
Using Kirchhoff's Second Law: ε = IR
I = ε/R_total = 12/12 = 1 A

**Lost volts (across internal resistance):**
V_lost = Ir = 1 × 2 = 2 V

**Terminal potential difference:**
V_terminal = ε - Ir
V_terminal = 12 - 2
V_terminal = **10 V**

Alternatively: V_terminal = I(R₁ + R₂) = 1 × 10 = 10 V ✓`,
        display_order: 2
      },
      {
        difficulty: 'hard',
        marks: 5,
        content: 'Two cells of EMF 6 V and 4 V with internal resistances 1 Ω and 2 Ω respectively are connected in parallel and supply a 4 Ω external resistor. Calculate the current through the external resistor.',
        solution: `**Set up using Kirchhoff's Laws:**
Let I₁ = current from 6V cell, I₂ = current from 4V cell
Let I = current through 4Ω resistor
At junction: I = I₁ + I₂

**Loop 1 (through 6V cell and 4Ω resistor):**
6 = I₁(1) + I(4)
6 = I₁ + 4I ... (1)

**Loop 2 (through 4V cell and 4Ω resistor):**
4 = I₂(2) + I(4)
4 = 2I₂ + 4I ... (2)

**Using I = I₁ + I₂:**
From (1): I₁ = 6 - 4I
From (2): I₂ = (4 - 4I)/2 = 2 - 2I

I = (6 - 4I) + (2 - 2I)
I = 8 - 6I
7I = 8
I = **8/7 A** ≈ **1.14 A**

**Check:**
I₁ = 6 - 4(8/7) = 6 - 32/7 = 10/7 A
I₂ = 2 - 2(8/7) = 2 - 16/7 = -2/7 A (current flows into 4V cell)
I = 10/7 - 2/7 = 8/7 A ✓`,
        display_order: 3
      }
    ]
  },
  {
    content: {
      level: 'a-level',
      subject: 'physics',
      exam_board: 'aqa',
      topic_slug: 'electricity',
      subtopic_slug: 'potential-dividers',
      title: 'Potential Dividers | A-Level Physics',
      meta_description: 'Master potential divider circuits and sensor applications. A-Level Physics practice questions with detailed solutions.',
      introduction: `A potential divider is a circuit that produces an output voltage that is a fraction of the input voltage. It consists of two or more resistors in series across a voltage supply, with the output taken from between them.

For two resistors R₁ and R₂ in series across voltage V_in, the voltage across R₂ is: V_out = V_in × R₂/(R₁ + R₂). This formula assumes no current is drawn from the output—in practice, output devices must have much higher resistance than the divider resistors.

Potential dividers have many applications. With a variable resistor, they can provide adjustable voltage. With sensors like LDRs (light-dependent resistors) or thermistors, they create circuits whose output voltage changes with environmental conditions.

In sensor circuits, the sensor is often one of the divider resistors. If an LDR is used and light increases, its resistance decreases. Where the LDR is placed in the circuit (top or bottom) determines whether output voltage increases or decreases with light intensity.`
    },
    questions: [
      {
        difficulty: 'easy',
        marks: 3,
        content: 'A potential divider consists of a 3 kΩ and a 6 kΩ resistor connected across a 9 V supply. Calculate the voltage across the 6 kΩ resistor.',
        solution: `**Using the potential divider formula:**
V_out = V_in × R₂/(R₁ + R₂)

Where:
- V_in = 9 V
- R₁ = 3 kΩ
- R₂ = 6 kΩ

V_out = 9 × 6/(3 + 6)
V_out = 9 × 6/9
V_out = **6 V**

Alternative method: Total resistance = 9 kΩ, I = 9/9 = 1 mA
V across 6 kΩ = 1 × 6 = 6 V ✓`,
        display_order: 1
      },
      {
        difficulty: 'medium',
        marks: 4,
        content: 'A potential divider uses a 5 kΩ resistor and a thermistor. At 20°C, the thermistor has resistance 10 kΩ. The supply voltage is 12 V. Calculate the voltage across the thermistor and explain what happens to this voltage as temperature increases.',
        solution: `**Voltage across thermistor (V_out):**
V_out = V_in × R_thermistor/(R₁ + R_thermistor)
V_out = 12 × 10/(5 + 10)
V_out = 12 × 10/15
V_out = **8 V**

**As temperature increases:**
- Thermistor resistance **decreases** (NTC thermistor)
- The fraction R_thermistor/(R₁ + R_thermistor) **decreases**
- Therefore V_out **decreases**

**Example at higher temperature:**
If R_thermistor drops to 5 kΩ:
V_out = 12 × 5/(5 + 5) = 12 × 0.5 = 6 V

This circuit could trigger an alarm when V_out drops below a threshold (indicating high temperature).`,
        display_order: 2
      },
      {
        difficulty: 'hard',
        marks: 5,
        content: 'A potential divider with two 10 kΩ resistors provides 6 V from a 12 V supply. A voltmeter with resistance 100 kΩ is connected across one resistor. Calculate the new reading on the voltmeter.',
        solution: `**Without voltmeter:**
V = 12 × 10/(10 + 10) = 6 V (as stated)

**With voltmeter connected:**
The voltmeter (100 kΩ) is in parallel with the bottom 10 kΩ resistor.

**Combined resistance of bottom section:**
1/R_parallel = 1/10 + 1/100 = 10/100 + 1/100 = 11/100
R_parallel = 100/11 = 9.09 kΩ

**New voltage across bottom section (voltmeter reading):**
V_out = 12 × R_parallel/(10 + R_parallel)
V_out = 12 × 9.09/(10 + 9.09)
V_out = 12 × 9.09/19.09
V_out = **5.71 V**

**Effect of voltmeter:**
The reading drops from 6 V to 5.71 V because the voltmeter draws current from the circuit. This is called the "loading effect."

For accurate measurements, voltmeter resistance should be much higher than circuit resistance.`,
        display_order: 3
      }
    ]
  },
  {
    content: {
      level: 'a-level',
      subject: 'physics',
      exam_board: 'aqa',
      topic_slug: 'electricity',
      subtopic_slug: 'emf-internal-resistance',
      title: 'EMF and Internal Resistance | A-Level Physics',
      meta_description: 'Master EMF, internal resistance and terminal voltage calculations. A-Level Physics practice questions with solutions.',
      introduction: `Every real power source has internal resistance that affects its performance. Understanding EMF and internal resistance is essential for analysing real circuits and power delivery.

EMF (electromotive force) is the energy transferred per unit charge by the power source. It equals the terminal voltage when no current flows. Internal resistance (r) is the resistance within the power source itself, caused by the materials and chemical processes inside.

When current flows, some energy is dissipated in the internal resistance. The terminal voltage V = ε - Ir, where ε is EMF and Ir is the "lost volts." This explains why battery voltage drops when supplying large currents.

The EMF and internal resistance can be found experimentally by measuring terminal voltage for different currents. Plotting V against I gives a straight line with y-intercept = ε and gradient = -r. Alternatively, use two pairs of (V, I) values to solve simultaneous equations.`
    },
    questions: [
      {
        difficulty: 'easy',
        marks: 3,
        content: 'A cell has an EMF of 1.5 V and internal resistance 0.5 Ω. Calculate the terminal voltage when a current of 0.4 A flows.',
        solution: `**Using V = ε - Ir**

Given:
- ε = 1.5 V
- r = 0.5 Ω
- I = 0.4 A

V = 1.5 - (0.4 × 0.5)
V = 1.5 - 0.2
V = **1.3 V**

Lost volts = Ir = 0.2 V`,
        display_order: 1
      },
      {
        difficulty: 'medium',
        marks: 4,
        content: 'A battery has terminal voltage 5.6 V when supplying 2 A, and 4.8 V when supplying 4 A. Calculate the EMF and internal resistance.',
        solution: `**Using V = ε - Ir for both conditions:**

When I = 2 A, V = 5.6 V:
5.6 = ε - 2r ... (1)

When I = 4 A, V = 4.8 V:
4.8 = ε - 4r ... (2)

**Subtracting (2) from (1):**
5.6 - 4.8 = (ε - 2r) - (ε - 4r)
0.8 = 2r
r = **0.4 Ω**

**Substituting back into (1):**
5.6 = ε - 2(0.4)
5.6 = ε - 0.8
ε = **6.4 V**

**Check in (2):** 6.4 - 4(0.4) = 6.4 - 1.6 = 4.8 V ✓`,
        display_order: 2
      },
      {
        difficulty: 'hard',
        marks: 5,
        content: 'A battery with EMF 12 V and internal resistance 2 Ω is connected to a variable external resistor R. Calculate the value of R for maximum power dissipation in R, and find this maximum power.',
        solution: `**Current in circuit:**
I = ε/(R + r) = 12/(R + 2)

**Power in external resistor:**
P = I²R = [12/(R + 2)]² × R
P = 144R/(R + 2)²

**For maximum power, differentiate and set to zero:**
Using quotient rule: dP/dR = [144(R + 2)² - 144R × 2(R + 2)]/(R + 2)⁴
= 144(R + 2)[(R + 2) - 2R]/(R + 2)⁴
= 144(2 - R)/(R + 2)³

Setting dP/dR = 0:
2 - R = 0
R = **2 Ω**

**Maximum power occurs when R = r = 2 Ω**

**Maximum power:**
I = 12/(2 + 2) = 3 A
P_max = I²R = 3² × 2 = **18 W**

Or: P_max = ε²/(4r) = 144/8 = 18 W ✓

This is the **maximum power transfer theorem**: maximum power is delivered when load resistance equals source resistance.`,
        display_order: 3
      }
    ]
  },
  {
    content: {
      level: 'a-level',
      subject: 'physics',
      exam_board: 'aqa',
      topic_slug: 'electricity',
      subtopic_slug: 'resistivity',
      title: 'Resistivity | A-Level Physics',
      meta_description: 'Master resistivity calculations and factors affecting resistance. A-Level Physics practice questions with solutions.',
      introduction: `Resistivity is a material property that quantifies how strongly a material opposes the flow of electric current. Unlike resistance, which depends on the dimensions of a conductor, resistivity is an intrinsic property of the material itself.

The resistance of a wire depends on three factors: R = ρL/A, where ρ is resistivity (Ω·m), L is length (m), and A is cross-sectional area (m²). Doubling the length doubles resistance; doubling the cross-sectional area halves resistance.

Different materials have vastly different resistivities. Copper has ρ ≈ 1.7 × 10⁻⁸ Ω·m (good conductor), while glass has ρ ≈ 10¹⁰ Ω·m (insulator). Semiconductors fall between these extremes and their resistivity changes significantly with temperature.

Temperature affects resistivity. In metals, resistivity increases with temperature because lattice vibrations increase, causing more electron scattering. In semiconductors, resistivity typically decreases with temperature as more charge carriers are released.`
    },
    questions: [
      {
        difficulty: 'easy',
        marks: 3,
        content: 'A copper wire has length 2 m and cross-sectional area 1 × 10⁻⁶ m². The resistivity of copper is 1.7 × 10⁻⁸ Ω·m. Calculate the resistance of the wire.',
        solution: `**Using R = ρL/A**

Given:
- ρ = 1.7 × 10⁻⁸ Ω·m
- L = 2 m
- A = 1 × 10⁻⁶ m²

R = (1.7 × 10⁻⁸ × 2)/(1 × 10⁻⁶)
R = 3.4 × 10⁻⁸/10⁻⁶
R = 3.4 × 10⁻⁸ × 10⁶
R = **0.034 Ω** (or 34 mΩ)`,
        display_order: 1
      },
      {
        difficulty: 'medium',
        marks: 4,
        content: 'A nichrome wire of diameter 0.5 mm has resistance 20 Ω. Calculate its length if the resistivity of nichrome is 1.1 × 10⁻⁶ Ω·m.',
        solution: `**Calculate cross-sectional area:**
Diameter = 0.5 mm = 0.5 × 10⁻³ m
Radius = 0.25 × 10⁻³ m

A = πr²
A = π × (0.25 × 10⁻³)²
A = π × 6.25 × 10⁻⁸
A = 1.96 × 10⁻⁷ m²

**Rearranging R = ρL/A for L:**
L = RA/ρ
L = (20 × 1.96 × 10⁻⁷)/(1.1 × 10⁻⁶)
L = 3.92 × 10⁻⁶/1.1 × 10⁻⁶
L = **3.56 m**`,
        display_order: 2
      },
      {
        difficulty: 'hard',
        marks: 5,
        content: 'Two wires X and Y are made of the same material. Wire X has twice the length and three times the diameter of wire Y. Find the ratio of resistance of X to resistance of Y.',
        solution: `**Let wire Y have:**
- Length: L
- Diameter: d (so radius: d/2)
- Cross-sectional area: A_Y = π(d/2)² = πd²/4

**Wire X has:**
- Length: 2L
- Diameter: 3d (so radius: 3d/2)
- Cross-sectional area: A_X = π(3d/2)² = 9πd²/4

**Resistance of Y:**
R_Y = ρL/A_Y = ρL/(πd²/4) = 4ρL/πd²

**Resistance of X:**
R_X = ρ(2L)/A_X = 2ρL/(9πd²/4) = 8ρL/9πd²

**Ratio R_X : R_Y:**
R_X/R_Y = (8ρL/9πd²)/(4ρL/πd²)
R_X/R_Y = (8/9)/(4)
R_X/R_Y = 8/36 = **2/9**

Or equivalently: R_X : R_Y = **2 : 9**

Wire X has 2/9 the resistance of wire Y despite being twice as long, because its larger diameter (9× the area) more than compensates.`,
        display_order: 3
      }
    ]
  }
];
