import Link from 'next/link';
import { Opportunity } from '@/lib/types/opportunity';

interface AdminOpportunityTableProps {
  opportunities: Opportunity[];
}

export default function AdminOpportunityTable({ opportunities }: AdminOpportunityTableProps) {
  return (
    <table className="w-full mt-4 border-collapse">
      <thead>
        <tr className="bg-gray-100 dark:bg-gray-700">
          <th className="p-2 text-left">Title</th>
          <th className="p-2 text-left">Category</th>
          <th className="p-2 text-left">Actions</th>
        </tr>
      </thead>
      <tbody>
        {opportunities.map((opp) => (
          <tr key={opp.id} className="border-b">
            <td className="p-2">{opp.title}</td>
            <td className="p-2">{opp.category.name}</td>
            <td className="p-2">
              <Link href={`/dashboard/admin/opportunities/edit/${opp.id}`} className="text-blue-600 hover:underline">
                Edit
              </Link>
              <button className="ml-4 text-red-600 hover:underline">Delete</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
