import React, { useState } from 'react';
import { useOS } from '../context/OSContext';
import type { Subject } from '../types/neetOS';
import { Globe2, Atom, Dna, Flame, Sparkles, Filter } from 'lucide-react';

export const ScienceConnections: React.FC = () => {
  const { concepts, customConnections } = useOS();
  const [filterSubject, setFilterSubject] = useState<Subject | 'ALL'>('ALL');

  // Collect all cross-subject connections from concept database + custom user connections
  const allCrossConnections = concepts.flatMap(c => {
    const list = (c.crossSubjectConnections || []).map(conn => ({
      sourceConcept: c,
      targetSubject: conn.targetSubject,
      targetTitle: conn.targetTitle,
      rationale: conn.rationale,
      isCustom: false
    }));

    // append custom user connections where c is source
    const customForThis = customConnections
      .filter(conn => conn.sourceConceptId === c.id)
      .map(conn => {
        const targetObj = concepts.find(t => t.id === conn.targetConceptId);
        return {
          sourceConcept: c,
          targetSubject: targetObj?.subject || ('Cross-Disciplinary' as Subject),
          targetTitle: targetObj?.title || 'Unknown Concept',
          rationale: conn.rationale,
          isCustom: true
        };
      });

    return [...list, ...customForThis];
  });

  const filtered = allCrossConnections.filter(item => {
    if (filterSubject === 'ALL') return true;
    return item.sourceConcept.subject === filterSubject || item.targetSubject === filterSubject;
  });

  return (
    <div className="bg-slate-900 border border-slate-800 rounded-xl p-6 text-slate-100 shadow-xl space-y-6">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-slate-800 pb-4">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-semibold rounded-full uppercase tracking-wider mb-2">
            <Globe2 className="w-3.5 h-3.5" />
            17. CROSS-SUBJECT SCIENCE CONNECTIONS
          </div>
          <h2 className="text-2xl font-bold text-white">Unified Interdisciplinary Science Engine</h2>
          <p className="text-sm text-slate-400 mt-1">
            Physics, Chemistry, and Biology are not isolated silos—they are three views of the same reality.
          </p>
        </div>

        {/* Filter Pills */}
        <div className="flex items-center gap-2 overflow-x-auto pb-1">
          <Filter className="w-4 h-4 text-slate-400 shrink-0" />
          {(['ALL', 'Physics', 'Chemistry', 'Biology'] as const).map(subj => (
            <button
              key={subj}
              onClick={() => setFilterSubject(subj)}
              className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-colors ${
                filterSubject === subj
                  ? 'bg-amber-500 text-slate-950 font-bold shadow-md shadow-amber-950/40'
                  : 'bg-slate-800 text-slate-400 hover:text-slate-200 hover:bg-slate-700'
              }`}
            >
              {subj}
            </button>
          ))}
        </div>
      </div>

      {/* Grid of Connections */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {filtered.map((item, idx) => {
          const getIcon = (subj: Subject) => {
            if (subj === 'Physics') return <Atom className="w-4 h-4 text-cyan-400" />;
            if (subj === 'Chemistry') return <Flame className="w-4 h-4 text-amber-400" />;
            return <Dna className="w-4 h-4 text-emerald-400" />;
          };

          return (
            <div
              key={idx}
              className="bg-slate-950 border border-slate-800/80 hover:border-amber-500/40 rounded-xl p-5 space-y-3 transition-all hover:scale-[1.01]"
            >
              {/* Source -> Target Disciplinary Header */}
              <div className="flex items-center justify-between text-xs font-mono border-b border-slate-800 pb-2">
                <div className="flex items-center gap-1.5">
                  {getIcon(item.sourceConcept.subject)}
                  <span className="font-bold text-slate-200">{item.sourceConcept.subject}</span>
                </div>
                <span className="text-amber-400 font-bold">↔</span>
                <div className="flex items-center gap-1.5">
                  {getIcon(item.targetSubject)}
                  <span className="font-bold text-slate-200">{item.targetSubject}</span>
                </div>
              </div>

              {/* Connected Titles */}
              <div className="space-y-1">
                <div className="flex items-center justify-between text-sm font-semibold text-white">
                  <span>{item.sourceConcept.title}</span>
                </div>
                <div className="text-xs text-amber-300 font-medium flex items-center gap-1">
                  <Sparkles className="w-3 h-3 text-amber-400" />
                  <span>Connects with: {item.targetTitle}</span>
                </div>
              </div>

              {/* Rationale Explanation */}
              <p className="text-xs text-slate-300 bg-slate-900/80 p-3 rounded-lg border border-slate-800/80 italic leading-relaxed">
                "{item.rationale}"
              </p>

              {item.isCustom && (
                <div className="flex justify-end">
                  <span className="text-[10px] bg-indigo-500/10 text-indigo-300 border border-indigo-500/30 px-2 py-0.5 rounded">
                    USER CREATED LINK
                  </span>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};
