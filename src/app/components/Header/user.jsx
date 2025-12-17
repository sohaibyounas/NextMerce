import { FaCartShopping } from "react-icons/fa6";
import Image from "next/image";
import User from "@/assets/user.svg";
import Heart from "@/assets/heart.svg";
import Cart from "@/assets/cart.svg";

export default function UserDetails() {
  return (
    <>
      <div className="flex items-center justify-between gap-[5px]">
        {/* user icon + text */}
        <div className="flex items-center justify-between gap-[10px]">
          <div className="border border-gray-200 rounded-full p-2 ">
            <Image src={User} alt="user" className="w-auto h-auto" />
          </div>
          <div>
            <h1 className="text-[#8D93A5] text-[10px] font-[500]">Account</h1>
            <p className="text-[#1C274C] text-[14px] font-[500] hover:text-blue-600">
              Sign In / Register
            </p>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <div>
            <Image src={Heart} alt="heart" className="w-auto h-auto" />
          </div>
          <div>
            <Image src={Cart} alt="cart" className="w-auto h-auto" />
          </div>
        </div>
      </div>
    </>
  );
}
