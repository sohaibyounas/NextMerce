import { useState } from "react";
import Blogs from "./Blogs/page";
import Contact from "./Contact/page";
import Pages from "./Pages/page";
import Popular from "./Popular/page";
import Shop from "./Shop/page";

const menuItems = [
  { label: "Popular", component: Popular, href: "#", arrow: false },
  { label: "Shop", component: Shop, href: "#", arrow: false },
  { label: "Contact", component: Contact, href: "#", arrow: false },
  { label: "Pages", component: Pages, href: "#", arrow: true },
  { label: "Blogs", component: Blogs, href: "#", arrow: true },
];

// Sample sub-items for Pages and Blogs dropdowns
const pagesSubItems = [
  { label: "About Us", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "FAQ", href: "/faq" },
  { label: "Shop with sidebar", component: Blogs, href: "#" },
];

const blogsSubItems = [
  { label: "Latest Posts", href: "/blogs/latest" },
  { label: "Categories", href: "/blogs/categories" },
  { label: "Blogs Grid with sidebar", href: "/blogs/BlogGridwithsidebar" },
  { label: "Blog details", href: "/blogs/blogsdetails" },
  { label: "Blogs Grid without sidebar", href: "nlogs/BlogGridwithoutsidebar" },
];

export default function Menu() {
  const [openDropdown, setOpenDropdown] = useState(null);

  // Handle hover to open/close dropdown
  const handleMouseEnter = (label) => {
    if (menuItems.find((item) => item.label === label && item.arrow)) {
      setOpenDropdown(label);
    }
  };

  const handleMouseLeave = () => {
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
                <a
                  href={item.href}
                  className="flex items-center px-2 py-1 text-[#1C274C] hover:text-blue-600 transition duration-200 ease-in-out"
                >
                  {item.label}
                  {item.arrow && (
                    <svg
                      className="ml-1 h-4 w-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  )}
                </a>
                {/* Dropdown for items with arrow */}
                {item.arrow && openDropdown === item.label && (
                  <div
                    className={`absolute left-0 z-10 mt-2 rounded-md bg-white border border-[#e5e7eb] shadow-lg
    ${item.label === "Pages" ? "w-[180px]" : "w-[220px]"}`}
                  >
                    <div className="py-1 px-2">
                      {(item.label === "Pages"
                        ? pagesSubItems
                        : blogsSubItems
                      ).map((subItem) => (
                        <a
                          key={subItem.href}
                          href={subItem.href}
                          className="block w-full px-4 py-2 rounded-md text-sm text-[#606882] font-[400] hover:bg-gray-100 hover:text-gray-900 transition duration-200 ease-in-out"
                        >
                          {subItem.label}
                        </a>
                      ))}
                    </div>
                  </div>
                )}
              </li>
            ))}
          </ul>
        </nav>

        {/* Right Side */}
        <div className="flex items-center space-x-2 select-none">
          <p className="text-[14px] text-[#1C274C] font-[500] hover:text-blue-600">
            Best Selling
          </p>
          <div className="bg-[#F23030] text-white px-2 py-1 rounded-full text-[8px] font-[600]">
            SALE
          </div>
        </div>
      </div>
    </>
  );
}
