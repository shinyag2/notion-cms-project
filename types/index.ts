/**
 * 공통 타입 정의
 */

// API 응답 타입
export interface ApiResponse<T = unknown> {
  success: boolean
  data?: T
  error?: string
  message?: string
}

// 페이지네이션
export interface PaginationParams {
  page: number
  pageSize: number
}

export interface PaginationMeta {
  page: number
  pageSize: number
  total: number
  totalPages: number
}

export interface PaginatedResponse<T> extends ApiResponse<T> {
  meta?: PaginationMeta
}

// 사용자 타입 (필요시 확장)
export interface User {
  id: string
  name: string
  email: string
}

// 에러 타입
export interface ApiError {
  status: number
  message: string
  details?: Record<string, unknown>
}
