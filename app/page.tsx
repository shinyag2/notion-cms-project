'use client'

import Link from 'next/link'
import Button from '@/components/ui/Button'

export default function Home() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-gray-900 mb-6">
          한국은행 경영관리 시스템
        </h1>
        <p className="text-xl text-gray-600 mb-12">
          효율적인 경영 관리를 위한 통합 플랫폼
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {/* 카드 1 */}
          <div className="bg-white rounded-lg shadow p-6">
            <div className="text-3xl mb-4">📊</div>
            <h3 className="text-xl font-semibold mb-2">대시보드</h3>
            <p className="text-gray-600 mb-4">
              주요 경영 지표를 한눈에 확인하세요.
            </p>
            <Link href="/dashboard">
              <Button variant="outline" className="w-full">
                대시보드 이동
              </Button>
            </Link>
          </div>

          {/* 카드 2 */}
          <div className="bg-white rounded-lg shadow p-6">
            <div className="text-3xl mb-4">📈</div>
            <h3 className="text-xl font-semibold mb-2">분석</h3>
            <p className="text-gray-600 mb-4">
              데이터 기반의 통계 분석 리포트
            </p>
            <Button variant="outline" className="w-full" disabled>
              준비 중
            </Button>
          </div>

          {/* 카드 3 */}
          <div className="bg-white rounded-lg shadow p-6">
            <div className="text-3xl mb-4">⚙️</div>
            <h3 className="text-xl font-semibold mb-2">설정</h3>
            <p className="text-gray-600 mb-4">
              시스템 설정 및 사용자 관리
            </p>
            <Button variant="outline" className="w-full" disabled>
              준비 중
            </Button>
          </div>
        </div>

        <div className="bg-blue-50 rounded-lg p-8 mb-8">
          <h2 className="text-2xl font-semibold mb-4">주요 기능</h2>
          <ul className="text-left max-w-2xl mx-auto space-y-2 text-gray-700">
            <li>✓ 실시간 경영 지표 대시보드</li>
            <li>✓ 데이터 기반 의사결정 지원</li>
            <li>✓ 통합 보고서 생성</li>
            <li>✓ 사용자 권한 관리</li>
          </ul>
        </div>

        <Button size="lg" className="mt-8">
          시작하기
        </Button>
      </div>
    </div>
  )
}
