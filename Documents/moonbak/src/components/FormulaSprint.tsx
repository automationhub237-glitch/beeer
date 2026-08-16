import React, { useState, useEffect } from 'react';
import { useOS } from '../context/OSContext';
import {
  Zap,
  Clock,
  CheckCircle2,
  AlertTriangle,
  Eye,
  EyeOff,
  BookOpen,
  Award,
  Sparkles,
  RotateCcw,
  HelpCircle,
  Lightbulb,
  Filter,
  Check,
  X,
  Shuffle
} from 'lucide-react';
import type { QuestionDifficulty, Subject } from '../types/neetOS';

export interface FormulaFlashItem {
  id: string;
  subject: Subject;
  chapter: string;
  topic: string;
  title: string;
  prompt: string;
  formulaOrFact: string;
  siUnitsOrNote?: string;
  highYieldTrap?: string;
}

export const MASTER_FORMULA_FLASH_ITEMS: FormulaFlashItem[] = [
  // Physics Formulas
  {
    id: 'ff_phy_1',
    subject: 'Physics',
    chapter: 'Kinematics',
    topic: 'Motion in a Straight Line',
    title: 'Uniform Acceleration Kinematic Equations',
    prompt: 'State the 3 core kinematic equations for uniform acceleration and the nth second formula.',
    formulaOrFact: '1) v = u + at\n2) s = ut + 0.5 a t²\n3) v² = u² + 2as\n4) s_nth = u + 0.5 a (2n - 1)',
    siUnitsOrNote: 'a MUST be constant in magnitude and direction.',
    highYieldTrap: 'TRAP: For motion under gravity during upward flight, taking upward as positive gives a = -g.'
  },
  {
    id: 'ff_phy_2',
    subject: 'Physics',
    chapter: 'Kinematics',
    topic: 'Projectile Motion',
    title: 'Projectile Trajectory & Range',
    prompt: 'Recall the formulas for Time of Flight (T), Maximum Height (H), and Horizontal Range (R).',
    formulaOrFact: '• T = (2 u sinθ) / g\n• H = (u² sin²θ) / (2g)\n• R = (u² sin 2θ) / g\n• Trajectory: y = x tanθ - (g x²) / (2 u² cos²θ)',
    siUnitsOrNote: 'Max range R_max occurs at θ = 45°. Angles θ and (90°-θ) yield identical range.',
    highYieldTrap: 'TRAP: Horizontal velocity u cosθ is constant; vertical velocity at peak is zero, NOT total velocity.'
  },
  {
    id: 'ff_phy_3',
    subject: 'Physics',
    chapter: 'Laws of Motion',
    topic: 'Friction & Circular Motion Dynamics',
    title: 'Banking of Roads & Centripetal Acceleration',
    prompt: 'What is the optimum banking angle θ for a road without friction, and centripetal acceleration ac?',
    formulaOrFact: '• Optimum Banking Angle: tanθ = v² / (r g)\n• Maximum Safe Speed (with friction μ): v_max = sqrt[ r g (μ + tanθ) / (1 - μ tanθ) ]\n• Centripetal Acceleration: ac = v² / r = ω² r',
    siUnitsOrNote: 'Angle θ measured with respect to horizontal road surface.',
    highYieldTrap: 'TRAP: Centripetal force is NOT an additional force; it is the net real force directed toward center.'
  },
  {
    id: 'ff_phy_4',
    subject: 'Physics',
    chapter: 'Gravitation',
    topic: 'Gravitational Potential Energy & Satellites',
    title: 'Escape Velocity & Orbital Speed',
    prompt: 'Write the formulas for Escape Velocity (ve) from Earth surface and Orbital Speed (vo) of a low-altitude satellite.',
    formulaOrFact: '• Escape Velocity: ve = sqrt(2 G M / R) = sqrt(2 g R) ≈ 11.2 km/s\n• Orbital Velocity: vo = sqrt(G M / R) = sqrt(g R) ≈ 7.9 km/s\n• Relation: ve = sqrt(2) * vo',
    siUnitsOrNote: 'Escape velocity is independent of launch angle and mass of projected particle.',
    highYieldTrap: 'TRAP: Total mechanical energy of a bound satellite is negative: E = -G M m / (2 r).'
  },
  {
    id: 'ff_phy_5',
    subject: 'Physics',
    chapter: 'Electrostatics',
    topic: 'Coulomb Law & Gauss Theorem',
    title: 'Coulomb Law & Gauss Flux Formula',
    formulaOrFact: '• Coulomb Force: F = (1 / (4πε0)) * (q1 q2 / r²)\n• Gauss Law Flux: Φ = ∮ E · dA = q_enclosed / ε0\n• Field of Point Charge: E = k q / r²',
    prompt: 'State Coulomb Force formula in medium and Gauss Law flux expression.',
    siUnitsOrNote: 'k = 1 / (4πε0) ≈ 9 × 10⁹ N m²/C². In medium, F_medium = F_vacuum / K.',
    highYieldTrap: 'TRAP: Electric field inside a hollow or solid CONDUCTING sphere is strictly ZERO.'
  },
  {
    id: 'ff_phy_6',
    subject: 'Physics',
    chapter: 'Current Electricity',
    topic: 'Ohm Law, Drift Velocity & Resistance',
    title: 'Drift Velocity Microscopic Conduction',
    prompt: 'State the formula for drift velocity vd, current I, and current density J.',
    formulaOrFact: '• Drift Velocity: vd = (e E τ) / m\n• Current: I = n e A vd\n• Current Density: J = I / A = n e vd = σ E\n• Resistivity: ρ = m / (n e² τ)',
    siUnitsOrNote: 'vd ~ 10⁻⁴ m/s. τ = relaxation time between electron collisions.',
    highYieldTrap: 'TRAP: In conductors, resistivity increases with temperature because τ decreases.'
  },
  {
    id: 'ff_phy_7',
    subject: 'Physics',
    chapter: 'Electromagnetic Induction & Alternating Current',
    topic: 'Faraday Law, Lenz Law & Inductance',
    title: 'Induced EMF & Motional EMF',
    prompt: 'Write Faraday Law for induced EMF, Motional EMF in moving rod, and EMF in rotating rod.',
    formulaOrFact: '• Faraday Law: ε = - dΦ/dt\n• Motional EMF (Straight Rod): ε = B v L\n• Rotating Rod (Length L, Angular Velocity ω): ε = 0.5 B ω L²',
    siUnitsOrNote: 'Negative sign represents Lenz Law (energy conservation).',
    highYieldTrap: 'TRAP: Induced electric fields are non-conservative (∮ E · dl = -dΦ/dt ≠ 0).'
  },
  {
    id: 'ff_phy_8',
    subject: 'Physics',
    chapter: 'Electromagnetic Induction & Alternating Current',
    topic: 'AC Circuits, Resonance & Transformers',
    title: 'LCR Series Circuit Resonance & Transformer Ratio',
    prompt: 'State the resonant frequency fr, quality factor Q, and ideal transformer turns ratio.',
    formulaOrFact: '• Resonant Frequency: fr = 1 / (2π sqrt(L C))\n• Quality Factor Q = (1 / R) * sqrt(L / C) = ω0 L / R\n• Transformer Ratio: Vs / Vp = Ns / Np = Ip / Is',
    siUnitsOrNote: 'At resonance, impedance Z = R (minimum), current I is maximum, phase angle ϕ = 0.',
    highYieldTrap: 'TRAP: Transformer works ONLY on AC voltage, NOT on constant DC voltage.'
  },
  {
    id: 'ff_phy_9',
    subject: 'Physics',
    chapter: 'Optics (Ray & Wave)',
    topic: 'Huygens Principle, Interference & Diffraction',
    title: 'Young Double Slit Interference Fringe Width',
    prompt: 'State the fringe width β formula in YDSE and conditions for constructive/destructive interference.',
    formulaOrFact: '• Fringe Width: β = (λ D) / d\n• Constructive Interference: Path difference Δx = n λ  (Phase diff Δϕ = 2nπ)\n• Destructive Interference: Path difference Δx = (2n - 1) λ / 2',
    siUnitsOrNote: 'D = slit to screen distance, d = distance between two coherent slits.',
    highYieldTrap: 'TRAP: Immersing entire YDSE setup in liquid of refractive index μ reduces fringe width: β\' = β / μ.'
  },

  // Physical Chemistry Formulas
  {
    id: 'ff_chem_1',
    subject: 'Chemistry',
    chapter: 'Solutions & Colligative Properties',
    topic: 'Raoult Law & Colligative Properties',
    title: 'Colligative Property Equations & Van t Hoff Factor',
    prompt: 'State all 4 colligative property equations incorporating Van t Hoff factor i.',
    formulaOrFact: '1) Relative Lowering of VP: (P° - P) / P° = i X_solute\n2) Boiling Point Elevation: ΔTb = i Kb m\n3) Freezing Point Depression: ΔTf = i Kf m\n4) Osmotic Pressure: π = i C R T',
    siUnitsOrNote: 'Van t Hoff factor i = 1 + (n - 1)α for dissociation.',
    highYieldTrap: 'TRAP: For association e.g. benzoic acid in benzene dimerizing, i = 1 + (1/n - 1)α < 1.'
  },
  {
    id: 'ff_chem_2',
    subject: 'Chemistry',
    chapter: 'Electrochemistry',
    topic: 'Galvanic Cells & Nernst Equation',
    title: 'Nernst Equation for Cell EMF at 298 K',
    prompt: 'Write the Nernst Equation for cell EMF Ecell at 298 K and Gibbs free energy relation.',
    formulaOrFact: '• Nernst Equation: E_cell = E°_cell - (0.0591 / n) log Q\n• Gibbs Free Energy: ΔG = - n F E_cell\n• Standard State: ΔG° = - n F E°_cell = - 2.303 R T log K_eq',
    siUnitsOrNote: 'F = Faraday constant ≈ 96500 C/mol e⁻. n = moles of electrons transferred.',
    highYieldTrap: 'TRAP: E_cell is an intensive property (does NOT depend on stoichiometric multiplier), but ΔG is extensive.'
  },
  {
    id: 'ff_chem_3',
    subject: 'Chemistry',
    chapter: 'Chemical Kinetics',
    topic: 'Rate Laws, Zero & First Order Kinetics',
    title: 'First Order Kinetics Integrated Rate & Half-Life',
    prompt: 'Write the integrated rate equation and half-life t1/2 formula for First Order reaction.',
    formulaOrFact: '• Integrated Rate: k = (2.303 / t) log([A]0 / [A])\n• Half-Life: t_1/2 = 0.693 / k = ln(2) / k\n• Amount remaining after n half-lives: [A] = [A]0 / (2^n)',
    siUnitsOrNote: 'First order half-life is completely INDEPENDENT of initial reactant concentration [A]0!',
    highYieldTrap: 'TRAP: Zero order half-life t1/2 = [A]0 / (2k) IS directly proportional to initial concentration.'
  },
  {
    id: 'ff_chem_4',
    subject: 'Chemistry',
    chapter: 'Chemical Thermodynamics',
    topic: 'Entropy & Gibbs Free Energy',
    title: 'Gibbs Free Energy Spontaneity Criterion',
    prompt: 'State ΔG equation and condition for spontaneous process at constant T and P.',
    formulaOrFact: '• Gibbs Equation: ΔG = ΔH - T ΔS\n• Spontaneous: ΔG < 0 (Negative)\n• Non-spontaneous: ΔG > 0 (Positive)\n• Equilibrium: ΔG = 0 => T_eq = ΔH / ΔS',
    siUnitsOrNote: 'Ensure ΔH and ΔS have matching units (usually kJ/mol vs J/mol·K).',
    highYieldTrap: 'TRAP: An endothermic reaction (ΔH > 0) CAN be spontaneous if ΔS > 0 and T is high enough.'
  },

  // Organic / Inorganic Chemistry Facts
  {
    id: 'ff_chem_5',
    subject: 'Chemistry',
    chapter: 'Haloalkanes & Haloarenes',
    topic: 'SN1 vs SN2 Nucleophilic Substitution Mechanisms',
    title: 'SN1 vs SN2 Reactivity & Stereochemistry',
    prompt: 'Recall the reactivity order of alkyl halides (1°, 2°, 3°) and stereochemistry for SN1 vs SN2.',
    formulaOrFact: '• SN2 Reactivity: Methyl > 1° > 2° >> 3° | Stereochemistry: 100% Walden Inversion\n• SN1 Reactivity: 3° > 2° >> 1° > Methyl | Stereochemistry: Racemization (50% retention + 50% inversion)',
    siUnitsOrNote: 'SN2 favored by Polar Aprotic solvents (DMSO, Acetone). SN1 favored by Polar Protic (H2O, EtOH).',
    highYieldTrap: 'TRAP: Allylic and Benzylic halides undergo rapid SN1 AND SN2 reactions due to resonance.'
  },
  {
    id: 'ff_chem_6',
    subject: 'Chemistry',
    chapter: 'Amines & Coordination Compounds',
    topic: 'Coordination Compounds, Isomerism & CFT',
    title: 'Spin-Only Magnetic Moment Formula',
    prompt: 'Write the formula for spin-only magnetic moment μ in Bohr Magnetons (BM).',
    formulaOrFact: '• Spin-Only Magnetic Moment: μ = sqrt(n * (n + 2)) BM\n• n = number of unpaired d-electrons',
    siUnitsOrNote: 'Shortcut: For n unpaired electrons, μ = n.8 to n.9 BM (e.g. n=3 => 3.87 BM, n=5 => 5.92 BM).',
    highYieldTrap: 'TRAP: Remove 4s electrons FIRST when determining d-electron count for transition metal ions!'
  },

  // Biology Facts
  {
    id: 'ff_bio_1',
    subject: 'Biology',
    chapter: 'Plant Physiology',
    topic: 'Photosynthesis: Light Reactions & Calvin Cycle (C3/C4)',
    title: 'C3 vs C4 Energetics & Key Enzymes',
    prompt: 'State the ATP and NADPH required to synthesize 1 molecule of Glucose (6 CO2) in C3 vs C4 plants.',
    formulaOrFact: '• C3 Plant Glucose Yield: Requires 18 ATP and 12 NADPH\n• C4 Plant Glucose Yield: Requires 30 ATP and 12 NADPH\n• C3 Primary Acceptor: RuBP (5C) | Enzyme: RuBisCO\n• C4 Primary Acceptor: PEP (3C) in Mesophyll | Enzyme: PEPcase',
    siUnitsOrNote: 'C4 plants lack photorespiration due to spatial isolation (Kranz anatomy).',
    highYieldTrap: 'TRAP: C4 plants require MORE ATP (30 ATP) than C3 plants (18 ATP) to fix 1 glucose molecule.'
  },
  {
    id: 'ff_bio_2',
    subject: 'Biology',
    chapter: 'Plant Physiology',
    topic: 'Glycolysis, Krebs Cycle & Electron Transport System',
    title: 'Respiratory Quotient (RQ) Values for Substrates',
    prompt: 'State the Respiratory Quotient (RQ = CO2 evolved / O2 consumed) values for Carbohydrates, Tripalmitin (Fat), and Proteins.',
    formulaOrFact: '• Carbohydrates (Glucose): RQ = 1.0\n• Fats (Tripalmitin C51H98O6): RQ = 0.7\n• Proteins: RQ = 0.9\n• Organic Acids (Malic acid): RQ > 1.0',
    siUnitsOrNote: 'RQ is measured using a Respirometer. Anaerobic respiration RQ = Infinity (no O2 consumed).',
    highYieldTrap: 'TRAP: Pure proteins and fats are NEVER used as primary respiratory substrates if glucose is available.'
  },
  {
    id: 'ff_bio_3',
    subject: 'Biology',
    chapter: 'Genetics & Molecular Basis of Inheritance',
    topic: 'Darwinism, Homology/Analogy & Hardy-Weinberg',
    title: 'Hardy-Weinberg Genetic Equilibrium Equation',
    prompt: 'State the Hardy-Weinberg binomial expansion equation for allele frequencies p and q.',
    formulaOrFact: '• Allele Frequency: p + q = 1\n• Genotype Frequency: p² + 2pq + q² = 1\n• p² = homozygous dominant (AA), 2pq = heterozygous (Aa), q² = homozygous recessive (aa)',
    siUnitsOrNote: 'Assumes random mating, infinite population, no mutation, no migration, no selection.',
    highYieldTrap: 'TRAP: p² is frequency of INDIVIDUALS with AA genotype, while p is frequency of ALLELE A.'
  }
];

export const FormulaSprint: React.FC = () => {
  const {
    sprintBlocks,
    questionBank,
    mistakeBank,
    addMistakeBankEntry,
    recordQuestionAttempt,
    gamification,
    addXP
  } = useOS();

  const [mode, setMode] = useState<'formula_flash' | 'sprint' | 'attack' | 'mistake_practice'>('formula_flash');

  // FORMULA FLASH MODE STATE
  const [flashSubjectFilter, setFlashSubjectFilter] = useState<string>('All');
  const [flashQueue, setFlashQueue] = useState<FormulaFlashItem[]>(MASTER_FORMULA_FLASH_ITEMS);
  const [flashIndex, setFlashIndex] = useState<number>(0);
  const [flashRevealed, setFlashRevealed] = useState<boolean>(false);
  const [flashRecalledCount, setFlashRecalledCount] = useState<number>(0);
  const [flashMissedCount, setFlashMissedCount] = useState<number>(0);
  const [flashCompleted, setFlashCompleted] = useState<boolean>(false);

  // 10-MIN SPRINT STATE
  const [selectedBlockSubject, setSelectedBlockSubject] = useState<'Physics' | 'Chemistry' | 'Biology'>('Physics');
  const [currentBlockIndex, setCurrentBlockIndex] = useState<number>(0);
  const [isAnswerRevealed, setIsAnswerRevealed] = useState<boolean>(false);

  // TIMER STATE
  const [timeLeft, setTimeLeft] = useState<number>(600); // 10 minutes = 600s
  const [timerRunning, setTimerRunning] = useState<boolean>(false);

  // ATTACK MODE STATE
  const [attackQuestions, setAttackQuestions] = useState(questionBank);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState<number>(0);
  const [userSelectedOption, setUserSelectedOption] = useState<number | null>(null);
  const [isOptionSubmitted, setIsOptionSubmitted] = useState<boolean>(false);
  const [attackScore, setAttackScore] = useState<number>(0);
  const [attackCompleted, setAttackCompleted] = useState<boolean>(false);

  // Filtered Sprint Blocks for active subject
  const activeSubjectBlocks = sprintBlocks.filter(b => b.blockType === selectedBlockSubject);
  const currentBlock = activeSubjectBlocks[currentBlockIndex] || activeSubjectBlocks[0] || sprintBlocks[0];

  // Update Formula Flash Queue when Subject Filter Changes
  useEffect(() => {
    let filtered = MASTER_FORMULA_FLASH_ITEMS;
    if (flashSubjectFilter !== 'All') {
      filtered = MASTER_FORMULA_FLASH_ITEMS.filter(item => item.subject === flashSubjectFilter);
    }
    setFlashQueue(filtered);
    setFlashIndex(0);
    setFlashRevealed(false);
    setFlashRecalledCount(0);
    setFlashMissedCount(0);
    setFlashCompleted(false);
  }, [flashSubjectFilter]);

  // Timer Effect
  useEffect(() => {
    let timer: ReturnType<typeof setInterval>;
    if (timerRunning && timeLeft > 0) {
      timer = setInterval(() => {
        setTimeLeft(prev => prev - 1);
      }, 1000);
    } else if (timerRunning && timeLeft === 0) {
      setTimerRunning(false);
      if (mode === 'sprint') {
        setMode('attack');
        setTimeLeft(600);
      } else if (mode === 'attack') {
        setAttackCompleted(true);
      }
    }
    return () => clearInterval(timer);
  }, [timerRunning, timeLeft, mode]);

  const handleStartTimer = () => {
    setTimerRunning(true);
  };

  const handleResetTimer = () => {
    setTimerRunning(false);
    setTimeLeft(600);
  };

  const formatTime = (seconds: number) => {
    const m = Math.floor(seconds / 60);
    const s = seconds % 60;
    return `${m}:${s < 10 ? '0' : ''}${s}`;
  };

  // FORMULA FLASH ACTIONS
  const currentFlashItem = flashQueue[flashIndex] || flashQueue[0];

  const handleFlashRecall = (recalled: boolean) => {
    if (recalled) {
      setFlashRecalledCount(prev => prev + 1);
      addXP(10);
    } else {
      setFlashMissedCount(prev => prev + 1);
      // Spaced repetition: re-queue missed formula item at end of session
      setFlashQueue(prev => [...prev, currentFlashItem]);
    }

    setFlashRevealed(false);

    if (flashIndex + 1 < flashQueue.length) {
      setFlashIndex(prev => prev + 1);
    } else {
      setFlashCompleted(true);
    }
  };

  const handleRestartFlash = () => {
    let filtered = MASTER_FORMULA_FLASH_ITEMS;
    if (flashSubjectFilter !== 'All') {
      filtered = MASTER_FORMULA_FLASH_ITEMS.filter(item => item.subject === flashSubjectFilter);
    }
    setFlashQueue(filtered);
    setFlashIndex(0);
    setFlashRevealed(false);
    setFlashRecalledCount(0);
    setFlashMissedCount(0);
    setFlashCompleted(false);
  };

  // ATTACK MODE LOGIC
  const currentQuestion = attackQuestions[currentQuestionIndex] || questionBank[0];

  const handleOptionSelect = (index: number) => {
    if (isOptionSubmitted) return;
    setUserSelectedOption(index);
  };

  const handleSubmitAnswer = () => {
    if (userSelectedOption === null || isOptionSubmitted) return;
    setIsOptionSubmitted(true);
    const isCorrect = userSelectedOption === currentQuestion.correctOptionIndex;

    recordQuestionAttempt(currentQuestion.topic, isCorrect, currentQuestion.difficulty);

    if (isCorrect) {
      setAttackScore(prev => prev + 1);
      addXP(20);
    } else {
      addMistakeBankEntry(currentQuestion, userSelectedOption);
    }
  };

  const handleNextQuestion = () => {
    setUserSelectedOption(null);
    setIsOptionSubmitted(false);

    if (currentQuestionIndex + 1 < attackQuestions.length) {
      setCurrentQuestionIndex(prev => prev + 1);
    } else {
      setAttackCompleted(true);
      setTimerRunning(false);
    }
  };

  const getDifficultyBadge = (diff: QuestionDifficulty) => {
    switch (diff) {
      case '0-20':
        return <span className="px-2 py-0.5 bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 rounded text-[10px] font-mono">LEVEL 0–20 (EASY)</span>;
      case '20-50':
        return <span className="px-2 py-0.5 bg-amber-500/20 text-amber-300 border border-amber-500/30 rounded text-[10px] font-mono">LEVEL 20–50 (MEDIUM)</span>;
      case '50+':
      case 'CYQ':
        return <span className="px-2 py-0.5 bg-rose-500/20 text-rose-300 border border-rose-500/30 rounded text-[10px] font-mono">LEVEL 50+ / CYQ (HARD)</span>;
      default:
        return null;
    }
  };

  return (
    <div className="bg-slate-900 border border-slate-800 rounded-xl p-6 text-slate-100 shadow-xl space-y-6">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-slate-800 pb-4">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-xs font-semibold rounded-full uppercase tracking-wider mb-2">
            <Zap className="w-3.5 h-3.5 text-amber-400" />
            11. FORMULA FLASH & 10-MIN SPRINT SYSTEM
          </div>
          <h2 className="text-2xl font-bold text-white">Rapid Formula Recall & Active Learning Sprints</h2>
          <p className="text-sm text-slate-400 mt-1">
            Single-item rapid formula recall, mixed-subject active recall blocks, and graduated attack practice.
          </p>
        </div>

        {/* Gamification Stats Badge */}
        <div className="flex items-center gap-3 bg-slate-950 px-3 py-2 rounded-xl border border-slate-800 text-xs font-mono">
          <div className="flex items-center gap-1.5 text-amber-400">
            <Sparkles className="w-4 h-4" />
            <span>{gamification.xp} XP</span>
          </div>
          <div className="h-4 w-px bg-slate-800" />
          <div className="flex items-center gap-1.5 text-cyan-400">
            <Award className="w-4 h-4" />
            <span>Streak: {gamification.streakDays}d</span>
          </div>
        </div>
      </div>

      {/* Mode Selector Tabs */}
      <div className="flex flex-wrap items-center justify-between gap-3 bg-slate-950 p-2 rounded-xl border border-slate-800">
        <div className="flex flex-wrap gap-2">
          <button
            onClick={() => {
              setMode('formula_flash');
              handleRestartFlash();
            }}
            className={`px-4 py-2 rounded-lg text-xs font-bold transition-all flex items-center gap-1.5 ${
              mode === 'formula_flash'
                ? 'bg-amber-500 text-slate-950 shadow-lg shadow-amber-950/40'
                : 'text-slate-400 hover:text-slate-200'
            }`}
          >
            <Zap className="w-3.5 h-3.5 fill-current" />
            1. FORMULA FLASH (RAPID RECALL)
          </button>
          <button
            onClick={() => {
              setMode('sprint');
              handleResetTimer();
            }}
            className={`px-4 py-2 rounded-lg text-xs font-bold transition-all ${
              mode === 'sprint'
                ? 'bg-rose-600 text-white shadow-lg shadow-rose-950/40'
                : 'text-slate-400 hover:text-slate-200'
            }`}
          >
            2. 10-MIN SPRINT (ACTIVE RECALL)
          </button>
          <button
            onClick={() => {
              setMode('attack');
              handleResetTimer();
              setAttackQuestions(questionBank);
              setCurrentQuestionIndex(0);
              setAttackCompleted(false);
              setAttackScore(0);
            }}
            className={`px-4 py-2 rounded-lg text-xs font-bold transition-all ${
              mode === 'attack'
                ? 'bg-cyan-600 text-slate-950 shadow-lg shadow-cyan-950/40'
                : 'text-slate-400 hover:text-slate-200'
            }`}
          >
            3. 10-MIN ATTACK (0→50→PYQ)
          </button>
          <button
            onClick={() => {
              setMode('mistake_practice');
            }}
            className={`px-4 py-2 rounded-lg text-xs font-bold transition-all ${
              mode === 'mistake_practice'
                ? 'bg-purple-600 text-white shadow-lg shadow-purple-950/40'
                : 'text-slate-400 hover:text-slate-200'
            }`}
          >
            4. PRACTICE MY MISTAKES ({mistakeBank.length})
          </button>
        </div>

        {/* Timer Bar */}
        {['sprint', 'attack'].includes(mode) && (
          <div className="flex items-center gap-2">
            <div className="p-2 bg-slate-900 border border-slate-800 text-rose-400 font-mono text-lg font-bold rounded-lg flex items-center gap-2">
              <Clock className="w-4 h-4 text-rose-500 animate-pulse" />
              <span>{formatTime(timeLeft)}</span>
            </div>

            {!timerRunning ? (
              <button
                onClick={handleStartTimer}
                className="px-3 py-2 bg-rose-600 hover:bg-rose-500 text-white font-bold text-xs uppercase rounded-lg shadow-md"
              >
                Start Timer
              </button>
            ) : (
              <button
                onClick={handleResetTimer}
                className="p-2 bg-slate-800 hover:bg-slate-700 text-slate-300 rounded-lg"
                title="Reset Timer"
              >
                <RotateCcw className="w-4 h-4" />
              </button>
            )}
          </div>
        )}
      </div>

      {/* MODE 1: FORMULA FLASH MODE */}
      {mode === 'formula_flash' && (
        <div className="space-y-5">
          {/* Subject Filter Bar */}
          <div className="flex flex-wrap items-center justify-between gap-3 bg-slate-950 p-3 rounded-xl border border-slate-800">
            <div className="flex items-center gap-2">
              <Filter className="w-3.5 h-3.5 text-amber-400" />
              <span className="text-xs font-mono text-slate-400 uppercase">Flash Category:</span>
              <div className="flex gap-1">
                {['All', 'Physics', 'Chemistry', 'Biology'].map(subj => (
                  <button
                    key={subj}
                    onClick={() => setFlashSubjectFilter(subj)}
                    className={`px-3 py-1 rounded-lg text-xs font-bold transition-all ${
                      flashSubjectFilter === subj
                        ? 'bg-amber-500 text-slate-950 font-bold'
                        : 'bg-slate-900 text-slate-400 hover:text-slate-200 border border-slate-800'
                    }`}
                  >
                    {subj === 'All' ? 'MIXED SUBJECTS' : subj.toUpperCase()}
                  </button>
                ))}
              </div>
            </div>

            <div className="text-xs font-mono text-slate-400 flex items-center gap-3">
              <span className="text-emerald-400">Recalled: {flashRecalledCount}</span>
              <span className="text-rose-400">Missed (Re-queued): {flashMissedCount}</span>
            </div>
          </div>

          {!flashCompleted && currentFlashItem ? (
            <div className="bg-slate-950 border border-slate-800 rounded-xl p-6 space-y-6 shadow-2xl relative">
              {/* Item Top Metadata */}
              <div className="flex items-center justify-between border-b border-slate-800 pb-3">
                <div className="flex items-center gap-2">
                  <span className="px-2.5 py-1 bg-amber-500/20 border border-amber-500/40 text-amber-300 text-xs font-mono font-bold rounded-md uppercase">
                    {currentFlashItem.subject}
                  </span>
                  <span className="text-xs text-slate-400 font-mono">
                    {currentFlashItem.chapter} → {currentFlashItem.topic}
                  </span>
                </div>

                <span className="text-xs font-mono text-slate-500">
                  Item {flashIndex + 1} of {flashQueue.length}
                </span>
              </div>

              {/* Formula Item Title & Active Recall Window */}
              <div className="space-y-3">
                <h3 className="text-xl font-bold text-white tracking-wide">
                  {currentFlashItem.title}
                </h3>
                <div className="p-4 bg-slate-900 border border-slate-800 rounded-xl">
                  <span className="text-xs font-bold text-amber-400 uppercase tracking-wider block mb-1">
                    MENTAL RECALL PROMPT (RECALL BEFORE CLICKING REVEAL)
                  </span>
                  <p className="text-sm font-semibold text-slate-200">
                    "{currentFlashItem.prompt}"
                  </p>
                </div>
              </div>

              {/* Reveal & Formula Card */}
              {!flashRevealed ? (
                <button
                  onClick={() => setFlashRevealed(true)}
                  className="w-full py-4 bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-xs uppercase tracking-wider rounded-xl shadow-lg flex items-center justify-center gap-2 transition-transform active:scale-[0.99]"
                >
                  <Eye className="w-4 h-4" /> REVEAL FORMULA / FACT
                </button>
              ) : (
                <div className="space-y-4 animate-fadeIn border-t border-slate-800/80 pt-4">
                  {/* Revealed Formula Box */}
                  <div className="p-4 bg-slate-900 border border-cyan-500/40 rounded-xl space-y-2">
                    <span className="text-xs font-bold text-cyan-400 uppercase tracking-wider block">
                      Formula / Exact Fact
                    </span>
                    <pre className="text-sm font-mono text-cyan-200 whitespace-pre-wrap leading-relaxed bg-slate-950 p-3 rounded-lg border border-slate-800">
                      {currentFlashItem.formulaOrFact}
                    </pre>
                  </div>

                  {/* Conditions & Notes */}
                  {currentFlashItem.siUnitsOrNote && (
                    <div className="p-3 bg-slate-900 border border-slate-800 rounded-lg text-xs text-amber-200">
                      <strong className="text-amber-400">Validity / Unit Note:</strong> {currentFlashItem.siUnitsOrNote}
                    </div>
                  )}

                  {/* High Yield Traps */}
                  {currentFlashItem.highYieldTrap && (
                    <div className="p-3 bg-rose-950/40 border border-rose-500/30 rounded-lg text-xs text-rose-300 font-mono">
                      {currentFlashItem.highYieldTrap}
                    </div>
                  )}

                  {/* Single-Tap Self Evaluation Buttons */}
                  <div className="grid grid-cols-2 gap-3 pt-2">
                    <button
                      onClick={() => handleFlashRecall(false)}
                      className="py-3 bg-rose-950/80 hover:bg-rose-900 border border-rose-600 text-rose-200 font-bold text-xs uppercase rounded-xl flex items-center justify-center gap-2"
                    >
                      <X className="w-4 h-4 text-rose-400" /> MISSED (RE-QUEUE AT END)
                    </button>
                    <button
                      onClick={() => handleFlashRecall(true)}
                      className="py-3 bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs uppercase rounded-xl flex items-center justify-center gap-2 shadow-lg shadow-emerald-950/40"
                    >
                      <Check className="w-4 h-4" /> RECALLED CORRECTLY (+10 XP)
                    </button>
                  </div>
                </div>
              )}
            </div>
          ) : (
            /* Formula Flash Completion Summary */
            <div className="bg-slate-950 border border-slate-800 rounded-xl p-8 text-center space-y-5">
              <Zap className="w-12 h-12 text-amber-400 mx-auto" />
              <h3 className="text-2xl font-bold text-white">Formula Flash Deck Completed!</h3>
              <p className="text-sm text-slate-300">
                You recalled <strong className="text-emerald-400">{flashRecalledCount}</strong> items correctly with <strong className="text-rose-400">{flashMissedCount}</strong> initial misses re-queued and mastered.
              </p>
              <div className="flex justify-center gap-3">
                <button
                  onClick={handleRestartFlash}
                  className="px-6 py-2.5 bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-xs uppercase rounded-lg shadow-lg flex items-center gap-2"
                >
                  <Shuffle className="w-4 h-4" /> Restart Formula Flash Deck
                </button>
              </div>
            </div>
          )}
        </div>
      )}

      {/* MODE 2: ACTIVE RECALL 10-MIN SPRINT */}
      {mode === 'sprint' && (
        <div className="space-y-5">
          {/* Block Subject Selector: Block A (Physics), Block B (Chemistry), Block C (Biology) */}
          <div className="flex items-center gap-2 border-b border-slate-800 pb-3">
            <span className="text-xs font-mono text-slate-400 uppercase mr-2">Sequence:</span>
            <button
              onClick={() => {
                setSelectedBlockSubject('Physics');
                setCurrentBlockIndex(0);
                setIsAnswerRevealed(false);
              }}
              className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all ${
                selectedBlockSubject === 'Physics'
                  ? 'bg-cyan-600 text-slate-950'
                  : 'bg-slate-950 text-slate-400 hover:text-slate-200 border border-slate-800'
              }`}
            >
              BLOCK A: ALL PHYSICS FIRST
            </button>
            <button
              onClick={() => {
                setSelectedBlockSubject('Chemistry');
                setCurrentBlockIndex(0);
                setIsAnswerRevealed(false);
              }}
              className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all ${
                selectedBlockSubject === 'Chemistry'
                  ? 'bg-emerald-600 text-slate-950'
                  : 'bg-slate-950 text-slate-400 hover:text-slate-200 border border-slate-800'
              }`}
            >
              BLOCK B: ALL CHEMISTRY NEXT
            </button>
            <button
              onClick={() => {
                setSelectedBlockSubject('Biology');
                setCurrentBlockIndex(0);
                setIsAnswerRevealed(false);
              }}
              className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all ${
                selectedBlockSubject === 'Biology'
                  ? 'bg-purple-600 text-white'
                  : 'bg-slate-950 text-slate-400 hover:text-slate-200 border border-slate-800'
              }`}
            >
              BLOCK C: ALL BIOLOGY (NCERT)
            </button>
          </div>

          {/* Active Sprint Card */}
          {currentBlock ? (
            <div className="bg-slate-950 border border-slate-800 rounded-xl p-6 space-y-5">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-800 pb-3">
                <div>
                  <span className="text-xs text-rose-400 font-mono uppercase">
                    10-MIN SPRINT BLOCK • {currentBlock.subject.toUpperCase()} • {currentBlock.chapter}
                  </span>
                  <h3 className="text-xl font-bold text-white mt-0.5">{currentBlock.title}</h3>
                </div>

                <div className="flex items-center gap-2">
                  <span className="text-xs text-slate-400 font-mono">
                    Module {currentBlockIndex + 1} of {activeSubjectBlocks.length}
                  </span>
                  <button
                    onClick={() => {
                      setCurrentBlockIndex((prev) => (prev + 1) % activeSubjectBlocks.length);
                      setIsAnswerRevealed(false);
                    }}
                    className="px-3 py-1.5 bg-slate-900 border border-slate-800 hover:bg-slate-800 text-cyan-400 font-semibold text-xs rounded-lg"
                  >
                    Next Block →
                  </button>
                </div>
              </div>

              {/* Active Recall Prompt Box */}
              <div className="p-4 bg-slate-900 border border-slate-800 rounded-xl space-y-3">
                <span className="text-xs font-bold text-rose-400 uppercase tracking-wider block flex items-center gap-1.5">
                  <HelpCircle className="w-4 h-4" /> ACTIVE RECALL PROMPT (PAUSE & THINK FIRST)
                </span>
                <p className="text-base font-semibold text-white">
                  {currentBlock.prompt}
                </p>
                <p className="text-xs text-slate-400 italic">
                  Attempt to mentally reconstruct formulas, SI units, limiting cases, or mechanism flows before clicking reveal.
                </p>
              </div>

              {/* Reveal Button */}
              {!isAnswerRevealed ? (
                <button
                  onClick={() => setIsAnswerRevealed(true)}
                  className="w-full py-3.5 bg-rose-600 hover:bg-rose-500 text-white font-bold text-xs uppercase tracking-wider rounded-xl shadow-lg flex items-center justify-center gap-2"
                >
                  <Eye className="w-4 h-4" /> REVEAL FORMULA / FACT EXPLANATION
                </button>
              ) : (
                <div className="space-y-4 animate-fadeIn">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold text-emerald-400 uppercase tracking-wider flex items-center gap-1.5">
                      <CheckCircle2 className="w-4 h-4" /> REVEALED HIGH-YIELD REVISION BREAKDOWN
                    </span>
                    <button
                      onClick={() => setIsAnswerRevealed(false)}
                      className="text-xs text-slate-400 hover:text-white flex items-center gap-1"
                    >
                      <EyeOff className="w-3.5 h-3.5" /> Hide
                    </button>
                  </div>

                  <p className="text-sm text-slate-200">{currentBlock.revealedAnswer.summary}</p>

                  {/* Formulas or Key Facts List */}
                  <div className="p-4 bg-slate-900 border border-slate-800 rounded-xl space-y-2">
                    <span className="text-xs font-bold text-cyan-400 uppercase tracking-wider block">
                      Core Equations / NCERT Facts
                    </span>
                    <ul className="space-y-1.5 font-mono text-xs text-cyan-300">
                      {currentBlock.revealedAnswer.formulasOrKeyFacts.map((fact, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <span className="text-cyan-500">•</span>
                          <span>{fact}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* OpenStax Visual Model (if present for Organic Chemistry) */}
                  {currentBlock.revealedAnswer.visualMechanismModel && (
                    <div className="p-4 bg-emerald-950/50 border border-emerald-500/30 rounded-xl space-y-2">
                      <span className="text-xs font-bold text-emerald-400 uppercase tracking-wider block flex items-center gap-1.5">
                        <BookOpen className="w-4 h-4" /> OPENSTAX ORGANIC VISUAL MECHANISM FLOW
                      </span>
                      <p className="text-xs font-mono text-emerald-300 bg-slate-950 p-3 rounded border border-emerald-900">
                        {currentBlock.revealedAnswer.visualMechanismModel}
                      </p>
                    </div>
                  )}

                  {/* SI Units / Operational Conditions */}
                  {currentBlock.revealedAnswer.operationalConditionsOrExceptions && (
                    <div className="p-4 bg-slate-900 border border-slate-800 rounded-xl space-y-1">
                      <span className="text-xs font-bold text-amber-400 uppercase tracking-wider block">
                        Validity Conditions & Exceptions
                      </span>
                      <ul className="text-xs text-amber-200 space-y-1">
                        {currentBlock.revealedAnswer.operationalConditionsOrExceptions.map((cond, idx) => (
                          <li key={idx}>• {cond}</li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {/* High Yield Formula Traps */}
                  {currentBlock.revealedAnswer.highYieldTraps && (
                    <div className="p-4 bg-rose-950/40 border border-rose-500/30 rounded-xl space-y-1">
                      <span className="text-xs font-bold text-rose-400 uppercase tracking-wider block flex items-center gap-1.5">
                        <AlertTriangle className="w-4 h-4" /> HIGH-YIELD FORMULA TRAPS
                      </span>
                      <ul className="text-xs text-rose-300 space-y-1 font-mono">
                        {currentBlock.revealedAnswer.highYieldTraps.map((trap, idx) => (
                          <li key={idx}>• {trap}</li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              )}
            </div>
          ) : (
            <div className="p-8 text-center text-slate-500">Content not added yet for this subject block.</div>
          )}
        </div>
      )}

      {/* MODE 3: GRADUATED DIFFICULTY ATTACK SPRINT */}
      {mode === 'attack' && (
        <div className="space-y-5">
          {!attackCompleted ? (
            <div className="bg-slate-950 border border-slate-800 rounded-xl p-6 space-y-5">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-800 pb-3">
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-xs text-amber-400 font-mono uppercase">
                      RAPID ATTACK • QUESTION {currentQuestionIndex + 1} OF {attackQuestions.length}
                    </span>
                    {getDifficultyBadge(currentQuestion.difficulty)}
                    {currentQuestion.isOfficialPYQ ? (
                      <span className="px-2 py-0.5 bg-cyan-500/20 text-cyan-300 border border-cyan-500/30 rounded text-[10px] font-mono">
                        OFFICIAL PYQ ({currentQuestion.year || currentQuestion.pyqYear})
                      </span>
                    ) : (
                      <span className="px-2 py-0.5 bg-slate-900 text-slate-400 border border-slate-800 rounded text-[10px] font-mono">
                        CYQ PRACTICE
                      </span>
                    )}
                  </div>
                  <h3 className="text-lg font-bold text-white">{currentQuestion.topic} ({currentQuestion.subject})</h3>
                </div>

                <div className="text-xs text-slate-400 font-mono">
                  Score: <strong className="text-amber-400">{attackScore}</strong>
                </div>
              </div>

              {/* Question Text */}
              <div className="p-4 bg-slate-900 border border-slate-800 rounded-xl space-y-2">
                <p className="text-sm font-semibold text-white whitespace-pre-line">
                  {currentQuestion.questionText}
                </p>
              </div>

              {/* Options Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {currentQuestion.options.map((option, idx) => {
                  let optionClass = "bg-slate-900 border-slate-800 text-slate-300 hover:border-slate-700";
                  if (userSelectedOption === idx) {
                    optionClass = "bg-amber-950/60 border-amber-500 text-amber-200 ring-2 ring-amber-500/30";
                  }

                  if (isOptionSubmitted) {
                    if (idx === currentQuestion.correctOptionIndex) {
                      optionClass = "bg-emerald-950/80 border-emerald-500 text-emerald-200 font-bold";
                    } else if (userSelectedOption === idx && idx !== currentQuestion.correctOptionIndex) {
                      optionClass = "bg-rose-950/80 border-rose-500 text-rose-200";
                    }
                  }

                  return (
                    <button
                      key={idx}
                      onClick={() => handleOptionSelect(idx)}
                      disabled={isOptionSubmitted}
                      className={`p-4 rounded-xl border text-left text-xs font-semibold transition-all ${optionClass}`}
                    >
                      <span className="font-mono text-slate-400 mr-2">{String.fromCharCode(65 + idx)}.</span>
                      <span>{option}</span>
                    </button>
                  );
                })}
              </div>

              {/* Submit / Next Button */}
              {!isOptionSubmitted ? (
                <button
                  onClick={handleSubmitAnswer}
                  disabled={userSelectedOption === null}
                  className="w-full py-3 bg-amber-600 hover:bg-amber-500 disabled:opacity-50 text-slate-950 font-bold text-xs uppercase rounded-xl shadow-lg"
                >
                  Submit Answer
                </button>
              ) : (
                <div className="space-y-4 animate-fadeIn">
                  {/* Feedback Banner */}
                  <div
                    className={`p-4 rounded-xl border flex items-center justify-between text-xs ${
                      userSelectedOption === currentQuestion.correctOptionIndex
                        ? 'bg-emerald-950/80 border-emerald-500/50 text-emerald-300'
                        : 'bg-rose-950/80 border-rose-500/50 text-rose-300'
                    }`}
                  >
                    <div className="flex items-center gap-2 font-bold">
                      {userSelectedOption === currentQuestion.correctOptionIndex ? (
                        <>
                          <CheckCircle2 className="w-5 h-5 text-emerald-400" />
                          <span>CORRECT! +20 XP</span>
                        </>
                      ) : (
                        <>
                          <AlertTriangle className="w-5 h-5 text-rose-400" />
                          <span>INCORRECT — ADDED TO MISTAKE BANK</span>
                        </>
                      )}
                    </div>

                    <button
                      onClick={handleNextQuestion}
                      className="px-4 py-2 bg-slate-900 hover:bg-slate-800 border border-slate-700 text-white font-bold text-xs uppercase rounded-lg"
                    >
                      Next Question →
                    </button>
                  </div>

                  {/* 3-Part Solution Algorithm Display */}
                  <div className="p-4 bg-slate-900 border border-slate-800 rounded-xl space-y-3">
                    <span className="text-xs font-bold text-cyan-400 uppercase tracking-wider block flex items-center gap-1.5">
                      <Lightbulb className="w-4 h-4" /> 3-PART SOLUTION ALGORITHM ("HOW TO SOLVE IT")
                    </span>

                    {currentQuestion.solverAlgorithm ? (
                      <div className="space-y-2 text-xs">
                        <div className="p-3 bg-slate-950 rounded-lg border border-slate-800">
                          <span className="text-cyan-300 font-bold block mb-1">1. Standard Textbook Method:</span>
                          <p className="text-slate-200 whitespace-pre-line">{currentQuestion.solverAlgorithm.textbookMethod}</p>
                        </div>

                        <div className="p-3 bg-amber-950/40 rounded-lg border border-amber-500/30">
                          <span className="text-amber-400 font-bold block mb-1 flex items-center gap-1">
                            <Sparkles className="w-3.5 h-3.5" /> 2. Topper's Fast-Track Trick (15-Sec Shortcut):
                          </span>
                          <p className="text-amber-200">{currentQuestion.solverAlgorithm.topperFastTrack}</p>
                        </div>

                        <div className="p-3 bg-rose-950/40 rounded-lg border border-rose-500/30">
                          <span className="text-rose-400 font-bold block mb-1 flex items-center gap-1">
                            <AlertTriangle className="w-3.5 h-3.5" /> 3. Common Trap Warning (80% Blunder):
                          </span>
                          <p className="text-rose-200">{currentQuestion.solverAlgorithm.commonTrapWarning}</p>
                        </div>
                      </div>
                    ) : (
                      <div className="text-xs text-slate-300 space-y-1">
                        <p>{currentQuestion.explanation}</p>
                      </div>
                    )}

                    <div className="pt-2 border-t border-slate-800 flex flex-wrap gap-4 text-[11px] text-slate-400">
                      <span>Concept: {currentQuestion.conceptTested}</span>
                      <span>Trap: {currentQuestion.commonMistakeTrap}</span>
                    </div>
                  </div>
                </div>
              )}
            </div>
          ) : (
            /* Attack Score Summary */
            <div className="bg-slate-950 border border-slate-800 rounded-xl p-8 text-center space-y-5">
              <Award className="w-12 h-12 text-amber-400 mx-auto" />
              <h3 className="text-2xl font-bold text-white">10-Min Attack Sprint Complete!</h3>
              <p className="text-sm text-slate-300">
                You scored <strong className="text-amber-400">{attackScore}</strong> out of <strong className="text-white">{attackQuestions.length}</strong>.
              </p>
              <div className="flex justify-center gap-3">
                <button
                  onClick={() => {
                    setCurrentQuestionIndex(0);
                    setAttackCompleted(false);
                    setAttackScore(0);
                    setUserSelectedOption(null);
                    setIsOptionSubmitted(false);
                  }}
                  className="px-6 py-2.5 bg-amber-600 hover:bg-amber-500 text-slate-950 font-bold text-xs uppercase rounded-lg shadow-lg"
                >
                  Restart Attack Sprint
                </button>
                <button
                  onClick={() => setMode('sprint')}
                  className="px-6 py-2.5 bg-slate-900 hover:bg-slate-800 border border-slate-700 text-slate-200 font-bold text-xs uppercase rounded-lg"
                >
                  Return to Active Recall
                </button>
              </div>
            </div>
          )}
        </div>
      )}

      {/* MODE 4: PRACTICE MY MISTAKES */}
      {mode === 'mistake_practice' && (
        <div className="space-y-4">
          <div className="flex items-center justify-between border-b border-slate-800 pb-3">
            <h3 className="text-lg font-bold text-white flex items-center gap-2">
              <RotateCcw className="w-5 h-5 text-purple-400" />
              Dedicated Mistake Bank Practice ({mistakeBank.length} items)
            </h3>
          </div>

          {mistakeBank.length === 0 ? (
            <div className="p-8 text-center text-slate-500 bg-slate-950 rounded-xl border border-slate-800">
              No flagged mistakes in your Mistake Bank yet! Excellent performance.
            </div>
          ) : (
            <div className="space-y-4">
              {mistakeBank.map(entry => (
                <div key={entry.id} className="bg-slate-950 border border-slate-800 rounded-xl p-5 space-y-3">
                  <div className="flex items-center justify-between text-xs font-mono">
                    <span className="text-purple-400 font-bold">{entry.subject} • {entry.topic}</span>
                    <span className="text-rose-400 bg-rose-950/60 px-2 py-0.5 rounded border border-rose-900">
                      Error Count: {entry.errorCount}
                    </span>
                  </div>

                  <p className="text-sm font-semibold text-white">{entry.questionText}</p>

                  <div className="p-3 bg-slate-900 border border-slate-800 rounded-lg text-xs space-y-1">
                    <span className="text-emerald-400 font-bold block">Correct Option: {entry.options[entry.correctOptionIndex]}</span>
                    <p className="text-slate-300">{entry.explanation}</p>
                    <span className="text-amber-400 block pt-1">Trap to avoid: {entry.commonMistakeTrap}</span>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      )}
    </div>
  );
};
