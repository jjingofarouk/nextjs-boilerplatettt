import ApplicationTracker from '@/components/dashboard/ApplicationTracker';
import { getServerSession } from 'next-auth';
import { fetchUserApplications } from '@/lib/api/fetchOpportunities';

export default async function ApplicationsPage() {
  const session = await getServerSession();

  if (!session) {
    return <div>Please log in to view your applications.</div>;
  }

  const applications = await fetchUserApplications(session.user.id);

  return (
    <div className="min-h-screen p-8">
      <h1 className="text-3xl font-bold">Your Applications</h1>
      <ApplicationTracker applications={applications} />
    </div>
  );
}
