"use client";

import React, { useRef } from 'react';
import type { Swiper as SwiperType } from "swiper"
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import { NextNavigation, PrevNavigation } from '@/components/ui/buttons/paginations/arrow-paginations';
import PurpleQuotation from '@/components/ui/marks/purple-quotation';
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
        <div className="bg-ghost-white w-full mt-[75px] py-10 flex justify-center">
            <div className='w-full max-w-[1280px] px-6 md:px-12.5 flex flex-col items-center'>
                <Swiper
                    grabCursor={true}
                    cssMode={false}
                    centeredSlides={false}
                    loop={false}
                    spaceBetween={30}
                    modules={[Pagination]}
                    pagination={{
                        clickable: true,
                        el: '.custom-pagination',
                        bulletClass: 'swiper-pagination-bullet',
                        bulletActiveClass: 'swiper-pagination-bullet-active',
                    }}
                    breakpoints={{
                        0:    { slidesPerView: 1 },
                        786: { slidesPerView: 2 },
                        1280: { slidesPerView: 3 },
                    }}
                    watchOverflow={true}
                    onBeforeInit={(swiper) => { swiperRef.current = swiper; }}
                    className="w-full h-auto md:max-w-[400px] lg:max-w-[800px] 2xl:max-w-[1280px] testimonial-swiper align-stretched_swiper"
                >
                    {testimonials.map((review, i) => {
                        const Svg = sourceMap[review.source];
                        return (
                            <SwiperSlide key={i} className="h-auto!">
                                <div className='rounded-xl flex flex-col justify-center
                                    w-full h-full items-center gap-4.5 py-5 lg:py-8.5 bg-white'
                                >
                                    <span><PurpleQuotation /></span>
                                    <p className="flex-1 max-w-[298px] text-text-secondary italic text-fluid-base text-center leading-relaxed">
                                        {review.quote}
                                    </p>
                                    <div>{Svg && <Svg />}</div>
                                </div>
                            </SwiperSlide>
                        );
                    })}
                </Swiper>

                <div className="custom-pagination flex justify-center gap-2 mt-8" />

                <div className="flex gap-4 mt-10">
                    <PrevNavigation onClick={() => swiperRef.current?.slidePrev()} variant='text-arrow' />
                    <NextNavigation onClick={() => swiperRef.current?.slideNext()} variant='text-arrow' />
                </div>
            </div>
        </div>
    );
}