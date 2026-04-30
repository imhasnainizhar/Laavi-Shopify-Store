import CheckBulletIcon from "../bullets/ckeck-bullet";
import PackageBoxIcon from "../icons/package-box";

export default function RetunAndShipPolicyCard() {
    return (
        <div className="w-full flex flex-wrap justify-start md:justify-between">
            <div className="w-[50%] md:w-[230px] h-[37px] flex items-center gap-2 px-4 py-2 font-400 text-[16px] text-text-secondary bg-white shadow-sm">
                <span><CheckBulletIcon varient="default" /></span> 30 Day Guarantee
            </div>
            <div className="w-[50%] md:w-[270px] h-[37px] flex items-center gap-2 px-4 py-2 font-400 text-[16px] text-text-secondary bg-white shadow-sm">
                <span><PackageBoxIcon /></span> Free worldwide shipping
            </div>
        </div>
    );
};
