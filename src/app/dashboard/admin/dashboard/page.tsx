import { getServerSession } from 'next-auth';

export default async function AdminDashboardPage() {
  const session = await getServerSession();

  if (!session || session.user.role !== 'ADMIN') {
    return <div>Access denied.</div>;
  }

  return (
    <div className="min-h-screen p-8">
      <h1 className="text-3xl font-bold">Admin Dashboard</h1>
      <p>Welcome, {session.user.name}!</p>
    </div>
  );
}
