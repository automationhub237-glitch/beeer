import React, { useState, useEffect } from 'react';
import { useOS } from '../context/OSContext';
import {
  BookOpen,
  FileText,
  Zap,
  CheckCircle2,
  HelpCircle,
  Award,
  Edit3,
  Bookmark,
  TrendingUp,
  FolderTree
} from 'lucide-react';
import type { TopicResourceCategory } from '../types/neetOS';

export const TopicResourceHub: React.FC = () => {
  const {
    syllabus,
    topicResources,
    questionBank,
    userNotes,
    saveUserTopicNote,
    topicMastery
  } = useOS();

  // Selected Subject -> Chapter -> Topic
  const [selectedSubjectIndex, setSelectedSubjectIndex] = useState<number>(0);
  const [selectedChapterIndex, setSelectedChapterIndex] = useState<number>(0);
  const [selectedTopicIndex, setSelectedTopicIndex] = useState<number>(0);
  const [activeCategory, setActiveCategory] = useState<TopicResourceCategory>('detailed_notes');

  // Local Note Input State
  const activeSubjectTree = syllabus[selectedSubjectIndex] || syllabus[0];
  const activeChapter = activeSubjectTree?.chapters[selectedChapterIndex] || activeSubjectTree?.chapters[0];
  const activeTopic = activeChapter?.topics[selectedTopicIndex] || activeChapter?.topics[0];

  const topicId = activeTopic?.id || 'chem_raoult_colligative';
  const resourceData = topicResources.find(r => r.topicId === topicId);
  const [noteInput, setNoteInput] = useState<string>(userNotes[topicId] || '');

  useEffect(() => {
    setNoteInput(userNotes[topicId] || '');
  }, [topicId, userNotes]);

  const categories: { id: TopicResourceCategory; label: string; icon: React.ElementType }[] = [
    { id: 'detailed_notes', label: 'Detailed Notes', icon: FileText },
    { id: 'short_notes', label: 'Short Notes', icon: BookOpen },
    { id: 'sprint_10min', label: '10-Min Sprint', icon: Zap },
    { id: 'attack_10min', label: '10-Min Attack', icon: Zap },
    { id: 'formula_bank', label: 'Formula Bank', icon: Bookmark },
    { id: 'ncert_facts', label: 'NCERT Facts', icon: CheckCircle2 },
    { id: 'pyqs', label: 'PYQs (Authentic)', icon: Award },
    { id: 'cyqs', label: 'CYQs (Challenge)', icon: HelpCircle },
    { id: 'easy_questions', label: 'Easy Questions (0–20)', icon: HelpCircle },
    { id: 'medium_questions', label: 'Medium Questions (20–50)', icon: HelpCircle },
    { id: 'hard_questions', label: 'Hard Questions (50+)', icon: HelpCircle },
    { id: 'common_mistakes', label: 'Common Mistakes', icon: Edit3 },
    { id: 'flashcards', label: 'Flashcards', icon: BookOpen },
    { id: 'local_notes', label: 'Local User Notes', icon: Edit3 },
    { id: 'progress', label: 'Topic Progress', icon: TrendingUp }
  ];

  const topicQuestions = questionBank.filter(q => q.topicId === topicId || q.topic === activeTopic?.title || q.chapter === activeChapter?.title);

  const handleSaveNote = () => {
    saveUserTopicNote(topicId, noteInput);
  };

  const mastery = topicMastery[topicId] || topicMastery[activeTopic?.title || ''] || { attempted: 0, correct: 0, accuracy: 0, lastAttempted: 'Not attempted yet' };

  return (
    <div className="bg-slate-900 border border-slate-800 rounded-xl p-6 text-slate-100 shadow-xl space-y-6">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-slate-800 pb-4">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-xs font-semibold rounded-full uppercase tracking-wider mb-2">
            <FolderTree className="w-3.5 h-3.5" />
            2. TOPIC RESOURCE HUB (OFFICIAL SYLLABUS CATALOGUE)
          </div>
          <h2 className="text-2xl font-bold text-white">Subject → Chapter → Topic Resource Repository</h2>
          <p className="text-sm text-slate-400 mt-1">
            Access 15 comprehensive learning resources for every topic across Physics, Chemistry, and Biology.
          </p>
        </div>
      </div>

      {/* Syllabus Selector Tree (Subject -> Chapter -> Topic) */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-3 bg-slate-950 p-4 rounded-xl border border-slate-800">
        {/* Subject Selector */}
        <div>
          <label className="text-[11px] font-bold uppercase tracking-wider text-slate-400 block mb-1">Subject</label>
          <select
            value={selectedSubjectIndex}
            onChange={(e) => {
              setSelectedSubjectIndex(Number(e.target.value));
              setSelectedChapterIndex(0);
              setSelectedTopicIndex(0);
            }}
            className="w-full bg-slate-900 border border-slate-800 text-xs text-white rounded-lg p-2.5 focus:ring-2 focus:ring-cyan-500 focus:outline-none"
          >
            {syllabus.map((subj, idx) => (
              <option key={subj.subject} value={idx}>{subj.subject}</option>
            ))}
          </select>
        </div>

        {/* Chapter Selector */}
        <div>
          <label className="text-[11px] font-bold uppercase tracking-wider text-slate-400 block mb-1">Chapter</label>
          <select
            value={selectedChapterIndex}
            onChange={(e) => {
              setSelectedChapterIndex(Number(e.target.value));
              setSelectedTopicIndex(0);
            }}
            className="w-full bg-slate-900 border border-slate-800 text-xs text-white rounded-lg p-2.5 focus:ring-2 focus:ring-cyan-500 focus:outline-none"
          >
            {activeSubjectTree?.chapters.map((ch, idx) => (
              <option key={ch.id} value={idx}>{ch.title}</option>
            ))}
          </select>
        </div>

        {/* Topic Selector */}
        <div>
          <label className="text-[11px] font-bold uppercase tracking-wider text-slate-400 block mb-1">Topic</label>
          <select
            value={selectedTopicIndex}
            onChange={(e) => setSelectedTopicIndex(Number(e.target.value))}
            className="w-full bg-slate-900 border border-slate-800 text-xs text-white rounded-lg p-2.5 focus:ring-2 focus:ring-cyan-500 focus:outline-none"
          >
            {activeChapter?.topics.map((top, idx) => (
              <option key={top.id} value={idx}>{top.title}</option>
            ))}
          </select>
        </div>
      </div>

      {/* Resource Category Pills */}
      <div className="flex overflow-x-auto gap-2 pb-2 scrollbar-thin">
        {categories.map((cat) => {
          const Icon = cat.icon;
          const isActive = activeCategory === cat.id;
          return (
            <button
              key={cat.id}
              onClick={() => {
                setActiveCategory(cat.id);
              }}
              className={`flex items-center gap-2 px-3 py-2 rounded-lg text-xs font-semibold whitespace-nowrap transition-all ${
                isActive
                  ? 'bg-cyan-600 text-slate-950 font-bold shadow-lg shadow-cyan-950/40'
                  : 'bg-slate-950 border border-slate-800 text-slate-400 hover:text-slate-200'
              }`}
            >
              <Icon className="w-3.5 h-3.5" />
              <span>{cat.label}</span>
            </button>
          );
        })}
      </div>

      {/* Resource Content Display Canvas */}
      <div className="bg-slate-950 border border-slate-800 rounded-xl p-6 min-h-[300px]">
        {/* Detailed Notes */}
        {activeCategory === 'detailed_notes' && (
          <div className="space-y-3">
            <h3 className="text-lg font-bold text-white border-b border-slate-800 pb-2">Detailed Notes — {activeTopic?.title}</h3>
            {resourceData?.detailedNotes ? (
              <p className="text-sm text-slate-200 whitespace-pre-line leading-relaxed">{resourceData.detailedNotes}</p>
            ) : (
              <div className="text-slate-500 py-8 text-center italic">Content not added yet.</div>
            )}
          </div>
        )}

        {/* Short Notes */}
        {activeCategory === 'short_notes' && (
          <div className="space-y-3">
            <h3 className="text-lg font-bold text-white border-b border-slate-800 pb-2">Short Notes & High-Yield Summary</h3>
            {resourceData?.shortNotes ? (
              <p className="text-xs font-mono text-cyan-300 bg-slate-900 p-4 rounded-xl border border-slate-800 whitespace-pre-line">{resourceData.shortNotes}</p>
            ) : (
              <div className="text-slate-500 py-8 text-center italic">Content not added yet.</div>
            )}
          </div>
        )}

        {/* Formula Bank */}
        {activeCategory === 'formula_bank' && (
          <div className="space-y-3">
            <h3 className="text-lg font-bold text-white border-b border-slate-800 pb-2">Formula Bank</h3>
            {resourceData?.formulaBank && resourceData.formulaBank.length > 0 ? (
              <ul className="space-y-2">
                {resourceData.formulaBank.map((f, i) => (
                  <li key={i} className="p-3 bg-slate-900 border border-slate-800 rounded-lg text-xs font-mono text-cyan-300 flex items-center justify-between">
                    <span>{f}</span>
                  </li>
                ))}
              </ul>
            ) : (
              <div className="text-slate-500 py-8 text-center italic">Content not added yet.</div>
            )}
          </div>
        )}

        {/* NCERT Facts */}
        {activeCategory === 'ncert_facts' && (
          <div className="space-y-3">
            <h3 className="text-lg font-bold text-white border-b border-slate-800 pb-2">NCERT Direct Statements & Facts</h3>
            {resourceData?.ncertFacts && resourceData.ncertFacts.length > 0 ? (
              <ul className="space-y-2">
                {resourceData.ncertFacts.map((fact, i) => (
                  <li key={i} className="p-3 bg-slate-900 border border-slate-800 rounded-lg text-xs text-slate-200 flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                    <span>{fact}</span>
                  </li>
                ))}
              </ul>
            ) : (
              <div className="text-slate-500 py-8 text-center italic">Content not added yet.</div>
            )}
          </div>
        )}

        {/* PYQs */}
        {activeCategory === 'pyqs' && (
          <div className="space-y-3">
            <h3 className="text-lg font-bold text-white border-b border-slate-800 pb-2">Authentic Past NEET Questions (PYQs)</h3>
            {topicQuestions.filter(q => q.isOfficialPYQ).length > 0 ? (
              <div className="space-y-3">
                {topicQuestions.filter(q => q.isOfficialPYQ).map(q => (
                  <div key={q.id} className="p-4 bg-slate-900 border border-slate-800 rounded-xl space-y-2">
                    <span className="text-xs font-mono text-cyan-400 font-bold block">NEET OFFICIAL PYQ ({q.year})</span>
                    <p className="text-xs text-slate-200 font-semibold">{q.questionText}</p>
                    <p className="text-[11px] text-slate-400 italic pt-1 border-t border-slate-800">{q.explanation}</p>
                  </div>
                ))}
              </div>
            ) : (
              <div className="text-slate-500 py-8 text-center italic">Content not added yet.</div>
            )}
          </div>
        )}

        {/* CYQs */}
        {activeCategory === 'cyqs' && (
          <div className="space-y-3">
            <h3 className="text-lg font-bold text-white border-b border-slate-800 pb-2">Conceptual / Challenge Yield Questions (CYQs)</h3>
            {topicQuestions.filter(q => q.difficulty === 'CYQ' && !q.isOfficialPYQ).length > 0 ? (
              <div className="space-y-3">
                {topicQuestions.filter(q => q.difficulty === 'CYQ' && !q.isOfficialPYQ).map(q => (
                  <div key={q.id} className="p-4 bg-slate-900 border border-slate-800 rounded-xl space-y-2">
                    <span className="text-xs font-mono text-rose-400 font-bold block">CYQ CHALLENGE ITEM</span>
                    <p className="text-xs text-slate-200 font-semibold">{q.questionText}</p>
                    <p className="text-[11px] text-slate-400 italic pt-1 border-t border-slate-800">{q.explanation}</p>
                  </div>
                ))}
              </div>
            ) : (
              <div className="text-slate-500 py-8 text-center italic">Content not added yet.</div>
            )}
          </div>
        )}

        {/* Common Mistakes */}
        {activeCategory === 'common_mistakes' && (
          <div className="space-y-3">
            <h3 className="text-lg font-bold text-white border-b border-slate-800 pb-2">Common Exam Traps & Misconceptions</h3>
            {resourceData?.commonMistakes && resourceData.commonMistakes.length > 0 ? (
              <ul className="space-y-2">
                {resourceData.commonMistakes.map((m, i) => (
                  <li key={i} className="p-3 bg-rose-950/40 border border-rose-500/30 rounded-lg text-xs text-rose-300">
                    • {m}
                  </li>
                ))}
              </ul>
            ) : (
              <div className="text-slate-500 py-8 text-center italic">Content not added yet.</div>
            )}
          </div>
        )}

        {/* Flashcards */}
        {activeCategory === 'flashcards' && (
          <div className="space-y-3">
            <h3 className="text-lg font-bold text-white border-b border-slate-800 pb-2">Active Recall Flashcards</h3>
            {resourceData?.flashcards && resourceData.flashcards.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {resourceData.flashcards.map(fc => (
                  <div key={fc.id} className="p-4 bg-slate-900 border border-slate-800 rounded-xl space-y-2">
                    <span className="text-xs font-bold text-cyan-400 uppercase tracking-wider block">Question</span>
                    <p className="text-xs font-semibold text-white">{fc.question}</p>
                    <span className="text-xs font-bold text-emerald-400 uppercase tracking-wider block pt-2 border-t border-slate-800">Answer</span>
                    <p className="text-xs text-slate-300">{fc.answer}</p>
                  </div>
                ))}
              </div>
            ) : (
              <div className="text-slate-500 py-8 text-center italic">Content not added yet.</div>
            )}
          </div>
        )}

        {/* Local User Notes */}
        {activeCategory === 'local_notes' && (
          <div className="space-y-3">
            <div className="flex items-center justify-between border-b border-slate-800 pb-2">
              <h3 className="text-lg font-bold text-white">Local User Notes for {activeTopic?.title}</h3>
              <button
                onClick={handleSaveNote}
                className="px-4 py-1.5 bg-cyan-600 hover:bg-cyan-500 text-slate-950 font-bold text-xs uppercase rounded-lg shadow-md"
              >
                Save Local Note
              </button>
            </div>
            <textarea
              value={noteInput}
              onChange={(e) => setNoteInput(e.target.value)}
              placeholder="Type your personal formulas, memory hooks, or local study notes here..."
              rows={8}
              className="w-full bg-slate-900 border border-slate-800 rounded-xl p-4 text-xs text-slate-200 placeholder-slate-600 focus:ring-2 focus:ring-cyan-500 focus:outline-none"
            />
          </div>
        )}

        {/* Progress */}
        {activeCategory === 'progress' && (
          <div className="space-y-4">
            <h3 className="text-lg font-bold text-white border-b border-slate-800 pb-2">Topic Mastery Progress</h3>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              <div className="p-4 bg-slate-900 border border-slate-800 rounded-xl">
                <span className="text-xs font-mono text-slate-400 block">Attempted Questions</span>
                <span className="text-2xl font-bold text-white">{mastery.attempted}</span>
              </div>
              <div className="p-4 bg-slate-900 border border-slate-800 rounded-xl">
                <span className="text-xs font-mono text-slate-400 block">Accuracy</span>
                <span className="text-2xl font-bold text-emerald-400">{mastery.accuracy}%</span>
              </div>
              <div className="p-4 bg-slate-900 border border-slate-800 rounded-xl">
                <span className="text-xs font-mono text-slate-400 block">Last Attempted</span>
                <span className="text-xs text-slate-300 font-mono">{mastery.lastAttempted}</span>
              </div>
            </div>
          </div>
        )}

        {/* Fallback for empty categories e.g. 10min sprint/attack redirect or empty question levels */}
        {['sprint_10min', 'attack_10min', 'easy_questions', 'medium_questions', 'hard_questions'].includes(activeCategory) && (
          <div className="text-slate-500 py-8 text-center italic">Content not added yet.</div>
        )}
      </div>
    </div>
  );
};
