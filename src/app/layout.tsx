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
    <html lang="ko" className="dark">
      <body className={Pretendard.className}>
        <div className="h-screen w-screen bg-white-light dark:bg-gray_01-dark ">
          <section className="mx-auto flex min-h-screen flex-col items-center justify-between bg-gray_01-light text-gray_05-light dark:bg-gray_00-dark dark:text-gray_05-dark sm:w-screen md:w-96">
            {children}
          </section>
        </div>
      </body>
    </html>
  );
}
