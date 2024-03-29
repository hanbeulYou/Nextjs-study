/** @type {import('next').NextConfig} */
const nextConfig = {
  // strickMode의 경우 dev 상태에서 useEffect가 2번씩 실행됨 -> Map.tsx에서 destroy 당함
  reactStrictMode: true,
  images: {
    domains: ['lecture-1.vercel.app', 'search.pstatic.net'],
  },
  i18n: {
    /** https://nextjs.org/docs/advanced-features/i18n-routing#getting-started */
    locales: ['ko'],
    defaultLocale: 'ko',
  },
};
module.exports = nextConfig;
