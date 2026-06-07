/**
 * 공통 유틸리티 함수
 */

// 날짜 포맷팅
export const formatDate = (date: Date | string): string => {
  const d = new Date(date)
  return d.toLocaleDateString('ko-KR', {
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
  })
}

// 숫자 포맷팅 (통화)
export const formatCurrency = (amount: number): string => {
  return new Intl.NumberFormat('ko-KR', {
    style: 'currency',
    currency: 'KRW',
    minimumFractionDigits: 0,
  }).format(amount)
}

// 숫자 포맷팅 (3자리 쉼표)
export const formatNumber = (num: number): string => {
  return new Intl.NumberFormat('ko-KR').format(num)
}

// 쿼리 파라미터 생성
export const createQueryString = (
  params: Record<string, string | number | boolean | undefined>
): string => {
  const searchParams = new URLSearchParams()
  Object.entries(params).forEach(([key, value]) => {
    if (value !== undefined) {
      searchParams.set(key, String(value))
    }
  })
  return searchParams.toString()
}

// 딜레이 함수 (밀리초)
export const delay = (ms: number): Promise<void> => {
  return new Promise((resolve) => setTimeout(resolve, ms))
}

// 객체 deep clone
export const deepClone = <T>(obj: T): T => {
  return JSON.parse(JSON.stringify(obj))
}
