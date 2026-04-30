import { PricingPlanData } from "@/types/pricing-plan";

interface AddToCartButtonProps {
    plans: PricingPlanData[];
    selectedId: number | null;
}

export default function AddToCartButton({ plans, selectedId }: AddToCartButtonProps) {
    const selected = plans.find(p => p.id === selectedId);

    return (
        <button className="cursor-pointer mt-4 w-full h-[70px] bg-purple-700 hover:bg-purple-800 text-white font-bold py-4 rounded-lg transition-colors shadow-lg">
            Add To Cart - ${selected?.priceUsd.toFixed(2) ?? '—'}
        </button>
    );
}