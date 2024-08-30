import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

const promotions = [
  { id: 1, image: '/promo1.jpg', alt: 'Summer Sale', link: '/promotions/summer-sale' },
  { id: 2, image: '/promo2.jpg', alt: 'New Arrivals', link: '/promotions/new-arrivals' },
  { id: 3, image: '/promo3.jpg', alt: 'Clearance', link: '/promotions/clearance' },
  { id: 4, image: '/promo4.jpg', alt: 'Holiday Deals', link: '/promotions/holiday-deals' },
  { id: 5, image: '/promo5.jpg', alt: 'Flash Sale', link: '/promotions/flash-sale' },
];

const PromotionalSlider = () => {
  return (
    <Swiper
      modules={[Autoplay, Pagination, Navigation]}
      spaceBetween={0}
      slidesPerView={1}
      autoplay={{
        delay: 5000,
        disableOnInteraction: false,
      }}
      pagination={{ clickable: true }}
      navigation
      className="w-full h-64"
    >
      {promotions.map((promo) => (
        <SwiperSlide key={promo.id}>
          <Link href={promo.link}>
            <div className="relative w-full h-full">
              <Image
                src={promo.image}
                alt={promo.alt}
                layout="fill"
                objectFit="cover"
              />
            </div>
          </Link>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default PromotionalSlider;