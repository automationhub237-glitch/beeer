import React, { useState, useEffect } from 'react';
import { useOS } from '../context/OSContext';
import {
  BookOpen,
  FileText,
  CheckCircle2,
  HelpCircle,
  Award,
  Edit3,
  Bookmark,
  TrendingUp,
  FolderTree,
  Sparkles,
  Layers,
  ShieldCheck,
  AlertTriangle,
  Lock,
  Check
} from 'lucide-react';
import type { TopicResourceCategory, ResourceStatus, SyllabusSubjectTree, TopicResourceData, GraduatedQuestionItem } from '../types/neetOS';

export interface AuditReport {
  totalChapters: number;
  totalTopics: number;
  indexedTopicResources: number;
  topicsWithNotes: number;
  topicsWithFormulas: number;
  topicsWithPYQs: number;
  topicsWithCYQs: number;
  completenessPercentage: number;
  statusBreakdown: Record<ResourceStatus, number>;
  unindexedTopics: { subject: string; chapter: string; topicTitle: string; topicId: string }[];
  missingPYQTopics: { subject: string; chapter: string; topicTitle: string }[];
  missingCYQTopics: { subject: string; chapter: string; topicTitle: string }[];
}

export function runSyllabusContentAudit(
  syllabus: SyllabusSubjectTree[],
  topicResources: TopicResourceData[],
  questionBank: GraduatedQuestionItem[]
): AuditReport {
  let totalChapters = 0;
  let totalTopics = 0;
  const unindexedTopics: { subject: string; chapter: string; topicTitle: string; topicId: string }[] = [];
  const missingPYQTopics: { subject: string; chapter: string; topicTitle: string }[] = [];
  const missingCYQTopics: { subject: string; chapter: string; topicTitle: string }[] = [];

  const statusBreakdown: Record<ResourceStatus, number> = {
    AVAILABLE: 0,
    'LINK ONLY': 0,
    'LOGIN REQUIRED': 0,
    PAYWALLED: 0,
    UNAVAILABLE: 0,
    'NEEDS VERIFICATION': 0
  };

  let topicsWithNotes = 0;
  let topicsWithFormulas = 0;
  let topicsWithPYQs = 0;
  let topicsWithCYQs = 0;

  syllabus.forEach(subjectTree => {
    subjectNodeLoop:
    subjectTree.chapters.forEach(ch => {
      totalChapters++;
      ch.topics.forEach(t => {
        totalTopics++;

        const res = topicResources.find(r => r.topicId === t.id || r.topicTitle.toLowerCase() === t.title.toLowerCase());
        const tStatus: ResourceStatus = t.status || (res ? 'AVAILABLE' : 'UNAVAILABLE');
        statusBreakdown[tStatus] = (statusBreakdown[tStatus] || 0) + 1;

        if (res) {
          if (res.detailedNotes || res.shortNotes || res.multiTierNotes) topicsWithNotes++;
          if (res.formulaBank && res.formulaBank.length > 0) topicsWithFormulas++;
        } else {
          unindexedTopics.push({
            subject: subjectTree.subject,
            chapter: ch.title,
            topicTitle: t.title,
            topicId: t.id
          });
        }

        const pyqs = questionBank.filter(q => (q.topicId === t.id || q.topic === t.title) && q.isOfficialPYQ);
        if (pyqs.length > 0) {
          topicsWithPYQs++;
        } else {
          missingPYQTopics.push({ subject: subjectTree.subject, chapter: ch.title, topicTitle: t.title });
        }

        const cyqs = questionBank.filter(q => (q.topicId === t.id || q.topic === t.title) && !q.isOfficialPYQ);
        if (cyqs.length > 0) {
          topicsWithCYQs++;
        } else {
          missingCYQTopics.push({ subject: subjectTree.subject, chapter: ch.title, topicTitle: t.title });
        }
      });
    });
  });

  const indexedTopicResources = totalTopics - unindexedTopics.length;
  const completenessPercentage = totalTopics > 0 ? Math.round((indexedTopicResources / totalTopics) * 100) : 0;

  return {
    totalChapters,
    totalTopics,
    indexedTopicResources,
    topicsWithNotes,
    topicsWithFormulas,
    topicsWithPYQs,
    topicsWithCYQs,
    completenessPercentage,
    statusBreakdown,
    unindexedTopics,
    missingPYQTopics,
    missingCYQTopics
  };
}

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
  const [activeCategory, setActiveCategory] = useState<TopicResourceCategory | 'audit_dashboard'>('detailed_notes');

  const activeSubjectTree = syllabus[selectedSubjectIndex] || syllabus[0];
  const activeChapter = activeSubjectTree?.chapters[selectedChapterIndex] || activeSubjectTree?.chapters[0];
  const activeTopic = activeChapter?.topics[selectedTopicIndex] || activeChapter?.topics[0];

  const topicId = activeTopic?.id || 'chem_raoult_colligative';
  const resourceData = topicResources.find(r => r.topicId === topicId || r.topicTitle.toLowerCase() === activeTopic?.title.toLowerCase());
  const [noteInput, setNoteInput] = useState<string>(userNotes[topicId] || '');

  useEffect(() => {
    setNoteInput(userNotes[topicId] || '');
  }, [topicId, userNotes]);

  const auditReport = runSyllabusContentAudit(syllabus, topicResources, questionBank);

  const categories: { id: TopicResourceCategory | 'audit_dashboard'; label: string; icon: React.ElementType }[] = [
    { id: 'detailed_notes', label: 'Multi-Tier Notes (Tiers 1-4)', icon: FileText },
    { id: 'short_notes', label: 'Short Notes & Formulas', icon: BookOpen },
    { id: 'formula_bank', label: 'Formula Bank', icon: Bookmark },
    { id: 'ncert_facts', label: 'NCERT Facts', icon: CheckCircle2 },
    { id: 'pyqs', label: 'PYQs (Authentic)', icon: Award },
    { id: 'cyqs', label: 'CYQs (Challenge)', icon: HelpCircle },
    { id: 'easy_questions', label: 'Easy Questions (0–20)', icon: HelpCircle },
    { id: 'medium_questions', label: 'Medium Questions (20–50)', icon: HelpCircle },
    { id: 'hard_questions', label: 'Hard Questions (50+)', icon: HelpCircle },
    { id: 'common_mistakes', label: 'Common Mistakes', icon: Edit3 },
    { id: 'flashcards', label: 'Flashcards', icon: BookOpen },
    { id: 'local_notes', label: 'Local Workspace', icon: Edit3 },
    { id: 'progress', label: 'Topic Progress', icon: TrendingUp },
    { id: 'audit_dashboard', label: 'Content Audit Dashboard', icon: ShieldCheck }
  ];

  const topicQuestions = questionBank.filter(
    q => q.topicId === topicId || q.topic === activeTopic?.title || q.chapter === activeChapter?.title
  );

  const handleSaveNote = () => {
    saveUserTopicNote(topicId, noteInput);
  };

  const mastery = topicMastery[topicId] || topicMastery[activeTopic?.title || ''] || { attempted: 0, correct: 0, accuracy: 0, lastAttempted: 'Not attempted yet' };

  const renderResourceStatusBadge = (status: ResourceStatus = 'AVAILABLE') => {
    switch (status) {
      case 'AVAILABLE':
        return <span className="px-2 py-0.5 bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 text-[10px] font-mono rounded font-bold">AVAILABLE (NO LOGIN)</span>;
      case 'LINK ONLY':
        return <span className="px-2 py-0.5 bg-cyan-500/20 text-cyan-300 border border-cyan-500/30 text-[10px] font-mono rounded font-bold">LINK ONLY</span>;
      case 'LOGIN REQUIRED':
        return <span className="px-2 py-0.5 bg-amber-500/20 text-amber-300 border border-amber-500/30 text-[10px] font-mono rounded font-bold flex items-center gap-1"><Lock className="w-2.5 h-2.5" /> LOGIN REQUIRED</span>;
      case 'PAYWALLED':
        return <span className="px-2 py-0.5 bg-rose-500/20 text-rose-300 border border-rose-500/30 text-[10px] font-mono rounded font-bold">PAYWALLED</span>;
      case 'UNAVAILABLE':
        return <span className="px-2 py-0.5 bg-slate-800 text-slate-400 border border-slate-700 text-[10px] font-mono rounded">UNAVAILABLE</span>;
      case 'NEEDS VERIFICATION':
        return <span className="px-2 py-0.5 bg-purple-500/20 text-purple-300 border border-purple-500/30 text-[10px] font-mono rounded">NEEDS VERIFICATION</span>;
    }
  };

  return (
    <div className="bg-slate-900 border border-slate-800 rounded-xl p-6 text-slate-100 shadow-xl space-y-6">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-slate-800 pb-4">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-xs font-semibold rounded-full uppercase tracking-wider mb-2">
            <FolderTree className="w-3.5 h-3.5" />
            MASTER SYLLABUS CATALOGUE & RESOURCE REPOSITORY
          </div>
          <h2 className="text-2xl font-bold text-white">Single Source of Truth NEET Catalogue</h2>
          <p className="text-sm text-slate-400 mt-1">
            Official NTA / NCERT syllabus hierarchy with verified free resources and live content completeness auditing.
          </p>
        </div>

        {/* Completeness Meter */}
        <div className="flex items-center gap-3 bg-slate-950 px-4 py-2.5 rounded-xl border border-slate-800">
          <div className="text-right">
            <span className="text-[10px] font-mono uppercase text-slate-400 block">Syllabus Completeness</span>
            <span className="text-lg font-bold text-cyan-400 font-mono">{auditReport.completenessPercentage}%</span>
          </div>
          <div className="w-12 h-12 rounded-full border-2 border-cyan-500/40 flex items-center justify-center bg-cyan-950/40">
            <ShieldCheck className="w-6 h-6 text-cyan-400" />
          </div>
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
              <option key={ch.id} value={idx}>Class {ch.classLevel || '11'} • {ch.title}</option>
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
              onClick={() => setActiveCategory(cat.id)}
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
        {/* Multi-Tier Notes */}
        {activeCategory === 'detailed_notes' && (
          <div className="space-y-6">
            <div className="flex items-center justify-between border-b border-slate-800 pb-2">
              <h3 className="text-lg font-bold text-white flex items-center gap-2">
                <Layers className="w-5 h-5 text-cyan-400" />
                Multi-Tier High-Yield Notes — {activeTopic?.title}
              </h3>
              {renderResourceStatusBadge(activeTopic?.status || (resourceData ? 'AVAILABLE' : 'UNAVAILABLE'))}
            </div>

            {resourceData?.multiTierNotes ? (
              <div className="space-y-4">
                {/* Tier 1 */}
                <div className="p-4 bg-slate-900 border border-slate-800 rounded-xl space-y-2">
                  <span className="px-2.5 py-1 bg-cyan-500/20 text-cyan-300 border border-cyan-500/30 text-[11px] font-bold rounded-md uppercase tracking-wider inline-block">
                    TIER 1: DETAILED NCERT NOTES
                  </span>
                  <p className="text-xs text-slate-200 leading-relaxed whitespace-pre-line">
                    {resourceData.multiTierNotes.tier1DetailedNCERT}
                  </p>
                </div>

                {/* Tier 2 */}
                <div className="p-4 bg-slate-900 border border-slate-800 rounded-xl space-y-2">
                  <span className="px-2.5 py-1 bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 text-[11px] font-bold rounded-md uppercase tracking-wider inline-block">
                    TIER 2: HIGH-YIELD SHORT NOTES
                  </span>
                  <p className="text-xs font-mono text-emerald-300 whitespace-pre-line leading-relaxed">
                    {resourceData.multiTierNotes.tier2HighYieldShort}
                  </p>
                </div>

                {/* Tier 3 */}
                <div className="p-4 bg-slate-900 border border-slate-800 rounded-xl space-y-2">
                  <span className="px-2.5 py-1 bg-purple-500/20 text-purple-300 border border-purple-500/30 text-[11px] font-bold rounded-md uppercase tracking-wider inline-block">
                    TIER 3: CONCEPTUAL & VISUAL MECHANISMS
                  </span>
                  <p className="text-xs text-purple-200 whitespace-pre-line leading-relaxed">
                    {resourceData.multiTierNotes.tier3ConceptualVisualMechanisms}
                  </p>
                </div>

                {/* Tier 4 */}
                <div className="p-4 bg-slate-900 border border-slate-800 rounded-xl space-y-2">
                  <span className="px-2.5 py-1 bg-amber-500/20 text-amber-300 border border-amber-500/30 text-[11px] font-bold rounded-md uppercase tracking-wider inline-flex items-center gap-1">
                    <Sparkles className="w-3.5 h-3.5" /> TIER 4: TOPPER TRICK & SHORTCUT BANK
                  </span>
                  <p className="text-xs font-semibold text-amber-200 whitespace-pre-line leading-relaxed">
                    {resourceData.multiTierNotes.tier4TopperTricksShortcuts}
                  </p>
                </div>
              </div>
            ) : resourceData?.detailedNotes ? (
              <p className="text-xs text-slate-200 whitespace-pre-line leading-relaxed">{resourceData.detailedNotes}</p>
            ) : (
              <div className="p-8 text-center text-slate-500 italic space-y-2">
                <AlertTriangle className="w-8 h-8 text-amber-500/60 mx-auto" />
                <p className="font-semibold text-slate-400">Content not yet indexed</p>
                <p className="text-xs text-slate-600">This topic tree node exists in the official syllabus catalogue and is queued for verified notes ingestion.</p>
              </div>
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
              <div className="p-8 text-center text-slate-500 italic font-mono space-y-1">
                <p className="text-slate-400 font-sans">Content not yet indexed</p>
                <p className="text-xs text-slate-600 font-sans">Select another topic from the catalogue or check the audit dashboard.</p>
              </div>
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
              <div className="p-8 text-center text-slate-500 italic font-mono">Content not yet indexed</div>
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
              <div className="p-8 text-center text-slate-500 italic">Content not yet indexed</div>
            )}
          </div>
        )}

        {/* PYQs */}
        {activeCategory === 'pyqs' && (
          <div className="space-y-3">
            <h3 className="text-lg font-bold text-white border-b border-slate-800 pb-2 flex items-center justify-between">
              <span>Authentic Past NEET Questions (PYQs)</span>
              <span className="text-xs text-cyan-400 font-mono">VERIFIED PYQs</span>
            </h3>
            {topicQuestions.filter(q => q.isOfficialPYQ).length > 0 ? (
              <div className="space-y-3">
                {topicQuestions.filter(q => q.isOfficialPYQ).map(q => (
                  <div key={q.id} className="p-4 bg-slate-900 border border-slate-800 rounded-xl space-y-2">
                    <span className="text-xs font-mono text-cyan-400 font-bold block">NEET OFFICIAL PYQ ({q.year || q.pyqYear})</span>
                    <p className="text-xs text-slate-200 font-semibold">{q.questionText}</p>
                    {q.solverAlgorithm && (
                      <div className="p-3 bg-slate-950 border border-slate-800 rounded-lg space-y-1 text-xs">
                        <span className="text-emerald-400 font-bold block">Textbook Method:</span>
                        <p className="text-slate-300 whitespace-pre-line">{q.solverAlgorithm.textbookMethod}</p>
                        <span className="text-amber-400 font-bold block pt-1">Topper Fast-Track:</span>
                        <p className="text-amber-200">{q.solverAlgorithm.topperFastTrack}</p>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            ) : (
              <div className="p-8 text-center text-slate-500 italic">Content not yet indexed (No official PYQs tagged for this specific subtopic)</div>
            )}
          </div>
        )}

        {/* CYQs */}
        {activeCategory === 'cyqs' && (
          <div className="space-y-3">
            <h3 className="text-lg font-bold text-white border-b border-slate-800 pb-2 flex items-center justify-between">
              <span>Conceptual / Curated Practice Questions (CYQs)</span>
              <span className="text-xs text-amber-400 font-mono">NON-PYQ PRACTICE</span>
            </h3>
            {topicQuestions.filter(q => !q.isOfficialPYQ).length > 0 ? (
              <div className="space-y-3">
                {topicQuestions.filter(q => !q.isOfficialPYQ).map(q => (
                  <div key={q.id} className="p-4 bg-slate-900 border border-slate-800 rounded-xl space-y-2">
                    <span className="text-xs font-mono text-amber-400 font-bold block">CYQ CURATED PRACTICE ITEM</span>
                    <p className="text-xs text-slate-200 font-semibold">{q.questionText}</p>
                    <p className="text-[11px] text-slate-400 italic pt-1 border-t border-slate-800">{q.explanation}</p>
                  </div>
                ))}
              </div>
            ) : (
              <div className="p-8 text-center text-slate-500 italic">Content not yet indexed</div>
            )}
          </div>
        )}

        {/* Easy Questions */}
        {activeCategory === 'easy_questions' && (
          <div className="space-y-3">
            <h3 className="text-lg font-bold text-white border-b border-slate-800 pb-2">Easy Questions (Level 0–20)</h3>
            {topicQuestions.filter(q => q.difficulty === '0-20').length > 0 ? (
              <div className="space-y-3">
                {topicQuestions.filter(q => q.difficulty === '0-20').map(q => (
                  <div key={q.id} className="p-4 bg-slate-900 border border-slate-800 rounded-xl space-y-2">
                    <p className="text-xs text-slate-200 font-semibold">{q.questionText}</p>
                    <p className="text-[11px] text-emerald-400">{q.explanation}</p>
                  </div>
                ))}
              </div>
            ) : (
              <div className="p-8 text-center text-slate-500 italic">Content not yet indexed</div>
            )}
          </div>
        )}

        {/* Medium Questions */}
        {activeCategory === 'medium_questions' && (
          <div className="space-y-3">
            <h3 className="text-lg font-bold text-white border-b border-slate-800 pb-2">Medium Questions (Level 20–50)</h3>
            {topicQuestions.filter(q => q.difficulty === '20-50').length > 0 ? (
              <div className="space-y-3">
                {topicQuestions.filter(q => q.difficulty === '20-50').map(q => (
                  <div key={q.id} className="p-4 bg-slate-900 border border-slate-800 rounded-xl space-y-2">
                    <p className="text-xs text-slate-200 font-semibold">{q.questionText}</p>
                    <p className="text-[11px] text-amber-300">{q.explanation}</p>
                  </div>
                ))}
              </div>
            ) : (
              <div className="p-8 text-center text-slate-500 italic">Content not yet indexed</div>
            )}
          </div>
        )}

        {/* Hard Questions */}
        {activeCategory === 'hard_questions' && (
          <div className="space-y-3">
            <h3 className="text-lg font-bold text-white border-b border-slate-800 pb-2">Hard Questions (Level 50+)</h3>
            {topicQuestions.filter(q => q.difficulty === '50+' || q.difficulty === 'CYQ').length > 0 ? (
              <div className="space-y-3">
                {topicQuestions.filter(q => q.difficulty === '50+' || q.difficulty === 'CYQ').map(q => (
                  <div key={q.id} className="p-4 bg-slate-900 border border-slate-800 rounded-xl space-y-2">
                    <p className="text-xs text-slate-200 font-semibold">{q.questionText}</p>
                    <p className="text-[11px] text-rose-300">{q.explanation}</p>
                  </div>
                ))}
              </div>
            ) : (
              <div className="p-8 text-center text-slate-500 italic">Content not yet indexed</div>
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
              <div className="p-8 text-center text-slate-500 italic">Content not yet indexed</div>
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
              <div className="p-8 text-center text-slate-500 italic">Content not yet indexed</div>
            )}
          </div>
        )}

        {/* Local User Workspace */}
        {activeCategory === 'local_notes' && (
          <div className="space-y-3">
            <div className="flex items-center justify-between border-b border-slate-800 pb-2">
              <h3 className="text-lg font-bold text-white">Local User Workspace for {activeTopic?.title}</h3>
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
              className="w-full bg-slate-900 border border-slate-800 rounded-xl p-4 text-xs text-slate-200 placeholder-slate-600 focus:ring-2 focus:ring-cyan-500 focus:outline-none font-mono"
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

        {/* AUTOMATED CONTENT AUDIT DASHBOARD */}
        {activeCategory === 'audit_dashboard' && (
          <div className="space-y-6">
            <div className="flex items-center justify-between border-b border-slate-800 pb-3">
              <div>
                <h3 className="text-lg font-bold text-white flex items-center gap-2">
                  <ShieldCheck className="w-5 h-5 text-cyan-400" />
                  Automated Content Audit & Integrity Dashboard
                </h3>
                <p className="text-xs text-slate-400 mt-0.5">
                  Developer audit tracking syllabus structure completeness, resource status, and PYQ/CYQ mapping.
                </p>
              </div>

              <div className="px-3 py-1 bg-cyan-500/20 text-cyan-300 border border-cyan-500/30 text-xs font-mono rounded font-bold">
                COMPLETENESS: {auditReport.completenessPercentage}%
              </div>
            </div>

            {/* Metric Cards Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              <div className="p-4 bg-slate-900 border border-slate-800 rounded-xl">
                <span className="text-[11px] font-mono text-slate-400 uppercase block">Total Chapters</span>
                <span className="text-2xl font-bold text-white">{auditReport.totalChapters}</span>
              </div>
              <div className="p-4 bg-slate-900 border border-slate-800 rounded-xl">
                <span className="text-[11px] font-mono text-slate-400 uppercase block">Total Topics</span>
                <span className="text-2xl font-bold text-cyan-400">{auditReport.totalTopics}</span>
              </div>
              <div className="p-4 bg-slate-900 border border-slate-800 rounded-xl">
                <span className="text-[11px] font-mono text-slate-400 uppercase block">Topics with Notes</span>
                <span className="text-2xl font-bold text-emerald-400">{auditReport.topicsWithNotes}</span>
              </div>
              <div className="p-4 bg-slate-900 border border-slate-800 rounded-xl">
                <span className="text-[11px] font-mono text-slate-400 uppercase block">Topics with Formulas</span>
                <span className="text-2xl font-bold text-amber-400">{auditReport.topicsWithFormulas}</span>
              </div>
            </div>

            {/* Resource Status Breakdown */}
            <div className="p-4 bg-slate-900 border border-slate-800 rounded-xl space-y-3">
              <h4 className="text-xs font-bold text-white uppercase tracking-wider">Resource Status Breakdown across Master Syllabus</h4>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                <div className="p-2.5 bg-slate-950 rounded-lg border border-slate-800 flex justify-between items-center text-xs">
                  <span className="text-emerald-400 font-medium">AVAILABLE (NO LOGIN)</span>
                  <span className="font-mono font-bold text-white">{auditReport.statusBreakdown['AVAILABLE']}</span>
                </div>
                <div className="p-2.5 bg-slate-950 rounded-lg border border-slate-800 flex justify-between items-center text-xs">
                  <span className="text-cyan-400 font-medium">LINK ONLY</span>
                  <span className="font-mono font-bold text-white">{auditReport.statusBreakdown['LINK ONLY']}</span>
                </div>
                <div className="p-2.5 bg-slate-950 rounded-lg border border-slate-800 flex justify-between items-center text-xs">
                  <span className="text-amber-400 font-medium">LOGIN REQUIRED</span>
                  <span className="font-mono font-bold text-white">{auditReport.statusBreakdown['LOGIN REQUIRED']}</span>
                </div>
                <div className="p-2.5 bg-slate-950 rounded-lg border border-slate-800 flex justify-between items-center text-xs">
                  <span className="text-rose-400 font-medium">PAYWALLED</span>
                  <span className="font-mono font-bold text-white">{auditReport.statusBreakdown['PAYWALLED']}</span>
                </div>
                <div className="p-2.5 bg-slate-950 rounded-lg border border-slate-800 flex justify-between items-center text-xs">
                  <span className="text-slate-400 font-medium">UNAVAILABLE</span>
                  <span className="font-mono font-bold text-white">{auditReport.statusBreakdown['UNAVAILABLE']}</span>
                </div>
                <div className="p-2.5 bg-slate-950 rounded-lg border border-slate-800 flex justify-between items-center text-xs">
                  <span className="text-purple-400 font-medium">NEEDS VERIFICATION</span>
                  <span className="font-mono font-bold text-white">{auditReport.statusBreakdown['NEEDS VERIFICATION']}</span>
                </div>
              </div>
            </div>

            {/* Honest Unindexed Topics Audit List */}
            <div className="p-4 bg-slate-900 border border-slate-800 rounded-xl space-y-3">
              <h4 className="text-xs font-bold text-amber-400 uppercase tracking-wider flex items-center gap-1.5">
                <AlertTriangle className="w-4 h-4" />
                Unindexed Topics Queue (Queued for verified notes/PYQ ingestion) ({auditReport.unindexedTopics.length})
              </h4>
              {auditReport.unindexedTopics.length > 0 ? (
                <div className="max-h-48 overflow-y-auto space-y-1.5 pr-2">
                  {auditReport.unindexedTopics.map((item, idx) => (
                    <div key={idx} className="p-2 bg-slate-950 rounded border border-slate-800 text-xs flex justify-between items-center text-slate-300">
                      <span>[{item.subject}] {item.chapter} → <strong className="text-white">{item.topicTitle}</strong></span>
                      <span className="text-[10px] text-amber-400 font-mono">Content not yet indexed</span>
                    </div>
                  ))}
                </div>
              ) : (
                <p className="text-xs text-emerald-400 flex items-center gap-1">
                  <Check className="w-4 h-4" /> 100% of topics in the Master Syllabus Catalogue are fully indexed!
                </p>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
