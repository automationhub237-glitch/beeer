import type {
  SyllabusSubjectTree,
  SprintBlockItem,
  GraduatedQuestionItem,
  TopicResourceData
} from '../types/neetOS';

export const biologyTree: SyllabusSubjectTree = {
  subject: 'Biology',
  chapters: [
    // Botany Chapters
    {
      id: 'bio_ch1',
      title: 'Diversity in Living World & Biological Classification',
      classLevel: '11',
      category: 'Botany',
      topics: [
        {
          id: 'bio_taxonomy',
          title: 'Taxonomic Hierarchy & Five Kingdom Classification',
          summary: 'Binomial nomenclature, Whittaker 5 kingdoms, Monera, Protista, Fungi characteristics.',
          status: 'AVAILABLE',
          subtopics: [
            { id: 'bio_sub_taxonomic_ranks', title: 'Species, Genus, Family, Order, Class, Phylum/Division, Kingdom', status: 'AVAILABLE' },
            { id: 'bio_sub_five_kingdoms', title: 'Monera, Protista, Fungi, Plantae & Animalia Diagnostic Criteria', status: 'AVAILABLE' }
          ]
        }
      ]
    },
    {
      id: 'bio_ch2',
      title: 'Plant Kingdom & Plant Anatomy / Morphology',
      classLevel: '11',
      category: 'Botany',
      topics: [
        {
          id: 'bio_plant_kingdom',
          title: 'Algae, Bryophytes, Pteridophytes, Gymnosperms & Angiosperms',
          summary: 'Alternation of generations, double fertilization in angiosperms, seed habit origin.',
          status: 'AVAILABLE',
          subtopics: [
            { id: 'bio_sub_algae_classes', title: 'Chlorophyceae, Phaeophyceae & Rhodophyceae Pigments & Food Reserves', status: 'AVAILABLE' },
            { id: 'bio_sub_bryo_ptero', title: 'Bryophytes (Liverworts/Mosses) & Pteridophytes Seed Habit Evolution', status: 'AVAILABLE' },
            { id: 'bio_sub_gymno_angio', title: 'Gymnosperms Naked Seeds & Angiosperm Double Fertilization', status: 'AVAILABLE' }
          ]
        }
      ]
    },
    {
      id: 'bio_ch3',
      title: 'Plant Physiology',
      classLevel: '11',
      category: 'Botany',
      topics: [
        {
          id: 'bio_photosynthesis',
          title: 'Photosynthesis: Light Reactions & Calvin Cycle (C3/C4)',
          summary: 'NCERT diagram labels: Z-scheme, RuBisCO dual activity, Kranz anatomy in C4 plants.',
          status: 'AVAILABLE',
          subtopics: [
            { id: 'bio_sub_z_scheme', title: 'Light Reactions, PS II, PS I & Z-Scheme Non-Cyclic Photophosphorylation', status: 'AVAILABLE' },
            { id: 'bio_sub_calvin_cycle', title: 'Calvin Cycle (C3) Carboxylation, Reduction & Regeneration Steps', status: 'AVAILABLE' },
            { id: 'bio_sub_c4_kranz', title: 'Hatch-Slack Pathway (C4) & Kranz Anatomy Spatial Isolation', status: 'AVAILABLE' }
          ]
        },
        {
          id: 'bio_respiration_plant',
          title: 'Glycolysis, Krebs Cycle & Electron Transport System',
          summary: 'ATP yield, amphibolic pathway, respiratory quotient (RQ) values for substrates.',
          status: 'AVAILABLE',
          subtopics: [
            { id: 'bio_sub_glycolysis', title: 'Glycolysis (EMP Pathway) Substrate Level Phosphorylation Steps', status: 'AVAILABLE' },
            { id: 'bio_sub_krebs_ets', title: 'Krebs TCA Cycle & Complex I-IV ETS Oxidative Phosphorylation', status: 'AVAILABLE' },
            { id: 'bio_sub_rq_values', title: 'Respiratory Quotient (RQ) for Carbohydrates, Fats & Proteins', status: 'AVAILABLE' }
          ]
        },
        {
          id: 'bio_plant_growth',
          title: 'Plant Growth Regulators & Photoperiodism',
          summary: 'Auxins, Gibberellins, Cytokinins, ABA, Ethylene, Vernalization.',
          status: 'AVAILABLE',
          subtopics: [
            { id: 'bio_sub_pgr_functions', title: 'Auxin Apical Dominance, Gibberellin Bolting & Ethylene Fruit Ripening', status: 'AVAILABLE' },
            { id: 'bio_sub_photoperiodism', title: 'Short Day, Long Day Plants & Vernalization Cold Treatment', status: 'AVAILABLE' }
          ]
        }
      ]
    },
    {
      id: 'bio_ch4',
      title: 'Reproduction in Plants & Ecology',
      classLevel: '12',
      category: 'Botany',
      topics: [
        {
          id: 'bio_flower_repro',
          title: 'Sexual Reproduction in Flowering Plants',
          summary: 'Microsporogenesis, megasporogenesis, embryo sac development, apomixis.',
          status: 'AVAILABLE',
          subtopics: [
            { id: 'bio_sub_pollen_embryosac', title: '7-Celled 8-Nucleate Embryo Sac Development', status: 'AVAILABLE' },
            { id: 'bio_sub_pollination_apomixis', title: 'Wind, Water & Insect Pollination Adaptations & Apomixis', status: 'AVAILABLE' }
          ]
        },
        {
          id: 'bio_population_ecology',
          title: 'Organisms, Populations & Ecosystems',
          summary: 'Exponential growth (dN/dt = rN), Logistic growth (dN/dt = rN((K-N)/K)), energy flow.',
          status: 'AVAILABLE',
          subtopics: [
            { id: 'bio_sub_growth_curves', title: 'Exponential vs Logistic Growth Curves & Age Pyramids', status: 'AVAILABLE' },
            { id: 'bio_sub_ecological_pyramids', title: '10% Energy Flow Law & Pyramids of Number, Biomass & Energy', status: 'AVAILABLE' }
          ]
        }
      ]
    },

    // Zoology Chapters
    {
      id: 'bio_ch5',
      title: 'Animal Kingdom & Tissue Organisation',
      classLevel: '11',
      category: 'Zoology',
      topics: [
        {
          id: 'bio_animal_phyla',
          title: 'Non-Chordates & Chordates Phyla Classification',
          summary: 'Coelom, symmetry, germ layers, key diagnostic features from Porifera to Mammalia.',
          status: 'AVAILABLE',
          subtopics: [
            { id: 'bio_sub_non_chordates', title: 'Porifera, Cnidaria, Platyhelminthes, Annelida, Arthropoda, Mollusca Features', status: 'AVAILABLE' },
            { id: 'bio_sub_chordates_classes', title: 'Chondrichthyes, Osteichthyes, Amphibia, Reptilia, Aves & Mammalia', status: 'AVAILABLE' }
          ]
        }
      ]
    },
    {
      id: 'bio_ch6',
      title: 'Cell Biology, Biomolecules & Cell Cycle',
      classLevel: '11',
      category: 'Zoology',
      topics: [
        {
          id: 'bio_cell_organelles',
          title: 'Prokaryotic vs Eukaryotic Cell Organelles',
          summary: 'Endomembrane system, mitochondria, plastids, ribosome 70S vs 80S, cytoskeleton.',
          status: 'AVAILABLE',
          subtopics: [
            { id: 'bio_sub_organelles_struct', title: 'Endomembrane System, Golgi, Lysosomes & Vacuoles', status: 'AVAILABLE' },
            { id: 'bio_sub_ribosomes_70s_80s', title: '70S vs 80S Ribosomes & Mitochondria Semi-Autonomy', status: 'AVAILABLE' }
          ]
        },
        {
          id: 'bio_cell_cycle',
          title: 'Mitosis, Meiosis & Cell Cycle Phases',
          summary: 'G1, S, G2 phases, crossing over in Pachytene, homologous chromosome segregation.',
          status: 'AVAILABLE',
          subtopics: [
            { id: 'bio_sub_cell_cycle_stages', title: 'Interphase G1, S (DNA Replication), G2 & M Phase', status: 'AVAILABLE' },
            { id: 'bio_sub_meiosis_prophase1', title: 'Meiosis I Prophase Sub-stages (Leptotene to Diakinesis)', status: 'AVAILABLE' }
          ]
        },
        {
          id: 'bio_biomolecules',
          title: 'Proteins, Carbohydrates, Lipids & Enzymes',
          summary: 'Peptide and glycosidic bonds, enzyme activation energy, competitive inhibition.',
          status: 'AVAILABLE',
          subtopics: [
            { id: 'bio_sub_protein_struct', title: 'Primary, Secondary, Tertiary & Quaternary Protein Structures', status: 'AVAILABLE' },
            { id: 'bio_sub_enzyme_inhibition', title: 'Enzyme Action Vmax, Km & Competitive Inhibition', status: 'AVAILABLE' }
          ]
        }
      ]
    },
    {
      id: 'bio_ch7',
      title: 'Human Physiology',
      classLevel: '11',
      category: 'Zoology',
      topics: [
        {
          id: 'bio_digestion_breathing',
          title: 'Breathing, Respiration & Gas Transport',
          summary: 'Inspiration/expiration mechanism, oxygen dissociation curve, Haldane & Bohr effects.',
          status: 'AVAILABLE',
          subtopics: [
            { id: 'bio_sub_breathing_mechanics', title: 'Inspiration/Expiration Diaphragm & Intercostal Muscle Action', status: 'AVAILABLE' },
            { id: 'bio_sub_oxygen_dissociation', title: 'Oxyhemoglobin Dissociation Sigmoid Curve & Bohr Effect Shifts', status: 'AVAILABLE' }
          ]
        },
        {
          id: 'bio_circulation_excretion',
          title: 'Circulatory System, Cardiac Cycle & Excretion',
          summary: 'ECG waves, counter-current mechanism in Henle loop, renin-angiotensin system (RAAS).',
          status: 'AVAILABLE',
          subtopics: [
            { id: 'bio_sub_cardiac_cycle_ecg', title: 'Cardiac Cycle Phases, Heart Sounds & ECG P-QRS-T Waves', status: 'AVAILABLE' },
            { id: 'bio_sub_counter_current_raas', title: 'Nephron Counter-Current Concentrating Mechanism & RAAS Regulation', status: 'AVAILABLE' }
          ]
        },
        {
          id: 'bio_neural_endocrine',
          title: 'Neural Control & Endocrine Regulation',
          summary: 'Action potential generation, impulse conduction across synapse, hormone feedback mechanisms.',
          status: 'AVAILABLE',
          subtopics: [
            { id: 'bio_sub_action_potential', title: 'Neuron Resting Potential Na+/K+ Pump & Action Potential Depolarization', status: 'AVAILABLE' },
            { id: 'bio_sub_endocrine_hormones', title: 'Pituitary, Thyroid, Adrenal & Pancreas Hormone Mechanisms', status: 'AVAILABLE' }
          ]
        }
      ]
    },
    {
      id: 'bio_ch8',
      title: 'Human Reproduction & Reproductive Health',
      classLevel: '12',
      category: 'Zoology',
      topics: [
        {
          id: 'bio_human_repro',
          title: 'Gametogenesis, Menstrual Cycle & Embryonic Development',
          summary: 'Spermatogenesis vs Oogenesis, LH surge, implantation, placenta hormones.',
          status: 'AVAILABLE',
          subtopics: [
            { id: 'bio_sub_sperm_oogenesis', title: 'Spermatogenesis vs Oogenesis Meiotic Timing Differences', status: 'AVAILABLE' },
            { id: 'bio_sub_menstrual_cycle', title: 'Follicular, Ovulatory (LH Surge) & Luteal Menstrual Phases', status: 'AVAILABLE' }
          ]
        }
      ]
    },
    {
      id: 'bio_ch9',
      title: 'Genetics, Evolution & Human Health',
      classLevel: '12',
      category: 'Zoology',
      topics: [
        {
          id: 'bio_mendelian',
          title: 'Mendelian Genetics & Inheritance Patterns',
          summary: 'Monohybrid (3:1), Dihybrid (9:3:3:1), incomplete dominance, codominance, pedigree analysis.',
          status: 'AVAILABLE',
          subtopics: [
            { id: 'bio_sub_monohybrid_dihybrid', title: 'Mendelian Ratios 3:1, 9:3:3:1 & Test Cross Definition', status: 'AVAILABLE' },
            { id: 'bio_sub_pedigree_analysis', title: 'Autosomal Dominant/Recessive & Sex-Linked Pedigree Symbols', status: 'AVAILABLE' }
          ]
        },
        {
          id: 'bio_molecular_inheritance',
          title: 'DNA Structure, Replication, Transcription & Operon',
          summary: 'Hershey-Chase experiment, semi-conservative replication, Lac Operon regulation.',
          status: 'AVAILABLE',
          subtopics: [
            { id: 'bio_sub_hershey_chase', title: 'Hershey-Chase Radioactive 35S / 32P DNA Proof', status: 'AVAILABLE' },
            { id: 'bio_sub_lac_operon_details', title: 'Lac Operon Regulatory Gene i, Operator & z, y, a Enzymes', status: 'AVAILABLE' }
          ]
        },
        {
          id: 'bio_evolution',
          title: 'Darwinism, Homology/Analogy & Hardy-Weinberg',
          summary: 'Adaptive radiation, homologous vs analogous organs, p^2 + 2pq + q^2 = 1.',
          status: 'AVAILABLE',
          subtopics: [
            { id: 'bio_sub_homology_analogy', title: 'Divergent (Homologous) vs Convergent (Analogous) Evolution', status: 'AVAILABLE' },
            { id: 'bio_sub_hardy_weinberg', title: 'Hardy-Weinberg Equilibrium Equation p^2 + 2pq + q^2 = 1', status: 'AVAILABLE' }
          ]
        },
        {
          id: 'bio_human_health',
          title: 'Immunity, Common Pathogens & Cancer/AIDS',
          summary: 'Active vs passive immunity, humoral vs cell-mediated immunity, life cycle of Plasmodium.',
          status: 'AVAILABLE',
          subtopics: [
            { id: 'bio_sub_immunity_types', title: 'Innate, Acquired, Active, Passive & B/T Cell Immunity', status: 'AVAILABLE' },
            { id: 'bio_sub_plasmodium_cycle', title: 'Plasmodium Life Cycle Human Hepatocyte & Mosquito Gut Stages', status: 'AVAILABLE' }
          ]
        },
        {
          id: 'bio_biotech_principles',
          title: 'Restriction Enzymes, Recombinant DNA & PCR',
          summary: 'EcoRI recognition site GAATTC, agarose gel electrophoresis, PCR denaturation/annealing/extension.',
          status: 'AVAILABLE',
          subtopics: [
            { id: 'bio_sub_restriction_ecori', title: 'Restriction Endonucleases EcoRI Sticky Ends GAATTC', status: 'AVAILABLE' },
            { id: 'bio_sub_pcr_steps', title: 'PCR Thermal Cycles Denaturation (94°C), Annealing (54°C), Extension (72°C)', status: 'AVAILABLE' }
          ]
        },
        {
          id: 'bio_biotech_apps',
          title: 'Bt Cotton, RNA Interference & Gene Therapy',
          summary: 'Cry proteins, meloidogyne incognita silencing via RNAi, ADA deficiency treatment.',
          status: 'AVAILABLE',
          subtopics: [
            { id: 'bio_sub_bt_cotton_cry', title: 'Bacillus thuringiensis Cry1Ac & Cry2Ab Protein Mechanism', status: 'AVAILABLE' },
            { id: 'bio_sub_rnai_silencing', title: 'RNA Interference (RNAi) dsRNA Silencing Mechanism in Nematodes', status: 'AVAILABLE' }
          ]
        }
      ]
    }
  ]
};

export const biologySprintBlocks: SprintBlockItem[] = [
  {
    id: 'sprint_bio_1',
    subject: 'Biology',
    chapter: 'Cell Biology, Biomolecules & Cell Cycle',
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
    chapter: 'Genetics, Evolution & Human Health',
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

export const biologyQuestions: GraduatedQuestionItem[] = [
  // EASY LEVEL (0 - 20)
  {
    id: 'q_bio_easy_1',
    questionText: 'Which cell organelle is known as the "Powerhouse of the Cell" and possesses its own 70S ribosomes and circular DNA?',
    options: ['Lysosome', 'Mitochondria', 'Golgi Apparatus', 'Endoplasmic Reticulum'],
    correctOptionIndex: 1,
    explanation: 'Mitochondria produce ATP via oxidative phosphorylation and contain prokaryotic-like circular DNA and 70S ribosomes.',
    solverAlgorithm: {
      textbookMethod: '1. Semi-autonomous organelles contain their own DNA and protein synthesis machinery.\n2. Mitochondria and Chloroplasts both possess single circular double-stranded DNA and 70S ribosomes.\n3. ATP synthesis occurs in inner mitochondrial membrane (cristae) via F0-F1 ATP synthase particles.',
      topperFastTrack: '70S ribosomes + circular DNA + ATP synthesis = Mitochondria.',
      commonTrapWarning: 'Eukaryotic cytoplasm contains 80S ribosomes, but mitochondria and chloroplast matrix contain 70S ribosomes.'
    },
    topperTrick: 'Endosymbiotic origin: Mitochondria have 70S (prokaryotic) ribosomes.',
    commonTrap: 'Confusing 70S organellar ribosomes with 80S cytosolic ribosomes.',
    difficultyScore: 10,
    category: 'EASY',
    ncertPageRef: 'NCERT Class 11 Biology, Page 135',
    subject: 'Biology',
    chapter: 'Cell Biology, Biomolecules & Cell Cycle',
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
    id: 'q_bio_med_1',
    questionText: 'During which sub-stage of Prophase I of meiosis does crossing over take place between non-sister chromatids of homologous chromosomes?',
    options: ['Leptotene', 'Zygotene', 'Pachytene', 'Diplotene'],
    correctOptionIndex: 2,
    explanation: 'Crossing over mediated by recombinase occurs during Pachytene stage of Prophase I.',
    solverAlgorithm: {
      textbookMethod: '1. Prophase I sub-stages in order: Leptotene -> Zygotene -> Pachytene -> Diplotene -> Diakinesis.\n2. Leptotene: Chromosomes condense.\n3. Zygotene: Synapsis forms bivalents via synaptonemal complex.\n4. Pachytene: Recombination nodules appear; crossing over occurs via recombinase enzyme.\n5. Diplotene: Chiasmata become visible.',
      topperFastTrack: 'Mnemonic: Lazy Zebras Pack Double Bags (Leptotene, Zygotene, Pachytene, Diplotene, Diakinesis). Pachytene = Packing = Crossing over!',
      commonTrapWarning: 'Chiasmata become visible in Diplotene, but crossing over itself happens earlier in Pachytene.'
    },
    topperTrick: 'Pachytene = Crossing over / Recombinase enzyme activity.',
    commonTrap: 'Selecting Diplotene (Diplotene is where chiasmata become visible, not where crossing over occurs).',
    difficultyScore: 30,
    category: 'MEDIUM',
    ncertPageRef: 'NCERT Class 11 Biology, Page 168',
    subject: 'Biology',
    chapter: 'Cell Biology, Biomolecules & Cell Cycle',
    topic: 'Mitosis, Meiosis & Cell Cycle Phases',
    difficulty: '20-50',
    questionType: 'MCQ',
    source: 'NCERT',
    isOfficialPYQ: false,
    conceptTested: 'Sub-stage specificity of crossing over in meiosis I',
    commonMistakeTrap: 'Confusing Pachytene crossing over with Diplotene chiasmata visibility.'
  },

  // CYQ / HARD LEVEL (50+)
  {
    id: 'q_bio_hard_1',
    questionText: 'Statement I: In C4 plants, initial carbon dioxide fixation occurs in mesophyll cells via PEP carboxylase, forming oxaloacetic acid (OAA).\nStatement II: Bundle sheath cells of C4 plants lack RuBisCO enzyme and perform photorespiration under high oxygen conditions.',
    options: [
      'Both Statement I and Statement II are correct',
      'Both Statement I and Statement II are incorrect',
      'Statement I is correct but Statement II is incorrect',
      'Statement I is incorrect but Statement II is correct'
    ],
    correctOptionIndex: 2,
    explanation: 'Statement I is correct (PEPcase in mesophyll fixes CO2 to 4C OAA). Statement II is INCORRECT because bundle sheath cells are RICH in RuBisCO (they lack PEPcase) and C4 plants completely LACK photorespiration.',
    solverAlgorithm: {
      textbookMethod: '1. Mesophyll cells of C4 plants have PEPcase, fix CO2 into 4-carbon OAA.\n2. OAA converts to malic/aspartic acid and transports to Bundle Sheath cells.\n3. Bundle Sheath cells possess RuBisCO, where CO2 is released for Calvin cycle.\n4. Bundle sheath cells DO NOT lack RuBisCO; mesophyll cells lack RuBisCO.\n5. C4 plants prevent photorespiration completely. Hence Statement II is false.',
      topperFastTrack: 'C4 plants NEVER undergo photorespiration and Bundle Sheath cells have high RuBisCO. Statement II is false.',
      commonTrapWarning: 'Do not mix up enzyme locations: PEPcase is in Mesophyll, RuBisCO is in Bundle Sheath.'
    },
    topperTrick: 'Mesophyll = PEPcase. Bundle Sheath = RuBisCO. C4 = NO photorespiration.',
    commonTrap: 'Believing C4 plants perform photorespiration.',
    difficultyScore: 65,
    category: 'CYQ',
    ncertPageRef: 'NCERT Class 11 Biology, Page 218',
    subject: 'Biology',
    chapter: 'Plant Physiology',
    topic: 'Photosynthesis: Light Reactions & Calvin Cycle (C3/C4)',
    difficulty: 'CYQ',
    questionType: 'Statement-based',
    source: 'NCERT',
    isOfficialPYQ: false,
    conceptTested: 'Spatial enzyme distribution and absence of photorespiration in C4 plants',
    commonMistakeTrap: 'Assuming RuBisCO is absent in bundle sheath cells or that C4 plants undergo photorespiration.'
  },

  // PREDICTED PYQ
  {
    id: 'q_bio_pred_1',
    questionText: 'NTA Trend Predicted 2025: In the Lac Operon model of E. coli, if a mutation occurs in the "i" gene such that it cannot bind to the operator region, what will be the expression state of structural genes z, y, and a?',
    options: [
      'Constitutive (continuous) expression in both presence and absence of lactose',
      'Completely non-functional expression under all conditions',
      'Inducible expression only when glucose is absent',
      'Expression occurs only when lactose is added'
    ],
    correctOptionIndex: 0,
    explanation: 'The repressor protein coded by the i gene normally binds the operator to turn operon OFF. If mutated repressor cannot bind the operator, RNA polymerase transcribes z, y, a continuously (constitutive expression).',
    solverAlgorithm: {
      textbookMethod: '1. Regulatory i gene produces repressor protein.\n2. Normal repressor binds operator (o) in absence of lactose -> operon OFF.\n3. Mutant repressor incapable of binding operator -> RNA polymerase unblocked.\n4. Transcription of z, y, a proceeds continuously regardless of lactose presence -> Constitutive expression.',
      topperFastTrack: 'Repressor cannot bind operator = No brake = Constitutive continuous ON.',
      commonTrapWarning: 'Do not confuse i- gene mutation (loss of repressor binding = constitutive ON) with iS super-repressor mutation (permanent OFF).'
    },
    topperTrick: 'No operator binding = Operon always open = Constitutive ON.',
    commonTrap: 'Thinking mutation shuts down transcription completely.',
    difficultyScore: 55,
    category: 'PREDICTED_PYQ',
    ncertPageRef: 'NCERT Class 12 Biology, Page 116',
    subject: 'Biology',
    chapter: 'Genetics, Evolution & Human Health',
    topic: 'DNA Structure, Replication, Transcription & Operon',
    difficulty: '20-50',
    questionType: 'MCQ',
    source: 'Generated Practice',
    isOfficialPYQ: false,
    conceptTested: 'Regulatory gene mutation effects on Lac Operon transcription',
    commonMistakeTrap: 'Confusing loss of repressor function with gene promoter destruction.'
  },

  // ACTUAL PYQ
  {
    id: 'q_bio_actual_1',
    questionText: 'NEET 2023 Official PYQ: Upon electrophoresis, DNA fragments move towards which electrode based on what property?',
    options: [
      'Anode (positive electrode) based on negative charge of phosphate groups',
      'Cathode (negative electrode) based on positive charge of histone proteins',
      'Anode based on size only regardless of charge',
      'Cathode based on nitrogenous base composition'
    ],
    correctOptionIndex: 0,
    explanation: 'DNA fragments are negatively charged due to phosphate backbone (PO4^3-). In agarose gel electrophoresis, negatively charged DNA molecules migrate towards the positive anode (+). Smaller fragments move faster.',
    solverAlgorithm: {
      textbookMethod: '1. DNA backbone contains negatively charged phosphate groups.\n2. Electric field causes negatively charged molecules to migrate towards positive pole (Anode).\n3. Matrix of agarose gel acts as a sieve; smaller DNA fragments move farther and faster than larger fragments.',
      topperFastTrack: 'DNA = Negative charge (Phosphate) -> Moves to Anode (+).',
      commonTrapWarning: 'Anode is POSITIVE (+ electrode) in electrolytic/electrophoresis setups; Cathode is NEGATIVE (- electrode).'
    },
    topperTrick: 'Anode = Positive (+). DNA = Negative (-). Opposites attract.',
    commonTrap: 'Confusing anode (+) with cathode (-).',
    difficultyScore: 20,
    category: 'ACTUAL_PYQ',
    pyqYear: 'NEET 2023',
    ncertPageRef: 'NCERT Class 12 Biology, Page 198',
    subject: 'Biology',
    chapter: 'Genetics, Evolution & Human Health',
    topic: 'Restriction Enzymes, Recombinant DNA & PCR',
    difficulty: '0-20',
    questionType: 'MCQ',
    source: 'Official PYQ',
    year: 2023,
    isOfficialPYQ: true,
    conceptTested: 'Charge property of DNA and direction of migration in agarose gel electrophoresis',
    commonMistakeTrap: 'Selecting cathode instead of anode for negatively charged DNA.'
  }
];

export const biologyTopicResources: TopicResourceData[] = [
  {
    topicId: 'bio_photosynthesis',
    topicTitle: 'Photosynthesis: Light Reactions & Calvin Cycle (C3/C4)',
    chapterTitle: 'Plant Physiology',
    subject: 'Biology',
    detailedNotes: 'Photosynthesis is an enzyme-regulated anabolic process where oxygenic organisms convert light energy into chemical energy stored in glucose. Light reaction occurs in thylakoids (Z-scheme ATP/NADPH synthesis) and dark reaction occurs in stroma (Calvin cycle CO2 fixation).',
    shortNotes: '1. Light Reaction: Non-cyclic photophosphorylation produces ATP + NADPH + O2. Water splitting enzyme on luminal side of PS II.\n2. C3 Cycle: Acceptor = RuBP (5C), Product = 3-PGA (3C).\n3. C4 Cycle: Acceptor = PEP (3C) in mesophyll, Product = OAA (4C), Kranz anatomy present.',
    multiTierNotes: {
      tier1DetailedNCERT: 'NCERT Line-by-Line: Photosynthesis takes place in chloroplasts. Light reactions (photochemical phase) include light absorption, water splitting, oxygen release, and formation of high-energy chemical intermediates ATP and NADPH. Splitting of water 2H2O -> 4H+ + O2 + 4e- is associated with PS II located on the inner side of thylakoid membrane. Calvin cycle has 3 steps: Carboxylation (RuBP + CO2 -> 2 x 3-PGA), Reduction (requires 2 ATP + 2 NADPH per CO2), and Regeneration of RuBP (requires 1 ATP).',
      tier2HighYieldShort: '• To make 1 Glucose molecule (6 CO2 fixed):\n  - C3 Plant requires 18 ATP and 12 NADPH.\n  - C4 Plant requires 30 ATP and 12 NADPH.\n• RuBisCO has dual affinity: carboxylase under high CO2/low O2, oxygenase under high O2/high temp.',
      tier3ConceptualVisualMechanisms: 'NCERT Diagram Mechanism: Z-Scheme electron flow: PS II (P680) ➔ Pheophytin ➔ Plastoquinone ➔ Cytochrome b6f ➔ Plastocyanin ➔ PS I (P700) ➔ Ferredoxin ➔ NADP+ Reductase ➔ NADPH. Proton accumulation inside thylakoid lumen creates proton gradient driving ATP Synthase (CF0-CF1).',
      tier4TopperTricksShortcuts: 'Classification Mnemonic for C4 plants: "Maize and Sugarcane Sorghum Stun in C4 Sun" (Maize, Sugarcane, Sorghum are C4 plants with Kranz anatomy).'
    },
    formulaBank: [
      '6 CO2 + 12 H2O + Light ➔ C6H12O6 + 6 O2 + 6 H2O',
      '1 CO2 (C3) ➔ 3 ATP + 2 NADPH',
      '1 CO2 (C4) ➔ 5 ATP + 2 NADPH',
      '1 Glucose (C3) ➔ 18 ATP + 12 NADPH',
      '1 Glucose (C4) ➔ 30 ATP + 12 NADPH'
    ],
    ncertFacts: [
      'Water splitting complex (oxygen evolving complex) is associated with PS II and physically located on the inner side (lumen side) of the thylakoid membrane.',
      'RuBisCO is the most abundant protein in the entire biosphere.',
      'C4 plants have higher optimum temperature (30-45 °C) compared to C3 plants (20-25 °C).'
    ],
    commonMistakes: [
      'Confusing electron donor for PS II (Water) with electron donor for PS I (Plastocyanin).',
      'Assuming C4 plants require less ATP than C3 plants for glucose synthesis (C4 requires 30 ATP vs 18 ATP in C3).'
    ],
    flashcards: [
      { id: 'fc_bio_1', question: 'How many ATP and NADPH are required to synthesize 1 molecule of glucose in C3 plants?', answer: '18 ATP and 12 NADPH.' },
      { id: 'fc_bio_2', question: 'Where is the primary site of carboxylation in C4 plants?', answer: 'Mesophyll cells (catalyzed by PEP carboxylase).' }
    ]
  }
];
