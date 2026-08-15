import React, { useState } from 'react';
import { useOS } from '../context/OSContext';
import { Building2, MapPin, Plus, HelpCircle, CheckCircle2 } from 'lucide-react';

export const MemoryPalace: React.FC = () => {
  const { memoryPalaces, concepts, saveMemoryPalace } = useOS();
  const [selectedPalaceId] = useState<string>(memoryPalaces[0]?.id || 'palace_1');
  const [testLocationId, setTestLocationId] = useState<string | null>(null);
  const [userGuess, setUserGuess] = useState<string>('');
  const [revealed, setRevealed] = useState<boolean>(false);
  const [showAddModal, setShowAddModal] = useState<boolean>(false);
  const [newLocationName, setNewLocationName] = useState<string>('');
  const [newAttachedConceptId, setNewAttachedConceptId] = useState<string>('');
  const [newFact, setNewFact] = useState<string>('');

  const activePalace = memoryPalaces.find(p => p.id === selectedPalaceId) || memoryPalaces[0];

  const handleAddLocation = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newLocationName.trim()) return;

    const updatedLocations = [
      ...activePalace.locations,
      {
        id: 'loc_' + Date.now(),
        name: newLocationName,
        attachedConceptId: newAttachedConceptId || undefined,
        attachedFact: newFact || undefined
      }
    ];

    saveMemoryPalace({
      ...activePalace,
      locations: updatedLocations
    });

    setNewLocationName('');
    setNewAttachedConceptId('');
    setNewFact('');
    setShowAddModal(false);
  };

  return (
    <div className="bg-slate-900 border border-slate-800 rounded-xl p-6 text-slate-100 shadow-xl space-y-6">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-slate-800 pb-4">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-semibold rounded-full uppercase tracking-wider mb-2">
            <Building2 className="w-3.5 h-3.5" />
            16. MEMORY PALACE MODE (SPATIAL RETRIEVAL)
          </div>
          <h2 className="text-2xl font-bold text-white">Spatial Memory Anchor</h2>
          <p className="text-sm text-slate-400 mt-1">
            Attach heavy biological facts, sequences, or classifications to familiar spatial rooms. Test retrieval by asking: "What is located here?"
          </p>
        </div>

        <button
          onClick={() => setShowAddModal(true)}
          className="inline-flex items-center justify-center gap-2 px-4 py-2 bg-amber-600 hover:bg-amber-500 text-slate-950 font-bold text-xs uppercase rounded-lg shadow-lg shadow-amber-950/40"
        >
          <Plus className="w-4 h-4" />
          Add Location Anchor
        </button>
      </div>

      {/* Room Spatial Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {activePalace.locations.map(loc => {
          const conceptObj = concepts.find(c => c.id === loc.attachedConceptId);
          const isTestingThis = testLocationId === loc.id;

          return (
            <div
              key={loc.id}
              className="bg-slate-950 border border-slate-800 hover:border-amber-500/40 p-5 rounded-xl space-y-3 transition-all"
            >
              <div className="flex items-center justify-between border-b border-slate-800 pb-2">
                <div className="flex items-center gap-2 font-bold text-amber-300 text-sm">
                  <MapPin className="w-4 h-4 text-amber-400" />
                  <span>{loc.name}</span>
                </div>
                <span className="text-[10px] bg-slate-900 border border-slate-800 px-2 py-0.5 rounded font-mono text-slate-400">
                  ANCHOR
                </span>
              </div>

              {!isTestingThis ? (
                <div className="space-y-2">
                  {conceptObj && (
                    <div className="text-xs font-semibold text-cyan-300">
                      Concept: {conceptObj.title}
                    </div>
                  )}
                  {loc.attachedFact && (
                    <p className="text-xs text-slate-300 bg-slate-900/80 p-2.5 rounded-lg border border-slate-800/80 font-mono">
                      "{loc.attachedFact}"
                    </p>
                  )}

                  <button
                    onClick={() => {
                      setTestLocationId(loc.id);
                      setUserGuess('');
                      setRevealed(false);
                    }}
                    className="w-full mt-2 py-2 bg-slate-900 hover:bg-amber-950/60 hover:text-amber-300 text-slate-400 text-xs font-bold uppercase rounded-lg border border-slate-800 transition-colors flex items-center justify-center gap-1.5"
                  >
                    <HelpCircle className="w-3.5 h-3.5" />
                    Test Spatial Recall ("What is here?")
                  </button>
                </div>
              ) : (
                /* Active Spatial Recall Challenge */
                <div className="space-y-3 animate-fadeIn">
                  <span className="text-xs font-bold text-amber-400 uppercase tracking-wider block">
                    Spatial Probe: What concept/fact is placed at "{loc.name}"?
                  </span>

                  <textarea
                    value={userGuess}
                    onChange={(e) => setUserGuess(e.target.value)}
                    placeholder="Recall attached facts from memory..."
                    rows={2}
                    className="w-full bg-slate-900 border border-slate-800 rounded-lg p-2 text-xs text-slate-200"
                  />

                  {!revealed ? (
                    <button
                      onClick={() => setRevealed(true)}
                      className="w-full py-2 bg-amber-600 hover:bg-amber-500 text-slate-950 font-bold text-xs uppercase rounded-lg"
                    >
                      Reveal Spatial Anchor
                    </button>
                  ) : (
                    <div className="p-3 bg-slate-900 border border-emerald-500/30 rounded-lg space-y-1 animate-fadeIn">
                      <span className="text-[10px] font-bold text-emerald-400 uppercase block flex items-center gap-1">
                        <CheckCircle2 className="w-3.5 h-3.5" /> Actual Spatial Anchor:
                      </span>
                      <p className="text-xs text-emerald-200 font-mono">
                        {loc.attachedFact || conceptObj?.title || 'No attached text.'}
                      </p>

                      <button
                        onClick={() => setTestLocationId(null)}
                        className="w-full mt-2 py-1 bg-slate-800 text-slate-300 text-[10px] font-bold uppercase rounded"
                      >
                        Done
                      </button>
                    </div>
                  )}
                </div>
              )}
            </div>
          );
        })}
      </div>

      {/* Modal Add Location */}
      {showAddModal && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-slate-900 border border-slate-800 rounded-xl p-6 max-w-lg w-full space-y-4 shadow-2xl">
            <h3 className="text-lg font-bold text-white flex items-center gap-2">
              <Plus className="w-5 h-5 text-amber-400" />
              Add Location Anchor to Memory Palace
            </h3>

            <form onSubmit={handleAddLocation} className="space-y-4">
              <div>
                <label className="text-xs font-semibold text-slate-400 block mb-1">Spatial Room Location Name</label>
                <input
                  type="text"
                  value={newLocationName}
                  onChange={(e) => setNewLocationName(e.target.value)}
                  placeholder="e.g. Front Door, Kitchen Sink, Sofa Armrest"
                  className="w-full bg-slate-950 border border-slate-800 text-slate-200 text-sm rounded-lg p-2.5"
                  required
                />
              </div>

              <div>
                <label className="text-xs font-semibold text-slate-400 block mb-1">Attach Concept (Optional)</label>
                <select
                  value={newAttachedConceptId}
                  onChange={(e) => setNewAttachedConceptId(e.target.value)}
                  className="w-full bg-slate-950 border border-slate-800 text-slate-200 text-sm rounded-lg p-2.5"
                >
                  <option value="">-- None --</option>
                  {concepts.map(c => (
                    <option key={c.id} value={c.id}>
                      [{c.subject}] {c.title}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="text-xs font-semibold text-slate-400 block mb-1">Heavy Fact / Mechanism / Formula Text</label>
                <textarea
                  value={newFact}
                  onChange={(e) => setNewFact(e.target.value)}
                  placeholder="e.g. Krebs cycle sequence: Citrate -> Isocitrate -> alpha-Ketoglutarate..."
                  rows={3}
                  className="w-full bg-slate-950 border border-slate-800 text-slate-200 text-sm rounded-lg p-2.5"
                />
              </div>

              <div className="flex items-center justify-end gap-3 pt-2">
                <button
                  type="button"
                  onClick={() => setShowAddModal(false)}
                  className="px-4 py-2 bg-slate-800 text-slate-300 text-xs font-semibold rounded-lg"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 bg-amber-600 hover:bg-amber-500 text-slate-950 text-xs font-bold uppercase rounded-lg shadow-lg"
                >
                  Save Spatial Anchor
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};
