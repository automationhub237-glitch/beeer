import React, { useState } from 'react';
import { useOS } from '../context/OSContext';
import { ShieldAlert, Send, Flame } from 'lucide-react';

export const ConceptDefence: React.FC = () => {
  const { concepts } = useOS();
  const [selectedConceptId, setSelectedConceptId] = useState<string>(concepts[0]?.id || 'colligative_properties');
  const [input, setInput] = useState<string>('');
  const [defenceTurn, setDefenceTurn] = useState<number>(0);
  const concept = concepts.find(c => c.id === selectedConceptId) || concepts[0];

  const [messages, setMessages] = useState<Array<{ sender: 'examiner' | 'student'; text: string }>>([
    {
      sender: 'examiner',
      text: `Defend your model of ${concept.title}. State your core premise. Why is this scientifically true and not just an assertion?`
    }
  ]);

  const aggressiveResponses = [
    `That's an assertion, not a proof. What underlying molecular or field mechanism causes that to happen?`,
    `What assumption are you making here? What happens if that assumption is completely removed or broken?`,
    `Give me a concrete counterexample or edge case where this statement fails.`,
    `Explain this without using textbook terminology or jargon. Explain it mathematically or physically.`,
    `How does this concept connect directly to another subject area (e.g. thermodynamics or membrane transport)?`
  ];

  const handleSend = (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;

    const userMsg = input.trim();
    setMessages(prev => [...prev, { sender: 'student', text: userMsg }]);
    setInput('');

    setTimeout(() => {
      const nextAggressive = aggressiveResponses[defenceTurn % aggressiveResponses.length];
      setMessages(prev => [...prev, { sender: 'examiner', text: nextAggressive }]);
      setDefenceTurn(prev => prev + 1);
    }, 700);
  };

  return (
    <div className="bg-slate-900 border border-slate-800 rounded-xl p-6 text-slate-100 shadow-xl space-y-6">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-slate-800 pb-4">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-rose-500/10 border border-rose-500/30 text-rose-400 text-xs font-semibold rounded-full uppercase tracking-wider mb-2">
            <ShieldAlert className="w-3.5 h-3.5" />
            7. AGGRESSIVE CONCEPT DEFENCE ("DEFEND IT")
          </div>
          <h2 className="text-2xl font-bold text-white">Aggressive Examiner Arena</h2>
          <p className="text-sm text-slate-400 mt-1">
            Zero confident nonsense allowed. The AI acts like an aggressive examiner to find the exact boundary of your understanding.
          </p>
        </div>

        {/* Concept Picker */}
        <select
          value={selectedConceptId}
          onChange={(e) => {
            setSelectedConceptId(e.target.value);
            const targetC = concepts.find(c => c.id === e.target.value) || concepts[0];
            setMessages([
              {
                sender: 'examiner',
                text: `Defend your model of ${targetC.title}. State your core premise. Why is this scientifically true and not just an assertion?`
              }
            ]);
            setDefenceTurn(0);
          }}
          className="bg-slate-800 border border-slate-700 text-rose-300 text-sm rounded-lg px-3 py-2 focus:ring-2 focus:ring-rose-500 focus:outline-none"
        >
          {concepts.map(c => (
            <option key={c.id} value={c.id}>
              [{c.subject}] {c.title}
            </option>
          ))}
        </select>
      </div>

      {/* Chat Arena */}
      <div className="bg-slate-950 border border-slate-800 rounded-xl p-4 h-[380px] overflow-y-auto space-y-3 font-sans">
        {messages.map((m, idx) => (
          <div
            key={idx}
            className={`flex ${m.sender === 'student' ? 'justify-end' : 'justify-start'}`}
          >
            <div
              className={`max-w-[85%] rounded-xl p-3.5 text-sm leading-relaxed ${
                m.sender === 'student'
                  ? 'bg-cyan-900/60 border border-cyan-500/30 text-cyan-100 rounded-br-none'
                  : 'bg-rose-950/60 border border-rose-600/40 text-rose-100 rounded-bl-none'
              }`}
            >
              <div className="flex items-center gap-1.5 text-[11px] font-bold uppercase tracking-wider mb-1 opacity-80">
                {m.sender === 'examiner' ? (
                  <span className="text-rose-400 flex items-center gap-1">
                    <Flame className="w-3 h-3 text-rose-500" /> Aggressive Examiner
                  </span>
                ) : (
                  <span className="text-cyan-400">Student Defense</span>
                )}
              </div>
              <p>{m.text}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Input Bar */}
      <form onSubmit={handleSend} className="flex gap-2">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Defend your position with proof, counterexamples, or formulas..."
          className="flex-1 bg-slate-950 border border-slate-800 rounded-lg px-4 py-3 text-sm text-slate-200 placeholder-slate-600 focus:ring-2 focus:ring-rose-500 focus:outline-none"
        />
        <button
          type="submit"
          className="px-5 py-3 bg-rose-600 hover:bg-rose-500 text-white font-bold text-xs uppercase tracking-wider rounded-lg transition-colors flex items-center gap-2 shadow-lg shadow-rose-950/40 shrink-0"
        >
          <span>Defend</span>
          <Send className="w-4 h-4" />
        </button>
      </form>
    </div>
  );
};
