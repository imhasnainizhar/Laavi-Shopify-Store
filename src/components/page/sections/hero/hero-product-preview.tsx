"use client"

import { useState, useRef } from 'react';
import type { Swiper as SwiperType } from "swiper"
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import Image from 'next/image';

const HeroProductPreview = () => {
  const previewImages = [
    '/hero-product/preview/preview-1.png',
    '/hero-product/preview/preview-2.png',
    '/hero-product/preview/preview-3.png',
    '/hero-product/preview/preview-4.png',
    '/hero-product/preview/preview-5.png',
    '/hero-product/preview/preview-6.png',
    '/hero-product/preview/preview-7.png',
  ];

  const [mainImage, setMainImage] = useState(previewImages[0]);
  const swiperRef = useRef<SwiperType | null>(null);

  return (
    <div className="flex flex-col items-center w-full">

      {/* Main Hero Display */}
      <div className="w-full max-h-[550px] aspect-square overflow-hidden 
      rounded-lg shadow-lg border border-gray-100 flex items-center justify-center
       bg-white mb-[15px] max-md:mb-[10px]"
       >
        <Image
          src={mainImage}
          alt=""
          className="object-contain transition-opacity duration-300 ease-in-out w-full h-full"
          width={550}
          height={550}
        />
      </div>
      {/* Thumbnails Row */}
      <div className="w-full min-w-0">
        <Swiper
          modules={[Navigation]}
          onBeforeInit={(swiper) => {
            swiperRef.current = swiper;
          }}
          spaceBetween={8}
          slidesPerView={6.2}
          className="mySwiper"
        >
          {previewImages.map((img, index) => (
            <SwiperSlide key={index}>
              <button
                onClick={() => setMainImage(img)}
                className={`w-full aspect-square m-0.5 border-2 rounded-md overflow-hidden transition-all cursor-pointer block ${
                  mainImage === img
                    ? 'border-purple-600 scale-105'
                    : 'border-transparent opacity-70 hover:opacity-100'
                }`}
              >
                <Image
                  src={img}
                  alt=""
                  className="object-cover"
                  width={82}
                  height={82}
                />
              </button>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default HeroProductPreview;