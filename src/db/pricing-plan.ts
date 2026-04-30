// We are using this file to store Pricing Plan type and data.
// This data will be fetched by our pricing plan comp to get checkout pricing plan 
// data by API but in future we can replace it with out real data source.
// Future API can be like this, /api/checkout/[productid]/pricingplan
// Or shopicy storefront api can be integrated as it is our plan.

import { PricingPlanData } from "@/types/pricing-plan";

export const plans: PricingPlanData[] = [
  {
    id: 1,
    label: "1-Month Supply",
    priceUsd: 49.00,
    priceEurPerTreatment: 42.95,
    isSelected: false,
  },
  {
    id: 2,
    label: "2-Month Supply",
    priceUsd: 75.95,
    priceEurPerTreatment: 32.95,
    savingsEur: 20,
    isSelected: true,
  },
  {
    id: 3,
    label: "3-Month Supply",
    priceUsd: 49.00,
    priceEurPerTreatment: 23.95,
    savingsEur: 76,
    isSelected: false,
  },
];
