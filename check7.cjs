const fs = require('fs');
const files = ['examData6.ts', 'examData7.ts', 'examData8.ts', 'examData9.ts'];
for (const file of files) {
  const content = fs.readFileSync('client/src/lib/' + file, 'utf8');
  const questions = content.split('  {\n    id: ');
  for (let i = 1; i < questions.length; i++) {
    const q = questions[i];
    const idMatch = q.match(/^(\d+)/);
    const id = idMatch ? idMatch[1] : 'unknown';
    
    // Check main explanation
    const expMatch = q.match(/explanation:\s*`([\s\S]*?)`/);
    if (expMatch) {
        if (expMatch[1].trim() === '풀이' || expMatch[1].includes('풀이:')) {
            console.log(file + ' Q' + id + ' explanation contains "풀이": ' + expMatch[1].trim());
        }
    }
  }
}
