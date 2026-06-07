import { NextResponse } from 'next/server'

/**
 * 헬스 체크 API 엔드포인트
 * GET /api/health
 */
export async function GET() {
  return NextResponse.json({
    success: true,
    message: '서버가 정상 작동 중입니다.',
    timestamp: new Date().toISOString(),
  })
}
