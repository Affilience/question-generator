import { SubtopicData } from '../bulk-seo-insert';

export const gcsePhysicsSpace: SubtopicData[] = [
  {
    content: {
      level: 'gcse',
      subject: 'physics',
      exam_board: 'aqa',
      topic_slug: 'space',
      subtopic_slug: 'solar-system',
      title: 'The Solar System | GCSE Physics',
      meta_description: 'Learn about our solar system including the Sun, planets, moons, asteroids, and comets. Understand orbital motion and distances in space for GCSE Physics.',
      introduction: `Our solar system is a fascinating region of space containing the Sun at its centre and all the objects that orbit around it. Understanding the structure and scale of the solar system is fundamental to GCSE Physics and helps us appreciate Earth's place in the universe.

The Sun is a main sequence star that contains 99.8% of the solar system's total mass. It produces energy through nuclear fusion, converting hydrogen into helium and releasing enormous amounts of light and heat. This energy sustains all life on Earth and drives weather systems through solar radiation.

The eight planets orbit the Sun in elliptical paths, divided into two groups: the inner rocky planets (Mercury, Venus, Earth, and Mars) and the outer gas giants (Jupiter, Saturn, Uranus, and Neptune). The asteroid belt, located between Mars and Jupiter, contains millions of rocky objects that never formed into a planet due to Jupiter's gravitational influence.

Beyond Neptune lies the Kuiper Belt, home to dwarf planets like Pluto and countless icy bodies. Even further out is the Oort Cloud, a spherical shell of icy objects that marks the outer boundary of the Sun's gravitational influence.

Natural satellites (moons) orbit many planets, with some moons being larger than Mercury. Comets are icy bodies that develop distinctive tails when approaching the Sun, as solar radiation vaporises their frozen gases. Understanding these objects and their motions helps us comprehend the dynamic nature of our cosmic neighbourhood.`
    },
    questions: [
      {
        difficulty: 'easy',
        marks: 2,
        content: 'Name the four inner planets of our solar system in order from the Sun.',
        solution: 'Mercury, Venus, Earth, Mars (in order from closest to furthest from the Sun). These are called the inner or rocky/terrestrial planets.',
        display_order: 1
      },
      {
        difficulty: 'medium',
        marks: 3,
        content: 'Explain why the planets orbit the Sun rather than moving in straight lines through space.',
        solution: 'The Sun\'s gravitational field exerts an attractive force on the planets (1 mark). This gravitational force acts towards the Sun, providing the centripetal force needed for circular/elliptical motion (1 mark). Without gravity, the planets would move in straight lines due to inertia, but gravity continuously changes their direction (1 mark).',
        display_order: 2
      },
      {
        difficulty: 'hard',
        marks: 4,
        content: 'A comet has an orbital period of 76 years. Explain why comets have such elongated elliptical orbits and describe what happens to a comet as it approaches and then moves away from the Sun.',
        solution: 'Comets originate from the outer solar system (Kuiper Belt/Oort Cloud) and have been captured into elongated elliptical orbits by gravitational interactions (1 mark). As a comet approaches the Sun, solar radiation heats its icy surface, causing gases and dust to vaporise and form a coma (atmosphere) around the nucleus (1 mark). Solar wind and radiation pressure push this material away from the Sun, creating the characteristic tail that always points away from the Sun (1 mark). As the comet moves away, it cools, the tail diminishes, and the comet becomes dormant until its next close approach (1 mark).',
        display_order: 3
      }
    ]
  },
  {
    content: {
      level: 'gcse',
      subject: 'physics',
      exam_board: 'aqa',
      topic_slug: 'space',
      subtopic_slug: 'life-cycle-of-stars',
      title: 'Life Cycle of Stars | GCSE Physics',
      meta_description: 'Master the life cycle of stars from nebula to white dwarf or supernova. Learn about stellar evolution, nuclear fusion, and different star deaths for GCSE Physics.',
      introduction: `Stars are born, live, and die over timescales spanning billions of years. Understanding stellar evolution is essential for GCSE Physics, as it explains the origin of heavy elements and the ultimate fate of our Sun.

All stars begin their lives in nebulae - vast clouds of hydrogen and helium gas mixed with cosmic dust. Gravitational attraction causes regions of higher density to collapse, forming protostars. As material falls inward, gravitational potential energy converts to thermal energy, heating the core. When temperatures reach about 15 million degrees Celsius, nuclear fusion ignites, and a star is born.

During the main sequence phase, which constitutes most of a star's life, hydrogen fuses into helium in the core. The outward pressure from fusion reactions balances the inward gravitational force, creating equilibrium. Our Sun has been in this stable phase for about 4.6 billion years and will remain so for another 5 billion years.

When hydrogen fuel in the core depletes, the star's fate depends critically on its mass. Stars like our Sun expand into red giants, then shed their outer layers as planetary nebulae, leaving behind a white dwarf that slowly cools over billions of years.

Massive stars (more than 8 solar masses) have more dramatic endings. They swell into red supergiants and undergo rapid core collapse when iron accumulates. This triggers a spectacular supernova explosion, scattering heavy elements throughout space. The core remnant becomes either a neutron star or, for the most massive stars, a black hole.`
    },
    questions: [
      {
        difficulty: 'easy',
        marks: 2,
        content: 'Describe what a nebula is and explain its role in star formation.',
        solution: 'A nebula is a large cloud of gas (mainly hydrogen and helium) and dust in space (1 mark). Stars form when gravity causes denser regions of the nebula to collapse and heat up until nuclear fusion begins (1 mark).',
        display_order: 1
      },
      {
        difficulty: 'medium',
        marks: 4,
        content: 'Explain the processes that occur in a star like our Sun during its main sequence phase and what keeps it stable.',
        solution: 'During the main sequence phase, hydrogen nuclei fuse together to form helium in the star\'s core (1 mark). This nuclear fusion releases enormous amounts of energy as electromagnetic radiation (1 mark). The outward radiation pressure and gas pressure from fusion reactions balances the inward gravitational force trying to collapse the star (1 mark). This equilibrium between outward pressure and inward gravity keeps the star stable at a constant size (1 mark).',
        display_order: 2
      },
      {
        difficulty: 'hard',
        marks: 6,
        content: 'Compare and contrast the final stages of a star with a mass similar to the Sun with those of a star with a mass greater than 8 solar masses.',
        solution: 'Sun-like star: When hydrogen in the core is exhausted, the core contracts and heats up while outer layers expand to form a red giant (1 mark). Helium fusion begins in the core, but eventually the star sheds its outer layers as a planetary nebula, leaving a white dwarf that slowly cools (1 mark). Massive star (>8 solar masses): Fusion continues through heavier elements up to iron in the core (1 mark). When iron accumulates, fusion stops and the core undergoes rapid gravitational collapse, triggering a supernova explosion that scatters heavy elements into space (1 mark). The core remnant forms a neutron star (for moderately massive stars) held up by neutron degeneracy pressure (1 mark). For the most massive stars, even neutron degeneracy pressure cannot prevent collapse, forming a black hole from which nothing, not even light, can escape (1 mark).',
        display_order: 3
      }
    ]
  },
  {
    content: {
      level: 'gcse',
      subject: 'physics',
      exam_board: 'aqa',
      topic_slug: 'space',
      subtopic_slug: 'red-shift',
      title: 'Red Shift | GCSE Physics',
      meta_description: 'Understand red shift and how it provides evidence for an expanding universe. Learn about the Doppler effect and its application to light for GCSE Physics.',
      introduction: `Red shift is one of the most important pieces of evidence for the expanding universe and forms a cornerstone of modern cosmology. Understanding this phenomenon is essential for GCSE Physics and helps explain our knowledge of the universe's history.

When a wave source moves away from an observer, the waves appear stretched, resulting in a longer wavelength. For light, this shifts the spectrum towards the red end, hence the term "red shift." This is similar to the Doppler effect for sound, where an ambulance siren sounds lower-pitched as it moves away from you.

In the early 20th century, astronomer Edwin Hubble made a groundbreaking discovery by observing light from distant galaxies. He found that the absorption lines in their spectra were shifted towards longer (redder) wavelengths compared to laboratory reference spectra. This indicated that the galaxies were moving away from us.

More remarkably, Hubble discovered that more distant galaxies showed greater red shifts, meaning they were receding faster. This relationship, known as Hubble's Law, demonstrates that the universe is expanding - space itself is stretching, carrying galaxies apart.

Blue shift occurs when objects move towards us, compressing light waves to shorter wavelengths. The Andromeda galaxy, for example, shows blue shift because it is moving towards the Milky Way. However, the overwhelming observation is that distant galaxies are red-shifted, providing powerful evidence that the universe began from a single point and has been expanding ever since.`
    },
    questions: [
      {
        difficulty: 'easy',
        marks: 2,
        content: 'What is red shift and what does it tell us about distant galaxies?',
        solution: 'Red shift is the increase in wavelength (shift towards red end of spectrum) of light from distant objects (1 mark). It tells us that distant galaxies are moving away from us / the universe is expanding (1 mark).',
        display_order: 1
      },
      {
        difficulty: 'medium',
        marks: 4,
        content: 'Explain how astronomers can measure the red shift of a distant galaxy and what relationship exists between red shift and distance.',
        solution: 'Astronomers analyse the absorption spectrum of light from a galaxy and compare it to laboratory reference spectra (1 mark). The characteristic absorption lines are shifted towards longer wavelengths (red end) compared to the reference (1 mark). By measuring how much the lines are shifted, they can calculate the galaxy\'s velocity (1 mark). Hubble\'s Law states that more distant galaxies have greater red shifts, meaning they are moving away faster - this shows the universe is expanding (1 mark).',
        display_order: 2
      },
      {
        difficulty: 'hard',
        marks: 5,
        content: 'A hydrogen absorption line normally at 656 nm is observed at 689 nm in light from a distant galaxy. Calculate the percentage increase in wavelength and explain what this observation, combined with data from many other galaxies, tells us about the origin and evolution of the universe.',
        solution: 'Wavelength increase = 689 - 656 = 33 nm (1 mark). Percentage increase = (33/656) × 100 = 5.0% (1 mark). This red shift indicates the galaxy is moving away from us at significant speed (1 mark). Observations of many galaxies show that all distant galaxies are red-shifted and more distant galaxies have greater red shifts (1 mark). This provides evidence that the universe is expanding from an initial point - supporting the Big Bang theory that the universe began from a singularity and has been expanding ever since (1 mark).',
        display_order: 3
      }
    ]
  },
  {
    content: {
      level: 'gcse',
      subject: 'physics',
      exam_board: 'aqa',
      topic_slug: 'space',
      subtopic_slug: 'big-bang',
      title: 'The Big Bang Theory | GCSE Physics',
      meta_description: 'Learn about the Big Bang theory and evidence supporting it including CMBR and red shift. Understand the origin and evolution of our universe for GCSE Physics.',
      introduction: `The Big Bang theory is the prevailing scientific explanation for the origin and evolution of our universe. Understanding this theory and its supporting evidence is essential for GCSE Physics, as it represents one of humanity's greatest scientific achievements.

According to the Big Bang theory, the universe began approximately 13.8 billion years ago from an incredibly hot, dense state. Space itself began expanding from this initial singularity, and continues to expand today. In the first fractions of a second, fundamental particles formed, followed by the creation of hydrogen and helium nuclei within the first few minutes.

Two key pieces of evidence support this theory. First, the red shift of distant galaxies (discussed in Hubble's observations) demonstrates that galaxies are moving apart as space expands. If we trace this expansion backwards in time, all matter converges to a single point - the Big Bang.

Second, the Cosmic Microwave Background Radiation (CMBR) provides compelling evidence. Discovered in 1965, this faint microwave radiation permeates all of space uniformly in every direction. It is the cooled remnant of the intense radiation from the early universe, when hot plasma first became transparent about 380,000 years after the Big Bang. The CMBR's temperature of 2.7 Kelvin and its near-uniform distribution match Big Bang predictions precisely.

Together, the expanding universe and CMBR form powerful evidence that our universe had a definite beginning and has been evolving ever since.`
    },
    questions: [
      {
        difficulty: 'easy',
        marks: 2,
        content: 'State two pieces of evidence that support the Big Bang theory.',
        solution: '1. Red shift of distant galaxies / all distant galaxies moving away from us / universe is expanding (1 mark). 2. Cosmic Microwave Background Radiation (CMBR) / the existence of background radiation throughout the universe (1 mark).',
        display_order: 1
      },
      {
        difficulty: 'medium',
        marks: 4,
        content: 'Explain what the Cosmic Microwave Background Radiation (CMBR) is and why it supports the Big Bang theory.',
        solution: 'CMBR is microwave radiation that fills all of space and comes uniformly from all directions (1 mark). It has a temperature of about 2.7 K (-270°C) (1 mark). It is the remnant radiation from when the early universe cooled enough for atoms to form, about 380,000 years after the Big Bang (1 mark). Its existence and uniform distribution match predictions from the Big Bang theory - the radiation has cooled as space expanded, which would be expected if the universe began in an extremely hot, dense state (1 mark).',
        display_order: 2
      },
      {
        difficulty: 'hard',
        marks: 5,
        content: 'The universe is estimated to be 13.8 billion years old. Explain how scientists determined this age and discuss why the Big Bang theory is currently the best scientific explanation for the origin of the universe.',
        solution: 'Scientists use Hubble\'s Law to calculate how fast galaxies are moving apart, then work backwards to determine when all matter would have been at the same point (1 mark). They also use CMBR data to model conditions in the early universe (1 mark). The Big Bang theory is the best explanation because: it successfully predicts the abundance of light elements (hydrogen and helium) we observe (1 mark); it explains the observed expansion of the universe through red shift data (1 mark); and it predicts the existence and properties of CMBR, which has been confirmed by satellite observations to remarkable precision (1 mark).',
        display_order: 3
      }
    ]
  },
  {
    content: {
      level: 'gcse',
      subject: 'physics',
      exam_board: 'aqa',
      topic_slug: 'space',
      subtopic_slug: 'orbits',
      title: 'Orbital Motion | GCSE Physics',
      meta_description: 'Master orbital mechanics including satellites, planets, and moons. Learn about gravitational force, orbital velocity, and period for GCSE Physics.',
      introduction: `Orbital motion occurs when an object moves in a curved path around another object due to gravitational attraction. Understanding orbits is fundamental to GCSE Physics and essential for explaining how satellites, planets, and moons maintain their paths through space.

An orbit is maintained when the gravitational force between two objects provides exactly the right centripetal force to keep the smaller object moving in its curved path. The Moon orbits Earth, Earth orbits the Sun, and artificial satellites orbit Earth, all following the same physical principles first described by Newton.

For a stable circular orbit, the orbital velocity must be precisely balanced. Too slow, and the object falls inward; too fast, and it escapes to a higher orbit or breaks free entirely. At any given altitude, there is only one specific orbital speed that produces a circular orbit.

The orbital period (time to complete one orbit) depends on the radius of the orbit. Objects closer to the central body orbit faster and have shorter periods. The Moon takes about 27 days to orbit Earth, while the International Space Station, much closer, orbits in just 90 minutes.

Satellites in specific orbits serve different purposes. Geostationary satellites orbit at 36,000 km above the equator with a 24-hour period, appearing stationary relative to Earth's surface - ideal for communications. Polar orbit satellites pass over the poles at lower altitudes, eventually covering the entire Earth's surface as the planet rotates beneath them - useful for weather observation and mapping.`
    },
    questions: [
      {
        difficulty: 'easy',
        marks: 2,
        content: 'Explain what force keeps the Moon in orbit around Earth and how this force acts.',
        solution: 'The gravitational force (gravity) between Earth and the Moon keeps the Moon in orbit (1 mark). This force acts towards the centre of Earth, providing the centripetal force needed for circular motion (1 mark).',
        display_order: 1
      },
      {
        difficulty: 'medium',
        marks: 4,
        content: 'Describe the characteristics of a geostationary orbit and explain why satellites in this orbit are useful for communications.',
        solution: 'A geostationary orbit is directly above the equator at a height of approximately 36,000 km (1 mark). The satellite has an orbital period of exactly 24 hours, matching Earth\'s rotation (1 mark). This means the satellite remains stationary relative to a point on Earth\'s surface (1 mark). This is useful for communications because satellite dishes can be permanently pointed at the satellite without needing to track its movement, enabling continuous contact with the same ground stations (1 mark).',
        display_order: 2
      },
      {
        difficulty: 'hard',
        marks: 5,
        content: 'Satellite A orbits Earth at a height of 400 km with an orbital period of 90 minutes. Satellite B orbits at a height of 800 km. Without calculations, explain which satellite has the longer orbital period and compare their orbital velocities, justifying your answers using gravitational principles.',
        solution: 'Satellite B has the longer orbital period (1 mark). At greater altitude, the satellite has a larger orbital radius, so it must travel a greater distance to complete one orbit (1 mark). Additionally, gravitational field strength is weaker at greater distances from Earth, so the gravitational/centripetal force is smaller (1 mark). This means satellite B moves more slowly (has lower orbital velocity) than satellite A (1 mark). The combination of longer orbital path and slower velocity means satellite B takes considerably longer to complete each orbit than satellite A (1 mark).',
        display_order: 3
      }
    ]
  }
];

export default gcsePhysicsSpace;
