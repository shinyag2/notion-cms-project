#!/usr/bin/env node

const fs = require('fs')
const path = require('path')

/**
 * 새 React 컴포넌트를 생성하는 커스텀 커맨드
 * 사용법: node .claude/commands/generate-component.js ComponentName [--with-form]
 */

// 커맨드 라인 인자 파싱
const args = process.argv.slice(2)
const componentName = args[0]
const withForm = args.includes('--with-form')

if (!componentName) {
  console.error('❌ 에러: 컴포넌트 이름을 입력해주세요.')
  console.log('사용법: npm run generate:component -- ComponentName [--with-form]')
  process.exit(1)
}

// PascalCase 검증
if (!/^[A-Z][a-zA-Z0-9]*$/.test(componentName)) {
  console.error(
    '❌ 에러: 컴포넌트 이름은 PascalCase여야 합니다. (예: MyComponent)'
  )
  process.exit(1)
}

// 컴포넌트 디렉토리 경로
const componentDir = path.join(
  __dirname,
  '../../components',
  componentName
)

// 이미 존재하는지 확인
if (fs.existsSync(componentDir)) {
  console.error(`❌ 에러: ${componentName} 컴포넌트가 이미 존재합니다.`)
  process.exit(1)
}

// 디렉토리 생성
fs.mkdirSync(componentDir, { recursive: true })

// 기본 컴포넌트 템플릿
const basicTemplate = `'use client'

import React from 'react'
import { cn } from '@/lib/cn'

export interface ${componentName}Props
  extends React.HTMLAttributes<HTMLDivElement> {
  // Props 정의
}

/**
 * ${componentName} 컴포넌트
 */
const ${componentName} = React.forwardRef<HTMLDivElement, ${componentName}Props>(
  ({ className, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn('', className)}
        {...props}
      >
        {/* 컴포넌트 내용 */}
      </div>
    )
  }
)

${componentName}.displayName = '${componentName}'

export default ${componentName}
`

// React Hook Form을 포함한 템플릿
const formTemplate = `'use client'

import React from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { cn } from '@/lib/cn'

// Zod 스키마 정의
const ${componentName}Schema = z.object({
  // 필드 정의
  // name: z.string().min(1, '필수 입력 항목입니다'),
})

type ${componentName}FormData = z.infer<typeof ${componentName}Schema>

export interface ${componentName}Props
  extends React.HTMLAttributes<HTMLFormElement> {
  onSubmit?: (data: ${componentName}FormData) => void | Promise<void>
}

/**
 * ${componentName} 폼 컴포넌트
 */
const ${componentName} = React.forwardRef<
  HTMLFormElement,
  ${componentName}Props
>(({ className, onSubmit, ...props }, ref) => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<${componentName}FormData>({
    resolver: zodResolver(${componentName}Schema),
  })

  const handleFormSubmit = async (data: ${componentName}FormData) => {
    if (onSubmit) {
      await onSubmit(data)
    }
  }

  return (
    <form
      ref={ref}
      onSubmit={handleSubmit(handleFormSubmit)}
      className={cn('space-y-4', className)}
      {...props}
    >
      {/* 폼 필드를 여기에 추가하세요 */}
      {/* 예시:
      <div>
        <label htmlFor="name">이름</label>
        <input
          id="name"
          type="text"
          {...register('name')}
          className="w-full px-3 py-2 border rounded-md"
        />
        {errors.name && (
          <span className="text-red-600 text-sm">{errors.name.message}</span>
        )}
      </div>
      */}

      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 disabled:bg-gray-400"
      >
        {isSubmitting ? '제출 중...' : '제출'}
      </button>
    </form>
  )
})

${componentName}.displayName = '${componentName}'

export default ${componentName}
`

// 템플릿 선택
const template = withForm ? formTemplate : basicTemplate
const filePath = path.join(componentDir, `${componentName}.tsx`)

// 파일 생성
fs.writeFileSync(filePath, template, 'utf-8')

console.log(
  `✅ 컴포넌트 생성 완료!`
)
console.log(`📁 경로: ${filePath}`)
console.log(`${withForm ? '📋 React Hook Form 템플릿 포함' : ''}`)
console.log('')
console.log('다음 단계:')
console.log(`1. ${filePath} 파일 편집`)
console.log(`2. 필요한 props와 로직 추가`)
console.log(
  `3. 다른 파일에서 다음과 같이 import: import ${componentName} from '@/components/${componentName}'`
)
