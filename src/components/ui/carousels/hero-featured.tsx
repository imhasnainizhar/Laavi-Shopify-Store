"use client";
import React, { useRef } from 'react';
import type { Swiper as SwiperType } from "swiper"
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import { NextNavigation, PrevNavigation } from '../buttons/paginations/arrow-paginations';
import PaleIndigoPlayBtn from '../buttons/play-btn';

const FeaturedCorousel = () => {
    const swiperRef = useRef<SwiperType | null>(null);

    return (
        <div className="bg-ghost-white w-full">
            {/* Header Section */}
            <div className="w-full h-[40px] flex justify-between items-center my-[20px]">
                <h2 className="text-[26px] font-light text-text-secondary">See it in action</h2>

                <div className="flex gap-2">
                    <PrevNavigation onClick={() => swiperRef.current?.slidePrev()} varient='circle-arrow'/>
                    <NextNavigation onClick={() => swiperRef.current?.slideNext()} varient='circle-arrow'/>
                </div>
            </div>

            {/* Carousel */}
            <Swiper
                modules={[Navigation]}
                onBeforeInit={(swiper) => {
                    swiperRef.current = swiper;
                }}
                spaceBetween={20}
                slidesPerView={1}
                breakpoints={{
                    640: { slidesPerView: 2 },
                    1024: { slidesPerView: 3 },
                }}
                className="mySwiper w-full h-[250px]"
            >
                {[...Array(6)].map((_, i) => (
                    <SwiperSlide key={i}>
                        <div className="relative group md:h-[230px] md:w-[162px] cursor-pointer aspect-3/4 bg-white overflow-hidden shadow-md">
                            {/* Play Button Overlay */}
                            <div className='absolute top-[184px] left-3.5'>
                                <PaleIndigoPlayBtn />
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
};

export default FeaturedCorousel;
