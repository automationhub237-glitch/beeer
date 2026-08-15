import React, { useState } from 'react';
import { useOS } from '../context/OSContext';
import { Moon, Save, Calendar, CheckCircle2 } from 'lucide-react';

export const DailyRecall: React.FC = () => {
  const { dailySnapshots, saveDailySnapshot } = useOS();

  const [snapshot, setSnapshot] = useState({
    physicsRecall: '',
    chemistryRecall: '',
    biologyRecall: '',
    formulasRecalled: '',
    mechanismsRecalled: '',
    mistakesReflected: '',
    conceptsConnected: '',
    unresolvedGaps: ''
  });

  const [saved, setSaved] = useState<boolean>(false);

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();
    saveDailySnapshot({
      date: new Date().toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'short', day: 'numeric' }),
      ...snapshot
    });

    setSaved(true);
    setTimeout(() => setSaved(false), 3000);
  };

  return (
    <div className="bg-slate-900 border border-slate-800 rounded-xl p-6 text-slate-100 shadow-xl space-y-6">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-slate-800 pb-4">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-indigo-500/10 border border-indigo-500/30 text-indigo-400 text-xs font-semibold rounded-full uppercase tracking-wider mb-2">
            <Moon className="w-3.5 h-3.5" />
            23. END-OF-DAY CROSS-SUBJECT RECALL
          </div>
          <h2 className="text-2xl font-bold text-white">Daily Active Knowledge Snapshot</h2>
          <p className="text-sm text-slate-400 mt-1">
            BLANK SCREEN END-OF-DAY REFLECTION. Dump what you can explain without looking before sleeping.
          </p>
        </div>
      </div>

      {/* Snapshot Form */}
      <form onSubmit={handleSave} className="bg-slate-950 border border-slate-800 rounded-xl p-6 space-y-5">
        <h3 className="text-xs font-bold text-indigo-400 uppercase tracking-wider flex items-center gap-2">
          <Calendar className="w-4 h-4" /> Today's Active Knowledge Dump
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div>
            <label className="text-xs font-semibold text-cyan-400 block mb-1">Physics Recalled Without Looking</label>
            <textarea
              value={snapshot.physicsRecall}
              onChange={(e) => setSnapshot({ ...snapshot, physicsRecall: e.target.value })}
              placeholder="e.g. EMF induced in rotating rod ε = 1/2 B w L^2..."
              rows={3}
              className="w-full bg-slate-900 border border-slate-800 rounded-lg p-2.5 text-xs text-slate-200"
            />
          </div>

          <div>
            <label className="text-xs font-semibold text-amber-400 block mb-1">Chemistry Recalled Without Looking</label>
            <textarea
              value={snapshot.chemistryRecall}
              onChange={(e) => setSnapshot({ ...snapshot, chemistryRecall: e.target.value })}
              placeholder="e.g. Raoults Law partial pressure lowering and Van t Hoff factor i..."
              rows={3}
              className="w-full bg-slate-900 border border-slate-800 rounded-lg p-2.5 text-xs text-slate-200"
            />
          </div>

          <div>
            <label className="text-xs font-semibold text-emerald-400 block mb-1">Biology Recalled Without Looking</label>
            <textarea
              value={snapshot.biologyRecall}
              onChange={(e) => setSnapshot({ ...snapshot, biologyRecall: e.target.value })}
              placeholder="e.g. Water potential decrease with solute addition Ψw = Ψs + Ψp..."
              rows={3}
              className="w-full bg-slate-900 border border-slate-800 rounded-lg p-2.5 text-xs text-slate-200"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="text-xs font-semibold text-rose-400 block mb-1">Mistakes & Failure Layers Reflected Today</label>
            <textarea
              value={snapshot.mistakesReflected}
              onChange={(e) => setSnapshot({ ...snapshot, mistakesReflected: e.target.value })}
              placeholder="e.g. Overlooked 1/2 factor in rotational integration (Layer 5)..."
              rows={2}
              className="w-full bg-slate-900 border border-slate-800 rounded-lg p-2.5 text-xs text-slate-200"
            />
          </div>

          <div>
            <label className="text-xs font-semibold text-amber-300 block mb-1">Unresolved Foundational Gaps</label>
            <textarea
              value={snapshot.unresolvedGaps}
              onChange={(e) => setSnapshot({ ...snapshot, unresolvedGaps: e.target.value })}
              placeholder="e.g. Need to re-examine mole fraction prerequisite in Learn Backwards..."
              rows={2}
              className="w-full bg-slate-900 border border-slate-800 rounded-lg p-2.5 text-xs text-slate-200"
            />
          </div>
        </div>

        <button
          type="submit"
          className="w-full py-3 bg-indigo-600 hover:bg-indigo-500 text-white font-bold text-xs uppercase tracking-wider rounded-xl transition-all shadow-lg shadow-indigo-950/40 flex items-center justify-center gap-2"
        >
          <Save className="w-4 h-4" />
          <span>Save End-of-Day Snapshot</span>
        </button>

        {saved && (
          <div className="p-3 bg-emerald-950/80 border border-emerald-500/40 rounded-lg text-xs text-emerald-300 flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-emerald-400" />
            <span>Daily Knowledge Snapshot saved successfully!</span>
          </div>
        )}
      </form>

      {/* Snapshot History */}
      {dailySnapshots.length > 0 && (
        <div className="space-y-3">
          <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider">
            Previous Knowledge Snapshots ({dailySnapshots.length})
          </h4>

          <div className="space-y-2">
            {dailySnapshots.map(snap => (
              <div key={snap.id} className="p-4 bg-slate-950 border border-slate-800 rounded-xl space-y-1 text-xs text-slate-300">
                <div className="font-bold text-white flex items-center gap-2">
                  <Calendar className="w-3.5 h-3.5 text-indigo-400" /> {snap.date}
                </div>
                <p className="text-slate-400 truncate">Physics: {snap.physicsRecall || 'N/A'}</p>
                <p className="text-slate-400 truncate">Chem: {snap.chemistryRecall || 'N/A'}</p>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};
