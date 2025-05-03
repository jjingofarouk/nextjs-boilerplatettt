export default function BlogPostPage({ params }: { params: { slug: string } }) {
  return (
    <div className="min-h-screen p-8">
      <h1 className="text-3xl font-bold">Blog Post: {params.slug}</h1>
      <p className="mt-4">This is a placeholder blog post.</p>
    </div>
  );
}
