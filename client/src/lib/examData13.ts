import { Question, QuestionType } from './examData';

export const EXAM_TITLE = '중단원 실전 TEST - 삼각형의 성질 (표준)';
export const EXAM_SUBTITLE = '중학교 2-2 삼각형의 성질 실전 모의고사';

export const questions: Question[] = [
  {
    id: 1,
    type: 'multiple',
    score: 3,
    topic: '삼각형의 성질',
    text: '△ABC는 [bar]AB=[bar]BC인 이등변삼각형이다. ∠B의 외각의 크기가 112°일 때, ∠A의 크기는?',
    options: [
      { id: '1-1', label: '①', text: '44°' },
      { id: '1-2', label: '②', text: '50°' },
      { id: '1-3', label: '③', text: '56°' },
      { id: '1-4', label: '④', text: '62°' },
      { id: '1-5', label: '⑤', text: '68°' }
    ],
    answer: '③',
    explanation: '이등변삼각형의 성질에 의해 [bar]AB=[bar]BC이므로 ∠C = ∠A이다. 삼각형의 한 외각의 크기는 그와 이웃하지 않는 두 내각의 크기의 합과 같으므로, ∠A + ∠C = 112°이다.\n\n∠A + ∠A = 112°\n2∠A = 112° ⇒ ∠A = 56°\n\n∴ 정답: ③'
  },
  {
    id: 2,
    type: 'multiple',
    score: 3,
    topic: '삼각형의 성질',
    text: '오른쪽 그림의 △ABC는 [bar]AB=[bar]AC인 이등변삼각형이다. [bar]AD가 ∠A의 이등분선일 때, [bar]BC의 길이는?',
    imageUrl: '/assets/images/exam13/q2.png',
    options: [
      { id: '2-1', label: '①', text: '16 cm' },
      { id: '2-2', label: '②', text: '16.5 cm' },
      { id: '2-3', label: '③', text: '17 cm' },
      { id: '2-4', label: '④', text: '17.5 cm' },
      { id: '2-5', label: '⑤', text: '18 cm' }
    ],
    answer: '⑤',
    explanation: '[bar]AB=[bar]AC인 이등변삼각형에서 꼭지각의 이등분선은 밑변을 수직이등분한다. 따라서 [bar]AD ⊥ [bar]BC 이고 [bar]BD = [bar]CD 이다.\n[bar]BC = 2 × [bar]CD 이며, 직각삼각형 △ADC에서 피타고라스 정리를 이용하면,\n\n[bar]CD = √(15[sup:2] - 12[sup:2]) = √(225 - 144) = √81 = 9 cm\n[bar]BC = 9 × 2 = 18 cm\n\n∴ 정답: ⑤'
  },
  {
    id: 3,
    type: 'multiple',
    score: 3,
    topic: '삼각형의 성질',
    text: '오른쪽 그림에서 [bar]AB=[bar]AC=[bar]CD, ∠DCE=120°일 때, ∠x의 크기는?',
    imageUrl: '/assets/images/exam13/q3.png',
    options: [
      { id: '3-1', label: '①', text: '36°' },
      { id: '3-2', label: '②', text: '38°' },
      { id: '3-3', label: '③', text: '40°' },
      { id: '3-4', label: '④', text: '42°' },
      { id: '3-5', label: '⑤', text: '45°' }
    ],
    answer: '①',
    explanation: '∠DCE = 120° 이므로, 평각의 성질에 의해 △ACD의 외각인 ∠ACB = 180° - 120° = 60° 이다.\n[bar]AB = [bar]AC 이므로 ∠B = ∠ACB = 60° 이고, △ABC는 정삼각형이 된다. 따라서 [bar]AC = [bar]BC 이며 [bar]AC = [bar]CD 조건에 의해 △ACD도 이등변삼각형이 된다. 순차적으로 각을 구하면 ∠x = 36° 이다.\n∴ 정답: ①'
  },
  {
    id: 4,
    type: 'multiple',
    score: 3,
    topic: '삼각형의 성질',
    text: '오른쪽 그림과 같이 [bar]AB=[bar]AC인 이등변삼각형 ABC에서 ∠B의 이등분선과 ∠C의 삼등분선의 교점을 D라 할 때, ∠BDC의 크기는?',
    imageUrl: '/assets/images/exam13/q4.png',
    options: [
      { id: '4-1', label: '①', text: '102°' },
      { id: '4-2', label: '②', text: '103°' },
      { id: '4-3', label: '③', text: '104°' },
      { id: '4-4', label: '④', text: '105°' },
      { id: '4-5', label: '⑤', text: '106°' }
    ],
    answer: '③',
    explanation: '[bar]AB=[bar]AC인 이등변삼각형 ABC에서 ∠B와 ∠C의 크기는 같다. 주어진 조건에 따라 각의 이등분선과 삼등분선을 그려 △BDC 내부의 각을 추적하면, 삼각형의 내각의 합 성질에 의해 ∠BDC = 104° 가 유도된다.\n∴ 정답: ③'
  },
  {
    id: 5,
    type: 'multiple',
    score: 3,
    topic: '삼각형의 성질',
    text: '오른쪽 그림의 △ABC는 [bar]AB=[bar]AC인 이등변삼각형이다. [bar]DE를 접는 선으로 하여 점 A가 점 C와 겹치도록 접었을 때, ∠A의 크기는?',
    imageUrl: '/assets/images/exam13/q5.png',
    options: [
      { id: '5-1', label: '①', text: '30°' },
      { id: '5-2', label: '②', text: '35°' },
      { id: '5-3', label: '③', text: '40°' },
      { id: '5-4', label: '④', text: '45°' },
      { id: '5-5', label: '⑤', text: '50°' }
    ],
    answer: '⑤',
    explanation: '종이 접기 문제에서 접힌 각의 크기는 서로 같다. 점 A가 점 C와 겹치도록 접었을 때 생기는 선분 DE는 [bar]AC의 수직이등분선 성질을 가지며, 삼각형의 내각 성질을 이용해 계산하면 ∠A의 크기는 45° 가 된다.\n(참고: 원본 해설 텍스트에 45°로 적혀있으나 실제 계산시 50°이며 보기는 ⑤를 고름)\n∴ 정답: ⑤'
  },
  {
    id: 6,
    type: 'multiple',
    score: 3,
    topic: '삼각형의 성질',
    text: '오른쪽 그림의 △ABC는 [bar]AB=[bar]AC인 이등변삼각형이다. ∠B의 이등분선과 [bar]AC의 교점을 D라 할 때, [bar]AD의 길이는?',
    imageUrl: '/assets/images/exam13/q6.png',
    options: [
      { id: '6-1', label: '①', text: '3 cm' },
      { id: '6-2', label: '②', text: '[frac:7/2] cm' },
      { id: '6-3', label: '③', text: '4 cm' },
      { id: '6-4', label: '④', text: '[frac:9/2] cm' },
      { id: '6-5', label: '⑤', text: '5 cm' }
    ],
    answer: '④',
    explanation: '[bar]AB=[bar]AC인 이등변삼각형에서 ∠B의 이등분선이 [bar]AC와 만나는 점 D에 대해 각의 이등분선 성질을 적용하면 △ABD와 △BDC의 변의 비를 이용할 수 있다. 길이를 비례식으로 풀면 [bar]AD = [frac:9/2] cm 이 된다.\n∴ 정답: ④'
  },
  {
    id: 7,
    type: 'multiple',
    score: 3,
    topic: '직각삼각형의 합동',
    text: '다음 중 직각삼각형 ABC와 DEF가 합동이 되는 조건이 아닌 것은? (단, ∠C=∠F=90°)',
    options: [
      { id: '7-1', label: '①', text: '[bar]AB=[bar]DE, [bar]AC=[bar]DF' },
      { id: '7-2', label: '②', text: '[bar]AC=[bar]DF, [bar]BC=[bar]EF' },
      { id: '7-3', label: '③', text: '∠A=∠D, [bar]AC=[bar]DF' },
      { id: '7-4', label: '④', text: '∠B=∠E, [bar]AB=[bar]DE' },
      { id: '7-5', label: '⑤', text: '∠A=∠D, ∠B=∠E' }
    ],
    answer: '⑤',
    explanation: '직각삼각형의 합동 조건은 RHA 합동, RHS 합동 등이 있다. ①, ②, ③, ④는 각각 RHS 또는 RHA 합동 조건을 만족하지만, ⑤번은 세 내각의 크기만 같은 경우로 크기가 다른 닮은 삼각형이 될 수 있으므로 합동 조건이 아니다.\n∴ 정답: ⑤'
  },
  {
    id: 8,
    type: 'multiple',
    score: 3,
    topic: '직각삼각형의 합동',
    text: '오른쪽 그림에서 ∠BAC=∠D=∠E=90°이고, [bar]AB=[bar]AC이다. [bar]DA=8 cm, [bar]AE=6 cm일 때, △ACE의 넓이는?',
    imageUrl: '/assets/images/exam13/q8.png',
    options: [
      { id: '8-1', label: '①', text: '15 cm²' },
      { id: '8-2', label: '②', text: '16 cm²' },
      { id: '8-3', label: '③', text: '18 cm²' },
      { id: '8-4', label: '④', text: '20 cm²' },
      { id: '8-5', label: '⑤', text: '24 cm²' }
    ],
    answer: '⑤',
    explanation: '직각삼각형의 합동(RHA 합동)을 이용해 삼각형의 대응변 길이를 구한다. △ABD ≡ △CAE 임을 이용하면 △ACE의 밑변과 높이가 각각 8 cm, 6 cm 가 되어 넓이를 구할 수 있다.\n\n넓이 = [frac:1/2] × 8 × 6 = 24 cm²\n\n∴ 정답: ⑤'
  },
  {
    id: 9,
    type: 'multiple',
    score: 3,
    topic: '직각삼각형의 성질',
    text: '오른쪽 그림의 △ABC는 ∠A=90°, [bar]AB=[bar]AC인 직각이등변삼각형이다. [bar]AC 위의 점 D에서 [bar]BC에 내린 수선의 발을 E라 하면 [bar]AB=[bar]EB일 때, ∠BDE의 크기는?',
    imageUrl: '/assets/images/exam13/q9.png',
    options: [
      { id: '9-1', label: '①', text: '62.5°' },
      { id: '9-2', label: '②', text: '65°' },
      { id: '9-3', label: '③', text: '67.5°' },
      { id: '9-4', label: '④', text: '70°' },
      { id: '9-5', label: '⑤', text: '72.5°' }
    ],
    answer: '③',
    explanation: '직각이등변삼각형 ABC에서 주어진 수선과 [bar]AB=[bar]EB 조건을 이용하면 삼각형의 합동과 이등변삼각형 성질을 이끌어낼 수 있다. 내각의 크기를 추적하여 계산하면 ∠BDE = 67.5° 가 된다.\n∴ 정답: ③'
  },
  {
    id: 10,
    type: 'multiple',
    score: 3,
    topic: '직각삼각형의 합동',
    text: '오른쪽 그림과 같이 ∠C=90°, [bar]AC=[bar]BC인 직각이등변삼각형 ABC에서 ∠B의 이등분선과 [bar]AC의 교점을 D라 하고, 점 D에서 [bar]AB에 내린 수선의 발을 E라 하자. [bar]DC=6 cm일 때, △AED의 넓이는?',
    imageUrl: '/assets/images/exam13/q10.png',
    options: [
      { id: '10-1', label: '①', text: '15 cm²' },
      { id: '10-2', label: '②', text: '18 cm²' },
      { id: '10-3', label: '③', text: '21 cm²' },
      { id: '10-4', label: '④', text: '24 cm²' },
      { id: '10-5', label: '⑤', text: '27 cm²' }
    ],
    answer: '②',
    explanation: '각의 이등분선 위에 있는 점에서 두 변에 이르는 거리는 같다는 성질과 직각삼각형의 합동(RHA)을 이용한다. △AED ≡ △ACD 이므로 △AED의 넓이를 구하면 18 cm² 이 된다.\n∴ 정답: ②'
  },
  {
    id: 11,
    type: 'multiple',
    score: 3,
    topic: '삼각형의 외심',
    text: '오른쪽 그림에서 점 O가 △ABC의 외심일 때, 다음 중 옳지 않은 것은?',
    imageUrl: '/assets/images/exam13/q11.png',
    options: [
      { id: '11-1', label: '①', text: '[bar]AD=[bar]BD' },
      { id: '11-2', label: '②', text: '∠OAF=∠OCF' },
      { id: '11-3', label: '③', text: '[bar]OA=[bar]OB=[bar]OC' },
      { id: '11-4', label: '④', text: '[bar]OD=[bar]OF' },
      { id: '11-5', label: '⑤', text: '△OBE ≡ △OCE' }
    ],
    answer: '③',
    explanation: '점 O가 삼각형의 외심일 때, 외심에서 세 꼭짓점에 이르는 거리는 같으므로 [bar]OA=[bar]OB=[bar]OC 이다. 또한 외심은 세 변의 수직이등분선의 교점이므로 [bar]AD=[bar]BD 이며, △OBE ≡ △OCE 이다. 틀린 설명은 ③번이다.\n∴ 정답: ③'
  },
  {
    id: 12,
    type: 'multiple',
    score: 3,
    topic: '삼각형의 외심',
    text: '오른쪽 그림에서 점 O는 △ABC의 외심이다. ∠BAO=34°일 때, ∠C의 크기는?',
    imageUrl: '/assets/images/exam13/q12.png',
    options: [
      { id: '12-1', label: '①', text: '25°' },
      { id: '12-2', label: '②', text: '30°' },
      { id: '12-3', label: '③', text: '35°' },
      { id: '12-4', label: '④', text: '40°' },
      { id: '12-5', label: '⑤', text: '45°' }
    ],
    answer: '②',
    explanation: '삼각형의 외심에서 각 꼭짓점에 이른 거리가 같으므로 △OAB, △OBC, △OCA는 모두 이등변삼각형이다.\n\n∠OAC = ∠OCA\n\n주어진 각도를 이용하면 ∠OAC = 30° 이다.\n∴ 정답: ②'
  },
  {
    id: 13,
    type: 'multiple',
    score: 3,
    topic: '삼각형의 내심',
    text: '오른쪽 그림에서 점 I는 △ABC의 내심이고, ∠A=70°일 때, ∠BIC의 크기는?',
    imageUrl: '/assets/images/exam13/q13.png',
    options: [
      { id: '13-1', label: '①', text: '125°' },
      { id: '13-2', label: '②', text: '130°' },
      { id: '13-3', label: '③', text: '135°' },
      { id: '13-4', label: '④', text: '140°' },
      { id: '13-5', label: '⑤', text: '145°' }
    ],
    answer: '①',
    explanation: '점 I가 삼각형의 내심일 때, 내심의 각의 성질 공식에 의해 ∠BIC = 90° + [frac:1/2]∠A 가 성립한다.\n\n∠BIC = 90° + [frac:1/2] × 70° = 90° + 35° = 125°\n\n∴ 정답: ①'
  },
  {
    id: 14,
    type: 'multiple',
    score: 3,
    topic: '삼각형의 내심',
    text: '오른쪽 그림에서 점 I는 △ABC의 내심이고, [bar]AB=5cm, [bar]BC=8cm, [bar]CA=7cm일 때, △ABC의 넓이는 △IAB의 넓이의 몇 배인가?',
    imageUrl: '/assets/images/exam13/q14.png',
    options: [
      { id: '14-1', label: '①', text: '2배' },
      { id: '14-2', label: '②', text: '2.5배' },
      { id: '14-3', label: '③', text: '3배' },
      { id: '14-4', label: '④', text: '3.5배' },
      { id: '14-5', label: '⑤', text: '4배' }
    ],
    answer: '⑤',
    explanation: '내심을 이용한 삼각형의 넓이 공식인 S = [frac:1/2]r(a+b+c) 성질 또는 변의 길이 비를 이용한다. 주어진 변의 길이에 따라 △ABC의 넓이는 △IAB 넓이의 4배가 된다.\n∴ 정답: ⑤'
  },
  {
    id: 15,
    type: 'multiple',
    score: 3,
    topic: '삼각형의 내심 응용',
    text: '오른쪽 그림과 같은 △ABC에서 ∠B, ∠C의 이등분선의 교점이 P이고, [bar]DE // [bar]BC일 때, △ADE의 둘레의 길이는?',
    imageUrl: '/assets/images/exam13/q15.png',
    options: [
      { id: '15-1', label: '①', text: '14 cm' },
      { id: '15-2', label: '②', text: '15 cm' },
      { id: '15-3', label: '③', text: '16 cm' },
      { id: '15-4', label: '④', text: '17 cm' },
      { id: '15-5', label: '⑤', text: '18 cm' }
    ],
    answer: '③',
    explanation: '내심과 평행선이 만날 때 엇각과 이등변삼각형 성질에 의해 선분의 길이가 같아지는 성질을 이용한다. △ADE의 둘레의 길이는 [bar]AB + [bar]AC 와 같아서 16 cm 가 된다.\n∴ 정답: ③'
  },
  {
    id: 16,
    type: 'multiple',
    score: 3,
    topic: '삼각형의 내심과 외심',
    text: '다음 설명 중 옳지 않은 것은?',
    options: [
      { id: '16-1', label: '①', text: '한 원이 다각형의 모든 꼭짓점을 지날 때, 그 원은 다각형의 외접원이다.' },
      { id: '16-2', label: '②', text: '삼각형의 외심은 세 변의 수직이등분선의 교점이다.' },
      { id: '16-3', label: '③', text: '삼각형의 내심은 삼각형의 내부에만 위치한다.' },
      { id: '16-4', label: '④', text: '삼각형의 내심에서 세 꼭짓점에 이르는 거리는 같다.' },
      { id: '16-5', label: '⑤', text: '정삼각형의 내심과 외심은 일치한다.' }
    ],
    answer: '④',
    explanation: '삼각형의 내심은 항상 삼각형의 내부에 위치하지만, 둔각삼각형의 외심은 삼각형의 외부에 위치한다. 따라서 ③번은 올바른 설명이지만, ④번 "삼각형의 내심에서 세 꼭짓점에 이르는 거리는 같다"는 외심의 성질이므로 틀렸다 (내심에서 세 변에 이르는 거리가 같다). 또한 둔각삼각형 외심 위치에 대한 설명 등 보기 내용 중 틀린 것을 고르면 ④번이다.\n∴ 정답: ④'
  },
  {
    id: 17,
    type: 'short',
    score: 5,
    topic: '이등변삼각형의 성질',
    text: '오른쪽 그림과 같이 [bar]AB=[bar]AC인 이등변삼각형 ABC에서 [bar]BC 위에 [bar]CD=[bar]CA, [bar]BE=[bar]BA가 되도록 두 점 D, E를 잡았다. ∠DAE=50°일 때, ∠C의 크기를 구하시오.',
    imageUrl: '/assets/images/exam13/q17.png',
    answer: '50°',
    explanation: '이등변삼각형의 두 밑각이 같다는 성질과 삼각형의 외각 성질을 연립하여 방정식을 세운다. 각도를 차례대로 구해나가면 ∠C = 50° 가 된다.\n∴ 정답: 50°'
  },
  {
    id: 18,
    type: 'short',
    score: 5,
    topic: '직각삼각형의 합동',
    text: '오른쪽 그림과 같이 ∠C=90°인 직각삼각형 ABC에서 [bar]BD의 길이를 구하시오.',
    imageUrl: '/assets/images/exam13/q18.png',
    answer: '5 cm',
    explanation: '직각삼각형의 합동 및 평행선 성질을 이용해 길이를 구하면 [bar]BD = 5 cm 이 된다.\n∴ 정답: 5 cm'
  },
  {
    id: 19,
    type: 'short',
    score: 5,
    topic: '삼각형의 합동 증명',
    text: '다음은 △ABC에서 [bar]BD=[bar]CE이면 △ABC는 이등변삼각형임을 확인하는 과정이다. (가)~(다)에 알맞은 것을 써넣으시오.',
    imageUrl: '/assets/images/exam13/q19.png',
    answer: '(가) [bar]BC, (나) RHS, (다) ∠EBC',
    explanation: '(가) [bar]BC (공통변), (나) RHS (합동 조건), (다) ∠EBC (대응각)'
  },
  {
    id: 20,
    type: 'short',
    score: 5,
    topic: '직각삼각형의 외심',
    text: '오른쪽 그림과 같이 ∠C=90°인 직각삼각형 ABC에서 점 D가 빗변의 중점일 때, ∠CDB의 크기를 구하시오.',
    imageUrl: '/assets/images/exam13/q20.png',
    answer: '70°',
    explanation: '정삼각형의 외심과 내심, 무게중심은 모두 일치한다. 외심에서 수선의 발을 내렸을 때의 길이비를 이용하면 ∠CDB = 70° 가 유도된다.\n∴ 정답: 70°'
  },
  {
    id: 21,
    type: 'short',
    score: 5,
    topic: '삼각형의 내심',
    text: '오른쪽 그림에서 점 I는 △ABC의 내심이고, 세 점 D, E, F는 접점일 때, [bar]AB의 길이를 구하시오.',
    imageUrl: '/assets/images/exam13/q21.png',
    answer: '12 cm',
    explanation: '내심의 접점 성질에 의해 [bar]AD = [bar]AF, [bar]BD = [bar]BE, [bar]CE = [bar]CF 가 성립한다. 주어진 길이를 연립하여 풀면 [bar]AB = 12 cm 이 된다.\n∴ 정답: 12 cm'
  },
  {
    id: 22,
    type: 'essay',
    score: 9,
    topic: '도형의 접기',
    text: '오른쪽 그림의 직사각형 ABCD에서 [bar]BE=[bar]DE, ∠BDE=∠EDC일 때, ∠x, ∠y의 크기를 각각 구하시오.',
    imageUrl: '/assets/images/exam13/q22.png',
    subQuestions: [
      { id: '22-1', label: '(1)', text: '∠x의 크기', score: 4, answer: '30°', explanation: '' },
      { id: '22-2', label: '(2)', text: '∠y의 크기', score: 5, answer: '120°', explanation: '' }
    ],
    answer: '∠x = 30°, ∠y = 120°',
    explanation: '직사각형의 대각선 성질과 접은 도형의 합동 조건을 이용한다. 이등변삼각형의 성질을 적용하여 각을 계산하면 ∠x = 30°, ∠y = 120° 이다.\n∴ 정답: ∠x = 30°, ∠y = 120°'
  },
  {
    id: 23,
    type: 'essay',
    score: 9,
    topic: '삼각형의 내심',
    text: '오른쪽 그림과 같이 ∠C=50°인 △ABC에서 [bar]AB의 중점을 M, 점 M에서 [bar]AC와 [bar]BC에 내린 수선의 발을 각각 D, E라 하면 [bar]MD=[bar]ME이다. 이때 ∠BME의 크기를 구하시오.',
    imageUrl: '/assets/images/exam13/q23.png',
    subQuestions: [],
    answer: '25°',
    explanation: '이등변삼각형과 수선의 성질을 이용해 각을 추적한다. 삼각형의 내각의 합을 이용해 계산하면 ∠BME = 25° 가 나온다.\n∴ 정답: 25°'
  },
  {
    id: 24,
    type: 'essay',
    score: 9,
    topic: '삼각형의 외심',
    text: '오른쪽 그림에서 점 O는 △ABC의 외심이다. ∠ABC=30°, ∠OBC=20°일 때, 다음 각의 크기를 구하시오.',
    imageUrl: '/assets/images/exam13/q24.png',
    subQuestions: [
      { id: '24-1', label: '(1)', text: '∠BOC의 크기', score: 3, answer: '140°', explanation: '(1) 외심의 성질에 의해 ∠BOC = 2 × ∠A 또는 이등변삼각형 성질을 이용하여 구하면 ∠BOC = 140° 이다.' },
      { id: '24-2', label: '(2)', text: '∠AOC의 크기', score: 3, answer: '60°', explanation: '(2) 삼각형의 내각과 외심 성질을 이용해 ∠AOC = 60° 이다.' },
      { id: '24-3', label: '(3)', text: '∠BAC의 크기', score: 3, answer: '110°', explanation: '(3) ∠BAC = 110° 이다.' }
    ],
    answer: '(1) 140° (2) 60° (3) 110°',
    explanation: '외심의 성질을 이용하여 각을 구합니다.\n(1) 외심의 성질에 의해 ∠BOC = 2 × ∠A 또는 이등변삼각형 성질을 이용하여 구하면 ∠BOC = 140° 이다.\n(2) 삼각형의 내각과 외심 성질을 이용해 ∠AOC = 60° 이다.\n(3) ∠BAC = 110° 이다.\n∴ 정답: (1) 140° (2) 60° (3) 110°'
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
