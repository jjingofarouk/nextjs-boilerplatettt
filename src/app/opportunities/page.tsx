import SearchBar from '@/components/ui/SearchBar';
import FilterPanel from '@/components/ui/FilterPanel';
import OpportunityCard from '@/components/ui/OpportunityCard';
import Pagination from '@/components/common/Pagination';
import { fetchOpportunities } from '@/lib/api/fetchOpportunities';

export default async function OpportunitiesPage({
  searchParams,
}: {
  searchParams: { page?: string; category?: string; search?: string };
}) {
  const page = parseInt(searchParams.page || '1');
  const opportunities = await fetchOpportunities({
    page,
    category: searchParams.category,
    search: searchParams.search,
  });

  return (
    <div className="min-h-screen p-8">
      <SearchBar />
      <FilterPanel />
      <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
        {opportunities.map((opp) => (
          <OpportunityCard key={opp.id} opportunity={opp} />
        ))}
      </section>
      <Pagination totalPages={10} currentPage={page} />
    </div>
  );
}
