"use client"

import { useRef } from "react";
import { Swiper as SwiperType } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import YellowStarIcon from "../ui/icons/yellow-star";

interface BestSellingProducts {
    rating: number;
    maxRating: number;
    title: string;
    description: string;
    salePrice: number;
    originalPrice: number;
    currency: string;
}

const bestSellingProducts: BestSellingProducts[] = [
    {
        rating: 4.9,
        maxRating: 5.0,
        title: "Lorem ipsum",
        description: "Lorem ipsum dolor sit amet",
        salePrice: 149.00,
        originalPrice: 180.00,
        currency: "$"
    },
    {
        rating: 4.9,
        maxRating: 5.0,
        title: "Lorem ipsum",
        description: "Lorem ipsum dolor sit amet",
        salePrice: 149.00,
        originalPrice: 180.00,
        currency: "$"
    },
    {
        rating: 4.9,
        maxRating: 5.0,
        title: "Lorem ipsum",
        description: "Lorem ipsum dolor sit amet",
        salePrice: 149.00,
        originalPrice: 180.00,
        currency: "$"
    }
];


export default function BestSellingProductsCarousel() {
    const swiperRef = useRef<SwiperType | null>(null);

    return (
        <div className={
            `bg-ghost-white text-text-primary font-sfpro`
        }>
            <div className={
                `px-6 md:px-12.5 flex flex-col items-center`
            }>
                <div className={
                    `font-extrabold text-rich-purple text-fluid-2xl my-12.5`
                }>Best Sellers</div>
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
                            0: { slidesPerView: 1 },
                            786: { slidesPerView: 2 },
                            1280: { slidesPerView: 3 },
                        }}
                        watchOverflow={true}
                        onBeforeInit={(swiper) => { swiperRef.current = swiper; }}
                        className={
                            `w-full h-auto align-stretched_swiper`
                        }
                    >
                        {bestSellingProducts.map((product, i) => {
                            return (
                                <SwiperSlide key={i} className={
                                    `h-auto! bg-white rounded-[10px]`
                                }>
                                    <div className={
                                        `w-full h-full flex flex-col items-center`
                                    }>
                                        <div className={
                                            `w-full aspect-square bg-black rounded-t-[10px]`
                                        } />
                                        <div className={
                                            `w-full flex flex-col gap-3.5 items-start flex-1 p-4`
                                        }>
                                            <div className={
                                                `flex justify-start`
                                            }>
                                                <YellowStarIcon />
                                                <YellowStarIcon />
                                                <YellowStarIcon />
                                                <YellowStarIcon />
                                                <YellowStarIcon />
                                            </div>
                                            <div className={
                                                `font-bold text-fluid-xl`
                                            }>
                                                {product.title}
                                            </div>
                                            <div className={
                                                `font-medium text-fluid-base`
                                            }>
                                                {product.description}
                                            </div>
                                            <div className={
                                                `font-bold`
                                            }>
                                                {product.salePrice ? (
                                                    <div className={
                                                        `flex gap-3`
                                                    }>
                                                        <span className={
                                                            `text-rich-purple text-fluid-lg`
                                                        }>
                                                            {product.currency}{product.salePrice}
                                                        </span>
                                                        <span className={
                                                            `font-medium line-through`
                                                        }>
                                                            {product.currency}{product.originalPrice}
                                                        </span>
                                                    </div>
                                                ) : (
                                                    <span className={
                                                        `font-bold`
                                                    }>
                                                        {product.currency}{product.originalPrice}
                                                    </span>
                                                )}
                                            </div>

                                        </div>
                                        <div className={
                                            `w-full flex justify-center col-start-1 col-span-1 row-start-1 row-span-1
                                             lg:col-start-2 lg:col-span-3 lg:row-start-2 px-4 pb-4`
                                        }>
                                            <div className={
                                                `w-full h-[clamp(50px,5vh,70px)] bg-rich-purple
                                                 hover:bg-[#6b21a8] text-white font-bold py-4 px-12 rounded-[10px]
                                                 border border-white/20 shadow-xl transition-all transform
                                                 hover:scale-105 cursor-pointer text-center`
                                            }>
                                                Add To Cart
                                            </div>
                                        </div>
                                    </div>
                                </SwiperSlide>
                            );
                        })}
                    </Swiper>
                </div>
            </div>
        </div>
    )
}