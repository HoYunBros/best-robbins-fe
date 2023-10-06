import './globals.css';
import type { Metadata } from 'next';
import localFont from 'next/font/local';

export const Pretendard = localFont({
  src: '../../public/fonts/PretendardVariable.woff2',
});

export const metadata: Metadata = {
  metadataBase: new URL('https://best-robbins-fe.vercel.app/'),
  title: {
    default: '베스트라빈스',
    template: '%s | 베스트라빈스',
  },
  description: '최고의 아이스크림 조합을 추천받아보세요!',
  manifest: '/manifest.json',
  openGraph: {
    type: 'website',
    title: '베스트라빈스',
    description: '최고의 아이스크림 조합을 추천받아보세요!',
    images: 'https://kr.object.ncloudstorage.com/best-robbins/logo/logo_string.svg',
    locale: 'ko_KR',
    url: 'https://best-robbins-fe.vercel.app/',
    siteName: '베스트라빈스',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    // 기본 light mode
    <html lang="ko">
      <body className={Pretendard.className}>
        <div className="m-auto min-h-screen bg-white sm:w-screen md:w-96">
          <section className="flex min-h-screen flex-col items-center justify-between p-24">
            {children}
          </section>
        </div>
      </body>
    </html>
  );
}
