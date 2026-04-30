"use client";

import React, { useRef } from 'react';
import type { Swiper as SwiperType } from "swiper"
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import { NextNavigation, PrevNavigation } from '../buttons/paginations/arrow-paginations';
import PurpleQuotation from '../marks/purple-quotation';
import Cosmopolitian from '@/components/testimonials/title-svgs/cosmopolitian';
import MarieClaire from '@/components/testimonials/title-svgs/marie-claire';
import { Glamour } from '@/components/testimonials/title-svgs/glamour';
import BuzzFeed from '@/components/testimonials/title-svgs/buzzfeed';
import { Forbes } from '@/components/testimonials/title-svgs/forbes';
import { testimonials } from '@/db/testimonials';
import { TestimonialSource } from "@/types/testimonials"
import 'swiper/css';
import 'swiper/css/pagination';

export default function TestimonialSlider() {
    const swiperRef = useRef<SwiperType | null>(null);

    const sourceMap: Record<TestimonialSource, React.FC> = {
        MarieClaire: MarieClaire,
        Glamour: Glamour,
        Cosmopolitan: Cosmopolitian,
        Forbes: Forbes,
        BuzzFeed: BuzzFeed
    };

    return (
        <div className="bg-ghost-white w-full h-[500px] overflow-hidden flex flex-col justify-center items-center">
            {/* Carousel */}
            <Swiper
                grabCursor={true}
                cssMode={false}
                centeredSlides={false}
                loop={false}
                slidesPerView={3}
                spaceBetween={30}
                modules={[Pagination]}
                pagination={{
                    clickable: true,
                    el: 'custom-pagination',
                    bulletClass: 'swiper-pagination-bullet',
                    bulletActiveClass: 'swiper-pagination-bullet-active',
                }}
                watchOverflow={true}
                breakpoints={{
                    0: { slidesPerView: 1 },
                    640: { slidesPerView: 2 },
                    1024: { slidesPerView: 3 },
                }}
                onBeforeInit={(swiper) => {
                    swiperRef.current = swiper;
                }}
                className="testimonial-swiper max-w-[1260px] overflow-hidden"
            >
                {testimonials.map((review, i) => {
                    const Svg = sourceMap[review.source];

                    return (
                        <SwiperSlide key={i} >
                            <div className='testimonial-swiper flex-1 h-[230px] sm:h-[278px] bg-white
                        rounded-[12px] flex flex-col justify-center items-center gap-4.5
                        shadow-[0px_2.4px_28.8px_0px_#0000001A]'
                            >
                                <span><PurpleQuotation /></span>
                                <p className="sm:max-w-[298px] text-text-secondary italic text-[18px] text-center leading-relaxed">
                                    {review.quote}
                                </p>
                                <div className="">
                                    {Svg && <Svg />}
                                </div>
                            </div>

                        </SwiperSlide>
                    )
                })}
            </Swiper>
            <div className="testimonial-swiper custom-pagination flex justify-center gap-2 mt-8" />
            {/* Navigation Buttons */}
            <div className="flex gap-4 mt-10">
                <PrevNavigation onClick={() => swiperRef.current?.slidePrev()} varient='text-arrow' />
                <NextNavigation onClick={() => swiperRef.current?.slideNext()} varient='text-arrow' />
            </div>
        </div>
    );
};