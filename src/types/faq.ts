export type FaqType = {
    question: string;
    answer: string;
}

export type FAQItemProps = {
    faq: FaqType;
    isOpen: boolean;
    className?: string;
    onToggle: () => void;
};