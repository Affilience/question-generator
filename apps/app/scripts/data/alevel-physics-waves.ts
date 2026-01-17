import { SubtopicData } from '../bulk-seo-insert';

export const alevelPhysicsWaves: SubtopicData[] = [
  {
    content: {
      level: 'a-level',
      subject: 'physics',
      exam_board: 'aqa',
      topic_slug: 'waves',
      subtopic_slug: 'wave-properties',
      title: 'Wave Properties | A-Level Physics',
      meta_description: 'Master wave properties including amplitude, wavelength and frequency. A-Level Physics practice questions with solutions.',
      introduction: `Waves are disturbances that transfer energy from one place to another without transferring matter. Understanding wave properties is fundamental to many areas of physics, from sound and light to quantum mechanics and cosmology.

All waves can be described by four basic properties: amplitude, wavelength, frequency, and wave speed. Amplitude is the maximum displacement from the equilibrium position and relates to the energy carried by the wave. Wavelength (λ) is the distance between two consecutive points in phase (like crest to crest). Frequency (f) is the number of complete oscillations per second, measured in hertz (Hz).

These properties are related by the wave equation: v = fλ, where v is wave speed. This equation applies to all types of waves and is fundamental to wave physics. For a given medium, wave speed is usually constant, so frequency and wavelength are inversely proportional - higher frequency means shorter wavelength.

The period (T) of a wave is the time for one complete oscillation and is the reciprocal of frequency: T = 1/f. This can also be expressed as f = 1/T. Combined with the wave equation, we get v = λ/T, showing that wave speed equals wavelength divided by period.

Phase describes the position in the cycle of a wave. Two points are in phase if they have the same displacement and velocity - they are the same fraction through their cycle. Phase difference is measured in degrees (0° to 360°) or radians (0 to 2π). Points that are 180° (π radians) out of phase are in antiphase - when one is at maximum positive displacement, the other is at maximum negative.`
    },
    questions: [
      {
        difficulty: 'easy',
        marks: 3,
        content: 'A wave has a frequency of 500 Hz and a wavelength of 0.68 m. Calculate the wave speed and the period of the wave.',
        solution: `**Calculate wave speed:**
Using v = fλ [1 mark]
v = 500 × 0.68
v = 340 m/s [1 mark]

**Calculate period:**
Using T = 1/f
T = 1/500
T = 0.002 s = 2 ms [1 mark]`,
        display_order: 1
      },
      {
        difficulty: 'medium',
        marks: 4,
        content: 'Two points on a wave are separated by a distance of 0.75λ. Calculate the phase difference between these points in (a) degrees and (b) radians.',
        solution: `**Understanding the relationship:**
One complete wavelength (λ) corresponds to:
- 360° or 2π radians of phase difference [1 mark]

**Distance in terms of wavelength:**
Points are 0.75λ apart

**(a) Phase difference in degrees:**
Phase difference = 0.75 × 360°
Phase difference = 270° [1 mark]

**(b) Phase difference in radians:**
Phase difference = 0.75 × 2π
Phase difference = 1.5π rad (or 3π/2 rad) [1 mark]
Phase difference ≈ 4.71 rad [1 mark]`,
        display_order: 2
      },
      {
        difficulty: 'hard',
        marks: 5,
        content: 'A transverse wave travelling along a string has an amplitude of 0.04 m, wavelength of 1.2 m, and frequency of 25 Hz. Write an equation for the displacement y of a particle at position x and time t, assuming y = 0 at x = 0 when t = 0.',
        solution: `**Identify the wave equation form:**
y = A sin(ωt - kx) or y = A sin(2πft - 2πx/λ) [1 mark]

**Calculate angular frequency ω:**
ω = 2πf = 2π × 25 = 50π rad/s [1 mark]

**Calculate wave number k:**
k = 2π/λ = 2π/1.2 = 5π/3 rad/m ≈ 5.24 rad/m [1 mark]

**Substitute values:**
Given A = 0.04 m

y = 0.04 sin(50πt - 5.24x) [1 mark]

Or equivalently:
y = 0.04 sin(2π × 25 × t - 2πx/1.2)
y = 0.04 sin(50πt - 5πx/3) [1 mark]

**Units check:**
- y is in metres
- t is in seconds
- x is in metres
- Arguments of sin are dimensionless (radians)`,
        display_order: 3
      }
    ]
  },
  {
    content: {
      level: 'a-level',
      subject: 'physics',
      exam_board: 'aqa',
      topic_slug: 'waves',
      subtopic_slug: 'superposition',
      title: 'Superposition of Waves | A-Level Physics',
      meta_description: 'Master superposition including constructive and destructive interference. A-Level Physics practice questions with solutions.',
      introduction: `The principle of superposition states that when two or more waves meet at a point, the resultant displacement is the vector sum of the individual displacements. This principle applies to all types of waves and leads to the phenomena of interference, standing waves, and beats.

When waves superpose, they can interfere constructively or destructively. Constructive interference occurs when waves are in phase (phase difference of 0° or multiples of 360°) - the displacements add up to give a larger resultant amplitude. Destructive interference occurs when waves are in antiphase (phase difference of 180°) - the displacements cancel out, potentially to zero if amplitudes are equal.

For two coherent sources (same frequency and constant phase relationship), interference patterns form. At points where the path difference is a whole number of wavelengths (nλ), constructive interference occurs. At points where path difference is (n + ½)λ, destructive interference occurs. This is the basis of experiments like Young's double slit.

Superposition also explains standing waves, formed when two waves of the same frequency travel in opposite directions. Standing waves have nodes (points of zero amplitude) and antinodes (points of maximum amplitude) at fixed positions. The distance between adjacent nodes (or antinodes) is half a wavelength.

Beats occur when two waves of slightly different frequencies superpose. The resultant wave has a frequency equal to the average of the two frequencies, with an amplitude that varies at a rate equal to the difference in frequencies. The beat frequency equals |f₁ - f₂|, and this phenomenon is used in tuning musical instruments.`
    },
    questions: [
      {
        difficulty: 'easy',
        marks: 3,
        content: 'State the principle of superposition and explain the difference between constructive and destructive interference.',
        solution: `**Principle of superposition:**
When two or more waves meet at a point, the resultant displacement is the vector sum of the individual displacements. [1 mark]

**Constructive interference:**
- Occurs when waves are in phase (phase difference = 0, 2π, etc.)
- Displacements add together
- Resultant amplitude is maximum [1 mark]

**Destructive interference:**
- Occurs when waves are in antiphase (phase difference = π, 3π, etc.)
- Displacements cancel out
- Resultant amplitude is minimum (zero if equal amplitudes) [1 mark]`,
        display_order: 1
      },
      {
        difficulty: 'medium',
        marks: 4,
        content: 'Two coherent sources emit waves of wavelength 0.03 m. At a point P, the path difference from the two sources is 0.105 m. Determine whether constructive or destructive interference occurs at P.',
        solution: `**Calculate path difference in wavelengths:**
Path difference = 0.105 m
Wavelength λ = 0.03 m

Number of wavelengths = 0.105/0.03 = 3.5λ [1 mark]

**Determine type of interference:**
Path difference = 3.5λ = (3 + ½)λ [1 mark]

This is an odd number of half-wavelengths.

**Condition for destructive interference:**
Path difference = (n + ½)λ where n is an integer [1 mark]

Here n = 3, so path difference = 3.5λ

**Conclusion:**
Destructive interference occurs at point P [1 mark]
(The waves arrive in antiphase and cancel out)`,
        display_order: 2
      },
      {
        difficulty: 'hard',
        marks: 5,
        content: 'Two sound waves with frequencies 440 Hz and 444 Hz are played simultaneously. Describe the sound that would be heard and calculate relevant quantities.',
        solution: `**What is heard:**
The listener hears a sound at the average frequency with amplitude that varies periodically - this is called beats. [1 mark]

**Calculate the perceived frequency:**
Frequency heard = (f₁ + f₂)/2 = (440 + 444)/2 = 442 Hz [1 mark]

This is the frequency of the sound wave perceived.

**Calculate the beat frequency:**
Beat frequency = |f₁ - f₂| = |440 - 444| = 4 Hz [1 mark]

This means the loudness varies 4 times per second.

**Calculate the beat period:**
Beat period = 1/beat frequency = 1/4 = 0.25 s [1 mark]

The time between consecutive maxima (or minima) in loudness is 0.25 s.

**Physical explanation:**
The two waves go in and out of phase with each other. When in phase, constructive interference gives maximum amplitude (loud). When in antiphase, destructive interference gives minimum amplitude (quiet). This cycling between loud and quiet creates the beats. [1 mark]`,
        display_order: 3
      }
    ]
  },
  {
    content: {
      level: 'a-level',
      subject: 'physics',
      exam_board: 'aqa',
      topic_slug: 'waves',
      subtopic_slug: 'standing-waves',
      title: 'Standing Waves | A-Level Physics',
      meta_description: 'Master standing waves including nodes, antinodes and harmonics. A-Level Physics practice questions with solutions.',
      introduction: `Standing waves (also called stationary waves) are formed when two waves of the same frequency and amplitude travel in opposite directions and superpose. Unlike progressive waves, standing waves do not transfer energy - energy is stored in the wave but not transported along it.

Standing waves have characteristic features: nodes are points where the amplitude is always zero (complete destructive interference), while antinodes are points of maximum amplitude (alternating constructive interference). The distance between adjacent nodes (or between adjacent antinodes) is λ/2.

Standing waves on strings are formed by reflection at the ends. For a string fixed at both ends, the ends must be nodes. The fundamental frequency (first harmonic) has just one antinode in the middle. The second harmonic has two antinodes, the third has three, and so on. The frequencies of harmonics are multiples of the fundamental: f₁, 2f₁, 3f₁...

For the fundamental mode of a string of length L, the wavelength is 2L (half a wavelength fits in the string). Using v = fλ, the fundamental frequency is f = v/2L. The wave speed v depends on the tension T and mass per unit length μ: v = √(T/μ).

Standing waves also form in pipes. A closed pipe (one end closed) has a node at the closed end and an antinode at the open end, producing only odd harmonics (f, 3f, 5f...). An open pipe (both ends open) has antinodes at both ends and produces all harmonics (f, 2f, 3f...).`
    },
    questions: [
      {
        difficulty: 'easy',
        marks: 3,
        content: 'A standing wave is formed on a string of length 1.2 m fixed at both ends. The wave has 3 antinodes. Calculate the wavelength of the wave.',
        solution: `**Identify the harmonic:**
3 antinodes means this is the third harmonic [1 mark]

**Relationship between length and wavelength:**
For a string fixed at both ends with n antinodes:
L = nλ/2

Or: Number of half-wavelengths = number of antinodes

**Calculate wavelength:**
3 half-wavelengths fit in 1.2 m
3(λ/2) = 1.2 m [1 mark]
λ = 1.2 × 2/3
λ = 0.8 m [1 mark]`,
        display_order: 1
      },
      {
        difficulty: 'medium',
        marks: 4,
        content: 'A guitar string has a length of 0.65 m, tension of 70 N, and mass per unit length of 1.2 × 10⁻³ kg/m. Calculate the frequency of the fundamental note.',
        solution: `**Step 1: Calculate wave speed**
Using v = √(T/μ) [1 mark]
v = √(70 / 1.2 × 10⁻³)
v = √58333
v = 241.5 m/s [1 mark]

**Step 2: Find wavelength for fundamental**
For fundamental, L = λ/2
λ = 2L = 2 × 0.65 = 1.3 m [1 mark]

**Step 3: Calculate frequency**
Using f = v/λ
f = 241.5/1.3
f = 186 Hz [1 mark]`,
        display_order: 2
      },
      {
        difficulty: 'hard',
        marks: 5,
        content: 'A closed pipe of length 0.85 m produces a standing wave at its third harmonic. Take the speed of sound as 340 m/s.\n\n(a) Sketch the standing wave pattern showing nodes and antinodes.\n(b) Calculate the frequency of this harmonic.',
        solution: `**(a) Sketch description:**
A closed pipe has:
- Node at the closed end
- Antinode at the open end [1 mark]

Third harmonic of a closed pipe:
- Contains 3 quarter-wavelengths (3λ/4)
- Has 2 nodes (including closed end) and 2 antinodes [1 mark]
- Pattern: N-A-N-A where N = node, A = antinode

**Note:** For closed pipes, only odd harmonics exist (1st, 3rd, 5th...)
The "third harmonic" is actually the 3rd mode (corresponding to 3λ/4).

**(b) Calculate frequency:**

**Step 1: Find wavelength**
For closed pipe, third harmonic: L = 3λ/4 [1 mark]
0.85 = 3λ/4
λ = (4 × 0.85)/3
λ = 1.133 m [1 mark]

**Step 2: Calculate frequency**
f = v/λ = 340/1.133
f = 300 Hz [1 mark]

**Alternative approach:**
Fundamental of closed pipe: f₁ = v/4L = 340/(4 × 0.85) = 100 Hz
Third harmonic: f₃ = 3f₁ = 300 Hz`,
        display_order: 3
      }
    ]
  },
  {
    content: {
      level: 'a-level',
      subject: 'physics',
      exam_board: 'aqa',
      topic_slug: 'waves',
      subtopic_slug: 'diffraction',
      title: 'Diffraction | A-Level Physics',
      meta_description: 'Master diffraction including single slit and diffraction gratings. A-Level Physics practice questions with solutions.',
      introduction: `Diffraction is the spreading of waves when they pass through a gap or around an obstacle. It occurs with all types of waves but is most significant when the gap or obstacle size is comparable to the wavelength. Diffraction is evidence that light behaves as a wave.

When light passes through a single slit, it produces a diffraction pattern on a screen: a bright central maximum with dimmer secondary maxima on either side, separated by dark minima. The width of the central maximum depends on the wavelength and slit width. Narrower slits cause more spreading (wider central maximum).

For single slit diffraction, the angle θ to the first minimum is given by: sin θ = λ/a, where λ is the wavelength and a is the slit width. For small angles, this approximates to θ ≈ λ/a (in radians). The central maximum is twice as wide as the secondary maxima.

Diffraction gratings have many equally spaced slits. They produce sharp, bright maxima at specific angles determined by the grating equation: d sin θ = nλ, where d is the slit spacing, n is the order number (0, 1, 2...), and θ is the angle from the central axis. The maximum order depends on the wavelength and grating spacing.

Diffraction gratings are used in spectroscopy to separate light into its component wavelengths. Different wavelengths diffract to different angles, allowing precise measurement of wavelengths. The resolving power of a grating (its ability to separate close wavelengths) increases with the number of slits and the order of diffraction used.`
    },
    questions: [
      {
        difficulty: 'easy',
        marks: 3,
        content: 'Light of wavelength 600 nm passes through a diffraction grating with 500 lines per mm. Calculate the angle for the second order maximum.',
        solution: `**Calculate slit spacing:**
Lines per mm = 500
Slit spacing d = 1/500 mm = 0.002 mm = 2 × 10⁻⁶ m [1 mark]

**Apply grating equation:**
d sin θ = nλ
2 × 10⁻⁶ × sin θ = 2 × 600 × 10⁻⁹ [1 mark]
sin θ = (2 × 600 × 10⁻⁹)/(2 × 10⁻⁶)
sin θ = 0.6
θ = sin⁻¹(0.6) = 36.9° [1 mark]`,
        display_order: 1
      },
      {
        difficulty: 'medium',
        marks: 4,
        content: 'A single slit of width 0.1 mm is illuminated with light of wavelength 500 nm. Calculate the width of the central maximum on a screen placed 2.0 m from the slit.',
        solution: `**Find angle to first minimum:**
Using sin θ = λ/a [1 mark]
sin θ = (500 × 10⁻⁹)/(0.1 × 10⁻³)
sin θ = 0.005
θ ≈ 0.005 rad (small angle approximation) [1 mark]

**Calculate half-width of central maximum:**
Half-width y = D tan θ ≈ Dθ (for small angles)
y = 2.0 × 0.005 = 0.01 m = 10 mm [1 mark]

**Width of central maximum:**
Full width = 2y = 20 mm [1 mark]

(The central maximum extends from the first minimum on one side to the first minimum on the other side)`,
        display_order: 2
      },
      {
        difficulty: 'hard',
        marks: 5,
        content: 'A diffraction grating with 600 lines per mm is used to observe the visible spectrum (400-700 nm). Determine the maximum order of diffraction that is visible and explain why higher orders cannot be seen.',
        solution: `**Calculate slit spacing:**
d = 1/600 mm = 1.67 × 10⁻⁶ m [1 mark]

**Maximum order condition:**
From d sin θ = nλ, maximum n occurs when sin θ = 1 (θ = 90°)
n_max = d/λ

**For the shortest visible wavelength (400 nm):**
n_max = (1.67 × 10⁻⁶)/(400 × 10⁻⁹) = 4.17
Maximum order = 4 (must be integer) [1 mark]

**For the longest visible wavelength (700 nm):**
n_max = (1.67 × 10⁻⁶)/(700 × 10⁻⁹) = 2.38
Maximum order = 2 [1 mark]

**Conclusion:**
- For violet light (400 nm): orders 0, 1, 2, 3, 4 are visible
- For red light (700 nm): only orders 0, 1, 2 are visible
- The complete visible spectrum is seen in orders 1 and 2 [1 mark]

**Why higher orders cannot be seen:**
When d sin θ = nλ gives sin θ > 1, there is no real angle satisfying this equation. The diffracted beam would need to travel at an angle greater than 90° from the grating normal, which is physically impossible. [1 mark]`,
        display_order: 3
      }
    ]
  },
  {
    content: {
      level: 'a-level',
      subject: 'physics',
      exam_board: 'aqa',
      topic_slug: 'waves',
      subtopic_slug: 'refraction',
      title: 'Refraction | A-Level Physics',
      meta_description: 'Master refraction including Snell\'s law and total internal reflection. A-Level Physics practice questions with solutions.',
      introduction: `Refraction is the change in direction of a wave as it passes from one medium to another due to a change in wave speed. When light enters a denser medium (higher refractive index), it slows down and bends towards the normal. When entering a less dense medium, it speeds up and bends away from the normal.

The refractive index (n) of a material is defined as the ratio of the speed of light in a vacuum to the speed of light in that material: n = c/v. For air, n ≈ 1.00. For glass, n ≈ 1.5. For water, n ≈ 1.33. A higher refractive index means slower light speed.

Snell's law relates the angles of incidence and refraction to the refractive indices: n₁ sin θ₁ = n₂ sin θ₂. When light goes from a medium with lower n to higher n, it bends towards the normal. When going from higher n to lower n, it bends away from the normal.

Total internal reflection (TIR) occurs when light travels from a denser to a less dense medium and the angle of incidence exceeds the critical angle. At the critical angle, the refracted ray travels along the boundary (angle of refraction = 90°). Beyond this angle, all light is reflected back into the denser medium.

The critical angle can be calculated using: sin θc = n₂/n₁ (where n₁ > n₂). TIR is exploited in optical fibres for telecommunications, where light bounces along the fibre core without escaping. It's also used in prisms and diamond cutting to maximise light reflection.`
    },
    questions: [
      {
        difficulty: 'easy',
        marks: 3,
        content: 'Light travels from air (n = 1.00) into glass (n = 1.52) at an angle of incidence of 40°. Calculate the angle of refraction.',
        solution: `**Apply Snell's law:**
n₁ sin θ₁ = n₂ sin θ₂ [1 mark]

1.00 × sin 40° = 1.52 × sin θ₂
sin θ₂ = sin 40°/1.52
sin θ₂ = 0.643/1.52 [1 mark]
sin θ₂ = 0.423
θ₂ = sin⁻¹(0.423)
θ₂ = 25.0° [1 mark]`,
        display_order: 1
      },
      {
        difficulty: 'medium',
        marks: 4,
        content: 'Calculate the critical angle for light travelling from glass (n = 1.50) to air (n = 1.00). Explain what happens when light hits the boundary at an angle greater than this.',
        solution: `**Calculate critical angle:**
At critical angle, angle of refraction = 90° [1 mark]
sin θc = n₂/n₁ = 1.00/1.50
sin θc = 0.667
θc = sin⁻¹(0.667)
θc = 41.8° [1 mark]

**What happens at angles greater than critical angle:**
- No refraction occurs [1 mark]
- All light is reflected back into the glass
- This is called total internal reflection (TIR)
- The boundary acts like a perfect mirror [1 mark]`,
        display_order: 2
      },
      {
        difficulty: 'hard',
        marks: 5,
        content: 'An optical fibre has a core with refractive index 1.52 and cladding with refractive index 1.48. Calculate the maximum angle to the axis of the fibre at which light can enter the core and still undergo total internal reflection at the core-cladding boundary.',
        solution: `**Step 1: Find critical angle at core-cladding boundary**
sin θc = n_cladding/n_core [1 mark]
sin θc = 1.48/1.52 = 0.9737
θc = 76.9° (from normal to boundary) [1 mark]

**Step 2: Find angle of ray to fibre axis**
The angle to the axis = 90° - θc
Angle in core = 90° - 76.9° = 13.1° [1 mark]

**Step 3: Apply Snell's law at entry to fibre**
Light enters from air (n = 1.00) into core (n = 1.52)
n_air × sin θ_entry = n_core × sin 13.1°

sin θ_entry = 1.52 × sin 13.1°/1.00 [1 mark]
sin θ_entry = 1.52 × 0.227
sin θ_entry = 0.345

θ_entry = sin⁻¹(0.345) = 20.2° [1 mark]

**Answer:** The maximum angle of incidence at the fibre entrance is approximately 20° to the fibre axis.

This angle is called the acceptance angle, and it determines the numerical aperture of the fibre.`,
        display_order: 3
      }
    ]
  },
  {
    content: {
      level: 'a-level',
      subject: 'physics',
      exam_board: 'aqa',
      topic_slug: 'waves',
      subtopic_slug: 'interference',
      title: 'Interference | A-Level Physics',
      meta_description: 'Master interference including Young\'s double slit experiment. A-Level Physics practice questions with solutions.',
      introduction: `Interference occurs when two or more coherent waves superpose, creating a pattern of constructive and destructive interference. For interference to be observable, the sources must be coherent - they must have the same frequency and a constant phase relationship.

Young's double slit experiment demonstrates the wave nature of light. Light from a single source passes through two narrow slits, creating two coherent sources. The light from these slits interferes, producing a pattern of bright and dark fringes on a screen. Bright fringes (maxima) occur where path difference is a whole number of wavelengths.

The double slit equation gives the positions of maxima: d sin θ = nλ, where d is the slit separation, θ is the angle from the central maximum, n is the order number, and λ is the wavelength. For small angles, sin θ ≈ tan θ = y/D, where y is the distance from the central maximum and D is the screen distance.

The fringe spacing w (distance between adjacent bright fringes) is given by: w = λD/d. This equation shows that fringe spacing increases with wavelength and screen distance, and decreases with slit separation. It allows precise measurement of light wavelength.

For observable interference, the path difference must be less than the coherence length of the light source. Lasers have long coherence lengths and produce clear interference patterns. White light produces coloured fringes because different wavelengths have maxima at different positions.`
    },
    questions: [
      {
        difficulty: 'easy',
        marks: 3,
        content: 'In Young\'s double slit experiment, the slit separation is 0.5 mm, the screen distance is 1.5 m, and the wavelength is 600 nm. Calculate the fringe spacing.',
        solution: `**Apply fringe spacing equation:**
w = λD/d [1 mark]

**Convert units:**
λ = 600 nm = 600 × 10⁻⁹ m
d = 0.5 mm = 0.5 × 10⁻³ m
D = 1.5 m

**Calculate:**
w = (600 × 10⁻⁹ × 1.5)/(0.5 × 10⁻³) [1 mark]
w = (9 × 10⁻⁷)/(5 × 10⁻⁴)
w = 1.8 × 10⁻³ m = 1.8 mm [1 mark]`,
        display_order: 1
      },
      {
        difficulty: 'medium',
        marks: 4,
        content: 'Explain why two separate light bulbs cannot produce an observable interference pattern, but a laser can produce interference after passing through a double slit.',
        solution: `**Why two light bulbs cannot produce interference:**

1. **Incoherence:**
- Two separate light bulbs are independent sources [1 mark]
- They emit light with random, fluctuating phase differences
- No constant phase relationship exists between them [1 mark]

2. **Result:**
- The interference pattern changes so rapidly it averages out
- No stable pattern is observed

**Why a laser can produce interference:**

1. **Coherence from single source:**
- Laser light passing through double slit creates two coherent sources
- Both originate from the same laser beam [1 mark]
- They have identical frequency and constant phase relationship

2. **Result:**
- Path difference at any point is constant
- Stable interference pattern is observed [1 mark]
- Bright and dark fringes remain in fixed positions`,
        display_order: 2
      },
      {
        difficulty: 'hard',
        marks: 5,
        content: 'In a double slit experiment, the third bright fringe is observed at an angle of 2.5° from the central maximum. If the slit separation is 0.3 mm, calculate:\n(a) the wavelength of light used\n(b) the maximum order of bright fringe observable',
        solution: `**(a) Calculate wavelength:**

Using d sin θ = nλ [1 mark]

For third bright fringe, n = 3:
0.3 × 10⁻³ × sin 2.5° = 3 × λ [1 mark]
0.3 × 10⁻³ × 0.0436 = 3λ
1.308 × 10⁻⁵ = 3λ
λ = 4.36 × 10⁻⁶ m = 436 nm [1 mark]

**(b) Calculate maximum order:**

Maximum order occurs when sin θ = 1 (θ = 90°)
d sin θ = nλ
d = n_max × λ [1 mark]
n_max = d/λ = (0.3 × 10⁻³)/(436 × 10⁻⁹)
n_max = 688

**Maximum observable order = 688** [1 mark]

(In practice, this many orders would not be visible as the intensity decreases significantly at higher orders due to the single-slit diffraction envelope)`,
        display_order: 3
      }
    ]
  }
];
