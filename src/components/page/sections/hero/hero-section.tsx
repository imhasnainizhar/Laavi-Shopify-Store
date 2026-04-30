import Image from "next/image";
import HorizontalSpacing from "@/components/ui/spacing/horizontal";
import PricingPlan from "@/components/product/pricing-plan";
import CheckBulletIcon from "@/components/ui/bullets/ckeck-bullet";
import GreenEllipseStatus from "@/components/ui/bullets/green-ellipse";
import HeroProductPreview from "./hero-product-preview";
import SmallPaymentIconsRow from "@/components/ui/cards/small-payment-icons-row";
import HeroRating from "@/components/reviews/hero-rating";
import RetunAndShipPolicyCard from "@/components/ui/cards/return-ship-policy";
import FeaturedCorousel from "@/components/ui/carousels/hero-featured";

export default function HeroSection() {
    return (
        <div className="text-text-secondary pt-[55px] max-md:pt-[20px] font-400">
            <div className="w-full flex justify-center max-md:flex-col max-md:items-center 
            gap-[50px] max-lg:gap-[30px] px-1.5">
                <div className="w-full max-w-[550px] max-xl:max-w-[440px] max-lg:max-w-[360px] max-md:max-w-[380px] max-sm:max-w-[320px]">
                    <HeroProductPreview />
                </div>
                <div className="flex flex-col items-start gap-2 w-full max-w-[510px] max-xl:max-w-[440px] max-lg:max-w-[360px] max-md:max-w-[460px] max-sm:max-w-[320px]">
                    <div className="flex flex-col items-start gap-1.5 w-full">
                        <div>
                            <HeroRating />
                        </div>
                        <div className="w-full">
                            {/*Title*/}
                            <h1 className="font-bold max-2lg:text-[clamp(24px,3vw,38px)] max-lg:text-[clamp(24px,2.5vw,38px)] text-text-primary">
                                Lavvi® Micro-Infusion&nbsp;Hair<br />Growth&nbsp;Treatment
                            </h1>
                        </div>
                        <div className="w-full">
                            {/*Description*/}
                            <div>
                                {/*Paragraph*/}
                                <p className="text-[clamp(14px 15vw, 18px)] leading-normal py-[14px] max-lg:text-[16px]">
                                    Clinical-Grade, 24K Gold-plated micro-infusion serum
                                    system for visible hair regrowth, stronger roots, and
                                    scalp rejuvenation.</p>
                            </div>
                            <div className="text-[clamp(15px 15vw, 18px)] flex flex-col gap-[15px]">
                                {/*Bullet Point List*/}
                                <div className="flex items-center justify-start gap-2">
                                    <span><CheckBulletIcon varient="purple" /></span>
                                    <span>Thicker, fuller hair in 10 mins a day</span>
                                </div>
                                <div className="flex items-center justify-start gap-2">
                                    <span><CheckBulletIcon varient="purple" /></span>
                                    <span>Natural & non-invasive</span>
                                </div>
                                <div className="flex items-center justify-start gap-2">
                                    <span><CheckBulletIcon varient="purple" /></span>
                                    <span>Prevent & reverse hair loss</span>
                                </div>
                                <div className="flex items-center justify-start gap-2">
                                    <span><CheckBulletIcon varient="purple" /></span>
                                    <span>90 day results GUARANTEE</span>
                                </div>
                            </div>

                        </div>
                        {/*Stock Information*/}
                        <div className="flex justify-center items-center gap-2 bg-pale-indigo my-[15px]
                        py-[8px] rounded-[7px] h-[40px] w-full text-[clamp(10px,1.2vw,14px)] leading-0 text-center whitespace-nowrap">
                            <div className="shrink-0"><GreenEllipseStatus /></div>
                            <div className="min-w-0"><span className="text-text-primary font-semibold">In Stock</span></div>
                            <div className="shrink-0">|</div>
                            <div className="min-w-0">Order by <span className="text-text-primary font-semibold">8 PM</span>, Shipped <span className="text-text-primary font-semibold">tomorrow</span></div>
                        </div>
                    </div>
                    <HorizontalSpacing text="Choose Your Bundle" />
                    <div className="w-full">
                        {/*Hero Product Section*/}
                        <div className="w-full">
                            {/*Pricing Plan*/}
                            <PricingPlan />
                        </div>
                        <div className="w-full h-[25px] flex justify-center items-center gap-2.5">
                            <span>
                                <Image src={"/logos/affirm-logo.png"} alt="" width={50} height={20} />
                            </span>
                            <span>
                                Buy now with 4 interest-free installments
                            </span>
                        </div>
                        <div className="w-full">
                            {/*Payment Icons*/}
                            <SmallPaymentIconsRow />
                        </div>
                        <div className="w-full">
                            <RetunAndShipPolicyCard />
                        </div>
                        <div className="w-full">
                            <FeaturedCorousel />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}