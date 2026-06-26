const fs = require('fs');
let text = fs.readFileSync('교과서문제.txt', 'utf8');

// 1. Fractions: \nDENOMINATOR\nNUMERATOR\n\u200B
text = text.replace(/\n([^\n]+)\n([^\n]+)\n\u200B/g, (m, den, num) => {
  return ` [frac:${num.trim()}/${den.trim()}] `;
});

// 2. Dots for repeating decimals
text = text.replace(/([0-9])\s*\n˙/g, '[dot:$1]');

// 3. Superscripts (e.g., x \n2\n )
text = text.replace(/([a-zA-Z0-9)\]])\s*\n([a-zA-Z0-9+\-]+)\n/g, (m, base, sup) => {
  return `${base}[sup:${sup.trim()}]`;
});

// 4. Cleanup zero-width spaces
text = text.replace(/\u200B/g, '');

fs.writeFileSync('교과서문제_parsed.txt', text);
console.log("Parsed to 교과서문제_parsed.txt");
