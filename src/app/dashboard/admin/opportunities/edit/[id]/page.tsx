import AdminCreateOpportunityForm from '@/components/dashboard/AdminCreateOpportunityForm';
import { getServerSession } from 'next-auth';
import { fetchOpportunityById } from '@/lib/api/fetchOpportunities';

export default async function EditOpportunityPage({ params }: { params: { id: string } }) {
  const session = await getServerSession();

  if (!session || session.user.role !== 'ADMIN') {
    return <div>Access denied.</div>;
  }

  const opportunity = await fetchOpportunityById(params.id);

  return (
    <div className="min-h-screen p-8">
      <h1 className="text-3xl font-bold">Edit Opportunity</h1>
      <AdminCreateOpportunityForm opportunity={opportunity} />
    </div>
  );
}
