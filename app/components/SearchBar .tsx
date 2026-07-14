"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

interface SearchBarProps {
  searchQuery: string;
  sortBy: string;
  order: string;
}

const SearchBar = ({ searchQuery, sortBy, order }: SearchBarProps) => {
  const router = useRouter();
  const [searchValue, setSearchValue] = useState(searchQuery);

  const handleSearch = () => {
    const params = new URLSearchParams();
    params.set("page", "1");
    if (sortBy) {
      params.set("sortBy", sortBy);
      params.set("order", order);
    }
    if (searchValue.trim()) {
      params.set("search", searchValue.trim());
    }
    router.push(`/explore?${params.toString()}`);
  };

  const handleClear = () => {
    setSearchValue("");
    const params = new URLSearchParams();
    params.set("page", "1");
    if (sortBy) {
      params.set("sortBy", sortBy);
      params.set("order", order);
    }
    router.push(`/explore?${params.toString()}`);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      handleSearch();
    }
  };

  return (
    <div className="flex gap-2">
      <div className="relative flex-1 max-w-md">
        <input
          type="text"
          value={searchValue}
          onChange={(e) => setSearchValue(e.target.value)}
          onKeyDown={handleKeyDown}
          placeholder="Search guides by title, category, or description..."
          className="w-full px-4 py-3 pl-11 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#7283ff] focus:border-transparent transition-all bg-white text-sm"
        />
        <svg 
          className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400"
          fill="none" 
          stroke="currentColor" 
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
        </svg>
      </div>
      <button
        onClick={handleSearch}
        className="px-6 py-3 rounded-xl font-medium text-white transition-all hover:opacity-90 hover:scale-105 active:scale-95"
        style={{ backgroundColor: "#7283ff" }}
      >
        Search
      </button>
      {searchQuery && (
        <button
          onClick={handleClear}
          className="px-6 py-3 rounded-xl font-medium text-gray-600 hover:bg-gray-100 transition-all border border-gray-200"
        >
          Clear
        </button>
      )}
    </div>
  );
};

export default SearchBar;