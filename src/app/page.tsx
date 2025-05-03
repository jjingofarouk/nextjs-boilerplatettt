import Image from 'next/image';
import HeroSection from '@/components/ui/HeroSection';
import SearchBar from '@/components/ui/SearchBar';
import OpportunityCard from '@/components/ui/OpportunityCard';
import { fetchOpportunities } from '@/lib/api/fetchOpportunities';

export default async function Home() {
  const opportunities = await fetchOpportunities({ limit: 6 });

  return (
    <div className="min-h-screen p-8">
      <HeroSection />
      <SearchBar />
      <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
        {opportunities.map((opp) => (
          <OpportunityCard key={opp.id} opportunity={opp} />
        ))}
      </section>
    </div>
  );
}
