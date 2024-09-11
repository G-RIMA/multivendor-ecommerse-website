import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import type { SwiperOptions } from 'swiper/types';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

export interface Slide {
  id?: number | string;
  image?: string;
  alt?: string;
  link?: string;
  [key: string]: any; // Allow for additional properties
}

interface ReusableSliderProps {
  slides: Slide[];
  spaceBetween?: number;
  slidesPerView?: number;
  autoplay?: boolean | SwiperOptions['autoplay'];
  pagination?: boolean | SwiperOptions['pagination'];
  navigation?: boolean;
  loop?: boolean;
  className?: string;
  renderSlide?: (slide: Slide) => React.ReactNode;
}

const ReusableSlider: React.FC<ReusableSliderProps> = ({
  slides,
  spaceBetween = 0,
  slidesPerView = 1,
  autoplay = { delay: 5000, disableOnInteraction: false },
  pagination = { clickable: true },
  navigation = true,
  loop = true,
  className = "w-full h-64",
  renderSlide
}) => {
  return (
    <Swiper
      modules={[Autoplay, Pagination, Navigation]}
      spaceBetween={spaceBetween}
      slidesPerView={slidesPerView}
      autoplay={autoplay}
      pagination={pagination}
      navigation={navigation}
      loop={loop}
      className={className}
    >
      {slides.map((slide, index) => (
        <SwiperSlide key={slide.id || index}>
          {renderSlide ? renderSlide(slide) : (
            <Link href={slide.link || '#'}>
              <div className="relative w-full h-full">
                <Image
                  src={slide.image || ''}
                  alt={slide.alt || ''}
                  layout="fill"
                  objectFit="cover"
                />
              </div>
            </Link>
          )}
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default ReusableSlider;

