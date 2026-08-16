import React, { createContext, useContext, useState, useEffect } from 'react';
import type {
  ConceptNode,
  PYQItem,
  BlurtingSession,
  RecallGateSession,
  MemoryPalaceRoom,
  MistakeLog,
  DailySnapshot,
  ScienceSimulation,
  TransferSkillLog,
  UserCustomConnection,
  ExternalResourceItem,
  SQ3RSession,
  SyllabusSubjectTree,
  SprintBlockItem,
  GraduatedQuestionItem,
  TopicResourceData,
  MistakeBankEntry,
  UserGamificationState,
  TopicMasteryRecord
} from '../types/neetOS';
import {
  INITIAL_CONCEPTS,
  INITIAL_PYQS,
  INITIAL_SIMULATIONS,
  INITIAL_EXTERNAL_RESOURCES,
  buildConceptsFromSyllabus
} from '../data/knowledgeGraphData';
import {
  FULL_NEET_SYLLABUS,
  FULL_SPRINT_BLOCKS,
  FULL_QUESTION_BANK,
  INITIAL_TOPIC_RESOURCES
} from '../data/masterSyllabus';

interface OSContextType {
  concepts: ConceptNode[];
  pyqs: PYQItem[];
  simulations: ScienceSimulation[];
  externalResources: ExternalResourceItem[];
  blurtingSessions: BlurtingSession[];
  recallGateSessions: RecallGateSession[];
  memoryPalaces: MemoryPalaceRoom[];
  mistakeLogs: MistakeLog[];
  dailySnapshots: DailySnapshot[];
  transferLogs: TransferSkillLog[];
  customConnections: UserCustomConnection[];
  sq3rSessions: SQ3RSession[];

  // Expanded NEET Syllabus & Question Catalogue
  syllabus: SyllabusSubjectTree[];
  sprintBlocks: SprintBlockItem[];
  questionBank: GraduatedQuestionItem[];
  topicResources: TopicResourceData[];
  mistakeBank: MistakeBankEntry[];
  gamification: UserGamificationState;
  userNotes: Record<string, string>; // topicId -> note
  topicMastery: Record<string, TopicMasteryRecord>; // topicId -> record

  // Handlers
  addCustomConnection: (sourceId: string, targetId: string, rationale: string) => void;
  saveBlurtingSession: (session: BlurtingSession) => void;
  saveRecallGateSession: (session: RecallGateSession) => void;
  saveMemoryPalace: (palace: MemoryPalaceRoom) => void;
  addMistakeLog: (mistake: Omit<MistakeLog, 'id' | 'timestamp' | 'resolved'>) => void;
  resolveMistake: (id: string) => void;
  saveDailySnapshot: (snapshot: Omit<DailySnapshot, 'id'>) => void;
  addTransferLog: (log: Omit<TransferSkillLog, 'id' | 'timestamp'>) => void;
  saveSQ3RSession: (session: SQ3RSession) => void;
  importUserConcept: (concept: Omit<ConceptNode, 'id' | 'isVerified' | 'resourceType'>) => void;

  // Handlers for Expanded Catalogue
  addMistakeBankEntry: (question: GraduatedQuestionItem, userSelectedOptionIndex?: number) => void;
  removeMistakeBankEntry: (id: string) => void;
  saveUserTopicNote: (topicId: string, note: string) => void;
  recordQuestionAttempt: (topicId: string, isCorrect: boolean, difficulty: string) => void;
  addXP: (amount: number) => void;
  getRecommendedReviewTopics: () => string[];
}

const OSContext = createContext<OSContextType | undefined>(undefined);

export const OSProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [concepts, setConcepts] = useState<ConceptNode[]>(() => {
    const allConcepts = buildConceptsFromSyllabus(FULL_NEET_SYLLABUS, INITIAL_CONCEPTS);
    const saved = localStorage.getItem('neet_os_concepts');
    if (!saved) return allConcepts;

    // Merge user imported concepts with master syllabus concepts
    const savedConcepts: ConceptNode[] = JSON.parse(saved);
    const masterIds = new Set(allConcepts.map(c => c.id));
    const userConcepts = savedConcepts.filter(c => !masterIds.has(c.id));
    return [...allConcepts, ...userConcepts];
  });

  const [pyqs] = useState<PYQItem[]>(INITIAL_PYQS);
  const [simulations] = useState<ScienceSimulation[]>(INITIAL_SIMULATIONS);
  const [externalResources] = useState<ExternalResourceItem[]>(INITIAL_EXTERNAL_RESOURCES);

  // Catalogue
  const [syllabus] = useState<SyllabusSubjectTree[]>(FULL_NEET_SYLLABUS);
  const [sprintBlocks] = useState<SprintBlockItem[]>(FULL_SPRINT_BLOCKS);
  const [questionBank] = useState<GraduatedQuestionItem[]>(FULL_QUESTION_BANK);
  const [topicResources] = useState<TopicResourceData[]>(INITIAL_TOPIC_RESOURCES);

  // Local storage persisted states
  const [blurtingSessions, setBlurtingSessions] = useState<BlurtingSession[]>(() => {
    const saved = localStorage.getItem('neet_os_blurting');
    return saved ? JSON.parse(saved) : [];
  });

  const [recallGateSessions, setRecallGateSessions] = useState<RecallGateSession[]>(() => {
    const saved = localStorage.getItem('neet_os_recall_gate');
    return saved ? JSON.parse(saved) : [];
  });

  const [memoryPalaces, setMemoryPalaces] = useState<MemoryPalaceRoom[]>(() => {
    const saved = localStorage.getItem('neet_os_memory_palaces');
    return saved ? JSON.parse(saved) : [
      {
        id: 'palace_1',
        palaceName: 'Home Living Room',
        roomName: 'Main Lounge',
        locations: [
          { id: 'loc_1', name: 'Front Door', attachedConceptId: 'moles_concept', attachedFact: 'Avogadro constant N_A = 6.022e23' },
          { id: 'loc_2', name: 'Coffee Table', attachedConceptId: 'colligative_properties', attachedFact: 'Boiling point elevation ΔTb = Kb * m * i' }
        ]
      }
    ];
  });

  const [mistakeLogs, setMistakeLogs] = useState<MistakeLog[]>(() => {
    const saved = localStorage.getItem('neet_os_mistakes');
    return saved ? JSON.parse(saved) : [];
  });

  const [dailySnapshots, setDailySnapshots] = useState<DailySnapshot[]>(() => {
    const saved = localStorage.getItem('neet_os_snapshots');
    return saved ? JSON.parse(saved) : [];
  });

  const [transferLogs, setTransferLogs] = useState<TransferSkillLog[]>(() => {
    const saved = localStorage.getItem('neet_os_transfer');
    return saved ? JSON.parse(saved) : [];
  });

  const [customConnections, setCustomConnections] = useState<UserCustomConnection[]>(() => {
    const saved = localStorage.getItem('neet_os_custom_conn');
    return saved ? JSON.parse(saved) : [];
  });

  const [sq3rSessions, setSq3rSessions] = useState<SQ3RSession[]>(() => {
    const saved = localStorage.getItem('neet_os_sq3r');
    return saved ? JSON.parse(saved) : [];
  });

  // Expanded Feature States
  const [mistakeBank, setMistakeBank] = useState<MistakeBankEntry[]>(() => {
    const saved = localStorage.getItem('neet_os_mistake_bank');
    return saved ? JSON.parse(saved) : [];
  });

  const [userNotes, setUserNotes] = useState<Record<string, string>>(() => {
    const saved = localStorage.getItem('neet_os_user_notes');
    return saved ? JSON.parse(saved) : {};
  });

  const [gamification, setGamification] = useState<UserGamificationState>(() => {
    const saved = localStorage.getItem('neet_os_gamification');
    return saved ? JSON.parse(saved) : {
      xp: 120,
      streakDays: 3,
      lastActiveDate: new Date().toISOString().split('T')[0],
      completedSprintSessions: 2,
      completedAttackSessions: 1,
      personalBests: {}
    };
  });

  const [topicMastery, setTopicMastery] = useState<Record<string, TopicMasteryRecord>>(() => {
    const saved = localStorage.getItem('neet_os_topic_mastery');
    return saved ? JSON.parse(saved) : {};
  });

  // Persistence Effects
  useEffect(() => {
    localStorage.setItem('neet_os_concepts', JSON.stringify(concepts));
  }, [concepts]);

  useEffect(() => {
    localStorage.setItem('neet_os_blurting', JSON.stringify(blurtingSessions));
  }, [blurtingSessions]);

  useEffect(() => {
    localStorage.setItem('neet_os_recall_gate', JSON.stringify(recallGateSessions));
  }, [recallGateSessions]);

  useEffect(() => {
    localStorage.setItem('neet_os_memory_palaces', JSON.stringify(memoryPalaces));
  }, [memoryPalaces]);

  useEffect(() => {
    localStorage.setItem('neet_os_mistakes', JSON.stringify(mistakeLogs));
  }, [mistakeLogs]);

  useEffect(() => {
    localStorage.setItem('neet_os_snapshots', JSON.stringify(dailySnapshots));
  }, [dailySnapshots]);

  useEffect(() => {
    localStorage.setItem('neet_os_transfer', JSON.stringify(transferLogs));
  }, [transferLogs]);

  useEffect(() => {
    localStorage.setItem('neet_os_custom_conn', JSON.stringify(customConnections));
  }, [customConnections]);

  useEffect(() => {
    localStorage.setItem('neet_os_sq3r', JSON.stringify(sq3rSessions));
  }, [sq3rSessions]);

  useEffect(() => {
    localStorage.setItem('neet_os_mistake_bank', JSON.stringify(mistakeBank));
  }, [mistakeBank]);

  useEffect(() => {
    localStorage.setItem('neet_os_user_notes', JSON.stringify(userNotes));
  }, [userNotes]);

  useEffect(() => {
    localStorage.setItem('neet_os_gamification', JSON.stringify(gamification));
  }, [gamification]);

  useEffect(() => {
    localStorage.setItem('neet_os_topic_mastery', JSON.stringify(topicMastery));
  }, [topicMastery]);

  // Handlers
  const addCustomConnection = (sourceId: string, targetId: string, rationale: string) => {
    const newConn: UserCustomConnection = {
      id: 'conn_' + Date.now(),
      sourceConceptId: sourceId,
      targetConceptId: targetId,
      rationale,
      timestamp: new Date().toISOString()
    };
    setCustomConnections(prev => [...prev, newConn]);
  };

  const saveBlurtingSession = (session: BlurtingSession) => {
    setBlurtingSessions(prev => [session, ...prev]);
  };

  const saveRecallGateSession = (session: RecallGateSession) => {
    setRecallGateSessions(prev => [session, ...prev]);
  };

  const saveMemoryPalace = (palace: MemoryPalaceRoom) => {
    setMemoryPalaces(prev => {
      const idx = prev.findIndex(p => p.id === palace.id);
      if (idx >= 0) {
        const next = [...prev];
        next[idx] = palace;
        return next;
      }
      return [...prev, palace];
    });
  };

  const addMistakeLog = (mistake: Omit<MistakeLog, 'id' | 'timestamp' | 'resolved'>) => {
    const newLog: MistakeLog = {
      ...mistake,
      id: 'mistake_' + Date.now(),
      timestamp: new Date().toISOString(),
      resolved: false
    };
    setMistakeLogs(prev => [newLog, ...prev]);
  };

  const resolveMistake = (id: string) => {
    setMistakeLogs(prev => prev.map(m => m.id === id ? { ...m, resolved: true } : m));
  };

  const saveDailySnapshot = (snapshot: Omit<DailySnapshot, 'id'>) => {
    const newSnap: DailySnapshot = {
      ...snapshot,
      id: 'snap_' + Date.now()
    };
    setDailySnapshots(prev => [newSnap, ...prev]);
  };

  const addTransferLog = (log: Omit<TransferSkillLog, 'id' | 'timestamp'>) => {
    const newLog: TransferSkillLog = {
      ...log,
      id: 'trans_' + Date.now(),
      timestamp: new Date().toISOString()
    };
    setTransferLogs(prev => [newLog, ...prev]);
  };

  const saveSQ3RSession = (session: SQ3RSession) => {
    setSq3rSessions(prev => [session, ...prev]);
  };

  const importUserConcept = (conceptData: Omit<ConceptNode, 'id' | 'isVerified' | 'resourceType'>) => {
    const newConcept: ConceptNode = {
      ...conceptData,
      id: 'user_concept_' + Date.now(),
      isVerified: false,
      resourceType: 'USER IMPORTED'
    };
    setConcepts(prev => [...prev, newConcept]);
  };

  // Expanded Catalogue Handlers
  const addMistakeBankEntry = (q: GraduatedQuestionItem, userSelectedOptionIndex?: number) => {
    setMistakeBank(prev => {
      const existingIdx = prev.findIndex(m => m.questionId === q.id);
      if (existingIdx >= 0) {
        const updated = [...prev];
        updated[existingIdx] = {
          ...updated[existingIdx],
          errorCount: updated[existingIdx].errorCount + 1,
          lastAttempted: new Date().toISOString(),
          userSelectedOptionIndex
        };
        return updated;
      }
      const newEntry: MistakeBankEntry = {
        id: 'mb_' + Date.now(),
        questionId: q.id,
        questionText: q.questionText,
        subject: q.subject,
        chapter: q.chapter,
        topic: q.topic,
        options: q.options,
        correctOptionIndex: q.correctOptionIndex,
        userSelectedOptionIndex,
        explanation: q.explanation,
        conceptTested: q.conceptTested,
        commonMistakeTrap: q.commonMistakeTrap,
        difficulty: q.difficulty,
        errorCount: 1,
        lastAttempted: new Date().toISOString(),
        revisionTags: [q.subject, q.difficulty]
      };
      return [newEntry, ...prev];
    });
  };

  const removeMistakeBankEntry = (id: string) => {
    setMistakeBank(prev => prev.filter(m => m.id !== id));
  };

  const saveUserTopicNote = (topicId: string, note: string) => {
    setUserNotes(prev => ({
      ...prev,
      [topicId]: note
    }));
  };

  const addXP = (amount: number) => {
    setGamification(prev => ({
      ...prev,
      xp: prev.xp + amount
    }));
  };

  const recordQuestionAttempt = (topicId: string, isCorrect: boolean, _difficulty: string) => {
    setTopicMastery(prev => {
      const current = prev[topicId] || {
        topicId,
        subject: 'Physics',
        attempted: 0,
        correct: 0,
        accuracy: 0,
        lastAttempted: new Date().toISOString()
      };
      const attempted = current.attempted + 1;
      const correct = current.correct + (isCorrect ? 1 : 0);
      const accuracy = Math.round((correct / attempted) * 100);
      return {
        ...prev,
        [topicId]: {
          ...current,
          attempted,
          correct,
          accuracy,
          lastAttempted: new Date().toISOString()
        }
      };
    });

    if (isCorrect) {
      addXP(15);
    }
  };

  const getRecommendedReviewTopics = (): string[] => {
    const entries = Object.entries(topicMastery);
    if (entries.length === 0) return ['phy_1d_motion', 'chem_raoult_colligative', 'bio_photosynthesis'];

    // Sort by accuracy ascending, then last attempted
    entries.sort((a, b) => a[1].accuracy - b[1].accuracy);
    return entries.slice(0, 3).map(e => e[0]);
  };

  return (
    <OSContext.Provider
      value={{
        concepts,
        pyqs,
        simulations,
        externalResources,
        blurtingSessions,
        recallGateSessions,
        memoryPalaces,
        mistakeLogs,
        dailySnapshots,
        transferLogs,
        customConnections,
        sq3rSessions,
        syllabus,
        sprintBlocks,
        questionBank,
        topicResources,
        mistakeBank,
        gamification,
        userNotes,
        topicMastery,
        addCustomConnection,
        saveBlurtingSession,
        saveRecallGateSession,
        saveMemoryPalace,
        addMistakeLog,
        resolveMistake,
        saveDailySnapshot,
        addTransferLog,
        saveSQ3RSession,
        importUserConcept,
        addMistakeBankEntry,
        removeMistakeBankEntry,
        saveUserTopicNote,
        recordQuestionAttempt,
        addXP,
        getRecommendedReviewTopics
      }}
    >
      {children}
    </OSContext.Provider>
  );
};

export const useOS = () => {
  const context = useContext(OSContext);
  if (!context) throw new Error('useOS must be used within OSProvider');
  return context;
};
