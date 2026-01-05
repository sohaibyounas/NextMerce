"use client";

export default function DropdownMenu({ isOpen, setIsOpen, setSelected }) {
  const categories = ["Laptop & PC", "Electronics", "Clothing", "Books"];

  return (
    <>
      {isOpen && (
        <div className="absolute left-0 z-[100] mt-3 w-64 origin-top-left rounded-xl bg-white dark:bg-[#1E293B] border border-[#F2F3F8] dark:border-gray-700 shadow-[0_10px_40px_rgba(0,0,0,0.08)] py-2 focus:outline-none animate-in fade-in zoom-in-95 duration-200">
          <div className="px-1.5 space-y-0.5">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => {
                  setSelected(category);
                  setIsOpen(false);
                }}
                className="flex w-full px-4 py-2.5 rounded-lg text-sm text-[#4E5566] dark:text-gray-300 font-medium hover:bg-blue-50 dark:hover:bg-blue-900/40 hover:text-blue-600 dark:hover:text-blue-400 transition-all duration-200 text-left"
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
