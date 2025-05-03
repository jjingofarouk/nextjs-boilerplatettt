import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="bg-blue-600 text-white p-4">
      <div className="container mx-auto flex gap-4">
        <Link href="/opportunities" className="hover:underline">All Opportunities</Link>
        <Link href="/opportunities/category/grants" className="hover:underline">Grants</Link>
        <Link href="/opportunities/category/scholarships" className="hover:underline">Scholarships</Link>
      </div>
    </nav>
  );
}
