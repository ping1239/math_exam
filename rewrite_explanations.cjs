const fs = require('fs');
let content = fs.readFileSync('client/src/lib/examData6.ts', 'utf8');

const replacements = {
  40: "다빈이가 1년 동안 영화를 x편 본다고 가정합시다.\\n1) '청소년 할인'을 받을 경우:\\n한 편당 1000원 할인이므로 15000 - 1000 = 14000원입니다.\\n따라서 총 비용은 14000x 원입니다.\\n\\n2) '특별 회원 할인'을 받을 경우:\\n가입비 4000원에 한 편당 15% 할인이므로 15000 × (1 - 0.15) = 15000 × 0.85 = 12750원입니다.\\n따라서 총 비용은 4000 + 12750x 원입니다.\\n\\n특별 회원 할인을 받는 것이 더 유리하려면 특별 회원 할인의 총 비용이 더 적어야 합니다.\\n14000x > 4000 + 12750x\\n1250x > 4000\\nx > 3.2\\n따라서 다빈이는 영화를 4편 이상 볼 때 특별 회원 할인을 받는 것이 더 유리합니다.",
  41: "숙박비 지원 대상자를 x명, 체험비 지원 대상자를 y명이라고 합시다.\\n1) 지원 대상은 총 200명이므로:\\nx + y = 200\\n2) 총 예산은 1280만 원이므로:\\n7x + 5.5y = 1280\\n\\n위 두 일차방정식을 연립하여 풉니다.\\n첫 번째 식에서 y = 200 - x를 두 번째 식에 대입합니다.\\n7x + 5.5(200 - x) = 1280\\n7x + 1100 - 5.5x = 1280\\n1.5x = 180\\nx = 120\\n\\nx = 120을 x + y = 200에 대입하면:\\n120 + y = 200\\ny = 80\\n\\n따라서 숙박비 지원 대상자는 120명, 체험비 지원 대상자는 80명입니다.",
  26: "어떤 다항식을 A라고 합시다.\\n잘못 계산한 식: A + (a[sup:2] - 5ab + 4b[sup:2]) = 3a[sup:2] + 6ab - 2b[sup:2]\\n먼저 어떤 다항식 A를 구합니다.\\nA = (3a[sup:2] + 6ab - 2b[sup:2]) - (a[sup:2] - 5ab + 4b[sup:2])\\nA = 3a[sup:2] + 6ab - 2b[sup:2] - a[sup:2] + 5ab - 4b[sup:2]\\nA = 2a[sup:2] + 11ab - 6b[sup:2]\\n\\n이제 바르게 계산한 식을 구합니다.\\n바르게 계산한 식 = A - (a[sup:2] - 5ab + 4b[sup:2])\\n= (2a[sup:2] + 11ab - 6b[sup:2]) - (a[sup:2] - 5ab + 4b[sup:2])\\n= 2a[sup:2] + 11ab - 6b[sup:2] - a[sup:2] + 5ab - 4b[sup:2]\\n= a[sup:2] + 16ab - 10b[sup:2]\\n\\n따라서 바르게 계산한 식은 a[sup:2] + 16ab - 10b[sup:2] 입니다.",
  27: "1) 원기둥의 높이 구하기\\n원기둥의 부피 = π × (반지름)[sup:2] × 높이\\n12πab[sup:2] - 24πb[sup:3] = π × (2b)[sup:2] × (원기둥의 높이)\\n12πab[sup:2] - 24πb[sup:3] = 4πb[sup:2] × (원기둥의 높이)\\n(원기둥의 높이) = (12πab[sup:2] - 24πb[sup:3]) ÷ 4πb[sup:2]\\n= 3a - 6b\\n\\n2) 원뿔의 높이 구하기\\n원뿔의 부피 = [frac:1/3] × π × (반지름)[sup:2] × 높이\\n3πa[sup:3] + 18πa[sup:2]b = [frac:1/3] × π × (3a)[sup:2] × (원뿔의 높이)\\n3πa[sup:3] + 18πa[sup:2]b = [frac:1/3] × π × 9a[sup:2] × (원뿔의 높이)\\n3πa[sup:3] + 18πa[sup:2]b = 3πa[sup:2] × (원뿔의 높이)\\n(원뿔의 높이) = (3πa[sup:3] + 18πa[sup:2]b) ÷ 3πa[sup:2]\\n= a + 6b\\n\\n3) 두 높이의 합\\n(원기둥의 높이) + (원뿔의 높이) = (3a - 6b) + (a + 6b) = 4a\\n따라서 두 높이의 합은 4a입니다."
};

const questions = content.split('  {\n    id: ');
let newContent = questions[0];

for (let i = 1; i < questions.length; i++) {
  let q = '  {\n    id: ' + questions[i];
  const idMatch = q.match(/^  \{\n    id: (\d+)/);
  if (idMatch) {
    const id = parseInt(idMatch[1]);
    if (replacements[id]) {
      // Replace main explanation
      q = q.replace(/explanation:\s*`[\s\S]*?`/, 'explanation: `' + replacements[id] + '`');
      
      // Replace subQuestions explanation
      q = q.replace(/,\s*explanation:\s*`[\s\S]*?`\s*}/, ', explanation: `' + replacements[id] + '` }');
    }
  }
  newContent += q;
}

fs.writeFileSync('client/src/lib/examData6.ts', newContent, 'utf8');
console.log('Fixed examData6.ts short explanations.');
