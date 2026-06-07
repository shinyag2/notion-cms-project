/**
 * 로딩 스피너 컴포넌트
 */
export default function Loading() {
  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
    </div>
  )
}

/**
 * 작은 로딩 스피너
 */
export function SmallLoading() {
  return (
    <div className="inline-block">
      <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-blue-600"></div>
    </div>
  )
}
