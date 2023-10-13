'use client';
import { useEffect, useState } from 'react';
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, A11y, Navigation, Keyboard } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/a11y';
import 'swiper/css/autoplay';
import 'swiper/css/navigation';
import 'swiper/css/keyboard';

import RecipeCard from '@/components/common/RecipeCard';
import { SWIPER, STANDARD } from '@/constants';
import { isMobile } from '@/utils/isMobile';
import { isTargetIndex } from '@/utils/isTargetIndex';

import { Recommendation } from '@/types';

type Props = {
  recommendations: Recommendation[];
};

export default function Carousel({ recommendations }: Props) {
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
  const [clickedSlideIndex, setClickedSlideIndex] = useState(-1);
  const [bodyWidth, setBodyWidth] = useState(0);
  const handleSlideClick = (index: number) => {
    if (currentSlideIndex !== index) {
      return;
    }
    if (clickedSlideIndex !== index) {
      setClickedSlideIndex(index);
      return;
    }
    setClickedSlideIndex(-1);
  };

  useEffect(() => {
    // NOTE: mobile 유무 확인 후 390 px을 기준으로 슬라이드 거리 조정
    const bodyWidth = isMobile() ? document.body.clientWidth : STANDARD.WIDTH;
    setBodyWidth(bodyWidth);
  }, []);

  return (
    <Swiper
      className="h-full w-full"
      modules={[Autoplay, A11y, Navigation, Keyboard]}
      autoplay={{
        delay: isMobile() ? SWIPER.INFINITE_DELAY : SWIPER.NORMAL_DELAY,
        disableOnInteraction: false,
      }}
      freeMode={true}
      keyboard={{ enabled: true }}
      lazyPreloadPrevNext={SWIPER.LAZY_LOADED_PREV_NEXT}
      spaceBetween={bodyWidth < STANDARD.WIDTH ? bodyWidth : SWIPER.SPACE_BETWEEN}
      slidesPerView={SWIPER.SLIDES_PER_VIEW}
      loop={true}
      loopedSlides={SWIPER.LOOPED_SLIDES}
      loopPreventsSliding={true}
      onRealIndexChange={swiper => {
        setCurrentSlideIndex(swiper.realIndex);
      }}
      cssMode={isMobile()}
    >
      {recommendations.map((recommendation, index) => (
        <SwiperSlide
          key={index}
          className="flex h-full w-full items-center justify-center"
          // NOTE: Swiper 컴포넌트의 display는 테일윈드 클래스를 적용할 수 없다.
          style={{ display: 'flex' }}
          onClick={() => {
            handleSlideClick(index);
          }}
        >
          <div
            className={`relative flex items-center justify-center rounded-3xl shadow-light transition-all dark:shadow-dark ${
              isTargetIndex(currentSlideIndex, index)
                ? 'z-10 h-[460px] w-[340px] cursor-pointer'
                : 'my-[46px] h-[368px] w-[272px]'
            } `}
          >
            {isTargetIndex(clickedSlideIndex, index) ? (
              <RecipeCard recipe={recommendation.recipe} />
            ) : (
              <Image
                src={recommendation.cover.imageUrl}
                alt={recommendation.cover.title}
                sizes="340px"
                width={340}
                height={460}
                priority
              />
            )}
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
