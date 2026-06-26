const fs = require('fs');

let text = fs.readFileSync('교과서문제.txt', 'utf8');

// 1. Superscripts (handle \r\n and surrounding spaces)
text = text.replace(/([a-zA-Z0-9)\]])\s*\r?\n\s*([a-zA-Z0-9+\-□]+)\s*\r?\n/g, (m, base, sup) => {
  return `${base}[sup:${sup.trim()}]`;
});
// Run it twice for consecutive superscripts if any
text = text.replace(/([a-zA-Z0-9)\]])\s*\r?\n\s*([a-zA-Z0-9+\-□]+)\s*\r?\n/g, (m, base, sup) => {
  return `${base}[sup:${sup.trim()}]`;
});

// 2. Dots
text = text.replace(/([0-9])\s*\r?\n\s*˙\s*/g, '[dot:$1]');

// Remove standalone ˙ just in case
text = text.replace(/˙/g, '');

// 3. Remove extra empty lines to merge broken lines
text = text.replace(/\r?\n\s*\r?\n/g, '\n');

// 4. Fractions
text = text.replace(/\r?\n([^\n]+)\r?\n([^\n]+)\r?\n\u200B/g, (m, den, num) => {
  return ` [frac:${num.trim()}/${den.trim()}] `;
});

// 5. Cleanup zero-width spaces and newline before dot/sup
text = text.replace(/\u200B/g, '');
text = text.replace(/\n\[dot:/g, '[dot:');
text = text.replace(/\n\[sup:/g, '[sup:');

let lines = text.split('\n').map(l => l.trim()).filter(l => l.length > 0);

let questions = [];
let currentQuestion = null;
let mode = 'questions';

let answers = {};
let explanations = {};

for (let line of lines) {
  if (line.includes('[정답 및 상세 해설]')) {
    mode = 'answers';
    continue;
  }
  
  if (mode === 'questions') {
    const qMatch = line.match(/^(\d+)번 \(배점:\s*(\d+)점\)\s*-\s*([가-힣]+)\s+(.*)/);
    if (qMatch) {
      if (currentQuestion) questions.push(currentQuestion);
      currentQuestion = {
        id: parseInt(qMatch[1]),
        score: parseInt(qMatch[2]),
        type: qMatch[3] === '객관식' ? 'multiple' : (qMatch[3] === '서술형' ? 'essay' : 'short'),
        text: qMatch[4],
        options: []
      };
    } else if (currentQuestion) {
      currentQuestion.text += '\n' + line;
    }
  } else if (mode === 'answers') {
    const ansMatch = line.match(/^(\d+)번 정답:\s*(.*)/);
    if (ansMatch) {
      answers[ansMatch[1]] = ansMatch[2];
      explanations[ansMatch[1]] = '';
    } else {
      const expMatch = line.match(/^출제 단원 및 유형:\s*(.*)/);
      if (expMatch) {
        // skip topic
      } else {
        const detailMatch = line.match(/^상세 풀이 과정:\s*(.*)/);
        let qNum = Object.keys(answers).pop();
        if (detailMatch) {
          explanations[qNum] += detailMatch[1];
        } else if (qNum) {
          explanations[qNum] += '\n' + line;
        }
      }
    }
  }
}
if (currentQuestion) questions.push(currentQuestion);

// Process options from the full text block
for (let q of questions) {
  if (q.type === 'multiple') {
    // Look for ①... ②... etc anywhere in the text
    const optMatch = q.text.match(/①/);
    if (optMatch) {
      const splitIdx = q.text.indexOf('①');
      const mainText = q.text.substring(0, splitIdx).trim();
      const optionsText = q.text.substring(splitIdx);
      
      q.text = mainText;
      
      const optRegex = /(①|②|③|④|⑤)\s*(.*?)(?=(?:①|②|③|④|⑤|$))/gs;
      let opts = [...optionsText.matchAll(optRegex)];
      for (let o of opts) {
        q.options.push({
          id: `${q.id}-${q.options.length + 1}`,
          label: o[1],
          text: o[2].trim()
        });
      }
    }
  }
  
  if (answers[q.id]) q.answer = answers[q.id].trim();
  if (explanations[q.id]) q.explanation = explanations[q.id].trim();
}

let out = `import { Question, QuestionType } from './examData';\n\n`;
out += `export const EXAM_TITLE = '교과서 문제';\n`;
out += `export const EXAM_SUBTITLE = '중학교 2학년 수학 교과서 변형 문제';\n\n`;

out += `export const questions: Question[] = [\n`;
for (let q of questions) {
  out += `  {\n`;
  out += `    id: ${q.id},\n`;
  out += `    type: '${q.type}',\n`;
  out += `    score: ${q.score},\n`;
  out += `    topic: '교과서 문제',\n`;
  out += `    text: \`${q.text.replace(/`/g, '\\`')}\`,\n`;
  if (q.options && q.options.length > 0) {
    out += `    options: [\n`;
    for (let o of q.options) {
      out += `      { id: '${o.id}', label: '${o.label}', text: \`${o.text.replace(/`/g, '\\`')}\` },\n`;
    }
    out += `    ],\n`;
  }
  if (q.type === 'essay') {
    out += `    subQuestions: [\n`;
    out += `      { id: '${q.id}-1', text: '과정을 서술하시오.', score: ${q.score} }\n`;
    out += `    ],\n`;
  }
  out += `    answer: \`${q.answer ? q.answer.replace(/`/g, '\\`') : ''}\`,\n`;
  out += `    explanation: \`${q.explanation ? q.explanation.replace(/`/g, '\\`') : ''}\`\n`;
  out += `  },\n`;
}
out += `];\n\n`;
out += `export const TOTAL_SCORE = questions.reduce((sum, q) => sum + q.score, 0);\n`;
out += `export function getTotalScore(): number {\n  return TOTAL_SCORE;\n}\n`;
out += `export function getTypeLabel(type: QuestionType): string {\n  switch (type) {\n    case 'multiple': return '객관식';\n    case 'short': return '서답형';\n    case 'essay': return '서술형';\n  }\n}\n`;

fs.writeFileSync('client/src/lib/examData6.ts', out);
console.log('examData6.ts generated with improved parsing 2.');
