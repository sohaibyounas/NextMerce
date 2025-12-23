"use client";
import { useState } from "react";
import { BsSearch } from "react-icons/bs";

export default function SearchBar() {
  const [query, setQuery] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Search query:", query);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="relative flex w-full md:w-[400px] mx-auto h-[40px]"
    >
      <input
        type="text"
        placeholder="I am shopping for..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className="w-full px-4 py-3 pr-12 text-gray-700 bg-white border border-[#E5E7EB] rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent placeholder-gray-500 transition-all duration-200"
      />
      <button
        type="submit"
        className="absolute right-3 top-1/2 transform -translate-y-1/2 text-[#343C54] hover:text-gray-600 focus:outline-none pr-1"
      >
        <BsSearch className="h-5 w-5" />
      </button>
    </form>
  );
}
