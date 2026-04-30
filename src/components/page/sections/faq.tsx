"use client"

import Image from "next/image";
import { useState } from "react";
import FAQItem from "./faq-item";
import { faqs } from "@/db/faq";

export default function FaqSection() {
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    const handleToggle = (index: number) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <div className="w-full bg-ghost-white">
            <div className="w-full">
                <div className={`h-auto w-full grid grid-cols-[279px_1fr_279px] grid-rows-[90px_auto] 
                max-md:grid-cols-[179px_1fr_179px] max-md:grid-rows-[179px_auto] max-sd:grid-cols-[79px_1fr_79px] 
                max-sd:grid-rows-[130px_auto]`}
                >
                    {/* Title area */}
                    <div className={`flex flex-col items-center justify-between col-start-1 col-span-3 
                        row-start-1 max-md:col-start-2 max-md:col-span-1 max-md:row-start-1 
                        max-md:py-[40px]`}
                    >
                        <span className="text-center font-700 text-[16px] text-vibrant-lavender 
                        uppercase">The Answers you&apos;re looking for</span>
                        <span className="text-center text-[37px] font-bold text-vibrant-lavender">
                            Let&apos;s Talk Hair Growth
                        </span>
                    </div>
                    <div className="mt-[160px] max-md:mt-0 col-start-1 col-span-1 row-start-2 max-md:col-start-1
                    max-md:col-span-1 max-md:row-start-1 flex items-center justify-end
                    relative w-[279px] h-[279px] max-md:w-[179px] max-md:h-[179px] max-semi-md:w-[140px]
                    max-semi-md:h-[140px] max-sd:w-[79px] max-sd:h-[79px] "
                    >
                        {/* side design pic */}
                        <Image src={"/decor/lavender-flower-1.png"} alt="" fill />
                    </div>
                    <div className={`h-auto w-full mt-[75px] col-start-2 col-span-1 row-start-2 
                        max-md:col-start-1 max-md:col-span-3 max-md:row-start-2
                        flex justify-center items-center `}
                    >
                        {/* FAQ section */}
                        <div className="max-w-[800px] max-md:max-w-[650px] max-sd:max-w-[320px]
                        max-semi-md:max-w-[475px]"
                        >
                            {faqs.map((faq, index) => (
                                <FAQItem
                                    key={index}
                                    faq={faq}
                                    isOpen={openIndex === index}
                                    onToggle={() => handleToggle(index)}
                                    className="w-full min-h-[70px] max-md:min-h-[32px] bg-white"
                                />
                            ))}
                        </div>
                    </div>
                    <div className="mt-[160px] max-md:mt-0 col-start-3 col-span-1 row-start-2 max-md:col-start-3
                    max-md:col-span-1 max-md:row-start-1 flex items-center justify-end
                    relative w-[279px] h-[279px] max-md:w-[179px] max-md:h-[179px] max-semi-md:w-[140px]
                    max-semi-md:h-[140px] max-sd:w-[79px] max-sd:h-[79px]"
                    >
                        {/* side flower pic */}
                        <Image src={"/decor/lavender-bouqutte.png"} alt="" fill />
                    </div>
                </div>
            </div>
        </div>
    )
}