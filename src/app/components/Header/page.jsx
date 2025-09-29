"use client";
import Image from "next/image";
import NextLogo from "@/assets/next-logo.svg";
import DropdownMenu from "./dropdown";
import { useEffect, useRef, useState } from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import SearchBar from "./search";
import UserDetails from "./user";
import Menu from "./Menu/page";
import Link from "next/link";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState("Laptop & PC");
  const dropdownRef = useRef(null);

  // Handle click outside to close dropdown
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="sticky top-0 z-10 shadow-md">
      {/* header left side */}
      <div className="bg-white px-2 py-[11px]">
        <div className="flex items-center justify-between">
          {/* logo, dropdown & search */}
          <div className="flex items-center justify-between gap-[10px]">
            {/* Logo */}
            <div>
              <Link href="/">
                <Image
                  src={NextLogo}
                  alt="Next Logo"
                  width={190}
                  height={190}
                  priority
                />
              </Link>
            </div>

            {/* dropdown & search box */}
            <div className="flex items-center justify-center w-full">
              {/* Dropdown Trigger */}
              <div className="relative px-2" ref={dropdownRef}>
                <div
                  onClick={() => setIsOpen(!isOpen)}
                  className="w-[160px] h-[40px] flex items-center justify-between border border-[#E5E7EB] rounded-full px-4 py-1 bg-white text-[#1C274C] text-[14px] font-[500] cursor-pointer transition-colors"
                >
                  <span>
                    <RxHamburgerMenu className="h-4 w-4 flex-shrink-0" />
                  </span>
                  <span className="flex-1 truncate text-sm text-center ">
                    {selected}
                  </span>
                  {isOpen ? (
                    <IoIosArrowUp className="h-4 w-4 flex-shrink-0" />
                  ) : (
                    <IoIosArrowDown className="h-4 w-4 flex-shrink-0" />
                  )}
                </div>
                <DropdownMenu
                  isOpen={isOpen}
                  setIsOpen={setIsOpen}
                  setSelected={setSelected}
                />
              </div>

              {/* searchbar */}
              <div className="w-full">
                <SearchBar />
              </div>
            </div>
          </div>

          {/* user details */}
          <div>
            <UserDetails />
          </div>
        </div>
      </div>

      {/* Updated Menu */}
      <div className="w-full bg-white mx-auto px-4 py-3 border border-t border-b border-[#e5e7eb] flex items-center justify-between">
        <Menu />
      </div>
    </div>
  );
}
