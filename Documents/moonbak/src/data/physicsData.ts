import type {
  SyllabusChapterNode,
  SprintBlockItem,
  TopicResourceData,
  GraduatedQuestionItem
} from '../types/neetOS';

export const PHYSICS_CHAPTERS: SyllabusChapterNode[] = [
  {
    id: 'phy_ch1',
    title: 'Physical World & Measurement',
    classLevel: '11',
    category: 'General',
    topics: [
      { id: 'phy_units_dims', title: 'Units, Dimensions & Error Analysis', summary: 'SI base units, dimensional formulae, principle of homogeneity, error propagation.' },
      { id: 'phy_instruments', title: 'Measuring Instruments (Vernier & Screw Gauge)', summary: 'Least count, zero error correction, vernier calipers, screw gauge.' }
    ]
  },
  {
    id: 'phy_ch2',
    title: 'Kinematics',
    classLevel: '11',
    category: 'General',
    topics: [
      { id: 'phy_1d_motion', title: 'Motion in a Straight Line', summary: 'Distance vs displacement, instantaneous velocity, uniform acceleration equations.' },
      { id: 'phy_projectile', title: 'Projectile Motion', summary: 'Trajectory equation, time of flight, horizontal range, maximum height.' },
      { id: 'phy_relative_motion', title: 'Relative Motion & Vectors', summary: 'Vector addition, dot and cross products, relative velocity in 2D.' }
    ]
  },
  {
    id: 'phy_ch3',
    title: 'Laws of Motion',
    classLevel: '11',
    category: 'General',
    topics: [
      { id: 'phy_newton_laws', title: 'Newton Laws & Free Body Diagrams', summary: 'Inertia, momentum, F=ma, action-reaction, tension and normal force.' },
      { id: 'phy_friction', title: 'Friction & Circular Motion Dynamics', summary: 'Static vs kinetic friction, angle of repose, banking of roads, centripetal force.' }
    ]
  },
  {
    id: 'phy_ch4',
    title: 'Work, Energy & Power',
    classLevel: '11',
    category: 'General',
    topics: [
      { id: 'phy_work_energy_thm', title: 'Work-Energy Theorem & Conservative Forces', summary: 'Work done by variable force, potential energy, mechanical energy conservation.' },
      { id: 'phy_collisions', title: 'Collisions & Power', summary: 'Elastic and inelastic collisions in 1D and 2D, coefficient of restitution, instantaneous power.' }
    ]
  },
  {
    id: 'phy_ch5',
    title: 'System of Particles & Rigid Body',
    classLevel: '11',
    category: 'General',
    topics: [
      { id: 'phy_center_of_mass', title: 'Center of Mass & Linear Momentum', summary: 'COM calculation for discrete and continuous systems, conservation of momentum.' },
      { id: 'phy_rotational_motion', title: 'Torque, Angular Momentum & Moment of Inertia', summary: 'Moment of inertia theorems, torque τ=Iα, angular momentum conservation, rolling motion.' }
    ]
  },
  {
    id: 'phy_ch6',
    title: 'Gravitation',
    classLevel: '11',
    category: 'General',
    topics: [
      { id: 'phy_kepler_laws', title: 'Kepler Laws & Universal Gravitation', summary: 'Newton law of gravitation, gravitational field intensity, Kepler laws of planetary motion.' },
      { id: 'phy_grav_potential', title: 'Gravitational Potential Energy & Satellites', summary: 'Escape velocity, orbital velocity, geostationary satellites, variation of g with altitude/depth.' }
    ]
  },
  {
    id: 'phy_ch7',
    title: 'Properties of Bulk Matter & Fluids',
    classLevel: '11',
    category: 'General',
    topics: [
      { id: 'phy_elasticity', title: 'Elasticity & Hooke Law', summary: 'Young, Shear, and Bulk moduli, stress-strain curve, elastic potential energy.' },
      { id: 'phy_fluid_statics_dynamics', title: 'Pascal Law, Bernoulli Theorem & Viscosity', summary: 'Pressure variation, buoyancy, continuity equation, Bernoulli theorem, Stokes law, terminal velocity.' },
      { id: 'phy_surface_tension', title: 'Surface Tension & Capillarity', summary: 'Surface energy, excess pressure inside bubble/drop, capillary rise formula.' }
    ]
  },
  {
    id: 'phy_ch8',
    title: 'Thermodynamics & Kinetic Theory',
    classLevel: '11',
    category: 'General',
    topics: [
      { id: 'phy_thermo_laws', title: 'Thermodynamic Laws & Processes', summary: 'Zeroth, First and Second laws, isothermal, adiabatic, isobaric, isochoric processes.' },
      { id: 'phy_heat_engines', title: 'Heat Engines & Carnot Cycle', summary: 'Carnot engine efficiency, refrigerator COP, reversible/irreversible processes.' },
      { id: 'phy_ktg', title: 'Kinetic Theory of Gases & Degrees of Freedom', summary: 'RMS velocity, law of equipartition of energy, molar heat capacities Cv and Cp.' }
    ]
  },
  {
    id: 'phy_ch9',
    title: 'Oscillations & Waves',
    classLevel: '11',
    category: 'General',
    topics: [
      { id: 'phy_shm', title: 'Simple Harmonic Motion (SHM)', summary: 'Displacement, velocity, acceleration, simple pendulum, spring-mass system energy.' },
      { id: 'phy_wave_motion', title: 'Wave Motion, Organ Pipes & Doppler Effect', summary: 'Transverse and longitudinal waves, standing waves in strings/pipes, Doppler effect.' }
    ]
  },
  {
    id: 'phy_ch10',
    title: 'Electrostatics',
    classLevel: '12',
    category: 'General',
    topics: [
      { id: 'phy_coulomb_gauss', title: 'Coulomb Law & Gauss Theorem', summary: 'Electric field, flux, Gauss law applications for spheres, sheets, cylinders.' },
      { id: 'phy_potential_cap', title: 'Electric Potential & Capacitance', summary: 'Potential energy, equipotential surfaces, parallel plate capacitor with dielectric.' }
    ]
  },
  {
    id: 'phy_ch11',
    title: 'Current Electricity',
    classLevel: '12',
    category: 'General',
    topics: [
      { id: 'phy_ohm_drift', title: 'Ohm Law, Drift Velocity & Resistance', summary: 'Drift velocity formula, mobility, temperature dependence of resistivity.' },
      { id: 'phy_kirchhoff_bridges', title: 'Kirchhoff Laws, Wheatstone Bridge & Meter Bridge', summary: 'KCL, KVL, internal resistance, EMF, cells in series/parallel, potentiometer principle.' }
    ]
  },
  {
    id: 'phy_ch12',
    title: 'Magnetic Effects of Current & Magnetism',
    classLevel: '12',
    category: 'General',
    topics: [
      { id: 'phy_biot_savart', title: 'Biot-Savart & Ampere Circuital Law', summary: 'Magnetic field due to current-carrying wire, circular loop, solenoid, toroid.' },
      { id: 'phy_lorentz_force', title: 'Lorentz Force, Cyclotron & Magnetic Dipole', summary: 'Force on moving charge, force between parallel wires, torque on magnetic dipole.' }
    ]
  },
  {
    id: 'phy_ch13',
    title: 'Electromagnetic Induction & Alternating Current',
    classLevel: '12',
    category: 'General',
    topics: [
      { id: 'phy_faraday_lenz', title: 'Faraday Law, Lenz Law & Inductance', summary: 'Induced EMF, self and mutual inductance, motional EMF.' },
      { id: 'phy_ac_circuits', title: 'AC Circuits, Resonance & Transformers', summary: 'RMS values, LCR series circuit resonance, power factor, transformer efficiency.' }
    ]
  },
  {
    id: 'phy_ch14',
    title: 'Optics (Ray & Wave)',
    classLevel: '12',
    category: 'General',
    topics: [
      { id: 'phy_ray_optics', title: 'Reflection, Refraction, Lenses & Prisms', summary: 'Total internal reflection, lens maker formula, prism deviation, microscope, telescope.' },
      { id: 'phy_wave_optics', title: 'Huygens Principle, Interference & Diffraction', summary: 'Young double slit experiment fringe width, single slit diffraction pattern, polarization.' }
    ]
  },
  {
    id: 'phy_ch15',
    title: 'Modern Physics',
    classLevel: '12',
    category: 'General',
    topics: [
      { id: 'phy_photoelectric', title: 'Photoelectric Effect & Matter Waves', summary: 'Einstein photoelectric equation, stopping potential, de Broglie wavelength.' },
      { id: 'phy_bohr_atom', title: 'Bohr Model of Atom & Hydrogen Spectrum', summary: 'Bohr postulates, radius, energy levels, Rydberg constant, spectral series.' },
      { id: 'phy_nuclei', title: 'Nuclear Physics & Radioactivity', summary: 'Mass defect, binding energy curve, fission and fusion.' },
      { id: 'phy_semiconductors', title: 'Semiconductor Electronics & P-N Junction', summary: 'Intrinsic/extrinsic semiconductors, diode rectifiers, Zener diode, logic gates.' }
    ]
  }
];

export const PHYSICS_SPRINT_BLOCKS: SprintBlockItem[] = [
  {
    id: 'sprint_phy_1',
    subject: 'Physics',
    chapter: 'Kinematics',
    topic: 'Motion in a Straight Line',
    topicId: 'phy_1d_motion',
    title: '1D Kinematics Equations & Variable Validity',
    blockType: 'Physics',
    prompt: 'State the 3 core uniform acceleration kinematic equations and their exact validity requirements.',
    revealedAnswer: {
      summary: 'Kinematic equations relate displacement (s), initial velocity (u), final velocity (v), acceleration (a), and time (t).',
      formulasOrKeyFacts: [
        'v = u + a * t',
        's = u * t + 0.5 * a * t^2',
        'v^2 = u^2 + 2 * a * s',
        's_nth = u + 0.5 * a * (2n - 1)'
      ],
      siUnitsOrConstants: [
        's (m), u & v (m/s), a (m/s^2), t (s)',
        'g ≈ 9.8 m/s^2 (or 10 m/s^2 for fast NEET estimations)'
      ],
      operationalConditionsOrExceptions: [
        'STRICT CONDITION: Acceleration (a) MUST be CONSTANT in magnitude and direction.',
        'Invalid for variable acceleration. Use differential calculus: v = ds/dt, a = dv/dt = v*(dv/ds).'
      ],
      highYieldTraps: [
        'TRAP: In motion under gravity during upward ascent, taking upward as positive gives a = -g.',
        'TRAP: Distance equals magnitude of displacement ONLY if particle never turns around (velocity does not cross zero).'
      ]
    }
  },
  {
    id: 'sprint_phy_2',
    subject: 'Physics',
    chapter: 'Electrostatics',
    topic: 'Coulomb Law & Gauss Theorem',
    topicId: 'phy_coulomb_gauss',
    title: 'Coulomb Force & Gauss Flux Law',
    blockType: 'Physics',
    prompt: 'Write Coulomb law force, electric field intensity of point charge, and Gauss flux theorem.',
    revealedAnswer: {
      summary: 'Electrostatic force between charged particles and flux across closed Gaussian surfaces.',
      formulasOrKeyFacts: [
        'Coulomb Force F = (1 / (4 * π * ε0)) * (q1 * q2 / r^2)',
        'Electric Field E = (1 / (4 * π * ε0)) * (q / r^2)',
        'Gauss Law Flux Φ = ∮ E · dA = q_enclosed / ε0',
        'Field inside hollow conductor E_inside = 0'
      ],
      siUnitsOrConstants: [
        'ε0 ≈ 8.854 × 10^-12 C^2/(N·m^2)',
        '1 / (4*π*ε0) ≈ 9 × 10^9 N·m^2/C^2'
      ],
      operationalConditionsOrExceptions: [
        'Coulomb law applies strictly for stationary point charges.',
        'In a dielectric medium, dielectric constant K reduces force: F_medium = F_vacuum / K.'
      ],
      highYieldTraps: [
        'TRAP: Charge inside a conductor resides entirely on outer surface at electrostatic equilibrium.'
      ]
    }
  }
];

export const PHYSICS_RESOURCE_DATA: TopicResourceData[] = [
  {
    topicId: 'phy_1d_motion',
    topicTitle: 'Motion in a Straight Line',
    chapterTitle: 'Kinematics',
    subject: 'Physics',
    detailedNCERTNotes: 'Kinematics is the study of motion without considering forces. Displacement is the shortest straight-line vector between initial and final points. Instantaneous velocity is v = ds/dt, and acceleration is a = dv/dt. For constant acceleration, standard motion equations apply.',
    revisionShortNotes: '• v = u + at\n• s = ut + 0.5at^2\n• v^2 = u^2 + 2as\n• s_nth = u + 0.5a(2n-1)\n• For uniform motion (a=0): s = v*t.',
    conceptualWhyHowBreakdowns: 'Visual Model: Imagine plotting v vs t graph. The slope of the tangent at any point gives instantaneous acceleration, while the net area bounded under the curve represents total displacement.',
    topperTricksShortcutBank: [
      'Dimensional Trick: If a formula option for displacement lacks dimensions of meters, eliminate it instantly.',
      'Symmetry Trick: For a body thrown vertically upwards under gravity, time of ascent equals time of descent.'
    ],
    detailedNotes: 'Kinematics is the study of motion without considering forces.',
    shortNotes: 'v = u + at | s = ut + 0.5at^2 | v^2 = u^2 + 2as',
    formulaBank: [
      'v = u + a * t',
      's = u * t + 0.5 * a * t^2',
      'v^2 = u^2 + 2 * a * s'
    ],
    ncertFacts: [
      'Magnitude of displacement can never exceed total distance travelled.',
      'Zero instantaneous velocity does not imply zero acceleration.'
    ],
    commonMistakes: [
      'Applying uniform acceleration formulas when acceleration varies with position or time.'
    ],
    flashcards: [
      { id: 'fc_p1', question: 'When does distance equal magnitude of displacement?', answer: 'When a particle moves strictly in a straight line without reversing direction.' }
    ]
  }
];

export const PHYSICS_QUESTION_BANK: GraduatedQuestionItem[] = [
  {
    id: 'q_phy_e1',
    subject: 'Physics',
    chapter: 'Physical World & Measurement',
    topic: 'Units, Dimensions & Error Analysis',
    topicId: 'phy_units_dims',
    questionText: 'What is the dimensional formula for Universal Gravitational Constant G?',
    options: ['[M^-1 L^3 T^-2]', '[M^1 L^2 T^-2]', '[M^-2 L^3 T^-1]', '[M^-1 L^2 T^-2]'],
    correctOptionIndex: 0,
    explanation: 'From F = G * m1 * m2 / r^2, G = F * r^2 / (m1 * m2) = [M L T^-2] * [L^2] / [M^2] = [M^-1 L^3 T^-2].',
    solverAlgorithm: {
      standardMethod: 'Substitute dimensions of Force [M L T^-2], distance r [L], and mass m [M] into G = F*r^2 / (m1*m2).',
      topperShortcut: 'Recall force unit N = kg*m/s^2. G units are N*m^2/kg^2 = (m^3)/(kg*s^2) -> [M^-1 L^3 T^-2].',
      commonTrapWarning: 'Do not confuse G with acceleration due to gravity g [L T^-2].'
    },
    topperTrick: 'Recall G units: N*m^2/kg^2 -> [M^-1 L^3 T^-2].',
    commonTrap: 'Confusing G with g [L T^-2].',
    difficultyScore: 15,
    category: 'EASY',
    ncertPageRef: 'NCERT Class 11 Physics Vol 1, Page 32',
    difficulty: '0-20',
    questionType: 'MCQ',
    source: 'NCERT'
  },
  {
    id: 'q_phy_m1',
    subject: 'Physics',
    chapter: 'Electromagnetic Induction & Alternating Current',
    topic: 'AC Circuits, Resonance & Transformers',
    topicId: 'phy_ac_circuits',
    questionText: 'An ideal step-down transformer has 500 primary turns and 50 secondary turns. If primary voltage is 220V and primary current is 0.5A, calculate secondary voltage and secondary current.',
    options: ['22V and 5A', '2200V and 0.05A', '22V and 0.5A', '110V and 1A'],
    correctOptionIndex: 0,
    explanation: 'Vs = Vp * (Ns/Np) = 220 * (50/500) = 22V. For ideal transformer power is conserved: Vp * Ip = Vs * Is => 220 * 0.5 = 22 * Is => Is = 5A.',
    solverAlgorithm: {
      standardMethod: 'Step 1: Calculate Vs using turns ratio Ns/Np = Vs/Vp. Step 2: Use power conservation Vp*Ip = Vs*Is to solve for Is.',
      topperShortcut: 'Turns ratio is 10:1 step-down. Voltage drops 10x (220V -> 22V); Current increases 10x (0.5A -> 5A). Total time: 5 seconds.',
      commonTrapWarning: 'Avoid multiplying current instead of dividing when stepping down voltage.'
    },
    topperTrick: 'Turns ratio 10:1 -> Voltage divided by 10 (22V), Current multiplied by 10 (5A).',
    commonTrap: 'Assuming current steps down along with voltage.',
    difficultyScore: 40,
    category: 'MEDIUM',
    ncertPageRef: 'NCERT Class 12 Physics Vol 1, Page 260',
    difficulty: '20-50',
    questionType: 'MCQ',
    source: 'NCERT'
  },
  {
    id: 'q_phy_pyq2022',
    subject: 'Physics',
    chapter: 'Current Electricity',
    topic: 'Ohm Law, Drift Velocity & Resistance',
    topicId: 'phy_ohm_drift',
    questionText: 'NEET 2022 Official PYQ: As the temperature increases, the electrical resistance of:',
    options: [
      'both conductors and semiconductors increases',
      'both conductors and semiconductors decreases',
      'conductors increases and semiconductors decreases',
      'conductors decreases and semiconductors increases'
    ],
    correctOptionIndex: 2,
    explanation: 'In conductors, higher T increases lattice collisions (relaxation time τ decreases -> R increases). In semiconductors, higher T creates electron-hole pairs (carrier density n increases exponentially -> R decreases).',
    solverAlgorithm: {
      standardMethod: 'Analyze ρ = m / (n * e^2 * τ). For metals, n is constant and τ decreases with T. For semiconductors, n increases exponentially with T.',
      topperShortcut: 'Recall temperature coefficient α: positive for metals (R increases), negative for semiconductors (R decreases).',
      commonTrapWarning: 'Do not confuse conductors with insulators or alloys like Nichrome.'
    },
    topperTrick: 'Metals: +ve α (R up). Semiconductors: -ve α (R down).',
    commonTrap: 'Assuming all solids increase resistance with temperature.',
    difficultyScore: 20,
    category: 'ACTUAL_PYQ',
    pyqYear: 2022,
    ncertPageRef: 'NCERT Class 12 Physics Vol 1, Page 104',
    difficulty: '0-20',
    questionType: 'MCQ',
    source: 'Official PYQ',
    isOfficialPYQ: true
  }
];
