import Link from 'next/link';

export default function Sidebar() {
  return (
    <aside className="bg-gray-100 dark:bg-gray-700 p-4 w-64">
      <h2 className="text-xl font-bold">Dashboard</h2>
      <ul className="mt-4 space-y-2">
        <li><Link href="/dashboard/user/profile" className="hover:text-blue-600">Profile</Link></li>
        <li><Link href="/dashboard/user/saved" className="hover:text-blue-600">Saved</Link></li>
        <li><Link href="/dashboard/user/applications" className="hover:text-blue-600">Applications</Link></li>
      </ul>
    </aside>
  );
}
