# 한국은행 경영관리 시스템 - Next.js 스타터 키트

효율적인 경영 관리를 위한 현대적인 웹 애플리케이션 스타터 킷입니다.

## 🚀 주요 기능

- **Next.js 14** (App Router 기반)
- **TypeScript** 완전 지원
- **Tailwind CSS** 스타일링
- **React Hook Form** 폼 관리
- **Zod** 데이터 검증
- **Zustand** 상태 관리
- **TanStack Query** 데이터 페칭
- **Recharts** 데이터 시각화
- **NextAuth.js** 인증 (선택사항)

## 📋 기술 스택

### Frontend
- React 18
- Next.js 14
- TypeScript 5
- Tailwind CSS 3
- Framer Motion (애니메이션)
- Recharts (차트)

### 상태 관리 및 폼
- Zustand (전역 상태)
- React Hook Form (폼 관리)
- Zod (스키마 검증)
- TanStack Query (서버 상태)

### 개발 도구
- ESLint
- TypeScript
- Axios (HTTP 클라이언트)

## 📁 프로젝트 구조

```
project-root/
├── app/                      # Next.js App Router
│   ├── layout.tsx            # Root 레이아웃
│   ├── page.tsx              # 홈 페이지
│   ├── dashboard/            # 대시보드 페이지
│   │   └── page.tsx
│   └── api/                  # API 라우트
│       └── health/
│           └── route.ts
├── components/               # React 컴포넌트
│   ├── ui/                   # UI 컴포넌트
│   │   └── Button.tsx
│   └── common/               # 공통 컴포넌트
│       ├── Header.tsx
│       ├── Footer.tsx
│       └── Loading.tsx
├── lib/                      # 유틸리티 함수
│   ├── api-client.ts         # API 클라이언트
│   ├── cn.ts                 # Tailwind 클래스 병합
│   └── utils.ts              # 유틸리티 함수
├── hooks/                    # React 커스텀 훅
│   └── useQueryParams.ts
├── types/                    # TypeScript 타입
│   └── index.ts
├── styles/                   # 전역 스타일
│   └── globals.css
├── public/                   # 정적 파일
├── package.json
├── tsconfig.json
├── next.config.js
├── tailwind.config.ts
├── postcss.config.js
├── .eslintrc.json
└── README.md
```

## 🛠️ 설치 및 실행

### 1. 의존성 설치
```bash
npm install
```

### 2. 환경 변수 설정
```bash
cp .env.local.example .env.local
```

필요에 따라 `.env.local` 파일을 수정하세요.

### 3. 개발 서버 실행
```bash
npm run dev
```

브라우저에서 [http://localhost:3000](http://localhost:3000)을 열어보세요.

### 4. 빌드 및 배포
```bash
npm run build
npm start
```

## 📝 주요 명령어

```bash
# 개발 서버 실행
npm run dev

# 프로덕션 빌드
npm run build

# 빌드된 앱 실행
npm start

# 코드 린트 검사
npm run lint

# TypeScript 타입 검사
npm run type-check
```

## 🎯 커스터마이징 가이드

### 1. 색상 스키마 변경
`tailwind.config.ts`의 `theme.extend.colors`에서 색상을 수정하세요.

```typescript
colors: {
  primary: '#003366',      // 한은 파란색
  secondary: '#666666',    // 회색
  accent: '#FF6B35',      // 주황색
}
```

### 2. 인증 추가
`lib/api-client.ts`의 요청 인터셉터를 수정하여 인증 토큰을 추가하세요.

```typescript
apiClient.interceptors.request.use((config) => {
  const token = localStorage.getItem('token')
  if (token) {
    config.headers.Authorization = `Bearer ${token}`
  }
  return config
})
```

### 3. API 엔드포인트 생성
`app/api` 디렉토리에 새로운 라우트 파일을 생성하세요.

```typescript
// app/api/users/route.ts
export async function GET() {
  return Response.json({ data: [] })
}
```

## 📚 추가 리소스

- [Next.js 공식 문서](https://nextjs.org/docs)
- [TypeScript 공식 문서](https://www.typescriptlang.org/)
- [Tailwind CSS 공식 문서](https://tailwindcss.com/docs)
- [React Hook Form 공식 문서](https://react-hook-form.com/)

## 📄 라이선스

MIT License

## 💬 지원

문제가 발생하거나 제안이 있으신 경우 이슈를 생성해주세요.

---

**개발자**: 한은경영관리 팀  
**최종 업데이트**: 2026년 5월
