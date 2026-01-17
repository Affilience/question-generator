import { SubtopicData } from '../bulk-seo-insert';

export const alevelPhysicsNuclear: SubtopicData[] = [
  {
    content: {
      level: 'a-level',
      subject: 'physics',
      exam_board: 'aqa',
      topic_slug: 'nuclear',
      subtopic_slug: 'binding-energy',
      title: 'Nuclear Binding Energy | A-Level Physics',
      meta_description: 'Master nuclear binding energy including mass defect and binding energy per nucleon. A-Level Physics practice questions.',
      introduction: `Nuclear binding energy is the energy required to completely separate all the protons and neutrons in a nucleus. Equivalently, it is the energy released when separate nucleons come together to form a nucleus. This energy comes from the conversion of mass according to Einstein's mass-energy equivalence.

The mass of a nucleus is always less than the total mass of its constituent protons and neutrons. This difference is called the mass defect (Δm). Using E = mc², the binding energy is: E_b = Δmc², where c is the speed of light. The binding energy represents how strongly the nucleus is held together.

Binding energy per nucleon (E_b/A) is a more useful measure for comparing nuclear stability. It is calculated by dividing the total binding energy by the number of nucleons (mass number A). The higher the binding energy per nucleon, the more stable the nucleus.

The binding energy per nucleon curve shows that nuclei with A ≈ 56 (iron-56 and nearby elements) have the highest binding energy per nucleon, making them the most stable. Lighter nuclei can release energy by fusion (combining), while heavier nuclei can release energy by fission (splitting). Both processes move towards the peak of the curve.

This explains why energy is released in both nuclear fusion (combining light nuclei) and nuclear fission (splitting heavy nuclei). In both cases, the products have higher binding energy per nucleon than the reactants, meaning energy is released. The missing mass appears as kinetic energy of the products.`
    },
    questions: [
      {
        difficulty: 'easy',
        marks: 3,
        content: 'A helium-4 nucleus contains 2 protons and 2 neutrons. Calculate the mass defect given: mass of proton = 1.00728 u, mass of neutron = 1.00867 u, mass of helium-4 = 4.00260 u.',
        solution: `**Calculate total mass of nucleons:**
Mass = 2 × 1.00728 + 2 × 1.00867 [1 mark]
Mass = 2.01456 + 2.01734
Mass = 4.03190 u [1 mark]

**Calculate mass defect:**
Δm = mass of nucleons - mass of nucleus
Δm = 4.03190 - 4.00260
Δm = 0.02930 u [1 mark]`,
        display_order: 1
      },
      {
        difficulty: 'medium',
        marks: 4,
        content: 'Calculate the binding energy of helium-4 in MeV using the mass defect of 0.02930 u. (1 u = 931.5 MeV/c²)',
        solution: `**Using E = Δmc²:**
Since 1 u = 931.5 MeV/c², when we use mass in u, the binding energy in MeV is:

E_b = Δm × 931.5 MeV [1 mark]
E_b = 0.02930 × 931.5 [1 mark]
E_b = 27.3 MeV [1 mark]

**Binding energy per nucleon:**
E_b/A = 27.3/4
E_b/A = 6.83 MeV per nucleon [1 mark]`,
        display_order: 2
      },
      {
        difficulty: 'hard',
        marks: 5,
        content: 'Explain, using the binding energy per nucleon curve, why energy is released in both nuclear fusion and nuclear fission.',
        solution: `**The binding energy per nucleon curve:**
- Shows E_b/A (y-axis) against mass number A (x-axis)
- Has a peak at around A = 56 (iron-56 region) [1 mark]
- Light nuclei have lower E_b/A
- Heavy nuclei also have lower E_b/A than the peak

**Energy release in fusion:**
- Light nuclei (e.g., hydrogen) have low E_b/A (~1-2 MeV)
- When they fuse, products have higher E_b/A [1 mark]
- Higher binding energy means nucleons are more tightly bound
- The increase in binding energy is released [1 mark]
- Example: Fusion of hydrogen to helium releases ~6 MeV per nucleon

**Energy release in fission:**
- Heavy nuclei (e.g., uranium, A~235) have E_b/A ~7.6 MeV
- Products of fission have A~90-140 with E_b/A ~8.5 MeV [1 mark]
- The products are more stable (higher E_b/A)
- The difference in total binding energy is released

**Key principle:**
In both processes, the products are closer to the peak of the curve than the reactants, meaning they are more stable and energy is released. [1 mark]`,
        display_order: 3
      }
    ]
  },
  {
    content: {
      level: 'a-level',
      subject: 'physics',
      exam_board: 'aqa',
      topic_slug: 'nuclear',
      subtopic_slug: 'radioactive-decay',
      title: 'Radioactive Decay | A-Level Physics',
      meta_description: 'Master radioactive decay including half-life and decay equations. A-Level Physics practice questions with solutions.',
      introduction: `Radioactive decay is the spontaneous and random process by which unstable nuclei emit radiation to become more stable. It is spontaneous because it happens without external influence and at a constant rate regardless of conditions. It is random because we cannot predict when a specific nucleus will decay.

Three main types of radiation are emitted: alpha (α) particles (helium nuclei), beta (β) particles (electrons or positrons), and gamma (γ) rays (high-energy photons). Alpha decay reduces both mass number and proton number; beta-minus decay converts a neutron to a proton; gamma emission occurs when an excited nucleus loses energy without changing composition.

The activity (A) of a radioactive source is the number of decays per second, measured in becquerels (Bq). Activity decreases exponentially with time: A = A₀e^(-λt), where λ is the decay constant (probability of decay per unit time). The number of undecayed nuclei follows the same pattern: N = N₀e^(-λt).

Half-life (t½) is the time taken for half the radioactive nuclei to decay, or equivalently for the activity to halve. It is related to the decay constant by: t½ = ln2/λ = 0.693/λ. Half-life is constant for a given isotope regardless of the amount present - a characteristic of exponential decay.

Radioactive decay can be detected and measured using Geiger-Müller tubes, scintillation counters, and photographic film. Background radiation from natural sources (cosmic rays, radon gas, rocks) must be subtracted from measurements. The corrected count rate is proportional to the activity of the source.`
    },
    questions: [
      {
        difficulty: 'easy',
        marks: 3,
        content: 'A radioactive isotope has a half-life of 6 hours. Calculate the decay constant in s⁻¹.',
        solution: `**Convert half-life to seconds:**
t½ = 6 hours = 6 × 3600 = 21600 s [1 mark]

**Apply relationship:**
λ = ln2/t½ = 0.693/t½ [1 mark]

λ = 0.693/21600

λ = 3.2 × 10⁻⁵ s⁻¹ [1 mark]`,
        display_order: 1
      },
      {
        difficulty: 'medium',
        marks: 4,
        content: 'A radioactive sample has an initial activity of 8000 Bq. After 30 minutes, the activity has fallen to 1000 Bq. Calculate the half-life of the isotope.',
        solution: `**Determine number of half-lives:**
8000 → 4000 → 2000 → 1000 Bq [1 mark]
Three half-lives have occurred

**Calculate half-life:**
3 × t½ = 30 minutes [1 mark]
t½ = 10 minutes [1 mark]

**Alternative method using exponential equation:**
A = A₀e^(-λt)
1000 = 8000 × e^(-λ × 30)
e^(-30λ) = 0.125
-30λ = ln(0.125) = -2.08
λ = 0.0693 min⁻¹
t½ = 0.693/0.0693 = 10 min [1 mark]`,
        display_order: 2
      },
      {
        difficulty: 'hard',
        marks: 5,
        content: 'A sample initially contains 1.0 × 10²⁰ atoms of a radioactive isotope with half-life 5.0 days. Calculate:\n(a) the initial activity\n(b) the activity after 15 days\n(c) the number of atoms remaining after 15 days',
        solution: `**Find decay constant:**
λ = ln2/t½ = 0.693/(5.0 × 24 × 3600) [1 mark]
λ = 1.60 × 10⁻⁶ s⁻¹

**(a) Initial activity:**
A₀ = λN₀
A₀ = 1.60 × 10⁻⁶ × 1.0 × 10²⁰ [1 mark]
A₀ = 1.60 × 10¹⁴ Bq

**(b) Activity after 15 days:**
15 days = 3 half-lives
A = A₀/2³ = A₀/8 [1 mark]
A = 1.60 × 10¹⁴/8
A = 2.0 × 10¹³ Bq [1 mark]

**(c) Number of atoms remaining:**
N = N₀/2³ = N₀/8
N = 1.0 × 10²⁰/8
N = 1.25 × 10¹⁹ atoms [1 mark]

(Or using N = N₀e^(-λt) gives the same result)`,
        display_order: 3
      }
    ]
  },
  {
    content: {
      level: 'a-level',
      subject: 'physics',
      exam_board: 'aqa',
      topic_slug: 'nuclear',
      subtopic_slug: 'nuclear-reactions',
      title: 'Nuclear Reactions | A-Level Physics',
      meta_description: 'Master nuclear reactions including fission and fusion. A-Level Physics practice questions with solutions.',
      introduction: `Nuclear reactions involve changes to the structure of atomic nuclei, either through radioactive decay or through induced reactions such as fission and fusion. In all nuclear reactions, mass-energy, charge, and nucleon number are conserved.

Nuclear fission is the splitting of a heavy nucleus into two or more lighter nuclei, typically triggered by the absorption of a neutron. When uranium-235 absorbs a neutron, it becomes unstable and splits into two medium-mass nuclei plus 2-3 neutrons, releasing about 200 MeV of energy. These neutrons can cause further fissions - the basis of chain reactions.

Nuclear fusion is the combining of light nuclei to form heavier nuclei. The proton-proton chain and CNO cycle in stars fuse hydrogen into helium, releasing enormous energy. Fusion requires very high temperatures (millions of degrees) to overcome the electrostatic repulsion between positively charged nuclei - hence "thermonuclear" fusion.

In nuclear equations, the total mass number (A) and atomic number (Z) must balance on both sides. For example, in alpha decay: ²³⁸U → ²³⁴Th + ⁴He. The sum of mass numbers (238 = 234 + 4) and atomic numbers (92 = 90 + 2) are equal on both sides.

The energy released in nuclear reactions can be calculated from the mass difference using E = Δmc². This energy appears as kinetic energy of the products and, in some cases, gamma radiation. The energy released per nucleon in fusion is greater than in fission, but fusion is much harder to achieve on Earth.`
    },
    questions: [
      {
        difficulty: 'easy',
        marks: 3,
        content: 'Complete the following nuclear equation for the alpha decay of radium-226:\n\n²²⁶Ra → ? + ⁴He\n₈₈        ₂',
        solution: `**Conservation of mass number:**
226 = A + 4
A = 222 [1 mark]

**Conservation of atomic number:**
88 = Z + 2
Z = 86 [1 mark]

**Complete equation:**
²²⁶Ra → ²²²Rn + ⁴He [1 mark]
₈₈      ₈₆      ₂

The product is radon-222 (element 86 is radon)`,
        display_order: 1
      },
      {
        difficulty: 'medium',
        marks: 4,
        content: 'A possible fission reaction of uranium-235 is:\n\n²³⁵U + ¹n → ¹⁴⁴Ba + ⁸⁹Kr + 3¹n\n₉₂    ₀    ₅₆     ₃₆    ₀\n\nVerify that this equation is balanced and calculate the number of neutrons in each product nucleus.',
        solution: `**Check mass number balance:**
Left side: 235 + 1 = 236
Right side: 144 + 89 + 3(1) = 236 ✓ [1 mark]

**Check atomic number balance:**
Left side: 92 + 0 = 92
Right side: 56 + 36 + 0 = 92 ✓ [1 mark]

**Neutrons in barium-144:**
Neutrons = A - Z = 144 - 56 = 88 neutrons [1 mark]

**Neutrons in krypton-89:**
Neutrons = A - Z = 89 - 36 = 53 neutrons [1 mark]`,
        display_order: 2
      },
      {
        difficulty: 'hard',
        marks: 5,
        content: 'In the proton-proton chain, the net reaction is:\n\n4¹H → ⁴He + 2e⁺ + 2νₑ + energy\n\nGiven: mass of ¹H = 1.00783 u, mass of ⁴He = 4.00260 u, mass of e⁺ = 0.00055 u, 1 u = 931.5 MeV/c².\n\nCalculate the energy released per reaction.',
        solution: `**Calculate total mass before reaction:**
Mass of 4 protons = 4 × 1.00783 = 4.03132 u [1 mark]

**Calculate total mass after reaction:**
Mass of products = 4.00260 + 2(0.00055)
Mass = 4.00260 + 0.00110 = 4.00370 u [1 mark]
(Neutrinos have negligible mass)

**Calculate mass difference:**
Δm = 4.03132 - 4.00370 = 0.02762 u [1 mark]

**Calculate energy released:**
E = Δm × 931.5 MeV
E = 0.02762 × 931.5 [1 mark]
E = 25.7 MeV [1 mark]

This energy is carried away as kinetic energy of the products and gamma rays produced in the intermediate steps.`,
        display_order: 3
      }
    ]
  },
  {
    content: {
      level: 'a-level',
      subject: 'physics',
      exam_board: 'aqa',
      topic_slug: 'nuclear',
      subtopic_slug: 'particle-physics',
      title: 'Particle Physics | A-Level Physics',
      meta_description: 'Master particle physics including quarks, leptons and fundamental forces. A-Level Physics practice questions with solutions.',
      introduction: `Particle physics studies the fundamental constituents of matter and the forces between them. The Standard Model organizes all known particles into two main categories: fermions (matter particles) and bosons (force carriers). This framework explains the structure of atoms and nuclear processes.

Fermions are divided into quarks and leptons. There are six quarks (up, down, charm, strange, top, bottom) which combine to form hadrons. Protons and neutrons are baryons made of three quarks: proton = uud, neutron = udd. Mesons contain one quark and one antiquark.

Leptons include the electron, muon, and tau particles, each with associated neutrinos. Leptons do not experience the strong nuclear force. The electron is stable; the muon and tau are unstable and decay into lighter particles.

Four fundamental forces govern all interactions: gravity (acts on mass), electromagnetic (acts on charge), strong nuclear (holds quarks together and nuclei together), and weak nuclear (responsible for beta decay). Each force is mediated by exchange particles (bosons): gravitons, photons, gluons, and W/Z bosons respectively.

Conservation laws govern particle interactions. Charge, baryon number, and lepton number are always conserved. In strong interactions, strangeness is also conserved. Studying particle decays and interactions reveals these conservation laws and helps identify unknown particles.`
    },
    questions: [
      {
        difficulty: 'easy',
        marks: 3,
        content: 'State the quark composition of a proton and a neutron, and verify that the charges are correct. (Up quark charge = +²⁄₃e, Down quark charge = -¹⁄₃e)',
        solution: `**Proton composition:** uud (up, up, down) [1 mark]

**Proton charge check:**
Charge = ²⁄₃ + ²⁄₃ + (-¹⁄₃) = ⁴⁄₃ - ¹⁄₃ = ³⁄₃ = +1e ✓

**Neutron composition:** udd (up, down, down) [1 mark]

**Neutron charge check:**
Charge = ²⁄₃ + (-¹⁄₃) + (-¹⁄₃) = ²⁄₃ - ²⁄₃ = 0 ✓ [1 mark]`,
        display_order: 1
      },
      {
        difficulty: 'medium',
        marks: 4,
        content: 'In beta-minus decay, a neutron changes into a proton.\n\n(a) Write the equation for this decay.\n(b) Describe the change at the quark level.',
        solution: `**(a) Beta-minus decay equation:**
n → p + e⁻ + ν̄ₑ [1 mark]
(neutron → proton + electron + antineutrino)

**(b) Quark level change:**
Before: neutron = udd [1 mark]
After: proton = uud

One down quark changes to an up quark: [1 mark]
d → u + e⁻ + ν̄ₑ

**Charge conservation check:**
Before: -¹⁄₃
After: +²⁄₃ + (-1) + 0 = -¹⁄₃ ✓ [1 mark]

This is mediated by the weak force (W⁻ boson).`,
        display_order: 2
      },
      {
        difficulty: 'hard',
        marks: 5,
        content: 'For the decay: Σ⁺ → n + π⁺\n\nThe quark compositions are: Σ⁺ = uus, n = udd, π⁺ = ud̄\n\nDetermine whether this decay conserves (a) charge, (b) baryon number, and (c) strangeness. Hence state whether this can occur via the strong interaction.',
        solution: `**(a) Charge conservation:**
Before: Σ⁺ has charge +1
After: n (charge 0) + π⁺ (charge +1) = +1
Charge is conserved ✓ [1 mark]

**(b) Baryon number:**
Σ⁺ = baryon = +1
n = baryon = +1
π⁺ = meson = 0
Before: +1, After: +1 + 0 = +1
Baryon number is conserved ✓ [1 mark]

**(c) Strangeness:**
Σ⁺ (uus): contains one strange quark, S = -1 [1 mark]
n (udd): no strange quarks, S = 0
π⁺ (ud̄): no strange quarks, S = 0
Before: S = -1, After: S = 0
Strangeness is NOT conserved ✓ [1 mark]

**Conclusion:**
This decay cannot occur via the strong interaction because strangeness is not conserved. It must occur via the weak interaction, where strangeness can change by ±1. [1 mark]`,
        display_order: 3
      }
    ]
  },
  {
    content: {
      level: 'a-level',
      subject: 'physics',
      exam_board: 'aqa',
      topic_slug: 'nuclear',
      subtopic_slug: 'mass-energy',
      title: 'Mass-Energy Equivalence | A-Level Physics',
      meta_description: 'Master mass-energy equivalence including E=mc² calculations. A-Level Physics practice questions with solutions.',
      introduction: `Einstein's mass-energy equivalence, E = mc², is one of the most famous equations in physics. It states that mass and energy are interchangeable - mass can be converted to energy and vice versa. The speed of light squared (c² ≈ 9 × 10¹⁶ m²/s²) means that a small amount of mass corresponds to an enormous amount of energy.

In nuclear and particle physics, mass is often expressed in unified atomic mass units (u) or MeV/c². One atomic mass unit (1 u = 1.661 × 10⁻²⁷ kg) equals 931.5 MeV/c². This allows direct conversion between mass defect and binding energy without explicitly calculating mc².

The equation explains where the energy comes from in nuclear reactions. In fission and fusion, the total mass of products is less than the total mass of reactants. This "missing mass" (mass defect) has been converted to energy according to E = Δmc². Even a small mass defect releases enormous energy.

Mass-energy equivalence also explains why particle accelerators need such high energies. To create a new particle, enough energy must be provided to account for the particle's mass. The LHC creates particles by converting kinetic energy into mass when particles collide.

In everyday situations, mass-energy conversion is negligible. Chemical reactions involve energy changes of a few eV per atom - far too small to produce measurable mass changes. Only in nuclear reactions and particle physics does the mass change become significant enough to observe.`
    },
    questions: [
      {
        difficulty: 'easy',
        marks: 3,
        content: 'Calculate the energy equivalent of 1 kg of mass in joules and in MeV. (c = 3.0 × 10⁸ m/s, 1 MeV = 1.6 × 10⁻¹³ J)',
        solution: `**Calculate energy in joules:**
E = mc² [1 mark]
E = 1 × (3.0 × 10⁸)²
E = 9.0 × 10¹⁶ J [1 mark]

**Convert to MeV:**
E = (9.0 × 10¹⁶)/(1.6 × 10⁻¹³)
E = 5.6 × 10²⁹ MeV [1 mark]`,
        display_order: 1
      },
      {
        difficulty: 'medium',
        marks: 4,
        content: 'In a nuclear reactor, 1.0 kg of uranium-235 undergoes fission, releasing 8.2 × 10¹³ J of energy. Calculate the mass converted to energy and express this as a percentage of the original mass.',
        solution: `**Calculate mass converted:**
Using E = Δmc²
Δm = E/c² [1 mark]
Δm = (8.2 × 10¹³)/(3.0 × 10⁸)²
Δm = (8.2 × 10¹³)/(9.0 × 10¹⁶) [1 mark]
Δm = 9.1 × 10⁻⁴ kg = 0.91 g

**Calculate percentage:**
Percentage = (Δm/m) × 100% [1 mark]
Percentage = (9.1 × 10⁻⁴/1.0) × 100%
Percentage = 0.091% [1 mark]

Only about 0.1% of the mass is converted to energy in fission.`,
        display_order: 2
      },
      {
        difficulty: 'hard',
        marks: 5,
        content: 'A positron and an electron annihilate at rest, producing two gamma ray photons. Calculate:\n(a) the energy of each photon in MeV\n(b) the wavelength of each photon\n(mass of electron/positron = 9.11 × 10⁻³¹ kg, h = 6.63 × 10⁻³⁴ J s)',
        solution: `**(a) Energy of each photon:**
Total mass annihilated = 2 × 9.11 × 10⁻³¹ kg [1 mark]

Total energy released = mc²
E_total = 2 × 9.11 × 10⁻³¹ × (3.0 × 10⁸)²
E_total = 1.64 × 10⁻¹³ J [1 mark]

Energy per photon = E_total/2
E_photon = 8.2 × 10⁻¹⁴ J

In MeV: E = (8.2 × 10⁻¹⁴)/(1.6 × 10⁻¹³)
E = 0.51 MeV (= electron rest mass energy) [1 mark]

**(b) Wavelength of each photon:**
Using E = hc/λ
λ = hc/E [1 mark]
λ = (6.63 × 10⁻³⁴ × 3.0 × 10⁸)/(8.2 × 10⁻¹⁴)
λ = 2.4 × 10⁻¹² m = 0.0024 nm [1 mark]

This is in the gamma ray region of the electromagnetic spectrum.`,
        display_order: 3
      }
    ]
  }
];
