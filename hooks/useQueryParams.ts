import { useSearchParams, useRouter } from 'next/navigation'
import { useCallback } from 'react'

/**
 * 쿼리 파라미터 관리 훅
 */
export const useQueryParams = () => {
  const searchParams = useSearchParams()
  const router = useRouter()

  const getParam = useCallback(
    (key: string): string | null => {
      return searchParams.get(key)
    },
    [searchParams]
  )

  const updateParams = useCallback(
    (params: Record<string, string | number | null | undefined>) => {
      const newSearchParams = new URLSearchParams(searchParams.toString())

      Object.entries(params).forEach(([key, value]) => {
        if (value === null || value === undefined) {
          newSearchParams.delete(key)
        } else {
          newSearchParams.set(key, String(value))
        }
      })

      router.push(`?${newSearchParams.toString()}`)
    },
    [searchParams, router]
  )

  const clearParams = useCallback(() => {
    router.push(window.location.pathname)
  }, [router])

  return {
    getParam,
    updateParams,
    clearParams,
    allParams: Object.fromEntries(searchParams.entries()),
  }
}
