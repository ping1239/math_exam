// Design: Modern EduTech — Deep Navy + Amber Gold
// 문제지 선택 화면

import { motion } from 'framer-motion';
import { EXAM_CATALOG } from '@/lib/examCatalog';
import { useLocation } from 'wouter';
import { BookOpen, Clock, Award, ChevronRight } from 'lucide-react';

export default function ExamSelector() {
  const [, setLocation] = useLocation();

  const handleSelectExam = (examId: string) => {
    setLocation(`/exam/${examId}`);
  };

  const getDifficultyLabel = (difficulty: string) => {
    const labels: Record<string, string> = {
      easy: '기초',
      medium: '표준',
      hard: '심화',
    };
    return labels[difficulty] || difficulty;
  };

  const getDifficultyColor = (difficulty: string) => {
    const colors: Record<string, string> = {
      easy: 'oklch(0.55 0.18 150)',
      medium: 'oklch(0.75 0.15 75)',
      hard: 'oklch(0.58 0.22 27)',
    };
    return colors[difficulty] || 'oklch(0.28 0.08 255)';
  };

  return (
    <div className="min-h-screen" style={{ background: 'oklch(0.97 0.003 80)' }}>
      {/* Header */}
      <header className="sticky top-0 z-20 px-4 sm:px-6 py-4 sm:py-6"
        style={{ background: 'oklch(0.20 0.06 255)', borderBottom: '1px solid oklch(0.28 0.06 255)' }}>
        <div className="max-w-5xl mx-auto">
          <div className="flex items-center gap-3 mb-2">
            <div className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0"
              style={{ background: 'oklch(0.75 0.15 75)' }}>
              <BookOpen size={16} style={{ color: 'oklch(0.18 0.02 250)' }} />
            </div>
            <h1 className="text-lg sm:text-2xl font-bold"
              style={{ color: 'oklch(0.95 0.005 80)', fontFamily: "'Noto Serif KR', serif" }}>
              수학 시험 문제지
            </h1>
          </div>
          <p className="text-xs sm:text-sm" style={{ color: 'oklch(0.55 0.02 250)' }}>
            풀고 싶은 문제지를 선택하세요
          </p>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-5xl mx-auto px-4 sm:px-6 py-8 sm:py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {EXAM_CATALOG.map((exam, idx) => (
            <motion.div
              key={exam.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1, duration: 0.3 }}
              onClick={() => handleSelectExam(exam.id)}
              className="group cursor-pointer"
            >
              <div
                className="h-full rounded-xl p-5 sm:p-6 transition-all duration-200 hover:shadow-lg active:scale-95"
                style={{ background: 'white', border: '1px solid oklch(0.92 0.004 250)' }}
              >
                {/* Header */}
                <div className="mb-4">
                  <div className="flex items-start justify-between mb-2">
                    <div className="flex-1">
                      <h3 className="text-base sm:text-lg font-bold leading-tight mb-1"
                        style={{ color: 'oklch(0.20 0.06 255)', fontFamily: "'Noto Serif KR', serif" }}>
                        {exam.title}
                      </h3>
                      <p className="text-xs sm:text-sm" style={{ color: 'oklch(0.55 0.02 250)' }}>
                        {exam.subtitle}
                      </p>
                    </div>
                    <div className="ml-2 px-2.5 py-1 rounded-lg text-xs font-semibold flex-shrink-0"
                      style={{ background: getDifficultyColor(exam.difficulty) + '20', color: getDifficultyColor(exam.difficulty) }}>
                      {getDifficultyLabel(exam.difficulty)}
                    </div>
                  </div>
                </div>

                {/* Description */}
                <p className="text-xs sm:text-sm leading-relaxed mb-4"
                  style={{ color: 'oklch(0.45 0.02 250)' }}>
                  {exam.description}
                </p>

                {/* Stats */}
                <div className="grid grid-cols-3 gap-2 mb-4 py-3 px-3 rounded-lg"
                  style={{ background: 'oklch(0.97 0.003 80)' }}>
                  <div className="text-center">
                    <div className="text-xs font-bold" style={{ color: 'oklch(0.28 0.08 255)' }}>
                      {exam.questionCount}
                    </div>
                    <div className="text-xs" style={{ color: 'oklch(0.6 0.02 250)' }}>
                      문제
                    </div>
                  </div>
                  <div className="text-center">
                    <div className="text-xs font-bold" style={{ color: 'oklch(0.75 0.15 75)' }}>
                      {exam.totalScore}
                    </div>
                    <div className="text-xs" style={{ color: 'oklch(0.6 0.02 250)' }}>
                      점
                    </div>
                  </div>
                  <div className="text-center">
                    <div className="flex items-center justify-center gap-1">
                      <Clock size={12} style={{ color: 'oklch(0.55 0.02 250)' }} />
                      <span className="text-xs" style={{ color: 'oklch(0.55 0.02 250)' }}>
                        약 {Math.ceil(exam.questionCount * 2.5)}분
                      </span>
                    </div>
                  </div>
                </div>

                {/* Footer */}
                <div className="flex items-center justify-between pt-3"
                  style={{ borderTop: '1px solid oklch(0.92 0.004 250)' }}>

                  <div className="flex items-center gap-1 text-sm font-semibold transition-all duration-200 group-hover:translate-x-1"
                    style={{ color: 'oklch(0.28 0.08 255)' }}>
                    시작
                    <ChevronRight size={16} />
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </main>

      {/* Footer */}
      <footer className="mt-16 py-8 text-center"
        style={{ borderTop: '1px solid oklch(0.92 0.004 250)' }}>
        <p className="text-xs" style={{ color: 'oklch(0.6 0.02 250)' }}>
          © 2026 중학교 수학 시험 플랫폼
        </p>
      </footer>
    </div>
  );
}
