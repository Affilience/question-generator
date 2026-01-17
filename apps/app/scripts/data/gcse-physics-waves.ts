import { SubtopicData } from '../bulk-seo-insert';

export const gcsePhysicsWaves: SubtopicData[] = [
  {
    content: {
      level: 'gcse',
      subject: 'physics',
      exam_board: 'aqa',
      topic_slug: 'waves',
      subtopic_slug: 'wave-properties',
      title: 'Wave Properties | GCSE Physics',
      meta_description: 'Master wave properties including amplitude, wavelength, frequency and wave speed. Practice questions with step-by-step solutions for GCSE Physics.',
      introduction: `Waves are one of the most fundamental concepts in physics, describing how energy transfers from one place to another without the transfer of matter. Understanding wave properties is essential for explaining phenomena from sound and light to earthquakes and radio communications.

Every wave can be described using four key properties: amplitude, wavelength, frequency, and wave speed. The amplitude measures the maximum displacement from the rest position and relates to the energy carried by the wave. The wavelength is the distance between two consecutive points in phase, such as two adjacent peaks or troughs.

Frequency tells us how many complete waves pass a point each second, measured in hertz (Hz). The wave equation, v = fλ, connects these properties, showing that wave speed equals frequency multiplied by wavelength. This relationship is crucial for calculations involving all types of waves.

Waves are classified as either transverse or longitudinal based on the direction of oscillation relative to energy transfer. In transverse waves like light and water ripples, particles oscillate perpendicular to the direction of travel. In longitudinal waves like sound, particles oscillate parallel to the direction of travel, creating compressions and rarefactions.`
    },
    questions: [
      {
        difficulty: 'easy',
        marks: 2,
        content: 'A wave has a frequency of 50 Hz and a wavelength of 4 m. Calculate the wave speed.',
        solution: `Using the wave equation: v = fλ

v = 50 × 4
v = 200 m/s

The wave speed is **200 m/s**.`,
        display_order: 1
      },
      {
        difficulty: 'medium',
        marks: 3,
        content: 'A sound wave travels at 340 m/s and has a wavelength of 0.85 m. Calculate the frequency of the sound and state whether it would be audible to humans.',
        solution: `Using v = fλ, rearranging for frequency: f = v/λ

f = 340 ÷ 0.85
f = 400 Hz

The frequency is **400 Hz**.

Human hearing range is typically 20 Hz to 20,000 Hz.
Since 400 Hz falls within this range, the sound **would be audible** to humans.`,
        display_order: 2
      },
      {
        difficulty: 'hard',
        marks: 4,
        content: 'A wave generator produces 120 waves in 30 seconds. If the wavelength is 2.5 m, calculate: (a) the frequency of the waves, and (b) the wave speed.',
        solution: `**(a) Finding frequency:**
Frequency = number of waves ÷ time
f = 120 ÷ 30
f = 4 Hz

**(b) Finding wave speed:**
Using v = fλ
v = 4 × 2.5
v = 10 m/s

The frequency is **4 Hz** and the wave speed is **10 m/s**.`,
        display_order: 3
      }
    ]
  },
  {
    content: {
      level: 'gcse',
      subject: 'physics',
      exam_board: 'aqa',
      topic_slug: 'waves',
      subtopic_slug: 'reflection-and-refraction',
      title: 'Reflection and Refraction | GCSE Physics',
      meta_description: 'Learn about reflection and refraction of waves including the laws of reflection and Snell\'s law. GCSE Physics practice questions with solutions.',
      introduction: `When waves encounter a boundary between two different materials, they can be reflected, refracted, or both. Understanding these behaviours is essential for explaining how mirrors work, why pools look shallower than they are, and how lenses focus light.

Reflection occurs when waves bounce off a surface. The law of reflection states that the angle of incidence equals the angle of reflection, with both angles measured from the normal—an imaginary line perpendicular to the surface. This principle applies to all waves, from light reflecting off mirrors to sound echoing in a canyon.

Refraction is the change in direction of a wave as it passes from one medium to another at an angle. This occurs because waves travel at different speeds in different materials. When light enters a denser medium like glass, it slows down and bends towards the normal. When it exits into a less dense medium, it speeds up and bends away from the normal.

The refractive index of a material describes how much light slows down when entering it. A higher refractive index means greater bending. Total internal reflection occurs when light travelling from a denser to less dense medium hits the boundary at an angle greater than the critical angle, causing all light to be reflected back.`
    },
    questions: [
      {
        difficulty: 'easy',
        marks: 2,
        content: 'A ray of light hits a plane mirror at an angle of 35° to the normal. What is the angle of reflection?',
        solution: `According to the law of reflection:
Angle of incidence = Angle of reflection

Since the angle of incidence is 35°, the angle of reflection is also **35°**.`,
        display_order: 1
      },
      {
        difficulty: 'medium',
        marks: 3,
        content: 'Light travels from air into glass. The angle of incidence is 45° and the angle of refraction is 28°. Explain why the light bends towards the normal.',
        solution: `Light bends towards the normal because:

1. Glass is optically denser than air
2. Light travels slower in glass than in air
3. When light slows down as it enters a denser medium, it bends towards the normal

The angle of refraction (28°) is smaller than the angle of incidence (45°), confirming that light has bent towards the normal line.`,
        display_order: 2
      },
      {
        difficulty: 'hard',
        marks: 4,
        content: 'The critical angle for light travelling from glass to air is 42°. A ray of light inside the glass hits the boundary at 50° to the normal. Describe what happens to the light and explain why.',
        solution: `**What happens:**
Total internal reflection occurs. The light ray is completely reflected back into the glass.

**Explanation:**
- The angle of incidence (50°) is greater than the critical angle (42°)
- When the incident angle exceeds the critical angle, no light can refract out of the denser medium
- All the light energy is reflected back at an angle of 50° to the normal (angle of reflection = angle of incidence)
- This only occurs when light travels from a denser to a less dense medium`,
        display_order: 3
      }
    ]
  },
  {
    content: {
      level: 'gcse',
      subject: 'physics',
      exam_board: 'aqa',
      topic_slug: 'waves',
      subtopic_slug: 'sound-waves',
      title: 'Sound Waves | GCSE Physics',
      meta_description: 'Understand sound waves, how they travel, and factors affecting pitch and loudness. Practice GCSE Physics questions with detailed solutions.',
      introduction: `Sound is a longitudinal wave that requires a medium to travel through—it cannot propagate through a vacuum. When an object vibrates, it creates alternating regions of compression and rarefaction in the surrounding air molecules, which carry energy to our ears where we perceive it as sound.

The pitch of a sound is determined by its frequency. High-frequency vibrations produce high-pitched sounds, while low-frequency vibrations create low-pitched sounds. Humans can typically hear frequencies between 20 Hz and 20,000 Hz. Sounds below this range are called infrasound, while those above are ultrasound.

Loudness depends on the amplitude of the sound wave. Greater amplitude means more energy is being transferred, which we perceive as a louder sound. The loudness of sound is measured in decibels (dB), a logarithmic scale where an increase of 10 dB represents a tenfold increase in sound intensity.

Sound travels at different speeds through different materials. It moves fastest through solids (about 5,000 m/s in steel), slower through liquids (about 1,500 m/s in water), and slowest through gases (about 340 m/s in air at room temperature). This is because particles are closer together in solids, allowing vibrations to transfer more quickly.`
    },
    questions: [
      {
        difficulty: 'easy',
        marks: 2,
        content: 'A student claps their hands and hears an echo from a wall 2 seconds later. If sound travels at 340 m/s, how far away is the wall?',
        solution: `The sound travels to the wall and back, so the total distance = speed × time
Total distance = 340 × 2 = 680 m

The wall distance is half this (sound goes there and back):
Distance to wall = 680 ÷ 2 = **340 m**`,
        display_order: 1
      },
      {
        difficulty: 'medium',
        marks: 3,
        content: 'Explain why sound cannot travel through a vacuum, but light can.',
        solution: `**Sound cannot travel through a vacuum because:**
- Sound is a mechanical/longitudinal wave
- It requires particles to vibrate and pass on energy
- A vacuum contains no particles, so there is nothing to vibrate

**Light can travel through a vacuum because:**
- Light is an electromagnetic wave
- It consists of oscillating electric and magnetic fields
- These fields can propagate without needing a material medium`,
        display_order: 2
      },
      {
        difficulty: 'hard',
        marks: 4,
        content: 'A ship uses sonar to detect the seabed. An ultrasound pulse is sent out and the echo returns after 0.4 seconds. If sound travels at 1500 m/s in seawater, calculate the depth of the water. Explain why ultrasound is used rather than audible sound.',
        solution: `**Calculating depth:**
Total distance = speed × time
Total distance = 1500 × 0.4 = 600 m

Depth = total distance ÷ 2 (sound travels down and back up)
Depth = 600 ÷ 2 = **300 m**

**Why ultrasound is used:**
- Higher frequency means shorter wavelength
- Shorter wavelengths give better resolution and more detailed images
- Ultrasound is above human hearing range, so doesn't cause noise pollution
- Can be produced in focused beams for accurate detection`,
        display_order: 3
      }
    ]
  },
  {
    content: {
      level: 'gcse',
      subject: 'physics',
      exam_board: 'aqa',
      topic_slug: 'waves',
      subtopic_slug: 'electromagnetic-spectrum',
      title: 'Electromagnetic Spectrum | GCSE Physics',
      meta_description: 'Learn the electromagnetic spectrum from radio waves to gamma rays. Practice questions on EM wave properties and uses for GCSE Physics.',
      introduction: `The electromagnetic spectrum encompasses all types of electromagnetic radiation, from radio waves with wavelengths of several kilometres to gamma rays with wavelengths smaller than atoms. Despite their differences, all electromagnetic waves share fundamental properties: they travel at the speed of light in a vacuum (3 × 10⁸ m/s) and are transverse waves consisting of oscillating electric and magnetic fields.

The spectrum is arranged by wavelength and frequency, which are inversely related. Radio waves have the longest wavelengths and lowest frequencies, while gamma rays have the shortest wavelengths and highest frequencies. As frequency increases, so does the energy carried by each photon, which explains why high-frequency radiation like X-rays and gamma rays can be harmful.

Different parts of the spectrum have different applications based on their properties. Radio waves carry broadcast signals, microwaves heat food and enable mobile communications, infrared is used in thermal imaging and remote controls, visible light allows us to see, ultraviolet causes tanning and is used for sterilisation, X-rays penetrate soft tissue for medical imaging, and gamma rays treat cancer.

Our atmosphere absorbs many wavelengths of electromagnetic radiation, which protects us from harmful radiation but also means astronomers must use satellites to observe parts of the spectrum blocked by the atmosphere.`
    },
    questions: [
      {
        difficulty: 'easy',
        marks: 2,
        content: 'List the seven types of electromagnetic radiation in order of increasing frequency.',
        solution: `In order of increasing frequency:

1. Radio waves
2. Microwaves
3. Infrared
4. Visible light
5. Ultraviolet
6. X-rays
7. Gamma rays

(This is also the order of increasing energy and decreasing wavelength.)`,
        display_order: 1
      },
      {
        difficulty: 'medium',
        marks: 3,
        content: 'Explain why ultraviolet radiation is more dangerous to human skin than infrared radiation.',
        solution: `Ultraviolet radiation is more dangerous because:

1. **Higher frequency** - UV has higher frequency than infrared
2. **Higher energy** - Higher frequency means more energy per photon
3. **Ionising ability** - UV has enough energy to damage DNA and cause mutations in skin cells
4. **Cell damage** - This can lead to sunburn in the short term and skin cancer with prolonged exposure

Infrared has lower energy per photon, which is insufficient to damage DNA. It mainly causes heating effects rather than cellular damage.`,
        display_order: 2
      },
      {
        difficulty: 'hard',
        marks: 4,
        content: 'A radio station broadcasts at a frequency of 100 MHz (100 × 10⁶ Hz). Calculate the wavelength of the radio waves. All electromagnetic waves travel at 3 × 10⁸ m/s.',
        solution: `Using the wave equation: v = fλ

Rearranging for wavelength: λ = v/f

λ = (3 × 10⁸) ÷ (100 × 10⁶)
λ = (3 × 10⁸) ÷ (1 × 10⁸)
λ = 3 m

The wavelength is **3 metres**.

This relatively long wavelength explains why radio waves can diffract around buildings and hills, allowing radio signals to be received even when there isn't a direct line of sight to the transmitter.`,
        display_order: 3
      }
    ]
  },
  {
    content: {
      level: 'gcse',
      subject: 'physics',
      exam_board: 'aqa',
      topic_slug: 'waves',
      subtopic_slug: 'lenses',
      title: 'Lenses | GCSE Physics',
      meta_description: 'Learn about convex and concave lenses, ray diagrams and image formation. Practice GCSE Physics lens questions with worked solutions.',
      introduction: `Lenses are transparent optical devices that refract light to form images. They work by exploiting the principle that light bends when passing between materials of different optical densities. Understanding lenses is crucial for explaining how cameras, eyeglasses, microscopes, and telescopes work.

Convex lenses are thicker in the middle than at the edges and are called converging lenses because they bring parallel light rays together at a focal point. The distance from the lens centre to this focal point is called the focal length. Convex lenses can form real images (where light actually converges) or virtual images (where light only appears to come from), depending on the object's position.

Concave lenses are thinner in the middle than at the edges and are called diverging lenses because they spread parallel light rays apart. Light passing through appears to diverge from a virtual focal point behind the lens. Concave lenses always produce virtual, upright, diminished images regardless of object position.

Ray diagrams help us predict where images will form and their characteristics. Three principal rays are used: a ray parallel to the axis refracts through the focal point, a ray through the centre passes straight through, and a ray through the focal point emerges parallel to the axis. Where these rays meet (or appear to meet) determines the image location.`
    },
    questions: [
      {
        difficulty: 'easy',
        marks: 2,
        content: 'State two differences between convex and concave lenses.',
        solution: `**Differences between convex and concave lenses:**

1. **Shape**: Convex lenses are thicker in the middle and thinner at the edges; concave lenses are thinner in the middle and thicker at the edges.

2. **Effect on light**: Convex lenses converge (bring together) parallel light rays; concave lenses diverge (spread apart) parallel light rays.

(Other acceptable answers: type of images formed, uses)`,
        display_order: 1
      },
      {
        difficulty: 'medium',
        marks: 3,
        content: 'An object is placed 30 cm from a convex lens with a focal length of 10 cm. Describe the nature of the image formed.',
        solution: `When an object is placed beyond 2F (twice the focal length) from a convex lens:

- Object distance = 30 cm
- Focal length = 10 cm, so 2F = 20 cm
- Object is beyond 2F (30 > 20)

The image will be:
- **Real** (formed by actual convergence of light rays)
- **Inverted** (upside down compared to object)
- **Diminished** (smaller than the object)
- **Located between F and 2F** on the opposite side of the lens`,
        display_order: 2
      },
      {
        difficulty: 'hard',
        marks: 4,
        content: 'A magnifying glass has a focal length of 8 cm. To see a magnified image, where should an object be placed relative to the lens? Explain your answer and describe the image formed.',
        solution: `**Object position:**
The object should be placed **between the lens and the focal point** (less than 8 cm from the lens).

**Explanation:**
- When the object is closer than F, the diverging rays from the object cannot be brought to a real focus by the lens
- The rays appear to diverge from a point behind the object
- The eye-brain system interprets these diverging rays as coming from a larger, more distant object

**Image characteristics:**
- **Virtual** - rays don't actually meet; the image cannot be projected onto a screen
- **Upright** - same orientation as the object
- **Magnified** - larger than the object
- **On the same side** as the object (when looking through the lens)`,
        display_order: 3
      }
    ]
  },
  {
    content: {
      level: 'gcse',
      subject: 'physics',
      exam_board: 'aqa',
      topic_slug: 'waves',
      subtopic_slug: 'diffraction',
      title: 'Diffraction | GCSE Physics',
      meta_description: 'Understand wave diffraction through gaps and around obstacles. GCSE Physics practice questions with step-by-step solutions.',
      introduction: `Diffraction is the spreading of waves as they pass through a gap or around an obstacle. This phenomenon explains why you can hear sounds from around corners and why radio signals can reach areas without direct line of sight to the transmitter. Understanding diffraction is essential for explaining wave behaviour and has applications in communications, acoustics, and imaging.

The amount of diffraction depends on the relationship between wavelength and gap size. Maximum diffraction occurs when the gap width is similar to the wavelength of the wave. If the gap is much larger than the wavelength, the wave passes through with minimal spreading. If the gap is much smaller than the wavelength, most of the wave is reflected or absorbed.

This relationship explains why different types of waves behave differently around obstacles. Sound waves, with wavelengths of metres, easily diffract through doorways. Radio waves with long wavelengths can bend around buildings and hills. Light waves, with very short wavelengths (around 500 nanometres), show noticeable diffraction only through extremely narrow gaps.

When waves diffract through a gap, the edges of the gap act as sources of secondary wavelets. These wavelets interfere with each other, producing a characteristic pattern of intensity. Understanding diffraction patterns has led to techniques like X-ray crystallography, which has been crucial for discovering the structure of DNA and other molecules.`
    },
    questions: [
      {
        difficulty: 'easy',
        marks: 2,
        content: 'What is diffraction? Give one example of diffraction in everyday life.',
        solution: `**Definition:**
Diffraction is the spreading out of waves when they pass through a gap or around an obstacle.

**Example (any one of these):**
- Hearing sounds from around a corner
- Radio waves reaching behind hills
- Water waves spreading out after passing through a harbour entrance
- Light spreading when passing through a narrow slit`,
        display_order: 1
      },
      {
        difficulty: 'medium',
        marks: 3,
        content: 'Explain why AM radio waves (wavelength ~300 m) can be received behind hills, but FM radio waves (wavelength ~3 m) often cannot.',
        solution: `**AM radio waves:**
- Have a wavelength (~300 m) comparable to or larger than many hills and obstacles
- This causes significant diffraction around hills
- The waves spread out and can reach areas in the "shadow" of obstacles

**FM radio waves:**
- Have a much shorter wavelength (~3 m)
- This is much smaller than hills and large obstacles
- Little diffraction occurs, so the waves travel in straighter lines
- Areas behind hills remain in a "signal shadow" with poor reception

**Key principle:** Maximum diffraction occurs when the wavelength is similar to the gap/obstacle size.`,
        display_order: 2
      },
      {
        difficulty: 'hard',
        marks: 4,
        content: 'Water waves with a wavelength of 2 cm approach a barrier with two gaps: Gap A is 2 cm wide and Gap B is 20 cm wide. Compare and explain the diffraction patterns produced at each gap.',
        solution: `**Gap A (2 cm - same as wavelength):**
- Maximum diffraction occurs
- Waves spread out significantly in a semicircular pattern
- The diffracted waves have lower amplitude but spread in all directions
- This produces the widest spreading angle

**Gap B (20 cm - 10× wavelength):**
- Minimal diffraction occurs
- Waves mostly pass straight through with little spreading
- Only slight bending at the edges of the gap
- The wave pattern largely maintains its original direction

**Explanation:**
Diffraction is most pronounced when gap width ≈ wavelength. Gap A satisfies this condition perfectly, causing maximum spreading. Gap B is much larger than the wavelength, so the wave "sees" it as an open space rather than a restricting gap, resulting in minimal diffraction.`,
        display_order: 3
      }
    ]
  }
];
