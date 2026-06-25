# 📐 중학교 수학 시험 플랫폼

중학생을 위한 수학 시험 웹 애플리케이션입니다.
문제지를 선택하고, 시험을 풀고, 즉시 채점 결과를 확인할 수 있습니다.

---

## ✨ 주요 기능

- **문제지 선택** — 난이도별(기초/표준/심화) 3종의 시험지 제공
- **객관식 & 주관식** — 다양한 문제 유형 지원
- **수식 렌더링** — 분수, 위첨자, 아래첨자 등 수학 표기 지원
- **즉시 채점** — 풀이 완료 후 바로 점수와 정답/오답 확인
- **풀이 해설** — 각 문제별 상세 해설 제공
- **반응형 디자인** — PC와 모바일 모두 지원

---

## 🛠️ 사전 준비

### 필수 설치 항목

1. **Node.js** (v18 이상 권장)
   - [https://nodejs.org](https://nodejs.org) 에서 다운로드
   - 설치 확인:
     ```bash
     node --version
     ```

2. **pnpm** (패키지 매니저)
   - npm으로 설치:
     ```bash
     npm install -g pnpm
     ```
   - 설치 확인:
     ```bash
     pnpm --version
     ```

---

## 🚀 실행 방법

### 1단계: 의존성 설치

프로젝트 폴더에서 아래 명령어를 실행합니다:

```bash
pnpm install
```

> 처음 실행 시 필요한 모든 패키지가 자동으로 설치됩니다.

### 2단계: 개발 서버 실행

```bash
pnpm dev
```

실행 후 터미널에 아래와 같은 메시지가 표시됩니다:

```
  VITE v7.x.x  ready in xxx ms

  ➜  Local:   http://localhost:3000/
  ➜  Network: http://192.168.x.x:3000/
```

### 3단계: 브라우저에서 접속

브라우저를 열고 아래 주소로 접속합니다:

```
http://localhost:3000
```

> 포트 3000이 이미 사용 중이면 자동으로 다른 포트가 할당됩니다.
> 터미널에 표시된 주소를 확인하세요.

---

## 📦 프로덕션 빌드 (배포용)

### 빌드

```bash
pnpm build
```

이 명령어는 두 가지 작업을 수행합니다:
1. Vite로 프론트엔드를 빌드 → `dist/public/` 폴더에 출력
2. esbuild로 서버를 번들 → `dist/index.js` 파일 생성

### 프로덕션 서버 실행

```bash
pnpm start
```

> `NODE_ENV=production` 환경에서 Express 서버가 정적 파일을 서빙합니다.

---

## 📁 프로젝트 구조

```
math-exam/
├── client/                  # 프론트엔드 (React + Vite)
│   ├── index.html           # HTML 진입점
│   └── src/
│       ├── main.tsx          # React 앱 진입점
│       ├── App.tsx           # 라우터 및 프로바이더 설정
│       ├── index.css         # 전역 스타일 및 디자인 토큰
│       ├── pages/
│       │   ├── ExamSelector.tsx  # 문제지 선택 페이지
│       │   └── ExamTest.tsx      # 시험 풀기 페이지
│       ├── components/       # 재사용 가능한 UI 컴포넌트
│       └── lib/
│           ├── examCatalog.ts    # 시험 목록 메타데이터
│           ├── examData.ts       # 시험 1 문제 데이터 (20문항)
│           ├── examData2.ts      # 시험 2 문제 데이터 (16문항)
│           └── examData3.ts      # 시험 3 문제 데이터 (24문항)
├── server/
│   └── index.ts             # Express 정적 파일 서버
├── shared/
│   └── const.ts             # 공유 상수
├── vite.config.ts           # Vite 설정
├── tsconfig.json            # TypeScript 설정
└── package.json             # 의존성 및 스크립트 정의
```

---

## 📜 사용 가능한 스크립트

| 명령어 | 설명 |
|---|---|
| `pnpm dev` | 개발 서버 실행 (핫 리로드 지원) |
| `pnpm build` | 프론트엔드 + 서버 프로덕션 빌드 |
| `pnpm start` | 프로덕션 서버 실행 |
| `pnpm preview` | 빌드 결과물 미리보기 |
| `pnpm check` | TypeScript 타입 검사 |
| `pnpm format` | Prettier로 코드 포맷팅 |

---

## 🎨 기술 스택

| 영역 | 기술 |
|---|---|
| 프론트엔드 | React 19, TypeScript, Vite |
| 스타일링 | Tailwind CSS 4, Radix UI |
| 애니메이션 | Framer Motion |
| 라우팅 | wouter |
| 서버 | Express (정적 파일 서빙) |
| 패키지 매니저 | pnpm |

---

## ❓ 문제 해결

### `pnpm: command not found` 오류

pnpm이 설치되지 않은 경우입니다. 아래 명령어로 설치하세요:

```bash
npm install -g pnpm
```

### 포트 충돌 오류

포트 3000이 이미 사용 중이면 Vite가 자동으로 다음 사용 가능한 포트를 찾습니다.
터미널 출력에 표시된 URL을 확인하세요.

### 의존성 설치 오류

`node_modules` 폴더를 삭제한 후 다시 설치해보세요:

```bash
# Windows (PowerShell)
Remove-Item -Recurse -Force node_modules
pnpm install

# macOS / Linux
rm -rf node_modules
pnpm install
```
