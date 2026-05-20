import SmallAmexIcon from "@/components/ui/icons/payment/american-express";
import SmallApayIcon from "@/components/ui/icons/payment/apay";
import SmallApplePayIcon from "@/components/ui/icons/payment/apple";
import SmallDiscoverIcon from "@/components/ui/icons/payment/discover";
import SmallGooglePayIcon from "@/components/ui/icons/payment/google";
import SmallMastercardIcon from "@/components/ui/icons/payment/mastercard";
import SmallPayPalIcon from "@/components/ui/icons/payment/paypal";
import SmallVisaIcon from "@/components/ui/icons/payment/visa";
import { ComponentType, SVGProps } from "react";

type SmallPaymentIcons = {
    name: string;
    comp: ComponentType<SVGProps<SVGSVGElement>>;
}

const smallPaymentIcons: SmallPaymentIcons[] = [
    {
        name: "Visa",
        comp: SmallVisaIcon
    },
    {
        name: "American Express",
        comp: SmallAmexIcon
    },
    {
        name: "Mastercard",
        comp: SmallMastercardIcon
    },
    {
        name: "Paypal",
        comp: SmallPayPalIcon
    },
    {
        name: "Discover",
        comp: SmallDiscoverIcon
    },
    {
        name: "Apay",
        comp: SmallApayIcon
    },
    {
        name: "Apple Pay",
        comp: SmallApplePayIcon
    },
    {
        name: "Google Pay",
        comp: SmallGooglePayIcon
    }
]

export default function SmallPaymentIconsRow() {
    return (
        <div className="w-full min-w-0 max-w-[510px] py-4 gap-1 flex justify-center xl:gap-4 items-center border-b border-gray-100">
            {smallPaymentIcons.map((icon, index) => (
                <icon.comp key={index} aria-label={icon.name} width={44} height={30} />
            ))}
        </div>
    );
};