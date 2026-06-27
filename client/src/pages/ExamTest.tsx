// Design: Modern EduTech
// - Deep Navy sidebar + Cream White main area
// - Amber Gold accents for scores and highlights
// - Noto Serif KR headers, Noto Sans KR body
// - MathText 컴포넌트로 수식 렌더링
// - 동적 문제지 로딩 지원

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
  ArrowLeft,
} from 'lucide-react';
import { useLocation } from 'wouter';
import { getExamById } from '@/lib/examCatalog';
import type { Question, QuestionType } from '@/lib/examData';
import React from 'react';

// ─── Math Text Renderer ───────────────────────────────────────────────────────

// Find the matching closing bracket for a tag starting at pos (pos points to the '[')
function findClosingBracket(text: string, pos: number): number {
  let depth = 0;
  for (let i = pos; i < text.length; i++) {
    if (text[i] === '[') depth++;
    else if (text[i] === ']') {
      depth--;
      if (depth === 0) return i;
    }
  }
  return -1; // not found
}

// Parse all top-level tags from text, returning an array of segments
type Segment = { type: 'text'; value: string } | { type: 'tag'; tagName: string; content: string };

function parseSegments(text: string): Segment[] {
  const segments: Segment[] = [];
  let i = 0;
  const tagPrefixes = ['frac:', 'sup:', 'sub:', 'dot:'];

  while (i < text.length) {
    // Try to match a tag at position i
    let matched = false;
    if (text[i] === '[') {
      for (const prefix of tagPrefixes) {
        if (text.substring(i + 1, i + 1 + prefix.length) === prefix) {
          const closingIdx = findClosingBracket(text, i);
          if (closingIdx !== -1) {
            const inner = text.substring(i + 1 + prefix.length, closingIdx);
            const tagName = prefix.slice(0, -1); // remove trailing ':'
            segments.push({ type: 'tag', tagName, content: inner });
            i = closingIdx + 1;
            matched = true;
          }
          break;
        }
      }
    }
    if (!matched) {
      // Accumulate plain text
      const last = segments[segments.length - 1];
      if (last && last.type === 'text') {
        last.value += text[i];
      } else {
        segments.push({ type: 'text', value: text[i] });
      }
      i++;
    }
  }
  return segments;
}

function renderMathParts(text: string): React.ReactNode[] {
  const segments = parseSegments(text);
  const parts: React.ReactNode[] = [];
  let key = 0;

  for (const seg of segments) {
    if (seg.type === 'text') {
      const splitByNewline = seg.value.split('\n');
      splitByNewline.forEach((line, i) => {
        if (line) parts.push(<span key={key++}>{line}</span>);
        if (i < splitByNewline.length - 1) parts.push(<br key={key++} />);
      });
    } else {
      const { tagName, content } = seg;
      if (tagName === 'frac') {
        // Find the top-level '/' that separates numerator from denominator
        let slashIdx = -1;
        let depth = 0;
        for (let j = 0; j < content.length; j++) {
          if (content[j] === '[') depth++;
          else if (content[j] === ']') depth--;
          else if (content[j] === '/' && depth === 0) {
            slashIdx = j;
            break;
          }
        }
        if (slashIdx === -1) {
          parts.push(<span key={key++}>{renderMathParts(content)}</span>);
        } else {
          const num = content.substring(0, slashIdx);
          const den = content.substring(slashIdx + 1);
          parts.push(
            <span key={key++} style={{ display: 'inline-flex', flexDirection: 'column', alignItems: 'center', margin: '0 2px', verticalAlign: 'middle' }}>
              <span style={{ fontSize: '0.75em', lineHeight: '1' }}>{renderMathParts(num)}</span>
              <span style={{ borderTop: '1px solid currentColor', width: '100%', margin: '1px 0' }}></span>
              <span style={{ fontSize: '0.75em', lineHeight: '1' }}>{renderMathParts(den)}</span>
            </span>
          );
        }
      } else if (tagName === 'sup') {
        parts.push(
          <sup key={key++} style={{ fontSize: '0.8em' }}>
            {renderMathParts(content)}
          </sup>
        );
      } else if (tagName === 'sub') {
        parts.push(
          <sub key={key++} style={{ fontSize: '0.8em' }}>
            {renderMathParts(content)}
          </sub>
        );
      } else if (tagName === 'dot') {
        parts.push(
          <span key={key++} style={{ position: 'relative', display: 'inline-block' }}>
            <span style={{ position: 'absolute', top: '-0.6em', left: 0, right: 0, textAlign: 'center', lineHeight: 1 }}>·</span>
            <span>{renderMathParts(content)}</span>
          </span>
        );
      }
    }
  }

  return parts.length > 0 ? parts : [<span key={0}>{text}</span>];
}

function MathText({ text }: { text: string }) {
  return <>{renderMathParts(text)}</>;
}

function resolveUrl(path: string) {
  if (path.startsWith('/')) {
    return import.meta.env.BASE_URL.replace(/\/$/, '') + path;
  }
  return path;
}

function MathPre({ text }: { text: string }) {
  return (
    <pre style={{ fontFamily: 'inherit', whiteSpace: 'pre-wrap', wordWrap: 'break-word', fontSize: 'inherit' }}>
      <MathText text={text} />
    </pre>
  );
}

// ─── Exam Test Component ───────────────────────────────────────────────────────
interface ExamTestProps {
  examId: string;
}

export default function ExamTest({ examId }: ExamTestProps) {
  const [, setLocation] = useLocation();
  const [questions, setQuestions] = useState<Question[]>([]);
  const [examTitle, setExamTitle] = useState('');
  const [examSubtitle, setExamSubtitle] = useState('');
  const [totalScore, setTotalScore] = useState(0);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // Load exam data dynamically
  useEffect(() => {
    const loadExamData = async () => {
      try {
        setLoading(true);
        let data;
        let title, subtitle, score;

        if (examId === 'math-2024-01') {
          const mod = await import('@/lib/examData');
          data = mod.questions;
          title = mod.EXAM_TITLE;
          subtitle = mod.EXAM_SUBTITLE;
          score = mod.TOTAL_SCORE;
        } else if (examId === 'math-2024-02') {
          const mod = await import('@/lib/examData2');
          data = mod.questions;
          title = mod.EXAM_TITLE;
          subtitle = mod.EXAM_SUBTITLE;
          score = mod.TOTAL_SCORE;
        } else if (examId === 'math-2024-03') {
          const mod = await import('@/lib/examData3');
          data = mod.questions;
          title = mod.EXAM_TITLE;
          subtitle = mod.EXAM_SUBTITLE;
          score = mod.TOTAL_SCORE;
        } else if (examId === 'math-2024-04') {
          const mod = await import('@/lib/examData4');
          data = mod.questions;
          title = mod.EXAM_TITLE;
          subtitle = mod.EXAM_SUBTITLE;
          score = mod.TOTAL_SCORE;
        } else if (examId === 'math-2024-05') {
          const mod = await import('@/lib/examData5');
          data = mod.questions;
          title = mod.EXAM_TITLE;
          subtitle = mod.EXAM_SUBTITLE;
          score = mod.TOTAL_SCORE;
        } else if (examId === 'math-2024-06') {
          const mod = await import('@/lib/examData6');
          data = mod.questions;
          title = mod.EXAM_TITLE;
          subtitle = mod.EXAM_SUBTITLE;
          score = mod.TOTAL_SCORE;
        } else if (examId === 'math-2024-07') {
          const mod = await import('@/lib/examData7');
          data = mod.questions;
          title = mod.EXAM_TITLE;
          subtitle = mod.EXAM_SUBTITLE;
          score = mod.TOTAL_SCORE;
        } else if (examId === 'math-2024-08') {
          const mod = await import('@/lib/examData8');
          data = mod.questions;
          title = mod.EXAM_TITLE;
          subtitle = mod.EXAM_SUBTITLE;
          score = mod.TOTAL_SCORE;
        } else {
          throw new Error('Unknown exam ID');
        }

        setQuestions(data);
        setExamTitle(title);
        setExamSubtitle(subtitle);
        setTotalScore(score);
        setError(null);
      } catch (err) {
        setError('문제지를 불러올 수 없습니다.');
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    loadExamData();
  }, [examId]);

  const [answers, setAnswers] = useState<Record<number, string | undefined>>({});
  const [graded, setGraded] = useState(false);
  const [showExplanation, setShowExplanation] = useState<Record<number, boolean>>({});
  const [showResultModal, setShowResultModal] = useState(false);
  const [gradeResult, setGradeResult] = useState<GradeResult | null>(null);
  const [currentQ, setCurrentQ] = useState(1);
  const [showScrollTop, setShowScrollTop] = useState(false);
  const questionRefs = useRef<Record<number, HTMLDivElement | null>>({});

  const answeredCount = Object.values(answers).filter((a) => a !== undefined).length;

  const handleAnswer = (qId: number, answer: string) => {
    if (!graded) {
      setAnswers((prev) => ({ ...prev, [qId]: answer }));
    }
  };

  const handleGrade = () => {
    const correct = questions
      .filter((q) => q.type === 'multiple' && q.answer === answers[q.id])
      .length;
    const wrong = questions.filter((q) => q.type === 'multiple' && q.answer && answers[q.id] && q.answer !== answers[q.id]).length;
    const unanswered = questions.filter((q) => q.type === 'multiple' && !answers[q.id]).length;
    const score = correct * 5;

    setGradeResult({
      score,
      total: totalScore,
      correct,
      wrong,
      unanswered,
    });
    setGraded(true);
    setShowResultModal(true);
  };

  const handleReset = () => {
    setAnswers({});
    setGraded(false);
    setShowExplanation({});
    setShowResultModal(false);
    setGradeResult(null);
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
    const getTypeLabel = (type: QuestionType): string => {
      const labels: Record<QuestionType, string> = {
        multiple: '객관식',
        short: '서답형',
        essay: '서술형',
      };
      return labels[type];
    };

    const renderMathToHTML = (text: string): string => {
      // Bracket-aware parser for print HTML
      const segs = parseSegments(text);
      let html = '';
      for (const seg of segs) {
        if (seg.type === 'text') {
          html += seg.value.replace(/\n/g, '<br/>');
        } else {
          const { tagName, content } = seg;
          if (tagName === 'frac') {
            let slashIdx = -1;
            let depth = 0;
            for (let j = 0; j < content.length; j++) {
              if (content[j] === '[') depth++;
              else if (content[j] === ']') depth--;
              else if (content[j] === '/' && depth === 0) { slashIdx = j; break; }
            }
            if (slashIdx === -1) {
              html += renderMathToHTML(content);
            } else {
              const num = content.substring(0, slashIdx);
              const den = content.substring(slashIdx + 1);
              html += `<span class="print-frac"><span class="num">${renderMathToHTML(num)}</span><span class="den">${renderMathToHTML(den)}</span></span>`;
            }
          } else if (tagName === 'sup') {
            html += `<sup>${renderMathToHTML(content)}</sup>`;
          } else if (tagName === 'sub') {
            html += `<sub>${renderMathToHTML(content)}</sub>`;
          } else if (tagName === 'dot') {
            html += `<span style="position: relative; display: inline-block;"><span style="position: absolute; top: -0.6em; left: 0; right: 0; text-align: center; line-height: 1;">·</span><span>${renderMathToHTML(content)}</span></span>`;
          }
        }
      }
      return html;
    };

    const questionHTML = questions.map((q) => {
      let optionsHTML = '';
      if (q.type === 'multiple' && q.options) {
        optionsHTML = q.options.map((opt) => 
          `<div style="margin: 8px 0; padding: 8px 12px; border: 1px solid #ddd; border-radius: 4px; font-size: 13px;">
            <strong>${opt.label}</strong> ${renderMathToHTML(opt.text)}
          </div>`
        ).join('');
      } else if (q.type === 'short') {
        optionsHTML = `<div style="margin: 12px 0; padding: 8px; border-bottom: 2px solid #333; min-height: 24px;"></div>`;
      } else if (q.type === 'essay' && q.subQuestions) {
        optionsHTML = q.subQuestions.map((sub) => 
          `<div style="margin: 12px 0;">
            <p style="font-weight: bold; margin: 8px 0; font-size: 13px;">${sub.label} ${renderMathToHTML(sub.text)}</p>
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
          <p style="margin: 10px 0; font-size: 13px; line-height: 1.5; font-weight: 500;">${renderMathToHTML(q.text)}</p>
          ${q.imageUrl ? `<div style="margin: 10px 0; text-align: center;"><img src="${resolveUrl(q.imageUrl)}" style="max-width: 100%; max-height: 250px; border: 1px solid #ddd; border-radius: 4px;" alt="첨부 이미지" /></div>` : ''}
          <div style="margin-top: 10px;">${optionsHTML}</div>
        </div>
      `;
    }).join('');

    return `
      <!DOCTYPE html>
      <html lang="ko">
      <head>
        <meta charset="UTF-8">
        <title>${examTitle}</title>
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
          .print-frac {
            display: inline-flex;
            flex-direction: column;
            align-items: center;
            vertical-align: middle;
            margin: 0 2px;
            line-height: 1.1;
          }
          .print-frac .num {
            border-bottom: 1px solid #333;
            padding: 0 3px 1px;
            font-size: 0.85em;
          }
          .print-frac .den {
            padding: 1px 3px 0;
            font-size: 0.85em;
          }
        </style>
      </head>
      <body>
        <div class="header">
          <h1>${examTitle}</h1>
          <p>${examSubtitle} · 총 ${totalScore}점</p>
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

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 300);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const questionEl = questionRefs.current[currentQ];
    if (questionEl) {
      questionEl.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }, [currentQ]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center" style={{ background: 'oklch(0.97 0.003 80)' }}>
        <div className="text-center">
          <div className="w-12 h-12 rounded-full border-4 border-transparent animate-spin mx-auto mb-4"
            style={{ borderTopColor: 'oklch(0.28 0.08 255)', borderRightColor: 'oklch(0.28 0.08 255)' }}></div>
          <p style={{ color: 'oklch(0.55 0.02 250)' }}>문제지를 불러오는 중...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center" style={{ background: 'oklch(0.97 0.003 80)' }}>
        <div className="text-center">
          <p style={{ color: 'oklch(0.58 0.22 27)' }} className="mb-4">{error}</p>
          <button onClick={() => setLocation('/')}
            className="px-4 py-2 rounded-lg text-sm font-semibold"
            style={{ background: 'oklch(0.28 0.08 255)', color: 'white' }}>
            돌아가기
          </button>
        </div>
      </div>
    );
  }

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
              <BookOpen size={16} style={{ color: 'oklch(0.18 0.02 250)' }} />
            </div>
            <div className="min-w-0">
              <h2 className="text-sm font-bold truncate"
                style={{ color: 'oklch(0.95 0.005 80)', fontFamily: "'Noto Serif KR', serif" }}>
                {examTitle}
              </h2>
              <p className="text-xs truncate" style={{ color: 'oklch(0.55 0.02 250)' }}>
                총 {totalScore}점
              </p>
            </div>
          </div>
        </div>

        {/* Questions Grid */}
        <div className="flex-1 overflow-y-auto px-4 py-5">
          <div className="text-xs font-bold mb-3" style={{ color: 'oklch(0.65 0.02 250)' }}>
            문제 목록
          </div>
          <div className="grid grid-cols-5 gap-2">
            {questions.map((q) => {
              const isAnswered = answers[q.id] !== undefined;
              const isCorrect = graded && q.type === 'multiple' && q.answer === answers[q.id];
              const isWrong = graded && q.type === 'multiple' && q.answer && answers[q.id] && q.answer !== answers[q.id];
              return (
                <button
                  key={q.id}
                  onClick={() => setCurrentQ(q.id)}
                  className="w-full aspect-square rounded-lg text-xs font-bold transition-all duration-150 active:scale-95"
                  style={{
                    background: isCorrect ? 'oklch(0.55 0.18 150)' : isWrong ? 'oklch(0.58 0.22 27)' : isAnswered ? 'oklch(0.28 0.08 255)' : 'oklch(0.28 0.08 255 / 0.2)',
                    color: isCorrect || isWrong || isAnswered ? 'white' : 'oklch(0.55 0.02 250)',
                    border: currentQ === q.id ? '2px solid oklch(0.75 0.15 75)' : 'none',
                  }}>
                  {q.id}
                </button>
              );
            })}
          </div>

          {/* Legend */}
          <div className="mt-5 space-y-2 text-xs" style={{ color: 'oklch(0.55 0.02 250)' }}>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded" style={{ background: 'oklch(0.28 0.08 255 / 0.2)' }}></div>
              <span>미답</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded" style={{ background: 'oklch(0.28 0.08 255)' }}></div>
              <span>작성됨</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded" style={{ background: 'oklch(0.55 0.18 150)' }}></div>
              <span>정답</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded" style={{ background: 'oklch(0.58 0.22 27)' }}></div>
              <span>오답</span>
            </div>
          </div>
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
        <header className="sticky top-0 z-20 px-4 sm:px-5 py-2.5 sm:py-3.5"
          style={{ background: 'oklch(0.20 0.06 255)', borderBottom: '1px solid oklch(0.28 0.06 255)' }}>
          <div className="max-w-3xl mx-auto flex items-center justify-between gap-2 sm:gap-3">
            <div className="flex items-center gap-2 sm:gap-3 min-w-0">
              <button onClick={() => setLocation('/')}
                className="p-1.5 rounded-lg transition-all duration-150 active:scale-95 lg:hidden"
                style={{ background: 'oklch(0.28 0.08 255 / 0.2)', color: 'oklch(0.95 0.005 80)' }}>
                <ArrowLeft size={16} />
              </button>
              <div className="min-w-0">
                <h1 className="text-sm sm:text-base font-bold leading-tight truncate"
                  style={{ color: 'oklch(0.95 0.005 80)', fontFamily: "'Noto Serif KR', serif" }}>
                  {examTitle}
                </h1>
                <p className="text-xs truncate" style={{ color: 'oklch(0.55 0.02 250)' }}>
                  {examSubtitle} · 총 {totalScore}점
                </p>
              </div>
            </div>
            <div className="flex items-center gap-2 sm:gap-3 flex-shrink-0">
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
                    className="px-2.5 py-1.5 rounded-lg text-xs font-bold"
                    style={{ background: 'oklch(0.75 0.15 75)', color: 'oklch(0.18 0.02 250)' }}>
                    채점
                  </button>
                ) : (
                  <button onClick={handleReset}
                    className="px-2.5 py-1.5 rounded-lg text-xs font-semibold flex items-center gap-1"
                    style={{ background: 'oklch(0.30 0.07 255)', color: 'oklch(0.85 0.01 250)' }}>
                    <RotateCcw size={11} />
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
              gradeDetail={answers[q.id] !== undefined}
              showExplanation={showExplanation[q.id] || false}
              onAnswer={handleAnswer}
              onToggleExplanation={toggleExplanation}
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

        {/* Scroll to top */}
        <AnimatePresence>
          {showScrollTop && (
            <motion.button
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="fixed bottom-6 right-6 z-40 w-10 h-10 rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-shadow cursor-pointer"
              style={{ background: 'oklch(0.28 0.08 255)', color: 'white' }}>
              <ChevronUp size={18} />
            </motion.button>
          )}
        </AnimatePresence>
      </main>

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
  onAnswer: (qId: number, answer: string) => void;
  onToggleExplanation: (qId: number) => void;
}

const QuestionCard = forwardRef<HTMLDivElement, QuestionCardProps>(
  ({ question: q, index, answer, graded, gradeDetail, showExplanation, onAnswer, onToggleExplanation }, ref) => {
    const isCorrect = graded && q.type === 'multiple' && q.answer === answer;
    const isWrong = graded && q.type === 'multiple' && q.answer && answer && q.answer !== answer;

    function getTypeLabel(type: string): string {
      const labels: Record<string, string> = {
        multiple: '객관식',
        short: '서답형',
        essay: '서술형',
      };
      return labels[type] || type;
    }

    function getTypeIcon(type: string) {
      const icons: Record<string, React.ReactNode> = {
        multiple: <ClipboardList size={12} />,
        short: <FileText size={12} />,
        essay: <PenLine size={12} />,
      };
      return icons[type];
    }

    function getTypeBadgeClass(type: string): string {
      const classes: Record<string, string> = {
        multiple: 'inline-flex items-center gap-1 px-2 py-1 rounded-md text-xs font-semibold',
        short: 'inline-flex items-center gap-1 px-2 py-1 rounded-md text-xs font-semibold',
        essay: 'inline-flex items-center gap-1 px-2 py-1 rounded-md text-xs font-semibold',
      };
      return classes[type] || '';
    }

    return (
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: index * 0.05, duration: 0.2 }}
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
            <span className={getTypeBadgeClass(q.type)}
              style={{ background: 'oklch(0.97 0.003 80)', color: 'oklch(0.55 0.02 250)' }}>
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

          {q.imageUrl && (
            <div className="mb-5 flex justify-center">
              <img src={resolveUrl(q.imageUrl)} alt="문제 첨부 이미지" className="max-w-full h-auto rounded-lg shadow-sm border" style={{ maxHeight: '250px', borderColor: 'oklch(0.93 0.004 250)' }} />
            </div>
          )}

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
                  <div key={opt.id} className={cls} onClick={() => onAnswer(q.id, opt.label)}>
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
            <input
              type="text"
              placeholder="답을 입력하세요"
              value={answer || ''}
              onChange={(e) => onAnswer(q.id, e.target.value)}
              disabled={graded}
              className="w-full px-3 py-2 border rounded-lg text-sm"
              style={{
                borderColor: isWrong ? 'oklch(0.58 0.22 27)' : isCorrect ? 'oklch(0.55 0.18 150)' : 'oklch(0.88 0.005 250)',
                background: graded ? 'oklch(0.97 0.003 80)' : 'white',
              }}
            />
          )}

          {/* Essay */}
          {q.type === 'essay' && q.subQuestions && (
            <div className="space-y-3">
              {q.subQuestions.map((sub) => (
                <div key={sub.id}>
                  <p className="text-xs font-bold mb-2" style={{ color: 'oklch(0.28 0.08 255)' }}>
                    {sub.label} {sub.text}
                  </p>
                  <textarea
                    placeholder="답을 작성하세요"
                    value={answer || ''}
                    onChange={(e) => onAnswer(q.id, e.target.value)}
                    disabled={graded}
                    className="w-full px-3 py-2 border rounded-lg text-sm"
                    rows={4}
                    style={{
                      borderColor: 'oklch(0.88 0.005 250)',
                      background: graded ? 'oklch(0.97 0.003 80)' : 'white',
                    }}
                  />
                </div>
              ))}
            </div>
          )}

          {/* Explanation Toggle */}
          {graded && (q.explanation || (q.type === 'essay' && q.subQuestions)) && (
            <button
              onClick={() => onToggleExplanation(q.id)}
              className="mt-4 flex items-center gap-2 text-xs font-semibold transition-all duration-150"
              style={{ color: 'oklch(0.28 0.08 255)' }}>
              {showExplanation ? <EyeOff size={14} /> : <Eye size={14} />}
              {showExplanation ? '풀이 숨기기' : '풀이 보기'}
            </button>
          )}

          {/* Explanation */}
          {graded && showExplanation && (
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
          )}
        </div>
      </motion.div>
    );
  }
);
QuestionCard.displayName = 'QuestionCard';

// ─── Result Modal ──────────────────────────────────────────────────────────────
interface GradeResult {
  score: number;
  total: number;
  correct: number;
  wrong: number;
  unanswered: number;
}

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
        <div className="px-6 py-8 text-center">
          <motion.div
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.3, type: 'spring', stiffness: 300 }}>
            <div className="text-5xl font-bold mb-2" style={{ color: gradeColor, fontFamily: "'Noto Serif KR', serif" }}>
              {grade}
            </div>
            <div className="text-2xl font-bold mb-1" style={{ color: 'oklch(0.22 0.02 250)' }}>
              {result.score} / {result.total}점
            </div>
            <div className="text-sm" style={{ color: 'oklch(0.55 0.02 250)' }}>
              {percentage}%
            </div>
          </motion.div>
        </div>

        {/* Stats */}
        <div className="px-6 py-4 grid grid-cols-3 gap-3"
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
