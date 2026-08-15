import type {
  SyllabusChapterNode,
  SprintBlockItem,
  TopicResourceData,
  GraduatedQuestionItem
} from '../types/neetOS';

export const CHEMISTRY_CHAPTERS: SyllabusChapterNode[] = [
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
    title: 'Equilibrium',
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
];

export const CHEMISTRY_SPRINT_BLOCKS: SprintBlockItem[] = [
  {
    id: 'sprint_chem_1',
    subject: 'Chemistry',
    chapter: 'Solutions & Colligative Properties',
    topic: 'Raoult Law & Colligative Properties',
    topicId: 'chem_raoult_colligative',
    title: 'Colligative Property Equations & Van t Hoff Factor',
    blockType: 'Chemistry',
    prompt: 'Write the 4 colligative property equations incorporating the Van t Hoff factor i.',
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
    topicId: 'chem_sn1_sn2',
    title: 'OpenStax Mechanism Model: SN1 vs SN2 vs E1 vs E2',
    blockType: 'Chemistry',
    prompt: 'Detail the OpenStax visual mechanism model comparing SN1 vs SN2 stereochemical outcomes and solvent effects.',
    revealedAnswer: {
      summary: 'OpenStax Organic Chemistry mechanism model comparing bimolecular concerted vs unimolecular stepwise substitution.',
      formulasOrKeyFacts: [
        'SN2 Mechanism: 1-step concerted backside attack of nucleophile -> 100% Walden Inversion (sp2 pentacoordinate transition state [Nu---C---X]‡).',
        'SN1 Mechanism: 2-step process. Step 1 (RDS) C-X cleavage forming sp2 planar carbocation intermediate -> Step 2 nucleophile attacks from either face -> 50:50 Racemic Mixture.',
        'SN2 rate order: Methyl > 1° > 2° >> 3° (Steric hindrance governs).',
        'SN1 rate order: 3° > 2° >> 1° > Methyl (Carbocation resonance/hyperconjugation governs).'
      ],
      visualMechanismModel: 'SN2: [Nu---C---X]‡ -> Inverted Product (Walden Inversion). SN1: R3C-X -> R3C+ (sp2 trigonal planar) -> R3C-Nu (Racemic mixture).',
      operationalConditionsOrExceptions: [
        'Polar Aprotic Solvents (DMSO, Acetone, DMF) favor SN2.',
        'Polar Protic Solvents (H2O, CH3OH) favor SN1 by solvating carbocations and halide leaving groups.'
      ],
      highYieldTraps: [
        'TRAP: Allylic and benzylic halides undergo fast SN1 AND SN2 reactions.'
      ]
    }
  }
];

export const CHEMISTRY_RESOURCE_DATA: TopicResourceData[] = [
  {
    topicId: 'chem_raoult_colligative',
    topicTitle: 'Raoult Law & Colligative Properties',
    chapterTitle: 'Solutions & Colligative Properties',
    subject: 'Chemistry',
    detailedNCERTNotes: 'Non-volatile solutes lower the vapour pressure of a solvent. Colligative properties depend on the relative number of solute particles. The four primary colligative properties are vapour pressure lowering, elevation of boiling point, depression of freezing point, and osmotic pressure.',
    revisionShortNotes: '• ΔP/P° = i*X_solute\n• ΔTb = i*Kb*m\n• ΔTf = i*Kf*m\n• π = i*C*R*T\n• Van t Hoff factor i = 1 + (n-1)α for dissociation.',
    conceptualWhyHowBreakdowns: 'Visual Model: Non-volatile solute particles physically block solvent molecules from reaching the liquid surface, reducing the escaping rate into vapour phase. A higher temperature is needed for vapour pressure to equal 1 atm.',
    topperTricksShortcutBank: [
      'Van t Hoff Trick: Count total ions per formula unit. Ba(NO3)2 gives 1 Ba2+ + 2 NO3- = 3 ions, so i = 3 at 100% ionization.',
      'Molar Mass Trick: Osmotic pressure is preferred for macromolecule molar mass because measurements occur at room temperature.'
    ],
    detailedNotes: 'Non-volatile solutes lower solvent vapour pressure.',
    shortNotes: 'ΔTb = i*Kb*m | ΔTf = i*Kf*m | π = i*C*R*T',
    formulaBank: [
      'ΔTb = i * Kb * m',
      'ΔTf = i * Kf * m',
      'π = i * C * R * T',
      '(P° - P) / P° = i * X_solute'
    ],
    ncertFacts: [
      'Colligative properties depend on solute particle number, not chemical identity.',
      'Osmotic pressure is measured at room temperature making it ideal for proteins.'
    ],
    commonMistakes: [
      'Forgetting Van t Hoff factor i for ionic salts like NaCl or BaCl2.'
    ],
    flashcards: [
      { id: 'fc_c1', question: 'What is the Van t Hoff factor i for K2SO4 assuming 100% dissociation?', answer: 'i = 3 (produces 2 K+ and 1 SO4^2- ion).' }
    ]
  }
];

export const CHEMISTRY_QUESTION_BANK: GraduatedQuestionItem[] = [
  {
    id: 'q_chem_e1',
    subject: 'Chemistry',
    chapter: 'Solutions & Colligative Properties',
    topic: 'Raoult Law & Colligative Properties',
    topicId: 'chem_raoult_colligative',
    questionText: 'Which colligative property is best suited for determining the molar mass of polymers and proteins?',
    options: ['Relative lowering of vapour pressure', 'Elevation in boiling point', 'Depression in freezing point', 'Osmotic pressure'],
    correctOptionIndex: 3,
    explanation: 'Osmotic pressure measurements are carried out at room temperature and yield measurable magnitude even for extremely dilute polymer solutions.',
    solverAlgorithm: {
      standardMethod: 'Compare experimental conditions: Boiling point elevation denatures proteins. Vapour pressure lowering is too small for heavy polymers. Osmotic pressure gives large measurable pressure values at room temperature.',
      topperShortcut: 'Biomolecules + Molar Mass -> Osmotic Pressure (Room T, no thermal denaturation).',
      commonTrapWarning: 'High temperatures during boiling point elevation destroy protein tertiary structure.'
    },
    topperTrick: 'Biomolecules/Polymers -> Osmotic Pressure.',
    commonTrap: 'Selecting boiling point elevation which denatures proteins.',
    difficultyScore: 15,
    category: 'EASY',
    ncertPageRef: 'NCERT Class 12 Chemistry Vol 1, Page 53',
    difficulty: '0-20',
    questionType: 'MCQ',
    source: 'NCERT'
  },
  {
    id: 'q_chem_m1',
    subject: 'Chemistry',
    chapter: 'Haloalkanes & Haloarenes',
    topic: 'SN1 vs SN2 Nucleophilic Substitution Mechanisms',
    topicId: 'chem_sn1_sn2',
    questionText: 'Arrange the following alkyl halides in increasing order of SN2 reaction rate: 1-bromobutane, 2-bromobutane, 2-bromo-2-methylpropane.',
    options: [
      '2-bromo-2-methylpropane < 2-bromobutane < 1-bromobutane',
      '1-bromobutane < 2-bromobutane < 2-bromo-2-methylpropane',
      '2-bromobutane < 1-bromobutane < 2-bromo-2-methylpropane',
      'All three have identical SN2 rates'
    ],
    correctOptionIndex: 0,
    explanation: 'SN2 mechanism speed is governed by steric hindrance at the reaction center: 1° (1-bromobutane) > 2° (2-bromobutane) > 3° (2-bromo-2-methylpropane).',
    solverAlgorithm: {
      standardMethod: 'Identify degree of alkyl halides: 1-bromobutane is 1°, 2-bromobutane is 2°, 2-bromo-2-methylpropane is 3°. SN2 rate order is 1° > 2° > 3°.',
      topperShortcut: 'SN2 = Steric hindrance governs (1° > 2° > 3°). Reverse for SN1.',
      commonTrapWarning: 'Do not confuse SN2 steric order with SN1 carbocation stability order.'
    },
    topperTrick: 'SN2: 1° > 2° > 3° (less bulky = faster).',
    commonTrap: 'Mixing up SN2 with SN1 carbocation stability.',
    difficultyScore: 35,
    category: 'MEDIUM',
    ncertPageRef: 'NCERT Class 12 Chemistry Vol 2, Page 301',
    difficulty: '20-50',
    questionType: 'MCQ',
    source: 'OpenStax'
  },
  {
    id: 'q_chem_pyq2023',
    subject: 'Chemistry',
    chapter: 'Amines & Coordination Compounds',
    topic: 'Coordination Compounds, Isomerism & CFT',
    topicId: 'chem_coordination_cft',
    questionText: 'NEET 2023 Official PYQ: The spin-only magnetic moment value of Mn2+ ion is (Atomic number of Mn = 25):',
    options: ['5.92 BM', '4.90 BM', '3.87 BM', '2.84 BM'],
    correctOptionIndex: 0,
    explanation: 'Mn = [Ar] 3d5 4s2. Mn2+ = [Ar] 3d5. Unpaired electrons n = 5. Spin-only magnetic moment μ = sqrt(n(n+2)) = sqrt(5*7) = sqrt(35) ≈ 5.92 BM.',
    solverAlgorithm: {
      standardMethod: 'Step 1: Write ground state electronic configuration of Mn (25) -> [Ar] 3d5 4s2. Step 2: Remove 2 electrons for Mn2+ -> [Ar] 3d5. Step 3: Count unpaired electrons n = 5. Step 4: Apply μ = sqrt(n(n+2)) = sqrt(35) ≈ 5.92 BM.',
      topperShortcut: 'Shortcut for μ: n unpaired electrons -> μ = n.87 to n.92 BM. Here n = 5 -> μ ≈ 5.92 BM.',
      commonTrapWarning: 'Do not remove 3d electrons before 4s electrons when forming Mn2+.'
    },
    topperTrick: 'n unpaired electrons -> μ ≈ n.9 BM (for n=5 -> 5.92 BM).',
    commonTrap: 'Incorrectly removing 3d electrons instead of 4s electrons.',
    difficultyScore: 30,
    category: 'ACTUAL_PYQ',
    pyqYear: 2023,
    ncertPageRef: 'NCERT Class 12 Chemistry Vol 1, Page 248',
    difficulty: '20-50',
    questionType: 'MCQ',
    source: 'Official PYQ',
    isOfficialPYQ: true
  }
];
