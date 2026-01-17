import { SubtopicData } from '../bulk-seo-insert';

export const alevelMathsMechanics: SubtopicData[] = [
  {
    content: {
      level: 'a-level',
      subject: 'maths',
      exam_board: 'aqa',
      topic_slug: 'mechanics',
      subtopic_slug: 'suvat-equations',
      title: 'SUVAT Equations | A-Level Maths',
      meta_description: 'Master the SUVAT equations for constant acceleration including derivations and problem-solving strategies for A-Level Maths mechanics.',
      introduction: `The SUVAT equations describe motion under constant acceleration and form the foundation of A-Level Mathematics mechanics. These five equations connect displacement, initial velocity, final velocity, acceleration, and time.

The five SUVAT variables are: s (displacement), u (initial velocity), v (final velocity), a (acceleration), and t (time). Each SUVAT equation connects four of these five variables, allowing the fifth to be found when any three are known.

The key equations are: v = u + at, s = ut + ½at², s = vt - ½at², v² = u² + 2as, and s = ½(u + v)t. These can be derived from the basic definition of acceleration as rate of change of velocity, combined with integration.

When solving SUVAT problems, first identify the known quantities and what needs to be found. Then select the appropriate equation(s). Pay careful attention to signs: choose a positive direction and ensure all vector quantities (displacement, velocity, acceleration) are given appropriate signs.

For objects in freefall or vertical motion, acceleration due to gravity g ≈ 9.8 m s⁻² acts downward. Taking upward as positive means a = -g. At maximum height, v = 0.

SUVAT equations only apply when acceleration is constant. For variable acceleration, calculus methods (differentiation and integration) must be used instead.`
    },
    questions: [
      {
        difficulty: 'easy',
        marks: 3,
        content: 'A car accelerates uniformly from 10 m s⁻¹ to 25 m s⁻¹ over a distance of 70 m. Find the acceleration.',
        solution: 'Known: u = 10 m s⁻¹, v = 25 m s⁻¹, s = 70 m. Find a (1 mark). Use v² = u² + 2as: 25² = 10² + 2a(70) (1 mark). 625 = 100 + 140a, so 140a = 525, a = 3.75 m s⁻² (1 mark).',
        display_order: 1
      },
      {
        difficulty: 'medium',
        marks: 4,
        content: 'A ball is thrown vertically upward with initial velocity 20 m s⁻¹. Find (a) the maximum height reached, and (b) the time taken to return to the starting point. Take g = 10 m s⁻².',
        solution: 'Taking upward as positive, u = 20 m s⁻¹, a = -10 m s⁻². (a) At max height, v = 0. Using v² = u² + 2as: 0 = 400 + 2(-10)s, s = 20 m (1 mark). (b) When ball returns, s = 0. Using s = ut + ½at²: 0 = 20t + ½(-10)t² (1 mark). 0 = t(20 - 5t), so t = 0 or t = 4 s (1 mark). Time to return = 4 s (t = 0 is the start) (1 mark).',
        display_order: 2
      },
      {
        difficulty: 'hard',
        marks: 5,
        content: 'Two particles A and B are released from rest from heights h and 2h respectively above the ground at the same instant. If A hits the ground at time T, show that B hits the ground at time T√2, and find the height of B above the ground when A lands.',
        solution: 'For A: using s = ut + ½at², h = 0 + ½gT², so h = ½gT² (1 mark). For B: 2h = ½gt², so t² = 4h/g = 4(½gT²)/g = 2T², giving t = T√2 (1 mark). When A lands (at time T), B has fallen: s = ½gT² = h (1 mark). B started at height 2h, so height above ground = 2h - h = h (1 mark). Alternative method: B\'s height = 2h - ½gT² = 2h - h = h (1 mark for clear working and explanation).',
        display_order: 3
      }
    ]
  },
  {
    content: {
      level: 'a-level',
      subject: 'maths',
      exam_board: 'aqa',
      topic_slug: 'mechanics',
      subtopic_slug: 'projectiles',
      title: 'Projectile Motion | A-Level Maths',
      meta_description: 'Master projectile motion including trajectory equations and maximum range calculations for A-Level Maths mechanics examination success.',
      introduction: `Projectile motion combines horizontal and vertical motion under gravity. A-Level Mathematics requires analysis of projectiles using SUVAT equations applied separately in each direction.

The key principle is that horizontal and vertical components of motion are independent. Horizontally, velocity is constant (no air resistance), so x = ut cos θ. Vertically, motion is under gravity, so the SUVAT equations apply with a = -g (taking upward as positive).

Initial velocity u at angle θ to horizontal has components: horizontal uₓ = u cos θ, vertical uᵧ = u sin θ. At any time t, the horizontal position is x = (u cos θ)t and vertical position is y = (u sin θ)t - ½gt².

Time of flight is found when y = 0 (returns to launch height): T = 2u sin θ / g. Maximum height occurs when vertical velocity equals zero: H = u² sin² θ / 2g.

Horizontal range is R = u² sin 2θ / g. Maximum range occurs at θ = 45° where sin 2θ = 1, giving Rmax = u²/g.

The trajectory equation eliminates time to give the path: y = x tan θ - gx² / (2u² cos² θ). This parabola shows the projectile's position at any horizontal displacement.`
    },
    questions: [
      {
        difficulty: 'easy',
        marks: 3,
        content: 'A ball is kicked horizontally at 15 m s⁻¹ from the top of a cliff 20 m high. Find the time taken to hit the ground and the horizontal distance travelled. Take g = 10 m s⁻².',
        solution: 'Vertically: s = 20 m (downward), u = 0, a = 10 m s⁻². Using s = ut + ½at²: 20 = 0 + 5t², t = 2 s (1 mark). Horizontally: constant velocity 15 m s⁻¹ (1 mark). Distance = 15 × 2 = 30 m (1 mark).',
        display_order: 1
      },
      {
        difficulty: 'medium',
        marks: 5,
        content: 'A projectile is launched at 40 m s⁻¹ at 30° above the horizontal from ground level. Find (a) the time of flight, (b) the maximum height, and (c) the range. Take g = 10 m s⁻².',
        solution: 'uₓ = 40 cos 30° = 34.6 m s⁻¹, uᵧ = 40 sin 30° = 20 m s⁻¹ (1 mark). (a) At landing y = 0: 0 = 20t - 5t², t(20 - 5t) = 0, T = 4 s (1 mark). (b) At max height, vᵧ = 0: 0 = 20 - 10t, t = 2 s. Height: y = 20(2) - 5(4) = 20 m (1 mark). (c) Range = uₓ × T = 34.6 × 4 = 138.6 m (1 mark). Or using R = u² sin 2θ/g = 1600 × sin 60°/10 = 138.6 m (1 mark).',
        display_order: 2
      },
      {
        difficulty: 'hard',
        marks: 6,
        content: 'A particle is projected from a point O with speed 25 m s⁻¹ at angle θ above the horizontal. It passes through a point P which is 30 m horizontally and 10 m vertically from O. Find the two possible values of θ. Take g = 10 m s⁻².',
        solution: 'Using trajectory equation: y = x tan θ - gx²/(2u² cos² θ) (1 mark). 10 = 30 tan θ - 10(900)/(2 × 625 × cos² θ) (1 mark). 10 = 30 tan θ - 7.2 sec² θ = 30 tan θ - 7.2(1 + tan² θ) (1 mark). 10 = 30 tan θ - 7.2 - 7.2 tan² θ. 7.2 tan² θ - 30 tan θ + 17.2 = 0 (1 mark). Using quadratic formula: tan θ = (30 ± √(900 - 495.4))/14.4 = (30 ± 20.1)/14.4 (1 mark). tan θ = 3.48 or 0.69, so θ = 74.0° or 34.6° (1 mark).',
        display_order: 3
      }
    ]
  },
  {
    content: {
      level: 'a-level',
      subject: 'maths',
      exam_board: 'aqa',
      topic_slug: 'mechanics',
      subtopic_slug: 'moments',
      title: 'Moments | A-Level Maths',
      meta_description: 'Master moments and equilibrium including couples and beam problems for A-Level Maths mechanics examination success.',
      introduction: `Moments describe the turning effect of forces about a point. Understanding moments is essential for A-Level Mathematics mechanics, particularly for problems involving rigid bodies in equilibrium.

The moment of a force about a point equals the force multiplied by the perpendicular distance from the point to the line of action of the force: M = Fd. Moments are measured in newton-metres (N m). Clockwise and anticlockwise moments have opposite signs.

For a body in equilibrium, two conditions must be satisfied: the resultant force is zero (ΣF = 0), and the resultant moment about any point is zero (ΣM = 0). When taking moments, choose a point that simplifies calculations by eliminating unknown forces.

A couple consists of two equal and opposite parallel forces not acting along the same line. The moment of a couple equals F × d, where d is the perpendicular distance between the forces. This is the same about any point.

For beams supported at two points, reactions can be found by: resolving vertically (R₁ + R₂ = total load), and taking moments about one support to find the other reaction directly. Uniform beams have their weight acting at the centre.

Tilting and toppling problems involve finding the point about which a body would rotate. A body tilts when the moment causing rotation exceeds the restoring moment.`
    },
    questions: [
      {
        difficulty: 'easy',
        marks: 3,
        content: 'A uniform plank of length 4 m and weight 200 N rests horizontally on two supports placed 0.5 m from each end. Find the reaction at each support.',
        solution: 'Weight acts at centre, 2 m from each end. Supports at 0.5 m and 3.5 m from left end (1 mark). By symmetry (uniform beam, symmetrically placed supports), each reaction = 200/2 = 100 N (1 mark). Check: R₁ + R₂ = 200 N ✓ and moments about centre are equal (1 mark).',
        display_order: 1
      },
      {
        difficulty: 'medium',
        marks: 5,
        content: 'A uniform beam AB of length 6 m and mass 40 kg rests horizontally on supports at A and at a point C which is 4 m from A. A load of mass 20 kg is placed at B. Find the reactions at A and C. Take g = 10 m s⁻².',
        solution: 'Weight of beam = 400 N acting at centre (3 m from A). Load = 200 N at B (6 m from A) (1 mark). Taking moments about A: Rc × 4 = 400 × 3 + 200 × 6 (1 mark). 4Rc = 1200 + 1200 = 2400, Rc = 600 N (1 mark). Resolving vertically: Ra + Rc = 400 + 200 (1 mark). Ra = 600 - 600 = 0 N (the beam is about to lift from A) (1 mark).',
        display_order: 2
      },
      {
        difficulty: 'hard',
        marks: 6,
        content: 'A ladder of length 5 m and weight 200 N rests with its foot on rough horizontal ground and its top against a smooth vertical wall. The ladder makes an angle of 60° with the ground. A person of weight 600 N stands at a point 4 m up the ladder. Find the reactions at the wall and ground, and the friction force at the ground.',
        solution: 'Let R = reaction at wall (horizontal), S = normal reaction at ground, F = friction at ground (1 mark). Ladder\'s weight acts at centre: horizontal distance from foot = 2.5 cos 60° = 1.25 m. Person: horizontal distance = 4 cos 60° = 2 m. Wall: horizontal distance from foot = 5 cos 60° = 2.5 m (1 mark). Taking moments about foot: R × 5 sin 60° = 200 × 1.25 + 600 × 2 (1 mark). R × 4.33 = 250 + 1200 = 1450, R = 335 N (1 mark). Resolving horizontally: F = R = 335 N (1 mark). Resolving vertically: S = 200 + 600 = 800 N (1 mark).',
        display_order: 3
      }
    ]
  },
  {
    content: {
      level: 'a-level',
      subject: 'maths',
      exam_board: 'aqa',
      topic_slug: 'mechanics',
      subtopic_slug: 'forces',
      title: 'Forces and Newton\'s Laws | A-Level Maths',
      meta_description: 'Master Newton\'s laws of motion and force resolution for A-Level Maths mechanics examination success.',
      introduction: `Newton's laws of motion describe how forces affect the motion of objects. A-Level Mathematics mechanics requires applying these laws to solve problems involving particles and connected bodies.

Newton's First Law states that a body remains at rest or moves with constant velocity unless acted upon by a resultant force. This defines the concept of inertia.

Newton's Second Law states that the resultant force equals mass times acceleration: F = ma. This is the fundamental equation for dynamics problems. When multiple forces act, resolve into components and apply F = ma in each direction.

Newton's Third Law states that for every action there is an equal and opposite reaction. These forces act on different bodies and are crucial when analysing systems of connected particles.

Forces commonly encountered include: weight (W = mg, always vertically downward), normal reaction (perpendicular to surface), friction (opposes relative motion, parallel to surface), tension (pulls along strings/ropes), and thrust/compression (in rigid rods).

When forces act at angles, resolve into perpendicular components, typically horizontal and vertical, or parallel and perpendicular to an inclined plane. On an inclined plane at angle θ, the component of weight down the plane is mg sin θ and perpendicular to the plane is mg cos θ.`
    },
    questions: [
      {
        difficulty: 'easy',
        marks: 3,
        content: 'A crate of mass 50 kg is pushed across a horizontal floor with a horizontal force of 300 N. If the friction force is 100 N, find the acceleration. Take g = 10 m s⁻².',
        solution: 'Resultant horizontal force = 300 - 100 = 200 N (1 mark). Using F = ma: 200 = 50 × a (1 mark). a = 4 m s⁻² (1 mark).',
        display_order: 1
      },
      {
        difficulty: 'medium',
        marks: 4,
        content: 'A particle of mass 5 kg is held on a smooth plane inclined at 30° to the horizontal by a force P acting parallel to the plane and up the slope. Find the value of P and the normal reaction. Take g = 10 m s⁻².',
        solution: 'Weight component parallel to plane (down) = 50 sin 30° = 25 N (1 mark). For equilibrium parallel to plane: P = 25 N (1 mark). Weight component perpendicular to plane = 50 cos 30° = 43.3 N (1 mark). Normal reaction R = 43.3 N (equal and opposite to perpendicular component) (1 mark).',
        display_order: 2
      },
      {
        difficulty: 'hard',
        marks: 5,
        content: 'A particle of mass 2 kg is placed on a rough plane inclined at 40° to the horizontal. The coefficient of friction is 0.5. Determine whether the particle will slide down the plane, and if so, find its acceleration. Take g = 10 m s⁻².',
        solution: 'Component of weight down plane = 20 sin 40° = 12.9 N (1 mark). Normal reaction R = 20 cos 40° = 15.3 N (1 mark). Maximum friction = μR = 0.5 × 15.3 = 7.65 N (1 mark). Since 12.9 > 7.65, the particle will slide (1 mark). Resultant force = 12.9 - 7.65 = 5.25 N. Using F = ma: 5.25 = 2a, a = 2.63 m s⁻² down the plane (1 mark).',
        display_order: 3
      }
    ]
  },
  {
    content: {
      level: 'a-level',
      subject: 'maths',
      exam_board: 'aqa',
      topic_slug: 'mechanics',
      subtopic_slug: 'friction',
      title: 'Friction | A-Level Maths',
      meta_description: 'Master friction including static and kinetic friction, limiting equilibrium, and coefficient of friction for A-Level Maths mechanics.',
      introduction: `Friction is a force that opposes the relative motion or tendency of motion between surfaces in contact. Understanding friction is essential for A-Level Mathematics mechanics when analysing equilibrium and motion.

The friction force F acts parallel to the contact surface in the direction opposing motion (or potential motion). It depends on the normal reaction R and the coefficient of friction μ.

For static (limiting) friction, when a body is on the point of moving: F = μR. For kinetic friction (body in motion), the same formula applies, though μ may be slightly lower. The coefficient of friction μ is dimensionless and depends only on the nature of the surfaces.

When F < μR, the surfaces are not slipping and F takes whatever value is needed for equilibrium (up to the maximum μR). Problems often ask whether slipping occurs or find conditions for limiting equilibrium.

On a rough inclined plane at angle θ, the particle is in limiting equilibrium when tan θ = μ. This provides a method for measuring μ experimentally. If tan θ > μ, the particle accelerates down the plane.

For problems involving friction: identify all forces, resolve parallel and perpendicular to the surface, determine if static or kinetic friction applies, and apply equilibrium conditions or Newton's second law.`
    },
    questions: [
      {
        difficulty: 'easy',
        marks: 3,
        content: 'A block of mass 10 kg rests on a horizontal surface. The coefficient of friction between the block and surface is 0.4. Find the minimum horizontal force needed to move the block. Take g = 10 m s⁻².',
        solution: 'Normal reaction R = Weight = 10 × 10 = 100 N (1 mark). Maximum friction = μR = 0.4 × 100 = 40 N (1 mark). Minimum force to move block = 40 N (just exceeding limiting friction) (1 mark).',
        display_order: 1
      },
      {
        difficulty: 'medium',
        marks: 4,
        content: 'A particle rests in limiting equilibrium on a rough plane inclined at 25° to the horizontal. Find the coefficient of friction. If the angle is increased to 35°, find the acceleration of the particle. Take g = 10 m s⁻².',
        solution: 'At limiting equilibrium on slope: tan θ = μ, so μ = tan 25° = 0.466 (1 mark). At 35°: Weight component down plane = mg sin 35° = 10 × 0.574 = 5.74m (1 mark). Normal reaction R = mg cos 35° = 8.19m. Friction = μR = 0.466 × 8.19m = 3.82m (1 mark). Resultant = 5.74m - 3.82m = 1.92m. Using F = ma: 1.92m = ma, a = 1.92 m s⁻² (1 mark).',
        display_order: 2
      },
      {
        difficulty: 'hard',
        marks: 5,
        content: 'A block of mass 5 kg rests on a rough horizontal surface (μ = 0.3). A force P is applied at 30° above the horizontal. Find the value of P that will just move the block. Take g = 10 m s⁻².',
        solution: 'Let P be the applied force at 30° above horizontal. Horizontal component = P cos 30° = 0.866P. Vertical component = P sin 30° = 0.5P (upward) (1 mark). Normal reaction: R + P sin 30° = 50, so R = 50 - 0.5P (1 mark). At limiting equilibrium: P cos 30° = μR = 0.3(50 - 0.5P) (1 mark). 0.866P = 15 - 0.15P. 1.016P = 15 (1 mark). P = 14.8 N (1 mark).',
        display_order: 3
      }
    ]
  },
  {
    content: {
      level: 'a-level',
      subject: 'maths',
      exam_board: 'aqa',
      topic_slug: 'mechanics',
      subtopic_slug: 'connected-particles',
      title: 'Connected Particles | A-Level Maths',
      meta_description: 'Master connected particle problems including systems with pulleys and inclined planes for A-Level Maths mechanics examination success.',
      introduction: `Connected particle problems involve two or more particles linked by strings or rods, often passing over pulleys. A-Level Mathematics requires systematic analysis of such systems using Newton's laws.

When particles are connected by an inextensible string over a smooth pulley, they have the same magnitude of acceleration (but possibly different directions). The tension is the same throughout a light string passing over a smooth pulley.

The standard approach is: draw a separate force diagram for each particle, choose a consistent positive direction (usually in the direction of motion), apply F = ma to each particle separately, and solve the simultaneous equations for acceleration and tension.

For a light string over a smooth pulley with masses m₁ and m₂ (m₁ > m₂) hanging vertically: acceleration a = (m₁ - m₂)g/(m₁ + m₂) and tension T = 2m₁m₂g/(m₁ + m₂).

When one particle is on a smooth inclined plane and connected to a hanging particle, resolve forces parallel to the plane for the first particle. The component of weight along the plane is mg sin θ.

More complex systems may involve multiple pulleys, rough surfaces requiring friction calculations, or particles moving on different planes.`
    },
    questions: [
      {
        difficulty: 'easy',
        marks: 3,
        content: 'Particles of mass 3 kg and 2 kg are connected by a light inextensible string over a smooth pulley. Find the acceleration and the tension in the string. Take g = 10 m s⁻².',
        solution: 'For 3 kg mass (moving down): 30 - T = 3a (1 mark). For 2 kg mass (moving up): T - 20 = 2a (1 mark). Adding: 10 = 5a, a = 2 m s⁻². From first equation: T = 30 - 6 = 24 N (1 mark).',
        display_order: 1
      },
      {
        difficulty: 'medium',
        marks: 5,
        content: 'A particle A of mass 4 kg rests on a smooth plane inclined at 30° to the horizontal. It is connected by a light string passing over a smooth pulley at the top of the plane to a particle B of mass 3 kg hanging freely. The system is released from rest. Find the acceleration and the distance moved by each particle after 2 seconds. Take g = 10 m s⁻².',
        solution: 'For B (down): 30 - T = 3a (1 mark). For A (up plane): T - 40 sin 30° = T - 20 = 4a (1 mark). Adding: 30 - 20 = 7a, a = 10/7 = 1.43 m s⁻² (1 mark). Distance: s = ut + ½at² = 0 + ½ × 1.43 × 4 (1 mark). s = 2.86 m for each particle (1 mark).',
        display_order: 2
      },
      {
        difficulty: 'hard',
        marks: 6,
        content: 'Particle A of mass 5 kg lies on a rough horizontal table (μ = 0.2) and is connected by a light string passing over a smooth pulley at the edge to particle B of mass 3 kg hanging freely. Find the acceleration and tension, and determine how far B falls in 2 seconds from rest. Take g = 10 m s⁻².',
        solution: 'For A on table: T - F = 5a, where F = μR = 0.2 × 50 = 10 N. So T - 10 = 5a (1 mark). For B (hanging): 30 - T = 3a (1 mark). Adding: 30 - 10 = 8a, a = 2.5 m s⁻² (1 mark). T = 30 - 3(2.5) = 22.5 N (1 mark). Distance: s = ut + ½at² = 0 + ½ × 2.5 × 4 (1 mark). s = 5 m (1 mark).',
        display_order: 3
      }
    ]
  },
  {
    content: {
      level: 'a-level',
      subject: 'maths',
      exam_board: 'aqa',
      topic_slug: 'mechanics',
      subtopic_slug: 'pulleys',
      title: 'Pulley Systems | A-Level Maths',
      meta_description: 'Master pulley systems including light pulleys, smooth pulleys, and multiple pulley arrangements for A-Level Maths mechanics.',
      introduction: `Pulley systems redirect and can multiply forces. A-Level Mathematics mechanics involves analysing various pulley configurations to find accelerations, tensions, and forces.

A smooth, light pulley changes the direction of a string without friction or adding mass. The tension is the same on both sides. Real pulleys may have friction (requiring different tensions) or mass (requiring consideration of the pulley's rotational motion).

For a single fixed pulley with masses m₁ and m₂ connected by a string over it, both masses have the same acceleration magnitude. The heavier mass accelerates downward while the lighter accelerates upward.

Moveable pulleys create mechanical advantage. If a pulley of mass M is attached to a loop of string with both ends connected to fixed points or other masses, the tension in the string may be different from the weight it supports.

Multi-stage pulley problems require careful analysis. Identify all strings and pulleys, note which sections of string have the same tension, and determine the relationship between accelerations (often one mass moves twice as fast as another).

The key principle is that inextensible strings have constant length. If one particle moves distance d in one direction, the string length on that side decreases by d, requiring an equal increase elsewhere.`
    },
    questions: [
      {
        difficulty: 'easy',
        marks: 3,
        content: 'A light inextensible string passes over a smooth fixed pulley. Particles of mass 4 kg and 6 kg are attached to the ends. The system is released from rest. Find the tension in the string. Take g = 10 m s⁻².',
        solution: 'Let acceleration be a. For 6 kg: 60 - T = 6a. For 4 kg: T - 40 = 4a (1 mark). Adding: 20 = 10a, so a = 2 m s⁻² (1 mark). T = 40 + 4(2) = 48 N (1 mark).',
        display_order: 1
      },
      {
        difficulty: 'medium',
        marks: 4,
        content: 'A string passes over a smooth fixed pulley and under a smooth moveable pulley of mass 2 kg, with both ends of the string attached to a fixed beam. Find the tension in the string and the acceleration of the moveable pulley. Take g = 10 m s⁻².',
        solution: 'The moveable pulley has tension T acting upward on each side (total 2T) (1 mark). For equilibrium/motion of the pulley: 2T - 20 = 2a (1 mark). For the pulley to remain stationary (if that\'s the case) or accelerate. If the system is in equilibrium: 2T = 20, T = 10 N, a = 0 (1 mark). The pulley hangs in equilibrium with tension 10 N in the string (1 mark).',
        display_order: 2
      },
      {
        difficulty: 'hard',
        marks: 6,
        content: 'A light string passes over a smooth fixed pulley A. One end carries a mass of 4 kg. The other end passes under a smooth light moveable pulley B and then over another smooth fixed pulley C, with its other end attached to a mass of 2 kg. Find the accelerations of both masses. Take g = 10 m s⁻².',
        solution: 'Let T be tension throughout the string (light pulleys, smooth) (1 mark). Let acceleration of 4 kg mass be a (downward). The pulley B moves up with acceleration a/2 (string constraint) (1 mark). So 2 kg mass accelerates down at a/2 relative to pulley, but pulley moves up at a/2, net acceleration = 0 relative to ground... Actually: For 4 kg: 40 - T = 4a (1 mark). For 2 kg: 2T - 20 = 2(a/2) = a (1 mark). From second equation: T = (a + 20)/2. Substituting: 40 - (a+20)/2 = 4a, 80 - a - 20 = 8a, 60 = 9a (1 mark). a = 6.67 m s⁻². 4 kg accelerates down at 6.67 m s⁻², 2 kg accelerates up at 3.33 m s⁻² (1 mark).',
        display_order: 3
      }
    ]
  },
  {
    content: {
      level: 'a-level',
      subject: 'maths',
      exam_board: 'aqa',
      topic_slug: 'mechanics',
      subtopic_slug: 'vectors-in-mechanics',
      title: 'Vectors in Mechanics | A-Level Maths',
      meta_description: 'Master vector methods for position, velocity, and acceleration in mechanics problems for A-Level Maths examination success.',
      introduction: `Vector methods provide powerful tools for solving mechanics problems in two and three dimensions. A-Level Mathematics uses vectors to describe position, velocity, acceleration, and forces.

Position vectors r describe location relative to an origin. In component form, r = xi + yj (2D) or r = xi + yj + zk (3D), where i, j, k are unit vectors along the coordinate axes.

Velocity v is the rate of change of position: v = dr/dt. In component form, if r = x(t)i + y(t)j, then v = (dx/dt)i + (dy/dt)j. Speed is the magnitude of velocity: |v| = √(vₓ² + vᵧ²).

Acceleration a is the rate of change of velocity: a = dv/dt = d²r/dt². Constant acceleration leads to the vector forms of SUVAT equations: v = u + at, r = r₀ + ut + ½at².

The resultant of several forces is found by vector addition. For equilibrium, the vector sum of forces equals zero. Forces can be resolved into components to simplify calculations.

Relative velocity problems use vector subtraction. The velocity of A relative to B is vₐ - vᵦ. This is useful for problems involving interception, collision, or closest approach.`
    },
    questions: [
      {
        difficulty: 'easy',
        marks: 3,
        content: 'A particle has position vector r = (3t² - 2)i + (4t + 1)j metres at time t seconds. Find the velocity and speed when t = 2.',
        solution: 'v = dr/dt = 6ti + 4j (1 mark). At t = 2: v = 12i + 4j m s⁻¹ (1 mark). Speed = |v| = √(144 + 16) = √160 = 12.6 m s⁻¹ (1 mark).',
        display_order: 1
      },
      {
        difficulty: 'medium',
        marks: 4,
        content: 'A particle starts from the origin with velocity (3i + 4j) m s⁻¹ and has constant acceleration (-i + 2j) m s⁻². Find the position vector after 3 seconds and the distance from the origin.',
        solution: 'Using r = ut + ½at²: r = (3i + 4j)(3) + ½(-i + 2j)(9) (1 mark). r = 9i + 12j + (-4.5i + 9j) (1 mark). r = 4.5i + 21j metres (1 mark). Distance = |r| = √(4.5² + 21²) = √(20.25 + 441) = √461.25 = 21.5 m (1 mark).',
        display_order: 2
      },
      {
        difficulty: 'hard',
        marks: 5,
        content: 'Ship A is at position (2i + 3j) km and moves with velocity (4i - 2j) km h⁻¹. Ship B is at position (10i - 1j) km and moves with velocity (i + j) km h⁻¹. Find the time at which the ships are closest and their minimum distance apart.',
        solution: 'Position of A: rₐ = (2 + 4t)i + (3 - 2t)j. Position of B: rᵦ = (10 + t)i + (-1 + t)j (1 mark). Relative position: rₐ - rᵦ = (2 + 4t - 10 - t)i + (3 - 2t + 1 - t)j = (-8 + 3t)i + (4 - 3t)j (1 mark). Distance² = (-8 + 3t)² + (4 - 3t)² = 64 - 48t + 9t² + 16 - 24t + 9t² = 18t² - 72t + 80 (1 mark). Minimum when d/dt = 0: 36t - 72 = 0, t = 2 hours (1 mark). Min distance² = 18(4) - 72(2) + 80 = 72 - 144 + 80 = 8. Min distance = √8 = 2.83 km (1 mark).',
        display_order: 3
      }
    ]
  },
  {
    content: {
      level: 'a-level',
      subject: 'maths',
      exam_board: 'aqa',
      topic_slug: 'mechanics',
      subtopic_slug: 'variable-acceleration',
      title: 'Variable Acceleration | A-Level Maths',
      meta_description: 'Master calculus methods for variable acceleration including differentiation and integration for A-Level Maths mechanics.',
      introduction: `When acceleration varies with time or position, calculus methods are essential. A-Level Mathematics requires using differentiation and integration to analyse motion with variable acceleration.

The fundamental relationships are: velocity v = ds/dt (rate of change of displacement), and acceleration a = dv/dt = d²s/dt² (rate of change of velocity). These can also be written as a = v(dv/ds) when acceleration depends on position.

Given displacement s(t) as a function of time, velocity is found by differentiation: v = ds/dt. Acceleration is found by differentiating again: a = dv/dt = d²s/dt².

Given acceleration a(t) as a function of time, velocity is found by integration: v = ∫a dt + C, where C is determined from initial conditions (usually v = v₀ when t = 0). Displacement is then: s = ∫v dt + C.

When acceleration depends on velocity, a = f(v), we can use separation of variables: dt = dv/f(v), so t = ∫dv/f(v). Similarly, for position-dependent acceleration a = f(s), we use v dv = a ds.

These calculus methods extend SUVAT equations to cases where acceleration isn't constant, such as air resistance proportional to velocity or restoring forces proportional to displacement.`
    },
    questions: [
      {
        difficulty: 'easy',
        marks: 3,
        content: 'A particle moves along a straight line with displacement s = t³ - 6t² + 9t metres at time t seconds. Find the velocity and acceleration at t = 2 s.',
        solution: 'v = ds/dt = 3t² - 12t + 9 (1 mark). At t = 2: v = 12 - 24 + 9 = -3 m s⁻¹ (1 mark). a = dv/dt = 6t - 12. At t = 2: a = 12 - 12 = 0 m s⁻² (1 mark).',
        display_order: 1
      },
      {
        difficulty: 'medium',
        marks: 4,
        content: 'A particle moves from rest with acceleration a = 6 - 2t m s⁻² at time t seconds. Find the velocity when t = 4 s and the time when the particle returns to its initial position.',
        solution: 'v = ∫(6 - 2t)dt = 6t - t² + C. When t = 0, v = 0, so C = 0. v = 6t - t² (1 mark). At t = 4: v = 24 - 16 = 8 m s⁻¹ (1 mark). s = ∫(6t - t²)dt = 3t² - t³/3 + C. When t = 0, s = 0, so C = 0. s = 3t² - t³/3 (1 mark). Returns when s = 0: t²(3 - t/3) = 0, so t = 0 or t = 9 s (1 mark).',
        display_order: 2
      },
      {
        difficulty: 'hard',
        marks: 6,
        content: 'A particle of mass 2 kg moves in a straight line with air resistance proportional to velocity. The equation of motion is 2(dv/dt) = 20 - 4v, where v is in m s⁻¹. If the particle starts from rest, find an expression for v in terms of t and determine the terminal velocity.',
        solution: 'Rearranging: dv/dt = 10 - 2v (1 mark). Separating variables: dv/(10 - 2v) = dt. ∫dv/(10 - 2v) = ∫dt (1 mark). -½ ln|10 - 2v| = t + C. When t = 0, v = 0: -½ ln 10 = C (1 mark). -½ ln|10 - 2v| = t - ½ ln 10. ln|10 - 2v| = ln 10 - 2t (1 mark). 10 - 2v = 10e⁻²ᵗ. v = 5(1 - e⁻²ᵗ) m s⁻¹ (1 mark). Terminal velocity: as t → ∞, e⁻²ᵗ → 0, so v → 5 m s⁻¹. Or set dv/dt = 0: 10 - 2v = 0, v = 5 m s⁻¹ (1 mark).',
        display_order: 3
      }
    ]
  }
];

export default alevelMathsMechanics;
