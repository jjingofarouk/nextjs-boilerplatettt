import Link from 'next/link';

interface PaginationProps {
  totalPages: number;
  currentPage: number;
}

export default function Pagination({ totalPages, currentPage }: PaginationProps) {
  return (
    <div className="flex gap-2 mt-8 justify-center">
      {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
        <Link
          key={page}
          href={`?page=${page}`}
          className={`px-4 py-2 rounded ${page === currentPage ? 'bg-blue-600 text-white' : 'bg-gray-200'}`}
        >
          {page}
        </Link>
      ))}
    </div>
  );
}
