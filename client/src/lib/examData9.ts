import { Question, QuestionType } from './examData';

export const EXAM_TITLE = '교과서 변형문제(3회)';
export const EXAM_SUBTITLE = '중학교 2학년 수학 교과서 변형 고난도 문제 3회';
export const TOTAL_SCORE = 100;

export const questions: Question[] = [
  {
    id: 1,
    type: 'multiple',
    score: 4,
    topic: '일차부등식',
    text: `x에 대한 일차부등식 [frac:x−a/2]≤[frac:2x+1/3]의 해가 x≥−5일 때, 상수 a의 값을 구하여 일차부등식 ax−4<3(x−a)+2의 해를 바르게 구한 것은?`,
    options: [
      { id: '1-1', label: '①', text: `x>−2.5` },
      { id: '1-2', label: '②', text: `x<−2.5` },
      { id: '1-3', label: '③', text: `x>−1.5` },
      { id: '1-4', label: '④', text: `x<−1.5` },
      { id: '1-5', label: '⑤', text: `x>1.5` },
    ],
    answer: `③`,
    explanation: `주어진 부등식의 양변에 6을 곱하면 3(x−a)≤2(2x+1) ⇒ 3x−3a≤4x+2입니다.\n이항하여 정리하면 −x≤3a+2 ⇒ x≥−3a−2가 됩니다.\n이 해가 x≥−5와 같으므로 −3a−2=−5 ⇒ −3a=−3 ⇒ a=1입니다.\n구한 a=1을 구하고자 하는 부등식에 대입하면 1x−4<3(x−1)+2입니다.\nx−4<3x−1 ⇒ −2x<3 ⇒ x>−1.5입니다.`
  },
  {
    id: 2,
    type: 'multiple',
    score: 4,
    topic: '유리수와 순환소수',
    text: `두 분수 [frac:N/150]과 [frac:N/135]이 모두 유한소수가 되도록 하는 자연수 N의 값 중 가장 작은 값은?`,
    options: [
      { id: '2-1', label: '①', text: `9` },
      { id: '2-2', label: '②', text: `15` },
      { id: '2-3', label: '③', text: `27` },
      { id: '2-4', label: '④', text: `45` },
      { id: '2-5', label: '⑤', text: `54` },
    ],
    answer: `③`,
    explanation: `분모를 각각 소인수분해하면 150=2×3×5[sup:2]이고, 135=3[sup:3]×5입니다.\n[frac:N/150]이 유한소수가 되려면 N은 분모의 3을 약분할 수 있는 3의 배수여야 합니다.\n[frac:N/135]가 유한소수가 되려면 N은 분모의 3[sup:3](27)을 약분할 수 있는 27의 배수여야 합니다.\n따라서 N은 3과 27의 공배수여야 하며, 가장 작은 값은 최소공배수인 27입니다.`
  },
  {
    id: 3,
    type: 'multiple',
    score: 4,
    topic: '연립일차방정식',
    text: `A역에서 B역까지 기차를 타고 갈 때, 시속 120km로 가면 예정된 도착 시간보다 10분 일찍 도착하고, 시속 80km로 가면 예정된 도착 시간보다 15분 늦게 도착한다고 한다. A역에서 B역까지의 거리는?`,
    options: [
      { id: '3-1', label: '①', text: `80km` },
      { id: '3-2', label: '②', text: `90km` },
      { id: '3-3', label: '③', text: `100km` },
      { id: '3-4', label: '④', text: `110km` },
      { id: '3-5', label: '⑤', text: `120km` },
    ],
    answer: `③`,
    explanation: `거리를 dkm, 예정된 도착 시간을 t시간이라 합시다. (단, 분은 시간 단위로 통일합니다. 10분=[frac:1/6]시간, 15분=[frac:1/4]시간)\n120km/h로 갈 때의 시간: [frac:d/120]=t−[frac:1/6]\n80km/h로 갈 때의 시간: [frac:d/80]=t+[frac:1/4]\n두 식을 빼서 t를 소거하면 [frac:d/80]−[frac:d/120]=[frac:1/4]−(−[frac:1/6])=[frac:5/12]입니다.\n[frac:3d−2d/240]=[frac:5/12] ⇒ [frac:d/240]=[frac:5/12] ⇒ d=240×[frac:5/12]=100km입니다.`
  },
  {
    id: 4,
    type: 'multiple',
    score: 5,
    topic: '식의 계산',
    text: `세 자연수 a, b, c에 대하여 등식 (x[sup:12]y[sup:8])÷(x[sup:a]y[sup:b])[sup:c]=x[sup:2]y[sup:4]이 성립한다. 이 조건을 만족시키는 a+b+c의 값 중 가장 큰 값과 가장 작은 값의 차이는?`,
    options: [
      { id: '4-1', label: '①', text: `2` },
      { id: '4-2', label: '②', text: `4` },
      { id: '4-3', label: '③', text: `6` },
      { id: '4-4', label: '④', text: `8` },
      { id: '4-5', label: '⑤', text: `10` },
    ],
    answer: `③`,
    explanation: `좌변을 지수법칙으로 전개하면 [frac:x[sup:12]y[sup:8]/x[sup:ac]y[sup:bc]]=x[sup:12−ac]y[sup:8−bc]입니다.\n우변과 비교하면 12−ac=2 ⇒ ac=10이고, 8−bc=4 ⇒ bc=4입니다.\na,b,c는 자연수이므로 c는 10과 4의 공약수여야 합니다. 즉 c∈{1,2}입니다.\nc=1일 때, a=10, b=4이므로 a+b+c=15입니다. (최댓값)\nc=2일 때, a=5, b=2이므로 a+b+c=9입니다. (최솟값)\n두 값의 차이는 15−9=6입니다.`
  },
  {
    id: 5,
    type: 'multiple',
    score: 4,
    topic: '유리수와 순환소수',
    text: `두 자리 자연수 a, b에 대하여 기약분수 [frac:a/b]를 소수로 나타내면 2.[dot:4]가 된다. 이때 a+b의 값 중 가장 작은 값은?`,
    options: [
      { id: '5-1', label: '①', text: `48` },
      { id: '5-2', label: '②', text: `54` },
      { id: '5-3', label: '③', text: `62` },
      { id: '5-4', label: '④', text: `70` },
      { id: '5-5', label: '⑤', text: `78` },
    ],
    answer: `③`,
    explanation: `순환소수 2.[dot:4]를 분수로 고치면 [frac:24−2/9]=[frac:22/9]입니다.\n기약분수 형태가 [frac:22/9]이므로 [frac:a/b]=[frac:22k/9k]로 나타낼 수 있습니다. (단, k는 자연수)\na, b가 모두 두 자리 자연수가 되어야 하므로 b=9k가 두 자리 수여야 합니다.\nk=1이면 b=9이므로 탈락, 최소 k=2여야 합니다.\nk=2일 때, a=44, b=18이 되어 두 자리 자연수 조건을 만족합니다.\n따라서 a+b의 최솟값은 44+18=62입니다.`
  },
  {
    id: 6,
    type: 'multiple',
    score: 4,
    topic: '일차함수',
    text: `두 일차방정식 2x−y=4와 ax+2y=b의 그래프는 일치하고, 두 일차방정식 cx−3y=6과 4x+y=5의 그래프는 만나지 않는다. 이때 상수 a, b, c에 대하여 a+b+c의 값은?`,
    options: [
      { id: '6-1', label: '①', text: `−28` },
      { id: '6-2', label: '②', text: `−24` },
      { id: '6-3', label: '③', text: `−20` },
      { id: '6-4', label: '④', text: `−16` },
      { id: '6-5', label: '⑤', text: `−12` },
    ],
    answer: `②`,
    explanation: `첫 번째 조건(일치): 계수의 비율이 모두 같아야 하므로 [frac:a/2]=[frac:2/−1]=[frac:b/4]입니다.\n[frac:2/−1]=−2이므로 a=2(−2)=−4, b=4(−2)=−8입니다.\n두 번째 조건(평행): x, y 계수 비는 같고 상수항 비는 달라야 하므로 [frac:c/4]=[frac:−3/1]≠[frac:6/5]입니다.\n[frac:c/4]=−3에서 c=−12입니다. (이때 [frac:6/5]과 다르므로 평행조건 완벽 충족)\n따라서 a+b+c=−4−8−12=−24입니다.`
  },
  {
    id: 7,
    type: 'multiple',
    score: 4,
    topic: '식의 계산',
    text: `밑면의 반지름의 길이가 3ab인 원기둥이 있다. 이 원기둥의 부피가 18πa[sup:3]b[sup:2]일 때, 이 원기둥의 겉넓이는? (단, 윗면과 아랫면을 모두 포함한다.)`,
    options: [
      { id: '7-1', label: '①', text: `18πa[sup:2]b[sup:2]+12πa[sup:2]b` },
      { id: '7-2', label: '②', text: `18πa[sup:2]b[sup:2]+24πa[sup:2]b` },
      { id: '7-3', label: '③', text: `9πa[sup:2]b[sup:2]+12πa[sup:2]b` },
      { id: '7-4', label: '④', text: `9πa[sup:2]b[sup:2]+6πa[sup:2]b` },
      { id: '7-5', label: '⑤', text: `12πa[sup:2]b[sup:2]+18πa[sup:2]b` },
    ],
    answer: `①`,
    explanation: `원기둥의 밑넓이는 π×(3ab)[sup:2]=9πa[sup:2]b[sup:2]입니다.\n높이를 h라 하면, 9πa[sup:2]b[sup:2]×h=18πa[sup:3]b[sup:2] ⇒ h=2a입니다.\n원기둥의 겉넓이는 2×(밑넓이)+(밑면의 둘레)×(높이)입니다.\n겉넓이 = 2(9πa[sup:2]b[sup:2])+(2π×3ab)×2a=18πa[sup:2]b[sup:2]+6πab×2a=18πa[sup:2]b[sup:2]+12πa[sup:2]b입니다.`
  },
  {
    id: 8,
    type: 'multiple',
    score: 4,
    topic: '일차함수',
    text: `일차함수의 그래프 l은 두 점 (1, 4)와 (3, 8)을 지난다. 일차함수 m의 그래프는 l과 평행하고 점 (−2, 1)을 지난다고 한다. 이 그래프 m이 점 (k, k+5)를 지날 때, 상수 k의 값은?`,
    options: [
      { id: '8-1', label: '①', text: `−2` },
      { id: '8-2', label: '②', text: `−1` },
      { id: '8-3', label: '③', text: `0` },
      { id: '8-4', label: '④', text: `1` },
      { id: '8-5', label: '⑤', text: `2` },
    ],
    answer: `③`,
    explanation: `직선 l의 기울기는 [frac:8−4/3−1]=[frac:4/2]=2입니다.\n직선 m은 기울기가 2이고 점 (−2, 1)을 지나므로 식은 y=2x+b에서 1=−4+b ⇒ b=5입니다.\n즉 y=2x+5입니다.\n이 직선이 점 (k, k+5)를 지나므로 대입하면 k+5=2k+5 ⇒ k=0입니다.`
  },
  {
    id: 9,
    type: 'multiple',
    score: 5,
    topic: '식의 계산',
    text: `자연수 x에 대하여 2[sup:x−2]×5[sup:x+1]을 계산한 결과가 11자리 자연수일 때, x의 값은?`,
    options: [
      { id: '9-1', label: '①', text: `8` },
      { id: '9-2', label: '②', text: `9` },
      { id: '9-3', label: '③', text: `10` },
      { id: '9-4', label: '④', text: `11` },
      { id: '9-5', label: '⑤', text: `12` },
    ],
    answer: `③`,
    explanation: `지수가 작은 x−2에 맞추어 식을 변형합니다.\n2[sup:x−2]×5[sup:x−2]×5[sup:3]=(2×5)[sup:x−2]×125=125×10[sup:x−2]\n이 수는 125(3자리) 뒤에 0이 (x−2)개 붙은 수입니다.\n전체 자릿수가 11자리이므로 3+(x−2)=11 ⇒ x+1=11 ⇒ x=10입니다.`
  },
  {
    id: 10,
    type: 'multiple',
    score: 5,
    topic: '일차함수',
    text: `가로의 길이가 5cm, 세로의 길이가 8cm인 직사각형 ABCD가 있다. 점 P가 점 B를 출발하여 선분 BC 위를 초속 2cm로 점 C까지 움직인다. 점 P가 출발한 지 x초 후 사다리꼴 ABPD의 넓이가 삼각형 PCD 넓이의 3배가 될 때, x의 값은?`,
    options: [
      { id: '10-1', label: '①', text: `1` },
      { id: '10-2', label: '②', text: `1.5` },
      { id: '10-3', label: '③', text: `2` },
      { id: '10-4', label: '④', text: `2.5` },
      { id: '10-5', label: '⑤', text: `3` },
    ],
    answer: `③`,
    explanation: `점 P가 1초에 2cm씩 이동하므로, x초 후 선분 BP=2x, 선분 PC=8−2x입니다.\n직사각형 ABCD에서 윗변 선분 AD와 밑변 선분 BC가 평행하므로 사각형 ABPD는 사다리꼴입니다.\n사다리꼴 ABPD 넓이 = [frac:1/2]×(AD+BP)×AB=[frac:1/2](8+2x)×5=20+5x입니다.\n삼각형 PCD 넓이 = [frac:1/2]×PC×CD=[frac:1/2](8−2x)×5=20−5x입니다.\n사다리꼴 넓이가 삼각형 넓이의 3배가 되어야 하므로 20+5x=3(20−5x)입니다.\n20+5x=60−15x ⇒ 20x=40 ⇒ x=2입니다.`
  },
  {
    id: 11,
    type: 'multiple',
    score: 4,
    topic: '연립일차방정식',
    text: `x, y에 대한 연립방정식\n2x−3y=4\nax+y=17\n의 해가 일차방정식 x+y=7을 만족시킬 때, 상수 a의 값은?`,
    options: [
      { id: '11-1', label: '①', text: `1` },
      { id: '11-2', label: '②', text: `2` },
      { id: '11-3', label: '③', text: `3` },
      { id: '11-4', label: '④', text: `4` },
      { id: '11-5', label: '⑤', text: `5` },
    ],
    answer: `③`,
    explanation: `해를 찾기 위해 온전한 두 식 2x−3y=4와 x+y=7을 연립합니다.\nx+y=7의 양변에 3을 곱하면 3x+3y=21이고, 이를 첫 번째 식과 더하면 5x=25 ⇒ x=5입니다.\nx=5를 대입하면 y=2가 되어 공통 해는 (5, 2)입니다.\n이를 ax+y=17에 대입하면 5a+2=17 ⇒ 5a=15 ⇒ a=3입니다.`
  },
  {
    id: 12,
    type: 'multiple',
    score: 4,
    topic: '유리수와 순환소수',
    text: `은지와 민호가 어떤 기약분수를 순환소수로 각각 나타내었다. 은지는 분자를 잘못 보아 0.1[dot:5]가 되었고, 민호는 분모를 잘못 보아 0.[dot:1][dot:8]이 되었다고 한다. 처음의 기약분수를 바르게 순환소수로 나타냈을 때, 소수점 아래 100번째 자리의 숫자는?`,
    options: [
      { id: '12-1', label: '①', text: `0` },
      { id: '12-2', label: '②', text: `1` },
      { id: '12-3', label: '③', text: `4` },
      { id: '12-4', label: '④', text: `5` },
      { id: '12-5', label: '⑤', text: `8` },
    ],
    answer: `③`,
    explanation: `은지는 분자를 잘못 보아 0.1[dot:5]=[frac:15−1/90]=[frac:14/90]=[frac:7/45]이 되었습니다. 분모는 바르게 보았으므로 원래 분모는 45입니다.\n민호는 분모를 잘못 보아 0.[dot:1][dot:8]=[frac:18/99]=[frac:2/11]이 되었습니다. 분자는 바르게 보았으므로 원래 분자는 2입니다.\n처음 기약분수는 [frac:2/45]이며, 이를 소수로 고치기 위해 분모를 90으로 만들면 [frac:4/90]이 됩니다.\n이는 0.0444⋯=0.0[dot:4]입니다.\n소수점 아래 첫째 자리는 0이고, 둘째 자리부터 4가 반복되므로 100번째 자리 숫자 역시 4입니다.`
  },
  {
    id: 13,
    type: 'multiple',
    score: 4,
    topic: '일차함수',
    text: `두 직선 x+y=4와 2x−y=5의 교점을 지나고, y절편이 −6인 일차함수의 그래프가 x축과 만나는 점의 좌표는?`,
    options: [
      { id: '13-1', label: '①', text: `([frac:12/7], 0)` },
      { id: '13-2', label: '②', text: `([frac:16/7], 0)` },
      { id: '13-3', label: '③', text: `([frac:18/7], 0)` },
      { id: '13-4', label: '④', text: `([frac:20/7], 0)` },
      { id: '13-5', label: '⑤', text: `([frac:24/7], 0)` },
    ],
    answer: `③`,
    explanation: `두 직선의 교점을 구하기 위해 연립합니다.\nx+y=4와 2x−y=5를 더하면 3x=9 ⇒ x=3, 대입하면 y=1입니다. 교점은 (3, 1)입니다.\ny절편이 −6인 일차함수는 y=ax−6입니다.\n이 그래프가 (3, 1)을 지나므로 1=3a−6 ⇒ 3a=7 ⇒ a=[frac:7/3]입니다.\n일차함수 식은 y=[frac:7/3]x−6이며, x절편은 y=0을 대입하여 0=[frac:7/3]x−6 ⇒ [frac:7/3]x=6 ⇒ x=6×[frac:3/7]=[frac:18/7]입니다.`
  },
  {
    id: 14,
    type: 'multiple',
    score: 4,
    topic: '식의 계산',
    text: `가로의 길이가 5a, 세로의 길이가 4b인 직사각형 모양의 종이가 있다. 이 종이의 한 모퉁이에서 한 변의 길이가 2a인 정사각형을 잘라내고, 다른 모퉁이에서 가로의 길이가 a, 세로의 길이가 2b인 직사각형을 잘라내었을 때, 남은 종이의 넓이는?`,
    options: [
      { id: '14-1', label: '①', text: `16ab−4a[sup:2]` },
      { id: '14-2', label: '②', text: `18ab−2a[sup:2]` },
      { id: '14-3', label: '③', text: `18ab−4a[sup:2]` },
      { id: '14-4', label: '④', text: `20ab−2a[sup:2]` },
      { id: '14-5', label: '⑤', text: `20ab−4a[sup:2]` },
    ],
    answer: `③`,
    explanation: `원래 직사각형의 전체 넓이는 5a×4b=20ab입니다.\n한 모퉁이에서 잘라낸 정사각형 넓이 = (2a)[sup:2]=4a[sup:2]\n다른 모퉁이에서 잘라낸 직사각형 넓이 = a×2b=2ab\n남은 종이의 넓이 = 20ab−(4a[sup:2]+2ab)=18ab−4a[sup:2]입니다.`
  },
  {
    id: 15,
    type: 'multiple',
    score: 5,
    topic: '연립일차방정식',
    text: `어느 농장에 닭과 돼지가 합하여 총 30마리 있다. 닭 5마리를 돼지 5마리와 교환하였더니, 돼지의 다리 수가 닭의 다리 수의 2배가 되었다고 한다. 처음에 농장에 있던 닭은 몇 마리인가?`,
    options: [
      { id: '15-1', label: '①', text: `15마리` },
      { id: '15-2', label: '②', text: `18마리` },
      { id: '15-3', label: '③', text: `20마리` },
      { id: '15-4', label: '④', text: `22마리` },
      { id: '15-5', label: '⑤', text: `25마리` },
    ],
    answer: `③`,
    explanation: `처음에 있던 닭을 x마리, 돼지를 y마리라 합시다.\nx+y=30입니다.\n5마리씩 교환한 후, 농장에 있는 닭은 (x−5)마리, 돼지는 (y+5)마리가 됩니다.\n닭의 다리 수는 2개, 돼지의 다리 수는 4개이므로, 4(y+5)=2×{2(x−5)}입니다.\n4y+20=4x−20 ⇒ 4x−4y=40 ⇒ x−y=10입니다.\n두 식 (x+y=30)과 (x−y=10)을 연립하여 더하면 2x=40 ⇒ x=20입니다.\n처음에 있던 닭은 20마리입니다.`
  },
  {
    id: 16,
    type: 'multiple',
    score: 4,
    topic: '유리수와 순환소수',
    text: `분수 [frac:x/120]를 소수로 나타내면 유한소수이고, [frac:x/126]를 소수로 나타내면 순환소수만 된다고 한다. x가 15보다 작은 자연수일 때, 조건을 만족하는 모든 x의 값의 합은?`,
    options: [
      { id: '16-1', label: '①', text: `18` },
      { id: '16-2', label: '②', text: `24` },
      { id: '16-3', label: '③', text: `27` },
      { id: '16-4', label: '④', text: `30` },
      { id: '16-5', label: '⑤', text: `36` },
    ],
    answer: `④`,
    explanation: `분모를 소인수분해하면 120=2[sup:3]×3×5, 126=2×3[sup:2]×7입니다.\n[frac:x/120]가 유한소수이려면 분모의 3이 약분되어야 하므로 x는 3의 배수여야 합니다.\n조건에서 x<15인 자연수이므로 가능한 x는 3, 6, 9, 12입니다.\n이 값들을 [frac:x/126]에 대입하여 순환소수만 되는지 확인합니다. (즉, 분모의 3[sup:2]×7=63이 완벽히 약분되면 안 됩니다.)\nx=3: [frac:3/126]=[frac:1/42] (순환소수 O)\nx=6: [frac:6/126]=[frac:1/21] (순환소수 O)\nx=9: [frac:9/126]=[frac:1/14] (순환소수 O)\nx=12: [frac:12/126]=[frac:2/21] (순환소수 O)\n모든 후보가 조건을 만족하므로 합은 3+6+9+12=30입니다.`
  },
  {
    id: 17,
    type: 'essay',
    score: 8,
    topic: '식의 계산',
    text: `가로의 길이가 4x[sup:2]y이고 세로의 길이가 2xy[sup:2]인 직사각형 모양의 종이가 있다. 이 종이를 가로의 길이를 밑면의 둘레로 하여 만든 원기둥의 부피를 V[sub:1]이라 하고, 세로의 길이를 밑면의 둘레로 하여 만든 원기둥의 부피를 V[sub:2]라고 하자. 이때 두 부피의 차 V[sub:1]−V[sub:2]를 x, y에 대한 식으로 나타내는 과정을 상세히 서술하시오.`,
    subQuestions: [
      { id: '17-1', label: '(1)', text: '두 부피의 차 V[sub:1]−V[sub:2]를 x, y에 대한 식으로 나타내시오.', score: 8 }
    ],
    answer: `[frac:8x[sup:5]y[sup:4]−4x[sup:4]y[sup:5]/π]`,
    explanation: `가로로 둥글게 말아 만든 원기둥(V[sub:1])의 밑면의 둘레는 4x[sup:2]y이고, 높이는 2xy[sup:2]입니다.\n밑면의 반지름을 r[sub:1]이라 하면, 2πr[sub:1]=4x[sup:2]y ⇒ r[sub:1]=[frac:2x[sup:2]y/π]입니다.\nV[sub:1]=π×([frac:2x[sup:2]y/π])[sup:2]×2xy[sup:2]=π×[frac:4x[sup:4]y[sup:2]/π[sup:2]]×2xy[sup:2]=[frac:8x[sup:5]y[sup:4]/π]입니다.\n세로로 둥글게 말아 만든 원기둥(V[sub:2])의 밑면의 둘레는 2xy[sup:2]이고, 높이는 4x[sup:2]y입니다.\n밑면의 반지름을 r[sub:2]라 하면, 2πr[sub:2]=2xy[sup:2] ⇒ r[sub:2]=[frac:xy[sup:2]/π]입니다.\nV[sub:2]=π×([frac:xy[sup:2]/π])[sup:2]×4x[sup:2]y=π×[frac:x[sup:2]y[sup:4]/π[sup:2]]×4x[sup:2]y=[frac:4x[sup:4]y[sup:5]/π]입니다.\n두 부피의 차 V[sub:1]−V[sub:2]=[frac:8x[sup:5]y[sup:4]/π]−[frac:4x[sup:4]y[sup:5]/π]=[frac:8x[sup:5]y[sup:4]−4x[sup:4]y[sup:5]/π]입니다.`
  },
  {
    id: 18,
    type: 'essay',
    score: 8,
    topic: '유리수와 순환소수',
    text: `두 한 자리 자연 a, b에 대하여, [frac:1/a]은 순환소수이고, 분수 [frac:b/a]도 순환소수이다. 하지만 [frac:b/a]×12는 유한소수가 된다고 할 때, a+b의 최댓값을 구하는 논리적 근거와 풀이 과정을 서술하시오.`,
    subQuestions: [
      { id: '18-1', label: '(1)', text: 'a+b의 최댓값을 구하는 풀이 과정을 서술하시오.', score: 8 }
    ],
    answer: `15`,
    explanation: `[frac:1/a]이 순환소수이므로 한 자리 자연수 a는 2나 5 이외의 소인수를 가져야 합니다. 즉 a∈{3,6,7,9}입니다.\n[frac:b/a]×12가 유한소수가 된다고 했습니다. 12=2[sup:2]×3이므로, 12를 곱해 유한소수가 되려면 분모 a에 남아있는 2나 5 이외의 소인수는 3의 약수여야만 약분되어 사라집니다.\n따라서 a는 7을 가질 수 없으므로 a∈{3,6,9}로 압축됩니다.\na=3,6인 경우: [frac:b/a]가 순환소수이므로 b는 3의 배수가 아니어야 합니다. 한 자리 자연수 중 a+b가 가장 클 때는 a=6이고 b=8일 때로 최댓값 14입니다.\na=9인 경우: [frac:b/9]×12=[frac:4b/3]가 유한소수이려면 b는 3의 배수여야 합니다. 그러나 원래 분수 [frac:b/9]가 순환소수여야 하므로 9로 완전히 약분되면 안 됩니다. 따라서 b=3 또는 b=6만 가능합니다. 이때 최댓값은 a=9, b=6으로 합은 15입니다.\n모든 경우 중 최댓값은 15입니다.`
  },
  {
    id: 19,
    type: 'essay',
    score: 8,
    topic: '일차부등식',
    text: `A 인쇄소에서는 문서 출력을 할 때 처음 100장까지는 기본요금 5000원이고, 100장을 초과하면 1장당 40원씩 추가된다고 한다. 이 인쇄소에 연회비 2000원을 내고 회원에 가입하면 처음 100장까지의 기본요금이 4000원으로 할인되고, 100장을 초과한 분량에 대해서는 1장당 30원씩만 받는다. 학생이 한 번에 x장(x>100)을 출력하려고 할 때, 몇 장 이상 출력해야 회원에 가입하는 것이 비용 면에서 더 유리해지는지 부등식을 세워 풀이 과정을 적고 답을 구하시오.`,
    subQuestions: [
      { id: '19-1', label: '(1)', text: '부등식을 세워 풀이 과정을 적고 답을 구하시오.', score: 8 }
    ],
    answer: `201장 이상`,
    explanation: `회원이 아닐 때 x장을 출력하는 비용: 처음 100장은 5000원, 초과한 (x−100)장에 대해서는 40원씩 추가되므로 비용 식은 5000+40(x−100)원입니다.\n회원에 가입할 때 x장을 출력하는 비용: 연회비 2000원과 처음 100장의 할인가 4000원, 그리고 초과한 (x−100)장에 대해 30원씩이므로 비용 식은 2000+4000+30(x−100)=6000+30(x−100)원입니다.\n회원에 가입하는 것이 유리하려면 회원 비용이 더 적게 들어야 하므로 부등식을 세웁니다.\n6000+30(x−100) < 5000+40(x−100)\n부등식을 정리하면: 1000 < 10(x−100) ⇒ 100 < x−100 ⇒ x > 200입니다.\nx는 자연수이므로, 최소 201장 이상 출력할 때 회원 가입이 더 유리해집니다.`
  },
  {
    id: 20,
    type: 'essay',
    score: 8,
    topic: '일차함수',
    text: `A 수조에는 50L의 물이 들어 있으며 배수구를 통해 매분 4L씩 물이 빠져나가고 있다. 동시에 B 수조에는 10L의 물이 들어 있으며 급수구를 통해 매분 2L씩 물이 채워지고 있다. x분 후 수조의 물의 양을 yL라 할 때, 두 수조에 대한 일차함수 식을 각각 세우고, 두 수조의 물의 양이 같아지는 것은 몇 분 몇 초 후인지, 그리고 그때의 물의 양은 몇 L인지 구하는 과정을 서술하시오.`,
    subQuestions: [
      {
        id: '20-1',
        label: '(1)',
        text: '두 수조에 대한 일차함수 식을 각각 세우시오.',
        answer: 'A: y=50−4x, B: y=10+2x',
        score: 4
      },
      {
        id: '20-2',
        label: '(2)',
        text: '두 수조의 물의 양이 같아지는 것은 몇 분 몇 초 후이며, 그때의 물의 양은 몇 L인지 구하시오.',
        answer: '6분 40초 후, [frac:70/3]L (또는 23[frac:1/3]L)',
        score: 4
      }
    ],
    answer: `(1) A수조: y=50−4x, B수조: y=10+2x (2) 6분 40초 후, [frac:70/3]L`,
    explanation: `A 수조의 물은 처음 50L에서 1분당 4L씩 줄어들므로, x분 후 물의 양의 일차함수 식은 y=50−4x입니다.\nB 수조의 물은 처음 10L에서 1분당 2L씩 늘어나므로, x분 후 물의 양의 일차함수 식은 y=10+2x입니다.\n두 수조의 물의 양이 같아지는 시간을 구하기 위해 두 식을 같다고 놓습니다.\n50−4x=10+2x ⇒ 6x=40 ⇒ x=[frac:40/6]=[frac:20/3]분입니다.\n[frac:20/3]분은 6[frac:2/3]분이며, [frac:2/3]분은 60×[frac:2/3]=40초이므로, 6분 40초 후입니다.\n그때의 물의 양을 구하기 위해 x=[frac:20/3]를 B 수조 식에 대입합니다.\ny=10+2([frac:20/3])=10+[frac:40/3]=[frac:30/3]+[frac:40/3]=[frac:70/3]L (또는 23[frac:1/3]L)입니다.`
  }
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
