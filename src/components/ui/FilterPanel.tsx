'use client';

import { useRouter } from 'next/navigation';
import FormSelect from './FormSelect';

export default function FilterPanel() {
  const router = useRouter();

  const handleCategoryChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    router.push(`/opportunities?category=${e.target.value}`);
  };

  return (
    <div className="bg-gray-100 dark:bg-gray-700 p-4 rounded mt-4">
      <h3 className="text-lg font-semibold">Filters</h3>
      <FormSelect
        label="Category"
        name="category"
        options={[
          { value: '', label: 'All' },
          { value: 'grants', label: 'Grants' },
          { value: 'scholarships', label: 'Scholarships' },
        ]}
        onChange={handleCategoryChange}
      />
    </div>
  );
}
