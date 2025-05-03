import { getServerSession } from 'next-auth';
import { redirect } from 'next/navigation';
import { fetchUserApplications } from '@/lib/api';

export default async function UserApplicationsPage() {
  const session = await getServerSession();

  if (!session || !session.user || session.user.role !== 'USER') {
    redirect('/auth/login');
  }

  const applications = await fetchUserApplications(session.user.id);

  return (
    <div className="min-h-screen p-8">
      <h1 className="text-3xl font-bold mb-6">Your Applications</h1>
      {applications.length === 0 ? (
        <p>No applications found.</p>
      ) : (
        <ul>
          {applications.map((app) => (
            <li key={app.id} className="mb-4 p-4 border rounded">
              <h2 className="text-xl">{app.opportunity.title}</h2>
              <p>Status: {app.status}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}