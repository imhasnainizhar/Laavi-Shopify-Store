"use client"

import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import type { Swiper as SwiperType } from "swiper";
import { Pagination } from "swiper/modules";
import { resultInNinetyDays } from "@/db/results-90-days";
import StarIcon from "@/components/ui/icons/yellow-star";
import ImageIconSvg from "@/components/ui/icons/img-icon";
import { PrevNavigation, NextNavigation } from '@/components/ui/buttons/paginations/arrow-paginations';

export default function ResultsCarousel() {
    const swiperRef = useRef<SwiperType | null>(null);

    return (
        <div className={
            `w-full my-25`
        }>
            <div className={
                `py-7.5 px-6 lg:px-12.5 flex flex-col items-center justify-center
                 gap-20 lg:gap-25`
            }>
                <div className="text-fluid-2xl font-extrabold text-center
                text-rich-purple">
                    Results in 90 Days
                </div>
                <div className={
                    `w-full flex flex-col justify-center items-center gap-8 lg:gap-13`
                }>
                    <div className={
                        `w-full max-w-7xl`
                    }>
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
                                0: { slidesPerView: 1 },
                                768: { slidesPerView: 2 },
                                1280: { slidesPerView: 3 },
                                1690: { slidesPerView: 5 },
                            }}
                            watchOverflow={true}
                            onBeforeInit={(swiper) => { swiperRef.current = swiper; }}
                            className={
                                `align-stretched_swiper w-full h-auto max-w-95 lg:max-w-7xl`
                            }
                        >
                            {resultInNinetyDays.map((review, i) => {
                                const timeAgoInDays = review.timeAgoInDays;

                                const weeks = Math.floor(timeAgoInDays / 7)

                                const timeAgo = weeks > 1 ? `${weeks} weeks ago` : weeks === 1 ? `1 week ago` : `${timeAgoInDays} days ago`

                                return (
                                    <SwiperSlide key={i} className={
                                        `h-auto bg-white rounded-xl`
                                    }>
                                        <div className={
                                            `flex flex-col h-full`
                                        }>
                                            <div className={
                                                ``
                                            }>
                                                {/* Here before and after image will not be used */}
                                                <div className={
                                                    `w-full h-45.5 lg:h-63 bg-black rounded-t-xl flex justify-center
                                                     items-center`
                                                }>
                                                    <ImageIconSvg />
                                                </div>
                                            </div>
                                            <div className={
                                                `px-5.5 pb-4 pt-6 flex-1`
                                            }>
                                                <div className={
                                                    `flex justify-between`
                                                }>
                                                    <div className={
                                                        `flex gap-2 p-1 justify-center items-center`
                                                    }>
                                                        <StarIcon />
                                                        <StarIcon />
                                                        <StarIcon />
                                                        <StarIcon />
                                                        <StarIcon />
                                                    </div>
                                                    <div>{timeAgo}</div>
                                                </div>
                                                <div className={
                                                    `flex flex-col gap-2 justify-start items-start`
                                                }>
                                                    <div className={
                                                        `font-sfpro font-bold text-[19px] pt-2 pb-1 text-left`
                                                    }>
                                                        {review.heading}
                                                    </div>
                                                    <div className={
                                                        `font-sfpro font-bold text-[15px] pt-2 mb-6`
                                                    }>
                                                        &quot;{review.reviewText}&quot;
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                );
                            })}
                        </Swiper>
                    </div>
                    <div className={
                        `w-full flex justify-center items-center gap-8`
                    }>
                        <PrevNavigation onClick={() => swiperRef.current?.slidePrev()} variant="text-arrow"/>
                        <NextNavigation onClick={() => swiperRef.current?.slideNext()} variant="text-arrow"/>
                    </div>
                </div>
                <div className={
                    `font-bold font-sfpro text-fluid-base text-center mx-4.5`
                }>
                    Individual results may vary, but if you&apos;re unsatisfied with your results within 90 days we offer a money back guarantee.
                </div>
            </div>
        </div>
    )
}