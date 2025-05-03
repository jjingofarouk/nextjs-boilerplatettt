import AdminCreateOpportunityForm from '@/components/dashboard/AdminCreateOpportunityForm';
import { getServerSession } from 'next-auth';

export default async function CreateOpportunityPage() {
  const session = await getServerSession();

  if (!session || session.user.role !== 'ADMIN') {
    return <div>Access denied.</div>;
  }

  return (
    <div className="min-h-screen p-8">
      <h1 className="text-3xl font-bold">Create Opportunity</h1>
      <AdminCreateOpportunityForm />
    </div>
  );
}
