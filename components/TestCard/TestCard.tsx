'use client'

import React from 'react'
import { cn } from '@/lib/cn'

export interface TestCardProps
  extends React.HTMLAttributes<HTMLDivElement> {
  // Props 정의
}

/**
 * TestCard 컴포넌트
 */
const TestCard = React.forwardRef<HTMLDivElement, TestCardProps>(
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

TestCard.displayName = 'TestCard'

export default TestCard
