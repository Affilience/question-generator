import { SubtopicData } from '../bulk-seo-insert';

export const alevelPhysicsFields: SubtopicData[] = [
  {
    content: {
      level: 'a-level',
      subject: 'physics',
      exam_board: 'aqa',
      topic_slug: 'fields',
      subtopic_slug: 'gravitational-fields',
      title: 'Gravitational Fields | A-Level Physics',
      meta_description: 'Master gravitational fields including field strength and potential. A-Level Physics practice questions with solutions.',
      introduction: `A gravitational field is a region where a mass experiences a force. All objects with mass create gravitational fields around them. The field is a model that helps us understand how gravity acts at a distance without physical contact between objects.

Gravitational field strength (g) is defined as the gravitational force per unit mass at a point in the field: g = F/m, measured in N/kg (or equivalently m/s²). Near Earth's surface, g ≈ 9.81 N/kg. The field strength tells us the acceleration that a freely falling object would experience at that point.

For a point mass or spherical mass, the gravitational field strength at distance r from the centre is given by: g = GM/r², where G is the gravitational constant (6.67 × 10⁻¹¹ N m² kg⁻²) and M is the mass. This is Newton's law of gravitation expressed as field strength. The field follows an inverse square law - doubling the distance quarters the field strength.

Gravitational potential (V) at a point is the work done per unit mass in bringing a small test mass from infinity to that point: V = -GM/r. The potential is always negative because work is done by the field (not against it) when bringing mass from infinity. Zero potential is defined at infinity.

Gravitational potential energy is calculated as: E_p = mV = -GMm/r. This represents the energy stored in the gravitational field between two masses. The negative sign indicates that work must be done to separate the masses - they are bound together. Escape velocity is the minimum velocity needed for an object to escape to infinity.`
    },
    questions: [
      {
        difficulty: 'easy',
        marks: 3,
        content: 'Calculate the gravitational field strength at the surface of Mars. (Mass of Mars = 6.4 × 10²³ kg, Radius of Mars = 3.4 × 10⁶ m, G = 6.67 × 10⁻¹¹ N m² kg⁻²)',
        solution: `**Apply field strength equation:**
g = GM/r² [1 mark]

g = (6.67 × 10⁻¹¹ × 6.4 × 10²³)/(3.4 × 10⁶)² [1 mark]

g = (4.27 × 10¹³)/(1.16 × 10¹³)

g = 3.7 N/kg (or m/s²) [1 mark]`,
        display_order: 1
      },
      {
        difficulty: 'medium',
        marks: 4,
        content: 'A satellite orbits Earth at a height of 400 km above the surface. Calculate the gravitational potential at this height. (Mass of Earth = 6.0 × 10²⁴ kg, Radius of Earth = 6.4 × 10⁶ m, G = 6.67 × 10⁻¹¹ N m² kg⁻²)',
        solution: `**Calculate distance from Earth's centre:**
r = R_Earth + height
r = 6.4 × 10⁶ + 400 × 10³ [1 mark]
r = 6.8 × 10⁶ m

**Apply gravitational potential equation:**
V = -GM/r [1 mark]

V = -(6.67 × 10⁻¹¹ × 6.0 × 10²⁴)/(6.8 × 10⁶) [1 mark]

V = -(4.00 × 10¹⁴)/(6.8 × 10⁶)

V = -5.9 × 10⁷ J/kg [1 mark]`,
        display_order: 2
      },
      {
        difficulty: 'hard',
        marks: 5,
        content: 'Derive an expression for the escape velocity from a planet of mass M and radius R, and calculate the escape velocity from Earth.',
        solution: `**Derivation:**

At the surface, total energy = KE + PE
E = ½mv² + (-GMm/R) [1 mark]

For escape, total energy at infinity = 0
(Both KE and PE are zero at infinity with minimum escape speed)

Therefore: ½mv² - GMm/R = 0 [1 mark]

½v² = GM/R
v² = 2GM/R

**Escape velocity:**
v_escape = √(2GM/R) [1 mark]

**Calculate for Earth:**
M = 6.0 × 10²⁴ kg, R = 6.4 × 10⁶ m

v = √(2 × 6.67 × 10⁻¹¹ × 6.0 × 10²⁴ / 6.4 × 10⁶) [1 mark]

v = √(1.25 × 10⁸)

v = 1.12 × 10⁴ m/s = 11.2 km/s [1 mark]`,
        display_order: 3
      }
    ]
  },
  {
    content: {
      level: 'a-level',
      subject: 'physics',
      exam_board: 'aqa',
      topic_slug: 'fields',
      subtopic_slug: 'electric-fields',
      title: 'Electric Fields | A-Level Physics',
      meta_description: 'Master electric fields including Coulomb\'s law and field strength. A-Level Physics practice questions with solutions.',
      introduction: `An electric field is a region where a charged particle experiences a force. Electric fields are created by electric charges and exert forces on other charges within the field. Unlike gravitational fields (which are always attractive), electric fields can be either attractive or repulsive depending on the signs of the charges involved.

Electric field strength (E) is defined as the force per unit positive charge at a point: E = F/Q, measured in N/C (or equivalently V/m). The direction of the field is the direction of the force on a positive test charge. Field lines point away from positive charges and towards negative charges.

For a point charge Q, the electric field strength at distance r is given by Coulomb's law: E = kQ/r² = Q/(4πε₀r²), where k = 1/(4πε₀) = 8.99 × 10⁹ N m² C⁻². This has the same mathematical form as gravitational field strength, following an inverse square law.

Between parallel plates with potential difference V and separation d, there is a uniform electric field: E = V/d. This is very useful in experiments as it creates a region of constant field strength where charged particles experience constant acceleration, analogous to objects in a uniform gravitational field.

Electric potential (V) at a point is the work done per unit positive charge in bringing a small test charge from infinity to that point: V = kQ/r. Unlike gravitational potential, electric potential can be positive (near positive charges) or negative (near negative charges). Equipotential lines are perpendicular to field lines.`
    },
    questions: [
      {
        difficulty: 'easy',
        marks: 3,
        content: 'Two parallel plates are separated by 2.0 cm and have a potential difference of 500 V between them. Calculate the electric field strength between the plates and the force on an electron in this field. (e = 1.6 × 10⁻¹⁹ C)',
        solution: `**Calculate field strength:**
E = V/d [1 mark]
E = 500/(2.0 × 10⁻²)
E = 25,000 V/m (or N/C) [1 mark]

**Calculate force on electron:**
F = EQ = 25,000 × 1.6 × 10⁻¹⁹
F = 4.0 × 10⁻¹⁵ N [1 mark]

(Force direction is towards the positive plate, as electrons are negative)`,
        display_order: 1
      },
      {
        difficulty: 'medium',
        marks: 4,
        content: 'Calculate the electric field strength at a distance of 0.5 m from a point charge of +3.0 μC. Also calculate the electric potential at this point. (k = 8.99 × 10⁹ N m² C⁻²)',
        solution: `**Calculate field strength:**
E = kQ/r² [1 mark]
E = (8.99 × 10⁹ × 3.0 × 10⁻⁶)/(0.5)²
E = (2.70 × 10⁴)/(0.25) [1 mark]
E = 1.08 × 10⁵ N/C

**Calculate potential:**
V = kQ/r [1 mark]
V = (8.99 × 10⁹ × 3.0 × 10⁻⁶)/(0.5)
V = 5.4 × 10⁴ V [1 mark]`,
        display_order: 2
      },
      {
        difficulty: 'hard',
        marks: 5,
        content: 'Compare and contrast gravitational and electric fields, identifying three similarities and two differences.',
        solution: `**Three similarities:**

1. **Inverse square law:**
Both follow 1/r² relationship for point sources [1 mark]
- Gravitational: g = GM/r²
- Electric: E = kQ/r²

2. **Field representation:**
Both can be represented by field lines showing direction [1 mark]
Lines are closer where field is stronger

3. **Potential energy:**
Both have potential and potential energy defined in similar ways [1 mark]
Work done moving objects in field depends on potential difference

**Two differences:**

1. **Direction/nature of force:**
- Gravitational: always attractive
- Electric: can be attractive OR repulsive (like charges repel) [1 mark]

2. **Relative strength:**
- Electric force is enormously stronger (~10³⁶ times stronger for fundamental particles)
- But gravity dominates on large scales because matter is electrically neutral overall [1 mark]

Additional differences (accept any valid answer):
- Gravitational fields act on mass, electric fields act on charge
- Electric field can be shielded, gravitational cannot
- Electric potential can be positive or negative, gravitational is always negative`,
        display_order: 3
      }
    ]
  },
  {
    content: {
      level: 'a-level',
      subject: 'physics',
      exam_board: 'aqa',
      topic_slug: 'fields',
      subtopic_slug: 'magnetic-fields',
      title: 'Magnetic Fields | A-Level Physics',
      meta_description: 'Master magnetic fields including flux density and the motor effect. A-Level Physics practice questions with solutions.',
      introduction: `Magnetic fields are produced by moving charges (electric currents) and permanent magnets. Unlike electric fields which can exist around stationary charges, magnetic fields are fundamentally linked to the motion of charges. A magnetic field exerts forces on other moving charges and current-carrying conductors.

Magnetic flux density (B) describes the strength of a magnetic field, measured in tesla (T). One tesla is the magnetic flux density that produces a force of 1 N on a wire carrying 1 A of current perpendicular to the field over a length of 1 m. The Earth's magnetic field is about 50 μT; a strong laboratory magnet might be 1 T.

The force on a current-carrying conductor in a magnetic field is given by: F = BIL sin θ, where B is flux density, I is current, L is length of conductor in the field, and θ is the angle between the conductor and field. This is maximum when the conductor is perpendicular to the field (θ = 90°) and zero when parallel (θ = 0°).

The direction of the force is found using Fleming's left-hand rule: with the first finger pointing in the direction of the magnetic field (B), the second finger in the direction of conventional current (I), the thumb points in the direction of the force (F). This force is always perpendicular to both the field and the current.

For a single moving charge, the force is: F = BQv sin θ, where Q is the charge and v is its velocity. A charged particle moving perpendicular to a uniform magnetic field follows a circular path because the force is always perpendicular to the velocity. The radius of this circular path is r = mv/(BQ).`
    },
    questions: [
      {
        difficulty: 'easy',
        marks: 3,
        content: 'A wire of length 0.25 m carries a current of 3.0 A perpendicular to a magnetic field of flux density 0.4 T. Calculate the force on the wire.',
        solution: `**Apply F = BIL:**
Since wire is perpendicular to field, sin θ = 1 [1 mark]

F = BIL
F = 0.4 × 3.0 × 0.25 [1 mark]
F = 0.3 N [1 mark]`,
        display_order: 1
      },
      {
        difficulty: 'medium',
        marks: 4,
        content: 'An electron enters a uniform magnetic field of 2.0 mT at right angles to the field with a speed of 4.0 × 10⁶ m/s. Calculate the radius of its circular path. (m_e = 9.11 × 10⁻³¹ kg, e = 1.6 × 10⁻¹⁹ C)',
        solution: `**For circular motion in magnetic field:**
Magnetic force provides centripetal force
BQv = mv²/r [1 mark]

**Rearrange for radius:**
r = mv/(BQ) [1 mark]

**Substitute values:**
r = (9.11 × 10⁻³¹ × 4.0 × 10⁶)/(2.0 × 10⁻³ × 1.6 × 10⁻¹⁹) [1 mark]

r = (3.64 × 10⁻²⁴)/(3.2 × 10⁻²²)

r = 0.0114 m = 1.14 cm [1 mark]`,
        display_order: 2
      },
      {
        difficulty: 'hard',
        marks: 5,
        content: 'A proton and an electron both enter the same uniform magnetic field at right angles with the same kinetic energy. Compare the radii of their circular paths.',
        solution: `**Express radius in terms of kinetic energy:**
KE = ½mv², so v = √(2KE/m)

r = mv/(BQ) = m/(BQ) × √(2KE/m) [1 mark]

r = √(2mKE)/(BQ) [1 mark]

**For same KE and B:**
r ∝ √m/Q

**For proton and electron (same magnitude of charge):**
r_p/r_e = √(m_p/m_e) [1 mark]

**Calculate ratio:**
m_p/m_e = 1.67 × 10⁻²⁷/9.11 × 10⁻³¹ = 1833 [1 mark]

r_p/r_e = √1833 ≈ 43

**The proton's path has radius about 43 times larger than the electron's.** [1 mark]

This is because, despite having the same kinetic energy, the more massive proton moves more slowly and has greater momentum, requiring a larger radius for the same centripetal force.`,
        display_order: 3
      }
    ]
  },
  {
    content: {
      level: 'a-level',
      subject: 'physics',
      exam_board: 'aqa',
      topic_slug: 'fields',
      subtopic_slug: 'electromagnetic-induction',
      title: 'Electromagnetic Induction | A-Level Physics',
      meta_description: 'Master electromagnetic induction including Faraday\'s law and Lenz\'s law. A-Level Physics practice questions with solutions.',
      introduction: `Electromagnetic induction is the process of generating an electromotive force (EMF) in a conductor by changing the magnetic flux through it. This phenomenon, discovered by Faraday in 1831, is the basis for electrical generators, transformers, and many other technologies.

Magnetic flux (Φ) is defined as the product of magnetic flux density and the area perpendicular to the field: Φ = BA cos θ, where θ is the angle between the field and the normal to the area. Flux is measured in webers (Wb), where 1 Wb = 1 T m². Magnetic flux linkage is the total flux through a coil: NΦ = NBA cos θ.

Faraday's law states that the induced EMF equals the rate of change of magnetic flux linkage: ε = -NdΦ/dt. The magnitude of the induced EMF depends on how quickly the flux changes. Rapid changes produce larger EMFs; if flux is constant, no EMF is induced.

Lenz's law explains the negative sign in Faraday's law: the induced EMF (and hence current) acts in a direction to oppose the change producing it. This is a consequence of conservation of energy - if the induced current aided the change, it would create energy from nothing. Lenz's law determines the direction of induced currents.

When a conductor of length L moves with velocity v perpendicular to a magnetic field B, the induced EMF is: ε = BLv. This can be derived from Faraday's law by considering the rate of change of flux as the conductor sweeps out area. The free electrons in the conductor experience a magnetic force that creates a potential difference.`
    },
    questions: [
      {
        difficulty: 'easy',
        marks: 3,
        content: 'A coil with 200 turns has a cross-sectional area of 0.01 m². It is placed in a magnetic field of 0.5 T perpendicular to the plane of the coil. Calculate the magnetic flux linkage through the coil.',
        solution: `**Apply flux linkage equation:**
Flux linkage = NΦ = NBA [1 mark]

Since field is perpendicular to plane of coil, it is parallel to normal, so cos θ = 1

Flux linkage = 200 × 0.5 × 0.01 [1 mark]

Flux linkage = 1.0 Wb (or 1.0 Wb turns) [1 mark]`,
        display_order: 1
      },
      {
        difficulty: 'medium',
        marks: 4,
        content: 'A coil of 500 turns and area 0.02 m² is rotated in a uniform magnetic field of 0.1 T. The flux through the coil changes from maximum to zero in 0.05 s. Calculate the average EMF induced.',
        solution: `**Calculate maximum flux linkage:**
Maximum occurs when coil is perpendicular to field
(NΦ)_max = NBA = 500 × 0.1 × 0.02 = 1.0 Wb [1 mark]

**Calculate change in flux linkage:**
ΔNΦ = 1.0 - 0 = 1.0 Wb [1 mark]

**Apply Faraday's law:**
ε = -NdΦ/dt = -ΔNΦ/Δt [1 mark]

ε = -1.0/0.05

|ε| = 20 V [1 mark]`,
        display_order: 2
      },
      {
        difficulty: 'hard',
        marks: 5,
        content: 'A metal rod of length 0.5 m moves at 4 m/s perpendicular to both its length and a magnetic field of 0.2 T. The rod is part of a circuit with total resistance 2 Ω.\n\n(a) Calculate the induced EMF\n(b) Calculate the current in the circuit\n(c) Calculate the force required to maintain constant velocity',
        solution: `**(a) Calculate induced EMF:**
ε = BLv [1 mark]
ε = 0.2 × 0.5 × 4
ε = 0.4 V [1 mark]

**(b) Calculate current:**
I = ε/R = 0.4/2
I = 0.2 A [1 mark]

**(c) Calculate force required:**
The induced current creates a force opposing motion (Lenz's law)
F = BIL [1 mark]
F = 0.2 × 0.2 × 0.5
F = 0.02 N [1 mark]

This force must be overcome to maintain constant velocity.

**Energy check:**
Power input = Fv = 0.02 × 4 = 0.08 W
Power dissipated = I²R = 0.2² × 2 = 0.08 W ✓
Energy is conserved.`,
        display_order: 3
      }
    ]
  },
  {
    content: {
      level: 'a-level',
      subject: 'physics',
      exam_board: 'aqa',
      topic_slug: 'fields',
      subtopic_slug: 'orbits',
      title: 'Orbital Motion | A-Level Physics',
      meta_description: 'Master orbital motion including satellites and Kepler\'s laws. A-Level Physics practice questions with solutions.',
      introduction: `Orbital motion occurs when an object moves in a closed path around another object due to gravitational attraction. Satellites, planets, and moons all exhibit orbital motion. Understanding orbits is crucial for space exploration, satellite communications, and GPS systems.

For a circular orbit, the gravitational force provides the centripetal force needed to keep the object in its curved path: GMm/r² = mv²/r. This can be rearranged to find orbital velocity: v = √(GM/r). The orbital velocity depends only on the mass of the central body and the orbital radius, not on the mass of the orbiting object.

The orbital period T is the time for one complete orbit: T = 2πr/v. Combining with the velocity equation gives: T² = 4π²r³/(GM). This is Kepler's third law - the square of the orbital period is proportional to the cube of the orbital radius. For satellites orbiting Earth at different heights, T² ∝ r³.

Geostationary orbits are special circular orbits where the satellite has a period of exactly 24 hours and orbits above the equator in the same direction as Earth's rotation. The satellite appears stationary relative to Earth's surface, making it ideal for communications satellites. The geostationary orbital radius is about 42,000 km from Earth's centre.

The total energy of an orbiting object is the sum of kinetic and potential energy: E = KE + PE = ½mv² + (-GMm/r) = -GMm/(2r). This is negative, indicating the object is bound in orbit. Moving to a higher orbit increases total energy (becomes less negative), requiring energy input.`
    },
    questions: [
      {
        difficulty: 'easy',
        marks: 3,
        content: 'A satellite orbits Earth at a height of 600 km above the surface. Calculate its orbital velocity. (Mass of Earth = 6.0 × 10²⁴ kg, Radius of Earth = 6.4 × 10⁶ m, G = 6.67 × 10⁻¹¹ N m² kg⁻²)',
        solution: `**Calculate orbital radius:**
r = R_Earth + height = 6.4 × 10⁶ + 600 × 10³ [1 mark]
r = 7.0 × 10⁶ m

**Apply orbital velocity equation:**
v = √(GM/r) [1 mark]
v = √(6.67 × 10⁻¹¹ × 6.0 × 10²⁴ / 7.0 × 10⁶)
v = √(5.72 × 10⁷)
v = 7560 m/s ≈ 7.6 km/s [1 mark]`,
        display_order: 1
      },
      {
        difficulty: 'medium',
        marks: 4,
        content: 'Calculate the radius of a geostationary orbit around Earth. (Mass of Earth = 6.0 × 10²⁴ kg, G = 6.67 × 10⁻¹¹ N m² kg⁻²)',
        solution: `**Geostationary period:**
T = 24 hours = 24 × 3600 = 86400 s [1 mark]

**Apply Kepler's third law:**
T² = 4π²r³/(GM) [1 mark]

**Rearrange for r:**
r³ = GMT²/(4π²)
r³ = (6.67 × 10⁻¹¹ × 6.0 × 10²⁴ × 86400²)/(4π²) [1 mark]

r³ = (2.99 × 10²³)/(39.5)
r³ = 7.57 × 10²¹

r = 4.23 × 10⁷ m ≈ 42,300 km [1 mark]

(Height above surface = 42,300 - 6,400 = 35,900 km)`,
        display_order: 2
      },
      {
        difficulty: 'hard',
        marks: 5,
        content: 'A satellite in a circular orbit at radius r₁ needs to be moved to a higher circular orbit at radius r₂. Derive an expression for the energy required for this manoeuvre in terms of M (Earth\'s mass), m (satellite mass), r₁, and r₂.',
        solution: `**Total energy in orbit:**
For circular orbit: E = -GMm/(2r) [1 mark]

**Energy in initial orbit:**
E₁ = -GMm/(2r₁) [1 mark]

**Energy in final orbit:**
E₂ = -GMm/(2r₂)

**Energy required:**
ΔE = E₂ - E₁
ΔE = -GMm/(2r₂) - (-GMm/(2r₁)) [1 mark]
ΔE = -GMm/(2r₂) + GMm/(2r₁)

**Simplify:**
ΔE = GMm/2 × (1/r₁ - 1/r₂) [1 mark]

Or equivalently:
ΔE = GMm(r₂ - r₁)/(2r₁r₂)

**Physical interpretation:**
Since r₂ > r₁, ΔE is positive
Energy must be added to move to a higher orbit [1 mark]
The satellite gains potential energy and loses kinetic energy
Net energy is increased (becomes less negative)`,
        display_order: 3
      }
    ]
  }
];
