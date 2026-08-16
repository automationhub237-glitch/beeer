import type {
  SyllabusSubjectTree,
  SprintBlockItem,
  GraduatedQuestionItem,
  TopicResourceData
} from '../types/neetOS';

export const chemistryTree: SyllabusSubjectTree = {
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
};

export const chemistrySprintBlocks: SprintBlockItem[] = [
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
  }
];

export const chemistryQuestions: GraduatedQuestionItem[] = [
  // EASY LEVEL (0 - 20)
  {
    id: 'q_chem_easy_1',
    questionText: 'Which of the following colligative properties is most suitable for determining the molar mass of polymers and proteins?',
    options: ['Relative lowering of vapour pressure', 'Elevation in boiling point', 'Depression in freezing point', 'Osmotic pressure'],
    correctOptionIndex: 3,
    explanation: 'Osmotic pressure measurements are taken at room temperature and produce measurable pressure values even for extremely dilute polymer solutions.',
    solverAlgorithm: {
      textbookMethod: '1. Colligative property formulas: ΔTb = Kb*m, ΔTf = Kf*m, π = CRT.\n2. For high molar mass polymers, molality m is extremely small.\n3. ΔTb and ΔTf become too small to measure accurately, whereas osmotic pressure π produces significant height differential in millimeters of liquid column at room temperature.\n4. High temperatures also cause denaturation of biomolecules.',
      topperFastTrack: 'Proteins denature on heating (rules out boiling point elevation). Osmotic pressure works at room temp for macromolecules.',
      commonTrapWarning: 'Do not choose elevation in boiling point because heating degrades proteins.'
    },
    topperTrick: 'Macromolecules/proteins = Osmotic Pressure (Room temp operation).',
    commonTrap: 'Selecting boiling point elevation which denatures fragile biomolecules.',
    difficultyScore: 15,
    category: 'EASY',
    ncertPageRef: 'NCERT Class 12 Chemistry Vol 1, Page 54',
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

  // MEDIUM LEVEL (20 - 50)
  {
    id: 'q_chem_med_1',
    questionText: 'Arrange the following alkyl halides in increasing order of SN2 reactivity: 1-bromobutane, 2-bromobutane, 2-bromo-2-methylpropane.',
    options: [
      '2-bromo-2-methylpropane < 2-bromobutane < 1-bromobutane',
      '1-bromobutane < 2-bromobutane < 2-bromo-2-methylpropane',
      '2-bromobutane < 1-bromobutane < 2-bromo-2-methylpropane',
      'All have identical SN2 rate'
    ],
    correctOptionIndex: 0,
    explanation: 'SN2 mechanism rate is governed by steric hindrance: 1° (1-bromobutane) > 2° (2-bromobutane) > 3° (2-bromo-2-methylpropane).',
    solverAlgorithm: {
      textbookMethod: '1. SN2 is a 1-step concerted mechanism involving nucleophilic attack from backside.\n2. Steric hindrance at alpha carbon blocks incoming nucleophile.\n3. Classify substrates: 1-bromobutane = 1°, 2-bromobutane = 2°, 2-bromo-2-methylpropane = 3°.\n4. SN2 reactivity order: 1° > 2° > 3°.\n5. Increasing order: 3° < 2° < 1°.',
      topperFastTrack: 'SN2 = Steric hindrance sensitive = 1° > 2° > 3°. Least steric hindrance = 1-bromobutane (fastest).',
      commonTrapWarning: 'Notice question asks for INCREASING order (<), do not confuse with SN1 carbocation stability order (3° > 2° > 1°).'
    },
    topperTrick: 'SN2 rate is inversely proportional to steric hindrance (1° > 2° > 3°).',
    commonTrap: 'Confusing SN2 order with SN1 carbocation stability order.',
    difficultyScore: 35,
    category: 'MEDIUM',
    ncertPageRef: 'NCERT Class 12 Chemistry Vol 2, Page 301',
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

  // CYQ / HARD LEVEL (50+)
  {
    id: 'q_chem_hard_1',
    questionText: 'Statement I: An aqueous solution of NaCl shows an elevation in boiling point double that of a glucose solution of the same molality, assuming complete dissociation of NaCl.\nStatement II: Van t Hoff factor i for NaCl is 2, whereas for glucose i is 1.',
    options: [
      'Both Statement I and Statement II are correct',
      'Both Statement I and Statement II are incorrect',
      'Statement I is correct but Statement II is incorrect',
      'Statement I is incorrect but Statement II is correct'
    ],
    correctOptionIndex: 0,
    explanation: 'ΔTb = i * Kb * m. For NaCl, i = 2 (breaks into Na+ and Cl-). For non-electrolyte glucose, i = 1. Therefore ΔTb(NaCl) = 2 * ΔTb(glucose). Both statements are correct.',
    solverAlgorithm: {
      textbookMethod: '1. Formula: ΔTb = i * Kb * m.\n2. NaCl dissociates: NaCl -> Na+ + Cl- (2 ions => i = 2).\n3. Glucose does not dissociate (i = 1).\n4. ΔTb(NaCl) = 2 * Kb * m = 2 * ΔTb(glucose).\n5. Statement I is correct and Statement II gives the exact quantitative reason.',
      topperFastTrack: 'i(NaCl) = 2, i(glucose) = 1. Since ΔTb ∝ i, ΔTb is double. Both statements true.',
      commonTrapWarning: 'Ensure you verify whether complete dissociation is specified.'
    },
    topperTrick: 'Particle count ratio = 2 : 1 => Elevation ratio = 2 : 1.',
    commonTrap: 'Ignoring Van t Hoff factor for ionic compounds.',
    difficultyScore: 60,
    category: 'CYQ',
    ncertPageRef: 'NCERT Class 12 Chemistry Vol 1, Page 52',
    subject: 'Chemistry',
    chapter: 'Solutions & Colligative Properties',
    topic: 'Raoult Law & Colligative Properties',
    difficulty: 'CYQ',
    questionType: 'Statement-based',
    source: 'NCERT',
    isOfficialPYQ: false,
    conceptTested: 'Quantitative application of Van t Hoff factor on boiling point elevation',
    commonMistakeTrap: 'Forgetting that NaCl dissociates into 2 ions in water.'
  },

  // PREDICTED PYQ
  {
    id: 'q_chem_pred_1',
    questionText: 'NTA Trend Predicted 2025: What is the IUPAC name and total number of stereoisomers for [Co(en)2Cl2]+?',
    options: [
      'Dichloridobis(ethane-1,2-diamine)cobalt(III), 3 stereoisomers (1 trans + 2 enantiomeric cis)',
      'Dichlorobis(ethylenediamine)cobalt(II), 2 stereoisomers',
      'Bis(ethylenediamine)dichlorocobalt(III), 4 stereoisomers',
      'Dichloridobis(ethane-1,2-diamine)cobalt(II), 1 stereoisomer'
    ],
    correctOptionIndex: 0,
    explanation: 'IUPAC name: dichloridobis(ethane-1,2-diamine)cobalt(III). Isomers: Trans-form (optically inactive, symmetrical) and Cis-form (chiral, non-superimposable mirror images d and l pair). Total stereoisomers = 1 (trans) + 2 (cis d/l) = 3.',
    solverAlgorithm: {
      textbookMethod: '1. Cobalt oxidation state x + 2(0) + 2(-1) = +1 => x = +3.\n2. IUPAC: ligand names in alphabetical order: dichloridobis(ethane-1,2-diamine)cobalt(III).\n3. Geometrical isomers: Trans and Cis.\n4. Trans-isomer has plane of symmetry (optically inactive).\n5. Cis-isomer lacks plane of symmetry (pair of enantiomers: cis-d and cis-l).\n6. Total stereoisomers = 1 + 2 = 3.',
      topperFastTrack: '[M(en)2Cl2]+ is a classic NTA item: 3 total stereoisomers (trans + cis-d + cis-l).',
      commonTrapWarning: 'Do not forget optical isomerism of cis-form; cis-form resolved into d and l enantiomers.'
    },
    topperTrick: 'Octahedral [M(en)2X2]: Trans (inactive) + Cis (pair of optical isomers) = 3 total stereoisomers.',
    commonTrap: 'Counting only geometrical isomers (2) and missing optical activity of cis isomer.',
    difficultyScore: 65,
    category: 'PREDICTED_PYQ',
    ncertPageRef: 'NCERT Class 12 Chemistry Vol 1, Page 250',
    subject: 'Chemistry',
    chapter: 'Amines & Coordination Compounds',
    topic: 'Coordination Compounds, Isomerism & CFT',
    difficulty: '50+',
    questionType: 'MCQ',
    source: 'Generated Practice',
    isOfficialPYQ: false,
    conceptTested: 'Coordination compound nomenclature and geometrical/optical stereoisomerism',
    commonMistakeTrap: 'Forgetting that cis-[Co(en)2Cl2]+ is optically active.'
  },

  // ACTUAL PYQ
  {
    id: 'q_chem_actual_1',
    questionText: 'NEET 2023 Official PYQ: The spin-only magnetic moment of Mn2+ ion is (Atomic number of Mn = 25):',
    options: ['5.92 BM', '4.90 BM', '3.87 BM', '2.84 BM'],
    correctOptionIndex: 0,
    explanation: 'Mn = [Ar] 3d5 4s2. Mn2+ = [Ar] 3d5. Unpaired electrons n = 5. Spin-only magnetic moment μ = sqrt(n(n+2)) = sqrt(5*7) = sqrt(35) ≈ 5.92 BM.',
    solverAlgorithm: {
      textbookMethod: '1. Electronic configuration of Mn (Z=25): [Ar] 3d5 4s2.\n2. Mn2+ ion loses 2 electrons from 4s: [Ar] 3d5.\n3. Number of unpaired electrons n = 5.\n4. μ = sqrt(n(n+2)) = sqrt(5 * 7) = sqrt(35) ≈ 5.92 BM.',
      topperFastTrack: 'n = 5 unpaired e- => μ ≈ sqrt(5*(5+2)) = sqrt(35). Shortcut: Value is 5.point something => 5.92 BM.',
      commonTrapWarning: 'Ensure 4s electrons are removed before 3d electrons when forming transition metal cations.'
    },
    topperTrick: 'For n unpaired electrons, magnetic moment is n.92 BM (e.g. n=5 => 5.92 BM, n=3 => 3.87 BM).',
    commonTrap: 'Removing 3d electrons instead of 4s electrons first.',
    difficultyScore: 35,
    category: 'ACTUAL_PYQ',
    pyqYear: 'NEET 2023',
    ncertPageRef: 'NCERT Class 12 Chemistry Vol 1, Page 222',
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
  }
];

export const chemistryTopicResources: TopicResourceData[] = [
  {
    topicId: 'chem_raoult_colligative',
    topicTitle: 'Raoult Law & Colligative Properties',
    chapterTitle: 'Solutions & Colligative Properties',
    subject: 'Chemistry',
    detailedNotes: 'Solutions containing non-volatile solutes display lower vapour pressure than pure solvent at identical temperatures. This lowering gives rise to four primary colligative properties: relative lowering of vapour pressure, elevation of boiling point, depression of freezing point, and osmotic pressure.',
    shortNotes: '1. ΔP/P° = i*X_solute\n2. ΔTb = i*Kb*m\n3. ΔTf = i*Kf*m\n4. π = i*C*R*T\n5. Van t Hoff factor i = 1 + (n-1)α.',
    multiTierNotes: {
      tier1DetailedNCERT: 'NCERT Line-by-line: Raoult Law states that for a solution of volatile liquids, the partial vapour pressure of each component of the solution is directly proportional to its mole fraction present in solution: p1 = p1° * x1. For non-volatile solute, vapour pressure lowering Δp = p1° - p1 = p1° * x2. Relative lowering Δp / p1° = x2 = n2 / (n1 + n2). For dilute solutions where n2 << n1, Δp / p1° ≈ n2 / n1 = (w2 * M1) / (M2 * w1).',
      tier2HighYieldShort: 'High-Yield Formula Sheet:\n• ΔTb = i * Kb * m\n• ΔTf = i * Kf * m\n• π = i * C * R * T (R = 0.0821 L atm / mol K)\n• Van t Hoff Factor i = Normal Molar Mass / Abnormal Molar Mass = Observed Colligative Property / Calculated Colligative Property.\n• Complete dissociation: BaCl2 (i=3), NaCl (i=2), K4[Fe(CN)6] (i=5).',
      tier3ConceptualVisualMechanisms: 'Conceptual Mechanism: Non-volatile solute particles occupy surface site area in liquid phase. This physically obstructs solvent molecules from escaping into gas phase, reducing evaporation rate. Because vapour pressure is lowered, higher kinetic energy (temperature) is required for vapour pressure to equal 1 atm external pressure → Boiling Point Elevation.',
      tier4TopperTricksShortcuts: 'K-Square Speed Formula: For freezing point depression of aqueous solutions, ΔTf = i * 1.86 * m. If 1 molal NaCl (i=2), ΔTf = 2 * 1.86 = 3.72 °C -> Freezing point = -3.72 °C instantly.'
    },
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
    topicId: 'chem_sn1_sn2',
    topicTitle: 'SN1 vs SN2 Nucleophilic Substitution Mechanisms',
    chapterTitle: 'Haloalkanes & Haloarenes',
    subject: 'Chemistry',
    detailedNotes: 'Nucleophilic substitution reactions at sp3 hybridized carbon atoms proceed via unimolecular (SN1) or bimolecular (SN2) reaction pathways governed by substrate structure, nucleophile strength, solvent polarity, and leaving group ability.',
    shortNotes: 'SN2: 1-step, concerted, backside attack, 100% inversion (Walden), rate = k[RX][Nu], 1° > 2° >> 3°.\nSN1: 2-step, carbocation intermediate, racemization, rate = k[RX], 3° > 2° >> 1°.',
    multiTierNotes: {
      tier1DetailedNCERT: 'NCERT Mechanism: SN2 follows second order kinetics, Rate = k [CH3Cl] [OH-]. It occurs through a single transition state where C-Cl bond breaks simultaneously as C-OH bond forms. SN1 follows first order kinetics, Rate = k [(CH3)3C-Br]. Step 1 (slow, RDS): heterolytic cleavage of C-Br yields planar carbocation. Step 2 (fast): nucleophile attacks planar carbocation from either face.',
      tier2HighYieldShort: '• Solvents: Polar Aprotic (DMSO, DMF, Acetone) favor SN2. Polar Protic (H2O, EtOH) favor SN1.\n• Nucleophiles: Strong anionic nucleophiles (CN-, I-, HO-) favor SN2. Weak neutral nucleophiles (H2O, ROH) favor SN1.\n• Stereochemistry: SN2 = Inversion of configuration. SN1 = Racemization (50% retention + 50% inversion).',
      tier3ConceptualVisualMechanisms: 'OpenStax Organic Mechanism Flow:\n[SN2]: Nu:⁻ + C-X ➔ [Nu---C---X]‡ (Trigonal bipyramidal transition state with sp2 hybrid carbon) ➔ Nu-C + :X⁻ (Inverted stereocenter).\n[SN1]: R3C-X ➔ [R3C⁺] (Planar sp2 carbocation intermediate, 120° bond angles) ➔ Top/Bottom attack ➔ Racemic R3C-Nu.',
      tier4TopperTricksShortcuts: 'SATHEE Elimination Trick: Allylic and Benzylic halides undergo rapid SN1 AND SN2 reactions! Do not rule them out for either pathway.'
    },
    formulaBank: [
      'Rate_SN2 = k * [Substrate] * [Nucleophile]',
      'Rate_SN1 = k * [Substrate]',
      'Reactivity_SN2: Methyl > 1° > 2° > 3°',
      'Reactivity_SN1: 3° > 2° > 1° > Methyl'
    ],
    ncertFacts: [
      'Optically active alkyl halides undergoing SN2 reaction show 100% Walden inversion of configuration.',
      'A racemic mixture containing equal amounts of enantiomers shows zero net optical rotation.'
    ],
    commonMistakes: [
      'Assuming 3° alkyl halides can undergo SN2 substitution (they fail due to severe steric hindrance and yield elimination E2 instead).',
      'Forgetting that carbocation intermediates in SN1 can undergo hydride or methyl shifts to form more stable carbocations.'
    ],
    flashcards: [
      { id: 'fc_sn_1', question: 'What solvent type promotes SN2 over SN1?', answer: 'Polar aprotic solvents (e.g. DMSO, acetone, DMF).' }
    ]
  }
];
