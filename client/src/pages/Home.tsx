// Home.tsx — 중학교 수학 시험 메인 페이지
// Design: Modern EduTech
// - Deep Navy sidebar + Cream White main area
// - Amber Gold accents for scores and highlights
// - Noto Serif KR headers, Noto Sans KR body
// - MathText 컴포넌트로 수식 렌더링

import { useState, useRef, useEffect, useCallback, forwardRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  CheckCircle2,
  XCircle,
  RotateCcw,
  BookOpen,
  Award,
  FileText,
  PenLine,
  ClipboardList,
  Eye,
  EyeOff,
  ChevronUp,
  Printer,
} from 'lucide-react';
import { questions, EXAM_TITLE, EXAM_SUBTITLE, getTypeLabel, type Question } from '@/lib/examData';

// ─── Math Text Renderer ───────────────────────────────────────────────────────
import React from 'react';

function renderMathParts(text: string): React.ReactNode[] {
  const parts: React.ReactNode[] = [];
  let remaining = text;
  let key = 0;

  while (remaining.length > 0) {
    // [frac:num/den]
    const fracMatch = remaining.match(/^\[frac:([^\]\/]+)\/([^\]]+)\]/);
    if (fracMatch) {
      parts.push(
        <span key={key++} className="math-frac">
          <span className="numerator">{fracMatch[1]}</span>
          <span className="denominator">{fracMatch[2]}</span>
        </span>
      );
      remaining = remaining.slice(fracMatch[0].length);
      continue;
    }
    // [sup:text]
    const supMatch = remaining.match(/^\[sup:([^\]]+)\]/);
    if (supMatch) {
      parts.push(<sup key={key++} style={{ fontSize: '0.72em', verticalAlign: 'super', lineHeight: 0 }}>{supMatch[1]}</sup>);
      remaining = remaining.slice(supMatch[0].length);
      continue;
    }
    // [sub:text]
    const subMatch = remaining.match(/^\[sub:([^\]]+)\]/);
    if (subMatch) {
      parts.push(<sub key={key++} style={{ fontSize: '0.72em', verticalAlign: 'sub', lineHeight: 0 }}>{subMatch[1]}</sub>);
      remaining = remaining.slice(subMatch[0].length);
      continue;
    }
    parts.push(remaining[0]);
    remaining = remaining.slice(1);
  }
  return parts;
}

function MathText({ text, className = '' }: { text: string; className?: string }) {
  return <span className={className}>{renderMathParts(text)}</span>;
}

function MathPre({ text }: { text: string }) {
  // Split by newline and render each line with math
  const lines = text.split('\n');
  return (
    <div style={{ fontFamily: "'Noto Sans KR', sans-serif", fontSize: '0.8rem', lineHeight: 1.8, color: 'oklch(0.35 0.03 250)', whiteSpace: 'pre-wrap' }}>
      {lines.map((line, i) => (
        <div key={i}>{renderMathParts(line)}</div>
      ))}
    </div>
  );
}

// ─── Types ───────────────────────────────────────────────────────────────────
type Answers = Record<number, string>;
type GradeResult = {
  score: number;
  total: number;
  correct: number;
  wrong: number;
  unanswered: number;
  details: Record<number, boolean | null>;
};

// ─── Constants ────────────────────────────────────────────────────────────────
const TOTAL_SCORE = questions.reduce((s, q) => s + q.score, 0);

// ─── Helper ───────────────────────────────────────────────────────────────────
function getTypeBadgeClass(type: Question['type']) {
  if (type === 'multiple') return 'type-badge-obj';
  if (type === 'short') return 'type-badge-short';
  return 'type-badge-essay';
}

function getTypeIcon(type: Question['type']) {
  if (type === 'multiple') return <ClipboardList size={12} />;
  if (type === 'short') return <PenLine size={12} />;
  return <FileText size={12} />;
}

// ─── Main Component ───────────────────────────────────────────────────────────
export default function Home() {
  const [answers, setAnswers] = useState<Answers>({});
  const [currentQ, setCurrentQ] = useState(1);
  const [graded, setGraded] = useState(false);
  const [gradeResult, setGradeResult] = useState<GradeResult | null>(null);
  const [showExplanation, setShowExplanation] = useState<Record<number, boolean>>({});
  const [showResultModal, setShowResultModal] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);
  const questionRefs = useRef<Record<number, HTMLDivElement | null>>({});

  const answeredCount = Object.keys(answers).filter(k => answers[Number(k)] !== undefined && answers[Number(k)] !== '').length;
  const progress = (answeredCount / questions.length) * 100;

  // Scroll top button
  useEffect(() => {
    const onScroll = () => setShowScrollTop(window.scrollY > 400);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Scroll to question
  const scrollToQuestion = useCallback((id: number) => {
    setCurrentQ(id);
    const el = questionRefs.current[id];
    if (el) {
      const top = el.getBoundingClientRect().top + window.scrollY - 80;
      window.scrollTo({ top, behavior: 'smooth' });
    }
  }, []);

  // Intersection observer to track current question
  useEffect(() => {
    const observers: IntersectionObserver[] = [];
    questions.forEach((q) => {
      const el = questionRefs.current[q.id];
      if (!el) return;
      const obs = new IntersectionObserver(
        ([entry]) => { if (entry.isIntersecting) setCurrentQ(q.id); },
        { threshold: 0.3, rootMargin: '-80px 0px -50% 0px' }
      );
      obs.observe(el);
      observers.push(obs);
    });
    return () => observers.forEach((o) => o.disconnect());
  }, []);

  const setAnswer = (qId: number, value: string) => {
    if (graded) return;
    setAnswers((prev) => ({ ...prev, [qId]: value }));
  };

  const handleGrade = () => {
    const details: Record<number, boolean | null> = {};
    let score = 0;
    let correct = 0;
    let wrong = 0;
    let unanswered = 0;

    questions.forEach((q) => {
      const ans = answers[q.id];
      if (q.type === 'multiple') {
        if (!ans) { details[q.id] = null; unanswered++; }
        else if (ans === q.answer) { details[q.id] = true; score += q.score; correct++; }
        else { details[q.id] = false; wrong++; }
      } else {
        if (!ans || ans.trim() === '' || ans === '{}') { details[q.id] = null; unanswered++; }
        else { details[q.id] = null; }
      }
    });

    setGradeResult({ score, total: TOTAL_SCORE, correct, wrong, unanswered, details });
    setGraded(true);
    setShowResultModal(true);
  };

  const handleReset = () => {
    setAnswers({});
    setGraded(false);
    setGradeResult(null);
    setShowExplanation({});
    setShowResultModal(false);
    setCurrentQ(1);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const toggleExplanation = (qId: number) => {
    setShowExplanation((prev) => ({ ...prev, [qId]: !prev[qId] }));
  };

  const handlePrint = () => {
    const printWindow = window.open('', '', 'width=900,height=700');
    if (!printWindow) return;
    const printContent = generatePrintHTML();
    printWindow.document.write(printContent);
    printWindow.document.close();
    setTimeout(() => {
      printWindow.print();
      printWindow.close();
    }, 300);
  };

  const generatePrintHTML = () => {
    const questionHTML = questions.map((q) => {
      let optionsHTML = '';
      if (q.type === 'multiple' && q.options) {
        optionsHTML = q.options.map((opt) => 
          `<div style="margin: 8px 0; padding: 8px 12px; border: 1px solid #ddd; border-radius: 4px; font-size: 13px;">
            <strong>${opt.label}</strong> ${opt.text}
          </div>`
        ).join('');
      } else if (q.type === 'short') {
        optionsHTML = `<div style="margin: 12px 0; padding: 8px; border-bottom: 2px solid #333; min-height: 24px;"></div>`;
      } else if (q.type === 'essay' && q.subQuestions) {
        optionsHTML = q.subQuestions.map((sub) => 
          `<div style="margin: 12px 0;">
            <p style="font-weight: bold; margin: 8px 0; font-size: 13px;">${sub.label} ${sub.text}</p>
            <div style="padding: 8px; border-bottom: 2px solid #333; min-height: ${sub.id.endsWith('-2') ? '100px' : '50px'};"></div>
          </div>`
        ).join('');
      }
      return `
        <div style="page-break-inside: avoid; margin-bottom: 20px; padding: 14px; border: 1px solid #ccc; border-radius: 4px;">
          <div style="display: flex; justify-content: space-between; align-items: flex-start; margin-bottom: 10px;">
            <div>
              <span style="display: inline-block; width: 22px; height: 22px; background: #1e3a5f; color: white; border-radius: 50%; text-align: center; line-height: 22px; font-weight: bold; margin-right: 6px; font-size: 12px;">${q.id}</span>
              <span style="background: #f0f0f0; padding: 2px 6px; border-radius: 3px; font-size: 11px; margin-right: 6px;">${getTypeLabel(q.type)}</span>
              <span style="font-size: 11px; color: #666;">${q.topic}</span>
            </div>
            <span style="background: #d4a574; color: white; padding: 2px 6px; border-radius: 3px; font-weight: bold; font-size: 11px;">${q.score}점</span>
          </div>
          <p style="margin: 10px 0; font-size: 13px; line-height: 1.5; font-weight: 500;">${q.text}</p>
          <div style="margin-top: 10px;">${optionsHTML}</div>
        </div>
      `;
    }).join('');

    return `
      <!DOCTYPE html>
      <html lang="ko">
      <head>
        <meta charset="UTF-8">
        <title>${EXAM_TITLE}</title>
        <style>
          @page {
            size: A4;
            margin: 12mm 15mm;
          }
          * { margin: 0; padding: 0; box-sizing: border-box; }
          body {
            font-family: 'Noto Sans KR', Arial, sans-serif;
            color: #222;
            line-height: 1.5;
            background: white;
            font-size: 13px;
          }
          .header {
            text-align: center;
            margin-bottom: 16px;
            padding-bottom: 12px;
            border-bottom: 2px solid #1e3a5f;
          }
          .header h1 {
            font-size: 20px;
            margin-bottom: 3px;
            color: #1e3a5f;
          }
          .header p {
            font-size: 11px;
            color: #666;
          }
          .info {
            display: flex;
            justify-content: space-between;
            margin-bottom: 16px;
            font-size: 11px;
            color: #666;
          }
          .questions { margin-top: 12px; }
        </style>
      </head>
      <body>
        <div class="header">
          <h1>${EXAM_TITLE}</h1>
          <p>${EXAM_SUBTITLE} · 총 ${TOTAL_SCORE}점</p>
        </div>
        <div class="info">
          <div>학년: _____ 반: _____ 이름: ___________________</div>
          <div>시험일: ___________________</div>
        </div>
        <div class="questions">
          ${questionHTML}
        </div>
      </body>
      </html>
    `;
  };

  return (
    <div className="min-h-screen flex" style={{ background: 'oklch(0.97 0.003 80)' }}>
      {/* ── Sidebar ── */}
      <aside
        className="hidden lg:flex flex-col fixed top-0 left-0 h-screen w-60 z-30"
        style={{ background: 'oklch(0.20 0.06 255)', borderRight: '1px solid oklch(0.28 0.06 255)' }}
      >
        {/* Logo */}
        <div className="px-5 pt-5 pb-4" style={{ borderBottom: '1px solid oklch(0.28 0.06 255)' }}>
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0"
              style={{ background: 'oklch(0.75 0.15 75)' }}>
              <BookOpen size={15} style={{ color: 'oklch(0.18 0.02 250)' }} />
            </div>
            <div>
              <p className="text-sm font-bold leading-tight"
                style={{ color: 'oklch(0.93 0.005 80)', fontFamily: "'Noto Serif KR', serif" }}>
                수학 시험
              </p>
              <p className="text-xs" style={{ color: 'oklch(0.55 0.02 250)' }}>
                중학교 1~2학년
              </p>
            </div>
          </div>
        </div>

        {/* Progress */}
        <div className="px-5 py-3" style={{ borderBottom: '1px solid oklch(0.28 0.06 255)' }}>
          <div className="flex justify-between items-center mb-1.5">
            <span className="text-xs" style={{ color: 'oklch(0.58 0.02 250)' }}>답안 작성</span>
            <span className="text-xs font-bold" style={{ color: 'oklch(0.75 0.15 75)' }}>
              {answeredCount} / {questions.length}
            </span>
          </div>
          <div className="h-1.5 rounded-full overflow-hidden" style={{ background: 'oklch(0.30 0.06 255)' }}>
            <div className="progress-bar-fill" style={{ width: `${progress}%` }} />
          </div>
        </div>

        {/* Question grid */}
        <div className="flex-1 overflow-y-auto px-4 py-3">
          <p className="text-xs mb-2" style={{ color: 'oklch(0.45 0.02 250)' }}>문제 목록</p>
          <div className="grid grid-cols-5 gap-1.5">
            {questions.map((q) => {
              const isAnswered = answers[q.id] !== undefined && answers[q.id] !== '' && answers[q.id] !== '{}';
              const isCurrent = currentQ === q.id;
              const detail = gradeResult?.details[q.id];
              let cls = 'nav-q-item';
              if (graded && detail === true) cls += ' correct-nav';
              else if (graded && detail === false) cls += ' wrong-nav';
              else if (isCurrent) cls += ' current';
              else if (isAnswered) cls += ' answered';
              return (
                <button key={q.id} className={cls} onClick={() => scrollToQuestion(q.id)}
                  title={`${q.id}번 (${q.score}점)`}>
                  {q.id}
                </button>
              );
            })}
          </div>

          {/* Legend */}
          <div className="mt-4 space-y-1.5">
            {[
              { color: 'oklch(0.75 0.15 75)', label: '현재 문제' },
              { color: 'oklch(0.75 0.15 75 / 0.35)', label: '답안 작성' },
              ...(graded ? [
                { color: 'oklch(0.55 0.18 150 / 0.5)', label: '정답' },
                { color: 'oklch(0.58 0.22 27 / 0.4)', label: '오답' },
              ] : []),
            ].map((item) => (
              <div key={item.label} className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-sm flex-shrink-0" style={{ background: item.color }} />
                <span className="text-xs" style={{ color: 'oklch(0.5 0.02 250)' }}>{item.label}</span>
              </div>
            ))}
          </div>

          {/* Score summary if graded */}
          {graded && gradeResult && (
            <div className="mt-4 p-3 rounded-lg" style={{ background: 'oklch(0.28 0.06 255)' }}>
              <p className="text-xs font-semibold mb-2" style={{ color: 'oklch(0.75 0.15 75)' }}>채점 결과</p>
              <div className="text-center">
                <span className="text-2xl font-black" style={{ color: 'white' }}>{gradeResult.score}</span>
                <span className="text-xs ml-1" style={{ color: 'oklch(0.6 0.02 250)' }}>/ {gradeResult.total}점</span>
              </div>
              <div className="grid grid-cols-3 gap-1 mt-2 text-center">
                {[
                  { label: '정답', val: gradeResult.correct, color: 'oklch(0.55 0.18 150)' },
                  { label: '오답', val: gradeResult.wrong, color: 'oklch(0.58 0.22 27)' },
                  { label: '미답', val: gradeResult.unanswered, color: 'oklch(0.55 0.02 250)' },
                ].map(s => (
                  <div key={s.label}>
                    <div className="text-sm font-bold" style={{ color: s.color }}>{s.val}</div>
                    <div className="text-xs" style={{ color: 'oklch(0.5 0.02 250)' }}>{s.label}</div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Action */}
        <div className="px-4 pb-5 pt-3 space-y-2" style={{ borderTop: '1px solid oklch(0.28 0.06 255)' }}>
          <button onClick={handlePrint}
            className="w-full py-2.5 rounded-lg text-sm font-semibold flex items-center justify-center gap-2 transition-all duration-150 active:scale-95"
            style={{ background: 'oklch(0.28 0.08 255)', color: 'white' }}>
            <Printer size={14} />
            인쇄하기
          </button>
          {!graded ? (
            <button onClick={handleGrade}
              className="w-full py-2.5 rounded-lg text-sm font-bold transition-all duration-150 active:scale-95"
              style={{ background: 'oklch(0.75 0.15 75)', color: 'oklch(0.18 0.02 250)' }}>
              채점하기
            </button>
          ) : (
            <button onClick={handleReset}
              className="w-full py-2.5 rounded-lg text-sm font-semibold flex items-center justify-center gap-2 transition-all duration-150 active:scale-95"
              style={{ background: 'oklch(0.30 0.07 255)', color: 'oklch(0.85 0.01 250)' }}>
              <RotateCcw size={13} />
              다시 풀기
            </button>
          )}
        </div>
      </aside>

      {/* ── Main ── */}
      <main className="flex-1 lg:ml-60">
        {/* Header */}
        <header className="sticky top-0 z-20 px-5 py-3.5"
          style={{ background: 'oklch(0.20 0.06 255)', borderBottom: '1px solid oklch(0.28 0.06 255)' }}>
          <div className="max-w-3xl mx-auto flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="lg:hidden w-7 h-7 rounded-lg flex items-center justify-center flex-shrink-0"
                style={{ background: 'oklch(0.75 0.15 75)' }}>
                <BookOpen size={14} style={{ color: 'oklch(0.18 0.02 250)' }} />
              </div>
              <div>
                <h1 className="text-base font-bold leading-tight"
                  style={{ color: 'oklch(0.95 0.005 80)', fontFamily: "'Noto Serif KR', serif" }}>
                  {EXAM_TITLE}
                </h1>
                <p className="text-xs" style={{ color: 'oklch(0.55 0.02 250)' }}>
                  {EXAM_SUBTITLE} · 총 {TOTAL_SCORE}점
                </p>
              </div>
            </div>
            <div className="flex items-center gap-2 sm:gap-3">
              <span className="text-xs hidden sm:inline" style={{ color: 'oklch(0.65 0.02 250)' }}>
                {answeredCount}/{questions.length}
              </span>
              <button onClick={handlePrint}
                className="p-1.5 sm:p-2 rounded-lg text-xs sm:text-sm font-semibold flex items-center gap-1 transition-all duration-150 active:scale-95"
                style={{ background: 'oklch(0.28 0.08 255)', color: 'white' }}
                title="A4 용지에 맞춰 인쇄">
                <Printer size={14} />
                <span className="hidden sm:inline">인쇄</span>
              </button>
              <div className="lg:hidden">
                {!graded ? (
                  <button onClick={handleGrade}
                    className="px-3 py-1.5 rounded-lg text-xs font-bold"
                    style={{ background: 'oklch(0.75 0.15 75)', color: 'oklch(0.18 0.02 250)' }}>
                    채점
                  </button>
                ) : (
                  <button onClick={handleReset}
                    className="px-3 py-1.5 rounded-lg text-xs font-semibold flex items-center gap-1"
                    style={{ background: 'oklch(0.30 0.07 255)', color: 'oklch(0.85 0.01 250)' }}>
                    <RotateCcw size={11} /> 초기화
                  </button>
                )}
              </div>
            </div>
          </div>
        </header>

        {/* Questions */}
        <div className="max-w-3xl mx-auto px-4 sm:px-6 py-6 space-y-5">
          {questions.map((q, idx) => (
            <QuestionCard
              key={q.id}
              question={q}
              index={idx}
              answer={answers[q.id]}
              graded={graded}
              gradeDetail={gradeResult?.details[q.id] ?? null}
              showExplanation={showExplanation[q.id] ?? false}
              onAnswer={(val) => setAnswer(q.id, val)}
              onToggleExplanation={() => toggleExplanation(q.id)}
              ref={(el) => { questionRefs.current[q.id] = el; }}
            />
          ))}

          {/* Bottom CTA */}
          <div className="pb-16 pt-4 flex justify-center gap-3">
            <button onClick={handlePrint}
              className="px-6 py-3 rounded-xl text-sm font-semibold flex items-center gap-2 transition-all duration-150 active:scale-95 border"
              style={{ borderColor: 'oklch(0.28 0.08 255)', color: 'oklch(0.28 0.08 255)' }}>
              <Printer size={14} /> 인쇄
            </button>
            {!graded ? (
              <button onClick={handleGrade}
                className="px-8 py-3 rounded-xl text-sm font-bold shadow-lg transition-all duration-150 active:scale-95"
                style={{ background: 'oklch(0.28 0.08 255)', color: 'white', boxShadow: '0 4px 20px oklch(0.28 0.08 255 / 0.35)' }}>
                채점하기
              </button>
            ) : (
              <button onClick={handleReset}
                className="px-8 py-3 rounded-xl text-sm font-bold flex items-center gap-2 transition-all duration-150 active:scale-95"
                style={{ background: 'oklch(0.28 0.08 255)', color: 'white' }}>
                <RotateCcw size={14} /> 다시 풀기
              </button>
            )}
          </div>
        </div>
      </main>

      {/* Scroll to top */}
      <AnimatePresence>
        {showScrollTop && (
          <motion.button
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="fixed bottom-6 right-6 z-40 w-10 h-10 rounded-full flex items-center justify-center shadow-lg"
            style={{ background: 'oklch(0.28 0.08 255)', color: 'white' }}>
            <ChevronUp size={18} />
          </motion.button>
        )}
      </AnimatePresence>

      {/* Result Modal */}
      <AnimatePresence>
        {showResultModal && gradeResult && (
          <ResultModal result={gradeResult} onClose={() => setShowResultModal(false)} onReset={handleReset} onPrint={handlePrint} />
        )}
      </AnimatePresence>
    </div>
  );
}

// ─── Question Card ─────────────────────────────────────────────────────────────
interface QuestionCardProps {
  question: Question;
  index: number;
  answer: string | undefined;
  graded: boolean;
  gradeDetail: boolean | null;
  showExplanation: boolean;
  onAnswer: (val: string) => void;
  onToggleExplanation: () => void;
}

const QuestionCard = forwardRef<HTMLDivElement, QuestionCardProps>(
  ({ question: q, index, answer, graded, gradeDetail, showExplanation, onAnswer, onToggleExplanation }, ref) => {
    const isCorrect = graded && gradeDetail === true;
    const isWrong = graded && gradeDetail === false;

    const parseEssayAnswer = (raw: string | undefined): Record<string, string> => {
      if (!raw) return {};
      try { return JSON.parse(raw); } catch { return {}; }
    };

    return (
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 14 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.28, delay: Math.min(index * 0.035, 0.35), ease: [0.23, 1, 0.32, 1] }}
        className="question-card"
        style={isCorrect ? { borderColor: 'oklch(0.55 0.18 150 / 0.45)' }
          : isWrong ? { borderColor: 'oklch(0.58 0.22 27 / 0.4)' } : {}}
      >
        {/* Header */}
        <div className="px-5 py-3 flex items-center justify-between"
          style={{ borderBottom: '1px solid oklch(0.93 0.004 250)' }}>
          <div className="flex items-center gap-2.5">
            <div className="w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0"
              style={{
                background: isCorrect ? 'oklch(0.55 0.18 150)' : isWrong ? 'oklch(0.58 0.22 27)' : 'oklch(0.28 0.08 255)',
                color: 'white',
              }}>
              {q.id}
            </div>
            <span className={getTypeBadgeClass(q.type)}>
              <span className="inline-flex items-center gap-1">
                {getTypeIcon(q.type)}
                {getTypeLabel(q.type)}
              </span>
            </span>
            <span className="text-xs hidden sm:inline" style={{ color: 'oklch(0.62 0.02 250)' }}>
              {q.topic}
            </span>
          </div>
          <div className="flex items-center gap-2">
            {graded && gradeDetail !== null && (
              <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }}
                transition={{ type: 'spring', stiffness: 400, damping: 20 }}>
                {isCorrect
                  ? <CheckCircle2 size={17} style={{ color: 'oklch(0.55 0.18 150)' }} />
                  : <XCircle size={17} style={{ color: 'oklch(0.58 0.22 27)' }} />}
              </motion.div>
            )}
            <span className="score-badge">{q.score}점</span>
          </div>
        </div>

        {/* Body */}
        <div className="px-5 py-4">
          <p className="text-sm leading-relaxed mb-4 font-medium" style={{ color: 'oklch(0.22 0.02 250)' }}>
            <MathText text={q.text} />
          </p>

          {/* Multiple choice */}
          {q.type === 'multiple' && q.options && (
            <div className="space-y-2">
              {q.options.map((opt) => {
                const isSelected = answer === opt.label;
                const isCorrectOpt = graded && q.answer === opt.label;
                const isWrongOpt = graded && isSelected && q.answer !== opt.label;
                let cls = 'option-item';
                if (isWrongOpt) cls += ' wrong';
                else if (isCorrectOpt && graded) cls += ' show-correct';
                else if (isSelected) cls += ' selected';
                return (
                  <div key={opt.id} className={cls} onClick={() => onAnswer(opt.label)}>
                    <span className="text-sm font-bold flex-shrink-0 w-5 text-center"
                      style={{
                        color: isWrongOpt ? 'oklch(0.58 0.22 27)'
                          : isCorrectOpt && graded ? 'oklch(0.42 0.15 150)'
                          : isSelected ? 'oklch(0.28 0.08 255)'
                          : 'oklch(0.52 0.02 250)',
                      }}>
                      {opt.label}
                    </span>
                    <span className="text-sm leading-relaxed flex-1" style={{ color: 'oklch(0.25 0.02 250)' }}>
                      <MathText text={opt.text} />
                    </span>
                    {isWrongOpt && <XCircle size={14} className="ml-auto flex-shrink-0" style={{ color: 'oklch(0.58 0.22 27)' }} />}
                    {isCorrectOpt && graded && <CheckCircle2 size={14} className="ml-auto flex-shrink-0" style={{ color: 'oklch(0.42 0.15 150)' }} />}
                  </div>
                );
              })}
            </div>
          )}

          {/* Short answer */}
          {q.type === 'short' && (
            <div>
              <label className="text-xs font-medium mb-1.5 block" style={{ color: 'oklch(0.52 0.02 250)' }}>
                답안을 작성하세요
              </label>
              <input
                type="text"
                value={answer ?? ''}
                onChange={(e) => onAnswer(e.target.value)}
                disabled={graded}
                placeholder="답 입력..."
                className="w-full px-3 py-2.5 text-sm rounded-lg border transition-all duration-150"
                style={{
                  borderColor: graded && answer?.trim() ? 'oklch(0.55 0.18 150 / 0.5)' : 'oklch(0.88 0.005 250)',
                  background: graded ? 'oklch(0.97 0.003 80)' : 'white',
                  color: 'oklch(0.22 0.02 250)',
                  outline: 'none',
                  fontFamily: "'Noto Sans KR', sans-serif",
                }}
              />
              {graded && q.answer && (
                <p className="text-xs mt-1.5 font-semibold" style={{ color: 'oklch(0.42 0.15 150)' }}>
                  정답: <MathText text={q.answer} />
                </p>
              )}
            </div>
          )}

          {/* Essay */}
          {q.type === 'essay' && q.subQuestions && (
            <div className="space-y-5">
              {q.subQuestions.map((sub) => {
                const parsed = parseEssayAnswer(answer);
                return (
                  <div key={sub.id}>
                    <p className="text-sm font-semibold mb-2" style={{ color: 'oklch(0.28 0.08 255)' }}>
                      {sub.label} <MathText text={sub.text} />
                    </p>
                    <textarea
                      value={parsed[sub.id] ?? ''}
                      onChange={(e) => {
                        const prev = parseEssayAnswer(answer);
                        prev[sub.id] = e.target.value;
                        onAnswer(JSON.stringify(prev));
                      }}
                      disabled={graded}
                      placeholder="풀이 과정과 답을 작성하세요..."
                      className="essay-textarea"
                      rows={sub.id.endsWith('-2') ? 6 : 3}
                    />
                    {graded && sub.answer && (
                      <p className="text-xs mt-1.5 font-semibold" style={{ color: 'oklch(0.42 0.15 150)' }}>
                        정답: <MathText text={sub.answer} />
                      </p>
                    )}
                  </div>
                );
              })}
            </div>
          )}
        </div>

        {/* Explanation */}
        {graded && (
          <div style={{ borderTop: '1px solid oklch(0.93 0.004 250)' }}>
            <button
              onClick={onToggleExplanation}
              className="w-full px-5 py-2.5 flex items-center gap-2 text-xs font-medium transition-colors duration-150 hover:bg-slate-50"
              style={{ color: 'oklch(0.45 0.05 255)' }}>
              {showExplanation ? <EyeOff size={12} /> : <Eye size={12} />}
              {showExplanation ? '풀이 숨기기' : '풀이 보기'}
            </button>
            <AnimatePresence>
              {showExplanation && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.22, ease: [0.23, 1, 0.32, 1] }}
                  className="overflow-hidden">
                  <div className="px-5 pb-4 pt-1" style={{ background: 'oklch(0.975 0.004 255)' }}>
                    {q.type === 'essay' && q.subQuestions ? (
                      q.subQuestions.map((sub) => (
                        <div key={sub.id} className="mb-3 last:mb-0">
                          <p className="text-xs font-bold mb-1" style={{ color: 'oklch(0.28 0.08 255)' }}>
                            {sub.label} 풀이
                          </p>
                          {sub.explanation && <MathPre text={sub.explanation} />}
                        </div>
                      ))
                    ) : (
                      q.explanation && <MathPre text={q.explanation} />
                    )}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        )}
      </motion.div>
    );
  }
);
QuestionCard.displayName = 'QuestionCard';

// ─── Result Modal ──────────────────────────────────────────────────────────────
function ResultModal({ result, onClose, onReset, onPrint }: { result: GradeResult; onClose: () => void; onReset: () => void; onPrint: () => void }) {
  const percentage = Math.round((result.score / result.total) * 100);
  const grade = percentage >= 90 ? 'A' : percentage >= 80 ? 'B' : percentage >= 70 ? 'C' : percentage >= 60 ? 'D' : 'F';
  const gradeColor = grade === 'A' ? 'oklch(0.55 0.18 150)' : grade === 'B' ? 'oklch(0.6 0.15 200)'
    : grade === 'C' ? 'oklch(0.75 0.15 75)' : grade === 'D' ? 'oklch(0.7 0.15 50)' : 'oklch(0.58 0.22 27)';

  return (
    <motion.div
      initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      style={{ background: 'oklch(0 0 0 / 0.55)', backdropFilter: 'blur(6px)' }}
      onClick={onClose}>
      <motion.div
        initial={{ scale: 0.88, opacity: 0, y: 24 }}
        animate={{ scale: 1, opacity: 1, y: 0 }}
        exit={{ scale: 0.88, opacity: 0, y: 24 }}
        transition={{ type: 'spring', stiffness: 280, damping: 24 }}
        className="w-full max-w-sm rounded-2xl overflow-hidden shadow-2xl"
        style={{ background: 'white' }}
        onClick={(e) => e.stopPropagation()}>
        {/* Header */}
        <div className="px-6 py-6 text-center" style={{ background: 'oklch(0.20 0.06 255)' }}>
          <motion.div
            initial={{ scale: 0 }} animate={{ scale: 1 }}
            transition={{ delay: 0.2, type: 'spring', stiffness: 300 }}
            className="w-14 h-14 rounded-full flex items-center justify-center mx-auto mb-3"
            style={{ background: 'oklch(0.75 0.15 75)' }}>
            <Award size={24} style={{ color: 'oklch(0.18 0.02 250)' }} />
          </motion.div>
          <h2 className="text-lg font-bold" style={{ color: 'white', fontFamily: "'Noto Serif KR', serif" }}>
            채점 결과
          </h2>
          <p className="text-xs mt-1" style={{ color: 'oklch(0.55 0.02 250)' }}>객관식 문항 기준</p>
        </div>

        {/* Score */}
        <div className="px-6 py-5 text-center">
          <motion.div initial={{ scale: 0.5, opacity: 0 }} animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.3, type: 'spring', stiffness: 200 }}>
            <span className="text-5xl font-black" style={{ color: gradeColor, fontFamily: "'Noto Serif KR', serif" }}>
              {result.score}
            </span>
            <span className="text-xl font-semibold ml-1" style={{ color: 'oklch(0.6 0.02 250)' }}>
              / {result.total}점
            </span>
          </motion.div>
          <div className="text-sm mt-1" style={{ color: 'oklch(0.6 0.02 250)' }}>{percentage}% 달성</div>
          <div className="inline-flex items-center gap-1.5 mt-2.5 px-4 py-1 rounded-full text-sm font-bold"
            style={{ background: `${gradeColor}22`, color: gradeColor }}>
            등급 {grade}
          </div>
        </div>

        {/* Stats */}
        <div className="mx-6 mb-4 rounded-xl p-4 grid grid-cols-3 gap-3"
          style={{ background: 'oklch(0.97 0.003 80)' }}>
          {[
            { label: '정답', value: result.correct, color: 'oklch(0.42 0.15 150)' },
            { label: '오답', value: result.wrong, color: 'oklch(0.58 0.22 27)' },
            { label: '미답', value: result.unanswered, color: 'oklch(0.6 0.02 250)' },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="text-xl font-bold" style={{ color: stat.color }}>{stat.value}</div>
              <div className="text-xs mt-0.5" style={{ color: 'oklch(0.6 0.02 250)' }}>{stat.label}</div>
            </div>
          ))}
        </div>

        <p className="text-xs text-center pb-2" style={{ color: 'oklch(0.65 0.02 250)' }}>
          * 서답형·서술형은 직접 채점이 필요합니다
        </p>

        {/* Actions */}
        <div className="px-6 pb-6 space-y-2">
          <button onClick={onClose}
            className="w-full py-2.5 rounded-xl text-sm font-semibold border transition-all duration-150"
            style={{ borderColor: 'oklch(0.88 0.005 250)', color: 'oklch(0.4 0.02 250)' }}>
            풀이 확인
          </button>
          <div className="flex gap-2">
            <button onClick={onPrint}
              className="flex-1 py-2.5 rounded-xl text-sm font-semibold flex items-center justify-center gap-1.5 border transition-all duration-150 active:scale-95"
              style={{ borderColor: 'oklch(0.28 0.08 255)', color: 'oklch(0.28 0.08 255)' }}>
              <Printer size={13} /> 인쇄
            </button>
            <button onClick={onReset}
              className="flex-1 py-2.5 rounded-xl text-sm font-bold flex items-center justify-center gap-1.5 transition-all duration-150 active:scale-95"
              style={{ background: 'oklch(0.28 0.08 255)', color: 'white' }}>
              <RotateCcw size={13} /> 다시
            </button>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}
