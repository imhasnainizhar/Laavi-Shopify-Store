"use client";
import React, { useRef } from 'react';
import type { Swiper as SwiperType } from "swiper"
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import { NextNavigation, PrevNavigation } from '@/components/ui/buttons/paginations/arrow-paginations';
import PaleIndigoPlayBtn from '@/components/ui/buttons/play-btn';

const FeaturedCorousel = () => {
    const swiperRef = useRef<SwiperType | null>(null);

    return (
        <div className="bg-ghost-white w-full">
            {/* Header Section */}
            <div className="w-full h-10 flex justify-between items-center my-5">
                <h2 className="text-fluid-2xl font-light text-text-secondary">See it in action</h2>
                <div className="flex gap-2">
                    <PrevNavigation onClick={() => swiperRef.current?.slidePrev()} variant='circle-arrow'/>
                    <NextNavigation onClick={() => swiperRef.current?.slideNext()} variant='circle-arrow'/>
                </div>
            </div>

            {/* Swiper Section */}
            <Swiper
                modules={[Navigation]}
                onBeforeInit={(swiper) => { swiperRef.current = swiper; }}
                spaceBetween={15}
                className="mySwiper w-full h-auto align-stretched_swiper"
                breakpoints={{
                    0: { slidesPerView: 3 }
                }}
            >
                {[...Array(6)].map((_, i) => (
                    <SwiperSlide key={i} className="h-auto!">
                        <div className="relative h-full flex flex-1 group cursor-pointer aspect-3/4 bg-white overflow-hidden shadow-md">
                            <div className='absolute bottom-3 left-3.5'>
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