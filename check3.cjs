const fs = require('fs');
const files = ['examData6.ts', 'examData7.ts', 'examData8.ts', 'examData9.ts'];
for (const file of files) {
  const content = fs.readFileSync('client/src/lib/' + file, 'utf8');
  const questions = content.split('  {\n    id: ');
  for (let i = 1; i < questions.length; i++) {
    const q = questions[i];
    const idMatch = q.match(/^(\d+)/);
    const id = idMatch ? idMatch[1] : 'unknown';
    
    // Find explanation block
    const expIndex = q.indexOf('explanation:');
    if (expIndex !== -1) {
        let expStart = expIndex + 'explanation:'.length;
        let expText = q.substring(expStart).trim();
        // Extract content between backticks or quotes
        if (expText.startsWith('`')) {
            const end = expText.indexOf('`', 1);
            if (end !== -1) expText = expText.substring(1, end);
        } else if (expText.startsWith("'")) {
            const end = expText.indexOf("'", 1);
            if (end !== -1) expText = expText.substring(1, end);
        } else if (expText.startsWith('"')) {
            const end = expText.indexOf('"', 1);
            if (end !== -1) expText = expText.substring(1, end);
        }
        
        if (expText.trim().length < 50) {
            console.log(`${file} Q${id} short explanation: ${expText.trim()}`);
        }
    }
  }
}
console.log('Done checking short explanations.');
