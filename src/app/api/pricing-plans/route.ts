import { NextResponse } from 'next/server';

const pricingData = [
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

export async function GET() {
  return NextResponse.json(pricingData);
}
