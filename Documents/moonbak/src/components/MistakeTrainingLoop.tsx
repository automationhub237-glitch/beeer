import React, { useState } from 'react';
import { useOS } from '../context/OSContext';
import { FAILURE_LAYER_DESCRIPTIONS } from '../types/neetOS';
import type { FailureLayer } from '../types/neetOS';
import { Wrench, CheckCircle2, ChevronRight } from 'lucide-react';

export const MistakeTrainingLoop: React.FC<{ onNavigateBackwards?: (conceptId: string) => void }> = ({ onNavigateBackwards }) => {
  const { mistakeLogs, resolveMistake } = useOS();
  const [filterLayer, setFilterLayer] = useState<FailureLayer | 'ALL'>('ALL');

  const filteredLogs = mistakeLogs.filter(m => {
    if (filterLayer === 'ALL') return true;
    return m.failedLayer === filterLayer;
  });

  return (
    <div className="bg-slate-900 border border-slate-800 rounded-xl p-6 text-slate-100 shadow-xl space-y-6">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-slate-800 pb-4">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-rose-500/10 border border-rose-500/30 text-rose-400 text-xs font-semibold rounded-full uppercase tracking-wider mb-2">
            <Wrench className="w-3.5 h-3.5" />
            25. MISTAKE → TRAINING LOOP
          </div>
          <h2 className="text-2xl font-bold text-white">Targeted Mistake Training Engine</h2>
          <p className="text-sm text-slate-400 mt-1">
            Every mistake triggers a specific layer training pathway rather than passive notebook storage.
          </p>
        </div>

        {/* Filter by Failure Layer */}
        <div className="flex items-center gap-2">
          <label className="text-xs text-slate-400 font-semibold">Failure Layer:</label>
          <select
            value={filterLayer}
            onChange={(e) => setFilterLayer(e.target.value === 'ALL' ? 'ALL' : (Number(e.target.value) as FailureLayer))}
            className="bg-slate-800 border border-slate-700 text-rose-300 text-xs rounded-lg px-3 py-2"
          >
            <option value="ALL">All Layers (1 - 6)</option>
            {([1, 2, 3, 4, 5, 6] as FailureLayer[]).map(l => (
              <option key={l} value={l}>
                Layer {l}: {FAILURE_LAYER_DESCRIPTIONS[l].name}
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* Mistake Cards */}
      {filteredLogs.length === 0 ? (
        <div className="bg-slate-950 border border-slate-800 rounded-xl p-8 text-center space-y-2">
          <CheckCircle2 className="w-10 h-10 text-emerald-400 mx-auto" />
          <h3 className="text-lg font-bold text-white">No Active Mistakes Logged for this Layer</h3>
          <p className="text-xs text-slate-400 max-w-sm mx-auto">
            Great job! When you encounter errors in PYQ Visualiser or Question Analyzer, they will auto-route into specific training exercises here.
          </p>
        </div>
      ) : (
        <div className="space-y-4">
          {filteredLogs.map(m => {
            const layerInfo = FAILURE_LAYER_DESCRIPTIONS[m.failedLayer];

            return (
              <div
                key={m.id}
                className={`bg-slate-950 border p-5 rounded-xl space-y-3 transition-all ${
                  m.resolved ? 'border-slate-800 opacity-60' : 'border-rose-500/40 shadow-lg shadow-rose-950/20'
                }`}
              >
                <div className="flex items-center justify-between border-b border-slate-800 pb-2">
                  <div className="flex items-center gap-2 text-xs font-mono">
                    <span className="px-2 py-0.5 bg-rose-950 text-rose-300 border border-rose-600/40 rounded font-bold">
                      Layer {m.failedLayer}: {layerInfo.name}
                    </span>
                    <span className="text-slate-400">{m.subject}</span>
                  </div>

                  {!m.resolved ? (
                    <button
                      onClick={() => resolveMistake(m.id)}
                      className="px-3 py-1 bg-emerald-600 hover:bg-emerald-500 text-white text-[11px] font-bold uppercase rounded"
                    >
                      Mark Resolved
                    </button>
                  ) : (
                    <span className="text-[11px] text-emerald-400 font-bold flex items-center gap-1">
                      <CheckCircle2 className="w-3.5 h-3.5" /> Resolved
                    </span>
                  )}
                </div>

                <div className="space-y-1">
                  <h4 className="text-sm font-bold text-white">{m.questionTitle}</h4>
                  <p className="text-xs text-slate-300">Diagnostic Cause: "{m.userNotes}"</p>
                </div>

                {/* Layer Specific System Action */}
                <div className="p-3 bg-slate-900 border border-slate-800 rounded-lg flex items-center justify-between gap-3 text-xs">
                  <div className="text-slate-300">
                    <strong className="text-rose-400 block">Required System Action:</strong>
                    {layerInfo.action}
                  </div>

                  {m.failedLayer === 1 && onNavigateBackwards && (
                    <button
                      onClick={() => onNavigateBackwards(m.conceptId)}
                      className="px-3 py-1.5 bg-cyan-600 hover:bg-cyan-500 text-slate-950 font-bold text-[11px] uppercase rounded flex items-center gap-1 shrink-0"
                    >
                      <span>Learn Backwards</span>
                      <ChevronRight className="w-3.5 h-3.5" />
                    </button>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};
