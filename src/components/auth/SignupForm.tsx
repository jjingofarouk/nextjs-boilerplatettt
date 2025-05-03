'use client';

import { useState } from 'react';
import FormInput from '../ui/FormInput';

export default function SignupForm() {
  const [formData, setFormData] = useState({ name: '', email: '', password: '' });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // Call signup API
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-md w-full p-6 bg-white dark:bg-gray-800 rounded shadow">
      <h2 className="text-2xl font-bold mb-4">Sign Up</h2>
      <FormInput
        label="Name"
        type="text"
        name="name"
        value={formData.name}
        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
      />
      <FormInput
        label="Email"
        type="email"
        name="email"
        value={formData.email}
        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
      />
      <FormInput
        label="Password"
        type="password"
        name="password"
        value={formData.password}
        onChange={(e) => setFormData({ ...formData, password: e.target.value })}
      />
      <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded w-full">
        Sign Up
      </button>
    </form>
  );
}
