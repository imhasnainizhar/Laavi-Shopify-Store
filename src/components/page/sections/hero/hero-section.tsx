import Image from "next/image";
import HorizontalSpacing from "@/components/ui/spacing/horizontal";
import PricingPlan from "@/components/product/pricing-plan";
import CheckBulletIcon from "@/components/ui/bullets/ckeck-bullet";
import GreenEllipseStatus from "@/components/ui/bullets/green-ellipse";
import HeroProductPreview from "./hero-product-preview";
import SmallPaymentIconsRow from "@/components/ui/cards/small-payment-icons-row";
import HeroRating from "@/components/reviews/hero-rating";
import RetunAndShipPolicyCard from "@/components/ui/cards/return-ship-policy";
import FeaturedCorousel from "@/components/carousels/hero-featured";

export default function HeroSection() {
  return (
    <div
      className="
          pt-[26px]
          text-text-secondary font-normal
          xl:pt-[55px]
        "
    >
      <div
        className="
              flex flex-col
              w-full
              px-4
              items-center gap-[12px]
              md:px-8 md:gap-[20px]
              xl:flex-row xl:px-10 xl:justify-center xl:items-start xl:gap-[40px]
            "
      >
        <div
          className="
                w-full min-w-0 max-w-[380px]
                lg:max-w-[510px]
                xl:max-w-[550px]
              "
        >
          <HeroProductPreview />
        </div>

        <div
          className="
                flex flex-col
                w-full min-w-0 max-w-[380px]
                items-start gap-1.5
                lg:max-w-[510px]
              "
        >
          <div
            className="
                  flex flex-col
                  w-full
                  items-start gap-1.5
                "
          >
            <div
              className="
                    w-full max-w-full
                    lg:max-w-[430px]
                  "
            >
              <HeroRating />
            </div>
            <div
              className="
                    w-full
                  "
            >
              {/*Title*/}
              <h1
                className="
                      text-fluid-xl font-bold text-text-primary
                      lg:text-fluid-2xl
                    "
              >
                Lavvi® Micro-Infusion&nbsp;Hair
                <br />
                Growth&nbsp;Treatment
              </h1>
            </div>
            <div
              className="
                    w-full
                  "
            >
              {/*Description*/}
              <div>
                {/*Paragraph*/}
                <p
                  className="
                        py-[8px]
                        text-fluid-base text-wrap
                        lg:py-[14px]
                      "
                >
                  Clinical-Grade, 24K Gold-plated micro-infusion serum system
                  for visible hair regrowth, stronger roots, and scalp
                  rejuvenation.
                </p>
              </div>
              <div
                className="
                      flex flex-col
                      text-fluid-base
                      gap-[15px]
                    "
              >
                {/*Bullet Point List*/}
                <div
                  className="
                        flex
                        items-center justify-start gap-2
                      "
                >
                  <span>
                    <CheckBulletIcon varient="purple" />
                  </span>
                  <span>Thicker, fuller hair in 10 mins a day</span>
                </div>
                <div
                  className="
                        flex
                        items-center justify-start gap-2
                      "
                >
                  <span>
                    <CheckBulletIcon varient="purple" />
                  </span>
                  <span>Natural & non-invasive</span>
                </div>
                <div
                  className="
                        flex
                        items-center justify-start gap-2
                      "
                >
                  <span>
                    <CheckBulletIcon varient="purple" />
                  </span>
                  <span>Prevent & reverse hair loss</span>
                </div>
                <div
                  className="
                        flex
                        items-center justify-start gap-2
                      "
                >
                  <span>
                    <CheckBulletIcon varient="purple" />
                  </span>
                  <span>90 day results GUARANTEE</span>
                </div>
              </div>
            </div>
            {/* Stock Information */}
            <div
              className="
                    flex
                    w-full max-w-[510px] min-h-[40px]
                    mt-[15px] py-[8px]
                    text-fluid-sm leading-snug text-text-secondary
                    bg-pale-indigo
                    rounded-[8px]
                    items-center justify-center gap-x-3
                  "
            >
              <div
                className="
                      flex
                      min-w-0 w-auto
                      shrink-0 items-center gap-2.5
                    "
              >
                <GreenEllipseStatus />
              </div>
              <div
                className="
                      w-auto
                      leading-0 text-text-primary
                    "
              >
                <strong>In Stock</strong> | Order by <strong>8 PM</strong>,
                Shipped <strong>tomorrow</strong>
              </div>
            </div>
          </div>
          <HorizontalSpacing text="Choose Your Bundle" />
          {/*Hero Product Pricing Plan Section*/}
          <div
            className="
                  w-full
                "
          >
            <div
              className="
                    w-full
                  "
            >
              {/*Pricing Plan*/}
              {/* <PricingPlan /> */}
            </div>
            <div
              className="
                    flex
                    w-full h-[25px]
                    justify-center items-center gap-2.5
                  "
            >
              <span
                className="
                      w-[37px] h-[15px]
                      md:w-[50px] md:h-[20px]
                    "
              >
                <Image
                  src={"/logos/affirm-logo.png"}
                  alt=""
                  width={50}
                  height={20}
                />
              </span>
              <span
                className="
                      text-fluid-sm leading-0
                    "
              >
                Buy now with 4 interest-free installments
              </span>
            </div>
            <div
              className="
                    w-full
                  "
            >
              {/*Payment Icons*/}
              <SmallPaymentIconsRow />
            </div>
            <div
              className="
                    w-full
                  "
            >
              <RetunAndShipPolicyCard />
            </div>
            <div
              className="
                    w-full
                  "
            >
              <FeaturedCorousel />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
