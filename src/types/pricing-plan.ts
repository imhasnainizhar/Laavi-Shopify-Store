export interface PricingPlanData {
    id: number;
    label: string;
    priceUsd: number;
    priceEurPerTreatment: number;
    savingsEur?: number;
    isSelected: boolean;
}