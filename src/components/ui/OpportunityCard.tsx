import Link from 'next/link';
import Image from 'next/image';
import { Opportunity } from '@/lib/types/opportunity';

interface OpportunityCardProps {
  opportunity: Opportunity;
}

export default function OpportunityCard({ opportunity }: OpportunityCardProps) {
  return (
    <div className="bg-white dark:bg-gray-800 shadow rounded-lg overflow-hidden">
      <Image
        src="/images/placeholders/opportunity-placeholder.jpg"
        alt={opportunity.title}
        width={300}
        height={200}
        className="w-full h-48 object-cover"
      />
      <div className="p-4">
        <h3 className="text-lg font-semibold">{opportunity.title}</h3>
        <p className="text-gray-600 dark:text-gray-300">{opportunity.description.slice(0, 100)}...</p>
        <Link href={`/opportunities/${opportunity.id}`} className="text-blue-600 hover:underline">
          View Details
        </Link>
      </div>
    </div>
  );
}
