import Link from 'next/link';

import TopNavBar from '@/components/common/TopNavBar';
import GlobalNavBar from '@/components/common/GlobalNavBar';
import Carousel from '@/components/home/Carousel';
import { getRecommendations } from '@/services/getRecommendations';

export default async function RootPage() {
  const recommendations = await getRecommendations();
  return (
    <>
      <TopNavBar />
      <main className="flex h-full w-full flex-1 flex-col justify-start">
        <div className="flex h-full items-center justify-center">
          <Carousel recommendations={recommendations} />
        </div>
        <div className="relative flex h-1/6 w-full flex-none flex-col items-center justify-start">
          <Link
            href="/size"
            className="h-fit w-[340px] rounded-2xl border-0 bg-gray_01-light p-6 text-large font-bold dark:bg-gray_01-dark"
          >
            꿀조합 찾기
          </Link>
        </div>
      </main>
      <GlobalNavBar />
    </>
  );
}
