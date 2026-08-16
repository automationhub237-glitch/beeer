export type Subject = 'Physics' | 'Chemistry' | 'Biology' | 'Cross-Disciplinary';

export type QuestionDifficulty = '0-20' | '20-50' | '50+' | 'CYQ';

export type QuestionType = 'MCQ' | 'Assertion-Reason' | 'Statement-based' | 'Match the following';

export type QuestionSource = 'NCERT' | 'OpenStax' | 'Official PYQ' | 'Generated Practice';

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

export interface SolverAlgorithm {
  textbookMethod: string;
  topperFastTrack: string;
  commonTrapWarning: string;
}

export interface GraduatedQuestionItem {
  id: string;
  questionText: string;
  options: string[];
  correctOptionIndex: number;
  explanation: string;
  solverAlgorithm?: SolverAlgorithm;
  topperTrick?: string;
  commonTrap?: string;
  difficultyScore?: number; // 0-100
  category?: 'EASY' | 'MEDIUM' | 'CYQ' | 'PREDICTED_PYQ' | 'ACTUAL_PYQ';
  pyqYear?: string | number;
  ncertPageRef?: string;
  subject: Subject;
  chapter: string;
  topic: string;
  topicId?: string;
  difficulty: QuestionDifficulty;
  questionType: QuestionType;
  source: QuestionSource;
  year?: number; // Present ONLY if authentic past NEET PYQ
  isOfficialPYQ: boolean;
  conceptTested: string;
  commonMistakeTrap: string;
  givenData?: string[];
  whatIsAsked?: string;
  requiredFormula?: string;
  physicalModelHint?: string;
}

export interface SprintBlockItem {
  id: string;
  subject: Subject;
  chapter: string;
  topic: string;
  topicId?: string;
  title: string;
  blockType: 'Physics' | 'Chemistry' | 'Biology';
  prompt: string; // Active recall prompt
  revealedAnswer: {
    summary: string;
    formulasOrKeyFacts: string[];
    siUnitsOrConstants?: string[];
    operationalConditionsOrExceptions?: string[];
    visualMechanismModel?: string; // OpenStax organic chemistry mechanism / stereochemistry flow
    highYieldTraps?: string[];
  };
}

export type ResourceStatus =
  | 'AVAILABLE'
  | 'LINK ONLY'
  | 'LOGIN REQUIRED'
  | 'PAYWALLED'
  | 'UNAVAILABLE'
  | 'NEEDS VERIFICATION';

export interface SyllabusSubtopicNode {
  id: string;
  title: string;
  summary?: string;
  status?: ResourceStatus;
}

export interface SyllabusTopicNode {
  id: string;
  title: string;
  summary?: string;
  subtopics?: SyllabusSubtopicNode[];
  status?: ResourceStatus;
}

export interface SyllabusChapterNode {
  id: string;
  title: string;
  classLevel?: '11' | '12' | 'General';
  category?: 'Physical' | 'Inorganic' | 'Organic' | 'Botany' | 'Zoology' | 'General';
  topics: SyllabusTopicNode[];
}

export interface SyllabusSubjectTree {
  subject: Subject;
  chapters: SyllabusChapterNode[];
}

export type TopicResourceCategory =
  | 'detailed_notes'
  | 'short_notes'
  | 'sprint_10min'
  | 'attack_10min'
  | 'formula_bank'
  | 'ncert_facts'
  | 'pyqs'
  | 'cyqs'
  | 'easy_questions'
  | 'medium_questions'
  | 'hard_questions'
  | 'common_mistakes'
  | 'flashcards'
  | 'local_notes'
  | 'progress';

export interface FlashcardItem {
  id: string;
  question: string;
  answer: string;
}

export interface MultiTierNotes {
  tier1DetailedNCERT: string;
  tier2HighYieldShort: string;
  tier3ConceptualVisualMechanisms: string;
  tier4TopperTricksShortcuts: string;
}

export interface TopicResourceData {
  topicId: string;
  topicTitle: string;
  chapterTitle: string;
  subject: Subject;
  detailedNotes?: string;
  shortNotes?: string;
  multiTierNotes?: MultiTierNotes;
  formulaBank?: string[];
  ncertFacts?: string[];
  commonMistakes?: string[];
  flashcards?: FlashcardItem[];
}

export interface MistakeBankEntry {
  id: string;
  questionId: string;
  questionText: string;
  subject: Subject;
  chapter: string;
  topic: string;
  options: string[];
  correctOptionIndex: number;
  userSelectedOptionIndex?: number;
  explanation: string;
  conceptTested: string;
  commonMistakeTrap: string;
  difficulty: QuestionDifficulty;
  errorCount: number;
  lastAttempted: string;
  revisionTags: string[];
}

export interface UserGamificationState {
  xp: number;
  streakDays: number;
  lastActiveDate: string;
  completedSprintSessions: number;
  completedAttackSessions: number;
  personalBests: Record<string, number>;
}

export interface TopicMasteryRecord {
  topicId: string;
  subject: Subject;
  attempted: number;
  correct: number;
  accuracy: number;
  lastAttempted: string;
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
