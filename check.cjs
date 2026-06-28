const fs = require('fs');
const files = ['examData6.ts', 'examData7.ts', 'examData8.ts', 'examData9.ts'];
for (const file of files) {
  const content = fs.readFileSync('client/src/lib/' + file, 'utf8');
  const questions = content.split('  {\n    id: ');
  for (let i = 1; i < questions.length; i++) {
    const q = questions[i];
    const idMatch = q.match(/^(\d+)/);
    const id = idMatch ? idMatch[1] : 'unknown';
    if (!q.includes('explanation:')) {
      console.log(file + ' Q' + id + ' missing explanation field');
    } else {
      const expMatch = q.match(/explanation:\s*([\s\S]*?)(?:\n\s*\}|,\n\s*(?:imageUrl|subQuestions))/);
      if (expMatch) {
        const exp = expMatch[1].trim();
        if (exp === '``' || exp === "''" || exp === '""' || exp === 'undefined' || exp === 'null') {
          console.log(file + ' Q' + id + ' has empty explanation');
        }
      } else {
        // console.log("Could not parse explanation for", file, id);
      }
    }
  }
}
console.log('Check complete.');
