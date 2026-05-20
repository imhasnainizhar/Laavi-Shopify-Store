"use client"

import type { Swiper as SwiperType } from "swiper";
import { Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { PrevNavigation, NextNavigation } from "@/components/ui/buttons/paginations/arrow-paginations";
import ImageIconSvg from "@/components/ui/icons/img-icon";
import YellowStarIcon from "@/components/ui/icons/yellow-star";
import { useRef } from "react";
import { realResults } from "@/db/real-results";


export default function RealResultsCarousel() {
    const swiperRef = useRef<SwiperType | null>(null);

    return (
        <div className={
            `w-full h-auto mt-15 mb-5`
        }> 
            <div className={
                `py-7.5 px-6 lg:px-12.5 flex flex-col items-center justify-center
                 gap-10 lg:gap-15`
            }>
                <div className="font-extrabold text-center text-fluid-2xl
                text-rich-purple">Real Results</div>
                <div className={
                    `w-full flex flex-col justify-start items-center gap-14`
                }>
                    <div className={
                        `w-full md:max-w-[400px] lg:max-w-[800px] 2xl:max-w-[1280px]`
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
                            }}
                            watchOverflow={true}
                            onBeforeInit={(swiper) => { swiperRef.current = swiper; }}
                            className="w-full h-auto align-stretched_swiper"
                        >
                            {realResults.map((review, i) => {
                                const timeAgoInDays = review.timeAgoInDays;

                                const weeks = Math.floor(timeAgoInDays / 7)

                                const timeAgo = weeks > 1 ? `${weeks} weeks ago` : weeks === 1 ? `1 week ago` : `${timeAgoInDays} days ago`

                                return (
                                    <SwiperSlide key={i} className={
                                        `h-auto! bg-white rounded-xl`
                                    }>
                                        <div className={
                                            `flex flex-col h-full`
                                        }>
                                            <div className={
                                                ``
                                            }>
                                                {/* Here before and after image will not be used */}
                                                <div className={
                                                    `h-45.5 lg:h-63 bg-black rounded-t-xl flex justify-center items-center`
                                                }>
                                                    <ImageIconSvg />
                                                </div>
                                            </div>
                                            <div className={
                                                `px-5.5 py-4 flex-1`
                                            }>
                                                <div className={
                                                    `flex justify-between`
                                                }>
                                                    <div className={
                                                        `flex gap-2 p-1 justify-center items-center`
                                                    }>
                                                        <YellowStarIcon />
                                                        <YellowStarIcon />
                                                        <YellowStarIcon />
                                                        <YellowStarIcon />
                                                        <YellowStarIcon />
                                                    </div>
                                                    <div>{timeAgo}</div>
                                                </div>
                                                <div className={
                                                    `flex flex-col gap-2 justify-start items-start`
                                                }>
                                                    <div className={
                                                        `font-sfpro font-bold text-fluid-base pt-2 pb-1 text-left`
                                                    }>
                                                        {review.heading}
                                                    </div>
                                                    <div className={
                                                        `font-sfpro font-bold text-fluid-sm pt-2 pb-6`
                                                    }>
                                                        &quot;{review.reviewText}&quot;
                                                    </div>
                                                </div>
                                                <div className={
                                                    `flex flex-col items-start justify-start gap-3.5`
                                                }>
                                                    <div className={
                                                        `text-[15px] text-text-secondary font-normal font-sfpro`
                                                    }>
                                                        Previous Challenges:
                                                    </div>
                                                    <div className={
                                                        `text-[15px] text-text-secondary font-normal font-sfpro flex flex-wrap
                                                         gap-2.5 mb-5`
                                                    }>
                                                        {review.previousChallenges.map((challenge, idx) => (
                                                            <span key={idx} className="w-[clamp(102px,6.5vw,128px)]
                                                            h-[clamp(25px,1.6vh,32px)] rounded-[11px] text-[14px]
                                                            bg-vibrant-lavender text-white flex items-center justify-center leading-none text-center">
                                                                {challenge}
                                                            </span>
                                                        ))}
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
                        <PrevNavigation onClick={() => swiperRef.current?.slidePrev()} variant="text-arrow" />
                        <NextNavigation onClick={() => swiperRef.current?.slideNext()} variant="text-arrow" />
                    </div>
                </div>
            </div>
        </div>
    )
}