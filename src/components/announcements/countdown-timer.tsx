"use client";
import React, { useEffect, useState, useRef } from "react";

const TimeUnit = ({ label, value }: { label: string; value: string }) => (
  <div className="flex flex-col items-center gap-1 bg-white w-[35px] h-[45px] max-sm:w-[24px] max-sm:h-[30px] max-md:w-[28px] max-md:h-[36px] rounded-[6px]">
    <div className="text-text-primary text-[15px] max-md:text-[clamp(11px,2vw,15px)] font-bold pt-0.5 px-3 rounded min-w-10 text-center">
      {value}
    </div>
    <div className="text-[11px] max-md:text-[clamp(8px,1.7vw,11px)] font-bold text-text-primary tracking-widest">{label}</div>
  </div>
);

function getTimeLeft(endTimestamp: number) {
  const diff = Math.max(0, endTimestamp - Date.now());
  const totalSeconds = Math.floor(diff / 1000);
  const hours = Math.floor(totalSeconds / 3600);
  const minutes = Math.floor((totalSeconds % 3600) / 60);
  const seconds = totalSeconds % 60;
  return { hours, minutes, seconds, completed: diff <= 0 };
}

export default function SaleTimer() {
  const [saleEndsAt, setSaleEndsAt] = useState<number | null>(null);
  const [isActive, setIsActive] = useState(true);
  const [timeLeft, setTimeLeft] = useState({ hours: 0, minutes: 0, seconds: 0, completed: false });
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  useEffect(() => {
    fetch("/api/sale-timer")
      .then((r) => r.json())
      .then(({ saleEndsAt, isActive }: { saleEndsAt: number; isActive: boolean }) => {
        setSaleEndsAt(saleEndsAt);
        setIsActive(isActive);
        // Compute immediately so there's no flicker on first render
        setTimeLeft(getTimeLeft(saleEndsAt));
      });
  }, []);

  useEffect(() => {
    if (!saleEndsAt || !isActive) return;

    intervalRef.current = setInterval(() => {
      const next = getTimeLeft(saleEndsAt);
      setTimeLeft(next);
      if (next.completed && intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    }, 1000);

    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [saleEndsAt, isActive]);

  if (!saleEndsAt) return null;

  return (
    <div className="md:p-4 max-md:pl-[6px] flex justify-center items-center gap-4 text-[clamp(14px,2.7vw,18px)]">
      <div className="flex items-end gap-2">
        <TimeUnit label="HRS" value={String(timeLeft.hours).padStart(2, "0")} />
        <span className="mb-2 font-bold">:</span>
        <TimeUnit label="MIN" value={String(timeLeft.minutes).padStart(2, "0")} />
        <span className="mb-2 font-bold">:</span>
        <TimeUnit label="SEC" value={String(timeLeft.seconds).padStart(2, "0")} />
      </div>
    </div>
  );
}