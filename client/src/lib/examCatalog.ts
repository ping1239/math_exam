// Design: Modern EduTech — Deep Navy + Amber Gold
// 여러 문제지를 관리하는 카탈로그

export interface ExamMetadata {
  id: string;
  title: string;
  subtitle: string;
  totalScore: number;
  description: string;
  difficulty: 'easy' | 'medium' | 'hard';
  questionCount: number;
}

export const EXAM_CATALOG: ExamMetadata[] = [
  {
    id: 'math-2024-01',
    title: '중학교 2-1 기말시험',
    subtitle: '매홀중학교 변형 문제 모의평가',
    totalScore: 100,
    description: '범위: 수와 식, 일차부등식과 연립일차방정식, 일차함수',
    difficulty: 'medium',
    questionCount: 20,
  },
  {
    id: 'math-2024-02',
    title: '중학교 2-1 기말시험 (2회)',
    subtitle: '매홀중학교 변형 문제 모의평가',
    totalScore: 80,
    description: '범위: 수와 식, 일차부등식과 연립일차방정식, 일차함수',
    difficulty: 'easy',
    questionCount: 16,
  },
  {
    id: 'math-2024-03',
    title: '중학교 2-1 기말시험 (3회)',
    subtitle: '매홀중학교 변형 문제 모의평가',
    totalScore: 120,
    description: '범위: 수와 식, 일차부등식과 연립일차방정식, 일차함수',
    difficulty: 'hard',
    questionCount: 24,
  },
  {
    id: 'math-2024-04',
    title: '중학교 2-1 기말시험 (4회)',
    subtitle: '매홀중학교 변형 문제 모의평가',
    totalScore: 97,
    description: '범위: 수와 식, 일차부등식과 연립일차방정식, 일차함수',
    difficulty: 'medium',
    questionCount: 20,
  },
  {
    id: 'math-2024-05',
    title: '중학교 2-1 기말시험 (5회)',
    subtitle: '매홀중학교 변형 문제 모의평가',
    totalScore: 102,
    description: '범위: 수와 식, 일차부등식과 연립일차방정식, 일차함수',
    difficulty: 'medium',
    questionCount: 20,
  },
  {
    id: 'math-2024-06',
    title: '교과서 문제',
    subtitle: '중학교 2학년 수학 교과서 변형 문제',
    totalScore: 268,
    description: '범위: 수와 식, 일차부등식과 연립일차방정식, 일차함수',
    difficulty: 'medium',
    questionCount: 55,
  },
  {
    id: 'math-2024-07',
    title: '교과서 변형문제',
    subtitle: '중학교 2학년 수학 교과서 변형 고난도 문제',
    totalScore: 104,
    description: '범위: 수와 식, 일차부등식과 연립일차방정식, 일차함수',
    difficulty: 'hard',
    questionCount: 20,
  },
  {
    id: 'math-2024-08',
    title: '교과서 변형문제(2회)',
    subtitle: '중학교 2학년 수학 교과서 변형 고난도 문제 2회',
    totalScore: 106,
    description: '범위: 수와 식, 일차부등식과 연립일차방정식, 일차함수',
    difficulty: 'hard',
    questionCount: 20,
  },
  {
    id: 'math-2024-09',
    title: '교과서 변형문제(3회)',
    subtitle: '중학교 2학년 수학 교과서 변형 고난도 문제 3회',
    totalScore: 100,
    description: '범위: 수와 식, 일차부등식과 연립일차방정식, 일차함수',
    difficulty: 'hard',
    questionCount: 20,
  },
];

export const getExamById = (id: string): ExamMetadata | undefined => {
  return EXAM_CATALOG.find((exam) => exam.id === id);
};
