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
          <div className="flex items-center justify-between gap-[10px]">
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

            <div className="flex items-center justify-center w-full flex-1 min-w-0">
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

              <div className="w-full">
                <SearchBar />
              </div>
            </div>
          </div>

          <div className="hidden lg:block">
            <UserDetails />
          </div>

          <div className="flex items-center gap-3 lg:hidden">
            <button type="button" className="relative">
              <Image src={Heart} alt="Wishlist" className="w-auto h-auto" />
            </button>
            <button type="button" className="relative">
              <Image src={Cart} alt="Cart" className="w-auto h-auto" />
            </button>
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

      {/* Updated Menu */}
      <div className="hidden lg:flex w-full bg-white mx-auto px-4 py-3 border border-t border-b border-[#e5e7eb] items-center justify-between">
        <Menu />
      </div>

      {/* show menu on dektop (above md) */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-50 lg:hidden">
          {/* close button */}
          <button
            type="button"
            aria-label="Close menu overlay"
            className="absolute inset-0 bg-black/40"
            onClick={() => setIsMobileMenuOpen(false)}
          />

          <div className="absolute inset-y-0 right-0 w-[85%] max-w-sm bg-white shadow-xl">
            <div className="flex items-center justify-between px-5 py-4 border-b border-[#e5e7eb]">
              <div className="flex items-center">
                <Link href="/" onClick={() => setIsMobileMenuOpen(false)}>
                  <Image
                    src={NextLogo}
                    alt="Next Logo"
                    width={170}
                    height={170}
                    priority
                  />
                </Link>
              </div>
              <button
                type="button"
                aria-label="Close menu"
                onClick={() => setIsMobileMenuOpen(false)}
                className="p-2"
              >
                <IoClose className="h-6 w-6 text-[#1C274C]" />
              </button>
            </div>

            {/* navbar */}
            <div className="px-5 py-6">
              <nav className="space-y-6">
                <Link
                  href="/Popular"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="block text-[20px] font-[600] text-[#1C274C]"
                >
                  Popular
                </Link>
                <Link
                  href="/shop"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="block text-[20px] font-[600] text-[#1C274C]"
                >
                  Shop
                </Link>
                <Link
                  href="/contact"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="block text-[20px] font-[600] text-[#1C274C]"
                >
                  Contact
                </Link>

                <div>
                  <button
                    type="button"
                    onClick={() =>
                      setMobileOpenSection(
                        mobileOpenSection === "pages" ? null : "pages"
                      )
                    }
                    className="w-full flex items-center justify-between text-[20px] font-[600] text-[#1C274C]"
                  >
                    <span>Pages</span>
                    <IoIosArrowDown
                      className={`h-5 w-5 transition-transform ${
                        mobileOpenSection === "pages" ? "rotate-180" : ""
                      }`}
                    />
                  </button>
                  {mobileOpenSection === "pages" && (
                    <div className="mt-3 space-y-3 pl-1">
                      {pagesSubItems.map((item) => (
                        <Link
                          key={item.href}
                          href={item.href}
                          onClick={() => setIsMobileMenuOpen(false)}
                          className="block text-[16px] font-[500] text-[#606882]"
                        >
                          {item.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>

                <div>
                  <button
                    type="button"
                    onClick={() =>
                      setMobileOpenSection(
                        mobileOpenSection === "blogs" ? null : "blogs"
                      )
                    }
                    className="w-full flex items-center justify-between text-[20px] font-[600] text-[#1C274C]"
                  >
                    <span>Blogs</span>
                    <IoIosArrowDown
                      className={`h-5 w-5 transition-transform ${
                        mobileOpenSection === "blogs" ? "rotate-180" : ""
                      }`}
                    />
                  </button>
                  {mobileOpenSection === "blogs" && (
                    <div className="mt-3 space-y-3 pl-1">
                      {blogsSubItems.map((item) => (
                        <Link
                          key={item.href}
                          href={item.href}
                          onClick={() => setIsMobileMenuOpen(false)}
                          className="block text-[16px] font-[500] text-[#606882]"
                        >
                          {item.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              </nav>
            </div>

            {/* sign / register */}
            <div className="absolute left-0 right-0 bottom-0 border-t border-[#e5e7eb]">
              <div className="px-5 py-4 space-y-4">
                <Link
                  href="#"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="flex items-center gap-3 text-[18px] font-[600] text-[#1C274C]"
                >
                  <span className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-[#e5e7eb]">
                    <span className="text-[#1C274C]">A</span>
                  </span>
                  <span>Sign In / Register</span>
                </Link>
                <Link
                  href="#"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="flex items-center gap-3 text-[18px] font-[600] text-[#1C274C]"
                >
                  <span className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-[#e5e7eb]">
                    <Image
                      src={Heart}
                      alt="Wishlist"
                      className="w-auto h-auto"
                    />
                  </span>
                  <span>Wishlist</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
