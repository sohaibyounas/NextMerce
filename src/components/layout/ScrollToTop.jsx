"use client";

import { useState, useEffect } from "react";
import { FaChevronUp } from "react-icons/fa";

export default function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      setIsVisible(window.scrollY > 120);
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-8 right-8 z-[99]">
      <button
        onClick={scrollToTop}
        aria-label="Scroll to top"
        className="
          group
          h-14 w-14 rounded-full
          backdrop-blur-xl
          bg-gradient-to-tr
          from-blue-500/80 to-purple-600/80
          dark:from-blue-600/60 dark:to-purple-700/60
          shadow-lg shadow-blue-500/30
          dark:shadow-purple-500/20
          hover:scale-110 hover:shadow-xl
          transition-all duration-300
          flex items-center justify-center
        "
      >
        <FaChevronUp
          className="
            text-white
            w-5 h-5
            group-hover:-translate-y-1
            transition-transform duration-300
          "
        />
      </button>
    </div>
  );
}
