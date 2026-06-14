# 한국은행 경영관리 시스템 - 개발 가이드

## 📋 프로젝트 개요

이 프로젝트는 한국은행 경영관리를 위한 현대적인 웹 애플리케이션입니다.
TypeScript, Next.js 14, React 18, Tailwind CSS를 사용하여 구축되었습니다.

## 🛠️ 개발 환경 설정

### 필수 도구
- Node.js 18+
- npm 또는 yarn

### 개발 서버 실행
```bash
npm run dev
```

### 타입 검사
```bash
npm run type-check
```

## 📁 프로젝트 구조

```
app/                 # Next.js App Router (pages, layouts, API routes)
components/          # React 컴포넌트
  ├── ui/           # UI 컴포넌트 (재사용 가능)
  └── common/       # 공통 컴포넌트 (Header, Footer 등)
lib/                 # 유틸리티 함수 및 API 클라이언트
hooks/               # 커스텀 React 훅
types/               # TypeScript 타입 정의
styles/              # 전역 CSS 스타일
```

## 🎯 코딩 규칙

### TypeScript
- 모든 파일에서 명시적인 타입 지정 필수
- 타입은 `types/index.ts`에서 중앙화 관리
- `any` 사용 금지, 필요시 `unknown` 사용

### 컴포넌트
- `'use client'` 선언이 필요한 경우만 명시적으로 추가
- Props에 명시적인 인터페이스 정의
- 간단한 JSDoc 주석 추가 (필요시)

### 스타일링
- Tailwind CSS 우선 사용
- 커스텀 CSS는 `styles/globals.css`에 추가
- CSS 클래스 병합은 `cn()` 함수 사용

### 폼 관리
- React Hook Form 사용
- Zod로 스키마 검증

### 상태 관리
- 전역 상태: Zustand
- 서버 상태: TanStack Query
- 로컬 상태: useState

## 📋 커밋 규칙

커밋 메시지는 한국어로 작성합니다.

```
[타입] 간단한 설명

상세 설명 (필요시)

예시:
[feat] 대시보드 차트 컴포넌트 추가
[fix] 모바일 메뉴 레이아웃 버그 수정
[refactor] API 클라이언트 구조 개선
```

### 타입 종류
- `feat`: 새로운 기능
- `fix`: 버그 수정
- `refactor`: 리팩토링
- `docs`: 문서 변경
- `style`: 포맷팅
- `test`: 테스트 추가

## 🔍 API 개발 가이드

### API 라우트 생성
`app/api` 디렉토리에 폴더 구조에 따라 파일 생성

```typescript
// app/api/users/route.ts
import { NextRequest, NextResponse } from 'next/server'
import type { ApiResponse } from '@/types'

export async function GET(request: NextRequest) {
  try {
    // 로직
    return NextResponse.json<ApiResponse>({
      success: true,
      data: [],
    })
  } catch (error) {
    return NextResponse.json(
      { success: false, error: '에러 메시지' },
      { status: 500 }
    )
  }
}
```

### API 호출
`lib/api-client.ts`의 함수 사용

```typescript
import { get, post } from '@/lib/api-client'

const data = await get('/api/users')
await post('/api/users', { name: '홍길동' })
```

## 📊 데이터 시각화

Recharts를 사용합니다.

```typescript
import { LineChart, Line } from 'recharts'

<ResponsiveContainer width="100%" height={300}>
  <LineChart data={chartData}>
    <Line dataKey="value" stroke="#3b82f6" />
  </LineChart>
</ResponsiveContainer>
```

## 🔐 보안 주의사항

- 민감한 정보는 `.env.local`에 저장
- API 키는 환경 변수로 관리
- 클라이언트 코드에서 비밀 정보 노출 금지
- 입력 데이터는 항상 Zod로 검증

## 🧪 테스트 (향후 추가)

```bash
npm run test
```

## 📈 배포

### Vercel 배포
```bash
npm run build
vercel
```

### 환경 변수 설정
배포 플랫폼의 환경 변수 설정에서 `.env.local`의 변수들을 추가합니다.

## 📚 참고 자료

- [Next.js 공식 문서](https://nextjs.org/docs)
- [React 공식 문서](https://react.dev)
- [Tailwind CSS 공식 문서](https://tailwindcss.com/docs)
- [TypeScript 공식 문서](https://www.typescriptlang.org/docs)

## 🆘 문제 해결

### 포트 충돌
```bash
npm run dev -- -p 3001
```

### 캐시 문제
```bash
rm -rf .next
npm run dev
```

## 🤝 기여 가이드

1. 새로운 기능은 feature 브랜치에서 개발
2. 커밋 전에 타입 검사 실행: `npm run type-check`
3. 코드 린트: `npm run lint`
4. PR 작성 시 변경 사항 상세히 기술

## 📖 프로젝트 컨텍스트

- PRD 문서: @docs/PRD.md
- 개발 로드맵: @docs/ROADMAP.md

---

**마지막 업데이트**: 2026년 6월 15일
