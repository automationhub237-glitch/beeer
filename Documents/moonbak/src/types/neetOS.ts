export type Subject = 'Physics' | 'Chemistry' | 'Biology' | 'Cross-Disciplinary';

export type FailureLayer = 1 | 2 | 3 | 4 | 5 | 6;

export const FAILURE_LAYER_DESCRIPTIONS: Record<FailureLayer, { name: string; description: string; action: string }> = {
  1: {
    name: 'Layer 1: Concept Gap',
    description: "I don't know the core concept.",
    action: 'Sent to Learn Backwards prerequisite chain rebuild.'
  },
  2: {
    name: 'Layer 2: Pattern Recognition Deficit',
    description: "I know the concept, but didn't recognize it in this context.",
    action: 'Sent to Pattern & Context Recognition Training.'
  },
  3: {
    name: 'Layer 3: Formula Selection Failure',
    description: 'I recognized the concept, but selected the wrong formula or principle.',
    action: 'Sent to Formula Application & Principle Match Sprint.'
  },
  4: {
    name: 'Layer 4: Execution / Derivation Failure',
    description: 'I chose the right formula, but could not execute or derive the step.',
    action: 'Sent to Derivation & Step-by-Step Execution Practice.'
  },
  5: {
    name: 'Layer 5: Calculation Mistake',
    description: 'I had the correct setup, but made an arithmetic or unit substitution error.',
    action: 'Sent to Fast Calculation & Unit Verification Trainer.'
  },
  6: {
    name: 'Layer 6: Careless / Reading Error',
    description: 'I misread the question or overlooked given conditions.',
    action: 'Sent to Question Deconstruction & Attention Check.'
  }
};

export interface CrossSubjectConnection {
  targetId: string;
  targetSubject: Subject;
  targetTitle: string;
  rationale: string;
}

export interface ConceptNode {
  id: string;
  title: string;
  subject: Subject;
  chapter: string;
  summary: string;
  prerequisites: string[]; // IDs of prerequisites
  targetChain: string[]; // Titles in backwards order e.g. Moles -> Mole Fraction -> Vapour Pressure -> Raoult's Law -> Colligative Properties
  physicalModel: string; // Non-symbolic visualisation description
  formalEquations: string[];
  whyPrompts: {
    question: string;
    keyCheck: string;
  }[];
  connectedConceptIds: string[];
  crossSubjectConnections: CrossSubjectConnection[];
  keyKeywords: string[]; // For blurting structural matching
  isVerified: boolean; // Integrity label
  resourceType: 'OFFICIAL / VERIFIED' | 'USER IMPORTED' | 'EXTERNAL RESOURCE' | 'AI GENERATED';
}

export interface PYQItem {
  id: string;
  title: string;
  subject: Subject;
  chapter: string;
  questionText: string;
  givenData: string[];
  irrelevantData: string[];
  whatIsAsked: string;
  keyConceptId: string;
  requiredFormula: string;
  physicalModelHint: string;
  expertApproach: string;
  layerDiagnostics: Record<FailureLayer, string>;
  options?: string[];
  correctOptionIndex?: number;
  numericalAnswer?: string;
  year?: number;
  integrityLabel: 'OFFICIAL / VERIFIED' | 'USER IMPORTED' | 'EXTERNAL RESOURCE' | 'AI GENERATED';
}

export interface BlurtingSession {
  id: string;
  conceptId: string;
  conceptTitle: string;
  timestamp: string;
  userInput: string;
  remembered: string[];
  partial: string[];
  missing: string[];
  score: number; // 0 - 100
}

export interface RecallGateSession {
  id: string;
  conceptId: string;
  timestamp: string;
  userReconstruction: string;
  selfRating: 'complete' | 'partial' | 'failed';
}

export interface MemoryPalaceLocation {
  id: string;
  name: string;
  attachedConceptId?: string;
  attachedFact?: string;
}

export interface MemoryPalaceRoom {
  id: string;
  palaceName: string;
  roomName: string;
  locations: MemoryPalaceLocation[];
}

export interface MistakeLog {
  id: string;
  questionId: string;
  questionTitle: string;
  subject: Subject;
  conceptId: string;
  failedLayer: FailureLayer;
  userNotes: string;
  timestamp: string;
  resolved: boolean;
}

export interface DailySnapshot {
  id: string;
  date: string;
  physicsRecall: string;
  chemistryRecall: string;
  biologyRecall: string;
  formulasRecalled: string;
  mechanismsRecalled: string;
  mistakesReflected: string;
  conceptsConnected: string;
  unresolvedGaps: string;
}

export interface ScienceSimulation {
  id: string;
  title: string;
  subject: Subject;
  description: string;
  externalUrl: string;
  guidingQuestions: {
    predict: string;
    observe: string;
    explain: string;
    changeVariable: string;
  };
}

export interface TransferSkillLog {
  id: string;
  gameOrTool: string;
  skillTrained: string;
  neetTransferRationale: string;
  timestamp: string;
}

export interface UserCustomConnection {
  id: string;
  sourceConceptId: string;
  targetConceptId: string;
  rationale: string;
  timestamp: string;
}

export interface ExternalResourceItem {
  id: string;
  title: string;
  conceptId: string;
  subject: Subject;
  teacherOrPlatform: string;
  url: string;
  teachingStyle: string;
  difficulty: 'Beginner' | 'Intermediate' | 'Advanced';
  integrityLabel: 'OFFICIAL / VERIFIED' | 'USER IMPORTED' | 'EXTERNAL RESOURCE' | 'AI GENERATED';
}

export interface SQ3RSession {
  id: string;
  conceptId: string;
  surveyQuestions: string[];
  reciteNotes: string;
  connectedNodes: string[];
  completedAt: string;
}
