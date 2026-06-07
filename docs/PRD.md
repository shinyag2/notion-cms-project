# 개인 개발 블로그 PRD (Product Requirements Document)

**작성일**: 2026년 6월 7일  
**프로젝트명**: 개인 개발 블로그 (Notion CMS 기반)  
**상태**: 초안

---

## 1. 프로젝트 개요

### 1.1 목적
Notion을 CMS(Content Management System)로 활용하여 개인 기술 블로그를 구축합니다. Notion에서 글을 작성하면 자동으로 블로그에 반영되는 헤드리스 CMS 구조입니다.

### 1.2 핵심 가치
- **작성 편의성**: Notion의 직관적인 UI에서 글 작성
- **자동화**: API를 통한 자동 동기화
- **유지보수성**: 별도의 관리자 페이지 불필요
- **확장성**: Notion 데이터베이스로 쉬운 확장

### 1.3 CMS 선택 이유
- Notion이 제공하는 강력한 API (`@notionhq/client`)
- 무료 플랜에서 충분한 기능 제공
- 리치 텍스트 에디터 기능 (코드 블록, 이미지, 링크 등)
- 별도의 관리자 인터페이스 구축 불필요
- 데이터 백업 및 버전 관리 용이

---

## 2. 주요 기능

### 2.1 기능 목록

#### 2.1.1 Notion 데이터베이스 연동
- Notion API를 통한 글 목록 조회
- 실시간 데이터 동기화
- 환경 변수를 통한 API 키 관리

#### 2.1.2 글 목록 페이지
- 최근 발행된 글부터 순서대로 표시
- 글 제목, 카테고리, 발행일, 요약 정보 표시
- 페이지네이션 또는 무한 스크롤 (MVP는 페이지네이션)

#### 2.1.3 글 상세 페이지
- 개별 글의 완전한 내용 표시
- Notion 페이지 콘텐츠 렌더링
- 메타데이터 표시 (작성일, 카테고리, 태그)

#### 2.1.4 카테고리별 필터링
- 카테고리 목록 표시
- 선택된 카테고리의 글만 필터링
- 다중 선택 가능 (옵션)

#### 2.1.5 검색 기능
- 글 제목 및 태그 기반 검색
- 실시간 검색 결과 표시
- 검색 결과 하이라이팅

#### 2.1.6 반응형 디자인
- 데스크톱, 태블릿, 모바일 모두 최적화
- 모바일 네비게이션 메뉴
- 터치 친화적인 UI

---

## 3. Notion 데이터베이스 구조

### 3.1 데이터베이스 스키마

| 필드명 | 필드 타입 | 설명 | 필수여부 |
|--------|----------|------|---------|
| Title | Title | 블로그 글의 제목 | 필수 |
| Category | Select | 글의 카테고리 (React, Next.js, TypeScript 등) | 필수 |
| Tags | Multi-select | 글의 태그 (여러 개 선택 가능) | 선택 |
| Published | Date | 글의 발행일 | 필수 |
| Status | Select | 글의 상태 (초안/발행됨) | 필수 |
| Content | Page | 글의 본문 (Notion 페이지 콘텐츠) | 필수 |
| Thumbnail | Files & media | 글의 썸네일 이미지 | 선택 |
| Description | Rich text | 글의 짧은 설명/요약 | 선택 |

### 3.2 데이터베이스 필터 규칙
- **발행 상태**: Status = "발행됨"인 글만 표시
- **발행일 범위**: 과거 날짜만 표시

---

## 4. 화면 구성 및 페이지

### 4.1 홈 페이지 (`/`)
- **목적**: 최근 발행된 글 목록 표시
- **구성요소**:
  - 헤더 (로고, 네비게이션)
  - 히어로 섹션 (선택사항)
  - 글 목록 (카드 형태)
    - 제목
    - 카테고리
    - 발행일
    - 요약
    - 썸네일 (있는 경우)
  - 푸터
- **상호작용**:
  - 글 카드 클릭 시 상세 페이지로 이동
  - 카테고리 필터 가능 (사이드바 또는 태그)
  - 검색어 입력 시 실시간 필터링

### 4.2 글 상세 페이지 (`/posts/[id]`)
- **목적**: 개별 글의 완전한 내용 표시
- **구성요소**:
  - 헤더 (로고, 네비게이션)
  - 글 메타데이터
    - 제목
    - 작성일
    - 카테고리
    - 태그
    - 예상 읽기 시간 (선택사항)
  - 썸네일 (있는 경우)
  - 본문 콘텐츠 (Notion 렌더링)
  - 관련 글 추천 (선택사항)
  - 푸터
- **상호작용**:
  - 뒤로가기 버튼
  - 카테고리/태그 클릭 시 필터링 페이지로 이동

### 4.3 카테고리 페이지 (`/category/[name]`)
- **목적**: 특정 카테고리의 글 목록 표시
- **구성요소**:
  - 헤더
  - 카테고리명 및 설명
  - 해당 카테고리의 글 목록
  - 푸터

### 4.4 검색 결과 페이지 (`/search`)
- **목적**: 검색 결과 표시
- **구성요소**:
  - 검색 입력 박스 (고정)
  - 검색 결과 목록
  - 결과 없음 메시지
  - 푸터

---

## 5. 기술 스택

### 5.1 프론트엔드
- **Framework**: Next.js 15 (App Router)
- **Language**: TypeScript
- **UI Framework**: shadcn/ui (컴포넌트 라이브러리)
- **Styling**: Tailwind CSS
- **Icons**: Lucide React

### 5.2 CMS 및 데이터
- **CMS**: Notion (API: `@notionhq/client`)
- **API 통신**: fetch 또는 axios

### 5.3 배포
- **Hosting**: Vercel
- **Domain**: (사용자 도메인)
- **Environment**: Node.js 18+

### 5.4 추가 라이브러리 (검토 예정)
- `react-markdown` 또는 `notion-to-html` (Notion 콘텐츠 렌더링)
- `date-fns` (날짜 포맷팅)
- `clsx` 또는 `classnames` (CSS 클래스 병합)

---

## 6. MVP (Minimum Viable Product) 범위

### 6.1 포함되는 기능
- ✅ Notion API를 통한 글 목록 조회
- ✅ 글 상세 페이지 표시
- ✅ 기본 스타일링 (Tailwind CSS)
- ✅ 반응형 디자인
- ✅ 카테고리 필터링 (기본)
- ✅ 검색 기능 (제목 기반)

### 6.2 MVP 이후 확장 기능
- 댓글 기능 (Giscus, Utterances)
- 트래킹 및 분석 (Google Analytics, Vercel Analytics)
- 다크/라이트 테마 전환
- 목차 (Table of Contents)
- 구독 기능 (뉴스레터)
- OG 태그 최적화 (SEO)
- 정적 생성 (SSG) 및 캐싱 전략 개선
- 무한 스크롤 페이지네이션

---

## 7. 기술 구현 상세

### 7.1 Notion API 연동

#### 환경 변수 설정
```
NEXT_PUBLIC_NOTION_DATABASE_ID=<database-id>
NOTION_API_KEY=<api-key>
```

#### API 클라이언트 구조
```typescript
// lib/notion-client.ts
import { Client } from '@notionhq/client'

const notion = new Client({ auth: process.env.NOTION_API_KEY })

export async function getPosts() {
  // 쿼리 로직
}

export async function getPostBySlug(slug: string) {
  // 상세 조회 로직
}

export async function getCategories() {
  // 카테고리 목록 조회
}
```

### 7.2 글 목록 조회

**엔드포인트**: `GET /api/posts`

**쿼리 옵션**:
- `category`: 카테고리별 필터링
- `page`: 페이지 번호
- `limit`: 페이지당 글 개수 (기본값: 10)

**응답**:
```json
{
  "posts": [
    {
      "id": "notion-page-id",
      "title": "글 제목",
      "category": "카테고리",
      "tags": ["태그1", "태그2"],
      "publishedAt": "2026-06-07",
      "description": "글 요약",
      "thumbnail": "이미지-url"
    }
  ],
  "total": 15,
  "page": 1
}
```

### 7.3 글 상세 조회

**엔드포인트**: `GET /api/posts/[id]`

**응답**:
```json
{
  "id": "notion-page-id",
  "title": "글 제목",
  "category": "카테고리",
  "tags": ["태그1", "태그2"],
  "publishedAt": "2026-06-07",
  "content": "렌더링된-html-콘텐츠",
  "thumbnail": "이미지-url"
}
```

### 7.4 콘텐츠 렌더링

Notion의 블록 타입을 HTML로 변환:
- 제목 (h1, h2, h3)
- 단락
- 리스트 (번호, 불릿)
- 코드 블록 (문법 강조)
- 이미지
- 인용
- 구분선
- 링크

---

## 8. 구현 단계

### Phase 1: 프로젝트 초기 설정 (1주)
- [ ] Notion API 패키지 설치 (`@notionhq/client`)
- [ ] 환경 변수 설정
- [ ] Notion 데이터베이스 생성 및 API 키 발급
- [ ] 테스트 글 작성 (Notion)

### Phase 2: 데이터 계층 구현 (1주)
- [ ] Notion 클라이언트 설정
- [ ] 글 목록 조회 API 구현
- [ ] 글 상세 조회 API 구현
- [ ] 카테고리 목록 조회 API 구현

### Phase 3: UI 구현 - 글 목록 (1주)
- [ ] 홈 페이지 레이아웃 구현
- [ ] 글 카드 컴포넌트 개발
- [ ] 글 목록 페이지 구현
- [ ] 페이지네이션 구현

### Phase 4: UI 구현 - 글 상세 (1주)
- [ ] Notion 콘텐츠 렌더러 구현
- [ ] 글 상세 페이지 구현
- [ ] 메타데이터 표시
- [ ] 관련 글 추천 (선택사항)

### Phase 5: 추가 기능 구현 (1주)
- [ ] 카테고리 필터링
- [ ] 검색 기능
- [ ] 반응형 디자인 최적화

### Phase 6: 스타일링 및 최적화 (1주)
- [ ] 전체 UI 폴리싱
- [ ] 라이트/다크 테마 (선택사항)
- [ ] 성능 최적화 (이미지 최적화, 캐싱)
- [ ] SEO 최적화

### Phase 7: 배포 (1주)
- [ ] Vercel 배포 설정
- [ ] 환경 변수 구성
- [ ] 도메인 연결
- [ ] 모니터링 설정

---

## 9. 성공 기준

### 기능 기준
- ✅ Notion 데이터베이스에서 글을 정상적으로 조회
- ✅ 글 상세 페이지에서 모든 Notion 콘텐츠 타입 렌더링
- ✅ 카테고리별 필터링 작동
- ✅ 검색 기능 정상 작동
- ✅ 모든 페이지 로딩 시간 < 3초

### 품질 기준
- ✅ TypeScript 타입 안정성 확보 (no `any`)
- ✅ 모바일 화면에서 정상 표시
- ✅ 접근성 기준 충족 (WCAG 2.1 Level A 최소)
- ✅ 마크업 유효성 검증

### 사용자 경험
- ✅ 직관적인 네비게이션
- ✅ 빠른 로딩 속도
- ✅ 깔끔한 디자인

---

## 10. 위험 요소 및 대응 방안

| 위험 요소 | 영향도 | 대응 방안 |
|----------|--------|---------|
| Notion API 레이트 제한 | 중 | 응답 캐싱, ISR 사용 |
| Notion 업데이트 지연 | 낮 | 정기적 재검증, 수동 재배포 |
| 콘텐츠 렌더링 오류 | 중 | 블록 타입별 테스트, 폴백 UI |
| 이미지 로딩 실패 | 낮 | 플레이스홀더 제공, 에러 처리 |
| SEO 문제 | 중 | SSG 또는 ISR 활용 |

---

## 11. 향후 고려사항

### 11.1 기능 확장
- 댓글 시스템 통합
- 구독/뉴스레터 기능
- 통계 및 분석 대시보드
- 다국어 지원
- 관련 글 자동 추천

### 11.2 성능 최적화
- 에지 캐싱 (Vercel KV)
- 정적 생성 (SSG) 전환
- 이미지 CDN 활용
- 폰트 최적화

### 11.3 모니터링 및 운영
- 에러 트래킹 (Sentry)
- 분석 대시보드 (Vercel Analytics)
- 자동화된 백업
- 성능 메트릭 추적

---

## 12. 참고 자료

- [Next.js 공식 문서](https://nextjs.org/docs)
- [Notion API 문서](https://developers.notion.com)
- [Tailwind CSS 공식 문서](https://tailwindcss.com)
- [shadcn/ui 컴포넌트](https://ui.shadcn.com)

---

**승인자**: -  
**최종 검토일**: -
