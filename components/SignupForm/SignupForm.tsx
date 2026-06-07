'use client'

import React from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { cn } from '@/lib/cn'

// Zod 스키마 정의
const SignupFormSchema = z.object({
  // 필드 정의
  // name: z.string().min(1, '필수 입력 항목입니다'),
})

type SignupFormFormData = z.infer<typeof SignupFormSchema>

export interface SignupFormProps
  extends React.HTMLAttributes<HTMLFormElement> {
  onSubmit?: (data: SignupFormFormData) => void | Promise<void>
}

/**
 * SignupForm 폼 컴포넌트
 */
const SignupForm = React.forwardRef<
  HTMLFormElement,
  SignupFormProps
>(({ className, onSubmit, ...props }, ref) => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<SignupFormFormData>({
    resolver: zodResolver(SignupFormSchema),
  })

  const handleFormSubmit = async (data: SignupFormFormData) => {
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

SignupForm.displayName = 'SignupForm'

export default SignupForm
