"use client";

import * as React from "react";
import { useTheme } from "next-themes";
import { HiOutlineSun, HiOutlineMoon } from "react-icons/hi";

export default function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = React.useState(false);

  // Avoid hydration mismatch
  React.useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return <div className="p-2 w-10 h-10" />; // Placeholder to avoid layout shift
  }

  return (
    <div className="flex items-center bg-gray-100 dark:bg-gray-800/50 p-1 rounded-full relative w-20 h-10 select-none">
      {/* Sliding indicator */}
      <div
        className={`absolute top-1 left-1 h-8 w-8 bg-blue-500 dark:bg-blue-600 rounded-full shadow-lg transition-all duration-300 ease-in-out ${
          theme === "dark" ? "translate-x-10" : "translate-x-0"
        }`}
      />

      {/* Light option */}
      <button
        type="button"
        onClick={() => setTheme("light")}
        className={`flex-1 flex items-center justify-center relative z-10 h-full transition-colors duration-300 ${
          theme === "light"
            ? "text-white shadow-sm"
            : "text-gray-400 hover:text-gray-600 dark:hover:text-gray-300"
        }`}
        title="Light Mode"
      >
        <HiOutlineSun className="w-5 h-5" />
      </button>

      {/* Dark option */}
      <button
        type="button"
        onClick={() => setTheme("dark")}
        className={`flex-1 flex items-center justify-center relative z-10 h-full transition-colors duration-300 ${
          theme === "dark"
            ? "text-white"
            : "text-gray-400 hover:text-gray-600 dark:hover:text-gray-300"
        }`}
        title="Dark Mode"
      >
        <HiOutlineMoon className="w-5 h-5" />
      </button>
    </div>
  );
}
