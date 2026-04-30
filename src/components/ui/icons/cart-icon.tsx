import Image from "next/image";

export default function CartIcon() {
    return(
        <div>
            <Image src={"/icons/cart-icon.png"} alt="" width={30} height={26}/>
        </div>
    );
}