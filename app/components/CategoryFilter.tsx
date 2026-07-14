"use client";

import { useRouter } from "next/navigation";

interface CategoryFilterProps {
  selectedCategory: string;
  searchQuery?: string;
  sortBy?: string;
  order?: string;
}

const CategoryFilter = ({ 
  selectedCategory, 
  searchQuery = "", 
  sortBy = "", 
  order = "desc" 
}: CategoryFilterProps) => {
  const router = useRouter();

  const categories = ["Health", "Focus", "Sleep", "Fitness", "Mindfulness"];

  const categoryEmojis: Record<string, string> = {
    Health: "💪",
    Focus: "🎯",
    Sleep: "🌙",
    Fitness: "🏋️",
    Mindfulness: "🧘"
  };

  const handleCategoryClick = (category: string) => {
    const params = new URLSearchParams();
    params.set("page", "1");
    if (sortBy) {
      params.set("sortBy", sortBy);
      params.set("order", order);
    }
    if (searchQuery) {
      params.set("search", searchQuery);
    }
    if (category) {
      params.set("category", category);
    }
    router.push(`/explore?${params.toString()}`);
  };

  return (
    <div className="flex flex-wrap items-center gap-2 mt-4">
      <button
        onClick={() => handleCategoryClick("")}
        className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
          !selectedCategory
            ? "text-white shadow-md"
            : "bg-gray-100 text-gray-600 hover:bg-gray-200"
        }`}
        style={!selectedCategory ? { backgroundColor: "#7283ff" } : {}}
      >
        All
      </button>

      {categories.map((category) => (
        <button
          key={category}
          onClick={() => handleCategoryClick(category)}
          className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 flex items-center gap-1.5 ${
            selectedCategory === category
              ? "text-white shadow-md"
              : "bg-gray-100 text-gray-600 hover:bg-gray-200"
          }`}
          style={selectedCategory === category ? { backgroundColor: "#7283ff" } : {}}
        >
          <span>{categoryEmojis[category] || "📌"}</span>
          {category}
        </button>
      ))}

      {selectedCategory && (
        <button
          onClick={() => handleCategoryClick("")}
          className="px-3 py-2 rounded-full text-sm font-medium text-gray-500 hover:text-red-500 hover:bg-red-50 transition-all duration-200"
        >
          ✕ Clear
        </button>
      )}
    </div>
  );
};

export default CategoryFilter;