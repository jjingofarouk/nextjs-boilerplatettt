import Link from 'next/link';
import { Opportunity } from '@/lib/types/opportunity';

interface SavedOpportunitiesTableProps {
  opportunities: Opportunity[];
}

export default function SavedOpportunitiesTable({ opportunities }: SavedOpportunitiesTableProps) {
  return (
    <table className="w-full mt-4 border-collapse">
      <thead>
        <tr className="bg-gray-100 dark:bg-gray-700">
          <th className="p-2 text-left">Title</th>
          <th className="p-2 text-left">Category</th>
          <th className="p-2 text-left">Deadline</th>
        </tr>
      </thead>
      <tbody>
        {opportunities.map((opp) => (
          <tr key={opp.id} className="border-b">
            <td className="p-2">
              <Link href={`/opportunities/${opp.id}`} className="hover:text-blue-600">{opp.title}</Link>
            </td>
            <td className="p-2">{opp.category.name}</td>
            <td className="p-2">{opp.deadline?.toDateString()}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
