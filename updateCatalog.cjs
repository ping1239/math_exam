const fs = require('fs');
let content = fs.readFileSync('client/src/lib/examCatalog.ts', 'utf8');
const newExam = `  {
    id: 'math-2024-10',
    title: '중학교 2-1 기말 주요 도형 개념 테스트',
    subtitle: '빈칸 채우기 및 단답형 평가',
    totalScore: 102,
    description: '범위: 직각삼각형, 외심, 내심, 평행사변형, 여러 가지 사각형',
    difficulty: 'easy',
    questionCount: 6,
  },
`;
content = content.replace('];', newExam + '];');
fs.writeFileSync('client/src/lib/examCatalog.ts', content);
