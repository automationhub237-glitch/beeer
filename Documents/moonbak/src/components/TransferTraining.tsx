import React, { useState } from 'react';
import { useOS } from '../context/OSContext';
import { Gamepad2, Plus } from 'lucide-react';

export const TransferTraining: React.FC = () => {
  const { transferLogs, addTransferLog } = useOS();
  const [gameOrTool, setGameOrTool] = useState<string>('');
  const [skillTrained, setSkillTrained] = useState<string>('Spatial Reasoning & 3D Vector Mental Rotation');
  const [rationale, setRationale] = useState<string>('');

  const skillsList = [
    'Spatial Reasoning & 3D Vector Mental Rotation',
    'Rapid Unit Conversion & Numerical Estimation',
    'Pattern Recognition in Reaction Sequences',
    'Working Memory Capacity & Variable Tracking',
    'Logic & Problem Decomposition'
  ];

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();
    if (!gameOrTool.trim() || !rationale.trim()) return;

    addTransferLog({
      gameOrTool,
      skillTrained,
      neetTransferRationale: rationale
    });

    setGameOrTool('');
    setRationale('');
  };

  return (
    <div className="bg-slate-900 border border-slate-800 rounded-xl p-6 text-slate-100 shadow-xl space-y-6">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-slate-800 pb-4">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-indigo-500/10 border border-indigo-500/30 text-indigo-400 text-xs font-semibold rounded-full uppercase tracking-wider mb-2">
            <Gamepad2 className="w-3.5 h-3.5" />
            21. TRANSFER TRAINING (EXTERNAL COGNITIVE EXERCISES)
          </div>
          <h2 className="text-2xl font-bold text-white">Skill Transfer Bridge Engine</h2>
          <p className="text-sm text-slate-400 mt-1">
            Convert non-NEET games or tools into scientific cognitive training. Articulate the exact skill transfer to Physics, Chemistry, or Biology.
          </p>
        </div>
      </div>

      {/* Log New Transfer Training Form */}
      <form onSubmit={handleSave} className="bg-slate-950 border border-slate-800 rounded-xl p-5 space-y-4">
        <h3 className="text-xs font-bold text-indigo-400 uppercase tracking-wider">Log Non-NEET Exercise / Game Transfer</h3>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="text-xs font-semibold text-slate-400 block mb-1">External Game / Tool Name</label>
            <input
              type="text"
              value={gameOrTool}
              onChange={(e) => setGameOrTool(e.target.value)}
              placeholder="e.g. Chess, Portal 2, Human Resource Machine, Tetris"
              className="w-full bg-slate-900 border border-slate-800 rounded-lg p-2.5 text-xs text-slate-200 placeholder-slate-600 focus:ring-2 focus:ring-indigo-500 focus:outline-none"
              required
            />
          </div>

          <div>
            <label className="text-xs font-semibold text-slate-400 block mb-1">Target Cognitive Skill Trained</label>
            <select
              value={skillTrained}
              onChange={(e) => setSkillTrained(e.target.value)}
              className="w-full bg-slate-900 border border-slate-800 text-slate-200 text-xs rounded-lg p-2.5"
            >
              {skillsList.map((sk, i) => (
                <option key={i} value={sk}>{sk}</option>
              ))}
            </select>
          </div>
        </div>

        <div>
          <label className="text-xs font-semibold text-slate-400 block mb-1">
            How does this skill directly transfer to solving NEET Physics / Chemistry / Biology problems?
          </label>
          <textarea
            value={rationale}
            onChange={(e) => setRationale(e.target.value)}
            placeholder="e.g. Rotating 3D shapes in Portal 2 directly trains mental rotation required for Organic Chemistry stereochemistry (R/S nomenclature) and 3D magnetic field flux vectors..."
            rows={3}
            className="w-full bg-slate-900 border border-slate-800 rounded-lg p-3 text-xs text-slate-200 placeholder-slate-600 focus:ring-2 focus:ring-indigo-500 focus:outline-none"
            required
          />
        </div>

        <button
          type="submit"
          className="w-full py-2.5 bg-indigo-600 hover:bg-indigo-500 text-white font-bold text-xs uppercase rounded-lg shadow-lg shadow-indigo-950/40 flex items-center justify-center gap-2"
        >
          <Plus className="w-4 h-4" />
          <span>Save Skill Transfer Mapping</span>
        </button>
      </form>

      {/* History of Skill Transfer Logs */}
      {transferLogs.length > 0 && (
        <div className="space-y-3">
          <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider">
            Active Skill Transfer Catalog ({transferLogs.length})
          </h4>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {transferLogs.map(log => (
              <div key={log.id} className="p-4 bg-slate-950 border border-slate-800 rounded-xl space-y-2">
                <div className="flex items-center justify-between text-xs">
                  <span className="font-bold text-white">{log.gameOrTool}</span>
                  <span className="text-[10px] bg-indigo-500/20 text-indigo-300 px-2 py-0.5 rounded font-mono">
                    {log.skillTrained}
                  </span>
                </div>
                <p className="text-xs text-slate-300 italic">"{log.neetTransferRationale}"</p>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};
