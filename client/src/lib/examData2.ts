// Design: Modern EduTech — Deep Navy + Amber Gold
// 중학교 수학 기초 평가 - 중학교 1~2학년 수학 기초 개념

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

export const EXAM_TITLE = '중학교 2-1 기말시험 (2회)';
export const EXAM_SUBTITLE = '매홀중학교 변형 문제 모의평가';
export const TOTAL_SCORE = 100;

export const questions: Question[] = [
  {
    id: 1,
    type: 'multiple',
    score: 4,
    topic: '일차함수',
    text: '일차함수 y=f(x)의 그래프가 두 점 (−2,−1)과 (2,7)을 지날 때, f(−3)의 값은?',
    options: [
      { id: '1-1', label: '①', text: '−5' },
      { id: '1-2', label: '②', text: '−3' },
      { id: '1-3', label: '③', text: '−1' },
      { id: '1-4', label: '④', text: '1' },
      { id: '1-5', label: '⑤', text: '3' },
    ],
    answer: '②',
    explanation: '기울기는 (7−(−1))/(2−(−2)) = 8/4 = 2입니다. 함수식은 y=2x+b가 되며, (−2,−1)을 대입하면 −1=−4+b⇒b=3입니다. 따라서 f(x)=2x+3이고, f(−3)=2(−3)+3=−3입니다.',
  },
  {
    id: 2,
    type: 'multiple',
    score: 4,
    topic: '식의 계산',
    text: '다음 중 식의 계산이 옳은 것은?',
    options: [
      { id: '2-1', label: '①', text: 'x[sup:5] × x[sup:3] = x[sup:15]' },
      { id: '2-2', label: '②', text: '(x[sup:3])[sup:4] ÷ x[sup:2] = x[sup:5]' },
      { id: '2-3', label: '③', text: '(−2xy[sup:2])[sup:3] = −8x[sup:3]y[sup:6]' },
      { id: '2-4', label: '④', text: 'x[sup:10] ÷ x[sup:5] ÷ x[sup:2] = x[sup:3]' },
      { id: '2-5', label: '⑤', text: '(a[sup:2]b/c)[sup:2] = a[sup:4]b[sup:2]/c[sup:2]' },
    ],
    answer: '③',
    explanation: '① x[sup:5] × x[sup:3] = x[sup:8] ② (x[sup:3])[sup:4] ÷ x[sup:2] = x[sup:12] ÷ x[sup:2] = x[sup:10] ③ (−2)[sup:3]x[sup:3](y[sup:2])[sup:3] = −8x[sup:3]y[sup:6] (옳은 계산) ④ x[sup:10] ÷ x[sup:5] ÷ x[sup:2] = x[sup:10−5−2] = x[sup:3] ⑤ (a[sup:2]b/c)[sup:2] = a[sup:4]b[sup:2]/c[sup:2]',
  },
  {
    id: 3,
    type: 'multiple',
    score: 5,
    topic: '일차함수',
    text: '두 일차방정식 x−y=0과 x+2y−6=0의 그래프 및 y축으로 둘러싸인 도형의 넓이는?',
    options: [
      { id: '3-1', label: '①', text: '1' },
      { id: '3-2', label: '②', text: '2' },
      { id: '3-3', label: '③', text: '3' },
      { id: '3-4', label: '④', text: '4' },
      { id: '3-5', label: '⑤', text: '5' },
    ],
    answer: '③',
    explanation: '두 일차방정식을 y에 관해 풀면 y=x, y=−[frac:1/2]x+3입니다. 이 두 직선이 y축과 만나는 점은 각각 (0,0)과 (0,3)이므로 밑변의 길이는 3입니다. 두 직선의 교점을 구하기 위해 연립하면 x=−[frac:1/2]x+3⇒[frac:3/2]x=3⇒x=2입니다. 교점의 x좌표인 2가 삼각형의 높이가 됩니다. 넓이 = [frac:1/2] × 3 × 2 = 3입니다.',
  },
  {
    id: 4,
    type: 'multiple',
    score: 5,
    topic: '일차부등식',
    text: 'x에 대한 일차부등식 a(x−1)<2x−5의 해가 x>3일 때, 상수 a의 값은?',
    options: [
      { id: '4-1', label: '①', text: '−[frac:1/2]' },
      { id: '4-2', label: '②', text: '0' },
      { id: '4-3', label: '③', text: '[frac:1/2]' },
      { id: '4-4', label: '④', text: '1' },
      { id: '4-5', label: '⑤', text: '[frac:3/2]' },
    ],
    answer: '③',
    explanation: 'ax−a<2x−5에서 이항하면 (a−2)x<a−5입니다. 부등식의 해가 x>3으로 부등호 방향이 바뀌었으므로 a−2<0입니다. 양변을 나누면 x> [frac:a−5/a−2]가 되고, 이 값이 3과 같아야 합니다. [frac:a−5/a−2] = 3 ⇒ a−5=3a−6 ⇒ 2a=1 ⇒ a=[frac:1/2]입니다.',
  },
  {
    id: 5,
    type: 'multiple',
    score: 5,
    topic: '유리수와 순환소수',
    text: '분수 [frac:360/x]를 소수로 나타내면 유한소수이고, 이를 기약분수로 나타내면 [frac:7/y]이 된다. 50<x<100을 만족하는 자연수 x에 대하여 x+y의 값은? (단, y는 자연수이다.)',
    options: [
      { id: '5-1', label: '①', text: '97' },
      { id: '5-2', label: '②', text: '103' },
      { id: '5-3', label: '③', text: '112' },
      { id: '5-4', label: '④', text: '121' },
      { id: '5-5', label: '⑤', text: '130' },
    ],
    answer: '②',
    explanation: '360=2[sup:3]×3[sup:2]×5입니다. 유한소수가 되려면 분모의 3[sup:2](9)가 약분되어 사라져야 하므로 x는 9의 배수여야 합니다. 기약분수로 나타냈을 때 분자가 7이므로, x는 7의 배수이기도 해야 합니다. 따라서 x는 9와 7의 공배수인 63의 배수입니다. 조건 50<x<100에서 x=63뿐입니다. [frac:360/63] = [frac:40/7]이므로 y=40입니다. 따라서 x+y=63+40=103입니다.',
  },
  {
    id: 6,
    type: 'multiple',
    score: 4,
    topic: '일차함수',
    text: '100L의 물이 들어있는 수조에서 1분에 4L씩 물을 빼내려고 한다. 물을 빼기 시작한 지 x분 후에 수조에 남아있는 물의 양을 yL라 할 때, 수조에 남은 물의 양이 24L가 되는 것은 물을 빼기 시작한 지 몇 분 후인가?',
    options: [
      { id: '6-1', label: '①', text: '15분' },
      { id: '6-2', label: '②', text: '16분' },
      { id: '6-3', label: '③', text: '17분' },
      { id: '6-4', label: '④', text: '18분' },
      { id: '6-5', label: '⑤', text: '19분' },
    ],
    answer: '⑤',
    explanation: '남은 물의 양 y=100−4x로 나타낼 수 있습니다. 남은 물의 양이 24L가 되므로, 24=100−4x ⇒ 4x=76 ⇒ x=19입니다. 따라서 19분 후입니다.',
  },
  {
    id: 7,
    type: 'multiple',
    score: 5,
    topic: '연립일차방정식',
    text: '어느 중학교의 작년 전체 학생 수는 800명이었다. 올해는 작년에 비해 남학생 수는 5% 증가하고, 여학생 수는 4% 감소하여 전체 학생 수가 4명 증가하였다고 한다. 올해의 남학생 수는?',
    options: [
      { id: '7-1', label: '①', text: '400명' },
      { id: '7-2', label: '②', text: '410명' },
      { id: '7-3', label: '③', text: '420명' },
      { id: '7-4', label: '④', text: '430명' },
      { id: '7-5', label: '⑤', text: '440명' },
    ],
    answer: '③',
    explanation: '작년 남학생을 x, 여학생을 y라 하면 x+y=800입니다. 올해 증감량으로 식을 세우면 0.05x−0.04y=4입니다. 양변에 100을 곱하면 5x−4y=400입니다. x+y=800의 양변에 4를 곱하면 4x+4y=3200이고, 두 식을 더하면 9x=3600 ⇒ x=400입니다. 올해의 남학생 수는 400×(1+0.05)=420명입니다.',
  },
  {
    id: 8,
    type: 'multiple',
    score: 4,
    topic: '식의 계산',
    text: '다항식 3(x−2y+1)−2(2x−y−3)을 간단히 하였을 때, x의 계수, y의 계수, 상수항의 합은?',
    options: [
      { id: '8-1', label: '①', text: '−4' },
      { id: '8-2', label: '②', text: '0' },
      { id: '8-3', label: '③', text: '2' },
      { id: '8-4', label: '④', text: '4' },
      { id: '8-5', label: '⑤', text: '6' },
    ],
    answer: '④',
    explanation: '식을 전개하면 3x−6y+3−4x+2y+6입니다. 동류항끼리 계산하면 −x−4y+9가 됩니다. x의 계수는 −1, y의 계수는 −4, 상수항은 9입니다. 합은 (−1)+(−4)+9=4입니다.',
  },
  {
    id: 9,
    type: 'multiple',
    score: 5,
    topic: '일차함수',
    text: '세 점 (1,−2), (3,4), (a,7)이 한 직선 위에 있을 때, 상수 a의 값은?',
    options: [
      { id: '9-1', label: '①', text: '2' },
      { id: '9-2', label: '②', text: '3' },
      { id: '9-3', label: '③', text: '4' },
      { id: '9-4', label: '④', text: '5' },
      { id: '9-5', label: '⑤', text: '6' },
    ],
    answer: '③',
    explanation: '(1,−2)와 (3,4)를 지나는 직선의 기울기는 (4−(−2))/(3−1) = 6/2 = 3입니다. (3,4)와 (a,7)을 지나는 직선의 기울기도 3이어야 하므로, (7−4)/(a−3) = 3 ⇒ 3/(a−3) = 3 ⇒ a−3=1 ⇒ a=4입니다.',
  },
  {
    id: 10,
    type: 'multiple',
    score: 5,
    topic: '유리수와 순환소수',
    text: '분수 [frac:1/10], [frac:1/11], [frac:1/12], …, [frac:1/40] 중에서 유한소수로 나타낼 수 없는 순환소수의 개수는?',
    options: [
      { id: '10-1', label: '①', text: '24개' },
      { id: '10-2', label: '②', text: '25개' },
      { id: '10-3', label: '③', text: '26개' },
      { id: '10-4', label: '④', text: '27개' },
      { id: '10-5', label: '⑤', text: '28개' },
    ],
    answer: '②',
    explanation: '전체 분수의 개수는 40−10+1=31개입니다. 유한소수가 되려면 분모가 2나 5만의 소인수로 이루어져야 합니다. 해당되는 분모는 10(2×5), 16(2[sup:4]), 20(2[sup:2]×5), 25(5[sup:2]), 32(2[sup:5]), 40(2[sup:3]×5)로 총 6개입니다. 순환소수 개수 = 전체 개수 − 유한소수 개수 = 31−6=25개입니다.',
  },
  {
    id: 11,
    type: 'multiple',
    score: 4,
    topic: '연립일차방정식',
    text: '총 20문제가 출제된 수학 시험에서 한 문제를 맞히면 5점을 얻고, 틀리거나 풀지 않으면 2점을 잃는다고 한다. 어떤 학생이 이 시험에서 65점을 받았을 때, 이 학생이 맞힌 문제의 수는?',
    options: [
      { id: '11-1', label: '①', text: '13개' },
      { id: '11-2', label: '②', text: '14개' },
      { id: '11-3', label: '③', text: '15개' },
      { id: '11-4', label: '④', text: '16개' },
      { id: '11-5', label: '⑤', text: '17개' },
    ],
    answer: '③',
    explanation: '맞힌 문제 수를 x, 틀리거나 풀지 않은 문제 수를 y라 하면, x+y=20입니다. 점수에 대한 식은 5x−2y=65입니다. 첫 번째 식의 양변에 2를 곱하면 2x+2y=40이고, 이를 두 번째 식과 더하면 7x=105 ⇒ x=15입니다.',
  },
  {
    id: 12,
    type: 'multiple',
    score: 4,
    topic: '일차부등식',
    text: '0<a<b일 때, 다음 중 옳지 않은 것은?',
    options: [
      { id: '12-1', label: '①', text: 'a[sup:2] < b[sup:2]' },
      { id: '12-2', label: '②', text: '[frac:1/a] > [frac:1/b]' },
      { id: '12-3', label: '③', text: '[frac:a/b] < 1' },
      { id: '12-4', label: '④', text: 'a−b < 0' },
      { id: '12-5', label: '⑤', text: '−2a < −2b' },
    ],
    answer: '⑤',
    explanation: '모두 양수인 조건(0<a<b)입니다. ① 양수는 제곱해도 대소관계가 유지됩니다. (참) ② 양수의 역수를 취하면 부등호 방향이 바뀝니다. (참) ③ 분모가 더 큰 양수이므로 1보다 작습니다. (참) ④ 작은 수에서 큰 수를 빼면 음수입니다. (참) ⑤ 양변에 음수(−2)를 곱하면 부등호 방향이 바뀌어 −2a > −2b가 되어야 합니다. (거짓)',
  },
  {
    id: 13,
    type: 'multiple',
    score: 4,
    topic: '일차함수',
    text: '어떤 일차함수의 그래프는 x절편이 3이고 y절편이 −6이다. 이 그래프가 점 (k,4)를 지날 때, 상수 k의 값은?',
    options: [
      { id: '13-1', label: '①', text: '2' },
      { id: '13-2', label: '②', text: '3' },
      { id: '13-3', label: '③', text: '4' },
      { id: '13-4', label: '④', text: '5' },
      { id: '13-5', label: '⑤', text: '6' },
    ],
    answer: '④',
    explanation: 'x절편이 3 ⇒ (3,0)을 지남. y절편이 −6 ⇒ (0,−6)을 지남. 기울기는 (−6−0)/(0−3) = 2이므로, 식은 y=2x−6입니다. 이 그래프가 (k,4)를 지나므로 대입하면 4=2k−6 ⇒ 2k=10 ⇒ k=5입니다.',
  },
  {
    id: 14,
    type: 'multiple',
    score: 5,
    topic: '지수법칙',
    text: '두께가 0.1mm인 종이가 있다. 이 종이를 반으로 접는 과정을 반복하여 두께가 100cm 이상이 되게 하려면, 최소 몇 번을 접어야 하는가? (단, 1cm=10mm이고, 2[sup:9]=512, 2[sup:10]=1024이다.)',
    options: [
      { id: '14-1', label: '①', text: '12번' },
      { id: '14-2', label: '②', text: '13번' },
      { id: '14-3', label: '③', text: '14번' },
      { id: '14-4', label: '④', text: '15번' },
      { id: '14-5', label: '⑤', text: '16번' },
    ],
    answer: '③',
    explanation: '100cm=1000mm입니다. 종이를 n번 접었을 때 두께는 0.1×2[sup:n]mm가 됩니다. 0.1×2[sup:n] ≥ 1000 ⇒ 2[sup:n] ≥ 10000입니다. 2[sup:10]=1024, 2[sup:13]=8192, 2[sup:14]=16384이므로, 최소 14번을 접어야 합니다.',
  },
  {
    id: 15,
    type: 'multiple',
    score: 4,
    topic: '유리수와 순환소수',
    text: '유리수와 소수에 대한 설명으로 항상 옳은 것은?',
    options: [
      { id: '15-1', label: '①', text: '모든 무한소수는 무리수이다.' },
      { id: '15-2', label: '②', text: '유한소수끼리의 합은 항상 유한소수이다.' },
      { id: '15-3', label: '③', text: '0.[dot:9]는 1보다 작은 수이다.' },
      { id: '15-4', label: '④', text: '기약분수의 분모가 15이면 절대로 유한소수가 될 수 없다.' },
      { id: '15-5', label: '⑤', text: '모든 유리수는 유한소수로 나타낼 수 있다.' },
    ],
    answer: '②',
    explanation: '① 무한소수 중 규칙이 있는 순환소수는 유리수입니다. (거짓) ② 유한소수끼리 더하면 소수점 아래 자리가 유한하게 끝나므로 항상 유한소수입니다. (참) ③ 0.[dot:9] = 9/9 = 1이므로 서로 같습니다. (거짓) ④ 기약분수가 아닐 때 분모가 15이더라도 약분하여 3이 사라지면 유한소수가 될 수 있습니다. (거짓) ⑤ 유리수 중에는 유한소수뿐 아니라 순환소수(무한소수)도 존재합니다. (거짓)',
  },
  {
    id: 16,
    type: 'multiple',
    score: 5,
    topic: '식의 계산',
    text: '밑넓이가 4x[sup:2]y인 직육면체의 부피가 12x[sup:3]y[sup:2]−8x[sup:2]y[sup:3]일 때, 이 직육면체의 높이는?',
    options: [
      { id: '16-1', label: '①', text: '3x−2y' },
      { id: '16-2', label: '②', text: '3xy−2y[sup:2]' },
      { id: '16-3', label: '③', text: '4xy−2y[sup:2]' },
      { id: '16-4', label: '④', text: '3xy+2y' },
      { id: '16-5', label: '⑤', text: '4x−2y[sup:2]' },
    ],
    answer: '②',
    explanation: '직육면체의 부피 = (밑넓이) × (높이)이므로, (높이) = (12x[sup:3]y[sup:2]−8x[sup:2]y[sup:3])/(4x[sup:2]y) = (12x[sup:3]y[sup:2])/(4x[sup:2]y) − (8x[sup:2]y[sup:3])/(4x[sup:2]y) = 3xy − 2y[sup:2]입니다.',
  },
  {
    id: 17,
    type: 'short',
    score: 5,
    topic: '연립일차방정식',
    text: 'x,y에 대한 연립일차방정식 { 2x−3y=4, ax+6y=5 }의 해가 없을 때, 상수 a의 값을 구하시오.',
    answer: '−4',
    explanation: '해가 없으려면 두 일차방정식 그래프의 기울기는 같고 y절편은 달라야 합니다. (계수의 비율) a/2 = 6/(−3) ≠ 5/4, a/2 = −2이므로 a = −4입니다.',
  },
  {
    id: 18,
    type: 'short',
    score: 5,
    topic: '일차함수',
    text: '다음 중 y가 x의 함수인 것을 고르시오. (번호만 적으시오) (1) 넓이가 xcm[sup:2]인 직사각형의 둘레의 길이 ycm (2) 자연수 x의 소인수 y (3) 어떤 수 x의 절댓값 y (4) 어떤 자연수 x보다 큰 자연수 y (5) 반지름의 길이가 xcm인 원의 현의 길이 ycm',
    answer: '(3)',
    explanation: '함수는 x값 하나에 y값이 오직 하나만 결정되어야 합니다. (1) 넓이가 정해져도 가로/세로 비율에 따라 둘레는 여러 가지입니다. (2) 소인수는 2개 이상일 수 있습니다. (예: x=6일 때 소인수는 2, 3) (3) 절댓값은 단 하나로 결정되므로 함수입니다. (4) 큰 자연수는 무수히 많습니다. (5) 현의 길이는 중심과의 거리에 따라 무수히 많습니다.',
  },
  {
    id: 19,
    type: 'short',
    score: 6,
    topic: '연립일차방정식',
    text: '연립방정식 { ax+by=8, bx−ay=−1 }의 해가 x=1,y=2일 때, a−b의 값을 구하시오. (단, a,b는 상수)',
    answer: '−1',
    explanation: '해가 x=1,y=2이므로 두 식에 대입하면 { a+2b=8, b−2a=−1 ⇒ −2a+b=−1 }가 됩니다. 두 번째 식의 양변에 2를 곱하면 −4a+2b=−2이고, 첫 번째 식에서 빼면 (a+2b)−(−4a+2b)=8−(−2) ⇒ 5a=10 ⇒ a=2입니다. a=2를 대입하면 2+2b=8 ⇒ 2b=6 ⇒ b=3입니다. 따라서 a−b=2−3=−1입니다.',
  },
  {
    id: 20,
    type: 'essay',
    score: 10,
    topic: '일차부등식',
    text: '다음 그림과 같이 ∠A=∠B=90°이고, AB=5cm, BC=10cm, CD=7cm인 사다리꼴 ABCD가 있다. 점 P가 꼭짓점 B에서 출발하여 선분 BC 위를 따라 점 C까지 움직일 때, 삼각형 APD의 넓이가 사다리꼴 ABCD 넓이의 [frac:1/2] 이상, [frac:2/3] 이하가 되도록 하려고 한다.',
    subQuestions: [
      {
        id: '20-1',
        label: '(1)',
        text: '선분 BP의 길이를 xcm라 할 때, 삼각형 APD의 넓이를 x를 사용한 식으로 나타내시오.',
        answer: '(25+x)cm[sup:2]',
        explanation: '사다리꼴 ABCD의 넓이는 [frac:1/2] × (5+7) × 10 = 60cm[sup:2]입니다. 점 P의 위치에 따른 삼각형 APD의 넓이는 전체에서 삼각형 ABP와 삼각형 PCD를 빼서 구합니다.',
      },
      {
        id: '20-2',
        label: '(2)',
        text: '조건을 만족하는 선분 BP의 길이의 범위를 구하는 상세한 풀이 과정을 적고 답을 구하시오.',
        answer: '5cm≤x≤10cm',
        explanation: '삼각형 APD의 넓이가 60 × [frac:1/2] = 30cm[sup:2] 이상이고 60 × [frac:2/3] = 40cm[sup:2] 이하여야 합니다. 30 ≤ (25+x) ≤ 40에서 5 ≤ x ≤ 15입니다. 그런데 x는 0 ≤ x ≤ 10이므로 5 ≤ x ≤ 10입니다.',
      },
    ],
  },
];

export function getTypeLabel(type: QuestionType): string {
  const labels: Record<QuestionType, string> = {
    multiple: '객관식',
    short: '서답형',
    essay: '서술형',
  };
  return labels[type];
}
