// Design: Modern EduTech — Deep Navy + Amber Gold
// 중학교 2-1 기말시험 (5회) - 매홀중학교 변형 문제 모의평가

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

export const EXAM_TITLE = '중학교 2-1 기말시험 (5회)';
export const EXAM_SUBTITLE = '매홀중학교 변형 문제 모의평가';
export const TOTAL_SCORE = 102;

export const questions: Question[] = [
  {
    id: 1,
    type: 'multiple',
    score: 4,
    topic: '함수의 뜻과 정의',
    text: '다음 중 y가 x의 함수가 아닌 것은?',
    options: [
      { id: '1-1', label: '①', text: '길이가 50cm인 끈에서 xcm를 잘라내고 남은 끈의 길이 ycm' },
      { id: '1-2', label: '②', text: '한 변의 길이가 xcm인 정육면체의 겉넓이 ycm[sup:2]' },
      { id: '1-3', label: '③', text: '시속 10km의 속력으로 x시간 동안 달린 거리 ykm' },
      { id: '1-4', label: '④', text: '무게가 200g인 책 x권의 총 무게 yg' },
      { id: '1-5', label: '⑤', text: '자연수 x의 약수 y' },
    ],
    answer: '⑤',
    explanation: '함수는 x의 값 하나에 y의 값이 오직 하나만 결정되는 관계입니다.\n① y=50−x (함수)\n② y=6x[sup:2] (함수, 이차함수)\n③ y=10x (함수)\n④ y=200x (함수)\n⑤ 어떤 자연수 x의 약수는 여러 개일 수 있으므로(예: x=4일 때 약수 y는 1, 2, 4) 하나로 결정되지 않아 함수가 아닙니다.',
  },
  {
    id: 2,
    type: 'multiple',
    score: 5,
    topic: '지수법칙과 부등식의 활용',
    text: '일반적으로 종이의 두께를 나타내는 단위는 μm이다. 두께가 250μm인 직사각형 모양의 종이가 있다. 이 종이를 그림과 같이 반으로 접기를 반복하여 두께를 512mm 이상으로 만들려면 최소한 몇 번 접어야 하는가? (단, 1mm=1000μm 이고, 2[sup:10]=1024, 2[sup:11]=2048 이다.)',
    options: [
      { id: '2-1', label: '①', text: '9번' },
      { id: '2-2', label: '②', text: '10번' },
      { id: '2-3', label: '③', text: '11번' },
      { id: '2-4', label: '④', text: '12번' },
      { id: '2-5', label: '⑤', text: '13번' },
    ],
    answer: '③',
    explanation: '목표 두께의 단위를 μm 로 통일하면 512mm=512×1000μm=512,000μm 입니다. 종이를 n번 접었을 때의 두께는 250×2[sup:n] μm 입니다.\n부등식을 세우면 250×2[sup:n] ≥512000\n양변을 250으로 나누면 2[sup:n] ≥ [frac:512000/250] = 2048 이 됩니다. 주어진 조건에서 2[sup:11]=2048 이므로 최소 11번을 접어야 합니다.',
  },
  {
    id: 3,
    type: 'multiple',
    score: 5,
    topic: '유리수와 순환소수',
    text: '분수 [frac:1/10], [frac:1/11], [frac:1/12], …, [frac:1/60] 중에서 순환소수로만 나타낼 수 있는 수의 개수는?',
    options: [
      { id: '3-1', label: '①', text: '42개' },
      { id: '3-2', label: '②', text: '43개' },
      { id: '3-3', label: '③', text: '44개' },
      { id: '3-4', label: '④', text: '45개' },
      { id: '3-5', label: '⑤', text: '46개' },
    ],
    answer: '③',
    explanation: '전체 분수의 개수는 60−10+1=51개 입니다.\n분자가 1이므로 분모의 소인수가 2나 5뿐인 것을 찾으면 유한소수의 개수를 알 수 있습니다.\n해당하는 분모는 10, 16, 20, 25, 32, 40, 50 으로 총 7개입니다.\n순환소수 개수 = 전체 개수 - 유한소수 개수 = 51−7=44개 입니다.',
  },
  {
    id: 4,
    type: 'multiple',
    score: 5,
    topic: '일차부등식',
    text: 'x에 대한 일차부등식 (a−2b)x+a+b<0 의 해가 x>−2 일 때, x에 대한 일차부등식 (a+b)x−2a+b≥0 의 해는?',
    options: [
      { id: '4-1', label: '①', text: 'x≥[frac:3/2]' },
      { id: '4-2', label: '②', text: 'x≤[frac:3/2]' },
      { id: '4-3', label: '③', text: 'x≥−[frac:3/2]' },
      { id: '4-4', label: '④', text: 'x≤−[frac:3/2]' },
      { id: '4-5', label: '⑤', text: 'x≤2' },
    ],
    answer: '②',
    explanation: '(a−2b)x<−a−b 에서 해가 x>−2 로 부등호 방향이 바뀌었으므로 a−2b<0 입니다. 해를 구하면 x> [frac:−a−b/a−2b] 이고, 이 값이 −2 와 같아야 하므로 [frac:−a−b/a−2b]=−2⇒−a−b=−2a+4b⇒a=5b 입니다. 이때 a−2b<0 에 대입하면 5b−2b<0⇒3b<0⇒b<0 임을 알 수 있습니다.\n이제 구할 부등식 (a+b)x−2a+b≥0 에 a=5b 를 대입하면 (5b+b)x−10b+b≥0⇒6bx−9b≥0⇒6bx≥9b 입니다.\n양변을 6b로 나누는데, b<0 이므로 부등호 방향이 바뀝니다. x≤[frac:9b/6b]⇒x≤[frac:3/2] 입니다.',
  },
  {
    id: 5,
    type: 'multiple',
    score: 5,
    topic: '다항식의 곱셈과 나눗셈',
    text: '크기가 같은 마름모 6개를 겹치지 않게 붙여 만든 도형의 전체 넓이가 9x[sup:4]y[sup:6] 이다. 마름모 1개의 한 대각선의 길이가 [frac:3/2]x[sup:2]y[sup:3] 일 때, 다른 대각선의 길이는?',
    options: [
      { id: '5-1', label: '①', text: 'x[sup:2]y[sup:3]' },
      { id: '5-2', label: '②', text: '2x[sup:2]y[sup:3]' },
      { id: '5-3', label: '③', text: '3x[sup:2]y[sup:3]' },
      { id: '5-4', label: '④', text: 'x[sup:3]y[sup:2]' },
      { id: '5-5', label: '⑤', text: '2x[sup:3]y[sup:2]' },
    ],
    answer: '②',
    explanation: '마름모 6개의 넓이가 9x[sup:4]y[sup:6] 이므로 마름모 1개의 넓이는 [frac:9x[sup:4]y[sup:6]/6] = [frac:3/2]x[sup:4]y[sup:6] 입니다.\n마름모 넓이 구하는 공식은 [frac:1/2]×(한 대각선)×(다른 대각선) 이므로, [frac:1/2]×[frac:3/2]x[sup:2]y[sup:3]×(다른 대각선)=[frac:3/2]x[sup:4]y[sup:6]\n[frac:3/4]x[sup:2]y[sup:3]×(다른 대각선)=[frac:3/2]x[sup:4]y[sup:6]\n(다른 대각선)=[frac:3/2]x[sup:4]y[sup:6] ÷ [frac:3/4]x[sup:2]y[sup:3] = [frac:3/2]x[sup:4]y[sup:6] × [frac:4/3x[sup:2]y[sup:3]] = 2x[sup:2]y[sup:3] 입니다.',
  },
  {
    id: 6,
    type: 'multiple',
    score: 5,
    topic: '연립일차방정식 활용',
    text: '어느 생태 체험관에는 거미(다리 8개)와 딱정벌레(다리 6개)가 합하여 모두 15마리 전시되어 있고, 다리의 수는 총 104개이다. 이때 거미는 몇 마리인가?',
    options: [
      { id: '6-1', label: '①', text: '5마리' },
      { id: '6-2', label: '②', text: '6마리' },
      { id: '6-3', label: '③', text: '7마리' },
      { id: '6-4', label: '④', text: '8마리' },
      { id: '6-5', label: '⑤', text: '9마리' },
    ],
    answer: '③',
    explanation: '거미를 x마리, 딱정벌레를 y마리라 하면,\nx+y=15\n8x+6y=104\n첫 번째 식의 양변에 6을 곱하면 6x+6y=90 입니다. 이를 두 번째 식에서 빼면 (8x+6y)−(6x+6y)=104−90⇒2x=14⇒x=7 입니다. 따라서 거미는 7마리입니다.',
  },
  {
    id: 7,
    type: 'multiple',
    score: 5,
    topic: '일차함수',
    text: '두 일차방정식 x−y+3=0 과 2x+y−6=0 의 그래프와 x축으로 둘러싸인 도형의 넓이는?',
    options: [
      { id: '7-1', label: '①', text: '10' },
      { id: '7-2', label: '②', text: '12' },
      { id: '7-3', label: '③', text: '14' },
      { id: '7-4', label: '④', text: '15' },
      { id: '7-5', label: '⑤', text: '18' },
    ],
    answer: '②',
    explanation: '각 직선의 x절편을 구합니다.\nx−y+3=0 에서 y=0 이면 x=−3.\n2x+y−6=0 에서 y=0 이면 x=3.\n따라서 밑변의 길이는 3−(−3)=6 입니다.\n교점을 구하기 위해 두 식을 더하면 3x−3=0⇒x=1 이고, 대입하면 y=4 입니다. 교점은 (1,4) 이며 y좌표 4가 높이가 됩니다.\n넓이 = [frac:1/2]×6×4=12 입니다.',
  },
  {
    id: 8,
    type: 'multiple',
    score: 4,
    topic: '일차함수',
    text: '일차함수 y=ax−6 의 그래프의 x절편이 2이고, 이 그래프가 점 (c,−c+2) 를 지날 때, a+c 의 값은? (단, a,c는 상수이다.)',
    options: [
      { id: '8-1', label: '①', text: '3' },
      { id: '8-2', label: '②', text: '4' },
      { id: '8-3', label: '③', text: '5' },
      { id: '8-4', label: '④', text: '6' },
      { id: '8-5', label: '⑤', text: '7' },
    ],
    answer: '③',
    explanation: 'x절편이 2이므로 점 (2,0)을 지납니다. y=ax−6 에 (2,0)을 대입하면 0=2a−6⇒2a=6⇒a=3 입니다. 함수식은 y=3x−6 입니다.\n이 그래프가 점 (c,−c+2) 를 지나므로 대입하면, −c+2=3c−6⇒4c=8⇒c=2 입니다.\n따라서 a+c=3+2=5 입니다.',
  },
  {
    id: 9,
    type: 'multiple',
    score: 5,
    topic: '유리수와 순환소수',
    text: '분수 [frac:A/420] 를 소수로 나타내면 유한소수이고, 이 분수를 기약분수로 나타내면 [frac:3/B] 이다. 50<A<80 인 자연수일 때, A+B 의 값은?',
    options: [
      { id: '9-1', label: '①', text: '78' },
      { id: '9-2', label: '②', text: '80' },
      { id: '9-3', label: '③', text: '83' },
      { id: '9-4', label: '④', text: '85' },
      { id: '9-5', label: '⑤', text: '88' },
    ],
    answer: '③',
    explanation: '420=2[sup:2]×3×5×7 입니다. 유한소수가 되려면 분모의 소인수 3과 7이 약분되어야 하므로 A는 3×7=21 의 배수여야 합니다.\n조건 50<A<80 을 만족하는 21의 배수는 A=63 뿐입니다.\n[frac:63/420] 을 21로 약분하면 [frac:3/20] 이 됩니다. 기약분수가 [frac:3/B] 와 같으므로 B=20 입니다.\n따라서 A+B=63+20=83 입니다.',
  },
  {
    id: 10,
    type: 'multiple',
    score: 4,
    topic: '일차함수',
    text: '세 점 (1,−2),(4,7),(a,13) 이 한 직선 위에 있을 때, 상수 a의 값은?',
    options: [
      { id: '10-1', label: '①', text: '4' },
      { id: '10-2', label: '②', text: '5' },
      { id: '10-3', label: '③', text: '6' },
      { id: '10-4', label: '④', text: '7' },
      { id: '10-5', label: '⑤', text: '8' },
    ],
    answer: '③',
    explanation: '점 (1,−2) 와 (4,7) 을 지나는 직선의 기울기는 [frac:7−(−2)/4−1] = [frac:9/3] = 3 입니다.\n점 (4,7) 과 (a,13) 을 지나는 직선의 기울기도 3이어야 하므로 [frac:13−7/a−4]=3⇒[frac:6/a−4]=3⇒3(a−4)=6⇒a−4=2⇒a=6 입니다.',
  },
  {
    id: 11,
    type: 'multiple',
    score: 4,
    topic: '일차부등식',
    text: 'a<0,b>0 이고 |a|>|b| 일 때, 다음 중 항상 옳은 것은?',
    options: [
      { id: '11-1', label: '①', text: 'a+b>0' },
      { id: '11-2', label: '②', text: 'a−b>0' },
      { id: '11-3', label: '③', text: 'ab>0' },
      { id: '11-4', label: '④', text: '[frac:a/b]<0' },
      { id: '11-5', label: '⑤', text: 'a[sup:2]<b[sup:2]' },
    ],
    answer: '④',
    explanation: 'a는 음수, b는 양수이고 절댓값은 a가 더 큽니다. (예: a=−3,b=2)\n① 절댓값이 큰 음수와 양수의 합이므로 a+b<0 입니다. (거짓)\n② 음수에서 양수를 빼므로 a−b<0 입니다. (거짓)\n③ 음수와 양수의 곱이므로 ab<0 입니다. (거짓)\n④ 부호가 다른 두 수의 나눗셈이므로 [frac:a/b]<0 입니다. (참)\n⑤ 절댓값이 큰 수를 제곱하면 더 커지므로 a[sup:2]>b[sup:2] 입니다. (거짓)',
  },
  {
    id: 12,
    type: 'multiple',
    score: 4,
    topic: '일차함수',
    text: '일차함수 f(x)=ax+b 에 대하여 f(1)=2 이고 f(4)=11 일 때, f(−2) 의 값은?',
    options: [
      { id: '12-1', label: '①', text: '−8' },
      { id: '12-2', label: '②', text: '−7' },
      { id: '12-3', label: '③', text: '−6' },
      { id: '12-4', label: '④', text: '−5' },
      { id: '12-5', label: '⑤', text: '−4' },
    ],
    answer: '②',
    explanation: '그래프가 (1,2) 와 (4,11) 을 지납니다. 기울기 a=[frac:11−2/4−1] = [frac:9/3] = 3 입니다.\nf(x)=3x+b 에 (1,2) 를 대입하면 2=3(1)+b⇒b=−1 입니다.\n따라서 f(x)=3x−1 이고, 구하는 값은 f(−2)=3(−2)−1=−7 입니다.',
  },
  {
    id: 13,
    type: 'multiple',
    score: 4,
    topic: '다항식의 혼합 계산',
    text: '다항식 x(2x−y)−2x(x−3y+1) 을 간단히 하였을 때, xy의 계수와 x의 계수의 합은?',
    options: [
      { id: '13-1', label: '①', text: '1' },
      { id: '13-2', label: '②', text: '2' },
      { id: '13-3', label: '③', text: '3' },
      { id: '13-4', label: '④', text: '4' },
      { id: '13-5', label: '⑤', text: '5' },
    ],
    answer: '③',
    explanation: '주어진 식을 전개하면 2x[sup:2]−xy−2x[sup:2]+6xy−2x 입니다.\n동류항끼리 계산하면 5xy−2x 가 됩니다.\nxy의 계수는 5, x의 계수는 −2 이므로 두 수의 합은 5+(−2)=3 입니다.',
  },
  {
    id: 14,
    type: 'multiple',
    score: 5,
    topic: '일차함수',
    text: '두 일차방정식 x+2y=4 와 3x−y=5 의 그래프의 교점을 지나고, 일차함수 y=−2x+1 의 그래프와 평행한 직선의 방정식은?',
    options: [
      { id: '14-1', label: '①', text: 'y=−2x+1' },
      { id: '14-2', label: '②', text: 'y=−2x+3' },
      { id: '14-3', label: '③', text: 'y=−2x+5' },
      { id: '14-4', label: '④', text: 'y=−2x+7' },
      { id: '14-5', label: '⑤', text: 'y=−2x+9' },
    ],
    answer: '③',
    explanation: '교점을 구하기 위해 연립방정식을 풉니다.\nx+2y=4\n3x−y=5\n두 번째 식의 양변에 2를 곱하면 6x−2y=10 이고, 첫 번째 식과 더하면 7x=14⇒x=2 입니다. 대입하면 2+2y=4⇒2y=2⇒y=1 이므로 교점은 (2,1) 입니다.\n일차함수 y=−2x+1 과 평행하므로 기울기는 −2 입니다. 기울기가 −2 이고 (2,1) 을 지나는 직선은 y=−2x+b 에서 1=−4+b⇒b=5 입니다. 따라서 직선의 방정식은 y=−2x+5 입니다.',
  },
  {
    id: 15,
    type: 'multiple',
    score: 4,
    topic: '연립일차방정식',
    text: '두 일차방정식 2x−3y=4 와 4x+ky=5 의 그래프가 서로 교점이 없을 때, 상수 k의 값은?',
    options: [
      { id: '15-1', label: '①', text: '−6' },
      { id: '15-2', label: '②', text: '−3' },
      { id: '15-3', label: '③', text: '2' },
      { id: '15-4', label: '④', text: '3' },
      { id: '15-5', label: '⑤', text: '6' },
    ],
    answer: '①',
    explanation: '두 직선의 교점이 없다는 것은 평행하다는 의미이므로 연립방정식의 x,y 계수 비율은 같고 상수항 비율은 달라야 합니다. [frac:4/2] = [frac:k/−3] ≠ [frac:5/4]\n[frac:4/2] = 2 이므로 [frac:k/−3] = 2⇒k=−6 입니다. (이때 [frac:5/4] 와는 다르므로 조건을 만족합니다.)',
  },
  {
    id: 16,
    type: 'short',
    score: 6,
    topic: '연립일차방정식',
    text: 'x,y에 대한 연립방정식 { ax+by=10, bx−ay=−10 } 의 해가 x=3,y=1 일 때, a−b 의 값을 구하시오. (단, a,b는 상수)',
    answer: '6',
    explanation: '해 x=3,y=1 을 두 식에 각각 대입합니다.\n3a+b=10\n3b−a=−10\n첫 번째 식에서 b=−3a+10 이고 이를 두 번째 식에 대입합니다.\n−a+3(−3a+10)=−10⇒−a−9a+30=−10⇒−10a=−40⇒a=4 입니다.\na=4 이면 b=−12+10=−2 입니다. 따라서 a−b=4−(−2)=6 입니다.',
  },
  {
    id: 17,
    type: 'short',
    score: 6,
    topic: '연립일차방정식 활용',
    text: '어느 중학교의 작년 전체 학생 수는 500명이었다. 올해는 작년에 비하여 남학생 수는 4% 증가하고 여학생 수는 5% 감소하여 전체 학생 수가 2명 증가하였다고 한다. 올해의 남학생 수를 구하시오.',
    answer: '312명',
    explanation: '작년 남학생을 x명, 여학생을 y명이라 하면, x+y=500 입니다.\n증감량에 대한 식을 세우면 +0.04x−0.05y=2 입니다.\n양변에 100을 곱하면 4x−5y=200 입니다. 첫 번째 식의 양변에 4를 곱하면 4x+4y=2000 이고 두 식을 빼면 −9y=−1800⇒y=200 입니다. x+200=500⇒x=300 입니다.\n올해 남학생 수는 작년보다 4% 증가했으므로 300×1.04=312명입니다.',
  },
  {
    id: 18,
    type: 'short',
    score: 6,
    topic: '연립일차방정식 활용',
    text: '해가 모두 자연수인 일차방정식 2x+5y=40 을 만족하는 두 해 x,y 에 대하여 |x−y|<5 일 때, x[sup:2]+y[sup:2] 의 값을 구하시오.',
    answer: '61',
    explanation: '2x+5y=40 에서 x,y가 자연수이므로 계수가 큰 y에 1부터 대입하여 성립하는 x를 찾습니다.\ny=2⇒2x=30⇒x=15 (해: 15,2)\ny=4⇒2x=20⇒x=10 (해: 10,4)\ny=6⇒2x=10⇒x=5 (해: 5,6)\ny=8⇒2x=0⇒x=0 (자연수가 아님)\n이 중 |x−y|<5 를 만족하는 해는 |5−6|=1<5 인 x=5,y=6 뿐입니다.\n따라서 x[sup:2]+y[sup:2]=5[sup:2]+6[sup:2]=25+36=61 입니다.',
  },
  {
    id: 19,
    type: 'short',
    score: 8,
    topic: '일차방정식 활용',
    text: '다음 그림과 같이 가로의 길이가 12cm, 세로의 길이가 20cm 인 직사각형 ABCD가 있다. 점 P가 점 A를 출발하여 선분 AB 위를 초속 2cm로 점 B까지 움직인다. 사다리꼴 PBCD의 넓이가 160cm[sup:2] 가 되는 것은 점 P가 출발한 지 몇 초 후인지 구하시오.',
    imageUrl: '/images/IMG_0489.PNG',
    answer: '4초 후',
    explanation: '점 P가 초속 2cm로 이동하므로 x초 후 선분 AP의 길이는 2x 이고, 선분 PB의 길이는 12−2x 입니다.\n사다리꼴 PBCD의 넓이는 [frac:1/2]×(윗변PB+아랫변CD)×높이BC 입니다.\n넓이 = [frac:1/2]×(12−2x+12)×20=10×(24−2x)=240−20x 입니다.\n이 넓이가 160 이 되어야 하므로 240−20x=160⇒20x=80⇒x=4 입니다. 따라서 4초 후입니다.',
  },
  {
    id: 20,
    type: 'essay',
    score: 10,
    topic: '일차부등식 활용',
    text: '다음 그림과 같이 ∠A=∠B=90[sup:∘] 이고 AB=4cm, BC=10cm, CD=8cm 인 사다리꼴 ABCD가 있다. 점 P가 꼭짓점 B에서 출발하여 선분 BC 위를 움직인다. 삼각형 APD의 넓이가 사다리꼴 ABCD 넓이의 [frac:1/2] 이상, [frac:2/3] 이하가 되도록 할 때, 선분 BP의 길이의 범위를 구하는 상세한 풀이 과정을 적고 답을 구하시오.',
    imageUrl: '/images/IMG_0490.PNG',
    subQuestions: [
      {
        id: '20-1',
        label: '(1)',
        text: '선분 BP의 길이를 x라 할 때 삼각형 APD의 넓이를 x로 나타내시오.',
        answer: '(20+2x)cm²',
        explanation: '선분 BP의 길이를 xcm 라 하면 선분 PC의 길이는 (10−x)cm 입니다.\n사다리꼴 ABCD의 전체 넓이는 [frac:1/2]×(4+8)×10=60cm[sup:2] 입니다.\n삼각형 APD의 넓이는 전체 넓이에서 △ABP와 △PCD를 빼서 구합니다.\n△ABP=[frac:1/2]×4×x=2x\n△PCD=[frac:1/2]×8×(10−x)=40−4x\n△APD=60−(2x+40−4x)=60−40+2x=(20+2x)cm[sup:2] 입니다.',
      },
      {
        id: '20-2',
        label: '(2)',
        text: '선분 BP의 길이의 범위를 구하는 상세한 풀이 과정을 적고 답을 구하시오.',
        answer: '5cm ≤ BP ≤ 10cm',
        explanation: '조건에서 삼각형 넓이가 사다리꼴 넓이의 [frac:1/2] 이상, [frac:2/3] 이하이므로,\n60×[frac:1/2]≤20+2x≤60×[frac:2/3]\n30≤20+2x≤40\n각 변에서 20을 빼면 10≤2x≤20 입니다. 각 변을 2로 나누면 5≤x≤10 입니다.\n선분 BC의 길이가 10이므로 점 P가 선분 밖을 벗어나지 않는 x≤10 조건도 자연히 만족합니다.\n따라서 선분 BP의 길이의 범위는 5cm 이상 10cm 이하입니다.',
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
