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
  SQ3RSession
} from '../types/neetOS';
import {
  INITIAL_CONCEPTS,
  INITIAL_PYQS,
  INITIAL_SIMULATIONS,
  INITIAL_EXTERNAL_RESOURCES
} from '../data/knowledgeGraphData';

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
}

const OSContext = createContext<OSContextType | undefined>(undefined);

export const OSProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [concepts, setConcepts] = useState<ConceptNode[]>(() => {
    const saved = localStorage.getItem('neet_os_concepts');
    return saved ? JSON.parse(saved) : INITIAL_CONCEPTS;
  });

  const [pyqs] = useState<PYQItem[]>(INITIAL_PYQS);
  const [simulations] = useState<ScienceSimulation[]>(INITIAL_SIMULATIONS);
  const [externalResources] = useState<ExternalResourceItem[]>(INITIAL_EXTERNAL_RESOURCES);

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

  // Storage persistence effects
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
        addCustomConnection,
        saveBlurtingSession,
        saveRecallGateSession,
        saveMemoryPalace,
        addMistakeLog,
        resolveMistake,
        saveDailySnapshot,
        addTransferLog,
        saveSQ3RSession,
        importUserConcept
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
