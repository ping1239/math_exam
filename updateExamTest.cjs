const fs = require('fs');
let content = fs.readFileSync('client/src/pages/ExamTest.tsx', 'utf8');

const importLogic = `        } else if (examId === 'math-2024-09') {
          const mod = await import('@/lib/examData9');
          data = mod.questions;
          title = mod.EXAM_TITLE;
          subtitle = mod.EXAM_SUBTITLE;
          score = mod.TOTAL_SCORE;
        } else if (examId === 'math-2024-10') {
          const mod = await import('@/lib/examData10');
          data = mod.questions;
          title = mod.EXAM_TITLE;
          subtitle = mod.EXAM_SUBTITLE;
          score = mod.TOTAL_SCORE;
`;

content = content.replace(`        } else if (examId === 'math-2024-09') {
          const mod = await import('@/lib/examData9');
          data = mod.questions;
          title = mod.EXAM_TITLE;
          subtitle = mod.EXAM_SUBTITLE;
          score = mod.TOTAL_SCORE;
`, importLogic);

fs.writeFileSync('client/src/pages/ExamTest.tsx', content);
