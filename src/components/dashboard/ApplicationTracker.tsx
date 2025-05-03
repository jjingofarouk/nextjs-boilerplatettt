import { Application } from '@/lib/types/application';

interface ApplicationTrackerProps {
  applications: Application[];
}

export default function ApplicationTracker({ applications }: ApplicationTrackerProps) {
  return (
    <table className="w-full mt-4 border-collapse">
      <thead>
        <tr className="bg-gray-100 dark:bg-gray-700">
          <th className="p-2 text-left">Opportunity</th>
          <th className="p-2 text-left">Status</th>
          <th className="p-2 text-left">Applied On</th>
        </tr>
      </thead>
      <tbody>
        {applications.map((app) => (
          <tr key={app.id} className="border-b">
            <td className="p-2">{app.opportunity.title}</td>
            <td className="p-2">{app.status}</td>
            <td className="p-2">{app.createdAt.toDateString()}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
