import { SubtopicData } from '../bulk-seo-insert';

export const alevelPhysicsMechanics: SubtopicData[] = [
  {
    content: {
      level: 'a-level',
      subject: 'physics',
      exam_board: 'aqa',
      topic_slug: 'mechanics',
      subtopic_slug: 'suvat-equations',
      title: 'SUVAT Equations | A-Level Physics',
      meta_description: 'Master SUVAT equations for uniformly accelerated motion. A-Level Physics practice questions with step-by-step solutions.',
      introduction: `The SUVAT equations describe motion with uniform (constant) acceleration. These five variables—displacement (s), initial velocity (u), final velocity (v), acceleration (a), and time (t)—are connected by four key equations that form the foundation of kinematics.

The four SUVAT equations are: v = u + at, s = ut + ½at², v² = u² + 2as, and s = ½(u + v)t. Each equation connects four of the five variables, so knowing any three allows you to find the other two. Choosing the right equation depends on which variable is not needed.

These equations only apply when acceleration is constant. For projectile motion, vertical and horizontal components are treated separately—horizontal motion has zero acceleration while vertical motion has acceleration g (9.81 m/s²). The equations can be applied to each direction independently.

When using SUVAT equations, establish a clear sign convention. Usually, up or right is positive and down or left is negative. Be especially careful with acceleration: for objects slowing down, acceleration is negative; for objects in free fall, g is negative if upward is positive.`
    },
    questions: [
      {
        difficulty: 'easy',
        marks: 3,
        content: 'A car accelerates uniformly from rest to 25 m/s in 10 seconds. Calculate the acceleration and the distance travelled.',
        solution: `**Given:** u = 0 m/s (rest), v = 25 m/s, t = 10 s

**Finding acceleration:**
Using v = u + at
25 = 0 + a(10)
a = 25/10 = **2.5 m/s²**

**Finding distance:**
Using s = ut + ½at²
s = 0(10) + ½(2.5)(10)²
s = 0 + ½(2.5)(100)
s = **125 m**

Or using s = ½(u + v)t
s = ½(0 + 25)(10) = 125 m ✓`,
        display_order: 1
      },
      {
        difficulty: 'medium',
        marks: 4,
        content: 'A ball is thrown vertically upward with a velocity of 20 m/s. Calculate: (a) the maximum height reached, (b) the time to reach maximum height. Take g = 10 m/s².',
        solution: `**Given:** u = +20 m/s (up), a = -10 m/s² (g acts down), v = 0 at max height

**(a) Maximum height:**
Using v² = u² + 2as
0² = 20² + 2(-10)s
0 = 400 - 20s
20s = 400
s = **20 m**

**(b) Time to maximum height:**
Using v = u + at
0 = 20 + (-10)t
10t = 20
t = **2 seconds**

**Check:** s = ut + ½at² = 20(2) + ½(-10)(4) = 40 - 20 = 20 m ✓`,
        display_order: 2
      },
      {
        difficulty: 'hard',
        marks: 5,
        content: 'A stone is thrown horizontally at 15 m/s from a cliff 80 m high. Calculate the horizontal distance from the base of the cliff where the stone lands. Take g = 10 m/s².',
        solution: `**Projectile motion: separate horizontal and vertical**

**Vertical motion (to find time of flight):**
- u_y = 0 (thrown horizontally)
- a_y = +10 m/s² (taking down as positive)
- s_y = 80 m

Using s = ut + ½at²:
80 = 0(t) + ½(10)t²
80 = 5t²
t² = 16
t = 4 seconds

**Horizontal motion:**
- u_x = 15 m/s
- a_x = 0 (no horizontal acceleration)
- t = 4 s

Horizontal distance:
s_x = u_x × t
s_x = 15 × 4
s_x = **60 m**

The stone lands **60 m** from the base of the cliff.`,
        display_order: 3
      }
    ]
  },
  {
    content: {
      level: 'a-level',
      subject: 'physics',
      exam_board: 'aqa',
      topic_slug: 'mechanics',
      subtopic_slug: 'newtons-laws',
      title: "Newton's Laws | A-Level Physics",
      meta_description: "Master Newton's three laws of motion and their applications. A-Level Physics practice questions with detailed solutions.",
      introduction: `Newton's three laws of motion form the foundation of classical mechanics, describing how forces affect the motion of objects. These laws apply to everything from falling apples to orbiting planets and are essential for understanding mechanics at A-level.

Newton's First Law states that an object remains at rest or in uniform motion unless acted upon by a resultant force. This property is called inertia. A stationary book on a table stays still because forces (gravity and normal reaction) are balanced. A car at constant velocity has zero resultant force.

Newton's Second Law quantifies the relationship between force, mass, and acceleration: F = ma. The resultant force on an object equals its mass multiplied by its acceleration. Force is measured in newtons, where 1 N is the force needed to accelerate 1 kg at 1 m/s².

Newton's Third Law states that when object A exerts a force on object B, object B exerts an equal and opposite force on object A. These action-reaction pairs act on different objects. When you push a wall, the wall pushes back on you with equal force.`
    },
    questions: [
      {
        difficulty: 'easy',
        marks: 3,
        content: 'A force of 600 N acts on a 1500 kg car. Calculate the acceleration of the car.',
        solution: `**Using Newton's Second Law: F = ma**

Given:
- F = 600 N
- m = 1500 kg

Rearranging for a:
a = F/m
a = 600/1500
a = **0.4 m/s²**`,
        display_order: 1
      },
      {
        difficulty: 'medium',
        marks: 4,
        content: 'A lift of mass 800 kg accelerates upward at 2 m/s². Calculate the tension in the lift cable. Take g = 10 m/s².',
        solution: `**Free body diagram:**
- Tension T acts upward
- Weight W = mg = 800 × 10 = 8000 N acts downward
- Net force produces upward acceleration

**Applying Newton's Second Law (taking up as positive):**
Resultant force = ma
T - W = ma
T - 8000 = 800 × 2
T - 8000 = 1600
T = 8000 + 1600
T = **9600 N**

**Check:** The tension must be greater than the weight for upward acceleration ✓`,
        display_order: 2
      },
      {
        difficulty: 'hard',
        marks: 5,
        content: 'Two blocks A (mass 3 kg) and B (mass 2 kg) are connected by a light string over a frictionless pulley. Calculate the acceleration of the system and the tension in the string. Take g = 10 m/s².',
        solution: `**This is an Atwood machine problem**

**For block A (heavier, moving down):**
Weight - Tension = ma
3g - T = 3a ... (1)
30 - T = 3a

**For block B (lighter, moving up):**
Tension - Weight = ma
T - 2g = 2a ... (2)
T - 20 = 2a

**Adding equations (1) and (2):**
30 - T + T - 20 = 3a + 2a
10 = 5a
a = **2 m/s²**

**Finding tension (substitute into equation 2):**
T - 20 = 2(2)
T - 20 = 4
T = **24 N**

**Check equation (1):** 30 - 24 = 6 = 3(2) ✓`,
        display_order: 3
      }
    ]
  },
  {
    content: {
      level: 'a-level',
      subject: 'physics',
      exam_board: 'aqa',
      topic_slug: 'mechanics',
      subtopic_slug: 'work-energy-power',
      title: 'Work, Energy and Power | A-Level Physics',
      meta_description: 'Master work done, kinetic and potential energy, and power calculations. A-Level Physics practice questions with solutions.',
      introduction: `Work, energy, and power are fundamental concepts in physics that describe energy transfers. Understanding these concepts is essential for analysing systems from simple machines to complex engines.

Work done is the energy transferred when a force moves an object. W = Fs cos θ, where θ is the angle between the force and displacement. Work is measured in joules (J). If force and displacement are in the same direction, W = Fs. If perpendicular, no work is done.

Kinetic energy (KE = ½mv²) is the energy of moving objects, while gravitational potential energy (GPE = mgh) is energy due to position in a gravitational field. The work-energy theorem states that work done on an object equals its change in kinetic energy.

Power is the rate of doing work or transferring energy: P = W/t = Fv. It's measured in watts (W). Efficiency = useful power output / total power input × 100%. Understanding power and efficiency is crucial for analysing real-world systems where energy is dissipated.`
    },
    questions: [
      {
        difficulty: 'easy',
        marks: 3,
        content: 'A force of 50 N pulls a box 8 m along the floor at an angle of 30° to the horizontal. Calculate the work done by the force.',
        solution: `**Using W = Fs cos θ**

Given:
- F = 50 N
- s = 8 m
- θ = 30°

W = 50 × 8 × cos 30°
W = 400 × 0.866
W = **346 J** (or 346.4 J)

Note: Only the horizontal component of force (F cos θ) does work in the direction of motion.`,
        display_order: 1
      },
      {
        difficulty: 'medium',
        marks: 4,
        content: 'A car of mass 1200 kg travelling at 15 m/s accelerates to 25 m/s. Calculate the work done by the engine to produce this acceleration.',
        solution: `**Using work-energy theorem:**
Work done = Change in kinetic energy
W = ΔKE = KE_final - KE_initial

**Initial KE:**
KE₁ = ½mv₁²
KE₁ = ½ × 1200 × 15²
KE₁ = ½ × 1200 × 225
KE₁ = 135,000 J

**Final KE:**
KE₂ = ½mv₂²
KE₂ = ½ × 1200 × 25²
KE₂ = ½ × 1200 × 625
KE₂ = 375,000 J

**Work done:**
W = 375,000 - 135,000
W = **240,000 J** (or **240 kJ**)`,
        display_order: 2
      },
      {
        difficulty: 'hard',
        marks: 5,
        content: 'A car of mass 1000 kg travels at a constant speed of 20 m/s up a slope inclined at 5° to the horizontal. The resistive forces total 400 N. Calculate the power output of the engine.',
        solution: `**At constant speed, driving force = resistive forces**

**Forces acting on car:**
1. Resistive forces: 400 N (down the slope)
2. Component of weight down slope: mg sin θ

**Weight component:**
W_parallel = mg sin θ
W_parallel = 1000 × 10 × sin 5°
W_parallel = 10000 × 0.0872
W_parallel = 872 N

**Total resistive force:**
F_total = 400 + 872 = 1272 N

**Driving force needed:**
F_drive = 1272 N (to maintain constant speed)

**Power output:**
P = Fv
P = 1272 × 20
P = **25,440 W** (or **25.4 kW**)`,
        display_order: 3
      }
    ]
  },
  {
    content: {
      level: 'a-level',
      subject: 'physics',
      exam_board: 'aqa',
      topic_slug: 'mechanics',
      subtopic_slug: 'momentum',
      title: 'Momentum | A-Level Physics',
      meta_description: 'Master conservation of momentum and impulse calculations. A-Level Physics practice questions with step-by-step solutions.',
      introduction: `Momentum is a fundamental quantity in physics, defined as the product of mass and velocity: p = mv. It is a vector quantity, meaning direction matters. Understanding momentum is essential for analysing collisions and explosions.

The principle of conservation of momentum states that in a closed system (no external forces), total momentum before an interaction equals total momentum after. This applies to collisions, explosions, and any interaction between objects.

Collisions can be elastic (kinetic energy is conserved) or inelastic (kinetic energy is lost). In perfectly inelastic collisions, objects stick together and maximum kinetic energy is lost. Real collisions usually fall between these extremes.

Impulse is the change in momentum: Δp = FΔt. This equals the area under a force-time graph. Impulse explains why increasing collision time (like crumple zones in cars) reduces the force experienced, even though momentum change is the same.`
    },
    questions: [
      {
        difficulty: 'easy',
        marks: 3,
        content: 'A 2000 kg truck travelling at 15 m/s collides with a stationary 1000 kg car. If they stick together, calculate their common velocity after the collision.',
        solution: `**Conservation of momentum:**
Total momentum before = Total momentum after

**Before collision:**
p_truck = 2000 × 15 = 30,000 kg m/s
p_car = 1000 × 0 = 0
Total = 30,000 kg m/s

**After collision (stuck together):**
Combined mass = 2000 + 1000 = 3000 kg
Let common velocity = v

**Applying conservation:**
30,000 = 3000 × v
v = 30,000/3000
v = **10 m/s**`,
        display_order: 1
      },
      {
        difficulty: 'medium',
        marks: 4,
        content: 'A 0.5 kg ball travelling at 6 m/s collides head-on with a 0.3 kg ball travelling at 4 m/s in the opposite direction. After the collision, the 0.5 kg ball moves at 2 m/s in its original direction. Find the velocity of the 0.3 kg ball after collision.',
        solution: `**Taking the initial direction of the 0.5 kg ball as positive:**

**Before collision:**
p₁ = 0.5 × 6 = 3 kg m/s
p₂ = 0.3 × (-4) = -1.2 kg m/s (opposite direction)
Total = 3 - 1.2 = 1.8 kg m/s

**After collision:**
p₁' = 0.5 × 2 = 1 kg m/s
p₂' = 0.3 × v (where v is unknown)

**Conservation of momentum:**
1.8 = 1 + 0.3v
0.8 = 0.3v
v = 0.8/0.3
v = **2.67 m/s** (in the positive direction)

The 0.3 kg ball now moves at 2.67 m/s in the direction the 0.5 kg ball was originally travelling.`,
        display_order: 2
      },
      {
        difficulty: 'hard',
        marks: 5,
        content: 'A bullet of mass 10 g travelling at 400 m/s embeds in a wooden block of mass 2 kg suspended from a string. Calculate the height to which the block rises. Take g = 10 m/s².',
        solution: `**Stage 1: Collision (conservation of momentum)**

Before: p = m_bullet × v_bullet = 0.01 × 400 = 4 kg m/s

After: Combined mass = 0.01 + 2 = 2.01 kg
Let velocity after collision = v

4 = 2.01 × v
v = 4/2.01 = 1.99 m/s

**Stage 2: Rising (conservation of energy)**

KE after collision = GPE at max height

½mv² = mgh
½(2.01)(1.99)² = (2.01)(10)h
½(1.99)² = 10h
1.98 = 10h
h = **0.198 m** (or approximately **20 cm**)

**Note:** We used combined mass in both parts. KE is not conserved in the collision (inelastic), but total energy is conserved in the rising phase.`,
        display_order: 3
      }
    ]
  },
  {
    content: {
      level: 'a-level',
      subject: 'physics',
      exam_board: 'aqa',
      topic_slug: 'mechanics',
      subtopic_slug: 'circular-motion',
      title: 'Circular Motion | A-Level Physics',
      meta_description: 'Master circular motion, centripetal force and angular velocity. A-Level Physics practice questions with solutions.',
      introduction: `Circular motion occurs when an object moves in a circular path. Even at constant speed, the object is accelerating because its velocity direction constantly changes. This acceleration is always directed toward the centre—centripetal acceleration.

Angular velocity (ω) measures how fast the angle changes: ω = θ/t = 2πf = 2π/T, where f is frequency and T is period. The relationship between linear speed v and angular velocity is v = rω, where r is the radius.

Centripetal acceleration is a = v²/r = rω². For an object to move in a circle, there must be a centripetal force F = mv²/r = mrω² directed toward the centre. This force could be tension, gravity, friction, or any combination.

Common examples include planets orbiting the Sun (gravity provides centripetal force), cars on curved roads (friction), and conical pendulums (component of tension). Understanding these applications requires correctly identifying what provides the centripetal force.`
    },
    questions: [
      {
        difficulty: 'easy',
        marks: 3,
        content: 'A car travels around a circular track of radius 50 m at a constant speed of 15 m/s. Calculate the centripetal acceleration.',
        solution: `**Using a = v²/r**

Given:
- v = 15 m/s
- r = 50 m

a = v²/r
a = 15²/50
a = 225/50
a = **4.5 m/s²**

This acceleration is directed toward the centre of the circular track.`,
        display_order: 1
      },
      {
        difficulty: 'medium',
        marks: 4,
        content: 'A 0.2 kg ball on a string is whirled in a horizontal circle of radius 0.8 m. The string makes an angle of 30° with the vertical. Calculate the tension in the string and the speed of the ball. Take g = 10 m/s².',
        solution: `**This is a conical pendulum**

**Resolving tension forces:**
Vertical: T cos 30° = mg (balances weight)
Horizontal: T sin 30° = mv²/r (provides centripetal force)

**Finding tension:**
T cos 30° = mg
T × 0.866 = 0.2 × 10
T = 2/0.866
T = **2.31 N**

**Finding speed:**
T sin 30° = mv²/r
2.31 × 0.5 = 0.2 × v²/0.8
1.155 = 0.25v²
v² = 4.62
v = **2.15 m/s**

Check: tan 30° = (mv²/r)/(mg) = v²/(rg) = 4.62/(0.8 × 10) = 0.578 ≈ tan 30° ✓`,
        display_order: 2
      },
      {
        difficulty: 'hard',
        marks: 5,
        content: 'A satellite orbits Earth at a height where the gravitational field strength is 8.0 N/kg. The radius of this orbit is 8000 km. Calculate the orbital period of the satellite.',
        solution: `**For circular orbit, gravity provides centripetal force:**
mg = mv²/r

Therefore:
g = v²/r
v² = gr
v = √(gr)

**Calculate orbital speed:**
g = 8.0 N/kg = 8.0 m/s²
r = 8000 km = 8 × 10⁶ m

v = √(8.0 × 8 × 10⁶)
v = √(64 × 10⁶)
v = 8000 m/s

**Calculate period:**
Circumference = 2πr = 2π × 8 × 10⁶ m

T = distance/speed
T = 2πr/v
T = (2π × 8 × 10⁶)/8000
T = 2π × 10³
T = 6283 s

**T ≈ 6280 s** (or about **1 hour 45 minutes**)`,
        display_order: 3
      }
    ]
  }
];
