import Link from "next/link";

interface PaginationProps {
  currentPage: number;
  totalPages: number;
}

function getPageNumbers(currentPage: number, totalPages: number): (number | "ellipsis")[] {
  if (totalPages <= 7) {
    return Array.from({ length: totalPages }, (_, i) => i + 1);
  }

  const pages = new Set<number>([1, totalPages, currentPage, currentPage - 1, currentPage + 1]);
  const sorted = [...pages].filter((p) => p >= 1 && p <= totalPages).sort((a, b) => a - b);

  const result: (number | "ellipsis")[] = [];
  sorted.forEach((page, i) => {
    if (i > 0 && page - sorted[i - 1] > 1) result.push("ellipsis");
    result.push(page);
  });
  return result;
}

export default function Pagination({ currentPage, totalPages }: PaginationProps) {
  if (totalPages <= 1) return null;

  const pageNumbers = getPageNumbers(currentPage, totalPages);

  return (
    <div className="flex items-center justify-between gap-4 px-5 py-3 border-t border-border">
      <p className="text-xs text-muted">
        Page {currentPage} of {totalPages}
      </p>
      <div className="flex items-center gap-1">
        <Link
          href={`?page=${Math.max(1, currentPage - 1)}`}
          aria-disabled={currentPage === 1}
          className={`px-2.5 py-1.5 rounded-lg text-xs font-medium transition-colors ${
            currentPage === 1
              ? "text-muted/40 pointer-events-none"
              : "text-muted hover:text-accent hover:bg-surface-2"
          }`}
        >
          Prev
        </Link>

        {pageNumbers.map((page, i) =>
          page === "ellipsis" ? (
            <span key={`ellipsis-${i}`} className="px-2 text-xs text-muted/50">
              …
            </span>
          ) : (
            <Link
              key={page}
              href={`?page=${page}`}
              className={`min-w-[1.75rem] text-center px-2 py-1.5 rounded-lg text-xs font-medium transition-colors ${
                page === currentPage
                  ? "bg-accent text-white"
                  : "text-muted hover:text-accent hover:bg-surface-2"
              }`}
            >
              {page}
            </Link>
          )
        )}

        <Link
          href={`?page=${Math.min(totalPages, currentPage + 1)}`}
          aria-disabled={currentPage === totalPages}
          className={`px-2.5 py-1.5 rounded-lg text-xs font-medium transition-colors ${
            currentPage === totalPages
              ? "text-muted/40 pointer-events-none"
              : "text-muted hover:text-accent hover:bg-surface-2"
          }`}
        >
          Next
        </Link>
      </div>
    </div>
  );
}
