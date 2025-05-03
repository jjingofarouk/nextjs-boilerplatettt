import Link from 'next/link';
import Image from 'next/image';

export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white p-8">
      <div className="container mx-auto flex flex-col sm:flex-row justify-between items-center">
        <div>
          <Image src="/images/logos/logo.png" alt="Logo" width={120} height={40} />
          <p className="mt-2">© 2025 Opportunities for All</p>
        </div>
        <nav className="flex gap-4 mt-4 sm:mt-0">
          <Link href="/terms" className="hover:underline">Terms</Link>
          <Link href="/privacy" className="hover:underline">Privacy</Link>
          <Link href="/faq" className="hover:underline">FAQ</Link>
        </nav>
      </div>
    </footer>
  );
}
