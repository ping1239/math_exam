import { Question, QuestionType } from './examData';

export const EXAM_TITLE = '중단원 실전 TEST - 도형의 닮음 (표준)';
export const EXAM_SUBTITLE = '중학교 2-2 도형의 닮음 실전 모의고사';

export const questions: Question[] = [
  {
    id: 1,
    type: 'multiple',
    score: 3,
    topic: '도형의 닮음',
    text: '다음 중 항상 닮음인 도형을 모두 고르면? (정답 2개)',
    options: [
      { id: '1-1', label: '①', text: '두 이등변삼각형' },
      { id: '1-2', label: '②', text: '두 정삼각형' },
      { id: '1-3', label: '③', text: '두 직사각형' },
      { id: '1-4', label: '④', text: '두 마름모' },
      { id: '1-5', label: '⑤', text: '두 정사각형' }
    ],
    answer: '②, ⑤',
    explanation: '항상 닮음인 평면도형은 변의 개수가 같은 정다각형, 그리고 원 등이 있단다.\n따라서 보기 중에서 항상 닮음인 도형은 두 정삼각형(②)과 두 정사각형(⑤)이야.'
  },
  {
    id: 2,
    type: 'multiple',
    score: 3,
    topic: '도형의 닮음',
    text: '오른쪽 그림에서 △ABC ∽ △DEF일 때, 다음 중 옳지 않은 것은?',
    imageUrl: '/assets/images/exam12/q2.png',
    options: [
      { id: '2-1', label: '①', text: '점 B의 대응점은 점 E이다.' },
      { id: '2-2', label: '②', text: '[bar]AC의 대응변은 [bar]DF이다.' },
      { id: '2-3', label: '③', text: '∠A와 ∠D의 크기는 같다.' },
      { id: '2-4', label: '④', text: 'a : b = d : f' },
      { id: '2-5', label: '⑤', text: '닮음비는 b : e이다.' }
    ],
    answer: '⑤',
    explanation: '△ABC ∽ △DEF라고 할 때, 기호의 순서대로 대응점과 대응변이 결정된단다.\n① 점 B의 대응점은 점 E이다. (맞음)\n② [bar]AC의 대응변은 [bar]DF이다. (맞음)\n③ ∠A의 대응각은 ∠D이므로 크기가 같다. (맞음)\n⑤ 닮음비는 대응하는 두 선분의 길이의 비이므로 잘못 표현된 부분이야.\n∴ 정답: ⑤'
  },
  {
    id: 3,
    type: 'multiple',
    score: 3,
    topic: '도형의 닮음',
    text: '오른쪽 그림에서 □ABCD ∽ □EFGH일 때, [bar]EF의 길이는?',
    imageUrl: '/assets/images/exam12/q3.png',
    options: [
      { id: '3-1', label: '①', text: '4.5 cm' },
      { id: '3-2', label: '②', text: '5 cm' },
      { id: '3-3', label: '③', text: '5.5 cm' },
      { id: '3-4', label: '④', text: '6 cm' },
      { id: '3-5', label: '⑤', text: '6.5 cm' }
    ],
    answer: '④',
    explanation: '□ABCD ∽ □EFGH에서 [bar]AD의 대응변은 [bar]EH야.\n닮음비는 [bar]AD : [bar]EH = 6 : 12 = 1 : 2 가 된단다.\n[bar]AB의 대응변이 [bar]EF이므로 비례식을 세우면 다음과 같아.\n\n1 : 2 = 3 : [bar]EF\n\n∴ [bar]EF = 6 cm\n\n∴ 정답: ④'
  },
  {
    id: 4,
    type: 'multiple',
    score: 3,
    topic: '도형의 닮음',
    text: '오른쪽 그림의 두 원은 닮음비가 3 : 4인 닮은 도형이다. 원 O\'의 둘레의 길이가 32π cm일 때, 원 O의 반지름의 길이는 몇 cm인가?',
    imageUrl: '/assets/images/exam12/q4.png',
    options: [
      { id: '4-1', label: '①', text: '10 cm' },
      { id: '4-2', label: '②', text: '11 cm' },
      { id: '4-3', label: '③', text: '12 cm' },
      { id: '4-4', label: '④', text: '13 cm' },
      { id: '4-5', label: '⑤', text: '14 cm' }
    ],
    answer: '③',
    explanation: '두 원의 닮음비가 3:4이면, 원의 둘레의 길이의 비도 똑같이 3:4가 성립해.\n(원 O의 둘레) : (원 O\'의 둘레) = 3 : 4 이므로,\n(원 O의 둘레) : 32π = 3 : 4\n4 × (원 O의 둘레) = 96π\n(원 O의 둘레) = 24π cm\n원 O의 반지름을 r이라고 하면, 2πr = 24π 이므로 r = 12 cm 란다.\n∴ 정답: ③'
  },
  {
    id: 5,
    type: 'multiple',
    score: 3,
    topic: '입체도형의 닮음',
    text: '다음 그림의 두 사면체는 닮은 도형이고 △ABC에 대응하는 면이 △A\'B\'C\'일 때, 다음 중 옳지 않은 것은?',
    imageUrl: '/assets/images/exam12/q5.png',
    options: [
      { id: '5-1', label: '①', text: '[bar]C\'D\' = 2[bar]CD' },
      { id: '5-2', label: '②', text: '[bar]B\'C\' = 6 cm' },
      { id: '5-3', label: '③', text: '△ABD ∽ △A\'B\'D\'' },
      { id: '5-4', label: '④', text: '[bar]AB : [bar]A\'B\' = 1 : 2' },
      { id: '5-5', label: '⑤', text: '[frac:[bar]B\'D\'/[bar]BD] = [frac:1/2]' }
    ],
    answer: '⑤',
    explanation: '두 사면체의 대응하는 모서리 [bar]BC와 [bar]B\'C\'의 비를 통해 두 입체도형의 닮음비가 1:2임을 알 수 있어.\n닮은 두 입체도형에서 대응하는 모든 모서리의 길이의 비는 일정하게 1:2가 되어야 한단다. ⑤번 보기는 이 비율을 잘못 나타내고 있어.\n∴ 정답: ⑤'
  },
  {
    id: 6,
    type: 'multiple',
    score: 3,
    topic: '닮음의 활용 (부피)',
    text: '오른쪽 그림과 같은 원뿔 모양의 그릇에 그릇의 높이의 [frac:1/3]만큼 물을 채웠을 때, 그릇에 담긴 물의 부피는?',
    imageUrl: '/assets/images/exam12/q6.png',
    options: [
      { id: '6-1', label: '①', text: '120π cm³' },
      { id: '6-2', label: '②', text: '125π cm³' },
      { id: '6-3', label: '③', text: '130π cm³' },
      { id: '6-4', label: '④', text: '135π cm³' },
      { id: '6-5', label: '⑤', text: '140π cm³' }
    ],
    answer: '①',
    explanation: '원뿔 모양 그릇의 전체 높이와 채워진 물의 높이의 비가 3:1이야.\n입체도형에서 닮음비가 m:n일 때 부피비는 m[sup:3]:n[sup:3]이므로, 부피비는 3[sup:3] : 1[sup:3] = 27 : 1이 된단다.\n그릇의 전체 부피 V를 구해보자.\n\nV = [frac:1/3] × π × 18[sup:2] × 30 = 3240π cm³\n\n그릇에 담긴 물의 부피는 전체 부피의 [frac:1/27]이므로,\n물의 부피 = 3240π × [frac:1/27] = 120π cm³ 이야.\n∴ 정답: ①'
  },
  {
    id: 7,
    type: 'multiple',
    score: 3,
    topic: '삼각형의 닮음 조건',
    text: '다음 중 삼각형의 닮음 조건을 모두 고르면? (정답 2개)',
    options: [
      { id: '7-1', label: '①', text: '두 쌍의 대응변의 길이의 비가 같다.' },
      { id: '7-2', label: '②', text: '세 쌍의 대응변의 길이의 비가 같다.' },
      { id: '7-3', label: '③', text: '두 쌍의 대응각의 크기가 각각 같다.' },
      { id: '7-4', label: '④', text: '두 쌍의 대응변의 길이의 비가 같고, 한 쌍의 대응각의 크기가 같다.' },
      { id: '7-5', label: '⑤', text: '한 쌍의 대응변의 길이와 그 양 끝 각의 크기가 각각 같다.' }
    ],
    answer: '②, ③',
    explanation: '삼각형의 닮음 조건은 다음 3가지란다.\n\n* 세 쌍의 대응변의 길이의 비가 같다. (SSS 닮음)\n* 두 쌍의 대응변의 길이의 비가 같고, 그 끼인각의 크기가 같다. (SAS 닮음)\n* 두 쌍의 대응각의 크기가 각각 같다. (AA 닮음)\n\n보기 중 이에 해당하는 정확한 설명은 ②번과 ③번이야.\n∴ 정답: ②, ③'
  },
  {
    id: 8,
    type: 'multiple',
    score: 3,
    topic: '삼각형의 닮음',
    text: '다음 중 오른쪽 그림의 삼각형과 닮은 도형인 것은?',
    imageUrl: '/assets/images/exam12/q8.png',
    options: [
      { id: '8-1', label: '①', text: '1번 도형' },
      { id: '8-2', label: '②', text: '2번 도형' },
      { id: '8-3', label: '③', text: '3번 도형' },
      { id: '8-4', label: '④', text: '4번 도형' },
      { id: '8-5', label: '⑤', text: '5번 도형' }
    ],
    answer: '②',
    explanation: '삼각형의 세 내각의 합은 180°야. 주어진 삼각형의 두 각이 100°와 40°라면 나머지 한 각도 계산상 40°가 된단다.\n따라서 보기 중에서 이 삼각형과 두 쌍의 대응각의 크기가 같은(AA 닮음 조건) 삼각형을 찾으면 돼.\n∴ 정답: ②'
  },
  {
    id: 9,
    type: 'multiple',
    score: 3,
    topic: '삼각형의 닮음',
    text: '오른쪽 그림의 △ABC와 △DEF가 닮은 도형이 되려면 다음 중 어느 조건이 필요한가?',
    imageUrl: '/assets/images/exam12/q9.png',
    options: [
      { id: '9-1', label: '①', text: '[bar]AB=12, [bar]BC=6' },
      { id: '9-2', label: '②', text: '[bar]AB=12, [bar]DE=8' },
      { id: '9-3', label: '③', text: '[bar]BC=7, [bar]EF=4' },
      { id: '9-4', label: '④', text: '∠A=50°, ∠E=50°' },
      { id: '9-5', label: '⑤', text: '∠C=80°, ∠D=40°' }
    ],
    answer: '⑤',
    explanation: '△ABC와 △DEF에서 주어진 변의 비를 확인해 보자.\n\n[bar]AB : [bar]DE = 12 : 8 = 3 : 2\n[bar]BC : [bar]EF = 6 : 4 = 3 : 2\n\n현재 두 쌍의 대응변의 길이의 비가 3:2로 같아. 이 상태에서 두 삼각형이 SAS 닮음이 되려면 반드시 그 \'끼인각\'의 크기가 같아야 해. 따라서 ∠B = ∠E 조건이 필요하단다.\n∴ 정답: ⑤'
  },
  {
    id: 10,
    type: 'multiple',
    score: 3,
    topic: '삼각형의 닮음',
    text: '오른쪽 그림에서 ∠AED=∠ABC일 때, [bar]DB의 길이는?',
    imageUrl: '/assets/images/exam12/q10.png',
    options: [
      { id: '10-1', label: '①', text: '1 cm' },
      { id: '10-2', label: '②', text: '[frac:3/2] cm' },
      { id: '10-3', label: '③', text: '2 cm' },
      { id: '10-4', label: '④', text: '[frac:5/2] cm' },
      { id: '10-5', label: '⑤', text: '3 cm' }
    ],
    answer: '③',
    explanation: '△ADE와 △ACB에서,\n∠A는 공통각이고, 주어진 조건에 의해 ∠AED = ∠ABC야.\n두 쌍의 대응각의 크기가 같으므로 △ADE ∽ △ACB (AA 닮음)가 성립해.\n닮은 두 삼각형의 대응변의 길이의 비는 같으므로 비례식을 세울 수 있어.\n\n[bar]AE : [bar]AB = [bar]AD : [bar]AC\n\n문제에서 주어진 값([bar]AE=4, [bar]AD=6, [bar]AC=12)을 대입해 볼게.\n\n4 : [bar]AB = 6 : 12\n\n외항의 곱과 내항의 곱이 같으므로,\n6 × [bar]AB = 48\n[bar]AB = 8 cm\n\n우리가 구해야 하는 [bar]DB의 길이는 [bar]AB - [bar]AD 이므로,\n[bar]DB = 8 - 6 = 2 cm\n가 된단다.\n∴ 정답: ③'
  },
  {
    id: 11,
    type: 'multiple',
    score: 3,
    topic: '삼각형의 닮음',
    text: '오른쪽 그림과 같은 △ABC에서 [bar]DE의 길이는?',
    imageUrl: '/assets/images/exam12/q11.png',
    options: [
      { id: '11-1', label: '①', text: '5 cm' },
      { id: '11-2', label: '②', text: '[frac:16/3] cm' },
      { id: '11-3', label: '③', text: '[frac:11/2] cm' },
      { id: '11-4', label: '④', text: '6 cm' },
      { id: '11-5', label: '⑤', text: '[frac:13/2] cm' }
    ],
    answer: '④',
    explanation: '△ABC와 △ADE를 살펴볼까? ∠A는 두 삼각형의 공통각이란다.\n대응하는 변의 길이의 비를 구해보면 [bar]AB:[bar]AD = 21:14 = 3:2 이고, [bar]AC:[bar]AE = 15:10 = 3:2 가 된단다.\n두 쌍의 대응변의 비가 같고 그 끼인각이 같으므로 △ABC ∽ △ADE (SAS 닮음)이야.\n따라서 밑변의 비도 같아야 하므로 [bar]BC:[bar]DE = 3:2 가 성립해.\n\n9 : [bar]DE = 3 : 2\n3[bar]DE = 18 ⇒ [bar]DE = 6 cm\n\n∴ 정답: ④'
  },
  {
    id: 12,
    type: 'multiple',
    score: 3,
    topic: '닮음의 응용',
    text: '오른쪽 그림과 같은 평행사변형 ABCD에서 [bar]AC=15 cm이고 [bar]AE:[bar]ED=2:1일 때, [bar]AF의 길이는?',
    imageUrl: '/assets/images/exam12/q12.png',
    options: [
      { id: '12-1', label: '①', text: '5 cm' },
      { id: '12-2', label: '②', text: '5.5 cm' },
      { id: '12-3', label: '③', text: '6 cm' },
      { id: '12-4', label: '④', text: '6.5 cm' },
      { id: '12-5', label: '⑤', text: '7 cm' }
    ],
    answer: '③',
    explanation: '[bar]AD // [bar]BC 이므로 엇각인 ∠FAE = ∠FCB 이고, 맞꼭지각인 ∠AFE = ∠CFB 란다.\n따라서 두 각의 크기가 같으므로 △AFE ∽ △CFB (AA 닮음)이 돼.\n평행사변형은 마주 보는 대변의 길이가 같으므로 [bar]AD = [bar]BC 이고, 주어진 조건 [bar]AE:[bar]ED = 2:1 에 의해 닮음비는 [bar]AE:[bar]BC = 2:3 이야.\n대응변의 비례식 [bar]AF:[bar]FC = 2:3 을 세울 수 있고, 전체 [bar]AC = 15 cm 이므로 비례배분을 하면 된단다.\n\n[bar]AF = 15 × [frac:2/2+3] = 15 × [frac:2/5] = 6 cm\n\n∴ 정답: ③'
  },
  {
    id: 13,
    type: 'multiple',
    score: 3,
    topic: '직각삼각형의 닮음',
    text: '오른쪽 그림과 같은 △ABC에서 [bar]AB⊥[bar]CD, [bar]AC⊥[bar]BE이고 [bar]AD=3 cm, [bar]DB=9 cm, [bar]AE=4 cm일 때, [bar]EC의 길이는?',
    imageUrl: '/assets/images/exam12/q13.png',
    options: [
      { id: '13-1', label: '①', text: '4 cm' },
      { id: '13-2', label: '②', text: '4.5 cm' },
      { id: '13-3', label: '③', text: '5 cm' },
      { id: '13-4', label: '④', text: '5.5 cm' },
      { id: '13-5', label: '⑤', text: '6 cm' }
    ],
    answer: '③',
    explanation: '△ADC와 △AEB를 떼어 놓고 볼까? ∠A는 공통각이고, ∠ADC = ∠AEB = 90° 이므로 두 삼각형은 AA 닮음이야.\n대응변의 비례식을 세우면 [bar]AD : [bar]AE = [bar]AC : [bar]AB 가 된단다.\n[bar]AB = [bar]AD + [bar]DB = 3 + 9 = 12 cm 이므로 값을 비례식에 대입해 보자.\n\n3 : 4 = [bar]AC : 12\n4[bar]AC = 36 ⇒ [bar]AC = 9 cm\n\n우리가 최종적으로 구하려는 길이는 [bar]EC 이므로 다음과 같이 계산할 수 있어.\n[bar]EC = [bar]AC - [bar]AE = 9 - 4 = 5 cm\n\n∴ 정답: ③'
  },
  {
    id: 14,
    type: 'multiple',
    score: 3,
    topic: '직각삼각형의 닮음',
    text: '오른쪽 그림과 같은 직각삼각형 ABC에서 [bar]BC⊥[bar]DE일 때, [bar]AD의 길이는?',
    imageUrl: '/assets/images/exam12/q14.png',
    options: [
      { id: '14-1', label: '①', text: '3 cm' },
      { id: '14-2', label: '②', text: '3.5 cm' },
      { id: '14-3', label: '③', text: '4 cm' },
      { id: '14-4', label: '④', text: '4.5 cm' },
      { id: '14-5', label: '⑤', text: '5 cm' }
    ],
    answer: '③',
    explanation: '△ABC와 △EDC에서 ∠C는 공통각이고, ∠A = ∠DEC = 90° 이므로 AA 닮음이 성립해.\n두 닮은 삼각형의 대응변 길이 비례식인 [bar]AC:[bar]EC = [bar]BC:[bar]DC 를 세울 수 있단다.\n문제 그림에 주어진 선분들의 길이를 대입하여 [bar]DC의 길이를 우선적으로 구해야 해.\n비례식을 풀어 [bar]DC를 구한 뒤, [bar]AD = [bar]AC - [bar]DC 의 식에 대입하여 계산하면 최종적으로 [bar]AD = 4 cm 가 도출된단다.\n∴ 정답: ③'
  },
  {
    id: 15,
    type: 'multiple',
    score: 3,
    topic: '직각삼각형의 닮음',
    text: '오른쪽 그림과 같이 ∠A=90°인 직각삼각형 ABC에서 [bar]AD⊥[bar]BC일 때, x+y의 값은?',
    imageUrl: '/assets/images/exam12/q15.png',
    options: [
      { id: '15-1', label: '①', text: '9' },
      { id: '15-2', label: '②', text: '10' },
      { id: '15-3', label: '③', text: '11' },
      { id: '15-4', label: '④', text: '12' },
      { id: '15-5', label: '⑤', text: '13' }
    ],
    answer: '④',
    explanation: '직각삼각형 안에서 또 다른 수선을 내렸을 때 만들어지는 \'소공식(닮음 공식)\'들을 이용하는 문제야.\n기억해 둬야 할 공식은 [bar]AB[sup:2] = [bar]BD × [bar]BC, [bar]AC[sup:2] = [bar]CD × [bar]BC, [bar]AD[sup:2] = [bar]BD × [bar]CD 란다.\n주어진 변의 길이를 이 세 가지 공식 중 알맞은 곳에 대입하여 미지수 x와 y의 값을 각각 구해보면 돼.\n계산한 두 값을 더해주면 x + y = 12 가 나온단다.\n∴ 정답: ④'
  },
  {
    id: 16,
    type: 'multiple',
    score: 3,
    topic: '직각삼각형의 닮음',
    text: '오른쪽 그림과 같이 ∠A=90°인 △ABC의 꼭짓점 A에서 [bar]BC에 내린 수선의 발을 D라 할 때, [bar]AD의 길이는?',
    imageUrl: '/assets/images/exam12/q16.png',
    options: [
      { id: '16-1', label: '①', text: '8 cm' },
      { id: '16-2', label: '②', text: '10 cm' },
      { id: '16-3', label: '③', text: '12 cm' },
      { id: '16-4', label: '④', text: '14 cm' },
      { id: '16-5', label: '⑤', text: '16 cm' }
    ],
    answer: '③',
    explanation: '이 문제 역시 직각삼각형의 닮음 공식을 활용하는 문제란다.\n우선 큰 △ABC에서 피타고라스 정리(또는 가장 흔한 3:4:5 직각삼각형의 길이비)를 이용하여 빗변이 아닌 나머지 변 [bar]AC의 길이를 먼저 구해야 해.\n[bar]AB=20, [bar]BC=25 이므로 비례에 의해 [bar]AC=15가 된단다.\n이제 삼각형의 넓이를 두 가지 방법으로 구하는 원리에서 나온 공식인 [bar]AB × [bar]AC = [bar]BC × [bar]AD 를 사용하자.\n\n20 × 15 = 25 × [bar]AD\n300 = 25[bar]AD ⇒ [bar]AD = 12 cm\n\n∴ 정답: ③'
  },
  {
    id: 17,
    type: 'short',
    score: 5,
    topic: '도형의 닮음',
    text: '오른쪽 그림에서 △ABC ∽ △DEF일 때, [bar]BC : [bar]EF를 구하시오.',
    imageUrl: '/assets/images/exam12/q17.png',
    answer: '3:4',
    explanation: '닮은 두 입체도형(직육면체)에서는 대응하는 모든 모서리의 길이의 비(닮음비)가 일정하다는 성질을 이용해야 해.\n그림에서 숫자가 온전히 주어진 대응하는 모서리를 짝지어 기준이 되는 닮음비를 먼저 구한단다.\n그다음 x와 y에 해당하는 모서리들과 그 대응 모서리로 비례식을 각각 세워주면 x와 y의 값을 구할 수 있어.\n두 값을 올바르게 구하여 더하면 x + y = 24 가 된단다.\n∴ 정답: 24\n(참고: 사용자가 제공한 17번 해설은 직육면체 문제(다른 번호)에 대한 것이지만 요청에 따라 그대로 반영했습니다.)'
  },
  {
    id: 18,
    type: 'short',
    score: 5,
    topic: '입체도형의 닮음',
    text: '오른쪽 그림의 두 원뿔은 닮은 도형이다. 큰 원뿔의 밑넓이를 구하시오.',
    imageUrl: '/assets/images/exam12/q18.png',
    answer: '25π cm²',
    explanation: '두 원뿔의 모선 길이의 비가 12 : 15 이고 이를 약분하면 4 : 5 이므로, 두 입체도형의 닮음비는 4 : 5 야.\n닮음비에 따라 밑면인 원의 반지름의 비도 똑같이 4 : 5 가 되어야 한단다.\n작은 원뿔의 밑면 반지름이 4 cm 이므로, 큰 원뿔의 밑면 반지름을 R이라고 하면 다음과 같은 비례식을 세울 수 있어.\n\n4 : 5 = 4 : R ⇒ R = 5 cm\n\n따라서 큰 원뿔의 밑넓이는 원의 넓이 공식(πr[sup:2])에 대입하여 계산하면 25π cm² 가 된단다.\n∴ 정답: 25π cm²'
  },
  {
    id: 19,
    type: 'short',
    score: 5,
    topic: '닮음의 활용',
    text: '오른쪽 그림에서 [bar]AB // [bar]DE, [bar]AD // [bar]BC일 때, [bar]CE의 길이를 구하시오.',
    imageUrl: '/assets/images/exam12/q19.png',
    answer: '20/3 cm',
    explanation: '평행선이 주어졌을 때는 \'동위각과 엇각의 크기가 같다\'는 사실을 최우선으로 생각해야 해.\n문제 조건인 [bar]AB // [bar]DE 와 [bar]AD // [bar]BC 의 평행선 성질을 이용하면, 내부에서 각의 크기가 같은 닮은 두 삼각형(AA 닮음)을 짝지어 찾아낼 수 있어.\n그 찾아낸 닮은 삼각형에서 \'대응변의 길이의 비는 일정하다\'는 것을 이용해 비례식을 세워 풀면 [bar]CE = [frac:20/3] cm 가 도출된단다.\n∴ 정답: [frac:20/3] cm'
  },
  {
    id: 20,
    type: 'short',
    score: 5,
    topic: '닮음의 활용 (종이접기)',
    text: '오른쪽 그림과 같이 직사각형 ABCD를 [bar]DE를 접는 선으로 하여 꼭짓점 A가 [bar]BC 위의 점 A\'에 오도록 접었을 때, [bar]A\'C의 길이를 구하시오.',
    imageUrl: '/assets/images/exam12/q20.png',
    answer: '6cm',
    explanation: '직사각형 모양의 종이를 접는 문제는 시험에 정말 자주 나오는 단골 출제 유형이란다.\n종이를 접었기 때문에 접히기 전의 원래 각과 접힌 후의 각이 90°로 완전히 같고, 직사각형의 평행선에 의한 엇각 성질을 이용하면 숨어있는 닮은 두 직각삼각형을 찾을 수 있어.\n이 문제에서는 △A\'BE ∽ △C\'DA\' (AA 닮음)가 성립함을 이용하여 변의 길이 비례식을 세워야 해.\n비례식을 풀어 [bar]A\'C의 길이를 계산하면 6 cm 가 된단다.\n∴ 정답: 6cm'
  },
  {
    id: 21,
    type: 'short',
    score: 5,
    topic: '직각삼각형의 닮음',
    text: '오른쪽 그림과 같은 △ABC에서 ∠A=90°, [bar]AD⊥[bar]BC일 때, △ABC의 넓이를 구하시오.',
    imageUrl: '/assets/images/exam12/q21.png',
    answer: '39 cm²',
    explanation: '직각삼각형에서 직각인 꼭짓점으로부터 빗변에 수선을 내렸을 때 성립하는 공식 중 하나인 [bar]AD[sup:2] = [bar]BD × [bar]CD를 이용하는 문제란다.\n그림에서 주어진 [bar]BD = 4, [bar]CD = 9를 공식에 대입해 보자.\n\n[bar]AD[sup:2] = 4 × 9 = 36\n\n따라서 높이 [bar]AD는 6 cm가 된단다.\n밑변 [bar]BC의 길이는 [bar]BD + [bar]CD = 4 + 9 = 13 cm이므로, △ABC의 넓이는 삼각형 넓이 공식에 따라 다음과 같이 구할 수 있어.\n\n△ABC 넓이 = [frac:1/2] × 13 × 6 = 39\n\n∴ 정답: 39 cm²'
  },
  {
    id: 22,
    type: 'essay',
    score: 9,
    topic: '도형의 닮음',
    text: '오른쪽 그림에서 □A\'BC\'D\'은 □ABCD를 축소하여 그린 것이다. 다음을 구하시오.',
    imageUrl: '/assets/images/exam12/q22.png',
    subQuestions: [
      { id: '22-1', label: '(1)', text: '□ABCD와 □A\'BC\'D\'의 닮음비', score: 5, answer: '5:3', explanation: '두 다각형이 닮음일 때는 모든 대응변의 길이의 비(닮음비)가 일정하고, 대응각의 크기가 각각 같다는 핵심 성질을 이용해야 해.' },
      { id: '22-2', label: '(2)', text: '[bar]C\'D\'의 길이', score: 4, answer: '9cm', explanation: '그림에 주어진 대응변의 길이를 서로 비교하여 먼저 두 도형의 기준이 되는 닮음비를 구한단다.' }
    ],
    answer: '(1) 5:3\n(2) 9cm',
    explanation: '두 다각형이 닮음일 때는 모든 대응변의 길이의 비(닮음비)가 일정하고, 대응각의 크기가 각각 같다는 핵심 성질을 이용해야 해.\n그림에 주어진 대응변의 길이를 서로 비교하여 먼저 두 도형의 기준이 되는 닮음비를 구한단다.\n그 닮음비를 바탕으로 미지수 x가 포함된 변의 비례식을 세워 x의 값을 계산하고, 대응각의 크기가 같다는 성질을 이용하여 미지수 y의 값을 구하면 돼.\n구해진 두 값을 바르게 계산하여 더해주면 x + y = 36이 나온단다.\n∴ 정답: 36\n(참고: 제공해주신 22번 해설은 x+y=36 이지만, 문제의 요구사항은 비율과 선분 길이입니다. 요청에 따라 제공된 해설을 반영했습니다.)'
  },
  {
    id: 23,
    type: 'short',
    score: 9,
    topic: '닮음의 응용',
    text: '오른쪽 그림과 같은 평행사변형 ABCD에서 점 E는 [bar]AB의 연장선 위의 점이고, 점 F는 [bar]CE와 [bar]AD의 교점이다. [bar]AB=12, [bar]BC=6, [bar]AC=9, [bar]CD=4일 때, [bar]BD의 길이를 구하시오.',
    imageUrl: '/assets/images/exam12/q23.png',
    answer: '8 cm',
    explanation: '△ABC와 그 안의 작은 △BDC에서 닮음 조건을 증명하고 비례식을 푸는 문제야.\n먼저 ∠C는 두 삼각형이 공통으로 가지고 있는 각이란다.\n이제 ∠C를 끼고 있는 두 변의 길이의 비를 각각 큰 삼각형과 작은 삼각형에서 비교해 보자.\n\n[bar]AC : [bar]BC = 9 : 6 = 3 : 2\n[bar]BC : [bar]DC = 6 : 4 = 3 : 2\n\n두 쌍의 대응변의 길이의 비가 3:2로 일정하고 그 끼인각이 같으므로, △ABC ∽ △BDC (SAS 닮음)가 완벽하게 성립해.\n따라서 나머지 한 쌍의 대응변인 [bar]AB와 [bar]BD의 길이의 비도 똑같이 3:2가 되어야 하므로 비례식을 세울 수 있어.\n\n12 : [bar]BD = 3 : 2\n\n외항의 곱과 내항의 곱은 같으므로,\n3 × [bar]BD = 24\n[bar]BD = 8\n\n∴ 정답: 8 cm'
  },
  {
    id: 24,
    type: 'essay',
    score: 9,
    topic: '직각삼각형의 닮음',
    text: '오른쪽 그림과 같이 ∠A=90°인 직각삼각형 ABC에서 점 M은 [bar]BC의 중점이고 [bar]AD⊥[bar]BC, [bar]AM⊥[bar]DE일 때, 다음을 구하시오.',
    imageUrl: '/assets/images/exam12/q24.png',
    subQuestions: [
      { id: '24-1', label: '(1)', text: '[bar]AM의 길이', score: 3, answer: '25/2 cm', explanation: '(1) 점 M은 직각삼각형의 빗변 [bar]BC의 중점이므로 이 직각삼각형의 외심에 해당해. 직각삼각형의 외심은 세 꼭짓점에 이르는 거리가 모두 같다는 성질이 있어. 따라서 [bar]AM = [frac:1/2][bar]BC 수식을 통해 길이를 구한단다.' },
      { id: '24-2', label: '(2)', text: '[bar]AD의 길이', score: 3, answer: '10 cm', explanation: '(2) 삼각형 넓이를 구하는 두 가지 관점을 응용한 공식인 [bar]AB × [bar]AC = [bar]BC × [bar]AD 에 주어진 선분 길이들을 대입하여 높이 [bar]AD를 유도해 낼 수 있어.' },
      { id: '24-3', label: '(3)', text: '[bar]AE의 길이', score: 3, answer: '8 cm', explanation: '(3) 수선이 내려지며 생긴 직각삼각형 내부의 닮음(AA 닮음) 비례식이나, 수선 공식을 한 번 더 적용하여 최종적으로 [bar]AE의 길이를 계산하면 된단다.' }
    ],
    answer: '(1) 25/2 cm\n(2) 10 cm\n(3) 8 cm',
    explanation: '직각삼각형의 외심 성질과 소공식을 종합적으로 묻는 서술형 문제란다.\n(1) 점 M은 직각삼각형의 빗변 [bar]BC의 중점이므로 이 직각삼각형의 외심에 해당해. 직각삼각형의 외심은 세 꼭짓점에 이르는 거리가 모두 같다는 성질이 있어. 따라서 [bar]AM = [frac:1/2][bar]BC 수식을 통해 길이를 구한단다.\n(2) 삼각형 넓이를 구하는 두 가지 관점을 응용한 공식인 [bar]AB × [bar]AC = [bar]BC × [bar]AD 에 주어진 선분 길이들을 대입하여 높이 [bar]AD를 유도해 낼 수 있어.\n(3) 수선이 내려지며 생긴 직각삼각형 내부의 닮음(AA 닮음) 비례식이나, 수선 공식을 한 번 더 적용하여 최종적으로 [bar]AE의 길이를 계산하면 된단다.'
  }
];

export function getTotalScore(): number {
  return questions.reduce((sum, q) => sum + q.score, 0);
}

export function getTypeLabel(type: QuestionType): string {
  switch (type) {
    case 'multiple': return '객관식';
    case 'short': return '단답형';
    case 'essay': return '서술형';
  }
}
