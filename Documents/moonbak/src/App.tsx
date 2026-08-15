import React, { useState } from 'react';
import { OSProvider, useOS } from './context/OSContext';
import { LearnBackwards } from './components/LearnBackwards';
import { ConceptGraph } from './components/ConceptGraph';
import { ScienceConnections } from './components/ScienceConnections';
import { WhyEngine } from './components/WhyEngine';
import { ConceptDefence } from './components/ConceptDefence';
import { BlurtingSystem } from './components/BlurtingSystem';
import { RecallGate } from './components/RecallGate';
import { VisualiseFirst } from './components/VisualiseFirst';
import { QuestionAnalyzer } from './components/QuestionAnalyzer';
import { PYQVisualiser } from './components/PYQVisualiser';
import { FormulaSprint } from './components/FormulaSprint';
import { ReverseQuestionCreation } from './components/ReverseQuestionCreation';
import { MemoryPalace } from './components/MemoryPalace';
import { ScienceSimulationLab } from './components/ScienceSimulationLab';
import { TransferTraining } from './components/TransferTraining';
import { GlobalTeacherResource } from './components/GlobalTeacherResource';
import { SQ3RSystem } from './components/SQ3RSystem';
import { DailyRecall } from './components/DailyRecall';
import { MistakeTrainingLoop } from './components/MistakeTrainingLoop';
import { TopicResourceHub } from './components/TopicResourceHub';

import {
  Layers,
  Network,
  HelpCircle,
  ShieldAlert,
  EyeOff,
  Lock,
  Eye,
  Timer,
  Zap,
  Globe2,
  Building2,
  TestTube,
  Gamepad2,
  BookOpen,
  Moon,
  Wrench,
  Cpu,
  Search,
  ChevronRight,
  Menu,
  X,
  FolderTree
} from 'lucide-react';

type NavigationTab =
  | 'topic_resource_hub'
  | 'learn_backwards'
  | 'concept_graph'
  | 'science_connections'
  | 'why_engine'
  | 'concept_defence'
  | 'blurting'
  | 'recall_gate'
  | 'visualise_first'
  | 'question_analyzer'
  | 'pyq_visualiser'
  | 'formula_sprint'
  | 'reverse_question'
  | 'memory_palace'
  | 'simulation_lab'
  | 'transfer_training'
  | 'global_teacher'
  | 'sq3r'
  | 'daily_recall'
  | 'mistake_training';

const MainAppContent: React.FC = () => {
  const { concepts } = useOS();
  const [activeTab, setActiveTab] = useState<NavigationTab>('topic_resource_hub');
  const [targetConceptId, setTargetConceptId] = useState<string>(concepts[0]?.id || 'colligative_properties');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [mobileMenuOpen, setMobileMenuOpen] = useState<boolean>(false);

  const navigationItems = [
    { id: 'topic_resource_hub', label: '0. Topic Resource Hub', icon: FolderTree, category: 'Core Traversal' },
    { id: 'learn_backwards', label: '1. Learn Backwards', icon: Layers, category: 'Core Traversal' },
    { id: 'concept_graph', label: '2. Concept Graph', icon: Network, category: 'Core Traversal' },
    { id: 'science_connections', label: '17. Science Connections', icon: Globe2, category: 'Core Traversal' },
    { id: 'why_engine', label: '3. Why Is This True?', icon: HelpCircle, category: 'Causal & Defence' },
    { id: 'concept_defence', label: '7. Defend It Arena', icon: ShieldAlert, category: 'Causal & Defence' },
    { id: 'blurting', label: '6. Timed Blurting', icon: EyeOff, category: 'Retrieval Gates' },
    { id: 'recall_gate', label: '5. 24-Hour Recall Gate', icon: Lock, category: 'Retrieval Gates' },
    { id: 'visualise_first', label: '8. Visualise First', icon: Eye, category: 'Problem Solving' },
    { id: 'question_analyzer', label: '9. Question Analyzer', icon: Eye, category: 'Problem Solving' },
    { id: 'pyq_visualiser', label: '10. 3-Min PYQ Solver', icon: Timer, category: 'Problem Solving' },
    { id: 'formula_sprint', label: '11. Formula Sprint', icon: Zap, category: 'Problem Solving' },
    { id: 'reverse_question', label: '13-14. Reverse Questions', icon: HelpCircle, category: 'Problem Solving' },
    { id: 'memory_palace', label: '16. Memory Palace', icon: Building2, category: 'Spatial & Labs' },
    { id: 'simulation_lab', label: '18. Simulation Lab', icon: TestTube, category: 'Spatial & Labs' },
    { id: 'transfer_training', label: '21. Transfer Training', icon: Gamepad2, category: 'Spatial & Labs' },
    { id: 'global_teacher', label: '19-20. Resource Lab', icon: Globe2, category: 'Spatial & Labs' },
    { id: 'sq3r', label: '22. SQ3R Active Reading', icon: BookOpen, category: 'Daily & System' },
    { id: 'daily_recall', label: '23. End-of-Day Recall', icon: Moon, category: 'Daily & System' },
    { id: 'mistake_training', label: '25. Mistake Loop', icon: Wrench, category: 'Daily & System' },
  ] as const;

  const handleRouteToBackwards = (conceptId?: string) => {
    if (conceptId) setTargetConceptId(conceptId);
    setActiveTab('learn_backwards');
  };

  const handleRouteToWhy = (conceptId?: string) => {
    if (conceptId) setTargetConceptId(conceptId);
    setActiveTab('why_engine');
  };

  const filteredNav = navigationItems.filter(item =>
    item.label.toLowerCase().includes(searchQuery.toLowerCase()) ||
    item.category.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col font-sans">
      {/* OS Navigation Header Bar */}
      <header className="bg-slate-900 border-b border-slate-800 sticky top-0 z-40 px-4 py-3 flex items-center justify-between shadow-lg">
        <div className="flex items-center gap-3">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-slate-400 hover:text-white"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>

          <div className="flex items-center gap-2">
            <div className="p-2 bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 rounded-xl shadow-inner">
              <Cpu className="w-5 h-5" />
            </div>
            <div>
              <h1 className="text-lg font-bold text-white tracking-wide leading-none flex items-center gap-2">
                NEET OS <span className="text-[10px] bg-cyan-500/20 text-cyan-300 border border-cyan-500/30 px-1.5 py-0.5 rounded font-mono">ACTIVE OS V2</span>
              </h1>
              <p className="text-[11px] text-slate-400 hidden sm:block mt-0.5">
                MAKE ME THINK BEFORE THE APP THINKS FOR ME
              </p>
            </div>
          </div>
        </div>

        {/* Search / Command Bar */}
        <div className="relative max-w-xs w-full hidden sm:block">
          <Search className="w-4 h-4 text-slate-500 absolute left-3 top-2.5" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search active learning systems..."
            className="w-full bg-slate-950 border border-slate-800 rounded-lg pl-9 pr-3 py-1.5 text-xs text-slate-200 placeholder-slate-600 focus:ring-2 focus:ring-cyan-500 focus:outline-none"
          />
        </div>
      </header>

      {/* Main OS Layout Body */}
      <div className="flex-1 flex overflow-hidden">
        {/* Sidebar Navigation Drawer */}
        <aside
          className={`fixed md:relative inset-y-0 left-0 z-30 w-64 bg-slate-900 border-r border-slate-800 p-4 transform transition-transform duration-200 ease-in-out md:translate-x-0 ${
            mobileMenuOpen ? 'translate-x-0 bg-slate-900/95 backdrop-blur-md' : '-translate-x-full md:translate-x-0'
          }`}
        >
          <div className="text-[11px] font-bold uppercase tracking-wider text-slate-500 mb-3 px-2">
            Active Learning Systems
          </div>

          <div className="space-y-1 overflow-y-auto max-h-[calc(100vh-140px)] pr-1">
            {filteredNav.map(item => {
              const IconComponent = item.icon;
              const isActive = activeTab === item.id;

              return (
                <button
                  key={item.id}
                  onClick={() => {
                    setActiveTab(item.id as NavigationTab);
                    setMobileMenuOpen(false);
                  }}
                  className={`w-full flex items-center justify-between px-3 py-2.5 rounded-lg text-xs font-semibold transition-all ${
                    isActive
                      ? 'bg-cyan-600 text-slate-950 font-bold shadow-lg shadow-cyan-950/40'
                      : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800/80'
                  }`}
                >
                  <div className="flex items-center gap-2.5 truncate">
                    <IconComponent className={`w-4 h-4 shrink-0 ${isActive ? 'text-slate-950' : 'text-slate-400'}`} />
                    <span className="truncate">{item.label}</span>
                  </div>
                  {isActive && <ChevronRight className="w-3.5 h-3.5 text-slate-950 shrink-0" />}
                </button>
              );
            })}
          </div>
        </aside>

        {/* Main Workspace Workspace Canvas */}
        <main className="flex-1 overflow-y-auto p-4 md:p-8 space-y-6 max-w-6xl mx-auto w-full">
          {activeTab === 'topic_resource_hub' && (
            <TopicResourceHub />
          )}

          {activeTab === 'learn_backwards' && (
            <LearnBackwards onLaunchWhyEngine={handleRouteToWhy} />
          )}

          {activeTab === 'concept_graph' && (
            <ConceptGraph />
          )}

          {activeTab === 'science_connections' && (
            <ScienceConnections />
          )}

          {activeTab === 'why_engine' && (
            <WhyEngine initialConceptId={targetConceptId} onNavigateBackwards={() => handleRouteToBackwards(targetConceptId)} />
          )}

          {activeTab === 'concept_defence' && (
            <ConceptDefence />
          )}

          {activeTab === 'blurting' && (
            <BlurtingSystem onNavigateBackwards={handleRouteToBackwards} />
          )}

          {activeTab === 'recall_gate' && (
            <RecallGate />
          )}

          {activeTab === 'visualise_first' && (
            <VisualiseFirst />
          )}

          {activeTab === 'question_analyzer' && (
            <QuestionAnalyzer />
          )}

          {activeTab === 'pyq_visualiser' && (
            <PYQVisualiser />
          )}

          {activeTab === 'formula_sprint' && (
            <FormulaSprint />
          )}

          {activeTab === 'reverse_question' && (
            <ReverseQuestionCreation />
          )}

          {activeTab === 'memory_palace' && (
            <MemoryPalace />
          )}

          {activeTab === 'simulation_lab' && (
            <ScienceSimulationLab />
          )}

          {activeTab === 'transfer_training' && (
            <TransferTraining />
          )}

          {activeTab === 'global_teacher' && (
            <GlobalTeacherResource />
          )}

          {activeTab === 'sq3r' && (
            <SQ3RSystem />
          )}

          {activeTab === 'daily_recall' && (
            <DailyRecall />
          )}

          {activeTab === 'mistake_training' && (
            <MistakeTrainingLoop onNavigateBackwards={handleRouteToBackwards} />
          )}
        </main>
      </div>
    </div>
  );
};

export function App() {
  return (
    <OSProvider>
      <MainAppContent />
    </OSProvider>
  );
}

export default App;
