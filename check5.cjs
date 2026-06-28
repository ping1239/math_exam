const fs = require('fs');
const files = ['examData6.ts', 'examData7.ts', 'examData8.ts', 'examData9.ts'];
for (const file of files) {
  const content = fs.readFileSync('client/src/lib/' + file, 'utf8');
  const questions = content.split('  {\n    id: ');
  for (let i = 1; i < questions.length; i++) {
    const q = questions[i];
    const idMatch = q.match(/^(\d+)/);
    const id = idMatch ? idMatch[1] : 'unknown';
    
    if (q.includes("type: 'essay'")) {
        const subqStart = q.indexOf('subQuestions: [');
        if (subqStart !== -1) {
            const subqEnd = q.indexOf('    ],', subqStart);
            const subQs = q.substring(subqStart, subqEnd);
            const items = subQs.split('{ id:');
            if (items.length - 1 === 1) {
                // only 1 subquestion
                if (!items[1].includes('answer:')) {
                    console.log(file + ' Q' + id + ' has 1 subQ and is missing answer.');
                }
            } else {
                for (let j = 1; j < items.length; j++) {
                    if (!items[j].includes('answer:')) {
                        console.log(file + ' Q' + id + ' has MULTIPLE subQs and missing answer in subQ ' + j);
                    }
                }
            }
        }
    }
  }
}
