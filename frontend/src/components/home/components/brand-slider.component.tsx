import React from 'react';
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

interface SlideContent {
  maintitle: string;
  title: string;
  subtitle: string;
  discount: string;
  brandLogo: string;
  productImage: string;
  backgroundColor: string;
}

interface BrandSliderProps {
  slides: SlideContent[];
}

const BrandSlider: React.FC<BrandSliderProps> = ({ slides }) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
  };

  return (
    <div className="relative">
      <Swiper {...settings}>
        {slides.map((slide, index) => (
          <div key={index} className={`${slide.backgroundColor} min-h-[300px]`}>
            <div className="container mx-auto px-4 py-8 flex items-center">
            <div className="absolute top-0 left-0 right-0 bg-red-700 text-white py-2 px-4 z-10">
              <h2 className="text-xl font-bold">{slide.maintitle}</h2>
            </div>
              <div className="w-1/2">
                <div className="flex items-center mb-4">

                  <div className="w-12 h-12 mr-4">
                    <Image src="/official-store-icon.png" alt="Official Store" width={48} height={48} />
                  </div>
                  <div className="w-24 h-12">
                    <Image src={slide.brandLogo} alt="Brand Logo" width={96} height={48} objectFit="contain" />
                  </div>
                </div>
                <h2 className="text-4xl font-bold text-white mb-2">{slide.title}</h2>
                <p className="text-2xl text-white mb-4">{slide.subtitle}</p>
                <div className="bg-orange-400 text-white rounded-full px-4 py-2 inline-block">
                  <span className="font-bold">{slide.discount}</span>
                </div>
              </div>
              <div className="w-1/2">
                <Image src={slide.productImage} alt="Product Image" width={500} height={300} objectFit="contain" />
              </div>
            </div>
          </div>
        ))}
      </Swiper>
    </div>
  );
};

export default BrandSlider;