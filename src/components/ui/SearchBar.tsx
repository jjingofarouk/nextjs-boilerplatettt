'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function SearchBar() {
  const [query, setQuery] = useState('');
  const router = useRouter();

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    router.push(`/opportunities?search=${query}`);
  };

  return (
    <form onSubmit={handleSearch} className="flex gap-2 max-w-md mx-auto">
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search opportunities..."
        className="flex-1 px-4 py-2 rounded border"
      />
      <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded">
        Search
      </button>
    </form>
  );
}
