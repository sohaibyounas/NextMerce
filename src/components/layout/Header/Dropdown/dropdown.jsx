"use client";

const dropdownItems = [
  "Shop With Sidebar",
  "Shop Without Sidebar",
  "Checkout",
  "Cart",
  "Wishlist",
  "Sign in",
  "Sign up",
  "Contact",
  "Error",
  "Mail Success",
];

export default function DropdownMenu({ isOpen, setIsOpen, setSelected }) {
  const handleItemClick = (item) => {
    setSelected(item);
    setIsOpen(false);
  };

  return (
    isOpen && (
      <div className="absolute z-10 mt-2 w-48 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5">
        <div className="py-1" role="menu" aria-orientation="vertical">
          {dropdownItems.map((item, index) => (
            <a
              key={index}
              href="#"
              className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:border-t-2 hover:border-blue-600 transition-all duration-300"
              role="menuitem"
              onClick={() => handleItemClick(item)}
            >
              {item}
            </a>
          ))}
        </div>
      </div>
    )
  );
}
