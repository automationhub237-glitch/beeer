import React, { useState } from 'react';
import { useOS } from '../context/OSContext';
import type { ConceptNode } from '../types/neetOS';
import { GitCommit, CheckCircle2, AlertTriangle, Layers, Filter } from 'lucide-react';

interface LearnBackwardsProps {
  onSelectConcept?: (conceptId: string) => void;
  onLaunchWhyEngine?: (conceptId: string) => void;
}

export const LearnBackwards: React.FC<LearnBackwardsProps> = ({ onLaunchWhyEngine }) => {
  const { concepts, syllabus } = useOS();

  const [selectedSubject, setSelectedSubject] = useState<string>('All');
  const [selectedChapter, setSelectedChapter] = useState<string>('All');
  const [selectedTargetId, setSelectedTargetId] = useState<string>(concepts[0]?.id || 'colligative_properties');
  const [currentLevelIndex, setCurrentLevelIndex] = useState<number>(0);
  const [bottleneckConcept, setBottleneckConcept] = useState<ConceptNode | null>(null);
  const [userUnderstandingNote, setUserUnderstandingNote] = useState<string>('');
  const [testResult, setTestResult] = useState<'passed' | 'failed' | null>(null);

  // Filter concepts based on subject and chapter
  const filteredConcepts = concepts.filter(c => {
    if (selectedSubject !== 'All' && c.subject !== selectedSubject) return false;
    if (selectedChapter !== 'All' && c.chapter !== selectedChapter) return false;
    return true;
  });

  const targetConcept = concepts.find(c => c.id === selectedTargetId) || filteredConcepts[0] || concepts[0];

  // Reconstruct chain backwards from target to foundational prerequisites
  const getPrerequisiteChain = (concept: ConceptNode): ConceptNode[] => {
    if (concept.targetChain && concept.targetChain.length > 0) {
      // Build level nodes from targetChain strings
      return concept.targetChain.map((levelTitle, idx) => ({
        ...concept,
        id: `${concept.id}_level_${idx}`,
        title: levelTitle,
        summary: `Level ${idx + 1} prerequisite in the recursive learning chain for ${concept.title}.`
      })).reverse();
    }

    const chain: ConceptNode[] = [concept];
    let curr = concept;
    while (curr.prerequisites && curr.prerequisites.length > 0) {
      const parent = concepts.find(c => c.id === curr.prerequisites[0]);
      if (parent && !chain.some(item => item.id === parent.id)) {
        chain.push(parent);
        curr = parent;
      } else {
        break;
      }
    }
    return chain; // Target -> Prereq 1 -> Prereq 2 -> Foundation
  };

  const currentChain = targetConcept ? getPrerequisiteChain(targetConcept) : [];
  // Chain in ascending level order: Foundation (index 0) to Target (last index)
  const ascendingChain = [...currentChain].reverse();
  const activeLevelConcept = ascendingChain[currentLevelIndex] || targetConcept;

  const handleVerifyUnderstanding = (understood: boolean) => {
    if (understood) {
      setTestResult('passed');
      setBottleneckConcept(null);
      if (currentLevelIndex < ascendingChain.length - 1) {
        setTimeout(() => {
          setCurrentLevelIndex(prev => prev + 1);
          setTestResult(null);
          setUserUnderstandingNote('');
        }, 1200);
      }
    } else {
      setTestResult('failed');
      const bottleneck = activeLevelConcept;
      setBottleneckConcept(bottleneck);
      // Drop user back to the foundation or previous prerequisite level
      if (currentLevelIndex > 0) {
        setCurrentLevelIndex(prev => Math.max(0, prev - 1));
      }
    }
  };

  return (
    <div className="bg-slate-900 border border-slate-800 rounded-xl p-6 text-slate-100 shadow-xl space-y-6">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-slate-800 pb-4">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-xs font-semibold rounded-full uppercase tracking-wider mb-2">
            <Layers className="w-3.5 h-3.5" />
            1. REVERSE KNOWLEDGE / BACKWARDS LEARNING ENGINE
          </div>
          <h2 className="text-2xl font-bold text-white">Full Syllabus Backward Traversal</h2>
          <p className="text-sm text-slate-400 mt-1">
            Target any exam-level concept across the Master Syllabus and recursively work backwards to fundamental principles.
          </p>
        </div>
      </div>

      {/* Master Syllabus Filters & Concept Target Selector */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-3 bg-slate-950 p-4 rounded-xl border border-slate-800">
        <div>
          <label className="text-[11px] font-bold uppercase tracking-wider text-slate-400 flex items-center gap-1 mb-1">
            <Filter className="w-3 h-3 text-cyan-400" /> Subject
          </label>
          <select
            value={selectedSubject}
            onChange={(e) => {
              setSelectedSubject(e.target.value);
              setSelectedChapter('All');
              setCurrentLevelIndex(0);
            }}
            className="w-full bg-slate-900 border border-slate-800 text-xs text-white rounded-lg p-2.5 focus:ring-2 focus:ring-cyan-500 focus:outline-none"
          >
            <option value="All">All Subjects</option>
            <option value="Physics">Physics</option>
            <option value="Chemistry">Chemistry</option>
            <option value="Biology">Biology</option>
          </select>
        </div>

        <div>
          <label className="text-[11px] font-bold uppercase tracking-wider text-slate-400 block mb-1">Chapter</label>
          <select
            value={selectedChapter}
            onChange={(e) => {
              setSelectedChapter(e.target.value);
              setCurrentLevelIndex(0);
            }}
            className="w-full bg-slate-900 border border-slate-800 text-xs text-white rounded-lg p-2.5 focus:ring-2 focus:ring-cyan-500 focus:outline-none"
          >
            <option value="All">All Chapters</option>
            {syllabus
              .filter(s => selectedSubject === 'All' || s.subject === selectedSubject)
              .flatMap(s => s.chapters)
              .map(ch => (
                <option key={ch.id} value={ch.title}>{ch.title}</option>
              ))}
          </select>
        </div>

        <div>
          <label className="text-[11px] font-bold uppercase tracking-wider text-slate-400 block mb-1">Target Concept</label>
          <select
            value={selectedTargetId}
            onChange={(e) => {
              setSelectedTargetId(e.target.value);
              setCurrentLevelIndex(0);
              setBottleneckConcept(null);
              setTestResult(null);
            }}
            className="w-full bg-slate-900 border border-slate-800 text-xs text-cyan-300 font-semibold rounded-lg p-2.5 focus:ring-2 focus:ring-cyan-500 focus:outline-none"
          >
            {filteredConcepts.map(c => (
              <option key={c.id} value={c.id}>
                [{c.subject}] {c.title}
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* Concept Reverse Chain Graph Visualizer */}
      <div className="bg-slate-950 p-4 rounded-xl border border-slate-800/80">
        <h3 className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-3">
          Reverse Knowledge Chain (Fundamental Concept → Target Exam Concept)
        </h3>
        
        <div className="flex flex-col md:flex-row items-stretch md:items-center justify-between gap-2 overflow-x-auto py-2">
          {ascendingChain.map((node, idx) => {
            const isCurrent = idx === currentLevelIndex;
            const isPassed = idx < currentLevelIndex;
            const isTargetNode = idx === ascendingChain.length - 1;

            return (
              <React.Fragment key={node.id + '_' + idx}>
                <div
                  onClick={() => {
                    setCurrentLevelIndex(idx);
                    setTestResult(null);
                  }}
                  className={`flex-1 min-w-[160px] p-3 rounded-lg border cursor-pointer transition-all ${
                    isCurrent
                      ? 'bg-cyan-950/60 border-cyan-500 text-cyan-200 ring-2 ring-cyan-500/30'
                      : isPassed
                      ? 'bg-emerald-950/30 border-emerald-600/40 text-emerald-300'
                      : 'bg-slate-900 border-slate-800 text-slate-500 hover:border-slate-700'
                  }`}
                >
                  <div className="flex items-center justify-between text-xs font-medium mb-1">
                    <span>Level {idx + 1}</span>
                    {isPassed && <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />}
                    {isTargetNode && <span className="text-[10px] bg-cyan-500/20 text-cyan-300 px-1.5 py-0.5 rounded">TARGET</span>}
                  </div>
                  <div className="font-semibold text-xs leading-snug line-clamp-2">{node.title}</div>
                  <div className="text-[10px] text-slate-400 mt-1 truncate">{node.chapter}</div>
                </div>

                {idx < ascendingChain.length - 1 && (
                  <div className="hidden md:flex items-center text-slate-600 shrink-0">
                    <GitCommit className="w-4 h-4 rotate-90 md:rotate-0" />
                  </div>
                )}
              </React.Fragment>
            );
          })}
        </div>
      </div>

      {/* Bottleneck Alert Banner */}
      {bottleneckConcept && (
        <div className="p-4 bg-rose-950/50 border border-rose-600/50 rounded-xl text-rose-200 flex items-start gap-3 animate-pulse">
          <AlertTriangle className="w-5 h-5 text-rose-400 shrink-0 mt-0.5" />
          <div>
            <h4 className="font-bold text-sm">PREREQUISITE BOTTLENECK DIAGNOSED!</h4>
            <p className="text-xs mt-1 text-rose-300">
              Your breakdown is at <span className="font-bold text-white underline">{bottleneckConcept.title}</span>.
              The system will NOT explain <span className="font-bold text-slate-200">{targetConcept.title}</span> again until this foundational bottleneck is resolved.
            </p>
          </div>
        </div>
      )}

      {/* Active Level Concept Challenge */}
      <div className="bg-slate-950 border border-slate-800 rounded-xl p-5 space-y-4">
        <div className="flex items-center justify-between border-b border-slate-800 pb-3">
          <div>
            <span className="text-xs text-cyan-400 font-semibold uppercase">Active Evaluation Level {currentLevelIndex + 1} of {ascendingChain.length}</span>
            <h3 className="text-lg font-bold text-white mt-0.5">{activeLevelConcept.title}</h3>
          </div>
          <span className="text-xs px-2.5 py-1 bg-slate-800 border border-slate-700 text-slate-300 rounded-md font-mono">
            {activeLevelConcept.subject}
          </span>
        </div>

        {/* Physical Model & Non-Symbolic Core */}
        <div className="space-y-2">
          <h4 className="text-xs font-semibold text-slate-400 uppercase tracking-wider">Physical Intuition & Mechanism</h4>
          <p className="text-sm text-slate-300 bg-slate-900/80 p-3 rounded-lg border border-slate-800 leading-relaxed font-sans">
            {activeLevelConcept.physicalModel}
          </p>
        </div>

        {/* Causal Active Retrieval Prompt */}
        <div className="space-y-2 pt-2">
          <h4 className="text-xs font-semibold text-slate-400 uppercase tracking-wider">
            Active Retrieval & Explanation Check
          </h4>
          <p className="text-sm font-medium text-cyan-200">
            {activeLevelConcept.whyPrompts?.[0]?.question || `Explain the core mechanism of ${activeLevelConcept.title} without relying on formulas.`}
          </p>
          <textarea
            value={userUnderstandingNote}
            onChange={(e) => setUserUnderstandingNote(e.target.value)}
            placeholder="Type your active explanation here to test recall..."
            rows={3}
            className="w-full bg-slate-900 border border-slate-800 rounded-lg p-3 text-sm text-slate-200 placeholder-slate-600 focus:ring-2 focus:ring-cyan-500 focus:outline-none"
          />
        </div>

        {/* Verification Check Buttons */}
        <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-3 border-t border-slate-800/80">
          <div className="text-xs text-slate-400">
            {testResult === 'passed' && <span className="text-emerald-400 font-semibold flex items-center gap-1"><CheckCircle2 className="w-4 h-4" /> Level Passed! Advancing...</span>}
            {testResult === 'failed' && <span className="text-rose-400 font-semibold flex items-center gap-1"><AlertTriangle className="w-4 h-4" /> Sent Backwards to missing prerequisite!</span>}
            {!testResult && <span>Can you explain this foundation with high confidence?</span>}
          </div>

          <div className="flex items-center gap-3 w-full sm:w-auto">
            <button
              onClick={() => handleVerifyUnderstanding(false)}
              className="flex-1 sm:flex-none px-4 py-2 bg-rose-900/40 border border-rose-700/50 hover:bg-rose-900/70 text-rose-200 text-xs font-semibold rounded-lg transition-colors"
            >
              I Struggle Here (Send Back)
            </button>
            <button
              onClick={() => handleVerifyUnderstanding(true)}
              className="flex-1 sm:flex-none px-5 py-2 bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-semibold rounded-lg transition-colors shadow-lg shadow-emerald-950/40"
            >
              I Mastered This (Advance)
            </button>
          </div>
        </div>
      </div>

      {/* Action Footer */}
      <div className="flex items-center justify-between text-xs text-slate-400 pt-2 border-t border-slate-800">
        <span>Target Goal: <strong className="text-slate-200">{targetConcept.title}</strong></span>
        {onLaunchWhyEngine && (
          <button
            onClick={() => onLaunchWhyEngine(targetConcept.id)}
            className="text-cyan-400 hover:underline flex items-center gap-1 font-medium"
          >
            Launch "Why Is This True?" Engine →
          </button>
        )}
      </div>
    </div>
  );
};
