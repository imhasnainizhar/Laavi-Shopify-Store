"use client"

import { faqs } from "@/db/faq"
import FAQItem from "./faq-item"
import { useState } from "react";

export default function FaqSection() {
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    const handleToggle = (index: number) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <div className={
            `w-full my-12.5 bg-ghost-white flex flex-col items-center`
        }>
            <div className={
                `font-extrabold text-rich-purple text-fluid-2xl mb-10.5`
            }>
                Frequently Asked Questions
            </div>
            {/* FAQ section */}
            <div className={
                `w-full md:max-w-[400px] lg:max-w-[800px] 2xl:max-w-[980px] h-auto`
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
    )
}