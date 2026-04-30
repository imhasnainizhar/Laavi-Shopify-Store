import Image from "next/image";
import MenuIcon from "@/components/ui/icons/menu-icon";
import CartIcon from "@/components/ui/icons/cart-icon";

export default function NavBar() {
    return (
        <div className="w-full h-[70px] bg-rich-purple">
            <div className="grid grid-cols-[325fr_350fr_325fr] items-center h-full text-white px-0">
                <div className="flex justify-center">
                    <MenuIcon />
                </div>
                <div className="flex justify-center">
                    <Image src={"/logos/lavvi-logo.png"} alt="" width={115} height={55} />
                </div>
                <div className="flex justify-center">
                    <CartIcon />
                </div>
                <div />
            </div>
        </div>
    );
}