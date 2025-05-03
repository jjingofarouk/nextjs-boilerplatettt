import UserProfileForm from '@/components/dashboard/UserProfileForm';
import { getServerSession } from 'next-auth';

export default async function ProfilePage() {
  const session = await getServerSession();

  if (!session) {
    return <div>Please log in to view your profile.</div>;
  }

  return (
    <div className="min-h-screen p-8">
      <h1 className="text-3xl font-bold">Your Profile</h1>
      <UserProfileForm user={session.user} />
    </div>
  );
}
