import { SubtopicData } from '../bulk-seo-insert';

export const alevelPhysicsQuantum: SubtopicData[] = [
  {
    content: {
      level: 'a-level',
      subject: 'physics',
      exam_board: 'aqa',
      topic_slug: 'quantum',
      subtopic_slug: 'photoelectric-effect',
      title: 'The Photoelectric Effect | A-Level Physics',
      meta_description: 'Master the photoelectric effect including work function and stopping potential. A-Level Physics practice questions with solutions.',
      introduction: `The photoelectric effect is the emission of electrons from a metal surface when light of sufficiently high frequency shines upon it. This phenomenon cannot be explained by the wave theory of light and provided crucial evidence for the particle nature of electromagnetic radiation.

Classical wave theory predicted that any frequency of light should cause electron emission if intense enough, and that more intense light should give emitted electrons more energy. However, experiments showed that below a certain threshold frequency, no electrons are emitted regardless of intensity, and increasing intensity only increases the number of electrons, not their energy.

Einstein explained the photoelectric effect by proposing that light consists of discrete packets of energy called photons. Each photon has energy E = hf, where h is Planck's constant (6.63 × 10⁻³⁴ J s) and f is the frequency. A single photon can only eject a single electron, and it must have enough energy to overcome the work function of the metal.

The photoelectric equation is: hf = φ + ½mv²_max, where hf is the photon energy, φ is the work function (minimum energy needed to remove an electron), and ½mv²_max is the maximum kinetic energy of emitted electrons. The threshold frequency f₀ = φ/h is the minimum frequency needed for emission.

The stopping potential V_s is the potential difference needed to just stop the most energetic photoelectrons: eV_s = ½mv²_max. This allows measurement of maximum kinetic energy. A graph of stopping potential against frequency gives a straight line with gradient h/e and y-intercept -φ/e.`
    },
    questions: [
      {
        difficulty: 'easy',
        marks: 3,
        content: 'Light of frequency 8.0 × 10¹⁴ Hz shines on a metal with work function 3.2 × 10⁻¹⁹ J. Calculate the maximum kinetic energy of the emitted photoelectrons. (h = 6.63 × 10⁻³⁴ J s)',
        solution: `**Apply photoelectric equation:**
hf = φ + KE_max [1 mark]
KE_max = hf - φ

**Calculate photon energy:**
hf = 6.63 × 10⁻³⁴ × 8.0 × 10¹⁴
hf = 5.30 × 10⁻¹⁹ J [1 mark]

**Calculate maximum kinetic energy:**
KE_max = 5.30 × 10⁻¹⁹ - 3.2 × 10⁻¹⁹
KE_max = 2.1 × 10⁻¹⁹ J [1 mark]`,
        display_order: 1
      },
      {
        difficulty: 'medium',
        marks: 4,
        content: 'A metal has a threshold wavelength of 500 nm for the photoelectric effect. Calculate the work function in eV. (h = 6.63 × 10⁻³⁴ J s, c = 3.0 × 10⁸ m/s, 1 eV = 1.6 × 10⁻¹⁹ J)',
        solution: `**Find threshold frequency:**
c = fλ
f₀ = c/λ₀ = (3.0 × 10⁸)/(500 × 10⁻⁹) [1 mark]
f₀ = 6.0 × 10¹⁴ Hz

**Calculate work function in joules:**
At threshold, hf₀ = φ
φ = hf₀ = 6.63 × 10⁻³⁴ × 6.0 × 10¹⁴ [1 mark]
φ = 3.98 × 10⁻¹⁹ J

**Convert to electronvolts:**
φ = (3.98 × 10⁻¹⁹)/(1.6 × 10⁻¹⁹) [1 mark]
φ = 2.49 eV ≈ 2.5 eV [1 mark]`,
        display_order: 2
      },
      {
        difficulty: 'hard',
        marks: 5,
        content: 'Explain why the photoelectric effect cannot be explained by the wave theory of light and describe three observations that support the photon model.',
        solution: `**Why wave theory fails:**

Wave theory predicts:
- Energy is absorbed continuously as a wave
- Higher intensity should give electrons more energy
- Any frequency should cause emission if intensity is high enough
- There should be a time delay for energy to accumulate [1 mark]

**Three observations supporting the photon model:**

**1. Threshold frequency:**
- Below a certain frequency f₀, no electrons are emitted regardless of intensity [1 mark]
- Photon model explanation: each photon must have energy hf ≥ φ
- A single low-frequency photon cannot provide enough energy

**2. Intensity and number of electrons:**
- Higher intensity increases the number of photoelectrons, not their energy [1 mark]
- Photon model explanation: more intense light = more photons
- Each photon can only eject one electron
- More photons = more electrons ejected

**3. No time delay:**
- Electrons are emitted almost instantaneously (< 10⁻⁹ s) [1 mark]
- Photon model explanation: energy is delivered in discrete packets
- If one photon has enough energy, emission is immediate
- No need to "accumulate" energy from a continuous wave [1 mark]`,
        display_order: 3
      }
    ]
  },
  {
    content: {
      level: 'a-level',
      subject: 'physics',
      exam_board: 'aqa',
      topic_slug: 'quantum',
      subtopic_slug: 'wave-particle-duality',
      title: 'Wave-Particle Duality | A-Level Physics',
      meta_description: 'Master wave-particle duality including electron diffraction. A-Level Physics practice questions with solutions.',
      introduction: `Wave-particle duality is the concept that all matter and radiation exhibits both wave-like and particle-like properties. This is a fundamental principle of quantum mechanics and represents a significant departure from classical physics, where waves and particles were distinct categories.

Light demonstrates both behaviours: the photoelectric effect shows its particle nature (photons), while diffraction and interference demonstrate its wave nature. Neither model alone can explain all observed phenomena - both are needed for a complete description.

In 1924, de Broglie proposed that matter also has wave properties. He suggested that any particle with momentum p has an associated wavelength: λ = h/p, where h is Planck's constant. This de Broglie wavelength is significant for particles with very small mass and/or low speed.

Electron diffraction provides evidence for the wave nature of electrons. When electrons pass through a crystalline material or thin graphite film, they produce a diffraction pattern similar to X-rays. The pattern shows rings whose positions match predictions based on the de Broglie wavelength of the electrons.

The wave nature of electrons is exploited in electron microscopes, which can achieve much higher resolution than optical microscopes. Because electrons can be accelerated to have very short de Broglie wavelengths (much shorter than visible light), they can resolve much finer detail. The resolving power of a microscope is limited by the wavelength used.`
    },
    questions: [
      {
        difficulty: 'easy',
        marks: 3,
        content: 'Calculate the de Broglie wavelength of an electron travelling at 2.0 × 10⁶ m/s. (h = 6.63 × 10⁻³⁴ J s, electron mass = 9.11 × 10⁻³¹ kg)',
        solution: `**Calculate momentum:**
p = mv = 9.11 × 10⁻³¹ × 2.0 × 10⁶ [1 mark]
p = 1.82 × 10⁻²⁴ kg m/s

**Apply de Broglie equation:**
λ = h/p [1 mark]
λ = (6.63 × 10⁻³⁴)/(1.82 × 10⁻²⁴)
λ = 3.64 × 10⁻¹⁰ m
λ ≈ 0.36 nm [1 mark]`,
        display_order: 1
      },
      {
        difficulty: 'medium',
        marks: 4,
        content: 'An electron is accelerated from rest through a potential difference of 1500 V. Calculate its de Broglie wavelength. (e = 1.6 × 10⁻¹⁹ C, h = 6.63 × 10⁻³⁴ J s, m_e = 9.11 × 10⁻³¹ kg)',
        solution: `**Find kinetic energy:**
KE = eV = 1.6 × 10⁻¹⁹ × 1500 [1 mark]
KE = 2.4 × 10⁻¹⁶ J

**Find speed (or momentum):**
KE = ½mv²
v = √(2KE/m) = √(2 × 2.4 × 10⁻¹⁶/9.11 × 10⁻³¹)
v = 2.30 × 10⁷ m/s [1 mark]

**Calculate momentum:**
p = mv = 9.11 × 10⁻³¹ × 2.30 × 10⁷
p = 2.09 × 10⁻²³ kg m/s [1 mark]

**Calculate de Broglie wavelength:**
λ = h/p = (6.63 × 10⁻³⁴)/(2.09 × 10⁻²³)
λ = 3.17 × 10⁻¹¹ m ≈ 0.032 nm [1 mark]`,
        display_order: 2
      },
      {
        difficulty: 'hard',
        marks: 5,
        content: 'Describe the evidence from electron diffraction that supports the wave nature of electrons, and explain why this phenomenon is not observed with everyday objects like tennis balls.',
        solution: `**Evidence from electron diffraction:**

**Experimental setup:**
- Electrons are accelerated and directed at a thin crystalline material (e.g., graphite) [1 mark]
- A photographic film or detector is placed behind the sample

**Observations:**
- A pattern of concentric rings is observed [1 mark]
- This pattern is similar to X-ray diffraction patterns
- Ring positions correspond to Bragg's law with λ = de Broglie wavelength
- Pattern changes with electron speed (different λ)

**Why this supports wave nature:**
- Diffraction is a wave phenomenon
- Particles (classically) would not produce such patterns [1 mark]
- The observed pattern matches predictions using de Broglie wavelength

**Why tennis balls don't show diffraction:**

**Calculation example:**
Tennis ball: m ≈ 0.06 kg, v ≈ 50 m/s
p = mv = 3 kg m/s
λ = h/p = 6.63 × 10⁻³⁴/3 = 2.2 × 10⁻³⁴ m [1 mark]

**Explanation:**
- The de Broglie wavelength is incredibly small
- Much smaller than any gap or obstacle we could create
- For diffraction to be observable, wavelength must be comparable to gap size
- No aperture is small enough to diffract tennis balls
- Quantum effects are negligible for macroscopic objects [1 mark]`,
        display_order: 3
      }
    ]
  },
  {
    content: {
      level: 'a-level',
      subject: 'physics',
      exam_board: 'aqa',
      topic_slug: 'quantum',
      subtopic_slug: 'energy-levels',
      title: 'Energy Levels | A-Level Physics',
      meta_description: 'Master atomic energy levels including excitation and ionisation. A-Level Physics practice questions with solutions.',
      introduction: `Electrons in atoms exist in discrete energy levels, not in any arbitrary energy state. This is one of the fundamental principles of quantum mechanics and explains the characteristic line spectra emitted by different elements. The energy levels are often depicted in energy level diagrams.

The ground state is the lowest energy level that an electron can occupy - it represents the most stable configuration. Excited states are higher energy levels. The ionisation energy is the energy required to remove an electron from the ground state completely from the atom (to infinity with zero kinetic energy).

Electrons can move between energy levels by absorbing or emitting energy. When an electron absorbs a photon with exactly the right energy (equal to the difference between two energy levels), it jumps to a higher level. When it falls back to a lower level, it emits a photon with energy equal to the energy difference.

The relationship between the energy transition and the photon is: ΔE = hf = hc/λ, where ΔE is the energy difference between levels, h is Planck's constant, f is the photon frequency, c is the speed of light, and λ is the wavelength. Different transitions produce photons of different wavelengths.

This explains emission and absorption spectra. Emission spectra show bright lines at specific wavelengths - each line corresponds to a specific electron transition from a higher to lower energy level. Absorption spectra show dark lines where light has been absorbed - the absorbed wavelengths correspond to transitions from lower to higher levels.`
    },
    questions: [
      {
        difficulty: 'easy',
        marks: 3,
        content: 'An electron in a hydrogen atom falls from the n=3 energy level (-1.51 eV) to the n=2 level (-3.40 eV). Calculate the wavelength of the emitted photon. (h = 6.63 × 10⁻³⁴ J s, c = 3.0 × 10⁸ m/s, 1 eV = 1.6 × 10⁻¹⁹ J)',
        solution: `**Calculate energy released:**
ΔE = E₃ - E₂ = -1.51 - (-3.40) = 1.89 eV [1 mark]
ΔE = 1.89 × 1.6 × 10⁻¹⁹ = 3.02 × 10⁻¹⁹ J

**Apply E = hc/λ:**
λ = hc/ΔE [1 mark]
λ = (6.63 × 10⁻³⁴ × 3.0 × 10⁸)/(3.02 × 10⁻¹⁹)
λ = 6.59 × 10⁻⁷ m
λ = 659 nm [1 mark]

(This is red light in the visible spectrum - the H-alpha line)`,
        display_order: 1
      },
      {
        difficulty: 'medium',
        marks: 4,
        content: 'The ground state energy of hydrogen is -13.6 eV. Calculate the ionisation energy of hydrogen in joules and explain what ionisation means.',
        solution: `**Calculate ionisation energy:**
Ionisation energy = Energy to go from ground state to infinity
From E = -13.6 eV to E = 0 (at infinity) [1 mark]

Ionisation energy = 0 - (-13.6) = 13.6 eV

**Convert to joules:**
E = 13.6 × 1.6 × 10⁻¹⁹ [1 mark]
E = 2.18 × 10⁻¹⁸ J [1 mark]

**Explanation of ionisation:**
Ionisation is the complete removal of an electron from an atom [1 mark]
- The electron has enough energy to escape the atom entirely
- It is no longer bound to the nucleus
- The atom becomes a positive ion
- "Infinity" in energy level diagrams represents the electron being free from the atom with zero kinetic energy`,
        display_order: 2
      },
      {
        difficulty: 'hard',
        marks: 5,
        content: 'An atom has energy levels at 0 eV, -2.0 eV, -5.5 eV, and -8.0 eV (ground state). The atom is illuminated with photons of energy 5.5 eV. Describe all the possible transitions that could occur and the photons that could be emitted.',
        solution: `**Initial excitation:**
Photon energy = 5.5 eV
From ground state (-8.0 eV):
- Can be excited to -8.0 + 5.5 = -2.5 eV
- No level at -2.5 eV - this transition cannot occur [1 mark]

From -5.5 eV level:
- Can be excited to -5.5 + 5.5 = 0 eV (ionisation) ✓ [1 mark]

From -2.0 eV level:
- Would go to +3.5 eV - this would ionise with excess KE

**However, atom is initially in ground state:**
The 5.5 eV photon cannot excite from ground state to any level.

**Check other transitions from ground state:**
- -8.0 to -5.5: needs 2.5 eV ✗
- -8.0 to -2.0: needs 6.0 eV ✗
- -8.0 to 0: needs 8.0 eV ✗ [1 mark]

**If atom starts in ground state:**
No transitions occur - the photon is not absorbed.

**If we consider atom in excited states:**
From -2.0 eV: 5.5 eV photon would ionise the atom
- Electron escapes with 5.5 - 2.0 = 3.5 eV kinetic energy [1 mark]

**Possible emission photons (if excited):**
- 0 to -2.0: 2.0 eV photon (620 nm)
- 0 to -5.5: 5.5 eV photon (226 nm)
- 0 to -8.0: 8.0 eV photon (155 nm)
- -2.0 to -5.5: 3.5 eV photon (354 nm)
- -2.0 to -8.0: 6.0 eV photon (207 nm)
- -5.5 to -8.0: 2.5 eV photon (496 nm) [1 mark]`,
        display_order: 3
      }
    ]
  },
  {
    content: {
      level: 'a-level',
      subject: 'physics',
      exam_board: 'aqa',
      topic_slug: 'quantum',
      subtopic_slug: 'spectra',
      title: 'Spectra | A-Level Physics',
      meta_description: 'Master emission and absorption spectra including spectroscopy. A-Level Physics practice questions with solutions.',
      introduction: `Spectra provide evidence for the quantum nature of atoms and are powerful tools for identifying elements and analyzing the composition of stars and other celestial objects. There are three main types of spectra: continuous, emission line, and absorption line spectra.

A continuous spectrum contains all wavelengths within a range, like a rainbow. It is produced by hot, dense objects such as the filament of an incandescent bulb or the photosphere of a star. The spectrum appears as a smooth band of colours with no gaps.

An emission line spectrum consists of bright lines at specific wavelengths against a dark background. It is produced when a hot, low-pressure gas emits light. Each element produces a unique pattern of lines - a spectral fingerprint - corresponding to the specific energy level transitions in its atoms.

An absorption line spectrum consists of dark lines at specific wavelengths in an otherwise continuous spectrum. It is produced when light from a continuous source passes through a cooler gas. The gas atoms absorb photons that match their energy level transitions, creating dark lines at those specific wavelengths.

The absorption lines appear at exactly the same wavelengths as the emission lines for the same element. This is because the same energy level transitions are involved - just in opposite directions. By analyzing stellar spectra, astronomers can determine the chemical composition, temperature, density, and even the velocity of stars and galaxies.`
    },
    questions: [
      {
        difficulty: 'easy',
        marks: 3,
        content: 'Describe the difference between an emission spectrum and an absorption spectrum.',
        solution: `**Emission spectrum:**
- Consists of bright coloured lines against a dark background [1 mark]
- Produced by a hot, low-pressure gas
- Electrons fall from higher to lower energy levels, emitting photons

**Absorption spectrum:**
- Consists of dark lines against a continuous (rainbow) background [1 mark]
- Produced when light passes through a cool gas
- Electrons absorb photons and jump to higher energy levels [1 mark]
- Missing wavelengths appear as dark lines

**Key similarity:** The lines appear at the same wavelengths for both types because they correspond to the same energy level transitions.`,
        display_order: 1
      },
      {
        difficulty: 'medium',
        marks: 4,
        content: 'Explain why each element produces a unique line spectrum that can be used to identify it.',
        solution: `**Why each element is unique:**

1. **Unique energy levels:**
- Each element has a different number of protons in its nucleus [1 mark]
- This creates a unique set of allowed energy levels for electrons
- The energy level spacing is different for each element [1 mark]

2. **Unique transitions:**
- Different energy levels means different possible transitions
- Each transition produces a specific wavelength: λ = hc/ΔE
- The pattern of wavelengths is unique to each element [1 mark]

3. **Spectral fingerprint:**
- The combination of lines at specific wavelengths
- Acts like a "fingerprint" for each element
- No two elements produce identical spectra [1 mark]

**Application:**
- Unknown substances can be identified by comparing their spectra to known spectra
- Works for elements in stars, forensic samples, etc.`,
        display_order: 2
      },
      {
        difficulty: 'hard',
        marks: 5,
        content: 'The spectrum of light from a distant star shows absorption lines from hydrogen that are redshifted compared to their laboratory wavelengths. Explain what causes the absorption lines and what the redshift tells us about the star.',
        solution: `**Cause of absorption lines:**

1. **Source of light:**
- The star's core produces a continuous spectrum (hot, dense gas) [1 mark]
- This light passes through the star's cooler outer atmosphere

2. **Absorption process:**
- Hydrogen atoms in the cooler atmosphere absorb photons [1 mark]
- Absorbed photons have energies matching hydrogen's energy level transitions
- Electrons jump to higher energy levels
- Those wavelengths are removed from the spectrum, creating dark lines [1 mark]

**What redshift tells us:**

1. **Doppler effect:**
- The wavelengths are longer (shifted towards red) than laboratory values [1 mark]
- This is caused by the Doppler effect
- The star is moving away from us

2. **Expansion of universe:**
- For distant objects, redshift indicates the universe is expanding
- Space itself is stretching, elongating the wavelengths
- Greater redshift = greater distance = greater recession velocity

3. **Measuring velocity:**
- The amount of redshift gives the recession velocity [1 mark]
- z = Δλ/λ ≈ v/c for low velocities
- Allows calculation of how fast the star is moving away`,
        display_order: 3
      }
    ]
  },
  {
    content: {
      level: 'a-level',
      subject: 'physics',
      exam_board: 'aqa',
      topic_slug: 'quantum',
      subtopic_slug: 'de-broglie-wavelength',
      title: 'De Broglie Wavelength | A-Level Physics',
      meta_description: 'Master de Broglie wavelength calculations and applications. A-Level Physics practice questions with solutions.',
      introduction: `In 1924, Louis de Broglie proposed that if light could exhibit particle properties (photons), then matter should exhibit wave properties. He suggested that any particle with momentum has an associated wavelength, now called the de Broglie wavelength: λ = h/p = h/mv.

This was a revolutionary idea because it suggested that all matter has wave-like properties, not just electromagnetic radiation. The wavelength is inversely proportional to momentum, so particles with larger mass or higher speed have shorter wavelengths. For everyday objects, the wavelength is immeasurably small.

De Broglie's hypothesis was confirmed experimentally in 1927 by Davisson and Germer, who observed electron diffraction from a nickel crystal. The diffraction pattern matched predictions based on the de Broglie wavelength, providing direct evidence that electrons behave as waves.

For electrons accelerated through a potential difference V, the de Broglie wavelength can be expressed as: λ = h/√(2meV), where m is electron mass, e is electron charge, and V is the accelerating voltage. Higher accelerating voltage means higher momentum and shorter wavelength.

The de Broglie wavelength is crucial in understanding electron microscopes. These can achieve much higher resolution than optical microscopes because electrons can be accelerated to have wavelengths much shorter than visible light. The resolving power is limited by diffraction, which depends on wavelength.`
    },
    questions: [
      {
        difficulty: 'easy',
        marks: 3,
        content: 'State the de Broglie equation and explain what each symbol represents.',
        solution: `**De Broglie equation:**
λ = h/p or λ = h/mv [1 mark]

**Symbols:**
- λ = de Broglie wavelength (in metres) [1 mark]
- h = Planck's constant (6.63 × 10⁻³⁴ J s)
- p = momentum of the particle (in kg m/s)
- m = mass of the particle (in kg)
- v = velocity of the particle (in m/s) [1 mark]

The equation shows that wavelength is inversely proportional to momentum.`,
        display_order: 1
      },
      {
        difficulty: 'medium',
        marks: 4,
        content: 'Compare the de Broglie wavelengths of an electron and a proton, each travelling at 1.0 × 10⁶ m/s. (m_e = 9.11 × 10⁻³¹ kg, m_p = 1.67 × 10⁻²⁷ kg, h = 6.63 × 10⁻³⁴ J s)',
        solution: `**Electron wavelength:**
λ_e = h/(m_e × v) [1 mark]
λ_e = (6.63 × 10⁻³⁴)/(9.11 × 10⁻³¹ × 1.0 × 10⁶)
λ_e = 7.28 × 10⁻¹⁰ m = 0.728 nm [1 mark]

**Proton wavelength:**
λ_p = h/(m_p × v)
λ_p = (6.63 × 10⁻³⁴)/(1.67 × 10⁻²⁷ × 1.0 × 10⁶)
λ_p = 3.97 × 10⁻¹³ m [1 mark]

**Comparison:**
λ_e/λ_p = m_p/m_e = 1830

The electron wavelength is about 1830 times larger than the proton wavelength. [1 mark]

This is because the proton has much greater mass, so at the same speed it has much greater momentum, resulting in a shorter wavelength.`,
        display_order: 2
      },
      {
        difficulty: 'hard',
        marks: 5,
        content: 'Derive an expression for the de Broglie wavelength of an electron accelerated from rest through a potential difference V, and use it to calculate the wavelength for V = 200 V.',
        solution: `**Derivation:**

**Step 1: Find kinetic energy**
KE = eV (electron gains kinetic energy equal to eV) [1 mark]

**Step 2: Express KE in terms of momentum**
KE = ½mv² = p²/(2m)
Therefore: p² = 2m × KE = 2meV
p = √(2meV) [1 mark]

**Step 3: Substitute into de Broglie equation**
λ = h/p = h/√(2meV) [1 mark]

**Calculation for V = 200 V:**
λ = (6.63 × 10⁻³⁴)/√(2 × 9.11 × 10⁻³¹ × 1.6 × 10⁻¹⁹ × 200)

λ = (6.63 × 10⁻³⁴)/√(5.83 × 10⁻⁴⁷) [1 mark]

λ = (6.63 × 10⁻³⁴)/(7.63 × 10⁻²⁴)

λ = 8.69 × 10⁻¹¹ m ≈ 0.087 nm [1 mark]

This wavelength is much shorter than visible light (~400-700 nm), explaining why electron microscopes can achieve much higher resolution.`,
        display_order: 3
      }
    ]
  }
];
