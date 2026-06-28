const fs = require('fs');

const files = ['examData6.ts', 'examData7.ts', 'examData8.ts', 'examData9.ts'];

for (const file of files) {
  let content = fs.readFileSync('client/src/lib/' + file, 'utf8');
  const questions = content.split('  {\n    id: ');
  let newContent = questions[0];

  for (let i = 1; i < questions.length; i++) {
    let q = '  {\n    id: ' + questions[i];
    
    if (q.includes("type: 'essay'")) {
        const subqStart = q.indexOf('subQuestions: [');
        if (subqStart !== -1) {
            const subqEnd = q.indexOf('    ],', subqStart);
            const subQsStr = q.substring(subqStart, subqEnd);
            const items = subQsStr.split('{ id:');
            
            // Check if exactly 1 subquestion
            if (items.length - 1 === 1) {
                if (!items[1].includes('answer:')) {
                    // Extract parent answer
                    const ansMatch = q.match(/answer:\s*`([\s\S]*?)`/);
                    if (ansMatch) {
                        const parentAns = ansMatch[1];
                        
                        // Insert answer into subquestion
                        // items[1] looks like " '12-1', text: '...', score: 6 }"
                        // We will insert answer before the closing bracket
                        let subqContent = items[1];
                        const closingBrace = subqContent.lastIndexOf('}');
                        if (closingBrace !== -1) {
                            subqContent = subqContent.substring(0, closingBrace) + `, answer: \`${parentAns}\` ` + subqContent.substring(closingBrace);
                            
                            const newSubQsStr = items[0] + '{ id:' + subqContent;
                            q = q.replace(subQsStr, newSubQsStr);
                            console.log(`Fixed ${file} Q${q.match(/^  \{\n    id: (\d+)/)[1]}`);
                        }
                    }
                }
            }
        }
    }
    
    newContent += q;
    // Note: Since we use split('  {\n    id: '), the first element already ends right before it.
    // wait, split removes the delimiter. So we need to reconstruct it properly.
    // Actually, I manually prepended '  {\n    id: ' to q, so I should just concatenate it.
  }
  
  fs.writeFileSync('client/src/lib/' + file, newContent, 'utf8');
}
console.log('Done fixing missing subQ answers.');
