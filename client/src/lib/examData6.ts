import { Question, QuestionType } from './examData';

export const EXAM_TITLE = '교과서 문제';
export const EXAM_SUBTITLE = '중학교 2학년 수학 교과서 변형 문제';

export const questions: Question[] = [
  {
    id: 1,
    type: 'multiple',
    score: 4,
    topic: '교과서 문제',
    text: `다음 중 순환소수를 순환마디에 점을 찍어 간단히 나타낸 것으로 옳은 것은?`,
    options: [
      { id: '1-1', label: '①', text: `13.333⋯=13.[dot:3]` },
      { id: '1-2', label: '②', text: `0.814814814⋯=0.[dot:8]1[dot:4]` },
      { id: '1-3', label: '③', text: `0.916916916⋯=0.[dot:9]16[dot:9]` },
      { id: '1-4', label: '④', text: `1.0242424⋯=1.0[dot:2][dot:4]` },
      { id: '1-5', label: '⑤', text: `4.131313⋯=4.[dot:1][dot:3]` },
    ],
    answer: `④`,
    explanation: `1.02424…는 순환마디가 '24'이므로 1.0[dot:2][dot:4]로 표현하는 것이 옳습니다.`
  },
  {
    id: 2,
    type: 'multiple',
    score: 4,
    topic: '교과서 문제',
    text: `다음 <보기>의 분수 중에서 유한소수로 나타낼 수 있는 것을 모두 고르시오.
<보기>
ㄱ. [frac:3/12]
ㄴ. [frac:56/42]
ㄷ. [frac:3/2[sup:2]×3×5]
ㄹ. [frac:3/2[sup:2]×3×7]`,
    options: [
      { id: '2-1', label: '①', text: `ㄱ, ㄴ` },
      { id: '2-2', label: '②', text: `ㄱ, ㄷ` },
      { id: '2-3', label: '③', text: `ㄴ, ㄷ` },
      { id: '2-4', label: '④', text: `ㄴ, ㄹ` },
      { id: '2-5', label: '⑤', text: `ㄷ, ㄹ` },
    ],
    answer: `②`,
    explanation: `기약분수로 나타냈을 때 분모의 소인수가 2나 5뿐이어야 합니다. ㄱ은 [frac:1/4] (유한), ㄴ은 [frac:4/3] (순환), ㄷ은 [frac:3/20] (유한), ㄹ은 [frac:1/7] (순환)입니다. 따라서 유한소수는 ㄱ, ㄷ입니다.`
  },
  {
    id: 3,
    type: 'multiple',
    score: 4,
    topic: '교과서 문제',
    text: `다음 중 순환소수 0.3121212… 에 대한 설명으로 옳지 않은 것은?`,
    options: [
      { id: '3-1', label: '①', text: `유리수이다.` },
      { id: '3-2', label: '②', text: `순환마디는 12이다.` },
      { id: '3-3', label: '③', text: `0.3[dot:1][dot:2]로 나타낼 수 있다.` },
      { id: '3-4', label: '④', text: `x=0.3121212… 라 하고, 1000x−10x 의 값이 정수임을 이용하여 분수로 나타낼 수 있다.` },
      { id: '3-5', label: '⑤', text: `분수로 나타내면 [frac:31/110] 이다.` },
    ],
    answer: `⑤`,
    explanation: `0.31212⋯=0.3[dot:1][dot:2]를 분수로 바꾸면 [frac:312−3/990]=[frac:309/990]=[frac:103/330]이 되므로 ⑤가 틀렸습니다.`
  },
  {
    id: 4,
    type: 'short',
    score: 5,
    topic: '교과서 문제',
    text: `분수 [frac:1/12], [frac:2/12], [frac:3/12], …, [frac:11/12] 을 소수로 나타낼 때, 유한소수인 분수는 모두 몇 개인가?`,
    answer: `3개`,
    explanation: `분모 12=2[sup:2]×3이므로, 유한소수가 되려면 분자가 3의 배수여야 합니다. 1부터 11 중 3의 배수는 3, 6, 9이므로 총 3개입니다.`
  },
  {
    id: 5,
    type: 'multiple',
    score: 4,
    topic: '교과서 문제',
    text: `분수 [frac:35/a] 를 소수로 나타내면 순환소수가 될 때, 다음 중 a의 값이 될 수 없는 것은?`,
    options: [
      { id: '5-1', label: '①', text: `15` },
      { id: '5-2', label: '②', text: `21` },
      { id: '5-3', label: '③', text: `24` },
      { id: '5-4', label: '④', text: `26` },
      { id: '5-5', label: '⑤', text: `28` }
    ],
    answer: `⑤`,
    explanation: `a=28을 대입하면 [frac:35/28]=[frac:5/4]로 분모의 소인수가 2뿐이므로 유한소수가 됩니다. 따라서 28은 될 수 없습니다.`
  },
  {
    id: 6,
    type: 'multiple',
    score: 4,
    topic: '교과서 문제',
    text: `다음 중 순환소수를 분수로 나타낸 것으로 옳은 것은?`,
    options: [
      { id: '6-1', label: '①', text: `0.[dot:0][dot:4] = [frac:4/9]` },
      { id: '6-2', label: '②', text: `3.[dot:5] = [frac:16/45]` },
      { id: '6-3', label: '③', text: `1.4[dot:6] = [frac:22/15]` },
      { id: '6-4', label: '④', text: `1.[dot:2][dot:7] = [frac:13/11]` },
      { id: '6-5', label: '⑤', text: `0.92[dot:5] = [frac:26/27]` }
    ],
    answer: `③`,
    explanation: `③ 1.4[dot:6] = [frac:146−14/90] = [frac:132/90] = [frac:22/15] 로 계산이 올바릅니다.`
  },
  {
    id: 7,
    type: 'short',
    score: 5,
    topic: '교과서 문제',
    text: `a=4.[dot:3][dot:6], b=5.[dot:3] 일 때, b÷a 의 값을 순환소수로 나타내시오.`,
    answer: `1.[dot:2]`,
    explanation: `a=[frac:432/99]=[frac:48/11], b=[frac:48/9]=[frac:16/3] 입니다. b÷a=[frac:16/3]×[frac:11/48]=[frac:11/9]=1.222⋯=1.[dot:2] 입니다.`
  },
  {
    id: 8,
    type: 'short',
    score: 5,
    topic: '교과서 문제',
    text: `순환소수 2.7[dot:8]1[dot:5] 의 소수점 아래 첫 번째 자리의 숫자부터 40번째 자리의 숫자까지의 합을 구하시오.`,
    answer: `189`,
    explanation: `첫 번째 숫자는 7이고, 2번째부터 (8, 1, 5)가 반복됩니다. 40번째 자리까지는 7 1개와 (8, 1, 5)가 13묶음 존재합니다. 총합 =7+13×(8+1+5)=7+13×14=189 입니다.`
  },
  {
    id: 9,
    type: 'short',
    score: 5,
    topic: '교과서 문제',
    text: `두 분수 [frac:5/18] 와 [frac:16/175] 에 같은 자연수를 각각 곱하여 모두 유한소수로 나타내려고 한다. 곱할 수 있는 가장 작은 자연수를 구하시오.`,
    answer: `63`,
    explanation: `18=2×3[sup:2], 175=5[sup:2]×7입니다. 두 분모의 9와 7을 모두 약분해야 하므로 9와 7의 공배수 중 가장 작은 63을 곱해야 합니다.`
  },
  {
    id: 10,
    type: 'short',
    score: 5,
    topic: '교과서 문제',
    text: `분수 [frac:a/b] 를 소수로 나타내면 1.[dot:6] 이 된다. a,b가 한 자리 자연수일 때, a+b 의 값을 구하시오.`,
    answer: `8`,
    explanation: `1.[dot:6]=[frac:15/9]=[frac:5/3] 입니다. 한 자리 자연수이므로 a=5,b=3이며 합은 8입니다.`
  },
  {
    id: 11,
    type: 'short',
    score: 5,
    topic: '교과서 문제',
    text: `다음은 다빈이와 수진이가 어떤 기약분수를 순환소수로 각각 나타내고 나눈 대화이다.
(다빈: 나는 분모를 잘못 봐서 0.5[dot:3] 으로 나타냈어.)
(수진: 나는 분자를 잘못 봐서 0.[dot:8][dot:5] 로 나타냈어.)
대화를 읽고, 처음의 기약분수를 순환소수로 바르게 나타내시오.`,
    answer: `0.[dot:0][dot:8]`,
    explanation: `다빈: 0.5[dot:3]=[frac:48/90]=[frac:8/15] (분자 8이 맞음).
수진: 0.[dot:8][dot:5]=[frac:85/99] (분모 99가 맞음).
처음 분수는 [frac:8/99]이므로 순환소수로는 0.[dot:0][dot:8] 입니다.`
  },
  {
    id: 12,
    type: 'essay',
    score: 6,
    topic: '교과서 문제',
    text: `1보다 작은 분수 [frac:a/112] 를 소수로 나타내면 유한소수이고, 기약분수로 나타내면 [frac:11/b] 이다. 두 자연수 a,b에 대하여 a−b 의 값을 구하시오.`,
    subQuestions: [
      { id: '12-1', text: 'a와 b를 각각 구하고 a-b의 값을 구하는 과정을 서술하시오.', score: 6 , answer: `61` , explanation: `112=2[sup:4]×7이므로 유한소수가 되려면 a는 7의 배수여야 합니다. 또한 분자가 11이 되려면 a는 11의 배수입니다. 1보다 작아야 하므로 a=77입니다.
[frac:77/112]=[frac:11/16]이므로 b=16입니다. a−b=77−16=61입니다.` }
    ],
    answer: `61`,
    explanation: `112=2[sup:4]×7이므로 유한소수가 되려면 a는 7의 배수여야 합니다. 또한 분자가 11이 되려면 a는 11의 배수입니다. 1보다 작아야 하므로 a=77입니다.
[frac:77/112]=[frac:11/16]이므로 b=16입니다. a−b=77−16=61입니다.`
  },
  {
    id: 13,
    type: 'essay',
    score: 6,
    topic: '교과서 문제',
    text: `다음 조건을 만족시키는 한 자리 자연수 a,b의 값을 각각 구하시오.
- a의 역수는 순환소수로만 나타낼 수 있다.
- 분수 [frac:a/b] 를 기약분수로 나타내면 분자가 1이고, 소수로 나타내면 1보다 작은 유한소수이다.`,
    subQuestions: [
      { id: '13-1', text: 'a와 b의 값을 구하는 과정을 서술하시오.', score: 6 , answer: `a=3,b=6` , explanation: `[frac:1/a]이 순환소수이므로 한 자리 수 a는 3, 6, 7, 9 중 하나입니다. 분자가 1이 되려면 b는 a의 배수여야 합니다.
[frac:3/6]=[frac:1/2]이 유일하게 유한소수 조건을 모두 만족합니다.` }
    ],
    answer: `a=3,b=6`,
    explanation: `[frac:1/a]이 순환소수이므로 한 자리 수 a는 3, 6, 7, 9 중 하나입니다. 분자가 1이 되려면 b는 a의 배수여야 합니다.
[frac:3/6]=[frac:1/2]이 유일하게 유한소수 조건을 모두 만족합니다.`
  },
  {
    id: 14,
    type: 'multiple',
    score: 4,
    topic: '교과서 문제',
    text: `다음 중 식의 계산이 옳은 것을 모두 고르면? (정답 2개)`,
    options: [
      { id: '14-1', label: '①', text: `x[sup:4]×x[sup:2]=x[sup:8]` },
      { id: '14-2', label: '②', text: `(x[sup:2])[sup:6]=x[sup:12]` },
      { id: '14-3', label: '③', text: `x[sup:6]÷x[sup:3]=x[sup:2]` },
      { id: '14-4', label: '④', text: `(x[sup:9])[sup:2]÷(x[sup:3])[sup:6]=1` },
      { id: '14-5', label: '⑤', text: `([frac:x/y])[sup:2]=[frac:x/y[sup:4]]` }
    ],
    answer: `②, ④`,
    explanation: `① x[sup:6], ③ x[sup:3], ⑤ [frac:x[sup:2]/y[sup:2]]이 옳습니다. ②와 ④만 법칙에 맞게 계산되었습니다.`
  },
  {
    id: 15,
    type: 'short',
    score: 4,
    topic: '교과서 문제',
    text: `다음 식을 계산하시오.
(1) 2a(a−7)
(2) (6a[sup:2]−12a)÷(−6a)`,
    answer: `(1) 2a[sup:2]−14a (2) −a+2`,
    explanation: `나눗셈은 역수를 곱하거나 각 항을 나누어 계산합니다.`
  },
  {
    id: 16,
    type: 'multiple',
    score: 4,
    topic: '교과서 문제',
    text: `다음 중 □ 안에 들어갈 자연수가 가장 큰 것은?`,
    options: [
      { id: '16-1', label: '①', text: `a[sup:3]×a[sup:□]=a[sup:5]` },
      { id: '16-2', label: '②', text: `(a[sup:2])[sup:□]=a[sup:8]` },
      { id: '16-3', label: '③', text: `a[sup:12]÷a[sup:□]=a[sup:6]` },
      { id: '16-4', label: '④', text: `(a[sup:□])[sup:3]=a[sup:9]` },
      { id: '16-5', label: '⑤', text: `a[sup:□]÷a[sup:4]=a[sup:3]` }
    ],
    answer: `⑤`,
    explanation: `① 2, ② 4, ③ 6, ④ 3, ⑤ □−4=3⇒□=7로 가장 큽니다.`
  },
  {
    id: 17,
    type: 'multiple',
    score: 5,
    topic: '교과서 문제',
    text: `2[sup:6]=A 라고 할 때, 8[sup:10]을 A를 사용하여 나타내면?`,
    options: [
      { id: '17-1', label: '①', text: `A[sup:4]` },
      { id: '17-2', label: '②', text: `4A[sup:4]` },
      { id: '17-3', label: '③', text: `8A[sup:4]` },
      { id: '17-4', label: '④', text: `A[sup:5]` },
      { id: '17-5', label: '⑤', text: `2A[sup:5]` }
    ],
    answer: `④`,
    explanation: `8[sup:10]=(2[sup:3])[sup:10]=2[sup:30]=(2[sup:6])[sup:5]=A[sup:5]입니다.`
  },
  {
    id: 18,
    type: 'short',
    score: 5,
    topic: '교과서 문제',
    text: `16x[sup:3]y[sup:2]÷[frac:8/3]xy[sup:3]×(−xy[sup:a])[sup:2]=bx[sup:c]y[sup:3] 일 때, 자연수 a,b,c 의 값을 각각 구하시오.`,
    answer: `a=2,b=6,c=4`,
    explanation: `16x[sup:3]y[sup:2]×[frac:3/8xy[sup:3]]×x[sup:2]y[sup:2a]=6x[sup:4]y[sup:2a−1]입니다. 계수 비교 시 b=6,c=4,2a−1=3이므로 a=2입니다.`
  },
  {
    id: 19,
    type: 'short',
    score: 5,
    topic: '교과서 문제',
    text: `(a−5b+1)−3(2a−b−4) 를 계산했을 때, a의 계수와 상수항의 합을 구하시오.`,
    answer: `8`,
    explanation: `식을 전개하면 −5a−2b+13이 됩니다. a의 계수는 −5, 상수항은 13이므로 합은 8입니다.`
  },
  {
    id: 20,
    type: 'short',
    score: 5,
    topic: '교과서 문제',
    text: `[frac:4x[sup:2]−8xy[sup:2]/2x]−[frac:3x[sup:2]y+12xy[sup:3]/3xy]=ax+by[sup:2] 일 때, 두 정수 a,b에 대하여 ab 의 값을 구하시오.`,
    answer: `-8`,
    explanation: `[frac:4x[sup:2]−8xy[sup:2]/2x]−[frac:3x[sup:2]y+12xy[sup:3]/3xy]=(2x−4y[sup:2])−(x+4y[sup:2])=x−8y[sup:2] 입니다. a=1,b=−8이므로 곱은 -8입니다.`
  },
  {
    id: 21,
    type: 'short',
    score: 5,
    topic: '교과서 문제',
    text: `x=2, y=[frac:1/5] 일 때, 다음 식의 값을 구하시오.
−6xy(x−3)+(9x[sup:2]y[sup:2]−12xy[sup:2])÷[frac:3/2]y`,
    answer: `4`,
    explanation: `식을 먼저 전개하면 −6x[sup:2]y+18xy+6x[sup:2]y−8xy=10xy로 매우 간단해집니다. 대입하면 10×2×[frac:1/5]=4 입니다.`
  },
  {
    id: 22,
    type: 'short',
    score: 5,
    topic: '교과서 문제',
    text: `2[sup:12]×5[sup:9] 이 n자리 자연수일 때, n의 값을 구하시오.`,
    answer: `10`,
    explanation: `2[sup:12]×5[sup:9]=2[sup:3]×(2[sup:9]×5[sup:9])=8×10[sup:9] 입니다. 8 뒤에 0이 9개 붙으므로 10자리 수입니다.`
  },
  {
    id: 23,
    type: 'short',
    score: 5,
    topic: '교과서 문제',
    text: `세 자연수 a,b,c에 대하여 등식 (x[sup:a]y[sup:b])[sup:c]=x[sup:18]y[sup:12] 을 만족시키는 가장 큰 자연수 c의 값을 구하고, 이때 a+b+c 의 값을 구하시오.`,
    answer: `11`,
    explanation: `x[sup:ac]y[sup:bc]=x[sup:18]y[sup:12] 이므로 c는 18과 12의 최대공약수인 6입니다. a=3,b=2이므로 합은 11입니다.`
  },
  {
    id: 24,
    type: 'short',
    score: 5,
    topic: '교과서 문제',
    text: `밑면의 가로의 길이가 a, 세로의 길이가 2ab인 직육면체가 있다. 이 직육면체의 부피가 10a[sup:2]b[sup:2] 일 때, 이 직육면체의 겉넓이를 구하시오.`,
    answer: `4a[sup:2]b+10ab+20ab[sup:2]`,
    explanation: `밑넓이는 2a[sup:2]b이므로 높이는 10a[sup:2]b[sup:2]÷2a[sup:2]b=5b입니다. 겉넓이는 2(밑넓이 + 앞면 + 옆면) =2(2a[sup:2]b+5ab+10ab[sup:2]) 입니다.`
  },
  {
    id: 25,
    type: 'short',
    score: 6,
    topic: '교과서 문제',
    text: `가로의 길이가 6b, 세로의 길이가 5a인 직사각형이 있다. 이 직사각형의 좌측 상단 꼭짓점과, 우측 변 위의 점(우측 하단 꼭짓점으로부터 거리가 3), 하단 변 위의 점(우측 하단 꼭짓점으로부터 거리가 4)을 세 꼭짓점으로 하는 삼각형이 내부에 그려져 있다. 이 삼각형의 넓이를 구하시오.`,
    answer: `10a+9b−6`,
    explanation: `전체 직사각형 넓이(30ab)에서 꼭짓점 주변의 직각삼각형 3개의 넓이(15ab−10a, 6, 15ab−9b)를 뺀 값입니다.`
  },
  {
    id: 26,
    type: 'essay',
    score: 6,
    topic: '교과서 문제',
    text: `어떤 식에서 a[sup:2]−5ab+4b[sup:2] 을 빼야 할 것을 잘못하여 더했더니 3a[sup:2]+6ab−2b[sup:2] 이 되었다. 바르게 계산한 결과를 구하시오.`,
    subQuestions: [
      { id: '26-1', text: '과정을 서술하시오.', score: 6 , answer: `a[sup:2]+16ab−10b[sup:2]` , explanation: `어떤 다항식을 A라고 합시다.\n잘못 계산한 식: A + (a[sup:2] - 5ab + 4b[sup:2]) = 3a[sup:2] + 6ab - 2b[sup:2]\n먼저 어떤 다항식 A를 구합니다.\nA = (3a[sup:2] + 6ab - 2b[sup:2]) - (a[sup:2] - 5ab + 4b[sup:2])\nA = 3a[sup:2] + 6ab - 2b[sup:2] - a[sup:2] + 5ab - 4b[sup:2]\nA = 2a[sup:2] + 11ab - 6b[sup:2]\n\n이제 바르게 계산한 식을 구합니다.\n바르게 계산한 식 = A - (a[sup:2] - 5ab + 4b[sup:2])\n= (2a[sup:2] + 11ab - 6b[sup:2]) - (a[sup:2] - 5ab + 4b[sup:2])\n= 2a[sup:2] + 11ab - 6b[sup:2] - a[sup:2] + 5ab - 4b[sup:2]\n= a[sup:2] + 16ab - 10b[sup:2]\n\n따라서 바르게 계산한 식은 a[sup:2] + 16ab - 10b[sup:2] 입니다.` }
    ],
    answer: `a[sup:2]+16ab−10b[sup:2]`,
    explanation: `어떤 식 =(3a[sup:2]+6ab−2b[sup:2])−(a[sup:2]−5ab+4b[sup:2])=2a[sup:2]+11ab−6b[sup:2] 입니다. 여기서 뺄셈을 바르게 수행하면 결과가 나옵니다.`
  },
  {
    id: 27,
    type: 'essay',
    score: 6,
    topic: '교과서 문제',
    text: `밑면의 반지름의 길이가 a인 원기둥과 원뿔을 위아래로 붙여 만든 입체도형의 전체 높이가 h이다. 원기둥 부분의 부피가 3πa[sup:3]−6πa[sup:2]b, 원뿔 부분의 부피가 [frac:1/3]πa[sup:3]+2πa[sup:2]b 일 때, 이 입체도형의 전체 높이 h를 구하시오.`,
    subQuestions: [
      { id: '27-1', text: '과정을 서술하시오.', score: 6 , answer: `4a` , explanation: `1) 원기둥의 높이 구하기\n원기둥의 부피 = π × (반지름)[sup:2] × 높이\n12πab[sup:2] - 24πb[sup:3] = π × (2b)[sup:2] × (원기둥의 높이)\n12πab[sup:2] - 24πb[sup:3] = 4πb[sup:2] × (원기둥의 높이)\n(원기둥의 높이) = (12πab[sup:2] - 24πb[sup:3]) ÷ 4πb[sup:2]\n= 3a - 6b\n\n2) 원뿔의 높이 구하기\n원뿔의 부피 = [frac:1/3] × π × (반지름)[sup:2] × 높이\n3πa[sup:3] + 18πa[sup:2]b = [frac:1/3] × π × (3a)[sup:2] × (원뿔의 높이)\n3πa[sup:3] + 18πa[sup:2]b = [frac:1/3] × π × 9a[sup:2] × (원뿔의 높이)\n3πa[sup:3] + 18πa[sup:2]b = 3πa[sup:2] × (원뿔의 높이)\n(원뿔의 높이) = (3πa[sup:3] + 18πa[sup:2]b) ÷ 3πa[sup:2]\n= a + 6b\n\n3) 두 높이의 합\n(원기둥의 높이) + (원뿔의 높이) = (3a - 6b) + (a + 6b) = 4a\n따라서 두 높이의 합은 4a입니다.` }
    ],
    answer: `4a`,
    explanation: `원기둥 높이 =3a−6b, 원뿔 높이 =a+6b 입니다. 두 높이를 더하면 4a 가 됩니다.`
  },
  {
    id: 28,
    type: 'multiple',
    score: 4,
    topic: '교과서 문제',
    text: `다음 <보기>에서 일차부등식은 모두 몇 개인가?
<보기>
ㄱ. 5<8−x
ㄴ. y=x+y+1
ㄷ. 2x+y+1=4
ㄹ. 3x−(7−x)>4x
ㅁ. x[sup:2]>2x−1
ㅂ. x[sup:2]<x(x+1)−2`,
    options: [
      { id: '28-1', label: '①', text: `1개` },
      { id: '28-2', label: '②', text: `2개` },
      { id: '28-3', label: '③', text: `3개` },
      { id: '28-4', label: '④', text: `4개` },
      { id: '28-5', label: '⑤', text: `5개` }
    ],
    answer: `②`,
    explanation: `ㄱ, ㅂ 2개가 일차부등식입니다. ㄹ은 x항이 소거되며, ㅁ은 이차부등식입니다.`
  },
  {
    id: 29,
    type: 'multiple',
    score: 4,
    topic: '교과서 문제',
    text: `다음 중 연립방정식 {
−2x+5y=−1⋯㉠
3x+y=7⋯㉡
에서 x 또는 y를 소거할 때 사용할 수 있는 식을 모두 고르면? (정답 2개)`,
    options: [
      { id: '29-1', label: '①', text: `㉠ - ㉡ ×5` },
      { id: '29-2', label: '②', text: `㉠ + ㉡ ×5` },
      { id: '29-3', label: '③', text: `㉠ ×3 - ㉡ ×2` },
      { id: '29-4', label: '④', text: `㉠ ×3 + ㉡ ×2` },
      { id: '29-5', label: '⑤', text: `㉠ ×5 + ㉡` }
    ],
    answer: `①, ④`,
    explanation: `y를 소거하려면 ㉠에서 ㉡의 5배를 빼야 하고(①), x를 소거하려면 최소공배수를 맞춰 더해야(④) 합니다.`
  },
  {
    id: 30,
    type: 'multiple',
    score: 4,
    topic: '교과서 문제',
    text: `다음 부등식 중 해가 나머지 넷과 다른 하나는?`,
    options: [
      { id: '30-1', label: '①', text: `−2x>6` },
      { id: '30-2', label: '②', text: `3x−1<2(x−2)` },
      { id: '30-3', label: '③', text: `1.2−0.7x<0.3−x` },
      { id: '30-4', label: '④', text: `[frac:3/5]x−[frac:1/3]>−[frac:1/5]x−1` },
      { id: '30-5', label: '⑤', text: `[frac:2x+3/5]>0.7x+[frac:3/2]` }
    ],
    answer: `④`,
    explanation: `①, ②, ③, ⑤의 해는 모두 x<−3 이지만, ④는 9x−5>−3x−15 에서 x>−[frac:5/6] 가 되어 다릅니다.`
  },
  {
    id: 31,
    type: 'multiple',
    score: 4,
    topic: '교과서 문제',
    text: `a<0 일 때, x에 대한 일차부등식 ax+5>0 을 풀면?`,
    options: [
      { id: '31-1', label: '①', text: `x<−[frac:5/a]` },
      { id: '31-2', label: '②', text: `x>−[frac:5/a]` },
      { id: '31-3', label: '③', text: `x<−[frac:a/5]` },
      { id: '31-4', label: '④', text: `x<[frac:5/a]` },
      { id: '31-5', label: '⑤', text: `x>[frac:5/a]` }
    ],
    answer: `①`,
    explanation: `ax>−5 에서 양변을 음수 a로 나누면 부등호의 방향이 바뀌어 x<−[frac:5/a] 가 됩니다.`
  },
  {
    id: 32,
    type: 'short',
    score: 5,
    topic: '교과서 문제',
    text: `일차부등식 x−a>3x+1 의 해가 x<−3 이다. 일차부등식 2(1−x)>a−7(x−6) 의 해를 구하시오. (단, a는 상수이다.)`,
    answer: `x>9`,
    explanation: `첫 번째 식을 풀면 x<[frac:−a−1/2] 가 되며 이 값이 −3이므로 a=5입니다. 두 번째 식에 a=5를 대입해 풀면 5x>45⇒x>9 입니다.`
  },
  {
    id: 33,
    type: 'short',
    score: 5,
    topic: '교과서 문제',
    text: `한 송이에 1500원짜리 장미로 꽃다발을 만들려고 한다. 꽃다발 포장 비용이 5500원일 때, 전체 비용이 25000원 이하가 되게 하려면 장미를 최대 몇 송이까지 넣을 수 있는지 구하시오.`,
    answer: `13송이`,
    explanation: `1500x+5500≤25000⇒1500x≤19500⇒x≤13 입니다.`
  },
  {
    id: 34,
    type: 'short',
    score: 5,
    topic: '교과서 문제',
    text: `일차방정식 4x+5y=66 을 만족시키는 x,y 의 값 중에서 x:y=3:2 를 만족시키는 x,y 의 값을 각각 구하시오.`,
    answer: `x=9,y=6`,
    explanation: `2x=3y⇒x=1.5y 를 4x+5y=66 에 대입하면 11y=66⇒y=6,x=9 가 됩니다.`
  },
  {
    id: 35,
    type: 'short',
    score: 5,
    topic: '교과서 문제',
    text: `윤설이와 민설이가 연립방정식 {
ax−2y=8
2x+by=−1
을 푸는데 윤설이는 a를 잘못 보고 풀어서 x=−3,y=1 을 얻었고, 민설이는 b를 잘못 보고 풀어서 x=4,y=2 를 얻었을 때 이 연립방정식을 바르게 푸시오. (단, a,b는 상수이다.)`,
    answer: `x=2,y=−1`,
    explanation: `윤설이는 밑의 식을 바르게 봤으므로 2(−3)+b(1)=−1⇒b=5. 민설이는 위의 식을 바르게 봤으므로 4a−4=8⇒a=3. 바른 식을 연립하여 풉니다.`
  },
  {
    id: 36,
    type: 'short',
    score: 5,
    topic: '교과서 문제',
    text: `일차부등식 2x−2>3x−a 의 해가 모두 음수가 되도록 하는 자연수 a 의 값 중에서 가장 큰 값을 구하시오.`,
    answer: `2`,
    explanation: `식을 정리하면 x<a−2 입니다. 해가 모두 음수이려면 상한선이 0 이하가 되어야 하므로 a−2≤0⇒a≤2 입니다. 가장 큰 자연수는 2입니다.`
  },
  {
    id: 37,
    type: 'short',
    score: 5,
    topic: '교과서 문제',
    text: `x=a,y=b 는 연립방정식 {
x+[frac:y/3]=−1
0.25y=1+[frac:x/8]
의 해이다. x에 대한 부등식 a(x−b)≤2−x 를 푸시오.`,
    answer: `x≥4`,
    explanation: `연립방정식을 풀면 a=−2,b=3입니다. 부등식 −2(x−3)≤2−x 를 풀면 −x≤−4⇒x≥4 입니다.`
  },
  {
    id: 38,
    type: 'short',
    score: 5,
    topic: '교과서 문제',
    text: `하율이는 걷기 행사에서 15km 의 코스를 완주했다. 처음에는 시속 6km 의 일정한 속력으로 걷다가 중간 어느 지점부터 시속 4km 의 일정한 속력으로 걸었더니 총 3시간이 걸렸다. 하율이가 시속 6km 로 걸은 거리와 시속 4km 로 걸은 거리는 각각 몇 km 인지 구하시오.`,
    answer: `시속 6km 거리 9km, 시속 4km 거리 6km`,
    explanation: `거리를 x,y로 두면 x+y=15, [frac:x/6]+[frac:y/4]=3 입니다. 연립하면 x=9,y=6 입니다.`
  },
  {
    id: 39,
    type: 'short',
    score: 5,
    topic: '교과서 문제',
    text: `다음 글을 읽고, 처음에 노새와 당나귀는 각각 몇 자루의 짐을 가지고 있었는지 구하시오.
(노새: "힘들지? 내가 너의 짐 중 한 자루를 가져가 볼까? 그러면 내 짐이 네 짐의 2배가 돼.")
(당나귀: "아니야, 그러면 너의 짐을 한 자루 가져오면 너의 짐과 내 짐이 수가 같아져.")`,
    answer: `노새 7자루, 당나귀 5자루`,
    explanation: `노새를 x, 당나귀를 y라 하면 {
x+1=2(y−1)
x−1=y+1
입니다. 이를 풀면 나옵니다.`
  },
  {
    id: 40,
    type: 'essay',
    score: 6,
    topic: '교과서 문제',
    text: `어느 영화관의 가격은 한 편당 15000원이다. '청소년 할인'을 받으면 한 편당 1000원을 할인받고, '특별 회원 할인'을 받으면 1년 가입비 4000원을 내는 대신 1년 동안 한 편당 15% 할인을 받는다. (할인은 중복 적용되지 않음) 청소년인 다빈이가 이 영화관에서 1년 동안 영화를 몇 편 이상 볼 때 특별 회원 할인을 받는 것이 더 유리한지 구하시오.`,
    subQuestions: [
      { id: '40-1', text: '과정을 서술하시오.', score: 6 , answer: `4편 이상` , explanation: `다빈이가 1년 동안 영화를 x편 본다고 가정합시다.\n1) '청소년 할인'을 받을 경우:\n한 편당 1000원 할인이므로 15000 - 1000 = 14000원입니다.\n따라서 총 비용은 14000x 원입니다.\n\n2) '특별 회원 할인'을 받을 경우:\n가입비 4000원에 한 편당 15% 할인이므로 15000 × (1 - 0.15) = 15000 × 0.85 = 12750원입니다.\n따라서 총 비용은 4000 + 12750x 원입니다.\n\n특별 회원 할인을 받는 것이 더 유리하려면 특별 회원 할인의 총 비용이 더 적어야 합니다.\n14000x > 4000 + 12750x\n1250x > 4000\nx > 3.2\n따라서 다빈이는 영화를 4편 이상 볼 때 특별 회원 할인을 받는 것이 더 유리합니다.` }
    ],
    answer: `4편 이상`,
    explanation: `14000x>4000+12750x⇒1250x>4000⇒x>3.2 이므로 4편 이상입니다.`
  },
  {
    id: 41,
    type: 'essay',
    score: 6,
    topic: '교과서 문제',
    text: `어느 지방 자치 단체는 예산 1280만 원으로 관광 활성화 기금을 운영하려고 한다. 지원 대상은 관광객 200명이며, 숙박비 지원(7만 원) 또는 체험비 지원(5.5만 원) 중 하나만 받을 수 있다. 예산을 모두 사용하여 관광객 200명에게 지원하려면 숙박비 지원 대상자와 체험비 지원 대상자를 각각 몇 명으로 정할지 구하시오.`,
    subQuestions: [
      { id: '41-1', text: '과정을 서술하시오.', score: 6 , answer: `숙박비 지원 120명, 체험비 지원 80명` , explanation: `숙박비 지원 대상자를 x명, 체험비 지원 대상자를 y명이라고 합시다.\n1) 지원 대상은 총 200명이므로:\nx + y = 200\n2) 총 예산은 1280만 원이므로:\n7x + 5.5y = 1280\n\n위 두 일차방정식을 연립하여 풉니다.\n첫 번째 식에서 y = 200 - x를 두 번째 식에 대입합니다.\n7x + 5.5(200 - x) = 1280\n7x + 1100 - 5.5x = 1280\n1.5x = 180\nx = 120\n\nx = 120을 x + y = 200에 대입하면:\n120 + y = 200\ny = 80\n\n따라서 숙박비 지원 대상자는 120명, 체험비 지원 대상자는 80명입니다.` }
    ],
    answer: `숙박비 지원 120명, 체험비 지원 80명`,
    explanation: `숙박을 x, 체험을 y라 하면 x+y=200, 7x+5.5y=1280 입니다. 연립하면 1.5x=180⇒x=120 입니다.`
  },
  {
    id: 42,
    type: 'multiple',
    score: 4,
    topic: '교과서 문제',
    text: `다음 중 y가 x의 일차함수인 것을 모두 고르면? (정답 2개)`,
    options: [
      { id: '42-1', label: '①', text: `자연수 x의 약수의 개수 y` },
      { id: '42-2', label: '②', text: `한 변의 길이가 xcm인 정사각형의 둘레의 길이 ycm` },
      { id: '42-3', label: '③', text: `부피가 12cm[sup:3] 인 원기둥의 밑넓이가 xcm[sup:2] 일 때, 높이 ycm` },
      { id: '42-4', label: '④', text: `나이가 x세인 손주와 나이 차가 50세인 할머니의 나이 y세` },
      { id: '42-5', label: '⑤', text: `시속 xkm로 100km를 가는 데 걸리는 시간 y시간` }
    ],
    answer: `②, ④`,
    explanation: `② y=4x (일차), ④ y=50+x (또는 50-x, 일차)입니다. ①은 일차가 아니고, ③과 ⑤는 반비례 관계입니다.`
  },
  {
    id: 43,
    type: 'short',
    score: 4,
    topic: '교과서 문제',
    text: `일차함수 y=2x+6 의 그래프에서 x절편과 y절편의 합을 구하시오.`,
    answer: `3`,
    explanation: `x절편은 −3, y절편은 6이므로 합은 3입니다.`
  },
  {
    id: 44,
    type: 'short',
    score: 5,
    topic: '교과서 문제',
    text: `일차함수 f(x)=3x−a 에서 f(2)=a 일 때, f(4) 의 값을 구하시오. (단, a는 상수이다.)`,
    answer: `9`,
    explanation: `f(2)=6−a=a⇒a=3입니다. f(x)=3x−3이므로 f(4)=9입니다.`
  },
  {
    id: 45,
    type: 'multiple',
    score: 4,
    topic: '교과서 문제',
    text: `다음 중 일차함수 y=[frac:4/5]x−4 의 그래프에 대한 설명으로 옳은 것은?`,
    options: [
      { id: '45-1', label: '①', text: `x절편이 −5 이고 y절편이 −4 인 직선이다.` },
      { id: '45-2', label: '②', text: `x절편이 5 이고 y절편이 4 인 직선이다.` },
      { id: '45-3', label: '③', text: `x절편이 5 이고 y절편이 −4 인 직선이다.` },
      { id: '45-4', label: '④', text: `x절편이 −4 이고 y절편이 5 인 직선이다.` },
      { id: '45-5', label: '⑤', text: `x절편이 4 이고 y절편이 −5 인 직선이다.` }
    ],
    answer: `③`,
    explanation: `y=0일 때 x=5이므로 x절편은 5이고, y절편은 상수항인 −4입니다.`
  },
  {
    id: 46,
    type: 'short',
    score: 5,
    topic: '교과서 문제',
    text: `일차함수 y=ax+b 의 그래프가 x축과 점 (3,0)에서 만나고 y축과 점 (0,4)에서 만날 때, 일차함수 y=bx+a 의 그래프의 x절편을 구하시오. (단, a,b는 상수이다.)`,
    answer: `[frac:1/3]`,
    explanation: `절편이 3과 4이므로 기울기 −[frac:4/3], y절편 4입니다. a=−[frac:4/3], b=4이므로 바뀐 식 y=4x−[frac:4/3] 의 x절편은 [frac:1/3] 입니다.`
  },
  {
    id: 47,
    type: 'short',
    score: 5,
    topic: '교과서 문제',
    text: `x절편이 3 이고 y절편이 2 인 일차함수의 그래프를 y축의 방향으로 −3 만큼 평행이동한 그래프가 점 (6,a) 를 지난다. a의 값을 구하시오.`,
    answer: `−5`,
    explanation: `원래 식 y=−[frac:2/3]x+2 를 −3 평행이동하면 y=−[frac:2/3]x−1 입니다. 6을 대입하면 a=−5입니다.`
  },
  {
    id: 48,
    type: 'short',
    score: 5,
    topic: '교과서 문제',
    text: `두 점 (4,−5),(−2,4) 를 지나는 일차함수의 그래프가 x축과 만나는 점의 좌표를 구하시오.`,
    answer: `([frac:2/3],0)`,
    explanation: `기울기가 −[frac:3/2] 이고 식은 y=−[frac:3/2]x+1 입니다. y=0 이 되는 x는 [frac:2/3] 입니다.`
  },
  {
    id: 49,
    type: 'short',
    score: 5,
    topic: '교과서 문제',
    text: `일차함수 y=ax+2 의 그래프는 점 (3,b) 를 지나고, 일차함수 y=[frac:1/2]x−1 의 그래프와 만나지 않는다. a+b 의 값을 구하시오. (단, a는 상수이다.)`,
    answer: `4`,
    explanation: `평행하므로 a=[frac:1/2] 입니다. y=[frac:1/2]x+2 에 (3,b) 대입 시 b=[frac:7/2] 이며 합은 4입니다.`
  },
  {
    id: 50,
    type: 'short',
    score: 5,
    topic: '교과서 문제',
    text: `직선 y=ax+b 는 직선 y=3x−1 과 평행하고, 직선 y=−4x+2 와 y축 위에서 만난다. ab 의 값을 구하시오. (단, a,b는 상수이다.)`,
    answer: `6`,
    explanation: `평행하므로 a=3, y축 위에서 만나므로 y절편이 같아 b=2 입니다. 곱은 6입니다.`
  },
  {
    id: 51,
    type: 'short',
    score: 5,
    topic: '교과서 문제',
    text: `레이더에 어떤 물체가 일직선 방향으로 이동하는 것을 포착했다. 이 물체가 일직선으로 지나간 세 점의 좌표가 (2,2),(4,3),(8,p) 였을 때, p의 값을 구하시오.`,
    answer: `5`,
    explanation: `(2,2)와 (4,3)의 기울기는 [frac:1/2] 입니다. (4,3)과 (8,p)의 기울기도 [frac:1/2] 이 되려면 p=5입니다.`
  },
  {
    id: 52,
    type: 'short',
    score: 5,
    topic: '교과서 문제',
    text: `두 일차방정식 ax−by=−4 와 (b+1)x+y=9 의 그래프가 점 (2,3) 에서 교차할 때, 상수 a,b 의 값을 각각 구하시오.`,
    answer: `a=1,b=2`,
    explanation: `(2,3)을 대입하면 {
2a−3b=−4
2(b+1)+3=9
가 되며 차례로 풀면 됩니다.`
  },
  {
    id: 53,
    type: 'short',
    score: 6,
    topic: '교과서 문제',
    text: `일차방정식 3x+ay−2=0 의 그래프가 다음 조건을 만족시킬 때, a,b 의 값을 각각 구하시오.
- 직선 6x−(3b+2)y−4=0 과 두 개 이상의 점에서 만난다.
- 직선 3x−by+4=0 과 만나지 않는다.`,
    answer: `a=2,b=−2`,
    explanation: `계수의 비율을 이용합니다. 일치 조건에서 2a=−3b−2, 평행 조건에서 a=−b 가 나옵니다. 연립하여 풉니다.`
  },
  {
    id: 54,
    type: 'essay',
    score: 6,
    topic: '교과서 문제',
    text: `a>0,b>0,c>0 일 때, 일차방정식 ax+by+c=0 의 그래프가 지나지 않는 사분면을 구하시오.`,
    subQuestions: [
      { id: '54-1', text: '과정을 서술하시오.', score: 6 , answer: `제1사분면` , explanation: `y=−[frac:a/b]x−[frac:c/b] 로 고치면 기울기와 y절편 모두 음수가 되므로 제2, 3, 4사분면을 지납니다.` }
    ],
    answer: `제1사분면`,
    explanation: `y=−[frac:a/b]x−[frac:c/b] 로 고치면 기울기와 y절편 모두 음수가 되므로 제2, 3, 4사분면을 지납니다.`
  },
  {
    id: 55,
    type: 'essay',
    score: 6,
    topic: '교과서 문제',
    text: `섭씨온도(∘C)는 물의 어는점을 0∘C, 끓는점을 100∘C로 하여 그 사이를 100등분한 온도이다. 화씨온도(∘F)는 물의 어는점을 32∘F, 끓는점을 212∘F로 하여 그 사이를 180등분한 온도이다. 섭씨온도를 x∘C, 화씨온도를 y∘F라고 할 때, 다음 물음에 답하시오.
(1) y를 x에 대한 식으로 나타내시오.
(2) 화씨온도가 95∘F일 때, 섭씨온도는 몇 ∘C인지 구하시오.`,
    subQuestions: [
      { id: '55-1', text: '과정을 서술하시오.', score: 6 , answer: `(1) y=[frac:9/5]x+32 (2) 35∘C` , explanation: `(0,32), (100,212) 를 지나는 직선의 식을 구하고, y=95 일 때의 x값을 대입하여 계산합니다.` }
    ],
    answer: `(1) y=[frac:9/5]x+32 (2) 35∘C`,
    explanation: `(0,32), (100,212) 를 지나는 직선의 식을 구하고, y=95 일 때의 x값을 대입하여 계산합니다.`
  }
];

export const TOTAL_SCORE = questions.reduce((sum, q) => sum + q.score, 0);

export function getTotalScore(): number {
  return TOTAL_SCORE;
}

export function getTypeLabel(type: QuestionType): string {
  switch (type) {
    case 'multiple': return '객관식';
    case 'short': return '서답형';
    case 'essay': return '서술형';
  }
}

