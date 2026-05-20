"use client"

import React, { useEffect, useState } from 'react';
import Image from 'next/image';

const TherapySection = () => {
    const [openIndex, setOpenIndex] = useState(0);
    const [width, setWidth] = useState(0);

    const steps = [
        {
            id: 1,
            title: "Lorem ipsum",
            content: "Boosts collagen and stimulates dormant follicles (650nm)"
        },
        { id: 2, title: "Lorem ipsum", content: "Additional treatment step details here." },
        { id: 3, title: "Lorem ipsum", content: "Details about the infusion process." },
        { id: 4, title: "Lorem ipsum", content: "Final steps for scalp health maintenance." }
    ];

    useEffect(() => {
        const handleResize = () => setWidth(window.innerWidth);

        handleResize();
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    return (
        <div className="relative bg-ghost-white rounded-lg flex flex-col gap-10 items-center xl:overflow-hidden w-full">
            <div
                className="absolute bottom-0 left-0 w-full h-[96%] bg-white lg:block z-1 overflow-hidden"
                style={{
                    clipPath: width > 1024 ? "ellipse(79% 83% at 69% 100%)" : "ellipse(150% 93% at 77% 100%)",
                }}
            />
            <div className='flex flex-col xl:gap-10 items-center justify-start z-10 w-full h-auto p-4 md:px-5 xl:py-12'>
                <h2 className="max-w-[268px] lg:max-w-none text-fluid-2xl font-extrabold text-rich-purple mb-6 text-center">
                    4 Science Backed Therapy Lorem
                </h2>

                <div className="flex flex-col xl:flex-row items-start md:items-center justify-start w-full max-w-5xl gap-10">

                    {/* Flower — absolute + small on < xl, inline on xl */}
                    <div className="
                absolute top-0 right-0 w-28 md:w-36
                translate-y-3/4
                xl:relative xl:flex xl:items-center xl:justify-end
                xl:w-40 2xl:w-50 3xl:w-69.5
                xl:translate-y-0
                xl:aspect-square xl:h-auto
            ">
                        <Image
                            src={ width >= 1024 ? "/decor/lavender-flower-1.png" : "/decor/lavender-flower-2.png"}
                            alt="Lavender"
                            className="opacity-80 -rotate-x-45 w-full h-auto"
                            width={279}
                            height={279}
                        />
                    </div>
                    <div className='flex flex-col-reverse xl:flex-row items-start md:items-center justify-start w-full max-w-5xl gap-5'>
                        {/* Accordion Side */}
                        <div className="flex-1 w-full min-w-0 xl:max-w-[550px] h-102.5 space-y-4">
                            {steps.map((step, index) => (
                                <div key={step.id} className="border border-slate-200 rounded-md bg-white overflow-hidden">
                                    <button
                                        onClick={() => setOpenIndex(openIndex === index ? -1 : index)}
                                        className="w-full flex items-center justify-between p-4 text-left hover:bg-slate-50 transition-colors"
                                    >
                                        <div className="flex items-center gap-3">
                                            <span className="bg-indigo-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold">
                                                {step.id}
                                            </span>
                                            <span className="text-text-primary font-medium">{step.title}</span>
                                        </div>
                                        <span className="text-slate-400 text-xl">
                                            {openIndex === index ? '-' : '+'}
                                        </span>
                                    </button>

                                    {openIndex === index && (
                                        <div className="px-12 pb-4 text-slate-500 text-sm leading-relaxed">
                                            {step.content}
                                        </div>
                                    )}
                                </div>
                            ))}
                        </div>

                        {/* Product Side */}
                        <div className="flex-1 w-full min-w-0 h-full flex justify-center items-center" >
                            <Image
                                src="/laavi-results-accordion.png"
                                alt="Lavvi Micro Infusion System"
                                width={790}
                                height={530}
                                className="max-w-md w-full h-auto"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TherapySection;
