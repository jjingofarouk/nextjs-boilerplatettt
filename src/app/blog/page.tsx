import BlogCard from '@/components/ui/BlogCard';

export default function BlogPage() {
  // Placeholder blog posts
  const posts = [
    { id: 1, title: 'How to Apply for Scholarships', slug: 'how-to-apply-scholarships' },
  ];

  return (
    <div className="min-h-screen p-8">
      <h1 className="text-3xl font-bold">Blog</h1>
      <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
        {posts.map((post) => (
          <BlogCard key={post.id} post={post} />
        ))}
      </section>
    </div>
  );
}
