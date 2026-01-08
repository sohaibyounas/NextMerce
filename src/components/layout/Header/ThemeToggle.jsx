"use client";

import { useTheme } from "next-themes";
import { HiOutlineSun, HiOutlineMoon } from "react-icons/hi";
import { useState, useEffect } from "react";

export default function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  // Avoid hydration mismatch
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <div className="switch opacity-50">
        <span className="slider"></span>
      </div>
    );
  }

  return (
    <label
      className="switch"
      title={theme === "dark" ? "Switch to Light Mode" : "Switch to Dark Mode"}
    >
      <input
        type="checkbox"
        checked={theme === "dark"}
        onChange={() => setTheme(theme === "dark" ? "light" : "dark")}
      />
      <span className="slider">
        <span
          className={`absolute flex items-center justify-center text-yellow-500 dark:text-blue-200 transition-all duration-400 z-10 w-[1.9em] h-[1.9em] top-1/2 -translate-y-1/2 left-[1.2px] pointer-events-none ${
            theme === "dark" ? "translate-x-[1.5em]" : "translate-x-0"
          }`}
        >
          {theme === "dark" ? (
            <HiOutlineMoon className="w-4 h-4" />
          ) : (
            <HiOutlineSun className="w-4 h-4" />
          )}
        </span>
      </span>
    </label>
  );
}
