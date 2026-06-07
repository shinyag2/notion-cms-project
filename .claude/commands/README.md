# 커스텀 커맨드 가이드

이 디렉토리에는 프로젝트 개발을 효율화하는 커스텀 커맨드들이 있습니다.

## 📦 사용 가능한 커맨드

### `generate:component` - React 컴포넌트 생성기

새로운 React 컴포넌트를 자동으로 생성합니다.

#### 기본 사용법
```bash
npm run generate:component -- ComponentName
```

#### 옵션

**`--with-form`** - React Hook Form 템플릿 포함
```bash
npm run generate:component -- UserForm --with-form
```

#### 사용 예시

**기본 컴포넌트 생성:**
```bash
npm run generate:component -- UserCard
```

생성되는 파일:
```
components/
└── UserCard/
    └── UserCard.tsx
```

**폼 컴포넌트 생성:**
```bash
npm run generate:component -- LoginForm --with-form
```

생성되는 파일:
```
components/
└── LoginForm/
    └── LoginForm.tsx
```

#### 생성되는 템플릿

**기본 템플릿:**
- `'use client'` 선언
- React.forwardRef로 ref 지원
- TypeScript Props 인터페이스
- Tailwind CSS 클래스 병합 (cn 함수)
- displayName 설정

**폼 템플릿 (`--with-form`):**
- React Hook Form 설정
- Zod 스키마 정의
- 검증 에러 메시지 표시
- 제출 버튼 (로딩 상태 포함)
- TypeScript 완전 지원

#### 생성된 컴포넌트 구조

```typescript
'use client'

import React from 'react'
import { cn } from '@/lib/cn'

export interface ComponentNameProps
  extends React.HTMLAttributes<HTMLDivElement> {
  // Props 정의
}

const ComponentName = React.forwardRef<HTMLDivElement, ComponentNameProps>(
  ({ className, ...props }, ref) => {
    return (
      <div ref={ref} className={cn('', className)} {...props}>
        {/* 컴포넌트 내용 */}
      </div>
    )
  }
)

ComponentName.displayName = 'ComponentName'

export default ComponentName
```

#### 명명 규칙

- 컴포넌트 이름은 **PascalCase**로 작성해야 합니다
- 올바른 예: `UserCard`, `LoginForm`, `DashboardLayout`
- 잘못된 예: `userCard`, `login-form`, `dashboard_layout`

#### 생성 후 다음 단계

1. 생성된 파일 편집
2. Props 정의 추가
3. 컴포넌트 로직 구현
4. 다른 파일에서 import:
   ```typescript
   import ComponentName from '@/components/ComponentName'
   ```

---

## 🚀 향후 추가 예정 커맨드

- `generate:api-hook` - TanStack Query + Axios 훅 생성
- `generate:page` - 풀스택 페이지 생성 (컴포넌트 + API + 스토어)
- `generate:form` - React Hook Form 폼 컴포넌트 생성
- `generate:store` - Zustand 상태 관리 스토어 생성

---

## 💡 팁

- 명령어 실행 시 **현재 프로젝트 루트 디렉토리**에서 실행하세요
- 같은 이름의 컴포넌트가 이미 존재하면 에러가 발생합니다
- 생성된 템플릿은 자유롭게 수정할 수 있습니다
