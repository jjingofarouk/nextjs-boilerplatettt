import Link from 'next/link';

export default function CallToAction() {
  return (
    <section className="bg-blue-600 text-white p-8 text-center">
      <h2 className="text-2xl font-bold">Ready to Get Started?</h2>
      <p className="mt-2">Join now to discover opportunities tailored for you.</p>
      <Link href="/auth/signup" className="mt-4 inline-block bg-white text-blue-600 px-6 py-2 rounded">
        Sign Up
      </Link>
    </section>
  );
}
