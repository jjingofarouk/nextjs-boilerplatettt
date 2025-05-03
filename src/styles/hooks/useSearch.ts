import { useState, useEffect } from 'react';
import { searchOpportunities } from '@/lib/api/search';
import { Opportunity } from '@/lib/types/opportunity';

export function useSearch(query: string) {
  const [results, setResults] = useState<Opportunity[]>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (query) {
      setLoading(true);
      searchOpportunities(query).then((data) => {
        setResults(data);
        setLoading(false);
      });
    }
  }, [query]);

  return { results, loading };
}
