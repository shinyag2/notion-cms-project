'use client'

import { useEffect, useState } from 'react'
import {
  LineChart,
  Line,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts'
import { formatCurrency, formatNumber } from '@/lib/utils'

// 샘플 데이터
const chartData = [
  { month: '1월', revenue: 4000, expense: 2400 },
  { month: '2월', revenue: 3000, expense: 1398 },
  { month: '3월', revenue: 2000, expense: 9800 },
  { month: '4월', revenue: 2780, expense: 3908 },
  { month: '5월', revenue: 1890, expense: 4800 },
  { month: '6월', revenue: 2390, expense: 3800 },
]

/**
 * 대시보드 페이지
 */
export default function DashboardPage() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  const stats = [
    { label: '총 수익', value: 12500000, icon: '💰' },
    { label: '총 지출', value: 8300000, icon: '📉' },
    { label: '순이익', value: 4200000, icon: '📈' },
    { label: '활성 사용자', value: 1250, icon: '👥' },
  ]

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-3xl font-bold mb-8">대시보드</h1>

      {/* 통계 카드 */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
        {stats.map((stat) => (
          <div
            key={stat.label}
            className="bg-white rounded-lg shadow p-6 border-l-4 border-blue-500"
          >
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-600 text-sm">{stat.label}</p>
                <p className="text-2xl font-bold mt-2">
                  {stat.label === '활성 사용자'
                    ? formatNumber(stat.value)
                    : formatCurrency(stat.value)}
                </p>
              </div>
              <div className="text-3xl">{stat.icon}</div>
            </div>
          </div>
        ))}
      </div>

      {/* 차트 섹션 */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* 수익/지출 라인 차트 */}
        <div className="bg-white rounded-lg shadow p-6">
          <h2 className="text-xl font-semibold mb-4">수익 및 지출 추이</h2>
          {mounted && (
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={chartData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="month" />
                <YAxis />
                <Tooltip formatter={(value) => formatCurrency(value as number)} />
                <Legend />
                <Line
                  type="monotone"
                  dataKey="revenue"
                  stroke="#3b82f6"
                  name="수익"
                />
                <Line
                  type="monotone"
                  dataKey="expense"
                  stroke="#ef4444"
                  name="지출"
                />
              </LineChart>
            </ResponsiveContainer>
          )}
        </div>

        {/* 월별 수익 바 차트 */}
        <div className="bg-white rounded-lg shadow p-6">
          <h2 className="text-xl font-semibold mb-4">월별 수익</h2>
          {mounted && (
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={chartData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="month" />
                <YAxis />
                <Tooltip formatter={(value) => formatCurrency(value as number)} />
                <Legend />
                <Bar dataKey="revenue" fill="#3b82f6" name="수익" />
              </BarChart>
            </ResponsiveContainer>
          )}
        </div>
      </div>

      {/* 최근 활동 */}
      <div className="bg-white rounded-lg shadow p-6 mt-8">
        <h2 className="text-xl font-semibold mb-4">최근 활동</h2>
        <div className="space-y-3">
          {[1, 2, 3, 4].map((i) => (
            <div key={i} className="flex items-center p-3 border-b">
              <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
              <span className="text-gray-700">
                사용자 활동 #{i}: 경영 데이터 조회
              </span>
              <span className="text-gray-400 text-sm ml-auto">
                {i}시간 전
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
