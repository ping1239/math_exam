const fs = require('fs');
const files = fs.readdirSync('client/src/lib').filter(f => f.endsWith('.ts'));
for (const file of files) {
  const content = fs.readFileSync('client/src/lib/' + file, 'utf8');
  if (content.includes('풀이')) {
     console.log(file + ' contains "풀이"');
  }
}
