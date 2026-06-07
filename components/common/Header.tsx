'use client'

import Link from 'next/link'

/**
 * 헤더 컴포넌트
 */
export default function Header() {
  return (
    <header className="bg-white shadow">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link href="/" className="font-bold text-xl">
              한은경영관리
            </Link>
          </div>
          <div className="flex items-center space-x-8">
            <Link href="/" className="text-gray-600 hover:text-gray-900">
              홈
            </Link>
            <Link
              href="/dashboard"
              className="text-gray-600 hover:text-gray-900"
            >
              대시보드
            </Link>
            <Link href="/" className="text-gray-600 hover:text-gray-900">
              설정
            </Link>
          </div>
        </div>
      </nav>
    </header>
  )
}
