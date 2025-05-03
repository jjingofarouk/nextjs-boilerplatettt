interface TestimonialCardProps {
  quote: string;
  author: string;
}

export default function TestimonialCard({ quote, author }: TestimonialCardProps) {
  return (
    <div className="bg-white dark:bg-gray-800 shadow rounded-lg p-6">
      <p className="italic">"{quote}"</p>
      <p className="mt-2 font-semibold">{author}</p>
    </div>
  );
}
