import type {
  SyllabusSubjectTree,
  SprintBlockItem,
  GraduatedQuestionItem,
  TopicResourceData
} from '../types/neetOS';

export const FULL_NEET_SYLLABUS: SyllabusSubjectTree[] = [
  {
    subject: 'Physics',
    chapters: [
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
        title: 'Modern Physics (Dual Nature, Atoms, Nuclei, Semiconductors)',
        classLevel: '12',
        category: 'General',
        topics: [
          { id: 'phy_photoelectric', title: 'Photoelectric Effect & Matter Waves', summary: 'Einstein photoelectric equation, stopping potential, de Broglie wavelength.' },
          { id: 'phy_bohr_atom', title: 'Bohr Model of Atom & Hydrogen Spectrum', summary: 'Bohr postulates, radius, energy levels, Rydberg constant, spectral series.' },
          { id: 'phy_nuclei', title: 'Nuclear Physics & Radioactivity', summary: 'Mass defect, binding energy curve, fission and fusion.' },
          { id: 'phy_semiconductors', title: 'Semiconductor Electronics & P-N Junction', summary: 'Intrinsic/extrinsic semiconductors, diode rectifiers, Zener diode, logic gates.' }
        ]
      }
    ]
  },
  {
    subject: 'Chemistry',
    chapters: [
      {
        id: 'chem_ch1',
        title: 'Some Basic Concepts of Chemistry',
        classLevel: '11',
        category: 'Physical',
        topics: [
          { id: 'chem_stoichiometry', title: 'Mole Concept & Stoichiometry', summary: 'Molar mass, empirical and molecular formula, limiting reagent calculations.' },
          { id: 'chem_concentration', title: 'Concentration Terms', summary: 'Molarity, Molality, Mole fraction, Normality, ppm.' }
        ]
      },
      {
        id: 'chem_ch2',
        title: 'Structure of Atom',
        classLevel: '11',
        category: 'Physical',
        topics: [
          { id: 'chem_atomic_models', title: 'Bohr Model & Quantum Mechanical Model', summary: 'Bohr radii and energy, de Broglie relation, Heisenberg uncertainty principle.' },
          { id: 'chem_quantum_numbers', title: 'Quantum Numbers & Electronic Configuration', summary: 'Principal, azimuthal, magnetic, spin quantum numbers, Aufbau, Hund, Pauli rules.' }
        ]
      },
      {
        id: 'chem_ch3',
        title: 'Classification of Elements & Periodicity',
        classLevel: '11',
        category: 'Inorganic',
        topics: [
          { id: 'chem_periodic_trends', title: 'Periodic Trends in Atomic Properties', summary: 'Atomic radius, ionization enthalpy, electron gain enthalpy, electronegativity.' }
        ]
      },
      {
        id: 'chem_ch4',
        title: 'Chemical Bonding & Molecular Structure',
        classLevel: '11',
        category: 'Inorganic',
        topics: [
          { id: 'chem_vsepr_hyb', title: 'VSEPR Theory & Hybridization', summary: 'Molecular geometry prediction, sp, sp2, sp3, sp3d hybridization, bond angles.' },
          { id: 'chem_mot', title: 'Molecular Orbital Theory & Dipole Moment', summary: 'Bond order, magnetic nature of homonuclear diatomic molecules, dipole moment.' }
        ]
      },
      {
        id: 'chem_ch5',
        title: 'Chemical Thermodynamics',
        classLevel: '11',
        category: 'Physical',
        topics: [
          { id: 'chem_first_law_thermo', title: 'Enthalpy & First Law Calculations', summary: 'Internal energy change, work in reversible/irreversible expansion, Hess law.' },
          { id: 'chem_spontaneity', title: 'Entropy & Gibbs Free Energy', summary: 'Second and third laws, spontaneity criteria ΔG = ΔH - TΔS, equilibrium constant relation.' }
        ]
      },
      {
        id: 'chem_ch6',
        title: 'Equilibrium (Chemical & Ionic)',
        classLevel: '11',
        category: 'Physical',
        topics: [
          { id: 'chem_chemical_eq', title: 'Chemical Equilibrium & Le Chatelier Principle', summary: 'Kc and Kp relationship, factors affecting equilibrium position.' },
          { id: 'chem_ionic_eq', title: 'Ionic Equilibrium, pH & Buffer Solutions', summary: 'Ostwald dilution law, pH calculations, buffer action, solubility product Ksp.' }
        ]
      },
      {
        id: 'chem_ch7',
        title: 'Solutions & Colligative Properties',
        classLevel: '12',
        category: 'Physical',
        topics: [
          { id: 'chem_raoult_colligative', title: 'Raoult Law & Colligative Properties', summary: 'Ideal and non-ideal solutions, vapour pressure lowering, elevation in BP, depression in FP, Osmotic pressure.' },
          { id: 'chem_van_t_hoff', title: 'Van t Hoff Factor & Abnormal Molar Mass', summary: 'Dissociation and association factor i, corrected colligative equations.' }
        ]
      },
      {
        id: 'chem_ch8',
        title: 'Electrochemistry',
        classLevel: '12',
        category: 'Physical',
        topics: [
          { id: 'chem_nernst_galvanic', title: 'Galvanic Cells & Nernst Equation', summary: 'Standard electrode potential, Nernst equation for cell EMF, Gibbs energy and EMF.' },
          { id: 'chem_conductance_faraday', title: 'Conductance & Faraday Laws of Electrolysis', summary: 'Molar conductivity, Kohlrausch law, Faraday first and second laws of electrolysis.' }
        ]
      },
      {
        id: 'chem_ch9',
        title: 'Chemical Kinetics',
        classLevel: '12',
        category: 'Physical',
        topics: [
          { id: 'chem_rate_order', title: 'Rate Laws, Zero & First Order Kinetics', summary: 'Integrated rate equations, half-life formula t1/2, pseudo first order reactions.' },
          { id: 'chem_arrhenius', title: 'Arrhenius Equation & Activation Energy', summary: 'Temperature dependence of reaction rate, Ea determination, collision theory.' }
        ]
      },
      {
        id: 'chem_ch10',
        title: 'Organic Chemistry: Basic Principles & GOC',
        classLevel: '11',
        category: 'Organic',
        topics: [
          { id: 'chem_electronic_effects', title: 'Inductive, Resonance & Hyperconjugation Effects', summary: 'Electron displacement effects, carbocation/carbanion/free radical stability.' },
          { id: 'chem_stereochemistry', title: 'Isomerism & Stereochemistry', summary: 'Structural isomerism, optical activity, chirality, R/S and E/Z configurations, enantiomers.' }
        ]
      },
      {
        id: 'chem_ch11',
        title: 'Hydrocarbons',
        classLevel: '11',
        category: 'Organic',
        topics: [
          { id: 'chem_alkanes_alkenes', title: 'Alkanes, Alkenes & Markovnikov Rule', summary: 'Preparation methods, electrophilic addition, Markovnikov vs anti-Markovnikov addition.' },
          { id: 'chem_aromatic_substitution', title: 'Aromatic Hydrocarbons & Electrophilic Substitution', summary: 'Huckel 4n+2 rule, nitration, halogenation, sulfonation, Friedel-Crafts alkylation/acylation.' }
        ]
      },
      {
        id: 'chem_ch12',
        title: 'Haloalkanes & Haloarenes',
        classLevel: '12',
        category: 'Organic',
        topics: [
          { id: 'chem_sn1_sn2', title: 'SN1 vs SN2 Nucleophilic Substitution Mechanisms', summary: 'OpenStax visual flow: stereochemical inversion (SN2) vs racemization (SN1), solvent effect.' }
        ]
      },
      {
        id: 'chem_ch13',
        title: 'Alcohols, Phenols & Ethers',
        classLevel: '12',
        category: 'Organic',
        topics: [
          { id: 'chem_alcohols_phenols', title: 'Acidity, Reimer-Tiemann & Kolbe Reactions', summary: 'Lucas test, acidic character of phenols, Williamson synthesis of ethers.' }
        ]
      },
      {
        id: 'chem_ch14',
        title: 'Aldehydes, Ketones & Carboxylic Acids',
        classLevel: '12',
        category: 'Organic',
        topics: [
          { id: 'chem_nucleophilic_addition', title: 'Nucleophilic Addition, Aldol & Cannizzaro Reactions', summary: 'Tollens and Fehling tests, Aldol condensation mechanism, Cannizzaro disproportionation.' }
        ]
      },
      {
        id: 'chem_ch15',
        title: 'Amines & Coordination Compounds',
        classLevel: '12',
        category: 'Inorganic',
        topics: [
          { id: 'chem_amines_basicity', title: 'Basicity of Amines & Diazonium Salts', summary: 'Hinsberg test, basicity order in aqueous solution, diazonium coupling reactions.' },
          { id: 'chem_coordination_cft', title: 'Coordination Compounds, Isomerism & CFT', summary: 'IUPAC nomenclature, Werner theory, Crystal Field Theory d-orbital splitting, magnetic moments.' }
        ]
      }
    ]
  },
  {
    subject: 'Biology',
    chapters: [
      {
        id: 'bio_ch1',
        title: 'Diversity in Living World & Biological Classification',
        classLevel: '11',
        category: 'Botany',
        topics: [
          { id: 'bio_taxonomy', title: 'Taxonomic Hierarchy & Five Kingdom Classification', summary: 'Binomial nomenclature, Whittaker 5 kingdoms, Monera, Protista, Fungi characteristics.' }
        ]
      },
      {
        id: 'bio_ch2',
        title: 'Plant Kingdom & Animal Kingdom',
        classLevel: '11',
        category: 'Botany',
        topics: [
          { id: 'bio_plant_kingdom', title: 'Algae, Bryophytes, Pteridophytes, Gymnosperms & Angiosperms', summary: 'Alternation of generations, double fertilization in angiosperms, seed habit origin.' },
          { id: 'bio_animal_phyla', title: 'Non-Chordates & Chordates Phyla Classification', summary: 'Coelom, symmetry, germ layers, key diagnostic features from Porifera to Mammalia.' }
        ]
      },
      {
        id: 'bio_ch3',
        title: 'Cell: Structure & Functions & Biomolecules',
        classLevel: '11',
        category: 'Zoology',
        topics: [
          { id: 'bio_cell_organelles', title: 'Prokaryotic vs Eukaryotic Cell Organelles', summary: 'Endomembrane system, mitochondria, plastids, ribosome 70S vs 80S, cytoskeleton.' },
          { id: 'bio_cell_cycle', title: 'Mitosis, Meiosis & Cell Cycle Phases', summary: 'G1, S, G2 phases, crossing over in Pachytene, homologous chromosome segregation.' },
          { id: 'bio_biomolecules', title: 'Proteins, Carbohydrates, Lipids & Enzymes', summary: 'Peptide and glycosidic bonds, enzyme activation energy, competitive inhibition.' }
        ]
      },
      {
        id: 'bio_ch4',
        title: 'Plant Physiology',
        classLevel: '11',
        category: 'Botany',
        topics: [
          { id: 'bio_photosynthesis', title: 'Photosynthesis: Light Reactions & Calvin Cycle (C3/C4)', summary: 'NCERT diagram labels: Z-scheme, RuBisCO dual activity, Kranz anatomy in C4 plants.' },
          { id: 'bio_respiration_plant', title: 'Glycolysis, Krebs Cycle & Electron Transport System', summary: 'ATP yield, amphibolic pathway, respiratory quotient (RQ) values for substrates.' },
          { id: 'bio_plant_growth', title: 'Plant Growth Regulators & Photoperiodism', summary: 'Auxins, Gibberellins, Cytokinins, ABA, Ethylene, Vernalization.' }
        ]
      },
      {
        id: 'bio_ch5',
        title: 'Human Physiology',
        classLevel: '11',
        category: 'Zoology',
        topics: [
          { id: 'bio_digestion_breathing', title: 'Breathing, Respiration & Gas Transport', summary: 'Inspiration/expiration mechanism, oxygen dissociation curve, Haldane & Bohr effects.' },
          { id: 'bio_circulation_excretion', title: 'Circulatory System, Cardiac Cycle & Excretion', summary: 'ECG waves, counter-current mechanism in Henle loop, renin-angiotensin system (RAAS).' },
          { id: 'bio_neural_endocrine', title: 'Neural Control & Endocrine Regulation', summary: 'Action potential generation, impulse conduction across synapse, hormone feedback mechanisms.' }
        ]
      },
      {
        id: 'bio_ch6',
        title: 'Reproduction in Organisms & Humans',
        classLevel: '12',
        category: 'Zoology',
        topics: [
          { id: 'bio_flower_repro', title: 'Sexual Reproduction in Flowering Plants', summary: 'Microsporogenesis, megasporogenesis, embryo sac development, apomixis.' },
          { id: 'bio_human_repro', title: 'Gametogenesis, Menstrual Cycle & Embryonic Development', summary: 'Spermatogenesis vs Oogenesis, LH surge, implantation, placenta hormones.' }
        ]
      },
      {
        id: 'bio_ch7',
        title: 'Genetics & Molecular Basis of Inheritance',
        classLevel: '12',
        category: 'Zoology',
        topics: [
          { id: 'bio_mendelian', title: 'Mendelian Genetics & Inheritance Patterns', summary: 'Monohybrid (3:1), Dihybrid (9:3:3:1), incomplete dominance, codominance, pedigree analysis.' },
          { id: 'bio_molecular_inheritance', title: 'DNA Structure, Replication, Transcription & Operon', summary: 'Hershey-Chase experiment, semi-conservative replication, Lac Operon regulation.' }
        ]
      },
      {
        id: 'bio_ch8',
        title: 'Evolution & Human Health',
        classLevel: '12',
        category: 'Zoology',
        topics: [
          { id: 'bio_evolution', title: 'Darwinism, Homology/Analogy & Hardy-Weinberg', summary: 'Adaptive radiation, homologous vs analogous organs, p^2 + 2pq + q^2 = 1.' },
          { id: 'bio_human_health', title: 'Immunity, Common Pathogens & Cancer/AIDS', summary: 'Active vs passive immunity, humoral vs cell-mediated immunity, life cycle of Plasmodium.' }
        ]
      },
      {
        id: 'bio_ch9',
        title: 'Biotechnology: Principles & Applications',
        classLevel: '12',
        category: 'Botany',
        topics: [
          { id: 'bio_biotech_principles', title: 'Restriction Enzymes, Recombinant DNA & PCR', summary: 'EcoRI recognition site GAATTC, agarose gel electrophoresis, PCR denaturation/annealing/extension.' },
          { id: 'bio_biotech_apps', title: 'Bt Cotton, RNA Interference & Gene Therapy', summary: 'Cry proteins, meloidogyne incognita silencing via RNAi, ADA deficiency treatment.' }
        ]
      },
      {
        id: 'bio_ch10',
        title: 'Ecology & Environment',
        classLevel: '12',
        category: 'Botany',
        topics: [
          { id: 'bio_population_ecology', title: 'Organisms & Population Growth Curves', summary: 'Exponential growth (dN/dt = rN), Logistic growth (dN/dt = rN((K-N)/K)), age pyramids.' },
          { id: 'bio_ecosystem_biodiversity', title: 'Ecosystem Pyramids & Biodiversity Conservation', summary: 'Energy flow 10% law, ecological pyramids, in-situ vs ex-situ conservation.' }
        ]
      }
    ]
  }
];

export const FULL_SPRINT_BLOCKS: SprintBlockItem[] = [
  // BLOCK A: PHYSICS FIRST
  {
    id: 'sprint_phy_1',
    subject: 'Physics',
    chapter: 'Kinematics',
    topic: 'Motion in a Straight Line',
    title: 'Kinematics Equations & Variable Definitions',
    blockType: 'Physics',
    prompt: 'What are the 3 uniform acceleration kinematic equations and their strict validity conditions?',
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
        'g ≈ 9.8 m/s^2 (or 10 m/s^2 for NEET calculations)'
      ],
      operationalConditionsOrExceptions: [
        'STRICT CONDITION: Acceleration (a) MUST be CONSTANT in direction and magnitude.',
        'Cannot be used if acceleration varies with time (a(t)) or position (a(x)). For variable a, use integration: v = ∫a dt, s = ∫v dt.'
      ],
      highYieldTraps: [
        'TRAP: For motion under gravity during upward journey, a = -g when taking upward direction as positive.',
        'TRAP: Distance is not always equal to displacement if the particle reverses direction (v passes through zero).'
      ]
    }
  },
  {
    id: 'sprint_phy_2',
    subject: 'Physics',
    chapter: 'Kinematics',
    topic: 'Projectile Motion',
    title: 'Projectile Trajectory & Key Formulae',
    blockType: 'Physics',
    prompt: 'State the Horizontal Range, Maximum Height, Time of Flight, and Trajectory Equation for a projectile fired at angle θ.',
    revealedAnswer: {
      summary: '2D motion under constant vertical downward acceleration g with zero horizontal acceleration.',
      formulasOrKeyFacts: [
        'Time of Flight T = (2 * u * sinθ) / g',
        'Maximum Height H_max = (u^2 * sin^2 θ) / (2 * g)',
        'Horizontal Range R = (u^2 * sin(2θ)) / g',
        'Trajectory Equation: y = x * tanθ - (g * x^2) / (2 * u^2 * cos^2 θ)'
      ],
      siUnitsOrConstants: [
        'Angle θ measured with respect to horizontal',
        'Maximum range R_max occurs at θ = 45° (R_max = u^2 / g)'
      ],
      operationalConditionsOrExceptions: [
        'Assumes negligible air resistance and constant g throughout trajectory.',
        'Complementary angles θ and (90° - θ) yield the SAME horizontal range R for same initial speed u.'
      ],
      highYieldTraps: [
        'TRAP: Velocity at highest point is NOT zero! It is equal to u * cosθ directed horizontally.'
      ]
    }
  },
  {
    id: 'sprint_phy_3',
    subject: 'Physics',
    chapter: 'Electrostatics',
    topic: 'Coulomb Law & Gauss Theorem',
    title: 'Electric Field & Gauss Flux Formulae',
    blockType: 'Physics',
    prompt: 'State Coulomb Law force, Electric Field of a point charge, and Gauss Law flux expression.',
    revealedAnswer: {
      summary: 'Electrostatic forces and flux calculation across closed Gaussian surfaces.',
      formulasOrKeyFacts: [
        'Coulomb Force F = (1 / (4 * π * ε0)) * (q1 * q2 / r^2)',
        'Electric Field E = F / q = (1 / (4 * π * ε0)) * (q / r^2)',
        'Gauss Law Flux Φ = ∮ E · dA = q_enclosed / ε0',
        'Field of Conducting Sphere (r < R): E_inside = 0; Field outside (r ≥ R): E_outside = k * q / r^2'
      ],
      siUnitsOrConstants: [
        'Permittivity of free space ε0 ≈ 8.854 × 10^-12 C^2/(N·m^2)',
        'k = 1 / (4*π*ε0) ≈ 9 × 10^9 N·m^2/C^2'
      ],
      operationalConditionsOrExceptions: [
        'Coulomb Law holds strictly for stationary point charges in vacuum or dielectric medium (where F_medium = F_vacuum / K).',
        'Gauss Law is valid for any closed surface, but useful for calculating E field only when high symmetry exists.'
      ],
      highYieldTraps: [
        'TRAP: Inside a hollow or solid CONDUCTING sphere in electrostatic equilibrium, E is strictly ZERO.'
      ]
    }
  },
  {
    id: 'sprint_phy_4',
    subject: 'Physics',
    chapter: 'Current Electricity',
    topic: 'Ohm Law, Drift Velocity & Resistance',
    title: 'Drift Velocity & Microscopic Ohm Law',
    blockType: 'Physics',
    prompt: 'Write the formula for drift velocity vd in terms of electric field E and relaxation time τ, and current density J.',
    revealedAnswer: {
      summary: 'Microscopic electrical conduction in conductors.',
      formulasOrKeyFacts: [
        'Drift Velocity vd = (e * E * τ) / m',
        'Current I = n * e * A * vd',
        'Current Density J = I / A = n * e * vd = σ * E',
        'Resistivity ρ = m / (n * e^2 * τ)'
      ],
      siUnitsOrConstants: [
        'Drift velocity vd ~ 10^-4 m/s (very small!)',
        'Conductivity σ = 1 / ρ'
      ],
      operationalConditionsOrExceptions: [
        'As temperature increases in conductors, lattice vibrations increase → relaxation time τ decreases → resistivity ρ increases.',
        'In semiconductors, as T increases, charge carrier density n increases exponentially → resistivity ρ decreases.'
      ],
      highYieldTraps: [
        'TRAP: Drift velocity is proportional to electric field E, NOT proportional to length L directly.'
      ]
    }
  },

  // BLOCK B: CHEMISTRY NEXT (WITH OPENSTAX VISUAL MODELS & TRENDS)
  {
    id: 'sprint_chem_1',
    subject: 'Chemistry',
    chapter: 'Solutions & Colligative Properties',
    topic: 'Raoult Law & Colligative Properties',
    title: 'Physical Chemistry: Colligative Equations & Van t Hoff Factor',
    blockType: 'Chemistry',
    prompt: 'State the 4 colligative property equations incorporating the Van t Hoff factor i.',
    revealedAnswer: {
      summary: 'Colligative properties depend solely on the number of solute particles in solution.',
      formulasOrKeyFacts: [
        'Relative Lowering of Vapour Pressure: (P° - P) / P° = i * X_solute',
        'Elevation in Boiling Point: ΔTb = i * Kb * m',
        'Depression in Freezing Point: ΔTf = i * Kf * m',
        'Osmotic Pressure: π = i * C * R * T'
      ],
      siUnitsOrConstants: [
        'R = 0.0821 L·atm/(mol·K) or 8.314 J/(mol·K)',
        'm = molality (moles solute / kg solvent)'
      ],
      operationalConditionsOrExceptions: [
        'Valid strictly for dilute solutions of non-volatile solutes.',
        'Van t Hoff factor i = 1 + (n - 1)α for dissociation, where α is degree of ionization.'
      ],
      highYieldTraps: [
        'TRAP: For association (e.g. benzoic acid in benzene dimerizing), i = 1 + (1/n - 1)α < 1.'
      ]
    }
  },
  {
    id: 'sprint_chem_2',
    subject: 'Chemistry',
    chapter: 'Haloalkanes & Haloarenes',
    topic: 'SN1 vs SN2 Nucleophilic Substitution Mechanisms',
    title: 'OpenStax Organic Mechanism: SN1 vs SN2 Visual Flow',
    blockType: 'Chemistry',
    prompt: 'Describe the OpenStax visual mechanism flow distinguishing SN1 vs SN2 stereochemical outcomes.',
    revealedAnswer: {
      summary: 'OpenStax Organic Chemistry visual model comparing 1-step bimolecular vs 2-step unimolecular substitution.',
      formulasOrKeyFacts: [
        'SN2 Visual Flow: Concerted 1-step attack of nucleophile from BACKSIDE (180° away from leaving group) → Walden Inversion (100% stereochemical inversion like an umbrella flipping).',
        'SN1 Visual Flow: Step 1 (Slow/RDS) Leaving group departs → Planar sp2 Carbocation intermediate formed → Step 2 (Fast) Nucleophile attacks from TOP or BOTTOM face equally → 50:50 Racemic Mixture formed.',
        'Reactivity Order SN2: Methyl > 1° > 2° >> 3° (Steric hindrance dominates).',
        'Reactivity Order SN1: 3° > 2° >> 1° > Methyl (Carbocation stability dominates).'
      ],
      visualMechanismModel: 'SN2: [Nu---C---X]‡ Transition State (sp2 planar carbon with partial bonds) → Inverted Product. SN1: R3C-X → R3C+ (sp2 planar trigonal) → R3C-Nu (Racemic).',
      operationalConditionsOrExceptions: [
        'Polar Aprotic Solvents (DMSO, Acetone, DMF) favor SN2 by solvating cations without trapping nucleophiles.',
        'Polar Protic Solvents (H2O, CH3OH) favor SN1 by stabilizing the carbocation intermediate.'
      ],
      highYieldTraps: [
        'TRAP: Allylic and benzylic halides undergo rapid SN1 AND SN2 due to resonance stabilization of carbocation and reduced steric hindrance.'
      ]
    }
  },
  {
    id: 'sprint_chem_3',
    subject: 'Chemistry',
    chapter: 'Classification of Elements & Periodicity',
    topic: 'Periodic Trends in Atomic Properties',
    title: 'Inorganic Trends: Ionization Enthalpy & Anomalies',
    blockType: 'Chemistry',
    prompt: 'State the general periodic trends for Ionization Enthalpy (IE) across Period 2 and explain the anomalies for N vs O and Be vs B.',
    revealedAnswer: {
      summary: 'Ionization enthalpy increases across a period and decreases down a group with electronic configuration exceptions.',
      formulasOrKeyFacts: [
        'General Trend across Period 2: Li < B < Be < C < O < N < F < Ne',
        'Anomaly 1: Be (1s2 2s2) > B (1s2 2s2 2p1) because 2s electrons are fully filled and penetrate closer to nucleus than 2p.',
        'Anomaly 2: N (1s2 2s2 2p3) > O (1s2 2s2 2p4) because nitrogen has a half-filled 2p subshell with extra exchange energy stability.'
      ],
      operationalConditionsOrExceptions: [
        'Inert pair effect in heavy p-block elements (Tl, Pb, Bi) makes lower oxidation state (e.g. Tl+, Pb2+) more stable than group oxidation state.'
      ],
      highYieldTraps: [
        'TRAP: Electron Gain Enthalpy of Chlorine is MORE negative than Fluorine due to small size and inter-electronic repulsion in F 2p orbital.'
      ]
    }
  },

  // BLOCK C: BIOLOGY (NCERT FACTS & PROCESSES ONLY - NO FORCED FORMULAS)
  {
    id: 'sprint_bio_1',
    subject: 'Biology',
    chapter: 'Cell: Structure & Functions & Biomolecules',
    topic: 'Mitosis, Meiosis & Cell Cycle Phases',
    title: 'NCERT Biology: Cell Cycle & Meiosis Key Stages',
    blockType: 'Biology',
    prompt: 'During which sub-stage of Prophase I of Meiosis does crossing over occur, and which enzyme mediates it?',
    revealedAnswer: {
      summary: 'Meiosis involves two sequential cycles of nuclear and cell division but only a single cycle of DNA replication.',
      formulasOrKeyFacts: [
        'Sub-stages of Prophase I: Leptotene → Zygotene → Pachytene → Diplotene → Diakinesis.',
        'Zygotene: Synapsis occurs between homologous chromosomes forming bivalents/tetrads via synaptonemal complex.',
        'Pachytene: CROSSING OVER occurs between non-sister chromatids of homologous chromosomes.',
        'Enzyme: Mediated by RECOMBINASE enzyme complex.',
        'Diplotene: Dissolution of synaptonemal complex; Chiasmata (X-shaped structures) become visible.',
        'Diakinesis: Terminalisation of chiasmata.'
      ],
      operationalConditionsOrExceptions: [
        'In oocytes of some vertebrates, Diplotene can last for months or years (Dictyotene stage).'
      ],
      highYieldTraps: [
        'TRAP: Crossing over occurs between NON-SISTER chromatids of HOMOLOGOUS chromosomes (NOT sister chromatids!).'
      ]
    }
  },
  {
    id: 'sprint_bio_2',
    subject: 'Biology',
    chapter: 'Plant Physiology',
    topic: 'Photosynthesis: Light Reactions & Calvin Cycle (C3/C4)',
    title: 'NCERT Botany: C3 vs C4 Photosynthetic Pathways',
    blockType: 'Biology',
    prompt: 'Compare C3 vs C4 plants regarding primary CO2 acceptor, first stable product, and Kranz anatomy.',
    revealedAnswer: {
      summary: 'C4 plants have evolved a specialized mechanism to avoid photorespiration under high temperature and light intensity.',
      formulasOrKeyFacts: [
        'C3 Plants: Primary CO2 Acceptor = RuBP (5-carbon); First stable product = 3-PGA (3-carbon 3-phosphoglyceric acid); Enzyme = RuBisCO.',
        'C4 Plants: Primary CO2 Acceptor = PEP (3-carbon phosphoenolpyruvate) in Mesophyll cells; First stable product = OAA (4-carbon oxaloacetic acid); Enzyme = PEPcase.',
        'Kranz Anatomy: Present exclusively in C4 plants. Large bundle sheath cells surrounding vascular bundles with large Agranal Chloroplasts and thick walls impervious to gas exchange.',
        'Photorespiration (C2 Cycle): Occurs in C3 plants when RuBisCO binds O2 instead of CO2 → waste of energy with no ATP or sugar production.'
      ],
      operationalConditionsOrExceptions: [
        'C4 plants lack photorespiration and show higher temperature optimum and greater water use efficiency.'
      ],
      highYieldTraps: [
        'TRAP: Mesophyll cells of C4 plants LACK RuBisCO enzyme! RuBisCO is present ONLY in Bundle Sheath cells of C4 plants.'
      ]
    }
  },
  {
    id: 'sprint_bio_3',
    subject: 'Biology',
    chapter: 'Genetics & Molecular Basis of Inheritance',
    topic: 'DNA Structure, Replication, Transcription & Operon',
    title: 'NCERT Genetics: Lac Operon Regulation Scheme',
    blockType: 'Biology',
    prompt: 'Detail the Lac Operon components in E. coli: genes z, y, a and regulatory i gene behavior in presence/absence of lactose.',
    revealedAnswer: {
      summary: 'The Lac Operon is a polycistronic inducible operon governed by a repressor protein.',
      formulasOrKeyFacts: [
        'Regulatory i Gene: Synthesizes Repressor protein continuously (constitutive expression).',
        'Structural Genes & Enzymes Produced:',
        '  - z gene: Codes for β-galactosidase (hydrolyzes lactose into glucose + galactose).',
        '  - y gene: Codes for Permease (increases cell permeability to β-galactosides).',
        '  - a gene: Codes for Transacetylase.',
        'Absence of Inducer (Lactose/Allolactose): Repressor binds to Operator region (o) → blocks RNA Polymerase → Operon OFF.',
        'Presence of Inducer: Inducer binds Repressor → inactivates it → RNA Polymerase transcribes z, y, a genes → Operon ON.'
      ],
      operationalConditionsOrExceptions: [
        'Allolactose is the actual natural inducer that binds to the repressor protein.'
      ],
      highYieldTraps: [
        'TRAP: A very low level of expression of lac operon must be present in the cell ALL the time, otherwise lactose cannot enter the cell!'
      ]
    }
  }
];

export const FULL_QUESTION_BANK: GraduatedQuestionItem[] = [
  // EASY LEVEL (0 - 20)
  {
    id: 'q_easy_1',
    questionText: 'What is the dimension formula for Universal Gravitational Constant G?',
    options: ['[M^-1 L^3 T^-2]', '[M^1 L^2 T^-2]', '[M^-2 L^3 T^-1]', '[M^-1 L^2 T^-2]'],
    correctOptionIndex: 0,
    explanation: 'From F = G * m1 * m2 / r^2, G = F * r^2 / (m1 * m2) = [M L T^-2] * [L^2] / [M^2] = [M^-1 L^3 T^-2].',
    subject: 'Physics',
    chapter: 'Physical World & Measurement',
    topic: 'Units, Dimensions & Error Analysis',
    difficulty: '0-20',
    questionType: 'MCQ',
    source: 'NCERT',
    isOfficialPYQ: false,
    conceptTested: 'Dimensional derivation from physical law formula',
    commonMistakeTrap: 'Forgetting that mass appears in denominator yielding negative power M^-1.'
  },
  {
    id: 'q_easy_2',
    questionText: 'Which of the following colligative properties is most suitable for determining the molar mass of polymers and proteins?',
    options: ['Relative lowering of vapour pressure', 'Elevation in boiling point', 'Depression in freezing point', 'Osmotic pressure'],
    correctOptionIndex: 3,
    explanation: 'Osmotic pressure measurements are taken at room temperature and produce measurable pressure values even for extremely dilute polymer solutions.',
    subject: 'Chemistry',
    chapter: 'Solutions & Colligative Properties',
    topic: 'Raoult Law & Colligative Properties',
    difficulty: '0-20',
    questionType: 'MCQ',
    source: 'NCERT',
    isOfficialPYQ: false,
    conceptTested: 'Application of Osmotic Pressure for biomolecules',
    commonMistakeTrap: 'High temperatures during boiling point elevation denature biomolecules/proteins.'
  },
  {
    id: 'q_easy_3',
    questionText: 'Which cell organelle is known as the "Powerhouse of the Cell" and possesses its own 70S ribosomes and circular DNA?',
    options: ['Lysosome', 'Mitochondria', 'Golgi Apparatus', 'Endoplasmic Reticulum'],
    correctOptionIndex: 1,
    explanation: 'Mitochondria produce ATP via oxidative phosphorylation and contain prokaryotic-like circular DNA and 70S ribosomes.',
    subject: 'Biology',
    chapter: 'Cell: Structure & Functions & Biomolecules',
    topic: 'Prokaryotic vs Eukaryotic Cell Organelles',
    difficulty: '0-20',
    questionType: 'MCQ',
    source: 'NCERT',
    isOfficialPYQ: false,
    conceptTested: 'Semi-autonomous nature of mitochondria',
    commonMistakeTrap: 'Confusing 70S ribosomes in organelle with 80S cytosolic ribosomes.'
  },

  // MEDIUM LEVEL (20 - 50)
  {
    id: 'q_med_1',
    questionText: 'An ideal transformer has 500 primary turns and 50 secondary turns. If primary voltage is 220V and primary current is 0.5A, find secondary voltage and secondary current.',
    options: ['22V and 5A', '2200V and 0.05A', '22V and 0.5A', '110V and 1A'],
    correctOptionIndex: 0,
    explanation: 'Vs / Vp = Ns / Np => Vs = 220 * (50/500) = 22V. For 100% ideal efficiency, Ip * Vp = Is * Vs => 0.5 * 220 = Is * 22 => Is = 5A.',
    subject: 'Physics',
    chapter: 'Electromagnetic Induction & Alternating Current',
    topic: 'AC Circuits, Resonance & Transformers',
    difficulty: '20-50',
    questionType: 'MCQ',
    source: 'NCERT',
    isOfficialPYQ: false,
    conceptTested: 'Step-down transformer voltage and current transformation ratio',
    commonMistakeTrap: 'Directly multiplying current instead of recognizing inverse current relationship for step-down voltage.'
  },
  {
    id: 'q_med_2',
    questionText: 'Arrange the following alkyl halides in increasing order of SN2 reactivity: 1-bromobutane, 2-bromobutane, 2-bromo-2-methylpropane.',
    options: [
      '2-bromo-2-methylpropane < 2-bromobutane < 1-bromobutane',
      '1-bromobutane < 2-bromobutane < 2-bromo-2-methylpropane',
      '2-bromobutane < 1-bromobutane < 2-bromo-2-methylpropane',
      'All have identical SN2 rate'
    ],
    correctOptionIndex: 0,
    explanation: 'SN2 mechanism rate is governed by steric hindrance: 1° (1-bromobutane) > 2° (2-bromobutane) > 3° (2-bromo-2-methylpropane).',
    subject: 'Chemistry',
    chapter: 'Haloalkanes & Haloarenes',
    topic: 'SN1 vs SN2 Nucleophilic Substitution Mechanisms',
    difficulty: '20-50',
    questionType: 'MCQ',
    source: 'OpenStax',
    isOfficialPYQ: false,
    conceptTested: 'OpenStax steric hindrance model in SN2 reactions',
    commonMistakeTrap: 'Confusing SN2 order with SN1 carbocation stability order.'
  },

  // HARD / CYQ LEVEL (50+)
  {
    id: 'q_hard_1',
    questionText: 'Statement I: In a C4 plant, mesophyll cells contain PEPcase but lack RuBisCO.\nStatement II: Bundle sheath cells of C4 plants contain RuBisCO and undergo the Calvin cycle, producing hexose sugars.',
    options: [
      'Both Statement I and Statement II are correct',
      'Both Statement I and Statement II are incorrect',
      'Statement I is correct but Statement II is incorrect',
      'Statement I is incorrect but Statement II is correct'
    ],
    correctOptionIndex: 0,
    explanation: 'In C4 plants, spatial separation occurs: initial CO2 fixation takes place in mesophyll cells via PEPcase (no RuBisCO), and final Calvin cycle occurs in bundle sheath cells via RuBisCO.',
    subject: 'Biology',
    chapter: 'Plant Physiology',
    topic: 'Photosynthesis: Light Reactions & Calvin Cycle (C3/C4)',
    difficulty: 'CYQ',
    questionType: 'Statement-based',
    source: 'NCERT',
    isOfficialPYQ: false,
    conceptTested: 'Spatial enzyme compartmentalization in C4 photosynthesis',
    commonMistakeTrap: 'Assuming RuBisCO is present in all photosynthetic mesophyll cells.'
  },
  {
    id: 'q_hard_2',
    questionText: 'Assertion (A): On doubling the absolute temperature of an ideal gas at constant volume, the root-mean-square speed (v_rms) of gas molecules doubles.\nReason (R): v_rms is directly proportional to the square root of absolute temperature (T).',
    options: [
      'Both (A) and (R) are true and (R) is the correct explanation of (A)',
      '(A) is false but (R) is true',
      'Both (A) and (R) are true but (R) is NOT the correct explanation',
      '(A) is true but (R) is false'
    ],
    correctOptionIndex: 1,
    explanation: 'v_rms = sqrt(3RT/M). Since v_rms ∝ sqrt(T), if T doubles, v_rms increases by a factor of sqrt(2) ≈ 1.414, NOT 2. Thus Assertion (A) is false, but Reason (R) is true.',
    subject: 'Physics',
    chapter: 'Thermodynamics & Kinetic Theory',
    topic: 'Kinetic Theory of Gases & Degrees of Freedom',
    difficulty: 'CYQ',
    questionType: 'Assertion-Reason',
    source: 'NCERT',
    isOfficialPYQ: false,
    conceptTested: 'Square root temperature dependence of RMS gas velocity',
    commonMistakeTrap: 'Overlooking the square root dependence and assuming linear proportionality.'
  },

  // AUTHENTIC OFFICIAL PYQS
  {
    id: 'q_pyq_2023_1',
    questionText: 'NEET 2023 Official PYQ: The magnetic movement of Mn2+ ion is (Atomic number of Mn = 25):',
    options: ['5.92 BM', '4.90 BM', '3.87 BM', '2.84 BM'],
    correctOptionIndex: 0,
    explanation: 'Mn = [Ar] 3d5 4s2. Mn2+ = [Ar] 3d5. Unpaired electrons n = 5. Spin-only magnetic moment μ = sqrt(n(n+2)) = sqrt(5*7) = sqrt(35) ≈ 5.92 BM.',
    subject: 'Chemistry',
    chapter: 'Amines & Coordination Compounds',
    topic: 'Coordination Compounds, Isomerism & CFT',
    difficulty: '20-50',
    questionType: 'MCQ',
    source: 'Official PYQ',
    year: 2023,
    isOfficialPYQ: true,
    conceptTested: 'Spin-only magnetic moment calculation for d5 transition ion',
    commonMistakeTrap: 'Counting 4s electrons or incorrectly calculating 3d configuration of Mn2+.'
  },
  {
    id: 'q_pyq_2022_1',
    questionText: 'NEET 2022 Official PYQ: As the temperature increases, the electrical resistance of:',
    options: [
      'both conductors and semiconductors increases',
      'both conductors and semiconductors decreases',
      'conductors increases and semiconductors decreases',
      'conductors decreases and semiconductors increases'
    ],
    correctOptionIndex: 2,
    explanation: 'In conductors, higher T causes increased lattice collisions (relaxation time τ decreases → R increases). In semiconductors, higher T liberates electron-hole pairs (charge density n increases exponentially → R decreases).',
    subject: 'Physics',
    chapter: 'Current Electricity',
    topic: 'Ohm Law, Drift Velocity & Resistance',
    difficulty: '0-20',
    questionType: 'MCQ',
    source: 'Official PYQ',
    year: 2022,
    isOfficialPYQ: true,
    conceptTested: 'Temperature dependence of resistivity in metals vs semiconductors',
    commonMistakeTrap: 'Assuming all solids behave identically with temperature change.'
  }
];

export const INITIAL_TOPIC_RESOURCES: TopicResourceData[] = [
  {
    topicId: 'chem_raoult_colligative',
    topicTitle: 'Raoult Law & Colligative Properties',
    chapterTitle: 'Solutions & Colligative Properties',
    subject: 'Chemistry',
    detailedNotes: 'Solutions containing non-volatile solutes display lower vapour pressure than pure solvent at identical temperatures. This lowering gives rise to four primary colligative properties: relative lowering of vapour pressure, elevation of boiling point, depression of freezing point, and osmotic pressure.',
    shortNotes: '1. ΔP/P° = i*X_solute\n2. ΔTb = i*Kb*m\n3. ΔTf = i*Kf*m\n4. π = i*C*R*T\n5. Van t Hoff factor i = 1 + (n-1)α.',
    formulaBank: [
      'ΔTb = i * Kb * m',
      'ΔTf = i * Kf * m',
      'π = i * C * R * T',
      '(P° - P) / P° = i * X_solute',
      'i = Observed Colligative Property / Normal Colligative Property'
    ],
    ncertFacts: [
      'Colligative properties depend on the total number of solute particles, not their chemical identity.',
      'Osmotic pressure measurement is preferred for protein molar mass determination because it can be measured at room temperature with high accuracy.',
      'Isotonic solutions have equal osmotic pressure at a given temperature.'
    ],
    commonMistakes: [
      'Forgetting Van t Hoff factor i for ionic salts like Ba(NO3)2 (i = 3 upon complete dissociation).',
      'Confusing molality m (moles solute / kg solvent) with molarity M (moles solute / L solution) in boiling point elevation formulas.'
    ],
    flashcards: [
      { id: 'fc_1', question: 'What is the physical cause of boiling point elevation?', answer: 'Lowering of vapour pressure requires a higher temperature for solvent vapour pressure to equal external atmospheric pressure.' },
      { id: 'fc_2', question: 'What is the Van t Hoff factor i for K2SO4 undergoing complete ionization?', answer: 'i = 3 (produces 2 K+ ions and 1 SO4^2- ion).' }
    ]
  },
  {
    topicId: 'phy_1d_motion',
    topicTitle: 'Motion in a Straight Line',
    chapterTitle: 'Kinematics',
    subject: 'Physics',
    detailedNotes: 'Kinematics describes particle motion without considering the forces causing it. Position, displacement, velocity, and acceleration are vector quantities governing 1D motion.',
    shortNotes: 'v = u + at\ns = ut + 0.5at^2\nv^2 = u^2 + 2as\ns_nth = u + 0.5a(2n-1)',
    formulaBank: [
      'v = u + a * t',
      's = u * t + 0.5 * a * t^2',
      'v^2 = u^2 + 2 * a * s',
      's_nth = u + 0.5 * a * (2n - 1)',
      'v_avg = Total Displacement / Total Time'
    ],
    ncertFacts: [
      'Distance is always greater than or equal to magnitude of displacement.',
      'Acceleration can be non-zero even when instantaneous velocity is zero (e.g. at highest point of vertical throw).'
    ],
    commonMistakes: [
      'Applying uniform acceleration formulas when acceleration varies with time or position.',
      'Confusing average speed with magnitude of average velocity.'
    ],
    flashcards: [
      { id: 'fc_phy_1', question: 'When is distance equal to magnitude of displacement?', answer: 'When motion occurs along a straight line without reversing direction.' }
    ]
  }
];
