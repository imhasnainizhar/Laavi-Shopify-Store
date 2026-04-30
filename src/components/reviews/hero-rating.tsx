import StarIcon from "@/components/ui/icons/yellow-star";

export default function HeroRating() {
    return(
        <div className="bg-white flex gap-[12px] items-center px-[15px] py-[10px] rounded-[8px] h-[44px] max-w-[430px]">
            {/* Reviews */}
            <div className="flex items-center shrink-0">
                <StarIcon />
                <StarIcon />
                <StarIcon />
                <StarIcon />
                <StarIcon />
            </div>
            <div className="flex gap-0.5 whitespace-nowrap max-2lg:text-[clamp(10px,1.5vw,16px)] max-md:text-[13px] min-w-0">
                <span className="font-300">
                    Rated 4.9/ 5.0 │
                </span>
                <span className="font-bold"> 1030 customers</span>
            </div>
        </div>
    );
}