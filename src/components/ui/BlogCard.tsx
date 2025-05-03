import Link from 'next/link';

interface BlogCardProps {
  post: { id: number; title: string; slug: string };
}

export default function BlogCard({ post }: BlogCardProps) {
  return (
    <div className="bg-white dark:bg-gray-800 shadow rounded-lg p-4">
      <h3 className="text-lg font-semibold">{post.title}</h3>
      <Link href={`/blog/${post.slug}`} className="text-blue-600 hover:underline">
        Read More
      </Link>
    </div>
  );
}
