"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { ingredientsDescription } from "@/db/ingredients";
import Image from "next/image";
import "swiper/css";

export default function IngredientsCarousel() {
    return (
        <div className={
            `w-full h-auto bg-white text-text-primary pb-20`
        }>
            <div className={
                `py-7.5 px-6 lg:px-12.5 flex flex-col items-center justify-center
                 gap-20 lg:gap-25`
            }>
                <div className="font-extrabold text-center text-fluid-2xl
                text-rich-purple select-none">
                    Powerful Ingredients Inside
                </div>
                <div className={
                    `w-full md:max-w-[400px] lg:max-w-[800px] 2xl:max-w-[1280px]`
                }>
                    <Swiper
                        grabCursor={true}
                        cssMode={false}
                        centeredSlides={false}
                        loop={false}
                        spaceBetween={30}
                        breakpoints={{
                            0: { slidesPerView: 1.3 },
                            768: { slidesPerView: 2.3 },
                            1280: { slidesPerView: 3 },
                            1690: { slidesPerView: 4 },
                        }}
                        watchOverflow={true}
                        className={
                            `align-stretched_swiper w-full h-auto`
                        } 
                    >
                        {ingredientsDescription.map((ingredient, i) => {
                            return (
                                <SwiperSlide key={i} className="h-auto border border-[#774CF9] 
                                rounded-[13px]">
                                        <div className={
                                            `flex flex-col p-2 w-full flex-1`
                                        }>
                                            <div className={
                                                `w-full aspect-square relative`
                                            }>
                                                <Image src={ingredient.imageUri} alt="" fill className={
                                                    `object-cover rounded-xl`
                                                } />
                                            </div>
                                            <div className={
                                                `flex flex-col items-cemter p-3.5 flex-1`
                                            }>
                                                <div className={
                                                    `font-sfpro font-bold text-fluid-lg text-center`
                                                }>{ingredient.name}</div>
                                                <div className={
                                                    `font-sfpro font-light text-fluid-base text-center select-none`
                                                }>{ingredient.description}</div>
                                            </div>
                                        </div>
                                </SwiperSlide>
                            )
                        })}
                    </Swiper>
                </div>
            </div>
        </div>
    )
}