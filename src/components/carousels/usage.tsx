"use client"

import { Swiper, SwiperSlide } from "swiper/react";

interface UsageText {
    count: string;
    text: string[];
}

const usageText: UsageText[] = [
    {
        count: "01",
        text: [
            "After a month of consistent use, you’ll likely notice less hair fall during brushing or showering.",
            "Your scalp may feel healthier—less itchy, less oily or dry—and you may begin to see early signs of baby hairs around your hairline or part.",
            "Your hair should start to feel stronger, shinier, and easier to manage."
        ]
    },
    {
        count: "02",
        text: [
            "After a month of consistent use, you’ll likely notice less hair fall during brushing or showering.",
            "Your scalp may feel healthier—less itchy, less oily or dry—and you may begin to see early signs of baby hairs around your hairline or part.",
            "Your hair should start to feel stronger, shinier, and easier to manage."
        ]
    },
    {
        count: "03",
        text: [
            "From your very first use, you'll feel an immediate sense of relaxation on your scalp.",
            "Your roots will feel invigorated, tension melts away, and your scalp may even feel noticeably cleaner and more refreshed.",
            "It’s like a mini spa treatment for your head."
        ]
    }
]


export default function UsageCarousel() {

    return (
        <div className={
            `w-full text-text-secondary mt-20 bg-ghost-white`
        }>
            <div className={
                `w-full flex flex-col`
            }>
                <div className={
                    `w-full flex-flex-col items-center`
                }>
                    <div className={
                        `text-fluid-2xl font-extrabold text-rich-purple text-center my-10`
                    }>
                        How to use it?
                    </div>
                    <div className={
                        `text-fluid-base text-text-primary text-center font-medium mt-10 mb-20 mx-10`
                    }>
                        Dermatologists recommend using once every two weeks for visible results
                    </div>
                </div>
                <div className={
                    `w-full flex justify-center md:max-w-[1280px] xl:max-w-7xl px-12.5 only-overflow-y-visible_swiper`
                }>
                    <Swiper
                        grabCursor={true}
                        cssMode={false}
                        centeredSlides={false}
                        loop={false}
                        spaceBetween={50}
                        breakpoints={{
                            0: { slidesPerView: 1 },
                            768: { slidesPerView: 2 },
                            1280: { slidesPerView: 3 },
                        }}
                        watchOverflow={true}
                        className={
                            `align-stretched_swiper w-full h-auto`
                        }
                    >
                        {usageText.map((usage, i) => {
                            return (
                                <SwiperSlide key={i} className="relative h-auto border-2 border-rich-purple 
                                rounded-[13px] z-10! overflow-visible">
                                    <div className={`absolute top-0 left-[50%] -translate-x-[50%] -translate-y-[50%] font-bold font-sfpro text-fluid-xl text-rich-purple border-2 border-rich-purple rounded-full p-3 z-100! bg-white`}>
                                        {usage.count}
                                    </div>
                                    <div className={
                                        `p-4 text-text-secondary text-shadow-text-primary text-fluid-lg flex
                                             flex-col justify-center items-center h-full`
                                    }>
                                        <div className={
                                            `w-full h-95 p-4 bg-black rounded-xl mb-10 mt-5`
                                        }></div>
                                        <div className={
                                            `mb-12 flex-1`
                                        }>
                                            <div className={
                                                `text-rich-purple font-sfpro font-extrabold text-fluid-xl text-center pb-2`
                                            }>Step</div>
                                            <div className={
                                                `flex flex-col items-center`
                                            }>
                                                {usage.text.map((text, i) => (
                                                    <div
                                                        key={i}
                                                        className={
                                                            `text-center pt-2.5 font-medium text-fluid-base text-black`
                                                        }
                                                    >
                                                        {text}
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                </SwiperSlide>
                            )
                        })}
                    </Swiper>
                </div>
            </div>
        </div>
    );
}