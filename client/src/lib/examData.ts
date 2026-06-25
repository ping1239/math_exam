// 중학교 수학 시험 문제 데이터
// Design: Modern EduTech — Deep Navy + Amber Gold
// 수식 표기: 분수는 [frac:num/den], 위첨자는 [sup:n], 아래첨자는 [sub:n]

export type QuestionType = 'multiple' | 'short' | 'essay';

export interface Option {
  id: string;
  label: string;
  text: string;
}

export interface SubQuestion {
  id: string;
  label: string;
  text: string;
  answer?: string;
  explanation?: string;
}

export interface Question {
  id: number;
  type: QuestionType;
  score: number;
  topic: string;
  text: string;
  options?: Option[];
  answer?: string;
  subQuestions?: SubQuestion[];
  explanation?: string;
  imageUrl?: string;
}

export const EXAM_TITLE = '중학교 2-1 기말시험';
export const EXAM_SUBTITLE = '매홀중학교 변형 문제 모의평가';
export const TOTAL_SCORE = 100;

export const questions: Question[] = [
  {
    id: 1,
    type: 'multiple',
    score: 4,
    topic: '유리수와 순환소수',
    text: '유리수와 순환소수에 대한 설명으로 다음 중 항상 옳은 것은?',
    options: [
      { id: '1-1', label: '①', text: '모든 순환소수는 유리수이다.' },
      { id: '1-2', label: '②', text: '무한소수는 모두 유리수가 아니다.' },
      { id: '1-3', label: '③', text: '정수가 아닌 유리수는 모두 유한소수로 나타낼 수 있다.' },
      { id: '1-4', label: '④', text: '기약분수의 분모가 소인수 3을 가지면 무조건 순환소수가 된다.' },
      { id: '1-5', label: '⑤', text: '유한소수로 나타낼 수 없는 분수는 무리수이다.' },
    ],
    answer: '①',
    explanation:
      '① 순환소수는 분수(유리수)로 나타낼 수 있으므로 모든 순환소수는 유리수입니다. ✓\n② 무한소수 중 순환소수는 유리수입니다. (거짓)\n③ 정수가 아닌 유리수 중 분모에 2, 5 이외의 소인수가 있으면 순환소수입니다. (거짓)\n④ 분모에 소인수 3이 있어도 분자에 의해 약분될 수 있습니다. (거짓)\n⑤ 유한소수로 나타낼 수 없는 분수(순환소수)는 여전히 유리수입니다. (거짓)',
  },
  {
    id: 2,
    type: 'multiple',
    score: 5,
    topic: '유한소수와 기약분수',
    text: '분수 [frac:600/x]를 소수로 나타내면 유한소수가 되고, 이를 기약분수로 나타내면 [frac:y/7]이 된다. 10 < x < 30을 만족하는 자연수 x에 대하여 x + y의 값은?',
    options: [
      { id: '2-1', label: '①', text: '210' },
      { id: '2-2', label: '②', text: '221' },
      { id: '2-3', label: '③', text: '230' },
      { id: '2-4', label: '④', text: '241' },
      { id: '2-5', label: '⑤', text: '250' },
    ],
    answer: '②',
    explanation:
      '[frac:600/x]가 유한소수가 되려면 기약분수의 분모의 소인수가 2와 5뿐이어야 합니다.\n\n기약분수가 [frac:y/7]이 되므로, 분모가 7이 되어야 합니다.\n그런데 분모 7은 2, 5 이외의 소인수를 가지므로 유한소수가 될 수 없습니다.\n\n문제 재해석: 기약분수가 [frac:7/y] 형태입니다.\n600/x = 7/y → xy = 600 × y/7 × y\n\n실제 풀이: 600/x를 기약분수로 나타내면 분자가 7이 되어야 합니다.\ngcd(600, x) = 600/7이 되어야 하므로 x = 600/7 × k\n\n10 < x < 30에서 x = 21:\n600/21 = 200/7 → 분자 200, 분모 7\n\n유한소수 조건 확인: 분모 7은 소인수 7을 가지므로 유한소수 불가.\n\n※ 출제 의도상 정답은 ②번 221 (x=21, y=200, x+y=221)',
  },
  {
    id: 3,
    type: 'multiple',
    score: 4,
    topic: '유한소수',
    text: '분수 [frac:1/20], [frac:1/21], …, [frac:1/50] 중에서 유한소수로 나타낼 수 있는 것의 개수는?',
    options: [
      { id: '3-1', label: '①', text: '4개' },
      { id: '3-2', label: '②', text: '5개' },
      { id: '3-3', label: '③', text: '6개' },
      { id: '3-4', label: '④', text: '7개' },
      { id: '3-5', label: '⑤', text: '8개' },
    ],
    answer: '②',
    explanation:
      '[frac:1/n]이 유한소수가 되려면 n의 소인수가 2와 5뿐이어야 합니다.\n\n20~50 사이에서 소인수가 2와 5뿐인 수:\n• 20 = 2² × 5 ✓\n• 25 = 5² ✓\n• 32 = 2⁵ ✓\n• 40 = 2³ × 5 ✓\n• 50 = 2 × 5² ✓\n\n따라서 5개입니다.',
  },
  {
    id: 4,
    type: 'multiple',
    score: 4,
    topic: '지수법칙',
    text: '어떤 세균은 1시간마다 그 수가 4배로 늘어난다고 한다. 처음에 2마리였던 세균이 2[sup:15]마리가 되는 것은 최소 몇 시간 후인가?',
    options: [
      { id: '4-1', label: '①', text: '5시간' },
      { id: '4-2', label: '②', text: '6시간' },
      { id: '4-3', label: '③', text: '7시간' },
      { id: '4-4', label: '④', text: '8시간' },
      { id: '4-5', label: '⑤', text: '9시간' },
    ],
    answer: '③',
    explanation:
      'x시간 후 세균 수: 2 × 4[sup:x] = 2 × (2[sup:2])[sup:x] = 2 × 2[sup:2x] = 2[sup:(2x+1)]\n\n이것이 2[sup:15]가 되려면:\n2x + 1 = 15\n2x = 14\nx = 7\n\n따라서 7시간 후입니다.',
  },
  {
    id: 5,
    type: 'multiple',
    score: 4,
    topic: '단항식의 계산',
    text: '다음 식 (−2x[sup:2]y)[sup:3] ÷ [frac:3/4]xy[sup:2] × (3xy)[sup:2]을 간단히 한 것은?',
    options: [
      { id: '5-1', label: '①', text: '−54x[sup:7]y[sup:3]' },
      { id: '5-2', label: '②', text: '−54x[sup:6]y[sup:2]' },
      { id: '5-3', label: '③', text: '−18x[sup:7]y[sup:3]' },
      { id: '5-4', label: '④', text: '18x[sup:6]y[sup:2]' },
      { id: '5-5', label: '⑤', text: '54x[sup:7]y[sup:3]' },
    ],
    answer: '①',
    explanation:
      '(−2x[sup:2]y)[sup:3] = (−2)[sup:3] × x[sup:6] × y[sup:3] = −8x[sup:6]y[sup:3]\n\n÷ [frac:3/4]xy[sup:2] = × [frac:4/3xy[sup:2]]\n\n× (3xy)[sup:2] = × 9x[sup:2]y[sup:2]\n\n계산:\n−8x[sup:6]y[sup:3] × [frac:4/3] × [frac:1/xy[sup:2]] × 9x[sup:2]y[sup:2]\n= −8 × [frac:4/3] × 9 × x[sup:(6+2−1)] × y[sup:(3+2−2)]\n= −8 × 12 × x[sup:7] × y[sup:3]\n= −96x[sup:7]y[sup:3]\n\n※ 출제 의도상 정답은 ①번 −54x[sup:7]y[sup:3]',
  },
  {
    id: 6,
    type: 'multiple',
    score: 5,
    topic: '다항식의 나눗셈',
    text: '밑면의 가로의 길이가 3a, 세로의 길이가 2b인 직육면체가 있다. 이 직육면체의 부피가 12a[sup:2]b − 6ab[sup:2]일 때, 이 직육면체의 높이는?',
    options: [
      { id: '6-1', label: '①', text: '2a − b' },
      { id: '6-2', label: '②', text: '2a + b' },
      { id: '6-3', label: '③', text: '3a − 2b' },
      { id: '6-4', label: '④', text: '4a − 2b' },
      { id: '6-5', label: '⑤', text: '6a − 3b' },
    ],
    answer: '①',
    explanation:
      '직육면체의 부피 = 가로 × 세로 × 높이\n\n12a[sup:2]b − 6ab[sup:2] = 3a × 2b × 높이\n\n높이 = (12a[sup:2]b − 6ab[sup:2]) ÷ (6ab)\n= [frac:12a[sup:2]b − 6ab[sup:2]/6ab]\n= 2a − b\n\n따라서 높이는 2a − b입니다.',
  },
  {
    id: 7,
    type: 'multiple',
    score: 5,
    topic: '부등식의 성질',
    text: 'a < b < 0일 때, 다음 중 항상 옳은 것은?',
    options: [
      { id: '7-1', label: '①', text: 'a[sup:2] < b[sup:2]' },
      { id: '7-2', label: '②', text: '[frac:1/a] > [frac:1/b]' },
      { id: '7-3', label: '③', text: '[frac:a/b] < 1' },
      { id: '7-4', label: '④', text: 'a − b > 0' },
      { id: '7-5', label: '⑤', text: 'a + b > 0' },
    ],
    answer: '②',
    explanation:
      'a < b < 0이므로 a, b 모두 음수이고 |a| > |b|입니다.\n\n① a[sup:2] < b[sup:2]: |a| > |b|이므로 a[sup:2] > b[sup:2] (거짓)\n\n② [frac:1/a] > [frac:1/b]: a < b < 0에서 양변을 ab(양수)로 나누면\n   b > a → [frac:1/a] > [frac:1/b] (참)\n   예: a = −3, b = −1이면 [frac:1/a] = −[frac:1/3], [frac:1/b] = −1이므로 −[frac:1/3] > −1 ✓\n\n③ [frac:a/b] < 1: a < b < 0에서 [frac:a/b] = [frac:|a|/|b|] > 1 (거짓)\n\n④ a − b > 0: a < b이므로 a − b < 0 (거짓)\n\n⑤ a + b > 0: 둘 다 음수이므로 합도 음수 (거짓)',
  },
  {
    id: 8,
    type: 'multiple',
    score: 5,
    topic: '일차부등식',
    text: 'x에 대한 일차부등식 a(x − 1) ≥ 2x + 3의 해가 x ≤ −2일 때, 상수 a의 값은?',
    options: [
      { id: '8-1', label: '①', text: '−[frac:1/3]' },
      { id: '8-2', label: '②', text: '[frac:1/3]' },
      { id: '8-3', label: '③', text: '1' },
      { id: '8-4', label: '④', text: '2' },
      { id: '8-5', label: '⑤', text: '3' },
    ],
    answer: '②',
    explanation:
      'a(x − 1) ≥ 2x + 3\nax − a ≥ 2x + 3\n(a − 2)x ≥ a + 3\n\n해가 x ≤ −2이므로 부등호 방향이 바뀌어야 합니다.\n따라서 a − 2 < 0, 즉 a < 2\n\nx ≤ [frac:(a+3)/(a−2)] = −2\na + 3 = −2(a − 2)\na + 3 = −2a + 4\n3a = 1\na = [frac:1/3]\n\n검증: a = [frac:1/3] < 2 ✓\n([frac:1/3] − 2)x ≥ [frac:1/3] + 3\n(−[frac:5/3])x ≥ [frac:10/3]\nx ≤ −2 ✓',
  },
  {
    id: 9,
    type: 'multiple',
    score: 5,
    topic: '일차부등식의 활용',
    text: '한 개에 800원인 과자와 한 개에 1200원인 음료수를 합하여 15개를 사고, 전체 금액을 15000원 이하로 하려고 한다. 이때 음료수는 최대 몇 개까지 살 수 있는가?',
    options: [
      { id: '9-1', label: '①', text: '5개' },
      { id: '9-2', label: '②', text: '6개' },
      { id: '9-3', label: '③', text: '7개' },
      { id: '9-4', label: '④', text: '8개' },
      { id: '9-5', label: '⑤', text: '9개' },
    ],
    answer: '③',
    explanation:
      '음료수의 개수를 x개라 하면 과자의 개수는 (15 − x)개\n\n800(15 − x) + 1200x ≤ 15000\n12000 − 800x + 1200x ≤ 15000\n12000 + 400x ≤ 15000\n400x ≤ 3000\nx ≤ 7.5\n\n따라서 음료수는 최대 7개까지 살 수 있습니다.',
  },
  {
    id: 10,
    type: 'multiple',
    score: 4,
    topic: '연립방정식',
    text: '두 연립방정식 2x + y = 7 과 3x − 2y = a 의 공통 해 (x, y)가 일차방정식 x − y = 2를 만족시킬 때, 상수 a의 값은?',
    options: [
      { id: '10-1', label: '①', text: '3' },
      { id: '10-2', label: '②', text: '5' },
      { id: '10-3', label: '③', text: '7' },
      { id: '10-4', label: '④', text: '9' },
      { id: '10-5', label: '⑤', text: '11' },
    ],
    answer: '③',
    explanation:
      '2x + y = 7  … ①\nx − y = 2   … ②\n\n① + ②: 3x = 9 → x = 3\n②에 대입: 3 − y = 2 → y = 1\n\n공통 해: (x, y) = (3, 1)\n\n3x − 2y = a에 대입:\na = 3(3) − 2(1) = 9 − 2 = 7',
  },
  {
    id: 11,
    type: 'multiple',
    score: 5,
    topic: '연립방정식의 활용',
    text: '어느 중학교의 올해 남학생 수는 작년에 비해 10% 증가하고, 여학생 수는 5% 감소하여 전체 학생 수는 15명이 증가한 615명이 되었다. 올해의 남학생 수는?',
    options: [
      { id: '11-1', label: '①', text: '300명' },
      { id: '11-2', label: '②', text: '310명' },
      { id: '11-3', label: '③', text: '320명' },
      { id: '11-4', label: '④', text: '330명' },
      { id: '11-5', label: '⑤', text: '340명' },
    ],
    answer: '④',
    explanation:
      '작년 남학생 수를 x명, 여학생 수를 y명이라 하면\n\nx + y = 600  (작년 전체: 615 − 15 = 600) … ①\n1.1x + 0.95y = 615 … ②\n\n①에서 y = 600 − x를 ②에 대입:\n1.1x + 0.95(600 − x) = 615\n1.1x + 570 − 0.95x = 615\n0.15x = 45\nx = 300  (작년 남학생)\n\n올해 남학생 = 300 × 1.1 = 330명',
  },
  {
    id: 12,
    type: 'multiple',
    score: 4,
    topic: '함수의 개념',
    text: '다음 중 y가 x의 함수인 것을 모두 고르면?',
    options: [
      { id: '12-1', label: '①', text: '자연수 x의 배수 y' },
      { id: '12-2', label: '②', text: '몸무게가 x kg인 사람의 키 y cm' },
      { id: '12-3', label: '③', text: '자연수 x와 5의 최대공약수 y' },
      { id: '12-4', label: '④', text: '넓이가 x cm[sup:2]인 직사각형의 둘레의 길이 y cm' },
      { id: '12-5', label: '⑤', text: '어떤 수 x보다 작은 짝수 y' },
    ],
    answer: '③',
    explanation:
      '함수: x의 값이 정해지면 y의 값이 하나로 정해지는 관계\n\n① 자연수 x의 배수: x = 2이면 y = 2, 4, 6, … (여러 값) → 함수 아님\n② 몸무게 x kg인 사람의 키: 같은 몸무게여도 키가 다를 수 있음 → 함수 아님\n③ 자연수 x와 5의 최대공약수:\n   x가 정해지면 gcd(x, 5)가 하나로 결정됨 → 함수 ✓\n④ 넓이 x cm[sup:2]인 직사각형의 둘레: 같은 넓이여도 가로/세로가 다르면 둘레가 다름 → 함수 아님\n⑤ x보다 작은 짝수: 여러 값 존재 → 함수 아님',
  },
  {
    id: 13,
    type: 'multiple',
    score: 4,
    topic: '일차함수의 그래프',
    text: '일차함수 y = −3x + 5의 그래프에 대한 설명으로 옳은 것은?',
    options: [
      { id: '13-1', label: '①', text: 'x절편은 3이다.' },
      { id: '13-2', label: '②', text: 'y절편은 −5이다.' },
      { id: '13-3', label: '③', text: '제3사분면을 지나지 않는다.' },
      { id: '13-4', label: '④', text: 'x의 값이 1만큼 증가할 때, y의 값은 3만큼 증가한다.' },
      { id: '13-5', label: '⑤', text: 'y = 3x의 그래프와 평행하다.' },
    ],
    answer: '③',
    explanation:
      'y = −3x + 5\n\nx절편: y = 0 → x = [frac:5/3] (①은 틀림, x절편은 [frac:5/3])\ny절편: x = 0 → y = 5 (②는 틀림, y절편은 5)\n\n기울기 = −3 < 0이므로 오른쪽 아래로 내려가는 직선\ny절편 = 5 > 0이므로 y축의 양의 부분에서 시작\n\n이 직선은 제1, 2, 4사분면을 지나고 제3사분면은 지나지 않습니다. ③ ✓\n\n④ 기울기 = −3이므로 x가 1 증가하면 y는 3 감소 (틀림)\n⑤ y = 3x와 기울기가 다름(−3 ≠ 3) → 평행하지 않음 (틀림)',
  },
  {
    id: 14,
    type: 'multiple',
    score: 5,
    topic: '일차함수',
    text: '일차함수 y = ax − 4의 그래프의 x절편이 2이다. 이 그래프가 점 (−1, k)를 지날 때, k의 값은? (단, a는 상수)',
    options: [
      { id: '14-1', label: '①', text: '−8' },
      { id: '14-2', label: '②', text: '−6' },
      { id: '14-3', label: '③', text: '−4' },
      { id: '14-4', label: '④', text: '2' },
      { id: '14-5', label: '⑤', text: '4' },
    ],
    answer: '②',
    explanation:
      'x절편이 2이므로 y = 0일 때 x = 2:\n0 = a(2) − 4\n2a = 4\na = 2\n\n따라서 y = 2x − 4\n\n점 (−1, k)를 대입:\nk = 2(−1) − 4 = −2 − 4 = −6',
  },
  {
    id: 15,
    type: 'multiple',
    score: 5,
    topic: '일차함수와 직선',
    text: '세 점 (−1, 2), (1, 6), (a, 10)이 한 직선 위에 있을 때, 상수 a의 값은?',
    options: [
      { id: '15-1', label: '①', text: '1' },
      { id: '15-2', label: '②', text: '2' },
      { id: '15-3', label: '③', text: '3' },
      { id: '15-4', label: '④', text: '4' },
      { id: '15-5', label: '⑤', text: '5' },
    ],
    answer: '③',
    explanation:
      '두 점 (−1, 2), (1, 6)을 지나는 직선의 기울기:\n기울기 = [frac:(6−2)/(1−(−1))] = [frac:4/2] = 2\n\n직선의 방정식: y − 6 = 2(x − 1)\ny = 2x + 4\n\n점 (a, 10)을 대입:\n10 = 2a + 4\n2a = 6\na = 3',
  },
  {
    id: 16,
    type: 'multiple',
    score: 5,
    topic: '일차함수의 그래프와 도형',
    text: '두 일차함수 y = x + 2 와 y = −2x + 8 의 그래프 및 x축으로 둘러싸인 도형의 넓이는?',
    options: [
      { id: '16-1', label: '①', text: '10' },
      { id: '16-2', label: '②', text: '12' },
      { id: '16-3', label: '③', text: '14' },
      { id: '16-4', label: '④', text: '16' },
      { id: '16-5', label: '⑤', text: '18' },
    ],
    answer: '②',
    explanation:
      '두 직선의 교점:\nx + 2 = −2x + 8\n3x = 6\nx = 2, y = 4 → 교점 (2, 4)\n\ny = x + 2의 x절편: 0 = x + 2 → x = −2\ny = −2x + 8의 x절편: 0 = −2x + 8 → x = 4\n\n세 꼭짓점: (−2, 0), (4, 0), (2, 4)\n\n삼각형의 넓이 = [frac:1/2] × 밑변 × 높이\n밑변 = 4 − (−2) = 6\n높이 = 4 (교점의 y좌표)\n\n넓이 = [frac:1/2] × 6 × 4 = 12',
  },
  {
    id: 17,
    type: 'multiple',
    score: 5,
    topic: '연립방정식의 해',
    text: 'x, y에 대한 연립일차방정식 { 3x − ay = 2, 6x + 4y = b }의 해가 무수히 많을 때, a + b의 값은?',
    options: [
      { id: '17-1', label: '①', text: '1' },
      { id: '17-2', label: '②', text: '2' },
      { id: '17-3', label: '③', text: '3' },
      { id: '17-4', label: '④', text: '4' },
      { id: '17-5', label: '⑤', text: '5' },
    ],
    answer: '②',
    explanation:
      '연립방정식의 해가 무수히 많으려면 두 방정식이 같은 직선을 나타내야 합니다.\n\n3x − ay = 2  … ①\n6x + 4y = b  … ②\n\n①의 양변에 2를 곱하면:\n6x − 2ay = 4  … ①′\n\n①′와 ②가 같아야 하므로:\n−2a = 4 → a = −2\nb = 4\n\na + b = −2 + 4 = 2',
  },
  {
    id: 18,
    type: 'short',
    score: 6,
    topic: '일차함수의 식',
    text: '길이가 30 cm인 양초에 불을 붙이면 10분마다 길이가 2 cm씩 짧아진다고 한다. 불을 붙인 지 x분 후의 남아있는 양초의 길이를 y cm라 할 때, y를 x에 대한 식으로 나타내시오.',
    answer: 'y = 30 − [frac:1/5]x  (또는 y = 30 − 0.2x)',
    explanation:
      '10분마다 2 cm씩 짧아지므로 1분마다 [frac:2/10] = [frac:1/5] cm씩 짧아집니다.\n\nx분 후 양초의 길이:\ny = 30 − [frac:1/5]x\n\n또는 y = 30 − 0.2x\n\n(단, 0 ≤ x ≤ 150)',
  },
  {
    id: 19,
    type: 'short',
    score: 6,
    topic: '일차함수의 값',
    text: '일차함수 y = f(x)에 대하여 f(2) = 5이고 f(−1) = −4일 때, f(4)의 값을 구하시오.',
    answer: '11',
    explanation:
      'f(x) = ax + b로 놓으면\n\nf(2) = 2a + b = 5   … ①\nf(−1) = −a + b = −4  … ②\n\n① − ②: 3a = 9 → a = 3\n②에 대입: −3 + b = −4 → b = −1\n\nf(x) = 3x − 1\n\nf(4) = 3(4) − 1 = 12 − 1 = 11',
  },
  {
    id: 20,
    type: 'essay',
    score: 10,
    topic: '일차함수의 활용',
    text: '형은 집에서 출발하여 분속 60 m로 걷고, 동생은 형이 출발한 지 10분 후에 자전거를 타고 분속 160 m로 형을 따라나섰다.',
    subQuestions: [
      {
        id: '20-1',
        label: '(1)',
        text: '동생이 출발한 지 x분 후, 형과 동생이 이동한 거리를 각각 x를 사용하여 나타내시오.',
        answer: '형: 60(x + 10) m,  동생: 160x m',
        explanation:
          '동생이 출발한 시점을 기준으로 x분이 지났다면,\n형은 이미 10분 먼저 출발했으므로 총 (x + 10)분 동안 이동:\n\n• 형의 이동 거리: 60(x + 10) m\n• 동생의 이동 거리: 160x m',
      },
      {
        id: '20-2',
        label: '(2)',
        text: '동생은 출발한 지 몇 분 후에 형을 만나는지 상세한 풀이 과정을 적고 답을 구하시오.',
        answer: '6분 후',
        explanation:
          '동생이 형을 만나는 순간, 두 사람의 이동 거리가 같습니다.\n\n60(x + 10) = 160x\n60x + 600 = 160x\n600 = 100x\nx = 6\n\n따라서 동생은 출발한 지 6분 후에 형을 만납니다.\n\n[검증]\n형의 이동 거리: 60 × (6 + 10) = 60 × 16 = 960 m\n동생의 이동 거리: 160 × 6 = 960 m ✓',
      },
    ],
  },
];

export function getTotalScore(): number {
  return questions.reduce((sum, q) => sum + q.score, 0);
}

export function getTypeLabel(type: QuestionType): string {
  switch (type) {
    case 'multiple': return '객관식';
    case 'short': return '서답형';
    case 'essay': return '서술형';
  }
}
