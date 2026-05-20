"use client"

import Image from "next/image";
import { useState } from "react";
import FAQItem from "./faq-item";
import { faqs } from "@/db/faq";

export default function GrowthFaqSection() {
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    const handleToggle = (index: number) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <div className={
            `w-full bg-ghost-white overflow-hidden`
        }>
            <div className={
                `w-full`
            }>
                <div className={
                    `h-auto w-full grid grid-cols-[79px_1fr_79px] grid-rows-[auto_auto]
                     md:grid-cols-[130px_1fr_130px] md:grid-rows-[130px_auto]
                     lg:grid-cols-[179px_1fr_179px] lg:grid-rows-[179px_auto]
                     xl:grid-cols-[210px_1fr_210px] xl:grid-rows-[90px_auto]
                     2xl:grid-cols-[279px_1fr_279px] 2xl:grid-rows-[90px_auto]`
                }
                >
                    {/* Title area */}
                    <div className={
                        `flex flex-col items-center justify-between col-start-2 col-span-1
                         row-start-1 lg:col-start-1 lg:col-span-3 lg:row-start-1 md:py-[40px]`
                    }
                    >
                        <span className="text-center font-700 text-fluid-base font-extrabold text-vibrant-lavender 
                        uppercase">The Answers you&apos;re looking for</span>
                        <span className={
                            `text-center text-fluid-2xl font-extrabold text-rich-purple`
                        }>
                            Let&apos;s Talk Hair Growth
                        </span>
                    </div>
                    {/* Flower Picture left*/}
                    <div className="flex items-center justify-center relative mt-0 
                    xl:mt-[160px] col-start-1 col-span-1 row-start-1 xl:row-start-2 
                    w-full aspect-square min-w-0"
                    >
                        {/* side design pic */}
                        <Image src={"/decor/lavender-flower-1.png"} alt="" width={270} height={270} 
                        className={
                            `max-lg:rotate-15 max-lg:-translate-x-2`
                        }
                        />
                    </div>
                    <div className={
                        `w-full h-auto mt-[75px] col-start-1 col-span-3 row-start-2
                         lg:col-start-2 lg:col-span-1 flex justify-center items-center px-4
                         lg:px-0`
                    }
                    >
                        {/* FAQ section */}
                        <div className={
                            `w-full h-auto`
                        }
                        >
                            {faqs.map((faq, index) => (
                                <FAQItem
                                    key={index}
                                    faq={faq}
                                    isOpen={openIndex === index}
                                    onToggle={() => handleToggle(index)}
                                    className={
                                        `w-full h-auto bg-white rounded-xl`
                                    }
                                />
                            ))}
                        </div>
                    </div>
                    {/* Flower pic right */}
                    <div className="flex items-center justify-end mt-0 
                    xl:mt-[160px] col-start-3 col-span-1 row-start-1 xl:row-start-2  
                    w-full aspect-square min-w-0 relative"
                    >
                        {/* side flower pic */}
                        <Image src={"/decor/lavender-bouqutte.png"} 
                        className={
                            `max-lg:-rotate-15 max-lg:translate-x-7`
                        } 
                        alt="" 
                        width={270} 
                        height={270} />
                    </div>
                </div>
            </div>
        </div>
    )
}