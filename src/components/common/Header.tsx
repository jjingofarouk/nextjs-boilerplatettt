import Link from 'next/link';
import Image from 'next/image';
import { getServerSession } from 'next-auth';

export default async function Header() {
  const session = await getServerSession();

  return (
    <header className="bg-white dark:bg-gray-800 shadow p-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/">
          <Image src="/images/logos/logo.png" alt="Logo" width={120} height={40} />
        </Link>
        <nav className="flex gap-4">
          <Link href="/opportunities" className="hover:text-blue-600">Opportunities</Link>
          <Link href="/about" className="hover:text-blue-600">About</Link>
          <Link href="/contact" className="hover:text-blue-600">Contact</Link>
          {session ? (
            <>
              <Link href="/dashboard/user/profile" className="hover:text-blue-600">Profile</Link>
              <Link href="/api/auth/signout" className="hover:text-blue-600">Logout</Link>
            </>
          ) : (
            <>
              <Link href="/auth/login" className="hover:text-blue-600">Login</Link>
              <Link href="/auth/signup" className="hover:text-blue-600">Signup</Link>
            </>
          )}
        </nav>
      </div>
    </header>
  );
}
