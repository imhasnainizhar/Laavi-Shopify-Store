import { FAQItemProps } from "@/types/faq";

export default function FAQItem({ faq, isOpen, className, onToggle }: FAQItemProps) {
  return (
    <div
      className={`${className} px-[22px] mb-[14px]`}
    >
      <button
        className={`w-full bg-transparent border-none 
          cursor-pointer flex items-center justify-between py-[22px] 
          gap-4 text-left transition-colors duration-200`}
      >
        <span
          className="font-bold text-text-base text-text-primary font-satoshi"
        >
          {faq.question}
        </span>
        <span
          className={`font-bold text-fluid-lg transition-transform duration-300 ease-in-out ${isOpen ? "rotate-45 scale-110" : "rotate-0 scale-100"
            }`}
          style={{
            color: isOpen ? "#7c5cbf" : "#000",
          }}        >
          +
        </span>
      </button>

      <div
        style={{
          maxHeight: isOpen ? "400px" : "0",
          overflow: "hidden",
          transition: "max-height 0.4s cubic-bezier(0.4,0,0.2,1)",
        }}
      >
        <p
          className="text-fluid-base font-medium font-satoshi text-text-secondary  py-[6px]"
        >
          {faq.answer}
        </p>
      </div>
    </div>
  );
}
