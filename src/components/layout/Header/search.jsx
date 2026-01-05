"use client";
import { useState } from "react";
import { BsSearch } from "react-icons/bs";

export default function SearchBar({ showInput = false }) {
  const [query, setQuery] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Search query:", query);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className={`relative flex items-center justify-end sm:justify-start ${
        showInput ? "w-full" : "w-auto sm:w-full"
      } max-w-2xl mx-auto h-[40px]`}
    >
      <input
        type="text"
        placeholder="I am shopping for..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className={`${
          showInput ? "block" : "hidden sm:block"
        } w-full px-4 py-2 pr-12 text-gray-700 dark:text-gray-200 bg-white dark:bg-[#1E293B] border border-[#E5E7EB] dark:border-gray-700 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent placeholder-gray-500 dark:placeholder-gray-400 transition-all duration-200`}
      />
      <button
        type="submit"
        className={`${
          showInput
            ? "absolute right-3 top-1/2 -translate-y-1/2"
            : "sm:absolute sm:right-3 sm:top-1/2 sm:transform sm:-translate-y-1/2"
        } p-2 text-[#343C54] dark:text-gray-300 hover:text-gray-600 dark:hover:text-gray-100 focus:outline-none`}
      >
        <BsSearch className="h-5 w-5" />
      </button>
    </form>
  );
}
