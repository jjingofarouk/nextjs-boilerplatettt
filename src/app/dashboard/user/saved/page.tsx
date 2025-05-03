import SavedOpportunitiesTable from '@/components/dashboard/SavedOpportunitiesTable';
import { getServerSession } from 'next-auth';
import { fetchSavedOpportunities } from '@/lib/api/fetchOpportunities';

export default async function SavedOpportunitiesPage() {
  const session = await getServerSession();

  if (!session) {
    return <div>Please log in to view saved opportunities.</div>;
  }

  const saved = await fetchSavedOpportunities(session.user.id);

  return (
    <div className="min-h-screen p-8">
      <h1 className="text-3xl font-bold">Saved Opportunities</h1>
      <SavedOpportunitiesTable opportunities={saved} />
    </div>
  );
}
