import React, { useState } from 'react';
import { useOS } from '../context/OSContext';
import { Lock, Eye, RotateCcw } from 'lucide-react';

export const RecallGate: React.FC = () => {
  const { concepts, saveRecallGateSession } = useOS();
  const [selectedConceptId, setSelectedConceptId] = useState<string>(concepts[0]?.id || 'colligative_properties');
  const [reconstruction, setReconstruction] = useState<string>('');
  const [revealed, setRevealed] = useState<boolean>(false);
  const [rating, setRating] = useState<'complete' | 'partial' | 'failed' | null>(null);

  const concept = concepts.find(c => c.id === selectedConceptId) || concepts[0];

  const handleReveal = () => {
    if (!reconstruction.trim()) return;
    setRevealed(true);
  };

  const handleRate = (rate: 'complete' | 'partial' | 'failed') => {
    setRating(rate);
    saveRecallGateSession({
      id: 'gate_' + Date.now(),
      conceptId: concept.id,
      timestamp: new Date().toISOString(),
      userReconstruction: reconstruction,
      selfRating: rate
    });
  };

  const handleReset = () => {
    setReconstruction('');
    setRevealed(false);
    setRating(null);
  };

  return (
    <div className="bg-slate-900 border border-slate-800 rounded-xl p-6 text-slate-100 shadow-xl space-y-6">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-slate-800 pb-4">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-xs font-semibold rounded-full uppercase tracking-wider mb-2">
            <Lock className="w-3.5 h-3.5" />
            5. 24-HOUR RECALL GATE
          </div>
          <h2 className="text-2xl font-bold text-white">Blank Screen Generation Gate</h2>
          <p className="text-sm text-slate-400 mt-1">
            BLANK SCREEN → GENERATION → COMPARISON. Reconstruct the entire concept before viewing reference material.
          </p>
        </div>

        {/* Concept Picker */}
        <select
          value={selectedConceptId}
          onChange={(e) => {
            setSelectedConceptId(e.target.value);
            handleReset();
          }}
          className="bg-slate-800 border border-slate-700 text-cyan-300 text-sm rounded-lg px-3 py-2 focus:ring-2 focus:ring-cyan-500 focus:outline-none"
        >
          {concepts.map(c => (
            <option key={c.id} value={c.id}>
              [{c.subject}] {c.title}
            </option>
          ))}
        </select>
      </div>

      {/* Main Recall Gate Canvas */}
      <div className="bg-slate-950 border border-slate-800 rounded-xl p-6 space-y-5">
        <div className="flex items-center justify-between border-b border-slate-800 pb-3">
          <div>
            <span className="text-xs text-cyan-400 font-mono uppercase">RECALL GATE CHALLENGE</span>
            <h3 className="text-xl font-bold text-white">{concept.title}</h3>
          </div>

          {revealed && (
            <button
              onClick={handleReset}
              className="p-2 bg-slate-800 hover:bg-slate-700 text-slate-300 rounded-lg text-xs flex items-center gap-1.5"
            >
              <RotateCcw className="w-4 h-4" />
              Reset Gate
            </button>
          )}
        </div>

        {!revealed ? (
          <div className="space-y-4">
            <p className="text-sm text-slate-300">
              Without looking at any notes or formulas, write down the complete concept: physical model, formula, assumptions, and edge cases.
            </p>

            <textarea
              value={reconstruction}
              onChange={(e) => setReconstruction(e.target.value)}
              placeholder="Reconstruct concept from memory here..."
              rows={6}
              className="w-full bg-slate-900 border border-slate-800 rounded-xl p-4 text-sm text-slate-100 placeholder-slate-600 focus:ring-2 focus:ring-cyan-500 focus:outline-none font-sans"
            />

            <button
              disabled={!reconstruction.trim()}
              onClick={handleReveal}
              className="w-full py-3 bg-cyan-600 hover:bg-cyan-500 disabled:opacity-40 text-slate-950 font-bold text-xs uppercase tracking-wider rounded-xl transition-all shadow-lg shadow-cyan-950/40 flex items-center justify-center gap-2"
            >
              <Eye className="w-4 h-4" />
              Reveal Reference & Compare
            </button>
          </div>
        ) : (
          <div className="space-y-6 animate-fadeIn">
            {/* Comparison Side-By-Side */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
              {/* User Generation */}
              <div className="bg-slate-900 p-4 rounded-xl border border-cyan-500/30 space-y-2">
                <span className="text-xs font-bold text-cyan-400 uppercase tracking-wider block">Your Memory Reconstruction</span>
                <p className="text-sm text-slate-200 whitespace-pre-wrap font-sans leading-relaxed">{reconstruction}</p>
              </div>

              {/* Verified Reference */}
              <div className="bg-slate-900 p-4 rounded-xl border border-emerald-500/30 space-y-3">
                <span className="text-xs font-bold text-emerald-400 uppercase tracking-wider block">Verified Reference Material</span>
                <p className="text-sm text-slate-200 font-sans leading-relaxed">{concept.summary}</p>
                <div className="space-y-1 pt-2 border-t border-slate-800">
                  <span className="text-[11px] font-semibold text-slate-400">Formal Equations:</span>
                  <div className="flex flex-wrap gap-1">
                    {concept.formalEquations.map((eq, i) => (
                      <span key={i} className="px-2 py-0.5 bg-slate-950 text-cyan-300 font-mono text-xs rounded border border-slate-800">
                        {eq}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Self Rating Buttons */}
            <div className="p-4 bg-slate-900 rounded-xl border border-slate-800 space-y-3">
              <span className="text-xs font-semibold text-slate-300 block">How accurate was your memory reconstruction?</span>
              <div className="grid grid-cols-3 gap-3">
                <button
                  onClick={() => handleRate('complete')}
                  className={`py-2.5 px-3 rounded-lg text-xs font-semibold border transition-all ${
                    rating === 'complete'
                      ? 'bg-emerald-600 border-emerald-400 text-white'
                      : 'bg-slate-950 border-slate-800 text-slate-300 hover:border-emerald-500/40'
                  }`}
                >
                  Complete & Accurate
                </button>
                <button
                  onClick={() => handleRate('partial')}
                  className={`py-2.5 px-3 rounded-lg text-xs font-semibold border transition-all ${
                    rating === 'partial'
                      ? 'bg-amber-600 border-amber-400 text-slate-950 font-bold'
                      : 'bg-slate-950 border-slate-800 text-slate-300 hover:border-amber-500/40'
                  }`}
                >
                  Partial Reconstruction
                </button>
                <button
                  onClick={() => handleRate('failed')}
                  className={`py-2.5 px-3 rounded-lg text-xs font-semibold border transition-all ${
                    rating === 'failed'
                      ? 'bg-rose-600 border-rose-400 text-white'
                      : 'bg-slate-950 border-slate-800 text-slate-300 hover:border-rose-500/40'
                  }`}
                >
                  Failed Retrieval
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
