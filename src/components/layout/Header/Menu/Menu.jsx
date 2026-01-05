"use client";

import { useState } from "react";
import Link from "next/link";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";

const menuItems = [
  {
    label: "Home",
    href: "/",
    arrow: false,
  },
  {
    label: "Popular",
    href: "/Popular",
    arrow: false,
  },
  { label: "Shop", href: "/shop", arrow: false },
  { label: "Contact Us", href: "/contact", arrow: false },
  { label: "Pages", href: "/pages", arrow: true },
  { label: "Blogs", href: "/blogs", arrow: true },
];

// Sample sub-items for Pages and Blogs dropdowns
const pagesSubItems = [
  { label: "About Us", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "FAQ", href: "/faq" },
  {
    label: "Shop with sidebar",
    href: "/shop-without-sidebar",
  },
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

export default function Menu() {
  const [openDropdown, setOpenDropdown] = useState(null);
  const [timeoutId, setTimeoutId] = useState(null);

  const isInternalHref = (href) =>
    typeof href === "string" && href.startsWith("/");

  // Handle hover to open/close dropdown
  const handleMouseEnter = (label) => {
    // Clear any existing timeout
    if (timeoutId) {
      clearTimeout(timeoutId);
      setTimeoutId(null);
    }

    if (menuItems.find((item) => item.label === label && item.arrow)) {
      setOpenDropdown(label);
    }
  };

  const handleMouseLeave = () => {
    // Add a small delay before closing
    const id = setTimeout(() => {
      setOpenDropdown(null);
    }, 200);
    setTimeoutId(id);
  };

  const handleDropdownItemClick = () => {
    setOpenDropdown(null);
  };

  return (
    <>
      <div className="flex items-center justify-between w-full">
        <nav className="relative">
          {/* left navigation menu */}
          <ul className="flex items-center space-x-4 text-sm font-medium text-foreground">
            {menuItems.map((item) => (
              <li
                key={item.label}
                className="relative custom-bar"
                onMouseEnter={() => handleMouseEnter(item.label)}
                onMouseLeave={handleMouseLeave}
              >
                {isInternalHref(item.href) ? (
                  <Link
                    href={item.href}
                    className="flex items-center px-2 py-1 text-[#1C274C] dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400 transition duration-200 ease-in-out"
                  >
                    {item.label}
                    {item.arrow && <IoIosArrowDown />}
                  </Link>
                ) : (
                  <a
                    href={item.href}
                    className="flex items-center px-2 py-1 text-[#1C274C] dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400 transition duration-200 ease-in-out"
                  >
                    {item.label}
                    {item.arrow && <IoIosArrowUp />}
                  </a>
                )}
                {/* Dropdown for items with arrow */}
                {item.arrow && openDropdown === item.label && (
                  <div
                    className={`absolute left-0 z-10 mt-2 rounded-md bg-white dark:bg-[#1E293B] border border-[#e5e7eb] dark:border-gray-700 shadow-lg ${
                      item.label === "Pages" ? "w-[180px]" : "w-[220px]"
                    }`}
                    onMouseEnter={() => handleMouseEnter(item.label)}
                    onMouseLeave={handleMouseLeave}
                  >
                    <div className="py-1 px-2">
                      {(item.label === "Pages"
                        ? pagesSubItems
                        : blogsSubItems
                      ).map((subItem) =>
                        isInternalHref(subItem.href) ? (
                          <Link
                            key={subItem.href}
                            href={subItem.href}
                            onClick={handleDropdownItemClick}
                            className="block w-full px-4 py-2 rounded-md text-sm text-[#606882] dark:text-gray-400 font-[400] hover:bg-gray-100 dark:hover:bg-gray-800 hover:text-gray-900 dark:hover:text-white transition duration-200 ease-in-out"
                          >
                            {subItem.label}
                          </Link>
                        ) : (
                          <a
                            key={subItem.href}
                            href={subItem.href}
                            onClick={handleDropdownItemClick}
                            className="block w-full px-4 py-2 rounded-md text-sm text-[#606882] font-[400] hover:bg-gray-100 hover:text-gray-900 transition duration-200 ease-in-out"
                          >
                            {subItem.label}
                          </a>
                        )
                      )}
                    </div>
                  </div>
                )}
              </li>
            ))}
          </ul>
        </nav>

        {/* Right Side */}
        <div className="flex items-center space-x-2 select-none">
          <p className="text-[14px] text-[#1C274C] dark:text-gray-200 font-[500] hover:text-blue-600 dark:hover:text-blue-400">
            Best Selling
          </p>
          <div className="bg-[#F23030] uppercase text-white px-2 py-1 rounded-full text-[8px] font-[600]">
            sale
          </div>
        </div>
      </div>
    </>
  );
}
