import { guides } from "@/data/guides";
import ExploreCard from "../components/ExploreCrad";

import Link from "next/link";
import SortControls from "../components/SortControls";

const ITEMS_PER_PAGE = 8;

const DIFFICULTY_ORDER: Record<string, number> = {
  Beginner: 1,
  Intermediate: 2,
  Advanced: 3,
};

type PageProps = {
  searchParams: Promise<{ page?: string; sortBy?: string; order?: string }>;
};

export default async function ExplorePage({ searchParams }: PageProps) {
  const params = await searchParams;

  const currentPage = Math.max(1, Number(params.page) || 1);
  const sortBy = params.sortBy === "difficulty" || params.sortBy === "rating" ? params.sortBy : "";
  const order = params.order === "asc" ? "asc" : "desc";

  // never mutate the shared imported array
  const sortedGuides = [...guides];

  if (sortBy === "rating") {
    sortedGuides.sort((a, b) => (order === "asc" ? a.rating - b.rating : b.rating - a.rating));
  } else if (sortBy === "difficulty") {
    sortedGuides.sort((a, b) => {
      const diff = (DIFFICULTY_ORDER[a.difficulty] ?? 0) - (DIFFICULTY_ORDER[b.difficulty] ?? 0);
      return order === "asc" ? diff : -diff;
    });
  }

  const totalPages = Math.max(1, Math.ceil(sortedGuides.length / ITEMS_PER_PAGE));
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const paginatedGuides = sortedGuides.slice(startIndex, startIndex + ITEMS_PER_PAGE);

  const pageHref = (page: number) => {
    const qs = new URLSearchParams();
    qs.set("page", String(page));
    if (sortBy) {
      qs.set("sortBy", sortBy);
      qs.set("order", order);
    }
    return `/explore?${qs.toString()}`;
  };

  return (
    <div className="container mx-auto px-4">
      {/* Sort controls (client component so the <select> can trigger navigation) */}
      <SortControls sortBy={sortBy} order={order} />

      <div className="gap-4 grid lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1 mt-4">
        {paginatedGuides.map((guide) => (
          <ExploreCard key={guide.id} guide={guide} />
        ))}
      </div>

      {totalPages > 1 && (
        <div className="flex items-center justify-center gap-2 mt-8">
          {currentPage === 1 ? (
            <span className="px-4 py-2 rounded-lg font-medium opacity-40 bg-gray-100 text-gray-400">
              Previous
            </span>
          ) : (
            <Link
              href={pageHref(currentPage - 1)}
              className="px-4 py-2 rounded-lg font-medium transition-all bg-white border border-gray-200 hover:bg-gray-50 text-black"
            >
              Previous
            </Link>
          )}

          {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
            <Link
              key={page}
              href={pageHref(page)}
              className={`w-10 h-10 flex items-center justify-center rounded-lg font-medium transition-all ${
                page === currentPage
                  ? "text-white"
                  : "bg-white border border-gray-200 hover:bg-gray-50 text-black"
              }`}
              style={page === currentPage ? { backgroundColor: "#7283ff" } : {}}
            >
              {page}
            </Link>
          ))}

          {currentPage === totalPages ? (
            <span className="px-4 py-2 rounded-lg font-medium opacity-40 bg-gray-100 text-gray-400">
              Next
            </span>
          ) : (
            <Link
              href={pageHref(currentPage + 1)}
              className="px-4 py-2 rounded-lg font-medium transition-all bg-white border border-gray-200 hover:bg-gray-50 text-black"
            >
              Next
            </Link>
          )}
        </div>
      )}
    </div>
  );
}