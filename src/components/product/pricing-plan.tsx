'use client';
import { useEffect, useState } from 'react';
import AddToCartButton from '../ui/buttons/add-to-cart';
import { PricingPlanData } from "@/types/pricing-plan";

export default function PricingPlan() {
  const [plans, setPlans] = useState<PricingPlanData[]>([]);
  const [selectedId, setSelectedId] = useState<number | null>(null);

  // Fetch data from our API
  useEffect(() => {
    fetch('/api/pricing-plans')
      .then((res) => res.json())
      .then((data) => {
        setPlans(data);
        // Default to the 2nd item if it exists, matching your comp
        setSelectedId(data[1]?.id || data[0]?.id);
      });
  }, []);

  return (
    <div className="flex flex-col gap-3 w-full py-4">
      {plans.map((plan) => {
        const isActive = selectedId === plan.id;
        return (
          <div
            key={plan.id}
            onClick={() => setSelectedId(plan.id)}
            className={`flex items-center justify-between p-4 border-2 h-[90px] rounded-xl cursor-pointer transition-all
              ${isActive ? 'border-purple-600 bg-purple-50' : 'border-gray-200 hover:border-purple-300'}`}
          >
            <div className="flex items-center gap-4">
              {/* Custom Radio Circle */}
              <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center 
                ${isActive ? 'border-purple-600' : 'border-gray-300'}`}>
                {isActive && <div className="w-2.5 h-2.5 rounded-full bg-purple-600" />}
              </div>

              <div>
                <h3 className="font-bold text-text-primary text-[22px] pb-1">{plan.label}</h3>
                <p className="text-[15px] text-text-secondary">
                  €{plan.priceEurPerTreatment.toFixed(2)} / treatment 
                  {plan.savingsEur && <span className="ml-1 text-text-secondary">· Save €{plan.savingsEur}</span>}
                </p>
              </div>
            </div>

            <div className={`font-bold text-[22px] ${isActive ? 'text-purple-700' : 'text-purple-600'}`}>
              ${plan.priceUsd.toFixed(2)}
            </div>
          </div>
        );
      })}
      <AddToCartButton plans={plans} selectedId={selectedId}/>
    </div>
  );
}
