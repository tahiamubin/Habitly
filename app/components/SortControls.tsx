"use client";

import { useRouter, useSearchParams, usePathname } from "next/navigation";

type Props = {
  sortBy: string;
  order: string;
};

export default function SortControls({ sortBy, order }: Props) {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const updateParams = (updates: Record<string, string | null>) => {
    const params = new URLSearchParams(searchParams.toString());
    Object.entries(updates).forEach(([key, value]) => {
      if (value === null) {
        params.delete(key);
      } else {
        params.set(key, value);
      }
    });
    params.set("page", "1"); // reset to page 1 whenever sort changes
    router.push(`${pathname}?${params.toString()}`);
  };

  const handleSortByChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const value = e.target.value;
    if (!value) {
      updateParams({ sortBy: null, order: null });
    } else {
      updateParams({ sortBy: value, order: order || "desc" });
    }
  };

  const handleOrderChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    updateParams({ order: e.target.value });
  };

  const handleClear = () => {
    updateParams({ sortBy: null, order: null });
  };

  return (
    <div className="flex flex-wrap items-center gap-3">
      <span className="text-sm font-medium text-gray-500">Sort by:</span>

      <select
        value={sortBy}
        onChange={handleSortByChange}
        className="px-3 py-2 rounded-lg border border-gray-200 bg-white text-black text-sm"
      >
        <option value="">None</option>
        <option value="difficulty">Difficulty</option>
        <option value="rating">Rating</option>
      </select>

      {sortBy && (
        <select
          value={order}
          onChange={handleOrderChange}
          className="px-3 py-2 rounded-lg border border-gray-200 bg-white text-black text-sm"
        >
          <option value="desc">High → Low</option>
          <option value="asc">Low → High</option>
        </select>
      )}

      {sortBy && (
        <button
          onClick={handleClear}
          className="px-3 py-2 rounded-lg border border-gray-200 bg-white hover:bg-gray-50 text-black text-sm"
        >
          Clear
        </button>
      )}
    </div>
  );
}