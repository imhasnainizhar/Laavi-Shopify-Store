"use client"

import { useState, useRef, useEffect } from 'react';
import type { Swiper as SwiperType } from "swiper";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import Image from 'next/image';

const useIsHorizontal = () => {
  const [isHorizontal, setIsHorizontal] = useState<boolean | null>(null);

  useEffect(() => {
    const check = () => {
      // ✅ matches xl (1280) and md (768) CSS breakpoints
      setIsHorizontal(window.innerWidth < 768 || window.innerWidth >= 1024);
    };

    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  return isHorizontal;
};

const VERTICAL_HEIGHT = 420;

const HeroProductPreview = () => {
  const isHorizontal = useIsHorizontal();

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

  // ✅ avoid hydration mismatch
  if (isHorizontal === null) return null;

  return (
    <div className="flex w-full flex-col gap-[15px] lg:flex-row xl:flex-col">

      {/* Main image */}
      <div className="w-full aspect-square overflow-hidden rounded-lg border border-gray-100 bg-white flex items-center justify-center">
        <Image
          src={mainImage}
          alt=""
          className="object-contain w-full h-full transition-opacity duration-300 ease-in-out"
          width={550}
          height={550}
        />
      </div>

      {/* Thumbnails */}
      {/* ✅ horizontal = full width strip, vertical = fixed-width side column */}
      <div
        className={isHorizontal ? "w-full h-[85px] max-lg:h-[70px]" : "w-[85px]"}
        style={!isHorizontal ? { height: `${VERTICAL_HEIGHT}px` } : {}}
      >
        <Swiper
          modules={[Navigation]}
          onBeforeInit={(swiper) => { swiperRef.current = swiper; }}
          direction={isHorizontal ? "horizontal" : "vertical"}
          slidesPerView={isHorizontal ? 6.2 : 5}
          spaceBetween={8}
          style={!isHorizontal ? { height: `${VERTICAL_HEIGHT}px` } : {}}
          className="h-full w-full"
        >
          {previewImages.map((img, index) => (
            <SwiperSlide key={index}>
              <button
                onClick={() => setMainImage(img)}
                className={`block aspect-square w-full cursor-pointer overflow-hidden rounded-[8px] border-2 transition-all ${
                  mainImage === img
                    ? 'scale-[1.02] border-rich-purple'
                    : 'border-transparent opacity-70 hover:opacity-100'
                }`}
              >
                <Image
                  src={img}
                  alt=""
                  className="object-cover w-full h-full"
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