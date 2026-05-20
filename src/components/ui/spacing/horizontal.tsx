"use client";

export default function HorizontalSpacing({ text }: { text?: string }) {
  if (!text) {
    return (
      <div className="w-full max-w-[510px] h-px bg-ghost-white" />
    );
  }

  return (
    <div className="flex items-center gap-2 w-full">
      <div className="flex-1 h-[2px] bg-black" />
      <span className="whitespace-nowrap px-2 text-black font-bold text-[18px]">{text}</span>
      <div className="flex-1 h-[2px] bg-black" />
    </div>
  );
}