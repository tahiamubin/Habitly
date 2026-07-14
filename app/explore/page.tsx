import { guides } from "@/data/guides";
import ExploreCard from "../components/ExploreCrad";
import Link from "next/link";
import SortControls from "../components/SortControls";
import SearchBar from "../components/SearchBar ";
import CategoryFilter from "../components/CategoryFilter";


const ITEMS_PER_PAGE = 8;

const DIFFICULTY_ORDER: Record<string, number> = {
  Beginner: 1,
  Intermediate: 2,
  Advanced: 3,
};

type PageProps = {
  searchParams: Promise<{ 
    page?: string; 
    sortBy?: string; 
    order?: string;
    search?: string;
    category?: string; // Add this
  }>;
};

export default async function ExplorePage({ searchParams }: PageProps) {
  const params = await searchParams;

  const currentPage = Math.max(1, Number(params.page) || 1);
  const sortBy = params.sortBy === "difficulty" || params.sortBy === "rating" ? params.sortBy : "";
  const order = params.order === "asc" ? "asc" : "desc";
  const searchQuery = params.search?.toLowerCase() || "";
  const selectedCategory = params.category || ""; // Add this

  // Filter guides based on search query and category
  let filteredGuides = [...guides];
  
  // Apply category filter - ADD THIS
  if (selectedCategory) {
    filteredGuides = filteredGuides.filter(
      (guide) => guide.category === selectedCategory
    );
  }
  
  // Apply search filter
  if (searchQuery) {
    filteredGuides = filteredGuides.filter((guide) => {
      const searchableFields = [
        guide.title,
        guide.category,
        guide.shortDescription,
        guide.fullDescription,
        guide.difficulty,
        ...guide.steps
      ].map(field => field.toLowerCase());
      
      return searchableFields.some(field => field.includes(searchQuery));
    });
  }

  // Sort guides
  const sortedGuides = filteredGuides;

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
    if (searchQuery) {
      qs.set("search", searchQuery);
    }
    if (selectedCategory) { // Add this
      qs.set("category", selectedCategory);
    }
    return `/explore?${qs.toString()}`;
  };

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Search Bar */}
      <SearchBar
        searchQuery={searchQuery} 
        sortBy={sortBy} 
        order={order} 
      />

      {/* Category Filter - ADD THIS */}
      <CategoryFilter 
        selectedCategory={selectedCategory}
        searchQuery={searchQuery}
        sortBy={sortBy}
        order={order}
      />

      {/* Search Results Info */}
      {(searchQuery || selectedCategory) && ( // Update this
        <p className="text-sm text-gray-500 mt-2">
          Found {sortedGuides.length} result{sortedGuides.length !== 1 ? 's' : ''} 
          {searchQuery && ` for "${searchQuery}"`}
          {selectedCategory && ` in ${selectedCategory}`}
        </p>
      )}

      {/* Sort controls */}
      <SortControls sortBy={sortBy} order={order} searchQuery={searchQuery} />

      {/* Guides Grid */}
      {paginatedGuides.length === 0 ? (
        <div className="text-center py-20 bg-white rounded-2xl border border-gray-100 mt-4">
          <div className="text-6xl mb-4">🔍</div>
          <h3 className="text-xl font-semibold text-black mb-2">No guides found</h3>
          <p className="text-gray-600">
            {searchQuery || selectedCategory 
              ? `No results found. Try adjusting your filters.`
              : "No guides available at the moment."}
          </p>
          {(searchQuery || selectedCategory) && (
            <Link
              href="/explore"
              className="inline-block mt-4 px-6 py-2 rounded-xl font-medium text-white transition-all hover:opacity-90"
              style={{ backgroundColor: "#7283ff" }}
            >
              Clear All Filters
            </Link>
          )}
        </div>
      ) : (
        <div className="gap-4 grid lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1 mt-4">
          {paginatedGuides.map((guide) => (
            <ExploreCard key={guide.id} guide={guide} />
          ))}
        </div>
      )}

      {/* Pagination Controls */}
      {totalPages > 1 && (
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-8">
          <div className="flex items-center gap-2">
            {currentPage === 1 ? (
              <span className="px-4 py-2 rounded-lg font-medium opacity-40 bg-gray-100 text-gray-400 cursor-not-allowed">
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

            {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => {
              if (
                page === 1 ||
                page === totalPages ||
                Math.abs(page - currentPage) <= 1
              ) {
                return (
                  <Link
                    key={page}
                    href={pageHref(page)}
                    className={`w-10 h-10 flex items-center justify-center rounded-lg font-medium transition-all ${
                      page === currentPage
                        ? "text-white shadow-md"
                        : "bg-white border border-gray-200 hover:bg-gray-50 text-black"
                    }`}
                    style={page === currentPage ? { backgroundColor: "#7283ff" } : {}}
                  >
                    {page}
                  </Link>
                );
              }

              if (
                (page === 2 && currentPage > 3) ||
                (page === totalPages - 1 && currentPage < totalPages - 2)
              ) {
                return (
                  <span key={page} className="w-10 h-10 flex items-center justify-center text-gray-400">
                    …
                  </span>
                );
              }

              return null;
            })}

            {currentPage === totalPages ? (
              <span className="px-4 py-2 rounded-lg font-medium opacity-40 bg-gray-100 text-gray-400 cursor-not-allowed">
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

          <span className="text-sm text-gray-500">
            Page {currentPage} of {totalPages}
          </span>
        </div>
      )}
    </div>
  );
}