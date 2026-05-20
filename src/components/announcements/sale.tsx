"use client";
import { useEffect, useState } from "react";
import SaleTimer from "./countdown-timer";

export default function SaleAnnouncement() {
    const [isActive, setIsActive] = useState<number | null>(null);

    useEffect(() => {
        fetch("/api/sale-timer")
            .then((r) => r.json())
            .then(({ isActive }) => setIsActive(isActive));
    }, []);

    return (
        <div className="w-full h-[60px] max-md:h-[48px] flex items-center justify-center bg-rich-purple text-white">
            <div className="flex items-center justify-center gap-2 var(--font-outfit)">

                {isActive ? (
                    <div className="h-full flex justify-center items-center">
                        <span className="font-bold font-700 text-fluid-base var(--font-outfit)">LIMITED TIME SALE ENDS IN: </span>
                        <span>
                            <SaleTimer />
                        </span>
                    </div>
                ) : (
                    <div className={`font-bold font-700 text-fluid-base var(--font-outfit)`}>Sale Ended!</div>
                )}
            </div>
        </div>
    );
}