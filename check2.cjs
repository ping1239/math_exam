const fs = require('fs');
const files = ['examData6.ts', 'examData7.ts', 'examData8.ts', 'examData9.ts'];
for (const file of files) {
  const content = fs.readFileSync('client/src/lib/' + file, 'utf8');
  const questions = content.split('  {\n    id: ');
  for (let i = 1; i < questions.length; i++) {
    const q = questions[i];
    const idMatch = q.match(/^(\d+)/);
    const id = idMatch ? idMatch[1] : 'unknown';
    
    // check if main explanation is just a short text (e.g. less than 5 chars but it's not a formula)
    const expMatch = q.match(/explanation:\s*`([^`]+)`/);
    if (expMatch) {
        if (expMatch[1].trim().length < 5 && !expMatch[1].includes('=')) {
            console.log(file + ' Q' + id + ' main explanation is suspiciously short: ' + expMatch[1]);
        }
    }

    if (q.includes("type: 'essay'") || q.includes("type: 'short'")) {
        // Find subQuestions block
        const subqStart = q.indexOf('subQuestions: [');
        if (subqStart !== -1) {
            const subqEnd = q.indexOf('    ],', subqStart);
            const subQs = q.substring(subqStart, subqEnd);
            const items = subQs.split('{ id:');
            for (let j = 1; j < items.length; j++) {
                if (!items[j].includes('explanation:')) {
                    console.log(file + ' Q' + id + ' subQ missing explanation in: ' + items[j].substring(0, 50));
                }
            }
        }
    }
  }
}
console.log('Check2 complete.');
