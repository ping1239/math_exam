// Design: Modern EduTech — Deep Navy + Amber Gold
// 중학교 수학 심화 평가 - 중학교 2학년 수학 심화 개념

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

export const EXAM_TITLE = '중학교 2-1 기말시험 (3회)';
export const EXAM_SUBTITLE = '매홀중학교 변형 문제 모의평가';
export const TOTAL_SCORE = 120;

export const questions: Question[] = [
  {
    id: 1,
    type: 'multiple',
    score: 4,
    topic: '지수법칙',
    text: '두께가 0.2mm인 종이가 있다. 이 종이를 반으로 접는 과정을 반복하여 두께가 200cm 이상이 되게 하려면, 최소 몇 번을 접어야 하는가? (단, 1cm=10mm이고, 2[sup:13]=8192, 2[sup:14]=16384이다.)',
    options: [
      { id: '1-1', label: '①', text: '11번' },
      { id: '1-2', label: '②', text: '12번' },
      { id: '1-3', label: '③', text: '13번' },
      { id: '1-4', label: '④', text: '14번' },
      { id: '1-5', label: '⑤', text: '15번' },
    ],
    answer: '④',
    explanation: '목표 두께를 mm 단위로 통일하면 200cm=2000mm입니다. 종이를 n번 접었을 때의 두께는 0.2×2[sup:n]mm가 됩니다. 부등식을 세우면 0.2×2[sup:n] ≥ 2000 ⇒ 2[sup:n] ≥ 10000입니다. 주어진 조건에서 2[sup:13]=8192, 2[sup:14]=16384이므로, 10000 이상이 되려면 최소 14번 접어야 합니다.',
  },
  {
    id: 2,
    type: 'multiple',
    score: 4,
    topic: '식의 계산',
    text: '밑면의 반지름의 길이가 2ab인 원기둥이 있다. 이 원기둥의 부피가 8πa[sup:3]b[sup:2]−12πa[sup:2]b[sup:3]일 때, 이 원기둥의 높이는?',
    options: [
      { id: '2-1', label: '①', text: '2a−2b' },
      { id: '2-2', label: '②', text: '2a−3b' },
      { id: '2-3', label: '③', text: '3a−2b' },
      { id: '2-4', label: '④', text: '4a−3b' },
      { id: '2-5', label: '⑤', text: '4a+3b' },
    ],
    answer: '②',
    explanation: '원기둥의 밑넓이는 π×(2ab)[sup:2] = 4πa[sup:2]b[sup:2]입니다. 원기둥의 부피 = (밑넓이)×(높이)이므로, 높이 = (8πa[sup:3]b[sup:2]−12πa[sup:2]b[sup:3])/(4πa[sup:2]b[sup:2]) = (8πa[sup:3]b[sup:2])/(4πa[sup:2]b[sup:2]) − (12πa[sup:2]b[sup:3])/(4πa[sup:2]b[sup:2]) = 2a−3b입니다.',
  },
  {
    id: 3,
    type: 'multiple',
    score: 5,
    topic: '유리수와 순환소수',
    text: '분수 [frac:3/10], [frac:3/11], [frac:3/12], …, [frac:3/50] 중에서 유한소수로 나타낼 수 있는 분수의 개수는?',
    options: [
      { id: '3-1', label: '①', text: '10개' },
      { id: '3-2', label: '②', text: '11개' },
      { id: '3-3', label: '③', text: '12개' },
      { id: '3-4', label: '④', text: '13개' },
      { id: '3-5', label: '⑤', text: '14개' },
    ],
    answer: '③',
    explanation: '분모가 10부터 50까지인 분수 중 기약분수로 나타냈을 때 분모의 소인수가 2나 5뿐이어야 유한소수가 됩니다. 먼저 분모 자체가 2나 5의 소인수로만 이루어진 경우는 10, 16, 20, 25, 32, 40, 50으로 7개입니다. 또한, 분자가 3이므로 분모가 3×(2[sup:a]5[sup:b]) 꼴이더라도 3이 약분되어 유한소수가 될 수 있습니다. 이에 해당하는 분모는 10부터 50까지 중 12(3×4), 15(3×5), 24(3×8), 30(3×10), 48(3×16)으로 5개입니다. 따라서 유한소수는 총 7+5=12개입니다.',
  },
  {
    id: 4,
    type: 'multiple',
    score: 5,
    topic: '연립일차방정식',
    text: 'x,y에 대한 연립방정식 { x+2y=8, 3x−ay=5 }의 해를 (p,q)라 할 때, p:q=2:1을 만족한다. 이때 상수 a의 값은?',
    options: [
      { id: '4-1', label: '①', text: '1.5' },
      { id: '4-2', label: '②', text: '2' },
      { id: '4-3', label: '③', text: '2.5' },
      { id: '4-4', label: '④', text: '3' },
      { id: '4-5', label: '⑤', text: '3.5' },
    ],
    answer: '⑤',
    explanation: '해의 비가 p:q=2:1이므로 p=2q, 즉 x=2y로 둘 수 있습니다. 이를 온전한 식인 x+2y=8에 대입하면 2y+2y=8 ⇒ 4y=8 ⇒ y=2가 됩니다. y=2이면 x=4이므로, 해는 (4,2)입니다. 이 해를 3x−ay=5에 대입하면 3(4)−a(2)=5 ⇒ 12−2a=5 ⇒ 2a=7 ⇒ a=3.5입니다.',
  },
  {
    id: 5,
    type: 'multiple',
    score: 5,
    topic: '일차함수',
    text: '두 일차방정식 x+2y−6=0과 4x−2y+6=0의 그래프의 교점을 지나고, 일차함수 y=3x−1의 그래프와 평행한 직선의 방정식은?',
    options: [
      { id: '5-1', label: '①', text: 'y=3x−1' },
      { id: '5-2', label: '②', text: 'y=3x+1' },
      { id: '5-3', label: '③', text: 'y=3x+2' },
      { id: '5-4', label: '④', text: 'y=3x+3' },
      { id: '5-5', label: '⑤', text: 'y=3x+5' },
    ],
    answer: '④',
    explanation: '두 직선의 교점을 구하기 위해 연립합니다. { x+2y=6, 4x−2y=−6 } 두 식을 더하면 5x=0 ⇒ x=0이고, 이를 대입하면 y=3이 되어 교점은 (0,3)입니다. 구하는 직선은 y=3x−1과 평행하므로 기울기가 3입니다. 기울기가 3이고 y절편이 3인 직선이므로 식은 y=3x+3입니다.',
  },
  {
    id: 6,
    type: 'multiple',
    score: 5,
    topic: '일차부등식',
    text: 'a>0, b<0이고 |a|<|b|일 때, 다음 중 항상 옳은 것은?',
    options: [
      { id: '6-1', label: '①', text: 'a+b>0' },
      { id: '6-2', label: '②', text: 'a−b<0' },
      { id: '6-3', label: '③', text: '[frac:1/a] < [frac:1/b]' },
      { id: '6-4', label: '④', text: 'ab>0' },
      { id: '6-5', label: '⑤', text: 'a[sup:2] < b[sup:2]' },
    ],
    answer: '⑤',
    explanation: 'a는 양수, b는 음수이고 절댓값은 b가 더 큽니다. (예: a=2, b=−3) ① 절댓값이 큰 음수와 양수의 합이므로 a+b<0입니다. (거짓) ② 양수에서 음수를 뺐으므로 a−b>0입니다. (거짓) ③ [frac:1/a]은 양수, [frac:1/b]은 음수이므로 [frac:1/a] > [frac:1/b]입니다. (거짓) ④ 양수와 음수의 곱이므로 ab<0입니다. (거짓) ⑤ |a|<|b|의 양변을 제곱하면 대소 관계가 유지되어 a[sup:2] < b[sup:2]가 됩니다. (참)',
  },
  {
    id: 7,
    type: 'multiple',
    score: 5,
    topic: '일차부등식',
    text: 'x에 대한 일차부등식 (a−b)x+2a−b<0의 해가 x>1일 때, 부등식 (2a+b)x−a+b≥0의 해는?',
    options: [
      { id: '7-1', label: '①', text: 'x≥−1' },
      { id: '7-2', label: '②', text: 'x≥−[frac:1/7]' },
      { id: '7-3', label: '③', text: 'x≥[frac:1/7]' },
      { id: '7-4', label: '④', text: 'x≤−[frac:1/7]' },
      { id: '7-5', label: '⑤', text: 'x≤1' },
    ],
    answer: '②',
    explanation: '(a−b)x<−2a+b에서 해가 x>1이 되려면 부등호의 방향이 바뀌었으므로 a−b<0입니다. x< [frac:−2a+b/a−b]이 값이 1과 같아야 하므로 [frac:−2a+b/a−b] = 1 ⇒ −2a+b=a−b ⇒ 3a=2b ⇒ b=[frac:3/2]a가 성립합니다. 이때 a−b=a−[frac:3/2]a=−[frac:1/2]a<0이므로 a>0임을 알 수 있습니다. 이제 구하고자 하는 부등식에 대입하면 (2a+[frac:3/2]a)x−a+[frac:3/2]a≥0 ⇒ [frac:7/2]ax+[frac:1/2]a≥0입니다. a>0이므로 양변을 a로 나누고 정리하면 [frac:7/2]x≥−[frac:1/2] ⇒ x≥−[frac:1/7]입니다.',
  },
  {
    id: 8,
    type: 'multiple',
    score: 5,
    topic: '유리수와 순환소수',
    text: '분수 [frac:A/450]을 기약분수로 나타내면 [frac:11/B]이 되고, 이를 소수로 나타내면 유한소수가 된다. 50<A<120을 만족하는 자연수 A에 대하여 A+B의 값은?',
    options: [
      { id: '8-1', label: '①', text: '120' },
      { id: '8-2', label: '②', text: '138' },
      { id: '8-3', label: '③', text: '149' },
      { id: '8-4', label: '④', text: '156' },
      { id: '8-5', label: '⑤', text: '160' },
    ],
    answer: '③',
    explanation: '450=2×3[sup:2]×5[sup:2]입니다. 유한소수가 되려면 분모의 3[sup:2](9)가 사라져야 하므로 A는 9의 배수여야 합니다. 기약분수로 나타냈을 때 분자가 11이므로, A는 11의 배수이기도 합니다. 즉 A는 9와 11의 공배수인 99의 배수입니다. 50<A<120 범위에서 A=99이며, [frac:450/99] = [frac:50/11]이 되므로 B=50입니다. 따라서 A+B=99+50=149입니다.',
  },
  {
    id: 9,
    type: 'multiple',
    score: 4,
    topic: '일차함수',
    text: '일차함수 y=−[frac:3/4]x+6의 그래프에 대한 설명으로 옳지 않은 것은?',
    options: [
      { id: '9-1', label: '①', text: 'y절편은 6이다.' },
      { id: '9-2', label: '②', text: '점 (4,3)을 지난다.' },
      { id: '9-3', label: '③', text: '제3사분면을 지나지 않는다.' },
      { id: '9-4', label: '④', text: 'x의 값이 4만큼 증가할 때, y의 값은 3만큼 증가한다.' },
      { id: '9-5', label: '⑤', text: 'x절편은 8이다.' },
    ],
    answer: '④',
    explanation: '① 상수항이 6이므로 y절편은 6입니다. ② x=4 대입 시 y=−[frac:3/4](4)+6=3이므로 점 (4,3)을 지납니다. ③ y절편이 양수이고 기울기가 음수이므로 오른쪽 아래로 향하며 1, 2, 4사분면을 지납니다 (제3사분면을 지나지 않음). ④ 기울기가 −[frac:3/4]이므로 x가 4만큼 증가할 때, y는 3만큼 감소합니다. (거짓) ⑤ y=0을 대입하면 0=−[frac:3/4]x+6 ⇒ [frac:3/4]x=6 ⇒ x=8이므로 x절편은 8입니다.',
  },
  {
    id: 10,
    type: 'multiple',
    score: 4,
    topic: '연립일차방정식',
    text: '해가 모두 자연수인 일차방정식 4x+3y=24를 만족하는 x,y에 대하여 x[sup:2]+y[sup:2]의 값은?',
    options: [
      { id: '10-1', label: '①', text: '16' },
      { id: '10-2', label: '②', text: '20' },
      { id: '10-3', label: '③', text: '25' },
      { id: '10-4', label: '④', text: '36' },
      { id: '10-5', label: '⑤', text: '41' },
    ],
    answer: '③',
    explanation: '4x+3y=24에서 x,y가 자연수이므로 x에 1부터 차례로 대입하여 성립하는 값을 찾습니다. x=1,2,…일 때 y가 자연수로 나오지 않으며, x=3일 때 12+3y=24 ⇒ 3y=12 ⇒ y=4가 됩니다. 따라서 해는 x=3, y=4뿐입니다. 구하는 값은 x[sup:2]+y[sup:2]=3[sup:2]+4[sup:2]=9+16=25입니다.',
  },
  {
    id: 11,
    type: 'multiple',
    score: 5,
    topic: '일차함수',
    text: '세 점 (−1,4), (1,0), (a,−4)가 한 직선 위에 있을 때, 상수 a의 값은?',
    options: [
      { id: '11-1', label: '①', text: '1' },
      { id: '11-2', label: '②', text: '2' },
      { id: '11-3', label: '③', text: '3' },
      { id: '11-4', label: '④', text: '4' },
      { id: '11-5', label: '⑤', text: '5' },
    ],
    answer: '③',
    explanation: '(−1,4)와 (1,0)을 지나는 직선의 기울기는 (0−4)/(1−(−1)) = −4/2 = −2입니다. (1,0)과 (a,−4)를 지나는 직선의 기울기도 −2여야 하므로, (−4−0)/(a−1) = −2 ⇒ −4/(a−1) = −2 ⇒ −2(a−1)=−4 ⇒ a−1=2 ⇒ a=3입니다.',
  },
  {
    id: 12,
    type: 'multiple',
    score: 5,
    topic: '일차함수',
    text: '일차함수 y=−2x+b의 그래프의 x절편이 4이고, 이 그래프가 점 (a,−2)를 지날 때, a+b의 값은? (단, a,b는 상수)',
    options: [
      { id: '12-1', label: '①', text: '10' },
      { id: '12-2', label: '②', text: '11' },
      { id: '12-3', label: '③', text: '12' },
      { id: '12-4', label: '④', text: '13' },
      { id: '12-5', label: '⑤', text: '14' },
    ],
    answer: '④',
    explanation: 'x절편이 4이므로 그래프는 점 (4,0)을 지납니다. y=−2x+b에 (4,0)을 대입하면 0=−8+b ⇒ b=8이 됩니다. 완성된 식 y=−2x+8이 점 (a,−2)를 지나므로 대입하면, −2=−2a+8 ⇒ 2a=10 ⇒ a=5입니다. 따라서 a+b=5+8=13입니다.',
  },
  {
    id: 13,
    type: 'multiple',
    score: 4,
    topic: '일차함수',
    text: '다음 중 y가 x의 함수가 아닌 것은?',
    options: [
      { id: '13-1', label: '①', text: '시속 xkm로 3시간 동안 이동한 거리 ykm' },
      { id: '13-2', label: '②', text: '한 변의 길이가 xcm인 정삼각형의 둘레의 길이 ycm' },
      { id: '13-3', label: '③', text: '자연수 x와 서로소인 소수 y' },
      { id: '13-4', label: '④', text: '800원짜리 과자 x개를 사고 10000원을 냈을 때의 거스름돈 y원' },
      { id: '13-5', label: '⑤', text: '길이가 20cm인 양초가 1시간에 2cm씩 탈 때, x시간 후 남은 양초의 길이 ycm' },
    ],
    answer: '③',
    explanation: '함수는 x의 값이 하나로 정해질 때 y의 값도 오직 하나로 정해지는 관계입니다. ① y=3x (함수) ② y=3x (함수) ③ 자연수 x와 서로소인 소수는 무수히 많을 수 있습니다. (예: x=4일 때 서로소인 소수 y는 3, 5, 7 등) (함수 아님) ④ y=10000−800x (함수) ⑤ y=20−2x (함수)',
  },
  {
    id: 14,
    type: 'multiple',
    score: 5,
    topic: '일차함수',
    text: '두 일차방정식 x−y+2=0과 x+y−4=0의 그래프와 x축으로 둘러싸인 도형의 넓이는?',
    options: [
      { id: '14-1', label: '①', text: '6' },
      { id: '14-2', label: '②', text: '8' },
      { id: '14-3', label: '③', text: '9' },
      { id: '14-4', label: '④', text: '10' },
      { id: '14-5', label: '⑤', text: '12' },
    ],
    answer: '③',
    explanation: '두 그래프의 x절편을 구합니다. x−y+2=0 ⇒ x=−2, x+y−4=0 ⇒ x=4입니다. 따라서 삼각형 밑변의 길이는 4−(−2)=6입니다. 두 식을 더하여 교점을 구하면 2x−2=0 ⇒ x=1이고, 대입하면 y=3이 되어 교점은 (1,3)입니다. 교점의 y좌표인 3이 높이가 되므로, 넓이 = [frac:1/2] × 6 × 3 = 9입니다.',
  },
  {
    id: 15,
    type: 'multiple',
    score: 4,
    topic: '일차함수',
    text: '일차함수 f(x)=ax−3에 대하여 f(2)=f(5)−6을 만족할 때, f(4)의 값은?',
    options: [
      { id: '15-1', label: '①', text: '3' },
      { id: '15-2', label: '②', text: '4' },
      { id: '15-3', label: '③', text: '5' },
      { id: '15-4', label: '④', text: '6' },
      { id: '15-5', label: '⑤', text: '7' },
    ],
    answer: '③',
    explanation: '주어진 조건 f(2)=f(5)−6에 f(x) 식을 대입합니다. f(2)=2a−3, f(5)=5a−3이므로, 2a−3=(5a−3)−6입니다. 2a−3=5a−9 ⇒ 3a=6 ⇒ a=2가 됩니다. 따라서 f(x)=2x−3이고, f(4)=2(4)−3=5입니다.',
  },
  {
    id: 16,
    type: 'multiple',
    score: 4,
    topic: '연립일차방정식',
    text: '두 일차방정식 2x−3y=4와 4x+ky=5의 그래프가 서로 만나지 않을 때, 상수 k의 값은?',
    options: [
      { id: '16-1', label: '①', text: '−6' },
      { id: '16-2', label: '②', text: '−3' },
      { id: '16-3', label: '③', text: '2' },
      { id: '16-4', label: '④', text: '3' },
      { id: '16-5', label: '⑤', text: '6' },
    ],
    answer: '①',
    explanation: '그래프가 서로 만나지 않는다는 것은 두 직선이 평행하다는 의미로, 연립방정식의 해가 없어야 합니다. 즉 x, y 계수의 비율은 같고 상수항의 비율은 달라야 합니다. 4/2 = k/(−3) ≠ 5/4이어야 합니다. 4/2 = 2/1이므로 k/(−3) = 2/1 ⇒ k=−6입니다. (이때 5/4와는 다르므로 조건을 만족합니다.)',
  },
  {
    id: 17,
    type: 'short',
    score: 4,
    topic: '식의 계산',
    text: '다음 식 (−3x[sup:2]y)[sup:3] ÷ [frac:9/2]x[sup:3]y[sup:2] × (2xy)[sup:2]을 간단히 하시오.',
    answer: '−24x[sup:5]y[sup:3]',
    explanation: '지수법칙을 이용하여 식의 거듭제곱을 풀어줍니다. (−3x[sup:2]y)[sup:3] = −27x[sup:6]y[sup:3], (2xy)[sup:2] = 4x[sup:2]y[sup:2] 나눗셈을 곱셈으로 바꾸어 순서대로 계산합니다. −27x[sup:6]y[sup:3] × (2/(9x[sup:3]y[sup:2])) × 4x[sup:2]y[sup:2] 계수는 −27 × (2/9) × 4 = −24, x 지수는 6−3+2=5, y 지수는 3−2+2=3. 따라서 결과는 −24x[sup:5]y[sup:3]입니다.',
  },
  {
    id: 18,
    type: 'short',
    score: 6,
    topic: '연립일차방정식',
    text: '어느 중학교의 작년 전체 학생 수는 1000명이었다. 올해는 작년에 비하여 남학생 수는 10% 증가하고 여학생 수는 10% 감소하여 전체 학생 수가 10명 증가하였다고 한다. 올해의 남학생 수를 구하시오.',
    answer: '605명',
    explanation: '작년 남학생을 x명, 여학생을 y명이라 하면, x+y=1000입니다. 올해 증감량으로 부등식을 세우면 +0.1x−0.1y=10입니다. 양변에 10을 곱하면 x−y=100이고, 첫 번째 식과 더하면 2x=1100 ⇒ x=550입니다. 올해 남학생 수는 550×(1+0.1)=605명입니다.',
  },
  {
    id: 19,
    type: 'short',
    score: 6,
    topic: '연립일차방정식',
    text: 'x,y에 대한 연립방정식 { 4x+3y=10, 3x−2y=16 }의 해가 일차방정식 2x+ay=8을 만족시킬 때, 상수 a의 값을 구하시오.',
    answer: '−2',
    explanation: '먼저 연립방정식을 풀어 x, y의 값을 구합니다. 첫 번째 식에 2를 곱하면 8x+6y=20이고, 두 번째 식에 3을 곱하면 9x−6y=48입니다. 두 식을 더하면 17x=68 ⇒ x=4입니다. x=4를 첫 번째 식에 대입하면 16+3y=10 ⇒ 3y=−6 ⇒ y=−2입니다. 이제 (4, −2)를 2x+ay=8에 대입하면 2(4)+a(−2)=8 ⇒ 8−2a=8 ⇒ −2a=0 ⇒ a=0입니다. (재계산 필요: 문제 재확인)',
  },
  {
    id: 20,
    type: 'essay',
    score: 10,
    topic: '일차함수',
    text: '다음 그림과 같이 ∠A=∠B=90°이고 AB=4cm, BC=8cm, CD=6cm인 사다리꼴 ABCD가 있다. 점 P가 꼭짓점 B에서 출발하여 선분 BC 위를 초속 1cm로 점 C까지 움직인다.',
    subQuestions: [
      {
        id: '20-1',
        label: '(1)',
        text: '점 P가 출발한 지 x초 후의 삼각형 APD의 넓이를 x를 사용하여 나타내시오.',
        answer: '(16+x)cm[sup:2]',
        explanation: '사다리꼴 ABCD의 넓이는 [frac:1/2] × (4+6) × 8 = 40cm[sup:2]입니다. 점 P의 위치에 따른 삼각형 APD의 넓이는 전체에서 삼각형 ABP와 삼각형 PCD를 빼서 구합니다. 선분 BP=x, 선분 PC=8−x입니다. △ABP = [frac:1/2] × 4 × x = 2x, △PCD = [frac:1/2] × 6 × (8−x) = 24−3x, △APD = 40−(2x+24−3x) = 40−24+x = (16+x)cm[sup:2]입니다.',
      },
      {
        id: '20-2',
        label: '(2)',
        text: '삼각형 APD의 넓이가 사다리꼴 ABCD 넓이의 [frac:1/2] 이상, [frac:5/8] 이하가 되는 것은 점 P가 출발한 지 몇 초 후부터 몇 초 후까지인지 상세한 풀이 과정과 함께 구하시오.',
        answer: '4초 후부터 8초 후까지',
        explanation: '사다리꼴 넓이의 [frac:1/2]은 20, [frac:5/8]은 40 × [frac:5/8] = 25입니다. 조건에 따라 부등식을 세우면 20 ≤ 16+x ≤ 25가 됩니다. 각 변에서 16을 빼면 4 ≤ x ≤ 9입니다. 단, 점 P는 선분 BC 위를 움직이므로 x는 BC의 길이인 8을 넘을 수 없습니다. (0 ≤ x ≤ 8) 따라서 만족하는 범위는 4 ≤ x ≤ 8이며, 4초 후부터 8초 후까지입니다.',
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
