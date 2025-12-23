"use client";

export default function DropdownMenu({ isOpen, setIsOpen, setSelected }) {
  const categories = ["Laptop & PC", "Electronics", "Clothing", "Books"];

  return (
    <>
      {isOpen && (
        <div className="absolute left-0 z-[100] mt-3 w-64 origin-top-left rounded-xl bg-white border border-[#F2F3F8] shadow-[0_10px_40px_rgba(0,0,0,0.08)] py-2 focus:outline-none animate-in fade-in zoom-in-95 duration-200">
          <div className="px-1.5 space-y-0.5">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => {
                  setSelected(category);
                  setIsOpen(false);
                }}
                className="flex w-full px-4 py-2.5 rounded-lg text-sm text-[#4E5566] font-medium hover:bg-blue-50 hover:text-blue-600 transition-all duration-200 text-left"
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
