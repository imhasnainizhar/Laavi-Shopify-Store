"use client"

import Image from "next/image"
import { Swiper as SwiperType } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { useRef } from "react";
import { NextNavigation, PrevNavigation } from "../ui/buttons/paginations/arrow-paginations";

export interface TrustPilotReviews {
    id: string;
    rating: number;
    headline: string;
    text: string;
    reviewer: string;
    timeAgoInDays: number;
}

export const trustPilotReviews: TrustPilotReviews[] = [
    {
        id: "rev-001",
        rating: 5,
        headline: "Visibly clearer skin",
        text: "I was skeptical at first, but after just two weeks, my skin feels noticeably better.",
        reviewer: "Daniel Stein",
        timeAgoInDays: 2
    },
    {
        id: "rev-002",
        rating: 5,
        headline: "Absolute game changer",
        text: "This product completely transformed my morning routine. Highly recommend to everyone.",
        reviewer: "Sarah Jenkins",
        timeAgoInDays: 3
    },
    {
        id: "rev-003",
        rating: 4,
        headline: "Great for sensitive skin",
        text: "I usually break out from new serums, but this one is incredibly gentle.",
        reviewer: "Michael Chang",
        timeAgoInDays: 7
    },
    {
        id: "rev-004",
        rating: 5,
        headline: "Worth every penny!",
        text: "The hydration lasts all day long. My face has never looked this glowing.",
        reviewer: "Elena Rostova",
        timeAgoInDays: 8
    },
    {
        id: "rev-005",
        rating: 5,
        headline: "Exceeded my expectations",
        text: "The texture is lightweight and absorbs quickly without leaving any greasy residue.",
        reviewer: "Marcus Vance",
        timeAgoInDays: 14
    },
    {
        id: "rev-006",
        rating: 4,
        headline: "Noticeable improvement",
        text: "My dark spots are starting to fade after a month of consistent nightly use.",
        reviewer: "Aisha Patel",
        timeAgoInDays: 15
    },
    {
        id: "rev-007",
        rating: 5,
        headline: "My new holy grail",
        text: "I cannot live without this now. It keeps my skin perfectly balanced and smooth.",
        reviewer: "Chloe Bennett",
        timeAgoInDays: 21
    },
    {
        id: "rev-008",
        rating: 5,
        headline: "Incredible results",
        text: "Family and friends keep complimenting my complexion. The results speak for themselves.",
        reviewer: "David Kim",
        timeAgoInDays: 30
    },
    {
        id: "rev-009",
        rating: 4,
        headline: "Solid product",
        text: "Very moisturizing and has a pleasant, subtle scent that isn't overpowering.",
        reviewer: "Emma Watson",
        timeAgoInDays: 32
    },
    {
        id: "rev-010",
        rating: 5,
        headline: "Perfect for daily use",
        text: "A little goes a long way. The bottle lasts a while, making it a great value.",
        reviewer: "Liam O'Connor",
        timeAgoInDays: 60
    }
];

export default function TrustPilotReviews() {
    const swiperRef = useRef<SwiperType | null>(null);

    return (
        <div className={
            `w-full bg-white text-text-primary`
        }>
            <div className={
                `w-full flex flex-col items-center px-6 lg:px-12.5`
            }>
                <div className={
                    `w-full flex items-center justify-center my-12.5 gap-3`
                }>
                    <span className={
                        `text-fluid-xl font-semibold font-poppins leading-tight flex gap-3`
                    }>
                        Excellent
                        <span className={
                            `w-[clamp(140px,9.3vw,180px)] h-[clamp(25px,1.8vh,35px)]`
                        }><Image src={"/icons/4.5-rating-green-stars.png"} alt="" width={180} height={34} /></span>
                        4.5/5
                    </span>
                    <span className={
                        `w-[clamp(140px,9.3vw,180px)] h-[clamp(25px,1.8vh,35px)]`
                    }>
                        <Image src={"/logos/trust-pilot.png"} alt="" width={158} height={33} />
                    </span>
                </div>
                <div className={
                    `w-full max-w-[1612px]`
                }>
                    <Swiper
                        grabCursor={true}
                        cssMode={false}
                        centeredSlides={false}
                        loop={false}
                        spaceBetween={30}
                        breakpoints={{
                            0: { slidesPerView: 1 },
                            560: { slidesPerView: 2 },
                            768: { slidesPerView: 3 },
                            1280: { slidesPerView: 4 },
                            1612: { slidesPerView: 5 }
                        }}
                        watchOverflow={true}
                        onBeforeInit={(swiper) => { swiperRef.current = swiper; }}
                        className={
                            `w-full h-auto align-stretched_swiper`
                        }
                    >
                        {trustPilotReviews.map((review, i) => {

                            const weeks = Math.floor(review.timeAgoInDays / 7)

                            const timeAgo = weeks > 1 ? `${weeks} weeks ago` : weeks === 1 ? `1 week ago` : `${review.timeAgoInDays} days ago`


                            return (
                                <SwiperSlide key={i} className={
                                    `h-auto! bg-[#F7F7F7] rounded-[10px] py-4 px-4.5`
                                }>
                                    <div className={
                                        `h-full w-full flex flex-col gap-3.5`
                                    }>
                                        <div>
                                            <Image src={"/icons/5-rating-green-stars.png"} alt="" width={100} height={20} />
                                        </div>
                                        <div className={
                                            `flex flex-col gap-3.5 items-start w-full flex-1`
                                        }>
                                            <div className={
                                                `font-outfit font-bold text-fluid-lg`
                                            }>{review.headline}</div>
                                            <div className={
                                                `font-outfit text-fluid-base`
                                            }>{review.text}</div>
                                            <div className={
                                                `w-full flex justify-between font-nunito-sans text-fluid-sm
                                                 text-text-secondary`
                                            }>
                                                <span className={
                                                    `font-bold`
                                                }>{review.reviewer}</span>
                                                <span className={
                                                    `font-light`
                                                }>{timeAgo}</span>
                                            </div>
                                        </div>
                                    </div>
                                </SwiperSlide>
                            );
                        })}
                    </Swiper>
                </div>
                <div className={
                    `my-12.5 w-full flex justify-center items-center gap-10`
                }>
                    <div className={
                        `flex flex-col items-center gap-3`
                    }>
                        <div className={
                            `text-fluid-base font-semibold flex gap-3`
                        }>
                            <span>Rated <b>4.5</b>/5 . <b>250+ Reviews</b>.</span>
                            <span>Showing our 5 star reviews.</span>
                        </div>
                        <div>
                            <Image src={"/logos/trust-pilot.png"} alt="" width={94} height={22} />
                        </div>
                    </div>
                    <div className={
                        `flex gap-4`
                    }>
                        <PrevNavigation onClick={() => swiperRef.current?.slidePrev()} variant="circle-arrow" />
                        <NextNavigation onClick={() => swiperRef.current?.slideNext()} variant="circle-arrow" />
                    </div>
                </div>
            </div>
        </div>
    )
}