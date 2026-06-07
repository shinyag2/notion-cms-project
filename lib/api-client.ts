import axios, { AxiosInstance, AxiosRequestConfig } from 'axios'
import type { ApiResponse, ApiError } from '@/types'

/**
 * API 클라이언트 설정 및 인스턴스
 */

const apiClient: AxiosInstance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3000/api',
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
  },
})

// 요청 인터셉터
apiClient.interceptors.request.use(
  (config) => {
    // 인증 토큰이 필요한 경우 여기에 추가
    // const token = localStorage.getItem('token')
    // if (token) {
    //   config.headers.Authorization = `Bearer ${token}`
    // }
    return config
  },
  (error) => {
    return Promise.reject(error)
  }
)

// 응답 인터셉터
apiClient.interceptors.response.use(
  (response) => {
    return response.data
  },
  (error) => {
    const apiError: ApiError = {
      status: error.response?.status || 500,
      message: error.response?.data?.message || error.message || '알 수 없는 오류가 발생했습니다.',
      details: error.response?.data?.details,
    }
    return Promise.reject(apiError)
  }
)

// GET 요청
export const get = async <T = unknown>(
  url: string,
  config?: AxiosRequestConfig
): Promise<ApiResponse<T>> => {
  return apiClient.get<void, ApiResponse<T>>(url, config)
}

// POST 요청
export const post = async <T = unknown>(
  url: string,
  data?: unknown,
  config?: AxiosRequestConfig
): Promise<ApiResponse<T>> => {
  return apiClient.post<unknown, ApiResponse<T>>(url, data, config)
}

// PUT 요청
export const put = async <T = unknown>(
  url: string,
  data?: unknown,
  config?: AxiosRequestConfig
): Promise<ApiResponse<T>> => {
  return apiClient.put<unknown, ApiResponse<T>>(url, data, config)
}

// DELETE 요청
export const del = async <T = unknown>(
  url: string,
  config?: AxiosRequestConfig
): Promise<ApiResponse<T>> => {
  return apiClient.delete<void, ApiResponse<T>>(url, config)
}

// PATCH 요청
export const patch = async <T = unknown>(
  url: string,
  data?: unknown,
  config?: AxiosRequestConfig
): Promise<ApiResponse<T>> => {
  return apiClient.patch<unknown, ApiResponse<T>>(url, data, config)
}

export default apiClient
