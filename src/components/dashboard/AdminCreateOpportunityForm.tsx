'use client';

import { useState } from 'react';
import FormInput from '../ui/FormInput';
import FormSelect from '../ui/FormSelect';
import { Opportunity } from '@/lib/types/opportunity';

interface AdminCreateOpportunityFormProps {
  opportunity?: Opportunity;
}

export default function AdminCreateOpportunityForm({ opportunity }: AdminCreateOpportunityFormProps) {
  const [formData, setFormData] = useState({
    title: opportunity?.title || '',
    description: opportunity?.description || '',
    categoryId: opportunity?.categoryId || '',
    deadline: opportunity?.deadline || '',
    link: opportunity?.link || '',
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // Submit form data to API
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-md mt-4">
      <FormInput
        label="Title"
        type="text"
        name="title"
        value={formData.title}
        onChange={(e) => setFormData({ ...formData, title: e.target.value })}
      />
      <FormInput
        label="Description"
        type="textarea"
        name="description"
        value={formData.description}
        onChange={(e) => setFormData({ ...formData, description: e.target.value })}
      />
      <FormSelect
        label="Category"
        name="categoryId"
        options={[{ value: '1', label: 'Grants' }, { value: '2', label: 'Scholarships' }]}
        value={formData.categoryId}
        onChange={(e) => setFormData({ ...formData, categoryId: e.target.value })}
      />
      <FormInput
        label="Deadline"
        type="date"
        name="deadline"
        value={formData.deadline}
        onChange={(e) => setFormData({ ...formData, deadline: e.target.value })}
      />
      <FormInput
        label="Link"
        type="url"
        name="link"
        value={formData.link}
        onChange={(e) => setFormData({ ...formData, link: e.target.value })}
      />
      <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded">
        {opportunity ? 'Update' : 'Create'}
      </button>
    </form>
  );
}
