"use client"

import React from 'react';
import { Plus, X } from 'lucide-react';
import Image from 'next/image';

const LavviGrowthProtocol = () => {
    const [openSection, setOpenSection] = React.useState(0);

    const steps = [
        {
            week: '1 Week',
            title: 'Scalp Reset Begins',
            content: 'Micro-infusion supports natural scalp renewal. Actives begin working at the follicle level. Scalp feels cleaner, refreshed, and balanced.'
        },
        {
            week: '4 Weeks',
            title: 'Reduced Shedding & Stronger Roots',
            content: 'Formula strengthens the hair anchor and significantly reduces daily hair fall.'
        },
        {
            week: '8 Weeks',
            title: 'Early Visible ReGRWth',
            content: 'New baby hairs begin to emerge and existing strands appear thicker.'
        },
        {
            week: '12 Weeks',
            title: 'Density & Long-Term Scalp Health',
            content: 'Maximum visible density achieved with a optimized scalp environment.'
        }
    ];

    return (
        <section className={
            `relative w-full min-h-[500px] bg-gradient-to-r from-[#9333ea]
             to-[#a855f7] overflow-hidden font-sfpro`
        }>
            <div className="grid grid-cols-[1fr] grid-rows-[140px_1fr_1fr_50px_140px]
                     lg:grid-cols-[140px_1fr_1fr_140px] lg:grid-rows-[1fr_100px]
                     xl:grid-cols-[140px_1fr_1fr_140px] xl:grid-rows-[1fr_100px]
                        2xl:grid-cols-[140px_1fr_1fr_140px] 2xl:grid-rows-[1fr_100px]">
                {/* Small Caps */}
                <div className={
                    `flex col-start-1 col-span-1 row-start-1 row-span-1
                     lg:row-span-2`
                }>
                    <Image src={"/images/left-white-bush.png"} alt='' width={140} height={671} />
                </div>

                {/* Left Side: Accordion */}
                <div className={
                    `flex justify-center flex-col space-y-3 z-10 col-start-1 col-span-1 row-start-1 row-span-1
                     lg:col-start-2`
                }>
                    {steps.map((step, index) => (
                        <div
                            key={index}
                            className={`rounded-2xl transition-all ${openSection === index ? 'bg-white/95 shadow-lg rounded-2xl' : 'bg-white/90 rounded-full'
                                }`}
                        >
                            <button
                                onClick={() => setOpenSection(openSection === index ? -1 : index)}
                                className={
                                    `w-full flex items-center justify-between p-4 text-left`
                                }
                            >
                                <span className={
                                    `font-semibold text-black tracking-tight text-fluid-sm`
                                }>
                                    {step.week} — {step.title}
                                </span>
                                {openSection === index ? (
                                    <X className={
                                        `w-5 h-5 text-gray-400`
                                    } />
                                ) : (
                                    <Plus className={
                                        `w-5 h-5 text-gray-400`
                                    } />
                                )}
                            </button>

                            {openSection === index && (
                                <div className={
                                    `px-4 pb-6 animate-in fade-in slide-in-from-top-2`
                                }>
                                    <p className={
                                        `text-gray-600 text-sm leading-relaxed max-w-md`
                                    }>
                                        {step.content}
                                    </p>
                                </div>
                            )}
                        </div>
                    ))}
                </div>

                {/* Right Side: Product & Heading */}
                <div className={
                    `flex justify-center items-end flex-col text-center lg:text-left z-10 col-start-1 col-span-1 
                    row-start-1 row-span-1 lg:col-start-3 lg:col-span-2 lg:mt-25`
                }>
                    <h2 className={
                        `text-fluid-2xl font-bold text-white capitalize leading-tight text-center`
                    }>
                        Designed To Support Visible <br />
                        Growth Across A 12-Week Protocol
                    </h2>

                    <div className={
                        `relative flex justify-center lg:justify-start items-end`
                         
                    }>
                        <Image src={"/images/product-image2.png"} alt='' width={630} height={420} />
                    </div>
                </div>

                {/* CTA Button */}
                <div className={
                    `flex justify-center col-start-1 col-span-1 row-start-1 row-span-1
                     lg:col-start-2 lg:col-span-3 lg:row-start-2`
                }>
                    <div className={
                        `w-[clamp(320px,5vw,510px)] h-[clamp(50px,5vh,70px)] bg-rich-purple hover:bg-[#6b21a8] text-white font-bold py-4 px-12
                         rounded-[10px] border border-white/20 shadow-xl transition-all transform
                         hover:scale-105 cursor-pointer text-center`
                    }>
                        Add To Cart — $178.95
                    </div>
                </div>
                {/* Main Infuser Placeholder */}
                <div className={
                    `flex col-start-1 col-span-1 row-start-5
                     row-span-1 lg:row-span-2 lg:col-start-5`
                }>
                    <Image src={"/images/right-white-bush.png"} alt='' width={140} height={671} />
                </div>
            </div>
        </section>
    );
};

export default LavviGrowthProtocol;
