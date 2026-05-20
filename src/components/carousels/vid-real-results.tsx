"use client"

import type { Swiper as SwiperType } from "swiper";
import { Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { PrevNavigation, NextNavigation } from "@/components/ui/buttons/paginations/arrow-paginations";
import { useRef } from "react";
import Image from "next/image";


export default function RealResultsVidCarousel() {
    const swiperRef = useRef<SwiperType | null>(null);

    return (
        <div className={
            `w-full my-13`
        }>
            <div className={
                `py-7.5 px-6 lg:px-12.5 flex items-center justify-center gap-20
                 lg:gap-25`
            }>
                <div className={
                    `w-full flex flex-col justify-start items-center gap-14`
                }>
                    <div className={
                        `w-full max-w-[2080px] only-overflow-y-visible_swiper`
                    }>
                        <Swiper
                            grabCursor={true}
                            cssMode={false}
                            centeredSlides={true}
                            loop={false}
                            spaceBetween={30}
                            breakpoints={{
                                0:    { slidesPerView: 1.3 },
                                560: { slidesPerView: 2.3 },
                                768:  { slidesPerView: 3.3 },
                                1280: { slidesPerView: 5.3 },
                                1690: { slidesPerView: 7.3 },
                                2080: { slidesPerView: 9.3 },
                        }}
                            watchOverflow={true}
                            onBeforeInit={(swiper) => { swiperRef.current = swiper; }}
                            className={
                                `w-full h-140`
                            }
                        >
                            {Array.from([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 17]).map((i) => {
                                return (
                                    <SwiperSlide key={i}
                                        className={
                                            `h-auto rounded-[14px] transition-all duration-400 ease-in-out
                                             will-change-transform [&.swiper-slide-active]:scale-105
                                             [&:not(.swiper-slide-active)]:scale-95
                                             [&:not(.swiper-slide-active)]:opacity-60 opacity-100 border-3
                                             border-rich-purple`
                                        }>
                                        <div className={
                                            `h-full flex justify-center items-center w-full h-full`
                                        }>
                                            <Image src={"/icons/polygon-1.png"} alt="" width={46} height={36} />
                                        </div>
                                    </SwiperSlide>
                                );
                            })}
                        </Swiper>
                    </div>
                    <div className={
                        `w-full flex justify-center items-center gap-8`
                    }>
                        <PrevNavigation onClick={() => swiperRef.current?.slidePrev()} variant="text-arrow" />
                        <NextNavigation onClick={() => swiperRef.current?.slideNext()} variant="text-arrow" />
                    </div>
                </div>
            </div>
        </div>
    )
}