import { fetchOpportunityById } from '@/lib/api/fetchOpportunities';

export default async function OpportunityPage({ params }: { params: { id: string } }) {
  const opportunity = await fetchOpportunityById(params.id);

  return (
    <div className="min-h-screen p-8">
      <h1 className="text-3xl font-bold">{opportunity.title}</h1>
      <p className="mt-4">{opportunity.description}</p>
      <p className="mt-2">Deadline: {opportunity.deadline?.toDateString()}</p>
      {opportunity.link && (
        <a href={opportunity.link} className="text-blue-600 hover:underline">
          Apply Now
        </a>
      )}
    </div>
  );
}
