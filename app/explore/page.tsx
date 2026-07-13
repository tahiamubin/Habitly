import { guides } from "@/data/guides";
import ExploreCard from "../components/ExploreCrad";
import Link from "next/link";

const ITEMS_PER_PAGE = 8; // adjust as needed

export default async function ExplorePage({
  searchParams,
}: {
  searchParams: Promise<{ page?: string }>;
}) {
  const params = await searchParams;
  const currentPage = Math.max(1, Number(params.page) || 1);

  const totalPages = Math.ceil(guides.length / ITEMS_PER_PAGE);
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const paginatedGuides = guides.slice(startIndex, startIndex + ITEMS_PER_PAGE);

  return (
    <div className="container mx-auto px-4">
      <div className="gap-4 grid lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1">
        {paginatedGuides.map((guide) => (
          <ExploreCard key={guide.id} guide={guide} />
        ))}
      </div>

      {/* Pagination Controls */}
      {totalPages > 1 && (
        <div className="flex items-center justify-center gap-2 mt-8">
          <Link
            href={`/explore?page=${currentPage - 1}`}
            aria-disabled={currentPage === 1}
            className={`px-4 py-2 rounded-lg font-medium transition-all ${
              currentPage === 1
                ? "pointer-events-none opacity-40 bg-gray-100 text-gray-400"
                : "bg-white border border-gray-200 hover:bg-gray-50 text-black"
            }`}
          >
            Previous
          </Link>

          {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
            <Link
              key={page}
              href={`/explore?page=${page}`}
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

          <Link
            href={`/explore?page=${currentPage + 1}`}
            aria-disabled={currentPage === totalPages}
            className={`px-4 py-2 rounded-lg font-medium transition-all ${
              currentPage === totalPages
                ? "pointer-events-none opacity-40 bg-gray-100 text-gray-400"
                : "bg-white border border-gray-200 hover:bg-gray-50 text-black"
            }`}
          >
            Next
          </Link>
        </div>
      )}
    </div>
  );
}