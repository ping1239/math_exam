// Design: Modern EduTech — Deep Navy + Amber Gold
// 중학교 2-1 기말시험 (4회) - 매홀중학교 변형 문제 모의평가

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

export const EXAM_TITLE = '중학교 2-1 기말시험 (4회)';
export const EXAM_SUBTITLE = '매홀중학교 변형 문제 모의평가';
export const TOTAL_SCORE = 97;

export const questions: Question[] = [
  {
    id: 1,
    type: 'multiple',
    score: 5,
    topic: '지수법칙과 부등식의 활용',
    text: '일반적으로 종이의 두께를 나타내는 단위는 μm이다. 두께가 125μm인 직사각형 모양의 종이가 있다. 이 종이를 반으로 접기를 반복하여 두께를 256mm 이상으로 만들려면 최소 몇 번 접어야 하는가? (단, 1mm=1000μm 이고, 2[sup:10]=1024, 2[sup:11]=2048 이다.)',
    options: [
      { id: '1-1', label: '①', text: '9번' },
      { id: '1-2', label: '②', text: '10번' },
      { id: '1-3', label: '③', text: '11번' },
      { id: '1-4', label: '④', text: '12번' },
      { id: '1-5', label: '⑤', text: '13번' },
    ],
    answer: '③',
    explanation: '목표 두께를 μm 단위로 맞춥니다. 256mm=256×1000μm=256000μm 입니다. 종이를 n번 접었을 때의 두께는 125×2[sup:n] μm 가 됩니다. 부등식을 세우면 125×2[sup:n] ≥256000 입니다. 양변을 125로 나누면 2[sup:n] ≥2048 이 됩니다. 문제의 조건에서 2[sup:11]=2048 이므로 최소 11번을 접어야 합니다.',
  },
  {
    id: 2,
    type: 'multiple',
    score: 4,
    topic: '함수의 뜻과 정의',
    text: '다음 중 y가 x의 함수가 아닌 것은?',
    options: [
      { id: '2-1', label: '①', text: '한 변의 길이가 xcm인 정사각형의 둘레의 길이 ycm' },
      { id: '2-2', label: '②', text: '자연수 x의 배수 y' },
      { id: '2-3', label: '③', text: '반지름의 길이가 xcm인 원의 넓이 ycm[sup:2]' },
      { id: '2-4', label: '④', text: '시속 5km로 x시간 동안 이동한 거리 ykm' },
      { id: '2-5', label: '⑤', text: '1000원을 내고 x원짜리 지우개를 1개 샀을 때의 거스름돈 y원' },
    ],
    answer: '②',
    explanation: '함수란 x값 하나에 y값이 오직 한 개만 대응하는 관계입니다.\n① y=4x (함수)\n② 배수는 무수히 많으므로 x가 하나 정해질 때 y가 여러 개 대응합니다. (예: 2의 배수는 2, 4, 6...) (함수 아님)\n③ y=πx[sup:2] (함수, 이차함수)\n④ y=5x (함수)\n⑤ y=1000−x (함수)',
  },
  {
    id: 3,
    type: 'multiple',
    score: 5,
    topic: '일차부등식',
    text: 'x에 대한 일차부등식 a(x−2)<3x+1 의 해가 x>−5 일 때, 상수 a의 값은?',
    options: [
      { id: '3-1', label: '①', text: '−2' },
      { id: '3-2', label: '②', text: '−1' },
      { id: '3-3', label: '③', text: '1' },
      { id: '3-4', label: '④', text: '2' },
      { id: '3-5', label: '⑤', text: '3' },
    ],
    answer: '④',
    explanation: '주어진 부등식 a(x−2)<3x+1 을 전개하여 정리합니다. ax−2a<3x+1⇒(a−3)x<2a+1\n이 부등식의 해가 x>−5 로 부등호의 방향이 바뀌었으므로 a−3<0 입니다. 양변을 a−3 으로 나누면 x>[frac:2a+1/a−3] 이 됩니다.\n이 값이 −5 와 같아야 하므로 [frac:2a+1/a−3]=−5 입니다.\n2a+1=−5(a−3)⇒2a+1=−5a+15⇒7a=14⇒a=2 입니다. (a−3<0 조건도 만족합니다.)',
  },
  {
    id: 4,
    type: 'multiple',
    score: 5,
    topic: '연립일차방정식 활용',
    text: '어느 중학교의 작년 전체 학생 수는 900명이었다. 올해는 작년에 비하여 남학생 수는 5% 증가하고 여학생 수는 8% 감소하여 전체 학생 수가 7명 감소하였다고 한다. 올해의 여학생 수는?',
    options: [
      { id: '4-1', label: '①', text: '368명' },
      { id: '4-2', label: '②', text: '382명' },
      { id: '4-3', label: '③', text: '400명' },
      { id: '4-4', label: '④', text: '414명' },
      { id: '4-5', label: '⑤', text: '460명' },
    ],
    answer: '①',
    explanation: '작년 남학생을 x명, 여학생을 y명이라 하면, x+y=900 입니다.\n증감량으로 식을 세우면 +0.05x−0.08y=−7 입니다.\n양변에 100을 곱하면 5x−8y=−700 입니다. 첫 번째 식의 양변에 5를 곱하면 5x+5y=4500 이고, 두 식을 빼면 (−13y)=−5200⇒y=400 입니다.\n올해의 여학생 수는 작년보다 8% 감소했으므로 400×(1−0.08)=400×0.92=368명입니다.',
  },
  {
    id: 5,
    type: 'multiple',
    score: 4,
    topic: '일차함수',
    text: '세 점 (1,−1),(3,3),(k,7) 이 한 직선 위에 있을 때, 상수 k의 값은?',
    options: [
      { id: '5-1', label: '①', text: '2' },
      { id: '5-2', label: '②', text: '3' },
      { id: '5-3', label: '③', text: '4' },
      { id: '5-4', label: '④', text: '5' },
      { id: '5-5', label: '⑤', text: '6' },
    ],
    answer: '④',
    explanation: '점 (1,−1) 과 (3,3) 을 지나는 직선의 기울기는 [frac:3−(−1)/3−1] = [frac:4/2] = 2 입니다.\n점 (3,3) 과 (k,7) 을 지나는 직선의 기울기도 2가 되어야 하므로 [frac:7−3/k−3]=2⇒[frac:4/k−3]=2⇒2(k−3)=4⇒k−3=2⇒k=5 입니다.',
  },
  {
    id: 6,
    type: 'multiple',
    score: 5,
    topic: '다항식의 혼합 계산',
    text: '밑면의 반지름의 길이가 2xy인 원기둥이 있다. 이 원기둥의 부피가 12πx[sup:3]y[sup:2]−8πx[sup:2]y[sup:3] 일 때, 이 원기둥의 높이는?',
    options: [
      { id: '6-1', label: '①', text: '3x−2y' },
      { id: '6-2', label: '②', text: '3x−4y' },
      { id: '6-3', label: '③', text: '4x−2y' },
      { id: '6-4', label: '④', text: '6x−2y' },
      { id: '6-5', label: '⑤', text: '6x−4y' },
    ],
    answer: '①',
    explanation: '원기둥의 밑넓이는 π×(2xy)[sup:2] = 4πx[sup:2]y[sup:2] 입니다.\n원기둥의 부피 = (밑넓이)×(높이) 이므로, (높이)= [frac:12πx[sup:3]y[sup:2]−8πx[sup:2]y[sup:3]/4πx[sup:2]y[sup:2]] = [frac:12πx[sup:3]y[sup:2]/4πx[sup:2]y[sup:2]] − [frac:8πx[sup:2]y[sup:3]/4πx[sup:2]y[sup:2]] = 3x−2y 입니다.',
  },
  {
    id: 7,
    type: 'multiple',
    score: 5,
    topic: '순환소수',
    text: '분수 [frac:1/20], [frac:1/21], …, [frac:1/80] 중에서 순환소수로만 나타낼 수 있는 분수의 개수는?',
    options: [
      { id: '7-1', label: '①', text: '51개' },
      { id: '7-2', label: '②', text: '52개' },
      { id: '7-3', label: '③', text: '53개' },
      { id: '7-4', label: '④', text: '54개' },
      { id: '7-5', label: '⑤', text: '55개' },
    ],
    answer: '④',
    explanation: '주어진 분수의 총 개수는 80−20+1=61개입니다.\n분자가 모두 1이므로, 유한소수가 되려면 분모가 오직 2나 5만의 소인수로 이루어져야 합니다.\n범위 내에 해당하는 분모는 20, 25, 32, 40, 50, 64, 80 으로 총 7개입니다.\n따라서 순환소수로만 나타낼 수 있는 분수의 개수는 61−7=54개입니다.',
  },
  {
    id: 8,
    type: 'multiple',
    score: 5,
    topic: '일차함수',
    text: '두 일차방정식 x−y−2=0 과 2x+y−7=0 의 그래프의 교점을 지나고, y절편이 5인 직선을 일차함수 y=ax+b 의 꼴로 나타낼 때, 3a+b 의 값은?',
    options: [
      { id: '8-1', label: '①', text: '1' },
      { id: '8-2', label: '②', text: '2' },
      { id: '8-3', label: '③', text: '3' },
      { id: '8-4', label: '④', text: '4' },
      { id: '8-5', label: '⑤', text: '5' },
    ],
    answer: '①',
    explanation: '교점을 구하기 위해 연립방정식을 풉니다. x−y=2 에 2를 곱하면 2x−2y=4 이고, 이를 2x+y=7 에서 빼면 −3y=−3⇒y=1 입니다. y=1 을 대입하면 x=3 이므로 교점은 (3,1) 입니다.\n이 점과 y절편이 5인 점 (0,5) 를 지나는 직선의 기울기 a는 [frac:5−1/0−3] = −[frac:4/3] 입니다. b는 y절편이므로 5 입니다.\n따라서 3a+b=3(−[frac:4/3])+5=−4+5=1 입니다.',
  },
  {
    id: 9,
    type: 'multiple',
    score: 4,
    topic: '다항식의 덧셈과 뺄셈',
    text: '다항식 3(2x−y)−2(x−3y+2) 를 간단히 하였을 때, x의 계수, y의 계수, 상수항의 합은?',
    options: [
      { id: '9-1', label: '①', text: '1' },
      { id: '9-2', label: '②', text: '2' },
      { id: '9-3', label: '③', text: '3' },
      { id: '9-4', label: '④', text: '4' },
      { id: '9-5', label: '⑤', text: '5' },
    ],
    answer: '③',
    explanation: '주어진 식을 전개하면 6x−3y−2x+6y−4 입니다.\n동류항끼리 묶어 정리하면 4x+3y−4 가 됩니다.\nx의 계수는 4, y의 계수는 3, 상수항은 −4 입니다.\n따라서 세 수의 합은 4+3+(−4)=3 입니다.',
  },
  {
    id: 10,
    type: 'multiple',
    score: 4,
    topic: '부등식의 성질',
    text: 'a>0, b<0 이고 |a|<|b| 일 때, 다음 중 항상 옳은 것은?',
    options: [
      { id: '10-1', label: '①', text: 'a+b>0' },
      { id: '10-2', label: '②', text: 'a−b<0' },
      { id: '10-3', label: '③', text: 'ab>0' },
      { id: '10-4', label: '④', text: '[frac:a/b]>0' },
      { id: '10-5', label: '⑤', text: 'a[sup:2]<b[sup:2]' },
    ],
    answer: '⑤',
    explanation: 'a는 양수, b는 음수이고 절댓값은 b가 더 큽니다. (예: a=2,b=−3)\n① 절댓값이 큰 음수와 더하므로 a+b<0 (거짓)\n② 양수에서 음수를 빼므로 a−b>0 (거짓)\n③ 양수와 음수의 곱이므로 ab<0 (거짓)\n④ 양수를 음수로 나누므로 [frac:a/b]<0 (거짓)\n⑤ 절댓값이 더 큰 수의 제곱이 더 크므로 양변 제곱 시 a[sup:2]<b[sup:2] (참)',
  },
  {
    id: 11,
    type: 'multiple',
    score: 5,
    topic: '일차방정식',
    text: 'x,y가 자연수일 때, 일차방정식 3x+4y=48 을 만족시키는 해 (x,y)에 대하여 x+y 의 최댓값은?',
    options: [
      { id: '11-1', label: '①', text: '12' },
      { id: '11-2', label: '②', text: '13' },
      { id: '11-3', label: '③', text: '14' },
      { id: '11-4', label: '④', text: '15' },
      { id: '11-5', label: '⑤', text: '16' },
    ],
    answer: '④',
    explanation: '3x+4y=48 에서 x,y가 자연수이므로 y를 기준으로 대입해 봅니다. 4y가 4의 배수이고 48도 4의 배수이므로 3x도 4의 배수여야 합니다. 즉 x는 4의 배수입니다.\nx=4 일 때 12+4y=48⇒4y=36⇒y=9 (합: 13)\nx=8 일 때 24+4y=48⇒4y=24⇒y=6 (합: 14)\nx=12 일 때 36+4y=48⇒4y=12⇒y=3 (합: 15)\nx=16 일 때 48+4y=48⇒4y=0⇒y=0 (자연수 아님)\n따라서 x+y 의 최댓값은 15입니다.',
  },
  {
    id: 12,
    type: 'multiple',
    score: 4,
    topic: '일차함수',
    text: '일차함수 y=3x−5 의 그래프와 평행하고 점 (1,−4) 를 지나는 일차함수의 식은 y=ax+b 이다. 이때 a−b 의 값은?',
    options: [
      { id: '12-1', label: '①', text: '8' },
      { id: '12-2', label: '②', text: '9' },
      { id: '12-3', label: '③', text: '10' },
      { id: '12-4', label: '④', text: '11' },
      { id: '12-5', label: '⑤', text: '12' },
    ],
    answer: '③',
    explanation: 'y=3x−5 와 평행하므로 기울기 a=3 입니다. 식은 y=3x+b 이고 점 (1,−4) 를 지나므로 대입하면, −4=3(1)+b⇒b=−7 입니다.\n따라서 a=3, b=−7 이며, a−b=3−(−7)=10 입니다.',
  },
  {
    id: 13,
    type: 'multiple',
    score: 4,
    topic: '연립일차방정식',
    text: 'x,y에 대한 연립일차방정식 { 2x+y=3, 4x+ay=b } 의 해가 무수히 많을 때, a+b 의 값은? (단, a,b는 상수)',
    options: [
      { id: '13-1', label: '①', text: '6' },
      { id: '13-2', label: '②', text: '7' },
      { id: '13-3', label: '③', text: '8' },
      { id: '13-4', label: '④', text: '9' },
      { id: '13-5', label: '⑤', text: '10' },
    ],
    answer: '③',
    explanation: '해가 무수히 많으려면 두 일차방정식이 일치해야 하므로 계수비가 같아야 합니다. [frac:4/2] = [frac:a/1] = [frac:b/3]\n[frac:4/2] = 2 이므로 a=2, [frac:b/3] = 2⇒b=6 입니다. 따라서 a+b=2+6=8 입니다.',
  },
  {
    id: 14,
    type: 'multiple',
    score: 4,
    topic: '일차함수',
    text: '일차함수 y=−[frac:1/2]x+4 의 그래프에 대한 설명으로 옳지 않은 것은?',
    options: [
      { id: '14-1', label: '①', text: 'x절편은 8이다.' },
      { id: '14-2', label: '②', text: 'y절편은 4이다.' },
      { id: '14-3', label: '③', text: '점 (2,3)을 지난다.' },
      { id: '14-4', label: '④', text: '제3사분면을 지나지 않는다.' },
      { id: '14-5', label: '⑤', text: 'x의 값이 2만큼 증가할 때, y의 값은 1만큼 증가한다.' },
    ],
    answer: '⑤',
    explanation: '① 0=−[frac:1/2]x+4⇒x=8 이므로 x절편은 8입니다.\n② 상수항이 4이므로 y절편은 4입니다.\n③ x=2 를 대입하면 y=−1+4=3 이므로 점 (2,3)을 지납니다.\n④ y절편이 양수이고 기울기가 음수이므로 제1, 2, 4사분면을 지납니다. (제3사분면 지나지 않음)\n⑤ 기울기가 −[frac:1/2] 이므로 x가 2만큼 증가할 때 y의 값은 1만큼 감소합니다. (거짓)',
  },
  {
    id: 15,
    type: 'multiple',
    score: 5,
    topic: '유리수와 순환소수',
    text: '분수 [frac:A/120] 를 소수로 나타내면 유한소수이고, 기약분수로 나타내면 [frac:7/B] 이 된다. 20<A<40 을 만족하는 자연수 A에 대하여 A+B 의 값은?',
    options: [
      { id: '15-1', label: '①', text: '51' },
      { id: '15-2', label: '②', text: '61' },
      { id: '15-3', label: '③', text: '71' },
      { id: '15-4', label: '④', text: '81' },
      { id: '15-5', label: '⑤', text: '91' },
    ],
    answer: '②',
    explanation: '120=2[sup:3]×3×5 입니다. 유한소수가 되려면 분모의 3이 약분되어야 하므로 A는 3의 배수입니다.\n기약분수의 분자가 7이므로, A는 7의 배수이기도 합니다. 즉 A는 21의 배수입니다. 조건 20<A<40 에서 가능한 자연수는 A=21 뿐입니다.\n[frac:21/120] = [frac:7/40] 이므로 B=40 입니다. 따라서 A+B=21+40=61 입니다.',
  },
  {
    id: 16,
    type: 'multiple',
    score: 5,
    topic: '일차함수',
    text: '두 일차방정식 x−y=−2 와 x+2y=4 의 그래프 및 x축으로 둘러싸인 도형의 넓이는?',
    options: [
      { id: '16-1', label: '①', text: '3' },
      { id: '16-2', label: '②', text: '4' },
      { id: '16-3', label: '③', text: '5' },
      { id: '16-4', label: '④', text: '6' },
      { id: '16-5', label: '⑤', text: '8' },
    ],
    answer: '④',
    explanation: '각 그래프의 x절편을 구합니다.\nx−y=−2⇒x절편은 −2, x+2y=4⇒x절편은 4\n밑변의 길이는 4−(−2)=6 입니다.\n교점의 y좌표가 높이가 됩니다. 연립하면 x−y=−2 에서 x=y−2 이고 이를 대입하면 (y−2)+2y=4⇒3y=6⇒y=2 입니다.\n높이는 2이므로, 넓이는 [frac:1/2]×6×2=6 입니다.',
  },
  {
    id: 17,
    type: 'short',
    score: 5,
    topic: '연립방정식',
    text: 'x,y에 대한 연립방정식 { ax+by=5, bx−ay=−5 } 의 해가 x=3,y=−1 일 때, a−b 의 값을 구하시오. (단, a,b는 상수)',
    answer: '5/2',
    explanation: '해 x=3,y=−1 을 두 식에 각각 대입합니다.\n3a−b=5…㉠\n3b−a=−5⇒−a+3b=−5…㉡\n3a−b=5⇒b=3a−5 입니다. 이를 ㉡에 대입합니다.\n3(3a−5)−a=−5⇒9a−15−a=−5⇒8a=10⇒a=[frac:5/4] 입니다.\nb=[frac:15/4]−[frac:20/4]=−[frac:5/4] 이 됩니다.\na−b=[frac:5/4]−(−[frac:5/4])=[frac:10/4]=[frac:5/2] 입니다.',
  },
  {
    id: 18,
    type: 'short',
    score: 5,
    topic: '일차함수',
    text: '일차함수 y=f(x) 에 대하여 f(1)=3 이고 f(3)=7 일 때, f(5) 의 값을 구하시오.',
    answer: '11',
    explanation: 'f(x)=ax+b 라 두면, 그래프가 (1,3) 과 (3,7) 을 지납니다.\n기울기 a=[frac:7−3/3−1] = [frac:4/2] = 2 입니다. f(x)=2x+b 에 (1,3) 을 대입하면 3=2+b⇒b=1 입니다.\n따라서 f(x)=2x+1 이고, 구하고자 하는 f(5)=2(5)+1=11 입니다.',
  },
  {
    id: 19,
    type: 'short',
    score: 6,
    topic: '일차함수의 활용',
    text: '다음 그림과 같이 가로의 길이가 8cm, 세로의 길이가 5cm인 직사각형 ABCD가 있다. 점 P가 점 B를 출발하여 선분 BC 위를 초속 2cm로 점 C까지 움직인다. 점 P가 출발한 지 몇 초 후에 사각형 APCD의 넓이가 28cm[sup:2] 가 되는지 구하시오.',
    imageUrl: '/images/IMG_0487.PNG',
    answer: '2.4초 후 (또는 12/5초 후)',
    explanation: '점 P가 초속 2cm로 이동하므로 x초 후 선분 BP의 길이는 2x가 됩니다.\n직사각형 ABCD의 전체 넓이는 8×5=40cm[sup:2] 입니다.\n사각형 APCD의 넓이는 전체 넓이에서 직각삼각형 ABP의 넓이를 뺀 것과 같습니다. △ABP=[frac:1/2]×5×2x=5x\n사각형 APCD 넓이 =40−5x 가 됩니다. 이 넓이가 28이 되어야 하므로 40−5x=28⇒5x=12⇒x=2.4 입니다.\n따라서 2.4초 후입니다.',
  },
  {
    id: 20,
    type: 'essay',
    score: 10,
    topic: '일차부등식의 활용',
    text: '다음 그림과 같이 ∠A=∠B=90[sup:∘] 이고 AB=4cm, BC=12cm, CD=6cm 인 사다리꼴 ABCD가 있다. 점 P가 꼭짓점 B에서 출발하여 선분 BC 위를 움직인다. 삼각형 APD의 넓이가 사다리꼴 ABCD 넓이의 [frac:1/2] 이상, [frac:5/6] 이하가 되도록 할 때, 선분 BP의 길이의 범위를 구하는 상세한 풀이 과정을 적고 답을 구하시오.',
    imageUrl: '/images/IMG_0488.PNG',
    subQuestions: [
      {
        id: '20-1',
        label: '(1)',
        text: '선분 BP의 길이를 x라 할 때 삼각형 APD의 넓이를 x로 나타내시오.',
        answer: '(24+x)cm²',
        explanation: '선분 BP의 길이를 xcm 라 하면, 선분 PC의 길이는 (12−x)cm 입니다.\n사다리꼴 ABCD의 넓이는 [frac:1/2]×(4+6)×12=60cm[sup:2] 입니다.\n삼각형 APD의 넓이는 전체 넓이에서 △ABP와 △PCD를 빼서 구합니다.\n△ABP=[frac:1/2]×4×x=2x\n△PCD=[frac:1/2]×6×(12−x)=36−3x\n△APD=60−(2x+36−3x)=60−36+x=(24+x)cm[sup:2] 입니다.',
      },
      {
        id: '20-2',
        label: '(2)',
        text: '선분 BP의 길이의 범위를 구하는 상세한 풀이 과정을 적고 답을 구하시오.',
        answer: '6cm ≤ BP ≤ 12cm',
        explanation: '조건에서 삼각형의 넓이가 사다리꼴 넓이의 [frac:1/2] 이상, [frac:5/6] 이하라고 하였으므로,\n60×[frac:1/2]≤24+x≤60×[frac:5/6]\n30≤24+x≤50\n각 변에서 24를 빼면 6≤x≤26 이 됩니다. 그런데 점 P는 선분 BC 위를 움직이므로 최대 이동 길이는 12cm를 넘을 수 없습니다. (즉, x≤12)\n따라서 조건을 만족하는 x의 범위는 6≤x≤12 이며, 답은 6cm 이상 12cm 이하입니다.',
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
