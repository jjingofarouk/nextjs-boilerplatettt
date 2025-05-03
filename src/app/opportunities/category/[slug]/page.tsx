import OpportunityCard from '@/components/ui/OpportunityCard';
import { fetchOpportunitiesByCategory } from '@/lib/api/fetchOpportunities';

export default async function CategoryPage({ params }: { params: { slug: string } }) {
  const opportunities = await fetchOpportunitiesByCategory(params.slug);

  return (
    <div className="min-h-screen p-8">
      <h1 className="text-3xl font-bold capitalize">{params.slug}</h1>
      <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
        {opportunities.map((opp) => (
          <OpportunityCard key={opp.id} opportunity={opp} />
        ))}
      </section>
    </div>
  );
}
