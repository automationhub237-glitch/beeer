import React, { useState } from 'react';
import { useOS } from '../context/OSContext';
import type { ConceptNode } from '../types/neetOS';
import { Network, Link2, Plus, ArrowRight, Zap, Sparkles, BookOpen } from 'lucide-react';

export const ConceptGraph: React.FC = () => {
  const { concepts, customConnections, addCustomConnection } = useOS();
  const [selectedConceptId, setSelectedConceptId] = useState<string>(concepts[0]?.id || 'colligative_properties');
  const [showAddModal, setShowAddModal] = useState<boolean>(false);
  const [targetId, setTargetId] = useState<string>('');
  const [rationale, setRationale] = useState<string>('');

  const selectedConcept = concepts.find(c => c.id === selectedConceptId) || concepts[0];

  // Combine direct concept linkages + user custom linkages
  const getDirectConnections = (concept: ConceptNode): ConceptNode[] => {
    const directIds = new Set(concept.connectedConceptIds || []);
    // include custom linkages
    customConnections.forEach(c => {
      if (c.sourceConceptId === concept.id) directIds.add(c.targetConceptId);
      if (c.targetConceptId === concept.id) directIds.add(c.sourceConceptId);
    });
    return concepts.filter(c => directIds.has(c.id));
  };

  const connectedNodes = selectedConcept ? getDirectConnections(selectedConcept) : [];

  const handleCreateConnection = (e: React.FormEvent) => {
    e.preventDefault();
    if (!targetId || !rationale) return;
    addCustomConnection(selectedConcept.id, targetId, rationale);
    setTargetId('');
    setRationale('');
    setShowAddModal(false);
  };

  return (
    <div className="bg-slate-900 border border-slate-800 rounded-xl p-6 text-slate-100 shadow-xl space-y-6">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-slate-800 pb-4">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-indigo-500/10 border border-indigo-500/30 text-indigo-400 text-xs font-semibold rounded-full uppercase tracking-wider mb-2">
            <Network className="w-3.5 h-3.5" />
            2. FINISH → CONNECT BY CONCEPT
          </div>
          <h2 className="text-2xl font-bold text-white">Visual Knowledge Graph</h2>
          <p className="text-sm text-slate-400 mt-1">
            Do not treat chapters as isolated boxes. Understand how every concept connects across Physics, Chemistry, and Biology.
          </p>
        </div>

        <button
          onClick={() => setShowAddModal(true)}
          className="inline-flex items-center justify-center gap-2 px-4 py-2 bg-indigo-600 hover:bg-indigo-500 text-white text-xs font-semibold rounded-lg transition-colors shadow-lg shadow-indigo-950/40"
        >
          <Plus className="w-4 h-4" />
          Create Manual Connection
        </button>
      </div>

      {/* Main Interactive Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Concept Selector Panel */}
        <div className="bg-slate-950 p-4 rounded-xl border border-slate-800/80 space-y-3">
          <h3 className="text-xs font-semibold text-slate-400 uppercase tracking-wider flex items-center gap-1.5">
            <BookOpen className="w-3.5 h-3.5 text-indigo-400" />
            Select Core Node
          </h3>
          <div className="space-y-2 max-h-[380px] overflow-y-auto pr-1">
            {concepts.map(c => {
              const isSelected = c.id === selectedConcept.id;
              return (
                <div
                  key={c.id}
                  onClick={() => setSelectedConceptId(c.id)}
                  className={`p-3 rounded-lg border cursor-pointer transition-all ${
                    isSelected
                      ? 'bg-indigo-950/60 border-indigo-500 text-white ring-1 ring-indigo-500/40'
                      : 'bg-slate-900 border-slate-800 text-slate-400 hover:text-slate-200 hover:border-slate-700'
                  }`}
                >
                  <div className="flex items-center justify-between text-[11px] font-mono text-indigo-400">
                    <span>{c.subject}</span>
                    <span>{c.chapter}</span>
                  </div>
                  <div className="font-semibold text-sm mt-1 text-slate-100">{c.title}</div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Selected Core Node Visual Center */}
        <div className="lg:col-span-2 bg-slate-950 p-5 rounded-xl border border-slate-800/80 space-y-5">
          <div className="flex items-start justify-between border-b border-slate-800 pb-3">
            <div>
              <span className="text-xs px-2.5 py-0.5 bg-indigo-500/20 text-indigo-300 rounded font-mono">
                {selectedConcept.subject} • {selectedConcept.chapter}
              </span>
              <h3 className="text-2xl font-bold text-white mt-2">{selectedConcept.title}</h3>
              <p className="text-sm text-slate-300 mt-2 leading-relaxed">{selectedConcept.summary}</p>
            </div>
          </div>

          {/* Cross Subject Links */}
          <div className="space-y-3">
            <h4 className="text-xs font-semibold text-slate-400 uppercase tracking-wider flex items-center gap-1.5">
              <Zap className="w-4 h-4 text-amber-400" />
              Cross-Subject Science Connections (Physics / Chem / Bio)
            </h4>

            {selectedConcept.crossSubjectConnections && selectedConcept.crossSubjectConnections.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {selectedConcept.crossSubjectConnections.map((cross, idx) => (
                  <div key={idx} className="p-3 bg-slate-900 border border-amber-500/20 rounded-lg space-y-1.5">
                    <div className="flex items-center justify-between text-xs">
                      <span className="font-bold text-amber-300">{cross.targetSubject}</span>
                      <span className="text-[10px] bg-amber-500/10 text-amber-400 px-1.5 py-0.5 rounded border border-amber-500/20">INTER-DISCIPLINARY</span>
                    </div>
                    <div className="font-semibold text-sm text-slate-100">{cross.targetTitle}</div>
                    <p className="text-xs text-slate-400 italic">"{cross.rationale}"</p>
                  </div>
                ))}
              </div>
            ) : (
              <p className="text-xs text-slate-500 italic bg-slate-900/50 p-3 rounded-lg border border-slate-800/50">
                No automatic cross-subject connections cataloged for this node yet. Use manual connection below!
              </p>
            )}
          </div>

          {/* Connected Network Graph Nodes */}
          <div className="space-y-3 pt-2">
            <h4 className="text-xs font-semibold text-slate-400 uppercase tracking-wider flex items-center gap-1.5">
              <Link2 className="w-4 h-4 text-indigo-400" />
              Direct Concept Connections ({connectedNodes.length})
            </h4>

            <div className="flex flex-wrap gap-2">
              {connectedNodes.map(node => (
                <div
                  key={node.id}
                  onClick={() => setSelectedConceptId(node.id)}
                  className="flex items-center gap-2 px-3 py-2 bg-indigo-950/40 border border-indigo-500/30 hover:border-indigo-400 text-indigo-200 rounded-lg text-xs font-semibold cursor-pointer transition-all hover:scale-105"
                >
                  <Sparkles className="w-3.5 h-3.5 text-indigo-400" />
                  <span>{node.title}</span>
                  <ArrowRight className="w-3 h-3 text-indigo-400" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Custom Connection Modal */}
      {showAddModal && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-slate-900 border border-slate-800 rounded-xl p-6 max-w-lg w-full space-y-4 shadow-2xl">
            <h3 className="text-lg font-bold text-white flex items-center gap-2">
              <Plus className="w-5 h-5 text-indigo-400" />
              Connect "{selectedConcept.title}" To Another Concept
            </h3>

            <form onSubmit={handleCreateConnection} className="space-y-4">
              <div>
                <label className="text-xs font-semibold text-slate-400 block mb-1">Target Concept</label>
                <select
                  value={targetId}
                  onChange={(e) => setTargetId(e.target.value)}
                  className="w-full bg-slate-950 border border-slate-800 text-slate-200 text-sm rounded-lg p-2.5 focus:ring-2 focus:ring-indigo-500 focus:outline-none"
                  required
                >
                  <option value="">-- Select Target Concept --</option>
                  {concepts.filter(c => c.id !== selectedConcept.id).map(c => (
                    <option key={c.id} value={c.id}>
                      [{c.subject}] {c.title}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="text-xs font-semibold text-slate-400 block mb-1">
                  What is the scientific connection / rationale?
                </label>
                <textarea
                  value={rationale}
                  onChange={(e) => setRationale(e.target.value)}
                  placeholder="e.g. Both rely on thermodynamic gradient forces driving equilibrium..."
                  rows={3}
                  className="w-full bg-slate-950 border border-slate-800 text-slate-200 text-sm rounded-lg p-2.5 focus:ring-2 focus:ring-indigo-500 focus:outline-none placeholder-slate-600"
                  required
                />
              </div>

              <div className="flex items-center justify-end gap-3 pt-2">
                <button
                  type="button"
                  onClick={() => setShowAddModal(false)}
                  className="px-4 py-2 bg-slate-800 hover:bg-slate-700 text-slate-300 text-xs font-semibold rounded-lg"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 bg-indigo-600 hover:bg-indigo-500 text-white text-xs font-semibold rounded-lg shadow-lg shadow-indigo-950/50"
                >
                  Save Connection
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};
