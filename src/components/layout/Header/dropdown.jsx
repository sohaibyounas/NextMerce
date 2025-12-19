"use client";

export default function DropdownMenu({ isOpen, setIsOpen, setSelected }) {
  const categories = ["Laptop & PC", "Electronics", "Clothing", "Books"];

  return (
    <>
      {isOpen && (
        <div className="absolute right-0 z-10 mt-2 w-[160px] origin-top-right rounded-md bg-white border border-[#e5e7eb] focus:outline-none shadow-lg">
          <div className="py-1 px-2">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => {
                  setSelected(category);
                  setIsOpen(false);
                }}
                className="block w-full px-4 py-2 rounded-md text-sm text-[#606882] text-[14px] font-[400] hover:bg-gray-100 hover:text-gray-900 transition duration-200 ease-in-out"
                role="menuitem"
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      )}
    </>
  );
}
