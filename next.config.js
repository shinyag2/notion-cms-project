/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  // 이미지 최적화 설정
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
      },
    ],
  },
  // 국제화 설정 (필요시 활성화)
  // i18n: {
  //   locales: ['ko', 'en'],
  //   defaultLocale: 'ko',
  // },
}

module.exports = nextConfig
