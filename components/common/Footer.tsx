/**
 * 푸터 컴포넌트
 */
export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-gray-50 border-t">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex justify-between items-center">
          <p className="text-gray-600 text-sm">
            © {currentYear} 한은경영관리. 모든 권리 보유.
          </p>
          <div className="flex space-x-6 text-sm">
            <a href="#" className="text-gray-600 hover:text-gray-900">
              개인정보보호
            </a>
            <a href="#" className="text-gray-600 hover:text-gray-900">
              이용약관
            </a>
            <a href="#" className="text-gray-600 hover:text-gray-900">
              연락처
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
