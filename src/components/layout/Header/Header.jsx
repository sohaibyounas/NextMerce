"use client";
import Image from "next/image";
import NextLogo from "@/assets/next-logo.svg";
import Heart from "@/assets/heart.svg";
import Cart from "@/assets/cart.svg";
import DropdownMenu from "./dropdown";
import { useEffect, useRef, useState } from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import { IoClose } from "react-icons/io5";
import SearchBar from "./search";
import UserDetails from "./user";
import Menu from "./Menu/Menu";
import Link from "next/link";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState("Laptop & PC");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [mobileOpenSection, setMobileOpenSection] = useState(null);
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

  useEffect(() => {
    if (!isMobileMenuOpen) return;
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prevOverflow;
    };
  }, [isMobileMenuOpen]);

  const pagesSubItems = [
    { label: "About Us", href: "/about" },
    { label: "Services", href: "/services" },
    { label: "FAQ", href: "/faq" },
    { label: "Shop with sidebar", href: "/shop-without-sidebar" },
  ];

  const blogsSubItems = [
    { label: "Latest Posts", href: "/blogs/latest" },
    { label: "Categories", href: "/blogs/categories" },
    { label: "Blogs Grid with sidebar", href: "/blogs/BlogGridwithsidebar" },
    { label: "Blog details", href: "/blogs/blogsdetails" },
    {
      label: "Blogs Grid without sidebar",
      href: "/blogs/BlogGridwithoutsidebar",
    },
  ];

  return (
    <div className="sticky top-0 z-10 shadow-md">
      {/* header left side */}
      <div className="bg-white px-2 py-[11px]">
        <div className="flex items-center justify-between">
          {/* logo + filters */}
          <div className="flex items-center justify-between gap-[10px]">
            {/* logo with home route */}
            <div>
              <Link href="/">
                <Image
                  src={NextLogo}
                  alt="Next Logo"
                  width={"100%"}
                  height={"auto"}
                  priority
                />
              </Link>
            </div>

            {/* search bar, dropdowns */}
            <div className="flex items-center justify-center w-full flex-1 min-w-0">
              {/* dropdown */}
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

              {/* search bar */}
              <div className="w-full">
                <SearchBar />
              </div>
            </div>
          </div>

          {/* user details */}
          <div className="hidden lg:block">
            <UserDetails />
          </div>

          {/* mobile menu */}
          <div className="flex items-center gap-3 lg:hidden h-auto">
            {/* wishlist button */}
            <button type="button" className="relative">
              <Image src={Heart} alt="Wishlist" className="w-auto h-auto" />
            </button>
            {/* cart button */}
            <button type="button" className="relative">
              <Image src={Cart} alt="Cart" className="w-auto h-auto" />
            </button>

            {/* mobile menu button */}
            <button
              type="button"
              aria-label="Open menu"
              onClick={() => setIsMobileMenuOpen(true)}
              className="p-2"
            >
              <RxHamburgerMenu className="h-6 w-6 text-[#1C274C]" />
            </button>
          </div>
        </div>
      </div>

      {/* desktop menu */}
      <div className="hidden lg:flex w-full bg-white mx-auto px-4 py-3 border border-t border-b border-[#e5e7eb] items-center justify-between">
        <Menu />
      </div>

      {/* mobile menu drawer */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-50 lg:hidden">
          {/* backdrop */}
          <div
            className="absolute inset-0 bg-black/60 backdrop-blur-sm transition-opacity duration-300"
            onClick={() => setIsMobileMenuOpen(false)}
          />

          {/* sidebar panel */}
          <div className="absolute inset-y-0 right-0 w-[85%] max-w-sm bg-white shadow-2xl flex flex-col transform transition-transform duration-300 ease-in-out">
            {/* sidebar header */}
            <div className="flex-none flex items-center justify-between px-6 py-5 border-b border-[#F2F3F8]">
              <Link href="/" onClick={() => setIsMobileMenuOpen(false)}>
                <Image
                  src={NextLogo}
                  alt="Next Logo"
                  width={140}
                  height={40}
                  priority
                  className="h-8 w-auto"
                />
              </Link>
              <button
                type="button"
                onClick={() => setIsMobileMenuOpen(false)}
                className="p-2 -mr-2 rounded-full hover:bg-gray-100 transition-colors"
              >
                <IoClose className="h-6 w-6 text-[#1C274C]" />
              </button>
            </div>

            {/* scrollable navigation area */}
            <div className="flex-1 overflow-y-auto custom-scrollbar px-6 py-6">
              <nav className="space-y-4">
                <Link
                  href="/Popular"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="flex items-center text-[18px] font-semibold text-[#1C274C] py-2 hover:text-blue-600 transition-colors"
                >
                  Popular
                </Link>
                <Link
                  href="/shop"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="flex items-center text-[18px] font-semibold text-[#1C274C] py-2 hover:text-blue-600 transition-colors"
                >
                  Shop
                </Link>
                <Link
                  href="/contact"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="flex items-center text-[18px] font-semibold text-[#1C274C] py-2 hover:text-blue-600 transition-colors"
                >
                  Contact Us
                </Link>

                {/* pages accordion / dropdown */}
                <div className="border-t border-[#F2F3F8] pt-2">
                  <button
                    type="button"
                    onClick={() =>
                      setMobileOpenSection(
                        mobileOpenSection === "pages" ? null : "pages"
                      )
                    }
                    className="w-full flex items-center justify-between py-3 text-[18px] font-semibold text-[#1C274C] hover:text-blue-600 transition-colors"
                  >
                    <span>Pages</span>
                    <IoIosArrowDown
                      className={`h-5 w-5 transition-transform duration-300 ${
                        mobileOpenSection === "pages" ? "rotate-180" : ""
                      }`}
                    />
                  </button>
                  <div
                    className={`overflow-hidden transition-all duration-300 ease-in-out ${
                      mobileOpenSection === "pages"
                        ? "max-h-96 opacity-100 mt-1"
                        : "max-h-0 opacity-0"
                    }`}
                  >
                    <div className="space-y-3 pl-4 border-l-2 border-[#F2F3F8] ml-1">
                      {pagesSubItems.map((item) => (
                        <Link
                          key={item.href}
                          href={item.href}
                          onClick={() => setIsMobileMenuOpen(false)}
                          className="block text-[15px] font-medium text-[#606882] py-1 hover:text-blue-600 transition-colors"
                        >
                          {item.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>

                {/* blogs accordion */}
                <div className="border-t border-[#F2F3F8] pt-2">
                  <button
                    type="button"
                    onClick={() =>
                      setMobileOpenSection(
                        mobileOpenSection === "blogs" ? null : "blogs"
                      )
                    }
                    className="w-full flex items-center justify-between py-3 text-[18px] font-semibold text-[#1C274C] hover:text-blue-600 transition-colors"
                  >
                    <span>Blogs</span>
                    <IoIosArrowDown
                      className={`h-5 w-5 transition-transform duration-300 ${
                        mobileOpenSection === "blogs" ? "rotate-180" : ""
                      }`}
                    />
                  </button>
                  <div
                    className={`overflow-hidden transition-all duration-300 ease-in-out ${
                      mobileOpenSection === "blogs"
                        ? "max-h-96 opacity-100 mt-1"
                        : "max-h-0 opacity-0"
                    }`}
                  >
                    <div className="space-y-3 pl-4 border-l-2 border-[#F2F3F8] ml-1">
                      {blogsSubItems.map((item) => (
                        <Link
                          key={item.href}
                          href={item.href}
                          onClick={() => setIsMobileMenuOpen(false)}
                          className="block text-[15px] font-medium text-[#606882] py-1 hover:text-blue-600 transition-colors"
                        >
                          {item.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              </nav>
            </div>

            {/* sidebar footer area */}
            <div className="flex-none border-t border-[#F2F3F8] p-6 bg-gray-50/50">
              <div className="space-y-5">
                <Link
                  href="#"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="flex items-center gap-4 group"
                >
                  <div className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-white border border-[#E5E7EB] shadow-sm text-[#1C274C] font-bold group-hover:bg-blue-600 group-hover:text-white group-hover:border-blue-600 transition-all">
                    Account
                  </div>
                  <div className="flex flex-col">
                    <span className="text-[16px] font-bold text-[#1C274C]">
                      Sign In
                    </span>
                    <span className="text-[13px] text-[#606882]">
                      Enter your account
                    </span>
                  </div>
                </Link>

                <Link
                  href="#"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="flex items-center gap-4 group"
                >
                  <div className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-white border border-[#E5E7EB] shadow-sm group-hover:bg-blue-600 group-hover:border-blue-600 transition-all">
                    <Image
                      src={Heart}
                      alt="Wishlist"
                      className="w-5 h-5 group-hover:brightness-0 group-hover:invert transition-all"
                    />
                  </div>
                  <div className="flex flex-col">
                    <span className="text-[16px] font-bold text-[#1C274C]">
                      My Wishlist
                    </span>
                    <span className="text-[13px] text-[#606882]">
                      Saved products
                    </span>
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
