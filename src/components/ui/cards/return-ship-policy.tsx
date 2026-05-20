import CheckBulletIcon from "../bullets/ckeck-bullet";
import PackageBoxIcon from "../icons/package-box";

export default function RetunAndShipPolicyCard() {

    return (
        <div className="w-full flex flex-wrap justify-between">
            <div className="text-[12px] lg:text-[16px] w-[45%] h-[30px] lg:h-[37px] flex items-center gap-2 px-4 py-2 font-400 text-text-secondary bg-white shadow-sm">
                <span><CheckBulletIcon varient="default" /></span> 30 Day Guarantee
            </div>
            <div className="text-[12px] lg:text-[16px] w-[52%] h-[30px] lg:h-[37px] flex items-center gap-2 px-4 py-2 font-400 text-text-secondary bg-white shadow-sm">
                <span><PackageBoxIcon /></span> Free worldwide shipping
            </div>
        </div>
    );
};
