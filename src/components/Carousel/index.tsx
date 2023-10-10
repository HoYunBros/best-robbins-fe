'use client';
import { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, A11y } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/a11y';
import 'swiper/css/autoplay';

import { SWIPER } from '@/constants';

export default function Carousel() {
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
  const mockSlideTexts = ['Slide 0', 'Slide 1', 'Slide 2', 'Slide 3', 'Slide 4'];

  return (
    <Swiper
      className="h-full w-full"
      modules={[Autoplay, A11y]}
      autoplay={{ delay: SWIPER.DELAY, disableOnInteraction: false }}
      spaceBetween={SWIPER.SPACE_BETWEEN}
      slidesPerView={SWIPER.SLIDES_PER_VIEW}
      loop={true}
      loopedSlides={SWIPER.LOOPED_SLIDES}
      onRealIndexChange={swiper => {
        setCurrentSlideIndex(swiper.realIndex);
      }}
    >
      {mockSlideTexts.map((text, index) => (
        <SwiperSlide key={index}>
          <div
            className={`ml-[7.5%] ${
              currentSlideIndex === index ? 'h-full' : 'mt-[10%] h-[80%]'
            } flex w-[85%] items-center justify-center rounded-3xl bg-secondary-light`}
          >
            {text}
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
