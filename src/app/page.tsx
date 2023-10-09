import Link from 'next/link';

import TopNavBar from '@/components/TopNavBar';
import GlobalNavBar from '@/components/GlobalNavBar';

export default function RootPage() {
  return (
    <>
      <TopNavBar />
      <main className="flex w-full grow flex-col justify-start gap-6">
        <div className="flex h-2/3 grow items-center justify-center">Carousel Slide</div>
        <div className="flex h-1/3 grow-0 flex-col items-center justify-start px-[25px]">
          <Link
            href="/size"
            className="w-full rounded-2xl border-0 bg-gray_01-light p-6 text-large font-bold dark:bg-gray_01-dark"
          >
            꿀조합 찾기
          </Link>
        </div>
      </main>
      <GlobalNavBar />
    </>
  );
}
