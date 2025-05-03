'use client';

import { useState } from 'react';
import FormInput from '../ui/FormInput';

interface UserProfileFormProps {
  user: { name?: string; email: string };
}

export default function UserProfileForm({ user }: UserProfileFormProps) {
  const [name, setName] = useState(user.name || '');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // Update profile API call
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-md mt-4">
      <FormInput label="Name" type="text" name="name" value={name} onChange={(e) => setName(e.target.value)} />
      <FormInput label="Email" type="email" name="email" value={user.email} disabled />
      <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded">
        Save
      </button>
    </form>
  );
}
